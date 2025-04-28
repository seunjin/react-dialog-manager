import { DialogItem, DialogOptions } from "./types";

let dialogs: DialogItem[] = [];
let listeners = new Set<() => void>();

export const dialogStore = {
  getSnapshot: () => dialogs,
  subscribe: (callback: () => void) => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  },
  openDialog: (content: React.ReactNode, options?: DialogOptions) => {
    dialogs = [...dialogs, { id: crypto.randomUUID(), content, options }];
    listeners.forEach((cb) => cb());
  },
  closeDialog: () => {
    dialogs = dialogs.slice(0, -1);
    listeners.forEach((cb) => cb());
  },
  closeAll: () => {
    dialogs = [];
    listeners.forEach((cb) => cb());
  },
};
