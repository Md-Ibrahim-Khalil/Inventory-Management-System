(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"0bf2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[e("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("q-btn-group",{attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("refreshtip"))+"\n           ")])],1)],1)]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"staff_type",attrs:{props:a}},[t._v("\n             "+t._s(a.row.staff_type)+"\n           ")]),e("q-td",{key:"creater",attrs:{props:a}},[t._v("\n             "+t._s(a.row.creater)+"\n           ")]),e("q-td",{key:"create_time",attrs:{props:a}},[t._v("\n           "+t._s(a.row.create_time)+"\n         ")]),e("q-td",{key:"update_time",attrs:{props:a}},[t._v("\n           "+t._s(a.row.update_time)+"\n         ")])],1)]}}])})],1),[e("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.max,expression:"max !== 0"}],staticClass:"q-pa-lg flex flex-center"},[e("div",[t._v(t._s(t.total)+" ")]),e("q-pagination",{attrs:{color:"black",max:t.max,"max-pages":6,"boundary-links":""},on:{click:function(e){return t.getList()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paginationIpt,expression:"paginationIpt"}],staticStyle:{width:"60px","text-align":"center"},domProps:{value:t.paginationIpt},on:{blur:t.changePageEnter,input:function(e){e.target.composing||(t.paginationIpt=e.target.value)}}})])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.max,expression:"max === 0"}],staticClass:"q-pa-lg flex flex-center"},[e("q-btn",{attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},s=[],i=a("3004"),r=a("18d6"),o={name:"Pagestafflist",data(){return{openid:"",login_name:"",authin:"0",pathname:"staff/type/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"staff_type",required:!0,label:this.$t("staff.view_staff.staff_type"),align:"left",field:"staff_type"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"},current:1,max:0,total:0,paginationIpt:1}},methods:{getList(){var t=this;r["a"].has("auth")&&Object(i["f"])(t.pathname+"?page="+t.current,{}).then((e=>{t.table_list=e.results,t.total=e.count,0===e.count||1===Math.ceil(e.count/30)?t.max=0:t.max=Math.ceil(e.count/30),"zh-hans"===r["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Admin"===t.staff_type?t.staff_type="管理员":"Customer"===t.staff_type?t.staff_type="客户":"Supplier"===t.staff_type?t.staff_type="供应商":"Manager"===t.staff_type?t.staff_type="经理":"Supervisor"===t.staff_type?t.staff_type="主管":"Inbound"===t.staff_type?t.staff_type="收货组":"Outbound"===t.staff_type?t.staff_type="发货组":"StockControl"===t.staff_type&&(t.staff_type="库存管理")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},changePageEnter(t){Number(this.paginationIpt)<1?(this.current=1,this.paginationIpt=1):Number(this.paginationIpt)>this.max?(this.current=this.max,this.paginationIpt=this.max):this.current=Number(this.paginationIpt),this.getList()},getListPrevious(){var t=this;r["a"].has("auth")&&Object(i["f"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,"zh-hans"===r["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Admin"===t.staff_type?t.staff_type="管理员":"Customer"===t.staff_type?t.staff_type="客户":"Supplier"===t.staff_type?t.staff_type="供应商":"Manager"===t.staff_type?t.staff_type="经理":"Supervisor"===t.staff_type?t.staff_type="主管":"Inbound"===t.staff_type?t.staff_type="收货组":"Outbound"===t.staff_type?t.staff_type="发货组":"StockControl"===t.staff_type&&(t.staff_type="库存管理")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;r["a"].has("auth")&&Object(i["f"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,"zh-hans"===r["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Admin"===t.staff_type?t.staff_type="管理员":"Customer"===t.staff_type?t.staff_type="客户":"Supplier"===t.staff_type?t.staff_type="供应商":"Manager"===t.staff_type?t.staff_type="经理":"Supervisor"===t.staff_type?t.staff_type="主管":"Inbound"===t.staff_type?t.staff_type="收货组":"Outbound"===t.staff_type?t.staff_type="发货组":"StockControl"===t.staff_type&&(t.staff_type="库存管理")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()}},created(){var t=this;r["a"].has("openid")?t.openid=r["a"].getItem("openid"):(t.openid="",r["a"].set("openid","")),r["a"].has("login_name")?t.login_name=r["a"].getItem("login_name"):(t.login_name="",r["a"].set("login_name","")),r["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},p=o,f=a("42e1"),l=a("c694"),c=a("eaac"),u=a("e7a9"),_=a("9c40"),h=a("05c0"),d=a("bd08"),m=a("db86"),g=a("3b16"),y=a("eebe"),b=a.n(y),v=Object(f["a"])(p,n,s,!1,null,null,null);"function"===typeof l["default"]&&Object(l["default"])(v);e["default"]=v.exports;b()(v,"components",{QTable:c["a"],QBtnGroup:u["a"],QBtn:_["a"],QTooltip:h["a"],QTr:d["a"],QTd:m["a"],QPagination:g["a"]})},"1fd3":function(t,e){},c694:function(t,e,a){"use strict";var n=a("1fd3"),s=a.n(n);e["default"]=s.a}}]);