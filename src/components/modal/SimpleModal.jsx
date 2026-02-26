const SimpleModal = ({ setIsModalOpen, AddNewBlock }) => {
  return (
    <>
      <div
        className="modal-backdrop fade show"
        onClick={() => setIsModalOpen(false)}
      ></div>

      <div
        className="modal fade show"
        style={{ display: "block" }} // این خط معجزه می‌کند
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">انتخاب بخش‌ها</h5>
              <button
                type="button"
                className="close"
                onClick={() => setIsModalOpen(false)}
              >
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body d-flex flex-wrap gap-2">
              <button
                className="btn btn-primary m-1"
                onClick={() => {
                  AddNewBlock("Header1");
                  setIsModalOpen(false);
                }}
              >
                Header 1
              </button>
              <button
                className="btn btn-primary m-1"
                onClick={() => {
                  AddNewBlock("Header2");
                  setIsModalOpen(false);
                }}
              >
                Header 2
              </button>
              <button
                className="btn btn-primary m-1"
                onClick={() => {
                  AddNewBlock("Hero1");
                  setIsModalOpen(false);
                }}
              >
                Hero 1
              </button>
              <button
                className="btn btn-primary m-1"
                onClick={() => {
                  AddNewBlock("Hero2");
                  setIsModalOpen(false);
                }}
              >
                Hero 2
              </button>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleModal;
