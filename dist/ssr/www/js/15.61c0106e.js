(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"392b":function(t,s,e){"use strict";e("843c"),e("4d90"),e("5319");var a=e("0831");const r=e("c1df"),{getScrollTarget:n,setScrollPosition:o}=a["a"];var c,i,l={data(){return{prevRoute:null}},beforeRouteEnter(t,s,e){e((t=>{t.prevRoute=s}))},computed:{today(){const t=new Date,s={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymm:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0),date:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,"0"),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return s},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,s,e){return t?t.toString().replace(new RegExp(s,"g"),e):t},toTimeElapsed(t){return t?r(t).fromNow():""},toHumanDate(t){return t?r(t).format("MMM D, YYYY"):""},toHumanDatetime(t){return t?r(t).format("MMM D, YYYY HH:mm"):""},censorTxt(t){return t?t.substring(0,1).padEnd(t.length,"*"):""},resolveAssetsUrl(t){return t?(t=this.replaceAll(t,/\\/,"/"),"https://api.bake-free.co/"+t):t},showNotif:function(t,s,e=3e3){this.$q.notify({type:t,timeout:e,position:"top",message:s})},calcPrice(t,s){if(s){const e=(t-t*s/100).toFixed(0);return e}return t},isEmpty(t){if("undefined"==typeof t)return!0;if(null==t)return!0;if(0==t.length)return!0;for(let s in t)if(hasOwnProperty.call(t,s))return!1;return!0},findMaxDt:function(t,s){return new Date(Math.max(new Date(t),new Date(s)))},findMinDt:function(t,s){return new Date(Math.min(new Date(t),new Date(s)))},isDaysAhead(t,s){const e=r(t),a=r().add(s,"days");return e.startOf("day").toDate()-a.startOf("day").toDate()>=0},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},_disableScroll(){var t=window.pageYOffset||document.documentElement.scrollTop,s=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(s,t)}},_enableScroll(){window.onscroll=function(){}},scrollToElement(t,s=0){const e=n(t),a=t.offsetTop,r=s;o(e,a,r)}}},d=l,u=e("2877"),m=Object(u["a"])(d,c,i,!1,null,null,null);s["a"]=m.exports},"3e6a":function(t,s,e){},4678:function(t,s,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"8b24":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"home flex flex-start"},[e("div",{staticClass:"navigation",class:{"opaque-nav":t.opaque||t.showDlg},on:{mouseover:function(s){t.opaque=!0},mouseleave:function(s){t.opaque=!1}}},[e("div",[e("ul",{staticClass:"left-nav"},[e("li",{staticClass:"ls-sm"},[e("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/"}},[e("span",{staticClass:"default"},[t._v("HOME")]),e("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"home"}})],1)],1),e("li",{staticClass:"ls-sm"},[e("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/products"}},[e("span",{staticClass:"default"},[t._v("SHOP")]),e("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"store"}})],1)],1)])]),e("div",[e("div",{staticClass:"center-nav absolute",staticStyle:{top:"-12px","margin-left":"16px"}},[e("img",{attrs:{src:"/logo.png",width:"132px"}})])]),e("div",[e("ul",{staticClass:"right-nav"},[e("li",{staticClass:"ls-sm"},[e("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/account"}},[e("span",{staticClass:"default"},[t._v("ACCOUNT")]),e("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"account_circle"}})],1)],1),e("li",{staticClass:"ls-sm"},[e("a",{staticClass:"header-link hover-primary",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.showSearchDlg(s)}}},[e("span",{staticClass:"default"},[t._v("SEARCH")]),e("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"search"}})],1)]),e("li",{staticClass:"ls-sm"},[e("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/basket"}},[e("span",{staticClass:"default"},[t._v("BASKET ")]),t.itemsCount?e("span",{staticClass:"default"},[t._v("("+t._s(t.itemsCount)+")")]):t._e(),e("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"shopping_basket"}})],1)],1)])]),e("q-dialog",{attrs:{position:"top","content-class":"nav-search",square:"",maximized:"","transition-show":"fade","transition-hide":"fade"},model:{value:t.showDlg,callback:function(s){t.showDlg=s},expression:"showDlg"}},[e("div",{staticClass:"bg-secondary block"},[e("q-form",{attrs:{autofocus:""}},[e("q-input",{staticClass:"q-pa-lg text-h5",attrs:{"input-class":"ls-sm",type:"text",spellcheck:"false",placeholder:"SEARCH...",debounce:400},on:{input:t.searchProducts},scopedSlots:t._u([{key:"before",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[t.search?e("q-btn",{staticClass:"no-hover-bg",attrs:{flat:"",ripple:!1,icon:"clear"},on:{click:t.clearSearch}}):t._e()]},proxy:!0}]),model:{value:t.search,callback:function(s){t.search=s},expression:"search"}}),t.search&&!t.fetching?e("div",{staticClass:"search-results q-px-lg q-py-sm text-grey-8"},[e("div",{staticClass:"section-label text-uppercase ls-sm"},[t._v("\n              Products\n            ")]),e("p",[t._v(t._s(t.searchRes))]),e("div",{staticClass:"sproduct-list q-mb-lg"},t._l(t.sProducts,(function(s,a){return e("div",{key:"prod-"+a,ref:"prod",refInFor:!0,staticClass:"product-item"},[e("router-link",{attrs:{to:"/buy/"+s.seoname}},[e("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:s.image?t.resolveAssetsUrl(s.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(s.discount)?t._e():e("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[e("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                        "+t._s(s.discount[0].percent)+"% OFF\n                      ")])],1)],1)],1),e("div",{staticClass:"q-mt-md text-center cursor-pointer product-title"},[e("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+s.seoname}},[t._v("\n                    "+t._s(s.name)+"\n                  ")])],1),e("div",{staticClass:"ls-sm q-mt-sm text-center product-price"},[t.isEmpty(s.options)?t._e():e("span",[t._v("from ")]),t.isEmpty(s.discount)?t._e():e("span",{staticClass:"text-strike"},[t._v(t._s(s.baseprice))]),t.isEmpty(s.discount)?e("span",[t._v(t._s(s.baseprice))]):e("span",{staticClass:"text-primary"},[t._v("\n                    "+t._s(t.calcPrice(s.baseprice,s.discount[0].percent))+"\n                  ")]),t._v("\n                  PHP\n                ")])],1)})),0)]):t._e()],1)],1)])],1),e("div",{staticClass:"carousel"},[e("q-carousel",{staticClass:"featured-carousel",attrs:{arrows:"",animated:"",swipeable:"",infinite:"",autoplay:t.autoplay},on:{mouseenter:function(s){t.autoplay=!1},mouseleave:function(s){t.autoplay=!0}},model:{value:t.slide,callback:function(s){t.slide=s},expression:"slide"}},t._l(t.featured,(function(s,a){return e("q-carousel-slide",{key:"slide-"+a,attrs:{name:"slide-"+a,"img-src":s.banner?t.resolveAssetsUrl(s.banner):"https://dummyimage.com/1600x900/454345/fafafa.png&text=No+Banner"}},[e("div",{staticClass:"absolute-bottom custom-caption"},[e("div",{staticClass:"text-h4 ls-sm overflow-ellipsis"},[t._v(t._s(s.name))]),e("div",{staticClass:"text-subtitle1 q-mt-sm"},[t._v(t._s(s.description))]),e("q-btn",{staticClass:"q-mt-md ls-sm",attrs:{unelevated:"",padding:"sm lg",size:"16px",color:"accent","text-color":"dark",label:"View More",to:"/buy/"+s.seoname}})],1)])})),1),e("q-btn",{staticClass:"scroll-btn",attrs:{ripple:!1,icon:"keyboard_arrow_down","text-color":"primary",color:"secondary",round:""},on:{click:function(s){return t.scrollToElement(t.$refs.newitems,700)}}})],1),e("div",{ref:"newitems",staticClass:"newitems"},[e("h5",{staticClass:"ls-sm text-primary"},[t._v("NEW ARRIVALS")]),e("div",{staticClass:"content"},[e("div",{staticClass:"product-list"},t._l(t.newItems,(function(s,a){return e("div",{key:"prod-"+a,staticClass:"product-item"},[e("router-link",{attrs:{to:"/buy/"+s.seoname}},[e("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:s.image?t.resolveAssetsUrl(s.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(s.discount)?t._e():e("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[e("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                  "+t._s(s.discount[0].percent)+"% OFF\n                ")])],1)],1)],1),e("div",{staticClass:"q-mt-md text-center cursor-pointer"},[e("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+s.seoname}},[t._v("\n              "+t._s(s.name)+"\n            ")])],1),e("div",{staticClass:"ls-sm q-mt-sm text-center"},[t.isEmpty(s.options)?t._e():e("span",[t._v("from ")]),t.isEmpty(s.discount)?t._e():e("span",{staticClass:"text-strike"},[t._v(t._s(s.baseprice))]),t.isEmpty(s.discount)?e("span",[t._v(t._s(s.baseprice))]):e("span",{staticClass:"text-primary"},[t._v("\n              "+t._s(t.calcPrice(s.baseprice,s.discount[0].percent))+"\n            ")]),t._v("\n            PHP\n          ")])],1)})),0)]),e("q-btn",{staticClass:"q-mt-xl",attrs:{unelevated:"",color:"red-6 ls-sm",size:"16px",padding:"sm lg",label:"View All Products",to:"/products"}})],1)])},r=[],n=(e("e6cf"),e("392b")),o={name:"Home",mixins:[n["a"]],preFetch({store:t,redirect:s}){return t.dispatch("home/getProducts").catch((t=>{s("/error500")}))},computed:{itemsCount(){return this.$store.getters["basket/itemsCount"]||"0"},featured(){return this.$store.getters["home/getFeatured"]},newItems(){return this.$store.getters["home/getNewItems"]},sProducts(){return this.$store.getters["gallery/searchResults"]}},created(){},mounted(){},data(){return{slide:"slide-0",autoplay:!0,opaque:!1,showDlg:!1,search:"",searchRes:"",fetching:!1}},methods:{clearSearch(){this.searchRes=this.search=""},showSearchDlg(){this.showDlg=!0},async searchProducts(t){try{this.searchRes="",this.fetching=!0;const t=await this.$store.dispatch("gallery/searchProducts",{search:this.search});t||(this.searchRes="No items found.")}catch(s){this.searchRes=s+"Error occurred while searching for products."}finally{this.fetching=!1}}}},c=o,i=(e("f656"),e("2877")),l=e("9989"),d=e("9c40"),u=e("24e8"),m=e("0378"),f=e("27f9"),p=e("0016"),b=e("068f"),h=e("05c0"),j=e("880c"),g=e("62cd"),v=e("eebe"),y=e.n(v),C=Object(i["a"])(c,a,r,!1,null,"43d644a8",null);s["default"]=C.exports;y()(C,"components",{QPage:l["a"],QBtn:d["a"],QDialog:u["a"],QForm:m["a"],QInput:f["a"],QIcon:p["a"],QImg:b["a"],QTooltip:h["a"],QCarousel:j["a"],QCarouselSlide:g["a"]})},f656:function(t,s,e){"use strict";var a=e("3e6a"),r=e.n(a);r.a}}]);