import { parseUnitValue } from "@/utils/canvas";

const FontSize = ({ value, onChange }) => {
  const { num, unit } = parseUnitValue(value, "px");

  return (
    <div className="control-item">
      <label>سایز: {value}</label>

      <div className="d-flex gap-2">
        <input
          type="range"
          min="10"
          max="100"
          value={num}
          onChange={(e) => onChange(`${e.target.value}${unit}`)}
        />

        <select
          className="form-select form-select-sm w-auto"
          value={unit}
          onChange={(e) => onChange(`${num}${e.target.value}`)}
        >
          <option value="px">px</option>
          <option value="rem">rem</option>
          <option value="em">em</option>
          <option value="%">%</option>
        </select>
      </div>
    </div>
  );
};

export default FontSize;
