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
