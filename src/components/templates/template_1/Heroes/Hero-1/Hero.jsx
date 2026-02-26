export const Hero = ({ data }) => {
  const getStyles = (key) => {
    const styles = data.elements[key]?.styles || {};
    return {
      color: styles["text color"],
      backgroundColor: styles["background color"],
      fontSize: styles["font size"],
      fontFamily: styles["font selection"],
      lineHeight: styles["font height"],
      ...styles,
    };
  };

  return (
    <header className="header-theme-2">
      <img
        data-id="logo"
        data-type="image"
        src={data.elements.logo.src}
        alt={data.elements.logo.alt}
        style={getStyles("logo")}
      />

      <h1 data-id="title" data-type="text" style={getStyles("title")}>
        {data.elements.title.content}
      </h1>

      <select
        data-id="category_dropdown"
        data-type="dropdown"
        style={getStyles("category_dropdown")}
      >
        {data.elements.category_dropdown.options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Hero;
