import{n as w,a as s,c,e,w as $,h as f,u as g,r as d,o as S,b as v,q as m,i as x,p as b,l as y}from"./index-BofMuO3r.js";import{_,H as A}from"./Header-XSoy1W_c.js";import{F as k}from"./Footer-CfnAtZ-T.js";/* empty css                                                                             */const J={},R={class:"container"},C=e("h2",{style:{"text-align":"center"}},"JS2022有用的更新",-1),F=e("h3",null,"1. String/Array method at(index)",-1),B=e("p",null," [1,2,3].at(-1) // 3 ",-1),I=e("p",null," 'abc'.at(1) // 'b' ",-1),N=e("h3",null,"2. Object.hasOwn(obj, propKey)",-1),V=e("p",null," 和 in 类似，但是不检查原型链__proto__，只检查自身属性。 ",-1),j=e("h3",null,"3. Private methods field",-1),M=e("code",{class:"code"},`class A {
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
                `,-1);function q(o,r){const n=w("highlight");return s(),c("div",R,[C,F,B,I,N,V,j,e("p",null,[$((s(),c("pre",null,[f("                "),M,f(`
            `)])),[[n]])])])}const D=_(J,[["render",q]]),H={},O={class:"container"},E=e("h2",{style:{"text-align":"center"}},"JS2023有用的更新",-1),K=e("p",null,"新增的一些数组操作方法，不改变原有数组，返回一个新的数组（浅拷贝）。",-1),P=e("p",null,"1.toReversed() 和 reverse()类似",-1),T=e("p",null,"2.toSorted() 和 sort()类似",-1),z=e("p",null,"3.toSpliced(start, deleteCount, item1, item2,...) 和 splice()类似",-1),G=e("p",null,"4.width(index,value) 和 [index] = value类似 ",-1),L=[E,K,P,T,z,G];function Q(o,r){return s(),c("div",O,L)}const U=_(H,[["render",Q]]),W=o=>(b("data-v-f787f9b3"),o=o(),y(),o),X={class:"wrap"},Y={class:"content"},Z={style:{display:"flex","justify-content":"flex-end"}},ee=W(()=>e("w-icon",{name:"xmark",color:"#666"},null,-1)),te=[ee],oe={style:{"scrollbar-width":"thin","overflow-y":"auto"}},se={__name:"Article",setup(o){const r=g(),n=d(null),l=d({article:"JS2022"}),i=d(null);return S(()=>{const a=r.currentRoute.value.query.article;a&&(l.value.article=a,i.value.setAttribute("show",""))}),(a,t)=>(s(),c("div",{class:"article-container",onClick:t[3]||(t[3]=(...u)=>{var h,p;return((h=n.value)==null?void 0:h.hideMenu)&&((p=n.value)==null?void 0:p.hideMenu(...u))})},[v(A,{ref_key:"headerRef",ref:n},null,512),e("div",X,[e("div",Y,[e("div",{class:"article-box",onClick:t[0]||(t[0]=()=>{l.value.article="JS2022",i.value.setAttribute("show","")})}," JS2022有用的更新 "),e("div",{class:"article-box",onClick:t[1]||(t[1]=()=>{l.value.article="JS2023",i.value.setAttribute("show","")})}," JS2023有用的更新 "),e("w-modal",{ref_key:"modalRef",ref:i,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[e("div",Z,[e("w-btn",{type:"text",onClick:t[2]||(t[2]=u=>i.value.removeAttribute("show"))},te)]),e("div",oe,[l.value.article==="JS2022"?(s(),m(D,{key:0})):x("",!0),l.value.article==="JS2023"?(s(),m(U,{key:1})):x("",!0)])],512)])]),v(k)]))}},re=_(se,[["__scopeId","data-v-f787f9b3"]]);export{re as default};
