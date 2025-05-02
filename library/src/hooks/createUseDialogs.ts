import { useSyncExternalStore } from "react";

import { DialogMapBase, DialogState, DialogStore } from "../core/types";

export function createUseDialogs<T extends DialogMapBase>(
  store: DialogStore<T>
) {
  return function useDialog(): DialogState<T> {
    return useSyncExternalStore(store.subscribe, store.getSnapshot);
  };
}
