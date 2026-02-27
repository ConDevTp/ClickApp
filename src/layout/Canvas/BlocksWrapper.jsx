import { setClickedItem } from "@/reducers/builderSlice";
import { getElementComputedStyles } from "@/utils/canvas";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BlockRenderer from "./BlockRenderer";

const BlocksWrapper = () => {
  const dispatch = useDispatch();

  const blockIds = useSelector(
    (state) => state.builder.canvasBlocks.map((b) => b.instanceId),
    shallowEqual,
  );

  const handleElementSelect = (e) => {
    e.preventDefault();
    const target = e.target.closest("[data-id]");
    if (!target) return;
    const id = target.getAttribute("data-id");
    const type = target.getAttribute("data-type");

    const blockWrapper = e.target.closest("[data-block-id]");
    const blockId = blockWrapper
      ? blockWrapper.getAttribute("data-block-id")
      : null;

    const activeNodeStyles = getElementComputedStyles(target, type);

    const attributes = {};
    if (type === "image") {
      attributes.src = target.src;
      attributes.alt = target.alt;
    } else if (type === "text") {
      attributes.content = target.innerText;
    } else if (type === "dropdown") {
      attributes.options = Array.from(target.querySelectorAll("option")).map(
        (opt) => opt.value,
      );
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
