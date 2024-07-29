import{v as $,b as s,c as l,e,x as g,j as b,u as y,r as u,o as k,d as m,F as x,k as _,w,p as A,n as S}from"./index-D9lw3Zhd.js";import{_ as h,H as R}from"./Header-PV0toX5M.js";import{F}from"./Footer-EPAgXwxh.js";/* empty css                                                                             */const C={},E={class:"container"},j=e("h2",{style:{"text-align":"center"}},"ES2022有用的更新",-1),B=e("h3",null,"1. String/Array method at(index)",-1),I=e("p",null," [1,2,3].at(-1) // 3 ",-1),N=e("p",null," 'abc'.at(1) // 'b' ",-1),V=e("h3",null,"2. Object.hasOwn(obj, propKey)",-1),q=e("p",null," 和 in 类似，但是不检查原型链__proto__，只检查自身属性。 ",-1),M=e("h3",null,"3. Private methods field",-1),D=e("code",{class:"code"},`class A {
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
                `,-1);function H(n,i){const a=$("highlight");return s(),l("div",E,[j,B,I,N,V,q,M,e("p",null,[g((s(),l("pre",null,[b("                "),D,b(`
            `)])),[[a]])])])}const O=h(C,[["render",H]]),K={},P={class:"container"},T=e("h2",{style:{"text-align":"center"}},"ES2023有用的更新",-1),z=e("p",null,"新增的一些数组操作方法，不改变原有数组，返回一个新的数组（浅拷贝）。",-1),G=e("p",null,"1.toReversed() 和 reverse()类似",-1),J=e("p",null,"2.toSorted() 和 sort()类似",-1),L=e("p",null,"3.toSpliced(start, deleteCount, item1, item2,...) 和 splice()类似",-1),Q=e("p",null,"4.width(index,value) 和 [index] = value类似 ",-1),U=[T,z,G,J,L,Q];function W(n,i){return s(),l("div",P,U)}const X=h(K,[["render",W]]),v=n=>(A("data-v-b9515150"),n=n(),S(),n),Y={class:"wrap"},Z={class:"content"},ee=["value"],te=v(()=>e("w-tab",{value:"it"},"技术",-1)),oe=v(()=>e("w-tab",{value:"life"},"生活",-1)),se=[te,oe],ne={class:"tab-content"},le={style:{display:"flex","justify-content":"flex-end"}},ie=v(()=>e("w-icon",{name:"xmark",color:"#666"},null,-1)),ae=[ie],ce={style:{"scrollbar-width":"thin","overflow-y":"auto"}},re={__name:"Article",setup(n){const i=y(),a=u(null),o=u({tab:"it",article:"es2022"}),c=u(null);return k(()=>{console.log(i.currentRoute.value.query);const d=i.currentRoute.value.query.article,t=i.currentRoute.value.query.tab;d&&(o.value.article=d,c.value.setAttribute("show","")),t&&(o.value.tab=t)}),(d,t)=>(s(),l("div",{class:"article-container",onClick:t[4]||(t[4]=(...r)=>{var p,f;return((p=a.value)==null?void 0:p.hideMenu)&&((f=a.value)==null?void 0:f.hideMenu(...r))})},[m(R,{ref_key:"headerRef",ref:a},null,512),e("div",Y,[e("div",Z,[e("w-tabs",{value:o.value.tab,onChange:t[0]||(t[0]=r=>{o.value.tab=r.detail.value})},se,40,ee),e("div",ne,[o.value.tab==="it"?(s(),l(x,{key:0},[e("div",{class:"article-box",onClick:t[1]||(t[1]=()=>{o.value.article="es2022",c.value.setAttribute("show","")})}," ES2022有用的更新 "),e("div",{class:"article-box",onClick:t[2]||(t[2]=()=>{o.value.article="es2023",c.value.setAttribute("show","")})}," ES2023有用的更新 ")],64)):o.value.tab==="life"?(s(),l(x,{key:1},[],64)):_("",!0)]),e("w-modal",{ref_key:"modelRef",ref:c,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[e("div",le,[e("w-btn",{type:"text",onClick:t[3]||(t[3]=r=>c.value.removeAttribute("show"))},ae)]),e("div",ce,[o.value.article==="es2022"?(s(),w(O,{key:0})):_("",!0),o.value.article==="es2023"?(s(),w(X,{key:1})):_("",!0)])],512)])]),m(F)]))}},ve=h(re,[["__scopeId","data-v-b9515150"]]);export{ve as default};
