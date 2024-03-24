import{r as p,o as H,g as ae,a as o,c as l,d as e,t as s,F as v,h as C,i as t,j as se,k as ie,p as A,l as L,m as q,n as de,w as u,q as m,u as ce,b as re,s as G}from"./index-21PoJlb3.js";import{_ as T,H as ue}from"./Header-B3TCVtJm.js";const M="/default.png",c=h=>(A("data-v-d11938ce"),h=h(),L(),h),pe={class:"wcp-demo-container"},me={class:"demo-row"},he=["disabled"],we=["disabled"],ve={class:"demo-row"},be=c(()=>e("w-input",{placeholder:"username",style:{"margin-right":"10px","margin-bottom":"10px"}},null,-1)),ge=c(()=>e("w-input",{type:"password",style:{"margin-right":"10px","margin-bottom":"10px"},placeholder:"password"},null,-1)),fe=c(()=>e("w-input",{type:"date",value:"2024-01-01",style:{"margin-right":"10px","margin-bottom":"10px"}},null,-1)),ye=c(()=>e("w-input",{type:"time",value:"00:00",style:{"margin-right":"10px","margin-bottom":"10px"}},null,-1)),_e=["value"],xe=c(()=>e("w-input",{type:"number",style:{width:"80px","margin-right":"10px","margin-bottom":"10px"},min:"0",placeholder:"age"},null,-1)),ke=["value"],Ce=c(()=>e("optgroup",{label:"Gender"},[e("option",{value:"1"},"male"),e("option",{value:"2"},"female"),e("option",{value:"3",disabled:""},"other")],-1)),je=[Ce],We=["value"],$e={class:"demo-row"},Se=["value"],ze=c(()=>e("w-radio",{value:"1"},"male",-1)),Ae=c(()=>e("w-radio",{value:"2"},"female",-1)),Le=c(()=>e("w-radio",{disabled:"",value:"3"},"other",-1)),qe=[ze,Ae,Le],Te={class:"demo-row"},Me=["value"],Ee={class:"demo-row"},Be={class:"demo-row"},Ie=["value"],Re=["value"],De={class:"demo-row"},Fe=["value"],Pe=c(()=>e("w-tab",{value:"tab1"},"tab1",-1)),Ge=c(()=>e("w-tab",{value:"tab2"},"tab2",-1)),He=c(()=>e("w-tab",{value:"tab3",disabled:""},"tab3",-1)),Ne=[Pe,Ge,He],Ve={class:"demo-row"},Ue=q('<div slot="header" data-v-d11938ce>header</div><div slot="body" style="display:flex;flex-direction:column;overflow:hidden;" data-v-d11938ce><div data-v-d11938ce>body</div><div style="overflow-y:auto;" data-v-d11938ce><div style="height:400px;" data-v-d11938ce>scroll</div></div></div><div slot="footer" data-v-d11938ce><div style="display:flex;width:100%;justify-content:center;" data-v-d11938ce> footer </div></div>',3),Oe=[Ue],Je={class:"demo-row"},Ke={style:{position:"relative"}},Qe=["show"],Xe=c(()=>e("w-menu-item",{style:{"border-top":"1px solid #ddd"},disabled:""},"menu c",-1)),Ye={class:"demo-row"},Ze=c(()=>e("w-btn",null,"upload",-1)),et=[Ze],tt=c(()=>e("w-btn",null,"accept multiple",-1)),ot=[tt],lt=c(()=>e("w-upload",{url:"/api/upload",disabled:""},[e("w-btn",{disabled:""},"disabled")],-1)),nt={class:"demo-row"},at={style:{"background-color":"#fff","margin-top":"10px"}},st=["columns"],it=c(()=>e("w-table-item",{style:{"background-color":"black",color:"#fff"}},"name",-1)),dt=c(()=>e("w-table-item",{style:{"background-color":"rgb(190, 15, 15)",color:"#fff"}},"age",-1)),ct=c(()=>e("w-table-item",{style:{"background-color":"rgb(59, 60, 153)",color:"#fff"}},"interest",-1)),rt=[it,dt,ct],ut={style:{height:"100px","overflow-y":"auto"}},pt=["columns"],mt=c(()=>e("div",{class:"demo-row"},[e("w-player",{style:{width:"400px",height:"260px","max-width":"100%"},src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"})],-1)),ht=c(()=>e("div",{class:"demo-row"},[e("w-slide",{style:{width:"400px",height:"300px","max-width":"100%"},auto:""},[e("w-slide-item",{style:{"background-color":"#000",color:"#fff"}},[e("div",{item:"1",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}}," 1 ")]),e("w-slide-item",{style:{"background-color":"#333",color:"#fff"}},[e("div",{item:"2",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}}," 2 ")]),e("w-slide-item",{style:{"background-color":"#666",color:"#fff"}},[e("div",{item:"3",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}}," 3 ")])])],-1)),wt={class:"demo-row"},vt={style:{width:"400px",height:"300px","max-width":"100%"}},bt={style:{display:"flex",height:"100%"}},gt={style:{height:"100%"},src:M,"lazy-src":"/bg.png"},ft={class:"demo-row"},yt={style:{display:"flex"}},_t={style:{display:"inline-flex",height:"100%",width:"100%"}},xt=c(()=>e("img",{style:{height:"100%"},src:M},null,-1)),kt={class:"demo-row"},Ct={style:{display:"flex","flex-direction":"column"}},jt={style:{display:"inline-flex"}},Wt=c(()=>e("img",{style:{width:"100%"},src:M},null,-1)),$t=[Wt],St=c(()=>e("div",{slot:"loading",style:{"text-align":"center"}},"loading",-1)),zt={__name:"WebComponentsPlusDemo",setup(h){const n=p(""),b=p("#1abc8c"),g=p("1"),a=p("like football"),w=p("1"),y=p("on"),W=p(["apple","banana","orange"]),f=p([]),S=p([]),_=p("tab1"),E=p(null),z=p(null),B=p(null),x=p(null),$=p(.2),I=p([{name:"jason",age:18,interest:"football"}]);for(let i=0;i<100;i++)I.value.push({name:"jason",age:18,interest:"football"});const R=p("100px 100px 1fr"),D=p([{}]),F=p([{}]);function V(i){b.value=i.detail.value,se.initColor(b.value)}function U(i){g.value=i.detail.value}function O(i){a.value=i.detail.value}function J(i){w.value=i.detail.value}function K(i){let d=i.target.getAttribute("value");if(i.target.hasAttribute("checked"))f.value.push(d);else{let r=f.value.filter((k,No)=>k!=d);f.value.length=0,f.value.push(...r)}}function Q(i){i.target.hasAttribute("checked")?(f.value.length=0,S.value.forEach(d=>{d.setAttribute("checked",""),f.value.push(d.getAttribute("value"))})):(f.value.length=0,S.value.forEach(d=>{d.removeAttribute("checked")}))}function X(i){y.value=i.detail.value}function Y(i){console.log("tabs change",i.detail.value),_.value=i.detail.value}function Z(i){z.value.setAttribute("show","")}function ee(i){B.value.setAttribute("show","")}function te(i){x.value=x.value==""?null:""}function oe(){ie("delete?",i=>{E.value.show("success")})}function le(){D.value.push({})}function ne(){F.value.push({})}async function P(i){console.log(i.detail)}return H(()=>{}),ae(()=>{}),(i,d)=>(o(),l("div",pe,[e("div",me,[e("w-btn",{style:{"margin-right":"10px"},onClick:d[0]||(d[0]=r=>n.value=n.value==""?null:"")},"default"),e("w-btn",{style:{"margin-right":"10px"},type:"outline",disabled:n.value},"outline",8,he),e("w-btn",{type:"text",disabled:n.value},"text",8,we)]),e("div",ve,[be,ge,fe,ye,e("w-input",{type:"color",value:b.value,onChange:V,style:{width:"40px",height:"35px","margin-right":"10px","margin-bottom":"10px"}},null,40,_e),xe,e("w-select",{value:g.value,onChange:U,style:{"margin-right":"10px","margin-bottom":"10px"}},je,40,ke),e("w-textarea",{value:a.value,onChange:O},null,40,We),e("div",null,s(a.value),1)]),e("div",$e,[e("w-radios",{value:w.value,onChange:J},qe,40,Se),e("div",null,s(w.value),1)]),e("div",Te,[(o(!0),l(v,null,C(W.value,r=>(o(),l("w-checkbox",{ref_for:!0,ref_key:"checkboxRef",ref:S,value:r,onChange:d[1]||(d[1]=k=>K(k))},s(r),41,Me))),256)),e("w-checkbox",{onChange:Q},"all",32),e("div",null,s(f.value),1)]),e("div",Ee,[e("w-toggle",{on:"",onChange:X},null,32),e("div",null,s(y.value),1)]),e("div",Be,[e("w-heart",{value:$.value,onChange:d[2]||(d[2]=r=>{$.value=r.detail.value,console.log(r.detail.value)})},null,40,Ie),e("w-heart",{disabled:"",value:$.value},null,8,Re),e("div",null,s($.value),1)]),e("div",De,[e("w-tabs",{value:_.value,onChange:Y},Ne,40,Fe),e("div",null,[_.value=="tab1"?(o(),l(v,{key:0},[t(" tab1 ")],64)):_.value=="tab2"?(o(),l(v,{key:1},[t(" tab2 ")],64)):_.value=="tab3"?(o(),l(v,{key:2},[t(" tab3 ")],64)):(o(),l(v,{key:3},[],64))])]),e("div",Ve,[e("w-btn",{onClick:Z},"modal"),e("w-btn",{onClick:ee,style:{margin:"0 10px"}},"dialog"),e("w-btn",{onClick:oe},"confirm"),e("w-msg",{ref_key:"msg",ref:E},null,512),e("w-modal",{ref_key:"modal",ref:z},[e("div",null,[e("w-btn",{onClick:d[3]||(d[3]=r=>z.value.removeAttribute("show"))},"hide")])],512),e("w-dialog",{ref_key:"dialog",ref:B},Oe,512)]),e("div",Je,[e("div",Ke,[e("w-btn",{onClick:te},"menu"),e("w-menu",{show:x.value,style:{top:"40px",left:"0"}},[e("w-menu-item",{onClick:d[4]||(d[4]=r=>x.value=null)},"item a"),e("w-menu-item",{onClick:d[5]||(d[5]=r=>x.value=null)},"item b"),Xe],8,Qe)])]),e("div",Ye,[e("w-upload",{onChange:d[6]||(d[6]=r=>P(r)),url:"/api/upload"},et,32),e("w-upload",{style:{margin:"0 10px"},onChange:d[7]||(d[7]=r=>P(r)),url:"/api/upload",accept:".png,.jpg",multiple:"",name:"img"},ot,32),lt]),e("div",nt,[e("div",at,[e("div",null,[e("w-table-row",{columns:R.value},rt,8,st)]),e("div",ut,[(o(!0),l(v,null,C(I.value,r=>(o(),l("w-table-row",{columns:R.value,hover:""},[e("w-table-item",null,s(r.name),1),e("w-table-item",null,s(r.age),1),e("w-table-item",null,s(r.interest),1)],8,pt))),256))])])]),mt,ht,e("div",wt,[e("w-lazy-loading",vt,[e("div",bt,[(o(),l(v,null,C([1,2,3],r=>e("img",gt)),64))])])]),e("div",ft,[e("w-scroll-loading",{style:{width:"400px",height:"300px","max-width":"100%"},onChange:le},[e("div",yt,[(o(!0),l(v,null,C(D.value,(r,k)=>(o(),l("div",_t,[xt,t(" "+s(k),1)]))),256))])],32)]),e("div",kt,[e("w-scroll-loading",{style:{width:"400px",height:"300px","max-width":"100%","flex-direction":"column"},onChange:ne},[e("div",Ct,[(o(!0),l(v,null,C(F.value,r=>(o(),l("div",jt,$t))),256))]),St],32)])]))}},At=T(zt,[["__scopeId","data-v-d11938ce"]]),j=h=>(A("data-v-d7647eff"),h=h(),L(),h),Lt={class:"wcp-doc-container"},qt={style:{"overflow-x":"auto","scrollbar-width":"none"}},Tt=["value"],Mt=q('<w-tab value="install" data-v-d7647eff>install</w-tab><w-tab value="w-btn" data-v-d7647eff>w-btn</w-tab><w-tab value="w-input" data-v-d7647eff>w-input</w-tab><w-tab value="w-select" data-v-d7647eff>w-select</w-tab><w-tab value="w-textarea" data-v-d7647eff>w-textarea</w-tab><w-tab value="w-radio" data-v-d7647eff>w-radio w-radios</w-tab><w-tab value="w-checkbox" data-v-d7647eff>w-checkbox</w-tab><w-tab value="w-toggle" data-v-d7647eff>w-toggle</w-tab><w-tab value="w-tab" data-v-d7647eff>w-tab w-tabs</w-tab><w-tab value="w-msg" data-v-d7647eff>w-msg</w-tab><w-tab value="w-modal" data-v-d7647eff>w-modal</w-tab><w-tab value="w-dialog" data-v-d7647eff>w-dialog</w-tab><w-tab value="confirm" data-v-d7647eff>Confirm</w-tab><w-tab value="w-menu" data-v-d7647eff>w-menu w-menu-item</w-tab><w-tab value="w-lazy-loading" data-v-d7647eff>w-lazy-loading</w-tab>',15),Et=[Mt],Bt=j(()=>e("h3",null,"npm",-1)),It=j(()=>e("code",null,"npm install web-components-plus",-1)),Rt=j(()=>e("code",null,`import { Core, WBtn } from 'web-components-plus'

Core.initColor()
`,-1)),Dt=j(()=>e("h3",null,"browser",-1)),Ft=j(()=>e("code",null,`import { Core, WBtn } from 'https://unpkg.com/web-components-plus@1/main.js'

Core.initColor()
`,-1)),Pt={key:1},Gt={key:2},Ht={key:3},Nt={key:4},Vt={key:5},Ut={key:6},Ot={key:7},Jt={key:8},Kt={key:9},Qt={key:10},Xt={key:11},Yt={key:12},Zt={key:13},eo={key:14},to=["value"],oo={key:0},lo={style:{"overflow-x":"auto","scrollbar-width":"none"}},no=["value"],ao=q('<w-tab value="w-upload" data-v-d7647eff>w-upload</w-tab><w-tab value="w-table-row" data-v-d7647eff>w-table-row w-table-item</w-tab><w-tab value="w-player" data-v-d7647eff>w-player</w-tab><w-tab value="w-scroll-loading" data-v-d7647eff>w-scroll-loading</w-tab><w-tab value="w-heart" data-v-d7647eff>w-heart</w-tab><w-tab value="fetch" data-v-d7647eff>fetch</w-tab>',6),so=[ao],io={key:0},co={key:1},ro={key:2},uo={key:3},po={key:4},mo={key:5},ho=`// js
<html>
    <body>
        <w-btn>default</w-btn>
        <w-btn type="outline">outline</w-btn>
        <w-btn type="text">outline</w-btn>
        <script type="module">
            import { WBtn } from 'https://unpkg.com/web-components-plus@1/main.js'

        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WBtn } from 'web-components-plus'

    const btnType = ref('outline')
    function changeBtn(e) {
        btnType.value = btnType.value == 'outline' ? 'text' : 'outline'
    }
<\/script>
<template>
    <w-btn @click="changeBtn" :type="btnType">default</w-btn>
</template>`,wo=`// js
<html>
    <body>
        <w-input value="text" id="text1"></w-input>
        <script type="module">
            import { WInput } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#text1').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WInput } from 'web-components-plus'

    const value = ref('')
    function change(e) {
        value.value = e.detail.value
    }
<\/script>
<template>
    <w-input :value="value" @change="change($event)"></w-input>
</template>`,vo=`// js
<html>
    <body>
        <w-select value="2" id="select">
            <optgroup label="Gender">
                <option value="1">male</option>
                <option value="2">female</option>
                <option value="3" disabled>other</option>
            </optgroup>
        </w-select>
        <script type="module">
            import { WSelect } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#select').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
    <\/script>
    </body>
</html>
// vue
<script setup>
    import { WSelect } from 'web-components-plus'
    
    const value = ref('1')
    function change(e) {
        value.value = e.detail.value
    }
<\/script>
<template>
    <w-select :value="value"  @change="change($event)">
        <optgroup label="Gender">
            <option value="1">male</option>
            <option value="2">female</option>
            <option value="3" disabled>other</option>
        </optgroup>
    </w-select>
</template>`,bo=`// js
<html>
    <body>
        <w-textarea value="text" id="text"></w-textarea>
        <script type="module">
            import { WTextarea } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#text').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WTextarea } from 'web-components-plus'

    const value = ref('')
    function change(e) {
        value.value = e.detail.value
    }
<\/script>
<template>
    <w-textarea :value="value" @change="change($event)"></w-textarea>
</template>
`,go=`// js
<html>
    <body>
        <w-radios value="2" id="radios" >
            <w-radio value="1">male</w-radio>
            <w-radio value="2">female</w-radio>
            <w-radio value="3" disabled>other</w-radio>
        </w-radios>
        <script type="module">
            import { WRadio, WRadios } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#radios').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WRadio, WRadios } from 'web-components-plus'

    const radio = ref('2')
    function changeRadio(e) {
        radio.value = e.detail.value
    }
<\/script>
<template>
    <w-radios :value="radio" @change="changeRadio">
        <w-radio value="1">male</w-radio>
        <w-radio value="2">female</w-radio>
        <w-radio disabled value="3">other</w-radio>
    </w-radios>
</template>`,fo=`// js
<html>
    <body>
        <w-checkbox class="fruit" value="apple">apple</w-checkbox>
        <w-checkbox class="fruit" value="banana">banana</w-checkbox>
        <w-checkbox class="fruit" value="orange">orange</w-checkbox>
        <w-checkbox id="checkall">all</w-checkbox>
        <script type="module">
            import { WCheckbox } from 'https://unpkg.com/web-components-plus@1/main.js'
            
            document.querySelector('#checkall').addEventListener('change',(e)=>{
                if(document.querySelector('#checkall').hasAttribute('checked')){
                    document.querySelectorAll('.fruit').forEach((item)=>{
                        item.setAttribute('checked', '')
                    })
                }else{
                    document.querySelectorAll('.fruit').forEach((item)=>{
                        item.removeAttribute('checked')
                    })
                }
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WCheckbox } from 'web-components-plus'

    const checkboxList = ref(['apple', 'banana', 'orange'])
    const checkbox = ref([])
    function changeCheckbox(e) {
        let value = e.target.getAttribute('value')
        if (e.target.hasAttribute('checked')) {
            checkbox.value.push(value)
        } else {
            let arr = checkbox.value.filter((item, index)=>{return item != value})
            checkbox.value.length = 0
            checkbox.value.push(...arr)
        }
    }
<\/script>
<template>
    <w-checkbox v-for="item in checkboxList" :value="item" @change="changeCheckbox($event)">
        {{ item }}
    </w-checkbox>
</template>`,yo=`// js
<html>
    <body>
        <w-toggle id="toggle"></w-toggle>
        <script type="module">
            import { WToggle } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#toggle').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WToggle } from 'web-components-plus'

    const value = ref('on')
    function change(e) {
        value.value = e.detail.value
    }
<\/script>
<template>
    <w-toggle on @change="change"></w-toggle>
</template>`,_o=`// js
<html>
    <body>
        <w-tabs value="tab1" id="tabs">
            <w-tab value="tab1">tab1</w-tab>
            <w-tab value="tab2">tab2</w-tab>
            <w-tab value="tab3" disabled>tab3</w-tab>
            <w-tab value="tab4" style="width: 200px;">tab4</w-tab>
        </w-tabs>
        <div id="view"></div>
        <script type="module">
            import { WTab, WTabs } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#tabs').addEventListener('change',(e)=>{
                console.log(e.detail.value)
                view.innerHTML = e.detail.value + ' content'
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WTab, WTabs } from 'web-components-plus'

    const value = ref('tab1')
    function change(e) {
        console.log(e.detail.value)
        value.value = e.detail.value
    }
<\/script>
<template>
    <w-tabs :value="value" @change="change">
        <w-tab value="tab1">tab1</w-tab>
        <w-tab value="tab2">tab2</w-tab>
        <w-tab value="tab3" disabled>tab3</w-tab>
    </w-tabs>
</template>`,xo=`// js
<html>
    <body>
        <w-msg id="msg"></w-msg>
        <script type="module">
            import { WMsg } from 'https://unpkg.com/web-components-plus@1/main.js'

            // method 1
            document.querySelector('#msg').show('error message','error')
            // method 2
            const MSG = WMsg.init()
            MSG.show('default message')
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WMsg } from 'web-components-plus'

    // method 1
    const msg = ref(null)
    msg.value.show('message')
    // method 2
    const MSG = WMsg.init()
    MSG.show('message')
<\/script>
<template>
    <w-msg ref="msg"></w-msg>
</template>`,ko=`// js
<html>
    <body>
        <w-btn id="btn">show</w-btn>
        <w-modal width="100px" height="100px" id="modal">
            <div>
                <w-btn onclick="document.querySelector('#modal').removeAttribute('show')">hide</w-btn>
            </div>
        </w-modal>
        <script type="module">
            import { WBtn, WModal } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#btn').addEventListener('click', (e)=>{
                document.querySelector('#modal').setAttribute('show','')
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WBtn, WModal } from 'web-components-plus'

    const modal = ref(null)
    function showModal(e) {
        modal.value.setAttribute('show', '')
    }
<\/script>
<template>
    <w-btn @click="showModal"></w-btn>
    <w-modal ref="modal">
        <div>
            <w-btn @click="modal.removeAttribute('show')">hide</w-btn>
        </div>
    </w-modal>
</template>`,Co=`// js
<html>
    <body>
        <w-btn id="btn">show</w-btn>
        <w-dialog id="dialog">
            <div slot="header">header</div>
            <div slot="body" style="display: flex; flex-direction: column; overflow: hidden;">
                <div>body</div>
                <div style="overflow-y: auto;">
                    <div style="height: 400px;">scroll</div>
                </div>
            </div>
            <div slot="footer">
                <div style="display: flex; width: 100%; justify-content: center;">
                    footer
                </div>
            </div>
        </w-dialog>
        <script type="module">
            import { WBtn, WDialog } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#btn').addEventListener('click', (e) => {
                document.querySelector('#dialog').setAttribute('show', '')
            })

        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WBtn, WDialog } from 'web-components-plus'

    const dialog = ref(null)

    function showDialog(e) {
        dialog.value.setAttribute('show', '')
    }

