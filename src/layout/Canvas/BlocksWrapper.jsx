// import { FieldSchema } from "@/schema/FieldSchema";
// import { toCamelCase } from "@/utils/canvas";
// import BlockRenderer from "./BlockRenderer";

// const BlocksWrapper = ({ CanvasBlocks, SetClickedItem }) => {
//   // Get Style Any Filed Click
//   const handleElementSelect = (e) => {
//     e.preventDefault();
//     const target = e.target.closest("[data-id]");
//     if (!target) return;

//     // New
//     const blockWrapper = e.target.closest("[data-block-id]");
//     const blockId = blockWrapper
//       ? blockWrapper.getAttribute("data-block-id")
//       : null;
//     // New
//     const id = target.getAttribute("data-id");
//     const type = target.getAttribute("data-type");
//     const computedStyles = window.getComputedStyle(target);
//     const allowedFields = FieldSchema[type] || [];
//     const activeNodeStyles = {};

//     allowedFields.forEach((field) => {
//       const jsProperty = toCamelCase(field);
//       if (jsProperty) {
//         activeNodeStyles[field] = computedStyles[jsProperty];
//       }
//     });

//     // Get Attributes Any Filed Click
//     const attributes = {};
//     if (type === "image") {
//       attributes.src = target.src;
//       attributes.alt = target.alt;
//     }
//     if (type === "text") {
//       attributes.content = target.innerText;
//     }

//     // And This Set All Thing We Want To That State And With That State We Have AnyThing We Want
//     SetClickedItem({ blockId, id, type, styles: activeNodeStyles, attributes });
//   };

//   return (
//     <div onClick={handleElementSelect} className=" p-5 w-100 bg-secondary">
//       <BlockRenderer CanvasBlocks={CanvasBlocks} />
//     </div>
//   );
// };

// export default BlocksWrapper;

//
import { setClickedItem } from "@/reducers/builderSlice";
import { FieldSchema } from "@/schema/FieldSchema";
import { toCamelCase } from "@/utils/canvas";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BlockRenderer from "./BlockRenderer";

const BlocksWrapper = () => {
  const dispatch = useDispatch();

  // فقط لیست آیدی‌ها رو می‌گیریم. تغییر استایل یک بلاک، آیدی‌ها رو تغییر نمیده، پس این کامپوننت دیگه رندر نمیشه!
  const blockIds = useSelector(
    (state) => state.builder.canvasBlocks.map((b) => b.instanceId),
    shallowEqual,
  );

  const handleElementSelect = (e) => {
    e.preventDefault();
    const target = e.target.closest("[data-id]");
    if (!target) return;

    const blockWrapper = e.target.closest("[data-block-id]");
    const blockId = blockWrapper
      ? blockWrapper.getAttribute("data-block-id")
      : null;

    const id = target.getAttribute("data-id");
    const type = target.getAttribute("data-type");
    const computedStyles = window.getComputedStyle(target);
    const allowedFields = FieldSchema[type] || [];
    const activeNodeStyles = {};

    allowedFields.forEach((field) => {
      const jsProperty = toCamelCase(field);
      if (computedStyles[jsProperty]) {
        activeNodeStyles[field] = computedStyles[jsProperty];
      }
    });

    const attributes = {};
    if (type === "image") {
      attributes.src = target.src;
      attributes.alt = target.alt;
    }
    if (type === "text") {
      attributes.content = target.innerText;
    }

    dispatch(
      setClickedItem({
        blockId,
        id,
        type,
        styles: activeNodeStyles,
        attributes,
      }),
    );
  };

  return (
    <div onClick={handleElementSelect} className="p-5 w-100 bg-secondary">
      <BlockRenderer blockIds={blockIds} />
    </div>
  );
};

export default BlocksWrapper;
