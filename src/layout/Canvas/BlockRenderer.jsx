import RenderBlock from "@/components/templates/template_1/RenderBlock/RenderBlock";

const BlockRenderer = ({ CanvasBlocks }) => {
  return (
    <>
      {CanvasBlocks.map((block) => (
        <RenderBlock key={block.instanceId} data={block} />
      ))}
    </>
  );
};

export default BlockRenderer;
