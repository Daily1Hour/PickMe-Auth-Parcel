## Cognito 사용자 풀 옵션

-   사용자 풀 로그인 옵션: 사용자 이름 (아이디)
-   가입 필수 옵션: 사용자 이름, 이메일

## 로컬 스토리지 저장

-   idToken; 클라이언트에서 사용자 정보를 가져올 때 사용
-   accessToken; 백엔드 서비스에 접근할 때 사용
-   refreshToken; 두 토큰의 만료 시 갱신에 사용

## 컴포넌트 예시

![auth-page](https://github.com/user-attachments/assets/c0a1a686-62d5-4110-a3a9-18aa31b743b8)
![logged-page](https://github.com/user-attachments/assets/318f73f3-c000-4c11-8552-1823e460e47d)

## 유저 정보 불러오기 훅

```ts
import useUserInfo from "@/shared/lib/useUserInfo";

const {
    isSuccess, // 정보 불러오기 로딩 완료
    "cognito:username": username, // 사용자 이름
    email, // 사용자 이메일
} = useUserInfo();
```
