// ==UserScript==
// @name         @pickme/auth-widget
// @namespace    pickme
// @version      1
// @author       NarciSource
// @match        http://localhost/*
// @run-at       document-idle
// @description  @pickme/auth를 위젯 형태로 페이지에 삽입하여 앱페이지에서 사용할 수 있도록 합니다.
// ==/UserScript==

const containerId = "@pickme/auth-widget";
const authWidgetUrl = "http://localhost:4201/auth/parcel.js"; // 빌드된 auth 위젯의 URL

// 컴포넌트 저장할 div
const containerDiv = document.createElement("div");
containerDiv.id = containerId;
containerDiv.style.position = "fixed";
containerDiv.style.top = "0";
containerDiv.style.right = "0";
containerDiv.style.zIndex = "99999";
document.body.appendChild(containerDiv);

// 스크립트 모듈 방식으로 로드
const script = document.createElement("script");
script.type = "module";
script.textContent = `
    import { parcel } from "${authWidgetUrl}";
    const { bootstrap, mount } = parcel;

    const container = document.getElementById('${containerId}');

    bootstrap().then(() => {
        mount({ name: "app1", domElement: container });
    });
`;
document.body.appendChild(script);
