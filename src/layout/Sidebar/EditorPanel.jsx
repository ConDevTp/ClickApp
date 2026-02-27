import {
  updateElementAttribute,
  updateElementStyle,
} from "@/reducers/builderSlice";
import { AttributeSchema } from "@/schema/AttributeSchema";
import { FieldSchema } from "@/schema/FieldSchema";
import { InputComponents } from "@/utils/sidebar";
import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const ControlWrapper = memo(
  ({ fieldName, blockId, elementId, controlType }) => {
    const dispatch = useDispatch();

    // انتخاب مقدار بر اساس نوع (Style یا Attribute)
    const value = useSelector(
      (state) => state.builder.clickedItem?.[controlType]?.[fieldName] || "",
    );
    const handleLiveUpdate = (newVal) => {
      const targetEl = document.querySelector(
        `[data-block-id="${blockId}"] [data-id="${elementId}"]`,
      );
      if (!targetEl) return;

      if (controlType === "styles") {
        targetEl.style[fieldName] = newVal;
      } else {
        if (fieldName === "content") targetEl.innerText = newVal;
        else if (fieldName === "src") targetEl.src = newVal;
        else if (fieldName === "alt") targetEl.alt = newVal;
        else if (fieldName === "options") {
          // به جای دستکاری مستقیم DOM، تغییرات لیست رو مستقیم به ریداکس می‌دیم
          // تا خود ری‌اکت بدون ارور تگ‌های option رو کم و زیاد کنه
          dispatch(
            updateElementAttribute({ blockId, elementId, fieldName, newVal }),
          );
        }
      }
    };

    const handleSave = (newVal) => {
      if (controlType === "styles") {
        dispatch(updateElementStyle({ blockId, elementId, fieldName, newVal }));
      } else {
        dispatch(
          updateElementAttribute({ blockId, elementId, fieldName, newVal }),
        );
      }
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
  },
);

const EditorPanel = () => {
  const itemInfo = useSelector((state) => {
    if (!state.builder.clickedItem) return null;
    return {
      type: state.builder.clickedItem.type,
      blockId: state.builder.clickedItem.blockId,
      id: state.builder.clickedItem.id,
    };
  }, shallowEqual);

  if (!itemInfo)
    return <div className="p-5 text-white bg-black">المان را انتخاب کنید</div>;

  const styles = FieldSchema[itemInfo.type] || [];
  const attributes = AttributeSchema[itemInfo.type] || [];

  return (
    <div className="editor-sidebar">
      <div className="section">
        <h5>محتوا</h5>
        {attributes.map((field) => (
          <ControlWrapper
            key={field}
            fieldName={field}
            controlType="attributes"
            blockId={itemInfo.blockId}
            elementId={itemInfo.id}
          />
        ))}
      </div>

      <hr />

      <div className="section">
        <h5>تنظیمات ظاهری</h5>
        {styles.map((field) => (
          <ControlWrapper
            key={field}
            fieldName={field}
            controlType="styles"
            blockId={itemInfo.blockId}
            elementId={itemInfo.id}
          />
        ))}
      </div>
    </div>
  );
};
export default EditorPanel;
