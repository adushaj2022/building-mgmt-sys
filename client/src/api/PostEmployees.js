import AXIOS from "./axios";

export const PostEmployee = async (values) => {
  try {
    const response = await AXIOS.post("createEmployee", values);
    return response;
  } catch (err) {
    throw err;
  }
};
