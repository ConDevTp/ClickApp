import { memo } from "react";
import { useSelector } from "react-redux";
import { AllSections } from "..";

const RenderBlock = ({ id }) => {
  const data = useSelector((state) =>
    state.builder.canvasBlocks.find((b) => b.instanceId === id),
  );

  if (!data || !data.type) return null;
  const TargetComponent = AllSections[data.type];

  return (
    <div data-block-id={data.instanceId}>
      <TargetComponent data={data} />
    </div>
  );
};

export default memo(RenderBlock);
