import{g as T,j as a}from"./jsx-runtime.DC5zREXe.js";/* empty css                           */import{u as b,C as E,P as A}from"./Dashboard.BEvcDa-9.js";import{r as p}from"./index.DhYZZe0J.js";import{U as I}from"./GlobalStore.tdMZHGi-.js";import"./json.BquTsvhR.js";var g={},U=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(o){e.addRange(o)}),t&&t.focus()}},M=U,j={"text/plain":"Text","text/html":"Url",default:"Text"},L="Copy to clipboard: #{key}, Enter";function B(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function $(e,t){var n,r,o,i,l,c,u=!1;t||(t={}),n=t.debug||!1;try{o=M(),i=document.createRange(),l=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),typeof s.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=j[t.format]||j.default;window.clipboardData.setData(f,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");u=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),r=B("message"in t?t.message:L),window.prompt(r,e)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),o()}return u}var F=$;function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}Object.defineProperty(g,"__esModule",{value:!0});g.CopyToClipboard=void 0;var m=S(p),q=S(F),z=["text","onCopy","options","children"];function S(e){return e&&e.__esModule?e:{default:e}}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(r){w(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H(e,t){if(e==null)return{};var n=K(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function K(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){return t&&X(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function G(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},C(e,t)}function J(e){var t=V();return function(){var r=h(e),o;if(t){var i=h(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Q(this,o)}}function Q(e,t){if(t&&(v(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},h(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){G(n,e);var t=J(n);function n(){var r;W(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),w(D(r),"onClick",function(c){var u=r.props,d=u.text,s=u.onCopy,f=u.children,k=u.options,y=m.default.Children.only(f),R=(0,q.default)(d,k);s&&s(d,R),y&&y.props&&typeof y.props.onClick=="function"&&y.props.onClick(c)}),r}return Z(n,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var i=o.children,l=H(o,z),c=m.default.Children.only(i);return m.default.cloneElement(c,P(P({},l),{},{onClick:this.onClick}))}}]),n}(m.default.PureComponent);g.CopyToClipboard=N;w(N,"defaultProps",{onCopy:void 0,options:void 0});var Y=g,x=Y.CopyToClipboard;x.CopyToClipboard=x;var ee=x;const te=T(ee),{CopyToClipboard:_}=te;function re({data:e,setIsEditing:t}){return a.jsxs("div",{className:"card-div w-90 f-col g-2 mx-auto br-10 ","data-id":e.id,children:[a.jsxs("span",{className:"f-row f-justify-between f-align-end pl-1 pr-2",children:[a.jsx("h3",{className:"m-0",children:e.user||"Username"}),a.jsx("p",{className:"m-0 fs-1 pointer text-blue",onClick:()=>t(e),children:"Edit"})]}),a.jsxs("div",{className:"card-account f-col br-10",children:[a.jsxs("p",{className:"m-0",children:[a.jsx("strong",{children:"Email: "}),a.jsx(_,{text:e.email,children:a.jsx("span",{className:"pointer",children:e.email||"email@gmail.com"})})]}),a.jsxs("p",{className:"m-0",children:[a.jsx("strong",{children:"Password: "}),a.jsx(_,{text:e.password,children:a.jsx("span",{className:"pointer",children:e.password||"Please use a custom password"})})]})]})]})}function ne({funct:e=null}){const t=()=>{if(e){e();return}window.history.back()};return a.jsxs("div",{onClick:t,className:"f-row f-center fw-800 br-max pointer",children:[a.jsx("span",{className:"back-btn no-select",children:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:a.jsx("g",{children:a.jsx("path",{d:"M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"})})})}),"Back"]})}function oe({data:e,setIsEditing:t}){return b(I),b(E),b(A),a.jsxs("section",{className:"card-container f-col g-6 oy-auto h-80 relative px-4",children:[a.jsxs("div",{className:"f-row f-justify-between f-align-center",children:[a.jsx(ne,{funct:()=>t(null)}),a.jsxs("h4",{className:"fs-2",children:[e.user," ",e.id]})]}),"EditCard"]})}function fe(){const e=b(E),[t,n]=p.useState(!1),[r,o]=p.useState(null);return p.useEffect(()=>{n(!0)},[]),p.useEffect(()=>{o(null)},[e]),t?a.jsx(a.Fragment,{children:r?a.jsx(oe,{data:r,setIsEditing:o}):a.jsx("section",{className:"card-container f-col g-6 oy-auto h-80 relative",children:e?.Accounts?.length>0?e.Accounts.map((i,l)=>a.jsx(re,{data:i,setIsEditing:o},l)):a.jsx("p",{className:"w-95 mx-auto",children:"No hay cuentas disponibles"})})}):a.jsx("p",{children:"Loading..."})}export{fe as default};
