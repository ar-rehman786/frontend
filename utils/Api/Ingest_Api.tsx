import axios from "axios";

export const sendData = async (payload) => {
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      payload
    );
    console.log("API Response:", res.data);
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
