const Color = ({ value, onChange }) => {
  const safeColor = value?.startsWith("#") ? value : "#000000";

  return (
    <div className="control-item">
      <label>{value}</label>
      <input
        type="color"
        value={safeColor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Color;
