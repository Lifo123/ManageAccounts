import{j as e}from"./jsx-runtime.7faW4zRM.js";/* empty css                           */import{u as l,C as n,P as u}from"./Dashboard.BEvcDa-9.js";import{r as a}from"./index.DhYZZe0J.js";function c({data:t}){const r=l(n),s=o=>{n.set({...t,shouldClearInput:!0,active:!0})};return e.jsx("li",{className:`as-list d-flex py-3 px-4 br-6 pointer ${r.id===t.id?"active":""}`,onClick:s,"data-id":t.id,"data-name":t.Platform,children:t.Platform||"Platform"})}function x(){const t=l(u),[r,s]=a.useState(!1);return a.useEffect(()=>{s(!0)},[]),r?e.jsx("ul",{className:"aside-cont f-col g-2 o-hidden relative",children:Object.keys(t).map(o=>{const i={Platform:o,...t[o]};return e.jsx(c,{data:i},i.id)})}):e.jsx("p",{children:"Loading..."})}export{x as default};
