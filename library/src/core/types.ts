// export interface DialogOptionExtendsField {}
// export interface DialogItemExtendsField {}
// type DialogOption = DialogOptionExtendsField;
// export type DialogItem = {
//   id: string;
//   isRender: boolean;
//   content: React.ReactNode;
//   options: DialogOption;
// } & DialogItemExtendsField;

export interface DialogStore<T extends DialogMapBase> {
  subscribe: (cb: () => void) => () => void;
  getSnapshot: () => DialogState<T>;
  openDialog: <K extends keyof T>({
    type,
    content,
    options,
  }: {
    type: K;
    content: React.ReactNode;
    options?: T[K]["option"];
  }) => void;
  closeAllRender: () => void;
  closeLastRender: () => void;
  removeClosed: () => void;
  removeAllDialogs: () => void;
  removeLastDialog: () => void;
}

export interface DialogMapBase {
  [key: string]: {
    option?: any;
  };
}

export type DialogItem<T extends DialogMapBase> = {
  id: string;
  isRender: boolean;
  type: keyof T;
  content: React.ReactNode;
  options?: T[keyof T]["option"];
};

export type DialogState<T extends DialogMapBase> = DialogItem<T>[];
