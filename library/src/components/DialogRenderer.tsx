import { useDialogManager } from "../hooks/useDialogManager";

export const DialogRenderer = () => {
  const { dialogs, closeDialog } = useDialogManager();

  return (
    <>
      {dialogs.map((dialog) => (
        <div key={dialog.id} className="fixed inset-0 z-50">
          {dialog.content}
          <button onClick={closeDialog}>닫기</button>
        </div>
      ))}
    </>
  );
};