<\/script>
<template>
    <w-btn @click="showDialog">show</w-btn>
    <w-dialog ref="dialog">
        <div slot="header">header</div>
        <div slot="body" style="display: flex; flex-direction: column; overflow: hidden;">
            <div>body</div>
            <div style="overflow-y: auto;">
                <div style="height: 400px;">scroll</div>
            </div>
        </div>
        <div slot="footer">
            <div style="display: flex; width: 100%; justify-content: center;">
                footer
            </div>
        </div>
    </w-dialog>
</template>`,jo=`// js
<html>
    <body>
        <w-btn id="btn">show</w-btn>
        <script type="module">
            import { Confirm } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#btn').addEventListener('click', (e) => {
                Confirm('delete ?', () => {
                    console.log('delete success ...', e.target)
                })
            })

        <\/script>
    </body>
</html>
// vue
<script setup>
    import { Confirm } from 'web-components-plus'

    function showConfirm() {
        Confirm('delete?', (e) => {
            console.log('success')
        })
    }

<\/script>
<template>
    <w-btn @click="showConfirm">confirm</w-btn>
</template>`,Wo=`// js
<html>
    <body>
        <div style="position: relative;">
            <w-btn onclick="document.querySelector('#menu').toggleAttribute('show')">bottom</w-btn>
            <w-menu id="menu" show style="top:40px; left: 0;">
                <w-menu-item onclick="document.querySelector('#menu').toggleAttribute('show')">item a</w-menu-item>
                <w-menu-item onclick="document.querySelector('#menu').toggleAttribute('show')">item b</w-menu-item>
                <w-menu-item style="border-top: 1px solid #ddd;" disabled>menu c</w-menu-item>
            </w-menu>
        </div>
    </body>
    <script type="module">
        import { WBtn, WMenu, WMenuItem } from 'https://unpkg.com/web-components-plus@1/main.js'
        
    <\/script>
