import{m as f,a as r,c as o,d as t,w as g,h as l,j as m,u as x,r as _,o as b,b as v,n as d,i as h,p as $,e as w}from"./index-Cw6ginvo.js";import{_ as c,H as J}from"./Header-CUaFx_yb.js";import{F as k}from"./Footer-BdfQt4lM.js";/* empty css                                                                             */const C={},I={class:"container"},M=t("h2",{style:{"text-align":"center"}},"JS2022 some update",-1),R=t("h3",null,"1. String/Array method at(index)",-1),j=t("p",null," [1,2,3].at(-1) // 3 ",-1),L=t("p",null," 'abc'.at(1) // 'b' ",-1),F=t("h3",null,"2. Object.hasOwn(obj, propKey)",-1),O=t("p",null," like in, don't search __proto__, just search self。 ",-1),N=t("h3",null,"3. Private methods field",-1),V=t("code",{class:"code"},`class A {
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
                `,-1);function B(s,p){const n=f("highlight");return r(),o("div",I,[M,R,j,L,F,O,N,t("p",null,[g((r(),o("pre",null,[l("                "),V,l(`
            `)])),[[n]])])])}const E=c(C,[["render",B]]),P={},W={class:"container"},D=t("h2",{style:{"text-align":"center"}},"JS2023 some update",-1),H=t("p",null,"add some array methods, do not change origin array, just return an new array.",-1),q=t("p",null,"1.toReversed()",-1),K=t("p",null,"2.toSorted()",-1),T=t("p",null,"3.toSpliced(start, deleteCount, item1, item2,...)",-1),U=t("p",null,"4.width(index,value) just like [index] = value",-1),z=t("p",null,"other methods",-1),G=t("p",null,"1.findLast()",-1),Q=t("p",null,"2.findLastIndex()",-1),X=t("code",{class:"code"},`
const target = [1,2,3,2,1].findLast((item,index)=>{return item > 1 })
const index = [1,2,3,2,1].findLastIndex((item,index)=>{return item > 1 })
                `,-1);function Y(s,p){const n=f("highlight");return r(),o("div",W,[D,H,q,K,T,U,z,G,Q,t("p",null,[g((r(),o("pre",null,[l("                "),X,l(`
            `)])),[[n]])])])}const Z=c(P,[["render",Y]]),tt={},et={class:"container"},rt=m('<h2 style="text-align:center;">JS String and Array method</h2><h4>String</h4><p>String length</p><p>String charAt()</p><p>String charCodeAt()</p><p>String at()</p><p>String [ ]</p><p>String slice()</p><p>String toUpperCase()</p><p>String toLowerCase()</p><p>String concat()</p><p>String trim()</p><p>String trimStart()</p><p>String trimEnd()</p><p>String padStart()</p><p>String padEnd()</p><p>String repeat()</p><p>String replace()</p><p>String split()</p><p>String indexOf()</p><p>String lastIndexOf()</p><p>String search()</p><p>String match()</p><p>String matchAll()</p><p>String includes()</p><p>String startsWith()</p><p>String endsWith()</p><h4>Array</h4><p>Array length</p><p>Array toString()</p><p>Array at()</p><p>Array join()</p><p>Array pop()</p><p>Array push()</p><p>Array shift()</p><p>Array unshift()</p><p>Array concat()</p><p>Array copyWithin()</p><p>Array flat()</p><p>Array splice()</p><p>Array toSpliced()</p><p>Array slice()</p><p>Array indexOf()</p><p>Array lastIndexOf()</p><p>Array includes()</p><p>Array find()</p><p>Array findIndex()</p><p>Array findLast()</p><p>Array findLastIndex()</p><p>Array sort()</p><p>Array reverse()</p><p>Array toSorted()</p><p>Array toReversed()</p><p>Math.min()</p><p>Math.max()</p><p>Array forEach</p><p>Array map()</p><p>Array flatMap()</p><p>Array filter()</p><p>Array reduce()</p><p>Array reduceRight()</p><p>Array every()</p><p>Array some()</p><p>Array from()</p><p>Array keys()</p><p>Array values()</p><p>Array entries()</p><p>Array with()</p><p>Array Spread (...)</p>',69),nt=[rt];function it(s,p){return r(),o("div",et,nt)}const st=c(tt,[["render",it]]),ot={},at={class:"container"},lt=t("h2",{style:{"text-align":"center"}},"JSAlgorithm",-1),pt=t("p",null,"1.fibonacci",-1),ct=t("code",{class:"code"},`
function fib(n){
    let thePrev = 1
    let prev = 1
    for(let i=3;i<=n;i++){
        let next = thePrev+prev
        thePrev = prev
        prev = next
    }
    return prev
}

function fib1(n){
    let fibs = [1,1]
    while (fibs.length<=n) {
        fibs.push(fibs[fibs.length-1]+fibs[fibs.length-2])
    }
    return fibs
}

function fib2(n) {
    return n > 2 ? fib2(n - 2) + fib2(n - 1) : 1
}

                `,-1);function dt(s,p){const n=f("highlight");return r(),o("div",at,[lt,pt,t("p",null,[g((r(),o("pre",null,[l("                "),ct,l(`
            `)])),[[n]])])])}const ht=c(ot,[["render",dt]]),ut=s=>($("data-v-59b1b326"),s=s(),w(),s),_t={class:"wrap"},ft={class:"content"},gt={style:{display:"flex","justify-content":"flex-end"}},At=ut(()=>t("w-icon",{name:"xmark",color:"#666"},null,-1)),yt=[At],St={style:{"scrollbar-width":"thin","overflow-y":"auto"}},vt={__name:"Article",setup(s){const p=x(),n=_(null),i=_({article:"JS2022"}),a=_(null);return b(()=>{const u=p.currentRoute.value.query.article;u&&(i.value.article=u,a.value.setAttribute("show",""))}),(u,e)=>(r(),o("div",{class:"article-container",onClick:e[5]||(e[5]=(...A)=>{var y,S;return((y=n.value)==null?void 0:y.hideMenu)&&((S=n.value)==null?void 0:S.hideMenu(...A))})},[v(J,{ref_key:"headerRef",ref:n},null,512),t("div",_t,[t("div",ft,[t("div",{class:"article-box",onClick:e[0]||(e[0]=()=>{i.value.article="JS2022",a.value.setAttribute("show","")})}," JS2022 "),t("div",{class:"article-box",onClick:e[1]||(e[1]=()=>{i.value.article="JS2023",a.value.setAttribute("show","")})}," JS2023 "),t("div",{class:"article-box",onClick:e[2]||(e[2]=()=>{i.value.article="JSStringAndArrayMethod",a.value.setAttribute("show","")})}," JS String And Array Method "),t("div",{class:"article-box",onClick:e[3]||(e[3]=()=>{i.value.article="JSAlgorithm",a.value.setAttribute("show","")})}," JS Algorithm "),t("w-modal",{ref_key:"modalRef",ref:a,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[t("div",gt,[t("w-btn",{type:"text",onClick:e[4]||(e[4]=A=>a.value.removeAttribute("show"))},yt)]),t("div",St,[i.value.article==="JS2022"?(r(),d(E,{key:0})):h("",!0),i.value.article==="JS2023"?(r(),d(Z,{key:1})):h("",!0),i.value.article==="JSStringAndArrayMethod"?(r(),d(st,{key:2})):h("",!0),i.value.article==="JSAlgorithm"?(r(),d(ht,{key:3})):h("",!0)])],512)])]),v(k)]))}},wt=c(vt,[["__scopeId","data-v-59b1b326"]]);export{wt as default};
