// ==UserScript==
// @name         @pickme/auth-widget
// @namespace    pickme
// @version      1
// @author       NarciSource
// @match        http://localhost/*
// @run-at       document-idle
// @description  @pickme/auth를 위젯 형태로 페이지에 삽입하여 앱페이지에서 사용할 수 있도록 합니다.
// ==/UserScript==
const t="@pickme/auth-widget",e=document.createElement("div");e.id=t,e.style.position="fixed",e.style.top="0",e.style.right="0",e.style.zIndex="99999",e.style.background="radial-gradient(ellipse at center, var(--pickme-color-primary) 0%, var(--pickme-color-primary) 30%, transparent 60%)",document.body.appendChild(e);const n=document.createElement("script");n.type="module",n.textContent=`\n    import { parcel } from "https://daily1hour.github.io/PickMe-Auth-Parcel/parcel.js";\n    const { bootstrap, mount } = parcel;\n\n    const container = document.getElementById('${t}');\n\n    bootstrap().then(() => {\n        mount({ name: "app1", domElement: container });\n    });\n`,document.body.appendChild(n);
