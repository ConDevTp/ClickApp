// import RenderBlock from "@/components/templates/template_1/RenderBlock/RenderBlock";

// const BlockRenderer = ({ CanvasBlocks }) => {
//   return (
//     <>
//       {CanvasBlocks.map((block) => (
//         <RenderBlock key={block.instanceId} data={block} />
//       ))}
//     </>
//   );
// };

// export default BlockRenderer;

import RenderBlock from "@/components/templates/template_1/RenderBlock/RenderBlock";
import { memo } from "react";

const BlockRenderer = ({ blockIds }) => {
  return (
    <>
      {blockIds.map((id) => (
        <RenderBlock key={id} id={id} />
      ))}
    </>
  );
};

export default memo(BlockRenderer);