</html>
// vue
<script setup>
    import { WBtn, WMenu, WMenuItem } from 'web-components-plus'
    
    const isShow = ref('')
    function menuToggle(e) {
        isShow.value = isShow.value == '' ? null : ''
    }
<\/script>
<template>
    <div style="position: relative;">
        <w-btn @click="menuToggle">bottom</w-btn>
        <w-menu :show=isShow style="top:40px; left:0;">
            <w-menu-item @click="isShow = null">item a</w-menu-item>
            <w-menu-item @click="isShow = null">item b</w-menu-item>
            <w-menu-item style="border-top: 1px solid #ddd;" disabled>menu c</w-menu-item>
        </w-menu>
    </div>
</template>`,$o=`// js
<html>
<body>
    <w-lazy-loading style="width: 300px; height: 300px;">
        <div class="list1">
            <img style="height:100%;" src="default.png" lazy-src="lazy.png" />
            <img style="height:100%;" src="default.png" lazy-src="lazy.png" />
            <img style="height:100%;" src="default.png" lazy-src="lazy.png" />
            <img style="height:100%;" src="default.png" lazy-src="lazy.png" />
        </div>
    </w-lazy-loading>
    <script type="module">
            import { WLazyLoading } from 'https://unpkg.com/web-components-plus@1/main.js'

    <\/script>
