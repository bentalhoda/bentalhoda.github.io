(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0565":function(t,a,e){"use strict";e("16f0")},"16f0":function(t,a,e){},"8b24":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"texthead"},[e("h5",[t._v("\n      برای دریافت اطلاعات ورود به سامانه همگام، لطفا کد ملی یا شماره دانش آموزی خود را وارد کنید.\n    ")])]),e("div",{staticClass:"row"},[e("q-input",{attrs:{filled:"",label:"کد ملی یا شماره دانش آموزی"},model:{value:t.inputfield,callback:function(a){t.inputfield=a},expression:"inputfield"}})],1),e("div",[e("q-btn",{attrs:{push:"",color:"primary",label:"ثبت",size:"xl"},on:{click:function(a){return t.getinfo()}}})],1),e("br"),e("div",[e("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("q-icon",{staticClass:"text-teal",staticStyle:{"font-size":"4.4em"},attrs:{name:"vpn_key"}})],1),e("q-separator",{attrs:{inset:""}}),e("q-card-section",{staticClass:"q-pt-none"},[t._v("\n        نام و نام خانوادگی: "+t._s(t.name)+" "),e("br"),t._v("\n        نام کاربری: "+t._s(t.username)+" "),e("br"),t._v("\n        رمزعبور: "+t._s(t.password)+" "),e("br")]),e("q-separator",{attrs:{inset:""}}),e("q-card-section",[e("q-btn",{attrs:{push:"",type:"a",href:"http://hamgam.medu.ir/portal/home.php?r=login",target:"_blank",color:"primary",label:"ورود به سامانه همگام",size:"xl"}})],1)],1)],1)])},s=[],r=e("bc3a"),i=e.n(r),o={name:"PageIndex",data(){return{inputfield:"",name:"",username:"",password:"",response:!1}},methods:{getinfo(){i.a.get("https://bentolhoda.herokuapp.com/getinfo/?username="+this.inputfield,{crossdomain:!0}).then((t=>{this.name=t.data.name,this.username=t.data.username,this.password=t.data.password}))}}},l=o,c=(e("0565"),e("2877")),p=e("9989"),d=e("27f9"),u=e("9c40"),f=e("f09f"),m=e("a370"),b=e("0016"),h=e("eb85"),q=e("eebe"),v=e.n(q),w=Object(c["a"])(l,n,s,!1,null,null,null);a["default"]=w.exports;v()(w,"components",{QPage:p["a"],QInput:d["a"],QBtn:u["a"],QCard:f["a"],QCardSection:m["a"],QIcon:b["a"],QSeparator:h["a"]})}}]);