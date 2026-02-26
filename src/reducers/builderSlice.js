import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  canvasBlocks: [],
  clickedItem: null,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setClickedItem: (state, action) => {
      state.clickedItem = action.payload;
    },

    addOrUpdateBlock: (state, action) => {
      const newBlock = action.payload;
      const existingIndex = state.canvasBlocks.findIndex(
        (block) => block.category === newBlock.category,
      );

      if (existingIndex !== -1) {
        state.canvasBlocks[existingIndex] = newBlock;
      } else {
        state.canvasBlocks.push(newBlock);
      }

      state.clickedItem = null;
    },

    updateElementStyle: (state, action) => {
      const { blockId, elementId, fieldName, newVal } = action.payload;

      const targetBlock = state.canvasBlocks.find(
        (block) => block.instanceId === blockId,
      );

      if (targetBlock && targetBlock.elements[elementId]) {
        targetBlock.elements[elementId].styles[fieldName] = newVal;
      }

      if (state.clickedItem && state.clickedItem.id === elementId) {
        state.clickedItem.styles[fieldName] = newVal;
      }
    },
  },
});

export const { setClickedItem, addOrUpdateBlock, updateElementStyle } =
  builderSlice.actions;
export const builderSliceReducer = builderSlice.reducer;
