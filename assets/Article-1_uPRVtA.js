import{m as _,a as e,c as s,d as t,w as c,h as n,j as v,u as x,r as g,o as b,b as S,n as u,i as h,p as $,e as w}from"./index-CcX7sXY_.js";import{_ as d,H as J}from"./Header-Dcseaihf.js";import{F as k}from"./Footer-BRvQgzKV.js";/* empty css                                                                            */const j={},M={class:"container"},C=t("h2",{style:{"text-align":"center"}},"JS2022 some update",-1),I=t("h3",null,"1. String/Array method at(index)",-1),O=t("p",null," [1,2,3].at(-1) // 3 ",-1),R=t("p",null," 'abc'.at(1) // 'b' ",-1),q=t("h3",null,"2. Object.hasOwn(obj, propKey)",-1),B=t("p",null," like in, don't search __proto__, just search self。 ",-1),L=t("h3",null,"3. Private methods field",-1),F=t("code",{class:"code"},`class A {
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
                `,-1);function E(a,p){const r=_("highlight");return e(),s("div",M,[C,I,O,R,q,B,L,t("p",null,[c((e(),s("pre",null,[n("                "),F,n(`
            `)])),[[r]])])])}const N=d(j,[["render",E]]),P={},T={class:"container"},V=t("h2",{style:{"text-align":"center"}},"JS2023 some update",-1),W=t("p",null,"add some array methods, do not change origin array, just return an new array.",-1),D=t("p",null,"1.toReversed()",-1),H=t("p",null,"2.toSorted()",-1),G=t("p",null,"3.toSpliced(start, deleteCount, item1, item2,...)",-1),K=t("p",null,"4.width(index,value) just like [index] = value",-1),Q=t("p",null,"other methods",-1),U=t("p",null,"1.findLast()",-1),z=t("p",null,"2.findLastIndex()",-1),X=t("code",{class:"code"},`
const target = [1,2,3,2,1].findLast((item,index)=>{return item > 1 })
const index = [1,2,3,2,1].findLastIndex((item,index)=>{return item > 1 })
                `,-1);function Y(a,p){const r=_("highlight");return e(),s("div",T,[V,W,D,H,G,K,Q,U,z,t("p",null,[c((e(),s("pre",null,[n("                "),X,n(`
            `)])),[[r]])])])}const Z=d(P,[["render",Y]]),tt={},et={class:"container"},nt=t("h2",{style:{"text-align":"center"}},"JS2024 some update",-1),rt=t("p",null,"1.Object.groupBy()",-1),it=t("p",null,"2.Map.groupBy()",-1),st=t("code",{class:"code"},`
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
                `,-1);function ot(a,p){const r=_("highlight");return e(),s("div",et,[nt,rt,it,t("p",null,[c((e(),s("pre",null,[n("                "),st,n(`
            `)])),[[r]])])])}const at=d(tt,[["render",ot]]),lt={},ct={class:"container"},pt=v('<h2 style="text-align:center;">JS String and Array method</h2><h4>String</h4><p>String length</p><p>String charAt()</p><p>String charCodeAt()</p><p>String at()</p><p>String [ ]</p><p>String slice()</p><p>String toUpperCase()</p><p>String toLowerCase()</p><p>String concat()</p><p>String trim()</p><p>String trimStart()</p><p>String trimEnd()</p><p>String padStart()</p><p>String padEnd()</p><p>String repeat()</p><p>String replace()</p><p>String split()</p><p>String indexOf()</p><p>String lastIndexOf()</p><p>String search()</p><p>String match()</p><p>String matchAll()</p><p>String includes()</p><p>String startsWith()</p><p>String endsWith()</p><h4>Array</h4><p>Array length</p><p>Array toString()</p><p>Array at()</p><p>Array join()</p><p>Array pop()</p><p>Array push()</p><p>Array shift()</p><p>Array unshift()</p><p>Array concat()</p><p>Array copyWithin()</p><p>Array flat()</p><p>Array splice()</p><p>Array toSpliced()</p><p>Array slice()</p><p>Array indexOf()</p><p>Array lastIndexOf()</p><p>Array includes()</p><p>Array find()</p><p>Array findIndex()</p><p>Array findLast()</p><p>Array findLastIndex()</p><p>Array sort()</p><p>Array reverse()</p><p>Array toSorted()</p><p>Array toReversed()</p><p>Math.min()</p><p>Math.max()</p><p>Array forEach</p><p>Array map()</p><p>Array flatMap()</p><p>Array filter()</p><p>Array reduce()</p><p>Array reduceRight()</p><p>Array every()</p><p>Array some()</p><p>Array from()</p><p>Array keys()</p><p>Array values()</p><p>Array entries()</p><p>Array with()</p><p>Array Spread (...)</p>',69),dt=[pt];function ut(a,p){return e(),s("div",ct,dt)}const ht=d(lt,[["render",ut]]),_t={},ft={class:"container"},gt=t("h2",{style:{"text-align":"center"}},"JSAlgorithm",-1),yt=t("p",null,"1.fibonacci",-1),mt=t("code",{class:"code"},`
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

            `,-1),At=t("p",null,"2.difference",-1),St=t("code",{class:"code"},`
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
            `,-1),vt=t("p",null,"3.prime",-1),xt=t("code",{class:"code"},`
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
            `,-1),bt=t("p",null,"4.least common mutiple",-1),$t=t("code",{class:"code"},`
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
            `,-1),wt=t("p",null,"5.pairwise",-1),Jt=t("code",{class:"code"},`
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
            `,-1);function kt(a,p){const r=_("highlight");return e(),s("div",ft,[gt,yt,c((e(),s("pre",null,[n("            "),mt,n(`
        `)])),[[r]]),At,c((e(),s("pre",null,[n("            "),St,n(`
        `)])),[[r]]),vt,c((e(),s("pre",null,[n("            "),xt,n(`
         `)])),[[r]]),bt,c((e(),s("pre",null,[n("            "),$t,n(`
        `)])),[[r]]),wt,c((e(),s("pre",null,[n("            "),Jt,n(`
        `)])),[[r]])])}const jt=d(_t,[["render",kt]]),Mt=a=>($("data-v-bc795d92"),a=a(),w(),a),Ct={class:"wrap"},It={class:"content"},Ot={style:{display:"flex","justify-content":"flex-end"}},Rt=Mt(()=>t("w-icon",{name:"xmark",color:"#666"},null,-1)),qt=[Rt],Bt={style:{"scrollbar-width":"thin","overflow-y":"auto"}},Lt={__name:"Article",setup(a){const p=x(),r=g(null),o=g({article:"JS2022"}),l=g(null);return b(()=>{const f=p.currentRoute.value.query.article;f&&(o.value.article=f,l.value.setAttribute("show",""))}),(f,i)=>(e(),s("div",{class:"article-container",onClick:i[6]||(i[6]=(...y)=>{var m,A;return((m=r.value)==null?void 0:m.hideMenu)&&((A=r.value)==null?void 0:A.hideMenu(...y))})},[S(J,{ref_key:"headerRef",ref:r},null,512),t("div",Ct,[t("div",It,[t("div",{class:"article-box",onClick:i[0]||(i[0]=()=>{o.value.article="JS2022",l.value.setAttribute("show","")})}," JS2022 "),t("div",{class:"article-box",onClick:i[1]||(i[1]=()=>{o.value.article="JS2023",l.value.setAttribute("show","")})}," JS2023 "),t("div",{class:"article-box",onClick:i[2]||(i[2]=()=>{o.value.article="JS2024",l.value.setAttribute("show","")})}," JS2024 "),t("div",{class:"article-box",onClick:i[3]||(i[3]=()=>{o.value.article="JSStringAndArrayMethod",l.value.setAttribute("show","")})}," JS String And Array Method "),t("div",{class:"article-box",onClick:i[4]||(i[4]=()=>{o.value.article="JSAlgorithm",l.value.setAttribute("show","")})}," JS Algorithm "),t("w-modal",{ref_key:"modalRef",ref:l,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[t("div",Ot,[t("w-btn",{type:"text",onClick:i[5]||(i[5]=y=>l.value.removeAttribute("show"))},qt)]),t("div",Bt,[o.value.article==="JS2022"?(e(),u(N,{key:0})):h("",!0),o.value.article==="JS2023"?(e(),u(Z,{key:1})):h("",!0),o.value.article==="JS2024"?(e(),u(at,{key:2})):h("",!0),o.value.article==="JSStringAndArrayMethod"?(e(),u(ht,{key:3})):h("",!0),o.value.article==="JSAlgorithm"?(e(),u(jt,{key:4})):h("",!0)])],512)])]),S(k)]))}},Tt=d(Lt,[["__scopeId","data-v-bc795d92"]]);export{Tt as default};
