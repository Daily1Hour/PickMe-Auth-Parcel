# 사용자 관리 마이크로 꾸러미 조각

> Single-Spa Parcel 구성

## 🚩 목차

-   [🛠️ 기술 스택](#️-기술-스택)
-   [🎨 스크린샷](#-스크린샷)
-   [💡 주요 기능](#-주요-기능)
-   [📂 폴더 구조](#-폴더-구조)
-   [🚀 실행 방법](#-실행-방법)

## 🛠️ 기술 스택

[![Amazon Cognito](https://img.shields.io/badge/Amazon_Cognito-DD344C?style=flat-square&logo=amazoncognito&logoColor=white)](https://aws.amazon.com/ko/cognito/)  
[![Single-SPA](https://img.shields.io/badge/Single_SPA-f5bcd3.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgODExLjIxIj48c2NyaXB0IHhtbG5zPSIiIGlkPSJjdXN0b20tdXNlcmFnZW50LXN0cmluZy1wYWdlLXNjcmlwdCIvPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWU2ODlmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwOC41NCwyMDAuMzMsNTI4LjQyLDQ3MC40Miw0NDkuMjcsNTgzLjg0LDU5LjM5LDM4Ni4yMmw0OS4xNS0xODUuODlNNzcuNCwxMjAuMTIsMCw0MTIuODZsNDY1LjYxLDIzNkw2MDAsNDU2LjI4LDc3LjQsMTIwLjEyWiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyODQuODQgNTU2LjM0IDQ2NS42IDY0OC44NSAxNTQuNjkgODExLjIxIDI4NC44NCA1NTYuMzQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDAxLjA2IDMyOC44NSA3Ny40IDEyMC4xMiA1NjkuMDkgMCA0MDEuMDYgMzI4Ljg1Ii8+PC9nPjwvZz48L3N2Zz4=&style=flat-square&logoColor)](https://single-spa.js.org/)
[![Userscript](https://img.shields.io/badge/Userscript-00485B?style=flat-square&logo=tampermonkey&logoColor=white)](https://aws.amazon.com/ko/cognito/)  
[![React](https://img.shields.io/badge/React-191B1F?style=flat-square&logo=React&logoColor=61DAFB)](https://reactjs.org)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query/latest/docs/framework/react/overview)
[![React_Hook_Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white)](https://www.react-hook-form.com/)
[![Jotai](https://img.shields.io/badge/👻_Jotai-dbeafe?style=flat-square&logoColor=white)](https://jotai.org/)  
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/kr/docs/intro)
[![Yup](https://img.shields.io/badge/🔲_Yup-black?style=flat-square&logo=yup&logoColor=white)](https://github.com/jquense/yup)
[![JWT](https://img.shields.io/badge/JWT-black?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://github.com/jquense/yup)  
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)](https://www.chakra-ui.com/)  
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![FSDSteiger](https://img.shields.io/badge/FSD_Steiger-211b1d.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTAyKSIvPgo8cGF0aCBkPSJNMCAwIEMyOC4zOCAwIDU2Ljc2IDAgODYgMCBDODYgMy42MyA4NiA3LjI2IDg2IDExIEM1Ny42MiAxMSAyOS4yNCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0VCRUFFQSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsODcpIi8+CjxwYXRoIGQ9Ik0wIDAgQzI4LjM4IDAgNTYuNzYgMCA4NiAwIEM4NiAzLjYzIDg2IDcuMjYgODYgMTEgQzU3LjYyIDExIDI5LjI0IDExIDAgMTEgQzAgNy4zNyAwIDMuNzQgMCAwIFogIiBmaWxsPSIjRUJFQUVBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Nyw1NykiLz4KPHBhdGggZD0iTTAgMCBDMjguMzggMCA1Ni43NiAwIDg2IDAgQzg2IDMuNjMgODYgNy4yNiA4NiAxMSBDNTcuNjIgMTEgMjkuMjQgMTEgMCAxMSBDMCA3LjM3IDAgMy43NCAwIDAgWiAiIGZpbGw9IiNFQkVBRUEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3LDQyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTQ3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTMyKSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsMTE3KSIvPgo8cGF0aCBkPSJNMCAwIEMxMy41MyAwIDI3LjA2IDAgNDEgMCBDNDEgMy42MyA0MSA3LjI2IDQxIDExIEMyNy40NyAxMSAxMy45NCAxMSAwIDExIEMwIDcuMzcgMCAzLjc0IDAgMCBaICIgZmlsbD0iI0U5RThFOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcsNzIpIi8+Cjwvc3ZnPgo=&style=flat-square&logoColor=black)](https://github.com/feature-sliced/steiger)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)](https://prettier.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)](https://www.postman.com/)

## 🎨 스크린샷

<img title="회원가입" width="33%" src="https://github.com/user-attachments/assets/a3bccafc-e13d-41f1-95cf-69741f578beb" /> 
<img title="로그인" width="33%" src="https://github.com/user-attachments/assets/cba71ae8-ccbf-4be6-8571-69fa8bd7a4c8" />
<img title="비밀번호찾기" width="32%" src="https://github.com/user-attachments/assets/e8a369c4-4c39-4f86-b35b-dd3a539691cf" />  
<img title="토큰" width="100%" src="https://github.com/user-attachments/assets/1fd709f1-c89e-4f5e-8cc7-79b4698d004d" />

## 💡 주요 기능

### 🔐 Amazon Cognito

> 웹 및 모바일 앱을 위한 자격 증명 플랫폼  
> 사용자 디렉터리, 인증 서버, OAuth 2.0 액세스 토큰 및 자격 증명에 대한 권한 부여 서비스

Cognito 사용자 풀 옵션

-   사용자 풀 로그인 옵션: 사용자 이름 (아이디)
-   가입 필수 옵션: 사용자 이름, 이메일

환경변수

```
VITE_COGNITO_USER_POOL_ID= # Cognito 사용자 풀 아이디
VITE_COGNITO_CLIENT_ID= # Cognito 앱클라이언트 아이디
```

<img title="Cognito 앱클라이언트" width="45%" src="https://github.com/user-attachments/assets/80a398c7-ca05-46ef-8427-ceabcc26f840" />
<img title="Cognito 사용자풀" width="45%" src="https://github.com/user-attachments/assets/850e0042-992d-4130-a3aa-872e065407f1" />

### 로컬 스토리지 저장

-   **idToken**; 클라이언트에서 사용자 정보를 가져올 때 사용
-   **accessToken**; 백엔드 서비스에 접근할 때 사용
-   **refreshToken**; 두 토큰의 만료 시 갱신에 사용

## 📂 폴더 구조

<details>
<summary>열기</summary>

> <image src="https://feature-sliced.design/kr/img/brand/logo-primary.png" width=40 />

```python
PickMe-Auth-Parcel
├─ src
│  ├─ main.tsx # 개발 서버 진입점
│  ├─ parcel.tsx # single-spa Parcel 빌드 진입점
│  ├─ app
│  │  └─ App.tsx # 프로바이더 스택
│  ├─ entities # 도메인 모델
│  │  └─ auth
│  │     ├─ index.ts
│  │     ├─ api
│  │     │  └─ dto.ts # dto 모델
│  │     ├─ config
│  │     │  └─ userPool.ts # Cognito 유저풀 정보 및 인스턴스
│  │     ├─ model # 모델 및 유효성 검사
│  │     │  ├─ index.ts
│  │     │  ├─ LoginCredential.ts
│  │     │  └─ SignupCredential.ts
│  │     ├─ repository # 브라우저 데이터 접근
│  │     │  └─ getLoggedIn.ts
│  │     └─ service # 유즈케이스
│  │        ├─ index.ts
│  │        ├─ login # 로그인
│  │        │  ├─ login.ts
│  │        │  │  ├─ login.test.ts
│  │        │  │  └─ login.usage.ts
│  │        │  ├─ forgotPassword.ts
│  │        │  │  └─ forgotPassword.usage.ts
│  │        │  └─ resetPassword.ts
│  │        ├─ session # 토큰 사용
│  │        │  ├─ getTokens.ts
│  │        │  │  ├─ getTokens.test.ts
│  │        │  │  └─ getTokens.usage.ts
│  │        │  └─ getUser.ts
│  │        └─ signup # 회원가입
│  │            └─ signup.ts
│  │              ├─ signup.test.ts
│  │              └─ signup.usage.ts
│  ├─ features # 기능 구현체
│  │  ├─ authActions # 로그인/회원가입 기능
│  │  │  ├─ index.ts
│  │  │  ├─ api # 쿼리
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ useLoginFetch.ts
│  │  │  │  ├─ useForgotPasswordFetch.ts
│  │  │  │  ├─ useResetPasswordFetch.ts
│  │  │  │  └─ useSignupFetch.ts
│  │  │  ├─ atom # 상태저장소
│  │  │  │  ├─ index.ts
│  │  │  │  └─ actionTypeAtom.ts
│  │  │  ├─ hook # 폼 커스텀훅
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ useLoginForm.ts
│  │  │  │  ├─ useForgotPasswordForm.ts
│  │  │  │  ├─ useResetPasswordForm.ts
│  │  │  │  └─ useSignupForm.ts
│  │  │  ├─ model # 스키마
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ LoginSchema.ts
│  │  │  │  ├─ ForgotPasswordSchema.ts
│  │  │  │  ├─ ResetPasswordSchema.ts
│  │  │  │  └─ SignupSchema.ts
│  │  │  └─ ui
│  │  │     ├─ index.ts
│  │  │     ├─ FormField.tsx # 필드
│  │  │     ├─ FormLayout.tsx # 폼 레이아웃
│  │  │     ├─ LoginForm.tsx # 로그인 폼
│  │  │     ├─ ForgotPasswordForm.tsx # 비밀번호 찾기 폼
│  │  │     ├─ ResetPasswordForm.tsx # 비밀번호 리셋 폼
│  │  │     ├─ SignupForm.tsx # 회원가입 폼
│  │  │     ├─ SocialLoginForm.tsx # 소셜로그인 폼
│  │  │     ├─ ActionLayout.tsx # 액션 레이아웃
│  │  │     └─ PopoverLayout.tsx # 팝오버 레이아웃
│  │  └─ userMenu # 로그인 인증 후 사용자메뉴 기능
│  │     ├─ index.ts
│  │     ├─ api
│  │     │  ├─ index.ts
│  │     │  ├─ useLoggedIn.ts
│  │     │  └─ useUserInfo.ts
│  │     └─ ui
│  │        └─ UserMenu.tsx
│  ├─ pages # 페이지
│  │  └─ auth
│  │     ├─ index.tsx
│  │     ├─ hook
│  │     │  └─ useTokens.ts
│  │     └─ ui
│  │        ├─ index.ts
│  │        ├─ AuthControls.tsx # 로그인/회원가입 컨트롤
│  │        └─ TokenInfo.tsx # 로그인 후 토큰 정보
│  ├─ shared # 공용
│  │  ├─ ActionType.ts
│  │  ├─ thema.ts
│  │  ├─ trans-ko.ts
│  │  └─ ui
│  │     ├─ atoms
│  │     │  ├─ index.ts
│  │     │  ├─ ButtonBackground.tsx
│  │     │  └─ StyledButton.tsx
│  │     ├─ index.ts
│  │     └─ molecules
│  │        ├─ index.ts
│  │        ├─ CircleButton.tsx
│  │        ├─ PrimaryButton.tsx
│  │        └─ SecondaryButton.tsx
│  ├─ third-party
│  │  └─ chakra-ui
│  └─ userscript # 유저스크립트
│     ├─ widget.meta.ts # 메타데이터
│     └─ widget.user.js # 스크립트
├─ package.json # 의존성 설정
│  ├─ .prettierrc # 포맷터 설정
│  ├─ eslint.config.js # 린트 설정
│  └─ steiger.config.ts # FSD 린트 설정
└─ vite.config.ts # Vite 설정 파일
   └─ vite-env.d.ts # 환경변수 타입 정의
```

</details>

## 🚀 실행 방법

### 개발 서버 실행

```sh
$ npm install
$ npm run dev
```

### Single-SPA 주입 애플리케이션 빌드

```sh
$ npm install
$ npm run build:single-spa
```

### Parcel 컴포넌트 주입 방법

-   React

    ```ts
    import Parcel from "single-spa-react/parcel";

    export function myComponent(): React.ReactElement {
        const [parcelConfig, setParcelConfig] = useState<any>(null);

        useEffect(() => {
            const loadParcel = async () => {
                const { parcel: config } = await import(parcelURL);
                setParcelConfig(config);
            };
            loadParcel();
        }, []);

        return parcelConfig ? <Parcel config={parcelConfig} /> : <div>Loading...</div>;
    }
    ```

-   Vue

    ```ts
    <template>
      <Parcel
        :config="parcelConfig"
        :mountParcel="mountParcel"
      />
    </template>

    <script lang="ts">
    import Parcel from "single-spa-vue/parcel";
    import { mountRootParcel } from "single-spa";

    export default {
        components: { Parcel },
        data() {
            return {
                parcelConfig: import(parcelURL).then((module) => module.parcel),
                mountParcel: mountRootParcel,
            };
        },
    };
    </script>
    ```

-   Svelte

    ```ts
    <script lang="ts">
        import { onMount } from "svelte";
        import { mountRootParcel } from "single-spa";

        let container: HTMLDivElement;

        onMount(() => {
            let parcel: any;
            const loadParcel = async () => {
                const { parcel: parcelConfig } = await import(parcelURL);

                parcel = mountRootParcel(parcelConfig, {
                    domElement: container,
                });
            };
            loadParcel();

            return () => {
                if (parcel) {
                    parcel.unmount();
                }
            };
        });
    </script>

    <div bind:this={container}></div>
    ```

### Parcel 유틸리티 함수 사용 방법

-   **getTokens 함수**  
    현재 로그인되어있는 사용자 토큰 3종을 읽어온다.

    ```ts
    const { getTokens } = await import(parcelURL);

    const { idToken, accessToken, refreshToken } = await getTokens();
    ```
