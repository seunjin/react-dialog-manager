import "react-dialog-manager";
declare module "react-dialog-manager" {
  interface DialogItemExtendsField {
    type: "modal" | "alert" | "confirm" | "full-modal" | "bottom-sheet";
  }
  interface DialogOptionExtendsField {
    useOverlay?: boolean;
    allowOverlayClickClose?: boolean;
  }
}
