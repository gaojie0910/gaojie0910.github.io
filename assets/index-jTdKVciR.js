var ko=Object.defineProperty;var Co=(e,t,r)=>t in e?ko(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ws=(e,t,r)=>(Co(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Jr(e,t){const r=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)r[s[i]]=!0;return t?i=>!!r[i.toLowerCase()]:i=>!!r[i]}const X={},pt=[],He=()=>{},To=()=>!1,Lo=/^on[^a-z]/,ar=e=>Lo.test(e),Qr=e=>e.startsWith("onUpdate:"),ie=Object.assign,Xr=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},qo=Object.prototype.hasOwnProperty,B=(e,t)=>qo.call(e,t),z=Array.isArray,gt=e=>ur(e)==="[object Map]",gi=e=>ur(e)==="[object Set]",j=e=>typeof e=="function",se=e=>typeof e=="string",cr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",bi=e=>(G(e)||j(e))&&j(e.then)&&j(e.catch),mi=Object.prototype.toString,ur=e=>mi.call(e),Oo=e=>ur(e).slice(8,-1),yi=e=>ur(e)==="[object Object]",Zr=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qt=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Mo=/-(\w)/g,yt=dr(e=>e.replace(Mo,(t,r)=>r?r.toUpperCase():"")),Ho=/\B([A-Z])/g,ot=dr(e=>e.replace(Ho,"-$1").toLowerCase()),vi=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=dr(e=>e?`on${vi(e)}`:""),st=(e,t)=>!Object.is(e,t),Sr=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},rr=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},Po=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let _s;const Mr=()=>_s||(_s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(e){if(z(e)){const t={};for(let r=0;r<e.length;r++){const s=e[r],i=se(s)?jo(s):Gr(s);if(i)for(const o in i)t[o]=i[o]}return t}else if(se(e)||G(e))return e}const zo=/;(?![^(]*\))/g,Io=/:([^]+)/,Fo=/\/\*[^]*?\*\//g;function jo(e){const t={};return e.replace(Fo,"").split(zo).forEach(r=>{if(r){const s=r.split(Io);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function es(e){let t="";if(se(e))t=e;else if(z(e))for(let r=0;r<e.length;r++){const s=es(e[r]);s&&(t+=s+" ")}else if(G(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Do="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",No=Jr(Do);function wi(e){return!!e||e===""}const Oc=e=>se(e)?e:e==null?"":z(e)||G(e)&&(e.toString===mi||!j(e.toString))?JSON.stringify(e,_i,2):String(e),_i=(e,t)=>t&&t.__v_isRef?_i(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[s,i])=>(r[`${s} =>`]=i,r),{})}:gi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!z(t)&&!yi(t)?String(t):t;let we;class xi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const r=we;try{return we=this,t()}finally{we=r}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.scopes)for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function $o(e){return new xi(e)}function Bo(e,t=we){t&&t.active&&t.effects.push(e)}function Uo(){return we}const ts=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Si=e=>(e.w&Ve)>0,Ai=e=>(e.n&Ve)>0,Wo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},Ko=e=>{const{deps:t}=e;if(t.length){let r=0;for(let s=0;s<t.length;s++){const i=t[s];Si(i)&&!Ai(i)?i.delete(e):t[r++]=i,i.w&=~Ve,i.n&=~Ve}t.length=r}},Hr=new WeakMap;let Lt=0,Ve=1;const Pr=30;let _e;const et=Symbol(""),zr=Symbol("");class rs{constructor(t,r=null,s){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Bo(this,s)}run(){if(!this.active)return this.fn();let t=_e,r=We;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,We=!0,Ve=1<<++Lt,Lt<=Pr?Wo(this):xs(this),this.fn()}finally{Lt<=Pr&&Ko(this),Ve=1<<--Lt,_e=this.parent,We=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(xs(this),this.onStop&&this.onStop(),this.active=!1)}}function xs(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let We=!0;const Ei=[];function At(){Ei.push(We),We=!1}function Et(){const e=Ei.pop();We=e===void 0?!0:e}function he(e,t,r){if(We&&_e){let s=Hr.get(e);s||Hr.set(e,s=new Map);let i=s.get(r);i||s.set(r,i=ts()),Ri(i)}}function Ri(e,t){let r=!1;Lt<=Pr?Ai(e)||(e.n|=Ve,r=!Si(e)):r=!e.has(_e),r&&(e.add(_e),_e.deps.push(e))}function Fe(e,t,r,s,i,o){const n=Hr.get(e);if(!n)return;let c=[];if(t==="clear")c=[...n.values()];else if(r==="length"&&z(e)){const a=Number(s);n.forEach((d,u)=>{(u==="length"||!cr(u)&&u>=a)&&c.push(d)})}else switch(r!==void 0&&c.push(n.get(r)),t){case"add":z(e)?Zr(r)&&c.push(n.get("length")):(c.push(n.get(et)),gt(e)&&c.push(n.get(zr)));break;case"delete":z(e)||(c.push(n.get(et)),gt(e)&&c.push(n.get(zr)));break;case"set":gt(e)&&c.push(n.get(et));break}if(c.length===1)c[0]&&Ir(c[0]);else{const a=[];for(const d of c)d&&a.push(...d);Ir(ts(a))}}function Ir(e,t){const r=z(e)?e:[...e];for(const s of r)s.computed&&Ss(s);for(const s of r)s.computed||Ss(s)}function Ss(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Vo=Jr("__proto__,__v_isRef,__isVue"),ki=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cr)),As=Yo();function Yo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const s=W(this);for(let o=0,n=this.length;o<n;o++)he(s,"get",o+"");const i=s[t](...r);return i===-1||i===!1?s[t](...r.map(W)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){At();const s=W(this)[t].apply(this,r);return Et(),s}}),e}function Jo(e){const t=W(this);return he(t,"has",e),t.hasOwnProperty(e)}class Ci{constructor(t=!1,r=!1){this._isReadonly=t,this._shallow=r}get(t,r,s){const i=this._isReadonly,o=this._shallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return o;if(r==="__v_raw"&&s===(i?o?cn:Oi:o?qi:Li).get(t))return t;const n=z(t);if(!i){if(n&&B(As,r))return Reflect.get(As,r,s);if(r==="hasOwnProperty")return Jo}const c=Reflect.get(t,r,s);return(cr(r)?ki.has(r):Vo(r))||(i||he(t,"get",r),o)?c:ae(c)?n&&Zr(r)?c:c.value:G(c)?i?Mi(c):$t(c):c}}class Ti extends Ci{constructor(t=!1){super(!1,t)}set(t,r,s,i){let o=t[r];if(vt(o)&&ae(o)&&!ae(s))return!1;if(!this._shallow&&(!sr(s)&&!vt(s)&&(o=W(o),s=W(s)),!z(t)&&ae(o)&&!ae(s)))return o.value=s,!0;const n=z(t)&&Zr(r)?Number(r)<t.length:B(t,r),c=Reflect.set(t,r,s,i);return t===W(i)&&(n?st(s,o)&&Fe(t,"set",r,s):Fe(t,"add",r,s)),c}deleteProperty(t,r){const s=B(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&s&&Fe(t,"delete",r,void 0),i}has(t,r){const s=Reflect.has(t,r);return(!cr(r)||!ki.has(r))&&he(t,"has",r),s}ownKeys(t){return he(t,"iterate",z(t)?"length":et),Reflect.ownKeys(t)}}class Qo extends Ci{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Xo=new Ti,Zo=new Qo,Go=new Ti(!0),ss=e=>e,hr=e=>Reflect.getPrototypeOf(e);function Ut(e,t,r=!1,s=!1){e=e.__v_raw;const i=W(e),o=W(t);r||(st(t,o)&&he(i,"get",t),he(i,"get",o));const{has:n}=hr(i),c=s?ss:r?ls:zt;if(n.call(i,t))return c(e.get(t));if(n.call(i,o))return c(e.get(o));e!==i&&e.get(t)}function Wt(e,t=!1){const r=this.__v_raw,s=W(r),i=W(e);return t||(st(e,i)&&he(s,"has",e),he(s,"has",i)),e===i?r.has(e):r.has(e)||r.has(i)}function Kt(e,t=!1){return e=e.__v_raw,!t&&he(W(e),"iterate",et),Reflect.get(e,"size",e)}function Es(e){e=W(e);const t=W(this);return hr(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function Rs(e,t){t=W(t);const r=W(this),{has:s,get:i}=hr(r);let o=s.call(r,e);o||(e=W(e),o=s.call(r,e));const n=i.call(r,e);return r.set(e,t),o?st(t,n)&&Fe(r,"set",e,t):Fe(r,"add",e,t),this}function ks(e){const t=W(this),{has:r,get:s}=hr(t);let i=r.call(t,e);i||(e=W(e),i=r.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return i&&Fe(t,"delete",e,void 0),o}function Cs(){const e=W(this),t=e.size!==0,r=e.clear();return t&&Fe(e,"clear",void 0,void 0),r}function Vt(e,t){return function(s,i){const o=this,n=o.__v_raw,c=W(n),a=t?ss:e?ls:zt;return!e&&he(c,"iterate",et),n.forEach((d,u)=>s.call(i,a(d),a(u),o))}}function Yt(e,t,r){return function(...s){const i=this.__v_raw,o=W(i),n=gt(o),c=e==="entries"||e===Symbol.iterator&&n,a=e==="keys"&&n,d=i[e](...s),u=r?ss:t?ls:zt;return!t&&he(o,"iterate",a?zr:et),{next(){const{value:f,done:p}=d.next();return p?{value:f,done:p}:{value:c?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ne(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function en(){const e={get(o){return Ut(this,o)},get size(){return Kt(this)},has:Wt,add:Es,set:Rs,delete:ks,clear:Cs,forEach:Vt(!1,!1)},t={get(o){return Ut(this,o,!1,!0)},get size(){return Kt(this)},has:Wt,add:Es,set:Rs,delete:ks,clear:Cs,forEach:Vt(!1,!0)},r={get(o){return Ut(this,o,!0)},get size(){return Kt(this,!0)},has(o){return Wt.call(this,o,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Vt(!0,!1)},s={get(o){return Ut(this,o,!0,!0)},get size(){return Kt(this,!0)},has(o){return Wt.call(this,o,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Vt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Yt(o,!1,!1),r[o]=Yt(o,!0,!1),t[o]=Yt(o,!1,!0),s[o]=Yt(o,!0,!0)}),[e,r,t,s]}const[tn,rn,sn,on]=en();function is(e,t){const r=t?e?on:sn:e?rn:tn;return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(B(r,i)&&i in s?r:s,i,o)}const nn={get:is(!1,!1)},ln={get:is(!1,!0)},an={get:is(!0,!1)},Li=new WeakMap,qi=new WeakMap,Oi=new WeakMap,cn=new WeakMap;function un(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dn(e){return e.__v_skip||!Object.isExtensible(e)?0:un(Oo(e))}function $t(e){return vt(e)?e:os(e,!1,Xo,nn,Li)}function hn(e){return os(e,!1,Go,ln,qi)}function Mi(e){return os(e,!0,Zo,an,Oi)}function os(e,t,r,s,i){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const n=dn(e);if(n===0)return e;const c=new Proxy(e,n===2?s:r);return i.set(e,c),c}function bt(e){return vt(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function Hi(e){return bt(e)||vt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function ns(e){return rr(e,"__v_skip",!0),e}const zt=e=>G(e)?$t(e):e,ls=e=>G(e)?Mi(e):e;function Pi(e){We&&_e&&(e=W(e),Ri(e.dep||(e.dep=ts())))}function zi(e,t){e=W(e);const r=e.dep;r&&Ir(r)}function ae(e){return!!(e&&e.__v_isRef===!0)}function Ii(e){return Fi(e,!1)}function fn(e){return Fi(e,!0)}function Fi(e,t){return ae(e)?e:new pn(e,t)}class pn{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:W(t),this._value=r?t:zt(t)}get value(){return Pi(this),this._value}set value(t){const r=this.__v_isShallow||sr(t)||vt(t);t=r?t:W(t),st(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:zt(t),zi(this))}}function tt(e){return ae(e)?e.value:e}const gn={get:(e,t,r)=>tt(Reflect.get(e,t,r)),set:(e,t,r,s)=>{const i=e[t];return ae(i)&&!ae(r)?(i.value=r,!0):Reflect.set(e,t,r,s)}};function ji(e){return bt(e)?e:new Proxy(e,gn)}class bn{constructor(t,r,s,i){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new rs(t,()=>{this._dirty||(this._dirty=!0,zi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=W(this);return Pi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function mn(e,t,r=!1){let s,i;const o=j(e);return o?(s=e,i=He):(s=e.get,i=e.set),new bn(s,i,o||!i,r)}function Ke(e,t,r,s){let i;try{i=s?e(...s):e()}catch(o){fr(o,t,r)}return i}function Se(e,t,r,s){if(j(e)){const o=Ke(e,t,r,s);return o&&bi(o)&&o.catch(n=>{fr(n,t,r)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(Se(e[o],t,r,s));return i}function fr(e,t,r,s=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const n=t.proxy,c=r;for(;o;){const d=o.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,n,c)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){Ke(a,null,10,[e,n,c]);return}}yn(e,r,i,s)}function yn(e,t,r,s=!0){console.error(e)}let It=!1,Fr=!1;const ne=[];let Oe=0;const mt=[];let ze=null,Ze=0;const Di=Promise.resolve();let as=null;function Ni(e){const t=as||Di;return e?t.then(this?e.bind(this):e):t}function vn(e){let t=Oe+1,r=ne.length;for(;t<r;){const s=t+r>>>1,i=ne[s],o=Ft(i);o<e||o===e&&i.pre?t=s+1:r=s}return t}function cs(e){(!ne.length||!ne.includes(e,It&&e.allowRecurse?Oe+1:Oe))&&(e.id==null?ne.push(e):ne.splice(vn(e.id),0,e),$i())}function $i(){!It&&!Fr&&(Fr=!0,as=Di.then(Ui))}function wn(e){const t=ne.indexOf(e);t>Oe&&ne.splice(t,1)}function _n(e){z(e)?mt.push(...e):(!ze||!ze.includes(e,e.allowRecurse?Ze+1:Ze))&&mt.push(e),$i()}function Ts(e,t=It?Oe+1:0){for(;t<ne.length;t++){const r=ne[t];r&&r.pre&&(ne.splice(t,1),t--,r())}}function Bi(e){if(mt.length){const t=[...new Set(mt)];if(mt.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((r,s)=>Ft(r)-Ft(s)),Ze=0;Ze<ze.length;Ze++)ze[Ze]();ze=null,Ze=0}}const Ft=e=>e.id==null?1/0:e.id,xn=(e,t)=>{const r=Ft(e)-Ft(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Ui(e){Fr=!1,It=!0,ne.sort(xn);try{for(Oe=0;Oe<ne.length;Oe++){const t=ne[Oe];t&&t.active!==!1&&Ke(t,null,14)}}finally{Oe=0,ne.length=0,Bi(),It=!1,as=null,(ne.length||mt.length)&&Ui()}}function Sn(e,t,...r){if(e.isUnmounted)return;const s=e.vnode.props||X;let i=r;const o=t.startsWith("update:"),n=o&&t.slice(7);if(n&&n in s){const u=`${n==="modelValue"?"model":n}Modifiers`,{number:f,trim:p}=s[u]||X;p&&(i=r.map(w=>se(w)?w.trim():w)),f&&(i=r.map(Po))}let c,a=s[c=xr(t)]||s[c=xr(yt(t))];!a&&o&&(a=s[c=xr(ot(t))]),a&&Se(a,e,6,i);const d=s[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Se(d,e,6,i)}}function Wi(e,t,r=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let n={},c=!1;if(!j(e)){const a=d=>{const u=Wi(d,t,!0);u&&(c=!0,ie(n,u))};!r&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!c?(G(e)&&s.set(e,null),null):(z(o)?o.forEach(a=>n[a]=null):ie(n,o),G(e)&&s.set(e,n),n)}function pr(e,t){return!e||!ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,ot(t))||B(e,t))}let Me=null,gr=null;function ir(e){const t=Me;return Me=e,gr=e&&e.type.__scopeId||null,t}function Mc(e){gr=e}function Hc(){gr=null}function An(e,t=Me,r){if(!t||e._n)return e;const s=(...i)=>{s._d&&js(-1);const o=ir(t);let n;try{n=e(...i)}finally{ir(o),s._d&&js(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function Ar(e){const{type:t,vnode:r,proxy:s,withProxy:i,props:o,propsOptions:[n],slots:c,attrs:a,emit:d,render:u,renderCache:f,data:p,setupState:w,ctx:C,inheritAttrs:T}=e;let F,P;const M=ir(e);try{if(r.shapeFlag&4){const H=i||s,re=H;F=qe(u.call(re,H,f,o,w,p,C)),P=a}else{const H=t;F=qe(H.length>1?H(o,{attrs:a,slots:c,emit:d}):H(o,null)),P=t.props?a:En(a)}}catch(H){Mt.length=0,fr(H,e,1),F=pe(it)}let U=F;if(P&&T!==!1){const H=Object.keys(P),{shapeFlag:re}=U;H.length&&re&7&&(n&&H.some(Qr)&&(P=Rn(P,n)),U=wt(U,P))}return r.dirs&&(U=wt(U),U.dirs=U.dirs?U.dirs.concat(r.dirs):r.dirs),r.transition&&(U.transition=r.transition),F=U,ir(M),F}const En=e=>{let t;for(const r in e)(r==="class"||r==="style"||ar(r))&&((t||(t={}))[r]=e[r]);return t},Rn=(e,t)=>{const r={};for(const s in e)(!Qr(s)||!(s.slice(9)in t))&&(r[s]=e[s]);return r};function kn(e,t,r){const{props:s,children:i,component:o}=e,{props:n,children:c,patchFlag:a}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&a>=0){if(a&1024)return!0;if(a&16)return s?Ls(s,n,d):!!n;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(n[p]!==s[p]&&!pr(d,p))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===n?!1:s?n?Ls(s,n,d):!0:!!n;return!1}function Ls(e,t,r){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!pr(r,o))return!0}return!1}function Cn({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const Tn=Symbol.for("v-ndc"),Ln=e=>e.__isSuspense;function qn(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):_n(e)}const Jt={};function Xt(e,t,r){return Ki(e,t,r)}function Ki(e,t,{immediate:r,deep:s,flush:i,onTrack:o,onTrigger:n}=X){var c;const a=Uo()===((c=le)==null?void 0:c.scope)?le:null;let d,u=!1,f=!1;if(ae(e)?(d=()=>e.value,u=sr(e)):bt(e)?(d=()=>e,s=!0):z(e)?(f=!0,u=e.some(H=>bt(H)||sr(H)),d=()=>e.map(H=>{if(ae(H))return H.value;if(bt(H))return ft(H);if(j(H))return Ke(H,a,2)})):j(e)?t?d=()=>Ke(e,a,2):d=()=>{if(!(a&&a.isUnmounted))return p&&p(),Se(e,a,3,[w])}:d=He,t&&s){const H=d;d=()=>ft(H())}let p,w=H=>{p=M.onStop=()=>{Ke(H,a,4),p=M.onStop=void 0}},C;if(Dt)if(w=He,t?r&&Se(t,a,3,[d(),f?[]:void 0,w]):d(),i==="sync"){const H=xl();C=H.__watcherHandles||(H.__watcherHandles=[])}else return He;let T=f?new Array(e.length).fill(Jt):Jt;const F=()=>{if(M.active)if(t){const H=M.run();(s||u||(f?H.some((re,oe)=>st(re,T[oe])):st(H,T)))&&(p&&p(),Se(t,a,3,[H,T===Jt?void 0:f&&T[0]===Jt?[]:T,w]),T=H)}else M.run()};F.allowRecurse=!!t;let P;i==="sync"?P=F:i==="post"?P=()=>de(F,a&&a.suspense):(F.pre=!0,a&&(F.id=a.uid),P=()=>cs(F));const M=new rs(d,P);t?r?F():T=M.run():i==="post"?de(M.run.bind(M),a&&a.suspense):M.run();const U=()=>{M.stop(),a&&a.scope&&Xr(a.scope.effects,M)};return C&&C.push(U),U}function On(e,t,r){const s=this.proxy,i=se(e)?e.includes(".")?Vi(s,e):()=>s[e]:e.bind(s,s);let o;j(t)?o=t:(o=t.handler,r=t);const n=le;_t(this);const c=Ki(i,o.bind(s),r);return n?_t(n):rt(),c}function Vi(e,t){const r=t.split(".");return()=>{let s=e;for(let i=0;i<r.length&&s;i++)s=s[r[i]];return s}}function ft(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ae(e))ft(e.value,t);else if(z(e))for(let r=0;r<e.length;r++)ft(e[r],t);else if(gi(e)||gt(e))e.forEach(r=>{ft(r,t)});else if(yi(e))for(const r in e)ft(e[r],t);return e}function Qe(e,t,r,s){const i=e.dirs,o=t&&t.dirs;for(let n=0;n<i.length;n++){const c=i[n];o&&(c.oldValue=o[n].value);let a=c.dir[s];a&&(At(),Se(a,r,8,[e.el,c,e,t]),Et())}}/*! #__NO_SIDE_EFFECTS__ */function Yi(e,t){return j(e)?ie({name:e.name},t,{setup:e}):e}const Zt=e=>!!e.type.__asyncLoader,Ji=e=>e.type.__isKeepAlive;function Mn(e,t){Qi(e,"a",t)}function Hn(e,t){Qi(e,"da",t)}function Qi(e,t,r=le){const s=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(br(t,s,r),r){let i=r.parent;for(;i&&i.parent;)Ji(i.parent.vnode)&&Pn(s,t,r,i),i=i.parent}}function Pn(e,t,r,s){const i=br(t,e,s,!0);Zi(()=>{Xr(s[t],i)},r)}function br(e,t,r=le,s=!1){if(r){const i=r[e]||(r[e]=[]),o=t.__weh||(t.__weh=(...n)=>{if(r.isUnmounted)return;At(),_t(r);const c=Se(t,r,e,n);return rt(),Et(),c});return s?i.unshift(o):i.push(o),o}}const je=e=>(t,r=le)=>(!Dt||e==="sp")&&br(e,(...s)=>t(...s),r),zn=je("bm"),Xi=je("m"),In=je("bu"),Fn=je("u"),jn=je("bum"),Zi=je("um"),Dn=je("sp"),Nn=je("rtg"),$n=je("rtc");function Bn(e,t=le){br("ec",e,t)}const jr=e=>e?fo(e)?ps(e)||e.proxy:jr(e.parent):null,Ot=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$emit:e=>e.emit,$options:e=>us(e),$forceUpdate:e=>e.f||(e.f=()=>cs(e.update)),$nextTick:e=>e.n||(e.n=Ni.bind(e.proxy)),$watch:e=>On.bind(e)}),Er=(e,t)=>e!==X&&!e.__isScriptSetup&&B(e,t),Un={get({_:e},t){const{ctx:r,setupState:s,data:i,props:o,accessCache:n,type:c,appContext:a}=e;let d;if(t[0]!=="$"){const w=n[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return i[t];case 4:return r[t];case 3:return o[t]}else{if(Er(s,t))return n[t]=1,s[t];if(i!==X&&B(i,t))return n[t]=2,i[t];if((d=e.propsOptions[0])&&B(d,t))return n[t]=3,o[t];if(r!==X&&B(r,t))return n[t]=4,r[t];Dr&&(n[t]=0)}}const u=Ot[t];let f,p;if(u)return t==="$attrs"&&he(e,"get",t),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(r!==X&&B(r,t))return n[t]=4,r[t];if(p=a.config.globalProperties,B(p,t))return p[t]},set({_:e},t,r){const{data:s,setupState:i,ctx:o}=e;return Er(i,t)?(i[t]=r,!0):s!==X&&B(s,t)?(s[t]=r,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:s,appContext:i,propsOptions:o}},n){let c;return!!r[n]||e!==X&&B(e,n)||Er(t,n)||(c=o[0])&&B(c,n)||B(s,n)||B(Ot,n)||B(i.config.globalProperties,n)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:B(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function qs(e){return z(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Dr=!0;function Wn(e){const t=us(e),r=e.proxy,s=e.ctx;Dr=!1,t.beforeCreate&&Os(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:n,watch:c,provide:a,inject:d,created:u,beforeMount:f,mounted:p,beforeUpdate:w,updated:C,activated:T,deactivated:F,beforeDestroy:P,beforeUnmount:M,destroyed:U,unmounted:H,render:re,renderTracked:oe,renderTriggered:be,errorCaptured:Re,serverPrefetch:nt,expose:ke,inheritAttrs:De,components:Ce,directives:lt,filters:Ye}=t;if(d&&Kn(d,s,null),n)for(const J in n){const V=n[J];j(V)&&(s[J]=V.bind(r))}if(i){const J=i.call(r,r);G(J)&&(e.data=$t(J))}if(Dr=!0,o)for(const J in o){const V=o[J],me=j(V)?V.bind(r,r):j(V.get)?V.get.bind(r,r):He,Je=!j(V)&&j(V.set)?V.set.bind(r):He,ye=ge({get:me,set:Je});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ue=>ye.value=ue})}if(c)for(const J in c)Gi(c[J],s,r,J);if(a){const J=j(a)?a.call(r):a;Reflect.ownKeys(J).forEach(V=>{Gt(V,J[V])})}u&&Os(u,e,"c");function ee(J,V){z(V)?V.forEach(me=>J(me.bind(r))):V&&J(V.bind(r))}if(ee(zn,f),ee(Xi,p),ee(In,w),ee(Fn,C),ee(Mn,T),ee(Hn,F),ee(Bn,Re),ee($n,oe),ee(Nn,be),ee(jn,M),ee(Zi,H),ee(Dn,nt),z(ke))if(ke.length){const J=e.exposed||(e.exposed={});ke.forEach(V=>{Object.defineProperty(J,V,{get:()=>r[V],set:me=>r[V]=me})})}else e.exposed||(e.exposed={});re&&e.render===He&&(e.render=re),De!=null&&(e.inheritAttrs=De),Ce&&(e.components=Ce),lt&&(e.directives=lt)}function Kn(e,t,r=He){z(e)&&(e=Nr(e));for(const s in e){const i=e[s];let o;G(i)?"default"in i?o=Ae(i.from||s,i.default,!0):o=Ae(i.from||s):o=Ae(i),ae(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:n=>o.value=n}):t[s]=o}}function Os(e,t,r){Se(z(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,r)}function Gi(e,t,r,s){const i=s.includes(".")?Vi(r,s):()=>r[s];if(se(e)){const o=t[e];j(o)&&Xt(i,o)}else if(j(e))Xt(i,e.bind(r));else if(G(e))if(z(e))e.forEach(o=>Gi(o,t,r,s));else{const o=j(e.handler)?e.handler.bind(r):t[e.handler];j(o)&&Xt(i,o,e)}}function us(e){const t=e.type,{mixins:r,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:n}}=e.appContext,c=o.get(t);let a;return c?a=c:!i.length&&!r&&!s?a=t:(a={},i.length&&i.forEach(d=>or(a,d,n,!0)),or(a,t,n)),G(t)&&o.set(t,a),a}function or(e,t,r,s=!1){const{mixins:i,extends:o}=t;o&&or(e,o,r,!0),i&&i.forEach(n=>or(e,n,r,!0));for(const n in t)if(!(s&&n==="expose")){const c=Vn[n]||r&&r[n];e[n]=c?c(e[n],t[n]):t[n]}return e}const Vn={data:Ms,props:Hs,emits:Hs,methods:qt,computed:qt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:qt,directives:qt,watch:Jn,provide:Ms,inject:Yn};function Ms(e,t){return t?e?function(){return ie(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Yn(e,t){return qt(Nr(e),Nr(t))}function Nr(e){if(z(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?ie(Object.create(null),e,t):t}function Hs(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ie(Object.create(null),qs(e),qs(t??{})):t}function Jn(e,t){if(!e)return t;if(!t)return e;const r=ie(Object.create(null),e);for(const s in t)r[s]=ce(e[s],t[s]);return r}function eo(){return{app:null,config:{isNativeTag:To,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qn=0;function Xn(e,t){return function(s,i=null){j(s)||(s=ie({},s)),i!=null&&!G(i)&&(i=null);const o=eo(),n=new WeakSet;let c=!1;const a=o.app={_uid:Qn++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:Sl,get config(){return o.config},set config(d){},use(d,...u){return n.has(d)||(d&&j(d.install)?(n.add(d),d.install(a,...u)):j(d)&&(n.add(d),d(a,...u))),a},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),a},component(d,u){return u?(o.components[d]=u,a):o.components[d]},directive(d,u){return u?(o.directives[d]=u,a):o.directives[d]},mount(d,u,f){if(!c){const p=pe(s,i);return p.appContext=o,u&&t?t(p,d):e(p,d,f),c=!0,a._container=d,d.__vue_app__=a,ps(p.component)||p.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,u){return o.provides[d]=u,a},runWithContext(d){nr=a;try{return d()}finally{nr=null}}};return a}}let nr=null;function Gt(e,t){if(le){let r=le.provides;const s=le.parent&&le.parent.provides;s===r&&(r=le.provides=Object.create(s)),r[e]=t}}function Ae(e,t,r=!1){const s=le||Me;if(s||nr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:nr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return r&&j(t)?t.call(s&&s.proxy):t}}function Zn(e,t,r,s=!1){const i={},o={};rr(o,yr,1),e.propsDefaults=Object.create(null),to(e,t,i,o);for(const n in e.propsOptions[0])n in i||(i[n]=void 0);r?e.props=s?i:hn(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Gn(e,t,r,s){const{props:i,attrs:o,vnode:{patchFlag:n}}=e,c=W(i),[a]=e.propsOptions;let d=!1;if((s||n>0)&&!(n&16)){if(n&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(pr(e.emitsOptions,p))continue;const w=t[p];if(a)if(B(o,p))w!==o[p]&&(o[p]=w,d=!0);else{const C=yt(p);i[C]=$r(a,c,C,w,e,!1)}else w!==o[p]&&(o[p]=w,d=!0)}}}else{to(e,t,i,o)&&(d=!0);let u;for(const f in c)(!t||!B(t,f)&&((u=ot(f))===f||!B(t,u)))&&(a?r&&(r[f]!==void 0||r[u]!==void 0)&&(i[f]=$r(a,c,f,void 0,e,!0)):delete i[f]);if(o!==c)for(const f in o)(!t||!B(t,f))&&(delete o[f],d=!0)}d&&Fe(e,"set","$attrs")}function to(e,t,r,s){const[i,o]=e.propsOptions;let n=!1,c;if(t)for(let a in t){if(Qt(a))continue;const d=t[a];let u;i&&B(i,u=yt(a))?!o||!o.includes(u)?r[u]=d:(c||(c={}))[u]=d:pr(e.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,n=!0)}if(o){const a=W(r),d=c||X;for(let u=0;u<o.length;u++){const f=o[u];r[f]=$r(i,a,f,d[f],e,!B(d,f))}}return n}function $r(e,t,r,s,i,o){const n=e[r];if(n!=null){const c=B(n,"default");if(c&&s===void 0){const a=n.default;if(n.type!==Function&&!n.skipFactory&&j(a)){const{propsDefaults:d}=i;r in d?s=d[r]:(_t(i),s=d[r]=a.call(null,t),rt())}else s=a}n[0]&&(o&&!c?s=!1:n[1]&&(s===""||s===ot(r))&&(s=!0))}return s}function ro(e,t,r=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const o=e.props,n={},c=[];let a=!1;if(!j(e)){const u=f=>{a=!0;const[p,w]=ro(f,t,!0);ie(n,p),w&&c.push(...w)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!a)return G(e)&&s.set(e,pt),pt;if(z(o))for(let u=0;u<o.length;u++){const f=yt(o[u]);Ps(f)&&(n[f]=X)}else if(o)for(const u in o){const f=yt(u);if(Ps(f)){const p=o[u],w=n[f]=z(p)||j(p)?{type:p}:ie({},p);if(w){const C=Fs(Boolean,w.type),T=Fs(String,w.type);w[0]=C>-1,w[1]=T<0||C<T,(C>-1||B(w,"default"))&&c.push(f)}}}const d=[n,c];return G(e)&&s.set(e,d),d}function Ps(e){return e[0]!=="$"}function zs(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Is(e,t){return zs(e)===zs(t)}function Fs(e,t){return z(t)?t.findIndex(r=>Is(r,e)):j(t)&&Is(t,e)?0:-1}const so=e=>e[0]==="_"||e==="$stable",ds=e=>z(e)?e.map(qe):[qe(e)],el=(e,t,r)=>{if(t._n)return t;const s=An((...i)=>ds(t(...i)),r);return s._c=!1,s},io=(e,t,r)=>{const s=e._ctx;for(const i in e){if(so(i))continue;const o=e[i];if(j(o))t[i]=el(i,o,s);else if(o!=null){const n=ds(o);t[i]=()=>n}}},oo=(e,t)=>{const r=ds(t);e.slots.default=()=>r},tl=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=W(t),rr(t,"_",r)):io(t,e.slots={})}else e.slots={},t&&oo(e,t);rr(e.slots,yr,1)},rl=(e,t,r)=>{const{vnode:s,slots:i}=e;let o=!0,n=X;if(s.shapeFlag&32){const c=t._;c?r&&c===1?o=!1:(ie(i,t),!r&&c===1&&delete i._):(o=!t.$stable,io(t,i)),n=t}else t&&(oo(e,t),n={default:1});if(o)for(const c in i)!so(c)&&n[c]==null&&delete i[c]};function Br(e,t,r,s,i=!1){if(z(e)){e.forEach((p,w)=>Br(p,t&&(z(t)?t[w]:t),r,s,i));return}if(Zt(s)&&!i)return;const o=s.shapeFlag&4?ps(s.component)||s.component.proxy:s.el,n=i?null:o,{i:c,r:a}=e,d=t&&t.r,u=c.refs===X?c.refs={}:c.refs,f=c.setupState;if(d!=null&&d!==a&&(se(d)?(u[d]=null,B(f,d)&&(f[d]=null)):ae(d)&&(d.value=null)),j(a))Ke(a,c,12,[n,u]);else{const p=se(a),w=ae(a);if(p||w){const C=()=>{if(e.f){const T=p?B(f,a)?f[a]:u[a]:a.value;i?z(T)&&Xr(T,o):z(T)?T.includes(o)||T.push(o):p?(u[a]=[o],B(f,a)&&(f[a]=u[a])):(a.value=[o],e.k&&(u[e.k]=a.value))}else p?(u[a]=n,B(f,a)&&(f[a]=n)):w&&(a.value=n,e.k&&(u[e.k]=n))};n?(C.id=-1,de(C,r)):C()}}}const de=qn;function sl(e){return il(e)}function il(e,t){const r=Mr();r.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:n,createText:c,createComment:a,setText:d,setElementText:u,parentNode:f,nextSibling:p,setScopeId:w=He,insertStaticContent:C}=e,T=(l,h,g,b=null,y=null,x=null,E=!1,_=null,S=!!h.dynamicChildren)=>{if(l===h)return;l&&!Ct(l,h)&&(b=A(l),ue(l,y,x,!0),l=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:v,ref:q,shapeFlag:k}=h;switch(v){case mr:F(l,h,g,b);break;case it:P(l,h,g,b);break;case Rr:l==null&&M(h,g,b,E);break;case Ie:Ce(l,h,g,b,y,x,E,_,S);break;default:k&1?re(l,h,g,b,y,x,E,_,S):k&6?lt(l,h,g,b,y,x,E,_,S):(k&64||k&128)&&v.process(l,h,g,b,y,x,E,_,S,$)}q!=null&&y&&Br(q,l&&l.ref,x,h||l,!h)},F=(l,h,g,b)=>{if(l==null)s(h.el=c(h.children),g,b);else{const y=h.el=l.el;h.children!==l.children&&d(y,h.children)}},P=(l,h,g,b)=>{l==null?s(h.el=a(h.children||""),g,b):h.el=l.el},M=(l,h,g,b)=>{[l.el,l.anchor]=C(l.children,h,g,b,l.el,l.anchor)},U=({el:l,anchor:h},g,b)=>{let y;for(;l&&l!==h;)y=p(l),s(l,g,b),l=y;s(h,g,b)},H=({el:l,anchor:h})=>{let g;for(;l&&l!==h;)g=p(l),i(l),l=g;i(h)},re=(l,h,g,b,y,x,E,_,S)=>{E=E||h.type==="svg",l==null?oe(h,g,b,y,x,E,_,S):nt(l,h,y,x,E,_,S)},oe=(l,h,g,b,y,x,E,_)=>{let S,v;const{type:q,props:k,shapeFlag:O,transition:I,dirs:N}=l;if(S=l.el=n(l.type,x,k&&k.is,k),O&8?u(S,l.children):O&16&&Re(l.children,S,null,b,y,x&&q!=="foreignObject",E,_),N&&Qe(l,null,b,"created"),be(S,l,l.scopeId,E,b),k){for(const Y in k)Y!=="value"&&!Qt(Y)&&o(S,Y,null,k[Y],x,l.children,b,y,R);"value"in k&&o(S,"value",null,k.value),(v=k.onVnodeBeforeMount)&&Le(v,b,l)}N&&Qe(l,null,b,"beforeMount");const Q=ol(y,I);Q&&I.beforeEnter(S),s(S,h,g),((v=k&&k.onVnodeMounted)||Q||N)&&de(()=>{v&&Le(v,b,l),Q&&I.enter(S),N&&Qe(l,null,b,"mounted")},y)},be=(l,h,g,b,y)=>{if(g&&w(l,g),b)for(let x=0;x<b.length;x++)w(l,b[x]);if(y){let x=y.subTree;if(h===x){const E=y.vnode;be(l,E,E.scopeId,E.slotScopeIds,y.parent)}}},Re=(l,h,g,b,y,x,E,_,S=0)=>{for(let v=S;v<l.length;v++){const q=l[v]=_?Be(l[v]):qe(l[v]);T(null,q,h,g,b,y,x,E,_)}},nt=(l,h,g,b,y,x,E)=>{const _=h.el=l.el;let{patchFlag:S,dynamicChildren:v,dirs:q}=h;S|=l.patchFlag&16;const k=l.props||X,O=h.props||X;let I;g&&Xe(g,!1),(I=O.onVnodeBeforeUpdate)&&Le(I,g,h,l),q&&Qe(h,l,g,"beforeUpdate"),g&&Xe(g,!0);const N=y&&h.type!=="foreignObject";if(v?ke(l.dynamicChildren,v,_,g,b,N,x):E||V(l,h,_,null,g,b,N,x,!1),S>0){if(S&16)De(_,h,k,O,g,b,y);else if(S&2&&k.class!==O.class&&o(_,"class",null,O.class,y),S&4&&o(_,"style",k.style,O.style,y),S&8){const Q=h.dynamicProps;for(let Y=0;Y<Q.length;Y++){const te=Q[Y],ve=k[te],ct=O[te];(ct!==ve||te==="value")&&o(_,te,ve,ct,y,l.children,g,b,R)}}S&1&&l.children!==h.children&&u(_,h.children)}else!E&&v==null&&De(_,h,k,O,g,b,y);((I=O.onVnodeUpdated)||q)&&de(()=>{I&&Le(I,g,h,l),q&&Qe(h,l,g,"updated")},b)},ke=(l,h,g,b,y,x,E)=>{for(let _=0;_<h.length;_++){const S=l[_],v=h[_],q=S.el&&(S.type===Ie||!Ct(S,v)||S.shapeFlag&70)?f(S.el):g;T(S,v,q,null,b,y,x,E,!0)}},De=(l,h,g,b,y,x,E)=>{if(g!==b){if(g!==X)for(const _ in g)!Qt(_)&&!(_ in b)&&o(l,_,g[_],null,E,h.children,y,x,R);for(const _ in b){if(Qt(_))continue;const S=b[_],v=g[_];S!==v&&_!=="value"&&o(l,_,v,S,E,h.children,y,x,R)}"value"in b&&o(l,"value",g.value,b.value)}},Ce=(l,h,g,b,y,x,E,_,S)=>{const v=h.el=l?l.el:c(""),q=h.anchor=l?l.anchor:c("");let{patchFlag:k,dynamicChildren:O,slotScopeIds:I}=h;I&&(_=_?_.concat(I):I),l==null?(s(v,g,b),s(q,g,b),Re(h.children,g,q,y,x,E,_,S)):k>0&&k&64&&O&&l.dynamicChildren?(ke(l.dynamicChildren,O,g,y,x,E,_),(h.key!=null||y&&h===y.subTree)&&no(l,h,!0)):V(l,h,g,q,y,x,E,_,S)},lt=(l,h,g,b,y,x,E,_,S)=>{h.slotScopeIds=_,l==null?h.shapeFlag&512?y.ctx.activate(h,g,b,E,S):Ye(h,g,b,y,x,E,S):Rt(l,h,S)},Ye=(l,h,g,b,y,x,E)=>{const _=l.component=gl(l,b,y);if(Ji(l)&&(_.ctx.renderer=$),bl(_),_.asyncDep){if(y&&y.registerDep(_,ee),!l.el){const S=_.subTree=pe(it);P(null,S,h,g)}return}ee(_,l,h,g,y,x,E)},Rt=(l,h,g)=>{const b=h.component=l.component;if(kn(l,h,g))if(b.asyncDep&&!b.asyncResolved){J(b,h,g);return}else b.next=h,wn(b.update),b.update();else h.el=l.el,b.vnode=h},ee=(l,h,g,b,y,x,E)=>{const _=()=>{if(l.isMounted){let{next:q,bu:k,u:O,parent:I,vnode:N}=l,Q=q,Y;Xe(l,!1),q?(q.el=N.el,J(l,q,E)):q=N,k&&Sr(k),(Y=q.props&&q.props.onVnodeBeforeUpdate)&&Le(Y,I,q,N),Xe(l,!0);const te=Ar(l),ve=l.subTree;l.subTree=te,T(ve,te,f(ve.el),A(ve),l,y,x),q.el=te.el,Q===null&&Cn(l,te.el),O&&de(O,y),(Y=q.props&&q.props.onVnodeUpdated)&&de(()=>Le(Y,I,q,N),y)}else{let q;const{el:k,props:O}=h,{bm:I,m:N,parent:Q}=l,Y=Zt(h);if(Xe(l,!1),I&&Sr(I),!Y&&(q=O&&O.onVnodeBeforeMount)&&Le(q,Q,h),Xe(l,!0),k&&D){const te=()=>{l.subTree=Ar(l),D(k,l.subTree,l,y,null)};Y?h.type.__asyncLoader().then(()=>!l.isUnmounted&&te()):te()}else{const te=l.subTree=Ar(l);T(null,te,g,b,l,y,x),h.el=te.el}if(N&&de(N,y),!Y&&(q=O&&O.onVnodeMounted)){const te=h;de(()=>Le(q,Q,te),y)}(h.shapeFlag&256||Q&&Zt(Q.vnode)&&Q.vnode.shapeFlag&256)&&l.a&&de(l.a,y),l.isMounted=!0,h=g=b=null}},S=l.effect=new rs(_,()=>cs(v),l.scope),v=l.update=()=>S.run();v.id=l.uid,Xe(l,!0),v()},J=(l,h,g)=>{h.component=l;const b=l.vnode.props;l.vnode=h,l.next=null,Gn(l,h.props,b,g),rl(l,h.children,g),At(),Ts(),Et()},V=(l,h,g,b,y,x,E,_,S=!1)=>{const v=l&&l.children,q=l?l.shapeFlag:0,k=h.children,{patchFlag:O,shapeFlag:I}=h;if(O>0){if(O&128){Je(v,k,g,b,y,x,E,_,S);return}else if(O&256){me(v,k,g,b,y,x,E,_,S);return}}I&8?(q&16&&R(v,y,x),k!==v&&u(g,k)):q&16?I&16?Je(v,k,g,b,y,x,E,_,S):R(v,y,x,!0):(q&8&&u(g,""),I&16&&Re(k,g,b,y,x,E,_,S))},me=(l,h,g,b,y,x,E,_,S)=>{l=l||pt,h=h||pt;const v=l.length,q=h.length,k=Math.min(v,q);let O;for(O=0;O<k;O++){const I=h[O]=S?Be(h[O]):qe(h[O]);T(l[O],I,g,null,y,x,E,_,S)}v>q?R(l,y,x,!0,!1,k):Re(h,g,b,y,x,E,_,S,k)},Je=(l,h,g,b,y,x,E,_,S)=>{let v=0;const q=h.length;let k=l.length-1,O=q-1;for(;v<=k&&v<=O;){const I=l[v],N=h[v]=S?Be(h[v]):qe(h[v]);if(Ct(I,N))T(I,N,g,null,y,x,E,_,S);else break;v++}for(;v<=k&&v<=O;){const I=l[k],N=h[O]=S?Be(h[O]):qe(h[O]);if(Ct(I,N))T(I,N,g,null,y,x,E,_,S);else break;k--,O--}if(v>k){if(v<=O){const I=O+1,N=I<q?h[I].el:b;for(;v<=O;)T(null,h[v]=S?Be(h[v]):qe(h[v]),g,N,y,x,E,_,S),v++}}else if(v>O)for(;v<=k;)ue(l[v],y,x,!0),v++;else{const I=v,N=v,Q=new Map;for(v=N;v<=O;v++){const fe=h[v]=S?Be(h[v]):qe(h[v]);fe.key!=null&&Q.set(fe.key,v)}let Y,te=0;const ve=O-N+1;let ct=!1,ms=0;const kt=new Array(ve);for(v=0;v<ve;v++)kt[v]=0;for(v=I;v<=k;v++){const fe=l[v];if(te>=ve){ue(fe,y,x,!0);continue}let Te;if(fe.key!=null)Te=Q.get(fe.key);else for(Y=N;Y<=O;Y++)if(kt[Y-N]===0&&Ct(fe,h[Y])){Te=Y;break}Te===void 0?ue(fe,y,x,!0):(kt[Te-N]=v+1,Te>=ms?ms=Te:ct=!0,T(fe,h[Te],g,null,y,x,E,_,S),te++)}const ys=ct?nl(kt):pt;for(Y=ys.length-1,v=ve-1;v>=0;v--){const fe=N+v,Te=h[fe],vs=fe+1<q?h[fe+1].el:b;kt[v]===0?T(null,Te,g,vs,y,x,E,_,S):ct&&(Y<0||v!==ys[Y]?ye(Te,g,vs,2):Y--)}}},ye=(l,h,g,b,y=null)=>{const{el:x,type:E,transition:_,children:S,shapeFlag:v}=l;if(v&6){ye(l.component.subTree,h,g,b);return}if(v&128){l.suspense.move(h,g,b);return}if(v&64){E.move(l,h,g,$);return}if(E===Ie){s(x,h,g);for(let k=0;k<S.length;k++)ye(S[k],h,g,b);s(l.anchor,h,g);return}if(E===Rr){U(l,h,g);return}if(b!==2&&v&1&&_)if(b===0)_.beforeEnter(x),s(x,h,g),de(()=>_.enter(x),y);else{const{leave:k,delayLeave:O,afterLeave:I}=_,N=()=>s(x,h,g),Q=()=>{k(x,()=>{N(),I&&I()})};O?O(x,N,Q):Q()}else s(x,h,g)},ue=(l,h,g,b=!1,y=!1)=>{const{type:x,props:E,ref:_,children:S,dynamicChildren:v,shapeFlag:q,patchFlag:k,dirs:O}=l;if(_!=null&&Br(_,null,g,l,!0),q&256){h.ctx.deactivate(l);return}const I=q&1&&O,N=!Zt(l);let Q;if(N&&(Q=E&&E.onVnodeBeforeUnmount)&&Le(Q,h,l),q&6)m(l.component,g,b);else{if(q&128){l.suspense.unmount(g,b);return}I&&Qe(l,null,h,"beforeUnmount"),q&64?l.type.remove(l,h,g,y,$,b):v&&(x!==Ie||k>0&&k&64)?R(v,h,g,!1,!0):(x===Ie&&k&384||!y&&q&16)&&R(S,h,g),b&&at(l)}(N&&(Q=E&&E.onVnodeUnmounted)||I)&&de(()=>{Q&&Le(Q,h,l),I&&Qe(l,null,h,"unmounted")},g)},at=l=>{const{type:h,el:g,anchor:b,transition:y}=l;if(h===Ie){Bt(g,b);return}if(h===Rr){H(l);return}const x=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(l.shapeFlag&1&&y&&!y.persisted){const{leave:E,delayLeave:_}=y,S=()=>E(g,x);_?_(l.el,x,S):S()}else x()},Bt=(l,h)=>{let g;for(;l!==h;)g=p(l),i(l),l=g;i(h)},m=(l,h,g)=>{const{bum:b,scope:y,update:x,subTree:E,um:_}=l;b&&Sr(b),y.stop(),x&&(x.active=!1,ue(E,l,h,g)),_&&de(_,h),de(()=>{l.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},R=(l,h,g,b=!1,y=!1,x=0)=>{for(let E=x;E<l.length;E++)ue(l[E],h,g,b,y)},A=l=>l.shapeFlag&6?A(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),L=(l,h,g)=>{l==null?h._vnode&&ue(h._vnode,null,null,!0):T(h._vnode||null,l,h,null,null,null,g),Ts(),Bi(),h._vnode=l},$={p:T,um:ue,m:ye,r:at,mt:Ye,mc:Re,pc:V,pbc:ke,n:A,o:e};let Z,D;return t&&([Z,D]=t($)),{render:L,hydrate:Z,createApp:Xn(L,Z)}}function Xe({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function ol(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function no(e,t,r=!1){const s=e.children,i=t.children;if(z(s)&&z(i))for(let o=0;o<s.length;o++){const n=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=Be(i[o]),c.el=n.el),r||no(n,c)),c.type===mr&&(c.el=n.el)}}function nl(e){const t=e.slice(),r=[0];let s,i,o,n,c;const a=e.length;for(s=0;s<a;s++){const d=e[s];if(d!==0){if(i=r[r.length-1],e[i]<d){t[s]=i,r.push(s);continue}for(o=0,n=r.length-1;o<n;)c=o+n>>1,e[r[c]]<d?o=c+1:n=c;d<e[r[o]]&&(o>0&&(t[s]=r[o-1]),r[o]=s)}}for(o=r.length,n=r[o-1];o-- >0;)r[o]=n,n=t[n];return r}const ll=e=>e.__isTeleport,Ie=Symbol.for("v-fgt"),mr=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Rr=Symbol.for("v-stc"),Mt=[];let xe=null;function lo(e=!1){Mt.push(xe=e?null:[])}function al(){Mt.pop(),xe=Mt[Mt.length-1]||null}let jt=1;function js(e){jt+=e}function ao(e){return e.dynamicChildren=jt>0?xe||pt:null,al(),jt>0&&xe&&xe.push(e),e}function Pc(e,t,r,s,i,o){return ao(ho(e,t,r,s,i,o,!0))}function co(e,t,r,s,i){return ao(pe(e,t,r,s,i,!0))}function Ur(e){return e?e.__v_isVNode===!0:!1}function Ct(e,t){return e.type===t.type&&e.key===t.key}const yr="__vInternal",uo=({key:e})=>e??null,er=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||ae(e)||j(e)?{i:Me,r:e,k:t,f:!!r}:e:null);function ho(e,t=null,r=null,s=0,i=null,o=e===Ie?0:1,n=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&uo(t),ref:t&&er(t),scopeId:gr,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Me};return c?(hs(a,r),o&128&&e.normalize(a)):r&&(a.shapeFlag|=se(r)?8:16),jt>0&&!n&&xe&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&xe.push(a),a}const pe=cl;function cl(e,t=null,r=null,s=0,i=null,o=!1){if((!e||e===Tn)&&(e=it),Ur(e)){const c=wt(e,t,!0);return r&&hs(c,r),jt>0&&!o&&xe&&(c.shapeFlag&6?xe[xe.indexOf(e)]=c:xe.push(c)),c.patchFlag|=-2,c}if(wl(e)&&(e=e.__vccOpts),t){t=ul(t);let{class:c,style:a}=t;c&&!se(c)&&(t.class=es(c)),G(a)&&(Hi(a)&&!z(a)&&(a=ie({},a)),t.style=Gr(a))}const n=se(e)?1:Ln(e)?128:ll(e)?64:G(e)?4:j(e)?2:0;return ho(e,t,r,s,i,n,o,!0)}function ul(e){return e?Hi(e)||yr in e?ie({},e):e:null}function wt(e,t,r=!1){const{props:s,ref:i,patchFlag:o,children:n}=e,c=t?hl(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&uo(c),ref:t&&t.ref?r&&i?z(i)?i.concat(er(t)):[i,er(t)]:er(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function dl(e=" ",t=0){return pe(mr,null,e,t)}function zc(e="",t=!1){return t?(lo(),co(it,null,e)):pe(it,null,e)}function qe(e){return e==null||typeof e=="boolean"?pe(it):z(e)?pe(Ie,null,e.slice()):typeof e=="object"?Be(e):pe(mr,null,String(e))}function Be(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function hs(e,t){let r=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(z(t))r=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),hs(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!(yr in t)?t._ctx=Me:i===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Me},r=32):(t=String(t),s&64?(r=16,t=[dl(t)]):r=8);e.children=t,e.shapeFlag|=r}function hl(...e){const t={};for(let r=0;r<e.length;r++){const s=e[r];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=es([t.class,s.class]));else if(i==="style")t.style=Gr([t.style,s.style]);else if(ar(i)){const o=t[i],n=s[i];n&&o!==n&&!(z(o)&&o.includes(n))&&(t[i]=o?[].concat(o,n):n)}else i!==""&&(t[i]=s[i])}return t}function Le(e,t,r,s=null){Se(e,t,7,[r,s])}const fl=eo();let pl=0;function gl(e,t,r){const s=e.type,i=(t?t.appContext:e.appContext)||fl,o={uid:pl++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new xi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ro(s,i),emitsOptions:Wi(s,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:s.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Sn.bind(null,o),e.ce&&e.ce(o),o}let le=null,fs,ut,Ds="__VUE_INSTANCE_SETTERS__";(ut=Mr()[Ds])||(ut=Mr()[Ds]=[]),ut.push(e=>le=e),fs=e=>{ut.length>1?ut.forEach(t=>t(e)):ut[0](e)};const _t=e=>{fs(e),e.scope.on()},rt=()=>{le&&le.scope.off(),fs(null)};function fo(e){return e.vnode.shapeFlag&4}let Dt=!1;function bl(e,t=!1){Dt=t;const{props:r,children:s}=e.vnode,i=fo(e);Zn(e,r,i,t),tl(e,s);const o=i?ml(e,t):void 0;return Dt=!1,o}function ml(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=ns(new Proxy(e.ctx,Un));const{setup:s}=r;if(s){const i=e.setupContext=s.length>1?vl(e):null;_t(e),At();const o=Ke(s,e,0,[e.props,i]);if(Et(),rt(),bi(o)){if(o.then(rt,rt),t)return o.then(n=>{Ns(e,n,t)}).catch(n=>{fr(n,e,0)});e.asyncDep=o}else Ns(e,o,t)}else po(e,t)}function Ns(e,t,r){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=ji(t)),po(e,r)}let $s;function po(e,t,r){const s=e.type;if(!e.render){if(!t&&$s&&!s.render){const i=s.template||us(e).template;if(i){const{isCustomElement:o,compilerOptions:n}=e.appContext.config,{delimiters:c,compilerOptions:a}=s,d=ie(ie({isCustomElement:o,delimiters:c},n),a);s.render=$s(i,d)}}e.render=s.render||He}{_t(e),At();try{Wn(e)}finally{Et(),rt()}}}function yl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,r){return he(e,"get","$attrs"),t[r]}}))}function vl(e){const t=r=>{e.exposed=r||{}};return{get attrs(){return yl(e)},slots:e.slots,emit:e.emit,expose:t}}function ps(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ji(ns(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Ot)return Ot[r](e)},has(t,r){return r in t||r in Ot}}))}function wl(e){return j(e)&&"__vccOpts"in e}const ge=(e,t)=>mn(e,t,Dt);function go(e,t,r){const s=arguments.length;return s===2?G(t)&&!z(t)?Ur(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&Ur(r)&&(r=[r]),pe(e,t,r))}const _l=Symbol.for("v-scx"),xl=()=>Ae(_l),Sl="3.3.9",Al="http://www.w3.org/2000/svg",Ge=typeof document<"u"?document:null,Bs=Ge&&Ge.createElement("template"),El={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,s)=>{const i=t?Ge.createElementNS(Al,e):Ge.createElement(e,r?{is:r}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,s,i,o){const n=r?r.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===o||!(i=i.nextSibling)););else{Bs.innerHTML=s?`<svg>${e}</svg>`:e;const c=Bs.content;if(s){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,r)}return[n?n.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Rl=Symbol("_vtc");function kl(e,t,r){const s=e[Rl];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Cl=Symbol("_vod");function Tl(e,t,r){const s=e.style,i=se(r);if(r&&!i){if(t&&!se(t))for(const o in t)r[o]==null&&Wr(s,o,"");for(const o in r)Wr(s,o,r[o])}else{const o=s.display;i?t!==r&&(s.cssText=r):t&&e.removeAttribute("style"),Cl in e&&(s.display=o)}}const Us=/\s*!important$/;function Wr(e,t,r){if(z(r))r.forEach(s=>Wr(e,t,s));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const s=Ll(e,t);Us.test(r)?e.setProperty(ot(s),r.replace(Us,""),"important"):e[s]=r}}const Ws=["Webkit","Moz","ms"],kr={};function Ll(e,t){const r=kr[t];if(r)return r;let s=yt(t);if(s!=="filter"&&s in e)return kr[t]=s;s=vi(s);for(let i=0;i<Ws.length;i++){const o=Ws[i]+s;if(o in e)return kr[t]=o}return t}const Ks="http://www.w3.org/1999/xlink";function ql(e,t,r,s,i){if(s&&t.startsWith("xlink:"))r==null?e.removeAttributeNS(Ks,t.slice(6,t.length)):e.setAttributeNS(Ks,t,r);else{const o=No(t);r==null||o&&!wi(r)?e.removeAttribute(t):e.setAttribute(t,o?"":r)}}function Ol(e,t,r,s,i,o,n){if(t==="innerHTML"||t==="textContent"){s&&n(s,i,o),e[t]=r??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=r;const d=c==="OPTION"?e.getAttribute("value"):e.value,u=r??"";d!==u&&(e.value=u),r==null&&e.removeAttribute(t);return}let a=!1;if(r===""||r==null){const d=typeof e[t];d==="boolean"?r=wi(r):r==null&&d==="string"?(r="",a=!0):d==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(t)}function Ml(e,t,r,s){e.addEventListener(t,r,s)}function Hl(e,t,r,s){e.removeEventListener(t,r,s)}const Vs=Symbol("_vei");function Pl(e,t,r,s,i=null){const o=e[Vs]||(e[Vs]={}),n=o[t];if(s&&n)n.value=s;else{const[c,a]=zl(t);if(s){const d=o[t]=jl(s,i);Ml(e,c,d,a)}else n&&(Hl(e,c,n,a),o[t]=void 0)}}const Ys=/(?:Once|Passive|Capture)$/;function zl(e){let t;if(Ys.test(e)){t={};let s;for(;s=e.match(Ys);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),t]}let Cr=0;const Il=Promise.resolve(),Fl=()=>Cr||(Il.then(()=>Cr=0),Cr=Date.now());function jl(e,t){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;Se(Dl(s,r.value),t,5,[s])};return r.value=e,r.attached=Fl(),r}function Dl(e,t){if(z(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Js=/^on[a-z]/,Nl=(e,t,r,s,i=!1,o,n,c,a)=>{t==="class"?kl(e,s,i):t==="style"?Tl(e,r,s):ar(t)?Qr(t)||Pl(e,t,r,s,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$l(e,t,s,i))?Ol(e,t,s,o,n,c,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ql(e,t,s,i))};function $l(e,t,r,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Js.test(t)&&j(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Js.test(t)&&se(r)?!1:t in e}const Bl={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ic=(e,t)=>r=>{if(!("key"in r))return;const s=ot(r.key);if(t.some(i=>i===s||Bl[i]===s))return e(r)},Ul=ie({patchProp:Nl},El);let Qs;function Wl(){return Qs||(Qs=sl(Ul))}const Kl=(...e)=>{const t=Wl().createApp(...e),{mount:r}=t;return t.mount=s=>{const i=Vl(s);if(!i)return;const o=t._component;!j(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const n=r(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},t};function Vl(e){return se(e)?document.querySelector(e):e}var Yl=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Jl=Symbol();var Xs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Xs||(Xs={}));function Ql(){const e=$o(!0),t=e.run(()=>Ii({}));let r=[],s=[];const i=ns({install(o){i._a=o,o.provide(Jl,i),o.config.globalProperties.$pinia=i,s.forEach(n=>r.push(n)),s=[]},use(o){return!this._a&&!Yl?s.push(o):r.push(o),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return i}const tr={initColor:function(s="#1abc9c"){var t=parseInt(s.substring(1,3),16),r=parseInt(s.substring(3,5),16),s=parseInt(s.substring(5,7),16),i=document.createElement("style");i.innerHTML=`body{
			--wcp-base: rgba(${t}, ${r}, ${s}, 1);
            --wcp-base80percent: rgba(${t}, ${r}, ${s}, .8);
            --wcp-base10percent: rgba(${t}, ${r}, ${s}, .1);
		}`,document.body.append(i)},isEmpty:function(e){return e instanceof Array?e.length==0:e instanceof Object?Object.keys(e).length==0:void 0},_cloneDeep(e){let t=null;switch(Object.prototype.toString.call(e).split(" ")[1].split("]")[0]){case"Object":for(var r in t={},e)t[r]=this._cloneDeep(e[r]);break;case"Array":t=[];for(let s=0;s<e.length;s++)t[s]=this._cloneDeep(e[s]);break;case"Map":t=new Map,e.forEach((s,i)=>{t.set(i,this._cloneDeep(s))});break;case"WeakMap":t=new WeakMap,e.forEach((s,i)=>{t.set(i,this._cloneDeep(s))});break;case"Set":t=new Set,e.forEach(s=>{t.add(this._cloneDeep(s))});break;case"Date":t=new Date(e.valueOf());break;default:t=e}return t},cloneDeep(){let e,t,r,s,i,o,n=arguments[0]||{},c=1,a=arguments.length;for(typeof n!="object"&&typeof n!="function"&&(n={}),c===a&&(n=this,c--);c<a;c++)if((e=arguments[c])!=null)for(t in e)s=e[t],t!=="__proto__"&&n!==s&&(s&&(s.toString()==="[object Object]"||(i=Array.isArray(s)))?(r=n[t],o=i&&!Array.isArray(r)?[]:!i&&!r instanceof Object?{}:r,i=!1,this.typeof(n)=="Map"?(n=new Map).set(t,this.cloneDeep(o,s)):this.typeof(n)=="WeakMap"?(n=new WeakMap).set(t,this.cloneDeep(o,s)):this.typeof(n)=="Set"?(n=new Set)[t].add(this.cloneDeep(o,s)):this.typeof(n)=="Date"?n[t]=new Date(this.cloneDeep(o,s).valueOf()):n[t]=this.cloneDeep(o,s)):s!==void 0&&(n[t]=s));return n},typeof:function(e){return Object.prototype.toString.call(e).split(" ")[1].split("]")[0]},getCookie(e){return e=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")),e?decodeURIComponent(e[1]):void 0},setCookie(e,t,r={}){(r={path:"/",...r}).expires instanceof Date&&(r.expires=r.expires.toUTCString());let s=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var i in r)s+="; "+i,i=r[i],i!==!0&&(s+="="+i);document.cookie=s},deleteCookie(e){this.setCookie(e,"",{"max-age":-1})}};class Xl{static setOptions(t){tr.cloneDeep(this._options,t)}static _initOption(t){var r={};if(tr.cloneDeep(r,this._options,t),r.data&&!tr.isEmpty(r.data))if(r.method=="get"){let s="";for(const i in r.data)s+=i+"="+r.data[i]+"&";s=s.slice(0,-1),r.url+="?"+s}else r.method=="post"&&{}.toString.call(r.data)=="[object FormData]"?r.body=r.data:r.body=JSON.stringify(r.data);return r}static post(t){return t.method="post",t=this._initOption(t),fetch(t.url,t)}static delete(t){return t.method="delete",t=this._initOption(t),fetch(t.url,t)}static put(t){return t.method="put",t=this._initOption(t),fetch(t.url,t)}static get(t){return t.method="get",t=this._initOption(t),fetch(t.url,t)}}ws(Xl,"_options",{headers:{"Content-Type":"application/json;charset=utf-8"}});class Zl extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","color","disabled","size","full"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("type")&&(t=this.getAttribute("type"),r.querySelector("#btn").classList.add(t)),this.hasAttribute("color")&&(t=this.getAttribute("color"),r.querySelector("#btn").classList.add(t)),this.hasAttribute("disabled")&&r.querySelector("#btn").classList.add("disabled"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#btn").classList.add(t))}_reset(){this.shadowRoot.querySelector("#btn").classList.value="btn"}}customElements.define("w-btn",Zl);class Gl extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["checked","size","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#checkbox").classList.add(t)),this.hasAttribute("checked")&&r.querySelector("#checkbox").classList.add("checked"),this.hasAttribute("disabled")&&r.querySelector("#checkbox").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#checkbox").classList.value="checkbox"}_event(){this.shadowRoot.querySelector("#checkbox").addEventListener("change",()=>{this.hasAttribute("disabled")||(this.hasAttribute("checked")?this.removeAttribute("checked"):this.setAttribute("checked",""),this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0})))})}}customElements.define("w-checkbox",Gl);class ea extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("width")&&(t=this.getAttribute("width"),r.querySelector("#wrap").style.width=t),this.hasAttribute("height")&&(t=this.getAttribute("height"),r.querySelector("#wrap").style.height=t),this.hasAttribute("show")&&r.querySelector("#dialog").classList.add("show")}_reset(){this.shadowRoot.querySelector("#dialog").classList.value="dialog"}_event(){this.shadowRoot.querySelector("#dialog").addEventListener("click",t=>{t.target.id=="dialog"&&this.removeAttribute("show")})}}customElements.define("w-dialog",ea);class ta extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","maxlength","min","max","step","type","placeholder","disabled","size","error"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("value")&&(t=this.getAttribute("value"),r.querySelector("#input").value=t),this.hasAttribute("maxlength")&&(t=this.getAttribute("maxlength"),r.querySelector("#input").setAttribute("maxlength",t)),this.hasAttribute("min")&&(t=this.getAttribute("min"),r.querySelector("#input").min=t),this.hasAttribute("max")&&(t=this.getAttribute("max"),r.querySelector("#input").max=t),this.hasAttribute("step")&&(t=this.getAttribute("step"),r.querySelector("#input").step=t),this.hasAttribute("type")&&(t=this.getAttribute("type"),r.querySelector("#input").type=t),this.hasAttribute("placeholder")&&(t=this.getAttribute("placeholder"),r.querySelector("#input").placeholder=t),this.hasAttribute("disabled")&&(r.querySelector("#input").disabled="disabled"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#input").classList.add(t)),this.hasAttribute("error")&&r.querySelector("#input").classList.add("error")}_reset(){this.shadowRoot.querySelector("#input").classList.value="input"}_event(){this.shadowRoot.querySelector("#input").addEventListener("input",t=>{t=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))})}}customElements.define("w-input",ta);class ra extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.defaultImg=null,this.lazyArr=[],this.observer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot,this.hasAttribute("width")&&(this.style.width=this.getAttribute("width")),this.hasAttribute("height")&&(this.style.height=this.getAttribute("height"))}_reset(){this.shadowRoot}_event(){let t=this.shadowRoot;t.addEventListener("slotchange",r=>{this.lazyArr.length!=0&&this.lazyArr.forEach(s=>{this.observer.unobserve(s)}),this.lazyArr.length=0,t.querySelector("#slot").assignedElements().map(s=>{this.lazyArr.push(...Array.from(s.querySelectorAll("img"))),this.lazyArr.push(...Array.from(s.querySelectorAll("video"))),this.lazyArr.push(...Array.from(s.querySelectorAll("w-player")))}),this.lazyArr.forEach(s=>{this.observer.observe(s)})}),this.observer=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&((s=s.target).hasAttribute("lazy-src")&&s.setAttribute("src",s.getAttribute("lazy-src")),this.observer.unobserve(s))})})}}customElements.define("w-lazy-loading",ra);class sa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["show"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("show")&&t.querySelector("#menu").classList.add("show")}_reset(){this.shadowRoot.querySelector("#menu").classList.value="menu"}_event(){this.shadowRoot}}customElements.define("w-menu",sa);class ia extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("disabled")&&t.querySelector("#menu-item").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#menu-item").classList.value="menu-item"}_event(){this.shadowRoot}}customElements.define("w-menu-item",ia);class oa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height","show"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("width")&&(t=this.getAttribute("width"),r.querySelector("#wrap").style.width=t),this.hasAttribute("height")&&(t=this.getAttribute("height"),r.querySelector("#wrap").style.height=t),this.hasAttribute("show")&&r.querySelector("#modal").classList.add("show")}_reset(){this.shadowRoot.querySelector("#modal").classList.value="modal"}_event(){this.shadowRoot.querySelector("#modal").addEventListener("click",t=>{t.target.id=="modal"&&this.removeAttribute("show")})}}customElements.define("w-modal",oa);class na extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.timer=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions()}static get observedAttributes(){return["type","position"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("type")&&(t=this.getAttribute("type"),r.querySelector("#msg").classList.add(t)),this.hasAttribute("position")?(t=this.getAttribute("position"),r.querySelector("#msg").classList.add(t)):r.querySelector("#msg").classList.add("top")}_reset(){this.shadowRoot.querySelector("#msg").classList.value="msg"}show(t,r=""){let s=this.shadowRoot;switch(this._setOptions(),s.querySelector("#content").innerHTML=t,r&&s.querySelector("#msg").classList.add(r),r){case"success":s.querySelector("#icon").innerHTML=s.querySelector("#icon-success").innerHTML;break;case"error":s.querySelector("#icon").innerHTML=s.querySelector("#icon-error").innerHTML;break;case"warning":s.querySelector("#icon").innerHTML=s.querySelector("#icon-warning").innerHTML;break;default:s.querySelector("#icon").innerHTML=s.querySelector("#icon-default").innerHTML}s.querySelector("#msg").classList.add("show");let i=2e3;this.hasAttribute("delay")&&(i=+this.getAttribute("delay")),this.timer||(this.timer=setTimeout(()=>{s.querySelector("#msg").classList.remove("show"),clearTimeout(this.timer),this.timer=null},i))}static init(s){var r={},s=(s&&Object.assign(r,s),document.createElement("w-msg"));return r.type&&s.setAttribute("type",r.type),r.position&&s.setAttribute("position",r.position),r.delay&&s.setAttribute("delay",r.delay),document.body.append(s),s}}customElements.define("w-msg",na);class la extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this._drag=!1,this._focus=!1,this.accept=[".mp4",".webm",".ogg",".mp3"]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["src","poster"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){var t=this.shadowRoot,r=this.hasAttribute("src")?this.getAttribute("src"):"",s=this.hasAttribute("poster")?this.getAttribute("poster"):"";this._reset(),t.querySelector("#video").src=r,t.querySelector("#video").poster=s}_event(){let t=this.shadowRoot;t.querySelector("#control-main").addEventListener("click",r=>{t.querySelector("#video").paused?this.play():this.pause()}),t.querySelector("#control-main").addEventListener("dblclick",r=>{this._fullscreenHandler(r)}),t.querySelector("#video").addEventListener("loadedmetadata",r=>{t.querySelector("#time-total").innerHTML=this._timeFormat(t.querySelector("#video").duration)}),t.querySelector("#video").addEventListener("error",r=>{}),t.querySelector("#video").addEventListener("timeupdate",r=>{t.querySelector("#time-cur").innerHTML=this._timeFormat(t.querySelector("#video").currentTime);var s=t.querySelector("#video").currentTime/t.querySelector("#video").duration*100+"%";t.querySelector("#timeline").style.width=s}),t.querySelector("#video").addEventListener("ended",r=>{t.querySelector("#video").pause(),t.querySelector(".icon-play").classList.remove("hide")}),t.querySelector("#progress").addEventListener("pointerdown",r=>{t.querySelector("#progress").setPointerCapture(r.pointerId),this._drag=!0,t.querySelector("#timeline").classList.add("show-after"),r=this._getRatio(r.pageX),t.querySelector("#video").currentTime=t.querySelector("#video").duration*r}),t.querySelector("#progress").addEventListener("pointermove",r=>{this._drag&&(r=this._getRatio(r.pageX),t.querySelector("#timeline").style.width=100*r+"%",r=t.querySelector("#video").duration*r||0,t.querySelector("#time-cur").innerHTML=this._timeFormat(r),t.querySelector("#video").currentTime=r)}),t.querySelector("#progress").addEventListener("pointerup",r=>{this._drag=!1,t.querySelector("#timeline").classList.remove("show-after")}),document.addEventListener("keydown",r=>{var s;this._focus&&(r.preventDefault(),r.key=="ArrowLeft"?(t.querySelector("#video").currentTime-=10,t.querySelector("#video").currentTime<0&&(t.querySelector("#video").currentTime=0),t.querySelector("#time-cur").innerHTML=this._timeFormat(t.querySelector("#video").currentTime),s=t.querySelector("#video").currentTime/t.querySelector("#video").duration*100+"%",t.querySelector("#timeline").style.width=s):r.key=="ArrowRight"?(t.querySelector("#video").currentTime+=10,t.querySelector("#video").currentTime>t.querySelector("#video").duration&&(t.querySelector("#video").currentTime=t.querySelector("#video").duration),t.querySelector("#time-cur").innerHTML=this._timeFormat(t.querySelector("#video").currentTime),s=t.querySelector("#video").currentTime/t.querySelector("#video").duration*100+"%",t.querySelector("#timeline").style.width=s):r.key==" "&&(t.querySelector("#video").paused?this.play():this.pause()))}),t.querySelector("#web-player").addEventListener("contextmenu",r=>{r.preventDefault(),this._showContextmenu(r)}),t.querySelector("#web-player").addEventListener("click",r=>{this._hideContextmenu()}),t.querySelector("#openfile").addEventListener("click",r=>{t.querySelector("#file").dispatchEvent(new MouseEvent("click"))}),t.querySelector("#file").addEventListener("change",r=>{var s=t.querySelector("#file").files[0];let i=!1;for(let o=0;o<this.accept.length;o++)if(s.name.endsWith(this.accept[o])){i=!0;break}i?(this._reset(),t.querySelector("#video").src=URL.createObjectURL(s),this.play()):alert("file not accept")}),t.querySelector("#menu-list-item-github").addEventListener("click",r=>{window.open("https://github.com/zingercn","_blank")}),t.querySelector("#web-player").addEventListener("focus",r=>{this._focus=!0}),t.querySelector("#web-player").addEventListener("blur",r=>{this._focus=!1,this._hideContextmenu()})}play(){var t=this.shadowRoot;t.querySelector(".icon-play").classList.add("hide"),t.querySelector("#video").play()}pause(){var t=this.shadowRoot;t.querySelector(".icon-play").classList.remove("hide"),t.querySelector("#video").pause()}_fullscreenHandler(t){var r=this.shadowRoot;navigator.userAgent.includes("Mobile")?r.querySelector("#web-player").classList.toggle("full"):document.fullscreenElement?document.exitFullscreen():r.querySelector("#web-player").requestFullscreen()}_reset(){var t=this.shadowRoot;t.querySelector("#video").src="",t.querySelector("#video").poster="",t.querySelector("#timeline").style.width=0,t.querySelector("#time-total").innerHTML=this._timeFormat(0),t.querySelector("#time-cur").innerHTML=this._timeFormat(0),t.querySelector("#video").pause(),t.querySelector(".icon-play").classList.remove("hide")}_hideContextmenu(){this.shadowRoot.querySelector("#contextmenu").classList.add("hide")}_showContextmenu(t){var r=this.shadowRoot;r.querySelector("#contextmenu").classList.remove("hide"),r.querySelector("#contextmenu").style.left=t.pageX-r.querySelector("#web-player").getBoundingClientRect().left-document.documentElement.scrollLeft+"px",r.querySelector("#contextmenu").style.top=t.pageY-r.querySelector("#web-player").getBoundingClientRect().top-document.documentElement.scrollTop+"px"}_getRatio(t){var r=this.shadowRoot;let s=(t-(r.querySelector("#progress").getBoundingClientRect().left-document.documentElement.scrollLeft))/r.querySelector("#progress").scrollWidth;return s=(s=1<s?1:s)<0?0:s}_timeFormat(t){t=parseInt(t,10);let r=Math.floor(t/3600),s=Math.floor((t-3600*r)/60),i=t-3600*r-60*s;return r<10&&(r="0"+r),s<10&&(s="0"+s),i<10&&(i="0"+i),r+":"+s+":"+i}}customElements.define("w-player",la);class aa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["size","checked","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("checked")&&r.querySelector("#radio").classList.add("checked"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#radio").classList.add(t)),this.hasAttribute("disabled")&&r.querySelector("#radio").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#radio").classList.value="radio"}_event(){this.shadowRoot}}customElements.define("w-radio",aa);class ca extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){if(this._reset(),this.shadowRoot,this.hasAttribute("value")){let t=this.getAttribute("value");Array.from(this.children).forEach(r=>{t==r.getAttribute("value")?r.setAttribute("checked",""):r.removeAttribute("checked")})}}_reset(){this.shadowRoot}_event(){this.shadowRoot.addEventListener("click",t=>{this.hasAttribute("disabled")||t.target.tagName!="W-RADIO"||t.target.hasAttribute("disabled")||t.target.hasAttribute("checked")||(Array.from(this.children).forEach(r=>{r.removeAttribute("checked")}),t.target.setAttribute("checked",""),t=t.target.hasAttribute("value")?t.target.getAttribute("value"):null,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0})))})}}customElements.define("w-radios",ca);class ua extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.observer=null,this.lazyArr=[]}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}disconnectedCallback(){this.observer.disconnect()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot,this.hasAttribute("width")&&(this.style.width=this.getAttribute("width")),this.hasAttribute("height")&&(this.style.height=this.getAttribute("height"))}_reset(){this.shadowRoot}_event(){var t=this.shadowRoot;this.observer=new IntersectionObserver(r=>{r[0].isIntersecting&&this.dispatchEvent(new CustomEvent("change",{detail:{},bubbles:!0}))}),this.observer.observe(t.querySelector("#loading"))}}customElements.define("w-scroll-loading",ua);class da extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","disabled","size"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();let t=this.shadowRoot;var r;t.querySelector("#select").innerHTML="",t.querySelector("#slot").assignedElements().forEach(s=>{t.querySelector("#select").appendChild(s.cloneNode(!0))}),this.hasAttribute("value")&&(r=this.getAttribute("value"),t.querySelector("#select").value=r),this.hasAttribute("disabled")?t.querySelector("#select").setAttribute("disabled",""):t.querySelector("#select").removeAttribute("disabled"),this.hasAttribute("size")&&(r=this.getAttribute("size"),t.querySelector("#select").classList.add(r))}_reset(){this.shadowRoot.querySelector("#select").classList.value="select"}_event(){this.shadowRoot.querySelector("#select").addEventListener("change",t=>{t=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))})}}customElements.define("w-select",da);class ha extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["columns","hover","sticky","bordered","selected"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("columns")&&(t=this.getAttribute("columns"),r.querySelector("#row").style.gridTemplateColumns=t),this.hasAttribute("hover")&&r.querySelector("#row").classList.add("hover"),this.hasAttribute("sticky")&&r.querySelector("#row").classList.add("sticky"),this.hasAttribute("bordered")&&r.querySelector("#row").classList.add("bordered"),this.hasAttribute("selected")&&r.querySelector("#row").classList.add("selected")}_reset(){this.shadowRoot.querySelector("#row").classList.value="row"}_event(){this.shadowRoot}}customElements.define("w-table-row",ha);class fa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["col","row"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t;this.shadowRoot,this.hasAttribute("col")&&(t=this.getAttribute("col"),this.style.gridColumnStart="span "+t),this.hasAttribute("row")&&(t=this.getAttribute("row"),this.style.gridRowStart="span "+t)}_reset(){this.shadowRoot.querySelector("#item").classList.value="item"}_event(){this.shadowRoot}}customElements.define("w-table-item",fa);class pa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.data=null,this.column=null}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["data","column","height","sticky"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;if(this.hasAttribute("height")?(r=this.getAttribute("height"),t.querySelector("#table-container").style.height=r):t.querySelector("#table-container").style.height="",this.hasAttribute("sticky")?t.querySelector("#header").setAttribute("sticky",""):t.querySelector("#header").removeAttribute("sticky"),this.hasAttribute("column")){var r=JSON.parse(this.getAttribute("column"));this.column=r;let s="";s+=`<w-table-row columns="${this._getColumns()}" style="background-color:${getComputedStyle(this).backgroundColor}">`,this.column.forEach(i=>{s+=`
                    <w-table-item>${i.label}</w-table-item>
                `}),s+="</w-table-row>",t.querySelector("#header").innerHTML=s}if(this.hasAttribute("data")){r=JSON.parse(this.getAttribute("data")),this.data=r;let s="";this.data.forEach(i=>{s+=`<w-table-row hover bordered columns="${this._getColumns()}">`,Object.values(i).forEach(o=>{s+=`
                        <w-table-item>${o}</w-table-item>
                    `}),s+="</w-table-row>"}),t.querySelector("#body").innerHTML=s}}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_event(){this.shadowRoot}_getColumns(){let t="";return this.column&&this.column.forEach(r=>{r.width?t+=r.width+" ":t+="1fr "}),t}}customElements.define("w-table",pa);class ga extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super(),this.url=null,this.auth=null,this.pagination={cur:1,count:1,total:1}}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._initData(),this._event()}static get observedAttributes(){return["column","height","sticky","url","count","auth"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("column")&&t.querySelector("#table").setAttribute("column",this.getAttribute("column")),this.hasAttribute("height")?t.querySelector("#table").setAttribute("height",this.getAttribute("height")):t.querySelector("#table").removeAttribute("height"),this.hasAttribute("sticky")?t.querySelector("#table").setAttribute("sticky",""):t.querySelector("#table").removeAttribute("sticky"),this.hasAttribute("url")?this.url=this.getAttribute("url"):this.url=null,this.hasAttribute("count")?this.pagination.count=+this.getAttribute("count"):this.pagination.count=1,this.hasAttribute("auth")&&(this.auth=this.getAttribute("auth"))}_reset(){this.shadowRoot.querySelector("#table").classList.value="table"}_initData(){var t=this.shadowRoot;t.querySelector("#cur").innerHTML=this.pagination.cur,t.querySelector("#pre").classList.add("disabled"),t.querySelector("#next").classList.add("disabled"),this._fetchData()}_event(){let t=this.shadowRoot;t.querySelector("#pre").addEventListener("click",r=>{t.querySelector("#pre").classList.contains("disabled")||(t.querySelector("#next").classList.remove("disabled"),this.pagination.cur--,t.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur<=1&&t.querySelector("#pre").classList.add("disabled"),this._fetchData())}),t.querySelector("#next").addEventListener("click",r=>{t.querySelector("#next").classList.contains("disabled")||(t.querySelector("#pre").classList.remove("disabled"),this.pagination.cur++,t.querySelector("#cur").innerHTML=this.pagination.cur,this.pagination.cur>=this.pagination.total&&t.querySelector("#next").classList.add("disabled"),this._fetchData())}),t.querySelector("#cur").addEventListener("keypress",r=>{if(r.key=="Enter"){console.log("Enter"),t.querySelector("#cur").blur(),this.pagination.total!=1&&(t.querySelector("#pre").classList.remove("disabled"),t.querySelector("#next").classList.remove("disabled"));let s=+t.querySelector("#cur").innerHTML;s<=1&&(s=1,t.querySelector("#pre").classList.add("disabled")),s>=this.pagination.total&&(s=this.pagination.total,t.querySelector("#next").classList.add("disabled")),t.querySelector("#cur").innerHTML=s,this.pagination.cur!=s&&(this.pagination.cur=s,this._fetchData())}else if(!"1234567890".includes(r.key))return r.preventDefault(),r.defaultPrevented})}_fetchData(){this.shadowRoot;var t={headers:{"Content-Type":"application/json;charset=utf-8",Authorization:this.auth},method:"get"};fetch(`${this.url}?cur=${this.pagination.cur}&count=`+this.pagination.count,t).then(r=>r.json()).then(r=>{this.dispatchEvent(new CustomEvent("fetchData",{detail:{data:r},bubbles:!0}))}).catch(r=>{console.log(r)})}setData(t){var r=this.shadowRoot;r.querySelector("#table").setAttribute("data",JSON.stringify(t.data)),this.pagination.total=t.total||1,r.querySelector("#total").innerHTML=this.pagination.total,this.pagination.cur>=this.pagination.total?r.querySelector("#next").classList.add("disabled"):r.querySelector("#next").classList.remove("disabled")}resetTableData(){this.pagination.cur=1,this._initData()}}customElements.define("w-table-pagination",ga);class ba extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["active","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("active")&&t.querySelector("#tab").classList.add("active"),this.hasAttribute("disabled")&&t.querySelector("#tab").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#tab").classList.value="tab"}_event(){this.shadowRoot}}customElements.define("w-tab",ba);class ma extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return[""]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset(),this.shadowRoot}_reset(){this.shadowRoot.querySelector("#tabs").classList.value="tabs"}_event(){this.shadowRoot.querySelector("#tabs").addEventListener("click",t=>{t.target.tagName!="W-TAB"||t.target.hasAttribute("disabled")||t.target.hasAttribute("active")||(Array.from(this.children).forEach(r=>{r.removeAttribute("active")}),t.target.setAttribute("active",""),t=t.target.hasAttribute("value")?t.target.getAttribute("value"):null,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0})))})}}customElements.define("w-tabs",ma);class ya extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["value","placeholder","disabled","size","error"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("value")&&(t=this.getAttribute("value"),r.querySelector("#textarea").value=t),this.hasAttribute("placeholder")&&(t=this.getAttribute("placeholder"),r.querySelector("#textarea").placeholder=t),this.hasAttribute("disabled")&&(r.querySelector("#textarea").disabled="disabled"),this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#textarea").classList.add(t)),this.hasAttribute("error")&&r.querySelector("#textarea").classList.add("error")}_reset(){this.shadowRoot.querySelector("#textarea").classList.value="textarea"}_event(){this.shadowRoot.querySelector("#textarea").addEventListener("input",t=>{t=t.target.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))})}}customElements.define("w-textarea",ya);class va extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["on","size","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t,r=this.shadowRoot;this.hasAttribute("size")&&(t=this.getAttribute("size"),r.querySelector("#toggle").classList.add(t)),this.hasAttribute("on")&&r.querySelector("#toggle").classList.add("on"),this.hasAttribute("disabled")&&r.querySelector("#toggle").classList.add("disabled")}_reset(){this.shadowRoot.querySelector("#toggle").classList.value="toggle"}_event(){this.shadowRoot.querySelector("#toggle").addEventListener("click",()=>{if(!this.hasAttribute("disabled")){let t="off";t=this.hasAttribute("on")?(this.removeAttribute("on"),"off"):(this.setAttribute("on",""),"on"),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0}))}})}}customElements.define("w-toggle",va);class wa extends HTMLElement{_getStyle(){return`
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
        `}constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this._setHtml(),this._setOptions(),this._event()}static get observedAttributes(){return["url","name","multiple","accept","auth","disabled"]}attributeChangedCallback(t,r,s){this.shadowRoot&&this._setOptions()}_setHtml(){this.shadowRoot.innerHTML=this._getStyle()+this._getTemplate()}_setOptions(){this._reset();var t=this.shadowRoot;this.hasAttribute("url")?t.querySelector("#file").setAttribute("url",this.getAttribute("url")):t.querySelector("#file").setAttribute("url",""),this.hasAttribute("name")?t.querySelector("#file").setAttribute("name",this.getAttribute("name")):t.querySelector("#file").setAttribute("name","file"),this.hasAttribute("multiple")?t.querySelector("#file").setAttribute("multiple",""):t.querySelector("#file").removeAttribute("multiple"),this.hasAttribute("accept")?t.querySelector("#file").setAttribute("accept",this.getAttribute("accept")):t.querySelector("#file").removeAttribute("accept"),this.hasAttribute("auth")?t.querySelector("#file").setAttribute("auth",this.getAttribute("auth")):t.querySelector("#file").removeAttribute("auth"),this.hasAttribute("disabled")?t.querySelector("#file").setAttribute("disabled",""):t.querySelector("#file").removeAttribute("disabled")}_reset(){this.shadowRoot.querySelector("#file").classList.value="file"}_event(){let t=this.shadowRoot;t.addEventListener("click",r=>{t.querySelector("#file").dispatchEvent(new PointerEvent("click"))}),t.querySelector("#file").addEventListener("change",async r=>{try{var s=await fetch(t.querySelector("#file").getAttribute("url"),{headers:{Authorization:t.querySelector("#file").getAttribute("auth")},method:"post",cors:"cors",body:new FormData(t.querySelector("#form"))}),i=await s.json();this.dispatchEvent(new CustomEvent("change",{detail:{value:[...t.querySelector("#file").files],response:s,data:i},bubbles:!0}))}catch(o){this.dispatchEvent(new CustomEvent("change",{detail:{value:[...t.querySelector("#file").files],response:o,data:{msg:"error"}},bubbles:!0}))}t.querySelector("#file").value=""})}}customElements.define("w-upload",wa);/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ht=typeof window<"u";function _a(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const K=Object.assign;function Tr(e,t){const r={};for(const s in t){const i=t[s];r[s]=Ee(i)?i.map(e):e(i)}return r}const Ht=()=>{},Ee=Array.isArray,xa=/\/$/,Sa=e=>e.replace(xa,"");function Lr(e,t,r="/"){let s,i={},o="",n="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(s=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(s=s||t.slice(0,c),n=t.slice(c,t.length)),s=ka(s??t,r),{fullPath:s+(o&&"?")+o+n,path:s,query:i,hash:n}}function Aa(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Zs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ea(e,t,r){const s=t.matched.length-1,i=r.matched.length-1;return s>-1&&s===i&&xt(t.matched[s],r.matched[i])&&bo(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function xt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!Ra(e[r],t[r]))return!1;return!0}function Ra(e,t){return Ee(e)?Gs(e,t):Ee(t)?Gs(t,e):e===t}function Gs(e,t){return Ee(t)?e.length===t.length&&e.every((r,s)=>r===t[s]):e.length===1&&e[0]===t}function ka(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),s=e.split("/");let i=r.length-1,o,n;for(o=0;o<s.length;o++)if(n=s[o],n!==".")if(n==="..")i>1&&i--;else break;return r.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Nt;(function(e){e.pop="pop",e.push="push"})(Nt||(Nt={}));var Pt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Pt||(Pt={}));function Ca(e){if(!e)if(ht){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Sa(e)}const Ta=/^[^#]+#/;function La(e,t){return e.replace(Ta,"#")+t}function qa(e,t){const r=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-r.left-(t.left||0),top:s.top-r.top-(t.top||0)}}const vr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Oa(e){let t;if("el"in e){const r=e.el,s=typeof r=="string"&&r.startsWith("#"),i=typeof r=="string"?s?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!i)return;t=qa(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ei(e,t){return(history.state?history.state.position-t:-1)+e}const Kr=new Map;function Ma(e,t){Kr.set(e,t)}function Ha(e){const t=Kr.get(e);return Kr.delete(e),t}let Pa=()=>location.protocol+"//"+location.host;function mo(e,t){const{pathname:r,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){let c=i.includes(e.slice(o))?e.slice(o).length:1,a=i.slice(c);return a[0]!=="/"&&(a="/"+a),Zs(a,"")}return Zs(r,e)+s+i}function za(e,t,r,s){let i=[],o=[],n=null;const c=({state:p})=>{const w=mo(e,location),C=r.value,T=t.value;let F=0;if(p){if(r.value=w,t.value=p,n&&n===C){n=null;return}F=T?p.position-T.position:0}else s(w);i.forEach(P=>{P(r.value,C,{delta:F,type:Nt.pop,direction:F?F>0?Pt.forward:Pt.back:Pt.unknown})})};function a(){n=r.value}function d(p){i.push(p);const w=()=>{const C=i.indexOf(p);C>-1&&i.splice(C,1)};return o.push(w),w}function u(){const{history:p}=window;p.state&&p.replaceState(K({},p.state,{scroll:vr()}),"")}function f(){for(const p of o)p();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:d,destroy:f}}function ti(e,t,r,s=!1,i=!1){return{back:e,current:t,forward:r,replaced:s,position:window.history.length,scroll:i?vr():null}}function Ia(e){const{history:t,location:r}=window,s={value:mo(e,r)},i={value:t.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(a,d,u){const f=e.indexOf("#"),p=f>-1?(r.host&&document.querySelector("base")?e:e.slice(f))+a:Pa()+e+a;try{t[u?"replaceState":"pushState"](d,"",p),i.value=d}catch(w){console.error(w),r[u?"replace":"assign"](p)}}function n(a,d){const u=K({},t.state,ti(i.value.back,a,i.value.forward,!0),d,{position:i.value.position});o(a,u,!0),s.value=a}function c(a,d){const u=K({},i.value,t.state,{forward:a,scroll:vr()});o(u.current,u,!0);const f=K({},ti(s.value,a,null),{position:u.position+1},d);o(a,f,!1),s.value=a}return{location:s,state:i,push:c,replace:n}}function Fa(e){e=Ca(e);const t=Ia(e),r=za(e,t.state,t.location,t.replace);function s(o,n=!0){n||r.pauseListeners(),history.go(o)}const i=K({location:"",base:e,go:s,createHref:La.bind(null,e)},t,r);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ja(e){return typeof e=="string"||e&&typeof e=="object"}function yo(e){return typeof e=="string"||typeof e=="symbol"}const $e={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vo=Symbol("");var ri;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ri||(ri={}));function St(e,t){return K(new Error,{type:e,[vo]:!0},t)}function Pe(e,t){return e instanceof Error&&vo in e&&(t==null||!!(e.type&t))}const si="[^/]+?",Da={sensitive:!1,strict:!1,start:!0,end:!0},Na=/[.+*?^${}()[\]/\\]/g;function $a(e,t){const r=K({},Da,t),s=[];let i=r.start?"^":"";const o=[];for(const d of e){const u=d.length?[]:[90];r.strict&&!d.length&&(i+="/");for(let f=0;f<d.length;f++){const p=d[f];let w=40+(r.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(Na,"\\$&"),w+=40;else if(p.type===1){const{value:C,repeatable:T,optional:F,regexp:P}=p;o.push({name:C,repeatable:T,optional:F});const M=P||si;if(M!==si){w+=10;try{new RegExp(`(${M})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+H.message)}}let U=T?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=F&&d.length<2?`(?:/${U})`:"/"+U),F&&(U+="?"),i+=U,w+=20,F&&(w+=-8),T&&(w+=-20),M===".*"&&(w+=-50)}u.push(w)}s.push(u)}if(r.strict&&r.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}r.strict||(i+="/?"),r.end?i+="$":r.strict&&(i+="(?:/|$)");const n=new RegExp(i,r.sensitive?"":"i");function c(d){const u=d.match(n),f={};if(!u)return null;for(let p=1;p<u.length;p++){const w=u[p]||"",C=o[p-1];f[C.name]=w&&C.repeatable?w.split("/"):w}return f}function a(d){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const w of p)if(w.type===0)u+=w.value;else if(w.type===1){const{value:C,repeatable:T,optional:F}=w,P=C in d?d[C]:"";if(Ee(P)&&!T)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Ee(P)?P.join("/"):P;if(!M)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);u+=M}}return u||"/"}return{re:n,score:s,keys:o,parse:c,stringify:a}}function Ba(e,t){let r=0;for(;r<e.length&&r<t.length;){const s=t[r]-e[r];if(s)return s;r++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ua(e,t){let r=0;const s=e.score,i=t.score;for(;r<s.length&&r<i.length;){const o=Ba(s[r],i[r]);if(o)return o;r++}if(Math.abs(i.length-s.length)===1){if(ii(s))return 1;if(ii(i))return-1}return i.length-s.length}function ii(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wa={type:0,value:""},Ka=/[a-zA-Z0-9_]/;function Va(e){if(!e)return[[]];if(e==="/")return[[Wa]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${r})/"${d}": ${w}`)}let r=0,s=r;const i=[];let o;function n(){o&&i.push(o),o=[]}let c=0,a,d="",u="";function f(){d&&(r===0?o.push({type:0,value:d}):r===1||r===2||r===3?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function p(){d+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&r!==2){s=r,r=4;continue}switch(r){case 0:a==="/"?(d&&f(),n()):a===":"?(f(),r=1):p();break;case 4:p(),r=s;break;case 1:a==="("?r=2:Ka.test(a)?p():(f(),r=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:r=3:u+=a;break;case 3:f(),r=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${d}"`),f(),n(),i}function Ya(e,t,r){const s=$a(Va(e.path),r),i=K(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ja(e,t){const r=[],s=new Map;t=li({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function o(u,f,p){const w=!p,C=Qa(u);C.aliasOf=p&&p.record;const T=li(t,u),F=[C];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of U)F.push(K({},C,{components:p?p.record.components:C.components,path:H,aliasOf:p?p.record:C}))}let P,M;for(const U of F){const{path:H}=U;if(f&&H[0]!=="/"){const re=f.record.path,oe=re[re.length-1]==="/"?"":"/";U.path=f.record.path+(H&&oe+H)}if(P=Ya(U,f,T),p?p.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),w&&u.name&&!ni(P)&&n(u.name)),C.children){const re=C.children;for(let oe=0;oe<re.length;oe++)o(re[oe],P,p&&p.children[oe])}p=p||P,a(P)}return M?()=>{n(M)}:Ht}function n(u){if(yo(u)){const f=s.get(u);f&&(s.delete(u),r.splice(r.indexOf(f),1),f.children.forEach(n),f.alias.forEach(n))}else{const f=r.indexOf(u);f>-1&&(r.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(n),u.alias.forEach(n))}}function c(){return r}function a(u){let f=0;for(;f<r.length&&Ua(u,r[f])>=0&&(u.record.path!==r[f].record.path||!wo(u,r[f]));)f++;r.splice(f,0,u),u.record.name&&!ni(u)&&s.set(u.record.name,u)}function d(u,f){let p,w={},C,T;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw St(1,{location:u});T=p.record.name,w=K(oi(f.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&oi(u.params,p.keys.map(M=>M.name))),C=p.stringify(w)}else if("path"in u)C=u.path,p=r.find(M=>M.re.test(C)),p&&(w=p.parse(C),T=p.record.name);else{if(p=f.name?s.get(f.name):r.find(M=>M.re.test(f.path)),!p)throw St(1,{location:u,currentLocation:f});T=p.record.name,w=K({},f.params,u.params),C=p.stringify(w)}const F=[];let P=p;for(;P;)F.unshift(P.record),P=P.parent;return{name:T,path:C,params:w,matched:F,meta:Za(F)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:d,removeRoute:n,getRoutes:c,getRecordMatcher:i}}function oi(e,t){const r={};for(const s of t)s in e&&(r[s]=e[s]);return r}function Qa(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Xa(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Xa(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const s in e.components)t[s]=typeof r=="boolean"?r:r[s];return t}function ni(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Za(e){return e.reduce((t,r)=>K(t,r.meta),{})}function li(e,t){const r={};for(const s in e)r[s]=s in t?t[s]:e[s];return r}function wo(e,t){return t.children.some(r=>r===e||wo(e,r))}const _o=/#/g,Ga=/&/g,ec=/\//g,tc=/=/g,rc=/\?/g,xo=/\+/g,sc=/%5B/g,ic=/%5D/g,So=/%5E/g,oc=/%60/g,Ao=/%7B/g,nc=/%7C/g,Eo=/%7D/g,lc=/%20/g;function gs(e){return encodeURI(""+e).replace(nc,"|").replace(sc,"[").replace(ic,"]")}function ac(e){return gs(e).replace(Ao,"{").replace(Eo,"}").replace(So,"^")}function Vr(e){return gs(e).replace(xo,"%2B").replace(lc,"+").replace(_o,"%23").replace(Ga,"%26").replace(oc,"`").replace(Ao,"{").replace(Eo,"}").replace(So,"^")}function cc(e){return Vr(e).replace(tc,"%3D")}function uc(e){return gs(e).replace(_o,"%23").replace(rc,"%3F")}function dc(e){return e==null?"":uc(e).replace(ec,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function hc(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(xo," "),n=o.indexOf("="),c=lr(n<0?o:o.slice(0,n)),a=n<0?null:lr(o.slice(n+1));if(c in t){let d=t[c];Ee(d)||(d=t[c]=[d]),d.push(a)}else t[c]=a}return t}function ai(e){let t="";for(let r in e){const s=e[r];if(r=cc(r),s==null){s!==void 0&&(t+=(t.length?"&":"")+r);continue}(Ee(s)?s.map(o=>o&&Vr(o)):[s&&Vr(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+r,o!=null&&(t+="="+o))})}return t}function fc(e){const t={};for(const r in e){const s=e[r];s!==void 0&&(t[r]=Ee(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const pc=Symbol(""),ci=Symbol(""),wr=Symbol(""),bs=Symbol(""),Yr=Symbol("");function Tt(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function r(){e=[]}return{add:t,list:()=>e,reset:r}}function Ue(e,t,r,s,i){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((n,c)=>{const a=f=>{f===!1?c(St(4,{from:r,to:t})):f instanceof Error?c(f):ja(f)?c(St(2,{from:t,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),n())},d=e.call(s&&s.instances[i],t,r,a);let u=Promise.resolve(d);e.length<3&&(u=u.then(a)),u.catch(f=>c(f))})}function qr(e,t,r,s){const i=[];for(const o of e)for(const n in o.components){let c=o.components[n];if(!(t!=="beforeRouteEnter"&&!o.instances[n]))if(gc(c)){const d=(c.__vccOpts||c)[t];d&&i.push(Ue(d,r,s,o,n))}else{let a=c();i.push(()=>a.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${o.path}"`));const u=_a(d)?d.default:d;o.components[n]=u;const p=(u.__vccOpts||u)[t];return p&&Ue(p,r,s,o,n)()}))}}return i}function gc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ui(e){const t=Ae(wr),r=Ae(bs),s=ge(()=>t.resolve(tt(e.to))),i=ge(()=>{const{matched:a}=s.value,{length:d}=a,u=a[d-1],f=r.matched;if(!u||!f.length)return-1;const p=f.findIndex(xt.bind(null,u));if(p>-1)return p;const w=di(a[d-2]);return d>1&&di(u)===w&&f[f.length-1].path!==w?f.findIndex(xt.bind(null,a[d-2])):p}),o=ge(()=>i.value>-1&&vc(r.params,s.value.params)),n=ge(()=>i.value>-1&&i.value===r.matched.length-1&&bo(r.params,s.value.params));function c(a={}){return yc(a)?t[tt(e.replace)?"replace":"push"](tt(e.to)).catch(Ht):Promise.resolve()}return{route:s,href:ge(()=>s.value.href),isActive:o,isExactActive:n,navigate:c}}const bc=Yi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ui,setup(e,{slots:t}){const r=$t(ui(e)),{options:s}=Ae(wr),i=ge(()=>({[hi(e.activeClass,s.linkActiveClass,"router-link-active")]:r.isActive,[hi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const o=t.default&&t.default(r);return e.custom?o:go("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:i.value},o)}}}),mc=bc;function yc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vc(e,t){for(const r in t){const s=t[r],i=e[r];if(typeof s=="string"){if(s!==i)return!1}else if(!Ee(i)||i.length!==s.length||s.some((o,n)=>o!==i[n]))return!1}return!0}function di(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const hi=(e,t,r)=>e??t??r,wc=Yi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const s=Ae(Yr),i=ge(()=>e.route||s.value),o=Ae(ci,0),n=ge(()=>{let d=tt(o);const{matched:u}=i.value;let f;for(;(f=u[d])&&!f.components;)d++;return d}),c=ge(()=>i.value.matched[n.value]);Gt(ci,ge(()=>n.value+1)),Gt(pc,c),Gt(Yr,i);const a=Ii();return Xt(()=>[a.value,c.value,e.name],([d,u,f],[p,w,C])=>{u&&(u.instances[f]=d,w&&w!==u&&d&&d===p&&(u.leaveGuards.size||(u.leaveGuards=w.leaveGuards),u.updateGuards.size||(u.updateGuards=w.updateGuards))),d&&u&&(!w||!xt(u,w)||!p)&&(u.enterCallbacks[f]||[]).forEach(T=>T(d))},{flush:"post"}),()=>{const d=i.value,u=e.name,f=c.value,p=f&&f.components[u];if(!p)return fi(r.default,{Component:p,route:d});const w=f.props[u],C=w?w===!0?d.params:typeof w=="function"?w(d):w:null,F=go(p,K({},C,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return fi(r.default,{Component:F,route:d})||F}}});function fi(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const Ro=wc;function _c(e){const t=Ja(e.routes,e),r=e.parseQuery||hc,s=e.stringifyQuery||ai,i=e.history,o=Tt(),n=Tt(),c=Tt(),a=fn($e);let d=$e;ht&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tr.bind(null,m=>""+m),f=Tr.bind(null,dc),p=Tr.bind(null,lr);function w(m,R){let A,L;return yo(m)?(A=t.getRecordMatcher(m),L=R):L=m,t.addRoute(L,A)}function C(m){const R=t.getRecordMatcher(m);R&&t.removeRoute(R)}function T(){return t.getRoutes().map(m=>m.record)}function F(m){return!!t.getRecordMatcher(m)}function P(m,R){if(R=K({},R||a.value),typeof m=="string"){const l=Lr(r,m,R.path),h=t.resolve({path:l.path},R),g=i.createHref(l.fullPath);return K(l,h,{params:p(h.params),hash:lr(l.hash),redirectedFrom:void 0,href:g})}let A;if("path"in m)A=K({},m,{path:Lr(r,m.path,R.path).path});else{const l=K({},m.params);for(const h in l)l[h]==null&&delete l[h];A=K({},m,{params:f(m.params)}),R.params=f(R.params)}const L=t.resolve(A,R),$=m.hash||"";L.params=u(p(L.params));const Z=Aa(s,K({},m,{hash:ac($),path:L.path})),D=i.createHref(Z);return K({fullPath:Z,hash:$,query:s===ai?fc(m.query):m.query||{}},L,{redirectedFrom:void 0,href:D})}function M(m){return typeof m=="string"?Lr(r,m,a.value.path):K({},m)}function U(m,R){if(d!==m)return St(8,{from:R,to:m})}function H(m){return be(m)}function re(m){return H(K(M(m),{replace:!0}))}function oe(m){const R=m.matched[m.matched.length-1];if(R&&R.redirect){const{redirect:A}=R;let L=typeof A=="function"?A(m):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=M(L):{path:L},L.params={}),K({query:m.query,hash:m.hash,params:"path"in L?{}:m.params},L)}}function be(m,R){const A=d=P(m),L=a.value,$=m.state,Z=m.force,D=m.replace===!0,l=oe(A);if(l)return be(K(M(l),{state:typeof l=="object"?K({},$,l.state):$,force:Z,replace:D}),R||A);const h=A;h.redirectedFrom=R;let g;return!Z&&Ea(s,L,A)&&(g=St(16,{to:h,from:L}),Je(L,L,!0,!1)),(g?Promise.resolve(g):nt(h,L)).catch(b=>Pe(b)?Pe(b,2)?b:me(b):J(b,h,L)).then(b=>{if(b){if(Pe(b,2))return be(K({replace:D},M(b.to),{state:typeof b.to=="object"?K({},$,b.to.state):$,force:Z}),R||h)}else b=De(h,L,!0,D,$);return ke(h,L,b),b})}function Re(m,R){const A=U(m,R);return A?Promise.reject(A):Promise.resolve()}function nt(m,R){let A;const[L,$,Z]=xc(m,R);A=qr(L.reverse(),"beforeRouteLeave",m,R);for(const l of L)l.leaveGuards.forEach(h=>{A.push(Ue(h,m,R))});const D=Re.bind(null,m,R);return A.push(D),dt(A).then(()=>{A=[];for(const l of o.list())A.push(Ue(l,m,R));return A.push(D),dt(A)}).then(()=>{A=qr($,"beforeRouteUpdate",m,R);for(const l of $)l.updateGuards.forEach(h=>{A.push(Ue(h,m,R))});return A.push(D),dt(A)}).then(()=>{A=[];for(const l of m.matched)if(l.beforeEnter&&!R.matched.includes(l))if(Ee(l.beforeEnter))for(const h of l.beforeEnter)A.push(Ue(h,m,R));else A.push(Ue(l.beforeEnter,m,R));return A.push(D),dt(A)}).then(()=>(m.matched.forEach(l=>l.enterCallbacks={}),A=qr(Z,"beforeRouteEnter",m,R),A.push(D),dt(A))).then(()=>{A=[];for(const l of n.list())A.push(Ue(l,m,R));return A.push(D),dt(A)}).catch(l=>Pe(l,8)?l:Promise.reject(l))}function ke(m,R,A){for(const L of c.list())L(m,R,A)}function De(m,R,A,L,$){const Z=U(m,R);if(Z)return Z;const D=R===$e,l=ht?history.state:{};A&&(L||D?i.replace(m.fullPath,K({scroll:D&&l&&l.scroll},$)):i.push(m.fullPath,$)),a.value=m,Je(m,R,A,D),me()}let Ce;function lt(){Ce||(Ce=i.listen((m,R,A)=>{if(!Bt.listening)return;const L=P(m),$=oe(L);if($){be(K($,{replace:!0}),L).catch(Ht);return}d=L;const Z=a.value;ht&&Ma(ei(Z.fullPath,A.delta),vr()),nt(L,Z).catch(D=>Pe(D,12)?D:Pe(D,2)?(be(D.to,L).then(l=>{Pe(l,20)&&!A.delta&&A.type===Nt.pop&&i.go(-1,!1)}).catch(Ht),Promise.reject()):(A.delta&&i.go(-A.delta,!1),J(D,L,Z))).then(D=>{D=D||De(L,Z,!1),D&&(A.delta&&!Pe(D,8)?i.go(-A.delta,!1):A.type===Nt.pop&&Pe(D,20)&&i.go(-1,!1)),ke(L,Z,D)}).catch(Ht)}))}let Ye=Tt(),Rt=Tt(),ee;function J(m,R,A){me(m);const L=Rt.list();return L.length?L.forEach($=>$(m,R,A)):console.error(m),Promise.reject(m)}function V(){return ee&&a.value!==$e?Promise.resolve():new Promise((m,R)=>{Ye.add([m,R])})}function me(m){return ee||(ee=!m,lt(),Ye.list().forEach(([R,A])=>m?A(m):R()),Ye.reset()),m}function Je(m,R,A,L){const{scrollBehavior:$}=e;if(!ht||!$)return Promise.resolve();const Z=!A&&Ha(ei(m.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Ni().then(()=>$(m,R,Z)).then(D=>D&&Oa(D)).catch(D=>J(D,m,R))}const ye=m=>i.go(m);let ue;const at=new Set,Bt={currentRoute:a,listening:!0,addRoute:w,removeRoute:C,hasRoute:F,getRoutes:T,resolve:P,options:e,push:H,replace:re,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:o.add,beforeResolve:n.add,afterEach:c.add,onError:Rt.add,isReady:V,install(m){const R=this;m.component("RouterLink",mc),m.component("RouterView",Ro),m.config.globalProperties.$router=R,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(a)}),ht&&!ue&&a.value===$e&&(ue=!0,H(i.location).catch($=>{}));const A={};for(const $ in $e)A[$]=ge(()=>a.value[$]);m.provide(wr,R),m.provide(bs,$t(A)),m.provide(Yr,a);const L=m.unmount;at.add(m),m.unmount=function(){at.delete(m),at.size<1&&(d=$e,Ce&&Ce(),Ce=null,a.value=$e,ue=!1,ee=!1),L()}}};return Bt}function dt(e){return e.reduce((t,r)=>t.then(()=>r()),Promise.resolve())}function xc(e,t){const r=[],s=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let n=0;n<o;n++){const c=t.matched[n];c&&(e.matched.find(d=>xt(d,c))?s.push(c):r.push(c));const a=e.matched[n];a&&(t.matched.find(d=>xt(d,a))||i.push(a))}return[r,s,i]}function Sc(){return Ae(wr)}function Ac(){return Ae(bs)}function Ec(e){let t=0;const r=document.createElement("div"),s=document.createElement("div"),i=document.createElement("img");r.style.position="fixed",r.style.width="100%",r.style.height="80px",r.style.background="linear-gradient(180deg, rgba(0,0,0,.9), rgba(255,255,255,.1))",r.style.opacity="0.1",s.style.transition="all 1s",s.style.position="fixed",s.style.width="100%",s.style.height="100%",s.style.backgroundImage=`url(${e[t]})`,s.style.backgroundSize="cover",s.style.backgroundPosition="center center",i.style.display="none",i.setAttribute("src",e[t<e.length-1?t+1:0]),document.body.prepend(r),document.body.prepend(s),document.body.prepend(i),setInterval(()=>{t<e.length-1?t++:t=0,s.style.backgroundImage=`url(${e[t]})`,i.setAttribute("src",e[t<e.length-1?t+1:0])},10*60*1e3)}const Rc={__name:"App",setup(e){return Sc(),Ac(),Xi(t=>{Ec(["https://picsum.photos/1920/1080"])}),(t,r)=>(lo(),co(tt(Ro)))}},kc="modulepreload",Cc=function(e){return"/"+e},pi={},Or=function(t,r,s){let i=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link");i=Promise.all(r.map(n=>{if(n=Cc(n),n in pi)return;pi[n]=!0;const c=n.endsWith(".css"),a=c?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const p=o[f];if(p.href===n&&(!c||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${a}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":kc,c||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),c)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}return i.then(()=>t()).catch(o=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o})},Tc=_c({history:Fa("/"),routes:[{path:"/",name:"Index",component:()=>Or(()=>import("./Index-SPareVDu.js"),__vite__mapDeps([0,1,2,3]))},{path:"/dictionary",name:"Dictionary",component:()=>Or(()=>import("./Dictionary-IZkkP9Fc.js"),__vite__mapDeps([4,1,2,5]))},{path:"/:pathMatch(.*)*",name:"404",component:()=>Or(()=>import("./NotFound-46PsBb37.js"),__vite__mapDeps([6,1,2,7]))}]});tr.initColor();const _r=Kl(Rc),Lc=Ql();_r.config.warnHandler=()=>null;_r.use(Tc);_r.use(Lc);_r.mount("#app");export{Ie as F,pe as a,ho as b,Pc as c,dl as d,zc as e,Xl as f,Hc as g,tt as h,lo as o,Mc as p,Ii as r,Oc as t,Sc as u,Ic as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Index-SPareVDu.js","assets/Menu-7005UcgN.js","assets/Menu-bFQSZli0.css","assets/Index-l1Hm5_3c.css","assets/Dictionary-IZkkP9Fc.js","assets/Dictionary-2QStOtIb.css","assets/NotFound-46PsBb37.js","assets/NotFound-kUN3rbr2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}