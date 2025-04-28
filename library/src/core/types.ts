export interface DialogOptions {
  useOverlay?: boolean;
  allowBackgroundScroll?: boolean;
  allowOverlayClickClose?: boolean;
}

export interface DialogItem {
  id: string;
  content: React.ReactNode;
  options?: DialogOptions;
}
