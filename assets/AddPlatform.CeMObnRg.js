import{j as a}from"./jsx-runtime.7faW4zRM.js";/* empty css                           */import{r as i}from"./index.DhYZZe0J.js";import{g as m,s as d}from"./manageData.zNDruM4J.js";import{g as l}from"./manageUserData.iW8qCRMP.js";import{A as c,C as u}from"./Dashboard.D--vVBgA.js";import{U as f}from"./GlobalStore.3kY8OGcn.js";import{S as p}from"./SortArray.D_0NIomv.js";import"./_commonjsHelpers.BosuxZz1.js";const x=t=>{let s=0;for(let e=0;e<t.length;e++)t[e].id>s&&(s=t[e].id);return s};function C(){const[t,s]=i.useState(!1),e=()=>{const o=c.get(),r=x(o)+1;c.set(d([{Platform:`New Platform ${r}`,Usage:0,id:r,Accounts:[]},...o]));const n=m();u.set({...n[0],shouldClearInput:!0})};return i.useEffect(()=>{if(s(!0),t){let o=JSON.parse(localStorage.getItem("accsToken"));f.set(l(o.username));const r=m(),n=p(r);c.set(n),u.set(n[0])}},[t]),a.jsx("span",{className:"plus d-flex f-center br-max pointer",onClick:e,children:a.jsx("svg",{height:"18px",viewBox:"0 0 24 24",fill:"none",children:a.jsx("g",{children:a.jsx("path",{d:"M4 12H20M12 4V20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}export{C as default};
