(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-743435bd"],{2738:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("van-nav-bar",{attrs:{border:!1,fixed:""},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"page-title"},[t._v(t._s(t.nameMasked)+"（本人）")]),e("img",{staticStyle:{height:"0.5em"},attrs:{src:s("6c47")}})]},proxy:!0},{key:"left",fn:function(){return[e("span",{staticClass:"left-span",on:{click:t.goBack}},[e("van-icon",{attrs:{name:"arrow-left",color:"#FFF",size:"1.5em"}})],1)]},proxy:!0}])}),e("div",{staticClass:"records"},[t._m(0),e("div",{staticClass:"hairline-bottom"}),e("div",{staticClass:"list"},t._l(t.records,(function(s){return e("div",{key:s.time,staticClass:"item"},[t._m(1,!0),e("div",{staticClass:"content"},[e("div",{staticClass:"time"},[t._v(t._s(s.time))]),e("div",{staticClass:"agent"},[t._v(t._s(s.agent))])]),t._m(2,!0)])})),0)]),e("div",{staticClass:"disclaimer"},[t._v("\n    数据来源：核酸结果信息来源于天津市疫情防控指挥部。\n  ")])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"caption"},[e("img",{staticStyle:{height:"1em"},attrs:{src:s("5ebd")}}),t._v(" 核酸检测结果\n    ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"captions"},[e("div",{staticClass:"time"},[t._v("检测时间：")]),e("div",{staticClass:"agent"},[t._v("检测结构：")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon"},[e("div",{staticClass:"negative"},[e("div",[t._v("阴")])])])}],c=(s("ac6a"),s("f3e2"),s("7f7f"),s("5a0c")),n=s.n(c),o=s("3c96"),r=s("bf06"),A=s("7274"),d=s("2a72");s("a471");var u=["天津国药控股医学检验实验室","天津金域医学检验实验室-中心实验室","天津金匙医学检验实验实验室","天津华测医学检验实验室","天津卡尤迪医学检验实验室","天津诺道医学检验实验室","天津核子华曦医学检验实验室"],m={mixins:[d["a"]],data:function(){return{masked:!0,coreMasked:!0,date:n()().format("YYYY-MM-DD")+n()().locale("zh-cn").format("（周dd）"),time:n()().format("HH:mm:ss"),form:{},pcrTime:n()().add(-1,"day").add(5,"hour").format("YYYY-MM-DD HH:mm:ss"),pcrLocation1:Object(o["a"])("pcrLocation1")["pcrLocation1"],enterDate:n()().format("YYYY-MM-DD HH:mm:ss"),records:[]}},computed:{nameMasked:function(){return this.form.name[0]+"**"},idMasked:function(){return this.form.id[0]+"****************"+this.form.id[this.form.id.length-1]}},created:function(){setInterval(this.updateTime,1e3),this.form=Object(o["a"])("name","id","locationcode"),A["a"].overlaysWebView(!0),A["a"].styleLightContent(),document.querySelectorAll("img").forEach((function(t){t.addEventListener("contextmenu",(function(t){t.preventDefault()}))})),r["a"].activateService(),this.generateRecords()},methods:{generateRecords:function(){this.records=[];for(var t=0;t<5;t++){var e=n()().add(2*-t-1,"day").add(6*Math.random(),"hour").add(60*Math.random(),"minute").add(60*Math.random(),"second").format("YYYY-MM-DD HH:mm:ss"),s=u[Math.floor(Math.random()*u.length)];this.records.push({time:e,agent:s})}}}},g=m,l=(s("39e3"),s("2877")),p=Object(l["a"])(g,a,i,!1,null,"6377acba",null);e["default"]=p.exports},"2a72":function(t,e,s){"use strict";var a={methods:{goBack:function(){var t=this;this.$store.state.goingBack=!0,this.$router.go(-1),setTimeout((function(){t.$store.state.goingBack=!1}),500)}}};e["a"]=a},"39e3":function(t,e,s){"use strict";s("b858")},"5ebd":function(t,e){t.exports="data:image/png;base64,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"},"6c47":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAeCAQAAAArmu5JAAACaUlEQVRIx62WP0/bUBTFj0NKSaQEErXAlJmWDG0lpqjKUKSoWz8CfxZgY0ERYoEBpJb2I/AZ2GhBJFKkShFFDRILA0KMoBQapdA0Kenp4Pj62bFNQny8PN/7fH7vz/WzNabxEq/wAr+Qgt/6igiOUEJJ4yWGAQANRFH3FfIYVfQDAC4DOGgF+5H2eS7pFgT4FkBewu98xph+eXCMhq45QPh2DfBanMdA8FhuZ3zEzIjrMQGCixI4ZdAnSJCn4rqoY+K8kdCCT5gFcbxhXMeAHyVY4agPkFFWxPETYWCGWZXwLrUeIRp3xa3KERMDLtHUWo+YNcVrSY+ZW/ZdSU73AJlWfEpGSZnpcd5Kusm5B0Lm2BSXW44bcXVFd6hqnX1dIvq4bnHYMXfZ7PSeduWZ6AKSYL7N4YMds0onVbnMUAeIEJeVWlW1qmKySuKfreMFV/SidLlGuMIL2zOqR9bAzFu6THGWddtjTe4zyxRjin2MKWa5r2y5rjpnOWWJzBNgxh4iOMETOuuK5zziOa9c8iecYPvQM2CYOesEW8f4BmvsTjVuKJ8ScyNyDINgmEXHtz/BLTY6RDS41VaX+mlQZNgogUEectNlg/c6gOy5FMkmDzmoFnTU9cAsiNmZpTTqPJN2wfUQjeotjd7f8zAqeAQA+IknAJ4ihCFUUEMZwA/EAAB/MYTfnj73vHiTMuJth+y2ZCe9fQL3/J28kVbOIZtz6Peg2RRlvEmHbFKyRW8fb0iEdy2bsmOJaCy38neMPHzRnqEhy0PHpTCWrYHnXkZBT8wB4niNt8go/6ZW5ZHEF3xGAX+8jP4DsEEWEZ2b68EAAAAASUVORK5CYII="},b858:function(t,e,s){}}]);