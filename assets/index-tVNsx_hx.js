var Ri=Object.defineProperty;var Li=(t,e,r)=>e in t?Ri(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ws=(t,e,r)=>(Li(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Jr(t,e){const r=Object.create(null),s=t.split(",");for(let o=0;o<s.length;o++)r[s[o]]=!0;return e?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const X={},pt=[],He=()=>{},ki=()=>!1,Ci=/^on[^a-z]/,ur=t=>Ci.test(t),Qr=t=>t.startsWith("onUpdate:"),oe=Object.assign,Xr=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},Ti=Object.prototype.hasOwnProperty,B=(t,e)=>Ti.call(t,e),z=Array.isArray,gt=t=>dr(t)==="[object Map]",bo=t=>dr(t)==="[object Set]",j=t=>typeof t=="function",re=t=>typeof t=="string",hr=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",mo=t=>(Z(t)||j(t))&&j(t.then)&&j(t.catch),vo=Object.prototype.toString,dr=t=>vo.call(t),Oi=t=>dr(t).slice(8,-1),yo=t=>dr(t)==="[object Object]",Zr=t=>re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xt=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},Mi=/-(\w)/g,vt=fr(t=>t.replace(Mi,(e,r)=>r?r.toUpperCase():"")),Hi=/\B([A-Z])/g,it=fr(t=>t.replace(Hi,"-$1").toLowerCase()),wo=fr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ar=fr(t=>t?`on${wo(t)}`:""),st=(t,e)=>!Object.is(t,e),Er=(t,e)=>{for(let r=0;r<t.length;r++)t[r](e)},or=(t,e,r)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:r})},Pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _s;const Mr=()=>_s||(_s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(t){if(z(t)){const e={};for(let r=0;r<t.length;r++){const s=t[r],o=re(s)?ji(s):Gr(s);if(o)for(const i in o)e[i]=o[i]}return e}else if(re(t)||Z(t))return t}const zi=/;(?![^(]*\))/g,Ii=/:([^]+)/,Fi=/\/\*[^]*?\*\//g;function ji(t){const e={};return t.replace(Fi,"").split(zi).forEach(r=>{if(r){const s=r.split(Ii);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function es(t){let e="";if(re(t))e=t;else if(z(t))for(let r=0;r<t.length;r++){const s=es(t[r]);s&&(e+=s+" ")}else if(Z(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const $i="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ni=Jr($i);function _o(t){return!!t||t===""}const Pc=t=>re(t)?t:t==null?"":z(t)||Z(t)&&(t.toString===vo||!j(t.toString))?JSON.stringify(t,xo,2):String(t),xo=(t,e)=>e&&e.__v_isRef?xo(t,e.value):gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[s,o])=>(r[`${s} =>`]=o,r),{})}:bo(e)?{[`Set(${e.size})`]:[...e.values()]}:Z(e)&&!z(e)&&!yo(e)?String(e):e;let we;class So{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const r=we;try{return we=this,e()}finally{we=r}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.scopes)for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Di(t){return new So(t)}function Bi(t,e=we){e&&e.active&&e.effects.push(t)}function Ui(){return we}const ts=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ao=t=>(t.w&Ve)>0,Eo=t=>(t.n&Ve)>0,Ki=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ve},Wi=t=>{const{deps:e}=t;if(e.length){let r=0;for(let s=0;s<e.length;s++){const o=e[s];Ao(o)&&!Eo(o)?o.delete(t):e[r++]=o,o.w&=~Ve,o.n&=~Ve}e.length=r}},Hr=new WeakMap;let Ct=0,Ve=1;const Pr=30;let _e;const et=Symbol(""),zr=Symbol("");class rs{constructor(e,r=null,s){this.fn=e,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Bi(this,s)}run(){if(!this.active)return this.fn();let e=_e,r=Ke;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_e,_e=this,Ke=!0,Ve=1<<++Ct,Ct<=Pr?Ki(this):xs(this),this.fn()}finally{Ct<=Pr&&Wi(this),Ve=1<<--Ct,_e=this.parent,Ke=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(xs(this),this.onStop&&this.onStop(),this.active=!1)}}function xs(t){const{deps:e}=t;if(e.length){for(let r=0;r<e.length;r++)e[r].delete(t);e.length=0}}let Ke=!0;const qo=[];function At(){qo.push(Ke),Ke=!1}function Et(){const t=qo.pop();Ke=t===void 0?!0:t}function fe(t,e,r){if(Ke&&_e){let s=Hr.get(t);s||Hr.set(t,s=new Map);let o=s.get(r);o||s.set(r,o=ts()),Ro(o)}}function Ro(t,e){let r=!1;Ct<=Pr?Eo(t)||(t.n|=Ve,r=!Ao(t)):r=!t.has(_e),r&&(t.add(_e),_e.deps.push(t))}function Fe(t,e,r,s,o,i){const n=Hr.get(t);if(!n)return;let c=[];if(e==="clear")c=[...n.values()];else if(r==="length"&&z(t)){const l=Number(s);n.forEach((h,u)=>{(u==="length"||!hr(u)&&u>=l)&&c.push(h)})}else switch(r!==void 0&&c.push(n.get(r)),e){case"add":z(t)?Zr(r)&&c.push(n.get("length")):(c.push(n.get(et)),gt(t)&&c.push(n.get(zr)));break;case"delete":z(t)||(c.push(n.get(et)),gt(t)&&c.push(n.get(zr)));break;case"set":gt(t)&&c.push(n.get(et));break}if(c.length===1)c[0]&&Ir(c[0]);else{const l=[];for(const h of c)h&&l.push(...h);Ir(ts(l))}}function Ir(t,e){const r=z(t)?t:[...t];for(const s of r)s.computed&&Ss(s);for(const s of r)s.computed||Ss(s)}function Ss(t,e){(t!==_e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Vi=Jr("__proto__,__v_isRef,__isVue"),Lo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hr)),As=Yi();function Yi(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...r){const s=K(this);for(let i=0,n=this.length;i<n;i++)fe(s,"get",i+"");const o=s[e](...r);return o===-1||o===!1?s[e](...r.map(K)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...r){At();const s=K(this)[e].apply(this,r);return Et(),s}}),t}function Ji(t){const e=K(this);return fe(e,"has",t),e.hasOwnProperty(t)}class ko{constructor(e=!1,r=!1){this._isReadonly=e,this._shallow=r}get(e,r,s){const o=this._isReadonly,i=this._shallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return i;if(r==="__v_raw"&&s===(o?i?cn:Mo:i?Oo:To).get(e))return e;const n=z(e);if(!o){if(n&&B(As,r))return Reflect.get(As,r,s);if(r==="hasOwnProperty")return Ji}const c=Reflect.get(e,r,s);return(hr(r)?Lo.has(r):Vi(r))||(o||fe(e,"get",r),i)?c:ae(c)?n&&Zr(r)?c:c.value:Z(c)?o?Ho(c):Dt(c):c}}class Co extends ko{constructor(e=!1){super(!1,e)}set(e,r,s,o){let i=e[r];if(yt(i)&&ae(i)&&!ae(s))return!1;if(!this._shallow&&(!ir(s)&&!yt(s)&&(i=K(i),s=K(s)),!z(e)&&ae(i)&&!ae(s)))return i.value=s,!0;const n=z(e)&&Zr(r)?Number(r)<e.length:B(e,r),c=Reflect.set(e,r,s,o);return e===K(o)&&(n?st(s,i)&&Fe(e,"set",r,s):Fe(e,"add",r,s)),c}deleteProperty(e,r){const s=B(e,r);e[r];const o=Reflect.deleteProperty(e,r);return o&&s&&Fe(e,"delete",r,void 0),o}has(e,r){const s=Reflect.has(e,r);return(!hr(r)||!Lo.has(r))&&fe(e,"has",r),s}ownKeys(e){return fe(e,"iterate",z(e)?"length":et),Reflect.ownKeys(e)}}class Qi extends ko{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const Xi=new Co,Zi=new Qi,Gi=new Co(!0),ss=t=>t,pr=t=>Reflect.getPrototypeOf(t);function Ut(t,e,r=!1,s=!1){t=t.__v_raw;const o=K(t),i=K(e);r||(st(e,i)&&fe(o,"get",e),fe(o,"get",i));const{has:n}=pr(o),c=s?ss:r?ls:zt;if(n.call(o,e))return c(t.get(e));if(n.call(o,i))return c(t.get(i));t!==o&&t.get(e)}function Kt(t,e=!1){const r=this.__v_raw,s=K(r),o=K(t);return e||(st(t,o)&&fe(s,"has",t),fe(s,"has",o)),t===o?r.has(t):r.has(t)||r.has(o)}function Wt(t,e=!1){return t=t.__v_raw,!e&&fe(K(t),"iterate",et),Reflect.get(t,"size",t)}function Es(t){t=K(t);const e=K(this);return pr(e).has.call(e,t)||(e.add(t),Fe(e,"add",t,t)),this}function qs(t,e){e=K(e);const r=K(this),{has:s,get:o}=pr(r);let i=s.call(r,t);i||(t=K(t),i=s.call(r,t));const n=o.call(r,t);return r.set(t,e),i?st(e,n)&&Fe(r,"set",t,e):Fe(r,"add",t,e),this}function Rs(t){const e=K(this),{has:r,get:s}=pr(e);let o=r.call(e,t);o||(t=K(t),o=r.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return o&&Fe(e,"delete",t,void 0),i}function Ls(){const t=K(this),e=t.size!==0,r=t.clear();return e&&Fe(t,"clear",void 0,void 0),r}function Vt(t,e){return function(s,o){const i=this,n=i.__v_raw,c=K(n),l=e?ss:t?ls:zt;return!t&&fe(c,"iterate",et),n.forEach((h,u)=>s.call(o,l(h),l(u),i))}}function Yt(t,e,r){return function(...s){const o=this.__v_raw,i=K(o),n=gt(i),c=t==="entries"||t===Symbol.iterator&&n,l=t==="keys"&&n,h=o[t](...s),u=r?ss:e?ls:zt;return!e&&fe(i,"iterate",l?zr:et),{next(){const{value:f,done:p}=h.next();return p?{value:f,done:p}:{value:c?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ne(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function en(){const t={get(i){return Ut(this,i)},get size(){return Wt(this)},has:Kt,add:Es,set:qs,delete:Rs,clear:Ls,forEach:Vt(!1,!1)},e={get(i){return Ut(this,i,!1,!0)},get size(){return Wt(this)},has:Kt,add:Es,set:qs,delete:Rs,clear:Ls,forEach:Vt(!1,!0)},r={get(i){return Ut(this,i,!0)},get size(){return Wt(this,!0)},has(i){return Kt.call(this,i,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Vt(!0,!1)},s={get(i){return Ut(this,i,!0,!0)},get size(){return Wt(this,!0)},has(i){return Kt.call(this,i,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Vt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yt(i,!1,!1),r[i]=Yt(i,!0,!1),e[i]=Yt(i,!1,!0),s[i]=Yt(i,!0,!0)}),[t,r,e,s]}const[tn,rn,sn,on]=en();function os(t,e){const r=e?t?on:sn:t?rn:tn;return(s,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?s:Reflect.get(B(r,o)&&o in s?r:s,o,i)}const nn={get:os(!1,!1)},ln={get:os(!1,!0)},an={get:os(!0,!1)},To=new WeakMap,Oo=new WeakMap,Mo=new WeakMap,cn=new WeakMap;function un(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hn(t){return t.__v_skip||!Object.isExtensible(t)?0:un(Oi(t))}function Dt(t){return yt(t)?t:is(t,!1,Xi,nn,To)}function dn(t){return is(t,!1,Gi,ln,Oo)}function Ho(t){return is(t,!0,Zi,an,Mo)}function is(t,e,r,s,o){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=o.get(t);if(i)return i;const n=hn(t);if(n===0)return t;const c=new Proxy(t,n===2?s:r);return o.set(t,c),c}function bt(t){return yt(t)?bt(t.__v_raw):!!(t&&t.__v_isReactive)}function yt(t){return!!(t&&t.__v_isReadonly)}function ir(t){return!!(t&&t.__v_isShallow)}function Po(t){return bt(t)||yt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function ns(t){return or(t,"__v_skip",!0),t}const zt=t=>Z(t)?Dt(t):t,ls=t=>Z(t)?Ho(t):t;function zo(t){Ke&&_e&&(t=K(t),Ro(t.dep||(t.dep=ts())))}function Io(t,e){t=K(t);const r=t.dep;r&&Ir(r)}function ae(t){return!!(t&&t.__v_isRef===!0)}function Fo(t){return jo(t,!1)}function fn(t){return jo(t,!0)}function jo(t,e){return ae(t)?t:new pn(t,e)}class pn{constructor(e,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?e:K(e),this._value=r?e:zt(e)}get value(){return zo(this),this._value}set value(e){const r=this.__v_isShallow||ir(e)||yt(e);e=r?e:K(e),st(e,this._rawValue)&&(this._rawValue=e,this._value=r?e:zt(e),Io(this))}}function tt(t){return ae(t)?t.value:t}const gn={get:(t,e,r)=>tt(Reflect.get(t,e,r)),set:(t,e,r,s)=>{const o=t[e];return ae(o)&&!ae(r)?(o.value=r,!0):Reflect.set(t,e,r,s)}};function $o(t){return bt(t)?t:new Proxy(t,gn)}class bn{constructor(e,r,s,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new rs(e,()=>{this._dirty||(this._dirty=!0,Io(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const e=K(this);return zo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function mn(t,e,r=!1){let s,o;const i=j(t);return i?(s=t,o=He):(s=t.get,o=t.set),new bn(s,o,i||!o,r)}function We(t,e,r,s){let o;try{o=s?t(...s):t()}catch(i){gr(i,e,r)}return o}function Se(t,e,r,s){if(j(t)){const i=We(t,e,r,s);return i&&mo(i)&&i.catch(n=>{gr(n,e,r)}),i}const o=[];for(let i=0;i<t.length;i++)o.push(Se(t[i],e,r,s));return o}function gr(t,e,r,s=!0){const o=e?e.vnode:null;if(e){let i=e.parent;const n=e.proxy,c=r;for(;i;){const h=i.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](t,n,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){We(l,null,10,[t,n,c]);return}}vn(t,r,o,s)}function vn(t,e,r,s=!0){console.error(t)}let It=!1,Fr=!1;const ne=[];let Oe=0;const mt=[];let ze=null,Ze=0;const No=Promise.resolve();let as=null;function Do(t){const e=as||No;return t?e.then(this?t.bind(this):t):e}function yn(t){let e=Oe+1,r=ne.length;for(;e<r;){const s=e+r>>>1,o=ne[s],i=Ft(o);i<t||i===t&&o.pre?e=s+1:r=s}return e}function cs(t){(!ne.length||!ne.includes(t,It&&t.allowRecurse?Oe+1:Oe))&&(t.id==null?ne.push(t):ne.splice(yn(t.id),0,t),Bo())}function Bo(){!It&&!Fr&&(Fr=!0,as=No.then(Ko))}function wn(t){const e=ne.indexOf(t);e>Oe&&ne.splice(e,1)}function _n(t){z(t)?mt.push(...t):(!ze||!ze.includes(t,t.allowRecurse?Ze+1:Ze))&&mt.push(t),Bo()}function ks(t,e=It?Oe+1:0){for(;e<ne.length;e++){const r=ne[e];r&&r.pre&&(ne.splice(e,1),e--,r())}}function Uo(t){if(mt.length){const e=[...new Set(mt)];if(mt.length=0,ze){ze.push(...e);return}for(ze=e,ze.sort((r,s)=>Ft(r)-Ft(s)),Ze=0;Ze<ze.length;Ze++)ze[Ze]();ze=null,Ze=0}}const Ft=t=>t.id==null?1/0:t.id,xn=(t,e)=>{const r=Ft(t)-Ft(e);if(r===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return r};function Ko(t){Fr=!1,It=!0,ne.sort(xn);try{for(Oe=0;Oe<ne.length;Oe++){const e=ne[Oe];e&&e.active!==!1&&We(e,null,14)}}finally{Oe=0,ne.length=0,Uo(),It=!1,as=null,(ne.length||mt.length)&&Ko()}}function Sn(t,e,...r){if(t.isUnmounted)return;const s=t.vnode.props||X;let o=r;const i=e.startsWith("update:"),n=i&&e.slice(7);if(n&&n in s){const u=`${n==="modelValue"?"model":n}Modifiers`,{number:f,trim:p}=s[u]||X;p&&(o=r.map(w=>re(w)?w.trim():w)),f&&(o=r.map(Pi))}let c,l=s[c=Ar(e)]||s[c=Ar(vt(e))];!l&&i&&(l=s[c=Ar(it(e))]),l&&Se(l,t,6,o);const h=s[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Se(h,t,6,o)}}function Wo(t,e,r=!1){const s=e.emitsCache,o=s.get(t);if(o!==void 0)return o;const i=t.emits;let n={},c=!1;if(!j(t)){const l=h=>{const u=Wo(h,e,!0);u&&(c=!0,oe(n,u))};!r&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Z(t)&&s.set(t,null),null):(z(i)?i.forEach(l=>n[l]=null):oe(n,i),Z(t)&&s.set(t,n),n)}function br(t,e){return!t||!ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,it(e))||B(t,e))}let Me=null,mr=null;function nr(t){const e=Me;return Me=t,mr=t&&t.type.__scopeId||null,e}function zc(t){mr=t}function Ic(){mr=null}function An(t,e=Me,r){if(!e||t._n)return t;const s=(...o)=>{s._d&&js(-1);const i=nr(e);let n;try{n=t(...o)}finally{nr(i),s._d&&js(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function qr(t){const{type:e,vnode:r,proxy:s,withProxy:o,props:i,propsOptions:[n],slots:c,attrs:l,emit:h,render:u,renderCache:f,data:p,setupState:w,ctx:L,inheritAttrs:k}=t;let F,P;const M=nr(t);try{if(r.shapeFlag&4){const H=o||s,se=H;F=Te(u.call(se,H,f,i,w,p,L)),P=l}else{const H=e;F=Te(H.length>1?H(i,{attrs:l,slots:c,emit:h}):H(i,null)),P=e.props?l:En(l)}}catch(H){Mt.length=0,gr(H,t,1),F=de(ot)}let U=F;if(P&&k!==!1){const H=Object.keys(P),{shapeFlag:se}=U;H.length&&se&7&&(n&&H.some(Qr)&&(P=qn(P,n)),U=wt(U,P))}return r.dirs&&(U=wt(U),U.dirs=U.dirs?U.dirs.concat(r.dirs):r.dirs),r.transition&&(U.transition=r.transition),F=U,nr(M),F}const En=t=>{let e;for(const r in t)(r==="class"||r==="style"||ur(r))&&((e||(e={}))[r]=t[r]);return e},qn=(t,e)=>{const r={};for(const s in t)(!Qr(s)||!(s.slice(9)in e))&&(r[s]=t[s]);return r};function Rn(t,e,r){const{props:s,children:o,component:i}=t,{props:n,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return s?Cs(s,n,h):!!n;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(n[p]!==s[p]&&!br(h,p))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:s===n?!1:s?n?Cs(s,n,h):!0:!!n;return!1}function Cs(t,e,r){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(e[i]!==t[i]&&!br(r,i))return!0}return!1}function Ln({vnode:t,parent:e},r){for(;e&&e.subTree===t;)(t=e.vnode).el=r,e=e.parent}const kn=Symbol.for("v-ndc"),Cn=t=>t.__isSuspense;function Tn(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):_n(t)}const Jt={};function Zt(t,e,r){return Vo(t,e,r)}function Vo(t,e,{immediate:r,deep:s,flush:o,onTrack:i,onTrigger:n}=X){var c;const l=Ui()===((c=le)==null?void 0:c.scope)?le:null;let h,u=!1,f=!1;if(ae(t)?(h=()=>t.value,u=ir(t)):bt(t)?(h=()=>t,s=!0):z(t)?(f=!0,u=t.some(H=>bt(H)||ir(H)),h=()=>t.map(H=>{if(ae(H))return H.value;if(bt(H))return ft(H);if(j(H))return We(H,l,2)})):j(t)?e?h=()=>We(t,l,2):h=()=>{if(!(l&&l.isUnmounted))return p&&p(),Se(t,l,3,[w])}:h=He,e&&s){const H=h;h=()=>ft(H())}let p,w=H=>{p=M.onStop=()=>{We(H,l,4),p=M.onStop=void 0}},L;if($t)if(w=He,e?r&&Se(e,l,3,[h(),f?[]:void 0,w]):h(),o==="sync"){const H=xl();L=H.__watcherHandles||(H.__watcherHandles=[])}else return He;let k=f?new Array(t.length).fill(Jt):Jt;const F=()=>{if(M.active)if(e){const H=M.run();(s||u||(f?H.some((se,ie)=>st(se,k[ie])):st(H,k)))&&(p&&p(),Se(e,l,3,[H,k===Jt?void 0:f&&k[0]===Jt?[]:k,w]),k=H)}else M.run()};F.allowRecurse=!!e;let P;o==="sync"?P=F:o==="post"?P=()=>he(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),P=()=>cs(F));const M=new rs(h,P);e?r?F():k=M.run():o==="post"?he(M.run.bind(M),l&&l.suspense):M.run();const U=()=>{M.stop(),l&&l.scope&&Xr(l.scope.effects,M)};return L&&L.push(U),U}function On(t,e,r){const s=this.proxy,o=re(t)?t.includes(".")?Yo(s,t):()=>s[t]:t.bind(s,s);let i;j(e)?i=e:(i=e.handler,r=e);const n=le;_t(this);const c=Vo(o,i.bind(s),r);return n?_t(n):rt(),c}function Yo(t,e){const r=e.split(".");return()=>{let s=t;for(let o=0;o<r.length&&s;o++)s=s[r[o]];return s}}function ft(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ae(t))ft(t.value,e);else if(z(t))for(let r=0;r<t.length;r++)ft(t[r],e);else if(bo(t)||gt(t))t.forEach(r=>{ft(r,e)});else if(yo(t))for(const r in t)ft(t[r],e);return t}function Qe(t,e,r,s){const o=t.dirs,i=e&&e.dirs;for(let n=0;n<o.length;n++){const c=o[n];i&&(c.oldValue=i[n].value);let l=c.dir[s];l&&(At(),Se(l,r,8,[t.el,c,t,e]),Et())}}/*! #__NO_SIDE_EFFECTS__ */function Jo(t,e){return j(t)?oe({name:t.name},e,{setup:t}):t}const Gt=t=>!!t.type.__asyncLoader,Qo=t=>t.type.__isKeepAlive;function Mn(t,e){Xo(t,"a",e)}function Hn(t,e){Xo(t,"da",e)}function Xo(t,e,r=le){const s=t.__wdc||(t.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(vr(e,s,r),r){let o=r.parent;for(;o&&o.parent;)Qo(o.parent.vnode)&&Pn(s,e,r,o),o=o.parent}}function Pn(t,e,r,s){const o=vr(e,t,s,!0);Go(()=>{Xr(s[e],o)},r)}function vr(t,e,r=le,s=!1){if(r){const o=r[t]||(r[t]=[]),i=e.__weh||(e.__weh=(...n)=>{if(r.isUnmounted)return;At(),_t(r);const c=Se(e,r,t,n);return rt(),Et(),c});return s?o.unshift(i):o.push(i),i}}const je=t=>(e,r=le)=>(!$t||t==="sp")&&vr(t,(...s)=>e(...s),r),zn=je("bm"),Zo=je("m"),In=je("bu"),Fn=je("u"),jn=je("bum"),Go=je("um"),$n=je("sp"),Nn=je("rtg"),Dn=je("rtc");function Bn(t,e=le){vr("ec",t,e)}function Fc(t,e,r,s){let o;const i=r&&r[s];if(z(t)||re(t)){o=new Array(t.length);for(let n=0,c=t.length;n<c;n++)o[n]=e(t[n],n,void 0,i&&i[n])}else if(typeof t=="number"){o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,i&&i[n])}else if(Z(t))if(t[Symbol.iterator])o=Array.from(t,(n,c)=>e(n,c,void 0,i&&i[c]));else{const n=Object.keys(t);o=new Array(n.length);for(let c=0,l=n.length;c<l;c++){const h=n[c];o[c]=e(t[h],h,c,i&&i[c])}}else o=[];return r&&(r[s]=o),o}const jr=t=>t?fi(t)?ps(t)||t.proxy:jr(t.parent):null,Ot=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jr(t.parent),$root:t=>jr(t.root),$emit:t=>t.emit,$options:t=>us(t),$forceUpdate:t=>t.f||(t.f=()=>cs(t.update)),$nextTick:t=>t.n||(t.n=Do.bind(t.proxy)),$watch:t=>On.bind(t)}),Rr=(t,e)=>t!==X&&!t.__isScriptSetup&&B(t,e),Un={get({_:t},e){const{ctx:r,setupState:s,data:o,props:i,accessCache:n,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const w=n[e];if(w!==void 0)switch(w){case 1:return s[e];case 2:return o[e];case 4:return r[e];case 3:return i[e]}else{if(Rr(s,e))return n[e]=1,s[e];if(o!==X&&B(o,e))return n[e]=2,o[e];if((h=t.propsOptions[0])&&B(h,e))return n[e]=3,i[e];if(r!==X&&B(r,e))return n[e]=4,r[e];$r&&(n[e]=0)}}const u=Ot[e];let f,p;if(u)return e==="$attrs"&&fe(t,"get",e),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(r!==X&&B(r,e))return n[e]=4,r[e];if(p=l.config.globalProperties,B(p,e))return p[e]},set({_:t},e,r){const{data:s,setupState:o,ctx:i}=t;return Rr(o,e)?(o[e]=r,!0):s!==X&&B(s,e)?(s[e]=r,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:s,appContext:o,propsOptions:i}},n){let c;return!!r[n]||t!==X&&B(t,n)||Rr(e,n)||(c=i[0])&&B(c,n)||B(s,n)||B(Ot,n)||B(o.config.globalProperties,n)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:B(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function Ts(t){return z(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}let $r=!0;function Kn(t){const e=us(t),r=t.proxy,s=t.ctx;$r=!1,e.beforeCreate&&Os(e.beforeCreate,t,"bc");const{data:o,computed:i,methods:n,watch:c,provide:l,inject:h,created:u,beforeMount:f,mounted:p,beforeUpdate:w,updated:L,activated:k,deactivated:F,beforeDestroy:P,beforeUnmount:M,destroyed:U,unmounted:H,render:se,renderTracked:ie,renderTriggered:be,errorCaptured:qe,serverPrefetch:nt,expose:Re,inheritAttrs:$e,components:Le,directives:lt,filters:Ye}=e;if(h&&Wn(h,s,null),n)for(const J in n){const V=n[J];j(V)&&(s[J]=V.bind(r))}if(o){const J=o.call(r,r);Z(J)&&(t.data=Dt(J))}if($r=!0,i)for(const J in i){const V=i[J],me=j(V)?V.bind(r,r):j(V.get)?V.get.bind(r,r):He,Je=!j(V)&&j(V.set)?V.set.bind(r):He,ve=ge({get:me,set:Je});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>ve.value,set:ue=>ve.value=ue})}if(c)for(const J in c)ei(c[J],s,r,J);if(l){const J=j(l)?l.call(r):l;Reflect.ownKeys(J).forEach(V=>{er(V,J[V])})}u&&Os(u,t,"c");function ee(J,V){z(V)?V.forEach(me=>J(me.bind(r))):V&&J(V.bind(r))}if(ee(zn,f),ee(Zo,p),ee(In,w),ee(Fn,L),ee(Mn,k),ee(Hn,F),ee(Bn,qe),ee(Dn,ie),ee(Nn,be),ee(jn,M),ee(Go,H),ee($n,nt),z(Re))if(Re.length){const J=t.exposed||(t.exposed={});Re.forEach(V=>{Object.defineProperty(J,V,{get:()=>r[V],set:me=>r[V]=me})})}else t.exposed||(t.exposed={});se&&t.render===He&&(t.render=se),$e!=null&&(t.inheritAttrs=$e),Le&&(t.components=Le),lt&&(t.directives=lt)}function Wn(t,e,r=He){z(t)&&(t=Nr(t));for(const s in t){const o=t[s];let i;Z(o)?"default"in o?i=Ae(o.from||s,o.default,!0):i=Ae(o.from||s):i=Ae(o),ae(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:n=>i.value=n}):e[s]=i}}function Os(t,e,r){Se(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,r)}function ei(t,e,r,s){const o=s.includes(".")?Yo(r,s):()=>r[s];if(re(t)){const i=e[t];j(i)&&Zt(o,i)}else if(j(t))Zt(o,t.bind(r));else if(Z(t))if(z(t))t.forEach(i=>ei(i,e,r,s));else{const i=j(t.handler)?t.handler.bind(r):e[t.handler];j(i)&&Zt(o,i,t)}}function us(t){const e=t.type,{mixins:r,extends:s}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:n}}=t.appContext,c=i.get(e);let l;return c?l=c:!o.length&&!r&&!s?l=e:(l={},o.length&&o.forEach(h=>lr(l,h,n,!0)),lr(l,e,n)),Z(e)&&i.set(e,l),l}function lr(t,e,r,s=!1){const{mixins:o,extends:i}=e;i&&lr(t,i,r,!0),o&&o.forEach(n=>lr(t,n,r,!0));for(const n in e)if(!(s&&n==="expose")){const c=Vn[n]||r&&r[n];t[n]=c?c(t[n],e[n]):e[n]}return t}const Vn={data:Ms,props:Hs,emits:Hs,methods:Tt,computed:Tt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Tt,directives:Tt,watch:Jn,provide:Ms,inject:Yn};function Ms(t,e){return e?t?function(){return oe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Yn(t,e){return Tt(Nr(t),Nr(e))}function Nr(t){if(z(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function ce(t,e){return t?[...new Set([].concat(t,e))]:e}function Tt(t,e){return t?oe(Object.create(null),t,e):e}function Hs(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:oe(Object.create(null),Ts(t),Ts(e??{})):e}function Jn(t,e){if(!t)return e;if(!e)return t;const r=oe(Object.create(null),t);for(const s in e)r[s]=ce(t[s],e[s]);return r}function ti(){return{app:null,config:{isNativeTag:ki,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qn=0;function Xn(t,e){return function(s,o=null){j(s)||(s=oe({},s)),o!=null&&!Z(o)&&(o=null);const i=ti(),n=new WeakSet;let c=!1;const l=i.app={_uid:Qn++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:Sl,get config(){return i.config},set config(h){},use(h,...u){return n.has(h)||(h&&j(h.install)?(n.add(h),h.install(l,...u)):j(h)&&(n.add(h),h(l,...u))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,u){return u?(i.components[h]=u,l):i.components[h]},directive(h,u){return u?(i.directives[h]=u,l):i.directives[h]},mount(h,u,f){if(!c){const p=de(s,o);return p.appContext=i,u&&e?e(p,h):t(p,h,f),c=!0,l._container=h,h.__vue_app__=l,ps(p.component)||p.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,u){return i.provides[h]=u,l},runWithContext(h){ar=l;try{return h()}finally{ar=null}}};return l}}let ar=null;function er(t,e){if(le){let r=le.provides;const s=le.parent&&le.parent.provides;s===r&&(r=le.provides=Object.create(s)),r[t]=e}}function Ae(t,e,r=!1){const s=le||Me;if(s||ar){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ar._context.provides;if(o&&t in o)return o[t];if(arguments.length>1)return r&&j(e)?e.call(s&&s.proxy):e}}function Zn(t,e,r,s=!1){const o={},i={};or(i,wr,1),t.propsDefaults=Object.create(null),ri(t,e,o,i);for(const n in t.propsOptions[0])n in o||(o[n]=void 0);r?t.props=s?o:dn(o):t.type.props?t.props=o:t.props=i,t.attrs=i}function Gn(t,e,r,s){const{props:o,attrs:i,vnode:{patchFlag:n}}=t,c=K(o),[l]=t.propsOptions;let h=!1;if((s||n>0)&&!(n&16)){if(n&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(br(t.emitsOptions,p))continue;const w=e[p];if(l)if(B(i,p))w!==i[p]&&(i[p]=w,h=!0);else{const L=vt(p);o[L]=Dr(l,c,L,w,t,!1)}else w!==i[p]&&(i[p]=w,h=!0)}}}else{ri(t,e,o,i)&&(h=!0);let u;for(const f in c)(!e||!B(e,f)&&((u=it(f))===f||!B(e,u)))&&(l?r&&(r[f]!==void 0||r[u]!==void 0)&&(o[f]=Dr(l,c,f,void 0,t,!0)):delete o[f]);if(i!==c)for(const f in i)(!e||!B(e,f))&&(delete i[f],h=!0)}h&&Fe(t,"set","$attrs")}function ri(t,e,r,s){const[o,i]=t.propsOptions;let n=!1,c;if(e)for(let l in e){if(Xt(l))continue;const h=e[l];let u;o&&B(o,u=vt(l))?!i||!i.includes(u)?r[u]=h:(c||(c={}))[u]=h:br(t.emitsOptions,l)||(!(l in s)||h!==s[l])&&(s[l]=h,n=!0)}if(i){const l=K(r),h=c||X;for(let u=0;u<i.length;u++){const f=i[u];r[f]=Dr(o,l,f,h[f],t,!B(h,f))}}return n}function Dr(t,e,r,s,o,i){const n=t[r];if(n!=null){const c=B(n,"default");if(c&&s===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&j(l)){const{propsDefaults:h}=o;r in h?s=h[r]:(_t(o),s=h[r]=l.call(null,e),rt())}else s=l}n[0]&&(i&&!c?s=!1:n[1]&&(s===""||s===it(r))&&(s=!0))}return s}function si(t,e,r=!1){const s=e.propsCache,o=s.get(t);if(o)return o;const i=t.props,n={},c=[];let l=!1;if(!j(t)){const u=f=>{l=!0;const[p,w]=si(f,e,!0);oe(n,p),w&&c.push(...w)};!r&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Z(t)&&s.set(t,pt),pt;if(z(i))for(let u=0;u<i.length;u++){const f=vt(i[u]);Ps(f)&&(n[f]=X)}else if(i)for(const u in i){const f=vt(u);if(Ps(f)){const p=i[u],w=n[f]=z(p)||j(p)?{type:p}:oe({},p);if(w){const L=Fs(Boolean,w.type),k=Fs(String,w.type);w[0]=L>-1,w[1]=k<0||L<k,(L>-1||B(w,"default"))&&c.push(f)}}}const h=[n,c];return Z(t)&&s.set(t,h),h}function Ps(t){return t[0]!=="$"}function zs(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Is(t,e){return zs(t)===zs(e)}function Fs(t,e){return z(e)?e.findIndex(r=>Is(r,t)):j(e)&&Is(e,t)?0:-1}const oi=t=>t[0]==="_"||t==="$stable",hs=t=>z(t)?t.map(Te):[Te(t)],el=(t,e,r)=>{if(e._n)return e;const s=An((...o)=>hs(e(...o)),r);return s._c=!1,s},ii=(t,e,r)=>{const s=t._ctx;for(const o in t){if(oi(o))continue;const i=t[o];if(j(i))e[o]=el(o,i,s);else if(i!=null){const n=hs(i);e[o]=()=>n}}},ni=(t,e)=>{const r=hs(e);t.slots.default=()=>r},tl=(t,e)=>{if(t.vnode.shapeFlag&32){const r=e._;r?(t.slots=K(e),or(e,"_",r)):ii(e,t.slots={})}else t.slots={},e&&ni(t,e);or(t.slots,wr,1)},rl=(t,e,r)=>{const{vnode:s,slots:o}=t;let i=!0,n=X;if(s.shapeFlag&32){const c=e._;c?r&&c===1?i=!1:(oe(o,e),!r&&c===1&&delete o._):(i=!e.$stable,ii(e,o)),n=e}else e&&(ni(t,e),n={default:1});if(i)for(const c in o)!oi(c)&&n[c]==null&&delete o[c]};function Br(t,e,r,s,o=!1){if(z(t)){t.forEach((p,w)=>Br(p,e&&(z(e)?e[w]:e),r,s,o));return}if(Gt(s)&&!o)return;const i=s.shapeFlag&4?ps(s.component)||s.component.proxy:s.el,n=o?null:i,{i:c,r:l}=t,h=e&&e.r,u=c.refs===X?c.refs={}:c.refs,f=c.setupState;if(h!=null&&h!==l&&(re(h)?(u[h]=null,B(f,h)&&(f[h]=null)):ae(h)&&(h.value=null)),j(l))We(l,c,12,[n,u]);else{const p=re(l),w=ae(l);if(p||w){const L=()=>{if(t.f){const k=p?B(f,l)?f[l]:u[l]:l.value;o?z(k)&&Xr(k,i):z(k)?k.includes(i)||k.push(i):p?(u[l]=[i],B(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else p?(u[l]=n,B(f,l)&&(f[l]=n)):w&&(l.value=n,t.k&&(u[t.k]=n))};n?(L.id=-1,he(L,r)):L()}}}const he=Tn;function sl(t){return ol(t)}function ol(t,e){const r=Mr();r.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:n,createText:c,createComment:l,setText:h,setElementText:u,parentNode:f,nextSibling:p,setScopeId:w=He,insertStaticContent:L}=t,k=(a,d,g,b=null,v=null,x=null,E=!1,_=null,S=!!d.dynamicChildren)=>{if(a===d)return;a&&!Lt(a,d)&&(b=A(a),ue(a,v,x,!0),a=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:y,ref:T,shapeFlag:R}=d;switch(y){case yr:F(a,d,g,b);break;case ot:P(a,d,g,b);break;case tr:a==null&&M(d,g,b,E);break;case Ie:Le(a,d,g,b,v,x,E,_,S);break;default:R&1?se(a,d,g,b,v,x,E,_,S):R&6?lt(a,d,g,b,v,x,E,_,S):(R&64||R&128)&&y.process(a,d,g,b,v,x,E,_,S,D)}T!=null&&v&&Br(T,a&&a.ref,x,d||a,!d)},F=(a,d,g,b)=>{if(a==null)s(d.el=c(d.children),g,b);else{const v=d.el=a.el;d.children!==a.children&&h(v,d.children)}},P=(a,d,g,b)=>{a==null?s(d.el=l(d.children||""),g,b):d.el=a.el},M=(a,d,g,b)=>{[a.el,a.anchor]=L(a.children,d,g,b,a.el,a.anchor)},U=({el:a,anchor:d},g,b)=>{let v;for(;a&&a!==d;)v=p(a),s(a,g,b),a=v;s(d,g,b)},H=({el:a,anchor:d})=>{let g;for(;a&&a!==d;)g=p(a),o(a),a=g;o(d)},se=(a,d,g,b,v,x,E,_,S)=>{E=E||d.type==="svg",a==null?ie(d,g,b,v,x,E,_,S):nt(a,d,v,x,E,_,S)},ie=(a,d,g,b,v,x,E,_)=>{let S,y;const{type:T,props:R,shapeFlag:O,transition:I,dirs:N}=a;if(S=a.el=n(a.type,x,R&&R.is,R),O&8?u(S,a.children):O&16&&qe(a.children,S,null,b,v,x&&T!=="foreignObject",E,_),N&&Qe(a,null,b,"created"),be(S,a,a.scopeId,E,b),R){for(const Y in R)Y!=="value"&&!Xt(Y)&&i(S,Y,null,R[Y],x,a.children,b,v,q);"value"in R&&i(S,"value",null,R.value),(y=R.onVnodeBeforeMount)&&Ce(y,b,a)}N&&Qe(a,null,b,"beforeMount");const Q=il(v,I);Q&&I.beforeEnter(S),s(S,d,g),((y=R&&R.onVnodeMounted)||Q||N)&&he(()=>{y&&Ce(y,b,a),Q&&I.enter(S),N&&Qe(a,null,b,"mounted")},v)},be=(a,d,g,b,v)=>{if(g&&w(a,g),b)for(let x=0;x<b.length;x++)w(a,b[x]);if(v){let x=v.subTree;if(d===x){const E=v.vnode;be(a,E,E.scopeId,E.slotScopeIds,v.parent)}}},qe=(a,d,g,b,v,x,E,_,S=0)=>{for(let y=S;y<a.length;y++){const T=a[y]=_?Be(a[y]):Te(a[y]);k(null,T,d,g,b,v,x,E,_)}},nt=(a,d,g,b,v,x,E)=>{const _=d.el=a.el;let{patchFlag:S,dynamicChildren:y,dirs:T}=d;S|=a.patchFlag&16;const R=a.props||X,O=d.props||X;let I;g&&Xe(g,!1),(I=O.onVnodeBeforeUpdate)&&Ce(I,g,d,a),T&&Qe(d,a,g,"beforeUpdate"),g&&Xe(g,!0);const N=v&&d.type!=="foreignObject";if(y?Re(a.dynamicChildren,y,_,g,b,N,x):E||V(a,d,_,null,g,b,N,x,!1),S>0){if(S&16)$e(_,d,R,O,g,b,v);else if(S&2&&R.class!==O.class&&i(_,"class",null,O.class,v),S&4&&i(_,"style",R.style,O.style,v),S&8){const Q=d.dynamicProps;for(let Y=0;Y<Q.length;Y++){const te=Q[Y],ye=R[te],ct=O[te];(ct!==ye||te==="value")&&i(_,te,ye,ct,v,a.children,g,b,q)}}S&1&&a.children!==d.children&&u(_,d.children)}else!E&&y==null&&$e(_,d,R,O,g,b,v);((I=O.onVnodeUpdated)||T)&&he(()=>{I&&Ce(I,g,d,a),T&&Qe(d,a,g,"updated")},b)},Re=(a,d,g,b,v,x,E)=>{for(let _=0;_<d.length;_++){const S=a[_],y=d[_],T=S.el&&(S.type===Ie||!Lt(S,y)||S.shapeFlag&70)?f(S.el):g;k(S,y,T,null,b,v,x,E,!0)}},$e=(a,d,g,b,v,x,E)=>{if(g!==b){if(g!==X)for(const _ in g)!Xt(_)&&!(_ in b)&&i(a,_,g[_],null,E,d.children,v,x,q);for(const _ in b){if(Xt(_))continue;const S=b[_],y=g[_];S!==y&&_!=="value"&&i(a,_,y,S,E,d.children,v,x,q)}"value"in b&&i(a,"value",g.value,b.value)}},Le=(a,d,g,b,v,x,E,_,S)=>{const y=d.el=a?a.el:c(""),T=d.anchor=a?a.anchor:c("");let{patchFlag:R,dynamicChildren:O,slotScopeIds:I}=d;I&&(_=_?_.concat(I):I),a==null?(s(y,g,b),s(T,g,b),qe(d.children,g,T,v,x,E,_,S)):R>0&&R&64&&O&&a.dynamicChildren?(Re(a.dynamicChildren,O,g,v,x,E,_),(d.key!=null||v&&d===v.subTree)&&li(a,d,!0)):V(a,d,g,T,v,x,E,_,S)},lt=(a,d,g,b,v,x,E,_,S)=>{d.slotScopeIds=_,a==null?d.shapeFlag&512?v.ctx.activate(d,g,b,E,S):Ye(d,g,b,v,x,E,S):qt(a,d,S)},Ye=(a,d,g,b,v,x,E)=>{const _=a.component=gl(a,b,v);if(Qo(a)&&(_.ctx.renderer=D),bl(_),_.asyncDep){if(v&&v.registerDep(_,ee),!a.el){const S=_.subTree=de(ot);P(null,S,d,g)}return}ee(_,a,d,g,v,x,E)},qt=(a,d,g)=>{const b=d.component=a.component;if(Rn(a,d,g))if(b.asyncDep&&!b.asyncResolved){J(b,d,g);return}else b.next=d,wn(b.update),b.update();else d.el=a.el,b.vnode=d},ee=(a,d,g,b,v,x,E)=>{const _=()=>{if(a.isMounted){let{next:T,bu:R,u:O,parent:I,vnode:N}=a,Q=T,Y;Xe(a,!1),T?(T.el=N.el,J(a,T,E)):T=N,R&&Er(R),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Ce(Y,I,T,N),Xe(a,!0);const te=qr(a),ye=a.subTree;a.subTree=te,k(ye,te,f(ye.el),A(ye),a,v,x),T.el=te.el,Q===null&&Ln(a,te.el),O&&he(O,v),(Y=T.props&&T.props.onVnodeUpdated)&&he(()=>Ce(Y,I,T,N),v)}else{let T;const{el:R,props:O}=d,{bm:I,m:N,parent:Q}=a,Y=Gt(d);if(Xe(a,!1),I&&Er(I),!Y&&(T=O&&O.onVnodeBeforeMount)&&Ce(T,Q,d),Xe(a,!0),R&&$){const te=()=>{a.subTree=qr(a),$(R,a.subTree,a,v,null)};Y?d.type.__asyncLoader().then(()=>!a.isUnmounted&&te()):te()}else{const te=a.subTree=qr(a);k(null,te,g,b,a,v,x),d.el=te.el}if(N&&he(N,v),!Y&&(T=O&&O.onVnodeMounted)){const te=d;he(()=>Ce(T,Q,te),v)}(d.shapeFlag&256||Q&&Gt(Q.vnode)&&Q.vnode.shapeFlag&256)&&a.a&&he(a.a,v),a.isMounted=!0,d=g=b=null}},S=a.effect=new rs(_,()=>cs(y),a.scope),y=a.update=()=>S.run();y.id=a.uid,Xe(a,!0),y()},J=(a,d,g)=>{d.component=a;const b=a.vnode.props;a.vnode=d,a.next=null,Gn(a,d.props,b,g),rl(a,d.children,g),At(),ks(),Et()},V=(a,d,g,b,v,x,E,_,S=!1)=>{const y=a&&a.children,T=a?a.shapeFlag:0,R=d.children,{patchFlag:O,shapeFlag:I}=d;if(O>0){if(O&128){Je(y,R,g,b,v,x,E,_,S);return}else if(O&256){me(y,R,g,b,v,x,E,_,S);return}}I&8?(T&16&&q(y,v,x),R!==y&&u(g,R)):T&16?I&16?Je(y,R,g,b,v,x,E,_,S):q(y,v,x,!0):(T&8&&u(g,""),I&16&&qe(R,g,b,v,x,E,_,S))},me=(a,d,g,b,v,x,E,_,S)=>{a=a||pt,d=d||pt;const y=a.length,T=d.length,R=Math.min(y,T);let O;for(O=0;O<R;O++){const I=d[O]=S?Be(d[O]):Te(d[O]);k(a[O],I,g,null,v,x,E,_,S)}y>T?q(a,v,x,!0,!1,R):qe(d,g,b,v,x,E,_,S,R)},Je=(a,d,g,b,v,x,E,_,S)=>{let y=0;const T=d.length;let R=a.length-1,O=T-1;for(;y<=R&&y<=O;){const I=a[y],N=d[y]=S?Be(d[y]):Te(d[y]);if(Lt(I,N))k(I,N,g,null,v,x,E,_,S);else break;y++}for(;y<=R&&y<=O;){const I=a[R],N=d[O]=S?Be(d[O]):Te(d[O]);if(Lt(I,N))k(I,N,g,null,v,x,E,_,S);else break;R--,O--}if(y>R){if(y<=O){const I=O+1,N=I<T?d[I].el:b;for(;y<=O;)k(null,d[y]=S?Be(d[y]):Te(d[y]),g,N,v,x,E,_,S),y++}}else if(y>O)for(;y<=R;)ue(a[y],v,x,!0),y++;else{const I=y,N=y,Q=new Map;for(y=N;y<=O;y++){const pe=d[y]=S?Be(d[y]):Te(d[y]);pe.key!=null&&Q.set(pe.key,y)}let Y,te=0;const ye=O-N+1;let ct=!1,ms=0;const Rt=new Array(ye);for(y=0;y<ye;y++)Rt[y]=0;for(y=I;y<=R;y++){const pe=a[y];if(te>=ye){ue(pe,v,x,!0);continue}let ke;if(pe.key!=null)ke=Q.get(pe.key);else for(Y=N;Y<=O;Y++)if(Rt[Y-N]===0&&Lt(pe,d[Y])){ke=Y;break}ke===void 0?ue(pe,v,x,!0):(Rt[ke-N]=y+1,ke>=ms?ms=ke:ct=!0,k(pe,d[ke],g,null,v,x,E,_,S),te++)}const vs=ct?nl(Rt):pt;for(Y=vs.length-1,y=ye-1;y>=0;y--){const pe=N+y,ke=d[pe],ys=pe+1<T?d[pe+1].el:b;Rt[y]===0?k(null,ke,g,ys,v,x,E,_,S):ct&&(Y<0||y!==vs[Y]?ve(ke,g,ys,2):Y--)}}},ve=(a,d,g,b,v=null)=>{const{el:x,type:E,transition:_,children:S,shapeFlag:y}=a;if(y&6){ve(a.component.subTree,d,g,b);return}if(y&128){a.suspense.move(d,g,b);return}if(y&64){E.move(a,d,g,D);return}if(E===Ie){s(x,d,g);for(let R=0;R<S.length;R++)ve(S[R],d,g,b);s(a.anchor,d,g);return}if(E===tr){U(a,d,g);return}if(b!==2&&y&1&&_)if(b===0)_.beforeEnter(x),s(x,d,g),he(()=>_.enter(x),v);else{const{leave:R,delayLeave:O,afterLeave:I}=_,N=()=>s(x,d,g),Q=()=>{R(x,()=>{N(),I&&I()})};O?O(x,N,Q):Q()}else s(x,d,g)},ue=(a,d,g,b=!1,v=!1)=>{const{type:x,props:E,ref:_,children:S,dynamicChildren:y,shapeFlag:T,patchFlag:R,dirs:O}=a;if(_!=null&&Br(_,null,g,a,!0),T&256){d.ctx.deactivate(a);return}const I=T&1&&O,N=!Gt(a);let Q;if(N&&(Q=E&&E.onVnodeBeforeUnmount)&&Ce(Q,d,a),T&6)m(a.component,g,b);else{if(T&128){a.suspense.unmount(g,b);return}I&&Qe(a,null,d,"beforeUnmount"),T&64?a.type.remove(a,d,g,v,D,b):y&&(x!==Ie||R>0&&R&64)?q(y,d,g,!1,!0):(x===Ie&&R&384||!v&&T&16)&&q(S,d,g),b&&at(a)}(N&&(Q=E&&E.onVnodeUnmounted)||I)&&he(()=>{Q&&Ce(Q,d,a),I&&Qe(a,null,d,"unmounted")},g)},at=a=>{const{type:d,el:g,anchor:b,transition:v}=a;if(d===Ie){Bt(g,b);return}if(d===tr){H(a);return}const x=()=>{o(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(a.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:_}=v,S=()=>E(g,x);_?_(a.el,x,S):S()}else x()},Bt=(a,d)=>{let g;for(;a!==d;)g=p(a),o(a),a=g;o(d)},m=(a,d,g)=>{const{bum:b,scope:v,update:x,subTree:E,um:_}=a;b&&Er(b),v.stop(),x&&(x.active=!1,ue(E,a,d,g)),_&&he(_,d),he(()=>{a.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},q=(a,d,g,b=!1,v=!1,x=0)=>{for(let E=x;E<a.length;E++)ue(a[E],d,g,b,v)},A=a=>a.shapeFlag&6?A(a.component.subTree):a.shapeFlag&128?a.suspense.next():p(a.anchor||a.el),C=(a,d,g)=>{a==null?d._vnode&&ue(d._vnode,null,null,!0):k(d._vnode||null,a,d,null,null,null,g),ks(),Uo(),d._vnode=a},D={p:k,um:ue,m:ve,r:at,mt:Ye,mc:qe,pc:V,pbc:Re,n:A,o:t};let G,$;return e&&([G,$]=e(D)),{render:C,hydrate:G,createApp:Xn(C,G)}}function Xe({effect:t,update:e},r){t.allowRecurse=e.allowRecurse=r}function il(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function li(t,e,r=!1){const s=t.children,o=e.children;if(z(s)&&z(o))for(let i=0;i<s.length;i++){const n=s[i];let c=o[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[i]=Be(o[i]),c.el=n.el),r||li(n,c)),c.type===yr&&(c.el=n.el)}}function nl(t){const e=t.slice(),r=[0];let s,o,i,n,c;const l=t.length;for(s=0;s<l;s++){const h=t[s];if(h!==0){if(o=r[r.length-1],t[o]<h){e[s]=o,r.push(s);continue}for(i=0,n=r.length-1;i<n;)c=i+n>>1,t[r[c]]<h?i=c+1:n=c;h<t[r[i]]&&(i>0&&(e[s]=r[i-1]),r[i]=s)}}for(i=r.length,n=r[i-1];i-- >0;)r[i]=n,n=e[n];return r}const ll=t=>t.__isTeleport,Ie=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),Mt=[];let xe=null;function ai(t=!1){Mt.push(xe=t?null:[])}function al(){Mt.pop(),xe=Mt[Mt.length-1]||null}let jt=1;function js(t){jt+=t}function ci(t){return t.dynamicChildren=jt>0?xe||pt:null,al(),jt>0&&xe&&xe.push(t),t}function jc(t,e,r,s,o,i){return ci(di(t,e,r,s,o,i,!0))}function ui(t,e,r,s,o){return ci(de(t,e,r,s,o,!0))}function Ur(t){return t?t.__v_isVNode===!0:!1}function Lt(t,e){return t.type===e.type&&t.key===e.key}const wr="__vInternal",hi=({key:t})=>t??null,rr=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?re(t)||ae(t)||j(t)?{i:Me,r:t,k:e,f:!!r}:t:null);function di(t,e=null,r=null,s=0,o=null,i=t===Ie?0:1,n=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hi(e),ref:e&&rr(e),scopeId:mr,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Me};return c?(ds(l,r),i&128&&t.normalize(l)):r&&(l.shapeFlag|=re(r)?8:16),jt>0&&!n&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const de=cl;function cl(t,e=null,r=null,s=0,o=null,i=!1){if((!t||t===kn)&&(t=ot),Ur(t)){const c=wt(t,e,!0);return r&&ds(c,r),jt>0&&!i&&xe&&(c.shapeFlag&6?xe[xe.indexOf(t)]=c:xe.push(c)),c.patchFlag|=-2,c}if(wl(t)&&(t=t.__vccOpts),e){e=ul(e);let{class:c,style:l}=e;c&&!re(c)&&(e.class=es(c)),Z(l)&&(Po(l)&&!z(l)&&(l=oe({},l)),e.style=Gr(l))}const n=re(t)?1:Cn(t)?128:ll(t)?64:Z(t)?4:j(t)?2:0;return di(t,e,r,s,o,n,i,!0)}function ul(t){return t?Po(t)||wr in t?oe({},t):t:null}function wt(t,e,r=!1){const{props:s,ref:o,patchFlag:i,children:n}=t,c=e?dl(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&hi(c),ref:e&&e.ref?r&&o?z(o)?o.concat(rr(e)):[o,rr(e)]:rr(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:n,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ie?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wt(t.ssContent),ssFallback:t.ssFallback&&wt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function hl(t=" ",e=0){return de(yr,null,t,e)}function $c(t,e){const r=de(tr,null,t);return r.staticCount=e,r}function Nc(t="",e=!1){return e?(ai(),ui(ot,null,t)):de(ot,null,t)}function Te(t){return t==null||typeof t=="boolean"?de(ot):z(t)?de(Ie,null,t.slice()):typeof t=="object"?Be(t):de(yr,null,String(t))}function Be(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:wt(t)}function ds(t,e){let r=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))r=16;else if(typeof e=="object")if(s&65){const o=e.default;o&&(o._c&&(o._d=!1),ds(t,o()),o._c&&(o._d=!0));return}else{r=32;const o=e._;!o&&!(wr in e)?e._ctx=Me:o===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Me},r=32):(e=String(e),s&64?(r=16,e=[hl(e)]):r=8);t.children=e,t.shapeFlag|=r}function dl(...t){const e={};for(let r=0;r<t.length;r++){const s=t[r];for(const o in s)if(o==="class")e.class!==s.class&&(e.class=es([e.class,s.class]));else if(o==="style")e.style=Gr([e.style,s.style]);else if(ur(o)){const i=e[o],n=s[o];n&&i!==n&&!(z(i)&&i.includes(n))&&(e[o]=i?[].concat(i,n):n)}else o!==""&&(e[o]=s[o])}return e}function Ce(t,e,r,s=null){Se(t,e,7,[r,s])}const fl=ti();let pl=0;function gl(t,e,r){const s=t.type,o=(e?e.appContext:t.appContext)||fl,i={uid:pl++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new So(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:si(s,o),emitsOptions:Wo(s,o),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Sn.bind(null,i),t.ce&&t.ce(i),i}let le=null,fs,ut,$s="__VUE_INSTANCE_SETTERS__";(ut=Mr()[$s])||(ut=Mr()[$s]=[]),ut.push(t=>le=t),fs=t=>{ut.length>1?ut.forEach(e=>e(t)):ut[0](t)};const _t=t=>{fs(t),t.scope.on()},rt=()=>{le&&le.scope.off(),fs(null)};function fi(t){return t.vnode.shapeFlag&4}let $t=!1;function bl(t,e=!1){$t=e;const{props:r,children:s}=t.vnode,o=fi(t);Zn(t,r,o,e),tl(t,s);const i=o?ml(t,e):void 0;return $t=!1,i}function ml(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=ns(new Proxy(t.ctx,Un));const{setup:s}=r;if(s){const o=t.setupContext=s.length>1?yl(t):null;_t(t),At();const i=We(s,t,0,[t.props,o]);if(Et(),rt(),mo(i)){if(i.then(rt,rt),e)return i.then(n=>{Ns(t,n,e)}).catch(n=>{gr(n,t,0)});t.asyncDep=i}else Ns(t,i,e)}else pi(t,e)}function Ns(t,e,r){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=$o(e)),pi(t,r)}let Ds;function pi(t,e,r){const s=t.type;if(!t.render){if(!e&&Ds&&!s.render){const o=s.template||us(t).template;if(o){const{isCustomElement:i,compilerOptions:n}=t.appContext.config,{delimiters:c,compilerOptions:l}=s,h=oe(oe({isCustomElement:i,delimiters:c},n),l);s.render=Ds(o,h)}}t.render=s.render||He}{_t(t),At();try{Kn(t)}finally{Et(),rt()}}}function vl(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,r){return fe(t,"get","$attrs"),e[r]}}))}function yl(t){const e=r=>{t.exposed=r||{}};return{get attrs(){return vl(t)},slots:t.slots,emit:t.emit,expose:e}}function ps(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($o(ns(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in Ot)return Ot[r](t)},has(e,r){return r in e||r in Ot}}))}function wl(t){return j(t)&&"__vccOpts"in t}const ge=(t,e)=>mn(t,e,$t);function gi(t,e,r){const s=arguments.length;return s===2?Z(e)&&!z(e)?Ur(e)?de(t,null,[e]):de(t,e):de(t,null,e):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&Ur(r)&&(r=[r]),de(t,e,r))}const _l=Symbol.for("v-scx"),xl=()=>Ae(_l),Sl="3.3.9",Al="http://www.w3.org/2000/svg",Ge=typeof document<"u"?document:null,Bs=Ge&&Ge.createElement("template"),El={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,s)=>{const o=e?Ge.createElementNS(Al,t):Ge.createElement(t,r?{is:r}:void 0);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>Ge.createTextNode(t),createComment:t=>Ge.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ge.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,s,o,i){const n=r?r.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{Bs.innerHTML=s?`<svg>${t}</svg>`:t;const c=Bs.content;if(s){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,r)}return[n?n.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},ql=Symbol("_vtc");function Rl(t,e,r){const s=t[ql];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}const Ll=Symbol("_vod");function kl(t,e,r){const s=t.style,o=re(r);if(r&&!o){if(e&&!re(e))for(const i in e)r[i]==null&&Kr(s,i,"");for(const i in r)Kr(s,i,r[i])}else{const i=s.display;o?e!==r&&(s.cssText=r):e&&t.removeAttribute("style"),Ll in t&&(s.display=i)}}const Us=/\s*!important$/;function Kr(t,e,r){if(z(r))r.forEach(s=>Kr(t,e,s));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const s=Cl(t,e);Us.test(r)?t.setProperty(it(s),r.replace(Us,""),"important"):t[s]=r}}const Ks=["Webkit","Moz","ms"],Lr={};function Cl(t,e){const r=Lr[e];if(r)return r;let s=vt(e);if(s!=="filter"&&s in t)return Lr[e]=s;s=wo(s);for(let o=0;o<Ks.length;o++){const i=Ks[o]+s;if(i in t)return Lr[e]=i}return e}const Ws="http://www.w3.org/1999/xlink";function Tl(t,e,r,s,o){if(s&&e.startsWith("xlink:"))r==null?t.removeAttributeNS(Ws,e.slice(6,e.length)):t.setAttributeNS(Ws,e,r);else{const i=Ni(e);r==null||i&&!_o(r)?t.removeAttribute(e):t.setAttribute(e,i?"":r)}}function Ol(t,e,r,s,o,i,n){if(e==="innerHTML"||e==="textContent"){s&&n(s,o,i),t[e]=r??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=r;const h=c==="OPTION"?t.getAttribute("value"):t.value,u=r??"";h!==u&&(t.value=u),r==null&&t.removeAttribute(e);return}let l=!1;if(r===""||r==null){const h=typeof t[e];h==="boolean"?r=_o(r):r==null&&h==="string"?(r="",l=!0):h==="number"&&(r=0,l=!0)}try{t[e]=r}catch{}l&&t.removeAttribute(e)}function Ml(t,e,r,s){t.addEventListener(e,r,s)}function Hl(t,e,r,s){t.removeEventListener(e,r,s)}const Vs=Symbol("_vei");function Pl(t,e,r,s,o=null){const i=t[Vs]||(t[Vs]={}),n=i[e];if(s&&n)n.value=s;else{const[c,l]=zl(e);if(s){const h=i[e]=jl(s,o);Ml(t,c,h,l)}else n&&(Hl(t,c,n,l),i[e]=void 0)}}const Ys=/(?:Once|Passive|Capture)$/;function zl(t){let e;if(Ys.test(t)){e={};let s;for(;s=t.match(Ys);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):it(t.slice(2)),e]}let kr=0;const Il=Promise.resolve(),Fl=()=>kr||(Il.then(()=>kr=0),kr=Date.now());function jl(t,e){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;Se($l(s,r.value),e,5,[s])};return r.value=t,r.attached=Fl(),r}function $l(t,e){if(z(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const Js=/^on[a-z]/,Nl=(t,e,r,s,o=!1,i,n,c,l)=>{e==="class"?Rl(t,s,o):e==="style"?kl(t,r,s):ur(e)?Qr(e)||Pl(t,e,r,s,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dl(t,e,s,o))?Ol(t,e,s,i,n,c,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Tl(t,e,s,o))};function Dl(t,e,r,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Js.test(e)&&j(r)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Js.test(e)&&re(r)?!1:e in t}const Bl={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dc=(t,e)=>r=>{if(!("key"in r))return;const s=it(r.key);if(e.some(o=>o===s||Bl[o]===s))return t(r)},Ul=oe({patchProp:Nl},El);let Qs;function Kl(){return Qs||(Qs=sl(Ul))}const Wl=(...t)=>{const e=Kl().createApp(...t),{mount:r}=e;return e.mount=s=>{const o=Vl(s);if(!o)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const n=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),n},e};function Vl(t){return re(t)?document.querySelector(t):t}var Yl=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Jl=Symbol();var Xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xs||(Xs={}));function Ql(){const t=Di(!0),e=t.run(()=>Fo({}));let r=[],s=[];const o=ns({install(i){o._a=i,i.provide(Jl,o),i.config.globalProperties.$pinia=o,s.forEach(n=>r.push(n)),s=[]},use(i){return!this._a&&!Yl?s.push(i):r.push(i),this},_p:r,_a:null,_e:t,_s:new Map,state:e});return o}const sr={initColor:function(s="#1abc8c"){var e=parseInt(s.substring(1,3),16),r=parseInt(s.substring(3,5),16),s=parseInt(s.substring(5,7),16),o=document.createElement("style");o.innerHTML=`body{
			--wcp-color-base: rgba(${e}, ${r}, ${s}, 1);
            --wcp-color-base80percent: rgba(${e}, ${r}, ${s}, .8);
            --wcp-color-base10percent: rgba(${e}, ${r}, ${s}, .1);
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
		}`,document.body.append(o)},isEmpty:function(t){return t instanceof Array?t.length==0:t instanceof Object?Object.keys(t).length==0:void 0},_cloneDeep(t){let e=null;switch(Object.prototype.toString.call(t).split(" ")[1].split("]")[0]){case"Object":for(var r in e={},t)e[r]=this._cloneDeep(t[r]);break;case"Array":e=[];for(let s=0;s<t.length;s++)e[s]=this._cloneDeep(t[s]);break;case"Map":e=new Map,t.forEach((s,o)=>{e.set(o,this._cloneDeep(s))});break;case"WeakMap":e=new WeakMap,t.forEach((s,o)=>{e.set(o,this._cloneDeep(s))});break;case"Set":e=new Set,t.forEach(s=>{e.add(this._cloneDeep(s))});break;case"Date":e=new Date(t.valueOf());break;default:e=t}return e},cloneDeep(){let t,e,r,s,o,i,n=arguments[0]||{},c=1,l=arguments.length;for(typeof n!="object"&&typeof n!="function"&&(n={}),c===l&&(n=this,c--);c<l;c++)if((t=arguments[c])!=null)for(e in t)s=t[e],e!=="__proto__"&&n!==s&&(s&&(s.toString()==="[object Object]"||(o=Array.isArray(s)))?(r=n[e],i=o&&!Array.isArray(r)?[]:!o&&!r instanceof Object?{}:r,o=!1,this.typeof(n)=="Map"?(n=new Map).set(e,this.cloneDeep(i,s)):this.typeof(n)=="WeakMap"?(n=new WeakMap).set(e,this.cloneDeep(i,s)):this.typeof(n)=="Set"?(n=new Set)[e].add(this.cloneDeep(i,s)):this.typeof(n)=="Date"?n[e]=new Date(this.cloneDeep(i,s).valueOf()):n[e]=this.cloneDeep(i,s)):s!==void 0&&(n[e]=s));return n},typeof:function(t){return Object.prototype.toString.call(t).split(" ")[1].split("]")[0]},getCookie(t){return t=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")),t?decodeURIComponent(t[1]):void 0},setCookie(t,e,r={}){(r={path:"/",...r}).expires instanceof Date&&(r.expires=r.expires.toUTCString());let s=encodeURIComponent(t)+"="+encodeURIComponent(e);for(var o in r)s+="; "+o,o=r[o],o!==!0&&(s+="="+o);document.cookie=s},deleteCookie(t){this.setCookie(t,"",{"max-age":-1})}};class Xl{static setOptions(e){sr.cloneDeep(this._options,e)}static _initOption(e){var r={};if(sr.cloneDeep(r,this._options,e),r.data&&!sr.isEmpty(r.data))if(r.method=="get"){let s="";for(const o in r.data)s+=o+"="+r.data[o]+"&";s=s.slice(0,-1),r.url+="?"+s}else r.method=="post"&&{}.toString.call(r.data)=="[object FormData]"?r.body=r.data:r.body=JSON.stringify(r.data);return r}static post(e){return e.method="post",e=this._initOption(e),fetch(e.url,e)}static delete(e){return e.method="delete",e=this._initOption(e),fetch(e.url,e)}static put(e){return e.method="put",e=this._initOption(e),fetch(e.url,e)}static get(e){return e.method="get",e=this._initOption(e),fetch(e.url,e)}}ws(Xl,"_options",{headers:{"Content-Type":"application/json;charset=utf-8"}});class Zl extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","color","disabled","size","full"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("type")&&(e=this.getAttribute("type"),r.querySelector("#btn").classList.add(e)),this.hasAttribute("color")&&(e=this.getAttribute("color"),r.querySelector("#btn").classList.add(e)),this.hasAttribute("disabled")&&r.querySelector("#btn").classList.add("disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),r.querySelector("#btn").classList.add(e))}_reset(){this.shadowRoot.querySelector("#btn").classList.value="btn"}}customElements.define("w-btn",Zl);class Gl extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","checked","size","disabled"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),r.querySelector("#checkbox").setAttribute("value",e)),this.hasAttribute("size")&&(e=this.getAttribute("size"),r.querySelector("#checkbox").classList.add(e)),this.hasAttribute("checked")&&r.querySelector("#checkbox").classList.add("checked"),this.hasAttribute("disabled")&&r.querySelector("#checkbox").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#checkbox").classList.value="checkbox"}_event(){this.shadowRoot.querySelector("#checkbox").addEventListener("change",()=>{this.hasAttribute("disabled")||(this.hasAttribute("checked")?this.removeAttribute("checked"):this.setAttribute("checked",""),this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0})))})}}function Bc(t="",e,r){var s={ok:"ok",cancel:"cancel"};Object.assign(s,r);let o=document.createElement("w-modal");o.innerHTML=`
        <div style="display:flex;flex-direction: column; height:100%;">
            <div style="padding:10px; flex:1; display: flex; flex-direction: column; overflow-y: auto; border-bottom: 1px solid var(--wcp-color-disabled); word-break: break-word; ">
                ${t}
            </div>
            <div style="display: inline-flex; width: 100%; justify-content: end; height: 40px; padding-top:4px;">
                <w-btn id="cancel" type="text" style="flex:1;">${s.cancel}</w-btn>
                <w-btn id="ok" style="flex:1; margin-right:4px;">${s.ok}</w-btn>
            </div>
        </div>
        `,o.setAttribute("show",""),o.setAttribute("height","180px"),o.setAttribute("width","280px"),document.body.append(o),o.querySelector("#cancel").addEventListener("click",i=>{o.removeAttribute("show")}),o.querySelector("#ok").addEventListener("click",i=>{o.removeAttribute("show"),e()}),o.addEventListener("click",i=>{let n=setTimeout(()=>{o.hasAttribute("show")||o.remove(),clearTimeout(n)},1e3)})}customElements.define("w-checkbox",Gl);class ea extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("width")&&(e=this.getAttribute("width"),r.querySelector("#wrap").style.width=e),this.hasAttribute("height")&&(e=this.getAttribute("height"),r.querySelector("#wrap").style.height=e),this.hasAttribute("show")&&r.querySelector("#dialog").classList.add("show")}_reset(){this.shadowRoot.querySelector("#dialog").classList.value="dialog"}_event(){this.shadowRoot.querySelector("#dialog").addEventListener("click",e=>{e.target.id=="dialog"&&this.removeAttribute("show")})}}customElements.define("w-dialog",ea);class ta extends HTMLElement{_getStyle(){return`
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
        `}_getTemplate(){let e="";for(let r=0;r<5;r++)e+=`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled","value","size"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r,s=this.shadowRoot;this.hasAttribute("disabled")?(s.querySelector("#heart").classList.add("disabled"),s.querySelectorAll("#heart .heart-item .icon").forEach(o=>{o.querySelector("path").removeAttribute("fill")})):(s.querySelectorAll("#heart .heart-item .icon").forEach(o=>{o.classList.add("hide")}),s.querySelectorAll("#heart .heart-item .icon-outline").forEach(o=>{o.classList.remove("hide")})),this.hasAttribute("value")&&(e=Number(this.getAttribute("value")),this.hasAttribute("disabled")?(0<=e&&e<=.2&&(r=e/.2*100+"%",s.querySelectorAll("#ratio stop")[1].setAttribute("offset",r),s.querySelectorAll("#ratio stop")[2].setAttribute("offset",r),s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","url(#ratio)")),.2<e&&e<=.4&&(r=(e-.2)/.2*100+"%",s.querySelectorAll("#ratio stop")[1].setAttribute("offset",r),s.querySelectorAll("#ratio stop")[2].setAttribute("offset",r),s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","url(#ratio)")),.4<e&&e<=.6&&(r=(e-.4)/.2*100+"%",s.querySelectorAll("#ratio stop")[1].setAttribute("offset",r),s.querySelectorAll("#ratio stop")[2].setAttribute("offset",r),s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","url(#ratio)")),.6<e&&e<=.8&&(r=(e-.6)/.2*100+"%",s.querySelectorAll("#ratio stop")[1].setAttribute("offset",r),s.querySelectorAll("#ratio stop")[2].setAttribute("offset",r),s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","url(#ratio)")),.8<e&&e<=1&&(r=(e-.8)/.2*100+"%",s.querySelectorAll("#ratio stop")[1].setAttribute("offset",r),s.querySelectorAll("#ratio stop")[2].setAttribute("offset",r),s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[4].querySelector("path").setAttribute("fill","url(#ratio)"))):(0<e&&e<=.2&&(s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide")),.2<e&&e<=.4&&(s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide")),.4<e&&e<=.6&&(s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide")),.6<e&&e<=.8&&(s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[3].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[3].classList.add("hide")),.8<e&&e<=1&&(s.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[4].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),s.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[3].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon")[4].classList.remove("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[3].classList.add("hide"),s.querySelectorAll("#heart .heart-item .icon-outline")[4].classList.add("hide")))),this.hasAttribute("size")&&(r=this.getAttribute("size"),s.querySelector("#heart").classList.add(r))}_reset(){this.shadowRoot.querySelector("#heart").classList.value="heart"}_event(){this.shadowRoot.querySelectorAll("#heart .heart-item").forEach((e,r)=>{e.setAttribute("index",r),e.addEventListener("click",s=>{var o;this.hasAttribute("disabled")||(this.setAttribute("value",o=(r+1)/5),this.dispatchEvent(new CustomEvent("change",{detail:{value:o},bubbles:!0})))})})}}customElements.define("w-heart",ta);class ra extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","maxlength","min","max","step","type","placeholder","disabled","size","error"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),r.querySelector("#input").setAttribute("value",e),r.querySelector("#input").value=e),this.hasAttribute("maxlength")&&(e=this.getAttribute("maxlength"),r.querySelector("#input").setAttribute("maxlength",e)),this.hasAttribute("min")&&(e=this.getAttribute("min"),r.querySelector("#input").min=e),this.hasAttribute("max")&&(e=this.getAttribute("max"),r.querySelector("#input").max=e),this.hasAttribute("step")&&(e=this.getAttribute("step"),r.querySelector("#input").step=e),this.hasAttribute("type")&&(e=this.getAttribute("type"),r.querySelector("#input").type=e),this.hasAttribute("placeholder")&&(e=this.getAttribute("placeholder"),r.querySelector("#input").placeholder=e),this.hasAttribute("disabled")?r.querySelector("#input").setAttribute("disabled",""):r.querySelector("#input").removeAttribute("disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),r.querySelector("#input").classList.add(e)),this.hasAttribute("error")&&r.querySelector("#input").classList.add("error")}_reset(){this.shadowRoot.querySelector("#input").classList.value="input"}_event(){this.shadowRoot.querySelector("#input").addEventListener("input",e=>{e=e.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-input",ra);class sa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.defaultImg=null,this.lazyArr=[],this.observer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot}_event(){let e=this.shadowRoot;e.addEventListener("slotchange",r=>{this.lazyArr.length!=0&&this.lazyArr.forEach(s=>{this.observer.unobserve(s)}),this.lazyArr.length=0,e.querySelector("#slot").assignedElements().map(s=>{this.lazyArr.push(...Array.from(s.querySelectorAll("img"))),this.lazyArr.push(...Array.from(s.querySelectorAll("video"))),this.lazyArr.push(...Array.from(s.querySelectorAll("w-player")))}),this.lazyArr.forEach(s=>{this.observer.observe(s)})}),this.observer=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&((s=s.target).hasAttribute("lazy-src")&&s.setAttribute("src",s.getAttribute("lazy-src")),this.observer.unobserve(s))})})}}customElements.define("w-lazy-loading",sa);class oa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["show"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("show")&&e.querySelector("#menu").classList.add("show")}_reset(){this.shadowRoot.querySelector("#menu").classList.value="menu"}_event(){this.shadowRoot}}customElements.define("w-menu",oa);class ia extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("disabled")&&e.querySelector("#menu-item").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#menu-item").classList.value="menu-item"}_event(){this.shadowRoot}}customElements.define("w-menu-item",ia);class na extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("width")&&(e=this.getAttribute("width"),r.querySelector("#wrap").style.width=e),this.hasAttribute("height")&&(e=this.getAttribute("height"),r.querySelector("#wrap").style.height=e),this.hasAttribute("show")&&r.querySelector("#modal").classList.add("show")}_reset(){this.shadowRoot.querySelector("#modal").classList.value="modal"}_event(){this.shadowRoot.querySelector("#modal").addEventListener("click",e=>{e.target.id=="modal"&&this.removeAttribute("show")})}}customElements.define("w-modal",na);class la extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.timer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","position"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("type")&&(e=this.getAttribute("type"),r.querySelector("#msg").classList.add(e)),this.hasAttribute("position")?(e=this.getAttribute("position"),r.querySelector("#msg").classList.add(e)):r.querySelector("#msg").classList.add("top")}_reset(){this.shadowRoot.querySelector("#msg").classList.value="msg"}show(e,r=""){let s=this.shadowRoot;switch(this._setOptions(),s.querySelector("#content").innerHTML=e,r&&s.querySelector("#msg").classList.add(r),r){case"success":s.querySelector("#icon").innerHTML=s.querySelector("#icon-success").innerHTML;break;case"error":s.querySelector("#icon").innerHTML=s.querySelector("#icon-error").innerHTML;break;case"warning":s.querySelector("#icon").innerHTML=s.querySelector("#icon-warning").innerHTML;break;default:s.querySelector("#icon").innerHTML=s.querySelector("#icon-default").innerHTML}s.querySelector("#msg").classList.add("show");let o=2e3;this.hasAttribute("delay")&&(o=+this.getAttribute("delay")),this.timer||(this.timer=setTimeout(()=>{s.querySelector("#msg").classList.remove("show"),clearTimeout(this.timer),this.timer=null},o))}static init(s){var r={},s=(s&&Object.assign(r,s),document.createElement("w-msg"));return r.type&&s.setAttribute("type",r.type),r.position&&s.setAttribute("position",r.position),r.delay&&s.setAttribute("delay",r.delay),document.body.append(s),s}}customElements.define("w-msg",la);class aa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this._drag=!1,this._focus=!1,this.accept=[".mp4",".webm",".ogg",".mp3"]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["src","poster"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var e=this.shadowRoot,r=this.hasAttribute("src")?this.getAttribute("src"):"",s=this.hasAttribute("poster")?this.getAttribute("poster"):"";this._reset(),e.querySelector("#video").src=r,e.querySelector("#video").poster=s}_event(){let e=this.shadowRoot;e.querySelector("#control-main").addEventListener("click",r=>{e.querySelector("#video").paused?this.play():this.pause()}),e.querySelector("#control-main").addEventListener("dblclick",r=>{this._fullscreenHandler(r)}),e.querySelector("#video").addEventListener("loadedmetadata",r=>{e.querySelector("#time-total").innerHTML=this._timeFormat(e.querySelector("#video").duration)}),e.querySelector("#video").addEventListener("error",r=>{}),e.querySelector("#video").addEventListener("timeupdate",r=>{e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime);var s=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%";e.querySelector("#timeline").style.width=s}),e.querySelector("#video").addEventListener("ended",r=>{e.querySelector("#video").pause(),e.querySelector(".icon-play").classList.remove("hide")}),e.querySelector("#progress").addEventListener("pointerdown",r=>{e.querySelector("#progress").setPointerCapture(r.pointerId),this._drag=!0,e.querySelector("#timeline").classList.add("show-after"),r=this._getRatio(r.pageX),e.querySelector("#video").currentTime=e.querySelector("#video").duration*r}),e.querySelector("#progress").addEventListener("pointermove",r=>{this._drag&&(r=this._getRatio(r.pageX),e.querySelector("#timeline").style.width=100*r+"%",r=e.querySelector("#video").duration*r||0,e.querySelector("#time-cur").innerHTML=this._timeFormat(r),e.querySelector("#video").currentTime=r)}),e.querySelector("#progress").addEventListener("pointerup",r=>{this._drag=!1,e.querySelector("#timeline").classList.remove("show-after")}),document.addEventListener("keydown",r=>{var s;this._focus&&(r.preventDefault(),r.key=="ArrowLeft"?(e.querySelector("#video").currentTime-=10,e.querySelector("#video").currentTime<0&&(e.querySelector("#video").currentTime=0),e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime),s=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%",e.querySelector("#timeline").style.width=s):r.key=="ArrowRight"?(e.querySelector("#video").currentTime+=10,e.querySelector("#video").currentTime>e.querySelector("#video").duration&&(e.querySelector("#video").currentTime=e.querySelector("#video").duration),e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime),s=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%",e.querySelector("#timeline").style.width=s):r.key==" "&&(e.querySelector("#video").paused?this.play():this.pause()))}),e.querySelector("#web-player").addEventListener("contextmenu",r=>{r.preventDefault(),this._showContextmenu(r)}),e.querySelector("#web-player").addEventListener("click",r=>{this._hideContextmenu()}),e.querySelector("#openfile").addEventListener("click",r=>{e.querySelector("#file").dispatchEvent(new MouseEvent("click"))}),e.querySelector("#file").addEventListener("change",r=>{var s=e.querySelector("#file").files[0];let o=!1;for(let i=0;i<this.accept.length;i++)if(s.name.endsWith(this.accept[i])){o=!0;break}o?(this._reset(),e.querySelector("#video").src=URL.createObjectURL(s),this.play()):alert("file not accept")}),e.querySelector("#menu-list-item-github").addEventListener("click",r=>{window.open("https://github.com/gaojie0910","_blank")}),e.querySelector("#web-player").addEventListener("focus",r=>{this._focus=!0}),e.querySelector("#web-player").addEventListener("blur",r=>{this._focus=!1,this._hideContextmenu()})}play(){var e=this.shadowRoot;e.querySelector(".icon-play").classList.add("hide"),e.querySelector("#video").play()}pause(){var e=this.shadowRoot;e.querySelector(".icon-play").classList.remove("hide"),e.querySelector("#video").pause()}_fullscreenHandler(e){var r=this.shadowRoot;navigator.userAgent.includes("Mobile")?r.querySelector("#web-player").classList.toggle("full"):document.fullscreenElement?document.exitFullscreen():r.querySelector("#web-player").requestFullscreen()}_reset(){var e=this.shadowRoot;e.querySelector("#video").src="",e.querySelector("#video").poster="",e.querySelector("#timeline").style.width=0,e.querySelector("#time-total").innerHTML=this._timeFormat(0),e.querySelector("#time-cur").innerHTML=this._timeFormat(0),e.querySelector("#video").pause(),e.querySelector(".icon-play").classList.remove("hide")}_hideContextmenu(){this.shadowRoot.querySelector("#contextmenu").classList.add("hide")}_showContextmenu(e){var r=this.shadowRoot;r.querySelector("#contextmenu").classList.remove("hide"),r.querySelector("#contextmenu").style.left=e.pageX-r.querySelector("#web-player").getBoundingClientRect().left-document.documentElement.scrollLeft+"px",r.querySelector("#contextmenu").style.top=e.pageY-r.querySelector("#web-player").getBoundingClientRect().top-document.documentElement.scrollTop+"px"}_getRatio(s){var r=this.shadowRoot,s=(s-(r.querySelector("#progress").getBoundingClientRect().left-document.documentElement.scrollLeft))/r.querySelector("#progress").scrollWidth;return(s=1<s?1:s)<0?0:s}_timeFormat(e){e=parseInt(e,10);let r=Math.floor(e/3600),s=Math.floor((e-3600*r)/60),o=e-3600*r-60*s;return r<10&&(r="0"+r),s<10&&(s="0"+s),o<10&&(o="0"+o),r+":"+s+":"+o}}customElements.define("w-player",aa);class ca extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["size","checked","disabled"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("checked")&&r.querySelector("#radio").classList.add("checked"),this.hasAttribute("size")&&(e=this.getAttribute("size"),r.querySelector("#radio").classList.add(e)),this.hasAttribute("disabled")&&r.querySelector("#radio").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#radio").classList.value="radio"}_event(){this.shadowRoot}}customElements.define("w-radio",ca);class ua extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let e=this.getAttribute("value");Array.from(this.children).forEach(r=>{e==r.getAttribute("value")?r.setAttribute("checked",""):r.removeAttribute("checked")})}}_reset(){this.shadowRoot}_event(){this.shadowRoot.addEventListener("click",e=>{this.hasAttribute("disabled")||e.target.tagName!="W-RADIO"||e.target.hasAttribute("disabled")||e.target.hasAttribute("checked")||(Array.from(this.children).forEach(r=>{r.removeAttribute("checked")}),e.target.setAttribute("checked",""),e=e.target.hasAttribute("value")?e.target.getAttribute("value"):null,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-radios",ua);class ha extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.observer=null,this.lazyArr=[]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot}_event(){var e=this.shadowRoot;this.observer=new IntersectionObserver(r=>{r[0].isIntersecting&&this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0}))}),this.observer.observe(e.querySelector("#loading"))}}customElements.define("w-scroll-loading",ha);class da extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","disabled","size"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let e=this.shadowRoot;var r;e.querySelector("#select").innerHTML="",e.querySelector("#slot").assignedElements().forEach(s=>{e.querySelector("#select").appendChild(s.cloneNode(!0))}),this.hasAttribute("value")&&(r=this.getAttribute("value"),e.querySelector("#select").value=r),this.hasAttribute("disabled")?e.querySelector("#select").setAttribute("disabled",""):e.querySelector("#select").removeAttribute("disabled"),this.hasAttribute("size")&&(r=this.getAttribute("size"),e.querySelector("#select").classList.add(r))}_reset(){this.shadowRoot.querySelector("#select").classList.value="select"}_event(){this.shadowRoot.querySelector("#select").addEventListener("change",e=>{e=e.target.value,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-select",da);class fa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.cur=1,this.total=1,this.timer=null,this.pre=0,this.distance=0,this.isMove=!1,this.vetical=!1,this.width=0,this.height=0,this.startTime=Date.now()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["vertical","auto","pagehide"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let e=this.shadowRoot;this.hasAttribute("vertical")?(e.querySelector("#slide").classList.add("vertical"),this.vetical=!0):this.vetical=!1,this.hasAttribute("pagehide")?e.querySelector("#page").setAttribute("hidden",""):e.querySelector("#page").removeAttribute("hidden"),this.hasAttribute("auto")?this.total!=1&&(this.timer=setInterval(()=>{this.cur++,this.cur>this.total&&(this.cur=1),this.appendChild(this.firstElementChild.cloneNode(!0)),this.hasAttribute("vertical")?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},300),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))},3e3)):(clearInterval(this.timer),this.timer=null)}_reset(){var e=this.shadowRoot;e.querySelector("#slide").classList.value="slide",this.width=+getComputedStyle(this).width.split("px")[0],this.height=+getComputedStyle(this).height.split("px")[0],this.cur=1,this.total=e.querySelector("#slide-wrap").assignedElements().length,e.querySelector("#page").innerHTML=this.cur+"/"+this.total}_event(){let e=this.shadowRoot;this.total!=1&&(e.querySelector("#slide-wrap").addEventListener("pointerdown",r=>{this.isMove=!0,e.querySelector("#slide-wrap").assignedElements().length>this.total?this.isMove=!1:(clearInterval(this.timer),this.timer=null,this.distance=0,this.startTime=Date.now(),this.pre=this._getPosition(r),this.insertAdjacentElement("afterbegin",this.lastElementChild.cloneNode(!0)),this.vetical?e.querySelector("#slide-wrap").scrollTo(0,this.height):e.querySelector("#slide-wrap").scrollTo(this.width,0))}),e.querySelector("#slide-wrap").addEventListener("pointermove",r=>{this.isMove&&(e.querySelector("#slide-wrap").setPointerCapture(r.pointerId),this.distance=this._getPosition(r)-this.pre,this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:-this.distance+this.height,behavior:"auto"}):e.querySelector("#slide-wrap").scroll({left:-this.distance+this.width,top:0,behavior:"auto"}))}),e.querySelector("#slide-wrap").addEventListener("pointerup",r=>{if(this.isMove){this.isMove=!1;var s=this.distance/(Date.now()-this.startTime);let o=this.width/2;this.vetical&&(o=this.height/2),this.distance<-o||s<-.5?(this.cur==this.total?this.cur=1:this.cur++,this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:2*this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:2*this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),this.insertAdjacentElement("beforeend",this.firstElementChild.cloneNode(!0)),this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))):this.distance>o||.5<s?(this.cur==1?this.cur=this.total:this.cur--,e.querySelector("#slide-wrap").scroll({left:0,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.lastElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))):(-o<this.distance&&this.distance<o||-.5<s&&s<.5)&&(this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200)),this.hasAttribute("auto")&&(clearInterval(this.timer),this.timer=setInterval(()=>{this.cur++,this.cur>this.total&&(this.cur=1),this.appendChild(this.firstElementChild.cloneNode(!0)),this.hasAttribute("vertical")?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},300),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))},3e3))}}))}_getPosition(e){var r,s=this.shadowRoot;return this.vetical?(r=s.querySelector("#slide").getBoundingClientRect().top-document.documentElement.scrollTop,e.pageY-r):(r=s.querySelector("#slide").getBoundingClientRect().left-document.documentElement.scrollLeft,e.pageX-r)}}customElements.define("w-slide",fa);class pa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot.querySelector("#slide-item").classList.value="slide-item"}_event(){this.shadowRoot}}customElements.define("w-slide-item",pa);class ga extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["columns","hover","sticky","bordered","selected"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("columns")&&(e=this.getAttribute("columns"),r.querySelector("#row").style.gridTemplateColumns=e),this.hasAttribute("hover")&&r.querySelector("#row").classList.add("hover"),this.hasAttribute("sticky")&&r.querySelector("#row").classList.add("sticky"),this.hasAttribute("bordered")&&r.querySelector("#row").classList.add("bordered"),this.hasAttribute("selected")&&r.querySelector("#row").classList.add("selected")}_reset(){this.shadowRoot.querySelector("#row").classList.value="row"}_event(){this.shadowRoot}}customElements.define("w-table-row",ga);class ba extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["col","row"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var e;this._reset(),this.shadowRoot,this.hasAttribute("col")&&(e=this.getAttribute("col"),this.style.gridColumnStart="span "+e),this.hasAttribute("row")&&(e=this.getAttribute("row"),this.style.gridRowStart="span "+e)}_reset(){this.shadowRoot.querySelector("#item").classList.value="item"}_event(){this.shadowRoot}}customElements.define("w-table-item",ba);class ma extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.data=null,this.column=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["data","column","height","sticky"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;if(this.hasAttribute("height")?(r=this.getAttribute("height"),e.querySelector("#table-container").style.height=r):e.querySelector("#table-container").style.height="",this.hasAttribute("sticky")?e.querySelector("#header").setAttribute("sticky",""):e.querySelector("#header").removeAttribute("sticky"),this.hasAttribute("column")){var r=JSON.parse(this.getAttribute("column"));this.column=r;let s="";s+=`<w-table-row columns="${this._getColumns()}" style="background-color:${getComputedStyle(this).backgroundColor}">`,this.column.forEach(o=>{s+=`
                    <w-table-item>${o.label}</w-table-item>
                `}),s+="</w-table-row>",e.querySelector("#header").innerHTML=s}if(this.hasAttribute("data")){r=JSON.parse(this.getAttribute("data")),this.data=r;let s="";this.data.forEach(o=>{s+=`<w-table-row hover bordered columns="${this._getColumns()}">`,Object.values(o).forEach(i=>{s+=`
                        <w-table-item>${i}</w-table-item>
                    `}),s+="</w-table-row>"}),e.querySelector("#body").innerHTML=s}}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_event(){this.shadowRoot}_getColumns(){let e="";return this.column&&this.column.forEach(r=>{r.width?e+=r.width+" ":e+="1fr "}),e}}customElements.define("w-table",ma);class va extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.url=null,this.auth=null,this.pagination={cur:1,count:1,total:1}}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._initData(),this._event()}static get observedAttributes(){return["column","height","sticky","url","count","auth"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("column")&&e.querySelector("#table").setAttribute("column",this.getAttribute("column")),this.hasAttribute("height")?e.querySelector("#table").setAttribute("height",this.getAttribute("height")):e.querySelector("#table").removeAttribute("height"),this.hasAttribute("sticky")?e.querySelector("#table").setAttribute("sticky",""):e.querySelector("#table").removeAttribute("sticky"),this.hasAttribute("url")?this.url=this.getAttribute("url"):this.url=null,this.hasAttribute("count")?this.pagination.count=+this.getAttribute("count"):this.pagination.count=1,this.hasAttribute("auth")&&(this.auth=this.getAttribute("auth"))}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_initData(){var e=this.shadowRoot;e.querySelector("#cur").innerHTML=this.pagination.cur,e.querySelector("#pre").classList.add("disabled"),e.querySelector("#next").classList.add("disabled"),this._fetchData()}_event(){let e=this.shadowRoot;e.querySelector("#pre").addEventListener("click",r=>{e.querySelector("#pre").classList.contains("disabled")||(e.querySelector("#next").classList.remove("disabled"),this.pagination.cur--,e.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur<=1&&e.querySelector("#pre").classList.add("disabled"),this._fetchData())}),e.querySelector("#next").addEventListener("click",r=>{e.querySelector("#next").classList.contains("disabled")||(e.querySelector("#pre").classList.remove("disabled"),this.pagination.cur++,e.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur>=this.pagination.total&&e.querySelector("#next").classList.add("disabled"),this._fetchData())}),e.querySelector("#cur").addEventListener("keypress",r=>{if(r.key=="Enter"){console.log("Enter"),e.querySelector("#cur").blur(),this.pagination.total!=1&&(e.querySelector("#pre").classList.remove("disabled"),e.querySelector("#next").classList.remove("disabled"));let s=+e.querySelector("#cur").innerHTML;s<=1&&(s=1,e.querySelector("#pre").classList.add("disabled")),s>=this.pagination.total&&(s=this.pagination.total,e.querySelector("#next").classList.add("disabled")),e.querySelector("#cur").innerHTML=s,this.pagination.cur!=s&&(this.pagination.cur=s,this._fetchData())}else if(!"1234567890".includes(r.key))return r.preventDefault(),r.defaultPrevented})}_fetchData(){this.shadowRoot;var e={headers:{"Content-Type":"application/json;charset=utf-8",Authorization:this.auth},method:"get"};fetch(`${this.url}?cur=${this.pagination.cur}&count=`+this.pagination.count,e).then(r=>r.json()).then(r=>{this.dispatchEvent(new CustomEvent("fetchData",{detail:{data:r},bubbles:!0}))}).catch(r=>{console.log(r)})}setData(e){var r=this.shadowRoot;r.querySelector("#table").setAttribute("data",JSON.stringify(e.data)),this.pagination.total=e.total||1,r.querySelector("#total").innerHTML=this.pagination.total,this.pagination.cur>=this.pagination.total?r.querySelector("#next").classList.add("disabled"):r.querySelector("#next").classList.remove("disabled")}resetTableData(){this.pagination.cur=1,this._initData()}}customElements.define("w-table-pagination",va);class ya extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","active","disabled"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),r.querySelector("#tab").setAttribute("value",e)),this.hasAttribute("active")&&r.querySelector("#tab").classList.add("active"),this.hasAttribute("disabled")&&r.querySelector("#tab").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#tab").classList.value="tab"}_event(){this.shadowRoot}}customElements.define("w-tab",ya);class wa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let e=this.getAttribute("value");Array.from(this.children).forEach(r=>{r.removeAttribute("active"),r.hasAttribute("value")&&r.getAttribute("value")==e&&r.setAttribute("active","")})}}_reset(){this.shadowRoot.querySelector("#tabs").classList.value="tabs"}_event(){this.shadowRoot.querySelector("#tabs").addEventListener("click",e=>{e.target.tagName!="W-TAB"||e.target.hasAttribute("disabled")||e.target.getAttribute("value")==this.getAttribute("value")||(e=e.target.hasAttribute("value")?e.target.getAttribute("value"):null,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-tabs",wa);class _a extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","placeholder","disabled","size","error"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),r.querySelector("#textarea").value=e),this.hasAttribute("placeholder")&&(e=this.getAttribute("placeholder"),r.querySelector("#textarea").placeholder=e),this.hasAttribute("disabled")&&(r.querySelector("#textarea").disabled="disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),r.querySelector("#textarea").classList.add(e)),this.hasAttribute("error")&&r.querySelector("#textarea").classList.add("error")}_reset(){this.shadowRoot.querySelector("#textarea").classList.value="textarea"}_event(){this.shadowRoot.querySelector("#textarea").addEventListener("input",e=>{e=e.target.value,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-textarea",_a);class xa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["on","size","disabled"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,r=this.shadowRoot;this.hasAttribute("size")&&(e=this.getAttribute("size"),r.querySelector("#toggle").classList.add(e)),this.hasAttribute("on")&&r.querySelector("#toggle").classList.add("on"),this.hasAttribute("disabled")&&r.querySelector("#toggle").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#toggle").classList.value="toggle"}_event(){this.shadowRoot.querySelector("#toggle").addEventListener("click",()=>{var e;this.hasAttribute("disabled")||(e="",e=this.hasAttribute("on")?(this.removeAttribute("on"),""):(this.setAttribute("on",""),"on"),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-toggle",xa);class Sa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["url","name","multiple","accept","auth","disabled"]}attributeChangedCallback(e,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("url")?e.querySelector("#file").setAttribute("url",this.getAttribute("url")):e.querySelector("#file").setAttribute("url",""),this.hasAttribute("name")?e.querySelector("#file").setAttribute("name",this.getAttribute("name")):e.querySelector("#file").setAttribute("name","file"),this.hasAttribute("multiple")?e.querySelector("#file").setAttribute("multiple",""):e.querySelector("#file").removeAttribute("multiple"),this.hasAttribute("accept")?e.querySelector("#file").setAttribute("accept",this.getAttribute("accept")):e.querySelector("#file").removeAttribute("accept"),this.hasAttribute("auth")?e.querySelector("#file").setAttribute("auth",this.getAttribute("auth")):e.querySelector("#file").removeAttribute("auth"),this.hasAttribute("disabled")?e.querySelector("#file").setAttribute("disabled",""):e.querySelector("#file").removeAttribute("disabled")}_reset(){this.shadowRoot.querySelector("#file").classList.value="file"}_event(){let e=this.shadowRoot;e.addEventListener("click",r=>{e.querySelector("#file").dispatchEvent(new PointerEvent("click"))}),e.querySelector("#file").addEventListener("change",async r=>{try{var s=await fetch(e.querySelector("#file").getAttribute("url"),{headers:{Authorization:e.querySelector("#file").getAttribute("auth")},method:"post",cors:"cors",body:new FormData(e.querySelector("#form"))}),o=await s.json();this.dispatchEvent(new CustomEvent("change",{detail:{value:[...e.querySelector("#file").files],response:s,data:o},bubbles:!0}))}catch(i){this.dispatchEvent(new CustomEvent("change",{detail:{value:[...e.querySelector("#file").files],response:i,data:{msg:"error"}},bubbles:!0}))}e.querySelector("#file").value=""})}}customElements.define("w-upload",Sa);/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const dt=typeof window<"u";function Aa(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const W=Object.assign;function Cr(t,e){const r={};for(const s in e){const o=e[s];r[s]=Ee(o)?o.map(t):t(o)}return r}const Ht=()=>{},Ee=Array.isArray,Ea=/\/$/,qa=t=>t.replace(Ea,"");function Tr(t,e,r="/"){let s,o={},i="",n="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),o=t(i)),c>-1&&(s=s||e.slice(0,c),n=e.slice(c,e.length)),s=Ca(s??e,r),{fullPath:s+(i&&"?")+i+n,path:s,query:o,hash:n}}function Ra(t,e){const r=e.query?t(e.query):"";return e.path+(r&&"?")+r+(e.hash||"")}function Zs(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function La(t,e,r){const s=e.matched.length-1,o=r.matched.length-1;return s>-1&&s===o&&xt(e.matched[s],r.matched[o])&&bi(e.params,r.params)&&t(e.query)===t(r.query)&&e.hash===r.hash}function xt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bi(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const r in t)if(!ka(t[r],e[r]))return!1;return!0}function ka(t,e){return Ee(t)?Gs(t,e):Ee(e)?Gs(e,t):t===e}function Gs(t,e){return Ee(e)?t.length===e.length&&t.every((r,s)=>r===e[s]):t.length===1&&t[0]===e}function Ca(t,e){if(t.startsWith("/"))return t;if(!t)return e;const r=e.split("/"),s=t.split("/");let o=r.length-1,i,n;for(i=0;i<s.length;i++)if(n=s[i],n!==".")if(n==="..")o>1&&o--;else break;return r.slice(0,o).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Nt;(function(t){t.pop="pop",t.push="push"})(Nt||(Nt={}));var Pt;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pt||(Pt={}));function Ta(t){if(!t)if(dt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qa(t)}const Oa=/^[^#]+#/;function Ma(t,e){return t.replace(Oa,"#")+e}function Ha(t,e){const r=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-r.left-(e.left||0),top:s.top-r.top-(e.top||0)}}const _r=()=>({left:window.pageXOffset,top:window.pageYOffset});function Pa(t){let e;if("el"in t){const r=t.el,s=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?s?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;e=Ha(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function eo(t,e){return(history.state?history.state.position-e:-1)+t}const Wr=new Map;function za(t,e){Wr.set(t,e)}function Ia(t){const e=Wr.get(t);return Wr.delete(t),e}let Fa=()=>location.protocol+"//"+location.host;function mi(t,e){const{pathname:r,search:s,hash:o}=e,i=t.indexOf("#");if(i>-1){let c=o.includes(t.slice(i))?t.slice(i).length:1,l=o.slice(c);return l[0]!=="/"&&(l="/"+l),Zs(l,"")}return Zs(r,t)+s+o}function ja(t,e,r,s){let o=[],i=[],n=null;const c=({state:p})=>{const w=mi(t,location),L=r.value,k=e.value;let F=0;if(p){if(r.value=w,e.value=p,n&&n===L){n=null;return}F=k?p.position-k.position:0}else s(w);o.forEach(P=>{P(r.value,L,{delta:F,type:Nt.pop,direction:F?F>0?Pt.forward:Pt.back:Pt.unknown})})};function l(){n=r.value}function h(p){o.push(p);const w=()=>{const L=o.indexOf(p);L>-1&&o.splice(L,1)};return i.push(w),w}function u(){const{history:p}=window;p.state&&p.replaceState(W({},p.state,{scroll:_r()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:h,destroy:f}}function to(t,e,r,s=!1,o=!1){return{back:t,current:e,forward:r,replaced:s,position:window.history.length,scroll:o?_r():null}}function $a(t){const{history:e,location:r}=window,s={value:mi(t,r)},o={value:e.state};o.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,u){const f=t.indexOf("#"),p=f>-1?(r.host&&document.querySelector("base")?t:t.slice(f))+l:Fa()+t+l;try{e[u?"replaceState":"pushState"](h,"",p),o.value=h}catch(w){console.error(w),r[u?"replace":"assign"](p)}}function n(l,h){const u=W({},e.state,to(o.value.back,l,o.value.forward,!0),h,{position:o.value.position});i(l,u,!0),s.value=l}function c(l,h){const u=W({},o.value,e.state,{forward:l,scroll:_r()});i(u.current,u,!0);const f=W({},to(s.value,l,null),{position:u.position+1},h);i(l,f,!1),s.value=l}return{location:s,state:o,push:c,replace:n}}function Na(t){t=Ta(t);const e=$a(t),r=ja(t,e.state,e.location,e.replace);function s(i,n=!0){n||r.pauseListeners(),history.go(i)}const o=W({location:"",base:t,go:s,createHref:Ma.bind(null,t)},e,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function Da(t){return typeof t=="string"||t&&typeof t=="object"}function vi(t){return typeof t=="string"||typeof t=="symbol"}const De={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yi=Symbol("");var ro;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ro||(ro={}));function St(t,e){return W(new Error,{type:t,[yi]:!0},e)}function Pe(t,e){return t instanceof Error&&yi in t&&(e==null||!!(t.type&e))}const so="[^/]+?",Ba={sensitive:!1,strict:!1,start:!0,end:!0},Ua=/[.+*?^${}()[\]/\\]/g;function Ka(t,e){const r=W({},Ba,e),s=[];let o=r.start?"^":"";const i=[];for(const h of t){const u=h.length?[]:[90];r.strict&&!h.length&&(o+="/");for(let f=0;f<h.length;f++){const p=h[f];let w=40+(r.sensitive?.25:0);if(p.type===0)f||(o+="/"),o+=p.value.replace(Ua,"\\$&"),w+=40;else if(p.type===1){const{value:L,repeatable:k,optional:F,regexp:P}=p;i.push({name:L,repeatable:k,optional:F});const M=P||so;if(M!==so){w+=10;try{new RegExp(`(${M})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${L}" (${M}): `+H.message)}}let U=k?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=F&&h.length<2?`(?:/${U})`:"/"+U),F&&(U+="?"),o+=U,w+=20,F&&(w+=-8),k&&(w+=-20),M===".*"&&(w+=-50)}u.push(w)}s.push(u)}if(r.strict&&r.end){const h=s.length-1;s[h][s[h].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const n=new RegExp(o,r.sensitive?"":"i");function c(h){const u=h.match(n),f={};if(!u)return null;for(let p=1;p<u.length;p++){const w=u[p]||"",L=i[p-1];f[L.name]=w&&L.repeatable?w.split("/"):w}return f}function l(h){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const w of p)if(w.type===0)u+=w.value;else if(w.type===1){const{value:L,repeatable:k,optional:F}=w,P=L in h?h[L]:"";if(Ee(P)&&!k)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const M=Ee(P)?P.join("/"):P;if(!M)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${L}"`);u+=M}}return u||"/"}return{re:n,score:s,keys:i,parse:c,stringify:l}}function Wa(t,e){let r=0;for(;r<t.length&&r<e.length;){const s=e[r]-t[r];if(s)return s;r++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Va(t,e){let r=0;const s=t.score,o=e.score;for(;r<s.length&&r<o.length;){const i=Wa(s[r],o[r]);if(i)return i;r++}if(Math.abs(o.length-s.length)===1){if(oo(s))return 1;if(oo(o))return-1}return o.length-s.length}function oo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ya={type:0,value:""},Ja=/[a-zA-Z0-9_]/;function Qa(t){if(!t)return[[]];if(t==="/")return[[Ya]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${r})/"${h}": ${w}`)}let r=0,s=r;const o=[];let i;function n(){i&&o.push(i),i=[]}let c=0,l,h="",u="";function f(){h&&(r===0?i.push({type:0,value:h}):r===1||r===2||r===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function p(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&r!==2){s=r,r=4;continue}switch(r){case 0:l==="/"?(h&&f(),n()):l===":"?(f(),r=1):p();break;case 4:p(),r=s;break;case 1:l==="("?r=2:Ja.test(l)?p():(f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:r=3:u+=l;break;case 3:f(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:e("Unknown state");break}}return r===2&&e(`Unfinished custom RegExp for param "${h}"`),f(),n(),o}function Xa(t,e,r){const s=Ka(Qa(t.path),r),o=W(s,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function Za(t,e){const r=[],s=new Map;e=lo({strict:!1,end:!0,sensitive:!1},e);function o(u){return s.get(u)}function i(u,f,p){const w=!p,L=Ga(u);L.aliasOf=p&&p.record;const k=lo(e,u),F=[L];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of U)F.push(W({},L,{components:p?p.record.components:L.components,path:H,aliasOf:p?p.record:L}))}let P,M;for(const U of F){const{path:H}=U;if(f&&H[0]!=="/"){const se=f.record.path,ie=se[se.length-1]==="/"?"":"/";U.path=f.record.path+(H&&ie+H)}if(P=Xa(U,f,k),p?p.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),w&&u.name&&!no(P)&&n(u.name)),L.children){const se=L.children;for(let ie=0;ie<se.length;ie++)i(se[ie],P,p&&p.children[ie])}p=p||P,l(P)}return M?()=>{n(M)}:Ht}function n(u){if(vi(u)){const f=s.get(u);f&&(s.delete(u),r.splice(r.indexOf(f),1),f.children.forEach(n),f.alias.forEach(n))}else{const f=r.indexOf(u);f>-1&&(r.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(n),u.alias.forEach(n))}}function c(){return r}function l(u){let f=0;for(;f<r.length&&Va(u,r[f])>=0&&(u.record.path!==r[f].record.path||!wi(u,r[f]));)f++;r.splice(f,0,u),u.record.name&&!no(u)&&s.set(u.record.name,u)}function h(u,f){let p,w={},L,k;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw St(1,{location:u});k=p.record.name,w=W(io(f.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&io(u.params,p.keys.map(M=>M.name))),L=p.stringify(w)}else if("path"in u)L=u.path,p=r.find(M=>M.re.test(L)),p&&(w=p.parse(L),k=p.record.name);else{if(p=f.name?s.get(f.name):r.find(M=>M.re.test(f.path)),!p)throw St(1,{location:u,currentLocation:f});k=p.record.name,w=W({},f.params,u.params),L=p.stringify(w)}const F=[];let P=p;for(;P;)F.unshift(P.record),P=P.parent;return{name:k,path:L,params:w,matched:F,meta:tc(F)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:h,removeRoute:n,getRoutes:c,getRecordMatcher:o}}function io(t,e){const r={};for(const s of e)s in t&&(r[s]=t[s]);return r}function Ga(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ec(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ec(t){const e={},r=t.props||!1;if("component"in t)e.default=r;else for(const s in t.components)e[s]=typeof r=="boolean"?r:r[s];return e}function no(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tc(t){return t.reduce((e,r)=>W(e,r.meta),{})}function lo(t,e){const r={};for(const s in t)r[s]=s in e?e[s]:t[s];return r}function wi(t,e){return e.children.some(r=>r===t||wi(t,r))}const _i=/#/g,rc=/&/g,sc=/\//g,oc=/=/g,ic=/\?/g,xi=/\+/g,nc=/%5B/g,lc=/%5D/g,Si=/%5E/g,ac=/%60/g,Ai=/%7B/g,cc=/%7C/g,Ei=/%7D/g,uc=/%20/g;function gs(t){return encodeURI(""+t).replace(cc,"|").replace(nc,"[").replace(lc,"]")}function hc(t){return gs(t).replace(Ai,"{").replace(Ei,"}").replace(Si,"^")}function Vr(t){return gs(t).replace(xi,"%2B").replace(uc,"+").replace(_i,"%23").replace(rc,"%26").replace(ac,"`").replace(Ai,"{").replace(Ei,"}").replace(Si,"^")}function dc(t){return Vr(t).replace(oc,"%3D")}function fc(t){return gs(t).replace(_i,"%23").replace(ic,"%3F")}function pc(t){return t==null?"":fc(t).replace(sc,"%2F")}function cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gc(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<s.length;++o){const i=s[o].replace(xi," "),n=i.indexOf("="),c=cr(n<0?i:i.slice(0,n)),l=n<0?null:cr(i.slice(n+1));if(c in e){let h=e[c];Ee(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function ao(t){let e="";for(let r in t){const s=t[r];if(r=dc(r),s==null){s!==void 0&&(e+=(e.length?"&":"")+r);continue}(Ee(s)?s.map(i=>i&&Vr(i)):[s&&Vr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+r,i!=null&&(e+="="+i))})}return e}function bc(t){const e={};for(const r in t){const s=t[r];s!==void 0&&(e[r]=Ee(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return e}const mc=Symbol(""),co=Symbol(""),xr=Symbol(""),bs=Symbol(""),Yr=Symbol("");function kt(){let t=[];function e(s){return t.push(s),()=>{const o=t.indexOf(s);o>-1&&t.splice(o,1)}}function r(){t=[]}return{add:e,list:()=>t,reset:r}}function Ue(t,e,r,s,o){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((n,c)=>{const l=f=>{f===!1?c(St(4,{from:r,to:e})):f instanceof Error?c(f):Da(f)?c(St(2,{from:e,to:f})):(i&&s.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),n())},h=t.call(s&&s.instances[o],e,r,l);let u=Promise.resolve(h);t.length<3&&(u=u.then(l)),u.catch(f=>c(f))})}function Or(t,e,r,s){const o=[];for(const i of t)for(const n in i.components){let c=i.components[n];if(!(e!=="beforeRouteEnter"&&!i.instances[n]))if(vc(c)){const h=(c.__vccOpts||c)[e];h&&o.push(Ue(h,r,s,i,n))}else{let l=c();o.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const u=Aa(h)?h.default:h;i.components[n]=u;const p=(u.__vccOpts||u)[e];return p&&Ue(p,r,s,i,n)()}))}}return o}function vc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uo(t){const e=Ae(xr),r=Ae(bs),s=ge(()=>e.resolve(tt(t.to))),o=ge(()=>{const{matched:l}=s.value,{length:h}=l,u=l[h-1],f=r.matched;if(!u||!f.length)return-1;const p=f.findIndex(xt.bind(null,u));if(p>-1)return p;const w=ho(l[h-2]);return h>1&&ho(u)===w&&f[f.length-1].path!==w?f.findIndex(xt.bind(null,l[h-2])):p}),i=ge(()=>o.value>-1&&xc(r.params,s.value.params)),n=ge(()=>o.value>-1&&o.value===r.matched.length-1&&bi(r.params,s.value.params));function c(l={}){return _c(l)?e[tt(t.replace)?"replace":"push"](tt(t.to)).catch(Ht):Promise.resolve()}return{route:s,href:ge(()=>s.value.href),isActive:i,isExactActive:n,navigate:c}}const yc=Jo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uo,setup(t,{slots:e}){const r=Dt(uo(t)),{options:s}=Ae(xr),o=ge(()=>({[fo(t.activeClass,s.linkActiveClass,"router-link-active")]:r.isActive,[fo(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=e.default&&e.default(r);return t.custom?i:gi("a",{"aria-current":r.isExactActive?t.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},i)}}}),wc=yc;function _c(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xc(t,e){for(const r in e){const s=e[r],o=t[r];if(typeof s=="string"){if(s!==o)return!1}else if(!Ee(o)||o.length!==s.length||s.some((i,n)=>i!==o[n]))return!1}return!0}function ho(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fo=(t,e,r)=>t??e??r,Sc=Jo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:r}){const s=Ae(Yr),o=ge(()=>t.route||s.value),i=Ae(co,0),n=ge(()=>{let h=tt(i);const{matched:u}=o.value;let f;for(;(f=u[h])&&!f.components;)h++;return h}),c=ge(()=>o.value.matched[n.value]);er(co,ge(()=>n.value+1)),er(mc,c),er(Yr,o);const l=Fo();return Zt(()=>[l.value,c.value,t.name],([h,u,f],[p,w,L])=>{u&&(u.instances[f]=h,w&&w!==u&&h&&h===p&&(u.leaveGuards.size||(u.leaveGuards=w.leaveGuards),u.updateGuards.size||(u.updateGuards=w.updateGuards))),h&&u&&(!w||!xt(u,w)||!p)&&(u.enterCallbacks[f]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=o.value,u=t.name,f=c.value,p=f&&f.components[u];if(!p)return po(r.default,{Component:p,route:h});const w=f.props[u],L=w?w===!0?h.params:typeof w=="function"?w(h):w:null,F=gi(p,W({},L,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return po(r.default,{Component:F,route:h})||F}}});function po(t,e){if(!t)return null;const r=t(e);return r.length===1?r[0]:r}const qi=Sc;function Ac(t){const e=Za(t.routes,t),r=t.parseQuery||gc,s=t.stringifyQuery||ao,o=t.history,i=kt(),n=kt(),c=kt(),l=fn(De);let h=De;dt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cr.bind(null,m=>""+m),f=Cr.bind(null,pc),p=Cr.bind(null,cr);function w(m,q){let A,C;return vi(m)?(A=e.getRecordMatcher(m),C=q):C=m,e.addRoute(C,A)}function L(m){const q=e.getRecordMatcher(m);q&&e.removeRoute(q)}function k(){return e.getRoutes().map(m=>m.record)}function F(m){return!!e.getRecordMatcher(m)}function P(m,q){if(q=W({},q||l.value),typeof m=="string"){const a=Tr(r,m,q.path),d=e.resolve({path:a.path},q),g=o.createHref(a.fullPath);return W(a,d,{params:p(d.params),hash:cr(a.hash),redirectedFrom:void 0,href:g})}let A;if("path"in m)A=W({},m,{path:Tr(r,m.path,q.path).path});else{const a=W({},m.params);for(const d in a)a[d]==null&&delete a[d];A=W({},m,{params:f(m.params)}),q.params=f(q.params)}const C=e.resolve(A,q),D=m.hash||"";C.params=u(p(C.params));const G=Ra(s,W({},m,{hash:hc(D),path:C.path})),$=o.createHref(G);return W({fullPath:G,hash:D,query:s===ao?bc(m.query):m.query||{}},C,{redirectedFrom:void 0,href:$})}function M(m){return typeof m=="string"?Tr(r,m,l.value.path):W({},m)}function U(m,q){if(h!==m)return St(8,{from:q,to:m})}function H(m){return be(m)}function se(m){return H(W(M(m),{replace:!0}))}function ie(m){const q=m.matched[m.matched.length-1];if(q&&q.redirect){const{redirect:A}=q;let C=typeof A=="function"?A(m):A;return typeof C=="string"&&(C=C.includes("?")||C.includes("#")?C=M(C):{path:C},C.params={}),W({query:m.query,hash:m.hash,params:"path"in C?{}:m.params},C)}}function be(m,q){const A=h=P(m),C=l.value,D=m.state,G=m.force,$=m.replace===!0,a=ie(A);if(a)return be(W(M(a),{state:typeof a=="object"?W({},D,a.state):D,force:G,replace:$}),q||A);const d=A;d.redirectedFrom=q;let g;return!G&&La(s,C,A)&&(g=St(16,{to:d,from:C}),Je(C,C,!0,!1)),(g?Promise.resolve(g):nt(d,C)).catch(b=>Pe(b)?Pe(b,2)?b:me(b):J(b,d,C)).then(b=>{if(b){if(Pe(b,2))return be(W({replace:$},M(b.to),{state:typeof b.to=="object"?W({},D,b.to.state):D,force:G}),q||d)}else b=$e(d,C,!0,$,D);return Re(d,C,b),b})}function qe(m,q){const A=U(m,q);return A?Promise.reject(A):Promise.resolve()}function nt(m,q){let A;const[C,D,G]=Ec(m,q);A=Or(C.reverse(),"beforeRouteLeave",m,q);for(const a of C)a.leaveGuards.forEach(d=>{A.push(Ue(d,m,q))});const $=qe.bind(null,m,q);return A.push($),ht(A).then(()=>{A=[];for(const a of i.list())A.push(Ue(a,m,q));return A.push($),ht(A)}).then(()=>{A=Or(D,"beforeRouteUpdate",m,q);for(const a of D)a.updateGuards.forEach(d=>{A.push(Ue(d,m,q))});return A.push($),ht(A)}).then(()=>{A=[];for(const a of m.matched)if(a.beforeEnter&&!q.matched.includes(a))if(Ee(a.beforeEnter))for(const d of a.beforeEnter)A.push(Ue(d,m,q));else A.push(Ue(a.beforeEnter,m,q));return A.push($),ht(A)}).then(()=>(m.matched.forEach(a=>a.enterCallbacks={}),A=Or(G,"beforeRouteEnter",m,q),A.push($),ht(A))).then(()=>{A=[];for(const a of n.list())A.push(Ue(a,m,q));return A.push($),ht(A)}).catch(a=>Pe(a,8)?a:Promise.reject(a))}function Re(m,q,A){for(const C of c.list())C(m,q,A)}function $e(m,q,A,C,D){const G=U(m,q);if(G)return G;const $=q===De,a=dt?history.state:{};A&&(C||$?o.replace(m.fullPath,W({scroll:$&&a&&a.scroll},D)):o.push(m.fullPath,D)),l.value=m,Je(m,q,A,$),me()}let Le;function lt(){Le||(Le=o.listen((m,q,A)=>{if(!Bt.listening)return;const C=P(m),D=ie(C);if(D){be(W(D,{replace:!0}),C).catch(Ht);return}h=C;const G=l.value;dt&&za(eo(G.fullPath,A.delta),_r()),nt(C,G).catch($=>Pe($,12)?$:Pe($,2)?(be($.to,C).then(a=>{Pe(a,20)&&!A.delta&&A.type===Nt.pop&&o.go(-1,!1)}).catch(Ht),Promise.reject()):(A.delta&&o.go(-A.delta,!1),J($,C,G))).then($=>{$=$||$e(C,G,!1),$&&(A.delta&&!Pe($,8)?o.go(-A.delta,!1):A.type===Nt.pop&&Pe($,20)&&o.go(-1,!1)),Re(C,G,$)}).catch(Ht)}))}let Ye=kt(),qt=kt(),ee;function J(m,q,A){me(m);const C=qt.list();return C.length?C.forEach(D=>D(m,q,A)):console.error(m),Promise.reject(m)}function V(){return ee&&l.value!==De?Promise.resolve():new Promise((m,q)=>{Ye.add([m,q])})}function me(m){return ee||(ee=!m,lt(),Ye.list().forEach(([q,A])=>m?A(m):q()),Ye.reset()),m}function Je(m,q,A,C){const{scrollBehavior:D}=t;if(!dt||!D)return Promise.resolve();const G=!A&&Ia(eo(m.fullPath,0))||(C||!A)&&history.state&&history.state.scroll||null;return Do().then(()=>D(m,q,G)).then($=>$&&Pa($)).catch($=>J($,m,q))}const ve=m=>o.go(m);let ue;const at=new Set,Bt={currentRoute:l,listening:!0,addRoute:w,removeRoute:L,hasRoute:F,getRoutes:k,resolve:P,options:t,push:H,replace:se,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:n.add,afterEach:c.add,onError:qt.add,isReady:V,install(m){const q=this;m.component("RouterLink",wc),m.component("RouterView",qi),m.config.globalProperties.$router=q,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(l)}),dt&&!ue&&l.value===De&&(ue=!0,H(o.location).catch(D=>{}));const A={};for(const D in De)A[D]=ge(()=>l.value[D]);m.provide(xr,q),m.provide(bs,Dt(A)),m.provide(Yr,l);const C=m.unmount;at.add(m),m.unmount=function(){at.delete(m),at.size<1&&(h=De,Le&&Le(),Le=null,l.value=De,ue=!1,ee=!1),C()}}};return Bt}function ht(t){return t.reduce((e,r)=>e.then(()=>r()),Promise.resolve())}function Ec(t,e){const r=[],s=[],o=[],i=Math.max(e.matched.length,t.matched.length);for(let n=0;n<i;n++){const c=e.matched[n];c&&(t.matched.find(h=>xt(h,c))?s.push(c):r.push(c));const l=t.matched[n];l&&(e.matched.find(h=>xt(h,l))||o.push(l))}return[r,s,o]}function qc(){return Ae(xr)}function Rc(){return Ae(bs)}function Lc(t){let e=0;const r=document.createElement("div"),s=document.createElement("img");r.style.transition="all 1s",r.style.position="fixed",r.style.width="100%",r.style.height="100%",r.style.backgroundImage=`url(${t[e]})`,r.style.backgroundSize="cover",r.style.backgroundPosition="center center",s.style.display="none",s.setAttribute("src",t[e<t.length-1?e+1:0]),document.body.prepend(r),document.body.prepend(s),setInterval(()=>{e<t.length-1?e++:e=0,r.style.backgroundImage=`url(${t[e]})`,s.setAttribute("src",t[e<t.length-1?e+1:0])},10*60*1e3)}const kc={__name:"App",setup(t){return qc(),Rc(),Zo(e=>{Lc(["https://picsum.photos/1920/1080"])}),(e,r)=>(ai(),ui(tt(qi)))}},Cc="modulepreload",Tc=function(t){return"/"+t},go={},Qt=function(e,r,s){let o=Promise.resolve();if(r&&r.length>0){const i=document.getElementsByTagName("link");o=Promise.all(r.map(n=>{if(n=Tc(n),n in go)return;go[n]=!0;const c=n.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!s)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===n&&(!c||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Cc,c||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),c)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}return o.then(()=>e()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},Oc=Ac({history:Na("/"),routes:[{path:"/",name:"Index",component:()=>Qt(()=>import("./Index-aGgY37Kk.js"),__vite__mapDeps([0,1,2,3]))},{path:"/web-components-plus",name:"WebComponentsPlus",component:()=>Qt(()=>import("./WebComponentsPlus-rQQKKMGO.js"),__vite__mapDeps([4,1,2,5]))},{path:"/dictionary",name:"Dictionary",component:()=>Qt(()=>import("./Dictionary-R0_dJSsQ.js"),__vite__mapDeps([6,1,2,7]))},{path:"/:pathMatch(.*)*",name:"404",component:()=>Qt(()=>import("./NotFound-Zuh0l-2d.js"),__vite__mapDeps([8,1,2,9]))}]});sr.initColor();window.addEventListener("contextmenu",t=>(t.preventDefault(),!1));const Sr=Wl(kc),Mc=Ql();Sr.config.warnHandler=()=>null;Sr.use(Oc);Sr.use(Mc);Sr.mount("#app");export{Ie as F,de as a,Ic as b,jc as c,di as d,Zo as e,Go as f,Fc as g,hl as h,sr as i,Bc as j,$c as k,ui as l,Nc as m,Dc as n,ai as o,zc as p,Xl as q,Fo as r,tt as s,Pc as t,qc as u,Zt as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Index-aGgY37Kk.js","assets/Header-f8gRX6jf.js","assets/Header-B4J7iWgy.css","assets/Index-CDDQk4zf.css","assets/WebComponentsPlus-rQQKKMGO.js","assets/WebComponentsPlus-lW1pqE3B.css","assets/Dictionary-R0_dJSsQ.js","assets/Dictionary-J-ospy2T.css","assets/NotFound-Zuh0l-2d.js","assets/NotFound-tofmWgTd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}