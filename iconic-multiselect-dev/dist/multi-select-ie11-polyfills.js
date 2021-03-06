(function(self, undefined) {function ArrayCreate(r){if(1/r==-Infinity&&(r=0),r>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var n=[];return n.length=r,n}function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function CreateDataProperty(e,r,t){var a={value:t,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(e,r,a),!0}catch(n){return!1}}function CreateDataPropertyOrThrow(t,r,o){var e=CreateDataProperty(t,r,o);if(!e)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(o)+"` to property `"+Object.prototype.toString.call(r)+"` on object `"+Object.prototype.toString.call(t)+"`");return e}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function Get(n,t){return n[t]}function HasOwnProperty(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function IsCallable(n){return"function"==typeof n}function RequireObjectCoercible(e){if(null===e||e===undefined)throw TypeError(Object.prototype.toString.call(e)+" is not coercible to Object.");return e}function SameValueNonNumber(e,n){return e===n}function ToBoolean(o){return Boolean(o)}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function CreateIterResultObject(e,r){if("boolean"!==Type(r))throw new Error;var t={};return CreateDataProperty(t,"value",e),CreateDataProperty(t,"done",r),t}function GetPrototypeFromConstructor(t,o){var r=Get(t,"prototype");return"object"!==Type(r)&&(r=o),r}function OrdinaryCreateFromConstructor(r,e){var t=arguments[2]||{},o=GetPrototypeFromConstructor(r,e),a=Object.create(o);for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&Object.defineProperty(a,n,{configurable:!0,enumerable:!1,writable:!0,value:t[n]});return a}function IsConstructor(t){return"object"===Type(t)&&("function"==typeof t&&!!t.prototype)}function Construct(r){var t=arguments.length>2?arguments[2]:r,o=arguments.length>1?arguments[1]:[];if(!IsConstructor(r))throw new TypeError("F must be a constructor.");if(!IsConstructor(t))throw new TypeError("newTarget must be a constructor.");if(t===r)return new(Function.prototype.bind.apply(r,[null].concat(o)));var n=OrdinaryCreateFromConstructor(t,Object.prototype);return Call(r,n,o)}function IsRegExp(e){if("object"!==Type(e))return!1;var n="Symbol"in self&&"match"in self.Symbol?Get(e,self.Symbol.match):undefined;if(n!==undefined)return ToBoolean(n);try{var t=e.lastIndex;return e.lastIndex=0,RegExp.prototype.exec.call(e),!0}catch(l){}finally{e.lastIndex=t}return!1}function IteratorClose(r,t){if("object"!==Type(r["[[Iterator]]"]))throw new Error(Object.prototype.toString.call(r["[[Iterator]]"])+"is not an Object.");var e=r["[[Iterator]]"],o=GetMethod(e,"return");if(o===undefined)return t;try{var n=Call(o,e)}catch(c){var a=c}if(t)return t;if(a)throw a;if("object"!==Type(n))throw new TypeError("Iterator's return method returned a non-object.");return t}function IteratorComplete(t){if("object"!==Type(t))throw new Error(Object.prototype.toString.call(t)+"is not an Object.");return ToBoolean(Get(t,"done"))}function IteratorNext(t){if(arguments.length<2)var e=Call(t["[[NextMethod]]"],t["[[Iterator]]"]);else e=Call(t["[[NextMethod]]"],t["[[Iterator]]"],[arguments[1]]);if("object"!==Type(e))throw new TypeError("bad iterator");return e}function IteratorStep(t){var r=IteratorNext(t);return!0!==IteratorComplete(r)&&r}function IteratorValue(t){if("object"!==Type(t))throw new Error(Object.prototype.toString.call(t)+"is not an Object.");return Get(t,"value")}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function SameValueZero(n,e){return Type(n)===Type(e)&&("number"===Type(n)?!(!isNaN(n)||!isNaN(e))||(1/n===Infinity&&1/e==-Infinity||(1/n==-Infinity&&1/e===Infinity||n===e)):SameValueNonNumber(n,e))}function ToInteger(n){if("symbol"===Type(n))throw new TypeError("Cannot convert a Symbol value to a number");var t=Number(n);return isNaN(t)?0:1/t===Infinity||1/t==-Infinity||t===Infinity||t===-Infinity?t:(t<0?-1:1)*Math.floor(Math.abs(t))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}function ToPropertyKey(r){var i=ToPrimitive(r,String);return"symbol"===Type(i)?i:ToString(i)}var _mutation=function(){function e(e){return"function"==typeof Node?e instanceof Node:e&&"object"==typeof e&&e.nodeName&&e.nodeType>=1&&e.nodeType<=12}return function n(t){if(1===t.length)return e(t[0])?t[0]:document.createTextNode(t[0]+"");for(var o=document.createDocumentFragment(),r=0;r<t.length;r++)o.appendChild(e(t[r])?t[r]:document.createTextNode(t[r]+""));return o}}();CreateMethodProperty(Array.prototype,"find",function e(r){var t=ToObject(this),n=ToLength(Get(t,"length"));if(!1===IsCallable(r))throw new TypeError(r+" is not a function");for(var o=arguments.length>1?arguments[1]:undefined,a=0;a<n;){var i=ToString(a),f=Get(t,i);if(ToBoolean(Call(r,o,[f,a,t])))return f;a+=1}return undefined});CreateMethodProperty(Array.prototype,"includes",function e(r){"use strict";var t=ToObject(this),o=ToLength(Get(t,"length"));if(0===o)return!1;var n=ToInteger(arguments[1]);if(n>=0)var a=n;else(a=o+n)<0&&(a=0);for(;a<o;){var i=Get(t,ToString(a));if(SameValueZero(r,i))return!0;a+=1}return!1});Document.prototype.append=Element.prototype.append=function p(){this.appendChild(_mutation(arguments))};Document.prototype.remove=Element.prototype.remove=function e(){this.parentNode&&this.parentNode.removeChild(this)},"Text"in self&&(Text.prototype.remove=Element.prototype.remove);NodeList.prototype.forEach=Array.prototype.forEach;!function(){var e=Object.getOwnPropertyDescriptor,t=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(e){return!1}},r={}.toString,n="".split;CreateMethodProperty(Object,"getOwnPropertyDescriptor",function c(o,i){var a=ToObject(o);a=("string"===Type(a)||a instanceof String)&&"[object String]"==r.call(o)?n.call(o,""):Object(o);var u=ToPropertyKey(i);if(t)try{return e(a,u)}catch(l){}if(HasOwnProperty(a,u))return{enumerable:!0,configurable:!0,writable:!0,value:a[u]}})}();!function(e){CreateMethodProperty(Object,"isExtensible",function t(n){return"object"===Type(n)&&(!e||e(n))})}(Object.isExtensible);CreateMethodProperty(Object,"keys",function(){"use strict";function t(){var t;try{t=Object.create({})}catch(r){return!0}return o.call(t,"__proto__")}function r(t){var r=n.call(t),e="[object Arguments]"===r;return e||(e="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),e}var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=Object.prototype.propertyIsEnumerable,c=!o.call({toString:null},"toString"),l=o.call(function(){},"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var r=t.constructor;return r&&r.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!a["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(r){return!0}}catch(r){return!0}return!1}(),p=function(t){if("undefined"==typeof window||!f)return u(t);try{return u(t)}catch(r){return!1}};return function s(o){var u="[object Function]"===n.call(o),a=r(o),f="[object String]"===n.call(o),s=[];if(o===undefined||null===o)throw new TypeError("Cannot convert undefined or null to object");var y=l&&u;if(f&&o.length>0&&!e.call(o,0))for(var h=0;h<o.length;++h)s.push(String(h));if(a&&o.length>0)for(var g=0;g<o.length;++g)s.push(String(g));else for(var w in o)t()&&"__proto__"===w||y&&"prototype"===w||!e.call(o,w)||s.push(String(w));if(c)for(var d=p(o),$=0;$<i.length;++$)d&&"constructor"===i[$]||!e.call(o,i[$])||s.push(i[$]);return s}}());!function(){var t={}.toString,e="".split,r=[].concat,o=Object.prototype.hasOwnProperty,c=Object.getOwnPropertyNames||Object.keys,n="object"==typeof self?c(self):[];CreateMethodProperty(Object,"getOwnPropertyNames",function l(a){var p=ToObject(a);if("[object Window]"===t.call(p))try{return c(p)}catch(j){return r.call([],n)}p="[object String]"==t.call(p)?e.call(p,""):Object(p);for(var i=c(p),s=["length","prototype"],O=0;O<s.length;O++){var b=s[O];o.call(p,b)&&!i.includes(b)&&i.push(b)}if(i.includes("__proto__")){var f=i.indexOf("__proto__");i.splice(f,1)}return i})}();!function(e,t){var n={};!function(e){"use strict";function t(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var n=function(e){return.5*(1-Math.cos(Math.PI*e))},o=function(){return"scrollBehavior"in document.documentElement.style},r={_elementScroll:undefined,get elementScroll(){return this._elementScroll||(this._elementScroll=HTMLElement.prototype.scroll||HTMLElement.prototype.scrollTo||function(e,t){this.scrollLeft=e,this.scrollTop=t})},_elementScrollIntoView:undefined,get elementScrollIntoView(){return this._elementScrollIntoView||(this._elementScrollIntoView=HTMLElement.prototype.scrollIntoView)},_windowScroll:undefined,get windowScroll(){return this._windowScroll||(this._windowScroll=window.scroll||window.scrollTo)}},i=function(e){[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach(function(t){return e(t)})},l=function(){var e,t,n;return null!==(n=null===(t=null===(e=window.performance)||void 0===e?void 0:e.now)||void 0===t?void 0:t.call(e))&&void 0!==n?n:Date.now()},c=function(e){var t=l(),o=(t-e.timeStamp)/(e.duration||500);if(o>1)return e.method(e.targetX,e.targetY),void e.callback();var r=(e.timingFunc||n)(o),i=e.startX+(e.targetX-e.startX)*r,a=e.startY+(e.targetY-e.startY)*r;e.method(i,a),e.rafId=requestAnimationFrame(function(){c(e)})},a=function(e){return isFinite(e)?Number(e):0},u=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)},f=function(){return f=Object.assign||function e(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},f.apply(this,arguments)},s=function(e,t){var n,o,i=r.elementScroll.bind(e);if(t.left!==undefined||t.top!==undefined){var u=e.scrollLeft,f=e.scrollTop,s=a(null!==(n=t.left)&&void 0!==n?n:u),d=a(null!==(o=t.top)&&void 0!==o?o:f);if("smooth"!==t.behavior)return i(s,d);var w=function(){window.removeEventListener("wheel",h),window.removeEventListener("touchmove",h)},m={timeStamp:l(),duration:t.duration,startX:u,startY:f,targetX:s,targetY:d,rafId:0,method:i,timingFunc:t.timingFunc,callback:w},h=function(){cancelAnimationFrame(m.rafId),w()};window.addEventListener("wheel",h,{passive:!0,once:!0}),window.addEventListener("touchmove",h,{passive:!0,once:!0}),c(m)}},d=function(e){if(!o()){var t=r.elementScroll;i(function(n){return n.scroll=function o(){if(1===arguments.length){var n=arguments[0];if(!u(n))throw new TypeError("Failed to execute 'scroll' on 'Element': parameter 1 ('options') is not an object.");return s(this,f(f({},n),e))}return t.apply(this,arguments)}})}},w=function(e,t){var n=a(t.left||0)+e.scrollLeft,o=a(t.top||0)+e.scrollTop;return s(e,f(f({},t),{left:n,top:o}))},m=function(e){o()||i(function(t){return t.scrollBy=function n(){if(1===arguments.length){var t=arguments[0];if(!u(t))throw new TypeError("Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.");return w(this,f(f({},t),e))}var n=Number(arguments[0]),o=Number(arguments[1]);return w(this,{left:n,top:o})}})},h=function(e,t,n,o){var r=0===t&&n||1===t&&!n?e.inline:e.block;return"center"===r?1:"nearest"===r?0:"start"===r?0===t?o?5:4:2:"end"===r?0===t?o?4:5:3:n?0===t?0:2:0===t?4:0},p=function(e,t,n,o,r,i,l,c){return i<e&&l>t||i>e&&l<t?0:i<=e&&c<=n||l>=t&&c>=n?i-e-o:l>t&&c<n||i<e&&c>n?l-t+r:0},v=function(e){return"visible"!==e&&"clip"!==e},b=function(e){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var t=getComputedStyle(e);return v(t.overflowY)||v(t.overflowX)}return!1},g=function(e){var t=e.parentNode;return t&&(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.host:t)},y=function(e,n){var o,r;if(e.ownerDocument.documentElement.contains(e)){for(var i=document.scrollingElement||document.documentElement,l=[],c=g(e);null!==c;c=g(c)){if(c===i){l.push(c);break}c===document.body&&b(c)&&!b(document.documentElement)||b(c)&&l.push(c)}var a=window.visualViewport?window.visualViewport.width:innerWidth,u=window.visualViewport?window.visualViewport.height:innerHeight,d=window.scrollX||window.pageXOffset,w=window.scrollY||window.pageYOffset,m=e.getBoundingClientRect(),v=m.height,y=m.width,S=m.top,E=m.right,T=m.bottom,k=m.left,I=getComputedStyle(e),j=I.writingMode||I.getPropertyValue("-webkit-writing-mode")||I.getPropertyValue("-ms-writing-mode")||"horizontal-tb",L=["horizontal-tb","lr","lr-tb","rl"].some(function(e){return e===j}),F=["vertical-rl","tb-rl"].some(function(e){return e===j}),M=h(n,0,L,F),O=h(n,1,L,F),V=function(){switch(O){case 2:case 0:return S;case 3:return T;default:return S+v/2}}(),X=function(){switch(M){case 1:return k+y/2;case 5:return E;default:return k}}(),Y=[];try{for(var N=t(l),W=N.next();!W.done;W=N.next()){var x=W.value;!function(e){var t=e.getBoundingClientRect(),o=t.height,r=t.width,l=t.top,c=t.right,m=t.bottom,h=t.left,b=getComputedStyle(e),g=parseInt(b.borderLeftWidth,10),S=parseInt(b.borderTopWidth,10),E=parseInt(b.borderRightWidth,10),T=parseInt(b.borderBottomWidth,10),k=0,I=0,j="offsetWidth"in e?e.offsetWidth-e.clientWidth-g-E:0,L="offsetHeight"in e?e.offsetHeight-e.clientHeight-S-T:0;if(i===e){switch(O){case 2:k=V;break;case 3:k=V-u;break;case 1:k=V-u/2;break;case 0:k=p(w,w+u,u,S,T,w+V,w+V+v,v)}switch(M){case 4:I=X;break;case 5:I=X-a;break;case 1:I=X-a/2;break;case 0:I=p(d,d+a,a,g,E,d+X,d+X+y,y)}k=Math.max(0,k+w),I=Math.max(0,I+d)}else{switch(O){case 2:k=V-l-S;break;case 3:k=V-m+T+L;break;case 1:k=V-(l+o/2)+L/2;break;case 0:k=p(l,m,o,S,T+L,V,V+v,v)}switch(M){case 4:I=X-h-g;break;case 5:I=X-c+E+j;break;case 1:I=X-(h+r/2)+j/2;break;case 0:I=p(h,c,r,g,E+j,X,X+y,y)}var F=e.scrollLeft,N=e.scrollTop;k=Math.max(0,Math.min(N+k,e.scrollHeight-o+L)),I=Math.max(0,Math.min(F+I,e.scrollWidth-r+j)),V+=N-k,X+=F-I}Y.push(function(){return s(e,f(f({},n),{top:k,left:I}))})}(x)}}catch(_){o={error:_}}finally{try{W&&!W.done&&(r=N["return"])&&r.call(N)}finally{if(o)throw o.error}}Y.forEach(function(e){return e()})}},S=function(e){if(!o()){var t=r.elementScrollIntoView;i(function(n){return n.scrollIntoView=function o(){var n=arguments[0];return 1===arguments.length&&u(n)?y(this,f(f({},n),e)):t.apply(this,arguments)}})}},E=function(e){if(!o()){var t=r.elementScroll;i(function(n){return n.scrollTo=function o(){if(1===arguments.length){var n=arguments[0];if(!u(n))throw new TypeError("Failed to execute 'scrollTo' on 'Element': parameter 1 ('options') is not an object.");var o=Number(n.left),r=Number(n.top);return s(this,f(f(f({},n),{left:o,top:r}),e))}return t.apply(this,arguments)}})}},T=function(e){var t,n,o=r.windowScroll.bind(window);if(e.left!==undefined||e.top!==undefined){var i=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset,f=a(null!==(t=e.left)&&void 0!==t?t:i),s=a(null!==(n=e.top)&&void 0!==n?n:u);if("smooth"!==e.behavior)return o(f,s);var d=function(){window.removeEventListener("wheel",m),window.removeEventListener("touchmove",m)},w={timeStamp:l(),duration:e.duration,startX:i,startY:u,targetX:f,targetY:s,rafId:0,method:o,timingFunc:e.timingFunc,callback:d},m=function(){cancelAnimationFrame(w.rafId),d()};window.addEventListener("wheel",m,{passive:!0,once:!0}),window.addEventListener("touchmove",m,{passive:!0,once:!0}),c(w)}},k=function(e){if(!o()){var t=r.windowScroll;window.scroll=function n(){if(1===arguments.length){var n=arguments[0];if(!u(n))throw new TypeError("Failed to execute 'scroll' on 'Window': parameter 1 ('options') is not an object.");return T(f(f({},n),e))}return t.apply(this,arguments)}}},I=function(e){var t=a(e.left||0)+(window.scrollX||window.pageXOffset),n=a(e.top||0)+(window.scrollY||window.pageYOffset);return"smooth"!==e.behavior?r.windowScroll.call(window,t,n):T(f(f({},e),{left:t,top:n}))},j=function(e){o()||(window.scrollBy=function t(){if(1===arguments.length){var t=arguments[0];if(!u(t))throw new TypeError("Failed to execute 'scrollBy' on 'Window': parameter 1 ('options') is not an object.");return I(f(f({},t),e))}var n=Number(arguments[0]),o=Number(arguments[1]);return I({left:n,top:o})})},L=function(e){if(!o()){var t=r.windowScroll;window.scrollTo=function n(){if(1===arguments.length){var n=arguments[0];if(!u(n))throw new TypeError("Failed to execute 'scrollTo' on 'Window': parameter 1 ('options') is not an object.");var o=Number(n.left),r=Number(n.top);return T(f(f(f({},n),{left:o,top:r}),e))}return t.apply(this,arguments)}}},F=function(e){o()||(k(e),L(e),j(e),d(e),E(e),m(e),S(e))};e.elementScroll=s,e.elementScrollBy=w,e.elementScrollByPolyfill=m,e.elementScrollIntoView=y,e.elementScrollIntoViewPolyfill=S,e.elementScrollPolyfill=d,e.elementScrollTo=s,e.elementScrollToPolyfill=E,e.polyfill=F,e.seamless=F,e.windowScroll=T,e.windowScrollBy=I,e.windowScrollByPolyfill=j,e.windowScrollPolyfill=k,e.windowScrollTo=T,e.windowScrollToPolyfill=L,Object.defineProperty(e,"__esModule",{value:!0})}(n),n.polyfill()}();CreateMethodProperty(String.prototype,"startsWith",function t(e){"use strict";var r=arguments.length>1?arguments[1]:undefined,n=RequireObjectCoercible(this),i=ToString(n);if(IsRegExp(e))throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var o=ToString(e),s=ToInteger(r),a=i.length,g=Math.min(Math.max(s,0),a);return!(o.length+g>a)&&0===i.substr(g).indexOf(e)});!function(e,r,n){"use strict";function t(e){if("symbol"===Type(e))return e;throw TypeError(e+" is not a symbol")}var u,o=function(){try{var r={};return e.defineProperty(r,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:undefined}),!!r.t}catch(n){return!1}}(),i=0,a=""+Math.random(),c="__symbol:",l=c.length,f="__symbol@@"+a,s={},v="defineProperty",y="defineProperties",b="getOwnPropertyNames",p="getOwnPropertyDescriptor",h="propertyIsEnumerable",m=e.prototype,d=m.hasOwnProperty,g=m[h],w=m.toString,S=Array.prototype.concat,P=e.getOwnPropertyNames?e.getOwnPropertyNames(self):[],O=e[b],j=function $(e){if("[object Window]"===w.call(e))try{return O(e)}catch(r){return S.call([],P)}return O(e)},E=e[p],N=e.create,T=e.keys,_=e.freeze||e,k=e[v],F=e[y],I=E(e,b),x=function(e,r,n){if(!d.call(e,f))try{k(e,f,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(t){e[f]={}}e[f]["@@"+r]=n},z=function(e,r){var n=N(e);return j(r).forEach(function(e){q.call(r,e)&&L(n,e,r[e])}),n},A=function(e){var r=N(e);return r.enumerable=!1,r},D=function ee(){},M=function(e){return e!=f&&!d.call(H,e)},W=function(e){return e!=f&&d.call(H,e)},q=function re(e){var r=""+e;return W(r)?d.call(this,r)&&this[f]&&this[f]["@@"+r]:g.call(this,e)},B=function(r){var n={enumerable:!1,configurable:!0,get:D,set:function(e){u(this,r,{enumerable:!1,configurable:!0,writable:!0,value:e}),x(this,r,!0)}};try{k(m,r,n)}catch(o){m[r]=n.value}H[r]=k(e(r),"constructor",J);var t=E(G.prototype,"description");return t&&k(H[r],"description",t),_(H[r])},C=function(e){var r=t(e);if(Y){var n=V(r);if(""!==n)return n.slice(1,-1)}if(s[r]!==undefined)return s[r];var u=r.toString(),o=u.lastIndexOf("0.");return u=u.slice(10,o),""===u?undefined:u},G=function ne(){var r=arguments[0];if(this instanceof ne)throw new TypeError("Symbol is not a constructor");var n=c.concat(r||"",a,++i);r===undefined||null!==r&&!isNaN(r)&&""!==String(r)||(s[n]=String(r));var t=B(n);return o||e.defineProperty(t,"description",{configurable:!0,enumerable:!1,value:C(t)}),t},H=N(null),J={value:G},K=function(e){return H[e]},L=function te(e,r,n){var t=""+r;return W(t)?(u(e,t,n.enumerable?A(n):n),x(e,t,!!n.enumerable)):k(e,r,n),e},Q=function(e){return function(r){return d.call(e,f)&&d.call(e[f],"@@"+r)}},R=function ue(e){return j(e).filter(e===m?Q(e):W).map(K)};I.value=L,k(e,v,I),I.value=R,k(e,"getOwnPropertySymbols",I),I.value=function oe(e){return j(e).filter(M)},k(e,b,I),I.value=function ie(e,r){var n=R(r);return n.length?T(r).concat(n).forEach(function(n){q.call(r,n)&&L(e,n,r[n])}):F(e,r),e},k(e,y,I),I.value=q,k(m,h,I),I.value=G,k(n,"Symbol",I),I.value=function(e){var r=c.concat(c,e,a);return r in m?H[r]:B(r)},k(G,"for",I),I.value=function(e){if(M(e))throw new TypeError(e+" is not a symbol");return d.call(H,e)?e.slice(2*l,-a.length):void 0},k(G,"keyFor",I),I.value=function ae(e,r){var n=E(e,r);return n&&W(r)&&(n.enumerable=q.call(e,r)),n},k(e,p,I),I.value=function ce(e,r){return 1===arguments.length||void 0===r?N(e):z(e,r)},k(e,"create",I);var U=null===function(){return this}.call(null);if(I.value=U?function(){var e=w.call(this);return"[object String]"===e&&W(this)?"[object Symbol]":e}:function(){if(this===window)return"[object Null]";var e=w.call(this);return"[object String]"===e&&W(this)?"[object Symbol]":e},k(m,"toString",I),u=function(e,r,n){var t=E(m,r);delete m[r],k(e,r,n),e!==m&&k(m,r,t)},function(){try{var r={};return e.defineProperty(r,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:undefined}),!!r.t}catch(n){return!1}}()){var V;try{V=Function("s","var v = s.valueOf(); return { [v]() {} }[v].name;")}catch(Z){}var X=function(){},Y=V&&"inferred"===X.name?V:null;e.defineProperty(n.Symbol.prototype,"description",{configurable:!0,enumerable:!1,get:function(){return C(this)}})}}(Object,0,self);Object.defineProperty(self.Symbol,"iterator",{value:self.Symbol("iterator")});function GetIterator(t){var e=arguments.length>1?arguments[1]:GetMethod(t,Symbol.iterator),r=Call(e,t);if("object"!==Type(r))throw new TypeError("bad iterator");var o=GetV(r,"next"),a=Object.create(null);return a["[[Iterator]]"]=r,a["[[NextMethod]]"]=o,a["[[Done]]"]=!1,a}Object.defineProperty(Symbol,"species",{value:Symbol("species")});!function(e){function t(e,t){if("object"!==Type(e))throw new TypeError("createMapIterator called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Map)throw new TypeError("createMapIterator called on incompatible receiver "+Object.prototype.toString.call(e));var r=Object.create(u);return Object.defineProperty(r,"[[Map]]",{configurable:!0,enumerable:!1,writable:!0,value:e}),Object.defineProperty(r,"[[MapNextIndex]]",{configurable:!0,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"[[MapIterationKind]]",{configurable:!0,enumerable:!1,writable:!0,value:t}),r}var r=function(){try{var e={};return Object.defineProperty(e,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:undefined}),!!e.t}catch(t){return!1}}(),o=0,a=Symbol("meta_"+(1e8*Math.random()+"").replace(".","")),n=function(e){if("object"==typeof e?null!==e:"function"==typeof e){if(!Object.isExtensible(e))return!1;if(!Object.prototype.hasOwnProperty.call(e,a)){var t=typeof e+"-"+ ++o;Object.defineProperty(e,a,{configurable:!1,enumerable:!1,writable:!1,value:t})}return e[a]}return""+e},i=function(e,t){var r=n(t);if(!1===r)return p(e,t);var o=e._table[r];return o!==undefined&&o},p=function(e,t){for(var r=0;r<e._keys.length;r++){var o=e._keys[r];if(o!==c&&SameValueZero(o,t))return r}return!1},l=function(e,t,r){var o=n(t);return!1!==o&&(!1===r?delete e._table[o]:e._table[o]=r,!0)},c=Symbol("undef"),y=function f(){if(!(this instanceof f))throw new TypeError('Constructor Map requires "new"');var e=OrdinaryCreateFromConstructor(this,f.prototype,{_table:{},_keys:[],_values:[],_size:0,_es6Map:!0});r||Object.defineProperty(e,"size",{configurable:!0,enumerable:!1,writable:!0,value:0});var t=arguments.length>0?arguments[0]:undefined;if(null===t||t===undefined)return e;var o=e.set;if(!IsCallable(o))throw new TypeError("Map.prototype.set is not a function");try{for(var a=GetIterator(t);;){var n=IteratorStep(a);if(!1===n)return e;var i=IteratorValue(n);if("object"!==Type(i))try{throw new TypeError("Iterator value "+i+" is not an entry object")}catch(u){return IteratorClose(a,u)}try{var p=i[0],l=i[1];o.call(e,p,l)}catch(s){return IteratorClose(a,s)}}}catch(s){if(Array.isArray(t)||"[object Arguments]"===Object.prototype.toString.call(t)||t.callee){var c,y=t.length;for(c=0;c<y;c++)o.call(e,t[c][0],t[c][1])}}return e};Object.defineProperty(y,"prototype",{configurable:!1,enumerable:!1,writable:!1,value:{}}),r?Object.defineProperty(y,Symbol.species,{configurable:!0,enumerable:!1,get:function(){return this},set:undefined}):CreateMethodProperty(y,Symbol.species,y),CreateMethodProperty(y.prototype,"clear",function b(){var e=this;if("object"!==Type(e))throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Map)throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));for(var t=e._keys,o=0;o<t.length;o++)e._keys[o]=c,e._values[o]=c;return this._size=0,r||(this.size=this._size),this._table={},undefined}),CreateMethodProperty(y.prototype,"constructor",y),CreateMethodProperty(y.prototype,"delete",function(e){var t=this;if("object"!==Type(t))throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Map)throw new TypeError("Method Map.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(t));var o=i(t,e);if(!1!==o){var a=t._keys[o];if(a!==c&&SameValueZero(a,e))return this._keys[o]=c,this._values[o]=c,this._size=--this._size,r||(this.size=this._size),l(this,e,!1),!0}return!1}),CreateMethodProperty(y.prototype,"entries",function h(){return t(this,"key+value")}),CreateMethodProperty(y.prototype,"forEach",function(e){var t=this;if("object"!==Type(t))throw new TypeError("Method Map.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Map)throw new TypeError("Method Map.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(t));if(!IsCallable(e))throw new TypeError(Object.prototype.toString.call(e)+" is not a function.");if(arguments[1])var r=arguments[1];for(var o=t._keys,a=0;a<o.length;a++)t._keys[a]!==c&&t._values[a]!==c&&e.call(r,t._values[a],t._keys[a],t);return undefined}),CreateMethodProperty(y.prototype,"get",function d(e){var t=this;if("object"!==Type(t))throw new TypeError("Method Map.prototype.get called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Map)throw new TypeError("Method Map.prototype.get called on incompatible receiver "+Object.prototype.toString.call(t));var r=i(t,e);if(!1!==r){var o=t._keys[r];if(o!==c&&SameValueZero(o,e))return t._values[r]}return undefined}),CreateMethodProperty(y.prototype,"has",function v(e){var t=this;if("object"!=typeof t)throw new TypeError("Method Map.prototype.has called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Map)throw new TypeError("Method Map.prototype.has called on incompatible receiver "+Object.prototype.toString.call(t));var r=i(t,e);if(!1!==r){var o=t._keys[r];if(o!==c&&SameValueZero(o,e))return!0}return!1}),CreateMethodProperty(y.prototype,"keys",function M(){return t(this,"key")}),CreateMethodProperty(y.prototype,"set",function w(e,t){var o=this;if("object"!==Type(o))throw new TypeError("Method Map.prototype.set called on incompatible receiver "+Object.prototype.toString.call(o));if(!0!==o._es6Map)throw new TypeError("Method Map.prototype.set called on incompatible receiver "+Object.prototype.toString.call(o));var a=i(o,e);if(!1!==a)o._values[a]=t;else{-0===e&&(e=0);var n={"[[Key]]":e,"[[Value]]":t};o._keys.push(n["[[Key]]"]),o._values.push(n["[[Value]]"]),l(o,e,o._keys.length-1),++o._size,r||(o.size=o._size)}return o}),r&&Object.defineProperty(y.prototype,"size",{configurable:!0,enumerable:!1,get:function(){var e=this;if("object"!==Type(e))throw new TypeError("Method Map.prototype.size called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Map)throw new TypeError("Method Map.prototype.size called on incompatible receiver "+Object.prototype.toString.call(e));return this._size},set:undefined}),CreateMethodProperty(y.prototype,"values",function j(){return t(this,"value")}),CreateMethodProperty(y.prototype,Symbol.iterator,y.prototype.entries),"name"in y||Object.defineProperty(y,"name",{configurable:!0,enumerable:!1,writable:!1,value:"Map"});var u={};Object.defineProperty(u,"isMapIterator",{configurable:!1,enumerable:!1,writable:!1,value:!0}),CreateMethodProperty(u,"next",function _(){var e=this;if("object"!==Type(e))throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));if(!e.isMapIterator)throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));var t=e["[[Map]]"],r=e["[[MapNextIndex]]"],o=e["[[MapIterationKind]]"];if(t===undefined)return CreateIterResultObject(undefined,!0);if(!t._es6Map)throw new Error(Object.prototype.toString.call(t)+" has a [[MapData]] internal slot.");for(var a=t._keys,n=a.length;r<n;){var i=Object.create(null);if(i["[[Key]]"]=t._keys[r],i["[[Value]]"]=t._values[r],r+=1,e["[[MapNextIndex]]"]=r,i["[[Key]]"]!==c){if("key"===o)var p=i["[[Key]]"];else if("value"===o)p=i["[[Value]]"];else{if("key+value"!==o)throw new Error;p=[i["[[Key]]"],i["[[Value]]"]]}return CreateIterResultObject(p,!1)}}return e["[[Map]]"]=undefined,CreateIterResultObject(undefined,!0)}),CreateMethodProperty(u,Symbol.iterator,function g(){return this});try{CreateMethodProperty(e,"Map",y)}catch(s){e.Map=y}}(self);!function(e){function t(e,t){if("object"!=typeof e)throw new TypeError("createSetIterator called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Set)throw new TypeError("createSetIterator called on incompatible receiver "+Object.prototype.toString.call(e));var r=Object.create(i);return Object.defineProperty(r,"[[IteratedSet]]",{configurable:!0,enumerable:!1,writable:!0,value:e}),Object.defineProperty(r,"[[SetNextIndex]]",{configurable:!0,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"[[SetIterationKind]]",{configurable:!0,enumerable:!1,writable:!0,value:t}),r}var r=function(){try{var e={};return Object.defineProperty(e,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:undefined}),!!e.t}catch(t){return!1}}(),o=Symbol("undef"),n=function c(){if(!(this instanceof c))throw new TypeError('Constructor Set requires "new"');var e=OrdinaryCreateFromConstructor(this,c.prototype,{_values:[],_size:0,_es6Set:!0});r||Object.defineProperty(e,"size",{configurable:!0,enumerable:!1,writable:!0,value:0});var t=arguments.length>0?arguments[0]:undefined;if(null===t||t===undefined)return e;var o=e.add;if(!IsCallable(o))throw new TypeError("Set.prototype.add is not a function");try{for(var n=GetIterator(t);;){var a=IteratorStep(n);if(!1===a)return e;var i=IteratorValue(a);try{o.call(e,i)}catch(y){return IteratorClose(n,y)}}}catch(y){if(!Array.isArray(t)&&"[object Arguments]"!==Object.prototype.toString.call(t)&&!t.callee)throw y;var l,p=t.length;for(l=0;l<p;l++)o.call(e,t[l])}return e};Object.defineProperty(n,"prototype",{configurable:!1,enumerable:!1,writable:!1,value:{}}),r?Object.defineProperty(n,Symbol.species,{configurable:!0,enumerable:!1,get:function(){return this},set:undefined}):CreateMethodProperty(n,Symbol.species,n),CreateMethodProperty(n.prototype,"add",function p(e){var t=this;if("object"!=typeof t)throw new TypeError("Method Set.prototype.add called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Set)throw new TypeError("Method Set.prototype.add called on incompatible receiver "+Object.prototype.toString.call(t));for(var n=t._values,a=0;a<n.length;a++){var i=n[a];if(i!==o&&SameValueZero(i,e))return t}return 0===e&&1/e==-Infinity&&(e=0),t._values.push(e),this._size=++this._size,r||(this.size=this._size),t}),CreateMethodProperty(n.prototype,"clear",function y(){var e=this;if("object"!=typeof e)throw new TypeError("Method Set.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Set)throw new TypeError("Method Set.prototype.clear called on incompatible receiver "+Object.prototype.toString.call(e));for(var t=e._values,n=0;n<t.length;n++)t[n]=o;return this._size=0,r||(this.size=this._size),undefined}),CreateMethodProperty(n.prototype,"constructor",n),CreateMethodProperty(n.prototype,"delete",function(e){var t=this;if("object"!=typeof t)throw new TypeError("Method Set.prototype.delete called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Set)throw new TypeError("Method Set.prototype.delete called on incompatible receiver "+Object.prototype.toString.call(t));for(var n=t._values,a=0;a<n.length;a++){var i=n[a];if(i!==o&&SameValueZero(i,e))return n[a]=o,this._size=--this._size,r||(this.size=this._size),!0}return!1}),CreateMethodProperty(n.prototype,"entries",function u(){return t(this,"key+value")}),CreateMethodProperty(n.prototype,"forEach",function f(e){var t=this;if("object"!=typeof t)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Set)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(t));if(!IsCallable(e))throw new TypeError(Object.prototype.toString.call(e)+" is not a function.");if(arguments[1])var r=arguments[1];for(var n=t._values,a=0;a<n.length;a++){var i=n[a];i!==o&&e.call(r,i,i,t)}return undefined}),CreateMethodProperty(n.prototype,"has",function d(e){var t=this;if("object"!=typeof t)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(t));if(!0!==t._es6Set)throw new TypeError("Method Set.prototype.forEach called on incompatible receiver "+Object.prototype.toString.call(t));for(var r=t._values,n=0;n<r.length;n++){var a=r[n];if(a!==o&&SameValueZero(a,e))return!0}return!1});var a=function h(){return t(this,"value")};CreateMethodProperty(n.prototype,"values",a),CreateMethodProperty(n.prototype,"keys",a),r&&Object.defineProperty(n.prototype,"size",{configurable:!0,enumerable:!1,get:function(){var e=this;if("object"!=typeof e)throw new TypeError("Method Set.prototype.size called on incompatible receiver "+Object.prototype.toString.call(e));if(!0!==e._es6Set)throw new TypeError("Method Set.prototype.size called on incompatible receiver "+Object.prototype.toString.call(e));for(var t=e._values,r=0,n=0;n<t.length;n++){t[n]!==o&&(r+=1)}return r},set:undefined}),CreateMethodProperty(n.prototype,Symbol.iterator,a),"name"in n||Object.defineProperty(n,"name",{configurable:!0,enumerable:!1,writable:!1,value:"Set"});var i={};Object.defineProperty(i,"isSetIterator",{configurable:!1,enumerable:!1,writable:!1,value:!0}),CreateMethodProperty(i,"next",function b(){var e=this;if("object"!=typeof e)throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));if(!e.isSetIterator)throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver "+Object.prototype.toString.call(e));var t=e["[[IteratedSet]]"],r=e["[[SetNextIndex]]"],n=e["[[SetIterationKind]]"];if(t===undefined)return CreateIterResultObject(undefined,!0);if(!t._es6Set)throw new Error(Object.prototype.toString.call(t)+" does not have [[SetData]] internal slot.");for(var a=t._values,i=a.length;r<i;){var l=a[r];if(r+=1,e["[[SetNextIndex]]"]=r,l!==o)return"key+value"===n?CreateIterResultObject([l,l],!1):CreateIterResultObject(l,!1)}return e["[[IteratedSet]]"]=undefined,CreateIterResultObject(undefined,!0)}),CreateMethodProperty(i,Symbol.iterator,function s(){return this});try{CreateMethodProperty(e,"Set",n)}catch(l){e.Set=n}}(self);!function(){function r(r){return"string"==typeof r||"object"==typeof r&&"[object String]"===t.call(r)}var t=Object.prototype.toString,e=String.prototype.match;CreateMethodProperty(Array,"from",function o(t){var o=this,a=arguments.length>1?arguments[1]:undefined;if(a===undefined)var n=!1;else{if(!1===IsCallable(a))throw new TypeError(Object.prototype.toString.call(a)+" is not a function.");var i=arguments.length>2?arguments[2]:undefined;if(i!==undefined)var l=i;else l=undefined;n=!0}var u=GetMethod(t,Symbol.iterator);if(u!==undefined){if(IsConstructor(o))var f=Construct(o);else f=ArrayCreate(0);for(var c=GetIterator(t,u),s=0;;){if(s>=Math.pow(2,53)-1){var h=new TypeError("Iteration count can not be greater than or equal 9007199254740991.");return IteratorClose(c,h)}var y=ToString(s),C=IteratorStep(c);if(!1===C)return f.length=s,f;var g=IteratorValue(C);if(n)try{var p=Call(a,l,[g,s])}catch(b){return IteratorClose(c,b)}else p=g;try{CreateDataPropertyOrThrow(f,y,p)}catch(b){return IteratorClose(c,b)}s+=1}}if(r(t))var v=e.call(t,/[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g)||[];else v=ToObject(t);var d=ToLength(Get(v,"length"));for(f=IsConstructor(o)?Construct(o,[d]):ArrayCreate(d),s=0;s<d;){y=ToString(s);var I=Get(v,y);p=!0===n?Call(a,l,[I,s]):I,CreateDataPropertyOrThrow(f,y,p),s+=1}return f.length=d,f})}();})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!
 * IconicMultiSelect v0.4.0
 * Licence:  MIT
 * (c) 2021 Sidney Wimart.
 */