</body>
</html>
// vue
<script setup>
    import { WLazyLoading } from 'web-components-plus'

<\/script>
<template>
    <w-lazy-loading style="width: 300px; height: 300px;">
        <div style="display:flex; height:100%;">
            <img v-for="i in [1, 2, 3]" style="height:100%;" src="/default.png" lazy-src="/lazy.png" />
        </div>
    </w-lazy-loading>
</template>`,So=`// js
<html>
    <body>
        <w-upload id="upload" url="http://localhost:3000/upload" accept=".png,.jpg" name="img">
            <button>accept multiple</button>
        </w-upload>
        <script type="module">
            import { WUpload } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#upload').addEventListener('change', (e) => {
                console.log(e.detail)
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WUpload } from 'web-components-plus'

    async function upload(e) {
	    console.log(e.detail)
    }

<\/script>
<template>
    <w-upload @change="upload" url="/api/upload" accept=".png,.jpg" name="img">
        <w-btn>accept multiple</w-btn>
    </w-upload>
</template>`,zo=`// js
<html>
    <body>
        <div style="background-color: #fff; margin-top: 10px;">
            <w-table-row columns="100px 100px 1fr">
                <w-table-item style="background-color: black; color:#fff">name</w-table-item>
                <w-table-item style="background-color: rgb(190, 15, 15); color:#fff">age</w-table-item>
                <w-table-item style="background-color: rgb(59, 60, 153); color:#fff">interest</w-table-item>
            </w-table-row>
            <div style="height: 100px; overflow-y: auto;">
                <w-table-row columns="100px 100px 1fr" hover>
                    <w-table-item>jason</w-table-item>
                    <w-table-item>18</w-table-item>
                    <w-table-item>football</w-table-item>
                </w-table-row>
                <w-table-row columns="100px 100px 1fr" hover>
                    <w-table-item>jason</w-table-item>
                    <w-table-item>18</w-table-item>
                    <w-table-item>football</w-table-item>
                </w-table-row>
            </div>
        </div>
        <script type="module">
            import { WTableRow, WTableItem } from 'https://unpkg.com/web-components-plus@1/main.js'

        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WTableRow, WTableItem } from 'web-components-plus'

    const data = ref([
        { name: 'jason', age: 18, interest: 'football' },
        { name: 'jason', age: 18, interest: 'football' },
    ])
    const columns = ref("100px 100px 1fr")

