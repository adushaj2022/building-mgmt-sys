export const ApartmentLetters = (arr) => {
  let set = new Set();
  for (let index = 0; index < arr.length; index++) {
    set.add(arr[index][0]);
  }
  return [...set];
};
