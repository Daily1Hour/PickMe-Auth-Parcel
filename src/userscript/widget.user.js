// ==UserScript==
// @name         @pickme/auth-widget
// @namespace    pickme
// @version      1
// @author       NarciSource
// @match        http://localhost/*
// @run-at       document-idle
// @description  @pickme/auth를 위젯 형태로 페이지에 삽입하여 앱페이지에서 사용할 수 있도록 합니다.
// ==/UserScript==

import { parcel } from "http://localhost:4201/auth/parcel.js";
const { bootstrap, mount } = parcel;

const container = document.body;

bootstrap().then(() => {
    mount({ name: "app1", domElement: container });
});
