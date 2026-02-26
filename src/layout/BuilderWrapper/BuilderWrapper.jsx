// import { useState } from "react";
// import EditorCanvas from "../Canvas/Canvas";
// import EditorPanel from "../Sidebar/EditorPanel";

// const BuilderWrapper = () => {
//   const [clickedItem, SetClickedItem] = useState(null);
//   const [CanvasBlocks, SetCanvasBlocks] = useState([]);

//   const UpdateFieldStyle = (fieldName, newVal) => {
//     if (!clickedItem || !clickedItem.blockId || !clickedItem.id) return;

//     SetClickedItem((prev) => ({
//       ...prev,
//       styles: { ...prev.styles, [fieldName]: newVal },
//     }));

//     SetCanvasBlocks((prevBlocks) =>
//       prevBlocks.map((block) => {
//         if (block.instanceId === clickedItem.blockId) {
//           return {
//             ...block,
//             elements: {
//               ...block.elements,
//               [clickedItem.id]: {
//                 ...block.elements[clickedItem.id],
//                 styles: {
//                   ...block.elements[clickedItem.id].styles,
//                   [fieldName]: newVal,
//                 },
//               },
//             },
//           };
//         }
//         return block;
//       }),
//     );
//   };

//   return (
//     <section className="d-flex align-items-stretch">
//       <div className="w-75" style={{ minHeight: "100vh" }}>
//         <EditorCanvas
//           SetClickedItem={SetClickedItem}
//           CanvasBlocks={CanvasBlocks}
//           SetCanvasBlocks={SetCanvasBlocks}
//         />
//       </div>
//       <div className="w-25" style={{ minHeight: "100vh" }}>
//         <EditorPanel
//           clickedItem={clickedItem}
//           handleUpdateStyle={UpdateFieldStyle}
//         />
//       </div>
//     </section>
//   );
// };

// export default BuilderWrapper;
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