var IconicMultiSelect = function () {
  function IconicMultiSelect(_ref) {
    var customCss = _ref.customCss,
        data = _ref.data,
        noData = _ref.noData,
        noResults = _ref.noResults,
        placeholder = _ref.placeholder,
        select = _ref.select,
        textField = _ref.textField,
        valueField = _ref.valueField;

    _classCallCheck(this, IconicMultiSelect);

    _defineProperty(this, "customCss", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "domElements", {});

    _defineProperty(this, "event", function () {});

    _defineProperty(this, "noData", void 0);

    _defineProperty(this, "noResults", void 0);

    _defineProperty(this, "options", []);

    _defineProperty(this, "placeholder", void 0);

    _defineProperty(this, "prefix", "iconic" + Math.floor(1000 + Math.random() * 9000) + "-");

    _defineProperty(this, "selectContainer", void 0);

    _defineProperty(this, "selectedOptions", []);

    _defineProperty(this, "textField", void 0);

    _defineProperty(this, "valueField", void 0);

    this.customCss = customCss;
    this.data = data !== null && data !== void 0 ? data : [];
    this.noData = noData !== null && noData !== void 0 ? noData : "No data found.";
    this.noResults = noResults !== null && noResults !== void 0 ? noResults : "No results found.";
    this.placeholder = placeholder !== null && placeholder !== void 0 ? placeholder : "Select...";
    this.selectContainer = document.querySelector(select);
    this.textField = textField !== null && textField !== void 0 ? textField : null;
    this.valueField = valueField !== null && valueField !== void 0 ? valueField : null;
  }
  _createClass(IconicMultiSelect, [{
    key: "init",
    value: function init() {
      if (this.selectContainer && this.selectContainer.nodeName === "SELECT") {
        this.options = this._getDataFromSettings() || this._getDataFromSelectTag();

        this._injectCss();

        this._renderMultiselect();

        this._renderOptionsList();

        this.domElements = {
          clear: document.querySelector(".".concat(this.prefix + "multiselect__clear-btn")),
          input: document.querySelector(".".concat(this.prefix + "multiselect__input")),
          optionsContainer: document.querySelector(".".concat(this.prefix + "multiselect__options")),
          optionsContainerList: document.querySelector(".".concat(this.prefix + "multiselect__options > ul")),
          options: document.querySelectorAll(".".concat(this.prefix + "multiselect__options", " > ul > li"))
        };

        this._enableEventListenners();
      } else {
        throw new Error("The selector '".concat(element, "' did not select any valid select tag."));
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      if (typeof callback === "function") {
        this.event = callback;
      } else {
        throw new Error("parameter in the subscribe method is not a function");
      }
    }
  }, {
    key: "_addOptionToList",
    value: function _addOptionToList(option) {
      var _this = this;

      var html = "<span class=\"".concat(this.prefix + "multiselect__selected", "\" data-value=\"").concat(option.value, "\">").concat(option.text, "<span class=\"").concat(this.prefix + "multiselect__remove-btn", "\">&#10006;</span></span>");
      this.domElements.input.insertAdjacentHTML("beforebegin", html);

      var _document$querySelect = document.querySelector("span[data-value=\"".concat(option.value, "\"]")),
          removeBtn = _document$querySelect.firstElementChild;

      removeBtn.addEventListener("click", function () {
        var target = Array.from(_this.domElements.options).find(function (el) {
          return el.dataset.value == option.value;
        });

        _this._handleOption(target);
      });
    }
  }, {
    key: "_clearSelection",
    value: function _clearSelection() {
      var _this2 = this;

      this.selectedOptions.forEach(function (el) {
        var targetLastSelectedOption = Array.from(_this2.domElements.options).find(function (t) {
          return t.dataset.value == el.value;
        });

        _this2._handleOption(targetLastSelectedOption, false);
      });

      this._dispatchEvent({
        action: "CLEAR_ALL_OPTIONS",
        selection: this.selectedOptions
      });
    }
  }, {
    key: "_closeList",
    value: function _closeList() {
      this.domElements.input.value = "";
      this.domElements.optionsContainer.style.display = "none";

      this._filterOptions("");

      this._removeAllArrowSelected();
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(event) {
      this.event(event);
    }
  }, {
    key: "_enableEventListenners",
    value: function _enableEventListenners() {
      var _this3 = this;

      this.domElements.clear.addEventListener("click", function () {
        _this3._clearSelection();
      });
      this.domElements.options.forEach(function (option) {
        option.addEventListener("click", function (_ref2) {
          var target = _ref2.target;

          _this3._handleOption(target);

          _this3._closeList();
        });
      });
      this.domElements.input.addEventListener("focus", function () {
        _this3.domElements.optionsContainer.style.display = "block";
        _this3.domElements.input.placeholder = "";
      });
      this.domElements.input.addEventListener("input", function (_ref3) {
        var value = _ref3.target.value;

        _this3._filterOptions(value);
      });
      this.domElements.input.addEventListener("keydown", function (e) {
        _this3._handleArrows(e);

        _this3._handleBackspace(e);

        _this3._handleEnter(e);
      });
    }
  }, {
    key: "_filterOptions",
    value: function _filterOptions(value) {
      var _this4 = this;

      var isOpen = this.domElements.optionsContainer.style.display === "block";

      if (!isOpen && value.length > 0) {
        this.domElements.optionsContainer.style.display = "block";
      }

      var valueLowerCase = value.toLowerCase();
      this.domElements.options.forEach(function (el) {
        if (el.textContent.toLowerCase().startsWith(valueLowerCase)) {
          _this4.domElements.optionsContainerList.append(el);
        } else {
          el.remove();
        }
      });
      var hasResults = Array.from(this.domElements.options).some(function (el) {
        return el.textContent.toLowerCase().startsWith(valueLowerCase);
      });

      this._showNoResults(!hasResults);
    }
  }, {
    key: "_getDataFromSelectTag",
    value: function _getDataFromSelectTag() {
      return Array.from(this.selectContainer.options).map(function (option) {
        return {
          text: option.text,
          value: option.value
        };
      });
    }
  }, {
    key: "_getDataFromSettings",
    value: function _getDataFromSettings() {
      var _this5 = this;

      if (this.data.length > 0 && this.valueField && this.textField) {
        var isValueFieldValid = typeof this.valueField === "string";
        var isTextFieldValid = typeof this.textField === "string";

        if (!isValueFieldValid || !isTextFieldValid) {
          throw new Error("textField and valueField must be of type string");
        }

        return this.data.map(function (item) {
          return {
            value: item[_this5.valueField],
            text: item[_this5.textField]
          };
        });
      } else {
        return null;
      }
    }
  }, {
    key: "_handleArrows",
    value: function _handleArrows(event) {
      if (event.keyCode === 40 || event.keyCode === 38) {
        var isOpen = this.domElements.optionsContainer.style.display === "block"; 

        var optionsContainerList = document.querySelector(".".concat(this.prefix + "multiselect__options > ul"));

        if (!isOpen) {
          this.domElements.optionsContainer.style.display = "block";
          optionsContainerList.firstElementChild.classList.add("arrow-selected");
          optionsContainerList.firstElementChild.scrollIntoView();
        } else {
          var selected = document.querySelector(".".concat(this.prefix, "multiselect__options ul li.arrow-selected"));
          var scrollIntoViewOption = {
            block: "nearest",
            inline: "nearest"
          };
          var action = {
            ArrowUp: "previous",
            Up: "previous",
            ArrowDown: "next",
            Down: "next"
          };

          if (!selected) {
            optionsContainerList.firstElementChild.classList.add("arrow-selected");
            optionsContainerList.firstElementChild.scrollIntoView();
            return;
          }

          selected.classList.remove("arrow-selected");
          selected = selected[action[event.key] + "ElementSibling"]; 

          if (!selected) {
            selected = optionsContainerList.children[action[event.key] === "next" ? 0 : optionsContainerList.children.length - 1];
            selected.classList.add("arrow-selected");
            selected.scrollIntoView(scrollIntoViewOption);
            return;
          }

          selected.classList.add("arrow-selected");
          selected.scrollIntoView(scrollIntoViewOption);
        }
      }
    }
  }, {
    key: "_handleBackspace",
    value: function _handleBackspace(e) {
      if (e.keyCode === 8 && e.target.value === "") {
        var lastSelectedOption = this.selectedOptions.length > 0 ? this.selectedOptions[this.selectedOptions.length - 1] : null;

        if (lastSelectedOption) {
          var targetLastSelectedOption = document.querySelector("li[data-value=\"".concat(lastSelectedOption.value, "\"]"));

          this._handleOption(targetLastSelectedOption);

          if (this.selectedOptions.length === 0) {
            this.domElements.optionsContainer.style.display = "none";
          }
        }
      }
    }
  }, {
    key: "_handleEnter",
    value: function _handleEnter(event) {
      if (event.keyCode === 13) {
        var selected = document.querySelector(".".concat(this.prefix, "multiselect__options ul li.arrow-selected"));

        if (selected) {
          this._handleOption(selected);

          this._closeList();
        }
      }
    }
  }, {
    key: "_handleClearSelectionBtn",
    value: function _handleClearSelectionBtn() {
      if (this.selectedOptions.length > 0) {
        this.domElements.clear.style.display = "block";
      } else {
        this.domElements.clear.style.display = "none";
      }
    }
  }, {
    key: "_handleOption",
    value: function _handleOption(target) {
      var dispatchEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.selectedOptions.some(function (el) {
        return el.value == target.dataset.value;
      })) {
        target.classList.remove("".concat(this.prefix, "multiselect__options--selected"));
        this.selectedOptions = this.selectedOptions.filter(function (el) {
          return el.value != target.dataset.value;
        });

        this._removeOptionFromList(target.dataset.value);

        dispatchEvent && this._dispatchEvent({
          action: "REMOVE_OPTION",
          value: target.dataset.value,
          selection: this.selectedOptions
        });
      } else {
        var option = this.options.find(function (el) {
          return el.value == target.dataset.value;
        });
        target.classList.add("".concat(this.prefix, "multiselect__options--selected"));
        this.selectedOptions = [].concat(_toConsumableArray(this.selectedOptions), [option]);

        this._addOptionToList(option);

        dispatchEvent && this._dispatchEvent({
          action: "ADD_OPTION",
          value: target.dataset.value,
          selection: this.selectedOptions
        });
      }

      this._handleClearSelectionBtn();

      this._handlePlaceholder();
    }
  }, {
    key: "_handlePlaceholder",
    value: function _handlePlaceholder() {
      if (this.selectedOptions.length > 0) {
        this.domElements.input.placeholder = "";
      } else {
        this.domElements.input.placeholder = this.placeholder;
      }
    }
  }, {
    key: "_removeAllArrowSelected",
    value: function _removeAllArrowSelected() {
      var className = "arrow-selected";
      this.domElements.options.forEach(function (el) {
        if (el.classList.contains(className)) {
          el.classList.remove(className);
        }
      });
    }
  }, {
    key: "_removeOptionFromList",
    value: function _removeOptionFromList(value) {
      var optionDom = document.querySelector("span[data-value=\"".concat(value, "\"]"));
      optionDom.remove();
    }
  }, {
    key: "_renderOptionsList",
    value: function _renderOptionsList() {
      var html = "\n        <div style=\"display: none;\" class=\"".concat(this.prefix, "multiselect__options\">\n          <ul>\n          ").concat(this.options.length > 0 ? this.options.map(function (option) {
        return "\n              <li data-value=\"".concat(option.value, "\">").concat(option.text, "</li>\n            ");
      }).join("") : "", "\n          ").concat(this._showNoData(this.options.length === 0), "\n          </ul>\n        </div>\n      ");
      document.querySelector(".".concat(this.prefix + "multiselect__container")).insertAdjacentHTML("beforeend", html);
    }
  }, {
    key: "_renderMultiselect",
    value: function _renderMultiselect() {
      this.selectContainer.style.display = "none";
      var html = "\n      <div class=\"".concat(this.prefix + "multiselect__container", "\">\n        <div class=\"").concat(this.prefix + "multiselect__wrapper", "\">\n          <input class=\"").concat(this.prefix + "multiselect__input", "\" placeholder=\"").concat(this.placeholder, "\" />\n        </div>\n        <span style=\"display: none;\" class=\"").concat(this.prefix + "multiselect__clear-btn", "\">&#10006;</span>\n      </div>\n    ");
      this.selectContainer.insertAdjacentHTML("afterend", html);
    }
  }, {
    key: "_showNoData",
    value: function _showNoData(condition) {
      return condition ? "<p class=\"".concat(this.prefix, "multiselect__options--no-data\">").concat(this.noData, "</p>") : "";
    }
  }, {
    key: "_showNoResults",
    value: function _showNoResults(condition) {
      var dom = document.querySelector(".".concat(this.prefix, "multiselect__options--no-results"));

      if (condition) {
        var html = "<p class=\"".concat(this.prefix, "multiselect__options--no-results\">").concat(this.noResults, "</p>");
        !dom && this.domElements.optionsContainerList.insertAdjacentHTML("beforeend", html);
      } else {
        dom && dom.remove();
      }
    }
  }, {
    key: "_injectCss",
    value: function _injectCss() {
      var css = "\n      <style>\n        .".concat(this.prefix, "multiselect__container {\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n          background-color: #fff;\n          border-radius: 2px;\n          -webkit-box-shadow: 0 1px 3px 0 #d1d1d2, 0 0 0 1px #d1d1d2;\n                  box-shadow: 0 1px 3px 0 #d1d1d2, 0 0 0 1px #d1d1d2;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-family: Arial,Helvetica,sans-serif;\n          min-height: 36px;\n          padding: 4px 8px 0 8px;\n          position: relative;\n          width: 354px;\n        }\n\n        .").concat(this.prefix, "multiselect__container:after {\n          content:'';\n          min-height:inherit;\n          font-size:0;\n        }\n\n        .").concat(this.prefix, "multiselect__container > * {\n          color: #656565;\n          font-size: 14px;\n        }\n\n        .").concat(this.prefix + "multiselect__wrapper", " {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap;\n          height: 100%;\n          width: 100%;\n        }\n\n        .").concat(this.prefix, "multiselect__clear-btn {\n           cursor: pointer;\n           margin-bottom: 4px;\n           margin-left: 4px;\n        }\n\n        .").concat(this.prefix, "multiselect__options {\n          background-color: #f6f6f6;\n          border-radius: 2px;\n          -webkit-box-shadow: 0 1px 3px 0 #d1d1d2, 0 0 0 1px #d1d1d2;\n          box-shadow: 0 1px 3px 0 #d1d1d2, 0 0 0 1px #d1d1d2;\n          left: -1px;\n          position: absolute;\n          top: calc(100% + 3px);\n          width: 100%;\n        }\n\n        .").concat(this.prefix, "multiselect__options ul {\n          list-style: none;\n          margin: 0;\n          padding: 2px 0;\n          max-height: 120px;\n          overflow: auto;\n        }\n\n        .").concat(this.prefix, "multiselect__options ul li {\n          cursor: pointer;\n          padding: 4px 8px;\n        }\n\n        .").concat(this.prefix, "multiselect__options ul p.").concat(this.prefix, "multiselect__options--no-results, \n        .").concat(this.prefix, "multiselect__options ul p.").concat(this.prefix, "multiselect__options--no-data {\n          margin: 0;\n          padding: 8px;\n          text-align: center;\n        }\n\n        .").concat(this.prefix, "multiselect__options ul li.").concat(this.prefix, "multiselect__options--selected {\n          background-color: #ff6358;\n          color: #fff;\n        }\n\n        .").concat(this.prefix, "multiselect__options ul li.").concat(this.prefix, "multiselect__options--selected:hover {\n          background-color: #eb5b51;\n        }\n\n        .").concat(this.prefix, "multiselect__options ul li:hover {\n          background-color: #dedede;\n        }\n\n        .").concat(this.prefix, "multiselect__options ul li.arrow-selected {\n          border: 2px solid rgba(101, 101, 101, 0.5);\n        }\n\n        .").concat(this.prefix, "multiselect__selected {\n          background-color: #656565;\n          border-radius: 2px;\n          color: #fff;\n          margin-bottom: 4px;\n          margin-right: 4px;\n          padding: 4px 8px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n        }\n\n        .").concat(this.prefix, "multiselect__selected .").concat(this.prefix, "multiselect__remove-btn {\n          cursor: pointer;\n          margin-left: 6px;\n        }\n\n        .").concat(this.prefix, "multiselect__input {\n          border: none;\n          -ms-flex-preferred-size: 40px;\n              flex-basis: 40px;\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1;\n          height: 24px;        \n          margin-bottom: 4px;\n          min-width: 40px;\n          outline: none;      \n        }\n      </style>\n      ");
      if (!this.customCss) document.querySelector("head").insertAdjacentHTML("beforeend", css);
      if (this.customCss) this.prefix = "";
    }
  }]);

  return IconicMultiSelect;
}();