<\/script>
<template>
    <div style="background-color: #fff;margin-top: 10px;">
        <w-table-row :columns="columns">
            <w-table-item style="background-color: black; color:#fff">name</w-table-item>
            <w-table-item style="background-color: rgb(190, 15, 15); color:#fff">age</w-table-item>
            <w-table-item style="background-color: rgb(59, 60, 153); color:#fff">interest</w-table-item>
        </w-table-row>
        <div style="height: 100px; overflow-y: auto;">
            <w-table-row v-for="item in data" :columns=columns hover>
                <w-table-item>{{ item.name }}</w-table-item>
                <w-table-item>{{ item.age }}</w-table-item>
                <w-table-item>{{ item.interest }}</w-table-item>
            </w-table-row>
        </div>
    </div>
</template>`,Ao=`// js
<html>
<body>
    <w-player style="width: 400px; height: 300px;" src="player.mp4" poster="player.jpg"></w-player>
    <script  type="module">
        import { WPlayer } from 'https://unpkg.com/web-components-plus@1/main.js'

    <\/script>
</body>
</html>
// vue
<script setup>
    import { WPlayer } from 'web-components-plus'

<\/script>
<template>
    <w-player style="width: 400px; height: 300px;" src="player.mp4" poster="player.jpg"></w-player>
