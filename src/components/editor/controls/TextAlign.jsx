// const TextAlign = ({ value, onChange }) => {
//   return (
//     <div className="control-item">
//       <label>{value}</label>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

// export default TextAlign;
import { useEffect, useState } from "react";

const TextAlign = ({ value, onChange, onSave }) => {
  const [localValue, setLocalValue] = useState(value || "right");

  useEffect(() => {
    setLocalValue(value || "right");
  }, [value]);

  return (
    <div className="control-item">
      <label>{localValue}</label>
      <input
        type="text"
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
        onBlur={() => onSave(localValue)}
        onKeyDown={(e) => e.key === "Enter" && onSave(localValue)}
      />
    </div>
  );
};

export default TextAlign;
