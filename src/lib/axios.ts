import { ACCOUNT_TYPES_ENDPOINT, API_KEY } from "@/config";
import Axios from "axios";

const config = {
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
};

export const axios = Axios.create({ ...config });

export const getAccountTypes = async () => {
  const response = await axios.get(ACCOUNT_TYPES_ENDPOINT, config);
  return response.data;
};
