import { DialogItem } from "../core/types";

let dialogs: DialogItem[] = [];
let listeners = new Set<() => void>();

let needsNotify = false; // microtask defer 제어용

/** 모든 구독자 콜백 호출 (microtask로 defer 처리) */
function notify() {
  if (needsNotify) return;
  needsNotify = true;
  Promise.resolve().then(() => {
    needsNotify = false;
    listeners.forEach((callback) => callback());
  });
}

export const dialogStore = {
  /** dialogs 배열 반환 */
  getSnapshot: () => dialogs,

  /** dialogs 변경 시 구독 */
  subscribe: (callback: () => void) => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  },

  /** Dialog 추가 (isRender: true) */
  openDialog: (item: Omit<DialogItem, "id" | "isRender">) => {
    dialogs = [
      ...dialogs,
      { id: crypto.randomUUID(), isRender: true, ...item },
    ];
    notify();
  },

  /** 모든 Dialog를 닫힘 상태로 (isRender: false) */
  closeAllRender: () => {
    if (dialogs.length === 0) return;
    dialogs = dialogs.map((dialog) => ({ ...dialog, isRender: false }));
    notify();
  },

  /** 마지막 Dialog만 닫힘 상태로 (isRender: false) */
  closeLastRender: () => {
    if (dialogs.length === 0) return;
    const lastDialog = dialogs[dialogs.length - 1];
    dialogs = dialogs.map((dialog) =>
      dialog.id === lastDialog.id ? { ...dialog, isRender: false } : dialog
    );
    notify();
  },

  /** isRender=false 인 Dialog만 제거 */
  removeClosed: () => {
    const nextDialogs = dialogs.filter((dialog) => dialog.isRender !== false);
    if (nextDialogs.length !== dialogs.length) {
      dialogs = nextDialogs;
      notify();
    }
  },

  /** 모든 Dialog 제거 */
  removeAllDialogs: () => {
    if (dialogs.length === 0) return;
    dialogs = [];
    notify();
  },

  /** 마지막 Dialog 하나만 제거 */
  removeLastDialog: () => {
    if (dialogs.length === 0) return;
    dialogs = dialogs.slice(0, -1);
    notify();
  },
};
