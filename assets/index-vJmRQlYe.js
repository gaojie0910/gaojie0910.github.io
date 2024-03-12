var Ia=Object.defineProperty;var Da=(t,e,n)=>e in t?Ia(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ni=(t,e,n)=>(Da(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jr(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _e={},Nt=[],We=()=>{},qa=()=>!1,Pa=/^on[^a-z]/,On=t=>Pa.test(t),ei=t=>t.startsWith("onUpdate:"),xe=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ba=Object.prototype.hasOwnProperty,ue=(t,e)=>Ba.call(t,e),Q=Array.isArray,Tt=t=>kn(t)==="[object Map]",po=t=>kn(t)==="[object Set]",ee=t=>typeof t=="function",Se=t=>typeof t=="string",Cn=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",go=t=>(Ee(t)||ee(t))&&ee(t.then)&&ee(t.catch),fo=Object.prototype.toString,kn=t=>fo.call(t),Ua=t=>kn(t).slice(8,-1),bo=t=>kn(t)==="[object Object]",ni=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gn=jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},za=/-(\w)/g,Ye=Mn(t=>t.replace(za,(e,n)=>n?n.toUpperCase():"")),Ha=/\B([A-Z])/g,Et=Mn(t=>t.replace(Ha,"-$1").toLowerCase()),Ln=Mn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gn=Mn(t=>t?`on${Ln(t)}`:""),mt=(t,e)=>!Object.is(t,e),Wn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},yn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ti;const Pr=()=>Ti||(Ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ri(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Se(r)?Wa(r):ri(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Se(t)||Ee(t))return t}const $a=/;(?![^(]*\))/g,Ka=/:([^]+)/,Ga=/\/\*[^]*?\*\//g;function Wa(t){const e={};return t.replace(Ga,"").split($a).forEach(n=>{if(n){const r=n.split(Ka);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ii(t){let e="";if(Se(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=ii(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ya="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Za=jr(Ya);function mo(t){return!!t||t===""}const yp=t=>Se(t)?t:t==null?"":Q(t)||Ee(t)&&(t.toString===fo||!ee(t.toString))?JSON.stringify(t,_o,2):String(t),_o=(t,e)=>e&&e.__v_isRef?_o(t,e.value):Tt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:po(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!Q(e)&&!bo(e)?String(e):e;let Pe;class Eo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Va(t){return new Eo(t)}function Xa(t,e=Pe){e&&e.active&&e.effects.push(t)}function Qa(){return Pe}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},vo=t=>(t.w&at)>0,yo=t=>(t.n&at)>0,Ja=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=at},ja=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];vo(i)&&!yo(i)?i.delete(t):e[n++]=i,i.w&=~at,i.n&=~at}e.length=n}},Br=new WeakMap;let $t=0,at=1;const Ur=30;let Be;const pt=Symbol(""),zr=Symbol("");class oi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xa(this,r)}run(){if(!this.active)return this.fn();let e=Be,n=st;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Be,Be=this,st=!0,at=1<<++$t,$t<=Ur?Ja(this):Ri(this),this.fn()}finally{$t<=Ur&&ja(this),at=1<<--$t,Be=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(Ri(this),this.onStop&&this.onStop(),this.active=!1)}}function Ri(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let st=!0;const wo=[];function qt(){wo.push(st),st=!1}function Pt(){const t=wo.pop();st=t===void 0?!0:t}function Ie(t,e,n){if(st&&Be){let r=Br.get(t);r||Br.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=si()),So(i)}}function So(t,e){let n=!1;$t<=Ur?yo(t)||(t.n|=at,n=!vo(t)):n=!t.has(Be),n&&(t.add(Be),Be.deps.push(t))}function Je(t,e,n,r,i,s){const o=Br.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||!Cn(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(pt)),Tt(t)&&a.push(o.get(zr)));break;case"delete":Q(t)||(a.push(o.get(pt)),Tt(t)&&a.push(o.get(zr)));break;case"set":Tt(t)&&a.push(o.get(pt));break}if(a.length===1)a[0]&&Hr(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Hr(si(l))}}function Hr(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&Oi(r);for(const r of n)r.computed||Oi(r)}function Oi(t,e){(t!==Be||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const el=jr("__proto__,__v_isRef,__isVue"),Ao=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn)),Ci=tl();function tl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=he(this);for(let s=0,o=this.length;s<o;s++)Ie(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qt();const r=he(this)[e].apply(this,n);return Pt(),r}}),t}function nl(t){const e=he(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class xo{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?fl:Oo:s?Ro:To).get(e))return e;const o=Q(e);if(!i){if(o&&ue(Ci,n))return Reflect.get(Ci,n,r);if(n==="hasOwnProperty")return nl}const a=Reflect.get(e,n,r);return(Cn(n)?Ao.has(n):el(n))||(i||Ie(e,"get",n),s)?a:Re(a)?o&&ni(n)?a:a.value:Ee(a)?i?Co(a):sn(a):a}}class No extends xo{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(Ct(s)&&Re(s)&&!Re(r))return!1;if(!this._shallow&&(!wn(r)&&!Ct(r)&&(s=he(s),r=he(r)),!Q(e)&&Re(s)&&!Re(r)))return s.value=r,!0;const o=Q(e)&&ni(n)?Number(n)<e.length:ue(e,n),a=Reflect.set(e,n,r,i);return e===he(i)&&(o?mt(r,s)&&Je(e,"set",n,r):Je(e,"add",n,r)),a}deleteProperty(e,n){const r=ue(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Je(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Cn(n)||!Ao.has(n))&&Ie(e,"has",n),r}ownKeys(e){return Ie(e,"iterate",Q(e)?"length":pt),Reflect.ownKeys(e)}}class rl extends xo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const il=new No,sl=new rl,ol=new No(!0),ai=t=>t,In=t=>Reflect.getPrototypeOf(t);function an(t,e,n=!1,r=!1){t=t.__v_raw;const i=he(t),s=he(e);n||(mt(e,s)&&Ie(i,"get",e),Ie(i,"get",s));const{has:o}=In(i),a=r?ai:n?di:Xt;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function ln(t,e=!1){const n=this.__v_raw,r=he(n),i=he(t);return e||(mt(t,i)&&Ie(r,"has",t),Ie(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function cn(t,e=!1){return t=t.__v_raw,!e&&Ie(he(t),"iterate",pt),Reflect.get(t,"size",t)}function ki(t){t=he(t);const e=he(this);return In(e).has.call(e,t)||(e.add(t),Je(e,"add",t,t)),this}function Mi(t,e){e=he(e);const n=he(this),{has:r,get:i}=In(n);let s=r.call(n,t);s||(t=he(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?mt(e,o)&&Je(n,"set",t,e):Je(n,"add",t,e),this}function Li(t){const e=he(this),{has:n,get:r}=In(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Je(e,"delete",t,void 0),s}function Ii(){const t=he(this),e=t.size!==0,n=t.clear();return e&&Je(t,"clear",void 0,void 0),n}function un(t,e){return function(r,i){const s=this,o=s.__v_raw,a=he(o),l=e?ai:t?di:Xt;return!t&&Ie(a,"iterate",pt),o.forEach((u,c)=>r.call(i,l(u),l(c),s))}}function dn(t,e,n){return function(...r){const i=this.__v_raw,s=he(i),o=Tt(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...r),c=n?ai:e?di:Xt;return!e&&Ie(s,"iterate",l?zr:pt),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[c(h[0]),c(h[1])]:c(h),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function al(){const t={get(s){return an(this,s)},get size(){return cn(this)},has:ln,add:ki,set:Mi,delete:Li,clear:Ii,forEach:un(!1,!1)},e={get(s){return an(this,s,!1,!0)},get size(){return cn(this)},has:ln,add:ki,set:Mi,delete:Li,clear:Ii,forEach:un(!1,!0)},n={get(s){return an(this,s,!0)},get size(){return cn(this,!0)},has(s){return ln.call(this,s,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:un(!0,!1)},r={get(s){return an(this,s,!0,!0)},get size(){return cn(this,!0)},has(s){return ln.call(this,s,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=dn(s,!1,!1),n[s]=dn(s,!0,!1),e[s]=dn(s,!1,!0),r[s]=dn(s,!0,!0)}),[t,n,e,r]}const[ll,cl,ul,dl]=al();function li(t,e){const n=e?t?dl:ul:t?cl:ll;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ue(n,i)&&i in r?n:r,i,s)}const hl={get:li(!1,!1)},pl={get:li(!1,!0)},gl={get:li(!0,!1)},To=new WeakMap,Ro=new WeakMap,Oo=new WeakMap,fl=new WeakMap;function bl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ml(t){return t.__v_skip||!Object.isExtensible(t)?0:bl(Ua(t))}function sn(t){return Ct(t)?t:ci(t,!1,il,hl,To)}function _l(t){return ci(t,!1,ol,pl,Ro)}function Co(t){return ci(t,!0,sl,gl,Oo)}function ci(t,e,n,r,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=ml(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Rt(t){return Ct(t)?Rt(t.__v_raw):!!(t&&t.__v_isReactive)}function Ct(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function ko(t){return Rt(t)||Ct(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function ui(t){return yn(t,"__v_skip",!0),t}const Xt=t=>Ee(t)?sn(t):t,di=t=>Ee(t)?Co(t):t;function Mo(t){st&&Be&&(t=he(t),So(t.dep||(t.dep=si())))}function Lo(t,e){t=he(t);const n=t.dep;n&&Hr(n)}function Re(t){return!!(t&&t.__v_isRef===!0)}function hi(t){return Io(t,!1)}function El(t){return Io(t,!0)}function Io(t,e){return Re(t)?t:new vl(t,e)}class vl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Xt(e)}get value(){return Mo(this),this._value}set value(e){const n=this.__v_isShallow||wn(e)||Ct(e);e=n?e:he(e),mt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xt(e),Lo(this))}}function gt(t){return Re(t)?t.value:t}const yl={get:(t,e,n)=>gt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Do(t){return Rt(t)?t:new Proxy(t,yl)}class wl{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new oi(e,()=>{this._dirty||(this._dirty=!0,Lo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=he(this);return Mo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Sl(t,e,n=!1){let r,i;const s=ee(t);return s?(r=t,i=We):(r=t.get,i=t.set),new wl(r,i,s||!i,n)}function ot(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Dn(s,e,n)}return i}function ze(t,e,n,r){if(ee(t)){const s=ot(t,e,n,r);return s&&go(s)&&s.catch(o=>{Dn(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(ze(t[s],e,n,r));return i}function Dn(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ot(l,null,10,[t,o,a]);return}}Al(t,n,i,r)}function Al(t,e,n,r=!0){console.error(t)}let Qt=!1,Fr=!1;const Ne=[];let Ge=0;const Ot=[];let Xe=null,ut=0;const qo=Promise.resolve();let pi=null;function Po(t){const e=pi||qo;return t?e.then(this?t.bind(this):t):e}function xl(t){let e=Ge+1,n=Ne.length;for(;e<n;){const r=e+n>>>1,i=Ne[r],s=Jt(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function gi(t){(!Ne.length||!Ne.includes(t,Qt&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?Ne.push(t):Ne.splice(xl(t.id),0,t),Bo())}function Bo(){!Qt&&!Fr&&(Fr=!0,pi=qo.then(zo))}function Nl(t){const e=Ne.indexOf(t);e>Ge&&Ne.splice(e,1)}function Tl(t){Q(t)?Ot.push(...t):(!Xe||!Xe.includes(t,t.allowRecurse?ut+1:ut))&&Ot.push(t),Bo()}function Di(t,e=Qt?Ge+1:0){for(;e<Ne.length;e++){const n=Ne[e];n&&n.pre&&(Ne.splice(e,1),e--,n())}}function Uo(t){if(Ot.length){const e=[...new Set(Ot)];if(Ot.length=0,Xe){Xe.push(...e);return}for(Xe=e,Xe.sort((n,r)=>Jt(n)-Jt(r)),ut=0;ut<Xe.length;ut++)Xe[ut]();Xe=null,ut=0}}const Jt=t=>t.id==null?1/0:t.id,Rl=(t,e)=>{const n=Jt(t)-Jt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zo(t){Fr=!1,Qt=!0,Ne.sort(Rl);try{for(Ge=0;Ge<Ne.length;Ge++){const e=Ne[Ge];e&&e.active!==!1&&ot(e,null,14)}}finally{Ge=0,Ne.length=0,Uo(),Qt=!1,pi=null,(Ne.length||Ot.length)&&zo()}}function Ol(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[c]||_e;p&&(i=n.map(f=>Se(f)?f.trim():f)),h&&(i=n.map(Fa))}let a,l=r[a=Gn(e)]||r[a=Gn(Ye(e))];!l&&s&&(l=r[a=Gn(Et(e))]),l&&ze(l,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(u,t,6,i)}}function Ho(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ee(t)){const l=u=>{const c=Ho(u,e,!0);c&&(a=!0,xe(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ee(t)&&r.set(t,null),null):(Q(s)?s.forEach(l=>o[l]=null):xe(o,s),Ee(t)&&r.set(t,o),o)}function qn(t,e){return!t||!On(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,Et(e))||ue(t,e))}let qe=null,Pn=null;function Sn(t){const e=qe;return qe=t,Pn=t&&t.type.__scopeId||null,e}function wp(t){Pn=t}function Sp(){Pn=null}function Cl(t,e=qe,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Wi(-1);const s=Sn(e);let o;try{o=t(...i)}finally{Sn(s),r._d&&Wi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yn(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:p,setupState:f,ctx:E,inheritAttrs:y}=t;let N,x;const C=Sn(t);try{if(n.shapeFlag&4){const k=i||r,K=k;N=Ke(c.call(K,k,h,s,f,p,E)),x=l}else{const k=e;N=Ke(k.length>1?k(s,{attrs:l,slots:a,emit:u}):k(s,null)),x=e.props?l:kl(l)}}catch(k){Yt.length=0,Dn(k,t,1),N=Le(_t)}let U=N;if(x&&y!==!1){const k=Object.keys(x),{shapeFlag:K}=U;k.length&&K&7&&(o&&k.some(ei)&&(x=Ml(x,o)),U=kt(U,x))}return n.dirs&&(U=kt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),N=U,Sn(C),N}const kl=t=>{let e;for(const n in t)(n==="class"||n==="style"||On(n))&&((e||(e={}))[n]=t[n]);return e},Ml=(t,e)=>{const n={};for(const r in t)(!ei(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ll(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qi(r,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const p=c[h];if(o[p]!==r[p]&&!qn(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?qi(r,o,u):!0:!!o;return!1}function qi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!qn(n,s))return!0}return!1}function Il({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dl="components",ql="directives",Pl=Symbol.for("v-ndc");function Ap(t){return Bl(ql,t)}function Bl(t,e,n=!0,r=!1){const i=qe||Ae;if(i){const s=i.type;if(t===Dl){const a=Oc(s,!1);if(a&&(a===e||a===Ye(e)||a===Ln(Ye(e))))return s}const o=Pi(i[t]||s[t],e)||Pi(i.appContext[t],e);return!o&&r?s:o}}function Pi(t,e){return t&&(t[e]||t[Ye(e)]||t[Ln(Ye(e))])}const Ul=t=>t.__isSuspense;function zl(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Tl(t)}const hn={};function Gt(t,e,n){return Fo(t,e,n)}function Fo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=_e){var a;const l=Qa()===((a=Ae)==null?void 0:a.scope)?Ae:null;let u,c=!1,h=!1;if(Re(t)?(u=()=>t.value,c=wn(t)):Rt(t)?(u=()=>t,r=!0):Q(t)?(h=!0,c=t.some(k=>Rt(k)||wn(k)),u=()=>t.map(k=>{if(Re(k))return k.value;if(Rt(k))return ht(k);if(ee(k))return ot(k,l,2)})):ee(t)?e?u=()=>ot(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),ze(t,l,3,[f])}:u=We,e&&r){const k=u;u=()=>ht(k())}let p,f=k=>{p=C.onStop=()=>{ot(k,l,4),p=C.onStop=void 0}},E;if(en)if(f=We,e?n&&ze(e,l,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const k=Mc();E=k.__watcherHandles||(k.__watcherHandles=[])}else return We;let y=h?new Array(t.length).fill(hn):hn;const N=()=>{if(C.active)if(e){const k=C.run();(r||c||(h?k.some((K,X)=>mt(K,y[X])):mt(k,y)))&&(p&&p(),ze(e,l,3,[k,y===hn?void 0:h&&y[0]===hn?[]:y,f]),y=k)}else C.run()};N.allowRecurse=!!e;let x;i==="sync"?x=N:i==="post"?x=()=>Me(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),x=()=>gi(N));const C=new oi(u,x);e?n?N():y=C.run():i==="post"?Me(C.run.bind(C),l&&l.suspense):C.run();const U=()=>{C.stop(),l&&l.scope&&ti(l.scope.effects,C)};return E&&E.push(U),U}function Hl(t,e,n){const r=this.proxy,i=Se(t)?t.includes(".")?$o(r,t):()=>r[t]:t.bind(r,r);let s;ee(e)?s=e:(s=e.handler,n=e);const o=Ae;Mt(this);const a=Fo(i,s.bind(r),n);return o?Mt(o):ft(),a}function $o(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ht(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))ht(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)ht(t[n],e);else if(po(t)||Tt(t))t.forEach(n=>{ht(n,e)});else if(bo(t))for(const n in t)ht(t[n],e);return t}function xp(t,e){const n=qe;if(n===null)return t;const r=Hn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,u=_e]=e[s];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&ht(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function lt(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(qt(),ze(l,n,8,[t.el,a,t,e]),Pt())}}/*! #__NO_SIDE_EFFECTS__ */function fi(t,e){return ee(t)?xe({name:t.name},e,{setup:t}):t}const fn=t=>!!t.type.__asyncLoader,Ko=t=>t.type.__isKeepAlive;function Fl(t,e){Go(t,"a",e)}function $l(t,e){Go(t,"da",e)}function Go(t,e,n=Ae){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Bn(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ko(i.parent.vnode)&&Kl(r,e,n,i),i=i.parent}}function Kl(t,e,n,r){const i=Bn(e,t,r,!0);Yo(()=>{ti(r[e],i)},n)}function Bn(t,e,n=Ae,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qt(),Mt(n);const a=ze(e,n,t,o);return ft(),Pt(),a});return r?i.unshift(s):i.push(s),s}}const je=t=>(e,n=Ae)=>(!en||t==="sp")&&Bn(t,(...r)=>e(...r),n),Gl=je("bm"),Wo=je("m"),Wl=je("bu"),Yl=je("u"),Zl=je("bum"),Yo=je("um"),Vl=je("sp"),Xl=je("rtg"),Ql=je("rtc");function Jl(t,e=Ae){Bn("ec",t,e)}function Np(t,e,n,r){let i;const s=n&&n[r];if(Q(t)||Se(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const $r=t=>t?aa(t)?Hn(t)||t.proxy:$r(t.parent):null,Wt=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$r(t.parent),$root:t=>$r(t.root),$emit:t=>t.emit,$options:t=>bi(t),$forceUpdate:t=>t.f||(t.f=()=>gi(t.update)),$nextTick:t=>t.n||(t.n=Po.bind(t.proxy)),$watch:t=>Hl.bind(t)}),Zn=(t,e)=>t!==_e&&!t.__isScriptSetup&&ue(t,e),jl={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Zn(r,e))return o[e]=1,r[e];if(i!==_e&&ue(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&ue(u,e))return o[e]=3,s[e];if(n!==_e&&ue(n,e))return o[e]=4,n[e];Kr&&(o[e]=0)}}const c=Wt[e];let h,p;if(c)return e==="$attrs"&&Ie(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ue(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ue(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Zn(i,e)?(i[e]=n,!0):r!==_e&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==_e&&ue(t,o)||Zn(e,o)||(a=s[0])&&ue(a,o)||ue(r,o)||ue(Wt,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bi(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kr=!0;function ec(t){const e=bi(t),n=t.proxy,r=t.ctx;Kr=!1,e.beforeCreate&&Ui(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:p,beforeUpdate:f,updated:E,activated:y,deactivated:N,beforeDestroy:x,beforeUnmount:C,destroyed:U,unmounted:k,render:K,renderTracked:X,renderTriggered:te,errorCaptured:H,serverPrefetch:j,expose:de,inheritAttrs:ae,components:be,directives:ye,filters:fe}=e;if(u&&tc(u,r,null),o)for(const v in o){const R=o[v];ee(R)&&(r[v]=R.bind(n))}if(i){const v=i.call(n,n);Ee(v)&&(t.data=sn(v))}if(Kr=!0,s)for(const v in s){const R=s[v],W=ee(R)?R.bind(n,n):ee(R.get)?R.get.bind(n,n):We,ne=!ee(R)&&ee(R.set)?R.set.bind(n):We,ie=Te({get:W,set:ne});Object.defineProperty(r,v,{enumerable:!0,configurable:!0,get:()=>ie.value,set:ce=>ie.value=ce})}if(a)for(const v in a)Zo(a[v],r,n,v);if(l){const v=ee(l)?l.call(n):l;Reflect.ownKeys(v).forEach(R=>{bn(R,v[R])})}c&&Ui(c,t,"c");function oe(v,R){Q(R)?R.forEach(W=>v(W.bind(n))):R&&v(R.bind(n))}if(oe(Gl,h),oe(Wo,p),oe(Wl,f),oe(Yl,E),oe(Fl,y),oe($l,N),oe(Jl,H),oe(Ql,X),oe(Xl,te),oe(Zl,C),oe(Yo,k),oe(Vl,j),Q(de))if(de.length){const v=t.exposed||(t.exposed={});de.forEach(R=>{Object.defineProperty(v,R,{get:()=>n[R],set:W=>n[R]=W})})}else t.exposed||(t.exposed={});K&&t.render===We&&(t.render=K),ae!=null&&(t.inheritAttrs=ae),be&&(t.components=be),ye&&(t.directives=ye)}function tc(t,e,n=We){Q(t)&&(t=Gr(t));for(const r in t){const i=t[r];let s;Ee(i)?"default"in i?s=He(i.from||r,i.default,!0):s=He(i.from||r):s=He(i),Re(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Ui(t,e,n){ze(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zo(t,e,n,r){const i=r.includes(".")?$o(n,r):()=>n[r];if(Se(t)){const s=e[t];ee(s)&&Gt(i,s)}else if(ee(t))Gt(i,t.bind(n));else if(Ee(t))if(Q(t))t.forEach(s=>Zo(s,e,n,r));else{const s=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(s)&&Gt(i,s,t)}}function bi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(u=>An(l,u,o,!0)),An(l,e,o)),Ee(e)&&s.set(e,l),l}function An(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&An(t,s,n,!0),i&&i.forEach(o=>An(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=nc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nc={data:zi,props:Hi,emits:Hi,methods:Kt,computed:Kt,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Kt,directives:Kt,watch:ic,provide:zi,inject:rc};function zi(t,e){return e?t?function(){return xe(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function rc(t,e){return Kt(Gr(t),Gr(e))}function Gr(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Kt(t,e){return t?xe(Object.create(null),t,e):e}function Hi(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:xe(Object.create(null),Bi(t),Bi(e??{})):e}function ic(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const r in e)n[r]=ke(t[r],e[r]);return n}function Vo(){return{app:null,config:{isNativeTag:qa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sc=0;function oc(t,e){return function(r,i=null){ee(r)||(r=xe({},r)),i!=null&&!Ee(i)&&(i=null);const s=Vo(),o=new WeakSet;let a=!1;const l=s.app={_uid:sc++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Lc,get config(){return s.config},set config(u){},use(u,...c){return o.has(u)||(u&&ee(u.install)?(o.add(u),u.install(l,...c)):ee(u)&&(o.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,h){if(!a){const p=Le(r,i);return p.appContext=s,c&&e?e(p,u):t(p,u,h),a=!0,l._container=u,u.__vue_app__=l,Hn(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l},runWithContext(u){xn=l;try{return u()}finally{xn=null}}};return l}}let xn=null;function bn(t,e){if(Ae){let n=Ae.provides;const r=Ae.parent&&Ae.parent.provides;r===n&&(n=Ae.provides=Object.create(r)),n[t]=e}}function He(t,e,n=!1){const r=Ae||qe;if(r||xn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}function ac(t,e,n,r=!1){const i={},s={};yn(s,zn,1),t.propsDefaults=Object.create(null),Xo(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:_l(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function lc(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=he(i),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let p=c[h];if(qn(t.emitsOptions,p))continue;const f=e[p];if(l)if(ue(s,p))f!==s[p]&&(s[p]=f,u=!0);else{const E=Ye(p);i[E]=Wr(l,a,E,f,t,!1)}else f!==s[p]&&(s[p]=f,u=!0)}}}else{Xo(t,e,i,s)&&(u=!0);let c;for(const h in a)(!e||!ue(e,h)&&((c=Et(h))===h||!ue(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(i[h]=Wr(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ue(e,h))&&(delete s[h],u=!0)}u&&Je(t,"set","$attrs")}function Xo(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(gn(l))continue;const u=e[l];let c;i&&ue(i,c=Ye(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:qn(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(s){const l=he(n),u=a||_e;for(let c=0;c<s.length;c++){const h=s[c];n[h]=Wr(i,l,h,u[h],t,!ue(u,h))}}return o}function Wr(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:u}=i;n in u?r=u[n]:(Mt(i),r=u[n]=l.call(null,e),ft())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Et(n))&&(r=!0))}return r}function Qo(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ee(t)){const c=h=>{l=!0;const[p,f]=Qo(h,e,!0);xe(o,p),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return Ee(t)&&r.set(t,Nt),Nt;if(Q(s))for(let c=0;c<s.length;c++){const h=Ye(s[c]);Fi(h)&&(o[h]=_e)}else if(s)for(const c in s){const h=Ye(c);if(Fi(h)){const p=s[c],f=o[h]=Q(p)||ee(p)?{type:p}:xe({},p);if(f){const E=Gi(Boolean,f.type),y=Gi(String,f.type);f[0]=E>-1,f[1]=y<0||E<y,(E>-1||ue(f,"default"))&&a.push(h)}}}const u=[o,a];return Ee(t)&&r.set(t,u),u}function Fi(t){return t[0]!=="$"}function $i(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ki(t,e){return $i(t)===$i(e)}function Gi(t,e){return Q(e)?e.findIndex(n=>Ki(n,t)):ee(e)&&Ki(e,t)?0:-1}const Jo=t=>t[0]==="_"||t==="$stable",mi=t=>Q(t)?t.map(Ke):[Ke(t)],cc=(t,e,n)=>{if(e._n)return e;const r=Cl((...i)=>mi(e(...i)),n);return r._c=!1,r},jo=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Jo(i))continue;const s=t[i];if(ee(s))e[i]=cc(i,s,r);else if(s!=null){const o=mi(s);e[i]=()=>o}}},ea=(t,e)=>{const n=mi(e);t.slots.default=()=>n},uc=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),yn(e,"_",n)):jo(e,t.slots={})}else t.slots={},e&&ea(t,e);yn(t.slots,zn,1)},dc=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=_e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(xe(i,e),!n&&a===1&&delete i._):(s=!e.$stable,jo(e,i)),o=e}else e&&(ea(t,e),o={default:1});if(s)for(const a in i)!Jo(a)&&o[a]==null&&delete i[a]};function Yr(t,e,n,r,i=!1){if(Q(t)){t.forEach((p,f)=>Yr(p,e&&(Q(e)?e[f]:e),n,r,i));return}if(fn(r)&&!i)return;const s=r.shapeFlag&4?Hn(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(Se(u)?(c[u]=null,ue(h,u)&&(h[u]=null)):Re(u)&&(u.value=null)),ee(l))ot(l,a,12,[o,c]);else{const p=Se(l),f=Re(l);if(p||f){const E=()=>{if(t.f){const y=p?ue(h,l)?h[l]:c[l]:l.value;i?Q(y)&&ti(y,s):Q(y)?y.includes(s)||y.push(s):p?(c[l]=[s],ue(h,l)&&(h[l]=c[l])):(l.value=[s],t.k&&(c[t.k]=l.value))}else p?(c[l]=o,ue(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(c[t.k]=o))};o?(E.id=-1,Me(E,n)):E()}}}const Me=zl;function hc(t){return pc(t)}function pc(t,e){const n=Pr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:p,setScopeId:f=We,insertStaticContent:E}=t,y=(d,g,b,w=null,A=null,L=null,B=!1,m=null,D=!!g.dynamicChildren)=>{if(d===g)return;d&&!zt(d,g)&&(w=O(d),ce(d,A,L,!0),d=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:S,ref:q,shapeFlag:z}=g;switch(S){case Un:N(d,g,b,w);break;case _t:x(d,g,b,w);break;case mn:d==null&&C(g,b,w,B);break;case Qe:be(d,g,b,w,A,L,B,m,D);break;default:z&1?K(d,g,b,w,A,L,B,m,D):z&6?ye(d,g,b,w,A,L,B,m,D):(z&64||z&128)&&S.process(d,g,b,w,A,L,B,m,D,Z)}q!=null&&A&&Yr(q,d&&d.ref,L,g||d,!g)},N=(d,g,b,w)=>{if(d==null)r(g.el=a(g.children),b,w);else{const A=g.el=d.el;g.children!==d.children&&u(A,g.children)}},x=(d,g,b,w)=>{d==null?r(g.el=l(g.children||""),b,w):g.el=d.el},C=(d,g,b,w)=>{[d.el,d.anchor]=E(d.children,g,b,w,d.el,d.anchor)},U=({el:d,anchor:g},b,w)=>{let A;for(;d&&d!==g;)A=p(d),r(d,b,w),d=A;r(g,b,w)},k=({el:d,anchor:g})=>{let b;for(;d&&d!==g;)b=p(d),i(d),d=b;i(g)},K=(d,g,b,w,A,L,B,m,D)=>{B=B||g.type==="svg",d==null?X(g,b,w,A,L,B,m,D):j(d,g,A,L,B,m,D)},X=(d,g,b,w,A,L,B,m)=>{let D,S;const{type:q,props:z,shapeFlag:F,transition:Y,dirs:V}=d;if(D=d.el=o(d.type,L,z&&z.is,z),F&8?c(D,d.children):F&16&&H(d.children,D,null,w,A,L&&q!=="foreignObject",B,m),V&&lt(d,null,w,"created"),te(D,d,d.scopeId,B,w),z){for(const M in z)M!=="value"&&!gn(M)&&s(D,M,null,z[M],L,d.children,w,A,I);"value"in z&&s(D,"value",null,z.value),(S=z.onVnodeBeforeMount)&&$e(S,w,d)}V&&lt(d,null,w,"beforeMount");const T=gc(A,Y);T&&Y.beforeEnter(D),r(D,g,b),((S=z&&z.onVnodeMounted)||T||V)&&Me(()=>{S&&$e(S,w,d),T&&Y.enter(D),V&&lt(d,null,w,"mounted")},A)},te=(d,g,b,w,A)=>{if(b&&f(d,b),w)for(let L=0;L<w.length;L++)f(d,w[L]);if(A){let L=A.subTree;if(g===L){const B=A.vnode;te(d,B,B.scopeId,B.slotScopeIds,A.parent)}}},H=(d,g,b,w,A,L,B,m,D=0)=>{for(let S=D;S<d.length;S++){const q=d[S]=m?nt(d[S]):Ke(d[S]);y(null,q,g,b,w,A,L,B,m)}},j=(d,g,b,w,A,L,B)=>{const m=g.el=d.el;let{patchFlag:D,dynamicChildren:S,dirs:q}=g;D|=d.patchFlag&16;const z=d.props||_e,F=g.props||_e;let Y;b&&ct(b,!1),(Y=F.onVnodeBeforeUpdate)&&$e(Y,b,g,d),q&&lt(g,d,b,"beforeUpdate"),b&&ct(b,!0);const V=A&&g.type!=="foreignObject";if(S?de(d.dynamicChildren,S,m,b,w,V,L):B||R(d,g,m,null,b,w,V,L,!1),D>0){if(D&16)ae(m,g,z,F,b,w,A);else if(D&2&&z.class!==F.class&&s(m,"class",null,F.class,A),D&4&&s(m,"style",z.style,F.style,A),D&8){const T=g.dynamicProps;for(let M=0;M<T.length;M++){const $=T[M],J=z[$],me=F[$];(me!==J||$==="value")&&s(m,$,J,me,A,d.children,b,w,I)}}D&1&&d.children!==g.children&&c(m,g.children)}else!B&&S==null&&ae(m,g,z,F,b,w,A);((Y=F.onVnodeUpdated)||q)&&Me(()=>{Y&&$e(Y,b,g,d),q&&lt(g,d,b,"updated")},w)},de=(d,g,b,w,A,L,B)=>{for(let m=0;m<g.length;m++){const D=d[m],S=g[m],q=D.el&&(D.type===Qe||!zt(D,S)||D.shapeFlag&70)?h(D.el):b;y(D,S,q,null,w,A,L,B,!0)}},ae=(d,g,b,w,A,L,B)=>{if(b!==w){if(b!==_e)for(const m in b)!gn(m)&&!(m in w)&&s(d,m,b[m],null,B,g.children,A,L,I);for(const m in w){if(gn(m))continue;const D=w[m],S=b[m];D!==S&&m!=="value"&&s(d,m,S,D,B,g.children,A,L,I)}"value"in w&&s(d,"value",b.value,w.value)}},be=(d,g,b,w,A,L,B,m,D)=>{const S=g.el=d?d.el:a(""),q=g.anchor=d?d.anchor:a("");let{patchFlag:z,dynamicChildren:F,slotScopeIds:Y}=g;Y&&(m=m?m.concat(Y):Y),d==null?(r(S,b,w),r(q,b,w),H(g.children,b,q,A,L,B,m,D)):z>0&&z&64&&F&&d.dynamicChildren?(de(d.dynamicChildren,F,b,A,L,B,m),(g.key!=null||A&&g===A.subTree)&&ta(d,g,!0)):R(d,g,b,q,A,L,B,m,D)},ye=(d,g,b,w,A,L,B,m,D)=>{g.slotScopeIds=m,d==null?g.shapeFlag&512?A.ctx.activate(g,b,w,B,D):fe(g,b,w,A,L,B,D):le(d,g,D)},fe=(d,g,b,w,A,L,B)=>{const m=d.component=Ac(d,w,A);if(Ko(d)&&(m.ctx.renderer=Z),xc(m),m.asyncDep){if(A&&A.registerDep(m,oe),!d.el){const D=m.subTree=Le(_t);x(null,D,g,b)}return}oe(m,d,g,b,A,L,B)},le=(d,g,b)=>{const w=g.component=d.component;if(Ll(d,g,b))if(w.asyncDep&&!w.asyncResolved){v(w,g,b);return}else w.next=g,Nl(w.update),w.update();else g.el=d.el,w.vnode=g},oe=(d,g,b,w,A,L,B)=>{const m=()=>{if(d.isMounted){let{next:q,bu:z,u:F,parent:Y,vnode:V}=d,T=q,M;ct(d,!1),q?(q.el=V.el,v(d,q,B)):q=V,z&&Wn(z),(M=q.props&&q.props.onVnodeBeforeUpdate)&&$e(M,Y,q,V),ct(d,!0);const $=Yn(d),J=d.subTree;d.subTree=$,y(J,$,h(J.el),O(J),d,A,L),q.el=$.el,T===null&&Il(d,$.el),F&&Me(F,A),(M=q.props&&q.props.onVnodeUpdated)&&Me(()=>$e(M,Y,q,V),A)}else{let q;const{el:z,props:F}=g,{bm:Y,m:V,parent:T}=d,M=fn(g);if(ct(d,!1),Y&&Wn(Y),!M&&(q=F&&F.onVnodeBeforeMount)&&$e(q,T,g),ct(d,!0),z&&G){const $=()=>{d.subTree=Yn(d),G(z,d.subTree,d,A,null)};M?g.type.__asyncLoader().then(()=>!d.isUnmounted&&$()):$()}else{const $=d.subTree=Yn(d);y(null,$,b,w,d,A,L),g.el=$.el}if(V&&Me(V,A),!M&&(q=F&&F.onVnodeMounted)){const $=g;Me(()=>$e(q,T,$),A)}(g.shapeFlag&256||T&&fn(T.vnode)&&T.vnode.shapeFlag&256)&&d.a&&Me(d.a,A),d.isMounted=!0,g=b=w=null}},D=d.effect=new oi(m,()=>gi(S),d.scope),S=d.update=()=>D.run();S.id=d.uid,ct(d,!0),S()},v=(d,g,b)=>{g.component=d;const w=d.vnode.props;d.vnode=g,d.next=null,lc(d,g.props,w,b),dc(d,g.children,b),qt(),Di(),Pt()},R=(d,g,b,w,A,L,B,m,D=!1)=>{const S=d&&d.children,q=d?d.shapeFlag:0,z=g.children,{patchFlag:F,shapeFlag:Y}=g;if(F>0){if(F&128){ne(S,z,b,w,A,L,B,m,D);return}else if(F&256){W(S,z,b,w,A,L,B,m,D);return}}Y&8?(q&16&&I(S,A,L),z!==S&&c(b,z)):q&16?Y&16?ne(S,z,b,w,A,L,B,m,D):I(S,A,L,!0):(q&8&&c(b,""),Y&16&&H(z,b,w,A,L,B,m,D))},W=(d,g,b,w,A,L,B,m,D)=>{d=d||Nt,g=g||Nt;const S=d.length,q=g.length,z=Math.min(S,q);let F;for(F=0;F<z;F++){const Y=g[F]=D?nt(g[F]):Ke(g[F]);y(d[F],Y,b,null,A,L,B,m,D)}S>q?I(d,A,L,!0,!1,z):H(g,b,w,A,L,B,m,D,z)},ne=(d,g,b,w,A,L,B,m,D)=>{let S=0;const q=g.length;let z=d.length-1,F=q-1;for(;S<=z&&S<=F;){const Y=d[S],V=g[S]=D?nt(g[S]):Ke(g[S]);if(zt(Y,V))y(Y,V,b,null,A,L,B,m,D);else break;S++}for(;S<=z&&S<=F;){const Y=d[z],V=g[F]=D?nt(g[F]):Ke(g[F]);if(zt(Y,V))y(Y,V,b,null,A,L,B,m,D);else break;z--,F--}if(S>z){if(S<=F){const Y=F+1,V=Y<q?g[Y].el:w;for(;S<=F;)y(null,g[S]=D?nt(g[S]):Ke(g[S]),b,V,A,L,B,m,D),S++}}else if(S>F)for(;S<=z;)ce(d[S],A,L,!0),S++;else{const Y=S,V=S,T=new Map;for(S=V;S<=F;S++){const Ce=g[S]=D?nt(g[S]):Ke(g[S]);Ce.key!=null&&T.set(Ce.key,S)}let M,$=0;const J=F-V+1;let me=!1,Oe=0;const Ze=new Array(J);for(S=0;S<J;S++)Ze[S]=0;for(S=Y;S<=z;S++){const Ce=d[S];if($>=J){ce(Ce,A,L,!0);continue}let De;if(Ce.key!=null)De=T.get(Ce.key);else for(M=V;M<=F;M++)if(Ze[M-V]===0&&zt(Ce,g[M])){De=M;break}De===void 0?ce(Ce,A,L,!0):(Ze[De-V]=S+1,De>=Oe?Oe=De:me=!0,y(Ce,g[De],b,null,A,L,B,m,D),$++)}const yt=me?fc(Ze):Nt;for(M=yt.length-1,S=J-1;S>=0;S--){const Ce=V+S,De=g[Ce],pe=Ce+1<q?g[Ce+1].el:w;Ze[S]===0?y(null,De,b,pe,A,L,B,m,D):me&&(M<0||S!==yt[M]?ie(De,b,pe,2):M--)}}},ie=(d,g,b,w,A=null)=>{const{el:L,type:B,transition:m,children:D,shapeFlag:S}=d;if(S&6){ie(d.component.subTree,g,b,w);return}if(S&128){d.suspense.move(g,b,w);return}if(S&64){B.move(d,g,b,Z);return}if(B===Qe){r(L,g,b);for(let z=0;z<D.length;z++)ie(D[z],g,b,w);r(d.anchor,g,b);return}if(B===mn){U(d,g,b);return}if(w!==2&&S&1&&m)if(w===0)m.beforeEnter(L),r(L,g,b),Me(()=>m.enter(L),A);else{const{leave:z,delayLeave:F,afterLeave:Y}=m,V=()=>r(L,g,b),T=()=>{z(L,()=>{V(),Y&&Y()})};F?F(L,V,T):T()}else r(L,g,b)},ce=(d,g,b,w=!1,A=!1)=>{const{type:L,props:B,ref:m,children:D,dynamicChildren:S,shapeFlag:q,patchFlag:z,dirs:F}=d;if(m!=null&&Yr(m,null,b,d,!0),q&256){g.ctx.deactivate(d);return}const Y=q&1&&F,V=!fn(d);let T;if(V&&(T=B&&B.onVnodeBeforeUnmount)&&$e(T,g,d),q&6)_(d.component,b,w);else{if(q&128){d.suspense.unmount(b,w);return}Y&&lt(d,null,g,"beforeUnmount"),q&64?d.type.remove(d,g,b,A,Z,w):S&&(L!==Qe||z>0&&z&64)?I(S,g,b,!1,!0):(L===Qe&&z&384||!A&&q&16)&&I(D,g,b),w&&ve(d)}(V&&(T=B&&B.onVnodeUnmounted)||Y)&&Me(()=>{T&&$e(T,g,d),Y&&lt(d,null,g,"unmounted")},b)},ve=d=>{const{type:g,el:b,anchor:w,transition:A}=d;if(g===Qe){we(b,w);return}if(g===mn){k(d);return}const L=()=>{i(b),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(d.shapeFlag&1&&A&&!A.persisted){const{leave:B,delayLeave:m}=A,D=()=>B(b,L);m?m(d.el,L,D):D()}else L()},we=(d,g)=>{let b;for(;d!==g;)b=p(d),i(d),d=b;i(g)},_=(d,g,b)=>{const{bum:w,scope:A,update:L,subTree:B,um:m}=d;w&&Wn(w),A.stop(),L&&(L.active=!1,ce(B,d,g,b)),m&&Me(m,g),Me(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},I=(d,g,b,w=!1,A=!1,L=0)=>{for(let B=L;B<d.length;B++)ce(d[B],g,b,w,A)},O=d=>d.shapeFlag&6?O(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),P=(d,g,b)=>{d==null?g._vnode&&ce(g._vnode,null,null,!0):y(g._vnode||null,d,g,null,null,null,b),Di(),Uo(),g._vnode=d},Z={p:y,um:ce,m:ie,r:ve,mt:fe,mc:H,pc:R,pbc:de,n:O,o:t};let se,G;return e&&([se,G]=e(Z)),{render:P,hydrate:se,createApp:oc(P,se)}}function ct({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ta(t,e,n=!1){const r=t.children,i=e.children;if(Q(r)&&Q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=nt(i[s]),a.el=o.el),n||ta(o,a)),a.type===Un&&(a.el=o.el)}}function fc(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const bc=t=>t.__isTeleport,Qe=Symbol.for("v-fgt"),Un=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),mn=Symbol.for("v-stc"),Yt=[];let Ue=null;function na(t=!1){Yt.push(Ue=t?null:[])}function mc(){Yt.pop(),Ue=Yt[Yt.length-1]||null}let jt=1;function Wi(t){jt+=t}function ra(t){return t.dynamicChildren=jt>0?Ue||Nt:null,mc(),jt>0&&Ue&&Ue.push(t),t}function Tp(t,e,n,r,i,s){return ra(oa(t,e,n,r,i,s,!0))}function ia(t,e,n,r,i){return ra(Le(t,e,n,r,i,!0))}function Zr(t){return t?t.__v_isVNode===!0:!1}function zt(t,e){return t.type===e.type&&t.key===e.key}const zn="__vInternal",sa=({key:t})=>t??null,_n=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||Re(t)||ee(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function oa(t,e=null,n=null,r=0,i=null,s=t===Qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sa(e),ref:e&&_n(e),scopeId:Pn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return a?(_i(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),jt>0&&!o&&Ue&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ue.push(l),l}const Le=_c;function _c(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Pl)&&(t=_t),Zr(t)){const a=kt(t,e,!0);return n&&_i(a,n),jt>0&&!s&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(Cc(t)&&(t=t.__vccOpts),e){e=Ec(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=ii(a)),Ee(l)&&(ko(l)&&!Q(l)&&(l=xe({},l)),e.style=ri(l))}const o=Se(t)?1:Ul(t)?128:bc(t)?64:Ee(t)?4:ee(t)?2:0;return oa(t,e,n,r,i,o,s,!0)}function Ec(t){return t?ko(t)||zn in t?xe({},t):t:null}function kt(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?yc(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sa(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(_n(e)):[i,_n(e)]:_n(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kt(t.ssContent),ssFallback:t.ssFallback&&kt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vc(t=" ",e=0){return Le(Un,null,t,e)}function Rp(t,e){const n=Le(mn,null,t);return n.staticCount=e,n}function Op(t="",e=!1){return e?(na(),ia(_t,null,t)):Le(_t,null,t)}function Ke(t){return t==null||typeof t=="boolean"?Le(_t):Q(t)?Le(Qe,null,t.slice()):typeof t=="object"?nt(t):Le(Un,null,String(t))}function nt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kt(t)}function _i(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),_i(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(zn in e)?e._ctx=qe:i===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),r&64?(n=16,e=[vc(e)]):n=8);t.children=e,t.shapeFlag|=n}function yc(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ii([e.class,r.class]));else if(i==="style")e.style=ri([e.style,r.style]);else if(On(i)){const s=e[i],o=r[i];o&&s!==o&&!(Q(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function $e(t,e,n,r=null){ze(t,e,7,[n,r])}const wc=Vo();let Sc=0;function Ac(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||wc,s={uid:Sc++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Eo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qo(r,i),emitsOptions:Ho(r,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ol.bind(null,s),t.ce&&t.ce(s),s}let Ae=null,Ei,wt,Yi="__VUE_INSTANCE_SETTERS__";(wt=Pr()[Yi])||(wt=Pr()[Yi]=[]),wt.push(t=>Ae=t),Ei=t=>{wt.length>1?wt.forEach(e=>e(t)):wt[0](t)};const Mt=t=>{Ei(t),t.scope.on()},ft=()=>{Ae&&Ae.scope.off(),Ei(null)};function aa(t){return t.vnode.shapeFlag&4}let en=!1;function xc(t,e=!1){en=e;const{props:n,children:r}=t.vnode,i=aa(t);ac(t,n,i,e),uc(t,r);const s=i?Nc(t,e):void 0;return en=!1,s}function Nc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ui(new Proxy(t.ctx,jl));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Rc(t):null;Mt(t),qt();const s=ot(r,t,0,[t.props,i]);if(Pt(),ft(),go(s)){if(s.then(ft,ft),e)return s.then(o=>{Zi(t,o,e)}).catch(o=>{Dn(o,t,0)});t.asyncDep=s}else Zi(t,s,e)}else la(t,e)}function Zi(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Do(e)),la(t,n)}let Vi;function la(t,e,n){const r=t.type;if(!t.render){if(!e&&Vi&&!r.render){const i=r.template||bi(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=xe(xe({isCustomElement:s,delimiters:a},o),l);r.render=Vi(i,u)}}t.render=r.render||We}{Mt(t),qt();try{ec(t)}finally{Pt(),ft()}}}function Tc(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ie(t,"get","$attrs"),e[n]}}))}function Rc(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Tc(t)},slots:t.slots,emit:t.emit,expose:e}}function Hn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Do(ui(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wt)return Wt[n](t)},has(e,n){return n in e||n in Wt}}))}function Oc(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function Cc(t){return ee(t)&&"__vccOpts"in t}const Te=(t,e)=>Sl(t,e,en);function Nn(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!Q(e)?Zr(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zr(n)&&(n=[n]),Le(t,e,n))}const kc=Symbol.for("v-scx"),Mc=()=>He(kc),Lc="3.3.9",Ic="http://www.w3.org/2000/svg",dt=typeof document<"u"?document:null,Xi=dt&&dt.createElement("template"),Dc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?dt.createElementNS(Ic,t):dt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>dt.createTextNode(t),createComment:t=>dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Xi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Xi.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qc=Symbol("_vtc");function Pc(t,e,n){const r=t[qc];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bc=Symbol("_vod");function Uc(t,e,n){const r=t.style,i=Se(n);if(n&&!i){if(e&&!Se(e))for(const s in e)n[s]==null&&Vr(r,s,"");for(const s in n)Vr(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Bc in t&&(r.display=s)}}const Qi=/\s*!important$/;function Vr(t,e,n){if(Q(n))n.forEach(r=>Vr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=zc(t,e);Qi.test(n)?t.setProperty(Et(r),n.replace(Qi,""),"important"):t[r]=n}}const Ji=["Webkit","Moz","ms"],Vn={};function zc(t,e){const n=Vn[e];if(n)return n;let r=Ye(e);if(r!=="filter"&&r in t)return Vn[e]=r;r=Ln(r);for(let i=0;i<Ji.length;i++){const s=Ji[i]+r;if(s in t)return Vn[e]=s}return e}const ji="http://www.w3.org/1999/xlink";function Hc(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ji,e.slice(6,e.length)):t.setAttributeNS(ji,e,n);else{const s=Za(e);n==null||s&&!mo(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Fc(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,c=n??"";u!==c&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=mo(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function $c(t,e,n,r){t.addEventListener(e,n,r)}function Kc(t,e,n,r){t.removeEventListener(e,n,r)}const es=Symbol("_vei");function Gc(t,e,n,r,i=null){const s=t[es]||(t[es]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Wc(e);if(r){const u=s[e]=Vc(r,i);$c(t,a,u,l)}else o&&(Kc(t,a,o,l),s[e]=void 0)}}const ts=/(?:Once|Passive|Capture)$/;function Wc(t){let e;if(ts.test(t)){e={};let r;for(;r=t.match(ts);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Et(t.slice(2)),e]}let Xn=0;const Yc=Promise.resolve(),Zc=()=>Xn||(Yc.then(()=>Xn=0),Xn=Date.now());function Vc(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Xc(r,n.value),e,5,[r])};return n.value=t,n.attached=Zc(),n}function Xc(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ns=/^on[a-z]/,Qc=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Pc(t,r,i):e==="style"?Uc(t,n,r):On(e)?ei(e)||Gc(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jc(t,e,r,i))?Fc(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hc(t,e,r,i))};function Jc(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ns.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ns.test(e)&&Se(n)?!1:e in t}const jc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cp=(t,e)=>n=>{if(!("key"in n))return;const r=Et(n.key);if(e.some(i=>i===r||jc[i]===r))return t(n)},eu=xe({patchProp:Qc},Dc);let rs;function tu(){return rs||(rs=hc(eu))}const nu=(...t)=>{const e=tu().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=ru(r);if(!i)return;const s=e._component;!ee(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ru(t){return Se(t)?document.querySelector(t):t}var iu=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const su=Symbol();var is;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(is||(is={}));function ou(){const t=Va(!0),e=t.run(()=>hi({}));let n=[],r=[];const i=ui({install(s){i._a=s,s.provide(su,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!iu?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const En={initColor:function(r="#1abc8c"){var e=parseInt(r.substring(1,3),16),n=parseInt(r.substring(3,5),16),r=parseInt(r.substring(5,7),16),i=document.createElement("style");i.innerHTML=`body{
			--wcp-color-base: rgba(${e}, ${n}, ${r}, 1);
            --wcp-color-base80percent: rgba(${e}, ${n}, ${r}, .8);
            --wcp-color-base10percent: rgba(${e}, ${n}, ${r}, .1);
            --wcp-color-input: rgba(191, 191, 191, 1);
            --wcp-color-success: rgba(50, 130, 50, 1);
            --wcp-color-success80percent: rgba(50, 130, 50, 0.8);
            --wcp-color-success10percent: rgba(50, 130, 50, 0.1);
            --wcp-color-error: rgba(210, 50, 50, 1);
            --wcp-color-error80percent: rgba(210, 50, 50, 0.8);
            --wcp-color-error10percent: rgba(210, 50, 50, 0.1);
            --wcp-color-warning: rgba(255, 190, 10, 1);
            --wcp-color-warning80percent: rgba(255, 190, 10, 0.8);
            --wcp-color-warning10percent: rgba(255, 190, 10, 0.1);
            --wcp-color-disabled: rgba(191, 191, 191, .6);
		}`,document.body.append(i)},isEmpty:function(t){return t instanceof Array?t.length==0:t instanceof Object?Object.keys(t).length==0:void 0},_cloneDeep(t){let e=null;switch(Object.prototype.toString.call(t).split(" ")[1].split("]")[0]){case"Object":for(var n in e={},t)e[n]=this._cloneDeep(t[n]);break;case"Array":e=[];for(let r=0;r<t.length;r++)e[r]=this._cloneDeep(t[r]);break;case"Map":e=new Map,t.forEach((r,i)=>{e.set(i,this._cloneDeep(r))});break;case"WeakMap":e=new WeakMap,t.forEach((r,i)=>{e.set(i,this._cloneDeep(r))});break;case"Set":e=new Set,t.forEach(r=>{e.add(this._cloneDeep(r))});break;case"Date":e=new Date(t.valueOf());break;default:e=t}return e},cloneDeep(){let t,e,n,r,i,s,o=arguments[0]||{},a=1,l=arguments.length;for(typeof o!="object"&&typeof o!="function"&&(o={}),a===l&&(o=this,a--);a<l;a++)if((t=arguments[a])!=null)for(e in t)r=t[e],e!=="__proto__"&&o!==r&&(r&&(r.toString()==="[object Object]"||(i=Array.isArray(r)))?(n=o[e],s=i&&!Array.isArray(n)?[]:!i&&!n instanceof Object?{}:n,i=!1,this.typeof(o)=="Map"?(o=new Map).set(e,this.cloneDeep(s,r)):this.typeof(o)=="WeakMap"?(o=new WeakMap).set(e,this.cloneDeep(s,r)):this.typeof(o)=="Set"?(o=new Set)[e].add(this.cloneDeep(s,r)):this.typeof(o)=="Date"?o[e]=new Date(this.cloneDeep(s,r).valueOf()):o[e]=this.cloneDeep(s,r)):r!==void 0&&(o[e]=r));return o},typeof:function(t){return Object.prototype.toString.call(t).split(" ")[1].split("]")[0]},getCookie(t){return t=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")),t?decodeURIComponent(t[1]):void 0},setCookie(t,e,n={}){(n={path:"/",...n}).expires instanceof Date&&(n.expires=n.expires.toUTCString());let r=encodeURIComponent(t)+"="+encodeURIComponent(e);for(var i in n)r+="; "+i,i=n[i],i!==!0&&(r+="="+i);document.cookie=r},deleteCookie(t){this.setCookie(t,"",{"max-age":-1})}};class au{static setOptions(e){En.cloneDeep(this._options,e)}static _initOption(e){var n={};if(En.cloneDeep(n,this._options,e),n.data&&!En.isEmpty(n.data))if(n.method=="get"){let r="";for(const i in n.data)r+=i+"="+n.data[i]+"&";r=r.slice(0,-1),n.url+="?"+r}else n.method=="post"&&{}.toString.call(n.data)=="[object FormData]"?n.body=n.data:n.body=JSON.stringify(n.data);return n}static post(e){return e.method="post",e=this._initOption(e),fetch(e.url,e)}static delete(e){return e.method="delete",e=this._initOption(e),fetch(e.url,e)}static put(e){return e.method="put",e=this._initOption(e),fetch(e.url,e)}static get(e){return e.method="get",e=this._initOption(e),fetch(e.url,e)}}Ni(au,"_options",{headers:{"Content-Type":"application/json;charset=utf-8"}});class lu extends HTMLElement{_getStyle(){return`
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
        .btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 5px 10px;
            color: #fff;
            background-color: var(--wcp-color-base);
            border-width: 1px;
            border-style: solid;
            border-color: transparent;
            border-radius: 6px;
            font-size: 14px;
            outline: 0px;
            line-height:1.5;
            cursor: pointer;
            user-select: none;
            transition: all 0.2s;
        }
        .btn:hover{
            background-color: var(--wcp-color-base80percent);
        }
        .btn:active {
            background-image: radial-gradient(var(--wcp-color-base80percent), var(--wcp-color-base80percent));
        }
        /* outline */
        .outline{
            color: var(--wcp-color-base);
            background-color: transparent;
            border-color: var(--wcp-color-base);
        }
        .outline:hover{
            color: #fff;
            background-color: var(--wcp-color-base80percent);
            border-color: var(--wcp-color-base80percent);
        }
        /* text */
        .text{
            color: var(--wcp-color-base);
            background-color: transparent;
        }
        .text:hover{
            background-color: var(--wcp-color-base10percent);
        }
        .text:active{
            background-image: radial-gradient(var(--wcp-color-base10percent), var(--wcp-color-base10percent));
        }
        /* success */
        .success{
            background-color: var(--wcp-color-success);
        }
        .success:hover{
            background-color: var(--wcp-color-success80percent);
        }
        .success:active {
            background-image: radial-gradient(var(--wcp-color-success80percent), var(--wcp-color-success80percent));
        }
        .success.outline{
            color: var(--wcp-color-success);
            background-color: transparent;
            border-color: var(--wcp-color-success);
        }
        .success.outline:hover{
            color: #fff;
            background-color: var(--wcp-color-success80percent);
            border-color: var(--wcp-color-success80percent);
        }
        .success.text{
            color: var(--wcp-color-success);
            background-color: transparent;
            border-color: transparent;
        }
        .success.text:hover{
            background-color: var(--wcp-color-success10percent);
        }
        .success.text:active{
            background-image: radial-gradient(var(--wcp-color-success10percent), var(--wcp-color-success10percent));
        }
        /* error */
        .error{
            background-color: var(--wcp-color-error);
        }
        .error:hover{
            background-color: var(--wcp-color-error80percent);
        }
        .error:active {
            background-image: radial-gradient(var(--wcp-color-error80percent), var(--wcp-color-error80percent));
        }
        .error.outline{
            color: var(--wcp-color-error);
            background-color: transparent;
            border-color: var(--wcp-color-error);
        }
        .error.outline:hover{
            color: #fff;
            background-color: var(--wcp-color-error80percent);
            border-color: var(--wcp-color-error80percent);
        }
        .error.text{
            color: var(--wcp-color-error);
            background-color: transparent;
            border-color: transparent;
        }
        .error.text:hover{
            background-color: var(--wcp-color-error10percent);
        }
        .error.text:active{
            background-image: radial-gradient(var(--wcp-color-error10percent), var(--wcp-color-error10percent));
        }
        /* warning */
        .warning{
            background-color: var(--wcp-color-warning);
        }
        .warning:hover{
            background-color: var(--wcp-color-warning80percent);
        }
        .warning:active {
            background-image: radial-gradient(var(--wcp-color-warning80percent), var(--wcp-color-warning80percent));
        }
        .warning.outline{
            color: var(--wcp-color-warning);
            background-color: transparent;
            border-color: var(--wcp-color-warning);
        }
        .warning.outline:hover{
            color: #fff;
            background-color: var(--wcp-color-warning80percent);
            border-color: var(--wcp-color-warning80percent);
        }
        .warning.text{
            color: var(--wcp-color-warning);
            background-color: transparent;
            border-color: transparent;
        }
        .warning.text:hover{
            background-color: var(--wcp-color-warning10percent);
        }
        .warning.text:active{
            background-image: radial-gradient(var(--wcp-color-warning10percent), var(--wcp-color-warning10percent));
        }
        /* disabled */
        .disabled{
            background-color: var(--wcp-color-disabled);
            pointer-events: none;
        }
        .disabled.outline{
            color: var(--wcp-color-disabled);
            background-color: transparent;
            border-color: var(--wcp-color-disabled);
        }
        .disabled.text{
            color: var(--wcp-color-disabled);
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","color","disabled","size","full"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("type")&&(e=this.getAttribute("type"),n.querySelector("#btn").classList.add(e)),this.hasAttribute("color")&&(e=this.getAttribute("color"),n.querySelector("#btn").classList.add(e)),this.hasAttribute("disabled")&&n.querySelector("#btn").classList.add("disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#btn").classList.add(e))}_reset(){this.shadowRoot.querySelector("#btn").classList.value="btn"}}customElements.define("w-btn",lu);let cu=class extends HTMLElement{_getStyle(){return`
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
			color: var(--wcp-color-base);
			border-width: 2px;
			border-style: solid;
			border-color: var(--wcp-color-input);
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
		.checkbox .icon svg {
            display: none;
		}
        .checkbox.checked .icon{
            border-color: var(--wcp-color-base);
        }
		.checkbox.checked .icon svg{
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

		.checkbox.disabled{
			color: var(--wcp-color-disabled);
			cursor: default;
            pointer-events: none;
		}
		.checkbox.disabled .icon,
		.checkbox.disabled:hover .icon{
			color: var(--wcp-color-disabled);
			border-color: var(--wcp-color-disabled);
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","checked","size","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#checkbox").setAttribute("value",e)),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#checkbox").classList.add(e)),this.hasAttribute("checked")&&n.querySelector("#checkbox").classList.add("checked"),this.hasAttribute("disabled")&&n.querySelector("#checkbox").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#checkbox").classList.value="checkbox"}_event(){this.shadowRoot.querySelector("#checkbox").addEventListener("change",()=>{this.hasAttribute("disabled")||(this.hasAttribute("checked")?this.removeAttribute("checked"):this.setAttribute("checked",""),this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0})))})}};function Mp(t="",e,n){var r={ok:"ok",cancel:"cancel"};Object.assign(r,n);let i=document.createElement("w-modal");i.innerHTML=`
        <div style="display:flex;flex-direction: column; height:100%;">
            <div style="padding:10px; flex:1; display: flex; flex-direction: column; overflow-y: auto; border-bottom: 1px solid var(--wcp-color-disabled); word-break: break-word; ">
                ${t}
            </div>
            <div style="display: inline-flex; width: 100%; justify-content: end; height: 40px; padding-top:4px;">
                <w-btn id="cancel" type="text" style="flex:1;">${r.cancel}</w-btn>
                <w-btn id="ok" style="flex:1; margin-right:4px;">${r.ok}</w-btn>
            </div>
        </div>
        `,i.setAttribute("show",""),i.setAttribute("height","180px"),i.setAttribute("width","280px"),document.body.append(i),i.querySelector("#cancel").addEventListener("click",s=>{i.removeAttribute("show")}),i.querySelector("#ok").addEventListener("click",s=>{i.removeAttribute("show"),e()}),i.addEventListener("click",s=>{let o=setTimeout(()=>{i.hasAttribute("show")||i.remove(),clearTimeout(o)},1e3)})}customElements.define("w-checkbox",cu);class uu extends HTMLElement{_getStyle(){return`
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
            border-bottom: 1px solid rgba(191,191,191,.6);
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
            border-top: 1px solid rgba(191,191,191,.6);
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("width")&&(e=this.getAttribute("width"),n.querySelector("#wrap").style.width=e),this.hasAttribute("height")&&(e=this.getAttribute("height"),n.querySelector("#wrap").style.height=e),this.hasAttribute("show")&&n.querySelector("#dialog").classList.add("show")}_reset(){this.shadowRoot.querySelector("#dialog").classList.value="dialog"}_event(){this.shadowRoot.querySelector("#dialog").addEventListener("click",e=>{e.target.id=="dialog"&&this.removeAttribute("show")})}}customElements.define("w-dialog",uu);class du extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        .hide{
            display: none;
        }
        :host{
            display: inline-flex;
            user-select: none;
        }
        .heart{
            display: inline-flex;
            align-items: center;
            width: 100%;
            height: 100%;
            cursor: default;
        }
        .heart .heart-item{
           display: inline-flex;
           padding: 0 5px;
           cursor: pointer;
        }
        .heart .heart-item .icon,
        .heart .heart-item .icon-outline{
            width: 18px;
            height: 18px;
            color: var(--wcp-color-input);
            fill: currentColor;
            outline: 0px;
            transition: all 0.2s;
        }
        /* disabled */
        .heart.disabled .heart-item{
            cursor: default;
            pointer-events: none;
         }
        .heart.disabled .heart-item .icon{
            display: inline-flex;
            color: var(--wcp-color-disabled);
            cursor: default;
            pointer-events: none;
        }
        .heart.disabled .heart-item .icon-outline{
            display: none;
        }
        /* sm */
        .heart.sm .heart-item .icon,
        .heart.sm .heart-item .icon-outline{
            width: 16px;
            height: 16px;
        }
        /* lg */
        .heart.lg .heart-item .icon,
        .heart.lg .heart-item .icon-outline{
            width: 20px;
            height: 20px;
        }
        </style>
        `}_getTemplate(){let e="";for(let n=0;n<5;n++)e+=`
        <div class="heart-item">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
            <svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
        </div>
        `;return`
        <div id="heart" class="heart">
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="ratio" x1="0%"  x2="100%" >
                        <stop offset="0%" stop-color="var(--wcp-color-base)" />
                        <stop offset="0%" stop-color="var(--wcp-color-base)" />
                        <stop offset="0%" stop-color="var(--wcp-color-disabled)" />
                        <stop offset="100%" stop-color="var(--wcp-color-disabled)" />
                    </linearGradient>
                </defs>
            </svg>
            ${e}
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled","value","size"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n,r=this.shadowRoot;this.hasAttribute("disabled")?(r.querySelector("#heart").classList.add("disabled"),r.querySelectorAll("#heart .heart-item .icon").forEach(i=>{i.querySelector("path").removeAttribute("fill")})):(r.querySelectorAll("#heart .heart-item .icon").forEach(i=>{i.classList.add("hide")}),r.querySelectorAll("#heart .heart-item .icon-outline").forEach(i=>{i.classList.remove("hide")})),this.hasAttribute("value")&&(e=Number(this.getAttribute("value")),this.hasAttribute("disabled")?(0<=e&&e<=.2&&(n=e/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","url(#ratio)")),.2<e&&e<=.4&&(n=(e-.2)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","url(#ratio)")),.4<e&&e<=.6&&(n=(e-.4)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","url(#ratio)")),.6<e&&e<=.8&&(n=(e-.6)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","url(#ratio)")),.8<e&&e<=1&&(n=(e-.8)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[4].querySelector("path").setAttribute("fill","url(#ratio)"))):(0<e&&e<=.2&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide")),.2<e&&e<=.4&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide")),.4<e&&e<=.6&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide")),.6<e&&e<=.8&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[3].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[3].classList.add("hide")),.8<e&&e<=1&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[4].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[3].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[4].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[3].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[4].classList.add("hide")))),this.hasAttribute("size")&&(n=this.getAttribute("size"),r.querySelector("#heart").classList.add(n))}_reset(){this.shadowRoot.querySelector("#heart").classList.value="heart"}_event(){this.shadowRoot.querySelectorAll("#heart .heart-item").forEach((e,n)=>{e.setAttribute("index",n),e.addEventListener("click",r=>{var i;this.hasAttribute("disabled")||(this.setAttribute("value",i=(n+1)/5),this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0})))})})}}customElements.define("w-heart",du);class hu extends HTMLElement{_getStyle(){return`
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
        .input{
            position: relative;
            display: inline-flex;
            align-items: center;
			width: 100%;
			height: 100%;
			font-size: 14px;
			outline: none;
			border-width: 1px;
			border-style: solid;
			border-color: var(--wcp-color-input);
			border-radius: 4px;
			padding: 8px;
			background: none;
			color: currentcolor;
        }
		.input:focus{
			box-shadow: 0 0 2px var(--wcp-color-base);
			border-color: var(--wcp-color-base);
		}

		.input:disabled{
			border-color: var(--wcp-color-disabled);
			color: var(--wcp-color-disabled);
            -webkit-text-fill-color: var(--wcp-color-disabled);
            opacity: 1;
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
			border-color: var(--wcp-color-error);
		}
		.input.error:focus{
			box-shadow: 0 0 2px var(--wcp-color-error);
		}
		.input[type=range]{
			accent-color: var(--wcp-color-base);
			padding: 0;
    		border: none;
			box-shadow: none;
		}
        

        </style>
        `}_getTemplate(){return`
            <input type="text" class="input" id="input">
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","maxlength","min","max","step","type","placeholder","disabled","size","error"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#input").setAttribute("value",e),n.querySelector("#input").value=e),this.hasAttribute("maxlength")&&(e=this.getAttribute("maxlength"),n.querySelector("#input").setAttribute("maxlength",e)),this.hasAttribute("min")&&(e=this.getAttribute("min"),n.querySelector("#input").min=e),this.hasAttribute("max")&&(e=this.getAttribute("max"),n.querySelector("#input").max=e),this.hasAttribute("step")&&(e=this.getAttribute("step"),n.querySelector("#input").step=e),this.hasAttribute("type")&&(e=this.getAttribute("type"),n.querySelector("#input").type=e),this.hasAttribute("placeholder")&&(e=this.getAttribute("placeholder"),n.querySelector("#input").placeholder=e),this.hasAttribute("disabled")?n.querySelector("#input").setAttribute("disabled",""):n.querySelector("#input").removeAttribute("disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#input").classList.add(e)),this.hasAttribute("error")&&n.querySelector("#input").classList.add("error")}_reset(){this.shadowRoot.querySelector("#input").classList.value="input"}_event(){this.shadowRoot.querySelector("#input").addEventListener("input",e=>{e=e.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-input",hu);class pu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.defaultImg=null,this.lazyArr=[],this.observer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot}_event(){let e=this.shadowRoot;e.addEventListener("slotchange",n=>{this.lazyArr.length!=0&&this.lazyArr.forEach(r=>{this.observer.unobserve(r)}),this.lazyArr.length=0,e.querySelector("#slot").assignedElements().map(r=>{this.lazyArr.push(...Array.from(r.querySelectorAll("img"))),this.lazyArr.push(...Array.from(r.querySelectorAll("video"))),this.lazyArr.push(...Array.from(r.querySelectorAll("w-player")))}),this.lazyArr.forEach(r=>{this.observer.observe(r)})}),this.observer=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&((r=r.target).hasAttribute("lazy-src")&&r.setAttribute("src",r.getAttribute("lazy-src")),this.observer.unobserve(r))})})}}customElements.define("w-lazy-loading",pu);class gu extends HTMLElement{_getStyle(){return`
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
        }
        .menu.show{
            display: inline-flex;
        }
     
        </style>
        `}_getTemplate(){return`
        <div id="menu" class="menu">
            <slot></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["show"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("show")&&e.querySelector("#menu").classList.add("show")}_reset(){this.shadowRoot.querySelector("#menu").classList.value="menu"}_event(){this.shadowRoot}}customElements.define("w-menu",gu);class fu extends HTMLElement{_getStyle(){return`
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
            color: var(--wcp-color-disabled);
            cursor: default;
            pointer-events: none;
        }

        </style>
        `}_getTemplate(){return`
        <div id="menu-item" class="menu-item">
            <slot></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("disabled")&&e.querySelector("#menu-item").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#menu-item").classList.value="menu-item"}_event(){this.shadowRoot}}customElements.define("w-menu-item",fu);class bu extends HTMLElement{_getStyle(){return`
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
            display:flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            z-index: -999;
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("width")&&(e=this.getAttribute("width"),n.querySelector("#wrap").style.width=e),this.hasAttribute("height")&&(e=this.getAttribute("height"),n.querySelector("#wrap").style.height=e),this.hasAttribute("show")&&n.querySelector("#modal").classList.add("show")}_reset(){this.shadowRoot.querySelector("#modal").classList.value="modal"}_event(){this.shadowRoot.querySelector("#modal").addEventListener("click",e=>{e.target.id=="modal"&&this.removeAttribute("show")})}}customElements.define("w-modal",bu);class mu extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
        }
        .msg{
            position:fixed;
            left: 50%;
            opacity: 0;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            color: #fff;
            background-color: var(--wcp-color-base);
            border-width: 1px;
            border-style: solid;
            border-color: transparent;
            border-radius: 6px;
            font-size: 14px;
            line-height: 1.5;
            transition: all 0.2s;
            z-index: 9999;
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
            color: var(--wcp-color-base);
            background-color: transparent;
            border-color: var(--wcp-color-base);
        }

        /* success */
        .success{
            background-color: var(--wcp-color-success);
        }
        .success.outline{
            color: var(--wcp-color-success);
            background-color: transparent;
            border-color: var(--wcp-color-success);
        }
        
        /* error */
        .error{
            background-color: var(--wcp-color-error);
        }
        .error.outline{
            color: var(--wcp-color-error);
            background-color: transparent;
            border-color: var(--wcp-color-error);
        }

        /* warning */
        .warning{
            background-color: var(--wcp-color-warning);
        }
        .warning.outline{
            color: var(--wcp-color-warning);
            background-color: transparent;
            border-color: var(--wcp-color-warning);
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
        `}constructor(){super(),this.timer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","position"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("type")&&(e=this.getAttribute("type"),n.querySelector("#msg").classList.add(e)),this.hasAttribute("position")?(e=this.getAttribute("position"),n.querySelector("#msg").classList.add(e)):n.querySelector("#msg").classList.add("top")}_reset(){this.shadowRoot.querySelector("#msg").classList.value="msg"}show(e,n=""){let r=this.shadowRoot;switch(this._setOptions(),r.querySelector("#content").innerHTML=e,n&&r.querySelector("#msg").classList.add(n),n){case"success":r.querySelector("#icon").innerHTML=r.querySelector("#icon-success").innerHTML;break;case"error":r.querySelector("#icon").innerHTML=r.querySelector("#icon-error").innerHTML;break;case"warning":r.querySelector("#icon").innerHTML=r.querySelector("#icon-warning").innerHTML;break;default:r.querySelector("#icon").innerHTML=r.querySelector("#icon-default").innerHTML}r.querySelector("#msg").classList.add("show");let i=2e3;this.hasAttribute("delay")&&(i=+this.getAttribute("delay")),this.timer||(this.timer=setTimeout(()=>{r.querySelector("#msg").classList.remove("show"),clearTimeout(this.timer),this.timer=null},i))}static init(r){var n={},r=(r&&Object.assign(n,r),document.createElement("w-msg"));return n.type&&r.setAttribute("type",n.type),n.position&&r.setAttribute("position",n.position),n.delay&&r.setAttribute("delay",n.delay),document.body.append(r),r}}customElements.define("w-msg",mu);class _u extends HTMLElement{_getStyle(){return`
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI',Arial,'Microsoft Yahei',sans-serif;
            }
			:host{
				display: inline-flex;
                background-color: #000;
			}
            .web-player{
                color: #fff;
                width: 100%;
                height: 100%;
                position: relative;
                cursor: pointer;
                user-select: none;
                outline: none;
            }
			.web-player.full{
                background-color: #000;
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
                background-color: var(--wcp-color-base);
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
        `}constructor(){super(),this._drag=!1,this._focus=!1,this.accept=[".mp4",".webm",".ogg",".mp3"]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["src","poster"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var e=this.shadowRoot,n=this.hasAttribute("src")?this.getAttribute("src"):"",r=this.hasAttribute("poster")?this.getAttribute("poster"):"";this._reset(),e.querySelector("#video").src=n,e.querySelector("#video").poster=r}_event(){let e=this.shadowRoot;e.querySelector("#control-main").addEventListener("click",n=>{e.querySelector("#video").paused?this.play():this.pause()}),e.querySelector("#control-main").addEventListener("dblclick",n=>{this._fullscreenHandler(n)}),e.querySelector("#video").addEventListener("loadedmetadata",n=>{e.querySelector("#time-total").innerHTML=this._timeFormat(e.querySelector("#video").duration)}),e.querySelector("#video").addEventListener("error",n=>{}),e.querySelector("#video").addEventListener("timeupdate",n=>{e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime);var r=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%";e.querySelector("#timeline").style.width=r}),e.querySelector("#video").addEventListener("ended",n=>{e.querySelector("#video").pause(),e.querySelector(".icon-play").classList.remove("hide")}),e.querySelector("#progress").addEventListener("pointerdown",n=>{e.querySelector("#progress").setPointerCapture(n.pointerId),this._drag=!0,e.querySelector("#timeline").classList.add("show-after"),n=this._getRatio(n.pageX),e.querySelector("#video").currentTime=e.querySelector("#video").duration*n}),e.querySelector("#progress").addEventListener("pointermove",n=>{this._drag&&(n=this._getRatio(n.pageX),e.querySelector("#timeline").style.width=100*n+"%",n=e.querySelector("#video").duration*n||0,e.querySelector("#time-cur").innerHTML=this._timeFormat(n),e.querySelector("#video").currentTime=n)}),e.querySelector("#progress").addEventListener("pointerup",n=>{this._drag=!1,e.querySelector("#timeline").classList.remove("show-after")}),document.addEventListener("keydown",n=>{var r;this._focus&&(n.preventDefault(),n.key=="ArrowLeft"?(e.querySelector("#video").currentTime-=10,e.querySelector("#video").currentTime<0&&(e.querySelector("#video").currentTime=0),e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime),r=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%",e.querySelector("#timeline").style.width=r):n.key=="ArrowRight"?(e.querySelector("#video").currentTime+=10,e.querySelector("#video").currentTime>e.querySelector("#video").duration&&(e.querySelector("#video").currentTime=e.querySelector("#video").duration),e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime),r=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%",e.querySelector("#timeline").style.width=r):n.key==" "&&(e.querySelector("#video").paused?this.play():this.pause()))}),e.querySelector("#web-player").addEventListener("contextmenu",n=>{n.preventDefault(),this._showContextmenu(n)}),e.querySelector("#web-player").addEventListener("click",n=>{this._hideContextmenu()}),e.querySelector("#openfile").addEventListener("click",n=>{e.querySelector("#file").dispatchEvent(new MouseEvent("click"))}),e.querySelector("#file").addEventListener("change",n=>{var r=e.querySelector("#file").files[0];let i=!1;for(let s=0;s<this.accept.length;s++)if(r.name.endsWith(this.accept[s])){i=!0;break}i?(this._reset(),e.querySelector("#video").src=URL.createObjectURL(r),this.play()):alert("file not accept")}),e.querySelector("#menu-list-item-github").addEventListener("click",n=>{window.open("https://github.com/gaojie0910","_blank")}),e.querySelector("#web-player").addEventListener("focus",n=>{this._focus=!0}),e.querySelector("#web-player").addEventListener("blur",n=>{this._focus=!1,this._hideContextmenu()})}play(){var e=this.shadowRoot;e.querySelector(".icon-play").classList.add("hide"),e.querySelector("#video").play()}pause(){var e=this.shadowRoot;e.querySelector(".icon-play").classList.remove("hide"),e.querySelector("#video").pause()}_fullscreenHandler(e){var n=this.shadowRoot;navigator.userAgent.includes("Mobile")?n.querySelector("#web-player").classList.toggle("full"):document.fullscreenElement?document.exitFullscreen():n.querySelector("#web-player").requestFullscreen()}_reset(){var e=this.shadowRoot;e.querySelector("#video").src="",e.querySelector("#video").poster="",e.querySelector("#timeline").style.width=0,e.querySelector("#time-total").innerHTML=this._timeFormat(0),e.querySelector("#time-cur").innerHTML=this._timeFormat(0),e.querySelector("#video").pause(),e.querySelector(".icon-play").classList.remove("hide")}_hideContextmenu(){this.shadowRoot.querySelector("#contextmenu").classList.add("hide")}_showContextmenu(e){var n=this.shadowRoot;n.querySelector("#contextmenu").classList.remove("hide"),n.querySelector("#contextmenu").style.left=e.pageX-n.querySelector("#web-player").getBoundingClientRect().left-document.documentElement.scrollLeft+"px",n.querySelector("#contextmenu").style.top=e.pageY-n.querySelector("#web-player").getBoundingClientRect().top-document.documentElement.scrollTop+"px"}_getRatio(r){var n=this.shadowRoot,r=(r-(n.querySelector("#progress").getBoundingClientRect().left-document.documentElement.scrollLeft))/n.querySelector("#progress").scrollWidth;return(r=1<r?1:r)<0?0:r}_timeFormat(e){e=parseInt(e,10);let n=Math.floor(e/3600),r=Math.floor((e-3600*n)/60),i=e-3600*n-60*r;return n<10&&(n="0"+n),r<10&&(r="0"+r),i<10&&(i="0"+i),n+":"+r+":"+i}}customElements.define("w-player",_u);class Eu extends HTMLElement{_getStyle(){return`
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
			color: var(--wcp-color-base);
			border-width: 2px;
			border-style: solid;
			border-color: var(--wcp-color-input);
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

        .icon svg{
            display:none;
        }
        .radio.checked .icon{
			border-color: var(--wcp-color-base);
        }
		.radio.checked .icon svg{
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
        .radio.disabled{
			color: var(--wcp-color-disabled);
            cursor: default;
            pointer-events: none;
		}
		.radio.disabled .icon{
			color: var(--wcp-color-disabled);
			border-color: var(--wcp-color-disabled);
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["size","checked","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("checked")&&n.querySelector("#radio").classList.add("checked"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#radio").classList.add(e)),this.hasAttribute("disabled")&&n.querySelector("#radio").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#radio").classList.value="radio"}_event(){this.shadowRoot}}customElements.define("w-radio",Eu);class vu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let e=this.getAttribute("value");Array.from(this.children).forEach(n=>{e==n.getAttribute("value")?n.setAttribute("checked",""):n.removeAttribute("checked")})}}_reset(){this.shadowRoot}_event(){this.shadowRoot.addEventListener("click",e=>{this.hasAttribute("disabled")||e.target.tagName!="W-RADIO"||e.target.hasAttribute("disabled")||e.target.hasAttribute("checked")||(Array.from(this.children).forEach(n=>{n.removeAttribute("checked")}),e.target.setAttribute("checked",""),e=e.target.hasAttribute("value")?e.target.getAttribute("value"):null,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-radios",vu);class yu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.observer=null,this.lazyArr=[]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot}_event(){var e=this.shadowRoot;this.observer=new IntersectionObserver(n=>{n[0].isIntersecting&&this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0}))}),this.observer.observe(e.querySelector("#loading"))}}customElements.define("w-scroll-loading",yu);class wu extends HTMLElement{_getStyle(){return`
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
			border-color: var(--wcp-color-input);
			border-radius: 4px;
			padding: 8px;
			background: none;
			color: currentcolor;
            cursor: pointer;
        }
        .select:focus{
            outline: 1px solid var(--wcp-color-base);
			border-color: var(--wcp-color-base);
        }
        .select:disabled{
			border-color: var(--wcp-color-disabled);
			color: var(--wcp-color-disabled);
            cursor: default;
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","disabled","size"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let e=this.shadowRoot;var n;e.querySelector("#select").innerHTML="",e.querySelector("#slot").assignedElements().forEach(r=>{e.querySelector("#select").appendChild(r.cloneNode(!0))}),this.hasAttribute("value")&&(n=this.getAttribute("value"),e.querySelector("#select").value=n),this.hasAttribute("disabled")?e.querySelector("#select").setAttribute("disabled",""):e.querySelector("#select").removeAttribute("disabled"),this.hasAttribute("size")&&(n=this.getAttribute("size"),e.querySelector("#select").classList.add(n))}_reset(){this.shadowRoot.querySelector("#select").classList.value="select"}_event(){this.shadowRoot.querySelector("#select").addEventListener("change",e=>{e=e.target.value,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-select",wu);class Su extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
            width: 100%;
            height: 100%;
            user-select: none;
            overflow: hidden;
        }
        .slide{
            display: inline-flex;
            width: 100%;
            height: 100%;
            position: relative;
		}

        .slide .slide-wrap{
            display: inline-flex;
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            touch-action: none;
        }
        
        .slide.vertical .slide-wrap{
            flex-direction: column;
        }

        .slide .page{
            position: absolute;
            right: 16px;
            bottom: 16px;
            background-color: rgba(0,0,0,0.5);
            color: #fff;
            border-radius: 4px;
            padding: 2px 5px;
            font-size: 12px;
        }
       
        
     
        </style>
        `}_getTemplate(){return`
        <div id="slide" class="slide">
            <slot class="slide-wrap" id="slide-wrap">
            </slot>
            <div id="page" class="page">${this.cur} / ${this.total}</div>
        </div>
        `}constructor(){super(),this.cur=1,this.total=1,this.timer=null,this.pre=0,this.distance=0,this.isMove=!1,this.vetical=!1,this.width=0,this.height=0,this.startTime=Date.now()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["vertical","auto","pagehide"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let e=this.shadowRoot;this.hasAttribute("vertical")?(e.querySelector("#slide").classList.add("vertical"),this.vetical=!0):this.vetical=!1,this.hasAttribute("pagehide")?e.querySelector("#page").setAttribute("hidden",""):e.querySelector("#page").removeAttribute("hidden"),this.hasAttribute("auto")?this.total!=1&&(this.timer=setInterval(()=>{this.cur++,this.cur>this.total&&(this.cur=1),this.appendChild(this.firstElementChild.cloneNode(!0)),this.hasAttribute("vertical")?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},300),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))},3e3)):(clearInterval(this.timer),this.timer=null)}_reset(){var e=this.shadowRoot;e.querySelector("#slide").classList.value="slide",this.width=+getComputedStyle(this).width.split("px")[0],this.height=+getComputedStyle(this).height.split("px")[0],this.cur=1,this.total=e.querySelector("#slide-wrap").assignedElements().length,e.querySelector("#page").innerHTML=this.cur+"/"+this.total}_event(){let e=this.shadowRoot;this.total!=1&&(e.querySelector("#slide-wrap").addEventListener("pointerdown",n=>{this.isMove=!0,e.querySelector("#slide-wrap").assignedElements().length>this.total?this.isMove=!1:(clearInterval(this.timer),this.timer=null,this.distance=0,this.startTime=Date.now(),this.pre=this._getPosition(n),this.insertAdjacentElement("afterbegin",this.lastElementChild.cloneNode(!0)),this.vetical?e.querySelector("#slide-wrap").scrollTo(0,this.height):e.querySelector("#slide-wrap").scrollTo(this.width,0))}),e.querySelector("#slide-wrap").addEventListener("pointermove",n=>{this.isMove&&(e.querySelector("#slide-wrap").setPointerCapture(n.pointerId),this.distance=this._getPosition(n)-this.pre,this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:-this.distance+this.height,behavior:"auto"}):e.querySelector("#slide-wrap").scroll({left:-this.distance+this.width,top:0,behavior:"auto"}))}),e.querySelector("#slide-wrap").addEventListener("pointerup",n=>{if(this.isMove){this.isMove=!1;var r=this.distance/(Date.now()-this.startTime);let i=this.width/2;this.vetical&&(i=this.height/2),this.distance<-i||r<-.5?(this.cur==this.total?this.cur=1:this.cur++,this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:2*this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:2*this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),this.insertAdjacentElement("beforeend",this.firstElementChild.cloneNode(!0)),this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))):this.distance>i||.5<r?(this.cur==1?this.cur=this.total:this.cur--,e.querySelector("#slide-wrap").scroll({left:0,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.lastElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))):(-i<this.distance&&this.distance<i||-.5<r&&r<.5)&&(this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200)),this.hasAttribute("auto")&&(clearInterval(this.timer),this.timer=setInterval(()=>{this.cur++,this.cur>this.total&&(this.cur=1),this.appendChild(this.firstElementChild.cloneNode(!0)),this.hasAttribute("vertical")?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},300),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))},3e3))}}))}_getPosition(e){var n,r=this.shadowRoot;return this.vetical?(n=r.querySelector("#slide").getBoundingClientRect().top-document.documentElement.scrollTop,e.pageY-n):(n=r.querySelector("#slide").getBoundingClientRect().left-document.documentElement.scrollLeft,e.pageX-n)}}customElements.define("w-slide",Su);class Au extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
            width: 100%;
            height: 100%;
            flex-shrink: 0;
        }
        .slide-item{
			display: inline-flex;
			position: relative;
            width: 100%;
            height: 100%;
		}
        .slide-item .slot{
            width: 100%;
            height: 100%;
        }
       
        </style>
        `}_getTemplate(){return`
        <div id="slide-item" class="slide-item">
            <slot id="slot"></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot.querySelector("#slide-item").classList.value="slide-item"}_event(){this.shadowRoot}}customElements.define("w-slide-item",Au);class xu extends HTMLElement{_getStyle(){return`
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Arial, 'Microsoft Yahei', sans-serif;
            color: rgba(0, 0, 0, 1);
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["columns","hover","sticky","bordered","selected"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("columns")&&(e=this.getAttribute("columns"),n.querySelector("#row").style.gridTemplateColumns=e),this.hasAttribute("hover")&&n.querySelector("#row").classList.add("hover"),this.hasAttribute("sticky")&&n.querySelector("#row").classList.add("sticky"),this.hasAttribute("bordered")&&n.querySelector("#row").classList.add("bordered"),this.hasAttribute("selected")&&n.querySelector("#row").classList.add("selected")}_reset(){this.shadowRoot.querySelector("#row").classList.value="row"}_event(){this.shadowRoot}}customElements.define("w-table-row",xu);class Nu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["col","row"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var e;this._reset(),this.shadowRoot,this.hasAttribute("col")&&(e=this.getAttribute("col"),this.style.gridColumnStart="span "+e),this.hasAttribute("row")&&(e=this.getAttribute("row"),this.style.gridRowStart="span "+e)}_reset(){this.shadowRoot.querySelector("#item").classList.value="item"}_event(){this.shadowRoot}}customElements.define("w-table-item",Nu);class Tu extends HTMLElement{_getStyle(){return`
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
            color: var(--wcp-color-base);
        }
        a:hover{
            color: var(--wcp-color-base80percent);
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
        `}constructor(){super(),this.data=null,this.column=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["data","column","height","sticky"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;if(this.hasAttribute("height")?(n=this.getAttribute("height"),e.querySelector("#table-container").style.height=n):e.querySelector("#table-container").style.height="",this.hasAttribute("sticky")?e.querySelector("#header").setAttribute("sticky",""):e.querySelector("#header").removeAttribute("sticky"),this.hasAttribute("column")){var n=JSON.parse(this.getAttribute("column"));this.column=n;let r="";r+=`<w-table-row columns="${this._getColumns()}" style="background-color:${getComputedStyle(this).backgroundColor}">`,this.column.forEach(i=>{r+=`
                    <w-table-item>${i.label}</w-table-item>
                `}),r+="</w-table-row>",e.querySelector("#header").innerHTML=r}if(this.hasAttribute("data")){n=JSON.parse(this.getAttribute("data")),this.data=n;let r="";this.data.forEach(i=>{r+=`<w-table-row hover bordered columns="${this._getColumns()}">`,Object.values(i).forEach(s=>{r+=`
                        <w-table-item>${s}</w-table-item>
                    `}),r+="</w-table-row>"}),e.querySelector("#body").innerHTML=r}}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_event(){this.shadowRoot}_getColumns(){let e="";return this.column&&this.column.forEach(n=>{n.width?e+=n.width+" ":e+="1fr "}),e}}customElements.define("w-table",Tu);class Ru extends HTMLElement{_getStyle(){return`
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
			color: var(--wcp-color-disabled);
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
        `}constructor(){super(),this.url=null,this.auth=null,this.pagination={cur:1,count:1,total:1}}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._initData(),this._event()}static get observedAttributes(){return["column","height","sticky","url","count","auth"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("column")&&e.querySelector("#table").setAttribute("column",this.getAttribute("column")),this.hasAttribute("height")?e.querySelector("#table").setAttribute("height",this.getAttribute("height")):e.querySelector("#table").removeAttribute("height"),this.hasAttribute("sticky")?e.querySelector("#table").setAttribute("sticky",""):e.querySelector("#table").removeAttribute("sticky"),this.hasAttribute("url")?this.url=this.getAttribute("url"):this.url=null,this.hasAttribute("count")?this.pagination.count=+this.getAttribute("count"):this.pagination.count=1,this.hasAttribute("auth")&&(this.auth=this.getAttribute("auth"))}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_initData(){var e=this.shadowRoot;e.querySelector("#cur").innerHTML=this.pagination.cur,e.querySelector("#pre").classList.add("disabled"),e.querySelector("#next").classList.add("disabled"),this._fetchData()}_event(){let e=this.shadowRoot;e.querySelector("#pre").addEventListener("click",n=>{e.querySelector("#pre").classList.contains("disabled")||(e.querySelector("#next").classList.remove("disabled"),this.pagination.cur--,e.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur<=1&&e.querySelector("#pre").classList.add("disabled"),this._fetchData())}),e.querySelector("#next").addEventListener("click",n=>{e.querySelector("#next").classList.contains("disabled")||(e.querySelector("#pre").classList.remove("disabled"),this.pagination.cur++,e.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur>=this.pagination.total&&e.querySelector("#next").classList.add("disabled"),this._fetchData())}),e.querySelector("#cur").addEventListener("keypress",n=>{if(n.key=="Enter"){console.log("Enter"),e.querySelector("#cur").blur(),this.pagination.total!=1&&(e.querySelector("#pre").classList.remove("disabled"),e.querySelector("#next").classList.remove("disabled"));let r=+e.querySelector("#cur").innerHTML;r<=1&&(r=1,e.querySelector("#pre").classList.add("disabled")),r>=this.pagination.total&&(r=this.pagination.total,e.querySelector("#next").classList.add("disabled")),e.querySelector("#cur").innerHTML=r,this.pagination.cur!=r&&(this.pagination.cur=r,this._fetchData())}else if(!"1234567890".includes(n.key))return n.preventDefault(),n.defaultPrevented})}_fetchData(){this.shadowRoot;var e={headers:{"Content-Type":"application/json;charset=utf-8",Authorization:this.auth},method:"get"};fetch(`${this.url}?cur=${this.pagination.cur}&count=`+this.pagination.count,e).then(n=>n.json()).then(n=>{this.dispatchEvent(new CustomEvent("fetchData",{detail:{data:n},bubbles:!0}))}).catch(n=>{console.log(n)})}setData(e){var n=this.shadowRoot;n.querySelector("#table").setAttribute("data",JSON.stringify(e.data)),this.pagination.total=e.total||1,n.querySelector("#total").innerHTML=this.pagination.total,this.pagination.cur>=this.pagination.total?n.querySelector("#next").classList.add("disabled"):n.querySelector("#next").classList.remove("disabled")}resetTableData(){this.pagination.cur=1,this._initData()}}customElements.define("w-table-pagination",Ru);class Ou extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
            user-select: none;
        }
        .tab{
            display:inline-flex;
            width: 100%;
            padding: 5px 0;
            color: var(--wcp-color-base);
            font-size: 14px;
            align-items: center;
            justify-content: center;
            outline: 0px;
            cursor: pointer;
            z-index: 9;
        }
        .tab .tab-wrap{
            padding: 0 10px 5px 10px;
            border-bottom: 2px solid transparent;
        }
        .tab:not(.active):hover{
            color: var(--wcp-color-base80percent);
        }
        .tab.active .tab-wrap{
            border-bottom: 2px solid var(--wcp-color-base);
        }
        /* disabled */
        .tab.disabled{
            color: var(--wcp-color-disabled);
            pointer-events: none;
        }

        </style>
        `}_getTemplate(){return`
        <div id="tab" class="tab">
            <div class="tab-wrap">
                <slot></slot>
            </div>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","active","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#tab").setAttribute("value",e)),this.hasAttribute("active")&&n.querySelector("#tab").classList.add("active"),this.hasAttribute("disabled")&&n.querySelector("#tab").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#tab").classList.value="tab"}_event(){this.shadowRoot}}customElements.define("w-tab",Ou);class Cu extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            user-select: none;
        }
        .tabs{
            display: flex;
        }

     
        </style>
        `}_getTemplate(){return`
        <div id="tabs" class="tabs">
            <slot></slot>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let e=this.getAttribute("value");Array.from(this.children).forEach(n=>{n.removeAttribute("active"),n.hasAttribute("value")&&n.getAttribute("value")==e&&n.setAttribute("active","")})}}_reset(){this.shadowRoot.querySelector("#tabs").classList.value="tabs"}_event(){this.shadowRoot.querySelector("#tabs").addEventListener("click",e=>{e.target.tagName!="W-TAB"||e.target.hasAttribute("disabled")||e.target.getAttribute("value")==this.getAttribute("value")||(e=e.target.hasAttribute("value")?e.target.getAttribute("value"):null,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-tabs",Cu);class ku extends HTMLElement{_getStyle(){return`
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
			border-color: var(--wcp-color-input);
			border-radius: 4px;
			padding: 8px;
			background: none;
			color: currentcolor;
			resize:none;
        }
		.textarea:focus{
			box-shadow: 0 0 2px var(--wcp-color-base);
			border-color: var(--wcp-color-base);
		}

		.textarea:disabled{
			border-color: var(--wcp-color-disabled);
			color: var(--wcp-color-disabled);
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
			border-color: var(--wcp-color-error);
		}
		
		.textarea.error:focus{
			box-shadow: 0 0 2px var(--wcp-color-error);
		}

        </style>
        `}_getTemplate(){return`
        <div id="root" class="root">
            <textarea type="text" class="textarea" id="textarea">
		</div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","placeholder","disabled","size","error"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#textarea").value=e),this.hasAttribute("placeholder")&&(e=this.getAttribute("placeholder"),n.querySelector("#textarea").placeholder=e),this.hasAttribute("disabled")&&(n.querySelector("#textarea").disabled="disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#textarea").classList.add(e)),this.hasAttribute("error")&&n.querySelector("#textarea").classList.add("error")}_reset(){this.shadowRoot.querySelector("#textarea").classList.value="textarea"}_event(){this.shadowRoot.querySelector("#textarea").addEventListener("input",e=>{e=e.target.value,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-textarea",ku);class Mu extends HTMLElement{_getStyle(){return`
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
        }
        .toggle{
            display: inline-flex;
            align-items: center;
            cursor: pointer;
			font-size: 14px;
			padding: 2px 11px;
			background-color: var(--wcp-color-input);
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
			background-color: var(--wcp-color-base)
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
			opacity: .6;
		}
        

        </style>
        `}_getTemplate(){return`
        <div id="toggle" class="toggle">
			<span class="icon"></span>
		</div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["on","size","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#toggle").classList.add(e)),this.hasAttribute("on")&&n.querySelector("#toggle").classList.add("on"),this.hasAttribute("disabled")&&n.querySelector("#toggle").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#toggle").classList.value="toggle"}_event(){this.shadowRoot.querySelector("#toggle").addEventListener("click",()=>{var e;this.hasAttribute("disabled")||(e="",e=this.hasAttribute("on")?(this.removeAttribute("on"),""):(this.setAttribute("on",""),"on"),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-toggle",Mu);class Lu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["url","name","multiple","accept","auth","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("url")?e.querySelector("#file").setAttribute("url",this.getAttribute("url")):e.querySelector("#file").setAttribute("url",""),this.hasAttribute("name")?e.querySelector("#file").setAttribute("name",this.getAttribute("name")):e.querySelector("#file").setAttribute("name","file"),this.hasAttribute("multiple")?e.querySelector("#file").setAttribute("multiple",""):e.querySelector("#file").removeAttribute("multiple"),this.hasAttribute("accept")?e.querySelector("#file").setAttribute("accept",this.getAttribute("accept")):e.querySelector("#file").removeAttribute("accept"),this.hasAttribute("auth")?e.querySelector("#file").setAttribute("auth",this.getAttribute("auth")):e.querySelector("#file").removeAttribute("auth"),this.hasAttribute("disabled")?e.querySelector("#file").setAttribute("disabled",""):e.querySelector("#file").removeAttribute("disabled")}_reset(){this.shadowRoot.querySelector("#file").classList.value="file"}_event(){let e=this.shadowRoot;e.addEventListener("click",n=>{e.querySelector("#file").dispatchEvent(new PointerEvent("click"))}),e.querySelector("#file").addEventListener("change",async n=>{try{var r=await fetch(e.querySelector("#file").getAttribute("url"),{headers:{Authorization:e.querySelector("#file").getAttribute("auth")},method:"post",cors:"cors",body:new FormData(e.querySelector("#form"))}),i=await r.json();this.dispatchEvent(new CustomEvent("change",{detail:{value:[...e.querySelector("#file").files],response:r,data:i},bubbles:!0}))}catch(s){this.dispatchEvent(new CustomEvent("change",{detail:{value:[...e.querySelector("#file").files],response:s,data:{msg:"error"}},bubbles:!0}))}e.querySelector("#file").value=""})}}customElements.define("w-upload",Lu);function Iu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ca(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const n=t[e],r=typeof n;(r==="object"||r==="function")&&!Object.isFrozen(n)&&ca(n)}),t}class ss{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function ua(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function it(t,...e){const n=Object.create(null);for(const r in t)n[r]=t[r];return e.forEach(function(r){for(const i in r)n[i]=r[i]}),n}const Du="</span>",os=t=>!!t.scope,qu=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const n=t.split(".");return[`${e}${n.shift()}`,...n.map((r,i)=>`${r}${"_".repeat(i+1)}`)].join(" ")}return`${e}${t}`};class Pu{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=ua(e)}openNode(e){if(!os(e))return;const n=qu(e.scope,{prefix:this.classPrefix});this.span(n)}closeNode(e){os(e)&&(this.buffer+=Du)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const as=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class vi{constructor(){this.rootNode=as(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n=as({scope:e});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return typeof n=="string"?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(r=>this._walk(e,r)),e.closeNode(n)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(n=>typeof n=="string")?e.children=[e.children.join("")]:e.children.forEach(n=>{vi._collapse(n)}))}}class Bu extends vi{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,n){const r=e.root;n&&(r.scope=`language:${n}`),this.add(r)}toHTML(){return new Pu(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function tn(t){return t?typeof t=="string"?t:t.source:null}function da(t){return vt("(?=",t,")")}function Uu(t){return vt("(?:",t,")*")}function zu(t){return vt("(?:",t,")?")}function vt(...t){return t.map(n=>tn(n)).join("")}function Hu(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function yi(...t){return"("+(Hu(t).capture?"":"?:")+t.map(r=>tn(r)).join("|")+")"}function ha(t){return new RegExp(t.toString()+"|").exec("").length-1}function Fu(t,e){const n=t&&t.exec(e);return n&&n.index===0}const $u=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function wi(t,{joinWith:e}){let n=0;return t.map(r=>{n+=1;const i=n;let s=tn(r),o="";for(;s.length>0;){const a=$u.exec(s);if(!a){o+=s;break}o+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+i):(o+=a[0],a[0]==="("&&n++)}return o}).map(r=>`(${r})`).join(e)}const Ku=/\b\B/,pa="[a-zA-Z]\\w*",Si="[a-zA-Z_]\\w*",ga="\\b\\d+(\\.\\d+)?",fa="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ba="\\b(0b[01]+)",Gu="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Wu=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=vt(e,/.*\b/,t.binary,/\b.*/)),it({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(n,r)=>{n.index!==0&&r.ignoreMatch()}},t)},nn={begin:"\\\\[\\s\\S]",relevance:0},Yu={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[nn]},Zu={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[nn]},Vu={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Fn=function(t,e,n={}){const r=it({scope:"comment",begin:t,end:e,contains:[]},n);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=yi("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:vt(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},Xu=Fn("//","$"),Qu=Fn("/\\*","\\*/"),Ju=Fn("#","$"),ju={scope:"number",begin:ga,relevance:0},ed={scope:"number",begin:fa,relevance:0},td={scope:"number",begin:ba,relevance:0},nd={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[nn,{begin:/\[/,end:/\]/,relevance:0,contains:[nn]}]},rd={scope:"title",begin:pa,relevance:0},id={scope:"title",begin:Si,relevance:0},sd={begin:"\\.\\s*"+Si,relevance:0},od=function(t){return Object.assign(t,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})};var pn=Object.freeze({__proto__:null,APOS_STRING_MODE:Yu,BACKSLASH_ESCAPE:nn,BINARY_NUMBER_MODE:td,BINARY_NUMBER_RE:ba,COMMENT:Fn,C_BLOCK_COMMENT_MODE:Qu,C_LINE_COMMENT_MODE:Xu,C_NUMBER_MODE:ed,C_NUMBER_RE:fa,END_SAME_AS_BEGIN:od,HASH_COMMENT_MODE:Ju,IDENT_RE:pa,MATCH_NOTHING_RE:Ku,METHOD_GUARD:sd,NUMBER_MODE:ju,NUMBER_RE:ga,PHRASAL_WORDS_MODE:Vu,QUOTE_STRING_MODE:Zu,REGEXP_MODE:nd,RE_STARTERS_RE:Gu,SHEBANG:Wu,TITLE_MODE:rd,UNDERSCORE_IDENT_RE:Si,UNDERSCORE_TITLE_MODE:id});function ad(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function ld(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function cd(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=ad,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function ud(t,e){Array.isArray(t.illegal)&&(t.illegal=yi(...t.illegal))}function dd(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function hd(t,e){t.relevance===void 0&&(t.relevance=1)}const pd=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},t);Object.keys(t).forEach(r=>{delete t[r]}),t.keywords=n.keywords,t.begin=vt(n.beforeMatch,da(n.begin)),t.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},t.relevance=0,delete n.beforeMatch},gd=["of","and","for","in","not","or","if","then","parent","list","value"],fd="keyword";function ma(t,e,n=fd){const r=Object.create(null);return typeof t=="string"?i(n,t.split(" ")):Array.isArray(t)?i(n,t):Object.keys(t).forEach(function(s){Object.assign(r,ma(t[s],e,s))}),r;function i(s,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const l=a.split("|");r[l[0]]=[s,bd(l[0],l[1])]})}}function bd(t,e){return e?Number(e):md(t)?0:1}function md(t){return gd.includes(t.toLowerCase())}const ls={},bt=t=>{console.error(t)},cs=(t,...e)=>{console.log(`WARN: ${t}`,...e)},St=(t,e)=>{ls[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),ls[`${t}/${e}`]=!0)},Tn=new Error;function _a(t,e,{key:n}){let r=0;const i=t[n],s={},o={};for(let a=1;a<=e.length;a++)o[a+r]=i[a],s[a+r]=!0,r+=ha(e[a-1]);t[n]=o,t[n]._emit=s,t[n]._multi=!0}function _d(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw bt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Tn;if(typeof t.beginScope!="object"||t.beginScope===null)throw bt("beginScope must be object"),Tn;_a(t,t.begin,{key:"beginScope"}),t.begin=wi(t.begin,{joinWith:""})}}function Ed(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw bt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Tn;if(typeof t.endScope!="object"||t.endScope===null)throw bt("endScope must be object"),Tn;_a(t,t.end,{key:"endScope"}),t.end=wi(t.end,{joinWith:""})}}function vd(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function yd(t){vd(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),_d(t),Ed(t)}function wd(t){function e(o,a){return new RegExp(tn(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,a]),this.matchAt+=ha(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(l=>l[1]);this.matcherRe=e(wi(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(a);if(!l)return null;const u=l.findIndex((h,p)=>p>0&&h!==void 0),c=this.matchIndexes[u];return l.splice(0,u),Object.assign(l,c)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const l=new n;return this.rules.slice(a).forEach(([u,c])=>l.addRule(u,c)),l.compile(),this.multiRegexes[a]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,l){this.rules.push([a,l]),l.type==="begin"&&this.count++}exec(a){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let u=l.exec(a);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const c=this.getMatcher(0);c.lastIndex=this.lastIndex+1,u=c.exec(a)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function i(o){const a=new r;return o.contains.forEach(l=>a.addRule(l.begin,{rule:l,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function s(o,a){const l=o;if(o.isCompiled)return l;[ld,dd,yd,pd].forEach(c=>c(o,a)),t.compilerExtensions.forEach(c=>c(o,a)),o.__beforeBegin=null,[cd,ud,hd].forEach(c=>c(o,a)),o.isCompiled=!0;let u=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),u=o.keywords.$pattern,delete o.keywords.$pattern),u=u||/\w+/,o.keywords&&(o.keywords=ma(o.keywords,t.case_insensitive)),l.keywordPatternRe=e(u,!0),a&&(o.begin||(o.begin=/\B|\b/),l.beginRe=e(l.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(l.endRe=e(l.end)),l.terminatorEnd=tn(l.end)||"",o.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(l.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(c){return Sd(c==="self"?o:c)})),o.contains.forEach(function(c){s(c,l)}),o.starts&&s(o.starts,a),l.matcher=i(l),l}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=it(t.classNameAliases||{}),s(t)}function Ea(t){return t?t.endsWithParent||Ea(t.starts):!1}function Sd(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return it(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:Ea(t)?it(t,{starts:t.starts?it(t.starts):null}):Object.isFrozen(t)?it(t):t}var Ad="11.9.0";class xd extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const Qn=ua,us=it,ds=Symbol("nomatch"),Nd=7,va=function(t){const e=Object.create(null),n=Object.create(null),r=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Bu};function l(v){return a.noHighlightRe.test(v)}function u(v){let R=v.className+" ";R+=v.parentNode?v.parentNode.className:"";const W=a.languageDetectRe.exec(R);if(W){const ne=j(W[1]);return ne||(cs(s.replace("{}",W[1])),cs("Falling back to no-highlight mode for this block.",v)),ne?W[1]:"no-highlight"}return R.split(/\s+/).find(ne=>l(ne)||j(ne))}function c(v,R,W){let ne="",ie="";typeof R=="object"?(ne=v,W=R.ignoreIllegals,ie=R.language):(St("10.7.0","highlight(lang, code, ...args) has been deprecated."),St("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ie=v,ne=R),W===void 0&&(W=!0);const ce={code:ne,language:ie};le("before:highlight",ce);const ve=ce.result?ce.result:h(ce.language,ce.code,W);return ve.code=ce.code,le("after:highlight",ve),ve}function h(v,R,W,ne){const ie=Object.create(null);function ce(T,M){return T.keywords[M]}function ve(){if(!m.keywords){S.addText(q);return}let T=0;m.keywordPatternRe.lastIndex=0;let M=m.keywordPatternRe.exec(q),$="";for(;M;){$+=q.substring(T,M.index);const J=A.case_insensitive?M[0].toLowerCase():M[0],me=ce(m,J);if(me){const[Oe,Ze]=me;if(S.addText($),$="",ie[J]=(ie[J]||0)+1,ie[J]<=Nd&&(z+=Ze),Oe.startsWith("_"))$+=M[0];else{const yt=A.classNameAliases[Oe]||Oe;I(M[0],yt)}}else $+=M[0];T=m.keywordPatternRe.lastIndex,M=m.keywordPatternRe.exec(q)}$+=q.substring(T),S.addText($)}function we(){if(q==="")return;let T=null;if(typeof m.subLanguage=="string"){if(!e[m.subLanguage]){S.addText(q);return}T=h(m.subLanguage,q,!0,D[m.subLanguage]),D[m.subLanguage]=T._top}else T=f(q,m.subLanguage.length?m.subLanguage:null);m.relevance>0&&(z+=T.relevance),S.__addSublanguage(T._emitter,T.language)}function _(){m.subLanguage!=null?we():ve(),q=""}function I(T,M){T!==""&&(S.startScope(M),S.addText(T),S.endScope())}function O(T,M){let $=1;const J=M.length-1;for(;$<=J;){if(!T._emit[$]){$++;continue}const me=A.classNameAliases[T[$]]||T[$],Oe=M[$];me?I(Oe,me):(q=Oe,ve(),q=""),$++}}function P(T,M){return T.scope&&typeof T.scope=="string"&&S.openNode(A.classNameAliases[T.scope]||T.scope),T.beginScope&&(T.beginScope._wrap?(I(q,A.classNameAliases[T.beginScope._wrap]||T.beginScope._wrap),q=""):T.beginScope._multi&&(O(T.beginScope,M),q="")),m=Object.create(T,{parent:{value:m}}),m}function Z(T,M,$){let J=Fu(T.endRe,$);if(J){if(T["on:end"]){const me=new ss(T);T["on:end"](M,me),me.isMatchIgnored&&(J=!1)}if(J){for(;T.endsParent&&T.parent;)T=T.parent;return T}}if(T.endsWithParent)return Z(T.parent,M,$)}function se(T){return m.matcher.regexIndex===0?(q+=T[0],1):(V=!0,0)}function G(T){const M=T[0],$=T.rule,J=new ss($),me=[$.__beforeBegin,$["on:begin"]];for(const Oe of me)if(Oe&&(Oe(T,J),J.isMatchIgnored))return se(M);return $.skip?q+=M:($.excludeBegin&&(q+=M),_(),!$.returnBegin&&!$.excludeBegin&&(q=M)),P($,T),$.returnBegin?0:M.length}function d(T){const M=T[0],$=R.substring(T.index),J=Z(m,T,$);if(!J)return ds;const me=m;m.endScope&&m.endScope._wrap?(_(),I(M,m.endScope._wrap)):m.endScope&&m.endScope._multi?(_(),O(m.endScope,T)):me.skip?q+=M:(me.returnEnd||me.excludeEnd||(q+=M),_(),me.excludeEnd&&(q=M));do m.scope&&S.closeNode(),!m.skip&&!m.subLanguage&&(z+=m.relevance),m=m.parent;while(m!==J.parent);return J.starts&&P(J.starts,T),me.returnEnd?0:M.length}function g(){const T=[];for(let M=m;M!==A;M=M.parent)M.scope&&T.unshift(M.scope);T.forEach(M=>S.openNode(M))}let b={};function w(T,M){const $=M&&M[0];if(q+=T,$==null)return _(),0;if(b.type==="begin"&&M.type==="end"&&b.index===M.index&&$===""){if(q+=R.slice(M.index,M.index+1),!i){const J=new Error(`0 width match regex (${v})`);throw J.languageName=v,J.badRule=b.rule,J}return 1}if(b=M,M.type==="begin")return G(M);if(M.type==="illegal"&&!W){const J=new Error('Illegal lexeme "'+$+'" for mode "'+(m.scope||"<unnamed>")+'"');throw J.mode=m,J}else if(M.type==="end"){const J=d(M);if(J!==ds)return J}if(M.type==="illegal"&&$==="")return 1;if(Y>1e5&&Y>M.index*3)throw new Error("potential infinite loop, way more iterations than matches");return q+=$,$.length}const A=j(v);if(!A)throw bt(s.replace("{}",v)),new Error('Unknown language: "'+v+'"');const L=wd(A);let B="",m=ne||L;const D={},S=new a.__emitter(a);g();let q="",z=0,F=0,Y=0,V=!1;try{if(A.__emitTokens)A.__emitTokens(R,S);else{for(m.matcher.considerAll();;){Y++,V?V=!1:m.matcher.considerAll(),m.matcher.lastIndex=F;const T=m.matcher.exec(R);if(!T)break;const M=R.substring(F,T.index),$=w(M,T);F=T.index+$}w(R.substring(F))}return S.finalize(),B=S.toHTML(),{language:v,value:B,relevance:z,illegal:!1,_emitter:S,_top:m}}catch(T){if(T.message&&T.message.includes("Illegal"))return{language:v,value:Qn(R),illegal:!0,relevance:0,_illegalBy:{message:T.message,index:F,context:R.slice(F-100,F+100),mode:T.mode,resultSoFar:B},_emitter:S};if(i)return{language:v,value:Qn(R),illegal:!1,relevance:0,errorRaised:T,_emitter:S,_top:m};throw T}}function p(v){const R={value:Qn(v),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return R._emitter.addText(v),R}function f(v,R){R=R||a.languages||Object.keys(e);const W=p(v),ne=R.filter(j).filter(ae).map(_=>h(_,v,!1));ne.unshift(W);const ie=ne.sort((_,I)=>{if(_.relevance!==I.relevance)return I.relevance-_.relevance;if(_.language&&I.language){if(j(_.language).supersetOf===I.language)return 1;if(j(I.language).supersetOf===_.language)return-1}return 0}),[ce,ve]=ie,we=ce;return we.secondBest=ve,we}function E(v,R,W){const ne=R&&n[R]||W;v.classList.add("hljs"),v.classList.add(`language-${ne}`)}function y(v){let R=null;const W=u(v);if(l(W))return;if(le("before:highlightElement",{el:v,language:W}),v.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",v);return}if(v.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(v)),a.throwUnescapedHTML))throw new xd("One of your code blocks includes unescaped HTML.",v.innerHTML);R=v;const ne=R.textContent,ie=W?c(ne,{language:W,ignoreIllegals:!0}):f(ne);v.innerHTML=ie.value,v.dataset.highlighted="yes",E(v,W,ie.language),v.result={language:ie.language,re:ie.relevance,relevance:ie.relevance},ie.secondBest&&(v.secondBest={language:ie.secondBest.language,relevance:ie.secondBest.relevance}),le("after:highlightElement",{el:v,result:ie,text:ne})}function N(v){a=us(a,v)}const x=()=>{k(),St("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function C(){k(),St("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let U=!1;function k(){if(document.readyState==="loading"){U=!0;return}document.querySelectorAll(a.cssSelector).forEach(y)}function K(){U&&k()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",K,!1);function X(v,R){let W=null;try{W=R(t)}catch(ne){if(bt("Language definition for '{}' could not be registered.".replace("{}",v)),i)bt(ne);else throw ne;W=o}W.name||(W.name=v),e[v]=W,W.rawDefinition=R.bind(null,t),W.aliases&&de(W.aliases,{languageName:v})}function te(v){delete e[v];for(const R of Object.keys(n))n[R]===v&&delete n[R]}function H(){return Object.keys(e)}function j(v){return v=(v||"").toLowerCase(),e[v]||e[n[v]]}function de(v,{languageName:R}){typeof v=="string"&&(v=[v]),v.forEach(W=>{n[W.toLowerCase()]=R})}function ae(v){const R=j(v);return R&&!R.disableAutodetect}function be(v){v["before:highlightBlock"]&&!v["before:highlightElement"]&&(v["before:highlightElement"]=R=>{v["before:highlightBlock"](Object.assign({block:R.el},R))}),v["after:highlightBlock"]&&!v["after:highlightElement"]&&(v["after:highlightElement"]=R=>{v["after:highlightBlock"](Object.assign({block:R.el},R))})}function ye(v){be(v),r.push(v)}function fe(v){const R=r.indexOf(v);R!==-1&&r.splice(R,1)}function le(v,R){const W=v;r.forEach(function(ne){ne[W]&&ne[W](R)})}function oe(v){return St("10.7.0","highlightBlock will be removed entirely in v12.0"),St("10.7.0","Please use highlightElement now."),y(v)}Object.assign(t,{highlight:c,highlightAuto:f,highlightAll:k,highlightElement:y,highlightBlock:oe,configure:N,initHighlighting:x,initHighlightingOnLoad:C,registerLanguage:X,unregisterLanguage:te,listLanguages:H,getLanguage:j,registerAliases:de,autoDetection:ae,inherit:us,addPlugin:ye,removePlugin:fe}),t.debugMode=function(){i=!1},t.safeMode=function(){i=!0},t.versionString=Ad,t.regex={concat:vt,lookahead:da,either:yi,optional:zu,anyNumberOfTimes:Uu};for(const v in pn)typeof pn[v]=="object"&&ca(pn[v]);return Object.assign(t,pn),t},Lt=va({});Lt.newInstance=()=>va({});var ya=Lt;Lt.HighlightJS=Lt;Lt.default=Lt;const vn=Iu(ya);var hs=fi({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(t){var e=hi(t.language);Gt(function(){return t.language},function(i){e.value=i});var n=Te(function(){return t.autodetect||!e.value}),r=Te(function(){return!n.value&&!vn.getLanguage(e.value)});return{className:Te(function(){return r.value?"":"hljs "+e.value}),highlightedCode:Te(function(){var i;if(r.value)return console.warn('The language "'+e.value+'" you specified could not be found.'),t.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(n.value){var s=vn.highlightAuto(t.code);return e.value=(i=s.language)!==null&&i!==void 0?i:"",s.value}return(s=vn.highlight(t.code,{language:e.value,ignoreIllegals:t.ignoreIllegals})).value})}},render:function(){return Nn("pre",{},[Nn("code",{class:this.className,innerHTML:this.highlightedCode})])}}),Td={install:function(t){t.component("highlightjs",hs)},component:hs},Jn,ps;function Rd(){if(ps)return Jn;ps=1;function t(e){const n=e.regex,r=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=e.inherit(o,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"string"}),u=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,u,l,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,a,u,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[u]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(r,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}return Jn=t,Jn}var jn,gs;function Od(){if(gs)return jn;gs=1;function t(e){const n=e.regex,r={},i={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[r]}]};Object.assign(r,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},i]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,s]};s.contains.push(a);const l={match:/\\"/},u={className:"string",begin:/'/,end:/'/},c={match:/\\'/},h={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,r]},p=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],f=e.SHEBANG({binary:`(${p.join("|")})`,relevance:10}),E={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},y=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],N=["true","false"],x={match:/(\/[a-z._-]+)+/},C=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],U=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],k=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],K=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:y,literal:N,built_in:[...C,...U,"set","shopt",...k,...K]},contains:[f,e.SHEBANG(),E,h,e.HASH_COMMENT_MODE,o,x,a,l,u,c,r]}}return jn=t,jn}var er,fs;function Cd(){if(fs)return er;fs=1;function t(e){const n=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",o="<[^<>]+>",a="("+i+"|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional(o)+")",l={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},u="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+u+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},p={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},f={className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0},E=n.optional(s)+e.IDENT_RE+"\\s*\\(",x={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},C=[p,l,r,e.C_BLOCK_COMMENT_MODE,h,c],U={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:x,contains:C.concat([{begin:/\(/,end:/\)/,keywords:x,contains:C.concat(["self"]),relevance:0}]),relevance:0},k={begin:"("+a+"[\\*&\\s]+)+"+E,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:x,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:x,relevance:0},{begin:E,returnBegin:!0,contains:[e.inherit(f,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,c,h,l,{begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,c,h,l]}]},l,r,e.C_BLOCK_COMMENT_MODE,p]};return{name:"C",aliases:["h"],keywords:x,disableAutodetect:!0,illegal:"</",contains:[].concat(U,k,C,[p,{begin:e.IDENT_RE+"::",keywords:x},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:p,strings:c,keywords:x}}}return er=t,er}var tr,bs;function kd(){if(bs)return tr;bs=1;function t(e){const n=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",o="<[^<>]+>",a="(?!struct)("+i+"|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional(o)+")",l={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},u="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+u+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},p={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},f={className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0},E=n.optional(s)+e.IDENT_RE+"\\s*\\(",y=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],N=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],x=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],C=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],K={type:N,keyword:y,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:x},X={className:"function.dispatch",relevance:0,keywords:{_hint:C},begin:n.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,n.lookahead(/(<[^<>]+>|)\s*\(/))},te=[X,p,l,r,e.C_BLOCK_COMMENT_MODE,h,c],H={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:K,contains:te.concat([{begin:/\(/,end:/\)/,keywords:K,contains:te.concat(["self"]),relevance:0}]),relevance:0},j={className:"function",begin:"("+a+"[\\*&\\s]+)+"+E,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:K,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:K,relevance:0},{begin:E,returnBegin:!0,contains:[f],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[c,h]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:K,relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,c,h,l,{begin:/\(/,end:/\)/,keywords:K,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,c,h,l]}]},l,r,e.C_BLOCK_COMMENT_MODE,p]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:K,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(H,j,X,te,[p,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:K,contains:["self",l]},{begin:e.IDENT_RE+"::",keywords:K},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}return tr=t,tr}var nr,ms;function Md(){if(ms)return nr;ms=1;function t(e){const n=["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],r=["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"],i=["default","false","null","true"],s=["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"],o=["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"],a={keyword:s.concat(o),built_in:n,literal:i},l=e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},c={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},h=e.inherit(c,{illegal:/\n/}),p={className:"subst",begin:/\{/,end:/\}/,keywords:a},f=e.inherit(p,{illegal:/\n/}),E={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},e.BACKSLASH_ESCAPE,f]},y={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},p]},N=e.inherit(y,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},f]});p.contains=[y,E,c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,e.C_BLOCK_COMMENT_MODE],f.contains=[N,E,h,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const x={variants:[y,E,c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},C={begin:"<",end:">",contains:[{beginKeywords:"in out"},l]},U=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",k={begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:a,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},x,u,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},l,C,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[l,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[l,C,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+U+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:a,contains:[{beginKeywords:r.join(" "),relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[e.TITLE_MODE,C],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,relevance:0,contains:[x,u,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},k]}}return nr=t,nr}var rr,_s;function Ld(){if(_s)return rr;_s=1;const t=a=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:a.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:a.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],n=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],s=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function o(a){const l=a.regex,u=t(a),c={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},h="and or not only",p=/@-?\w[\w]*(-\w+)*/,f="[a-zA-Z-][a-zA-Z0-9_-]*",E=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[u.BLOCK_COMMENT,c,u.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+f,relevance:0},u.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+r.join("|")+")"},{begin:":(:)?("+i.join("|")+")"}]},u.CSS_VARIABLE,{className:"attribute",begin:"\\b("+s.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[u.BLOCK_COMMENT,u.HEXCOLOR,u.IMPORTANT,u.CSS_NUMBER_MODE,...E,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...E,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},u.FUNCTION_DISPATCH]},{begin:l.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:p},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:h,attribute:n.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...E,u.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}return rr=o,rr}var ir,Es;function Id(){if(Es)return ir;Es=1;function t(e){const n=e.regex,r={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},i={begin:"^[-\\*]{3,}",end:"$"},s={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},o={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},a={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},l=/[A-Za-z][A-Za-z0-9+.-]*/,u={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,l,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},c={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},h={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},p=e.inherit(c,{contains:[]}),f=e.inherit(h,{contains:[]});c.contains.push(f),h.contains.push(p);let E=[r,u];return[c,h,p,f].forEach(x=>{x.contains=x.contains.concat(E)}),E=E.concat(c,h),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:E},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:E}]}]},r,o,c,h,{className:"quote",begin:"^>\\s+",contains:E,end:"$"},s,i,u,a]}}return ir=t,ir}var sr,vs;function Dd(){if(vs)return sr;vs=1;function t(e){const n=e.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:n.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:n.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}return sr=t,sr}var or,ys;function qd(){if(ys)return or;ys=1;function t(e){const n=e.regex,r="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",i=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),s=n.concat(i,/(::\w+)*/),a={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},l={className:"doctag",begin:"@[A-Za-z]+"},u={begin:"#<",end:">"},c=[e.COMMENT("#","$",{contains:[l]}),e.COMMENT("^=begin","^=end",{contains:[l],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],h={className:"subst",begin:/#\{/,end:/\}/,keywords:a},p={className:"string",contains:[e.BACKSLASH_ESCAPE,h],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,h]})]}]},f="[1-9](_?[0-9])*|0",E="[0-9](_?[0-9])*",y={className:"number",relevance:0,variants:[{begin:`\\b(${f})(\\.(${E}))?([eE][+-]?(${E})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},N={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:a}]},te=[p,{variants:[{match:[/class\s+/,s,/\s+<\s+/,s]},{match:[/\b(class|module)\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:a},{match:[/(include|extend)\s+/,s],scope:{2:"title.class"},keywords:a},{relevance:0,match:[s,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:i,scope:"title.class"},{match:[/def/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[N]},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[p,{begin:r}],relevance:0},y,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:a},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,h],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(u,c),relevance:0}].concat(u,c);h.contains=te,N.contains=te;const H="[>?]>",j="[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]",de="(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",ae=[{begin:/^\s*=>/,starts:{end:"$",contains:te}},{className:"meta.prompt",begin:"^("+H+"|"+j+"|"+de+")(?=[ ])",starts:{end:"$",keywords:a,contains:te}}];return c.unshift(u),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:a,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(ae).concat(c).concat(te)}}return or=t,or}var ar,ws;function Pd(){if(ws)return ar;ws=1;function t(e){const o={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:o,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:o,illegal:/["']/}]}]}}return ar=t,ar}var lr,Ss;function Bd(){if(Ss)return lr;Ss=1;function t(e){const n=e.regex,r=/[_A-Za-z][_0-9A-Za-z]*/;return{name:"GraphQL",aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],literal:["true","false","null"]},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{scope:"symbol",begin:n.concat(r,n.lookahead(/\s*:/)),relevance:0}],illegal:[/[;<']/,/BEGIN/]}}return lr=t,lr}var cr,As;function Ud(){if(As)return cr;As=1;function t(e){const n=e.regex,r={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},i=e.COMMENT();i.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const s={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},o={className:"literal",begin:/\bon|off|true|false|yes|no\b/},a={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[i,o,s,a,r,"self"],relevance:0},u=/[A-Za-z0-9_-]+/,c=/"(\\"|[^"])*"/,h=/'[^']*'/,p=n.either(u,c,h),f=n.concat(p,"(\\s*\\.\\s*",p,")*",n.lookahead(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[i,{className:"section",begin:/\[+/,end:/\]+/},{begin:f,className:"attr",starts:{end:/$/,contains:[i,l,o,s,a,r]}}]}}return cr=t,cr}var ur,xs;function zd(){if(xs)return ur;xs=1;var t="[0-9](_*[0-9])*",e=`\\.(${t})`,n="[0-9a-fA-F](_*[0-9a-fA-F])*",r={className:"number",variants:[{begin:`(\\b(${t})((${e})|\\.)?|(${e}))[eE][+-]?(${t})[fFdD]?\\b`},{begin:`\\b(${t})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${e})[fFdD]?\\b`},{begin:`\\b(${t})[fFdD]\\b`},{begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${t})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function i(o,a,l){return l===-1?"":o.replace(a,u=>i(o,a,l-1))}function s(o){const a=o.regex,l="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",u=l+i("(?:<"+l+"~~~(?:\\s*,\\s*"+l+"~~~)*>)?",/~~~/g,2),E={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},y={className:"meta",begin:"@"+l,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},N={className:"params",begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:E,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,l],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[a.concat(/(?!else)/,l),/\s+/,l,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,l],className:{1:"keyword",3:"title.class"},contains:[N,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+u+"\\s+)",o.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:E,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:E,relevance:0,contains:[y,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,r,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},r,y]}}return ur=s,ur}var dr,Ns;function Hd(){if(Ns)return dr;Ns=1;const t="[A-Za-z$_][0-9A-Za-z$_]*",e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],r=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],i=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],s=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],o=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],a=[].concat(s,r,i);function l(u){const c=u.regex,h=(O,{after:P})=>{const Z="</"+O[0].slice(1);return O.input.indexOf(Z,P)!==-1},p=t,f={begin:"<>",end:"</>"},E=/<[A-Za-z0-9\\._:-]+\s*\/>/,y={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(O,P)=>{const Z=O[0].length+O.index,se=O.input[Z];if(se==="<"||se===","){P.ignoreMatch();return}se===">"&&(h(O,{after:Z})||P.ignoreMatch());let G;const d=O.input.substring(Z);if(G=d.match(/^\s*=/)){P.ignoreMatch();return}if((G=d.match(/^\s+extends\s+/))&&G.index===0){P.ignoreMatch();return}}},N={$pattern:t,keyword:e,literal:n,built_in:a,"variable.language":o},x="[0-9](_?[0-9])*",C=`\\.(${x})`,U="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",k={className:"number",variants:[{begin:`(\\b(${U})((${C})|\\.)?|(${C}))[eE][+-]?(${x})\\b`},{begin:`\\b(${U})\\b((${C})\\b|\\.)?|(${C})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},K={className:"subst",begin:"\\$\\{",end:"\\}",keywords:N,contains:[]},X={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,K],subLanguage:"xml"}},te={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,K],subLanguage:"css"}},H={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,K],subLanguage:"graphql"}},j={className:"string",begin:"`",end:"`",contains:[u.BACKSLASH_ESCAPE,K]},ae={className:"comment",variants:[u.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:p+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),u.C_BLOCK_COMMENT_MODE,u.C_LINE_COMMENT_MODE]},be=[u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,X,te,H,j,{match:/\$\d+/},k];K.contains=be.concat({begin:/\{/,end:/\}/,keywords:N,contains:["self"].concat(be)});const ye=[].concat(ae,K.contains),fe=ye.concat([{begin:/\(/,end:/\)/,keywords:N,contains:["self"].concat(ye)}]),le={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:N,contains:fe},oe={variants:[{match:[/class/,/\s+/,p,/\s+/,/extends/,/\s+/,c.concat(p,"(",c.concat(/\./,p),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,p],scope:{1:"keyword",3:"title.class"}}]},v={relevance:0,match:c.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...r,...i]}},R={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},W={variants:[{match:[/function/,/\s+/,p,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[le],illegal:/%/},ne={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ie(O){return c.concat("(?!",O.join("|"),")")}const ce={match:c.concat(/\b/,ie([...s,"super","import"]),p,c.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:c.concat(/\./,c.lookahead(c.concat(p,/(?![0-9A-Za-z$_(])/))),end:p,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},we={match:[/get|set/,/\s+/,p,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},le]},_="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+u.UNDERSCORE_IDENT_RE+")\\s*=>",I={match:[/const|var|let/,/\s+/,p,/\s*/,/=\s*/,/(async\s*)?/,c.lookahead(_)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[le]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:N,exports:{PARAMS_CONTAINS:fe,CLASS_REFERENCE:v},illegal:/#(?![$_A-z])/,contains:[u.SHEBANG({label:"shebang",binary:"node",relevance:5}),R,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,X,te,H,j,ae,{match:/\$\d+/},k,v,{className:"attr",begin:p+c.lookahead(":"),relevance:0},I,{begin:"("+u.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[ae,u.REGEXP_MODE,{className:"function",begin:_,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:u.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:N,contains:fe}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:f.begin,end:f.end},{match:E},{begin:y.begin,"on:begin":y.isTrulyOpeningTag,end:y.end}],subLanguage:"xml",contains:[{begin:y.begin,end:y.end,skip:!0,contains:["self"]}]}]},W,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+u.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[le,u.inherit(u.TITLE_MODE,{begin:p,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+p,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[le]},ce,ne,oe,we,{match:/\$[(.]/}]}}return dr=l,dr}var hr,Ts;function Fd(){if(Ts)return hr;Ts=1;function t(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},r={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],s={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",keywords:{literal:i},contains:[n,r,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}return hr=t,hr}var pr,Rs;function $d(){if(Rs)return pr;Rs=1;var t="[0-9](_*[0-9])*",e=`\\.(${t})`,n="[0-9a-fA-F](_*[0-9a-fA-F])*",r={className:"number",variants:[{begin:`(\\b(${t})((${e})|\\.)?|(${e}))[eE][+-]?(${t})[fFdD]?\\b`},{begin:`\\b(${t})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${e})[fFdD]?\\b`},{begin:`\\b(${t})[fFdD]\\b`},{begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${t})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function i(s){const o={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},l={className:"symbol",begin:s.UNDERSCORE_IDENT_RE+"@"},u={className:"subst",begin:/\$\{/,end:/\}/,contains:[s.C_NUMBER_MODE]},c={className:"variable",begin:"\\$"+s.UNDERSCORE_IDENT_RE},h={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[c,u]},{begin:"'",end:"'",illegal:/\n/,contains:[s.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[s.BACKSLASH_ESCAPE,c,u]}]};u.contains.push(h);const p={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+s.UNDERSCORE_IDENT_RE+")?"},f={className:"meta",begin:"@"+s.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[s.inherit(h,{className:"string"}),"self"]}]},E=r,y=s.COMMENT("/\\*","\\*/",{contains:[s.C_BLOCK_COMMENT_MODE]}),N={variants:[{className:"type",begin:s.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},x=N;return x.variants[1].contains=[N],N.variants[1].contains=[x],{name:"Kotlin",aliases:["kt","kts"],keywords:o,contains:[s.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),s.C_LINE_COMMENT_MODE,y,a,l,p,f,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:o,relevance:5,contains:[{begin:s.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[s.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:o,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[N,s.C_LINE_COMMENT_MODE,y],relevance:0},s.C_LINE_COMMENT_MODE,y,p,f,h,s.C_NUMBER_MODE]},y]},{begin:[/class|interface|trait/,/\s+/,s.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},s.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},p,f]},h,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},E]}}return pr=i,pr}var gr,Os;function Kd(){if(Os)return gr;Os=1;const t=l=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:l.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:l.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],n=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],s=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse(),o=r.concat(i);function a(l){const u=t(l),c=o,h="and or not only",p="[\\w-]+",f="("+p+"|@\\{"+p+"\\})",E=[],y=[],N=function(ae){return{className:"string",begin:"~?"+ae+".*?"+ae}},x=function(ae,be,ye){return{className:ae,begin:be,relevance:ye}},C={$pattern:/[a-z-]+/,keyword:h,attribute:n.join(" ")},U={begin:"\\(",end:"\\)",contains:y,keywords:C,relevance:0};y.push(l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE,N("'"),N('"'),u.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},u.HEXCOLOR,U,x("variable","@@?"+p,10),x("variable","@\\{"+p+"\\}"),x("built_in","~?`[^`]*?`"),{className:"attribute",begin:p+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0},u.IMPORTANT,{beginKeywords:"and not"},u.FUNCTION_DISPATCH);const k=y.concat({begin:/\{/,end:/\}/,contains:E}),K={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(y)},X={begin:f+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/},u.CSS_VARIABLE,{className:"attribute",begin:"\\b("+s.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:y}}]},te={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",keywords:C,returnEnd:!0,contains:y,relevance:0}},H={className:"variable",variants:[{begin:"@"+p+"\\s*:",relevance:15},{begin:"@"+p}],starts:{end:"[;}]",returnEnd:!0,contains:k}},j={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:f,end:/\{/}],returnBegin:!0,returnEnd:!0,illegal:`[<='$"]`,relevance:0,contains:[l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE,K,x("keyword","all\\b"),x("variable","@\\{"+p+"\\}"),{begin:"\\b("+e.join("|")+")\\b",className:"selector-tag"},u.CSS_NUMBER_MODE,x("selector-tag",f,0),x("selector-id","#"+f),x("selector-class","\\."+f,0),x("selector-tag","&",0),u.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",begin:":("+r.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+i.join("|")+")"},{begin:/\(/,end:/\)/,relevance:0,contains:k},{begin:"!important"},u.FUNCTION_DISPATCH]},de={begin:p+`:(:)?(${c.join("|")})`,returnBegin:!0,contains:[j]};return E.push(l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE,te,H,de,X,j,K,u.FUNCTION_DISPATCH),{name:"Less",case_insensitive:!0,illegal:`[=>'/<($"]`,contains:E}}return gr=a,gr}var fr,Cs;function Gd(){if(Cs)return fr;Cs=1;function t(e){const n="\\[=*\\[",r="\\]=*\\]",i={begin:n,end:r,contains:["self"]},s=[e.COMMENT("--(?!"+n+")","$"),e.COMMENT("--"+n,r,{contains:[i],relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:s.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:s}].concat(s)},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:n,end:r,contains:[i],relevance:5}])}}return fr=t,fr}var br,ks;function Wd(){if(ks)return br;ks=1;function t(e){const n={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},i={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[n]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},o={className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},a={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[e.HASH_COMMENT_MODE,n,r,i,s,o,a]}}return br=t,br}var mr,Ms;function Yd(){if(Ms)return mr;Ms=1;function t(e){const n=e.regex,r=["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"],i=/[dualxmsipngr]{0,12}/,s={$pattern:/[\w.]+/,keyword:r.join(" ")},o={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:s},a={begin:/->\{/,end:/\}/},l={variants:[{begin:/\$\d/},{begin:n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},u=[e.BACKSLASH_ESCAPE,o,l],c=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],h=(E,y,N="\\1")=>{const x=N==="\\1"?N:n.concat(N,y);return n.concat(n.concat("(?:",E,")"),y,/(?:\\.|[^\\\/])*?/,x,/(?:\\.|[^\\\/])*?/,N,i)},p=(E,y,N)=>n.concat(n.concat("(?:",E,")"),y,/(?:\\.|[^\\\/])*?/,N,i),f=[l,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),a,{className:"string",contains:u,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:h("s|tr|y",n.either(...c,{capture:!0}))},{begin:h("s|tr|y","\\(","\\)")},{begin:h("s|tr|y","\\[","\\]")},{begin:h("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:p("(?:m|qr)?",/\//,/\//)},{begin:p("m|qr",n.either(...c,{capture:!0}),/\1/)},{begin:p("m|qr",/\(/,/\)/)},{begin:p("m|qr",/\[/,/\]/)},{begin:p("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return o.contains=f,a.contains=f,{name:"Perl",aliases:["pl","pm"],keywords:s,contains:f}}return mr=t,mr}var _r,Ls;function Zd(){if(Ls)return _r;Ls=1;function t(e){const n={className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},r=/[a-zA-Z@][a-zA-Z0-9_]*/,l={"variable.language":["this","super"],$pattern:r,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},u={$pattern:r,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:l,illegal:"</",contains:[n,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+u.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:u,contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}return _r=t,_r}var Er,Is;function Vd(){if(Is)return Er;Is=1;function t(e){const n=e.regex,r=/(?![A-Za-z0-9])(?![$])/,i=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,r),s=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,r),o={scope:"variable",match:"\\$+"+i},a={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},u=e.inherit(e.APOS_STRING_MODE,{illegal:null}),c=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(l)}),h={begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(l),"on:begin":(fe,le)=>{le.data._beginMatch=fe[1]||fe[2]},"on:end":(fe,le)=>{le.data._beginMatch!==fe[1]&&le.ignoreMatch()}},p=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/}),f=`[ 	
]`,E={scope:"string",variants:[c,u,h,p]},y={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},N=["false","null","true"],x=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],C=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],k={keyword:x,literal:(fe=>{const le=[];return fe.forEach(oe=>{le.push(oe),oe.toLowerCase()===oe?le.push(oe.toUpperCase()):le.push(oe.toLowerCase())}),le})(N),built_in:C},K=fe=>fe.map(le=>le.replace(/\|\d+$/,"")),X={variants:[{match:[/new/,n.concat(f,"+"),n.concat("(?!",K(C).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},te=n.concat(i,"\\b(?!\\()"),H={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),te],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,n.concat(/::/,n.lookahead(/(?!class\b)/)),te],scope:{1:"title.class",3:"variable.constant"}},{match:[s,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},j={scope:"attr",match:n.concat(i,n.lookahead(":"),n.lookahead(/(?!::)/))},de={relevance:0,begin:/\(/,end:/\)/,keywords:k,contains:[j,o,H,e.C_BLOCK_COMMENT_MODE,E,y,X]},ae={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",K(x).join("\\b|"),"|",K(C).join("\\b|"),"\\b)"),i,n.concat(f,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[de]};de.contains.push(ae);const be=[j,H,e.C_BLOCK_COMMENT_MODE,E,y,X],ye={begin:n.concat(/#\[\s*/,s),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:N,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:N,keyword:["new","array"]},contains:["self",...be]},...be,{scope:"meta",match:s}]};return{case_insensitive:!1,keywords:k,contains:[ye,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},a,{scope:"variable.language",match:/\$this\b/},o,ae,H,{match:[/const/,/\s/,i],scope:{1:"keyword",3:"variable.constant"}},X,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:k,contains:["self",o,H,e.C_BLOCK_COMMENT_MODE,E,y]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},E,y]}}return Er=t,Er}var vr,Ds;function Xd(){if(Ds)return vr;Ds=1;function t(e){return{name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]}]}}return vr=t,vr}var yr,qs;function Qd(){if(qs)return yr;qs=1;function t(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}return yr=t,yr}var wr,Ps;function Jd(){if(Ps)return wr;Ps=1;function t(e){const n=e.regex,r=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),i=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],l={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},u={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:l,illegal:/#/},h={begin:/\{\{/,relevance:0},p={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u,h,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u,h,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,h,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,h,c]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},f="[0-9](_?[0-9])*",E=`(\\b(${f}))?\\.(${f})|\\b(${f})\\.`,y=`\\b|${i.join("|")}`,N={className:"number",relevance:0,variants:[{begin:`(\\b(${f})|(${E}))[eE][+-]?(${f})[jJ]?(?=${y})`},{begin:`(${E})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${y})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${y})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${y})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${y})`},{begin:`\\b(${f})[jJ](?=${y})`}]},x={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:l,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},C={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:["self",u,N,p,e.HASH_COMMENT_MODE]}]};return c.contains=[p,N,u],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:l,illegal:/(<\/|\?)|=>/,contains:[u,N,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},p,x,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[C]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[N,C,p]}]}}return wr=t,wr}var Sr,Bs;function jd(){if(Bs)return Sr;Bs=1;function t(e){return{aliases:["pycon"],contains:[{className:"meta.prompt",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}}return Sr=t,Sr}var Ar,Us;function eh(){if(Us)return Ar;Us=1;function t(e){const n=e.regex,r=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,i=n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,o=n.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:r,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:r},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[s,i]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,i]},{scope:{1:"punctuation",2:"number"},match:[o,i]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,i]}]},{scope:{3:"operator"},match:[r,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:o},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}return Ar=t,Ar}var xr,zs;function th(){if(zs)return xr;zs=1;function t(e){const n=e.regex,r={className:"title.function.invoke",relevance:0,begin:n.concat(/\b/,/(?!let|for|while|if|else|match\b)/,e.IDENT_RE,n.lookahead(/\s*\(/))},i="([ui](8|16|32|64|128|size)|f(32|64))?",s=["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],o=["true","false","Some","None","Ok","Err"],a=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],l=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:l,keyword:s,literal:o,built_in:a},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+i},{begin:"\\b0o([0-7_]+)"+i},{begin:"\\b0x([A-Fa-f0-9_]+)"+i},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+i}],relevance:0},{begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{keyword:"Self",built_in:a,type:l}},{className:"punctuation",begin:"->"},r]}}return xr=t,xr}var Nr,Hs;function nh(){if(Hs)return Nr;Hs=1;const t=a=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:a.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:a.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],n=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],s=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function o(a){const l=t(a),u=i,c=r,h="@[a-z-]+",p="and or not only",E={className:"variable",begin:"(\\$"+"[a-zA-Z-][a-zA-Z0-9_-]*"+")\\b",relevance:0};return{name:"SCSS",case_insensitive:!0,illegal:"[=/|']",contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,l.CSS_NUMBER_MODE,{className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",begin:"\\b("+e.join("|")+")\\b",relevance:0},{className:"selector-pseudo",begin:":("+c.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+u.join("|")+")"},E,{begin:/\(/,end:/\)/,contains:[l.CSS_NUMBER_MODE]},l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+s.join("|")+")\\b"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:/:/,end:/[;}{]/,relevance:0,contains:[l.BLOCK_COMMENT,E,l.HEXCOLOR,l.CSS_NUMBER_MODE,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,l.IMPORTANT,l.FUNCTION_DISPATCH]},{begin:"@(page|font-face)",keywords:{$pattern:h,keyword:"@page @font-face"}},{begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,keyword:p,attribute:n.join(" ")},contains:[{begin:h,className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"},E,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,l.HEXCOLOR,l.CSS_NUMBER_MODE]},l.FUNCTION_DISPATCH]}}return Nr=o,Nr}var Tr,Fs;function rh(){if(Fs)return Tr;Fs=1;function t(e){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}return Tr=t,Tr}var Rr,$s;function ih(){if($s)return Rr;$s=1;function t(e){const n=e.regex,r=e.COMMENT("--","$"),i={className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},s={begin:/"/,end:/"/,contains:[{begin:/""/}]},o=["true","false","unknown"],a=["double precision","large object","with timezone","without timezone"],l=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],u=["add","asc","collation","desc","final","first","last","view"],c=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],h=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],p=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],f=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],E=h,y=[...c,...u].filter(k=>!h.includes(k)),N={className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},x={className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},C={begin:n.concat(/\b/,n.either(...E),/\s*\(/),relevance:0,keywords:{built_in:E}};function U(k,{exceptions:K,when:X}={}){const te=X;return K=K||[],k.map(H=>H.match(/\|\d+$/)||K.includes(H)?H:te(H)?`${H}|0`:H)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:U(y,{when:k=>k.length<3}),literal:o,type:l,built_in:p},contains:[{begin:n.either(...f),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:y.concat(f),literal:o,type:l}},{className:"type",begin:n.either(...a)},C,N,i,s,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,r,x]}}return Rr=t,Rr}var Or,Ks;function sh(){if(Ks)return Or;Ks=1;function t(H){return H?typeof H=="string"?H:H.source:null}function e(H){return n("(?=",H,")")}function n(...H){return H.map(de=>t(de)).join("")}function r(H){const j=H[H.length-1];return typeof j=="object"&&j.constructor===Object?(H.splice(H.length-1,1),j):{}}function i(...H){return"("+(r(H).capture?"":"?:")+H.map(ae=>t(ae)).join("|")+")"}const s=H=>n(/\b/,H,/\w$/.test(H)?/\b/:/\B/),o=["Protocol","Type"].map(s),a=["init","self"].map(s),l=["Any","Self"],u=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],c=["false","nil","true"],h=["assignment","associativity","higherThan","left","lowerThan","none","right"],p=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],f=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],E=i(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),y=i(E,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),N=n(E,y,"*"),x=i(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),C=i(x,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),U=n(x,C,"*"),k=n(/[A-Z]/,C,"*"),K=["attached","autoclosure",n(/convention\(/,i("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",n(/objc\(/,U,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],X=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function te(H){const j={match:/\s+/,relevance:0},de=H.COMMENT("/\\*","\\*/",{contains:["self"]}),ae=[H.C_LINE_COMMENT_MODE,de],be={match:[/\./,i(...o,...a)],className:{2:"keyword"}},ye={match:n(/\./,i(...u)),relevance:0},fe=u.filter(pe=>typeof pe=="string").concat(["_|0"]),le=u.filter(pe=>typeof pe!="string").concat(l).map(s),oe={variants:[{className:"keyword",match:i(...le,...a)}]},v={$pattern:i(/\b\w+/,/#\w+/),keyword:fe.concat(p),literal:c},R=[be,ye,oe],W={match:n(/\./,i(...f)),relevance:0},ne={className:"built_in",match:n(/\b/,i(...f),/(?=\()/)},ie=[W,ne],ce={match:/->/,relevance:0},ve={className:"operator",relevance:0,variants:[{match:N},{match:`\\.(\\.|${y})+`}]},we=[ce,ve],_="([0-9]_*)+",I="([0-9a-fA-F]_*)+",O={className:"number",relevance:0,variants:[{match:`\\b(${_})(\\.(${_}))?([eE][+-]?(${_}))?\\b`},{match:`\\b0x(${I})(\\.(${I}))?([pP][+-]?(${_}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},P=(pe="")=>({className:"subst",variants:[{match:n(/\\/,pe,/[0\\tnr"']/)},{match:n(/\\/,pe,/u\{[0-9a-fA-F]{1,8}\}/)}]}),Z=(pe="")=>({className:"subst",match:n(/\\/,pe,/[\t ]*(?:[\r\n]|\r\n)/)}),se=(pe="")=>({className:"subst",label:"interpol",begin:n(/\\/,pe,/\(/),end:/\)/}),G=(pe="")=>({begin:n(pe,/"""/),end:n(/"""/,pe),contains:[P(pe),Z(pe),se(pe)]}),d=(pe="")=>({begin:n(pe,/"/),end:n(/"/,pe),contains:[P(pe),se(pe)]}),g={className:"string",variants:[G(),G("#"),G("##"),G("###"),d(),d("#"),d("##"),d("###")]},b=[H.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[H.BACKSLASH_ESCAPE]}],w={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:b},A=pe=>{const on=n(pe,/\//),Ut=n(/\//,pe);return{begin:on,end:Ut,contains:[...b,{scope:"comment",begin:`#(?!.*${Ut})`,end:/$/}]}},L={scope:"regexp",variants:[A("###"),A("##"),A("#"),w]},B={match:n(/`/,U,/`/)},m={className:"variable",match:/\$\d+/},D={className:"variable",match:`\\$${C}+`},S=[B,m,D],q={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:X,contains:[...we,O,g]}]}},z={scope:"keyword",match:n(/@/,i(...K))},F={scope:"meta",match:n(/@/,U)},Y=[q,z,F],V={match:e(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:n(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,C,"+")},{className:"type",match:k,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:n(/\s+&\s+/,e(k)),relevance:0}]},T={begin:/</,end:/>/,keywords:v,contains:[...ae,...R,...Y,ce,V]};V.contains.push(T);const M={match:n(U,/\s*:/),keywords:"_|0",relevance:0},$={begin:/\(/,end:/\)/,relevance:0,keywords:v,contains:["self",M,...ae,L,...R,...ie,...we,O,g,...S,...Y,V]},J={begin:/</,end:/>/,keywords:"repeat each",contains:[...ae,V]},me={begin:i(e(n(U,/\s*:/)),e(n(U,/\s+/,U,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:U}]},Oe={begin:/\(/,end:/\)/,keywords:v,contains:[me,...ae,...R,...we,O,g,...Y,V,$],endsParent:!0,illegal:/["']/},Ze={match:[/(func|macro)/,/\s+/,i(B.match,U,N)],className:{1:"keyword",3:"title.function"},contains:[J,Oe,j],illegal:[/\[/,/%/]},yt={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[J,Oe,j],illegal:/\[|%/},Ce={match:[/operator/,/\s+/,N],className:{1:"keyword",3:"title"}},De={begin:[/precedencegroup/,/\s+/,k],className:{1:"keyword",3:"title"},contains:[V],keywords:[...h,...c],end:/}/};for(const pe of g.variants){const on=pe.contains.find(La=>La.label==="interpol");on.keywords=v;const Ut=[...R,...ie,...we,O,g,...S];on.contains=[...Ut,{begin:/\(/,end:/\)/,contains:["self",...Ut]}]}return{name:"Swift",keywords:v,contains:[...ae,Ze,yt,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:v,contains:[H.inherit(H.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...R]},Ce,De,{beginKeywords:"import",end:/$/,contains:[...ae],relevance:0},L,...R,...ie,...we,O,g,...S,...Y,V,$]}}return Or=te,Or}var Cr,Gs;function oh(){if(Gs)return Cr;Gs=1;function t(e){const n="true false yes no null",r="[\\w#;/?:@&=+$,.~*'()[\\]]+",i={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},s={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},o={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,s]},a=e.inherit(o,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l="[0-9]{4}(-[0-9][0-9]){0,2}",u="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",c="(\\.[0-9]*)?",h="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",p={className:"number",begin:"\\b"+l+u+c+h+"\\b"},f={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},E={begin:/\{/,end:/\}/,contains:[f],illegal:"\\n",relevance:0},y={begin:"\\[",end:"\\]",contains:[f],illegal:"\\n",relevance:0},N=[i,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+r},{className:"type",begin:"!<"+r+">"},{className:"type",begin:"!"+r},{className:"type",begin:"!!"+r},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},p,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},E,y,o],x=[...N];return x.pop(),x.push(a),f.contains=x,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:N}}return Cr=t,Cr}var kr,Ws;function ah(){if(Ws)return kr;Ws=1;const t="[A-Za-z$_][0-9A-Za-z$_]*",e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],r=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],i=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],s=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],o=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],a=[].concat(s,r,i);function l(c){const h=c.regex,p=(P,{after:Z})=>{const se="</"+P[0].slice(1);return P.input.indexOf(se,Z)!==-1},f=t,E={begin:"<>",end:"</>"},y=/<[A-Za-z0-9\\._:-]+\s*\/>/,N={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(P,Z)=>{const se=P[0].length+P.index,G=P.input[se];if(G==="<"||G===","){Z.ignoreMatch();return}G===">"&&(p(P,{after:se})||Z.ignoreMatch());let d;const g=P.input.substring(se);if(d=g.match(/^\s*=/)){Z.ignoreMatch();return}if((d=g.match(/^\s+extends\s+/))&&d.index===0){Z.ignoreMatch();return}}},x={$pattern:t,keyword:e,literal:n,built_in:a,"variable.language":o},C="[0-9](_?[0-9])*",U=`\\.(${C})`,k="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",K={className:"number",variants:[{begin:`(\\b(${k})((${U})|\\.)?|(${U}))[eE][+-]?(${C})\\b`},{begin:`\\b(${k})\\b((${U})\\b|\\.)?|(${U})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},X={className:"subst",begin:"\\$\\{",end:"\\}",keywords:x,contains:[]},te={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,X],subLanguage:"xml"}},H={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,X],subLanguage:"css"}},j={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,X],subLanguage:"graphql"}},de={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,X]},be={className:"comment",variants:[c.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:f+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]},ye=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,te,H,j,de,{match:/\$\d+/},K];X.contains=ye.concat({begin:/\{/,end:/\}/,keywords:x,contains:["self"].concat(ye)});const fe=[].concat(be,X.contains),le=fe.concat([{begin:/\(/,end:/\)/,keywords:x,contains:["self"].concat(fe)}]),oe={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:x,contains:le},v={variants:[{match:[/class/,/\s+/,f,/\s+/,/extends/,/\s+/,h.concat(f,"(",h.concat(/\./,f),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,f],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,match:h.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...r,...i]}},W={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ne={variants:[{match:[/function/,/\s+/,f,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[oe],illegal:/%/},ie={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ce(P){return h.concat("(?!",P.join("|"),")")}const ve={match:h.concat(/\b/,ce([...s,"super","import"]),f,h.lookahead(/\(/)),className:"title.function",relevance:0},we={begin:h.concat(/\./,h.lookahead(h.concat(f,/(?![0-9A-Za-z$_(])/))),end:f,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},_={match:[/get|set/,/\s+/,f,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},oe]},I="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,f,/\s*/,/=\s*/,/(async\s*)?/,h.lookahead(I)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[oe]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:x,exports:{PARAMS_CONTAINS:le,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",relevance:5}),W,c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,te,H,j,de,be,{match:/\$\d+/},K,R,{className:"attr",begin:f+h.lookahead(":"),relevance:0},O,{begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[be,c.REGEXP_MODE,{className:"function",begin:I,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:c.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:x,contains:le}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E.begin,end:E.end},{match:y},{begin:N.begin,"on:begin":N.isTrulyOpeningTag,end:N.end}],subLanguage:"xml",contains:[{begin:N.begin,end:N.end,skip:!0,contains:["self"]}]}]},ne,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[oe,c.inherit(c.TITLE_MODE,{begin:f,className:"title.function"})]},{match:/\.\.\./,relevance:0},we,{match:"\\$"+f,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[oe]},ve,ie,v,_,{match:/\$[(.]/}]}}function u(c){const h=l(c),p=t,f=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],E={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[h.exports.CLASS_REFERENCE]},y={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:f},contains:[h.exports.CLASS_REFERENCE]},N={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},x=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],C={$pattern:t,keyword:e.concat(x),literal:n,built_in:a.concat(f),"variable.language":o},U={className:"meta",begin:"@"+p},k=(X,te,H)=>{const j=X.contains.findIndex(de=>de.label===te);if(j===-1)throw new Error("can not find mode to replace");X.contains.splice(j,1,H)};Object.assign(h.keywords,C),h.exports.PARAMS_CONTAINS.push(U),h.contains=h.contains.concat([U,E,y]),k(h,"shebang",c.SHEBANG()),k(h,"use_strict",N);const K=h.contains.find(X=>X.label==="func.def");return K.relevance=0,Object.assign(h,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),h}return kr=u,kr}var Mr,Ys;function lh(){if(Ys)return Mr;Ys=1;function t(e){const n=e.regex,r={className:"string",begin:/"(""|[^/n])"C\b/},i={className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},s=/\d{1,2}\/\d{1,2}\/\d{4}/,o=/\d{4}-\d{1,2}-\d{1,2}/,a=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,l=/\d{1,2}(:\d{1,2}){1,2}/,u={className:"literal",variants:[{begin:n.concat(/# */,n.either(o,s),/ *#/)},{begin:n.concat(/# */,l,/ *#/)},{begin:n.concat(/# */,a,/ *#/)},{begin:n.concat(/# */,n.either(o,s),/ +/,n.either(a,l),/ *#/)}]},c={className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},h={className:"label",begin:/^\w+:/},p=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),f=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[r,i,u,c,h,p,f,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{keyword:"const disable else elseif enable end externalsource if region then"},contains:[f]}]}}return Mr=t,Mr}var Lr,Zs;function ch(){if(Zs)return Lr;Zs=1;function t(e){e.regex;const n=e.COMMENT(/\(;/,/;\)/);n.contains.push("self");const r=e.COMMENT(/;;/,/$/),i=["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"],s={begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",3:"title.function"}},o={className:"variable",begin:/\$[\w_]+/},a={match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},l={className:"number",relevance:0,match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/},u={match:/(i32|i64|f32|f64)(?!\.)/,className:"type"},c={className:"keyword",match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/};return{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,keyword:i},contains:[r,n,{match:[/(?:offset|align)/,/\s*/,/=/],className:{1:"keyword",3:"operator"}},o,a,s,e.QUOTE_STRING_MODE,u,c,l]}}return Lr=t,Lr}var re=ya;re.registerLanguage("xml",Rd());re.registerLanguage("bash",Od());re.registerLanguage("c",Cd());re.registerLanguage("cpp",kd());re.registerLanguage("csharp",Md());re.registerLanguage("css",Ld());re.registerLanguage("markdown",Id());re.registerLanguage("diff",Dd());re.registerLanguage("ruby",qd());re.registerLanguage("go",Pd());re.registerLanguage("graphql",Bd());re.registerLanguage("ini",Ud());re.registerLanguage("java",zd());re.registerLanguage("javascript",Hd());re.registerLanguage("json",Fd());re.registerLanguage("kotlin",$d());re.registerLanguage("less",Kd());re.registerLanguage("lua",Gd());re.registerLanguage("makefile",Wd());re.registerLanguage("perl",Yd());re.registerLanguage("objectivec",Zd());re.registerLanguage("php",Vd());re.registerLanguage("php-template",Xd());re.registerLanguage("plaintext",Qd());re.registerLanguage("python",Jd());re.registerLanguage("python-repl",jd());re.registerLanguage("r",eh());re.registerLanguage("rust",th());re.registerLanguage("scss",nh());re.registerLanguage("shell",rh());re.registerLanguage("sql",ih());re.registerLanguage("swift",sh());re.registerLanguage("yaml",oh());re.registerLanguage("typescript",ah());re.registerLanguage("vbnet",lh());re.registerLanguage("wasm",ch());re.HighlightJS=re;re.default=re;/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xt=typeof window<"u";function uh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Ir(t,e){const n={};for(const r in e){const i=e[r];n[r]=Fe(i)?i.map(t):t(i)}return n}const Zt=()=>{},Fe=Array.isArray,dh=/\/$/,hh=t=>t.replace(dh,"");function Dr(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=bh(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function ph(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vs(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gh(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&It(e.matched[r],n.matched[i])&&wa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function It(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fh(t[n],e[n]))return!1;return!0}function fh(t,e){return Fe(t)?Xs(t,e):Fe(e)?Xs(e,t):t===e}function Xs(t,e){return Fe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function bh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var rn;(function(t){t.pop="pop",t.push="push"})(rn||(rn={}));var Vt;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vt||(Vt={}));function mh(t){if(!t)if(xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hh(t)}const _h=/^[^#]+#/;function Eh(t,e){return t.replace(_h,"#")+e}function vh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $n=()=>({left:window.pageXOffset,top:window.pageYOffset});function yh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=vh(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qs(t,e){return(history.state?history.state.position-e:-1)+t}const Xr=new Map;function wh(t,e){Xr.set(t,e)}function Sh(t){const e=Xr.get(t);return Xr.delete(t),e}let Ah=()=>location.protocol+"//"+location.host;function Sa(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Vs(l,"")}return Vs(n,t)+r+i}function xh(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const f=Sa(t,location),E=n.value,y=e.value;let N=0;if(p){if(n.value=f,e.value=p,o&&o===E){o=null;return}N=y?p.position-y.position:0}else r(f);i.forEach(x=>{x(n.value,E,{delta:N,type:rn.pop,direction:N?N>0?Vt.forward:Vt.back:Vt.unknown})})};function l(){o=n.value}function u(p){i.push(p);const f=()=>{const E=i.indexOf(p);E>-1&&i.splice(E,1)};return s.push(f),f}function c(){const{history:p}=window;p.state&&p.replaceState(ge({},p.state,{scroll:$n()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:h}}function Js(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?$n():null}}function Nh(t){const{history:e,location:n}=window,r={value:Sa(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Ah()+t+l;try{e[c?"replaceState":"pushState"](u,"",p),i.value=u}catch(f){console.error(f),n[c?"replace":"assign"](p)}}function o(l,u){const c=ge({},e.state,Js(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});s(l,c,!0),r.value=l}function a(l,u){const c=ge({},i.value,e.state,{forward:l,scroll:$n()});s(c.current,c,!0);const h=ge({},Js(r.value,l,null),{position:c.position+1},u);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Th(t){t=mh(t);const e=Nh(t),n=xh(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ge({location:"",base:t,go:r,createHref:Eh.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Rh(t){return typeof t=="string"||t&&typeof t=="object"}function Aa(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xa=Symbol("");var js;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(js||(js={}));function Dt(t,e){return ge(new Error,{type:t,[xa]:!0},e)}function Ve(t,e){return t instanceof Error&&xa in t&&(e==null||!!(t.type&e))}const eo="[^/]+?",Oh={sensitive:!1,strict:!1,start:!0,end:!0},Ch=/[.+*?^${}()[\]/\\]/g;function kh(t,e){const n=ge({},Oh,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const p=u[h];let f=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(Ch,"\\$&"),f+=40;else if(p.type===1){const{value:E,repeatable:y,optional:N,regexp:x}=p;s.push({name:E,repeatable:y,optional:N});const C=x||eo;if(C!==eo){f+=10;try{new RegExp(`(${C})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${C}): `+k.message)}}let U=y?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(U=N&&u.length<2?`(?:/${U})`:"/"+U),N&&(U+="?"),i+=U,f+=20,N&&(f+=-8),y&&(f+=-20),C===".*"&&(f+=-50)}c.push(f)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let p=1;p<c.length;p++){const f=c[p]||"",E=s[p-1];h[E.name]=f&&E.repeatable?f.split("/"):f}return h}function l(u){let c="",h=!1;for(const p of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const f of p)if(f.type===0)c+=f.value;else if(f.type===1){const{value:E,repeatable:y,optional:N}=f,x=E in u?u[E]:"";if(Fe(x)&&!y)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const C=Fe(x)?x.join("/"):x;if(!C)if(N)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);c+=C}}return c||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function Mh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lh(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=Mh(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(to(r))return 1;if(to(i))return-1}return i.length-r.length}function to(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ih={type:0,value:""},Dh=/[a-zA-Z0-9_]/;function qh(t){if(!t)return[[]];if(t==="/")return[[Ih]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,u="",c="";function h(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Dh.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function Ph(t,e,n){const r=kh(qh(t.path),n),i=ge(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Bh(t,e){const n=[],r=new Map;e=io({strict:!1,end:!0,sensitive:!1},e);function i(c){return r.get(c)}function s(c,h,p){const f=!p,E=Uh(c);E.aliasOf=p&&p.record;const y=io(e,c),N=[E];if("alias"in c){const U=typeof c.alias=="string"?[c.alias]:c.alias;for(const k of U)N.push(ge({},E,{components:p?p.record.components:E.components,path:k,aliasOf:p?p.record:E}))}let x,C;for(const U of N){const{path:k}=U;if(h&&k[0]!=="/"){const K=h.record.path,X=K[K.length-1]==="/"?"":"/";U.path=h.record.path+(k&&X+k)}if(x=Ph(U,h,y),p?p.alias.push(x):(C=C||x,C!==x&&C.alias.push(x),f&&c.name&&!ro(x)&&o(c.name)),E.children){const K=E.children;for(let X=0;X<K.length;X++)s(K[X],x,p&&p.children[X])}p=p||x,l(x)}return C?()=>{o(C)}:Zt}function o(c){if(Aa(c)){const h=r.get(c);h&&(r.delete(c),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(c);h>-1&&(n.splice(h,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let h=0;for(;h<n.length&&Lh(c,n[h])>=0&&(c.record.path!==n[h].record.path||!Na(c,n[h]));)h++;n.splice(h,0,c),c.record.name&&!ro(c)&&r.set(c.record.name,c)}function u(c,h){let p,f={},E,y;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Dt(1,{location:c});y=p.record.name,f=ge(no(h.params,p.keys.filter(C=>!C.optional).map(C=>C.name)),c.params&&no(c.params,p.keys.map(C=>C.name))),E=p.stringify(f)}else if("path"in c)E=c.path,p=n.find(C=>C.re.test(E)),p&&(f=p.parse(E),y=p.record.name);else{if(p=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!p)throw Dt(1,{location:c,currentLocation:h});y=p.record.name,f=ge({},h.params,c.params),E=p.stringify(f)}const N=[];let x=p;for(;x;)N.unshift(x.record),x=x.parent;return{name:y,path:E,params:f,matched:N,meta:Hh(N)}}return t.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function no(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Uh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ro(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hh(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function io(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Na(t,e){return e.children.some(n=>n===t||Na(t,n))}const Ta=/#/g,Fh=/&/g,$h=/\//g,Kh=/=/g,Gh=/\?/g,Ra=/\+/g,Wh=/%5B/g,Yh=/%5D/g,Oa=/%5E/g,Zh=/%60/g,Ca=/%7B/g,Vh=/%7C/g,ka=/%7D/g,Xh=/%20/g;function Ai(t){return encodeURI(""+t).replace(Vh,"|").replace(Wh,"[").replace(Yh,"]")}function Qh(t){return Ai(t).replace(Ca,"{").replace(ka,"}").replace(Oa,"^")}function Qr(t){return Ai(t).replace(Ra,"%2B").replace(Xh,"+").replace(Ta,"%23").replace(Fh,"%26").replace(Zh,"`").replace(Ca,"{").replace(ka,"}").replace(Oa,"^")}function Jh(t){return Qr(t).replace(Kh,"%3D")}function jh(t){return Ai(t).replace(Ta,"%23").replace(Gh,"%3F")}function ep(t){return t==null?"":jh(t).replace($h,"%2F")}function Rn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Ra," "),o=s.indexOf("="),a=Rn(o<0?s:s.slice(0,o)),l=o<0?null:Rn(s.slice(o+1));if(a in e){let u=e[a];Fe(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function so(t){let e="";for(let n in t){const r=t[n];if(n=Jh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fe(r)?r.map(s=>s&&Qr(s)):[r&&Qr(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function np(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const rp=Symbol(""),oo=Symbol(""),Kn=Symbol(""),xi=Symbol(""),Jr=Symbol("");function Ht(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function rt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Dt(4,{from:n,to:e})):h instanceof Error?a(h):Rh(h)?a(Dt(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,l);let c=Promise.resolve(u);t.length<3&&(c=c.then(l)),c.catch(h=>a(h))})}function qr(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(ip(a)){const u=(a.__vccOpts||a)[e];u&&i.push(rt(u,n,r,s,o))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const c=uh(u)?u.default:u;s.components[o]=c;const p=(c.__vccOpts||c)[e];return p&&rt(p,n,r,s,o)()}))}}return i}function ip(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ao(t){const e=He(Kn),n=He(xi),r=Te(()=>e.resolve(gt(t.to))),i=Te(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],h=n.matched;if(!c||!h.length)return-1;const p=h.findIndex(It.bind(null,c));if(p>-1)return p;const f=lo(l[u-2]);return u>1&&lo(c)===f&&h[h.length-1].path!==f?h.findIndex(It.bind(null,l[u-2])):p}),s=Te(()=>i.value>-1&&lp(n.params,r.value.params)),o=Te(()=>i.value>-1&&i.value===n.matched.length-1&&wa(n.params,r.value.params));function a(l={}){return ap(l)?e[gt(t.replace)?"replace":"push"](gt(t.to)).catch(Zt):Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const sp=fi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ao,setup(t,{slots:e}){const n=sn(ao(t)),{options:r}=He(Kn),i=Te(()=>({[co(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[co(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Nn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),op=sp;function ap(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lp(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Fe(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function lo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const co=(t,e,n)=>t??e??n,cp=fi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=He(Jr),i=Te(()=>t.route||r.value),s=He(oo,0),o=Te(()=>{let u=gt(s);const{matched:c}=i.value;let h;for(;(h=c[u])&&!h.components;)u++;return u}),a=Te(()=>i.value.matched[o.value]);bn(oo,Te(()=>o.value+1)),bn(rp,a),bn(Jr,i);const l=hi();return Gt(()=>[l.value,a.value,t.name],([u,c,h],[p,f,E])=>{c&&(c.instances[h]=u,f&&f!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),u&&c&&(!f||!It(c,f)||!p)&&(c.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,c=t.name,h=a.value,p=h&&h.components[c];if(!p)return uo(n.default,{Component:p,route:u});const f=h.props[c],E=f?f===!0?u.params:typeof f=="function"?f(u):f:null,N=Nn(p,ge({},E,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[c]=null)},ref:l}));return uo(n.default,{Component:N,route:u})||N}}});function uo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ma=cp;function up(t){const e=Bh(t.routes,t),n=t.parseQuery||tp,r=t.stringifyQuery||so,i=t.history,s=Ht(),o=Ht(),a=Ht(),l=El(tt);let u=tt;xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ir.bind(null,_=>""+_),h=Ir.bind(null,ep),p=Ir.bind(null,Rn);function f(_,I){let O,P;return Aa(_)?(O=e.getRecordMatcher(_),P=I):P=_,e.addRoute(P,O)}function E(_){const I=e.getRecordMatcher(_);I&&e.removeRoute(I)}function y(){return e.getRoutes().map(_=>_.record)}function N(_){return!!e.getRecordMatcher(_)}function x(_,I){if(I=ge({},I||l.value),typeof _=="string"){const d=Dr(n,_,I.path),g=e.resolve({path:d.path},I),b=i.createHref(d.fullPath);return ge(d,g,{params:p(g.params),hash:Rn(d.hash),redirectedFrom:void 0,href:b})}let O;if("path"in _)O=ge({},_,{path:Dr(n,_.path,I.path).path});else{const d=ge({},_.params);for(const g in d)d[g]==null&&delete d[g];O=ge({},_,{params:h(_.params)}),I.params=h(I.params)}const P=e.resolve(O,I),Z=_.hash||"";P.params=c(p(P.params));const se=ph(r,ge({},_,{hash:Qh(Z),path:P.path})),G=i.createHref(se);return ge({fullPath:se,hash:Z,query:r===so?np(_.query):_.query||{}},P,{redirectedFrom:void 0,href:G})}function C(_){return typeof _=="string"?Dr(n,_,l.value.path):ge({},_)}function U(_,I){if(u!==_)return Dt(8,{from:I,to:_})}function k(_){return te(_)}function K(_){return k(ge(C(_),{replace:!0}))}function X(_){const I=_.matched[_.matched.length-1];if(I&&I.redirect){const{redirect:O}=I;let P=typeof O=="function"?O(_):O;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=C(P):{path:P},P.params={}),ge({query:_.query,hash:_.hash,params:"path"in P?{}:_.params},P)}}function te(_,I){const O=u=x(_),P=l.value,Z=_.state,se=_.force,G=_.replace===!0,d=X(O);if(d)return te(ge(C(d),{state:typeof d=="object"?ge({},Z,d.state):Z,force:se,replace:G}),I||O);const g=O;g.redirectedFrom=I;let b;return!se&&gh(r,P,O)&&(b=Dt(16,{to:g,from:P}),ne(P,P,!0,!1)),(b?Promise.resolve(b):j(g,P)).catch(w=>Ve(w)?Ve(w,2)?w:W(w):v(w,g,P)).then(w=>{if(w){if(Ve(w,2))return te(ge({replace:G},C(w.to),{state:typeof w.to=="object"?ge({},Z,w.to.state):Z,force:se}),I||g)}else w=ae(g,P,!0,G,Z);return de(g,P,w),w})}function H(_,I){const O=U(_,I);return O?Promise.reject(O):Promise.resolve()}function j(_,I){let O;const[P,Z,se]=dp(_,I);O=qr(P.reverse(),"beforeRouteLeave",_,I);for(const d of P)d.leaveGuards.forEach(g=>{O.push(rt(g,_,I))});const G=H.bind(null,_,I);return O.push(G),At(O).then(()=>{O=[];for(const d of s.list())O.push(rt(d,_,I));return O.push(G),At(O)}).then(()=>{O=qr(Z,"beforeRouteUpdate",_,I);for(const d of Z)d.updateGuards.forEach(g=>{O.push(rt(g,_,I))});return O.push(G),At(O)}).then(()=>{O=[];for(const d of _.matched)if(d.beforeEnter&&!I.matched.includes(d))if(Fe(d.beforeEnter))for(const g of d.beforeEnter)O.push(rt(g,_,I));else O.push(rt(d.beforeEnter,_,I));return O.push(G),At(O)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),O=qr(se,"beforeRouteEnter",_,I),O.push(G),At(O))).then(()=>{O=[];for(const d of o.list())O.push(rt(d,_,I));return O.push(G),At(O)}).catch(d=>Ve(d,8)?d:Promise.reject(d))}function de(_,I,O){for(const P of a.list())P(_,I,O)}function ae(_,I,O,P,Z){const se=U(_,I);if(se)return se;const G=I===tt,d=xt?history.state:{};O&&(P||G?i.replace(_.fullPath,ge({scroll:G&&d&&d.scroll},Z)):i.push(_.fullPath,Z)),l.value=_,ne(_,I,O,G),W()}let be;function ye(){be||(be=i.listen((_,I,O)=>{if(!we.listening)return;const P=x(_),Z=X(P);if(Z){te(ge(Z,{replace:!0}),P).catch(Zt);return}u=P;const se=l.value;xt&&wh(Qs(se.fullPath,O.delta),$n()),j(P,se).catch(G=>Ve(G,12)?G:Ve(G,2)?(te(G.to,P).then(d=>{Ve(d,20)&&!O.delta&&O.type===rn.pop&&i.go(-1,!1)}).catch(Zt),Promise.reject()):(O.delta&&i.go(-O.delta,!1),v(G,P,se))).then(G=>{G=G||ae(P,se,!1),G&&(O.delta&&!Ve(G,8)?i.go(-O.delta,!1):O.type===rn.pop&&Ve(G,20)&&i.go(-1,!1)),de(P,se,G)}).catch(Zt)}))}let fe=Ht(),le=Ht(),oe;function v(_,I,O){W(_);const P=le.list();return P.length?P.forEach(Z=>Z(_,I,O)):console.error(_),Promise.reject(_)}function R(){return oe&&l.value!==tt?Promise.resolve():new Promise((_,I)=>{fe.add([_,I])})}function W(_){return oe||(oe=!_,ye(),fe.list().forEach(([I,O])=>_?O(_):I()),fe.reset()),_}function ne(_,I,O,P){const{scrollBehavior:Z}=t;if(!xt||!Z)return Promise.resolve();const se=!O&&Sh(Qs(_.fullPath,0))||(P||!O)&&history.state&&history.state.scroll||null;return Po().then(()=>Z(_,I,se)).then(G=>G&&yh(G)).catch(G=>v(G,_,I))}const ie=_=>i.go(_);let ce;const ve=new Set,we={currentRoute:l,listening:!0,addRoute:f,removeRoute:E,hasRoute:N,getRoutes:y,resolve:x,options:t,push:k,replace:K,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:R,install(_){const I=this;_.component("RouterLink",op),_.component("RouterView",Ma),_.config.globalProperties.$router=I,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(l)}),xt&&!ce&&l.value===tt&&(ce=!0,k(i.location).catch(Z=>{}));const O={};for(const Z in tt)O[Z]=Te(()=>l.value[Z]);_.provide(Kn,I),_.provide(xi,sn(O)),_.provide(Jr,l);const P=_.unmount;ve.add(_),_.unmount=function(){ve.delete(_),ve.size<1&&(u=tt,be&&be(),be=null,l.value=tt,ce=!1,oe=!1),P()}}};return we}function At(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function dp(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>It(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>It(u,l))||i.push(l))}return[n,r,i]}function hp(){return He(Kn)}function pp(){return He(xi)}function gp(t){let e=0;const n=document.createElement("div"),r=document.createElement("img");n.style.transition="all 1s",n.style.position="fixed",n.style.width="100%",n.style.height="100%",n.style.backgroundImage=`url(${t[e]})`,n.style.backgroundSize="cover",n.style.backgroundPosition="center center",r.style.display="none",r.setAttribute("src",t[e<t.length-1?e+1:0]),document.body.prepend(n),document.body.prepend(r),setInterval(()=>{e<t.length-1?e++:e=0,n.style.backgroundImage=`url(${t[e]})`,r.setAttribute("src",t[e<t.length-1?e+1:0])},10*60*1e3)}const fp={__name:"App",setup(t){return hp(),pp(),Wo(e=>{gp(["https://picsum.photos/1920/1080"])}),(e,n)=>(na(),ia(gt(Ma)))}},bp="modulepreload",mp=function(t){return"/"+t},ho={},Ft=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=mp(o),o in ho)return;ho[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=s.length-1;h>=0;h--){const p=s[h];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":bp,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((h,p)=>{c.addEventListener("load",h),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},_p=up({history:Th("/"),routes:[{path:"/",name:"Index",component:()=>Ft(()=>import("./Index-bJlufklH.js"),__vite__mapDeps([0,1,2,3]))},{path:"/web-components-plus",name:"WebComponentsPlus",component:()=>Ft(()=>import("./WebComponentsPlus-T2jdBUWY.js"),__vite__mapDeps([4,1,2,5,6]))},{path:"/dictionary",name:"Dictionary",component:()=>Ft(()=>import("./Dictionary-K6rWL7Uj.js"),__vite__mapDeps([7,1,2,8]))},{path:"/resume",name:"Resume",component:()=>Ft(()=>import("./Resume-I67RiLkS.js"),__vite__mapDeps([9,1,2,10,6]))},{path:"/:pathMatch(.*)*",name:"404",component:()=>Ft(()=>import("./NotFound-4Ihk14FM.js"),__vite__mapDeps([11,1,2,12]))}]});En.initColor();window.addEventListener("contextmenu",t=>(t.preventDefault(),!1));const Bt=nu(fp),Ep=ou();Bt.config.warnHandler=()=>null;Bt.directive("highlight",function(t){t.querySelectorAll("pre code").forEach(n=>{vn.highlightElement(n)})});Bt.use(_p);Bt.use(Ep);Bt.use(Td);Bt.mount("#app");export{Qe as F,Le as a,Sp as b,Tp as c,oa as d,Wo as e,Yo as f,Np as g,vc as h,En as i,Mp as j,Rp as k,Ap as l,Op as m,ia as n,na as o,wp as p,Gt as q,hi as r,Cp as s,yp as t,hp as u,au as v,xp as w,gt as x};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Index-bJlufklH.js","assets/Header-7L8a7T1d.js","assets/Header--cm94hXw.css","assets/Index-CDDQk4zf.css","assets/WebComponentsPlus-T2jdBUWY.js","assets/WebComponentsPlus-xykCdBVi.css","assets/WebComponentsPlusDemo-B-8B107-.css","assets/Dictionary-K6rWL7Uj.js","assets/Dictionary-J-ospy2T.css","assets/Resume-I67RiLkS.js","assets/Resume-q2EnHiBx.css","assets/NotFound-4Ihk14FM.js","assets/NotFound-tofmWgTd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}