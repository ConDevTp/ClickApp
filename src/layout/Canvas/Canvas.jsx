import SimpleModal from "@/components/modal/SimpleModal";
import {
  AllSections,
  AllSectionsData,
} from "@/components/templates/template_1";
import { addBlock, updateBlock } from "@/reducers/builderSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlocksWrapper from "./BlocksWrapper";

const EditorCanvas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const canvasBlocks = useSelector((state) => state.builder.canvasBlocks);
  const dispatch = useDispatch();

  const AddNewBlock = (ItemName) => {
    const data = AllSectionsData[ItemName];
    if (!data || !AllSections[data.type]) {
      alert("مشکلی در خواندن کامپوننت یا دیتا آن به وجود آمده است.");
      return;
    }
    const copyData = structuredClone(data);
    copyData.instanceId = nanoid();

    // Check Item With This Category Is Exists So Replace It Or Not Add It.
    const exists = canvasBlocks.some(
      (block) => block.category === copyData.category,
    );
    if (exists) {
      const isConfirmed = window.confirm(
        "این مورد وجود دارد می خوای جایگزین کنی؟ همه ی استایل ها و موارد انجام شده میپرد.",
      );
      if (isConfirmed) {
        dispatch(updateBlock(copyData));
      }
    } else {
      dispatch(addBlock(copyData));
    }

    setIsModalOpen(false);
  };

  return (
    <div
      className="w-100 h-100 d-flex flex-column align-items-end overflow-y-scroll"
      style={{ maxHeight: "100vh" }}
    >
      <BlocksWrapper />
      {isModalOpen && (
        <SimpleModal
          setIsModalOpen={setIsModalOpen}
          AddNewBlock={AddNewBlock}
        />
      )}
      <button
        className="btn btn-dark mt-4 w-25 mx-4"
        onClick={() => setIsModalOpen(true)}
      >
        اضافه کردن بخش
      </button>
    </div>
  );
};

export default EditorCanvas;
