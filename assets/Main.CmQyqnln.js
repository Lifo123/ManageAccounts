import{j as a,C as x}from"./Dashboard.BbQYdyE8.js";/* empty css                           */import{r as _}from"./index.DhYZZe0J.js";import{u as T}from"./index.DhLzyXct.js";import{g as R}from"./manageData.BzZarQnv.js";function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h={},k=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(o){e.addRange(o)}),t&&t.focus()}},I=k,j={"text/plain":"Text","text/html":"Url",default:"Text"},M="Copy to clipboard: #{key}, Enter";function U(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Z(e,t){var r,n,o,i,l,c,f=!1;t||(t={}),r=t.debug||!1;try{o=I(),i=document.createRange(),l=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),typeof s.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=j[t.format]||j.default;window.clipboardData.setData(u,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");f=!0}catch(s){r&&console.error("unable to copy using execCommand: ",s),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),n=U("message"in t?t.message:M),window.prompt(n,e)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),o()}return f}var $=Z;function b(e){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(e)}Object.defineProperty(h,"__esModule",{value:!0});h.CopyToClipboard=void 0;var y=A(_),B=A($),F=["text","onCopy","options","children"];function A(e){return e&&e.__esModule?e:{default:e}}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(n){w(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q(e,t){if(e==null)return{};var r=z(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t,r){return t&&K(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function V(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},v(e,t)}function X(e){var t=J();return function(){var n=m(e),o;if(t){var i=m(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return G(this,o)}}function G(e,t){if(t&&(b(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},m(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=function(e){V(r,e);var t=X(r);function r(){var n;H(this,r);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=t.call.apply(t,[this].concat(i)),w(E(n),"onClick",function(c){var f=n.props,p=f.text,s=f.onCopy,u=f.children,S=f.options,d=y.default.Children.only(u),N=(0,B.default)(p,S);s&&s(p,N),d&&d.props&&typeof d.props.onClick=="function"&&d.props.onClick(c)}),n}return W(r,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var i=o.children,l=q(o,F),c=y.default.Children.only(i);return y.default.cloneElement(c,O(O({},l),{},{onClick:this.onClick}))}}]),r}(y.default.PureComponent);h.CopyToClipboard=D;w(D,"defaultProps",{onCopy:void 0,options:void 0});var Q=h,g=Q.CopyToClipboard;g.CopyToClipboard=g;var Y=g;const ee=L(Y),{CopyToClipboard:P}=ee;function te({data:e}){return a.jsxs("div",{className:"card-div w-90 f-col g-2 mx-auto",children:[a.jsxs("span",{className:"f-row f-justify-between f-align-end pl-1 pr-2",children:[a.jsx("h3",{className:"m-0",children:e.user}),a.jsx("p",{className:"m-0 fs-1 pointer",children:"Edit"})]}),a.jsxs("div",{className:"card-account f-col br-10",children:[a.jsxs("p",{className:"m-0",children:[a.jsx("strong",{children:"Email: "}),a.jsx(P,{text:e.email,children:a.jsx("span",{className:"pointer",children:e.email})})]}),a.jsxs("p",{className:"m-0",children:[a.jsx("strong",{children:"Password: "}),a.jsx(P,{text:e.password,children:a.jsx("span",{className:"pointer",children:e.password})})]})]})]})}const re={Twitter:"wasa",Twitch:"ekside"};function ne({id:e}){return a.jsx("span",{className:"main-head-icon d-flex f-center",children:re[e]})}function se(){const e=T(x);return _.useEffect(()=>{const t=R();x.set(t[0])},[]),a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:"main-head f-row f-justify-between f-align-center",children:[a.jsxs("div",{className:"f-row f-center g-6",children:[a.jsx("span",{children:a.jsx(ne,{id:e.Platform})}),a.jsx("h1",{children:e.Platform})]}),a.jsxs("div",{className:"f-row f-center g-5",children:[a.jsx("span",{className:"add-btn btn fw-800 br-max pointer",children:"Add"}),a.jsx("span",{className:"main-head-icon d-flex f-center pointer br-max",children:a.jsx("svg",{height:"24px",viewBox:"0 0 52 52",children:a.jsx("path",{stroke:"none",d:"M32.26,52a2.92,2.92,0,0,1-2.37-1.21l-3.48-4.73h-.82L22.11,50.8a2.93,2.93,0,0,1-3.5,1L13,49.45a2.93,2.93,0,0,1-1.78-3.17l.89-5.8-.59-.59-5.8.89A2.93,2.93,0,0,1,2.55,39L.23,33.39a2.92,2.92,0,0,1,1-3.5l4.73-3.48v-.82L1.21,22.11a2.92,2.92,0,0,1-1-3.5L2.55,13a2.93,2.93,0,0,1,3.17-1.78l5.8.89.59-.59-.89-5.8A2.93,2.93,0,0,1,13,2.55L18.61.23a2.93,2.93,0,0,1,3.5,1l3.48,4.74h.82l3.48-4.73a2.93,2.93,0,0,1,3.5-1L39,2.55a2.93,2.93,0,0,1,1.78,3.17l-.89,5.8.59.59,5.8-.89A2.93,2.93,0,0,1,49.45,13l2.32,5.61a2.92,2.92,0,0,1-1,3.5l-4.73,3.48v.82l4.73,3.48a2.92,2.92,0,0,1,1,3.5L49.45,39a2.93,2.93,0,0,1-3.17,1.78l-5.8-.89-.59.59.89,5.8A2.93,2.93,0,0,1,39,49.45l-5.61,2.32A2.82,2.82,0,0,1,32.26,52Zm-17-5.93,4.09,1.69,3.3-4.49a2.94,2.94,0,0,1,2.37-1.21H27a3,3,0,0,1,2.37,1.2l3.3,4.5,4.09-1.69-.85-5.51A3,3,0,0,1,36.68,38L38,36.69a3,3,0,0,1,2.53-.83l5.51.85,1.69-4.09-4.49-3.3A2.94,2.94,0,0,1,42.06,27v-1.9a2.94,2.94,0,0,1,1.21-2.37l4.49-3.3L46.07,15.3l-5.51.84A3,3,0,0,1,38,15.31L36.69,14a3,3,0,0,1-.83-2.53l.85-5.51L32.62,4.24l-3.3,4.5A3,3,0,0,1,27,9.94h-1.9a2.94,2.94,0,0,1-2.37-1.21l-3.3-4.49L15.29,5.93l.85,5.51A3,3,0,0,1,15.31,14L14,15.31a3,3,0,0,1-2.53.83L5.93,15.3,4.24,19.38l4.49,3.3a2.94,2.94,0,0,1,1.21,2.37V27a2.94,2.94,0,0,1-1.21,2.37l-4.49,3.3,1.69,4.09,5.51-.85a2.94,2.94,0,0,1,2.53.83L15.31,38a2.94,2.94,0,0,1,.83,2.53Zm31.6-30.9Zm-.31-2h0ZM26,38A12,12,0,1,1,38,26,12,12,0,0,1,26,38Zm0-20a8,8,0,1,0,8,8A8,8,0,0,0,26,18Z"})})})]})]}),a.jsx("section",{className:"card-container f-col g-2",children:e?.Accounts?.length>0?e.Accounts.map((t,r)=>a.jsx(te,{data:t},r)):a.jsx("p",{className:"w-95 mx-auto",children:"No hay cuentas disponibles"})})]})}export{se as default};
