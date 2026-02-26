// import { AllSections } from "..";

// const RenderBlock = ({ data }) => {
//   // Check If Is Any Data
//   if (!data || !data.type) {
//     return <p>دیتا پیدا نشد</p>;
//   }
//   // Get Component By Data
//   const TargetComponent = AllSections[data.type];
//   return <TargetComponent data={data} />;
// };
// export default RenderBlock;
import { memo } from "react";
import { useSelector } from "react-redux";
import { AllSections } from "..";

const RenderBlock = ({ id }) => {
  // این بلاک فقط وقتی رندر میشه که دیتای خودش توی ریداکس تغییر کنه!
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
