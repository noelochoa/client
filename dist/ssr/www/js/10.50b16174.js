(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"392b":function(t,e,a){"use strict";a("843c"),a("4d90"),a("5319");var s=a("0831");const i=a("c1df"),{getScrollTarget:r,setScrollPosition:n}=s["a"];var o,c,l={data(){return{prevRoute:null}},beforeRouteEnter(t,e,a){a((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymm:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0),date:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,"0"),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,a){return t?t.toString().replace(new RegExp(e,"g"),a):t},toTimeElapsed(t){return t?i(t).fromNow():""},toHumanDate(t){return t?i(t).format("MMM D, YYYY"):""},toHumanDatetime(t){return t?i(t).format("MMM D, YYYY HH:mm"):""},censorTxt(t){return t?t.substring(0,1).padEnd(t.length,"*"):""},resolveAssetsUrl(t){return t?(t=this.replaceAll(t,/\\/,"/"),"https://api.bake-free.co/"+t):t},showNotif:function(t,e,a=3e3){this.$q.notify({type:t,timeout:a,position:"top",message:e})},calcPrice(t,e){if(e){const a=(t-t*e/100).toFixed(0);return a}return t},isEmpty(t){if("undefined"==typeof t)return!0;if(null==t)return!0;if(0==t.length)return!0;for(let e in t)if(hasOwnProperty.call(t,e))return!1;return!0},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},isDaysAhead(t,e){const a=i(t),s=i().add(e,"days");return a.startOf("day").toDate()-s.startOf("day").toDate()>=0},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},_disableScroll(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(e,t)}},_enableScroll(){window.onscroll=function(){}},scrollToElement(t,e=0){const a=r(t),s=t.offsetTop,i=e;n(a,s,i)}}},d=l,p=a("2877"),u=Object(p["a"])(d,o,c,!1,null,null,null);e["a"]=u.exports},"40f1":function(t,e,a){"use strict";a("6d73")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="4678"},"4dbf":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,'.navigation[data-v-294ab895]{height:106px;display:flex;justify-content:space-between;align-items:center;color:#eeebe3;transition:background 0.5s ease-out,color 0.25s ease-out}.navigation div[data-v-294ab895]{flex:0 1 auto}.left-nav[data-v-294ab895]{margin-left:24px}.right-nav[data-v-294ab895]{margin-right:24px}.left-nav li[data-v-294ab895],.right-nav li[data-v-294ab895]{font-size:14px;margin:0 14px;display:inline-block;flex-grow:0;flex-basis:240px}.mobile[data-v-294ab895]{display:none}.opaque-nav[data-v-294ab895]{box-shadow:0 0.1rem #eecfc8;background:#f1ebdd;color:#1d1d1d}.search-results[data-v-294ab895]{font-size:16px}.search-results .section-label[data-v-294ab895]{line-height:2.5em;width:100%;border-bottom:1px solid #cfcac2;margin:0 0 40px}.sproduct-list[data-v-294ab895]{width:100%;display:grid;grid-gap:40px;justify-content:space-evenly;grid-template-columns:repeat(4,minmax(110px,380px))}.sproduct-list .product-item .product-img[data-v-294ab895]{width:100%;max-width:100%;transition:transform 0.25s ease-out}.sproduct-list .product-item .product-img[data-v-294ab895]:hover{transform:translate(2px,2px)}.sproduct-list .product-item .product-title[data-v-294ab895]{overflow:hidden}@media (max-width:640px){.search-results[data-v-294ab895]{padding-top:0}.sproduct-list[data-v-294ab895]{grid-template-columns:1fr;grid-gap:20px}.sproduct-list .product-item[data-v-294ab895]{display:grid;grid-template-columns:70px 1fr;grid-template-rows:37px;grid-template-areas:"product-img product-title" "product-img product-price";column-gap:40px}.sproduct-list .product-item .product-img[data-v-294ab895]{grid-area:product-img}.sproduct-list .product-item .product-title[data-v-294ab895]{text-align:left;margin-top:2px;white-space:nowrap;overflow:hidden;grid-area:product-title}.sproduct-list .product-item .product-price[data-v-294ab895]{text-align:left;margin-top:2px;grid-area:product-price}}@media (max-width:1220px){.left-nav[data-v-294ab895]{margin-left:8px}.right-nav[data-v-294ab895]{margin-right:8px}.left-nav li[data-v-294ab895],.right-nav li[data-v-294ab895]{margin:0}.mobile[data-v-294ab895]{display:inline-block}.default[data-v-294ab895]{display:none}.center-nav[data-v-294ab895]{position:relative!important;top:4px!important;left:4px!important}}',""]),t.exports=e},"55d9":function(t,e,a){var s=a("fc27");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("49390a94",s,!0,{sourceMap:!1})},"652b":function(t,e,a){"use strict";a("55d9")},"6d73":function(t,e,a){var s=a("4dbf");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("69050ad9",s,!0,{sourceMap:!1})},f4dd:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation",class:{"opaque-nav":t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!!t.opaque}}},[a("div",[a("ul",{staticClass:"left-nav"},[a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/"}},[a("span",{staticClass:"default"},[t._v("HOME")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"home"}})],1)],1),a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/products/all"}},[a("span",{staticClass:"default"},[t._v("SHOP")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"store"}})],1)],1)])]),t._m(0),a("div",[a("ul",{staticClass:"right-nav"},[a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/account"}},[a("span",{staticClass:"default"},[t._v("ACCOUNT")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"account_circle"}})],1)],1),a("li",{staticClass:"ls-sm"},[a("a",{staticClass:"header-link hover-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showSearchDlg(e)}}},[a("span",{staticClass:"default"},[t._v("SEARCH")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"search"}})],1)]),a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/basket"}},[a("span",{staticClass:"default"},[t._v("BASKET ")]),t.itemsCount?a("span",{staticClass:"default"},[t._v("("+t._s(t.itemsCount)+")")]):t._e(),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"shopping_basket"}})],1)],1)])]),a("q-dialog",{attrs:{"full-width":"",position:"top","content-class":"nav-search",square:"",maximized:"","transition-show":"fade","transition-hide":"fade"},model:{value:t.showDlg,callback:function(e){t.showDlg=e},expression:"showDlg"}},[a("div",{staticClass:"bg-secondary block"},[a("q-form",{attrs:{autofocus:""}},[a("q-input",{staticClass:"q-pa-lg text-h5",attrs:{"input-class":"ls-sm",type:"text",spellcheck:"false",placeholder:"SEARCH...",debounce:400},on:{input:t.searchProducts},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[t.search?a("q-btn",{staticClass:"no-hover-bg",attrs:{flat:"",ripple:!1,icon:"clear"},on:{click:t.clearSearch}}):t._e()]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.search&&!t.fetching?a("div",{staticClass:"search-results q-px-lg q-py-sm text-grey-8"},[a("div",{staticClass:"section-label text-uppercase ls-sm"},[t._v("\n            Products\n          ")]),a("p",[t._v(t._s(t.searchRes))]),a("div",{staticClass:"sproduct-list q-mb-lg"},t._l(t.sProducts,(function(e,s){return a("div",{key:"prod-"+s,ref:"prod",refInFor:!0,staticClass:"product-item"},[a("router-link",{attrs:{to:"/buy/"+e.seoname}},[a("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():a("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                      "+t._s(e.discount[0].percent)+"% OFF\n                    ")])],1)],1)],1),a("div",{staticClass:"q-mt-md text-center cursor-pointer product-title"},[a("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n                  "+t._s(e.name)+"\n                ")])],1),a("div",{staticClass:"ls-sm q-mt-sm text-center product-price"},[t.isEmpty(e.options)?t._e():a("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():a("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?a("span",[t._v(t._s(e.baseprice))]):a("span",{staticClass:"text-primary"},[t._v("\n                  "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n                ")]),t._v("\n                PHP\n              ")])],1)})),0)]):t._e()],1)],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"center-nav absolute",staticStyle:{top:"-12px","margin-left":"16px"}},[a("img",{attrs:{src:"/logo.png",width:"132px"}})])])}],r=(a("e6cf"),a("392b")),n={name:"Navigation",mixins:[r["a"]],props:{opaque:{type:Boolean,required:!0,default:!0}},computed:{sProducts(){return this.$store.getters["gallery/searchResults"]},itemsCount(){return this.$store.getters["basket/itemsCount"]||"0"}},data(){return{hover:this.opaque,showDlg:!1,search:"",searchRes:"",fetching:!1}},methods:{clearSearch(){this.searchRes=this.search=""},showSearchDlg(){this.showDlg=!0},async searchProducts(t){try{this.searchRes="",this.fetching=!0;const t=await this.$store.dispatch("gallery/searchProducts",{search:this.search});t||(this.searchRes="No items found.")}catch(e){this.searchRes=e+"Error occurred while searching for products."}finally{this.fetching=!1}}}},o=n,c=(a("40f1"),a("2877")),l=a("9c40"),d=a("24e8"),p=a("0378"),u=a("27f9"),f=a("0016"),m=a("068f"),b=a("05c0"),h=a("eebe"),g=a.n(h),v=Object(c["a"])(o,s,i,!1,null,"294ab895",null);e["a"]=v.exports;g()(v,"components",{QBtn:l["a"],QDialog:d["a"],QForm:p["a"],QInput:u["a"],QIcon:f["a"],QImg:m["a"],QTooltip:b["a"]})},fc27:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".mainpage>div[data-v-00f5658f]{width:100%}.basket[data-v-00f5658f]{min-height:65vh;font-size:16px;max-width:1200px;margin:60px auto;padding:0 80px}.basket>div[data-v-00f5658f]{width:100%}.basket-details[data-v-00f5658f]{display:table;table-layout:auto;border-spacing:0 30px;width:100%}.basket-details .table-header[data-v-00f5658f]{display:table-header-group}.basket-details .table-header .header-item[data-v-00f5658f]{display:table-cell;padding-bottom:10px;border-bottom:1px solid #cfcac2}.basket-details .table-item[data-v-00f5658f]{display:table-row;margin:30px 0;width:100%}.basket-details .table-item .product-info[data-v-00f5658f]{display:table-cell;vertical-align:middle}.basket-details .table-item .product-img[data-v-00f5658f]{width:100px}.basket-details .table-item .product-detail[data-v-00f5658f]{width:440px;max-width:440px;padding-left:30px}.basket-details .table-item .product-price[data-v-00f5658f]{width:120px}.basket-details .table-item .options[data-v-00f5658f]{font-size:14px}.table-footer[data-v-00f5658f]{display:table;table-layout:auto;border-spacing:0 30px;width:100%;border-top:1px solid #cfcac2}.table-footer .footer-item[data-v-00f5658f]{display:table-cell;vertical-align:middle;text-align:right;width:100%}.overflow-ellipsis[data-v-00f5658f]{display:block;max-width:inherit;overflow:hidden;text-overflow:ellipsis}@media (max-width:600px){.basket[data-v-00f5658f]{padding:0 20px}}",""]),t.exports=e},fe54:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"mainpage"},[a("Navigation",t._b({},"Navigation",{opaque:!0},!1)),a("div",{staticClass:"basket text-grey-8"},[a("div",{staticClass:"basket-heading"},[a("h4",{staticClass:"text-primary text-center ls-sm"},[t._v("Your Basket")]),a("p",{staticClass:"q-mt-lg text-center"},[t._v(t._s(t.fetchErr))])]),t.fetching?a("div",{staticClass:"q-mt-lg text-center"},[a("q-spinner",{attrs:{size:"50px",color:"primary"}})],1):t.isEmpty(t.basket)&&!t.fetching?a("div",{staticClass:"q-mt-lg text-center"},[a("q-btn",{staticClass:"q-mt-lg",attrs:{unelevated:"",color:"red-6 ls-sm",size:"16px",padding:"sm lg",label:"Go to Shop",to:"/products/all"}})],1):a("div",{staticClass:"basket-details q-mt-lg"},[a("div",{staticClass:"table-header"},[a("span",{staticClass:"ls-sm header-item"},[t._v("PRODUCT")]),a("span",{staticClass:"ls-sm header-item"}),a("span",{staticClass:"ls-sm header-item text-center q-px-sm"},[t._v("QTY.")]),a("span",{staticClass:"ls-sm header-item text-right"},[t._v("PRICE")])]),t._l(t.products,(function(e,s){return a("div",{key:"item-"+s,staticClass:"table-item text-grey-7"},[a("div",{staticClass:"product-info product-img"},[a("q-img",{attrs:{src:t.isEmpty(e.image)?"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img":t.resolveAssetsUrl(e.image),"native-context-menu":"",ratio:1}})],1),a("div",{staticClass:"product-info product-detail ls-sm"},[e.isActive?a("router-link",{staticClass:"text-h6 text-primary product-link ls-sm overflow-ellipsis",attrs:{to:"/buy/"+e.seoname}},[t._v("\n            "+t._s(e.name)+"\n          ")]):a("div",{staticClass:"text-h6 ls-sm overflow-ellipsis"},[t._v("\n            "+t._s(e.name)+"\n          ")]),a("div",[t._v(t._s(e.category))]),t._l(e.options,(function(e,s){return a("div",{key:"key-"+s,staticClass:"options"},[t._v("\n            "+t._s(e._option+": "+e._selected)+"\n            "),null!=e.otherValue?a("span",[t._v("("+t._s(e.otherValue)+") ")]):t._e(),a("br")])}))],2),a("div",{staticClass:"product-info text-center"},[a("q-input",{staticStyle:{"max-width":"140px",margin:"0 auto"},attrs:{outlined:"",dense:"",value:e.quantity,"input-style":"text-align:center;",debounce:1e3},on:{input:function(e){return t.onChgQty(e,s)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"remove"},on:{click:function(a){return t.onChgQty(e.quantity-1,s)}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"add"},on:{click:function(a){t.onChgQty(Number.parseInt(e.quantity)+1,s)}}})]},proxy:!0}],null,!0)}),a("q-btn",{staticClass:"ls-sm no-hover-bg hover-primary q-pd-md",attrs:{flat:"",label:"remove",ripple:!1},on:{click:function(e){return t.onRemove(s)}}})],1),a("div",{staticClass:"product-info product-price text-right ls-sm"},[t._v("\n          "+t._s(e.price)+" PHP\n        ")])])}))],2),t.isEmpty(t.basket)||t.fetching?t._e():a("div",{staticClass:"table-footer"},[a("div",{staticClass:"footer-item"},[a("span",{staticClass:"ls-sm text-primary"},[t._v("TOTAL: ")]),a("span",{staticClass:"ls-sm text-primary"},[t._v(t._s(t.total)+" PHP")]),a("p",[t._v("\n          Displayed total have all discounts applied (if any).\n        ")]),a("q-btn",{attrs:{unelevated:"",type:"submit",color:"red-6 ls-sm",size:"16px",padding:"sm lg",label:"Checkout",to:"/checkout"}})],1)])])],1)},i=[],r=(a("e01a"),a("13d5"),a("4e82"),a("e6cf"),a("392b")),n=a("f4dd"),o={name:"Basket",mixins:[r["a"]],components:{Navigation:n["a"]},meta(){return{title:"Your Basket"}},computed:{products(){if(!this.isEmpty(this.basket)){let t=this.$store.getters["auth/isReseller"]?"reseller":"all";const e=this.basket.products.map((e=>{let a=e.product.discount?e.product.discount.filter((e=>e.target==t||"all"==e.target)):[];a.sort(((t,e)=>e.percent-t.percent));let s=e.quantity*e.product.basePrice;return e.options.forEach((t=>{const a=e.product.options.find((e=>e.attribute==t._option)),i=a.choices.find((e=>e.value==t._selected));s+=e.quantity*i.price})),{id:e.product._id,isActive:e.product.isActive,name:e.product.name,seoname:e.product.seoname,category:e.product.category.name,description:e.product.description,details:e.product.details,minOrderQty:e.product.minOrderQuantity,options:e.options,quantity:e.quantity,price:this.isEmpty(a)?s:this.calcPrice(s,a[0].percent),image:this._selectFirstImg(e.product.images)}}));return e}return[]},total(){const t=(t,e)=>t+Number.parseInt(e.price);return this.isEmpty(this.products)?"0":this.products.reduce(t,0)}},created(){this.getCartDetails()},mounted(){},data(){return{fetchErr:"",loading:!1,fetching:!0,basket:{}}},methods:{_selectFirstImg(t){if(!this.isEmpty(t)){const e=t[0];if(e)return e.image}return!1},async onChgQty(t,e){try{const a=this.basket.products[e],s=this.basket.products[e].quantity,i=a.product.minOrderQuantity;if(this.basket.products[e].quantity=i<=t&&t<=100?t:i,s==this.basket.products[e].quantity)return;await this.$store.dispatch("basket/updateCart",{product:{product:a.product._id,quantity:a.quantity,options:a.options}})}catch(a){this.fetchErr="Could not update basket items. "+a}},async onRemove(t){try{const e=this.basket.products[t];await this.$store.dispatch("basket/updateCart",{product:{product:e.product._id,quantity:0,options:e.options}}),this.$delete(this.basket.products,t),0==this.basket.products.length&&(this.fetchErr="No items on your shopping basket.",this.basket={})}catch(e){this.fetchErr="Could not update basket items. "+e}},async getCartDetails(){try{const t=await this.$store.dispatch("basket/fetchCartDetails");t?this.basket=JSON.parse(JSON.stringify(t)):this.fetchErr="No items on your shopping basket."}catch(t){this.fetchErr=t}finally{this.fetching=!1}}}},c=o,l=(a("652b"),a("2877")),d=a("9989"),p=a("0d59"),u=a("9c40"),f=a("068f"),m=a("27f9"),b=a("0016"),h=a("eebe"),g=a.n(h),v=Object(l["a"])(c,s,i,!1,null,"00f5658f",null);e["default"]=v.exports;g()(v,"components",{QPage:d["a"],QSpinner:p["a"],QBtn:u["a"],QImg:f["a"],QInput:m["a"],QIcon:b["a"]})}}]);