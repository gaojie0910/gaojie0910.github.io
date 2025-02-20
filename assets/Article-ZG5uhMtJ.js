import{m as g,a as t,c as s,d as e,w as p,h as n,j as v,u as x,r as f,o as b,b as S,n as h,i as u,p as $,e as w}from"./index-CS4aNSDC.js";import{_ as d,H as J}from"./Header-BF2rWTQx.js";import{F as k}from"./Footer-DJI7IZh0.js";/* empty css                                                                             */const j={},M={class:"container"},C=e("h2",{style:{"text-align":"center"}},"JS2022 some update",-1),I=e("h3",null,"1. String/Array method at(index)",-1),R=e("p",null," [1,2,3].at(-1) // 3 ",-1),L=e("p",null," 'abc'.at(1) // 'b' ",-1),F=e("h3",null,"2. Object.hasOwn(obj, propKey)",-1),O=e("p",null," like in, don't search __proto__, just search self。 ",-1),E=e("h3",null,"3. Private methods field",-1),N=e("code",{class:"code"},`class A {
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
                `,-1);function P(a,c){const r=g("highlight");return t(),s("div",M,[C,I,R,L,F,O,E,e("p",null,[p((t(),s("pre",null,[n("                "),N,n(`
            `)])),[[r]])])])}const T=d(j,[["render",P]]),V={},B={class:"container"},W=e("h2",{style:{"text-align":"center"}},"JS2023 some update",-1),D=e("p",null,"add some array methods, do not change origin array, just return an new array.",-1),H=e("p",null,"1.toReversed()",-1),q=e("p",null,"2.toSorted()",-1),K=e("p",null,"3.toSpliced(start, deleteCount, item1, item2,...)",-1),U=e("p",null,"4.width(index,value) just like [index] = value",-1),z=e("p",null,"other methods",-1),G=e("p",null,"1.findLast()",-1),Q=e("p",null,"2.findLastIndex()",-1),X=e("code",{class:"code"},`
const target = [1,2,3,2,1].findLast((item,index)=>{return item > 1 })
const index = [1,2,3,2,1].findLastIndex((item,index)=>{return item > 1 })
                `,-1);function Y(a,c){const r=g("highlight");return t(),s("div",B,[W,D,H,q,K,U,z,G,Q,e("p",null,[p((t(),s("pre",null,[n("                "),X,n(`
            `)])),[[r]])])])}const Z=d(V,[["render",Y]]),ee={},te={class:"container"},ne=v('<h2 style="text-align:center;">JS String and Array method</h2><h4>String</h4><p>String length</p><p>String charAt()</p><p>String charCodeAt()</p><p>String at()</p><p>String [ ]</p><p>String slice()</p><p>String toUpperCase()</p><p>String toLowerCase()</p><p>String concat()</p><p>String trim()</p><p>String trimStart()</p><p>String trimEnd()</p><p>String padStart()</p><p>String padEnd()</p><p>String repeat()</p><p>String replace()</p><p>String split()</p><p>String indexOf()</p><p>String lastIndexOf()</p><p>String search()</p><p>String match()</p><p>String matchAll()</p><p>String includes()</p><p>String startsWith()</p><p>String endsWith()</p><h4>Array</h4><p>Array length</p><p>Array toString()</p><p>Array at()</p><p>Array join()</p><p>Array pop()</p><p>Array push()</p><p>Array shift()</p><p>Array unshift()</p><p>Array concat()</p><p>Array copyWithin()</p><p>Array flat()</p><p>Array splice()</p><p>Array toSpliced()</p><p>Array slice()</p><p>Array indexOf()</p><p>Array lastIndexOf()</p><p>Array includes()</p><p>Array find()</p><p>Array findIndex()</p><p>Array findLast()</p><p>Array findLastIndex()</p><p>Array sort()</p><p>Array reverse()</p><p>Array toSorted()</p><p>Array toReversed()</p><p>Math.min()</p><p>Math.max()</p><p>Array forEach</p><p>Array map()</p><p>Array flatMap()</p><p>Array filter()</p><p>Array reduce()</p><p>Array reduceRight()</p><p>Array every()</p><p>Array some()</p><p>Array from()</p><p>Array keys()</p><p>Array values()</p><p>Array entries()</p><p>Array with()</p><p>Array Spread (...)</p>',69),re=[ne];function ie(a,c){return t(),s("div",te,re)}const se=d(ee,[["render",ie]]),oe={},ae={class:"container"},le=e("h2",{style:{"text-align":"center"}},"JSAlgorithm",-1),pe=e("p",null,"1.fibonacci",-1),ce=e("code",{class:"code"},`
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

            `,-1),de=e("p",null,"2.difference",-1),he=e("code",{class:"code"},`
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
            `,-1),ue=e("p",null,"3.prime",-1),_e=e("code",{class:"code"},`
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
            `,-1),fe=e("p",null,"4.least common mutiple",-1),ge=e("code",{class:"code"},`
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
            `,-1),me=e("p",null,"5.pairwise",-1),Ae=e("code",{class:"code"},`
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
            `,-1);function ye(a,c){const r=g("highlight");return t(),s("div",ae,[le,pe,p((t(),s("pre",null,[n("            "),ce,n(`
        `)])),[[r]]),de,p((t(),s("pre",null,[n("            "),he,n(`
        `)])),[[r]]),ue,p((t(),s("pre",null,[n("            "),_e,n(`
         `)])),[[r]]),fe,p((t(),s("pre",null,[n("            "),ge,n(`
        `)])),[[r]]),me,p((t(),s("pre",null,[n("            "),Ae,n(`
        `)])),[[r]])])}const Se=d(oe,[["render",ye]]),ve=a=>($("data-v-59b1b326"),a=a(),w(),a),xe={class:"wrap"},be={class:"content"},$e={style:{display:"flex","justify-content":"flex-end"}},we=ve(()=>e("w-icon",{name:"xmark",color:"#666"},null,-1)),Je=[we],ke={style:{"scrollbar-width":"thin","overflow-y":"auto"}},je={__name:"Article",setup(a){const c=x(),r=f(null),o=f({article:"JS2022"}),l=f(null);return b(()=>{const _=c.currentRoute.value.query.article;_&&(o.value.article=_,l.value.setAttribute("show",""))}),(_,i)=>(t(),s("div",{class:"article-container",onClick:i[5]||(i[5]=(...m)=>{var A,y;return((A=r.value)==null?void 0:A.hideMenu)&&((y=r.value)==null?void 0:y.hideMenu(...m))})},[S(J,{ref_key:"headerRef",ref:r},null,512),e("div",xe,[e("div",be,[e("div",{class:"article-box",onClick:i[0]||(i[0]=()=>{o.value.article="JS2022",l.value.setAttribute("show","")})}," JS2022 "),e("div",{class:"article-box",onClick:i[1]||(i[1]=()=>{o.value.article="JS2023",l.value.setAttribute("show","")})}," JS2023 "),e("div",{class:"article-box",onClick:i[2]||(i[2]=()=>{o.value.article="JSStringAndArrayMethod",l.value.setAttribute("show","")})}," JS String And Array Method "),e("div",{class:"article-box",onClick:i[3]||(i[3]=()=>{o.value.article="JSAlgorithm",l.value.setAttribute("show","")})}," JS Algorithm "),e("w-modal",{ref_key:"modalRef",ref:l,width:"min(calc(100% - 10px),1000px)",height:"min(calc(100% - 10px),800px)"},[e("div",$e,[e("w-btn",{type:"text",onClick:i[4]||(i[4]=m=>l.value.removeAttribute("show"))},Je)]),e("div",ke,[o.value.article==="JS2022"?(t(),h(T,{key:0})):u("",!0),o.value.article==="JS2023"?(t(),h(Z,{key:1})):u("",!0),o.value.article==="JSStringAndArrayMethod"?(t(),h(se,{key:2})):u("",!0),o.value.article==="JSAlgorithm"?(t(),h(Se,{key:3})):u("",!0)])],512)])]),S(k)]))}},Le=d(je,[["__scopeId","data-v-59b1b326"]]);export{Le as default};
