import AXIOS from "./axios";

export const PostUser = async (values) => {
  try {
    const response = await AXIOS.post("/user/register", values);
    return response;
  } catch (err) {
    throw err;
  }
};
