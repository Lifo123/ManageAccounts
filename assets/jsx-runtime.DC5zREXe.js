import{r as i}from"./index.DhYZZe0J.js";var O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function v(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var o=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),o}var l={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=i,c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,_=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,o){var r,n={},s=null,u=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)y.call(t,r)&&!m.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:c,type:e,key:s,ref:u,props:n,_owner:_.current}}f.Fragment=d;f.jsx=p;f.jsxs=p;l.exports=f;var j=l.exports;export{v as a,O as c,g,j};
