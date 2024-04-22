import{u as yp,r as ye,o as Fn,a as we,c as wn,b as aa,d as le,g as ri,s as Ui,q as ci,F as z_,m as k_}from"./index-GX--YTti.js";import{_ as Bn,H as Mp}from"./Header-KUDNUeIV.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="163",Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bp=0,rh=1,Sp=2,V_=3,H_=0,lu=1,wp=2,$n=3,Ai=0,tn=1,_n=2,bi=0,Ds=1,ah=2,oh=3,lh=4,Ap=5,Gi=100,Ep=101,Tp=102,Cp=103,Rp=104,Pp=200,Lp=201,Ip=202,Dp=203,dl=204,fl=205,Up=206,Np=207,Op=208,Fp=209,Bp=210,zp=211,kp=212,Vp=213,Hp=214,Gp=0,Wp=1,Xp=2,va=3,Yp=4,qp=5,$p=6,Zp=7,Ja=0,Jp=1,Kp=2,Si=0,jp=1,Qp=2,tm=3,em=4,nm=5,im=6,sm=7,ch="attached",rm="detached",wl=300,Ei=301,Ji=302,ya=303,Ma=304,Vr=306,ba=1e3,In=1001,Sa=1002,xe=1003,cu=1004,G_=1004,Mr=1005,W_=1005,Pe=1006,ua=1007,X_=1007,Kn=1008,Y_=1008,wi=1009,am=1010,om=1011,hu=1012,uu=1013,Vs=1014,Dn=1015,wa=1016,du=1017,fu=1018,Hr=1020,lm=35902,cm=1021,hm=1022,yn=1023,um=1024,dm=1025,Us=1026,Lr=1027,pu=1028,mu=1029,fm=1030,gu=1031,_u=1033,nl=33776,il=33777,sl=33778,rl=33779,hh=35840,uh=35841,dh=35842,fh=35843,xu=36196,ph=37492,mh=37496,gh=37808,_h=37809,xh=37810,vh=37811,yh=37812,Mh=37813,bh=37814,Sh=37815,wh=37816,Ah=37817,Eh=37818,Th=37819,Ch=37820,Rh=37821,al=36492,Ph=36494,Lh=36495,pm=36283,Ih=36284,Dh=36285,Uh=36286,mm=2200,gm=2201,_m=2202,Aa=2300,Ea=2301,ol=2302,Ts=2400,Cs=2401,Ta=2402,Al=2500,vu=2501,q_=0,$_=1,Z_=2,xm=3200,vm=3201,Qi=0,ym=1,vi="",mn="srgb",Pi="srgb-linear",El="display-p3",Ka="display-p3-linear",Ca="linear",ae="srgb",Ra="rec709",Pa="p3",J_=0,Ss=7680,K_=7681,j_=7682,Q_=7683,t0=34055,e0=34056,n0=5386,i0=512,s0=513,r0=514,a0=515,o0=516,l0=517,c0=518,Nh=519,Mm=512,bm=513,Sm=514,yu=515,wm=516,Am=517,Em=518,Tm=519,La=35044,h0=35048,u0=35040,d0=35045,f0=35049,p0=35041,m0=35046,g0=35050,_0=35042,x0="100",Oh="300 es",jn=2e3,Ia=2001;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yd=1234567;const Ns=Math.PI/180,Ir=180/Math.PI;function bn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function _e(r,t,e){return Math.max(t,Math.min(e,r))}function Mu(r,t){return(r%t+t)%t}function v0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function y0(r,t,e){return r!==t?(e-r)/(t-r):0}function da(r,t,e){return(1-e)*r+e*t}function M0(r,t,e,n){return da(r,t,1-Math.exp(-e*n))}function b0(r,t=1){return t-Math.abs(Mu(r,t*2)-t)}function S0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function w0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function A0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function E0(r,t){return r+Math.random()*(t-r)}function T0(r){return r*(.5-Math.random())}function C0(r){r!==void 0&&(yd=r);let t=yd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function R0(r){return r*Ns}function P0(r){return r*Ir}function L0(r){return(r&r-1)===0&&r!==0}function I0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function D0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function U0(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fa={DEG2RAD:Ns,RAD2DEG:Ir,generateUUID:bn,clamp:_e,euclideanModulo:Mu,mapLinear:v0,inverseLerp:y0,lerp:da,damp:M0,pingpong:b0,smoothstep:S0,smootherstep:w0,randInt:A0,randFloat:E0,randFloatSpread:T0,seededRandom:C0,degToRad:R0,radToDeg:P0,isPowerOfTwo:L0,ceilPowerOfTwo:I0,floorPowerOfTwo:D0,setQuaternionFromProperEuler:U0,normalize:Ot,denormalize:je};class ${constructor(t=0,e=0){$.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,s,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],T=i[2],w=i[5],E=i[8];return s[0]=a*g+o*v+l*T,s[3]=a*m+o*x+l*w,s[6]=a*p+o*y+l*E,s[1]=c*g+h*v+u*T,s[4]=c*m+h*x+u*w,s[7]=c*p+h*y+u*E,s[2]=d*g+f*v+_*T,s[5]=d*m+f*x+_*w,s[8]=d*p+f*y+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(cc.makeScale(t,e)),this}rotate(t){return this.premultiply(cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new Nt;function Cm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}const N0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function br(r,t){return new N0[r](t)}function Da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rm(){const r=Da("canvas");return r.style.display="block",r}const Md={};function Pm(r){r in Md||(Md[r]=!0,console.warn(r))}const bd=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sd=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[Pi]:{transfer:Ca,primaries:Ra,toReference:r=>r,fromReference:r=>r},[mn]:{transfer:ae,primaries:Ra,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ka]:{transfer:Ca,primaries:Pa,toReference:r=>r.applyMatrix3(Sd),fromReference:r=>r.applyMatrix3(bd)},[El]:{transfer:ae,primaries:Pa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Sd),fromReference:r=>r.applyMatrix3(bd).convertLinearToSRGB()}},O0=new Set([Pi,Ka]),ee={enabled:!0,_workingColorSpace:Pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!O0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=lo[t].toReference,i=lo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return lo[r].primaries},getTransfer:function(r){return r===vi?Ca:lo[r].transfer}};function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let js;class Lm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{js===void 0&&(js=Da("canvas")),js.width=t.width,js.height=t.height;const n=js.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Da("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Tr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tr(e[n]/255)*255):e[n]=Tr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let F0=0;class Rs{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(uc(i[a].image)):s.push(uc(i[a]))}else s=uc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function uc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B0=0;class Me extends ai{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=In,i=In,s=Pe,a=Kn,o=yn,l=wi,c=Me.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=bn(),this.name="",this.source=new Rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=wl;Me.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,T=(p+1)/2,w=(h+d)/4,E=(u+g)/4,C=(_+m)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=C/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Im extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Im{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class z0 extends Wn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Tl(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class bu extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class k0 extends Wn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new bu(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class We{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-o;const p=l*d+c*f+h*_+u*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,p*v);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const y=o*v;if(l=l*m+d*y,c=c*m+f*y,h=h*m+_*y,u=u*m+g*y,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new P,wd=new We;class en{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),ho.subVectors(this.max,$r),Qs.subVectors(t.a,$r),tr.subVectors(t.b,$r),er.subVectors(t.c,$r),Ni.subVectors(tr,Qs),Oi.subVectors(er,tr),os.subVectors(Qs,er);let e=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-os.z,os.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,os.z,0,-os.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-os.y,os.x,0];return!fc(e,Qs,tr,er,ho)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,Qs,tr,er,ho))?!1:(uo.crossVectors(Ni,Oi),e=[uo.x,uo.y,uo.z],fc(e,Qs,tr,er,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hi=[new P,new P,new P,new P,new P,new P,new P,new P],kn=new P,co=new en,Qs=new P,tr=new P,er=new P,Ni=new P,Oi=new P,os=new P,$r=new P,ho=new P,uo=new P,ls=new P;function fc(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ls.fromArray(r,s);const o=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const V0=new en,Zr=new P,pc=new P;class Xe{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):V0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);const e=Zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(pc)),this.expandByPoint(Zr.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new P,mc=new P,fo=new P,Fi=new P,gc=new P,po=new P,_c=new P;class Ys{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mc.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(mc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(fo),o=Fi.dot(this.direction),l=-Fi.dot(fo),c=Fi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(mc).addScaledVector(fo,d),f}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,i,s){gc.subVectors(e,t),po.subVectors(n,t),_c.crossVectors(gc,po);let a=this.direction.dot(_c),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,t);const l=o*this.direction.dot(po.crossVectors(Fi,po));if(l<0)return null;const c=o*this.direction.dot(gc.cross(Fi));if(c<0||l+c>a)return null;const h=-o*Fi.dot(_c);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/nr.setFromMatrixColumn(t,0).length(),s=1/nr.setFromMatrixColumn(t,1).length(),a=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(H0,t,G0)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Bi.crossVectors(n,fn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Bi.crossVectors(n,fn)),Bi.normalize(),mo.crossVectors(fn,Bi),i[0]=Bi.x,i[4]=mo.x,i[8]=fn.x,i[1]=Bi.y,i[5]=mo.y,i[9]=fn.y,i[2]=Bi.z,i[6]=mo.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],T=n[15],w=i[0],E=i[4],C=i[8],b=i[12],S=i[1],D=i[5],U=i[9],I=i[13],F=i[2],G=i[6],X=i[10],tt=i[14],z=i[3],it=i[7],nt=i[11],dt=i[15];return s[0]=a*w+o*S+l*F+c*z,s[4]=a*E+o*D+l*G+c*it,s[8]=a*C+o*U+l*X+c*nt,s[12]=a*b+o*I+l*tt+c*dt,s[1]=h*w+u*S+d*F+f*z,s[5]=h*E+u*D+d*G+f*it,s[9]=h*C+u*U+d*X+f*nt,s[13]=h*b+u*I+d*tt+f*dt,s[2]=_*w+g*S+m*F+p*z,s[6]=_*E+g*D+m*G+p*it,s[10]=_*C+g*U+m*X+p*nt,s[14]=_*b+g*I+m*tt+p*dt,s[3]=v*w+x*S+y*F+T*z,s[7]=v*E+x*D+y*G+T*it,s[11]=v*C+x*U+y*X+T*nt,s[15]=v*b+x*I+y*tt+T*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,x=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,y=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,T=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=e*v+n*x+i*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=v*E,t[1]=(g*d*s-u*m*s-g*i*f+n*m*f+u*i*p-n*d*p)*E,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*E,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*E,t[4]=x*E,t[5]=(h*m*s-_*d*s+_*i*f-e*m*f-h*i*p+e*d*p)*E,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*E,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*E,t[8]=y*E,t[9]=(_*u*s-h*g*s-_*n*f+e*g*f+h*n*p-e*u*p)*E,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*E,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*E,t[12]=T*E,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*E,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,m=a*u,p=o*u,v=l*c,x=l*h,y=l*u,T=n.x,w=n.y,E=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+y)*T,i[2]=(_-x)*T,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(_+x)*E,i[9]=(m-v)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=nr.set(i[0],i[1],i[2]).length();const a=nr.set(i[4],i[5],i[6]).length(),o=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Vn.copy(this);const c=1/s,h=1/a,u=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,e.setFromRotationMatrix(Vn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=jn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(o===jn)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ia)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=jn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h;let _,g;if(o===jn)_=(a+s)*u,g=-2*u;else if(o===Ia)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const nr=new P,Vn=new Tt,H0=new P(0,0,0),G0=new P(1,1,1),Bi=new P,mo=new P,fn=new P,Ad=new Tt,Ed=new We;class An{constructor(t=0,e=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ad,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let W0=0;const Td=new P,ir=new We,di=new Tt,go=new P,Jr=new P,X0=new P,Y0=new We,Cd=new P(1,0,0),Rd=new P(0,1,0),Pd=new P(0,0,1),Ld={type:"added"},q0={type:"removed"},sr={type:"childadded",child:null},xc={type:"childremoved",child:null};class Kt extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const t=new P,e=new An,n=new We,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Nt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Cd,t)}rotateY(t){return this.rotateOnAxis(Rd,t)}rotateZ(t){return this.rotateOnAxis(Pd,t)}translateOnAxis(t,e){return Td.copy(t).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cd,t)}translateY(t){return this.translateOnAxis(Rd,t)}translateZ(t){return this.translateOnAxis(Pd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Jr,go,this.up):di.lookAt(go,Jr,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(di),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ld),sr.child=t,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(q0),xc.child=t,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ld),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,X0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Y0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Kt.DEFAULT_UP=new P(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new P,fi=new P,vc=new P,pi=new P,rr=new P,ar=new P,Id=new P,yc=new P,Mc=new P,bc=new P;class xn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hn.subVectors(t,e),i.cross(Hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Hn.subVectors(i,e),fi.subVectors(n,e),vc.subVectors(t,e);const a=Hn.dot(Hn),o=Hn.dot(fi),l=Hn.dot(vc),c=fi.dot(fi),h=fi.dot(vc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(t,e,n,i){return Hn.subVectors(n,e),fi.subVectors(t,e),Hn.cross(fi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Hn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;rr.subVectors(i,n),ar.subVectors(s,n),yc.subVectors(t,n);const l=rr.dot(yc),c=ar.dot(yc);if(l<=0&&c<=0)return e.copy(n);Mc.subVectors(t,i);const h=rr.dot(Mc),u=ar.dot(Mc);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rr,a);bc.subVectors(t,s);const f=rr.dot(bc),_=ar.dot(bc);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ar,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Id.subVectors(s,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(Id,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(rr,a).addScaledVector(ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Sc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Mu(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Sc(a,s,t+1/3),this.g=Sc(a,s,t),this.b=Sc(a,s,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=Dm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}copyLinearToSRGB(t){return this.r=hc(t.r),this.g=hc(t.g),this.b=hc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return ee.fromWorkingColorSpace(Ve.copy(this),t),Math.round(_e(Ve.r*255,0,255))*65536+Math.round(_e(Ve.g*255,0,255))*256+Math.round(_e(Ve.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,s=Ve.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=mn){ee.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(_o);const n=da(zi.h,_o.h,e),i=da(zi.s,_o.s,e),s=da(zi.l,_o.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new ft;ft.NAMES=Dm;let $0=0;class $e extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ds,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Be extends $e{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yi=Z0();function Z0(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function rn(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=_e(r,-65504,65504),yi.floatView[0]=r;const t=yi.uint32View[0],e=t>>23&511;return yi.baseTable[e]+((t&8388607)>>yi.shiftTable[e])}function oa(r){const t=r>>10;return yi.uint32View[0]=yi.mantissaTable[yi.offsetTable[t]+(r&1023)]+yi.exponentTable[t],yi.floatView[0]}const J0={toHalfFloat:rn,fromHalfFloat:oa},Ce=new P,xo=new $;class te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=je(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=je(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=je(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class K0 extends te{constructor(t,e,n){super(new Int8Array(t),e,n)}}class j0 extends te{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Q0 extends te{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class tx extends te{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Su extends te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ex extends te{constructor(t,e,n){super(new Int32Array(t),e,n)}}class wu extends te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nx extends te{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=oa(this.array[t*this.itemSize]);return this.normalized&&(e=je(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize]=rn(e),this}getY(t){let e=oa(this.array[t*this.itemSize+1]);return this.normalized&&(e=je(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize+1]=rn(e),this}getZ(t){let e=oa(this.array[t*this.itemSize+2]);return this.normalized&&(e=je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize+2]=rn(e),this}getW(t){let e=oa(this.array[t*this.itemSize+3]);return this.normalized&&(e=je(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ot(e,this.array)),this.array[t*this.itemSize+3]=rn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array)),this.array[t+0]=rn(e),this.array[t+1]=rn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[t+0]=rn(e),this.array[t+1]=rn(n),this.array[t+2]=rn(i),this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[t+0]=rn(e),this.array[t+1]=rn(n),this.array[t+2]=rn(i),this.array[t+3]=rn(s),this}}class yt extends te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ix=0;const Pn=new Tt,wc=new Kt,or=new P,pn=new en,Kr=new en,Ne=new P;class Ft extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cm(t)?wu:Su)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(pn.min,Kr.min),pn.expandByPoint(Ne),Ne.addVectors(pn.max,Kr.max),pn.expandByPoint(Ne)):(pn.expandByPoint(Kr.min),pn.expandByPoint(Kr.max))}pn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ne.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ne.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(t,c),Ne.add(or)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;const c=new P,h=new P,u=new P,d=new $,f=new $,_=new $,g=new P,m=new P;function p(C,b,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,b),_.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),o[C].add(g),o[b].add(g),o[S].add(g),l[C].add(m),l[b].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,b=v.length;C<b;++C){const S=v[C],D=S.start,U=S.count;for(let I=D,F=D+U;I<F;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new P,y=new P,T=new P,w=new P;function E(C){T.fromBufferAttribute(i,C),w.copy(T);const b=o[C];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(w,b);const D=y.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,D)}for(let C=0,b=v.length;C<b;++C){const S=v[C],D=S.start,U=S.count;for(let I=D,F=D+U;I<F;I+=3)E(t.getX(I+0)),E(t.getX(I+1)),E(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ft,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new Tt,cs=new Ys,vo=new Xe,Ud=new P,lr=new P,cr=new P,hr=new P,Ac=new P,yo=new P,Mo=new $,bo=new $,So=new $,Nd=new P,Od=new P,Fd=new P,wo=new P,Ao=new P;class Ht extends Kt{constructor(t=new Ft,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ac.fromBufferAttribute(u,t),a?yo.addScaledVector(Ac,h):yo.addScaledVector(Ac.sub(e),h))}e.add(yo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),cs.copy(t.ray).recast(t.near),!(vo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(vo,Ud)===null||cs.origin.distanceToSquared(Ud)>(t.far-t.near)**2))&&(Dd.copy(s).invert(),cs.copy(t.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=x;y<T;y+=3){const w=o.getX(y),E=o.getX(y+1),C=o.getX(y+2);i=Eo(this,p,t,n,c,h,u,w,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=Eo(this,a,t,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=x;y<T;y+=3){const w=y,E=y+1,C=y+2;i=Eo(this,p,t,n,c,h,u,w,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,x=m+1,y=m+2;i=Eo(this,a,t,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function sx(r,t,e,n,i,s,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Ai,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ao);return c<e.near||c>e.far?null:{distance:c,point:Ao.clone(),object:r}}function Eo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,lr),r.getVertexPosition(l,cr),r.getVertexPosition(c,hr);const h=sx(r,t,e,n,lr,cr,hr,wo);if(h){i&&(Mo.fromBufferAttribute(i,o),bo.fromBufferAttribute(i,l),So.fromBufferAttribute(i,c),h.uv=xn.getInterpolation(wo,lr,cr,hr,Mo,bo,So,new $)),s&&(Mo.fromBufferAttribute(s,o),bo.fromBufferAttribute(s,l),So.fromBufferAttribute(s,c),h.uv1=xn.getInterpolation(wo,lr,cr,hr,Mo,bo,So,new $)),a&&(Nd.fromBufferAttribute(a,o),Od.fromBufferAttribute(a,l),Fd.fromBufferAttribute(a,c),h.normal=xn.getInterpolation(wo,lr,cr,hr,Nd,Od,Fd,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};xn.getNormal(lr,cr,hr,u.normal),h.face=u}return h}class nn extends Ft{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function _(g,m,p,v,x,y,T,w,E,C,b){const S=y/E,D=T/C,U=y/2,I=T/2,F=w/2,G=E+1,X=C+1;let tt=0,z=0;const it=new P;for(let nt=0;nt<X;nt++){const dt=nt*D-I;for(let Et=0;Et<G;Et++){const Xt=Et*S-U;it[g]=Xt*v,it[m]=dt*x,it[p]=F,c.push(it.x,it.y,it.z),it[g]=0,it[m]=0,it[p]=w>0?1:-1,h.push(it.x,it.y,it.z),u.push(Et/E),u.push(1-nt/C),tt+=1}}for(let nt=0;nt<C;nt++)for(let dt=0;dt<E;dt++){const Et=d+dt+G*nt,Xt=d+dt+G*(nt+1),Y=d+(dt+1)+G*(nt+1),st=d+(dt+1)+G*nt;l.push(Et,Xt,st),l.push(Xt,Y,st),z+=6}o.addGroup(f,z,b),f+=z,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(r){const t={};for(let e=0;e<r.length;e++){const n=Dr(r[e]);for(const i in n)t[i]=n[i]}return t}function rx(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Um(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Nm={clone:Dr,merge:Ke};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends $e{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rl extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new P,Bd=new $,zd=new $;class se extends Rl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Bd,zd),e.subVectors(zd,Bd)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ur=-90,dr=1;class Om extends Kt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new se(ur,dr,t,e);i.layers=this.layers,this.add(i);const s=new se(ur,dr,t,e);s.layers=this.layers,this.add(s);const a=new se(ur,dr,t,e);a.layers=this.layers,this.add(a);const o=new se(ur,dr,t,e);o.layers=this.layers,this.add(o);const l=new se(ur,dr,t,e);l.layers=this.layers,this.add(l);const c=new se(ur,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ja extends Me{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fm extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ja(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nn(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:bi});s.uniforms.tEquirect.value=e;const a=new Ht(i,s),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Pe),new Om(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ec=new P,lx=new P,cx=new Nt;class _i{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ec.subVectors(n,e).cross(lx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ec),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cx.getNormalMatrix(t),i=this.coplanarPoint(Ec).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Xe,To=new P;class Qa{constructor(t=new _i,e=new _i,n=new _i,i=new _i,s=new _i,a=new _i){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+_,y+v).normalize(),n[3].setComponents(l-a,d-h,m-_,y-v).normalize(),n[4].setComponents(l-o,d-u,m-g,y-x).normalize(),e===jn)n[5].setComponents(l+o,d+u,m+g,y+x).normalize();else if(e===Ia)n[5].setComponents(o,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(To.x=i.normal.x>0?t.max.x:t.min.x,To.y=i.normal.y>0?t.max.y:t.min.y,To.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bm(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hx(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let f=0,_=d.length;f<_;f++){const g=d[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Li extends Ft{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let x=0;x<c;x++){const y=x*u-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const x=v+c*p,y=v+c*(p+1),T=v+1+c*(p+1),w=v+1+c*p;f.push(x,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ux=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ox=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Av=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ry=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ay=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,by=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Oy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:ux,alphahash_pars_fragment:dx,alphamap_fragment:fx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:_x,aomap_pars_fragment:xx,batching_pars_vertex:vx,batching_vertex:yx,begin_vertex:Mx,beginnormal_vertex:bx,bsdfs:Sx,iridescence_fragment:wx,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Rx,color_fragment:Px,color_pars_fragment:Lx,color_pars_vertex:Ix,color_vertex:Dx,common:Ux,cube_uv_reflection_fragment:Nx,defaultnormal_vertex:Ox,displacementmap_pars_vertex:Fx,displacementmap_vertex:Bx,emissivemap_fragment:zx,emissivemap_pars_fragment:kx,colorspace_fragment:Vx,colorspace_pars_fragment:Hx,envmap_fragment:Gx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:sv,envmap_vertex:qx,fog_vertex:$x,fog_pars_vertex:Zx,fog_fragment:Jx,fog_pars_fragment:Kx,gradientmap_pars_fragment:jx,lightmap_fragment:Qx,lightmap_pars_fragment:tv,lights_lambert_fragment:ev,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:rv,lights_toon_pars_fragment:av,lights_phong_fragment:ov,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:hv,lights_fragment_begin:uv,lights_fragment_maps:dv,lights_fragment_end:fv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:_v,map_fragment:xv,map_pars_fragment:vv,map_particle_fragment:yv,map_particle_pars_fragment:Mv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:Sv,morphinstance_vertex:wv,morphcolor_vertex:Av,morphnormal_vertex:Ev,morphtarget_pars_vertex:Tv,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Pv,normal_pars_fragment:Lv,normal_pars_vertex:Iv,normal_vertex:Dv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Ov,clearcoat_pars_fragment:Fv,iridescence_pars_fragment:Bv,opaque_fragment:zv,packing:kv,premultiplied_alpha_fragment:Vv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:$v,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:Kv,skinning_pars_vertex:jv,skinning_vertex:Qv,skinnormal_vertex:ty,specularmap_fragment:ey,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:sy,transmission_fragment:ry,transmission_pars_fragment:ay,uv_pars_fragment:oy,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:hy,background_vert:uy,background_frag:dy,backgroundCube_vert:fy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:_y,depth_frag:xy,distanceRGBA_vert:vy,distanceRGBA_frag:yy,equirect_vert:My,equirect_frag:by,linedashed_vert:Sy,linedashed_frag:wy,meshbasic_vert:Ay,meshbasic_frag:Ey,meshlambert_vert:Ty,meshlambert_frag:Cy,meshmatcap_vert:Ry,meshmatcap_frag:Py,meshnormal_vert:Ly,meshnormal_frag:Iy,meshphong_vert:Dy,meshphong_frag:Uy,meshphysical_vert:Ny,meshphysical_frag:Oy,meshtoon_vert:Fy,meshtoon_frag:By,points_vert:zy,points_frag:ky,shadow_vert:Vy,shadow_frag:Hy,sprite_vert:Gy,sprite_frag:Wy},ut={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Gn={basic:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ft(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ke([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ke([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ft(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ke([ut.points,ut.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ke([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ke([ut.common,ut.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ke([ut.sprite,ut.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ke([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ke([ut.lights,ut.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Gn.physical={uniforms:Ke([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Co={r:0,b:0,g:0},us=new An,Xy=new Tt;function Yy(r,t,e,n,i,s,a){const o=new ft(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,l):x&&x.isColor&&(g(x,1),v=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vr)?(h===void 0&&(h=new Ht(new nn(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Dr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),us.copy(p.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(us)),h.material.toneMapped=ee.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ht(new Li(2,2),new Xn({name:"BackgroundMaterial",uniforms:Dr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ee.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Co,Um(r)),n.buffers.color.setClear(Co.r,Co.g,Co.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function qy(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,D,U,I,F){let G=!1;const X=u(I,U,D);s!==X&&(s=X,c(s.object)),G=f(S,I,U,F),G&&_(S,I,U,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(S,D,U,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,D,U){const I=U.wireframe===!0;let F=n[S.id];F===void 0&&(F={},n[S.id]=F);let G=F[D.id];G===void 0&&(G={},F[D.id]=G);let X=G[I];return X===void 0&&(X=d(l()),G[I]=X),X}function d(S){const D=[],U=[],I=[];for(let F=0;F<e;F++)D[F]=0,U[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,D,U,I){const F=s.attributes,G=D.attributes;let X=0;const tt=U.getAttributes();for(const z in tt)if(tt[z].location>=0){const nt=F[z];let dt=G[z];if(dt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),nt===void 0||nt.attribute!==dt||dt&&nt.data!==dt.data)return!0;X++}return s.attributesNum!==X||s.index!==I}function _(S,D,U,I){const F={},G=D.attributes;let X=0;const tt=U.getAttributes();for(const z in tt)if(tt[z].location>=0){let nt=G[z];nt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor));const dt={};dt.attribute=nt,nt&&nt.data&&(dt.data=nt.data),F[z]=dt,X++}s.attributes=F,s.attributesNum=X,s.index=I}function g(){const S=s.newAttributes;for(let D=0,U=S.length;D<U;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const U=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;U[S]=1,I[S]===0&&(r.enableVertexAttribArray(S),I[S]=1),F[S]!==D&&(r.vertexAttribDivisor(S,D),F[S]=D)}function v(){const S=s.newAttributes,D=s.enabledAttributes;for(let U=0,I=D.length;U<I;U++)D[U]!==S[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function x(S,D,U,I,F,G,X){X===!0?r.vertexAttribIPointer(S,D,U,F,G):r.vertexAttribPointer(S,D,U,I,F,G)}function y(S,D,U,I){g();const F=I.attributes,G=U.getAttributes(),X=D.defaultAttributeValues;for(const tt in G){const z=G[tt];if(z.location>=0){let it=F[tt];if(it===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const nt=it.normalized,dt=it.itemSize,Et=t.get(it);if(Et===void 0)continue;const Xt=Et.buffer,Y=Et.type,st=Et.bytesPerElement,_t=Y===r.INT||Y===r.UNSIGNED_INT||it.gpuType===uu;if(it.isInterleavedBufferAttribute){const ct=it.data,Rt=ct.stride,Dt=it.offset;if(ct.isInstancedInterleavedBuffer){for(let Lt=0;Lt<z.locationSize;Lt++)p(z.location+Lt,ct.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Lt=0;Lt<z.locationSize;Lt++)m(z.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let Lt=0;Lt<z.locationSize;Lt++)x(z.location+Lt,dt/z.locationSize,Y,nt,Rt*st,(Dt+dt/z.locationSize*Lt)*st,_t)}else{if(it.isInstancedBufferAttribute){for(let ct=0;ct<z.locationSize;ct++)p(z.location+ct,it.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ct=0;ct<z.locationSize;ct++)m(z.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let ct=0;ct<z.locationSize;ct++)x(z.location+ct,dt/z.locationSize,Y,nt,dt*st,dt/z.locationSize*ct*st,_t)}}else if(X!==void 0){const nt=X[tt];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(z.location,nt);break;case 3:r.vertexAttrib3fv(z.location,nt);break;case 4:r.vertexAttrib4fv(z.location,nt);break;default:r.vertexAttrib1fv(z.location,nt)}}}}v()}function T(){C();for(const S in n){const D=n[S];for(const U in D){const I=D[U];for(const F in I)h(I[F].object),delete I[F];delete D[U]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const U in D){const I=D[U];for(const F in I)h(I[F].object),delete I[F];delete D[U]}delete n[S.id]}function E(S){for(const D in n){const U=n[D];if(U[S.id]===void 0)continue;const I=U[S.id];for(const F in I)h(I[F].object),delete I[F];delete U[S.id]}}function C(){b(),a=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function $y(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d],c[d]);else{u.multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Zy(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=e.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),m=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,v=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:p,maxSamples:v}}function Jy(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new _i,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=h(_,d,x,f);for(let T=0;T!==x;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==g;++x,y+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ky(r){let t=new WeakMap;function e(a,o){return o===ya?a.mapping=Ei:o===Ma&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ya||o===Ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fm(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Pl extends Rl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Sr=4,kd=[.125,.215,.35,.446,.526,.582],Es=20,Tc=new Pl,Vd=new ft;let Cc=null,Rc=0,Pc=0,Lc=!1;const ws=(1+Math.sqrt(5))/2,fr=1/ws,Hd=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ws,fr),new P(0,ws,-fr),new P(fr,0,ws),new P(-fr,0,ws),new P(ws,fr,0),new P(-ws,fr,0)];class Fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cc,Rc,Pc),this._renderer.xr.enabled=Lc,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:wa,format:yn,colorSpace:Pi,depthBuffer:!1},i=Gd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(s)),this._blurMaterial=Qy(s,t,e)}return i}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,n,i){const o=new se(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vd),h.toneMapping=Si,h.autoClear=!1;const f=new Be({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new Ht(new nn,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Vd),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Ro(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Tc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Hd[(i-1)%Hd.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Es-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Es;m>Es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);const p=[];let v=0;for(let E=0;E<Es;++E){const C=E/g,b=Math.exp(-C*C/2);p.push(b),E===0?v+=b:E<m&&(v+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const y=this._sizeLods[i],T=3*y*(i>x-Sr?i-x+Sr:0),w=4*(this._cubeSize-y);Ro(e,T,w,3*y,2*y),l.setRenderTarget(e),l.render(u,Tc)}}function jy(r){const t=[],e=[],n=[];let i=r;const s=r-Sr+1+kd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Sr?l=kd[a-r+Sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),x=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,C=w>2?0:-1,b=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(b,g*_*w),x.set(d,m*_*w);const S=[w,w,w,w,w,w];y.set(S,p*_*w)}const T=new Ft;T.setAttribute("position",new te(v,g)),T.setAttribute("uv",new te(x,m)),T.setAttribute("faceIndex",new te(y,p)),t.push(T),i>Sr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gd(r,t,e){const n=new Wn(r,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Qy(r,t,e){const n=new Float32Array(Es),i=new P(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Wd(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xd(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tM(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ya||l===Ma,h=l===Ei||l===Ji;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fh(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Fh(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function eM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nM(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],E=v[x+2];d.push(T,w,w,E,E,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,E=x+2;d.push(T,w,w,E,E,T)}}else return;const m=new(Cm(d)?wu:Su)(d,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function iM(r,t,e){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f;g++)this.render(u[g]/a,d[g]);else{_.multiDrawElementsWEBGL(n,d,0,s,u,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];e.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function rM(r,t,e){const n=new WeakMap,i=new ne;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let y=o.attributes.position.count*x,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*T*4*u),E=new Tl(w,y,T,u);E.type=Dn,E.needsUpdate=!0;const C=x*4;for(let S=0;S<u;S++){const D=m[S],U=p[S],I=v[S],F=y*T*4*S;for(let G=0;G<D.count;G++){const X=G*C;f===!0&&(i.fromBufferAttribute(D,G),w[F+X+0]=i.x,w[F+X+1]=i.y,w[F+X+2]=i.z,w[F+X+3]=0),_===!0&&(i.fromBufferAttribute(U,G),w[F+X+4]=i.x,w[F+X+5]=i.y,w[F+X+6]=i.z,w[F+X+7]=0),g===!0&&(i.fromBufferAttribute(I,G),w[F+X+8]=i.x,w[F+X+9]=i.y,w[F+X+10]=i.z,w[F+X+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new $(y,T)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function aM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Eu extends Me{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:Us,h!==Us&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=Vs),n===void 0&&h===Lr&&(n=Hr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xe,this.minFilter=l!==void 0?l:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zm=new Me,km=new Eu(1,1);km.compareFunction=yu;const Vm=new Tl,Hm=new bu,Gm=new ja,Yd=[],qd=[],$d=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function Gr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Yd[i];if(s===void 0&&(s=new Float32Array(i),Yd[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Le(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ll(r,t){let e=qd[t];e===void 0&&(e=new Int32Array(t),qd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function oM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function lM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function cM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function hM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function uM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Jd.set(n),r.uniformMatrix2fv(this.addr,!1,Jd),Ie(e,n)}}function dM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Zd.set(n),r.uniformMatrix3fv(this.addr,!1,Zd),Ie(e,n)}}function fM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;$d.set(n),r.uniformMatrix4fv(this.addr,!1,$d),Ie(e,n)}}function pM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function mM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function gM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function _M(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function xM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function vM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function yM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function MM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function bM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?km:zm;e.setTexture2D(t||s,i)}function SM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hm,i)}function wM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gm,i)}function AM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vm,i)}function EM(r){switch(r){case 5126:return oM;case 35664:return lM;case 35665:return cM;case 35666:return hM;case 35674:return uM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return xM;case 36294:return vM;case 36295:return yM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return AM}}function TM(r,t){r.uniform1fv(this.addr,t)}function CM(r,t){const e=Gr(t,this.size,2);r.uniform2fv(this.addr,e)}function RM(r,t){const e=Gr(t,this.size,3);r.uniform3fv(this.addr,e)}function PM(r,t){const e=Gr(t,this.size,4);r.uniform4fv(this.addr,e)}function LM(r,t){const e=Gr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function IM(r,t){const e=Gr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function DM(r,t){const e=Gr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function UM(r,t){r.uniform1iv(this.addr,t)}function NM(r,t){r.uniform2iv(this.addr,t)}function OM(r,t){r.uniform3iv(this.addr,t)}function FM(r,t){r.uniform4iv(this.addr,t)}function BM(r,t){r.uniform1uiv(this.addr,t)}function zM(r,t){r.uniform2uiv(this.addr,t)}function kM(r,t){r.uniform3uiv(this.addr,t)}function VM(r,t){r.uniform4uiv(this.addr,t)}function HM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||zm,s[a])}function GM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Hm,s[a])}function WM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Gm,s[a])}function XM(r,t,e){const n=this.cache,i=t.length,s=Ll(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Vm,s[a])}function YM(r){switch(r){case 5126:return TM;case 35664:return CM;case 35665:return RM;case 35666:return PM;case 35674:return LM;case 35675:return IM;case 35676:return DM;case 5124:case 35670:return UM;case 35667:case 35671:return NM;case 35668:case 35672:return OM;case 35669:case 35673:return FM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}class qM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=EM(e.type)}}class $M{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YM(e.type)}}class ZM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Kd(r,t){r.seq.push(t),r.map[t.id]=t}function JM(r,t,e){const n=r.name,i=n.length;for(Ic.lastIndex=0;;){const s=Ic.exec(n),a=Ic.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Kd(e,c===void 0?new qM(o,r,t):new $M(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new ZM(o),Kd(e,u)),e=u}}}class ll{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);JM(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function jd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const KM=37297;let jM=0;function QM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function tb(r){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(r);let n;switch(t===e?n="":t===Pa&&e===Ra?n="LinearDisplayP3ToLinearSRGB":t===Ra&&e===Pa&&(n="LinearSRGBToLinearDisplayP3"),r){case Pi:case Ka:return[n,"LinearTransferOETF"];case mn:case El:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Qd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+QM(r.getShaderSource(t),a)}else return i}function eb(r,t){const e=tb(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function nb(r,t){let e;switch(t){case jp:e="Linear";break;case Qp:e="Reinhard";break;case tm:e="OptimizedCineon";break;case em:e="ACESFilmic";break;case im:e="AgX";break;case sm:e="Neutral";break;case nm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ib(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function sb(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rb(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function la(r){return r!==""}function tf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ef(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(r){return r.replace(ab,lb)}const ob=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lb(r,t){let e=kt[t];if(e===void 0){const n=ob.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bh(e)}const cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(r){return r.replace(cb,hb)}function hb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function sf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ub(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===wp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function db(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case Ji:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function pb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ja:t="ENVMAP_BLENDING_MULTIPLY";break;case Jp:t="ENVMAP_BLENDING_MIX";break;case Kp:t="ENVMAP_BLENDING_ADD";break}return t}function mb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gb(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ub(e),c=db(e),h=fb(e),u=pb(e),d=mb(e),f=ib(e),_=sb(s),g=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(la).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(la).join(`
`),p.length>0&&(p+=`
`)):(m=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?kt.tonemapping_pars_fragment:"",e.toneMapping!==Si?nb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,eb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),a=Bh(a),a=tf(a,e),a=ef(a,e),o=Bh(o),o=tf(o,e),o=ef(o,e),a=nf(a),o=nf(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+a,y=v+p+o,T=jd(i,i.VERTEX_SHADER,x),w=jd(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(D){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(T).trim(),F=i.getShaderInfoLog(w).trim();let G=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,T,w);else{const tt=Qd(i,T,"vertex"),z=Qd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+tt+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||F==="")&&(X=!1);X&&(D.diagnostics={runnable:G,programLog:U,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(T),i.deleteShader(w),C=new ll(i,g),b=rb(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,KM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let _b=0;class xb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vb(t),e.set(t,n)),n}}class vb{constructor(t){this.id=_b++,this.code=t,this.usedTimes=0}}function yb(r,t,e,n,i,s,a){const o=new Cl,l=new xb,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,U,I){const F=U.fog,G=I.geometry,X=b.isMeshStandardMaterial?U.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),z=tt&&tt.mapping===Vr?tt.image.height:null,it=_[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const nt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=nt!==void 0?nt.length:0;let Et=0;G.morphAttributes.position!==void 0&&(Et=1),G.morphAttributes.normal!==void 0&&(Et=2),G.morphAttributes.color!==void 0&&(Et=3);let Xt,Y,st,_t;if(it){const De=Gn[it];Xt=De.vertexShader,Y=De.fragmentShader}else Xt=b.vertexShader,Y=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),_t=l.getFragmentShaderID(b);const ct=r.getRenderTarget(),Rt=I.isInstancedMesh===!0,Dt=I.isBatchedMesh===!0,Lt=!!b.map,O=!!b.matcap,j=!!tt,K=!!b.aoMap,ot=!!b.lightMap,rt=!!b.bumpMap,at=!!b.normalMap,L=!!b.displacementMap,A=!!b.emissiveMap,B=!!b.metalnessMap,q=!!b.roughnessMap,Z=b.anisotropy>0,Q=b.clearcoat>0,wt=b.iridescence>0,et=b.sheen>0,Mt=b.transmission>0,At=Z&&!!b.anisotropyMap,lt=Q&&!!b.clearcoatMap,mt=Q&&!!b.clearcoatNormalMap,Pt=Q&&!!b.clearcoatRoughnessMap,xt=wt&&!!b.iridescenceMap,vt=wt&&!!b.iridescenceThicknessMap,Wt=et&&!!b.sheenColorMap,Yt=et&&!!b.sheenRoughnessMap,jt=!!b.specularMap,Zt=!!b.specularColorMap,Qt=!!b.specularIntensityMap,bt=Mt&&!!b.transmissionMap,M=Mt&&!!b.thicknessMap,k=!!b.gradientMap,J=!!b.alphaMap,ht=b.alphaTest>0,gt=!!b.alphaHash,qt=!!b.extensions;let Gt=Si;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Gt=r.toneMapping);const ce={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:Xt,fragmentShader:Y,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:_t,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Dt,instancing:Rt,instancingColor:Rt&&I.instanceColor!==null,instancingMorph:Rt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Pi,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:O,envMap:j,envMapMode:j&&tt.mapping,envMapCubeUVHeight:z,aoMap:K,lightMap:ot,bumpMap:rt,normalMap:at,displacementMap:d&&L,emissiveMap:A,normalMapObjectSpace:at&&b.normalMapType===ym,normalMapTangentSpace:at&&b.normalMapType===Qi,metalnessMap:B,roughnessMap:q,anisotropy:Z,anisotropyMap:At,clearcoat:Q,clearcoatMap:lt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Pt,iridescence:wt,iridescenceMap:xt,iridescenceThicknessMap:vt,sheen:et,sheenColorMap:Wt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Zt,specularIntensityMap:Qt,transmission:Mt,transmissionMap:bt,thicknessMap:M,gradientMap:k,opaque:b.transparent===!1&&b.blending===Ds&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ht,alphaHash:gt,combine:b.combine,mapUv:Lt&&g(b.map.channel),aoMapUv:K&&g(b.aoMap.channel),lightMapUv:ot&&g(b.lightMap.channel),bumpMapUv:rt&&g(b.bumpMap.channel),normalMapUv:at&&g(b.normalMap.channel),displacementMapUv:L&&g(b.displacementMap.channel),emissiveMapUv:A&&g(b.emissiveMap.channel),metalnessMapUv:B&&g(b.metalnessMap.channel),roughnessMapUv:q&&g(b.roughnessMap.channel),anisotropyMapUv:At&&g(b.anisotropyMap.channel),clearcoatMapUv:lt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&g(b.sheenRoughnessMap.channel),specularMapUv:jt&&g(b.specularMap.channel),specularColorMapUv:Zt&&g(b.specularColorMap.channel),specularIntensityMapUv:Qt&&g(b.specularIntensityMap.channel),transmissionMapUv:bt&&g(b.transmissionMap.channel),thicknessMapUv:M&&g(b.thicknessMap.channel),alphaMapUv:J&&g(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(at||Z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(Lt||J),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Et,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Gt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_n,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qt&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(S,b),x(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function v(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),b.push(o.mask)}function y(b){const S=_[b.type];let D;if(S){const U=Gn[S];D=Nm.clone(U.uniforms)}else D=b.uniforms;return D}function T(b,S){let D;for(let U=0,I=h.length;U<I;U++){const F=h[U];if(F.cacheKey===S){D=F,++D.usedTimes;break}}return D===void 0&&(D=new gb(r,S,b,s),h.push(D)),D}function w(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:C}}function Mb(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function bb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function rf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function af(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||bb),n.length>1&&n.sort(d||rf),i.length>1&&i.sort(d||rf)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Sb(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new af,r.set(n,[a])):i>=s.length?(a=new af,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function wb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ft};break;case"SpotLight":e={position:new P,direction:new P,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Ab(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Eb=0;function Tb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Cb(r){const t=new wb,e=Ab(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new Tt,a=new Tt;function o(c,h){let u=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let _=0,g=0,m=0,p=0,v=0,x=0,y=0,T=0,w=0,E=0,C=0;c.sort(Tb);const b=h===!0?Math.PI:1;for(let D=0,U=c.length;D<U;D++){const I=c[D],F=I.color,G=I.intensity,X=I.distance,tt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*G*b,d+=F.g*G*b,f+=F.b*G*b;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],G);C++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const it=I.shadow,nt=e.get(I);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,n.directionalShadow[_]=nt,n.directionalShadowMap[_]=tt,n.directionalShadowMatrix[_]=I.shadow.matrix,x++}n.directional[_]=z,_++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(F).multiplyScalar(G*b),z.distance=X,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[m]=z;const it=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,it.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[m]=it.matrix,I.castShadow){const nt=e.get(I);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,n.spotShadow[m]=nt,n.spotShadowMap[m]=tt,T++}m++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(F).multiplyScalar(G),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=z,p++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*b),z.distance=I.distance,z.decay=I.decay,I.castShadow){const it=I.shadow,nt=e.get(I);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,nt.shadowCameraNear=it.camera.near,nt.shadowCameraFar=it.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=z,g++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(G*b),z.groundColor.copy(I.groundColor).multiplyScalar(G*b),n.hemi[v]=z,v++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==_||S.pointLength!==g||S.spotLength!==m||S.rectAreaLength!==p||S.hemiLength!==v||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==T||S.numSpotMaps!==w||S.numLightProbes!==C)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=p,n.point.length=g,n.hemi.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=T+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,S.directionalLength=_,S.pointLength=g,S.spotLength=m,S.rectAreaLength=p,S.hemiLength=v,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=T,S.numSpotMaps=w,S.numLightProbes=C,n.version=Eb++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function of(r){const t=new Cb(r),e=[],n=[];function i(){e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(h){t.setup(e,h)}function l(h){t.setupView(e,h)}return{init:i,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Rb(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new of(r),t.set(i,[o])):s>=a.length?(o=new of(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Tu extends $e{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cu extends $e{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ib(r,t,e){let n=new Qa;const i=new $,s=new $,a=new ne,o=new Tu({depthPacking:vm}),l=new Cu,c={},h=e.maxTextureSize,u={[Ai]:tn,[tn]:Ai,[_n]:_n},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Pb,fragmentShader:Lb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let p=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),U=r.state;U.setBlending(bi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=p!==$n&&this.type===$n,F=p===$n&&this.type!==$n;for(let G=0,X=w.length;G<X;G++){const tt=w[G],z=tt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const it=z.getFrameExtents();if(i.multiply(it),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,z.mapSize.y=s.y)),z.map===null||I===!0||F===!0){const dt=this.type!==$n?{minFilter:xe,magFilter:xe}:{};z.map!==null&&z.map.dispose(),z.map=new Wn(i.x,i.y,dt),z.map.texture.name=tt.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const nt=z.getViewportCount();for(let dt=0;dt<nt;dt++){const Et=z.getViewport(dt);a.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),U.viewport(a),z.updateMatrices(tt,dt),n=z.getFrustum(),y(E,C,z.camera,tt,this.type)}z.isPointLightShadow!==!0&&this.type===$n&&v(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,S,D)};function v(w,E){const C=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,C,f,g,null)}function x(w,E,C,b){let S=null;const D=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=S.uuid,I=E.uuid;let F=c[U];F===void 0&&(F={},c[U]=F);let G=F[I];G===void 0&&(G=S.clone(),F[I]=G,E.addEventListener("dispose",T)),S=G}if(S.visible=E.visible,S.wireframe=E.wireframe,b===$n?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=r.properties.get(S);U.light=C}return S}function y(w,E,C,b,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===$n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const I=t.update(w),F=w.material;if(Array.isArray(F)){const G=I.groups;for(let X=0,tt=G.length;X<tt;X++){const z=G[X],it=F[z.materialIndex];if(it&&it.visible){const nt=x(w,it,b,S);w.onBeforeShadow(r,w,E,C,I,nt,z),r.renderBufferDirect(C,null,I,nt,w,z),w.onAfterShadow(r,w,E,C,I,nt,z)}}}else if(F.visible){const G=x(w,F,b,S);w.onBeforeShadow(r,w,E,C,I,G,null),r.renderBufferDirect(C,null,I,G,w,null),w.onAfterShadow(r,w,E,C,I,G,null)}}const U=w.children;for(let I=0,F=U.length;I<F;I++)y(U[I],E,C,b,S)}function T(w){w.target.removeEventListener("dispose",T);for(const C in c){const b=c[C],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function Db(r){function t(){let M=!1;const k=new ne;let J=null;const ht=new ne(0,0,0,0);return{setMask:function(gt){J!==gt&&!M&&(r.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){M=gt},setClear:function(gt,qt,Gt,ce,De){De===!0&&(gt*=ce,qt*=ce,Gt*=ce),k.set(gt,qt,Gt,ce),ht.equals(k)===!1&&(r.clearColor(gt,qt,Gt,ce),ht.copy(k))},reset:function(){M=!1,J=null,ht.set(-1,0,0,0)}}}function e(){let M=!1,k=null,J=null,ht=null;return{setTest:function(gt){gt?_t(r.DEPTH_TEST):ct(r.DEPTH_TEST)},setMask:function(gt){k!==gt&&!M&&(r.depthMask(gt),k=gt)},setFunc:function(gt){if(J!==gt){switch(gt){case Gp:r.depthFunc(r.NEVER);break;case Wp:r.depthFunc(r.ALWAYS);break;case Xp:r.depthFunc(r.LESS);break;case va:r.depthFunc(r.LEQUAL);break;case Yp:r.depthFunc(r.EQUAL);break;case qp:r.depthFunc(r.GEQUAL);break;case $p:r.depthFunc(r.GREATER);break;case Zp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=gt}},setLocked:function(gt){M=gt},setClear:function(gt){ht!==gt&&(r.clearDepth(gt),ht=gt)},reset:function(){M=!1,k=null,J=null,ht=null}}}function n(){let M=!1,k=null,J=null,ht=null,gt=null,qt=null,Gt=null,ce=null,De=null;return{setTest:function(ie){M||(ie?_t(r.STENCIL_TEST):ct(r.STENCIL_TEST))},setMask:function(ie){k!==ie&&!M&&(r.stencilMask(ie),k=ie)},setFunc:function(ie,Ee,Te){(J!==ie||ht!==Ee||gt!==Te)&&(r.stencilFunc(ie,Ee,Te),J=ie,ht=Ee,gt=Te)},setOp:function(ie,Ee,Te){(qt!==ie||Gt!==Ee||ce!==Te)&&(r.stencilOp(ie,Ee,Te),qt=ie,Gt=Ee,ce=Te)},setLocked:function(ie){M=ie},setClear:function(ie){De!==ie&&(r.clearStencil(ie),De=ie)},reset:function(){M=!1,k=null,J=null,ht=null,gt=null,qt=null,Gt=null,ce=null,De=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,m=null,p=null,v=null,x=null,y=null,T=null,w=new ft(0,0,0),E=0,C=!1,b=null,S=null,D=null,U=null,I=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(tt)[1]),G=X>=1):tt.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),G=X>=2);let z=null,it={};const nt=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),Et=new ne().fromArray(nt),Xt=new ne().fromArray(dt);function Y(M,k,J,ht){const gt=new Uint8Array(4),qt=r.createTexture();r.bindTexture(M,qt),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Gt=0;Gt<J;Gt++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(k,0,r.RGBA,1,1,ht,0,r.RGBA,r.UNSIGNED_BYTE,gt):r.texImage2D(k+Gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,gt);return qt}const st={};st[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),_t(r.DEPTH_TEST),s.setFunc(va),rt(!1),at(rh),_t(r.CULL_FACE),K(bi);function _t(M){c[M]!==!0&&(r.enable(M),c[M]=!0)}function ct(M){c[M]!==!1&&(r.disable(M),c[M]=!1)}function Rt(M,k){return h[M]!==k?(r.bindFramebuffer(M,k),h[M]=k,M===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=k),M===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=k),!0):!1}function Dt(M,k){let J=d,ht=!1;if(M){J=u.get(k),J===void 0&&(J=[],u.set(k,J));const gt=M.textures;if(J.length!==gt.length||J[0]!==r.COLOR_ATTACHMENT0){for(let qt=0,Gt=gt.length;qt<Gt;qt++)J[qt]=r.COLOR_ATTACHMENT0+qt;J.length=gt.length,ht=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,ht=!0);ht&&r.drawBuffers(J)}function Lt(M){return f!==M?(r.useProgram(M),f=M,!0):!1}const O={[Gi]:r.FUNC_ADD,[Ep]:r.FUNC_SUBTRACT,[Tp]:r.FUNC_REVERSE_SUBTRACT};O[Cp]=r.MIN,O[Rp]=r.MAX;const j={[Pp]:r.ZERO,[Lp]:r.ONE,[Ip]:r.SRC_COLOR,[dl]:r.SRC_ALPHA,[Bp]:r.SRC_ALPHA_SATURATE,[Op]:r.DST_COLOR,[Up]:r.DST_ALPHA,[Dp]:r.ONE_MINUS_SRC_COLOR,[fl]:r.ONE_MINUS_SRC_ALPHA,[Fp]:r.ONE_MINUS_DST_COLOR,[Np]:r.ONE_MINUS_DST_ALPHA,[zp]:r.CONSTANT_COLOR,[kp]:r.ONE_MINUS_CONSTANT_COLOR,[Vp]:r.CONSTANT_ALPHA,[Hp]:r.ONE_MINUS_CONSTANT_ALPHA};function K(M,k,J,ht,gt,qt,Gt,ce,De,ie){if(M===bi){_===!0&&(ct(r.BLEND),_=!1);return}if(_===!1&&(_t(r.BLEND),_=!0),M!==Ap){if(M!==g||ie!==C){if((m!==Gi||x!==Gi)&&(r.blendEquation(r.FUNC_ADD),m=Gi,x=Gi),ie)switch(M){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ah:r.blendFunc(r.ONE,r.ONE);break;case oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ah:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}p=null,v=null,y=null,T=null,w.set(0,0,0),E=0,g=M,C=ie}return}gt=gt||k,qt=qt||J,Gt=Gt||ht,(k!==m||gt!==x)&&(r.blendEquationSeparate(O[k],O[gt]),m=k,x=gt),(J!==p||ht!==v||qt!==y||Gt!==T)&&(r.blendFuncSeparate(j[J],j[ht],j[qt],j[Gt]),p=J,v=ht,y=qt,T=Gt),(ce.equals(w)===!1||De!==E)&&(r.blendColor(ce.r,ce.g,ce.b,De),w.copy(ce),E=De),g=M,C=!1}function ot(M,k){M.side===_n?ct(r.CULL_FACE):_t(r.CULL_FACE);let J=M.side===tn;k&&(J=!J),rt(J),M.blending===Ds&&M.transparent===!1?K(bi):K(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),i.setMask(M.colorWrite);const ht=M.stencilWrite;a.setTest(ht),ht&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),A(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(M){b!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),b=M)}function at(M){M!==bp?(_t(r.CULL_FACE),M!==S&&(M===rh?r.cullFace(r.BACK):M===Sp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ct(r.CULL_FACE),S=M}function L(M){M!==D&&(G&&r.lineWidth(M),D=M)}function A(M,k,J){M?(_t(r.POLYGON_OFFSET_FILL),(U!==k||I!==J)&&(r.polygonOffset(k,J),U=k,I=J)):ct(r.POLYGON_OFFSET_FILL)}function B(M){M?_t(r.SCISSOR_TEST):ct(r.SCISSOR_TEST)}function q(M){M===void 0&&(M=r.TEXTURE0+F-1),z!==M&&(r.activeTexture(M),z=M)}function Z(M,k,J){J===void 0&&(z===null?J=r.TEXTURE0+F-1:J=z);let ht=it[J];ht===void 0&&(ht={type:void 0,texture:void 0},it[J]=ht),(ht.type!==M||ht.texture!==k)&&(z!==J&&(r.activeTexture(J),z=J),r.bindTexture(M,k||st[M]),ht.type=M,ht.texture=k)}function Q(){const M=it[z];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function wt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Mt(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function At(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Pt(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function xt(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Yt(M){Et.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),Et.copy(M))}function jt(M){Xt.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),Xt.copy(M))}function Zt(M,k){let J=l.get(k);J===void 0&&(J=new WeakMap,l.set(k,J));let ht=J.get(M);ht===void 0&&(ht=r.getUniformBlockIndex(k,M.name),J.set(M,ht))}function Qt(M,k){const ht=l.get(k).get(M);o.get(k)!==ht&&(r.uniformBlockBinding(k,ht,M.__bindingPointIndex),o.set(k,ht))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},z=null,it={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,m=null,p=null,v=null,x=null,y=null,T=null,w=new ft(0,0,0),E=0,C=!1,b=null,S=null,D=null,U=null,I=null,Et.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:_t,disable:ct,bindFramebuffer:Rt,drawBuffers:Dt,useProgram:Lt,setBlending:K,setMaterial:ot,setFlipSided:rt,setCullFace:at,setLineWidth:L,setPolygonOffset:A,setScissorTest:B,activeTexture:q,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:wt,compressedTexImage3D:et,texImage2D:vt,texImage3D:Wt,updateUBOMapping:Zt,uniformBlockBinding:Qt,texStorage2D:Pt,texStorage3D:xt,texSubImage2D:Mt,texSubImage3D:At,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Yt,viewport:jt,reset:bt}}function Ub(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,A){return f?new OffscreenCanvas(L,A):Da("canvas")}function g(L,A,B){let q=1;const Z=at(L);if((Z.width>B||Z.height>B)&&(q=B/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(q*Z.width),wt=Math.floor(q*Z.height);u===void 0&&(u=_(Q,wt));const et=A?_(Q,wt):u;return et.width=Q,et.height=wt,et.getContext("2d").drawImage(L,0,0,Q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Q+"x"+wt+")."),et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==xe&&L.minFilter!==Pe}function p(L){r.generateMipmap(L)}function v(L,A,B,q,Z=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=A;if(A===r.RED&&(B===r.FLOAT&&(Q=r.R32F),B===r.HALF_FLOAT&&(Q=r.R16F),B===r.UNSIGNED_BYTE&&(Q=r.R8)),A===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Q=r.R8UI),B===r.UNSIGNED_SHORT&&(Q=r.R16UI),B===r.UNSIGNED_INT&&(Q=r.R32UI),B===r.BYTE&&(Q=r.R8I),B===r.SHORT&&(Q=r.R16I),B===r.INT&&(Q=r.R32I)),A===r.RG&&(B===r.FLOAT&&(Q=r.RG32F),B===r.HALF_FLOAT&&(Q=r.RG16F),B===r.UNSIGNED_BYTE&&(Q=r.RG8)),A===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(Q=r.RG8UI),B===r.UNSIGNED_SHORT&&(Q=r.RG16UI),B===r.UNSIGNED_INT&&(Q=r.RG32UI),B===r.BYTE&&(Q=r.RG8I),B===r.SHORT&&(Q=r.RG16I),B===r.INT&&(Q=r.RG32I)),A===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),A===r.RGBA){const wt=Z?Ca:ee.getTransfer(q);B===r.FLOAT&&(Q=r.RGBA32F),B===r.HALF_FLOAT&&(Q=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Q=wt===ae?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==xe&&L.minFilter!==Pe?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function y(L){const A=L.target;A.removeEventListener("dispose",y),w(A),A.isVideoTexture&&h.delete(A)}function T(L){const A=L.target;A.removeEventListener("dispose",T),C(A)}function w(L){const A=n.get(L);if(A.__webglInit===void 0)return;const B=L.source,q=d.get(B);if(q){const Z=q[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(L),Object.keys(q).length===0&&d.delete(B)}n.remove(L)}function E(L){const A=n.get(L);r.deleteTexture(A.__webglTexture);const B=L.source,q=d.get(B);delete q[A.__cacheKey],a.memory.textures--}function C(L){const A=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(A.__webglFramebuffer[q]))for(let Z=0;Z<A.__webglFramebuffer[q].length;Z++)r.deleteFramebuffer(A.__webglFramebuffer[q][Z]);else r.deleteFramebuffer(A.__webglFramebuffer[q]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[q])}else{if(Array.isArray(A.__webglFramebuffer))for(let q=0;q<A.__webglFramebuffer.length;q++)r.deleteFramebuffer(A.__webglFramebuffer[q]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let q=0;q<A.__webglColorRenderbuffer.length;q++)A.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[q]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const B=L.textures;for(let q=0,Z=B.length;q<Z;q++){const Q=n.get(B[q]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(L)}let b=0;function S(){b=0}function D(){const L=b;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),b+=1,L}function U(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function I(L,A){const B=n.get(L);if(L.isVideoTexture&&ot(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){const q=L.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(B,L,A);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+A)}function F(L,A){const B=n.get(L);if(L.version>0&&B.__version!==L.version){Et(B,L,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+A)}function G(L,A){const B=n.get(L);if(L.version>0&&B.__version!==L.version){Et(B,L,A);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+A)}function X(L,A){const B=n.get(L);if(L.version>0&&B.__version!==L.version){Xt(B,L,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+A)}const tt={[ba]:r.REPEAT,[In]:r.CLAMP_TO_EDGE,[Sa]:r.MIRRORED_REPEAT},z={[xe]:r.NEAREST,[cu]:r.NEAREST_MIPMAP_NEAREST,[Mr]:r.NEAREST_MIPMAP_LINEAR,[Pe]:r.LINEAR,[ua]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},it={[Mm]:r.NEVER,[Tm]:r.ALWAYS,[bm]:r.LESS,[yu]:r.LEQUAL,[Sm]:r.EQUAL,[Em]:r.GEQUAL,[wm]:r.GREATER,[Am]:r.NOTEQUAL};function nt(L,A){if(A.type===Dn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Pe||A.magFilter===ua||A.magFilter===Mr||A.magFilter===Kn||A.minFilter===Pe||A.minFilter===ua||A.minFilter===Mr||A.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,tt[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,tt[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,tt[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,z[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,z[A.minFilter]),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,it[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xe||A.minFilter!==Mr&&A.minFilter!==Kn||A.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function dt(L,A){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",y));const q=A.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const Q=U(A);if(Q!==L.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[Q].usedTimes++;const wt=Z[L.__cacheKey];wt!==void 0&&(Z[L.__cacheKey].usedTimes--,wt.usedTimes===0&&E(A)),L.__cacheKey=Q,L.__webglTexture=Z[Q].texture}return B}function Et(L,A,B){let q=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(q=r.TEXTURE_3D);const Z=dt(L,A),Q=A.source;e.bindTexture(q,L.__webglTexture,r.TEXTURE0+B);const wt=n.get(Q);if(Q.version!==wt.__version||Z===!0){e.activeTexture(r.TEXTURE0+B);const et=ee.getPrimaries(ee.workingColorSpace),Mt=A.colorSpace===vi?null:ee.getPrimaries(A.colorSpace),At=A.colorSpace===vi||et===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let lt=g(A.image,!1,i.maxTextureSize);lt=rt(A,lt);const mt=s.convert(A.format,A.colorSpace),Pt=s.convert(A.type);let xt=v(A.internalFormat,mt,Pt,A.colorSpace,A.isVideoTexture);nt(q,A);let vt;const Wt=A.mipmaps,Yt=A.isVideoTexture!==!0&&xt!==xu,jt=wt.__version===void 0||Z===!0,Zt=Q.dataReady,Qt=x(A,lt);if(A.isDepthTexture)xt=r.DEPTH_COMPONENT16,A.type===Dn?xt=r.DEPTH_COMPONENT32F:A.type===Vs?xt=r.DEPTH_COMPONENT24:A.type===Hr&&(xt=r.DEPTH24_STENCIL8),jt&&(Yt?e.texStorage2D(r.TEXTURE_2D,1,xt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,xt,lt.width,lt.height,0,mt,Pt,null));else if(A.isDataTexture)if(Wt.length>0){Yt&&jt&&e.texStorage2D(r.TEXTURE_2D,Qt,xt,Wt[0].width,Wt[0].height);for(let bt=0,M=Wt.length;bt<M;bt++)vt=Wt[bt],Yt?Zt&&e.texSubImage2D(r.TEXTURE_2D,bt,0,0,vt.width,vt.height,mt,Pt,vt.data):e.texImage2D(r.TEXTURE_2D,bt,xt,vt.width,vt.height,0,mt,Pt,vt.data);A.generateMipmaps=!1}else Yt?(jt&&e.texStorage2D(r.TEXTURE_2D,Qt,xt,lt.width,lt.height),Zt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,mt,Pt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,xt,lt.width,lt.height,0,mt,Pt,lt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Yt&&jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Qt,xt,Wt[0].width,Wt[0].height,lt.depth);for(let bt=0,M=Wt.length;bt<M;bt++)vt=Wt[bt],A.format!==yn?mt!==null?Yt?Zt&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,vt.width,vt.height,lt.depth,mt,vt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,xt,vt.width,vt.height,lt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Zt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,vt.width,vt.height,lt.depth,mt,Pt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,bt,xt,vt.width,vt.height,lt.depth,0,mt,Pt,vt.data)}else{Yt&&jt&&e.texStorage2D(r.TEXTURE_2D,Qt,xt,Wt[0].width,Wt[0].height);for(let bt=0,M=Wt.length;bt<M;bt++)vt=Wt[bt],A.format!==yn?mt!==null?Yt?Zt&&e.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,vt.width,vt.height,mt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,bt,xt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Zt&&e.texSubImage2D(r.TEXTURE_2D,bt,0,0,vt.width,vt.height,mt,Pt,vt.data):e.texImage2D(r.TEXTURE_2D,bt,xt,vt.width,vt.height,0,mt,Pt,vt.data)}else if(A.isDataArrayTexture)Yt?(jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Qt,xt,lt.width,lt.height,lt.depth),Zt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,mt,Pt,lt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,lt.width,lt.height,lt.depth,0,mt,Pt,lt.data);else if(A.isData3DTexture)Yt?(jt&&e.texStorage3D(r.TEXTURE_3D,Qt,xt,lt.width,lt.height,lt.depth),Zt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,mt,Pt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,xt,lt.width,lt.height,lt.depth,0,mt,Pt,lt.data);else if(A.isFramebufferTexture){if(jt)if(Yt)e.texStorage2D(r.TEXTURE_2D,Qt,xt,lt.width,lt.height);else{let bt=lt.width,M=lt.height;for(let k=0;k<Qt;k++)e.texImage2D(r.TEXTURE_2D,k,xt,bt,M,0,mt,Pt,null),bt>>=1,M>>=1}}else if(Wt.length>0){if(Yt&&jt){const bt=at(Wt[0]);e.texStorage2D(r.TEXTURE_2D,Qt,xt,bt.width,bt.height)}for(let bt=0,M=Wt.length;bt<M;bt++)vt=Wt[bt],Yt?Zt&&e.texSubImage2D(r.TEXTURE_2D,bt,0,0,mt,Pt,vt):e.texImage2D(r.TEXTURE_2D,bt,xt,mt,Pt,vt);A.generateMipmaps=!1}else if(Yt){if(jt){const bt=at(lt);e.texStorage2D(r.TEXTURE_2D,Qt,xt,bt.width,bt.height)}Zt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,Pt,lt)}else e.texImage2D(r.TEXTURE_2D,0,xt,mt,Pt,lt);m(A)&&p(q),wt.__version=Q.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Xt(L,A,B){if(A.image.length!==6)return;const q=dt(L,A),Z=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+B);const Q=n.get(Z);if(Z.version!==Q.__version||q===!0){e.activeTexture(r.TEXTURE0+B);const wt=ee.getPrimaries(ee.workingColorSpace),et=A.colorSpace===vi?null:ee.getPrimaries(A.colorSpace),Mt=A.colorSpace===vi||wt===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const At=A.isCompressedTexture||A.image[0].isCompressedTexture,lt=A.image[0]&&A.image[0].isDataTexture,mt=[];for(let M=0;M<6;M++)!At&&!lt?mt[M]=g(A.image[M],!0,i.maxCubemapSize):mt[M]=lt?A.image[M].image:A.image[M],mt[M]=rt(A,mt[M]);const Pt=mt[0],xt=s.convert(A.format,A.colorSpace),vt=s.convert(A.type),Wt=v(A.internalFormat,xt,vt,A.colorSpace),Yt=A.isVideoTexture!==!0,jt=Q.__version===void 0||q===!0,Zt=Z.dataReady;let Qt=x(A,Pt);nt(r.TEXTURE_CUBE_MAP,A);let bt;if(At){Yt&&jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Qt,Wt,Pt.width,Pt.height);for(let M=0;M<6;M++){bt=mt[M].mipmaps;for(let k=0;k<bt.length;k++){const J=bt[k];A.format!==yn?xt!==null?Yt?Zt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k,0,0,J.width,J.height,xt,J.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k,Wt,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?Zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k,0,0,J.width,J.height,xt,vt,J.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k,Wt,J.width,J.height,0,xt,vt,J.data)}}}else{if(bt=A.mipmaps,Yt&&jt){bt.length>0&&Qt++;const M=at(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Qt,Wt,M.width,M.height)}for(let M=0;M<6;M++)if(lt){Yt?Zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,mt[M].width,mt[M].height,xt,vt,mt[M].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,Wt,mt[M].width,mt[M].height,0,xt,vt,mt[M].data);for(let k=0;k<bt.length;k++){const ht=bt[k].image[M].image;Yt?Zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k+1,0,0,ht.width,ht.height,xt,vt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k+1,Wt,ht.width,ht.height,0,xt,vt,ht.data)}}else{Yt?Zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,xt,vt,mt[M]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,Wt,xt,vt,mt[M]);for(let k=0;k<bt.length;k++){const J=bt[k];Yt?Zt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k+1,0,0,xt,vt,J.image[M]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+M,k+1,Wt,xt,vt,J.image[M])}}}m(A)&&p(r.TEXTURE_CUBE_MAP),Q.__version=Z.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Y(L,A,B,q,Z,Q){const wt=s.convert(B.format,B.colorSpace),et=s.convert(B.type),Mt=v(B.internalFormat,wt,et,B.colorSpace);if(!n.get(A).__hasExternalTextures){const lt=Math.max(1,A.width>>Q),mt=Math.max(1,A.height>>Q);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,Q,Mt,lt,mt,A.depth,0,wt,et,null):e.texImage2D(Z,Q,Mt,lt,mt,0,wt,et,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),K(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,Z,n.get(B).__webglTexture,0,j(A)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,Z,n.get(B).__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,A,B){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let q=r.DEPTH_COMPONENT24;if(B||K(A)){const Z=A.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Dn?q=r.DEPTH_COMPONENT32F:Z.type===Vs&&(q=r.DEPTH_COMPONENT24));const Q=j(A);K(A)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,q,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,q,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,q,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const q=j(A);B&&K(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,q,r.DEPTH24_STENCIL8,A.width,A.height):K(A)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,q,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const q=A.textures;for(let Z=0;Z<q.length;Z++){const Q=q[Z],wt=s.convert(Q.format,Q.colorSpace),et=s.convert(Q.type),Mt=v(Q.internalFormat,wt,et,Q.colorSpace),At=j(A);B&&K(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Mt,A.width,A.height):K(A)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,Mt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);const q=n.get(A.depthTexture).__webglTexture,Z=j(A);if(A.depthTexture.format===Us)K(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else if(A.depthTexture.format===Lr)K(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ct(L){const A=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");_t(A.__webglFramebuffer,L)}else if(B){A.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[q]),A.__webglDepthbuffer[q]=r.createRenderbuffer(),st(A.__webglDepthbuffer[q],L,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),st(A.__webglDepthbuffer,L,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(L,A,B){const q=n.get(L);A!==void 0&&Y(q.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&ct(L)}function Dt(L){const A=L.texture,B=n.get(L),q=n.get(A);L.addEventListener("dispose",T);const Z=L.textures,Q=L.isWebGLCubeRenderTarget===!0,wt=Z.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=A.version,a.memory.textures++),Q){B.__webglFramebuffer=[];for(let et=0;et<6;et++)if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[et]=[];for(let Mt=0;Mt<A.mipmaps.length;Mt++)B.__webglFramebuffer[et][Mt]=r.createFramebuffer()}else B.__webglFramebuffer[et]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let et=0;et<A.mipmaps.length;et++)B.__webglFramebuffer[et]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(wt)for(let et=0,Mt=Z.length;et<Mt;et++){const At=n.get(Z[et]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&K(L)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let et=0;et<Z.length;et++){const Mt=Z[et];B.__webglColorRenderbuffer[et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[et]);const At=s.convert(Mt.format,Mt.colorSpace),lt=s.convert(Mt.type),mt=v(Mt.internalFormat,At,lt,Mt.colorSpace,L.isXRRenderTarget===!0),Pt=j(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,mt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,B.__webglColorRenderbuffer[et])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),st(B.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),nt(r.TEXTURE_CUBE_MAP,A);for(let et=0;et<6;et++)if(A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Y(B.__webglFramebuffer[et][Mt],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,Mt);else Y(B.__webglFramebuffer[et],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(A)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let et=0,Mt=Z.length;et<Mt;et++){const At=Z[et],lt=n.get(At);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),nt(r.TEXTURE_2D,At),Y(B.__webglFramebuffer,L,At,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,0),m(At)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let et=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(et=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(et,q.__webglTexture),nt(et,A),A.mipmaps&&A.mipmaps.length>0)for(let Mt=0;Mt<A.mipmaps.length;Mt++)Y(B.__webglFramebuffer[Mt],L,A,r.COLOR_ATTACHMENT0,et,Mt);else Y(B.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,et,0);m(A)&&p(et),e.unbindTexture()}L.depthBuffer&&ct(L)}function Lt(L){const A=L.textures;for(let B=0,q=A.length;B<q;B++){const Z=A[B];if(m(Z)){const Q=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,wt=n.get(Z).__webglTexture;e.bindTexture(Q,wt),p(Q),e.unbindTexture()}}}function O(L){if(L.samples>0&&K(L)===!1){const A=L.textures,B=L.width,q=L.height;let Z=r.COLOR_BUFFER_BIT;const Q=[],wt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=n.get(L),Mt=A.length>1;if(Mt)for(let At=0;At<A.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let At=0;At<A.length;At++){Q.push(r.COLOR_ATTACHMENT0+At),L.depthBuffer&&Q.push(wt);const lt=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(lt===!1&&(L.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&et.__isTransmissionRenderTarget!==!0&&(Z|=r.STENCIL_BUFFER_BIT)),Mt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,et.__webglColorRenderbuffer[At]),lt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[wt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[wt])),Mt){const mt=n.get(A[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,mt,0)}r.blitFramebuffer(0,0,B,q,0,0,B,q,Z,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<A.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,et.__webglColorRenderbuffer[At]);const lt=n.get(A[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,lt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}}function j(L){return Math.min(i.maxSamples,L.samples)}function K(L){const A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ot(L){const A=a.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function rt(L,A){const B=L.colorSpace,q=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==Pi&&B!==vi&&(ee.getTransfer(B)===ae?(q!==yn||Z!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}function at(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=I,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=Rt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=K}function Wm(r,t){function e(n,i=vi){let s;const a=ee.getTransfer(i);if(n===wi)return r.UNSIGNED_BYTE;if(n===du)return r.UNSIGNED_SHORT_4_4_4_4;if(n===fu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===am)return r.BYTE;if(n===om)return r.SHORT;if(n===hu)return r.UNSIGNED_SHORT;if(n===uu)return r.INT;if(n===Vs)return r.UNSIGNED_INT;if(n===Dn)return r.FLOAT;if(n===wa)return r.HALF_FLOAT;if(n===cm)return r.ALPHA;if(n===hm)return r.RGB;if(n===yn)return r.RGBA;if(n===um)return r.LUMINANCE;if(n===dm)return r.LUMINANCE_ALPHA;if(n===Us)return r.DEPTH_COMPONENT;if(n===Lr)return r.DEPTH_STENCIL;if(n===pu)return r.RED;if(n===mu)return r.RED_INTEGER;if(n===fm)return r.RG;if(n===gu)return r.RG_INTEGER;if(n===_u)return r.RGBA_INTEGER;if(n===nl||n===il||n===sl||n===rl)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hh||n===uh||n===dh||n===fh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xu)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ph||n===mh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ph)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gh||n===_h||n===xh||n===vh||n===yh||n===Mh||n===bh||n===Sh||n===wh||n===Ah||n===Eh||n===Th||n===Ch||n===Rh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_h)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ah)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Th)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ch)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rh)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===al||n===Ph||n===Lh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===al)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pm||n===Ih||n===Dh||n===Uh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===al)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ih)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Xm extends se{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ps extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nb={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Me,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Xn({vertexShader:Ob,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ht(new Li(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class zb extends ai{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new Bb,m=e.getContextAttributes();let p=null,v=null;const x=[],y=[],T=new $;let w=null;const E=new se;E.layers.enable(1),E.viewport=new ne;const C=new se;C.layers.enable(2),C.viewport=new ne;const b=[E,C],S=new Xm;S.layers.enable(1),S.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=x[Y];return st===void 0&&(st=new Dc,x[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=x[Y];return st===void 0&&(st=new Dc,x[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=x[Y];return st===void 0&&(st=new Dc,x[Y]=st),st.getHandSpace()};function I(Y){const st=y.indexOf(Y.inputSource);if(st===-1)return;const _t=x[st];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let Y=0;Y<x.length;Y++){const st=y[Y];st!==null&&(y[Y]=null,x[Y].disconnect(st))}D=null,U=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Wn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,_t=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Lr:Us,_t=m.stencil?Hr:Vs);const Rt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Wn(d.textureWidth,d.textureHeight,{format:yn,type:wi,depthTexture:new Eu(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const Dt=t.properties.get(v);Dt.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(Y){for(let st=0;st<Y.removed.length;st++){const _t=Y.removed[st],ct=y.indexOf(_t);ct>=0&&(y[ct]=null,x[ct].disconnect(_t))}for(let st=0;st<Y.added.length;st++){const _t=Y.added[st];let ct=y.indexOf(_t);if(ct===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=y.length){y.push(_t),ct=Dt;break}else if(y[Dt]===null){y[Dt]=_t,ct=Dt;break}if(ct===-1)break}const Rt=x[ct];Rt&&Rt.connect(_t)}}const X=new P,tt=new P;function z(Y,st,_t){X.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(_t.matrixWorld);const ct=X.distanceTo(tt),Rt=st.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,Lt=Rt[14]/(Rt[10]-1),O=Rt[14]/(Rt[10]+1),j=(Rt[9]+1)/Rt[5],K=(Rt[9]-1)/Rt[5],ot=(Rt[8]-1)/Rt[0],rt=(Dt[8]+1)/Dt[0],at=Lt*ot,L=Lt*rt,A=ct/(-ot+rt),B=A*-ot;st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(B),Y.translateZ(A),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const q=Lt+A,Z=O+A,Q=at-B,wt=L+(ct-B),et=j*O/Z*q,Mt=K*O/Z*q;Y.projectionMatrix.makePerspective(Q,wt,et,Mt,q,Z),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function it(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;g.texture!==null&&(Y.near=g.depthNear,Y.far=g.depthFar),S.near=C.near=E.near=Y.near,S.far=C.far=E.far=Y.far,(D!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,U=S.far,E.near=D,E.far=U,C.near=D,C.far=U,E.updateProjectionMatrix(),C.updateProjectionMatrix(),Y.updateProjectionMatrix());const st=Y.parent,_t=S.cameras;it(S,st);for(let ct=0;ct<_t.length;ct++)it(_t[ct],st);_t.length===2?z(S,E,C):S.projectionMatrix.copy(E.projectionMatrix),nt(Y,S,st)};function nt(Y,st,_t){_t===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ir*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null};let dt=null;function Et(Y,st){if(h=st.getViewerPose(c||a),_=st,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ct=!1;_t.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let Dt=0;Dt<_t.length;Dt++){const Lt=_t[Dt];let O=null;if(f!==null)O=f.getViewport(Lt);else{const K=u.getViewSubImage(d,Lt);O=K.viewport,Dt===0&&(t.setRenderTargetTextures(v,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(v))}let j=b[Dt];j===void 0&&(j=new se,j.layers.enable(Dt),j.viewport=new ne,b[Dt]=j),j.matrix.fromArray(Lt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Lt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(O.x,O.y,O.width,O.height),Dt===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(j)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Dt=u.getDepthInformation(_t[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,i.renderState)}}for(let _t=0;_t<x.length;_t++){const ct=y[_t],Rt=x[_t];ct!==null&&Rt!==void 0&&Rt.update(ct,st,c||a)}g.render(t,S),dt&&dt(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const Xt=new Bm;Xt.setAnimationLoop(Et),this.setAnimationLoop=function(Y){dt=Y},this.dispose=function(){}}}const ds=new An,kb=new Tt;function Vb(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Um(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),x=v.envMap,y=v.envMapRotation;if(x&&(m.envMap.value=x,ds.copy(y),ds.x*=-1,ds.y*=-1,ds.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(ds)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hb(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(_(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(v,T);const w=t.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){const x=u();v.__bindingPointIndex=x;const y=r.createBuffer(),T=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const C=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,w,b,T)===!0){const U=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let G=0;G<I.length;G++){const X=I[G],tt=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+F,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,F),F+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,y,T){const w=v.value,E=x+"_"+y;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{const C=T[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const T=16;for(let E=0,C=x.length;E<C;E++){const b=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,D=b.length;S<D;S++){const U=b[S],I=Array.isArray(U.value)?U.value:[U.value];for(let F=0,G=I.length;F<G;F++){const X=I[F],tt=g(X),z=y%T;z!==0&&T-z<tt.boundary&&(y+=T-z),U.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=tt.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class zn{constructor(t={}){const{canvas:e=Rm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,E=null,C=-1,b=null;const S=new ne,D=new ne;let U=null;const I=new ft(0);let F=0,G=e.width,X=e.height,tt=1,z=null,it=null;const nt=new ne(0,0,G,X),dt=new ne(0,0,G,X);let Et=!1;const Xt=new Qa;let Y=!1,st=!1;const _t=new Tt,ct=new $,Rt=new P,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return E===null?tt:1}let O=n;function j(R,N){const H=e.getContext(R,N);return H!==null?H:null}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const N="webgl2";if(O=j(N,R),O===null)throw j(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let K,ot,rt,at,L,A,B,q,Z,Q,wt,et,Mt,At,lt,mt,Pt,xt,vt,Wt,Yt,jt,Zt,Qt;function bt(){K=new eM(O),K.init(),ot=new Zy(O,K,t),jt=new Wm(O,K),rt=new Db(O),at=new sM(O),L=new Mb,A=new Ub(O,K,rt,L,ot,jt,at),B=new Ky(x),q=new tM(x),Z=new hx(O),Zt=new qy(O,Z),Q=new nM(O,Z,at,Zt),wt=new aM(O,Q,Z,at),vt=new rM(O,ot,A),mt=new Jy(L),et=new yb(x,B,q,K,ot,Zt,mt),Mt=new Vb(x,L),At=new Sb,lt=new Rb(K),xt=new Yy(x,B,q,rt,wt,d,l),Pt=new Ib(x,wt,ot),Qt=new Hb(O,at,ot,rt),Wt=new $y(O,K,at),Yt=new iM(O,K,at),at.programs=et.programs,x.capabilities=ot,x.extensions=K,x.properties=L,x.renderLists=At,x.shadowMap=Pt,x.state=rt,x.info=at}bt();const M=new zb(x,O);this.xr=M,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=K.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=K.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(R){R!==void 0&&(tt=R,this.setSize(G,X,!1))},this.getSize=function(R){return R.set(G,X)},this.setSize=function(R,N,H=!0){if(M.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,X=N,e.width=Math.floor(R*tt),e.height=Math.floor(N*tt),H===!0&&(e.style.width=R+"px",e.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(G*tt,X*tt).floor()},this.setDrawingBufferSize=function(R,N,H){G=R,X=N,tt=H,e.width=Math.floor(R*H),e.height=Math.floor(N*H),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,N,H,W){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,N,H,W),rt.viewport(S.copy(nt).multiplyScalar(tt).round())},this.getScissor=function(R){return R.copy(dt)},this.setScissor=function(R,N,H,W){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,N,H,W),rt.scissor(D.copy(dt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){rt.setScissorTest(Et=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(R=!0,N=!0,H=!0){let W=0;if(R){let V=!1;if(E!==null){const pt=E.texture.format;V=pt===_u||pt===gu||pt===mu}if(V){const pt=E.texture.type,St=pt===wi||pt===Vs||pt===hu||pt===Hr||pt===du||pt===fu,Ct=xt.getClearColor(),It=xt.getClearAlpha(),Bt=Ct.r,Ut=Ct.g,zt=Ct.b;St?(f[0]=Bt,f[1]=Ut,f[2]=zt,f[3]=It,O.clearBufferuiv(O.COLOR,0,f)):(_[0]=Bt,_[1]=Ut,_[2]=zt,_[3]=It,O.clearBufferiv(O.COLOR,0,_))}else W|=O.COLOR_BUFFER_BIT}N&&(W|=O.DEPTH_BUFFER_BIT),H&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),At.dispose(),lt.dispose(),L.dispose(),B.dispose(),q.dispose(),wt.dispose(),Zt.dispose(),Qt.dispose(),et.dispose(),M.dispose(),M.removeEventListener("sessionstart",Ee),M.removeEventListener("sessionend",Te),un.stop()};function k(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=at.autoReset,N=Pt.enabled,H=Pt.autoUpdate,W=Pt.needsUpdate,V=Pt.type;bt(),at.autoReset=R,Pt.enabled=N,Pt.autoUpdate=H,Pt.needsUpdate=W,Pt.type=V}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){const N=R.target;N.removeEventListener("dispose",gt),qt(N)}function qt(R){Gt(R),L.remove(R)}function Gt(R){const N=L.get(R).programs;N!==void 0&&(N.forEach(function(H){et.releaseProgram(H)}),R.isShaderMaterial&&et.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,H,W,V,pt){N===null&&(N=Dt);const St=V.isMesh&&V.matrixWorld.determinant()<0,Ct=N_(R,N,H,W,V);rt.setMaterial(W,St);let It=H.index,Bt=1;if(W.wireframe===!0){if(It=Q.getWireframeAttribute(H),It===void 0)return;Bt=2}const Ut=H.drawRange,zt=H.attributes.position;let be=Ut.start*Bt,dn=(Ut.start+Ut.count)*Bt;pt!==null&&(be=Math.max(be,pt.start*Bt),dn=Math.min(dn,(pt.start+pt.count)*Bt)),It!==null?(be=Math.max(be,0),dn=Math.min(dn,It.count)):zt!=null&&(be=Math.max(be,0),dn=Math.min(dn,zt.count));const Ue=dn-be;if(Ue<0||Ue===1/0)return;Zt.setup(V,W,Ct,H,It);let li,de=Wt;if(It!==null&&(li=Z.get(It),de=Yt,de.setIndex(li)),V.isMesh)W.wireframe===!0?(rt.setLineWidth(W.wireframeLinewidth*Lt()),de.setMode(O.LINES)):de.setMode(O.TRIANGLES);else if(V.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),rt.setLineWidth(Vt*Lt()),V.isLineSegments?de.setMode(O.LINES):V.isLineLoop?de.setMode(O.LINE_LOOP):de.setMode(O.LINE_STRIP)}else V.isPoints?de.setMode(O.POINTS):V.isSprite&&de.setMode(O.TRIANGLES);if(V.isBatchedMesh)de.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)de.renderInstances(be,Ue,V.count);else if(H.isInstancedBufferGeometry){const Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,rc=Math.min(H.instanceCount,Vt);de.renderInstances(be,Ue,rc)}else de.render(be,Ue)};function ce(R,N,H){R.transparent===!0&&R.side===_n&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,oo(R,N,H),R.side=Ai,R.needsUpdate=!0,oo(R,N,H),R.side=_n):oo(R,N,H)}this.compile=function(R,N,H=null){H===null&&(H=R),m=lt.get(H),m.init(),v.push(m),H.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),R!==H&&R.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const W=new Set;return R.traverse(function(V){const pt=V.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){const Ct=pt[St];ce(Ct,H,V),W.add(Ct)}else ce(pt,H,V),W.add(pt)}),v.pop(),m=null,W},this.compileAsync=function(R,N,H=null){const W=this.compile(R,N,H);return new Promise(V=>{function pt(){if(W.forEach(function(St){L.get(St).currentProgram.isReady()&&W.delete(St)}),W.size===0){V(R);return}setTimeout(pt,10)}K.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let De=null;function ie(R){De&&De(R)}function Ee(){un.stop()}function Te(){un.start()}const un=new Bm;un.setAnimationLoop(ie),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(R){De=R,M.setAnimationLoop(R),R===null?un.stop():un.start()},M.addEventListener("sessionstart",Ee),M.addEventListener("sessionend",Te),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),M.enabled===!0&&M.isPresenting===!0&&(M.cameraAutoUpdate===!0&&M.updateCamera(N),N=M.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,N,E),m=lt.get(R,v.length),m.init(),v.push(m),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Xt.setFromProjectionMatrix(_t),st=this.localClippingEnabled,Y=mt.init(this.clippingPlanes,st),g=At.get(R,p.length),g.init(),p.push(g),Cn(R,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(z,it),this.info.render.frame++,Y===!0&&mt.beginShadows();const H=m.state.shadowsArray;if(Pt.render(H,R,N),Y===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(M.enabled===!1||M.isPresenting===!1||M.hasDepthSensing()===!1)&&xt.render(g,R),m.setupLights(x._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let V=0,pt=W.length;V<pt;V++){const St=W[V];Ii(g,R,St,St.viewport)}}else Ii(g,R,N);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,N),Zt.resetDefaultState(),C=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Cn(R,N,H,W){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){W&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_t);const St=wt.update(R),Ct=R.material;Ct.visible&&g.push(R,St,Ct,H,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const St=wt.update(R),Ct=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Rt.copy(St.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(_t)),Array.isArray(Ct)){const It=St.groups;for(let Bt=0,Ut=It.length;Bt<Ut;Bt++){const zt=It[Bt],be=Ct[zt.materialIndex];be&&be.visible&&g.push(R,St,be,H,Rt.z,zt)}}else Ct.visible&&g.push(R,St,Ct,H,Rt.z,null)}}const pt=R.children;for(let St=0,Ct=pt.length;St<Ct;St++)Cn(pt[St],N,H,W)}function Ii(R,N,H,W){const V=R.opaque,pt=R.transmissive,St=R.transparent;m.setupLightsView(H),Y===!0&&mt.setGlobalState(x.clippingPlanes,H),pt.length>0&&Ks(V,pt,N,H),W&&rt.viewport(S.copy(W)),V.length>0&&rs(V,N,H),pt.length>0&&rs(pt,N,H),St.length>0&&rs(St,N,H),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ks(R,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Wn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?wa:wi,minFilter:Kn,samples:4,stencilBuffer:s});const Bt=L.get(m.state.transmissionRenderTarget);Bt.__isTransmissionRenderTarget=!0}const pt=m.state.transmissionRenderTarget;x.getDrawingBufferSize(ct),pt.setSize(ct.x,ct.y);const St=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(I),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();const Ct=x.toneMapping;x.toneMapping=Si,rs(R,H,W),A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt);let It=!1;for(let Bt=0,Ut=N.length;Bt<Ut;Bt++){const zt=N[Bt],be=zt.object,dn=zt.geometry,Ue=zt.material,li=zt.group;if(Ue.side===_n&&be.layers.test(W.layers)){const de=Ue.side;Ue.side=tn,Ue.needsUpdate=!0,md(be,H,W,dn,Ue,li),Ue.side=de,Ue.needsUpdate=!0,It=!0}}It===!0&&(A.updateMultisampleRenderTarget(pt),A.updateRenderTargetMipmap(pt)),x.setRenderTarget(St),x.setClearColor(I,F),x.toneMapping=Ct}function rs(R,N,H){const W=N.isScene===!0?N.overrideMaterial:null;for(let V=0,pt=R.length;V<pt;V++){const St=R[V],Ct=St.object,It=St.geometry,Bt=W===null?St.material:W,Ut=St.group;Ct.layers.test(H.layers)&&md(Ct,N,H,It,Bt,Ut)}}function md(R,N,H,W,V,pt){R.onBeforeRender(x,N,H,W,V,pt),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,N,H,W,R,pt),V.transparent===!0&&V.side===_n&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,x.renderBufferDirect(H,N,W,V,R,pt),V.side=Ai,V.needsUpdate=!0,x.renderBufferDirect(H,N,W,V,R,pt),V.side=_n):x.renderBufferDirect(H,N,W,V,R,pt),R.onAfterRender(x,N,H,W,V,pt)}function oo(R,N,H){N.isScene!==!0&&(N=Dt);const W=L.get(R),V=m.state.lights,pt=m.state.shadowsArray,St=V.state.version,Ct=et.getParameters(R,V.state,pt,N,H),It=et.getProgramCacheKey(Ct);let Bt=W.programs;W.environment=R.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(R.isMeshStandardMaterial?q:B).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?N.environmentRotation:R.envMapRotation,Bt===void 0&&(R.addEventListener("dispose",gt),Bt=new Map,W.programs=Bt);let Ut=Bt.get(It);if(Ut!==void 0){if(W.currentProgram===Ut&&W.lightsStateVersion===St)return _d(R,Ct),Ut}else Ct.uniforms=et.getUniforms(R),R.onBuild(H,Ct,x),R.onBeforeCompile(Ct,x),Ut=et.acquireProgram(Ct,It),Bt.set(It,Ut),W.uniforms=Ct.uniforms;const zt=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=mt.uniform),_d(R,Ct),W.needsLights=F_(R),W.lightsStateVersion=St,W.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Ut,W.uniformsList=null,Ut}function gd(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=ll.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function _d(R,N){const H=L.get(R);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function N_(R,N,H,W,V){N.isScene!==!0&&(N=Dt),A.resetTextureUnits();const pt=N.fog,St=W.isMeshStandardMaterial?N.environment:null,Ct=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Pi,It=(W.isMeshStandardMaterial?q:B).get(W.envMap||St),Bt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),zt=!!H.morphAttributes.position,be=!!H.morphAttributes.normal,dn=!!H.morphAttributes.color;let Ue=Si;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ue=x.toneMapping);const li=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=li!==void 0?li.length:0,Vt=L.get(W),rc=m.state.lights;if(Y===!0&&(st===!0||R!==b)){const Rn=R===b&&W.id===C;mt.setState(W,R,Rn)}let he=!1;W.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==rc.state.version||Vt.outputColorSpace!==Ct||V.isBatchedMesh&&Vt.batching===!1||!V.isBatchedMesh&&Vt.batching===!0||V.isInstancedMesh&&Vt.instancing===!1||!V.isInstancedMesh&&Vt.instancing===!0||V.isSkinnedMesh&&Vt.skinning===!1||!V.isSkinnedMesh&&Vt.skinning===!0||V.isInstancedMesh&&Vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Vt.instancingMorph===!1&&V.morphTexture!==null||Vt.envMap!==It||W.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==Bt||Vt.vertexTangents!==Ut||Vt.morphTargets!==zt||Vt.morphNormals!==be||Vt.morphColors!==dn||Vt.toneMapping!==Ue||Vt.morphTargetsCount!==de)&&(he=!0):(he=!0,Vt.__version=W.version);let as=Vt.currentProgram;he===!0&&(as=oo(W,N,V));let xd=!1,qr=!1,ac=!1;const ze=as.getUniforms(),Di=Vt.uniforms;if(rt.useProgram(as.program)&&(xd=!0,qr=!0,ac=!0),W.id!==C&&(C=W.id,qr=!0),xd||b!==R){ze.setValue(O,"projectionMatrix",R.projectionMatrix),ze.setValue(O,"viewMatrix",R.matrixWorldInverse);const Rn=ze.map.cameraPosition;Rn!==void 0&&Rn.setValue(O,Rt.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&ze.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ze.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,qr=!0,ac=!0)}if(V.isSkinnedMesh){ze.setOptional(O,V,"bindMatrix"),ze.setOptional(O,V,"bindMatrixInverse");const Rn=V.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),ze.setValue(O,"boneTexture",Rn.boneTexture,A))}V.isBatchedMesh&&(ze.setOptional(O,V,"batchingTexture"),ze.setValue(O,"batchingTexture",V._matricesTexture,A));const oc=H.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0)&&vt.update(V,H,as),(qr||Vt.receiveShadow!==V.receiveShadow)&&(Vt.receiveShadow=V.receiveShadow,ze.setValue(O,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Di.envMap.value=It,Di.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Di.envMapIntensity.value=N.environmentIntensity),qr&&(ze.setValue(O,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&O_(Di,ac),pt&&W.fog===!0&&Mt.refreshFogUniforms(Di,pt),Mt.refreshMaterialUniforms(Di,W,tt,X,m.state.transmissionRenderTarget),ll.upload(O,gd(Vt),Di,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ll.upload(O,gd(Vt),Di,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ze.setValue(O,"center",V.center),ze.setValue(O,"modelViewMatrix",V.modelViewMatrix),ze.setValue(O,"normalMatrix",V.normalMatrix),ze.setValue(O,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Rn=W.uniformsGroups;for(let lc=0,B_=Rn.length;lc<B_;lc++){const vd=Rn[lc];Qt.update(vd,as),Qt.bind(vd,as)}}return as}function O_(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function F_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,N,H){L.get(R.texture).__webglTexture=N,L.get(R.depthTexture).__webglTexture=H;const W=L.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,N){const H=L.get(R);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,H=0){E=R,T=N,w=H;let W=!0,V=null,pt=!1,St=!1;if(R){const It=L.get(R);It.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1):It.__webglFramebuffer===void 0?A.setupRenderTarget(R):It.__hasExternalTextures&&A.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture);const Bt=R.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);const Ut=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?V=Ut[N][H]:V=Ut[N],pt=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?V=L.get(R).__webglMultisampledFramebuffer:Array.isArray(Ut)?V=Ut[H]:V=Ut,S.copy(R.viewport),D.copy(R.scissor),U=R.scissorTest}else S.copy(nt).multiplyScalar(tt).floor(),D.copy(dt).multiplyScalar(tt).floor(),U=Et;if(rt.bindFramebuffer(O.FRAMEBUFFER,V)&&W&&rt.drawBuffers(R,V),rt.viewport(S),rt.scissor(D),rt.setScissorTest(U),pt){const It=L.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,H)}else if(St){const It=L.get(R.texture),Bt=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,H||0,Bt)}C=-1},this.readRenderTargetPixels=function(R,N,H,W,V,pt,St){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){rt.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const It=R.texture,Bt=It.format,Ut=It.type;if(Bt!==yn&&jt.convert(Bt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Ut===wa&&(K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float"));if(Ut!==wi&&jt.convert(Ut)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&Ut!==Dn&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-W&&H>=0&&H<=R.height-V&&O.readPixels(N,H,W,V,jt.convert(Bt),jt.convert(Ut),pt)}finally{const It=E!==null?L.get(E).__webglFramebuffer:null;rt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(R,N,H=0){const W=Math.pow(2,-H),V=Math.floor(N.image.width*W),pt=Math.floor(N.image.height*W);A.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,R.x,R.y,V,pt),rt.unbindTexture()},this.copyTextureToTexture=function(R,N,H,W=0){const V=N.image.width,pt=N.image.height,St=jt.convert(H.format),Ct=jt.convert(H.type);A.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,R.x,R.y,V,pt,St,Ct,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,R.x,R.y,N.mipmaps[0].width,N.mipmaps[0].height,St,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,W,R.x,R.y,St,Ct,N.image),W===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(R,N,H,W,V=0){const pt=Math.round(R.max.x-R.min.x),St=Math.round(R.max.y-R.min.y),Ct=R.max.z-R.min.z+1,It=jt.convert(W.format),Bt=jt.convert(W.type);let Ut;if(W.isData3DTexture)A.setTexture3D(W,0),Ut=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),Ut=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const zt=O.getParameter(O.UNPACK_ROW_LENGTH),be=O.getParameter(O.UNPACK_IMAGE_HEIGHT),dn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ue=O.getParameter(O.UNPACK_SKIP_ROWS),li=O.getParameter(O.UNPACK_SKIP_IMAGES),de=H.isCompressedTexture?H.mipmaps[V]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,de.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,R.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,R.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,R.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Ut,V,N.x,N.y,N.z,pt,St,Ct,It,Bt,de.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,V,N.x,N.y,N.z,pt,St,Ct,It,de.data):O.texSubImage3D(Ut,V,N.x,N.y,N.z,pt,St,Ct,It,Bt,de),O.pixelStorei(O.UNPACK_ROW_LENGTH,zt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be),O.pixelStorei(O.UNPACK_SKIP_PIXELS,dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ue),O.pixelStorei(O.UNPACK_SKIP_IMAGES,li),V===0&&W.generateMipmaps&&O.generateMipmap(Ut),rt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),rt.unbindTexture()},this.resetState=function(){T=0,w=0,E=null,rt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===El?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Ka?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Il{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new Il(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(t),this.near=e,this.far=n}clone(){return new Dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tn extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ul{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new P;class Hs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ot(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ot(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ot(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ot(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ot(e,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ru extends $e{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let pr;const jr=new P,mr=new P,gr=new P,_r=new $,Qr=new $,Ym=new Tt,Po=new P,ta=new P,Lo=new P,lf=new $,Uc=new $,cf=new $;class qm extends Kt{constructor(t=new Ru){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new Ft;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ul(e,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Hs(n,3,0,!1)),pr.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=pr,this.material=t,this.center=new $(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),Ym.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Io(Po.set(-.5,-.5,0),gr,a,mr,i,s),Io(ta.set(.5,-.5,0),gr,a,mr,i,s),Io(Lo.set(.5,.5,0),gr,a,mr,i,s),lf.set(0,0),Uc.set(1,0),cf.set(1,1);let o=t.ray.intersectTriangle(Po,ta,Lo,!1,jr);if(o===null&&(Io(ta.set(-.5,.5,0),gr,a,mr,i,s),Uc.set(0,1),o=t.ray.intersectTriangle(Po,Lo,ta,!1,jr),o===null))return;const l=t.ray.origin.distanceTo(jr);l<t.near||l>t.far||e.push({distance:l,point:jr.clone(),uv:xn.getInterpolation(jr,Po,ta,Lo,lf,Uc,cf,new $),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Io(r,t,e,n,i,s){_r.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Qr.x=s*_r.x-i*_r.y,Qr.y=i*_r.x+s*_r.y):Qr.copy(_r),r.copy(t),r.x+=Qr.x,r.y+=Qr.y,r.applyMatrix4(Ym)}const Do=new P,hf=new P;class $m extends Kt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const s=e[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let s;for(s=0;s<i.length&&!(e<i[s].distance);s++);return i.splice(s,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let s=e[n].distance;if(e[n].object.visible&&(s-=s*e[n].hysteresis),t<s)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Do.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Do);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Do.setFromMatrixPosition(t.matrixWorld),hf.setFromMatrixPosition(this.matrixWorld);const n=Do.distanceTo(hf)/t.zoom;e[0].object.visible=!0;let i,s;for(i=1,s=e.length;i<s;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const uf=new P,df=new ne,ff=new ne,Gb=new P,pf=new Tt,Uo=new P,Nc=new Xe,mf=new Tt,Oc=new Ys;class Zm extends Ht{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ch,this.bindMatrix=new Tt,this.bindMatrixInverse=new Tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Uo),this.boundingBox.expandByPoint(Uo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xe),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Uo),this.boundingSphere.expandByPoint(Uo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(i),t.ray.intersectsSphere(Nc)!==!1&&(mf.copy(i).invert(),Oc.copy(t.ray).applyMatrix4(mf),!(this.boundingBox!==null&&Oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Oc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;df.fromBufferAttribute(i.attributes.skinIndex,t),ff.fromBufferAttribute(i.attributes.skinWeight,t),uf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=ff.getComponent(s);if(a!==0){const o=df.getComponent(s);pf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Gb.copy(uf).applyMatrix4(pf),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Pu extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qi extends Me{constructor(t=null,e=1,n=1,i,s,a,o,l,c=xe,h=xe,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gf=new Tt,Wb=new Tt;class Nl{constructor(t=[],e=[]){this.uuid=bn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Tt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Tt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Wb;gf.multiplyMatrices(o,e[s]),gf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Nl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new qi(e,t,t,yn,Dn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Pu),this.bones.push(a),this.boneInverses.push(new Tt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Ur extends te{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xr=new Tt,_f=new Tt,No=[],xf=new en,Xb=new Tt,ea=new Ht,na=new Xe;class Jm extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xb)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xr),xf.copy(t.boundingBox).applyMatrix4(xr),this.boundingBox.union(xf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xr),na.copy(t.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),t.ray.intersectsSphere(na)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,xr),_f.multiplyMatrices(n,xr),ea.matrixWorld=_f,ea.raycast(t,No);for(let a=0,o=No.length;a<o;a++){const l=No[a];l.instanceId=s,l.object=this,e.push(l)}No.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qi(new Float32Array(i*this.count),i,this.count,pu,Dn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Yb(r,t){return r.z-t.z}function qb(r,t){return t.z-r.z}class $b{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=t.start,s.count=t.count,s.z=e}reset(){this.list.length=0,this.index=0}}const vr="batchId",Vi=new Tt,vf=new Tt,Zb=new Tt,yf=new Tt,Fc=new Qa,Oo=new en,fs=new Xe,ia=new P,Bc=new $b,He=new Ht,Fo=[];function Jb(r,t,e=0){const n=t.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==t.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let a=0;a<n;a++)t.setComponent(s+e,a,r.getComponent(s,a))}else t.array.set(r.array,e*n);t.needsUpdate=!0}class Km extends Ht{get maxGeometryCount(){return this._maxGeometryCount}constructor(t,e,n=e*2,i){super(new Ft,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxGeometryCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new qi(e,t,t,yn,Dn);this._matricesTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in t.attributes){const l=t.getAttribute(o),{array:c,itemSize:h,normalized:u}=l,d=new c.constructor(n*h),f=new te(d,h,u);e.setAttribute(o,f)}if(t.getIndex()!==null){const o=n>65536?new Uint32Array(s):new Uint16Array(s);e.setIndex(new te(o,1))}const a=i>65536?new Uint32Array(n):new Uint16Array(n);e.setAttribute(vr,new te(a,1)),this._geometryInitialized=!0}}_validateGeometry(t){if(t.getAttribute(vr))throw new Error(`BatchedMesh: Geometry cannot use attribute "${vr}"`);const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(n===vr)continue;if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),s=e.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this._geometryCount,e=this.boundingBox,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,Vi),this.getBoundingBoxAt(i,Oo).applyMatrix4(Vi),e.union(Oo))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xe);const t=this._geometryCount,e=this.boundingSphere,n=this._active;e.makeEmpty();for(let i=0;i<t;i++)n[i]!==!1&&(this.getMatrixAt(i,Vi),this.getBoundingSphereAt(i,fs).applyMatrix4(Vi),e.union(fs))}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const c=t.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._visibility,d=this._active,f=this._matricesTexture,_=this._matricesTexture.image.data;u.push(!0),d.push(!0);const g=this._geometryCount;this._geometryCount++,Zb.toArray(_,g*16),f.needsUpdate=!0,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new en,sphereInitialized:!1,sphere:new Xe});const m=this.geometry.getAttribute(vr);for(let p=0;p<i.vertexCount;p++)m.setX(i.vertexStart+p,g);return m.needsUpdate=!0,this.setGeometryAt(g,t),g}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),a=e.getIndex(),o=this._reservedRanges[t];if(i&&a.count>o.indexCount||e.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const f in n.attributes){if(f===vr)continue;const _=e.getAttribute(f),g=n.getAttribute(f);Jb(_,g,l);const m=_.itemSize;for(let p=_.count,v=c;p<v;p++){const x=l+p;for(let y=0;y<m;y++)g.setComponent(x,y,0)}g.needsUpdate=!0,g.addUpdateRange(l*m,c*m)}if(i){const f=o.indexStart;for(let _=0;_<a.count;_++)s.setX(f+_,l+a.getX(_));for(let _=a.count,g=o.indexCount;_<g;_++)s.setX(f+_,l);s.needsUpdate=!0,s.addUpdateRange(f,o.indexCount)}const h=this._bounds[t];e.boundingBox!==null?(h.box.copy(e.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,e.boundingSphere!==null?(h.sphere.copy(e.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[t],d=e.getAttribute("position");return u.count=i?a.count:d.count,this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._active;return t>=e.length||e[t]===!1?this:(e[t]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(this._active[t]===!1)return null;const i=this._bounds[t],s=i.box,a=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const o=a.index,l=a.attributes.position,c=this._drawRanges[t];for(let h=c.start,u=c.start+c.count;h<u;h++){let d=h;o&&(d=o.getX(d)),s.expandByPoint(ia.fromBufferAttribute(l,d))}i.boxInitialized=!0}return e.copy(s),e}getBoundingSphereAt(t,e){if(this._active[t]===!1)return null;const i=this._bounds[t],s=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(t,Oo),Oo.getCenter(s.center);const o=a.index,l=a.attributes.position,c=this._drawRanges[t];let h=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let f=u;o&&(f=o.getX(f)),ia.fromBufferAttribute(l,f),h=Math.max(h,s.center.distanceToSquared(ia))}s.radius=Math.sqrt(h),i.sphereInitialized=!0}return e.copy(s),e}setMatrixAt(t,e){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,a=this._geometryCount;return t>=a||n[t]===!1?this:(e.toArray(s,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return t>=s||n[t]===!1?null:e.fromArray(i,t*16)}setVisibleAt(t,e){const n=this._visibility,i=this._active,s=this._geometryCount;return t>=s||i[t]===!1||n[t]===e?this:(n[t]=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._visibility,n=this._active,i=this._geometryCount;return t>=i||n[t]===!1?!1:e[t]}raycast(t,e){const n=this._visibility,i=this._active,s=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;He.material=this.material,He.geometry.index=l.index,He.geometry.attributes=l.attributes,He.geometry.boundingBox===null&&(He.geometry.boundingBox=new en),He.geometry.boundingSphere===null&&(He.geometry.boundingSphere=new Xe);for(let c=0;c<a;c++){if(!n[c]||!i[c])continue;const h=s[c];He.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(c,He.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,He.geometry.boundingBox),this.getBoundingSphereAt(c,He.geometry.boundingSphere),He.raycast(t,Fo);for(let u=0,d=Fo.length;u<d;u++){const f=Fo[u];f.object=this,f.batchId=c,e.push(f)}Fo.length=0}He.material=null,He.geometry.index=null,He.geometry.attributes={},He.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._visibility=t._visibility.slice(),this._active=t._active.slice(),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxGeometryCount=t._maxGeometryCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(t,e,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Fc.setFromProjectionMatrix(yf,t.coordinateSystem));let _=0;if(this.sortObjects){vf.copy(this.matrixWorld).invert(),ia.setFromMatrixPosition(n.matrixWorld).applyMatrix4(vf);for(let p=0,v=c.length;p<v;p++)if(c[p]&&l[p]){this.getMatrixAt(p,Vi),this.getBoundingSphereAt(p,fs).applyMatrix4(Vi);let x=!1;if(f&&(x=!Fc.intersectsSphere(fs)),!x){const y=ia.distanceTo(fs.center);Bc.push(d[p],y)}}const g=Bc.list,m=this.customSort;m===null?g.sort(s.transparent?qb:Yb):m.call(this,g,n);for(let p=0,v=g.length;p<v;p++){const x=g[p];h[_]=x.start*o,u[_]=x.count,_++}Bc.reset()}else for(let g=0,m=c.length;g<m;g++)if(c[g]&&l[g]){let p=!1;if(f&&(this.getMatrixAt(g,Vi),this.getBoundingSphereAt(g,fs).applyMatrix4(Vi),p=!Fc.intersectsSphere(fs)),!p){const v=d[g];h[_]=v.start*o,u[_]=v.count,_++}}this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,s,a){this.onBeforeRender(t,null,i,s,a)}}class Ze extends $e{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mf=new P,bf=new P,Sf=new Tt,zc=new Ys,Bo=new Xe;class Ti extends Kt{constructor(t=new Ft,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Mf.fromBufferAttribute(e,i-1),bf.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Mf.distanceTo(bf);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(i),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;Sf.copy(i).invert(),zc.copy(t.ray).applyMatrix4(Sf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){const T=_.getX(x),w=_.getX(x+1);if(c.fromBufferAttribute(m,T),h.fromBufferAttribute(m,w),zc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),zc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const wf=new P,Af=new P;class oi extends Ti{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)wf.fromBufferAttribute(e,i),Af.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wf.distanceTo(Af);t.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jm extends Ti{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Lu extends $e{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ef=new Tt,zh=new Ys,zo=new Xe,ko=new P;class Qm extends Kt{constructor(t=new Ft,e=new Lu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=s,t.ray.intersectsSphere(zo)===!1)return;Ef.copy(i).invert(),zh.copy(t.ray).applyMatrix4(Ef);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);ko.fromBufferAttribute(u,m),Tf(ko,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)ko.fromBufferAttribute(u,_),Tf(ko,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Tf(r,t,e,n,i,s,a){const o=zh.distanceSqToPoint(r);if(o<e){const l=new P;zh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Kb extends Me{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Pe,this.magFilter=s!==void 0?s:Pe,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class jb extends Me{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=xe,this.minFilter=xe,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ol extends Me{constructor(t,e,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Qb extends Ol{constructor(t,e,n,i,s,a){super(t,e,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=In}}class tS extends Ol{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Ei),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class eS extends Me{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new $:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],a=[],o=new P,l=new Tt;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_e(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(_e(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fl extends Yn{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new $){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tg extends Fl{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Iu(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Vo=new P,kc=new Iu,Vc=new Iu,Hc=new Iu;class eg extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Vo.subVectors(i[0],i[1]).add(i[0]),c=Vo);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Vo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Vo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),kc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),Vc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),Hc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(kc.calc(l),Vc.calc(l),Hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cf(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function nS(r,t){const e=1-r;return e*e*t}function iS(r,t){return 2*(1-r)*r*t}function sS(r,t){return r*r*t}function pa(r,t,e,n){return nS(r,t)+iS(r,e)+sS(r,n)}function rS(r,t){const e=1-r;return e*e*e*t}function aS(r,t){const e=1-r;return 3*e*e*r*t}function oS(r,t){return 3*(1-r)*r*r*t}function lS(r,t){return r*r*r*t}function ma(r,t,e,n,i){return rS(r,t)+aS(r,e)+oS(r,n)+lS(r,i)}class Du extends Yn{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ma(t,i.x,s.x,a.x,o.x),ma(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ng extends Yn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ma(t,i.x,s.x,a.x,o.x),ma(t,i.y,s.y,a.y,o.y),ma(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uu extends Yn{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ig extends Yn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends Yn{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(pa(t,i.x,s.x,a.x),pa(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ou extends Yn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(pa(t,i.x,s.x,a.x),pa(t,i.y,s.y,a.y),pa(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fu extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Cf(o,l.x,c.x,h.x,u.x),Cf(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}var pl=Object.freeze({__proto__:null,ArcCurve:tg,CatmullRomCurve3:eg,CubicBezierCurve:Du,CubicBezierCurve3:ng,EllipseCurve:Fl,LineCurve:Uu,LineCurve3:ig,QuadraticBezierCurve:Nu,QuadraticBezierCurve3:Ou,SplineCurve:Fu});class sg extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new pl[i.type]().fromJSON(i))}return this}}class Ua extends sg{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uu(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Nu(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new Du(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Fu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new Fl(t,e,n,i,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class to extends Ft{constructor(t=[new $(0,-.5),new $(.5,0),new $(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=_e(i,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/e,u=new P,d=new $,f=new P,_=new P,g=new P;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let v=0;v<=e;v++){const x=n+v*h*i,y=Math.sin(x),T=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*y,u.y=t[w].y,u.z=t[w].x*T,a.push(u.x,u.y,u.z),d.x=v/e,d.y=w/(t.length-1),o.push(d.x,d.y);const E=l[3*w+0]*y,C=l[3*w+1],b=l[3*w+0]*T;c.push(E,C,b)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){const y=x+v*t.length,T=y,w=y+t.length,E=y+t.length+1,C=y+1;s.push(T,w,C),s.push(E,C,w)}this.setIndex(s),this.setAttribute("position",new yt(a,3)),this.setAttribute("uv",new yt(o,2)),this.setAttribute("normal",new yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.points,t.segments,t.phiStart,t.phiLength)}}class Bl extends to{constructor(t=1,e=1,n=4,i=8){const s=new Ua;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Bl(t.radius,t.length,t.capSegments,t.radialSegments)}}class zl extends Ft{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new P,h=new $;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wr extends Ft{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;v(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function v(){const y=new P,T=new P;let w=0;const E=(e-t)/n;for(let C=0;C<=s;C++){const b=[],S=C/s,D=S*(e-t)+t;for(let U=0;U<=i;U++){const I=U/i,F=I*l+o,G=Math.sin(F),X=Math.cos(F);T.x=D*G,T.y=-S*n+m,T.z=D*X,u.push(T.x,T.y,T.z),y.set(G,E,X).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-S),b.push(_++)}g.push(b)}for(let C=0;C<i;C++)for(let b=0;b<s;b++){const S=g[b][C],D=g[b+1][C],U=g[b+1][C+1],I=g[b][C+1];h.push(S,D,I),h.push(D,U,I),w+=6}c.addGroup(p,w,0),p+=w}function x(y){const T=_,w=new $,E=new P;let C=0;const b=y===!0?t:e,S=y===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),_++;const D=_;for(let U=0;U<=i;U++){const F=U/i*l+o,G=Math.cos(F),X=Math.sin(F);E.x=b*X,E.y=m*S,E.z=b*G,u.push(E.x,E.y,E.z),d.push(0,S,0),w.x=G*.5+.5,w.y=X*.5*S+.5,f.push(w.x,w.y),_++}for(let U=0;U<i;U++){const I=T+U,F=D+U;y===!0?h.push(F,F+1,I):h.push(F+1,F,I),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kl extends Wr{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new kl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ts extends Ft{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new P,y=new P,T=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],x),f(e[w+1],y),f(e[w+2],T),l(x,y,T,v)}function l(v,x,y,T){const w=T+1,E=[];for(let C=0;C<=w;C++){E[C]=[];const b=v.clone().lerp(y,C/w),S=x.clone().lerp(y,C/w),D=w-C;for(let U=0;U<=D;U++)U===0&&C===w?E[C][U]=b:E[C][U]=b.clone().lerp(S,U/D)}for(let C=0;C<w;C++)for(let b=0;b<2*(w-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(E[C][S+1]),d(E[C+1][S]),d(E[C][S])):(d(E[C][S+1]),d(E[C+1][S+1]),d(E[C+1][S]))}}function c(v){const x=new P;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new P;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;a.push(y,1-T)}_(),u()}function u(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],T=a[v+4],w=Math.max(x,y,T),E=Math.min(x,y,T);w>.9&&E<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function _(){const v=new P,x=new P,y=new P,T=new P,w=new $,E=new $,C=new $;for(let b=0,S=0;b<s.length;b+=9,S+=6){v.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),w.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),T.copy(v).add(x).add(y).divideScalar(3);const D=m(T);g(w,S+0,v,D),g(E,S+2,x,D),g(C,S+4,y,D)}}function g(v,x,y,T){T<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.vertices,t.indices,t.radius,t.details)}}class Vl extends ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vl(t.radius,t.detail)}}const Ho=new P,Go=new P,Gc=new P,Wo=new xn;class rg extends Ft{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Ns*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=Wo;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Wo.getNormal(Gc),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=u[v],T=u[x],w=Wo[h[v]],E=Wo[h[x]],C=`${y}_${T}`,b=`${T}_${y}`;b in d&&d[b]?(Gc.dot(d[b].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(E.x,E.y,E.z)),d[b]=null):C in d||(d[C]={index0:c[v],index1:c[x],normal:Gc.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];Ho.fromBufferAttribute(o,g),Go.fromBufferAttribute(o,m),f.push(Ho.x,Ho.y,Ho.z),f.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new yt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Os extends Ua{constructor(t){super(t),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ua().fromJSON(i))}return this}}const cS={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=ag(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(n&&(s=pS(r,t,s,e)),r.length>80*e){o=c=r[0],l=h=r[1];for(let _=e;_<i;_+=e)u=r[_],d=r[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Na(s,a,e,o,l,f,0),a}};function ag(r,t,e,n,i){let s,a;if(i===AS(r,t,e,n)>0)for(s=t;s<e;s+=n)a=Rf(s,r[s],r[s+1],a);else for(s=e-n;s>=t;s-=n)a=Rf(s,r[s],r[s+1],a);return a&&Hl(a,a.next)&&(Fa(a),a=a.next),a}function Gs(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Hl(e,e.next)||pe(e.prev,e,e.next)===0)){if(Fa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Na(r,t,e,n,i,s,a){if(!r)return;!a&&s&&vS(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?uS(r,n,i,s):hS(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Fa(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=dS(Gs(r),t,e),Na(r,t,e,n,i,s,2)):a===2&&fS(r,t,e,n,i,s):Na(Gs(r),t,e,n,i,s,1);break}}}function hS(r){const t=r.prev,e=r,n=r.next;if(pe(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&wr(i,o,s,l,a,c,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function uS(r,t,e,n){const i=r.prev,s=r,a=r.next;if(pe(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=kh(f,_,t,e,n),v=kh(g,m,t,e,n);let x=r.prevZ,y=r.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==a&&wr(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&wr(o,h,l,u,c,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==a&&wr(o,h,l,u,c,d,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&wr(o,h,l,u,c,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function dS(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Hl(i,s)&&og(i,n,n.next,s)&&Oa(i,s)&&Oa(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Fa(n),Fa(n.next),n=r=s),n=n.next}while(n!==r);return Gs(n)}function fS(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bS(a,o)){let l=lg(a,o);a=Gs(a,a.next),l=Gs(l,l.next),Na(a,t,e,n,i,s,0),Na(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function pS(r,t,e,n){const i=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=ag(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(MS(c));for(i.sort(mS),s=0;s<i.length;s++)e=gS(i[s],e);return e}function mS(r,t){return r.x-t.x}function gS(r,t){const e=_S(r,t);if(!e)return t;const n=lg(e,r);return Gs(n,n.next),Gs(e,e.next)}function _S(r,t){let e=t,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&wr(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),Oa(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&xS(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function xS(r,t){return pe(r.prev,r,t.prev)<0&&pe(t.next,r,r.next)<0}function vS(r,t,e,n){let i=r;do i.z===0&&(i.z=kh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,yS(i)}function yS(r){let t,e,n,i,s,a,o,l,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(a>1);return r}function kh(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function MS(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function wr(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function bS(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!SS(r,t)&&(Oa(r,t)&&Oa(t,r)&&wS(r,t)&&(pe(r.prev,r,t.prev)||pe(r,t.prev,t))||Hl(r,t)&&pe(r.prev,r,r.next)>0&&pe(t.prev,t,t.next)>0)}function pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Hl(r,t){return r.x===t.x&&r.y===t.y}function og(r,t,e,n){const i=Yo(pe(r,t,e)),s=Yo(pe(r,t,n)),a=Yo(pe(e,n,r)),o=Yo(pe(e,n,t));return!!(i!==s&&a!==o||i===0&&Xo(r,e,t)||s===0&&Xo(r,n,t)||a===0&&Xo(e,r,n)||o===0&&Xo(e,t,n))}function Xo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Yo(r){return r>0?1:r<0?-1:0}function SS(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&og(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Oa(r,t){return pe(r.prev,r,r.next)<0?pe(r,t,r.next)>=0&&pe(r,r.prev,t)>=0:pe(r,t,r.prev)<0||pe(r,r.next,t)<0}function wS(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function lg(r,t){const e=new Vh(r.i,r.x,r.y),n=new Vh(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Rf(r,t,e,n){const i=new Vh(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Vh(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function AS(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class ti{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return ti.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Pf(t),Lf(n,t);let a=t.length;e.forEach(Pf);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Lf(n,e[l]);const o=cS.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Pf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Lf(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class eo extends Ft{constructor(t=new Os([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new yt(i,3)),this.setAttribute("uv",new yt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:ES;let x,y=!1,T,w,E,C;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,T=p.computeFrenetFrames(h,!1),w=new P,E=new P,C=new P),d||(m=0,f=0,_=0,g=0);const b=o.extractPoints(c);let S=b.shape;const D=b.holes;if(!ti.isClockWise(S)){S=S.reverse();for(let j=0,K=D.length;j<K;j++){const ot=D[j];ti.isClockWise(ot)&&(D[j]=ot.reverse())}}const I=ti.triangulateShape(S,D),F=S;for(let j=0,K=D.length;j<K;j++){const ot=D[j];S=S.concat(ot)}function G(j,K,ot){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(K,ot)}const X=S.length,tt=I.length;function z(j,K,ot){let rt,at,L;const A=j.x-K.x,B=j.y-K.y,q=ot.x-j.x,Z=ot.y-j.y,Q=A*A+B*B,wt=A*Z-B*q;if(Math.abs(wt)>Number.EPSILON){const et=Math.sqrt(Q),Mt=Math.sqrt(q*q+Z*Z),At=K.x-B/et,lt=K.y+A/et,mt=ot.x-Z/Mt,Pt=ot.y+q/Mt,xt=((mt-At)*Z-(Pt-lt)*q)/(A*Z-B*q);rt=At+A*xt-j.x,at=lt+B*xt-j.y;const vt=rt*rt+at*at;if(vt<=2)return new $(rt,at);L=Math.sqrt(vt/2)}else{let et=!1;A>Number.EPSILON?q>Number.EPSILON&&(et=!0):A<-Number.EPSILON?q<-Number.EPSILON&&(et=!0):Math.sign(B)===Math.sign(Z)&&(et=!0),et?(rt=-B,at=A,L=Math.sqrt(Q)):(rt=A,at=B,L=Math.sqrt(Q/2))}return new $(rt/L,at/L)}const it=[];for(let j=0,K=F.length,ot=K-1,rt=j+1;j<K;j++,ot++,rt++)ot===K&&(ot=0),rt===K&&(rt=0),it[j]=z(F[j],F[ot],F[rt]);const nt=[];let dt,Et=it.concat();for(let j=0,K=D.length;j<K;j++){const ot=D[j];dt=[];for(let rt=0,at=ot.length,L=at-1,A=rt+1;rt<at;rt++,L++,A++)L===at&&(L=0),A===at&&(A=0),dt[rt]=z(ot[rt],ot[L],ot[A]);nt.push(dt),Et=Et.concat(dt)}for(let j=0;j<m;j++){const K=j/m,ot=f*Math.cos(K*Math.PI/2),rt=_*Math.sin(K*Math.PI/2)+g;for(let at=0,L=F.length;at<L;at++){const A=G(F[at],it[at],rt);ct(A.x,A.y,-ot)}for(let at=0,L=D.length;at<L;at++){const A=D[at];dt=nt[at];for(let B=0,q=A.length;B<q;B++){const Z=G(A[B],dt[B],rt);ct(Z.x,Z.y,-ot)}}}const Xt=_+g;for(let j=0;j<X;j++){const K=d?G(S[j],Et[j],Xt):S[j];y?(E.copy(T.normals[0]).multiplyScalar(K.x),w.copy(T.binormals[0]).multiplyScalar(K.y),C.copy(x[0]).add(E).add(w),ct(C.x,C.y,C.z)):ct(K.x,K.y,0)}for(let j=1;j<=h;j++)for(let K=0;K<X;K++){const ot=d?G(S[K],Et[K],Xt):S[K];y?(E.copy(T.normals[j]).multiplyScalar(ot.x),w.copy(T.binormals[j]).multiplyScalar(ot.y),C.copy(x[j]).add(E).add(w),ct(C.x,C.y,C.z)):ct(ot.x,ot.y,u/h*j)}for(let j=m-1;j>=0;j--){const K=j/m,ot=f*Math.cos(K*Math.PI/2),rt=_*Math.sin(K*Math.PI/2)+g;for(let at=0,L=F.length;at<L;at++){const A=G(F[at],it[at],rt);ct(A.x,A.y,u+ot)}for(let at=0,L=D.length;at<L;at++){const A=D[at];dt=nt[at];for(let B=0,q=A.length;B<q;B++){const Z=G(A[B],dt[B],rt);y?ct(Z.x,Z.y+x[h-1].y,x[h-1].x+ot):ct(Z.x,Z.y,u+ot)}}}Y(),st();function Y(){const j=i.length/3;if(d){let K=0,ot=X*K;for(let rt=0;rt<tt;rt++){const at=I[rt];Rt(at[2]+ot,at[1]+ot,at[0]+ot)}K=h+m*2,ot=X*K;for(let rt=0;rt<tt;rt++){const at=I[rt];Rt(at[0]+ot,at[1]+ot,at[2]+ot)}}else{for(let K=0;K<tt;K++){const ot=I[K];Rt(ot[2],ot[1],ot[0])}for(let K=0;K<tt;K++){const ot=I[K];Rt(ot[0]+X*h,ot[1]+X*h,ot[2]+X*h)}}n.addGroup(j,i.length/3-j,0)}function st(){const j=i.length/3;let K=0;_t(F,K),K+=F.length;for(let ot=0,rt=D.length;ot<rt;ot++){const at=D[ot];_t(at,K),K+=at.length}n.addGroup(j,i.length/3-j,1)}function _t(j,K){let ot=j.length;for(;--ot>=0;){const rt=ot;let at=ot-1;at<0&&(at=j.length-1);for(let L=0,A=h+m*2;L<A;L++){const B=X*L,q=X*(L+1),Z=K+rt+B,Q=K+at+B,wt=K+at+q,et=K+rt+q;Dt(Z,Q,wt,et)}}}function ct(j,K,ot){l.push(j),l.push(K),l.push(ot)}function Rt(j,K,ot){Lt(j),Lt(K),Lt(ot);const rt=i.length/3,at=v.generateTopUV(n,i,rt-3,rt-2,rt-1);O(at[0]),O(at[1]),O(at[2])}function Dt(j,K,ot,rt){Lt(j),Lt(K),Lt(rt),Lt(K),Lt(ot),Lt(rt);const at=i.length/3,L=v.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);O(L[0]),O(L[1]),O(L[3]),O(L[1]),O(L[2]),O(L[3])}function Lt(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function O(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return TS(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new pl[i.type]().fromJSON(i)),new eo(n,t.options)}}const ES={generateTopUV:function(r,t,e,n,i){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new $(s,a),new $(o,l),new $(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],_=t[i*3+2],g=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new $(a,1-l),new $(c,1-u),new $(d,1-_),new $(g,1-p)]:[new $(o,1-l),new $(h,1-u),new $(f,1-_),new $(m,1-p)]}};function TS(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Gl extends ts{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gl(t.radius,t.detail)}}class no extends ts{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new no(t.radius,t.detail)}}class Wl extends Ft{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new P,_=new $;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,y=v+n+1,T=v+n+2,w=v+1;o.push(x,y,w),o.push(y,T,w)}}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xl extends Ft{constructor(t=new Os([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new yt(i,3)),this.setAttribute("normal",new yt(s,3)),this.setAttribute("uv",new yt(a,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const _=d.holes;ti.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){const v=_[m];ti.isClockWise(v)===!0&&(_[m]=v.reverse())}const g=ti.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){const v=_[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=g.length;m<p;m++){const v=g[m],x=v[0]+u,y=v[1]+u,T=v[2]+u;n.push(x,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return CS(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new Xl(n,t.curveSegments)}}function CS(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class es extends Ft{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const w=T/e;u.x=-t*Math.cos(i+w*s)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+w*s)*Math.sin(a+x*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+y,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const x=h[p][v+1],y=h[p][v],T=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(x,y,w),(p!==n-1||l<Math.PI)&&f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yl extends ts{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yl(t.radius,t.detail)}}class qs extends Ft{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ql extends Ft{constructor(t=1,e=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new P,d=new P,f=new P,_=new P,g=new P,m=new P,p=new P;for(let x=0;x<=n;++x){const y=x/n*s*Math.PI*2;v(y,s,a,t,f),v(y+.01,s,a,t,_),m.subVectors(_,f),p.addVectors(_,f),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let T=0;T<=i;++T){const w=T/i*Math.PI*2,E=-e*Math.cos(w),C=e*Math.sin(w);u.x=f.x+(E*p.x+C*g.x),u.y=f.y+(E*p.y+C*g.y),u.z=f.z+(E*p.z+C*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(T/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){const T=(i+1)*(x-1)+(y-1),w=(i+1)*x+(y-1),E=(i+1)*x+y,C=(i+1)*(x-1)+y;o.push(T,w,C),o.push(w,E,C)}this.setIndex(o),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2));function v(x,y,T,w,E){const C=Math.cos(x),b=Math.sin(x),S=T/y*x,D=Math.cos(S);E.x=w*(2+D)*.5*C,E.y=w*(2+D)*b*.5,E.z=w*Math.sin(S)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class $l extends Ft{constructor(t=new Ou(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new $;let h=new P;const u=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(f,2));function g(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),v(),p()}function m(x){h=t.getPointAt(x/e,h);const y=a.normals[x],T=a.binormals[x];for(let w=0;w<=i;w++){const E=w/i*Math.PI*2,C=Math.sin(E),b=-Math.cos(E);l.x=b*y.x+C*T.x,l.y=b*y.y+C*T.y,l.z=b*y.z+C*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){const T=(i+1)*(x-1)+(y-1),w=(i+1)*x+(y-1),E=(i+1)*x+y,C=(i+1)*(x-1)+y;_.push(T,w,C),_.push(w,E,C)}}function v(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)c.x=x/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $l(new pl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class cg extends Ft{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new P,s=new P;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let _=d,g=d+f;_<g;_+=3)for(let m=0;m<3;m++){const p=o.getX(_+m),v=o.getX(_+(m+1)%3);i.fromBufferAttribute(a,p),s.fromBufferAttribute(a,v),If(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),If(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function If(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Df=Object.freeze({__proto__:null,BoxGeometry:nn,CapsuleGeometry:Bl,CircleGeometry:zl,ConeGeometry:kl,CylinderGeometry:Wr,DodecahedronGeometry:Vl,EdgesGeometry:rg,ExtrudeGeometry:eo,IcosahedronGeometry:Gl,LatheGeometry:to,OctahedronGeometry:no,PlaneGeometry:Li,PolyhedronGeometry:ts,RingGeometry:Wl,ShapeGeometry:Xl,SphereGeometry:es,TetrahedronGeometry:Yl,TorusGeometry:qs,TorusKnotGeometry:ql,TubeGeometry:$l,WireframeGeometry:cg});class hg extends $e{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ft(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ug extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xr extends $e{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dg extends Xr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fg extends $e{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pg extends $e{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class mg extends $e{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class gg extends $e{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bu extends $e{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ft(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _g extends Ze{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Ls(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function xg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function vg(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Hh(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i}function zu(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}function RS(r,t,e,n,i=30){const s=r.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const _=c.times[f]*i;if(!(_<e||_>=n)){u.push(c.times[f]);for(let g=0;g<h;++g)d.push(c.values[f*h+g])}}u.length!==0&&(c.times=Ls(u,c.times.constructor),c.values=Ls(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function PS(r,t=0,e=r,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const _=o.times.length-1;let g;if(s<=o.times[0]){const p=h,v=u-h;g=o.values.slice(p,v)}else if(s>=o.times[_]){const p=_*u+h,v=p+u-h;g=o.values.slice(p,v)}else{const p=o.createInterpolant(),v=h,x=u-h;p.evaluate(s),g=p.resultBuffer.slice(v,x)}l==="quaternion"&&new We().fromArray(g).normalize().conjugate().toArray(g);const m=c.times.length;for(let p=0;p<m;++p){const v=p*f+d;if(l==="quaternion")We.multiplyQuaternionsFlat(c.values,v,g,0,c.values,v);else{const x=f-d*2;for(let y=0;y<x;++y)c.values[v+y]-=g[y]}}}return r.blendMode=vu,r}const LS={convertArray:Ls,isTypedArray:xg,getKeyframeOrder:vg,sortedArray:Hh,flattenJSON:zu,subclip:RS,makeClipAdditive:PS};class io{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yg extends io{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cs:s=t,o=2*e-n;break;case Ta:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cs:a=t,l=2*n-e;break;case Ta:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-f)*m+(1.5+f)*g+.5*_,y=f*m-f*g;for(let T=0;T!==o;++T)s[T]=p*a[h+T]+v*a[c+T]+x*a[l+T]+y*a[u+T];return s}}class ku extends io{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Mg extends io{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class qn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ls(e,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ls(t.times,Array),values:Ls(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ku(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Aa:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case ol:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&xg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ol,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ea;class $s extends qn{}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Aa;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class Vu extends qn{}Vu.prototype.ValueTypeName="color";class Ba extends qn{}Ba.prototype.ValueTypeName="number";class bg extends io{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)We.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Yr extends qn{InterpolantFactoryMethodLinear(t){return new bg(this.times,this.values,this.getValueSize(),t)}}Yr.prototype.ValueTypeName="quaternion";Yr.prototype.DefaultInterpolation=Ea;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends qn{}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Aa;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends qn{}za.prototype.ValueTypeName="vector";class ka{constructor(t="",e=-1,n=[],i=Al){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(DS(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=vg(l);l=Hh(l,1,h),c=Hh(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ba(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,g){if(f.length!==0){const m=[],p=[];zu(f,m,p,_),m.length!==0&&g.push(new u(d,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==d[_].morphTargets.length;++v){const x=d[_];m.push(x.time),p.push(x.morphTarget===g?1:0)}i.push(new Ba(".morphTargetInfluence["+g+"]",m,p))}l=f.length*a}else{const f=".bones["+e[u].name+"]";n(za,f+".position",d,"pos",i),n(Yr,f+".quaternion",d,"rot",i),n(za,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function IS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ba;case"vector":case"vector2":case"vector3":case"vector4":return za;case"color":return Vu;case"quaternion":return Yr;case"bool":case"boolean":return $s;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function DS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=IS(r.type);if(r.times===void 0){const e=[],n=[];zu(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Mi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class so{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Sg=new so;class sn{constructor(t){this.manager=t!==void 0?t:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sn.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class US extends Error{constructor(t,e){super(t),this.response=e}}class ii extends sn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Mi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(mi[t]!==void 0){mi[t].push({onLoad:e,onProgress:n,onError:i});return}mi[t]=[],mi[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=mi[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,E=h.length;w<E;w++){const C=h[w];C.onProgress&&C.onProgress(T)}p.enqueue(y),v()}})}}});return new Response(m)}else throw new US(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Mi.add(t,c);const h=mi[t];delete mi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=mi[t];if(h===void 0)throw this.manager.itemError(t),c;delete mi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class NS extends sn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=ka.parse(t[n]);e.push(i)}return e}}class OS extends sn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=[],o=new Ol,l=new ii(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(u){l.load(t[u],function(d){const f=s.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Pe),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){const d=s.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let _=0;_<f;_++){a[_]={mipmaps:[]};for(let g=0;g<d.mipmapCount;g++)a[_].mipmaps.push(d.mipmaps[_*d.mipmapCount+g]),a[_].format=d.format,a[_].width=d.width,a[_].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Pe),o.format=d.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}class Va extends sn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Mi.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Da("img");function l(){h(),Mi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class wg extends sn{constructor(t){super(t)}load(t,e,n,i){const s=new ja;s.colorSpace=mn;const a=new Va(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class FS extends sn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new qi,o=new ii(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:In,a.wrapT=c.wrapT!==void 0?c.wrapT:In,a.magFilter=c.magFilter!==void 0?c.magFilter:Pe,a.minFilter=c.minFilter!==void 0?c.minFilter:Pe,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Kn),c.mipmapCount===1&&(a.minFilter=Pe),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,i),a}}class Nr extends sn{constructor(t){super(t)}load(t,e,n,i){const s=new Me,a=new Va(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class ns extends Kt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Hu extends ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wc=new Tt,Uf=new P,Nf=new P;class Gu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uf),Nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nf),e.updateMatrixWorld(),Wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class BS extends Gu{constructor(){super(new se(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ir*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zl extends ns{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new BS}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Of=new Tt,sa=new P,Xc=new P;class zS extends Gu{constructor(){super(new se(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sa.setFromMatrixPosition(t.matrixWorld),n.position.copy(sa),Xc.copy(n.position),Xc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xc),n.updateMatrixWorld(),i.makeTranslation(-sa.x,-sa.y,-sa.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}}class Jl extends ns{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kS extends Gu{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kl extends ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new kS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jl extends ns{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ag extends ns{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Eg{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*s),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*s)),e.addScaledVector(a[6],.315392*(3*s*s-1)),e.addScaledVector(a[7],1.092548*(n*s)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*s),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*s),e.addScaledVector(a[6],.743125*s*s-.247708),e.addScaledVector(a[7],2*.429043*n*s),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}class Tg extends ns{constructor(t=new Eg,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Ql extends sn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const s=this,a=new ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(s){return e[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),e[s]}const i=Ql.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const s in t.uniforms){const a=t.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new ft().setHex(a.value);break;case"v2":i.uniforms[s].value=new $().fromArray(a.value);break;case"v3":i.uniforms[s].value=new P().fromArray(a.value);break;case"v4":i.uniforms[s].value=new ne().fromArray(a.value);break;case"m3":i.uniforms[s].value=new Nt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Tt().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)i.extensions[s]=t.extensions[s];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new $().fromArray(s)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const e={ShadowMaterial:hg,SpriteMaterial:Ru,RawShaderMaterial:ug,ShaderMaterial:Xn,PointsMaterial:Lu,MeshPhysicalMaterial:dg,MeshStandardMaterial:Xr,MeshPhongMaterial:fg,MeshToonMaterial:pg,MeshNormalMaterial:mg,MeshLambertMaterial:gg,MeshDepthMaterial:Tu,MeshDistanceMaterial:Cu,MeshBasicMaterial:Be,MeshMatcapMaterial:Bu,LineDashedMaterial:_g,LineBasicMaterial:Ze,Material:$e};return new e[t]}}class Gh{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Cg extends Ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Rg extends sn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,_){if(e[_]!==void 0)return e[_];const m=f.interleavedBuffers[_],p=s(f,m.buffer),v=br(m.type,p),x=new Ul(v,m.stride);return x.uuid=m.uuid,e[_]=x,x}function s(f,_){if(n[_]!==void 0)return n[_];const m=f.arrayBuffers[_],p=new Uint32Array(m).buffer;return n[_]=p,p}const a=t.isInstancedBufferGeometry?new Cg:new Ft,o=t.data.index;if(o!==void 0){const f=br(o.type,o.array);a.setIndex(new te(f,1))}const l=t.data.attributes;for(const f in l){const _=l[f];let g;if(_.isInterleavedBufferAttribute){const m=i(t.data,_.data);g=new Hs(m,_.itemSize,_.offset,_.normalized)}else{const m=br(_.type,_.array),p=_.isInstancedBufferAttribute?Ur:te;g=new p(m,_.itemSize,_.normalized)}_.name!==void 0&&(g.name=_.name),_.usage!==void 0&&g.setUsage(_.usage),a.setAttribute(f,g)}const c=t.data.morphAttributes;if(c)for(const f in c){const _=c[f],g=[];for(let m=0,p=_.length;m<p;m++){const v=_[m];let x;if(v.isInterleavedBufferAttribute){const y=i(t.data,v.data);x=new Hs(y,v.itemSize,v.offset,v.normalized)}else{const y=br(v.type,v.array);x=new te(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),g.push(x)}a.morphAttributes[f]=g}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,_=u.length;f!==_;++f){const g=u[f];a.addGroup(g.start,g.count,g.materialIndex)}const d=t.data.boundingSphere;if(d!==void 0){const f=new P;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new Xe(f,d.radius)}return t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}class VS extends sn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=this.path===""?Gh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}s.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Gh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const s=new ii(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(t,e),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,s,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),e!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),s=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,s),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const s=new Os().fromJSON(t[n]);e[s.uuid]=s}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),t!==void 0)for(let s=0,a=t.length;s<a;s++){const o=new Nl().fromJSON(t[s],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Rg;for(let s=0,a=t.length;s<a;s++){let o;const l=t[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Df?o=Df[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const s=new Ql;s.setTextures(e);for(let a=0,o=t.length;a<o;a++){const l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],s=ka.parse(i);e[s.uuid]=s}return e}parseImages(t,e){const n=this,i={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:br(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new so(e);s=new Va(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const u=t[c],d=u.url;if(Array.isArray(d)){const f=[];for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o(m);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new qi(p.data,p.width,p.height)))}i[u.uuid]=new Rs(f)}else{const f=o(u.url);i[u.uuid]=new Rs(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:br(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Va(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const l=t[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],_=await s(f);_!==null&&(_ instanceof HTMLImageElement?h.push(_):h.push(new qi(_.data,_.width,_.height)))}n[l.uuid]=new Rs(h)}else{const h=await s(l.url);n[l.uuid]=new Rs(h)}}}return n}parseTextures(t,e){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const i={};if(t!==void 0)for(let s=0,a=t.length;s<a;s++){const o=t[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=e[o.image],c=l.data;let h;Array.isArray(c)?(h=new ja,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new qi:h=new Me,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,HS)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Ff),h.wrapT=n(o.wrap[1],Ff)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Bf)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Bf)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,s){let a;function o(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let _=0,g=d.length;_<g;_++){const m=d[_];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":a=new Tn,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new ft(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Dl(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new Il(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new se(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Pl(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new jl(t.color,t.intensity);break;case"DirectionalLight":a=new Kl(t.color,t.intensity);break;case"PointLight":a=new Jl(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Ag(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Zl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":a=new Hu(t.color,t.groundColor,t.intensity);break;case"LightProbe":a=new Tg().fromJSON(t);break;case"SkinnedMesh":h=o(t.geometry),u=l(t.material),a=new Zm(h,u),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),u=l(t.material),a=new Ht(h,u);break;case"InstancedMesh":h=o(t.geometry),u=l(t.material);const d=t.count,f=t.instanceMatrix,_=t.instanceColor;a=new Jm(h,u,d),a.instanceMatrix=new Ur(new Float32Array(f.array),16),_!==void 0&&(a.instanceColor=new Ur(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(t.geometry),u=l(t.material),a=new Km(t.maxGeometryCount,t.maxVertexCount,t.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._visibility=t.visibility,a._active=t.active,a._bounds=t.bounds.map(g=>{const m=new en;m.min.fromArray(g.boxMin),m.max.fromArray(g.boxMax);const p=new Xe;return p.radius=g.sphereRadius,p.center.fromArray(g.sphereCenter),{boxInitialized:g.boxInitialized,box:m,sphereInitialized:g.sphereInitialized,sphere:p}}),a._maxGeometryCount=t.maxGeometryCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._geometryCount=t.geometryCount,a._matricesTexture=c(t.matricesTexture.uuid);break;case"LOD":a=new $m;break;case"Line":a=new Ti(o(t.geometry),l(t.material));break;case"LineLoop":a=new jm(o(t.geometry),l(t.material));break;case"LineSegments":a=new oi(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new Qm(o(t.geometry),l(t.material));break;case"Sprite":a=new qm(l(t.material));break;case"Group":a=new Ps;break;case"Bone":a=new Pu;break;default:a=new Kt}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],e,n,i,s))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const _=d[f];a.animations.push(s[_])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const _=d[f],g=a.getObjectByProperty("uuid",_.object);g!==void 0&&a.addLevel(g,_.distance,_.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const HS={UVMapping:wl,CubeReflectionMapping:Ei,CubeRefractionMapping:Ji,EquirectangularReflectionMapping:ya,EquirectangularRefractionMapping:Ma,CubeUVReflectionMapping:Vr},Ff={RepeatWrapping:ba,ClampToEdgeWrapping:In,MirroredRepeatWrapping:Sa},Bf={NearestFilter:xe,NearestMipmapNearestFilter:cu,NearestMipmapLinearFilter:Mr,LinearFilter:Pe,LinearMipmapNearestFilter:ua,LinearMipmapLinearFilter:Kn};class GS extends sn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Mi.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Mi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Mi.add(t,l),s.manager.itemStart(t)}}let qo;class Wu{static getContext(){return qo===void 0&&(qo=new(window.AudioContext||window.webkitAudioContext)),qo}static setContext(t){qo=t}}class WS extends sn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new ii(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0);Wu.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),s.manager.itemError(t)}}}const zf=new Tt,kf=new Tt,ps=new Tt;class XS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new se,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new se,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,ps.copy(t.projectionMatrix);const i=e.eyeSep/2,s=i*e.near/e.focus,a=e.near*Math.tan(Ns*e.fov*.5)/e.zoom;let o,l;kf.elements[12]=-i,zf.elements[12]=i,o=-a*e.aspect+s,l=a*e.aspect+s,ps.elements[0]=2*e.near/(l-o),ps.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ps),o=-a*e.aspect-s,l=a*e.aspect-s,ps.elements[0]=2*e.near/(l-o),ps.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ps)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(kf),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(zf)}}class ro{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vf(){return(typeof performance>"u"?Date:performance).now()}const ms=new P,Hf=new We,YS=new P,gs=new P;class qS extends Kt{constructor(){super(),this.type="AudioListener",this.context=Wu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ro}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ms,Hf,YS),gs.set(0,0,-1).applyQuaternion(Hf),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(ms.x,i),e.positionY.linearRampToValueAtTime(ms.y,i),e.positionZ.linearRampToValueAtTime(ms.z,i),e.forwardX.linearRampToValueAtTime(gs.x,i),e.forwardY.linearRampToValueAtTime(gs.y,i),e.forwardZ.linearRampToValueAtTime(gs.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(ms.x,ms.y,ms.z),e.setOrientation(gs.x,gs.y,gs.z,n.x,n.y,n.z)}}class Pg extends Kt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const _s=new P,Gf=new We,$S=new P,xs=new P;class ZS extends Pg{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_s,Gf,$S),xs.set(0,0,1).applyQuaternion(Gf);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(_s.x,n),e.positionY.linearRampToValueAtTime(_s.y,n),e.positionZ.linearRampToValueAtTime(_s.z,n),e.orientationX.linearRampToValueAtTime(xs.x,n),e.orientationY.linearRampToValueAtTime(xs.y,n),e.orientationZ.linearRampToValueAtTime(xs.z,n)}else e.setPosition(_s.x,_s.y,_s.z),e.setOrientation(xs.x,xs.y,xs.z)}}class JS{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Lg{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,a;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,a=i;s!==a;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){We.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const a=this._workIndex*s;We.multiplyQuaternionsFlat(t,a,t,e,t,n),We.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,s){for(let a=0;a!==s;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Xu="\\[\\]\\.:\\/",KS=new RegExp("["+Xu+"]","g"),Yu="[^"+Xu+"]",jS="[^"+Xu.replace("\\.","")+"]",QS=/((?:WC+[\/:])*)/.source.replace("WC",Yu),tw=/(WCOD+)?/.source.replace("WCOD",jS),ew=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),nw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),iw=new RegExp("^"+QS+tw+ew+nw+"$"),sw=["material","materials","bones","map"];class rw{constructor(t,e,n){const i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Jt.Composite(t,e,n):new Jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(KS,"")}static parseTrackName(t){const e=iw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);sw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=rw;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class aw{constructor(){this.isAnimationObjectGroup=!0,this.uuid=bn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length;let o,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let _=e[f];if(_===void 0){_=l++,e[f]=_,t.push(d);for(let g=0,m=a;g!==m;++g)s[g].push(new Jt(d,n[g],i[g]))}else if(_<c){o=t[_];const g=--c,m=t[g];e[m.uuid]=_,t[_]=m,e[f]=g,t[g]=d;for(let p=0,v=a;p!==v;++p){const x=s[p],y=x[g];let T=x[_];x[_]=y,T===void 0&&(T=new Jt(d,n[p],i[p])),x[g]=T}}else t[_]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=s){const u=s++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,_=i;f!==_;++f){const g=n[f],m=g[u],p=g[h];g[h]=m,g[u]=p}}}this.nCachedObjects_=s}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<s){const d=--s,f=t[d],_=--a,g=t[_];e[f.uuid]=u,t[u]=f,e[g.uuid]=d,t[d]=g,t.pop();for(let m=0,p=i;m!==p;++m){const v=n[m],x=v[d],y=v[_];v[u]=x,v[d]=y,v.pop()}}else{const d=--a,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let _=0,g=i;_!==g;++_){const m=n[_];m[u]=m[d],m.pop()}}}this.nCachedObjects_=s}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const s=this._bindings;if(i!==void 0)return s[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=s.length,n[t]=i,a.push(t),o.push(e),s.push(u);for(let d=h,f=l.length;d!==f;++d){const _=l[d];u[d]=new Jt(_,t,e)}return u}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=t[o];e[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),i[n]=i[o],i.pop()}}}class Ig{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,a=s.length,o=new Array(a),l={endingStart:Ts,endingEnd:Ts};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,a=s/i,o=i/s;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Al:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const a=n===_m;if(t===0)return s===-1?i:a&&(s&1)===1?e-i:i;if(n===mm){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Cs,i.endingEnd=Cs):(t?i.endingStart=this.zeroSlopeAtStart?Cs:Ts:i.endingStart=Ta,e?i.endingEnd=this.zeroSlopeAtEnd?Cs:Ts:i.endingEnd=Ta)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=e,o[1]=s+t,l[1]=n,this}}const ow=new Float32Array(1);class lw extends ai{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let _=h[f];if(_!==void 0)++_.referenceCount,a[u]=_;else{if(_=a[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=e&&e._propertyBindings[u].binding.parsedPath;_=new Lg(Jt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),a[u]=_}o[u].resultBuffer=_.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let a=s[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new ku(new Float32Array(2),new Float32Array(2),1,ow),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let a=typeof t=="string"?ka.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Al),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Ig(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?ka.findByName(n,t):t,a=s?s.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class qu{constructor(t){this.value=t}clone(){return new qu(this.value.clone===void 0?this.value:this.value.clone())}}let cw=0;class hw extends ai{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:cw++}),this.name="",this.usage=La,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const s=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class uw extends Ul{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class dw{constructor(t,e,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Wf=new Tt;class fw{constructor(t,e,n=0,i=1/0){this.ray=new Ys(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(t,e=!0,n=[]){return Wh(t,this,n,e),n.sort(Xf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Wh(t[i],this,n,e);return n.sort(Xf),n}}function Xf(r,t){return r.distance-t.distance}function Wh(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Wh(i[s],t,e,!0)}}class Xh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pw{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const Yf=new $;class mw{constructor(t=new $(1/0,1/0),e=new $(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yf.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yf).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qf=new P,$o=new P;class gw{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){qf.subVectors(t,this.start),$o.subVectors(this.end,this.start);const n=$o.dot($o);let s=$o.dot(qf)/n;return e&&(s=_e(s,0,1)),s}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const $f=new P;class $u extends Kt{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Ft,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new yt(i,3));const s=new Ze({fog:!1,toneMapped:!1});this.cone=new oi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),$f.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt($f),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Hi=new P,Zo=new Tt,Yc=new Tt;class _w extends oi{constructor(t){const e=Dg(t),n=new Ft,i=[],s=[],a=new ft(0,0,1),o=new ft(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new yt(i,3)),n.setAttribute("color",new yt(s,3));const l=new Ze({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Yc.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<e.length;s++){const o=e[s];o.parent&&o.parent.isBone&&(Zo.multiplyMatrices(Yc,o.matrixWorld),Hi.setFromMatrixPosition(Zo),i.setXYZ(a,Hi.x,Hi.y,Hi.z),Zo.multiplyMatrices(Yc,o.parent.matrixWorld),Hi.setFromMatrixPosition(Zo),i.setXYZ(a+1,Hi.x,Hi.y,Hi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Dg(r){const t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push.apply(t,Dg(r.children[e]));return t}class Zu extends Ht{constructor(t,e,n){const i=new es(e,4,2),s=new Be({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const xw=new P,Zf=new ft,Jf=new ft;class Ug extends Kt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new no(e);i.rotateY(Math.PI*.5),this.material=new Be({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),a=new Float32Array(s.count*3);i.setAttribute("color",new te(a,3)),this.add(new Ht(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Zf.copy(this.light.color),Jf.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const s=n<i/2?Zf:Jf;e.setXYZ(n,s.r,s.g,s.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(xw.setFromMatrixPosition(this.light.matrixWorld).negate())}}class vw extends oi{constructor(t=10,e=10,n=4473924,i=8947848){n=new ft(n),i=new ft(i);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,_=-o;d<=e;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===s?n:i;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new Ft;h.setAttribute("position",new yt(l,3)),h.setAttribute("color",new yt(c,3));const u=new Ze({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yw extends oi{constructor(t=10,e=16,n=8,i=64,s=4473924,a=8947848){s=new ft(s),a=new ft(a);const o=[],l=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,_=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,_);const g=u&1?s:a;l.push(g.r,g.g,g.b),l.push(g.r,g.g,g.b)}for(let u=0;u<n;u++){const d=u&1?s:a,f=t-t/n*u;for(let _=0;_<i;_++){let g=_/i*(Math.PI*2),m=Math.sin(g)*f,p=Math.cos(g)*f;o.push(m,0,p),l.push(d.r,d.g,d.b),g=(_+1)/i*(Math.PI*2),m=Math.sin(g)*f,p=Math.cos(g)*f,o.push(m,0,p),l.push(d.r,d.g,d.b)}}const c=new Ft;c.setAttribute("position",new yt(o,3)),c.setAttribute("color",new yt(l,3));const h=new Ze({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Kf=new P,Jo=new P,jf=new P;class Ju extends Kt{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Ft;i.setAttribute("position",new yt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const s=new Ze({fog:!1,toneMapped:!1});this.lightPlane=new Ti(i,s),this.add(this.lightPlane),i=new Ft,i.setAttribute("position",new yt([0,0,0,0,0,1],3)),this.targetLine=new Ti(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Kf.setFromMatrixPosition(this.light.matrixWorld),Jo.setFromMatrixPosition(this.light.target.matrixWorld),jf.subVectors(Jo,Kf),this.lightPlane.lookAt(Jo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Jo),this.targetLine.scale.z=jf.length()}}const Ko=new P,ge=new Rl;class Mw extends oi{constructor(t){const e=new Ft,n=new Ze({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(_,g){l(_),l(g)}function l(_){i.push(0,0,0),s.push(0,0,0),a[_]===void 0&&(a[_]=[]),a[_].push(i.length/3-1)}e.setAttribute("position",new yt(i,3)),e.setAttribute("color",new yt(s,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ft(16755200),h=new ft(16711680),u=new ft(43775),d=new ft(16777215),f=new ft(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;ge.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Se("c",e,t,ge,0,0,-1),Se("t",e,t,ge,0,0,1),Se("n1",e,t,ge,-n,-i,-1),Se("n2",e,t,ge,n,-i,-1),Se("n3",e,t,ge,-n,i,-1),Se("n4",e,t,ge,n,i,-1),Se("f1",e,t,ge,-n,-i,1),Se("f2",e,t,ge,n,-i,1),Se("f3",e,t,ge,-n,i,1),Se("f4",e,t,ge,n,i,1),Se("u1",e,t,ge,n*.7,i*1.1,-1),Se("u2",e,t,ge,-n*.7,i*1.1,-1),Se("u3",e,t,ge,0,i*2,-1),Se("cf1",e,t,ge,-n,0,1),Se("cf2",e,t,ge,n,0,1),Se("cf3",e,t,ge,0,-i,1),Se("cf4",e,t,ge,0,i,1),Se("cn1",e,t,ge,-n,0,-1),Se("cn2",e,t,ge,n,0,-1),Se("cn3",e,t,ge,0,-i,-1),Se("cn4",e,t,ge,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Se(r,t,e,n,i,s,a){Ko.set(i,s,a).unproject(n);const o=t[r];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Ko.x,Ko.y,Ko.z)}}const jo=new en;class bw extends oi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Ft;s.setIndex(new te(n,1)),s.setAttribute("position",new te(i,3)),super(s,new Ze({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&jo.setFromObject(this.object),jo.isEmpty())return;const e=jo.min,n=jo.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=e.x,s[4]=n.y,s[5]=n.z,s[6]=e.x,s[7]=e.y,s[8]=n.z,s[9]=n.x,s[10]=e.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=e.z,s[15]=e.x,s[16]=n.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=n.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sw extends oi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ft;s.setIndex(new te(n,1)),s.setAttribute("position",new yt(i,3)),super(s,new Ze({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class ww extends Ti{constructor(t,e=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ft;a.setAttribute("position",new yt(s,3)),a.computeBoundingSphere(),super(a,new Ze({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ft;l.setAttribute("position",new yt(o,3)),l.computeBoundingSphere(),this.add(new Ht(l,new Be({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Qf=new P;let Qo,qc;class Aw extends Kt{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Qo===void 0&&(Qo=new Ft,Qo.setAttribute("position",new yt([0,0,0,0,1,0],3)),qc=new Wr(0,.5,1,5,1),qc.translate(0,-.5,0)),this.position.copy(e),this.line=new Ti(Qo,new Ze({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ht(qc,new Be({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Qf.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Qf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class tc extends oi{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ft;i.setAttribute("position",new yt(e,3)),i.setAttribute("color",new yt(n,3));const s=new Ze({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new ft,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ng{constructor(){this.type="ShapePath",this.color=new ft,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ua,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,a){return this.currentPath.bezierCurveTo(t,e,n,i,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const v=[];for(let x=0,y=p.length;x<y;x++){const T=p[x],w=new Os;w.curves=T.curves,v.push(w)}return v}function n(p,v){const x=v.length;let y=!1;for(let T=x-1,w=0;w<x;T=w++){let E=v[T],C=v[w],b=C.x-E.x,S=C.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=v[w],b=-b,C=v[T],S=-S),p.y<E.y||p.y>C.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{const D=S*(p.x-E.x)-b*(p.y-E.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(p.y!==E.y)continue;if(C.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=C.x)return!0}}return y}const i=ti.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Os,l.curves=o.curves,c.push(l),c;let h=!i(s[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],_=0,g;d[_]=void 0,f[_]=[];for(let p=0,v=s.length;p<v;p++)o=s[p],g=o.getPoints(),a=i(g),a=t?!a:a,a?(!h&&d[_]&&_++,d[_]={s:new Os,p:g},d[_].s.curves=o.curves,h&&_++,f[_]=[]):f[_].push({h:o,p:g[0]});if(!d[0])return e(s);if(d.length>1){let p=!1,v=0;for(let x=0,y=d.length;x<y;x++)u[x]=[];for(let x=0,y=d.length;x<y;x++){const T=f[x];for(let w=0;w<T.length;w++){const E=T[w];let C=!0;for(let b=0;b<d.length;b++)n(E.p,d[b].p)&&(x!==b&&v++,C?(C=!1,u[b].push(E)):p=!0);C&&u[x].push(E)}}v>0&&p===!1&&(f=u)}let m;for(let p=0,v=d.length;p<v;p++){l=d[p].s,c.push(l),m=f[p];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return c}}class Ew extends Wn{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);const Tw=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:em,AddEquation:Gi,AddOperation:Kp,AdditiveAnimationBlendMode:vu,AdditiveBlending:ah,AgXToneMapping:im,AlphaFormat:cm,AlwaysCompare:Tm,AlwaysDepth:Wp,AlwaysStencilFunc:Nh,AmbientLight:jl,AnimationAction:Ig,AnimationClip:ka,AnimationLoader:NS,AnimationMixer:lw,AnimationObjectGroup:aw,AnimationUtils:LS,ArcCurve:tg,ArrayCamera:Xm,ArrowHelper:Aw,AttachedBindMode:ch,Audio:Pg,AudioAnalyser:JS,AudioContext:Wu,AudioListener:qS,AudioLoader:WS,AxesHelper:tc,BackSide:tn,BasicDepthPacking:xm,BasicShadowMap:H_,BatchedMesh:Km,Bone:Pu,BooleanKeyframeTrack:$s,Box2:mw,Box3:en,Box3Helper:Sw,BoxGeometry:nn,BoxHelper:bw,BufferAttribute:te,BufferGeometry:Ft,BufferGeometryLoader:Rg,ByteType:am,Cache:Mi,Camera:Rl,CameraHelper:Mw,CanvasTexture:eS,CapsuleGeometry:Bl,CatmullRomCurve3:eg,CineonToneMapping:tm,CircleGeometry:zl,ClampToEdgeWrapping:In,Clock:ro,Color:ft,ColorKeyframeTrack:Vu,ColorManagement:ee,CompressedArrayTexture:Qb,CompressedCubeTexture:tS,CompressedTexture:Ol,CompressedTextureLoader:OS,ConeGeometry:kl,ConstantAlphaFactor:Vp,ConstantColorFactor:zp,CubeCamera:Om,CubeReflectionMapping:Ei,CubeRefractionMapping:Ji,CubeTexture:ja,CubeTextureLoader:wg,CubeUVReflectionMapping:Vr,CubicBezierCurve:Du,CubicBezierCurve3:ng,CubicInterpolant:yg,CullFaceBack:rh,CullFaceFront:Sp,CullFaceFrontBack:V_,CullFaceNone:bp,Curve:Yn,CurvePath:sg,CustomBlending:Ap,CustomToneMapping:nm,CylinderGeometry:Wr,Cylindrical:pw,Data3DTexture:bu,DataArrayTexture:Tl,DataTexture:qi,DataTextureLoader:FS,DataUtils:J0,DecrementStencilOp:Q_,DecrementWrapStencilOp:e0,DefaultLoadingManager:Sg,DepthFormat:Us,DepthStencilFormat:Lr,DepthTexture:Eu,DetachedBindMode:rm,DirectionalLight:Kl,DirectionalLightHelper:Ju,DiscreteInterpolant:Mg,DisplayP3ColorSpace:El,DodecahedronGeometry:Vl,DoubleSide:_n,DstAlphaFactor:Up,DstColorFactor:Op,DynamicCopyUsage:g0,DynamicDrawUsage:h0,DynamicReadUsage:f0,EdgesGeometry:rg,EllipseCurve:Fl,EqualCompare:Sm,EqualDepth:Yp,EqualStencilFunc:r0,EquirectangularReflectionMapping:ya,EquirectangularRefractionMapping:Ma,Euler:An,EventDispatcher:ai,ExtrudeGeometry:eo,FileLoader:ii,Float16BufferAttribute:nx,Float32BufferAttribute:yt,FloatType:Dn,Fog:Dl,FogExp2:Il,FramebufferTexture:jb,FrontSide:Ai,Frustum:Qa,GLBufferAttribute:dw,GLSL1:x0,GLSL3:Oh,GreaterCompare:wm,GreaterDepth:$p,GreaterEqualCompare:Em,GreaterEqualDepth:qp,GreaterEqualStencilFunc:c0,GreaterStencilFunc:o0,GridHelper:vw,Group:Ps,HalfFloatType:wa,HemisphereLight:Hu,HemisphereLightHelper:Ug,IcosahedronGeometry:Gl,ImageBitmapLoader:GS,ImageLoader:Va,ImageUtils:Lm,IncrementStencilOp:j_,IncrementWrapStencilOp:t0,InstancedBufferAttribute:Ur,InstancedBufferGeometry:Cg,InstancedInterleavedBuffer:uw,InstancedMesh:Jm,Int16BufferAttribute:tx,Int32BufferAttribute:ex,Int8BufferAttribute:K0,IntType:uu,InterleavedBuffer:Ul,InterleavedBufferAttribute:Hs,Interpolant:io,InterpolateDiscrete:Aa,InterpolateLinear:Ea,InterpolateSmooth:ol,InvertStencilOp:n0,KeepStencilOp:Ss,KeyframeTrack:qn,LOD:$m,LatheGeometry:to,Layers:Cl,LessCompare:bm,LessDepth:Xp,LessEqualCompare:yu,LessEqualDepth:va,LessEqualStencilFunc:a0,LessStencilFunc:s0,Light:ns,LightProbe:Tg,Line:Ti,Line3:gw,LineBasicMaterial:Ze,LineCurve:Uu,LineCurve3:ig,LineDashedMaterial:_g,LineLoop:jm,LineSegments:oi,LinearDisplayP3ColorSpace:Ka,LinearFilter:Pe,LinearInterpolant:ku,LinearMipMapLinearFilter:Y_,LinearMipMapNearestFilter:X_,LinearMipmapLinearFilter:Kn,LinearMipmapNearestFilter:ua,LinearSRGBColorSpace:Pi,LinearToneMapping:jp,LinearTransfer:Ca,Loader:sn,LoaderUtils:Gh,LoadingManager:so,LoopOnce:mm,LoopPingPong:_m,LoopRepeat:gm,LuminanceAlphaFormat:dm,LuminanceFormat:um,MOUSE:Ms,Material:$e,MaterialLoader:Ql,MathUtils:fa,Matrix3:Nt,Matrix4:Tt,MaxEquation:Rp,Mesh:Ht,MeshBasicMaterial:Be,MeshDepthMaterial:Tu,MeshDistanceMaterial:Cu,MeshLambertMaterial:gg,MeshMatcapMaterial:Bu,MeshNormalMaterial:mg,MeshPhongMaterial:fg,MeshPhysicalMaterial:dg,MeshStandardMaterial:Xr,MeshToonMaterial:pg,MinEquation:Cp,MirroredRepeatWrapping:Sa,MixOperation:Jp,MultiplyBlending:lh,MultiplyOperation:Ja,NearestFilter:xe,NearestMipMapLinearFilter:W_,NearestMipMapNearestFilter:G_,NearestMipmapLinearFilter:Mr,NearestMipmapNearestFilter:cu,NeutralToneMapping:sm,NeverCompare:Mm,NeverDepth:Gp,NeverStencilFunc:i0,NoBlending:bi,NoColorSpace:vi,NoToneMapping:Si,NormalAnimationBlendMode:Al,NormalBlending:Ds,NotEqualCompare:Am,NotEqualDepth:Zp,NotEqualStencilFunc:l0,NumberKeyframeTrack:Ba,Object3D:Kt,ObjectLoader:VS,ObjectSpaceNormalMap:ym,OctahedronGeometry:no,OneFactor:Lp,OneMinusConstantAlphaFactor:Hp,OneMinusConstantColorFactor:kp,OneMinusDstAlphaFactor:Np,OneMinusDstColorFactor:Fp,OneMinusSrcAlphaFactor:fl,OneMinusSrcColorFactor:Dp,OrthographicCamera:Pl,P3Primaries:Pa,PCFShadowMap:lu,PCFSoftShadowMap:wp,PMREMGenerator:Fh,Path:Ua,PerspectiveCamera:se,Plane:_i,PlaneGeometry:Li,PlaneHelper:ww,PointLight:Jl,PointLightHelper:Zu,Points:Qm,PointsMaterial:Lu,PolarGridHelper:yw,PolyhedronGeometry:ts,PositionalAudio:ZS,PropertyBinding:Jt,PropertyMixer:Lg,QuadraticBezierCurve:Nu,QuadraticBezierCurve3:Ou,Quaternion:We,QuaternionKeyframeTrack:Yr,QuaternionLinearInterpolant:bg,RED_GREEN_RGTC2_Format:Dh,RED_RGTC1_Format:pm,REVISION:Sl,RGBADepthPacking:vm,RGBAFormat:yn,RGBAIntegerFormat:_u,RGBA_ASTC_10x10_Format:Th,RGBA_ASTC_10x5_Format:wh,RGBA_ASTC_10x6_Format:Ah,RGBA_ASTC_10x8_Format:Eh,RGBA_ASTC_12x10_Format:Ch,RGBA_ASTC_12x12_Format:Rh,RGBA_ASTC_4x4_Format:gh,RGBA_ASTC_5x4_Format:_h,RGBA_ASTC_5x5_Format:xh,RGBA_ASTC_6x5_Format:vh,RGBA_ASTC_6x6_Format:yh,RGBA_ASTC_8x5_Format:Mh,RGBA_ASTC_8x6_Format:bh,RGBA_ASTC_8x8_Format:Sh,RGBA_BPTC_Format:al,RGBA_ETC2_EAC_Format:mh,RGBA_PVRTC_2BPPV1_Format:fh,RGBA_PVRTC_4BPPV1_Format:dh,RGBA_S3TC_DXT1_Format:il,RGBA_S3TC_DXT3_Format:sl,RGBA_S3TC_DXT5_Format:rl,RGBFormat:hm,RGB_BPTC_SIGNED_Format:Ph,RGB_BPTC_UNSIGNED_Format:Lh,RGB_ETC1_Format:xu,RGB_ETC2_Format:ph,RGB_PVRTC_2BPPV1_Format:uh,RGB_PVRTC_4BPPV1_Format:hh,RGB_S3TC_DXT1_Format:nl,RGFormat:fm,RGIntegerFormat:gu,RawShaderMaterial:ug,Ray:Ys,Raycaster:fw,Rec709Primaries:Ra,RectAreaLight:Ag,RedFormat:pu,RedIntegerFormat:mu,ReinhardToneMapping:Qp,RenderTarget:Im,RepeatWrapping:ba,ReplaceStencilOp:K_,ReverseSubtractEquation:Tp,RingGeometry:Wl,SIGNED_RED_GREEN_RGTC2_Format:Uh,SIGNED_RED_RGTC1_Format:Ih,SRGBColorSpace:mn,SRGBTransfer:ae,Scene:Tn,ShaderChunk:kt,ShaderLib:Gn,ShaderMaterial:Xn,ShadowMaterial:hg,Shape:Os,ShapeGeometry:Xl,ShapePath:Ng,ShapeUtils:ti,ShortType:om,Skeleton:Nl,SkeletonHelper:_w,SkinnedMesh:Zm,Source:Rs,Sphere:Xe,SphereGeometry:es,Spherical:Xh,SphericalHarmonics3:Eg,SplineCurve:Fu,SpotLight:Zl,SpotLightHelper:$u,Sprite:qm,SpriteMaterial:Ru,SrcAlphaFactor:dl,SrcAlphaSaturateFactor:Bp,SrcColorFactor:Ip,StaticCopyUsage:m0,StaticDrawUsage:La,StaticReadUsage:d0,StereoCamera:XS,StreamCopyUsage:_0,StreamDrawUsage:u0,StreamReadUsage:p0,StringKeyframeTrack:Zs,SubtractEquation:Ep,SubtractiveBlending:oh,TOUCH:bs,TangentSpaceNormalMap:Qi,TetrahedronGeometry:Yl,Texture:Me,TextureLoader:Nr,TorusGeometry:qs,TorusKnotGeometry:ql,Triangle:xn,TriangleFanDrawMode:Z_,TriangleStripDrawMode:$_,TrianglesDrawMode:q_,TubeGeometry:$l,UVMapping:wl,Uint16BufferAttribute:Su,Uint32BufferAttribute:wu,Uint8BufferAttribute:j0,Uint8ClampedBufferAttribute:Q0,Uniform:qu,UniformsGroup:hw,UniformsLib:ut,UniformsUtils:Nm,UnsignedByteType:wi,UnsignedInt248Type:Hr,UnsignedInt5999Type:lm,UnsignedIntType:Vs,UnsignedShort4444Type:du,UnsignedShort5551Type:fu,UnsignedShortType:hu,VSMShadowMap:$n,Vector2:$,Vector3:P,Vector4:ne,VectorKeyframeTrack:za,VideoTexture:Kb,WebGL3DRenderTarget:k0,WebGLArrayRenderTarget:z0,WebGLCoordinateSystem:jn,WebGLCubeRenderTarget:Fm,WebGLMultipleRenderTargets:Ew,WebGLRenderTarget:Wn,WebGLRenderer:zn,WebGLUtils:Wm,WebGPUCoordinateSystem:Ia,WireframeGeometry:cg,WrapAroundEnding:Ta,ZeroCurvatureEnding:Ts,ZeroFactor:Pp,ZeroSlopeEnding:Cs,ZeroStencilOp:J_,createCanvasElement:Rm},Symbol.toStringTag,{value:"Module"})),Cw={class:"wrap"},Rw={class:"content"},Pw={__name:"ThreePanoramic",setup(r){yp();const t=ye(null);let e,n,i,s=0,a=0,o=0,l=0,c=0,h=0,u=0,d=0;const f=ye(null);function _(){e=new se(75,window.innerWidth/window.innerHeight,1,1100),n=new Tn;const w=new es(500,60,40);w.scale(1,1,-1);const E=new Nr().load("/hdirs/medieval_cafe_4k.png"),C=new Nr().load("/hdirs/1.png");E.colorSpace=mn;const b=new Be({map:E}),S=new Ht(w,b);n.add(S),i=new zn,i.setPixelRatio(window.devicePixelRatio),i.setSize(+getComputedStyle(f.value).width.split("px")[0],+getComputedStyle(f.value).height.split("px")[0]),f.value.appendChild(i.domElement),f.value.style.touchAction="none",f.value.addEventListener("pointerdown",m),f.value.addEventListener("wheel",x),f.value.addEventListener("dblclick",D=>{console.log(b),b.map==E?b.map=C:b.map=E,o=0,c=0}),document.addEventListener("dragover",function(D){D.preventDefault(),D.dataTransfer.dropEffect="copy"}),document.addEventListener("dragenter",function(){document.body.style.opacity=.5}),document.addEventListener("dragleave",function(){document.body.style.opacity=1}),document.addEventListener("drop",function(D){D.preventDefault();const U=new FileReader;U.addEventListener("load",function(I){b.map.image.src=I.target.result,b.map.needsUpdate=!0}),U.readAsDataURL(D.dataTransfer.files[0]),document.body.style.opacity=1}),window.addEventListener("resize",g)}function g(){e.aspect=+getComputedStyle(f.value).width.split("px")[0]/+getComputedStyle(f.value).height.split("px")[0],e.updateProjectionMatrix(),i.setSize(+getComputedStyle(f.value).width.split("px")[0],+getComputedStyle(f.value).height.split("px")[0])}function m(w){w.isPrimary!==!1&&(s=w.clientX,a=w.clientY,l=o,h=c,document.addEventListener("pointermove",p),document.addEventListener("pointerup",v))}function p(w){w.isPrimary!==!1&&(o=(s-w.clientX)*.1+l,c=(w.clientY-a)*.1+h)}function v(w){w.isPrimary!==!1&&(document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",v))}function x(w){w.preventDefault();const E=e.fov+w.deltaY*.05;e.fov=fa.clamp(E,10,75),e.updateProjectionMatrix()}function y(){requestAnimationFrame(y),T()}function T(){c=Math.max(-85,Math.min(85,c)),u=fa.degToRad(90-c),d=fa.degToRad(o);const w=500*Math.sin(u)*Math.cos(d),E=500*Math.cos(u),C=500*Math.sin(u)*Math.sin(d);e.lookAt(w,E,C),i.render(n,e)}return ye({}),Fn(w=>{_(),y()}),(w,E)=>(we(),wn("div",{class:"wcp-container",onClick:E[0]||(E[0]=(...C)=>{var b,S;return((b=t.value)==null?void 0:b.hideMenu)&&((S=t.value)==null?void 0:S.hideMenu(...C))})},[aa(Mp,{ref_key:"headerRef",ref:t},null,512),le("div",Cw,[le("div",Rw,[le("div",{ref_key:"container",ref:f,style:{width:"100%",height:"50vh"}},null,512)])])]))}},Lw=Bn(Pw,[["__scopeId","data-v-ba253317"]]);function gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Og(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Or={duration:.5,overwrite:!1,delay:0},Ku,Ye,ue,Un=1e8,oe=1/Un,Yh=Math.PI*2,Iw=Yh/4,Dw=0,Fg=Math.sqrt,Uw=Math.cos,Nw=Math.sin,Fe=function(t){return typeof t=="string"},ve=function(t){return typeof t=="function"},Ci=function(t){return typeof t=="number"},ju=function(t){return typeof t>"u"},si=function(t){return typeof t=="object"},an=function(t){return t!==!1},Qu=function(){return typeof window<"u"},tl=function(t){return ve(t)||Fe(t)},Bg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qe=Array.isArray,qh=/(?:-?\.?\d|\.)+/gi,zg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$c=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kg=/[+-]=-?[.\d]+/,Vg=/[^,'"\[\]\s]+/gi,Ow=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fe,Zn,$h,td,En={},ml={},Hg,Gg=function(t){return(ml=Ws(t,En))&&hn},ed=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ha=function(t,e){return!e&&console.warn(t)},Wg=function(t,e){return t&&(En[t]=e)&&ml&&(ml[t]=e)||En},Ga=function(){return 0},Fw={suppressEvents:!0,isStart:!0,kill:!1},cl={suppressEvents:!0,kill:!1},Bw={suppressEvents:!0},nd={},$i=[],Zh={},Xg,gn={},Zc={},tp=30,hl=[],id="",sd=function(t){var e=t[0],n,i;if(si(e)||ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=hl.length;i--&&!hl[i].targetTest(e););n=hl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new m_(t[i],n)))||t.splice(i,1);return t},Fs=function(t){return t._gsap||sd(Nn(t))[0]._gsap},Yg=function(t,e,n){return(n=t[e])&&ve(n)?t[e]():ju(n)&&t.getAttribute&&t.getAttribute(e)||n},on=function(t,e){return(t=t.split(",")).forEach(e)||t},Ae=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},Cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},zw=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},gl=function(){var t=$i.length,e=$i.slice(0),n,i;for(Zh={},$i.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qg=function(t,e,n,i){$i.length&&!Ye&&gl(),t.render(e,n,i||Ye&&e<0&&(t._initted||t._startAt)),$i.length&&!Ye&&gl()},$g=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Vg).length<2?e:Fe(t)?t.trim():t},Zg=function(t){return t},On=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},kw=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ws=function(t,e){for(var n in e)t[n]=e[n];return t},ep=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=si(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},_l=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ga=function(t){var e=t.parent||fe,n=t.keyframes?kw(qe(t.keyframes)):On;if(an(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Vw=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Jg=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ec=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ki=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Bs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Hw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jh=function(t,e,n,i){return t._startAt&&(Ye?t._startAt.revert(cl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Gw=function r(t){return!t||t._ts&&r(t.parent)},np=function(t){return t._repeat?Fr(t._tTime,t=t.duration()+t._rDelay)*t:0},Fr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},xl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},nc=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||oe)||0))},ic=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),nc(t),n._dirty||Bs(n,t)),t},Kg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=xl(t.rawTime(),e),(!e._dur||ao(0,e.totalDuration(),n)-e._tTime>oe)&&e.render(n,!0)),Bs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-oe}},Jn=function(t,e,n,i){return e.parent&&Ki(e),e._start=Oe((Ci(n)?n:n||t!==fe?Ln(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Jg(t,e,"_first","_last",t._sort?"_start":0),Kh(e)||(t._recent=e),i||Kg(t,e),t._ts<0&&ic(t,t._tTime),t},jg=function(t,e){return(En.ScrollTrigger||ed("scrollTrigger",e))&&En.ScrollTrigger.create(e,t)},Qg=function(t,e,n,i,s){if(ad(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xg!==vn.frame)return $i.push(t),t._lazy=[s,i],1},Ww=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Kh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Xw=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Ww(t)&&!(!t._initted&&Kh(t))||(t._ts<0||t._dp._ts<0)&&!Kh(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ao(0,t._tDur,e),h=Fr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Fr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ye||i||t._zTime===oe||!e&&t._zTime){if(!t._initted&&Qg(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?oe:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Jh(t,e,n,!0),t._onUpdate&&!n&&Mn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ki(t,1),!n&&!Ye&&(Mn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Yw=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Br=function(t,e,n,i){var s=t._repeat,a=Oe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Oe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ic(t,t._tTime=t._tDur*o),t.parent&&nc(t),n||Bs(t.parent,t),t},ip=function(t){return t instanceof Qe?Bs(t):Br(t,t._dur)},qw={_start:0,endTime:Ga,totalDuration:Ga},Ln=function r(t,e,n){var i=t.labels,s=t._recent||qw,a=t.duration()>=Un?s.endTime(!1):t._dur,o,l,c;return Fe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(qe(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},_a=function(t,e,n){var i=Ci(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;a.immediateRender=an(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Re(e[0],a,e[s+1])},is=function(t,e){return t||t===0?e(t):e},ao=function(t,e,n){return n<t?t:n>e?e:n},Ge=function(t,e){return!Fe(t)||!(e=Ow.exec(t))?"":e[1]},$w=function(t,e,n){return is(n,function(i){return ao(t,e,i)})},jh=[].slice,t_=function(t,e){return t&&si(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&si(t[0]))&&!t.nodeType&&t!==Zn},Zw=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Fe(i)&&!e||t_(i,1)?(s=n).push.apply(s,Nn(i)):n.push(i)})||n},Nn=function(t,e,n){return ue&&!e&&ue.selector?ue.selector(t):Fe(t)&&!n&&($h||!zr())?jh.call((e||td).querySelectorAll(t),0):qe(t)?Zw(t,n):t_(t)?jh.call(t,0):t?[t]:[]},Qh=function(t){return t=Nn(t)[0]||Ha("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Nn(e,n.querySelectorAll?n:n===t?Ha("Invalid scope")||td.createElement("div"):t)}},e_=function(t){return t.sort(function(){return .5-Math.random()})},n_=function(t){if(ve(t))return t;var e=si(t)?t:{each:t},n=zs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Fe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,v,x,y,T,w,E,C,b;if(!m){if(b=e.grid==="auto"?0:(e.grid||[1,Un])[1],!b){for(E=-Un;E<(E=_[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(m=a[g]=[],p=l?Math.min(b,g)*h-.5:i%b,v=b===Un?0:l?g*u/b-.5:i/b|0,E=0,C=Un,w=0;w<g;w++)x=w%b-p,y=v-(w/b|0),m[w]=T=c?Math.abs(c==="y"?y:x):Fg(x*x+y*y),T>E&&(E=T),T<C&&(C=T);i==="random"&&e_(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ge(e.amount||e.each)||0,n=n&&g<0?d_(n):n}return g=(m[d]-m.min)/m.max||0,Oe(m.b+(n?n(g):g)*m.v)+m.u}},tu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ci(n)?0:Ge(n))}},i_=function(t,e){var n=qe(t),i,s;return!n&&si(t)&&(i=n=t.radius||Un,t.values?(t=Nn(t.values),(s=!Ci(t[0]))&&(i*=i)):t=tu(t.increment)),is(e,n?ve(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Un,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Ci(a)?h:h+Ge(a)}:tu(t))},s_=function(t,e,n,i){return is(qe(t)?!e:n===!0?!!(n=0):!i,function(){return qe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Jw=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Kw=function(t,e){return function(n){return t(parseFloat(n))+(e||Ge(n))}},jw=function(t,e,n){return a_(t,e,0,1,n)},r_=function(t,e,n){return is(n,function(i){return t[~~e(i)]})},Qw=function r(t,e,n){var i=e-t;return qe(t)?r_(t,r(0,t.length),e):is(n,function(s){return(i+(s-t)%i)%i+t})},tA=function r(t,e,n){var i=e-t,s=i*2;return qe(t)?r_(t,r(0,t.length-1),e):is(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Wa=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?Vg:qh),n+=t.substr(e,i-e)+s_(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},a_=function(t,e,n,i,s){var a=e-t,o=i-n;return is(s,function(l){return n+((l-t)/a*o||0)})},eA=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=Fe(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(qe(t)&&!qe(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Ws(qe(t)?[]:{},t));if(!h){for(l in e)rd.call(o,t,l,"get",e[l]);s=function(_){return cd(_,o)||(a?t.p:t)}}}return is(n,s)},sp=function(t,e,n){var i=t.labels,s=Un,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Mn=function(t,e,n){var i=t.vars,s=i[e],a=ue,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&$i.length&&gl(),o&&(ue=o),h=l?s.apply(c,l):s.call(c),ue=a,h},ca=function(t){return Ki(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ye),t.progress()<1&&Mn(t,"onInterrupt"),t},Er,o_=[],l_=function(t){if(t)if(t=!t.name&&t.default||t,Qu()||t.headless){var e=t.name,n=ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ga,render:cd,add:rd,kill:_A,modifier:gA,rawVars:0},a={targetTest:0,get:0,getSetter:ld,aliases:{},register:0};if(zr(),t!==i){if(gn[e])return;On(i,On(_l(t,s),a)),Ws(i.prototype,Ws(s,_l(t,a))),gn[i.prop=e]=i,t.targetTest&&(hl.push(i),nd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wg(e,i),t.register&&t.register(hn,i,ln)}else o_.push(t)},re=255,ha={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},Jc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*re+.5|0},c_=function(t,e,n){var i=t?Ci(t)?[t>>16,t>>8&re,t&re]:0:ha.black,s,a,o,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ha[t])i=ha[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&re,i&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(qh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Jc(l+1/3,s,a),i[1]=Jc(l,s,a),i[2]=Jc(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(zg),n&&i.length<4&&(i[3]=1),i}else i=t.match(qh)||ha.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/re,a=i[1]/re,o=i[2]/re,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},h_=function(t){var e=[],n=[],i=-1;return t.split(Zi).forEach(function(s){var a=s.match(Ar)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},rp=function(t,e,n){var i="",s=(t+i).match(Zi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=c_(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=h_(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Zi,"1").split(Ar),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Zi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},Zi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ha)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),nA=/hsl[a]?\(/,u_=function(t){var e=t.join(" "),n;if(Zi.lastIndex=0,Zi.test(e))return n=nA.test(e),t[1]=rp(t[1],n),t[0]=rp(t[0],n,h_(t[1])),!0},Xa,vn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(m){var p=r()-i,v=m===!0,x,y,T,w;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,x=T-a,(x>0||v)&&(w=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,a+=x+(x>=s?4:s-x),y=1),v||(l=c(g)),y)for(f=0;f<o.length;f++)o[f](T,d,w,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hg&&(!$h&&Qu()&&(Zn=$h=window,td=Zn.document||{},En.gsap=hn,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(hn.version),Gg(ml||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),o_.forEach(l_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Xa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Xa=0,c=Ga},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,v){var x=p?function(y,T,w,E){m(y,T,w,E),u.remove(x)}:m;return u.remove(m),o[v?"unshift":"push"](x),zr(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),zr=function(){return!Xa&&vn.wake()},$t={},iA=/^[\d.\-M][\d.\-,\s]/,sA=/["']/g,rA=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(sA,"").trim():+c,i=l.substr(o+1).trim();return e},aA=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},oA=function(t){var e=(t+"").split("("),n=$t[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[rA(e[1])]:aA(t).split(",").map($g)):$t._CE&&iA.test(t)?$t._CE("",t):n},d_=function(t){return function(e){return 1-t(1-e)}},f_=function r(t,e){for(var n=t._first,i;n;)n instanceof Qe?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},zs=function(t,e){return t&&(ve(t)?t:$t[t]||oA(t))||e},Js=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return on(t,function(o){$t[o]=En[o]=s,$t[a=o.toLowerCase()]=n;for(var l in s)$t[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$t[o+"."+l]=s[l]}),s},p_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Kc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Yh*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Nw((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:p_(o);return s=Yh/s,l.config=function(c,h){return r(t,c,h)},l},jc=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:p_(n);return i.config=function(s){return r(t,s)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Js(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});$t.Linear.easeNone=$t.none=$t.Linear.easeIn;Js("Elastic",Kc("in"),Kc("out"),Kc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Js("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Js("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Js("Circ",function(r){return-(Fg(1-r*r)-1)});Js("Sine",function(r){return r===1?1:-Uw(r*Iw)+1});Js("Back",jc("in"),jc("out"),jc());$t.SteppedEase=$t.steps=En.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-oe;return function(o){return((i*ao(0,a,o)|0)+s)*n}}};Or.ease=$t["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return id+=r+","+r+"Params,"});var m_=function(t,e){this.id=Dw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yg,this.set=e?e.getSetter:ld},Ya=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Br(this,+e.duration,1,1),this.data=e.data,ue&&(this._ctx=ue,ue.data.push(this)),Xa||vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(zr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ic(this,n),!s._dp||s.parent||Kg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===oe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+np(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+np(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-oe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?xl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-oe?0:this._rts,this.totalTime(ao(-Math.abs(this._delay),this._tDur,s),i!==!1),nc(this),Hw(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==oe&&(this._tTime-=oe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Jn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(an(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Bw);var i=Ye;return Ye=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ye=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ip(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ip(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ln(this,n),an(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,an(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-oe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-oe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-oe)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=ve(n)?n:Zg,o=function(){var c=i.then;i.then=null,ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){ca(this)},r}();On(Ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-oe,_prom:0,_ps:!1,_rts:1});var Qe=function(r){Og(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=an(n.sortChildren),fe&&Jn(n.parent||fe,gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jg(gi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return _a(0,arguments,this),this},e.from=function(i,s,a){return _a(1,arguments,this),this},e.fromTo=function(i,s,a,o){return _a(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Re(i,s,Ln(this,a),1),this},e.call=function(i,s,a){return Jn(this,Re.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Re(i,a,Ln(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,ga(a).immediateRender=an(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,ga(o).immediateRender=an(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,v,x,y,T,w,E;if(this!==fe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,y=this._start,x=this._ts,p=!x,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Oe(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),T=Fr(this._tTime,m),!o&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(d=c-d,E=1),g!==T&&!this._lock){var C=w&&T&1,b=C===(w&&g&1);if(g<T&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Oe(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;f_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Yw(this,Oe(o),Oe(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!g&&(Mn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-oe);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,a||Ye&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=S?-oe:oe);break}}f=_}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-oe)._zTime=d>=o?1:-1,this._ts))return this._start=y,nc(this),this.render(i,s,a);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ki(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Mn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Ci(s)||(s=Ln(this,s,i)),!(i instanceof Ya)){if(qe(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Fe(i))return this.addLabel(i,s);if(ve(i))i=Re.delayedCall(0,i);else return this}return this!==i?Jn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Un);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Re?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Fe(i)?this.removeLabel(i):ve(i)?this.killTweensOf(i):(ec(this,i),i===this._recent&&(this._recent=this._last),Bs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ln(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Re.delayedCall(0,s||Ga,a);return o.data="isPause",this._hasPause=1,Jn(this,o,Ln(this,i))},e.removePause=function(i){var s=this._first;for(i=Ln(this,i);s;)s._start===i&&s.data==="isPause"&&Ki(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Wi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Nn(i),l=this._first,c=Ci(s),h;l;)l instanceof Re?zw(l._targets,o)&&(c?(!Wi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Ln(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Re.to(a,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||oe,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Br(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,On({startAt:{time:Ln(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),sp(this,Ln(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),sp(this,Ln(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+oe)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Bs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Bs(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Un,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Jn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Br(a,a===fe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(fe._ts&&(qg(fe,xl(i,fe)),Xg=vn.frame),vn.frame>=tp){tp+=Sn.autoSleep||120;var s=fe._first;if((!s||!s._ts)&&Sn.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},t}(Ya);On(Qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var lA=function(t,e,n,i,s,a,o){var l=new ln(this._pt,t,e,0,1,M_,null,s),c=0,h=0,u,d,f,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Wa(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),d=n.match($c)||[];u=$c.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Cr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=$c.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(kg.test(i)||p)&&(l.e=0),this._pt=l,l},rd=function(t,e,n,i,s,a,o,l,c,h){ve(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:ve(u)?c?t[e.indexOf("set")||!ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=ve(u)?c?fA:v_:od,_;if(Fe(i)&&(~i.indexOf("random(")&&(i=Wa(i)),i.charAt(1)==="="&&(_=Cr(d,i)+(Ge(d)||0),(_||_===0)&&(i=_))),!h||d!==i||eu)return!isNaN(d*i)&&i!==""?(_=new ln(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?mA:y_,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&ed(e,i),lA.call(this,t,e,d,i,f,l||Sn.stringFilter,c))},cA=function(t,e,n,i,s){if(ve(t)&&(t=xa(t,s,e,n,i)),!si(t)||t.style&&t.nodeType||qe(t)||Bg(t))return Fe(t)?xa(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=xa(t[o],s,e,n,i);return a},g_=function(t,e,n,i,s,a){var o,l,c,h;if(gn[t]&&(o=new gn[t]).init(s,o.rawVars?e[t]:cA(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new ln(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Er))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Wi,eu,ad=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!Ku,y=t.timeline,T,w,E,C,b,S,D,U,I,F,G,X,tt;if(y&&(!d||!s)&&(s="none"),t._ease=zs(s,Or.ease),t._yEase=u?d_(zs(u===!0?s:u,Or.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(U=m[0]?Fs(m[0]).harness:0,X=U&&i[U.prop],T=_l(i,nd),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?cl:Fw),g._lazy=0),a){if(Ki(t._startAt=Re.set(m,On({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye||!o&&!f)&&t._startAt.revert(cl),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),E=On({overwrite:!1,data:"isFromStart",lazy:o&&!g&&an(l),immediateRender:o,stagger:0,parent:p},T),X&&(E[U.prop]=X),Ki(t._startAt=Re.set(m,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye?t._startAt.revert(cl):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,oe,oe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&an(l)||l&&!_,w=0;w<m.length;w++){if(b=m[w],D=b._gsap||sd(m)[w]._gsap,t._ptLookup[w]=F={},Zh[D.id]&&$i.length&&gl(),G=v===m?w:v.indexOf(b),U&&(I=new U).init(b,X||T,t,G,v)!==!1&&(t._pt=C=new ln(t._pt,b,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(z){F[z]=C}),I.priority&&(S=1)),!U||X)for(E in T)gn[E]&&(I=g_(E,T,t,G,b,v))?I.priority&&(S=1):F[E]=C=rd.call(t,b,E,"get",T[E],G,v,0,i.stringFilter);t._op&&t._op[w]&&t.kill(b,t._op[w]),x&&t._pt&&(Wi=t,fe.killTweensOf(b,F,t.globalTime(e)),tt=!t.parent,Wi=0),t._pt&&l&&(Zh[D.id]=1)}S&&b_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,d&&e<=0&&y.render(Un,!0,!0)},hA=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return eu=1,t.vars[e]="+=0",ad(t,o),eu=0,l?Ha(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Ae(n)+Ge(u.e)),u.b&&(u.b=h.s+Ge(u.b))},uA=function(t,e){var n=t[0]?Fs(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ws({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},dA=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(qe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},xa=function(t,e,n,i,s){return ve(t)?t.call(e,n,i,s):Fe(t)&&~t.indexOf("random(")?Wa(t):t},__=id+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",x_={};on(__+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return x_[r]=1});var Re=function(r){Og(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ga(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||fe,x=(qe(n)||Bg(n)?Ci(n[0]):"length"in i)?[n]:Nn(n),y,T,w,E,C,b,S,D;if(o._targets=x.length?sd(x):Ha("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||tl(c)||tl(h)){if(i=o.vars,y=o.timeline=new Qe({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=gi(o),y._start=0,d||tl(c)||tl(h)){if(E=x.length,S=d&&n_(d),si(d))for(C in d)~__.indexOf(C)&&(D||(D={}),D[C]=d[C]);for(T=0;T<E;T++)w=_l(i,x_),w.stagger=0,p&&(w.yoyoEase=p),D&&Ws(w,D),b=x[T],w.duration=+xa(c,gi(o),T,b,x),w.delay=(+xa(h,gi(o),T,b,x)||0)-o._delay,!d&&E===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),y.to(b,w,S?S(T,b,x):0),y._ease=$t.none;y.duration()?c=h=0:o.timeline=0}else if(_){ga(On(y.vars.defaults,{ease:"none"})),y._ease=zs(_.ease||i.ease||"none");var U=0,I,F,G;if(qe(_))_.forEach(function(X){return y.to(x,X,">")}),y.duration();else{w={};for(C in _)C==="ease"||C==="easeEach"||dA(C,_[C],w,_.easeEach);for(C in w)for(I=w[C].sort(function(X,tt){return X.t-tt.t}),U=0,T=0;T<I.length;T++)F=I[T],G={ease:F.e,duration:(F.t-(T?I[T-1].t:0))/100*c},G[C]=F.v,y.to(x,G,U),U+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!Ku&&(Wi=gi(o),fe.killTweensOf(x),Wi=0),Jn(v,gi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Oe(v._time)&&an(u)&&Gw(gi(o))&&v.data!=="nested")&&(o._tTime=-oe,o.render(Math.max(0,-h)||0)),m&&jg(gi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-oe&&!h?l:i<oe?0:i,d,f,_,g,m,p,v,x,y;if(!c)Xw(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(d=Oe(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===Oe(u/g)&&(d=c,_--),d>c&&(d=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,d=c-d),m=Fr(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(x&&this._yEase&&f_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(Oe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Qg(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!o&&!s&&!_&&(Mn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Jh(this,i,s,a),Mn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Jh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ki(this,1),!s&&!(h&&!o)&&(u||o||p)&&(Mn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Xa||vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ad(this,c),h=this._ease(c/this._dur),hA(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(ic(this,0),this.parent||Jg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ca(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wi&&Wi.vars.overwrite!==!0)._first||ca(this),this.parent&&a!==this.timeline.totalDuration()&&Br(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Nn(i):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&Vw(o,l))return s==="all"&&(this._pt=0),ca(this);for(u=this._op=this._op||[],s!=="all"&&(Fe(s)&&(g={},on(s,function(v){return g[v]=1}),s=g),s=uA(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ec(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ca(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return _a(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return _a(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return fe.killTweensOf(i,s,a)},t}(Ya);On(Re.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(r){Re[r]=function(){var t=new Qe,e=jh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var od=function(t,e,n){return t[e]=n},v_=function(t,e,n){return t[e](n)},fA=function(t,e,n,i){return t[e](i.fp,n)},pA=function(t,e,n){return t.setAttribute(e,n)},ld=function(t,e){return ve(t[e])?v_:ju(t[e])&&t.setAttribute?pA:od},y_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},mA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},M_=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},cd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},gA=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},_A=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ec(this,e,"_pt"):e.dep||(n=1),e=i;return!n},xA=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},b_=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},ln=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||y_,this.d=l||this,this.set=c||od,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xA,this.m=n,this.mt=s,this.tween=i},r}();on(id+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return nd[r]=1});En.TweenMax=En.TweenLite=Re;En.TimelineLite=En.TimelineMax=Qe;fe=new Qe({sortChildren:!1,defaults:Or,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=u_;var ks=[],ul={},vA=[],ap=0,yA=0,Qc=function(t){return(ul[t]||vA).map(function(e){return e()})},nu=function(){var t=Date.now(),e=[];t-ap>2&&(Qc("matchMediaInit"),ks.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Zn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Qc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ap=t,Qc("matchMedia"))},S_=function(){function r(e,n){this.selector=n&&Qh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yA++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ve(n)&&(s=i,i=n,n=ve);var a=this,o=function(){var c=ue,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Qh(s)),ue=a,u=i.apply(a,arguments),ve(u)&&a._r.push(u),ue=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===ve?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ue;ue=null,n(this),ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Re&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Re)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ks.length;a--;)ks[a].id===this.id&&ks.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),MA=function(){function r(e){this.contexts=[],this.scope=e,ue&&ue.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){si(n)||(n={matches:n});var a=new S_(0,s||this.scope),o=a.conditions={},l,c,h;ue&&!a.selector&&(a.selector=ue.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Zn.matchMedia(n[c]),l&&(ks.indexOf(a)<0&&ks.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(nu):l.addEventListener("change",nu)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),vl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return l_(i)})},timeline:function(t){return new Qe(t)},getTweensOf:function(t,e){return fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Fe(t)&&(t=Nn(t)[0]);var s=Fs(t||{}).get,a=n?Zg:$g;return n==="native"&&(n=""),t&&(e?a((gn[e]&&gn[e].get||s)(t,e,n,i)):function(o,l,c){return a((gn[o]&&gn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Nn(t),t.length>1){var i=t.map(function(h){return hn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=gn[e],o=Fs(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Er._pt=0,u.init(t,n?h+n:h,Er,0,[t]),u.render(1,u),Er._pt&&cd(1,Er)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=hn.to(t,Ws((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zs(t.ease,Or.ease)),ep(Or,t||{})},config:function(t){return ep(Sn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gn[o]&&!En[o]&&Ha(e+" effect requires "+o+" plugin.")}),Zc[e]=function(o,l,c){return n(Nn(o),On(l||{},s),c)},a&&(Qe.prototype[e]=function(o,l,c){return this.add(Zc[e](o,si(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){$t[t]=zs(e)},parseEase:function(t,e){return arguments.length?zs(t,e):$t},getById:function(t){return fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Qe(t),i,s;for(n.smoothChildTiming=an(t.smoothChildTiming),fe.remove(n),n._dp=0,n._time=n._tTime=fe._time,i=fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Re&&i.vars.onComplete===i._targets[0]))&&Jn(n,i,i._start-i._delay),i=s;return Jn(fe,n,0),n},context:function(t,e){return t?new S_(t,e):ue},matchMedia:function(t){return new MA(t)},matchMediaRefresh:function(){return ks.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||nu()},addEventListener:function(t,e){var n=ul[t]||(ul[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ul[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Qw,wrapYoyo:tA,distribute:n_,random:s_,snap:i_,normalize:jw,getUnit:Ge,clamp:$w,splitColor:c_,toArray:Nn,selector:Qh,mapRange:a_,pipe:Jw,unitize:Kw,interpolate:eA,shuffle:e_},install:Gg,effects:Zc,ticker:vn,updateRoot:Qe.updateRoot,plugins:gn,globalTimeline:fe,core:{PropTween:ln,globals:Wg,Tween:Re,Timeline:Qe,Animation:Ya,getCache:Fs,_removeLinkedListItem:ec,reverting:function(){return Ye},context:function(t){return t&&ue&&(ue.data.push(t),t._ctx=ue),ue},suppressOverwrites:function(t){return Ku=t}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return vl[r]=Re[r]});vn.add(Qe.updateRoot);Er=vl.to({},{duration:0});var bA=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},SA=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=bA(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},th=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Fe(s)&&(l={},on(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}SA(o,s)}}}},hn=vl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},th("roundProps",tu),th("modifiers"),th("snap",i_))||vl;Re.version=Qe.version=hn.version="3.12.5";Hg=1;Qu()&&zr();$t.Power0;$t.Power1;$t.Power2;$t.Power3;$t.Power4;$t.Linear;$t.Quad;$t.Cubic;$t.Quart;$t.Quint;$t.Strong;$t.Elastic;$t.Back;$t.SteppedEase;$t.Bounce;$t.Sine;$t.Expo;$t.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var op,Xi,Rr,hd,Is,lp,ud,wA=function(){return typeof window<"u"},Ri={},As=180/Math.PI,Pr=Math.PI/180,yr=Math.atan2,cp=1e8,dd=/([A-Z])/g,AA=/(left|right|width|margin|padding|x)/i,EA=/[\s,\(]\S/,Qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},iu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},TA=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},CA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},RA=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},w_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},A_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},PA=function(t,e,n){return t.style[e]=n},LA=function(t,e,n){return t.style.setProperty(e,n)},IA=function(t,e,n){return t._gsap[e]=n},DA=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},UA=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},NA=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},me="transform",cn=me+"Origin",OA=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ri&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Qn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=xi(i,o)}):this.tfm[t]=a.x?a[t]:xi(i,t),t===cn&&(this.tfm.zOrigin=a.zOrigin);else return Qn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(me)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(cn,e,"")),t=me}(s||e)&&this.props.push(t,e,s[t])},E_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},FA=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(dd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ud(),(!s||!s.isStart)&&!n[me]&&(E_(n),i.zOrigin&&n[cn]&&(n[cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},T_=function(t,e){var n={target:t,props:[],revert:FA,save:OA};return t._gsap||hn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},C_,su=function(t,e){var n=Xi.createElementNS?Xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xi.createElement(t);return n&&n.style?n:Xi.createElement(t)},ei=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(dd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,kr(e)||e,1)||""},hp="O,Moz,ms,Ms,Webkit".split(","),kr=function(t,e,n){var i=e||Is,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(hp[a]+t in s););return a<0?null:(a===3?"ms":a>=0?hp[a]:"")+t},ru=function(){wA()&&window.document&&(op=window,Xi=op.document,Rr=Xi.documentElement,Is=su("div")||{style:{}},su("div"),me=kr(me),cn=me+"Origin",Is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",C_=!!kr("perspective"),ud=hn.core.reverting,hd=1)},eh=function r(t){var e=su("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Rr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Rr.removeChild(e),this.style.cssText=s,a},up=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},R_=function(t){var e;try{e=t.getBBox()}catch{e=eh.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===eh||(e=eh.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+up(t,["x","cx","x1"])||0,y:+up(t,["y","cy","y1"])||0,width:0,height:0}:e},P_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&R_(t))},Xs=function(t,e){if(e){var n=t.style,i;e in Ri&&e!==cn&&(e=me),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(dd,"-$1").toLowerCase())):n.removeAttribute(e)}},Yi=function(t,e,n,i,s,a){var o=new ln(t._pt,e,n,0,1,a?A_:w_);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},dp={deg:1,rad:1,turn:1},BA={grid:1,flex:1},ji=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Is.style,l=AA.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||dp[i]||dp[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&P_(t),(f||a==="%")&&(Ri[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Ae(f?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Xi||!g.appendChild)&&(g=Xi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===vn.time&&!m.uncache)return Ae(s/m.width*u);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+i,_=t[h],v?t.style[e]=v:Xs(t,e)}else(f||a==="%")&&!BA[ei(g,"display")]&&(o.position=ei(t,"position")),g===t&&(o.position="static"),g.appendChild(Is),_=Is[h],g.removeChild(Is),o.position="absolute";return l&&f&&(m=Fs(g),m.time=vn.time,m.width=g[h]),Ae(d?_*s/u:_&&s?u/_*s:0)},xi=function(t,e,n,i){var s;return hd||ru(),e in Qn&&e!=="transform"&&(e=Qn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ri[e]&&e!=="transform"?(s=$a(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ml(ei(t,cn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=yl[e]&&yl[e](t,e,n)||ei(t,e)||Yg(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ji(t,e,s,n)+n:s},zA=function(t,e,n,i){if(!n||n==="none"){var s=kr(e,t,1),a=s&&ei(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=ei(t,"borderTopColor"))}var o=new ln(this._pt,t.style,e,0,1,M_),l=0,c=0,h,u,d,f,_,g,m,p,v,x,y,T;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=ei(t,e)||i,g?t.style[e]=g:Xs(t,e)),h=[n,i],u_(h),n=h[0],i=h[1],d=n.match(Ar)||[],T=i.match(Ar)||[],T.length){for(;u=Ar.exec(i);)m=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=Cr(f,m)+y),p=parseFloat(m),x=m.substr((p+"").length),l=Ar.lastIndex-x.length,x||(x=x||Sn.units[e]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(f=ji(t,e,g,x)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?A_:w_;return kg.test(i)&&(o.e=0),this._pt=o,o},fp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kA=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=fp[n]||n,e[1]=fp[i]||i,e.join(" ")},VA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ri[o]&&(l=1,o=o==="transformOrigin"?cn:me),Xs(n,o);l&&(Xs(n,me),a&&(a.svg&&n.removeAttribute("transform"),$a(n,1),a.uncache=1,E_(i)))}},yl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new ln(t._pt,e,n,0,0,VA);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},qa=[1,0,0,1,0,0],L_={},I_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pp=function(t){var e=ei(t,me);return I_(e)?qa:e.substr(7).match(zg).map(Ae)},fd=function(t,e){var n=t._gsap||Fs(t),i=t.style,s=pp(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qa:s):(s===qa&&!t.offsetParent&&t!==Rr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Rr.appendChild(t)),s=pp(t),l?i.display=l:Xs(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Rr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},au=function(t,e,n,i,s,a){var o=t._gsap,l=s||fd(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],x=e.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,E,C,b;n?l!==qa&&(E=f*m-_*g)&&(C=y*(m/E)+T*(-g/E)+(g*v-m*p)/E,b=y*(-_/E)+T*(f/E)-(f*v-_*p)/E,y=C,T=b):(w=R_(t),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&o.smooth?(p=y-c,v=T-h,o.xOffset=u+(p*f+v*g)-p,o.yOffset=d+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[cn]="0px 0px",a&&(Yi(a,o,"xOrigin",c,y),Yi(a,o,"yOrigin",h,T),Yi(a,o,"xOffset",u,o.xOffset),Yi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},$a=function(t,e){var n=t._gsap||new m_(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=ei(t,cn)||"0",h,u,d,f,_,g,m,p,v,x,y,T,w,E,C,b,S,D,U,I,F,G,X,tt,z,it,nt,dt,Et,Xt,Y,st;return h=u=d=g=m=p=v=x=y=0,f=_=1,n.svg=!!(t.getCTM&&P_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[me]!=="none"?l[me]:"")),i.scale=i.rotate=i.translate="none"),E=fd(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",tt=""):tt=!e&&t.getAttribute("data-svg-origin"),au(t,tt||c,!!tt||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,w=n.yOrigin||0,E!==qa&&(D=E[0],U=E[1],I=E[2],F=E[3],h=G=E[4],u=X=E[5],E.length===6?(f=Math.sqrt(D*D+U*U),_=Math.sqrt(F*F+I*I),g=D||U?yr(U,D)*As:0,v=I||F?yr(I,F)*As+g:0,v&&(_*=Math.abs(Math.cos(v*Pr))),n.svg&&(h-=T-(T*D+w*I),u-=w-(T*U+w*F))):(st=E[6],Xt=E[7],nt=E[8],dt=E[9],Et=E[10],Y=E[11],h=E[12],u=E[13],d=E[14],C=yr(st,Et),m=C*As,C&&(b=Math.cos(-C),S=Math.sin(-C),tt=G*b+nt*S,z=X*b+dt*S,it=st*b+Et*S,nt=G*-S+nt*b,dt=X*-S+dt*b,Et=st*-S+Et*b,Y=Xt*-S+Y*b,G=tt,X=z,st=it),C=yr(-I,Et),p=C*As,C&&(b=Math.cos(-C),S=Math.sin(-C),tt=D*b-nt*S,z=U*b-dt*S,it=I*b-Et*S,Y=F*S+Y*b,D=tt,U=z,I=it),C=yr(U,D),g=C*As,C&&(b=Math.cos(C),S=Math.sin(C),tt=D*b+U*S,z=G*b+X*S,U=U*b-D*S,X=X*b-G*S,D=tt,G=z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ae(Math.sqrt(D*D+U*U+I*I)),_=Ae(Math.sqrt(X*X+st*st)),C=yr(G,X),v=Math.abs(C)>2e-4?C*As:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(tt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!I_(ei(t,me)),tt&&t.setAttribute("transform",tt))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ae(f),n.scaleY=Ae(_),n.rotation=Ae(g)+o,n.rotationX=Ae(m)+o,n.rotationY=Ae(p)+o,n.skewX=v+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[cn]=Ml(c)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?GA:C_?D_:HA,n.uncache=0,n},Ml=function(t){return(t=t.split(" "))[0]+" "+t[1]},nh=function(t,e,n){var i=Ge(e);return Ae(parseFloat(e)+parseFloat(ji(t,"x",n+"px",i)))+i},HA=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,D_(t,e)},vs="0deg",ra="0px",ys=") ",D_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,y="",T=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==vs||h!==vs)){var w=parseFloat(h)*Pr,E=Math.sin(w),C=Math.cos(w),b;w=parseFloat(u)*Pr,b=Math.cos(w),a=nh(v,a,E*b*-x),o=nh(v,o,-Math.sin(w)*-x),l=nh(v,l,C*b*-x+x)}m!==ra&&(y+="perspective("+m+ys),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||a!==ra||o!==ra||l!==ra)&&(y+=l!==ra||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ys),c!==vs&&(y+="rotate("+c+ys),h!==vs&&(y+="rotateY("+h+ys),u!==vs&&(y+="rotateX("+u+ys),(d!==vs||f!==vs)&&(y+="skew("+d+", "+f+ys),(_!==1||g!==1)&&(y+="scale("+_+", "+g+ys),v.style[me]=y||"translate(0, 0)"},GA=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(a),y=parseFloat(o),T,w,E,C,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Pr,c*=Pr,T=Math.cos(l)*u,w=Math.sin(l)*u,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Pr,b=Math.tan(c-h),b=Math.sqrt(1+b*b),E*=b,C*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),T*=b,w*=b)),T=Ae(T),w=Ae(w),E=Ae(E),C=Ae(C)):(T=u,C=d,w=E=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=ji(f,"x",a,"px"),y=ji(f,"y",o,"px")),(_||g||m||p)&&(x=Ae(x+_-(_*T+g*E)+m),y=Ae(y+g-(_*w+g*C)+p)),(i||s)&&(b=f.getBBox(),x=Ae(x+i/100*b.width),y=Ae(y+s/100*b.height)),b="matrix("+T+","+w+","+E+","+C+","+x+","+y+")",f.setAttribute("transform",b),v&&(f.style[me]=b)},WA=function(t,e,n,i,s){var a=360,o=Fe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?As:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*cp)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*cp)%a-~~(c/a)*a)),t._pt=d=new ln(t._pt,e,n,i,c,TA),d.e=h,d.u="deg",t._props.push(n),d},mp=function(t,e){for(var n in e)t[n]=e[n];return t},XA=function(t,e,n){var i=mp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[me]=e,o=$a(n,1),Xs(n,me),n.setAttribute("transform",c)):(c=getComputedStyle(n)[me],a[me]=e,o=$a(n,1),a[me]=c);for(l in Ri)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Ge(c),_=Ge(h),u=f!==_?ji(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new ln(t._pt,o,l,u,d-u,iu),t._pt.u=_||0,t._props.push(l));mp(o,i)};on("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});yl[t>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return xi(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var U_={name:"css",register:ru,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,v,x,y,T,w,E,C;hd||ru(),this.styles=this.styles||T_(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(gn[g]&&g_(g,e,n,i,t,s)))){if(f=typeof h,_=yl[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Wa(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Zi.lastIndex=0,Zi.test(c)||(m=Ge(c),p=Ge(h)),p?m!==p&&(c=ji(t,g,c,p)+p):m&&(h+=m),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Fe(c)&&~c.indexOf("random(")&&(c=Wa(c)),Ge(c+"")||c==="auto"||(c+=Sn.units[g]||Ge(xi(t,g))||""),(c+"").charAt(1)==="="&&(c=xi(t,g))):c=xi(t,g),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in Qn&&(g==="autoAlpha"&&(d===1&&xi(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),Yi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Qn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Ri,x){if(this.styles.save(g),y||(T=t._gsap,T.renderTransform&&!e.parseTransform||$a(t,e.parseTransform),w=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new ln(this._pt,o,me,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new ln(this._pt,T,"scaleY",T.scaleY,(v?Cr(T.scaleY,v+u):u)-T.scaleY||0,iu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(cn,0,o[cn]),h=kA(h),T.svg?au(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Yi(this,T,"zOrigin",T.zOrigin,p),Yi(this,o,g,Ml(c),Ml(h)));continue}else if(g==="svgOrigin"){au(t,h,1,w,0,this);continue}else if(g in L_){WA(this,T,g,d,v?Cr(d,v+h):h);continue}else if(g==="smoothOrigin"){Yi(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){XA(this,h,t);continue}}else g in o||(g=kr(g)||g);if(x||(u||u===0)&&(d||d===0)&&!EA.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ge(h)||(g in Sn.units?Sn.units[g]:m),m!==p&&(d=ji(t,g,c,p)),this._pt=new ln(this._pt,x?T:o,g,d,(v?Cr(d,v+u):u)-d,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?RA:iu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=CA);else if(g in o)zA.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,s);else if(g!=="parseTransform"){ed(g,h);continue}x||(g in o?C.push(g,0,o[g]):C.push(g,1,c||t[g])),a.push(g)}}E&&b_(this)},render:function(t,e){if(e.tween._time||!ud())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xi,aliases:Qn,getSetter:function(t,e,n){var i=Qn[e];return i&&i.indexOf(",")<0&&(e=i),e in Ri&&e!==cn&&(t._gsap.x||xi(t,"x"))?n&&lp===n?e==="scale"?DA:IA:(lp=n||{})&&(e==="scale"?UA:NA):t.style&&!ju(t.style[e])?PA:~e.indexOf("-")?LA:ld(t,e)},core:{_removeProperty:Xs,_getMatrix:fd}};hn.utils.checkPrefix=kr;hn.core.getStyleSaver=T_;(function(r,t,e,n){var i=on(r+","+t+","+e,function(s){Ri[s]=1});on(t,function(s){Sn.units[s]="deg",L_[s]=1}),Qn[i[13]]=r+","+t,on(n,function(s){var a=s.split(":");Qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Sn.units[r]="px"});hn.registerPlugin(U_);var bl=hn.registerPlugin(U_)||hn;bl.core.Tween;const gp={type:"change"},ih={type:"start"},_p={type:"end"},el=new Ys,xp=new _i,YA=Math.cos(70*fa.DEG2RAD);class ss extends ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",mt),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",mt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(gp),n.update(),s=i.NONE},this.update=function(){const M=new P,k=new We().setFromUnitVectors(t.up,new P(0,1,0)),J=k.clone().invert(),ht=new P,gt=new We,qt=new P,Gt=2*Math.PI;return function(De=null){const ie=n.object.position;M.copy(ie).sub(n.target),M.applyQuaternion(k),o.setFromVector3(M),n.autoRotate&&s===i.NONE&&U(S(De)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ee=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(Ee)&&isFinite(Te)&&(Ee<-Math.PI?Ee+=Gt:Ee>Math.PI&&(Ee-=Gt),Te<-Math.PI?Te+=Gt:Te>Math.PI&&(Te-=Gt),Ee<=Te?o.theta=Math.max(Ee,Math.min(Te,o.theta)):o.theta=o.theta>(Ee+Te)/2?Math.max(Ee,o.theta):Math.min(Te,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let un=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)o.radius=nt(o.radius);else{const Cn=o.radius;o.radius=nt(o.radius*c),un=Cn!=o.radius}if(M.setFromSpherical(o),M.applyQuaternion(J),ie.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&w){let Cn=null;if(n.object.isPerspectiveCamera){const Ii=M.length();Cn=nt(Ii*c);const Ks=Ii-Cn;n.object.position.addScaledVector(y,Ks),n.object.updateMatrixWorld(),un=!!Ks}else if(n.object.isOrthographicCamera){const Ii=new P(T.x,T.y,0);Ii.unproject(n.object);const Ks=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),un=Ks!==n.object.zoom;const rs=new P(T.x,T.y,0);rs.unproject(n.object),n.object.position.sub(rs).add(Ii),n.object.updateMatrixWorld(),Cn=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Cn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Cn).add(n.object.position):(el.origin.copy(n.object.position),el.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(el.direction))<YA?t.lookAt(n.target):(xp.setFromNormalAndCoplanarPoint(n.object.up,n.target),el.intersectPlane(xp,n.target))))}else if(n.object.isOrthographicCamera){const Cn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Cn!==n.object.zoom&&(n.object.updateProjectionMatrix(),un=!0)}return c=1,w=!1,un||ht.distanceToSquared(n.object.position)>a||8*(1-gt.dot(n.object.quaternion))>a||qt.distanceToSquared(n.target)>a?(n.dispatchEvent(gp),ht.copy(n.object.position),gt.copy(n.object.quaternion),qt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",vt),n.domElement.removeEventListener("pointerdown",B),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",et),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",Z),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",mt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Xh,l=new Xh;let c=1;const h=new P,u=new $,d=new $,f=new $,_=new $,g=new $,m=new $,p=new $,v=new $,x=new $,y=new P,T=new $;let w=!1;const E=[],C={};let b=!1;function S(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function D(M){const k=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*k)}function U(M){l.theta-=M}function I(M){l.phi-=M}const F=function(){const M=new P;return function(J,ht){M.setFromMatrixColumn(ht,0),M.multiplyScalar(-J),h.add(M)}}(),G=function(){const M=new P;return function(J,ht){n.screenSpacePanning===!0?M.setFromMatrixColumn(ht,1):(M.setFromMatrixColumn(ht,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(J),h.add(M)}}(),X=function(){const M=new P;return function(J,ht){const gt=n.domElement;if(n.object.isPerspectiveCamera){const qt=n.object.position;M.copy(qt).sub(n.target);let Gt=M.length();Gt*=Math.tan(n.object.fov/2*Math.PI/180),F(2*J*Gt/gt.clientHeight,n.object.matrix),G(2*ht*Gt/gt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(J*(n.object.right-n.object.left)/n.object.zoom/gt.clientWidth,n.object.matrix),G(ht*(n.object.top-n.object.bottom)/n.object.zoom/gt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function tt(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function it(M,k){if(!n.zoomToCursor)return;w=!0;const J=n.domElement.getBoundingClientRect(),ht=M-J.left,gt=k-J.top,qt=J.width,Gt=J.height;T.x=ht/qt*2-1,T.y=-(gt/Gt)*2+1,y.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function dt(M){u.set(M.clientX,M.clientY)}function Et(M){it(M.clientX,M.clientX),p.set(M.clientX,M.clientY)}function Xt(M){_.set(M.clientX,M.clientY)}function Y(M){d.set(M.clientX,M.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const k=n.domElement;U(2*Math.PI*f.x/k.clientHeight),I(2*Math.PI*f.y/k.clientHeight),u.copy(d),n.update()}function st(M){v.set(M.clientX,M.clientY),x.subVectors(v,p),x.y>0?tt(D(x.y)):x.y<0&&z(D(x.y)),p.copy(v),n.update()}function _t(M){g.set(M.clientX,M.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),X(m.x,m.y),_.copy(g),n.update()}function ct(M){it(M.clientX,M.clientY),M.deltaY<0?z(D(M.deltaY)):M.deltaY>0&&tt(D(M.deltaY)),n.update()}function Rt(M){let k=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),k=!0;break}k&&(M.preventDefault(),n.update())}function Dt(M){if(E.length===1)u.set(M.pageX,M.pageY);else{const k=Qt(M),J=.5*(M.pageX+k.x),ht=.5*(M.pageY+k.y);u.set(J,ht)}}function Lt(M){if(E.length===1)_.set(M.pageX,M.pageY);else{const k=Qt(M),J=.5*(M.pageX+k.x),ht=.5*(M.pageY+k.y);_.set(J,ht)}}function O(M){const k=Qt(M),J=M.pageX-k.x,ht=M.pageY-k.y,gt=Math.sqrt(J*J+ht*ht);p.set(0,gt)}function j(M){n.enableZoom&&O(M),n.enablePan&&Lt(M)}function K(M){n.enableZoom&&O(M),n.enableRotate&&Dt(M)}function ot(M){if(E.length==1)d.set(M.pageX,M.pageY);else{const J=Qt(M),ht=.5*(M.pageX+J.x),gt=.5*(M.pageY+J.y);d.set(ht,gt)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const k=n.domElement;U(2*Math.PI*f.x/k.clientHeight),I(2*Math.PI*f.y/k.clientHeight),u.copy(d)}function rt(M){if(E.length===1)g.set(M.pageX,M.pageY);else{const k=Qt(M),J=.5*(M.pageX+k.x),ht=.5*(M.pageY+k.y);g.set(J,ht)}m.subVectors(g,_).multiplyScalar(n.panSpeed),X(m.x,m.y),_.copy(g)}function at(M){const k=Qt(M),J=M.pageX-k.x,ht=M.pageY-k.y,gt=Math.sqrt(J*J+ht*ht);v.set(0,gt),x.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),tt(x.y),p.copy(v);const qt=(M.pageX+k.x)*.5,Gt=(M.pageY+k.y)*.5;it(qt,Gt)}function L(M){n.enableZoom&&at(M),n.enablePan&&rt(M)}function A(M){n.enableZoom&&at(M),n.enableRotate&&ot(M)}function B(M){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",q),n.domElement.addEventListener("pointerup",Z)),!jt(M)&&(Wt(M),M.pointerType==="touch"?Pt(M):Q(M)))}function q(M){n.enabled!==!1&&(M.pointerType==="touch"?xt(M):wt(M))}function Z(M){switch(Yt(M),E.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",Z),n.dispatchEvent(_p),s=i.NONE;break;case 1:const k=E[0],J=C[k];Pt({pointerId:k,pageX:J.x,pageY:J.y});break}}function Q(M){let k;switch(M.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Ms.DOLLY:if(n.enableZoom===!1)return;Et(M),s=i.DOLLY;break;case Ms.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;Xt(M),s=i.PAN}else{if(n.enableRotate===!1)return;dt(M),s=i.ROTATE}break;case Ms.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;dt(M),s=i.ROTATE}else{if(n.enablePan===!1)return;Xt(M),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ih)}function wt(M){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(M);break;case i.DOLLY:if(n.enableZoom===!1)return;st(M);break;case i.PAN:if(n.enablePan===!1)return;_t(M);break}}function et(M){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(M.preventDefault(),n.dispatchEvent(ih),ct(Mt(M)),n.dispatchEvent(_p))}function Mt(M){const k=M.deltaMode,J={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(k){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return M.ctrlKey&&!b&&(J.deltaY*=10),J}function At(M){M.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",lt,{passive:!0,capture:!0}))}function lt(M){M.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",lt,{passive:!0,capture:!0}))}function mt(M){n.enabled===!1||n.enablePan===!1||Rt(M)}function Pt(M){switch(Zt(M),E.length){case 1:switch(n.touches.ONE){case bs.ROTATE:if(n.enableRotate===!1)return;Dt(M),s=i.TOUCH_ROTATE;break;case bs.PAN:if(n.enablePan===!1)return;Lt(M),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case bs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(M),s=i.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;K(M),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ih)}function xt(M){switch(Zt(M),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ot(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;rt(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(M),n.update();break;default:s=i.NONE}}function vt(M){n.enabled!==!1&&M.preventDefault()}function Wt(M){E.push(M.pointerId)}function Yt(M){delete C[M.pointerId];for(let k=0;k<E.length;k++)if(E[k]==M.pointerId){E.splice(k,1);return}}function jt(M){for(let k=0;k<E.length;k++)if(E[k]==M.pointerId)return!0;return!1}function Zt(M){let k=C[M.pointerId];k===void 0&&(k=new $,C[M.pointerId]=k),k.set(M.pageX,M.pageY)}function Qt(M){const k=M.pointerId===E[0]?E[1]:E[0];return C[k]}n.domElement.addEventListener("contextmenu",vt),n.domElement.addEventListener("pointerdown",B),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",et,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ni{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),ni.nextNameID=ni.nextNameID||0,this.$name.id=`lil-gui-name-${++ni.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qA extends ni{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ou(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const $A={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:ou,toHexString:ou},Za={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},ZA={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const n=Za.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Za.toHexString(i)}},JA={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=Za.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Za.toHexString(i)}},KA=[$A,Za,ZA,JA];function jA(r){return KA.find(t=>t.match(r))}class QA extends ni{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=jA(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ou(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class sh extends ni{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class t1 extends ni{constructor(t,e,n,i,s,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let a=!1,o,l,c,h,u;const d=5,f=v=>{o=v.clientX,l=c=v.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=v=>{if(a){const x=v.clientX-o,y=v.clientY-l;Math.abs(y)>d?(v.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}if(!a){const x=v.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,v,x,y,T)=>(p-v)/(x-v)*(T-y)+y,e=p=>{const v=this.$slider.getBoundingClientRect();let x=t(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{e(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),a=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,l=p.touches[0].clientY,a=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(a){const v=p.touches[0].clientX-o,x=p.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let g;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class e1 extends ni{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class n1 extends ni{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const i1=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function s1(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let vp=!1;class pd{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!vp&&o&&(s1(i1),vp=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(t,e,n,i,s){if(Object(n)===n)return new e1(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new t1(this,t,e,n,i,s);case"boolean":return new qA(this,t,e);case"string":return new n1(this,t,e);case"function":return new sh(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new QA(this,t,e,n)}addFolder(t){const e=new pd({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof sh||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof sh)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const sc=pd,r1={class:"wcp-demo-container"},a1={__name:"ThreeDebugUI",setup(r){const t=new sc,e=ye(null);return Fn(()=>{const n=new Tn,i=new nn(1,1,1),s=new Be({color:"#ff0000"}),a=new Ht(i,s);n.add(a),a.position.y=2;const o={color:s.color.getHex(),spin:()=>{bl.to(a.rotation,{duration:1,y:a.rotation.y+2*Math.PI})}};t.add(a.position,"y").min(-3).max(3).step(.01).name("elevation"),t.add(a,"visible"),t.add(o,"spin"),t.addColor(o,"color"),t.add(s,"wireframe"),t.onChange(()=>{s.color.set(o.color)});const l={width:800,height:600},c=new se(75,l.width/l.height);c.position.z=5,c.position.y=1,n.add(c);const h=new ss(c,e.value);h.enableDamping=!0;const u=new zn({canvas:e.value});u.setSize(l.width,l.height);function d(){requestAnimationFrame(d),h.update(),u.render(n,c)}d()}),ri(()=>{}),(n,i)=>(we(),wn("div",r1,[le("canvas",{ref_key:"canvas",ref:e},null,512)]))}},o1=Bn(a1,[["__scopeId","data-v-14cdb271"]]),l1={class:"wcp-demo-container"},c1={__name:"ThreeGeometries",setup(r){const t=ye(null),e=ye(null);return Fn(()=>{const n=new Tn,i=new Ft,s=5,a=new Float32Array(s*3*3);for(let g=0;g<s*3*3;g++)a[g]=Math.random()*2-1;const o=new te(a,3),l=new Be({color:"red",wireframe:!0});i.setAttribute("position",o);const c=new Ht(i,l);n.add(c);const h={width:+getComputedStyle(t.value).width.split("px")[0],height:600},u=new se(75,h.width/h.height,.1,1e3);u.position.z=2,u.position.x=.1,n.add(u);const d=new ss(u,e.value);d.enableDamping=!0;const f=new zn({canvas:e.value});f.setSize(h.width,h.height),f.setPixelRatio(Math.min(window.devicePixelRatio,2));function _(){requestAnimationFrame(_),d.update(),u.lookAt(c.position),f.render(n,u)}_(),window.addEventListener("mousemove",g=>{g.clientX/h.width-.5,-(g.clientY/h.height-.5)}),window.addEventListener("resize",g=>{h.width=+getComputedStyle(t.value).width.split("px")[0],u.aspect=h.width/h.height,u.updateProjectionMatrix(),f.setSize(h.width,h.height),f.setPixelRatio(Math.min(window.devicePixelRatio,2))}),window.addEventListener("dblclick",g=>{document.fullscreenElement?document.exitFullscreen():t.value.requestFullscreen()})}),ri(()=>{}),(n,i)=>(we(),wn("div",l1,[le("div",{ref_key:"canvasContainer",ref:t},[le("canvas",{ref_key:"canvas",ref:e},null,512)],512)]))}},h1=Bn(c1,[["__scopeId","data-v-5dc28e56"]]),u1={class:"wcp-demo-container"},d1={__name:"ThreeCamera",setup(r){const t=ye(null),e=ye(null);return Fn(()=>{const n=new Tn,i=new Ht(new nn(1,1,1),new Be({color:"green"}));n.add(i);const s={width:+getComputedStyle(t.value).width.split("px")[0],height:600},a=new se(75,s.width/s.height,.1,1e3);a.position.z=2,a.position.x=.1,n.add(a);const o=new ss(a,e.value);o.enableDamping=!0;const l=new zn({canvas:e.value});l.setSize(s.width,s.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2));function c(){requestAnimationFrame(c),o.update(),a.lookAt(i.position),l.render(n,a)}c(),window.addEventListener("mousemove",h=>{h.clientX/s.width-.5,-(h.clientY/s.height-.5)}),window.addEventListener("resize",h=>{s.width=+getComputedStyle(t.value).width.split("px")[0],a.aspect=s.width/s.height,a.updateProjectionMatrix(),l.setSize(s.width,s.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2))}),window.addEventListener("dblclick",h=>{document.fullscreenElement?document.exitFullscreen():t.value.requestFullscreen()})}),ri(()=>{}),(n,i)=>(we(),wn("div",u1,[le("div",{ref_key:"canvasContainer",ref:t},[le("canvas",{ref_key:"canvas",ref:e},null,512)],512)]))}},f1=Bn(d1,[["__scopeId","data-v-0afaa064"]]),p1={class:"wcp-demo-container"},m1={__name:"ThreeTransform",setup(r){const t=ye(null);return Fn(()=>{console.log(Tw);const e=new Tn,n=new nn(1,1,1),i=new Be({color:"green"}),s=new Ht(n,i);s.position.set(.7,-.6,1),s.scale.set(2,.5,.5),s.rotation.reorder("YXZ"),s.rotation.x=Math.PI*.25,s.rotation.y=Math.PI*.25,e.add(s);const a=new Ps;e.add(a);const o=new Ht(new nn(1,1,1),new Be({color:"red"})),l=new Ht(new nn(1,1,1),new Be({color:"blue"})),c=[];c.push(new P(-3,0,0)),c.push(new P(0,3,0)),c.push(new P(3,0,0));const h=new Ti(new Ft().setFromPoints(c),new Ze({color:"green"}));a.add(h),a.add(o),l.position.x=-2,a.add(l),a.position.y=-2;const u=new tc(3);e.add(u);const d={width:800,height:600},f=new se(75,d.width/d.height,.1,1e3),_=new zn({canvas:t.value});_.setSize(d.width,d.height),f.position.z=5,f.position.x=1,f.position.y=1,bl.to(s.position,{duration:1,delay:1,x:2}),bl.to(s.position,{duration:1,delay:2,x:0});const g=new ro;function m(){requestAnimationFrame(m);const p=g.getElapsedTime();s.rotation.y=p*2*Math.PI,f.lookAt(s.position),_.render(e,f)}m()}),ri(()=>{}),(e,n)=>(we(),wn("div",p1,[le("canvas",{ref_key:"canvas",ref:t},null,512)]))}},g1=Bn(m1,[["__scopeId","data-v-c598946e"]]),_1={class:"wcp-demo-container"},x1={__name:"ThreeBasic",setup(r){const t=ye(null);return Fn(()=>{const e=new Tn,n=new nn(1,1,1),i=new Be({color:"red"}),s=new Ht(n,i);s.position.x=1,e.add(s);const a={width:800,height:600},o=new se(75,a.width/a.height);o.position.z=5,o.position.y=1,e.add(o);const l=new zn({canvas:t.value});l.setSize(a.width,a.height),l.render(e,o)}),ri(()=>{}),(e,n)=>(we(),wn("div",_1,[le("canvas",{ref_key:"canvas",ref:t},null,512)]))}},v1=Bn(x1,[["__scopeId","data-v-846a6294"]]),y1={class:"wcp-demo-container"},M1={__name:"ThreeMaterials",setup(r){const t=ye(null),e=ye(null);return Fn(()=>{const n=new so;n.onStart=()=>{console.log("onStart")},n.onLoad=()=>{console.log("onLoad")},n.onProgress=()=>{console.log("onProgress")},n.onError=()=>{console.log("onError")};const i=new Nr(n),s=i.load("/textures/color.png"),a=i.load("/bg.png");s.repeat.x=2,s.repeat.y=3,s.rotation=Math.PI/4,s.center.x=.5,s.center.y=.5,s.generateMipmaps=!1,s.minFilter=xe,s.magFilter=xe,a.magFilter=xe;const o=new Tn,l=new Ht(new nn(1,1,1),new Be({map:a}));o.add(l);const c={width:+getComputedStyle(t.value).width.split("px")[0],height:600},h=new se(75,c.width/c.height,.1,1e3);h.position.z=1.2,o.add(h);const u=new ss(h,e.value);u.enableDamping=!0;const d=new zn({canvas:e.value});d.setSize(c.width,c.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2));function f(){requestAnimationFrame(f),u.update(),h.lookAt(l.position),d.render(o,h)}f(),window.addEventListener("resize",_=>{c.width=+getComputedStyle(t.value).width.split("px")[0],h.aspect=c.width/c.height,h.updateProjectionMatrix(),d.setSize(c.width,c.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2))}),e.value.addEventListener("dblclick",_=>{document.fullscreenElement?document.exitFullscreen():t.value.requestFullscreen()})}),ri(()=>{}),(n,i)=>(we(),wn("div",y1,[le("div",{ref_key:"canvasContainer",ref:t},[le("canvas",{ref_key:"canvas",ref:e},null,512)],512)]))}},b1=Bn(M1,[["__scopeId","data-v-043cbd29"]]),S1={class:"wcp-demo-container"},w1={__name:"ThreeMaterials2",setup(r){const t=ye(null),e=ye(null);return Fn(()=>{const n=new so;n.onStart=()=>{console.log("onStart")},n.onLoad=()=>{console.log("onLoad")},n.onProgress=()=>{console.log("onProgress")},n.onError=()=>{console.log("onError")};const s=new Nr(n).load("/textures/color.png");s.repeat.x=2,s.repeat.y=3,s.rotation=Math.PI/4,s.center.x=.5,s.center.y=.5,s.generateMipmaps=!1,s.minFilter=xe;const o=new wg().load(["/textures/door.png","/textures/door.png","/textures/door.png","/textures/door.png","/textures/door.png","/textures/door.png"]),l=new Tn,c=new Xr;c.metalness=.7,c.roughness=.1,c.side=_n,c.envMap=o;const h=new Ht(new es(.5,16,16),c);h.position.x=-1.5;const u=new Ht(new Li(1,1),c),d=new Ht(new qs(.3,.2,16,32),c);d.position.x=1.5,l.add(h),l.add(u),l.add(d);const f={width:+getComputedStyle(t.value).width.split("px")[0],height:+getComputedStyle(t.value).height.split("px")[0]},_=new se(75,f.width/f.height,.1,1e3);_.position.z=5,l.add(_);const g=new ss(_,e.value);g.enableDamping=!0;const m=new zn({canvas:e.value});m.setSize(f.width,f.height),m.setPixelRatio(Math.min(window.devicePixelRatio,2));const p=new ro;function v(){const x=p.getElapsedTime();h.rotation.y=.1*x,u.rotation.y=.1*x,d.rotation.y=.1*x,h.rotation.x=.15*x,u.rotation.x=.15*x,g.update(),m.render(l,_),requestAnimationFrame(v)}v(),window.addEventListener("resize",x=>{f.width=+getComputedStyle(t.value).width.split("px")[0],f.height=+getComputedStyle(t.value).height.split("px")[0],_.aspect=f.width/f.height,_.updateProjectionMatrix(),m.setSize(f.width,f.height),m.setPixelRatio(Math.min(window.devicePixelRatio,2))}),e.value.addEventListener("dblclick",x=>{document.fullscreenElement?document.exitFullscreen():t.value.requestFullscreen()})}),ri(()=>{}),(n,i)=>(we(),wn("div",S1,[le("div",{ref_key:"canvasContainer",ref:t,class:"canvas-container"},[le("canvas",{ref_key:"canvas",ref:e},null,512)],512)]))}},A1=Bn(w1,[["__scopeId","data-v-5fcf8b74"]]),E1={class:"wcp-demo-container"},T1={__name:"ThreeLight",setup(r){const t=ye(null),e=ye(null),n=new sc;return Fn(()=>{const i=new Tn,s=new tc(3);i.add(s);const a=new jl;a.color=new ft("#ffffff"),a.intensity=.3,i.add(a);const o=new Hu(16711680,255,.3);i.add(o);const l=new Kl;l.color=new ft("#00fffc"),l.intensity=1,l.position.set(1,.25,0),i.add(l);const c=new Jl(16748544,.5,10,2);c.position.set(.2,-.3,.5),i.add(c);const h=new Zl("#78ff00",.5,2,Math.PI*.1,.25,1);h.position.set(0,1,0),i.add(h),n.add(a,"intensity").min(0).max(1).step(.01);const u=new Ug(o,.2);i.add(u);const d=new Ju(l,.2);i.add(d);const f=new Zu(c,.2);i.add(f);const _=new $u(h);i.add(_);const g=new Xr;g.roughness=.4,g.side=_n;const m=new Ht(new nn(.5,.5,.5),g);m.position.x=-.6;const p=new Ht(new qs(.2,.1,16,100),g),v=new Ht(new Li(3,2,1,1),g);v.position.x=-.5,v.position.y=-.5,v.rotation.x=Math.PI*.5,i.add(m),i.add(p),i.add(v);const x={width:+getComputedStyle(t.value).width.split("px")[0],height:+getComputedStyle(t.value).height.split("px")[0]},y=new se(75,x.width/x.height,.1,1e3);y.position.z=2,i.add(y);const T=new ss(y,e.value);T.enableDamping=!0;const w=new zn({canvas:e.value});w.setSize(x.width,x.height),w.setPixelRatio(Math.min(window.devicePixelRatio,2));function E(){requestAnimationFrame(E),h.position.y=Math.sin(Date.now()*.001)*2,T.update(),y.lookAt(m.position),w.render(i,y)}E(),window.addEventListener("resize",C=>{x.width=+getComputedStyle(t.value).width.split("px")[0],x.height=+getComputedStyle(t.value).height.split("px")[0],y.aspect=x.width/x.height,y.updateProjectionMatrix(),w.setSize(x.width,x.height),w.setPixelRatio(Math.min(window.devicePixelRatio,2))}),e.value.addEventListener("dblclick",C=>{document.fullscreenElement?document.exitFullscreen():t.value.requestFullscreen()})}),ri(()=>{}),(i,s)=>(we(),wn("div",E1,[le("div",{ref_key:"canvasContainer",ref:t,class:"canvas-container"},[le("canvas",{ref_key:"canvas",ref:e},null,512)],512)]))}},C1=Bn(T1,[["__scopeId","data-v-19f07f44"]]);class R1 extends eo{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}class P1 extends sn{constructor(t){super(t)}load(t,e,n,i){const s=this,a=new ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const l=s.parse(JSON.parse(o));e&&e(l)},n,i)}parse(t){return new L1(t)}}class L1{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=I1(t,e,this.data);for(let s=0,a=i.length;s<a;s++)n.push(...i[s].toShapes());return n}}function I1(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)o=0,l-=s;else{const u=D1(h,i,o,l,e);o+=u.offsetX,a.push(u.path)}}return a}function D1(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new Ng;let o,l,c,h,u,d,f,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":o=g[m++]*t+e,l=g[m++]*t+n,a.moveTo(o,l);break;case"l":o=g[m++]*t+e,l=g[m++]*t+n,a.lineTo(o,l);break;case"q":c=g[m++]*t+e,h=g[m++]*t+n,u=g[m++]*t+e,d=g[m++]*t+n,a.quadraticCurveTo(u,d,c,h);break;case"b":c=g[m++]*t+e,h=g[m++]*t+n,u=g[m++]*t+e,d=g[m++]*t+n,f=g[m++]*t+e,_=g[m++]*t+n,a.bezierCurveTo(u,d,f,_,c,h);break}}return{offsetX:s.ha*t,path:a}}const U1={class:"wcp-demo-container"},N1={__name:"ThreeText",setup(r){new sc;const t=ye(null),e=ye(null);return Fn(()=>{const n=new Tn,s=new Nr().load("/textures/color.png");new P1().load("fonts/helvetiker_regular.typeface.json",function(f){const _=new R1("Hello Three.js",{font:f,size:.5,depth:.2,curveSegments:6,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5});_.computeBoundingBox(),_.center();const g=new Bu;g.matcap=s;const m=new Ht(_,g);n.add(m);const p=new qs(.5,.1,20,45);for(let v=0;v<100;v++){const x=new Ht(p,g);x.position.x=(Math.random()-.5)*10,x.position.y=(Math.random()-.5)*10,x.position.z=(Math.random()-.5)*10,x.rotation.x=Math.random()*Math.PI,x.rotation.y=Math.random()*Math.PI;const y=Math.random();x.scale.set(y,y,y),n.add(x)}});const o={width:+getComputedStyle(t.value).width.split("px")[0],height:+getComputedStyle(t.value).height.split("px")[0]},l=new se(75,o.width/o.height,.1,1e3);l.position.z=5,n.add(l);const c=new ss(l,e.value);c.enableDamping=!0;const h=new zn({canvas:e.value});h.setSize(o.width,o.height),h.setPixelRatio(Math.min(window.devicePixelRatio,2));const u=new ro;function d(){u.getElapsedTime(),c.update(),h.render(n,l),requestAnimationFrame(d)}d(),window.addEventListener("resize",f=>{o.width=+getComputedStyle(t.value).width.split("px")[0],o.height=+getComputedStyle(t.value).height.split("px")[0],l.aspect=o.width/o.height,l.updateProjectionMatrix(),h.setSize(o.width,o.height),h.setPixelRatio(Math.min(window.devicePixelRatio,2))}),e.value.addEventListener("dblclick",f=>{document.fullscreenElement?document.exitFullscreen():t.value.requestFullscreen()})}),ri(()=>{}),(n,i)=>(we(),wn("div",U1,[le("div",{ref_key:"canvasContainer",ref:t,class:"canvasContainer"},[le("canvas",{ref_key:"canvas",ref:e},null,512)],512)]))}},O1=Bn(N1,[["__scopeId","data-v-61097268"]]),F1={class:"wcp-demo-container"},B1={__name:"ThreeShadows",setup(r){const t=ye(null),e=ye(null),n=new sc;return Fn(()=>{const i=new Tn,s=new tc(3);i.add(s);const a=new jl;a.color=new ft("#ffffff"),a.intensity=.3,i.add(a);const o=new Kl;o.color=new ft("#00fffc"),o.intensity=1,o.position.set(.5,.5,0),o.castShadow=!0,i.add(o);const l=new Jl(16748544,.5,10,2);l.position.set(.2,-.3,.5);const c=new Zl("#78ff00",.5,2,Math.PI*.1,.25,1);c.position.set(0,1,0),n.add(o,"intensity").min(0).max(1).step(.001),n.add(o.position,"x").min(-5).max(5).step(.001),n.add(o.position,"y").min(-5).max(5).step(.001),n.add(o.position,"z").min(-5).max(5).step(.001);const h=new Ju(o,.2);o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,i.add(h),new Zu(l,.2),new $u(c);const u=new Xr;u.roughness=.4,u.side=_n;let d={radius:.1};const f=new es(d.radius,32,16),_=new Ht(f,u),g=new Ht(new Li(3,2,1,1),u);_.castShadow=!0,g.position.x=-.5,g.position.y=-.1,g.rotation.x=Math.PI*.5,g.receiveShadow=!0,i.add(_),i.add(g);const m={width:+getComputedStyle(t.value).width.split("px")[0],height:+getComputedStyle(t.value).height.split("px")[0]},p=new se(75,m.width/m.height,.1,1e3);p.position.z=2,i.add(p);const v=new ss(p,e.value);v.enableDamping=!0;const x=new zn({canvas:e.value});x.setSize(m.width,m.height),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.shadowMap.enabled=!0;function y(){requestAnimationFrame(y),c.position.y=Math.sin(Date.now()*.001)*2,v.update(),p.lookAt(_.position),x.render(i,p)}y(),window.addEventListener("resize",T=>{m.width=+getComputedStyle(t.value).width.split("px")[0],m.height=+getComputedStyle(t.value).height.split("px")[0],p.aspect=m.width/m.height,p.updateProjectionMatrix(),x.setSize(m.width,m.height),x.setPixelRatio(Math.min(window.devicePixelRatio,2))}),e.value.addEventListener("dblclick",T=>{document.fullscreenElement?document.exitFullscreen():t.value.requestFullscreen()})}),ri(()=>{}),(i,s)=>(we(),wn("div",F1,[le("div",{ref_key:"canvasContainer",ref:t,class:"canvas-container"},[le("canvas",{ref_key:"canvas",ref:e},null,512)],512)]))}},z1=Bn(B1,[["__scopeId","data-v-f759d453"]]),k1={class:"wrap"},V1={class:"content"},H1={style:{"overflow-x":"auto","scrollbar-width":"none"}},G1=["value"],W1=k_('<w-tab value="basic" data-v-6f0a383b>basic</w-tab><w-tab value="transform" data-v-6f0a383b>transform</w-tab><w-tab value="camera" data-v-6f0a383b>camera</w-tab><w-tab value="geometries" data-v-6f0a383b>geometries</w-tab><w-tab value="debug ui" data-v-6f0a383b>debug ui</w-tab><w-tab value="materials" data-v-6f0a383b>materials</w-tab><w-tab value="light" data-v-6f0a383b>light</w-tab><w-tab value="shadows" data-v-6f0a383b>shadows</w-tab><w-tab value="panoramic" data-v-6f0a383b>panoramic</w-tab>',9),X1=[W1],Y1={__name:"ThreeDemo",setup(r){yp();const t=ye(null),e=ye({demo:"basic"});return Fn(n=>{}),(n,i)=>(we(),wn("div",{class:"wcp-container",onClick:i[1]||(i[1]=(...s)=>{var a,o;return((a=t.value)==null?void 0:a.hideMenu)&&((o=t.value)==null?void 0:o.hideMenu(...s))})},[aa(Mp,{ref_key:"headerRef",ref:t},null,512),le("div",k1,[le("div",V1,[le("div",H1,[le("w-tabs",{style:{width:"max-content",display:"block"},value:e.value.demo,onChange:i[0]||(i[0]=s=>{e.value.demo=s.detail.value})},X1,40,G1)]),le("div",null,[e.value.demo=="basic"?(we(),Ui(v1,{key:0})):ci("",!0),e.value.demo=="transform"?(we(),Ui(g1,{key:1})):ci("",!0),e.value.demo=="camera"?(we(),Ui(f1,{key:2})):ci("",!0),e.value.demo=="geometries"?(we(),Ui(h1,{key:3})):ci("",!0),e.value.demo=="debug ui"?(we(),Ui(o1,{key:4})):ci("",!0),e.value.demo=="materials"?(we(),wn(z_,{key:5},[aa(b1),aa(A1),aa(O1)],64)):ci("",!0),e.value.demo=="light"?(we(),Ui(C1,{key:6})):ci("",!0),e.value.demo=="shadows"?(we(),Ui(z1,{key:7})):ci("",!0),e.value.demo=="panoramic"?(we(),Ui(Lw,{key:8})):ci("",!0)])])])]))}},Z1=Bn(Y1,[["__scopeId","data-v-6f0a383b"]]);export{Z1 as default};
