import{r as u,e as oe,o as P,f as ne,c as a,d as l,b as e,g as L,t as s,F as b,h as j,i as n,j as p,s as le,k as ae,l as ie,m as se,w as c,n as de,a as E,u as re}from"./index-Cw37sIuZ.js";import{_,H as ue}from"./Header-f5B-g6yP.js";import{F as ce}from"./Footer-vZxQ89pB.js";const me="/images/player.jpg",pe={class:"wcp-demo-container"},we={class:"demo-row"},be=["disabled"],ve=["disabled"],ge={class:"demo-row"},ye=["value"],he=["value"],fe=["value"],xe={class:"demo-row"},ke=["value"],Ce={class:"demo-row"},je=["value"],$e={class:"demo-row"},Se={class:"demo-row"},We=["value"],qe=["value"],Ae={class:"demo-row"},Ee=["color"],Le={class:"demo-row"},_e={slot:"header",style:{display:"flex","justify-content":"space-between"}},Me={class:"demo-row",style:{"flex-direction":"column"}},Re=["value"],Ie={class:"demo-row"},Te=["show"],Fe={class:"demo-row"},Be={class:"demo-row"},Pe={style:{"background-color":"#fff","margin-top":"10px",flex:"1"}},De=["columns"],ze={style:{height:"100px","overflow-y":"auto"}},Ne=["columns"],Ve={class:"demo-row"},Ge={style:{display:"flex"}},He={style:{display:"inline-flex",height:"100%",width:"100%"}},Ue={style:{display:"flex",width:"400px","background-color":"#000",color:"#fff"}},Oe={class:"demo-row"},Je={style:{display:"flex","flex-direction":"column"}},Ke={style:{display:"inline-flex",width:"100%"}},Qe={style:{height:"300px",width:"100%","background-color":"#000",color:"#fff"}},Xe={__name:"WebComponentsProIntroduction",setup(M){const i=u(""),g=u(oe.value.base),v=u("1"),y=u("like game"),h=u("1"),f=u("on"),x=u(["banana","orange"]),t=u([]),d=u([]),w=u("tab1"),$=u(null),W=u(null),q=u(null),A=u(null),k=u(null),S=u(.2),R=u([{name:"jason",age:18,interest:"game"}]);for(let r=0;r<100;r++)R.value.push({name:"jason",age:18,interest:"game"});const I=u("100px 100px 1fr"),T=u([{}]),F=u([{}]);function D(r){g.value=r.detail.value,le.initColor(g.value)}function z(r){v.value=r.detail.value[0]}function N(r){y.value=r.detail.value}function V(r){h.value=r.detail.value}function G(r){let o=r.target.getAttribute("value");if(r.target.hasAttribute("checked"))t.value.push(o);else{let m=t.value.filter((C,eo)=>C!=o);t.value.length=0,t.value.push(...m)}}function H(r){r.target.hasAttribute("checked")?(t.value.length=0,d.value.forEach(o=>{o.setAttribute("checked",""),t.value.push(o.getAttribute("value"))})):(t.value.length=0,d.value.forEach(o=>{o.removeAttribute("checked")}))}function U(r){f.value=r.detail.value}function O(r){w.value=r.detail.value}function J(r){W.value.setAttribute("show","")}function K(r){W.value.removeAttribute("show")}function Q(r){q.value.setAttribute("show","")}function X(r){q.value.removeAttribute("show")}function Y(r){A.value.setAttribute("show","")}function Z(){ae({content:"are you sure to ...",okCallback:()=>{$.value.show("click ok")},cancelCallback:()=>{$.value.show("click cancel ")}})}function ee(){T.value.push({})}function te(){F.value.push({})}async function B(r){console.log(r.detail)}return P(()=>{}),ne(()=>{}),(r,o)=>(l(),a("div",pe,[o[27]||(o[27]=e("div",{style:{padding:"20px","text-align":"center","font-size":"var(--fontSize-xxl)",color:"var(--color-base)"}}," The fast and mini web components library ",-1)),e("div",we,[e("w-btn",{onClick:o[0]||(o[0]=m=>i.value=i.value==""?null:"")},"default"),e("w-btn",{type:"outline",disabled:i.value},"outline",8,be),e("w-btn",{type:"text",disabled:i.value},"text",8,ve),o[7]||(o[7]=e("w-btn",{color:"success"},"success",-1)),o[8]||(o[8]=e("w-btn",{color:"danger"},"danger",-1)),o[9]||(o[9]=e("w-btn",{color:"warning"},"warning",-1))]),e("div",ge,[o[11]||(o[11]=L('<w-input placeholder="username" style="margin-right:10px;margin-bottom:10px;" data-v-1898179b><w-icon name="user" style="margin-left:10px;" color="#666" slot="pre" data-v-1898179b></w-icon></w-input><w-input type="password" style="margin-right:10px;margin-bottom:10px;" placeholder="password" data-v-1898179b><w-icon name="key" style="margin-left:10px;" color="#666" slot="pre" data-v-1898179b></w-icon></w-input><w-input type="date" value="2024-01-01" style="margin-right:10px;margin-bottom:10px;" data-v-1898179b></w-input><w-input type="time" value="00:00" style="margin-right:10px;margin-bottom:10px;" data-v-1898179b></w-input>',4)),e("w-input",{type:"color",value:g.value,onChange:D,style:{width:"40px",height:"35px","margin-right":"10px","margin-bottom":"10px"}},null,40,ye),o[12]||(o[12]=e("w-input",{type:"number",style:{width:"80px","margin-right":"10px","margin-bottom":"10px"},min:"0",placeholder:"age"},null,-1)),e("w-select",{value:v.value,onChange:z,style:{"margin-right":"10px","margin-bottom":"10px"}},o[10]||(o[10]=[e("optgroup",{label:"Gender"},[e("option",{value:"1"},"male"),e("option",{value:"2"},"female")],-1)]),40,he),e("w-textarea",{value:y.value,onChange:N},null,40,fe),e("div",null,s(y.value),1)]),e("div",xe,[e("w-radios",{value:h.value,onChange:V},o[13]||(o[13]=[e("w-radio",{value:"1"},"male",-1),e("w-radio",{value:"2"},"female",-1)]),40,ke),e("div",null,s(h.value),1)]),e("div",Ce,[(l(!0),a(b,null,j(x.value,m=>(l(),a("w-checkbox",{ref_for:!0,ref_key:"checkboxRef",ref:d,value:m,onChange:G},s(m),41,je))),256)),e("w-checkbox",{onChange:H},"all",32),e("div",null,s(t.value),1)]),e("div",$e,[e("w-toggle",{on:"",onChange:U},null,32),e("div",null,s(f.value),1)]),e("div",Se,[e("w-rating",{value:S.value,size:"30px",onChange:o[1]||(o[1]=m=>{S.value=m.detail.value,console.log(m.detail.value)})},null,40,We),e("w-rating",{disabled:"",value:S.value},null,8,qe),e("div",null,s(S.value),1)]),o[28]||(o[28]=e("div",{class:"demo-row",style:{gap:"10px"}},[e("w-icon"),e("w-icon",{name:"music"}),e("w-icon",{name:"github"}),e("w-icon",{name:"spinner",class:"spinner"})],-1)),e("div",Ae,[o[14]||(o[14]=e("w-progress",{percent:"10"},null,-1)),e("w-progress",{percent:"100",color:g.value},null,8,Ee)]),e("div",Le,[e("w-btn",{onClick:J},"modal"),e("w-btn",{onClick:Y,style:{margin:"0 10px"}},"dialog"),e("w-btn",{onClick:Z},"confirm"),e("w-msg",{ref_key:"msg",ref:$},null,512),e("w-modal",{ref_key:"modalRef",ref:W,position:"left",width:"250px",height:"100%"},[e("w-icon",{size:"30px",style:{position:"absolute",top:"0",right:"-30px","background-color":"#fff",cursor:"pointer"},name:"xmark",onClick:K}),e("div",{style:{display:"flex","flex-direction":"column","overflow-y":"auto"}},[e("img",{src:me,style:{width:"100%"},onClick:Q})])],512),e("w-modal",{ref_key:"modalRef2",ref:q},[e("div",{style:{display:"flex","justify-content":"flex-end"}},[e("w-btn",{type:"text",onClick:X},o[15]||(o[15]=[e("w-icon",{name:"xmark",color:"#666"},null,-1)]))]),o[16]||(o[16]=e("div",{style:{display:"flex",flex:"1",overflow:"hidden"}},[e("div",{style:{flex:"1",display:"flex",overflow:"hidden"}},[e("w-player",{style:{width:"400px",height:"260px","max-width":"100%","border-radius":"10px"},src:"/videos/player.mp4",poster:"/images/player.jpg"})]),e("div",{style:{width:"100px","padding-left":"10px",color:"#666"}},"玄武湖")],-1))],512),e("w-dialog",{ref_key:"dialog",ref:A},[e("div",_e,[o[18]||(o[18]=n("header",-1)),e("w-btn",{type:"text",onClick:o[2]||(o[2]=m=>A.value.removeAttribute("show"))},o[17]||(o[17]=[e("w-icon",{name:"xmark",color:"#888888"},null,-1)]))]),o[19]||(o[19]=L('<div slot="body" style="display:flex;flex-direction:column;overflow:hidden;" data-v-1898179b><div data-v-1898179b>body</div><div style="overflow-y:auto;" data-v-1898179b><div style="height:400px;" data-v-1898179b> scroll </div></div></div><div slot="footer" data-v-1898179b><div style="display:flex;width:100%;justify-content:center;" data-v-1898179b> footer </div></div>',2))],512)]),e("div",Me,[e("w-tabs",{value:w.value,onChange:O},o[20]||(o[20]=[e("w-tab",{value:"tab1"},"tab1",-1),e("w-tab",{value:"tab2"},"tab2",-1),e("w-tab",{value:"tab3",disabled:""},"tab3",-1)]),40,Re),e("div",null,[w.value=="tab1"?(l(),a(b,{key:0},[n(" tab1 ")],64)):w.value=="tab2"?(l(),a(b,{key:1},[n(" tab2 ")],64)):w.value=="tab3"?(l(),a(b,{key:2},[n(" tab3 ")],64)):p("",!0)])]),e("div",Ie,[e("div",{style:{position:"relative"},onPointerleave:o[6]||(o[6]=m=>{k.value=null})},[e("w-btn",{onPointerover:o[3]||(o[3]=()=>{k.value=""})},"menu",32),e("w-menu",{show:k.value,style:{top:"100%",left:"0","padding-top":"10px"}},[e("w-menu-item",{onClick:o[4]||(o[4]=m=>k.value=null)},"item a"),e("w-menu-item",{onClick:o[5]||(o[5]=m=>k.value=null)},"item b"),o[21]||(o[21]=e("w-menu-item",{style:{"border-top":"1px solid #ddd"},disabled:""},"menu c",-1))],8,Te)],32)]),e("div",Fe,[e("w-upload",{onChange:B,url:"/api/upload"},o[22]||(o[22]=[e("w-btn",null,"upload",-1)]),32),e("w-upload",{style:{margin:"0 10px"},onChange:B,url:"/api/upload",accept:".png,.jpg",multiple:"",name:"img"},o[23]||(o[23]=[e("w-btn",null,"accept multiple",-1)]),32),o[24]||(o[24]=e("w-upload",{url:"/api/upload",disabled:""},[e("w-btn",{disabled:""},"disabled")],-1))]),e("div",Be,[e("div",Pe,[e("div",null,[e("w-table-row",{columns:I.value},o[25]||(o[25]=[e("w-table-item",{style:{"background-color":"var(--color-base)",color:"#fff"}},"name",-1),e("w-table-item",{style:{"background-color":"var(--color-base)",color:"#fff"}},"age",-1),e("w-table-item",{style:{"background-color":"var(--color-base)",color:"#fff"}},"interest",-1)]),8,De)]),e("div",ze,[(l(!0),a(b,null,j(R.value,m=>(l(),a("w-table-row",{columns:I.value,hover:""},[e("w-table-item",null,s(m.name),1),e("w-table-item",null,s(m.age),1),e("w-table-item",null,s(m.interest),1)],8,Ne))),256))])])]),o[29]||(o[29]=e("div",{class:"demo-row"},[e("w-player",{style:{width:"400px",height:"260px","max-width":"100%","border-radius":"10px"},src:"/videos/player.mp4",poster:"/images/player.jpg"})],-1)),o[30]||(o[30]=e("div",{class:"demo-row"},[e("w-slide",{style:{display:"flex","flex-direction":"column",width:"400px",height:"300px","max-width":"100%","border-radius":"10px"},auto:""},[e("w-slide-item",{class:"slide-item"},[e("div",{item:"1",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}}," 1 ")]),e("w-slide-item",{class:"slide-item"},[e("div",{item:"2",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}}," 2 ")]),e("w-slide-item",{class:"slide-item"},[e("div",{item:"3",style:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"100%"}}," 3 ")])])],-1)),e("div",Ve,[e("w-scroll-loading",{style:{width:"400px",height:"300px","max-width":"100%"},onChange:ee},[e("div",Ge,[(l(!0),a(b,null,j(T.value,(m,C)=>(l(),a("div",He,[e("div",Ue,s(C),1)]))),256))])],32)]),e("div",Oe,[e("w-scroll-loading",{style:{width:"400px",height:"300px","max-width":"100%","flex-direction":"column"},onChange:te},[e("div",Je,[(l(!0),a(b,null,j(F.value,(m,C)=>(l(),a("div",Ke,[e("div",Qe,s(C),1)]))),256))]),o[26]||(o[26]=e("div",{slot:"loading",style:{"text-align":"center"}},[e("w-icon",{name:"spinner",class:"spinner"})],-1))],32)])]))}},Ye=_(Xe,[["__scopeId","data-v-1898179b"]]),Ze={class:"wcp-doc-container"},et={style:{"overflow-x":"auto","scrollbar-width":"thin"}},tt=["value"],ot={key:2},nt={key:3},lt={key:4},at={key:5},it={key:6},st={key:7},dt={key:8},rt={key:9},ut={style:{padding:"8px 0"}},ct={style:{display:"flex","flex-wrap":"wrap"}},mt=["onClick"],pt=["name"],wt={key:11},bt={key:12},vt={key:13},gt={key:14},yt={key:15},ht={key:16},ft={key:17},xt={key:18},kt={key:19},Ct={key:20},jt={key:21},$t={key:22},St={key:23},Wt=`<html>
    <body>
        <w-btn>default</w-btn>
        <w-btn type="outline">outline</w-btn>
        <w-btn type="text">outline</w-btn>
        <script type="module">
            import { WBtn } from 'https://unpkg.com/web-components-pro@1/main.js'

        <\/script>
    </body>
</html>`,qt=`<html>
    <body>
        <w-input value="text" id="text1"></w-input>
        <script type="module">
            import { WInput } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#text1').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>`,At=`<html>
    <body>
        <w-select value="2" id="select">
            <optgroup label="Gender">
                <option value="1">male</option>
                <option value="2">female</option>
                <option value="3" disabled>other</option>
            </optgroup>
        </w-select>
        <script type="module">
            import { WSelect } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#select').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
    <\/script>
    </body>
</html>`,Et=`<html>
    <body>
        <w-textarea value="text" id="text"></w-textarea>
        <script type="module">
            import { WTextarea } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#text').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>`,Lt=`<html>
    <body>
        <w-radios value="2" id="radios" >
            <w-radio value="1">male</w-radio>
            <w-radio value="2">female</w-radio>
            <w-radio value="3" disabled>other</w-radio>
        </w-radios>
        <script type="module">
            import { WRadio, WRadios } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#radios').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>`,_t=`<html>
    <body>
        <w-checkbox class="fruit" value="apple">apple</w-checkbox>
        <w-checkbox class="fruit" value="banana">banana</w-checkbox>
        <w-checkbox class="fruit" value="orange">orange</w-checkbox>
        <w-checkbox id="checkall">all</w-checkbox>
        <script type="module">
            import { WCheckbox } from 'https://unpkg.com/web-components-pro@1/main.js'
            
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
</html>`,Mt=`<html>
    <body>
        <w-toggle id="toggle"></w-toggle>
        <script type="module">
            import { WToggle } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#toggle').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>`,Rt=`<html>
    <body>
        <w-tabs value="tab1" id="tabs">
            <w-tab value="tab1">tab1</w-tab>
            <w-tab value="tab2">tab2</w-tab>
            <w-tab value="tab3" disabled>tab3</w-tab>
            <w-tab value="tab4" style="width: 200px;">tab4</w-tab>
        </w-tabs>
        <div id="view"></div>
        <script type="module">
            import { WTab, WTabs } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#tabs').addEventListener('change',(e)=>{
                console.log(e.detail.value)
                view.innerHTML = e.detail.value + ' content'
            })
        <\/script>
    </body>
</html>`,It=`<html>
    <body>
        <w-msg id="msg"></w-msg>
        <script type="module">
            import { WMsg } from 'https://unpkg.com/web-components-pro@1/main.js'

            // method 1
            document.querySelector('#msg').show('danger message','danger')
            // method 2
            const MSG = WMsg.init()
            MSG.show('default message')
        <\/script>
    </body>
</html>`,Tt=`<html>
    <body>
        <w-btn id="btn">show</w-btn>
        <w-modal width="100px" height="100px" id="modal">
            <div>
                <w-btn onclick="document.querySelector('#modal').removeAttribute('show')">hide</w-btn>
            </div>
        </w-modal>
        <script type="module">
            import { WBtn, WModal } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#btn').addEventListener('click', (e)=>{
                document.querySelector('#modal').setAttribute('show','')
            })
        <\/script>
    </body>
</html>`,Ft=`<html>
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
            import { WBtn, WDialog } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#btn').addEventListener('click', (e) => {
                document.querySelector('#dialog').setAttribute('show', '')
            })

        <\/script>
    </body>
</html>`,Bt=`<html>
    <body>
        <w-btn id="btn">show</w-btn>
        <script type="module">
            import { Confirm } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#btn').addEventListener('click', (e) => {
                Confirm({
                    content: 'delete ?',
                    okCallback: () => {
                        console.log('delete success ...', e.target)
                    }
                })
            })

        <\/script>
    </body>
</html>`,Pt=`<html>
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
        import { WBtn, WMenu, WMenuItem } from 'https://unpkg.com/web-components-pro@1/main.js'
        
    <\/script>
</html>`,Dt=`<html>
    <body>
        <w-upload id="upload" url="http://localhost:3000/upload" accept=".png,.jpg" name="img">
            <button>accept multiple</button>
        </w-upload>
        <script type="module">
            import { WUpload } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#upload').addEventListener('change', (e) => {
                console.log(e.detail)
            })
        <\/script>
    </body>
</html>`,zt=`<html>
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
                    <w-table-item>game</w-table-item>
                </w-table-row>
                <w-table-row columns="100px 100px 1fr" hover>
                    <w-table-item>jason</w-table-item>
                    <w-table-item>18</w-table-item>
                    <w-table-item>game</w-table-item>
                </w-table-row>
            </div>
        </div>
        <script type="module">
            import { WTableRow, WTableItem } from 'https://unpkg.com/web-components-pro@1/main.js'

        <\/script>
    </body>
</html>`,Nt=`<html>
    <body>
        <w-player style="width: 400px; height: 300px;" src="player.mp4" poster="player.jpg"></w-player>
        <script  type="module">
            import { WPlayer } from 'https://unpkg.com/web-components-pro@1/main.js'

        <\/script>
    </body>
</html>`,Vt=`<html>
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
            import { WScrollLoading } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#scroll').addEventListener('change', (e) => {
                // loadDate
                document.querySelector('#list').innerHTML += \`<div class="item"><img style="height:100%;" src="default.png" /></div>\`
            })
        <\/script>
    </body>
</html>`,Gt=`<html>
    <body>
        <w-rating id="rating" value="0"></w-rating>
        <script type="module">
            import { WRating } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#rating').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>`,Ht=`<html>
    <body>
        <w-slide id="slide" style="width: 800px;max-width: 100%;height: 400px;">
            <w-slide-item style="background-color: #000; color: #fff;">
                <div item="1" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    1
                </div>
            </w-slide-item>
            <w-slide-item style="background-color: #333; color: #fff;">
                <div item="2" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    2
                </div>
            </w-slide-item>
            <w-slide-item style="background-color: #666; color: #fff;">
                <div item="3" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    3
                </div>
            </w-slide-item>
        </w-slide>
        <script type="module">
            import { WSlide, WSlideItem } from 'https://unpkg.com/web-components-pro@1/main.js'

            document.querySelector('#slide').addEventListener('change',(e)=>{
                console.log(e.detail.value)
            })
        <\/script>
    </body>
</html>`,Ut=`<html>
    <body>
        <w-progress percent="10"></w-progress>
        <script type="module">
            import { WProgress } from 'https://unpkg.com/web-components-pro@1/main.js'

        <\/script>
    </body>
</html>`,Ot=`<html>
    <body>
        <w-icon></w-icon>
        <script type="module">
            import { WIcon } from 'https://unpkg.com/web-components-pro@1/main.js'

        <\/script>
    </body>
</html>`,Jt=`<html>
    <body>
        <script type="module">
            import { Fetch } from 'https://unpkg.com/web-components-pro@1/main.js'

            const myFetch = new Fetch()
            myFetch.setOptions({ headers: { authorization: 'auth' } })
            
            myFetch.get({
                url:'url'
            }).then((res)=>{
                return res.json()
            }).then((result)=>{
                console.log(result)
            })

            let res = await myFetch.post({url:'url', data:{}})
            let result = await res.json()
            console.log(result)
        <\/script>
    </body>
</html>`,Kt={__name:"WebComponentsProDoc",setup(M){const i=u({code:"",component:"introduction"}),g=new ie().getIconNames(),v=u([...g]),y=u(null);function h(x){let t=`<w-icon name="${x}"></w-icon>`;navigator.clipboard.writeText(t).then(()=>{y.value.show("Copied to clipboard")})}function f(x){let t=g.filter(d=>d.includes(x.detail.value));v.value.length=0,v.value.push(...t)}return P(x=>{}),(x,t)=>{const d=de("highlight");return l(),a("div",Ze,[e("w-msg",{ref_key:"msgRef",ref:y},null,512),e("div",et,[e("w-tabs",{style:{width:"max-content",display:"block"},value:i.value.component,onChange:t[0]||(t[0]=w=>{i.value.component=w.detail.value})},t[1]||(t[1]=[L('<w-tab value="introduction" data-v-ee186cfb>introduction</w-tab><w-tab value="install" data-v-ee186cfb>install</w-tab><w-tab value="w-btn" data-v-ee186cfb>w-btn</w-tab><w-tab value="w-input" data-v-ee186cfb>w-input</w-tab><w-tab value="w-select" data-v-ee186cfb>w-select</w-tab><w-tab value="w-textarea" data-v-ee186cfb>w-textarea</w-tab><w-tab value="w-radio" data-v-ee186cfb>w-radio w-radios</w-tab><w-tab value="w-checkbox" data-v-ee186cfb>w-checkbox</w-tab><w-tab value="w-toggle" data-v-ee186cfb>w-toggle</w-tab><w-tab value="w-rating" data-v-ee186cfb>w-rating</w-tab><w-tab value="w-icon" data-v-ee186cfb>w-icon</w-tab><w-tab value="w-progress" data-v-ee186cfb>w-progress</w-tab><w-tab value="w-msg" data-v-ee186cfb>w-msg</w-tab><w-tab value="w-modal" data-v-ee186cfb>w-modal</w-tab><w-tab value="w-dialog" data-v-ee186cfb>w-dialog</w-tab><w-tab value="confirm" data-v-ee186cfb>Confirm</w-tab><w-tab value="w-tab" data-v-ee186cfb>w-tab w-tabs</w-tab><w-tab value="w-menu" data-v-ee186cfb>w-menu w-menu-item</w-tab><w-tab value="w-upload" data-v-ee186cfb>w-upload</w-tab><w-tab value="w-table-row" data-v-ee186cfb>w-table-row w-table-item</w-tab><w-tab value="w-player" data-v-ee186cfb>w-player</w-tab><w-tab value="w-slide" data-v-ee186cfb>w-slide</w-tab><w-tab value="w-scroll-loading" data-v-ee186cfb>w-scroll-loading</w-tab><w-tab value="fetch" data-v-ee186cfb>fetch</w-tab>',24)]),40,tt)]),e("div",null,[i.value.component=="introduction"?(l(),se(Ye,{key:0})):p("",!0),i.value.component=="install"?(l(),a(b,{key:1},[t[4]||(t[4]=e("h3",null,"npm",-1)),c((l(),a("pre",null,t[2]||(t[2]=[n("                        ",-1),e("code",{class:"code"},"npm install web-components-pro",-1),n(`
                        `,-1),e("code",{class:"code"},`import { Core, WBtn } from 'web-components-pro'

Core.initColor()
`,-1),n(`
                `,-1)]))),[[d]]),t[5]||(t[5]=e("h3",null,"browser",-1)),c((l(),a("pre",null,t[3]||(t[3]=[n("                        ",-1),e("code",{class:"code"},`import { Core, WBtn } from 'https://unpkg.com/web-components-pro@1/main.js'

Core.initColor()
`,-1),n(`
                `,-1)]))),[[d]])],64)):p("",!0),i.value.component=="w-btn"?c((l(),a("pre",ot,[t[6]||(t[6]=n("                        ",-1)),e("code",{class:"code"},s(Wt)),t[7]||(t[7]=n(`
| attr | value |
| --- | --- |
| type | default/outline/text |
| color | default/success/danger/warning |
| disabled | boolean |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-input"?c((l(),a("pre",nt,[t[8]||(t[8]=n("                        ",-1)),e("code",{class:"code"},s(qt)),t[9]||(t[9]=n(`
| attr | value |
| --- | --- |
| type | text/password/date/time/color/number/range |
| value | string |
| placeholder | string |
| min/max | string |
| disabled | boolean |
| danger | boolean |
| change | event |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-select"?c((l(),a("pre",lt,[t[10]||(t[10]=n("                        ",-1)),e("code",{class:"code"},s(At)),t[11]||(t[11]=n(`
| attr | value |
| --- | --- |
| value | string |
| disabled | boolean |
| multiple | boolean |
| change | event |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-textarea"?c((l(),a("pre",at,[t[12]||(t[12]=n("                        ",-1)),e("code",{class:"code"},s(Et)),t[13]||(t[13]=n(`
| attr | value |
| --- | --- |
| value | string |
| placeholder | string |
| disabled | boolean |
| danger | boolean |
| change | event |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-radio"?c((l(),a("pre",it,[t[14]||(t[14]=n("                        ",-1)),e("code",{class:"code"},s(Lt)),t[15]||(t[15]=n(`
| attr | value |
| --- | --- |
| value | string |
| disabled | boolean |
| checked | boolean |

| attr | value |
| --- | --- |
| value | string |
| change | event |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-checkbox"?c((l(),a("pre",st,[t[16]||(t[16]=n("                        ",-1)),e("code",{class:"code"},s(_t)),t[17]||(t[17]=n(`
| attr | value |
| --- | --- |
| value | string |
| checked | boolean |
| disabled | boolean |
| change | event |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-toggle"?c((l(),a("pre",dt,[t[18]||(t[18]=n("                        ",-1)),e("code",{class:"code"},s(Mt)),t[19]||(t[19]=n(`
| attr | value |
| --- | --- |
| on | boolean |
| disabled | boolean |
| change | event |
                    `,-1))])),[[d]]):i.value.component=="w-rating"?c((l(),a("pre",rt,[t[20]||(t[20]=n("                        ",-1)),e("code",{class:"code"},s(Gt)),t[21]||(t[21]=n(`
| attr | value |
| --- | --- |
| value | number |
| disabled | boolean |
| size | string |
| change | event |
                    `,-1))])),[[d]]):i.value.component=="w-icon"?(l(),a(b,{key:10},[c((l(),a("pre",null,[t[22]||(t[22]=n("                        ",-1)),e("code",{class:"code"},s(Ot)),t[23]||(t[23]=n(`
| attr | value |
| --- | --- |
| name | string |
| color | string |
| size | string |
                    `,-1))])),[[d]]),e("div",ut,[e("w-input",{onChange:f},null,32)]),e("div",ct,[(l(!0),a(b,null,j(v.value,w=>(l(),a("span",{class:"iconItem",onClick:$=>h(w)},[e("w-icon",{name:w},null,8,pt),n(s(w),1)],8,mt))),256))])],64)):i.value.component=="w-progress"?c((l(),a("pre",wt,[t[24]||(t[24]=n("                        ",-1)),e("code",{class:"code"},s(Ut)),t[25]||(t[25]=n(`
| attr | value |
| --- | --- |
| percent | number |
| r | number |
| width | number |
| color | string |
| bgcolor | string |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-msg"?c((l(),a("pre",bt,[t[26]||(t[26]=n("                        ",-1)),e("code",{class:"code"},s(It)),t[27]||(t[27]=n(`
| attr | value |
| --- | --- |
| type | (default) outline |
| position | (top) bottom |
| delay | number (2000) |

| method | value |
| --- | --- |
| show | content: string, color: success danger warning, delay: number |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-modal"?c((l(),a("pre",vt,[t[28]||(t[28]=n("                        ",-1)),e("code",{class:"code"},s(Tt)),t[29]||(t[29]=n(`
| attr | value |
| --- | --- |
| width | string |
| height | string |
| position | 'top' 'bottom' 'left' 'right' '' |
| show | boolean |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-dialog"?c((l(),a("pre",gt,[t[30]||(t[30]=n("                        ",-1)),e("code",{class:"code"},s(Ft)),t[31]||(t[31]=n(`
| attr | value |
| --- | --- |
| width | string |
| height | string |
| show | boolean |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="confirm"?c((l(),a("pre",yt,[t[32]||(t[32]=n("                        ",-1)),e("code",{class:"code"},s(Bt)),t[33]||(t[33]=n(`
| method | value |
| --- | --- |
| Confirm | option={content:string, ok: string, cancel: string, okCallback:function, cancelCallback:function } |
                    `,-1))])),[[d]]):i.value.component=="w-tab"?c((l(),a("pre",ht,[t[34]||(t[34]=n("                        ",-1)),e("code",{class:"code"},s(Rt)),t[35]||(t[35]=n(`
| attr | value |
| --- | --- |
| active | boolean |
| disabled | boolean |

| attr | value |
| --- | --- |
| change | event |
                    `,-1))])),[[d]]):p("",!0),i.value.component=="w-menu"?c((l(),a("pre",ft,[t[36]||(t[36]=n("                        ",-1)),e("code",{class:"code"},s(Pt)),t[37]||(t[37]=n(`
| attr | value |
| --- | --- |
| show | boolean |

| attr | value |
| --- | --- |
| disabled | boolean |
                    `,-1))])),[[d]]):i.value.component=="w-upload"?c((l(),a("pre",xt,[t[38]||(t[38]=n("                        ",-1)),e("code",{class:"code"},s(Dt)),t[39]||(t[39]=n(`
| attr | value |
| --- | --- |
| url | string |
| name | string |
| accept | string |
| auth | string |
| multiple | boolean |
| disabled | boolean |
| change | event |
                    `,-1))])),[[d]]):i.value.component=="w-table-row"?c((l(),a("pre",kt,[t[40]||(t[40]=n("                        ",-1)),e("code",{class:"code"},s(zt)),t[41]||(t[41]=n(`
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
                    `,-1))])),[[d]]):i.value.component=="w-player"?c((l(),a("pre",Ct,[t[42]||(t[42]=n("                        ",-1)),e("code",{class:"code"},s(Nt)),t[43]||(t[43]=n(`
| attr | value |
| --- | --- |
| src | string |
| poster | string |
| ended | event |

| method | value |
| --- | --- |
| play |  |
| pause |  |
                    `,-1))])),[[d]]):i.value.component=="w-slide"?c((l(),a("pre",jt,[t[44]||(t[44]=n("                        ",-1)),e("code",{class:"code"},s(Ht)),t[45]||(t[45]=n(`
| attr | value |
| --- | --- |
| vertical | boolean |
| auto | boolean |
| pagehide | boolean |
| change | event |
                    `,-1))])),[[d]]):i.value.component=="w-scroll-loading"?c((l(),a("pre",$t,[t[46]||(t[46]=n("                        ",-1)),e("code",{class:"code"},s(Vt)),t[47]||(t[47]=n(`
| attr | value |
| --- | --- |
| change | event |
                    `,-1))])),[[d]]):i.value.component=="fetch"?c((l(),a("pre",St,[t[48]||(t[48]=n("                        ",-1)),e("code",{class:"code"},s(Jt)),t[49]||(t[49]=n(`
                    `,-1))])),[[d]]):p("",!0)])])}}},Qt=_(Kt,[["__scopeId","data-v-ee186cfb"]]),Xt={class:"wrap"},Yt={class:"content"},Zt={__name:"WebComponentsPro",setup(M){re();const i=u(null);return u({}),(g,v)=>(l(),a("div",{class:"wcp-container",onClick:v[0]||(v[0]=(...y)=>{var h,f;return((h=i.value)==null?void 0:h.hideMenu)&&((f=i.value)==null?void 0:f.hideMenu(...y))})},[E(ue,{ref_key:"headerRef",ref:i},null,512),e("div",Xt,[e("div",Yt,[E(Qt)])]),E(ce)]))}},lo=_(Zt,[["__scopeId","data-v-76003ba3"]]);export{lo as default};
