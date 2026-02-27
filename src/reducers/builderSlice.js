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

    addBlock: (state, action) => {
      state.canvasBlocks.push(action.payload);
      state.clickedItem = null;
    },

    updateBlock: (state, action) => {
      const existingIndex = state.canvasBlocks.findIndex(
        (block) => block.category === action.payload.category,
      );

      if (existingIndex !== -1) {
        state.canvasBlocks[existingIndex] = action.payload;
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

    updateElementAttribute: (state, action) => {
      const { blockId, elementId, fieldName, newVal } = action.payload;

      const targetBlock = state.canvasBlocks.find(
        (block) => block.instanceId === blockId,
      );

      if (targetBlock && targetBlock.elements[elementId]) {
        if (!targetBlock.elements[elementId].attributes) {
          targetBlock.elements[elementId].attributes = {};
        }
        targetBlock.elements[elementId].attributes[fieldName] = newVal;
      }

      if (state.clickedItem && state.clickedItem.id === elementId) {
        if (!state.clickedItem.attributes) {
          state.clickedItem.attributes = {};
        }
        state.clickedItem.attributes[fieldName] = newVal;
      }
    },
  },
});

export const {
  setClickedItem,
  updateBlock,
  addBlock,
  updateElementStyle,
  updateElementAttribute,
} = builderSlice.actions;
export const builderSliceReducer = builderSlice.reducer;
