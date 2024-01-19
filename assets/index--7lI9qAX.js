(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Yr(e,t){const r=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)r[s[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const X={},ft=[],He=()=>{},_i=()=>!1,xi=/^on[^a-z]/,ar=e=>xi.test(e),Qr=e=>e.startsWith("onUpdate:"),se=Object.assign,Jr=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Si=Object.prototype.hasOwnProperty,B=(e,t)=>Si.call(e,t),F=Array.isArray,qt=e=>ur(e)==="[object Map]",Ai=e=>ur(e)==="[object Set]",j=e=>typeof e=="function",oe=e=>typeof e=="string",cr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",go=e=>(G(e)||j(e))&&j(e.then)&&j(e.catch),Ei=Object.prototype.toString,ur=e=>Ei.call(e),Ri=e=>ur(e).slice(8,-1),ki=e=>ur(e)==="[object Object]",Xr=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xt=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Ci=/-(\w)/g,bt=dr(e=>e.replace(Ci,(t,r)=>r?r.toUpperCase():"")),Li=/\B([A-Z])/g,xt=dr(e=>e.replace(Li,"-$1").toLowerCase()),bo=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=dr(e=>e?`on${bo(e)}`:""),ot=(e,t)=>!Object.is(e,t),Sr=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},rr=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},Ti=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ws;const Or=()=>ws||(ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(e){if(F(e)){const t={};for(let r=0;r<e.length;r++){const s=e[r],o=oe(s)?Hi(s):Zr(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(oe(e)||G(e))return e}const qi=/;(?![^(]*\))/g,Oi=/:([^]+)/,Mi=/\/\*[^]*?\*\//g;function Hi(e){const t={};return e.replace(Mi,"").split(qi).forEach(r=>{if(r){const s=r.split(Oi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Gr(e){let t="";if(oe(e))t=e;else if(F(e))for(let r=0;r<e.length;r++){const s=Gr(e[r]);s&&(t+=s+" ")}else if(G(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Pi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zi=Yr(Pi);function mo(e){return!!e||e===""}let we;class vo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const r=we;try{return we=this,t()}finally{we=r}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.scopes)for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Ii(e){return new vo(e)}function Fi(e,t=we){t&&t.active&&t.effects.push(e)}function ji(){return we}const es=e=>{const t=new Set(e);return t.w=0,t.n=0,t},yo=e=>(e.w&Ye)>0,wo=e=>(e.n&Ye)>0,$i=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ye},Ni=e=>{const{deps:t}=e;if(t.length){let r=0;for(let s=0;s<t.length;s++){const o=t[s];yo(o)&&!wo(o)?o.delete(e):t[r++]=o,o.w&=~Ye,o.n&=~Ye}t.length=r}},Mr=new WeakMap;let Lt=0,Ye=1;const Hr=30;let _e;const tt=Symbol(""),Pr=Symbol("");class ts{constructor(t,r=null,s){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Fi(this,s)}run(){if(!this.active)return this.fn();let t=_e,r=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Ke=!0,Ye=1<<++Lt,Lt<=Hr?$i(this):_s(this),this.fn()}finally{Lt<=Hr&&Ni(this),Ye=1<<--Lt,_e=this.parent,Ke=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(_s(this),this.onStop&&this.onStop(),this.active=!1)}}function _s(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let Ke=!0;const _o=[];function St(){_o.push(Ke),Ke=!1}function At(){const e=_o.pop();Ke=e===void 0?!0:e}function he(e,t,r){if(Ke&&_e){let s=Mr.get(e);s||Mr.set(e,s=new Map);let o=s.get(r);o||s.set(r,o=es()),xo(o)}}function xo(e,t){let r=!1;Lt<=Hr?wo(e)||(e.n|=Ye,r=!yo(e)):r=!e.has(_e),r&&(e.add(_e),_e.deps.push(e))}function je(e,t,r,s,o,i){const n=Mr.get(e);if(!n)return;let c=[];if(t==="clear")c=[...n.values()];else if(r==="length"&&F(e)){const a=Number(s);n.forEach((d,u)=>{(u==="length"||!cr(u)&&u>=a)&&c.push(d)})}else switch(r!==void 0&&c.push(n.get(r)),t){case"add":F(e)?Xr(r)&&c.push(n.get("length")):(c.push(n.get(tt)),qt(e)&&c.push(n.get(Pr)));break;case"delete":F(e)||(c.push(n.get(tt)),qt(e)&&c.push(n.get(Pr)));break;case"set":qt(e)&&c.push(n.get(tt));break}if(c.length===1)c[0]&&zr(c[0]);else{const a=[];for(const d of c)d&&a.push(...d);zr(es(a))}}function zr(e,t){const r=F(e)?e:[...e];for(const s of r)s.computed&&xs(s);for(const s of r)s.computed||xs(s)}function xs(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Di=Yr("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cr)),Ss=Bi();function Bi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const s=W(this);for(let i=0,n=this.length;i<n;i++)he(s,"get",i+"");const o=s[t](...r);return o===-1||o===!1?s[t](...r.map(W)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){St();const s=W(this)[t].apply(this,r);return At(),s}}),e}function Ui(e){const t=W(this);return he(t,"has",e),t.hasOwnProperty(e)}class Ao{constructor(t=!1,r=!1){this._isReadonly=t,this._shallow=r}get(t,r,s){const o=this._isReadonly,i=this._shallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return i;if(r==="__v_raw"&&s===(o?i?sn:Co:i?ko:Ro).get(t))return t;const n=F(t);if(!o){if(n&&B(Ss,r))return Reflect.get(Ss,r,s);if(r==="hasOwnProperty")return Ui}const c=Reflect.get(t,r,s);return(cr(r)?So.has(r):Di(r))||(o||he(t,"get",r),i)?c:ae(c)?n&&Xr(r)?c:c.value:G(c)?o?Lo(c):Bt(c):c}}class Eo extends Ao{constructor(t=!1){super(!1,t)}set(t,r,s,o){let i=t[r];if(mt(i)&&ae(i)&&!ae(s))return!1;if(!this._shallow&&(!sr(s)&&!mt(s)&&(i=W(i),s=W(s)),!F(t)&&ae(i)&&!ae(s)))return i.value=s,!0;const n=F(t)&&Xr(r)?Number(r)<t.length:B(t,r),c=Reflect.set(t,r,s,o);return t===W(o)&&(n?ot(s,i)&&je(t,"set",r,s):je(t,"add",r,s)),c}deleteProperty(t,r){const s=B(t,r);t[r];const o=Reflect.deleteProperty(t,r);return o&&s&&je(t,"delete",r,void 0),o}has(t,r){const s=Reflect.has(t,r);return(!cr(r)||!So.has(r))&&he(t,"has",r),s}ownKeys(t){return he(t,"iterate",F(t)?"length":tt),Reflect.ownKeys(t)}}class Wi extends Ao{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Ki=new Eo,Vi=new Wi,Yi=new Eo(!0),rs=e=>e,hr=e=>Reflect.getPrototypeOf(e);function Wt(e,t,r=!1,s=!1){e=e.__v_raw;const o=W(e),i=W(t);r||(ot(t,i)&&he(o,"get",t),he(o,"get",i));const{has:n}=hr(o),c=s?rs:r?ns:zt;if(n.call(o,t))return c(e.get(t));if(n.call(o,i))return c(e.get(i));e!==o&&e.get(t)}function Kt(e,t=!1){const r=this.__v_raw,s=W(r),o=W(e);return t||(ot(e,o)&&he(s,"has",e),he(s,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function Vt(e,t=!1){return e=e.__v_raw,!t&&he(W(e),"iterate",tt),Reflect.get(e,"size",e)}function As(e){e=W(e);const t=W(this);return hr(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function Es(e,t){t=W(t);const r=W(this),{has:s,get:o}=hr(r);let i=s.call(r,e);i||(e=W(e),i=s.call(r,e));const n=o.call(r,e);return r.set(e,t),i?ot(t,n)&&je(r,"set",e,t):je(r,"add",e,t),this}function Rs(e){const t=W(this),{has:r,get:s}=hr(t);let o=r.call(t,e);o||(e=W(e),o=r.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return o&&je(t,"delete",e,void 0),i}function ks(){const e=W(this),t=e.size!==0,r=e.clear();return t&&je(e,"clear",void 0,void 0),r}function Yt(e,t){return function(s,o){const i=this,n=i.__v_raw,c=W(n),a=t?rs:e?ns:zt;return!e&&he(c,"iterate",tt),n.forEach((d,u)=>s.call(o,a(d),a(u),i))}}function Qt(e,t,r){return function(...s){const o=this.__v_raw,i=W(o),n=qt(i),c=e==="entries"||e===Symbol.iterator&&n,a=e==="keys"&&n,d=o[e](...s),u=r?rs:t?ns:zt;return!t&&he(i,"iterate",a?Pr:tt),{next(){const{value:f,done:p}=d.next();return p?{value:f,done:p}:{value:c?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function De(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Qi(){const e={get(i){return Wt(this,i)},get size(){return Vt(this)},has:Kt,add:As,set:Es,delete:Rs,clear:ks,forEach:Yt(!1,!1)},t={get(i){return Wt(this,i,!1,!0)},get size(){return Vt(this)},has:Kt,add:As,set:Es,delete:Rs,clear:ks,forEach:Yt(!1,!0)},r={get(i){return Wt(this,i,!0)},get size(){return Vt(this,!0)},has(i){return Kt.call(this,i,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Yt(!0,!1)},s={get(i){return Wt(this,i,!0,!0)},get size(){return Vt(this,!0)},has(i){return Kt.call(this,i,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Yt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Qt(i,!1,!1),r[i]=Qt(i,!0,!1),t[i]=Qt(i,!1,!0),s[i]=Qt(i,!0,!0)}),[e,r,t,s]}const[Ji,Xi,Zi,Gi]=Qi();function ss(e,t){const r=t?e?Gi:Zi:e?Xi:Ji;return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(B(r,o)&&o in s?r:s,o,i)}const en={get:ss(!1,!1)},tn={get:ss(!1,!0)},rn={get:ss(!0,!1)},Ro=new WeakMap,ko=new WeakMap,Co=new WeakMap,sn=new WeakMap;function on(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nn(e){return e.__v_skip||!Object.isExtensible(e)?0:on(Ri(e))}function Bt(e){return mt(e)?e:os(e,!1,Ki,en,Ro)}function ln(e){return os(e,!1,Yi,tn,ko)}function Lo(e){return os(e,!0,Vi,rn,Co)}function os(e,t,r,s,o){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const n=nn(e);if(n===0)return e;const c=new Proxy(e,n===2?s:r);return o.set(e,c),c}function pt(e){return mt(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function mt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function To(e){return pt(e)||mt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function is(e){return rr(e,"__v_skip",!0),e}const zt=e=>G(e)?Bt(e):e,ns=e=>G(e)?Lo(e):e;function qo(e){Ke&&_e&&(e=W(e),xo(e.dep||(e.dep=es())))}function Oo(e,t){e=W(e);const r=e.dep;r&&zr(r)}function ae(e){return!!(e&&e.__v_isRef===!0)}function Mo(e){return Ho(e,!1)}function an(e){return Ho(e,!0)}function Ho(e,t){return ae(e)?e:new cn(e,t)}class cn{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:W(t),this._value=r?t:zt(t)}get value(){return qo(this),this._value}set value(t){const r=this.__v_isShallow||sr(t)||mt(t);t=r?t:W(t),ot(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:zt(t),Oo(this))}}function rt(e){return ae(e)?e.value:e}const un={get:(e,t,r)=>rt(Reflect.get(e,t,r)),set:(e,t,r,s)=>{const o=e[t];return ae(o)&&!ae(r)?(o.value=r,!0):Reflect.set(e,t,r,s)}};function Po(e){return pt(e)?e:new Proxy(e,un)}class dn{constructor(t,r,s,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ts(t,()=>{this._dirty||(this._dirty=!0,Oo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=W(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function hn(e,t,r=!1){let s,o;const i=j(e);return i?(s=e,o=He):(s=e.get,o=e.set),new dn(s,o,i||!o,r)}function Ve(e,t,r,s){let o;try{o=s?e(...s):e()}catch(i){fr(i,t,r)}return o}function Se(e,t,r,s){if(j(e)){const i=Ve(e,t,r,s);return i&&go(i)&&i.catch(n=>{fr(n,t,r)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Se(e[i],t,r,s));return o}function fr(e,t,r,s=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const n=t.proxy,c=r;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,n,c)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){Ve(a,null,10,[e,n,c]);return}}fn(e,r,o,s)}function fn(e,t,r,s=!0){console.error(e)}let It=!1,Ir=!1;const ne=[];let Oe=0;const gt=[];let ze=null,Ge=0;const zo=Promise.resolve();let ls=null;function Io(e){const t=ls||zo;return e?t.then(this?e.bind(this):e):t}function pn(e){let t=Oe+1,r=ne.length;for(;t<r;){const s=t+r>>>1,o=ne[s],i=Ft(o);i<e||i===e&&o.pre?t=s+1:r=s}return t}function as(e){(!ne.length||!ne.includes(e,It&&e.allowRecurse?Oe+1:Oe))&&(e.id==null?ne.push(e):ne.splice(pn(e.id),0,e),Fo())}function Fo(){!It&&!Ir&&(Ir=!0,ls=zo.then($o))}function gn(e){const t=ne.indexOf(e);t>Oe&&ne.splice(t,1)}function bn(e){F(e)?gt.push(...e):(!ze||!ze.includes(e,e.allowRecurse?Ge+1:Ge))&&gt.push(e),Fo()}function Cs(e,t=It?Oe+1:0){for(;t<ne.length;t++){const r=ne[t];r&&r.pre&&(ne.splice(t,1),t--,r())}}function jo(e){if(gt.length){const t=[...new Set(gt)];if(gt.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((r,s)=>Ft(r)-Ft(s)),Ge=0;Ge<ze.length;Ge++)ze[Ge]();ze=null,Ge=0}}const Ft=e=>e.id==null?1/0:e.id,mn=(e,t)=>{const r=Ft(e)-Ft(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function $o(e){Ir=!1,It=!0,ne.sort(mn);try{for(Oe=0;Oe<ne.length;Oe++){const t=ne[Oe];t&&t.active!==!1&&Ve(t,null,14)}}finally{Oe=0,ne.length=0,jo(),It=!1,ls=null,(ne.length||gt.length)&&$o()}}function vn(e,t,...r){if(e.isUnmounted)return;const s=e.vnode.props||X;let o=r;const i=t.startsWith("update:"),n=i&&t.slice(7);if(n&&n in s){const u=`${n==="modelValue"?"model":n}Modifiers`,{number:f,trim:p}=s[u]||X;p&&(o=r.map(w=>oe(w)?w.trim():w)),f&&(o=r.map(Ti))}let c,a=s[c=xr(t)]||s[c=xr(bt(t))];!a&&i&&(a=s[c=xr(xt(t))]),a&&Se(a,e,6,o);const d=s[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Se(d,e,6,o)}}function No(e,t,r=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let n={},c=!1;if(!j(e)){const a=d=>{const u=No(d,t,!0);u&&(c=!0,se(n,u))};!r&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(G(e)&&s.set(e,null),null):(F(i)?i.forEach(a=>n[a]=null):se(n,i),G(e)&&s.set(e,n),n)}function pr(e,t){return!e||!ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,xt(t))||B(e,t))}let Me=null,gr=null;function or(e){const t=Me;return Me=e,gr=e&&e.type.__scopeId||null,t}function yn(e){gr=e}function wn(){gr=null}function _n(e,t=Me,r){if(!t||e._n)return e;const s=(...o)=>{s._d&&Fs(-1);const i=or(t);let n;try{n=e(...o)}finally{or(i),s._d&&Fs(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function Ar(e){const{type:t,vnode:r,proxy:s,withProxy:o,props:i,propsOptions:[n],slots:c,attrs:a,emit:d,render:u,renderCache:f,data:p,setupState:w,ctx:C,inheritAttrs:L}=e;let I,P;const M=or(e);try{if(r.shapeFlag&4){const H=o||s,re=H;I=qe(u.call(re,H,f,i,w,p,C)),P=a}else{const H=t;I=qe(H.length>1?H(i,{attrs:a,slots:c,emit:d}):H(i,null)),P=t.props?a:xn(a)}}catch(H){Mt.length=0,fr(H,e,1),I=ge(jt)}let U=I;if(P&&L!==!1){const H=Object.keys(P),{shapeFlag:re}=U;H.length&&re&7&&(n&&H.some(Qr)&&(P=Sn(P,n)),U=vt(U,P))}return r.dirs&&(U=vt(U),U.dirs=U.dirs?U.dirs.concat(r.dirs):r.dirs),r.transition&&(U.transition=r.transition),I=U,or(M),I}const xn=e=>{let t;for(const r in e)(r==="class"||r==="style"||ar(r))&&((t||(t={}))[r]=e[r]);return t},Sn=(e,t)=>{const r={};for(const s in e)(!Qr(s)||!(s.slice(9)in t))&&(r[s]=e[s]);return r};function An(e,t,r){const{props:s,children:o,component:i}=e,{props:n,children:c,patchFlag:a}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&a>=0){if(a&1024)return!0;if(a&16)return s?Ls(s,n,d):!!n;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(n[p]!==s[p]&&!pr(d,p))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:s===n?!1:s?n?Ls(s,n,d):!0:!!n;return!1}function Ls(e,t,r){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(t[i]!==e[i]&&!pr(r,i))return!0}return!1}function En({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const Rn=Symbol.for("v-ndc"),kn=e=>e.__isSuspense;function Cn(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):bn(e)}const Jt={};function Zt(e,t,r){return Do(e,t,r)}function Do(e,t,{immediate:r,deep:s,flush:o,onTrack:i,onTrigger:n}=X){var c;const a=ji()===((c=le)==null?void 0:c.scope)?le:null;let d,u=!1,f=!1;if(ae(e)?(d=()=>e.value,u=sr(e)):pt(e)?(d=()=>e,s=!0):F(e)?(f=!0,u=e.some(H=>pt(H)||sr(H)),d=()=>e.map(H=>{if(ae(H))return H.value;if(pt(H))return ht(H);if(j(H))return Ve(H,a,2)})):j(e)?t?d=()=>Ve(e,a,2):d=()=>{if(!(a&&a.isUnmounted))return p&&p(),Se(e,a,3,[w])}:d=He,t&&s){const H=d;d=()=>ht(H())}let p,w=H=>{p=M.onStop=()=>{Ve(H,a,4),p=M.onStop=void 0}},C;if(Nt)if(w=He,t?r&&Se(t,a,3,[d(),f?[]:void 0,w]):d(),o==="sync"){const H=_l();C=H.__watcherHandles||(H.__watcherHandles=[])}else return He;let L=f?new Array(e.length).fill(Jt):Jt;const I=()=>{if(M.active)if(t){const H=M.run();(s||u||(f?H.some((re,ie)=>ot(re,L[ie])):ot(H,L)))&&(p&&p(),Se(t,a,3,[H,L===Jt?void 0:f&&L[0]===Jt?[]:L,w]),L=H)}else M.run()};I.allowRecurse=!!t;let P;o==="sync"?P=I:o==="post"?P=()=>de(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),P=()=>as(I));const M=new ts(d,P);t?r?I():L=M.run():o==="post"?de(M.run.bind(M),a&&a.suspense):M.run();const U=()=>{M.stop(),a&&a.scope&&Jr(a.scope.effects,M)};return C&&C.push(U),U}function Ln(e,t,r){const s=this.proxy,o=oe(e)?e.includes(".")?Bo(s,e):()=>s[e]:e.bind(s,s);let i;j(t)?i=t:(i=t.handler,r=t);const n=le;yt(this);const c=Do(o,i.bind(s),r);return n?yt(n):st(),c}function Bo(e,t){const r=t.split(".");return()=>{let s=e;for(let o=0;o<r.length&&s;o++)s=s[r[o]];return s}}function ht(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))ht(e.value,t);else if(F(e))for(let r=0;r<e.length;r++)ht(e[r],t);else if(Ai(e)||qt(e))e.forEach(r=>{ht(r,t)});else if(ki(e))for(const r in e)ht(e[r],t);return e}function Xe(e,t,r,s){const o=e.dirs,i=t&&t.dirs;for(let n=0;n<o.length;n++){const c=o[n];i&&(c.oldValue=i[n].value);let a=c.dir[s];a&&(St(),Se(a,r,8,[e.el,c,e,t]),At())}}/*! #__NO_SIDE_EFFECTS__ */function Uo(e,t){return j(e)?se({name:e.name},t,{setup:e}):e}const Gt=e=>!!e.type.__asyncLoader,Wo=e=>e.type.__isKeepAlive;function Tn(e,t){Ko(e,"a",t)}function qn(e,t){Ko(e,"da",t)}function Ko(e,t,r=le){const s=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(br(t,s,r),r){let o=r.parent;for(;o&&o.parent;)Wo(o.parent.vnode)&&On(s,t,r,o),o=o.parent}}function On(e,t,r,s){const o=br(t,e,s,!0);Vo(()=>{Jr(s[t],o)},r)}function br(e,t,r=le,s=!1){if(r){const o=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...n)=>{if(r.isUnmounted)return;St(),yt(r);const c=Se(t,r,e,n);return st(),At(),c});return s?o.unshift(i):o.push(i),i}}const $e=e=>(t,r=le)=>(!Nt||e==="sp")&&br(e,(...s)=>t(...s),r),Mn=$e("bm"),cs=$e("m"),Hn=$e("bu"),Pn=$e("u"),zn=$e("bum"),Vo=$e("um"),In=$e("sp"),Fn=$e("rtg"),jn=$e("rtc");function $n(e,t=le){br("ec",e,t)}const Fr=e=>e?ii(e)?ps(e)||e.proxy:Fr(e.parent):null,Ot=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fr(e.parent),$root:e=>Fr(e.root),$emit:e=>e.emit,$options:e=>us(e),$forceUpdate:e=>e.f||(e.f=()=>as(e.update)),$nextTick:e=>e.n||(e.n=Io.bind(e.proxy)),$watch:e=>Ln.bind(e)}),Er=(e,t)=>e!==X&&!e.__isScriptSetup&&B(e,t),Nn={get({_:e},t){const{ctx:r,setupState:s,data:o,props:i,accessCache:n,type:c,appContext:a}=e;let d;if(t[0]!=="$"){const w=n[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return r[t];case 3:return i[t]}else{if(Er(s,t))return n[t]=1,s[t];if(o!==X&&B(o,t))return n[t]=2,o[t];if((d=e.propsOptions[0])&&B(d,t))return n[t]=3,i[t];if(r!==X&&B(r,t))return n[t]=4,r[t];jr&&(n[t]=0)}}const u=Ot[t];let f,p;if(u)return t==="$attrs"&&he(e,"get",t),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(r!==X&&B(r,t))return n[t]=4,r[t];if(p=a.config.globalProperties,B(p,t))return p[t]},set({_:e},t,r){const{data:s,setupState:o,ctx:i}=e;return Er(o,t)?(o[t]=r,!0):s!==X&&B(s,t)?(s[t]=r,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:s,appContext:o,propsOptions:i}},n){let c;return!!r[n]||e!==X&&B(e,n)||Er(t,n)||(c=i[0])&&B(c,n)||B(s,n)||B(Ot,n)||B(o.config.globalProperties,n)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:B(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Ts(e){return F(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let jr=!0;function Dn(e){const t=us(e),r=e.proxy,s=e.ctx;jr=!1,t.beforeCreate&&qs(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:n,watch:c,provide:a,inject:d,created:u,beforeMount:f,mounted:p,beforeUpdate:w,updated:C,activated:L,deactivated:I,beforeDestroy:P,beforeUnmount:M,destroyed:U,unmounted:H,render:re,renderTracked:ie,renderTriggered:be,errorCaptured:Re,serverPrefetch:it,expose:ke,inheritAttrs:Ne,components:Ce,directives:nt,filters:Qe}=t;if(d&&Bn(d,s,null),n)for(const Q in n){const V=n[Q];j(V)&&(s[Q]=V.bind(r))}if(o){const Q=o.call(r,r);G(Q)&&(e.data=Bt(Q))}if(jr=!0,i)for(const Q in i){const V=i[Q],me=j(V)?V.bind(r,r):j(V.get)?V.get.bind(r,r):He,Je=!j(V)&&j(V.set)?V.set.bind(r):He,ve=pe({get:me,set:Je});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>ve.value,set:ue=>ve.value=ue})}if(c)for(const Q in c)Yo(c[Q],s,r,Q);if(a){const Q=j(a)?a.call(r):a;Reflect.ownKeys(Q).forEach(V=>{er(V,Q[V])})}u&&qs(u,e,"c");function ee(Q,V){F(V)?V.forEach(me=>Q(me.bind(r))):V&&Q(V.bind(r))}if(ee(Mn,f),ee(cs,p),ee(Hn,w),ee(Pn,C),ee(Tn,L),ee(qn,I),ee($n,Re),ee(jn,ie),ee(Fn,be),ee(zn,M),ee(Vo,H),ee(In,it),F(ke))if(ke.length){const Q=e.exposed||(e.exposed={});ke.forEach(V=>{Object.defineProperty(Q,V,{get:()=>r[V],set:me=>r[V]=me})})}else e.exposed||(e.exposed={});re&&e.render===He&&(e.render=re),Ne!=null&&(e.inheritAttrs=Ne),Ce&&(e.components=Ce),nt&&(e.directives=nt)}function Bn(e,t,r=He){F(e)&&(e=$r(e));for(const s in e){const o=e[s];let i;G(o)?"default"in o?i=Ae(o.from||s,o.default,!0):i=Ae(o.from||s):i=Ae(o),ae(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:n=>i.value=n}):t[s]=i}}function qs(e,t,r){Se(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,r)}function Yo(e,t,r,s){const o=s.includes(".")?Bo(r,s):()=>r[s];if(oe(e)){const i=t[e];j(i)&&Zt(o,i)}else if(j(e))Zt(o,e.bind(r));else if(G(e))if(F(e))e.forEach(i=>Yo(i,t,r,s));else{const i=j(e.handler)?e.handler.bind(r):t[e.handler];j(i)&&Zt(o,i,e)}}function us(e){const t=e.type,{mixins:r,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:n}}=e.appContext,c=i.get(t);let a;return c?a=c:!o.length&&!r&&!s?a=t:(a={},o.length&&o.forEach(d=>ir(a,d,n,!0)),ir(a,t,n)),G(t)&&i.set(t,a),a}function ir(e,t,r,s=!1){const{mixins:o,extends:i}=t;i&&ir(e,i,r,!0),o&&o.forEach(n=>ir(e,n,r,!0));for(const n in t)if(!(s&&n==="expose")){const c=Un[n]||r&&r[n];e[n]=c?c(e[n],t[n]):t[n]}return e}const Un={data:Os,props:Ms,emits:Ms,methods:Tt,computed:Tt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Tt,directives:Tt,watch:Kn,provide:Os,inject:Wn};function Os(e,t){return t?e?function(){return se(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Wn(e,t){return Tt($r(e),$r(t))}function $r(e){if(F(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Tt(e,t){return e?se(Object.create(null),e,t):t}function Ms(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:se(Object.create(null),Ts(e),Ts(t??{})):t}function Kn(e,t){if(!e)return t;if(!t)return e;const r=se(Object.create(null),e);for(const s in t)r[s]=ce(e[s],t[s]);return r}function Qo(){return{app:null,config:{isNativeTag:_i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vn=0;function Yn(e,t){return function(s,o=null){j(s)||(s=se({},s)),o!=null&&!G(o)&&(o=null);const i=Qo(),n=new WeakSet;let c=!1;const a=i.app={_uid:Vn++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:xl,get config(){return i.config},set config(d){},use(d,...u){return n.has(d)||(d&&j(d.install)?(n.add(d),d.install(a,...u)):j(d)&&(n.add(d),d(a,...u))),a},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),a},component(d,u){return u?(i.components[d]=u,a):i.components[d]},directive(d,u){return u?(i.directives[d]=u,a):i.directives[d]},mount(d,u,f){if(!c){const p=ge(s,o);return p.appContext=i,u&&t?t(p,d):e(p,d,f),c=!0,a._container=d,d.__vue_app__=a,ps(p.component)||p.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,u){return i.provides[d]=u,a},runWithContext(d){nr=a;try{return d()}finally{nr=null}}};return a}}let nr=null;function er(e,t){if(le){let r=le.provides;const s=le.parent&&le.parent.provides;s===r&&(r=le.provides=Object.create(s)),r[e]=t}}function Ae(e,t,r=!1){const s=le||Me;if(s||nr){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:nr._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&j(t)?t.call(s&&s.proxy):t}}function Qn(e,t,r,s=!1){const o={},i={};rr(i,vr,1),e.propsDefaults=Object.create(null),Jo(e,t,o,i);for(const n in e.propsOptions[0])n in o||(o[n]=void 0);r?e.props=s?o:ln(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Jn(e,t,r,s){const{props:o,attrs:i,vnode:{patchFlag:n}}=e,c=W(o),[a]=e.propsOptions;let d=!1;if((s||n>0)&&!(n&16)){if(n&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(pr(e.emitsOptions,p))continue;const w=t[p];if(a)if(B(i,p))w!==i[p]&&(i[p]=w,d=!0);else{const C=bt(p);o[C]=Nr(a,c,C,w,e,!1)}else w!==i[p]&&(i[p]=w,d=!0)}}}else{Jo(e,t,o,i)&&(d=!0);let u;for(const f in c)(!t||!B(t,f)&&((u=xt(f))===f||!B(t,u)))&&(a?r&&(r[f]!==void 0||r[u]!==void 0)&&(o[f]=Nr(a,c,f,void 0,e,!0)):delete o[f]);if(i!==c)for(const f in i)(!t||!B(t,f))&&(delete i[f],d=!0)}d&&je(e,"set","$attrs")}function Jo(e,t,r,s){const[o,i]=e.propsOptions;let n=!1,c;if(t)for(let a in t){if(Xt(a))continue;const d=t[a];let u;o&&B(o,u=bt(a))?!i||!i.includes(u)?r[u]=d:(c||(c={}))[u]=d:pr(e.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,n=!0)}if(i){const a=W(r),d=c||X;for(let u=0;u<i.length;u++){const f=i[u];r[f]=Nr(o,a,f,d[f],e,!B(d,f))}}return n}function Nr(e,t,r,s,o,i){const n=e[r];if(n!=null){const c=B(n,"default");if(c&&s===void 0){const a=n.default;if(n.type!==Function&&!n.skipFactory&&j(a)){const{propsDefaults:d}=o;r in d?s=d[r]:(yt(o),s=d[r]=a.call(null,t),st())}else s=a}n[0]&&(i&&!c?s=!1:n[1]&&(s===""||s===xt(r))&&(s=!0))}return s}function Xo(e,t,r=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const i=e.props,n={},c=[];let a=!1;if(!j(e)){const u=f=>{a=!0;const[p,w]=Xo(f,t,!0);se(n,p),w&&c.push(...w)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return G(e)&&s.set(e,ft),ft;if(F(i))for(let u=0;u<i.length;u++){const f=bt(i[u]);Hs(f)&&(n[f]=X)}else if(i)for(const u in i){const f=bt(u);if(Hs(f)){const p=i[u],w=n[f]=F(p)||j(p)?{type:p}:se({},p);if(w){const C=Is(Boolean,w.type),L=Is(String,w.type);w[0]=C>-1,w[1]=L<0||C<L,(C>-1||B(w,"default"))&&c.push(f)}}}const d=[n,c];return G(e)&&s.set(e,d),d}function Hs(e){return e[0]!=="$"}function Ps(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function zs(e,t){return Ps(e)===Ps(t)}function Is(e,t){return F(t)?t.findIndex(r=>zs(r,e)):j(t)&&zs(t,e)?0:-1}const Zo=e=>e[0]==="_"||e==="$stable",ds=e=>F(e)?e.map(qe):[qe(e)],Xn=(e,t,r)=>{if(t._n)return t;const s=_n((...o)=>ds(t(...o)),r);return s._c=!1,s},Go=(e,t,r)=>{const s=e._ctx;for(const o in e){if(Zo(o))continue;const i=e[o];if(j(i))t[o]=Xn(o,i,s);else if(i!=null){const n=ds(i);t[o]=()=>n}}},ei=(e,t)=>{const r=ds(t);e.slots.default=()=>r},Zn=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=W(t),rr(t,"_",r)):Go(t,e.slots={})}else e.slots={},t&&ei(e,t);rr(e.slots,vr,1)},Gn=(e,t,r)=>{const{vnode:s,slots:o}=e;let i=!0,n=X;if(s.shapeFlag&32){const c=t._;c?r&&c===1?i=!1:(se(o,t),!r&&c===1&&delete o._):(i=!t.$stable,Go(t,o)),n=t}else t&&(ei(e,t),n={default:1});if(i)for(const c in o)!Zo(c)&&n[c]==null&&delete o[c]};function Dr(e,t,r,s,o=!1){if(F(e)){e.forEach((p,w)=>Dr(p,t&&(F(t)?t[w]:t),r,s,o));return}if(Gt(s)&&!o)return;const i=s.shapeFlag&4?ps(s.component)||s.component.proxy:s.el,n=o?null:i,{i:c,r:a}=e,d=t&&t.r,u=c.refs===X?c.refs={}:c.refs,f=c.setupState;if(d!=null&&d!==a&&(oe(d)?(u[d]=null,B(f,d)&&(f[d]=null)):ae(d)&&(d.value=null)),j(a))Ve(a,c,12,[n,u]);else{const p=oe(a),w=ae(a);if(p||w){const C=()=>{if(e.f){const L=p?B(f,a)?f[a]:u[a]:a.value;o?F(L)&&Jr(L,i):F(L)?L.includes(i)||L.push(i):p?(u[a]=[i],B(f,a)&&(f[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else p?(u[a]=n,B(f,a)&&(f[a]=n)):w&&(a.value=n,e.k&&(u[e.k]=n))};n?(C.id=-1,de(C,r)):C()}}}const de=Cn;function el(e){return tl(e)}function tl(e,t){const r=Or();r.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:n,createText:c,createComment:a,setText:d,setElementText:u,parentNode:f,nextSibling:p,setScopeId:w=He,insertStaticContent:C}=e,L=(l,h,g,b=null,v=null,x=null,E=!1,_=null,S=!!h.dynamicChildren)=>{if(l===h)return;l&&!kt(l,h)&&(b=A(l),ue(l,v,x,!0),l=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:y,ref:q,shapeFlag:k}=h;switch(y){case mr:I(l,h,g,b);break;case jt:P(l,h,g,b);break;case Rr:l==null&&M(h,g,b,E);break;case Ie:Ce(l,h,g,b,v,x,E,_,S);break;default:k&1?re(l,h,g,b,v,x,E,_,S):k&6?nt(l,h,g,b,v,x,E,_,S):(k&64||k&128)&&y.process(l,h,g,b,v,x,E,_,S,D)}q!=null&&v&&Dr(q,l&&l.ref,x,h||l,!h)},I=(l,h,g,b)=>{if(l==null)s(h.el=c(h.children),g,b);else{const v=h.el=l.el;h.children!==l.children&&d(v,h.children)}},P=(l,h,g,b)=>{l==null?s(h.el=a(h.children||""),g,b):h.el=l.el},M=(l,h,g,b)=>{[l.el,l.anchor]=C(l.children,h,g,b,l.el,l.anchor)},U=({el:l,anchor:h},g,b)=>{let v;for(;l&&l!==h;)v=p(l),s(l,g,b),l=v;s(h,g,b)},H=({el:l,anchor:h})=>{let g;for(;l&&l!==h;)g=p(l),o(l),l=g;o(h)},re=(l,h,g,b,v,x,E,_,S)=>{E=E||h.type==="svg",l==null?ie(h,g,b,v,x,E,_,S):it(l,h,v,x,E,_,S)},ie=(l,h,g,b,v,x,E,_)=>{let S,y;const{type:q,props:k,shapeFlag:O,transition:z,dirs:N}=l;if(S=l.el=n(l.type,x,k&&k.is,k),O&8?u(S,l.children):O&16&&Re(l.children,S,null,b,v,x&&q!=="foreignObject",E,_),N&&Xe(l,null,b,"created"),be(S,l,l.scopeId,E,b),k){for(const Y in k)Y!=="value"&&!Xt(Y)&&i(S,Y,null,k[Y],x,l.children,b,v,R);"value"in k&&i(S,"value",null,k.value),(y=k.onVnodeBeforeMount)&&Te(y,b,l)}N&&Xe(l,null,b,"beforeMount");const J=rl(v,z);J&&z.beforeEnter(S),s(S,h,g),((y=k&&k.onVnodeMounted)||J||N)&&de(()=>{y&&Te(y,b,l),J&&z.enter(S),N&&Xe(l,null,b,"mounted")},v)},be=(l,h,g,b,v)=>{if(g&&w(l,g),b)for(let x=0;x<b.length;x++)w(l,b[x]);if(v){let x=v.subTree;if(h===x){const E=v.vnode;be(l,E,E.scopeId,E.slotScopeIds,v.parent)}}},Re=(l,h,g,b,v,x,E,_,S=0)=>{for(let y=S;y<l.length;y++){const q=l[y]=_?Ue(l[y]):qe(l[y]);L(null,q,h,g,b,v,x,E,_)}},it=(l,h,g,b,v,x,E)=>{const _=h.el=l.el;let{patchFlag:S,dynamicChildren:y,dirs:q}=h;S|=l.patchFlag&16;const k=l.props||X,O=h.props||X;let z;g&&Ze(g,!1),(z=O.onVnodeBeforeUpdate)&&Te(z,g,h,l),q&&Xe(h,l,g,"beforeUpdate"),g&&Ze(g,!0);const N=v&&h.type!=="foreignObject";if(y?ke(l.dynamicChildren,y,_,g,b,N,x):E||V(l,h,_,null,g,b,N,x,!1),S>0){if(S&16)Ne(_,h,k,O,g,b,v);else if(S&2&&k.class!==O.class&&i(_,"class",null,O.class,v),S&4&&i(_,"style",k.style,O.style,v),S&8){const J=h.dynamicProps;for(let Y=0;Y<J.length;Y++){const te=J[Y],ye=k[te],at=O[te];(at!==ye||te==="value")&&i(_,te,ye,at,v,l.children,g,b,R)}}S&1&&l.children!==h.children&&u(_,h.children)}else!E&&y==null&&Ne(_,h,k,O,g,b,v);((z=O.onVnodeUpdated)||q)&&de(()=>{z&&Te(z,g,h,l),q&&Xe(h,l,g,"updated")},b)},ke=(l,h,g,b,v,x,E)=>{for(let _=0;_<h.length;_++){const S=l[_],y=h[_],q=S.el&&(S.type===Ie||!kt(S,y)||S.shapeFlag&70)?f(S.el):g;L(S,y,q,null,b,v,x,E,!0)}},Ne=(l,h,g,b,v,x,E)=>{if(g!==b){if(g!==X)for(const _ in g)!Xt(_)&&!(_ in b)&&i(l,_,g[_],null,E,h.children,v,x,R);for(const _ in b){if(Xt(_))continue;const S=b[_],y=g[_];S!==y&&_!=="value"&&i(l,_,y,S,E,h.children,v,x,R)}"value"in b&&i(l,"value",g.value,b.value)}},Ce=(l,h,g,b,v,x,E,_,S)=>{const y=h.el=l?l.el:c(""),q=h.anchor=l?l.anchor:c("");let{patchFlag:k,dynamicChildren:O,slotScopeIds:z}=h;z&&(_=_?_.concat(z):z),l==null?(s(y,g,b),s(q,g,b),Re(h.children,g,q,v,x,E,_,S)):k>0&&k&64&&O&&l.dynamicChildren?(ke(l.dynamicChildren,O,g,v,x,E,_),(h.key!=null||v&&h===v.subTree)&&ti(l,h,!0)):V(l,h,g,q,v,x,E,_,S)},nt=(l,h,g,b,v,x,E,_,S)=>{h.slotScopeIds=_,l==null?h.shapeFlag&512?v.ctx.activate(h,g,b,E,S):Qe(h,g,b,v,x,E,S):Et(l,h,S)},Qe=(l,h,g,b,v,x,E)=>{const _=l.component=pl(l,b,v);if(Wo(l)&&(_.ctx.renderer=D),gl(_),_.asyncDep){if(v&&v.registerDep(_,ee),!l.el){const S=_.subTree=ge(jt);P(null,S,h,g)}return}ee(_,l,h,g,v,x,E)},Et=(l,h,g)=>{const b=h.component=l.component;if(An(l,h,g))if(b.asyncDep&&!b.asyncResolved){Q(b,h,g);return}else b.next=h,gn(b.update),b.update();else h.el=l.el,b.vnode=h},ee=(l,h,g,b,v,x,E)=>{const _=()=>{if(l.isMounted){let{next:q,bu:k,u:O,parent:z,vnode:N}=l,J=q,Y;Ze(l,!1),q?(q.el=N.el,Q(l,q,E)):q=N,k&&Sr(k),(Y=q.props&&q.props.onVnodeBeforeUpdate)&&Te(Y,z,q,N),Ze(l,!0);const te=Ar(l),ye=l.subTree;l.subTree=te,L(ye,te,f(ye.el),A(ye),l,v,x),q.el=te.el,J===null&&En(l,te.el),O&&de(O,v),(Y=q.props&&q.props.onVnodeUpdated)&&de(()=>Te(Y,z,q,N),v)}else{let q;const{el:k,props:O}=h,{bm:z,m:N,parent:J}=l,Y=Gt(h);if(Ze(l,!1),z&&Sr(z),!Y&&(q=O&&O.onVnodeBeforeMount)&&Te(q,J,h),Ze(l,!0),k&&$){const te=()=>{l.subTree=Ar(l),$(k,l.subTree,l,v,null)};Y?h.type.__asyncLoader().then(()=>!l.isUnmounted&&te()):te()}else{const te=l.subTree=Ar(l);L(null,te,g,b,l,v,x),h.el=te.el}if(N&&de(N,v),!Y&&(q=O&&O.onVnodeMounted)){const te=h;de(()=>Te(q,J,te),v)}(h.shapeFlag&256||J&&Gt(J.vnode)&&J.vnode.shapeFlag&256)&&l.a&&de(l.a,v),l.isMounted=!0,h=g=b=null}},S=l.effect=new ts(_,()=>as(y),l.scope),y=l.update=()=>S.run();y.id=l.uid,Ze(l,!0),y()},Q=(l,h,g)=>{h.component=l;const b=l.vnode.props;l.vnode=h,l.next=null,Jn(l,h.props,b,g),Gn(l,h.children,g),St(),Cs(),At()},V=(l,h,g,b,v,x,E,_,S=!1)=>{const y=l&&l.children,q=l?l.shapeFlag:0,k=h.children,{patchFlag:O,shapeFlag:z}=h;if(O>0){if(O&128){Je(y,k,g,b,v,x,E,_,S);return}else if(O&256){me(y,k,g,b,v,x,E,_,S);return}}z&8?(q&16&&R(y,v,x),k!==y&&u(g,k)):q&16?z&16?Je(y,k,g,b,v,x,E,_,S):R(y,v,x,!0):(q&8&&u(g,""),z&16&&Re(k,g,b,v,x,E,_,S))},me=(l,h,g,b,v,x,E,_,S)=>{l=l||ft,h=h||ft;const y=l.length,q=h.length,k=Math.min(y,q);let O;for(O=0;O<k;O++){const z=h[O]=S?Ue(h[O]):qe(h[O]);L(l[O],z,g,null,v,x,E,_,S)}y>q?R(l,v,x,!0,!1,k):Re(h,g,b,v,x,E,_,S,k)},Je=(l,h,g,b,v,x,E,_,S)=>{let y=0;const q=h.length;let k=l.length-1,O=q-1;for(;y<=k&&y<=O;){const z=l[y],N=h[y]=S?Ue(h[y]):qe(h[y]);if(kt(z,N))L(z,N,g,null,v,x,E,_,S);else break;y++}for(;y<=k&&y<=O;){const z=l[k],N=h[O]=S?Ue(h[O]):qe(h[O]);if(kt(z,N))L(z,N,g,null,v,x,E,_,S);else break;k--,O--}if(y>k){if(y<=O){const z=O+1,N=z<q?h[z].el:b;for(;y<=O;)L(null,h[y]=S?Ue(h[y]):qe(h[y]),g,N,v,x,E,_,S),y++}}else if(y>O)for(;y<=k;)ue(l[y],v,x,!0),y++;else{const z=y,N=y,J=new Map;for(y=N;y<=O;y++){const fe=h[y]=S?Ue(h[y]):qe(h[y]);fe.key!=null&&J.set(fe.key,y)}let Y,te=0;const ye=O-N+1;let at=!1,ms=0;const Rt=new Array(ye);for(y=0;y<ye;y++)Rt[y]=0;for(y=z;y<=k;y++){const fe=l[y];if(te>=ye){ue(fe,v,x,!0);continue}let Le;if(fe.key!=null)Le=J.get(fe.key);else for(Y=N;Y<=O;Y++)if(Rt[Y-N]===0&&kt(fe,h[Y])){Le=Y;break}Le===void 0?ue(fe,v,x,!0):(Rt[Le-N]=y+1,Le>=ms?ms=Le:at=!0,L(fe,h[Le],g,null,v,x,E,_,S),te++)}const vs=at?sl(Rt):ft;for(Y=vs.length-1,y=ye-1;y>=0;y--){const fe=N+y,Le=h[fe],ys=fe+1<q?h[fe+1].el:b;Rt[y]===0?L(null,Le,g,ys,v,x,E,_,S):at&&(Y<0||y!==vs[Y]?ve(Le,g,ys,2):Y--)}}},ve=(l,h,g,b,v=null)=>{const{el:x,type:E,transition:_,children:S,shapeFlag:y}=l;if(y&6){ve(l.component.subTree,h,g,b);return}if(y&128){l.suspense.move(h,g,b);return}if(y&64){E.move(l,h,g,D);return}if(E===Ie){s(x,h,g);for(let k=0;k<S.length;k++)ve(S[k],h,g,b);s(l.anchor,h,g);return}if(E===Rr){U(l,h,g);return}if(b!==2&&y&1&&_)if(b===0)_.beforeEnter(x),s(x,h,g),de(()=>_.enter(x),v);else{const{leave:k,delayLeave:O,afterLeave:z}=_,N=()=>s(x,h,g),J=()=>{k(x,()=>{N(),z&&z()})};O?O(x,N,J):J()}else s(x,h,g)},ue=(l,h,g,b=!1,v=!1)=>{const{type:x,props:E,ref:_,children:S,dynamicChildren:y,shapeFlag:q,patchFlag:k,dirs:O}=l;if(_!=null&&Dr(_,null,g,l,!0),q&256){h.ctx.deactivate(l);return}const z=q&1&&O,N=!Gt(l);let J;if(N&&(J=E&&E.onVnodeBeforeUnmount)&&Te(J,h,l),q&6)m(l.component,g,b);else{if(q&128){l.suspense.unmount(g,b);return}z&&Xe(l,null,h,"beforeUnmount"),q&64?l.type.remove(l,h,g,v,D,b):y&&(x!==Ie||k>0&&k&64)?R(y,h,g,!1,!0):(x===Ie&&k&384||!v&&q&16)&&R(S,h,g),b&&lt(l)}(N&&(J=E&&E.onVnodeUnmounted)||z)&&de(()=>{J&&Te(J,h,l),z&&Xe(l,null,h,"unmounted")},g)},lt=l=>{const{type:h,el:g,anchor:b,transition:v}=l;if(h===Ie){Ut(g,b);return}if(h===Rr){H(l);return}const x=()=>{o(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(l.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:_}=v,S=()=>E(g,x);_?_(l.el,x,S):S()}else x()},Ut=(l,h)=>{let g;for(;l!==h;)g=p(l),o(l),l=g;o(h)},m=(l,h,g)=>{const{bum:b,scope:v,update:x,subTree:E,um:_}=l;b&&Sr(b),v.stop(),x&&(x.active=!1,ue(E,l,h,g)),_&&de(_,h),de(()=>{l.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},R=(l,h,g,b=!1,v=!1,x=0)=>{for(let E=x;E<l.length;E++)ue(l[E],h,g,b,v)},A=l=>l.shapeFlag&6?A(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),T=(l,h,g)=>{l==null?h._vnode&&ue(h._vnode,null,null,!0):L(h._vnode||null,l,h,null,null,null,g),Cs(),jo(),h._vnode=l},D={p:L,um:ue,m:ve,r:lt,mt:Qe,mc:Re,pc:V,pbc:ke,n:A,o:e};let Z,$;return t&&([Z,$]=t(D)),{render:T,hydrate:Z,createApp:Yn(T,Z)}}function Ze({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function rl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ti(e,t,r=!1){const s=e.children,o=t.children;if(F(s)&&F(o))for(let i=0;i<s.length;i++){const n=s[i];let c=o[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[i]=Ue(o[i]),c.el=n.el),r||ti(n,c)),c.type===mr&&(c.el=n.el)}}function sl(e){const t=e.slice(),r=[0];let s,o,i,n,c;const a=e.length;for(s=0;s<a;s++){const d=e[s];if(d!==0){if(o=r[r.length-1],e[o]<d){t[s]=o,r.push(s);continue}for(i=0,n=r.length-1;i<n;)c=i+n>>1,e[r[c]]<d?i=c+1:n=c;d<e[r[i]]&&(i>0&&(t[s]=r[i-1]),r[i]=s)}}for(i=r.length,n=r[i-1];i-- >0;)r[i]=n,n=t[n];return r}const ol=e=>e.__isTeleport,Ie=Symbol.for("v-fgt"),mr=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Rr=Symbol.for("v-stc"),Mt=[];let xe=null;function ri(e=!1){Mt.push(xe=e?null:[])}function il(){Mt.pop(),xe=Mt[Mt.length-1]||null}let $t=1;function Fs(e){$t+=e}function si(e){return e.dynamicChildren=$t>0?xe||ft:null,il(),$t>0&&xe&&xe.push(e),e}function nl(e,t,r,s,o,i){return si(Fe(e,t,r,s,o,i,!0))}function ll(e,t,r,s,o){return si(ge(e,t,r,s,o,!0))}function Br(e){return e?e.__v_isVNode===!0:!1}function kt(e,t){return e.type===t.type&&e.key===t.key}const vr="__vInternal",oi=({key:e})=>e??null,tr=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||ae(e)||j(e)?{i:Me,r:e,k:t,f:!!r}:e:null);function Fe(e,t=null,r=null,s=0,o=null,i=e===Ie?0:1,n=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&oi(t),ref:t&&tr(t),scopeId:gr,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Me};return c?(hs(a,r),i&128&&e.normalize(a)):r&&(a.shapeFlag|=oe(r)?8:16),$t>0&&!n&&xe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&xe.push(a),a}const ge=al;function al(e,t=null,r=null,s=0,o=null,i=!1){if((!e||e===Rn)&&(e=jt),Br(e)){const c=vt(e,t,!0);return r&&hs(c,r),$t>0&&!i&&xe&&(c.shapeFlag&6?xe[xe.indexOf(e)]=c:xe.push(c)),c.patchFlag|=-2,c}if(yl(e)&&(e=e.__vccOpts),t){t=cl(t);let{class:c,style:a}=t;c&&!oe(c)&&(t.class=Gr(c)),G(a)&&(To(a)&&!F(a)&&(a=se({},a)),t.style=Zr(a))}const n=oe(e)?1:kn(e)?128:ol(e)?64:G(e)?4:j(e)?2:0;return Fe(e,t,r,s,o,n,i,!0)}function cl(e){return e?To(e)||vr in e?se({},e):e:null}function vt(e,t,r=!1){const{props:s,ref:o,patchFlag:i,children:n}=e,c=t?dl(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&oi(c),ref:t&&t.ref?r&&o?F(o)?o.concat(tr(t)):[o,tr(t)]:tr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ul(e=" ",t=0){return ge(mr,null,e,t)}function qe(e){return e==null||typeof e=="boolean"?ge(jt):F(e)?ge(Ie,null,e.slice()):typeof e=="object"?Ue(e):ge(mr,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vt(e)}function hs(e,t){let r=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))r=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),hs(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(vr in t)?t._ctx=Me:o===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Me},r=32):(t=String(t),s&64?(r=16,t=[ul(t)]):r=8);e.children=t,e.shapeFlag|=r}function dl(...e){const t={};for(let r=0;r<e.length;r++){const s=e[r];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Gr([t.class,s.class]));else if(o==="style")t.style=Zr([t.style,s.style]);else if(ar(o)){const i=t[o],n=s[o];n&&i!==n&&!(F(i)&&i.includes(n))&&(t[o]=i?[].concat(i,n):n)}else o!==""&&(t[o]=s[o])}return t}function Te(e,t,r,s=null){Se(e,t,7,[r,s])}const hl=Qo();let fl=0;function pl(e,t,r){const s=e.type,o=(t?t.appContext:e.appContext)||hl,i={uid:fl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xo(s,o),emitsOptions:No(s,o),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vn.bind(null,i),e.ce&&e.ce(i),i}let le=null,fs,ct,js="__VUE_INSTANCE_SETTERS__";(ct=Or()[js])||(ct=Or()[js]=[]),ct.push(e=>le=e),fs=e=>{ct.length>1?ct.forEach(t=>t(e)):ct[0](e)};const yt=e=>{fs(e),e.scope.on()},st=()=>{le&&le.scope.off(),fs(null)};function ii(e){return e.vnode.shapeFlag&4}let Nt=!1;function gl(e,t=!1){Nt=t;const{props:r,children:s}=e.vnode,o=ii(e);Qn(e,r,o,t),Zn(e,s);const i=o?bl(e,t):void 0;return Nt=!1,i}function bl(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=is(new Proxy(e.ctx,Nn));const{setup:s}=r;if(s){const o=e.setupContext=s.length>1?vl(e):null;yt(e),St();const i=Ve(s,e,0,[e.props,o]);if(At(),st(),go(i)){if(i.then(st,st),t)return i.then(n=>{$s(e,n,t)}).catch(n=>{fr(n,e,0)});e.asyncDep=i}else $s(e,i,t)}else ni(e,t)}function $s(e,t,r){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Po(t)),ni(e,r)}let Ns;function ni(e,t,r){const s=e.type;if(!e.render){if(!t&&Ns&&!s.render){const o=s.template||us(e).template;if(o){const{isCustomElement:i,compilerOptions:n}=e.appContext.config,{delimiters:c,compilerOptions:a}=s,d=se(se({isCustomElement:i,delimiters:c},n),a);s.render=Ns(o,d)}}e.render=s.render||He}{yt(e),St();try{Dn(e)}finally{At(),st()}}}function ml(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,r){return he(e,"get","$attrs"),t[r]}}))}function vl(e){const t=r=>{e.exposed=r||{}};return{get attrs(){return ml(e)},slots:e.slots,emit:e.emit,expose:t}}function ps(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Po(is(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Ot)return Ot[r](e)},has(t,r){return r in t||r in Ot}}))}function yl(e){return j(e)&&"__vccOpts"in e}const pe=(e,t)=>hn(e,t,Nt);function li(e,t,r){const s=arguments.length;return s===2?G(t)&&!F(t)?Br(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&Br(r)&&(r=[r]),ge(e,t,r))}const wl=Symbol.for("v-scx"),_l=()=>Ae(wl),xl="3.3.9",Sl="http://www.w3.org/2000/svg",et=typeof document<"u"?document:null,Ds=et&&et.createElement("template"),Al={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,s)=>{const o=t?et.createElementNS(Sl,e):et.createElement(e,r?{is:r}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,s,o,i){const n=r?r.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{Ds.innerHTML=s?`<svg>${e}</svg>`:e;const c=Ds.content;if(s){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,r)}return[n?n.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},El=Symbol("_vtc");function Rl(e,t,r){const s=e[El];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const kl=Symbol("_vod");function Cl(e,t,r){const s=e.style,o=oe(r);if(r&&!o){if(t&&!oe(t))for(const i in t)r[i]==null&&Ur(s,i,"");for(const i in r)Ur(s,i,r[i])}else{const i=s.display;o?t!==r&&(s.cssText=r):t&&e.removeAttribute("style"),kl in e&&(s.display=i)}}const Bs=/\s*!important$/;function Ur(e,t,r){if(F(r))r.forEach(s=>Ur(e,t,s));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const s=Ll(e,t);Bs.test(r)?e.setProperty(xt(s),r.replace(Bs,""),"important"):e[s]=r}}const Us=["Webkit","Moz","ms"],kr={};function Ll(e,t){const r=kr[t];if(r)return r;let s=bt(t);if(s!=="filter"&&s in e)return kr[t]=s;s=bo(s);for(let o=0;o<Us.length;o++){const i=Us[o]+s;if(i in e)return kr[t]=i}return t}const Ws="http://www.w3.org/1999/xlink";function Tl(e,t,r,s,o){if(s&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(Ws,t.slice(6,t.length)):e.setAttributeNS(Ws,t,r);else{const i=zi(t);r==null||i&&!mo(r)?e.removeAttribute(t):e.setAttribute(t,i?"":r)}}function ql(e,t,r,s,o,i,n){if(t==="innerHTML"||t==="textContent"){s&&n(s,o,i),e[t]=r??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=r;const d=c==="OPTION"?e.getAttribute("value"):e.value,u=r??"";d!==u&&(e.value=u),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const d=typeof e[t];d==="boolean"?r=mo(r):r==null&&d==="string"?(r="",a=!0):d==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function Ol(e,t,r,s){e.addEventListener(t,r,s)}function Ml(e,t,r,s){e.removeEventListener(t,r,s)}const Ks=Symbol("_vei");function Hl(e,t,r,s,o=null){const i=e[Ks]||(e[Ks]={}),n=i[t];if(s&&n)n.value=s;else{const[c,a]=Pl(t);if(s){const d=i[t]=Fl(s,o);Ol(e,c,d,a)}else n&&(Ml(e,c,n,a),i[t]=void 0)}}const Vs=/(?:Once|Passive|Capture)$/;function Pl(e){let t;if(Vs.test(e)){t={};let s;for(;s=e.match(Vs);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xt(e.slice(2)),t]}let Cr=0;const zl=Promise.resolve(),Il=()=>Cr||(zl.then(()=>Cr=0),Cr=Date.now());function Fl(e,t){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;Se(jl(s,r.value),t,5,[s])};return r.value=e,r.attached=Il(),r}function jl(e,t){if(F(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Ys=/^on[a-z]/,$l=(e,t,r,s,o=!1,i,n,c,a)=>{t==="class"?Rl(e,s,o):t==="style"?Cl(e,r,s):ar(t)?Qr(t)||Hl(e,t,r,s,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nl(e,t,s,o))?ql(e,t,s,i,n,c,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Tl(e,t,s,o))};function Nl(e,t,r,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Ys.test(t)&&j(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ys.test(t)&&oe(r)?!1:t in e}const Dl=se({patchProp:$l},Al);let Qs;function Bl(){return Qs||(Qs=el(Dl))}const Ul=(...e)=>{const t=Bl().createApp(...e),{mount:r}=t;return t.mount=s=>{const o=Wl(s);if(!o)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const n=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),n},t};function Wl(e){return oe(e)?document.querySelector(e):e}var Kl=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Vl=Symbol();var Js;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Js||(Js={}));function Yl(){const e=Ii(!0),t=e.run(()=>Mo({}));let r=[],s=[];const o=is({install(i){o._a=i,i.provide(Vl,o),i.config.globalProperties.$pinia=o,s.forEach(n=>r.push(n)),s=[]},use(i){return!this._a&&!Kl?s.push(i):r.push(i),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return o}const Ql={initColor:function(s="#1abc9c"){var t=parseInt(s.substring(1,3),16),r=parseInt(s.substring(3,5),16),s=parseInt(s.substring(5,7),16),o=document.createElement("style");o.innerHTML=`body{
			--wcp-base: rgba(${t}, ${r}, ${s}, 1);
            --wcp-base80percent: rgba(${t}, ${r}, ${s}, .8);
            --wcp-base10percent: rgba(${t}, ${r}, ${s}, .1);
		}`,document.body.append(o)},isEmpty:function(e){return e instanceof Array?e.length==0:e instanceof Object?Object.keys(e).length==0:void 0},_cloneDeep(e){let t=null;switch(Object.prototype.toString.call(e).split(" ")[1].split("]")[0]){case"Object":for(var r in t={},e)t[r]=this._cloneDeep(e[r]);break;case"Array":t=[];for(let s=0;s<e.length;s++)t[s]=this._cloneDeep(e[s]);break;case"Map":t=new Map,e.forEach((s,o)=>{t.set(o,this._cloneDeep(s))});break;case"WeakMap":t=new WeakMap,e.forEach((s,o)=>{t.set(o,this._cloneDeep(s))});break;case"Set":t=new Set,e.forEach(s=>{t.add(this._cloneDeep(s))});break;case"Date":t=new Date(e.valueOf());break;default:t=e}return t},cloneDeep(){let e,t,r,s,o,i,n=arguments[0]||{},c=1,a=arguments.length;for(typeof n!="object"&&typeof n!="function"&&(n={}),c===a&&(n=this,c--);c<a;c++)if((e=arguments[c])!=null)for(t in e)s=e[t],t!=="__proto__"&&n!==s&&(s&&(s.toString()==="[object Object]"||(o=Array.isArray(s)))?(r=n[t],i=o&&!Array.isArray(r)?[]:!o&&!r instanceof Object?{}:r,o=!1,this.typeof(n)=="Map"?(n=new Map).set(t,this.cloneDeep(i,s)):this.typeof(n)=="WeakMap"?(n=new WeakMap).set(t,this.cloneDeep(i,s)):this.typeof(n)=="Set"?(n=new Set)[t].add(this.cloneDeep(i,s)):this.typeof(n)=="Date"?n[t]=new Date(this.cloneDeep(i,s).valueOf()):n[t]=this.cloneDeep(i,s)):s!==void 0&&(n[t]=s));return n},typeof:function(e){return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]},getCookie(e){return e=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")),e?decodeURIComponent(e[1]):void 0},setCookie(e,t,r={}){(r={path:"/",...r}).expires instanceof Date&&(r.expires=r.expires.toUTCString());let s=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var o in r)s+="; "+o,o=r[o],o!==!0&&(s+="="+o);document.cookie=s},deleteCookie(e){this.setCookie(e,"",{"max-age":-1})}};class Jl extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
            --success: rgba(46, 125, 50, 1);
            --success80percent: rgba(46, 125, 50, .8);
            --success10percent: rgba(46, 125, 50, .1);
            --error: rgba(211, 47, 47, 1);
            --error80percent: rgba(211, 47, 47, .8);
            --error10percent: rgba(211, 47, 47, .1);
            --warning: rgba(255, 193, 7, 1);
            --warning80percent: rgba(255, 193, 7, .8);
            --warning10percent: rgba(255, 193, 7, .1);
            --disabled: rgba(0, 0, 0, .1);
        }
        .btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 5px 10px;
            color: #fff;
            background-color: var(--wcp-base);
            border-width: 1px;
            border-style: solid;
            border-color: transparent;
            border-radius: 6px;
            font-size: 14px;
            outline: 0px;
            line-height:1.5;
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            transition: all 0.2s;
        }
        .btn:hover{
            background-color: var(--wcp-base80percent);
        }
        .btn:active {
            background-image: radial-gradient(var(--wcp-base80percent), var(--wcp-base80percent));
        }
        /* outline */
        .outline{
            color: var(--wcp-base);
            background-color: transparent;
            border-color: var(--wcp-base);
        }
        .outline:hover{
            color: #fff;
            background-color: var(--wcp-base80percent);
            border-color: var(--wcp-base80percent);
        }
        /* text */
        .text{
            color: var(--wcp-base);
            background-color: transparent;
        }
        .text:hover{
            background-color: var(--wcp-base10percent);
        }
        .text:active{
            background-image: radial-gradient(var(--wcp-base10percent), var(--wcp-base10percent));
        }
        /* success */
        .success{
            background-color: var(--success);
        }
        .success:hover{
            background-color: var(--success80percent);
        }
        .success:active {
            background-image: radial-gradient(var(--success80percent), var(--success80percent));
        }
        .success.outline{
            color: var(--success);
            background-color: transparent;
            border-color: var(--success);
        }
        .success.outline:hover{
            color: #fff;
            background-color: var(--success80percent);
            border-color: var(--success80percent);
        }
        .success.text{
            color: var(--success);
            background-color: transparent;
            border-color: transparent;
        }
        .success.text:hover{
            background-color: var(--success10percent);
        }
        .success.text:active{
            background-image: radial-gradient(var(--success10percent), var(--success10percent));
        }
        /* error */
        .error{
            background-color: var(--error);
        }
        .error:hover{
            background-color: var(--error80percent);
        }
        .error:active {
            background-image: radial-gradient(var(--error80percent), var(--error80percent));
        }
        .error.outline{
            color: var(--error);
            background-color: transparent;
            border-color: var(--error);
        }
        .error.outline:hover{
            color: #fff;
            background-color: var(--error80percent);
            border-color: var(--error80percent);
        }
        .error.text{
            color: var(--error);
            background-color: transparent;
            border-color: transparent;
        }
        .error.text:hover{
            background-color: var(--error10percent);
        }
        .error.text:active{
            background-image: radial-gradient(var(--error10percent), var(--error10percent));
        }
        /* warning */
        .warning{
            background-color: var(--warning);
        }
        .warning:hover{
            background-color: var(--warning80percent);
        }
        .warning:active {
            background-image: radial-gradient(var(--warning80percent), var(--warning80percent));
        }
        .warning.outline{
            color: var(--warning);
            background-color: transparent;
            border-color: var(--warning);
        }
        .warning.outline:hover{
            color: #fff;
            background-color: var(--warning80percent);
            border-color: var(--warning80percent);
        }
        .warning.text{
            color: var(--warning);
            background-color: transparent;
            border-color: transparent;
        }
        .warning.text:hover{
            background-color: var(--warning10percent);
        }
        .warning.text:active{
            background-image: radial-gradient(var(--warning10percent), var(--warning10percent));
        }
        /* disabled */
        .disabled{
            background-color: var(--disabled);
            pointer-events: none;
        }
        .disabled.outline{
            color: var(--disabled);
            background-color: transparent;
            border-color: var(--disabled);
        }
        .disabled.text{
            color: var(--disabled);
            background-color: transparent;
        }
        /* sm */
        .sm{
            padding: 3px 6px;
            font-size: 12px;
        }
        /* lg */
        .lg{
            padding: 7px 14px;
            font-size: 16px;
        }

        </style>
        `}_getTemplate(){return`
        <button id="btn" class="btn">
            <slot></slot>
        </button>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","color","disabled","size","full"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("type")&&(t=this.getAttribute("type"),r.querySelector("#btn").classList.add(t)),this.hasAttribute("color")&&(t=this.getAttribute("color"),r.querySelector("#btn").classList.add(t)),this.hasAttribute("disabled")&&r.querySelector("#btn").classList.add("disabled"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#btn").classList.add(t))}_reset(){this.shadowRoot.querySelector("#btn").classList.value="btn"}}customElements.define("w-btn",Jl);class Xl extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
		:host{
			display: inline-flex;
            --disabled: rgba(0, 0, 0, .1);
        }
        .checkbox{
            display: inline-flex;
            align-items: center;
            cursor: pointer;
			font-size: 14px;
			padding-right: 10px;
        }
        .checkbox .icon{
			width: 18px;
            height: 18px;
			color: var(--wcp-base);
			border-width: 2px;
			border-style: solid;
			border-color: var(--wcp-base);
			border-radius: 4px;
            display: inline-block;
			position: relative;
			margin-right: 2px;
        }
		.checkbox input{
            width: 0;
			height: 0;
            opacity: 0;
        }

		.checkbox:hover .icon{
			border-color: var(--wcp-base80percent);
		}

		.icon svg {
			display: none;
		}

		.checked .icon svg{
            display:inline-block;
			position: absolute;
			left:0;
			top:0;
        }

		.sm{
			font-size: 12px;
		}
		.sm .icon{
			width: 16px;
			height: 16px;
		}

		.lg{
			font-size: 16px;
		}
		.lg .icon{
			width: 20px;
			height: 20px;
		}

		.disabled{
			cursor: default;
			color: var(--disabled);
		}
		.disabled .icon,
		.disabled:hover .icon{
			color: var(--disabled);
			border-color: var(--disabled);
		}
        

        </style>
        `}_getTemplate(){return`
        <label id="checkbox" class="checkbox">
            <i class="icon" id="icon">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
					<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
				</svg>
			</i>
            <input type="checkbox">
            <slot></slot>
		</label>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["checked","size","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#checkbox").classList.add(t)),this.hasAttribute("checked")&&r.querySelector("#checkbox").classList.add("checked"),this.hasAttribute("disabled")&&r.querySelector("#checkbox").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#checkbox").classList.value="checkbox"}_event(){this.shadowRoot.querySelector("#checkbox").addEventListener("change",()=>{this.hasAttribute("disabled")||(this.hasAttribute("checked")?this.removeAttribute("checked"):this.setAttribute("checked",""),this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0})))})}}customElements.define("w-checkbox",Xl);class Zl extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            font-family: 'Segoe UI',Arial,'Microsoft Yahei',sans-serif;
        }
        .dialog{
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 10px;
            background-color: rgba(0,0,0,.5);
            opacity: 0;
            z-index: -999;
            display:flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }
        .dialog.show{
			opacity: 1;
            z-index: 999;
        }
        .wrap{
            display: flex;
            flex-direction: column;
            position: relative;
            width: 500px;
			height: 300px;
            max-width: 100%;
            max-height: 100%;
            overflow: hidden;
            background-color: #fff;
            border-radius: 6px;
        }
        .header{
            border-bottom: 1px solid rgba(0,0,0,.1);
            padding: 10px;
        }
        .body{
			display: flex;
            flex-direction: column;
			flex: 1 1 0;
            padding: 10px;
            padding-bottom: 20px;
			word-break: break-all;
            overflow: hidden;
        }
        .footer{
            padding: 10px;
            border-top: 1px solid rgba(0,0,0,.1);
        }

        </style>
        `}_getTemplate(){return`
        <div class="dialog" tabindex="-1" id="dialog">
            <div class="wrap" id="wrap">
                <div class="header">
                    <slot name="header"></slot>
                </div>
                <div class="body">
                    <slot name="body"></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("width")&&(t=this.getAttribute("width"),r.querySelector("#wrap").style.width=t),this.hasAttribute("height")&&(t=this.getAttribute("height"),r.querySelector("#wrap").style.height=t),this.hasAttribute("show")&&r.querySelector("#dialog").classList.add("show")}_reset(){this.shadowRoot.querySelector("#dialog").classList.value="dialog"}_event(){this.shadowRoot.querySelector("#dialog").addEventListener("click",t=>{t.target.id=="dialog"&&this.removeAttribute("show")})}}customElements.define("w-dialog",Zl);class Gl extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
		:host{
			display: inline-flex;
			--error: rgba(211, 47, 47, 1);
            --disabled: rgba(0, 0, 0, .1);
        }
		.root{
			width: 100%;
			height: 100%;
			display: inline-flex;
            align-items: center;
			position: relative;
		}
        .input{
			width: 100%;
			height: 100%;
			font-size: 14px;
			outline: none;
			border-width: 1px;
			border-style: solid;
			border-color: rgba(0, 0, 0, .3);
			border-radius: 4px;
			padding: 8px;
			background: none;
			color: currentcolor;
        }
		.input:focus{
			box-shadow: 0 0 2px var(--wcp-base);
			border-color: var(--wcp-base);
		}

		.input:disabled{
			background-color: var(--disabled);
			border-color: var(--disabled);
			color: rgba(0, 0, 0, .3);
		}

		.sm{
			font-size: 12px;
			padding: 6px;
		}

		.lg{
			font-size: 16px;
			padding: 10px;
		}

		.input.error{
			border-color: var(--error);
		}
		.input.error:focus{
			box-shadow: 0 0 2px var(--error);
		}
		.input[type=range]{
			accent-color: var(--wcp-base);
			padding: 0;
    		border: none;
			box-shadow: none;
		}
        

        </style>
        `}_getTemplate(){return`
        <div id="root" class="root">
            <input type="text" class="input" id="input">
		</div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","maxlength","min","max","step","type","placeholder","disabled","size","error"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("value")&&(t=this.getAttribute("value"),r.querySelector("#input").value=t),this.hasAttribute("maxlength")&&(t=this.getAttribute("maxlength"),r.querySelector("#input").setAttribute("maxlength",t)),this.hasAttribute("min")&&(t=this.getAttribute("min"),r.querySelector("#input").min=t),this.hasAttribute("max")&&(t=this.getAttribute("max"),r.querySelector("#input").max=t),this.hasAttribute("step")&&(t=this.getAttribute("step"),r.querySelector("#input").step=t),this.hasAttribute("type")&&(t=this.getAttribute("type"),r.querySelector("#input").type=t),this.hasAttribute("placeholder")&&(t=this.getAttribute("placeholder"),r.querySelector("#input").placeholder=t),this.hasAttribute("disabled")&&(r.querySelector("#input").disabled="disabled"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#input").classList.add(t)),this.hasAttribute("error")&&r.querySelector("#input").classList.add("error")}_reset(){this.shadowRoot.querySelector("#input").classList.value="input"}_event(){this.shadowRoot.querySelector("#input").addEventListener("input",t=>{t=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))})}}customElements.define("w-input",Gl);class ea extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
            overflow: auto;
        }
        </style>
        `}_getTemplate(){return`
            <slot id="slot"></slot>
        `}constructor(){super(),this.defaultImg=null,this.lazyArr=[],this.observer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot,this.hasAttribute("width")&&(this.style.width=this.getAttribute("width")),this.hasAttribute("height")&&(this.style.height=this.getAttribute("height"))}_reset(){this.shadowRoot}_event(){let t=this.shadowRoot;t.addEventListener("slotchange",r=>{this.lazyArr.length!=0&&this.lazyArr.forEach(s=>{this.observer.unobserve(s)}),this.lazyArr.length=0,t.querySelector("#slot").assignedElements().map(s=>{this.lazyArr.push(...Array.from(s.querySelectorAll("img"))),this.lazyArr.push(...Array.from(s.querySelectorAll("video"))),this.lazyArr.push(...Array.from(s.querySelectorAll("w-player")))}),this.lazyArr.forEach(s=>{this.observer.observe(s)})}),this.observer=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&((s=s.target).hasAttribute("lazy-src")&&s.setAttribute("src",s.getAttribute("lazy-src")),this.observer.unobserve(s))})})}}customElements.define("w-lazy-loading",ea);class ta extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
            position: absolute;
            width: max-content;
            left: 0;
            z-index: 9;
        }
        .menu{
            display:none;
            flex-direction: column;
            background-color: #fff;
            padding-top: 5px;
            padding-bottom: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            user-select: none;
            -webkit-user-select: none;
        }
        .menu.show{
            display: inline-flex;
        }
     
        </style>
        `}_getTemplate(){return`
        <div id="menu" class="menu">
            <slot></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["show"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("show")&&t.querySelector("#menu").classList.add("show")}_reset(){this.shadowRoot.querySelector("#menu").classList.value="menu"}_event(){this.shadowRoot}}customElements.define("w-menu",ta);class ra extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            --hover: rgba(100,100,100,.1);
            --active: rgba(100,100,100,.2);
            --disabled: rgba(0,0,0,.2);
        }
        .menu-item{
            padding: 6px 10px;
            cursor: pointer;
        }
       
        .menu-item:hover{
            background-color: var(--hover);
        }
        .menu-item:active{
            background-color: var(--active);
        }
        /* disabled */
        .menu-item.disabled{
            color: var(--disabled);
            cursor: default;
            pointer-events: none;
        }

        </style>
        `}_getTemplate(){return`
        <div id="menu-item" class="menu-item">
            <slot></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("disabled")&&t.querySelector("#menu-item").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#menu-item").classList.value="menu-item"}_event(){this.shadowRoot}}customElements.define("w-menu-item",ra);class sa extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        .modal{
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 10px;
            background-color: rgba(0,0,0,.5);
            opacity: 0;
            z-index: -999;
            display:flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }
        .modal.show{
            opacity: 1;
            z-index: 999;
        }
        .wrap{
            display: flex;
            flex-direction: column;
            position: relative;
            width: 500px;
            height: 300px;
            max-width: 100%;
            max-height: 100%;
            overflow: hidden;
            padding: 4px;
            background-color: #fff;
            border-radius: 6px;
        }

        </style>
        `}_getTemplate(){return`
        <div class="modal" tabindex="-1" id="modal">
            <div class="wrap" id="wrap">
                <slot></slot>
            </div>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("width")&&(t=this.getAttribute("width"),r.querySelector("#wrap").style.width=t),this.hasAttribute("height")&&(t=this.getAttribute("height"),r.querySelector("#wrap").style.height=t),this.hasAttribute("show")&&r.querySelector("#modal").classList.add("show")}_reset(){this.shadowRoot.querySelector("#modal").classList.value="modal"}_event(){this.shadowRoot.querySelector("#modal").addEventListener("click",t=>{t.target.id=="modal"&&this.removeAttribute("show")})}}customElements.define("w-modal",sa);class oa extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            --success: rgba(46, 125, 50, 1);
            --success80percent: rgba(46, 125, 50, .8);
            --success10percent: rgba(46, 125, 50, .1);
            --error: rgba(211, 47, 47, 1);
            --error80percent: rgba(211, 47, 47, .8);
            --error10percent: rgba(211, 47, 47, .1);
            --warning: rgba(255, 193, 7, 1);
            --warning80percent: rgba(255, 193, 7, .8);
            --warning10percent: rgba(255, 193, 7, .1);
            z-index: 9999;
        }
        .msg{
            position:fixed;
            left: 50%;
            opacity: 0;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            color: #fff;
            background-color: var(--wcp-base);
            border-width: 1px;
            border-style: solid;
            border-color: transparent;
            border-radius: 6px;
            font-size: 14px;
            line-height: 1.5;
            transition: all 0.2s;
        }
        .top{
            top: 0;
            transform: translate(-50%, -100%);
        }
        .bottom{
            bottom: 0;
            transform: translate(-50%, 100%);
        }
        .show{
            transform: translate(-50%);
            opacity: 1;
        }
        .top.show{
            top: 20px;
        }
        .bottom.show{
            bottom: 20px;
        }

        .icon{
            width: 16px;
            height: 16px;
            display: inline-block;
            margin-right: 6px;
        }

        /* outline */
        .outline{
            color: var(--wcp-base);
            background-color: transparent;
            border-color: var(--wcp-base);
        }

        /* success */
        .success{
            background-color: var(--success);
        }
        .success.outline{
            color: var(--success);
            background-color: transparent;
            border-color: var(--success);
        }
        
        /* error */
        .error{
            background-color: var(--error);
        }
        .error.outline{
            color: var(--error);
            background-color: transparent;
            border-color: var(--error);
        }

        /* warning */
        .warning{
            background-color: var(--warning);
        }
        .warning.outline{
            color: var(--warning);
            background-color: transparent;
            border-color: var(--warning);
        }

        </style>
        `}_getTemplate(){return`
        <div id="msg" class="msg">
            <i id="icon" class="icon"></i>
            <template id="icon-default">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>
            </template>
            <template id="icon-success">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
            </template>
            <template id="icon-error">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </template>
            <template id="icon-warning">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                </svg>
            </template>
            <span id="content"></span>
        </div>
        `}constructor(){super(),this.timer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","position"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("type")&&(t=this.getAttribute("type"),r.querySelector("#msg").classList.add(t)),this.hasAttribute("position")?(t=this.getAttribute("position"),r.querySelector("#msg").classList.add(t)):r.querySelector("#msg").classList.add("top")}_reset(){this.shadowRoot.querySelector("#msg").classList.value="msg"}show(t,r=""){let s=this.shadowRoot;switch(this._setOptions(),s.querySelector("#content").innerHTML=t,r&&s.querySelector("#msg").classList.add(r),r){case"success":s.querySelector("#icon").innerHTML=s.querySelector("#icon-success").innerHTML;break;case"error":s.querySelector("#icon").innerHTML=s.querySelector("#icon-error").innerHTML;break;case"warning":s.querySelector("#icon").innerHTML=s.querySelector("#icon-warning").innerHTML;break;default:s.querySelector("#icon").innerHTML=s.querySelector("#icon-default").innerHTML}s.querySelector("#msg").classList.add("show");let o=2e3;this.hasAttribute("delay")&&(o=+this.getAttribute("delay")),this.timer||(this.timer=setTimeout(()=>{s.querySelector("#msg").classList.remove("show"),clearTimeout(this.timer),this.timer=null},o))}static init(s){var r={},s=(s&&Object.assign(r,s),document.createElement("w-msg"));return r.type&&s.setAttribute("type",r.type),r.position&&s.setAttribute("position",r.position),r.delay&&s.setAttribute("delay",r.delay),document.body.append(s),s}}customElements.define("w-msg",oa);class ia extends HTMLElement{_getStyle(){return`
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI',Arial,'Microsoft Yahei',sans-serif;
            }
			:host{
				display: inline-flex;
			}
            .web-player{
                background-color: #000;
                color: #fff;
                width: 100%;
                height: 100%;
                position: relative;
                cursor: pointer;
                user-select: none;
                outline: none;
            }
			.web-player.full{
				position: fixed;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: 999;
			}
            .web-player .video{
                display: flex;
                position: absolute;
                width: 100%;
                max-height: 100%;
                top:0;
                left: 0;
                bottom: 0;
                right: 0;
            }
            .web-player .control-main{
                display: flex;
                align-items: center;
                justify-content:center;
                position: absolute;
                width: 100%;
                bottom: 40px;
                top: 0;
            }
            .web-player .control-main .icon-play{
                width: 50px;
                height: 50px;
            }
            .web-player .hide{
                display: none;
            }
            .web-player .control-bottom{
                position: absolute;
                bottom:0;
                left:0;
                right:0;
                display: flex;
                align-items:center;
                font-size: 12px;
                color:#fff;
                padding: 0 10px 0 10px;
            }
            .web-player .control-bottom .progress{
                display: flex;
                align-items: center;
                cursor: pointer;
                flex:1;
                height:40px;
                margin-left: 10px;
                margin-right: 10px;
                touch-action: none;
            }
            .web-player .control-bottom .progress-main{
                width: 100%;
                height: 5px;
                background: #e9ecef3d;
                border-radius: 10px;
            }
            .web-player .control-bottom .progress-timeline{
                position: relative;
                width: 0%;
                height: 100%;
                background-color: var(--wcp-base);
                border-radius: 10px;
            }
            .web-player .control-bottom .progress-timeline::after{
                display: none;
                content: '';
                position: absolute;
                right:-3px;
                top:-3px;
                width:10px;
                height:10px;
                border-radius: 50%;
                background-color: #fff;
            }
            .web-player .control-bottom .progress:hover .progress-timeline::after{
                display: block;
            }
            .web-player .control-bottom .progress-timeline.show-after::after{
                display: block;
            }
            .web-player .contextmenu{
                position: absolute;
                top:0;
                left:0;
                font-size: 14px;
                color:#fff;
                background-color: #343a40;
                width: 200px;
                border-radius: 6px;
            }
            .web-player .contextmenu .menu-list{
                width: 100%;
                list-style: none;
                padding-top: 8px;
                padding-bottom: 8px;
            }
            .web-player .contextmenu .menu-list-item{
                padding: 8px;
                display: flex;
                align-items: center;
                text-decoration: none;
                color:#fff;
            }
            .web-player .contextmenu .menu-list-item a{
                text-decoration: none;
                color:#fff;
                display: inline-block;
                width: 100%;
            }
            .web-player .contextmenu .menu-list-item i{
                display: flex;
                padding-right: 5px;
            }
            .web-player .contextmenu .menu-list-item:hover{
                background-color: rgba(255, 255, 255, 0.15);
            }
        </style>
        `}_getTemplate(){return`
        <!-- player begin -->
        <div id="web-player" class="web-player" tabindex='-1'>
            <video src="" id="video" class="video" playsinline="true"></video>
            <div id="control-main" class="control-main">
                <i class="icon-play">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                </i>
            </div>
            <div class="control-bottom" id="control-bottom">
                <div id="time-cur">00:00:00</div>
                <div class="progress" id="progress">
                    <div class="progress-main">
                        <div id="timeline" class="progress-timeline"></div>
                    </div>
                </div>
                <div id="time-total">00:00:00</div>
            </div>
            <div class="contextmenu hide" id="contextmenu">
                <input type="file" id="file" hidden accept="${this.accept.toString()}">
                <ul class="menu-list">
                    <li class="menu-list-item" id="openfile">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                            </svg>
                        </i>open file
                    </li>
                    <li class="menu-list-item" id="menu-list-item-github">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </i>github
                    </li>
                </ul>
            </div>
        </div>
        <!-- player end -->
        `}constructor(){super(),this._drag=!1,this._focus=!1,this.accept=[".mp4",".webm",".ogg",".mp3"]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["src","poster"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var t=this.shadowRoot,r=this.hasAttribute("src")?this.getAttribute("src"):"",s=this.hasAttribute("poster")?this.getAttribute("poster"):"";this._reset(),t.querySelector("#video").src=r,t.querySelector("#video").poster=s}_event(){let t=this.shadowRoot;t.querySelector("#control-main").addEventListener("click",r=>{t.querySelector("#video").paused?this.play():this.pause()}),t.querySelector("#control-main").addEventListener("dblclick",r=>{this._fullscreenHandler(r)}),t.querySelector("#video").addEventListener("loadedmetadata",r=>{t.querySelector("#time-total").innerHTML=this._timeFormat(t.querySelector("#video").duration)}),t.querySelector("#video").addEventListener("error",r=>{}),t.querySelector("#video").addEventListener("timeupdate",r=>{t.querySelector("#time-cur").innerHTML=this._timeFormat(t.querySelector("#video").currentTime);var s=t.querySelector("#video").currentTime/t.querySelector("#video").duration*100+"%";t.querySelector("#timeline").style.width=s}),t.querySelector("#video").addEventListener("ended",r=>{t.querySelector("#video").pause(),t.querySelector(".icon-play").classList.remove("hide")}),t.querySelector("#progress").addEventListener("pointerdown",r=>{t.querySelector("#progress").setPointerCapture(r.pointerId),this._drag=!0,t.querySelector("#timeline").classList.add("show-after"),r=this._getRatio(r.pageX),t.querySelector("#video").currentTime=t.querySelector("#video").duration*r}),t.querySelector("#progress").addEventListener("pointermove",r=>{this._drag&&(r=this._getRatio(r.pageX),t.querySelector("#timeline").style.width=100*r+"%",r=t.querySelector("#video").duration*r||0,t.querySelector("#time-cur").innerHTML=this._timeFormat(r),t.querySelector("#video").currentTime=r)}),t.querySelector("#progress").addEventListener("pointerup",r=>{this._drag=!1,t.querySelector("#timeline").classList.remove("show-after")}),document.addEventListener("keydown",r=>{var s;this._focus&&(r.preventDefault(),r.key=="ArrowLeft"?(t.querySelector("#video").currentTime-=10,t.querySelector("#video").currentTime<0&&(t.querySelector("#video").currentTime=0),t.querySelector("#time-cur").innerHTML=this._timeFormat(t.querySelector("#video").currentTime),s=t.querySelector("#video").currentTime/t.querySelector("#video").duration*100+"%",t.querySelector("#timeline").style.width=s):r.key=="ArrowRight"?(t.querySelector("#video").currentTime+=10,t.querySelector("#video").currentTime>t.querySelector("#video").duration&&(t.querySelector("#video").currentTime=t.querySelector("#video").duration),t.querySelector("#time-cur").innerHTML=this._timeFormat(t.querySelector("#video").currentTime),s=t.querySelector("#video").currentTime/t.querySelector("#video").duration*100+"%",t.querySelector("#timeline").style.width=s):r.key==" "&&(t.querySelector("#video").paused?this.play():this.pause()))}),t.querySelector("#web-player").addEventListener("contextmenu",r=>{r.preventDefault(),this._showContextmenu(r)}),t.querySelector("#web-player").addEventListener("click",r=>{this._hideContextmenu()}),t.querySelector("#openfile").addEventListener("click",r=>{t.querySelector("#file").dispatchEvent(new MouseEvent("click"))}),t.querySelector("#file").addEventListener("change",r=>{var s=t.querySelector("#file").files[0];let o=!1;for(let i=0;i<this.accept.length;i++)if(s.name.endsWith(this.accept[i])){o=!0;break}o?(this._reset(),t.querySelector("#video").src=URL.createObjectURL(s),this.play()):alert("file not accept")}),t.querySelector("#menu-list-item-github").addEventListener("click",r=>{window.open("https://github.com/zingercn","_blank")}),t.querySelector("#web-player").addEventListener("focus",r=>{this._focus=!0}),t.querySelector("#web-player").addEventListener("blur",r=>{this._focus=!1,this._hideContextmenu()})}play(){var t=this.shadowRoot;t.querySelector(".icon-play").classList.add("hide"),t.querySelector("#video").play()}pause(){var t=this.shadowRoot;t.querySelector(".icon-play").classList.remove("hide"),t.querySelector("#video").pause()}_fullscreenHandler(t){var r=this.shadowRoot;navigator.userAgent.includes("Mobile")?r.querySelector("#web-player").classList.toggle("full"):document.fullscreenElement?document.exitFullscreen():r.querySelector("#web-player").requestFullscreen()}_reset(){var t=this.shadowRoot;t.querySelector("#video").src="",t.querySelector("#video").poster="",t.querySelector("#timeline").style.width=0,t.querySelector("#time-total").innerHTML=this._timeFormat(0),t.querySelector("#time-cur").innerHTML=this._timeFormat(0),t.querySelector("#video").pause(),t.querySelector(".icon-play").classList.remove("hide")}_hideContextmenu(){this.shadowRoot.querySelector("#contextmenu").classList.add("hide")}_showContextmenu(t){var r=this.shadowRoot;r.querySelector("#contextmenu").classList.remove("hide"),r.querySelector("#contextmenu").style.left=t.pageX-r.querySelector("#web-player").getBoundingClientRect().left-document.documentElement.scrollLeft+"px",r.querySelector("#contextmenu").style.top=t.pageY-r.querySelector("#web-player").getBoundingClientRect().top-document.documentElement.scrollTop+"px"}_getRatio(t){var r=this.shadowRoot;let s=(t-(r.querySelector("#progress").getBoundingClientRect().left-document.documentElement.scrollLeft))/r.querySelector("#progress").scrollWidth;return s=(s=1<s?1:s)<0?0:s}_timeFormat(t){t=parseInt(t,10);let r=Math.floor(t/3600),s=Math.floor((t-3600*r)/60),o=t-3600*r-60*s;return r<10&&(r="0"+r),s<10&&(s="0"+s),o<10&&(o="0"+o),r+":"+s+":"+o}}customElements.define("w-player",ia);class na extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            --disabled: rgba(0, 0, 0, .2);
            display: inline-flex;
        }
        .radio{
            display: inline-flex;
            align-items: center;
            cursor: pointer;
			font-size: 14px;
            padding-right: 10px;
        }
        .radio .icon{
			width: 18px;
            height: 18px;
			color: var(--wcp-base);
			border-width: 2px;
			border-style: solid;
			border-color: var(--wcp-base);
			border-radius: 50%;
            display: inline-block;
			position: relative;
			margin-right: 2px;
        }
		.radio input{
            width: 0;
			height: 0;
            opacity: 0;
        }

		.radio:hover .icon{
			border-color: var(--wcp-base80percent);
		}
        .icon svg{
            display:none;
        }
		.checked .icon svg{
            display:inline-block;
			position: absolute;
			left:0;
			top:0;
        }

        .sm{
			font-size: 12px;
		}
		.sm .icon{
			width: 16px;
			height: 16px;
		}

		.lg{
			font-size: 16px;
		}
		.lg .icon{
			width: 20px;
			height: 20px;
		}

        /* disabled */
        .disabled{
            color: var(--disabled);
            pointer-events: none;
        }
        .disabled{
			cursor: default;
			color: var(--disabled);
		}
		.disabled .icon{
			color: var(--disabled);
			border-color: var(--disabled);
		}
     
        </style>
        `}_getTemplate(){return`
        <label id="radio" class="radio">
            <i class="icon" id="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
                </svg>
            </i>
            <input type="radio">
            <slot></slot>
		</label>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["size","checked","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("checked")&&r.querySelector("#radio").classList.add("checked"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#radio").classList.add(t)),this.hasAttribute("disabled")&&r.querySelector("#radio").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#radio").classList.value="radio"}_event(){this.shadowRoot}}customElements.define("w-radio",na);class la extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
        }
     
        </style>
        `}_getTemplate(){return`
            <slot></slot>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let t=this.getAttribute("value");Array.from(this.children).forEach(r=>{t==r.getAttribute("value")?r.setAttribute("checked",""):r.removeAttribute("checked")})}}_reset(){this.shadowRoot}_event(){this.shadowRoot.addEventListener("click",t=>{this.hasAttribute("disabled")||t.target.tagName!="W-RADIO"||t.target.hasAttribute("disabled")||t.target.hasAttribute("checked")||(Array.from(this.children).forEach(r=>{r.removeAttribute("checked")}),t.target.setAttribute("checked",""),t=t.target.hasAttribute("value")?t.target.getAttribute("value"):null,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0})))})}}customElements.define("w-radios",la);class aa extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
            overflow: auto;
        }
		.loading{
			min-width:1px;
			min-height:1px;
		}
		
        </style>
        `}_getTemplate(){return`
            <slot id="slot"></slot>
			<div id="loading" class="loading">
				<slot name="loading"></slot>
			</div>
        `}constructor(){super(),this.observer=null,this.lazyArr=[]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot,this.hasAttribute("width")&&(this.style.width=this.getAttribute("width")),this.hasAttribute("height")&&(this.style.height=this.getAttribute("height"))}_reset(){this.shadowRoot}_event(){var t=this.shadowRoot;this.observer=new IntersectionObserver(r=>{r[0].isIntersecting&&this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0}))}),this.observer.observe(t.querySelector("#loading"))}}customElements.define("w-scroll-loading",aa);class ca extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
			--error: rgba(211, 47, 47, 1);
            --disabled: rgba(0, 0, 0, .1);
        }
        .root{
			width: 100%;
			height: 100%;
			display: inline-flex;
            align-items: center;
			position: relative;
		}
        .select{
            width: 100%;
			height: 100%;
			font-size: 14px;
			outline: none;
			border-width: 1px;
			border-style: solid;
			border-color: rgba(0, 0, 0, .3);
			border-radius: 4px;
			padding: 8px;
			background: none;
			color: currentcolor;
            cursor: pointer;
        }
        .select:focus{
            outline: 1px solid var(--wcp-base);
			border-color: var(--wcp-base);
        }
        .select:disabled{
			background-color: var(--disabled);
			border-color: var(--disabled);
			color: rgba(0, 0, 0, .3);
		}
        
        .sm{
			font-size: 12px;
			padding: 6px;
		}

		.lg{
			font-size: 16px;
			padding: 10px;
		}
     
        </style>
        `}_getTemplate(){return`
        <div id="root" class="root">
            <select id="select" class="select">
            </select>
            <slot id="slot" hidden></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","disabled","size"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let t=this.shadowRoot;var r;t.querySelector("#select").innerHTML="",t.querySelector("#slot").assignedElements().forEach(s=>{t.querySelector("#select").appendChild(s.cloneNode(!0))}),this.hasAttribute("value")&&(r=this.getAttribute("value"),t.querySelector("#select").value=r),this.hasAttribute("disabled")?t.querySelector("#select").setAttribute("disabled",""):t.querySelector("#select").removeAttribute("disabled"),this.hasAttribute("size")&&(r=this.getAttribute("size"),t.querySelector("#select").classList.add(r))}_reset(){this.shadowRoot.querySelector("#select").classList.value="select"}_event(){this.shadowRoot.querySelector("#select").addEventListener("change",t=>{t=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))})}}customElements.define("w-select",ca);class ua extends HTMLElement{_getStyle(){return`
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Arial, 'Microsoft Yahei', sans-serif;
            color: rgba(0, 0, 0, 0.9);
        }
		.row {
            display: grid;
        }
        .row.bordered{
            border-bottom: 1px solid rgb(224, 224, 224);
        }
        .row.hover:hover{
            background-color: rgba(0, 0, 0, 0.05);
        }
        .row.selected{
            background-color: rgba(0, 0, 0, 0.05);
        }
        .row.sticky{
            position: sticky;
            top: 0;
            z-index: 1;
        }

        </style>
        `}_getTemplate(){return`
            <div id="row" class="row">
                <slot></slot>
            </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["columns","hover","sticky","bordered","selected"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("columns")&&(t=this.getAttribute("columns"),r.querySelector("#row").style.gridTemplateColumns=t),this.hasAttribute("hover")&&r.querySelector("#row").classList.add("hover"),this.hasAttribute("sticky")&&r.querySelector("#row").classList.add("sticky"),this.hasAttribute("bordered")&&r.querySelector("#row").classList.add("bordered"),this.hasAttribute("selected")&&r.querySelector("#row").classList.add("selected")}_reset(){this.shadowRoot.querySelector("#row").classList.value="row"}_event(){this.shadowRoot}}customElements.define("w-table-row",ua);class da extends HTMLElement{_getStyle(){return`
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        :host{
            display: grid;
            min-width: 100px;
            word-break: break-all;
            align-items: center;
        }
		.item {
            padding: 10px;
        }
        .item .wrap {
            height: 100%;
            align-items: center;
            display: grid;
        }

        </style>
        `}_getTemplate(){return`
            <div id="item" class="item">
                <div class="wrap">
                    <slot></slot>
                </div>
            </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["col","row"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t;this.shadowRoot,this.hasAttribute("col")&&(t=this.getAttribute("col"),this.style.gridColumnStart="span "+t),this.hasAttribute("row")&&(t=this.getAttribute("row"),this.style.gridRowStart="span "+t)}_reset(){this.shadowRoot.querySelector("#item").classList.value="item"}_event(){this.shadowRoot}}customElements.define("w-table-item",da);class ha extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Arial, 'Microsoft Yahei', sans-serif;
            color: rgba(0, 0, 0, 0.9);
        }
        :host{
            display: block;
            overflow: hidden;
        }
        
        a{
            text-decoration: none;
            color: var(--wcp-base);
        }
        a:hover{
            color: var(--wcp-base80percent);
        }

        .table {
            border-radius: 4px;
            width: 100%;
        }

        .table-title{
            font-size: 22px;
            padding: 10px;
        }

        .table-container{
            overflow: auto;
        }
        .table-container .wrap{
            min-width: fit-content;
        }
        .table-footer{
            font-size: 22px;
            padding: 10px;
        }
        
        </style>
        `}_getTemplate(){return`
        <div class="table" id="table">
            <!-- table title -->
            <div class="table-title">
                <slot name="title"></slot>
            </div>
            <!-- table container -->
            <div class="table-container" id="table-container">
                <div class="wrap" id="wrap">
                    <w-table-row id="header" bordered>
                        
                    </w-table-row>
                    <w-table-row id="body">
                        
                    </w-table-row>
                </div>
            </div>
            <!-- table footer -->
            <div class="table-footer">
                <slot name="footer"></slot>
            </div>
        </div>
        `}constructor(){super(),this.data=null,this.column=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["data","column","height","sticky"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;if(this.hasAttribute("height")?(r=this.getAttribute("height"),t.querySelector("#table-container").style.height=r):t.querySelector("#table-container").style.height="",this.hasAttribute("sticky")?t.querySelector("#header").setAttribute("sticky",""):t.querySelector("#header").removeAttribute("sticky"),this.hasAttribute("column")){var r=JSON.parse(this.getAttribute("column"));this.column=r;let s="";s+=`<w-table-row columns="${this._getColumns()}" style="background-color:${getComputedStyle(this).backgroundColor}">`,this.column.forEach(o=>{s+=`
                    <w-table-item>${o.label}</w-table-item>
                `}),s+="</w-table-row>",t.querySelector("#header").innerHTML=s}if(this.hasAttribute("data")){r=JSON.parse(this.getAttribute("data")),this.data=r;let s="";this.data.forEach(o=>{s+=`<w-table-row hover bordered columns="${this._getColumns()}">`,Object.values(o).forEach(i=>{s+=`
                        <w-table-item>${i}</w-table-item>
                    `}),s+="</w-table-row>"}),t.querySelector("#body").innerHTML=s}}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_event(){this.shadowRoot}_getColumns(){let t="";return this.column&&this.column.forEach(r=>{r.width?t+=r.width+" ":t+="1fr "}),t}}customElements.define("w-table",ha);class fa extends HTMLElement{_getStyle(){return`
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .table{
            background-color: #fff;
            border-radius: 10px;
        }
        .pagination {
			display: flex;
			justify-content: end;
			align-items: center;
			font-weight: 500;
			font-size: 13px;
		}

		.pagination .page {
			margin-right: 10px;
			display: inline-flex;
			align-items: center;
		}

		.pagination .page .cur {
			padding: 2px 4px;
		}

		.pagination .page .total {
			padding: 2px 4px;
		}

		.pagination .icon {
			display: inline-block;
			width: 18px;
			height: 18px;
			vertical-align: middle;
		}

		.pagination .pager {
			padding: 2px;
			border-radius: 4px;
			display: inline-flex;
		}

		.pagination .pager:not(.disabled):hover {
			cursor: pointer;
			background-color: rgb(0, 0, 0, .1);
		}

		.pagination .pager.disabled {
			color: rgba(0, 0, 0, .2);
		}

        </style>
        `}_getTemplate(){return`
        <w-table id="table">
            <div slot="title">
                <slot name="title"></slot>
            </div>
            <div slot="footer">
                <slot name="footer"></slot>
                <div class="pagination">
                    <span class="page">
                        <span class="cur" id="cur" contenteditable="true">1</span>
                        <span>/</span>
                        <span class="total" id="total">1</span>
                    </span>
                    <span class="pager" id="pre">
                        <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </i>
                    </span>
                    <span class="pager" id="next">
                        <i class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </i>
                    </span>
                </div>
            </div>
        </w-table>
        `}constructor(){super(),this.url=null,this.auth=null,this.pagination={cur:1,count:1,total:1}}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._initData(),this._event()}static get observedAttributes(){return["column","height","sticky","url","count","auth"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("column")&&t.querySelector("#table").setAttribute("column",this.getAttribute("column")),this.hasAttribute("height")?t.querySelector("#table").setAttribute("height",this.getAttribute("height")):t.querySelector("#table").removeAttribute("height"),this.hasAttribute("sticky")?t.querySelector("#table").setAttribute("sticky",""):t.querySelector("#table").removeAttribute("sticky"),this.hasAttribute("url")?this.url=this.getAttribute("url"):this.url=null,this.hasAttribute("count")?this.pagination.count=+this.getAttribute("count"):this.pagination.count=1,this.hasAttribute("auth")&&(this.auth=this.getAttribute("auth"))}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_initData(){var t=this.shadowRoot;t.querySelector("#cur").innerHTML=this.pagination.cur,t.querySelector("#pre").classList.add("disabled"),t.querySelector("#next").classList.add("disabled"),this._fetchData()}_event(){let t=this.shadowRoot;t.querySelector("#pre").addEventListener("click",r=>{t.querySelector("#pre").classList.contains("disabled")||(t.querySelector("#next").classList.remove("disabled"),this.pagination.cur--,t.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur<=1&&t.querySelector("#pre").classList.add("disabled"),this._fetchData())}),t.querySelector("#next").addEventListener("click",r=>{t.querySelector("#next").classList.contains("disabled")||(t.querySelector("#pre").classList.remove("disabled"),this.pagination.cur++,t.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur>=this.pagination.total&&t.querySelector("#next").classList.add("disabled"),this._fetchData())}),t.querySelector("#cur").addEventListener("keypress",r=>{if(r.key=="Enter"){console.log("Enter"),t.querySelector("#cur").blur(),this.pagination.total!=1&&(t.querySelector("#pre").classList.remove("disabled"),t.querySelector("#next").classList.remove("disabled"));let s=+t.querySelector("#cur").innerHTML;s<=1&&(s=1,t.querySelector("#pre").classList.add("disabled")),s>=this.pagination.total&&(s=this.pagination.total,t.querySelector("#next").classList.add("disabled")),t.querySelector("#cur").innerHTML=s,this.pagination.cur!=s&&(this.pagination.cur=s,this._fetchData())}else if(!"1234567890".includes(r.key))return r.preventDefault(),r.defaultPrevented})}_fetchData(){this.shadowRoot;var t={headers:{"Content-Type":"application/json;charset=utf-8",Authorization:this.auth},method:"get"};fetch(`${this.url}?cur=${this.pagination.cur}&count=`+this.pagination.count,t).then(r=>r.json()).then(r=>{this.dispatchEvent(new CustomEvent("fetchData",{detail:{data:r},bubbles:!0}))}).catch(r=>{console.log(r)})}setData(t){var r=this.shadowRoot;r.querySelector("#table").setAttribute("data",JSON.stringify(t.data)),this.pagination.total=t.total||1,r.querySelector("#total").innerHTML=this.pagination.total,this.pagination.cur>=this.pagination.total?r.querySelector("#next").classList.add("disabled"):r.querySelector("#next").classList.remove("disabled")}resetTableData(){this.pagination.cur=1,this._initData()}}customElements.define("w-table-pagination",fa);class pa extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            --disabled: rgba(0, 0, 0, .2);
            display: inline-flex;
        }
        .tab{
            display:inline-flex;
            width: 100%;
            padding: 5px 10px;
            color: var(--wcp-base);
            font-size: 14px;
            align-items: center;
            justify-content: center;
            outline: 0px;
            cursor: pointer;
            user-select: none;
        }
        .tab:not(.active):hover{
            color: var(--wcp-base80percent);
        }
        .tab.active {
            border-bottom: 2px solid var(--wcp-base);
        }
        /* disabled */
        .tab.disabled{
            color: var(--disabled);
            pointer-events: none;
        }

        </style>
        `}_getTemplate(){return`
        <div id="tab" class="tab">
            <slot></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["active","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("active")&&t.querySelector("#tab").classList.add("active"),this.hasAttribute("disabled")&&t.querySelector("#tab").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#tab").classList.value="tab"}_event(){this.shadowRoot}}customElements.define("w-tab",pa);class ga extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{

        }

     
        </style>
        `}_getTemplate(){return`
        <div id="tabs" class="tabs">
            <slot></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[""]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot.querySelector("#tabs").classList.value="tabs"}_event(){this.shadowRoot.querySelector("#tabs").addEventListener("click",t=>{t.target.tagName!="W-TAB"||t.target.hasAttribute("disabled")||t.target.hasAttribute("active")||(Array.from(this.children).forEach(r=>{r.removeAttribute("active")}),t.target.setAttribute("active",""),t=t.target.hasAttribute("value")?t.target.getAttribute("value"):null,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0})))})}}customElements.define("w-tabs",ga);class ba extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
		:host{
			display: inline-flex;
			--error: rgba(211, 47, 47, 1);
            --disabled: rgba(0, 0, 0, .1);
        }
		.root{
			width: 100%;
			height: 100%;
			display: inline-flex;
            align-items: center;
			position: relative;
		}
        .textarea{
			width: 100%;
			height: 100%;
			font-size: 14px;
			outline: none;
			border-width: 1px;
			border-style: solid;
			border-color: rgba(0, 0, 0, .3);
			border-radius: 4px;
			padding: 8px;
			background: none;
			color: currentcolor;
			resize:none;
        }
		.textarea:focus{
			box-shadow: 0 0 2px var(--wcp-base);
			border-color: var(--wcp-base);
		}

		.textarea:disabled{
			background-color: var(--disabled);
			border-color: var(--disabled);
			color: rgba(0, 0, 0, .3);
		}

		.sm{
			font-size: 12px;
			padding: 6px;
		}

		.lg{
			font-size: 16px;
			padding: 10px;
		}

		.textarea.error{
			border-color: var(--error);
		}
		
		.textarea.error:focus{
			box-shadow: 0 0 2px var(--error);
		}

        </style>
        `}_getTemplate(){return`
        <div id="root" class="root">
            <textarea type="text" class="textarea" id="textarea">
		</div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","placeholder","disabled","size","error"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("value")&&(t=this.getAttribute("value"),r.querySelector("#textarea").value=t),this.hasAttribute("placeholder")&&(t=this.getAttribute("placeholder"),r.querySelector("#textarea").placeholder=t),this.hasAttribute("disabled")&&(r.querySelector("#textarea").disabled="disabled"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#textarea").classList.add(t)),this.hasAttribute("error")&&r.querySelector("#textarea").classList.add("error")}_reset(){this.shadowRoot.querySelector("#textarea").classList.value="textarea"}_event(){this.shadowRoot.querySelector("#textarea").addEventListener("input",t=>{t=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))})}}customElements.define("w-textarea",ba);class ma extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
		:host{
			display: inline-flex;
			width: fit-content;
			height: fit-content;
            --disabled: rgba(0, 0, 0, .1);
        }
        .toggle{
            display: inline-flex;
            align-items: center;
            cursor: pointer;
			font-size: 14px;
			padding: 2px 11px;
			background-color: rgba(0, 0, 0, .4);
			border-radius: 50px;
			position: relative;
			transition: all .5s;
        }
        .toggle .icon{
			width: 18px;
            height: 18px;
			border-radius: 50%;
            display: inline-block;
			transform: translateX(-50%);
			background-color: #fff;
			transition: all .2s;
        }
		
		.on {
			background-color: var(--wcp-base)
		}
		.on .icon{
            transform: translateX(50%);
        }

		.sm{
			font-size: 12px;
			padding: 2px 10px;
		}
		.sm .icon{
			width: 16px;
			height: 16px;
		}

		.lg{
			font-size: 16px;
			padding: 2px 12px;
		}
		.lg .icon{
			width: 20px;
			height: 20px;
		}

		.disabled{
			cursor: default;
			opacity: .3;
		}
        

        </style>
        `}_getTemplate(){return`
        <div id="toggle" class="toggle">
			<span class="icon"></span>
		</div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["on","size","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#toggle").classList.add(t)),this.hasAttribute("on")&&r.querySelector("#toggle").classList.add("on"),this.hasAttribute("disabled")&&r.querySelector("#toggle").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#toggle").classList.value="toggle"}_event(){this.shadowRoot.querySelector("#toggle").addEventListener("click",()=>{if(!this.hasAttribute("disabled")){let t="off";t=this.hasAttribute("on")?(this.removeAttribute("on"),"off"):(this.setAttribute("on",""),"on"),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))}})}}customElements.define("w-toggle",ma);class va extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
		:host{
			display: inline-flex;
			position: relative;
            --disabled: rgba(0, 0, 0, .1);
        }
		.form,
        .file{
			width: 0;
			height: 0;
			display: none;
        }
        
        </style>
        `}_getTemplate(){return`
			<form class="form" id="form">
				<input type="file" class="file" id="file">
			</form>
			<slot></slot>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["url","name","multiple","accept","auth","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("url")?t.querySelector("#file").setAttribute("url",this.getAttribute("url")):t.querySelector("#file").setAttribute("url",""),this.hasAttribute("name")?t.querySelector("#file").setAttribute("name",this.getAttribute("name")):t.querySelector("#file").setAttribute("name","file"),this.hasAttribute("multiple")?t.querySelector("#file").setAttribute("multiple",""):t.querySelector("#file").removeAttribute("multiple"),this.hasAttribute("accept")?t.querySelector("#file").setAttribute("accept",this.getAttribute("accept")):t.querySelector("#file").removeAttribute("accept"),this.hasAttribute("auth")?t.querySelector("#file").setAttribute("auth",this.getAttribute("auth")):t.querySelector("#file").removeAttribute("auth"),this.hasAttribute("disabled")?t.querySelector("#file").setAttribute("disabled",""):t.querySelector("#file").removeAttribute("disabled")}_reset(){this.shadowRoot.querySelector("#file").classList.value="file"}_event(){let t=this.shadowRoot;t.addEventListener("click",r=>{t.querySelector("#file").dispatchEvent(new PointerEvent("click"))}),t.querySelector("#file").addEventListener("change",async r=>{try{var s=await fetch(t.querySelector("#file").getAttribute("url"),{headers:{Authorization:t.querySelector("#file").getAttribute("auth")},method:"post",cors:"cors",body:new FormData(t.querySelector("#form"))}),o=await s.json();this.dispatchEvent(new CustomEvent("change",{detail:{value:[...t.querySelector("#file").files],response:s,data:o},bubbles:!0}))}catch(i){this.dispatchEvent(new CustomEvent("change",{detail:{value:[...t.querySelector("#file").files],response:i,data:{msg:"error"}},bubbles:!0}))}t.querySelector("#file").value=""})}}customElements.define("w-upload",va);/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const dt=typeof window<"u";function ya(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const K=Object.assign;function Lr(e,t){const r={};for(const s in t){const o=t[s];r[s]=Ee(o)?o.map(e):e(o)}return r}const Ht=()=>{},Ee=Array.isArray,wa=/\/$/,_a=e=>e.replace(wa,"");function Tr(e,t,r="/"){let s,o={},i="",n="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(s=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),o=e(i)),c>-1&&(s=s||t.slice(0,c),n=t.slice(c,t.length)),s=Ea(s??t,r),{fullPath:s+(i&&"?")+i+n,path:s,query:o,hash:n}}function xa(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Xs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Sa(e,t,r){const s=t.matched.length-1,o=r.matched.length-1;return s>-1&&s===o&&wt(t.matched[s],r.matched[o])&&ai(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function wt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ai(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!Aa(e[r],t[r]))return!1;return!0}function Aa(e,t){return Ee(e)?Zs(e,t):Ee(t)?Zs(t,e):e===t}function Zs(e,t){return Ee(t)?e.length===t.length&&e.every((r,s)=>r===t[s]):e.length===1&&e[0]===t}function Ea(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),s=e.split("/");let o=r.length-1,i,n;for(i=0;i<s.length;i++)if(n=s[i],n!==".")if(n==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Dt;(function(e){e.pop="pop",e.push="push"})(Dt||(Dt={}));var Pt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Pt||(Pt={}));function Ra(e){if(!e)if(dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_a(e)}const ka=/^[^#]+#/;function Ca(e,t){return e.replace(ka,"#")+t}function La(e,t){const r=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-r.left-(t.left||0),top:s.top-r.top-(t.top||0)}}const yr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ta(e){let t;if("el"in e){const r=e.el,s=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?s?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=La(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Gs(e,t){return(history.state?history.state.position-t:-1)+e}const Wr=new Map;function qa(e,t){Wr.set(e,t)}function Oa(e){const t=Wr.get(e);return Wr.delete(e),t}let Ma=()=>location.protocol+"//"+location.host;function ci(e,t){const{pathname:r,search:s,hash:o}=t,i=e.indexOf("#");if(i>-1){let c=o.includes(e.slice(i))?e.slice(i).length:1,a=o.slice(c);return a[0]!=="/"&&(a="/"+a),Xs(a,"")}return Xs(r,e)+s+o}function Ha(e,t,r,s){let o=[],i=[],n=null;const c=({state:p})=>{const w=ci(e,location),C=r.value,L=t.value;let I=0;if(p){if(r.value=w,t.value=p,n&&n===C){n=null;return}I=L?p.position-L.position:0}else s(w);o.forEach(P=>{P(r.value,C,{delta:I,type:Dt.pop,direction:I?I>0?Pt.forward:Pt.back:Pt.unknown})})};function a(){n=r.value}function d(p){o.push(p);const w=()=>{const C=o.indexOf(p);C>-1&&o.splice(C,1)};return i.push(w),w}function u(){const{history:p}=window;p.state&&p.replaceState(K({},p.state,{scroll:yr()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:d,destroy:f}}function eo(e,t,r,s=!1,o=!1){return{back:e,current:t,forward:r,replaced:s,position:window.history.length,scroll:o?yr():null}}function Pa(e){const{history:t,location:r}=window,s={value:ci(e,r)},o={value:t.state};o.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,d,u){const f=e.indexOf("#"),p=f>-1?(r.host&&document.querySelector("base")?e:e.slice(f))+a:Ma()+e+a;try{t[u?"replaceState":"pushState"](d,"",p),o.value=d}catch(w){console.error(w),r[u?"replace":"assign"](p)}}function n(a,d){const u=K({},t.state,eo(o.value.back,a,o.value.forward,!0),d,{position:o.value.position});i(a,u,!0),s.value=a}function c(a,d){const u=K({},o.value,t.state,{forward:a,scroll:yr()});i(u.current,u,!0);const f=K({},eo(s.value,a,null),{position:u.position+1},d);i(a,f,!1),s.value=a}return{location:s,state:o,push:c,replace:n}}function za(e){e=Ra(e);const t=Pa(e),r=Ha(e,t.state,t.location,t.replace);function s(i,n=!0){n||r.pauseListeners(),history.go(i)}const o=K({location:"",base:e,go:s,createHref:Ca.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Ia(e){return typeof e=="string"||e&&typeof e=="object"}function ui(e){return typeof e=="string"||typeof e=="symbol"}const Be={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},di=Symbol("");var to;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(to||(to={}));function _t(e,t){return K(new Error,{type:e,[di]:!0},t)}function Pe(e,t){return e instanceof Error&&di in e&&(t==null||!!(e.type&t))}const ro="[^/]+?",Fa={sensitive:!1,strict:!1,start:!0,end:!0},ja=/[.+*?^${}()[\]/\\]/g;function $a(e,t){const r=K({},Fa,t),s=[];let o=r.start?"^":"";const i=[];for(const d of e){const u=d.length?[]:[90];r.strict&&!d.length&&(o+="/");for(let f=0;f<d.length;f++){const p=d[f];let w=40+(r.sensitive?.25:0);if(p.type===0)f||(o+="/"),o+=p.value.replace(ja,"\\$&"),w+=40;else if(p.type===1){const{value:C,repeatable:L,optional:I,regexp:P}=p;i.push({name:C,repeatable:L,optional:I});const M=P||ro;if(M!==ro){w+=10;try{new RegExp(`(${M})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+H.message)}}let U=L?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=I&&d.length<2?`(?:/${U})`:"/"+U),I&&(U+="?"),o+=U,w+=20,I&&(w+=-8),L&&(w+=-20),M===".*"&&(w+=-50)}u.push(w)}s.push(u)}if(r.strict&&r.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const n=new RegExp(o,r.sensitive?"":"i");function c(d){const u=d.match(n),f={};if(!u)return null;for(let p=1;p<u.length;p++){const w=u[p]||"",C=i[p-1];f[C.name]=w&&C.repeatable?w.split("/"):w}return f}function a(d){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const w of p)if(w.type===0)u+=w.value;else if(w.type===1){const{value:C,repeatable:L,optional:I}=w,P=C in d?d[C]:"";if(Ee(P)&&!L)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Ee(P)?P.join("/"):P;if(!M)if(I)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);u+=M}}return u||"/"}return{re:n,score:s,keys:i,parse:c,stringify:a}}function Na(e,t){let r=0;for(;r<e.length&&r<t.length;){const s=t[r]-e[r];if(s)return s;r++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Da(e,t){let r=0;const s=e.score,o=t.score;for(;r<s.length&&r<o.length;){const i=Na(s[r],o[r]);if(i)return i;r++}if(Math.abs(o.length-s.length)===1){if(so(s))return 1;if(so(o))return-1}return o.length-s.length}function so(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ba={type:0,value:""},Ua=/[a-zA-Z0-9_]/;function Wa(e){if(!e)return[[]];if(e==="/")return[[Ba]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${r})/"${d}": ${w}`)}let r=0,s=r;const o=[];let i;function n(){i&&o.push(i),i=[]}let c=0,a,d="",u="";function f(){d&&(r===0?i.push({type:0,value:d}):r===1||r===2||r===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&r!==2){s=r,r=4;continue}switch(r){case 0:a==="/"?(d&&f(),n()):a===":"?(f(),r=1):p();break;case 4:p(),r=s;break;case 1:a==="("?r=2:Ua.test(a)?p():(f(),r=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:r=3:u+=a;break;case 3:f(),r=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${d}"`),f(),n(),o}function Ka(e,t,r){const s=$a(Wa(e.path),r),o=K(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Va(e,t){const r=[],s=new Map;t=no({strict:!1,end:!0,sensitive:!1},t);function o(u){return s.get(u)}function i(u,f,p){const w=!p,C=Ya(u);C.aliasOf=p&&p.record;const L=no(t,u),I=[C];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of U)I.push(K({},C,{components:p?p.record.components:C.components,path:H,aliasOf:p?p.record:C}))}let P,M;for(const U of I){const{path:H}=U;if(f&&H[0]!=="/"){const re=f.record.path,ie=re[re.length-1]==="/"?"":"/";U.path=f.record.path+(H&&ie+H)}if(P=Ka(U,f,L),p?p.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),w&&u.name&&!io(P)&&n(u.name)),C.children){const re=C.children;for(let ie=0;ie<re.length;ie++)i(re[ie],P,p&&p.children[ie])}p=p||P,a(P)}return M?()=>{n(M)}:Ht}function n(u){if(ui(u)){const f=s.get(u);f&&(s.delete(u),r.splice(r.indexOf(f),1),f.children.forEach(n),f.alias.forEach(n))}else{const f=r.indexOf(u);f>-1&&(r.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(n),u.alias.forEach(n))}}function c(){return r}function a(u){let f=0;for(;f<r.length&&Da(u,r[f])>=0&&(u.record.path!==r[f].record.path||!hi(u,r[f]));)f++;r.splice(f,0,u),u.record.name&&!io(u)&&s.set(u.record.name,u)}function d(u,f){let p,w={},C,L;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw _t(1,{location:u});L=p.record.name,w=K(oo(f.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&oo(u.params,p.keys.map(M=>M.name))),C=p.stringify(w)}else if("path"in u)C=u.path,p=r.find(M=>M.re.test(C)),p&&(w=p.parse(C),L=p.record.name);else{if(p=f.name?s.get(f.name):r.find(M=>M.re.test(f.path)),!p)throw _t(1,{location:u,currentLocation:f});L=p.record.name,w=K({},f.params,u.params),C=p.stringify(w)}const I=[];let P=p;for(;P;)I.unshift(P.record),P=P.parent;return{name:L,path:C,params:w,matched:I,meta:Ja(I)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:d,removeRoute:n,getRoutes:c,getRecordMatcher:o}}function oo(e,t){const r={};for(const s of t)s in e&&(r[s]=e[s]);return r}function Ya(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qa(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Qa(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const s in e.components)t[s]=typeof r=="boolean"?r:r[s];return t}function io(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ja(e){return e.reduce((t,r)=>K(t,r.meta),{})}function no(e,t){const r={};for(const s in e)r[s]=s in t?t[s]:e[s];return r}function hi(e,t){return t.children.some(r=>r===e||hi(e,r))}const fi=/#/g,Xa=/&/g,Za=/\//g,Ga=/=/g,ec=/\?/g,pi=/\+/g,tc=/%5B/g,rc=/%5D/g,gi=/%5E/g,sc=/%60/g,bi=/%7B/g,oc=/%7C/g,mi=/%7D/g,ic=/%20/g;function gs(e){return encodeURI(""+e).replace(oc,"|").replace(tc,"[").replace(rc,"]")}function nc(e){return gs(e).replace(bi,"{").replace(mi,"}").replace(gi,"^")}function Kr(e){return gs(e).replace(pi,"%2B").replace(ic,"+").replace(fi,"%23").replace(Xa,"%26").replace(sc,"`").replace(bi,"{").replace(mi,"}").replace(gi,"^")}function lc(e){return Kr(e).replace(Ga,"%3D")}function ac(e){return gs(e).replace(fi,"%23").replace(ec,"%3F")}function cc(e){return e==null?"":ac(e).replace(Za,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function uc(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const i=s[o].replace(pi," "),n=i.indexOf("="),c=lr(n<0?i:i.slice(0,n)),a=n<0?null:lr(i.slice(n+1));if(c in t){let d=t[c];Ee(d)||(d=t[c]=[d]),d.push(a)}else t[c]=a}return t}function lo(e){let t="";for(let r in e){const s=e[r];if(r=lc(r),s==null){s!==void 0&&(t+=(t.length?"&":"")+r);continue}(Ee(s)?s.map(i=>i&&Kr(i)):[s&&Kr(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+r,i!=null&&(t+="="+i))})}return t}function dc(e){const t={};for(const r in e){const s=e[r];s!==void 0&&(t[r]=Ee(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const hc=Symbol(""),ao=Symbol(""),wr=Symbol(""),bs=Symbol(""),Vr=Symbol("");function Ct(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function We(e,t,r,s,o){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((n,c)=>{const a=f=>{f===!1?c(_t(4,{from:r,to:t})):f instanceof Error?c(f):Ia(f)?c(_t(2,{from:t,to:f})):(i&&s.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),n())},d=e.call(s&&s.instances[o],t,r,a);let u=Promise.resolve(d);e.length<3&&(u=u.then(a)),u.catch(f=>c(f))})}function qr(e,t,r,s){const o=[];for(const i of e)for(const n in i.components){let c=i.components[n];if(!(t!=="beforeRouteEnter"&&!i.instances[n]))if(fc(c)){const d=(c.__vccOpts||c)[t];d&&o.push(We(d,r,s,i,n))}else{let a=c();o.push(()=>a.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const u=ya(d)?d.default:d;i.components[n]=u;const p=(u.__vccOpts||u)[t];return p&&We(p,r,s,i,n)()}))}}return o}function fc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function co(e){const t=Ae(wr),r=Ae(bs),s=pe(()=>t.resolve(rt(e.to))),o=pe(()=>{const{matched:a}=s.value,{length:d}=a,u=a[d-1],f=r.matched;if(!u||!f.length)return-1;const p=f.findIndex(wt.bind(null,u));if(p>-1)return p;const w=uo(a[d-2]);return d>1&&uo(u)===w&&f[f.length-1].path!==w?f.findIndex(wt.bind(null,a[d-2])):p}),i=pe(()=>o.value>-1&&mc(r.params,s.value.params)),n=pe(()=>o.value>-1&&o.value===r.matched.length-1&&ai(r.params,s.value.params));function c(a={}){return bc(a)?t[rt(e.replace)?"replace":"push"](rt(e.to)).catch(Ht):Promise.resolve()}return{route:s,href:pe(()=>s.value.href),isActive:i,isExactActive:n,navigate:c}}const pc=Uo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:co,setup(e,{slots:t}){const r=Bt(co(e)),{options:s}=Ae(wr),o=pe(()=>({[ho(e.activeClass,s.linkActiveClass,"router-link-active")]:r.isActive,[ho(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=t.default&&t.default(r);return e.custom?i:li("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},i)}}}),gc=pc;function bc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mc(e,t){for(const r in t){const s=t[r],o=e[r];if(typeof s=="string"){if(s!==o)return!1}else if(!Ee(o)||o.length!==s.length||s.some((i,n)=>i!==o[n]))return!1}return!0}function uo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ho=(e,t,r)=>e??t??r,vc=Uo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const s=Ae(Vr),o=pe(()=>e.route||s.value),i=Ae(ao,0),n=pe(()=>{let d=rt(i);const{matched:u}=o.value;let f;for(;(f=u[d])&&!f.components;)d++;return d}),c=pe(()=>o.value.matched[n.value]);er(ao,pe(()=>n.value+1)),er(hc,c),er(Vr,o);const a=Mo();return Zt(()=>[a.value,c.value,e.name],([d,u,f],[p,w,C])=>{u&&(u.instances[f]=d,w&&w!==u&&d&&d===p&&(u.leaveGuards.size||(u.leaveGuards=w.leaveGuards),u.updateGuards.size||(u.updateGuards=w.updateGuards))),d&&u&&(!w||!wt(u,w)||!p)&&(u.enterCallbacks[f]||[]).forEach(L=>L(d))},{flush:"post"}),()=>{const d=o.value,u=e.name,f=c.value,p=f&&f.components[u];if(!p)return fo(r.default,{Component:p,route:d});const w=f.props[u],C=w?w===!0?d.params:typeof w=="function"?w(d):w:null,I=li(p,K({},C,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return fo(r.default,{Component:I,route:d})||I}}});function fo(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const vi=vc;function yc(e){const t=Va(e.routes,e),r=e.parseQuery||uc,s=e.stringifyQuery||lo,o=e.history,i=Ct(),n=Ct(),c=Ct(),a=an(Be);let d=Be;dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lr.bind(null,m=>""+m),f=Lr.bind(null,cc),p=Lr.bind(null,lr);function w(m,R){let A,T;return ui(m)?(A=t.getRecordMatcher(m),T=R):T=m,t.addRoute(T,A)}function C(m){const R=t.getRecordMatcher(m);R&&t.removeRoute(R)}function L(){return t.getRoutes().map(m=>m.record)}function I(m){return!!t.getRecordMatcher(m)}function P(m,R){if(R=K({},R||a.value),typeof m=="string"){const l=Tr(r,m,R.path),h=t.resolve({path:l.path},R),g=o.createHref(l.fullPath);return K(l,h,{params:p(h.params),hash:lr(l.hash),redirectedFrom:void 0,href:g})}let A;if("path"in m)A=K({},m,{path:Tr(r,m.path,R.path).path});else{const l=K({},m.params);for(const h in l)l[h]==null&&delete l[h];A=K({},m,{params:f(m.params)}),R.params=f(R.params)}const T=t.resolve(A,R),D=m.hash||"";T.params=u(p(T.params));const Z=xa(s,K({},m,{hash:nc(D),path:T.path})),$=o.createHref(Z);return K({fullPath:Z,hash:D,query:s===lo?dc(m.query):m.query||{}},T,{redirectedFrom:void 0,href:$})}function M(m){return typeof m=="string"?Tr(r,m,a.value.path):K({},m)}function U(m,R){if(d!==m)return _t(8,{from:R,to:m})}function H(m){return be(m)}function re(m){return H(K(M(m),{replace:!0}))}function ie(m){const R=m.matched[m.matched.length-1];if(R&&R.redirect){const{redirect:A}=R;let T=typeof A=="function"?A(m):A;return typeof T=="string"&&(T=T.includes("?")||T.includes("#")?T=M(T):{path:T},T.params={}),K({query:m.query,hash:m.hash,params:"path"in T?{}:m.params},T)}}function be(m,R){const A=d=P(m),T=a.value,D=m.state,Z=m.force,$=m.replace===!0,l=ie(A);if(l)return be(K(M(l),{state:typeof l=="object"?K({},D,l.state):D,force:Z,replace:$}),R||A);const h=A;h.redirectedFrom=R;let g;return!Z&&Sa(s,T,A)&&(g=_t(16,{to:h,from:T}),Je(T,T,!0,!1)),(g?Promise.resolve(g):it(h,T)).catch(b=>Pe(b)?Pe(b,2)?b:me(b):Q(b,h,T)).then(b=>{if(b){if(Pe(b,2))return be(K({replace:$},M(b.to),{state:typeof b.to=="object"?K({},D,b.to.state):D,force:Z}),R||h)}else b=Ne(h,T,!0,$,D);return ke(h,T,b),b})}function Re(m,R){const A=U(m,R);return A?Promise.reject(A):Promise.resolve()}function it(m,R){let A;const[T,D,Z]=wc(m,R);A=qr(T.reverse(),"beforeRouteLeave",m,R);for(const l of T)l.leaveGuards.forEach(h=>{A.push(We(h,m,R))});const $=Re.bind(null,m,R);return A.push($),ut(A).then(()=>{A=[];for(const l of i.list())A.push(We(l,m,R));return A.push($),ut(A)}).then(()=>{A=qr(D,"beforeRouteUpdate",m,R);for(const l of D)l.updateGuards.forEach(h=>{A.push(We(h,m,R))});return A.push($),ut(A)}).then(()=>{A=[];for(const l of m.matched)if(l.beforeEnter&&!R.matched.includes(l))if(Ee(l.beforeEnter))for(const h of l.beforeEnter)A.push(We(h,m,R));else A.push(We(l.beforeEnter,m,R));return A.push($),ut(A)}).then(()=>(m.matched.forEach(l=>l.enterCallbacks={}),A=qr(Z,"beforeRouteEnter",m,R),A.push($),ut(A))).then(()=>{A=[];for(const l of n.list())A.push(We(l,m,R));return A.push($),ut(A)}).catch(l=>Pe(l,8)?l:Promise.reject(l))}function ke(m,R,A){for(const T of c.list())T(m,R,A)}function Ne(m,R,A,T,D){const Z=U(m,R);if(Z)return Z;const $=R===Be,l=dt?history.state:{};A&&(T||$?o.replace(m.fullPath,K({scroll:$&&l&&l.scroll},D)):o.push(m.fullPath,D)),a.value=m,Je(m,R,A,$),me()}let Ce;function nt(){Ce||(Ce=o.listen((m,R,A)=>{if(!Ut.listening)return;const T=P(m),D=ie(T);if(D){be(K(D,{replace:!0}),T).catch(Ht);return}d=T;const Z=a.value;dt&&qa(Gs(Z.fullPath,A.delta),yr()),it(T,Z).catch($=>Pe($,12)?$:Pe($,2)?(be($.to,T).then(l=>{Pe(l,20)&&!A.delta&&A.type===Dt.pop&&o.go(-1,!1)}).catch(Ht),Promise.reject()):(A.delta&&o.go(-A.delta,!1),Q($,T,Z))).then($=>{$=$||Ne(T,Z,!1),$&&(A.delta&&!Pe($,8)?o.go(-A.delta,!1):A.type===Dt.pop&&Pe($,20)&&o.go(-1,!1)),ke(T,Z,$)}).catch(Ht)}))}let Qe=Ct(),Et=Ct(),ee;function Q(m,R,A){me(m);const T=Et.list();return T.length?T.forEach(D=>D(m,R,A)):console.error(m),Promise.reject(m)}function V(){return ee&&a.value!==Be?Promise.resolve():new Promise((m,R)=>{Qe.add([m,R])})}function me(m){return ee||(ee=!m,nt(),Qe.list().forEach(([R,A])=>m?A(m):R()),Qe.reset()),m}function Je(m,R,A,T){const{scrollBehavior:D}=e;if(!dt||!D)return Promise.resolve();const Z=!A&&Oa(Gs(m.fullPath,0))||(T||!A)&&history.state&&history.state.scroll||null;return Io().then(()=>D(m,R,Z)).then($=>$&&Ta($)).catch($=>Q($,m,R))}const ve=m=>o.go(m);let ue;const lt=new Set,Ut={currentRoute:a,listening:!0,addRoute:w,removeRoute:C,hasRoute:I,getRoutes:L,resolve:P,options:e,push:H,replace:re,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:n.add,afterEach:c.add,onError:Et.add,isReady:V,install(m){const R=this;m.component("RouterLink",gc),m.component("RouterView",vi),m.config.globalProperties.$router=R,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(a)}),dt&&!ue&&a.value===Be&&(ue=!0,H(o.location).catch(D=>{}));const A={};for(const D in Be)A[D]=pe(()=>a.value[D]);m.provide(wr,R),m.provide(bs,Bt(A)),m.provide(Vr,a);const T=m.unmount;lt.add(m),m.unmount=function(){lt.delete(m),lt.size<1&&(d=Be,Ce&&Ce(),Ce=null,a.value=Be,ue=!1,ee=!1),T()}}};return Ut}function ut(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function wc(e,t){const r=[],s=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let n=0;n<i;n++){const c=t.matched[n];c&&(e.matched.find(d=>wt(d,c))?s.push(c):r.push(c));const a=e.matched[n];a&&(t.matched.find(d=>wt(d,a))||o.push(a))}return[r,s,o]}function yi(){return Ae(wr)}function _c(){return Ae(bs)}function xc(e){let t=0;const r=document.createElement("div"),s=document.createElement("div"),o=document.createElement("img");r.style.position="fixed",r.style.width="100%",r.style.height="80px",r.style.background="linear-gradient(180deg, rgba(0,0,0,.9), rgba(255,255,255,.1))",r.style.opacity="0.1",s.style.transition="all 1s",s.style.position="fixed",s.style.width="100%",s.style.height="100%",s.style.backgroundImage=`url(${e[t]})`,s.style.backgroundSize="cover",s.style.backgroundPosition="center center",o.style.display="none",o.setAttribute("src",e[t<e.length-1?t+1:0]),document.body.prepend(r),document.body.prepend(s),document.body.prepend(o),setInterval(()=>{t<e.length-1?t++:t=0,s.style.backgroundImage=`url(${e[t]})`,o.setAttribute("src",e[t<e.length-1?t+1:0])},10*60*1e3)}const Sc={__name:"App",setup(e){return yi(),_c(),cs(t=>{xc(["https://picsum.photos/1920/1080"])}),(t,r)=>(ri(),ll(rt(vi)))}},Ac="modulepreload",Ec=function(e){return"/"+e},po={},Rc=function(t,r,s){let o=Promise.resolve();if(r&&r.length>0){const i=document.getElementsByTagName("link");o=Promise.all(r.map(n=>{if(n=Ec(n),n in po)return;po[n]=!0;const c=n.endsWith(".css"),a=c?'[rel="stylesheet"]':"";if(!!s)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===n&&(!c||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${a}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Ac,c||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),c)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}return o.then(()=>t()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},kc=(e,t)=>{const r=e.__vccOpts||e;for(const[s,o]of t)r[s]=o;return r},wi=e=>(yn("data-v-f49a13e7"),e=e(),wn(),e),Cc={class:"index-container"},Lc=wi(()=>Fe("div",{class:"menu-wrap"},[Fe("svg",{id:"menu-btn",class:"menu-btn",viewBox:"0 0 448 512"},[Fe("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})]),Fe("w-menu",{style:{"margin-top":"40px"},id:"menu-list"},[Fe("w-menu-item",{onclick:"window.open('https://www.npmjs.com/package/web-components-plus','_blank')"},"web-components-plus")])],-1)),Tc=wi(()=>Fe("div",{class:"search-wrap"},[Fe("w-input",{type:"search",class:"search",id:"search"})],-1)),qc=[Lc,Tc],Oc={__name:"Index",setup(e){return yi(),cs(()=>{document.querySelector("#menu-btn").addEventListener("click",t=>{t.stopPropagation(),document.querySelector("#menu-list").toggleAttribute("show")}),document.body.addEventListener("click",t=>{document.querySelector("#menu-list").removeAttribute("show")}),document.querySelector("#search").addEventListener("change",t=>{console.log(t.detail)})}),(t,r)=>(ri(),nl("div",Cc,qc))}},Mc=kc(Oc,[["__scopeId","data-v-f49a13e7"]]),Hc=yc({history:za("/"),routes:[{path:"/",name:"Index",component:Mc},{path:"/:pathMatch(.*)*",name:"404",component:()=>Rc(()=>import("./NotFound-2ivPfbqw.js"),__vite__mapDeps([0,1]))}]});Ql.initColor();const _r=Ul(Sc),Pc=Yl();_r.config.warnHandler=()=>null;_r.use(Hc);_r.use(Pc);_r.mount("#app");export{kc as _,nl as c,ri as o};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/NotFound-2ivPfbqw.js","assets/NotFound-EP-cVdye.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}