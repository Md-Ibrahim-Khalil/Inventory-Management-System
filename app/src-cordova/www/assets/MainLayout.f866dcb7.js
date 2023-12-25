import{j as z,c as u,h as v,k as H,u as $e,r as S,l as ye,w as L,o as ke,Q as le,m as Q,g as E,s as Qe,i as oe,n as Pe,p as Te,q as ie,t as Ce,v as Se,x as re,y as Ie,z as He,A as Ee,B as se,C as Re,D as Me,E as Y,G as U,a as ue,H as Fe,I as je,J as ne,K as De,_ as Ue,L as Ne,M as We,O as Ke,R as M,S as N,U as w,V as T,W as Ge,X as I,f,Y as fe,Z,$ as Je,a0 as Xe,F as Ye,a1 as Ze,a2 as ve,a3 as W}from"./index.26e9a75d.js";import{Q as et,a as tt,b as nt}from"./QList.2a5ebac8.js";import{Q as qe}from"./QMenu.d6e5798a.js";import{Q as ae}from"./QResizeObserver.11079655.js";import{Q as K}from"./QPageSticky.27680643.js";import{Q as at}from"./QScrollObserver.3aa86501.js";import{C as lt}from"./ClosePopup.67aaea72.js";import{u as ot}from"./use-quasar.3eeb7c45.js";import{u as it}from"./vue-i18n.runtime.esm-bundler.9f6171f1.js";import{a as ee}from"./index.27935773.js";import"./selection.098ea83e.js";import"./axios.e6fce94e.js";var rt=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const a=u(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:a.value},H(t.default))}}),st=z({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const a=u(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${n.length>0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>v("div",{class:a.value},H(t.default))}}),ut=z({name:"QBtnDropdown",props:{...$e,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:t,emit:a}){const{proxy:n}=E(),o=S(e.modelValue),r=S(null),c=ye(),i=u(()=>{const l={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,"aria-owns":c,"aria-label":e.toggleAriaLabel||n.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(l["aria-disabled"]="true"),l}),b=u(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":""));L(()=>e.modelValue,l=>{r.value!==null&&r.value[l?"show":"hide"]()}),L(()=>e.split,k);function g(l){o.value=!0,a("before-show",l)}function x(l){a("show",l),a("update:modelValue",!0)}function h(l){o.value=!1,a("before-hide",l)}function V(l){a("hide",l),a("update:modelValue",!1)}function p(l){a("click",l)}function y(l){Qe(l),k(),a("click",l)}function _(l){r.value!==null&&r.value.toggle(l)}function q(l){r.value!==null&&r.value.show(l)}function k(l){r.value!==null&&r.value.hide(l)}return Object.assign(n,{show:q,hide:k,toggle:_}),ke(()=>{e.modelValue===!0&&q()}),()=>{const l=[v(le,{class:b.value,name:e.dropdownIcon||n.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&l.push(v(qe,{ref:r,id:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,onBeforeShow:g,onShow:x,onBeforeHide:h,onHide:V},t.default)),e.split===!1?v(Q,{class:"q-btn-dropdown q-btn-dropdown--simple",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,...i.value,onClick:p},{default:()=>H(t.label,[]).concat(l),loading:t.loading}):v(st,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",outline:e.outline,flat:e.flat,rounded:e.rounded,square:e.square,push:e.push,unelevated:e.unelevated,glossy:e.glossy,stretch:e.stretch},()=>[v(Q,{class:"q-btn-dropdown--current",...e,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,iconRight:e.iconRight,round:!1,onClick:y},{default:t.label,loading:t.loading}),v(Q,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...i.value,disable:e.disable===!0||e.disableDropdown===!0,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,size:e.size,color:e.color,textColor:e.textColor,dense:e.dense,ripple:e.ripple},()=>l)])}}}),ct=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const a=u(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:a.value},H(t.default))}}),dt=z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:a}){const{proxy:{$q:n}}=E(),o=oe(ie,()=>{console.error("QHeader needs to be child of QLayout")}),r=S(parseInt(e.heightHint,10)),c=S(!0),i=u(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),b=u(()=>{if(e.modelValue!==!0)return 0;if(i.value===!0)return c.value===!0?r.value:0;const l=r.value-o.scroll.value.position;return l>0?l:0}),g=u(()=>e.modelValue!==!0||i.value===!0&&c.value!==!0),x=u(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),h=u(()=>"q-header q-layout__section--marginal "+(i.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),V=u(()=>{const l=o.rows.value.top,C={};return l[0]==="l"&&o.left.space===!0&&(C[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(C[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),C});function p(l,C){o.update("header",l,C)}function y(l,C){l.value!==C&&(l.value=C)}function _({height:l}){y(r,l),p("size",l)}function q(l){x.value===!0&&y(c,!0),a("focusin",l)}L(()=>e.modelValue,l=>{p("space",l),y(c,!0),o.animate()}),L(b,l=>{p("offset",l)}),L(()=>e.reveal,l=>{l===!1&&y(c,e.modelValue)}),L(c,l=>{o.animate(),a("reveal",l)}),L(o.scroll,l=>{e.reveal===!0&&y(c,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const k={};return o.instances.header=k,e.modelValue===!0&&p("size",r.value),p("space",e.modelValue),p("offset",b.value),Pe(()=>{o.instances.header===k&&(o.instances.header=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const l=Te(t.default,[]);return e.elevated===!0&&l.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(v(ae,{debounce:0,onResize:_})),v("header",{class:h.value,style:V.value,onFocusin:q},l)}}});const ft=["top","right","bottom","left"],Be={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>ft.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function _e(e,t){return{formClass:u(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:u(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:u(()=>{if(e.externalLabel===!0){const a=e.hideLabel===null?t.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(a===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const xe={start:"self-end",center:"self-center",end:"self-start"},vt=Object.keys(xe);var A=z({name:"QFabAction",props:{...Be,icon:{type:String,default:""},anchor:{type:String,validator:e=>vt.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:t,emit:a}){const n=oe(Se,()=>({showing:{value:!0},onChildClick:Ce})),{formClass:o,labelProps:r}=_e(e,n.showing),c=u(()=>{const h=xe[e.anchor];return o.value+(h!==void 0?` ${h}`:"")}),i=u(()=>e.disable===!0||n.showing.value!==!0);function b(h){n.onChildClick(h),a("click",h)}function g(){const h=[];return t.icon!==void 0?h.push(t.icon()):e.icon!==""&&h.push(v(le,{name:e.icon})),(e.label!==""||t.label!==void 0)&&h[r.value.action](v("div",r.value.data,t.label!==void 0?t.label():[e.label])),re(t.default,h)}const x=E();return Object.assign(x.proxy,{click:b}),()=>v(Q,{class:c.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:i.value,onClick:b},g)}});const bt=["up","right","down","left"],gt=["left","center","right"];var G=z({name:"QFab",props:{...Be,...Ie,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>bt.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>gt.includes(e)}},emits:He,setup(e,{slots:t}){const a=S(null),n=S(e.modelValue===!0),o=ye(),{proxy:{$q:r}}=E(),{formClass:c,labelProps:i}=_e(e,n),b=u(()=>e.persistent!==!0),{hide:g,toggle:x}=Ee({showing:n,hideOnRouteChange:b}),h=u(()=>({opened:n.value})),V=u(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${c.value}`+(n.value===!0?" q-fab--opened":" q-fab--closed")),p=u(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${n.value===!0?"opened":"closed"}`),y=u(()=>{const l={id:o};return n.value===!0?l.role="menu":l["aria-hidden"]="true",l}),_=u(()=>`q-fab__icon-holder  q-fab__icon-holder--${n.value===!0?"opened":"closed"}`);function q(l,C){const d=t[l],m=`q-fab__${l} absolute-full`;return d===void 0?v(le,{class:m,name:e[C]||r.iconSet.fab[C]}):v("div",{class:m},d(h.value))}function k(){const l=[];return e.hideIcon!==!0&&l.push(v("div",{class:_.value},[q("icon","icon"),q("active-icon","activeIcon")])),(e.label!==""||t.label!==void 0)&&l[i.value.action](v("div",i.value.data,t.label!==void 0?t.label(h.value):[e.label])),re(t.tooltip,l)}return se(Se,{showing:n,onChildClick(l){g(l),a.value!==null&&a.value.$el.focus()}}),()=>v("div",{class:V.value},[v(Q,{ref:a,class:c.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":n.value===!0?"true":"false","aria-haspopup":"true","aria-controls":o,"aria-owns":o,onClick:x},k),v("div",{class:p.value,...y.value},H(t.default))])}}),ht=z({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:a}}=E(),n=oe(ie,()=>{console.error("QPageContainer needs to be child of QLayout")});se(Re,!0);const o=u(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>v("div",{class:"q-page-container",style:o.value},H(t.default))}}),mt=z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:a}){const{proxy:{$q:n}}=E(),o=S(null),r=S(n.screen.height),c=S(e.container===!0?0:n.screen.width),i=S({position:0,direction:"down",inflectionPoint:0}),b=S(0),g=S(Me.value===!0?0:Y()),x=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=u(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),V=u(()=>g.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),p=u(()=>g.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function y(d){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};i.value=m,e.onScroll!==void 0&&a("scroll",m)}}function _(d){const{height:m,width:O}=d;let $=!1;r.value!==m&&($=!0,r.value=m,e.onScrollHeight!==void 0&&a("scroll-height",m),k()),c.value!==O&&($=!0,c.value=O),$===!0&&e.onResize!==void 0&&a("resize",d)}function q({height:d}){b.value!==d&&(b.value=d,k())}function k(){if(e.container===!0){const d=r.value>b.value?Y():0;g.value!==d&&(g.value=d)}}let l;const C={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:o,height:r,containerHeight:b,scrollbarWidth:g,totalWidth:u(()=>c.value+g.value),rows:u(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:U({size:0,offset:0,space:!1}),right:U({size:300,offset:0,space:!1}),footer:U({size:0,offset:0,space:!1}),left:U({size:300,offset:0,space:!1}),scroll:i,animate(){l!==void 0?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),l=void 0},155)},update(d,m,O){C[d][m]=O}};if(se(ie,C),Y()>0){let O=function(){d=null,m.classList.remove("hide-scrollbar")},$=function(){if(d===null){if(m.scrollHeight>n.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(O,300)},P=function(R){d!==null&&R==="remove"&&(clearTimeout(d),O()),window[`${R}EventListener`]("resize",$)},d=null;const m=document.body;L(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),ue(()=>{P("remove")})}return()=>{const d=re(t.default,[v(at,{onScroll:y}),v(ae,{onResize:_})]),m=v("div",{class:x.value,style:h.value,ref:e.container===!0?void 0:o,tabindex:-1},d);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:o},[v(ae,{onResize:q}),v("div",{class:"absolute-full",style:V.value},[v("div",{class:"scroll",style:p.value},[m])])]):m}}});const pt=Object.prototype.toString,te=Object.prototype.hasOwnProperty,wt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function be(e){if(e!==Object(e)||wt.has(pt.call(e))===!0||e.constructor&&te.call(e,"constructor")===!1&&te.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||te.call(e,t)}function Ae(){let e,t,a,n,o,r,c=arguments[0]||{},i=1,b=!1;const g=arguments.length;for(typeof c=="boolean"&&(b=c,c=arguments[1]||{},i=2),Object(c)!==c&&typeof c!="function"&&(c={}),g===i&&(c=this,i--);i<g;i++)if((e=arguments[i])!==null)for(t in e)a=c[t],n=e[t],c!==n&&(b===!0&&n&&((o=Array.isArray(n))||be(n)===!0)?(o===!0?r=Array.isArray(a)===!0?a:[]:r=be(a)===!0?a:{},c[t]=Ae(b,r,n)):n!==void 0&&(c[t]=n));return c}let ge,he;const j=[];function yt(e){e.title&&(e.title=e.titleTemplate?e.titleTemplate(e.title):e.title,delete e.titleTemplate),[["meta","content"],["link","href"]].forEach(t=>{const a=e[t[0]],n=t[1];for(const o in a){const r=a[o];r.template&&(Object.keys(r).length===1?delete a[o]:(r[n]=r.template(r[n]||""),delete r.template))}})}function kt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!0;for(const a in e)if(e[a]!==t[a])return!0}function me(e){return["class","style"].includes(e)===!1}function pe(e){return["lang","dir"].includes(e)===!1}function Ct(e,t){const a={},n={};return e===void 0?{add:t,remove:n}:(e.title!==t.title&&(a.title=t.title),["meta","link","script","htmlAttr","bodyAttr"].forEach(o=>{const r=e[o],c=t[o];if(n[o]=[],r==null){a[o]=c;return}a[o]={};for(const i in r)c.hasOwnProperty(i)===!1&&n[o].push(i);for(const i in c)r.hasOwnProperty(i)===!1?a[o][i]=c[i]:kt(r[i],c[i])===!0&&(n[o].push(i),a[o][i]=c[i])}),{add:a,remove:n})}function St({add:e,remove:t}){e.title&&(document.title=e.title),Object.keys(t).length>0&&(["meta","link","script"].forEach(a=>{t[a].forEach(n=>{document.head.querySelector(`${a}[data-qmeta="${n}"]`).remove()})}),t.htmlAttr.filter(pe).forEach(a=>{document.documentElement.removeAttribute(a)}),t.bodyAttr.filter(me).forEach(a=>{document.body.removeAttribute(a)})),["meta","link","script"].forEach(a=>{const n=e[a];for(const o in n){const r=document.createElement(a);for(const c in n[o])c!=="innerHTML"&&r.setAttribute(c,n[o][c]);r.setAttribute("data-qmeta",o),a==="script"&&(r.innerHTML=n[o].innerHTML||""),document.head.appendChild(r)}}),Object.keys(e.htmlAttr).filter(pe).forEach(a=>{document.documentElement.setAttribute(a,e.htmlAttr[a]||"")}),Object.keys(e.bodyAttr).filter(me).forEach(a=>{document.body.setAttribute(a,e.bodyAttr[a]||"")})}function qt(){const e={title:"",titleTemplate:null,meta:{},link:{},script:{},htmlAttr:{},bodyAttr:{}};for(let t=0;t<j.length;t++){const{active:a,val:n}=j[t];a===!0&&Ae(!0,e,n)}yt(e),St(Ct(he,e)),he=e}function F(){clearTimeout(ge),ge=setTimeout(qt,50)}function Bt(e){{const t={active:!0};if(typeof e=="function"){const a=u(e);t.val=a.value,L(a,n=>{t.val=n,t.active===!0&&F()})}else t.val=e;j.push(t),F(),Fe(()=>{t.active=!0,F()}),je(()=>{t.active=!1,F()}),ue(()=>{j.splice(j.indexOf(t),1),F()})}}function _t(e){const t=Object.assign({noopener:!0},e),a=[];for(const n in t){const o=t[n];o===!0?a.push(n):(De(o)||typeof o=="string"&&o!=="")&&a.push(n+"="+o)}return a.join(",")}function we(e,t,a){let n=window.open;if(ne.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)n=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(e,{openExternal:!0})}const o=n(e,"_blank",_t(a));if(o)return ne.is.desktop&&o.focus(),o;t&&t()}var xt=(e,t,a)=>{if(ne.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(n=>{n?window.SafariViewController.show({url:e},Ce,t):we(e,t,a)});return}return we(e,t,a)};const At={data(){return{}},setup(){const e=Ne(),t=ot(),a=We(),{t:n}=it(),o=S([18,40]),r=S([18,40]),c=S([18,40]),i=S([18,40]),b=S(0),g=[{value:"en-US",label:"English"},{value:"zh-hans",label:"\u4E2D\u6587\u7B80\u4F53"},{value:"zh-hant",label:"\u4E2D\u6587\u7E41\u9AD4"},{value:"fr",label:"Fran\xE7ais"},{value:"pt",label:"Portugu\xEAs"},{value:"sp",label:"Espa\xF1ol"},{value:"de",label:"Deutsch"},{value:"ru",label:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A"},{value:"ar",label:"Arabic"},{value:"it",label:"Italiano"},{value:"ja",label:"\u65E5\u672C\u8A9E"}],x=u({get:()=>e.state.langchange.lang,set:s=>{e.commit("langchange/langChanged",s)}}),h=u({get:()=>e.state.settings.apptitle,set:s=>{e.commit("settings/APPTitle",s)}}),V=u({get:()=>e.state.settings.server,set:s=>{e.commit("settings/Server",s)}}),p=u({get:()=>e.state.settings.openid,set:s=>{e.commit("settings/Openid",s)}}),y=u({get:()=>e.state.fabchange.fab1,set:s=>{e.commit("fabchange/fabChanged1",s)}}),_=u({get:()=>e.state.fabchange.fab2,set:s=>{e.commit("fabchange/fabChanged2",s)}}),q=u({get:()=>e.state.fabchange.fab3,set:s=>{e.commit("fabchange/fabChanged3",s)}}),k=u({get:()=>e.state.fabchange.fab4,set:s=>{e.commit("fabchange/fabChanged4",s)}}),l=u({get:()=>e.state.linkchange.oldlink,set:s=>{e.commit("linkchange/OldLinkChanged",s)}}),C=u({get:()=>e.state.linkchange.newlink,set:s=>{e.commit("linkchange/NewLinkChanged",s)}}),d=u({get:()=>e.state.loginauth.authin,set:s=>{e.commit("loginauth/loginAuth",s)}}),m=u({get:()=>e.state.loginauth.login_name,set:s=>{e.commit("loginauth/loginName",s)}}),O=u({get:()=>e.state.loginauth.operator,set:s=>{e.commit("loginauth/loginId",s)}}),$=u({get:()=>e.state.screenchange.screenwidth,set:s=>{e.commit("screenchange/screenwidthChanged",s)}}),P=u({get:()=>e.state.screenchange.screenheight,set:s=>{e.commit("screenchange/screenheightChanged",s)}}),R=u({get:()=>e.state.appversion.app_version,set:s=>{e.commit("appversion/AppVersionChanged",s)}}),D=u({get:()=>e.state.appversion.app_new_version,set:s=>{e.commit("appversion/AppNewVersionChanged",s)}}),J=u({get:()=>e.state.appversion.only_id,set:s=>{e.commit("appversion/OnlyIDChanged",s)}}),X=u({get:()=>e.state.appversion.device_auth,set:s=>{e.commit("appversion/DeviceAuthChanged",s)}});Bt(()=>({title:h.value}));function Ve(){let s=t.screen.width,B=t.screen.height;$.value=s,P.value=B,o.value=[18,40],i.value=[18+(s-86)/3,40],r.value=[18+(s-86)/3*2,40],c.value=[18+(s-86),40]}function Oe(){if(t.platform.is.android){if(window.device){let s={model:device.model,platform:device.platform,uuid:device.uuid,version:device.version,manufacturer:device.manufacturer,isVirtual:device.isVirtual,serial:device.serial};ee.post("https://po.56yhz.com/appversion/",s).then(B=>{D.value=B.data.detail,J.value=B.data.only_id,X.value=B.data.device_auth,ze()})}}else if((t.platform.is.ios||t.platform.is.ipad||t.platform.is.ipod||t.platform.is.iphone)&&window.device){let s={model:device.model,platform:device.platform,uuid:device.uuid,version:device.version,manufacturer:device.manufacturer,isVirtual:device.isVirtual,serial:device.serial};ee.post("https://po.56yhz.com/appversion/",s).then(B=>{D.value=B.data.detail,J.value=B.data.only_id,X.value=B.data.device_auth})}}function Le(){if(window.device){let s={serial:device.serial};p.value===""&&ee.post("https://po.56yhz.com/endusermobile/",s).then(B=>{console.log(B),B.data.detail||(p.value=B.data.results,V.value=B.data.inter_ip)})}}function ze(){D.value!==R.value&&t.dialog({title:n("notice.version.new"),message:n("notice.version.detail"),cancel:!0,persistent:!0}).onOk(()=>{xt("https://www.56yhz.com/")})}function ce(s){b.value=s.keyboardHeight}function de(s){b.value=s.keyboardHeight||0}return ke(()=>{window.device&&(window.plugins.insomnia.keepAwake(),navigator.splashscreen.hide()),Oe(),Le(),Ve(),window.addEventListener("native.keyboardshow",ce),window.addEventListener("native.keyboardhide",de)}),ue(()=>{window.removeEventListener("native.keyboardshow",ce),window.removeEventListener("native.keyboardhide",de)}),{app_version:R,app_new_version:D,only_id:J,device_auth:X,t:n,langOptions:g,apptitle:h,server:V,openid:p,lang:x,fab1:y,fab2:_,fab3:q,fab4:k,menuShow:b,oldlink:l,newlink:C,Outbound:i,Settings:c,Stock:r,Inbound:o,screenwidth:$,screenheight:P,authin:d,login_name:m,operator:O,langChange(s){x.value=s},fabshow1(){y.value===!0&&(_.value=!1,q.value=!1,k.value=!1)},fabshow2(){_.value===!0&&(y.value=!1,q.value=!1,k.value=!1)},fabshow3(){q.value===!0&&(y.value=!1,_.value=!1,k.value=!1)},fabshow4(){k.value===!0&&(y.value=!1,_.value=!1,q.value=!1)},onClick(s){l.value=a.name,C.value=s}}},watch:{lang(e){var t=this;t.$i18n.locale=e}}},Vt={class:"row no-wrap q-pa-md"},Ot={class:"column",style:{width:"150px"}},Lt={style:{width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},zt={style:{"margin-left":"6%","font-weight":"bold"}},$t=I("hr",{style:{height:"2px",border:"none","border-top":"1px solid #e1e1e1",width:"121%","margin-left":"-10.5%","margin-top":"8%"}},null,-1);function Qt(e,t,a,n,o,r){const c=Ke("router-view");return M(),N(mt,{view:"hHh lpR fFf"},{default:w(()=>[T(I("input",{id:"showThisMenu","onUpdate:modelValue":t[0]||(t[0]=i=>n.menuShow=i),type:"number",style:{display:"none"}},null,512),[[Ge,n.menuShow]]),f(dt,{elevated:"",class:"bg-primary text-white"},{default:w(()=>[f(ct,{class:"main-headers text-white shadow-18 rounded-borders"},{default:w(()=>[f(rt,{onClick:t[1]||(t[1]=i=>e.$router.push({name:"home"}))},{default:w(()=>[fe(Z(n.apptitle),1)]),_:1}),f(Q,{round:"",dense:"",flat:"",color:"white",icon:"translate",style:{margin:"0 10px 0 10px"}},{default:w(()=>[f(qe,null,{default:w(()=>[f(et,{style:{"min-width":"100px"}},{default:w(()=>[(M(!0),Je(Ye,null,Xe(n.langOptions,(i,b)=>T((M(),N(tt,{clickable:"",key:b,onClick:g=>n.langChange(i.value)},{default:w(()=>[f(nt,null,{default:w(()=>[fe(Z(i.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[lt]])),128))]),_:1})]),_:1})]),_:1}),f(Ze,{vertical:""}),n.authin==="1"?(M(),N(ut,{key:0,stretch:"",flat:"",color:"white-8",icon:"account_circle"},{default:w(()=>[I("div",Vt,[I("div",Ot,[I("div",Lt,[I("span",zt,Z(n.login_name),1)]),$t,f(Q,{flat:"",rounded:"",class:"full-width",align:"left",label:e.$t("index.change_user"),to:{name:"login"}},null,8,["label"])])])]),_:1})):ve("",!0),n.authin==="0"?(M(),N(Q,{key:1,label:e.$t("index.login"),color:"primary",style:{"margin-left":"10px"},to:{name:"login"}},null,8,["label"])):ve("",!0)]),_:1})]),_:1}),f(ht,null,{default:w(()=>[f(c),T(f(K,{position:"bottom-left",offset:n.Inbound},{default:w(()=>[f(G,{modelValue:n.fab1,"onUpdate:modelValue":t[4]||(t[4]=i=>n.fab1=i),icon:"speaker_notes",label:e.$t("menuItem.inbound"),"label-position":"bottom","external-label":"","vertical-actions-align":"left",direction:"up","hide-label":"",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow1},{default:w(()=>[f(A,{padding:"10px",label:e.$t("inbound.asn"),to:{name:"asnlist"},flat:"",icon:"img:statics/inbound/polist.png",onClick:t[2]||(t[2]=i=>n.onClick("asnlist"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("inbound.asnfinish"),to:{name:"asndetail"},flat:"",icon:"img:statics/inbound/preloadstock.png",onClick:t[3]||(t[3]=i=>n.onClick("asndetail"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[W,n.menuShow===0]]),T(f(K,{position:"bottom-left",offset:n.Outbound},{default:w(()=>[f(G,{modelValue:n.fab2,"onUpdate:modelValue":t[8]||(t[8]=i=>n.fab2=i),icon:"rv_hookup",label:e.$t("menuItem.outbound"),"label-position":"bottom","external-label":"","hide-label":"","vertical-actions-align":"left",direction:"up",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow2},{default:w(()=>[f(A,{padding:"10px",label:e.$t("outbound.dn"),to:{name:"dnlist"},flat:"",icon:"img:statics/outbound/dnlist.png",onClick:t[5]||(t[5]=i=>n.onClick("dnlist"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("notice.mobile_dn.notice1"),to:{name:"dndetail"},flat:"",icon:"img:statics/outbound/outbound.png",onClick:t[6]||(t[6]=i=>n.onClick("dndetail"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("outbound.pickinglist"),to:{name:"pickinglist"},flat:"",icon:"img:statics/outbound/pickinglist.png",onClick:t[7]||(t[7]=i=>n.onClick("pickinglist"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[W,n.menuShow===0]]),T(f(K,{position:"bottom-left",offset:n.Stock},{default:w(()=>[f(G,{modelValue:n.fab3,"onUpdate:modelValue":t[14]||(t[14]=i=>n.fab3=i),icon:"speaker_notes",label:e.$t("menuItem.stock"),"label-position":"bottom","external-label":"","hide-label":"","vertical-actions-align":"right",direction:"up",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow3},{default:w(()=>[f(A,{padding:"10px",label:e.$t("scan.scan_goodsquery"),to:{name:"goods"},flat:"","icon-right":"img:statics/stock/stocklist.png",onClick:t[9]||(t[9]=i=>n.onClick("goods"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("stock.stocklist"),to:{name:"goodsstock"},flat:"","icon-right":"img:statics/stock/stocklist.png",onClick:t[10]||(t[10]=i=>n.onClick("goodsstock"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("stock.stockbinlist"),to:{name:"binstock"},flat:"","icon-right":"img:statics/stock/binset.png",onClick:t[11]||(t[11]=i=>n.onClick("binstock"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("stock.emptybin"),to:{name:"emptybin"},flat:"","icon-right":"all_out",onClick:t[12]||(t[12]=i=>n.onClick("emptybin"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("notice.handcount.notice2"),to:{name:"handcount"},flat:"","icon-right":"img:statics/stock/cyclecount.png",onClick:t[13]||(t[13]=i=>n.onClick("handcount"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[W,n.menuShow===0]]),T(f(K,{position:"bottom-left",offset:n.Settings},{default:w(()=>[f(G,{modelValue:n.fab4,"onUpdate:modelValue":t[17]||(t[17]=i=>n.fab4=i),icon:"widgets",label:e.$t("Settings.index"),"label-position":"bottom","external-label":"","hide-label":"","vertical-actions-align":"right",direction:"up",color:"blue-grey-7","label-style":"background-color: rgb(85 0 0 / 0%); color: black",onClick:n.fabshow4},{default:w(()=>[f(A,{padding:"10px",label:e.$t("Settings.server"),to:{name:"server"},flat:"","icon-right":"dns",onClick:t[15]||(t[15]=i=>n.onClick("server"))},null,8,["label"]),f(A,{padding:"10px",label:e.$t("Settings.equipment"),to:{name:"equipment"},flat:"","icon-right":"barcode_reader",onClick:t[16]||(t[16]=i=>n.onClick("equipment"))},null,8,["label"])]),_:1},8,["modelValue","label","onClick"])]),_:1},8,["offset"]),[[W,n.menuShow===0]])]),_:1})]),_:1})}var Wt=Ue(At,[["render",Qt]]);export{Wt as default};
