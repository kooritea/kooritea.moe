import{gb as oe,b9 as O,eW as le,bm as D,bH as F,bA as P,c4 as ee,bB as te,bF as ie,r as S,c as L,ca as ce,bf as A,b0 as U,d as R,f as I,w as ae,Q as ue,h as W,n as N,bl as z,i as $,aZ as fe,bL as de,b2 as ne,e as se,p as K,F as ve,bz as me,bN as pe,bw as B,bE as X,aa as V,c9 as he,bk as Y,c3 as be,a as ge,ai as ye,o as Se,m as we,aT as Ee,g as ze,bQ as Te,bI as _e,cW as xe}from"./assets/index-cf86c5d1.js";var He=/\s/;function ke(e){for(var t=e.length;t--&&He.test(e.charAt(t)););return t}var Ce=/^\s+/;function Le(e){return e&&e.slice(0,ke(e)+1).replace(Ce,"")}var q=0/0,Be=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Pe=parseInt;function G(e){if(typeof e=="number")return e;if(oe(e))return q;if(O(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=O(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Le(e);var a=Re.test(e);return a||Ne.test(e)?Pe(e.slice(2),a?2:8):Be.test(e)?q:+e}var Me=function(){return le.Date.now()};const M=Me;var Oe="Expected a function",Ae=Math.max,Ie=Math.min;function et(e,t,a){var r,i,u,d,c,l,v=0,g=!1,o=!1,f=!0;if(typeof e!="function")throw new TypeError(Oe);t=G(t)||0,O(a)&&(g=!!a.leading,o="maxWait"in a,u=o?Ae(G(a.maxWait)||0,t):u,f="trailing"in a?!!a.trailing:f);function m(s){var h=r,w=i;return r=i=void 0,v=s,d=e.apply(w,h),d}function b(s){return v=s,c=setTimeout(y,t),g?m(s):d}function T(s){var h=s-l,w=s-v,k=t-h;return o?Ie(k,u-w):k}function E(s){var h=s-l,w=s-v;return l===void 0||h>=t||h<0||o&&w>=u}function y(){var s=M();if(E(s))return p(s);c=setTimeout(y,T(s))}function p(s){return c=void 0,f&&r?m(s):(r=i=void 0,d)}function n(){c!==void 0&&clearTimeout(c),v=0,r=l=i=c=void 0}function x(){return c===void 0?d:p(M())}function H(){var s=M(),h=E(s);if(r=arguments,i=this,l=s,h){if(c===void 0)return b(l);if(o)return clearTimeout(c),c=setTimeout(y,t),m(l)}return c===void 0&&(c=setTimeout(y,t)),d}return H.cancel=n,H.flush=x,H}const C=4,We={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},$e=({move:e,size:t,bar:a})=>({[a.size]:t,transform:`translate${a.axis}(${e}%)`}),j=Symbol("scrollbarContextKey"),De=D({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Fe="Thumb",je=P({__name:"thumb",props:De,setup(e){const t=e,a=ee(j),r=te("scrollbar");a||ie(Fe,"can not inject scrollbar context");const i=S(),u=S(),d=S({}),c=S(!1);let l=!1,v=!1,g=ne?document.onselectstart:null;const o=L(()=>We[t.vertical?"vertical":"horizontal"]),f=L(()=>$e({size:t.size,move:t.move,bar:o.value})),m=L(()=>i.value[o.value.offset]**2/a.wrapElement[o.value.scrollSize]/t.ratio/u.value[o.value.offset]),b=s=>{var h;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(h=window.getSelection())==null||h.removeAllRanges(),E(s);const w=s.currentTarget;w&&(d.value[o.value.axis]=w[o.value.offset]-(s[o.value.client]-w.getBoundingClientRect()[o.value.direction]))},T=s=>{if(!u.value||!i.value||!a.wrapElement)return;const h=Math.abs(s.target.getBoundingClientRect()[o.value.direction]-s[o.value.client]),w=u.value[o.value.offset]/2,k=(h-w)*100*m.value/i.value[o.value.offset];a.wrapElement[o.value.scroll]=k*a.wrapElement[o.value.scrollSize]/100},E=s=>{s.stopImmediatePropagation(),l=!0,document.addEventListener("mousemove",y),document.addEventListener("mouseup",p),g=document.onselectstart,document.onselectstart=()=>!1},y=s=>{if(!i.value||!u.value||l===!1)return;const h=d.value[o.value.axis];if(!h)return;const w=(i.value.getBoundingClientRect()[o.value.direction]-s[o.value.client])*-1,k=u.value[o.value.offset]-h,re=(w-k)*100*m.value/i.value[o.value.offset];a.wrapElement[o.value.scroll]=re*a.wrapElement[o.value.scrollSize]/100},p=()=>{l=!1,d.value[o.value.axis]=0,document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",p),H(),v&&(c.value=!1)},n=()=>{v=!1,c.value=!!t.size},x=()=>{v=!0,c.value=l};ce(()=>{H(),document.removeEventListener("mouseup",p)});const H=()=>{document.onselectstart!==g&&(document.onselectstart=g)};return A(U(a,"scrollbarElement"),"mousemove",n),A(U(a,"scrollbarElement"),"mouseleave",x),(s,h)=>(R(),I(de,{name:z(r).b("fade"),persisted:""},{default:ae(()=>[ue(W("div",{ref_key:"instance",ref:i,class:N([z(r).e("bar"),z(r).is(z(o).key)]),onMousedown:T},[W("div",{ref_key:"thumb",ref:u,class:N(z(r).e("thumb")),style:$(z(f)),onMousedown:b},null,38)],34),[[fe,s.always||c.value]])]),_:1},8,["name"]))}});var Q=F(je,[["__file","thumb.vue"]]);const Ue=D({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Ke=P({__name:"bar",props:Ue,setup(e,{expose:t}){const a=e,r=ee(j),i=S(0),u=S(0),d=S(""),c=S(""),l=S(1),v=S(1);return t({handleScroll:f=>{if(f){const m=f.offsetHeight-C,b=f.offsetWidth-C;u.value=f.scrollTop*100/m*l.value,i.value=f.scrollLeft*100/b*v.value}},update:()=>{const f=r==null?void 0:r.wrapElement;if(!f)return;const m=f.offsetHeight-C,b=f.offsetWidth-C,T=m**2/f.scrollHeight,E=b**2/f.scrollWidth,y=Math.max(T,a.minSize),p=Math.max(E,a.minSize);l.value=T/(m-T)/(y/(m-y)),v.value=E/(b-E)/(p/(b-p)),c.value=y+C<m?`${y}px`:"",d.value=p+C<b?`${p}px`:""}}),(f,m)=>(R(),se(ve,null,[K(Q,{move:i.value,ratio:v.value,size:d.value,always:f.always},null,8,["move","ratio","size","always"]),K(Q,{move:u.value,ratio:l.value,size:c.value,vertical:"",always:f.always},null,8,["move","ratio","size","always"])],64))}});var Xe=F(Ke,[["__file","bar.vue"]]);const Ve=D({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:me([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...pe(["ariaLabel","ariaOrientation"])}),Ye={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(B)},qe="ElScrollbar",Ge=P({name:qe}),Qe=P({...Ge,props:Ve,emits:Ye,setup(e,{expose:t,emit:a}){const r=e,i=te("scrollbar");let u,d;const c=S(),l=S(),v=S(),g=S(),o=L(()=>{const n={};return r.height&&(n.height=X(r.height)),r.maxHeight&&(n.maxHeight=X(r.maxHeight)),[r.wrapStyle,n]}),f=L(()=>[r.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!r.native}]),m=L(()=>[i.e("view"),r.viewClass]),b=()=>{var n;l.value&&((n=g.value)==null||n.handleScroll(l.value),a("scroll",{scrollTop:l.value.scrollTop,scrollLeft:l.value.scrollLeft}))};function T(n,x){Te(n)?l.value.scrollTo(n):B(n)&&B(x)&&l.value.scrollTo(n,x)}const E=n=>{B(n)&&(l.value.scrollTop=n)},y=n=>{B(n)&&(l.value.scrollLeft=n)},p=()=>{var n;(n=g.value)==null||n.update()};return V(()=>r.noresize,n=>{n?(u==null||u(),d==null||d()):({stop:u}=he(v,p),d=A("resize",p))},{immediate:!0}),V(()=>[r.maxHeight,r.height],()=>{r.native||Y(()=>{var n;p(),l.value&&((n=g.value)==null||n.handleScroll(l.value))})}),be(j,ge({scrollbarElement:c,wrapElement:l})),ye(()=>{r.native||Y(()=>{p()})}),Se(()=>p()),t({wrapRef:l,update:p,scrollTo:T,setScrollTop:E,setScrollLeft:y,handleScroll:b}),(n,x)=>(R(),se("div",{ref_key:"scrollbarRef",ref:c,class:N(z(i).b())},[W("div",{ref_key:"wrapRef",ref:l,class:N(z(f)),style:$(z(o)),onScroll:b},[(R(),I(Ee(n.tag),{id:n.id,ref_key:"resizeRef",ref:v,class:N(z(m)),style:$(n.viewStyle),role:n.role,"aria-label":n.ariaLabel,"aria-orientation":n.ariaOrientation},{default:ae(()=>[we(n.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),n.native?ze("v-if",!0):(R(),I(Xe,{key:0,ref_key:"barRef",ref:g,always:n.always,"min-size":n.minSize},null,8,["always","min-size"]))],2))}});var Ze=F(Qe,[["__file","scrollbar.vue"]]);const tt=_e(Ze),_=new Map;let Z;ne&&(document.addEventListener("mousedown",e=>Z=e),document.addEventListener("mouseup",e=>{for(const t of _.values())for(const{documentHandler:a}of t)a(e,Z)}));function J(e,t){let a=[];return Array.isArray(t.arg)?a=t.arg:xe(t.arg)&&a.push(t.arg),function(r,i){const u=t.instance.popperRef,d=r.target,c=i==null?void 0:i.target,l=!t||!t.instance,v=!d||!c,g=e.contains(d)||e.contains(c),o=e===d,f=a.length&&a.some(b=>b==null?void 0:b.contains(d))||a.length&&a.includes(c),m=u&&(u.contains(d)||u.contains(c));l||v||g||o||f||m||t.value(r,i)}}const at={beforeMount(e,t){_.has(e)||_.set(e,[]),_.get(e).push({documentHandler:J(e,t),bindingFn:t.value})},updated(e,t){_.has(e)||_.set(e,[]);const a=_.get(e),r=a.findIndex(u=>u.bindingFn===t.oldValue),i={documentHandler:J(e,t),bindingFn:t.value};r>=0?a.splice(r,1,i):a.push(i)},unmounted(e){_.delete(e)}};export{We as B,at as C,tt as E,C as G,Ve as a,De as b,j as c,et as d,$e as r,Ye as s,G as t};