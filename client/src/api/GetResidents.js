import AXIOS from "./axios";

export const GetResidents = async () => {
  try {
    const request = await AXIOS.get("residents");
    return request.data;
  } catch (err) {
    throw err;
  }
};
