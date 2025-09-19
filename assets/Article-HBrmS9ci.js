import{n as A,c as p,d as e,b as t,w as o,i as l,g as b,r as y,o as x,u as w,a as m,m as f,j as g}from"./index-CfPKXLzP.js";import{_ as d,H as J}from"./Header-CNJQ1BEx.js";import{F as k}from"./Footer-CBCiZb_c.js";const j={},$={class:"container"};function M(u,r){const i=A("highlight");return e(),p("div",$,[r[1]||(r[1]=t("h2",{style:{"text-align":"center"}},"JS2022 some update",-1)),r[2]||(r[2]=t("h3",null,"1. String/Array method at(index)",-1)),r[3]||(r[3]=t("p",null," [1,2,3].at(-1) // 3 ",-1)),r[4]||(r[4]=t("p",null," 'abc'.at(1) // 'b' ",-1)),r[5]||(r[5]=t("h3",null,"2. Object.hasOwn(obj, propKey)",-1)),r[6]||(r[6]=t("p",null," like in, don't search __proto__, just search self。 ",-1)),r[7]||(r[7]=t("h3",null,"3. Private methods field",-1)),t("p",null,[o((e(),p("pre",null,r[0]||(r[0]=[l("                ",-1),t("code",{class:"code"},`class A {
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
                `,-1),l(`
            `,-1)]))),[[i]])])])}const _=d(j,[["render",M]]),C={},O={class:"container"};function q(u,r){const i=A("highlight");return e(),p("div",O,[r[1]||(r[1]=t("h2",{style:{"text-align":"center"}},"JS2024 some update",-1)),r[2]||(r[2]=t("p",null,"1.Object.groupBy()",-1)),r[3]||(r[3]=t("p",null,"2.Map.groupBy()",-1)),t("p",null,[o((e(),p("pre",null,r[0]||(r[0]=[l("                ",-1),t("code",{class:"code"},`
const fruits = [
{name:"bananas", quantity:500},
{name:"oranges", quantity:200},
{name:"peach", quantity:300},
];

// Group by Quantity
const result = Object.groupBy(fruits, ({ quantity })=>{
  return quantity
})
const result2 = Object.groupBy(fruits, ({ quantity })=>{
  return quantity > 200 ? "ok" : "low";
})
                `,-1),l(`
            `,-1)]))),[[i]])])])}const B=d(C,[["render",q]]),R={},F={class:"container"};function E(u,r){return e(),p("div",F,r[0]||(r[0]=[b('<h2 style="text-align:center;">JS String and Array method</h2><h4>String</h4><p>String length</p><p>String charAt()</p><p>String charCodeAt()</p><p>String at()</p><p>String [ ]</p><p>String slice()</p><p>String toUpperCase()</p><p>String toLowerCase()</p><p>String concat()</p><p>String trim()</p><p>String trimStart()</p><p>String trimEnd()</p><p>String padStart()</p><p>String padEnd()</p><p>String repeat()</p><p>String replace()</p><p>String split()</p><p>String indexOf()</p><p>String lastIndexOf()</p><p>String search()</p><p>String match()</p><p>String matchAll()</p><p>String includes()</p><p>String startsWith()</p><p>String endsWith()</p><h4>Array</h4><p>Array length</p><p>Array toString()</p><p>Array at()</p><p>Array join()</p><p>Array pop()</p><p>Array push()</p><p>Array shift()</p><p>Array unshift()</p><p>Array concat()</p><p>Array copyWithin()</p><p>Array flat()</p><p>Array splice()</p><p>Array toSpliced()</p><p>Array slice()</p><p>Array indexOf()</p><p>Array lastIndexOf()</p><p>Array includes()</p><p>Array find()</p><p>Array findIndex()</p><p>Array findLast()</p><p>Array findLastIndex()</p><p>Array sort()</p><p>Array reverse()</p><p>Array toSorted()</p><p>Array toReversed()</p><p>Math.min()</p><p>Math.max()</p><p>Array forEach</p><p>Array map()</p><p>Array flatMap()</p><p>Array filter()</p><p>Array reduce()</p><p>Array reduceRight()</p><p>Array every()</p><p>Array some()</p><p>Array from()</p><p>Array keys()</p><p>Array values()</p><p>Array entries()</p><p>Array with()</p><p>Array Spread (...)</p>',69)]))}const I=d(R,[["render",E]]),N={},P={class:"container"};function T(u,r){const i=A("highlight");return e(),p("div",P,[r[3]||(r[3]=t("h2",{style:{"text-align":"center"}},"JSAlgorithm",-1)),r[4]||(r[4]=t("p",null,"1.fibonacci",-1)),o((e(),p("pre",null,r[0]||(r[0]=[l("            ",-1),t("code",{class:"code"},`
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

            `,-1),l(`
        `,-1)]))),[[i]]),r[5]||(r[5]=t("p",null,"2.difference",-1)),o((e(),p("pre",null,r[1]||(r[1]=[l("            ",-1),t("code",{class:"code"},`
function difference(...args) {
    let arrTarget = args[0]
    args.forEach((arr, index) => {
        if (index != 0) {
            arrTarget = arrTarget.filter((item) => {
                if (!arr.includes(item)) {
                    return item
                }
            })
        }
    })
    return arrTarget
}
            `,-1),l(`
        `,-1)]))),[[i]]),r[6]||(r[6]=t("p",null,"3.prime",-1)),o((e(),p("pre",null,r[2]||(r[2]=[l("            ",-1),t("code",{class:"code"},`
function showPrimes(n) {
    let arr = []
    for (let i = 2; i < n; i++) {
        let flag = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false
                break
            }
        }
        if (flag) {
            arr.push(i)
        }
    }
    return arr
}
            `,-1),l(`
        `,-1)]))),[[i]])])}const V=d(N,[["render",T]]),L={class:"wrap"},W={class:"content"},D={style:{display:"flex","justify-content":"flex-end"}},H={style:{"scrollbar-width":"thin","overflow-y":"auto"}},G={__name:"Article",setup(u){const r=w(),i=y(null),a=y({article:"JS2022"}),s=y(null);return x(()=>{const c=r.currentRoute.value.query.article;c&&(a.value.article=c,s.value.setAttribute("show",""))}),(c,n)=>(e(),p("div",{class:"article-container",onClick:n[5]||(n[5]=(...S)=>{var v,h;return((v=i.value)==null?void 0:v.hideMenu)&&((h=i.value)==null?void 0:h.hideMenu(...S))})},[m(J,{ref_key:"headerRef",ref:i},null,512),t("div",L,[t("div",W,[t("div",{class:"article-box",onClick:n[0]||(n[0]=()=>{a.value.article="JS2022",s.value.setAttribute("show","")})}," JS2022 "),t("div",{class:"article-box",onClick:n[1]||(n[1]=()=>{a.value.article="JS2024",s.value.setAttribute("show","")})}," JS2024 "),t("div",{class:"article-box",onClick:n[2]||(n[2]=()=>{a.value.article="JSStringAndArrayMethod",s.value.setAttribute("show","")})}," JS String And Array Method "),t("div",{class:"article-box",onClick:n[3]||(n[3]=()=>{a.value.article="JSAlgorithm",s.value.setAttribute("show","")})}," JS Algorithm "),t("w-modal",{ref_key:"modalRef",ref:s,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[t("div",D,[t("w-btn",{type:"text",onClick:n[4]||(n[4]=S=>s.value.removeAttribute("show"))},n[6]||(n[6]=[t("w-icon",{name:"xmark",color:"#666"},null,-1)]))]),t("div",H,[a.value.article==="JS2022"?(e(),f(_,{key:0})):g("",!0),a.value.article==="JS2024"?(e(),f(B,{key:1})):g("",!0),a.value.article==="JSStringAndArrayMethod"?(e(),f(I,{key:2})):g("",!0),a.value.article==="JSAlgorithm"?(e(),f(V,{key:3})):g("",!0)])],512)])]),m(k)]))}},z=d(G,[["__scopeId","data-v-77e72d27"]]);export{z as default};
