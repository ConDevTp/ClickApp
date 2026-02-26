import { FieldSchema } from "@/schema/FieldSchema";
import { InputComponents } from "@/utils/sidebar";

const EditorPanel = ({ clickedItem, handleUpdateStyle }) => {
  if (!clickedItem) {
    return (
      <div className="w-100 h-100 bg-dark text-white d-flex align-items-center justify-content-center">
        <h4>لطفاً روی یک المان کلیک کنید</h4>
      </div>
    );
  }
  const itemType = clickedItem?.type;
  let itemFields;
  if (itemType) {
    itemFields = FieldSchema[itemType];
    if (!itemFields) return alert("فیلدی برای این ایتم پیدا نشد!");
  }

  return (
    <>
      <div className="bg-info w-100 h-100 overflow-scroll">
        <div className="m-5 p-5">
          {itemFields?.map((fieldName) => {
            const InputComponent = InputComponents[fieldName];

            if (InputComponent) {
              return (
                <InputComponent
                  key={fieldName}
                  value={clickedItem.styles[fieldName]}
                  onChange={(newVal) => handleUpdateStyle(fieldName, newVal)}
                />
              );
            }
          })}
        </div>

        <h4>پنل ادیت:</h4>
        <pre>{JSON.stringify(clickedItem, null, 2)}</pre>
      </div>
    </>
  );
};

export default EditorPanel;
