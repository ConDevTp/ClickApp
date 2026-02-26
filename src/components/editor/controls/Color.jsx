// const Color = ({ value, onChange }) => {
//   const safeColor = value?.startsWith("#") ? value : "#000000";

//   return (
//     <div className="control-item">
//       <label>{value}</label>
//       <input
//         type="color"
//         value={safeColor}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Color;
import { useEffect, useState } from "react";

const Color = ({ value, onChange, onSave }) => {
  const [localValue, setLocalValue] = useState(value || "#000000");

  useEffect(() => {
    setLocalValue(value?.startsWith("#") ? value : "#000000");
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

export default Color;
