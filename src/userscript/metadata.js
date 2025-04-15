export default `
// ==UserScript==
// @name         @pickme/auth-widget
// @namespace    pickme
// @version      1
// @description  @pickme/auth를 위젯 형태로 페이지에 삽입하여 앱페이지에서 사용할 수 있도록 합니다.
// @author       NarciSource
// @icon         https://raw.githubusercontent.com/Daily1Hour/PickMe/refs/heads/main/logo/pickme-logo.svg
// @match        http://localhost/*
// @exclude      http://localhost:4201/*
// @match        https://daily1hour.github.io/PickMe-Record-Application/*
// @match        https://daily1hour.github.io/PickMe-Review-Application/*
// @match        https://daily1hour.github.io/PickMe-Report-Application/*
// @match        https://daily1hour.github.io/PickMe-Calendar-Application/*
// @match        https://daily1hour.github.io/PickMe-Chat-Application/*
// @exclude      https://daily1hour.github.io/PickMe-Auth-Parcel/*
// @updateURL    https://daily1hour.github.io/PickMe-Auth-Parcel/widget.meta.js
// @downloadURL  https://daily1hour.github.io/PickMe-Auth-Parcel/widget.user.js
// @run-at       document-idle
// ==/UserScript==
`;
