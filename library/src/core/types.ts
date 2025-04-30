/**
 * 사용자가 DialogOptions에 추가 필드를 확장할 수 있도록 열어둔 인터페이스입니다.
 * 예를 들어, 옵션에 'theme'이나 'position' 등을 추가하고 싶을 때 확장합니다.
 */
export interface DialogOptionCustomFields {}
/**
 * 사용자가 DialogItem에 추가 필드를 확장할 수 있도록 열어둔 인터페이스입니다.
 * 예를 들어, 'type', 'title' 등의 커스텀 값을 추가할 때 확장합니다.
 */
export interface DialogItemCustomFields {}

export type DialogOptions = {
  useOverlay?: boolean;
  allowBackgroundScroll?: boolean;
  allowOverlayClickClose?: boolean;
} & DialogOptionCustomFields;

export type DialogItem = {
  id: string;
  content: React.ReactNode;
  options?: DialogOptions;
  isRender: boolean;
} & DialogItemCustomFields;
