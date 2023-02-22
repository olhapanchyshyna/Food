!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){(function(e,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var r;r=function(){"use strict";function t(t){return"function"==typeof t}var r=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,s=void 0,c=function(t,e){m[o]=t,m[o+1]=e,2===(o+=2)&&(s?s(v):w())},a="undefined"!=typeof window?window:void 0,l=a||{},u=l.MutationObserver||l.WebKitMutationObserver,d="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(v,1)}}var m=new Array(1e3);function v(){for(var t=0;t<o;t+=2)(0,m[t])(m[t+1]),m[t]=void 0,m[t+1]=void 0;o=0}var p,y,g,_,w=void 0;function b(t,e){var n=this,r=new this.constructor(E);void 0===r[L]&&I(r);var o=n._state;if(o){var i=arguments[o-1];c((function(){return k(o,r,i,n._result)}))}else M(n,r,t,e);return r}function S(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(E);return x(e,t),e}d?w=function(){return e.nextTick(v)}:u?(y=0,g=new u(v),_=document.createTextNode(""),g.observe(_,{characterData:!0}),w=function(){_.data=y=++y%2}):f?((p=new MessageChannel).port1.onmessage=v,w=function(){return p.port2.postMessage(0)}):w=void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(v)}:h()}catch(t){return h()}}():h();var L=Math.random().toString(36).substring(2);function E(){}function A(e,n,r){n.constructor===e.constructor&&r===b&&n.constructor.resolve===S?function(t,e){1===e._state?q(t,e._result):2===e._state?j(t,e._result):M(e,void 0,(function(e){return x(t,e)}),(function(e){return j(t,e)}))}(e,n):void 0===r?q(e,n):t(r)?function(t,e,n){c((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?x(t,n):q(t,n))}),(function(e){r||(r=!0,j(t,e))}),t._label);!r&&o&&(r=!0,j(t,o))}),t)}(e,n,r):q(e,n)}function x(t,e){if(t===e)j(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)q(t,e);else{var n=void 0;try{n=e.then}catch(e){return void j(t,e)}A(t,e,n)}var r,o}function T(t){t._onerror&&t._onerror(t._result),C(t)}function q(t,e){void 0===t._state&&(t._result=e,t._state=1,0!==t._subscribers.length&&c(C,t))}function j(t,e){void 0===t._state&&(t._state=2,t._result=e,c(T,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&c(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?k(n,r,o,i):o(i);t._subscribers.length=0}}function k(e,n,r,o){var i=t(r),s=void 0,c=void 0,a=!0;if(i){try{s=r(o)}catch(t){a=!1,c=t}if(n===s)return void j(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;void 0!==n._state||(i&&a?x(n,s):!1===a?j(n,c):1===e?q(n,s):2===e&&j(n,s))}var O=0;function I(t){t[L]=O++,t._state=void 0,t._result=void 0,t._subscribers=[]}var P=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(E),this.promise[L]||I(this.promise),r(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?q(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&q(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;void 0===this._state&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===S){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===b&&void 0!==t._state)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===D){var c=new n(E);s?j(c,i):A(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;void 0===r._state&&(this._remaining--,2===t?j(r,n):this._result[e]=n),0===this._remaining&&q(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}(),D=function(){function e(t){this[L]=O++,this._result=this._state=void 0,this._subscribers=[],E!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){j(t,e)}))}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):this.then(e,e)},e}();return D.prototype.then=b,D.all=function(t){return new P(this,t).promise},D.race=function(t){var e=this;return r(t)?new e((function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)})):new e((function(t,e){return e(new TypeError("You must pass an array to race."))}))},D.resolve=S,D.reject=function(t){var e=new this(E);return j(e,t),e},D._setScheduler=function(t){s=t},D._setAsap=function(t){c=t},D._asap=c,D.polyfill=function(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=D},D.Promise=D,D},t.exports=r()}).call(this,n(1),n(2))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var a,l=[],u=!1,d=-1;function f(){u&&a&&(u=!1,a.length?l=a.concat(l):d=-1,l.length&&h())}function h(){if(!u){var t=c(f);u=!0;for(var e=l.length;e;){for(a=l,l=[];++d<e;)a&&a[d].run();d=-1,e=l.length}a=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new m(t,e)),1!==l.length||u||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){"use strict";n.r(e);n(3);var r=function(t,e,n,r){let o=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(n);function c(){i.forEach(t=>{t.classList.add("hide"),t.classList.remove("show","fade")}),o.forEach(t=>{t.classList.remove(r)})}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i[t].classList.add("show"),i[t].classList.remove("hide"),o[t].classList.add(r)}c(),a(),s.addEventListener("click",e=>{e.target&&e.target.classList.contains(t.slice(1))&&o.forEach((t,n)=>{e.target==t&&(c(),a(n))})})};function o(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function i(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearInterval(e)}var s=function(t,e,n){const r=document.querySelectorAll(t),s=document.querySelector(e);r.forEach(t=>{t.addEventListener("click",()=>i(e,n))}),s.addEventListener("click",t=>{t.target!==s&&""!=t.target.getAttribute("data-close")||o(e)}),document.addEventListener("keydown",t=>{"Escape"===t.code&&s.classList.contains("show")&&o(e)}),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(i(e,n),window.removeEventListener("scroll",t))}))};var c=function(t,e){const n=document.querySelectorAll(t),r="img/form/spinner.svg",s="Спасибо! Скоро мы с вами свяжемся",c="Что-то пошло не так...";function a(t){const n=document.querySelector(".modal__dialog");n.classList.add("hide"),i(".modal",e);const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${t}</div>\n            </div>\n        `,document.querySelector(".modal").append(r),setTimeout(()=>{r.remove(),n.classList.add("show"),n.classList.remove("hide"),o(".modal")},4e3)}n.forEach(t=>{var e;(e=t).addEventListener("submit",t=>{t.preventDefault();let n=document.createElement("img");n.src=r,n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{let n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await n.json()})("http://localhost:3000/requests",JSON.stringify(Object.fromEntries(o.entries()))).then(t=>{console.log(t),a(s),n.remove()}).catch(()=>{a(c)}).finally(()=>{e.reset()})})})};var a=function(){class t{constructor(t,e,n,r,o,i){this.src=t,this.alt=e,this.title=n,this.descr=r,this.price=o;for(var s=arguments.length,c=new Array(s>6?s-6:0),a=6;a<s;a++)c[a-6]=arguments[a];this.classes=c,this.parent=document.querySelector(i),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach(e=>t.classList.add(e)),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(t)}}(async function(t){let e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then(e=>{e.forEach(e=>{let{img:n,altimg:r,title:o,descr:i,price:s}=e;new t(n,r,o,i,s,".menu .container").render()})})};var l=function(t){let{container:e,slide:n,prevArray:r,nextArray:o,totalCount:i,currentCount:s,wrapper:c,filled:a}=t;const l=document.querySelector(e),u=document.querySelectorAll(n),d=document.querySelector(o),f=document.querySelector(r),h=document.querySelector(i),m=document.querySelector(s),v=document.querySelector(c),p=document.querySelector(a),y=window.getComputedStyle(v).width;let g=1,_=0;u.length<10?(h.textContent="0"+u.length,m.textContent="0"+g):(h.textContent=u.length,m.textContent=g),p.style.display="flex",p.style.width=100*u.length+"%",p.style.transition="0.5 all",v.style.overflow="hidden",l.style.position="relative",u.forEach(t=>{t.style.width=y});const w=document.createElement("ol"),b=[];w.classList.add("carousel-indicators"),w.style.cssText="position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",l.append(w);for(let t=0;t<u.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n        box-sizing: content-box;\n        flex: 0 1 auto;\n        width: 30px;\n        height: 6px;\n        margin-right: 3px;\n        margin-left: 3px;\n        cursor: pointer;\n        background-color: #fff;\n        background-clip: padding-box;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        opacity: .5;\n        transition: opacity .6s ease;\n    ",0==t&&(e.style.opacity="1"),w.append(e),b.push(e)}function S(t){t.forEach(t=>t.style.opacity=".5"),t[g-1].style.opacity=1}function L(t){t.style.transform=`translateX(-${_}px)`}function E(t){return+t.replace(/\D/gi,"")}function A(t){u.length<10?t.textContent="0"+g:t.textContent=g}d.addEventListener("click",()=>{_==E(y)*(u.length-1)?_=0:_+=E(y),L(p),g==u.length?g=1:g++,A(m),S(b)}),f.addEventListener("click",()=>{0==_?_=E(y)*(u.length-1):_-=E(y),L(p),1==g?g=u.length:g--,A(m),S(b)}),b.forEach(t=>{t.addEventListener("click",t=>{const e=t.target.getAttribute("data-slide-to");g=e,_=E(y)*(e-1),L(p),A(m),S(b)})})};var u=function(t,e){function n(t){return t>=0&&t<10?"0"+t:t}!function(t,e){const r=document.querySelector(t),o=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes"),c=r.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date),n=Math.floor(e/864e5),r=Math.floor(e/36e5%24),o=Math.floor(e/6e4%60),i=Math.floor(e/1e3%60);return e<=0?{total:0,days:0,hours:0,minutes:0,seconds:0}:{total:e,days:n,hours:r,minutes:o,seconds:i}}(e);o.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(a)}l()}(t,e)};var d=function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,i;function s(){t.textContent=e&&n&&r&&o&&i?"famale"===e?Math.round((447.6+9.2*r+3.1*n-4.3*o)*i):Math.round((88.36+13.4*r+4.8*n-5.7*o)*i):"____"}function c(t,n){const r=document.querySelectorAll(t);r.forEach(t=>{t.classList.remove(n),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(n),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(n),t.addEventListener("click",t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),r.forEach(t=>{t.classList.remove(n)}),t.target.classList.add(n),s()})})}function a(t){const e=document.querySelector(t);e.addEventListener("input",()=>{switch(e.value.match(/\D/g)?e.style.background="#FFCDD2":e.style.background="white",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":r=+e.value;break;case"age":o=+e.value}s()})}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="famale",localStorage.setItem("sex","famale")),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i=1.375,localStorage.setItem("ratio",1.375)),s(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),a("#height"),a("#weight"),a("#age")};n(0).polyfill(),window.addEventListener("DOMContentLoaded",()=>{const t=setTimeout(()=>i(".modal",t),3e4);r(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),c("form",t),a(),s("[data-modal]",".modal",t),l({container:".offer__slider",slide:".offer__slide",prevArray:".offer__slider-prev",nextArray:".offer__slider-next",totalCount:"#total",currentCount:"#current",wrapper:".offer__slider-wrapper",filled:".offer_slider_inner"}),u(".timer","2022-12-31"),d()})}]);
//# sourceMappingURL=bundle.js.map