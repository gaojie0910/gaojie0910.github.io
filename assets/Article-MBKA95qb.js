var $=Object.defineProperty;var b=e=>{throw TypeError(e)};var k=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>k(e,typeof t!="symbol"?t+"":t,s),A=(e,t,s)=>t.has(e)||b("Cannot "+s);var u=(e,t,s)=>(A(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);import{v as F,b as i,c as a,e as o,x as C,j as w,u as R,r as f,d as S,F as j,w as B,k as I,p as N,n as V}from"./index-By0cBpPV.js";import{_ as x,H as E}from"./Header-Ba6VAExd.js";/* empty css                                                                             */var d,r;class _{constructor(){m(this,"field",1);h(this,d,1)}getField1(){return u(this,d)}static getField2(){return u(this,r)}}d=new WeakMap,r=new WeakMap,h(_,r,2);console.log(new _().field);console.log(new _().getField1());console.log(_.getField2());const D={},H=o("h2",{style:{"text-align":"center"}},"ES2022",-1),M=o("h3",null,"1. String/Array method at(index)",-1),O=o("p",null," [1,2,3].at(-1) // 3 ",-1),K=o("p",null," 'abc'.at(1) // 'b' ",-1),P=o("h3",null,"2. Object.hasOwn(obj, propKey)",-1),T=o("p",null," 和 in 类似，但是不检查原型链__proto__，只检查自身属性。 ",-1),q=o("h3",null,"3. Private methods field",-1),z=o("code",{class:"code"},`class A {
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
                `,-1);function G(e,t,s,c,y,l){const n=F("highlight");return i(),a("div",null,[H,M,O,K,P,T,q,o("p",null,[C((i(),a("pre",null,[w("                "),z,w(`
            `)])),[[n]])])])}const J=x(D,[["render",G]]),p=e=>(N("data-v-fb0240dc"),e=e(),V(),e),L={class:"wrap"},Q={class:"content"},U=["value"],W=p(()=>o("w-tab",{value:"it"},"技术",-1)),X=p(()=>o("w-tab",{value:"life"},"生活",-1)),Y=[W,X],Z={class:"tab-content"},ee={style:{display:"flex","justify-content":"flex-end"}},te=p(()=>o("w-icon",{name:"xmark"},null,-1)),oe=[te],se={style:{"scrollbar-width":"thin","overflow-y":"auto"}},le={__name:"Article",setup(e){R();const t=f(null),s=f({tab:"it",article:"es2022"}),c=f(null);return(y,l)=>(i(),a("div",{class:"article-container",onClick:l[3]||(l[3]=(...n)=>{var v,g;return((v=t.value)==null?void 0:v.hideMenu)&&((g=t.value)==null?void 0:g.hideMenu(...n))})},[S(E,{ref_key:"headerRef",ref:t},null,512),o("div",L,[o("div",Q,[o("w-tabs",{value:s.value.tab,onChange:l[0]||(l[0]=n=>{s.value.tab=n.detail.value})},Y,40,U),o("div",Z,[s.value.tab==="it"?(i(),a("div",{key:0,class:"article-box",onClick:l[1]||(l[1]=()=>{s.value.article="es2022",c.value.setAttribute("show","")})},"es2022")):(i(),a(j,{key:1},[],64))]),o("w-modal",{ref_key:"modelRef",ref:c,width:"1000px",height:"800px"},[o("div",ee,[o("w-btn",{type:"text",onClick:l[2]||(l[2]=n=>c.value.removeAttribute("show"))},oe)]),o("div",se,[s.value.article==="es2022"?(i(),B(J,{key:0})):I("",!0)])],512)])])]))}},de=x(le,[["__scopeId","data-v-fb0240dc"]]);export{de as default};