</template>`,Lo=`// js
<html>
<body>
    <w-scroll-loading style="width: 300px; height: 300px; flex-direction: column;" id="scroll2">
        <div id="list2" style="display: flex; flex-direction: column;">
            <div class="item">
                <img style="width: 100%;" src="default.png" />
            </div>
        </div>
        <div slot="loading" style="text-align: center;">loading</div>
    </w-scroll-loading>
    <script  type="module">
        import { WScrollLoading } from 'https://unpkg.com/web-components-plus@1/main.js'

        document.querySelector('#scroll').addEventListener('change', (e) => {
            // loadDate
            document.querySelector('#list').innerHTML += \`<div class="item"><img style="height:100%;" src="default.png" /></div>\`
        })
    <\/script>
</body>
</html>
// vue
<script setup>
    import { WScrollLoading } from 'web-components-plus'

    const list = ref([{}])
    function loading() {
        list.value.push({})
    }
<\/script>
<template>
    <w-scroll-loading style="width: 300px; height: 300px; flex-direction: column;" @change="loading">
        <div style="display: flex; flex-direction: column;">
            <div style="display: inline-flex;" v-for="i in list">
                <img style="width: 100%;" src="/default.png" />
            </div>
        </div>
        <div slot="loading" style="text-align: center;">loading</div>
    </w-scroll-loading>
</template>`,qo=`// js
<html>
    <body>
        <w-heart id="heart" value="0"></w-heart>
        <script type="module">
            import { WHeart } from 'https://unpkg.com/web-components-plus@1/main.js'

            document.querySelector('#heart').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>
// vue
<script setup>
    import { WHeart } from 'web-components-plus'

    const value = ref(0)
    function change(e) {
        value.value = e.detail.value
    }
<\/script>
<template>
    <w-heart :value="value" @change="change"></w-heart>
</template>`,To=`// js
<html>
<body>
    <script type="module">
        import { Fetch } from 'https://unpkg.com/web-components-plus@1/main.js'

        Fetch.setOptions({ headers: { authorization: 'auth' } })
        Fetch.get({
            url:'url'
        }).then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
        })

        let res = await Fetch.post({url:'url', data:{}})
        let result = await res.json()
        console.log(result)
    <\/script>
</body>
</html>
// vue
<script setup>
    import { Fetch } from 'web-components-plus'

    Fetch.setOptions({ headers: { authorization: 'auth' } })
        Fetch.get({
            url:'url'
        }).then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
        })

        let res = await Fetch.post({url:'url', data:{}})
        let result = await res.json()
        console.log(result)
<\/script>`,Mo={__name:"WebComponentsPlusDoc",setup(h){const n=p({code:"",base:"install",highComponent:"w-player"});return H(b=>{}),(b,g)=>{const a=de("highlight");return o(),l("div",Lt,[e("div",qt,[e("w-tabs",{style:{width:"max-content",display:"block"},value:n.value.base,onChange:g[0]||(g[0]=w=>{n.value.base=w.detail.value})},Et,40,Tt)]),e("div",null,[n.value.base=="install"?(o(),l(v,{key:0},[Bt,u((o(),l("pre",null,[t("                        "),It,t(`
                        `),Rt,t(`
                `)])),[[a]]),Dt,u((o(),l("pre",null,[t("                        "),Ft,t(`
                `)])),[[a]])],64)):m("",!0),n.value.base=="w-btn"?u((o(),l("pre",Pt,[t("                        "),e("code",null,s(ho)),t(`
| attr | value |
| --- | --- |
| type | default/outline/text |
| color | default/success/error/warning |
| size | default/sm/lg |
| disabled | boolean |
                    `)])),[[a]]):m("",!0),n.value.base=="w-input"?u((o(),l("pre",Gt,[t("                        "),e("code",null,s(wo)),t(`
| attr | value |
| --- | --- |
| type | text/password/date/time/color/number/range |
| value | string |
| placeholder | string |
| min/max | string |
| size | sm (default) lg |
| disabled | boolean |
| error | boolean |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.base=="w-select"?u((o(),l("pre",Ht,[t("                        "),e("code",null,s(vo)),t(`
| attr | value |
| --- | --- |
| value | string |
| size | sm (default) lg |
| disabled | boolean |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.base=="w-textarea"?u((o(),l("pre",Nt,[t("                        "),e("code",null,s(bo)),t(`
| attr | value |
| --- | --- |
| value | string |
| placeholder | string |
| size | sm (default) lg |
| disabled | boolean |
| error | boolean |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.base=="w-radio"?u((o(),l("pre",Vt,[t("                        "),e("code",null,s(go)),t(`
| attr | value |
| --- | --- |
| value | string |
| size | default/sm/lg |
| disabled | boolean |
| checked | boolean |

| attr | value |
| --- | --- |
| value | string |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.base=="w-checkbox"?u((o(),l("pre",Ut,[t("                        "),e("code",null,s(fo)),t(`
| attr | value |
| --- | --- |
| value | string |
| checked | boolean |
| size | sm (default) lg |
| disabled | boolean |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.base=="w-toggle"?u((o(),l("pre",Ot,[t("                        "),e("code",null,s(yo)),t(`
| attr | value |
| --- | --- |
| on | boolean |
| size | sm (default) lg |
| disabled | boolean |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.base=="w-tab"?u((o(),l("pre",Jt,[t("                        "),e("code",null,s(_o)),t(`
| attr | value |
| --- | --- |
| active | boolean |
| disabled | boolean |

| attr | value |
| --- | --- |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.base=="w-msg"?u((o(),l("pre",Kt,[t("                        "),e("code",null,s(xo)),t(`
| attr | value |
| --- | --- |
| type | (default) outline |
| position | (top) bottom |
| delay | number (2000) |

| method | value |
| --- | --- |
| show | content: string, color: success error warning, delay: number |
                    `)])),[[a]]):m("",!0),n.value.base=="w-modal"?u((o(),l("pre",Qt,[t("                        "),e("code",null,s(ko)),t(`
| attr | value |
| --- | --- |
| width | string |
| height | string |
| show | boolean |
                    `)])),[[a]]):m("",!0),n.value.base=="w-dialog"?u((o(),l("pre",Xt,[t("                        "),e("code",null,s(Co)),t(`
| attr | value |
| --- | --- |
| width | string |
| height | string |
| show | boolean |
                    `)])),[[a]]):m("",!0),n.value.base=="confirm"?u((o(),l("pre",Yt,[t("                        "),e("code",null,s(jo)),t(`
| method | value |
| --- | --- |
| Confirm | content:string, callback:function, option={ok: 'ok',cancel: 'cancel'} |
                    `)])),[[a]]):m("",!0),n.value.base=="w-menu"?u((o(),l("pre",Zt,[t("                        "),e("code",null,s(Wo)),t(`
| attr | value |
| --- | --- |
| show | boolean |

| attr | value |
| --- | --- |
| disabled | boolean |
                    `)])),[[a]]):m("",!0),n.value.base=="w-lazy-loading"?u((o(),l("pre",eo,[t("                        "),e("code",null,s($o)),t(`
| attr | value |
| --- | --- |
                    `)])),[[a]]):m("",!0)]),e("w-input",{style:{width:"300px"},placeholder:"input code show more",value:n.value.code,onChange:g[1]||(g[1]=w=>{n.value.code=w.detail.value})},null,40,to),n.value.code=="js"?(o(),l("div",oo,[e("div",lo,[e("w-tabs",{style:{display:"block",width:"max-content"},value:n.value.highComponent,onChange:g[2]||(g[2]=w=>{n.value.highComponent=w.detail.value})},so,40,no)]),e("div",null,[n.value.highComponent=="w-table-row"?u((o(),l("pre",io,[t("                        "),e("code",null,s(zo)),t(`
| attr | value |
| --- | --- |
| columns | string |
| hover | boolean |
| sticky | boolean |
| bordered | boolean |
| selected | boolean |

| attr | value |
| --- | --- |
| row | string |
| column | string |
                    `)])),[[a]]):m("",!0),n.value.highComponent=="w-upload"?u((o(),l("pre",co,[t("                        "),e("code",null,s(So)),t(`
| attr | value |
| --- | --- |
| url | string |
| name | string |
| accept | string |
| auth | string |
| multiple | boolean |
| disabled | boolean |
| change | event |
                    `)])),[[a]]):m("",!0),n.value.highComponent=="w-player"?u((o(),l("pre",ro,[t("                        "),e("code",null,s(Ao)),t(`
| attr | value |
| --- | --- |
| src | string |
| poster | string |

| method | value |
| --- | --- |
| play |  |
| pause |  |
                    `)])),[[a]]):n.value.highComponent=="w-scroll-loading"?u((o(),l("pre",uo,[t("                        "),e("code",null,s(Lo)),t(`
| attr | value |
| --- | --- |
| change | event |
                    `)])),[[a]]):n.value.highComponent=="w-heart"?u((o(),l("pre",po,[t("                        "),e("code",null,s(qo)),t(`
| attr | value |
| --- | --- |
| value | number |
| disabled | boolean |
| size | sm (default) lg |
| change | event |
                    `)])),[[a]]):n.value.highComponent=="fetch"?u((o(),l("pre",mo,[t("                        "),e("code",null,s(To)),t(`
                    `)])),[[a]]):n.value.highComponent=="w-slide"?(o(),l(v,{key:6},[],64)):m("",!0)])])):m("",!0)])}}},Eo=T(Mo,[["__scopeId","data-v-d7647eff"]]),N=h=>(A("data-v-1d1d05f1"),h=h(),L(),h),Bo={class:"wrap"},Io={class:"content"},Ro=["value"],Do=N(()=>e("w-tab",{value:"doc"},"doc",-1)),Fo=N(()=>e("w-tab",{value:"demo"},"demo",-1)),Po=[Do,Fo],Go={class:"tab-content"},Ho={__name:"WebComponentsPlus",setup(h){ce();const n=p(null),b=p({tab:"doc"});return(g,a)=>(o(),l("div",{class:"wcp-container",onClick:a[1]||(a[1]=(...w)=>{var y,W;return((y=n.value)==null?void 0:y.hideMenu)&&((W=n.value)==null?void 0:W.hideMenu(...w))})},[re(ue,{ref_key:"headerRef",ref:n},null,512),e("div",Bo,[e("div",Io,[e("w-tabs",{value:b.value.tab,onChange:a[0]||(a[0]=w=>{b.value.tab=w.detail.value})},Po,40,Ro),e("div",Go,[b.value.tab=="demo"?(o(),G(At,{key:0})):m("",!0),b.value.tab=="doc"?(o(),G(Eo,{key:1})):m("",!0)])])])]))}},Oo=T(Ho,[["__scopeId","data-v-1d1d05f1"]]);export{Oo as default};
