import{j as n}from"./jsx-runtime.7faW4zRM.js";/* empty css                           */import{r as c}from"./index.DhYZZe0J.js";import{g as i,s as m}from"./manageData.zNDruM4J.js";import{g as f}from"./manageUserData.p7nK5siC.js";import{a as p,A as a,C as u}from"./Dashboard.D--vVBgA.js";import{S as x}from"./SortArray.D_0NIomv.js";import"./_commonjsHelpers.BosuxZz1.js";const d=p([{user:null}]),g=t=>{let e=0;for(let s=0;s<t.length;s++)t[s].id>e&&(e=t[s].id);return e};function C(){const[t,e]=c.useState(!1),s=()=>{const r=a.get(),o=g(r)+1;a.set(m([{Platform:`New Platform ${o}`,Usage:0,id:o,Accounts:[]},...r]));const l=i();u.set({...l[0],shouldClearInput:!0})};return c.useEffect(()=>{if(e(!0),t){const r=i(),o=x(r);a.set(o),u.set(o[0]),d.set(d.set(f()))}},[t]),n.jsx("span",{className:"plus d-flex f-center br-max pointer",onClick:s,children:n.jsx("svg",{height:"18px",viewBox:"0 0 24 24",fill:"none",children:n.jsx("g",{children:n.jsx("path",{d:"M4 12H20M12 4V20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}export{C as default};
