import{P as E}from"./feb6c3a3.js";import{_ as O,I as S,A as $,J as N,K as P,u as U,r as w,M as x,N as K,O as j,b as B,P as G,d as i,e as l,Q as M,h as u,p as A,t as m,f as h,g as p,w as b,l as k,a as V,c as W,F as f,E as v,R as z,T as C,n as D}from"./assets/index-4bb9a19c.js";import{I as F}from"./32e380c3.js";const H={components:{ImageCon:F,AsyncSwitch:S,AsyncButtom:$},directives:{mask:N},props:{bangumi:{type:Object,required:!0}},setup(c,{emit:o}){const{computedBangumi:d}=P(c,o),{mobileMode:e,isGreatOldOne:y}=U(),_=w(!1);return{cancel:()=>{e.value&&!_.value&&(d.value=null)},computedBangumi:d,isGreatOldOne:y,globalLoading:_}},methods:{onSwitchBangumiState(c,o){return x(c.id,{state:o})},onUpdateBangumiInfo(c){return K(c.subject).then(o=>{const d={...c,...o};return delete d.deletedAt,delete d.id,x(c.id,d).then(e=>{Object.assign(c,e)})})},deleteBangumi(c){return j(c.id).then(()=>{Object.assign(c,{isDel:!0})})}}},R={class:"bangumi-viewer-container"},T={class:"preview"},q={class:"name"},J={class:"nname"},Q={class:"switch-time-episode"},Y={class:"time-episode"},X={key:0};function Z(c,o,d,e,y,_){const g=B("ImageCon"),a=B("AsyncSwitch"),t=B("AsyncButtom"),s=G("mask");return i(),l("div",{class:"bangumi-viewer",onClick:o[2]||(o[2]=(...n)=>e.cancel&&e.cancel(...n))},[M((i(),l("div",R,[u("div",T,[A(g,{src:`https://lain.bgm.tv/pic/cover/l${e.computedBangumi.img}`},null,8,["src"])]),u("div",q,m(e.computedBangumi.name),1),u("div",J,m(e.computedBangumi.nname),1),u("div",Q,[e.isGreatOldOne?(i(),h(a,{key:0,modelValue:e.computedBangumi.state,"onUpdate:modelValue":o[0]||(o[0]=n=>e.computedBangumi.state=n),loading:e.globalLoading,"onUpdate:loading":o[1]||(o[1]=n=>e.globalLoading=n),onLoadingClick:n=>_.onSwitchBangumiState(e.computedBangumi,n)},null,8,["modelValue","loading","onLoadingClick"])):p("",!0),e.isGreatOldOne?(i(),h(t,{key:1,type:"primary",size:"mini",onLoadingClick:()=>_.onUpdateBangumiInfo(e.computedBangumi)},{default:b(()=>o[3]||(o[3]=[k(" 更新信息 ")])),_:1},8,["onLoadingClick"])):p("",!0),e.isGreatOldOne&&!d.bangumi.isDel?(i(),h(t,{key:2,type:"danger",size:"mini",confirm:{message:`确认删除${d.bangumi.name||d.bangumi.nname}`},onLoadingClick:()=>_.deleteBangumi(e.computedBangumi)},{default:b(()=>o[4]||(o[4]=[k(" 删除 ")])),_:1},8,["confirm","onLoadingClick"])):p("",!0),u("span",Y,[e.computedBangumi.episode?(i(),l("span",X," ("+m(e.computedBangumi.episode)+"话) ",1)):p("",!0),k(" "+m(e.computedBangumi.time),1)])])])),[[s,!0]])])}const I=O(H,[["render",Z],["__scopeId","data-v-9551b5b8"]]);const ee={components:{PageHeader:E,BangumiViewer:I},setup(){const c=w(""),o=V([]),d=w(null),e=V({notExistDate:[],year:[]});e.notExistDate.open=!1;const y=()=>{o.splice(0,o.length),d.value=null,e.notExistDate=[],e.year=[],z().then(g=>{const a={};for(const t of g)if(!t.time)e.notExistDate.push(t);else{const s=new Date(t.time),n=s.getFullYear(),r=s.getMonth()+1;a[n]||(a[n]=[],a[n].year=n,a[n].open=!1,a[n].total=0,a[n].complete=0,e.year.push(a[n])),a[`${n}-${r}`]||(a[`${n}-${r}`]=[],a[`${n}-${r}`].month=`${n}-${r}`,a[`${n}-${r}`].monthNum=r,a[`${n}-${r}`].open=!1,a[`${n}-${r}`].total=0,a[`${n}-${r}`].complete=0,a[n].push(a[`${n}-${r}`])),a[n].total++,a[`${n}-${r}`].total++,t.state&&(a[n].complete++,a[`${n}-${r}`].complete++),a[`${n}-${r}`].push(t)}e.year=e.year.sort((t,s)=>s.year-t.year);for(const t in e.year){e.year[t]=e.year[t].sort((s,n)=>s.monthNum-n.monthNum);for(const s in e.year[t])Array.isArray(e.year[t][s])&&(e.year[t][s]=e.year[t][s].sort((n,r)=>new Date(n.time)-new Date(r.time)))}o.push(...g)})};y();const _=W(()=>c.value?o.filter(g=>{var a,t,s,n,r,L;return((s=(a=g.name)==null?void 0:a.toLowerCase())==null?void 0:s.includes((t=c.value)==null?void 0:t.toLowerCase()))||((L=(n=g.nname)==null?void 0:n.toLowerCase())==null?void 0:L.includes((r=c.value)==null?void 0:r.toLowerCase()))}):[]);return{selectedBangumi:d,bangumiDateList:e,bangumiSearchList:_,searchKeyWord:c,refreshList:y}},methods:{}},te={class:"page"},ne={class:"container"},oe={key:0,class:"list"},ae=["onClick"],se={class:"item-info"},ie={key:0},le=["onClick"],re={class:"item-info"},ce={key:0},de=["title","onClick"],me={key:0},ue=["title","onClick"],ge={key:1,class:"list search-list"},_e=["title","onClick"];function pe(c,o,d,e,y,_){const g=B("PageHeader"),a=B("BangumiViewer");return i(),l("div",te,[A(g,{modelValue:e.searchKeyWord,"onUpdate:modelValue":o[0]||(o[0]=t=>e.searchKeyWord=t),"show-search-input":!0},null,8,["modelValue"]),u("div",ne,[e.searchKeyWord?(i(),l("div",ge,[u("ul",null,[(i(!0),l(f,null,v(e.bangumiSearchList,t=>(i(),l("li",{key:t.id,class:D(["bangumi-item",{complete:t.state}]),title:t.nname,onClick:s=>e.selectedBangumi=t},m(t.name),11,_e))),128))])])):(i(),l("div",oe,[u("ul",null,[(i(!0),l(f,null,v(e.bangumiDateList.year,t=>(i(),l("li",{key:t.year,class:"year-item",onClick:s=>t.open=!t.open},[u("div",se,[u("span",null,m(t.year),1),u("span",null,m(t.complete)+"/"+m(t.total),1)]),t.open?(i(),l("ul",ie,[(i(!0),l(f,null,v(t,s=>(i(),l("li",{key:s.month,class:"month-item",onClick:C(n=>s.open=!s.open,["stop"])},[u("div",re,[u("span",null,m(s.month),1),u("span",null,m(s.complete)+"/"+m(s.total),1)]),s.open?(i(),l("ul",ce,[(i(!0),l(f,null,v(s,n=>(i(),l("li",{key:n.id,class:D(["bangumi-item",{complete:n.state}]),title:n.nname,onClick:C(r=>e.selectedBangumi=n,["stop"])},m(n.name||n.nname)+m(n.isDel?"[已删除]":""),11,de))),128))])):p("",!0)],8,le))),128))])):p("",!0)],8,ae))),128)),e.bangumiDateList.notExistDate.length>0?(i(),l("li",{key:0,class:"year-item",onClick:o[1]||(o[1]=t=>e.bangumiDateList.notExistDate.open=!e.bangumiDateList.notExistDate.open)},[o[3]||(o[3]=k(" 放送时间未确认 ")),e.bangumiDateList.notExistDate.open?(i(),l("ul",me,[(i(!0),l(f,null,v(e.bangumiDateList.notExistDate,t=>(i(),l("li",{key:t.id,class:D(["bangumi-item",{complete:t.state}]),title:t.nname,onClick:C(s=>e.selectedBangumi=t,["stop"])},m(t.name||t.nname),11,ue))),128))])):p("",!0)])):p("",!0)])])),e.selectedBangumi?(i(),h(a,{key:2,bangumi:e.selectedBangumi,"onUpdate:bangumi":o[2]||(o[2]=t=>e.selectedBangumi=t)},null,8,["bangumi"])):p("",!0)])])}const Be=O(ee,[["render",pe],["__scopeId","data-v-7ea6a2f7"]]);export{Be as default};