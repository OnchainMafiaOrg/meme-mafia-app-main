function SC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Nw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ca(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _C(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var TC={exports:{}},$p={},$C={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=Symbol.for("react.element"),AA=Symbol.for("react.portal"),DA=Symbol.for("react.fragment"),OA=Symbol.for("react.strict_mode"),kA=Symbol.for("react.profiler"),RA=Symbol.for("react.provider"),NA=Symbol.for("react.context"),IA=Symbol.for("react.forward_ref"),MA=Symbol.for("react.suspense"),LA=Symbol.for("react.memo"),jA=Symbol.for("react.lazy"),n5=Symbol.iterator;function FA(e){return e===null||typeof e!="object"?null:(e=n5&&e[n5]||e["@@iterator"],typeof e=="function"?e:null)}var PC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},AC=Object.assign,DC={};function ic(e,t,n){this.props=e,this.context=t,this.refs=DC,this.updater=n||PC}ic.prototype.isReactComponent={};ic.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ic.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function OC(){}OC.prototype=ic.prototype;function Iw(e,t,n){this.props=e,this.context=t,this.refs=DC,this.updater=n||PC}var Mw=Iw.prototype=new OC;Mw.constructor=Iw;AC(Mw,ic.prototype);Mw.isPureReactComponent=!0;var r5=Array.isArray,kC=Object.prototype.hasOwnProperty,Lw={current:null},RC={key:!0,ref:!0,__self:!0,__source:!0};function NC(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)kC.call(t,r)&&!RC.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qd,type:e,key:o,ref:s,props:i,_owner:Lw.current}}function BA(e,t){return{$$typeof:Qd,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jw(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qd}function UA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var i5=/\/+/g;function am(e,t){return typeof e=="object"&&e!==null&&e.key!=null?UA(""+e.key):t.toString(36)}function Sh(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qd:case AA:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+am(s,0):r,r5(i)?(n="",e!=null&&(n=e.replace(i5,"$&/")+"/"),Sh(i,t,n,"",function(c){return c})):i!=null&&(jw(i)&&(i=BA(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(i5,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",r5(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+am(o,a);s+=Sh(o,t,n,l,i)}else if(l=FA(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+am(o,a++),s+=Sh(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Nf(e,t,n){if(e==null)return e;var r=[],i=0;return Sh(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zA(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $n={current:null},_h={transition:null},WA={ReactCurrentDispatcher:$n,ReactCurrentBatchConfig:_h,ReactCurrentOwner:Lw};Be.Children={map:Nf,forEach:function(e,t,n){Nf(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Nf(e,function(){t++}),t},toArray:function(e){return Nf(e,function(t){return t})||[]},only:function(e){if(!jw(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Be.Component=ic;Be.Fragment=DA;Be.Profiler=kA;Be.PureComponent=Iw;Be.StrictMode=OA;Be.Suspense=MA;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WA;Be.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=AC({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Lw.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)kC.call(t,l)&&!RC.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qd,type:e.type,key:i,ref:o,props:r,_owner:s}};Be.createContext=function(e){return e={$$typeof:NA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:RA,_context:e},e.Consumer=e};Be.createElement=NC;Be.createFactory=function(e){var t=NC.bind(null,e);return t.type=e,t};Be.createRef=function(){return{current:null}};Be.forwardRef=function(e){return{$$typeof:IA,render:e}};Be.isValidElement=jw;Be.lazy=function(e){return{$$typeof:jA,_payload:{_status:-1,_result:e},_init:zA}};Be.memo=function(e,t){return{$$typeof:LA,type:e,compare:t===void 0?null:t}};Be.startTransition=function(e){var t=_h.transition;_h.transition={};try{e()}finally{_h.transition=t}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(e,t){return $n.current.useCallback(e,t)};Be.useContext=function(e){return $n.current.useContext(e)};Be.useDebugValue=function(){};Be.useDeferredValue=function(e){return $n.current.useDeferredValue(e)};Be.useEffect=function(e,t){return $n.current.useEffect(e,t)};Be.useId=function(){return $n.current.useId()};Be.useImperativeHandle=function(e,t,n){return $n.current.useImperativeHandle(e,t,n)};Be.useInsertionEffect=function(e,t){return $n.current.useInsertionEffect(e,t)};Be.useLayoutEffect=function(e,t){return $n.current.useLayoutEffect(e,t)};Be.useMemo=function(e,t){return $n.current.useMemo(e,t)};Be.useReducer=function(e,t,n){return $n.current.useReducer(e,t,n)};Be.useRef=function(e){return $n.current.useRef(e)};Be.useState=function(e){return $n.current.useState(e)};Be.useSyncExternalStore=function(e,t,n){return $n.current.useSyncExternalStore(e,t,n)};Be.useTransition=function(){return $n.current.useTransition()};Be.version="18.2.0";$C.exports=Be;var S=$C.exports;const le=Ca(S),ra=SC({__proto__:null,default:le},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VA=S,HA=Symbol.for("react.element"),qA=Symbol.for("react.fragment"),GA=Object.prototype.hasOwnProperty,KA=VA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZA={key:!0,ref:!0,__self:!0,__source:!0};function IC(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)GA.call(t,r)&&!ZA.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:HA,type:e,key:o,ref:s,props:i,_owner:KA.current}}$p.Fragment=qA;$p.jsx=IC;$p.jsxs=IC;TC.exports=$p;var O=TC.exports,Jg={},MC={exports:{}},Jn={},LC={exports:{}},jC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,q){var G=R.length;R.push(q);e:for(;0<G;){var Z=G-1>>>1,Y=R[Z];if(0<i(Y,q))R[Z]=q,R[G]=Y,G=Z;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var q=R[0],G=R.pop();if(G!==q){R[0]=G;e:for(var Z=0,Y=R.length,J=Y>>>1;Z<J;){var ne=2*(Z+1)-1,de=R[ne],ye=ne+1,xe=R[ye];if(0>i(de,G))ye<Y&&0>i(xe,de)?(R[Z]=xe,R[ye]=G,Z=ye):(R[Z]=de,R[ne]=G,Z=ne);else if(ye<Y&&0>i(xe,G))R[Z]=xe,R[ye]=G,Z=ye;else break e}}return q}function i(R,q){var G=R.sortIndex-q.sortIndex;return G!==0?G:R.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,h=!1,p=!1,m=!1,v=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=R)r(c),q.sortIndex=q.expirationTime,t(l,q);else break;q=n(c)}}function w(R){if(m=!1,x(R),!p)if(n(l)!==null)p=!0,L(_);else{var q=n(c);q!==null&&z(w,q.startTime-R)}}function _(R,q){p=!1,m&&(m=!1,b(T),T=-1),h=!0;var G=f;try{for(x(q),d=n(l);d!==null&&(!(d.expirationTime>q)||R&&!I());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,f=d.priorityLevel;var Y=Z(d.expirationTime<=q);q=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&r(l),x(q)}else r(l);d=n(l)}if(d!==null)var J=!0;else{var ne=n(c);ne!==null&&z(w,ne.startTime-q),J=!1}return J}finally{d=null,f=G,h=!1}}var $=!1,g=null,T=-1,D=5,k=-1;function I(){return!(e.unstable_now()-k<D)}function V(){if(g!==null){var R=e.unstable_now();k=R;var q=!0;try{q=g(!0,R)}finally{q?Q():($=!1,g=null)}}else $=!1}var Q;if(typeof y=="function")Q=function(){y(V)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,M=B.port2;B.port1.onmessage=V,Q=function(){M.postMessage(null)}}else Q=function(){v(V,0)};function L(R){g=R,$||($=!0,Q())}function z(R,q){T=v(function(){R(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){p||h||(p=!0,L(_))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var G=f;f=q;try{return R()}finally{f=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,q){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=f;f=R;try{return q()}finally{f=G}},e.unstable_scheduleCallback=function(R,q,G){var Z=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,R){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=G+Y,R={id:u++,callback:q,priorityLevel:R,startTime:G,expirationTime:Y,sortIndex:-1},G>Z?(R.sortIndex=G,t(c,R),n(l)===null&&R===n(c)&&(m?(b(T),T=-1):m=!0,z(w,G-Z))):(R.sortIndex=Y,t(l,R),p||h||(p=!0,L(_))),R},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(R){var q=f;return function(){var G=f;f=q;try{return R.apply(this,arguments)}finally{f=G}}}})(jC);LC.exports=jC;var QA=LC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FC=S,Yn=QA;function te(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BC=new Set,Fu={};function Ea(e,t){Tl(e,t),Tl(e+"Capture",t)}function Tl(e,t){for(Fu[e]=t,e=0;e<t.length;e++)BC.add(t[e])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ey=Object.prototype.hasOwnProperty,YA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,o5={},s5={};function XA(e){return ey.call(s5,e)?!0:ey.call(o5,e)?!1:YA.test(e)?s5[e]=!0:(o5[e]=!0,!1)}function JA(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eD(e,t,n,r){if(t===null||typeof t>"u"||JA(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pn(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){an[e]=new Pn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];an[t]=new Pn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){an[e]=new Pn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){an[e]=new Pn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){an[e]=new Pn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){an[e]=new Pn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){an[e]=new Pn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){an[e]=new Pn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){an[e]=new Pn(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fw=/[\-:]([a-z])/g;function Bw(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fw,Bw);an[t]=new Pn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fw,Bw);an[t]=new Pn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fw,Bw);an[t]=new Pn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){an[e]=new Pn(e,1,!1,e.toLowerCase(),null,!1,!1)});an.xlinkHref=new Pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){an[e]=new Pn(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uw(e,t,n,r){var i=an.hasOwnProperty(t)?an[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eD(t,n,i,r)&&(n=null),r||i===null?XA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qi=FC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,If=Symbol.for("react.element"),Ya=Symbol.for("react.portal"),Xa=Symbol.for("react.fragment"),zw=Symbol.for("react.strict_mode"),ty=Symbol.for("react.profiler"),UC=Symbol.for("react.provider"),zC=Symbol.for("react.context"),Ww=Symbol.for("react.forward_ref"),ny=Symbol.for("react.suspense"),ry=Symbol.for("react.suspense_list"),Vw=Symbol.for("react.memo"),mo=Symbol.for("react.lazy"),WC=Symbol.for("react.offscreen"),a5=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=a5&&e[a5]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Object.assign,lm;function tu(e){if(lm===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);lm=t&&t[1]||""}return`
`+lm+e}var cm=!1;function um(e,t){if(!e||cm)return"";cm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{cm=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tu(e):""}function tD(e){switch(e.tag){case 5:return tu(e.type);case 16:return tu("Lazy");case 13:return tu("Suspense");case 19:return tu("SuspenseList");case 0:case 2:case 15:return e=um(e.type,!1),e;case 11:return e=um(e.type.render,!1),e;case 1:return e=um(e.type,!0),e;default:return""}}function iy(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xa:return"Fragment";case Ya:return"Portal";case ty:return"Profiler";case zw:return"StrictMode";case ny:return"Suspense";case ry:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zC:return(e.displayName||"Context")+".Consumer";case UC:return(e._context.displayName||"Context")+".Provider";case Ww:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vw:return t=e.displayName||null,t!==null?t:iy(e.type)||"Memo";case mo:t=e._payload,e=e._init;try{return iy(e(t))}catch{}}return null}function nD(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iy(t);case 8:return t===zw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ko(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function VC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rD(e){var t=VC(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mf(e){e._valueTracker||(e._valueTracker=rD(e))}function HC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=VC(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oy(e,t){var n=t.checked;return xt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function l5(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ko(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qC(e,t){t=t.checked,t!=null&&Uw(e,"checked",t,!1)}function sy(e,t){qC(e,t);var n=Ko(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ay(e,t.type,n):t.hasOwnProperty("defaultValue")&&ay(e,t.type,Ko(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function c5(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ay(e,t,n){(t!=="number"||Jh(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nu=Array.isArray;function gl(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ko(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ly(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(te(91));return xt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function u5(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(te(92));if(nu(n)){if(1<n.length)throw Error(te(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ko(n)}}function GC(e,t){var n=Ko(t.value),r=Ko(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function d5(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function KC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cy(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?KC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lf,ZC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lf=Lf||document.createElement("div"),Lf.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lf.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bu(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iD=["Webkit","ms","Moz","O"];Object.keys(hu).forEach(function(e){iD.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hu[t]=hu[e]})});function QC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hu.hasOwnProperty(e)&&hu[e]?(""+t).trim():t+"px"}function YC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=QC(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var oD=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uy(e,t){if(t){if(oD[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(te(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(te(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(te(61))}if(t.style!=null&&typeof t.style!="object")throw Error(te(62))}}function dy(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fy=null;function Hw(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hy=null,yl=null,vl=null;function f5(e){if(e=Jd(e)){if(typeof hy!="function")throw Error(te(280));var t=e.stateNode;t&&(t=kp(t),hy(e.stateNode,e.type,t))}}function XC(e){yl?vl?vl.push(e):vl=[e]:yl=e}function JC(){if(yl){var e=yl,t=vl;if(vl=yl=null,f5(e),t)for(e=0;e<t.length;e++)f5(t[e])}}function eE(e,t){return e(t)}function tE(){}var dm=!1;function nE(e,t,n){if(dm)return e(t,n);dm=!0;try{return eE(e,t,n)}finally{dm=!1,(yl!==null||vl!==null)&&(tE(),JC())}}function Uu(e,t){var n=e.stateNode;if(n===null)return null;var r=kp(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(te(231,t,typeof n));return n}var py=!1;if(ji)try{var Ac={};Object.defineProperty(Ac,"passive",{get:function(){py=!0}}),window.addEventListener("test",Ac,Ac),window.removeEventListener("test",Ac,Ac)}catch{py=!1}function sD(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var pu=!1,e0=null,t0=!1,my=null,aD={onError:function(e){pu=!0,e0=e}};function lD(e,t,n,r,i,o,s,a,l){pu=!1,e0=null,sD.apply(aD,arguments)}function cD(e,t,n,r,i,o,s,a,l){if(lD.apply(this,arguments),pu){if(pu){var c=e0;pu=!1,e0=null}else throw Error(te(198));t0||(t0=!0,my=c)}}function Sa(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h5(e){if(Sa(e)!==e)throw Error(te(188))}function uD(e){var t=e.alternate;if(!t){if(t=Sa(e),t===null)throw Error(te(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return h5(i),e;if(o===r)return h5(i),t;o=o.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?e:t}function iE(e){return e=uD(e),e!==null?oE(e):null}function oE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oE(e);if(t!==null)return t;e=e.sibling}return null}var sE=Yn.unstable_scheduleCallback,p5=Yn.unstable_cancelCallback,dD=Yn.unstable_shouldYield,fD=Yn.unstable_requestPaint,Dt=Yn.unstable_now,hD=Yn.unstable_getCurrentPriorityLevel,qw=Yn.unstable_ImmediatePriority,aE=Yn.unstable_UserBlockingPriority,n0=Yn.unstable_NormalPriority,pD=Yn.unstable_LowPriority,lE=Yn.unstable_IdlePriority,Pp=null,li=null;function mD(e){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Pp,e,void 0,(e.current.flags&128)===128)}catch{}}var Fr=Math.clz32?Math.clz32:vD,gD=Math.log,yD=Math.LN2;function vD(e){return e>>>=0,e===0?32:31-(gD(e)/yD|0)|0}var jf=64,Ff=4194304;function ru(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function r0(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ru(a):(o&=s,o!==0&&(r=ru(o)))}else s=n&~i,s!==0?r=ru(s):o!==0&&(r=ru(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fr(t),i=1<<n,r|=e[n],t&=~i;return r}function wD(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bD(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Fr(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=wD(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function gy(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cE(){var e=jf;return jf<<=1,!(jf&4194240)&&(jf=64),e}function fm(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yd(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fr(t),e[t]=n}function xD(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fr(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Gw(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ye=0;function uE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dE,Kw,fE,hE,pE,yy=!1,Bf=[],Oo=null,ko=null,Ro=null,zu=new Map,Wu=new Map,bo=[],CD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function m5(e,t){switch(e){case"focusin":case"focusout":Oo=null;break;case"dragenter":case"dragleave":ko=null;break;case"mouseover":case"mouseout":Ro=null;break;case"pointerover":case"pointerout":zu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wu.delete(t.pointerId)}}function Dc(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jd(t),t!==null&&Kw(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ED(e,t,n,r,i){switch(t){case"focusin":return Oo=Dc(Oo,e,t,n,r,i),!0;case"dragenter":return ko=Dc(ko,e,t,n,r,i),!0;case"mouseover":return Ro=Dc(Ro,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zu.set(o,Dc(zu.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wu.set(o,Dc(Wu.get(o)||null,e,t,n,r,i)),!0}return!1}function mE(e){var t=Ms(e.target);if(t!==null){var n=Sa(t);if(n!==null){if(t=n.tag,t===13){if(t=rE(n),t!==null){e.blockedOn=t,pE(e.priority,function(){fE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Th(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vy(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fy=r,n.target.dispatchEvent(r),fy=null}else return t=Jd(n),t!==null&&Kw(t),e.blockedOn=n,!1;t.shift()}return!0}function g5(e,t,n){Th(e)&&n.delete(t)}function SD(){yy=!1,Oo!==null&&Th(Oo)&&(Oo=null),ko!==null&&Th(ko)&&(ko=null),Ro!==null&&Th(Ro)&&(Ro=null),zu.forEach(g5),Wu.forEach(g5)}function Oc(e,t){e.blockedOn===t&&(e.blockedOn=null,yy||(yy=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,SD)))}function Vu(e){function t(i){return Oc(i,e)}if(0<Bf.length){Oc(Bf[0],e);for(var n=1;n<Bf.length;n++){var r=Bf[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Oo!==null&&Oc(Oo,e),ko!==null&&Oc(ko,e),Ro!==null&&Oc(Ro,e),zu.forEach(t),Wu.forEach(t),n=0;n<bo.length;n++)r=bo[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bo.length&&(n=bo[0],n.blockedOn===null);)mE(n),n.blockedOn===null&&bo.shift()}var wl=Qi.ReactCurrentBatchConfig,i0=!0;function _D(e,t,n,r){var i=Ye,o=wl.transition;wl.transition=null;try{Ye=1,Zw(e,t,n,r)}finally{Ye=i,wl.transition=o}}function TD(e,t,n,r){var i=Ye,o=wl.transition;wl.transition=null;try{Ye=4,Zw(e,t,n,r)}finally{Ye=i,wl.transition=o}}function Zw(e,t,n,r){if(i0){var i=vy(e,t,n,r);if(i===null)Cm(e,t,r,o0,n),m5(e,r);else if(ED(i,e,t,n,r))r.stopPropagation();else if(m5(e,r),t&4&&-1<CD.indexOf(e)){for(;i!==null;){var o=Jd(i);if(o!==null&&dE(o),o=vy(e,t,n,r),o===null&&Cm(e,t,r,o0,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cm(e,t,r,null,n)}}var o0=null;function vy(e,t,n,r){if(o0=null,e=Hw(r),e=Ms(e),e!==null)if(t=Sa(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return o0=e,null}function gE(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hD()){case qw:return 1;case aE:return 4;case n0:case pD:return 16;case lE:return 536870912;default:return 16}default:return 16}}var To=null,Qw=null,$h=null;function yE(){if($h)return $h;var e,t=Qw,n=t.length,r,i="value"in To?To.value:To.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return $h=i.slice(e,1<r?1-r:void 0)}function Ph(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uf(){return!0}function y5(){return!1}function er(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Uf:y5,this.isPropagationStopped=y5,this}return xt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uf)},persist:function(){},isPersistent:Uf}),t}var oc={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yw=er(oc),Xd=xt({},oc,{view:0,detail:0}),$D=er(Xd),hm,pm,kc,Ap=xt({},Xd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xw,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kc&&(kc&&e.type==="mousemove"?(hm=e.screenX-kc.screenX,pm=e.screenY-kc.screenY):pm=hm=0,kc=e),hm)},movementY:function(e){return"movementY"in e?e.movementY:pm}}),v5=er(Ap),PD=xt({},Ap,{dataTransfer:0}),AD=er(PD),DD=xt({},Xd,{relatedTarget:0}),mm=er(DD),OD=xt({},oc,{animationName:0,elapsedTime:0,pseudoElement:0}),kD=er(OD),RD=xt({},oc,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ND=er(RD),ID=xt({},oc,{data:0}),w5=er(ID),MD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FD(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jD[e])?!!t[e]:!1}function Xw(){return FD}var BD=xt({},Xd,{key:function(e){if(e.key){var t=MD[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ph(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?LD[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xw,charCode:function(e){return e.type==="keypress"?Ph(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ph(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),UD=er(BD),zD=xt({},Ap,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b5=er(zD),WD=xt({},Xd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xw}),VD=er(WD),HD=xt({},oc,{propertyName:0,elapsedTime:0,pseudoElement:0}),qD=er(HD),GD=xt({},Ap,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KD=er(GD),ZD=[9,13,27,32],Jw=ji&&"CompositionEvent"in window,mu=null;ji&&"documentMode"in document&&(mu=document.documentMode);var QD=ji&&"TextEvent"in window&&!mu,vE=ji&&(!Jw||mu&&8<mu&&11>=mu),x5=" ",C5=!1;function wE(e,t){switch(e){case"keyup":return ZD.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function YD(e,t){switch(e){case"compositionend":return bE(t);case"keypress":return t.which!==32?null:(C5=!0,x5);case"textInput":return e=t.data,e===x5&&C5?null:e;default:return null}}function XD(e,t){if(Ja)return e==="compositionend"||!Jw&&wE(e,t)?(e=yE(),$h=Qw=To=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vE&&t.locale!=="ko"?null:t.data;default:return null}}var JD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E5(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!JD[e.type]:t==="textarea"}function xE(e,t,n,r){XC(r),t=s0(t,"onChange"),0<t.length&&(n=new Yw("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gu=null,Hu=null;function eO(e){kE(e,0)}function Dp(e){var t=nl(e);if(HC(t))return e}function tO(e,t){if(e==="change")return t}var CE=!1;if(ji){var gm;if(ji){var ym="oninput"in document;if(!ym){var S5=document.createElement("div");S5.setAttribute("oninput","return;"),ym=typeof S5.oninput=="function"}gm=ym}else gm=!1;CE=gm&&(!document.documentMode||9<document.documentMode)}function _5(){gu&&(gu.detachEvent("onpropertychange",EE),Hu=gu=null)}function EE(e){if(e.propertyName==="value"&&Dp(Hu)){var t=[];xE(t,Hu,e,Hw(e)),nE(eO,t)}}function nO(e,t,n){e==="focusin"?(_5(),gu=t,Hu=n,gu.attachEvent("onpropertychange",EE)):e==="focusout"&&_5()}function rO(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dp(Hu)}function iO(e,t){if(e==="click")return Dp(t)}function oO(e,t){if(e==="input"||e==="change")return Dp(t)}function sO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zr=typeof Object.is=="function"?Object.is:sO;function qu(e,t){if(zr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ey.call(t,i)||!zr(e[i],t[i]))return!1}return!0}function T5(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $5(e,t){var n=T5(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=T5(n)}}function SE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?SE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _E(){for(var e=window,t=Jh();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jh(e.document)}return t}function e2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function aO(e){var t=_E(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&SE(n.ownerDocument.documentElement,n)){if(r!==null&&e2(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$5(n,o);var s=$5(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lO=ji&&"documentMode"in document&&11>=document.documentMode,el=null,wy=null,yu=null,by=!1;function P5(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;by||el==null||el!==Jh(r)||(r=el,"selectionStart"in r&&e2(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yu&&qu(yu,r)||(yu=r,r=s0(wy,"onSelect"),0<r.length&&(t=new Yw("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=el)))}function zf(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tl={animationend:zf("Animation","AnimationEnd"),animationiteration:zf("Animation","AnimationIteration"),animationstart:zf("Animation","AnimationStart"),transitionend:zf("Transition","TransitionEnd")},vm={},TE={};ji&&(TE=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Op(e){if(vm[e])return vm[e];if(!tl[e])return e;var t=tl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in TE)return vm[e]=t[n];return e}var $E=Op("animationend"),PE=Op("animationiteration"),AE=Op("animationstart"),DE=Op("transitionend"),OE=new Map,A5="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(e,t){OE.set(e,t),Ea(t,[e])}for(var wm=0;wm<A5.length;wm++){var bm=A5[wm],cO=bm.toLowerCase(),uO=bm[0].toUpperCase()+bm.slice(1);ss(cO,"on"+uO)}ss($E,"onAnimationEnd");ss(PE,"onAnimationIteration");ss(AE,"onAnimationStart");ss("dblclick","onDoubleClick");ss("focusin","onFocus");ss("focusout","onBlur");ss(DE,"onTransitionEnd");Tl("onMouseEnter",["mouseout","mouseover"]);Tl("onMouseLeave",["mouseout","mouseover"]);Tl("onPointerEnter",["pointerout","pointerover"]);Tl("onPointerLeave",["pointerout","pointerover"]);Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dO=new Set("cancel close invalid load scroll toggle".split(" ").concat(iu));function D5(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cD(r,t,void 0,e),e.currentTarget=null}function kE(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;D5(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;D5(i,a,c),o=l}}}if(t0)throw e=my,t0=!1,my=null,e}function dt(e,t){var n=t[_y];n===void 0&&(n=t[_y]=new Set);var r=e+"__bubble";n.has(r)||(RE(t,e,2,!1),n.add(r))}function xm(e,t,n){var r=0;t&&(r|=4),RE(n,e,r,t)}var Wf="_reactListening"+Math.random().toString(36).slice(2);function Gu(e){if(!e[Wf]){e[Wf]=!0,BC.forEach(function(n){n!=="selectionchange"&&(dO.has(n)||xm(n,!1,e),xm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wf]||(t[Wf]=!0,xm("selectionchange",!1,t))}}function RE(e,t,n,r){switch(gE(t)){case 1:var i=_D;break;case 4:i=TD;break;default:i=Zw}n=i.bind(null,t,n,e),i=void 0,!py||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cm(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ms(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}nE(function(){var c=o,u=Hw(n),d=[];e:{var f=OE.get(e);if(f!==void 0){var h=Yw,p=e;switch(e){case"keypress":if(Ph(n)===0)break e;case"keydown":case"keyup":h=UD;break;case"focusin":p="focus",h=mm;break;case"focusout":p="blur",h=mm;break;case"beforeblur":case"afterblur":h=mm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=v5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=AD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=VD;break;case $E:case PE:case AE:h=kD;break;case DE:h=qD;break;case"scroll":h=$D;break;case"wheel":h=KD;break;case"copy":case"cut":case"paste":h=ND;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=b5}var m=(t&4)!==0,v=!m&&e==="scroll",b=m?f!==null?f+"Capture":null:f;m=[];for(var y=c,x;y!==null;){x=y;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,b!==null&&(w=Uu(y,b),w!=null&&m.push(Ku(y,w,x)))),v)break;y=y.return}0<m.length&&(f=new h(f,p,null,n,u),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==fy&&(p=n.relatedTarget||n.fromElement)&&(Ms(p)||p[Fi]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Ms(p):null,p!==null&&(v=Sa(p),p!==v||p.tag!==5&&p.tag!==6)&&(p=null)):(h=null,p=c),h!==p)){if(m=v5,w="onMouseLeave",b="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(m=b5,w="onPointerLeave",b="onPointerEnter",y="pointer"),v=h==null?f:nl(h),x=p==null?f:nl(p),f=new m(w,y+"leave",h,n,u),f.target=v,f.relatedTarget=x,w=null,Ms(u)===c&&(m=new m(b,y+"enter",p,n,u),m.target=x,m.relatedTarget=v,w=m),v=w,h&&p)t:{for(m=h,b=p,y=0,x=m;x;x=La(x))y++;for(x=0,w=b;w;w=La(w))x++;for(;0<y-x;)m=La(m),y--;for(;0<x-y;)b=La(b),x--;for(;y--;){if(m===b||b!==null&&m===b.alternate)break t;m=La(m),b=La(b)}m=null}else m=null;h!==null&&O5(d,f,h,m,!1),p!==null&&v!==null&&O5(d,v,p,m,!0)}}e:{if(f=c?nl(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var _=tO;else if(E5(f))if(CE)_=oO;else{_=rO;var $=nO}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=iO);if(_&&(_=_(e,c))){xE(d,_,n,u);break e}$&&$(e,f,c),e==="focusout"&&($=f._wrapperState)&&$.controlled&&f.type==="number"&&ay(f,"number",f.value)}switch($=c?nl(c):window,e){case"focusin":(E5($)||$.contentEditable==="true")&&(el=$,wy=c,yu=null);break;case"focusout":yu=wy=el=null;break;case"mousedown":by=!0;break;case"contextmenu":case"mouseup":case"dragend":by=!1,P5(d,n,u);break;case"selectionchange":if(lO)break;case"keydown":case"keyup":P5(d,n,u)}var g;if(Jw)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ja?wE(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(vE&&n.locale!=="ko"&&(Ja||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ja&&(g=yE()):(To=u,Qw="value"in To?To.value:To.textContent,Ja=!0)),$=s0(c,T),0<$.length&&(T=new w5(T,e,null,n,u),d.push({event:T,listeners:$}),g?T.data=g:(g=bE(n),g!==null&&(T.data=g)))),(g=QD?YD(e,n):XD(e,n))&&(c=s0(c,"onBeforeInput"),0<c.length&&(u=new w5("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=g))}kE(d,t)})}function Ku(e,t,n){return{instance:e,listener:t,currentTarget:n}}function s0(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Uu(e,n),o!=null&&r.unshift(Ku(e,o,i)),o=Uu(e,t),o!=null&&r.push(Ku(e,o,i))),e=e.return}return r}function La(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function O5(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Uu(n,o),l!=null&&s.unshift(Ku(n,l,a))):i||(l=Uu(n,o),l!=null&&s.push(Ku(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var fO=/\r\n?/g,hO=/\u0000|\uFFFD/g;function k5(e){return(typeof e=="string"?e:""+e).replace(fO,`
`).replace(hO,"")}function Vf(e,t,n){if(t=k5(t),k5(e)!==t&&n)throw Error(te(425))}function a0(){}var xy=null,Cy=null;function Ey(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sy=typeof setTimeout=="function"?setTimeout:void 0,pO=typeof clearTimeout=="function"?clearTimeout:void 0,R5=typeof Promise=="function"?Promise:void 0,mO=typeof queueMicrotask=="function"?queueMicrotask:typeof R5<"u"?function(e){return R5.resolve(null).then(e).catch(gO)}:Sy;function gO(e){setTimeout(function(){throw e})}function Em(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vu(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vu(t)}function No(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function N5(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sc=Math.random().toString(36).slice(2),si="__reactFiber$"+sc,Zu="__reactProps$"+sc,Fi="__reactContainer$"+sc,_y="__reactEvents$"+sc,yO="__reactListeners$"+sc,vO="__reactHandles$"+sc;function Ms(e){var t=e[si];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fi]||n[si]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=N5(e);e!==null;){if(n=e[si])return n;e=N5(e)}return t}e=n,n=e.parentNode}return null}function Jd(e){return e=e[si]||e[Fi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nl(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(te(33))}function kp(e){return e[Zu]||null}var Ty=[],rl=-1;function as(e){return{current:e}}function ft(e){0>rl||(e.current=Ty[rl],Ty[rl]=null,rl--)}function at(e,t){rl++,Ty[rl]=e.current,e.current=t}var Zo={},vn=as(Zo),Ln=as(!1),ia=Zo;function $l(e,t){var n=e.type.contextTypes;if(!n)return Zo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function jn(e){return e=e.childContextTypes,e!=null}function l0(){ft(Ln),ft(vn)}function I5(e,t,n){if(vn.current!==Zo)throw Error(te(168));at(vn,t),at(Ln,n)}function NE(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(te(108,nD(e)||"Unknown",i));return xt({},n,r)}function c0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zo,ia=vn.current,at(vn,e),at(Ln,Ln.current),!0}function M5(e,t,n){var r=e.stateNode;if(!r)throw Error(te(169));n?(e=NE(e,t,ia),r.__reactInternalMemoizedMergedChildContext=e,ft(Ln),ft(vn),at(vn,e)):ft(Ln),at(Ln,n)}var _i=null,Rp=!1,Sm=!1;function IE(e){_i===null?_i=[e]:_i.push(e)}function wO(e){Rp=!0,IE(e)}function ls(){if(!Sm&&_i!==null){Sm=!0;var e=0,t=Ye;try{var n=_i;for(Ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_i=null,Rp=!1}catch(i){throw _i!==null&&(_i=_i.slice(e+1)),sE(qw,ls),i}finally{Ye=t,Sm=!1}}return null}var il=[],ol=0,u0=null,d0=0,hr=[],pr=0,oa=null,$i=1,Pi="";function $s(e,t){il[ol++]=d0,il[ol++]=u0,u0=e,d0=t}function ME(e,t,n){hr[pr++]=$i,hr[pr++]=Pi,hr[pr++]=oa,oa=e;var r=$i;e=Pi;var i=32-Fr(r)-1;r&=~(1<<i),n+=1;var o=32-Fr(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$i=1<<32-Fr(t)+i|n<<i|r,Pi=o+e}else $i=1<<o|n<<i|r,Pi=e}function t2(e){e.return!==null&&($s(e,1),ME(e,1,0))}function n2(e){for(;e===u0;)u0=il[--ol],il[ol]=null,d0=il[--ol],il[ol]=null;for(;e===oa;)oa=hr[--pr],hr[pr]=null,Pi=hr[--pr],hr[pr]=null,$i=hr[--pr],hr[pr]=null}var Qn=null,Kn=null,pt=!1,Lr=null;function LE(e,t){var n=gr(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function L5(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qn=e,Kn=No(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qn=e,Kn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=oa!==null?{id:$i,overflow:Pi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gr(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qn=e,Kn=null,!0):!1;default:return!1}}function $y(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Py(e){if(pt){var t=Kn;if(t){var n=t;if(!L5(e,t)){if($y(e))throw Error(te(418));t=No(n.nextSibling);var r=Qn;t&&L5(e,t)?LE(r,n):(e.flags=e.flags&-4097|2,pt=!1,Qn=e)}}else{if($y(e))throw Error(te(418));e.flags=e.flags&-4097|2,pt=!1,Qn=e}}}function j5(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qn=e}function Hf(e){if(e!==Qn)return!1;if(!pt)return j5(e),pt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ey(e.type,e.memoizedProps)),t&&(t=Kn)){if($y(e))throw jE(),Error(te(418));for(;t;)LE(e,t),t=No(t.nextSibling)}if(j5(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(te(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kn=No(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kn=null}}else Kn=Qn?No(e.stateNode.nextSibling):null;return!0}function jE(){for(var e=Kn;e;)e=No(e.nextSibling)}function Pl(){Kn=Qn=null,pt=!1}function r2(e){Lr===null?Lr=[e]:Lr.push(e)}var bO=Qi.ReactCurrentBatchConfig;function Nr(e,t){if(e&&e.defaultProps){t=xt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var f0=as(null),h0=null,sl=null,i2=null;function o2(){i2=sl=h0=null}function s2(e){var t=f0.current;ft(f0),e._currentValue=t}function Ay(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bl(e,t){h0=e,i2=sl=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Rn=!0),e.firstContext=null)}function xr(e){var t=e._currentValue;if(i2!==e)if(e={context:e,memoizedValue:t,next:null},sl===null){if(h0===null)throw Error(te(308));sl=e,h0.dependencies={lanes:0,firstContext:e}}else sl=sl.next=e;return t}var Ls=null;function a2(e){Ls===null?Ls=[e]:Ls.push(e)}function FE(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,a2(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bi(e,r)}function Bi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var go=!1;function l2(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function BE(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Io(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,We&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bi(e,n)}return i=r.interleaved,i===null?(t.next=t,a2(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bi(e,n)}function Ah(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gw(e,n)}}function F5(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function p0(e,t,n,r){var i=e.updateQueue;go=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(f=t,h=n,m.tag){case 1:if(p=m.payload,typeof p=="function"){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=m.payload,f=typeof p=="function"?p.call(h,d,f):p,f==null)break e;d=xt({},d,f);break e;case 2:go=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);aa|=s,e.lanes=s,e.memoizedState=d}}function B5(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var UE=new FC.Component().refs;function Dy(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Np={isMounted:function(e){return(e=e._reactInternals)?Sa(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=En(),i=Lo(e),o=Di(r,i);o.payload=t,n!=null&&(o.callback=n),t=Io(e,o,i),t!==null&&(Br(t,e,i,r),Ah(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=En(),i=Lo(e),o=Di(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Io(e,o,i),t!==null&&(Br(t,e,i,r),Ah(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=En(),r=Lo(e),i=Di(n,r);i.tag=2,t!=null&&(i.callback=t),t=Io(e,i,r),t!==null&&(Br(t,e,r,n),Ah(t,e,r))}};function U5(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!qu(n,r)||!qu(i,o):!0}function zE(e,t,n){var r=!1,i=Zo,o=t.contextType;return typeof o=="object"&&o!==null?o=xr(o):(i=jn(t)?ia:vn.current,r=t.contextTypes,o=(r=r!=null)?$l(e,i):Zo),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Np,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function z5(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Np.enqueueReplaceState(t,t.state,null)}function Oy(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=UE,l2(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=xr(o):(o=jn(t)?ia:vn.current,i.context=$l(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Dy(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Np.enqueueReplaceState(i,i.state,null),p0(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Rc(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===UE&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,e))}return e}function qf(e,t){throw e=Object.prototype.toString.call(t),Error(te(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function W5(e){var t=e._init;return t(e._payload)}function WE(e){function t(b,y){if(e){var x=b.deletions;x===null?(b.deletions=[y],b.flags|=16):x.push(y)}}function n(b,y){if(!e)return null;for(;y!==null;)t(b,y),y=y.sibling;return null}function r(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function i(b,y){return b=jo(b,y),b.index=0,b.sibling=null,b}function o(b,y,x){return b.index=x,e?(x=b.alternate,x!==null?(x=x.index,x<y?(b.flags|=2,y):x):(b.flags|=2,y)):(b.flags|=1048576,y)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,y,x,w){return y===null||y.tag!==6?(y=Om(x,b.mode,w),y.return=b,y):(y=i(y,x),y.return=b,y)}function l(b,y,x,w){var _=x.type;return _===Xa?u(b,y,x.props.children,w,x.key):y!==null&&(y.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mo&&W5(_)===y.type)?(w=i(y,x.props),w.ref=Rc(b,y,x),w.return=b,w):(w=Ih(x.type,x.key,x.props,null,b.mode,w),w.ref=Rc(b,y,x),w.return=b,w)}function c(b,y,x,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=km(x,b.mode,w),y.return=b,y):(y=i(y,x.children||[]),y.return=b,y)}function u(b,y,x,w,_){return y===null||y.tag!==7?(y=Ks(x,b.mode,w,_),y.return=b,y):(y=i(y,x),y.return=b,y)}function d(b,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Om(""+y,b.mode,x),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case If:return x=Ih(y.type,y.key,y.props,null,b.mode,x),x.ref=Rc(b,null,y),x.return=b,x;case Ya:return y=km(y,b.mode,x),y.return=b,y;case mo:var w=y._init;return d(b,w(y._payload),x)}if(nu(y)||Pc(y))return y=Ks(y,b.mode,x,null),y.return=b,y;qf(b,y)}return null}function f(b,y,x,w){var _=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return _!==null?null:a(b,y,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case If:return x.key===_?l(b,y,x,w):null;case Ya:return x.key===_?c(b,y,x,w):null;case mo:return _=x._init,f(b,y,_(x._payload),w)}if(nu(x)||Pc(x))return _!==null?null:u(b,y,x,w,null);qf(b,x)}return null}function h(b,y,x,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(x)||null,a(y,b,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case If:return b=b.get(w.key===null?x:w.key)||null,l(y,b,w,_);case Ya:return b=b.get(w.key===null?x:w.key)||null,c(y,b,w,_);case mo:var $=w._init;return h(b,y,x,$(w._payload),_)}if(nu(w)||Pc(w))return b=b.get(x)||null,u(y,b,w,_,null);qf(y,w)}return null}function p(b,y,x,w){for(var _=null,$=null,g=y,T=y=0,D=null;g!==null&&T<x.length;T++){g.index>T?(D=g,g=null):D=g.sibling;var k=f(b,g,x[T],w);if(k===null){g===null&&(g=D);break}e&&g&&k.alternate===null&&t(b,g),y=o(k,y,T),$===null?_=k:$.sibling=k,$=k,g=D}if(T===x.length)return n(b,g),pt&&$s(b,T),_;if(g===null){for(;T<x.length;T++)g=d(b,x[T],w),g!==null&&(y=o(g,y,T),$===null?_=g:$.sibling=g,$=g);return pt&&$s(b,T),_}for(g=r(b,g);T<x.length;T++)D=h(g,b,T,x[T],w),D!==null&&(e&&D.alternate!==null&&g.delete(D.key===null?T:D.key),y=o(D,y,T),$===null?_=D:$.sibling=D,$=D);return e&&g.forEach(function(I){return t(b,I)}),pt&&$s(b,T),_}function m(b,y,x,w){var _=Pc(x);if(typeof _!="function")throw Error(te(150));if(x=_.call(x),x==null)throw Error(te(151));for(var $=_=null,g=y,T=y=0,D=null,k=x.next();g!==null&&!k.done;T++,k=x.next()){g.index>T?(D=g,g=null):D=g.sibling;var I=f(b,g,k.value,w);if(I===null){g===null&&(g=D);break}e&&g&&I.alternate===null&&t(b,g),y=o(I,y,T),$===null?_=I:$.sibling=I,$=I,g=D}if(k.done)return n(b,g),pt&&$s(b,T),_;if(g===null){for(;!k.done;T++,k=x.next())k=d(b,k.value,w),k!==null&&(y=o(k,y,T),$===null?_=k:$.sibling=k,$=k);return pt&&$s(b,T),_}for(g=r(b,g);!k.done;T++,k=x.next())k=h(g,b,T,k.value,w),k!==null&&(e&&k.alternate!==null&&g.delete(k.key===null?T:k.key),y=o(k,y,T),$===null?_=k:$.sibling=k,$=k);return e&&g.forEach(function(V){return t(b,V)}),pt&&$s(b,T),_}function v(b,y,x,w){if(typeof x=="object"&&x!==null&&x.type===Xa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case If:e:{for(var _=x.key,$=y;$!==null;){if($.key===_){if(_=x.type,_===Xa){if($.tag===7){n(b,$.sibling),y=i($,x.props.children),y.return=b,b=y;break e}}else if($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mo&&W5(_)===$.type){n(b,$.sibling),y=i($,x.props),y.ref=Rc(b,$,x),y.return=b,b=y;break e}n(b,$);break}else t(b,$);$=$.sibling}x.type===Xa?(y=Ks(x.props.children,b.mode,w,x.key),y.return=b,b=y):(w=Ih(x.type,x.key,x.props,null,b.mode,w),w.ref=Rc(b,y,x),w.return=b,b=w)}return s(b);case Ya:e:{for($=x.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(b,y.sibling),y=i(y,x.children||[]),y.return=b,b=y;break e}else{n(b,y);break}else t(b,y);y=y.sibling}y=km(x,b.mode,w),y.return=b,b=y}return s(b);case mo:return $=x._init,v(b,y,$(x._payload),w)}if(nu(x))return p(b,y,x,w);if(Pc(x))return m(b,y,x,w);qf(b,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(b,y.sibling),y=i(y,x),y.return=b,b=y):(n(b,y),y=Om(x,b.mode,w),y.return=b,b=y),s(b)):n(b,y)}return v}var Al=WE(!0),VE=WE(!1),ef={},ci=as(ef),Qu=as(ef),Yu=as(ef);function js(e){if(e===ef)throw Error(te(174));return e}function c2(e,t){switch(at(Yu,t),at(Qu,e),at(ci,ef),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cy(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cy(t,e)}ft(ci),at(ci,t)}function Dl(){ft(ci),ft(Qu),ft(Yu)}function HE(e){js(Yu.current);var t=js(ci.current),n=cy(t,e.type);t!==n&&(at(Qu,e),at(ci,n))}function u2(e){Qu.current===e&&(ft(ci),ft(Qu))}var yt=as(0);function m0(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _m=[];function d2(){for(var e=0;e<_m.length;e++)_m[e]._workInProgressVersionPrimary=null;_m.length=0}var Dh=Qi.ReactCurrentDispatcher,Tm=Qi.ReactCurrentBatchConfig,sa=0,bt=null,Ut=null,Qt=null,g0=!1,vu=!1,Xu=0,xO=0;function cn(){throw Error(te(321))}function f2(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zr(e[n],t[n]))return!1;return!0}function h2(e,t,n,r,i,o){if(sa=o,bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dh.current=e===null||e.memoizedState===null?_O:TO,e=n(r,i),vu){o=0;do{if(vu=!1,Xu=0,25<=o)throw Error(te(301));o+=1,Qt=Ut=null,t.updateQueue=null,Dh.current=$O,e=n(r,i)}while(vu)}if(Dh.current=y0,t=Ut!==null&&Ut.next!==null,sa=0,Qt=Ut=bt=null,g0=!1,t)throw Error(te(300));return e}function p2(){var e=Xu!==0;return Xu=0,e}function oi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?bt.memoizedState=Qt=e:Qt=Qt.next=e,Qt}function Cr(){if(Ut===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=Ut.next;var t=Qt===null?bt.memoizedState:Qt.next;if(t!==null)Qt=t,Ut=e;else{if(e===null)throw Error(te(310));Ut=e,e={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Qt===null?bt.memoizedState=Qt=e:Qt=Qt.next=e}return Qt}function Ju(e,t){return typeof t=="function"?t(e):t}function $m(e){var t=Cr(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=Ut,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((sa&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,bt.lanes|=u,aa|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,zr(r,t.memoizedState)||(Rn=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,bt.lanes|=o,aa|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pm(e){var t=Cr(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);zr(o,t.memoizedState)||(Rn=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qE(){}function GE(e,t){var n=bt,r=Cr(),i=t(),o=!zr(r.memoizedState,i);if(o&&(r.memoizedState=i,Rn=!0),r=r.queue,m2(QE.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,ed(9,ZE.bind(null,n,r,i,t),void 0,null),Xt===null)throw Error(te(349));sa&30||KE(n,t,i)}return i}function KE(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=bt.updateQueue,t===null?(t={lastEffect:null,stores:null},bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ZE(e,t,n,r){t.value=n,t.getSnapshot=r,YE(t)&&XE(e)}function QE(e,t,n){return n(function(){YE(t)&&XE(e)})}function YE(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zr(e,n)}catch{return!0}}function XE(e){var t=Bi(e,1);t!==null&&Br(t,e,1,-1)}function V5(e){var t=oi();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ju,lastRenderedState:e},t.queue=e,e=e.dispatch=SO.bind(null,bt,e),[t.memoizedState,e]}function ed(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=bt.updateQueue,t===null?(t={lastEffect:null,stores:null},bt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function JE(){return Cr().memoizedState}function Oh(e,t,n,r){var i=oi();bt.flags|=e,i.memoizedState=ed(1|t,n,void 0,r===void 0?null:r)}function Ip(e,t,n,r){var i=Cr();r=r===void 0?null:r;var o=void 0;if(Ut!==null){var s=Ut.memoizedState;if(o=s.destroy,r!==null&&f2(r,s.deps)){i.memoizedState=ed(t,n,o,r);return}}bt.flags|=e,i.memoizedState=ed(1|t,n,o,r)}function H5(e,t){return Oh(8390656,8,e,t)}function m2(e,t){return Ip(2048,8,e,t)}function e7(e,t){return Ip(4,2,e,t)}function t7(e,t){return Ip(4,4,e,t)}function n7(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r7(e,t,n){return n=n!=null?n.concat([e]):null,Ip(4,4,n7.bind(null,t,e),n)}function g2(){}function i7(e,t){var n=Cr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&f2(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function o7(e,t){var n=Cr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&f2(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function s7(e,t,n){return sa&21?(zr(n,t)||(n=cE(),bt.lanes|=n,aa|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rn=!0),e.memoizedState=n)}function CO(e,t){var n=Ye;Ye=n!==0&&4>n?n:4,e(!0);var r=Tm.transition;Tm.transition={};try{e(!1),t()}finally{Ye=n,Tm.transition=r}}function a7(){return Cr().memoizedState}function EO(e,t,n){var r=Lo(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l7(e))c7(t,n);else if(n=FE(e,t,n,r),n!==null){var i=En();Br(n,e,r,i),u7(n,t,r)}}function SO(e,t,n){var r=Lo(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l7(e))c7(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,zr(a,s)){var l=t.interleaved;l===null?(i.next=i,a2(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=FE(e,t,i,r),n!==null&&(i=En(),Br(n,e,r,i),u7(n,t,r))}}function l7(e){var t=e.alternate;return e===bt||t!==null&&t===bt}function c7(e,t){vu=g0=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function u7(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gw(e,n)}}var y0={readContext:xr,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},_O={readContext:xr,useCallback:function(e,t){return oi().memoizedState=[e,t===void 0?null:t],e},useContext:xr,useEffect:H5,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oh(4194308,4,n7.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oh(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oh(4,2,e,t)},useMemo:function(e,t){var n=oi();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=oi();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=EO.bind(null,bt,e),[r.memoizedState,e]},useRef:function(e){var t=oi();return e={current:e},t.memoizedState=e},useState:V5,useDebugValue:g2,useDeferredValue:function(e){return oi().memoizedState=e},useTransition:function(){var e=V5(!1),t=e[0];return e=CO.bind(null,e[1]),oi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=bt,i=oi();if(pt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=t(),Xt===null)throw Error(te(349));sa&30||KE(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,H5(QE.bind(null,r,o,e),[e]),r.flags|=2048,ed(9,ZE.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=oi(),t=Xt.identifierPrefix;if(pt){var n=Pi,r=$i;n=(r&~(1<<32-Fr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xu++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xO++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},TO={readContext:xr,useCallback:i7,useContext:xr,useEffect:m2,useImperativeHandle:r7,useInsertionEffect:e7,useLayoutEffect:t7,useMemo:o7,useReducer:$m,useRef:JE,useState:function(){return $m(Ju)},useDebugValue:g2,useDeferredValue:function(e){var t=Cr();return s7(t,Ut.memoizedState,e)},useTransition:function(){var e=$m(Ju)[0],t=Cr().memoizedState;return[e,t]},useMutableSource:qE,useSyncExternalStore:GE,useId:a7,unstable_isNewReconciler:!1},$O={readContext:xr,useCallback:i7,useContext:xr,useEffect:m2,useImperativeHandle:r7,useInsertionEffect:e7,useLayoutEffect:t7,useMemo:o7,useReducer:Pm,useRef:JE,useState:function(){return Pm(Ju)},useDebugValue:g2,useDeferredValue:function(e){var t=Cr();return Ut===null?t.memoizedState=e:s7(t,Ut.memoizedState,e)},useTransition:function(){var e=Pm(Ju)[0],t=Cr().memoizedState;return[e,t]},useMutableSource:qE,useSyncExternalStore:GE,useId:a7,unstable_isNewReconciler:!1};function Ol(e,t){try{var n="",r=t;do n+=tD(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Am(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ky(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var PO=typeof WeakMap=="function"?WeakMap:Map;function d7(e,t,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){w0||(w0=!0,zy=r),ky(e,t)},n}function f7(e,t,n){n=Di(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ky(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ky(e,t),typeof r!="function"&&(Mo===null?Mo=new Set([this]):Mo.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function q5(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new PO;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zO.bind(null,e,t,n),t.then(e,e))}function G5(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function K5(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Di(-1,1),t.tag=2,Io(n,t,1))),n.lanes|=1),e)}var AO=Qi.ReactCurrentOwner,Rn=!1;function xn(e,t,n,r){t.child=e===null?VE(t,null,n,r):Al(t,e.child,n,r)}function Z5(e,t,n,r,i){n=n.render;var o=t.ref;return bl(t,i),r=h2(e,t,n,r,o,i),n=p2(),e!==null&&!Rn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ui(e,t,i)):(pt&&n&&t2(t),t.flags|=1,xn(e,t,r,i),t.child)}function Q5(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!S2(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,h7(e,t,o,r,i)):(e=Ih(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qu,n(s,r)&&e.ref===t.ref)return Ui(e,t,i)}return t.flags|=1,e=jo(o,r),e.ref=t.ref,e.return=t,t.child=e}function h7(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qu(o,r)&&e.ref===t.ref)if(Rn=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Rn=!0);else return t.lanes=e.lanes,Ui(e,t,i)}return Ry(e,t,n,r,i)}function p7(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ll,qn),qn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,at(ll,qn),qn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,at(ll,qn),qn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,at(ll,qn),qn|=r;return xn(e,t,i,n),t.child}function m7(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ry(e,t,n,r,i){var o=jn(n)?ia:vn.current;return o=$l(t,o),bl(t,i),n=h2(e,t,n,r,o,i),r=p2(),e!==null&&!Rn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ui(e,t,i)):(pt&&r&&t2(t),t.flags|=1,xn(e,t,n,i),t.child)}function Y5(e,t,n,r,i){if(jn(n)){var o=!0;c0(t)}else o=!1;if(bl(t,i),t.stateNode===null)kh(e,t),zE(t,n,r),Oy(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=xr(c):(c=jn(n)?ia:vn.current,c=$l(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&z5(t,s,r,c),go=!1;var f=t.memoizedState;s.state=f,p0(t,r,s,i),l=t.memoizedState,a!==r||f!==l||Ln.current||go?(typeof u=="function"&&(Dy(t,n,u,r),l=t.memoizedState),(a=go||U5(t,n,a,r,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,BE(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Nr(t.type,a),s.props=c,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=xr(l):(l=jn(n)?ia:vn.current,l=$l(t,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&z5(t,s,r,l),go=!1,f=t.memoizedState,s.state=f,p0(t,r,s,i);var p=t.memoizedState;a!==d||f!==p||Ln.current||go?(typeof h=="function"&&(Dy(t,n,h,r),p=t.memoizedState),(c=go||U5(t,n,c,r,f,p,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ny(e,t,n,r,o,i)}function Ny(e,t,n,r,i,o){m7(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&M5(t,n,!1),Ui(e,t,o);r=t.stateNode,AO.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Al(t,e.child,null,o),t.child=Al(t,null,a,o)):xn(e,t,a,o),t.memoizedState=r.state,i&&M5(t,n,!0),t.child}function g7(e){var t=e.stateNode;t.pendingContext?I5(e,t.pendingContext,t.pendingContext!==t.context):t.context&&I5(e,t.context,!1),c2(e,t.containerInfo)}function X5(e,t,n,r,i){return Pl(),r2(i),t.flags|=256,xn(e,t,n,r),t.child}var Iy={dehydrated:null,treeContext:null,retryLane:0};function My(e){return{baseLanes:e,cachePool:null,transitions:null}}function y7(e,t,n){var r=t.pendingProps,i=yt.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),at(yt,i&1),e===null)return Py(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=jp(s,r,0,null),e=Ks(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=My(n),t.memoizedState=Iy,e):y2(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return DO(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=jo(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=jo(a,o):(o=Ks(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?My(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Iy,r}return o=e.child,e=o.sibling,r=jo(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function y2(e,t){return t=jp({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gf(e,t,n,r){return r!==null&&r2(r),Al(t,e.child,null,n),e=y2(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function DO(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Am(Error(te(422))),Gf(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jp({mode:"visible",children:r.children},i,0,null),o=Ks(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Al(t,e.child,null,s),t.child.memoizedState=My(s),t.memoizedState=Iy,o);if(!(t.mode&1))return Gf(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(te(419)),r=Am(o,r,void 0),Gf(e,t,s,r)}if(a=(s&e.childLanes)!==0,Rn||a){if(r=Xt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bi(e,i),Br(r,e,i,-1))}return E2(),r=Am(Error(te(421))),Gf(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=WO.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Kn=No(i.nextSibling),Qn=t,pt=!0,Lr=null,e!==null&&(hr[pr++]=$i,hr[pr++]=Pi,hr[pr++]=oa,$i=e.id,Pi=e.overflow,oa=t),t=y2(t,r.children),t.flags|=4096,t)}function J5(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ay(e.return,t,n)}function Dm(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function v7(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xn(e,t,r.children,n),r=yt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&J5(e,n,t);else if(e.tag===19)J5(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(at(yt,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&m0(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dm(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&m0(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dm(t,!0,n,null,o);break;case"together":Dm(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function kh(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ui(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(te(153));if(t.child!==null){for(e=t.child,n=jo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function OO(e,t,n){switch(t.tag){case 3:g7(t),Pl();break;case 5:HE(t);break;case 1:jn(t.type)&&c0(t);break;case 4:c2(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;at(f0,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(at(yt,yt.current&1),t.flags|=128,null):n&t.child.childLanes?y7(e,t,n):(at(yt,yt.current&1),e=Ui(e,t,n),e!==null?e.sibling:null);at(yt,yt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return v7(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),at(yt,yt.current),r)break;return null;case 22:case 23:return t.lanes=0,p7(e,t,n)}return Ui(e,t,n)}var w7,Ly,b7,x7;w7=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ly=function(){};b7=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,js(ci.current);var o=null;switch(n){case"input":i=oy(e,i),r=oy(e,r),o=[];break;case"select":i=xt({},i,{value:void 0}),r=xt({},r,{value:void 0}),o=[];break;case"textarea":i=ly(e,i),r=ly(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=a0)}uy(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fu.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fu.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};x7=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nc(e,t){if(!pt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function un(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kO(e,t,n){var r=t.pendingProps;switch(n2(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(t),null;case 1:return jn(t.type)&&l0(),un(t),null;case 3:return r=t.stateNode,Dl(),ft(Ln),ft(vn),d2(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hf(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lr!==null&&(Hy(Lr),Lr=null))),Ly(e,t),un(t),null;case 5:u2(t);var i=js(Yu.current);if(n=t.type,e!==null&&t.stateNode!=null)b7(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(te(166));return un(t),null}if(e=js(ci.current),Hf(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[si]=t,r[Zu]=o,e=(t.mode&1)!==0,n){case"dialog":dt("cancel",r),dt("close",r);break;case"iframe":case"object":case"embed":dt("load",r);break;case"video":case"audio":for(i=0;i<iu.length;i++)dt(iu[i],r);break;case"source":dt("error",r);break;case"img":case"image":case"link":dt("error",r),dt("load",r);break;case"details":dt("toggle",r);break;case"input":l5(r,o),dt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},dt("invalid",r);break;case"textarea":u5(r,o),dt("invalid",r)}uy(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Vf(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Vf(r.textContent,a,e),i=["children",""+a]):Fu.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&dt("scroll",r)}switch(n){case"input":Mf(r),c5(r,o,!0);break;case"textarea":Mf(r),d5(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=a0)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=KC(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[si]=t,e[Zu]=r,w7(e,t,!1,!1),t.stateNode=e;e:{switch(s=dy(n,r),n){case"dialog":dt("cancel",e),dt("close",e),i=r;break;case"iframe":case"object":case"embed":dt("load",e),i=r;break;case"video":case"audio":for(i=0;i<iu.length;i++)dt(iu[i],e);i=r;break;case"source":dt("error",e),i=r;break;case"img":case"image":case"link":dt("error",e),dt("load",e),i=r;break;case"details":dt("toggle",e),i=r;break;case"input":l5(e,r),i=oy(e,r),dt("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xt({},r,{value:void 0}),dt("invalid",e);break;case"textarea":u5(e,r),i=ly(e,r),dt("invalid",e);break;default:i=r}uy(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?YC(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ZC(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bu(e,l):typeof l=="number"&&Bu(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fu.hasOwnProperty(o)?l!=null&&o==="onScroll"&&dt("scroll",e):l!=null&&Uw(e,o,l,s))}switch(n){case"input":Mf(e),c5(e,r,!1);break;case"textarea":Mf(e),d5(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ko(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gl(e,!!r.multiple,o,!1):r.defaultValue!=null&&gl(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=a0)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return un(t),null;case 6:if(e&&t.stateNode!=null)x7(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(te(166));if(n=js(Yu.current),js(ci.current),Hf(t)){if(r=t.stateNode,n=t.memoizedProps,r[si]=t,(o=r.nodeValue!==n)&&(e=Qn,e!==null))switch(e.tag){case 3:Vf(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vf(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[si]=t,t.stateNode=r}return un(t),null;case 13:if(ft(yt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pt&&Kn!==null&&t.mode&1&&!(t.flags&128))jE(),Pl(),t.flags|=98560,o=!1;else if(o=Hf(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(te(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[si]=t}else Pl(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;un(t),o=!1}else Lr!==null&&(Hy(Lr),Lr=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||yt.current&1?Wt===0&&(Wt=3):E2())),t.updateQueue!==null&&(t.flags|=4),un(t),null);case 4:return Dl(),Ly(e,t),e===null&&Gu(t.stateNode.containerInfo),un(t),null;case 10:return s2(t.type._context),un(t),null;case 17:return jn(t.type)&&l0(),un(t),null;case 19:if(ft(yt),o=t.memoizedState,o===null)return un(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Nc(o,!1);else{if(Wt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=m0(e),s!==null){for(t.flags|=128,Nc(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return at(yt,yt.current&1|2),t.child}e=e.sibling}o.tail!==null&&Dt()>kl&&(t.flags|=128,r=!0,Nc(o,!1),t.lanes=4194304)}else{if(!r)if(e=m0(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nc(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!pt)return un(t),null}else 2*Dt()-o.renderingStartTime>kl&&n!==1073741824&&(t.flags|=128,r=!0,Nc(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Dt(),t.sibling=null,n=yt.current,at(yt,r?n&1|2:n&1),t):(un(t),null);case 22:case 23:return C2(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qn&1073741824&&(un(t),t.subtreeFlags&6&&(t.flags|=8192)):un(t),null;case 24:return null;case 25:return null}throw Error(te(156,t.tag))}function RO(e,t){switch(n2(t),t.tag){case 1:return jn(t.type)&&l0(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dl(),ft(Ln),ft(vn),d2(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return u2(t),null;case 13:if(ft(yt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(te(340));Pl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ft(yt),null;case 4:return Dl(),null;case 10:return s2(t.type._context),null;case 22:case 23:return C2(),null;case 24:return null;default:return null}}var Kf=!1,pn=!1,NO=typeof WeakSet=="function"?WeakSet:Set,ae=null;function al(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Et(e,t,r)}else n.current=null}function jy(e,t,n){try{n()}catch(r){Et(e,t,r)}}var e6=!1;function IO(e,t){if(xy=i0,e=_E(),e2(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break t;if(f===n&&++c===i&&(a=s),f===o&&++u===r&&(l=s),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cy={focusedElem:e,selectionRange:n},i0=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var m=p.memoizedProps,v=p.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:Nr(t.type,m),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(w){Et(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return p=e6,e6=!1,p}function wu(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&jy(t,n,o)}i=i.next}while(i!==r)}}function Mp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fy(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function C7(e){var t=e.alternate;t!==null&&(e.alternate=null,C7(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[si],delete t[Zu],delete t[_y],delete t[yO],delete t[vO])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function E7(e){return e.tag===5||e.tag===3||e.tag===4}function t6(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E7(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function By(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=a0));else if(r!==4&&(e=e.child,e!==null))for(By(e,t,n),e=e.sibling;e!==null;)By(e,t,n),e=e.sibling}function Uy(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uy(e,t,n),e=e.sibling;e!==null;)Uy(e,t,n),e=e.sibling}var tn=null,Ir=!1;function no(e,t,n){for(n=n.child;n!==null;)S7(e,t,n),n=n.sibling}function S7(e,t,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Pp,n)}catch{}switch(n.tag){case 5:pn||al(n,t);case 6:var r=tn,i=Ir;tn=null,no(e,t,n),tn=r,Ir=i,tn!==null&&(Ir?(e=tn,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(Ir?(e=tn,n=n.stateNode,e.nodeType===8?Em(e.parentNode,n):e.nodeType===1&&Em(e,n),Vu(e)):Em(tn,n.stateNode));break;case 4:r=tn,i=Ir,tn=n.stateNode.containerInfo,Ir=!0,no(e,t,n),tn=r,Ir=i;break;case 0:case 11:case 14:case 15:if(!pn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jy(n,t,s),i=i.next}while(i!==r)}no(e,t,n);break;case 1:if(!pn&&(al(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Et(n,t,a)}no(e,t,n);break;case 21:no(e,t,n);break;case 22:n.mode&1?(pn=(r=pn)||n.memoizedState!==null,no(e,t,n),pn=r):no(e,t,n);break;default:no(e,t,n)}}function n6(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new NO),t.forEach(function(r){var i=VO.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Or(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,Ir=!1;break e;case 3:tn=a.stateNode.containerInfo,Ir=!0;break e;case 4:tn=a.stateNode.containerInfo,Ir=!0;break e}a=a.return}if(tn===null)throw Error(te(160));S7(o,s,i),tn=null,Ir=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Et(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_7(t,e),t=t.sibling}function _7(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Or(t,e),ei(e),r&4){try{wu(3,e,e.return),Mp(3,e)}catch(m){Et(e,e.return,m)}try{wu(5,e,e.return)}catch(m){Et(e,e.return,m)}}break;case 1:Or(t,e),ei(e),r&512&&n!==null&&al(n,n.return);break;case 5:if(Or(t,e),ei(e),r&512&&n!==null&&al(n,n.return),e.flags&32){var i=e.stateNode;try{Bu(i,"")}catch(m){Et(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&qC(i,o),dy(a,s);var c=dy(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?YC(i,d):u==="dangerouslySetInnerHTML"?ZC(i,d):u==="children"?Bu(i,d):Uw(i,u,d,c)}switch(a){case"input":sy(i,o);break;case"textarea":GC(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?gl(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?gl(i,!!o.multiple,o.defaultValue,!0):gl(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zu]=o}catch(m){Et(e,e.return,m)}}break;case 6:if(Or(t,e),ei(e),r&4){if(e.stateNode===null)throw Error(te(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Et(e,e.return,m)}}break;case 3:if(Or(t,e),ei(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vu(t.containerInfo)}catch(m){Et(e,e.return,m)}break;case 4:Or(t,e),ei(e);break;case 13:Or(t,e),ei(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(b2=Dt())),r&4&&n6(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(pn=(c=pn)||u,Or(t,e),pn=c):Or(t,e),ei(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(ae=e,u=e.child;u!==null;){for(d=ae=u;ae!==null;){switch(f=ae,h=f.child,f.tag){case 0:case 11:case 14:case 15:wu(4,f,f.return);break;case 1:al(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){Et(r,n,m)}}break;case 5:al(f,f.return);break;case 22:if(f.memoizedState!==null){i6(d);continue}}h!==null?(h.return=f,ae=h):i6(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=QC("display",s))}catch(m){Et(e,e.return,m)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(m){Et(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Or(t,e),ei(e),r&4&&n6(e);break;case 21:break;default:Or(t,e),ei(e)}}function ei(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(E7(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bu(i,""),r.flags&=-33);var o=t6(e);Uy(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=t6(e);By(e,a,s);break;default:throw Error(te(161))}}catch(l){Et(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function MO(e,t,n){ae=e,T7(e)}function T7(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Kf;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pn;a=Kf;var c=pn;if(Kf=s,(pn=l)&&!c)for(ae=i;ae!==null;)s=ae,l=s.child,s.tag===22&&s.memoizedState!==null?o6(i):l!==null?(l.return=s,ae=l):o6(i);for(;o!==null;)ae=o,T7(o),o=o.sibling;ae=i,Kf=a,pn=c}r6(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ae=o):r6(e)}}function r6(e){for(;ae!==null;){var t=ae;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pn||Mp(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pn)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nr(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&B5(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}B5(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Vu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}pn||t.flags&512&&Fy(t)}catch(f){Et(t,t.return,f)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function i6(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function o6(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mp(4,t)}catch(l){Et(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Et(t,i,l)}}var o=t.return;try{Fy(t)}catch(l){Et(t,o,l)}break;case 5:var s=t.return;try{Fy(t)}catch(l){Et(t,s,l)}}}catch(l){Et(t,t.return,l)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var LO=Math.ceil,v0=Qi.ReactCurrentDispatcher,v2=Qi.ReactCurrentOwner,br=Qi.ReactCurrentBatchConfig,We=0,Xt=null,jt=null,rn=0,qn=0,ll=as(0),Wt=0,td=null,aa=0,Lp=0,w2=0,bu=null,kn=null,b2=0,kl=1/0,Si=null,w0=!1,zy=null,Mo=null,Zf=!1,$o=null,b0=0,xu=0,Wy=null,Rh=-1,Nh=0;function En(){return We&6?Dt():Rh!==-1?Rh:Rh=Dt()}function Lo(e){return e.mode&1?We&2&&rn!==0?rn&-rn:bO.transition!==null?(Nh===0&&(Nh=cE()),Nh):(e=Ye,e!==0||(e=window.event,e=e===void 0?16:gE(e.type)),e):1}function Br(e,t,n,r){if(50<xu)throw xu=0,Wy=null,Error(te(185));Yd(e,n,r),(!(We&2)||e!==Xt)&&(e===Xt&&(!(We&2)&&(Lp|=n),Wt===4&&xo(e,rn)),Fn(e,r),n===1&&We===0&&!(t.mode&1)&&(kl=Dt()+500,Rp&&ls()))}function Fn(e,t){var n=e.callbackNode;bD(e,t);var r=r0(e,e===Xt?rn:0);if(r===0)n!==null&&p5(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&p5(n),t===1)e.tag===0?wO(s6.bind(null,e)):IE(s6.bind(null,e)),mO(function(){!(We&6)&&ls()}),n=null;else{switch(uE(r)){case 1:n=qw;break;case 4:n=aE;break;case 16:n=n0;break;case 536870912:n=lE;break;default:n=n0}n=N7(n,$7.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $7(e,t){if(Rh=-1,Nh=0,We&6)throw Error(te(327));var n=e.callbackNode;if(xl()&&e.callbackNode!==n)return null;var r=r0(e,e===Xt?rn:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=x0(e,r);else{t=r;var i=We;We|=2;var o=A7();(Xt!==e||rn!==t)&&(Si=null,kl=Dt()+500,Gs(e,t));do try{BO();break}catch(a){P7(e,a)}while(!0);o2(),v0.current=o,We=i,jt!==null?t=0:(Xt=null,rn=0,t=Wt)}if(t!==0){if(t===2&&(i=gy(e),i!==0&&(r=i,t=Vy(e,i))),t===1)throw n=td,Gs(e,0),xo(e,r),Fn(e,Dt()),n;if(t===6)xo(e,r);else{if(i=e.current.alternate,!(r&30)&&!jO(i)&&(t=x0(e,r),t===2&&(o=gy(e),o!==0&&(r=o,t=Vy(e,o))),t===1))throw n=td,Gs(e,0),xo(e,r),Fn(e,Dt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(te(345));case 2:Ps(e,kn,Si);break;case 3:if(xo(e,r),(r&130023424)===r&&(t=b2+500-Dt(),10<t)){if(r0(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){En(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sy(Ps.bind(null,e,kn,Si),t);break}Ps(e,kn,Si);break;case 4:if(xo(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Fr(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LO(r/1960))-r,10<r){e.timeoutHandle=Sy(Ps.bind(null,e,kn,Si),r);break}Ps(e,kn,Si);break;case 5:Ps(e,kn,Si);break;default:throw Error(te(329))}}}return Fn(e,Dt()),e.callbackNode===n?$7.bind(null,e):null}function Vy(e,t){var n=bu;return e.current.memoizedState.isDehydrated&&(Gs(e,t).flags|=256),e=x0(e,t),e!==2&&(t=kn,kn=n,t!==null&&Hy(t)),e}function Hy(e){kn===null?kn=e:kn.push.apply(kn,e)}function jO(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!zr(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xo(e,t){for(t&=~w2,t&=~Lp,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fr(t),r=1<<n;e[n]=-1,t&=~r}}function s6(e){if(We&6)throw Error(te(327));xl();var t=r0(e,0);if(!(t&1))return Fn(e,Dt()),null;var n=x0(e,t);if(e.tag!==0&&n===2){var r=gy(e);r!==0&&(t=r,n=Vy(e,r))}if(n===1)throw n=td,Gs(e,0),xo(e,t),Fn(e,Dt()),n;if(n===6)throw Error(te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ps(e,kn,Si),Fn(e,Dt()),null}function x2(e,t){var n=We;We|=1;try{return e(t)}finally{We=n,We===0&&(kl=Dt()+500,Rp&&ls())}}function la(e){$o!==null&&$o.tag===0&&!(We&6)&&xl();var t=We;We|=1;var n=br.transition,r=Ye;try{if(br.transition=null,Ye=1,e)return e()}finally{Ye=r,br.transition=n,We=t,!(We&6)&&ls()}}function C2(){qn=ll.current,ft(ll)}function Gs(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pO(n)),jt!==null)for(n=jt.return;n!==null;){var r=n;switch(n2(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&l0();break;case 3:Dl(),ft(Ln),ft(vn),d2();break;case 5:u2(r);break;case 4:Dl();break;case 13:ft(yt);break;case 19:ft(yt);break;case 10:s2(r.type._context);break;case 22:case 23:C2()}n=n.return}if(Xt=e,jt=e=jo(e.current,null),rn=qn=t,Wt=0,td=null,w2=Lp=aa=0,kn=bu=null,Ls!==null){for(t=0;t<Ls.length;t++)if(n=Ls[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ls=null}return e}function P7(e,t){do{var n=jt;try{if(o2(),Dh.current=y0,g0){for(var r=bt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}g0=!1}if(sa=0,Qt=Ut=bt=null,vu=!1,Xu=0,v2.current=null,n===null||n.return===null){Wt=1,td=t,jt=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=rn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=G5(s);if(h!==null){h.flags&=-257,K5(h,s,a,o,t),h.mode&1&&q5(o,c,t),t=h,l=c;var p=t.updateQueue;if(p===null){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}else{if(!(t&1)){q5(o,c,t),E2();break e}l=Error(te(426))}}else if(pt&&a.mode&1){var v=G5(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),K5(v,s,a,o,t),r2(Ol(l,a));break e}}o=l=Ol(l,a),Wt!==4&&(Wt=2),bu===null?bu=[o]:bu.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=d7(o,l,t);F5(o,b);break e;case 1:a=l;var y=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Mo===null||!Mo.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=f7(o,a,t);F5(o,w);break e}}o=o.return}while(o!==null)}O7(n)}catch(_){t=_,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function A7(){var e=v0.current;return v0.current=y0,e===null?y0:e}function E2(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Xt===null||!(aa&268435455)&&!(Lp&268435455)||xo(Xt,rn)}function x0(e,t){var n=We;We|=2;var r=A7();(Xt!==e||rn!==t)&&(Si=null,Gs(e,t));do try{FO();break}catch(i){P7(e,i)}while(!0);if(o2(),We=n,v0.current=r,jt!==null)throw Error(te(261));return Xt=null,rn=0,Wt}function FO(){for(;jt!==null;)D7(jt)}function BO(){for(;jt!==null&&!dD();)D7(jt)}function D7(e){var t=R7(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?O7(e):jt=t,v2.current=null}function O7(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=RO(n,t),n!==null){n.flags&=32767,jt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Wt=6,jt=null;return}}else if(n=kO(n,t,qn),n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);Wt===0&&(Wt=5)}function Ps(e,t,n){var r=Ye,i=br.transition;try{br.transition=null,Ye=1,UO(e,t,n,r)}finally{br.transition=i,Ye=r}return null}function UO(e,t,n,r){do xl();while($o!==null);if(We&6)throw Error(te(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(te(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xD(e,o),e===Xt&&(jt=Xt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zf||(Zf=!0,N7(n0,function(){return xl(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=br.transition,br.transition=null;var s=Ye;Ye=1;var a=We;We|=4,v2.current=null,IO(e,n),_7(n,e),aO(Cy),i0=!!xy,Cy=xy=null,e.current=n,MO(n),fD(),We=a,Ye=s,br.transition=o}else e.current=n;if(Zf&&(Zf=!1,$o=e,b0=i),o=e.pendingLanes,o===0&&(Mo=null),mD(n.stateNode),Fn(e,Dt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(w0)throw w0=!1,e=zy,zy=null,e;return b0&1&&e.tag!==0&&xl(),o=e.pendingLanes,o&1?e===Wy?xu++:(xu=0,Wy=e):xu=0,ls(),null}function xl(){if($o!==null){var e=uE(b0),t=br.transition,n=Ye;try{if(br.transition=null,Ye=16>e?16:e,$o===null)var r=!1;else{if(e=$o,$o=null,b0=0,We&6)throw Error(te(331));var i=We;for(We|=4,ae=e.current;ae!==null;){var o=ae,s=o.child;if(ae.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ae=c;ae!==null;){var u=ae;switch(u.tag){case 0:case 11:case 15:wu(8,u,o)}var d=u.child;if(d!==null)d.return=u,ae=d;else for(;ae!==null;){u=ae;var f=u.sibling,h=u.return;if(C7(u),u===c){ae=null;break}if(f!==null){f.return=h,ae=f;break}ae=h}}}var p=o.alternate;if(p!==null){var m=p.child;if(m!==null){p.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(m!==null)}}ae=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ae=s;else e:for(;ae!==null;){if(o=ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wu(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,ae=b;break e}ae=o.return}}var y=e.current;for(ae=y;ae!==null;){s=ae;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,ae=x;else e:for(s=y;ae!==null;){if(a=ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mp(9,a)}}catch(_){Et(a,a.return,_)}if(a===s){ae=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,ae=w;break e}ae=a.return}}if(We=i,ls(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Pp,e)}catch{}r=!0}return r}finally{Ye=n,br.transition=t}}return!1}function a6(e,t,n){t=Ol(n,t),t=d7(e,t,1),e=Io(e,t,1),t=En(),e!==null&&(Yd(e,1,t),Fn(e,t))}function Et(e,t,n){if(e.tag===3)a6(e,e,n);else for(;t!==null;){if(t.tag===3){a6(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mo===null||!Mo.has(r))){e=Ol(n,e),e=f7(t,e,1),t=Io(t,e,1),e=En(),t!==null&&(Yd(t,1,e),Fn(t,e));break}}t=t.return}}function zO(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=En(),e.pingedLanes|=e.suspendedLanes&n,Xt===e&&(rn&n)===n&&(Wt===4||Wt===3&&(rn&130023424)===rn&&500>Dt()-b2?Gs(e,0):w2|=n),Fn(e,t)}function k7(e,t){t===0&&(e.mode&1?(t=Ff,Ff<<=1,!(Ff&130023424)&&(Ff=4194304)):t=1);var n=En();e=Bi(e,t),e!==null&&(Yd(e,t,n),Fn(e,n))}function WO(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),k7(e,n)}function VO(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(t),k7(e,n)}var R7;R7=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ln.current)Rn=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Rn=!1,OO(e,t,n);Rn=!!(e.flags&131072)}else Rn=!1,pt&&t.flags&1048576&&ME(t,d0,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;kh(e,t),e=t.pendingProps;var i=$l(t,vn.current);bl(t,n),i=h2(null,t,r,e,i,n);var o=p2();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jn(r)?(o=!0,c0(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,l2(t),i.updater=Np,t.stateNode=i,i._reactInternals=t,Oy(t,r,e,n),t=Ny(null,t,r,!0,o,n)):(t.tag=0,pt&&o&&t2(t),xn(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(kh(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=qO(r),e=Nr(r,e),i){case 0:t=Ry(null,t,r,e,n);break e;case 1:t=Y5(null,t,r,e,n);break e;case 11:t=Z5(null,t,r,e,n);break e;case 14:t=Q5(null,t,r,Nr(r.type,e),n);break e}throw Error(te(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),Ry(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),Y5(e,t,r,i,n);case 3:e:{if(g7(t),e===null)throw Error(te(387));r=t.pendingProps,o=t.memoizedState,i=o.element,BE(e,t),p0(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ol(Error(te(423)),t),t=X5(e,t,r,n,i);break e}else if(r!==i){i=Ol(Error(te(424)),t),t=X5(e,t,r,n,i);break e}else for(Kn=No(t.stateNode.containerInfo.firstChild),Qn=t,pt=!0,Lr=null,n=VE(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pl(),r===i){t=Ui(e,t,n);break e}xn(e,t,r,n)}t=t.child}return t;case 5:return HE(t),e===null&&Py(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Ey(r,i)?s=null:o!==null&&Ey(r,o)&&(t.flags|=32),m7(e,t),xn(e,t,s,n),t.child;case 6:return e===null&&Py(t),null;case 13:return y7(e,t,n);case 4:return c2(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Al(t,null,r,n):xn(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),Z5(e,t,r,i,n);case 7:return xn(e,t,t.pendingProps,n),t.child;case 8:return xn(e,t,t.pendingProps.children,n),t.child;case 12:return xn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,at(f0,r._currentValue),r._currentValue=s,o!==null)if(zr(o.value,s)){if(o.children===i.children&&!Ln.current){t=Ui(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Di(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ay(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(te(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ay(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xn(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,bl(t,n),i=xr(i),r=r(i),t.flags|=1,xn(e,t,r,n),t.child;case 14:return r=t.type,i=Nr(r,t.pendingProps),i=Nr(r.type,i),Q5(e,t,r,i,n);case 15:return h7(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nr(r,i),kh(e,t),t.tag=1,jn(r)?(e=!0,c0(t)):e=!1,bl(t,n),zE(t,r,i),Oy(t,r,i,n),Ny(null,t,r,!0,e,n);case 19:return v7(e,t,n);case 22:return p7(e,t,n)}throw Error(te(156,t.tag))};function N7(e,t){return sE(e,t)}function HO(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gr(e,t,n,r){return new HO(e,t,n,r)}function S2(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qO(e){if(typeof e=="function")return S2(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ww)return 11;if(e===Vw)return 14}return 2}function jo(e,t){var n=e.alternate;return n===null?(n=gr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ih(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")S2(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Xa:return Ks(n.children,i,o,t);case zw:s=8,i|=8;break;case ty:return e=gr(12,n,t,i|2),e.elementType=ty,e.lanes=o,e;case ny:return e=gr(13,n,t,i),e.elementType=ny,e.lanes=o,e;case ry:return e=gr(19,n,t,i),e.elementType=ry,e.lanes=o,e;case WC:return jp(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case UC:s=10;break e;case zC:s=9;break e;case Ww:s=11;break e;case Vw:s=14;break e;case mo:s=16,r=null;break e}throw Error(te(130,e==null?e:typeof e,""))}return t=gr(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ks(e,t,n,r){return e=gr(7,e,r,t),e.lanes=n,e}function jp(e,t,n,r){return e=gr(22,e,r,t),e.elementType=WC,e.lanes=n,e.stateNode={isHidden:!1},e}function Om(e,t,n){return e=gr(6,e,null,t),e.lanes=n,e}function km(e,t,n){return t=gr(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function GO(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fm(0),this.expirationTimes=fm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _2(e,t,n,r,i,o,s,a,l){return e=new GO(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gr(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},l2(o),e}function KO(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ya,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function I7(e){if(!e)return Zo;e=e._reactInternals;e:{if(Sa(e)!==e||e.tag!==1)throw Error(te(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(te(171))}if(e.tag===1){var n=e.type;if(jn(n))return NE(e,n,t)}return t}function M7(e,t,n,r,i,o,s,a,l){return e=_2(n,r,!0,e,i,o,s,a,l),e.context=I7(null),n=e.current,r=En(),i=Lo(n),o=Di(r,i),o.callback=t??null,Io(n,o,i),e.current.lanes=i,Yd(e,i,r),Fn(e,r),e}function Fp(e,t,n,r){var i=t.current,o=En(),s=Lo(i);return n=I7(n),t.context===null?t.context=n:t.pendingContext=n,t=Di(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Io(i,t,s),e!==null&&(Br(e,i,s,o),Ah(e,i,s)),s}function C0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function l6(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function T2(e,t){l6(e,t),(e=e.alternate)&&l6(e,t)}function ZO(){return null}var L7=typeof reportError=="function"?reportError:function(e){console.error(e)};function $2(e){this._internalRoot=e}Bp.prototype.render=$2.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(te(409));Fp(e,t,null,null)};Bp.prototype.unmount=$2.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;la(function(){Fp(null,e,null,null)}),t[Fi]=null}};function Bp(e){this._internalRoot=e}Bp.prototype.unstable_scheduleHydration=function(e){if(e){var t=hE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bo.length&&t!==0&&t<bo[n].priority;n++);bo.splice(n,0,e),n===0&&mE(e)}};function P2(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Up(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function c6(){}function QO(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=C0(s);o.call(c)}}var s=M7(t,r,e,0,null,!1,!1,"",c6);return e._reactRootContainer=s,e[Fi]=s.current,Gu(e.nodeType===8?e.parentNode:e),la(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=C0(l);a.call(c)}}var l=_2(e,0,!1,null,null,!1,!1,"",c6);return e._reactRootContainer=l,e[Fi]=l.current,Gu(e.nodeType===8?e.parentNode:e),la(function(){Fp(t,l,n,r)}),l}function zp(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=C0(s);a.call(l)}}Fp(t,s,e,i)}else s=QO(n,t,e,i,r);return C0(s)}dE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ru(t.pendingLanes);n!==0&&(Gw(t,n|1),Fn(t,Dt()),!(We&6)&&(kl=Dt()+500,ls()))}break;case 13:la(function(){var r=Bi(e,1);if(r!==null){var i=En();Br(r,e,1,i)}}),T2(e,1)}};Kw=function(e){if(e.tag===13){var t=Bi(e,134217728);if(t!==null){var n=En();Br(t,e,134217728,n)}T2(e,134217728)}};fE=function(e){if(e.tag===13){var t=Lo(e),n=Bi(e,t);if(n!==null){var r=En();Br(n,e,t,r)}T2(e,t)}};hE=function(){return Ye};pE=function(e,t){var n=Ye;try{return Ye=e,t()}finally{Ye=n}};hy=function(e,t,n){switch(t){case"input":if(sy(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=kp(r);if(!i)throw Error(te(90));HC(r),sy(r,i)}}}break;case"textarea":GC(e,n);break;case"select":t=n.value,t!=null&&gl(e,!!n.multiple,t,!1)}};eE=x2;tE=la;var YO={usingClientEntryPoint:!1,Events:[Jd,nl,kp,XC,JC,x2]},Ic={findFiberByHostInstance:Ms,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XO={bundleType:Ic.bundleType,version:Ic.version,rendererPackageName:Ic.rendererPackageName,rendererConfig:Ic.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iE(e),e===null?null:e.stateNode},findFiberByHostInstance:Ic.findFiberByHostInstance||ZO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qf.isDisabled&&Qf.supportsFiber)try{Pp=Qf.inject(XO),li=Qf}catch{}}Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YO;Jn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!P2(t))throw Error(te(200));return KO(e,t,null,n)};Jn.createRoot=function(e,t){if(!P2(e))throw Error(te(299));var n=!1,r="",i=L7;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_2(e,1,!1,null,null,n,!1,r,i),e[Fi]=t.current,Gu(e.nodeType===8?e.parentNode:e),new $2(t)};Jn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(te(188)):(e=Object.keys(e).join(","),Error(te(268,e)));return e=iE(t),e=e===null?null:e.stateNode,e};Jn.flushSync=function(e){return la(e)};Jn.hydrate=function(e,t,n){if(!Up(t))throw Error(te(200));return zp(null,e,t,!0,n)};Jn.hydrateRoot=function(e,t,n){if(!P2(e))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=L7;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=M7(t,null,e,1,n??null,i,!1,o,s),e[Fi]=t.current,Gu(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bp(t)};Jn.render=function(e,t,n){if(!Up(t))throw Error(te(200));return zp(null,e,t,!1,n)};Jn.unmountComponentAtNode=function(e){if(!Up(e))throw Error(te(40));return e._reactRootContainer?(la(function(){zp(null,null,e,!1,function(){e._reactRootContainer=null,e[Fi]=null})}),!0):!1};Jn.unstable_batchedUpdates=x2;Jn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Up(n))throw Error(te(200));if(e==null||e._reactInternals===void 0)throw Error(te(38));return zp(e,t,n,!1,r)};Jn.version="18.2.0-next-9e3b772b8-20220608";function j7(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j7)}catch(e){console.error(e)}}j7(),MC.exports=Jn;var ac=MC.exports;const F7=Ca(ac),JO=SC({__proto__:null,default:F7},[ac]);var u6=ac;Jg.createRoot=u6.createRoot,Jg.hydrateRoot=u6.hydrateRoot;/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function St(){return St=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},St.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const d6="popstate";function ek(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return nd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tf(i)}return nk(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tk(){return Math.random().toString(36).substr(2,8)}function f6(e,t){return{usr:e.state,key:e.key,idx:t}}function nd(e,t,n,r){return n===void 0&&(n=null),St({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Yi(t):t,{state:n,key:t&&t.key||r||tk()})}function tf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Yi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function nk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Pt.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(St({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=Pt.Pop;let v=u(),b=v==null?null:v-c;c=v,l&&l({action:a,location:m.location,delta:b})}function f(v,b){a=Pt.Push;let y=nd(m.location,v,b);n&&n(y,v),c=u()+1;let x=f6(y,c),w=m.createHref(y);try{s.pushState(x,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(w)}o&&l&&l({action:a,location:m.location,delta:1})}function h(v,b){a=Pt.Replace;let y=nd(m.location,v,b);n&&n(y,v),c=u();let x=f6(y,c),w=m.createHref(y);s.replaceState(x,"",w),o&&l&&l({action:a,location:m.location,delta:0})}function p(v){let b=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof v=="string"?v:tf(v);return ze(b,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,b)}let m={get action(){return a},get location(){return e(i,s)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(d6,d),l=v,()=>{i.removeEventListener(d6,d),l=null}},createHref(v){return t(i,v)},createURL:p,encodeLocation(v){let b=p(v);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:f,replace:h,go(v){return s.go(v)}};return m}var At;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(At||(At={}));const rk=new Set(["lazy","caseSensitive","path","id","index","children"]);function ik(e){return e.index===!0}function qy(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let s=[...n,o],a=typeof i.id=="string"?i.id:s.join("-");if(ze(i.index!==!0||!i.children,"Cannot specify children on an index route"),ze(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),ik(i)){let l=St({},i,t(i),{id:a});return r[a]=l,l}else{let l=St({},i,t(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=qy(i.children,t,s,r)),l}})}function cl(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Yi(t):t,i=nf(r.pathname||"/",n);if(i==null)return null;let o=B7(e);sk(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=mk(o[a],vk(i));return s}function ok(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function B7(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Zs([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),B7(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:hk(c,o.index),routesMeta:u})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of U7(o.path))i(o,s,l)}),t}function U7(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=U7(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function sk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:pk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ak=/^:\w+$/,lk=3,ck=2,uk=1,dk=10,fk=-2,h6=e=>e==="*";function hk(e,t){let n=e.split("/"),r=n.length;return n.some(h6)&&(r+=fk),t&&(r+=ck),n.filter(i=>!h6(i)).reduce((i,o)=>i+(ak.test(o)?lk:o===""?uk:dk),r)}function pk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function mk(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=gk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;o.push({params:r,pathname:Zs([i,u.pathname]),pathnameBase:Sk(Zs([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=Zs([i,u.pathnameBase]))}return o}function gk(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:h}=u;if(f==="*"){let m=a[d]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const p=a[d];return h&&!p?c[f]=void 0:c[f]=wk(p||"",f),c},{}),pathname:o,pathnameBase:s,pattern:e}}function yk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function vk(e){try{return decodeURI(e)}catch(t){return ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wk(e,t){try{return decodeURIComponent(e)}catch(n){return ca(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function nf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Yi(e):e;return{pathname:n?n.startsWith("/")?n:xk(n,t):t,search:_k(r),hash:Tk(i)}}function xk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rm(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z7(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ck(e){return z7(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Ek(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Yi(e):(i=St({},e),ze(!i.pathname||!i.pathname.includes("?"),Rm("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Rm("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Rm("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else if(r){let d=t[t.length-1].replace(/^\//,"").split("/");if(s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d.pop();i.pathname=f.join("/")}a="/"+d.join("/")}else{let d=t.length-1;if(s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=bk(i,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Zs=e=>e.join("/").replace(/\/\/+/g,"/"),Sk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_k=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class A2{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function W7(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const V7=["post","put","patch","delete"],$k=new Set(V7),Pk=["get",...V7],Ak=new Set(Pk),Dk=new Set([301,302,303,307,308]),Ok=new Set([307,308]),Nm={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},kk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Mc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},H7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rk=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),q7="remix-router-transitions";function Nk(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ze(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let j=e.detectErrorBoundary;i=W=>({hasErrorBoundary:j(W)})}else i=Rk;let o={},s=qy(e.routes,i,void 0,o),a,l=e.basename||"/",c=St({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),u=null,d=new Set,f=null,h=null,p=null,m=e.hydrationData!=null,v=cl(s,e.history.location,l),b=null;if(v==null){let j=ur(404,{pathname:e.history.location.pathname}),{matches:W,route:K}=x6(s);v=W,b={[K.id]:j}}let y=!v.some(j=>j.route.lazy)&&(!v.some(j=>j.route.loader)||e.hydrationData!=null),x,w={historyAction:e.history.action,location:e.history.location,matches:v,initialized:y,navigation:Nm,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},_=Pt.Pop,$=!1,g,T=!1,D=new Map,k=null,I=!1,V=!1,Q=[],B=[],M=new Map,L=0,z=-1,R=new Map,q=new Set,G=new Map,Z=new Map,Y=new Set,J=new Map,ne=new Map,de=!1;function ye(){if(u=e.history.listen(j=>{let{action:W,location:K,delta:oe}=j;if(de){de=!1;return}ca(ne.size===0||oe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ue=fe({currentLocation:w.location,nextLocation:K,historyAction:W});if(ue&&oe!=null){de=!0,e.history.go(oe*-1),H(ue,{state:"blocked",location:K,proceed(){H(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:K}),e.history.go(oe)},reset(){let Me=new Map(w.blockers);Me.set(ue,Mc),he({blockers:Me})}});return}return pe(W,K)}),n){Hk(t,D);let j=()=>qk(t,D);t.addEventListener("pagehide",j),k=()=>t.removeEventListener("pagehide",j)}return w.initialized||pe(Pt.Pop,w.location),x}function xe(){u&&u(),k&&k(),d.clear(),g&&g.abort(),w.fetchers.forEach((j,W)=>Ke(W)),w.blockers.forEach((j,W)=>F(W))}function Te(j){return d.add(j),()=>d.delete(j)}function he(j,W){W===void 0&&(W={}),w=St({},w,j);let K=[],oe=[];c.v7_fetcherPersist&&w.fetchers.forEach((ue,Me)=>{ue.state==="idle"&&(Y.has(Me)?oe.push(Me):K.push(Me))}),[...d].forEach(ue=>ue(w,{deletedFetchers:oe,unstable_viewTransitionOpts:W.viewTransitionOpts,unstable_flushSync:W.flushSync===!0})),c.v7_fetcherPersist&&(K.forEach(ue=>w.fetchers.delete(ue)),oe.forEach(ue=>Ke(ue)))}function ve(j,W,K){var oe,ue;let{flushSync:Me}=K===void 0?{}:K,Pe=w.actionData!=null&&w.navigation.formMethod!=null&&Mr(w.navigation.formMethod)&&w.navigation.state==="loading"&&((oe=j.state)==null?void 0:oe._isRedirect)!==!0,Se;W.actionData?Object.keys(W.actionData).length>0?Se=W.actionData:Se=null:Pe?Se=w.actionData:Se=null;let me=W.loaderData?b6(w.loaderData,W.loaderData,W.matches||[],W.errors):w.loaderData,Ue=w.blockers;Ue.size>0&&(Ue=new Map(Ue),Ue.forEach((it,gt)=>Ue.set(gt,Mc)));let Jt=$===!0||w.navigation.formMethod!=null&&Mr(w.navigation.formMethod)&&((ue=j.state)==null?void 0:ue._isRedirect)!==!0;a&&(s=a,a=void 0),I||_===Pt.Pop||(_===Pt.Push?e.history.push(j,j.state):_===Pt.Replace&&e.history.replace(j,j.state));let Le;if(_===Pt.Pop){let it=D.get(w.location.pathname);it&&it.has(j.pathname)?Le={currentLocation:w.location,nextLocation:j}:D.has(j.pathname)&&(Le={currentLocation:j,nextLocation:w.location})}else if(T){let it=D.get(w.location.pathname);it?it.add(j.pathname):(it=new Set([j.pathname]),D.set(w.location.pathname,it)),Le={currentLocation:w.location,nextLocation:j}}he(St({},W,{actionData:Se,loaderData:me,historyAction:_,location:j,initialized:!0,navigation:Nm,revalidation:"idle",restoreScrollPosition:e5(j,W.matches||w.matches),preventScrollReset:Jt,blockers:Ue}),{viewTransitionOpts:Le,flushSync:Me===!0}),_=Pt.Pop,$=!1,T=!1,I=!1,V=!1,Q=[],B=[]}async function ce(j,W){if(typeof j=="number"){e.history.go(j);return}let K=Gy(w.location,w.matches,l,c.v7_prependBasename,j,W==null?void 0:W.fromRouteId,W==null?void 0:W.relative),{path:oe,submission:ue,error:Me}=p6(c.v7_normalizeFormMethod,!1,K,W),Pe=w.location,Se=nd(w.location,oe,W&&W.state);Se=St({},Se,e.history.encodeLocation(Se));let me=W&&W.replace!=null?W.replace:void 0,Ue=Pt.Push;me===!0?Ue=Pt.Replace:me===!1||ue!=null&&Mr(ue.formMethod)&&ue.formAction===w.location.pathname+w.location.search&&(Ue=Pt.Replace);let Jt=W&&"preventScrollReset"in W?W.preventScrollReset===!0:void 0,Le=(W&&W.unstable_flushSync)===!0,it=fe({currentLocation:Pe,nextLocation:Se,historyAction:Ue});if(it){H(it,{state:"blocked",location:Se,proceed(){H(it,{state:"proceeding",proceed:void 0,reset:void 0,location:Se}),ce(j,W)},reset(){let gt=new Map(w.blockers);gt.set(it,Mc),he({blockers:gt})}});return}return await pe(Ue,Se,{submission:ue,pendingError:Me,preventScrollReset:Jt,replace:W&&W.replace,enableViewTransition:W&&W.unstable_viewTransition,flushSync:Le})}function $e(){if(lt(),he({revalidation:"loading"}),w.navigation.state!=="submitting"){if(w.navigation.state==="idle"){pe(w.historyAction,w.location,{startUninterruptedRevalidation:!0});return}pe(_||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation})}}async function pe(j,W,K){g&&g.abort(),g=null,_=j,I=(K&&K.startUninterruptedRevalidation)===!0,Ze(w.location,w.matches),$=(K&&K.preventScrollReset)===!0,T=(K&&K.enableViewTransition)===!0;let oe=a||s,ue=K&&K.overrideNavigation,Me=cl(oe,W,l),Pe=(K&&K.flushSync)===!0;if(!Me){let gt=ur(404,{pathname:W.pathname}),{matches:wn,route:Jr}=x6(oe);De(),ve(W,{matches:wn,loaderData:{},errors:{[Jr.id]:gt}},{flushSync:Pe});return}if(w.initialized&&!V&&Fk(w.location,W)&&!(K&&K.submission&&Mr(K.submission.formMethod))){ve(W,{matches:Me},{flushSync:Pe});return}g=new AbortController;let Se=jc(e.history,W,g.signal,K&&K.submission),me,Ue;if(K&&K.pendingError)Ue={[Cu(Me).route.id]:K.pendingError};else if(K&&K.submission&&Mr(K.submission.formMethod)){let gt=await kt(Se,W,K.submission,Me,{replace:K.replace,flushSync:Pe});if(gt.shortCircuited)return;me=gt.pendingActionData,Ue=gt.pendingActionError,ue=Im(W,K.submission),Pe=!1,Se=new Request(Se.url,{signal:Se.signal})}let{shortCircuited:Jt,loaderData:Le,errors:it}=await Qr(Se,W,Me,ue,K&&K.submission,K&&K.fetcherSubmission,K&&K.replace,Pe,me,Ue);Jt||(g=null,ve(W,St({matches:Me},me?{actionData:me}:{},{loaderData:Le,errors:it})))}async function kt(j,W,K,oe,ue){ue===void 0&&(ue={}),lt();let Me=Wk(W,K);he({navigation:Me},{flushSync:ue.flushSync===!0});let Pe,Se=Zy(oe,W);if(!Se.route.action&&!Se.route.lazy)Pe={type:At.error,error:ur(405,{method:j.method,pathname:W.pathname,routeId:Se.route.id})};else if(Pe=await Lc("action",j,Se,oe,o,i,l),j.signal.aborted)return{shortCircuited:!0};if(Cl(Pe)){let me;return ue&&ue.replace!=null?me=ue.replace:me=Pe.location===w.location.pathname+w.location.search,await Xr(w,Pe,{submission:K,replace:me}),{shortCircuited:!0}}if(Eu(Pe)){let me=Cu(oe,Se.route.id);return(ue&&ue.replace)!==!0&&(_=Pt.Push),{pendingActionData:{},pendingActionError:{[me.route.id]:Pe.error}}}if(Fs(Pe))throw ur(400,{type:"defer-action"});return{pendingActionData:{[Se.route.id]:Pe.data}}}async function Qr(j,W,K,oe,ue,Me,Pe,Se,me,Ue){let Jt=oe||Im(W,ue),Le=ue||Me||S6(Jt),it=a||s,[gt,wn]=m6(e.history,w,K,Le,W,V,Q,B,Y,G,q,it,l,me,Ue);if(De(ot=>!(K&&K.some(ir=>ir.route.id===ot))||gt&&gt.some(ir=>ir.route.id===ot)),z=++L,gt.length===0&&wn.length===0){let ot=E();return ve(W,St({matches:K,loaderData:{},errors:Ue||null},me?{actionData:me}:{},ot?{fetchers:new Map(w.fetchers)}:{}),{flushSync:Se}),{shortCircuited:!0}}if(!I){wn.forEach(ir=>{let Nt=w.fetchers.get(ir.key),xs=Fc(void 0,Nt?Nt.data:void 0);w.fetchers.set(ir.key,xs)});let ot=me||w.actionData;he(St({navigation:Jt},ot?Object.keys(ot).length===0?{actionData:null}:{actionData:ot}:{},wn.length>0?{fetchers:new Map(w.fetchers)}:{}),{flushSync:Se})}wn.forEach(ot=>{M.has(ot.key)&&P(ot.key),ot.controller&&M.set(ot.key,ot.controller)});let Jr=()=>wn.forEach(ot=>P(ot.key));g&&g.signal.addEventListener("abort",Jr);let{results:$c,loaderResults:rm,fetcherResults:Ia}=await Ct(w.matches,K,gt,wn,j);if(j.signal.aborted)return{shortCircuited:!0};g&&g.signal.removeEventListener("abort",Jr),wn.forEach(ot=>M.delete(ot.key));let Dr=C6($c);if(Dr){if(Dr.idx>=gt.length){let ot=wn[Dr.idx-gt.length].key;q.add(ot)}return await Xr(w,Dr.result,{replace:Pe}),{shortCircuited:!0}}let{loaderData:Rf,errors:im}=w6(w,K,gt,rm,Ue,wn,Ia,J);J.forEach((ot,ir)=>{ot.subscribe(Nt=>{(Nt||ot.done)&&J.delete(ir)})});let om=E(),sm=A(z),Ma=om||sm||wn.length>0;return St({loaderData:Rf,errors:im},Ma?{fetchers:new Map(w.fetchers)}:{})}function bi(j,W,K,oe){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");M.has(j)&&P(j);let ue=(oe&&oe.unstable_flushSync)===!0,Me=a||s,Pe=Gy(w.location,w.matches,l,c.v7_prependBasename,K,W,oe==null?void 0:oe.relative),Se=cl(Me,Pe,l);if(!Se){nt(j,W,ur(404,{pathname:Pe}),{flushSync:ue});return}let{path:me,submission:Ue,error:Jt}=p6(c.v7_normalizeFormMethod,!0,Pe,oe);if(Jt){nt(j,W,Jt,{flushSync:ue});return}let Le=Zy(Se,me);if($=(oe&&oe.preventScrollReset)===!0,Ue&&Mr(Ue.formMethod)){Yr(j,W,me,Le,Se,ue,Ue);return}G.set(j,{routeId:W,path:me}),bs(j,W,me,Le,Se,ue,Ue)}async function Yr(j,W,K,oe,ue,Me,Pe){if(lt(),G.delete(j),!oe.route.action&&!oe.route.lazy){let Nt=ur(405,{method:Pe.formMethod,pathname:K,routeId:W});nt(j,W,Nt,{flushSync:Me});return}let Se=w.fetchers.get(j);je(j,Vk(Pe,Se),{flushSync:Me});let me=new AbortController,Ue=jc(e.history,K,me.signal,Pe);M.set(j,me);let Jt=L,Le=await Lc("action",Ue,oe,ue,o,i,l);if(Ue.signal.aborted){M.get(j)===me&&M.delete(j);return}if(Y.has(j)){je(j,lo(void 0));return}if(Cl(Le))if(M.delete(j),z>Jt){je(j,lo(void 0));return}else return q.add(j),je(j,Fc(Pe)),Xr(w,Le,{fetcherSubmission:Pe});if(Eu(Le)){nt(j,W,Le.error);return}if(Fs(Le))throw ur(400,{type:"defer-action"});let it=w.navigation.location||w.location,gt=jc(e.history,it,me.signal),wn=a||s,Jr=w.navigation.state!=="idle"?cl(wn,w.navigation.location,l):w.matches;ze(Jr,"Didn't find any matches after fetcher action");let $c=++L;R.set(j,$c);let rm=Fc(Pe,Le.data);w.fetchers.set(j,rm);let[Ia,Dr]=m6(e.history,w,Jr,Pe,it,V,Q,B,Y,G,q,wn,l,{[oe.route.id]:Le.data},void 0);Dr.filter(Nt=>Nt.key!==j).forEach(Nt=>{let xs=Nt.key,t5=w.fetchers.get(xs),PA=Fc(void 0,t5?t5.data:void 0);w.fetchers.set(xs,PA),M.has(xs)&&P(xs),Nt.controller&&M.set(xs,Nt.controller)}),he({fetchers:new Map(w.fetchers)});let Rf=()=>Dr.forEach(Nt=>P(Nt.key));me.signal.addEventListener("abort",Rf);let{results:im,loaderResults:om,fetcherResults:sm}=await Ct(w.matches,Jr,Ia,Dr,gt);if(me.signal.aborted)return;me.signal.removeEventListener("abort",Rf),R.delete(j),M.delete(j),Dr.forEach(Nt=>M.delete(Nt.key));let Ma=C6(im);if(Ma){if(Ma.idx>=Ia.length){let Nt=Dr[Ma.idx-Ia.length].key;q.add(Nt)}return Xr(w,Ma.result)}let{loaderData:ot,errors:ir}=w6(w,w.matches,Ia,om,void 0,Dr,sm,J);if(w.fetchers.has(j)){let Nt=lo(Le.data);w.fetchers.set(j,Nt)}A($c),w.navigation.state==="loading"&&$c>z?(ze(_,"Expected pending action"),g&&g.abort(),ve(w.navigation.location,{matches:Jr,loaderData:ot,errors:ir,fetchers:new Map(w.fetchers)})):(he({errors:ir,loaderData:b6(w.loaderData,ot,Jr,ir),fetchers:new Map(w.fetchers)}),V=!1)}async function bs(j,W,K,oe,ue,Me,Pe){let Se=w.fetchers.get(j);je(j,Fc(Pe,Se?Se.data:void 0),{flushSync:Me});let me=new AbortController,Ue=jc(e.history,K,me.signal);M.set(j,me);let Jt=L,Le=await Lc("loader",Ue,oe,ue,o,i,l);if(Fs(Le)&&(Le=await Z7(Le,Ue.signal,!0)||Le),M.get(j)===me&&M.delete(j),!Ue.signal.aborted){if(Y.has(j)){je(j,lo(void 0));return}if(Cl(Le))if(z>Jt){je(j,lo(void 0));return}else{q.add(j),await Xr(w,Le);return}if(Eu(Le)){nt(j,W,Le.error);return}ze(!Fs(Le),"Unhandled fetcher deferred data"),je(j,lo(Le.data))}}async function Xr(j,W,K){let{submission:oe,fetcherSubmission:ue,replace:Me}=K===void 0?{}:K;W.revalidate&&(V=!0);let Pe=nd(j.location,W.location,{_isRedirect:!0});if(ze(Pe,"Expected a location on the redirect navigation"),n){let it=!1;if(W.reloadDocument)it=!0;else if(H7.test(W.location)){const gt=e.history.createURL(W.location);it=gt.origin!==t.location.origin||nf(gt.pathname,l)==null}if(it){Me?t.location.replace(W.location):t.location.assign(W.location);return}}g=null;let Se=Me===!0?Pt.Replace:Pt.Push,{formMethod:me,formAction:Ue,formEncType:Jt}=j.navigation;!oe&&!ue&&me&&Ue&&Jt&&(oe=S6(j.navigation));let Le=oe||ue;if(Ok.has(W.status)&&Le&&Mr(Le.formMethod))await pe(Se,Pe,{submission:St({},Le,{formAction:W.location}),preventScrollReset:$});else{let it=Im(Pe,oe);await pe(Se,Pe,{overrideNavigation:it,fetcherSubmission:ue,preventScrollReset:$})}}async function Ct(j,W,K,oe,ue){let Me=await Promise.all([...K.map(me=>Lc("loader",ue,me,W,o,i,l)),...oe.map(me=>me.matches&&me.match&&me.controller?Lc("loader",jc(e.history,me.path,me.controller.signal),me.match,me.matches,o,i,l):{type:At.error,error:ur(404,{pathname:me.path})})]),Pe=Me.slice(0,K.length),Se=Me.slice(K.length);return await Promise.all([E6(j,K,Pe,Pe.map(()=>ue.signal),!1,w.loaderData),E6(j,oe.map(me=>me.match),Se,oe.map(me=>me.controller?me.controller.signal:null),!0)]),{results:Me,loaderResults:Pe,fetcherResults:Se}}function lt(){V=!0,Q.push(...De()),G.forEach((j,W)=>{M.has(W)&&(B.push(W),P(W))})}function je(j,W,K){K===void 0&&(K={}),w.fetchers.set(j,W),he({fetchers:new Map(w.fetchers)},{flushSync:(K&&K.flushSync)===!0})}function nt(j,W,K,oe){oe===void 0&&(oe={});let ue=Cu(w.matches,W);Ke(j),he({errors:{[ue.route.id]:K},fetchers:new Map(w.fetchers)},{flushSync:(oe&&oe.flushSync)===!0})}function Tt(j){return c.v7_fetcherPersist&&(Z.set(j,(Z.get(j)||0)+1),Y.has(j)&&Y.delete(j)),w.fetchers.get(j)||kk}function Ke(j){let W=w.fetchers.get(j);M.has(j)&&!(W&&W.state==="loading"&&R.has(j))&&P(j),G.delete(j),R.delete(j),q.delete(j),Y.delete(j),w.fetchers.delete(j)}function Rt(j){if(c.v7_fetcherPersist){let W=(Z.get(j)||0)-1;W<=0?(Z.delete(j),Y.add(j)):Z.set(j,W)}else Ke(j);he({fetchers:new Map(w.fetchers)})}function P(j){let W=M.get(j);ze(W,"Expected fetch controller: "+j),W.abort(),M.delete(j)}function C(j){for(let W of j){let K=Tt(W),oe=lo(K.data);w.fetchers.set(W,oe)}}function E(){let j=[],W=!1;for(let K of q){let oe=w.fetchers.get(K);ze(oe,"Expected fetcher: "+K),oe.state==="loading"&&(q.delete(K),j.push(K),W=!0)}return C(j),W}function A(j){let W=[];for(let[K,oe]of R)if(oe<j){let ue=w.fetchers.get(K);ze(ue,"Expected fetcher: "+K),ue.state==="loading"&&(P(K),R.delete(K),W.push(K))}return C(W),W.length>0}function N(j,W){let K=w.blockers.get(j)||Mc;return ne.get(j)!==W&&ne.set(j,W),K}function F(j){w.blockers.delete(j),ne.delete(j)}function H(j,W){let K=w.blockers.get(j)||Mc;ze(K.state==="unblocked"&&W.state==="blocked"||K.state==="blocked"&&W.state==="blocked"||K.state==="blocked"&&W.state==="proceeding"||K.state==="blocked"&&W.state==="unblocked"||K.state==="proceeding"&&W.state==="unblocked","Invalid blocker state transition: "+K.state+" -> "+W.state);let oe=new Map(w.blockers);oe.set(j,W),he({blockers:oe})}function fe(j){let{currentLocation:W,nextLocation:K,historyAction:oe}=j;if(ne.size===0)return;ne.size>1&&ca(!1,"A router only supports one blocker at a time");let ue=Array.from(ne.entries()),[Me,Pe]=ue[ue.length-1],Se=w.blockers.get(Me);if(!(Se&&Se.state==="proceeding")&&Pe({currentLocation:W,nextLocation:K,historyAction:oe}))return Me}function De(j){let W=[];return J.forEach((K,oe)=>{(!j||j(oe))&&(K.cancel(),W.push(oe),J.delete(oe))}),W}function rt(j,W,K){if(f=j,p=W,h=K||null,!m&&w.navigation===Nm){m=!0;let oe=e5(w.location,w.matches);oe!=null&&he({restoreScrollPosition:oe})}return()=>{f=null,p=null,h=null}}function ct(j,W){return h&&h(j,W.map(oe=>ok(oe,w.loaderData)))||j.key}function Ze(j,W){if(f&&p){let K=ct(j,W);f[K]=p()}}function e5(j,W){if(f){let K=ct(j,W),oe=f[K];if(typeof oe=="number")return oe}return null}function $A(j){o={},a=qy(j,i,void 0,o)}return x={get basename(){return l},get state(){return w},get routes(){return s},get window(){return t},initialize:ye,subscribe:Te,enableScrollRestoration:rt,navigate:ce,fetch:bi,revalidate:$e,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:Tt,deleteFetcher:Rt,dispose:xe,getBlocker:N,deleteBlocker:F,_internalFetchControllers:M,_internalActiveDeferreds:J,_internalSetRoutes:$A},x}function Ik(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Gy(e,t,n,r,i,o,s){let a,l;if(o){a=[];for(let u of t)if(a.push(u),u.route.id===o){l=u;break}}else a=t,l=t[t.length-1];let c=Ek(i||".",Ck(a),nf(e.pathname,n)||e.pathname,s==="path");return i==null&&(c.search=e.search,c.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!D2(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Zs([n,c.pathname])),tf(c)}function p6(e,t,n,r){if(!r||!Ik(r))return{path:n};if(r.formMethod&&!zk(r.formMethod))return{path:n,error:ur(405,{method:r.formMethod})};let i=()=>({path:n,error:ur(400,{type:"invalid-body"})}),o=r.formMethod||"get",s=e?o.toUpperCase():o.toLowerCase(),a=K7(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Mr(s))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((h,p)=>{let[m,v]=p;return""+h+m+"="+v+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Mr(s))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}ze(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=Ky(r.formData),c=r.formData;else if(r.body instanceof FormData)l=Ky(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=v6(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=v6(l)}catch{return i()}let u={formMethod:s,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Mr(u.formMethod))return{path:n,submission:u};let d=Yi(n);return t&&d.search&&D2(d.search)&&l.append("index",""),d.search="?"+l,{path:tf(d),submission:u}}function Mk(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function m6(e,t,n,r,i,o,s,a,l,c,u,d,f,h,p){let m=p?Object.values(p)[0]:h?Object.values(h)[0]:void 0,v=e.createURL(t.location),b=e.createURL(i),y=p?Object.keys(p)[0]:void 0,w=Mk(n,y).filter(($,g)=>{if($.route.lazy)return!0;if($.route.loader==null)return!1;if(Lk(t.loaderData,t.matches[g],$)||s.some(k=>k===$.route.id))return!0;let T=t.matches[g],D=$;return g6($,St({currentUrl:v,currentParams:T.params,nextUrl:b,nextParams:D.params},r,{actionResult:m,defaultShouldRevalidate:o||v.pathname+v.search===b.pathname+b.search||v.search!==b.search||G7(T,D)}))}),_=[];return c.forEach(($,g)=>{if(!n.some(V=>V.route.id===$.routeId)||l.has(g))return;let T=cl(d,$.path,f);if(!T){_.push({key:g,routeId:$.routeId,path:$.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(g),k=Zy(T,$.path),I=!1;u.has(g)?I=!1:a.includes(g)?I=!0:D&&D.state!=="idle"&&D.data===void 0?I=o:I=g6(k,St({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:o})),I&&_.push({key:g,routeId:$.routeId,path:$.path,matches:T,match:k,controller:new AbortController})}),[w,_]}function Lk(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function G7(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function g6(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function y6(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];ze(i,"No route found in manifest");let o={};for(let s in r){let l=i[s]!==void 0&&s!=="hasErrorBoundary";ca(!l,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!rk.has(s)&&(o[s]=r[s])}Object.assign(i,o),Object.assign(i,St({},t(i),{lazy:void 0}))}async function Lc(e,t,n,r,i,o,s,a){a===void 0&&(a={});let l,c,u,d=p=>{let m,v=new Promise((b,y)=>m=y);return u=()=>m(),t.signal.addEventListener("abort",u),Promise.race([p({request:t,params:n.params,context:a.requestContext}),v])};try{let p=n.route[e];if(n.route.lazy)if(p){let m,v=await Promise.all([d(p).catch(b=>{m=b}),y6(n.route,o,i)]);if(m)throw m;c=v[0]}else if(await y6(n.route,o,i),p=n.route[e],p)c=await d(p);else if(e==="action"){let m=new URL(t.url),v=m.pathname+m.search;throw ur(405,{method:t.method,pathname:v,routeId:n.route.id})}else return{type:At.data,data:void 0};else if(p)c=await d(p);else{let m=new URL(t.url),v=m.pathname+m.search;throw ur(404,{pathname:v})}ze(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(p){l=At.error,c=p}finally{u&&t.signal.removeEventListener("abort",u)}if(Uk(c)){let p=c.status;if(Dk.has(p)){let b=c.headers.get("Location");if(ze(b,"Redirects returned/thrown from loaders/actions must have a Location header"),!H7.test(b))b=Gy(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,b);else if(!a.isStaticRequest){let y=new URL(t.url),x=b.startsWith("//")?new URL(y.protocol+b):new URL(b),w=nf(x.pathname,s)!=null;x.origin===y.origin&&w&&(b=x.pathname+x.search+x.hash)}if(a.isStaticRequest)throw c.headers.set("Location",b),c;return{type:At.redirect,status:p,location:b,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===At.error?At.error:At.data,response:c};let m,v=c.headers.get("Content-Type");return v&&/\bapplication\/json\b/.test(v)?m=await c.json():m=await c.text(),l===At.error?{type:l,error:new A2(p,c.statusText,m),headers:c.headers}:{type:At.data,data:m,statusCode:c.status,headers:c.headers}}if(l===At.error)return{type:l,error:c};if(Bk(c)){var f,h;return{type:At.deferred,deferredData:c,statusCode:(f=c.init)==null?void 0:f.status,headers:((h=c.init)==null?void 0:h.headers)&&new Headers(c.init.headers)}}return{type:At.data,data:c}}function jc(e,t,n,r){let i=e.createURL(K7(t)).toString(),o={signal:n};if(r&&Mr(r.formMethod)){let{formMethod:s,formEncType:a}=r;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=Ky(r.formData):o.body=r.formData}return new Request(i,o)}function Ky(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function v6(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function jk(e,t,n,r,i){let o={},s=null,a,l=!1,c={};return n.forEach((u,d)=>{let f=t[d].route.id;if(ze(!Cl(u),"Cannot handle redirect results in processLoaderData"),Eu(u)){let h=Cu(e,f),p=u.error;r&&(p=Object.values(r)[0],r=void 0),s=s||{},s[h.route.id]==null&&(s[h.route.id]=p),o[f]=void 0,l||(l=!0,a=W7(u.error)?u.error.status:500),u.headers&&(c[f]=u.headers)}else Fs(u)?(i.set(f,u.deferredData),o[f]=u.deferredData.data):o[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!l&&(a=u.statusCode),u.headers&&(c[f]=u.headers)}),r&&(s=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:c}}function w6(e,t,n,r,i,o,s,a){let{loaderData:l,errors:c}=jk(t,n,r,i,a);for(let u=0;u<o.length;u++){let{key:d,match:f,controller:h}=o[u];ze(s!==void 0&&s[u]!==void 0,"Did not find corresponding fetcher result");let p=s[u];if(!(h&&h.signal.aborted))if(Eu(p)){let m=Cu(e.matches,f==null?void 0:f.route.id);c&&c[m.route.id]||(c=St({},c,{[m.route.id]:p.error})),e.fetchers.delete(d)}else if(Cl(p))ze(!1,"Unhandled fetcher revalidation redirect");else if(Fs(p))ze(!1,"Unhandled fetcher deferred data");else{let m=lo(p.data);e.fetchers.set(d,m)}}return{loaderData:l,errors:c}}function b6(e,t,n,r){let i=St({},t);for(let o of n){let s=o.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&o.route.loader&&(i[s]=e[s]),r&&r.hasOwnProperty(s))break}return i}function Cu(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function x6(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ur(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",a='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new A2(e||500,s,new Error(a),!0)}function C6(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Cl(n))return{result:n,idx:t}}}function K7(e){let t=typeof e=="string"?Yi(e):e;return tf(St({},t,{hash:""}))}function Fk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Fs(e){return e.type===At.deferred}function Eu(e){return e.type===At.error}function Cl(e){return(e&&e.type)===At.redirect}function Bk(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Uk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function zk(e){return Ak.has(e.toLowerCase())}function Mr(e){return $k.has(e.toLowerCase())}async function E6(e,t,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=t[s];if(!l)continue;let c=e.find(d=>d.route.id===l.route.id),u=c!=null&&!G7(c,l)&&(o&&o[l.route.id])!==void 0;if(Fs(a)&&(i||u)){let d=r[s];ze(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Z7(a,d,i).then(f=>{f&&(n[s]=f||n[s])})}}}async function Z7(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:At.data,data:e.deferredData.unwrappedData}}catch(i){return{type:At.error,error:i}}return{type:At.data,data:e.deferredData.data}}}function D2(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Zy(e,t){let n=typeof t=="string"?Yi(t).search:t.search;if(e[e.length-1].route.index&&D2(n||""))return e[e.length-1];let r=z7(e);return r[r.length-1]}function S6(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:s}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function Im(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Wk(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Fc(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Vk(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function lo(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Hk(e,t){try{let n=e.sessionStorage.getItem(q7);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function qk(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(q7,JSON.stringify(n))}catch(r){ca(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qy(){return Qy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qy.apply(this,arguments)}const Q7=S.createContext(null),Y7=S.createContext(null),X7=S.createContext(null),Wp=S.createContext(null),rf=S.createContext({outlet:null,matches:[],isDataRoute:!1}),J7=S.createContext(null);function O2(){return S.useContext(Wp)!=null}function e9(){return O2()||ze(!1),S.useContext(Wp).location}const Gk=S.createContext(null);function Kk(e){let t=S.useContext(rf).outlet;return t&&S.createElement(Gk.Provider,{value:e},t)}function Zk(e,t,n){O2()||ze(!1);let{navigator:r}=S.useContext(X7),{matches:i}=S.useContext(rf),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=e9(),c;if(t){var u;let m=typeof t=="string"?Yi(t):t;a==="/"||(u=m.pathname)!=null&&u.startsWith(a)||ze(!1),c=m}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",h=cl(e,{pathname:f}),p=eR(h&&h.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:Zs([a,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:Zs([a,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n);return t&&p?S.createElement(Wp.Provider,{value:{location:Qy({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Pt.Pop}},p):p}function Qk(){let e=iR(),t=W7(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}const Yk=S.createElement(Qk,null);class Xk extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(rf.Provider,{value:this.props.routeContext},S.createElement(J7.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jk(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Q7);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(rf.Provider,{value:t},r)}function eR(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||ze(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,c)=>{let u=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Yk);let f=t.concat(o.slice(0,c+1)),h=()=>{let p;return u?p=d:l.route.Component?p=S.createElement(l.route.Component,null):l.route.element?p=l.route.element:p=a,S.createElement(Jk,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:p})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?S.createElement(Xk,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var Yy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yy||{});function tR(e){let t=S.useContext(Y7);return t||ze(!1),t}function nR(e){let t=S.useContext(rf);return t||ze(!1),t}function rR(e){let t=nR(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function iR(){var e;let t=S.useContext(J7),n=tR(Yy.UseRouteError),r=rR(Yy.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function oR(e){return Kk(e.context)}function sR(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pt.Pop,navigator:o,static:s=!1}=e;O2()&&ze(!1);let a=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Yi(r));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:h="default"}=r,p=S.useMemo(()=>{let m=nf(c,a);return m==null?null:{location:{pathname:m,search:u,hash:d,state:f,key:h},navigationType:i}},[a,c,u,d,f,h,i]);return p==null?null:S.createElement(X7.Provider,{value:l},S.createElement(Wp.Provider,{children:n,value:p}))}new Promise(()=>{});function aR(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:S.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:S.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E0(){return E0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E0.apply(this,arguments)}function lR(e,t){return Nk({basename:t==null?void 0:t.basename,future:E0({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:ek({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||cR(),routes:e,mapRouteProperties:aR,window:t==null?void 0:t.window}).initialize()}function cR(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=E0({},t,{errors:uR(t.errors)})),t}function uR(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new A2(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let s=new o(i.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const dR=S.createContext({isTransitioning:!1}),fR=S.createContext(new Map),hR="startTransition",_6=ra[hR],pR="flushSync",T6=JO[pR];function mR(e){_6?_6(e):e()}function Bc(e){T6?T6(e):e()}class gR{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function yR(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=S.useState(n.state),[s,a]=S.useState(),[l,c]=S.useState({isTransitioning:!1}),[u,d]=S.useState(),[f,h]=S.useState(),[p,m]=S.useState(),v=S.useRef(new Map),{v7_startTransition:b}=r||{},y=S.useCallback(g=>{b?mR(g):g()},[b]),x=S.useCallback((g,T)=>{let{deletedFetchers:D,unstable_flushSync:k,unstable_viewTransitionOpts:I}=T;D.forEach(Q=>v.current.delete(Q)),g.fetchers.forEach((Q,B)=>{Q.data!==void 0&&v.current.set(B,Q.data)});let V=n.window==null||typeof n.window.document.startViewTransition!="function";if(!I||V){k?Bc(()=>o(g)):y(()=>o(g));return}if(k){Bc(()=>{f&&(u&&u.resolve(),f.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:I.currentLocation,nextLocation:I.nextLocation})});let Q=n.window.document.startViewTransition(()=>{Bc(()=>o(g))});Q.finished.finally(()=>{Bc(()=>{d(void 0),h(void 0),a(void 0),c({isTransitioning:!1})})}),Bc(()=>h(Q));return}f?(u&&u.resolve(),f.skipTransition(),m({state:g,currentLocation:I.currentLocation,nextLocation:I.nextLocation})):(a(g),c({isTransitioning:!0,flushSync:!1,currentLocation:I.currentLocation,nextLocation:I.nextLocation}))},[n.window,f,u,v,y]);S.useLayoutEffect(()=>n.subscribe(x),[n,x]),S.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new gR)},[l]),S.useEffect(()=>{if(u&&s&&n.window){let g=s,T=u.promise,D=n.window.document.startViewTransition(async()=>{y(()=>o(g)),await T});D.finished.finally(()=>{d(void 0),h(void 0),a(void 0),c({isTransitioning:!1})}),h(D)}},[y,s,u,n.window]),S.useEffect(()=>{u&&s&&i.location.key===s.location.key&&u.resolve()},[u,f,i.location,s]),S.useEffect(()=>{!l.isTransitioning&&p&&(a(p.state),c({isTransitioning:!0,flushSync:!1,currentLocation:p.currentLocation,nextLocation:p.nextLocation}),m(void 0))},[l.isTransitioning,p]);let w=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,T,D)=>n.navigate(g,{state:T,preventScrollReset:D==null?void 0:D.preventScrollReset}),replace:(g,T,D)=>n.navigate(g,{replace:!0,state:T,preventScrollReset:D==null?void 0:D.preventScrollReset})}),[n]),_=n.basename||"/",$=S.useMemo(()=>({router:n,navigator:w,static:!1,basename:_}),[n,w,_]);return S.createElement(S.Fragment,null,S.createElement(Q7.Provider,{value:$},S.createElement(Y7.Provider,{value:i},S.createElement(fR.Provider,{value:v.current},S.createElement(dR.Provider,{value:l},S.createElement(sR,{basename:_,location:i.location,navigationType:i.historyAction,navigator:w},i.initialized?S.createElement(vR,{routes:n.routes,state:i}):t))))),null)}function vR(e){let{routes:t,state:n}=e;return Zk(t,void 0,n)}var $6;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($6||($6={}));var P6;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(P6||(P6={}));function Bt(){return Bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bt.apply(this,arguments)}function wR(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function t9(...e){return t=>e.forEach(n=>wR(n,t))}function lc(...e){return S.useCallback(t9(...e),e)}const Vp=S.forwardRef((e,t)=>{const{children:n,...r}=e,i=S.Children.toArray(n),o=i.find(xR);if(o){const s=o.props.children,a=i.map(l=>l===o?S.Children.count(s)>1?S.Children.only(null):S.isValidElement(s)?s.props.children:null:l);return S.createElement(Xy,Bt({},r,{ref:t}),S.isValidElement(s)?S.cloneElement(s,void 0,a):null)}return S.createElement(Xy,Bt({},r,{ref:t}),n)});Vp.displayName="Slot";const Xy=S.forwardRef((e,t)=>{const{children:n,...r}=e;return S.isValidElement(n)?S.cloneElement(n,{...CR(r,n.props),ref:t?t9(t,n.ref):n.ref}):S.Children.count(n)>1?S.Children.only(null):null});Xy.displayName="SlotClone";const bR=({children:e})=>S.createElement(S.Fragment,null,e);function xR(e){return S.isValidElement(e)&&e.type===bR}function CR(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function n9(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=n9(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r9(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=n9(e))&&(r&&(r+=" "),r+=t);return r}const A6=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,D6=r9,i9=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return D6(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],d=o==null?void 0:o[c];if(u===null)return null;const f=A6(u)||A6(d);return i[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,f]=u;return f===void 0||(c[d]=f),c},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:d,className:f,...h}=u;return Object.entries(h).every(p=>{let[m,v]=p;return Array.isArray(v)?v.includes({...o,...a}[m]):{...o,...a}[m]===v})?[...c,d,f]:c},[]);return D6(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)},k2="-";function ER(e){const t=_R(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;function i(s){const a=s.split(k2);return a[0]===""&&a.length!==1&&a.shift(),o9(a,t)||SR(s)}function o(s,a){const l=n[s]||[];return a&&r[s]?[...l,...r[s]]:l}return{getClassGroupId:i,getConflictingClassGroupIds:o}}function o9(e,t){var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?o9(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(k2);return(s=t.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId}const O6=/^\[(.+)\]$/;function SR(e){if(O6.test(e)){const t=O6.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function _R(e){const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return $R(Object.entries(e.classGroups),n).forEach(([o,s])=>{Jy(s,r,o,t)}),r}function Jy(e,t,n,r){e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:k6(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(TR(i)){Jy(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{Jy(s,k6(t,o),n,r)})})}function k6(e,t){let n=e;return t.split(k2).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function TR(e){return e.isThemeGetter}function $R(e,t){return t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[t+s,a])):o);return[n,i]}):e}function PR(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;function i(o,s){n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)}return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}}const s9="!";function AR(e){const t=e.separator,n=t.length===1,r=t[0],i=t.length;return function(s){const a=[];let l=0,c=0,u;for(let m=0;m<s.length;m++){let v=s[m];if(l===0){if(v===r&&(n||s.slice(m,m+i)===t)){a.push(s.slice(c,m)),c=m+i;continue}if(v==="/"){u=m;continue}}v==="["?l++:v==="]"&&l--}const d=a.length===0?s:s.substring(c),f=d.startsWith(s9),h=f?d.substring(1):d,p=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:p}}}function DR(e){if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t}function OR(e){return{cache:PR(e.cacheSize),splitModifiers:AR(e),...ER(e)}}const kR=/\s+/;function RR(e,t){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=new Set;return e.trim().split(kR).map(s=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=n(s);let d=r(u?c.substring(0,u):c),f=!!u;if(!d){if(!u)return{isTailwindClass:!1,originalClassName:s};if(d=r(c),!d)return{isTailwindClass:!1,originalClassName:s};f=!1}const h=DR(a).join(":");return{isTailwindClass:!0,modifierId:l?h+s9:h,classGroupId:d,originalClassName:s,hasPostfixModifier:f}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=s,u=a+l;return o.has(u)?!1:(o.add(u),i(l,c).forEach(d=>o.add(a+d)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function NR(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=a9(t))&&(r&&(r+=" "),r+=n);return r}function a9(e){if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=a9(e[r]))&&(n&&(n+=" "),n+=t);return n}function IR(e,...t){let n,r,i,o=s;function s(l){const c=t.reduce((u,d)=>d(u),e());return n=OR(c),r=n.cache.get,i=n.cache.set,o=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=RR(l,n);return i(l,u),u}return function(){return o(NR.apply(null,arguments))}}function ut(e){const t=n=>n[e]||[];return t.isThemeGetter=!0,t}const l9=/^\[(?:([a-z-]+):)?(.+)\]$/i,MR=/^\d+\/\d+$/,LR=new Set(["px","full","screen"]),jR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,FR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,BR=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,UR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function kr(e){return Bs(e)||LR.has(e)||MR.test(e)}function ro(e){return cc(e,"length",ZR)}function Bs(e){return!!e&&!Number.isNaN(Number(e))}function Yf(e){return cc(e,"number",Bs)}function Uc(e){return!!e&&Number.isInteger(Number(e))}function zR(e){return e.endsWith("%")&&Bs(e.slice(0,-1))}function Ne(e){return l9.test(e)}function io(e){return jR.test(e)}const WR=new Set(["length","size","percentage"]);function VR(e){return cc(e,WR,c9)}function HR(e){return cc(e,"position",c9)}const qR=new Set(["image","url"]);function GR(e){return cc(e,qR,YR)}function KR(e){return cc(e,"",QR)}function zc(){return!0}function cc(e,t,n){const r=l9.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1}function ZR(e){return FR.test(e)}function c9(){return!1}function QR(e){return BR.test(e)}function YR(e){return UR.test(e)}function XR(){const e=ut("colors"),t=ut("spacing"),n=ut("blur"),r=ut("brightness"),i=ut("borderColor"),o=ut("borderRadius"),s=ut("borderSpacing"),a=ut("borderWidth"),l=ut("contrast"),c=ut("grayscale"),u=ut("hueRotate"),d=ut("invert"),f=ut("gap"),h=ut("gradientColorStops"),p=ut("gradientColorStopPositions"),m=ut("inset"),v=ut("margin"),b=ut("opacity"),y=ut("padding"),x=ut("saturate"),w=ut("scale"),_=ut("sepia"),$=ut("skew"),g=ut("space"),T=ut("translate"),D=()=>["auto","contain","none"],k=()=>["auto","hidden","clip","visible","scroll"],I=()=>["auto",Ne,t],V=()=>[Ne,t],Q=()=>["",kr,ro],B=()=>["auto",Bs,Ne],M=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],L=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],R=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",Ne],G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[Bs,Yf],Y=()=>[Bs,Ne];return{cacheSize:500,separator:":",theme:{colors:[zc],spacing:[kr,ro],blur:["none","",io,Ne],brightness:Z(),borderColor:[e],borderRadius:["none","","full",io,Ne],borderSpacing:V(),borderWidth:Q(),contrast:Z(),grayscale:q(),hueRotate:Y(),invert:q(),gap:V(),gradientColorStops:[e],gradientColorStopPositions:[zR,ro],inset:I(),margin:I(),opacity:Z(),padding:V(),saturate:Z(),scale:Z(),sepia:q(),skew:Y(),space:V(),translate:V()},classGroups:{aspect:[{aspect:["auto","square","video",Ne]}],container:["container"],columns:[{columns:[io]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...M(),Ne]}],overflow:[{overflow:k()}],"overflow-x":[{"overflow-x":k()}],"overflow-y":[{"overflow-y":k()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Uc,Ne]}],basis:[{basis:I()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ne]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",Uc,Ne]}],"grid-cols":[{"grid-cols":[zc]}],"col-start-end":[{col:["auto",{span:["full",Uc,Ne]},Ne]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[zc]}],"row-start-end":[{row:["auto",{span:[Uc,Ne]},Ne]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ne]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ne]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[g]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[g]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",Ne,t]}],"min-w":[{"min-w":["min","max","fit",Ne,kr]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[io]},io,Ne]}],h:[{h:[Ne,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",kr,Ne]}],"max-h":[{"max-h":[Ne,t,"min","max","fit"]}],"font-size":[{text:["base",io,ro]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Yf]}],"font-family":[{font:[zc]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ne]}],"line-clamp":[{"line-clamp":["none",Bs,Yf]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",kr,Ne]}],"list-image":[{"list-image":["none",Ne]}],"list-style-type":[{list:["none","disc","decimal",Ne]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...L(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",kr,ro]}],"underline-offset":[{"underline-offset":["auto",kr,Ne]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ne]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ne]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...M(),HR]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",VR]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},GR]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[p]}],"gradient-via-pos":[{via:[p]}],"gradient-to-pos":[{to:[p]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[...L(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:L()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...L()]}],"outline-offset":[{"outline-offset":[kr,Ne]}],"outline-w":[{outline:[kr,ro]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[kr,ro]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",io,KR]}],"shadow-color":[{shadow:[zc]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":z()}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",io,Ne]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[x]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ne]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",Ne]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ne]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Uc,Ne]}],"translate-x":[{"translate-x":[T]}],"translate-y":[{"translate-y":[T]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ne]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ne]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ne]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[kr,ro,Yf]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const JR=IR(XR),eN=2n**256n-1n;function Ht(...e){return JR(r9(e))}const Mm=e=>e?Number(e).toLocaleString(void 0,{maximumSignificantDigits:6,notation:"compact"}):0,tN=i9("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-gradient-to-br from-lime-400 to-lime-700 text-primary-foreground hover:bg-primary/90",success:"bg-green-500 text-primary-foreground hover:bg-green-500/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Nn=S.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const s=r?Vp:"button";return O.jsx(s,{className:Ht(tN({variant:t,size:n,className:e})),ref:o,...i})});Nn.displayName="Button";/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cs=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:l,...c},u)=>S.createElement("svg",{ref:u,...nN,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${rN(e)}`,a].join(" "),...c},[...t.map(([d,f])=>S.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=cs("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=cs("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=cs("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=cs("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=cs("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=cs("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=cs("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=cs("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function uN({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(e){const s=a=>{try{e.setItem(t,r(a));return}catch(l){return l}};return{persistClient:dN(a=>{let l=a,c=s(l),u=0;for(;c&&l;)u++,l=o==null?void 0:o({persistedClient:l,error:c,errorCount:u}),l&&(c=s(l))},n),restoreClient:()=>{const a=e.getItem(t);if(a)return i(a)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:R6,restoreClient:()=>{},removeClient:R6}}function dN(e,t=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{e(...r),n=null},t))}}function R6(){}class uc{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){const n={listener:t};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const rd=typeof window>"u"||"Deno"in window;function dr(){}function fN(e,t){return typeof e=="function"?e(t):e}function ev(e){return typeof e=="number"&&e>=0&&e!==1/0}function d9(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Xf(e,t,n){return of(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function f9(e,t,n){return of(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function yo(e,t,n){return of(e)?[{...t,queryKey:e},n]:[e||{},t]}function N6(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(of(s)){if(r){if(t.queryHash!==R2(s,t.options))return!1}else if(!_0(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function I6(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(of(o)){if(!t.options.mutationKey)return!1;if(n){if(Us(t.options.mutationKey)!==Us(o))return!1}else if(!_0(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function R2(e,t){return((t==null?void 0:t.queryKeyHashFn)||Us)(e)}function Us(e){return JSON.stringify(e,(t,n)=>tv(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function _0(e,t){return h9(e,t)}function h9(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!h9(e[n],t[n])):!1}function p9(e,t){if(e===t)return e;const n=M6(e)&&M6(t);if(n||tv(e)&&tv(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const c=n?l:i[l];s[c]=p9(e[c],t[c]),s[c]===e[c]&&a++}return r===o&&a===r?e:s}return t}function T0(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function M6(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function tv(e){if(!L6(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!L6(n)||!n.hasOwnProperty("isPrototypeOf"))}function L6(e){return Object.prototype.toString.call(e)==="[object Object]"}function of(e){return Array.isArray(e)}function m9(e){return new Promise(t=>{setTimeout(t,e)})}function j6(e){m9(0).then(e)}function hN(){if(typeof AbortController=="function")return new AbortController}function nv(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?p9(e,t):t}class pN extends uc{constructor(){super(),this.setup=t=>{if(!rd&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused!==t&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const $0=new pN,F6=["online","offline"];class mN extends uc{constructor(){super(),this.setup=t=>{if(!rd&&window.addEventListener){const n=()=>t();return F6.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{F6.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online!==t&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const P0=new mN;function gN(e){return Math.min(1e3*2**e,3e4)}function Hp(e){return(e??"online")==="online"?P0.isOnline():!0}class g9{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function Mh(e){return e instanceof g9}function y9(e){let t=!1,n=0,r=!1,i,o,s;const a=new Promise((v,b)=>{o=v,s=b}),l=v=>{r||(h(new g9(v)),e.abort==null||e.abort())},c=()=>{t=!0},u=()=>{t=!1},d=()=>!$0.isFocused()||e.networkMode!=="always"&&!P0.isOnline(),f=v=>{r||(r=!0,e.onSuccess==null||e.onSuccess(v),i==null||i(),o(v))},h=v=>{r||(r=!0,e.onError==null||e.onError(v),i==null||i(),s(v))},p=()=>new Promise(v=>{i=b=>{const y=r||!d();return y&&v(b),y},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),m=()=>{if(r)return;let v;try{v=e.fn()}catch(b){v=Promise.reject(b)}Promise.resolve(v).then(f).catch(b=>{var y,x;if(r)return;const w=(y=e.retry)!=null?y:3,_=(x=e.retryDelay)!=null?x:gN,$=typeof _=="function"?_(n,b):_,g=w===!0||typeof w=="number"&&n<w||typeof w=="function"&&w(n,b);if(t||!g){h(b);return}n++,e.onFail==null||e.onFail(n,b),m9($).then(()=>{if(d())return p()}).then(()=>{t?h(b):m()})})};return Hp(e.networkMode)?m():p().then(m),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:c,continueRetry:u}}const N2=console;function yN(){let e=[],t=0,n=u=>{u()},r=u=>{u()};const i=u=>{let d;t++;try{d=u()}finally{t--,t||a()}return d},o=u=>{t?e.push(u):j6(()=>{n(u)})},s=u=>(...d)=>{o(()=>{u(...d)})},a=()=>{const u=e;e=[],u.length&&j6(()=>{r(()=>{u.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u}}}const _t=yN();class v9{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ev(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(rd?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class vN extends v9{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||N2,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||wN(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=nv(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(dr).catch(dr):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!d9(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const s=hN(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(u),(r=this.options.behavior)==null||r.onFetch(u),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=u.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=u.fetchOptions)==null?void 0:d.meta})}const f=h=>{if(Mh(h)&&h.silent||this.dispatch({type:"error",error:h}),!Mh(h)){var p,m,v,b;(p=(m=this.cache.config).onError)==null||p.call(m,h,this),(v=(b=this.cache.config).onSettled)==null||v.call(b,this.state.data,h,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=y9({fn:u.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:h=>{var p,m,v,b;if(typeof h>"u"){f(new Error(this.queryHash+" data is undefined"));return}this.setData(h),(p=(m=this.cache.config).onSuccess)==null||p.call(m,h,this),(v=(b=this.cache.config).onSettled)==null||v.call(b,h,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:f,onFail:(h,p)=>{this.dispatch({type:"failed",failureCount:h,error:p})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:Hp(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=t.error;return Mh(s)&&s.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),_t.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function wN(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class bN extends uc{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:R2(o,n);let a=this.get(s);return a||(a=new vN({cache:this,logger:t.getLogger(),queryKey:o,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){_t.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=yo(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>N6(r,i))}findAll(t,n){const[r]=yo(t,n);return Object.keys(r).length>0?this.queries.filter(i=>N6(r,i)):this.queries}notify(t){_t.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}onFocus(){_t.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){_t.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class xN extends v9{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||N2,this.observers=[],this.state=t.state||w9(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var g;return this.retryer=y9({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(T,D)=>{this.dispatch({type:"failed",failureCount:T,error:D})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(g=this.options.retry)!=null?g:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,c,u;if(!n){var d,f,h,p;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(f=this.mutationCache.config).onMutate)==null?void 0:d.call(f,this.state.variables,this));const T=await((h=(p=this.options).onMutate)==null?void 0:h.call(p,this.state.variables));T!==this.state.context&&this.dispatch({type:"loading",context:T,variables:this.state.variables})}const g=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,g,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,g,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,g,null,this.state.variables,this.state.context,this)),await((c=(u=this.options).onSettled)==null?void 0:c.call(u,g,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:g}),g}catch(g){try{var m,v,b,y,x,w,_,$;throw await((m=(v=this.mutationCache.config).onError)==null?void 0:m.call(v,g,this.state.variables,this.state.context,this)),await((b=(y=this.options).onError)==null?void 0:b.call(y,g,this.state.variables,this.state.context)),await((x=(w=this.mutationCache.config).onSettled)==null?void 0:x.call(w,void 0,g,this.state.variables,this.state.context,this)),await((_=($=this.options).onSettled)==null?void 0:_.call($,void 0,g,this.state.variables,this.state.context)),g}finally{this.dispatch({type:"error",error:g})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Hp(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),_t.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function w9(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class CN extends uc{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new xN({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){_t.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>I6(t,n))}findAll(t){return this.mutations.filter(n=>I6(t,n))}notify(t){_t.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return _t.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(dr)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function EN(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,s;const a=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,l=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,c=l==null?void 0:l.pageParam,u=(l==null?void 0:l.direction)==="forward",d=(l==null?void 0:l.direction)==="backward",f=((o=e.state.data)==null?void 0:o.pages)||[],h=((s=e.state.data)==null?void 0:s.pageParams)||[];let p=h,m=!1;const v=$=>{Object.defineProperty($,"signal",{enumerable:!0,get:()=>{var g;if((g=e.signal)!=null&&g.aborted)m=!0;else{var T;(T=e.signal)==null||T.addEventListener("abort",()=>{m=!0})}return e.signal}})},b=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),y=($,g,T,D)=>(p=D?[g,...p]:[...p,g],D?[T,...$]:[...$,T]),x=($,g,T,D)=>{if(m)return Promise.reject("Cancelled");if(typeof T>"u"&&!g&&$.length)return Promise.resolve($);const k={queryKey:e.queryKey,pageParam:T,meta:e.options.meta};v(k);const I=b(k);return Promise.resolve(I).then(Q=>y($,T,Q,D))};let w;if(!f.length)w=x([]);else if(u){const $=typeof c<"u",g=$?c:B6(e.options,f);w=x(f,$,g)}else if(d){const $=typeof c<"u",g=$?c:SN(e.options,f);w=x(f,$,g,!0)}else{p=[];const $=typeof e.options.getNextPageParam>"u";w=(a&&f[0]?a(f[0],0,f):!0)?x([],$,h[0]):Promise.resolve(y([],h[0],f[0]));for(let T=1;T<f.length;T++)w=w.then(D=>{if(a&&f[T]?a(f[T],T,f):!0){const I=$?h[T]:B6(e.options,D);return x(D,$,I)}return Promise.resolve(y(D,h[T],f[T]))})}return w.then($=>({pages:$,pageParams:p}))}}}}function B6(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function SN(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class b9{constructor(t={}){this.queryCache=t.queryCache||new bN,this.mutationCache=t.mutationCache||new CN,this.logger=t.logger||N2,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=$0.subscribe(()=>{$0.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=P0.subscribe(()=>{P0.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=yo(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=Xf(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,s=fN(n,o);if(typeof s>"u")return;const a=Xf(t),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(t,n,r){return _t.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=yo(t,n),i=this.queryCache;_t.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=yo(t,n,r),s=this.queryCache,a={type:"active",...i};return _t.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(t,n,r){const[i,o={}]=yo(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=_t.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(dr).catch(dr)}invalidateQueries(t,n,r){const[i,o]=yo(t,n,r);return _t.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(c=>{c.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(t,n,r){const[i,o]=yo(t,n,r),s=_t.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...o,cancelRefetch:(c=o==null?void 0:o.cancelRefetch)!=null?c:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(dr);return o!=null&&o.throwOnError||(a=a.catch(dr)),a}fetchQuery(t,n,r){const i=Xf(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(dr).catch(dr)}fetchInfiniteQuery(t,n,r){const i=Xf(t,n,r);return i.behavior=EN(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(dr).catch(dr)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>Us(t)===Us(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>_0(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>Us(t)===Us(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>_0(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=R2(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class _N extends uc{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),U6(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return rv(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return rv(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),T0(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&z6(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const s=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||s!==this.currentRefetchInterval)&&this.updateRefetchInterval(s)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t),r=this.createResult(n,t);return $N(this,r,t)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(dr)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),rd||this.currentResult.isStale||!ev(this.options.staleTime))return;const n=d9(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(rd||this.options.enabled===!1||!ev(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||$0.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,s=this.currentResultState,a=this.currentResultOptions,l=t!==r,c=l?t.state:this.currentQueryInitialState,u=l?this.currentResult:this.previousQueryResult,{state:d}=t;let{dataUpdatedAt:f,error:h,errorUpdatedAt:p,fetchStatus:m,status:v}=d,b=!1,y=!1,x;if(n._optimisticResults){const T=this.hasListeners(),D=!T&&U6(t,n),k=T&&z6(t,r,n,i);(D||k)&&(m=Hp(t.options.networkMode)?"fetching":"paused",f||(v="loading")),n._optimisticResults==="isRestoring"&&(m="idle")}if(n.keepPreviousData&&!d.dataUpdatedAt&&u!=null&&u.isSuccess&&v!=="error")x=u.data,f=u.dataUpdatedAt,v=u.status,b=!0;else if(n.select&&typeof d.data<"u")if(o&&d.data===(s==null?void 0:s.data)&&n.select===this.selectFn)x=this.selectResult;else try{this.selectFn=n.select,x=n.select(d.data),x=nv(o==null?void 0:o.data,x,n),this.selectResult=x,this.selectError=null}catch(T){this.selectError=T}else x=d.data;if(typeof n.placeholderData<"u"&&typeof x>"u"&&v==="loading"){let T;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(a==null?void 0:a.placeholderData))T=o.data;else if(T=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof T<"u")try{T=n.select(T),this.selectError=null}catch(D){this.selectError=D}typeof T<"u"&&(v="success",x=nv(o==null?void 0:o.data,T,n),y=!0)}this.selectError&&(h=this.selectError,x=this.selectResult,p=Date.now(),v="error");const w=m==="fetching",_=v==="loading",$=v==="error";return{status:v,fetchStatus:m,isLoading:_,isSuccess:v==="success",isError:$,isInitialLoading:_&&w,data:x,dataUpdatedAt:f,error:h,errorUpdatedAt:p,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>c.dataUpdateCount||d.errorUpdateCount>c.errorUpdateCount,isFetching:w,isRefetching:w&&!_,isLoadingError:$&&d.dataUpdatedAt===0,isPaused:m==="paused",isPlaceholderData:y,isPreviousData:b,isRefetchError:$&&d.dataUpdatedAt!==0,isStale:I2(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,T0(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,a=typeof s=="function"?s():s;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(c=>{const u=c;return this.currentResult[u]!==n[u]&&l.has(u)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Mh(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){_t.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var s,a,l,c;(s=(a=this.options).onError)==null||s.call(a,this.currentResult.error),(l=(c=this.options).onSettled)==null||l.call(c,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function TN(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function U6(e,t){return TN(e,t)||e.state.dataUpdatedAt>0&&rv(e,t,t.refetchOnMount)}function rv(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&I2(e,t)}return!1}function z6(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&I2(e,n)}function I2(e,t){return e.isStaleByTime(t.staleTime)}function $N(e,t,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?t.isPlaceholderData:!T0(e.getCurrentResult(),t)}let PN=class extends uc{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),T0(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:w9(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){_t.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var s,a,l,c;(s=(a=this.mutateOptions).onError)==null||s.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(l=(c=this.mutateOptions).onSettled)==null||l.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)})})}};function AN(e){return{mutationKey:e.options.mutationKey,state:e.state}}function DN(e){return{state:e.state,queryKey:e.queryKey,queryHash:e.queryHash}}function ON(e){return e.state.isPaused}function kN(e){return e.state.status==="success"}function RN(e,t={}){const n=[],r=[];if(t.dehydrateMutations!==!1){const i=t.shouldDehydrateMutation||ON;e.getMutationCache().getAll().forEach(o=>{i(o)&&n.push(AN(o))})}if(t.dehydrateQueries!==!1){const i=t.shouldDehydrateQuery||kN;e.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(DN(o))})}return{mutations:n,queries:r}}function NN(e,t,n){if(typeof t!="object"||t===null)return;const r=e.getMutationCache(),i=e.getQueryCache(),o=t.mutations||[],s=t.queries||[];o.forEach(a=>{var l;r.build(e,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(({queryKey:a,state:l,queryHash:c})=>{var u;const d=i.get(c);if(d){if(d.state.dataUpdatedAt<l.dataUpdatedAt){const{fetchStatus:f,...h}=l;d.setState(h)}return}i.build(e,{...n==null||(u=n.defaultOptions)==null?void 0:u.queries,queryKey:a,queryHash:c},{...l,fetchStatus:"idle"})})}var x9={exports:{}},C9={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rl=S;function IN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var MN=typeof Object.is=="function"?Object.is:IN,LN=Rl.useState,jN=Rl.useEffect,FN=Rl.useLayoutEffect,BN=Rl.useDebugValue;function UN(e,t){var n=t(),r=LN({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return FN(function(){i.value=n,i.getSnapshot=t,Lm(i)&&o({inst:i})},[e,n,t]),jN(function(){return Lm(i)&&o({inst:i}),e(function(){Lm(i)&&o({inst:i})})},[e]),BN(n),n}function Lm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!MN(e,n)}catch{return!0}}function zN(e,t){return t()}var WN=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?zN:UN;C9.useSyncExternalStore=Rl.useSyncExternalStore!==void 0?Rl.useSyncExternalStore:WN;x9.exports=C9;var M2=x9.exports;const VN=M2.useSyncExternalStore,W6=S.createContext(void 0),E9=S.createContext(!1);function S9(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=W6),window.ReactQueryClientContext):W6)}const L2=({context:e}={})=>{const t=S.useContext(S9(e,S.useContext(E9)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},_9=({client:e,children:t,context:n,contextSharing:r=!1})=>{S.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=S9(n,r);return S.createElement(E9.Provider,{value:!n&&r},S.createElement(i.Provider,{value:e},t))},T9=S.createContext(!1),HN=()=>S.useContext(T9);T9.Provider;function qN(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const GN=S.createContext(qN()),KN=()=>S.useContext(GN);function ZN(e,t){return typeof e=="function"?e(...t):!!e}function QN(e,t,n){const r=f9(e,t,n),i=L2({context:r.context}),[o]=S.useState(()=>new PN(i,r));S.useEffect(()=>{o.setOptions(r)},[o,r]);const s=VN(S.useCallback(l=>o.subscribe(_t.batchCalls(l)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),a=S.useCallback((l,c)=>{o.mutate(l,c).catch(YN)},[o]);if(s.error&&ZN(o.options.useErrorBoundary,[s.error]))throw s.error;return{...s,mutate:a,mutateAsync:s.mutate}}function YN(){}const XN=["added","removed","updated"];function V6(e){return XN.includes(e)}async function JN({queryClient:e,persister:t,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await t.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?t.removeClient():NN(e,o.clientState,i)}else t.removeClient()}catch{t.removeClient()}}async function H6({queryClient:e,persister:t,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:RN(e,r)};await t.persistClient(i)}function eI(e){const t=e.queryClient.getQueryCache().subscribe(r=>{V6(r.type)&&H6(e)}),n=e.queryClient.getMutationCache().subscribe(r=>{V6(r.type)&&H6(e)});return()=>{t(),n()}}function tI(e){let t=!1,n;const r=()=>{t=!0,n==null||n()},i=JN(e).then(()=>{t||(n=eI(e))});return[r,i]}function qp(e,t={}){const{fees:n=e.fees,formatters:r=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:n,formatters:r,serializers:i}}const nI="1.19.9",rI=e=>e,Gp=e=>e,iI=()=>`viem@${nI}`;class re extends Error{constructor(t,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:iI()});const r=n.cause instanceof re?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof re&&n.cause.docsPath||n.docsPath;this.message=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=t}walk(t){return $9(this,t)}}function $9(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e?$9(e.cause,t):t?null:e}class oI extends re{constructor({max:t,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class sI extends re{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class aI extends re{constructor({givenSize:t,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function di(e,{strict:t=!0}={}){return!e||typeof e!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")}function Vt(e){return di(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function Qs(e,{dir:t="left"}={}){let n=typeof e=="string"?e.replace("0x",""):e,r=0;for(let i=0;i<n.length-1&&n[t==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=t==="left"?n.slice(r):n.slice(0,n.length-r),typeof e=="string"?(n.length===1&&t==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class P9 extends re{constructor({offset:t,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class A9 extends re{constructor({size:t,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function dc(e,{dir:t,size:n=32}={}){return typeof e=="string"?Fo(e,{dir:t,size:n}):lI(e,{dir:t,size:n})}function Fo(e,{dir:t,size:n=32}={}){if(n===null)return e;const r=e.replace("0x","");if(r.length>n*2)throw new A9({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`}function lI(e,{dir:t,size:n=32}={}){if(n===null)return e;if(e.length>n)throw new A9({size:e.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=t==="right";r[o?i:n-i-1]=e[o?i:e.length-i-1]}return r}const cI=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Xi(e,t={}){return typeof e=="number"||typeof e=="bigint"?Oe(e,t):typeof e=="string"?j2(e,t):typeof e=="boolean"?D9(e,t):id(e,t)}function D9(e,t={}){const n=`0x${Number(e)}`;return typeof t.size=="number"?(us(n,{size:t.size}),dc(n,{size:t.size})):n}function id(e,t={}){let n="";for(let i=0;i<e.length;i++)n+=cI[e[i]];const r=`0x${n}`;return typeof t.size=="number"?(us(r,{size:t.size}),dc(r,{dir:"right",size:t.size})):r}function Oe(e,t={}){const{signed:n,size:r}=t,i=BigInt(e);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof e=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof e=="bigint"?"n":"";throw new oI({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${e}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?dc(a,{size:r}):a}const uI=new TextEncoder;function j2(e,t={}){const n=uI.encode(e);return id(n,t)}const dI=new TextEncoder;function Qo(e,t={}){return typeof e=="number"||typeof e=="bigint"?hI(e,t):typeof e=="boolean"?fI(e,t):di(e)?F2(e,t):Oi(e,t)}function fI(e,t={}){const n=new Uint8Array(1);return n[0]=Number(e),typeof t.size=="number"?(us(n,{size:t.size}),dc(n,{size:t.size})):n}const xi={zero:48,nine:57,A:65,F:70,a:97,f:102};function q6(e){if(e>=xi.zero&&e<=xi.nine)return e-xi.zero;if(e>=xi.A&&e<=xi.F)return e-(xi.A-10);if(e>=xi.a&&e<=xi.f)return e-(xi.a-10)}function F2(e,t={}){let n=e;t.size&&(us(n,{size:t.size}),n=dc(n,{dir:"right",size:t.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=q6(r.charCodeAt(a++)),c=q6(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new re(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+c}return o}function hI(e,t){const n=Oe(e,t);return F2(n)}function Oi(e,t={}){const n=dI.encode(e);return typeof t.size=="number"?(us(n,{size:t.size}),dc(n,{dir:"right",size:t.size})):n}function us(e,{size:t}){if(Vt(e)>t)throw new aI({givenSize:Vt(e),maxSize:t})}function Kp(e,t={}){const{signed:n}=t;t.size&&us(e,{size:t.size});const r=BigInt(e);if(!n)return r;const i=(e.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function pI(e,t={}){let n=e;if(t.size&&(us(n,{size:t.size}),n=Qs(n)),Qs(n)==="0x00")return!1;if(Qs(n)==="0x01")return!0;throw new sI(n)}function yn(e,t={}){return Number(Kp(e,t))}function O9(e,t={}){let n=F2(e);return t.size&&(us(n,{size:t.size}),n=Qs(n,{dir:"right"})),new TextDecoder().decode(n)}const k9={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function R9(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?yn(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?yn(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?k9[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}function N9(e){var n;const t=(n=e.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:R9(r));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}function Wr(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}const mI={"0x0":"reverted","0x1":"success"};function gI(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(t=>Wr(t)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?yn(e.transactionIndex):null,status:e.status?mI[e.status]:null,type:e.type?k9[e.type]||e.type:null}}const Ns=qp({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}),Ti=qp({id:97,name:"Binance Smart Chain Testnet",network:"bsc-testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]},public:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://testnet.bscscan.com"},default:{name:"BscScan",url:"https://testnet.bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0}),yI={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Zp(e){return{...e,gas:typeof e.gas<"u"?Oe(e.gas):void 0,gasPrice:typeof e.gasPrice<"u"?Oe(e.gasPrice):void 0,maxFeePerGas:typeof e.maxFeePerGas<"u"?Oe(e.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof e.maxPriorityFeePerGas<"u"?Oe(e.maxPriorityFeePerGas):void 0,nonce:typeof e.nonce<"u"?Oe(e.nonce):void 0,type:typeof e.type<"u"?yI[e.type]:void 0,value:typeof e.value<"u"?Oe(e.value):void 0}}class od extends re{constructor({address:t}){super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class iv extends re{constructor({blockNumber:t,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...t&&r.blockCreated&&r.blockCreated>t?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class vI extends re{constructor({chain:t,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class wI extends re{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class I9 extends re{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const bI={gwei:9,wei:18},xI={ether:-9,wei:9},CI={ether:-18,gwei:-9};function sd(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[i,o]=[n.slice(0,n.length-t),n.slice(n.length-t)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function Bn(e,t="wei"){return sd(e,xI[t])}class ul extends re{constructor({cause:t,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(ul,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(ul,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class A0 extends re{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Bn(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(A0,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class ov extends re{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Bn(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(ov,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class sv extends re{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(sv,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class av extends re{constructor({cause:t,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(av,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class lv extends re{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(lv,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class cv extends re{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(cv,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class uv extends re{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(uv,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class dv extends re{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(dv,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class fv extends re{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(fv,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class D0 extends re{constructor({cause:t,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Bn(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Bn(r)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(D0,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class Qp extends re{constructor({cause:t}){super(`An error occurred while executing: ${t==null?void 0:t.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const EI=/^0x[a-fA-F0-9]{40}$/;function zi(e){return EI.test(e)}function Wi(e){return typeof e[0]=="string"?B2(e):SI(e)}function SI(e){let t=0;for(const i of e)t+=i.length;const n=new Uint8Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}function B2(e){return`0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`}function _I(e,t){const n=e.exec(t);return n==null?void 0:n.groups}const G6=/^tuple(?<array>(\[(\d*)\])*)$/;function hv(e){let t=e.type;if(G6.test(e.type)&&"components"in e){t="(";const n=e.components.length;for(let i=0;i<n;i++){const o=e.components[i];t+=hv(o),i<n-1&&(t+=", ")}const r=_I(G6,e.type);return t+=`)${(r==null?void 0:r.array)??""}`,hv({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function Wc(e){let t="";const n=e.length;for(let r=0;r<n;r++){const i=e[r];t+=hv(i),r!==n-1&&(t+=", ")}return t}function TI(e){return e.type==="function"?`function ${e.name}(${Wc(e.inputs)})${e.stateMutability&&e.stateMutability!=="nonpayable"?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${Wc(e.outputs)})`:""}`:e.type==="event"?`event ${e.name}(${Wc(e.inputs)})`:e.type==="error"?`error ${e.name}(${Wc(e.inputs)})`:e.type==="constructor"?`constructor(${Wc(e.inputs)})${e.stateMutability==="payable"?" payable":""}`:e.type==="fallback"?"fallback()":"receive() external payable"}function ge(e,t,n){return r=>{var i;return((i=e[t.name||n])==null?void 0:i.call(e,r))??t(e,r)}}function _a(e,{includeName:t=!1}={}){if(e.type!=="function"&&e.type!=="event"&&e.type!=="error")throw new FI(e.type);return`${e.name}(${Yp(e.inputs,{includeName:t})})`}function Yp(e,{includeName:t=!1}={}){return e?e.map(n=>$I(n,{includeName:t})).join(t?", ":","):""}function $I(e,{includeName:t}){return e.type.startsWith("tuple")?`(${Yp(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}class PI extends re{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class K6 extends re{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class U2 extends re{constructor({data:t,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Yp(n,{includeName:!0})})`,`Data:   ${t} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=n,this.size=r}}class Xp extends re{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class AI extends re{constructor({expectedLength:t,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${t}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class DI extends re{constructor({expectedSize:t,value:n}){super(`Size of bytes "${n}" (bytes${Vt(n)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class OI extends re{constructor({expectedLength:t,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class M9 extends re{constructor(t,{docsPath:n}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}}class kI extends re{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class RI extends re{constructor(t,{docsPath:n}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class Z6 extends re{constructor(t,{docsPath:n}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class O0 extends re{constructor(t,{docsPath:n}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class NI extends re{constructor(t,{docsPath:n}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class II extends re{constructor({expectedSize:t,givenSize:n}){super(`Expected bytes${t}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class ua extends re{constructor({abiItem:t,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Yp(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=n,this.params=r,this.size=i}}class fc extends re{constructor({abiItem:t,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${_a(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}}class MI extends re{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class LI extends re{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class jI extends re{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class FI extends re{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class BI extends re{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function UI(e){let t=!0,n="",r=0,i="",o=!1;for(let s=0;s<e.length;s++){const a=e[s];if(["(",")",","].includes(a)&&(t=!0),a==="("&&r++,a===")"&&r--,!!t){if(r===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){e[s-1]!==","&&n!==","&&n!==",("&&(n="",t=!1);continue}i+=a,n+=a}}if(!o)throw new re("Unable to normalize signature.");return i}const L9=e=>{const t=typeof e=="string"?e:TI(e);return UI(t)},zI=e=>L9(e);function Q6(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function j9(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function Y6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function WI(e,t){j9(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Jf=BigInt(2**32-1),X6=BigInt(32);function VI(e,t=!1){return t?{h:Number(e&Jf),l:Number(e>>X6&Jf)}:{h:Number(e>>X6&Jf)|0,l:Number(e&Jf)|0}}function HI(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:s}=VI(e[i],t);[n[i],r[i]]=[o,s]}return[n,r]}const qI=(e,t,n)=>e<<n|t>>>32-n,GI=(e,t,n)=>t<<n|e>>>32-n,KI=(e,t,n)=>t<<n-32|e>>>64-n,ZI=(e,t,n)=>e<<n-32|t>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const QI=e=>e instanceof Uint8Array,YI=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),XI=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!XI)throw new Error("Non little-endian hardware is not supported");function JI(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function F9(e){if(typeof e=="string"&&(e=JI(e)),!QI(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}class eM{clone(){return this._cloneInto()}}function tM(e){const t=r=>e().update(F9(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}const[B9,U9,z9]=[[],[],[]],nM=BigInt(0),Vc=BigInt(1),rM=BigInt(2),iM=BigInt(7),oM=BigInt(256),sM=BigInt(113);for(let e=0,t=Vc,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],B9.push(2*(5*r+n)),U9.push((e+1)*(e+2)/2%64);let i=nM;for(let o=0;o<7;o++)t=(t<<Vc^(t>>iM)*sM)%oM,t&rM&&(i^=Vc<<(Vc<<BigInt(o))-Vc);z9.push(i)}const[aM,lM]=HI(z9,!0),J6=(e,t,n)=>n>32?KI(e,t,n):qI(e,t,n),e4=(e,t,n)=>n>32?ZI(e,t,n):GI(e,t,n);function cM(e,t=24){const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let s=0;s<10;s++)n[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],d=J6(c,u,1)^n[a],f=e4(c,u,1)^n[a+1];for(let h=0;h<50;h+=10)e[s+h]^=d,e[s+h+1]^=f}let i=e[2],o=e[3];for(let s=0;s<24;s++){const a=U9[s],l=J6(i,o,a),c=e4(i,o,a),u=B9[s];i=e[u],o=e[u+1],e[u]=l,e[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}e[0]^=aM[r],e[1]^=lM[r]}n.fill(0)}class z2 extends eM{constructor(t,n,r,i=!1,o=24){if(super(),this.blockLen=t,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Q6(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=YI(this.state)}keccak(){cM(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){Y6(this);const{blockLen:n,state:r}=this;t=F9(t);const i=t.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=t[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:n,pos:r,blockLen:i}=this;t[r]^=n,n&128&&r===i-1&&this.keccak(),t[i-1]^=128,this.keccak()}writeInto(t){Y6(this,!1),j9(t),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=t.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);t.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Q6(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(WI(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return t||(t=new z2(n,r,i,s,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=r,t.outputLen=i,t.enableXOF=s,t.destroyed=this.destroyed,t}}const uM=(e,t,n)=>tM(()=>new z2(t,e,n)),dM=uM(1,136,256/8);function Cn(e,t){const n=t||"hex",r=dM(di(e,{strict:!1})?Qo(e):e);return n==="bytes"?r:Xi(r)}const fM=e=>Cn(Qo(e)),W2=e=>fM(zI(e));function Ft(e,t,n,{strict:r}={}){return di(e,{strict:!1})?pM(e,t,n,{strict:r}):hM(e,t,n,{strict:r})}function W9(e,t){if(typeof t=="number"&&t>0&&t>Vt(e)-1)throw new P9({offset:t,position:"start",size:Vt(e)})}function V9(e,t,n){if(typeof t=="number"&&typeof n=="number"&&Vt(e)!==n-t)throw new P9({offset:n,position:"end",size:Vt(e)})}function hM(e,t,n,{strict:r}={}){W9(e,t);const i=e.slice(t,n);return r&&V9(i,t,n),i}function pM(e,t,n,{strict:r}={}){W9(e,t);const i=`0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;return r&&V9(i,t,n),i}function sf(e,t){if(e.length!==t.length)throw new OI({expectedLength:e.length,givenLength:t.length});const n=mM({params:e,values:t}),r=H2(n);return r.length===0?"0x":r}function mM({params:e,values:t}){const n=[];for(let r=0;r<e.length;r++)n.push(V2({param:e[r],value:t[r]}));return n}function V2({param:e,value:t}){const n=Jp(e.type);if(n){const[r,i]=n;return yM(t,{length:r,param:{...e,type:i}})}if(e.type==="tuple")return CM(t,{param:e});if(e.type==="address")return gM(t);if(e.type==="bool")return wM(t);if(e.type.startsWith("uint")||e.type.startsWith("int")){const r=e.type.startsWith("int");return bM(t,{signed:r})}if(e.type.startsWith("bytes"))return vM(t,{param:e});if(e.type==="string")return xM(t);throw new MI(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function H2(e){let t=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?t+=32:t+=Vt(a)}const n=[],r=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?(n.push(Oe(t+i,{size:32})),r.push(a),i+=Vt(a)):n.push(a)}return Wi([...n,...r])}function gM(e){if(!zi(e))throw new od({address:e});return{dynamic:!1,encoded:Fo(e.toLowerCase())}}function yM(e,{length:t,param:n}){const r=t===null;if(!Array.isArray(e))throw new jI(e);if(!r&&e.length!==t)throw new AI({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let i=!1;const o=[];for(let s=0;s<e.length;s++){const a=V2({param:n,value:e[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=H2(o);if(r){const a=Oe(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?Wi([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:Wi(o.map(({encoded:s})=>s))}}function vM(e,{param:t}){const[,n]=t.type.split("bytes"),r=Vt(e);if(!n){let i=e;return r%32!==0&&(i=Fo(i,{dir:"right",size:Math.ceil((e.length-2)/2/32)*32})),{dynamic:!0,encoded:Wi([Fo(Oe(r,{size:32})),i])}}if(r!==parseInt(n))throw new DI({expectedSize:parseInt(n),value:e});return{dynamic:!1,encoded:Fo(e,{dir:"right"})}}function wM(e){return{dynamic:!1,encoded:Fo(D9(e))}}function bM(e,{signed:t}){return{dynamic:!1,encoded:Oe(e,{size:32,signed:t})}}function xM(e){const t=j2(e),n=Math.ceil(Vt(t)/32),r=[];for(let i=0;i<n;i++)r.push(Fo(Ft(t,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Wi([Fo(Oe(Vt(t),{size:32})),...r])}}function CM(e,{param:t}){let n=!1;const r=[];for(let i=0;i<t.components.length;i++){const o=t.components[i],s=Array.isArray(e)?i:o.name,a=V2({param:o,value:e[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?H2(r):Wi(r.map(({encoded:i})=>i))}}function Jp(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}const EM=e=>Cn(Qo(e)),q2=e=>Ft(EM(L9(e)),0,4);function af({abi:e,args:t=[],name:n}){const r=di(n,{strict:!1}),i=e.filter(o=>r?o.type==="function"?q2(o)===n:o.type==="event"?W2(o)===n:!1:"name"in o&&o.name===n);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!t||t.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==t.length)continue;if(t.every((a,l)=>{const c="inputs"in o&&o.inputs[l];return c?pv(a,c):!1}))return o}return i[0]}}function pv(e,t){const n=typeof e,r=t.type;switch(r){case"address":return zi(e);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in t?Object.values(t.components).every((i,o)=>pv(Object.values(e)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(i=>pv(i,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function lf({abi:e,eventName:t,args:n}){var a;let r=e[0];if(t&&(r=af({abi:e,args:n,name:t}),!r))throw new Z6(t,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new Z6(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=_a(r),o=W2(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(u=>n[u.name]))??[]:[];c.length>0&&(s=(l==null?void 0:l.map((u,d)=>Array.isArray(c[d])?c[d].map((f,h)=>t4({param:u,value:c[d][h]})):c[d]?t4({param:u,value:c[d]}):null))??[])}return[o,...s]}function t4({param:e,value:t}){if(e.type==="string"||e.type==="bytes")return Cn(Qo(t));if(e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/))throw new BI(e.type);return sf([e],[t])}function e1(e,{method:t}){var r,i;const n={};return e.transport.type==="fallback"&&((i=(r=e.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&t===o&&(n[s]=l.request)})),o=>n[o]||e.request}async function G2(e,{address:t,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=e1(e,{method:"eth_newFilter"}),c=i?lf({abi:n,args:r,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?Oe(o):o,toBlock:typeof a=="bigint"?Oe(a):a,topics:c}]});return{abi:n,args:r,eventName:i,id:u,request:l(u),strict:s,type:"event"}}function Tr(e){return typeof e=="string"?{address:e,type:"json-rpc"}:e}function ds({abi:e,args:t,functionName:n}){let r=e[0];if(n&&(r=af({abi:e,args:t,name:n}),!r))throw new O0(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new O0(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=_a(r),o=q2(i),s="inputs"in r&&r.inputs?sf(r.inputs,t??[]):void 0;return B2([o,s??"0x"])}const H9={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},SM={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},_M={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function K2(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),r=Cn(Oi(n),"bytes"),i=(t?n.substring(`${t}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function Ur(e,t){if(!zi(e))throw new od({address:e});return K2(e,t)}function t1(e,t){if(t==="0x"&&e.length>0)throw new Xp;if(Vt(t)&&Vt(t)<32)throw new U2({data:t,params:e,size:Vt(t)});return TM({data:t,params:e})}function TM({data:e,params:t}){const n=[];let r=0;for(let i=0;i<t.length;i++){if(r>=Vt(e))throw new U2({data:e,params:t,size:Vt(e)});const o=t[i],{consumed:s,value:a}=El({data:e,param:o,position:r});n.push(a),r+=s}return n}function El({data:e,param:t,position:n}){const r=Jp(t.type);if(r){const[o,s]=r;return PM(e,{length:o,param:{...t,type:s},position:n})}if(t.type==="tuple")return RM(e,{param:t,position:n});if(t.type==="string")return kM(e,{position:n});if(t.type.startsWith("bytes"))return DM(e,{param:t,position:n});const i=Ft(e,n,n+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return OM(i,{param:t});if(t.type==="address")return $M(i);if(t.type==="bool")return AM(i);throw new LI(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function $M(e){return{consumed:32,value:K2(Ft(e,-20))}}function PM(e,{param:t,length:n,position:r}){if(!n){const s=yn(Ft(e,r,r+32,{strict:!0})),a=yn(Ft(e,s,s+32,{strict:!0}));let l=0;const c=[];for(let u=0;u<a;++u){const d=El({data:Ft(e,s+32),param:t,position:l});l+=d.consumed,c.push(d.value)}return{value:c,consumed:32}}if(k0(t)){const s=Jp(t.type),a=!(s!=null&&s[0]);let l=0;const c=[];for(let u=0;u<n;++u){const d=yn(Ft(e,r,r+32,{strict:!0})),f=El({data:Ft(e,d),param:t,position:a?l:u*32});l+=f.consumed,c.push(f.value)}return{value:c,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=El({data:e,param:t,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function AM(e){return{consumed:32,value:pI(e)}}function DM(e,{param:t,position:n}){const[r,i]=t.type.split("bytes");if(!i){const s=yn(Ft(e,n,n+32,{strict:!0})),a=yn(Ft(e,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:Ft(e,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:Ft(e,n,n+parseInt(i),{strict:!0})}}function OM(e,{param:t}){const n=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?Kp(e,{signed:n}):yn(e,{signed:n})}}function kM(e,{position:t}){const n=yn(Ft(e,t,t+32,{strict:!0})),r=yn(Ft(e,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:O9(Qs(Ft(e,n+32,n+32+r,{strict:!0})))}}function RM(e,{param:t,position:n}){const r=t.components.length===0||t.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(k0(t)){const s=yn(Ft(e,n,n+32,{strict:!0}));for(let a=0;a<t.components.length;++a){const l=t.components[a],c=El({data:Ft(e,s),param:l,position:o});o+=c.consumed,i[r?a:l==null?void 0:l.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<t.components.length;++s){const a=t.components[s],l=El({data:e,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function k0(e){var r;const{type:t}=e;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return(r=e.components)==null?void 0:r.some(k0);const n=Jp(e.type);return!!(n&&k0({...e,type:n[1]}))}function NM({abi:e,data:t}){const n=Ft(t,0,4);if(n==="0x")throw new Xp;const i=[...e||[],SM,_M].find(o=>o.type==="error"&&n===q2(_a(o)));if(!i)throw new M9(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?t1(i.inputs,Ft(t,4)):void 0,errorName:i.name}}const Sn=(e,t,n)=>JSON.stringify(e,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof t=="function"?t(r,o):o},n);function q9({abiItem:e,args:t,includeFunctionName:n=!0,includeName:r=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof t[o]=="object"?Sn(t[o]):t[o]}`).join(", ")})`}function Z2(e,t="wei"){return sd(e,bI[t])}function cf(e){const t=Object.entries(e).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=t.reduce((r,[i])=>Math.max(r,i.length),0);return t.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class IM extends re{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class MM extends re{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",cf(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class LM extends re{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f}){var p;const h=cf({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:d,value:typeof f<"u"&&`${Z2(f)} ${((p=i==null?void 0:i.nativeCurrency)==null?void 0:p.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Bn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Bn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${Bn(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}}class G9 extends re{constructor({blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),t&&o!==void 0&&(s=`Transaction at block hash "${t}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class K9 extends re{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class jM extends re{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class Z9 extends re{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f}){var m;const h=n?Tr(n):void 0,p=cf({from:h==null?void 0:h.address,to:d,value:typeof f<"u"&&`${Z2(f)} ${((m=i==null?void 0:i.nativeCurrency)==null?void 0:m.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Bn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Bn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${Bn(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",p].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}}class Q2 extends re{constructor(t,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=af({abi:n,args:r,name:s}),c=l?q9({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?_a(l,{includeName:!0}):void 0,d=cf({address:i&&rI(i),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(t.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:t,docsPath:o,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=t,this.contractAddress=i,this.functionName=s,this.sender=a}}class mv extends re{constructor({abi:t,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=NM({abi:t,data:n});const{abiItem:u,errorName:d,args:f}=s;if(d==="Error")l=f[0];else if(d==="Panic"){const[h]=f;l=H9[h]}else{const h=u?_a(u,{includeName:!0}):void 0,p=u&&f?q9({abiItem:u,args:f,includeFunctionName:!1,includeName:!1}):void 0;a=[h?`Error: ${h}`:"",p&&p!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${p}`:""]}}catch(u){o=u}else i&&(l=i);let c;o instanceof M9&&(c=o.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class FM extends re{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Y2 extends re{constructor({data:t,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}class Su extends re{constructor({body:t,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${Gp(o)}`,t&&`Request body: ${Sn(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=r,this.status=i,this.url=o}}class BM extends re{constructor({body:t,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Gp(r)}`,`Request body: ${Sn(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class X2 extends re{constructor({body:t,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Gp(r)}`,`Request body: ${Sn(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class gv extends re{constructor({body:t,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Gp(n)}`,`Request body: ${Sn(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const UM=-1;class Wn extends re{constructor(t,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:t,docsPath:r,metaMessages:i||(t==null?void 0:t.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof X2?t.code:n??UM}}class hc extends Wn{constructor(t,n){super(t,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class ad extends Wn{constructor(t){super(t,{code:ad.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(ad,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class ld extends Wn{constructor(t){super(t,{code:ld.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(ld,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class cd extends Wn{constructor(t){super(t,{code:cd.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(cd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class ud extends Wn{constructor(t){super(t,{code:ud.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(ud,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Nl extends Wn{constructor(t){super(t,{code:Nl.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Nl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class da extends Wn{constructor(t){super(t,{code:da.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(da,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class dd extends Wn{constructor(t){super(t,{code:dd.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(dd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Il extends Wn{constructor(t){super(t,{code:Il.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Il,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class fd extends Wn{constructor(t){super(t,{code:fd.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(fd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class hd extends Wn{constructor(t){super(t,{code:hd.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(hd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class pd extends Wn{constructor(t){super(t,{code:pd.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(pd,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class md extends Wn{constructor(t){super(t,{code:md.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(md,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class In extends hc{constructor(t){super(t,{code:In.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(In,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class gd extends hc{constructor(t){super(t,{code:gd.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(gd,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class yd extends hc{constructor(t){super(t,{code:yd.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(yd,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class vd extends hc{constructor(t){super(t,{code:vd.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(vd,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class wd extends hc{constructor(t){super(t,{code:wd.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(wd,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Vi extends hc{constructor(t){super(t,{code:Vi.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Vi,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class zM extends Wn{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const WM=3;function bd(e,{abi:t,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=e instanceof Y2?e:e instanceof re?e.walk(f=>"data"in f)||e.walk():{},d=e instanceof Xp?new FM({functionName:o}):[WM,Nl.code].includes(a)&&(l||c||u)?new mv({abi:t,data:typeof l=="object"?l.data:l,functionName:o,message:u??c}):e;return new Q2(d,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class pc extends re{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class VM extends re{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f}){var p;const h=cf({from:n==null?void 0:n.address,to:d,value:typeof f<"u"&&`${Z2(f)} ${((p=i==null?void 0:i.nativeCurrency)==null?void 0:p.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Bn(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${Bn(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${Bn(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}}function J2(e,t){const n=(e.details||"").toLowerCase(),r=e.walk(i=>i.code===ul.code);return r instanceof re?new ul({cause:e,message:r.details}):ul.nodeMessage.test(n)?new ul({cause:e,message:e.details}):A0.nodeMessage.test(n)?new A0({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):ov.nodeMessage.test(n)?new ov({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):sv.nodeMessage.test(n)?new sv({cause:e,nonce:t==null?void 0:t.nonce}):av.nodeMessage.test(n)?new av({cause:e,nonce:t==null?void 0:t.nonce}):lv.nodeMessage.test(n)?new lv({cause:e,nonce:t==null?void 0:t.nonce}):cv.nodeMessage.test(n)?new cv({cause:e}):uv.nodeMessage.test(n)?new uv({cause:e,gas:t==null?void 0:t.gas}):dv.nodeMessage.test(n)?new dv({cause:e,gas:t==null?void 0:t.gas}):fv.nodeMessage.test(n)?new fv({cause:e}):D0.nodeMessage.test(n)?new D0({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas,maxPriorityFeePerGas:t==null?void 0:t.maxPriorityFeePerGas}):new Qp({cause:e})}function HM(e,{docsPath:t,...n}){const r=(()=>{const i=J2(e,n);return i instanceof Qp?e:i})();return new VM(r,{docsPath:t,...n})}function eb(e,{format:t}){if(!t)return{};const n={};function r(o){const s=Object.keys(o);for(const a of s)a in e&&(n[a]=e[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&r(o[a])}const i=t(e||{});return r(i),n}function uf(e){const{account:t,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=e,s=t?Tr(t):void 0;if(s&&!zi(s.address))throw new od({address:s.address});if(o&&!zi(o))throw new od({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new IM;if(r&&r>2n**256n-1n)throw new A0({maxFeePerGas:r});if(i&&r&&i>r)throw new D0({maxFeePerGas:r,maxPriorityFeePerGas:i})}class qM extends re{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class tb extends re{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class GM extends re{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Bn(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class KM extends re{constructor({blockHash:t,blockNumber:n}){let r="Block";t&&(r=`Block at hash "${t}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function Yo(e,{blockHash:t,blockNumber:n,blockTag:r,includeTransactions:i}={}){var u,d,f;const o=r??"latest",s=i??!1,a=n!==void 0?Oe(n):void 0;let l=null;if(t?l=await e.request({method:"eth_getBlockByHash",params:[t,s]}):l=await e.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new KM({blockHash:t,blockNumber:n});return(((f=(d=(u=e.chain)==null?void 0:u.formatters)==null?void 0:d.block)==null?void 0:f.format)||N9)(l)}async function nb(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function ZM(e,t){return Q9(e,t)}async function Q9(e,t){var o,s,a;const{block:n,chain:r=e.chain,request:i}=t||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await ge(e,Yo,"getBlock")({});return r.fees.defaultPriorityFee({block:l,client:e,request:i})}else if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await e.request({method:"eth_maxPriorityFeePerGas"});return Kp(l)}catch{const[l,c]=await Promise.all([n?Promise.resolve(n):ge(e,Yo,"getBlock")({}),ge(e,nb,"getGasPrice")({})]);if(typeof l.baseFeePerGas!="bigint")throw new tb;const u=c-l.baseFeePerGas;return u<0n?0n:u}}async function QM(e,t){return yv(e,t)}async function yv(e,t){var f,h;const{block:n,chain:r=e.chain,request:i,type:o="eip1559"}=t||{},s=await(async()=>{var p,m;return typeof((p=r==null?void 0:r.fees)==null?void 0:p.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):((m=r==null?void 0:r.fees)==null?void 0:m.baseFeeMultiplier)??1.2})();if(s<1)throw new qM;const l=10**(((f=s.toString().split(".")[1])==null?void 0:f.length)??0),c=p=>p*BigInt(Math.ceil(s*l))/BigInt(l),u=n||await ge(e,Yo,"getBlock")({});if(typeof((h=r==null?void 0:r.fees)==null?void 0:h.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new tb;const p=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await Q9(e,{block:u,chain:r,request:i}),m=c(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??m+p,maxPriorityFeePerGas:p}}return{gasPrice:(i==null?void 0:i.gasPrice)??c(await ge(e,nb,"getGasPrice")({}))}}async function Y9(e,{address:t,blockTag:n="latest",blockNumber:r}){const i=await e.request({method:"eth_getTransactionCount",params:[t,r?Oe(r):n]});return yn(i)}function YM(e){if(e.type)return e.type;if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new MM({transaction:e})}async function n1(e,t){const{account:n=e.account,chain:r,gas:i,nonce:o,type:s}=t;if(!n)throw new pc;const a=Tr(n),l=await ge(e,Yo,"getBlock")({blockTag:"latest"}),c={...t,from:a.address};if(typeof o>"u"&&(c.nonce=await ge(e,Y9,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{c.type=YM(c)}catch{c.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(c.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:d}=await yv(e,{block:l,chain:r,request:c});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<d)throw new GM({maxPriorityFeePerGas:d});c.maxPriorityFeePerGas=d,c.maxFeePerGas=u}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new tb;const{gasPrice:u}=await yv(e,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=u}return typeof i>"u"&&(c.gas=await ge(e,rb,"estimateGas")({...c,account:{address:a.address,type:"json-rpc"}})),uf(c),c}async function rb(e,t){var i,o,s;const n=t.account??e.account;if(!n)throw new pc({docsPath:"/docs/actions/public/estimateGas"});const r=Tr(n);try{const{accessList:a,blockNumber:l,blockTag:c,data:u,gas:d,gasPrice:f,maxFeePerGas:h,maxPriorityFeePerGas:p,nonce:m,to:v,value:b,...y}=r.type==="local"?await n1(e,t):t,w=(l?Oe(l):void 0)||c;uf(t);const _=(s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,g=(_||Zp)({...eb(y,{format:_}),from:r.address,accessList:a,data:u,gas:d,gasPrice:f,maxFeePerGas:h,maxPriorityFeePerGas:p,nonce:m,to:v,value:b}),T=await e.request({method:"eth_estimateGas",params:w?[g,w]:[g]});return BigInt(T)}catch(a){throw HM(a,{...t,account:r,chain:e.chain})}}async function X9(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=ds({abi:t,args:r,functionName:i});try{return await ge(e,rb,"estimateGas")({data:s,to:n,...o})}catch(a){const l=o.account?Tr(o.account):void 0;throw bd(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const n4="/docs/contract/decodeEventLog";function df({abi:e,data:t,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new kI({docsPath:n4});const a=e.find(p=>p.type==="event"&&o===W2(_a(p)));if(!(a&&"name"in a)||a.type!=="event")throw new RI(o,{docsPath:n4});const{name:l,inputs:c}=a,u=c==null?void 0:c.some(p=>!("name"in p&&p.name));let d=u?[]:{};const f=c.filter(p=>"indexed"in p&&p.indexed);for(let p=0;p<f.length;p++){const m=f[p],v=s[p];if(!v)throw new fc({abiItem:a,param:m});d[m.name||p]=XM({param:m,value:v})}const h=c.filter(p=>!("indexed"in p&&p.indexed));if(h.length>0){if(t&&t!=="0x")try{const p=t1(h,t);if(p)if(u)d=[...d,...p];else for(let m=0;m<h.length;m++)d[h[m].name]=p[m]}catch(p){if(i)throw p instanceof U2?new ua({abiItem:a,data:p.data,params:p.params,size:p.size}):p}else if(i)throw new ua({abiItem:a,data:"0x",params:h,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function XM({param:e,value:t}){return e.type==="string"||e.type==="bytes"||e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(t1([e],t)||[])[0]}async function ib(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const c=l??!1,u=s??(o?[o]:void 0);let d=[];u&&(d=[u.flatMap(h=>lf({abi:[h],eventName:h.name,args:a}))],o&&(d=d[0]));let f;return n?f=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:n}]}):f=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:typeof r=="bigint"?Oe(r):r,toBlock:typeof i=="bigint"?Oe(i):i}]}),f.map(h=>{var p;try{const{eventName:m,args:v}=u?df({abi:u,data:h.data,topics:h.topics,strict:c}):{eventName:void 0,args:void 0};return Wr(h,{args:v,eventName:m})}catch(m){let v,b;if(m instanceof ua||m instanceof fc){if(c)return;v=m.abiItem.name,b=(p=m.abiItem.inputs)==null?void 0:p.some(y=>!("name"in y&&y.name))}return Wr(h,{args:b?[]:{},eventName:v})}}).filter(Boolean)}async function ob(e,{abi:t,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const c=o?af({abi:t,name:o}):void 0,u=c?void 0:t.filter(d=>d.type==="event");return ge(e,ib,"getLogs")({address:n,args:r,blockHash:i,event:c,events:u,fromBlock:s,toBlock:a,strict:l})}const jm="/docs/contract/decodeFunctionResult";function mc({abi:e,args:t,functionName:n,data:r}){let i=e[0];if(n&&(i=af({abi:e,args:t,name:n}),!i))throw new O0(n,{docsPath:jm});if(i.type!=="function")throw new O0(void 0,{docsPath:jm});if(!i.outputs)throw new NI(i.name,{docsPath:jm});const o=t1(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const JM="modulepreload",eL=function(e){return"/"+e},r4={},Ml=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");i=Promise.all(n.map(s=>{if(s=eL(s),s in r4)return;r4[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":JM,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},vv=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],J9=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],eS=[...J9,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],tL=[...J9,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],i4=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],o4=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],nL=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],rL="0x82ad56cb";function gc({blockNumber:e,chain:t,contract:n}){var i;const r=(i=t==null?void 0:t.contracts)==null?void 0:i[n];if(!r)throw new iv({chain:t,contract:{name:n}});if(e&&r.blockCreated&&r.blockCreated>e)throw new iv({blockNumber:e,chain:t,contract:{name:n,blockCreated:r.blockCreated}});return r.address}function iL(e,{docsPath:t,...n}){const r=(()=>{const i=J2(e,n);return i instanceof Qp?e:i})();return new Z9(r,{docsPath:t,...n})}const Fm=new Map;function sb({fn:e,id:t,shouldSplitBatch:n,wait:r=0,sort:i}){const o=async()=>{const u=l();s();const d=u.map(({args:f})=>f);d.length!==0&&e(d).then(f=>{var h;i&&Array.isArray(f)&&f.sort(i);for(let p=0;p<u.length;p++){const{pendingPromise:m}=u[p];(h=m.resolve)==null||h.call(m,[f[p],f])}}).catch(f=>{var h;for(let p=0;p<u.length;p++){const{pendingPromise:m}=u[p];(h=m.reject)==null||h.call(m,f)}})},s=()=>Fm.delete(t),a=()=>l().map(({args:u})=>u),l=()=>Fm.get(t)||[],c=u=>Fm.set(t,[...l(),u]);return{flush:s,async schedule(u){const d={},f=new Promise((m,v)=>{d.resolve=m,d.reject=v});return(n==null?void 0:n([...a(),u]))&&o(),l().length>0?(c({args:u,pendingPromise:d}),f):(c({args:u,pendingPromise:d}),setTimeout(o,r),f)}}}async function r1(e,t){var b,y,x,w;const{account:n=e.account,batch:r=!!((b=e.batch)!=null&&b.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:f,to:h,value:p,...m}=t,v=n?Tr(n):void 0;try{uf(t);const $=(i?Oe(i):void 0)||o,g=(w=(x=(y=e.chain)==null?void 0:y.formatters)==null?void 0:x.transactionRequest)==null?void 0:w.format,D=(g||Zp)({...eb(m,{format:g}),from:v==null?void 0:v.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:f,to:h,value:p});if(r&&oL({request:D}))try{return await sL(e,{...D,blockNumber:i,blockTag:o})}catch(I){if(!(I instanceof I9)&&!(I instanceof iv))throw I}const k=await e.request({method:"eth_call",params:$?[D,$]:[D]});return k==="0x"?{data:void 0}:{data:k}}catch(_){const $=aL(_),{offchainLookup:g,offchainLookupSignature:T}=await Ml(()=>import("./ccip-vzIOq5Cy.js"),__vite__mapDeps([]));if(($==null?void 0:$.slice(0,10))===T&&h)return{data:await g(e,{data:$,to:h})};throw iL(_,{...t,account:v,chain:e.chain})}}function oL({request:e}){const{data:t,to:n,...r}=e;return!(!t||t.startsWith(rL)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function sL(e,t){var m;const{batchSize:n=1024,wait:r=0}=typeof((m=e.batch)==null?void 0:m.multicall)=="object"?e.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=t;let c=a;if(!c){if(!e.chain)throw new I9;c=gc({blockNumber:i,chain:e.chain,contract:"multicall3"})}const d=(i?Oe(i):void 0)||o,{schedule:f}=sb({id:`${e.uid}.${d}`,wait:r,shouldSplitBatch(v){return v.reduce((y,{data:x})=>y+(x.length-2),0)>n*2},fn:async v=>{const b=v.map(w=>({allowFailure:!0,callData:w.data,target:w.to})),y=ds({abi:vv,args:[b],functionName:"aggregate3"}),x=await e.request({method:"eth_call",params:[{data:y,to:c},d]});return mc({abi:vv,args:[b],functionName:"aggregate3",data:x||"0x"})}}),[{returnData:h,success:p}]=await f({data:s,to:l});if(!p)throw new Y2({data:h});return h==="0x"?{data:void 0}:{data:h}}function aL(e){if(!(e instanceof re))return;const t=e.walk();return typeof t.data=="object"?t.data.data:t.data}async function Hi(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=ds({abi:t,args:r,functionName:i});try{const{data:a}=await ge(e,r1,"call")({data:s,to:n,...o});return mc({abi:t,args:r,functionName:i,data:a||"0x"})}catch(a){throw bd(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function tS(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?Tr(s.account):void 0,l=ds({abi:t,args:r,functionName:o});try{const{data:c}=await ge(e,r1,"call")({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:mc({abi:t,args:r,functionName:o,data:c||"0x"}),request:{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(c){throw bd(c,{abi:t,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const Bm=new Map,s4=new Map;let lL=0;function yc(e,t,n){const r=++lL,i=()=>Bm.get(e)||[],o=()=>{const u=i();Bm.set(e,u.filter(d=>d.id!==r))},s=()=>{const u=s4.get(e);i().length===1&&u&&u(),o()},a=i();if(Bm.set(e,[...a,{id:r,fns:t}]),a&&a.length>0)return s;const l={};for(const u in t)l[u]=(...d)=>{var h,p;const f=i();if(f.length!==0)for(const m of f)(p=(h=m.fns)[u])==null||p.call(h,...d)};const c=n(l);return typeof c=="function"&&s4.set(e,c),s}async function R0(e){return new Promise(t=>setTimeout(t,e))}function ff(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;t&&(a=await e({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await R0(l);const c=async()=>{i&&(await e({unpoll:o}),await R0(r),c())};c()})(),o}const cL=new Map,uL=new Map;function dL(e){const t=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=t(e,cL),r=t(e,uL);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function fL(e,{cacheKey:t,cacheTime:n=1/0}){const r=dL(t),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=e(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const hL=e=>`blockNumber.${e}`;async function hf(e,{cacheTime:t=e.cacheTime,maxAge:n}={}){const r=await fL(()=>e.request({method:"eth_blockNumber"}),{cacheKey:hL(e.uid),cacheTime:n??t});return BigInt(r)}async function i1(e,{filter:t}){const n="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in t&&t.abi?df({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Wr(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof ua||s instanceof fc){if("strict"in t&&t.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return Wr(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function o1(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function nS(e,{abi:t,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){return(typeof l<"u"?l:e.transport.type!=="webSocket")?(()=>{const p=Sn(["watchContractEvent",n,r,i,e.uid,o,c]),m=u??!1;return yc(p,{onLogs:a,onError:s},v=>{let b,y,x=!1;const w=ff(async()=>{var _;if(!x){try{y=await ge(e,G2,"createContractEventFilter")({abi:t,address:n,args:r,eventName:o,strict:m})}catch{}x=!0;return}try{let $;if(y)$=await ge(e,i1,"getFilterChanges")({filter:y});else{const g=await ge(e,hf,"getBlockNumber")({});b&&b!==g?$=await ge(e,ob,"getContractEvents")({abi:t,address:n,args:r,eventName:o,fromBlock:b+1n,toBlock:g,strict:m}):$=[],b=g}if($.length===0)return;if(i)v.onLogs($);else for(const g of $)v.onLogs([g])}catch($){y&&$ instanceof da&&(x=!1),(_=v.onError)==null||_.call(v,$)}},{emitOnBegin:!0,interval:c});return async()=>{y&&await ge(e,o1,"uninstallFilter")({filter:y}),w()}})})():(()=>{let p=!0,m=()=>p=!1;return(async()=>{try{const v=o?lf({abi:t,eventName:o,args:r}):[],{unsubscribe:b}=await e.transport.subscribe({params:["logs",{address:n,topics:v}],onData(y){var w;if(!p)return;const x=y.result;try{const{eventName:_,args:$}=df({abi:t,data:x.data,topics:x.topics,strict:u}),g=Wr(x,{args:$,eventName:_});a([g])}catch(_){let $,g;if(_ instanceof ua||_ instanceof fc){if(u)return;$=_.abiItem.name,g=(w=_.abiItem.inputs)==null?void 0:w.some(D=>!("name"in D&&D.name))}const T=Wr(x,{args:g?[]:{},eventName:$});a([T])}},onError(y){s==null||s(y)}});m=b,p||m()}catch(v){s==null||s(v)}})(),m})()}function rS({chain:e,currentChainId:t}){if(!e)throw new wI;if(t!==e.id)throw new vI({chain:e,currentChainId:t})}function pL(e,{docsPath:t,...n}){const r=(()=>{const i=J2(e,n);return i instanceof Qp?e:i})();return new LM(r,{docsPath:t,...n})}async function xd(e){const t=await e.request({method:"eth_chainId"});return yn(t)}async function ab(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function lb(e,t){var m,v,b,y;const{account:n=e.account,chain:r=e.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f,...h}=t;if(!n)throw new pc({docsPath:"/docs/actions/wallet/sendTransaction"});const p=Tr(n);try{uf(t);let x;if(r!==null&&(x=await ge(e,xd,"getChainId")({}),rS({currentChainId:x,chain:r})),p.type==="local"){const g=await ge(e,n1,"prepareTransactionRequest")({account:p,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f,...h});x||(x=await ge(e,xd,"getChainId")({}));const T=(m=r==null?void 0:r.serializers)==null?void 0:m.transaction,D=await p.signTransaction({...g,chainId:x},{serializer:T});return await ge(e,ab,"sendRawTransaction")({serializedTransaction:D})}const w=(y=(b=(v=e.chain)==null?void 0:v.formatters)==null?void 0:b.transactionRequest)==null?void 0:y.format,$=(w||Zp)({...eb(h,{format:w}),accessList:i,data:o,from:p.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:f});return await e.request({method:"eth_sendTransaction",params:[$]})}catch(x){throw pL(x,{...t,account:p,chain:t.chain||void 0})}}async function iS(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=ds({abi:t,args:r,functionName:o});return await ge(e,lb,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}function Lh({abi:e,address:t,publicClient:n,walletClient:r}){const i=n!=null,o=r!=null,s={};let a=!1,l=!1,c=!1;for(const u of e)if(u.type==="function"?u.stateMutability==="view"||u.stateMutability==="pure"?a=!0:l=!0:u.type==="event"&&(c=!0),a&&l&&c)break;return i&&(a&&(s.read=new Proxy({},{get(u,d){return(...f)=>{const{args:h,options:p}=eh(f);return ge(n,Hi,"readContract")({abi:e,address:t,functionName:d,args:h,...p})}}})),l&&(s.simulate=new Proxy({},{get(u,d){return(...f)=>{const{args:h,options:p}=eh(f);return ge(n,tS,"simulateContract")({abi:e,address:t,functionName:d,args:h,...p})}}})),c&&(s.createEventFilter=new Proxy({},{get(u,d){return(...f)=>{const h=e.find(v=>v.type==="event"&&v.name===d),{args:p,options:m}=Um(f,h);return ge(n,G2,"createContractEventFilter")({abi:e,address:t,eventName:d,args:p,...m})}}}),s.getEvents=new Proxy({},{get(u,d){return(...f)=>{const h=e.find(v=>v.type==="event"&&v.name===d),{args:p,options:m}=Um(f,h);return ge(n,ob,"getContractEvents")({abi:e,address:t,eventName:d,args:p,...m})}}}),s.watchEvent=new Proxy({},{get(u,d){return(...f)=>{const h=e.find(v=>v.type==="event"&&v.name===d),{args:p,options:m}=Um(f,h);return ge(n,nS,"watchContractEvent")({abi:e,address:t,eventName:d,args:p,...m})}}}))),o&&l&&(s.write=new Proxy({},{get(u,d){return(...f)=>{const{args:h,options:p}=eh(f);return ge(r,iS,"writeContract")({abi:e,address:t,functionName:d,args:h,...p})}}})),(i||o)&&l&&(s.estimateGas=new Proxy({},{get(u,d){return(...f)=>{const{args:h,options:p}=eh(f);return ge(n??r,X9,"estimateContractGas")({abi:e,address:t,functionName:d,args:h,...p,account:p.account??r.account})}}})),s.address=t,s.abi=e,s}function eh(e){const t=e.length&&Array.isArray(e[0]),n=t?e[0]:[],r=(t?e[1]:e[0])??{};return{args:n,options:r}}function Um(e,t){let n=!1;Array.isArray(e[0])?n=!0:e.length===1?n=t.inputs.some(o=>o.indexed):e.length===2&&(n=!0);const r=n?e[0]:void 0,i=(n?e[1]:e[0])??{};return{args:r,options:i}}async function mL(e,{chain:t}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:Oe(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const wv=256;let th=wv,nh;function gL(e=11){if(!nh||th+e>wv*2){nh="",th=0;for(let t=0;t<wv;t++)nh+=(256+Math.random()*256|0).toString(16).substring(1)}return nh.substring(th,th+++e)}function oS(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=e,a=e.chain,l=e.account?Tr(e.account):void 0,{config:c,request:u,value:d}=e.transport({chain:a,pollingInterval:o}),f={...c,...d},h={account:l,batch:t,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:u,transport:f,type:s,uid:gL()};function p(m){return v=>{const b=v(m);for(const x in h)delete b[x];const y={...m,...b};return Object.assign(y,{extend:p(y)})}}return Object.assign(h,{extend:p(h)})}function sS(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof t=="function"?t({count:a,error:c}):t;u&&await R0(u),s({count:a+1})};try{const c=await e();i(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});o(c)}};s()})}const aS=e=>"code"in e?e.code!==-1&&e.code!==-32004&&e.code!==-32005&&e.code!==-32042&&e.code!==-32603:e instanceof Su&&e.status?e.status!==403&&e.status!==408&&e.status!==413&&e.status!==429&&e.status!==500&&e.status!==502&&e.status!==503&&e.status!==504:!1;function yL(e,{retryDelay:t=150,retryCount:n=3}={}){return async r=>sS(async()=>{try{return await e(r)}catch(i){const o=i;switch(o.code){case ad.code:throw new ad(o);case ld.code:throw new ld(o);case cd.code:throw new cd(o);case ud.code:throw new ud(o);case Nl.code:throw new Nl(o);case da.code:throw new da(o);case dd.code:throw new dd(o);case Il.code:throw new Il(o);case fd.code:throw new fd(o);case hd.code:throw new hd(o);case pd.code:throw new pd(o);case md.code:throw new md(o);case In.code:throw new In(o);case gd.code:throw new gd(o);case yd.code:throw new yd(o);case vd.code:throw new vd(o);case wd.code:throw new wd(o);case Vi.code:throw new Vi(o);case 5e3:throw new In(o);default:throw i instanceof re?i:new zM(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Su){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*t},retryCount:n,shouldRetry:({error:i})=>!aS(i)})}function s1({key:e,name:t,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:e,name:t,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:yL(n,{retryCount:r,retryDelay:i}),value:a}}function cb(e,t={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=t;return({retryCount:o})=>s1({key:n,name:r,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:i,type:"custom"})}function a4(e,t={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=t;return({chain:a,pollingInterval:l=4e3,timeout:c})=>{let u=e,d=()=>{};const f=s1({key:n,name:r,async request({method:h,params:p}){const m=async(v=0)=>{const b=u[v]({chain:a,retryCount:0,timeout:c});try{const y=await b.request({method:h,params:p});return d({method:h,params:p,response:y,transport:b,status:"success"}),y}catch(y){if(d({error:y,method:h,params:p,transport:b,status:"error"}),aS(y)||v===u.length-1)throw y;return m(v+1)}};return m()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:h=>d=h,transports:u.map(h=>h({chain:a,retryCount:0}))});if(i){const h=typeof i=="object"?i:{};vL({chain:a,interval:h.interval??l,onTransports:p=>u=p,sampleCount:h.sampleCount,timeout:h.timeout,transports:u,weights:h.weights})}return f}}function vL({chain:e,interval:t=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,c=[],u=async()=>{const d=await Promise.all(o.map(async p=>{const m=p({chain:e,retryCount:0,timeout:i}),v=Date.now();let b,y;try{await m.request({method:"net_listening"}),y=1}catch{y=0}finally{b=Date.now()}return{latency:b-v,success:y}}));c.push(d),c.length>r&&c.shift();const f=Math.max(...c.map(p=>Math.max(...p.map(({latency:m})=>m)))),h=o.map((p,m)=>{const v=c.map(_=>_[m].latency),y=1-v.reduce((_,$)=>_+$,0)/v.length/f,x=c.map(_=>_[m].success),w=x.reduce((_,$)=>_+$,0)/x.length;return w===0?[0,m]:[l*y+a*w,m]}).sort((p,m)=>m[0]-p[0]);n(h.map(([,p])=>o[p])),await R0(t),u()};u()}class lS extends re{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function wL(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const l4=wL();function cS(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(t)},n)),i(await e({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(t),o(a)}finally{clearTimeout(s)}})()})}let bv=0;async function bL(e,{body:t,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await cS(async({signal:u})=>await fetch(e,{...n,body:Array.isArray(t)?Sn(t.map(f=>({jsonrpc:"2.0",id:f.id??bv++,...f}))):Sn({jsonrpc:"2.0",id:t.id??bv++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new gv({body:t,url:e}),timeout:r,signal:!0});let c;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?c=await l.json():c=await l.text(),!l.ok)throw new Su({body:t,details:Sn(c.error)||l.statusText,headers:l.headers,status:l.status,url:e});return c}catch(l){throw l instanceof Su||l instanceof gv?l:new Su({body:t,details:l.message,url:e})}}const zm=new Map;async function Wm(e){let t=zm.get(e);if(t)return t;const{schedule:n}=sb({id:e,fn:async()=>{const o=new l4(e),s=new Map,a=new Map,l=({data:u})=>{const d=JSON.parse(u),f=d.method==="eth_subscription",h=f?d.params.subscription:d.id,p=f?a:s,m=p.get(h);m&&m({data:u}),f||p.delete(h)},c=()=>{zm.delete(e),o.removeEventListener("close",c),o.removeEventListener("message",l)};return o.addEventListener("close",c),o.addEventListener("message",l),o.readyState===l4.CONNECTING&&await new Promise((u,d)=>{o&&(o.onopen=u,o.onerror=d)}),t=Object.assign(o,{requests:s,subscriptions:a}),zm.set(e,t),[t]}}),[r,[i]]=await n();return i}function xL(e,{body:t,onResponse:n}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new BM({body:t,url:e.url,details:"Socket is closed."});const r=bv++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),t.method==="eth_subscribe"&&typeof s.result=="string"&&e.subscriptions.set(s.result,i),t.method==="eth_unsubscribe"&&e.subscriptions.delete((a=t.params)==null?void 0:a[0]))};return e.requests.set(r,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:r})),e}async function CL(e,{body:t,timeout:n=1e4}){return cS(()=>new Promise(r=>Sl.webSocket(e,{body:t,onResponse:r})),{errorInstance:new gv({body:t,url:e.url}),timeout:n})}const Sl={http:bL,webSocket:xL,webSocketAsync:CL};function uS(e,t={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=t;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:d=0}=typeof n=="object"?n:{},f=t.retryCount??l,h=c??t.timeout??1e4,p=e||(a==null?void 0:a.rpcUrls.default.http[0]);if(!p)throw new lS;return s1({key:i,name:o,async request({method:m,params:v}){const b={method:m,params:v},{schedule:y}=sb({id:`${e}`,wait:d,shouldSplitBatch($){return $.length>u},fn:$=>Sl.http(p,{body:$,fetchOptions:r,timeout:h}),sort:($,g)=>$.id-g.id}),x=async $=>n?y($):[await Sl.http(p,{body:$,fetchOptions:r,timeout:h})],[{error:w,result:_}]=await x(b);if(w)throw new X2({body:b,error:w,url:p});return _},retryCount:f,retryDelay:s,timeout:h,type:"http"},{fetchOptions:r,url:e})}}function ub(e,t){var r,i,o;if(!(e instanceof re))return!1;const n=e.walk(s=>s instanceof mv);return n instanceof mv?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&n.reason===H9[50]):!1}function dS(e){if(e.length!==66||e.indexOf("[")!==0||e.indexOf("]")!==65)return null;const t=`0x${e.slice(1,65)}`;return di(t)?t:null}function jh(e){let t=new Uint8Array(32).fill(0);if(!e)return id(t);const n=e.split(".");for(let r=n.length-1;r>=0;r-=1){const i=dS(n[r]),o=i?Qo(i):Cn(Oi(n[r]),"bytes");t=Cn(Wi([t,o]),"bytes")}return id(t)}function EL(e){return`[${e.slice(2)}]`}function SL(e){const t=new Uint8Array(32).fill(0);return e?dS(e)||Cn(Oi(e)):id(t)}function a1(e){const t=e.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);const n=new Uint8Array(Oi(t).byteLength+2);let r=0;const i=t.split(".");for(let o=0;o<i.length;o++){let s=Oi(i[o]);s.byteLength>255&&(s=Oi(EL(SL(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function _L(e,{blockNumber:t,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=gc({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=ds({abi:o4,functionName:"addr",...r!=null?{args:[jh(i),BigInt(r)]}:{args:[jh(i)]}}),l=await ge(e,Hi,"readContract")({address:s,abi:eS,functionName:"resolve",args:[Xi(a1(i)),a],blockNumber:t,blockTag:n});if(l[0]==="0x")return null;const c=mc({abi:o4,args:r!=null?[jh(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return c==="0x"||Qs(c)==="0x00"?null:c}catch(a){if(ub(a,"resolve"))return null;throw a}}class TL extends re{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Hc extends re{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class db extends re{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class $L extends re{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const PL=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,AL=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,DL=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,OL=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function kL(e){try{const t=await fetch(e,{method:"HEAD"});if(t.status===200){const n=t.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=e})}}function c4(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function fS({uri:e,gatewayUrls:t}){const n=DL.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};const r=c4(t==null?void 0:t.ipfs,"https://ipfs.io"),i=c4(t==null?void 0:t.arweave,"https://arweave.net"),o=e.match(PL),{protocol:s,subpath:a,target:l,subtarget:c=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||AL.test(e);if(e.startsWith("http")&&!u&&!d){let h=e;return t!=null&&t.arweave&&(h=e.replace(/https:\/\/arweave.net/g,t==null?void 0:t.arweave)),{uri:h,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let f=e.replace(OL,"");if(f.startsWith("<svg")&&(f=`data:image/svg+xml;base64,${btoa(f)}`),f.startsWith("data:")||f.startsWith("{"))return{uri:f,isOnChain:!0,isEncoded:!1};throw new db({uri:e})}function hS(e){if(typeof e!="object"||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new TL({data:e});return e.image||e.image_url||e.image_data}async function RL({gatewayUrls:e,uri:t}){try{const n=await fetch(t).then(i=>i.json());return await fb({gatewayUrls:e,uri:hS(n)})}catch{throw new db({uri:t})}}async function fb({gatewayUrls:e,uri:t}){const{uri:n,isOnChain:r}=fS({uri:t,gatewayUrls:e});if(r||await kL(n))return n;throw new db({uri:t})}function NL(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=t.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new Hc({reason:"Only EIP-155 supported"});if(!s)throw new Hc({reason:"Chain ID not found"});if(!l)throw new Hc({reason:"Contract address not found"});if(!i)throw new Hc({reason:"Token ID not found"});if(!a)throw new Hc({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function IL(e,{nft:t}){if(t.namespace==="erc721")return Hi(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return Hi(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new $L({namespace:t.namespace})}async function ML(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?LL(e,{gatewayUrls:t,record:n}):fb({uri:n,gatewayUrls:t})}async function LL(e,{gatewayUrls:t,record:n}){const r=NL(n),i=await IL(e,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=fS({uri:i,gatewayUrls:t});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const c=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(c);return fb({uri:hS(u),gatewayUrls:t})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),RL({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,l)})}async function pS(e,{blockNumber:t,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=gc({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=await ge(e,Hi,"readContract")({address:s,abi:eS,functionName:"resolve",args:[Xi(a1(r)),ds({abi:i4,functionName:"text",args:[jh(r),i]})],blockNumber:t,blockTag:n});if(a[0]==="0x")return null;const l=mc({abi:i4,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(ub(a,"resolve"))return null;throw a}}async function jL(e,{blockNumber:t,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await ge(e,pS,"getEnsText")({blockNumber:t,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await ML(e,{record:s,gatewayUrls:r})}catch{return null}}async function FL(e,{address:t,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=gc({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const s=`${t.toLowerCase().substring(2)}.addr.reverse`;try{return(await ge(e,Hi,"readContract")({address:o,abi:tL,functionName:"reverse",args:[Xi(a1(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(ub(a,"reverse"))return null;throw a}}async function BL(e,{blockNumber:t,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=gc({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[s]=await ge(e,Hi,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Xi(a1(r))],blockNumber:t,blockTag:n});return s}async function UL(e){const t=e1(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}async function mS(e,{address:t,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),c=e1(e,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(f=>lf({abi:[f],eventName:f.name,args:n}))],r&&(u=u[0]));const d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?Oe(o):o,toBlock:typeof a=="bigint"?Oe(a):a,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:c(d),strict:s,toBlock:a,type:"event"}}async function gS(e){const t=e1(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}async function zL(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n?Oe(n):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||r]});return BigInt(o)}async function WL(e,{blockHash:t,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?Oe(n):void 0;let o;return t?o=await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):o=await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),yn(o)}async function VL(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?Oe(n):void 0,o=await e.request({method:"eth_getCode",params:[t,i||r]});if(o!=="0x")return o}function HL(e){var t;return{baseFeePerGas:e.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:(t=e.reward)==null?void 0:t.map(n=>n.map(r=>BigInt(r)))}}async function qL(e,{blockCount:t,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?Oe(n):void 0,s=await e.request({method:"eth_feeHistory",params:[Oe(t),o||r,i]});return HL(s)}async function GL(e,{filter:t}){const n=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in t&&t.abi?df({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Wr(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof ua||s instanceof fc){if("strict"in t&&t.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return Wr(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const KL=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,ZL=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function QL({domain:e,message:t,primaryType:n,types:r}){const i=typeof e>"u"?{}:e,o={EIP712Domain:CS({domain:i}),...r};xS({domain:i,message:t,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(YL({domain:i,types:o})),n!=="EIP712Domain"&&s.push(yS({data:t,primaryType:n,types:o})),Cn(Wi(s))}function YL({domain:e,types:t}){return yS({data:e,primaryType:"EIP712Domain",types:t})}function yS({data:e,primaryType:t,types:n}){const r=vS({data:e,primaryType:t,types:n});return Cn(r)}function vS({data:e,primaryType:t,types:n}){const r=[{type:"bytes32"}],i=[XL({primaryType:t,types:n})];for(const o of n[t]){const[s,a]=bS({types:n,name:o.name,type:o.type,value:e[o.name]});r.push(s),i.push(a)}return sf(r,i)}function XL({primaryType:e,types:t}){const n=Xi(JL({primaryType:e,types:t}));return Cn(n)}function JL({primaryType:e,types:t}){let n="";const r=wS({primaryType:e,types:t});r.delete(e);const i=[e,...Array.from(r).sort()];for(const o of i)n+=`${o}(${t[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function wS({primaryType:e,types:t},n=new Set){const r=e.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||t[i]===void 0)return n;n.add(i);for(const o of t[i])wS({primaryType:o.type,types:t},n);return n}function bS({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:"bytes32"},Cn(vS({data:r,primaryType:n,types:e}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Cn(r)];if(n==="string")return[{type:"bytes32"},Cn(Xi(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>bS({name:t,type:i,types:e,value:s}));return[{type:"bytes32"},Cn(sf(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function xS({domain:e,message:t,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:c,type:u}=l,d=u,f=a[c],h=d.match(ZL);if(h&&(typeof f=="number"||typeof f=="bigint")){const[v,b,y]=h;Oe(f,{signed:b==="int",size:parseInt(y)/8})}if(d==="address"&&typeof f=="string"&&!zi(f))throw new od({address:f});const p=d.match(KL);if(p){const[v,b]=p;if(b&&Vt(f)!==parseInt(b))throw new II({expectedSize:parseInt(b),givenSize:Vt(f)})}const m=i[d];m&&o(m,f)}};if(i.EIP712Domain&&e&&o(i.EIP712Domain,e),n!=="EIP712Domain"){const s=i[n];o(s,t)}}function CS({domain:e}){return[typeof(e==null?void 0:e.name)=="string"&&{name:"name",type:"string"},(e==null?void 0:e.version)&&{name:"version",type:"string"},typeof(e==null?void 0:e.chainId)=="number"&&{name:"chainId",type:"uint256"},(e==null?void 0:e.verifyingContract)&&{name:"verifyingContract",type:"address"},(e==null?void 0:e.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const Vm="/docs/contract/encodeDeployData";function ES({abi:e,args:t,bytecode:n}){if(!t||t.length===0)return n;const r=e.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new PI({docsPath:Vm});if(!("inputs"in r))throw new K6({docsPath:Vm});if(!r.inputs||r.inputs.length===0)throw new K6({docsPath:Vm});const i=sf(r.inputs,t);return B2([n,i])}const ej=`Ethereum Signed Message:
`;function tj(e,t){const n=typeof e=="string"?Oi(e):e.raw instanceof Uint8Array?e.raw:Qo(e.raw),r=Oi(`${ej}${n.length}`);return Cn(Wi([r,n]),t)}function Hm(e,t){let[n,r="0"]=e.split(".");const i=n.startsWith("-");if(i&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),t===0)Math.round(+`.${r}`)===1&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>t){const[o,s,a]=[r.slice(0,t-1),r.slice(t-1,t),r.slice(t)],l=Math.round(+`${s}.${a}`);l>9?r=`${BigInt(o)+BigInt(1)}0`.padStart(o.length+1,"0"):r=`${o}${l}`,r.length>t&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,t)}else r=r.padEnd(t,"0");return BigInt(`${i?"-":""}${n}${r}`)}function nj(e){return e.map(t=>({...t,value:BigInt(t.value)}))}function rj(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?yn(e.nonce):void 0,storageProof:e.storageProof?nj(e.storageProof):void 0}}async function ij(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?Oe(n):void 0,a=await e.request({method:"eth_getProof",params:[t,i,s||o]});return rj(a)}async function oj(e,{address:t,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?Oe(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,o||r]})}async function hb(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){var u,d,f;const s=r||"latest",a=n!==void 0?Oe(n):void 0;let l=null;if(i?l=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,Oe(o)]}):(a||s)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,Oe(o)]})),!l)throw new G9({blockHash:t,blockNumber:n,blockTag:s,hash:i,index:o});return(((f=(d=(u=e.chain)==null?void 0:u.formatters)==null?void 0:d.transaction)==null?void 0:f.format)||R9)(l)}async function sj(e,{hash:t,transactionReceipt:n}){const[r,i]=await Promise.all([ge(e,hf,"getBlockNumber")({}),t?ge(e,hb,"getBlockNumber")({hash:t}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function xv(e,{hash:t}){var i,o,s;const n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new K9({hash:t});return(((s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||gI)(n)}async function aj(e,t){var m;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=t,l=r??(typeof((m=e.batch)==null?void 0:m.multicall)=="object"&&e.batch.multicall.batchSize||1024);let c=a;if(!c){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");c=gc({blockNumber:i,chain:e.chain,contract:"multicall3"})}const u=[[]];let d=0,f=0;for(let v=0;v<s.length;v++){const{abi:b,address:y,args:x,functionName:w}=s[v];try{const _=ds({abi:b,args:x,functionName:w});f+=(_.length-2)/2,l>0&&f>l&&u[d].length>0&&(d++,f=(_.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:_,target:y}]}catch(_){const $=bd(_,{abi:b,address:y,args:x,docsPath:"/docs/contract/multicall",functionName:w});if(!n)throw $;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:y}]}}const h=await Promise.allSettled(u.map(v=>ge(e,Hi,"readContract")({abi:vv,address:c,args:[v],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),p=[];for(let v=0;v<h.length;v++){const b=h[v];if(b.status==="rejected"){if(!n)throw b.reason;for(let x=0;x<u[v].length;x++)p.push({status:"failure",error:b.reason,result:void 0});continue}const y=b.value;for(let x=0;x<y.length;x++){const{returnData:w,success:_}=y[x],{callData:$}=u[v][x],{abi:g,address:T,functionName:D,args:k}=s[p.length];try{if($==="0x")throw new Xp;if(!_)throw new Y2({data:w});const I=mc({abi:g,args:k,data:w,functionName:D});p.push(n?{result:I,status:"success"}:I)}catch(I){const V=bd(I,{abi:g,address:T,args:k,docsPath:"/docs/contract/multicall",functionName:D});if(!n)throw V;p.push({error:V,result:void 0,status:"failure"})}}}if(p.length!==s.length)throw new re("multicall results mismatch");return p}const lj="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function cj(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function uj(e,t){const n=di(e)?Qo(e):e,r=di(t)?Qo(t):t;return cj(n,r)}async function SS(e,{address:t,hash:n,signature:r,...i}){const o=di(r)?r:Xi(r);try{const{data:s}=await ge(e,r1,"call")({data:ES({abi:nL,args:[t,n,o],bytecode:lj}),...i});return uj(s??"0x0","0x1")}catch(s){if(s instanceof Z9)return!1;throw s}}async function dj(e,{address:t,message:n,signature:r,...i}){const o=tj(n);return SS(e,{address:t,hash:o,signature:r,...i})}async function fj(e,{address:t,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=QL({message:r,primaryType:i,types:o,domain:s});return SS(e,{address:t,hash:l,signature:n,...a})}function _S(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=e.pollingInterval}){const a=typeof o<"u"?o:e.transport.type!=="webSocket";let l;return a?(()=>{const d=Sn(["watchBlockNumber",e.uid,t,n,s]);return yc(d,{onBlockNumber:r,onError:i},f=>ff(async()=>{var h;try{const p=await ge(e,hf,"getBlockNumber")({cacheTime:0});if(l){if(p===l)return;if(p-l>1&&n)for(let m=l+1n;m<p;m++)f.onBlockNumber(m,l),l=m}(!l||p>l)&&(f.onBlockNumber(p,l),l=p)}catch(p){(h=f.onError)==null||h.call(f,p)}},{emitOnBegin:t,interval:s}))})():(()=>{let d=!0,f=()=>d=!1;return(async()=>{try{const{unsubscribe:h}=await e.transport.subscribe({params:["newHeads"],onData(p){var v;if(!d)return;const m=Kp((v=p.result)==null?void 0:v.number);r(m,l),l=m},onError(p){i==null||i(p)}});f=h,d||f()}catch(h){i==null||i(h)}})(),f})()}async function hj(e,{confirmations:t=1,hash:n,onReplaced:r,pollingInterval:i=e.pollingInterval,timeout:o}){const s=Sn(["waitForTransactionReceipt",e.uid,n]);let a,l,c,u=!1;return new Promise((d,f)=>{o&&setTimeout(()=>f(new jM({hash:n})),o);const h=yc(s,{onReplaced:r,resolve:d,reject:f},p=>{const m=ge(e,_S,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(v){if(u)return;let b=v;const y=x=>{m(),x(),h()};try{if(c){if(t>1&&(!c.blockNumber||b-c.blockNumber+1n<t))return;y(()=>p.resolve(c));return}if(a||(u=!0,await sS(async()=>{a=await ge(e,hb,"getTransaction")({hash:n}),a.blockNumber&&(b=a.blockNumber)},{delay:({count:x})=>~~(1<<x)*200,retryCount:6}),u=!1),c=await ge(e,xv,"getTransactionReceipt")({hash:n}),t>1&&(!c.blockNumber||b-c.blockNumber+1n<t))return;y(()=>p.resolve(c))}catch(x){if(a&&(x instanceof G9||x instanceof K9))try{l=a;const _=(await ge(e,Yo,"getBlock")({blockNumber:b,includeTransactions:!0})).transactions.find(({from:g,nonce:T})=>g===l.from&&T===l.nonce);if(!_||(c=await ge(e,xv,"getTransactionReceipt")({hash:_.hash}),t>1&&(!c.blockNumber||b-c.blockNumber+1n<t)))return;let $="replaced";_.to===l.to&&_.value===l.value?$="repriced":_.from===_.to&&_.value===0n&&($="cancelled"),y(()=>{var g;(g=p.onReplaced)==null||g.call(p,{reason:$,replacedTransaction:l,transaction:_,transactionReceipt:c}),p.resolve(c)})}catch(w){y(()=>p.reject(w))}else y(()=>p.reject(x))}}})})})}function pj(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=e.pollingInterval}){const c=typeof a<"u"?a:e.transport.type!=="webSocket",u=s??!1;let d;return c?(()=>{const p=Sn(["watchBlocks",e.uid,n,r,u,l]);return yc(p,{onBlock:i,onError:o},m=>ff(async()=>{var v;try{const b=await ge(e,Yo,"getBlock")({blockTag:t,includeTransactions:u});if(b.number&&(d!=null&&d.number)){if(b.number===d.number)return;if(b.number-d.number>1&&n)for(let y=(d==null?void 0:d.number)+1n;y<b.number;y++){const x=await ge(e,Yo,"getBlock")({blockNumber:y,includeTransactions:u});m.onBlock(x,d),d=x}}(!(d!=null&&d.number)||t==="pending"&&!(b!=null&&b.number)||b.number&&b.number>d.number)&&(m.onBlock(b,d),d=b)}catch(b){(v=m.onError)==null||v.call(m,b)}},{emitOnBegin:r,interval:l}))})():(()=>{let p=!0,m=()=>p=!1;return(async()=>{try{const{unsubscribe:v}=await e.transport.subscribe({params:["newHeads"],onData(b){var w,_,$;if(!p)return;const x=((($=(_=(w=e.chain)==null?void 0:w.formatters)==null?void 0:_.block)==null?void 0:$.format)||N9)(b.result);i(x,d),d=x},onError(b){o==null||o(b)}});m=v,p||m()}catch(v){o==null||o(v)}})(),m})()}function mj(e,{address:t,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){const d=typeof l<"u"?l:e.transport.type!=="webSocket",f=u??!1;return d?(()=>{const m=Sn(["watchEvent",t,n,r,e.uid,i,c]);return yc(m,{onLogs:a,onError:s},v=>{let b,y,x=!1;const w=ff(async()=>{var _;if(!x){try{y=await ge(e,mS,"createEventFilter")({address:t,args:n,event:i,events:o,strict:f})}catch{}x=!0;return}try{let $;if(y)$=await ge(e,i1,"getFilterChanges")({filter:y});else{const g=await ge(e,hf,"getBlockNumber")({});b&&b!==g?$=await ge(e,ib,"getLogs")({address:t,args:n,event:i,events:o,fromBlock:b+1n,toBlock:g}):$=[],b=g}if($.length===0)return;if(r)v.onLogs($);else for(const g of $)v.onLogs([g])}catch($){y&&$ instanceof da&&(x=!1),(_=v.onError)==null||_.call(v,$)}},{emitOnBegin:!0,interval:c});return async()=>{y&&await ge(e,o1,"uninstallFilter")({filter:y}),w()}})})():(()=>{let m=!0,v=()=>m=!1;return(async()=>{try{const b=o??(i?[i]:void 0);let y=[];b&&(y=[b.flatMap(w=>lf({abi:[w],eventName:w.name,args:n}))],i&&(y=y[0]));const{unsubscribe:x}=await e.transport.subscribe({params:["logs",{address:t,topics:y}],onData(w){var $;if(!m)return;const _=w.result;try{const{eventName:g,args:T}=df({abi:b,data:_.data,topics:_.topics,strict:f}),D=Wr(_,{args:T,eventName:g});a([D])}catch(g){let T,D;if(g instanceof ua||g instanceof fc){if(u)return;T=g.abiItem.name,D=($=g.abiItem.inputs)==null?void 0:$.some(I=>!("name"in I&&I.name))}const k=Wr(_,{args:D?[]:{},eventName:T});a([k])}},onError(w){s==null||s(w)}});v=x,m||v()}catch(b){s==null||s(b)}})(),v})()}function gj(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=e.pollingInterval}){return(typeof i<"u"?i:e.transport.type!=="webSocket")?(()=>{const c=Sn(["watchPendingTransactions",e.uid,t,o]);return yc(c,{onTransactions:r,onError:n},u=>{let d;const f=ff(async()=>{var h;try{if(!d)try{d=await ge(e,gS,"createPendingTransactionFilter")({});return}catch(m){throw f(),m}const p=await ge(e,i1,"getFilterChanges")({filter:d});if(p.length===0)return;if(t)u.onTransactions(p);else for(const m of p)u.onTransactions([m])}catch(p){(h=u.onError)==null||h.call(u,p)}},{emitOnBegin:!0,interval:o});return async()=>{d&&await ge(e,o1,"uninstallFilter")({filter:d}),f()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{const{unsubscribe:d}=await e.transport.subscribe({params:["newPendingTransactions"],onData(f){if(!c)return;const h=f.result;r([h])},onError(f){n==null||n(f)}});u=d,c||u()}catch(d){n==null||n(d)}})(),u})()}function yj(e){return{call:t=>r1(e,t),createBlockFilter:()=>UL(e),createContractEventFilter:t=>G2(e,t),createEventFilter:t=>mS(e,t),createPendingTransactionFilter:()=>gS(e),estimateContractGas:t=>X9(e,t),estimateGas:t=>rb(e,t),getBalance:t=>zL(e,t),getBlock:t=>Yo(e,t),getBlockNumber:t=>hf(e,t),getBlockTransactionCount:t=>WL(e,t),getBytecode:t=>VL(e,t),getChainId:()=>xd(e),getContractEvents:t=>ob(e,t),getEnsAddress:t=>_L(e,t),getEnsAvatar:t=>jL(e,t),getEnsName:t=>FL(e,t),getEnsResolver:t=>BL(e,t),getEnsText:t=>pS(e,t),getFeeHistory:t=>qL(e,t),estimateFeesPerGas:t=>QM(e,t),getFilterChanges:t=>i1(e,t),getFilterLogs:t=>GL(e,t),getGasPrice:()=>nb(e),getLogs:t=>ib(e,t),getProof:t=>ij(e,t),estimateMaxPriorityFeePerGas:t=>ZM(e,t),getStorageAt:t=>oj(e,t),getTransaction:t=>hb(e,t),getTransactionConfirmations:t=>sj(e,t),getTransactionCount:t=>Y9(e,t),getTransactionReceipt:t=>xv(e,t),multicall:t=>aj(e,t),prepareTransactionRequest:t=>n1(e,t),readContract:t=>Hi(e,t),sendRawTransaction:t=>ab(e,t),simulateContract:t=>tS(e,t),verifyMessage:t=>dj(e,t),verifyTypedData:t=>fj(e,t),uninstallFilter:t=>o1(e,t),waitForTransactionReceipt:t=>hj(e,t),watchBlocks:t=>pj(e,t),watchBlockNumber:t=>_S(e,t),watchContractEvent:t=>nS(e,t),watchEvent:t=>mj(e,t),watchPendingTransactions:t=>gj(e,t)}}function Cv(e){const{key:t="public",name:n="Public Client"}=e;return oS({...e,key:t,name:n,type:"publicClient"}).extend(yj)}function vj(e,{abi:t,args:n,bytecode:r,...i}){const o=ES({abi:t,args:n,bytecode:r});return lb(e,{...i,data:o})}async function wj(e){var n;return((n=e.account)==null?void 0:n.type)==="local"?[e.account.address]:(await e.request({method:"eth_accounts"})).map(r=>K2(r))}async function bj(e){return await e.request({method:"wallet_getPermissions"})}async function xj(e){return(await e.request({method:"eth_requestAccounts"})).map(n=>Ur(n))}async function Cj(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function Ej(e,{account:t=e.account,message:n}){if(!t)throw new pc({docsPath:"/docs/actions/wallet/signMessage"});const r=Tr(t);if(r.type==="local")return r.signMessage({message:n});const i=typeof n=="string"?j2(n):n.raw instanceof Uint8Array?Xi(n.raw):n.raw;return e.request({method:"personal_sign",params:[i,r.address]})}async function Sj(e,t){var c,u,d,f;const{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new pc({docsPath:"/docs/actions/wallet/signTransaction"});const o=Tr(n);uf({account:o,...t});const s=await ge(e,xd,"getChainId")({});r!==null&&rS({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((c=e.chain)==null?void 0:c.formatters),l=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||Zp;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(f=(d=e.chain)==null?void 0:d.serializers)==null?void 0:f.transaction}):await e.request({method:"eth_signTransaction",params:[{...l(i),chainId:Oe(s),from:o.address}]})}async function _j(e,{account:t=e.account,domain:n,message:r,primaryType:i,types:o}){if(!t)throw new pc({docsPath:"/docs/actions/wallet/signTypedData"});const s=Tr(t),a={EIP712Domain:CS({domain:n}),...o};if(xS({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=Sn({domain:n??{},primaryType:i,types:a,message:r},(c,u)=>di(u)?u.toLowerCase():u);return e.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function Tj(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:Oe(t)}]})}async function $j(e,t){return await e.request({method:"wallet_watchAsset",params:t})}function Pj(e){return{addChain:t=>mL(e,t),deployContract:t=>vj(e,t),getAddresses:()=>wj(e),getChainId:()=>xd(e),getPermissions:()=>bj(e),prepareTransactionRequest:t=>n1(e,t),requestAddresses:()=>xj(e),requestPermissions:t=>Cj(e,t),sendRawTransaction:t=>ab(e,t),sendTransaction:t=>lb(e,t),signMessage:t=>Ej(e,t),signTransaction:t=>Sj(e,t),signTypedData:t=>_j(e,t),switchChain:t=>Tj(e,t),watchAsset:t=>$j(e,t),writeContract:t=>iS(e,t)}}function pb(e){const{key:t="wallet",name:n="Wallet Client",transport:r}=e;return oS({...e,key:t,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(Pj)}function Aj(e,t={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:s,timeout:a})=>{var d;const l=t.retryCount??s,c=a??t.timeout??1e4,u=e||((d=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:d[0]);if(!u)throw new lS;return s1({key:n,name:r,async request({method:f,params:h}){const p={method:f,params:h},m=await Wm(u),{error:v,result:b}=await Sl.webSocketAsync(m,{body:p,timeout:c});if(v)throw new X2({body:p,error:v,url:u});return b},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket(){return Wm(u)},async subscribe({params:f,onData:h,onError:p}){const m=await Wm(u),{result:v}=await new Promise((b,y)=>Sl.webSocket(m,{body:{method:"eth_subscribe",params:f},onResponse(x){if(x.error){y(x.error),p==null||p(x.error);return}if(typeof x.id=="number"){b(x);return}x.method==="eth_subscription"&&h(x.params)}}));return{subscriptionId:v,async unsubscribe(){return new Promise(b=>Sl.webSocket(m,{body:{method:"eth_unsubscribe",params:[v]},onResponse:b}))}}}})}}const u4="0x0000000000000000000000000000000000000000",Dj=qp({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Fh=qp({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var TS=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},As=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function N0(e){return typeof e=="string"?Number.parseInt(e,e.trim().substring(0,2)==="0x"?16:10):typeof e=="bigint"?Number(e):e}var $S={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var h=new i(u,d||l,f),p=n?n+c:c;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],h]:l._events[p].push(h):(l._events[p]=h,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)t.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var f=0,h=d.length,p=new Array(h);f<h;f++)p[f]=d[f].fn;return p},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,f,h,p){var m=n?n+c:c;if(!this._events[m])return!1;var v=this._events[m],b=arguments.length,y,x;if(v.fn){switch(v.once&&this.removeListener(c,v.fn,void 0,!0),b){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,u),!0;case 3:return v.fn.call(v.context,u,d),!0;case 4:return v.fn.call(v.context,u,d,f),!0;case 5:return v.fn.call(v.context,u,d,f,h),!0;case 6:return v.fn.call(v.context,u,d,f,h,p),!0}for(x=1,y=new Array(b-1);x<b;x++)y[x-1]=arguments[x];v.fn.apply(v.context,y)}else{var w=v.length,_;for(x=0;x<w;x++)switch(v[x].once&&this.removeListener(c,v[x].fn,void 0,!0),b){case 1:v[x].fn.call(v[x].context);break;case 2:v[x].fn.call(v[x].context,u);break;case 3:v[x].fn.call(v[x].context,u,d);break;case 4:v[x].fn.call(v[x].context,u,d,f);break;default:if(!y)for(_=1,y=new Array(b-1);_<b;_++)y[_-1]=arguments[_];v[x].fn.apply(v[x].context,y)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,f){var h=n?n+c:c;if(!this._events[h])return this;if(!u)return s(this,h),this;var p=this._events[h];if(p.fn)p.fn===u&&(!f||p.once)&&(!d||p.context===d)&&s(this,h);else{for(var m=0,v=[],b=p.length;m<b;m++)(p[m].fn!==u||f&&!p[m].once||d&&p[m].context!==d)&&v.push(p[m]);v.length?this._events[h]=v.length===1?v[0]:v:s(this,h)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})($S);var Oj=$S.exports;const kj=Ca(Oj);var mb=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},et=(e,t,n)=>(mb(e,t,"read from private field"),n?n.call(e):t.get(e)),On=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Cd=(e,t,n,r)=>(mb(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Zt=(e,t,n)=>(mb(e,t,"access private method"),n),gb=class extends kj{constructor({chains:e=[Fh,Dj],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...n}=e.blockExplorers??{};if(t)return[t.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}};function Rj(e){var n;if(!e)return"Injected";const t=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=e.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of e.providers){let a=t(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return t(e)??"Injected"}var Bh,yb=class extends gb{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...t};super({chains:e,options:n}),this.id="injected",On(this,Bh,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:Ur(i[0])})},this.onChainChanged=i=>{const o=N0(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=Rj(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:e}={}){var t;try{const n=await this.getProvider();if(!n)throw new As;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=Ur(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((t=this.storage)==null||t.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new In(n):n.code===-32002?new Il(n):n}}async disconnect(){var t;const e=await this.getProvider();e!=null&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((t=this.storage)==null||t.removeItem(this.shimDisconnectKey)))}async getAccount(){const e=await this.getProvider();if(!e)throw new As;const t=await e.request({method:"eth_accounts"});return Ur(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new As;return e.request({method:"eth_chainId"}).then(N0)}async getProvider(){const e=this.options.getProvider();return e&&Cd(this,Bh,e),et(this,Bh)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return pb({account:n,chain:r,transport:cb(t)})}async isAuthorized(){var e;try{if(this.options.shimDisconnect&&!((e=this.storage)!=null&&e.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new As;return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r,i,o;const t=await this.getProvider();if(!t)throw new As;const n=Oe(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===e&&s()}))]),this.chains.find(s=>s.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===e);if(!a)throw new TS({chainId:e,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==e)throw new In(new Error("User rejected switch after adding network."));return a}catch(l){throw new In(l)}throw this.isUserRejectedRequestError(s)?new In(s):new Vi(s)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new As;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}isUserRejectedRequestError(e){return e.code===4001}};Bh=new WeakMap;var vb=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},qm=(e,t,n)=>(vb(e,t,"read from private field"),n?n.call(e):t.get(e)),Gm=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},rh=(e,t,n,r)=>(vb(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Nj=(e,t,n)=>(vb(e,t,"access private method"),n),Ij={VITE_WALLET_CONNECT_PROJECT_ID:"919a4645f423b224c48e24d4fc78f0e0",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Mj=e=>(t,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let d=s(r.getState());c=f=>{const h=s(f);if(!u(d,h)){const p=d;a(d=h,p)}},l!=null&&l.fireImmediately&&a(d,d)}return i(c)},e(t,n,r)},Lj=Mj;function jj(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,t==null?void 0:t.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,t==null?void 0:t.replacer)),removeItem:i=>n.removeItem(i)}}const Ed=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return Ed(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ed(r)(n)}}}},Fj=(e,t)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,b)=>({...b,...v}),...t},s=!1;const a=new Set,l=new Set;let c;try{c=o.getStorage()}catch{}if(!c)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...v)},r,i);const u=Ed(o.serialize),d=()=>{const v=o.partialize({...r()});let b;const y=u({state:v,version:o.version}).then(x=>c.setItem(o.name,x)).catch(x=>{b=x});if(b)throw b;return y},f=i.setState;i.setState=(v,b)=>{f(v,b),d()};const h=e((...v)=>{n(...v),d()},r,i);let p;const m=()=>{var v;if(!c)return;s=!1,a.forEach(y=>y(r()));const b=((v=o.onRehydrateStorage)==null?void 0:v.call(o,r()))||void 0;return Ed(c.getItem.bind(c))(o.name).then(y=>{if(y)return o.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==o.version){if(o.migrate)return o.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var x;return p=o.merge(y,(x=r())!=null?x:h),n(p,!0),d()}).then(()=>{b==null||b(p,void 0),s=!0,l.forEach(y=>y(p))}).catch(y=>{b==null||b(void 0,y)})};return i.persist={setOptions:v=>{o={...o,...v},v.getStorage&&(c=v.getStorage())},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>m(),hasHydrated:()=>s,onHydrate:v=>(a.add(v),()=>{a.delete(v)}),onFinishHydration:v=>(l.add(v),()=>{l.delete(v)})},m(),p||h},Bj=(e,t)=>(n,r,i)=>{let o={storage:jj(()=>localStorage),partialize:m=>m,version:0,merge:(m,v)=>({...v,...m}),...t},s=!1;const a=new Set,l=new Set;let c=o.storage;if(!c)return e((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...m)},r,i);const u=()=>{const m=o.partialize({...r()});return c.setItem(o.name,{state:m,version:o.version})},d=i.setState;i.setState=(m,v)=>{d(m,v),u()};const f=e((...m)=>{n(...m),u()},r,i);let h;const p=()=>{var m,v;if(!c)return;s=!1,a.forEach(y=>{var x;return y((x=r())!=null?x:f)});const b=((v=o.onRehydrateStorage)==null?void 0:v.call(o,(m=r())!=null?m:f))||void 0;return Ed(c.getItem.bind(c))(o.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==o.version){if(o.migrate)return o.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var x;return h=o.merge(y,(x=r())!=null?x:f),n(h,!0),u()}).then(()=>{b==null||b(h,void 0),h=r(),s=!0,l.forEach(y=>y(h))}).catch(y=>{b==null||b(void 0,y)})};return i.persist={setOptions:m=>{o={...o,...m},m.storage&&(c=m.storage)},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>p(),hasHydrated:()=>s,onHydrate:m=>(a.add(m),()=>{a.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},o.skipHydration||p(),h||f},Uj=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((Ij?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Fj(e,t)):Bj(e,t),PS=Uj;var zj={VITE_WALLET_CONNECT_PROJECT_ID:"919a4645f423b224c48e24d4fc78f0e0",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d4=e=>{let t;const n=new Set,r=(l,c)=>{const u=typeof l=="function"?l(t):l;if(!Object.is(u,t)){const d=t;t=c??(typeof u!="object"||u===null)?u:Object.assign({},t,u),n.forEach(f=>f(t,d))}},i=()=>t,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{(zj?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,i,a),a},AS=e=>e?d4(e):d4;function wb(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function Wj(e,t,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!e.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const d of e){let f=!1;for(const h of t){const p=h(d);p&&(f=!0,l.some(({id:m})=>m===d.id)||(l=[...l,p.chain]),c[d.id]=[...c[d.id]||[],...p.rpcUrls.http],p.rpcUrls.webSocket&&(u[d.id]=[...u[d.id]||[],...p.rpcUrls.webSocket]))}if(!f)throw new Error([`Could not find valid provider configuration for chain "${d.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:d})=>{const f=l.find(m=>m.id===d)??e[0],h=c[f.id];if(!h||!h[0])throw new Error(`No providers configured for chain "${f.id}"`);const p=Cv({batch:n,chain:f,transport:a4(h.map(m=>uS(m,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(p,{chains:l})},webSocketPublicClient:({chainId:d})=>{const f=l.find(m=>m.id===d)??e[0],h=u[f.id];if(!h||!h[0])return;const p=Cv({batch:n,chain:f,transport:a4(h.map(m=>Aj(m,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(p,{chains:l})}}}var Vj=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},Hj=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},qj=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},Gj=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function Ev(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,r;if(Array.isArray(e)&&Array.isArray(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ev(e[r],t[r]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const i=Object.keys(e);if(n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(o&&!Ev(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}var Sv=(e,{find:t,replace:n})=>e&&t(e)?n(e):typeof e!="object"?e:Array.isArray(e)?e.map(r=>Sv(r,{find:t,replace:n})):e instanceof Object?Object.entries(e).reduce((r,[i,o])=>({...r,[i]:Sv(o,{find:t,replace:n})}),{}):e;function Kj(e){const t=JSON.parse(e);return Sv(t,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function f4(e){return typeof e=="number"?e:e==="wei"?0:Math.abs(CI[e])}function h4(e,t){return e.slice(0,t).join(".")||"."}function p4(e,t){const{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function Zj(e,t){const n=typeof e=="function",r=typeof t=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const c=p4(i,this);c===0?i[i.length]=this:(i.splice(c),o.splice(c)),o[o.length]=a;const u=p4(i,l);if(u!==0)return r?t.call(this,a,l,h4(o,u)):`[ref=${h4(o,u)}]`}else i[0]=l,o[0]=a;return n?e.call(this,a,l):l}}function Qj(e,t,n,r){return JSON.stringify(e,Zj((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(t==null?void 0:t(i,s))||s},r),n??void 0)}var DS={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function OS({deserialize:e=Kj,key:t="wagmi",serialize:n=Qj,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${t}.${i}`);try{return s?e(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${t}.${i}`);else try{r.setItem(`${t}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${t}.${i}`)}}var m4="store",qa,ou,_v,kS,Yj=class{constructor({autoConnect:e=!1,connectors:t=[new yb],publicClient:n,storage:r=OS({storage:typeof window<"u"?window.localStorage:DS}),logger:i={warn:console.warn},webSocketPublicClient:o}){var c,u;Gm(this,_v),this.publicClients=new Map,this.webSocketPublicClients=new Map,Gm(this,qa,void 0),Gm(this,ou,void 0),this.args={autoConnect:e,connectors:t,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(e)try{const d=r.getItem(m4),f=(c=d==null?void 0:d.state)==null?void 0:c.data;s=f!=null&&f.account?"reconnecting":"connecting",a=(u=f==null?void 0:f.chain)==null?void 0:u.id}catch{}const l=typeof t=="function"?t():t;l.forEach(d=>d.setStorage(r)),this.store=AS(Lj(PS(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:m4,storage:r,partialize:d=>{var f,h;return{...e&&{data:{account:(f=d==null?void 0:d.data)==null?void 0:f.account,chain:(h=d==null?void 0:d.data)==null?void 0:h.chain}},chains:d==null?void 0:d.chains}},version:2}))),this.storage=r,rh(this,ou,r==null?void 0:r.getItem("wallet")),Nj(this,_v,kS).call(this),e&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var e,t;return(t=(e=this.data)==null?void 0:e.chain)==null?void 0:t.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t=typeof e=="function"?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var e,t;this.connector&&await((t=(e=this.connector).disconnect)==null?void 0:t.call(e)),rh(this,qa,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(qm(this,qa))return;rh(this,qa,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const e=qm(this,ou)?[...this.connectors].sort(n=>n.id===qm(this,ou)?-1:1):this.connectors;let t=!1;for(const n of e){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),t=!0;break}return t||this.setState(n=>({...n,data:void 0,status:"disconnected"})),rh(this,qa,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t=typeof e=="function"?e():e;t.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.publicClients.get(e??-1),t))return t;const{publicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,this.publicClients.set(e??-1,t),t}setPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.webSocketPublicClients.get(e??-1),t))return t;const{webSocketPublicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){var t;(t=this.storage)==null||t.setItem("wallet",e)}};qa=new WeakMap;ou=new WeakMap;_v=new WeakSet;kS=function(){const e=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},t=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var c,u,d,f,h,p;(c=l==null?void 0:l.off)==null||c.call(l,"change",e),(u=l==null?void 0:l.off)==null||u.call(l,"disconnect",t),(d=l==null?void 0:l.off)==null||d.call(l,"error",n),a&&((f=a.on)==null||f.call(a,"change",e),(h=a.on)==null||h.call(a,"disconnect",t),(p=a.on)==null||p.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Tv;function Xj(e){const t=new Yj(e);return Tv=t,t}function _n(){if(!Tv)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Tv}async function g4({chainId:e,connector:t}){const n=_n(),r=n.connector;if(r&&t.id===r.id)throw new Hj;try{n.setState(o=>({...o,status:"connecting"}));const i=await t.connect({chainId:e});return n.setLastUsedConnector(t.id),n.setState(o=>({...o,connector:t,chains:t==null?void 0:t.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:t}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function Jj(){const e=_n();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}var bb=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],eF=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function fi({chainId:e}={}){const t=_n();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function RS({chainId:e}={}){var r,i;return await((i=(r=_n().connector)==null?void 0:r.getWalletClient)==null?void 0:i.call(r,{chainId:e}))||null}function $v({chainId:e}={}){const t=_n();return e&&t.getWebSocketPublicClient({chainId:e})||t.webSocketPublicClient}function tF(e,t){const n=_n(),r=async()=>t(fi(e));return n.subscribe(({publicClient:o})=>o,r)}function nF({chainId:e},t){const n=_n(),r=async({chainId:o})=>{if(e&&o&&e!==o)return;const s=await RS({chainId:e});return _n().connector?t(s):t(null)};return n.subscribe(({data:o,connector:s})=>{var a;return{account:o==null?void 0:o.account,chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,connector:s}},r,{equalityFn:wb})}function rF(e,t){const n=_n(),r=async()=>t($v(e));return n.subscribe(({webSocketPublicClient:o})=>o,r)}async function iF({chainId:e,contracts:t,blockNumber:n,blockTag:r,...i}){const o=fi({chainId:e});if(!o.chains)throw new qj;if(e&&o.chain.id!==e)throw new Vj({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:t})}async function oF({address:e,account:t,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return fi({chainId:n}).readContract({abi:r,address:e,account:t,functionName:o,args:i,blockNumber:s,blockTag:a})}async function sF({contracts:e,blockNumber:t,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=fi(),s=e.reduce((u,d,f)=>{const h=d.chainId??o.chain.id;return{...u,[h]:[...u[h]||[],{contract:d,index:f}]}},{}),a=()=>Object.entries(s).map(([u,d])=>iF({allowFailure:i,chainId:parseInt(u),contracts:d.map(({contract:f})=>f),blockNumber:t,blockTag:n})),l=(await Promise.all(a())).flat(),c=Object.values(s).flatMap(u=>u.map(({index:d})=>d));return l.reduce((u,d,f)=>(u&&(u[c[f]]=d),u),[])}catch(o){if(o instanceof Q2)throw o;const s=()=>e.map(a=>oF({...a,blockNumber:t,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function NS({address:e,chainId:t,formatUnits:n,token:r}){const i=_n(),o=fi({chainId:t});if(r){const c=async({abi:u})=>{const d={abi:u,address:r,chainId:t},[f,h,p]=await sF({allowFailure:!1,contracts:[{...d,functionName:"balanceOf",args:[e]},{...d,functionName:"decimals"},{...d,functionName:"symbol"}]});return{decimals:h,formatted:sd(f??"0",f4(n??h)),symbol:p,value:f}};try{return await c({abi:bb})}catch(u){if(u instanceof Q2){const{symbol:d,...f}=await c({abi:eF});return{symbol:O9(Qs(d,{dir:"right"})),...f}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:e}),l=s.find(c=>c.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:sd(a??"0",f4(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function I0(){const{data:e,connector:t,status:n}=_n();switch(n){case"connected":return{address:e==null?void 0:e.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!!(e!=null&&e.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function M0(){var i,o,s,a;const e=_n(),t=(o=(i=e.data)==null?void 0:i.chain)==null?void 0:o.id,n=e.chains??[],r=[...((s=e.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...(a=e.data)==null?void 0:a.chain,id:t}:void 0,chains:n}}async function IS({chainId:e}){const{connector:t}=_n();if(!t)throw new As;if(!t.switchChain)throw new Gj({connector:t});return t.switchChain(e)}function MS(e,{selector:t=n=>n}={}){const n=_n(),r=()=>e(I0());return n.subscribe(({data:o,connector:s,status:a})=>t({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:wb})}function LS(e,{selector:t=n=>n}={}){const n=_n(),r=()=>e(M0());return n.subscribe(({data:o,chains:s})=>{var a;return t({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:wb})}async function aF({name:e,chainId:t}){const{normalize:n}=await Ml(()=>import("./index-1mNcmRF3.js"),__vite__mapDeps([]));return await fi({chainId:t}).getEnsAvatar({name:n(e)})}async function lF({address:e,chainId:t}){return fi({chainId:t}).getEnsName({address:Ur(e)})}async function cF({chainId:e}={}){return await fi({chainId:e}).getBlockNumber()}var jS={exports:{}},FS={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=S,uF=M2;function dF(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fF=typeof Object.is=="function"?Object.is:dF,hF=uF.useSyncExternalStore,pF=l1.useRef,mF=l1.useEffect,gF=l1.useMemo,yF=l1.useDebugValue;FS.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=pF(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=gF(function(){function l(h){if(!c){if(c=!0,u=h,h=r(h),i!==void 0&&s.hasValue){var p=s.value;if(i(p,h))return d=p}return d=h}if(p=d,fF(u,h))return p;var m=r(h);return i!==void 0&&i(p,m)?p:(u=h,d=m)}var c=!1,u,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,i]);var a=hF(e,o[0],o[1]);return mF(function(){s.hasValue=!0,s.value=a},[a]),yF(a),a};jS.exports=FS;var c1=jS.exports;const vF=Ca(c1);function wF({queryClient:e=new b9({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=OS({storage:typeof window<"u"&&window.localStorage?window.localStorage:DS}),persister:n=typeof window<"u"?uN({key:"cache",storage:t,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=Xj({...r,storage:t});return n&&tI({queryClient:e,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:e})}var BS=S.createContext(void 0),u1=S.createContext(void 0);function bF({children:e,config:t}){return S.createElement(BS.Provider,{children:S.createElement(_9,{children:e,client:t.queryClient,context:u1}),value:t})}function xb(){const e=S.useContext(BS);if(!e)throw new Error(["`useConfig` must be used within `WagmiConfig`.\n","Read more: https://wagmi.sh/react/WagmiConfig"].join(`
`));return e}var xF=M2.useSyncExternalStore;function CF(e){return Array.isArray(e)}function EF(e){if(!y4(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!y4(n)||!n.hasOwnProperty("isPrototypeOf"))}function y4(e){return Object.prototype.toString.call(e)==="[object Object]"}function SF(e,t,n){return CF(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function _F(e){return JSON.stringify(e,(t,n)=>EF(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):typeof n=="bigint"?n.toString():n)}function TF(e,t){return typeof e=="function"?e(...t):!!e}function $F(e,t){const n={};return Object.keys(e).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(r),e[r])})}),n}function PF(e,t){const n=L2({context:e.context}),r=HN(),i=KN(),o=n.defaultQueryOptions({...e,queryKeyHashFn:_F});o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=_t.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=_t.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=_t.batchCalls(o.onSettled)),o.suspense&&typeof o.staleTime!="number"&&(o.staleTime=1e3),(o.suspense||o.useErrorBoundary)&&(i.isReset()||(o.retryOnMount=!1));const[s]=S.useState(()=>new t(n,o)),a=s.getOptimisticResult(o);if(xF(S.useCallback(d=>r?()=>{}:s.subscribe(_t.batchCalls(d)),[s,r]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),S.useEffect(()=>{i.clearReset()},[i]),S.useEffect(()=>{s.setOptions(o,{listeners:!1})},[o,s]),o.suspense&&a.isLoading&&a.isFetching&&!r)throw s.fetchOptimistic(o).then(({data:d})=>{var f,h;(f=o.onSuccess)==null||f.call(o,d),(h=o.onSettled)==null||h.call(o,d,null)}).catch(d=>{var f,h;i.clearReset(),(f=o.onError)==null||f.call(o,d),(h=o.onSettled)==null||h.call(o,void 0,d)});if(a.isError&&!i.isReset()&&!a.isFetching&&TF(o.useErrorBoundary,[a.error,s.getCurrentQuery()]))throw a.error;const l=a.status==="loading"&&a.fetchStatus==="idle"?"idle":a.status,c=l==="idle",u=l==="loading"&&a.fetchStatus==="fetching";return{...a,defaultedOptions:o,isIdle:c,isLoading:u,observer:s,status:l}}function AF(e,t,n){const r=f9(e,t,n);return QN({context:u1,...r})}function Cb(e,t,n){const r=SF(e,t,n),i=PF({context:u1,...r},_N),o={data:i.data,error:i.error,fetchStatus:i.fetchStatus,isError:i.isError,isFetched:i.isFetched,isFetchedAfterMount:i.isFetchedAfterMount,isFetching:i.isFetching,isIdle:i.isIdle,isLoading:i.isLoading,isRefetching:i.isRefetching,isSuccess:i.isSuccess,refetch:i.refetch,status:i.status,internal:{dataUpdatedAt:i.dataUpdatedAt,errorUpdatedAt:i.errorUpdatedAt,failureCount:i.failureCount,isFetchedAfterMount:i.isFetchedAfterMount,isLoadingError:i.isLoadingError,isPaused:i.isPaused,isPlaceholderData:i.isPlaceholderData,isPreviousData:i.isPreviousData,isRefetchError:i.isRefetchError,isStale:i.isStale,remove:i.remove}};return i.defaultedOptions.notifyOnChangeProps?o:$F(o,i.observer)}var Eb=()=>L2({context:u1});function US({chainId:e}={}){return c1.useSyncExternalStoreWithSelector(t=>tF({chainId:e},t),()=>fi({chainId:e}),()=>fi({chainId:e}),t=>t,(t,n)=>t.uid===n.uid)}function Km({chainId:e}){return[{entity:"walletClient",chainId:e,persist:!1}]}function DF({queryKey:[{chainId:e}]}){return RS({chainId:e})}function OF({chainId:e,suspense:t,onError:n,onSettled:r,onSuccess:i}={}){const{connector:o}=d1(),s=Sb({chainId:e}),a=Cb(Km({chainId:s}),DF,{cacheTime:0,enabled:!!o,staleTime:1/0,suspense:t,onError:n,onSettled:r,onSuccess:i}),l=Eb();return S.useEffect(()=>nF({chainId:s},u=>{u?l.invalidateQueries(Km({chainId:s})):l.removeQueries(Km({chainId:s}))}),[l,s]),a}function kF({chainId:e}={}){return c1.useSyncExternalStoreWithSelector(t=>rF({chainId:e},t),()=>$v({chainId:e}),()=>$v({chainId:e}),t=>t,(t,n)=>(t==null?void 0:t.uid)===(n==null?void 0:n.uid))}function Sb({chainId:e}={}){return US({chainId:e}).chain.id}function RF(){const[,e]=S.useReducer(t=>t+1,0);return e}function v4({chainId:e,scopeKey:t}){return[{entity:"blockNumber",chainId:e,scopeKey:t}]}function NF({queryKey:[{chainId:e}]}){return cF({chainId:e})}function IF({cacheTime:e=0,chainId:t,enabled:n=!0,scopeKey:r,staleTime:i,suspense:o,watch:s=!1,onBlock:a,onError:l,onSettled:c,onSuccess:u}={}){const d=Sb({chainId:t}),f=US({chainId:d}),h=kF({chainId:d}),p=Eb();return S.useEffect(()=>!n||!s&&!a?void 0:(h??f).watchBlockNumber({onBlockNumber:b=>{s&&p.setQueryData(v4({chainId:d,scopeKey:r}),b),a&&a(b)},emitOnBegin:!0}),[d,r,a,f,p,s,h,n]),Cb(v4({scopeKey:r,chainId:d}),NF,{cacheTime:e,enabled:n,staleTime:i,suspense:o,onError:l,onSettled:c,onSuccess:u})}function MF({chainId:e,enabled:t,queryKey:n}){const r=Eb(),i=S.useCallback(()=>r.invalidateQueries({queryKey:n},{cancelRefetch:!1}),[r,n]);IF({chainId:e,enabled:t,onBlock:t?i:void 0,scopeKey:t?void 0:"idle"})}var Zm=e=>typeof e=="object"&&!Array.isArray(e);function zS(e,t,n=t,r=Ev){const i=S.useRef([]),o=c1.useSyncExternalStoreWithSelector(e,t,n,s=>s,(s,a)=>{if(Zm(s)&&Zm(a)&&i.current.length){for(const l of i.current)if(!r(s[l],a[l]))return!1;return!0}return r(s,a)});if(Zm(o)){const s={...o};return Object.defineProperties(s,Object.entries(s).reduce((a,[l,c])=>({...a,[l]:{configurable:!1,enumerable:!0,get:()=>(i.current.includes(l)||i.current.push(l),c)}}),{})),s}return o}function d1({onConnect:e,onDisconnect:t}={}){const n=xb(),r=S.useCallback(a=>MS(a),[n]),i=zS(r,I0),o=S.useRef(),s=o.current;return S.useEffect(()=>{(s==null?void 0:s.status)!=="connected"&&i.status==="connected"&&(e==null||e({address:i.address,connector:i.connector,isReconnected:(s==null?void 0:s.status)==="reconnecting"||(s==null?void 0:s.status)===void 0})),(s==null?void 0:s.status)==="connected"&&i.status==="disconnected"&&(t==null||t()),o.current=i},[e,t,s,i]),i}function LF({address:e,chainId:t,formatUnits:n,scopeKey:r,token:i}){return[{entity:"balance",address:e,chainId:t,formatUnits:n,scopeKey:r,token:i}]}function jF({queryKey:[{address:e,chainId:t,formatUnits:n,token:r}]}){if(!e)throw new Error("address is required");return NS({address:e,chainId:t,formatUnits:n,token:r})}function w4({address:e,cacheTime:t,chainId:n,enabled:r=!0,formatUnits:i,scopeKey:o,staleTime:s,suspense:a,token:l,watch:c,onError:u,onSettled:d,onSuccess:f}={}){const h=Sb({chainId:n}),p=S.useMemo(()=>LF({address:e,chainId:h,formatUnits:i,scopeKey:o,token:l}),[e,h,i,o,l]),m=Cb(p,jF,{cacheTime:t,enabled:!!(r&&e),staleTime:s,suspense:a,onError:u,onSettled:d,onSuccess:f});return MF({chainId:h,enabled:!!(r&&c&&e),queryKey:p}),m}function WS(){const e=xb(),t=S.useCallback(n=>LS(n),[e]);return zS(t,M0)}var FF=e=>[{entity:"switchNetwork",...e}],BF=e=>{const{chainId:t}=e;if(!t)throw new Error("chainId is required");return IS({chainId:t})};function UF({chainId:e,throwForSwitchChainNotSupported:t,onError:n,onMutate:r,onSettled:i,onSuccess:o}={}){var T;const s=xb(),a=RF(),{data:l,error:c,isError:u,isIdle:d,isLoading:f,isSuccess:h,mutate:p,mutateAsync:m,reset:v,status:b,variables:y}=AF(FF({chainId:e}),BF,{onError:n,onMutate:r,onSettled:i,onSuccess:o}),x=S.useCallback(D=>p({chainId:D??e}),[e,p]),w=S.useCallback(D=>m({chainId:D??e}),[e,m]);S.useEffect(()=>s.subscribe(({chains:k,connector:I})=>({chains:k,connector:I}),a),[s,a]);let _,$;const g=!!((T=s.connector)!=null&&T.switchChain);return(t||g)&&(_=x,$=w),{chains:s.chains??[],data:l,error:c,isError:u,isIdle:d,isLoading:f,isSuccess:h,pendingChainId:y==null?void 0:y.chainId,reset:v,status:b,switchNetwork:_,switchNetworkAsync:$,variables:y}}let co;function zF(e){e&&(co=e)}function VS(){if(!co)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function e(n){await(co==null?void 0:co.open(n))}async function t(){await(co==null?void 0:co.close())}return{open:e,close:t}}const WF=Symbol(),b4=Object.getPrototypeOf,Pv=new WeakMap,VF=e=>e&&(Pv.has(e)?Pv.get(e):b4(e)===Object.prototype||b4(e)===Array.prototype),HF=e=>VF(e)&&e[WF]||null,x4=(e,t=!0)=>{Pv.set(e,t)};var L0={VITE_WALLET_CONNECT_PROJECT_ID:"919a4645f423b224c48e24d4fc78f0e0",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Qm=e=>typeof e=="object"&&e!==null,vo=new WeakMap,su=new WeakSet,qF=(e=Object.is,t=(c,u)=>new Proxy(c,u),n=c=>Qm(c)&&!su.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},i=new WeakMap,o=(c,u,d=r)=>{const f=i.get(c);if((f==null?void 0:f[0])===u)return f[1];const h=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return x4(h,!0),i.set(c,[u,h]),Reflect.ownKeys(c).forEach(p=>{if(Object.getOwnPropertyDescriptor(h,p))return;const m=Reflect.get(c,p),v={value:m,enumerable:!0,configurable:!0};if(su.has(m))x4(m,!1);else if(m instanceof Promise)delete v.value,v.get=()=>d(m);else if(vo.has(m)){const[b,y]=vo.get(m);v.value=o(b,y(),d)}Object.defineProperty(h,p,v)}),Object.preventExtensions(h)},s=new WeakMap,a=[1,1],l=c=>{if(!Qm(c))throw new Error("object required");const u=s.get(c);if(u)return u;let d=a[0];const f=new Set,h=(D,k=++a[0])=>{d!==k&&(d=k,f.forEach(I=>I(D,k)))};let p=a[1];const m=(D=++a[1])=>(p!==D&&!f.size&&(p=D,b.forEach(([k])=>{const I=k[1](D);I>d&&(d=I)})),d),v=D=>(k,I)=>{const V=[...k];V[1]=[D,...V[1]],h(V,I)},b=new Map,y=(D,k)=>{if((L0?"production":void 0)!=="production"&&b.has(D))throw new Error("prop listener already exists");if(f.size){const I=k[3](v(D));b.set(D,[k,I])}else b.set(D,[k])},x=D=>{var k;const I=b.get(D);I&&(b.delete(D),(k=I[1])==null||k.call(I))},w=D=>(f.add(D),f.size===1&&b.forEach(([I,V],Q)=>{if((L0?"production":void 0)!=="production"&&V)throw new Error("remove already exists");const B=I[3](v(Q));b.set(Q,[I,B])}),()=>{f.delete(D),f.size===0&&b.forEach(([I,V],Q)=>{V&&(V(),b.set(Q,[I]))})}),_=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),g=t(_,{deleteProperty(D,k){const I=Reflect.get(D,k);x(k);const V=Reflect.deleteProperty(D,k);return V&&h(["delete",[k],I]),V},set(D,k,I,V){const Q=Reflect.has(D,k),B=Reflect.get(D,k,V);if(Q&&(e(B,I)||s.has(I)&&e(B,s.get(I))))return!0;x(k),Qm(I)&&(I=HF(I)||I);let M=I;if(I instanceof Promise)I.then(L=>{I.status="fulfilled",I.value=L,h(["resolve",[k],L])}).catch(L=>{I.status="rejected",I.reason=L,h(["reject",[k],L])});else{!vo.has(I)&&n(I)&&(M=l(I));const L=!su.has(M)&&vo.get(M);L&&y(k,L)}return Reflect.set(D,k,M,V),h(["set",[k],I,B]),!0}});s.set(c,g);const T=[_,m,o,w];return vo.set(g,T),Reflect.ownKeys(c).forEach(D=>{const k=Object.getOwnPropertyDescriptor(c,D);"value"in k&&(g[D]=c[D],delete k.value,delete k.writable),Object.defineProperty(_,D,k)}),g})=>[l,vo,su,e,t,n,r,i,o,s,a],[GF]=qF();function An(e={}){return GF(e)}function fs(e,t,n){const r=vo.get(e);(L0?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let i;const o=[],s=r[3];let a=!1;const c=s(u=>{if(o.push(u),n){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&t(o.splice(0))}))});return a=!0,()=>{a=!1,c()}}function Zre(e,t){const n=vo.get(e);(L0?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[r,i,o]=n;return o(r,i(),t)}function Sd(e){return su.add(e),e}function qr(e,t,n,r){let i=e[t];return fs(e,()=>{const o=e[t];Object.is(i,o)||n(i=o)},r)}const au={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},we={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const e=navigator.userAgent.toLowerCase();return we.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return we.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=au.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=au.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+au.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function i(){e(...r)}n&&clearTimeout(n),n=setTimeout(i,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(we.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(e,t){if(!we.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=e});return Promise.race([t,we.wait(2e3)])},formatBalance(e,t){var r;let n;if(e==="0")n="0.000";else if(typeof e=="string"){const i=Number(e);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return au.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return we.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return we.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return we.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}},It=An({isConnected:!1}),Qe={state:It,subscribe(e){return fs(It,()=>e(It))},subscribeKey(e,t){return qr(It,e,t)},setIsConnected(e){It.isConnected=e},setCaipAddress(e){It.caipAddress=e,It.address=e?we.getPlainAddress(e):void 0},setBalance(e,t){It.balance=e,It.balanceSymbol=t},setProfileName(e){It.profileName=e},setProfileImage(e){It.profileImage=e},setAddressExplorerUrl(e){It.addressExplorerUrl=e},resetAccount(){It.isConnected=!1,It.caipAddress=void 0,It.address=void 0,It.balance=void 0,It.balanceSymbol=void 0,It.profileName=void 0,It.profileImage=void 0,It.addressExplorerUrl=void 0}};class _b{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).blob()}async post({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const Ym="WALLETCONNECT_DEEPLINK_CHOICE",C4="@w3m/recent",E4="@w3m/connected_wallet_image_url",yr={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(Ym,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(Ym);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Ym)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=yr.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(C4,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(C4);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(E4,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(E4)}catch{console.info("Unable to set Connected Wallet Image Url")}}},oo=An({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Bo={state:oo,subscribeNetworkImages(e){return fs(oo.networkImages,()=>e(oo.networkImages))},subscribeKey(e,t){return qr(oo,e,t)},setWalletImage(e,t){oo.walletImages[e]=t},setNetworkImage(e,t){oo.networkImages[e]=t},setConnectorImage(e,t){oo.connectorImages[e]=t},setTokenImage(e,t){oo.tokenImages[e]=t}},qc=An({connectors:[]}),vr={state:qc,subscribeKey(e,t){return qr(qc,e,t)},setConnectors(e){qc.connectors=e.map(t=>Sd(t))},addConnector(e){qc.connectors.push(Sd(e))},getConnectors(){return qc.connectors}},Gc=An({open:!1,selectedNetworkId:void 0}),Ll={state:Gc,subscribe(e){return fs(Gc,()=>e(Gc))},set(e){Object.assign(Gc,{...Gc,...e})}},dn=An({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),ht={state:dn,subscribeKey(e,t){return qr(dn,e,t)},_getClient(){if(!dn._client)throw new Error("NetworkController client not set");return dn._client},setClient(e){dn._client=Sd(e)},setCaipNetwork(e){dn.caipNetwork=e,Ll.set({selectedNetworkId:e==null?void 0:e.id})},setDefaultCaipNetwork(e){dn.caipNetwork=e,Ll.set({selectedNetworkId:e==null?void 0:e.id}),dn.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){dn.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();dn.supportsAllNetworks=e.supportsAllNetworks,dn.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),dn.caipNetwork=e},resetNetwork(){dn.isDefaultCaipNetwork||(dn.caipNetwork=void 0),dn.approvedCaipNetworkIds=void 0,dn.supportsAllNetworks=!0}},Hn=An({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),qe={state:Hn,subscribeKey(e,t){return qr(Hn,e,t)},setProjectId(e){Hn.projectId=e},setIncludeWalletIds(e){Hn.includeWalletIds=e},setExcludeWalletIds(e){Hn.excludeWalletIds=e},setFeaturedWalletIds(e){Hn.featuredWalletIds=e},setTokens(e){Hn.tokens=e},setTermsConditionsUrl(e){Hn.termsConditionsUrl=e},setPrivacyPolicyUrl(e){Hn.privacyPolicyUrl=e},setCustomWallets(e){Hn.customWallets=e},setEnableAnalytics(e){Hn.enableAnalytics=e},setSdkVersion(e){Hn.sdkVersion=e},setMetadata(e){Hn.metadata=e}},KF=we.getApiUrl(),ti=new _b({baseUrl:KF}),ZF="40",S4="4",bn=An({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Fe={state:bn,subscribeKey(e,t){return qr(bn,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=qe.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${ti.baseUrl}/getWalletImage/${e}`,n=await ti.getBlob({path:t,headers:Fe._getApiHeaders()});Bo.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${ti.baseUrl}/public/getAssetImage/${e}`,n=await ti.getBlob({path:t,headers:Fe._getApiHeaders()});Bo.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${ti.baseUrl}/public/getAssetImage/${e}`,n=await ti.getBlob({path:t,headers:Fe._getApiHeaders()});Bo.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=ht.state,t=e==null?void 0:e.map(({imageId:n})=>n).filter(Boolean);t&&await Promise.allSettled(t.map(n=>Fe._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=vr.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>Fe._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=qe.state;if(e!=null&&e.length){const{data:t}=await ti.get({path:"/getWallets",headers:Fe._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):S4,include:e==null?void 0:e.join(",")}});t.sort((r,i)=>e.indexOf(r.id)-e.indexOf(i.id));const n=t.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Fe._fetchWalletImage(r))),bn.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=qe.state,r=[...t??[],...n??[]].filter(Boolean),{data:i,count:o}=await ti.get({path:"/getWallets",headers:Fe._getApiHeaders(),params:{page:"1",entries:S4,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),s=yr.getRecentWallets(),a=i.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>Fe._fetchWalletImage(c))),bn.recommended=i,bn.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=qe.state,i=[...bn.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await ti.get({path:"/getWallets",headers:Fe._getApiHeaders(),params:{page:String(e),entries:ZF,include:t==null?void 0:t.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>Fe._fetchWalletImage(l)),we.wait(300)]),bn.wallets=[...bn.wallets,...o],bn.count=s>bn.count?s:bn.count,bn.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=qe.state;bn.search=[];const{data:r}=await ti.get({path:"/getWallets",headers:Fe._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>Fe._fetchWalletImage(o)),we.wait(300)]),bn.search=r},prefetch(){bn.prefetchPromise=Promise.race([Promise.allSettled([Fe.fetchFeaturedWallets(),Fe.fetchRecommendedWallets(),Fe.fetchNetworkImages(),Fe.fetchConnectorImages()]),we.wait(3e3)])}},QF=we.getAnalyticsUrl(),YF=new _b({baseUrl:QF}),XF=["MODAL_CREATED"],ja=An({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Xe={state:ja,subscribe(e){return fs(ja,()=>e(ja))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=qe.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(XF.includes(e.data.event)||typeof window>"u")return;await YF.post({path:"/e",headers:Xe._getApiHeaders(),body:{eventId:we.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){ja.timestamp=Date.now(),ja.data=e,qe.state.enableAnalytics&&Xe._sendAnalyticsEvent(ja)}},en=An({view:"Connect",history:["Connect"]}),ke={state:en,subscribeKey(e,t){return qr(en,e,t)},push(e,t){e!==en.view&&(en.view=e,en.history.push(e),en.data=t)},reset(e){en.view=e,en.history=[e]},replace(e){en.history.length>1&&en.history.at(-1)!==e&&(en.view=e,en.history[en.history.length-1]=e)},goBack(){if(en.history.length>1){en.history.pop();const[e]=en.history.slice(-1);e&&(en.view=e)}}},ih=An({open:!1}),Yt={state:ih,subscribeKey(e,t){return qr(ih,e,t)},async open(e){await Fe.state.prefetchPromise,e!=null&&e.view?ke.reset(e.view):Qe.state.isConnected?ke.reset("Account"):ke.reset("Connect"),ih.open=!0,Ll.set({open:!0}),Xe.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){ih.open=!1,Ll.set({open:!1}),Xe.sendEvent({type:"track",event:"MODAL_CLOSE"})}},JF=we.getBlockchainApiUrl(),_4=new _b({baseUrl:JF}),HS={fetchIdentity({caipChainId:e,address:t}){return _4.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:qe.state.projectId}})},fetchTransactions({account:e,projectId:t,cursor:n}){const r=n?{cursor:n}:{};return _4.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r})}},Ci=An({message:"",variant:"success",open:!1}),wr={state:Ci,subscribeKey(e,t){return qr(Ci,e,t)},showSuccess(e){Ci.message=e,Ci.variant="success",Ci.open=!0},showError(e){Ci.message=e,Ci.variant="error",Ci.open=!0},hide(){Ci.open=!1}},Mt=An({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Rr={state:Mt,subscribe(e){return fs(Mt,()=>e(Mt))},async fetchTransactions(e){const{projectId:t}=qe.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Mt.loading=!0;try{const n=await HS.fetchTransactions({account:e,projectId:t,cursor:Mt.next}),r=this.filterSpamTransactions(n.data),i=[...Mt.transactions,...r];Mt.loading=!1,Mt.transactions=i,Mt.transactionsByYear=this.groupTransactionsByYear(Mt.transactionsByYear,r),Mt.empty=i.length===0,Mt.next=n.next?n.next:void 0}catch{Xe.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:Mt.next}}),wr.showError("Failed to fetch transactions"),Mt.loading=!1,Mt.empty=!0}},groupTransactionsByYear(e={},t=[]){const n=e;return t.forEach(r=>{var o;const i=new Date(r.metadata.minedAt).getFullYear();n[i]||(n[i]=[]),(o=n[i])==null||o.push(r)}),n},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){Mt.transactions=[],Mt.transactionsByYear={},Mt.loading=!1,Mt.empty=!1,Mt.next=void 0}},Kt=An({wcError:!1,buffering:!1}),Ge={state:Kt,subscribeKey(e,t){return qr(Kt,e,t)},_getClient(){if(!Kt._client)throw new Error("ConnectionController client not set");return Kt._client},setClient(e){Kt._client=Sd(e)},connectWalletConnect(){Kt.wcPromise=this._getClient().connectWalletConnect(e=>{Kt.wcUri=e,Kt.wcPairingExpiry=we.getPairingExpiry()})},async connectExternal(e){var t,n;await((n=(t=this._getClient()).connectExternal)==null?void 0:n.call(t,e))},checkInstalled(e){var t,n;return(n=(t=this._getClient()).checkInstalled)==null?void 0:n.call(t,e)},resetWcConnection(){Kt.wcUri=void 0,Kt.wcPairingExpiry=void 0,Kt.wcPromise=void 0,Kt.wcLinking=void 0,Kt.recentWallet=void 0,Rr.resetTransactions(),yr.deleteWalletConnectDeepLink()},setWcLinking(e){Kt.wcLinking=e},setWcError(e){Kt.wcError=e,Kt.buffering=!1},setRecentWallet(e){Kt.recentWallet=e},setBuffering(e){Kt.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},or=An({status:"uninitialized"}),ni={state:or,subscribeKey(e,t){return qr(or,e,t)},subscribe(e){return fs(or,()=>e(or))},_getClient(){if(!or._client)throw new Error("SIWEController client not set");return or._client},setSIWEClient(e){or._client=Sd(e),or.status="ready"},setNonce(e){or.nonce=e},setStatus(e){or.status=e},setMessage(e){or.message=e},setSession(e){or.session=e}},Fa=An({themeMode:"dark",themeVariables:{}}),lr={state:Fa,subscribe(e){return fs(Fa,()=>e(Fa))},setThemeMode(e){Fa.themeMode=e},setThemeVariables(e){Fa.themeVariables={...Fa.themeVariables,...e}}},Lt={getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return Bo.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageUrl)return e==null?void 0:e.imageUrl;if(e!=null&&e.imageId)return Bo.state.networkImages[e.imageId]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return Bo.state.connectorImages[e.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uh=globalThis,Tb=Uh.ShadowRoot&&(Uh.ShadyCSS===void 0||Uh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$b=Symbol(),T4=new WeakMap;let qS=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==$b)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Tb&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=T4.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&T4.set(n,t))}return t}toString(){return this.cssText}};const ii=e=>new qS(typeof e=="string"?e:e+"",void 0,$b),be=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new qS(n,e,$b)},eB=(e,t)=>{if(Tb)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Uh.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},$4=Tb?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ii(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tB,defineProperty:nB,getOwnPropertyDescriptor:rB,getOwnPropertyNames:iB,getOwnPropertySymbols:oB,getPrototypeOf:sB}=Object,Uo=globalThis,P4=Uo.trustedTypes,aB=P4?P4.emptyScript:"",Xm=Uo.reactiveElementPolyfillSupport,_u=(e,t)=>e,j0={toAttribute(e,t){switch(t){case Boolean:e=e?aB:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Pb=(e,t)=>!tB(e,t),A4={attribute:!0,type:String,converter:j0,reflect:!1,hasChanged:Pb};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Uo.litPropertyMetadata??(Uo.litPropertyMetadata=new WeakMap);let Ga=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=A4){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&nB(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=rB(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A4}static _$Ei(){if(this.hasOwnProperty(_u("elementProperties")))return;const t=sB(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_u("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_u("properties"))){const n=this.properties,r=[...iB(n),...oB(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift($4(i))}else t!==void 0&&n.push($4(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eB(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:j0).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:j0;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,o){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Pb)(i?o:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};Ga.elementStyles=[],Ga.shadowRootOptions={mode:"open"},Ga[_u("elementProperties")]=new Map,Ga[_u("finalized")]=new Map,Xm==null||Xm({ReactiveElement:Ga}),(Uo.reactiveElementVersions??(Uo.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tu=globalThis,F0=Tu.trustedTypes,D4=F0?F0.createPolicy("lit-html",{createHTML:e=>e}):void 0,GS="$lit$",Co=`lit$${(Math.random()+"").slice(9)}$`,KS="?"+Co,lB=`<${KS}>`,fa=document,_d=()=>fa.createComment(""),Td=e=>e===null||typeof e!="object"&&typeof e!="function",ZS=Array.isArray,cB=e=>ZS(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Jm=`[ 	
\f\r]`,Kc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O4=/-->/g,k4=/>/g,Cs=RegExp(`>|${Jm}(?:([^\\s"'>=/]+)(${Jm}*=${Jm}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),R4=/'/g,N4=/"/g,QS=/^(?:script|style|textarea|title)$/i,YS=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ee=YS(1),se=YS(2),ha=Symbol.for("lit-noChange"),Ot=Symbol.for("lit-nothing"),I4=new WeakMap,zs=fa.createTreeWalker(fa,129);function XS(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return D4!==void 0?D4.createHTML(t):t}const uB=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=Kc;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Kc?u[1]==="!--"?s=O4:u[1]!==void 0?s=k4:u[2]!==void 0?(QS.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Cs):u[3]!==void 0&&(s=Cs):s===Cs?u[0]===">"?(s=i??Kc,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Cs:u[3]==='"'?N4:R4):s===N4||s===R4?s=Cs:s===O4||s===k4?s=Kc:(s=Cs,i=void 0);const h=s===Cs&&e[a+1].startsWith("/>")?" ":"";o+=s===Kc?l+lB:d>=0?(r.push(c),l.slice(0,d)+GS+l.slice(d)+Co+h):l+Co+(d===-2?a:h)}return[XS(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};let Av=class JS{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=uB(t,n);if(this.el=JS.createElement(c,r),zs.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=zs.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(GS)){const f=u[s++],h=i.getAttribute(d).split(Co),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:p[2],strings:h,ctor:p[1]==="."?fB:p[1]==="?"?hB:p[1]==="@"?pB:f1}),i.removeAttribute(d)}else d.startsWith(Co)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(QS.test(i.tagName)){const d=i.textContent.split(Co),f=d.length-1;if(f>0){i.textContent=F0?F0.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],_d()),zs.nextNode(),l.push({type:2,index:++o});i.append(d[f],_d())}}}else if(i.nodeType===8)if(i.data===KS)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Co,d+1))!==-1;)l.push({type:7,index:o}),d+=Co.length-1}o++}}static createElement(t,n){const r=fa.createElement("template");return r.innerHTML=t,r}};function jl(e,t,n=e,r){var s,a;if(t===ha)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Td(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=jl(e,i._$AS(e,t.values),i,r)),t}let dB=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??fa).importNode(n,!0);zs.currentNode=i;let o=zs.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Ab(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new mB(o,this,t)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=zs.nextNode(),s++)}return zs.currentNode=fa,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},Ab=class e_{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=Ot,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=jl(this,t,n),Td(t)?t===Ot||t==null||t===""?(this._$AH!==Ot&&this._$AR(),this._$AH=Ot):t!==this._$AH&&t!==ha&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):cB(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Ot&&Td(this._$AH)?this._$AA.nextSibling.data=t:this.$(fa.createTextNode(t)),this._$AH=t}g(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Av.createElement(XS(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new dB(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=I4.get(t.strings);return n===void 0&&I4.set(t.strings,n=new Av(t)),n}T(t){ZS(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new e_(this.k(_d()),this.k(_d()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},f1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=Ot,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ot}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=jl(this,t,n,0),s=!Td(t)||t!==this._$AH&&t!==ha,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=jl(this,a[r+l],n,l),c===ha&&(c=this._$AH[l]),s||(s=!Td(c)||c!==this._$AH[l]),c===Ot?t=Ot:t!==Ot&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.O(t)}O(t){t===Ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},fB=class extends f1{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===Ot?void 0:t}},hB=class extends f1{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==Ot)}},pB=class extends f1{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=jl(this,t,n,0)??Ot)===ha)return;const r=this._$AH,i=t===Ot&&r!==Ot||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==Ot&&(r===Ot||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},mB=class{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){jl(this,t)}};const eg=Tu.litHtmlPolyfillSupport;eg==null||eg(Av,Ab),(Tu.litHtmlVersions??(Tu.litHtmlVersions=[])).push("3.1.0");const gB=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Ab(t.insertBefore(_d(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ee=class extends Ga{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gB(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ha}};var xC;Ee._$litElement$=!0,Ee.finalized=!0,(xC=globalThis.litElementHydrateSupport)==null||xC.call(globalThis,{LitElement:Ee});const tg=globalThis.litElementPolyfillSupport;tg==null||tg({LitElement:Ee});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let $u,zo,Wo;function yB(e,t){$u=document.createElement("style"),zo=document.createElement("style"),Wo=document.createElement("style"),$u.textContent=_l(e).core.cssText,zo.textContent=_l(e).dark.cssText,Wo.textContent=_l(e).light.cssText,document.head.appendChild($u),document.head.appendChild(zo),document.head.appendChild(Wo),t_(t)}function t_(e){zo&&Wo&&(e==="light"?(zo.removeAttribute("media"),Wo.media="enabled"):(Wo.removeAttribute("media"),zo.media="enabled"))}function vB(e){$u&&zo&&Wo&&($u.textContent=_l(e).core.cssText,zo.textContent=_l(e).dark.cssText,Wo.textContent=_l(e).light.cssText)}function _l(e){return{core:be`
      :root {
        --w3m-color-mix-strength: ${ii(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${ii((e==null?void 0:e["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${ii((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${ii((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${ii((e==null?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:be`
      :root {
        --w3m-color-mix: ${ii((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${ii((e==null?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:be`
      :root {
        --w3m-color-mix: ${ii((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${ii((e==null?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const Ae=be`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,qt=be`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Db=be`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function wB(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(i){customElements.get(e)||customElements.define(e,i)}}}function bB(e,t){return customElements.get(e)||customElements.define(e,t),t}function ie(e){return function(n){return typeof n=="function"?bB(e,n):wB(e,n)}}const xB=be`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var CB=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Dv=class extends Ee{render(){return ee`<slot></slot>`}};Dv.styles=[Ae,xB];Dv=CB([ie("wui-card")],Dv);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const EB={attribute:!0,type:String,converter:j0,reflect:!1,hasChanged:Pb},SB=(e=EB,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function U(e){return(t,n)=>typeof n=="object"?SB(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ob(e){return U({...e,state:!0,attribute:!1})}const _B=be`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,TB=se`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,$B=se`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,PB=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,AB=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,DB=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,OB=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,kB=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,RB=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,NB=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,IB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,MB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,LB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,jB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,FB=se`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,BB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,UB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,zB=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,WB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,VB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,HB=se` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,qB=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,GB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,KB=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ZB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,QB=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,YB=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,XB=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,JB=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eU=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tU=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,nU=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,rU=se`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,iU=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,oU=se`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,sU=se`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,aU=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,lU=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,cU=se` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,uU=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,dU=se`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,fU=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,hU=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,pU=se`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,mU=se`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,gU=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,yU=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,vU=se`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,wU=se`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,bU=se`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,xU=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,CU=se`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,EU=se`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var h1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const SU={allWallets:TB,appStore:$B,chromeStore:FB,apple:PB,arrowBottom:AB,arrowLeft:DB,arrowRight:OB,arrowTop:kB,browser:RB,checkmark:NB,chevronBottom:IB,chevronLeft:MB,chevronRight:LB,chevronTop:jB,clock:BB,close:UB,compass:WB,coinPlaceholder:zB,copy:VB,cursor:HB,desktop:qB,disconnect:GB,discord:KB,etherscan:ZB,extension:QB,externalLink:YB,facebook:XB,filters:JB,github:eU,google:tU,helpCircle:nU,infoCircle:rU,mail:iU,mobile:oU,networkPlaceholder:sU,nftPlaceholder:aU,off:lU,playStore:cU,qrCode:uU,refresh:dU,search:fU,swapHorizontal:hU,swapHorizontalBold:pU,swapVertical:mU,telegram:gU,twitch:yU,twitter:vU,twitterIcon:wU,wallet:xU,walletConnect:CU,walletPlaceholder:bU,warningCircle:EU};let Fl=class extends Ee{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,ee`${SU[this.name]}`}};Fl.styles=[Ae,Db,_B];h1([U()],Fl.prototype,"size",void 0);h1([U()],Fl.prototype,"name",void 0);h1([U()],Fl.prototype,"color",void 0);Fl=h1([ie("wui-icon")],Fl);const _U=be`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var kb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $d=class extends Ee{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return ee`<img src=${this.src} alt=${this.alt} />`}};$d.styles=[Ae,Db,_U];kb([U()],$d.prototype,"src",void 0);kb([U()],$d.prototype,"alt",void 0);$d=kb([ie("wui-image")],$d);const TU=be`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var $U=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ov=class extends Ee{render(){return ee`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ov.styles=[Ae,TU];Ov=$U([ie("wui-loading-hexagon")],Ov);const PU=be`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Rb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Pd=class extends Ee{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,ee`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Pd.styles=[Ae,PU];Rb([U()],Pd.prototype,"color",void 0);Rb([U()],Pd.prototype,"size",void 0);Pd=Rb([ie("wui-loading-spinner")],Pd);const AU=be`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var n_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let B0=class extends Ee{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,i=116+r,o=245+r,s=360+r*1.75;return ee`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};B0.styles=[Ae,AU];n_([U({type:Number})],B0.prototype,"radius",void 0);B0=n_([ie("wui-loading-thumbnail")],B0);const DU=be`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var p1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Bl=class extends Ee{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,ee`<slot></slot>`}};Bl.styles=[DU];p1([U()],Bl.prototype,"width",void 0);p1([U()],Bl.prototype,"height",void 0);p1([U()],Bl.prototype,"borderRadius",void 0);Bl=p1([ie("wui-shimmer")],Bl);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r_={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i_=e=>(...t)=>({_$litDirective$:e,values:t});let o_=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const OU=i_(class extends o_{constructor(e){var t;if(super(e),e.type!==r_.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.it)o in t||(n.remove(o),this.it.delete(o));for(const o in t){const s=!!t[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return ha}}),kU=be`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var m1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ul=class extends Ee{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,ee`<slot class=${OU(t)}></slot>`}};Ul.styles=[Ae,kU];m1([U()],Ul.prototype,"variant",void 0);m1([U()],Ul.prototype,"color",void 0);m1([U()],Ul.prototype,"align",void 0);Ul=m1([ie("wui-text")],Ul);const RU=se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,NU=se`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,IU=se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,MU=se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,LU=se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,jU=se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,FU=se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,BU=se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,UU=se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,zU=se`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,WU=se`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,VU=se`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,HU=se`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,qU=be`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var s_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const GU={browser:RU,dao:NU,defi:IU,defiAlt:MU,eth:LU,layers:jU,lock:FU,login:BU,network:UU,nft:zU,noun:WU,profile:VU,system:HU};let U0=class extends Ee{constructor(){super(...arguments),this.name="browser"}render(){return ee`${GU[this.name]}`}};U0.styles=[Ae,qU];s_([U()],U0.prototype,"name",void 0);U0=s_([ie("wui-visual")],U0);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=e=>e??Ot,tt={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,i=t&255;return[n,r,i]},tintColor(e,t){const[n,r,i]=e,o=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(i+(255-i)*t);return[o,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},KU=be`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var tr=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Tn=class extends Ee{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tt.getSpacingStyles(this.margin,3)};
    `,ee`<slot></slot>`}};Tn.styles=[Ae,KU];tr([U()],Tn.prototype,"flexDirection",void 0);tr([U()],Tn.prototype,"flexWrap",void 0);tr([U()],Tn.prototype,"flexBasis",void 0);tr([U()],Tn.prototype,"flexGrow",void 0);tr([U()],Tn.prototype,"flexShrink",void 0);tr([U()],Tn.prototype,"alignItems",void 0);tr([U()],Tn.prototype,"justifyContent",void 0);tr([U()],Tn.prototype,"columnGap",void 0);tr([U()],Tn.prototype,"rowGap",void 0);tr([U()],Tn.prototype,"gap",void 0);tr([U()],Tn.prototype,"padding",void 0);tr([U()],Tn.prototype,"margin",void 0);Tn=tr([ie("wui-flex")],Tn);const ZU=be`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var g1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zl=class extends Ee{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return ee`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",ee`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=tt.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};zl.styles=[Ae,ZU];g1([U()],zl.prototype,"imageSrc",void 0);g1([U()],zl.prototype,"alt",void 0);g1([U()],zl.prototype,"address",void 0);zl=g1([ie("wui-avatar")],zl);const QU=be`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Ji=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Vr=class extends Ee{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,n=this.size==="lg",r=n?"12%":"16%",i=n?"xxs":"3xl",o=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${a||o?"100%":r};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,ee` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};Vr.styles=[Ae,qt,QU];Ji([U()],Vr.prototype,"size",void 0);Ji([U()],Vr.prototype,"backgroundColor",void 0);Ji([U()],Vr.prototype,"iconColor",void 0);Ji([U()],Vr.prototype,"iconSize",void 0);Ji([U()],Vr.prototype,"background",void 0);Ji([U({type:Boolean})],Vr.prototype,"border",void 0);Ji([U()],Vr.prototype,"borderColor",void 0);Ji([U()],Vr.prototype,"icon",void 0);Vr=Ji([ie("wui-icon-box")],Vr);const YU=be`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Ta=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let qi=class extends Ee{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return ee`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${Ys(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${tt.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?ee`<wui-image src=${this.networkSrc}></wui-image>`:ee`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return ee`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};qi.styles=[Ae,qt,YU];Ta([U()],qi.prototype,"networkSrc",void 0);Ta([U()],qi.prototype,"avatarSrc",void 0);Ta([U()],qi.prototype,"balance",void 0);Ta([U({type:Boolean})],qi.prototype,"disabled",void 0);Ta([U({type:Boolean})],qi.prototype,"isProfileName",void 0);Ta([U()],qi.prototype,"address",void 0);qi=Ta([ie("wui-account-button")],qi);const XU=be`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var pf=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let pa=class extends Ee{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),ee` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?ee`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?ee`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:ee`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};pa.styles=[Ae,XU];pf([U()],pa.prototype,"size",void 0);pf([U()],pa.prototype,"name",void 0);pf([U()],pa.prototype,"imageSrc",void 0);pf([U()],pa.prototype,"walletIcon",void 0);pa=pf([ie("wui-wallet-image")],pa);const JU=be`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var a_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const ng=4;let z0=class extends Ee{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<ng;return ee`${this.walletImages.slice(0,ng).map(({src:n,walletName:r})=>ee`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${Ys(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(ng-this.walletImages.length)].map(()=>ee` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};z0.styles=[Ae,JU];a_([U({type:Array})],z0.prototype,"walletImages",void 0);z0=a_([ie("wui-all-wallets-image")],z0);const ez=be`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var vc=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Xo=class extends Ee{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const t=this.size==="md"?"paragraph-600":"small-600";return ee`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?ee`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ee``}};Xo.styles=[Ae,qt,ez];vc([U()],Xo.prototype,"size",void 0);vc([U({type:Boolean})],Xo.prototype,"disabled",void 0);vc([U({type:Boolean})],Xo.prototype,"fullWidth",void 0);vc([U({type:Boolean})],Xo.prototype,"loading",void 0);vc([U()],Xo.prototype,"variant",void 0);Xo=vc([ie("wui-button")],Xo);const l_=se`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,tz=be`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var c_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let W0=class extends Ee{constructor(){super(...arguments),this.type="wallet"}render(){return ee`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?ee` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${l_}`:ee`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};W0.styles=[Ae,qt,tz];c_([U()],W0.prototype,"type",void 0);W0=c_([ie("wui-card-select-loader")],W0);const nz=se`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,rz=be`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var mf=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ma=class extends Ee{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,ee`${this.templateVisual()} ${t?nz:l_}`}templateVisual(){return this.imageSrc?ee`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:ee`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ma.styles=[Ae,rz];mf([U()],ma.prototype,"size",void 0);mf([U()],ma.prototype,"name",void 0);mf([U()],ma.prototype,"imageSrc",void 0);mf([U({type:Boolean})],ma.prototype,"selected",void 0);ma=mf([ie("wui-network-image")],ma);const iz=be`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var wc=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Jo=class extends Ee{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return ee`
      <button data-selected=${Ys(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?ee`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Ys(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:ee`
      <wui-wallet-image size="md" imageSrc=${Ys(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Jo.styles=[Ae,qt,iz];wc([U()],Jo.prototype,"name",void 0);wc([U()],Jo.prototype,"type",void 0);wc([U()],Jo.prototype,"imageSrc",void 0);wc([U({type:Boolean})],Jo.prototype,"disabled",void 0);wc([U({type:Boolean})],Jo.prototype,"selected",void 0);Jo=wc([ie("wui-card-select")],Jo);const oz=be`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var bc=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let es=class extends Ee{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t=this.variant==="transparent"?"small-600":"paragraph-600";return ee`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${tt.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?ee`<wui-image src=${this.imageSrc}></wui-image>`:null}};es.styles=[Ae,qt,oz];bc([U()],es.prototype,"variant",void 0);bc([U()],es.prototype,"imageSrc",void 0);bc([U({type:Boolean})],es.prototype,"disabled",void 0);bc([U()],es.prototype,"icon",void 0);bc([U()],es.prototype,"href",void 0);es=bc([ie("wui-chip")],es);const sz=be`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Nb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ad=class extends Ee{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return ee`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?ee`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Ad.styles=[Ae,qt,sz];Nb([U()],Ad.prototype,"size",void 0);Nb([U({type:Boolean})],Ad.prototype,"loading",void 0);Ad=Nb([ie("wui-connect-button")],Ad);const az=be`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var y1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Wl=class extends Ee{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return ee`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Wl.styles=[Ae,qt,az];y1([U({type:Boolean})],Wl.prototype,"disabled",void 0);y1([U()],Wl.prototype,"label",void 0);y1([U()],Wl.prototype,"buttonLabel",void 0);Wl=y1([ie("wui-cta-button")],Wl);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lz=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pu=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,t,!1),Pu(i,t);return!0},V0=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},u_=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),dz(t)}};function cz(e){this._$AN!==void 0?(V0(this),this._$AM=e,u_(this)):this._$AM=e}function uz(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=n;o<r.length;o++)Pu(r[o],!1),V0(r[o]);else r!=null&&(Pu(r,!1),V0(r));else Pu(this,e)}const dz=e=>{e.type==r_.CHILD&&(e._$AP??(e._$AP=uz),e._$AQ??(e._$AQ=cz))};let fz=class extends o_{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),u_(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Pu(this,t),V0(this))}setValue(t){if(lz(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d_=()=>new hz;let hz=class{};const rg=new WeakMap,f_=i_(class extends fz{render(e){return Ot}update(e,[t]){var r;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=(r=e.options)==null?void 0:r.host,this.ot(this.lt=e.element)),Ot}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let n=rg.get(t);n===void 0&&(n=new WeakMap,rg.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=rg.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),pz=be`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var $a=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Gi=class extends Ee{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=d_()}render(){const t=`wui-size-${this.size}`;return ee` ${this.templateIcon()}
      <input
        ${f_(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${Ys(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?ee`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Gi.styles=[Ae,qt,pz];$a([U()],Gi.prototype,"size",void 0);$a([U()],Gi.prototype,"icon",void 0);$a([U({type:Boolean})],Gi.prototype,"disabled",void 0);$a([U()],Gi.prototype,"placeholder",void 0);$a([U()],Gi.prototype,"type",void 0);$a([U()],Gi.prototype,"keyHint",void 0);Gi=$a([ie("wui-input-text")],Gi);const mz=be`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var h_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let H0=class extends Ee{render(){return ee`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?ee`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};H0.styles=[Ae,mz];h_([U()],H0.prototype,"errorMessage",void 0);H0=h_([ie("wui-email-input")],H0);const gz=be`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var gf=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ga=class extends Ee{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return ee`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ga.styles=[Ae,qt,Db,gz];gf([U()],ga.prototype,"size",void 0);gf([U({type:Boolean})],ga.prototype,"disabled",void 0);gf([U()],ga.prototype,"icon",void 0);gf([U()],ga.prototype,"iconColor",void 0);ga=gf([ie("wui-icon-link")],ga);const yz=be`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var p_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let q0=class extends Ee{constructor(){super(...arguments),this.icon="copy"}render(){return ee`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};q0.styles=[Ae,qt,yz];p_([U()],q0.prototype,"icon",void 0);q0=p_([ie("wui-input-element")],q0);const vz=be`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var m_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let G0=class extends Ee{constructor(){super(...arguments),this.disabled=!1}render(){return ee`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};G0.styles=[Ae,qt,vz];m_([U({type:Boolean})],G0.prototype,"disabled",void 0);G0=m_([ie("wui-input-numeric")],G0);const wz=be`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Ib=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Dd=class extends Ee{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return ee`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Dd.styles=[Ae,qt,wz];Ib([U({type:Boolean})],Dd.prototype,"disabled",void 0);Ib([U()],Dd.prototype,"color",void 0);Dd=Ib([ie("wui-link")],Dd);const bz=be`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var yi=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Er=class extends Ee{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return ee`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Ys(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return ee`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return ee`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return ee`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?ee`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ee``}chevronTemplate(){return this.chevron?ee`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Er.styles=[Ae,qt,bz];yi([U()],Er.prototype,"icon",void 0);yi([U()],Er.prototype,"iconSize",void 0);yi([U()],Er.prototype,"variant",void 0);yi([U()],Er.prototype,"iconVariant",void 0);yi([U({type:Boolean})],Er.prototype,"disabled",void 0);yi([U()],Er.prototype,"imageSrc",void 0);yi([U()],Er.prototype,"alt",void 0);yi([U({type:Boolean})],Er.prototype,"chevron",void 0);yi([U({type:Boolean})],Er.prototype,"loading",void 0);Er=yi([ie("wui-list-item")],Er);var kv;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(kv||(kv={}));const xz=be`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Pa=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ki=class extends Ee{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,n]=this.images,r=(t==null?void 0:t.type)==="NFT",i=n!=null&&n.url?n.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,ee`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,n]=this.images,r=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||n!=null&&n.url)?ee`<div class="swap-images-container">
        ${t!=null&&t.url?ee`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?ee`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?ee`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:r==="NFT"?ee`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:ee`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",n;return n=this.getIcon(),this.status&&(t=this.getStatusColor()),n?ee`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Ki.styles=[xz];Pa([U()],Ki.prototype,"type",void 0);Pa([U()],Ki.prototype,"status",void 0);Pa([U()],Ki.prototype,"direction",void 0);Pa([U()],Ki.prototype,"onlyDirectionIcon",void 0);Pa([U()],Ki.prototype,"images",void 0);Pa([U()],Ki.prototype,"secondImage",void 0);Ki=Pa([ie("wui-transaction-visual")],Ki);const Cz=be`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var hs=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let hi=class extends Ee{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return ee`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${kv[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[0];return t?ee`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[1];return t?ee`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};hi.styles=[Ae,Cz];hs([U()],hi.prototype,"type",void 0);hs([U()],hi.prototype,"descriptions",void 0);hs([U()],hi.prototype,"date",void 0);hs([U()],hi.prototype,"onlyDirectionIcon",void 0);hs([U()],hi.prototype,"status",void 0);hs([U()],hi.prototype,"direction",void 0);hs([U()],hi.prototype,"images",void 0);hi=hs([ie("wui-transaction-list-item")],hi);const Ez=be`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Sz=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Rv=class extends Ee{render(){return ee`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Rv.styles=[Ae,Ez];Rv=Sz([ie("wui-transaction-list-item-loader")],Rv);const _z=be`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var g_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let K0=class extends Ee{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,ee`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};K0.styles=[Ae,_z];g_([U()],K0.prototype,"variant",void 0);K0=g_([ie("wui-tag")],K0);const Tz=be`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var vi=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sr=class extends Ee{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return ee`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?ee` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?ee` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?ee`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?ee`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?ee`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?ee`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Sr.styles=[Ae,qt,Tz];vi([U({type:Array})],Sr.prototype,"walletImages",void 0);vi([U()],Sr.prototype,"imageSrc",void 0);vi([U()],Sr.prototype,"name",void 0);vi([U()],Sr.prototype,"tagLabel",void 0);vi([U()],Sr.prototype,"tagVariant",void 0);vi([U()],Sr.prototype,"icon",void 0);vi([U()],Sr.prototype,"walletIcon",void 0);vi([U({type:Boolean})],Sr.prototype,"disabled",void 0);vi([U({type:Boolean})],Sr.prototype,"showAllWallets",void 0);Sr=vi([ie("wui-list-wallet")],Sr);const $z=be`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var y_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Z0=class extends Ee{constructor(){super(...arguments),this.logo="google"}render(){return ee`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Z0.styles=[Ae,$z];y_([U()],Z0.prototype,"logo",void 0);Z0=y_([ie("wui-logo")],Z0);const Pz=be`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Mb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Od=class extends Ee{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return ee`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Od.styles=[Ae,qt,Pz];Mb([U()],Od.prototype,"logo",void 0);Mb([U({type:Boolean})],Od.prototype,"disabled",void 0);Od=Mb([ie("wui-logo-select")],Od);const Az=be`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Lb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let kd=class extends Ee{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return ee`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?ee`<wui-image src=${this.imageSrc}></wui-image>`:ee`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};kd.styles=[Ae,qt,Az];Lb([U()],kd.prototype,"imageSrc",void 0);Lb([U({type:Boolean})],kd.prototype,"disabled",void 0);kd=Lb([ie("wui-network-button")],kd);const Dz=be`
  :host {
    position: relative;
    display: block;
  }
`;var v_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Q0=class extends Ee{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,n)=>{const r=t.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(t.key)&&t.preventDefault();const s=i.selectionStart;switch(t.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",n):i.value="";break}},this.focusInputField=(t,n)=>{if(t==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(t==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return ee`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,n)=>ee`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,n){const r=t.target,i=this.getInputElement(r);if(i){const o=i.value;t.inputType==="insertFromPaste"?this.handlePaste(i,o,n):tt.isNumber(o)&&t.data?(i.value=t.data,this.focusInputField("next",n)):i.value=""}}handlePaste(t,n,r){const i=n[0];if(i&&tt.isNumber(i)){t.value=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){var n;return(n=t.shadowRoot)!=null&&n.querySelector("input")?t.shadowRoot.querySelector("input"):null}};Q0.styles=[Ae,Dz];v_([U({type:Number})],Q0.prototype,"length",void 0);Q0=v_([ie("wui-otp")],Q0);var yf={},Oz=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},w_={},nr={};let jb;const kz=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];nr.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};nr.getSymbolTotalCodewords=function(t){return kz[t]};nr.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};nr.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');jb=t};nr.isKanjiModeEnabled=function(){return typeof jb<"u"};nr.toSJIS=function(t){return jb(t)};var v1={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,i){if(e.isValid(r))return r;try{return t(r)}catch{return i}}})(v1);function b_(){this.buffer=[],this.length=0}b_.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Rz=b_;function vf(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}vf.prototype.set=function(e,t,n,r){const i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)};vf.prototype.get=function(e,t){return this.data[e*this.size+t]};vf.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};vf.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Nz=vf,x_={};(function(e){const t=nr.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const i=[],o=e.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(x_);var C_={};const Iz=nr.getSymbolSize,M4=7;C_.getPositions=function(t){const n=Iz(t);return[[0,0],[n-M4,0],[0,n-M4]]};var E_={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},e.from=function(i){return e.isValid(i)?parseInt(i,10):void 0},e.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,c=null,u=null;for(let d=0;d<o;d++){a=l=0,c=u=null;for(let f=0;f<o;f++){let h=i.get(d,f);h===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=h,a=1),h=i.get(f,d),h===u?l++:(l>=5&&(s+=t.N1+(l-5)),u=h,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function n(r,i,o){switch(r){case e.Patterns.PATTERN000:return(i+o)%2===0;case e.Patterns.PATTERN001:return i%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(i+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return i*o%2+i*o%3===0;case e.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case e.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},e.getBestMask=function(i,o){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),e.applyMask(c,i);const u=e.getPenaltyN1(i)+e.getPenaltyN2(i)+e.getPenaltyN3(i)+e.getPenaltyN4(i);e.applyMask(c,i),u<l&&(l=u,a=c)}return a}})(E_);var w1={};const Po=v1,oh=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],sh=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];w1.getBlocksCount=function(t,n){switch(n){case Po.L:return oh[(t-1)*4+0];case Po.M:return oh[(t-1)*4+1];case Po.Q:return oh[(t-1)*4+2];case Po.H:return oh[(t-1)*4+3];default:return}};w1.getTotalCodewordsCount=function(t,n){switch(n){case Po.L:return sh[(t-1)*4+0];case Po.M:return sh[(t-1)*4+1];case Po.Q:return sh[(t-1)*4+2];case Po.H:return sh[(t-1)*4+3];default:return}};var S_={},b1={};const Au=new Uint8Array(512),Y0=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)Au[n]=t,Y0[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)Au[n]=Au[n-255]})();b1.log=function(t){if(t<1)throw new Error("log("+t+")");return Y0[t]};b1.exp=function(t){return Au[t]};b1.mul=function(t,n){return t===0||n===0?0:Au[Y0[t]+Y0[n]]};(function(e){const t=b1;e.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=t.mul(r[s],i[a]);return o},e.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=t.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},e.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=e.mul(i,new Uint8Array([1,t.exp(o)]));return i}})(S_);const __=S_;function Fb(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Fb.prototype.initialize=function(t){this.degree=t,this.genPoly=__.generateECPolynomial(this.degree)};Fb.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const r=__.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var Mz=Fb,T_={},ps={},Bb={};Bb.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var wi={};const $_="[0-9]+",Lz="[A-Z $%*+\\-./:]+";let Rd="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Rd=Rd.replace(/u/g,"\\u");const jz="(?:(?![A-Z0-9 $%*+\\-./:]|"+Rd+`)(?:.|[\r
]))+`;wi.KANJI=new RegExp(Rd,"g");wi.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");wi.BYTE=new RegExp(jz,"g");wi.NUMERIC=new RegExp($_,"g");wi.ALPHANUMERIC=new RegExp(Lz,"g");const Fz=new RegExp("^"+Rd+"$"),Bz=new RegExp("^"+$_+"$"),Uz=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");wi.testKanji=function(t){return Fz.test(t)};wi.testNumeric=function(t){return Bz.test(t)};wi.testAlphanumeric=function(t){return Uz.test(t)};(function(e){const t=Bb,n=wi;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return n.testNumeric(o)?e.NUMERIC:n.testAlphanumeric(o)?e.ALPHANUMERIC:n.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+i)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(ps);(function(e){const t=nr,n=w1,r=v1,i=ps,o=Bb,s=7973,a=t.getBCHDigit(s);function l(f,h,p){for(let m=1;m<=40;m++)if(h<=e.getCapacity(m,p,f))return m}function c(f,h){return i.getCharCountIndicator(f,h)+4}function u(f,h){let p=0;return f.forEach(function(m){const v=c(m.mode,h);p+=v+m.getBitsLength()}),p}function d(f,h){for(let p=1;p<=40;p++)if(u(f,p)<=e.getCapacity(p,h,i.MIXED))return p}e.from=function(h,p){return o.isValid(h)?parseInt(h,10):p},e.getCapacity=function(h,p,m){if(!o.isValid(h))throw new Error("Invalid QR Code version");typeof m>"u"&&(m=i.BYTE);const v=t.getSymbolTotalCodewords(h),b=n.getTotalCodewordsCount(h,p),y=(v-b)*8;if(m===i.MIXED)return y;const x=y-c(m,h);switch(m){case i.NUMERIC:return Math.floor(x/10*3);case i.ALPHANUMERIC:return Math.floor(x/11*2);case i.KANJI:return Math.floor(x/13);case i.BYTE:default:return Math.floor(x/8)}},e.getBestVersionForData=function(h,p){let m;const v=r.from(p,r.M);if(Array.isArray(h)){if(h.length>1)return d(h,v);if(h.length===0)return 1;m=h[0]}else m=h;return l(m.mode,m.getLength(),v)},e.getEncodedBits=function(h){if(!o.isValid(h)||h<7)throw new Error("Invalid QR Code version");let p=h<<12;for(;t.getBCHDigit(p)-a>=0;)p^=s<<t.getBCHDigit(p)-a;return h<<12|p}})(T_);var P_={};const Nv=nr,A_=1335,zz=21522,L4=Nv.getBCHDigit(A_);P_.getEncodedBits=function(t,n){const r=t.bit<<3|n;let i=r<<10;for(;Nv.getBCHDigit(i)-L4>=0;)i^=A_<<Nv.getBCHDigit(i)-L4;return(r<<10|i)^zz};var D_={};const Wz=ps;function Vl(e){this.mode=Wz.NUMERIC,this.data=e.toString()}Vl.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Vl.prototype.getLength=function(){return this.data.length};Vl.prototype.getBitsLength=function(){return Vl.getBitsLength(this.data.length)};Vl.prototype.write=function(t){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),t.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),t.put(i,o*3+1))};var Vz=Vl;const Hz=ps,ig=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Hl(e){this.mode=Hz.ALPHANUMERIC,this.data=e}Hl.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Hl.prototype.getLength=function(){return this.data.length};Hl.prototype.getBitsLength=function(){return Hl.getBitsLength(this.data.length)};Hl.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let r=ig.indexOf(this.data[n])*45;r+=ig.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(ig.indexOf(this.data[n]),6)};var qz=Hl,Gz=function(t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=t.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const Kz=Gz,Zz=ps;function ql(e){this.mode=Zz.BYTE,typeof e=="string"&&(e=Kz(e)),this.data=new Uint8Array(e)}ql.getBitsLength=function(t){return t*8};ql.prototype.getLength=function(){return this.data.length};ql.prototype.getBitsLength=function(){return ql.getBitsLength(this.data.length)};ql.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var Qz=ql;const Yz=ps,Xz=nr;function Gl(e){this.mode=Yz.KANJI,this.data=e}Gl.getBitsLength=function(t){return t*13};Gl.prototype.getLength=function(){return this.data.length};Gl.prototype.getBitsLength=function(){return Gl.getBitsLength(this.data.length)};Gl.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=Xz.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var Jz=Gl,O_={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var l,c,u,d,f,h,p,m,v;!a.empty();){l=a.pop(),c=l.value,d=l.cost,f=n[c]||{};for(u in f)f.hasOwnProperty(u)&&(h=f[u],p=d+h,m=s[u],v=typeof s[u]>"u",(v||m>p)&&(s[u]=p,a.push(u,p),o[u]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var b=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=t.single_source_shortest_paths(n,r,i);return t.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(O_);var eW=O_.exports;(function(e){const t=ps,n=Vz,r=qz,i=Qz,o=Jz,s=wi,a=nr,l=eW;function c(b){return unescape(encodeURIComponent(b)).length}function u(b,y,x){const w=[];let _;for(;(_=b.exec(x))!==null;)w.push({data:_[0],index:_.index,mode:y,length:_[0].length});return w}function d(b){const y=u(s.NUMERIC,t.NUMERIC,b),x=u(s.ALPHANUMERIC,t.ALPHANUMERIC,b);let w,_;return a.isKanjiModeEnabled()?(w=u(s.BYTE,t.BYTE,b),_=u(s.KANJI,t.KANJI,b)):(w=u(s.BYTE_KANJI,t.BYTE,b),_=[]),y.concat(x,w,_).sort(function(g,T){return g.index-T.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function f(b,y){switch(y){case t.NUMERIC:return n.getBitsLength(b);case t.ALPHANUMERIC:return r.getBitsLength(b);case t.KANJI:return o.getBitsLength(b);case t.BYTE:return i.getBitsLength(b)}}function h(b){return b.reduce(function(y,x){const w=y.length-1>=0?y[y.length-1]:null;return w&&w.mode===x.mode?(y[y.length-1].data+=x.data,y):(y.push(x),y)},[])}function p(b){const y=[];for(let x=0;x<b.length;x++){const w=b[x];switch(w.mode){case t.NUMERIC:y.push([w,{data:w.data,mode:t.ALPHANUMERIC,length:w.length},{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.ALPHANUMERIC:y.push([w,{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.KANJI:y.push([w,{data:w.data,mode:t.BYTE,length:c(w.data)}]);break;case t.BYTE:y.push([{data:w.data,mode:t.BYTE,length:c(w.data)}])}}return y}function m(b,y){const x={},w={start:{}};let _=["start"];for(let $=0;$<b.length;$++){const g=b[$],T=[];for(let D=0;D<g.length;D++){const k=g[D],I=""+$+D;T.push(I),x[I]={node:k,lastCount:0},w[I]={};for(let V=0;V<_.length;V++){const Q=_[V];x[Q]&&x[Q].node.mode===k.mode?(w[Q][I]=f(x[Q].lastCount+k.length,k.mode)-f(x[Q].lastCount,k.mode),x[Q].lastCount+=k.length):(x[Q]&&(x[Q].lastCount=k.length),w[Q][I]=f(k.length,k.mode)+4+t.getCharCountIndicator(k.mode,y))}}_=T}for(let $=0;$<_.length;$++)w[_[$]].end=0;return{map:w,table:x}}function v(b,y){let x;const w=t.getBestModeForData(b);if(x=t.from(y,w),x!==t.BYTE&&x.bit<w.bit)throw new Error('"'+b+'" cannot be encoded with mode '+t.toString(x)+`.
 Suggested mode is: `+t.toString(w));switch(x===t.KANJI&&!a.isKanjiModeEnabled()&&(x=t.BYTE),x){case t.NUMERIC:return new n(b);case t.ALPHANUMERIC:return new r(b);case t.KANJI:return new o(b);case t.BYTE:return new i(b)}}e.fromArray=function(y){return y.reduce(function(x,w){return typeof w=="string"?x.push(v(w,null)):w.data&&x.push(v(w.data,w.mode)),x},[])},e.fromString=function(y,x){const w=d(y,a.isKanjiModeEnabled()),_=p(w),$=m(_,x),g=l.find_path($.map,"start","end"),T=[];for(let D=1;D<g.length-1;D++)T.push($.table[g[D]].node);return e.fromArray(h(T))},e.rawSplit=function(y){return e.fromArray(d(y,a.isKanjiModeEnabled()))}})(D_);const x1=nr,og=v1,tW=Rz,nW=Nz,rW=x_,iW=C_,Iv=E_,Mv=w1,oW=Mz,X0=T_,sW=P_,aW=ps,sg=D_;function lW(e,t){const n=e.size,r=iW.getPositions(t);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(o+a,s+l,!0,!0):e.set(o+a,s+l,!1,!0))}}function cW(e){const t=e.size;for(let n=8;n<t-8;n++){const r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function uW(e,t){const n=rW.getPositions(t);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(i+s,o+a,!0,!0):e.set(i+s,o+a,!1,!0)}}function dW(e,t){const n=e.size,r=X0.getEncodedBits(t);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,e.set(i,o,s,!0),e.set(o,i,s,!0)}function ag(e,t,n){const r=e.size,i=sW.getEncodedBits(t,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function fW(e,t){const n=e.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(i,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>o&1)===1),e.set(i,a-l,c),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function hW(e,t,n){const r=new tW;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),aW.getCharCountIndicator(l.mode,e)),l.write(r)});const i=x1.getSymbolTotalCodewords(e),o=Mv.getTotalCodewordsCount(e,t),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return pW(r,e,t)}function pW(e,t,n){const r=x1.getSymbolTotalCodewords(t),i=Mv.getTotalCodewordsCount(t,n),o=r-i,s=Mv.getBlocksCount(t,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),d=u+1,f=c-u,h=new oW(f);let p=0;const m=new Array(s),v=new Array(s);let b=0;const y=new Uint8Array(e.buffer);for(let g=0;g<s;g++){const T=g<l?u:d;m[g]=y.slice(p,p+T),v[g]=h.encode(m[g]),p+=T,b=Math.max(b,T)}const x=new Uint8Array(r);let w=0,_,$;for(_=0;_<b;_++)for($=0;$<s;$++)_<m[$].length&&(x[w++]=m[$][_]);for(_=0;_<f;_++)for($=0;$<s;$++)x[w++]=v[$][_];return x}function mW(e,t,n,r){let i;if(Array.isArray(e))i=sg.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const u=sg.rawSplit(e);c=X0.getBestVersionForData(u,n)}i=sg.fromString(e,c||40)}else throw new Error("Invalid data");const o=X0.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=hW(t,n,i),a=x1.getSymbolSize(t),l=new nW(a);return lW(l,t),cW(l),uW(l,t),ag(l,n,0),t>=7&&dW(l,t),fW(l,s),isNaN(r)&&(r=Iv.getBestMask(l,ag.bind(null,l,n))),Iv.applyMask(r,l),ag(l,n,r),{modules:l,version:t,errorCorrectionLevel:n,maskPattern:r,segments:i}}w_.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let r=og.M,i,o;return typeof n<"u"&&(r=og.from(n.errorCorrectionLevel,og.M),i=X0.from(n.version),o=Iv.from(n.maskPattern),n.toSJISFunc&&x1.setToSJISFunction(n.toSJISFunc)),mW(t,i,r,o)};var k_={},Ub={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},e.getImageWidth=function(r,i){const o=e.getScale(r,i);return Math.floor((r+i.margin*2)*o)},e.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=e.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,d=[o.color.light,o.color.dark];for(let f=0;f<c;f++)for(let h=0;h<c;h++){let p=(f*c+h)*4,m=o.color.light;if(f>=u&&h>=u&&f<c-u&&h<c-u){const v=Math.floor((f-u)/l),b=Math.floor((h-u)/l);m=d[a[v*s+b]?1:0]}r[p++]=m.r,r[p++]=m.g,r[p++]=m.b,r[p]=m.a}}})(Ub);(function(e){const t=Ub;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=t.getOptions(l);const u=t.getImageWidth(o.modules.size,l),d=c.getContext("2d"),f=d.createImageData(u,u);return t.qrToImageData(f.data,o,l),n(d,c,u),d.putImageData(f,0,0),c},e.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(o,s,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}})(k_);var R_={};const gW=Ub;function j4(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function lg(e,t,n){let r=e+t;return typeof n<"u"&&(r+=" "+n),r}function yW(e,t,n){let r="",i=0,o=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!o&&(o=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(r+=o?lg("M",l+n,.5+c+n):lg("m",i,0),i=0,o=!1),l+1<t&&e[a+1]||(r+=lg("h",s),s=0)):i++}return r}R_.render=function(t,n,r){const i=gW.getOptions(n),o=t.modules.size,s=t.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+j4(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+j4(i.color.dark,"stroke")+' d="'+yW(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,f),f};const vW=Oz,Lv=w_,N_=k_,wW=R_;function zb(e,t,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!vW())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=t,t=r=void 0):s===3&&(t.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=r=void 0):s===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(l,c){try{const u=Lv.create(n,r);l(e(u,t,r))}catch(u){c(u)}})}try{const l=Lv.create(n,r);i(null,e(l,t,r))}catch(l){i(l)}}yf.create=Lv.create;yf.toCanvas=zb.bind(null,N_.render);yf.toDataURL=zb.bind(null,N_.renderToDataURL);yf.toString=zb.bind(null,function(e,t,n){return wW.render(e,n)});const bW=.1,F4=2.5,Ei=7;function cg(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+bW}function xW(e,t){const n=Array.prototype.slice.call(yf.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const CW={generate(e,t,n){const r="#141414",i="transparent",s=[],a=xW(e,"Q"),l=t/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:m,y:v})=>{const b=(a.length-Ei)*l*m,y=(a.length-Ei)*l*v,x=.45;for(let w=0;w<c.length;w+=1){const _=l*(Ei-w*2);s.push(se`
            <rect
              fill=${w===2?r:i}
              width=${w===0?_-5:_}
              rx= ${w===0?(_-5)*x:_*x}
              ry= ${w===0?(_-5)*x:_*x}
              stroke=${r}
              stroke-width=${w===0?5:0}
              height=${w===0?_-5:_}
              x= ${w===0?y+l*w+5/2:y+l*w}
              y= ${w===0?b+l*w+5/2:b+l*w}
            />
          `)}});const u=Math.floor((n+25)/l),d=a.length/2-u/2,f=a.length/2+u/2-1,h=[];a.forEach((m,v)=>{m.forEach((b,y)=>{if(a[v][y]&&!(v<Ei&&y<Ei||v>a.length-(Ei+1)&&y<Ei||v<Ei&&y>a.length-(Ei+1))&&!(v>d&&v<f&&y>d&&y<f)){const x=v*l+l/2,w=y*l+l/2;h.push([x,w])}})});const p={};return h.forEach(([m,v])=>{var b;p[m]?(b=p[m])==null||b.push(v):p[m]=[v]}),Object.entries(p).map(([m,v])=>{const b=v.filter(y=>v.every(x=>!cg(y,x,l)));return[Number(m),b]}).forEach(([m,v])=>{v.forEach(b=>{s.push(se`<circle cx=${m} cy=${b} fill=${r} r=${l/F4} />`)})}),Object.entries(p).filter(([m,v])=>v.length>1).map(([m,v])=>{const b=v.filter(y=>v.some(x=>cg(y,x,l)));return[Number(m),b]}).map(([m,v])=>{v.sort((y,x)=>y<x?-1:1);const b=[];for(const y of v){const x=b.find(w=>w.some(_=>cg(y,_,l)));x?x.push(y):b.push([y])}return[m,b.map(y=>[y[0],y[y.length-1]])]}).forEach(([m,v])=>{v.forEach(([b,y])=>{s.push(se`
              <line
                x1=${m}
                x2=${m}
                y1=${b}
                y2=${y}
                stroke=${r}
                stroke-width=${l/(F4/2)}
                stroke-linecap="round"
              />
            `)})}),s}},EW=be`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var xc=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ts=class extends Ee{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,ee`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return se`
      <svg height=${t} width=${t}>
        ${CW.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?ee`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:ee`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ts.styles=[Ae,EW];xc([U()],ts.prototype,"uri",void 0);xc([U({type:Number})],ts.prototype,"size",void 0);xc([U()],ts.prototype,"theme",void 0);xc([U()],ts.prototype,"imageSrc",void 0);xc([U()],ts.prototype,"alt",void 0);ts=xc([ie("wui-qr-code")],ts);const SW=be`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var _W=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let jv=class extends Ee{constructor(){super(...arguments),this.inputComponentRef=d_()}render(){return ee`
      <wui-input-text
        ${f_(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};jv.styles=[Ae,SW];jv=_W([ie("wui-search-bar")],jv);const TW=be`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var wf=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ya=class extends Ee{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return ee`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};ya.styles=[Ae,TW];wf([U()],ya.prototype,"backgroundColor",void 0);wf([U()],ya.prototype,"iconColor",void 0);wf([U()],ya.prototype,"icon",void 0);wf([U()],ya.prototype,"message",void 0);ya=wf([ie("wui-snackbar")],ya);const $W=be`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ms=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let pi=class extends Ee{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,n)=>{const r=n===this.activeTab;return ee`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,n){const r=this.buttons[this.activeTab],i=this.buttons[t],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(t!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};pi.styles=[Ae,qt,$W];ms([U({type:Array})],pi.prototype,"tabs",void 0);ms([U()],pi.prototype,"onTabChange",void 0);ms([U({type:Array})],pi.prototype,"buttons",void 0);ms([U({type:Boolean})],pi.prototype,"disabled",void 0);ms([Ob()],pi.prototype,"activeTab",void 0);ms([Ob()],pi.prototype,"localTabWidth",void 0);ms([Ob()],pi.prototype,"isDense",void 0);pi=ms([ie("wui-tabs")],pi);const PW=be`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Wb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Nd=class extends Ee{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return ee`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Nd.styles=[Ae,qt,PW];Wb([U()],Nd.prototype,"placement",void 0);Wb([U()],Nd.prototype,"message",void 0);Nd=Wb([ie("wui-tooltip")],Nd);const AW=be`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var C1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kl=class extends Ee{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,ee`${this.templateVisual()}`}templateVisual(){return this.imageSrc?ee`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:ee`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Kl.styles=[Ae,AW];C1([U()],Kl.prototype,"imageSrc",void 0);C1([U()],Kl.prototype,"alt",void 0);C1([U({type:Boolean})],Kl.prototype,"borderRadiusFull",void 0);Kl=C1([ie("wui-visual-thumbnail")],Kl);const DW=be`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var $r=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zn=class extends Ee{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tt.getSpacingStyles(this.margin,3)};
    `,ee`<slot></slot>`}};zn.styles=[Ae,DW];$r([U()],zn.prototype,"gridTemplateRows",void 0);$r([U()],zn.prototype,"gridTemplateColumns",void 0);$r([U()],zn.prototype,"justifyItems",void 0);$r([U()],zn.prototype,"alignItems",void 0);$r([U()],zn.prototype,"justifyContent",void 0);$r([U()],zn.prototype,"alignContent",void 0);$r([U()],zn.prototype,"columnGap",void 0);$r([U()],zn.prototype,"rowGap",void 0);$r([U()],zn.prototype,"gap",void 0);$r([U()],zn.prototype,"padding",void 0);$r([U()],zn.prototype,"margin",void 0);zn=$r([ie("wui-grid")],zn);const OW=be`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var I_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let J0=class extends Ee{constructor(){super(...arguments),this.text=""}render(){return ee`${this.template()}`}template(){return this.text?ee`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};J0.styles=[Ae,OW];I_([U()],J0.prototype,"text",void 0);J0=I_([ie("wui-separator")],J0);var M_={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Nw,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",d="month",f="quarter",h="year",p="date",m="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(B){var M=["th","st","nd","rd"],L=B%100;return"["+B+(M[(L-20)%10]||M[L]||M[0])+"]"}},x=function(B,M,L){var z=String(B);return!z||z.length>=M?B:""+Array(M+1-z.length).join(L)+B},w={s:x,z:function(B){var M=-B.utcOffset(),L=Math.abs(M),z=Math.floor(L/60),R=L%60;return(M<=0?"+":"-")+x(z,2,"0")+":"+x(R,2,"0")},m:function B(M,L){if(M.date()<L.date())return-B(L,M);var z=12*(L.year()-M.year())+(L.month()-M.month()),R=M.clone().add(z,d),q=L-R<0,G=M.clone().add(z+(q?-1:1),d);return+(-(z+(L-R)/(q?R-G:G-R))||0)},a:function(B){return B<0?Math.ceil(B)||0:Math.floor(B)},p:function(B){return{M:d,y:h,w:u,d:c,D:p,h:l,m:a,s,ms:o,Q:f}[B]||String(B||"").toLowerCase().replace(/s$/,"")},u:function(B){return B===void 0}},_="en",$={};$[_]=y;var g="$isDayjsObject",T=function(B){return B instanceof V||!(!B||!B[g])},D=function B(M,L,z){var R;if(!M)return _;if(typeof M=="string"){var q=M.toLowerCase();$[q]&&(R=q),L&&($[q]=L,R=q);var G=M.split("-");if(!R&&G.length>1)return B(G[0])}else{var Z=M.name;$[Z]=M,R=Z}return!z&&R&&(_=R),R||!z&&_},k=function(B,M){if(T(B))return B.clone();var L=typeof M=="object"?M:{};return L.date=B,L.args=arguments,new V(L)},I=w;I.l=D,I.i=T,I.w=function(B,M){return k(B,{locale:M.$L,utc:M.$u,x:M.$x,$offset:M.$offset})};var V=function(){function B(L){this.$L=D(L.locale,null,!0),this.parse(L),this.$x=this.$x||L.x||{},this[g]=!0}var M=B.prototype;return M.parse=function(L){this.$d=function(z){var R=z.date,q=z.utc;if(R===null)return new Date(NaN);if(I.u(R))return new Date;if(R instanceof Date)return new Date(R);if(typeof R=="string"&&!/Z$/i.test(R)){var G=R.match(v);if(G){var Z=G[2]-1||0,Y=(G[7]||"0").substring(0,3);return q?new Date(Date.UTC(G[1],Z,G[3]||1,G[4]||0,G[5]||0,G[6]||0,Y)):new Date(G[1],Z,G[3]||1,G[4]||0,G[5]||0,G[6]||0,Y)}}return new Date(R)}(L),this.init()},M.init=function(){var L=this.$d;this.$y=L.getFullYear(),this.$M=L.getMonth(),this.$D=L.getDate(),this.$W=L.getDay(),this.$H=L.getHours(),this.$m=L.getMinutes(),this.$s=L.getSeconds(),this.$ms=L.getMilliseconds()},M.$utils=function(){return I},M.isValid=function(){return this.$d.toString()!==m},M.isSame=function(L,z){var R=k(L);return this.startOf(z)<=R&&R<=this.endOf(z)},M.isAfter=function(L,z){return k(L)<this.startOf(z)},M.isBefore=function(L,z){return this.endOf(z)<k(L)},M.$g=function(L,z,R){return I.u(L)?this[z]:this.set(R,L)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(L,z){var R=this,q=!!I.u(z)||z,G=I.p(L),Z=function(he,ve){var ce=I.w(R.$u?Date.UTC(R.$y,ve,he):new Date(R.$y,ve,he),R);return q?ce:ce.endOf(c)},Y=function(he,ve){return I.w(R.toDate()[he].apply(R.toDate("s"),(q?[0,0,0,0]:[23,59,59,999]).slice(ve)),R)},J=this.$W,ne=this.$M,de=this.$D,ye="set"+(this.$u?"UTC":"");switch(G){case h:return q?Z(1,0):Z(31,11);case d:return q?Z(1,ne):Z(0,ne+1);case u:var xe=this.$locale().weekStart||0,Te=(J<xe?J+7:J)-xe;return Z(q?de-Te:de+(6-Te),ne);case c:case p:return Y(ye+"Hours",0);case l:return Y(ye+"Minutes",1);case a:return Y(ye+"Seconds",2);case s:return Y(ye+"Milliseconds",3);default:return this.clone()}},M.endOf=function(L){return this.startOf(L,!1)},M.$set=function(L,z){var R,q=I.p(L),G="set"+(this.$u?"UTC":""),Z=(R={},R[c]=G+"Date",R[p]=G+"Date",R[d]=G+"Month",R[h]=G+"FullYear",R[l]=G+"Hours",R[a]=G+"Minutes",R[s]=G+"Seconds",R[o]=G+"Milliseconds",R)[q],Y=q===c?this.$D+(z-this.$W):z;if(q===d||q===h){var J=this.clone().set(p,1);J.$d[Z](Y),J.init(),this.$d=J.set(p,Math.min(this.$D,J.daysInMonth())).$d}else Z&&this.$d[Z](Y);return this.init(),this},M.set=function(L,z){return this.clone().$set(L,z)},M.get=function(L){return this[I.p(L)]()},M.add=function(L,z){var R,q=this;L=Number(L);var G=I.p(z),Z=function(ne){var de=k(q);return I.w(de.date(de.date()+Math.round(ne*L)),q)};if(G===d)return this.set(d,this.$M+L);if(G===h)return this.set(h,this.$y+L);if(G===c)return Z(1);if(G===u)return Z(7);var Y=(R={},R[a]=r,R[l]=i,R[s]=n,R)[G]||1,J=this.$d.getTime()+L*Y;return I.w(J,this)},M.subtract=function(L,z){return this.add(-1*L,z)},M.format=function(L){var z=this,R=this.$locale();if(!this.isValid())return R.invalidDate||m;var q=L||"YYYY-MM-DDTHH:mm:ssZ",G=I.z(this),Z=this.$H,Y=this.$m,J=this.$M,ne=R.weekdays,de=R.months,ye=R.meridiem,xe=function(ve,ce,$e,pe){return ve&&(ve[ce]||ve(z,q))||$e[ce].slice(0,pe)},Te=function(ve){return I.s(Z%12||12,ve,"0")},he=ye||function(ve,ce,$e){var pe=ve<12?"AM":"PM";return $e?pe.toLowerCase():pe};return q.replace(b,function(ve,ce){return ce||function($e){switch($e){case"YY":return String(z.$y).slice(-2);case"YYYY":return I.s(z.$y,4,"0");case"M":return J+1;case"MM":return I.s(J+1,2,"0");case"MMM":return xe(R.monthsShort,J,de,3);case"MMMM":return xe(de,J);case"D":return z.$D;case"DD":return I.s(z.$D,2,"0");case"d":return String(z.$W);case"dd":return xe(R.weekdaysMin,z.$W,ne,2);case"ddd":return xe(R.weekdaysShort,z.$W,ne,3);case"dddd":return ne[z.$W];case"H":return String(Z);case"HH":return I.s(Z,2,"0");case"h":return Te(1);case"hh":return Te(2);case"a":return he(Z,Y,!0);case"A":return he(Z,Y,!1);case"m":return String(Y);case"mm":return I.s(Y,2,"0");case"s":return String(z.$s);case"ss":return I.s(z.$s,2,"0");case"SSS":return I.s(z.$ms,3,"0");case"Z":return G}return null}(ve)||G.replace(":","")})},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(L,z,R){var q,G=this,Z=I.p(z),Y=k(L),J=(Y.utcOffset()-this.utcOffset())*r,ne=this-Y,de=function(){return I.m(G,Y)};switch(Z){case h:q=de()/12;break;case d:q=de();break;case f:q=de()/3;break;case u:q=(ne-J)/6048e5;break;case c:q=(ne-J)/864e5;break;case l:q=ne/i;break;case a:q=ne/r;break;case s:q=ne/n;break;default:q=ne}return R?q:I.a(q)},M.daysInMonth=function(){return this.endOf(d).$D},M.$locale=function(){return $[this.$L]},M.locale=function(L,z){if(!L)return this.$L;var R=this.clone(),q=D(L,z,!0);return q&&(R.$L=q),R},M.clone=function(){return I.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},B}(),Q=V.prototype;return k.prototype=Q,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",d],["$y",h],["$D",p]].forEach(function(B){Q[B[1]]=function(M){return this.$g(M,B[0],B[1])}}),k.extend=function(B,M){return B.$i||(B(M,V,k),B.$i=!0),k},k.locale=D,k.isDayjs=T,k.unix=function(B){return k(1e3*B)},k.en=$[_],k.Ls=$,k.p={},k})})(M_);var kW=M_.exports;const Id=Ca(kW);var L_={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Nw,function(){return function(n,r,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(L_);var RW=L_.exports;const NW=Ca(RW);var j_={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Nw,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,d,f){return o.fromToBase(c,u,d,f)}i.en.relativeTime=s,o.fromToBase=function(c,u,d,f,h){for(var p,m,v,b=d.$locale().relativeTime||s,y=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],x=y.length,w=0;w<x;w+=1){var _=y[w];_.d&&(p=f?i(c).diff(d,_.d,!0):d.diff(c,_.d,!0));var $=(n.rounding||Math.round)(Math.abs(p));if(v=p>0,$<=_.r||!_.r){$<=1&&w>0&&(_=y[w-1]);var g=b[_.l];h&&($=h(""+$)),m=typeof g=="string"?g.replace("%d",$):g($,u,_.l,v);break}}if(u)return m;var T=v?b.future:b.past;return typeof T=="function"?T(m):T.replace("%s",m)},o.to=function(c,u){return a(c,u,this,!0)},o.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?i.utc():i()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(j_);var IW=j_.exports;const MW=Ca(IW);Id.extend(MW);Id.extend(NW);Id.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const F_={getYear(e=new Date().toISOString()){return Id(e).year()},getRelativeDateFromNow(e){return Id(e).fromNow(!0)}},LW=3,jW=["receive","deposit","borrow","claim"],FW=["withdraw","repay","burn"],dl={getTransactionGroupTitle(e){const t=F_.getYear();return e===t?"This Year":e},getTransactionImages(e){const[t,n]=e,r=!!t&&(e==null?void 0:e.every(s=>!!s.nft_info)),i=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!r?[this.getTransactionImage(t),this.getTransactionImage(n)]:i?e.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:dl.getTransactionTransferTokenType(e),url:dl.getTransactionImageURL(e)}},getTransactionImageURL(e){var i,o,s,a,l;let t=null;const n=!!(e!=null&&e.nft_info),r=!!(e!=null&&e.fungible_info);return e&&n?t=(s=(o=(i=e==null?void 0:e.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:e&&r&&(t=(l=(a=e==null?void 0:e.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),t},getTransactionTransferTokenType(e){return e!=null&&e.fungible_info?"FUNGIBLE":e!=null&&e.nft_info?"NFT":null},getTransactionDescriptions(e){var d,f,h;const t=(d=e.metadata)==null?void 0:d.operationType,n=e.transfers,r=((f=e.transfers)==null?void 0:f.length)>0,i=((h=e.transfers)==null?void 0:h.length)>1,o=r&&(n==null?void 0:n.every(p=>!!p.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!r)return(t==="send"||t==="receive")&&o?(l=tt.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=tt.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[e.metadata.status];if(i)return n.map(p=>this.getTransferDescription(p));let u="";return jW.includes(t)?u="+":FW.includes(t)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(e){var n;let t="";return e&&(e!=null&&e.nft_info?t=((n=e==null?void 0:e.nft_info)==null?void 0:n.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var r;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(r=e==null?void 0:e.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(LW):null}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zh=globalThis,Vb=zh.ShadowRoot&&(zh.ShadyCSS===void 0||zh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hb=Symbol(),B4=new WeakMap;let B_=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Hb)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Vb&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=B4.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&B4.set(n,t))}return t}toString(){return this.cssText}};const BW=e=>new B_(typeof e=="string"?e:e+"",void 0,Hb),Dn=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new B_(n,e,Hb)},UW=(e,t)=>{if(Vb)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=zh.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},U4=Vb?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return BW(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zW,defineProperty:WW,getOwnPropertyDescriptor:VW,getOwnPropertyNames:HW,getOwnPropertySymbols:qW,getPrototypeOf:GW}=Object,Vo=globalThis,z4=Vo.trustedTypes,KW=z4?z4.emptyScript:"",ug=Vo.reactiveElementPolyfillSupport,Du=(e,t)=>e,ep={toAttribute(e,t){switch(t){case Boolean:e=e?KW:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},qb=(e,t)=>!zW(e,t),W4={attribute:!0,type:String,converter:ep,reflect:!1,hasChanged:qb};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Vo.litPropertyMetadata??(Vo.litPropertyMetadata=new WeakMap);let Ka=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=W4){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&WW(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=VW(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W4}static _$Ei(){if(this.hasOwnProperty(Du("elementProperties")))return;const t=GW(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Du("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Du("properties"))){const n=this.properties,r=[...HW(n),...qW(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(U4(i))}else t!==void 0&&n.push(U4(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return UW(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:ep).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:ep;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,o){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??qb)(i?o:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};Ka.elementStyles=[],Ka.shadowRootOptions={mode:"open"},Ka[Du("elementProperties")]=new Map,Ka[Du("finalized")]=new Map,ug==null||ug({ReactiveElement:Ka}),(Vo.reactiveElementVersions??(Vo.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ou=globalThis,tp=Ou.trustedTypes,V4=tp?tp.createPolicy("lit-html",{createHTML:e=>e}):void 0,U_="$lit$",Eo=`lit$${(Math.random()+"").slice(9)}$`,z_="?"+Eo,ZW=`<${z_}>`,va=document,Md=()=>va.createComment(""),Ld=e=>e===null||typeof e!="object"&&typeof e!="function",W_=Array.isArray,QW=e=>W_(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",dg=`[ 	
\f\r]`,Zc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H4=/-->/g,q4=/>/g,Es=RegExp(`>|${dg}(?:([^\\s"'>=/]+)(${dg}*=${dg}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G4=/'/g,K4=/"/g,V_=/^(?:script|style|textarea|title)$/i,YW=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),X=YW(1),Zl=Symbol.for("lit-noChange"),zt=Symbol.for("lit-nothing"),Z4=new WeakMap,Ws=va.createTreeWalker(va,129);function H_(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return V4!==void 0?V4.createHTML(t):t}const XW=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=Zc;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===Zc?u[1]==="!--"?s=H4:u[1]!==void 0?s=q4:u[2]!==void 0?(V_.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Es):u[3]!==void 0&&(s=Es):s===Es?u[0]===">"?(s=i??Zc,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Es:u[3]==='"'?K4:G4):s===K4||s===G4?s=Es:s===H4||s===q4?s=Zc:(s=Es,i=void 0);const h=s===Es&&e[a+1].startsWith("/>")?" ":"";o+=s===Zc?l+ZW:d>=0?(r.push(c),l.slice(0,d)+U_+l.slice(d)+Eo+h):l+Eo+(d===-2?a:h)}return[H_(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class jd{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=XW(t,n);if(this.el=jd.createElement(c,r),Ws.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Ws.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(U_)){const f=u[s++],h=i.getAttribute(d).split(Eo),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:p[2],strings:h,ctor:p[1]==="."?eV:p[1]==="?"?tV:p[1]==="@"?nV:E1}),i.removeAttribute(d)}else d.startsWith(Eo)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(V_.test(i.tagName)){const d=i.textContent.split(Eo),f=d.length-1;if(f>0){i.textContent=tp?tp.emptyScript:"";for(let h=0;h<f;h++)i.append(d[h],Md()),Ws.nextNode(),l.push({type:2,index:++o});i.append(d[f],Md())}}}else if(i.nodeType===8)if(i.data===z_)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Eo,d+1))!==-1;)l.push({type:7,index:o}),d+=Eo.length-1}o++}}static createElement(t,n){const r=va.createElement("template");return r.innerHTML=t,r}}function Ql(e,t,n=e,r){var s,a;if(t===Zl)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Ld(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=Ql(e,i._$AS(e,t.values),i,r)),t}let JW=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??va).importNode(n,!0);Ws.currentNode=i;let o=Ws.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Gb(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new rV(o,this,t)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Ws.nextNode(),s++)}return Ws.currentNode=va,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},Gb=class q_{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=zt,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ql(this,t,n),Ld(t)?t===zt||t==null||t===""?(this._$AH!==zt&&this._$AR(),this._$AH=zt):t!==this._$AH&&t!==Zl&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):QW(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==zt&&Ld(this._$AH)?this._$AA.nextSibling.data=t:this.$(va.createTextNode(t)),this._$AH=t}g(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=jd.createElement(H_(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new JW(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=Z4.get(t.strings);return n===void 0&&Z4.set(t.strings,n=new jd(t)),n}T(t){W_(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new q_(this.k(Md()),this.k(Md()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},E1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=zt,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=zt}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Ql(this,t,n,0),s=!Ld(t)||t!==this._$AH&&t!==Zl,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Ql(this,a[r+l],n,l),c===Zl&&(c=this._$AH[l]),s||(s=!Ld(c)||c!==this._$AH[l]),c===zt?t=zt:t!==zt&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.O(t)}O(t){t===zt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},eV=class extends E1{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===zt?void 0:t}},tV=class extends E1{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==zt)}},nV=class extends E1{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=Ql(this,t,n,0)??zt)===Zl)return;const r=this._$AH,i=t===zt&&r!==zt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==zt&&(r===zt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},rV=class{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ql(this,t)}};const fg=Ou.litHtmlPolyfillSupport;fg==null||fg(jd,Gb),(Ou.litHtmlVersions??(Ou.litHtmlVersions=[])).push("3.1.0");const iV=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Gb(t.insertBefore(Md(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ve=class extends Ka{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=iV(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Zl}};var CC;Ve._$litElement$=!0,Ve.finalized=!0,(CC=globalThis.litElementHydrateSupport)==null||CC.call(globalThis,{LitElement:Ve});const hg=globalThis.litElementPolyfillSupport;hg==null||hg({LitElement:Ve});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oV={attribute:!0,type:String,converter:ep,reflect:!1,hasChanged:qb},sV=(e=oV,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function Gt(e){return(t,n)=>typeof n=="object"?sV(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(e){return Gt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=e=>e??zt;var eo=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let mi=class extends Ve{constructor(){super(),this.unsubscribe=[],this.networkImages=Bo.state.networkImages,this.disabled=!1,this.balance="show",this.address=Qe.state.address,this.balanceVal=Qe.state.balance,this.balanceSymbol=Qe.state.balanceSymbol,this.profileName=Qe.state.profileName,this.profileImage=Qe.state.profileImage,this.network=ht.state.caipNetwork,this.unsubscribe.push(Qe.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),ht.subscribeKey("caipNetwork",t=>this.network=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const t=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return X`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${He(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${He(t)}
        avatarSrc=${He(this.profileImage)}
        balance=${n?we.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){Yt.open()}};eo([Gt({type:Boolean})],mi.prototype,"disabled",void 0);eo([Gt()],mi.prototype,"balance",void 0);eo([_e()],mi.prototype,"address",void 0);eo([_e()],mi.prototype,"balanceVal",void 0);eo([_e()],mi.prototype,"balanceSymbol",void 0);eo([_e()],mi.prototype,"profileName",void 0);eo([_e()],mi.prototype,"profileImage",void 0);eo([_e()],mi.prototype,"network",void 0);mi=eo([ie("w3m-account-button")],mi);var Aa=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ns=class extends Ve{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Qe.state.isConnected,this.unsubscribe.push(Qe.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?X`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${He(this.balance)}
          >
          </w3m-account-button>
        `:X`
          <w3m-connect-button
            size=${He(this.size)}
            label=${He(this.label)}
            loadingLabel=${He(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Aa([Gt({type:Boolean})],ns.prototype,"disabled",void 0);Aa([Gt()],ns.prototype,"balance",void 0);Aa([Gt()],ns.prototype,"size",void 0);Aa([Gt()],ns.prototype,"label",void 0);Aa([Gt()],ns.prototype,"loadingLabel",void 0);Aa([_e()],ns.prototype,"isAccount",void 0);ns=Aa([ie("w3m-button")],ns);var bf=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Yl=class extends Ve{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Yt.state.open,this.unsubscribe.push(Yt.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return X`
      <wui-connect-button
        size=${He(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Yt.close():Yt.open()}};bf([Gt()],Yl.prototype,"size",void 0);bf([Gt()],Yl.prototype,"label",void 0);bf([Gt()],Yl.prototype,"loadingLabel",void 0);bf([_e()],Yl.prototype,"open",void 0);Yl=bf([ie("w3m-connect-button")],Yl);const aV=Dn`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var G_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const Q4="scroll-lock";let Fd=class extends Ve{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Yt.state.open,this.initializeTheming(),Fe.prefetch(),this.unsubscribe.push(Yt.subscribeKey("open",t=>t?this.onOpen():this.onClose())),Xe.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?X`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&Yt.close()}initializeTheming(){const{themeVariables:t,themeMode:n}=lr.state,r=tt.getColorTheme(n);yB(t,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,wr.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=Q4,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${Q4}"]`);t&&t.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")Yt.close();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}};Fd.styles=aV;G_([_e()],Fd.prototype,"open",void 0);Fd=G_([ie("w3m-modal")],Fd);const lV=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Fd}},Symbol.toStringTag,{value:"Module"}));var S1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Bd=class extends Ve{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=ht.state.caipNetwork,this.connected=Qe.state.isConnected,this.unsubscribe.push(ht.subscribeKey("caipNetwork",t=>this.network=t),Qe.subscribeKey("isConnected",t=>this.connected=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return X`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${He(Lt.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((t=this.network)==null?void 0:t.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){Yt.open({view:"Networks"})}};S1([Gt({type:Boolean})],Bd.prototype,"disabled",void 0);S1([_e()],Bd.prototype,"network",void 0);S1([_e()],Bd.prototype,"connected",void 0);Bd=S1([ie("w3m-network-button")],Bd);const cV=Dn`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var K_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let np=class extends Ve{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ke.state.view,this.unsubscribe.push(ke.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{const n=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return X`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return X`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return X`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return X`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return X`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return X`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return X`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return X`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return X`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return X`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return X`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return X`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return X`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return X`<w3m-transactions-view></w3m-transactions-view>`;default:return X`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(t){const{history:n}=ke.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};np.styles=cV;K_([_e()],np.prototype,"view",void 0);np=K_([ie("w3m-router")],np);const uV=Dn`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var gs=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let gi=class extends Ve{constructor(){super(),this.usubscribe=[],this.networkImages=Bo.state.networkImages,this.address=Qe.state.address,this.profileImage=Qe.state.profileImage,this.profileName=Qe.state.profileName,this.balance=Qe.state.balance,this.balanceSymbol=Qe.state.balanceSymbol,this.network=ht.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Qe.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):Yt.close()}),ht.subscribeKey("caipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return X`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${He(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?tt.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):tt.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${we.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${He(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:t}=Qe.state;return t?X`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:t}=ht.state,n=t?t.length>1:!1,r=t==null?void 0:t.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(we.copyToClopboard(this.address),wr.showSuccess("Address copied"))}catch{wr.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&ke.push("Networks")}onTransactions(){Xe.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),ke.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Ge.disconnect(),Xe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Yt.close()}catch{Xe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),wr.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=Qe.state;t&&we.openHref(t,"_blank")}};gi.styles=uV;gs([_e()],gi.prototype,"address",void 0);gs([_e()],gi.prototype,"profileImage",void 0);gs([_e()],gi.prototype,"profileName",void 0);gs([_e()],gi.prototype,"balance",void 0);gs([_e()],gi.prototype,"balanceSymbol",void 0);gs([_e()],gi.prototype,"network",void 0);gs([_e()],gi.prototype,"disconecting",void 0);gi=gs([ie("w3m-account-view")],gi);var Z_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Fv=class extends Ve{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=we.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return X`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?X`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:X`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return we.isMobile()?X`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ke.push("ConnectingWalletConnect")}};Z_([_e()],Fv.prototype,"search",void 0);Fv=Z_([ie("w3m-all-wallets-view")],Fv);const dV=Dn`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Q_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let rp=class extends Ve{constructor(){super(),this.unsubscribe=[],this.connectors=vr.state.connectors,this.unsubscribe.push(vr.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return X`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(we.isMobile())return null;const t=this.connectors.find(n=>n.type==="WALLET_CONNECT");return t?X`
      <wui-list-wallet
        imageSrc=${He(Lt.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=qe.state;return t!=null&&t.length?this.filterOutDuplicateWallets(t).map(r=>X`
        <wui-list-wallet
          imageSrc=${He(Lt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:t}=Fe.state;return t.length?this.filterOutDuplicateWallets(t).map(r=>X`
        <wui-list-wallet
          imageSrc=${He(Lt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return yr.getRecentWallets().map(n=>X`
        <wui-list-wallet
          imageSrc=${He(Lt.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>t.type!=="ANNOUNCED"?null:X`
        <wui-list-wallet
          imageSrc=${He(Lt.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const t=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Ge.checkInstalled()?null:X`
        <wui-list-wallet
          imageSrc=${He(Lt.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${He(t?void 0:"installed")}
          tagVariant=${He(t?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:X`
        <wui-list-wallet
          imageSrc=${He(Lt.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const t=Math.floor(Fe.state.count/10)*10;return X`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t}=Fe.state,{customWallets:n,featuredWalletIds:r}=qe.state,{connectors:i}=vr.state,o=yr.getRecentWallets(),s=i.filter(u=>u.type==="ANNOUNCED");if(r||n||!t.length)return null;const a=s.length+o.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(t).slice(0,l).map(u=>X`
        <wui-list-wallet
          imageSrc=${He(Lt.getWalletImage(u))}
          name=${(u==null?void 0:u.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(u)}
        >
        </wui-list-wallet>
      `)}onConnector(t){t.type==="WALLET_CONNECT"?we.isMobile()?ke.push("AllWallets"):ke.push("ConnectingWalletConnect"):ke.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){const{connectors:n}=vr.state,i=yr.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return t.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Xe.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),ke.push("AllWallets")}onConnectWallet(t){ke.push("ConnectingWalletConnect",{wallet:t})}};rp.styles=dV;Q_([_e()],rp.prototype,"connectors",void 0);rp=Q_([ie("w3m-connect-view")],rp);const fV=Dn`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Da=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class Vn extends Ve{constructor(){var t,n,r,i;super(),this.wallet=(t=ke.state.data)==null?void 0:t.wallet,this.connector=(n=ke.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Lt.getWalletImage(this.wallet)??Lt.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=Ge.state.wcUri,this.error=Ge.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ge.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Ge.subscribeKey("wcError",o=>this.error=o),Ge.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),X`
      <wui-flex
        data-error=${He(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${He(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?X`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,n;this.buffering||(Ge.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const t=lr.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return X`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(we.copyToClopboard(this.uri),wr.showSuccess("Link copied"))}catch{wr.showError("Failed to copy")}}}Vn.styles=fV;Da([_e()],Vn.prototype,"uri",void 0);Da([_e()],Vn.prototype,"error",void 0);Da([_e()],Vn.prototype,"ready",void 0);Da([_e()],Vn.prototype,"showRetry",void 0);Da([_e()],Vn.prototype,"buffering",void 0);Da([Gt({type:Boolean})],Vn.prototype,"isMobile",void 0);Da([Gt()],Vn.prototype,"onRetry",void 0);var hV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const pV={INJECTED:"browser",ANNOUNCED:"browser"};let Y4=class extends Vn{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:pV[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&yr.setConnectedWalletImageUrl(this.connector.imageUrl),await Ge.connectExternal(this.connector),Yt.close(),Xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){Xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Y4=hV([ie("w3m-connecting-external-view")],Y4);var mV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let X4=class extends Ve{constructor(){var t,n;super(...arguments),this.dappUrl=(t=qe.state.metadata)==null?void 0:t.url,this.dappName=(n=qe.state.metadata)==null?void 0:n.name}render(){return X`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?X`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&we.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){ke.goBack()}};X4=mV([ie("w3m-connecting-siwe-view")],X4);var Kb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ip=class extends Ve{constructor(){var t;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(t=ke.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),au.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),X`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):X`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:n}=Ge.state;if(t||we.isPairingExpired(n)){if(Ge.connectWalletConnect(),this.wallet){const r=Lt.getWalletImage(this.wallet);r&&yr.setConnectedWalletImageUrl(r)}else{const i=vr.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=Lt.getConnectorImage(i);o&&yr.setConnectedWalletImageUrl(o)}await Ge.state.wcPromise,this.finalizeConnection(),Yt.close()}}catch(n){Xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Ge.setWcError(!0),we.isAllowedRetry(this.lastRetry)&&(wr.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:t,recentWallet:n}=Ge.state;t&&yr.setWalletConnectDeepLink(t),n&&yr.setWeb3ModalRecent(n),Xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:p})=>p).filter(Boolean),a=o?[o]:s??[],l=a.length,c=t,u=r,d=Ge.checkInstalled(a),f=l&&d,h=n&&!we.isMobile();f&&this.platforms.push("browser"),c&&this.platforms.push(we.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!f&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return X`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return X`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return X`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return X`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return X`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return X`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?X`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Kb([_e()],ip.prototype,"platform",void 0);Kb([_e()],ip.prototype,"platforms",void 0);ip=Kb([ie("w3m-connecting-wc-view")],ip);var gV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let J4=class extends Ve{constructor(){var t;super(...arguments),this.wallet=(t=ke.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return X`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?X`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?X`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?X`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?X`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&we.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&we.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&we.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&we.openHref(this.wallet.homepage,"_blank")}};J4=gV([ie("w3m-downloads-view")],J4);var yV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const vV="https://walletconnect.com/explorer";let ex=class extends Ve{render(){return X`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{we.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=Fe.state,{customWallets:r}=qe.state;return[...n,...r??[],...t].slice(0,4).map(o=>X`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${He(Lt.getWalletImage(o))}
          @click=${()=>{we.openHref(o.homepage??vV,"_blank")}}
        ></wui-list-wallet>
      `)}};ex=yV([ie("w3m-get-wallet-view")],ex);const wV=Dn`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var _1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Xl=class extends Ve{constructor(){var t;super(),this.network=(t=ke.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=ht.state.caipNetwork,this.unsubscribe.push(ht.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&ke.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return X`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${He(Lt.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:X`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await ht.switchActiveNetwork(this.network),ke.goBack())}catch{this.error=!0}}};Xl.styles=wV;_1([_e()],Xl.prototype,"showRetry",void 0);_1([_e()],Xl.prototype,"error",void 0);_1([_e()],Xl.prototype,"currentNetwork",void 0);Xl=_1([ie("w3m-network-switch-view")],Xl);var Y_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Bv=class extends Ve{constructor(){super(),this.unsubscribe=[],this.caipNetwork=ht.state.caipNetwork,this.unsubscribe.push(ht.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return X`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Xe.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),ke.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:n,supportsAllNetworks:r}=ht.state,i=t,o=n;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return X`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${He(Lt.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(t){const{isConnected:n}=Qe.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=ht.state;n&&(o==null?void 0:o.id)!==t.id?r!=null&&r.includes(t.id)?await ht.switchActiveNetwork(t):i&&ke.push("SwitchNetwork",{network:t}):n||(ht.setCaipNetwork(t),ke.push("Connect"))}};Y_([_e()],Bv.prototype,"caipNetwork",void 0);Bv=Y_([ie("w3m-networks-view")],Bv);const bV=Dn`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var Oa=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const ah="last-transaction",xV=7;let Zi=class extends Ve{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=Qe.state.address,this.transactions=Rr.state.transactions,this.transactionsByYear=Rr.state.transactionsByYear,this.loading=Rr.state.loading,this.empty=Rr.state.empty,this.next=Rr.state.next,this.unsubscribe.push(Qe.subscribe(t=>{t.isConnected&&this.address!==t.address&&(this.address=t.address,Rr.resetTransactions(),Rr.fetchTransactions(t.address))}),Rr.subscribe(t=>{this.transactions=t.transactions,this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.transactions.length===0&&Rr.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return X`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const t=Object.keys(this.transactionsByYear).sort().reverse();return t.map((n,r)=>{const i=r===t.length-1,o=parseInt(n,10),s=dl.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?X`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(t,n){const{date:r,descriptions:i,direction:o,isAllNFT:s,images:a,status:l,transfers:c,type:u}=this.getTransactionListItemProps(t),d=(c==null?void 0:c.length)>1;return(c==null?void 0:c.length)===2&&!s?X`
        <wui-transaction-list-item
          date=${r}
          direction=${o}
          id=${n&&this.next?ah:""}
          status=${l}
          type=${u}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:d?c.map((h,p)=>{const m=dl.getTransferDescription(h),v=n&&p===c.length-1;return X` <wui-transaction-list-item
          date=${r}
          direction=${h.direction}
          id=${v&&this.next?ah:""}
          status=${l}
          type=${u}
          onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[p]]}
          .descriptions=${[m]}
        ></wui-transaction-list-item>`}):X`
      <wui-transaction-list-item
        date=${r}
        direction=${o}
        id=${n&&this.next?ah:""}
        status=${l}
        type=${u}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(t,n){return t.map((r,i)=>{const o=n&&i===t.length-1;return X`${this.templateRenderTransaction(r,o)}`})}templateEmpty(){return X`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(xV).fill(X` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}createPaginationObserver(){const{projectId:t}=qe.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(Rr.fetchTransactions(this.address),Xe.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:t,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,i;(n=this.paginationObserver)==null||n.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${ah}`);t&&((i=this.paginationObserver)==null||i.observe(t))}getTransactionListItemProps(t){var l,c,u,d,f;const n=F_.getRelativeDateFromNow((l=t==null?void 0:t.metadata)==null?void 0:l.minedAt),r=dl.getTransactionDescriptions(t),i=t==null?void 0:t.transfers,o=(c=t==null?void 0:t.transfers)==null?void 0:c[0],s=!!o&&((u=t==null?void 0:t.transfers)==null?void 0:u.every(h=>!!h.nft_info)),a=dl.getTransactionImages(i);return{date:n,direction:o==null?void 0:o.direction,descriptions:r,isAllNFT:s,images:a,status:(d=t.metadata)==null?void 0:d.status,transfers:i,type:(f=t.metadata)==null?void 0:f.operationType}}};Zi.styles=bV;Oa([_e()],Zi.prototype,"address",void 0);Oa([_e()],Zi.prototype,"transactions",void 0);Oa([_e()],Zi.prototype,"transactionsByYear",void 0);Oa([_e()],Zi.prototype,"loading",void 0);Oa([_e()],Zi.prototype,"empty",void 0);Oa([_e()],Zi.prototype,"next",void 0);Zi=Oa([ie("w3m-transactions-view")],Zi);var CV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const EV=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let tx=class extends Ve{render(){return X`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${EV}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{we.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tx=CV([ie("w3m-what-is-a-network-view")],tx);var SV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const _V=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let nx=class extends Ve{render(){return X`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${_V}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Xe.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),ke.push("GetWallet")}};nx=SV([ie("w3m-what-is-a-wallet-view")],nx);const TV=Dn`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var xf=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const rx="local-paginator";let wa=class extends Ve{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Fe.state.wallets.length,this.wallets=Fe.state.wallets,this.recommended=Fe.state.recommended,this.featured=Fe.state.featured,this.unsubscribe.push(Fe.subscribeKey("wallets",t=>this.wallets=t),Fe.subscribeKey("recommended",t=>this.recommended=t),Fe.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return X`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&t&&(await Fe.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>X`
        <wui-card-select-loader type="wallet" id=${He(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>X`
        <wui-card-select
          imageSrc=${He(Lt.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:i}=Fe.state,o=window.innerWidth<352?3:4,s=t.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=t.length?r.length%o:0,i===0||[...r,...t,...n].length<i?this.shimmerTemplate(l,rx):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${rx}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=Fe.state;s.length<o&&Fe.fetchWallets({page:i+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:n}=vr.state,r=n.find(({explorerId:i})=>i===t.id);r?ke.push("ConnectingExternal",{connector:r}):ke.push("ConnectingWalletConnect",{wallet:t})}};wa.styles=TV;xf([_e()],wa.prototype,"initial",void 0);xf([_e()],wa.prototype,"wallets",void 0);xf([_e()],wa.prototype,"recommended",void 0);xf([_e()],wa.prototype,"featured",void 0);wa=xf([ie("w3m-all-wallets-list")],wa);const $V=Dn`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Zb=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ud=class extends Ve{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?X`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Fe.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=Fe.state;return t.length?X`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>X`
            <wui-card-select
              imageSrc=${He(Lt.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:X`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:n}=vr.state,r=n.find(({explorerId:i})=>i===t.id);r?ke.push("ConnectingExternal",{connector:r}):ke.push("ConnectingWalletConnect",{wallet:t})}};Ud.styles=$V;Zb([_e()],Ud.prototype,"loading",void 0);Zb([Gt()],Ud.prototype,"query",void 0);Ud=Zb([ie("w3m-all-wallets-search")],Ud);var T1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zd=class extends Ve{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ge.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return X`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var r;const n=this.platformTabs[t];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};T1([Gt({type:Array})],zd.prototype,"platforms",void 0);T1([Gt()],zd.prototype,"onSelectPlatfrom",void 0);T1([_e()],zd.prototype,"buffering",void 0);zd=T1([ie("w3m-connecting-header")],zd);var PV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ix=class extends Vn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=vr.state,n=t.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=t.find(i=>i.type==="INJECTED");n?await Ge.connectExternal(n):r&&await Ge.connectExternal(r),Yt.close(),Xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){Xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};ix=PV([ie("w3m-connecting-wc-browser")],ix);var AV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ox=class extends Vn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var t;(t=this.onConnect)==null||t.call(this)},200))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=we.formatNativeUrl(n,this.uri);Ge.setWcLinking({name:r,href:o}),Ge.setRecentWallet(this.wallet),we.openHref(i,"_self")}catch{this.error=!0}}};ox=AV([ie("w3m-connecting-wc-desktop")],ox);var DV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let sx=class extends Vn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=we.formatNativeUrl(n,this.uri);Ge.setWcLinking({name:r,href:o}),Ge.setRecentWallet(this.wallet),we.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const t=we.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(Ge.setBuffering(!0),setTimeout(()=>{Ge.setBuffering(!1)},5e3))}};sx=DV([ie("w3m-connecting-wc-mobile")],sx);const OV=Dn`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var kV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Uv=class extends Vn{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),X`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Ge.setWcLinking(void 0),Ge.setRecentWallet(this.wallet),X`<wui-qr-code
      size=${t}
      theme=${lr.state.themeMode}
      uri=${this.uri}
      imageSrc=${He(Lt.getWalletImage(this.wallet))}
      alt=${He(n)}
    ></wui-qr-code>`}};Uv.styles=OV;Uv=kV([ie("w3m-connecting-wc-qrcode")],Uv);const RV=Dn`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var NV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zv=class extends Ve{constructor(){var t;super(...arguments),this.dappImageUrl=(t=qe.state.metadata)==null?void 0:t.icons,this.walletImageUrl=yr.getConnectedWalletImageUrl()}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return X`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,n){t.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};zv.styles=RV;zv=NV([ie("w3m-connecting-siwe")],zv);var IV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ax=class extends Ve{constructor(){var t;if(super(),this.wallet=(t=ke.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return X`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${He(Lt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ax=IV([ie("w3m-connecting-wc-unsupported")],ax);var MV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let lx=class extends Vn{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=we.formatUniversalUrl(n,this.uri);Ge.setWcLinking({name:r,href:o}),Ge.setRecentWallet(this.wallet),we.openHref(i,"_blank")}catch{this.error=!0}}};lx=MV([ie("w3m-connecting-wc-web")],lx);const LV=Dn`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var $1=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};function cx(){var i,o,s,a,l,c;const e=(o=(i=ke.state.data)==null?void 0:i.connector)==null?void 0:o.name,t=(a=(s=ke.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(c=(l=ke.state.data)==null?void 0:l.network)==null?void 0:c.name,r=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads",Transactions:"Activity"}}let Jl=class extends Ve{constructor(){super(),this.unsubscribe=[],this.heading=cx()[ke.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ke.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),Ge.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return X`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${Yt.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Xe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),ke.push("WhatIsAWallet")}titleTemplate(){return X`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=ke.state,n=t==="Connect";return this.showBack?X`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${ke.goBack}
      ></wui-icon-link>`:X`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?X`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=cx()[t];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:t}=ke.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Jl.styles=[LV];$1([_e()],Jl.prototype,"heading",void 0);$1([_e()],Jl.prototype,"buffering",void 0);$1([_e()],Jl.prototype,"showBack",void 0);Jl=$1([ie("w3m-header")],Jl);var X_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Wv=class extends Ve{constructor(){super(...arguments),this.data=[]}render(){return X`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>X`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(n=>X`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};X_([Gt({type:Array})],Wv.prototype,"data",void 0);Wv=X_([ie("w3m-help-widget")],Wv);const jV=Dn`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var FV=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Vv=class extends Ve{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=qe.state;return!t&&!n?null:X`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=qe.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=qe.state;return t?X`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=qe.state;return t?X`<a href=${t}>Privacy Policy</a>`:null}};Vv.styles=[jV];Vv=FV([ie("w3m-legal-footer")],Vv);const BV=Dn`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var J_=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let op=class extends Ve{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=we.isMobile(),a=we.isIos(),l=we.isAndroid(),c=[n,r,o,i].filter(Boolean).length>1,u=tt.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?X`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>ke.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?X`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?X`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?X`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&we.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&we.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&we.openHref(this.wallet.homepage,"_blank")}};op.styles=[BV];J_([Gt({type:Object})],op.prototype,"wallet",void 0);op=J_([ie("w3m-mobile-download-links")],op);const UV=Dn`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var eT=function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const zV={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let sp=class extends Ve{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=wr.state.open,this.unsubscribe.push(wr.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=wr.state,r=zV[n];return X`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>wr.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};sp.styles=UV;eT([_e()],sp.prototype,"open",void 0);sp=eT([ie("w3m-snackbar")],sp);let ux=!1;class WV{constructor(t){this.initPromise=void 0,this.setIsConnected=n=>{Qe.setIsConnected(n)},this.setCaipAddress=n=>{Qe.setCaipAddress(n)},this.setBalance=(n,r)=>{Qe.setBalance(n,r)},this.setProfileName=n=>{Qe.setProfileName(n)},this.setProfileImage=n=>{Qe.setProfileImage(n)},this.resetAccount=()=>{Qe.resetAccount()},this.setCaipNetwork=n=>{ht.setCaipNetwork(n)},this.getCaipNetwork=()=>ht.state.caipNetwork,this.setRequestedCaipNetworks=n=>{ht.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>ht.getApprovedCaipNetworksData(),this.resetNetwork=()=>{ht.resetNetwork()},this.setConnectors=n=>{vr.setConnectors(n)},this.addConnector=n=>{vr.addConnector(n)},this.getConnectors=()=>vr.getConnectors(),this.resetWcConnection=()=>{Ge.resetWcConnection()},this.fetchIdentity=n=>HS.fetchIdentity(n),this.setAddressExplorerUrl=n=>{Qe.setAddressExplorerUrl(n)},this.setSIWENonce=n=>{ni.setNonce(n)},this.setSIWESession=n=>{ni.setSession(n)},this.setSIWEStatus=n=>{ni.setStatus(n)},this.setSIWEMessage=n=>{ni.setMessage(n)},this.getSIWENonce=()=>ni.state.nonce,this.getSIWESession=()=>ni.state.session,this.getSIWEStatus=()=>ni.state.status,this.getSIWEMessage=()=>ni.state.message,this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),Yt.open(t)}async close(){await this.initOrContinue(),Yt.close()}getThemeMode(){return lr.state.themeMode}getThemeVariables(){return lr.state.themeVariables}setThemeMode(t){lr.setThemeMode(t),t_(lr.state.themeMode)}setThemeVariables(t){lr.setThemeVariables(t),vB(lr.state.themeVariables)}subscribeTheme(t){return lr.subscribe(t)}getState(){return{...Ll.state}}subscribeState(t){return Ll.subscribe(t)}getEvent(){return{...Xe.state}}subscribeEvents(t){return Xe.subscribe(t)}subscribeSIWEState(t){return ni.subscribe(t)}initControllers(t){ht.setClient(t.networkControllerClient),ht.setDefaultCaipNetwork(t.defaultChain),qe.setProjectId(t.projectId),qe.setIncludeWalletIds(t.includeWalletIds),qe.setExcludeWalletIds(t.excludeWalletIds),qe.setFeaturedWalletIds(t.featuredWalletIds),qe.setTokens(t.tokens),qe.setTermsConditionsUrl(t.termsConditionsUrl),qe.setPrivacyPolicyUrl(t.privacyPolicyUrl),qe.setCustomWallets(t.customWallets),qe.setEnableAnalytics(t.enableAnalytics),qe.setSdkVersion(t._sdkVersion),Ge.setClient(t.connectionControllerClient),t.siweControllerClient&&ni.setSIWEClient(t.siweControllerClient),t.metadata&&qe.setMetadata(t.metadata),t.themeMode&&lr.setThemeMode(t.themeMode),t.themeVariables&&lr.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!ux&&we.isClient()&&(ux=!0,this.initPromise=new Promise(async t=>{await Promise.all([Ml(()=>import("./index-5E35rYOb.js"),__vite__mapDeps([])),Ml(()=>Promise.resolve().then(()=>lV),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),t()})),this.initPromise}}const Ie={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.4.0"},Ds={ConnectorExplorerIds:{[Ie.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Ie.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Ie.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[Ie.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Ie.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Ie.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Ie.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Ie.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Ie.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Ie.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Ie.COINBASE_CONNECTOR_ID]:"Coinbase",[Ie.LEDGER_CONNECTOR_ID]:"Ledger",[Ie.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Ie.INJECTED_CONNECTOR_ID]:"INJECTED",[Ie.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Ie.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},Ba={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,r])=>{t[`${Ie.EIP155}:${n}`]=r}),t}};function VV(e){if(e)return{id:`${Ie.EIP155}:${e.id}`,name:e.name,imageId:Ds.EIP155NetworkImageIds[e.id]}}const HV="wagmi.wallet";let qV=class extends WV{constructor(t){const{wagmiConfig:n,siweConfig:r,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...l}=t;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!l.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(d=>d.id===Ie.WALLET_CONNECT_CONNECTOR_ID))throw new Error("web3modal:constructor - WalletConnectConnector is required");const c={switchCaipNetwork:async d=>{const f=Ba.caipNetworkIdToNumber(d==null?void 0:d.id);f&&await IS({chainId:f})},async getApprovedCaipNetworksData(){var f,h,p,m;const d=localStorage.getItem(HV);if(d!=null&&d.includes(Ie.WALLET_CONNECT_CONNECTOR_ID)){const v=n.connectors.find(_=>_.id===Ie.WALLET_CONNECT_CONNECTOR_ID);if(!v)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const y=(h=(f=(await v.getProvider()).signer)==null?void 0:f.session)==null?void 0:h.namespaces,x=(p=y==null?void 0:y[Ie.EIP155])==null?void 0:p.methods,w=(m=y==null?void 0:y[Ie.EIP155])==null?void 0:m.chains;return{supportsAllNetworks:x==null?void 0:x.includes(Ie.ADD_CHAIN_METHOD),approvedCaipNetworkIds:w}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async d=>{var p;const f=n.connectors.find(m=>m.id===Ie.WALLET_CONNECT_CONNECTOR_ID);if(!f)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");f.on("message",m=>{m.type==="display_uri"&&(d(m.data),f.removeAllListeners())});const h=Ba.caipNetworkIdToNumber((p=this.getCaipNetwork())==null?void 0:p.id);await g4({connector:f,chainId:h})},connectExternal:async({id:d,provider:f,info:h})=>{var v,b;const p=n.connectors.find(y=>y.id===d);if(!p)throw new Error("connectionControllerClient:connectExternal - connector is undefined");f&&h&&p.id===Ie.EIP6963_CONNECTOR_ID&&((v=p.setEip6963Wallet)==null||v.call(p,{provider:f,info:h}));const m=Ba.caipNetworkIdToNumber((b=this.getCaipNetwork())==null?void 0:b.id);await g4({connector:p,chainId:m})},checkInstalled:d=>{const f=this.getConnectors().filter(p=>p.type==="ANNOUNCED"),h=this.getConnectors().find(p=>p.type==="INJECTED");return d?f.length&&d.some(m=>f.some(v=>{var b;return((b=v.info)==null?void 0:b.rdns)===m}))?!0:h&&window!=null&&window.ethereum?d.some(p=>{var m;return!!((m=window.ethereum)!=null&&m[String(p)])}):!1:!!window.ethereum},disconnect:Jj};super({networkControllerClient:c,connectionControllerClient:u,siweControllerClient:r,defaultChain:VV(o),tokens:Ba.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${Ie.VERSION}`,...l}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(i),this.syncConnectors(n),this.listenConnectors(n),MS(()=>this.syncAccount()),LS(()=>this.syncNetwork())}getState(){const t=super.getState();return{...t,selectedNetworkId:Ba.caipNetworkIdToNumber(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState(n=>t({...n,selectedNetworkId:Ba.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(t){const n=t==null?void 0:t.map(r=>{var i,o;return{id:`${Ie.EIP155}:${r.id}`,name:r.name,imageId:Ds.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:t,isConnected:n}=I0(),{chain:r}=M0();if(this.resetAccount(),n&&t&&r){const i=`${Ie.EIP155}:${r.id}:${t}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(t),this.syncBalance(t,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:t,isConnected:n}=I0(),{chain:r}=M0();if(r){const l=String(r.id),c=`${Ie.EIP155}:${l}`;if(this.setCaipNetwork({id:c,name:r.name,imageId:Ds.EIP155NetworkImageIds[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&t){const u=`${Ie.EIP155}:${r.id}:${t}`;if(this.setCaipAddress(u),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const d=`${r.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(d)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,r)}}}async syncProfile(t){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${Ie.EIP155}:${Fh.id}`,address:t});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await lF({address:t,chainId:Fh.id});if(n){this.setProfileName(n);const r=await aF({name:n,chainId:Fh.id});r&&this.setProfileImage(r)}}}async syncBalance(t,n){var i,o,s;const r=await NS({address:t,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(t){const n=[];t.connectors.forEach(({id:r,name:i})=>{var o,s;r!==Ie.EIP6963_CONNECTOR_ID&&n.push({id:r,explorerId:Ds.ConnectorExplorerIds[r],imageId:Ds.ConnectorImageIds[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:Ds.ConnectorNamesMap[r]??i,type:Ds.ConnectorTypesMap[r]??"EXTERNAL"})}),this.setConnectors(n)}eip6963EventHandler(t,n){var r,i;if(n.detail){const{info:o,provider:s}=n.detail;this.getConnectors().find(c=>c.name===o.name)||(this.addConnector({id:Ie.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(r=this.options)==null?void 0:r.connectorImages)==null?void 0:i[Ie.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),t.isAuthorized({info:o,provider:s}))}}listenConnectors(t){const n=t.connectors.find(r=>r.id===Ie.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&n){const r=this.eip6963EventHandler.bind(this,n);window.addEventListener(Ie.EIP6963_ANNOUNCE_EVENT,r),window.dispatchEvent(new Event(Ie.EIP6963_REQUEST_EVENT))}}};var lh=function(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n},ch=function(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)},Wh,uo;const pg="connectedRdns";class GV extends yb{constructor(t){super({chains:t.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",Wh.set(this,void 0),uo.set(this,void 0),lh(this,Wh,this.options.getProvider(),"f")}async connect(t){var r;const n=await super.connect(t);return ch(this,uo,"f")&&((r=this.storage)==null||r.setItem(pg,ch(this,uo,"f").info.rdns)),n}async disconnect(){var t;await super.disconnect(),(t=this.storage)==null||t.removeItem(pg),lh(this,uo,void 0,"f")}async isAuthorized(t){var r;const n=(r=this.storage)==null?void 0:r.getItem(pg);if(n){if(!t||n!==t.info.rdns)return!0;lh(this,uo,t,"f")}return super.isAuthorized()}async getProvider(){var t;return Promise.resolve(((t=ch(this,uo,"f"))==null?void 0:t.provider)??ch(this,Wh,"f"))}setEip6963Wallet(t){lh(this,uo,t,"f")}}Wh=new WeakMap,uo=new WeakMap;var tT={},P1={};P1.byteLength=QV;P1.toByteArray=XV;P1.fromByteArray=tH;var ai=[],cr=[],KV=typeof Uint8Array<"u"?Uint8Array:Array,mg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Ua=0,ZV=mg.length;Ua<ZV;++Ua)ai[Ua]=mg[Ua],cr[mg.charCodeAt(Ua)]=Ua;cr[45]=62;cr[95]=63;function nT(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function QV(e){var t=nT(e),n=t[0],r=t[1];return(n+r)*3/4-r}function YV(e,t,n){return(t+n)*3/4-n}function XV(e){var t,n=nT(e),r=n[0],i=n[1],o=new KV(YV(e,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)t=cr[e.charCodeAt(l)]<<18|cr[e.charCodeAt(l+1)]<<12|cr[e.charCodeAt(l+2)]<<6|cr[e.charCodeAt(l+3)],o[s++]=t>>16&255,o[s++]=t>>8&255,o[s++]=t&255;return i===2&&(t=cr[e.charCodeAt(l)]<<2|cr[e.charCodeAt(l+1)]>>4,o[s++]=t&255),i===1&&(t=cr[e.charCodeAt(l)]<<10|cr[e.charCodeAt(l+1)]<<4|cr[e.charCodeAt(l+2)]>>2,o[s++]=t>>8&255,o[s++]=t&255),o}function JV(e){return ai[e>>18&63]+ai[e>>12&63]+ai[e>>6&63]+ai[e&63]}function eH(e,t,n){for(var r,i=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(e[o+2]&255),i.push(JV(r));return i.join("")}function tH(e){for(var t,n=e.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(eH(e,s,s+o>a?a:s+o));return r===1?(t=e[n-1],i.push(ai[t>>2]+ai[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(ai[t>>10]+ai[t>>4&63]+ai[t<<2&63]+"=")),i.join("")}var Qb={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Qb.read=function(e,t,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,f=n?-1:1,h=e[t+d];for(d+=f,o=h&(1<<-u)-1,h>>=-u,u+=a;u>0;o=o*256+e[t+d],d+=f,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=s*256+e[t+d],d+=f,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(h?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-c}return(h?-1:1)*s*Math.pow(2,o-r)};Qb.write=function(e,t,n,r,i,o){var s,a,l,c=o*8-i-1,u=(1<<c)-1,d=u>>1,f=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:o-1,p=r?1:-1,m=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?t+=f/l:t+=f*Math.pow(2,1-d),t*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(t*l-1)*Math.pow(2,i),s=s+d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;e[n+h]=a&255,h+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+h]=s&255,h+=p,s/=256,c-=8);e[n+h-p]|=m*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=P1,n=Qb,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50;const i=2147483647;e.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const P=new Uint8Array(1),C={foo:function(){return 42}};return Object.setPrototypeOf(C,Uint8Array.prototype),Object.setPrototypeOf(P,C),P.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(P){if(P>i)throw new RangeError('The value "'+P+'" is invalid for option "size"');const C=new Uint8Array(P);return Object.setPrototypeOf(C,a.prototype),C}function a(P,C,E){if(typeof P=="number"){if(typeof C=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d(P)}return l(P,C,E)}a.poolSize=8192;function l(P,C,E){if(typeof P=="string")return f(P,C);if(ArrayBuffer.isView(P))return p(P);if(P==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof P);if(je(P,ArrayBuffer)||P&&je(P.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(je(P,SharedArrayBuffer)||P&&je(P.buffer,SharedArrayBuffer)))return m(P,C,E);if(typeof P=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const A=P.valueOf&&P.valueOf();if(A!=null&&A!==P)return a.from(A,C,E);const N=v(P);if(N)return N;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof P[Symbol.toPrimitive]=="function")return a.from(P[Symbol.toPrimitive]("string"),C,E);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof P)}a.from=function(P,C,E){return l(P,C,E)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(P){if(typeof P!="number")throw new TypeError('"size" argument must be of type number');if(P<0)throw new RangeError('The value "'+P+'" is invalid for option "size"')}function u(P,C,E){return c(P),P<=0?s(P):C!==void 0?typeof E=="string"?s(P).fill(C,E):s(P).fill(C):s(P)}a.alloc=function(P,C,E){return u(P,C,E)};function d(P){return c(P),s(P<0?0:b(P)|0)}a.allocUnsafe=function(P){return d(P)},a.allocUnsafeSlow=function(P){return d(P)};function f(P,C){if((typeof C!="string"||C==="")&&(C="utf8"),!a.isEncoding(C))throw new TypeError("Unknown encoding: "+C);const E=x(P,C)|0;let A=s(E);const N=A.write(P,C);return N!==E&&(A=A.slice(0,N)),A}function h(P){const C=P.length<0?0:b(P.length)|0,E=s(C);for(let A=0;A<C;A+=1)E[A]=P[A]&255;return E}function p(P){if(je(P,Uint8Array)){const C=new Uint8Array(P);return m(C.buffer,C.byteOffset,C.byteLength)}return h(P)}function m(P,C,E){if(C<0||P.byteLength<C)throw new RangeError('"offset" is outside of buffer bounds');if(P.byteLength<C+(E||0))throw new RangeError('"length" is outside of buffer bounds');let A;return C===void 0&&E===void 0?A=new Uint8Array(P):E===void 0?A=new Uint8Array(P,C):A=new Uint8Array(P,C,E),Object.setPrototypeOf(A,a.prototype),A}function v(P){if(a.isBuffer(P)){const C=b(P.length)|0,E=s(C);return E.length===0||P.copy(E,0,0,C),E}if(P.length!==void 0)return typeof P.length!="number"||nt(P.length)?s(0):h(P);if(P.type==="Buffer"&&Array.isArray(P.data))return h(P.data)}function b(P){if(P>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return P|0}function y(P){return+P!=P&&(P=0),a.alloc(+P)}a.isBuffer=function(C){return C!=null&&C._isBuffer===!0&&C!==a.prototype},a.compare=function(C,E){if(je(C,Uint8Array)&&(C=a.from(C,C.offset,C.byteLength)),je(E,Uint8Array)&&(E=a.from(E,E.offset,E.byteLength)),!a.isBuffer(C)||!a.isBuffer(E))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(C===E)return 0;let A=C.length,N=E.length;for(let F=0,H=Math.min(A,N);F<H;++F)if(C[F]!==E[F]){A=C[F],N=E[F];break}return A<N?-1:N<A?1:0},a.isEncoding=function(C){switch(String(C).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(C,E){if(!Array.isArray(C))throw new TypeError('"list" argument must be an Array of Buffers');if(C.length===0)return a.alloc(0);let A;if(E===void 0)for(E=0,A=0;A<C.length;++A)E+=C[A].length;const N=a.allocUnsafe(E);let F=0;for(A=0;A<C.length;++A){let H=C[A];if(je(H,Uint8Array))F+H.length>N.length?(a.isBuffer(H)||(H=a.from(H)),H.copy(N,F)):Uint8Array.prototype.set.call(N,H,F);else if(a.isBuffer(H))H.copy(N,F);else throw new TypeError('"list" argument must be an Array of Buffers');F+=H.length}return N};function x(P,C){if(a.isBuffer(P))return P.length;if(ArrayBuffer.isView(P)||je(P,ArrayBuffer))return P.byteLength;if(typeof P!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof P);const E=P.length,A=arguments.length>2&&arguments[2]===!0;if(!A&&E===0)return 0;let N=!1;for(;;)switch(C){case"ascii":case"latin1":case"binary":return E;case"utf8":case"utf-8":return Yr(P).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E*2;case"hex":return E>>>1;case"base64":return Ct(P).length;default:if(N)return A?-1:Yr(P).length;C=(""+C).toLowerCase(),N=!0}}a.byteLength=x;function w(P,C,E){let A=!1;if((C===void 0||C<0)&&(C=0),C>this.length||((E===void 0||E>this.length)&&(E=this.length),E<=0)||(E>>>=0,C>>>=0,E<=C))return"";for(P||(P="utf8");;)switch(P){case"hex":return q(this,C,E);case"utf8":case"utf-8":return B(this,C,E);case"ascii":return z(this,C,E);case"latin1":case"binary":return R(this,C,E);case"base64":return Q(this,C,E);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G(this,C,E);default:if(A)throw new TypeError("Unknown encoding: "+P);P=(P+"").toLowerCase(),A=!0}}a.prototype._isBuffer=!0;function _(P,C,E){const A=P[C];P[C]=P[E],P[E]=A}a.prototype.swap16=function(){const C=this.length;if(C%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let E=0;E<C;E+=2)_(this,E,E+1);return this},a.prototype.swap32=function(){const C=this.length;if(C%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let E=0;E<C;E+=4)_(this,E,E+3),_(this,E+1,E+2);return this},a.prototype.swap64=function(){const C=this.length;if(C%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let E=0;E<C;E+=8)_(this,E,E+7),_(this,E+1,E+6),_(this,E+2,E+5),_(this,E+3,E+4);return this},a.prototype.toString=function(){const C=this.length;return C===0?"":arguments.length===0?B(this,0,C):w.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(C){if(!a.isBuffer(C))throw new TypeError("Argument must be a Buffer");return this===C?!0:a.compare(this,C)===0},a.prototype.inspect=function(){let C="";const E=e.INSPECT_MAX_BYTES;return C=this.toString("hex",0,E).replace(/(.{2})/g,"$1 ").trim(),this.length>E&&(C+=" ... "),"<Buffer "+C+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(C,E,A,N,F){if(je(C,Uint8Array)&&(C=a.from(C,C.offset,C.byteLength)),!a.isBuffer(C))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof C);if(E===void 0&&(E=0),A===void 0&&(A=C?C.length:0),N===void 0&&(N=0),F===void 0&&(F=this.length),E<0||A>C.length||N<0||F>this.length)throw new RangeError("out of range index");if(N>=F&&E>=A)return 0;if(N>=F)return-1;if(E>=A)return 1;if(E>>>=0,A>>>=0,N>>>=0,F>>>=0,this===C)return 0;let H=F-N,fe=A-E;const De=Math.min(H,fe),rt=this.slice(N,F),ct=C.slice(E,A);for(let Ze=0;Ze<De;++Ze)if(rt[Ze]!==ct[Ze]){H=rt[Ze],fe=ct[Ze];break}return H<fe?-1:fe<H?1:0};function $(P,C,E,A,N){if(P.length===0)return-1;if(typeof E=="string"?(A=E,E=0):E>2147483647?E=2147483647:E<-2147483648&&(E=-2147483648),E=+E,nt(E)&&(E=N?0:P.length-1),E<0&&(E=P.length+E),E>=P.length){if(N)return-1;E=P.length-1}else if(E<0)if(N)E=0;else return-1;if(typeof C=="string"&&(C=a.from(C,A)),a.isBuffer(C))return C.length===0?-1:g(P,C,E,A,N);if(typeof C=="number")return C=C&255,typeof Uint8Array.prototype.indexOf=="function"?N?Uint8Array.prototype.indexOf.call(P,C,E):Uint8Array.prototype.lastIndexOf.call(P,C,E):g(P,[C],E,A,N);throw new TypeError("val must be string, number or Buffer")}function g(P,C,E,A,N){let F=1,H=P.length,fe=C.length;if(A!==void 0&&(A=String(A).toLowerCase(),A==="ucs2"||A==="ucs-2"||A==="utf16le"||A==="utf-16le")){if(P.length<2||C.length<2)return-1;F=2,H/=2,fe/=2,E/=2}function De(ct,Ze){return F===1?ct[Ze]:ct.readUInt16BE(Ze*F)}let rt;if(N){let ct=-1;for(rt=E;rt<H;rt++)if(De(P,rt)===De(C,ct===-1?0:rt-ct)){if(ct===-1&&(ct=rt),rt-ct+1===fe)return ct*F}else ct!==-1&&(rt-=rt-ct),ct=-1}else for(E+fe>H&&(E=H-fe),rt=E;rt>=0;rt--){let ct=!0;for(let Ze=0;Ze<fe;Ze++)if(De(P,rt+Ze)!==De(C,Ze)){ct=!1;break}if(ct)return rt}return-1}a.prototype.includes=function(C,E,A){return this.indexOf(C,E,A)!==-1},a.prototype.indexOf=function(C,E,A){return $(this,C,E,A,!0)},a.prototype.lastIndexOf=function(C,E,A){return $(this,C,E,A,!1)};function T(P,C,E,A){E=Number(E)||0;const N=P.length-E;A?(A=Number(A),A>N&&(A=N)):A=N;const F=C.length;A>F/2&&(A=F/2);let H;for(H=0;H<A;++H){const fe=parseInt(C.substr(H*2,2),16);if(nt(fe))return H;P[E+H]=fe}return H}function D(P,C,E,A){return lt(Yr(C,P.length-E),P,E,A)}function k(P,C,E,A){return lt(bs(C),P,E,A)}function I(P,C,E,A){return lt(Ct(C),P,E,A)}function V(P,C,E,A){return lt(Xr(C,P.length-E),P,E,A)}a.prototype.write=function(C,E,A,N){if(E===void 0)N="utf8",A=this.length,E=0;else if(A===void 0&&typeof E=="string")N=E,A=this.length,E=0;else if(isFinite(E))E=E>>>0,isFinite(A)?(A=A>>>0,N===void 0&&(N="utf8")):(N=A,A=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const F=this.length-E;if((A===void 0||A>F)&&(A=F),C.length>0&&(A<0||E<0)||E>this.length)throw new RangeError("Attempt to write outside buffer bounds");N||(N="utf8");let H=!1;for(;;)switch(N){case"hex":return T(this,C,E,A);case"utf8":case"utf-8":return D(this,C,E,A);case"ascii":case"latin1":case"binary":return k(this,C,E,A);case"base64":return I(this,C,E,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return V(this,C,E,A);default:if(H)throw new TypeError("Unknown encoding: "+N);N=(""+N).toLowerCase(),H=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Q(P,C,E){return C===0&&E===P.length?t.fromByteArray(P):t.fromByteArray(P.slice(C,E))}function B(P,C,E){E=Math.min(P.length,E);const A=[];let N=C;for(;N<E;){const F=P[N];let H=null,fe=F>239?4:F>223?3:F>191?2:1;if(N+fe<=E){let De,rt,ct,Ze;switch(fe){case 1:F<128&&(H=F);break;case 2:De=P[N+1],(De&192)===128&&(Ze=(F&31)<<6|De&63,Ze>127&&(H=Ze));break;case 3:De=P[N+1],rt=P[N+2],(De&192)===128&&(rt&192)===128&&(Ze=(F&15)<<12|(De&63)<<6|rt&63,Ze>2047&&(Ze<55296||Ze>57343)&&(H=Ze));break;case 4:De=P[N+1],rt=P[N+2],ct=P[N+3],(De&192)===128&&(rt&192)===128&&(ct&192)===128&&(Ze=(F&15)<<18|(De&63)<<12|(rt&63)<<6|ct&63,Ze>65535&&Ze<1114112&&(H=Ze))}}H===null?(H=65533,fe=1):H>65535&&(H-=65536,A.push(H>>>10&1023|55296),H=56320|H&1023),A.push(H),N+=fe}return L(A)}const M=4096;function L(P){const C=P.length;if(C<=M)return String.fromCharCode.apply(String,P);let E="",A=0;for(;A<C;)E+=String.fromCharCode.apply(String,P.slice(A,A+=M));return E}function z(P,C,E){let A="";E=Math.min(P.length,E);for(let N=C;N<E;++N)A+=String.fromCharCode(P[N]&127);return A}function R(P,C,E){let A="";E=Math.min(P.length,E);for(let N=C;N<E;++N)A+=String.fromCharCode(P[N]);return A}function q(P,C,E){const A=P.length;(!C||C<0)&&(C=0),(!E||E<0||E>A)&&(E=A);let N="";for(let F=C;F<E;++F)N+=Tt[P[F]];return N}function G(P,C,E){const A=P.slice(C,E);let N="";for(let F=0;F<A.length-1;F+=2)N+=String.fromCharCode(A[F]+A[F+1]*256);return N}a.prototype.slice=function(C,E){const A=this.length;C=~~C,E=E===void 0?A:~~E,C<0?(C+=A,C<0&&(C=0)):C>A&&(C=A),E<0?(E+=A,E<0&&(E=0)):E>A&&(E=A),E<C&&(E=C);const N=this.subarray(C,E);return Object.setPrototypeOf(N,a.prototype),N};function Z(P,C,E){if(P%1!==0||P<0)throw new RangeError("offset is not uint");if(P+C>E)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(C,E,A){C=C>>>0,E=E>>>0,A||Z(C,E,this.length);let N=this[C],F=1,H=0;for(;++H<E&&(F*=256);)N+=this[C+H]*F;return N},a.prototype.readUintBE=a.prototype.readUIntBE=function(C,E,A){C=C>>>0,E=E>>>0,A||Z(C,E,this.length);let N=this[C+--E],F=1;for(;E>0&&(F*=256);)N+=this[C+--E]*F;return N},a.prototype.readUint8=a.prototype.readUInt8=function(C,E){return C=C>>>0,E||Z(C,1,this.length),this[C]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(C,E){return C=C>>>0,E||Z(C,2,this.length),this[C]|this[C+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(C,E){return C=C>>>0,E||Z(C,2,this.length),this[C]<<8|this[C+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(C,E){return C=C>>>0,E||Z(C,4,this.length),(this[C]|this[C+1]<<8|this[C+2]<<16)+this[C+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(C,E){return C=C>>>0,E||Z(C,4,this.length),this[C]*16777216+(this[C+1]<<16|this[C+2]<<8|this[C+3])},a.prototype.readBigUInt64LE=Ke(function(C){C=C>>>0,pe(C,"offset");const E=this[C],A=this[C+7];(E===void 0||A===void 0)&&kt(C,this.length-8);const N=E+this[++C]*2**8+this[++C]*2**16+this[++C]*2**24,F=this[++C]+this[++C]*2**8+this[++C]*2**16+A*2**24;return BigInt(N)+(BigInt(F)<<BigInt(32))}),a.prototype.readBigUInt64BE=Ke(function(C){C=C>>>0,pe(C,"offset");const E=this[C],A=this[C+7];(E===void 0||A===void 0)&&kt(C,this.length-8);const N=E*2**24+this[++C]*2**16+this[++C]*2**8+this[++C],F=this[++C]*2**24+this[++C]*2**16+this[++C]*2**8+A;return(BigInt(N)<<BigInt(32))+BigInt(F)}),a.prototype.readIntLE=function(C,E,A){C=C>>>0,E=E>>>0,A||Z(C,E,this.length);let N=this[C],F=1,H=0;for(;++H<E&&(F*=256);)N+=this[C+H]*F;return F*=128,N>=F&&(N-=Math.pow(2,8*E)),N},a.prototype.readIntBE=function(C,E,A){C=C>>>0,E=E>>>0,A||Z(C,E,this.length);let N=E,F=1,H=this[C+--N];for(;N>0&&(F*=256);)H+=this[C+--N]*F;return F*=128,H>=F&&(H-=Math.pow(2,8*E)),H},a.prototype.readInt8=function(C,E){return C=C>>>0,E||Z(C,1,this.length),this[C]&128?(255-this[C]+1)*-1:this[C]},a.prototype.readInt16LE=function(C,E){C=C>>>0,E||Z(C,2,this.length);const A=this[C]|this[C+1]<<8;return A&32768?A|4294901760:A},a.prototype.readInt16BE=function(C,E){C=C>>>0,E||Z(C,2,this.length);const A=this[C+1]|this[C]<<8;return A&32768?A|4294901760:A},a.prototype.readInt32LE=function(C,E){return C=C>>>0,E||Z(C,4,this.length),this[C]|this[C+1]<<8|this[C+2]<<16|this[C+3]<<24},a.prototype.readInt32BE=function(C,E){return C=C>>>0,E||Z(C,4,this.length),this[C]<<24|this[C+1]<<16|this[C+2]<<8|this[C+3]},a.prototype.readBigInt64LE=Ke(function(C){C=C>>>0,pe(C,"offset");const E=this[C],A=this[C+7];(E===void 0||A===void 0)&&kt(C,this.length-8);const N=this[C+4]+this[C+5]*2**8+this[C+6]*2**16+(A<<24);return(BigInt(N)<<BigInt(32))+BigInt(E+this[++C]*2**8+this[++C]*2**16+this[++C]*2**24)}),a.prototype.readBigInt64BE=Ke(function(C){C=C>>>0,pe(C,"offset");const E=this[C],A=this[C+7];(E===void 0||A===void 0)&&kt(C,this.length-8);const N=(E<<24)+this[++C]*2**16+this[++C]*2**8+this[++C];return(BigInt(N)<<BigInt(32))+BigInt(this[++C]*2**24+this[++C]*2**16+this[++C]*2**8+A)}),a.prototype.readFloatLE=function(C,E){return C=C>>>0,E||Z(C,4,this.length),n.read(this,C,!0,23,4)},a.prototype.readFloatBE=function(C,E){return C=C>>>0,E||Z(C,4,this.length),n.read(this,C,!1,23,4)},a.prototype.readDoubleLE=function(C,E){return C=C>>>0,E||Z(C,8,this.length),n.read(this,C,!0,52,8)},a.prototype.readDoubleBE=function(C,E){return C=C>>>0,E||Z(C,8,this.length),n.read(this,C,!1,52,8)};function Y(P,C,E,A,N,F){if(!a.isBuffer(P))throw new TypeError('"buffer" argument must be a Buffer instance');if(C>N||C<F)throw new RangeError('"value" argument is out of bounds');if(E+A>P.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(C,E,A,N){if(C=+C,E=E>>>0,A=A>>>0,!N){const fe=Math.pow(2,8*A)-1;Y(this,C,E,A,fe,0)}let F=1,H=0;for(this[E]=C&255;++H<A&&(F*=256);)this[E+H]=C/F&255;return E+A},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(C,E,A,N){if(C=+C,E=E>>>0,A=A>>>0,!N){const fe=Math.pow(2,8*A)-1;Y(this,C,E,A,fe,0)}let F=A-1,H=1;for(this[E+F]=C&255;--F>=0&&(H*=256);)this[E+F]=C/H&255;return E+A},a.prototype.writeUint8=a.prototype.writeUInt8=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,1,255,0),this[E]=C&255,E+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,2,65535,0),this[E]=C&255,this[E+1]=C>>>8,E+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,2,65535,0),this[E]=C>>>8,this[E+1]=C&255,E+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,4,4294967295,0),this[E+3]=C>>>24,this[E+2]=C>>>16,this[E+1]=C>>>8,this[E]=C&255,E+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,4,4294967295,0),this[E]=C>>>24,this[E+1]=C>>>16,this[E+2]=C>>>8,this[E+3]=C&255,E+4};function J(P,C,E,A,N){$e(C,A,N,P,E,7);let F=Number(C&BigInt(4294967295));P[E++]=F,F=F>>8,P[E++]=F,F=F>>8,P[E++]=F,F=F>>8,P[E++]=F;let H=Number(C>>BigInt(32)&BigInt(4294967295));return P[E++]=H,H=H>>8,P[E++]=H,H=H>>8,P[E++]=H,H=H>>8,P[E++]=H,E}function ne(P,C,E,A,N){$e(C,A,N,P,E,7);let F=Number(C&BigInt(4294967295));P[E+7]=F,F=F>>8,P[E+6]=F,F=F>>8,P[E+5]=F,F=F>>8,P[E+4]=F;let H=Number(C>>BigInt(32)&BigInt(4294967295));return P[E+3]=H,H=H>>8,P[E+2]=H,H=H>>8,P[E+1]=H,H=H>>8,P[E]=H,E+8}a.prototype.writeBigUInt64LE=Ke(function(C,E=0){return J(this,C,E,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Ke(function(C,E=0){return ne(this,C,E,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(C,E,A,N){if(C=+C,E=E>>>0,!N){const De=Math.pow(2,8*A-1);Y(this,C,E,A,De-1,-De)}let F=0,H=1,fe=0;for(this[E]=C&255;++F<A&&(H*=256);)C<0&&fe===0&&this[E+F-1]!==0&&(fe=1),this[E+F]=(C/H>>0)-fe&255;return E+A},a.prototype.writeIntBE=function(C,E,A,N){if(C=+C,E=E>>>0,!N){const De=Math.pow(2,8*A-1);Y(this,C,E,A,De-1,-De)}let F=A-1,H=1,fe=0;for(this[E+F]=C&255;--F>=0&&(H*=256);)C<0&&fe===0&&this[E+F+1]!==0&&(fe=1),this[E+F]=(C/H>>0)-fe&255;return E+A},a.prototype.writeInt8=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,1,127,-128),C<0&&(C=255+C+1),this[E]=C&255,E+1},a.prototype.writeInt16LE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,2,32767,-32768),this[E]=C&255,this[E+1]=C>>>8,E+2},a.prototype.writeInt16BE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,2,32767,-32768),this[E]=C>>>8,this[E+1]=C&255,E+2},a.prototype.writeInt32LE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,4,2147483647,-2147483648),this[E]=C&255,this[E+1]=C>>>8,this[E+2]=C>>>16,this[E+3]=C>>>24,E+4},a.prototype.writeInt32BE=function(C,E,A){return C=+C,E=E>>>0,A||Y(this,C,E,4,2147483647,-2147483648),C<0&&(C=4294967295+C+1),this[E]=C>>>24,this[E+1]=C>>>16,this[E+2]=C>>>8,this[E+3]=C&255,E+4},a.prototype.writeBigInt64LE=Ke(function(C,E=0){return J(this,C,E,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Ke(function(C,E=0){return ne(this,C,E,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function de(P,C,E,A,N,F){if(E+A>P.length)throw new RangeError("Index out of range");if(E<0)throw new RangeError("Index out of range")}function ye(P,C,E,A,N){return C=+C,E=E>>>0,N||de(P,C,E,4),n.write(P,C,E,A,23,4),E+4}a.prototype.writeFloatLE=function(C,E,A){return ye(this,C,E,!0,A)},a.prototype.writeFloatBE=function(C,E,A){return ye(this,C,E,!1,A)};function xe(P,C,E,A,N){return C=+C,E=E>>>0,N||de(P,C,E,8),n.write(P,C,E,A,52,8),E+8}a.prototype.writeDoubleLE=function(C,E,A){return xe(this,C,E,!0,A)},a.prototype.writeDoubleBE=function(C,E,A){return xe(this,C,E,!1,A)},a.prototype.copy=function(C,E,A,N){if(!a.isBuffer(C))throw new TypeError("argument should be a Buffer");if(A||(A=0),!N&&N!==0&&(N=this.length),E>=C.length&&(E=C.length),E||(E=0),N>0&&N<A&&(N=A),N===A||C.length===0||this.length===0)return 0;if(E<0)throw new RangeError("targetStart out of bounds");if(A<0||A>=this.length)throw new RangeError("Index out of range");if(N<0)throw new RangeError("sourceEnd out of bounds");N>this.length&&(N=this.length),C.length-E<N-A&&(N=C.length-E+A);const F=N-A;return this===C&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(E,A,N):Uint8Array.prototype.set.call(C,this.subarray(A,N),E),F},a.prototype.fill=function(C,E,A,N){if(typeof C=="string"){if(typeof E=="string"?(N=E,E=0,A=this.length):typeof A=="string"&&(N=A,A=this.length),N!==void 0&&typeof N!="string")throw new TypeError("encoding must be a string");if(typeof N=="string"&&!a.isEncoding(N))throw new TypeError("Unknown encoding: "+N);if(C.length===1){const H=C.charCodeAt(0);(N==="utf8"&&H<128||N==="latin1")&&(C=H)}}else typeof C=="number"?C=C&255:typeof C=="boolean"&&(C=Number(C));if(E<0||this.length<E||this.length<A)throw new RangeError("Out of range index");if(A<=E)return this;E=E>>>0,A=A===void 0?this.length:A>>>0,C||(C=0);let F;if(typeof C=="number")for(F=E;F<A;++F)this[F]=C;else{const H=a.isBuffer(C)?C:a.from(C,N),fe=H.length;if(fe===0)throw new TypeError('The value "'+C+'" is invalid for argument "value"');for(F=0;F<A-E;++F)this[F+E]=H[F%fe]}return this};const Te={};function he(P,C,E){Te[P]=class extends E{constructor(){super(),Object.defineProperty(this,"message",{value:C.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${P}]`,this.stack,delete this.name}get code(){return P}set code(N){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:N,writable:!0})}toString(){return`${this.name} [${P}]: ${this.message}`}}}he("ERR_BUFFER_OUT_OF_BOUNDS",function(P){return P?`${P} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),he("ERR_INVALID_ARG_TYPE",function(P,C){return`The "${P}" argument must be of type number. Received type ${typeof C}`},TypeError),he("ERR_OUT_OF_RANGE",function(P,C,E){let A=`The value of "${P}" is out of range.`,N=E;return Number.isInteger(E)&&Math.abs(E)>2**32?N=ve(String(E)):typeof E=="bigint"&&(N=String(E),(E>BigInt(2)**BigInt(32)||E<-(BigInt(2)**BigInt(32)))&&(N=ve(N)),N+="n"),A+=` It must be ${C}. Received ${N}`,A},RangeError);function ve(P){let C="",E=P.length;const A=P[0]==="-"?1:0;for(;E>=A+4;E-=3)C=`_${P.slice(E-3,E)}${C}`;return`${P.slice(0,E)}${C}`}function ce(P,C,E){pe(C,"offset"),(P[C]===void 0||P[C+E]===void 0)&&kt(C,P.length-(E+1))}function $e(P,C,E,A,N,F){if(P>E||P<C){const H=typeof C=="bigint"?"n":"";let fe;throw F>3?C===0||C===BigInt(0)?fe=`>= 0${H} and < 2${H} ** ${(F+1)*8}${H}`:fe=`>= -(2${H} ** ${(F+1)*8-1}${H}) and < 2 ** ${(F+1)*8-1}${H}`:fe=`>= ${C}${H} and <= ${E}${H}`,new Te.ERR_OUT_OF_RANGE("value",fe,P)}ce(A,N,F)}function pe(P,C){if(typeof P!="number")throw new Te.ERR_INVALID_ARG_TYPE(C,"number",P)}function kt(P,C,E){throw Math.floor(P)!==P?(pe(P,E),new Te.ERR_OUT_OF_RANGE(E||"offset","an integer",P)):C<0?new Te.ERR_BUFFER_OUT_OF_BOUNDS:new Te.ERR_OUT_OF_RANGE(E||"offset",`>= ${E?1:0} and <= ${C}`,P)}const Qr=/[^+/0-9A-Za-z-_]/g;function bi(P){if(P=P.split("=")[0],P=P.trim().replace(Qr,""),P.length<2)return"";for(;P.length%4!==0;)P=P+"=";return P}function Yr(P,C){C=C||1/0;let E;const A=P.length;let N=null;const F=[];for(let H=0;H<A;++H){if(E=P.charCodeAt(H),E>55295&&E<57344){if(!N){if(E>56319){(C-=3)>-1&&F.push(239,191,189);continue}else if(H+1===A){(C-=3)>-1&&F.push(239,191,189);continue}N=E;continue}if(E<56320){(C-=3)>-1&&F.push(239,191,189),N=E;continue}E=(N-55296<<10|E-56320)+65536}else N&&(C-=3)>-1&&F.push(239,191,189);if(N=null,E<128){if((C-=1)<0)break;F.push(E)}else if(E<2048){if((C-=2)<0)break;F.push(E>>6|192,E&63|128)}else if(E<65536){if((C-=3)<0)break;F.push(E>>12|224,E>>6&63|128,E&63|128)}else if(E<1114112){if((C-=4)<0)break;F.push(E>>18|240,E>>12&63|128,E>>6&63|128,E&63|128)}else throw new Error("Invalid code point")}return F}function bs(P){const C=[];for(let E=0;E<P.length;++E)C.push(P.charCodeAt(E)&255);return C}function Xr(P,C){let E,A,N;const F=[];for(let H=0;H<P.length&&!((C-=2)<0);++H)E=P.charCodeAt(H),A=E>>8,N=E%256,F.push(N),F.push(A);return F}function Ct(P){return t.toByteArray(bi(P))}function lt(P,C,E,A){let N;for(N=0;N<A&&!(N+E>=C.length||N>=P.length);++N)C[N+E]=P[N];return N}function je(P,C){return P instanceof C||P!=null&&P.constructor!=null&&P.constructor.name!=null&&P.constructor.name===C.name}function nt(P){return P!==P}const Tt=function(){const P="0123456789abcdef",C=new Array(256);for(let E=0;E<16;++E){const A=E*16;for(let N=0;N<16;++N)C[A+N]=P[E]+P[N]}return C}();function Ke(P){return typeof BigInt>"u"?Rt:P}function Rt(){throw new Error("BigInt not supported")}})(tT);var EC;typeof window<"u"&&(window.Buffer||(window.Buffer=tT.Buffer),window.global||(window.global=window),window.process||(window.process={}),(EC=window.process)!=null&&EC.env||(window.process={env:{}}));var lu,Za,nH=class extends gb{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,On(this,lu,void 0),On(this,Za,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:Ur(n[0])})},this.onChainChanged=n=>{const r=N0(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await t.enable(),r=Ur(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(t){throw/(user closed modal|accounts received is empty)/i.test(t.message)?new In(t):t}}async disconnect(){if(!et(this,Za))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const t=await(await this.getProvider()).request({method:"eth_accounts"});return Ur(t[0])}async getChainId(){const e=await this.getProvider();return N0(e.chainId)}async getProvider(){var e;if(!et(this,Za)){let t=(await Ml(()=>import("./index-DIvDIza0.js").then(s=>s.i),__vite__mapDeps([0,1]))).default;typeof t!="function"&&typeof t.default=="function"&&(t=t.default),Cd(this,lu,new t(this.options));const n=(e=et(this,lu).walletExtension)==null?void 0:e.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);Cd(this,Za,et(this,lu).makeWeb3Provider(o,i))}return et(this,Za)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return pb({account:n,chain:r,transport:cb(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r;const t=await this.getProvider(),n=Oe(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===e);if(!o)throw new TS({chainId:e,connectorId:this.id});if(i.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new In(s)}throw new Vi(i)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}};lu=new WeakMap;Za=new WeakMap;var Yb={},A1={},Re={},rT={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(a,l){var c=a>>>16&65535,u=a&65535,d=l>>>16&65535,f=l&65535;return u*f+(c*f+u*d<<16>>>0)|0}e.mul=Math.imul||t;function n(a,l){return a+l|0}e.add=n;function r(a,l){return a-l|0}e.sub=r;function i(a,l){return a<<l|a>>>32-l}e.rotl=i;function o(a,l){return a<<32-l|a>>>l}e.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}e.isInteger=Number.isInteger||s,e.MAX_SAFE_INTEGER=9007199254740991,e.isSafeInteger=function(a){return e.isInteger(a)&&a>=-e.MAX_SAFE_INTEGER&&a<=e.MAX_SAFE_INTEGER}})(rT);Object.defineProperty(Re,"__esModule",{value:!0});var iT=rT;function rH(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16}Re.readInt16BE=rH;function iH(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])>>>0}Re.readUint16BE=iH;function oH(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])<<16>>16}Re.readInt16LE=oH;function sH(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])>>>0}Re.readUint16LE=sH;function oT(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>8,t[n+1]=e>>>0,t}Re.writeUint16BE=oT;Re.writeInt16BE=oT;function sT(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t}Re.writeUint16LE=sT;Re.writeInt16LE=sT;function Hv(e,t){return t===void 0&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}Re.readInt32BE=Hv;function qv(e,t){return t===void 0&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}Re.readUint32BE=qv;function Gv(e,t){return t===void 0&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}Re.readInt32LE=Gv;function Kv(e,t){return t===void 0&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}Re.readUint32LE=Kv;function ap(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>24,t[n+1]=e>>>16,t[n+2]=e>>>8,t[n+3]=e>>>0,t}Re.writeUint32BE=ap;Re.writeInt32BE=ap;function lp(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24,t}Re.writeUint32LE=lp;Re.writeInt32LE=lp;function aH(e,t){t===void 0&&(t=0);var n=Hv(e,t),r=Hv(e,t+4);return n*4294967296+r-(r>>31)*4294967296}Re.readInt64BE=aH;function lH(e,t){t===void 0&&(t=0);var n=qv(e,t),r=qv(e,t+4);return n*4294967296+r}Re.readUint64BE=lH;function cH(e,t){t===void 0&&(t=0);var n=Gv(e,t),r=Gv(e,t+4);return r*4294967296+n-(n>>31)*4294967296}Re.readInt64LE=cH;function uH(e,t){t===void 0&&(t=0);var n=Kv(e,t),r=Kv(e,t+4);return r*4294967296+n}Re.readUint64LE=uH;function aT(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),ap(e/4294967296>>>0,t,n),ap(e>>>0,t,n+4),t}Re.writeUint64BE=aT;Re.writeInt64BE=aT;function lT(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),lp(e>>>0,t,n),lp(e/4294967296>>>0,t,n+4),t}Re.writeUint64LE=lT;Re.writeInt64LE=lT;function dH(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=e/8+n-1;o>=n;o--)r+=t[o]*i,i*=256;return r}Re.readUintBE=dH;function fH(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+e/8;o++)r+=t[o]*i,i*=256;return r}Re.readUintLE=fH;function hH(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!iT.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var i=1,o=e/8+r-1;o>=r;o--)n[o]=t/i&255,i*=256;return n}Re.writeUintBE=hH;function pH(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!iT.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+e/8;o++)n[o]=t/i&255,i*=256;return n}Re.writeUintLE=pH;function mH(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t)}Re.readFloat32BE=mH;function gH(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t,!0)}Re.readFloat32LE=gH;function yH(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t)}Re.readFloat64BE=yH;function vH(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t,!0)}Re.readFloat64LE=vH;function wH(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e),t}Re.writeFloat32BE=wH;function bH(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e,!0),t}Re.writeFloat32LE=bH;function xH(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e),t}Re.writeFloat64BE=xH;function CH(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e,!0),t}Re.writeFloat64LE=CH;var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0});function EH(e){for(var t=0;t<e.length;t++)e[t]=0;return e}Gr.wipe=EH;Object.defineProperty(A1,"__esModule",{value:!0});var fn=Re,Zv=Gr,SH=20;function _H(e,t,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],c=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],d=n[19]<<24|n[18]<<16|n[17]<<8|n[16],f=n[23]<<24|n[22]<<16|n[21]<<8|n[20],h=n[27]<<24|n[26]<<16|n[25]<<8|n[24],p=n[31]<<24|n[30]<<16|n[29]<<8|n[28],m=t[3]<<24|t[2]<<16|t[1]<<8|t[0],v=t[7]<<24|t[6]<<16|t[5]<<8|t[4],b=t[11]<<24|t[10]<<16|t[9]<<8|t[8],y=t[15]<<24|t[14]<<16|t[13]<<8|t[12],x=r,w=i,_=o,$=s,g=a,T=l,D=c,k=u,I=d,V=f,Q=h,B=p,M=m,L=v,z=b,R=y,q=0;q<SH;q+=2)x=x+g|0,M^=x,M=M>>>16|M<<16,I=I+M|0,g^=I,g=g>>>20|g<<12,w=w+T|0,L^=w,L=L>>>16|L<<16,V=V+L|0,T^=V,T=T>>>20|T<<12,_=_+D|0,z^=_,z=z>>>16|z<<16,Q=Q+z|0,D^=Q,D=D>>>20|D<<12,$=$+k|0,R^=$,R=R>>>16|R<<16,B=B+R|0,k^=B,k=k>>>20|k<<12,_=_+D|0,z^=_,z=z>>>24|z<<8,Q=Q+z|0,D^=Q,D=D>>>25|D<<7,$=$+k|0,R^=$,R=R>>>24|R<<8,B=B+R|0,k^=B,k=k>>>25|k<<7,w=w+T|0,L^=w,L=L>>>24|L<<8,V=V+L|0,T^=V,T=T>>>25|T<<7,x=x+g|0,M^=x,M=M>>>24|M<<8,I=I+M|0,g^=I,g=g>>>25|g<<7,x=x+T|0,R^=x,R=R>>>16|R<<16,Q=Q+R|0,T^=Q,T=T>>>20|T<<12,w=w+D|0,M^=w,M=M>>>16|M<<16,B=B+M|0,D^=B,D=D>>>20|D<<12,_=_+k|0,L^=_,L=L>>>16|L<<16,I=I+L|0,k^=I,k=k>>>20|k<<12,$=$+g|0,z^=$,z=z>>>16|z<<16,V=V+z|0,g^=V,g=g>>>20|g<<12,_=_+k|0,L^=_,L=L>>>24|L<<8,I=I+L|0,k^=I,k=k>>>25|k<<7,$=$+g|0,z^=$,z=z>>>24|z<<8,V=V+z|0,g^=V,g=g>>>25|g<<7,w=w+D|0,M^=w,M=M>>>24|M<<8,B=B+M|0,D^=B,D=D>>>25|D<<7,x=x+T|0,R^=x,R=R>>>24|R<<8,Q=Q+R|0,T^=Q,T=T>>>25|T<<7;fn.writeUint32LE(x+r|0,e,0),fn.writeUint32LE(w+i|0,e,4),fn.writeUint32LE(_+o|0,e,8),fn.writeUint32LE($+s|0,e,12),fn.writeUint32LE(g+a|0,e,16),fn.writeUint32LE(T+l|0,e,20),fn.writeUint32LE(D+c|0,e,24),fn.writeUint32LE(k+u|0,e,28),fn.writeUint32LE(I+d|0,e,32),fn.writeUint32LE(V+f|0,e,36),fn.writeUint32LE(Q+h|0,e,40),fn.writeUint32LE(B+p|0,e,44),fn.writeUint32LE(M+m|0,e,48),fn.writeUint32LE(L+v|0,e,52),fn.writeUint32LE(z+b|0,e,56),fn.writeUint32LE(R+y|0,e,60)}function cT(e,t,n,r,i){if(i===void 0&&(i=0),e.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(t.length!==8&&t.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-t.length,o.set(t,s)}else{if(t.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=t,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){_H(a,o,e);for(var c=l;c<l+64&&c<n.length;c++)r[c]=n[c]^a[c-l];$H(o,0,s)}return Zv.wipe(a),i===0&&Zv.wipe(o),r}A1.streamXOR=cT;function TH(e,t,n,r){return r===void 0&&(r=0),Zv.wipe(n),cT(e,t,n,n,r)}A1.stream=TH;function $H(e,t,n){for(var r=1;n--;)r=r+(e[t]&255)|0,e[t]=r&255,r>>>=8,t++;if(r>0)throw new Error("ChaCha: counter overflow")}var uT={},ys={};Object.defineProperty(ys,"__esModule",{value:!0});function PH(e,t,n){return~(e-1)&t|e-1&n}ys.select=PH;function AH(e,t){return(e|0)-(t|0)-1>>>31&1}ys.lessOrEqual=AH;function dT(e,t){if(e.length!==t.length)return 0;for(var n=0,r=0;r<e.length;r++)n|=e[r]^t[r];return 1&n-1>>>8}ys.compare=dT;function DH(e,t){return e.length===0||t.length===0?!1:dT(e,t)!==0}ys.equal=DH;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ys,n=Gr;e.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=e.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var c=a[2]|a[3]<<8;this._r[1]=(l>>>13|c<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(c>>>10|u<<6)&7939;var d=a[6]|a[7]<<8;this._r[3]=(u>>>7|d<<9)&8191;var f=a[8]|a[9]<<8;this._r[4]=(d>>>4|f<<12)&255,this._r[5]=f>>>1&8190;var h=a[10]|a[11]<<8;this._r[6]=(f>>>14|h<<2)&8191;var p=a[12]|a[13]<<8;this._r[7]=(h>>>11|p<<5)&8065;var m=a[14]|a[15]<<8;this._r[8]=(p>>>8|m<<8)&8191,this._r[9]=m>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,c){for(var u=this._fin?0:2048,d=this._h[0],f=this._h[1],h=this._h[2],p=this._h[3],m=this._h[4],v=this._h[5],b=this._h[6],y=this._h[7],x=this._h[8],w=this._h[9],_=this._r[0],$=this._r[1],g=this._r[2],T=this._r[3],D=this._r[4],k=this._r[5],I=this._r[6],V=this._r[7],Q=this._r[8],B=this._r[9];c>=16;){var M=a[l+0]|a[l+1]<<8;d+=M&8191;var L=a[l+2]|a[l+3]<<8;f+=(M>>>13|L<<3)&8191;var z=a[l+4]|a[l+5]<<8;h+=(L>>>10|z<<6)&8191;var R=a[l+6]|a[l+7]<<8;p+=(z>>>7|R<<9)&8191;var q=a[l+8]|a[l+9]<<8;m+=(R>>>4|q<<12)&8191,v+=q>>>1&8191;var G=a[l+10]|a[l+11]<<8;b+=(q>>>14|G<<2)&8191;var Z=a[l+12]|a[l+13]<<8;y+=(G>>>11|Z<<5)&8191;var Y=a[l+14]|a[l+15]<<8;x+=(Z>>>8|Y<<8)&8191,w+=Y>>>5|u;var J=0,ne=J;ne+=d*_,ne+=f*(5*B),ne+=h*(5*Q),ne+=p*(5*V),ne+=m*(5*I),J=ne>>>13,ne&=8191,ne+=v*(5*k),ne+=b*(5*D),ne+=y*(5*T),ne+=x*(5*g),ne+=w*(5*$),J+=ne>>>13,ne&=8191;var de=J;de+=d*$,de+=f*_,de+=h*(5*B),de+=p*(5*Q),de+=m*(5*V),J=de>>>13,de&=8191,de+=v*(5*I),de+=b*(5*k),de+=y*(5*D),de+=x*(5*T),de+=w*(5*g),J+=de>>>13,de&=8191;var ye=J;ye+=d*g,ye+=f*$,ye+=h*_,ye+=p*(5*B),ye+=m*(5*Q),J=ye>>>13,ye&=8191,ye+=v*(5*V),ye+=b*(5*I),ye+=y*(5*k),ye+=x*(5*D),ye+=w*(5*T),J+=ye>>>13,ye&=8191;var xe=J;xe+=d*T,xe+=f*g,xe+=h*$,xe+=p*_,xe+=m*(5*B),J=xe>>>13,xe&=8191,xe+=v*(5*Q),xe+=b*(5*V),xe+=y*(5*I),xe+=x*(5*k),xe+=w*(5*D),J+=xe>>>13,xe&=8191;var Te=J;Te+=d*D,Te+=f*T,Te+=h*g,Te+=p*$,Te+=m*_,J=Te>>>13,Te&=8191,Te+=v*(5*B),Te+=b*(5*Q),Te+=y*(5*V),Te+=x*(5*I),Te+=w*(5*k),J+=Te>>>13,Te&=8191;var he=J;he+=d*k,he+=f*D,he+=h*T,he+=p*g,he+=m*$,J=he>>>13,he&=8191,he+=v*_,he+=b*(5*B),he+=y*(5*Q),he+=x*(5*V),he+=w*(5*I),J+=he>>>13,he&=8191;var ve=J;ve+=d*I,ve+=f*k,ve+=h*D,ve+=p*T,ve+=m*g,J=ve>>>13,ve&=8191,ve+=v*$,ve+=b*_,ve+=y*(5*B),ve+=x*(5*Q),ve+=w*(5*V),J+=ve>>>13,ve&=8191;var ce=J;ce+=d*V,ce+=f*I,ce+=h*k,ce+=p*D,ce+=m*T,J=ce>>>13,ce&=8191,ce+=v*g,ce+=b*$,ce+=y*_,ce+=x*(5*B),ce+=w*(5*Q),J+=ce>>>13,ce&=8191;var $e=J;$e+=d*Q,$e+=f*V,$e+=h*I,$e+=p*k,$e+=m*D,J=$e>>>13,$e&=8191,$e+=v*T,$e+=b*g,$e+=y*$,$e+=x*_,$e+=w*(5*B),J+=$e>>>13,$e&=8191;var pe=J;pe+=d*B,pe+=f*Q,pe+=h*V,pe+=p*I,pe+=m*k,J=pe>>>13,pe&=8191,pe+=v*D,pe+=b*T,pe+=y*g,pe+=x*$,pe+=w*_,J+=pe>>>13,pe&=8191,J=(J<<2)+J|0,J=J+ne|0,ne=J&8191,J=J>>>13,de+=J,d=ne,f=de,h=ye,p=xe,m=Te,v=he,b=ve,y=ce,x=$e,w=pe,l+=16,c-=16}this._h[0]=d,this._h[1]=f,this._h[2]=h,this._h[3]=p,this._h[4]=m,this._h[5]=v,this._h[6]=b,this._h[7]=y,this._h[8]=x,this._h[9]=w},s.prototype.finish=function(a,l){l===void 0&&(l=0);var c=new Uint16Array(10),u,d,f,h;if(this._leftover){for(h=this._leftover,this._buffer[h++]=1;h<16;h++)this._buffer[h]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,h=2;h<10;h++)this._h[h]+=u,u=this._h[h]>>>13,this._h[h]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,c[0]=this._h[0]+5,u=c[0]>>>13,c[0]&=8191,h=1;h<10;h++)c[h]=this._h[h]+u,u=c[h]>>>13,c[h]&=8191;for(c[9]-=8192,d=(u^1)-1,h=0;h<10;h++)c[h]&=d;for(d=~d,h=0;h<10;h++)this._h[h]=this._h[h]&d|c[h];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,f=this._h[0]+this._pad[0],this._h[0]=f&65535,h=1;h<8;h++)f=(this._h[h]+this._pad[h]|0)+(f>>>16)|0,this._h[h]=f&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,c=a.length,u;if(this._leftover){u=16-this._leftover,u>c&&(u=c);for(var d=0;d<u;d++)this._buffer[this._leftover+d]=a[l+d];if(c-=u,l+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(c>=16&&(u=c-c%16,this._blocks(a,l,u),l+=u,c-=u),c){for(var d=0;d<c;d++)this._buffer[this._leftover+d]=a[l+d];this._leftover+=c}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();e.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var c=l.digest();return l.clean(),c}e.oneTimeAuth=i;function o(s,a){return s.length!==e.DIGEST_LENGTH||a.length!==e.DIGEST_LENGTH?!1:t.equal(s,a)}e.equal=o})(uT);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=A1,n=uT,r=Gr,i=Re,o=ys;e.KEY_LENGTH=32,e.NONCE_LENGTH=12,e.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(c){if(this.nonceLength=e.NONCE_LENGTH,this.tagLength=e.TAG_LENGTH,c.length!==e.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(c)}return l.prototype.seal=function(c,u,d,f){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var h=new Uint8Array(16);h.set(c,h.length-c.length);var p=new Uint8Array(32);t.stream(this._key,h,p,4);var m=u.length+this.tagLength,v;if(f){if(f.length!==m)throw new Error("ChaCha20Poly1305: incorrect destination length");v=f}else v=new Uint8Array(m);return t.streamXOR(this._key,h,u,v,4),this._authenticate(v.subarray(v.length-this.tagLength,v.length),p,v.subarray(0,v.length-this.tagLength),d),r.wipe(h),v},l.prototype.open=function(c,u,d,f){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var h=new Uint8Array(16);h.set(c,h.length-c.length);var p=new Uint8Array(32);t.stream(this._key,h,p,4);var m=new Uint8Array(this.tagLength);if(this._authenticate(m,p,u.subarray(0,u.length-this.tagLength),d),!o.equal(m,u.subarray(u.length-this.tagLength,u.length)))return null;var v=u.length-this.tagLength,b;if(f){if(f.length!==v)throw new Error("ChaCha20Poly1305: incorrect destination length");b=f}else b=new Uint8Array(v);return t.streamXOR(this._key,h,u.subarray(0,u.length-this.tagLength),b,4),r.wipe(h),b},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(c,u,d,f){var h=new n.Poly1305(u);f&&(h.update(f),f.length%16>0&&h.update(s.subarray(f.length%16))),h.update(d),d.length%16>0&&h.update(s.subarray(d.length%16));var p=new Uint8Array(8);f&&i.writeUint64LE(f.length,p),h.update(p),i.writeUint64LE(d.length,p),h.update(p);for(var m=h.digest(),v=0;v<m.length;v++)c[v]=m[v];h.clean(),r.wipe(m),r.wipe(p)},l}();e.ChaCha20Poly1305=a})(Yb);var fT={},Cf={},Xb={};Object.defineProperty(Xb,"__esModule",{value:!0});function OH(e){return typeof e.saveState<"u"&&typeof e.restoreState<"u"&&typeof e.cleanSavedState<"u"}Xb.isSerializableHash=OH;Object.defineProperty(Cf,"__esModule",{value:!0});var ri=Xb,kH=ys,RH=Gr,hT=function(){function e(t,n){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),ri.isSerializableHash(this._inner)&&ri.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),RH.wipe(r)}return e.prototype.reset=function(){if(!ri.isSerializableHash(this._inner)||!ri.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){ri.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),ri.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(t){return this._inner.update(t),this},e.prototype.finish=function(t){return this._finished?(this._outer.finish(t),this):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0,this)},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype.saveState=function(){if(!ri.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(t){if(!ri.isSerializableHash(this._inner)||!ri.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(t){if(!ri.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},e}();Cf.HMAC=hT;function NH(e,t,n){var r=new hT(e,t);r.update(n);var i=r.digest();return r.clean(),i}Cf.hmac=NH;Cf.equal=kH.equal;Object.defineProperty(fT,"__esModule",{value:!0});var dx=Cf,fx=Gr,IH=function(){function e(t,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=i;var o=dx.hmac(this._hash,r,n);this._hmac=new dx.HMAC(t,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(t===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(t){for(var n=new Uint8Array(t),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},e.prototype.clean=function(){this._hmac.clean(),fx.wipe(this._buffer),fx.wipe(this._counter),this._bufpos=0},e}(),MH=fT.HKDF=IH,D1={},O1={},k1={};Object.defineProperty(k1,"__esModule",{value:!0});k1.BrowserRandomSource=void 0;const hx=65536;class LH{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const t=typeof self<"u"?self.crypto||self.msCrypto:null;t&&t.getRandomValues!==void 0&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(t);for(let r=0;r<n.length;r+=hx)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,hx)));return n}}k1.BrowserRandomSource=LH;function jH(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var R1={};const FH={},BH=Object.freeze(Object.defineProperty({__proto__:null,default:FH},Symbol.toStringTag,{value:"Module"})),UH=_C(BH);Object.defineProperty(R1,"__esModule",{value:!0});R1.NodeRandomSource=void 0;const zH=Gr;class WH{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof jH<"u"){const t=UH;t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(t);if(n.length!==t)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(t);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,zH.wipe)(n),r}}R1.NodeRandomSource=WH;Object.defineProperty(O1,"__esModule",{value:!0});O1.SystemRandomSource=void 0;const VH=k1,HH=R1;class qH{constructor(){if(this.isAvailable=!1,this.name="",this._source=new VH.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new HH.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(t)}}O1.SystemRandomSource=qH;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.randomStringForEntropy=e.randomString=e.randomUint32=e.randomBytes=e.defaultRandomSource=void 0;const t=O1,n=Re,r=Gr;e.defaultRandomSource=new t.SystemRandomSource;function i(c,u=e.defaultRandomSource){return u.randomBytes(c)}e.randomBytes=i;function o(c=e.defaultRandomSource){const u=i(4,c),d=(0,n.readUint32LE)(u);return(0,r.wipe)(u),d}e.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(c,u=s,d=e.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let f="";const h=u.length,p=256-256%h;for(;c>0;){const m=i(Math.ceil(c*256/p),d);for(let v=0;v<m.length&&c>0;v++){const b=m[v];b<p&&(f+=u.charAt(b%h),c--)}(0,r.wipe)(m)}return f}e.randomString=a;function l(c,u=s,d=e.defaultRandomSource){const f=Math.ceil(c/(Math.log(u.length)/Math.LN2));return a(f,u,d)}e.randomStringForEntropy=l})(D1);var N1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Re,n=Gr;e.DIGEST_LENGTH=32,e.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=e.DIGEST_LENGTH,this.blockSize=e.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,c){if(c===void 0&&(c=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=c,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&c>0;)this._buffer[this._bufferLength++]=l[u++],c--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(c>=this.blockSize&&(u=o(this._temp,this._state,l,u,c),c%=this.blockSize);c>0;)this._buffer[this._bufferLength++]=l[u++],c--;return this},a.prototype.finish=function(l){if(!this._finished){var c=this._bytesHashed,u=this._bufferLength,d=c/536870912|0,f=c<<3,h=c%64<56?64:128;this._buffer[u]=128;for(var p=u+1;p<h-8;p++)this._buffer[p]=0;t.writeUint32BE(d,this._buffer,h-8),t.writeUint32BE(f,this._buffer,h-4),o(this._temp,this._state,this._buffer,0,h),this._finished=!0}for(var p=0;p<this.digestLength/4;p++)t.writeUint32BE(this._state[p],l,p*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();e.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,c,u,d){for(;d>=64;){for(var f=l[0],h=l[1],p=l[2],m=l[3],v=l[4],b=l[5],y=l[6],x=l[7],w=0;w<16;w++){var _=u+w*4;a[w]=t.readUint32BE(c,_)}for(var w=16;w<64;w++){var $=a[w-2],g=($>>>17|$<<15)^($>>>19|$<<13)^$>>>10;$=a[w-15];var T=($>>>7|$<<25)^($>>>18|$<<14)^$>>>3;a[w]=(g+a[w-7]|0)+(T+a[w-16]|0)}for(var w=0;w<64;w++){var g=(((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+(v&b^~v&y)|0)+(x+(i[w]+a[w]|0)|0)|0,T=((f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10))+(f&h^f&p^h&p)|0;x=y,y=b,b=v,v=m+g|0,m=p,p=h,h=f,f=g+T|0}l[0]+=f,l[1]+=h,l[2]+=p,l[3]+=m,l[4]+=v,l[5]+=b,l[6]+=y,l[7]+=x,u+=64,d-=64}return u}function s(a){var l=new r;l.update(a);var c=l.digest();return l.clean(),c}e.hash=s})(N1);var Jb={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sharedKey=e.generateKeyPair=e.generateKeyPairFromSeed=e.scalarMultBase=e.scalarMult=e.SHARED_KEY_LENGTH=e.SECRET_KEY_LENGTH=e.PUBLIC_KEY_LENGTH=void 0;const t=D1,n=Gr;e.PUBLIC_KEY_LENGTH=32,e.SECRET_KEY_LENGTH=32,e.SHARED_KEY_LENGTH=32;function r(w){const _=new Float64Array(16);if(w)for(let $=0;$<w.length;$++)_[$]=w[$];return _}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(w){let _=1;for(let $=0;$<16;$++){let g=w[$]+_+65535;_=Math.floor(g/65536),w[$]=g-_*65536}w[0]+=_-1+37*(_-1)}function a(w,_,$){const g=~($-1);for(let T=0;T<16;T++){const D=g&(w[T]^_[T]);w[T]^=D,_[T]^=D}}function l(w,_){const $=r(),g=r();for(let T=0;T<16;T++)g[T]=_[T];s(g),s(g),s(g);for(let T=0;T<2;T++){$[0]=g[0]-65517;for(let k=1;k<15;k++)$[k]=g[k]-65535-($[k-1]>>16&1),$[k-1]&=65535;$[15]=g[15]-32767-($[14]>>16&1);const D=$[15]>>16&1;$[14]&=65535,a(g,$,1-D)}for(let T=0;T<16;T++)w[2*T]=g[T]&255,w[2*T+1]=g[T]>>8}function c(w,_){for(let $=0;$<16;$++)w[$]=_[2*$]+(_[2*$+1]<<8);w[15]&=32767}function u(w,_,$){for(let g=0;g<16;g++)w[g]=_[g]+$[g]}function d(w,_,$){for(let g=0;g<16;g++)w[g]=_[g]-$[g]}function f(w,_,$){let g,T,D=0,k=0,I=0,V=0,Q=0,B=0,M=0,L=0,z=0,R=0,q=0,G=0,Z=0,Y=0,J=0,ne=0,de=0,ye=0,xe=0,Te=0,he=0,ve=0,ce=0,$e=0,pe=0,kt=0,Qr=0,bi=0,Yr=0,bs=0,Xr=0,Ct=$[0],lt=$[1],je=$[2],nt=$[3],Tt=$[4],Ke=$[5],Rt=$[6],P=$[7],C=$[8],E=$[9],A=$[10],N=$[11],F=$[12],H=$[13],fe=$[14],De=$[15];g=_[0],D+=g*Ct,k+=g*lt,I+=g*je,V+=g*nt,Q+=g*Tt,B+=g*Ke,M+=g*Rt,L+=g*P,z+=g*C,R+=g*E,q+=g*A,G+=g*N,Z+=g*F,Y+=g*H,J+=g*fe,ne+=g*De,g=_[1],k+=g*Ct,I+=g*lt,V+=g*je,Q+=g*nt,B+=g*Tt,M+=g*Ke,L+=g*Rt,z+=g*P,R+=g*C,q+=g*E,G+=g*A,Z+=g*N,Y+=g*F,J+=g*H,ne+=g*fe,de+=g*De,g=_[2],I+=g*Ct,V+=g*lt,Q+=g*je,B+=g*nt,M+=g*Tt,L+=g*Ke,z+=g*Rt,R+=g*P,q+=g*C,G+=g*E,Z+=g*A,Y+=g*N,J+=g*F,ne+=g*H,de+=g*fe,ye+=g*De,g=_[3],V+=g*Ct,Q+=g*lt,B+=g*je,M+=g*nt,L+=g*Tt,z+=g*Ke,R+=g*Rt,q+=g*P,G+=g*C,Z+=g*E,Y+=g*A,J+=g*N,ne+=g*F,de+=g*H,ye+=g*fe,xe+=g*De,g=_[4],Q+=g*Ct,B+=g*lt,M+=g*je,L+=g*nt,z+=g*Tt,R+=g*Ke,q+=g*Rt,G+=g*P,Z+=g*C,Y+=g*E,J+=g*A,ne+=g*N,de+=g*F,ye+=g*H,xe+=g*fe,Te+=g*De,g=_[5],B+=g*Ct,M+=g*lt,L+=g*je,z+=g*nt,R+=g*Tt,q+=g*Ke,G+=g*Rt,Z+=g*P,Y+=g*C,J+=g*E,ne+=g*A,de+=g*N,ye+=g*F,xe+=g*H,Te+=g*fe,he+=g*De,g=_[6],M+=g*Ct,L+=g*lt,z+=g*je,R+=g*nt,q+=g*Tt,G+=g*Ke,Z+=g*Rt,Y+=g*P,J+=g*C,ne+=g*E,de+=g*A,ye+=g*N,xe+=g*F,Te+=g*H,he+=g*fe,ve+=g*De,g=_[7],L+=g*Ct,z+=g*lt,R+=g*je,q+=g*nt,G+=g*Tt,Z+=g*Ke,Y+=g*Rt,J+=g*P,ne+=g*C,de+=g*E,ye+=g*A,xe+=g*N,Te+=g*F,he+=g*H,ve+=g*fe,ce+=g*De,g=_[8],z+=g*Ct,R+=g*lt,q+=g*je,G+=g*nt,Z+=g*Tt,Y+=g*Ke,J+=g*Rt,ne+=g*P,de+=g*C,ye+=g*E,xe+=g*A,Te+=g*N,he+=g*F,ve+=g*H,ce+=g*fe,$e+=g*De,g=_[9],R+=g*Ct,q+=g*lt,G+=g*je,Z+=g*nt,Y+=g*Tt,J+=g*Ke,ne+=g*Rt,de+=g*P,ye+=g*C,xe+=g*E,Te+=g*A,he+=g*N,ve+=g*F,ce+=g*H,$e+=g*fe,pe+=g*De,g=_[10],q+=g*Ct,G+=g*lt,Z+=g*je,Y+=g*nt,J+=g*Tt,ne+=g*Ke,de+=g*Rt,ye+=g*P,xe+=g*C,Te+=g*E,he+=g*A,ve+=g*N,ce+=g*F,$e+=g*H,pe+=g*fe,kt+=g*De,g=_[11],G+=g*Ct,Z+=g*lt,Y+=g*je,J+=g*nt,ne+=g*Tt,de+=g*Ke,ye+=g*Rt,xe+=g*P,Te+=g*C,he+=g*E,ve+=g*A,ce+=g*N,$e+=g*F,pe+=g*H,kt+=g*fe,Qr+=g*De,g=_[12],Z+=g*Ct,Y+=g*lt,J+=g*je,ne+=g*nt,de+=g*Tt,ye+=g*Ke,xe+=g*Rt,Te+=g*P,he+=g*C,ve+=g*E,ce+=g*A,$e+=g*N,pe+=g*F,kt+=g*H,Qr+=g*fe,bi+=g*De,g=_[13],Y+=g*Ct,J+=g*lt,ne+=g*je,de+=g*nt,ye+=g*Tt,xe+=g*Ke,Te+=g*Rt,he+=g*P,ve+=g*C,ce+=g*E,$e+=g*A,pe+=g*N,kt+=g*F,Qr+=g*H,bi+=g*fe,Yr+=g*De,g=_[14],J+=g*Ct,ne+=g*lt,de+=g*je,ye+=g*nt,xe+=g*Tt,Te+=g*Ke,he+=g*Rt,ve+=g*P,ce+=g*C,$e+=g*E,pe+=g*A,kt+=g*N,Qr+=g*F,bi+=g*H,Yr+=g*fe,bs+=g*De,g=_[15],ne+=g*Ct,de+=g*lt,ye+=g*je,xe+=g*nt,Te+=g*Tt,he+=g*Ke,ve+=g*Rt,ce+=g*P,$e+=g*C,pe+=g*E,kt+=g*A,Qr+=g*N,bi+=g*F,Yr+=g*H,bs+=g*fe,Xr+=g*De,D+=38*de,k+=38*ye,I+=38*xe,V+=38*Te,Q+=38*he,B+=38*ve,M+=38*ce,L+=38*$e,z+=38*pe,R+=38*kt,q+=38*Qr,G+=38*bi,Z+=38*Yr,Y+=38*bs,J+=38*Xr,T=1,g=D+T+65535,T=Math.floor(g/65536),D=g-T*65536,g=k+T+65535,T=Math.floor(g/65536),k=g-T*65536,g=I+T+65535,T=Math.floor(g/65536),I=g-T*65536,g=V+T+65535,T=Math.floor(g/65536),V=g-T*65536,g=Q+T+65535,T=Math.floor(g/65536),Q=g-T*65536,g=B+T+65535,T=Math.floor(g/65536),B=g-T*65536,g=M+T+65535,T=Math.floor(g/65536),M=g-T*65536,g=L+T+65535,T=Math.floor(g/65536),L=g-T*65536,g=z+T+65535,T=Math.floor(g/65536),z=g-T*65536,g=R+T+65535,T=Math.floor(g/65536),R=g-T*65536,g=q+T+65535,T=Math.floor(g/65536),q=g-T*65536,g=G+T+65535,T=Math.floor(g/65536),G=g-T*65536,g=Z+T+65535,T=Math.floor(g/65536),Z=g-T*65536,g=Y+T+65535,T=Math.floor(g/65536),Y=g-T*65536,g=J+T+65535,T=Math.floor(g/65536),J=g-T*65536,g=ne+T+65535,T=Math.floor(g/65536),ne=g-T*65536,D+=T-1+37*(T-1),T=1,g=D+T+65535,T=Math.floor(g/65536),D=g-T*65536,g=k+T+65535,T=Math.floor(g/65536),k=g-T*65536,g=I+T+65535,T=Math.floor(g/65536),I=g-T*65536,g=V+T+65535,T=Math.floor(g/65536),V=g-T*65536,g=Q+T+65535,T=Math.floor(g/65536),Q=g-T*65536,g=B+T+65535,T=Math.floor(g/65536),B=g-T*65536,g=M+T+65535,T=Math.floor(g/65536),M=g-T*65536,g=L+T+65535,T=Math.floor(g/65536),L=g-T*65536,g=z+T+65535,T=Math.floor(g/65536),z=g-T*65536,g=R+T+65535,T=Math.floor(g/65536),R=g-T*65536,g=q+T+65535,T=Math.floor(g/65536),q=g-T*65536,g=G+T+65535,T=Math.floor(g/65536),G=g-T*65536,g=Z+T+65535,T=Math.floor(g/65536),Z=g-T*65536,g=Y+T+65535,T=Math.floor(g/65536),Y=g-T*65536,g=J+T+65535,T=Math.floor(g/65536),J=g-T*65536,g=ne+T+65535,T=Math.floor(g/65536),ne=g-T*65536,D+=T-1+37*(T-1),w[0]=D,w[1]=k,w[2]=I,w[3]=V,w[4]=Q,w[5]=B,w[6]=M,w[7]=L,w[8]=z,w[9]=R,w[10]=q,w[11]=G,w[12]=Z,w[13]=Y,w[14]=J,w[15]=ne}function h(w,_){f(w,_,_)}function p(w,_){const $=r();for(let g=0;g<16;g++)$[g]=_[g];for(let g=253;g>=0;g--)h($,$),g!==2&&g!==4&&f($,$,_);for(let g=0;g<16;g++)w[g]=$[g]}function m(w,_){const $=new Uint8Array(32),g=new Float64Array(80),T=r(),D=r(),k=r(),I=r(),V=r(),Q=r();for(let z=0;z<31;z++)$[z]=w[z];$[31]=w[31]&127|64,$[0]&=248,c(g,_);for(let z=0;z<16;z++)D[z]=g[z];T[0]=I[0]=1;for(let z=254;z>=0;--z){const R=$[z>>>3]>>>(z&7)&1;a(T,D,R),a(k,I,R),u(V,T,k),d(T,T,k),u(k,D,I),d(D,D,I),h(I,V),h(Q,T),f(T,k,T),f(k,D,V),u(V,T,k),d(T,T,k),h(D,T),d(k,I,Q),f(T,k,o),u(T,T,I),f(k,k,T),f(T,I,Q),f(I,D,g),h(D,V),a(T,D,R),a(k,I,R)}for(let z=0;z<16;z++)g[z+16]=T[z],g[z+32]=k[z],g[z+48]=D[z],g[z+64]=I[z];const B=g.subarray(32),M=g.subarray(16);p(B,B),f(M,M,B);const L=new Uint8Array(32);return l(L,M),L}e.scalarMult=m;function v(w){return m(w,i)}e.scalarMultBase=v;function b(w){if(w.length!==e.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);const _=new Uint8Array(w);return{publicKey:v(_),secretKey:_}}e.generateKeyPairFromSeed=b;function y(w){const _=(0,t.randomBytes)(32,w),$=b(_);return(0,n.wipe)(_),$}e.generateKeyPair=y;function x(w,_,$=!1){if(w.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(_.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const g=m(w,_);if($){let T=0;for(let D=0;D<g.length;D++)T|=g[D];if(T===0)throw new Error("X25519: invalid shared key")}return g}e.sharedKey=x})(Jb);function e3(e){return globalThis.Buffer!=null?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function pT(e=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?e3(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function px(e,t){t||(t=e.reduce((i,o)=>i+o.length,0));const n=pT(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return e3(n)}function GH(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=e.length,l=e.charAt(0),c=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(p){if(p instanceof Uint8Array||(ArrayBuffer.isView(p)?p=new Uint8Array(p.buffer,p.byteOffset,p.byteLength):Array.isArray(p)&&(p=Uint8Array.from(p))),!(p instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(p.length===0)return"";for(var m=0,v=0,b=0,y=p.length;b!==y&&p[b]===0;)b++,m++;for(var x=(y-b)*u+1>>>0,w=new Uint8Array(x);b!==y;){for(var _=p[b],$=0,g=x-1;(_!==0||$<v)&&g!==-1;g--,$++)_+=256*w[g]>>>0,w[g]=_%a>>>0,_=_/a>>>0;if(_!==0)throw new Error("Non-zero carry");v=$,b++}for(var T=x-v;T!==x&&w[T]===0;)T++;for(var D=l.repeat(m);T<x;++T)D+=e.charAt(w[T]);return D}function f(p){if(typeof p!="string")throw new TypeError("Expected String");if(p.length===0)return new Uint8Array;var m=0;if(p[m]!==" "){for(var v=0,b=0;p[m]===l;)v++,m++;for(var y=(p.length-m)*c+1>>>0,x=new Uint8Array(y);p[m];){var w=n[p.charCodeAt(m)];if(w===255)return;for(var _=0,$=y-1;(w!==0||_<b)&&$!==-1;$--,_++)w+=a*x[$]>>>0,x[$]=w%256>>>0,w=w/256>>>0;if(w!==0)throw new Error("Non-zero carry");b=_,m++}if(p[m]!==" "){for(var g=y-b;g!==y&&x[g]===0;)g++;for(var T=new Uint8Array(v+(y-g)),D=v;g!==y;)T[D++]=x[g++];return T}}}function h(p){var m=f(p);if(m)return m;throw new Error(`Non-${t} character`)}return{encode:d,decodeUnsafe:f,decode:h}}var KH=GH,ZH=KH;const QH=e=>{if(e instanceof Uint8Array&&e.constructor.name==="Uint8Array")return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},YH=e=>new TextEncoder().encode(e),XH=e=>new TextDecoder().decode(e);class JH{constructor(t,n,r){this.name=t,this.prefix=n,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class eq{constructor(t,n,r){if(this.name=t,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(t){if(typeof t=="string"){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(t){return mT(this,t)}}class tq{constructor(t){this.decoders=t}or(t){return mT(this,t)}decode(t){const n=t[0],r=this.decoders[n];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const mT=(e,t)=>new tq({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class nq{constructor(t,n,r,i){this.name=t,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new JH(t,n,r),this.decoder=new eq(t,n,i)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const I1=({name:e,prefix:t,encode:n,decode:r})=>new nq(e,t,n,r),Ef=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:i}=ZH(n,t);return I1({prefix:e,name:t,encode:r,decode:o=>QH(i(o))})},rq=(e,t,n,r)=>{const i={};for(let u=0;u<t.length;++u)i[t[u]]=u;let o=e.length;for(;e[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,c=0;for(let u=0;u<o;++u){const d=i[e[u]];if(d===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|d,a+=n,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},iq=(e,t,n)=>{const r=t[t.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<e.length;++l)for(a=a<<8|e[l],s+=8;s>n;)s-=n,o+=t[i&a>>s];if(s&&(o+=t[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},ln=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>I1({prefix:t,name:e,encode(i){return iq(i,r,n)},decode(i){return rq(i,r,n,e)}}),oq=I1({prefix:"\0",name:"identity",encode:e=>XH(e),decode:e=>YH(e)}),sq=Object.freeze(Object.defineProperty({__proto__:null,identity:oq},Symbol.toStringTag,{value:"Module"})),aq=ln({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),lq=Object.freeze(Object.defineProperty({__proto__:null,base2:aq},Symbol.toStringTag,{value:"Module"})),cq=ln({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),uq=Object.freeze(Object.defineProperty({__proto__:null,base8:cq},Symbol.toStringTag,{value:"Module"})),dq=Ef({prefix:"9",name:"base10",alphabet:"0123456789"}),fq=Object.freeze(Object.defineProperty({__proto__:null,base10:dq},Symbol.toStringTag,{value:"Module"})),hq=ln({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),pq=ln({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),mq=Object.freeze(Object.defineProperty({__proto__:null,base16:hq,base16upper:pq},Symbol.toStringTag,{value:"Module"})),gq=ln({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),yq=ln({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),vq=ln({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),wq=ln({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),bq=ln({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),xq=ln({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),Cq=ln({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),Eq=ln({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Sq=ln({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),_q=Object.freeze(Object.defineProperty({__proto__:null,base32:gq,base32hex:bq,base32hexpad:Cq,base32hexpadupper:Eq,base32hexupper:xq,base32pad:vq,base32padupper:wq,base32upper:yq,base32z:Sq},Symbol.toStringTag,{value:"Module"})),Tq=Ef({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),$q=Ef({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),Pq=Object.freeze(Object.defineProperty({__proto__:null,base36:Tq,base36upper:$q},Symbol.toStringTag,{value:"Module"})),Aq=Ef({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Dq=Ef({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Oq=Object.freeze(Object.defineProperty({__proto__:null,base58btc:Aq,base58flickr:Dq},Symbol.toStringTag,{value:"Module"})),kq=ln({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Rq=ln({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Nq=ln({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),Iq=ln({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Mq=Object.freeze(Object.defineProperty({__proto__:null,base64:kq,base64pad:Rq,base64url:Nq,base64urlpad:Iq},Symbol.toStringTag,{value:"Module"})),gT=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),Lq=gT.reduce((e,t,n)=>(e[n]=t,e),[]),jq=gT.reduce((e,t,n)=>(e[t.codePointAt(0)]=n,e),[]);function Fq(e){return e.reduce((t,n)=>(t+=Lq[n],t),"")}function Bq(e){const t=[];for(const n of e){const r=jq[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);t.push(r)}return new Uint8Array(t)}const Uq=I1({prefix:"🚀",name:"base256emoji",encode:Fq,decode:Bq}),zq=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:Uq},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const mx={...sq,...lq,...uq,...fq,...mq,..._q,...Pq,...Oq,...Mq,...zq};function yT(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const gx=yT("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),gg=yT("ascii","a",e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},e=>{e=e.substring(1);const t=pT(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}),vT={utf8:gx,"utf-8":gx,hex:mx.base16,latin1:gg,ascii:gg,binary:gg,...mx};function jr(e,t="utf8"){const n=vT[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?e3(globalThis.Buffer.from(e,"utf-8")):n.decoder.decode(`${n.prefix}${e}`)}function Hr(e,t="utf8"){const n=vT[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):n.encoder.encode(e).substring(1)}var yx=function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},Wq=function(){function e(t,n,r){this.name=t,this.version=n,this.os=r,this.type="browser"}return e}(),Vq=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=process.platform}return e}(),Hq=function(){function e(t,n,r,i){this.name=t,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return e}(),qq=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),Gq=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),Kq=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,Zq=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,vx=3,Qq=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",Kq]],wx=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Yq(e){return e?bx(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Gq:typeof navigator<"u"?bx(navigator.userAgent):eG()}function Xq(e){return e!==""&&Qq.reduce(function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]},!1)}function bx(e){var t=Xq(e);if(!t)return null;var n=t[0],r=t[1];if(n==="searchbot")return new qq;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<vx&&(i=yx(yx([],i,!0),tG(vx-i.length),!0)):i=[];var o=i.join("."),s=Jq(e),a=Zq.exec(e);return a&&a[1]?new Hq(n,o,s,a[1]):new Wq(n,o,s)}function Jq(e){for(var t=0,n=wx.length;t<n;t++){var r=wx[t],i=r[0],o=r[1],s=o.exec(e);if(s)return i}return null}function eG(){var e=typeof process<"u"&&process.version;return e?new Vq(process.version.slice(1)):null}function tG(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}var Xs={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qv=function(e,t){return Qv=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Qv(e,t)};function nG(e,t){Qv(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Yv=function(){return Yv=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Yv.apply(this,arguments)};function rG(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function iG(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function oG(e,t){return function(n,r){t(n,r,e)}}function sG(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function aG(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(u){try{c(r.next(u))}catch(d){s(d)}}function l(u){try{c(r.throw(u))}catch(d){s(d)}}function c(u){u.done?o(u.value):i(u.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function lG(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function cG(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}function uG(e,t){for(var n in e)n!=="default"&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function Xv(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function wT(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function dG(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(wT(arguments[t]));return e}function fG(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function Wd(e){return this instanceof Wd?(this.v=e,this):new Wd(e)}function hG(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(f){r[f]&&(i[f]=function(h){return new Promise(function(p,m){o.push([f,h,p,m])>1||a(f,h)})})}function a(f,h){try{l(r[f](h))}catch(p){d(o[0][3],p)}}function l(f){f.value instanceof Wd?Promise.resolve(f.value.v).then(c,u):d(o[0][2],f)}function c(f){a("next",f)}function u(f){a("throw",f)}function d(f,h){f(h),o.shift(),o.length&&a(o[0][0],o[0][1])}}function pG(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,o){t[i]=e[i]?function(s){return(n=!n)?{value:Wd(e[i](s)),done:i==="return"}:o?o(s):s}:o}}function mG(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Xv=="function"?Xv(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,l){s=e[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}function gG(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function yG(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function vG(e){return e&&e.__esModule?e:{default:e}}function wG(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function bG(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}const xG=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return Yv},__asyncDelegator:pG,__asyncGenerator:hG,__asyncValues:mG,__await:Wd,__awaiter:aG,__classPrivateFieldGet:wG,__classPrivateFieldSet:bG,__createBinding:cG,__decorate:iG,__exportStar:uG,__extends:nG,__generator:lG,__importDefault:vG,__importStar:yG,__makeTemplateObject:gG,__metadata:sG,__param:oG,__read:wT,__rest:rG,__spread:dG,__spreadArrays:fG,__values:Xv},Symbol.toStringTag,{value:"Module"})),M1=_C(xG);var yg={},Qc={},xx;function CG(){if(xx)return Qc;xx=1,Object.defineProperty(Qc,"__esModule",{value:!0}),Qc.delay=void 0;function e(t){return new Promise(n=>{setTimeout(()=>{n(!0)},t)})}return Qc.delay=e,Qc}var Ss={},vg={},_s={},Cx;function EG(){return Cx||(Cx=1,Object.defineProperty(_s,"__esModule",{value:!0}),_s.ONE_THOUSAND=_s.ONE_HUNDRED=void 0,_s.ONE_HUNDRED=100,_s.ONE_THOUSAND=1e3),_s}var wg={},Ex;function SG(){return Ex||(Ex=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_YEAR=e.FOUR_WEEKS=e.THREE_WEEKS=e.TWO_WEEKS=e.ONE_WEEK=e.THIRTY_DAYS=e.SEVEN_DAYS=e.FIVE_DAYS=e.THREE_DAYS=e.ONE_DAY=e.TWENTY_FOUR_HOURS=e.TWELVE_HOURS=e.SIX_HOURS=e.THREE_HOURS=e.ONE_HOUR=e.SIXTY_MINUTES=e.THIRTY_MINUTES=e.TEN_MINUTES=e.FIVE_MINUTES=e.ONE_MINUTE=e.SIXTY_SECONDS=e.THIRTY_SECONDS=e.TEN_SECONDS=e.FIVE_SECONDS=e.ONE_SECOND=void 0,e.ONE_SECOND=1,e.FIVE_SECONDS=5,e.TEN_SECONDS=10,e.THIRTY_SECONDS=30,e.SIXTY_SECONDS=60,e.ONE_MINUTE=e.SIXTY_SECONDS,e.FIVE_MINUTES=e.ONE_MINUTE*5,e.TEN_MINUTES=e.ONE_MINUTE*10,e.THIRTY_MINUTES=e.ONE_MINUTE*30,e.SIXTY_MINUTES=e.ONE_MINUTE*60,e.ONE_HOUR=e.SIXTY_MINUTES,e.THREE_HOURS=e.ONE_HOUR*3,e.SIX_HOURS=e.ONE_HOUR*6,e.TWELVE_HOURS=e.ONE_HOUR*12,e.TWENTY_FOUR_HOURS=e.ONE_HOUR*24,e.ONE_DAY=e.TWENTY_FOUR_HOURS,e.THREE_DAYS=e.ONE_DAY*3,e.FIVE_DAYS=e.ONE_DAY*5,e.SEVEN_DAYS=e.ONE_DAY*7,e.THIRTY_DAYS=e.ONE_DAY*30,e.ONE_WEEK=e.SEVEN_DAYS,e.TWO_WEEKS=e.ONE_WEEK*2,e.THREE_WEEKS=e.ONE_WEEK*3,e.FOUR_WEEKS=e.ONE_WEEK*4,e.ONE_YEAR=e.ONE_DAY*365}(wg)),wg}var Sx;function bT(){return Sx||(Sx=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=M1;t.__exportStar(EG(),e),t.__exportStar(SG(),e)}(vg)),vg}var _x;function _G(){if(_x)return Ss;_x=1,Object.defineProperty(Ss,"__esModule",{value:!0}),Ss.fromMiliseconds=Ss.toMiliseconds=void 0;const e=bT();function t(r){return r*e.ONE_THOUSAND}Ss.toMiliseconds=t;function n(r){return Math.floor(r/e.ONE_THOUSAND)}return Ss.fromMiliseconds=n,Ss}var Tx;function TG(){return Tx||(Tx=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=M1;t.__exportStar(CG(),e),t.__exportStar(_G(),e)}(yg)),yg}var za={},$x;function $G(){if($x)return za;$x=1,Object.defineProperty(za,"__esModule",{value:!0}),za.Watch=void 0;class e{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return za.Watch=e,za.default=e,za}var bg={},Yc={},Px;function PG(){if(Px)return Yc;Px=1,Object.defineProperty(Yc,"__esModule",{value:!0}),Yc.IWatch=void 0;class e{}return Yc.IWatch=e,Yc}var Ax;function AG(){return Ax||(Ax=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),M1.__exportStar(PG(),e)}(bg)),bg}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=M1;t.__exportStar(TG(),e),t.__exportStar($G(),e),t.__exportStar(AG(),e),t.__exportStar(bT(),e)})(Xs);var st={};Object.defineProperty(st,"__esModule",{value:!0});st.getLocalStorage=st.getLocalStorageOrThrow=st.getCrypto=st.getCryptoOrThrow=CT=st.getLocation=st.getLocationOrThrow=t3=st.getNavigator=st.getNavigatorOrThrow=xT=st.getDocument=st.getDocumentOrThrow=st.getFromWindowOrThrow=st.getFromWindow=void 0;function ka(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}st.getFromWindow=ka;function Cc(e){const t=ka(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}st.getFromWindowOrThrow=Cc;function DG(){return Cc("document")}st.getDocumentOrThrow=DG;function OG(){return ka("document")}var xT=st.getDocument=OG;function kG(){return Cc("navigator")}st.getNavigatorOrThrow=kG;function RG(){return ka("navigator")}var t3=st.getNavigator=RG;function NG(){return Cc("location")}st.getLocationOrThrow=NG;function IG(){return ka("location")}var CT=st.getLocation=IG;function MG(){return Cc("crypto")}st.getCryptoOrThrow=MG;function LG(){return ka("crypto")}st.getCrypto=LG;function jG(){return Cc("localStorage")}st.getLocalStorageOrThrow=jG;function FG(){return ka("localStorage")}st.getLocalStorage=FG;var n3={};Object.defineProperty(n3,"__esModule",{value:!0});var ET=n3.getWindowMetadata=void 0;const Dx=st;function BG(){let e,t;try{e=Dx.getDocumentOrThrow(),t=Dx.getLocationOrThrow()}catch{return null}function n(){const d=e.getElementsByTagName("link"),f=[];for(let h=0;h<d.length;h++){const p=d[h],m=p.getAttribute("rel");if(m&&m.toLowerCase().indexOf("icon")>-1){const v=p.getAttribute("href");if(v)if(v.toLowerCase().indexOf("https:")===-1&&v.toLowerCase().indexOf("http:")===-1&&v.indexOf("//")!==0){let b=t.protocol+"//"+t.host;if(v.indexOf("/")===0)b+=v;else{const y=t.pathname.split("/");y.pop();const x=y.join("/");b+=x+"/"+v}f.push(b)}else if(v.indexOf("//")===0){const b=t.protocol+v;f.push(b)}else f.push(v)}}return f}function r(...d){const f=e.getElementsByTagName("meta");for(let h=0;h<f.length;h++){const p=f[h],m=["itemprop","property","name"].map(v=>p.getAttribute(v)).filter(v=>v?d.includes(v):!1);if(m.length&&m){const v=p.getAttribute("content");if(v)return v}}return""}function i(){let d=r("name","og:site_name","og:title","twitter:title");return d||(d=e.title),d}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=t.origin,c=n();return{description:a,url:l,icons:c,name:s}}ET=n3.getWindowMetadata=BG;var Vd={},UG=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),ST="%[a-f0-9]{2}",Ox=new RegExp("("+ST+")|([^%]+?)","gi"),kx=new RegExp("("+ST+")+","gi");function Jv(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],Jv(n),Jv(r))}function zG(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(Ox)||[],n=1;n<t.length;n++)e=Jv(t,n).join(""),t=e.match(Ox)||[];return e}}function WG(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=kx.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{var r=zG(n[0]);r!==n[0]&&(t[n[0]]=r)}n=kx.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),o=0;o<i.length;o++){var s=i[o];e=e.replace(new RegExp(s,"g"),t[s])}return e}var VG=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return WG(e)}},HG=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];const n=e.indexOf(t);return n===-1?[e]:[e.slice(0,n),e.slice(n+t.length)]},qG=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),o=0;o<r.length;o++){var s=r[o],a=e[s];(i?t.indexOf(s)!==-1:t(s,a,e))&&(n[s]=a)}return n};(function(e){const t=UG,n=VG,r=HG,i=qG,o=y=>y==null,s=Symbol("encodeFragmentIdentifier");function a(y){switch(y.arrayFormat){case"index":return x=>(w,_)=>{const $=w.length;return _===void 0||y.skipNull&&_===null||y.skipEmptyString&&_===""?w:_===null?[...w,[u(x,y),"[",$,"]"].join("")]:[...w,[u(x,y),"[",u($,y),"]=",u(_,y)].join("")]};case"bracket":return x=>(w,_)=>_===void 0||y.skipNull&&_===null||y.skipEmptyString&&_===""?w:_===null?[...w,[u(x,y),"[]"].join("")]:[...w,[u(x,y),"[]=",u(_,y)].join("")];case"colon-list-separator":return x=>(w,_)=>_===void 0||y.skipNull&&_===null||y.skipEmptyString&&_===""?w:_===null?[...w,[u(x,y),":list="].join("")]:[...w,[u(x,y),":list=",u(_,y)].join("")];case"comma":case"separator":case"bracket-separator":{const x=y.arrayFormat==="bracket-separator"?"[]=":"=";return w=>(_,$)=>$===void 0||y.skipNull&&$===null||y.skipEmptyString&&$===""?_:($=$===null?"":$,_.length===0?[[u(w,y),x,u($,y)].join("")]:[[_,u($,y)].join(y.arrayFormatSeparator)])}default:return x=>(w,_)=>_===void 0||y.skipNull&&_===null||y.skipEmptyString&&_===""?w:_===null?[...w,u(x,y)]:[...w,[u(x,y),"=",u(_,y)].join("")]}}function l(y){let x;switch(y.arrayFormat){case"index":return(w,_,$)=>{if(x=/\[(\d*)\]$/.exec(w),w=w.replace(/\[\d*\]$/,""),!x){$[w]=_;return}$[w]===void 0&&($[w]={}),$[w][x[1]]=_};case"bracket":return(w,_,$)=>{if(x=/(\[\])$/.exec(w),w=w.replace(/\[\]$/,""),!x){$[w]=_;return}if($[w]===void 0){$[w]=[_];return}$[w]=[].concat($[w],_)};case"colon-list-separator":return(w,_,$)=>{if(x=/(:list)$/.exec(w),w=w.replace(/:list$/,""),!x){$[w]=_;return}if($[w]===void 0){$[w]=[_];return}$[w]=[].concat($[w],_)};case"comma":case"separator":return(w,_,$)=>{const g=typeof _=="string"&&_.includes(y.arrayFormatSeparator),T=typeof _=="string"&&!g&&d(_,y).includes(y.arrayFormatSeparator);_=T?d(_,y):_;const D=g||T?_.split(y.arrayFormatSeparator).map(k=>d(k,y)):_===null?_:d(_,y);$[w]=D};case"bracket-separator":return(w,_,$)=>{const g=/(\[\])$/.test(w);if(w=w.replace(/\[\]$/,""),!g){$[w]=_&&d(_,y);return}const T=_===null?[]:_.split(y.arrayFormatSeparator).map(D=>d(D,y));if($[w]===void 0){$[w]=T;return}$[w]=[].concat($[w],T)};default:return(w,_,$)=>{if($[w]===void 0){$[w]=_;return}$[w]=[].concat($[w],_)}}}function c(y){if(typeof y!="string"||y.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(y,x){return x.encode?x.strict?t(y):encodeURIComponent(y):y}function d(y,x){return x.decode?n(y):y}function f(y){return Array.isArray(y)?y.sort():typeof y=="object"?f(Object.keys(y)).sort((x,w)=>Number(x)-Number(w)).map(x=>y[x]):y}function h(y){const x=y.indexOf("#");return x!==-1&&(y=y.slice(0,x)),y}function p(y){let x="";const w=y.indexOf("#");return w!==-1&&(x=y.slice(w)),x}function m(y){y=h(y);const x=y.indexOf("?");return x===-1?"":y.slice(x+1)}function v(y,x){return x.parseNumbers&&!Number.isNaN(Number(y))&&typeof y=="string"&&y.trim()!==""?y=Number(y):x.parseBooleans&&y!==null&&(y.toLowerCase()==="true"||y.toLowerCase()==="false")&&(y=y.toLowerCase()==="true"),y}function b(y,x){x=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},x),c(x.arrayFormatSeparator);const w=l(x),_=Object.create(null);if(typeof y!="string"||(y=y.trim().replace(/^[?#&]/,""),!y))return _;for(const $ of y.split("&")){if($==="")continue;let[g,T]=r(x.decode?$.replace(/\+/g," "):$,"=");T=T===void 0?null:["comma","separator","bracket-separator"].includes(x.arrayFormat)?T:d(T,x),w(d(g,x),T,_)}for(const $ of Object.keys(_)){const g=_[$];if(typeof g=="object"&&g!==null)for(const T of Object.keys(g))g[T]=v(g[T],x);else _[$]=v(g,x)}return x.sort===!1?_:(x.sort===!0?Object.keys(_).sort():Object.keys(_).sort(x.sort)).reduce(($,g)=>{const T=_[g];return T&&typeof T=="object"&&!Array.isArray(T)?$[g]=f(T):$[g]=T,$},Object.create(null))}e.extract=m,e.parse=b,e.stringify=(y,x)=>{if(!y)return"";x=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},x),c(x.arrayFormatSeparator);const w=T=>x.skipNull&&o(y[T])||x.skipEmptyString&&y[T]==="",_=a(x),$={};for(const T of Object.keys(y))w(T)||($[T]=y[T]);const g=Object.keys($);return x.sort!==!1&&g.sort(x.sort),g.map(T=>{const D=y[T];return D===void 0?"":D===null?u(T,x):Array.isArray(D)?D.length===0&&x.arrayFormat==="bracket-separator"?u(T,x)+"[]":D.reduce(_(T),[]).join("&"):u(T,x)+"="+u(D,x)}).filter(T=>T.length>0).join("&")},e.parseUrl=(y,x)=>{x=Object.assign({decode:!0},x);const[w,_]=r(y,"#");return Object.assign({url:w.split("?")[0]||"",query:b(m(y),x)},x&&x.parseFragmentIdentifier&&_?{fragmentIdentifier:d(_,x)}:{})},e.stringifyUrl=(y,x)=>{x=Object.assign({encode:!0,strict:!0,[s]:!0},x);const w=h(y.url).split("?")[0]||"",_=e.extract(y.url),$=e.parse(_,{sort:!1}),g=Object.assign($,y.query);let T=e.stringify(g,x);T&&(T=`?${T}`);let D=p(y.url);return y.fragmentIdentifier&&(D=`#${x[s]?u(y.fragmentIdentifier,x):y.fragmentIdentifier}`),`${w}${T}${D}`},e.pick=(y,x,w)=>{w=Object.assign({parseFragmentIdentifier:!0,[s]:!1},w);const{url:_,query:$,fragmentIdentifier:g}=e.parseUrl(y,w);return e.stringifyUrl({url:_,query:i($,x),fragmentIdentifier:g},w)},e.exclude=(y,x,w)=>{const _=Array.isArray(x)?$=>!x.includes($):($,g)=>!x($,g);return e.pick(y,_,w)}})(Vd);const GG={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},KG=":";function Hoe(e){const[t,n]=e.split(KG);return{namespace:t,reference:n}}function qoe(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const i=e[r];n.push(...i.accounts)}),n}function _T(e,t){return e.includes(":")?[e]:t.chains||[]}const TT="base10",Un="base16",ew="base64pad",r3="utf8",$T=0,Sf=1,ZG=0,Rx=1,tw=12,i3=32;function Goe(){const e=Jb.generateKeyPair();return{privateKey:Hr(e.secretKey,Un),publicKey:Hr(e.publicKey,Un)}}function Koe(){const e=D1.randomBytes(i3);return Hr(e,Un)}function Zoe(e,t){const n=Jb.sharedKey(jr(e,Un),jr(t,Un),!0),r=new MH(N1.SHA256,n).expand(i3);return Hr(r,Un)}function Qoe(e){const t=N1.hash(jr(e,Un));return Hr(t,Un)}function Yoe(e){const t=N1.hash(jr(e,r3));return Hr(t,Un)}function QG(e){return jr(`${e}`,TT)}function L1(e){return Number(Hr(e,TT))}function Xoe(e){const t=QG(typeof e.type<"u"?e.type:$T);if(L1(t)===Sf&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?jr(e.senderPublicKey,Un):void 0,r=typeof e.iv<"u"?jr(e.iv,Un):D1.randomBytes(tw),i=new Yb.ChaCha20Poly1305(jr(e.symKey,Un)).seal(r,jr(e.message,r3));return YG({type:t,sealed:i,iv:r,senderPublicKey:n})}function Joe(e){const t=new Yb.ChaCha20Poly1305(jr(e.symKey,Un)),{sealed:n,iv:r}=PT(e.encoded),i=t.open(r,n);if(i===null)throw new Error("Failed to decrypt");return Hr(i,r3)}function YG(e){if(L1(e.type)===Sf){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return Hr(px([e.type,e.senderPublicKey,e.iv,e.sealed]),ew)}return Hr(px([e.type,e.iv,e.sealed]),ew)}function PT(e){const t=jr(e,ew),n=t.slice(ZG,Rx),r=Rx;if(L1(n)===Sf){const a=r+i3,l=a+tw,c=t.slice(r,a),u=t.slice(a,l),d=t.slice(l);return{type:n,sealed:d,iv:u,senderPublicKey:c}}const i=r+tw,o=t.slice(r,i),s=t.slice(i);return{type:n,sealed:s,iv:o}}function ese(e,t){const n=PT(e);return XG({type:L1(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?Hr(n.senderPublicKey,Un):void 0,receiverPublicKey:t==null?void 0:t.receiverPublicKey})}function XG(e){const t=(e==null?void 0:e.type)||$T;if(t===Sf){if(typeof(e==null?void 0:e.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(e==null?void 0:e.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e==null?void 0:e.senderPublicKey,receiverPublicKey:e==null?void 0:e.receiverPublicKey}}function tse(e){return e.type===Sf&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}var JG=Object.defineProperty,Nx=Object.getOwnPropertySymbols,eK=Object.prototype.hasOwnProperty,tK=Object.prototype.propertyIsEnumerable,Ix=(e,t,n)=>t in e?JG(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mx=(e,t)=>{for(var n in t||(t={}))eK.call(t,n)&&Ix(e,n,t[n]);if(Nx)for(var n of Nx(t))tK.call(t,n)&&Ix(e,n,t[n]);return e};const nK="ReactNative",Zn={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},rK="js";function AT(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function j1(){return!xT()&&!!t3()&&navigator.product===nK}function o3(){return!AT()&&!!t3()}function _f(){return j1()?Zn.reactNative:AT()?Zn.node:o3()?Zn.browser:Zn.unknown}function iK(e,t){let n=Vd.parse(e);return n=Mx(Mx({},n),t),e=Vd.stringify(n),e}function nse(){return ET()||{name:"",description:"",url:"",icons:[""]}}function oK(){if(_f()===Zn.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const e=Yq();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function sK(){var e;const t=_f();return t===Zn.browser?[t,((e=CT())==null?void 0:e.host)||"unknown"].join(":"):t}function aK(e,t,n){const r=oK(),i=sK();return[[e,t].join("-"),[rK,n].join("-"),r,i].join("/")}function rse({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s}){const a=n.split("?"),l=aK(e,t,r),c={auth:i,ua:l,projectId:o,useOnCloseEvent:s||void 0},u=iK(a[1]||"",c);return a[0]+"?"+u}function Vs(e,t){return e.filter(n=>t.includes(n)).length===e.length}function ise(e){return Object.fromEntries(e.entries())}function ose(e){return new Map(Object.entries(e))}function sse(e=Xs.FIVE_MINUTES,t){const n=Xs.toMiliseconds(e||Xs.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(t))},n),r=s,i=a})}}function ase(e,t,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),t);try{const s=await e;r(s)}catch(s){i(s)}clearTimeout(o)})}function DT(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function lse(e){return DT("topic",e)}function cse(e){return DT("id",e)}function use(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if(t==="topic"&&typeof n=="string")r.topic=n;else if(t==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);return r}function dse(e,t){return Xs.fromMiliseconds((t||Date.now())+Xs.toMiliseconds(e))}function fse(e){return Date.now()>=Xs.toMiliseconds(e)}function hse(e,t){return`${e}${t?`:${t}`:""}`}function xg(e=[],t=[]){return[...new Set([...e,...t])]}async function pse({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${e}&sessionTopic=${t}`,s=_f();s===Zn.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===Zn.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}const lK="irn";function mse(e){return(e==null?void 0:e.relay)||{protocol:lK}}function gse(e){const t=GG[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var cK=Object.defineProperty,Lx=Object.getOwnPropertySymbols,uK=Object.prototype.hasOwnProperty,dK=Object.prototype.propertyIsEnumerable,jx=(e,t,n)=>t in e?cK(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fK=(e,t)=>{for(var n in t||(t={}))uK.call(t,n)&&jx(e,n,t[n]);if(Lx)for(var n of Lx(t))dK.call(t,n)&&jx(e,n,t[n]);return e};function hK(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=e[i];n[o]=s}}),n}function yse(e){const t=e.indexOf(":"),n=e.indexOf("?")!==-1?e.indexOf("?"):void 0,r=e.substring(0,t),i=e.substring(t+1,n).split("@"),o=typeof n<"u"?e.substring(n):"",s=Vd.parse(o);return{protocol:r,topic:pK(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:hK(s)}}function pK(e){return e.startsWith("//")?e.substring(2):e}function mK(e,t="-"){const n="relay",r={};return Object.keys(e).forEach(i=>{const o=n+t+i;e[i]&&(r[o]=e[i])}),r}function vse(e){return`${e.protocol}:${e.topic}@${e.version}?`+Vd.stringify(fK({symKey:e.symKey},mK(e.relay)))}var gK=Object.defineProperty,yK=Object.defineProperties,vK=Object.getOwnPropertyDescriptors,Fx=Object.getOwnPropertySymbols,wK=Object.prototype.hasOwnProperty,bK=Object.prototype.propertyIsEnumerable,Bx=(e,t,n)=>t in e?gK(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xK=(e,t)=>{for(var n in t||(t={}))wK.call(t,n)&&Bx(e,n,t[n]);if(Fx)for(var n of Fx(t))bK.call(t,n)&&Bx(e,n,t[n]);return e},CK=(e,t)=>yK(e,vK(t));function Ec(e){const t=[];return e.forEach(n=>{const[r,i]=n.split(":");t.push(`${r}:${i}`)}),t}function EK(e){const t=[];return Object.values(e).forEach(n=>{t.push(...Ec(n.accounts))}),t}function SK(e,t){const n=[];return Object.values(e).forEach(r=>{Ec(r.accounts).includes(t)&&n.push(...r.methods)}),n}function _K(e,t){const n=[];return Object.values(e).forEach(r=>{Ec(r.accounts).includes(t)&&n.push(...r.events)}),n}function wse(e,t){const n=IK(e,t);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(e))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function OT(e){return e.includes(":")}function TK(e){return OT(e)?e.split(":")[0]:e}function kT(e){var t,n,r;const i={};if(!s3(e))return i;for(const[o,s]of Object.entries(e)){const a=OT(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=TK(o);i[u]=CK(xK({},i[u]),{chains:xg(a,(t=i[u])==null?void 0:t.chains),methods:xg(l,(n=i[u])==null?void 0:n.methods),events:xg(c,(r=i[u])==null?void 0:r.events)})}return i}const $K={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},PK={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function So(e,t){const{message:n,code:r}=PK[e];return{message:t?`${n} ${t}`:n,code:r}}function ec(e,t){const{message:n,code:r}=$K[e];return{message:t?`${n} ${t}`:n,code:r}}function F1(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function s3(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function Js(e){return typeof e>"u"}function Pr(e,t){return t&&Js(e)?!0:typeof e=="string"&&!!e.trim().length}function a3(e,t){return t&&Js(e)?!0:typeof e=="number"&&!isNaN(e)}function bse(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),i=Object.keys(n);let o=!0;return Vs(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:c}=e.namespaces[s],u=Ec(a),d=n[s];(!Vs(_T(s,d),u)||!Vs(d.methods,l)||!Vs(d.events,c))&&(o=!1)}),o):!1}function cp(e){return Pr(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function AK(e){if(Pr(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const n=t[0]+":"+t[1];return!!t[2]&&cp(n)}}return!1}function xse(e){if(Pr(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function Cse(e){var t;return(t=e==null?void 0:e.proposer)==null?void 0:t.publicKey}function Ese(e){return e==null?void 0:e.topic}function Sse(e,t){let n=null;return Pr(e==null?void 0:e.publicKey,!1)||(n=So("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function Ux(e){let t=!0;return F1(e)?e.length&&(t=e.every(n=>Pr(n,!1))):t=!1,t}function DK(e,t,n){let r=null;return F1(t)&&t.length?t.forEach(i=>{r||cp(i)||(r=ec("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):cp(e)||(r=ec("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function OK(e,t,n){let r=null;return Object.entries(e).forEach(([i,o])=>{if(r)return;const s=DK(i,_T(i,o),`${t} ${n}`);s&&(r=s)}),r}function kK(e,t){let n=null;return F1(e)?e.forEach(r=>{n||AK(r)||(n=ec("UNSUPPORTED_ACCOUNTS",`${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=ec("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function RK(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=kK(r==null?void 0:r.accounts,`${t} namespace`);i&&(n=i)}),n}function NK(e,t){let n=null;return Ux(e==null?void 0:e.methods)?Ux(e==null?void 0:e.events)||(n=ec("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=ec("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}function RT(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=NK(r,`${t}, namespace`);i&&(n=i)}),n}function _se(e,t,n){let r=null;if(e&&s3(e)){const i=RT(e,t);i&&(r=i);const o=OK(e,t,n);o&&(r=o)}else r=So("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function IK(e,t){let n=null;if(e&&s3(e)){const r=RT(e,t);r&&(n=r);const i=RK(e,t);i&&(n=i)}else n=So("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function MK(e){return Pr(e.protocol,!0)}function Tse(e,t){let n=!1;return t&&!e?n=!0:e&&F1(e)&&e.length&&e.forEach(r=>{n=MK(r)}),n}function $se(e){return typeof e=="number"}function Pse(e){return typeof e<"u"&&typeof e!==null}function Ase(e){return!(!e||typeof e!="object"||!e.code||!a3(e.code,!1)||!e.message||!Pr(e.message,!1))}function Dse(e){return!(Js(e)||!Pr(e.method,!1))}function Ose(e){return!(Js(e)||Js(e.result)&&Js(e.error)||!a3(e.id,!1)||!Pr(e.jsonrpc,!1))}function kse(e){return!(Js(e)||!Pr(e.name,!1))}function Rse(e,t){return!(!cp(t)||!EK(e).includes(t))}function Nse(e,t,n){return Pr(n,!1)?SK(e,t).includes(n):!1}function Ise(e,t,n){return Pr(n,!1)?_K(e,t).includes(n):!1}function Mse(e,t,n){let r=null;const i=LK(e),o=jK(t),s=Object.keys(i),a=Object.keys(o),l=zx(Object.keys(e)),c=zx(Object.keys(t)),u=l.filter(d=>!c.includes(d));return u.length&&(r=So("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),Vs(s,a)||(r=So("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(t).forEach(d=>{if(!d.includes(":")||r)return;const f=Ec(t[d].accounts);f.includes(d)||(r=So("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${f.toString()}`))}),s.forEach(d=>{r||(Vs(i[d].methods,o[d].methods)?Vs(i[d].events,o[d].events)||(r=So("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${d}`)):r=So("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${d}`))}),r}function LK(e){const t={};return Object.keys(e).forEach(n=>{var r;n.includes(":")?t[n]=e[n]:(r=e[n].chains)==null||r.forEach(i=>{t[i]={methods:e[n].methods,events:e[n].events}})}),t}function zx(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function jK(e){const t={};return Object.keys(e).forEach(n=>{if(n.includes(":"))t[n]=e[n];else{const r=Ec(e[n].accounts);r==null||r.forEach(i=>{t[i]={accounts:e[n].accounts.filter(o=>o.includes(`${i}:`)),methods:e[n].methods,events:e[n].events}})}}),t}function Lse(e,t){return a3(e,!1)&&e<=t.max&&e>=t.min}function jse(){const e=_f();return new Promise(t=>{switch(e){case Zn.browser:t(FK());break;case Zn.reactNative:t(BK());break;case Zn.node:t(UK());break;default:t(!0)}})}function FK(){return o3()&&(navigator==null?void 0:navigator.onLine)}async function BK(){if(j1()&&typeof global<"u"&&global!=null&&global.NetInfo){const e=await(global==null?void 0:global.NetInfo.fetch());return e==null?void 0:e.isConnected}return!0}function UK(){return!0}function Fse(e){switch(_f()){case Zn.browser:zK(e);break;case Zn.reactNative:WK(e);break}}function zK(e){!j1()&&o3()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function WK(e){j1()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(t=>e(t==null?void 0:t.isConnected)))}const Cg={};class Bse{static get(t){return Cg[t]}static set(t,n){Cg[t]=n}static delete(t){delete Cg[t]}}var NT="eip155",VK="store",IT="requestedChains",nw="wallet_addEthereumChain",vt,ku,Vh,rw,l3,MT,Hh,iw,ow,LT,up,c3,Qa,cu,dp,u3,fp,d3,hp,f3,HK=class extends gb{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),On(this,Vh),On(this,l3),On(this,Hh),On(this,ow),On(this,up),On(this,Qa),On(this,dp),On(this,fp),On(this,hp),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,On(this,vt,void 0),On(this,ku,void 0),this.onAccountsChanged=t=>{t.length===0?this.emit("disconnect"):this.emit("change",{account:Ur(t[0])})},this.onChainChanged=t=>{const n=Number(t),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{Zt(this,Qa,cu).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},Zt(this,Vh,rw).call(this)}async connect({chainId:e,pairingTopic:t}={}){var n,r,i,o,s;try{let a=e;if(!a){const p=(n=this.storage)==null?void 0:n.getItem(VK),m=(o=(i=(r=p==null?void 0:p.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;m&&!this.isChainUnsupported(m)?a=m:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();Zt(this,ow,LT).call(this);const c=Zt(this,Hh,iw).call(this);if(l.session&&c&&await l.disconnect(),!l.session||c){const p=this.chains.filter(m=>m.id!==a).map(m=>m.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:t,chains:[a],optionalChains:p.length?p:void 0}),Zt(this,Qa,cu).call(this,this.chains.map(({id:m})=>m))}const u=await l.enable(),d=Ur(u[0]),f=await this.getChainId(),h=this.isChainUnsupported(f);return{account:d,chain:{id:f,unsupported:h}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new In(a):a}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{Zt(this,up,c3).call(this),Zt(this,Qa,cu).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return Ur(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return et(this,vt)||await Zt(this,Vh,rw).call(this),e&&await this.switchChain(e),et(this,vt)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return pb({account:n,chain:r,transport:cb(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),n=Zt(this,Hh,iw).call(this);if(!e)return!1;if(n&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){var n,r;const t=this.chains.find(i=>i.id===e);if(!t)throw new Vi(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=Zt(this,fp,d3).call(this),s=Zt(this,hp,f3).call(this);if(!o.includes(e)&&s.includes(nw)){await i.request({method:nw,params:[{chainId:Oe(t.id),blockExplorerUrls:[(r=(n=t.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const l=Zt(this,dp,u3).call(this);l.push(e),Zt(this,Qa,cu).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:Oe(e)}]}),t}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new In(i):new Vi(i)}}};vt=new WeakMap;ku=new WeakMap;Vh=new WeakSet;rw=async function(){return!et(this,ku)&&typeof window<"u"&&Cd(this,ku,Zt(this,l3,MT).call(this)),et(this,ku)};l3=new WeakSet;MT=async function(){const{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:n}=await Ml(()=>import("./index.es-bWMnaT-r.js"),__vite__mapDeps([2,1])),[r,...i]=this.chains.map(({id:o})=>o);if(r){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:l,relayUrl:c}=this.options;Cd(this,vt,await e.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:n,optionalEvents:t,chains:[r],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(u=>[u.id,u.rpcUrls.default.http[0]])),metadata:l,relayUrl:c}))}};Hh=new WeakSet;iw=function(){if(Zt(this,hp,f3).call(this).includes(nw)||!this.options.isNewChainsStale)return!1;const t=Zt(this,dp,u3).call(this),n=this.chains.map(({id:i})=>i),r=Zt(this,fp,d3).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>t.includes(i))};ow=new WeakSet;LT=function(){et(this,vt)&&(Zt(this,up,c3).call(this),et(this,vt).on("accountsChanged",this.onAccountsChanged),et(this,vt).on("chainChanged",this.onChainChanged),et(this,vt).on("disconnect",this.onDisconnect),et(this,vt).on("session_delete",this.onDisconnect),et(this,vt).on("display_uri",this.onDisplayUri),et(this,vt).on("connect",this.onConnect))};up=new WeakSet;c3=function(){et(this,vt)&&(et(this,vt).removeListener("accountsChanged",this.onAccountsChanged),et(this,vt).removeListener("chainChanged",this.onChainChanged),et(this,vt).removeListener("disconnect",this.onDisconnect),et(this,vt).removeListener("session_delete",this.onDisconnect),et(this,vt).removeListener("display_uri",this.onDisplayUri),et(this,vt).removeListener("connect",this.onConnect))};Qa=new WeakSet;cu=function(e){var t;(t=this.storage)==null||t.setItem(IT,e)};dp=new WeakSet;u3=function(){var e;return((e=this.storage)==null?void 0:e.getItem(IT))??[]};fp=new WeakSet;d3=function(){var r,i,o;if(!et(this,vt))return[];const e=(r=et(this,vt).session)==null?void 0:r.namespaces;return e?((o=(i=kT(e)[NT])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};hp=new WeakSet;f3=function(){var r,i;if(!et(this,vt))return[];const e=(r=et(this,vt).session)==null?void 0:r.namespaces;return e?((i=kT(e)[NT])==null?void 0:i.methods)??[]:[]};function qK(){return function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}}const GK=we.getBlockchainApiUrl();function KK({projectId:e}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const i=`${GK}/v1/?chainId=${Ie.EIP155}:${n.id}&projectId=${e}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function ZK({projectId:e,chains:t,metadata:n}){const{publicClient:r}=Wj(t,[KK({projectId:e}),qK()]);return wF({autoConnect:!0,connectors:[new HK({chains:t,options:{projectId:e,showQrModal:!1,metadata:n}}),new GV({chains:t}),new yb({chains:t,options:{shimDisconnect:!0}}),new nH({chains:t,options:{appName:(n==null?void 0:n.name)??"Unknown"}})],publicClient:r})}let uh;function QK(e){return uh||(uh=new qV({...e,_sdkVersion:`react-wagmi-${Ie.VERSION}`}),zF(uh)),uh}const Ho={chains:[Ns,Ti],routerV2Address:{[Ti.id]:"0xd99d1c33f9fc3444f8101754abc46c52416550d1",[Ns.id]:"0x10ED43C718714eb63d5aA57B78B54704E256024E"},factoryV2Address:{[Ti.id]:"0x6725F303b657a9451d8BA641348b6761A6CC7a17",[Ns.id]:"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"},swapAddress:{[Ti.id]:"0xE960DD0785Ec63DF20c6000D382C9F04FEd85FD0",[Ns.id]:"0xA740db59F5f172FF82F6EBFa9c68FcC37385BbF2"},WETH:{[Ti.id]:"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",[Ns.id]:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}},vs=()=>{const{chain:e}=WS(),[t,n]=S.useState(Ho.chains[0]);return S.useEffect(()=>{n(!e||e.unsupported?Ho.chains[0]:e)},[e]),t},YK=({coinIds:e,currency:t,backgroundColor:n="#15131D",locale:r="en"})=>(S.useEffect(()=>{(()=>{const o=document.createElement("script");return o.src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js",o.async=!0,document.body.appendChild(o),()=>{document.body.removeChild(o)}})()},[]),O.jsx("coingecko-coin-price-marquee-widget",{"coin-ids":e,currency:t,"background-color":n,locale:r}));function XK(){const e=vs(),{address:t}=d1(),{open:n}=VS(),{pathname:r}=e9(),[i,o]=S.useState(!1);return S.useEffect(()=>{o(!1)},[r]),O.jsx("div",{className:"py-4 border-b backdrop-blur-lg",children:O.jsxs("div",{className:"container flex flex-wrap items-center gap-6 lg:gap-12",children:[O.jsx("div",{className:Ht("items-center flex-1 max-lg:gap-6 gap-12 flex ",{"max-lg:flex-col max-lg:min-w-full":i,"max-lg:hidden":!i}),children:O.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 ml-auto lg:justify-start",children:[O.jsx("div",{className:"max-w-xl mr-4 overflow-hidden rounded-md",children:O.jsx(YK,{coinIds:"bitcoin,ethereum,litecoin",currency:"usd"})}),O.jsxs(Nn,{onClick:()=>n({view:"Networks"}),variant:"outline",className:"gap-2 py-5 border-input",children:[O.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:25,height:24,fill:"none",children:[O.jsx("path",{fill:"#F3BA2F",d:"M24.113 14.903c-1.603 6.429-8.115 10.34-14.545 8.738C3.141 22.038-.772 15.527.831 9.098 2.434 2.67 8.945-1.244 15.374.36c6.43 1.603 10.342 8.115 8.739 14.544Z"}),O.jsx("path",{fill:"#fff",d:"m9.53 10.79 2.944-2.942 2.945 2.945 1.712-1.713-4.657-4.657-4.656 4.656L9.53 10.79ZM4.894 12.001l1.712-1.712L8.319 12l-1.713 1.712L4.894 12ZM9.53 13.21l2.944 2.943 2.945-2.945 1.713 1.71-4.657 4.658-4.657-4.654L9.53 13.21ZM16.626 12l1.712-1.712L20.051 12l-1.713 1.714L16.626 12Z"}),O.jsx("path",{fill:"#fff",d:"m14.21 12-1.738-1.738-1.284 1.284-.149.147-.304.304 1.737 1.736L14.21 12V12Z"}),O.jsx("path",{fill:"#F3BA2F",d:"M24.113 14.903c-1.603 6.429-8.115 10.34-14.545 8.738C3.141 22.038-.772 15.527.831 9.098 2.434 2.67 8.945-1.244 15.374.36c6.43 1.603 10.342 8.115 8.739 14.544Z"}),O.jsx("path",{fill:"#fff",d:"m9.53 10.79 2.944-2.942 2.945 2.945 1.712-1.713-4.657-4.657-4.656 4.656L9.53 10.79ZM4.894 12.001l1.712-1.712L8.319 12l-1.713 1.712L4.894 12ZM9.53 13.21l2.944 2.943 2.945-2.945 1.713 1.71-4.657 4.658-4.657-4.654L9.53 13.21ZM16.626 12l1.712-1.712L20.051 12l-1.713 1.714L16.626 12Z"}),O.jsx("path",{fill:"#fff",d:"m14.21 12-1.738-1.738-1.284 1.284-.149.147-.304.304 1.737 1.736L14.21 12V12Z"})]}),e.name]})]})}),O.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[t?O.jsxs(Nn,{onClick:()=>n(),variant:"outline",className:"py-5 border-input",children:[t.slice(0,6),"...",t.slice(-4)]}):O.jsxs(Nn,{className:"gap-2 py-5 font-semibold uppercase border border-[#CDFF3A] bg-gradient-to-br from-lime-400 to-lime-700",onClick:()=>n(),children:[O.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[O.jsx("circle",{cx:13.972,cy:14,r:13.5,fill:"#fff"}),O.jsx("path",{fill:"url(#a)",d:"M21.222 12.047h-.386V9.253c0-.69-.561-1.253-1.25-1.253H8.222c-.69 0-1.25.562-1.25 1.253v1.697a.25.25 0 1 0 .5 0V9.253c0-.415.336-.752.75-.752h11.364c.413 0 .75.338.75.752v3.045c0 .138.112.25.25.25h.636a.25.25 0 0 1 .25.251v2.015a.25.25 0 0 1-.25.25h-2.807a1.258 1.258 0 0 1 0-2.516h.901a.25.25 0 0 0 0-.5h-.9a1.76 1.76 0 0 0 0 3.518h1.92v2.794a.752.752 0 0 1-.75.752H8.222a.752.752 0 0 1-.75-.752V15.81h.986l.47 1.106a.25.25 0 0 0 .23.153h1.208a1 1 0 0 0 .963.746 1.002 1.002 0 0 0 0-2.005 1 1 0 0 0-.967.758h-1.04l-.47-1.106a.25.25 0 0 0-.23-.153h-1.15v-1.253h2.892a1 1 0 0 0 .964.752 1.002 1.002 0 0 0 0-2.005 1 1 0 0 0-.964.752H7.472v-1.253h1.15c.101 0 .192-.06.23-.153l.47-1.106h1.04a1 1 0 0 0 .966.758 1.002 1.002 0 0 0 0-2.005 1 1 0 0 0-.962.746H9.158c-.1 0-.191.06-.23.152l-.47 1.107H7.222a.25.25 0 0 0-.25.25v6.308c0 .69.56 1.253 1.25 1.253h11.364c.689 0 1.25-.562 1.25-1.253v-2.794h.386c.414 0 .75-.338.75-.752v-2.015a.752.752 0 0 0-.75-.752Zm-9.894 4.266a.501.501 0 1 1-.002 1.002.501.501 0 0 1 .002-1.002Zm0-3.008a.501.501 0 1 1-.002 1.003.501.501 0 0 1 .002-1.003Zm0-3.007a.501.501 0 1 1-.002 1.002.501.501 0 0 1 .002-1.002Z"}),O.jsx("path",{fill:"url(#b)",d:"M18.101 13.806c0 .534.543.968 1.21.968.667 0 1.21-.434 1.21-.968 0-.533-.543-.967-1.21-.967-.667 0-1.21.434-1.21.967Zm1.815 0c0 .267-.272.484-.605.484-.334 0-.605-.217-.605-.484 0-.266.271-.483.605-.483.333 0 .605.216.605.483Z"}),O.jsxs("defs",{children:[O.jsxs("linearGradient",{id:"a",x1:3.78,x2:17.02,y1:-.015,y2:24.626,gradientUnits:"userSpaceOnUse",children:[O.jsx("stop",{stopColor:"#CDFF3A"}),O.jsx("stop",{offset:.765,stopColor:"#547000"})]}),O.jsxs("linearGradient",{id:"b",x1:17.586,x2:19.832,y1:11.503,y2:15.548,gradientUnits:"userSpaceOnUse",children:[O.jsx("stop",{stopColor:"#CDFF3A"}),O.jsx("stop",{offset:.765,stopColor:"#547000"})]})]})]}),"Connect Wallet"]}),O.jsx(Nn,{className:"ml-auto lg:hidden",variant:"ghost",size:"icon",onClick:()=>o(s=>!s),children:O.jsx(sN,{})})]})]})})}function JK(){return O.jsx("div",{className:"pt-4 text-center"})}var eZ=Object.defineProperty,tZ=(e,t,n)=>t in e?eZ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Eg=(e,t,n)=>(tZ(e,typeof t!="symbol"?t+"":t,n),n);let nZ=class{constructor(){Eg(this,"current",this.detect()),Eg(this,"handoffState","pending"),Eg(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},ki=new nZ,_r=(e,t)=>{ki.isServer?S.useEffect(e,t):S.useLayoutEffect(e,t)};function Ri(e){let t=S.useRef(e);return _r(()=>{t.current=e},[e]),t}let mt=function(e){let t=Ri(e);return le.useCallback((...n)=>t.current(...n),[t])};function B1(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function Ra(){let e=[],t={addEventListener(n,r,i,o){return n.addEventListener(r,i,o),t.add(()=>n.removeEventListener(r,i,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return B1(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=Ra();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function h3(){let[e]=S.useState(Ra);return S.useEffect(()=>()=>e.dispose(),[e]),e}function rZ(){let e=typeof document>"u";return"useSyncExternalStore"in ra?(t=>t.useSyncExternalStore)(ra)(()=>()=>{},()=>!1,()=>!e):!1}function Sc(){let e=rZ(),[t,n]=S.useState(ki.isHandoffComplete);return t&&ki.isHandoffComplete===!1&&n(!1),S.useEffect(()=>{t!==!0&&n(!0)},[t]),S.useEffect(()=>ki.handoff(),[]),e?!1:t}var Wx;let _c=(Wx=le.useId)!=null?Wx:function(){let e=Sc(),[t,n]=le.useState(e?()=>ki.nextId():null);return _r(()=>{t===null&&n(ki.nextId())},[t]),t!=null?""+t:void 0};function mn(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,mn),r}function jT(e){return ki.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let sw=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Is=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Is||{}),FT=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(FT||{}),iZ=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(iZ||{});function oZ(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(sw)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var BT=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(BT||{});function sZ(e,t=0){var n;return e===((n=jT(e))==null?void 0:n.body)?!1:mn(t,{0(){return e.matches(sw)},1(){let r=e;for(;r!==null;){if(r.matches(sw))return!0;r=r.parentElement}return!1}})}var aZ=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(aZ||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ea(e){e==null||e.focus({preventScroll:!0})}let lZ=["textarea","input"].join(",");function cZ(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,lZ))!=null?n:!1}function uZ(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),o=t(r);if(i===null||o===null)return 0;let s=i.compareDocumentPosition(o);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function qh(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?uZ(e):e:oZ(e);i.length>0&&s.length>1&&(s=s.filter(h=>!i.includes(h))),r=r??o.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(r))-1;if(t&4)return Math.max(0,s.indexOf(r))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},u=0,d=s.length,f;do{if(u>=d||u+d<=0)return 0;let h=l+u;if(t&16)h=(h+d)%d;else{if(h<0)return 3;if(h>=d)return 1}f=s[h],f==null||f.focus(c),u+=a}while(f!==o.activeElement);return t&6&&cZ(f)&&f.select(),2}function UT(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function dZ(){return/Android/gi.test(window.navigator.userAgent)}function fZ(){return UT()||dZ()}function dh(e,t,n){let r=Ri(t);S.useEffect(()=>{function i(o){r.current(o)}return document.addEventListener(e,i,n),()=>document.removeEventListener(e,i,n)},[e,n])}function zT(e,t,n){let r=Ri(t);S.useEffect(()=>{function i(o){r.current(o)}return window.addEventListener(e,i,n),()=>window.removeEventListener(e,i,n)},[e,n])}function hZ(e,t,n=!0){let r=S.useRef(!1);S.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function i(s,a){if(!r.current||s.defaultPrevented)return;let l=a(s);if(l===null||!l.getRootNode().contains(l)||!l.isConnected)return;let c=function u(d){return typeof d=="function"?u(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let u of c){if(u===null)continue;let d=u instanceof HTMLElement?u:u.current;if(d!=null&&d.contains(l)||s.composed&&s.composedPath().includes(d))return}return!sZ(l,BT.Loose)&&l.tabIndex!==-1&&s.preventDefault(),t(s,l)}let o=S.useRef(null);dh("pointerdown",s=>{var a,l;r.current&&(o.current=((l=(a=s.composedPath)==null?void 0:a.call(s))==null?void 0:l[0])||s.target)},!0),dh("mousedown",s=>{var a,l;r.current&&(o.current=((l=(a=s.composedPath)==null?void 0:a.call(s))==null?void 0:l[0])||s.target)},!0),dh("click",s=>{fZ()||o.current&&(i(s,()=>o.current),o.current=null)},!0),dh("touchend",s=>i(s,()=>s.target instanceof HTMLElement?s.target:null),!0),zT("blur",s=>i(s,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Tf(...e){return S.useMemo(()=>jT(...e),[...e])}let WT=Symbol();function pZ(e,t=!0){return Object.assign(e,{[WT]:t})}function Kr(...e){let t=S.useRef(e);S.useEffect(()=>{t.current=e},[e]);let n=mt(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[WT]))?void 0:n}function p3(e,t){let n=S.useRef([]),r=mt(e);S.useEffect(()=>{let i=[...n.current];for(let[o,s]of t.entries())if(n.current[o]!==s){let a=r(t,i);return n.current=t,a}},[r,...t])}function pp(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var mp=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(mp||{}),Ao=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ao||{});function Ar({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:o=!0,name:s,mergeRefs:a}){a=a??mZ;let l=VT(t,e);if(o)return fh(l,n,r,s,a);let c=i??0;if(c&2){let{static:u=!1,...d}=l;if(u)return fh(d,n,r,s,a)}if(c&1){let{unmount:u=!0,...d}=l;return mn(u?0:1,{0(){return null},1(){return fh({...d,hidden:!0,style:{display:"none"}},n,r,s,a)}})}return fh(l,n,r,s,a)}function fh(e,t={},n,r,i){let{as:o=n,children:s,refName:a="ref",...l}=Sg(e,["unmount","static"]),c=e.ref!==void 0?{[a]:e.ref}:{},u=typeof s=="function"?s(t):s;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let d={};if(t){let f=!1,h=[];for(let[p,m]of Object.entries(t))typeof m=="boolean"&&(f=!0),m===!0&&h.push(p);f&&(d["data-headlessui-state"]=h.join(" "))}if(o===S.Fragment&&Object.keys(Vx(l)).length>0){if(!S.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
  .`.concat(fX,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Kh,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Zh,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Kh," .").concat(Kh,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Zh," .").concat(Zh,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(hX,": ").concat(a,`px;
  }
`)},kX=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r,o=S.useMemo(function(){return AX(i)},[i]);return S.createElement(DX,{styles:OX(o,!t,i,n?"":"!important")})},yw=!1;if(typeof window<"u")try{var yh=Object.defineProperty({},"passive",{get:function(){return yw=!0,!0}});window.addEventListener("test",yh,yh),window.removeEventListener("test",yh,yh)}catch{yw=!1}var Wa=yw?{passive:!1}:!1,RX=function(e){return e.tagName==="TEXTAREA"},F$=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!RX(e)&&n[t]==="visible")},NX=function(e){return F$(e,"overflowY")},IX=function(e){return F$(e,"overflowX")},l8=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=B$(e,n);if(r){var i=U$(e,n),o=i[1],s=i[2];if(o>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},MX=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},LX=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},B$=function(e,t){return e==="v"?NX(t):IX(t)},U$=function(e,t){return e==="v"?MX(t):LX(t)},jX=function(e,t){return e==="h"&&t==="rtl"?-1:1},FX=function(e,t,n,r,i){var o=jX(e,window.getComputedStyle(t).direction),s=o*r,a=n.target,l=t.contains(a),c=!1,u=s>0,d=0,f=0;do{var h=U$(e,a),p=h[0],m=h[1],v=h[2],b=m-v-o*p;(p||b)&&B$(e,a)&&(d+=b,f+=p),a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(u&&(i&&d===0||!i&&s>d)||!u&&(i&&f===0||!i&&-s>f))&&(c=!0),c},vh=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},c8=function(e){return[e.deltaX,e.deltaY]},u8=function(e){return e&&"current"in e?e.current:e},BX=function(e,t){return e[0]===t[0]&&e[1]===t[1]},UX=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DIvDIza0.js","assets/events-wEk_o7Xp.js","assets/index.es-bWMnaT-r.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}