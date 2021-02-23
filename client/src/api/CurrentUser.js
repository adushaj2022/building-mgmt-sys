import AXIOS from "./axios";

export const CurrentUser = async () => {
  try {
    const response = await AXIOS.get("/user");
    if (!response.data?.status) {
      return null;
    }
    return response.data.user;
  } catch (err) {
    throw err;
  }
};
