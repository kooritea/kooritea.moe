import{ge as ae,b9 as M,eT as re,bl as $,bG as D,bz as B,c3 as Q,bA as Z,bE as se,r as y,c as C,c9 as ne,be as O,b0 as K,d as N,f as A,w as J,Q as le,h as W,n as R,bk as E,i as I,aZ as oe,bK as ie,b2 as ce,e as ee,p as U,F as ue,by as fe,bM as ve,bv as L,bD as X,aa as F,c8 as me,bj as Y,c2 as de,a as be,ai as pe,o as he,m as ye,aT as ge,g as Se,bP as we,bH as ze}from"./assets/index-bfb8b166.js";var Ee=/\s/;function Te(e){for(var s=e.length;s--&&Ee.test(e.charAt(s)););return s}var _e=/^\s+/;function ke(e){return e&&e.slice(0,Te(e)+1).replace(_e,"")}var G=0/0,xe=/^[-+]0x[0-9a-f]+$/i,He=/^0b[01]+$/i,Ce=/^0o[0-7]+$/i,Le=parseInt;function V(e){if(typeof e=="number")return e;if(ae(e))return G;if(M(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=M(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=ke(e);var o=He.test(e);return o||Ce.test(e)?Le(e.slice(2),o?2:8):xe.test(e)?G:+e}var Ne=function(){return re.Date.now()};const P=Ne;var Re="Expected a function",Be=Math.max,Pe=Math.min;function qe(e,s,o){var l,u,f,m,i,n,b=0,w=!1,r=!1,c=!0;if(typeof e!="function")throw new TypeError(Re);s=V(s)||0,M(o)&&(w=!!o.leading,r="maxWait"in o,f=r?Be(V(o.maxWait)||0,s):f,c="trailing"in o?!!o.trailing:c);function p(a){var d=l,S=u;return l=u=void 0,b=a,m=e.apply(S,d),m}function g(a){return b=a,i=setTimeout(h,s),w?p(a):m}function T(a){var d=a-n,S=a-b,x=s-d;return r?Pe(x,f-S):x}function z(a){var d=a-n,S=a-b;return n===void 0||d>=s||d<0||r&&S>=f}function h(){var a=P();if(z(a))return v(a);i=setTimeout(h,T(a))}function v(a){return i=void 0,c&&l?p(a):(l=u=void 0,m)}function t(){i!==void 0&&clearTimeout(i),b=0,l=n=u=i=void 0}function _(){return i===void 0?m:v(P())}function k(){var a=P(),d=z(a);if(l=arguments,u=this,n=a,d){if(i===void 0)return g(n);if(r)return clearTimeout(i),i=setTimeout(h,s),p(n)}return i===void 0&&(i=setTimeout(h,s)),m}return k.cancel=t,k.flush=_,k}const H=4,Me={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Oe=({move:e,size:s,bar:o})=>({[o.size]:s,transform:`translate${o.axis}(${e}%)`}),j=Symbol("scrollbarContextKey"),Ae=$({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),We="Thumb",Ie=B({__name:"thumb",props:Ae,setup(e){const s=e,o=Q(j),l=Z("scrollbar");o||se(We,"can not inject scrollbar context");const u=y(),f=y(),m=y({}),i=y(!1);let n=!1,b=!1,w=ce?document.onselectstart:null;const r=C(()=>Me[s.vertical?"vertical":"horizontal"]),c=C(()=>Oe({size:s.size,move:s.move,bar:r.value})),p=C(()=>u.value[r.value.offset]**2/o.wrapElement[r.value.scrollSize]/s.ratio/f.value[r.value.offset]),g=a=>{var d;if(a.stopPropagation(),a.ctrlKey||[1,2].includes(a.button))return;(d=window.getSelection())==null||d.removeAllRanges(),z(a);const S=a.currentTarget;S&&(m.value[r.value.axis]=S[r.value.offset]-(a[r.value.client]-S.getBoundingClientRect()[r.value.direction]))},T=a=>{if(!f.value||!u.value||!o.wrapElement)return;const d=Math.abs(a.target.getBoundingClientRect()[r.value.direction]-a[r.value.client]),S=f.value[r.value.offset]/2,x=(d-S)*100*p.value/u.value[r.value.offset];o.wrapElement[r.value.scroll]=x*o.wrapElement[r.value.scrollSize]/100},z=a=>{a.stopImmediatePropagation(),n=!0,document.addEventListener("mousemove",h),document.addEventListener("mouseup",v),w=document.onselectstart,document.onselectstart=()=>!1},h=a=>{if(!u.value||!f.value||n===!1)return;const d=m.value[r.value.axis];if(!d)return;const S=(u.value.getBoundingClientRect()[r.value.direction]-a[r.value.client])*-1,x=f.value[r.value.offset]-d,te=(S-x)*100*p.value/u.value[r.value.offset];o.wrapElement[r.value.scroll]=te*o.wrapElement[r.value.scrollSize]/100},v=()=>{n=!1,m.value[r.value.axis]=0,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",v),k(),b&&(i.value=!1)},t=()=>{b=!1,i.value=!!s.size},_=()=>{b=!0,i.value=n};ne(()=>{k(),document.removeEventListener("mouseup",v)});const k=()=>{document.onselectstart!==w&&(document.onselectstart=w)};return O(K(o,"scrollbarElement"),"mousemove",t),O(K(o,"scrollbarElement"),"mouseleave",_),(a,d)=>(N(),A(ie,{name:E(l).b("fade"),persisted:""},{default:J(()=>[le(W("div",{ref_key:"instance",ref:u,class:R([E(l).e("bar"),E(l).is(E(r).key)]),onMousedown:T},[W("div",{ref_key:"thumb",ref:f,class:R(E(l).e("thumb")),style:I(E(c)),onMousedown:g},null,38)],34),[[oe,a.always||i.value]])]),_:1},8,["name"]))}});var q=D(Ie,[["__file","thumb.vue"]]);const $e=$({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),De=B({__name:"bar",props:$e,setup(e,{expose:s}){const o=e,l=Q(j),u=y(0),f=y(0),m=y(""),i=y(""),n=y(1),b=y(1);return s({handleScroll:c=>{if(c){const p=c.offsetHeight-H,g=c.offsetWidth-H;f.value=c.scrollTop*100/p*n.value,u.value=c.scrollLeft*100/g*b.value}},update:()=>{const c=l==null?void 0:l.wrapElement;if(!c)return;const p=c.offsetHeight-H,g=c.offsetWidth-H,T=p**2/c.scrollHeight,z=g**2/c.scrollWidth,h=Math.max(T,o.minSize),v=Math.max(z,o.minSize);n.value=T/(p-T)/(h/(p-h)),b.value=z/(g-z)/(v/(g-v)),i.value=h+H<p?`${h}px`:"",m.value=v+H<g?`${v}px`:""}}),(c,p)=>(N(),ee(ue,null,[U(q,{move:u.value,ratio:b.value,size:m.value,always:c.always},null,8,["move","ratio","size","always"]),U(q,{move:f.value,ratio:n.value,size:i.value,vertical:"",always:c.always},null,8,["move","ratio","size","always"])],64))}});var je=D(De,[["__file","bar.vue"]]);const Ke=$({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:fe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...ve(["ariaLabel","ariaOrientation"])}),Ue={scroll:({scrollTop:e,scrollLeft:s})=>[e,s].every(L)},Xe="ElScrollbar",Fe=B({name:Xe}),Ye=B({...Fe,props:Ke,emits:Ue,setup(e,{expose:s,emit:o}){const l=e,u=Z("scrollbar");let f,m;const i=y(),n=y(),b=y(),w=y(),r=C(()=>{const t={};return l.height&&(t.height=X(l.height)),l.maxHeight&&(t.maxHeight=X(l.maxHeight)),[l.wrapStyle,t]}),c=C(()=>[l.wrapClass,u.e("wrap"),{[u.em("wrap","hidden-default")]:!l.native}]),p=C(()=>[u.e("view"),l.viewClass]),g=()=>{var t;n.value&&((t=w.value)==null||t.handleScroll(n.value),o("scroll",{scrollTop:n.value.scrollTop,scrollLeft:n.value.scrollLeft}))};function T(t,_){we(t)?n.value.scrollTo(t):L(t)&&L(_)&&n.value.scrollTo(t,_)}const z=t=>{L(t)&&(n.value.scrollTop=t)},h=t=>{L(t)&&(n.value.scrollLeft=t)},v=()=>{var t;(t=w.value)==null||t.update()};return F(()=>l.noresize,t=>{t?(f==null||f(),m==null||m()):({stop:f}=me(b,v),m=O("resize",v))},{immediate:!0}),F(()=>[l.maxHeight,l.height],()=>{l.native||Y(()=>{var t;v(),n.value&&((t=w.value)==null||t.handleScroll(n.value))})}),de(j,be({scrollbarElement:i,wrapElement:n})),pe(()=>{l.native||Y(()=>{v()})}),he(()=>v()),s({wrapRef:n,update:v,scrollTo:T,setScrollTop:z,setScrollLeft:h,handleScroll:g}),(t,_)=>(N(),ee("div",{ref_key:"scrollbarRef",ref:i,class:R(E(u).b())},[W("div",{ref_key:"wrapRef",ref:n,class:R(E(c)),style:I(E(r)),onScroll:g},[(N(),A(ge(t.tag),{id:t.id,ref_key:"resizeRef",ref:b,class:R(E(p)),style:I(t.viewStyle),role:t.role,"aria-label":t.ariaLabel,"aria-orientation":t.ariaOrientation},{default:J(()=>[ye(t.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),t.native?Se("v-if",!0):(N(),A(je,{key:0,ref_key:"barRef",ref:w,always:t.always,"min-size":t.minSize},null,8,["always","min-size"]))],2))}});var Ge=D(Ye,[["__file","scrollbar.vue"]]);const Qe=ze(Ge);export{Me as B,Qe as E,H as G,Ke as a,Ae as b,j as c,qe as d,Oe as r,Ue as s,V as t};