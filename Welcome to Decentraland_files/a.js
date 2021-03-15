!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";var r=n(1);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(t instanceof Date)return t;if("number"==typeof t&&!Number.isNaN(t))return new Date(t);if("string"==typeof t){var n=Date.parse(t);if(!Number.isNaN(n))return new Date(n)}if(e instanceof Date)return e;if("number"==typeof e&&!Number.isNaN(e))return new Date(e);if("string"==typeof e){var r=Date.parse(e);if(!Number.isNaN(r))return new Date(r)}return new Date(0)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null==t?String(e)+"px":"number"==typeof t?String(t)+"px":String(t)}function c(t){return t.filter((function(t){return t&&"string"==typeof t})).join(" ")}n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var l=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6048e5;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.key=e,this.ttl=r,this.map=void 0,this.persisting=!1,this.load(),window.addEventListener("storage",(function(){return n.load()}))}var e,n,i;return e=t,(n=[{key:"load",value:function(){if(this.persisting)this.persisting=!1;else try{var t=Date.now(),e=JSON.parse(localStorage.getItem(this.key)||"[]").filter((function(e){return Object(r.a)(e,2)[1]>t}));this.map=new Map(e)}catch(t){console.error(t),this.map||(this.map=new Map)}return this}},{key:"persist",value:function(){this.persisting=!0,localStorage.setItem(this.key,JSON.stringify(Array.from(this.map.entries())))}},{key:"has",value:function(t){return this.map.has(t)}},{key:"add",value:function(t){return this.map.set(t,Date.now()+this.ttl),this.persist(),this}},{key:"delete",value:function(t){var e=this.map.delete(t);return this.persist(),e}}])&&o(e.prototype,n),i&&o(e,i),t}()},function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d}));var r=n(3),o=n.n(r),i=n(4),a=n(0),c=t.env.REACT_APP_HOUSE_AD_ENDPOINT||t.env.HOUSE_AD_ENDPOINT||"https://a.bears.finance/api/v1",l=new Map,s=Date.now(),u=null;function f(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).includeUnfinished;if(!u)if(c){var e="";if(window.URLSearchParams){var n=new URLSearchParams;t&&n.set("list","unfinished"),e=String(n)?"?"+String(n):""}u=fetch(c+"/ads"+e,{mode:"cors"}).then((function(t){return t.ok?t.json():[]})).catch((function(t){return console.error(t),[]}))}else u=Promise.resolve([]);return u}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u){t.next=5;break}return t.next=3,f();case 3:t.sent.filter((function(t){var e=Object(a.d)(t.startAt).getTime(),n=t.finishAt&&Object(a.d)(t.finishAt).getTime();return!1!==t.isEnabled&&s>=e&&(!n||s<n)})).forEach((function(t){l.has(t.slotName)?Object(a.d)(t.startAt).getTime()>Object(a.d)(l.get(t.slotName).startAt).getTime()&&l.set(t.slotName,t):l.set(t.slotName,t)}));case 5:return t.next=7,u;case 7:return t.abrupt("return",e&&l.get(e)||null);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}).call(this,n(5))},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,l,"next",t)}function l(t){r(a,o,i,c,l,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return o}))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var l,s=[],u=!1,f=-1;function d(){u&&l&&(u=!1,l.length?s=l.concat(s):f=-1,s.length&&h())}function h(){if(!u){var t=c(d);u=!0;for(var e=s.length;e;){for(l=s,s=[];++f<e;)l&&l[f].run();f=-1,e=s.length}l=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new p(t,e)),1!==s.length||u||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=u;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=s(t,e,n);if("normal"===l.type){if(r=n.done?h:f,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u="suspendedStart",f="suspendedYield",d="executing",h="completed",p={};function g(){}function v(){}function y(){}var m={};m[i]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(j([])));_&&_!==n&&r.call(_,i)&&(m=_);var w=y.prototype=g.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var c=s(t[n],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=w.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(C.prototype),C.prototype[a]=function(){return this},t.AsyncIterator=C,t.async=function(e,n,r,o){var i=new C(l(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(9)(!1)).push([t.i,":root {\n  --font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, sans-serif;\n  --unit-size: 15px;\n  --color-action: #f05;\n}\n\n.DCL__Ad {\n  background: #eee;\n  background-size: cover;\n  width: 100%;\n  border-radius: var(--unit-size);\n  position: relative;\n  font-family: var(--font-family);\n  padding: var(--unit-size);\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.DCL__Ad.DCL__Ad--full {\n  border-radius: 0;\n  box-sizing: border-box;\n  padding: 12px 16px;\n  text-align: center;\n}\n\n.DCL__Ad.DCL__Ad--mini {\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.DCL__Ad.DCL__Ad--empty {\n  display: none;\n}\n\n.DCL__Ad.DCL__Ad--closable {\n  padding-right: 32px;\n}\n\n.DCL__Ad .DCL__Ad__Container {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.DCL__Ad.DCL__Ad--full .DCL__Ad__Container {\n  max-width: 1064px;\n  width: 100%;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\n.DCL__Ad p,\n.DCL__Ad a,\n.DCL__Ad h1,\n.DCL__Ad h2,\n.DCL__Ad h3,\n.DCL__Ad h4,\n.DCL__Ad h5,\n.DCL__Ad h6 {\n  margin: 0;\n}\n\n.DCL__Ad .DCL__Ad__Action,\n.DCL__Ad .DCL__Ad__Button,\n.DCL__Ad .DCL__Ad__Image {\n  position: absolute;\n}\n\n.DCL__Ad .DCL__Ad__TextBlock {\n  position: relative;\n  display: block;\n  padding: 0;\n  box-sizing: border-box;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Title {\n  line-height: calc(var(--unit-size) * 2.5);\n  font-size: calc(var(--unit-size) * 2);\n  margin-bottom: calc(var(--unit-size) * 0.25);\n  font-weight: 600;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Subtitle {\n  line-height: calc(var(--unit-size) * 1.75);\n  font-size: calc(var(--unit-size) * 1.25);\n  margin-bottom: calc(var(--unit-size) * 0.25);\n  font-weight: 500;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Paragraph {\n  line-height: calc(var(--unit-size) * 1.3);\n  margin-bottom: calc(var(--unit-size) * 0.25);\n  font-size: var(--unit-size);\n  font-weight: 300;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Link {\n  color: inherit;\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n.DCL__Ad .DCL__Ad__Link:hover {\n  opacity: 0.8;\n}\n\n.DCL__Ad .DCL__Ad__Emphasis {\n  font-style: italic;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Delete {\n  font-style: line-through;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Strong {\n  font-weight: 600;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Underline {\n  text-decoration: underline;\n  color: inherit;\n}\n\n.DCL__Ad .DCL__Ad__Action {\n  display: block;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.DCL__Ad .DCL__Ad__Button {\n  line-height: var(--unit-size * 1.25);\n  font-size: var(--unit-size);\n  border-radius: calc(var(--unit-size) * 0.5);\n  background-color: var(--color-action);\n  color: white;\n  padding: calc(var(--unit-size) * 0.7) calc(var(--unit-size) * 1.7);\n  display: block;\n  text-transform: uppercase;\n  text-decoration: none;\n  cursor: pointer;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.DCL__Ad .DCL__Ad__Image {\n  box-sizing: border-box;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.DCL__Ad .DCL__Ad__Close {\n  display: block;\n  position: absolute;\n  cursor: pointer;\n  top: var(--unit-size);\n  right: var(--unit-size);\n  box-sizing: border-box;\n  height: var(--unit-size);\n  width: var(--unit-size);\n}\n\n.DCL__Ad.DCL__Ad--full .DCL__Ad__Close {\n  top: 12px;\n  right: 16px;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t,e){return e?e.querySelector(t):document.querySelector(t)},l=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=c.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,u=0,f=[],d=n(11);function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function g(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),g(t,e),e}function m(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=s||(s=y(e)),r=L.bind(null,n,a,!1),o=L.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),g(t,e),e}(e),r=x.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=C.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return h(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}t&&h(p(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}};var _,w=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function L(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function C(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function x(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var o,i,a=n(2);!function(t){t.en="en",t.es="es",t.fr="fr",t.ja="ja",t.zh="zh",t.ko="ko"}(o||(o={})),function(t){t.Image="image",t.Button="button",t.Action="action",t.TextBlock="textBlock",t.Link="link",t.Title="title",t.Subtitle="subtitle",t.Paragraph="paragraph",t.Strong="strong",t.Underline="underline",t.Emphasis="emphasis",t.Delete="delete"}(i||(i={}));var c=n(0),l=n(1);function s(t){return null==t?[]:Array.isArray(t)&&t||[t]}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.en;return n===o.en||f(t[n])?e:t[n]}function f(t){return!1===t||null==t||Number.isNaN(t)}var d={second:1e3,minute:6e4,hour:36e5,day:864e5},h=/{{countdown:(\d\d\d\d-\d\d-\d\d(t|\s)\d\d:\d\d:\d\dz?)}}/i;function p(t){return t>10?String(t):"0"+String(t)}function g(t,e,n){if(t){var r=n-Date.now()+d.second,o=Math.floor(r/d.day),i=Math.floor(r%d.day/d.hour),a=Math.floor(r%d.hour/d.minute),c=Math.floor(r%d.minute/d.second);t.textContent=function(t,e){return t.replace(h,(function(){return"".concat(e.days,"d ").concat(e.hours,"h ").concat(e.minutes,"m ").concat(e.seconds,"s")}))}(e,{days:o,hours:p(i),minutes:p(a),seconds:p(c)}),r>0&&setTimeout((function(){return g(t,e,n)}),Date.now()%d.second)}}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){if(t!==i.Link&&t!==i.Title&&t!==i.Subtitle&&t!==i.Paragraph&&t!==i.Strong&&t!==i.Underline&&t!==i.Emphasis&&t!==i.Delete)return null;var r=null;switch(t){case i.Link:var a=document.createElement("a");a.className="DCL__Ad__Link",a.target="_blank",a.href=e.href||"",e.title&&(a.title=e.title),r=a;break;case i.Paragraph:case i.Subtitle:case i.Title:var f=document.createElement("p");f.className=Object(c.b)([t===i.Title&&"DCL__Ad__Title",t===i.Subtitle&&"DCL__Ad__Subtitle",t===i.Paragraph&&"DCL__Ad__Paragraph"]),r=f;break;case i.Emphasis:case i.Strong:case i.Underline:case i.Delete:var d=document.createElement("span");d.className=Object(c.b)([t===i.Emphasis&&"DCL__Ad__Emphasis",t===i.Strong&&"DCL__Ad__Strong",t===i.Underline&&"DCL__Ad__Underline",t===i.Delete&&"DCL__Ad__Delete"]),r=d}return null!==r?(e.textColor&&(r.style.color=e.textColor),e.textShadowColor&&(r.style.textShadow="0 0 .1em ".concat(e.textShadowColor)),s(u(e,n,e.lang||o.en)).forEach((function(t){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.en;if(null==t||!1===t)return null;switch(typeof t){case"string":case"number":case"boolean":var n=document.createTextNode(String(t));return t&&h.test(String(t))&&function(t){var e=t.textContent||"",n=e.match(h);if(n){var r=Object(l.a)(n,2)[1];"z"!==r.slice(-1).toLowerCase()&&(r+="z");var o=Date.parse(r);Number.isFinite(o)&&g(t,e,o)}}(n),n;default:var r=t,i=r.type,a=r.props,c=r.children;return m(i,y({},a,{lang:e}),u(a,c,e||o.en))}}(t,e.lang);n&&r&&r.appendChild(n)})),r):null}var b=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];switch(t){case i.Button:return function(t,e,n){if(t!==i.Button)return null;var r=document.createElement("a");r.className="DCL__Ad__Button",e.href&&(r.href=e.href),e.target&&(r.target=e.target),e.rel&&(r.rel=e.rel),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.textColor&&(r.style.color=e.textColor),e.backgroundColor&&(r.style.backgroundColor="none"===e.backgroundColor?"transparent":e.backgroundColor),e.textShadowColor&&(r.style.textShadow="0 0 .1em ".concat(e.textShadowColor)),e.boxShadowColor&&(r.style.boxShadow="0 0 .1em ".concat(e.boxShadowColor)),e.borderColor&&(r.style.border="1 solid ".concat(e.borderColor)),e.width&&(r.style.width=Object(c.c)(e.width)),f(e.bottom)?f(e.top)||(r.style.top=Object(c.c)(e.top,0)):r.style.bottom=Object(c.c)(e.bottom,0),f(e.right)?f(e.left)||(r.style.left=Object(c.c)(e.left,0)):r.style.right=Object(c.c)(e.right,0);var a=u(e,n,e.lang||o.en),l=document.createTextNode(String(a||"").trim());return r.appendChild(l),r}(i.Button,e,s(n).map(String).join(" "));case i.Image:return function(t,e){if(t!==i.Image)return null;var n=document.createElement("div");n.className="DCL__Ad__Image";var r=Object(c.c)(e.width,100),o=Object(c.c)(e.width,100);return n.style.backgroundImage='url("'.concat(e.src,'")'),n.style.width=r,n.style.height=o,f(e.bottom)?f(e.top)||(n.style.top=Object(c.c)(e.top)):n.style.bottom=Object(c.c)(e.bottom),f(e.right)?f(e.left)||(n.style.left=Object(c.c)(e.left)):n.style.right=Object(c.c)(e.right),n}(t,e);case i.TextBlock:return function(t,e,n){if(t!==i.TextBlock)return null;var r=document.createElement("div");r.className="DCL__Ad__TextBlock";var a=Object(c.c)(e.paddingTop,0),l=Object(c.c)(e.paddingBottom,0),f=Object(c.c)(e.paddingLeft,0),d=Object(c.c)(e.paddingRight,0);return r.style.paddingTop=a,r.style.paddingBottom=l,r.style.paddingLeft=f,r.style.paddingRight=d,e.textColor&&(r.style.color=e.textColor),e.textShadowColor&&(r.style.textShadow="0 0 .1em ".concat(e.textShadowColor)),s(u(e,n,e.lang||o.en)).forEach((function(t){if(t&&"object"==typeof t){var n=m(t.type,y({},t.props,{lang:e.lang}),t);n&&r.appendChild(n)}})),r}(t,e,n);case i.Paragraph:case i.Link:case i.Subtitle:case i.Title:return m(t,e,n);case i.Emphasis:case i.Strong:case i.Underline:case i.Delete:return m(i.Paragraph,{lang:e.lang},{type:t,props:e,children:n});default:return null}};n(7);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var w=new c.a("dcl-ad-ttl",2592e6);function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.en,n=document.createElement("div"),a=Date.now(),l=t.id,u=!1!==t.isClosable,d=function(t){var e=t.id;return!1===t.isEnabled||e&&w.has(e)}(t);if(n.className=Object(c.b)(["DCL__Ad",d&&"DCL__Ad--empty",u&&"DCL__Ad--closable","mini"===t.type&&"DCL__Ad--mini","full"===t.type&&"DCL__Ad--full"]),d)return n;window.analytics&&!d&&window.analytics.track("ad_show",{ad:l,slot:t.slot,location:window.location}),t.textColor&&(n.style.color=t.textColor),t.textShadowColor&&(n.style.textShadow="0 0 .1em ".concat(t.textShadowColor)),t.backgroundColor&&(n.style.backgroundColor=t.backgroundColor),t.backgroundImage&&(n.style.backgroundImage='url("'.concat(t.backgroundImage,'")')),t.backgroundPositionX&&(n.style.backgroundPositionX=t.backgroundPositionX),t.backgroundPositionY&&(n.style.backgroundPositionY=t.backgroundPositionY),f(t.minHeight)||(n.style.minHeight=Object(c.c)(t.minHeight)),f(t.maxHeight)||(n.style.maxHeight=Object(c.c)(t.maxHeight)),f(t.height)||(n.style.height=Object(c.c)(t.height));var h=document.createElement("div");if(h.className="DCL__Ad__Container",n.appendChild(h),s(t.content).forEach((function(t){if(!f(t)){var n=typeof t,o=null;if("string"===n||"number"===n||"boolean"===n)b(i.Paragraph,{lang:e},String(t));else{var a=t;a.type&&(o=b(a.type,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a.props,{lang:e}),a.children))}o&&h.appendChild(o)}})),t.href){var p=document.createElement("a");p.className="DCL__Ad__Action",p.href=t.href,t.target&&(p.target=t.target),t.rel&&(p.rel=t.rel),t.referrerPolicy&&(p.referrerPolicy=t.referrerPolicy),n.appendChild(p)}var g=function(e){try{if(window.analytics&&e.target&&"A"===e.target.nodeName){var n=e.target;window.analytics.track("ad_click",{ad:l,slot:t.slot,location:window.location,href:n.href,text:n.innerText,time:Math.ceil((Date.now()-a)/1e3)})}t.onClick&&t.onClick(e)}catch(t){console.log(t)}};if(n.addEventListener("click",g),u){var v=document.createElement("div");v.className="DCL__Ad__Close",v.innerHTML='<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-2-2h18v18H-2z"/><path d="M13.728.344l-.072-.072a1 1 0 0 0-1.415 0L7 5.512 1.759.273a1 1 0 0 0-1.415 0L.272.344a1 1 0 0 0 0 1.415L5.512 7l-5.24 5.241a1 1 0 0 0 0 1.415l.072.072a1 1 0 0 0 1.415 0L7 8.488l5.241 5.24a1 1 0 0 0 1.415 0l.072-.072a1 1 0 0 0 0-1.415L8.488 7l5.24-5.241a1 1 0 0 0 0-1.415z" fill="'.concat(t.textColor||"#FFF",'"/></g></svg>');v.addEventListener("click",(function e(r){r.stopPropagation(),window.analytics&&window.analytics.track("ad_close",{ad:l,slot:t.slot,location:window.location,time:Math.ceil((Date.now()-a)/1e3)}),l&&w.add(l);try{"function"==typeof t.onClose&&t.onClose&&t.onClose(r)}catch(t){console.log(t)}r.defaultPrevented||(g&&n.removeEventListener("click",g),e&&v.removeEventListener("click",e),n.parentNode&&n.parentNode.removeChild(n))})),n.appendChild(v)}return n}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var x={loadAd:a.a,loadAllAds:a.b,createAd:L,load:function(){var t=document.querySelector("html"),e=Array.from(document.querySelectorAll("[data-ad-slot]")).filter((function(t){return Boolean(t.dataset.adSlot)})),n=new Map(e.map((function(t){return[t.dataset.adSlot||"",t]})));Promise.all(e.map((function(t){return Object(a.a)(t.dataset.adSlot)}))).then((function(e){(e||[]).filter(Boolean).forEach((function(e){for(var i=n.get(e.slotName),a=o[i.dataset.adLang]||o[t.lang]||o.en,c=L(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{type:i.dataset.adType||"regular"}),a);i.firstChild;)i.removeChild(i.firstChild);i.appendChild(c)}))}))}};Object.assign(window,{ad:x})}]);
//# sourceMappingURL=ad.js.map