import{j as e}from"./jsx-runtime.7faW4zRM.js";/* empty css                           *//* empty css                           */import{u as m}from"./index.DhLzyXct.js";import{C as o,A as l}from"./Dashboard.D--vVBgA.js";import{r}from"./index.DhYZZe0J.js";import{u as h}from"./useTimer.CCY-vbjs.js";import{s as b,d as j}from"./manageData.zNDruM4J.js";import{L as A}from"./manageUserData.BzMdc8aJ.js";import"./index.BwKZQmqs.js";function k(){const t=m(o),c=m(l),[f,i]=r.useState(!1),[p,u]=r.useState(""),{CountDown:d}=h(1);if(r.useEffect(()=>{i(!0)},[]),r.useEffect(()=>{t.shouldClearInput&&(u(t.Platform),o.set({...t,shouldClearInput:!1}))},[t]),!f)return null;const x=async s=>{let a=s.target.value;await d(),u(a),o.set({...t,Platform:a});const P=c.map(n=>n.id===t.id?{...n,Platform:a}:n);l.set(b(P))},C=()=>{const s=j(t.id);l.set(s),o.set({...s[0],shouldClearInput:!0})};return e.jsxs("section",{className:"edit-platform f-col g-2",children:[e.jsx("div",{className:"f-row f-justify-between",children:e.jsx("input",{className:"input-def br-6 py-3 px-5",type:"text",placeholder:t.Platform||"Empty",value:p,onChange:x})}),e.jsx("span",{className:"btn-red btn d-flex f-center br-4 mt-4",onClick:C,children:"Delete Platform"}),e.jsx("span",{className:"btn-red btn d-flex f-center w-max br-4 mt-5",onClick:A,children:"Log Out"})]})}export{k as default};