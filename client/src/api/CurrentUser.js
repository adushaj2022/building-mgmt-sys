import AXIOS from "./axios";

export const CurrentUser = async () => {
  try {
    const response = await AXIOS.get("/user");
    if (response.data?.user?.status) {
      return response.data.user;
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
};
