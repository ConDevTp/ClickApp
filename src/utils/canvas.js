export const updateBlocks = (setSiteBlocks, copyData) => {
  setSiteBlocks((prevBlocks) => {
    const existingBlockIndex = prevBlocks.findIndex(
      (block) => block.category === copyData.category,
    );

    if (existingBlockIndex !== -1) {
      // Ask User What Want Do
      const userConfirmed = window.confirm(
        "شما از قبل این بخش را دارید. آیا مطمئن هستید که می‌خواهید جایگزین شود؟ تمام تغییرات آن پاک خواهد شد.",
      );

      if (userConfirmed) {
        const newBlocks = [...prevBlocks];
        newBlocks[existingBlockIndex] = copyData;
        return newBlocks;
      } else {
        return prevBlocks;
      }
    }

    return [...prevBlocks, copyData];
  });
};
//
export const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};
//
export const parseUnitValue = (value, defaultUnit = "px") => {
  if (!value) return { num: 0, unit: defaultUnit };

  const match = value.toString().match(/^(-?\d*\.?\d+)(.*)$/);

  return match
    ? { num: Number(match[1]), unit: match[2] || defaultUnit }
    : { num: 0, unit: defaultUnit };
};
