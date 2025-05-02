// import { DialogItem } from "../core/types";

// let dialogs: DialogItem[] = [];
// let listeners = new Set<() => void>();

// let needsNotify = false; // microtask defer 제어용

// /** 모든 구독자 콜백 호출 (microtask로 defer 처리) */
// function notify() {
//   if (needsNotify) return;
//   needsNotify = true;
//   Promise.resolve().then(() => {
//     needsNotify = false;
//     listeners.forEach((callback) => callback());
//   });
// }

// export const dialogStore = {
//   /** dialogs 배열 반환 */
//   getSnapshot: () => dialogs,

//   /** dialogs 변경 시 구독 */
//   subscribe: (callback: () => void) => {
//     listeners.add(callback);
//     return () => listeners.delete(callback);
//   },

//   /** Dialog 추가 (isRender: true) */
//   openDialog: (item: Omit<DialogItem, "id" | "isRender">) => {
//     dialogs = [
//       ...dialogs,
//       { id: crypto.randomUUID(), isRender: true, ...item },
//     ];
//     notify();
//   },

//   /** 모든 Dialog를 닫힘 상태로 (isRender: false) */
//   closeAllRender: () => {
//     if (dialogs.length === 0) return;
//     dialogs = dialogs.map((dialog) => ({ ...dialog, isRender: false }));
//     notify();
//   },

//   /** 마지막 Dialog만 닫힘 상태로 (isRender: false) */
//   closeLastRender: () => {
//     if (dialogs.length === 0) return;
//     const lastDialog = dialogs[dialogs.length - 1];
//     dialogs = dialogs.map((dialog) =>
//       dialog.id === lastDialog.id ? { ...dialog, isRender: false } : dialog
//     );
//     notify();
//   },

//   /** isRender=false 인 Dialog만 제거 */
//   removeClosed: () => {
//     const nextDialogs = dialogs.filter((dialog) => dialog.isRender !== false);
//     if (nextDialogs.length !== dialogs.length) {
//       dialogs = nextDialogs;
//       notify();
//     }
//   },

//   /** 모든 Dialog 제거 */
//   removeAllDialogs: () => {
//     if (dialogs.length === 0) return;
//     dialogs = [];
//     notify();
//   },

//   /** 마지막 Dialog 하나만 제거 */
//   removeLastDialog: () => {
//     if (dialogs.length === 0) return;
//     dialogs = dialogs.slice(0, -1);
//     notify();
//   },
// };

// library/src/core/store.ts

// export interface DialogStore<T> {
//   subscribe: (callback: () => void) => () => void;
//   getSnapshot: () => DialogState<T>;
//   openDialog: <K extends keyof T>(
//     key: K,
//     content: React.ReactNode,
//     options: T[K]["option"]
//   ) => void;
//   closeAllRender: () => void;
//   closeLastRender: () => void;
//   removeClosed: () => void;
//   removeAllDialogs: () => void;
//   removeLastDialog: () => void;
// }

// export type DialogState<T> = {
//   id: string;
//   isRender: boolean;
//   key: keyof T;
//   content: React.ReactNode;
//   options: T[keyof T]["option"];
// }[];

// export function createDialogStore<T extends Record<string, { option: any }>>() {
//   type DialogKey = keyof T;
//   type Dialog = {
//     id: string;
//     isRender: boolean;
//     key: DialogKey;
//     content: React.ReactNode;
//     options: T[DialogKey]["option"];
//   };

//   let dialogs: Dialog[] = [];
//   const listeners = new Set<() => void>();
//   let needsNotify = false;

//   const notify = () => {
//     if (needsNotify) return;
//     needsNotify = true;
//     Promise.resolve().then(() => {
//       needsNotify = false;
//       listeners.forEach((cb) => cb());
//     });
//   };

//   return {
//     /** React hook에서 구독할 수 있는 subscribe 함수 */
//     subscribe: (callback: () => void) => {
//       listeners.add(callback);
//       return () => listeners.delete(callback);
//     },

//     /** useSyncExternalStore에서 사용할 snapshot getter */
//     getSnapshot: () => dialogs,

//     /** Dialog 추가 */
//     openDialog: (
//       key: DialogKey,
//       content: React.ReactNode,
//       options: T[DialogKey]["option"]
//     ) => {
//       dialogs = [
//         ...dialogs,
//         { id: crypto.randomUUID(), isRender: true, key, content, options },
//       ];
//       notify();
//     },

//     /** 모든 Dialog 닫기 */
//     closeAllRender: () => {
//       if (dialogs.length === 0) return;
//       dialogs = dialogs.map((d) => ({ ...d, isRender: false }));
//       notify();
//     },

//     /** 마지막 Dialog만 닫기 */
//     closeLastRender: () => {
//       if (dialogs.length === 0) return;
//       const last = dialogs[dialogs.length - 1];
//       dialogs = dialogs.map((d) =>
//         d.id === last.id ? { ...d, isRender: false } : d
//       );
//       notify();
//     },

//     /** 닫힌 Dialog 제거 */
//     removeClosed: () => {
//       const next = dialogs.filter((d) => d.isRender !== false);
//       if (next.length !== dialogs.length) {
//         dialogs = next;
//         notify();
//       }
//     },

//     /** 모든 Dialog 제거 */
//     removeAllDialogs: () => {
//       if (dialogs.length > 0) {
//         dialogs = [];
//         notify();
//       }
//     },

//     /** 마지막 Dialog 제거 */
//     removeLastDialog: () => {
//       if (dialogs.length > 0) {
//         dialogs = dialogs.slice(0, -1);
//         notify();
//       }
//     },
//   };
// }

import { DialogItem, DialogState, DialogMapBase, DialogStore } from "./types";

export function createDialogStore<T extends DialogMapBase>(): DialogStore<T> {
  let dialogs: DialogItem<T>[] = [];
  const listeners = new Set<() => void>();
  let needsNotify = false;

  const notify = () => {
    if (needsNotify) return;
    needsNotify = true;
    Promise.resolve().then(() => {
      needsNotify = false;
      listeners.forEach((cb) => cb());
    });
  };

  return {
    subscribe: (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    getSnapshot: () => dialogs,
    openDialog: ({ type, content, options }) => {
      dialogs = [
        ...dialogs,
        { id: crypto.randomUUID(), isRender: true, type, content, options },
      ];
      notify();
    },
    closeAllRender: () => {
      if (!dialogs.length) return;
      dialogs = dialogs.map((d) => ({ ...d, isRender: false }));
      notify();
    },
    closeLastRender: () => {
      if (!dialogs.length) return;
      const last = dialogs[dialogs.length - 1];
      dialogs = dialogs.map((d) =>
        d.id === last.id ? { ...d, isRender: false } : d
      );
      notify();
    },
    removeClosed: () => {
      const next = dialogs.filter((d) => d.isRender !== false);
      if (next.length !== dialogs.length) {
        dialogs = next;
        notify();
      }
    },
    removeAllDialogs: () => {
      if (dialogs.length) {
        dialogs = [];
        notify();
      }
    },
    removeLastDialog: () => {
      if (dialogs.length) {
        dialogs = dialogs.slice(0, -1);
        notify();
      }
    },
  };
}
