import AXIOS from "./axios";

export const LoginUser = async (values) => {
  try {
    const response = await AXIOS.post("/user/login", values);
    return response;
  } catch (err) {
    throw err;
  }
};
