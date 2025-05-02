import { useSyncExternalStore } from "react";

// export const useDialogManager = () => {
//   const dialogs = useSyncExternalStore(
//     dialogStore.subscribe,
//     dialogStore.getSnapshot
//   );
//   return {
//     /** dialogs 배열 반환 */
//     dialogs,
//     /** Dialog 추가 (isRender: true) */
//     openDialog: dialogStore.openDialog,
//     /** 모든 Dialog를 닫힘 상태로 (isRender: false) */
//     closeAllRender: dialogStore.closeAllRender,
//     /** 마지막 Dialog만 닫힘 상태로 (isRender: false) */
//     closeLastRender: dialogStore.closeLastRender,
//     /** isRender=false 인 Dialog만 제거 */
//     removeClosed: dialogStore.removeClosed,
//     /** 모든 Dialog 제거 */
//     removeAllDialogs: dialogStore.removeAllDialogs,
//     /** 마지막 Dialog 하나만 제거 */
//     removeLastDialog: dialogStore.removeLastDialog,
//   };
// };

import { DialogMapBase, DialogState, DialogStore } from "../core/types";

export function createUseDialogs<T extends DialogMapBase>(
  store: DialogStore<T>
) {
  return function useDialog(): DialogState<T> {
    return useSyncExternalStore(store.subscribe, store.getSnapshot);
  };
}
