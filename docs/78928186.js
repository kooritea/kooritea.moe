import{_ as j,S as R,q as F,a as A,r as w,b as _,d as m,e as v,h as u,F as x,E as $,f as b,w as B,t as k,n as T,g2 as L,g3 as N,a3 as O,g4 as q,a0 as I,b1 as z,a7 as K,u as W,K as G,Y as Q,ai as Y,aj as J,aa as X,c as Z,Q as ee,cu as te,T as ae,p as H,g as V,aU as ne,g5 as oe,g6 as le,g7 as U}from"./assets/index-cf86c5d1.js";import{M as se}from"./52898633.js";import{I as re}from"./c53b71e9.js";/* empty css        *//* empty css        *//* empty css        */import{E as ce}from"./29e57315.js";import{E as de}from"./b4c83870.js";const ie={components:{SvgIcon:R,ImageCon:re},props:{init:{type:Boolean,default:!0}},emits:["select"],setup(a,{emit:o}){const{emoteHistory:d}=F(),e=A({name:"history",emote:d.value}),t=A([]),h=w("history"),p=r=>{if(h.value=r.name,r.emote.length===0)return L(r.name).then(c=>{h.value=r.name,r.emote=c.emote.map(S=>({...S,scope:r.name}))})},f=()=>{t.splice(0,t.length),t.push(e),N().then(r=>{t.push(...r.sort((c,S)=>{const M=d.value.findIndex(D=>D.scope===c.name),g=d.value.findIndex(D=>D.scope===S.name);return(M===-1?1/0:M)-(g===-1?1/0:g)})),t.push({name:"add",emote:[]})})};return f(),{onSelect:r=>{o("select",r),d.value=d.value.filter(c=>!(c.scope===r.scope&&c.name===r.name)),d.value=[r,...d.value].slice(0,30),e.emote=d.value},addEmotePackage:()=>{O({title:"导入表情包",message:"输入要添加的B站表情包ID",type:"info",confirmHandlerPromise:r=>q(r.inputValue).then(()=>{I.success("添加成功"),f()}),inputValidator:r=>/^\d+$/.test(r),showInput:!0,inputErrorMessage:"请输入数字"})},currentScope:h,emotePackages:t,selectScope:p}}},ue={class:"emote-selector"},me={class:"emotes"},fe={class:"scopes"},he=["onClick"];function pe(a,o,d,e,t,h){const p=_("ImageCon"),f=_("SvgIcon");return m(),v("div",ue,[u("div",me,[(m(!0),v(x,null,$((e.emotePackages.find(n=>n.name===e.currentScope)||{}).emote||[],n=>(m(),b(p,{key:n.name,class:"emote",alt:n.name,src:`/emoji/${n.scope}/${n.name}.png`,onClick:y=>e.onSelect(n)},{error:B(()=>[u("span",null,k(n.name),1)]),_:2},1032,["alt","src","onClick"]))),128))]),u("div",fe,[(m(!0),v(x,null,$(e.emotePackages,n=>(m(),v("div",{key:n.name,class:T(["scope",{"selected-scope":e.currentScope===n.name}]),onClick:()=>{n.name==="add"?e.addEmotePackage():e.selectScope(n)}},[n.name==="history"?(m(),b(f,{key:0,class:"emote history",name:"icon-time"})):n.name==="add"?(m(),b(f,{key:1,class:"emote history",name:"add"})):(m(),b(p,{key:2,class:"emote",src:`/emoji/${n.name}/${n.name}.png`},{error:B(()=>[u("span",null,k(n.name),1)]),_:2},1032,["src"]))],10,he))),128))])])}const ve=j(ie,[["render",pe],["__scopeId","data-v-6872cbc5"]]);function ge(a){const o=w(null),d=z(ce,{style:{width:"100%"},placeholder:"预约时间",type:"datetime",modelValue:o.value,"onUpdate:modelValue":e=>{var t;o.value=e,(t=d.component)!=null&&t.props&&(d.component.props.modelValue=e)}});O({title:"选择预约时间",message:d,confirmHandlerPromise:e=>a(o),inputValidator:e=>!!o.value,inputErrorMessage:"请选择预约时间"})}const C={},ye={components:{SvgIcon:R,Markdown:se,ButtonBox:K,EmoteSelector:ve,ElPopover:de},props:{modelValue:{type:String,default:()=>""},title:{type:String,default:""},autoHeight:{type:Boolean,default:!0},cache:{type:[String,Boolean],default:""},disabled:{type:Boolean,default:!1},defaultValue:{type:[String,Boolean],default:""},onSubmit:{type:Function,default:()=>{}},showDefaultHandlers:{type:[Boolean,Array],default:()=>!0},exHandlers:{type:Array,default:()=>[]}},setup(a,{emit:o}){const{darkMode:d}=W(),e=w(!0),{computedModelValue:t}=G(a,o),h=w(!1),p=w(null);if(a.cache){const l=Q();if(C[l.fullPath]&&a.cache===!0)I.error("当前页面存在两个需要缓存的编辑器,需要为编辑器传入缓存唯一标识缓存功能才会工作！");else{const s="MDEditorCache."+(a.cache===!0?l.fullPath:`${l.fullPath}.${a.cache}`);t.value=localStorage.getItem(s)||a.defaultValue;let i=null;Y(()=>{C[s]=!0,i=setInterval(()=>{h.value=!0,localStorage.setItem(s,t.value||"")},1e3)}),J(()=>{C[s]=!1,clearInterval(i)}),X(t,()=>{h.value=!1})}}const f=l=>{const s=p.value.selectionStart,i=t.value.slice(0,s),E=t.value.slice(s);t.value=`${i}${l}${E}`},n=w(t.value),y=({reservationDate:l}={})=>{const s=a.onSubmit(t.value,l==null?void 0:l.value);return s instanceof Promise?s.then(()=>{t.value=a.defaultValue,n.value=a.defaultValue}):(t.value=a.defaultValue,n.value=a.defaultValue),s},r=()=>{t.value=""},c=()=>{t.value=n.value},S=[{name:"提交",type:"primary",handler:y,show:()=>Array.isArray(a.showDefaultHandlers)?a.showDefaultHandlers.includes("submit"):a.showDefaultHandlers,sort:10},{name:"预约",type:"primary",handler:()=>{ge(l=>{y({reservationDate:l})})},show:()=>Array.isArray(a.showDefaultHandlers)?a.showDefaultHandlers.includes("reservation"):a.showDefaultHandlers,sort:10},{name:"清除",type:"danger",handler:r,confirm:{message:"确认清空内容?"},show:()=>Array.isArray(a.showDefaultHandlers)?a.showDefaultHandlers.includes("clean"):a.showDefaultHandlers,sort:20},{name:"重置",type:"default",handler:c,confirm:{message:"确认重置内容?"},show:()=>(Array.isArray(a.showDefaultHandlers)?a.showDefaultHandlers.includes("reset"):a.showDefaultHandlers)&&!!n.value,sort:30}],M=Z(()=>[...S,...a.exHandlers]),g=l=>{const s=oe(URL.createObjectURL(l),{handlers:[{name:"上传",type:"primary",handler:()=>{const i=new Date().valueOf().toString();f(`![${i}](--------------------)`),le(l,E=>{const P=Math.round(100*event.loaded/event.total)/10*2;t.value=t.value.replace(new RegExp(`\\!\\[${i}]\\((#*?)(-*?)\\)`),`![${i}](${"#".repeat(P)}${"-".repeat(20-P)})`)}).then(E=>{t.value=t.value.replace(new RegExp(`\\!\\[${i}]\\((#*?)(-*?)\\)`),`![${E.keyname}](${E.local})`)}).catch(()=>{t.value=t.value.replace(new RegExp(`\\!\\[${i}]\\((#*?)(-*?)\\)`),"")}),s.callClose()}},{name:"裁剪为16:9",type:"default",show:()=>{},handler:()=>{U(l,16,9).then(i=>{s.callClose(),g(i)})}},{name:"裁剪为电影尺寸",type:"default",show:()=>{},handler:()=>{U(l,160,67).then(i=>{s.callClose(),g(i)})}},{name:"取消",type:"default",handler:()=>{s.callClose()}}]})};return{darkMode:d,isEditMode:e,computedModelValue:t,resetCache:n,isSave:h,handlers:M,submitHandler:y,cleanHandler:r,resetHandler:c,previewImageBeforeUpload:g,pasteHandler:l=>{if(!(l.clipboardData&&l.clipboardData.items))return;const s=Array.from(l.clipboardData.items).filter(i=>i.kind==="file");if(s.length>0){l.preventDefault();for(const i of s)if(i.type.startsWith("image/")){g(i.getAsFile());return}else I.warning(`不支持的文件类型: ${i.type}`)}},dropHandler:l=>{for(const s of l.dataTransfer.files)if(l.preventDefault(),s.type.startsWith("image/")){g(s);return}else I.warning(`不支持的文件类型: ${s.type}`)},textarea:p,insertText:f}}},_e={class:"fill"},we=["disabled"],Se={key:1,class:"preview"},Ee={class:"bar"},He={class:"bar-left"},be={class:"title"},ke={class:"uploader"},Me={class:"bar-right"},De={key:0,class:"is-save info"};function Ie(a,o,d,e,t,h){const p=_("Markdown"),f=_("SvgIcon"),n=_("EmoteSelector"),y=_("el-popover"),r=_("ButtonBox");return m(),v(x,null,[u("div",ne({class:"md-editor"},a.$attrs),[e.isEditMode?(m(),v("div",{key:0,class:T(["textarea-box",{"auto-height":d.autoHeight}])},[u("pre",_e,k(e.computedModelValue),1),ee(u("textarea",{ref:"textarea","onUpdate:modelValue":o[0]||(o[0]=c=>e.computedModelValue=c),class:"textarea",disabled:d.disabled,onPaste:o[1]||(o[1]=(...c)=>e.pasteHandler&&e.pasteHandler(...c)),onDragover:o[2]||(o[2]=ae(()=>{},["prevent"])),onDrop:o[3]||(o[3]=(...c)=>e.dropHandler&&e.dropHandler(...c))},null,40,we),[[te,e.computedModelValue]])],2)):(m(),v("div",Se,[H(p,{"model-value":e.computedModelValue},null,8,["model-value"])])),u("div",Ee,[u("div",He,[d.disabled?V("",!0):(m(),v(x,{key:0},[u("div",be,k(d.title),1),u("label",ke,[H(f,{class:"button",name:"14"}),u("input",{type:"file",accept:"image/*",onChange:o[4]||(o[4]=c=>{e.previewImageBeforeUpload(c.srcElement.files[0]),c.srcElement.value=""})},null,32)]),H(y,{width:"auto",trigger:"click",effect:e.darkMode?"dark":"light"},{reference:B(()=>[H(f,{class:"button",name:"biaoqing"})]),default:B(()=>[H(n,{onSelect:o[5]||(o[5]=c=>{e.insertText(`[emoji ${c.scope}/${c.name}]`)})})]),_:1},8,["effect"])],64))]),u("div",Me,[e.isSave?(m(),v("span",De,"已保存")):V("",!0),u("span",{class:"preview-switch button",onClick:o[6]||(o[6]=c=>e.isEditMode=!e.isEditMode)},k(e.isEditMode?"预览":"返回编辑"),1)])])],16),e.handlers.length>0?(m(),b(r,{key:0,handlers:e.handlers},null,8,["handlers"])):V("",!0)],64)}const xe=j(ye,[["render",Ie],["__scopeId","data-v-6530e061"]]),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));export{xe as M,Oe as a,ge as u};