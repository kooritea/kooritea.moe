import{P as g}from"./9e8b0207.js";import{_ as x,X as V,I as f,r as l,b as u,d as h,e as y,p as n,h as H,l as M,ar as i,a0 as m}from"./assets/index-cf86c5d1.js";import{M as P,u as k}from"./78928186.js";import"./52898633.js";import"./vander_commonjsHelpers-87174ba5.js";import"./c53b71e9.js";/* empty css        *//* empty css        *//* empty css        */import"./29e57315.js";import"./02b52d33.js";import"./651413a2.js";import"./06d618e3.js";import"./c4eb119a.js";import"./b4c83870.js";const G={components:{PageHeader:g,TextInput:V,MDEditor:P,AsyncSwitch:f},setup(){const s=l(""),e=l(!0),a=l(""),o=l(""),d=l(null);return{target:s,isGroup:e,title:a,desp:o,exHandlers:[{name:"发送",type:"primary",handler:()=>{const r=s.value||(e.value?"admin":"kooritea");i(r,e.value?"group":"personal",{text:a.value,desp:o.value||void 0}).then(()=>{m.success("发表成功"),a.value="",d.value.submitHandler()})}},{name:"提交预约",type:"primary",handler:()=>{k(r=>{const p=s.value||(e.value?"admin":"kooritea");return i(p,e.value?"group":"personal",{text:a.value,desp:o.value||void 0,reservation:r.value}).then(()=>{m.success("预约成功"),a.value="",d.value.submitHandler()})})}}],editor:d}}},b={class:"page"},I={class:"group-cell"};function w(s,e,a,o,d,c){const r=u("PageHeader"),p=u("TextInput"),v=u("AsyncSwitch"),_=u("MDEditor");return h(),y("div",b,[n(r),n(p,{modelValue:o.target,"onUpdate:modelValue":e[0]||(e[0]=t=>o.target=t),placeholder:o.isGroup?"admin":"kooritea",style:{"margin-bottom":"12px"}},null,8,["modelValue","placeholder"]),H("div",I,[e[4]||(e[4]=M(" 群发 ")),n(v,{modelValue:o.isGroup,"onUpdate:modelValue":e[1]||(e[1]=t=>o.isGroup=t)},null,8,["modelValue"])]),n(p,{modelValue:o.title,"onUpdate:modelValue":e[2]||(e[2]=t=>o.title=t),placeholder:"标题",style:{"margin-bottom":"12px"}},null,8,["modelValue"]),n(_,{ref:"editor",modelValue:o.desp,"onUpdate:modelValue":e[3]||(e[3]=t=>o.desp=t),"show-default-handlers":["reset","clean"],"ex-handlers":o.exHandlers},null,8,["modelValue","ex-handlers"])])}const J=x(G,[["render",w],["__scopeId","data-v-fdda49d8"]]);export{J as default};