import{_ as M,a7 as C,a8 as E,r as B,K as F,b as n,d as s,f as c,w as d,e as m,E as L,p as r,g as h,l as b,F as O,A as I,L as P,a as V,a9 as x,a0 as S,aa as G,n as R,h as A}from"./assets/index-6e8a4740.js";import{P as j}from"./7438babb.js";import{M as q}from"./881cbaa2.js";/* empty css        */import{E as N,a as U}from"./88494698.js";import{E as H,a as K,b as T,c as z}from"./cfc3b922.js";/* empty css        *//* empty css        */import"./vander_commonjsHelpers-87174ba5.js";import"./vander_baseClone-3a48b475.js";import"./c9123de6.js";import"./vander_initCloneObject-ac175578.js";import"./b06019fa.js";import"./ff0c461f.js";const D={components:{ElForm:N,ElFormItem:U,ElInput:C,ElRadioGroup:H,ElRadio:K,ButtonBox:E},props:{modelValue:{type:Object,default:()=>({})},fields:{type:Array,default:()=>[]},onSubmit:{type:Function,default:void 0}},emits:["update:modelValue"],setup(t,{emit:a}){const i=B(null),{computedModelValue:e}=F(t,a);return{computedModelValue:e,handlers:[{name:"提交",type:"primary",handler:()=>new Promise(u=>{i.value.validate((p,_)=>{p&&(typeof t.onSubmit=="function"?u(t.onSubmit(e.value)):u())})})}],form:i}}};function J(t,a,i,e,g,u){const p=n("el-input"),_=n("el-radio"),k=n("el-radio-group"),f=n("el-form-item"),w=n("ButtonBox"),y=n("el-form");return s(),c(y,{ref:"form",model:e.computedModelValue,"label-position":"top"},{default:d(()=>[(s(!0),m(O,null,L(i.fields,l=>(s(),m("div",{key:l.prop},[r(f,{label:l.label,prop:l.prop,required:l.required},{default:d(()=>[l.type==="input"?(s(),c(p,{key:0,modelValue:e.computedModelValue[l.prop],"onUpdate:modelValue":o=>e.computedModelValue[l.prop]=o},null,8,["modelValue","onUpdate:modelValue"])):h("",!0),l.type==="boolean"?(s(),c(k,{key:1,modelValue:e.computedModelValue[l.prop],"onUpdate:modelValue":o=>e.computedModelValue[l.prop]=o},{default:d(()=>[r(_,{border:"",value:!0},{default:d(()=>[b(" 是 ")]),_:1}),r(_,{border:"",value:!1},{default:d(()=>[b(" 否 ")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])):h("",!0)]),_:2},1032,["label","prop","required"])]))),128)),e.handlers.length>0?(s(),c(w,{key:0,handlers:e.handlers},null,8,["handlers"])):h("",!0)]),_:1},8,["model"])}const Q=M(D,[["render",J]]);const W={components:{AsyncButtom:I,PageHeader:j,Markdown:q,GOOMabinogionFields:Q,ElTable:T,ElTableColumn:z,LoadingIcon:P},setup(){const t=V([]),a=V([]),i=B(!0),e=()=>(i.value=!0,G().then(g=>{a.splice(0,a.length),a.push(...g);for(const u of a)u.fields.length<5&&t.push(u.uuid)}).finally(()=>{i.value=!1}));return e(),{loading:i,expandRowKeys:t,realtodos:a,load:e}},methods:{onSubmit(t,a){return x(t.row.uuid,{type:"resolve",data:a}).then(()=>(S.success("处理成功"),this.load()))},reject(t,a){return x(t.row.uuid,{type:"reject",reason:a.inputValue}).then(()=>this.load())}}},X={class:"page"},Y={key:1},Z={class:"preview"},$={key:0,class:"desp"},ee={key:1,class:"quick-boolean"};function oe(t,a,i,e,g,u){const p=n("PageHeader"),_=n("LoadingIcon"),k=n("Markdown"),f=n("AsyncButtom"),w=n("GOOMabinogionFields"),y=n("el-table-column"),l=n("el-table");return s(),m("div",X,[r(p),r(l,{border:"",data:e.realtodos,style:{width:"100%"},"row-key":"uuid","expand-row-keys":e.expandRowKeys},{empty:d(()=>[e.loading?(s(),c(_,{key:0,class:R({black:t.type==="primary"})},null,8,["class"])):(s(),m("span",Y," 暂无数据 "))]),default:d(()=>[r(y,{type:"expand"},{default:d(o=>[A("div",Z,[o.row.desp?(s(),m("div",$,[r(k,{"model-value":o.row.desp},null,8,["model-value"])])):h("",!0),o.row.fields.length===1&&o.row.fields[0].type==="boolean"?(s(),m("div",ee,[r(f,{type:"primary",onLoadingClick:()=>u.onSubmit(o,{[o.row.fields[0].prop]:!0})},{default:d(()=>[b(" 是 ")]),_:2},1032,["onLoadingClick"]),r(f,{type:"default",onLoadingClick:()=>u.onSubmit(o,{[o.row.fields[0].prop]:!1})},{default:d(()=>[b(" 否 ")]),_:2},1032,["onLoadingClick"])])):(s(),c(w,{key:2,fields:o.row.fields,"on-submit":v=>u.onSubmit(o,v)},null,8,["fields","on-submit"]))])]),_:1}),r(y,{prop:"name",label:"描述"}),r(y,{label:"操作",width:"120px"},{default:d(o=>[r(f,{type:"danger",size:"mini",onLoadingClick:v=>u.reject(o,v),confirm:{showInput:!0,message:"请输入拒绝原因"}},{default:d(()=>[b(" 拒绝 ")]),_:2},1032,["onLoadingClick"])]),_:1})]),_:1},8,["data","expand-row-keys"])])}const ye=M(W,[["render",oe],["__scopeId","data-v-d317b41d"]]);export{ye as default};