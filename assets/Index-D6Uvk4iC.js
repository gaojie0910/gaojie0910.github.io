import{u as i,r as o,o as u,a as r,b as f,c as _,d as n,e as d,t as m,f as h,g as x}from"./index-Df7HW3W5.js";import{_ as v,H as k}from"./Header-D2uV3ZZ2.js";import{F as y}from"./Footer-DHcmR2-i.js";const g={class:"wrap"},w={style:{color:"#fff","text-shadow":"1px 1px 1px #000"}},B={__name:"Index",setup(F){i();const s=o(null),c=new x;return o({position:""}),u(l=>{c.get({url:"https://uselessfacts.jsph.pl/api/v2/facts/random"}).then(e=>e.json()).then(e=>{r.value=e.text})}),(l,e)=>(f(),_("div",{class:"index-container",onClick:e[0]||(e[0]=(...p)=>{var t,a;return((t=s.value)==null?void 0:t.hideMenu)&&((a=s.value)==null?void 0:a.hideMenu(...p))})},[n(k,{ref_key:"headerRef",ref:s},null,512),d("div",g,[d("div",w,m(h(r)),1)]),n(y)]))}},b=v(B,[["__scopeId","data-v-2507e28b"]]);export{b as default};