import AXIOS from "./axios";

export const DeleteEmployee = async (id) => {
  try {
    await AXIOS.delete(`delete/${id}`);
    return true;
  } catch (err) {
    throw err;
  }
};
