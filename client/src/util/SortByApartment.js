export const sortByAppartment = (arr) => {
  arr?.sort((a, b) => {
    if (a?.apartment > b?.apartment) return 1;
    if (a?.apartment < b?.apartment) return -1;

    return 0;
  });
};
