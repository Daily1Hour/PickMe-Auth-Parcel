const containerId = "@pickme/auth-widget";
const authWidgetUrl = `${import.meta.env.VITE_DOMAIN}/${import.meta.env.VITE_BASE}/parcel.js`; // 빌드된 auth 위젯의 URL

// 컴포넌트 저장할 div
const containerDiv = document.createElement("div");
containerDiv.id = containerId;
containerDiv.style.position = "fixed";
containerDiv.style.top = "0";
containerDiv.style.right = "0";
containerDiv.style.zIndex = "99999";
containerDiv.style.background =
    "radial-gradient(ellipse at center, var(--pickme-color-primary) 0%, var(--pickme-color-primary) 30%, transparent 60%)";
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
