var Wa=Object.defineProperty;var Va=(t,e,n)=>e in t?Wa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Li=(t,e,n)=>(Va(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ai(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _e={},Ct=[],We=()=>{},Ya=()=>!1,Za=/^on[^a-z]/,In=t=>Za.test(t),li=t=>t.startsWith("onUpdate:"),Te=Object.assign,ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xa=Object.prototype.hasOwnProperty,de=(t,e)=>Xa.call(t,e),ee=Array.isArray,Mt=t=>qn(t)==="[object Map]",yo=t=>qn(t)==="[object Set]",ie=t=>typeof t=="function",Ae=t=>typeof t=="string",Dn=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",vo=t=>(Ee(t)||ie(t))&&ie(t.then)&&ie(t.catch),wo=Object.prototype.toString,qn=t=>wo.call(t),Qa=t=>qn(t).slice(8,-1),So=t=>qn(t)==="[object Object]",ui=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yn=ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ja=/-(\w)/g,Ve=Pn(t=>t.replace(Ja,(e,n)=>n?n.toUpperCase():"")),ja=/\B([A-Z])/g,Ht=Pn(t=>t.replace(ja,"-$1").toLowerCase()),Bn=Pn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jn=Pn(t=>t?`on${Bn(t)}`:""),Et=(t,e)=>!Object.is(t,e),jn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},el=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ii;const Kr=()=>Ii||(Ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function di(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ae(r)?il(r):di(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ae(t)||Ee(t))return t}const tl=/;(?![^(]*\))/g,nl=/:([^]+)/,rl=/\/\*[^]*?\*\//g;function il(t){const e={};return t.replace(rl,"").split(tl).forEach(n=>{if(n){const r=n.split(nl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hi(t){let e="";if(Ae(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=hi(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ol=ai(sl);function Ao(t){return!!t||t===""}const Fp=t=>Ae(t)?t:t==null?"":ee(t)||Ee(t)&&(t.toString===wo||!ie(t.toString))?JSON.stringify(t,xo,2):String(t),xo=(t,e)=>e&&e.__v_isRef?xo(t,e.value):Mt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:yo(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!ee(e)&&!So(e)?String(e):e;let De;class No{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function To(t){return new No(t)}function al(t,e=De){e&&e.active&&e.effects.push(t)}function Ro(){return De}function ll(t){De&&De.cleanups.push(t)}const pi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Oo=t=>(t.w&ct)>0,Co=t=>(t.n&ct)>0,cl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ct},ul=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Oo(i)&&!Co(i)?i.delete(t):e[n++]=i,i.w&=~ct,i.n&=~ct}e.length=n}},Tn=new WeakMap;let Yt=0,ct=1;const Gr=30;let ze;const ft=Symbol(""),Wr=Symbol("");class gi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,al(this,r)}run(){if(!this.active)return this.fn();let e=ze,n=ot;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ze,ze=this,ot=!0,ct=1<<++Yt,Yt<=Gr?cl(this):Di(this),this.fn()}finally{Yt<=Gr&&ul(this),ct=1<<--Yt,ze=this.parent,ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ze===this?this.deferStop=!0:this.active&&(Di(this),this.onStop&&this.onStop(),this.active=!1)}}function Di(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ot=!0;const Mo=[];function Ut(){Mo.push(ot),ot=!1}function Ft(){const t=Mo.pop();ot=t===void 0?!0:t}function Ie(t,e,n){if(ot&&ze){let r=Tn.get(t);r||Tn.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=pi()),ko(i)}}function ko(t,e){let n=!1;Yt<=Gr?Co(t)||(t.n|=ct,n=!Oo(t)):n=!t.has(ze),n&&(t.add(ze),ze.deps.push(t))}function Je(t,e,n,r,i,s){const o=Tn.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||!Dn(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?ui(n)&&a.push(o.get("length")):(a.push(o.get(ft)),Mt(t)&&a.push(o.get(Wr)));break;case"delete":ee(t)||(a.push(o.get(ft)),Mt(t)&&a.push(o.get(Wr)));break;case"set":Mt(t)&&a.push(o.get(ft));break}if(a.length===1)a[0]&&Vr(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Vr(pi(l))}}function Vr(t,e){const n=ee(t)?t:[...t];for(const r of n)r.computed&&qi(r);for(const r of n)r.computed||qi(r)}function qi(t,e){(t!==ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function dl(t,e){var n;return(n=Tn.get(t))==null?void 0:n.get(e)}const hl=ai("__proto__,__v_isRef,__isVue"),Lo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn)),Pi=pl();function pl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=he(this);for(let s=0,o=this.length;s<o;s++)Ie(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ut();const r=he(this)[e].apply(this,n);return Ft(),r}}),t}function gl(t){const e=he(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class Io{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?Tl:Bo:s?Po:qo).get(e))return e;const o=ee(e);if(!i){if(o&&de(Pi,n))return Reflect.get(Pi,n,r);if(n==="hasOwnProperty")return gl}const a=Reflect.get(e,n,r);return(Dn(n)?Lo.has(n):hl(n))||(i||Ie(e,"get",n),s)?a:we(a)?o&&ui(n)?a:a.value:Ee(a)?i?zo(a):$t(a):a}}class Do extends Io{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(It(s)&&we(s)&&!we(r))return!1;if(!this._shallow&&(!Rn(r)&&!It(r)&&(s=he(s),r=he(r)),!ee(e)&&we(s)&&!we(r)))return s.value=r,!0;const o=ee(e)&&ui(n)?Number(n)<e.length:de(e,n),a=Reflect.set(e,n,r,i);return e===he(i)&&(o?Et(r,s)&&Je(e,"set",n,r):Je(e,"add",n,r)),a}deleteProperty(e,n){const r=de(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Je(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Dn(n)||!Lo.has(n))&&Ie(e,"has",n),r}ownKeys(e){return Ie(e,"iterate",ee(e)?"length":ft),Reflect.ownKeys(e)}}class fl extends Io{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bl=new Do,ml=new fl,_l=new Do(!0),fi=t=>t,zn=t=>Reflect.getPrototypeOf(t);function pn(t,e,n=!1,r=!1){t=t.__v_raw;const i=he(t),s=he(e);n||(Et(e,s)&&Ie(i,"get",e),Ie(i,"get",s));const{has:o}=zn(i),a=r?fi:n?_i:nn;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function gn(t,e=!1){const n=this.__v_raw,r=he(n),i=he(t);return e||(Et(t,i)&&Ie(r,"has",t),Ie(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function fn(t,e=!1){return t=t.__v_raw,!e&&Ie(he(t),"iterate",ft),Reflect.get(t,"size",t)}function Bi(t){t=he(t);const e=he(this);return zn(e).has.call(e,t)||(e.add(t),Je(e,"add",t,t)),this}function zi(t,e){e=he(e);const n=he(this),{has:r,get:i}=zn(n);let s=r.call(n,t);s||(t=he(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Et(e,o)&&Je(n,"set",t,e):Je(n,"add",t,e),this}function Hi(t){const e=he(this),{has:n,get:r}=zn(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Je(e,"delete",t,void 0),s}function Ui(){const t=he(this),e=t.size!==0,n=t.clear();return e&&Je(t,"clear",void 0,void 0),n}function bn(t,e){return function(r,i){const s=this,o=s.__v_raw,a=he(o),l=e?fi:t?_i:nn;return!t&&Ie(a,"iterate",ft),o.forEach((u,c)=>r.call(i,l(u),l(c),s))}}function mn(t,e,n){return function(...r){const i=this.__v_raw,s=he(i),o=Mt(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...r),c=n?fi:e?_i:nn;return!e&&Ie(s,"iterate",l?Wr:ft),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[c(h[0]),c(h[1])]:c(h),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function El(){const t={get(s){return pn(this,s)},get size(){return fn(this)},has:gn,add:Bi,set:zi,delete:Hi,clear:Ui,forEach:bn(!1,!1)},e={get(s){return pn(this,s,!1,!0)},get size(){return fn(this)},has:gn,add:Bi,set:zi,delete:Hi,clear:Ui,forEach:bn(!1,!0)},n={get(s){return pn(this,s,!0)},get size(){return fn(this,!0)},has(s){return gn.call(this,s,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:bn(!0,!1)},r={get(s){return pn(this,s,!0,!0)},get size(){return fn(this,!0)},has(s){return gn.call(this,s,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=mn(s,!1,!1),n[s]=mn(s,!0,!1),e[s]=mn(s,!1,!0),r[s]=mn(s,!0,!0)}),[t,n,e,r]}const[yl,vl,wl,Sl]=El();function bi(t,e){const n=e?t?Sl:wl:t?vl:yl;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(de(n,i)&&i in r?n:r,i,s)}const Al={get:bi(!1,!1)},xl={get:bi(!1,!0)},Nl={get:bi(!0,!1)},qo=new WeakMap,Po=new WeakMap,Bo=new WeakMap,Tl=new WeakMap;function Rl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ol(t){return t.__v_skip||!Object.isExtensible(t)?0:Rl(Qa(t))}function $t(t){return It(t)?t:mi(t,!1,bl,Al,qo)}function Cl(t){return mi(t,!1,_l,xl,Po)}function zo(t){return mi(t,!0,ml,Nl,Bo)}function mi(t,e,n,r,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Ol(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function at(t){return It(t)?at(t.__v_raw):!!(t&&t.__v_isReactive)}function It(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function Ho(t){return at(t)||It(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Hn(t){return Nn(t,"__v_skip",!0),t}const nn=t=>Ee(t)?$t(t):t,_i=t=>Ee(t)?zo(t):t;function Uo(t){ot&&ze&&(t=he(t),ko(t.dep||(t.dep=pi())))}function Fo(t,e){t=he(t);const n=t.dep;n&&Vr(n)}function we(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return $o(t,!1)}function Ml(t){return $o(t,!0)}function $o(t,e){return we(t)?t:new kl(t,e)}class kl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:nn(e)}get value(){return Uo(this),this._value}set value(e){const n=this.__v_isShallow||Rn(e)||It(e);e=n?e:he(e),Et(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:nn(e),Fo(this))}}function bt(t){return we(t)?t.value:t}const Ll={get:(t,e,n)=>bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ko(t){return at(t)?t:new Proxy(t,Ll)}function Il(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=ql(t,n);return e}class Dl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dl(he(this._object),this._key)}}function ql(t,e,n){const r=t[e];return we(r)?r:new Dl(t,e,n)}class Pl{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new gi(e,()=>{this._dirty||(this._dirty=!0,Fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=he(this);return Uo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Bl(t,e,n=!1){let r,i;const s=ie(t);return s?(r=t,i=We):(r=t.get,i=t.set),new Pl(r,i,s||!i,n)}function lt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Un(s,e,n)}return i}function Ue(t,e,n,r){if(ie(t)){const s=lt(t,e,n,r);return s&&vo(s)&&s.catch(o=>{Un(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ue(t[s],e,n,r));return i}function Un(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){lt(l,null,10,[t,o,a]);return}}zl(t,n,i,r)}function zl(t,e,n,r=!0){console.error(t)}let rn=!1,Yr=!1;const Re=[];let Ge=0;const kt=[];let Xe=null,ht=0;const Go=Promise.resolve();let Ei=null;function yi(t){const e=Ei||Go;return t?e.then(this?t.bind(this):t):e}function Hl(t){let e=Ge+1,n=Re.length;for(;e<n;){const r=e+n>>>1,i=Re[r],s=sn(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function vi(t){(!Re.length||!Re.includes(t,rn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?Re.push(t):Re.splice(Hl(t.id),0,t),Wo())}function Wo(){!rn&&!Yr&&(Yr=!0,Ei=Go.then(Yo))}function Ul(t){const e=Re.indexOf(t);e>Ge&&Re.splice(e,1)}function Fl(t){ee(t)?kt.push(...t):(!Xe||!Xe.includes(t,t.allowRecurse?ht+1:ht))&&kt.push(t),Wo()}function Fi(t,e=rn?Ge+1:0){for(;e<Re.length;e++){const n=Re[e];n&&n.pre&&(Re.splice(e,1),e--,n())}}function Vo(t){if(kt.length){const e=[...new Set(kt)];if(kt.length=0,Xe){Xe.push(...e);return}for(Xe=e,Xe.sort((n,r)=>sn(n)-sn(r)),ht=0;ht<Xe.length;ht++)Xe[ht]();Xe=null,ht=0}}const sn=t=>t.id==null?1/0:t.id,$l=(t,e)=>{const n=sn(t)-sn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yo(t){Yr=!1,rn=!0,Re.sort($l);try{for(Ge=0;Ge<Re.length;Ge++){const e=Re[Ge];e&&e.active!==!1&&lt(e,null,14)}}finally{Ge=0,Re.length=0,Vo(),rn=!1,Ei=null,(Re.length||kt.length)&&Yo()}}function Kl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[c]||_e;p&&(i=n.map(f=>Ae(f)?f.trim():f)),h&&(i=n.map(el))}let a,l=r[a=Jn(e)]||r[a=Jn(Ve(e))];!l&&s&&(l=r[a=Jn(Ht(e))]),l&&Ue(l,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ue(u,t,6,i)}}function Zo(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ie(t)){const l=u=>{const c=Zo(u,e,!0);c&&(a=!0,Te(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ee(t)&&r.set(t,null),null):(ee(s)?s.forEach(l=>o[l]=null):Te(o,s),Ee(t)&&r.set(t,o),o)}function Fn(t,e){return!t||!In(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Ht(e))||de(t,e))}let qe=null,$n=null;function On(t){const e=qe;return qe=t,$n=t&&t.type.__scopeId||null,e}function $p(t){$n=t}function Kp(){$n=null}function Gl(t,e=qe,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&ji(-1);const s=On(e);let o;try{o=t(...i)}finally{On(s),r._d&&ji(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function er(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:u,render:c,renderCache:h,data:p,setupState:f,ctx:m,inheritAttrs:v}=t;let N,x;const R=On(t);try{if(n.shapeFlag&4){const M=i||r,F=M;N=Ke(c.call(F,M,h,s,f,p,m)),x=l}else{const M=e;N=Ke(M.length>1?M(s,{attrs:l,slots:a,emit:u}):M(s,null)),x=e.props?l:Wl(l)}}catch(M){Qt.length=0,Un(M,t,1),N=Le(vt)}let H=N;if(x&&v!==!1){const M=Object.keys(x),{shapeFlag:F}=H;M.length&&F&7&&(o&&M.some(li)&&(x=Vl(x,o)),H=Dt(H,x))}return n.dirs&&(H=Dt(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),N=H,On(R),N}const Wl=t=>{let e;for(const n in t)(n==="class"||n==="style"||In(n))&&((e||(e={}))[n]=t[n]);return e},Vl=(t,e)=>{const n={};for(const r in t)(!li(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yl(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$i(r,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const p=c[h];if(o[p]!==r[p]&&!Fn(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$i(r,o,u):!0:!!o;return!1}function $i(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Fn(n,s))return!0}return!1}function Zl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xl="components",Ql="directives",Jl=Symbol.for("v-ndc");function Gp(t){return jl(Ql,t)}function jl(t,e,n=!0,r=!1){const i=qe||xe;if(i){const s=i.type;if(t===Xl){const a=Gc(s,!1);if(a&&(a===e||a===Ve(e)||a===Bn(Ve(e))))return s}const o=Ki(i[t]||s[t],e)||Ki(i.appContext[t],e);return!o&&r?s:o}}function Ki(t,e){return t&&(t[e]||t[Ve(e)]||t[Bn(Ve(e))])}const ec=t=>t.__isSuspense;function tc(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Fl(t)}const _n={};function Lt(t,e,n){return Xo(t,e,n)}function Xo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=_e){var a;const l=Ro()===((a=xe)==null?void 0:a.scope)?xe:null;let u,c=!1,h=!1;if(we(t)?(u=()=>t.value,c=Rn(t)):at(t)?(u=()=>t,r=!0):ee(t)?(h=!0,c=t.some(M=>at(M)||Rn(M)),u=()=>t.map(M=>{if(we(M))return M.value;if(at(M))return gt(M);if(ie(M))return lt(M,l,2)})):ie(t)?e?u=()=>lt(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ue(t,l,3,[f])}:u=We,e&&r){const M=u;u=()=>gt(M())}let p,f=M=>{p=R.onStop=()=>{lt(M,l,4),p=R.onStop=void 0}},m;if(ln)if(f=We,e?n&&Ue(e,l,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const M=Yc();m=M.__watcherHandles||(M.__watcherHandles=[])}else return We;let v=h?new Array(t.length).fill(_n):_n;const N=()=>{if(R.active)if(e){const M=R.run();(r||c||(h?M.some((F,Q)=>Et(F,v[Q])):Et(M,v)))&&(p&&p(),Ue(e,l,3,[M,v===_n?void 0:h&&v[0]===_n?[]:v,f]),v=M)}else R.run()};N.allowRecurse=!!e;let x;i==="sync"?x=N:i==="post"?x=()=>ke(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),x=()=>vi(N));const R=new gi(u,x);e?n?N():v=R.run():i==="post"?ke(R.run.bind(R),l&&l.suspense):R.run();const H=()=>{R.stop(),l&&l.scope&&ci(l.scope.effects,R)};return m&&m.push(H),H}function nc(t,e,n){const r=this.proxy,i=Ae(t)?t.includes(".")?Qo(r,t):()=>r[t]:t.bind(r,r);let s;ie(e)?s=e:(s=e.handler,n=e);const o=xe;qt(this);const a=Xo(i,s.bind(r),n);return o?qt(o):mt(),a}function Qo(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function gt(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))gt(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)gt(t[n],e);else if(yo(t)||Mt(t))t.forEach(n=>{gt(n,e)});else if(So(t))for(const n in t)gt(t[n],e);return t}function Wp(t,e){const n=qe;if(n===null)return t;const r=Vn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,u=_e]=e[s];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&gt(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function ut(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Ut(),Ue(l,n,8,[t.el,a,t,e]),Ft())}}/*! #__NO_SIDE_EFFECTS__ */function wi(t,e){return ie(t)?Te({name:t.name},e,{setup:t}):t}const vn=t=>!!t.type.__asyncLoader,Jo=t=>t.type.__isKeepAlive;function rc(t,e){jo(t,"a",e)}function ic(t,e){jo(t,"da",e)}function jo(t,e,n=xe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kn(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Jo(i.parent.vnode)&&sc(r,e,n,i),i=i.parent}}function sc(t,e,n,r){const i=Kn(e,t,r,!0);ta(()=>{ci(r[e],i)},n)}function Kn(t,e,n=xe,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),qt(n);const a=Ue(e,n,t,o);return mt(),Ft(),a});return r?i.unshift(s):i.push(s),s}}const je=t=>(e,n=xe)=>(!ln||t==="sp")&&Kn(t,(...r)=>e(...r),n),oc=je("bm"),ea=je("m"),ac=je("bu"),lc=je("u"),cc=je("bum"),ta=je("um"),uc=je("sp"),dc=je("rtg"),hc=je("rtc");function pc(t,e=xe){Kn("ec",t,e)}function Vp(t,e,n,r){let i;const s=n&&n[r];if(ee(t)||Ae(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Zr=t=>t?fa(t)?Vn(t)||t.proxy:Zr(t.parent):null,Xt=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zr(t.parent),$root:t=>Zr(t.root),$emit:t=>t.emit,$options:t=>Si(t),$forceUpdate:t=>t.f||(t.f=()=>vi(t.update)),$nextTick:t=>t.n||(t.n=yi.bind(t.proxy)),$watch:t=>nc.bind(t)}),tr=(t,e)=>t!==_e&&!t.__isScriptSetup&&de(t,e),gc={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(tr(r,e))return o[e]=1,r[e];if(i!==_e&&de(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&de(u,e))return o[e]=3,s[e];if(n!==_e&&de(n,e))return o[e]=4,n[e];Xr&&(o[e]=0)}}const c=Xt[e];let h,p;if(c)return e==="$attrs"&&Ie(t,"get",e),c(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&de(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,de(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return tr(i,e)?(i[e]=n,!0):r!==_e&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==_e&&de(t,o)||tr(e,o)||(a=s[0])&&de(a,o)||de(r,o)||de(Xt,o)||de(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gi(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xr=!0;function fc(t){const e=Si(t),n=t.proxy,r=t.ctx;Xr=!1,e.beforeCreate&&Wi(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:p,beforeUpdate:f,updated:m,activated:v,deactivated:N,beforeDestroy:x,beforeUnmount:R,destroyed:H,unmounted:M,render:F,renderTracked:Q,renderTriggered:j,errorCaptured:k,serverPrefetch:U,expose:re,inheritAttrs:ne,components:pe,directives:ye,filters:ge}=e;if(u&&bc(u,r,null),o)for(const y in o){const O=o[y];ie(O)&&(r[y]=O.bind(n))}if(i){const y=i.call(n,n);Ee(y)&&(t.data=$t(y))}if(Xr=!0,s)for(const y in s){const O=s[y],V=ie(O)?O.bind(n,n):ie(O.get)?O.get.bind(n,n):We,oe=!ie(O)&&ie(O.set)?O.set.bind(n):We,le=Ne({get:V,set:oe});Object.defineProperty(r,y,{enumerable:!0,configurable:!0,get:()=>le.value,set:ue=>le.value=ue})}if(a)for(const y in a)na(a[y],r,n,y);if(l){const y=ie(l)?l.call(n):l;Reflect.ownKeys(y).forEach(O=>{wn(O,y[O])})}c&&Wi(c,t,"c");function Z(y,O){ee(O)?O.forEach(V=>y(V.bind(n))):O&&y(O.bind(n))}if(Z(oc,h),Z(ea,p),Z(ac,f),Z(lc,m),Z(rc,v),Z(ic,N),Z(pc,k),Z(hc,Q),Z(dc,j),Z(cc,R),Z(ta,M),Z(uc,U),ee(re))if(re.length){const y=t.exposed||(t.exposed={});re.forEach(O=>{Object.defineProperty(y,O,{get:()=>n[O],set:V=>n[O]=V})})}else t.exposed||(t.exposed={});F&&t.render===We&&(t.render=F),ne!=null&&(t.inheritAttrs=ne),pe&&(t.components=pe),ye&&(t.directives=ye)}function bc(t,e,n=We){ee(t)&&(t=Qr(t));for(const r in t){const i=t[r];let s;Ee(i)?"default"in i?s=Be(i.from||r,i.default,!0):s=Be(i.from||r):s=Be(i),we(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Wi(t,e,n){Ue(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function na(t,e,n,r){const i=r.includes(".")?Qo(n,r):()=>n[r];if(Ae(t)){const s=e[t];ie(s)&&Lt(i,s)}else if(ie(t))Lt(i,t.bind(n));else if(Ee(t))if(ee(t))t.forEach(s=>na(s,e,n,r));else{const s=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(s)&&Lt(i,s,t)}}function Si(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(u=>Cn(l,u,o,!0)),Cn(l,e,o)),Ee(e)&&s.set(e,l),l}function Cn(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Cn(t,s,n,!0),i&&i.forEach(o=>Cn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=mc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mc={data:Vi,props:Yi,emits:Yi,methods:Zt,computed:Zt,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:Zt,directives:Zt,watch:Ec,provide:Vi,inject:_c};function Vi(t,e){return e?t?function(){return Te(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function _c(t,e){return Zt(Qr(t),Qr(e))}function Qr(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?Te(Object.create(null),t,e):e}function Yi(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:Te(Object.create(null),Gi(t),Gi(e??{})):e}function Ec(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const r in e)n[r]=Me(t[r],e[r]);return n}function ra(){return{app:null,config:{isNativeTag:Ya,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yc=0;function vc(t,e){return function(r,i=null){ie(r)||(r=Te({},r)),i!=null&&!Ee(i)&&(i=null);const s=ra(),o=new WeakSet;let a=!1;const l=s.app={_uid:yc++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Zc,get config(){return s.config},set config(u){},use(u,...c){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(l,...c)):ie(u)&&(o.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,h){if(!a){const p=Le(r,i);return p.appContext=s,c&&e?e(p,u):t(p,u,h),a=!0,l._container=u,u.__vue_app__=l,Vn(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l},runWithContext(u){on=l;try{return u()}finally{on=null}}};return l}}let on=null;function wn(t,e){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=xe||qe;if(r||on){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:on._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function wc(){return!!(xe||qe||on)}function Sc(t,e,n,r=!1){const i={},s={};Nn(s,Wn,1),t.propsDefaults=Object.create(null),ia(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Cl(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Ac(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=he(i),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let h=0;h<c.length;h++){let p=c[h];if(Fn(t.emitsOptions,p))continue;const f=e[p];if(l)if(de(s,p))f!==s[p]&&(s[p]=f,u=!0);else{const m=Ve(p);i[m]=Jr(l,a,m,f,t,!1)}else f!==s[p]&&(s[p]=f,u=!0)}}}else{ia(t,e,i,s)&&(u=!0);let c;for(const h in a)(!e||!de(e,h)&&((c=Ht(h))===h||!de(e,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(i[h]=Jr(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!de(e,h))&&(delete s[h],u=!0)}u&&Je(t,"set","$attrs")}function ia(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(yn(l))continue;const u=e[l];let c;i&&de(i,c=Ve(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Fn(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(s){const l=he(n),u=a||_e;for(let c=0;c<s.length;c++){const h=s[c];n[h]=Jr(i,l,h,u[h],t,!de(u,h))}}return o}function Jr(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:u}=i;n in u?r=u[n]:(qt(i),r=u[n]=l.call(null,e),mt())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}function sa(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ie(t)){const c=h=>{l=!0;const[p,f]=sa(h,e,!0);Te(o,p),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return Ee(t)&&r.set(t,Ct),Ct;if(ee(s))for(let c=0;c<s.length;c++){const h=Ve(s[c]);Zi(h)&&(o[h]=_e)}else if(s)for(const c in s){const h=Ve(c);if(Zi(h)){const p=s[c],f=o[h]=ee(p)||ie(p)?{type:p}:Te({},p);if(f){const m=Ji(Boolean,f.type),v=Ji(String,f.type);f[0]=m>-1,f[1]=v<0||m<v,(m>-1||de(f,"default"))&&a.push(h)}}}const u=[o,a];return Ee(t)&&r.set(t,u),u}function Zi(t){return t[0]!=="$"}function Xi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Qi(t,e){return Xi(t)===Xi(e)}function Ji(t,e){return ee(e)?e.findIndex(n=>Qi(n,t)):ie(e)&&Qi(e,t)?0:-1}const oa=t=>t[0]==="_"||t==="$stable",Ai=t=>ee(t)?t.map(Ke):[Ke(t)],xc=(t,e,n)=>{if(e._n)return e;const r=Gl((...i)=>Ai(e(...i)),n);return r._c=!1,r},aa=(t,e,n)=>{const r=t._ctx;for(const i in t){if(oa(i))continue;const s=t[i];if(ie(s))e[i]=xc(i,s,r);else if(s!=null){const o=Ai(s);e[i]=()=>o}}},la=(t,e)=>{const n=Ai(e);t.slots.default=()=>n},Nc=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Nn(e,"_",n)):aa(e,t.slots={})}else t.slots={},e&&la(t,e);Nn(t.slots,Wn,1)},Tc=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=_e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Te(i,e),!n&&a===1&&delete i._):(s=!e.$stable,aa(e,i)),o=e}else e&&(la(t,e),o={default:1});if(s)for(const a in i)!oa(a)&&o[a]==null&&delete i[a]};function jr(t,e,n,r,i=!1){if(ee(t)){t.forEach((p,f)=>jr(p,e&&(ee(e)?e[f]:e),n,r,i));return}if(vn(r)&&!i)return;const s=r.shapeFlag&4?Vn(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(Ae(u)?(c[u]=null,de(h,u)&&(h[u]=null)):we(u)&&(u.value=null)),ie(l))lt(l,a,12,[o,c]);else{const p=Ae(l),f=we(l);if(p||f){const m=()=>{if(t.f){const v=p?de(h,l)?h[l]:c[l]:l.value;i?ee(v)&&ci(v,s):ee(v)?v.includes(s)||v.push(s):p?(c[l]=[s],de(h,l)&&(h[l]=c[l])):(l.value=[s],t.k&&(c[t.k]=l.value))}else p?(c[l]=o,de(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(c[t.k]=o))};o?(m.id=-1,ke(m,n)):m()}}}const ke=tc;function Rc(t){return Oc(t)}function Oc(t,e){const n=Kr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:p,setScopeId:f=We,insertStaticContent:m}=t,v=(d,g,b,w=null,A=null,I=null,z=!1,_=null,q=!!g.dynamicChildren)=>{if(d===g)return;d&&!Wt(d,g)&&(w=C(d),ue(d,A,I,!0),d=null),g.patchFlag===-2&&(q=!1,g.dynamicChildren=null);const{type:S,ref:P,shapeFlag:$}=g;switch(S){case Gn:N(d,g,b,w);break;case vt:x(d,g,b,w);break;case Sn:d==null&&R(g,b,w,z);break;case Qe:pe(d,g,b,w,A,I,z,_,q);break;default:$&1?F(d,g,b,w,A,I,z,_,q):$&6?ye(d,g,b,w,A,I,z,_,q):($&64||$&128)&&S.process(d,g,b,w,A,I,z,_,q,X)}P!=null&&A&&jr(P,d&&d.ref,I,g||d,!g)},N=(d,g,b,w)=>{if(d==null)r(g.el=a(g.children),b,w);else{const A=g.el=d.el;g.children!==d.children&&u(A,g.children)}},x=(d,g,b,w)=>{d==null?r(g.el=l(g.children||""),b,w):g.el=d.el},R=(d,g,b,w)=>{[d.el,d.anchor]=m(d.children,g,b,w,d.el,d.anchor)},H=({el:d,anchor:g},b,w)=>{let A;for(;d&&d!==g;)A=p(d),r(d,b,w),d=A;r(g,b,w)},M=({el:d,anchor:g})=>{let b;for(;d&&d!==g;)b=p(d),i(d),d=b;i(g)},F=(d,g,b,w,A,I,z,_,q)=>{z=z||g.type==="svg",d==null?Q(g,b,w,A,I,z,_,q):U(d,g,A,I,z,_,q)},Q=(d,g,b,w,A,I,z,_)=>{let q,S;const{type:P,props:$,shapeFlag:K,transition:Y,dirs:J}=d;if(q=d.el=o(d.type,I,$&&$.is,$),K&8?c(q,d.children):K&16&&k(d.children,q,null,w,A,I&&P!=="foreignObject",z,_),J&&ut(d,null,w,"created"),j(q,d,d.scopeId,z,w),$){for(const L in $)L!=="value"&&!yn(L)&&s(q,L,null,$[L],I,d.children,w,A,D);"value"in $&&s(q,"value",null,$.value),(S=$.onVnodeBeforeMount)&&$e(S,w,d)}J&&ut(d,null,w,"beforeMount");const T=Cc(A,Y);T&&Y.beforeEnter(q),r(q,g,b),((S=$&&$.onVnodeMounted)||T||J)&&ke(()=>{S&&$e(S,w,d),T&&Y.enter(q),J&&ut(d,null,w,"mounted")},A)},j=(d,g,b,w,A)=>{if(b&&f(d,b),w)for(let I=0;I<w.length;I++)f(d,w[I]);if(A){let I=A.subTree;if(g===I){const z=A.vnode;j(d,z,z.scopeId,z.slotScopeIds,A.parent)}}},k=(d,g,b,w,A,I,z,_,q=0)=>{for(let S=q;S<d.length;S++){const P=d[S]=_?rt(d[S]):Ke(d[S]);v(null,P,g,b,w,A,I,z,_)}},U=(d,g,b,w,A,I,z)=>{const _=g.el=d.el;let{patchFlag:q,dynamicChildren:S,dirs:P}=g;q|=d.patchFlag&16;const $=d.props||_e,K=g.props||_e;let Y;b&&dt(b,!1),(Y=K.onVnodeBeforeUpdate)&&$e(Y,b,g,d),P&&ut(g,d,b,"beforeUpdate"),b&&dt(b,!0);const J=A&&g.type!=="foreignObject";if(S?re(d.dynamicChildren,S,_,b,w,J,I):z||O(d,g,_,null,b,w,J,I,!1),q>0){if(q&16)ne(_,g,$,K,b,w,A);else if(q&2&&$.class!==K.class&&s(_,"class",null,K.class,A),q&4&&s(_,"style",$.style,K.style,A),q&8){const T=g.dynamicProps;for(let L=0;L<T.length;L++){const G=T[L],te=$[G],me=K[G];(me!==te||G==="value")&&s(_,G,te,me,A,d.children,b,w,D)}}q&1&&d.children!==g.children&&c(_,g.children)}else!z&&S==null&&ne(_,g,$,K,b,w,A);((Y=K.onVnodeUpdated)||P)&&ke(()=>{Y&&$e(Y,b,g,d),P&&ut(g,d,b,"updated")},w)},re=(d,g,b,w,A,I,z)=>{for(let _=0;_<g.length;_++){const q=d[_],S=g[_],P=q.el&&(q.type===Qe||!Wt(q,S)||q.shapeFlag&70)?h(q.el):b;v(q,S,P,null,w,A,I,z,!0)}},ne=(d,g,b,w,A,I,z)=>{if(b!==w){if(b!==_e)for(const _ in b)!yn(_)&&!(_ in w)&&s(d,_,b[_],null,z,g.children,A,I,D);for(const _ in w){if(yn(_))continue;const q=w[_],S=b[_];q!==S&&_!=="value"&&s(d,_,S,q,z,g.children,A,I,D)}"value"in w&&s(d,"value",b.value,w.value)}},pe=(d,g,b,w,A,I,z,_,q)=>{const S=g.el=d?d.el:a(""),P=g.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:K,slotScopeIds:Y}=g;Y&&(_=_?_.concat(Y):Y),d==null?(r(S,b,w),r(P,b,w),k(g.children,b,P,A,I,z,_,q)):$>0&&$&64&&K&&d.dynamicChildren?(re(d.dynamicChildren,K,b,A,I,z,_),(g.key!=null||A&&g===A.subTree)&&ca(d,g,!0)):O(d,g,b,P,A,I,z,_,q)},ye=(d,g,b,w,A,I,z,_,q)=>{g.slotScopeIds=_,d==null?g.shapeFlag&512?A.ctx.activate(g,b,w,z,q):ge(g,b,w,A,I,z,q):se(d,g,q)},ge=(d,g,b,w,A,I,z)=>{const _=d.component=Hc(d,w,A);if(Jo(d)&&(_.ctx.renderer=X),Uc(_),_.asyncDep){if(A&&A.registerDep(_,Z),!d.el){const q=_.subTree=Le(vt);x(null,q,g,b)}return}Z(_,d,g,b,A,I,z)},se=(d,g,b)=>{const w=g.component=d.component;if(Yl(d,g,b))if(w.asyncDep&&!w.asyncResolved){y(w,g,b);return}else w.next=g,Ul(w.update),w.update();else g.el=d.el,w.vnode=g},Z=(d,g,b,w,A,I,z)=>{const _=()=>{if(d.isMounted){let{next:P,bu:$,u:K,parent:Y,vnode:J}=d,T=P,L;dt(d,!1),P?(P.el=J.el,y(d,P,z)):P=J,$&&jn($),(L=P.props&&P.props.onVnodeBeforeUpdate)&&$e(L,Y,P,J),dt(d,!0);const G=er(d),te=d.subTree;d.subTree=G,v(te,G,h(te.el),C(te),d,A,I),P.el=G.el,T===null&&Zl(d,G.el),K&&ke(K,A),(L=P.props&&P.props.onVnodeUpdated)&&ke(()=>$e(L,Y,P,J),A)}else{let P;const{el:$,props:K}=g,{bm:Y,m:J,parent:T}=d,L=vn(g);if(dt(d,!1),Y&&jn(Y),!L&&(P=K&&K.onVnodeBeforeMount)&&$e(P,T,g),dt(d,!0),$&&W){const G=()=>{d.subTree=er(d),W($,d.subTree,d,A,null)};L?g.type.__asyncLoader().then(()=>!d.isUnmounted&&G()):G()}else{const G=d.subTree=er(d);v(null,G,b,w,d,A,I),g.el=G.el}if(J&&ke(J,A),!L&&(P=K&&K.onVnodeMounted)){const G=g;ke(()=>$e(P,T,G),A)}(g.shapeFlag&256||T&&vn(T.vnode)&&T.vnode.shapeFlag&256)&&d.a&&ke(d.a,A),d.isMounted=!0,g=b=w=null}},q=d.effect=new gi(_,()=>vi(S),d.scope),S=d.update=()=>q.run();S.id=d.uid,dt(d,!0),S()},y=(d,g,b)=>{g.component=d;const w=d.vnode.props;d.vnode=g,d.next=null,Ac(d,g.props,w,b),Tc(d,g.children,b),Ut(),Fi(),Ft()},O=(d,g,b,w,A,I,z,_,q=!1)=>{const S=d&&d.children,P=d?d.shapeFlag:0,$=g.children,{patchFlag:K,shapeFlag:Y}=g;if(K>0){if(K&128){oe(S,$,b,w,A,I,z,_,q);return}else if(K&256){V(S,$,b,w,A,I,z,_,q);return}}Y&8?(P&16&&D(S,A,I),$!==S&&c(b,$)):P&16?Y&16?oe(S,$,b,w,A,I,z,_,q):D(S,A,I,!0):(P&8&&c(b,""),Y&16&&k($,b,w,A,I,z,_,q))},V=(d,g,b,w,A,I,z,_,q)=>{d=d||Ct,g=g||Ct;const S=d.length,P=g.length,$=Math.min(S,P);let K;for(K=0;K<$;K++){const Y=g[K]=q?rt(g[K]):Ke(g[K]);v(d[K],Y,b,null,A,I,z,_,q)}S>P?D(d,A,I,!0,!1,$):k(g,b,w,A,I,z,_,q,$)},oe=(d,g,b,w,A,I,z,_,q)=>{let S=0;const P=g.length;let $=d.length-1,K=P-1;for(;S<=$&&S<=K;){const Y=d[S],J=g[S]=q?rt(g[S]):Ke(g[S]);if(Wt(Y,J))v(Y,J,b,null,A,I,z,_,q);else break;S++}for(;S<=$&&S<=K;){const Y=d[$],J=g[K]=q?rt(g[K]):Ke(g[K]);if(Wt(Y,J))v(Y,J,b,null,A,I,z,_,q);else break;$--,K--}if(S>$){if(S<=K){const Y=K+1,J=Y<P?g[Y].el:w;for(;S<=K;)v(null,g[S]=q?rt(g[S]):Ke(g[S]),b,J,A,I,z,_,q),S++}}else if(S>K)for(;S<=$;)ue(d[S],A,I,!0),S++;else{const Y=S,J=S,T=new Map;for(S=J;S<=K;S++){const Ce=g[S]=q?rt(g[S]):Ke(g[S]);Ce.key!=null&&T.set(Ce.key,S)}let L,G=0;const te=K-J+1;let me=!1,Oe=0;const Ye=new Array(te);for(S=0;S<te;S++)Ye[S]=0;for(S=Y;S<=$;S++){const Ce=d[S];if(G>=te){ue(Ce,A,I,!0);continue}let Pe;if(Ce.key!=null)Pe=T.get(Ce.key);else for(L=J;L<=K;L++)if(Ye[L-J]===0&&Wt(Ce,g[L])){Pe=L;break}Pe===void 0?ue(Ce,A,I,!0):(Ye[Pe-J]=S+1,Pe>=Oe?Oe=Pe:me=!0,v(Ce,g[Pe],b,null,A,I,z,_,q),G++)}const St=me?Mc(Ye):Ct;for(L=St.length-1,S=te-1;S>=0;S--){const Ce=J+S,Pe=g[Ce],fe=Ce+1<P?g[Ce+1].el:w;Ye[S]===0?v(null,Pe,b,fe,A,I,z,_,q):me&&(L<0||S!==St[L]?le(Pe,b,fe,2):L--)}}},le=(d,g,b,w,A=null)=>{const{el:I,type:z,transition:_,children:q,shapeFlag:S}=d;if(S&6){le(d.component.subTree,g,b,w);return}if(S&128){d.suspense.move(g,b,w);return}if(S&64){z.move(d,g,b,X);return}if(z===Qe){r(I,g,b);for(let $=0;$<q.length;$++)le(q[$],g,b,w);r(d.anchor,g,b);return}if(z===Sn){H(d,g,b);return}if(w!==2&&S&1&&_)if(w===0)_.beforeEnter(I),r(I,g,b),ke(()=>_.enter(I),A);else{const{leave:$,delayLeave:K,afterLeave:Y}=_,J=()=>r(I,g,b),T=()=>{$(I,()=>{J(),Y&&Y()})};K?K(I,J,T):T()}else r(I,g,b)},ue=(d,g,b,w=!1,A=!1)=>{const{type:I,props:z,ref:_,children:q,dynamicChildren:S,shapeFlag:P,patchFlag:$,dirs:K}=d;if(_!=null&&jr(_,null,b,d,!0),P&256){g.ctx.deactivate(d);return}const Y=P&1&&K,J=!vn(d);let T;if(J&&(T=z&&z.onVnodeBeforeUnmount)&&$e(T,g,d),P&6)E(d.component,b,w);else{if(P&128){d.suspense.unmount(b,w);return}Y&&ut(d,null,g,"beforeUnmount"),P&64?d.type.remove(d,g,b,A,X,w):S&&(I!==Qe||$>0&&$&64)?D(S,g,b,!1,!0):(I===Qe&&$&384||!A&&P&16)&&D(q,g,b),w&&ve(d)}(J&&(T=z&&z.onVnodeUnmounted)||Y)&&ke(()=>{T&&$e(T,g,d),Y&&ut(d,null,g,"unmounted")},b)},ve=d=>{const{type:g,el:b,anchor:w,transition:A}=d;if(g===Qe){Se(b,w);return}if(g===Sn){M(d);return}const I=()=>{i(b),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(d.shapeFlag&1&&A&&!A.persisted){const{leave:z,delayLeave:_}=A,q=()=>z(b,I);_?_(d.el,I,q):q()}else I()},Se=(d,g)=>{let b;for(;d!==g;)b=p(d),i(d),d=b;i(g)},E=(d,g,b)=>{const{bum:w,scope:A,update:I,subTree:z,um:_}=d;w&&jn(w),A.stop(),I&&(I.active=!1,ue(z,d,g,b)),_&&ke(_,g),ke(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(d,g,b,w=!1,A=!1,I=0)=>{for(let z=I;z<d.length;z++)ue(d[z],g,b,w,A)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),B=(d,g,b)=>{d==null?g._vnode&&ue(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,b),Fi(),Vo(),g._vnode=d},X={p:v,um:ue,m:le,r:ve,mt:ge,mc:k,pc:O,pbc:re,n:C,o:t};let ce,W;return e&&([ce,W]=e(X)),{render:B,hydrate:ce,createApp:vc(B,ce)}}function dt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ca(t,e,n=!1){const r=t.children,i=e.children;if(ee(r)&&ee(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=rt(i[s]),a.el=o.el),n||ca(o,a)),a.type===Gn&&(a.el=o.el)}}function Mc(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const kc=t=>t.__isTeleport,Qe=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),vt=Symbol.for("v-cmt"),Sn=Symbol.for("v-stc"),Qt=[];let He=null;function ua(t=!1){Qt.push(He=t?null:[])}function Lc(){Qt.pop(),He=Qt[Qt.length-1]||null}let an=1;function ji(t){an+=t}function da(t){return t.dynamicChildren=an>0?He||Ct:null,Lc(),an>0&&He&&He.push(t),t}function Yp(t,e,n,r,i,s){return da(ga(t,e,n,r,i,s,!0))}function ha(t,e,n,r,i){return da(Le(t,e,n,r,i,!0))}function ei(t){return t?t.__v_isVNode===!0:!1}function Wt(t,e){return t.type===e.type&&t.key===e.key}const Wn="__vInternal",pa=({key:t})=>t??null,An=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||we(t)||ie(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function ga(t,e=null,n=null,r=0,i=null,s=t===Qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pa(e),ref:e&&An(e),scopeId:$n,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return a?(xi(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),an>0&&!o&&He&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&He.push(l),l}const Le=Ic;function Ic(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Jl)&&(t=vt),ei(t)){const a=Dt(t,e,!0);return n&&xi(a,n),an>0&&!s&&He&&(a.shapeFlag&6?He[He.indexOf(t)]=a:He.push(a)),a.patchFlag|=-2,a}if(Wc(t)&&(t=t.__vccOpts),e){e=Dc(e);let{class:a,style:l}=e;a&&!Ae(a)&&(e.class=hi(a)),Ee(l)&&(Ho(l)&&!ee(l)&&(l=Te({},l)),e.style=di(l))}const o=Ae(t)?1:ec(t)?128:kc(t)?64:Ee(t)?4:ie(t)?2:0;return ga(t,e,n,r,i,o,s,!0)}function Dc(t){return t?Ho(t)||Wn in t?Te({},t):t:null}function Dt(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Pc(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&pa(a),ref:e&&e.ref?n&&i?ee(i)?i.concat(An(e)):[i,An(e)]:An(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dt(t.ssContent),ssFallback:t.ssFallback&&Dt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qc(t=" ",e=0){return Le(Gn,null,t,e)}function Zp(t,e){const n=Le(Sn,null,t);return n.staticCount=e,n}function Xp(t="",e=!1){return e?(ua(),ha(vt,null,t)):Le(vt,null,t)}function Ke(t){return t==null||typeof t=="boolean"?Le(vt):ee(t)?Le(Qe,null,t.slice()):typeof t=="object"?rt(t):Le(Gn,null,String(t))}function rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dt(t)}function xi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),xi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Wn in e)?e._ctx=qe:i===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),r&64?(n=16,e=[qc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pc(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=hi([e.class,r.class]));else if(i==="style")e.style=di([e.style,r.style]);else if(In(i)){const s=e[i],o=r[i];o&&s!==o&&!(ee(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function $e(t,e,n,r=null){Ue(t,e,7,[n,r])}const Bc=ra();let zc=0;function Hc(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Bc,s={uid:zc++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new No(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sa(r,i),emitsOptions:Zo(r,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Kl.bind(null,s),t.ce&&t.ce(s),s}let xe=null,Ni,At,es="__VUE_INSTANCE_SETTERS__";(At=Kr()[es])||(At=Kr()[es]=[]),At.push(t=>xe=t),Ni=t=>{At.length>1?At.forEach(e=>e(t)):At[0](t)};const qt=t=>{Ni(t),t.scope.on()},mt=()=>{xe&&xe.scope.off(),Ni(null)};function fa(t){return t.vnode.shapeFlag&4}let ln=!1;function Uc(t,e=!1){ln=e;const{props:n,children:r}=t.vnode,i=fa(t);Sc(t,n,i,e),Nc(t,r);const s=i?Fc(t,e):void 0;return ln=!1,s}function Fc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hn(new Proxy(t.ctx,gc));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Kc(t):null;qt(t),Ut();const s=lt(r,t,0,[t.props,i]);if(Ft(),mt(),vo(s)){if(s.then(mt,mt),e)return s.then(o=>{ts(t,o,e)}).catch(o=>{Un(o,t,0)});t.asyncDep=s}else ts(t,s,e)}else ba(t,e)}function ts(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Ko(e)),ba(t,n)}let ns;function ba(t,e,n){const r=t.type;if(!t.render){if(!e&&ns&&!r.render){const i=r.template||Si(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=Te(Te({isCustomElement:s,delimiters:a},o),l);r.render=ns(i,u)}}t.render=r.render||We}{qt(t),Ut();try{fc(t)}finally{Ft(),mt()}}}function $c(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ie(t,"get","$attrs"),e[n]}}))}function Kc(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return $c(t)},slots:t.slots,emit:t.emit,expose:e}}function Vn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ko(Hn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xt)return Xt[n](t)},has(e,n){return n in e||n in Xt}}))}function Gc(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Wc(t){return ie(t)&&"__vccOpts"in t}const Ne=(t,e)=>Bl(t,e,ln);function Mn(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!ee(e)?ei(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ei(n)&&(n=[n]),Le(t,e,n))}const Vc=Symbol.for("v-scx"),Yc=()=>Be(Vc),Zc="3.3.9",Xc="http://www.w3.org/2000/svg",pt=typeof document<"u"?document:null,rs=pt&&pt.createElement("template"),Qc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?pt.createElementNS(Xc,t):pt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{rs.innerHTML=r?`<svg>${t}</svg>`:t;const a=rs.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Jc=Symbol("_vtc");function jc(t,e,n){const r=t[Jc];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const eu=Symbol("_vod");function tu(t,e,n){const r=t.style,i=Ae(n);if(n&&!i){if(e&&!Ae(e))for(const s in e)n[s]==null&&ti(r,s,"");for(const s in n)ti(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),eu in t&&(r.display=s)}}const is=/\s*!important$/;function ti(t,e,n){if(ee(n))n.forEach(r=>ti(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nu(t,e);is.test(n)?t.setProperty(Ht(r),n.replace(is,""),"important"):t[r]=n}}const ss=["Webkit","Moz","ms"],nr={};function nu(t,e){const n=nr[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return nr[e]=r;r=Bn(r);for(let i=0;i<ss.length;i++){const s=ss[i]+r;if(s in t)return nr[e]=s}return e}const os="http://www.w3.org/1999/xlink";function ru(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(os,e.slice(6,e.length)):t.setAttributeNS(os,e,n);else{const s=ol(e);n==null||s&&!Ao(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function iu(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,c=n??"";u!==c&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Ao(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function su(t,e,n,r){t.addEventListener(e,n,r)}function ou(t,e,n,r){t.removeEventListener(e,n,r)}const as=Symbol("_vei");function au(t,e,n,r,i=null){const s=t[as]||(t[as]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=lu(e);if(r){const u=s[e]=du(r,i);su(t,a,u,l)}else o&&(ou(t,a,o,l),s[e]=void 0)}}const ls=/(?:Once|Passive|Capture)$/;function lu(t){let e;if(ls.test(t)){e={};let r;for(;r=t.match(ls);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ht(t.slice(2)),e]}let rr=0;const cu=Promise.resolve(),uu=()=>rr||(cu.then(()=>rr=0),rr=Date.now());function du(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(hu(r,n.value),e,5,[r])};return n.value=t,n.attached=uu(),n}function hu(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const cs=/^on[a-z]/,pu=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?jc(t,r,i):e==="style"?tu(t,n,r):In(e)?li(e)||au(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gu(t,e,r,i))?iu(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ru(t,e,r,i))};function gu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&cs.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||cs.test(e)&&Ae(n)?!1:e in t}const fu=Te({patchProp:pu},Qc);let us;function bu(){return us||(us=Rc(fu))}const mu=(...t)=>{const e=bu().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=_u(r);if(!i)return;const s=e._component;!ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function _u(t){return Ae(t)?document.querySelector(t):t}var Eu=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ma;const Yn=t=>ma=t,_a=Symbol();function ni(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Jt;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Jt||(Jt={}));function yu(){const t=To(!0),e=t.run(()=>yt({}));let n=[],r=[];const i=Hn({install(s){Yn(i),i._a=s,s.provide(_a,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Eu?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ea=()=>{};function ds(t,e,n,r=Ea){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Ro()&&ll(i),i}function xt(t,...e){t.slice().forEach(n=>{n(...e)})}const vu=t=>t();function ri(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];ni(i)&&ni(r)&&t.hasOwnProperty(n)&&!we(r)&&!at(r)?t[n]=ri(i,r):t[n]=r}return t}const wu=Symbol();function Su(t){return!ni(t)||!t.hasOwnProperty(wu)}const{assign:nt}=Object;function Au(t){return!!(we(t)&&t.effect)}function xu(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=i?i():{});const c=Il(n.state.value[t]);return nt(c,s,Object.keys(o||{}).reduce((h,p)=>(h[p]=Hn(Ne(()=>{Yn(n);const f=n._s.get(t);return o[p].call(f,f)})),h),{}))}return l=ya(t,u,e,n,r,!0),l}function ya(t,e,n={},r,i,s){let o;const a=nt({actions:{}},n),l={deep:!0};let u,c,h=[],p=[],f;const m=r.state.value[t];!s&&!m&&(r.state.value[t]={}),yt({});let v;function N(k){let U;u=c=!1,typeof k=="function"?(k(r.state.value[t]),U={type:Jt.patchFunction,storeId:t,events:f}):(ri(r.state.value[t],k),U={type:Jt.patchObject,payload:k,storeId:t,events:f});const re=v=Symbol();yi().then(()=>{v===re&&(u=!0)}),c=!0,xt(h,U,r.state.value[t])}const x=s?function(){const{state:U}=n,re=U?U():{};this.$patch(ne=>{nt(ne,re)})}:Ea;function R(){o.stop(),h=[],p=[],r._s.delete(t)}function H(k,U){return function(){Yn(r);const re=Array.from(arguments),ne=[],pe=[];function ye(Z){ne.push(Z)}function ge(Z){pe.push(Z)}xt(p,{args:re,name:k,store:F,after:ye,onError:ge});let se;try{se=U.apply(this&&this.$id===t?this:F,re)}catch(Z){throw xt(pe,Z),Z}return se instanceof Promise?se.then(Z=>(xt(ne,Z),Z)).catch(Z=>(xt(pe,Z),Promise.reject(Z))):(xt(ne,se),se)}}const M={_p:r,$id:t,$onAction:ds.bind(null,p),$patch:N,$reset:x,$subscribe(k,U={}){const re=ds(h,k,U.detached,()=>ne()),ne=o.run(()=>Lt(()=>r.state.value[t],pe=>{(U.flush==="sync"?c:u)&&k({storeId:t,type:Jt.direct,events:f},pe)},nt({},l,U)));return re},$dispose:R},F=$t(M);r._s.set(t,F);const j=(r._a&&r._a.runWithContext||vu)(()=>r._e.run(()=>(o=To()).run(e)));for(const k in j){const U=j[k];if(we(U)&&!Au(U)||at(U))s||(m&&Su(U)&&(we(U)?U.value=m[k]:ri(U,m[k])),r.state.value[t][k]=U);else if(typeof U=="function"){const re=H(k,U);j[k]=re,a.actions[k]=U}}return nt(F,j),nt(he(F),j),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:k=>{N(U=>{nt(U,k)})}}),r._p.forEach(k=>{nt(F,o.run(()=>k({store:F,app:r._a,pinia:r,options:a})))}),m&&s&&n.hydrate&&n.hydrate(F.$state,m),u=!0,c=!0,F}function Nu(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const u=wc();return a=a||(u?Be(_a,null):null),a&&Yn(a),a=ma,a._s.has(r)||(s?ya(r,e,i,a):xu(r,i,a)),a._s.get(r)}return o.$id=r,o}const jt={initColor:function(r="#1abc8c"){var e=parseInt(r.substring(1,3),16),n=parseInt(r.substring(3,5),16),r=parseInt(r.substring(5,7),16),i=document.createElement("style");i.innerHTML=`body{
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
		}`,document.body.append(i)},isEmpty:function(t){return t instanceof Array?t.length==0:t instanceof Object?Object.keys(t).length==0:void 0},typeof:function(t){return Object.prototype.toString.call(t).split(" ")[1].split("]")[0].toLowerCase()},cloneDeep(){let t,e,n,r,i,s,o=arguments[0]||{},a=1,l=arguments.length;for(typeof o!="object"&&typeof o!="function"&&(o={}),a===l&&(o=this,a--);a<l;a++)if((t=arguments[a])!=null)for(e in t)r=t[e],e!=="__proto__"&&o!==r&&(r&&(r.toString()==="[object Object]"||(i=Array.isArray(r)))?(n=o[e],s=i&&!Array.isArray(n)?[]:!i&&!n instanceof Object?{}:n,i=!1,this.typeof(o)=="map"?(o=new Map).set(e,this.cloneDeep(s,r)):this.typeof(o)=="weakMap"?(o=new WeakMap).set(e,this.cloneDeep(s,r)):this.typeof(o)=="set"?(o=new Set)[e].add(this.cloneDeep(s,r)):this.typeof(o)=="date"?o[e]=new Date(this.cloneDeep(s,r).valueOf()):o[e]=this.cloneDeep(s,r)):r!==void 0&&(o[e]=r));return o}};class Qp{constructor(){Li(this,"_options",{headers:{"Content-Type":"application/json;charset=utf-8"}})}setOptions(e){jt.cloneDeep(this._options,e)}getOptions(){return this._options}_initOption(e){var n={};if(jt.cloneDeep(n,this._options,e),n.data&&!jt.isEmpty(n.data))if(n.method=="get"){let r="";for(const i in n.data)r+=i+"="+n.data[i]+"&";r=r.slice(0,-1),n.url+="?"+r}else n.method=="post"&&{}.toString.call(n.data)=="[object FormData]"?n.body=n.data:n.body=JSON.stringify(n.data);return n}post(e){return e.method="post",e=this._initOption(e),fetch(e.url,e)}delete(e){return e.method="delete",e=this._initOption(e),fetch(e.url,e)}put(e){return e.method="put",e=this._initOption(e),fetch(e.url,e)}get(e){return e.method="get",e=this._initOption(e),fetch(e.url,e)}}class Tu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","color","disabled","size","full"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("type")&&(e=this.getAttribute("type"),n.querySelector("#btn").classList.add(e)),this.hasAttribute("color")&&(e=this.getAttribute("color"),n.querySelector("#btn").classList.add(e)),this.hasAttribute("disabled")&&n.querySelector("#btn").classList.add("disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#btn").classList.add(e))}_reset(){this.shadowRoot.querySelector("#btn").classList.value="btn"}}customElements.define("w-btn",Tu);let Ru=class extends HTMLElement{_getStyle(){return`
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
			left:1px;
			top:1px;
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
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
				</svg>
			</i>
            <input type="checkbox">
            <slot></slot>
		</label>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","checked","size","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#checkbox").setAttribute("value",e)),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#checkbox").classList.add(e)),this.hasAttribute("checked")&&n.querySelector("#checkbox").classList.add("checked"),this.hasAttribute("disabled")&&n.querySelector("#checkbox").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#checkbox").classList.value="checkbox"}_event(){this.shadowRoot.querySelector("#checkbox").addEventListener("change",()=>{this.hasAttribute("disabled")||(this.hasAttribute("checked")?this.removeAttribute("checked"):this.setAttribute("checked",""),this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0})))})}};function jp(t="",e,n){var r={ok:"ok",cancel:"cancel"};Object.assign(r,n);let i=document.createElement("w-modal");i.innerHTML=`
        <div style="display:flex;flex-direction: column; height:100%;">
            <div style="padding:10px; flex:1; display: flex; flex-direction: column; overflow-y: auto; border-bottom: 1px solid var(--wcp-color-disabled); word-break: break-word; ">
                ${t}
            </div>
            <div style="display: inline-flex; width: 100%; justify-content: end; height: 40px; ">
                <w-btn id="cancel" type="text" style="flex:1;border-right:1px solid var(--wcp-color-disabled);"><span style="color:var(--wcp-color-input)">${r.cancel}</span></w-btn>
                <w-btn id="ok" type="text" style="flex:1; margin-right:4px;">${r.ok}</w-btn>
            </div>
        </div>
        `,i.setAttribute("show",""),i.setAttribute("height","180px"),i.setAttribute("width","280px"),document.body.append(i),i.querySelector("#cancel").addEventListener("click",s=>{i.removeAttribute("show")}),i.querySelector("#ok").addEventListener("click",s=>{i.removeAttribute("show"),e()}),i.addEventListener("click",s=>{let o=setTimeout(()=>{i.hasAttribute("show")||i.remove(),clearTimeout(o)},1e3)})}customElements.define("w-checkbox",Ru);let Ou=class extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("width")&&(e=this.getAttribute("width"),n.querySelector("#wrap").style.width=e),this.hasAttribute("height")&&(e=this.getAttribute("height"),n.querySelector("#wrap").style.height=e),this.hasAttribute("show")&&n.querySelector("#dialog").classList.add("show")}_reset(){this.shadowRoot.querySelector("#dialog").classList.value="dialog"}_event(){this.shadowRoot.querySelector("#dialog").addEventListener("click",e=>{e.target.id=="dialog"&&this.removeAttribute("show")})}};customElements.define("w-dialog",Ou);class Cu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled","value","size"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n,r=this.shadowRoot;this.hasAttribute("disabled")?(r.querySelector("#heart").classList.add("disabled"),r.querySelectorAll("#heart .heart-item .icon").forEach(i=>{i.querySelector("path").removeAttribute("fill")})):(r.querySelectorAll("#heart .heart-item .icon").forEach(i=>{i.classList.add("hide")}),r.querySelectorAll("#heart .heart-item .icon-outline").forEach(i=>{i.classList.remove("hide")})),this.hasAttribute("value")&&(e=Number(this.getAttribute("value")),this.hasAttribute("disabled")?(0<=e&&e<=.2&&(n=e/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","url(#ratio)")),.2<e&&e<=.4&&(n=(e-.2)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","url(#ratio)")),.4<e&&e<=.6&&(n=(e-.4)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","url(#ratio)")),.6<e&&e<=.8&&(n=(e-.6)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","url(#ratio)")),.8<e&&e<=1&&(n=(e-.8)/.2*100+"%",r.querySelectorAll("#ratio stop")[1].setAttribute("offset",n),r.querySelectorAll("#ratio stop")[2].setAttribute("offset",n),r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[4].querySelector("path").setAttribute("fill","url(#ratio)"))):(0<e&&e<=.2&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide")),.2<e&&e<=.4&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide")),.4<e&&e<=.6&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide")),.6<e&&e<=.8&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[3].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[3].classList.add("hide")),.8<e&&e<=1&&(r.querySelectorAll("#heart .heart-item .icon")[0].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[1].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[2].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[3].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[4].querySelector("path").setAttribute("fill","var(--wcp-color-base)"),r.querySelectorAll("#heart .heart-item .icon")[0].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[1].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[2].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[3].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon")[4].classList.remove("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[0].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[1].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[2].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[3].classList.add("hide"),r.querySelectorAll("#heart .heart-item .icon-outline")[4].classList.add("hide")))),this.hasAttribute("size")&&(n=this.getAttribute("size"),r.querySelector("#heart").classList.add(n))}_reset(){this.shadowRoot.querySelector("#heart").classList.value="heart"}_event(){this.shadowRoot.querySelectorAll("#heart .heart-item").forEach((e,n)=>{e.setAttribute("index",n),e.addEventListener("click",r=>{var i;this.hasAttribute("disabled")||(this.setAttribute("value",i=(n+1)/5),this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0})))})})}}customElements.define("w-heart",Cu);class Mu extends HTMLElement{_getStyle(){return`
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
        .icon{
            display: inline-flex;
            transition: all 0.2s;
        }
        </style>
        `}_getTemplate(){return`
        <svg id="icon" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        </svg>
        `}constructor(){super(),this.iconArr=[{name:"house",path:'<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>'},{name:"glass",path:'<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>'},{name:"user",path:'<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>'},{name:"check",path:'<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>'},{name:"xmark",path:'<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>'},{name:"download",path:'<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>'},{name:"upload",path:'<path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>'},{name:"image",path:'<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>'},{name:"phone",path:'<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>'},{name:"bars",path:'<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>'},{name:"envelope",path:'<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>'},{name:"star",path:'<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>'},{name:"location-dot",path:'<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>'},{name:"music",path:'<path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/>'},{name:"wand-magic-sparkles",path:'<path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/>'},{name:"heart",path:'<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>'},{name:"arrow-up",path:'<path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>'},{name:"arrow-right",path:'<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>'},{name:"arrow-down",path:'<path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>'},{name:"arrow-left",path:'<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>'},{name:"circle-xmark",path:'<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>'},{name:"bomb",path:'<path d="M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8z"/>'},{name:"poo",path:'<path d="M268.9 .9c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.4c2.8 8.2 4.3 16.9 4.3 26.1c0 44.1-35.7 79.9-79.8 80H160c-35.3 0-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48H104c-39.8 0-72 32.2-72 72c0 23.2 11 43.8 28 57c-34.1 5.7-60 35.3-60 71c0 39.8 32.2 72 72 72H440c39.8 0 72-32.2 72-72c0-35.7-25.9-65.3-60-71c17-13.2 28-33.8 28-57c0-39.8-32.2-72-72-72H394.3c13.3-11.7 21.7-28.9 21.7-48c0-35.3-28.7-64-64-64h-5.5c3.5-10 5.5-20.8 5.5-32c0-48.6-36.2-88.8-83.1-95.1zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm64 108.3c0 2.4-.7 4.8-2.2 6.7c-8.2 10.5-39.5 45-93.8 45s-85.6-34.6-93.8-45c-1.5-1.9-2.2-4.3-2.2-6.7c0-6.8 5.5-12.3 12.3-12.3H339.7c6.8 0 12.3 5.5 12.3 12.3z"/>'},{name:"camera-retro",path:'<path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/>'},{name:"cloud",path:'<path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>'},{name:"comment",path:'<path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>'},{name:"caret-up",path:'<path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>'},{name:"truck",path:'<path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>'},{name:"truck-fast",path:'<path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>'}]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["name","color","size","width"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;if(this.hasAttribute("name")){let r=this.getAttribute("name");n.querySelector("#icon").innerHTML=this.iconArr.find(i=>i.name===r).path}this.hasAttribute("color")&&(e=this.getAttribute("color"),n.querySelector("#icon").style.fill=e),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#icon").style.height=e),this.hasAttribute("width")&&(e=this.getAttribute("width"),n.querySelector("#icon").style.width=e)}_reset(){var e=this.shadowRoot;e.querySelector("#icon").classList.value="icon",e.querySelector("#icon").innerHTML=this.iconArr[0].path,e.querySelector("#icon").style.fill="var(--wcp-color-base)",e.querySelector("#icon").style.height="14px",e.querySelector("#icon").style.width=""}getIconNames(){let e=[];return this.iconArr.forEach(n=>{e.push(n.name)}),e}}customElements.define("w-icon",Mu);class ku extends HTMLElement{_getStyle(){return`
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
        .input[type=color]{
			padding: 0;
		}
        

        </style>
        `}_getTemplate(){return`
            <input type="text" class="input" id="input">
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","maxlength","min","max","step","type","placeholder","disabled","size","error"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#input").setAttribute("value",e),n.querySelector("#input").value=e),this.hasAttribute("maxlength")&&(e=this.getAttribute("maxlength"),n.querySelector("#input").setAttribute("maxlength",e)),this.hasAttribute("min")&&(e=this.getAttribute("min"),n.querySelector("#input").min=e),this.hasAttribute("max")&&(e=this.getAttribute("max"),n.querySelector("#input").max=e),this.hasAttribute("step")&&(e=this.getAttribute("step"),n.querySelector("#input").step=e),this.hasAttribute("type")&&(e=this.getAttribute("type"),n.querySelector("#input").type=e),this.hasAttribute("placeholder")&&(e=this.getAttribute("placeholder"),n.querySelector("#input").placeholder=e),this.hasAttribute("disabled")?n.querySelector("#input").setAttribute("disabled",""):n.querySelector("#input").removeAttribute("disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#input").classList.add(e)),this.hasAttribute("error")&&n.querySelector("#input").classList.add("error")}_reset(){this.shadowRoot.querySelector("#input").classList.value="input"}_event(){this.shadowRoot.querySelector("#input").addEventListener("input",e=>{e=e.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-input",ku);class Lu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.defaultImg=null,this.lazyArr=[],this.observer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot}_event(){let e=this.shadowRoot;e.addEventListener("slotchange",n=>{this.lazyArr.length!=0&&this.lazyArr.forEach(r=>{this.observer.unobserve(r)}),this.lazyArr.length=0,e.querySelector("#slot").assignedElements().map(r=>{this.lazyArr.push(...Array.from(r.querySelectorAll("img"))),this.lazyArr.push(...Array.from(r.querySelectorAll("video"))),this.lazyArr.push(...Array.from(r.querySelectorAll("w-player")))}),this.lazyArr.forEach(r=>{this.observer.observe(r)})}),this.observer=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&((r=r.target).hasAttribute("lazy-src")&&r.setAttribute("src",r.getAttribute("lazy-src")),this.observer.unobserve(r))})})}}customElements.define("w-lazy-loading",Lu);class Iu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["show"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("show")&&e.querySelector("#menu").classList.add("show")}_reset(){this.shadowRoot.querySelector("#menu").classList.value="menu"}_event(){this.shadowRoot}}customElements.define("w-menu",Iu);class Du extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("disabled")&&e.querySelector("#menu-item").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#menu-item").classList.value="menu-item"}_event(){this.shadowRoot}}customElements.define("w-menu-item",Du);class qu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("width")&&(e=this.getAttribute("width"),n.querySelector("#wrap").style.width=e),this.hasAttribute("height")&&(e=this.getAttribute("height"),n.querySelector("#wrap").style.height=e),this.hasAttribute("show")&&n.querySelector("#modal").classList.add("show")}_reset(){this.shadowRoot.querySelector("#modal").classList.value="modal"}_event(){this.shadowRoot.querySelector("#modal").addEventListener("click",e=>{e.target.id=="modal"&&this.removeAttribute("show")})}}customElements.define("w-modal",qu);class Pu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.timer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","position"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("type")&&(e=this.getAttribute("type"),n.querySelector("#msg").classList.add(e)),this.hasAttribute("position")?(e=this.getAttribute("position"),n.querySelector("#msg").classList.add(e)):n.querySelector("#msg").classList.add("top")}_reset(){this.shadowRoot.querySelector("#msg").classList.value="msg"}show(e,n=""){let r=this.shadowRoot;switch(this._setOptions(),r.querySelector("#content").innerHTML=e,n&&r.querySelector("#msg").classList.add(n),n){case"success":r.querySelector("#icon").innerHTML=r.querySelector("#icon-success").innerHTML;break;case"error":r.querySelector("#icon").innerHTML=r.querySelector("#icon-error").innerHTML;break;case"warning":r.querySelector("#icon").innerHTML=r.querySelector("#icon-warning").innerHTML;break;default:r.querySelector("#icon").innerHTML=r.querySelector("#icon-default").innerHTML}r.querySelector("#msg").classList.add("show");let i=2e3;this.hasAttribute("delay")&&(i=+this.getAttribute("delay")),this.timer||(this.timer=setTimeout(()=>{r.querySelector("#msg").classList.remove("show"),clearTimeout(this.timer),this.timer=null},i))}static init(r){var n={},r=(r&&Object.assign(n,r),document.createElement("w-msg"));return n.type&&r.setAttribute("type",n.type),n.position&&r.setAttribute("position",n.position),n.delay&&r.setAttribute("delay",n.delay),document.body.append(r),r}}customElements.define("w-msg",Pu);class Bu extends HTMLElement{_getStyle(){return`
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
                overflow: hidden;
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
        `}constructor(){super(),this._drag=!1,this._focus=!1,this.accept=[".mp4",".webm",".ogg",".mp3"]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["src","poster"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var e=this.shadowRoot,n=this.hasAttribute("src")?this.getAttribute("src"):"",r=this.hasAttribute("poster")?this.getAttribute("poster"):"";this._reset(),e.querySelector("#video").src=n,e.querySelector("#video").poster=r}_event(){let e=this.shadowRoot;e.querySelector("#control-main").addEventListener("click",n=>{e.querySelector("#video").paused?this.play():this.pause()}),e.querySelector("#control-main").addEventListener("dblclick",n=>{this._fullscreenHandler(n)}),e.querySelector("#video").addEventListener("loadedmetadata",n=>{e.querySelector("#time-total").innerHTML=this._timeFormat(e.querySelector("#video").duration)}),e.querySelector("#video").addEventListener("error",n=>{}),e.querySelector("#video").addEventListener("timeupdate",n=>{e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime);var r=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%";e.querySelector("#timeline").style.width=r}),e.querySelector("#video").addEventListener("ended",n=>{e.querySelector("#video").pause(),e.querySelector(".icon-play").classList.remove("hide"),this.dispatchEvent(new CustomEvent("ended",{detail:{},bubbles:!0}))}),e.querySelector("#progress").addEventListener("pointerdown",n=>{e.querySelector("#progress").setPointerCapture(n.pointerId),this._drag=!0,e.querySelector("#timeline").classList.add("show-after"),n=this._getRatio(n.pageX),e.querySelector("#video").currentTime=e.querySelector("#video").duration*n}),e.querySelector("#progress").addEventListener("pointermove",n=>{this._drag&&(n=this._getRatio(n.pageX),e.querySelector("#timeline").style.width=100*n+"%",n=e.querySelector("#video").duration*n||0,e.querySelector("#time-cur").innerHTML=this._timeFormat(n),e.querySelector("#video").currentTime=n)}),e.querySelector("#progress").addEventListener("pointerup",n=>{this._drag=!1,e.querySelector("#timeline").classList.remove("show-after")}),document.addEventListener("keydown",n=>{var r;this._focus&&(n.preventDefault(),n.key=="ArrowLeft"?(e.querySelector("#video").currentTime-=10,e.querySelector("#video").currentTime<0&&(e.querySelector("#video").currentTime=0),e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime),r=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%",e.querySelector("#timeline").style.width=r):n.key=="ArrowRight"?(e.querySelector("#video").currentTime+=10,e.querySelector("#video").currentTime>e.querySelector("#video").duration&&(e.querySelector("#video").currentTime=e.querySelector("#video").duration),e.querySelector("#time-cur").innerHTML=this._timeFormat(e.querySelector("#video").currentTime),r=e.querySelector("#video").currentTime/e.querySelector("#video").duration*100+"%",e.querySelector("#timeline").style.width=r):n.key==" "&&(e.querySelector("#video").paused?this.play():this.pause()))}),e.querySelector("#web-player").addEventListener("contextmenu",n=>{n.preventDefault(),this._showContextmenu(n)}),e.querySelector("#web-player").addEventListener("click",n=>{this._hideContextmenu()}),e.querySelector("#openfile").addEventListener("click",n=>{e.querySelector("#file").dispatchEvent(new MouseEvent("click"))}),e.querySelector("#file").addEventListener("change",n=>{var r=e.querySelector("#file").files[0];let i=!1;for(let s=0;s<this.accept.length;s++)if(r.name.endsWith(this.accept[s])){i=!0;break}i?(this._reset(),e.querySelector("#video").src=URL.createObjectURL(r),this.play()):alert("file not accept")}),e.querySelector("#menu-list-item-github").addEventListener("click",n=>{window.open("https://github.com/gaojie0910","_blank")}),e.querySelector("#web-player").addEventListener("focus",n=>{this._focus=!0}),e.querySelector("#web-player").addEventListener("blur",n=>{this._focus=!1,this._hideContextmenu()})}play(){var e=this.shadowRoot;e.querySelector(".icon-play").classList.add("hide"),e.querySelector("#video").play()}pause(){var e=this.shadowRoot;e.querySelector(".icon-play").classList.remove("hide"),e.querySelector("#video").pause()}_fullscreenHandler(e){var n=this.shadowRoot;navigator.userAgent.includes("Mobile")?n.querySelector("#web-player").classList.toggle("full"):document.fullscreenElement?document.exitFullscreen():n.querySelector("#web-player").requestFullscreen()}_reset(){var e=this.shadowRoot;e.querySelector("#video").src="",e.querySelector("#video").poster="",e.querySelector("#timeline").style.width=0,e.querySelector("#time-total").innerHTML=this._timeFormat(0),e.querySelector("#time-cur").innerHTML=this._timeFormat(0),e.querySelector("#video").pause(),e.querySelector(".icon-play").classList.remove("hide")}_hideContextmenu(){this.shadowRoot.querySelector("#contextmenu").classList.add("hide")}_showContextmenu(e){var n=this.shadowRoot;n.querySelector("#contextmenu").classList.remove("hide"),n.querySelector("#contextmenu").style.left=e.pageX-n.querySelector("#web-player").getBoundingClientRect().left-document.documentElement.scrollLeft+"px",n.querySelector("#contextmenu").style.top=e.pageY-n.querySelector("#web-player").getBoundingClientRect().top-document.documentElement.scrollTop+"px"}_getRatio(r){var n=this.shadowRoot,r=(r-(n.querySelector("#progress").getBoundingClientRect().left-document.documentElement.scrollLeft))/n.querySelector("#progress").scrollWidth;return(r=1<r?1:r)<0?0:r}_timeFormat(e){e=parseInt(e,10);let n=Math.floor(e/3600),r=Math.floor((e-3600*n)/60),i=e-3600*n-60*r;return n<10&&(n="0"+n),r<10&&(r="0"+r),i<10&&(i="0"+i),n+":"+r+":"+i}}customElements.define("w-player",Bu);class zu extends HTMLElement{_getStyle(){return`
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Arial, 'Microsoft Yahei', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }
        :host{
            display: inline-flex;
        }

        .progress {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    
        .progress-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
    
        .progress-bar {
            transition: stroke-dashoffset 1s ease;
        }

        </style>
        `}_getTemplate(){return`
        <div class="progress" id="progress">
            <svg width="100%" height="100%">
                <!-- 底部背景圆环 -->
                <circle id="progress-bg" fill="none" />
                <!-- 进度条圆环 -->
                <circle class="progress-bar" id="progress-bar"
                    fill="none" stroke-linecap="round" />
            </svg>
            <span class="progress-text" id="progress-text"></span>
        </div>
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["color","bgcolor","r","width","percent"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;if(this.hasAttribute("color")?(e=this.getAttribute("color"),n.querySelector("#progress-bar").setAttribute("stroke",e)):n.querySelector("#progress-bar").setAttribute("stroke","var(--wcp-color-base)"),this.hasAttribute("bgcolor")?(e=this.getAttribute("bgcolor"),n.querySelector("#progress-bg").setAttribute("stroke",e)):n.querySelector("#progress-bg").setAttribute("stroke","#eee"),this.hasAttribute("width")?(e=this.getAttribute("width"),n.querySelector("#progress-bg").setAttribute("stroke-width",e),n.querySelector("#progress-bar").setAttribute("stroke-width",e)):(n.querySelector("#progress-bg").setAttribute("stroke-width",10),n.querySelector("#progress-bar").setAttribute("stroke-width",10)),this.hasAttribute("r")?(e=this.getAttribute("r"),n.querySelector("#progress-bg").setAttribute("r",e),n.querySelector("#progress-bar").setAttribute("r",e)):(n.querySelector("#progress-bg").setAttribute("r",50),n.querySelector("#progress-bar").setAttribute("r",50)),this.hasAttribute("percent")){let r=this.getAttribute("percent");100<(r=r<0?0:r)&&(r=100),n.querySelector("#progress-text").innerHTML=r+"%",n.querySelector("#progress-bar").setAttribute("stroke-dashoffset",2*Math.PI*+n.querySelector("#progress-bar").getAttribute("r")*(100-r)/100)}else n.querySelector("#progress-bar").setAttribute("stroke-dashoffset",2*Math.PI*+n.querySelector("#progress-bar").getAttribute("r"));n.querySelector("#progress").style.width=2*+n.querySelector("#progress-bg").getAttribute("r")+ +n.querySelector("#progress-bg").getAttribute("stroke-width")+"px",n.querySelector("#progress").style.height=2*+n.querySelector("#progress-bg").getAttribute("r")+ +n.querySelector("#progress-bg").getAttribute("stroke-width")+"px",n.querySelector("#progress-bg").setAttribute("cx",+n.querySelector("#progress-bg").getAttribute("r")+ +n.querySelector("#progress-bg").getAttribute("stroke-width")/2),n.querySelector("#progress-bg").setAttribute("cy",+n.querySelector("#progress-bg").getAttribute("r")+ +n.querySelector("#progress-bg").getAttribute("stroke-width")/2),n.querySelector("#progress-bar").setAttribute("cx",+n.querySelector("#progress-bar").getAttribute("r")+ +n.querySelector("#progress-bar").getAttribute("stroke-width")/2),n.querySelector("#progress-bar").setAttribute("cy",+n.querySelector("#progress-bar").getAttribute("r")+ +n.querySelector("#progress-bar").getAttribute("stroke-width")/2),n.querySelector("#progress-bar").setAttribute("stroke-dasharray",2*Math.PI*+n.querySelector("#progress-bar").getAttribute("r")),n.querySelector("#progress-bar").setAttribute("transform",`rotate(-90, ${+n.querySelector("#progress-bar").getAttribute("r")+ +n.querySelector("#progress-bar").getAttribute("stroke-width")/2}, ${+n.querySelector("#progress-bar").getAttribute("r")+ +n.querySelector("#progress-bar").getAttribute("stroke-width")/2})`),n.querySelector("#progress-bar").getAttribute("r")<20?n.querySelector("#progress-text").setAttribute("hidden",""):n.querySelector("#progress-text").removeAttribute("hidden"),n.querySelector("#progress-text").style.fontSize=+n.querySelector("#progress-bar").getAttribute("r")/2*1+"px"}_reset(){this.shadowRoot.querySelector("#progress").classList.value="progress"}}customElements.define("w-progress",zu);class Hu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["size","checked","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("checked")&&n.querySelector("#radio").classList.add("checked"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#radio").classList.add(e)),this.hasAttribute("disabled")&&n.querySelector("#radio").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#radio").classList.value="radio"}_event(){this.shadowRoot}}customElements.define("w-radio",Hu);class Uu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let e=this.getAttribute("value");Array.from(this.children).forEach(n=>{e==n.getAttribute("value")?n.setAttribute("checked",""):n.removeAttribute("checked")})}}_reset(){this.shadowRoot}_event(){this.shadowRoot.addEventListener("click",e=>{this.hasAttribute("disabled")||e.target.tagName!="W-RADIO"||e.target.hasAttribute("disabled")||e.target.hasAttribute("checked")||(Array.from(this.children).forEach(n=>{n.removeAttribute("checked")}),e.target.setAttribute("checked",""),e=e.target.hasAttribute("value")?e.target.getAttribute("value"):null,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-radios",Uu);class Fu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.observer=null,this.lazyArr=[]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot}_event(){var e=this.shadowRoot;this.observer=new IntersectionObserver(n=>{n[0].isIntersecting&&this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0}))}),this.observer.observe(e.querySelector("#loading"))}}customElements.define("w-scroll-loading",Fu);class $u extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","disabled","size"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let e=this.shadowRoot;var n;e.querySelector("#select").innerHTML="",e.querySelector("#slot").assignedElements().forEach(r=>{e.querySelector("#select").appendChild(r.cloneNode(!0))}),this.hasAttribute("value")&&(n=this.getAttribute("value"),e.querySelector("#select").value=n),this.hasAttribute("disabled")?e.querySelector("#select").setAttribute("disabled",""):e.querySelector("#select").removeAttribute("disabled"),this.hasAttribute("size")&&(n=this.getAttribute("size"),e.querySelector("#select").classList.add(n))}_reset(){this.shadowRoot.querySelector("#select").classList.value="select"}_event(){this.shadowRoot.querySelector("#select").addEventListener("change",e=>{e=e.target.value,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-select",$u);class Ku extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.cur=1,this.total=1,this.timer=null,this.pre=0,this.distance=0,this.isMove=!1,this.vetical=!1,this.width=0,this.height=0,this.startTime=Date.now()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["vertical","auto","pagehide"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let e=this.shadowRoot;this.hasAttribute("vertical")?(e.querySelector("#slide").classList.add("vertical"),this.vetical=!0):this.vetical=!1,this.hasAttribute("pagehide")?e.querySelector("#page").setAttribute("hidden",""):e.querySelector("#page").removeAttribute("hidden"),this.hasAttribute("auto")?this.total!=1&&(this.timer=setInterval(()=>{this.cur++,this.cur>this.total&&(this.cur=1),this.appendChild(this.firstElementChild.cloneNode(!0)),this.hasAttribute("vertical")?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},300),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))},3e3)):(clearInterval(this.timer),this.timer=null)}_reset(){var e=this.shadowRoot;e.querySelector("#slide").classList.value="slide",this.width=+getComputedStyle(this).width.split("px")[0],this.height=+getComputedStyle(this).height.split("px")[0],this.cur=1,this.total=e.querySelector("#slide-wrap").assignedElements().length,e.querySelector("#page").innerHTML=this.cur+"/"+this.total}_event(){let e=this.shadowRoot;this.total!=1&&(e.querySelector("#slide-wrap").addEventListener("pointerdown",n=>{this.isMove=!0,e.querySelector("#slide-wrap").assignedElements().length>this.total?this.isMove=!1:(clearInterval(this.timer),this.timer=null,this.distance=0,this.startTime=Date.now(),this.pre=this._getPosition(n),this.insertAdjacentElement("afterbegin",this.lastElementChild.cloneNode(!0)),this.vetical?e.querySelector("#slide-wrap").scrollTo(0,this.height):e.querySelector("#slide-wrap").scrollTo(this.width,0))}),e.querySelector("#slide-wrap").addEventListener("pointermove",n=>{this.isMove&&(e.querySelector("#slide-wrap").setPointerCapture(n.pointerId),this.distance=this._getPosition(n)-this.pre,this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:-this.distance+this.height,behavior:"auto"}):e.querySelector("#slide-wrap").scroll({left:-this.distance+this.width,top:0,behavior:"auto"}))}),e.querySelector("#slide-wrap").addEventListener("pointerup",n=>{if(this.isMove){this.isMove=!1;var r=this.distance/(Date.now()-this.startTime);let i=this.width/2;this.vetical&&(i=this.height/2),this.distance<-i||r<-.5?(this.cur==this.total?this.cur=1:this.cur++,this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:2*this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:2*this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),this.insertAdjacentElement("beforeend",this.firstElementChild.cloneNode(!0)),this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))):this.distance>i||.5<r?(this.cur==1?this.cur=this.total:this.cur--,e.querySelector("#slide-wrap").scroll({left:0,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.lastElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))):(-i<this.distance&&this.distance<i||-.5<r&&r<.5)&&(this.vetical?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},200)),this.hasAttribute("auto")&&(clearInterval(this.timer),this.timer=setInterval(()=>{this.cur++,this.cur>this.total&&(this.cur=1),this.appendChild(this.firstElementChild.cloneNode(!0)),this.hasAttribute("vertical")?e.querySelector("#slide-wrap").scroll({left:0,top:this.height,behavior:"smooth"}):e.querySelector("#slide-wrap").scroll({left:this.width,top:0,behavior:"smooth"}),setTimeout(()=>{e.querySelector("#page").innerHTML=this.cur+"/"+this.total,this.firstElementChild.remove(),e.querySelector("#slide-wrap").scrollTo(0,0)},300),this.dispatchEvent(new CustomEvent("change",{detail:{cur:this.cur,total:this.total},bubbles:!0}))},3e3))}}))}_getPosition(e){var n,r=this.shadowRoot;return this.vetical?(n=r.querySelector("#slide").getBoundingClientRect().top-document.documentElement.scrollTop,e.pageY-n):(n=r.querySelector("#slide").getBoundingClientRect().left-document.documentElement.scrollLeft,e.pageX-n)}}customElements.define("w-slide",Ku);class Gu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot.querySelector("#slide-item").classList.value="slide-item"}_event(){this.shadowRoot}}customElements.define("w-slide-item",Gu);class Wu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["columns","hover","sticky","bordered","selected"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("columns")&&(e=this.getAttribute("columns"),n.querySelector("#row").style.gridTemplateColumns=e),this.hasAttribute("hover")&&n.querySelector("#row").classList.add("hover"),this.hasAttribute("sticky")&&n.querySelector("#row").classList.add("sticky"),this.hasAttribute("bordered")&&n.querySelector("#row").classList.add("bordered"),this.hasAttribute("selected")&&n.querySelector("#row").classList.add("selected")}_reset(){this.shadowRoot.querySelector("#row").classList.value="row"}_event(){this.shadowRoot}}customElements.define("w-table-row",Wu);class Vu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["col","row"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var e;this._reset(),this.shadowRoot,this.hasAttribute("col")&&(e=this.getAttribute("col"),this.style.gridColumnStart="span "+e),this.hasAttribute("row")&&(e=this.getAttribute("row"),this.style.gridRowStart="span "+e)}_reset(){this.shadowRoot.querySelector("#item").classList.value="item"}_event(){this.shadowRoot}}customElements.define("w-table-item",Vu);class Yu extends HTMLElement{_getStyle(){return`
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
                    `}),r+="</w-table-row>"}),e.querySelector("#body").innerHTML=r}}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_event(){this.shadowRoot}_getColumns(){let e="";return this.column&&this.column.forEach(n=>{n.width?e+=n.width+" ":e+="1fr "}),e}}customElements.define("w-table",Yu);class Zu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.url=null,this.auth=null,this.pagination={cur:1,count:1,total:1}}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._initData(),this._event()}static get observedAttributes(){return["column","height","sticky","url","count","auth"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("column")&&e.querySelector("#table").setAttribute("column",this.getAttribute("column")),this.hasAttribute("height")?e.querySelector("#table").setAttribute("height",this.getAttribute("height")):e.querySelector("#table").removeAttribute("height"),this.hasAttribute("sticky")?e.querySelector("#table").setAttribute("sticky",""):e.querySelector("#table").removeAttribute("sticky"),this.hasAttribute("url")?this.url=this.getAttribute("url"):this.url=null,this.hasAttribute("count")?this.pagination.count=+this.getAttribute("count"):this.pagination.count=1,this.hasAttribute("auth")&&(this.auth=this.getAttribute("auth"))}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_initData(){var e=this.shadowRoot;e.querySelector("#cur").innerHTML=this.pagination.cur,e.querySelector("#pre").classList.add("disabled"),e.querySelector("#next").classList.add("disabled"),this._fetchData()}_event(){let e=this.shadowRoot;e.querySelector("#pre").addEventListener("click",n=>{e.querySelector("#pre").classList.contains("disabled")||(e.querySelector("#next").classList.remove("disabled"),this.pagination.cur--,e.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur<=1&&e.querySelector("#pre").classList.add("disabled"),this._fetchData())}),e.querySelector("#next").addEventListener("click",n=>{e.querySelector("#next").classList.contains("disabled")||(e.querySelector("#pre").classList.remove("disabled"),this.pagination.cur++,e.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur>=this.pagination.total&&e.querySelector("#next").classList.add("disabled"),this._fetchData())}),e.querySelector("#cur").addEventListener("keypress",n=>{if(n.key=="Enter"){console.log("Enter"),e.querySelector("#cur").blur(),this.pagination.total!=1&&(e.querySelector("#pre").classList.remove("disabled"),e.querySelector("#next").classList.remove("disabled"));let r=+e.querySelector("#cur").innerHTML;r<=1&&(r=1,e.querySelector("#pre").classList.add("disabled")),r>=this.pagination.total&&(r=this.pagination.total,e.querySelector("#next").classList.add("disabled")),e.querySelector("#cur").innerHTML=r,this.pagination.cur!=r&&(this.pagination.cur=r,this._fetchData())}else if(!"1234567890".includes(n.key))return n.preventDefault(),n.defaultPrevented})}_fetchData(){this.shadowRoot;var e={headers:{"Content-Type":"application/json;charset=utf-8",Authorization:this.auth},method:"get"};fetch(`${this.url}?cur=${this.pagination.cur}&count=`+this.pagination.count,e).then(n=>n.json()).then(n=>{this.dispatchEvent(new CustomEvent("fetchData",{detail:{data:n},bubbles:!0}))}).catch(n=>{console.log(n)})}setData(e){var n=this.shadowRoot;n.querySelector("#table").setAttribute("data",JSON.stringify(e.data)),this.pagination.total=e.total||1,n.querySelector("#total").innerHTML=this.pagination.total,this.pagination.cur>=this.pagination.total?n.querySelector("#next").classList.add("disabled"):n.querySelector("#next").classList.remove("disabled")}resetTableData(){this.pagination.cur=1,this._initData()}}customElements.define("w-table-pagination",Zu);class Xu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","active","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#tab").setAttribute("value",e)),this.hasAttribute("active")&&n.querySelector("#tab").classList.add("active"),this.hasAttribute("disabled")&&n.querySelector("#tab").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#tab").classList.value="tab"}_event(){this.shadowRoot}}customElements.define("w-tab",Xu);class Qu extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let e=this.getAttribute("value");Array.from(this.children).forEach(n=>{n.removeAttribute("active"),n.hasAttribute("value")&&n.getAttribute("value")==e&&n.setAttribute("active","")})}}_reset(){this.shadowRoot.querySelector("#tabs").classList.value="tabs"}_event(){this.shadowRoot.querySelector("#tabs").addEventListener("click",e=>{e.target.tagName!="W-TAB"||e.target.hasAttribute("disabled")||e.target.getAttribute("value")==this.getAttribute("value")||(e=e.target.hasAttribute("value")?e.target.getAttribute("value"):null,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-tabs",Qu);class Ju extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","placeholder","disabled","size","error"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("value")&&(e=this.getAttribute("value"),n.querySelector("#textarea").value=e),this.hasAttribute("placeholder")&&(e=this.getAttribute("placeholder"),n.querySelector("#textarea").placeholder=e),this.hasAttribute("disabled")&&(n.querySelector("#textarea").disabled="disabled"),this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#textarea").classList.add(e)),this.hasAttribute("error")&&n.querySelector("#textarea").classList.add("error")}_reset(){this.shadowRoot.querySelector("#textarea").classList.value="textarea"}_event(){this.shadowRoot.querySelector("#textarea").addEventListener("input",e=>{e=e.target.value,this.setAttribute("value",e),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0}))})}}customElements.define("w-textarea",Ju);class ju extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["on","size","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e,n=this.shadowRoot;this.hasAttribute("size")&&(e=this.getAttribute("size"),n.querySelector("#toggle").classList.add(e)),this.hasAttribute("on")&&n.querySelector("#toggle").classList.add("on"),this.hasAttribute("disabled")&&n.querySelector("#toggle").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#toggle").classList.value="toggle"}_event(){this.shadowRoot.querySelector("#toggle").addEventListener("click",()=>{var e;this.hasAttribute("disabled")||(e="",e=this.hasAttribute("on")?(this.removeAttribute("on"),""):(this.setAttribute("on",""),"on"),this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0})))})}}customElements.define("w-toggle",ju);class ed extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["url","name","multiple","accept","auth","disabled"]}attributeChangedCallback(e,n,r){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var e=this.shadowRoot;this.hasAttribute("url")?e.querySelector("#file").setAttribute("url",this.getAttribute("url")):e.querySelector("#file").setAttribute("url",""),this.hasAttribute("name")?e.querySelector("#file").setAttribute("name",this.getAttribute("name")):e.querySelector("#file").setAttribute("name","file"),this.hasAttribute("multiple")?e.querySelector("#file").setAttribute("multiple",""):e.querySelector("#file").removeAttribute("multiple"),this.hasAttribute("accept")?e.querySelector("#file").setAttribute("accept",this.getAttribute("accept")):e.querySelector("#file").removeAttribute("accept"),this.hasAttribute("auth")?e.querySelector("#file").setAttribute("auth",this.getAttribute("auth")):e.querySelector("#file").removeAttribute("auth"),this.hasAttribute("disabled")?e.querySelector("#file").setAttribute("disabled",""):e.querySelector("#file").removeAttribute("disabled")}_reset(){this.shadowRoot.querySelector("#file").classList.value="file"}_event(){let e=this.shadowRoot;e.addEventListener("click",n=>{e.querySelector("#file").dispatchEvent(new PointerEvent("click"))}),e.querySelector("#file").addEventListener("change",async n=>{try{var r=await fetch(e.querySelector("#file").getAttribute("url"),{headers:{Authorization:e.querySelector("#file").getAttribute("auth")},method:"post",cors:"cors",body:new FormData(e.querySelector("#form"))}),i=await r.json();this.dispatchEvent(new CustomEvent("change",{detail:{value:[...e.querySelector("#file").files],response:r,data:i},bubbles:!0}))}catch(s){this.dispatchEvent(new CustomEvent("change",{detail:{value:[...e.querySelector("#file").files],response:s,data:{msg:"error"}},bubbles:!0}))}e.querySelector("#file").value=""})}}customElements.define("w-upload",ed);function td(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function va(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(e=>{const n=t[e],r=typeof n;(r==="object"||r==="function")&&!Object.isFrozen(n)&&va(n)}),t}class hs{constructor(e){e.data===void 0&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function wa(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function st(t,...e){const n=Object.create(null);for(const r in t)n[r]=t[r];return e.forEach(function(r){for(const i in r)n[i]=r[i]}),n}const nd="</span>",ps=t=>!!t.scope,rd=(t,{prefix:e})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const n=t.split(".");return[`${e}${n.shift()}`,...n.map((r,i)=>`${r}${"_".repeat(i+1)}`)].join(" ")}return`${e}${t}`};class id{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=wa(e)}openNode(e){if(!ps(e))return;const n=rd(e.scope,{prefix:this.classPrefix});this.span(n)}closeNode(e){ps(e)&&(this.buffer+=nd)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const gs=(t={})=>{const e={children:[]};return Object.assign(e,t),e};class Ti{constructor(){this.rootNode=gs(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n=gs({scope:e});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return typeof n=="string"?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(r=>this._walk(e,r)),e.closeNode(n)),e}static _collapse(e){typeof e!="string"&&e.children&&(e.children.every(n=>typeof n=="string")?e.children=[e.children.join("")]:e.children.forEach(n=>{Ti._collapse(n)}))}}class sd extends Ti{constructor(e){super(),this.options=e}addText(e){e!==""&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,n){const r=e.root;n&&(r.scope=`language:${n}`),this.add(r)}toHTML(){return new id(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function cn(t){return t?typeof t=="string"?t:t.source:null}function Sa(t){return wt("(?=",t,")")}function od(t){return wt("(?:",t,")*")}function ad(t){return wt("(?:",t,")?")}function wt(...t){return t.map(n=>cn(n)).join("")}function ld(t){const e=t[t.length-1];return typeof e=="object"&&e.constructor===Object?(t.splice(t.length-1,1),e):{}}function Ri(...t){return"("+(ld(t).capture?"":"?:")+t.map(r=>cn(r)).join("|")+")"}function Aa(t){return new RegExp(t.toString()+"|").exec("").length-1}function cd(t,e){const n=t&&t.exec(e);return n&&n.index===0}const ud=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Oi(t,{joinWith:e}){let n=0;return t.map(r=>{n+=1;const i=n;let s=cn(r),o="";for(;s.length>0;){const a=ud.exec(s);if(!a){o+=s;break}o+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?o+="\\"+String(Number(a[1])+i):(o+=a[0],a[0]==="("&&n++)}return o}).map(r=>`(${r})`).join(e)}const dd=/\b\B/,xa="[a-zA-Z]\\w*",Ci="[a-zA-Z_]\\w*",Na="\\b\\d+(\\.\\d+)?",Ta="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ra="\\b(0b[01]+)",hd="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",pd=(t={})=>{const e=/^#![ ]*\//;return t.binary&&(t.begin=wt(e,/.*\b/,t.binary,/\b.*/)),st({scope:"meta",begin:e,end:/$/,relevance:0,"on:begin":(n,r)=>{n.index!==0&&r.ignoreMatch()}},t)},un={begin:"\\\\[\\s\\S]",relevance:0},gd={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[un]},fd={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[un]},bd={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Zn=function(t,e,n={}){const r=st({scope:"comment",begin:t,end:e,contains:[]},n);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Ri("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:wt(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},md=Zn("//","$"),_d=Zn("/\\*","\\*/"),Ed=Zn("#","$"),yd={scope:"number",begin:Na,relevance:0},vd={scope:"number",begin:Ta,relevance:0},wd={scope:"number",begin:Ra,relevance:0},Sd={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[un,{begin:/\[/,end:/\]/,relevance:0,contains:[un]}]},Ad={scope:"title",begin:xa,relevance:0},xd={scope:"title",begin:Ci,relevance:0},Nd={begin:"\\.\\s*"+Ci,relevance:0},Td=function(t){return Object.assign(t,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})};var En=Object.freeze({__proto__:null,APOS_STRING_MODE:gd,BACKSLASH_ESCAPE:un,BINARY_NUMBER_MODE:wd,BINARY_NUMBER_RE:Ra,COMMENT:Zn,C_BLOCK_COMMENT_MODE:_d,C_LINE_COMMENT_MODE:md,C_NUMBER_MODE:vd,C_NUMBER_RE:Ta,END_SAME_AS_BEGIN:Td,HASH_COMMENT_MODE:Ed,IDENT_RE:xa,MATCH_NOTHING_RE:dd,METHOD_GUARD:Nd,NUMBER_MODE:yd,NUMBER_RE:Na,PHRASAL_WORDS_MODE:bd,QUOTE_STRING_MODE:fd,REGEXP_MODE:Sd,RE_STARTERS_RE:hd,SHEBANG:pd,TITLE_MODE:Ad,UNDERSCORE_IDENT_RE:Ci,UNDERSCORE_TITLE_MODE:xd});function Rd(t,e){t.input[t.index-1]==="."&&e.ignoreMatch()}function Od(t,e){t.className!==void 0&&(t.scope=t.className,delete t.className)}function Cd(t,e){e&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=Rd,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Md(t,e){Array.isArray(t.illegal)&&(t.illegal=Ri(...t.illegal))}function kd(t,e){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function Ld(t,e){t.relevance===void 0&&(t.relevance=1)}const Id=(t,e)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},t);Object.keys(t).forEach(r=>{delete t[r]}),t.keywords=n.keywords,t.begin=wt(n.beforeMatch,Sa(n.begin)),t.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},t.relevance=0,delete n.beforeMatch},Dd=["of","and","for","in","not","or","if","then","parent","list","value"],qd="keyword";function Oa(t,e,n=qd){const r=Object.create(null);return typeof t=="string"?i(n,t.split(" ")):Array.isArray(t)?i(n,t):Object.keys(t).forEach(function(s){Object.assign(r,Oa(t[s],e,s))}),r;function i(s,o){e&&(o=o.map(a=>a.toLowerCase())),o.forEach(function(a){const l=a.split("|");r[l[0]]=[s,Pd(l[0],l[1])]})}}function Pd(t,e){return e?Number(e):Bd(t)?0:1}function Bd(t){return Dd.includes(t.toLowerCase())}const fs={},_t=t=>{console.error(t)},bs=(t,...e)=>{console.log(`WARN: ${t}`,...e)},Nt=(t,e)=>{fs[`${t}/${e}`]||(console.log(`Deprecated as of ${t}. ${e}`),fs[`${t}/${e}`]=!0)},kn=new Error;function Ca(t,e,{key:n}){let r=0;const i=t[n],s={},o={};for(let a=1;a<=e.length;a++)o[a+r]=i[a],s[a+r]=!0,r+=Aa(e[a-1]);t[n]=o,t[n]._emit=s,t[n]._multi=!0}function zd(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw _t("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),kn;if(typeof t.beginScope!="object"||t.beginScope===null)throw _t("beginScope must be object"),kn;Ca(t,t.begin,{key:"beginScope"}),t.begin=Oi(t.begin,{joinWith:""})}}function Hd(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw _t("skip, excludeEnd, returnEnd not compatible with endScope: {}"),kn;if(typeof t.endScope!="object"||t.endScope===null)throw _t("endScope must be object"),kn;Ca(t,t.end,{key:"endScope"}),t.end=Oi(t.end,{joinWith:""})}}function Ud(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function Fd(t){Ud(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),zd(t),Hd(t)}function $d(t){function e(o,a){return new RegExp(cn(o),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,a]),this.matchAt+=Aa(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(l=>l[1]);this.matcherRe=e(Oi(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(a);if(!l)return null;const u=l.findIndex((h,p)=>p>0&&h!==void 0),c=this.matchIndexes[u];return l.splice(0,u),Object.assign(l,c)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const l=new n;return this.rules.slice(a).forEach(([u,c])=>l.addRule(u,c)),l.compile(),this.multiRegexes[a]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,l){this.rules.push([a,l]),l.type==="begin"&&this.count++}exec(a){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let u=l.exec(a);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const c=this.getMatcher(0);c.lastIndex=this.lastIndex+1,u=c.exec(a)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function i(o){const a=new r;return o.contains.forEach(l=>a.addRule(l.begin,{rule:l,type:"begin"})),o.terminatorEnd&&a.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&a.addRule(o.illegal,{type:"illegal"}),a}function s(o,a){const l=o;if(o.isCompiled)return l;[Od,kd,Fd,Id].forEach(c=>c(o,a)),t.compilerExtensions.forEach(c=>c(o,a)),o.__beforeBegin=null,[Cd,Md,Ld].forEach(c=>c(o,a)),o.isCompiled=!0;let u=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),u=o.keywords.$pattern,delete o.keywords.$pattern),u=u||/\w+/,o.keywords&&(o.keywords=Oa(o.keywords,t.case_insensitive)),l.keywordPatternRe=e(u,!0),a&&(o.begin||(o.begin=/\B|\b/),l.beginRe=e(l.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(l.endRe=e(l.end)),l.terminatorEnd=cn(l.end)||"",o.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(o.end?"|":"")+a.terminatorEnd)),o.illegal&&(l.illegalRe=e(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(c){return Kd(c==="self"?o:c)})),o.contains.forEach(function(c){s(c,l)}),o.starts&&s(o.starts,a),l.matcher=i(l),l}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=st(t.classNameAliases||{}),s(t)}function Ma(t){return t?t.endsWithParent||Ma(t.starts):!1}function Kd(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(e){return st(t,{variants:null},e)})),t.cachedVariants?t.cachedVariants:Ma(t)?st(t,{starts:t.starts?st(t.starts):null}):Object.isFrozen(t)?st(t):t}var Gd="11.9.0";class Wd extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const ir=wa,ms=st,_s=Symbol("nomatch"),Vd=7,ka=function(t){const e=Object.create(null),n=Object.create(null),r=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:sd};function l(y){return a.noHighlightRe.test(y)}function u(y){let O=y.className+" ";O+=y.parentNode?y.parentNode.className:"";const V=a.languageDetectRe.exec(O);if(V){const oe=U(V[1]);return oe||(bs(s.replace("{}",V[1])),bs("Falling back to no-highlight mode for this block.",y)),oe?V[1]:"no-highlight"}return O.split(/\s+/).find(oe=>l(oe)||U(oe))}function c(y,O,V){let oe="",le="";typeof O=="object"?(oe=y,V=O.ignoreIllegals,le=O.language):(Nt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Nt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),le=y,oe=O),V===void 0&&(V=!0);const ue={code:oe,language:le};se("before:highlight",ue);const ve=ue.result?ue.result:h(ue.language,ue.code,V);return ve.code=ue.code,se("after:highlight",ve),ve}function h(y,O,V,oe){const le=Object.create(null);function ue(T,L){return T.keywords[L]}function ve(){if(!_.keywords){S.addText(P);return}let T=0;_.keywordPatternRe.lastIndex=0;let L=_.keywordPatternRe.exec(P),G="";for(;L;){G+=P.substring(T,L.index);const te=A.case_insensitive?L[0].toLowerCase():L[0],me=ue(_,te);if(me){const[Oe,Ye]=me;if(S.addText(G),G="",le[te]=(le[te]||0)+1,le[te]<=Vd&&($+=Ye),Oe.startsWith("_"))G+=L[0];else{const St=A.classNameAliases[Oe]||Oe;D(L[0],St)}}else G+=L[0];T=_.keywordPatternRe.lastIndex,L=_.keywordPatternRe.exec(P)}G+=P.substring(T),S.addText(G)}function Se(){if(P==="")return;let T=null;if(typeof _.subLanguage=="string"){if(!e[_.subLanguage]){S.addText(P);return}T=h(_.subLanguage,P,!0,q[_.subLanguage]),q[_.subLanguage]=T._top}else T=f(P,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&($+=T.relevance),S.__addSublanguage(T._emitter,T.language)}function E(){_.subLanguage!=null?Se():ve(),P=""}function D(T,L){T!==""&&(S.startScope(L),S.addText(T),S.endScope())}function C(T,L){let G=1;const te=L.length-1;for(;G<=te;){if(!T._emit[G]){G++;continue}const me=A.classNameAliases[T[G]]||T[G],Oe=L[G];me?D(Oe,me):(P=Oe,ve(),P=""),G++}}function B(T,L){return T.scope&&typeof T.scope=="string"&&S.openNode(A.classNameAliases[T.scope]||T.scope),T.beginScope&&(T.beginScope._wrap?(D(P,A.classNameAliases[T.beginScope._wrap]||T.beginScope._wrap),P=""):T.beginScope._multi&&(C(T.beginScope,L),P="")),_=Object.create(T,{parent:{value:_}}),_}function X(T,L,G){let te=cd(T.endRe,G);if(te){if(T["on:end"]){const me=new hs(T);T["on:end"](L,me),me.isMatchIgnored&&(te=!1)}if(te){for(;T.endsParent&&T.parent;)T=T.parent;return T}}if(T.endsWithParent)return X(T.parent,L,G)}function ce(T){return _.matcher.regexIndex===0?(P+=T[0],1):(J=!0,0)}function W(T){const L=T[0],G=T.rule,te=new hs(G),me=[G.__beforeBegin,G["on:begin"]];for(const Oe of me)if(Oe&&(Oe(T,te),te.isMatchIgnored))return ce(L);return G.skip?P+=L:(G.excludeBegin&&(P+=L),E(),!G.returnBegin&&!G.excludeBegin&&(P=L)),B(G,T),G.returnBegin?0:L.length}function d(T){const L=T[0],G=O.substring(T.index),te=X(_,T,G);if(!te)return _s;const me=_;_.endScope&&_.endScope._wrap?(E(),D(L,_.endScope._wrap)):_.endScope&&_.endScope._multi?(E(),C(_.endScope,T)):me.skip?P+=L:(me.returnEnd||me.excludeEnd||(P+=L),E(),me.excludeEnd&&(P=L));do _.scope&&S.closeNode(),!_.skip&&!_.subLanguage&&($+=_.relevance),_=_.parent;while(_!==te.parent);return te.starts&&B(te.starts,T),me.returnEnd?0:L.length}function g(){const T=[];for(let L=_;L!==A;L=L.parent)L.scope&&T.unshift(L.scope);T.forEach(L=>S.openNode(L))}let b={};function w(T,L){const G=L&&L[0];if(P+=T,G==null)return E(),0;if(b.type==="begin"&&L.type==="end"&&b.index===L.index&&G===""){if(P+=O.slice(L.index,L.index+1),!i){const te=new Error(`0 width match regex (${y})`);throw te.languageName=y,te.badRule=b.rule,te}return 1}if(b=L,L.type==="begin")return W(L);if(L.type==="illegal"&&!V){const te=new Error('Illegal lexeme "'+G+'" for mode "'+(_.scope||"<unnamed>")+'"');throw te.mode=_,te}else if(L.type==="end"){const te=d(L);if(te!==_s)return te}if(L.type==="illegal"&&G==="")return 1;if(Y>1e5&&Y>L.index*3)throw new Error("potential infinite loop, way more iterations than matches");return P+=G,G.length}const A=U(y);if(!A)throw _t(s.replace("{}",y)),new Error('Unknown language: "'+y+'"');const I=$d(A);let z="",_=oe||I;const q={},S=new a.__emitter(a);g();let P="",$=0,K=0,Y=0,J=!1;try{if(A.__emitTokens)A.__emitTokens(O,S);else{for(_.matcher.considerAll();;){Y++,J?J=!1:_.matcher.considerAll(),_.matcher.lastIndex=K;const T=_.matcher.exec(O);if(!T)break;const L=O.substring(K,T.index),G=w(L,T);K=T.index+G}w(O.substring(K))}return S.finalize(),z=S.toHTML(),{language:y,value:z,relevance:$,illegal:!1,_emitter:S,_top:_}}catch(T){if(T.message&&T.message.includes("Illegal"))return{language:y,value:ir(O),illegal:!0,relevance:0,_illegalBy:{message:T.message,index:K,context:O.slice(K-100,K+100),mode:T.mode,resultSoFar:z},_emitter:S};if(i)return{language:y,value:ir(O),illegal:!1,relevance:0,errorRaised:T,_emitter:S,_top:_};throw T}}function p(y){const O={value:ir(y),illegal:!1,relevance:0,_top:o,_emitter:new a.__emitter(a)};return O._emitter.addText(y),O}function f(y,O){O=O||a.languages||Object.keys(e);const V=p(y),oe=O.filter(U).filter(ne).map(E=>h(E,y,!1));oe.unshift(V);const le=oe.sort((E,D)=>{if(E.relevance!==D.relevance)return D.relevance-E.relevance;if(E.language&&D.language){if(U(E.language).supersetOf===D.language)return 1;if(U(D.language).supersetOf===E.language)return-1}return 0}),[ue,ve]=le,Se=ue;return Se.secondBest=ve,Se}function m(y,O,V){const oe=O&&n[O]||V;y.classList.add("hljs"),y.classList.add(`language-${oe}`)}function v(y){let O=null;const V=u(y);if(l(V))return;if(se("before:highlightElement",{el:y,language:V}),y.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",y);return}if(y.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(y)),a.throwUnescapedHTML))throw new Wd("One of your code blocks includes unescaped HTML.",y.innerHTML);O=y;const oe=O.textContent,le=V?c(oe,{language:V,ignoreIllegals:!0}):f(oe);y.innerHTML=le.value,y.dataset.highlighted="yes",m(y,V,le.language),y.result={language:le.language,re:le.relevance,relevance:le.relevance},le.secondBest&&(y.secondBest={language:le.secondBest.language,relevance:le.secondBest.relevance}),se("after:highlightElement",{el:y,result:le,text:oe})}function N(y){a=ms(a,y)}const x=()=>{M(),Nt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function R(){M(),Nt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let H=!1;function M(){if(document.readyState==="loading"){H=!0;return}document.querySelectorAll(a.cssSelector).forEach(v)}function F(){H&&M()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",F,!1);function Q(y,O){let V=null;try{V=O(t)}catch(oe){if(_t("Language definition for '{}' could not be registered.".replace("{}",y)),i)_t(oe);else throw oe;V=o}V.name||(V.name=y),e[y]=V,V.rawDefinition=O.bind(null,t),V.aliases&&re(V.aliases,{languageName:y})}function j(y){delete e[y];for(const O of Object.keys(n))n[O]===y&&delete n[O]}function k(){return Object.keys(e)}function U(y){return y=(y||"").toLowerCase(),e[y]||e[n[y]]}function re(y,{languageName:O}){typeof y=="string"&&(y=[y]),y.forEach(V=>{n[V.toLowerCase()]=O})}function ne(y){const O=U(y);return O&&!O.disableAutodetect}function pe(y){y["before:highlightBlock"]&&!y["before:highlightElement"]&&(y["before:highlightElement"]=O=>{y["before:highlightBlock"](Object.assign({block:O.el},O))}),y["after:highlightBlock"]&&!y["after:highlightElement"]&&(y["after:highlightElement"]=O=>{y["after:highlightBlock"](Object.assign({block:O.el},O))})}function ye(y){pe(y),r.push(y)}function ge(y){const O=r.indexOf(y);O!==-1&&r.splice(O,1)}function se(y,O){const V=y;r.forEach(function(oe){oe[V]&&oe[V](O)})}function Z(y){return Nt("10.7.0","highlightBlock will be removed entirely in v12.0"),Nt("10.7.0","Please use highlightElement now."),v(y)}Object.assign(t,{highlight:c,highlightAuto:f,highlightAll:M,highlightElement:v,highlightBlock:Z,configure:N,initHighlighting:x,initHighlightingOnLoad:R,registerLanguage:Q,unregisterLanguage:j,listLanguages:k,getLanguage:U,registerAliases:re,autoDetection:ne,inherit:ms,addPlugin:ye,removePlugin:ge}),t.debugMode=function(){i=!1},t.safeMode=function(){i=!0},t.versionString=Gd,t.regex={concat:wt,lookahead:Sa,either:Ri,optional:ad,anyNumberOfTimes:od};for(const y in En)typeof En[y]=="object"&&va(En[y]);return Object.assign(t,En),t},Pt=ka({});Pt.newInstance=()=>ka({});var La=Pt;Pt.HighlightJS=Pt;Pt.default=Pt;const xn=td(La);var Es=wi({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(t){var e=yt(t.language);Lt(function(){return t.language},function(i){e.value=i});var n=Ne(function(){return t.autodetect||!e.value}),r=Ne(function(){return!n.value&&!xn.getLanguage(e.value)});return{className:Ne(function(){return r.value?"":"hljs "+e.value}),highlightedCode:Ne(function(){var i;if(r.value)return console.warn('The language "'+e.value+'" you specified could not be found.'),t.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(n.value){var s=xn.highlightAuto(t.code);return e.value=(i=s.language)!==null&&i!==void 0?i:"",s.value}return(s=xn.highlight(t.code,{language:e.value,ignoreIllegals:t.ignoreIllegals})).value})}},render:function(){return Mn("pre",{},[Mn("code",{class:this.className,innerHTML:this.highlightedCode})])}}),Yd={install:function(t){t.component("highlightjs",Es)},component:Es},sr,ys;function Zd(){if(ys)return sr;ys=1;function t(e){const n=e.regex,r=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=e.inherit(o,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"string"}),u=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,u,l,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,a,u,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[u]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(r,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}return sr=t,sr}var or,vs;function Xd(){if(vs)return or;vs=1;function t(e){const n=e.regex,r={},i={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[r]}]};Object.assign(r,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},i]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,s]};s.contains.push(a);const l={match:/\\"/},u={className:"string",begin:/'/,end:/'/},c={match:/\\'/},h={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,r]},p=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],f=e.SHEBANG({binary:`(${p.join("|")})`,relevance:10}),m={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},v=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],N=["true","false"],x={match:/(\/[a-z._-]+)+/},R=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],H=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],M=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],F=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:v,literal:N,built_in:[...R,...H,"set","shopt",...M,...F]},contains:[f,e.SHEBANG(),m,h,e.HASH_COMMENT_MODE,o,x,a,l,u,c,r]}}return or=t,or}var ar,ws;function Qd(){if(ws)return ar;ws=1;function t(e){const n=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",o="<[^<>]+>",a="("+i+"|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional(o)+")",l={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},u="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+u+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},p={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},f={className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0},m=n.optional(s)+e.IDENT_RE+"\\s*\\(",x={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},R=[p,l,r,e.C_BLOCK_COMMENT_MODE,h,c],H={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:x,contains:R.concat([{begin:/\(/,end:/\)/,keywords:x,contains:R.concat(["self"]),relevance:0}]),relevance:0},M={begin:"("+a+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:x,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:x,relevance:0},{begin:m,returnBegin:!0,contains:[e.inherit(f,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,c,h,l,{begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,c,h,l]}]},l,r,e.C_BLOCK_COMMENT_MODE,p]};return{name:"C",aliases:["h"],keywords:x,disableAutodetect:!0,illegal:"</",contains:[].concat(H,M,R,[p,{begin:e.IDENT_RE+"::",keywords:x},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:p,strings:c,keywords:x}}}return ar=t,ar}var lr,Ss;function Jd(){if(Ss)return lr;Ss=1;function t(e){const n=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",o="<[^<>]+>",a="(?!struct)("+i+"|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional(o)+")",l={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},u="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+u+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},p={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},f={className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0},m=n.optional(s)+e.IDENT_RE+"\\s*\\(",v=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],N=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],x=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],R=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],F={type:N,keyword:v,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:x},Q={className:"function.dispatch",relevance:0,keywords:{_hint:R},begin:n.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,n.lookahead(/(<[^<>]+>|)\s*\(/))},j=[Q,p,l,r,e.C_BLOCK_COMMENT_MODE,h,c],k={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:F,contains:j.concat([{begin:/\(/,end:/\)/,keywords:F,contains:j.concat(["self"]),relevance:0}]),relevance:0},U={className:"function",begin:"("+a+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:F,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:F,relevance:0},{begin:m,returnBegin:!0,contains:[f],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[c,h]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:F,relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,c,h,l,{begin:/\(/,end:/\)/,keywords:F,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,c,h,l]}]},l,r,e.C_BLOCK_COMMENT_MODE,p]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:F,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(k,U,Q,j,[p,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:F,contains:["self",l]},{begin:e.IDENT_RE+"::",keywords:F},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}return lr=t,lr}var cr,As;function jd(){if(As)return cr;As=1;function t(e){const n=["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],r=["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"],i=["default","false","null","true"],s=["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"],o=["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"],a={keyword:s.concat(o),built_in:n,literal:i},l=e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),u={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},c={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},h=e.inherit(c,{illegal:/\n/}),p={className:"subst",begin:/\{/,end:/\}/,keywords:a},f=e.inherit(p,{illegal:/\n/}),m={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},e.BACKSLASH_ESCAPE,f]},v={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},p]},N=e.inherit(v,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},f]});p.contains=[v,m,c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,e.C_BLOCK_COMMENT_MODE],f.contains=[N,m,h,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const x={variants:[v,m,c,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},R={begin:"<",end:">",contains:[{beginKeywords:"in out"},l]},H=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",M={begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:a,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},x,u,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},l,R,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[l,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[l,R,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+H+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:a,contains:[{beginKeywords:r.join(" "),relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[e.TITLE_MODE,R],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,relevance:0,contains:[x,u,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},M]}}return cr=t,cr}var ur,xs;function eh(){if(xs)return ur;xs=1;const t=a=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:a.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:a.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],n=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],s=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function o(a){const l=a.regex,u=t(a),c={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},h="and or not only",p=/@-?\w[\w]*(-\w+)*/,f="[a-zA-Z-][a-zA-Z0-9_-]*",m=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[u.BLOCK_COMMENT,c,u.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+f,relevance:0},u.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+r.join("|")+")"},{begin:":(:)?("+i.join("|")+")"}]},u.CSS_VARIABLE,{className:"attribute",begin:"\\b("+s.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[u.BLOCK_COMMENT,u.HEXCOLOR,u.IMPORTANT,u.CSS_NUMBER_MODE,...m,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...m,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},u.FUNCTION_DISPATCH]},{begin:l.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:p},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:h,attribute:n.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...m,u.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}return ur=o,ur}var dr,Ns;function th(){if(Ns)return dr;Ns=1;function t(e){const n=e.regex,r={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},i={begin:"^[-\\*]{3,}",end:"$"},s={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},o={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},a={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},l=/[A-Za-z][A-Za-z0-9+.-]*/,u={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:n.concat(/\[.+?\]\(/,l,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},c={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},h={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},p=e.inherit(c,{contains:[]}),f=e.inherit(h,{contains:[]});c.contains.push(f),h.contains.push(p);let m=[r,u];return[c,h,p,f].forEach(x=>{x.contains=x.contains.concat(m)}),m=m.concat(c,h),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:m},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:m}]}]},r,o,c,h,{className:"quote",begin:"^>\\s+",contains:m,end:"$"},s,i,u,a]}}return dr=t,dr}var hr,Ts;function nh(){if(Ts)return hr;Ts=1;function t(e){const n=e.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:n.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:n.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}return hr=t,hr}var pr,Rs;function rh(){if(Rs)return pr;Rs=1;function t(e){const n=e.regex,r="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",i=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),s=n.concat(i,/(::\w+)*/),a={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},l={className:"doctag",begin:"@[A-Za-z]+"},u={begin:"#<",end:">"},c=[e.COMMENT("#","$",{contains:[l]}),e.COMMENT("^=begin","^=end",{contains:[l],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],h={className:"subst",begin:/#\{/,end:/\}/,keywords:a},p={className:"string",contains:[e.BACKSLASH_ESCAPE,h],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,h]})]}]},f="[1-9](_?[0-9])*|0",m="[0-9](_?[0-9])*",v={className:"number",relevance:0,variants:[{begin:`\\b(${f})(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},N={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:a}]},j=[p,{variants:[{match:[/class\s+/,s,/\s+<\s+/,s]},{match:[/\b(class|module)\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:a},{match:[/(include|extend)\s+/,s],scope:{2:"title.class"},keywords:a},{relevance:0,match:[s,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:i,scope:"title.class"},{match:[/def/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[N]},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[p,{begin:r}],relevance:0},v,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:a},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,h],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(u,c),relevance:0}].concat(u,c);h.contains=j,N.contains=j;const k="[>?]>",U="[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]",re="(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",ne=[{begin:/^\s*=>/,starts:{end:"$",contains:j}},{className:"meta.prompt",begin:"^("+k+"|"+U+"|"+re+")(?=[ ])",starts:{end:"$",keywords:a,contains:j}}];return c.unshift(u),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:a,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(ne).concat(c).concat(j)}}return pr=t,pr}var gr,Os;function ih(){if(Os)return gr;Os=1;function t(e){const o={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:o,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:o,illegal:/["']/}]}]}}return gr=t,gr}var fr,Cs;function sh(){if(Cs)return fr;Cs=1;function t(e){const n=e.regex,r=/[_A-Za-z][_0-9A-Za-z]*/;return{name:"GraphQL",aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],literal:["true","false","null"]},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{scope:"symbol",begin:n.concat(r,n.lookahead(/\s*:/)),relevance:0}],illegal:[/[;<']/,/BEGIN/]}}return fr=t,fr}var br,Ms;function oh(){if(Ms)return br;Ms=1;function t(e){const n=e.regex,r={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},i=e.COMMENT();i.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const s={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},o={className:"literal",begin:/\bon|off|true|false|yes|no\b/},a={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[i,o,s,a,r,"self"],relevance:0},u=/[A-Za-z0-9_-]+/,c=/"(\\"|[^"])*"/,h=/'[^']*'/,p=n.either(u,c,h),f=n.concat(p,"(\\s*\\.\\s*",p,")*",n.lookahead(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[i,{className:"section",begin:/\[+/,end:/\]+/},{begin:f,className:"attr",starts:{end:/$/,contains:[i,l,o,s,a,r]}}]}}return br=t,br}var mr,ks;function ah(){if(ks)return mr;ks=1;var t="[0-9](_*[0-9])*",e=`\\.(${t})`,n="[0-9a-fA-F](_*[0-9a-fA-F])*",r={className:"number",variants:[{begin:`(\\b(${t})((${e})|\\.)?|(${e}))[eE][+-]?(${t})[fFdD]?\\b`},{begin:`\\b(${t})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${e})[fFdD]?\\b`},{begin:`\\b(${t})[fFdD]\\b`},{begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${t})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function i(o,a,l){return l===-1?"":o.replace(a,u=>i(o,a,l-1))}function s(o){const a=o.regex,l="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",u=l+i("(?:<"+l+"~~~(?:\\s*,\\s*"+l+"~~~)*>)?",/~~~/g,2),m={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},v={className:"meta",begin:"@"+l,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},N={className:"params",begin:/\(/,end:/\)/,keywords:m,relevance:0,contains:[o.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:m,illegal:/<\/|#/,contains:[o.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[o.BACKSLASH_ESCAPE]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,l],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[a.concat(/(?!else)/,l),/\s+/,l,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,l],className:{1:"keyword",3:"title.class"},contains:[N,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+u+"\\s+)",o.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:m,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:m,relevance:0,contains:[v,o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,r,o.C_BLOCK_COMMENT_MODE]},o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE]},r,v]}}return mr=s,mr}var _r,Ls;function lh(){if(Ls)return _r;Ls=1;const t="[A-Za-z$_][0-9A-Za-z$_]*",e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],r=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],i=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],s=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],o=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],a=[].concat(s,r,i);function l(u){const c=u.regex,h=(C,{after:B})=>{const X="</"+C[0].slice(1);return C.input.indexOf(X,B)!==-1},p=t,f={begin:"<>",end:"</>"},m=/<[A-Za-z0-9\\._:-]+\s*\/>/,v={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,B)=>{const X=C[0].length+C.index,ce=C.input[X];if(ce==="<"||ce===","){B.ignoreMatch();return}ce===">"&&(h(C,{after:X})||B.ignoreMatch());let W;const d=C.input.substring(X);if(W=d.match(/^\s*=/)){B.ignoreMatch();return}if((W=d.match(/^\s+extends\s+/))&&W.index===0){B.ignoreMatch();return}}},N={$pattern:t,keyword:e,literal:n,built_in:a,"variable.language":o},x="[0-9](_?[0-9])*",R=`\\.(${x})`,H="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",M={className:"number",variants:[{begin:`(\\b(${H})((${R})|\\.)?|(${R}))[eE][+-]?(${x})\\b`},{begin:`\\b(${H})\\b((${R})\\b|\\.)?|(${R})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},F={className:"subst",begin:"\\$\\{",end:"\\}",keywords:N,contains:[]},Q={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,F],subLanguage:"xml"}},j={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,F],subLanguage:"css"}},k={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[u.BACKSLASH_ESCAPE,F],subLanguage:"graphql"}},U={className:"string",begin:"`",end:"`",contains:[u.BACKSLASH_ESCAPE,F]},ne={className:"comment",variants:[u.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:p+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),u.C_BLOCK_COMMENT_MODE,u.C_LINE_COMMENT_MODE]},pe=[u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,Q,j,k,U,{match:/\$\d+/},M];F.contains=pe.concat({begin:/\{/,end:/\}/,keywords:N,contains:["self"].concat(pe)});const ye=[].concat(ne,F.contains),ge=ye.concat([{begin:/\(/,end:/\)/,keywords:N,contains:["self"].concat(ye)}]),se={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:N,contains:ge},Z={variants:[{match:[/class/,/\s+/,p,/\s+/,/extends/,/\s+/,c.concat(p,"(",c.concat(/\./,p),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,p],scope:{1:"keyword",3:"title.class"}}]},y={relevance:0,match:c.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...r,...i]}},O={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},V={variants:[{match:[/function/,/\s+/,p,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[se],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function le(C){return c.concat("(?!",C.join("|"),")")}const ue={match:c.concat(/\b/,le([...s,"super","import"]),p,c.lookahead(/\(/)),className:"title.function",relevance:0},ve={begin:c.concat(/\./,c.lookahead(c.concat(p,/(?![0-9A-Za-z$_(])/))),end:p,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Se={match:[/get|set/,/\s+/,p,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},se]},E="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+u.UNDERSCORE_IDENT_RE+")\\s*=>",D={match:[/const|var|let/,/\s+/,p,/\s*/,/=\s*/,/(async\s*)?/,c.lookahead(E)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[se]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:N,exports:{PARAMS_CONTAINS:ge,CLASS_REFERENCE:y},illegal:/#(?![$_A-z])/,contains:[u.SHEBANG({label:"shebang",binary:"node",relevance:5}),O,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,Q,j,k,U,ne,{match:/\$\d+/},M,y,{className:"attr",begin:p+c.lookahead(":"),relevance:0},D,{begin:"("+u.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[ne,u.REGEXP_MODE,{className:"function",begin:E,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:u.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:N,contains:ge}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:f.begin,end:f.end},{match:m},{begin:v.begin,"on:begin":v.isTrulyOpeningTag,end:v.end}],subLanguage:"xml",contains:[{begin:v.begin,end:v.end,skip:!0,contains:["self"]}]}]},V,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+u.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[se,u.inherit(u.TITLE_MODE,{begin:p,className:"title.function"})]},{match:/\.\.\./,relevance:0},ve,{match:"\\$"+p,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[se]},ue,oe,Z,Se,{match:/\$[(.]/}]}}return _r=l,_r}var Er,Is;function ch(){if(Is)return Er;Is=1;function t(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},r={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],s={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",keywords:{literal:i},contains:[n,r,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}return Er=t,Er}var yr,Ds;function uh(){if(Ds)return yr;Ds=1;var t="[0-9](_*[0-9])*",e=`\\.(${t})`,n="[0-9a-fA-F](_*[0-9a-fA-F])*",r={className:"number",variants:[{begin:`(\\b(${t})((${e})|\\.)?|(${e}))[eE][+-]?(${t})[fFdD]?\\b`},{begin:`\\b(${t})((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${e})[fFdD]?\\b`},{begin:`\\b(${t})[fFdD]\\b`},{begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${t})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function i(s){const o={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},l={className:"symbol",begin:s.UNDERSCORE_IDENT_RE+"@"},u={className:"subst",begin:/\$\{/,end:/\}/,contains:[s.C_NUMBER_MODE]},c={className:"variable",begin:"\\$"+s.UNDERSCORE_IDENT_RE},h={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[c,u]},{begin:"'",end:"'",illegal:/\n/,contains:[s.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[s.BACKSLASH_ESCAPE,c,u]}]};u.contains.push(h);const p={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+s.UNDERSCORE_IDENT_RE+")?"},f={className:"meta",begin:"@"+s.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[s.inherit(h,{className:"string"}),"self"]}]},m=r,v=s.COMMENT("/\\*","\\*/",{contains:[s.C_BLOCK_COMMENT_MODE]}),N={variants:[{className:"type",begin:s.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},x=N;return x.variants[1].contains=[N],N.variants[1].contains=[x],{name:"Kotlin",aliases:["kt","kts"],keywords:o,contains:[s.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),s.C_LINE_COMMENT_MODE,v,a,l,p,f,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:o,relevance:5,contains:[{begin:s.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[s.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:o,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[N,s.C_LINE_COMMENT_MODE,v],relevance:0},s.C_LINE_COMMENT_MODE,v,p,f,h,s.C_NUMBER_MODE]},v]},{begin:[/class|interface|trait/,/\s+/,s.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},s.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},p,f]},h,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},m]}}return yr=i,yr}var vr,qs;function dh(){if(qs)return vr;qs=1;const t=l=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:l.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:l.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],n=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],s=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse(),o=r.concat(i);function a(l){const u=t(l),c=o,h="and or not only",p="[\\w-]+",f="("+p+"|@\\{"+p+"\\})",m=[],v=[],N=function(ne){return{className:"string",begin:"~?"+ne+".*?"+ne}},x=function(ne,pe,ye){return{className:ne,begin:pe,relevance:ye}},R={$pattern:/[a-z-]+/,keyword:h,attribute:n.join(" ")},H={begin:"\\(",end:"\\)",contains:v,keywords:R,relevance:0};v.push(l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE,N("'"),N('"'),u.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},u.HEXCOLOR,H,x("variable","@@?"+p,10),x("variable","@\\{"+p+"\\}"),x("built_in","~?`[^`]*?`"),{className:"attribute",begin:p+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0},u.IMPORTANT,{beginKeywords:"and not"},u.FUNCTION_DISPATCH);const M=v.concat({begin:/\{/,end:/\}/,contains:m}),F={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(v)},Q={begin:f+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/},u.CSS_VARIABLE,{className:"attribute",begin:"\\b("+s.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:v}}]},j={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",keywords:R,returnEnd:!0,contains:v,relevance:0}},k={className:"variable",variants:[{begin:"@"+p+"\\s*:",relevance:15},{begin:"@"+p}],starts:{end:"[;}]",returnEnd:!0,contains:M}},U={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:f,end:/\{/}],returnBegin:!0,returnEnd:!0,illegal:`[<='$"]`,relevance:0,contains:[l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE,F,x("keyword","all\\b"),x("variable","@\\{"+p+"\\}"),{begin:"\\b("+e.join("|")+")\\b",className:"selector-tag"},u.CSS_NUMBER_MODE,x("selector-tag",f,0),x("selector-id","#"+f),x("selector-class","\\."+f,0),x("selector-tag","&",0),u.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",begin:":("+r.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+i.join("|")+")"},{begin:/\(/,end:/\)/,relevance:0,contains:M},{begin:"!important"},u.FUNCTION_DISPATCH]},re={begin:p+`:(:)?(${c.join("|")})`,returnBegin:!0,contains:[U]};return m.push(l.C_LINE_COMMENT_MODE,l.C_BLOCK_COMMENT_MODE,j,k,re,Q,U,F,u.FUNCTION_DISPATCH),{name:"Less",case_insensitive:!0,illegal:`[=>'/<($"]`,contains:m}}return vr=a,vr}var wr,Ps;function hh(){if(Ps)return wr;Ps=1;function t(e){const n="\\[=*\\[",r="\\]=*\\]",i={begin:n,end:r,contains:["self"]},s=[e.COMMENT("--(?!"+n+")","$"),e.COMMENT("--"+n,r,{contains:[i],relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:s.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:s}].concat(s)},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:n,end:r,contains:[i],relevance:5}])}}return wr=t,wr}var Sr,Bs;function ph(){if(Bs)return Sr;Bs=1;function t(e){const n={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},i={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[n]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},o={className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},a={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[e.HASH_COMMENT_MODE,n,r,i,s,o,a]}}return Sr=t,Sr}var Ar,zs;function gh(){if(zs)return Ar;zs=1;function t(e){const n=e.regex,r=["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"],i=/[dualxmsipngr]{0,12}/,s={$pattern:/[\w.]+/,keyword:r.join(" ")},o={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:s},a={begin:/->\{/,end:/\}/},l={variants:[{begin:/\$\d/},{begin:n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@][^\s\w{]/,relevance:0}]},u=[e.BACKSLASH_ESCAPE,o,l],c=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],h=(m,v,N="\\1")=>{const x=N==="\\1"?N:n.concat(N,v);return n.concat(n.concat("(?:",m,")"),v,/(?:\\.|[^\\\/])*?/,x,/(?:\\.|[^\\\/])*?/,N,i)},p=(m,v,N)=>n.concat(n.concat("(?:",m,")"),v,/(?:\\.|[^\\\/])*?/,N,i),f=[l,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),a,{className:"string",contains:u,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:h("s|tr|y",n.either(...c,{capture:!0}))},{begin:h("s|tr|y","\\(","\\)")},{begin:h("s|tr|y","\\[","\\]")},{begin:h("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:p("(?:m|qr)?",/\//,/\//)},{begin:p("m|qr",n.either(...c,{capture:!0}),/\1/)},{begin:p("m|qr",/\(/,/\)/)},{begin:p("m|qr",/\[/,/\]/)},{begin:p("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return o.contains=f,a.contains=f,{name:"Perl",aliases:["pl","pm"],keywords:s,contains:f}}return Ar=t,Ar}var xr,Hs;function fh(){if(Hs)return xr;Hs=1;function t(e){const n={className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},r=/[a-zA-Z@][a-zA-Z0-9_]*/,l={"variable.language":["this","super"],$pattern:r,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},u={$pattern:r,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:l,illegal:"</",contains:[n,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+u.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:u,contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}return xr=t,xr}var Nr,Us;function bh(){if(Us)return Nr;Us=1;function t(e){const n=e.regex,r=/(?![A-Za-z0-9])(?![$])/,i=n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,r),s=n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,r),o={scope:"variable",match:"\\$+"+i},a={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},l={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},u=e.inherit(e.APOS_STRING_MODE,{illegal:null}),c=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(l)}),h={begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(l),"on:begin":(ge,se)=>{se.data._beginMatch=ge[1]||ge[2]},"on:end":(ge,se)=>{se.data._beginMatch!==ge[1]&&se.ignoreMatch()}},p=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/}),f=`[ 	
]`,m={scope:"string",variants:[c,u,h,p]},v={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},N=["false","null","true"],x=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],R=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],M={keyword:x,literal:(ge=>{const se=[];return ge.forEach(Z=>{se.push(Z),Z.toLowerCase()===Z?se.push(Z.toUpperCase()):se.push(Z.toLowerCase())}),se})(N),built_in:R},F=ge=>ge.map(se=>se.replace(/\|\d+$/,"")),Q={variants:[{match:[/new/,n.concat(f,"+"),n.concat("(?!",F(R).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},j=n.concat(i,"\\b(?!\\()"),k={variants:[{match:[n.concat(/::/,n.lookahead(/(?!class\b)/)),j],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,n.concat(/::/,n.lookahead(/(?!class\b)/)),j],scope:{1:"title.class",3:"variable.constant"}},{match:[s,n.concat("::",n.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},U={scope:"attr",match:n.concat(i,n.lookahead(":"),n.lookahead(/(?!::)/))},re={relevance:0,begin:/\(/,end:/\)/,keywords:M,contains:[U,o,k,e.C_BLOCK_COMMENT_MODE,m,v,Q]},ne={relevance:0,match:[/\b/,n.concat("(?!fn\\b|function\\b|",F(x).join("\\b|"),"|",F(R).join("\\b|"),"\\b)"),i,n.concat(f,"*"),n.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[re]};re.contains.push(ne);const pe=[U,k,e.C_BLOCK_COMMENT_MODE,m,v,Q],ye={begin:n.concat(/#\[\s*/,s),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:N,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:N,keyword:["new","array"]},contains:["self",...pe]},...pe,{scope:"meta",match:s}]};return{case_insensitive:!1,keywords:M,contains:[ye,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},a,{scope:"variable.language",match:/\$this\b/},o,ne,k,{match:[/const/,/\s/,i],scope:{1:"keyword",3:"variable.constant"}},Q,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:M,contains:["self",o,k,e.C_BLOCK_COMMENT_MODE,m,v]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},m,v]}}return Nr=t,Nr}var Tr,Fs;function mh(){if(Fs)return Tr;Fs=1;function t(e){return{name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]}]}}return Tr=t,Tr}var Rr,$s;function _h(){if($s)return Rr;$s=1;function t(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}return Rr=t,Rr}var Or,Ks;function Eh(){if(Ks)return Or;Ks=1;function t(e){const n=e.regex,r=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),i=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],l={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},u={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:l,illegal:/#/},h={begin:/\{\{/,relevance:0},p={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u,h,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u,h,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,h,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,h,c]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},f="[0-9](_?[0-9])*",m=`(\\b(${f}))?\\.(${f})|\\b(${f})\\.`,v=`\\b|${i.join("|")}`,N={className:"number",relevance:0,variants:[{begin:`(\\b(${f})|(${m}))[eE][+-]?(${f})[jJ]?(?=${v})`},{begin:`(${m})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${v})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${v})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`},{begin:`\\b(${f})[jJ](?=${v})`}]},x={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:l,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},R={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:["self",u,N,p,e.HASH_COMMENT_MODE]}]};return c.contains=[p,N,u],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:l,illegal:/(<\/|\?)|=>/,contains:[u,N,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},p,x,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[R]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[N,R,p]}]}}return Or=t,Or}var Cr,Gs;function yh(){if(Gs)return Cr;Gs=1;function t(e){return{aliases:["pycon"],contains:[{className:"meta.prompt",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}}return Cr=t,Cr}var Mr,Ws;function vh(){if(Ws)return Mr;Ws=1;function t(e){const n=e.regex,r=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,i=n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,o=n.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:r,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:r},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[s,i]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,i]},{scope:{1:"punctuation",2:"number"},match:[o,i]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,i]}]},{scope:{3:"operator"},match:[r,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:o},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}return Mr=t,Mr}var kr,Vs;function wh(){if(Vs)return kr;Vs=1;function t(e){const n=e.regex,r={className:"title.function.invoke",relevance:0,begin:n.concat(/\b/,/(?!let|for|while|if|else|match\b)/,e.IDENT_RE,n.lookahead(/\s*\(/))},i="([ui](8|16|32|64|128|size)|f(32|64))?",s=["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],o=["true","false","Some","None","Ok","Err"],a=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],l=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:l,keyword:s,literal:o,built_in:a},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{begin:"\\b0b([01_]+)"+i},{begin:"\\b0o([0-7_]+)"+i},{begin:"\\b0x([A-Fa-f0-9_]+)"+i},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+i}],relevance:0},{begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{keyword:"Self",built_in:a,type:l}},{className:"punctuation",begin:"->"},r]}}return kr=t,kr}var Lr,Ys;function Sh(){if(Ys)return Lr;Ys=1;const t=a=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:a.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:a.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],n=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],s=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();function o(a){const l=t(a),u=i,c=r,h="@[a-z-]+",p="and or not only",m={className:"variable",begin:"(\\$"+"[a-zA-Z-][a-zA-Z0-9_-]*"+")\\b",relevance:0};return{name:"SCSS",case_insensitive:!0,illegal:"[=/|']",contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,l.CSS_NUMBER_MODE,{className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",begin:"\\b("+e.join("|")+")\\b",relevance:0},{className:"selector-pseudo",begin:":("+c.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+u.join("|")+")"},m,{begin:/\(/,end:/\)/,contains:[l.CSS_NUMBER_MODE]},l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+s.join("|")+")\\b"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:/:/,end:/[;}{]/,relevance:0,contains:[l.BLOCK_COMMENT,m,l.HEXCOLOR,l.CSS_NUMBER_MODE,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,l.IMPORTANT,l.FUNCTION_DISPATCH]},{begin:"@(page|font-face)",keywords:{$pattern:h,keyword:"@page @font-face"}},{begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,keyword:p,attribute:n.join(" ")},contains:[{begin:h,className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"},m,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,l.HEXCOLOR,l.CSS_NUMBER_MODE]},l.FUNCTION_DISPATCH]}}return Lr=o,Lr}var Ir,Zs;function Ah(){if(Zs)return Ir;Zs=1;function t(e){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}return Ir=t,Ir}var Dr,Xs;function xh(){if(Xs)return Dr;Xs=1;function t(e){const n=e.regex,r=e.COMMENT("--","$"),i={className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},s={begin:/"/,end:/"/,contains:[{begin:/""/}]},o=["true","false","unknown"],a=["double precision","large object","with timezone","without timezone"],l=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],u=["add","asc","collation","desc","final","first","last","view"],c=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],h=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],p=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],f=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],m=h,v=[...c,...u].filter(M=>!h.includes(M)),N={className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},x={className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},R={begin:n.concat(/\b/,n.either(...m),/\s*\(/),relevance:0,keywords:{built_in:m}};function H(M,{exceptions:F,when:Q}={}){const j=Q;return F=F||[],M.map(k=>k.match(/\|\d+$/)||F.includes(k)?k:j(k)?`${k}|0`:k)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:H(v,{when:M=>M.length<3}),literal:o,type:l,built_in:p},contains:[{begin:n.either(...f),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:v.concat(f),literal:o,type:l}},{className:"type",begin:n.either(...a)},R,N,i,s,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,r,x]}}return Dr=t,Dr}var qr,Qs;function Nh(){if(Qs)return qr;Qs=1;function t(k){return k?typeof k=="string"?k:k.source:null}function e(k){return n("(?=",k,")")}function n(...k){return k.map(re=>t(re)).join("")}function r(k){const U=k[k.length-1];return typeof U=="object"&&U.constructor===Object?(k.splice(k.length-1,1),U):{}}function i(...k){return"("+(r(k).capture?"":"?:")+k.map(ne=>t(ne)).join("|")+")"}const s=k=>n(/\b/,k,/\w$/.test(k)?/\b/:/\B/),o=["Protocol","Type"].map(s),a=["init","self"].map(s),l=["Any","Self"],u=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],c=["false","nil","true"],h=["assignment","associativity","higherThan","left","lowerThan","none","right"],p=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],f=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],m=i(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),v=i(m,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),N=n(m,v,"*"),x=i(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),R=i(x,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),H=n(x,R,"*"),M=n(/[A-Z]/,R,"*"),F=["attached","autoclosure",n(/convention\(/,i("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",n(/objc\(/,H,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],Q=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function j(k){const U={match:/\s+/,relevance:0},re=k.COMMENT("/\\*","\\*/",{contains:["self"]}),ne=[k.C_LINE_COMMENT_MODE,re],pe={match:[/\./,i(...o,...a)],className:{2:"keyword"}},ye={match:n(/\./,i(...u)),relevance:0},ge=u.filter(fe=>typeof fe=="string").concat(["_|0"]),se=u.filter(fe=>typeof fe!="string").concat(l).map(s),Z={variants:[{className:"keyword",match:i(...se,...a)}]},y={$pattern:i(/\b\w+/,/#\w+/),keyword:ge.concat(p),literal:c},O=[pe,ye,Z],V={match:n(/\./,i(...f)),relevance:0},oe={className:"built_in",match:n(/\b/,i(...f),/(?=\()/)},le=[V,oe],ue={match:/->/,relevance:0},ve={className:"operator",relevance:0,variants:[{match:N},{match:`\\.(\\.|${v})+`}]},Se=[ue,ve],E="([0-9]_*)+",D="([0-9a-fA-F]_*)+",C={className:"number",relevance:0,variants:[{match:`\\b(${E})(\\.(${E}))?([eE][+-]?(${E}))?\\b`},{match:`\\b0x(${D})(\\.(${D}))?([pP][+-]?(${E}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},B=(fe="")=>({className:"subst",variants:[{match:n(/\\/,fe,/[0\\tnr"']/)},{match:n(/\\/,fe,/u\{[0-9a-fA-F]{1,8}\}/)}]}),X=(fe="")=>({className:"subst",match:n(/\\/,fe,/[\t ]*(?:[\r\n]|\r\n)/)}),ce=(fe="")=>({className:"subst",label:"interpol",begin:n(/\\/,fe,/\(/),end:/\)/}),W=(fe="")=>({begin:n(fe,/"""/),end:n(/"""/,fe),contains:[B(fe),X(fe),ce(fe)]}),d=(fe="")=>({begin:n(fe,/"/),end:n(/"/,fe),contains:[B(fe),ce(fe)]}),g={className:"string",variants:[W(),W("#"),W("##"),W("###"),d(),d("#"),d("##"),d("###")]},b=[k.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[k.BACKSLASH_ESCAPE]}],w={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:b},A=fe=>{const hn=n(fe,/\//),Gt=n(/\//,fe);return{begin:hn,end:Gt,contains:[...b,{scope:"comment",begin:`#(?!.*${Gt})`,end:/$/}]}},I={scope:"regexp",variants:[A("###"),A("##"),A("#"),w]},z={match:n(/`/,H,/`/)},_={className:"variable",match:/\$\d+/},q={className:"variable",match:`\\$${R}+`},S=[z,_,q],P={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:Q,contains:[...Se,C,g]}]}},$={scope:"keyword",match:n(/@/,i(...F))},K={scope:"meta",match:n(/@/,H)},Y=[P,$,K],J={match:e(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:n(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,R,"+")},{className:"type",match:M,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:n(/\s+&\s+/,e(M)),relevance:0}]},T={begin:/</,end:/>/,keywords:y,contains:[...ne,...O,...Y,ue,J]};J.contains.push(T);const L={match:n(H,/\s*:/),keywords:"_|0",relevance:0},G={begin:/\(/,end:/\)/,relevance:0,keywords:y,contains:["self",L,...ne,I,...O,...le,...Se,C,g,...S,...Y,J]},te={begin:/</,end:/>/,keywords:"repeat each",contains:[...ne,J]},me={begin:i(e(n(H,/\s*:/)),e(n(H,/\s+/,H,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:H}]},Oe={begin:/\(/,end:/\)/,keywords:y,contains:[me,...ne,...O,...Se,C,g,...Y,J,G],endsParent:!0,illegal:/["']/},Ye={match:[/(func|macro)/,/\s+/,i(z.match,H,N)],className:{1:"keyword",3:"title.function"},contains:[te,Oe,U],illegal:[/\[/,/%/]},St={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[te,Oe,U],illegal:/\[|%/},Ce={match:[/operator/,/\s+/,N],className:{1:"keyword",3:"title"}},Pe={begin:[/precedencegroup/,/\s+/,M],className:{1:"keyword",3:"title"},contains:[J],keywords:[...h,...c],end:/}/};for(const fe of g.variants){const hn=fe.contains.find(Ga=>Ga.label==="interpol");hn.keywords=y;const Gt=[...O,...le,...Se,C,g,...S];hn.contains=[...Gt,{begin:/\(/,end:/\)/,contains:["self",...Gt]}]}return{name:"Swift",keywords:y,contains:[...ne,Ye,St,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:y,contains:[k.inherit(k.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...O]},Ce,Pe,{beginKeywords:"import",end:/$/,contains:[...ne],relevance:0},I,...O,...le,...Se,C,g,...S,...Y,J,G]}}return qr=j,qr}var Pr,Js;function Th(){if(Js)return Pr;Js=1;function t(e){const n="true false yes no null",r="[\\w#;/?:@&=+$,.~*'()[\\]]+",i={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},s={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},o={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,s]},a=e.inherit(o,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l="[0-9]{4}(-[0-9][0-9]){0,2}",u="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",c="(\\.[0-9]*)?",h="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",p={className:"number",begin:"\\b"+l+u+c+h+"\\b"},f={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},m={begin:/\{/,end:/\}/,contains:[f],illegal:"\\n",relevance:0},v={begin:"\\[",end:"\\]",contains:[f],illegal:"\\n",relevance:0},N=[i,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+r},{className:"type",begin:"!<"+r+">"},{className:"type",begin:"!"+r},{className:"type",begin:"!!"+r},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},p,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},m,v,o],x=[...N];return x.pop(),x.push(a),f.contains=x,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:N}}return Pr=t,Pr}var Br,js;function Rh(){if(js)return Br;js=1;const t="[A-Za-z$_][0-9A-Za-z$_]*",e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],r=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],i=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],s=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],o=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],a=[].concat(s,r,i);function l(c){const h=c.regex,p=(B,{after:X})=>{const ce="</"+B[0].slice(1);return B.input.indexOf(ce,X)!==-1},f=t,m={begin:"<>",end:"</>"},v=/<[A-Za-z0-9\\._:-]+\s*\/>/,N={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,X)=>{const ce=B[0].length+B.index,W=B.input[ce];if(W==="<"||W===","){X.ignoreMatch();return}W===">"&&(p(B,{after:ce})||X.ignoreMatch());let d;const g=B.input.substring(ce);if(d=g.match(/^\s*=/)){X.ignoreMatch();return}if((d=g.match(/^\s+extends\s+/))&&d.index===0){X.ignoreMatch();return}}},x={$pattern:t,keyword:e,literal:n,built_in:a,"variable.language":o},R="[0-9](_?[0-9])*",H=`\\.(${R})`,M="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",F={className:"number",variants:[{begin:`(\\b(${M})((${H})|\\.)?|(${H}))[eE][+-]?(${R})\\b`},{begin:`\\b(${M})\\b((${H})\\b|\\.)?|(${H})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},Q={className:"subst",begin:"\\$\\{",end:"\\}",keywords:x,contains:[]},j={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,Q],subLanguage:"xml"}},k={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,Q],subLanguage:"css"}},U={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,Q],subLanguage:"graphql"}},re={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,Q]},pe={className:"comment",variants:[c.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:f+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]},ye=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,j,k,U,re,{match:/\$\d+/},F];Q.contains=ye.concat({begin:/\{/,end:/\}/,keywords:x,contains:["self"].concat(ye)});const ge=[].concat(pe,Q.contains),se=ge.concat([{begin:/\(/,end:/\)/,keywords:x,contains:["self"].concat(ge)}]),Z={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:x,contains:se},y={variants:[{match:[/class/,/\s+/,f,/\s+/,/extends/,/\s+/,h.concat(f,"(",h.concat(/\./,f),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,f],scope:{1:"keyword",3:"title.class"}}]},O={relevance:0,match:h.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...r,...i]}},V={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},oe={variants:[{match:[/function/,/\s+/,f,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Z],illegal:/%/},le={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function ue(B){return h.concat("(?!",B.join("|"),")")}const ve={match:h.concat(/\b/,ue([...s,"super","import"]),f,h.lookahead(/\(/)),className:"title.function",relevance:0},Se={begin:h.concat(/\./,h.lookahead(h.concat(f,/(?![0-9A-Za-z$_(])/))),end:f,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},E={match:[/get|set/,/\s+/,f,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Z]},D="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,f,/\s*/,/=\s*/,/(async\s*)?/,h.lookahead(D)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Z]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:x,exports:{PARAMS_CONTAINS:se,CLASS_REFERENCE:O},illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",relevance:5}),V,c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,j,k,U,re,pe,{match:/\$\d+/},F,O,{className:"attr",begin:f+h.lookahead(":"),relevance:0},C,{begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[pe,c.REGEXP_MODE,{className:"function",begin:D,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:c.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:x,contains:se}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:m.begin,end:m.end},{match:v},{begin:N.begin,"on:begin":N.isTrulyOpeningTag,end:N.end}],subLanguage:"xml",contains:[{begin:N.begin,end:N.end,skip:!0,contains:["self"]}]}]},oe,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Z,c.inherit(c.TITLE_MODE,{begin:f,className:"title.function"})]},{match:/\.\.\./,relevance:0},Se,{match:"\\$"+f,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Z]},ve,le,y,E,{match:/\$[(.]/}]}}function u(c){const h=l(c),p=t,f=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],m={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[h.exports.CLASS_REFERENCE]},v={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:f},contains:[h.exports.CLASS_REFERENCE]},N={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},x=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],R={$pattern:t,keyword:e.concat(x),literal:n,built_in:a.concat(f),"variable.language":o},H={className:"meta",begin:"@"+p},M=(Q,j,k)=>{const U=Q.contains.findIndex(re=>re.label===j);if(U===-1)throw new Error("can not find mode to replace");Q.contains.splice(U,1,k)};Object.assign(h.keywords,R),h.exports.PARAMS_CONTAINS.push(H),h.contains=h.contains.concat([H,m,v]),M(h,"shebang",c.SHEBANG()),M(h,"use_strict",N);const F=h.contains.find(Q=>Q.label==="func.def");return F.relevance=0,Object.assign(h,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),h}return Br=u,Br}var zr,eo;function Oh(){if(eo)return zr;eo=1;function t(e){const n=e.regex,r={className:"string",begin:/"(""|[^/n])"C\b/},i={className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},s=/\d{1,2}\/\d{1,2}\/\d{4}/,o=/\d{4}-\d{1,2}-\d{1,2}/,a=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,l=/\d{1,2}(:\d{1,2}){1,2}/,u={className:"literal",variants:[{begin:n.concat(/# */,n.either(o,s),/ *#/)},{begin:n.concat(/# */,l,/ *#/)},{begin:n.concat(/# */,a,/ *#/)},{begin:n.concat(/# */,n.either(o,s),/ +/,n.either(a,l),/ *#/)}]},c={className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},h={className:"label",begin:/^\w+:/},p=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),f=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[r,i,u,c,h,p,f,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{keyword:"const disable else elseif enable end externalsource if region then"},contains:[f]}]}}return zr=t,zr}var Hr,to;function Ch(){if(to)return Hr;to=1;function t(e){e.regex;const n=e.COMMENT(/\(;/,/;\)/);n.contains.push("self");const r=e.COMMENT(/;;/,/$/),i=["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"],s={begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",3:"title.function"}},o={className:"variable",begin:/\$[\w_]+/},a={match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},l={className:"number",relevance:0,match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/},u={match:/(i32|i64|f32|f64)(?!\.)/,className:"type"},c={className:"keyword",match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/};return{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,keyword:i},contains:[r,n,{match:[/(?:offset|align)/,/\s*/,/=/],className:{1:"keyword",3:"operator"}},o,a,s,e.QUOTE_STRING_MODE,u,c,l]}}return Hr=t,Hr}var ae=La;ae.registerLanguage("xml",Zd());ae.registerLanguage("bash",Xd());ae.registerLanguage("c",Qd());ae.registerLanguage("cpp",Jd());ae.registerLanguage("csharp",jd());ae.registerLanguage("css",eh());ae.registerLanguage("markdown",th());ae.registerLanguage("diff",nh());ae.registerLanguage("ruby",rh());ae.registerLanguage("go",ih());ae.registerLanguage("graphql",sh());ae.registerLanguage("ini",oh());ae.registerLanguage("java",ah());ae.registerLanguage("javascript",lh());ae.registerLanguage("json",ch());ae.registerLanguage("kotlin",uh());ae.registerLanguage("less",dh());ae.registerLanguage("lua",hh());ae.registerLanguage("makefile",ph());ae.registerLanguage("perl",gh());ae.registerLanguage("objectivec",fh());ae.registerLanguage("php",bh());ae.registerLanguage("php-template",mh());ae.registerLanguage("plaintext",_h());ae.registerLanguage("python",Eh());ae.registerLanguage("python-repl",yh());ae.registerLanguage("r",vh());ae.registerLanguage("rust",wh());ae.registerLanguage("scss",Sh());ae.registerLanguage("shell",Ah());ae.registerLanguage("sql",xh());ae.registerLanguage("swift",Nh());ae.registerLanguage("yaml",Th());ae.registerLanguage("typescript",Rh());ae.registerLanguage("vbnet",Oh());ae.registerLanguage("wasm",Ch());ae.HighlightJS=ae;ae.default=ae;/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ot=typeof window<"u";function Mh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function Ur(t,e){const n={};for(const r in e){const i=e[r];n[r]=Fe(i)?i.map(t):t(i)}return n}const en=()=>{},Fe=Array.isArray,kh=/\/$/,Lh=t=>t.replace(kh,"");function Fr(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ph(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Ih(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function no(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Dh(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Bt(e.matched[r],n.matched[i])&&Ia(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ia(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qh(t[n],e[n]))return!1;return!0}function qh(t,e){return Fe(t)?ro(t,e):Fe(e)?ro(e,t):t===e}function ro(t,e){return Fe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ph(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var dn;(function(t){t.pop="pop",t.push="push"})(dn||(dn={}));var tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(tn||(tn={}));function Bh(t){if(!t)if(Ot){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lh(t)}const zh=/^[^#]+#/;function Hh(t,e){return t.replace(zh,"#")+e}function Uh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Uh(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function io(t,e){return(history.state?history.state.position-e:-1)+t}const ii=new Map;function $h(t,e){ii.set(t,e)}function Kh(t){const e=ii.get(t);return ii.delete(t),e}let Gh=()=>location.protocol+"//"+location.host;function Da(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),no(l,"")}return no(n,t)+r+i}function Wh(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const f=Da(t,location),m=n.value,v=e.value;let N=0;if(p){if(n.value=f,e.value=p,o&&o===m){o=null;return}N=v?p.position-v.position:0}else r(f);i.forEach(x=>{x(n.value,m,{delta:N,type:dn.pop,direction:N?N>0?tn.forward:tn.back:tn.unknown})})};function l(){o=n.value}function u(p){i.push(p);const f=()=>{const m=i.indexOf(p);m>-1&&i.splice(m,1)};return s.push(f),f}function c(){const{history:p}=window;p.state&&p.replaceState(be({},p.state,{scroll:Xn()}),"")}function h(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:h}}function so(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Xn():null}}function Vh(t){const{history:e,location:n}=window,r={value:Da(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Gh()+t+l;try{e[c?"replaceState":"pushState"](u,"",p),i.value=u}catch(f){console.error(f),n[c?"replace":"assign"](p)}}function o(l,u){const c=be({},e.state,so(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});s(l,c,!0),r.value=l}function a(l,u){const c=be({},i.value,e.state,{forward:l,scroll:Xn()});s(c.current,c,!0);const h=be({},so(r.value,l,null),{position:c.position+1},u);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Yh(t){t=Bh(t);const e=Vh(t),n=Wh(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=be({location:"",base:t,go:r,createHref:Hh.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Zh(t){return typeof t=="string"||t&&typeof t=="object"}function qa(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pa=Symbol("");var oo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oo||(oo={}));function zt(t,e){return be(new Error,{type:t,[Pa]:!0},e)}function Ze(t,e){return t instanceof Error&&Pa in t&&(e==null||!!(t.type&e))}const ao="[^/]+?",Xh={sensitive:!1,strict:!1,start:!0,end:!0},Qh=/[.+*?^${}()[\]/\\]/g;function Jh(t,e){const n=be({},Xh,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const p=u[h];let f=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(Qh,"\\$&"),f+=40;else if(p.type===1){const{value:m,repeatable:v,optional:N,regexp:x}=p;s.push({name:m,repeatable:v,optional:N});const R=x||ao;if(R!==ao){f+=10;try{new RegExp(`(${R})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+M.message)}}let H=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(H=N&&u.length<2?`(?:/${H})`:"/"+H),N&&(H+="?"),i+=H,f+=20,N&&(f+=-8),v&&(f+=-20),R===".*"&&(f+=-50)}c.push(f)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const c=u.match(o),h={};if(!c)return null;for(let p=1;p<c.length;p++){const f=c[p]||"",m=s[p-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(u){let c="",h=!1;for(const p of t){(!h||!c.endsWith("/"))&&(c+="/"),h=!1;for(const f of p)if(f.type===0)c+=f.value;else if(f.type===1){const{value:m,repeatable:v,optional:N}=f,x=m in u?u[m]:"";if(Fe(x)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=Fe(x)?x.join("/"):x;if(!R)if(N)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);c+=R}}return c||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function jh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ep(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=jh(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(lo(r))return 1;if(lo(i))return-1}return i.length-r.length}function lo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tp={type:0,value:""},np=/[a-zA-Z0-9_]/;function rp(t){if(!t)return[[]];if(t==="/")return[[tp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,u="",c="";function h(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:np.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ip(t,e,n){const r=Jh(rp(t.path),n),i=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function sp(t,e){const n=[],r=new Map;e=ho({strict:!1,end:!0,sensitive:!1},e);function i(c){return r.get(c)}function s(c,h,p){const f=!p,m=op(c);m.aliasOf=p&&p.record;const v=ho(e,c),N=[m];if("alias"in c){const H=typeof c.alias=="string"?[c.alias]:c.alias;for(const M of H)N.push(be({},m,{components:p?p.record.components:m.components,path:M,aliasOf:p?p.record:m}))}let x,R;for(const H of N){const{path:M}=H;if(h&&M[0]!=="/"){const F=h.record.path,Q=F[F.length-1]==="/"?"":"/";H.path=h.record.path+(M&&Q+M)}if(x=ip(H,h,v),p?p.alias.push(x):(R=R||x,R!==x&&R.alias.push(x),f&&c.name&&!uo(x)&&o(c.name)),m.children){const F=m.children;for(let Q=0;Q<F.length;Q++)s(F[Q],x,p&&p.children[Q])}p=p||x,l(x)}return R?()=>{o(R)}:en}function o(c){if(qa(c)){const h=r.get(c);h&&(r.delete(c),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(c);h>-1&&(n.splice(h,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let h=0;for(;h<n.length&&ep(c,n[h])>=0&&(c.record.path!==n[h].record.path||!Ba(c,n[h]));)h++;n.splice(h,0,c),c.record.name&&!uo(c)&&r.set(c.record.name,c)}function u(c,h){let p,f={},m,v;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw zt(1,{location:c});v=p.record.name,f=be(co(h.params,p.keys.filter(R=>!R.optional).map(R=>R.name)),c.params&&co(c.params,p.keys.map(R=>R.name))),m=p.stringify(f)}else if("path"in c)m=c.path,p=n.find(R=>R.re.test(m)),p&&(f=p.parse(m),v=p.record.name);else{if(p=h.name?r.get(h.name):n.find(R=>R.re.test(h.path)),!p)throw zt(1,{location:c,currentLocation:h});v=p.record.name,f=be({},h.params,c.params),m=p.stringify(f)}const N=[];let x=p;for(;x;)N.unshift(x.record),x=x.parent;return{name:v,path:m,params:f,matched:N,meta:lp(N)}}return t.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function co(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function op(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ap(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ap(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function uo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lp(t){return t.reduce((e,n)=>be(e,n.meta),{})}function ho(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ba(t,e){return e.children.some(n=>n===t||Ba(t,n))}const za=/#/g,cp=/&/g,up=/\//g,dp=/=/g,hp=/\?/g,Ha=/\+/g,pp=/%5B/g,gp=/%5D/g,Ua=/%5E/g,fp=/%60/g,Fa=/%7B/g,bp=/%7C/g,$a=/%7D/g,mp=/%20/g;function Mi(t){return encodeURI(""+t).replace(bp,"|").replace(pp,"[").replace(gp,"]")}function _p(t){return Mi(t).replace(Fa,"{").replace($a,"}").replace(Ua,"^")}function si(t){return Mi(t).replace(Ha,"%2B").replace(mp,"+").replace(za,"%23").replace(cp,"%26").replace(fp,"`").replace(Fa,"{").replace($a,"}").replace(Ua,"^")}function Ep(t){return si(t).replace(dp,"%3D")}function yp(t){return Mi(t).replace(za,"%23").replace(hp,"%3F")}function vp(t){return t==null?"":yp(t).replace(up,"%2F")}function Ln(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Ha," "),o=s.indexOf("="),a=Ln(o<0?s:s.slice(0,o)),l=o<0?null:Ln(s.slice(o+1));if(a in e){let u=e[a];Fe(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function po(t){let e="";for(let n in t){const r=t[n];if(n=Ep(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fe(r)?r.map(s=>s&&si(s)):[r&&si(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Sp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const Ap=Symbol(""),go=Symbol(""),Qn=Symbol(""),ki=Symbol(""),oi=Symbol("");function Vt(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function it(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(zt(4,{from:n,to:e})):h instanceof Error?a(h):Zh(h)?a(zt(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,l);let c=Promise.resolve(u);t.length<3&&(c=c.then(l)),c.catch(h=>a(h))})}function $r(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(xp(a)){const u=(a.__vccOpts||a)[e];u&&i.push(it(u,n,r,s,o))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const c=Mh(u)?u.default:u;s.components[o]=c;const p=(c.__vccOpts||c)[e];return p&&it(p,n,r,s,o)()}))}}return i}function xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fo(t){const e=Be(Qn),n=Be(ki),r=Ne(()=>e.resolve(bt(t.to))),i=Ne(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],h=n.matched;if(!c||!h.length)return-1;const p=h.findIndex(Bt.bind(null,c));if(p>-1)return p;const f=bo(l[u-2]);return u>1&&bo(c)===f&&h[h.length-1].path!==f?h.findIndex(Bt.bind(null,l[u-2])):p}),s=Ne(()=>i.value>-1&&Op(n.params,r.value.params)),o=Ne(()=>i.value>-1&&i.value===n.matched.length-1&&Ia(n.params,r.value.params));function a(l={}){return Rp(l)?e[bt(t.replace)?"replace":"push"](bt(t.to)).catch(en):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Np=wi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fo,setup(t,{slots:e}){const n=$t(fo(t)),{options:r}=Be(Qn),i=Ne(()=>({[mo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Mn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Tp=Np;function Rp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Op(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Fe(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mo=(t,e,n)=>t??e??n,Cp=wi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(oi),i=Ne(()=>t.route||r.value),s=Be(go,0),o=Ne(()=>{let u=bt(s);const{matched:c}=i.value;let h;for(;(h=c[u])&&!h.components;)u++;return u}),a=Ne(()=>i.value.matched[o.value]);wn(go,Ne(()=>o.value+1)),wn(Ap,a),wn(oi,i);const l=yt();return Lt(()=>[l.value,a.value,t.name],([u,c,h],[p,f,m])=>{c&&(c.instances[h]=u,f&&f!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),u&&c&&(!f||!Bt(c,f)||!p)&&(c.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=i.value,c=t.name,h=a.value,p=h&&h.components[c];if(!p)return _o(n.default,{Component:p,route:u});const f=h.props[c],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,N=Mn(p,be({},m,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[c]=null)},ref:l}));return _o(n.default,{Component:N,route:u})||N}}});function _o(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ka=Cp;function Mp(t){const e=sp(t.routes,t),n=t.parseQuery||wp,r=t.stringifyQuery||po,i=t.history,s=Vt(),o=Vt(),a=Vt(),l=Ml(tt);let u=tt;Ot&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ur.bind(null,E=>""+E),h=Ur.bind(null,vp),p=Ur.bind(null,Ln);function f(E,D){let C,B;return qa(E)?(C=e.getRecordMatcher(E),B=D):B=E,e.addRoute(B,C)}function m(E){const D=e.getRecordMatcher(E);D&&e.removeRoute(D)}function v(){return e.getRoutes().map(E=>E.record)}function N(E){return!!e.getRecordMatcher(E)}function x(E,D){if(D=be({},D||l.value),typeof E=="string"){const d=Fr(n,E,D.path),g=e.resolve({path:d.path},D),b=i.createHref(d.fullPath);return be(d,g,{params:p(g.params),hash:Ln(d.hash),redirectedFrom:void 0,href:b})}let C;if("path"in E)C=be({},E,{path:Fr(n,E.path,D.path).path});else{const d=be({},E.params);for(const g in d)d[g]==null&&delete d[g];C=be({},E,{params:h(E.params)}),D.params=h(D.params)}const B=e.resolve(C,D),X=E.hash||"";B.params=c(p(B.params));const ce=Ih(r,be({},E,{hash:_p(X),path:B.path})),W=i.createHref(ce);return be({fullPath:ce,hash:X,query:r===po?Sp(E.query):E.query||{}},B,{redirectedFrom:void 0,href:W})}function R(E){return typeof E=="string"?Fr(n,E,l.value.path):be({},E)}function H(E,D){if(u!==E)return zt(8,{from:D,to:E})}function M(E){return j(E)}function F(E){return M(be(R(E),{replace:!0}))}function Q(E){const D=E.matched[E.matched.length-1];if(D&&D.redirect){const{redirect:C}=D;let B=typeof C=="function"?C(E):C;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=R(B):{path:B},B.params={}),be({query:E.query,hash:E.hash,params:"path"in B?{}:E.params},B)}}function j(E,D){const C=u=x(E),B=l.value,X=E.state,ce=E.force,W=E.replace===!0,d=Q(C);if(d)return j(be(R(d),{state:typeof d=="object"?be({},X,d.state):X,force:ce,replace:W}),D||C);const g=C;g.redirectedFrom=D;let b;return!ce&&Dh(r,B,C)&&(b=zt(16,{to:g,from:B}),oe(B,B,!0,!1)),(b?Promise.resolve(b):U(g,B)).catch(w=>Ze(w)?Ze(w,2)?w:V(w):y(w,g,B)).then(w=>{if(w){if(Ze(w,2))return j(be({replace:W},R(w.to),{state:typeof w.to=="object"?be({},X,w.to.state):X,force:ce}),D||g)}else w=ne(g,B,!0,W,X);return re(g,B,w),w})}function k(E,D){const C=H(E,D);return C?Promise.reject(C):Promise.resolve()}function U(E,D){let C;const[B,X,ce]=kp(E,D);C=$r(B.reverse(),"beforeRouteLeave",E,D);for(const d of B)d.leaveGuards.forEach(g=>{C.push(it(g,E,D))});const W=k.bind(null,E,D);return C.push(W),Tt(C).then(()=>{C=[];for(const d of s.list())C.push(it(d,E,D));return C.push(W),Tt(C)}).then(()=>{C=$r(X,"beforeRouteUpdate",E,D);for(const d of X)d.updateGuards.forEach(g=>{C.push(it(g,E,D))});return C.push(W),Tt(C)}).then(()=>{C=[];for(const d of E.matched)if(d.beforeEnter&&!D.matched.includes(d))if(Fe(d.beforeEnter))for(const g of d.beforeEnter)C.push(it(g,E,D));else C.push(it(d.beforeEnter,E,D));return C.push(W),Tt(C)}).then(()=>(E.matched.forEach(d=>d.enterCallbacks={}),C=$r(ce,"beforeRouteEnter",E,D),C.push(W),Tt(C))).then(()=>{C=[];for(const d of o.list())C.push(it(d,E,D));return C.push(W),Tt(C)}).catch(d=>Ze(d,8)?d:Promise.reject(d))}function re(E,D,C){for(const B of a.list())B(E,D,C)}function ne(E,D,C,B,X){const ce=H(E,D);if(ce)return ce;const W=D===tt,d=Ot?history.state:{};C&&(B||W?i.replace(E.fullPath,be({scroll:W&&d&&d.scroll},X)):i.push(E.fullPath,X)),l.value=E,oe(E,D,C,W),V()}let pe;function ye(){pe||(pe=i.listen((E,D,C)=>{if(!Se.listening)return;const B=x(E),X=Q(B);if(X){j(be(X,{replace:!0}),B).catch(en);return}u=B;const ce=l.value;Ot&&$h(io(ce.fullPath,C.delta),Xn()),U(B,ce).catch(W=>Ze(W,12)?W:Ze(W,2)?(j(W.to,B).then(d=>{Ze(d,20)&&!C.delta&&C.type===dn.pop&&i.go(-1,!1)}).catch(en),Promise.reject()):(C.delta&&i.go(-C.delta,!1),y(W,B,ce))).then(W=>{W=W||ne(B,ce,!1),W&&(C.delta&&!Ze(W,8)?i.go(-C.delta,!1):C.type===dn.pop&&Ze(W,20)&&i.go(-1,!1)),re(B,ce,W)}).catch(en)}))}let ge=Vt(),se=Vt(),Z;function y(E,D,C){V(E);const B=se.list();return B.length?B.forEach(X=>X(E,D,C)):console.error(E),Promise.reject(E)}function O(){return Z&&l.value!==tt?Promise.resolve():new Promise((E,D)=>{ge.add([E,D])})}function V(E){return Z||(Z=!E,ye(),ge.list().forEach(([D,C])=>E?C(E):D()),ge.reset()),E}function oe(E,D,C,B){const{scrollBehavior:X}=t;if(!Ot||!X)return Promise.resolve();const ce=!C&&Kh(io(E.fullPath,0))||(B||!C)&&history.state&&history.state.scroll||null;return yi().then(()=>X(E,D,ce)).then(W=>W&&Fh(W)).catch(W=>y(W,E,D))}const le=E=>i.go(E);let ue;const ve=new Set,Se={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:N,getRoutes:v,resolve:x,options:t,push:M,replace:F,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:O,install(E){const D=this;E.component("RouterLink",Tp),E.component("RouterView",Ka),E.config.globalProperties.$router=D,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>bt(l)}),Ot&&!ue&&l.value===tt&&(ue=!0,M(i.location).catch(X=>{}));const C={};for(const X in tt)C[X]=Ne(()=>l.value[X]);E.provide(Qn,D),E.provide(ki,$t(C)),E.provide(oi,l);const B=E.unmount;ve.add(E),E.unmount=function(){ve.delete(E),ve.size<1&&(u=tt,pe&&pe(),pe=null,l.value=tt,ue=!1,Z=!1),B()}}};return Se}function Tt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function kp(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Bt(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Bt(u,l))||i.push(l))}return[n,r,i]}function Lp(){return Be(Qn)}function Ip(){return Be(ki)}function Dp(t){let e=0;const n=document.createElement("div"),r=document.createElement("img");n.style.transition="all 1s",n.style.position="fixed",n.style.width="100%",n.style.height="100%",n.style.backgroundImage=`url(${t[e]})`,n.style.backgroundSize="cover",n.style.backgroundPosition="center center",n.style.zIndex="-9",r.style.display="none",r.setAttribute("src",t[e<t.length-1?e+1:0]),document.body.prepend(n),document.body.prepend(r),setInterval(()=>{e<t.length-1?e++:e=0,n.style.backgroundImage=`url(${t[e]})`,r.setAttribute("src",t[e<t.length-1?e+1:0])},10*60*1e3)}const tg=yt(""),ng=Nu("user",()=>{const t=yt(""),e=yt(null);function n(a){t.value=a,localStorage.setItem("token",a)}function r(){return t.value=localStorage.getItem("token")||"",t.value}function i(){t.value="",e.value=null,localStorage.removeItem("token")}function s(a){e.value=a}function o(){return jt.cloneDeep({},e.value)}return{getToken:r,setToken:n,reset:i,getUser:o,setUser:s}}),qp={__name:"App",setup(t){return Lp(),Ip(),ea(e=>{Dp(["https://picsum.photos/1920/1080"])}),(e,n)=>(ua(),ha(bt(Ka)))}},Pp="modulepreload",Bp=function(t){return"/"+t},Eo={},Rt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=Bp(o),o in Eo)return;Eo[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=s.length-1;h>=0;h--){const p=s[h];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Pp,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((h,p)=>{c.addEventListener("load",h),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},zp=Mp({history:Yh("/"),routes:[{path:"/",name:"Index",component:()=>Rt(()=>import("./Index-tHR-vNy7.js"),__vite__mapDeps([0,1,2,3]))},{path:"/web-components-plus",name:"WebComponentsPlus",component:()=>Rt(()=>import("./WebComponentsPlus-3dZkcrNh.js"),__vite__mapDeps([4,1,2,5]))},{path:"/resume",name:"Resume",component:()=>Rt(()=>import("./Resume-JHa9aSGn.js"),__vite__mapDeps([6,1,2,7]))},{path:"/demo-three",name:"DemoThree",component:()=>Rt(()=>import("./DemoThree-P08pMT26.js"),__vite__mapDeps([8,1,2,9]))},{path:"/demo",name:"Demo",component:()=>Rt(()=>import("./Demo-gXdTy02G.js"),__vite__mapDeps([10,1,2,11]))},{path:"/:pathMatch(.*)*",name:"404",component:()=>Rt(()=>import("./NotFound-Q15JgQEz.js"),__vite__mapDeps([12,1,2,13]))}]});jt.initColor();window.addEventListener("contextmenu",t=>(t.preventDefault(),!1));const Kt=mu(qp),Hp=yu();Kt.config.warnHandler=()=>null;Kt.directive("highlight",function(t){t.querySelectorAll("pre code").forEach(n=>{xn.highlightElement(n)})});Kt.use(zp);Kt.use(Hp);Kt.use(Yd);Kt.mount("#app");export{Qe as F,tg as a,ua as b,Yp as c,Le as d,ga as e,bt as f,Qp as g,ta as h,Vp as i,qc as j,jt as k,Mu as l,Kp as m,Zp as n,ea as o,$p as p,Gp as q,yt as r,jp as s,Fp as t,Lp as u,Xp as v,Wp as w,ha as x,td as y,ng as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Index-tHR-vNy7.js","assets/Header-15vwCNyk.js","assets/Header-MNtATa_m.css","assets/Index-YYpkNIUi.css","assets/WebComponentsPlus-3dZkcrNh.js","assets/WebComponentsPlus-6FN7V1rb.css","assets/Resume-JHa9aSGn.js","assets/Resume-gyoIqw1_.css","assets/DemoThree-P08pMT26.js","assets/DemoThree-0HjPUxDD.css","assets/Demo-gXdTy02G.js","assets/Demo-2Ezsxf1G.css","assets/NotFound-Q15JgQEz.js","assets/NotFound-tofmWgTd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}