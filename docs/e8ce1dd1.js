import{_ as w,az as c,aA as M,a0 as G,b as n,d as f,f as P,w as m,p as s,h as V,e as y,E as I,t as g,F as S,l as _,u as R,a3 as O,aB as T,aC as C,aD as x,aE as E,aF as F,av as k,aw as B,aG as L}from"./assets/index-bfb8b166.js";import{P as $}from"./900661ab.js";import{G as v}from"./ac685bf0.js";import{M as H}from"./1209e150.js";const U={components:{GOORyonaVideoPreviewDialog:v},data(){return{float:c,dialogVisible:!1,formConfig:{labelPosition:"top"},materials:[],formData:{},fields:[{type:"slot",slotName:"materialsInfo",prop:"materialIds",label:"包含切片",required:!0,formProps:{multiple:!0}},{type:"input",prop:"title",label:"标题",required:!0,options:()=>Array.from(new Set(this.materials.map(t=>{var e;return(e=t.bangumi)==null?void 0:e.nname})))},{type:"select",prop:"thumbnail",label:"封面",required:!0,options:()=>this.materials.map((t,e)=>{if(t.thumbnail===null)return null;const r=t.thumbnail,a=this.materials.slice(0,e).reduce((o,i)=>c.add(o,c.subtract(i.end,i.start)),0);return c.add(r,a)}).filter(t=>t!==null).map(t=>({label:t,value:String(t)}))},{type:"switch",prop:"publish",label:"立即发布",defaultValue:()=>!0}],buttons:[{label:"预览",type:"default",handler:t=>{this.$refs.GOORyonaVideoPreviewDialog.open({sourceSrc:`/video/source/collection/create/preview?materialIds=${this.materials.map(e=>e.id).join(",")}`})}},{label:"提交",type:"primary",handler:t=>t.formInstance.submitForm().then(e=>M(e).then(()=>{G.success("提交成功"),t.formInstance.resetFormData(),this.dialogVisible=!1}))}]}},methods:{open({materials:t}){this.materials=t,this.formData={materialIds:t.map(e=>e.id)},this.dialogVisible=!0}}},j={class:"materials-info"};function A(t,e,r,a,o,i){const d=n("EasyForm"),p=n("GOORyonaVideoPreviewDialog"),u=n("el-dialog");return f(),P(u,{modelValue:o.dialogVisible,"onUpdate:modelValue":e[1]||(e[1]=l=>o.dialogVisible=l),title:"创建切片集合"},{default:m(()=>[s(d,{ref:"EasyForm",modelValue:o.formData,"onUpdate:modelValue":e[0]||(e[0]=l=>o.formData=l),fields:o.fields,buttons:o.buttons,"form-config":o.formConfig},{materialsInfo:m(()=>[V("div",j,[(f(!0),y(S,null,I(o.materials,(l,b)=>(f(),y("div",{key:l.id,class:"material"},g(b+1)+"、["+g(o.float.subtract(l.end,l.start))+"s]"+g(l.filepath),1))),128))])]),_:1},8,["modelValue","fields","buttons","form-config"]),s(p,{ref:"GOORyonaVideoPreviewDialog"},null,512)]),_:1},8,["modelValue"])}const q=w(U,[["render",A],["__scopeId","data-v-dd58687c"]]),N={components:{MediaBrowser:H},data(){return{dialogVisible:!1,value:"",resolve:null,reject:null}},methods:{open(){return this.dialogVisible=!0,new Promise((t,e)=>{this.resolve=r=>{this.dialogVisible=!1,t(r)},this.reject=r=>{e(r)}})}}};function z(t,e,r,a,o,i){const d=n("MediaBrowser"),p=n("el-button"),u=n("el-dialog");return f(),P(u,{modelValue:o.dialogVisible,"onUpdate:modelValue":e[3]||(e[3]=l=>o.dialogVisible=l),title:"选择媒体"},{default:m(()=>[s(d,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),checkMode:"single"},null,8,["modelValue"]),s(p,{type:"primary",onClick:e[1]||(e[1]=()=>{o.resolve(o.value)})},{default:m(()=>e[4]||(e[4]=[_(" 确认 ")])),_:1}),s(p,{type:"default",onClick:e[2]||(e[2]=()=>{o.reject("取消")})},{default:m(()=>e[5]||(e[5]=[_(" 取消 ")])),_:1})]),_:1},8,["modelValue"])}const W=w(N,[["render",z]]);const J={components:{PageHeader:$,GOORyonaCreateGroupDialog:q,GOORyonaVideoPreviewDialog:v,GOORyonaSelectMediaDialog:W},setup(){const{mobileMode:t}=R();return{mobileMode:t}},data(){return{isExSearch:!1,bangumiOptions:[],tableData:[],selected:[],tableProp:{tableConfig:{handlerWidth:"310px",showPagination:!0,selection:!0,tableProps:{stripe:!0,border:!0},tableHandlerProps:{fixed:void 0},publicTableProps:{showOverflowTooltip:!0},tableSelectionProps:{selectable:t=>!!t.filepath}},emitLoadOnCreate:!0,buttons:[{type:"primary",buttonProps:{link:!0},show:(t,e)=>!e.row.remote,label:"发布",handler:(t,e)=>{O({title:"提示",message:`确认发布${e.row.filepath}`,type:"warning",confirmHandlerPromise:r=>T(e.row.id).then(()=>{this.$refs.EditTable.search()})})}},{type:"primary",buttonProps:{link:!0},label:"查看",handler:(t,e)=>{this.$refs.GOORyonaVideoPreviewDialog.open({sourceSrc:`/video/source/material/preview/${e.row.id}`})}},{type:"primary",buttonProps:{link:!0},label:"编辑",handler:(t,e)=>{this.$refs.EditTable.editReady(e.row)}},{type:"danger",buttonProps:{link:!0},label:"删除",handler:(t,e)=>{O({title:"提示",message:`确认删除${e.row.filepath}`,type:"warning",confirmHandlerPromise:r=>C(e.row.id).then(()=>{this.$refs.EditTable.search()})})}},{type:"primary",buttonProps:{link:!0},show:(t,e)=>!!e.row.filepath&&!e.row.remote,label:"重新上传",handler:(t,e)=>this.$refs.GOORyonaSelectMediaDialog.open().then(r=>x(e.row.id,r))}]},searchFormProp:{formConfig:{labelWidth:"100px",labelPosition:"right",gutter:32}},formProp:{formConfig:{selectEditMode:!0,buttonPosition:"right"},buttons:[{type:"primary",label:"提交",handler:(t,e,r)=>t.formInstance.submitForm().then(a=>E(t.formData.id,a).then(o=>{this.$refs.EditTable.editConfirm(o)}))}]},fields:[{type:"select",label:"ID",prop:"id",span:this.mobileMode?24:12,tableProps:{width:60},showInForm:!1},{type:"select",prop:"bid",label:"Bangumi",formProps:{remote:!0,filterable:!0,remoteMethod:t=>{t&&F(t).then(e=>{this.bangumiOptions=e.map(r=>({label:r.name||r.nname,subLabel:r.nname,value:r.subject}))})}},tableProps:{width:250,formatter:(t,e,r)=>{var a,o;return`${t.filepath?"":"[正在上传]"}${((a=t.bangumi)==null?void 0:a.name)||((o=t.bangumi)==null?void 0:o.nname)}`}},showInForm:!0,options:()=>this.bangumiOptions,span:this.mobileMode?24:12},{type:"number",prop:"ep",label:"集数",formProps:{min:0},showInForm:!1,tableProps:{width:80}},{type:"date-picker",prop:"start",label:"开始时间",showInForm:!1,showInTable:!this.mobileMode,tableProps:{width:120,formatter:(t,e,r)=>this.secondsToTimeString(r)}},{type:"date-picker",prop:"end",label:"结束时间",showInForm:!1,showInTable:!this.mobileMode,tableProps:{width:120,formatter:(t,e,r)=>this.secondsToTimeString(r)}},{type:"date-picker",prop:"时长",label:"时长",showInForm:!1,tableProps:{width:120,formatter:(t,e,r)=>c.subtract(t.end,t.start)+"S"}},{type:"select",prop:"tags",valueSplitChar:",",formProps:{multiple:!0,filterable:!0},span:this.mobileMode?24:12,optionsBaseCode:"VIDEO_TAG",label:"标签"},{type:"input",prop:"collections",label:"所在集合",showInForm:!1,tableProps:{width:200,formatter:(t,e,r)=>t.collections.map(a=>`[${a.title}]`).join("")}},{type:"confirm",prop:"storeOnly",label:"仅储存",showInForm:!0,showInTable:!1,defaultValue:()=>!0},{type:"buttons",showInTable:!1,showInForm:t=>t.meta.isSearchForm===!0,hiddenLabel:!0,label:"搜索操作",prop:"搜索操作",span:6,formItemProp:{labelWidth:"0px"},buttons:[{label:t=>this.isExSearch?"收起":"展开",leftIcon:t=>this.isExSearch?k:B,type:"primary",buttonProps:{link:!0},handler:t=>{this.isExSearch=!this.isExSearch}},{label:"查询",type:"primary",handler:t=>{const{meta:e}=t,{_editTable:r}=e,{editTableInstance:a}=r;a.search()}},{label:"重置",type:"primary",buttonProps:{plain:!0},handler:t=>{const{meta:e}=t,{_editTable:r}=e,{editTableInstance:a}=r;a.search({reset:!0})}}]}]}},methods:{onLoad(t,e){return L({size:t.size,page:t.current,andLike:{tags:e.tags||void 0},andEqual:{bid:e.bid||void 0},storeOnly:e.storeOnly}).then(r=>({tableData:r.records,total:r.total}))},secondsToTimeString(t){t=Math.max(0,t);const e=Math.floor(t%1*1e3),r=Math.floor(t),a=Math.floor(r/3600),o=Math.floor(r%3600/60),i=r%60,d=String(a).padStart(2,"0"),p=String(o).padStart(2,"0"),u=String(i).padStart(2,"0"),l=e>0?"."+String(e).padStart(3,"0"):"";return`${d}:${p}:${u}${l}`}}},K={class:"page"},Q={class:"table-top"};function X(t,e,r,a,o,i){const d=n("PageHeader"),p=n("el-button"),u=n("edit-table"),l=n("GOORyonaCreateGroupDialog"),b=n("GOORyonaVideoPreviewDialog"),D=n("GOORyonaSelectMediaDialog");return f(),y("div",K,[s(d),s(u,{ref:"EditTable",modelValue:o.tableData,"onUpdate:modelValue":e[1]||(e[1]=h=>o.tableData=h),selected:o.selected,"onUpdate:selected":e[2]||(e[2]=h=>o.selected=h),"show-search-form":!0,fields:o.fields,"table-prop":o.tableProp,"search-form-prop":o.searchFormProp,"form-prop":o.formProp,"search-loader":i.onLoad},{"table-top":m(()=>[V("div",Q,[s(p,{disabled:o.selected.length<2,type:"primary",onClick:e[0]||(e[0]=()=>{t.$refs.GOORyonaCreateGroupDialog.open({materials:o.selected})})},{default:m(()=>e[3]||(e[3]=[_(" 生成集合 ")])),_:1},8,["disabled"])])]),_:1},8,["modelValue","selected","fields","table-prop","search-form-prop","form-prop","search-loader"]),s(l,{ref:"GOORyonaCreateGroupDialog"},null,512),s(b,{ref:"GOORyonaVideoPreviewDialog"},null,512),s(D,{ref:"GOORyonaSelectMediaDialog"},null,512)])}const oe=w(J,[["render",X],["__scopeId","data-v-61e62e11"]]);export{oe as default};