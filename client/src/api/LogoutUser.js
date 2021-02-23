import AXIOS from "./axios";

export const LogoutUser = async () => {
  try {
    const status = await AXIOS.post("/user/logout");
    return status;
  } catch (err) {
    throw err;
  }
};
