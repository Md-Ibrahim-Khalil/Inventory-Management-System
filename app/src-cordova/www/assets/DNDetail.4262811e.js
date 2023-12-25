import{Q as u}from"./QItemLabel.5952017e.js";import{Q as X,b as $,a as M}from"./QList.36844ce6.js";import{_ as Y,aC as Z,J as z,aR as G,r as _,c as t,w as S,o as H,M as N,O as K,R as s,f as n,W as r,X as c,$ as R,Y as U,Z as ee,F,S as ae,a1 as te}from"./index.4ba90dbb.js";import{u as ne}from"./use-quasar.1d9b433d.js";import{a as se}from"./index.33b22a2c.js";import{u as oe}from"./vue-i18n.runtime.esm-bundler.3b9a62c7.js";import"./axios.b70a614d.js";const ce=Z({name:"DNDetail",data(){return{}},setup(){const e=z();G();const g=ne(),f=_(0);_({}),_(!1),_([]);const{t:i}=oe(),Q=t({get:()=>e.state.fabchange.fab1}),w=t({get:()=>e.state.fabchange.fab2}),d=t({get:()=>e.state.fabchange.fab3}),m=t({get:()=>e.state.fabchange.fab4}),V=t({get:()=>e.state.screenchange.screenscroll}),b=t({get:()=>e.state.loginauth.authin}),j=t({get:()=>e.state.loginauth.login_name}),I=t({get:()=>e.state.loginauth.operator}),A=t({get:()=>e.state.settings.openid}),B=t({get:()=>e.state.langchange.lang}),D=t({get:()=>e.state.settings.server}),J=t({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),O=t({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),P=t({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),T=t({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),W=t({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),h=t({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),y=t({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),k=t({get:()=>e.state.scanchanged.bar_scanned}),p=t({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),v=t({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),q=t({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function x(a){if(a!==null){var o=D.value.split(":"),l=a.split(":");return o[0]!==l[0]?o[0]+":"+l[1]:l}else return null}function E(){h.value=[],p.value=D.value+"/dn/detail/?dn_code="+T.value,L("")}function L(a){se.get(p.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:A.value,language:B.value,operator:I.value}}).then(o=>{if(o.data.detail)g.notify({type:"negative",message:i("notice.mobile_scan.notice1")});else{var l=[];h.value.forEach(C=>{l.push(C)}),o.data.results.forEach(C=>{l.push(C)}),h.value=l,q.value=x(o.data.previous),v.value=x(o.data.next)}}).catch(o=>{g.notify({type:"negative",message:i("notice.mobile_scan.notice3")})})}return S(k,(a,o)=>{y.value==="DN"&&E()}),S(V,(a,o)=>{a===1?v.value!==null&&(p.value=v.value,f.value=1):f.value=0}),S(f,(a,o)=>{a===1&&(b.value==="0"?g.notify({type:"negative",message:i("notice.mobile_userlogin.notice9")}):L(""))}),H(()=>{b.value==="0"?g.notify({type:"negative",message:i("notice.mobile_userlogin.notice9")}):(y.value="DN",E())}),{t:i,fab1:Q,fab2:w,fab3:d,fab4:m,screenscroll:V,authin:b,login_name:j,openid:A,operator:I,lang:B,requestauth:f,baseurl:D,apiurl:p,apiurlnext:v,apiurlprevious:q,scandata:J,datadetail:O,tablelist:h,asndata:P,dndata:T,bindata:W,scanmode:y,bar_scanned:k}}});function le(e,g,f,i,Q,w){return N(),K(X,{bordered:"",padding:""},{default:s(()=>[n(M,null,{default:s(()=>[n($,null,{default:s(()=>[n(u,{overline:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice6")),1)]),_:1}),n(u,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice7")),1)]),_:1})]),_:1})]),_:1}),n(R,{spaced:""}),(N(!0),U(F,null,ee(e.tablelist,(d,m)=>(N(),U(F,{key:m},[n(M,null,{default:s(()=>[n($,null,{default:s(()=>[n(u,null,{default:s(()=>[r(c(d.dn_code),1)]),_:2},1024),n(u,{caption:"",lines:"2"},{default:s(()=>[r(c(d.goods_code),1)]),_:2},1024)]),_:2},1024),n($,{side:"",top:""},{default:s(()=>[n(u,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice9"))+c(d.goods_cost),1)]),_:2},1024),n(u,{caption:""},{default:s(()=>[r(c(e.$t("notice.mobile_dn.notice10"))+c(d.goods_qty),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),ae(n(R,{spaced:"",inset:"item"},null,512),[[te,m+1!==e.tablelist.length]])],64))),128))]),_:1})}var he=Y(ce,[["render",le]]);export{he as default};
