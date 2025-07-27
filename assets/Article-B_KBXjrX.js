import{n as g,a as t,c as s,d as e,w as p,i as n,k as v,u as b,r as _,o as x,b as S,q as u,j as h,p as $,e as w}from"./index-DzU3K3Uf.js";import{_ as d,H as k}from"./Header-BtqttPDS.js";import{F as J}from"./Footer-DKqyyBFz.js";/* empty css                                                                            */const j={},M={class:"container"},C=e("h2",{style:{"text-align":"center"}},"JS2022 some update",-1),q=e("h3",null,"1. String/Array method at(index)",-1),O=e("p",null," [1,2,3].at(-1) // 3 ",-1),B=e("p",null," 'abc'.at(1) // 'b' ",-1),I=e("h3",null,"2. Object.hasOwn(obj, propKey)",-1),R=e("p",null," like in, don't search __proto__, just search self。 ",-1),F=e("h3",null,"3. Private methods field",-1),E=e("code",{class:"code"},`class A {
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
                `,-1);function N(o,c){const r=g("highlight");return t(),s("div",M,[C,q,O,B,I,R,F,e("p",null,[p((t(),s("pre",null,[n("                "),E,n(`
            `)])),[[r]])])])}const P=d(j,[["render",N]]),T={},V={class:"container"},L=e("h2",{style:{"text-align":"center"}},"JS2024 some update",-1),W=e("p",null,"1.Object.groupBy()",-1),D=e("p",null,"2.Map.groupBy()",-1),H=e("code",{class:"code"},`
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
                `,-1);function G(o,c){const r=g("highlight");return t(),s("div",V,[L,W,D,e("p",null,[p((t(),s("pre",null,[n("                "),H,n(`
            `)])),[[r]])])])}const K=d(T,[["render",G]]),Q={},U={class:"container"},z=v('<h2 style="text-align:center;">JS String and Array method</h2><h4>String</h4><p>String length</p><p>String charAt()</p><p>String charCodeAt()</p><p>String at()</p><p>String [ ]</p><p>String slice()</p><p>String toUpperCase()</p><p>String toLowerCase()</p><p>String concat()</p><p>String trim()</p><p>String trimStart()</p><p>String trimEnd()</p><p>String padStart()</p><p>String padEnd()</p><p>String repeat()</p><p>String replace()</p><p>String split()</p><p>String indexOf()</p><p>String lastIndexOf()</p><p>String search()</p><p>String match()</p><p>String matchAll()</p><p>String includes()</p><p>String startsWith()</p><p>String endsWith()</p><h4>Array</h4><p>Array length</p><p>Array toString()</p><p>Array at()</p><p>Array join()</p><p>Array pop()</p><p>Array push()</p><p>Array shift()</p><p>Array unshift()</p><p>Array concat()</p><p>Array copyWithin()</p><p>Array flat()</p><p>Array splice()</p><p>Array toSpliced()</p><p>Array slice()</p><p>Array indexOf()</p><p>Array lastIndexOf()</p><p>Array includes()</p><p>Array find()</p><p>Array findIndex()</p><p>Array findLast()</p><p>Array findLastIndex()</p><p>Array sort()</p><p>Array reverse()</p><p>Array toSorted()</p><p>Array toReversed()</p><p>Math.min()</p><p>Math.max()</p><p>Array forEach</p><p>Array map()</p><p>Array flatMap()</p><p>Array filter()</p><p>Array reduce()</p><p>Array reduceRight()</p><p>Array every()</p><p>Array some()</p><p>Array from()</p><p>Array keys()</p><p>Array values()</p><p>Array entries()</p><p>Array with()</p><p>Array Spread (...)</p>',69),X=[z];function Y(o,c){return t(),s("div",U,X)}const Z=d(Q,[["render",Y]]),ee={},te={class:"container"},ne=e("h2",{style:{"text-align":"center"}},"JSAlgorithm",-1),re=e("p",null,"1.fibonacci",-1),ie=e("code",{class:"code"},`
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

            `,-1),se=e("p",null,"2.difference",-1),ae=e("code",{class:"code"},`
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
            `,-1),oe=e("p",null,"3.prime",-1),le=e("code",{class:"code"},`
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
            `,-1),pe=e("p",null,"4.least common mutiple",-1),ce=e("code",{class:"code"},`
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
            `,-1),de=e("p",null,"5.pairwise",-1),ue=e("code",{class:"code"},`
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
            `,-1);function he(o,c){const r=g("highlight");return t(),s("div",te,[ne,re,p((t(),s("pre",null,[n("            "),ie,n(`
        `)])),[[r]]),se,p((t(),s("pre",null,[n("            "),ae,n(`
        `)])),[[r]]),oe,p((t(),s("pre",null,[n("            "),le,n(`
         `)])),[[r]]),pe,p((t(),s("pre",null,[n("            "),ce,n(`
        `)])),[[r]]),de,p((t(),s("pre",null,[n("            "),ue,n(`
        `)])),[[r]])])}const fe=d(ee,[["render",he]]),_e=o=>($("data-v-62c1befc"),o=o(),w(),o),ge={class:"wrap"},ye={class:"content"},Ae={style:{display:"flex","justify-content":"flex-end"}},me=_e(()=>e("w-icon",{name:"xmark",color:"#666"},null,-1)),Se=[me],ve={style:{"scrollbar-width":"thin","overflow-y":"auto"}},be={__name:"Article",setup(o){const c=b(),r=_(null),a=_({article:"JS2022"}),l=_(null);return x(()=>{const f=c.currentRoute.value.query.article;f&&(a.value.article=f,l.value.setAttribute("show",""))}),(f,i)=>(t(),s("div",{class:"article-container",onClick:i[5]||(i[5]=(...y)=>{var A,m;return((A=r.value)==null?void 0:A.hideMenu)&&((m=r.value)==null?void 0:m.hideMenu(...y))})},[S(k,{ref_key:"headerRef",ref:r},null,512),e("div",ge,[e("div",ye,[e("div",{class:"article-box",onClick:i[0]||(i[0]=()=>{a.value.article="JS2022",l.value.setAttribute("show","")})}," JS2022 "),e("div",{class:"article-box",onClick:i[1]||(i[1]=()=>{a.value.article="JS2024",l.value.setAttribute("show","")})}," JS2024 "),e("div",{class:"article-box",onClick:i[2]||(i[2]=()=>{a.value.article="JSStringAndArrayMethod",l.value.setAttribute("show","")})}," JS String And Array Method "),e("div",{class:"article-box",onClick:i[3]||(i[3]=()=>{a.value.article="JSAlgorithm",l.value.setAttribute("show","")})}," JS Algorithm "),e("w-modal",{ref_key:"modalRef",ref:l,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[e("div",Ae,[e("w-btn",{type:"text",onClick:i[4]||(i[4]=y=>l.value.removeAttribute("show"))},Se)]),e("div",ve,[a.value.article==="JS2022"?(t(),u(P,{key:0})):h("",!0),a.value.article==="JS2024"?(t(),u(K,{key:1})):h("",!0),a.value.article==="JSStringAndArrayMethod"?(t(),u(Z,{key:2})):h("",!0),a.value.article==="JSAlgorithm"?(t(),u(fe,{key:3})):h("",!0)])],512)])]),S(J)]))}},Je=d(be,[["__scopeId","data-v-62c1befc"]]);export{Je as default};
