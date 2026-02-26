// import SimpleModal from "@/components/modal/SimpleModal";
// import {
//   AllSections,
//   AllSectionsData,
// } from "@/components/templates/template_1";
// import { updateBlocks } from "@/utils/canvas";
// import { nanoid } from "@reduxjs/toolkit";
// import { useState } from "react";
// import BlocksWrapper from "./BlocksWrapper";

// const EditorCanvas = ({ SetClickedItem, SetCanvasBlocks, CanvasBlocks }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const AddNewBlock = (ItemName) => {
//     // Get Data
//     const data = AllSectionsData[ItemName];
//     if (!data || !AllSections[data.type]) {
//       alert("مشکلی در خواندن کامپوننت یا دیتا آن به وجود آمده است.");
//       return;
//     }

//     // Copy Data
//     const copyData = JSON.parse(JSON.stringify(data));
//     copyData.instanceId = nanoid();

//     // Check If We Have That Category Oor Its New
//     updateBlocks(SetCanvasBlocks, copyData);
//     // Reset Panel To User Click And Select New Item After Change
//     SetClickedItem(null);
//     // Close Modal
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-100 h-100  d-flex flex-column align-items-end">
//       <BlocksWrapper
//         CanvasBlocks={CanvasBlocks}
//         SetClickedItem={SetClickedItem}
//       />
//       {/* Show Modal */}
//       {isModalOpen && (
//         <SimpleModal
//           setIsModalOpen={setIsModalOpen}
//           AddNewBlock={AddNewBlock}
//         />
//       )}
//       {/* Add  New Item */}
//       <button
//         className="btn btn-dark mt-4 w-25 mx-4"
//         onClick={() => setIsModalOpen(true)}
//       >
//         اضافه کردن بخش
//       </button>
//     </div>
//   );
// };

// export default EditorCanvas;

import SimpleModal from "@/components/modal/SimpleModal";
import {
  AllSections,
  AllSectionsData,
} from "@/components/templates/template_1";
import { addOrUpdateBlock } from "@/reducers/builderSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BlocksWrapper from "./BlocksWrapper";

const EditorCanvas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const AddNewBlock = (ItemName) => {
    const data = AllSectionsData[ItemName];
    if (!data || !AllSections[data.type]) {
      alert("مشکلی در خواندن کامپوننت یا دیتا آن به وجود آمده است.");
      return;
    }

    const copyData = JSON.parse(JSON.stringify(data));
    copyData.instanceId = nanoid();

    dispatch(addOrUpdateBlock(copyData));
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-100 h-100 d-flex flex-column align-items-end overflow-y-scroll"
      style={{ maxHeight: "100vh" }}
    >
      <BlocksWrapper />
      {isModalOpen && (
        <SimpleModal
          setIsModalOpen={setIsModalOpen}
          AddNewBlock={AddNewBlock}
        />
      )}
      <button
        className="btn btn-dark mt-4 w-25 mx-4"
        onClick={() => setIsModalOpen(true)}
      >
        اضافه کردن بخش
      </button>
      <button
        className="btn btn-danger mt-4 w-25 mx-4"
        onClick={() => {
          for (let i = 0; i < 20; i++) {
            const data = JSON.parse(JSON.stringify(AllSectionsData["Header1"]));
            data.instanceId = nanoid();
            data.category = `header_stress_${nanoid()}`;
            dispatch(addOrUpdateBlock(data));
          }
        }}
      >
        تست استرس (۱۰۰ هدر)
      </button>
    </div>
  );
};

export default EditorCanvas;
