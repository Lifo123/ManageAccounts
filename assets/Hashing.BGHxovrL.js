import{C as a,S as s}from"./sha256.CdCq7ywz.js";const d=(t=16)=>a.lib.WordArray.random(t).toString(),h=(t,r)=>s(t+r).toString(),e=(t,r)=>t.split("").map((o,n)=>String.fromCharCode(o.charCodeAt(0)^r.charCodeAt(n%r.length))).join(""),i=(t,r)=>{const o=e(t,r);return btoa(o)},S=(t,r)=>{const o=atob(t);return e(o,r)};export{S as d,i as e,d as g,h};
