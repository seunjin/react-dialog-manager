import { dialogs, dialogStore } from "../store/dialogStore";

export default function DialogRenderer() {
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
            dialogStore.openDialog({
              type: "alert",
              content: <DialogContent />,
              options: {
                title: "sd",
              },
            })
          }
        >
          Dialog 열기
        </button>
      </div>

      {/* Dialog 렌더링 */}
      {dialogs().map((dialog) => (
        <div
          key={dialog.id}
          onAnimationEnd={dialogStore.removeClosed}
          onClick={dialogStore.closeLastRender}
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
            dialogStore.openDialog({
              type: "modal",
              content: <DialogContent2 />,
            })
          }
        >
          중첩 모달
        </button>
        <button onClick={dialogStore.closeLastRender}>닫기</button>
      </div>
    </div>
  );
}

function DialogContent2() {
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
        <button onClick={dialogStore.closeLastRender}>닫기</button>
        <button onClick={dialogStore.closeAllRender}>모두 닫기</button>
      </div>
    </div>
  );
}
