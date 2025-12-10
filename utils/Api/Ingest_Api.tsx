import axios, { AxiosResponse } from "axios";

interface SendDataPayload {
  file?: File | Blob;
  
  [key: string]: any;
}


export const sendData = async (payload: SendDataPayload): Promise<any> => {
  try {
    const res: AxiosResponse = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      payload
    );
    console.log("API Response:", res.data);
    return res.data;
  } catch (error: any) {
    console.error("API Error:", error);
    throw error;
  }
};