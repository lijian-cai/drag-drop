export const arrayFindElementById = (array, id) =>
  array.find((element) => element.id === id);

export const updateArrayOfObj = (array, index, newObj) => {
  return [...array.slice(0, index - 1), newObj, ...array.slice(index)];
};
