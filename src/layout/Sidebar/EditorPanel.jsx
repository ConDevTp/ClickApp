import { updateElementStyle } from "@/reducers/builderSlice";
import { FieldSchema } from "@/schema/FieldSchema";
import { InputComponents } from "@/utils/sidebar";
import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const ControlWrapper = memo(({ fieldName, blockId, elementId }) => {
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.builder.clickedItem?.styles[fieldName],
  );

  const handleLiveUpdate = (newVal) => {
    const blockEl = document.querySelector(`[data-block-id="${blockId}"]`);
    if (blockEl) {
      const targetEl = blockEl.querySelector(`[data-id="${elementId}"]`);
      if (targetEl) targetEl.style[fieldName] = newVal;
    }
  };

  const handleSave = (newVal) => {
    dispatch(updateElementStyle({ blockId, elementId, fieldName, newVal }));
  };

  const InputComponent = InputComponents[fieldName];
  if (!InputComponent) return null;

  return (
    <InputComponent
      value={value}
      onChange={handleLiveUpdate}
      onSave={handleSave}
    />
  );
});

const EditorPanel = () => {
  const itemInfo = useSelector((state) => {
    if (!state.builder.clickedItem) return null;
    return {
      type: state.builder.clickedItem.type,
      blockId: state.builder.clickedItem.blockId,
      id: state.builder.clickedItem.id,
    };
  }, shallowEqual);

  if (!itemInfo) {
    return (
      <div className="w-100 h-100 bg-dark text-white d-flex align-items-center justify-content-center">
        <h4>لطفاً روی یک المان کلیک کنید</h4>
      </div>
    );
  }

  const itemFields = FieldSchema[itemInfo.type] || [];

  return (
    <div className="bg-info w-100 h-100 overflow-scroll">
      <div className="m-5 p-5">
        {itemFields.map((fieldName) => (
          <ControlWrapper
            key={fieldName}
            fieldName={fieldName}
            blockId={itemInfo.blockId}
            elementId={itemInfo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorPanel;
