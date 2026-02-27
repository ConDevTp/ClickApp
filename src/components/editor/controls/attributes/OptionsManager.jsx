import { useEffect, useState } from "react";

const OptionsManager = ({ value, onChange, onSave }) => {
  // value اینجا یک آرایه است: ["گزینه ۱", "گزینه ۲"]
  const [localOptions, setLocalOptions] = useState(value || []);

  useEffect(() => {
    setLocalOptions(value || []);
  }, [value]);

  const updateOption = (index, newVal) => {
    const updated = [...localOptions];
    updated[index] = newVal;
    setLocalOptions(updated);
    onChange(updated); // آپدیت زنده در DOM
  };

  const addOption = () => {
    const updated = [...localOptions, "گزینه جدید"];
    setLocalOptions(updated);
    onChange(updated);
    onSave(updated); // چون مورد جدید است، مستقیم ذخیره می‌کنیم
  };

  const removeOption = (index) => {
    const updated = localOptions.filter((_, i) => i !== index);
    setLocalOptions(updated);
    onChange(updated);
    onSave(updated);
  };

  return (
    <div className="options-manager">
      {localOptions.map((opt, index) => (
        <div key={index} className="d-flex mb-2">
          <input
            type="text"
            className="form-control form-control-sm bg-dark text-white"
            value={opt}
            onChange={(e) => updateOption(index, e.target.value)}
            onBlur={() => onSave(localOptions)}
          />
          <button
            className="btn btn-sm btn-danger ms-1"
            onClick={() => removeOption(index)}
          >
            ×
          </button>
        </div>
      ))}
      <button
        className="btn btn-sm btn-outline-light w-100 mt-2"
        onClick={addOption}
      >
        + اضافه کردن گزینه
      </button>
    </div>
  );
};

export default OptionsManager;
