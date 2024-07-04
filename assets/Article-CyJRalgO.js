import{v as w,b as s,c as l,e,x as $,j as b,u as g,r as u,o as y,d as k,F as m,k as _,w as x,p as A,n as R}from"./index-B91Ea-o-.js";import{_ as h,H as S}from"./Header-BLcs6nYG.js";/* empty css                                                                             */const C={},E={class:"container"},F=e("h2",{style:{"text-align":"center"}},"ES2022有用的更新",-1),j=e("h3",null,"1. String/Array method at(index)",-1),B=e("p",null," [1,2,3].at(-1) // 3 ",-1),I=e("p",null," 'abc'.at(1) // 'b' ",-1),N=e("h3",null,"2. Object.hasOwn(obj, propKey)",-1),V=e("p",null," 和 in 类似，但是不检查原型链__proto__，只检查自身属性。 ",-1),q=e("h3",null,"3. Private methods field",-1),M=e("code",{class:"code"},`class A {
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
                `,-1);function D(n,i){const c=w("highlight");return s(),l("div",E,[F,j,B,I,N,V,q,e("p",null,[$((s(),l("pre",null,[b("                "),M,b(`
            `)])),[[c]])])])}const H=h(C,[["render",D]]),O={},K={class:"container"},P=e("h2",{style:{"text-align":"center"}},"ES2023有用的更新",-1),T=e("p",null,"新增的一些数组操作方法，不改变原有数组，返回一个新的数组。",-1),z=e("p",null,"1.toReversed() 和 reverse()类似",-1),G=e("p",null,"2.toSorted() 和 sort()类似",-1),J=e("p",null,"3.toSpliced(start, deleteCount, item1, item2,...) 和 splice()类似",-1),L=e("p",null,"4.width(index,value) 和 [index] = value类似 ",-1),Q=[P,T,z,G,J,L];function U(n,i){return s(),l("div",K,Q)}const W=h(O,[["render",U]]),v=n=>(A("data-v-944867c7"),n=n(),R(),n),X={class:"wrap"},Y={class:"content"},Z=["value"],ee=v(()=>e("w-tab",{value:"it"},"技术",-1)),te=v(()=>e("w-tab",{value:"life"},"生活",-1)),oe=[ee,te],se={class:"tab-content"},ne={style:{display:"flex","justify-content":"flex-end"}},le=v(()=>e("w-icon",{name:"xmark",color:"#666"},null,-1)),ie=[le],ce={style:{"scrollbar-width":"thin","overflow-y":"auto"}},ae={__name:"Article",setup(n){const i=g(),c=u(null),o=u({tab:"it",article:"es2022"}),a=u(null);return y(()=>{console.log(i.currentRoute.value.query);const d=i.currentRoute.value.query.article,t=i.currentRoute.value.query.tab;d&&(o.value.article=d,a.value.setAttribute("show","")),t&&(o.value.tab=t)}),(d,t)=>(s(),l("div",{class:"article-container",onClick:t[4]||(t[4]=(...r)=>{var p,f;return((p=c.value)==null?void 0:p.hideMenu)&&((f=c.value)==null?void 0:f.hideMenu(...r))})},[k(S,{ref_key:"headerRef",ref:c},null,512),e("div",X,[e("div",Y,[e("w-tabs",{value:o.value.tab,onChange:t[0]||(t[0]=r=>{o.value.tab=r.detail.value})},oe,40,Z),e("div",se,[o.value.tab==="it"?(s(),l(m,{key:0},[e("div",{class:"article-box",onClick:t[1]||(t[1]=()=>{o.value.article="es2022",a.value.setAttribute("show","")})}," es2022有用的更新 "),e("div",{class:"article-box",onClick:t[2]||(t[2]=()=>{o.value.article="es2023",a.value.setAttribute("show","")})}," ES2023有用的更新 ")],64)):o.value.tab==="life"?(s(),l(m,{key:1},[],64)):_("",!0)]),e("w-modal",{ref_key:"modelRef",ref:a,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[e("div",ne,[e("w-btn",{type:"text",onClick:t[3]||(t[3]=r=>a.value.removeAttribute("show"))},ie)]),e("div",ce,[o.value.article==="es2022"?(s(),x(H,{key:0})):_("",!0),o.value.article==="es2023"?(s(),x(W,{key:1})):_("",!0)])],512)])])]))}},_e=h(ae,[["__scopeId","data-v-944867c7"]]);export{_e as default};
