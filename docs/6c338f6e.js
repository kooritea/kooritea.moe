import{_ as E,S,r as p,b as l,d as a,e as c,m as w,p as k,g as C,n as I,u as M,q as B,s as P,L as b,v as L,h as f,w as x,t as v,f as h,x as O,a as K,y as H,z as V,B as W,C as U,D as j,F as G,E as T,G as q,H as z}from"./assets/index-cf86c5d1.js";import{P as A}from"./9e8b0207.js";import{N as R}from"./56813331.js";import{M as F}from"./52898633.js";/* empty css        *//* empty css        */import{E as J}from"./b4c83870.js";import"./vander_commonjsHelpers-87174ba5.js";import"./651413a2.js";const Q={components:{SvgIcon:S},setup(){return{isSimplifty:p(!1)}},mounted(){this.$el.offsetHeight>600&&(this.isSimplifty=!0)}},X={key:0,class:"simplifty-mask"};function Y(e,t,o,n,u,r){const y=l("SvgIcon");return a(),c("div",{class:I(["simplifty-box",{"is-simplifty":n.isSimplifty}])},[w(e.$slots,"default",{},void 0,!0),n.isSimplifty?(a(),c("div",X,[k(y,{name:"zhankai",class:"expend-button",onClick:t[0]||(t[0]=m=>n.isSimplifty=!1)})])):C("",!0)],2)}const Z=E(Q,[["render",Y],["__scopeId","data-v-8a787155"]]);function D(e,t){const{darkMode:o}=M(),{darkModeDecodeKey:n}=B();return o.value&&(e.hide||t)?e.id?P(e.hide,n.value):e.hide:e.content}const $={components:{Markdown:F,SimpliftyBox:Z,LoadingIcon:b,"el-popover":J},props:{essay:{type:Object,required:!0},essayMap:{type:Object,required:!0},inPopover:{type:Boolean,default:!1}},emits:["set-search-key-word","load-essay-by-id"],setup(){const{darkMode:e}=M();return{darkMode:e,formatDate:L,Error}},methods:{getEssayContent:D}},ee={class:"essay"},se=["onClick"],te={class:"hashtag"},ne={key:0,class:"loading-box"},oe={key:1},ae={class:"info"},ie={class:"essay-id"};function re(e,t,o,n,u,r){const y=l("LoadingIcon"),m=l("ChaosItem",!0),g=l("el-popover"),_=l("Markdown"),d=l("SimpliftyBox");return a(),c("div",ee,[f("article",{class:I(["article",{"in-popover":o.inPopover}])},[k(d,null,{default:x(()=>[k(_,{"model-value":r.getEssayContent(o.essay)},{hashtag:x(({hashtag:s})=>[!/^#\d+$/.test(s)||o.inPopover?(a(),c("span",{key:0,class:"hashtag",onClick:i=>e.$emit("set-search-key-word",s)},v(s),9,se)):(a(),h(g,{key:1,width:"",trigger:"click","popper-class":"popper-essay",effect:n.darkMode?"dark":"light",onShow:()=>{o.essayMap[s.slice(1)]||e.$emit("load-essay-by-id",s.slice(1))}},{reference:x(()=>[f("span",te,v(s),1)]),default:x(()=>[!o.essayMap[s.slice(1)]||o.essayMap[s.slice(1)]instanceof Error?(a(),c("div",ne,[o.essayMap[s.slice(1)]?(a(),c("span",oe,v(o.essayMap[s.slice(1)].message),1)):(a(),h(y,{key:0}))])):(a(),h(m,{key:1,essay:o.essayMap[s.slice(1)],"essay-map":o.essayMap,"in-popover":!0,onSetSearchKeyWord:t[0]||(t[0]=i=>{e.$emit("set-search-key-word",i)})},null,8,["essay","essay-map"]))]),_:2},1032,["effect","onShow"]))]),_:1},8,["model-value"])]),_:1})],2),f("div",ae,[f("span",ie,"#"+v(o.essay.id||"预约中"),1),f("span",null,v(n.formatDate(o.essay.time,`yyyy-MM-dd HH:mm:ss UTC ${n.darkMode?"NDD":"DD"}`)),1)])])}const le=E($,[["render",re],["__scopeId","data-v-1ed5ce2f"]]);const de={components:{ChaosItem:le,PageHeader:A,NextButton:R,SvgIcon:S,MDEditor:O({loader:()=>z(()=>import("./78928186.js").then(e=>e.a),["/78928186.js","/assets/index-cf86c5d1.js","/assets/index-bb2ebe44.css","/52898633.js","/vander_commonjsHelpers-87174ba5.js","/assets/MarkDown-fa57294d.css","/c53b71e9.js","/assets/ImageCon-33e9769b.css","/29e57315.js","/02b52d33.js","/651413a2.js","/06d618e3.js","/c4eb119a.js","/b4c83870.js","/assets/MDEditor-b72e81ab.css","/assets/el-date-picker-773c6a21.css","/assets/el-scrollbar-633caf6b.css","/assets/el-popper-cecd0dcb.css"],import.meta.url),loadingComponent:b})},setup(){const e=p({}),{darkMode:t,isGreatOldOne:o}=M(),{offlineMode:n}=B(),u=p(""),r=K([]),y=p(!1),m=p(!1),g=p(null),_=d=>(m.value=!0,q(d).then(s=>{s=s.map(i=>(e.value[i.id]=i,{...i,expend:!1})),y.value=s.length===10,r.push(...s)}).finally(()=>{m.value=!1}));return _(),o.value&&H().then(d=>{d=d.sort((s,i)=>new Date(s.time).valueOf()-new Date(i.time).valueOf());for(const s of d)r.unshift(s)}),{loading:m,searchBlogEssays:_,essays:r,searchKeyWord:u,offlineMode:n,hasNext:y,darkMode:t,essayMap:e,setScorllGotoTop:V,isGreatOldOne:o,editing:g}},methods:{getEssayContent:D,search(e){if(this.essays.splice(0,this.essays.length),this.offlineMode&&e&&!/^#\d+$/.test(e)){this.$msgBox.error("离线模式下仅可以使用id搜索");return}return this.searchBlogEssays({keyword:e})},onNext(){var t;const e=(t=this.essays[this.essays.length-1])==null?void 0:t.id;return this.searchBlogEssays({keyword:this.searchKeyWord,start:e?e-1:void 0})},loadEssayById(e){if(this.essayMap[e]!==null)return this.essayMap[e]=null,W({id:e}).then(t=>{this.essayMap[e]=t}).catch(t=>{this.essayMap[e]=new Error(t)})},onSubmitUpdateEssay(e,t,o,n){if(e.id)return U(e.id,{content:t?void 0:o,hide:t?o||null:void 0}).then(u=>{Object.assign(e,u),this.editing=null});if(e.uuid)return j(e.uuid,{content:t?void 0:o,hide:t?o||null:void 0,time:n}).then(u=>{Object.assign(e,u),this.editing=null})}}},ce={class:"page"};function ue(e,t,o,n,u,r){const y=l("PageHeader"),m=l("ChaosItem"),g=l("MDEditor"),_=l("SvgIcon"),d=l("NextButton");return a(),c("div",ce,[k(y,{modelValue:n.searchKeyWord,"onUpdate:modelValue":t[0]||(t[0]=s=>n.searchKeyWord=s),"show-search-input":!0,"on-input":r.search},null,8,["modelValue","on-input"]),f("ul",null,[(a(!0),c(G,null,T(n.essays,s=>(a(),c("li",{key:s.id,class:"essay-box"},[n.editing!==s?(a(),h(m,{key:0,essay:s,"essay-map":n.essayMap,onSetSearchKeyWord:t[1]||(t[1]=i=>{n.searchKeyWord=i,n.setScorllGotoTop()}),onLoadEssayById:r.loadEssayById},null,8,["essay","essay-map","onLoadEssayById"])):(a(),h(g,{key:1,"model-value":r.getEssayContent(s,!0),cache:!1,"ex-handlers":[{name:"取消",handler:()=>{n.editing=null}}],"on-submit":(i,N)=>r.onSubmitUpdateEssay(s,n.darkMode,i,N)},null,8,["model-value","ex-handlers","on-submit"])),n.isGreatOldOne&&n.editing!==s?(a(),h(_,{key:2,name:"bianji",onClick:i=>n.editing=s},null,8,["onClick"])):C("",!0)]))),128))]),k(d,{hasNext:n.hasNext,"onUpdate:hasNext":t[2]||(t[2]=s=>n.hasNext=s),loading:n.loading,"onUpdate:loading":t[3]||(t[3]=s=>n.loading=s),onLoadingClick:r.onNext},null,8,["hasNext","loading","onLoadingClick"])])}const xe=E(de,[["render",ue],["__scopeId","data-v-404cc5a1"]]);export{xe as default};