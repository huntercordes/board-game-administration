(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();var cc={exports:{}},vs={},dc={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function iE(){if(lm)return ie;lm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,O={};function A(S,M,re){this.props=S,this.context=M,this.refs=O,this.updater=re||R}A.prototype.isReactComponent={},A.prototype.setState=function(S,M){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,M,"setState")},A.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function L(){}L.prototype=A.prototype;function z(S,M,re){this.props=S,this.context=M,this.refs=O,this.updater=re||R}var W=z.prototype=new L;W.constructor=z,k(W,A.prototype),W.isPureReactComponent=!0;var ne=Array.isArray,ue=Object.prototype.hasOwnProperty,_e={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function Oe(S,M,re){var le,de={},he=null,Ee=null;if(M!=null)for(le in M.ref!==void 0&&(Ee=M.ref),M.key!==void 0&&(he=""+M.key),M)ue.call(M,le)&&!Z.hasOwnProperty(le)&&(de[le]=M[le]);var me=arguments.length-2;if(me===1)de.children=re;else if(1<me){for(var Re=Array(me),yt=0;yt<me;yt++)Re[yt]=arguments[yt+2];de.children=Re}if(S&&S.defaultProps)for(le in me=S.defaultProps,me)de[le]===void 0&&(de[le]=me[le]);return{$$typeof:r,type:S,key:he,ref:Ee,props:de,_owner:_e.current}}function we(S,M){return{$$typeof:r,type:S.type,key:M,ref:S.ref,props:S.props,_owner:S._owner}}function je(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Kt(S){var M={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(re){return M[re]})}var qt=/\/+/g;function vt(S,M){return typeof S=="object"&&S!==null&&S.key!=null?Kt(""+S.key):M.toString(36)}function Ot(S,M,re,le,de){var he=typeof S;(he==="undefined"||he==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(he){case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=S,de=de(Ee),S=le===""?"."+vt(Ee,0):le,ne(de)?(re="",S!=null&&(re=S.replace(qt,"$&/")+"/"),Ot(de,M,re,"",function(yt){return yt})):de!=null&&(je(de)&&(de=we(de,re+(!de.key||Ee&&Ee.key===de.key?"":(""+de.key).replace(qt,"$&/")+"/")+S)),M.push(de)),1;if(Ee=0,le=le===""?".":le+":",ne(S))for(var me=0;me<S.length;me++){he=S[me];var Re=le+vt(he,me);Ee+=Ot(he,M,re,Re,de)}else if(Re=w(S),typeof Re=="function")for(S=Re.call(S),me=0;!(he=S.next()).done;)he=he.value,Re=le+vt(he,me++),Ee+=Ot(he,M,re,Re,de);else if(he==="object")throw M=String(S),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Qt(S,M,re){if(S==null)return S;var le=[],de=0;return Ot(S,le,"","",function(he){return M.call(re,he,de++)}),le}function ut(S){if(S._status===-1){var M=S._result;M=M(),M.then(function(re){(S._status===0||S._status===-1)&&(S._status=1,S._result=re)},function(re){(S._status===0||S._status===-1)&&(S._status=2,S._result=re)}),S._status===-1&&(S._status=0,S._result=M)}if(S._status===1)return S._result.default;throw S._result}var Le={current:null},B={transition:null},J={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:B,ReactCurrentOwner:_e};function $(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Qt,forEach:function(S,M,re){Qt(S,function(){M.apply(this,arguments)},re)},count:function(S){var M=0;return Qt(S,function(){M++}),M},toArray:function(S){return Qt(S,function(M){return M})||[]},only:function(S){if(!je(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ie.Component=A,ie.Fragment=n,ie.Profiler=l,ie.PureComponent=z,ie.StrictMode=s,ie.Suspense=p,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ie.act=$,ie.cloneElement=function(S,M,re){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var le=k({},S.props),de=S.key,he=S.ref,Ee=S._owner;if(M!=null){if(M.ref!==void 0&&(he=M.ref,Ee=_e.current),M.key!==void 0&&(de=""+M.key),S.type&&S.type.defaultProps)var me=S.type.defaultProps;for(Re in M)ue.call(M,Re)&&!Z.hasOwnProperty(Re)&&(le[Re]=M[Re]===void 0&&me!==void 0?me[Re]:M[Re])}var Re=arguments.length-2;if(Re===1)le.children=re;else if(1<Re){me=Array(Re);for(var yt=0;yt<Re;yt++)me[yt]=arguments[yt+2];le.children=me}return{$$typeof:r,type:S.type,key:de,ref:he,props:le,_owner:Ee}},ie.createContext=function(S){return S={$$typeof:c,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:a,_context:S},S.Consumer=S},ie.createElement=Oe,ie.createFactory=function(S){var M=Oe.bind(null,S);return M.type=S,M},ie.createRef=function(){return{current:null}},ie.forwardRef=function(S){return{$$typeof:f,render:S}},ie.isValidElement=je,ie.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:ut}},ie.memo=function(S,M){return{$$typeof:m,type:S,compare:M===void 0?null:M}},ie.startTransition=function(S){var M=B.transition;B.transition={};try{S()}finally{B.transition=M}},ie.unstable_act=$,ie.useCallback=function(S,M){return Le.current.useCallback(S,M)},ie.useContext=function(S){return Le.current.useContext(S)},ie.useDebugValue=function(){},ie.useDeferredValue=function(S){return Le.current.useDeferredValue(S)},ie.useEffect=function(S,M){return Le.current.useEffect(S,M)},ie.useId=function(){return Le.current.useId()},ie.useImperativeHandle=function(S,M,re){return Le.current.useImperativeHandle(S,M,re)},ie.useInsertionEffect=function(S,M){return Le.current.useInsertionEffect(S,M)},ie.useLayoutEffect=function(S,M){return Le.current.useLayoutEffect(S,M)},ie.useMemo=function(S,M){return Le.current.useMemo(S,M)},ie.useReducer=function(S,M,re){return Le.current.useReducer(S,M,re)},ie.useRef=function(S){return Le.current.useRef(S)},ie.useState=function(S){return Le.current.useState(S)},ie.useSyncExternalStore=function(S,M,re){return Le.current.useSyncExternalStore(S,M,re)},ie.useTransition=function(){return Le.current.useTransition()},ie.version="18.3.1",ie}var am;function id(){return am||(am=1,dc.exports=iE()),dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function sE(){if(um)return vs;um=1;var r=id(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,m){var _,v={},w=null,R=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(R=p.ref);for(_ in p)s.call(p,_)&&!a.hasOwnProperty(_)&&(v[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:f,key:w,ref:R,props:v,_owner:l.current}}return vs.Fragment=n,vs.jsx=c,vs.jsxs=c,vs}var cm;function oE(){return cm||(cm=1,cc.exports=sE()),cc.exports}var x=oE(),P=id(),gl={},hc={exports:{}},mt={},fc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function lE(){return dm||(dm=1,function(r){function e(B,J){var $=B.length;B.push(J);e:for(;0<$;){var S=$-1>>>1,M=B[S];if(0<l(M,J))B[S]=J,B[$]=M,$=S;else break e}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var J=B[0],$=B.pop();if($!==J){B[0]=$;e:for(var S=0,M=B.length,re=M>>>1;S<re;){var le=2*(S+1)-1,de=B[le],he=le+1,Ee=B[he];if(0>l(de,$))he<M&&0>l(Ee,de)?(B[S]=Ee,B[he]=$,S=he):(B[S]=de,B[le]=$,S=le);else if(he<M&&0>l(Ee,$))B[S]=Ee,B[he]=$,S=he;else break e}}return J}function l(B,J){var $=B.sortIndex-J.sortIndex;return $!==0?$:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],m=[],_=1,v=null,w=3,R=!1,k=!1,O=!1,A=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(B){for(var J=n(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=B)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(m)}}function ne(B){if(O=!1,W(B),!k)if(n(p)!==null)k=!0,ut(ue);else{var J=n(m);J!==null&&Le(ne,J.startTime-B)}}function ue(B,J){k=!1,O&&(O=!1,L(Oe),Oe=-1),R=!0;var $=w;try{for(W(J),v=n(p);v!==null&&(!(v.expirationTime>J)||B&&!Kt());){var S=v.callback;if(typeof S=="function"){v.callback=null,w=v.priorityLevel;var M=S(v.expirationTime<=J);J=r.unstable_now(),typeof M=="function"?v.callback=M:v===n(p)&&s(p),W(J)}else s(p);v=n(p)}if(v!==null)var re=!0;else{var le=n(m);le!==null&&Le(ne,le.startTime-J),re=!1}return re}finally{v=null,w=$,R=!1}}var _e=!1,Z=null,Oe=-1,we=5,je=-1;function Kt(){return!(r.unstable_now()-je<we)}function qt(){if(Z!==null){var B=r.unstable_now();je=B;var J=!0;try{J=Z(!0,B)}finally{J?vt():(_e=!1,Z=null)}}else _e=!1}var vt;if(typeof z=="function")vt=function(){z(qt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Qt=Ot.port2;Ot.port1.onmessage=qt,vt=function(){Qt.postMessage(null)}}else vt=function(){A(qt,0)};function ut(B){Z=B,_e||(_e=!0,vt())}function Le(B,J){Oe=A(function(){B(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){k||R||(k=!0,ut(ue))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(B){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var $=w;w=J;try{return B()}finally{w=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=w;w=B;try{return J()}finally{w=$}},r.unstable_scheduleCallback=function(B,J,$){var S=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?S+$:S):$=S,B){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=$+M,B={id:_++,callback:J,priorityLevel:B,startTime:$,expirationTime:M,sortIndex:-1},$>S?(B.sortIndex=$,e(m,B),n(p)===null&&B===n(m)&&(O?(L(Oe),Oe=-1):O=!0,Le(ne,$-S))):(B.sortIndex=M,e(p,B),k||R||(k=!0,ut(ue))),B},r.unstable_shouldYield=Kt,r.unstable_wrapCallback=function(B){var J=w;return function(){var $=w;w=J;try{return B.apply(this,arguments)}finally{w=$}}}}(pc)),pc}var hm;function aE(){return hm||(hm=1,fc.exports=lE()),fc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function uE(){if(fm)return mt;fm=1;var r=id(),e=aE();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function a(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function w(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function R(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k(t,i,o,u){if(i===null||typeof i>"u"||R(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(t,i,o,u,d,h,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){A[t]=new O(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];A[i]=new O(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){A[t]=new O(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){A[t]=new O(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){A[t]=new O(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){A[t]=new O(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){A[t]=new O(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){A[t]=new O(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){A[t]=new O(t,5,!1,t.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(L,z);A[i]=new O(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(L,z);A[i]=new O(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(L,z);A[i]=new O(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){A[t]=new O(t,1,!1,t.toLowerCase(),null,!1,!1)}),A.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){A[t]=new O(t,1,!1,t.toLowerCase(),null,!0,!0)});function W(t,i,o,u){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(k(i,o,d,u)&&(o=null),u||d===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var ne=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),_e=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),qt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Ot=Symbol.for("react.suspense_list"),Qt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),B=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,S;function M(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var re=!1;function le(t,i){if(!t||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var u=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){u=N}t.call(i.prototype)}else{try{throw Error()}catch(N){u=N}t()}}catch(N){if(N&&u&&typeof N.stack=="string"){for(var d=N.stack.split(`
`),h=u.stack.split(`
`),g=d.length-1,y=h.length-1;1<=g&&0<=y&&d[g]!==h[y];)y--;for(;1<=g&&0<=y;g--,y--)if(d[g]!==h[y]){if(g!==1||y!==1)do if(g--,y--,0>y||d[g]!==h[y]){var E=`
`+d[g].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=g&&0<=y);break}}}finally{re=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?M(t):""}function de(t){switch(t.tag){case 5:return M(t.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return t=le(t.type,!1),t;case 11:return t=le(t.type.render,!1),t;case 1:return t=le(t.type,!0),t;default:return""}}function he(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case _e:return"Portal";case we:return"Profiler";case Oe:return"StrictMode";case vt:return"Suspense";case Ot:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kt:return(t.displayName||"Context")+".Consumer";case je:return(t._context.displayName||"Context")+".Provider";case qt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qt:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case ut:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,h.call(this,g)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function so(t){t._valueTracker||(t._valueTracker=yt(t))}function hh(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Re(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function oo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _a(t,i){var o=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function fh(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=me(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ph(t,i){i=i.checked,i!=null&&W(t,"checked",i,!1)}function va(t,i){ph(t,i);var o=me(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ya(t,i.type,o):i.hasOwnProperty("defaultValue")&&ya(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function mh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ya(t,i,o){(i!=="number"||oo(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Li=Array.isArray;function Mr(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+me(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function wa(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Li(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:me(o)}}function _h(t,i){var o=me(i.value),u=me(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function vh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function yh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?yh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,wh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Di(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ay=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){ay.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Mi[i]=Mi[t]})});function Eh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+i).trim():i+"px"}function Ch(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Eh(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var uy=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(t,i){if(i){if(uy[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Sa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function ka(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ta=null,br=null,Fr=null;function Sh(t){if(t=rs(t)){if(typeof Ta!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ao(i),Ta(t.stateNode,t.type,i))}}function Ih(t){br?Fr?Fr.push(t):Fr=[t]:br=t}function kh(){if(br){var t=br,i=Fr;if(Fr=br=null,Sh(t),i)for(t=0;t<i.length;t++)Sh(i[t])}}function Th(t,i){return t(i)}function Rh(){}var Ra=!1;function Nh(t,i,o){if(Ra)return t(i,o);Ra=!0;try{return Th(t,i,o)}finally{Ra=!1,(br!==null||Fr!==null)&&(Rh(),kh())}}function bi(t,i){var o=t.stateNode;if(o===null)return null;var u=Ao(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Na=!1;if(f)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Na=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Na=!1}function cy(t,i,o,u,d,h,g,y,E){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(b){this.onError(b)}}var Ui=!1,ao=null,uo=!1,Pa=null,dy={onError:function(t){Ui=!0,ao=t}};function hy(t,i,o,u,d,h,g,y,E){Ui=!1,ao=null,cy.apply(dy,arguments)}function fy(t,i,o,u,d,h,g,y,E){if(hy.apply(this,arguments),Ui){if(Ui){var N=ao;Ui=!1,ao=null}else throw Error(n(198));uo||(uo=!0,Pa=N)}}function ar(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ph(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function xh(t){if(ar(t)!==t)throw Error(n(188))}function py(t){var i=t.alternate;if(!i){if(i=ar(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return xh(d),t;if(h===u)return xh(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=h;else{for(var g=!1,y=d.child;y;){if(y===o){g=!0,o=d,u=h;break}if(y===u){g=!0,u=d,o=h;break}y=y.sibling}if(!g){for(y=h.child;y;){if(y===o){g=!0,o=h,u=d;break}if(y===u){g=!0,u=h,o=d;break}y=y.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Ah(t){return t=py(t),t!==null?Oh(t):null}function Oh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Oh(t);if(i!==null)return i;t=t.sibling}return null}var Lh=e.unstable_scheduleCallback,Dh=e.unstable_cancelCallback,my=e.unstable_shouldYield,gy=e.unstable_requestPaint,Fe=e.unstable_now,_y=e.unstable_getCurrentPriorityLevel,xa=e.unstable_ImmediatePriority,Mh=e.unstable_UserBlockingPriority,co=e.unstable_NormalPriority,vy=e.unstable_LowPriority,bh=e.unstable_IdlePriority,ho=null,Yt=null;function yy(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(ho,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Cy,wy=Math.log,Ey=Math.LN2;function Cy(t){return t>>>=0,t===0?32:31-(wy(t)/Ey|0)|0}var fo=64,po=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mo(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var y=g&~d;y!==0?u=ji(y):(h&=g,h!==0&&(u=ji(h)))}else g=o&~d,g!==0?u=ji(g):h!==0&&(u=ji(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Lt(i),d=1<<o,u|=t[o],i&=~d;return u}function Sy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iy(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-Lt(h),y=1<<g,E=d[g];E===-1?((y&o)===0||(y&u)!==0)&&(d[g]=Sy(y,i)):E<=i&&(t.expiredLanes|=y),h&=~y}}function Aa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fh(){var t=fo;return fo<<=1,(fo&4194240)===0&&(fo=64),t}function Oa(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function zi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Lt(i),t[i]=o}function ky(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Lt(o),h=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~h}}function La(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Lt(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var ge=0;function Uh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jh,Da,zh,Wh,Bh,Ma=!1,go=[],Rn=null,Nn=null,Pn=null,Wi=new Map,Bi=new Map,xn=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,i){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Wi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(i.pointerId)}}function Vi(t,i,o,u,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=rs(i),i!==null&&Da(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Ry(t,i,o,u,d){switch(i){case"focusin":return Rn=Vi(Rn,t,i,o,u,d),!0;case"dragenter":return Nn=Vi(Nn,t,i,o,u,d),!0;case"mouseover":return Pn=Vi(Pn,t,i,o,u,d),!0;case"pointerover":var h=d.pointerId;return Wi.set(h,Vi(Wi.get(h)||null,t,i,o,u,d)),!0;case"gotpointercapture":return h=d.pointerId,Bi.set(h,Vi(Bi.get(h)||null,t,i,o,u,d)),!0}return!1}function Hh(t){var i=ur(t.target);if(i!==null){var o=ar(i);if(o!==null){if(i=o.tag,i===13){if(i=Ph(o),i!==null){t.blockedOn=i,Bh(t.priority,function(){zh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _o(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Fa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Ia=u,o.target.dispatchEvent(u),Ia=null}else return i=rs(o),i!==null&&Da(i),t.blockedOn=o,!1;i.shift()}return!0}function $h(t,i,o){_o(t)&&o.delete(i)}function Ny(){Ma=!1,Rn!==null&&_o(Rn)&&(Rn=null),Nn!==null&&_o(Nn)&&(Nn=null),Pn!==null&&_o(Pn)&&(Pn=null),Wi.forEach($h),Bi.forEach($h)}function Hi(t,i){t.blockedOn===i&&(t.blockedOn=null,Ma||(Ma=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ny)))}function $i(t){function i(d){return Hi(d,t)}if(0<go.length){Hi(go[0],t);for(var o=1;o<go.length;o++){var u=go[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Rn!==null&&Hi(Rn,t),Nn!==null&&Hi(Nn,t),Pn!==null&&Hi(Pn,t),Wi.forEach(i),Bi.forEach(i),o=0;o<xn.length;o++)u=xn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<xn.length&&(o=xn[0],o.blockedOn===null);)Hh(o),o.blockedOn===null&&xn.shift()}var Ur=ne.ReactCurrentBatchConfig,vo=!0;function Py(t,i,o,u){var d=ge,h=Ur.transition;Ur.transition=null;try{ge=1,ba(t,i,o,u)}finally{ge=d,Ur.transition=h}}function xy(t,i,o,u){var d=ge,h=Ur.transition;Ur.transition=null;try{ge=4,ba(t,i,o,u)}finally{ge=d,Ur.transition=h}}function ba(t,i,o,u){if(vo){var d=Fa(t,i,o,u);if(d===null)eu(t,i,u,yo,o),Vh(t,u);else if(Ry(d,t,i,o,u))u.stopPropagation();else if(Vh(t,u),i&4&&-1<Ty.indexOf(t)){for(;d!==null;){var h=rs(d);if(h!==null&&jh(h),h=Fa(t,i,o,u),h===null&&eu(t,i,u,yo,o),h===d)break;d=h}d!==null&&u.stopPropagation()}else eu(t,i,u,null,o)}}var yo=null;function Fa(t,i,o,u){if(yo=null,t=ka(u),t=ur(t),t!==null)if(i=ar(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ph(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return yo=t,null}function Gh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_y()){case xa:return 1;case Mh:return 4;case co:case vy:return 16;case bh:return 536870912;default:return 16}default:return 16}}var An=null,Ua=null,wo=null;function Kh(){if(wo)return wo;var t,i=Ua,o=i.length,u,d="value"in An?An.value:An.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var g=o-t;for(u=1;u<=g&&i[o-u]===d[h-u];u++);return wo=d.slice(t,1<u?1-u:void 0)}function Eo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Co(){return!0}function qh(){return!1}function wt(t){function i(o,u,d,h,g){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Co:qh,this.isPropagationStopped=qh,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),i}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=wt(jr),Gi=$({},jr,{view:0,detail:0}),Ay=wt(Gi),za,Wa,Ki,So=$({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Va,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ki&&(Ki&&t.type==="mousemove"?(za=t.screenX-Ki.screenX,Wa=t.screenY-Ki.screenY):Wa=za=0,Ki=t),za)},movementY:function(t){return"movementY"in t?t.movementY:Wa}}),Qh=wt(So),Oy=$({},So,{dataTransfer:0}),Ly=wt(Oy),Dy=$({},Gi,{relatedTarget:0}),Ba=wt(Dy),My=$({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),by=wt(My),Fy=$({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uy=wt(Fy),jy=$({},jr,{data:0}),Yh=wt(jy),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=By[t])?!!i[t]:!1}function Va(){return Vy}var Hy=$({},Gi,{key:function(t){if(t.key){var i=zy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Va,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$y=wt(Hy),Gy=$({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=wt(Gy),Ky=$({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Va}),qy=wt(Ky),Qy=$({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=wt(Qy),Jy=$({},So,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=wt(Jy),Zy=[9,13,27,32],Ha=f&&"CompositionEvent"in window,qi=null;f&&"documentMode"in document&&(qi=document.documentMode);var ew=f&&"TextEvent"in window&&!qi,Xh=f&&(!Ha||qi&&8<qi&&11>=qi),Zh=" ",ef=!1;function tf(t,i){switch(t){case"keyup":return Zy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function tw(t,i){switch(t){case"compositionend":return nf(i);case"keypress":return i.which!==32?null:(ef=!0,Zh);case"textInput":return t=i.data,t===Zh&&ef?null:t;default:return null}}function nw(t,i){if(zr)return t==="compositionend"||!Ha&&tf(t,i)?(t=Kh(),wo=Ua=An=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xh&&i.locale!=="ko"?null:i.data;default:return null}}var rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!rw[t.type]:i==="textarea"}function sf(t,i,o,u){Ih(u),i=No(i,"onChange"),0<i.length&&(o=new ja("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Qi=null,Yi=null;function iw(t){Sf(t,0)}function Io(t){var i=$r(t);if(hh(i))return t}function sw(t,i){if(t==="change")return i}var of=!1;if(f){var $a;if(f){var Ga="oninput"in document;if(!Ga){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),Ga=typeof lf.oninput=="function"}$a=Ga}else $a=!1;of=$a&&(!document.documentMode||9<document.documentMode)}function af(){Qi&&(Qi.detachEvent("onpropertychange",uf),Yi=Qi=null)}function uf(t){if(t.propertyName==="value"&&Io(Yi)){var i=[];sf(i,Yi,t,ka(t)),Nh(iw,i)}}function ow(t,i,o){t==="focusin"?(af(),Qi=i,Yi=o,Qi.attachEvent("onpropertychange",uf)):t==="focusout"&&af()}function lw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Io(Yi)}function aw(t,i){if(t==="click")return Io(i)}function uw(t,i){if(t==="input"||t==="change")return Io(i)}function cw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Dt=typeof Object.is=="function"?Object.is:cw;function Ji(t,i){if(Dt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!Dt(t[d],i[d]))return!1}return!0}function cf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function df(t,i){var o=cf(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=cf(o)}}function hf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?hf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ff(){for(var t=window,i=oo();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=oo(t.document)}return i}function Ka(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function dw(t){var i=ff(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&hf(o.ownerDocument.documentElement,o)){if(u!==null&&Ka(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!t.extend&&h>u&&(d=u,u=h,h=d),d=df(o,h);var g=df(o,u);d&&g&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hw=f&&"documentMode"in document&&11>=document.documentMode,Wr=null,qa=null,Xi=null,Qa=!1;function pf(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Qa||Wr==null||Wr!==oo(u)||(u=Wr,"selectionStart"in u&&Ka(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xi&&Ji(Xi,u)||(Xi=u,u=No(qa,"onSelect"),0<u.length&&(i=new ja("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=Wr)))}function ko(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Br={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Ya={},mf={};f&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function To(t){if(Ya[t])return Ya[t];if(!Br[t])return t;var i=Br[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in mf)return Ya[t]=i[o];return t}var gf=To("animationend"),_f=To("animationiteration"),vf=To("animationstart"),yf=To("transitionend"),wf=new Map,Ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,i){wf.set(t,i),a(i,[t])}for(var Ja=0;Ja<Ef.length;Ja++){var Xa=Ef[Ja],fw=Xa.toLowerCase(),pw=Xa[0].toUpperCase()+Xa.slice(1);On(fw,"on"+pw)}On(gf,"onAnimationEnd"),On(_f,"onAnimationIteration"),On(vf,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(yf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function Cf(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,fy(u,i,void 0,t),t.currentTarget=null}function Sf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var g=u.length-1;0<=g;g--){var y=u[g],E=y.instance,N=y.currentTarget;if(y=y.listener,E!==h&&d.isPropagationStopped())break e;Cf(d,y,N),h=E}else for(g=0;g<u.length;g++){if(y=u[g],E=y.instance,N=y.currentTarget,y=y.listener,E!==h&&d.isPropagationStopped())break e;Cf(d,y,N),h=E}}}if(uo)throw t=Pa,uo=!1,Pa=null,t}function ke(t,i){var o=i[ou];o===void 0&&(o=i[ou]=new Set);var u=t+"__bubble";o.has(u)||(If(i,t,2,!1),o.add(u))}function Za(t,i,o){var u=0;i&&(u|=4),If(o,t,u,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[Ro]){t[Ro]=!0,s.forEach(function(o){o!=="selectionchange"&&(mw.has(o)||Za(o,!1,t),Za(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Za("selectionchange",!1,i))}}function If(t,i,o,u){switch(Gh(i)){case 1:var d=Py;break;case 4:d=xy;break;default:d=ba}o=d.bind(null,i,o,t),d=void 0,!Na||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function eu(t,i,o,u,d){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var y=u.stateNode.containerInfo;if(y===d||y.nodeType===8&&y.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;y!==null;){if(g=ur(y),g===null)return;if(E=g.tag,E===5||E===6){u=h=g;continue e}y=y.parentNode}}u=u.return}Nh(function(){var N=h,b=ka(o),F=[];e:{var D=wf.get(t);if(D!==void 0){var V=ja,G=t;switch(t){case"keypress":if(Eo(o)===0)break e;case"keydown":case"keyup":V=$y;break;case"focusin":G="focus",V=Ba;break;case"focusout":G="blur",V=Ba;break;case"beforeblur":case"afterblur":V=Ba;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=qy;break;case gf:case _f:case vf:V=by;break;case yf:V=Yy;break;case"scroll":V=Ay;break;case"wheel":V=Xy;break;case"copy":case"cut":case"paste":V=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Jh}var K=(i&4)!==0,Ue=!K&&t==="scroll",I=K?D!==null?D+"Capture":null:D;K=[];for(var C=N,T;C!==null;){T=C;var U=T.stateNode;if(T.tag===5&&U!==null&&(T=U,I!==null&&(U=bi(C,I),U!=null&&K.push(ts(C,U,T)))),Ue)break;C=C.return}0<K.length&&(D=new V(D,G,null,o,b),F.push({event:D,listeners:K}))}}if((i&7)===0){e:{if(D=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",D&&o!==Ia&&(G=o.relatedTarget||o.fromElement)&&(ur(G)||G[on]))break e;if((V||D)&&(D=b.window===b?b:(D=b.ownerDocument)?D.defaultView||D.parentWindow:window,V?(G=o.relatedTarget||o.toElement,V=N,G=G?ur(G):null,G!==null&&(Ue=ar(G),G!==Ue||G.tag!==5&&G.tag!==6)&&(G=null)):(V=null,G=N),V!==G)){if(K=Qh,U="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(K=Jh,U="onPointerLeave",I="onPointerEnter",C="pointer"),Ue=V==null?D:$r(V),T=G==null?D:$r(G),D=new K(U,C+"leave",V,o,b),D.target=Ue,D.relatedTarget=T,U=null,ur(b)===N&&(K=new K(I,C+"enter",G,o,b),K.target=T,K.relatedTarget=Ue,U=K),Ue=U,V&&G)t:{for(K=V,I=G,C=0,T=K;T;T=Vr(T))C++;for(T=0,U=I;U;U=Vr(U))T++;for(;0<C-T;)K=Vr(K),C--;for(;0<T-C;)I=Vr(I),T--;for(;C--;){if(K===I||I!==null&&K===I.alternate)break t;K=Vr(K),I=Vr(I)}K=null}else K=null;V!==null&&kf(F,D,V,K,!1),G!==null&&Ue!==null&&kf(F,Ue,G,K,!0)}}e:{if(D=N?$r(N):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var q=sw;else if(rf(D))if(of)q=uw;else{q=lw;var Q=ow}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(q=aw);if(q&&(q=q(t,N))){sf(F,q,o,b);break e}Q&&Q(t,D,N),t==="focusout"&&(Q=D._wrapperState)&&Q.controlled&&D.type==="number"&&ya(D,"number",D.value)}switch(Q=N?$r(N):window,t){case"focusin":(rf(Q)||Q.contentEditable==="true")&&(Wr=Q,qa=N,Xi=null);break;case"focusout":Xi=qa=Wr=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,pf(F,o,b);break;case"selectionchange":if(hw)break;case"keydown":case"keyup":pf(F,o,b)}var Y;if(Ha)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else zr?tf(t,o)&&(te="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(te="onCompositionStart");te&&(Xh&&o.locale!=="ko"&&(zr||te!=="onCompositionStart"?te==="onCompositionEnd"&&zr&&(Y=Kh()):(An=b,Ua="value"in An?An.value:An.textContent,zr=!0)),Q=No(N,te),0<Q.length&&(te=new Yh(te,t,null,o,b),F.push({event:te,listeners:Q}),Y?te.data=Y:(Y=nf(o),Y!==null&&(te.data=Y)))),(Y=ew?tw(t,o):nw(t,o))&&(N=No(N,"onBeforeInput"),0<N.length&&(b=new Yh("onBeforeInput","beforeinput",null,o,b),F.push({event:b,listeners:N}),b.data=Y))}Sf(F,i)})}function ts(t,i,o){return{instance:t,listener:i,currentTarget:o}}function No(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=bi(t,o),h!=null&&u.unshift(ts(t,h,d)),h=bi(t,i),h!=null&&u.push(ts(t,h,d))),t=t.return}return u}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kf(t,i,o,u,d){for(var h=i._reactName,g=[];o!==null&&o!==u;){var y=o,E=y.alternate,N=y.stateNode;if(E!==null&&E===u)break;y.tag===5&&N!==null&&(y=N,d?(E=bi(o,h),E!=null&&g.unshift(ts(o,E,y))):d||(E=bi(o,h),E!=null&&g.push(ts(o,E,y)))),o=o.return}g.length!==0&&t.push({event:i,listeners:g})}var gw=/\r\n?/g,_w=/\u0000|\uFFFD/g;function Tf(t){return(typeof t=="string"?t:""+t).replace(gw,`
`).replace(_w,"")}function Po(t,i,o){if(i=Tf(i),Tf(t)!==i&&o)throw Error(n(425))}function xo(){}var tu=null,nu=null;function ru(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,yw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(t){return Rf.resolve(null).then(t).catch(ww)}:iu;function ww(t){setTimeout(function(){throw t})}function su(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),$i(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);$i(i)}function Ln(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Nf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Hr,ns="__reactProps$"+Hr,on="__reactContainer$"+Hr,ou="__reactEvents$"+Hr,Ew="__reactListeners$"+Hr,Cw="__reactHandles$"+Hr;function ur(t){var i=t[Jt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[on]||o[Jt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Nf(t);t!==null;){if(o=t[Jt])return o;t=Nf(t)}return i}t=o,o=t.parentNode}return null}function rs(t){return t=t[Jt]||t[on],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ao(t){return t[ns]||null}var lu=[],Gr=-1;function Dn(t){return{current:t}}function Te(t){0>Gr||(t.current=lu[Gr],lu[Gr]=null,Gr--)}function Ce(t,i){Gr++,lu[Gr]=t.current,t.current=i}var Mn={},et=Dn(Mn),ct=Dn(!1),cr=Mn;function Kr(t,i){var o=t.type.contextTypes;if(!o)return Mn;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function dt(t){return t=t.childContextTypes,t!=null}function Oo(){Te(ct),Te(et)}function Pf(t,i,o){if(et.current!==Mn)throw Error(n(168));Ce(et,i),Ce(ct,o)}function xf(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return $({},o,u)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mn,cr=et.current,Ce(et,t),Ce(ct,ct.current),!0}function Af(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=xf(t,i,cr),u.__reactInternalMemoizedMergedChildContext=t,Te(ct),Te(et),Ce(et,t)):Te(ct),Ce(ct,o)}var ln=null,Do=!1,au=!1;function Of(t){ln===null?ln=[t]:ln.push(t)}function Sw(t){Do=!0,Of(t)}function bn(){if(!au&&ln!==null){au=!0;var t=0,i=ge;try{var o=ln;for(ge=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ln=null,Do=!1}catch(d){throw ln!==null&&(ln=ln.slice(t+1)),Lh(xa,bn),d}finally{ge=i,au=!1}}return null}var qr=[],Qr=0,Mo=null,bo=0,It=[],kt=0,dr=null,an=1,un="";function hr(t,i){qr[Qr++]=bo,qr[Qr++]=Mo,Mo=t,bo=i}function Lf(t,i,o){It[kt++]=an,It[kt++]=un,It[kt++]=dr,dr=t;var u=an;t=un;var d=32-Lt(u)-1;u&=~(1<<d),o+=1;var h=32-Lt(i)+d;if(30<h){var g=d-d%5;h=(u&(1<<g)-1).toString(32),u>>=g,d-=g,an=1<<32-Lt(i)+d|o<<d|u,un=h+t}else an=1<<h|o<<d|u,un=t}function uu(t){t.return!==null&&(hr(t,1),Lf(t,1,0))}function cu(t){for(;t===Mo;)Mo=qr[--Qr],qr[Qr]=null,bo=qr[--Qr],qr[Qr]=null;for(;t===dr;)dr=It[--kt],It[kt]=null,un=It[--kt],It[kt]=null,an=It[--kt],It[kt]=null}var Et=null,Ct=null,Ne=!1,Mt=null;function Df(t,i){var o=Pt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Mf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,Ct=Ln(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,Ct=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=dr!==null?{id:an,overflow:un}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Pt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,Ct=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(Ne){var i=Ct;if(i){var o=i;if(!Mf(t,i)){if(du(t))throw Error(n(418));i=Ln(o.nextSibling);var u=Et;i&&Mf(t,i)?Df(u,o):(t.flags=t.flags&-4097|2,Ne=!1,Et=t)}}else{if(du(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,Et=t}}}function bf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Fo(t){if(t!==Et)return!1;if(!Ne)return bf(t),Ne=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ru(t.type,t.memoizedProps)),i&&(i=Ct)){if(du(t))throw Ff(),Error(n(418));for(;i;)Df(t,i),i=Ln(i.nextSibling)}if(bf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Ct=Ln(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Ct=null}}else Ct=Et?Ln(t.stateNode.nextSibling):null;return!0}function Ff(){for(var t=Ct;t;)t=Ln(t.nextSibling)}function Yr(){Ct=Et=null,Ne=!1}function fu(t){Mt===null?Mt=[t]:Mt.push(t)}var Iw=ne.ReactCurrentBatchConfig;function is(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(g){var y=d.refs;g===null?delete y[h]:y[h]=g},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Uo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Uf(t){var i=t._init;return i(t._payload)}function jf(t){function i(I,C){if(t){var T=I.deletions;T===null?(I.deletions=[C],I.flags|=16):T.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)i(I,C),C=C.sibling;return null}function u(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function d(I,C){return I=Hn(I,C),I.index=0,I.sibling=null,I}function h(I,C,T){return I.index=T,t?(T=I.alternate,T!==null?(T=T.index,T<C?(I.flags|=2,C):T):(I.flags|=2,C)):(I.flags|=1048576,C)}function g(I){return t&&I.alternate===null&&(I.flags|=2),I}function y(I,C,T,U){return C===null||C.tag!==6?(C=ic(T,I.mode,U),C.return=I,C):(C=d(C,T),C.return=I,C)}function E(I,C,T,U){var q=T.type;return q===Z?b(I,C,T.props.children,U,T.key):C!==null&&(C.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ut&&Uf(q)===C.type)?(U=d(C,T.props),U.ref=is(I,C,T),U.return=I,U):(U=al(T.type,T.key,T.props,null,I.mode,U),U.ref=is(I,C,T),U.return=I,U)}function N(I,C,T,U){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=sc(T,I.mode,U),C.return=I,C):(C=d(C,T.children||[]),C.return=I,C)}function b(I,C,T,U,q){return C===null||C.tag!==7?(C=wr(T,I.mode,U,q),C.return=I,C):(C=d(C,T),C.return=I,C)}function F(I,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return C=ic(""+C,I.mode,T),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ue:return T=al(C.type,C.key,C.props,null,I.mode,T),T.ref=is(I,null,C),T.return=I,T;case _e:return C=sc(C,I.mode,T),C.return=I,C;case ut:var U=C._init;return F(I,U(C._payload),T)}if(Li(C)||J(C))return C=wr(C,I.mode,T,null),C.return=I,C;Uo(I,C)}return null}function D(I,C,T,U){var q=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return q!==null?null:y(I,C,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ue:return T.key===q?E(I,C,T,U):null;case _e:return T.key===q?N(I,C,T,U):null;case ut:return q=T._init,D(I,C,q(T._payload),U)}if(Li(T)||J(T))return q!==null?null:b(I,C,T,U,null);Uo(I,T)}return null}function V(I,C,T,U,q){if(typeof U=="string"&&U!==""||typeof U=="number")return I=I.get(T)||null,y(C,I,""+U,q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ue:return I=I.get(U.key===null?T:U.key)||null,E(C,I,U,q);case _e:return I=I.get(U.key===null?T:U.key)||null,N(C,I,U,q);case ut:var Q=U._init;return V(I,C,T,Q(U._payload),q)}if(Li(U)||J(U))return I=I.get(T)||null,b(C,I,U,q,null);Uo(C,U)}return null}function G(I,C,T,U){for(var q=null,Q=null,Y=C,te=C=0,$e=null;Y!==null&&te<T.length;te++){Y.index>te?($e=Y,Y=null):$e=Y.sibling;var fe=D(I,Y,T[te],U);if(fe===null){Y===null&&(Y=$e);break}t&&Y&&fe.alternate===null&&i(I,Y),C=h(fe,C,te),Q===null?q=fe:Q.sibling=fe,Q=fe,Y=$e}if(te===T.length)return o(I,Y),Ne&&hr(I,te),q;if(Y===null){for(;te<T.length;te++)Y=F(I,T[te],U),Y!==null&&(C=h(Y,C,te),Q===null?q=Y:Q.sibling=Y,Q=Y);return Ne&&hr(I,te),q}for(Y=u(I,Y);te<T.length;te++)$e=V(Y,I,te,T[te],U),$e!==null&&(t&&$e.alternate!==null&&Y.delete($e.key===null?te:$e.key),C=h($e,C,te),Q===null?q=$e:Q.sibling=$e,Q=$e);return t&&Y.forEach(function($n){return i(I,$n)}),Ne&&hr(I,te),q}function K(I,C,T,U){var q=J(T);if(typeof q!="function")throw Error(n(150));if(T=q.call(T),T==null)throw Error(n(151));for(var Q=q=null,Y=C,te=C=0,$e=null,fe=T.next();Y!==null&&!fe.done;te++,fe=T.next()){Y.index>te?($e=Y,Y=null):$e=Y.sibling;var $n=D(I,Y,fe.value,U);if($n===null){Y===null&&(Y=$e);break}t&&Y&&$n.alternate===null&&i(I,Y),C=h($n,C,te),Q===null?q=$n:Q.sibling=$n,Q=$n,Y=$e}if(fe.done)return o(I,Y),Ne&&hr(I,te),q;if(Y===null){for(;!fe.done;te++,fe=T.next())fe=F(I,fe.value,U),fe!==null&&(C=h(fe,C,te),Q===null?q=fe:Q.sibling=fe,Q=fe);return Ne&&hr(I,te),q}for(Y=u(I,Y);!fe.done;te++,fe=T.next())fe=V(Y,I,te,fe.value,U),fe!==null&&(t&&fe.alternate!==null&&Y.delete(fe.key===null?te:fe.key),C=h(fe,C,te),Q===null?q=fe:Q.sibling=fe,Q=fe);return t&&Y.forEach(function(rE){return i(I,rE)}),Ne&&hr(I,te),q}function Ue(I,C,T,U){if(typeof T=="object"&&T!==null&&T.type===Z&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ue:e:{for(var q=T.key,Q=C;Q!==null;){if(Q.key===q){if(q=T.type,q===Z){if(Q.tag===7){o(I,Q.sibling),C=d(Q,T.props.children),C.return=I,I=C;break e}}else if(Q.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ut&&Uf(q)===Q.type){o(I,Q.sibling),C=d(Q,T.props),C.ref=is(I,Q,T),C.return=I,I=C;break e}o(I,Q);break}else i(I,Q);Q=Q.sibling}T.type===Z?(C=wr(T.props.children,I.mode,U,T.key),C.return=I,I=C):(U=al(T.type,T.key,T.props,null,I.mode,U),U.ref=is(I,C,T),U.return=I,I=U)}return g(I);case _e:e:{for(Q=T.key;C!==null;){if(C.key===Q)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){o(I,C.sibling),C=d(C,T.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else i(I,C);C=C.sibling}C=sc(T,I.mode,U),C.return=I,I=C}return g(I);case ut:return Q=T._init,Ue(I,C,Q(T._payload),U)}if(Li(T))return G(I,C,T,U);if(J(T))return K(I,C,T,U);Uo(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,C!==null&&C.tag===6?(o(I,C.sibling),C=d(C,T),C.return=I,I=C):(o(I,C),C=ic(T,I.mode,U),C.return=I,I=C),g(I)):o(I,C)}return Ue}var Jr=jf(!0),zf=jf(!1),jo=Dn(null),zo=null,Xr=null,pu=null;function mu(){pu=Xr=zo=null}function gu(t){var i=jo.current;Te(jo),t._currentValue=i}function _u(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Zr(t,i){zo=t,pu=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ht=!0),t.firstContext=null)}function Tt(t){var i=t._currentValue;if(pu!==t)if(t={context:t,memoizedValue:i,next:null},Xr===null){if(zo===null)throw Error(n(308));Xr=t,zo.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return i}var fr=null;function vu(t){fr===null?fr=[t]:fr.push(t)}function Wf(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,vu(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,u)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fn=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(ce&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,cn(t,o)}return d=u.interleaved,d===null?(i.next=i,vu(u)):(i.next=d.next,d.next=i),u.interleaved=i,cn(t,o)}function Wo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,La(t,o)}}function Vf(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Bo(t,i,o,u){var d=t.updateQueue;Fn=!1;var h=d.firstBaseUpdate,g=d.lastBaseUpdate,y=d.shared.pending;if(y!==null){d.shared.pending=null;var E=y,N=E.next;E.next=null,g===null?h=N:g.next=N,g=E;var b=t.alternate;b!==null&&(b=b.updateQueue,y=b.lastBaseUpdate,y!==g&&(y===null?b.firstBaseUpdate=N:y.next=N,b.lastBaseUpdate=E))}if(h!==null){var F=d.baseState;g=0,b=N=E=null,y=h;do{var D=y.lane,V=y.eventTime;if((u&D)===D){b!==null&&(b=b.next={eventTime:V,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var G=t,K=y;switch(D=i,V=o,K.tag){case 1:if(G=K.payload,typeof G=="function"){F=G.call(V,F,D);break e}F=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,D=typeof G=="function"?G.call(V,F,D):G,D==null)break e;F=$({},F,D);break e;case 2:Fn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,D=d.effects,D===null?d.effects=[y]:D.push(y))}else V={eventTime:V,lane:D,tag:y.tag,payload:y.payload,callback:y.callback,next:null},b===null?(N=b=V,E=F):b=b.next=V,g|=D;if(y=y.next,y===null){if(y=d.shared.pending,y===null)break;D=y,y=D.next,D.next=null,d.lastBaseUpdate=D,d.shared.pending=null}}while(!0);if(b===null&&(E=F),d.baseState=E,d.firstBaseUpdate=N,d.lastBaseUpdate=b,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);gr|=g,t.lanes=g,t.memoizedState=F}}function Hf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var ss={},Xt=Dn(ss),os=Dn(ss),ls=Dn(ss);function pr(t){if(t===ss)throw Error(n(174));return t}function wu(t,i){switch(Ce(ls,i),Ce(os,t),Ce(Xt,ss),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ea(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ea(i,t)}Te(Xt),Ce(Xt,i)}function ei(){Te(Xt),Te(os),Te(ls)}function $f(t){pr(ls.current);var i=pr(Xt.current),o=Ea(i,t.type);i!==o&&(Ce(os,t),Ce(Xt,o))}function Eu(t){os.current===t&&(Te(Xt),Te(os))}var xe=Dn(0);function Vo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Cu=[];function Su(){for(var t=0;t<Cu.length;t++)Cu[t]._workInProgressVersionPrimary=null;Cu.length=0}var Ho=ne.ReactCurrentDispatcher,Iu=ne.ReactCurrentBatchConfig,mr=0,Ae=null,We=null,Ve=null,$o=!1,as=!1,us=0,kw=0;function tt(){throw Error(n(321))}function ku(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Dt(t[o],i[o]))return!1;return!0}function Tu(t,i,o,u,d,h){if(mr=h,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=t===null||t.memoizedState===null?Pw:xw,t=o(u,d),as){h=0;do{if(as=!1,us=0,25<=h)throw Error(n(301));h+=1,Ve=We=null,i.updateQueue=null,Ho.current=Aw,t=o(u,d)}while(as)}if(Ho.current=qo,i=We!==null&&We.next!==null,mr=0,Ve=We=Ae=null,$o=!1,i)throw Error(n(300));return t}function Ru(){var t=us!==0;return us=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ae.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Rt(){if(We===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var i=Ve===null?Ae.memoizedState:Ve.next;if(i!==null)Ve=i,We=t;else{if(t===null)throw Error(n(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ve===null?Ae.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function cs(t,i){return typeof i=="function"?i(t):i}function Nu(t){var i=Rt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=We,d=u.baseQueue,h=o.pending;if(h!==null){if(d!==null){var g=d.next;d.next=h.next,h.next=g}u.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,u=u.baseState;var y=g=null,E=null,N=h;do{var b=N.lane;if((mr&b)===b)E!==null&&(E=E.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),u=N.hasEagerState?N.eagerState:t(u,N.action);else{var F={lane:b,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};E===null?(y=E=F,g=u):E=E.next=F,Ae.lanes|=b,gr|=b}N=N.next}while(N!==null&&N!==h);E===null?g=u:E.next=y,Dt(u,i.memoizedState)||(ht=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do h=d.lane,Ae.lanes|=h,gr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Pu(t){var i=Rt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var g=d=d.next;do h=t(h,g.action),g=g.next;while(g!==d);Dt(h,i.memoizedState)||(ht=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,u]}function Gf(){}function Kf(t,i){var o=Ae,u=Rt(),d=i(),h=!Dt(u.memoizedState,d);if(h&&(u.memoizedState=d,ht=!0),u=u.queue,xu(Yf.bind(null,o,u,t),[t]),u.getSnapshot!==i||h||Ve!==null&&Ve.memoizedState.tag&1){if(o.flags|=2048,ds(9,Qf.bind(null,o,u,d,i),void 0,null),He===null)throw Error(n(349));(mr&30)!==0||qf(o,i,d)}return d}function qf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Qf(t,i,o,u){i.value=o,i.getSnapshot=u,Jf(i)&&Xf(t)}function Yf(t,i,o){return o(function(){Jf(i)&&Xf(t)})}function Jf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Dt(t,o)}catch{return!0}}function Xf(t){var i=cn(t,1);i!==null&&jt(i,t,1,-1)}function Zf(t){var i=Zt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},i.queue=t,t=t.dispatch=Nw.bind(null,Ae,t),[i.memoizedState,t]}function ds(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function ep(){return Rt().memoizedState}function Go(t,i,o,u){var d=Zt();Ae.flags|=t,d.memoizedState=ds(1|i,o,void 0,u===void 0?null:u)}function Ko(t,i,o,u){var d=Rt();u=u===void 0?null:u;var h=void 0;if(We!==null){var g=We.memoizedState;if(h=g.destroy,u!==null&&ku(u,g.deps)){d.memoizedState=ds(i,o,h,u);return}}Ae.flags|=t,d.memoizedState=ds(1|i,o,h,u)}function tp(t,i){return Go(8390656,8,t,i)}function xu(t,i){return Ko(2048,8,t,i)}function np(t,i){return Ko(4,2,t,i)}function rp(t,i){return Ko(4,4,t,i)}function ip(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function sp(t,i,o){return o=o!=null?o.concat([t]):null,Ko(4,4,ip.bind(null,i,t),o)}function Au(){}function op(t,i){var o=Rt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function lp(t,i){var o=Rt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ku(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function ap(t,i,o){return(mr&21)===0?(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=o):(Dt(o,i)||(o=Fh(),Ae.lanes|=o,gr|=o,t.baseState=!0),i)}function Tw(t,i){var o=ge;ge=o!==0&&4>o?o:4,t(!0);var u=Iu.transition;Iu.transition={};try{t(!1),i()}finally{ge=o,Iu.transition=u}}function up(){return Rt().memoizedState}function Rw(t,i,o){var u=Bn(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},cp(t))dp(i,o);else if(o=Wf(t,i,o,u),o!==null){var d=st();jt(o,t,u,d),hp(o,i,u)}}function Nw(t,i,o){var u=Bn(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(cp(t))dp(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var g=i.lastRenderedState,y=h(g,o);if(d.hasEagerState=!0,d.eagerState=y,Dt(y,g)){var E=i.interleaved;E===null?(d.next=d,vu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=Wf(t,i,d,u),o!==null&&(d=st(),jt(o,t,u,d),hp(o,i,u))}}function cp(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function dp(t,i){as=$o=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function hp(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,La(t,o)}}var qo={readContext:Tt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Pw={readContext:Tt,useCallback:function(t,i){return Zt().memoizedState=[t,i===void 0?null:i],t},useContext:Tt,useEffect:tp,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Go(4194308,4,ip.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Go(4194308,4,t,i)},useInsertionEffect:function(t,i){return Go(4,2,t,i)},useMemo:function(t,i){var o=Zt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Zt();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Rw.bind(null,Ae,t),[u.memoizedState,t]},useRef:function(t){var i=Zt();return t={current:t},i.memoizedState=t},useState:Zf,useDebugValue:Au,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Zf(!1),i=t[0];return t=Tw.bind(null,t[1]),Zt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Ae,d=Zt();if(Ne){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),He===null)throw Error(n(349));(mr&30)!==0||qf(u,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,tp(Yf.bind(null,u,h,t),[t]),u.flags|=2048,ds(9,Qf.bind(null,u,h,o,i),void 0,null),o},useId:function(){var t=Zt(),i=He.identifierPrefix;if(Ne){var o=un,u=an;o=(u&~(1<<32-Lt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=us++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=kw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},xw={readContext:Tt,useCallback:op,useContext:Tt,useEffect:xu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:rp,useMemo:lp,useReducer:Nu,useRef:ep,useState:function(){return Nu(cs)},useDebugValue:Au,useDeferredValue:function(t){var i=Rt();return ap(i,We.memoizedState,t)},useTransition:function(){var t=Nu(cs)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:Gf,useSyncExternalStore:Kf,useId:up,unstable_isNewReconciler:!1},Aw={readContext:Tt,useCallback:op,useContext:Tt,useEffect:xu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:rp,useMemo:lp,useReducer:Pu,useRef:ep,useState:function(){return Pu(cs)},useDebugValue:Au,useDeferredValue:function(t){var i=Rt();return We===null?i.memoizedState=t:ap(i,We.memoizedState,t)},useTransition:function(){var t=Pu(cs)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:Gf,useSyncExternalStore:Kf,useId:up,unstable_isNewReconciler:!1};function bt(t,i){if(t&&t.defaultProps){i=$({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ou(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:$({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Qo={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=st(),d=Bn(t),h=dn(u,d);h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,d),i!==null&&(jt(i,t,d,u),Wo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=st(),d=Bn(t),h=dn(u,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Un(t,h,d),i!==null&&(jt(i,t,d,u),Wo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=st(),u=Bn(t),d=dn(o,u);d.tag=2,i!=null&&(d.callback=i),i=Un(t,d,u),i!==null&&(jt(i,t,u,o),Wo(i,t,u))}};function fp(t,i,o,u,d,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,g):i.prototype&&i.prototype.isPureReactComponent?!Ji(o,u)||!Ji(d,h):!0}function pp(t,i,o){var u=!1,d=Mn,h=i.contextType;return typeof h=="object"&&h!==null?h=Tt(h):(d=dt(i)?cr:et.current,u=i.contextTypes,h=(u=u!=null)?Kr(t,d):Mn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function mp(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Qo.enqueueReplaceState(i,i.state,null)}function Lu(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},yu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Tt(h):(h=dt(i)?cr:et.current,d.context=Kr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ou(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qo.enqueueReplaceState(d,d.state,null),Bo(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,i){try{var o="",u=i;do o+=de(u),u=u.return;while(u);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Du(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Mu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Ow=typeof WeakMap=="function"?WeakMap:Map;function gp(t,i,o){o=dn(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){nl||(nl=!0,Yu=u),Mu(t,i)},o}function _p(t,i,o){o=dn(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Mu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Mu(t,i),typeof u!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),o}function vp(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Ow;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=Gw.bind(null,t,i,o),i.then(t,t))}function yp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function wp(t,i,o,u,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=dn(-1,1),i.tag=2,Un(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Lw=ne.ReactCurrentOwner,ht=!1;function it(t,i,o,u){i.child=t===null?zf(i,null,o,u):Jr(i,t.child,o,u)}function Ep(t,i,o,u,d){o=o.render;var h=i.ref;return Zr(i,d),u=Tu(t,i,o,u,h,d),o=Ru(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(Ne&&o&&uu(i),i.flags|=1,it(t,i,u,d),i.child)}function Cp(t,i,o,u,d){if(t===null){var h=o.type;return typeof h=="function"&&!rc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Sp(t,i,h,u,d)):(t=al(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ji,o(g,u)&&t.ref===i.ref)return hn(t,i,d)}return i.flags|=1,t=Hn(h,u),t.ref=i.ref,t.return=i,i.child=t}function Sp(t,i,o,u,d){if(t!==null){var h=t.memoizedProps;if(Ji(h,u)&&t.ref===i.ref)if(ht=!1,i.pendingProps=u=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(ht=!0);else return i.lanes=t.lanes,hn(t,i,d)}return bu(t,i,o,u,d)}function Ip(t,i,o){var u=i.pendingProps,d=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ri,St),St|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ce(ri,St),St|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:o,Ce(ri,St),St|=u}else h!==null?(u=h.baseLanes|o,i.memoizedState=null):u=o,Ce(ri,St),St|=u;return it(t,i,d,o),i.child}function kp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function bu(t,i,o,u,d){var h=dt(o)?cr:et.current;return h=Kr(i,h),Zr(i,d),o=Tu(t,i,o,u,h,d),u=Ru(),t!==null&&!ht?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(Ne&&u&&uu(i),i.flags|=1,it(t,i,o,d),i.child)}function Tp(t,i,o,u,d){if(dt(o)){var h=!0;Lo(i)}else h=!1;if(Zr(i,d),i.stateNode===null)Jo(t,i),pp(i,o,u),Lu(i,o,u,d),u=!0;else if(t===null){var g=i.stateNode,y=i.memoizedProps;g.props=y;var E=g.context,N=o.contextType;typeof N=="object"&&N!==null?N=Tt(N):(N=dt(o)?cr:et.current,N=Kr(i,N));var b=o.getDerivedStateFromProps,F=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==u||E!==N)&&mp(i,g,u,N),Fn=!1;var D=i.memoizedState;g.state=D,Bo(i,u,g,d),E=i.memoizedState,y!==u||D!==E||ct.current||Fn?(typeof b=="function"&&(Ou(i,o,b,u),E=i.memoizedState),(y=Fn||fp(i,o,y,u,D,E,N))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=N,u=y):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,Bf(t,i),y=i.memoizedProps,N=i.type===i.elementType?y:bt(i.type,y),g.props=N,F=i.pendingProps,D=g.context,E=o.contextType,typeof E=="object"&&E!==null?E=Tt(E):(E=dt(o)?cr:et.current,E=Kr(i,E));var V=o.getDerivedStateFromProps;(b=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==F||D!==E)&&mp(i,g,u,E),Fn=!1,D=i.memoizedState,g.state=D,Bo(i,u,g,d);var G=i.memoizedState;y!==F||D!==G||ct.current||Fn?(typeof V=="function"&&(Ou(i,o,V,u),G=i.memoizedState),(N=Fn||fp(i,o,N,u,D,G,E)||!1)?(b||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,G,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,G,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=G),g.props=u,g.state=G,g.context=E,u=N):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=1024),u=!1)}return Fu(t,i,o,u,h,d)}function Fu(t,i,o,u,d,h){kp(t,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&Af(i,o,!1),hn(t,i,h);u=i.stateNode,Lw.current=i;var y=g&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&g?(i.child=Jr(i,t.child,null,h),i.child=Jr(i,null,y,h)):it(t,i,y,h),i.memoizedState=u.state,d&&Af(i,o,!0),i.child}function Rp(t){var i=t.stateNode;i.pendingContext?Pf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Pf(t,i.context,!1),wu(t,i.containerInfo)}function Np(t,i,o,u,d){return Yr(),fu(d),i.flags|=256,it(t,i,o,u),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pp(t,i,o){var u=i.pendingProps,d=xe.current,h=!1,g=(i.flags&128)!==0,y;if((y=g)||(y=t!==null&&t.memoizedState===null?!1:(d&2)!==0),y?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ce(xe,d&1),t===null)return hu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=u.children,t=u.fallback,h?(u=i.mode,h=i.child,g={mode:"hidden",children:g},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=ul(g,u,0,null),t=wr(t,u,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ju(o),i.memoizedState=Uu,t):zu(i,g));if(d=t.memoizedState,d!==null&&(y=d.dehydrated,y!==null))return Dw(t,i,g,u,y,d,o);if(h){h=u.fallback,g=i.mode,d=t.child,y=d.sibling;var E={mode:"hidden",children:u.children};return(g&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Hn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),y!==null?h=Hn(y,h):(h=wr(h,g,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,g=t.child.memoizedState,g=g===null?ju(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,i.memoizedState=Uu,u}return h=t.child,t=h.sibling,u=Hn(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function zu(t,i){return i=ul({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Yo(t,i,o,u){return u!==null&&fu(u),Jr(i,t.child,null,o),t=zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Dw(t,i,o,u,d,h,g){if(o)return i.flags&256?(i.flags&=-257,u=Du(Error(n(422))),Yo(t,i,g,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=ul({mode:"visible",children:u.children},d,0,null),h=wr(h,d,g,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&Jr(i,t.child,null,g),i.child.memoizedState=ju(g),i.memoizedState=Uu,h);if((i.mode&1)===0)return Yo(t,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var y=u.dgst;return u=y,h=Error(n(419)),u=Du(h,u,void 0),Yo(t,i,g,u)}if(y=(g&t.childLanes)!==0,ht||y){if(u=He,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|g))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,cn(t,d),jt(u,t,d,-1))}return nc(),u=Du(Error(n(421))),Yo(t,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Kw.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Ct=Ln(d.nextSibling),Et=i,Ne=!0,Mt=null,t!==null&&(It[kt++]=an,It[kt++]=un,It[kt++]=dr,an=t.id,un=t.overflow,dr=i),i=zu(i,u.children),i.flags|=4096,i)}function xp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),_u(t.return,i,o)}function Wu(t,i,o,u,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=o,h.tailMode=d)}function Ap(t,i,o){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(it(t,i,u.children,o),u=xe.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,o,i);else if(t.tag===19)xp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ce(xe,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Vo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Wu(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Vo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Wu(i,!0,o,null,h);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function hn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),gr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Hn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Hn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Mw(t,i,o){switch(i.tag){case 3:Rp(i),Yr();break;case 5:$f(i);break;case 1:dt(i.type)&&Lo(i);break;case 4:wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ce(jo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ce(xe,xe.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Pp(t,i,o):(Ce(xe,xe.current&1),t=hn(t,i,o),t!==null?t.sibling:null);Ce(xe,xe.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Ap(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ce(xe,xe.current),u)break;return null;case 22:case 23:return i.lanes=0,Ip(t,i,o)}return hn(t,i,o)}var Op,Bu,Lp,Dp;Op=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Bu=function(){},Lp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,pr(Xt.current);var h=null;switch(o){case"input":d=_a(t,d),u=_a(t,u),h=[];break;case"select":d=$({},d,{value:void 0}),u=$({},u,{value:void 0}),h=[];break;case"textarea":d=wa(t,d),u=wa(t,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=xo)}Ca(o,u);var g;o=null;for(N in d)if(!u.hasOwnProperty(N)&&d.hasOwnProperty(N)&&d[N]!=null)if(N==="style"){var y=d[N];for(g in y)y.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(l.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in u){var E=u[N];if(y=d!=null?d[N]:void 0,u.hasOwnProperty(N)&&E!==y&&(E!=null||y!=null))if(N==="style")if(y){for(g in y)!y.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in E)E.hasOwnProperty(g)&&y[g]!==E[g]&&(o||(o={}),o[g]=E[g])}else o||(h||(h=[]),h.push(N,o)),o=E;else N==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(h=h||[]).push(N,E)):N==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(N,""+E):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(l.hasOwnProperty(N)?(E!=null&&N==="onScroll"&&ke("scroll",t),h||y===E||(h=[])):(h=h||[]).push(N,E))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},Dp=function(t,i,o,u){o!==u&&(i.flags|=4)};function hs(t,i){if(!Ne)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function bw(t,i,o){var u=i.pendingProps;switch(cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return dt(i.type)&&Oo(),nt(i),null;case 3:return u=i.stateNode,ei(),Te(ct),Te(et),Su(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Fo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mt!==null&&(Zu(Mt),Mt=null))),Bu(t,i),nt(i),null;case 5:Eu(i);var d=pr(ls.current);if(o=i.type,t!==null&&i.stateNode!=null)Lp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return nt(i),null}if(t=pr(Xt.current),Fo(i)){u=i.stateNode,o=i.type;var h=i.memoizedProps;switch(u[Jt]=i,u[ns]=h,t=(i.mode&1)!==0,o){case"dialog":ke("cancel",u),ke("close",u);break;case"iframe":case"object":case"embed":ke("load",u);break;case"video":case"audio":for(d=0;d<Zi.length;d++)ke(Zi[d],u);break;case"source":ke("error",u);break;case"img":case"image":case"link":ke("error",u),ke("load",u);break;case"details":ke("toggle",u);break;case"input":fh(u,h),ke("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},ke("invalid",u);break;case"textarea":gh(u,h),ke("invalid",u)}Ca(o,h),d=null;for(var g in h)if(h.hasOwnProperty(g)){var y=h[g];g==="children"?typeof y=="string"?u.textContent!==y&&(h.suppressHydrationWarning!==!0&&Po(u.textContent,y,t),d=["children",y]):typeof y=="number"&&u.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&Po(u.textContent,y,t),d=["children",""+y]):l.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&ke("scroll",u)}switch(o){case"input":so(u),mh(u,h,!0);break;case"textarea":so(u),vh(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=xo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=g.createElement(o,{is:u.is}):(t=g.createElement(o),o==="select"&&(g=t,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):t=g.createElementNS(t,o),t[Jt]=i,t[ns]=u,Op(t,i,!1,!1),i.stateNode=t;e:{switch(g=Sa(o,u),o){case"dialog":ke("cancel",t),ke("close",t),d=u;break;case"iframe":case"object":case"embed":ke("load",t),d=u;break;case"video":case"audio":for(d=0;d<Zi.length;d++)ke(Zi[d],t);d=u;break;case"source":ke("error",t),d=u;break;case"img":case"image":case"link":ke("error",t),ke("load",t),d=u;break;case"details":ke("toggle",t),d=u;break;case"input":fh(t,u),d=_a(t,u),ke("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=$({},u,{value:void 0}),ke("invalid",t);break;case"textarea":gh(t,u),d=wa(t,u),ke("invalid",t);break;default:d=u}Ca(o,d),y=d;for(h in y)if(y.hasOwnProperty(h)){var E=y[h];h==="style"?Ch(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&wh(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Di(t,E):typeof E=="number"&&Di(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&ke("scroll",t):E!=null&&W(t,h,E,g))}switch(o){case"input":so(t),mh(t,u,!1);break;case"textarea":so(t),vh(t);break;case"option":u.value!=null&&t.setAttribute("value",""+me(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?Mr(t,!!u.multiple,h,!1):u.defaultValue!=null&&Mr(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=xo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return nt(i),null;case 6:if(t&&i.stateNode!=null)Dp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=pr(ls.current),pr(Xt.current),Fo(i)){if(u=i.stateNode,o=i.memoizedProps,u[Jt]=i,(h=u.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:Po(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(u.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Jt]=i,i.stateNode=u}return nt(i),null;case 13:if(Te(xe),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Ct!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ff(),Yr(),i.flags|=98560,h=!1;else if(h=Fo(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Jt]=i}else Yr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else Mt!==null&&(Zu(Mt),Mt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(xe.current&1)!==0?Be===0&&(Be=3):nc())),i.updateQueue!==null&&(i.flags|=4),nt(i),null);case 4:return ei(),Bu(t,i),t===null&&es(i.stateNode.containerInfo),nt(i),null;case 10:return gu(i.type._context),nt(i),null;case 17:return dt(i.type)&&Oo(),nt(i),null;case 19:if(Te(xe),h=i.memoizedState,h===null)return nt(i),null;if(u=(i.flags&128)!==0,g=h.rendering,g===null)if(u)hs(h,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(g=Vo(t),g!==null){for(i.flags|=128,hs(h,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)h=o,t=u,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ce(xe,xe.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>ii&&(i.flags|=128,u=!0,hs(h,!1),i.lanes=4194304)}else{if(!u)if(t=Vo(g),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),hs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ne)return nt(i),null}else 2*Fe()-h.renderingStartTime>ii&&o!==1073741824&&(i.flags|=128,u=!0,hs(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(o=h.last,o!==null?o.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,o=xe.current,Ce(xe,u?o&1|2:o&1),i):(nt(i),null);case 22:case 23:return tc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(St&1073741824)!==0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Fw(t,i){switch(cu(i),i.tag){case 1:return dt(i.type)&&Oo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ei(),Te(ct),Te(et),Su(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(Te(xe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Yr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Te(xe),null;case 4:return ei(),null;case 10:return gu(i.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var Xo=!1,rt=!1,Uw=typeof WeakSet=="function"?WeakSet:Set,H=null;function ni(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){De(t,i,u)}else o.current=null}function Vu(t,i,o){try{o()}catch(u){De(t,i,u)}}var Mp=!1;function jw(t,i){if(tu=vo,t=ff(),Ka(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,y=-1,E=-1,N=0,b=0,F=t,D=null;t:for(;;){for(var V;F!==o||d!==0&&F.nodeType!==3||(y=g+d),F!==h||u!==0&&F.nodeType!==3||(E=g+u),F.nodeType===3&&(g+=F.nodeValue.length),(V=F.firstChild)!==null;)D=F,F=V;for(;;){if(F===t)break t;if(D===o&&++N===d&&(y=g),D===h&&++b===u&&(E=g),(V=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=V}o=y===-1||E===-1?null:{start:y,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(nu={focusedElem:t,selectionRange:o},vo=!1,H=i;H!==null;)if(i=H,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,H=t;else for(;H!==null;){i=H;try{var G=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var K=G.memoizedProps,Ue=G.memoizedState,I=i.stateNode,C=I.getSnapshotBeforeUpdate(i.elementType===i.type?K:bt(i.type,K),Ue);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(U){De(i,i.return,U)}if(t=i.sibling,t!==null){t.return=i.return,H=t;break}H=i.return}return G=Mp,Mp=!1,G}function fs(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Vu(i,o,h)}d=d.next}while(d!==u)}}function Zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Hu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function bp(t){var i=t.alternate;i!==null&&(t.alternate=null,bp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Jt],delete i[ns],delete i[ou],delete i[Ew],delete i[Cw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fp(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xo));else if(u!==4&&(t=t.child,t!==null))for($u(t,i,o),t=t.sibling;t!==null;)$u(t,i,o),t=t.sibling}function Gu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Gu(t,i,o),t=t.sibling;t!==null;)Gu(t,i,o),t=t.sibling}var Ye=null,Ft=!1;function jn(t,i,o){for(o=o.child;o!==null;)jp(t,i,o),o=o.sibling}function jp(t,i,o){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(ho,o)}catch{}switch(o.tag){case 5:rt||ni(o,i);case 6:var u=Ye,d=Ft;Ye=null,jn(t,i,o),Ye=u,Ft=d,Ye!==null&&(Ft?(t=Ye,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ye.removeChild(o.stateNode));break;case 18:Ye!==null&&(Ft?(t=Ye,o=o.stateNode,t.nodeType===8?su(t.parentNode,o):t.nodeType===1&&su(t,o),$i(t)):su(Ye,o.stateNode));break;case 4:u=Ye,d=Ft,Ye=o.stateNode.containerInfo,Ft=!0,jn(t,i,o),Ye=u,Ft=d;break;case 0:case 11:case 14:case 15:if(!rt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Vu(o,i,g),d=d.next}while(d!==u)}jn(t,i,o);break;case 1:if(!rt&&(ni(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(y){De(o,i,y)}jn(t,i,o);break;case 21:jn(t,i,o);break;case 22:o.mode&1?(rt=(u=rt)||o.memoizedState!==null,jn(t,i,o),rt=u):jn(t,i,o);break;default:jn(t,i,o)}}function zp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Uw),i.forEach(function(u){var d=qw.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Ut(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var h=t,g=i,y=g;e:for(;y!==null;){switch(y.tag){case 5:Ye=y.stateNode,Ft=!1;break e;case 3:Ye=y.stateNode.containerInfo,Ft=!0;break e;case 4:Ye=y.stateNode.containerInfo,Ft=!0;break e}y=y.return}if(Ye===null)throw Error(n(160));jp(h,g,d),Ye=null,Ft=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(N){De(d,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wp(i,t),i=i.sibling}function Wp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(i,t),en(t),u&4){try{fs(3,t,t.return),Zo(3,t)}catch(K){De(t,t.return,K)}try{fs(5,t,t.return)}catch(K){De(t,t.return,K)}}break;case 1:Ut(i,t),en(t),u&512&&o!==null&&ni(o,o.return);break;case 5:if(Ut(i,t),en(t),u&512&&o!==null&&ni(o,o.return),t.flags&32){var d=t.stateNode;try{Di(d,"")}catch(K){De(t,t.return,K)}}if(u&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,y=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&ph(d,h),Sa(y,g);var N=Sa(y,h);for(g=0;g<E.length;g+=2){var b=E[g],F=E[g+1];b==="style"?Ch(d,F):b==="dangerouslySetInnerHTML"?wh(d,F):b==="children"?Di(d,F):W(d,b,F,N)}switch(y){case"input":va(d,h);break;case"textarea":_h(d,h);break;case"select":var D=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var V=h.value;V!=null?Mr(d,!!h.multiple,V,!1):D!==!!h.multiple&&(h.defaultValue!=null?Mr(d,!!h.multiple,h.defaultValue,!0):Mr(d,!!h.multiple,h.multiple?[]:"",!1))}d[ns]=h}catch(K){De(t,t.return,K)}}break;case 6:if(Ut(i,t),en(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(K){De(t,t.return,K)}}break;case 3:if(Ut(i,t),en(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{$i(i.containerInfo)}catch(K){De(t,t.return,K)}break;case 4:Ut(i,t),en(t);break;case 13:Ut(i,t),en(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Qu=Fe())),u&4&&zp(t);break;case 22:if(b=o!==null&&o.memoizedState!==null,t.mode&1?(rt=(N=rt)||b,Ut(i,t),rt=N):Ut(i,t),en(t),u&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!b&&(t.mode&1)!==0)for(H=t,b=t.child;b!==null;){for(F=H=b;H!==null;){switch(D=H,V=D.child,D.tag){case 0:case 11:case 14:case 15:fs(4,D,D.return);break;case 1:ni(D,D.return);var G=D.stateNode;if(typeof G.componentWillUnmount=="function"){u=D,o=D.return;try{i=u,G.props=i.memoizedProps,G.state=i.memoizedState,G.componentWillUnmount()}catch(K){De(u,o,K)}}break;case 5:ni(D,D.return);break;case 22:if(D.memoizedState!==null){Hp(F);continue}}V!==null?(V.return=D,H=V):Hp(F)}b=b.sibling}e:for(b=null,F=t;;){if(F.tag===5){if(b===null){b=F;try{d=F.stateNode,N?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=F.stateNode,E=F.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=Eh("display",g))}catch(K){De(t,t.return,K)}}}else if(F.tag===6){if(b===null)try{F.stateNode.nodeValue=N?"":F.memoizedProps}catch(K){De(t,t.return,K)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===t)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===t)break e;for(;F.sibling===null;){if(F.return===null||F.return===t)break e;b===F&&(b=null),F=F.return}b===F&&(b=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Ut(i,t),en(t),u&4&&zp(t);break;case 21:break;default:Ut(i,t),en(t)}}function en(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Fp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Di(d,""),u.flags&=-33);var h=Up(t);Gu(t,h,d);break;case 3:case 4:var g=u.stateNode.containerInfo,y=Up(t);$u(t,y,g);break;default:throw Error(n(161))}}catch(E){De(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function zw(t,i,o){H=t,Bp(t)}function Bp(t,i,o){for(var u=(t.mode&1)!==0;H!==null;){var d=H,h=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||Xo;if(!g){var y=d.alternate,E=y!==null&&y.memoizedState!==null||rt;y=Xo;var N=rt;if(Xo=g,(rt=E)&&!N)for(H=d;H!==null;)g=H,E=g.child,g.tag===22&&g.memoizedState!==null?$p(d):E!==null?(E.return=g,H=E):$p(d);for(;h!==null;)H=h,Bp(h),h=h.sibling;H=d,Xo=y,rt=N}Vp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,H=h):Vp(t)}}function Vp(t){for(;H!==null;){var i=H;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:rt||Zo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!rt)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:bt(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Hf(i,h,u);break;case 3:var g=i.updateQueue;if(g!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Hf(i,g,o)}break;case 5:var y=i.stateNode;if(o===null&&i.flags&4){o=y;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var b=N.memoizedState;if(b!==null){var F=b.dehydrated;F!==null&&$i(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}rt||i.flags&512&&Hu(i)}catch(D){De(i,i.return,D)}}if(i===t){H=null;break}if(o=i.sibling,o!==null){o.return=i.return,H=o;break}H=i.return}}function Hp(t){for(;H!==null;){var i=H;if(i===t){H=null;break}var o=i.sibling;if(o!==null){o.return=i.return,H=o;break}H=i.return}}function $p(t){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Zo(4,i)}catch(E){De(i,o,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){De(i,d,E)}}var h=i.return;try{Hu(i)}catch(E){De(i,h,E)}break;case 5:var g=i.return;try{Hu(i)}catch(E){De(i,g,E)}}}catch(E){De(i,i.return,E)}if(i===t){H=null;break}var y=i.sibling;if(y!==null){y.return=i.return,H=y;break}H=i.return}}var Ww=Math.ceil,el=ne.ReactCurrentDispatcher,Ku=ne.ReactCurrentOwner,Nt=ne.ReactCurrentBatchConfig,ce=0,He=null,ze=null,Je=0,St=0,ri=Dn(0),Be=0,ps=null,gr=0,tl=0,qu=0,ms=null,ft=null,Qu=0,ii=1/0,fn=null,nl=!1,Yu=null,zn=null,rl=!1,Wn=null,il=0,gs=0,Ju=null,sl=-1,ol=0;function st(){return(ce&6)!==0?Fe():sl!==-1?sl:sl=Fe()}function Bn(t){return(t.mode&1)===0?1:(ce&2)!==0&&Je!==0?Je&-Je:Iw.transition!==null?(ol===0&&(ol=Fh()),ol):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Gh(t.type)),t)}function jt(t,i,o,u){if(50<gs)throw gs=0,Ju=null,Error(n(185));zi(t,o,u),((ce&2)===0||t!==He)&&(t===He&&((ce&2)===0&&(tl|=o),Be===4&&Vn(t,Je)),pt(t,u),o===1&&ce===0&&(i.mode&1)===0&&(ii=Fe()+500,Do&&bn()))}function pt(t,i){var o=t.callbackNode;Iy(t,i);var u=mo(t,t===He?Je:0);if(u===0)o!==null&&Dh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&Dh(o),i===1)t.tag===0?Sw(Kp.bind(null,t)):Of(Kp.bind(null,t)),yw(function(){(ce&6)===0&&bn()}),o=null;else{switch(Uh(u)){case 1:o=xa;break;case 4:o=Mh;break;case 16:o=co;break;case 536870912:o=bh;break;default:o=co}o=tm(o,Gp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Gp(t,i){if(sl=-1,ol=0,(ce&6)!==0)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var u=mo(t,t===He?Je:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=ll(t,u);else{i=u;var d=ce;ce|=2;var h=Qp();(He!==t||Je!==i)&&(fn=null,ii=Fe()+500,vr(t,i));do try{Hw();break}catch(y){qp(t,y)}while(!0);mu(),el.current=h,ce=d,ze!==null?i=0:(He=null,Je=0,i=Be)}if(i!==0){if(i===2&&(d=Aa(t),d!==0&&(u=d,i=Xu(t,d))),i===1)throw o=ps,vr(t,0),Vn(t,u),pt(t,Fe()),o;if(i===6)Vn(t,u);else{if(d=t.current.alternate,(u&30)===0&&!Bw(d)&&(i=ll(t,u),i===2&&(h=Aa(t),h!==0&&(u=h,i=Xu(t,h))),i===1))throw o=ps,vr(t,0),Vn(t,u),pt(t,Fe()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:yr(t,ft,fn);break;case 3:if(Vn(t,u),(u&130023424)===u&&(i=Qu+500-Fe(),10<i)){if(mo(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){st(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=iu(yr.bind(null,t,ft,fn),i);break}yr(t,ft,fn);break;case 4:if(Vn(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var g=31-Lt(u);h=1<<g,g=i[g],g>d&&(d=g),u&=~h}if(u=d,u=Fe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Ww(u/1960))-u,10<u){t.timeoutHandle=iu(yr.bind(null,t,ft,fn),u);break}yr(t,ft,fn);break;case 5:yr(t,ft,fn);break;default:throw Error(n(329))}}}return pt(t,Fe()),t.callbackNode===o?Gp.bind(null,t):null}function Xu(t,i){var o=ms;return t.current.memoizedState.isDehydrated&&(vr(t,i).flags|=256),t=ll(t,i),t!==2&&(i=ft,ft=o,i!==null&&Zu(i)),t}function Zu(t){ft===null?ft=t:ft.push.apply(ft,t)}function Bw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],h=d.getSnapshot;d=d.value;try{if(!Dt(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~qu,i&=~tl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Lt(i),u=1<<o;t[o]=-1,i&=~u}}function Kp(t){if((ce&6)!==0)throw Error(n(327));si();var i=mo(t,0);if((i&1)===0)return pt(t,Fe()),null;var o=ll(t,i);if(t.tag!==0&&o===2){var u=Aa(t);u!==0&&(i=u,o=Xu(t,u))}if(o===1)throw o=ps,vr(t,0),Vn(t,i),pt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,yr(t,ft,fn),pt(t,Fe()),null}function ec(t,i){var o=ce;ce|=1;try{return t(i)}finally{ce=o,ce===0&&(ii=Fe()+500,Do&&bn())}}function _r(t){Wn!==null&&Wn.tag===0&&(ce&6)===0&&si();var i=ce;ce|=1;var o=Nt.transition,u=ge;try{if(Nt.transition=null,ge=1,t)return t()}finally{ge=u,Nt.transition=o,ce=i,(ce&6)===0&&bn()}}function tc(){St=ri.current,Te(ri)}function vr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,vw(o)),ze!==null)for(o=ze.return;o!==null;){var u=o;switch(cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Oo();break;case 3:ei(),Te(ct),Te(et),Su();break;case 5:Eu(u);break;case 4:ei();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:gu(u.type._context);break;case 22:case 23:tc()}o=o.return}if(He=t,ze=t=Hn(t.current,null),Je=St=i,Be=0,ps=null,qu=tl=gr=0,ft=ms=null,fr!==null){for(i=0;i<fr.length;i++)if(o=fr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,h=o.pending;if(h!==null){var g=h.next;h.next=d,u.next=g}o.pending=u}fr=null}return t}function qp(t,i){do{var o=ze;try{if(mu(),Ho.current=qo,$o){for(var u=Ae.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}$o=!1}if(mr=0,Ve=We=Ae=null,as=!1,us=0,Ku.current=null,o===null||o.return===null){Be=1,ps=i,ze=null;break}e:{var h=t,g=o.return,y=o,E=i;if(i=Je,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=E,b=y,F=b.tag;if((b.mode&1)===0&&(F===0||F===11||F===15)){var D=b.alternate;D?(b.updateQueue=D.updateQueue,b.memoizedState=D.memoizedState,b.lanes=D.lanes):(b.updateQueue=null,b.memoizedState=null)}var V=yp(g);if(V!==null){V.flags&=-257,wp(V,g,y,h,i),V.mode&1&&vp(h,N,i),i=V,E=N;var G=i.updateQueue;if(G===null){var K=new Set;K.add(E),i.updateQueue=K}else G.add(E);break e}else{if((i&1)===0){vp(h,N,i),nc();break e}E=Error(n(426))}}else if(Ne&&y.mode&1){var Ue=yp(g);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),wp(Ue,g,y,h,i),fu(ti(E,y));break e}}h=E=ti(E,y),Be!==4&&(Be=2),ms===null?ms=[h]:ms.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=gp(h,E,i);Vf(h,I);break e;case 1:y=E;var C=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var U=_p(h,y,i);Vf(h,U);break e}}h=h.return}while(h!==null)}Jp(o)}catch(q){i=q,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function Qp(){var t=el.current;return el.current=qo,t===null?qo:t}function nc(){(Be===0||Be===3||Be===2)&&(Be=4),He===null||(gr&268435455)===0&&(tl&268435455)===0||Vn(He,Je)}function ll(t,i){var o=ce;ce|=2;var u=Qp();(He!==t||Je!==i)&&(fn=null,vr(t,i));do try{Vw();break}catch(d){qp(t,d)}while(!0);if(mu(),ce=o,el.current=u,ze!==null)throw Error(n(261));return He=null,Je=0,Be}function Vw(){for(;ze!==null;)Yp(ze)}function Hw(){for(;ze!==null&&!my();)Yp(ze)}function Yp(t){var i=em(t.alternate,t,St);t.memoizedProps=t.pendingProps,i===null?Jp(t):ze=i,Ku.current=null}function Jp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=bw(o,i,St),o!==null){ze=o;return}}else{if(o=Fw(o,i),o!==null){o.flags&=32767,ze=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,ze=null;return}}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);Be===0&&(Be=5)}function yr(t,i,o){var u=ge,d=Nt.transition;try{Nt.transition=null,ge=1,$w(t,i,o,u)}finally{Nt.transition=d,ge=u}return null}function $w(t,i,o,u){do si();while(Wn!==null);if((ce&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ky(t,h),t===He&&(ze=He=null,Je=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||rl||(rl=!0,tm(co,function(){return si(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Nt.transition,Nt.transition=null;var g=ge;ge=1;var y=ce;ce|=4,Ku.current=null,jw(t,o),Wp(o,t),dw(nu),vo=!!tu,nu=tu=null,t.current=o,zw(o),gy(),ce=y,ge=g,Nt.transition=h}else t.current=o;if(rl&&(rl=!1,Wn=t,il=d),h=t.pendingLanes,h===0&&(zn=null),yy(o.stateNode),pt(t,Fe()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(nl)throw nl=!1,t=Yu,Yu=null,t;return(il&1)!==0&&t.tag!==0&&si(),h=t.pendingLanes,(h&1)!==0?t===Ju?gs++:(gs=0,Ju=t):gs=0,bn(),null}function si(){if(Wn!==null){var t=Uh(il),i=Nt.transition,o=ge;try{if(Nt.transition=null,ge=16>t?16:t,Wn===null)var u=!1;else{if(t=Wn,Wn=null,il=0,(ce&6)!==0)throw Error(n(331));var d=ce;for(ce|=4,H=t.current;H!==null;){var h=H,g=h.child;if((H.flags&16)!==0){var y=h.deletions;if(y!==null){for(var E=0;E<y.length;E++){var N=y[E];for(H=N;H!==null;){var b=H;switch(b.tag){case 0:case 11:case 15:fs(8,b,h)}var F=b.child;if(F!==null)F.return=b,H=F;else for(;H!==null;){b=H;var D=b.sibling,V=b.return;if(bp(b),b===N){H=null;break}if(D!==null){D.return=V,H=D;break}H=V}}}var G=h.alternate;if(G!==null){var K=G.child;if(K!==null){G.child=null;do{var Ue=K.sibling;K.sibling=null,K=Ue}while(K!==null)}}H=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,H=g;else e:for(;H!==null;){if(h=H,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:fs(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,H=I;break e}H=h.return}}var C=t.current;for(H=C;H!==null;){g=H;var T=g.child;if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,H=T;else e:for(g=C;H!==null;){if(y=H,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Zo(9,y)}}catch(q){De(y,y.return,q)}if(y===g){H=null;break e}var U=y.sibling;if(U!==null){U.return=y.return,H=U;break e}H=y.return}}if(ce=d,bn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(ho,t)}catch{}u=!0}return u}finally{ge=o,Nt.transition=i}}return!1}function Xp(t,i,o){i=ti(o,i),i=gp(t,i,1),t=Un(t,i,1),i=st(),t!==null&&(zi(t,1,i),pt(t,i))}function De(t,i,o){if(t.tag===3)Xp(t,t,o);else for(;i!==null;){if(i.tag===3){Xp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zn===null||!zn.has(u))){t=ti(o,t),t=_p(i,t,1),i=Un(i,t,1),t=st(),i!==null&&(zi(i,1,t),pt(i,t));break}}i=i.return}}function Gw(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=st(),t.pingedLanes|=t.suspendedLanes&o,He===t&&(Je&o)===o&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Fe()-Qu?vr(t,0):qu|=o),pt(t,i)}function Zp(t,i){i===0&&((t.mode&1)===0?i=1:(i=po,po<<=1,(po&130023424)===0&&(po=4194304)));var o=st();t=cn(t,i),t!==null&&(zi(t,i,o),pt(t,o))}function Kw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Zp(t,o)}function qw(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Zp(t,o)}var em;em=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ct.current)ht=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ht=!1,Mw(t,i,o);ht=(t.flags&131072)!==0}else ht=!1,Ne&&(i.flags&1048576)!==0&&Lf(i,bo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Jo(t,i),t=i.pendingProps;var d=Kr(i,et.current);Zr(i,o),d=Tu(null,i,u,t,d,o);var h=Ru();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,dt(u)?(h=!0,Lo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,yu(i),d.updater=Qo,i.stateNode=d,d._reactInternals=i,Lu(i,u,t,o),i=Fu(null,i,u,!0,h,o)):(i.tag=0,Ne&&h&&uu(i),it(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Jo(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Yw(u),t=bt(u,t),d){case 0:i=bu(null,i,u,t,o);break e;case 1:i=Tp(null,i,u,t,o);break e;case 11:i=Ep(null,i,u,t,o);break e;case 14:i=Cp(null,i,u,bt(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),bu(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),Tp(t,i,u,d,o);case 3:e:{if(Rp(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,d=h.element,Bf(t,i),Bo(i,u,null,o);var g=i.memoizedState;if(u=g.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ti(Error(n(423)),i),i=Np(t,i,u,o,d);break e}else if(u!==d){d=ti(Error(n(424)),i),i=Np(t,i,u,o,d);break e}else for(Ct=Ln(i.stateNode.containerInfo.firstChild),Et=i,Ne=!0,Mt=null,o=zf(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Yr(),u===d){i=hn(t,i,o);break e}it(t,i,u,o)}i=i.child}return i;case 5:return $f(i),t===null&&hu(i),u=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,g=d.children,ru(u,d)?g=null:h!==null&&ru(u,h)&&(i.flags|=32),kp(t,i),it(t,i,g,o),i.child;case 6:return t===null&&hu(i),null;case 13:return Pp(t,i,o);case 4:return wu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Jr(i,null,u,o):it(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),Ep(t,i,u,d,o);case 7:return it(t,i,i.pendingProps,o),i.child;case 8:return it(t,i,i.pendingProps.children,o),i.child;case 12:return it(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,g=d.value,Ce(jo,u._currentValue),u._currentValue=g,h!==null)if(Dt(h.value,g)){if(h.children===d.children&&!ct.current){i=hn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var y=h.dependencies;if(y!==null){g=h.child;for(var E=y.firstContext;E!==null;){if(E.context===u){if(h.tag===1){E=dn(-1,o&-o),E.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var b=N.pending;b===null?E.next=E:(E.next=b.next,b.next=E),N.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),_u(h.return,o,i),y.lanes|=o;break}E=E.next}}else if(h.tag===10)g=h.type===i.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,y=g.alternate,y!==null&&(y.lanes|=o),_u(g,o,i),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===i){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}it(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Zr(i,o),d=Tt(d),u=u(d),i.flags|=1,it(t,i,u,o),i.child;case 14:return u=i.type,d=bt(u,i.pendingProps),d=bt(u.type,d),Cp(t,i,u,d,o);case 15:return Sp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),Jo(t,i),i.tag=1,dt(u)?(t=!0,Lo(i)):t=!1,Zr(i,o),pp(i,u,d),Lu(i,u,d,o),Fu(null,i,u,!0,t,o);case 19:return Ap(t,i,o);case 22:return Ip(t,i,o)}throw Error(n(156,i.tag))};function tm(t,i){return Lh(t,i)}function Qw(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,i,o,u){return new Qw(t,i,o,u)}function rc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yw(t){if(typeof t=="function")return rc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qt)return 11;if(t===Qt)return 14}return 2}function Hn(t,i){var o=t.alternate;return o===null?(o=Pt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function al(t,i,o,u,d,h){var g=2;if(u=t,typeof t=="function")rc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case Z:return wr(o.children,d,h,i);case Oe:g=8,d|=8;break;case we:return t=Pt(12,o,i,d|2),t.elementType=we,t.lanes=h,t;case vt:return t=Pt(13,o,i,d),t.elementType=vt,t.lanes=h,t;case Ot:return t=Pt(19,o,i,d),t.elementType=Ot,t.lanes=h,t;case Le:return ul(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case je:g=10;break e;case Kt:g=9;break e;case qt:g=11;break e;case Qt:g=14;break e;case ut:g=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Pt(g,o,i,d),i.elementType=t,i.type=u,i.lanes=h,i}function wr(t,i,o,u){return t=Pt(7,t,u,i),t.lanes=o,t}function ul(t,i,o,u){return t=Pt(22,t,u,i),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function ic(t,i,o){return t=Pt(6,t,null,i),t.lanes=o,t}function sc(t,i,o){return i=Pt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Jw(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function oc(t,i,o,u,d,h,g,y,E){return t=new Jw(t,i,o,y,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Pt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(h),t}function Xw(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function nm(t){if(!t)return Mn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(dt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(dt(o))return xf(t,o,i)}return i}function rm(t,i,o,u,d,h,g,y,E){return t=oc(o,u,!0,t,d,h,g,y,E),t.context=nm(null),o=t.current,u=st(),d=Bn(o),h=dn(u,d),h.callback=i??null,Un(o,h,d),t.current.lanes=d,zi(t,d,u),pt(t,u),t}function cl(t,i,o,u){var d=i.current,h=st(),g=Bn(d);return o=nm(o),i.context===null?i.context=o:i.pendingContext=o,i=dn(h,g),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Un(d,i,g),t!==null&&(jt(t,d,g,h),Wo(t,d,g)),g}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function im(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function lc(t,i){im(t,i),(t=t.alternate)&&im(t,i)}function Zw(){return null}var sm=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}hl.prototype.render=ac.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));cl(t,i,null,null)},hl.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;_r(function(){cl(null,t,null,null)}),i[on]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Wh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<xn.length&&i!==0&&i<xn[o].priority;o++);xn.splice(o,0,t),o===0&&Hh(t)}};function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function om(){}function eE(t,i,o,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var N=dl(g);h.call(N)}}var g=rm(i,u,t,0,null,!1,!1,"",om);return t._reactRootContainer=g,t[on]=g.current,es(t.nodeType===8?t.parentNode:t),_r(),g}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var y=u;u=function(){var N=dl(E);y.call(N)}}var E=oc(t,0,!1,null,null,!1,!1,"",om);return t._reactRootContainer=E,t[on]=E.current,es(t.nodeType===8?t.parentNode:t),_r(function(){cl(i,E,o,u)}),E}function pl(t,i,o,u,d){var h=o._reactRootContainer;if(h){var g=h;if(typeof d=="function"){var y=d;d=function(){var E=dl(g);y.call(E)}}cl(i,g,t,d)}else g=eE(o,i,t,d,u);return dl(g)}jh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=ji(i.pendingLanes);o!==0&&(La(i,o|1),pt(i,Fe()),(ce&6)===0&&(ii=Fe()+500,bn()))}break;case 13:_r(function(){var u=cn(t,1);if(u!==null){var d=st();jt(u,t,1,d)}}),lc(t,1)}},Da=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=st();jt(i,t,134217728,o)}lc(t,134217728)}},zh=function(t){if(t.tag===13){var i=Bn(t),o=cn(t,i);if(o!==null){var u=st();jt(o,t,i,u)}lc(t,i)}},Wh=function(){return ge},Bh=function(t,i){var o=ge;try{return ge=t,i()}finally{ge=o}},Ta=function(t,i,o){switch(i){case"input":if(va(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=Ao(u);if(!d)throw Error(n(90));hh(u),va(u,d)}}}break;case"textarea":_h(t,o);break;case"select":i=o.value,i!=null&&Mr(t,!!o.multiple,i,!1)}},Th=ec,Rh=_r;var tE={usingClientEntryPoint:!1,Events:[rs,$r,Ao,Ih,kh,ec]},_s={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nE={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ah(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||Zw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{ho=ml.inject(nE),Yt=ml}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE,mt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uc(i))throw Error(n(200));return Xw(t,i,null,o)},mt.createRoot=function(t,i){if(!uc(t))throw Error(n(299));var o=!1,u="",d=sm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=oc(t,1,!1,null,null,o,!1,u,d),t[on]=i.current,es(t.nodeType===8?t.parentNode:t),new ac(i)},mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ah(i),t=t===null?null:t.stateNode,t},mt.flushSync=function(t){return _r(t)},mt.hydrate=function(t,i,o){if(!fl(i))throw Error(n(200));return pl(null,t,i,!0,o)},mt.hydrateRoot=function(t,i,o){if(!uc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,h="",g=sm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),i=rm(i,null,t,1,o??null,d,!1,h,g),t[on]=i.current,es(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new hl(i)},mt.render=function(t,i,o){if(!fl(i))throw Error(n(200));return pl(null,t,i,!1,o)},mt.unmountComponentAtNode=function(t){if(!fl(t))throw Error(n(40));return t._reactRootContainer?(_r(function(){pl(null,null,t,!1,function(){t._reactRootContainer=null,t[on]=null})}),!0):!1},mt.unstable_batchedUpdates=ec,mt.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!fl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return pl(t,i,o,!1,u)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var pm;function cE(){if(pm)return hc.exports;pm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hc.exports=uE(),hc.exports}var mm;function dE(){if(mm)return gl;mm=1;var r=cE();return gl.createRoot=r.createRoot,gl.hydrateRoot=r.hydrateRoot,gl}var hE=dE(),ys={},gm;function fE(){if(gm)return ys;gm=1,Object.defineProperty(ys,"__esModule",{value:!0}),ys.parse=c,ys.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,R){const k=new a,O=w.length;if(O<2)return k;const A=(R==null?void 0:R.decode)||_;let L=0;do{const z=w.indexOf("=",L);if(z===-1)break;const W=w.indexOf(";",L),ne=W===-1?O:W;if(z>ne){L=w.lastIndexOf(";",z-1)+1;continue}const ue=f(w,L,z),_e=p(w,z,ue),Z=w.slice(ue,_e);if(k[Z]===void 0){let Oe=f(w,z+1,ne),we=p(w,ne,Oe);const je=A(w.slice(Oe,we));k[Z]=je}L=ne+1}while(L<O);return k}function f(w,R,k){do{const O=w.charCodeAt(R);if(O!==32&&O!==9)return R}while(++R<k);return k}function p(w,R,k){for(;R>k;){const O=w.charCodeAt(--R);if(O!==32&&O!==9)return R+1}return k}function m(w,R,k){const O=(k==null?void 0:k.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const A=O(R);if(!e.test(A))throw new TypeError(`argument val is invalid: ${R}`);let L=w+"="+A;if(!k)return L;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);L+="; Max-Age="+k.maxAge}if(k.domain){if(!n.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);L+="; Domain="+k.domain}if(k.path){if(!s.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);L+="; Path="+k.path}if(k.expires){if(!v(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);L+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(L+="; HttpOnly"),k.secure&&(L+="; Secure"),k.partitioned&&(L+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return L}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return l.call(w)==="[object Date]"}return ys}fE();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _m="popstate";function pE(r={}){function e(l,a){let{pathname:c="/",search:f="",hash:p=""}=Ar(l.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Oc("",{pathname:c,search:f,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(l,a){let c=l.document.querySelector("base"),f="";if(c&&c.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");f=m===-1?p:p.slice(0,m)}return f+"#"+(typeof a=="string"?a:Ms(a))}function s(l,a){At(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return gE(e,n,s,r)}function Pe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function At(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mE(){return Math.random().toString(36).substring(2,10)}function vm(r,e){return{usr:r.state,key:r.key,idx:e}}function Oc(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ar(e):e,state:n,key:e&&e.key||s||mE()}}function Ms({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Ar(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function gE(r,e,n,s={}){let{window:l=document.defaultView,v5Compat:a=!1}=s,c=l.history,f="POP",p=null,m=_();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function _(){return(c.state||{idx:null}).idx}function v(){f="POP";let A=_(),L=A==null?null:A-m;m=A,p&&p({action:f,location:O.location,delta:L})}function w(A,L){f="PUSH";let z=Oc(O.location,A,L);n&&n(z,A),m=_()+1;let W=vm(z,m),ne=O.createHref(z);try{c.pushState(W,"",ne)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;l.location.assign(ne)}a&&p&&p({action:f,location:O.location,delta:1})}function R(A,L){f="REPLACE";let z=Oc(O.location,A,L);n&&n(z,A),m=_();let W=vm(z,m),ne=O.createHref(z);c.replaceState(W,"",ne),a&&p&&p({action:f,location:O.location,delta:0})}function k(A){let L=l.location.origin!=="null"?l.location.origin:l.location.href,z=typeof A=="string"?A:Ms(A);return z=z.replace(/ $/,"%20"),Pe(L,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,L)}let O={get action(){return f},get location(){return r(l,c)},listen(A){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(_m,v),p=A,()=>{l.removeEventListener(_m,v),p=null}},createHref(A){return e(l,A)},createURL:k,encodeLocation(A){let L=k(A);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:w,replace:R,go(A){return c.go(A)}};return O}function Dg(r,e,n="/"){return _E(r,e,n,!1)}function _E(r,e,n,s){let l=typeof e=="string"?Ar(e):e,a=Cn(l.pathname||"/",n);if(a==null)return null;let c=Mg(r);vE(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let m=PE(a);f=RE(c[p],m,s)}return f}function Mg(r,e=[],n=[],s=""){let l=(a,c,f)=>{let p={relativePath:f===void 0?a.path||"":f,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Pe(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=wn([s,p.relativePath]),_=n.concat(p);a.children&&a.children.length>0&&(Pe(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Mg(a.children,e,_,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:kE(m,a.index),routesMeta:_})};return r.forEach((a,c)=>{var f;if(a.path===""||!((f=a.path)!=null&&f.includes("?")))l(a,c);else for(let p of bg(a.path))l(a,c,p)}),e}function bg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let c=bg(s.join("/")),f=[];return f.push(...c.map(p=>p===""?a:[a,p].join("/"))),l&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function vE(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:TE(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var yE=/^:[\w-]+$/,wE=3,EE=2,CE=1,SE=10,IE=-2,ym=r=>r==="*";function kE(r,e){let n=r.split("/"),s=n.length;return n.some(ym)&&(s+=IE),e&&(s+=EE),n.filter(l=>!ym(l)).reduce((l,a)=>l+(yE.test(a)?wE:a===""?CE:SE),s)}function TE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function RE(r,e,n=!1){let{routesMeta:s}=r,l={},a="/",c=[];for(let f=0;f<s.length;++f){let p=s[f],m=f===s.length-1,_=a==="/"?e:e.slice(a.length)||"/",v=Pl({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!v&&m&&n&&!s[s.length-1].route.index&&(v=Pl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(l,v.params),c.push({params:l,pathname:wn([a,v.pathname]),pathnameBase:LE(wn([a,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(a=wn([a,v.pathnameBase]))}return c}function Pl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=NE(r.path,r.caseSensitive,r.end),l=e.match(n);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:s.reduce((m,{paramName:_,isOptional:v},w)=>{if(_==="*"){let k=f[w]||"";c=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const R=f[w];return v&&!R?m[_]=void 0:m[_]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:r}}function NE(r,e=!1,n=!0){At(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function PE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return At(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Cn(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function xE(r,e="/"){let{pathname:n,search:s="",hash:l=""}=typeof r=="string"?Ar(r):r;return{pathname:n?n.startsWith("/")?n:AE(n,e):e,search:DE(s),hash:ME(l)}}function AE(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function mc(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OE(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sd(r){let e=OE(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function od(r,e,n,s=!1){let l;typeof r=="string"?l=Ar(r):(l={...r},Pe(!l.pathname||!l.pathname.includes("?"),mc("?","pathname","search",l)),Pe(!l.pathname||!l.pathname.includes("#"),mc("#","pathname","hash",l)),Pe(!l.search||!l.search.includes("#"),mc("#","search","hash",l)));let a=r===""||l.pathname==="",c=a?"/":l.pathname,f;if(c==null)f=n;else{let v=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),v-=1;l.pathname=w.join("/")}f=v>=0?e[v]:"/"}let p=xE(l,f),m=c&&c!=="/"&&c.endsWith("/"),_=(a||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var wn=r=>r.join("/").replace(/\/\/+/g,"/"),LE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),DE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ME=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function bE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Fg=["POST","PUT","PATCH","DELETE"];new Set(Fg);var FE=["GET",...Fg];new Set(FE);var Si=P.createContext(null);Si.displayName="DataRouter";var Xl=P.createContext(null);Xl.displayName="DataRouterState";var Ug=P.createContext({isTransitioning:!1});Ug.displayName="ViewTransition";var UE=P.createContext(new Map);UE.displayName="Fetchers";var jE=P.createContext(null);jE.displayName="Await";var Gt=P.createContext(null);Gt.displayName="Navigation";var Ks=P.createContext(null);Ks.displayName="Location";var rn=P.createContext({outlet:null,matches:[],isDataRoute:!1});rn.displayName="Route";var ld=P.createContext(null);ld.displayName="RouteError";function zE(r,{relative:e}={}){Pe(Ii(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=P.useContext(Gt),{hash:l,pathname:a,search:c}=Qs(r,{relative:e}),f=a;return n!=="/"&&(f=a==="/"?n:wn([n,a])),s.createHref({pathname:f,search:c,hash:l})}function Ii(){return P.useContext(Ks)!=null}function Tn(){return Pe(Ii(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(Ks).location}var jg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zg(r){P.useContext(Gt).static||P.useLayoutEffect(r)}function qs(){let{isDataRoute:r}=P.useContext(rn);return r?ZE():WE()}function WE(){Pe(Ii(),"useNavigate() may be used only in the context of a <Router> component.");let r=P.useContext(Si),{basename:e,navigator:n}=P.useContext(Gt),{matches:s}=P.useContext(rn),{pathname:l}=Tn(),a=JSON.stringify(sd(s)),c=P.useRef(!1);return zg(()=>{c.current=!0}),P.useCallback((p,m={})=>{if(At(c.current,jg),!c.current)return;if(typeof p=="number"){n.go(p);return}let _=od(p,JSON.parse(a),l,m.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:wn([e,_.pathname])),(m.replace?n.replace:n.push)(_,m.state,m)},[e,n,a,l,r])}P.createContext(null);function Qs(r,{relative:e}={}){let{matches:n}=P.useContext(rn),{pathname:s}=Tn(),l=JSON.stringify(sd(n));return P.useMemo(()=>od(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function BE(r,e){return Wg(r,e)}function Wg(r,e,n,s){var z;Pe(Ii(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:a}=P.useContext(Gt),{matches:c}=P.useContext(rn),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",_=f?f.pathnameBase:"/",v=f&&f.route;{let W=v&&v.path||"";Bg(m,!v||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let w=Tn(),R;if(e){let W=typeof e=="string"?Ar(e):e;Pe(_==="/"||((z=W.pathname)==null?void 0:z.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${W.pathname}" was given in the \`location\` prop.`),R=W}else R=w;let k=R.pathname||"/",O=k;if(_!=="/"){let W=_.replace(/^\//,"").split("/");O="/"+k.replace(/^\//,"").split("/").slice(W.length).join("/")}let A=!a&&n&&n.matches&&n.matches.length>0?n.matches:Dg(r,{pathname:O});At(v||A!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),At(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=KE(A&&A.map(W=>Object.assign({},W,{params:Object.assign({},p,W.params),pathname:wn([_,l.encodeLocation?l.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?_:wn([_,l.encodeLocation?l.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),c,n,s);return e&&L?P.createElement(Ks.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},L):L}function VE(){let r=XE(),e=bE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:a},"ErrorBoundary")," or"," ",P.createElement("code",{style:a},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:l},n):null,c)}var HE=P.createElement(VE,null),$E=class extends P.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?P.createElement(rn.Provider,{value:this.props.routeContext},P.createElement(ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function GE({routeContext:r,match:e,children:n}){let s=P.useContext(Si);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(rn.Provider,{value:r},n)}function KE(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let l=r,a=n==null?void 0:n.errors;if(a!=null){let p=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);Pe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,f=-1;if(n)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:_,errors:v}=n,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){c=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}return l.reduceRight((p,m,_)=>{let v,w=!1,R=null,k=null;n&&(v=a&&m.route.id?a[m.route.id]:void 0,R=m.route.errorElement||HE,c&&(f<0&&_===0?(Bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,k=null):f===_&&(w=!0,k=m.route.hydrateFallbackElement||null)));let O=e.concat(l.slice(0,_+1)),A=()=>{let L;return v?L=R:w?L=k:m.route.Component?L=P.createElement(m.route.Component,null):m.route.element?L=m.route.element:L=p,P.createElement(GE,{match:m,routeContext:{outlet:p,matches:O,isDataRoute:n!=null},children:L})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?P.createElement($E,{location:n.location,revalidation:n.revalidation,component:R,error:v,children:A(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):A()},null)}function ad(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qE(r){let e=P.useContext(Si);return Pe(e,ad(r)),e}function QE(r){let e=P.useContext(Xl);return Pe(e,ad(r)),e}function YE(r){let e=P.useContext(rn);return Pe(e,ad(r)),e}function ud(r){let e=YE(r),n=e.matches[e.matches.length-1];return Pe(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function JE(){return ud("useRouteId")}function XE(){var s;let r=P.useContext(ld),e=QE("useRouteError"),n=ud("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function ZE(){let{router:r}=qE("useNavigate"),e=ud("useNavigate"),n=P.useRef(!1);return zg(()=>{n.current=!0}),P.useCallback(async(l,a={})=>{At(n.current,jg),n.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...a}))},[r,e])}var wm={};function Bg(r,e,n){!e&&!wm[r]&&(wm[r]=!0,At(!1,n))}P.memo(eC);function eC({routes:r,future:e,state:n}){return Wg(r,void 0,n,e)}function tC({to:r,replace:e,state:n,relative:s}){Pe(Ii(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=P.useContext(Gt);At(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=P.useContext(rn),{pathname:c}=Tn(),f=qs(),p=od(r,sd(a),c,s==="path"),m=JSON.stringify(p);return P.useEffect(()=>{f(JSON.parse(m),{replace:e,state:n,relative:s})},[f,m,s,e,n]),null}function Lc(r){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nC({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:l,static:a=!1}){Pe(!Ii(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=P.useMemo(()=>({basename:c,navigator:l,static:a,future:{}}),[c,l,a]);typeof n=="string"&&(n=Ar(n));let{pathname:p="/",search:m="",hash:_="",state:v=null,key:w="default"}=n,R=P.useMemo(()=>{let k=Cn(p,c);return k==null?null:{location:{pathname:k,search:m,hash:_,state:v,key:w},navigationType:s}},[c,p,m,_,v,w,s]);return At(R!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:P.createElement(Gt.Provider,{value:f},P.createElement(Ks.Provider,{children:e,value:R}))}function rC({children:r,location:e}){return BE(Dc(r),e)}function Dc(r,e=[]){let n=[];return P.Children.forEach(r,(s,l)=>{if(!P.isValidElement(s))return;let a=[...e,l];if(s.type===P.Fragment){n.push.apply(n,Dc(s.props.children,a));return}Pe(s.type===Lc,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Dc(s.props.children,a)),n.push(c)}),n}var Cl="get",Sl="application/x-www-form-urlencoded";function Zl(r){return r!=null&&typeof r.tagName=="string"}function iC(r){return Zl(r)&&r.tagName.toLowerCase()==="button"}function sC(r){return Zl(r)&&r.tagName.toLowerCase()==="form"}function oC(r){return Zl(r)&&r.tagName.toLowerCase()==="input"}function lC(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function aC(r,e){return r.button===0&&(!e||e==="_self")&&!lC(r)}var _l=null;function uC(){if(_l===null)try{new FormData(document.createElement("form"),0),_l=!1}catch{_l=!0}return _l}var cC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gc(r){return r!=null&&!cC.has(r)?(At(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sl}"`),null):r}function dC(r,e){let n,s,l,a,c;if(sC(r)){let f=r.getAttribute("action");s=f?Cn(f,e):null,n=r.getAttribute("method")||Cl,l=gc(r.getAttribute("enctype"))||Sl,a=new FormData(r)}else if(iC(r)||oC(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?Cn(p,e):null,n=r.getAttribute("formmethod")||f.getAttribute("method")||Cl,l=gc(r.getAttribute("formenctype"))||gc(f.getAttribute("enctype"))||Sl,a=new FormData(f,r),!uC()){let{name:m,type:_,value:v}=r;if(_==="image"){let w=m?`${m}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else m&&a.append(m,v)}}else{if(Zl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Cl,s=null,l=Sl,c=r}return a&&l==="text/plain"&&(c=a,a=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:a,body:c}}function cd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function hC(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fC(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function pC(r,e,n){let s=await Promise.all(r.map(async l=>{let a=e.routes[l.route.id];if(a){let c=await hC(a,n);return c.links?c.links():[]}return[]}));return vC(s.flat(1).filter(fC).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Em(r,e,n,s,l,a){let c=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,f=(p,m)=>{var _;return n[m].pathname!==p.pathname||((_=n[m].route.path)==null?void 0:_.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,m)=>c(p,m)||f(p,m)):a==="data"?e.filter((p,m)=>{var v;let _=s.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function mC(r,e,{includeHydrateFallback:n}={}){return gC(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let a=[l.module];return l.clientActionModule&&(a=a.concat(l.clientActionModule)),l.clientLoaderModule&&(a=a.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(a=a.concat(l.hydrateFallbackModule)),l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function gC(r){return[...new Set(r)]}function _C(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function vC(r,e){let n=new Set;return new Set(e),r.reduce((s,l)=>{let a=JSON.stringify(_C(l));return n.has(a)||(n.add(a),s.push({key:a,link:l})),s},[])}function yC(r,e){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname="_root.data":e&&Cn(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Vg(){let r=P.useContext(Si);return cd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function wC(){let r=P.useContext(Xl);return cd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var dd=P.createContext(void 0);dd.displayName="FrameworkContext";function Hg(){let r=P.useContext(dd);return cd(r,"You must render this element inside a <HydratedRouter> element"),r}function EC(r,e){let n=P.useContext(dd),[s,l]=P.useState(!1),[a,c]=P.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:v}=e,w=P.useRef(null);P.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let O=L=>{L.forEach(z=>{c(z.isIntersecting)})},A=new IntersectionObserver(O,{threshold:.5});return w.current&&A.observe(w.current),()=>{A.disconnect()}}},[r]),P.useEffect(()=>{if(s){let O=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(O)}}},[s]);let R=()=>{l(!0)},k=()=>{l(!1),c(!1)};return n?r!=="intent"?[a,w,{}]:[a,w,{onFocus:ws(f,R),onBlur:ws(p,k),onMouseEnter:ws(m,R),onMouseLeave:ws(_,k),onTouchStart:ws(v,R)}]:[!1,w,{}]}function ws(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function CC({page:r,...e}){let{router:n}=Vg(),s=P.useMemo(()=>Dg(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?P.createElement(IC,{page:r,matches:s,...e}):null}function SC(r){let{manifest:e,routeModules:n}=Hg(),[s,l]=P.useState([]);return P.useEffect(()=>{let a=!1;return pC(r,e,n).then(c=>{a||l(c)}),()=>{a=!0}},[r,e,n]),s}function IC({page:r,matches:e,...n}){let s=Tn(),{manifest:l,routeModules:a}=Hg(),{basename:c}=Vg(),{loaderData:f,matches:p}=wC(),m=P.useMemo(()=>Em(r,e,p,l,s,"data"),[r,e,p,l,s]),_=P.useMemo(()=>Em(r,e,p,l,s,"assets"),[r,e,p,l,s]),v=P.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let k=new Set,O=!1;if(e.forEach(L=>{var W;let z=l.routes[L.route.id];!z||!z.hasLoader||(!m.some(ne=>ne.route.id===L.route.id)&&L.route.id in f&&((W=a[L.route.id])!=null&&W.shouldRevalidate)||z.hasClientLoader?O=!0:k.add(L.route.id))}),k.size===0)return[];let A=yC(r,c);return O&&k.size>0&&A.searchParams.set("_routes",e.filter(L=>k.has(L.route.id)).map(L=>L.route.id).join(",")),[A.pathname+A.search]},[c,f,s,l,m,e,r,a]),w=P.useMemo(()=>mC(_,l),[_,l]),R=SC(_);return P.createElement(P.Fragment,null,v.map(k=>P.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...n})),w.map(k=>P.createElement("link",{key:k,rel:"modulepreload",href:k,...n})),R.map(({key:k,link:O})=>P.createElement("link",{key:k,...O})))}function kC(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var $g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$g&&(window.__reactRouterVersion="7.3.0")}catch{}function Gg({basename:r,children:e,window:n}){let s=P.useRef();s.current==null&&(s.current=pE({window:n,v5Compat:!0}));let l=s.current,[a,c]=P.useState({action:l.action,location:l.location}),f=P.useCallback(p=>{P.startTransition(()=>c(p))},[c]);return P.useLayoutEffect(()=>l.listen(f),[l,f]),P.createElement(nC,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:l})}var Kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qg=P.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:l,reloadDocument:a,replace:c,state:f,target:p,to:m,preventScrollReset:_,viewTransition:v,...w},R){let{basename:k}=P.useContext(Gt),O=typeof m=="string"&&Kg.test(m),A,L=!1;if(typeof m=="string"&&O&&(A=m,$g))try{let we=new URL(window.location.href),je=m.startsWith("//")?new URL(we.protocol+m):new URL(m),Kt=Cn(je.pathname,k);je.origin===we.origin&&Kt!=null?m=Kt+je.search+je.hash:L=!0}catch{At(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=zE(m,{relative:l}),[W,ne,ue]=EC(s,w),_e=PC(m,{replace:c,state:f,target:p,preventScrollReset:_,relative:l,viewTransition:v});function Z(we){e&&e(we),we.defaultPrevented||_e(we)}let Oe=P.createElement("a",{...w,...ue,href:A||z,onClick:L||a?e:Z,ref:kC(R,ne),target:p,"data-discover":!O&&n==="render"?"true":void 0});return W&&!O?P.createElement(P.Fragment,null,Oe,P.createElement(CC,{page:z})):Oe});qg.displayName="Link";var TC=P.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:l=!1,style:a,to:c,viewTransition:f,children:p,...m},_){let v=Qs(c,{relative:m.relative}),w=Tn(),R=P.useContext(Xl),{navigator:k,basename:O}=P.useContext(Gt),A=R!=null&&DC(v)&&f===!0,L=k.encodeLocation?k.encodeLocation(v).pathname:v.pathname,z=w.pathname,W=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;n||(z=z.toLowerCase(),W=W?W.toLowerCase():null,L=L.toLowerCase()),W&&O&&(W=Cn(W,O)||W);const ne=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let ue=z===L||!l&&z.startsWith(L)&&z.charAt(ne)==="/",_e=W!=null&&(W===L||!l&&W.startsWith(L)&&W.charAt(L.length)==="/"),Z={isActive:ue,isPending:_e,isTransitioning:A},Oe=ue?e:void 0,we;typeof s=="function"?we=s(Z):we=[s,ue?"active":null,_e?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let je=typeof a=="function"?a(Z):a;return P.createElement(qg,{...m,"aria-current":Oe,className:we,ref:_,style:je,to:c,viewTransition:f},typeof p=="function"?p(Z):p)});TC.displayName="NavLink";var RC=P.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:l,state:a,method:c=Cl,action:f,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:v,...w},R)=>{let k=OC(),O=LC(f,{relative:m}),A=c.toLowerCase()==="get"?"get":"post",L=typeof f=="string"&&Kg.test(f),z=W=>{if(p&&p(W),W.defaultPrevented)return;W.preventDefault();let ne=W.nativeEvent.submitter,ue=(ne==null?void 0:ne.getAttribute("formmethod"))||c;k(ne||W.currentTarget,{fetcherKey:e,method:ue,navigate:n,replace:l,state:a,relative:m,preventScrollReset:_,viewTransition:v})};return P.createElement("form",{ref:R,method:A,action:O,onSubmit:s?p:z,...w,"data-discover":!L&&r==="render"?"true":void 0})});RC.displayName="Form";function NC(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qg(r){let e=P.useContext(Si);return Pe(e,NC(r)),e}function PC(r,{target:e,replace:n,state:s,preventScrollReset:l,relative:a,viewTransition:c}={}){let f=qs(),p=Tn(),m=Qs(r,{relative:a});return P.useCallback(_=>{if(aC(_,e)){_.preventDefault();let v=n!==void 0?n:Ms(p)===Ms(m);f(r,{replace:v,state:s,preventScrollReset:l,relative:a,viewTransition:c})}},[p,f,m,n,s,e,r,l,a,c])}var xC=0,AC=()=>`__${String(++xC)}__`;function OC(){let{router:r}=Qg("useSubmit"),{basename:e}=P.useContext(Gt),n=JE();return P.useCallback(async(s,l={})=>{let{action:a,method:c,encType:f,formData:p,body:m}=dC(s,e);if(l.navigate===!1){let _=l.fetcherKey||AC();await r.fetch(_,n,l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||f,flushSync:l.flushSync})}else await r.navigate(l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||f,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,n])}function LC(r,{relative:e}={}){let{basename:n}=P.useContext(Gt),s=P.useContext(rn);Pe(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),a={...Qs(r||".",{relative:e})},c=Tn();if(r==null){a.search=c.search;let f=new URLSearchParams(a.search),p=f.getAll("index");if(p.some(_=>_==="")){f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let _=f.toString();a.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:wn([n,a.pathname])),Ms(a)}function DC(r,e={}){let n=P.useContext(Ug);Pe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Qg("useViewTransitionState"),l=Qs(r,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Cn(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=Cn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Pl(l.pathname,c)!=null||Pl(l.pathname,a)!=null}new TextEncoder;const MC=()=>{};var Cm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(r,e){if(!r)throw ki(e)},ki=function(r){return new Error("Firebase Database ("+Yg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},bC=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const a=r[n++];e[s++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=r[n++],c=r[n++],f=r[n++],p=((l&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(a&63)<<6|c&63)}}return e.join("")},hd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const a=r[l],c=l+1<r.length,f=c?r[l+1]:0,p=l+2<r.length,m=p?r[l+2]:0,_=a>>2,v=(a&3)<<4|f>>4;let w=(f&15)<<2|m>>6,R=m&63;p||(R=64,c||(w=64)),s.push(n[_],n[v],n[w],n[R])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Jg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):bC(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const a=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const m=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,a==null||f==null||m==null||v==null)throw new FC;const w=a<<2|f>>4;if(s.push(w),m!==64){const R=f<<4&240|m>>2;if(s.push(R),v!==64){const k=m<<6&192|v;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class FC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xg=function(r){const e=Jg(r);return hd.encodeByteArray(e,!0)},xl=function(r){return Xg(r).replace(/\./g,"")},Al=function(r){try{return hd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(r){return Zg(void 0,r)}function Zg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jC(n)||(r[n]=Zg(r[n],e[n]));return r}function jC(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=()=>zC().__FIREBASE_DEFAULTS__,BC=()=>{if(typeof process>"u"||typeof Cm>"u")return;const r=Cm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},VC=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Al(r[1]);return e&&JSON.parse(e)},fd=()=>{try{return MC()||WC()||BC()||VC()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},e_=r=>{var e,n;return(n=(e=fd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},HC=r=>{const e=e_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},t_=()=>{var r;return(r=fd())===null||r===void 0?void 0:r.config},n_=r=>{var e;return(e=fd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[xl(JSON.stringify(n)),xl(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function GC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KC(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function r_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qC(){const r=lt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function QC(){return Yg.NODE_ADMIN===!0}function YC(){try{return typeof indexedDB=="object"}catch{return!1}}function JC(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var a;e(((a=l.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="FirebaseError";class sr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=XC,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,a=this.errors[e],c=a?ZC(a,s):"Error",f=`${this.serviceName}: ${c} (${l}).`;return new sr(l,f,s)}}function ZC(r,e){return r.replace(e0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(r){return JSON.parse(r)}function Qe(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=function(r){let e={},n={},s={},l="";try{const a=r.split(".");e=bs(Al(a[0])||""),n=bs(Al(a[1])||""),l=a[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},t0=function(r){const e=i_(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},n0=function(r){const e=i_(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function mi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Mc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ol(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Ir(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const a=r[l],c=e[l];if(Sm(a)&&Sm(c)){if(!Ir(a,c))return!1}else if(a!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Sm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ks(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,a]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(a)}}),e}function Ts(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const w=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],a=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,_;for(let v=0;v<80;v++){v<40?v<20?(m=f^a&(c^f),_=1518500249):(m=a^c^f,_=1859775393):v<60?(m=a&c|f&(a|c),_=2400959708):(m=a^c^f,_=3395469782);const w=(l<<5|l>>>27)+m+p+_+s[v]&4294967295;p=f,f=c,c=(a<<30|a>>>2)&4294967295,a=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const a=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(a[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}else for(;l<n;)if(a[c]=e[l],++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[l]>>a&255,++s;return e}}function i0(r,e){const n=new s0(r,e);return n.subscribe.bind(n)}class s0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");o0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=_c),l.error===void 0&&(l.error=_c),l.complete===void 0&&(l.complete=_c);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o0(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function _c(){}function ea(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const a=l-55296;s++,j(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(a<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},ta=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(r){return r&&r._delegate?r._delegate:r}class kr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ys;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(l)return null;throw a}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c0(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:l});s.resolve(a)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);s===f&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(l,a);const c=this.instances.get(l);return c&&e(c,l),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:u0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u0(r){return r===Er?void 0:r}function c0(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new a0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ve||(ve={}));const h0={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},f0=ve.INFO,p0={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},m0=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=p0[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=f0,this._logHandler=m0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const g0=(r,e)=>e.some(n=>r instanceof n);let Im,km;function _0(){return Im||(Im=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v0(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const s_=new WeakMap,bc=new WeakMap,o_=new WeakMap,vc=new WeakMap,gd=new WeakMap;function y0(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{n(Xn(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&s_.set(n,r)}).catch(()=>{}),gd.set(e,r),e}function w0(r){if(bc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});bc.set(r,e)}let Fc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return bc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||o_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function E0(r){Fc=r(Fc)}function C0(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(yc(this),e,...n);return o_.set(s,e.sort?e.sort():[e]),Xn(s)}:v0().includes(r)?function(...e){return r.apply(yc(this),e),Xn(s_.get(this))}:function(...e){return Xn(r.apply(yc(this),e))}}function S0(r){return typeof r=="function"?C0(r):(r instanceof IDBTransaction&&w0(r),g0(r,_0())?new Proxy(r,Fc):r)}function Xn(r){if(r instanceof IDBRequest)return y0(r);if(vc.has(r))return vc.get(r);const e=S0(r);return e!==r&&(vc.set(r,e),gd.set(e,r)),e}const yc=r=>gd.get(r);function I0(r,e,{blocked:n,upgrade:s,blocking:l,terminated:a}={}){const c=indexedDB.open(r,e),f=Xn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Xn(c.result),p.oldVersion,p.newVersion,Xn(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),l&&p.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const k0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],wc=new Map;function Tm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=T0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||k0.includes(n)))return;const a=async function(c,...f){const p=this.transaction(c,l?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(f.shift())),(await Promise.all([m[n](...f),l&&p.done]))[0]};return wc.set(e,a),a}E0(r=>({...r,get:(e,n,s)=>Tm(e,n)||r.get(e,n,s),has:(e,n)=>!!Tm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function N0(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",Rm="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new md("@firebase/app"),P0="@firebase/app-compat",x0="@firebase/analytics-compat",A0="@firebase/analytics",O0="@firebase/app-check-compat",L0="@firebase/app-check",D0="@firebase/auth",M0="@firebase/auth-compat",b0="@firebase/database",F0="@firebase/data-connect",U0="@firebase/database-compat",j0="@firebase/functions",z0="@firebase/functions-compat",W0="@firebase/installations",B0="@firebase/installations-compat",V0="@firebase/messaging",H0="@firebase/messaging-compat",$0="@firebase/performance",G0="@firebase/performance-compat",K0="@firebase/remote-config",q0="@firebase/remote-config-compat",Q0="@firebase/storage",Y0="@firebase/storage-compat",J0="@firebase/firestore",X0="@firebase/vertexai",Z0="@firebase/firestore-compat",eS="firebase",tS="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="[DEFAULT]",nS={[Uc]:"fire-core",[P0]:"fire-core-compat",[A0]:"fire-analytics",[x0]:"fire-analytics-compat",[L0]:"fire-app-check",[O0]:"fire-app-check-compat",[D0]:"fire-auth",[M0]:"fire-auth-compat",[b0]:"fire-rtdb",[F0]:"fire-data-connect",[U0]:"fire-rtdb-compat",[j0]:"fire-fn",[z0]:"fire-fn-compat",[W0]:"fire-iid",[B0]:"fire-iid-compat",[V0]:"fire-fcm",[H0]:"fire-fcm-compat",[$0]:"fire-perf",[G0]:"fire-perf-compat",[K0]:"fire-rc",[q0]:"fire-rc-compat",[Q0]:"fire-gcs",[Y0]:"fire-gcs-compat",[J0]:"fire-fst",[Z0]:"fire-fst-compat",[X0]:"fire-vertex","fire-js":"fire-js",[eS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map,rS=new Map,zc=new Map;function Nm(r,e){try{r.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function gi(r){const e=r.name;if(zc.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,r);for(const n of Ll.values())Nm(n,r);for(const n of rS.values())Nm(n,r);return!0}function _d(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function zt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new Js("app","Firebase",iS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=tS;function l_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Zn.create("bad-app-name",{appName:String(l)});if(n||(n=t_()),!n)throw Zn.create("no-options");const a=Ll.get(l);if(a){if(Ir(n,a.options)&&Ir(s,a.config))return a;throw Zn.create("duplicate-app",{appName:l})}const c=new d0(l);for(const p of zc.values())c.addComponent(p);const f=new sS(n,s,c);return Ll.set(l,f),f}function a_(r=jc){const e=Ll.get(r);if(!e&&r===jc&&t_())return l_();if(!e)throw Zn.create("no-app",{appName:r});return e}function er(r,e,n){var s;let l=(s=nS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const a=l.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${l}" with version "${e}":`];a&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(f.join(" "));return}gi(new kr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firebase-heartbeat-database",lS=1,Fs="firebase-heartbeat-store";let Ec=null;function u_(){return Ec||(Ec=I0(oS,lS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Fs)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zn.create("idb-open",{originalErrorMessage:r.message})})),Ec}async function aS(r){try{const n=(await u_()).transaction(Fs),s=await n.objectStore(Fs).get(c_(r));return await n.done,s}catch(e){if(e instanceof sr)Sn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function Pm(r,e){try{const s=(await u_()).transaction(Fs,"readwrite");await s.objectStore(Fs).put(e,c_(r)),await s.done}catch(n){if(n instanceof sr)Sn.warn(n.message);else{const s=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(s.message)}}}function c_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=1024,cS=30;class dS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:l}),this._heartbeatsCache.heartbeats.length>cS){const c=pS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xm(),{heartbeatsToSend:s,unsentEntries:l}=hS(this._heartbeatsCache.heartbeats),a=xl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Sn.warn(n),""}}}function xm(){return new Date().toISOString().substring(0,10)}function hS(r,e=uS){const n=[];let s=r.slice();for(const l of r){const a=n.find(c=>c.agent===l.agent);if(a){if(a.dates.push(l.date),Am(n)>e){a.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Am(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YC()?JC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Am(r){return xl(JSON.stringify({version:2,heartbeats:r})).length}function pS(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(r){gi(new kr("platform-logger",e=>new R0(e),"PRIVATE")),gi(new kr("heartbeat",e=>new dS(e),"PRIVATE")),er(Uc,Rm,r),er(Uc,Rm,"esm2017"),er("fire-js","")}mS("");function vd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function d_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gS=d_,h_=new Js("auth","Firebase",d_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new md("@firebase/auth");function _S(r,...e){Dl.logLevel<=ve.WARN&&Dl.warn(`Auth (${Ri}): ${r}`,...e)}function Il(r,...e){Dl.logLevel<=ve.ERROR&&Dl.error(`Auth (${Ri}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(r,...e){throw yd(r,...e)}function tn(r,...e){return yd(r,...e)}function f_(r,e,n){const s=Object.assign(Object.assign({},gS()),{[e]:n});return new Js("auth","Firebase",s).create(e,{appName:r.name})}function tr(r){return f_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return h_.create(r,...e)}function X(r,e,...n){if(!r)throw yd(e,...n)}function gn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Il(e),new Error(e)}function In(r,e){r||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function vS(){return Om()==="http:"||Om()==="https:"}function Om(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||KC()||"connection"in navigator)?navigator.onLine:!0}function wS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=pd()||r_()}get(){return yS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(r,e){In(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new Xs(3e4,6e4);function Or(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function or(r,e,n,s,l={}){return m_(r,l,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const f=Ti(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},a);return GC()||(m.referrerPolicy="no-referrer"),p_.fetch()(g_(r,r.config.apiHost,n,f),m)})}async function m_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},ES),e);try{const l=new IS(r),a=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw vl(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw vl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw vl(r,"user-disabled",c);const _=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw f_(r,_,m);Ht(r,_)}}catch(l){if(l instanceof sr)throw l;Ht(r,"network-request-failed",{message:String(l)})}}async function na(r,e,n,s,l={}){const a=await or(r,e,n,s,l);return"mfaPendingCredential"in a&&Ht(r,"multi-factor-auth-required",{_serverResponse:a}),a}function g_(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?wd(r.config,l):`${r.config.apiScheme}://${l}`}function SS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),CS.get())})}}function vl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=tn(r,e,s);return l.customData._tokenResponse=n,l}function Lm(r){return r!==void 0&&r.enterprise!==void 0}class kS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function TS(r,e){return or(r,"GET","/v2/recaptchaConfig",Or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(r,e){return or(r,"POST","/v1/accounts:delete",e)}async function __(r,e){return or(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NS(r,e=!1){const n=at(r),s=await n.getIdToken(e),l=Ed(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const a=typeof l.firebase=="object"?l.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:l,token:s,authTime:Ps(Cc(l.auth_time)),issuedAtTime:Ps(Cc(l.iat)),expirationTime:Ps(Cc(l.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Cc(r){return Number(r)*1e3}function Ed(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const l=Al(n);return l?JSON.parse(l):(Il("Failed to decode base64 JWT payload"),null)}catch(l){return Il("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Dm(r){const e=Ed(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sr&&PS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function PS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Us(r,__(n,{idToken:s}));X(l==null?void 0:l.users.length,n,"internal-error");const a=l.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?v_(a.providerUserInfo):[],f=OS(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(f!=null&&f.length),_=p?m:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new Bc(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(r,v)}async function AS(r){const e=at(r);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OS(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function v_(r){return r.map(e=>{var{providerId:n}=e,s=vd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(r,e){const n=await m_(r,{},async()=>{const s=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:a}=r.config,c=g_(r,l,"/v1/token",`key=${a}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",p_.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DS(r,e){return or(r,"POST","/v2/accounts:revokeToken",Or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Dm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:a}=await LS(e,n);this.updateTokensAndExpiration(s,l,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:a}=n,c=new ui;return s&&(X(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),a&&(X(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,a=vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Bc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NS(this,e)}reload(){return AS(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await Us(this,RS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,a,c,f,p,m,_;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(l=n.email)!==null&&l!==void 0?l:void 0,R=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,k=(c=n.photoURL)!==null&&c!==void 0?c:void 0,O=(f=n.tenantId)!==null&&f!==void 0?f:void 0,A=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,L=(m=n.createdAt)!==null&&m!==void 0?m:void 0,z=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:W,emailVerified:ne,isAnonymous:ue,providerData:_e,stsTokenManager:Z}=n;X(W&&Z,e,"internal-error");const Oe=ui.fromJSON(this.name,Z);X(typeof W=="string",e,"internal-error"),Gn(v,e.name),Gn(w,e.name),X(typeof ne=="boolean",e,"internal-error"),X(typeof ue=="boolean",e,"internal-error"),Gn(R,e.name),Gn(k,e.name),Gn(O,e.name),Gn(A,e.name),Gn(L,e.name),Gn(z,e.name);const we=new _n({uid:W,auth:e,email:w,emailVerified:ne,displayName:v,isAnonymous:ue,photoURL:k,phoneNumber:R,tenantId:O,stsTokenManager:Oe,createdAt:L,lastLoginAt:z});return _e&&Array.isArray(_e)&&(we.providerData=_e.map(je=>Object.assign({},je))),A&&(we._redirectEventId=A),we}static async _fromIdTokenResponse(e,n,s=!1){const l=new ui;l.updateFromServerResponse(n);const a=new _n({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Ml(a),a}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const a=l.providerUserInfo!==void 0?v_(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(a!=null&&a.length),f=new ui;f.updateFromIdToken(s);const p=new _n({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:c}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:a,metadata:new Bc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Map;function vn(r){In(r instanceof Function,"Expected a class definition");let e=Mm.get(r);return e?(In(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Mm.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}y_.type="NONE";const bm=y_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(r,e,n){return`firebase:${r}:${e}:${n}`}class ci{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:a}=this.auth;this.fullUserKey=kl(this.userKey,l.apiKey,a),this.fullPersistenceKey=kl("persistence",l.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ci(vn(bm),e,s);const l=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=l[0]||vn(bm);const c=kl(s,e.config.apiKey,e.name);let f=null;for(const m of n)try{const _=await m._get(c);if(_){const v=_n._fromJSON(e,_);m!==a&&(f=v),a=m;break}}catch{}const p=l.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new ci(a,e,s):(a=p[0],f&&await a._set(c,f.toJSON()),await Promise.all(n.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new ci(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k_(e))return"Blackberry";if(T_(e))return"Webos";if(E_(e))return"Safari";if((e.includes("chrome/")||C_(e))&&!e.includes("edge/"))return"Chrome";if(I_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function w_(r=lt()){return/firefox\//i.test(r)}function E_(r=lt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C_(r=lt()){return/crios\//i.test(r)}function S_(r=lt()){return/iemobile/i.test(r)}function I_(r=lt()){return/android/i.test(r)}function k_(r=lt()){return/blackberry/i.test(r)}function T_(r=lt()){return/webos/i.test(r)}function Cd(r=lt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function MS(r=lt()){var e;return Cd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bS(){return qC()&&document.documentMode===10}function R_(r=lt()){return Cd(r)||I_(r)||T_(r)||k_(r)||/windows phone/i.test(r)||S_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(r,e=[]){let n;switch(r){case"Browser":n=Fm(lt());break;case"Worker":n=`${Fm(lt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,f)=>{try{const p=e(a);c(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(r,e={}){return or(r,"GET","/v2/passwordPolicy",Or(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=6;class zS{constructor(e){var n,s,l,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:jS,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,a,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Um(this),this.idTokenSubscription=new Um(this),this.beforeStateQueue=new FS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await __(this,{idToken:e}),s=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(l=p.user,a=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(tr(this));const n=e?at(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await US(this),n=new zS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await DS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{c||a(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_S(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(r){return at(r)}class Um{constructor(e){this.auth=e,this.observer=null,this.addObserver=i0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BS(r){ra=r}function P_(r){return ra.loadJS(r)}function VS(){return ra.recaptchaEnterpriseScript}function HS(){return ra.gapiScript}function $S(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class GS{constructor(){this.enterprise=new KS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qS="recaptcha-enterprise",x_="NO_RECAPTCHA";class QS{constructor(e){this.type=qS,this.auth=Ni(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,f)=>{TS(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const m=new kS(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(p=>{f(p)})})}function l(a,c,f){const p=window.grecaptcha;Lm(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(x_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GS().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(f=>{if(!n&&Lm(window.grecaptcha))l(f,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=VS();p.length!==0&&(p+=f),P_(p).then(()=>{l(f,a,c)}).catch(m=>{c(m)})}}).catch(f=>{c(f)})})}}async function jm(r,e,n,s=!1,l=!1){const a=new QS(r);let c;if(l)c=x_;else try{c=await a.verify(n)}catch{c=await a.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,m=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function zm(r,e,n,s,l){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await jm(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await jm(r,e,n,n==="getOobCode");return s(r,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(r,e){const n=_d(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),a=n.getOptions();if(Ir(a,e??{}))return l;Ht(l,"already-initialized")}return n.initialize({options:e})}function JS(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function XS(r,e,n){const s=Ni(r);X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,a=A_(e),{host:c,port:f}=ZS(e),p=f===null?"":`:${f}`,m={url:`${a}//${c}${p}/`},_=Object.freeze({host:c,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){X(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),X(Ir(m,s.config.emulator)&&Ir(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,eI()}function A_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ZS(r){const e=A_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const a=l[1];return{host:a,port:Wm(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:Wm(c)}}}function Wm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function eI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function tI(r,e){return or(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(r,e){return na(r,"POST","/v1/accounts:signInWithPassword",Or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(r,e){return na(r,"POST","/v1/accounts:signInWithEmailLink",Or(r,e))}async function iI(r,e){return na(r,"POST","/v1/accounts:signInWithEmailLink",Or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Sd{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new js(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new js(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zm(e,n,"signInWithPassword",nI);case"emailLink":return rI(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zm(e,s,"signUpPassword",tI);case"emailLink":return iI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(r,e){return na(r,"POST","/v1/accounts:signInWithIdp",Or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="http://localhost";class Tr extends Sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,a=vd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new Tr(s,l);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:sI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lI(r){const e=ks(Ts(r)).link,n=e?ks(Ts(e)).deep_link_id:null,s=ks(Ts(r)).deep_link_id;return(s?ks(Ts(s)).link:null)||s||n||e||r}class Id{constructor(e){var n,s,l,a,c,f;const p=ks(Ts(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,_=(s=p.oobCode)!==null&&s!==void 0?s:null,v=oI((l=p.mode)!==null&&l!==void 0?l:null);X(m&&_&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=_,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=lI(e);try{return new Id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Id.parseLink(n);return X(s,"argument-error"),js._fromEmailAndCode(e,s.code,s.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends O_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Zs{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Zs{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Zs{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const a=await _n._fromIdTokenResponse(e,s,l),c=Bm(s);return new _i({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Bm(s);return new _i({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Bm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends sr{constructor(e,n,s,l){var a;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new bl(e,n,s,l)}}function L_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(r,a,e,s):a})}async function aI(r,e,n=!1){const s=await Us(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return _i._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(r,e,n=!1){const{auth:s}=r;if(zt(s.app))return Promise.reject(tr(s));const l="reauthenticate";try{const a=await Us(r,L_(s,l,e,r),n);X(a.idToken,s,"internal-error");const c=Ed(a.idToken);X(c,s,"internal-error");const{sub:f}=c;return X(r.uid===f,s,"user-mismatch"),_i._forOperation(r,l,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ht(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(r,e,n=!1){if(zt(r.app))return Promise.reject(tr(r));const s="signIn",l=await L_(r,s,e),a=await _i._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(a.user),a}async function cI(r,e){return D_(Ni(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(r){const e=Ni(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function M_(r,e,n){return zt(r.app)?Promise.reject(tr(r)):cI(at(r),Pi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&dI(r),s})}function hI(r,e,n,s){return at(r).onIdTokenChanged(e,n,s)}function fI(r,e,n){return at(r).beforeAuthStateChanged(e,n)}function pI(r,e,n,s){return at(r).onAuthStateChanged(e,n,s)}function b_(r){return at(r).signOut()}const Fl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fl,"1"),this.storage.removeItem(Fl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=1e3,gI=10;class U_ extends F_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);bS()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,gI):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},mI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}U_.type="LOCAL";const _I=U_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_ extends F_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j_.type="SESSION";const z_=j_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ia(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:a}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(c).map(async m=>m(n.origin,a)),p=await vI(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let a,c;return new Promise((f,p)=>{const m=kd("",20);l.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(w.data.response);break;default:clearTimeout(_),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function wI(r){nn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function EI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function SI(){return W_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="firebaseLocalStorageDb",II=1,Ul="firebaseLocalStorage",V_="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(r,e){return r.transaction([Ul],e?"readwrite":"readonly").objectStore(Ul)}function kI(){const r=indexedDB.deleteDatabase(B_);return new eo(r).toPromise()}function Vc(){const r=indexedDB.open(B_,II);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ul,{keyPath:V_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ul)?e(s):(s.close(),await kI(),e(await Vc()))})})}async function Vm(r,e,n){const s=sa(r,!0).put({[V_]:e,value:n});return new eo(s).toPromise()}async function TI(r,e){const n=sa(r,!1).get(e),s=await new eo(n).toPromise();return s===void 0?null:s.value}function Hm(r,e){const n=sa(r,!0).delete(e);return new eo(n).toPromise()}const RI=800,NI=3;class H_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>NI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(SI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EI(),!this.activeServiceWorker)return;this.sender=new yI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vc();return await Vm(e,Fl,"1"),await Hm(e,Fl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const a=sa(l,!1).getAll();return new eo(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:a}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H_.type="LOCAL";const PI=H_;new Xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(r,e){return e?vn(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends Sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AI(r){return D_(r.auth,new Td(r),r.bypassAuthState)}function OI(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),uI(n,new Td(r),r.bypassAuthState)}async function LI(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),aI(n,new Td(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,s,l,a=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AI;case"linkViaPopup":case"linkViaRedirect":return LI;case"reauthViaPopup":case"reauthViaRedirect":return OI;default:Ht(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new Xs(2e3,1e4);class li extends $_{constructor(e,n,s,l,a){super(e,n,l,a),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DI.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="pendingRedirect",Tl=new Map;class bI extends $_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const s=await FI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FI(r,e){const n=zI(e),s=jI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function UI(r,e){Tl.set(r._key(),e)}function jI(r){return vn(r._redirectPersistence)}function zI(r){return kl(MI,r.config.apiKey,r.name)}async function WI(r,e,n=!1){if(zt(r.app))return Promise.reject(tr(r));const s=Ni(r),l=xI(s,e),c=await new bI(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=10*60*1e3;class VI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!G_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BI&&this.cachedEventUids.clear(),this.cachedEventUids.has($m(e))}saveEventToCache(e){this.cachedEventUids.add($m(e)),this.lastProcessedEventTime=Date.now()}}function $m(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function G_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(r,e={}){return or(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KI=/^https?/;async function qI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await $I(r);for(const n of e)try{if(QI(n))return}catch{}Ht(r,"unauthorized-domain")}function QI(r){const e=Wc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!KI.test(n))return!1;if(GI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new Xs(3e4,6e4);function Gm(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function JI(r){return new Promise((e,n)=>{var s,l,a;function c(){Gm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gm(),n(tn(r,"network-request-failed"))},timeout:YI.get()})}if(!((l=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((a=nn().gapi)===null||a===void 0)&&a.load)c();else{const f=$S("iframefcb");return nn()[f]=()=>{gapi.load?c():n(tn(r,"network-request-failed"))},P_(`${HS()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function XI(r){return Rl=Rl||JI(r),Rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new Xs(5e3,15e3),ek="__/auth/iframe",tk="emulator/auth/iframe",nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ik(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?wd(e,tk):`https://${r.config.authDomain}/${ek}`,s={apiKey:e.apiKey,appName:r.name,v:Ri},l=rk.get(r.config.apiHost);l&&(s.eid=l);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Ti(s).slice(1)}`}async function sk(r){const e=await XI(r),n=nn().gapi;return X(n,r,"internal-error"),e.open({where:document.body,url:ik(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nk,dontclear:!0},s=>new Promise(async(l,a)=>{await s.restyle({setHideOnLeave:!1});const c=tn(r,"network-request-failed"),f=nn().setTimeout(()=>{a(c)},ZI.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lk=500,ak=600,uk="_blank",ck="http://localhost";class Km{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dk(r,e,n,s=lk,l=ak){const a=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},ok),{width:s.toString(),height:l.toString(),top:a,left:c}),m=lt().toLowerCase();n&&(f=C_(m)?uk:n),w_(m)&&(e=e||ck,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[R,k])=>`${w}${R}=${k},`,"");if(MS(m)&&f!=="_self")return hk(e||"",f),new Km(null);const v=window.open(e||"",f,_);X(v,r,"popup-blocked");try{v.focus()}catch{}return new Km(v)}function hk(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="__/auth/handler",pk="emulator/auth/handler",mk=encodeURIComponent("fac");async function qm(r,e,n,s,l,a){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ri,eventId:l};if(e instanceof O_){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Mc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries({}))c[_]=v}if(e instanceof Zs){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(c.scopes=_.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const p=await r._getAppCheckToken(),m=p?`#${mk}=${encodeURIComponent(p)}`:"";return`${gk(r)}?${Ti(f).slice(1)}${m}`}function gk({config:r}){return r.emulator?wd(r,pk):`https://${r.authDomain}/${fk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class _k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z_,this._completeRedirectFn=WI,this._overrideRedirectResult=UI}async _openPopup(e,n,s,l){var a;In((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await qm(e,n,s,Wc(),l);return dk(e,c,kd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const a=await qm(e,n,s,Wc(),l);return wI(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:a}=this.eventManagers[n];return l?Promise.resolve(l):(In(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sk(e),s=new VI(e);return n.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},l=>{var a;const c=(a=l==null?void 0:l[0])===null||a===void 0?void 0:a[Sc];c!==void 0&&n(!!c),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return R_()||E_()||Cd()}}const vk=_k;var Qm="@firebase/auth",Ym="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ek(r){gi(new kr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;X(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N_(r)},m=new WS(s,l,a,p);return JS(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gi(new kr("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(s=>new yk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Qm,Ym,wk(r)),er(Qm,Ym,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=5*60,Sk=n_("authIdTokenMaxAge")||Ck;let Jm=null;const Ik=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Sk)return;const l=n==null?void 0:n.token;Jm!==l&&(Jm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function K_(r=a_()){const e=_d(r,"auth");if(e.isInitialized())return e.getImmediate();const n=YS(r,{popupRedirectResolver:vk,persistence:[PI,_I,z_]}),s=n_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=Ik(a.toString());fI(n,c,()=>c(n.currentUser)),hI(n,f=>c(f))}}const l=e_("auth");return l&&XS(n,`http://${l}`),n}function kk(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}BS({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const a=tn("internal-error");a.customData=l,n(a)},s.type="text/javascript",s.charset="UTF-8",kk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ek("Browser");var Tk="firebase",Rk="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(Tk,Rk,"app");var Xm={};const Zm="@firebase/database",eg="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q_="";function Nk(r){q_=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pk(e)}}catch{}return new xk},Sr=Q_("localStorage"),Ak=Q_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new md("@firebase/database"),Ok=function(){let r=1;return function(){return r++}}(),Y_=function(r){const e=l0(r),n=new r0;n.update(e);const s=n.digest();return hd.encodeByteArray(s)},to=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=to.apply(null,s):typeof s=="object"?e+=Qe(s):e+=s,e+=" "}return e};let xs=null,tg=!0;const Lk=function(r,e){j(!0,"Can't turn on custom loggers persistently."),hi.logLevel=ve.VERBOSE,xs=hi.log.bind(hi)},Xe=function(...r){if(tg===!0&&(tg=!1,xs===null&&Ak.get("logging_enabled")===!0&&Lk()),xs){const e=to.apply(null,r);xs(e)}},no=function(r){return function(...e){Xe(r,...e)}},Hc=function(...r){const e="FIREBASE INTERNAL ERROR: "+to(...r);hi.error(e)},kn=function(...r){const e=`FIREBASE FATAL ERROR: ${to(...r)}`;throw hi.error(e),new Error(e)},ot=function(...r){const e="FIREBASE WARNING: "+to(...r);hi.warn(e)},Dk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},Mk=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vi="[MIN_NAME]",Rr="[MAX_NAME]",Lr=function(r,e){if(r===e)return 0;if(r===vi||e===Rr)return-1;if(e===vi||r===Rr)return 1;{const n=ng(r),s=ng(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},bk=function(r,e){return r===e?0:r<e?-1:1},Es=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Qe(e))},Nd=function(r){if(typeof r!="object"||r===null)return Qe(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Qe(e[s]),n+=":",n+=Nd(r[e[s]]);return n+="}",n},J_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Ze(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const X_=function(r){j(!Rd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,a,c,f,p;r===0?(a=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=f+s,c=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(a=0,c=Math.round(r/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(l?1:0),m.reverse();const _=m.join("");let v="";for(p=0;p<64;p+=8){let w=parseInt(_.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),v=v+w}return v.toLowerCase()},Fk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Uk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jk(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const zk=new RegExp("^-?(0*)\\d{1,10}$"),Wk=-2147483648,Bk=2147483647,ng=function(r){if(zk.test(r)){const e=Number(r);if(e>=Wk&&e<=Bk)return e}return null},xi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},Vk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},As=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class Nl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="5",Z_="v",ev="s",tv="r",nv="f",rv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iv="ls",sv="p",$c="ac",ov="websocket",lv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n,s,l,a=!1,c="",f=!1,p=!1,m=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Gk(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function uv(r,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===ov)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===lv)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gk(r)&&(n.ns=r.namespace);const l=[];return Ze(n,(a,c)=>{l.push(a+"="+c)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return UC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={},kc={};function xd(r){const e=r.toString();return Ic[e]||(Ic[e]=new Kk),Ic[e]}function qk(r,e){const n=r.toString();return kc[n]||(kc[n]=e()),kc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&xi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="start",Yk="close",Jk="pLPCommand",Xk="pRTLPCB",cv="id",dv="pw",hv="ser",Zk="cb",eT="seg",tT="ts",nT="d",rT="dframe",fv=1870,pv=30,iT=fv-pv,sT=25e3,oT=3e4;class ai{constructor(e,n,s,l,a,c,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=no(e),this.stats_=xd(n),this.urlFn=p=>(this.appCheckToken&&(p[$c]=this.appCheckToken),uv(n,lv,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oT)),Mk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ad((...a)=>{const[c,f,p,m,_]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===rg)this.id=f,this.password=p;else if(c===Yk)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,f]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[rg]="t",s[hv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Zk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Z_]=Pd,this.transportSessionId&&(s[ev]=this.transportSessionId),this.lastSessionId&&(s[iv]=this.lastSessionId),this.applicationId&&(s[sv]=this.applicationId),this.appCheckToken&&(s[$c]=this.appCheckToken),typeof location<"u"&&location.hostname&&rv.test(location.hostname)&&(s[tv]=nv);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ai.forceAllow_=!0}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){return ai.forceAllow_?!0:!ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fk()&&!Uk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Xg(n),l=J_(s,iT);for(let a=0;a<l.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[rT]="t",s[cv]=e,s[dv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ad{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ok(),window[Jk+this.uniqueCallbackIdentifier]=e,window[Xk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ad.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){Xe("frame writing exception"),f.stack&&Xe(f.stack),Xe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cv]=this.myID,e[dv]=this.myPW,e[hv]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pv+s.length<=fv;){const c=this.pendingSegs.shift();s=s+"&"+eT+l+"="+c.seg+"&"+tT+l+"="+c.ts+"&"+nT+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(sT)),a=()=>{clearTimeout(l),s()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=16384,aT=45e3;let jl=null;typeof MozWebSocket<"u"?jl=MozWebSocket:typeof WebSocket<"u"&&(jl=WebSocket);class Wt{constructor(e,n,s,l,a,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=no(this.connId),this.stats_=xd(n),this.connURL=Wt.connectionURL_(n,c,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,a){const c={};return c[Z_]=Pd,typeof location<"u"&&location.hostname&&rv.test(location.hostname)&&(c[tv]=nv),n&&(c[ev]=n),s&&(c[iv]=s),l&&(c[$c]=l),a&&(c[sv]=a),uv(e,ov,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;QC(),this.mySock=new jl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&jl!==null&&!Wt.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=bs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=J_(n,lT);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{static get ALL_TRANSPORTS(){return[ai,Wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Wt&&Wt.isAvailable();let s=n&&!Wt.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Wt];else{const l=this.transports_=[];for(const a of zs.ALL_TRANSPORTS)a&&a.isAvailable()&&l.push(a);zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=6e4,cT=5e3,dT=10*1024,hT=100*1024,Tc="t",ig="d",fT="s",sg="r",pT="e",og="o",lg="a",ag="n",ug="p",mT="h";class gT{constructor(e,n,s,l,a,c,f,p,m,_){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=a,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=no("c:"+this.id+":"),this.transportManager_=new zs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=As(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tc in e){const n=e[Tc];n===lg?this.upgradeIfSecondaryHealthy_():n===sg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===og&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Es("t",e),s=Es("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ug,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ag,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Es("t",e),s=Es("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Es(Tc,e);if(ig in e){const s=e[ig];if(n===mT){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===ag){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fT?this.onConnectionShutdown_(s):n===sg?this.onReset_(s):n===pT?Hc("Server Error: "+s):n===og?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pd!==s&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),As(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):As(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ug,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let a=0;a<l.length;a++)if(l[a].callback===n&&(!s||s===l[a].context)){l.splice(a,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends gv{static getInstance(){return new zl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=32,dg=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ye("")}function se(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function rr(r){return r.pieces_.length-r.pieceNum_}function Ie(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ye(r.pieces_,e)}function Od(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function _T(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ws(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function _v(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new ye(e,0)}function Me(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof ye)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ye(n,0)}function ae(r){return r.pieceNum_>=r.pieces_.length}function gt(r,e){const n=se(r),s=se(e);if(n===null)return e;if(n===s)return gt(Ie(r),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function vT(r,e){const n=Ws(r,0),s=Ws(e,0);for(let l=0;l<n.length&&l<s.length;l++){const a=Lr(n[l],s[l]);if(a!==0)return a}return n.length===s.length?0:n.length<s.length?-1:1}function Ld(r,e){if(rr(r)!==rr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function xt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(rr(r)>rr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class yT{constructor(e,n){this.errorPrefix_=n,this.parts_=Ws(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ta(this.parts_[s]);vv(this)}}function wT(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=ta(e),vv(r)}function ET(r){const e=r.parts_.pop();r.byteLength_-=ta(e),r.parts_.length>0&&(r.byteLength_-=1)}function vv(r){if(r.byteLength_>dg)throw new Error(r.errorPrefix_+"has a key path longer than "+dg+" bytes ("+r.byteLength_+").");if(r.parts_.length>cg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cg+") or object contains a cycle "+Cr(r))}function Cr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends gv{static getInstance(){return new Dd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,CT=60*5*1e3,hg=30*1e3,ST=1.3,IT=3e4,kT="server_kill",fg=3;class En extends mv{constructor(e,n,s,l,a,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=En.nextPersistentConnectionId_++,this.log_=no("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=CT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,a={r:l,a:e,b:n};this.log_(Qe(a)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Ys,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,s,l){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(a,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const a={p:s},c="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,f=>{const p=f.d,m=f.s;En.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const s=mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||n0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=t0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const a=l.s,c=l.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const a={p:e},c="n";l&&(a.q=s,a.t=l),this.sendRequest(c,a)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const a={p:n,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,a){this.initConnection_();const c={p:n,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hc("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IT&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ST)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+En.nextConnectionId_++,a=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},m=function(v){j(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:m};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,w]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);c?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=w&&w.token,f=new gT(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,R=>{ot(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(kT)},a))}catch(v){this.log_("Failed to get token: "+v),c||(this.repoInfo_.nodeAdmin&&ot(v),p())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mc(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(a=>Nd(a)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ye(e).toString();let l;if(this.listens.has(s)){const a=this.listens.get(s);l=a.get(n),a.delete(n),a.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fg&&(this.reconnectDelay_=hg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+q_.replace(/\./g,"-")]=1,pd()?e["framework.cordova"]=1:r_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zl.getInstance().currentlyOnline();return Mc(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(vi,e),l=new oe(vi,n);return this.compare(s,l)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class yv extends oa{static get __EMPTY_NODE(){return yl}static set __EMPTY_NODE(e){yl=e}compare(e,n){return Lr(e.name,n.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Rr,yl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,yl)}toString(){return".key"}}const fi=new yv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,s,l,a=null){this.isReverse_=l,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,l,a){this.key=e,this.value=n,this.color=s??Ke.RED,this.left=l??_t.EMPTY_NODE,this.right=a??_t.EMPTY_NODE}copy(e,n,s,l,a){return new Ke(e??this.key,n??this.value,s??this.color,l??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const a=s(e,l.key);return a<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):a===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class TT{copy(e,n,s,l,a){return this}insert(e,n,s){return new Ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new TT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(r,e){return Lr(r.name,e.name)}function Md(r,e){return Lr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc;function NT(r){Gc=r}const wv=function(r){return typeof r=="number"?"number:"+X_(r):"string:"+r},Ev=function(r){if(r.isLeafNode()){const e=r.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else j(r===Gc||r.isEmpty(),"priority of unexpected type.");j(r===Gc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pg;class Ge{static set __childrenNodeConstructor(e){pg=e}static get __childrenNodeConstructor(){return pg}constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ev(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:se(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=X_(this.value_):e+=this.value_,this.lazyHash_=Y_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ge.VALUE_TYPE_ORDER.indexOf(n),a=Ge.VALUE_TYPE_ORDER.indexOf(s);return j(l>=0,"Unknown leaf type: "+n),j(a>=0,"Unknown leaf type: "+s),l===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cv,Sv;function PT(r){Cv=r}function xT(r){Sv=r}class AT extends oa{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),a=s.compareTo(l);return a===0?Lr(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Rr,new Ge("[PRIORITY-POST]",Sv))}makePost(e,n){const s=Cv(e);return new oe(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new AT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=Math.log(2);class LT{constructor(e){const n=a=>parseInt(Math.log(a)/OT,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wl=function(r,e,n,s){r.sort(e);const l=function(p,m){const _=m-p;let v,w;if(_===0)return null;if(_===1)return v=r[p],w=n?n(v):v,new Ke(w,v.node,Ke.BLACK,null,null);{const R=parseInt(_/2,10)+p,k=l(p,R),O=l(R+1,m);return v=r[R],w=n?n(v):v,new Ke(w,v.node,Ke.BLACK,k,O)}},a=function(p){let m=null,_=null,v=r.length;const w=function(k,O){const A=v-k,L=v;v-=k;const z=l(A+1,L),W=r[A],ne=n?n(W):W;R(new Ke(ne,W.node,O,null,z))},R=function(k){m?(m.left=k,m=k):(_=k,m=k)};for(let k=0;k<p.count;++k){const O=p.nextBitIsOne(),A=Math.pow(2,p.count-(k+1));O?w(A,Ke.BLACK):(w(A,Ke.BLACK),w(A,Ke.RED))}return _},c=new LT(r.length),f=a(c);return new _t(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc;const oi={};class yn{static get Default(){return j(oi&&be,"ChildrenNode.ts has not been loaded"),Rc=Rc||new yn({".priority":oi},{".priority":be}),Rc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){j(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const a=n.getIterator(oe.Wrap);let c=a.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let f;l?f=Wl(s,e.getCompare()):f=oi;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const _=Object.assign({},this.indexes_);return _[p]=f,new yn(_,m)}addToIndexes(e,n){const s=Ol(this.indexes_,(l,a)=>{const c=mi(this.indexSet_,a);if(j(c,"Missing index implementation for "+a),l===oi)if(c.isDefinedOn(e.node)){const f=[],p=n.getIterator(oe.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),Wl(f,c.getCompare())}else return oi;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new oe(e.name,f))),p.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ol(this.indexes_,l=>{if(l===oi)return l;{const a=n.get(e.name);return a?l.remove(new oe(e.name,a)):l}});return new yn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class ee{static get EMPTY_NODE(){return Ss||(Ss=new ee(new _t(Md),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ev(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ss:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let l,a;n.isEmpty()?(l=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?Ss:this.priorityNode_;return new ee(l,c,a)}}updateChild(e,n){const s=se(e);if(s===null)return n;{j(se(e)!==".priority"||rr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ie(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,a=!0;if(this.forEachChild(be,(c,f)=>{n[c]=f.val(e),s++,a&&ee.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):a=!1}),!e&&a&&l<2*s){const c=[];for(const f in n)c[f]=n[f];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wv(this.getPriority().val())+":"),this.forEachChild(be,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Y_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const a=l.getPredecessorKey(new oe(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,oe.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)<0;)l.getNext(),a=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)>0;)l.getNext(),a=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ro?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(be),l=n.getIterator(be);let a=s.getNext(),c=l.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=l.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DT extends ee{constructor(){super(new _t(Md),ee.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const ro=new DT;Object.defineProperties(oe,{MIN:{value:new oe(vi,ee.EMPTY_NODE)},MAX:{value:new oe(Rr,ro)}});yv.__EMPTY_NODE=ee.EMPTY_NODE;Ge.__childrenNodeConstructor=ee;NT(ro);xT(ro);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=!0;function qe(r,e=null){if(r===null)return ee.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ge(n,qe(e))}if(!(r instanceof Array)&&MT){const n=[];let s=!1;if(Ze(r,(c,f)=>{if(c.substring(0,1)!=="."){const p=qe(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new oe(c,p)))}}),n.length===0)return ee.EMPTY_NODE;const a=Wl(n,RT,c=>c.name,Md);if(s){const c=Wl(n,be.getCompare());return new ee(a,qe(e),new yn({".priority":c},{".priority":be}))}else return new ee(a,qe(e),yn.Default)}else{let n=ee.EMPTY_NODE;return Ze(r,(s,l)=>{if(sn(r,s)&&s.substring(0,1)!=="."){const a=qe(l);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(s,a))}}),n.updatePriority(qe(e))}}PT(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT extends oa{constructor(e){super(),this.indexPath_=e,j(!ae(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),a=s.compareTo(l);return a===0?Lr(e.name,n.name):a}makePost(e,n){const s=qe(e),l=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,l)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,ro);return new oe(Rr,e)}toString(){return Ws(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT extends oa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Lr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=qe(e);return new oe(n,s)}toString(){return".value"}}const UT=new FT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(r){return{type:"value",snapshotNode:r}}function yi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Bs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Vs(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function jT(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.index_=e}updateChild(e,n,s,l,a,c){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(Bs(n,f)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(yi(n,s)):c.trackChildChange(Vs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(l,a)=>{n.hasChild(l)||s.trackChildChange(Bs(l,a))}),n.isLeafNode()||n.forEachChild(be,(l,a)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(a)||s.trackChildChange(Vs(l,a,c))}else s.trackChildChange(yi(l,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.indexedFilter_=new bd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hs.getStartPost_(e),this.endPost_=Hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,a,c){return this.matches(new oe(n,s))||(s=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,a,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ee.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ee.EMPTY_NODE);const a=this;return n.forEachChild(be,(c,f)=>{a.matches(new oe(c,f))||(l=l.updateImmediateChild(c,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,a,c){return this.rangedFilter_.matches(new oe(n,s))||(s=ee.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,a,c):this.fullLimitUpdateChild_(e,n,s,a,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ee.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const f=a.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ee.EMPTY_NODE);let a;this.reverse_?a=l.getReverseIterator(this.index_):a=l.getIterator(this.index_);let c=0;for(;a.hasNext();){const f=a.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:l=l.updateImmediateChild(f.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,a){let c;if(this.reverse_){const v=this.index_.getCompare();c=(w,R)=>v(R,w)}else c=this.index_.getCompare();const f=e;j(f.numChildren()===this.limit_,"");const p=new oe(n,s),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),_=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:c(w,p);if(_&&!s.isEmpty()&&R>=0)return a!=null&&a.trackChildChange(Vs(n,s,v)),f.updateImmediateChild(n,s);{a!=null&&a.trackChildChange(Bs(n,v));const O=f.updateImmediateChild(n,ee.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(yi(w.name,w.node)),O.updateImmediateChild(w.name,w.node)):O}}else return s.isEmpty()?e:_&&c(m,p)>=0?(a!=null&&(a.trackChildChange(Bs(m.name,m.node)),a.trackChildChange(yi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(m.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vi}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Fd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WT(r){return r.loadsAllData()?new bd(r.getIndex()):r.hasLimit()?new zT(r):new Hs(r)}function mg(r){const e={};if(r.isDefault())return e;let n;if(r.index_===be?n="$priority":r.index_===UT?n="$value":r.index_===fi?n="$key":(j(r.index_ instanceof bT,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Qe(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function gg(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==be&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends mv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=no("p:rest:"),this.listens_={}}listen(e,n,s,l){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=Bl.getListenId_(e,s),f={};this.listens_[c]=f;const p=mg(e._queryParams);this.restRequest_(a+".json",p,(m,_)=>{let v=_;if(m===404&&(v=null,m=null),m===null&&this.onDataUpdate_(a,v,!1,s),mi(this.listens_,c)===f){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",l(w,null)}})}unlisten(e,n){const s=Bl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=mg(e._queryParams),s=e._path.toString(),l=new Ys;return this.restRequest_(s+".json",n,(a,c)=>{let f=c;a===404&&(f=null,a=null),a===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,a])=>{l&&l.accessToken&&(n.auth=l.accessToken),a&&a.token&&(n.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(n);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=bs(f.responseText)}catch{ot("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&ot("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){return{value:null,children:new Map}}function kv(r,e,n){if(ae(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=se(e);r.children.has(s)||r.children.set(s,Vl());const l=r.children.get(s);e=Ie(e),kv(l,e,n)}}function Kc(r,e,n){r.value!==null?n(e,r.value):VT(r,(s,l)=>{const a=new ye(e.toString()+"/"+s);Kc(l,a,n)})}function VT(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=10*1e3,$T=30*1e3,GT=5*60*1e3;class KT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new HT(e);const s=_g+($T-_g)*Math.random();As(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(l,a)=>{a>0&&sn(this.statsToReport_,l)&&(n[l]=a,s=!0)}),s&&this.server_.reportStats(n),As(this.reportStats_.bind(this),Math.floor(Math.random()*2*GT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bt||(Bt={}));function Ud(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Bt.ACK_USER_WRITE,this.source=Ud()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Hl(pe(),n,this.revert)}}else return j(se(this.path)===e,"operationForChild called for unrelated child."),new Hl(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.source=e,this.path=n,this.type=Bt.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new $s(this.source,pe()):new $s(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Bt.OVERWRITE}operationForChild(e){return ae(this.path)?new Nr(this.source,pe(),this.snap.getImmediateChild(e)):new Nr(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Bt.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new Nr(this.source,pe(),n.value):new wi(this.source,pe(),n)}else return j(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wi(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QT(r,e,n,s){const l=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(jT(c.childName,c.snapshotNode))}),Is(r,l,"child_removed",e,s,n),Is(r,l,"child_added",e,s,n),Is(r,l,"child_moved",a,s,n),Is(r,l,"child_changed",e,s,n),Is(r,l,"value",e,s,n),l}function Is(r,e,n,s,l,a){const c=s.filter(f=>f.type===n);c.sort((f,p)=>JT(r,f,p)),c.forEach(f=>{const p=YT(r,f,a);l.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,r.query_))})})}function YT(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function JT(r,e,n){if(e.childName==null||n.childName==null)throw ki("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),l=new oe(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(r,e){return{eventCache:r,serverCache:e}}function Os(r,e,n,s){return la(new Pr(e,n,s),r.serverCache)}function Tv(r,e,n,s){return la(r.eventCache,new Pr(e,n,s))}function qc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function xr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;const XT=()=>(Nc||(Nc=new _t(bk)),Nc);class Se{static fromObject(e){let n=new Se(null);return Ze(e,(s,l)=>{n=n.set(new ye(s),l)}),n}constructor(e,n=XT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(ae(e))return null;{const s=se(e),l=this.children.get(s);if(l!==null){const a=l.findRootMostMatchingPathAndValue(Ie(e),n);return a!=null?{path:Me(new ye(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(Ie(e)):new Se(null)}}set(e,n){if(ae(e))return new Se(n,this.children);{const s=se(e),a=(this.children.get(s)||new Se(null)).set(Ie(e),n),c=this.children.insert(s,a);return new Se(this.value,c)}}remove(e){if(ae(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const l=s.remove(Ie(e));let a;return l.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,l),this.value===null&&a.isEmpty()?new Se(null):new Se(this.value,a)}else return this}}get(e){if(ae(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(Ie(e)):null}}setTree(e,n){if(ae(e))return n;{const s=se(e),a=(this.children.get(s)||new Se(null)).setTree(Ie(e),n);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new Se(this.value,c)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,a)=>{s[l]=a.fold_(Me(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ae(e))return null;{const a=se(e),c=this.children.get(a);return c?c.findOnPath_(Ie(e),Me(n,a),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const l=se(e),a=this.children.get(l);return a?a.foreachOnPath_(Ie(e),Me(n,l),s):new Se(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new Se(null))}}function Ls(r,e,n){if(ae(e))return new Vt(new Se(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let a=s.value;const c=gt(l,e);return a=a.updateChild(c,n),new Vt(r.writeTree_.set(l,a))}else{const l=new Se(n),a=r.writeTree_.setTree(e,l);return new Vt(a)}}}function Qc(r,e,n){let s=r;return Ze(n,(l,a)=>{s=Ls(s,Me(e,l),a)}),s}function vg(r,e){if(ae(e))return Vt.empty();{const n=r.writeTree_.setTree(e,new Se(null));return new Vt(n)}}function Yc(r,e){return Dr(r,e)!=null}function Dr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(gt(n.path,e)):null}function yg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(s,l)=>{e.push(new oe(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new oe(s,l.value))}),e}function nr(r,e){if(ae(e))return r;{const n=Dr(r,e);return n!=null?new Vt(new Se(n)):new Vt(r.writeTree_.subtree(e))}}function Jc(r){return r.writeTree_.isEmpty()}function Ei(r,e){return Rv(pe(),r.writeTree_,e)}function Rv(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,a)=>{l===".priority"?(j(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):n=Rv(Me(r,l),a,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Me(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(r,e){return Av(e,r)}function ZT(r,e,n,s,l){j(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ls(r.visibleWrites,e,n)),r.lastWriteId=s}function eR(r,e,n,s){j(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Qc(r.visibleWrites,e,n),r.lastWriteId=s}function tR(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function nR(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,a=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=n&&rR(f,s.path)?l=!1:xt(s.path,f.path)&&(a=!0)),c--}if(l){if(a)return iR(r),!0;if(s.snap)r.visibleWrites=vg(r.visibleWrites,s.path);else{const f=s.children;Ze(f,p=>{r.visibleWrites=vg(r.visibleWrites,Me(s.path,p))})}return!0}else return!1}function rR(r,e){if(r.snap)return xt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&xt(Me(r.path,n),e))return!0;return!1}function iR(r){r.visibleWrites=Nv(r.allWrites,sR,pe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function sR(r){return r.visible}function Nv(r,e,n){let s=Vt.empty();for(let l=0;l<r.length;++l){const a=r[l];if(e(a)){const c=a.path;let f;if(a.snap)xt(n,c)?(f=gt(n,c),s=Ls(s,f,a.snap)):xt(c,n)&&(f=gt(c,n),s=Ls(s,pe(),a.snap.getChild(f)));else if(a.children){if(xt(n,c))f=gt(n,c),s=Qc(s,f,a.children);else if(xt(c,n))if(f=gt(c,n),ae(f))s=Qc(s,pe(),a.children);else{const p=mi(a.children,se(f));if(p){const m=p.getChild(Ie(f));s=Ls(s,pe(),m)}}}else throw ki("WriteRecord should have .snap or .children")}}return s}function Pv(r,e,n,s,l){if(!s&&!l){const a=Dr(r.visibleWrites,e);if(a!=null)return a;{const c=nr(r.visibleWrites,e);if(Jc(c))return n;if(n==null&&!Yc(c,pe()))return null;{const f=n||ee.EMPTY_NODE;return Ei(c,f)}}}else{const a=nr(r.visibleWrites,e);if(!l&&Jc(a))return n;if(!l&&n==null&&!Yc(a,pe()))return null;{const c=function(m){return(m.visible||l)&&(!s||!~s.indexOf(m.writeId))&&(xt(m.path,e)||xt(e,m.path))},f=Nv(r.allWrites,c,e),p=n||ee.EMPTY_NODE;return Ei(f,p)}}}function oR(r,e,n){let s=ee.EMPTY_NODE;const l=Dr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(be,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(n){const a=nr(r.visibleWrites,e);return n.forEachChild(be,(c,f)=>{const p=Ei(nr(a,new ye(c)),f);s=s.updateImmediateChild(c,p)}),yg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=nr(r.visibleWrites,e);return yg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function lR(r,e,n,s,l){j(s||l,"Either existingEventSnap or existingServerSnap must exist");const a=Me(e,n);if(Yc(r.visibleWrites,a))return null;{const c=nr(r.visibleWrites,a);return Jc(c)?l.getChild(n):Ei(c,l.getChild(n))}}function aR(r,e,n,s){const l=Me(e,n),a=Dr(r.visibleWrites,l);if(a!=null)return a;if(s.isCompleteForChild(n)){const c=nr(r.visibleWrites,l);return Ei(c,s.getNode().getImmediateChild(n))}else return null}function uR(r,e){return Dr(r.visibleWrites,e)}function cR(r,e,n,s,l,a,c){let f;const p=nr(r.visibleWrites,e),m=Dr(p,pe());if(m!=null)f=m;else if(n!=null)f=Ei(p,n);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const _=[],v=c.getCompare(),w=a?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let R=w.getNext();for(;R&&_.length<l;)v(R,s)!==0&&_.push(R),R=w.getNext();return _}else return[]}function dR(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function $l(r,e,n,s){return Pv(r.writeTree,r.treePath,e,n,s)}function Bd(r,e){return oR(r.writeTree,r.treePath,e)}function wg(r,e,n,s){return lR(r.writeTree,r.treePath,e,n,s)}function Gl(r,e){return uR(r.writeTree,Me(r.treePath,e))}function hR(r,e,n,s,l,a){return cR(r.writeTree,r.treePath,e,n,s,l,a)}function Vd(r,e,n){return aR(r.writeTree,r.treePath,e,n)}function xv(r,e){return Av(Me(r.treePath,e),r.writeTree)}function Av(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const a=l.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(s,Vs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(s,Bs(s,l.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(s,Vs(s,e.snapshotNode,l.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ov=new pR;class Hd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),a=hR(this.writes_,l,n,1,s,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(r){return{filter:r}}function gR(r,e){j(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function _R(r,e,n,s,l){const a=new fR;let c,f;if(n.type===Bt.OVERWRITE){const m=n;m.source.fromUser?c=Xc(r,e,m.path,m.snap,s,l,a):(j(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!ae(m.path),c=Kl(r,e,m.path,m.snap,s,l,f,a))}else if(n.type===Bt.MERGE){const m=n;m.source.fromUser?c=yR(r,e,m.path,m.children,s,l,a):(j(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),c=Zc(r,e,m.path,m.children,s,l,f,a))}else if(n.type===Bt.ACK_USER_WRITE){const m=n;m.revert?c=CR(r,e,m.path,s,l,a):c=wR(r,e,m.path,m.affectedTree,s,l,a)}else if(n.type===Bt.LISTEN_COMPLETE)c=ER(r,e,n.path,s,a);else throw ki("Unknown operation type: "+n.type);const p=a.getChanges();return vR(e,c,p),{viewCache:c,changes:p}}function vR(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=qc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&n.push(Iv(qc(e)))}}function Lv(r,e,n,s,l,a){const c=e.eventCache;if(Gl(s,n)!=null)return e;{let f,p;if(ae(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=xr(e),_=m instanceof ee?m:ee.EMPTY_NODE,v=Bd(s,_);f=r.filter.updateFullNode(e.eventCache.getNode(),v,a)}else{const m=$l(s,xr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=se(n);if(m===".priority"){j(rr(n)===1,"Can't have a priority with additional path components");const _=c.getNode();p=e.serverCache.getNode();const v=wg(s,n,_,p);v!=null?f=r.filter.updatePriority(_,v):f=c.getNode()}else{const _=Ie(n);let v;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const w=wg(s,n,c.getNode(),p);w!=null?v=c.getNode().getImmediateChild(m).updateChild(_,w):v=c.getNode().getImmediateChild(m)}else v=Vd(s,m,e.serverCache);v!=null?f=r.filter.updateChild(c.getNode(),m,v,_,l,a):f=c.getNode()}}return Os(e,f,c.isFullyInitialized()||ae(n),r.filter.filtersNodes())}}function Kl(r,e,n,s,l,a,c,f){const p=e.serverCache;let m;const _=c?r.filter:r.filter.getIndexedFilter();if(ae(n))m=_.updateFullNode(p.getNode(),s,null);else if(_.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(n,s);m=_.updateFullNode(p.getNode(),R,null)}else{const R=se(n);if(!p.isCompleteForPath(n)&&rr(n)>1)return e;const k=Ie(n),A=p.getNode().getImmediateChild(R).updateChild(k,s);R===".priority"?m=_.updatePriority(p.getNode(),A):m=_.updateChild(p.getNode(),R,A,k,Ov,null)}const v=Tv(e,m,p.isFullyInitialized()||ae(n),_.filtersNodes()),w=new Hd(l,v,a);return Lv(r,v,n,l,w,f)}function Xc(r,e,n,s,l,a,c){const f=e.eventCache;let p,m;const _=new Hd(l,e,a);if(ae(n))m=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Os(e,m,!0,r.filter.filtersNodes());else{const v=se(n);if(v===".priority")m=r.filter.updatePriority(e.eventCache.getNode(),s),p=Os(e,m,f.isFullyInitialized(),f.isFiltered());else{const w=Ie(n),R=f.getNode().getImmediateChild(v);let k;if(ae(w))k=s;else{const O=_.getCompleteChild(v);O!=null?Od(w)===".priority"&&O.getChild(_v(w)).isEmpty()?k=O:k=O.updateChild(w,s):k=ee.EMPTY_NODE}if(R.equals(k))p=e;else{const O=r.filter.updateChild(f.getNode(),v,k,w,_,c);p=Os(e,O,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Eg(r,e){return r.eventCache.isCompleteForChild(e)}function yR(r,e,n,s,l,a,c){let f=e;return s.foreach((p,m)=>{const _=Me(n,p);Eg(e,se(_))&&(f=Xc(r,f,_,m,l,a,c))}),s.foreach((p,m)=>{const _=Me(n,p);Eg(e,se(_))||(f=Xc(r,f,_,m,l,a,c))}),f}function Cg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Zc(r,e,n,s,l,a,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;ae(n)?m=s:m=new Se(null).setTree(n,s);const _=e.serverCache.getNode();return m.children.inorderTraversal((v,w)=>{if(_.hasChild(v)){const R=e.serverCache.getNode().getImmediateChild(v),k=Cg(r,R,w);p=Kl(r,p,new ye(v),k,l,a,c,f)}}),m.children.inorderTraversal((v,w)=>{const R=!e.serverCache.isCompleteForChild(v)&&w.value===null;if(!_.hasChild(v)&&!R){const k=e.serverCache.getNode().getImmediateChild(v),O=Cg(r,k,w);p=Kl(r,p,new ye(v),O,l,a,c,f)}}),p}function wR(r,e,n,s,l,a,c){if(Gl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ae(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Kl(r,e,n,p.getNode().getChild(n),l,a,f,c);if(ae(n)){let m=new Se(null);return p.getNode().forEachChild(fi,(_,v)=>{m=m.set(new ye(_),v)}),Zc(r,e,n,m,l,a,f,c)}else return e}else{let m=new Se(null);return s.foreach((_,v)=>{const w=Me(n,_);p.isCompleteForPath(w)&&(m=m.set(_,p.getNode().getChild(w)))}),Zc(r,e,n,m,l,a,f,c)}}function ER(r,e,n,s,l){const a=e.serverCache,c=Tv(e,a.getNode(),a.isFullyInitialized()||ae(n),a.isFiltered());return Lv(r,c,n,s,Ov,l)}function CR(r,e,n,s,l,a){let c;if(Gl(s,n)!=null)return e;{const f=new Hd(s,e,l),p=e.eventCache.getNode();let m;if(ae(n)||se(n)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=$l(s,xr(e));else{const v=e.serverCache.getNode();j(v instanceof ee,"serverChildren would be complete if leaf node"),_=Bd(s,v)}_=_,m=r.filter.updateFullNode(p,_,a)}else{const _=se(n);let v=Vd(s,_,e.serverCache);v==null&&e.serverCache.isCompleteForChild(_)&&(v=p.getImmediateChild(_)),v!=null?m=r.filter.updateChild(p,_,v,Ie(n),f,a):e.eventCache.getNode().hasChild(_)?m=r.filter.updateChild(p,_,ee.EMPTY_NODE,Ie(n),f,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=$l(s,xr(e)),c.isLeafNode()&&(m=r.filter.updateFullNode(m,c,a)))}return c=e.serverCache.isFullyInitialized()||Gl(s,pe())!=null,Os(e,m,c,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new bd(s.getIndex()),a=WT(s);this.processor_=mR(a);const c=n.serverCache,f=n.eventCache,p=l.updateFullNode(ee.EMPTY_NODE,c.getNode(),null),m=a.updateFullNode(ee.EMPTY_NODE,f.getNode(),null),_=new Pr(p,c.isFullyInitialized(),l.filtersNodes()),v=new Pr(m,f.isFullyInitialized(),a.filtersNodes());this.viewCache_=la(v,_),this.eventGenerator_=new qT(this.query_)}get query(){return this.query_}}function IR(r){return r.viewCache_.serverCache.getNode()}function kR(r,e){const n=xr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Sg(r){return r.eventRegistrations_.length===0}function TR(r,e){r.eventRegistrations_.push(e)}function Ig(r,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function kg(r,e,n,s){e.type===Bt.MERGE&&e.source.queryId!==null&&(j(xr(r.viewCache_),"We should always have a full cache before handling merges"),j(qc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,a=_R(r.processor_,l,e,n,s);return gR(r.processor_,a.viewCache),j(a.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,Dv(r,a.changes,a.viewCache.eventCache.getNode(),null)}function RR(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(a,c)=>{s.push(yi(a,c))}),n.isFullyInitialized()&&s.push(Iv(n.getNode())),Dv(r,s,n.getNode(),e)}function Dv(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return QT(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;class NR{constructor(){this.views=new Map}}function PR(r){j(!ql,"__referenceConstructor has already been defined"),ql=r}function xR(){return j(ql,"Reference.ts has not been loaded"),ql}function AR(r){return r.views.size===0}function $d(r,e,n,s){const l=e.source.queryId;if(l!==null){const a=r.views.get(l);return j(a!=null,"SyncTree gave us an op for an invalid query."),kg(a,e,n,s)}else{let a=[];for(const c of r.views.values())a=a.concat(kg(c,e,n,s));return a}}function OR(r,e,n,s,l){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let f=$l(n,l?s:null),p=!1;f?p=!0:s instanceof ee?(f=Bd(n,s),p=!1):(f=ee.EMPTY_NODE,p=!1);const m=la(new Pr(f,p,!1),new Pr(s,l,!1));return new SR(e,m)}return c}function LR(r,e,n,s,l,a){const c=OR(r,e,s,l,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),TR(c,n),RR(c,n)}function DR(r,e,n,s){const l=e._queryIdentifier,a=[];let c=[];const f=ir(r);if(l==="default")for(const[p,m]of r.views.entries())c=c.concat(Ig(m,n,s)),Sg(m)&&(r.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=r.views.get(l);p&&(c=c.concat(Ig(p,n,s)),Sg(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||a.push(p.query)))}return f&&!ir(r)&&a.push(new(xR())(e._repo,e._path)),{removed:a,events:c}}function Mv(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pi(r,e){let n=null;for(const s of r.views.values())n=n||kR(s,e);return n}function bv(r,e){if(e._queryParams.loadsAllData())return aa(r);{const s=e._queryIdentifier;return r.views.get(s)}}function Fv(r,e){return bv(r,e)!=null}function ir(r){return aa(r)!=null}function aa(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;function MR(r){j(!Ql,"__referenceConstructor has already been defined"),Ql=r}function bR(){return j(Ql,"Reference.ts has not been loaded"),Ql}let FR=1;class Tg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=dR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uv(r,e,n,s,l){return ZT(r.pendingWriteTree_,e,n,s,l),l?Ai(r,new Nr(Ud(),e,n)):[]}function UR(r,e,n,s){eR(r.pendingWriteTree_,e,n,s);const l=Se.fromObject(n);return Ai(r,new wi(Ud(),e,l))}function Jn(r,e,n=!1){const s=tR(r.pendingWriteTree_,e);if(nR(r.pendingWriteTree_,e)){let a=new Se(null);return s.snap!=null?a=a.set(pe(),!0):Ze(s.children,c=>{a=a.set(new ye(c),!0)}),Ai(r,new Hl(s.path,a,n))}else return[]}function ua(r,e,n){return Ai(r,new Nr(jd(),e,n))}function jR(r,e,n){const s=Se.fromObject(n);return Ai(r,new wi(jd(),e,s))}function zR(r,e){return Ai(r,new $s(jd(),e))}function WR(r,e,n){const s=Kd(r,n);if(s){const l=qd(s),a=l.path,c=l.queryId,f=gt(a,e),p=new $s(zd(c),f);return Qd(r,a,p)}else return[]}function ed(r,e,n,s,l=!1){const a=e._path,c=r.syncPointTree_.get(a);let f=[];if(c&&(e._queryIdentifier==="default"||Fv(c,e))){const p=DR(c,e,n,s);AR(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const m=p.removed;if(f=p.events,!l){const _=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(a,(w,R)=>ir(R));if(_&&!v){const w=r.syncPointTree_.subtree(a);if(!w.isEmpty()){const R=HR(w);for(let k=0;k<R.length;++k){const O=R[k],A=O.query,L=Wv(r,O);r.listenProvider_.startListening(Ds(A),Yl(r,A),L.hashFn,L.onComplete)}}}!v&&m.length>0&&!s&&(_?r.listenProvider_.stopListening(Ds(e),null):m.forEach(w=>{const R=r.queryToTagMap.get(ca(w));r.listenProvider_.stopListening(Ds(w),R)}))}$R(r,m)}return f}function BR(r,e,n,s){const l=Kd(r,s);if(l!=null){const a=qd(l),c=a.path,f=a.queryId,p=gt(c,e),m=new Nr(zd(f),p,n);return Qd(r,c,m)}else return[]}function VR(r,e,n,s){const l=Kd(r,s);if(l){const a=qd(l),c=a.path,f=a.queryId,p=gt(c,e),m=Se.fromObject(n),_=new wi(zd(f),p,m);return Qd(r,c,_)}else return[]}function Rg(r,e,n,s=!1){const l=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(l,(w,R)=>{const k=gt(w,l);a=a||pi(R,k),c=c||ir(R)});let f=r.syncPointTree_.get(l);f?(c=c||ir(f),a=a||pi(f,pe())):(f=new NR,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;a!=null?p=!0:(p=!1,a=ee.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((R,k)=>{const O=pi(k,pe());O&&(a=a.updateImmediateChild(R,O))}));const m=Fv(f,e);if(!m&&!e._queryParams.loadsAllData()){const w=ca(e);j(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=GR();r.queryToTagMap.set(w,R),r.tagToQueryMap.set(R,w)}const _=Wd(r.pendingWriteTree_,l);let v=LR(f,e,n,_,a,p);if(!m&&!c&&!s){const w=bv(f,e);v=v.concat(KR(r,e,w))}return v}function Gd(r,e,n){const l=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,f)=>{const p=gt(c,e),m=pi(f,p);if(m)return m});return Pv(l,e,a,n,!0)}function Ai(r,e){return jv(e,r.syncPointTree_,null,Wd(r.pendingWriteTree_,pe()))}function jv(r,e,n,s){if(ae(r.path))return zv(r,e,n,s);{const l=e.get(pe());n==null&&l!=null&&(n=pi(l,pe()));let a=[];const c=se(r.path),f=r.operationForChild(c),p=e.children.get(c);if(p&&f){const m=n?n.getImmediateChild(c):null,_=xv(s,c);a=a.concat(jv(f,p,m,_))}return l&&(a=a.concat($d(l,r,s,n))),a}}function zv(r,e,n,s){const l=e.get(pe());n==null&&l!=null&&(n=pi(l,pe()));let a=[];return e.children.inorderTraversal((c,f)=>{const p=n?n.getImmediateChild(c):null,m=xv(s,c),_=r.operationForChild(c);_&&(a=a.concat(zv(_,f,p,m)))}),l&&(a=a.concat($d(l,r,s,n))),a}function Wv(r,e){const n=e.query,s=Yl(r,n);return{hashFn:()=>(IR(e)||ee.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?WR(r,n._path,s):zR(r,n._path);{const a=jk(l,n);return ed(r,n,null,a)}}}}function Yl(r,e){const n=ca(e);return r.queryToTagMap.get(n)}function ca(r){return r._path.toString()+"$"+r._queryIdentifier}function Kd(r,e){return r.tagToQueryMap.get(e)}function qd(r){const e=r.indexOf("$");return j(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ye(r.substr(0,e))}}function Qd(r,e,n){const s=r.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const l=Wd(r.pendingWriteTree_,e);return $d(s,n,l,null)}function HR(r){return r.fold((e,n,s)=>{if(n&&ir(n))return[aa(n)];{let l=[];return n&&(l=Mv(n)),Ze(s,(a,c)=>{l=l.concat(c)}),l}})}function Ds(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(bR())(r._repo,r._path):r}function $R(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=ca(s),a=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(a)}}}function GR(){return FR++}function KR(r,e,n){const s=e._path,l=Yl(r,e),a=Wv(r,n),c=r.listenProvider_.startListening(Ds(e),l,a.hashFn,a.onComplete),f=r.syncPointTree_.subtree(s);if(l)j(!ir(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((m,_,v)=>{if(!ae(m)&&_&&ir(_))return[aa(_).query];{let w=[];return _&&(w=w.concat(Mv(_).map(R=>R.query))),Ze(v,(R,k)=>{w=w.concat(k)}),w}});for(let m=0;m<p.length;++m){const _=p[m];r.listenProvider_.stopListening(Ds(_),Yl(r,_))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yd(n)}node(){return this.node_}}class Jd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Jd(this.syncTree_,n)}node(){return Gd(this.syncTree_,this.path_)}}const qR=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Ng=function(r,e,n){if(!r||typeof r!="object")return r;if(j(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return QR(r[".sv"],e,n);if(typeof r[".sv"]=="object")return YR(r[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},QR=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+r)}},YR=function(r,e,n){r.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const l=e.node();if(j(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},Bv=function(r,e,n,s){return Xd(e,new Jd(n,r),s)},Vv=function(r,e,n){return Xd(r,new Yd(e),n)};function Xd(r,e,n){const s=r.getPriority().val(),l=Ng(s,e.getImmediateChild(".priority"),n);let a;if(r.isLeafNode()){const c=r,f=Ng(c.getValue(),e,n);return f!==c.getValue()||l!==c.getPriority().val()?new Ge(f,qe(l)):r}else{const c=r;return a=c,l!==c.getPriority().val()&&(a=a.updatePriority(new Ge(l))),c.forEachChild(be,(f,p)=>{const m=Xd(p,e.getImmediateChild(f),n);m!==p&&(a=a.updateImmediateChild(f,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function eh(r,e){let n=e instanceof ye?e:new ye(e),s=r,l=se(n);for(;l!==null;){const a=mi(s.node.children,l)||{children:{},childCount:0};s=new Zd(l,s,a),n=Ie(n),l=se(n)}return s}function Oi(r){return r.node.value}function Hv(r,e){r.node.value=e,td(r)}function $v(r){return r.node.childCount>0}function JR(r){return Oi(r)===void 0&&!$v(r)}function da(r,e){Ze(r.node.children,(n,s)=>{e(new Zd(n,r,s))})}function Gv(r,e,n,s){n&&e(r),da(r,l=>{Gv(l,e,!0)})}function XR(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function io(r){return new ye(r.parent===null?r.name:io(r.parent)+"/"+r.name)}function td(r){r.parent!==null&&ZR(r.parent,r.name,r)}function ZR(r,e,n){const s=JR(n),l=sn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,td(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,td(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=/[\[\].#$\/\u0000-\u001F\u007F]/,tN=/[\[\].#$\u0000-\u001F\u007F]/,Pc=10*1024*1024,th=function(r){return typeof r=="string"&&r.length!==0&&!eN.test(r)},Kv=function(r){return typeof r=="string"&&r.length!==0&&!tN.test(r)},nN=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Kv(r)},rN=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Rd(r)||r&&typeof r=="object"&&sn(r,".sv")},qv=function(r,e,n,s){s&&e===void 0||ha(ea(r,"value"),e,n)},ha=function(r,e,n){const s=n instanceof ye?new yT(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Cr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Cr(s)+" with contents = "+e.toString());if(Rd(e))throw new Error(r+"contains "+e.toString()+" "+Cr(s));if(typeof e=="string"&&e.length>Pc/3&&ta(e)>Pc)throw new Error(r+"contains a string greater than "+Pc+" utf8 bytes "+Cr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,a=!1;if(Ze(e,(c,f)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!th(c)))throw new Error(r+" contains an invalid key ("+c+") "+Cr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wT(s,c),ha(r,f,s),ET(s)}),l&&a)throw new Error(r+' contains ".value" child '+Cr(s)+" in addition to actual children.")}},iN=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const a=Ws(s);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!th(a[c]))throw new Error(r+"contains an invalid key ("+a[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(vT);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&xt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},sN=function(r,e,n,s){const l=ea(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const a=[];Ze(e,(c,f)=>{const p=new ye(c);if(ha(l,f,Me(n,p)),Od(p)===".priority"&&!rN(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),iN(l,a)},Qv=function(r,e,n,s){if(!Kv(n))throw new Error(ea(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oN=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qv(r,e,n)},nh=function(r,e){if(se(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},lN=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!th(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nN(n))throw new Error(ea(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fa(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],a=l.getPath();n!==null&&!Ld(a,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(l)}n&&r.eventLists_.push(n)}function Yv(r,e,n){fa(r,n),Jv(r,s=>Ld(s,e))}function $t(r,e,n){fa(r,n),Jv(r,s=>xt(s,e)||xt(e,s))}function Jv(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const a=l.path;e(a)?(uN(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function uN(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();xs&&Xe("event: "+n.toString()),xi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="repo_interrupt",dN=25;class hN{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vl(),this.transactionQueueTree_=new Zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fN(r,e,n){if(r.stats_=xd(r.repoInfo_),r.forceRestClient_||Vk())r.server_=new Bl(r.repoInfo_,(s,l,a,c)=>{Pg(r,s,l,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>xg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new En(r.repoInfo_,e,(s,l,a,c)=>{Pg(r,s,l,a,c)},s=>{xg(r,s)},s=>{pN(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=qk(r.repoInfo_,()=>new KT(r.stats_,r.server_)),r.infoData_=new BT,r.infoSyncTree_=new Tg({startListening:(s,l,a,c)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=ua(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),rh(r,"connected",!1),r.serverSyncTree_=new Tg({startListening:(s,l,a,c)=>(r.server_.listen(s,a,l,(f,p)=>{const m=c(f,p);$t(r.eventQueue_,s._path,m)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function Xv(r){const n=r.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pa(r){return qR({timestamp:Xv(r)})}function Pg(r,e,n,s,l){r.dataUpdateCount++;const a=new ye(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=Ol(n,m=>qe(m));c=VR(r.serverSyncTree_,a,p,l)}else{const p=qe(n);c=BR(r.serverSyncTree_,a,p,l)}else if(s){const p=Ol(n,m=>qe(m));c=jR(r.serverSyncTree_,a,p)}else{const p=qe(n);c=ua(r.serverSyncTree_,a,p)}let f=a;c.length>0&&(f=Ci(r,a)),$t(r.eventQueue_,f,c)}function xg(r,e){rh(r,"connected",e),e===!1&&_N(r)}function pN(r,e){Ze(e,(n,s)=>{rh(r,n,s)})}function rh(r,e,n){const s=new ye("/.info/"+e),l=qe(n);r.infoData_.updateSnapshot(s,l);const a=ua(r.infoSyncTree_,s,l);$t(r.eventQueue_,s,a)}function ih(r){return r.nextWriteId_++}function mN(r,e,n,s,l){ma(r,"set",{path:e.toString(),value:n,priority:s});const a=pa(r),c=qe(n,s),f=Gd(r.serverSyncTree_,e),p=Vv(c,f,a),m=ih(r),_=Uv(r.serverSyncTree_,e,p,m,!0);fa(r.eventQueue_,_),r.server_.put(e.toString(),c.val(!0),(w,R)=>{const k=w==="ok";k||ot("set at "+e+" failed: "+w);const O=Jn(r.serverSyncTree_,m,!k);$t(r.eventQueue_,e,O),nd(r,l,w,R)});const v=oh(r,e);Ci(r,v),$t(r.eventQueue_,v,[])}function gN(r,e,n,s){ma(r,"update",{path:e.toString(),value:n});let l=!0;const a=pa(r),c={};if(Ze(n,(f,p)=>{l=!1,c[f]=Bv(Me(e,f),qe(p),r.serverSyncTree_,a)}),l)Xe("update() called with empty data.  Don't do anything."),nd(r,s,"ok",void 0);else{const f=ih(r),p=UR(r.serverSyncTree_,e,c,f);fa(r.eventQueue_,p),r.server_.merge(e.toString(),n,(m,_)=>{const v=m==="ok";v||ot("update at "+e+" failed: "+m);const w=Jn(r.serverSyncTree_,f,!v),R=w.length>0?Ci(r,e):e;$t(r.eventQueue_,R,w),nd(r,s,m,_)}),Ze(n,m=>{const _=oh(r,Me(e,m));Ci(r,_)}),$t(r.eventQueue_,e,[])}}function _N(r){ma(r,"onDisconnectEvents");const e=pa(r),n=Vl();Kc(r.onDisconnect_,pe(),(l,a)=>{const c=Bv(l,a,r.serverSyncTree_,e);kv(n,l,c)});let s=[];Kc(n,pe(),(l,a)=>{s=s.concat(ua(r.serverSyncTree_,l,a));const c=oh(r,l);Ci(r,c)}),r.onDisconnect_=Vl(),$t(r.eventQueue_,pe(),s)}function vN(r,e,n){let s;se(e._path)===".info"?s=Rg(r.infoSyncTree_,e,n):s=Rg(r.serverSyncTree_,e,n),Yv(r.eventQueue_,e._path,s)}function yN(r,e,n){let s;se(e._path)===".info"?s=ed(r.infoSyncTree_,e,n):s=ed(r.serverSyncTree_,e,n),Yv(r.eventQueue_,e._path,s)}function wN(r){r.persistentConnection_&&r.persistentConnection_.interrupt(cN)}function ma(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Xe(n,...e)}function nd(r,e,n,s){e&&xi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let a=l;s&&(a+=": "+s);const c=new Error(a);c.code=l,e(c)}})}function Zv(r,e,n){return Gd(r.serverSyncTree_,e,n)||ee.EMPTY_NODE}function sh(r,e=r.transactionQueueTree_){if(e||ga(r,e),Oi(e)){const n=ty(r,e);j(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&EN(r,io(e),n)}else $v(e)&&da(e,n=>{sh(r,n)})}function EN(r,e,n){const s=n.map(m=>m.currentWriteId),l=Zv(r,e,s);let a=l;const c=l.hash();for(let m=0;m<n.length;m++){const _=n[m];j(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const v=gt(e,_.path);a=a.updateChild(v,_.currentOutputSnapshotRaw)}const f=a.val(!0),p=e;r.server_.put(p.toString(),f,m=>{ma(r,"transaction put response",{path:p.toString(),status:m});let _=[];if(m==="ok"){const v=[];for(let w=0;w<n.length;w++)n[w].status=2,_=_.concat(Jn(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&v.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();ga(r,eh(r.transactionQueueTree_,e)),sh(r,r.transactionQueueTree_),$t(r.eventQueue_,e,_);for(let w=0;w<v.length;w++)xi(v[w])}else{if(m==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{ot("transaction at "+p.toString()+" failed: "+m);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=m}Ci(r,e)}},c)}function Ci(r,e){const n=ey(r,e),s=io(n),l=ty(r,n);return CN(r,l,s),s}function CN(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=gt(n,p.path);let _=!1,v;if(j(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)_=!0,v=p.abortReason,l=l.concat(Jn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=dN)_=!0,v="maxretry",l=l.concat(Jn(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Zv(r,p.path,c);p.currentInputSnapshot=w;const R=e[f].update(w.val());if(R!==void 0){ha("transaction failed: Data returned ",R,p.path);let k=qe(R);typeof R=="object"&&R!=null&&sn(R,".priority")||(k=k.updatePriority(w.getPriority()));const A=p.currentWriteId,L=pa(r),z=Vv(k,w,L);p.currentOutputSnapshotRaw=k,p.currentOutputSnapshotResolved=z,p.currentWriteId=ih(r),c.splice(c.indexOf(A),1),l=l.concat(Uv(r.serverSyncTree_,p.path,z,p.currentWriteId,p.applyLocally)),l=l.concat(Jn(r.serverSyncTree_,A,!0))}else _=!0,v="nodata",l=l.concat(Jn(r.serverSyncTree_,p.currentWriteId,!0))}$t(r.eventQueue_,n,l),l=[],_&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}ga(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)xi(s[f]);sh(r,r.transactionQueueTree_)}function ey(r,e){let n,s=r.transactionQueueTree_;for(n=se(e);n!==null&&Oi(s)===void 0;)s=eh(s,n),e=Ie(e),n=se(e);return s}function ty(r,e){const n=[];return ny(r,e,n),n.sort((s,l)=>s.order-l.order),n}function ny(r,e,n){const s=Oi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);da(e,l=>{ny(r,l,n)})}function ga(r,e){const n=Oi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Hv(e,n.length>0?n:void 0)}da(e,s=>{ga(r,s)})}function oh(r,e){const n=io(ey(r,e)),s=eh(r.transactionQueueTree_,e);return XR(s,l=>{xc(r,l)}),xc(r,s),Gv(s,l=>{xc(r,l)}),n}function xc(r,e){const n=Oi(e);if(n){const s=[];let l=[],a=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(j(a===c-1,"All SENT items should be at beginning of queue."),a=c,n[c].status=3,n[c].abortReason="set"):(j(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(Jn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Hv(e,void 0):n.length=a+1,$t(r.eventQueue_,io(e),l);for(let c=0;c<s.length;c++)xi(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function IN(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ot(`Invalid query segment '${n}' in query '${r}'`)}return e}const Ag=function(r,e){const n=kN(r),s=n.namespace;n.domain==="firebase.com"&&kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Dk();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new av(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ye(n.pathString)}},kN=function(r){let e="",n="",s="",l="",a="",c=!0,f="https",p=443;if(typeof r=="string"){let m=r.indexOf("//");m>=0&&(f=r.substring(0,m-1),r=r.substring(m+2));let _=r.indexOf("/");_===-1&&(_=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(_,v)),_<v&&(l=SN(r.substring(_,v)));const w=IN(r.substring(Math.min(r.length,v)));m=e.indexOf(":"),m>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const R=e.slice(0,m);if(R.toLowerCase()==="localhost")n="localhost";else if(R.split(".").length<=2)n=R;else{const k=e.indexOf(".");s=e.substring(0,k).toLowerCase(),n=e.substring(k+1),a=s}"ns"in w&&(a=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:f,pathString:l,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",TN=function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const a=new Array(8);for(l=7;l>=0;l--)a[l]=Og.charAt(n%64),n=Math.floor(n/64);j(n===0,"Cannot push at time == 0");let c=a.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)c+=Og.charAt(e[l]);return j(c.length===20,"nextPushId: Length should be 20."),c}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class NN{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ae(this._path)?null:Od(this._path)}get ref(){return new lr(this._repo,this._path)}get _queryIdentifier(){const e=gg(this._queryParams),n=Nd(e);return n==="{}"?"default":n}get _queryObject(){return gg(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof lh))return!1;const n=this._repo===e._repo,s=Ld(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+_T(this._path)}}class lr extends lh{constructor(e,n){super(e,n,new Fd,!1)}get parent(){const e=_v(this._path);return e===null?null:new lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),s=Gs(this.ref,e);return new Jl(this._node.getChild(n),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Jl(l,Gs(this.ref,s),be)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rs(r,e){return r=at(r),r._checkNotDeleted("ref"),e!==void 0?Gs(r._root,e):r._root}function Gs(r,e){return r=at(r),se(r._path)===null?oN("child","path",e):Qv("child","path",e),new lr(r._repo,Me(r._path,e))}function ry(r,e){r=at(r),nh("push",r._path),qv("push",e,r._path,!0);const n=Xv(r._repo),s=TN(n),l=Gs(r,s),a=Gs(r,s);let c;return c=Promise.resolve(a),l.then=c.then.bind(c),l.catch=c.then.bind(c,void 0),l}function xN(r){return nh("remove",r._path),ah(r,null)}function ah(r,e){r=at(r),nh("set",r._path),qv("set",e,r._path,!1);const n=new Ys;return mN(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function AN(r,e){sN("update",e,r._path);const n=new Ys;return gN(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class uh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new RN("value",this,new Jl(e.snapshotNode,new lr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new NN(this,e,n):null}matches(e){return e instanceof uh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ON(r,e,n,s,l){const a=new PN(n,void 0),c=new uh(a);return vN(r._repo,r,c),()=>yN(r._repo,r,c)}function LN(r,e,n,s){return ON(r,"value",e)}PR(lr);MR(lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="FIREBASE_DATABASE_EMULATOR_HOST",rd={};let MN=!1;function bN(r,e,n,s){r.repoInfo_=new av(e,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function FN(r,e,n,s,l){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Ag(a,l),f=c.repoInfo,p;typeof process<"u"&&Xm&&(p=Xm[DN]),p?(a=`http://${p}?ns=${f.namespace}`,c=Ag(a,l),f=c.repoInfo):c.repoInfo.secure;const m=new $k(r.name,r.options,e);lN("Invalid Firebase Database URL",c),ae(c.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const _=jN(f,r,m,new Hk(r,n));return new zN(_,r)}function UN(r,e){const n=rd[e];(!n||n[r.key]!==r)&&kn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),wN(r),delete n[r.key]}function jN(r,e,n,s){let l=rd[e.name];l||(l={},rd[e.name]=l);let a=l[r.toURLString()];return a&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new hN(r,MN,n,s),l[r.toURLString()]=a,a}class zN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lr(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kn("Cannot call "+e+" on a deleted database.")}}function WN(r=a_(),e){const n=_d(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=HC("database");s&&BN(n,...s)}return n}function BN(r,e,n,s={}){r=at(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,a=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Ir(s,a.repoInfo_.emulatorOptions))return;kn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Nl(Nl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:$C(s.mockUserToken,r.app.options.projectId);c=new Nl(f)}bN(a,l,s,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(r){Nk(Ri),gi(new kr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return FN(s,l,a,n)},"PUBLIC").setMultipleInstances(!0)),er(Zm,eg,r),er(Zm,eg,"esm2017")}En.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};En.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};VN();const HN={apiKey:"AIzaSyAO5q1RP7QD7UU3QRv43sEM-hrx-AqVoBQ",authDomain:"board-game-database-93f66.firebaseapp.com",databaseURL:"https://board-game-database-93f66-default-rtdb.firebaseio.com/",projectId:"board-game-database-93f66",storageBucket:"board-game-database-93f66.appspot.com",messagingSenderId:"749008783914",appId:"1:749008783914:web:20b007016c1930c43ad153",measurementId:"G-G86K4ZQLEM"},ch=l_(HN),iy=K_(ch),Ns=WN(ch),sy=P.createContext();function $N({children:r}){const[e,n]=P.useState(null),[s,l]=P.useState(!0),a=K_(ch);P.useEffect(()=>pI(a,m=>{n(m),l(!1)}),[]);const c=(p,m)=>M_(a,p,m),f=()=>b_(a);return x.jsxs(sy.Provider,{value:{user:e,login:c,logout:f},children:[!s&&r," "]})}function dh(){return P.useContext(sy)}const GN="_navbar_v760r_1",KN="_left_v760r_33",qN="_center_v760r_45",QN="_logo_v760r_57",YN="_right_v760r_65",JN="_searchInput_v760r_79",XN="_searchButton_v760r_111",ZN="_logoutButton_v760r_111",eP="_addButton_v760r_111",pn={navbar:GN,left:KN,center:qN,logo:QN,right:YN,searchInput:JN,searchButton:XN,logoutButton:ZN,addButton:eP},oy="/board-game-administration/assets/cafelogo-B2RhuQ1A.png",ly=({setShowAddGame:r,onSearch:e})=>{const[n,s]=P.useState(""),l=qs(),a=()=>{e(n.trim().toLowerCase())},c=async()=>{try{await b_(iy),l("/admin-login")}catch(f){console.error("Error logging out: ",f)}};return x.jsxs("nav",{className:pn.navbar,children:[x.jsxs("div",{className:pn.left,children:[x.jsx("button",{onClick:c,className:pn.logoutButton,children:"Logout"}),x.jsx("input",{type:"text",placeholder:"Search games...",value:n,onChange:f=>s(f.target.value),className:pn.searchInput}),x.jsx("button",{onClick:a,className:pn.searchButton,children:"Search"})]}),x.jsx("div",{className:pn.center,children:x.jsx("img",{src:oy,alt:"Logo",className:pn.logo})}),x.jsx("div",{className:pn.right,children:x.jsx("button",{onClick:()=>r(f=>!f),className:pn.addButton,children:"Add Game"})})]})},tP="_filterMenu_498la_1",Ac={filterMenu:tP},nP=({selectedFilter:r,setSelectedFilter:e,selectedCategory:n,setSelectedCategory:s,handleApplyFilters:l,handleClearFilters:a})=>x.jsxs("div",{className:Ac.filterMenu,children:[x.jsx("h3",{children:"Filters"}),x.jsxs("label",{children:[x.jsx("input",{type:"radio",name:"filter",value:"all",checked:r==="all",onChange:()=>e("all")}),"All Games"]}),x.jsxs("label",{children:[x.jsx("input",{type:"radio",name:"filter",value:"easy",checked:r==="easy",onChange:()=>e("easy")}),"Easy Difficulty"]}),x.jsxs("label",{children:[x.jsx("input",{type:"radio",name:"filter",value:"medium",checked:r==="medium",onChange:()=>e("medium")}),"Medium Difficulty"]}),x.jsxs("label",{children:[x.jsx("input",{type:"radio",name:"filter",value:"hard",checked:r==="hard",onChange:()=>e("hard")}),"Hard Difficulty"]}),x.jsxs("label",{children:[x.jsxs("select",{value:n,onChange:c=>s(c.target.value),children:[x.jsx("option",{value:"all",children:"All Categories"}),x.jsx("option",{value:"strategy",children:"Strategy"}),x.jsx("option",{value:"party",children:"Party"}),x.jsx("option",{value:"family",children:"Family"}),x.jsx("option",{value:"abstract",children:"Abstract"})]}),"Category"]}),x.jsx("button",{onClick:l,className:Ac.applyButton,children:"Apply Filters"}),x.jsx("button",{onClick:a,className:Ac.clearButton,children:"Clear Filters"})]}),rP="_boardGameList_txtp5_1",iP="_gameCard_txtp5_17",Lg={boardGameList:rP,gameCard:iP},sP=({games:r,handleDeleteGame:e,handleEditGame:n})=>{const[s,l]=P.useState(null),[a,c]=P.useState({name:"",timeDuration:"",shelfNumber:"",playerCount:"",category:"",description:"",rules:"",difficultyLevel:"",gameVideo:""}),f=_=>{l(_.id),c({name:_.name,timeDuration:_.timeDuration,shelfNumber:_.shelfNumber,playerCount:_.playerCount,category:_.category,description:_.description,rules:_.rules,difficultyLevel:_.difficultyLevel,gameVideo:_.gameVideo||""})},p=_=>{_.preventDefault(),n(s,a),l(null)},m=_=>{const{name:v,value:w}=_.target;c(R=>({...R,[v]:w}))};return x.jsx("div",{className:Lg.boardGameList,children:r.map(_=>x.jsx("div",{className:Lg.gameCard,children:s===_.id?x.jsxs("form",{onSubmit:p,children:[x.jsxs("div",{children:[x.jsx("label",{children:"Name:"}),x.jsx("input",{type:"text",name:"name",value:a.name,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Time Duration:"}),x.jsx("input",{type:"number",name:"timeDuration",value:a.timeDuration,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Shelf Number:"}),x.jsx("input",{type:"text",name:"shelfNumber",value:a.shelfNumber,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Player Count:"}),x.jsx("input",{type:"text",name:"playerCount",value:a.playerCount,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Category:"}),x.jsx("input",{type:"text",name:"category",value:a.category,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Description:"}),x.jsx("textarea",{name:"description",value:a.description,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Rules:"}),x.jsx("textarea",{name:"rules",value:a.rules,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Difficulty Level:"}),x.jsx("input",{type:"text",name:"difficultyLevel",value:a.difficultyLevel,onChange:m,required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{children:"Game Video URL:"}),x.jsx("input",{type:"url",name:"gameVideo",value:a.gameVideo,onChange:m})]}),x.jsx("button",{type:"submit",children:"Save"})]}):x.jsxs(x.Fragment,{children:[x.jsx("h3",{children:_.name}),x.jsxs("p",{children:[x.jsx("strong",{children:"Time Duration:"})," ",_.timeDuration," minutes"]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Shelf Number:"})," ",_.shelfNumber]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Player Count:"})," ",_.playerCount]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Category:"})," ",_.category]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Description:"})," ",_.description]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Rules:"})," ",_.rules]}),x.jsxs("p",{children:[x.jsx("strong",{children:"Difficulty Level:"})," ",_.difficultyLevel]}),_.gameVideo&&x.jsxs("div",{children:[x.jsx("strong",{children:"Game Video:"})," ",x.jsx("a",{href:_.gameVideo,target:"_blank",rel:"noopener noreferrer",children:"Watch here"})]}),x.jsx("button",{onClick:()=>f(_),children:"Edit"}),x.jsx("button",{onClick:()=>e(_.id),children:"Delete"})]})},_.id))})},oP="_modal_1wyvw_1",lP={modal:oP},aP=({handleAddGame:r,setShowAddGame:e})=>{const[n,s]=P.useState(""),[l,a]=P.useState(""),[c,f]=P.useState(""),[p,m]=P.useState(""),[_,v]=P.useState(""),[w,R]=P.useState(""),[k,O]=P.useState(""),[A,L]=P.useState(""),[z,W]=P.useState(""),[ne,ue]=P.useState(null),_e=async()=>{if(n.trim()&&l.trim()&&c.trim()&&p.trim()&&_.trim()&&w.trim()&&k.trim()&&A.trim()&&z.trim())try{const Z=ry(Rs(Ns,"games"));await ah(Z,{name:n,timeDuration:l,shelfNumber:c,playerCount:p,category:_,description:w,rules:k,difficultyLevel:A,gameVideo:z}),r({name:n,timeDuration:l,shelfNumber:c,playerCount:p,category:_,description:w,rules:k,difficultyLevel:A,gameVideo:z}),e(!1),ue(null)}catch(Z){ue("Error adding game. Please try again."),console.error("Error adding game:",Z)}else ue("Please fill in all fields.")};return x.jsxs("div",{className:lP.modal,children:[x.jsx("h3",{children:"Add a New Board Game"}),ne&&x.jsx("p",{style:{color:"red"},children:ne}),x.jsxs("form",{children:[x.jsx("input",{type:"text",placeholder:"Game Name",value:n,onChange:Z=>s(Z.target.value)}),x.jsx("input",{type:"number",placeholder:"Time Duration (min)",value:l,onChange:Z=>a(Z.target.value)}),x.jsx("input",{type:"text",placeholder:"Shelf Number",value:c,onChange:Z=>f(Z.target.value)}),x.jsx("input",{type:"text",placeholder:"Player Count (e.g. 2-4)",value:p,onChange:Z=>m(Z.target.value)}),x.jsx("input",{type:"text",placeholder:"Category (e.g. Strategy, Family)",value:_,onChange:Z=>v(Z.target.value)}),x.jsx("textarea",{placeholder:"Description",value:w,onChange:Z=>R(Z.target.value)}),x.jsx("textarea",{placeholder:"Rules",value:k,onChange:Z=>O(Z.target.value)}),x.jsx("input",{type:"text",placeholder:"Difficulty Level (e.g. Easy, Medium, Hard)",value:A,onChange:Z=>L(Z.target.value)}),x.jsx("input",{type:"url",placeholder:"Game Video URL",value:z,onChange:Z=>W(Z.target.value)}),x.jsx("button",{type:"button",onClick:_e,children:"Add Game"}),x.jsx("button",{type:"button",onClick:()=>e(!1),children:"Cancel"})]})]})},uP="_homeContainer_1wosw_3",cP="_contentContainer_1wosw_17",dP="_filterSection_1wosw_33",hP="_gameSection_1wosw_53",El={homeContainer:uP,contentContainer:cP,filterSection:dP,gameSection:hP},fP=({showAddGame:r,setShowAddGame:e})=>{const{user:n}=dh(),[s,l]=P.useState("all"),[a,c]=P.useState("all"),[f,p]=P.useState([]),[m,_]=P.useState([]);P.useEffect(()=>{const O=Rs(Ns,"games");LN(O,A=>{if(A.exists()){const L=A.val(),z=Object.keys(L).map(W=>({id:W,...L[W]}));p(z),_(z)}})},[]),P.useEffect(()=>{let O=f;const A=s.toLowerCase(),L=a.toLowerCase();A!=="all"&&(O=O.filter(z=>z.difficulty&&z.difficulty.toLowerCase()===A)),L!=="all"&&(O=O.filter(z=>z.category&&z.category.toLowerCase()===L)),_(O)},[s,a,f]);const v=O=>{const A=ry(Rs(Ns,"games"));ah(A,O),e(!1)},w=O=>{xN(Rs(Ns,`games/${O}`)).then(()=>{p(A=>A.filter(L=>L.id!==O)),_(A=>A.filter(L=>L.id!==O))}).catch(A=>console.error("Error deleting game:",A))},R=(O,A)=>{AN(Rs(Ns,`games/${O}`),A).then(()=>{p(L=>L.map(z=>z.id===O?{...z,...A}:z)),_(L=>L.map(z=>z.id===O?{...z,...A}:z))}).catch(L=>console.error("Error updating game:",L))},k=O=>{if(!O){_(f);return}const A=f.filter(L=>L.name.toLowerCase().includes(O.toLowerCase()));_(A)};return n?x.jsxs("div",{className:El.homeContainer,children:[x.jsx(ly,{setShowAddGame:e,onSearch:k}),x.jsxs("div",{className:El.contentContainer,children:[x.jsx("aside",{className:El.filterSection,children:x.jsx(nP,{selectedFilter:s,setSelectedFilter:l,selectedCategory:a,setSelectedCategory:c})}),x.jsxs("main",{className:El.gameSection,children:[x.jsx(sP,{games:m,handleDeleteGame:w,handleEditGame:R}),r&&x.jsx(aP,{handleAddGame:v,setShowAddGame:e})]})]})]}):x.jsx("h2",{children:"Please log in to access the admin page."})},pP="_container_1fhn5_1",mP="_loginBox_1fhn5_21",gP="_logo_1fhn5_43",_P="_title_1fhn5_53",vP="_form_1fhn5_67",yP="_input_1fhn5_77",wP="_submitButton_1fhn5_93",EP="_error_1fhn5_123",mn={container:pP,loginBox:mP,logo:gP,title:_P,form:vP,input:yP,submitButton:wP,error:EP},CP=({onLoginSuccess:r})=>{const[e,n]=P.useState(""),[s,l]=P.useState(""),[a,c]=P.useState(""),f=qs(),p=async m=>{m.preventDefault();try{await M_(iy,e,s),r(),f("/")}catch{c("Invalid email or password")}};return x.jsx("div",{className:mn.container,children:x.jsxs("div",{className:mn.loginBox,children:[x.jsx("img",{src:oy,alt:"Logo",className:mn.logo}),x.jsx("h2",{className:mn.title,children:"Admin Login"}),x.jsxs("form",{onSubmit:p,className:mn.form,children:[x.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:m=>n(m.target.value),className:mn.input}),x.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:m=>l(m.target.value),className:mn.input}),x.jsx("button",{type:"submit",className:mn.submitButton,children:"Login"})]}),a&&x.jsx("p",{className:mn.error,children:a})]})})};function SP({element:r}){const{user:e}=dh();return e?r:x.jsx(tC,{to:"/login"})}function IP(){const[r,e]=P.useState(!1);return x.jsx($N,{children:x.jsx(Gg,{children:x.jsx(kP,{showAddGame:r,setShowAddGame:e})})})}function kP({showAddGame:r,setShowAddGame:e}){const s=Tn().pathname==="/login",{user:l}=dh(),a=qs(),c=()=>{console.log("Login successful!"),a("/")};return x.jsxs(x.Fragment,{children:[!s&&x.jsx(ly,{setShowAddGame:e}),x.jsxs(rC,{children:[x.jsx(Lc,{path:"/login",element:x.jsx(CP,{onLoginSuccess:c})})," ",x.jsx(Lc,{path:"/",element:x.jsx(SP,{element:x.jsx(fP,{showAddGame:r,setShowAddGame:e})})})]})]})}hE.createRoot(document.getElementById("root")).render(x.jsx(P.StrictMode,{children:x.jsx(Gg,{children:x.jsx(IP,{})})}));
