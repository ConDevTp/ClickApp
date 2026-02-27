import { FieldSchema } from "@/schema/FieldSchema";
import { colord } from "colord";
//-----------
export const getHex = (color) => {
  if (!color) return;
  if (color === "transparent" || color === "rgba(0, 0, 0, 0)")
    return "#ffffff00";
  const c = colord(color);
  return c.alpha(1).toHex();
};
//-----------
export const getElementComputedStyles = (target, type) => {
  const computedStyles = window.getComputedStyle(target);
  const allowedFields = FieldSchema[type] || [];
  const activeNodeStyles = {};

  allowedFields.forEach((field) => {
    let value = computedStyles[field];

    if (field.toLowerCase().includes("color")) {
      value = getHex(value);
    }

    activeNodeStyles[field] = value;
  });

  return activeNodeStyles;
};
//-----------
export const parseUnitValue = (value, defaultUnit = "px") => {
  if (!value) return { num: 0, unit: defaultUnit };

  const match = value.toString().match(/^(-?\d*\.?\d+)(.*)$/);

  return match
    ? { num: Number(match[1]), unit: match[2] || defaultUnit }
    : { num: 0, unit: defaultUnit };
};
