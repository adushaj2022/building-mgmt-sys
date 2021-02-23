import AXIOS from "./axios";

export const GetEmployees = async () => {
  try {
    const request = await AXIOS.get("employees");
    return request.data;
  } catch (err) {
    throw err;
  }
};
