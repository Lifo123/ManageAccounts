import{r as m}from"./index.DhYZZe0J.js";var c={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=m,y=Symbol.for("react.element"),d=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,O=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function _(f,n,s){var e,l={},o=null,i=null;s!==void 0&&(o=""+s),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(e in n)h.call(n,e)&&!E.hasOwnProperty(e)&&(l[e]=n[e]);if(f&&f.defaultProps)for(e in n=f.defaultProps,n)l[e]===void 0&&(l[e]=n[e]);return{$$typeof:y,type:f,key:o,ref:i,props:l,_owner:O.current}}u.Fragment=d;u.jsx=_;u.jsxs=_;c.exports=u;var b=c.exports;let r=[],v=(f,n)=>{let s=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},l:0,lc:0,listen(l,o){return e.lc=s.push(l,o||e.l)/2,()=>{let i=s.indexOf(l);~i&&(s.splice(i,2),--e.lc||e.off())}},notify(l,o){let i=!r.length;for(let t=0;t<s.length;t+=2)r.push(s[t],s[t+1],e.value,l,o);if(i){for(let t=0;t<r.length;t+=5){let p;for(let a=t+1;!p&&(a+=5)<r.length;)r[a]<r[t+1]&&(p=r.push(r[t],r[t+1],r[t+2],r[t+3],r[t+4]));p||r[t](r[t+2],r[t+3],r[t+4])}r.length=0}},off(){},set(l){let o=e.value;o!==l&&(e.value=l,e.notify(o))},subscribe(l,o){let i=e.listen(l,o);return l(e.value),i},value:f};return e};const g=v([]),j=v([]);export{g as A,j as C,b as j};
