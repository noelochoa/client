(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"0050":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"mainpage"},[s("Navigation",t._b({},"Navigation",{opaque:!0},!1)),s("div",{staticClass:"verify flex text-grey-8"},[s("div",{staticClass:"verify-heading text-grey-8"},[s("router-link",{staticClass:" ls-sm text-uppercase cursor-pointer hover-primary inline-block q-mb-md",attrs:{tag:"div",to:"/profile"}},[t._v("\n        Back to Profile\n      ")]),s("h4",{staticClass:"text-primary ls-sm"},[t._v("Verify Account")]),s("p",{staticClass:"text-subtitle1 q-mt-sm"},[t._v("Fill out your information below:")]),s("q-form",{ref:"verify-form",staticClass:"verify-form",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onVerify(e)}}},[t.verifyErr?s("p",{staticClass:"error-msg text-negative bg-red-3 q-py-sm"},[t._v("\n          "+t._s(t.verifyErr)+"\n        ")]):t._e(),s("q-input",{staticClass:"q-mt-lg",attrs:{"input-class":"text-comment",placeholder:"E-mail",type:"email",outlined:"",dense:"",readonly:!!t.user,"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please type your email"},t._isValidEmail]},model:{value:t.verify.email,callback:function(e){t.$set(t.verify,"email",e)},expression:"verify.email"}}),s("q-input",{staticClass:"q-mt-sm",attrs:{"input-class":"text-comment text-uppercase ls-sm",placeholder:"Code",outlined:"",dense:"","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Verification code required."},function(t){return 6==t.length||"Verification code should be 6 characters."}]},model:{value:t.verify.token,callback:function(e){t.$set(t.verify,"token",e)},expression:"verify.token"}}),s("q-btn",{staticClass:"full-width q-mt-md",attrs:{loading:t.loading,disable:t.loading,unelevated:"",type:"submit",color:"red-6 ls-sm",size:"16px",padding:"sm lg",label:"Verify"}})],1)],1)])],1)},r=[],n=(s("e6cf"),s("ded3")),i=s.n(n),o=s("392b"),c=s("f4dd"),l={name:"Verify",mixins:[o["a"]],components:{Navigation:c["a"]},meta(){return{title:"Verify Account"}},computed:{user(){return!!this.$store.getters["auth/isAuthenticated"]&&this.$store.state.auth.user}},created(){this.user&&(this.verify.email=this.user.email)},mounted(){},data(){return{verifyErr:"",loading:!1,verify:{token:"",email:""}}},methods:{_isValidEmail(t){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(t)||"Invalid email format"},async onVerify(){this.loading=!0;try{const t=await this.$store.dispatch("auth/verify",i()({},this.verify));this.showNotif("positive",t),this.$router.push("/profile").catch((t=>{}))}catch(t){this.verifyErr=t}finally{this.loading=!1}}}},d=l,u=(s("438a"),s("2877")),f=s("9989"),m=s("0378"),p=s("27f9"),h=s("9c40"),b=s("eebe"),j=s.n(b),g=Object(u["a"])(d,a,r,!1,null,"3c624a4c",null);e["default"]=g.exports;j()(g,"components",{QPage:f["a"],QForm:m["a"],QInput:p["a"],QBtn:h["a"]})},"392b":function(t,e,s){"use strict";s("843c"),s("4d90"),s("5319");var a=s("0831");const r=s("c1df"),{getScrollTarget:n,setScrollPosition:i}=a["a"];var o,c,l={data(){return{prevRoute:null}},beforeRouteEnter(t,e,s){s((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymm:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0),date:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,"0"),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,s){return t?t.toString().replace(new RegExp(e,"g"),s):t},toTimeElapsed(t){return t?r(t).fromNow():""},toHumanDate(t){return t?r(t).format("MMM D, YYYY"):""},toHumanDatetime(t){return t?r(t).format("MMM D, YYYY HH:mm"):""},censorTxt(t){return t?t.substring(0,1).padEnd(t.length,"*"):""},resolveAssetsUrl(t){return t?(t=this.replaceAll(t,/\\/,"/"),"https://api.bake-free.co/"+t):t},showNotif:function(t,e,s=3e3){this.$q.notify({type:t,timeout:s,position:"top",message:e})},calcPrice(t,e){if(e){const s=(t-t*e/100).toFixed(0);return s}return t},isEmpty(t){if("undefined"==typeof t)return!0;if(null==t)return!0;if(0==t.length)return!0;for(let e in t)if(hasOwnProperty.call(t,e))return!1;return!0},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},isDaysAhead(t,e){const s=r(t),a=r().add(e,"days");return s.startOf("day").toDate()-a.startOf("day").toDate()>=0},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},_disableScroll(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(e,t)}},_enableScroll(){window.onscroll=function(){}},scrollToElement(t,e=0){const s=n(t),a=t.offsetTop,r=e;i(s,a,r)}}},d=l,u=s("2877"),f=Object(u["a"])(d,o,c,!1,null,null,null);e["a"]=f.exports},"40dc":function(t,e,s){},"438a":function(t,e,s){"use strict";var a=s("5280"),r=s.n(a);r.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},5280:function(t,e,s){},8170:function(t,e,s){"use strict";var a=s("40dc"),r=s.n(a);r.a},f4dd:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navigation",class:{"opaque-nav":t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!!t.opaque}}},[s("div",[s("ul",{staticClass:"left-nav"},[s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/"}},[s("span",{staticClass:"default"},[t._v("HOME")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"home"}})],1)],1),s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/products"}},[s("span",{staticClass:"default"},[t._v("SHOP")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"store"}})],1)],1)])]),t._m(0),s("div",[s("ul",{staticClass:"right-nav"},[s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/account"}},[s("span",{staticClass:"default"},[t._v("ACCOUNT")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"account_circle"}})],1)],1),s("li",{staticClass:"ls-sm"},[s("a",{staticClass:"header-link hover-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showSearchDlg(e)}}},[s("span",{staticClass:"default"},[t._v("SEARCH")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"search"}})],1)]),s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/basket"}},[s("span",{staticClass:"default"},[t._v("BASKET ")]),t.itemsCount?s("span",{staticClass:"default"},[t._v("("+t._s(t.itemsCount)+")")]):t._e(),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"shopping_basket"}})],1)],1)])]),s("q-dialog",{attrs:{"full-width":"",position:"top","content-class":"nav-search",square:"",maximized:"","transition-show":"fade","transition-hide":"fade"},model:{value:t.showDlg,callback:function(e){t.showDlg=e},expression:"showDlg"}},[s("div",{staticClass:"bg-secondary block"},[s("q-form",{attrs:{autofocus:""}},[s("q-input",{staticClass:"q-pa-lg text-h5",attrs:{"input-class":"ls-sm",type:"text",spellcheck:"false",placeholder:"SEARCH...",debounce:400},on:{input:t.searchProducts},scopedSlots:t._u([{key:"before",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[t.search?s("q-btn",{staticClass:"no-hover-bg",attrs:{flat:"",ripple:!1,icon:"clear"},on:{click:t.clearSearch}}):t._e()]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.search&&!t.fetching?s("div",{staticClass:"search-results q-px-lg q-py-sm text-grey-8"},[s("div",{staticClass:"section-label text-uppercase ls-sm"},[t._v("\n            Products\n          ")]),s("p",[t._v(t._s(t.searchRes))]),s("div",{staticClass:"sproduct-list q-mb-lg"},t._l(t.sProducts,(function(e,a){return s("div",{key:"prod-"+a,ref:"prod",refInFor:!0,staticClass:"product-item"},[s("router-link",{attrs:{to:"/buy/"+e.seoname}},[s("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():s("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[s("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                      "+t._s(e.discount[0].percent)+"% OFF\n                    ")])],1)],1)],1),s("div",{staticClass:"q-mt-md text-center cursor-pointer product-title"},[s("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n                  "+t._s(e.name)+"\n                ")])],1),s("div",{staticClass:"ls-sm q-mt-sm text-center product-price"},[t.isEmpty(e.options)?t._e():s("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():s("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?s("span",[t._v(t._s(e.baseprice))]):s("span",{staticClass:"text-primary"},[t._v("\n                  "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n                ")]),t._v("\n                PHP\n              ")])],1)})),0)]):t._e()],1)],1)])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"center-nav absolute",staticStyle:{top:"-12px","margin-left":"16px"}},[s("img",{attrs:{src:"/logo.png",width:"132px"}})])])}],n=(s("e6cf"),s("392b")),i={name:"Navigation",mixins:[n["a"]],props:{opaque:{type:Boolean,required:!0,default:!0}},computed:{sProducts(){return this.$store.getters["gallery/searchResults"]},itemsCount(){return this.$store.getters["basket/itemsCount"]||"0"}},data(){return{hover:this.opaque,showDlg:!1,search:"",searchRes:"",fetching:!1}},methods:{clearSearch(){this.searchRes=this.search=""},showSearchDlg(){this.showDlg=!0},async searchProducts(t){try{this.searchRes="",this.fetching=!0;const t=await this.$store.dispatch("gallery/searchProducts",{search:this.search});t||(this.searchRes="No items found.")}catch(e){this.searchRes=e+"Error occurred while searching for products."}finally{this.fetching=!1}}}},o=i,c=(s("8170"),s("2877")),l=s("9c40"),d=s("24e8"),u=s("0378"),f=s("27f9"),m=s("0016"),p=s("068f"),h=s("05c0"),b=s("eebe"),j=s.n(b),g=Object(c["a"])(o,a,r,!1,null,"33ddb74f",null);e["a"]=g.exports;j()(g,"components",{QBtn:l["a"],QDialog:d["a"],QForm:u["a"],QInput:f["a"],QIcon:m["a"],QImg:p["a"],QTooltip:h["a"]})}}]);