export function createPages(pageNumber, totalPages, setPages) {
  if (totalPages > 5) {
    if (pageNumber === 1) {
      setPages([pageNumber, pageNumber + 1, "...", totalPages - 1, totalPages]);
    } else if (pageNumber >= totalPages - 2) {
      setPages([1, 2, "...", totalPages - 2, totalPages - 1, totalPages]);
    } else {
      setPages([
        pageNumber - 1,
        pageNumber,
        pageNumber + 1,
        "...",
        totalPages - 1,
        totalPages,
      ]);
    }
  } else {
    setPages(createNumberArray(1, totalPages));
  }
}

export function createNumberArray(startPosition, endPosition) {
  if (startPosition === endPosition) {
    return [startPosition];
  }

  let numberArray = [];

  for (let i = startPosition; i <= endPosition; i++) {
    numberArray.push(i);
  }

  return numberArray;
}
