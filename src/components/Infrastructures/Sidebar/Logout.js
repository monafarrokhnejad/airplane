import { removeMultipleItemsFormStorage } from "~/helper/appManager";
import { CURRENT_USER } from "~/utilities/storage";

export const onLogout = () => {
  removeMultipleItemsFormStorage([CURRENT_USER]);
  window.location.reload();
};
