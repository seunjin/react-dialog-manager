import { useSyncExternalStore } from "react";
import { dialogStore } from "../core/store";

export const useDialogManager = () => {
  const dialogs = useSyncExternalStore(
    dialogStore.subscribe,
    dialogStore.getSnapshot
  );

  return {
    dialogs,
    openDialog: dialogStore.openDialog,
    closeDialog: dialogStore.closeDialog,
    closeAll: dialogStore.closeAll,
  };
};
