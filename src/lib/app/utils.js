export const isEmpty = (value) => {
  if (typeof (value === "array")) {
    return value.length === 0;
  }
  if (!value || value === "") return true;
};
