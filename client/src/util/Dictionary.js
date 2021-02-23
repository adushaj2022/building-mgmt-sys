export const getApartments = (arr) => {
  let set = new Set();
  arr.forEach(({ apartment }) => {
    set.add(apartment);
  });
  return [...set];
};
