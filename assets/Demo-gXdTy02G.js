import{z as y,g as k,k as h,r as v,u as U,o as j,b as m,c,d as N,e as n,t as _,f as x,F as A,i as R}from"./index-0DBK5LwQ.js";import{_ as T,H as L}from"./Header-15vwCNyk.js";const w=y(),i=new k;i.setOptions({headers:{"X-Auth-Key":"0540d722179ac63b1ff1d8a523464b1890963","X-Auth-Email":"471089443@qq.com","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*"}});function O(r){var t;if(!((t=w.getUser())!=null&&t.user_id))return new Promise((u,l)=>{u({errors:[{message:"user not login"}]})});if(!r.name||!r.password)return new Promise((u,l)=>{u({errors:[{message:"name or password cannot be empty"}]})});let e=self.crypto.randomUUID();return i.post({url:"/api",data:{params:[e,r.name,r.password],sql:"Insert INTO users VALUES ( ?, ?, ?);"}}).then(u=>u.json())}function z(r){return console.log(r,w.getUser()),!r.name||!r.password||!r.id?new Promise((e,t)=>{e({errors:[{message:"id, name or password cannot be empty"}]})}):r.id==w.getUser().user_id?new Promise((e,t)=>{e({errors:[{message:"cannot delete yourself"}]})}):i.post({url:"/api",data:{params:[r.id,r.name,r.password],sql:"DELETE FROM users WHERE user_id = ? AND user_name = ? AND user_password = ?;"}}).then(e=>e.json())}function D(r){return!r.name||!r.password?new Promise((e,t)=>{e({errors:[{message:"id, name or password cannot be empty"}]})}):i.post({url:"/api",data:{params:[r.name,r.password,r.id],sql:"UPDATE users SET user_name = ? , user_password = ?  WHERE user_id = ?;"}}).then(e=>e.json())}function M(r){return!r.name||!r.password?new Promise((e,t)=>{e({errors:[{message:"name or password cannot be empty"}]})}):i.post({url:"/api",data:{params:[r.name,r.password],sql:"SELECT * FROM users WHERE user_name = ? AND user_password = ?;"}}).then(e=>e.json())}function q(r){return r?i.post({url:"/api",data:{params:[r],sql:"SELECT * FROM users WHERE user_id = ?;"}}).then(e=>e.json()):new Promise((e,t)=>{e({errors:[{message:"id cannot be empty"}]})})}function I(r){return h.typeof(r.currentPage)!=="number"||h.typeof(r.pageSize)!=="number"?new Promise((e,t)=>{e({errors:[{message:"currentPage or pageSize type error"}]})}):i.post({url:"/api",data:{params:["%"+r.name+"%",r.currentPage,r.pageSize],sql:"SELECT * FROM users WHERE user_name LIKE ? LIMIT ?, ? ;"}}).then(e=>e.json())}const d={add:O,remove:z,update:D,login:M,findById:q,find:I},F={class:"wrap"},H={class:"content"},W={style:{display:"flex","flex-wrap":"wrap",gap:"10px",padding:"10px"}},B={class:"item"},J=["value"],V=["value"],K={class:"item"},X=["value"],G=["value"],Q=["value"],Y={class:"item"},Z=["value"],$=["value"],ee=["value"],se={class:"item"},re=["value"],ne=["value"],oe=["value"],ue={class:"item"},ae=["value"],le=["value"],te={style:{margin:"0 10px",padding:"10px","background-color":"#fff"}},ie={style:{margin:"0 10px",padding:"10px","background-color":"#f2f2f2"}},de={__name:"Demo",setup(r){const e=v({userList:[],id:"",name:"",password:"",searchName:"",currentPage:1,pageSize:10});U();const t=v(null),u=v(null),l=y();function C(){d.add({name:e.value.name,password:e.value.password}).then(a=>{a.success===!0?(u.value.show("add user success"),p()):u.value.show(a.errors[0].message)})}function E(){d.remove({id:e.value.id,name:e.value.name,password:e.value.password}).then(a=>{a.success===!0?(a.result[0].meta.changes>0?u.value.show("remove user success"):u.value.show("user not exist"),p()):u.value.show(a.errors[0].message)})}function b(){d.update({id:e.value.id,name:e.value.name,password:e.value.password}).then(a=>{a.success===!0?(u.value.show("update user success"),p()):u.value.show(a.errors[0].message)})}function S(){d.login({name:e.value.name,password:e.value.password}).then(a=>{a.success===!0?a.result[0].results[0]?(u.value.show("login success"),l.setUser(a.result[0].results[0]),l.setToken(JSON.stringify(a.result[0].results[0]))):u.value.show("name or password not correct"):u.value.show(a.errors[0].message)})}function P(){l.reset(),u.value.show("logout success")}function p(){e.value.currentPage<=1&&(e.value.currentPage=1),d.find({currentPage:e.value.currentPage-1,pageSize:e.value.pageSize,name:e.value.searchName}).then(a=>{a.success===!0?e.value.userList=a.result[0].results:u.value.show(a.errors[0].message)})}return j(a=>{if(p(),l.getToken())try{l.setUser(JSON.parse(l.getToken())),d.login({name:l.getUser().user_name,password:l.getUser().user_password}).then(s=>{s.success===!0?s.result[0].results[0]?(u.value.show("login success"),l.setUser(s.result[0].results[0]),l.setToken(JSON.stringify(s.result[0].results[0]))):(u.value.show("name or password not correct please login again"),l.reset()):(u.value.show(s.errors[0].message),l.reset())})}catch{l.reset()}else l.reset()}),(a,s)=>(m(),c("div",{class:"wcp-container",onClick:s[13]||(s[13]=(...o)=>{var g,f;return((g=t.value)==null?void 0:g.hideMenu)&&((f=t.value)==null?void 0:f.hideMenu(...o))})},[N(L,{ref_key:"headerRef",ref:t},null,512),n("div",F,[n("div",H,[n("div",W,[n("w-msg",{ref_key:"msg",ref:u},null,512),n("div",B,[n("w-input",{value:e.value.name,placeholder:"name",onChange:s[0]||(s[0]=o=>{e.value.name=o.detail.value})},null,40,J),n("w-input",{value:e.value.password,placeholder:"password",onChange:s[1]||(s[1]=o=>{e.value.password=o.detail.value})},null,40,V),n("w-btn",{onClick:C},"add user")]),n("div",K,[n("w-input",{value:e.value.id,placeholder:"id",onChange:s[2]||(s[2]=o=>{e.value.id=o.detail.value})},null,40,X),n("w-input",{value:e.value.name,placeholder:"name",onChange:s[3]||(s[3]=o=>{e.value.name=o.detail.value})},null,40,G),n("w-input",{value:e.value.password,placeholder:"password",onChange:s[4]||(s[4]=o=>{e.value.password=o.detail.value})},null,40,Q),n("w-btn",{onClick:E},"remove user")]),n("div",Y,[n("w-input",{value:e.value.id,placeholder:"id",onChange:s[5]||(s[5]=o=>{e.value.id=o.detail.value})},null,40,Z),n("w-input",{value:e.value.name,placeholder:"name",onChange:s[6]||(s[6]=o=>{e.value.name=o.detail.value})},null,40,$),n("w-input",{value:e.value.password,placeholder:"password",onChange:s[7]||(s[7]=o=>{e.value.password=o.detail.value})},null,40,ee),n("w-btn",{onClick:b},"update user")]),n("div",se,[n("w-input",{value:e.value.searchName,placeholder:"searchName",onChange:s[8]||(s[8]=o=>{e.value.searchName=o.detail.value})},null,40,re),n("w-input",{type:"number",min:"1",value:e.value.currentPage,onChange:s[9]||(s[9]=o=>{e.value.currentPage=o.detail.value})},null,40,ne),n("w-input",{type:"number",value:e.value.pageSize,onChange:s[10]||(s[10]=o=>{e.value.pageSize=o.detail.value})},null,40,oe),n("w-btn",{onClick:p},"find user")]),n("div",ue,[n("w-input",{value:e.value.name,placeholder:"name",onChange:s[11]||(s[11]=o=>{e.value.name=o.detail.value})},null,40,ae),n("w-input",{value:e.value.password,placeholder:"password",onChange:s[12]||(s[12]=o=>{e.value.password=o.detail.value})},null,40,le),n("w-btn",{onClick:S},"login"),n("w-btn",{onClick:P},"logout")])]),n("div",te," 当前登录用户："+_(x(l).getUser()),1),n("div",ie,[(m(!0),c(A,null,R(e.value.userList,o=>(m(),c("div",null,_(o),1))),256))])])])]))}},me=T(de,[["__scopeId","data-v-3dc54ab9"]]);export{me as default};