import{r as e,c as r,u as s,g as n,j as o,S as t,H as i,C as c,a as l,b as d,F as a,A as u,d as h,e as f}from"./assets/App-Dj8r1Eaa.js";var j;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var x=e;j=x.createRoot,x.hydrateRoot;const{withContext:k}=r({key:"heading"}),p=k("h2");function m(){const{idToken:e,accessToken:r,refreshToken:d}=function(){const{data:e,isSuccess:r}=s({queryKey:["tokens"],queryFn:n}),{idToken:o,accessToken:t,refreshToken:i}=r?e:{idToken:null,accessToken:null,refreshToken:null};return{idToken:o,accessToken:t,refreshToken:i}}();
return o.jsxs(t,{m:10,children:[
o.jsxs(i,{children:[
o.jsx(p,{children:"idToken:"}),
o.jsx(c,{value:e||"",children:o.jsx(l,{cursor:"pointer"})})]}),
o.jsxs(i,{children:[
o.jsx(p,{children:"accessToken:"}),
o.jsx(c,{value:r||"",children:o.jsx(l,{cursor:"pointer"})})]}),
o.jsxs(i,{children:[
o.jsx(p,{children:"refreshToken:"}),
o.jsx(c,{value:d||"",children:o.jsx(l,{cursor:"pointer"})})]})]})}function y(){const{isLoggedIn:e}=d();
return o.jsxs(o.Fragment,{children:[
o.jsx(a,{w:"100%",p:3,justifyContent:"right",bg:"pink.700",children:o.jsx(u,{})}),e&&o.jsx(m,{})]})}j(document.getElementById("root")).render(
o.jsx(h.StrictMode,{children:o.jsx(f,{children:o.jsx(y,{})})}));
