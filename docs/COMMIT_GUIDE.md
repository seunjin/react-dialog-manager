# ✨ Commit Message Guide

> 이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 규칙에 기반합니다.  
> `commitlint` + `husky`로 커밋 메시지를 검사하므로, 아래 포맷을 꼭 지켜주세요.

---

## 🧱 기본 포맷

```
<type>(optional scope): <subject>
```

- `type`: 커밋의 목적 (필수)
- `scope`: 영향받은 범위 (선택)
- `subject`: 변경사항 요약 (명령문, 소문자 시작, 마침표 ❌)

---

## ✅ 예시

```bash
feat(dialog): useDialog 훅 추가
fix: 다이얼로그 닫힘 버그 수정
docs: README에 사용법 추가
style: 들여쓰기 수정, 세미콜론 추가
refactor: store 구조 개선
test: DialogProvider 테스트 작성
chore: husky 설정 추가
perf: 렌더링 최적화
ci: GitHub Actions 워크플로우 추가
hotfix: 다이얼로그 안 닫히는 긴급 이슈 수정
build: Vite 빌드 설정 변경
revert: useOverlay 기능 롤백
infra: S3 정적 경로 수정
deps: react-query 버전 업데이트
release: v1.0.0 릴리즈 커밋
```

---

## 💡 사용 가능한 타입

| 타입       | 설명 |
|------------|------|
| `feat`     | ✨ 새로운 기능 추가 |
| `fix`      | 🐛 버그 수정 |
| `docs`     | 📝 문서 관련 변경 |
| `style`    | 💄 코드 스타일 변경 (기능 변화 없음) |
| `refactor` | ♻️ 기능은 그대로 두고 코드 개선 |
| `test`     | ✅ 테스트 코드 추가 및 수정 |
| `chore`    | 🔧 기타 설정, 배포, 빌드 도구 등 |
| `perf`     | ⚡️ 성능 개선 |
| `ci`       | 🤖 CI/CD 설정 변경 |
| `hotfix`   | 🔥 긴급 수정 |
| `build`    | 🏗️ 빌드 시스템 설정 변경 |
| `revert`   | ⏪ 이전 커밋 되돌림 |
| `infra`    | ☁️ 인프라/서버 설정 변경 |
| `deps`     | 📦 의존성 업데이트 |
| `release`  | 🚀 릴리즈용 커밋 |

---

## 📏 커밋 메시지 룰

- 제목(`subject`)은 **72자 이하**
- `type`은 **반드시 소문자**
- `scope`는 선택사항 (있어도 되고 없어도 됨)
- 제목에 마침표(`.`) 붙이지 않기

---

## ❌ 안 되는 예시

```bash
"수정함"
"Fix: 컴포넌트 수정"
"Refactored the modal logic."
"FEAT: NEW DIALOG"
```

> 위 커밋은 모두 **형식 오류로 인해 거부됨!**

---

## 🔄 자동 검사 시스템

> 이 프로젝트는 `husky` + `commitlint`로 커밋 메시지를 자동 검사합니다.

커밋 시 아래와 같은 메시지가 뜨면 규칙을 위반한 것입니다:

```
✖   type may not be empty
✖   type must be one of [feat, fix, ...]
```

---

## 🧪 커밋 메시지 미리 테스트

```bash
npx commitlint --edit .git/COMMIT_EDITMSG
```