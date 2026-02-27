import { updateElementAttribute } from "@/reducers/builderSlice";
import { useDispatch } from "react-redux";

export const useInlineTextEditor = () => {
  const dispatch = useDispatch();

  // Paste as plain text only
  const handlePaste = (e) => {
    const target = e.target;
    if (target.hasAttribute("contenteditable")) {
      e.preventDefault();
      const text = (e.originalEvent || e).clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    }
  };

  // Handle Enter and Esc keys
  const handleKeyDown = (e) => {
    const target = e.target;
    if (target.hasAttribute("contenteditable")) {
      if (e.key === "Escape") {
        target.blur();
        return;
      }
      if (e.key === "Enter") {
        const tagName = target.tagName.toLowerCase();
        const singleLineTags = [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "span",
          "a",
          "button",
        ];
        if (singleLineTags.includes(tagName)) {
          e.preventDefault();
          target.blur();
        }
      }
    }
  };

  // Save text to Redux on exit
  const handleTextBlur = (e) => {
    const target = e.target;
    if (target.hasAttribute("contenteditable")) {
      const id = target.getAttribute("data-id");
      const blockWrapper = target.closest("[data-block-id]");
      const blockId = blockWrapper
        ? blockWrapper.getAttribute("data-block-id")
        : null;

      let newVal = target.innerText.trim();
      if (newVal === "") {
        newVal = "متن جدید";
        target.innerText = newVal;
      }

      if (blockId && id) {
        dispatch(
          updateElementAttribute({
            blockId,
            elementId: id,
            fieldName: "content",
            newVal,
          }),
        );
      }

      target.removeAttribute("contenteditable");
      window.getSelection().removeAllRanges();
    }
  };

  // Enable text editing on double click
  const handleDoubleClick = (e) => {
    const target = e.target.closest('[data-type="text"]');
    if (target) {
      target.setAttribute("contenteditable", "true");
      target.setAttribute("spellcheck", "false");
      target.focus();
      document.execCommand("selectAll", false, null);
    }
  };

  return {
    handlePaste,
    handleKeyDown,
    handleTextBlur,
    handleDoubleClick,
  };
};
