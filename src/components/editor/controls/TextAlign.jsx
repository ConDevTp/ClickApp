const TextAlign = ({ value, onChange }) => {
  return (
    <div className="control-item">
      <label>{value}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextAlign;
