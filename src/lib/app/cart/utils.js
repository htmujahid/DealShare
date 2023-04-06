export const isItemAlreadyIncluded = (itemsArray, item) => {
  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i]._id === item._id) {
      return true;
    }
  }

  return false;
};
