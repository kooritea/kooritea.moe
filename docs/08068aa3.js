import{_ as y,L as k,K as N,c as L,r as b,aj as w,ak as H,b as B,d as i,e as r,l as C,p as E,h as _,i as h,n as T}from"./assets/index-6e8a4740.js";const I={components:{LoadingIcon:k},props:{hasNext:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},onLoadingClick:{type:Function,required:!0}},setup(s,{emit:l}){const{computedHasNext:c,computedLoading:e}=N(s,l),d=L(()=>!s.hasNext||e.value),u=()=>{if(!d.value)try{e.value=!0;const t=s.onLoadingClick(e.value);t instanceof Promise?t.then(n=>{typeof(n==null?void 0:n.hasNext)=="boolean"&&(c.value=n.hasNext)}).finally(()=>{e.value=!1}):(typeof(t==null?void 0:t.hasNext)=="boolean"&&(c.value=t.hasNext),e.value=!1)}catch{e.value=!1}},o=b(30);let a=null;const m=t=>{if(d.value)return;const{scrollTop:n,clientHeight:x,scrollHeight:g}=document.documentElement;if(t>0&&Math.abs(g-(n+x))<60){if(o.value--,o.value===0){o.value=30,u();return}a&&clearTimeout(a),a=setTimeout(()=>{o.value=30},500)}},p=t=>{m(t.deltaY)};let f=null;const v=t=>{if(t.touches.length===1){const n=t.touches[0];if(!f){f=n.pageY;return}m((n.pageY-f)/5)}};return w(()=>{window.addEventListener("wheel",p),window.addEventListener("touchmove",v)}),H(()=>{window.removeEventListener("wheel",p),window.addEventListener("touchmove",v)}),{computedLoading:e,nextOffset:o,clickHandler:u,disabled:d}}},O={key:0,class:"loading"},Y={key:1},V={key:2};function z(s,l,c,e,d,u){const o=B("LoadingIcon");return i(),r("div",{class:T(["next-button",{disabled:e.disabled,loading:e.computedLoading}]),onClick:l[0]||(l[0]=(...a)=>e.clickHandler&&e.clickHandler(...a))},[e.computedLoading?(i(),r("span",O,[C(" 加载中 "),E(o)])):c.hasNext?(i(),r("span",Y,"下滑加载更多")):(i(),r("span",V,"没有更多")),_("div",{class:"next-mask",style:h({top:`${e.nextOffset}px`})},[_("span",{class:"next-mask-text",style:h({top:`-${e.nextOffset}px`})}," 下滑加载更多 ",4)],4)],2)}const P=y(I,[["render",z],["__scopeId","data-v-b12f1839"]]);export{P as N};