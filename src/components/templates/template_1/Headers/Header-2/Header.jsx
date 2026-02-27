import "./index.css";

export const Header = ({ data }) => {
  const getStyles = (key) => data.elements[key]?.styles || {};
  const getAttr = (key) => data.elements[key]?.attributes || {};

  return (
    <header className="header-theme-1">
      <img
        data-id="logo"
        data-type="image"
        src={getAttr("logo").src}
        alt={getAttr("logo").alt}
        style={getStyles("logo")}
      />

      <h1 data-id="title" data-type="text" style={getStyles("title")}>
        {getAttr("title").content}
      </h1>

      <select
        data-id="category_dropdown"
        data-type="dropdown"
        style={getStyles("category_dropdown")}
      >
        {(getAttr("category_dropdown").options || []).map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
