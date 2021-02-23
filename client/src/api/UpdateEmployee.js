import AXIOS from "./axios";

export const UpdateEmployee = async (values) => {
  try {
    const response = await AXIOS.put("updateEmployee", values);
    return response;
  } catch (err) {
    throw err;
  }
};
