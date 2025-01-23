import{m as g,a as o,c,d as e,w as $,h as r,u as w,r as _,o as S,b as v,n as m,i as x,p as b,e as y}from"./index-DmH0xgMx.js";import{_ as u,H as A}from"./Header-Cey5sgz3.js";import{F as k}from"./Footer-BxCvxDWK.js";/* empty css                                                                             */const J={},I={class:"container"},R=e("h2",{style:{"text-align":"center"}},"JS2022有用的更新",-1),C=e("h3",null,"1. String/Array method at(index)",-1),F=e("p",null," [1,2,3].at(-1) // 3 ",-1),B=e("p",null," 'abc'.at(1) // 'b' ",-1),L=e("h3",null,"2. Object.hasOwn(obj, propKey)",-1),N=e("p",null," 和 in 类似，但是不检查原型链__proto__，只检查自身属性。 ",-1),V=e("h3",null,"3. Private methods field",-1),j=e("code",{class:"code"},`class A {
    field = 1
    #field1 = 1
    static #field2 = 2;
    getField1() {
        return this.#field1;
    }
    static getField2() {
        return this.#field2;
    }
}
console.log((new A()).field) // 1
console.log(A.#field1); // error
console.log((new A()).getField1()); // 1
console.log(A.#field2); // error
console.log(A.getField2()); // 2
                `,-1);function M(s,d){const n=g("highlight");return o(),c("div",I,[R,C,F,B,L,N,V,e("p",null,[$((o(),c("pre",null,[r("                "),j,r(`
            `)])),[[n]])])])}const D=u(J,[["render",M]]),H={},O={class:"container"},q=e("h2",{style:{"text-align":"center"}},"JS2023有用的更新",-1),E=e("p",null,"新增的一些数组操作方法，不改变原有数组，返回一个新的数组（浅拷贝）。",-1),K=e("p",null,"1.toReversed() 和 reverse()类似",-1),P=e("p",null,"2.toSorted() 和 sort()类似",-1),T=e("p",null,"3.toSpliced(start, deleteCount, item1, item2,...) 和 splice()类似",-1),z=e("p",null,"4.width(index,value) 和 [index] = value类似 ",-1),G=e("p",null,"其他一些数组方法",-1),Q=e("p",null,"1.findLast()和find类似",-1),U=e("p",null,"2.findLastIndex()和findIndex()类似",-1),W=e("code",{class:"code"},`
const target = [1,2,3,2,1].findLast((item,index)=>{return item > 1 })
const index = [1,2,3,2,1].findLastIndex((item,index)=>{return item > 1 })
                `,-1);function X(s,d){const n=g("highlight");return o(),c("div",O,[q,E,K,P,T,z,G,Q,U,e("p",null,[$((o(),c("pre",null,[r("                "),W,r(`
            `)])),[[n]])])])}const Y=u(H,[["render",X]]),Z=s=>(b("data-v-f787f9b3"),s=s(),y(),s),ee={class:"wrap"},te={class:"content"},ne={style:{display:"flex","justify-content":"flex-end"}},oe=Z(()=>e("w-icon",{name:"xmark",color:"#666"},null,-1)),se=[oe],ie={style:{"scrollbar-width":"thin","overflow-y":"auto"}},le={__name:"Article",setup(s){const d=w(),n=_(null),i=_({article:"JS2022"}),l=_(null);return S(()=>{const a=d.currentRoute.value.query.article;a&&(i.value.article=a,l.value.setAttribute("show",""))}),(a,t)=>(o(),c("div",{class:"article-container",onClick:t[3]||(t[3]=(...h)=>{var f,p;return((f=n.value)==null?void 0:f.hideMenu)&&((p=n.value)==null?void 0:p.hideMenu(...h))})},[v(A,{ref_key:"headerRef",ref:n},null,512),e("div",ee,[e("div",te,[e("div",{class:"article-box",onClick:t[0]||(t[0]=()=>{i.value.article="JS2022",l.value.setAttribute("show","")})}," JS2022有用的更新 "),e("div",{class:"article-box",onClick:t[1]||(t[1]=()=>{i.value.article="JS2023",l.value.setAttribute("show","")})}," JS2023有用的更新 "),e("w-modal",{ref_key:"modalRef",ref:l,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[e("div",ne,[e("w-btn",{type:"text",onClick:t[2]||(t[2]=h=>l.value.removeAttribute("show"))},se)]),e("div",ie,[i.value.article==="JS2022"?(o(),m(D,{key:0})):x("",!0),i.value.article==="JS2023"?(o(),m(Y,{key:1})):x("",!0)])],512)])]),v(k)]))}},_e=u(le,[["__scopeId","data-v-f787f9b3"]]);export{_e as default};
