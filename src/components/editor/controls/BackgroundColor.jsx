import { getHex } from "@/utils/canvas";
import { useEffect, useState } from "react";

const BackgroundColor = ({ value, onChange, onSave }) => {
  const [localValue, setLocalValue] = useState(getHex(value));

  useEffect(() => {
    setLocalValue(getHex(value));
  }, [value]);

  return (
    <div className="control-item">
      <label>{localValue}</label>
      <input
        type="color"
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
        onBlur={() => onSave(localValue)}
      />
    </div>
  );
};

export default BackgroundColor;
