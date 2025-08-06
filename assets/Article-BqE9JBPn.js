import{n as A,c as a,d as t,b as r,w as o,i,g as b,r as y,o as x,u as w,a as h,m as f,j as g}from"./index-C8sXd1A-.js";import{_ as u,H as J}from"./Header-BsfHUTrn.js";import{F as k}from"./Footer-BwBWgLLo.js";/* empty css                                                                            */const j={},M={class:"container"};function $(d,n){const l=A("highlight");return t(),a("div",M,[n[1]||(n[1]=r("h2",{style:{"text-align":"center"}},"JS2022 some update",-1)),n[2]||(n[2]=r("h3",null,"1. String/Array method at(index)",-1)),n[3]||(n[3]=r("p",null," [1,2,3].at(-1) // 3 ",-1)),n[4]||(n[4]=r("p",null," 'abc'.at(1) // 'b' ",-1)),n[5]||(n[5]=r("h3",null,"2. Object.hasOwn(obj, propKey)",-1)),n[6]||(n[6]=r("p",null," like in, don't search __proto__, just search self。 ",-1)),n[7]||(n[7]=r("h3",null,"3. Private methods field",-1)),r("p",null,[o((t(),a("pre",null,n[0]||(n[0]=[i("                ",-1),r("code",{class:"code"},`class A {
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
                `,-1),i(`
            `,-1)]))),[[l]])])])}const C=u(j,[["render",$]]),O={},q={class:"container"};function B(d,n){const l=A("highlight");return t(),a("div",q,[n[1]||(n[1]=r("h2",{style:{"text-align":"center"}},"JS2024 some update",-1)),n[2]||(n[2]=r("p",null,"1.Object.groupBy()",-1)),n[3]||(n[3]=r("p",null,"2.Map.groupBy()",-1)),r("p",null,[o((t(),a("pre",null,n[0]||(n[0]=[i("                ",-1),r("code",{class:"code"},`
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
                `,-1),i(`
            `,-1)]))),[[l]])])])}const R=u(O,[["render",B]]),F={},E={class:"container"};function I(d,n){return t(),a("div",E,n[0]||(n[0]=[b('<h2 style="text-align:center;">JS String and Array method</h2><h4>String</h4><p>String length</p><p>String charAt()</p><p>String charCodeAt()</p><p>String at()</p><p>String [ ]</p><p>String slice()</p><p>String toUpperCase()</p><p>String toLowerCase()</p><p>String concat()</p><p>String trim()</p><p>String trimStart()</p><p>String trimEnd()</p><p>String padStart()</p><p>String padEnd()</p><p>String repeat()</p><p>String replace()</p><p>String split()</p><p>String indexOf()</p><p>String lastIndexOf()</p><p>String search()</p><p>String match()</p><p>String matchAll()</p><p>String includes()</p><p>String startsWith()</p><p>String endsWith()</p><h4>Array</h4><p>Array length</p><p>Array toString()</p><p>Array at()</p><p>Array join()</p><p>Array pop()</p><p>Array push()</p><p>Array shift()</p><p>Array unshift()</p><p>Array concat()</p><p>Array copyWithin()</p><p>Array flat()</p><p>Array splice()</p><p>Array toSpliced()</p><p>Array slice()</p><p>Array indexOf()</p><p>Array lastIndexOf()</p><p>Array includes()</p><p>Array find()</p><p>Array findIndex()</p><p>Array findLast()</p><p>Array findLastIndex()</p><p>Array sort()</p><p>Array reverse()</p><p>Array toSorted()</p><p>Array toReversed()</p><p>Math.min()</p><p>Math.max()</p><p>Array forEach</p><p>Array map()</p><p>Array flatMap()</p><p>Array filter()</p><p>Array reduce()</p><p>Array reduceRight()</p><p>Array every()</p><p>Array some()</p><p>Array from()</p><p>Array keys()</p><p>Array values()</p><p>Array entries()</p><p>Array with()</p><p>Array Spread (...)</p>',69)]))}const N=u(F,[["render",I]]),P={},T={class:"container"};function V(d,n){const l=A("highlight");return t(),a("div",T,[n[5]||(n[5]=r("h2",{style:{"text-align":"center"}},"JSAlgorithm",-1)),n[6]||(n[6]=r("p",null,"1.fibonacci",-1)),o((t(),a("pre",null,n[0]||(n[0]=[i("            ",-1),r("code",{class:"code"},`
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

            `,-1),i(`
        `,-1)]))),[[l]]),n[7]||(n[7]=r("p",null,"2.difference",-1)),o((t(),a("pre",null,n[1]||(n[1]=[i("            ",-1),r("code",{class:"code"},`
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
            `,-1),i(`
        `,-1)]))),[[l]]),n[8]||(n[8]=r("p",null,"3.prime",-1)),o((t(),a("pre",null,n[2]||(n[2]=[i("            ",-1),r("code",{class:"code"},`
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
            `,-1),i(`
         `,-1)]))),[[l]]),n[9]||(n[9]=r("p",null,"4.least common mutiple",-1)),o((t(),a("pre",null,n[3]||(n[3]=[i("            ",-1),r("code",{class:"code"},`
function getLCM(a, b) {
    if (a == 0 || b == 0) {
        return 0
    }
    if (a == b) {
        return a
    }
    let min = Math.max(a, b)
    let max = Math.min(a, b)
    let res = max
    while (res <= min * max) {
        if (res % min == 0) {
            return res
        }
        res += max
    }
}
            `,-1),i(`
        `,-1)]))),[[l]]),n[10]||(n[10]=r("p",null,"5.pairwise",-1)),o((t(),a("pre",null,n[4]||(n[4]=[i("            ",-1),r("code",{class:"code"},`
function pairwise(arr,num) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]+arr[j] == num){
                res ++
                arr[i] = undefined
                arr[j] = undefined
            }
        }
        
    }
    return res
}
            `,-1),i(`
        `,-1)]))),[[l]])])}const L=u(P,[["render",V]]),W={class:"wrap"},_={class:"content"},D={style:{display:"flex","justify-content":"flex-end"}},H={style:{"scrollbar-width":"thin","overflow-y":"auto"}},G={__name:"Article",setup(d){const n=w(),l=y(null),p=y({article:"JS2022"}),s=y(null);return x(()=>{const c=n.currentRoute.value.query.article;c&&(p.value.article=c,s.value.setAttribute("show",""))}),(c,e)=>(t(),a("div",{class:"article-container",onClick:e[5]||(e[5]=(...m)=>{var S,v;return((S=l.value)==null?void 0:S.hideMenu)&&((v=l.value)==null?void 0:v.hideMenu(...m))})},[h(J,{ref_key:"headerRef",ref:l},null,512),r("div",W,[r("div",_,[r("div",{class:"article-box",onClick:e[0]||(e[0]=()=>{p.value.article="JS2022",s.value.setAttribute("show","")})}," JS2022 "),r("div",{class:"article-box",onClick:e[1]||(e[1]=()=>{p.value.article="JS2024",s.value.setAttribute("show","")})}," JS2024 "),r("div",{class:"article-box",onClick:e[2]||(e[2]=()=>{p.value.article="JSStringAndArrayMethod",s.value.setAttribute("show","")})}," JS String And Array Method "),r("div",{class:"article-box",onClick:e[3]||(e[3]=()=>{p.value.article="JSAlgorithm",s.value.setAttribute("show","")})}," JS Algorithm "),r("w-modal",{ref_key:"modalRef",ref:s,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[r("div",D,[r("w-btn",{type:"text",onClick:e[4]||(e[4]=m=>s.value.removeAttribute("show"))},e[6]||(e[6]=[r("w-icon",{name:"xmark",color:"#666"},null,-1)]))]),r("div",H,[p.value.article==="JS2022"?(t(),f(C,{key:0})):g("",!0),p.value.article==="JS2024"?(t(),f(R,{key:1})):g("",!0),p.value.article==="JSStringAndArrayMethod"?(t(),f(N,{key:2})):g("",!0),p.value.article==="JSAlgorithm"?(t(),f(L,{key:3})):g("",!0)])],512)])]),h(k)]))}},X=u(G,[["__scopeId","data-v-62c1befc"]]);export{X as default};
