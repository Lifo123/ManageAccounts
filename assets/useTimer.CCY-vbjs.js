import{r as o}from"./index.DhYZZe0J.js";function m(e=16,a=30){const[c,t]=o.useState(e),r=o.useRef(null);return{CountDown:n=>new Promise(u=>{t(e),clearInterval(r.current),r.current=setInterval(()=>{t(s=>s<=1?(clearInterval(r.current),n&&u(n()),u(!0),0):s-1)},a)})}}export{m as u};