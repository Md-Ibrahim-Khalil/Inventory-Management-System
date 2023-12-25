import{Q as u}from"./QItemLabel.11ffd566.js";import{Q as H,b as S,a as j}from"./QList.84cd7554.js";import{_ as J,aD as K,L as W,aS as X,M as aa,r as ea,c as t,w as $,o as ta,R as D,S as na,U as s,f as n,Y as d,Z as c,a1 as x,$ as O,a0 as sa,F as P,V as oa,a3 as ca}from"./index.e9ce4631.js";import{u as la}from"./use-quasar.c6d3058b.js";import{a as ia}from"./index.bafe4d09.js";import{u as ua}from"./vue-i18n.runtime.esm-bundler.c7c7027d.js";import"./axios.e6fce94e.js";const da=K({name:"ASNList",data(){return{}},setup(){const a=W(),L=X();aa();const h=la(),r=ea(0),{t:g}=ua(),N=t({get:()=>a.state.fabchange.fab1}),l=t({get:()=>a.state.fabchange.fab2}),m=t({get:()=>a.state.fabchange.fab3}),w=t({get:()=>a.state.fabchange.fab4}),y=t({get:()=>a.state.linkchange.oldlink,set:e=>{a.commit("linkchange/OldLinkChanged",e)}}),A=t({get:()=>a.state.linkchange.newlink,set:e=>{a.commit("linkchange/NewLinkChanged",e)}}),Q=t({get:()=>a.state.screenchange.screenscroll}),V=t({get:()=>a.state.loginauth.authin}),Y=t({get:()=>a.state.loginauth.login_name}),B=t({get:()=>a.state.loginauth.operator}),I=t({get:()=>a.state.settings.openid}),T=t({get:()=>a.state.langchange.lang}),_=t({get:()=>a.state.settings.server}),U=t({get:()=>a.state.scanchanged.scandata,set:e=>{a.commit("scanchanged/ScanChanged",e)}}),Z=t({get:()=>a.state.scanchanged.datadetail,set:e=>{a.commit("scanchanged/ScanDataChanged",e)}}),k=t({get:()=>a.state.scanchanged.asndata,set:e=>{a.commit("scanchanged/ASNDataChanged",e)}}),z=t({get:()=>a.state.scanchanged.dndata,set:e=>{a.commit("scanchanged/DNDataChanged",e)}}),G=t({get:()=>a.state.scanchanged.bindata,set:e=>{a.commit("scanchanged/BinDataChanged",e)}}),p=t({get:()=>a.state.scanchanged.tablelist,set:e=>{a.commit("scanchanged/TableDataChanged",e)}}),f=t({get:()=>a.state.scanchanged.scanmode,set:e=>{a.commit("scanchanged/ScanModeChanged",e)}}),E=t({get:()=>a.state.scanchanged.bar_scanned}),v=t({get:()=>a.state.scanchanged.apiurl,set:e=>{a.commit("scanchanged/ApiUrlChanged",e)}}),b=t({get:()=>a.state.scanchanged.apiurlnext,set:e=>{a.commit("scanchanged/ApiUrlNextChanged",e)}}),M=t({get:()=>a.state.scanchanged.apiurlprevious,set:e=>{a.commit("scanchanged/ApiUrlPreviousChanged",e)}});function R(e){if(e!==null){var o=_.value.split(":"),i=e.split(":");return o[0]!==i[0]?o[0]+":"+i[1]:i}else return null}function q(e){k.value=e,f.value="ASN",y.value="asnlist",A.value="asndetail",L.push({name:"asndetail"})}function F(e){ia.get(v.value+e,{headers:{"Content-Type":"application/json",token:I.value,language:T.value,operator:B.value}}).then(o=>{if(o.data.detail)h.notify({type:"negative",message:g("notice.mobile_scan.notice1")});else{var i=[];p.value.forEach(C=>{i.push(C)}),o.data.results.forEach(C=>{i.push(C)}),p.value=i,M.value=R(o.data.previous),b.value=R(o.data.next)}}).catch(o=>{h.notify({type:"negative",message:g("notice.mobile_scan.notice3")})})}return $(Q,(e,o)=>{e>=.95?b.value!==null&&(v.value=b.value,r.value=1):r.value=0}),$(r,(e,o)=>{e===1&&F("")}),$(E,(e,o)=>{f.value==="ASN"&&q(U.value)}),ta(()=>{V.value==="0"?h.notify({type:"negative",message:g("notice.mobile_userlogin.notice9")}):(f.value="ASN",v.value=_.value+"asn/list/",k.value="",p.value=[],F(""))}),{t:g,fab1:N,fab2:l,fab3:m,fab4:w,oldlink:y,newlink:A,screenscroll:Q,authin:V,login_name:Y,openid:I,operator:B,lang:T,requestauth:r,baseurl:_,apiurl:v,apiurlnext:b,apiurlprevious:M,scandata:U,datadetail:Z,tablelist:p,asndata:k,dndata:z,bindata:G,scanmode:f,bar_scanned:E,DetailLine:q}}});function ra(a,L,h,r,g,N){return D(),na(H,{bordered:"",padding:""},{default:s(()=>[n(j,null,{default:s(()=>[n(S,null,{default:s(()=>[n(u,{overline:""},{default:s(()=>[d(c(a.$t("notice.mobile_asn.notice1")),1)]),_:1}),n(u,{caption:""},{default:s(()=>[d(c(a.$t("notice.mobile_asn.notice2")),1)]),_:1})]),_:1})]),_:1}),n(x,{spaced:""}),(D(!0),O(P,null,sa(a.tablelist,(l,m)=>(D(),O(P,{key:m},[n(j,null,{default:s(()=>[n(S,{onClick:w=>a.DetailLine(l.asn_code)},{default:s(()=>[n(u,null,{default:s(()=>[d(c(l.asn_code),1)]),_:2},1024),n(u,{caption:"",lines:"2"},{default:s(()=>[d(c(a.$t("notice.mobile_asn.notice3"))+c(l.supplier),1)]),_:2},1024)]),_:2},1032,["onClick"]),n(S,{side:"",top:""},{default:s(()=>[n(u,{caption:""},{default:s(()=>[d(c(a.$t("notice.mobile_asn.notice4"))+c(l.total_cost),1)]),_:2},1024),n(u,{caption:""},{default:s(()=>[d(c(a.$t("notice.mobile_asn.notice5"))+c(l.asn_status),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),oa(n(x,{spaced:"",inset:"item"},null,512),[[ca,m+1!==a.tablelist.length]])],64))),128))]),_:1})}var _a=J(da,[["render",ra]]);export{_a as default};
