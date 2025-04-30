import { useDialogManager } from "@react-dialog-manager";

export default function DialogRenderer() {
  const {
    dialogs,
    openDialog,
    closeAllRender,
    closeLastRender,
    removeClosed,
    removeAllDialogs,
    removeLastDialog,
  } = useDialogManager();
  console.log(dialogs);
  return (
    <div style={{ padding: "40px" }}>
      <h1>Dialog Manager Test</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() =>
            openDialog({
              type: "",
              content: <DialogContent />,
              options: {
                title: "",
                content: "",
              },
            })
          }
        >
          Dialog 열기
        </button>
      </div>

      {/* Dialog 렌더링 */}
      {dialogs.map((dialog) => (
        <div
          key={dialog.id}
          onAnimationEnd={() => removeClosed()}
          onClick={() => closeLastRender()}
          className={dialog.isRender ? "dialog-fadein" : "dialog-fadeout"}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: dialog.isRender ? "auto" : "none",
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>{dialog.content}</div>
        </div>
      ))}
    </div>
  );
}

function DialogContent() {
  const { openDialog, closeLastRender } = useDialogManager();
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      <h2>Dialog!</h2>
      <p>이건 테스트용 다이얼로그입니다.</p>
      <div>
        <button
          onClick={() =>
            openDialog({
              type: "alert",
              content: <DialogContent2 />,
              options: { message: "asdasd" },
            })
          }
        >
          중첩 모달
        </button>
        <button onClick={closeLastRender}>닫기</button>
      </div>
    </div>
  );
}

function DialogContent2() {
  const {
    removeLastDialog,
    removeAllDialogs,
    closeLastRender,
    closeAllRender,
  } = useDialogManager();
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      <h2>Dialog!</h2>
      <p>이건 테스트용 다이얼로그입니다.</p>
      <div>
        <button onClick={closeLastRender}>닫기</button>
        <button onClick={closeAllRender}>모두 닫기</button>
      </div>
    </div>
  );
}
