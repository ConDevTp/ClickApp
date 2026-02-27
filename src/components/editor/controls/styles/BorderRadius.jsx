import { useEffect, useState } from "react";

const BorderRadius = ({ value, onChange, onSave }) => {
  const [localValue, setLocalValue] = useState(parseInt(value));

  useEffect(() => {
    setLocalValue(parseInt(value));
  }, [value]);

  const handleChange = (e) => {
    const newVal = e.target.value;
    setLocalValue(newVal);
    onChange(`${newVal}px`);
  };

  return (
    <div className="control-item">
      <label>گردی گوشه: {localValue}px</label>
      <input
        type="range"
        min="0"
        max="100"
        value={localValue}
        onChange={handleChange}
        onMouseUp={() => onSave(`${localValue}px`)}
      />
    </div>
  );
};

export default BorderRadius;
