import{P as C}from"./8edce4dc.js";import{_ as I,A as k,aD as w,az as F,aE as m,Z as O,aF as B,au as x,aG as N,ay as q,b as d,d as u,e as f,p as c,w as h,h as b,f as A,g,l as V,t as v,F as z,a0 as L,a1 as H}from"./assets/index-88e13805.js";import{M as T,P as R}from"./1eb4712a.js";const G={components:{PageHeader:C,AsyncButtom:k,MediaBrowser:T,PreviewScreenshots:R},data(){return{previewVideoSrc:"",previewVideoSize:0,needUpdatePreviewVideoSrc:!1,canAutoUpdateEnd:!0,formConfig:{labelPosition:"top"},bangumiOptions:[],editTargetOptions:[],editingProps:[],formData:{},fields:[{type:"switch",label:"编辑模式",prop:"useEditMode",defaultValue:()=>!1,required:!0,dontCheckEdit:!0},{type:"select",label:"编辑目标",prop:"id",showInForm:e=>!!e.formData.useEditMode,required:!0,dontCheckEdit:!0,options:()=>this.editTargetOptions,onCreated:()=>{w().then(e=>{this.editTargetOptions=e.map(a=>({label:a.filepath.slice(1),value:a.id}))})},formProps:{remote:!0,filterable:!0,remoteMethod:e=>{w({keyword:e}).then(a=>{this.editTargetOptions=a.map(r=>({label:r.filepath.slice(1),value:r.id}))})}}},{type:"select",prop:"bid",label:"Bangumi Id",formProps:{remote:!0,filterable:!0,remoteMethod:e=>{e&&F(e).then(a=>{this.bangumiOptions=a.map(r=>({label:r.name||r.nname,subLabel:r.nname,value:r.subject}))})}},options:()=>this.bangumiOptions,required:e=>!e.formData.useEditMode||this.editingProps.includes("bid"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("bid")},{type:"number",prop:"ep",label:"集数",formProps:{min:0},required:e=>!e.formData.useEditMode||this.editingProps.includes("ep"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("ep")},{type:"slot",prop:"sourcePath",slotName:"fileBrowser",label:"文件",required:!0,onChange:(e,a,r)=>{this.needUpdatePreviewVideoSrc=!0},showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"tsSelector",prop:"start",label:"开始时间",afterSlotName:"screenshots",required:!0,defaultValue:()=>"00:00:00.0",onChange:(e,a,r)=>{r&&(this.needUpdatePreviewVideoSrc=!0,this.canAutoUpdateEnd&&(this.formData.end=this.formData.start),this.formData.thumbnail=this.formData.start)},showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"tsSelector",prop:"end",label:"结束时间",afterSlotName:"screenshots",required:!0,defaultValue:()=>"00:00:00.0",onChange:(e,a,r)=>{this.needUpdatePreviewVideoSrc=!0,r&&(this.canAutoUpdateEnd=!1)},rules:e=>[{validator:(a,r,s)=>{const o=m(r),p=m(e.formData.start);o<=p?s(`结束时间[${o}]不能小于等于开始时间[${p}]`):s()},trigger:"blur"}],showInForm:e=>!e.formData.useEditMode},{type:"slot",slotName:"previewVideo",hiddenLabel:!0,showInForm:e=>!!e.formData.sourcePath&&!!e.formData.start&&!!e.formData.end},{type:"select",prop:"tags",valueSplitChar:",",formProps:{multiple:!0,filterable:!0,allowCreate:!0},createOptionValidator:(e,a)=>{var r;return(r=a==null?void 0:a.startsWith)!=null&&r.call(a,"#")?!0:(this.$message({type:"warning",message:"tag必须为#开头",duration:5e3}),!1)},optionsBaseCode:"VIDEO_TAG",label:"标签",required:e=>e.formData.useEditMode&&this.editingProps.includes("tags"),disabled:e=>e.formData.useEditMode&&!this.editingProps.includes("tags")},{type:"slot",slotName:"tsSelector",prop:"thumbnail",afterSlotName:"screenshots",formProps:{multiple:!0},label:"封面",rules:e=>[{validator:(a,r,s)=>{const o=m(r),p=m(e.formData.start),_=m(e.formData.end);o===0?s():o<p?s(`封面时间[${o}]不能小于开始时间[${p}]`):o>_?s(`封面时间[${o}]不能大于结束时间[${_}]`):s()},trigger:"submit"}],defaultValue:()=>"00:00:00.0",showInForm:e=>!e.formData.useEditMode},{type:"number",prop:"previews",formProps:{multiple:!0},label:"预览图",showInForm:e=>!e.formData.useEditMode},{type:"switch",prop:"publish",label:"立即发布",defaultValue:()=>!1,showInForm:e=>!e.formData.useEditMode}],buttons:[{type:"primary",label:"提交",handler:(e,a)=>e.formInstance.submitForm().then(r=>(r.useEditMode?this.editMaterial(e,r):this.createMaterial(e,r)).then(()=>{O.success("提交成功"),e.formInstance.resetFormData(),this.editingProps=[],this.previewVideoSrc="",this.previewVideoSize=0,this.needUpdatePreviewVideoSrc=!1,this.canAutoUpdateEnd=!0}))},{label:"恢复上次数据",handler:(e,a)=>{const r=localStorage.getItem("ryona-last");r&&e.formInstance.resetFormData(JSON.parse(r))}}]}},methods:{previewVideo(){return this.needUpdatePreviewVideoSrc=!1,B({sourcePath:this.formData.sourcePath,start:this.formData.start,end:this.formData.end}).then(e=>{this.previewVideoSrc&&URL.revokeObjectURL(this.previewVideoSrc),this.previewVideoSrc=URL.createObjectURL(e),this.previewVideoSize=(e.size/(1024*1024)).toFixed(2)})},createMaterial(e,a){localStorage.setItem("ryona-last",JSON.stringify(a));const r=m(a.start);let s=m(a.thumbnail);s&&(s=Math.max(x.subtract(s,r),0));const o={...a,thumbnail:s};return o.tags||delete o.tags,delete o.useEditMode,N(o)},editMaterial(e,a){const r={};for(const s of this.editingProps)r[s]=a[s];return q(a.id,r)}}},j=e=>(L("data-v-0ab5020a"),e=e(),H(),e),J={class:"page"},W={class:"label-style"},Z={key:0,class:"remarks"},K={key:0,class:"remarks"},Q=j(()=>b("span",null,".",-1)),X={class:"screenshots-video-box"},Y={class:"controls"},$={key:0,class:"size"},ee={key:1,class:"tips"},te=["src"];function re(e,a,r,s,o,p){const _=d("PageHeader"),P=d("el-checkbox"),S=d("MediaBrowser"),y=d("el-time-picker"),D=d("el-input-number"),M=d("PreviewScreenshots"),E=d("AsyncButtom"),U=d("EasyForm");return u(),f("div",J,[c(_),c(U,{modelValue:o.formData,"onUpdate:modelValue":a[0]||(a[0]=t=>o.formData=t),fields:o.fields,buttons:o.buttons,"form-config":o.formConfig},{label:h(t=>[b("div",W,[t.formData.useEditMode&&!t.getPropValue(t.field.dontCheckEdit)?(u(),A(P,{key:0,"model-value":o.editingProps.includes(t.field.prop),"onUpdate:modelValue":i=>{i?o.editingProps.push(t.field.prop):o.editingProps.splice(o.editingProps.indexOf(t.field.prop),1)}},{default:h(()=>[t.getPropValue(t.field.required)?(u(),f("span",Z," * ")):g("",!0),V(" "+v(t.field.label),1)]),_:2},1032,["model-value","onUpdate:modelValue"])):(u(),f(z,{key:1},[t.getPropValue(t.field.required)?(u(),f("span",K," * ")):g("",!0),V(" "+v(t.field.label),1)],64))])]),fileBrowser:h(t=>[c(S,{modelValue:t.formData[t.field.prop],"onUpdate:modelValue":i=>t.formData[t.field.prop]=i,checkMode:"single"},null,8,["modelValue","onUpdate:modelValue"])]),tsSelector:h(t=>[c(y,{"model-value":t.formData[t.field.prop].split(".")[0],"value-format":"HH:mm:ss",format:"HH:mm:ss",style:{width:"120px"},"onUpdate:modelValue":i=>{var l,n;t.formData[t.field.prop]=`${i||"00:00:00"}.${t.formData[t.field.prop].split(".")[1]}`,(n=(l=t.field).onChange)==null||n.call(l,t,i,!0)}},null,8,["model-value","onUpdate:modelValue"]),Q,c(D,{"model-value":Number("0."+t.formData[t.field.prop].split(".")[1]),min:0,max:1,precision:3,step:.1,style:{width:"120px"},"onUpdate:modelValue":i=>{var l,n;t.formData[t.field.prop]=`${t.formData[t.field.prop].split(".")[0]}.${String(i).split(".")[1]||0}`,(n=(l=t.field).onChange)==null||n.call(l,t,i,!0)}},null,8,["model-value","step","onUpdate:modelValue"])]),screenshots:h(t=>[c(M,{modelValue:t.formData[t.field.prop],sourcePath:t.formData.sourcePath,"onUpdate:modelValue":i=>{var l,n;t.formData[t.field.prop]=i,(n=(l=t.field)==null?void 0:l.onChange)==null||n.call(l,t,i,!0)}},null,8,["modelValue","sourcePath","onUpdate:modelValue"])]),previewVideo:h(()=>[b("div",X,[b("div",Y,[c(E,{type:"primary",onLoadingClick:()=>p.previewVideo()},{default:h(()=>[V(" 预览切片 ")]),_:1},8,["onLoadingClick"]),o.previewVideoSize?(u(),f("div",$,v(o.previewVideoSize)+"MB ",1)):g("",!0),o.needUpdatePreviewVideoSrc?(u(),f("div",ee," 需要更新预览 ")):g("",!0)]),o.previewVideoSrc?(u(),f("video",{key:0,class:"video",controls:"",preload:"none",src:o.previewVideoSrc},null,8,te)):g("",!0)])]),_:1},8,["modelValue","fields","buttons","form-config"])])}const ie=I(G,[["render",re],["__scopeId","data-v-0ab5020a"]]);export{ie as default};