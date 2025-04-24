const commitlintConfig = {
  extends: ["@commitlint/config-conventional"], // Conventional Commit 규칙 사용
  rules: {
    "type-enum": [
      2, // 에러 레벨 (0=비활성화, 1=경고, 2=에러)
      "always", // 항상 적용
      [
        "feat", // 새로운 기능
        "fix", // 버그 수정
        "docs", // 문서 수정
        "style", // 코드 스타일 변경 (기능 변화 없음)
        "refactor", // 리팩토링
        "test", // 테스트 추가
        "chore", // 기타 작업
        "perf", // 성능 개선
        "ci", // CI/CD 관련 변경
        "hotfix", // 🔥 긴급 수정 (커스텀 타입 잘 추가됨)
        "build", // 빌드 시스템 변경 (vite, rollup 등)
        "revert", // 이전 커밋 되돌림
        "infra", // 인프라 설정 관련 변경 (AWS, Vercel 등)
        "deps", // 의존성 업데이트
        "release", // 배포 관련 커밋
      ],
    ],
    "header-max-length": [2, "always", 72], // 제목은 72자 이하로 제한
    "scope-empty": [0], // 스코프는 옵션 (빈 값 허용)
    "type-case": [2, "always", "lower-case"], // 타입은 소문자
    "subject-case": [0], // 제목은 대소문자 자유
  },
};

export default commitlintConfig;
