import { toast } from "react-toastify";
import instance from "./instance";

export const getRequestFromServer = async ({ address }) => {
  return await instance
    .get(address)
    .then((res) => res)
    .catch((err) => {
      if (err?.response?.data?.messages[0].code !== "ERROR_NOPERMISSION_REQUEST") {
        toast.error(err?.message);
        toast.error(err?.response?.data?.messages[0]?.originalMessage);
      }
      return err;
    });
};

export const postRequestToServer = async ({ address, dataEntry }) => {
  return await instance
    .post(address, dataEntry)
    .then((res) => res)
    .catch((err) => {
      if (err?.response?.data?.messages[0].code !== "ERROR_NOPERMISSION_REQUEST") {
        toast.error(err?.message);
        toast.error(err?.response?.data?.messages[0]?.originalMessage);
      }
      return err;
    });
};
