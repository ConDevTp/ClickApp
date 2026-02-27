import { useEffect, useState } from "react";

const TextArea = ({ value, onChange, onSave }) => {
  const [localValue, setLocalValue] = useState(value || "");

  useEffect(() => {
    setLocalValue(value || "");
  }, [value]);

  const handleChange = (e) => {
    const val = e.target.value;
    setLocalValue(val);
    onChange(val);
  };

  return (
    <div className="control-field">
      <textarea
        className="form-control bg-secondary text-white border-0"
        rows="4"
        value={localValue}
        onChange={handleChange}
        onBlur={() => onSave(localValue)}
        style={{ resize: "vertical" }}
      />
    </div>
  );
};

export default TextArea;
