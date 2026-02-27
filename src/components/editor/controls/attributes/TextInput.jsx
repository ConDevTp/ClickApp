import { useEffect, useState } from "react";

const TextInput = ({ value, onChange, onSave }) => {
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
      <input
        type="text"
        className="form-control bg-secondary text-white border-0"
        value={localValue}
        onChange={handleChange}
        onBlur={() => onSave(localValue)}
      />
    </div>
  );
};

export default TextInput;
