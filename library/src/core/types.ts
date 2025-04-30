export interface DialogOptionExtendsField {}
export interface DialogItemExtendsField {}
type DialogOption = DialogOptionExtendsField;
export type DialogItem = {
  id: string;
  isRender: boolean;
  content: React.ReactNode;
  options: DialogOption;
} & DialogItemExtendsField;
