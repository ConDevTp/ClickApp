import EditorCanvas from "../Canvas/Canvas";
import EditorPanel from "../Sidebar/EditorPanel";

const BuilderWrapper = () => {
  return (
    <section className="d-flex align-items-stretch">
      <div className="w-75" style={{ minHeight: "100vh" }}>
        <EditorCanvas />
      </div>
      <div className="w-25" style={{ minHeight: "100vh" }}>
        <EditorPanel />
      </div>
    </section>
  );
};

export default BuilderWrapper;
