import { createDialogStore, createUseDialogs } from "react-dialog-manager";

type DialogMap = {
  modal: {
    option?: { message: string };
  };
  confirm: {
    option?: { message: string };
  };
  alert: {
    option?: { title: string };
  };
};
export const dialogStore = createDialogStore<DialogMap>();
export const dialogs = createUseDialogs(dialogStore);
