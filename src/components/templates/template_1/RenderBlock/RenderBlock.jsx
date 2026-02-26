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

import { AllSections } from "..";

const RenderBlock = ({ data }) => {
  if (!data || !data.type) return <p>دیتا پیدا نشد</p>;
  const TargetComponent = AllSections[data.type];

  return (
    // این div اضافه شد تا آیدی بلاک رو نگه داره
    <div data-block-id={data.instanceId}>
      <TargetComponent data={data} />
    </div>
  );
};
export default RenderBlock;
