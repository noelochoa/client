(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"08f2":function(t,e,s){var a=s("24fb");e=a(!1),e.push([t.i,'.sticky[data-v-8be27e90]{position:-webkit-sticky;position:sticky;top:20px}.mainpage>div[data-v-8be27e90]{width:100%}.navigation[data-v-8be27e90]{position:absolute;z-index:999;height:106px;display:flex;justify-content:space-between;align-items:center;color:#eeebe3;transition:background 0.5s ease-out,color 0.25s ease-out}.navigation div[data-v-8be27e90]{flex:0 1 auto}.left-nav[data-v-8be27e90]{margin-left:24px}.right-nav[data-v-8be27e90]{margin-right:24px}.left-nav li[data-v-8be27e90],.right-nav li[data-v-8be27e90]{font-size:14px;margin:0 14px;display:inline-block;flex-grow:0;flex-basis:240px}.mobile[data-v-8be27e90]{display:none}.opaque-nav[data-v-8be27e90]{background:#f1ebdd;color:#1d1d1d}.search-results[data-v-8be27e90]{font-size:16px}.search-results .section-label[data-v-8be27e90]{line-height:2.5em;width:100%;border-bottom:1px solid #cfcac2;margin:0 0 40px}.header-banner[data-v-8be27e90]{width:100%;height:550px;justify-content:center;align-items:center}.header-banner .img-wrapper[data-v-8be27e90]{background:#1d1d1d;transform:translate3d(0px,0px,0px);height:100%;width:100%;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:cover;filter:contrast(0.4);-webkit-filter:contrast(0.4)}.header-banner .caption[data-v-8be27e90]{position:absolute;margin:0 auto}.content-main[data-v-8be27e90]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-bottom:60px}.content-main .nav-toolbar[data-v-8be27e90]{width:100%;height:60px;margin-bottom:20px;border-top:1px solid #cfcac2;border-bottom:1px solid #cfcac2}.content-main .nav-toolbar .nav-btn[data-v-8be27e90]{display:flex;height:100%;flex-basis:160px;border-left:1px solid #cfcac2}.content-main .products[data-v-8be27e90]{display:flex;font-size:16px;width:100%;padding:20px}.content-main .products .filter[data-v-8be27e90]{padding-left:20px;width:180px}.content-main .products .filter li[data-v-8be27e90]{margin-bottom:16px;font-size:15px;color:#616161}.product-list[data-v-8be27e90]{width:100%;display:grid;grid-gap:40px;grid-template-columns:repeat(4,minmax(240px,1fr))}.product-list .product-item .product-img[data-v-8be27e90]{width:100%;max-width:100%;transition:transform 0.25s ease-out}.product-list .product-item .product-img[data-v-8be27e90]:hover{transform:translate(2px,2px)}.sproduct-list[data-v-8be27e90]{width:100%;display:grid;grid-gap:40px;justify-content:space-evenly;grid-template-columns:repeat(4,minmax(110px,380px))}.sproduct-list .product-item .product-img[data-v-8be27e90]{width:100%;max-width:100%;transition:transform 0.25s ease-out}.sproduct-list .product-item .product-img[data-v-8be27e90]:hover{transform:translate(2px,2px)}.sproduct-list .product-item .product-title[data-v-8be27e90]{overflow:hidden}.filter-drawer .filter-title[data-v-8be27e90]{display:flex;align-items:center;justify-content:center;border-bottom:1px solid #cfcac2}.filter-drawer .filter-title>i[data-v-8be27e90]{position:absolute;right:20px}.filter-drawer .filter-selection[data-v-8be27e90]{display:flex;font-size:16px;width:100%;padding:20px}.filter-drawer .filter-selection li[data-v-8be27e90]{margin-bottom:16px;font-size:15px;color:#616161}@media (max-width:640px){.search-results[data-v-8be27e90]{padding-top:0}.sproduct-list[data-v-8be27e90]{grid-template-columns:1fr;grid-gap:20px}.sproduct-list .product-item[data-v-8be27e90]{display:grid;grid-template-columns:70px 1fr;grid-template-rows:37px;grid-template-areas:"product-img product-title" "product-img product-price";column-gap:40px}.sproduct-list .product-item .product-img[data-v-8be27e90]{grid-area:product-img}.sproduct-list .product-item .product-title[data-v-8be27e90]{text-align:left;margin-top:2px;white-space:nowrap;overflow:hidden;grid-area:product-title}.sproduct-list .product-item .product-price[data-v-8be27e90]{text-align:left;margin-top:2px;grid-area:product-price}}@media (min-width:1038px){.filter-btn[data-v-8be27e90]{display:none!important}}@media (max-width:1038px){.filter[data-v-8be27e90]{display:none!important}}@media (max-width:1220px){.left-nav[data-v-8be27e90]{margin-left:8px}.right-nav[data-v-8be27e90]{margin-right:8px}.left-nav li[data-v-8be27e90],.right-nav li[data-v-8be27e90]{margin:0}.mobile[data-v-8be27e90]{display:inline-block}.default[data-v-8be27e90]{display:none}.center-nav[data-v-8be27e90]{position:relative!important;top:4px!important;left:4px!important}}@media (max-width:1300px){.product-list[data-v-8be27e90]{grid-template-columns:repeat(3,minmax(240px,1fr))}}@media (max-width:900px){.product-list[data-v-8be27e90]{grid-template-columns:repeat(2,minmax(240px,1fr))}}@media (max-width:620px){.product-list[data-v-8be27e90]{grid-template-columns:1fr}}',""]),t.exports=e},"392b":function(t,e,s){"use strict";s("843c"),s("4d90"),s("5319");var a=s("0831");const r=s("c1df"),{getScrollTarget:i,setScrollPosition:o}=a["a"];var n,c,l={data(){return{prevRoute:null}},beforeRouteEnter(t,e,s){s((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymm:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0),date:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,"0"),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,s){return t?t.toString().replace(new RegExp(e,"g"),s):t},toTimeElapsed(t){return t?r(t).fromNow():""},toHumanDate(t){return t?r(t).format("MMM D, YYYY"):""},toHumanDatetime(t){return t?r(t).format("MMM D, YYYY HH:mm"):""},censorTxt(t){return t?t.substring(0,1).padEnd(t.length,"*"):""},resolveAssetsUrl(t){return t?(t=this.replaceAll(t,/\\/,"/"),"https://api.bake-free.co/"+t):t},showNotif:function(t,e,s=3e3){this.$q.notify({type:t,timeout:s,position:"top",message:e})},calcPrice(t,e){if(e){const s=(t-t*e/100).toFixed(0);return s}return t},isEmpty(t){if("undefined"==typeof t)return!0;if(null==t)return!0;if(0==t.length)return!0;for(let e in t)if(hasOwnProperty.call(t,e))return!1;return!0},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},isDaysAhead(t,e){const s=r(t),a=r().add(e,"days");return s.startOf("day").toDate()-a.startOf("day").toDate()>=0},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},_disableScroll(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(e,t)}},_enableScroll(){window.onscroll=function(){}},scrollToElement(t,e=0){const s=i(t),a=t.offsetTop,r=e;o(s,a,r)}}},d=l,p=s("2877"),u=Object(p["a"])(d,n,c,!1,null,null,null);e["a"]=u.exports},4316:function(t,e,s){"use strict";s("64e9")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="4678"},"4ac2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"mainpage flex flex-start"},[s("div",{staticClass:"navigation",class:{"opaque-nav":t.opaque||t.showDlg},on:{mouseover:function(e){t.opaque=!0},mouseleave:function(e){t.opaque=!1}}},[s("div",[s("ul",{staticClass:"left-nav"},[s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/"}},[s("span",{staticClass:"default"},[t._v("HOME")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"home"}})],1)],1),s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/products/all"}},[s("span",{staticClass:"default"},[t._v("SHOP")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"store"}})],1)],1)])]),s("div",[s("div",{staticClass:"center-nav absolute",staticStyle:{top:"-12px","margin-left":"16px"}},[s("img",{attrs:{src:"/logo.png",width:"132px"}})])]),s("div",[s("ul",{staticClass:"right-nav"},[s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/account"}},[s("span",{staticClass:"default"},[t._v("ACCOUNT")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"account_circle"}})],1)],1),s("li",{staticClass:"ls-sm"},[s("a",{staticClass:"header-link hover-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showSearchDlg(e)}}},[s("span",{staticClass:"default"},[t._v("SEARCH")]),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"search"}})],1)]),s("li",{staticClass:"ls-sm"},[s("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/basket"}},[s("span",{staticClass:"default"},[t._v("BASKET ")]),t.itemsCount?s("span",{staticClass:"default"},[t._v("("+t._s(t.itemsCount)+")")]):t._e(),s("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"shopping_basket"}})],1)],1)])]),s("q-dialog",{attrs:{"full-width":"",position:"top","content-class":"nav-search",square:"",maximized:"","transition-show":"fade","transition-hide":"fade"},model:{value:t.showDlg,callback:function(e){t.showDlg=e},expression:"showDlg"}},[s("div",{staticClass:"bg-secondary block"},[s("q-form",{attrs:{autofocus:""}},[s("q-input",{staticClass:"q-pa-lg text-h5",attrs:{"input-class":"ls-sm",type:"text",spellcheck:"false",placeholder:"SEARCH...",debounce:400},on:{input:t.searchProducts},scopedSlots:t._u([{key:"before",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[t.search?s("q-btn",{staticClass:"no-hover-bg",attrs:{flat:"",ripple:!1,icon:"clear"},on:{click:t.clearSearch}}):t._e()]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.search&&!t.fetching?s("div",{staticClass:"search-results q-px-lg q-py-sm text-grey-8"},[s("div",{staticClass:"section-label text-uppercase ls-sm"},[t._v("\n              Products\n            ")]),s("p",[t._v(t._s(t.searchRes))]),s("div",{staticClass:"sproduct-list q-mb-lg"},t._l(t.sProducts,(function(e,a){return s("div",{key:"prod-"+a,ref:"prod",refInFor:!0,staticClass:"product-item"},[s("router-link",{attrs:{to:"/buy/"+e.seoname}},[s("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():s("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[s("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                        "+t._s(e.discount[0].percent)+"% OFF\n                      ")])],1)],1)],1),s("div",{staticClass:"q-mt-md text-center cursor-pointer product-title"},[s("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])],1),s("div",{staticClass:"ls-sm q-mt-sm text-center product-price"},[t.isEmpty(e.options)?t._e():s("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():s("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?s("span",[t._v(t._s(e.baseprice))]):s("span",{staticClass:"text-primary"},[t._v("\n                    "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n                  ")]),t._v("\n                  PHP\n                ")])],1)})),0)]):t._e()],1)],1)])],1),s("q-drawer",{attrs:{"content-class":"similar-orders bg-secondary",side:"right",overlay:"",elevated:""},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[s("div",{staticClass:"filter-drawer"},[s("div",{staticClass:"filter-title q-pa-md"},[s("span",{staticClass:"text-h6 ls-sm text-primary"},[t._v("\n          FILTERS\n        ")]),s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close",size:"sm"},on:{click:function(e){t.filter=!t.filter}}})],1),s("div",{staticClass:"filter-selection flex column"},[s("div",{staticClass:"text-primary ls-sm"},[t._v("CATEGORY")]),s("ul",{staticClass:"q-mt-md"},[s("li",[s("router-link",{staticClass:"hover-primary text-capitalize",class:{"text-primary":"all"==t.$route.params.category},attrs:{to:"/products/all"}},[t._v("\n              All\n            ")])],1),t._l(t.categoryList,(function(e,a){return s("li",{key:"cat-"+a},[s("router-link",{staticClass:"hover-primary text-capitalize",class:{"text-primary":t.$route.params.category==e.path},attrs:{to:"/products/"+e.path}},[t._v("\n              "+t._s(e.name)+"\n            ")])],1)}))],2)])])]),s("div",{staticClass:"header-banner flex"},[s("div",{ref:"img-wrapper",staticClass:"img-wrapper",style:t.categoryBG?"background-image:url('"+t.resolveAssetsUrl(""+t.categoryBG)+"')":""}),s("div",{staticClass:"caption"},[s("h4",{staticClass:"text-accent ls-sm text-uppercase"},[t._v(t._s(t.selectedCategory))])])]),s("div",{staticClass:"content-main"},[s("div",{staticClass:"nav-toolbar row no-wrap justify-end"},[s("div",{staticClass:"nav-btn flex-center ls-sm text-grey-8 cursor-pointer"},[t._v("\n        SORT "),s("q-icon",{attrs:{name:"keyboard_arrow_down",size:"sm",color:"grey-8"}}),s("q-menu",{attrs:{fit:"","content-class":"bg-secondary text-grey-8","auto-close":""}},[s("q-list",{staticStyle:{"min-width":"210px"}},[s("q-item",{staticClass:"sort-item ls-sm",class:{"text-primary":"best-selling"==t.$route.query.sort},attrs:{clickable:""},on:{click:function(e){return t.onSort("best-selling")}}},[s("q-item-section",[t._v("BEST SELLING")])],1),s("q-item",{staticClass:"sort-item ls-sm",class:{"text-primary":"title-asc"==t.$route.query.sort},attrs:{clickable:""},on:{click:function(e){return t.onSort("title-asc")}}},[s("q-item-section",[t._v("ALPHABETICALLY, A-Z")])],1),s("q-item",{staticClass:"sort-item ls-sm",class:{"text-primary":"title-desc"==t.$route.query.sort},attrs:{clickable:""},on:{click:function(e){return t.onSort("title-desc")}}},[s("q-item-section",[t._v("ALPHABETICALLY, Z-A")])],1),s("q-item",{staticClass:"sort-item ls-sm",class:{"text-primary":"date-desc"==t.$route.query.sort},attrs:{clickable:""},on:{click:function(e){return t.onSort("date-desc")}}},[s("q-item-section",[t._v("DATE, NEWEST FIRST")])],1),s("q-item",{staticClass:"sort-item ls-sm",class:{"text-primary":"date-asc"==t.$route.query.sort},attrs:{clickable:""},on:{click:function(e){return t.onSort("date-asc")}}},[s("q-item-section",[t._v("DATE, OLDEST FIRST")])],1),s("q-item",{staticClass:"sort-item ls-sm",class:{"text-primary":"price-desc"==t.$route.query.sort},attrs:{clickable:""},on:{click:function(e){return t.onSort("price-desc")}}},[s("q-item-section",[t._v("PRICE, HIGHEST FIRST")])],1),s("q-item",{staticClass:"sort-item ls-sm",class:{"text-primary":"price-asc"==t.$route.query.sort},attrs:{clickable:""},on:{click:function(e){return t.onSort("price-asc")}}},[s("q-item-section",[t._v("PRICE, LOWEST FIRST")])],1)],1)],1)],1),s("div",{staticClass:"nav-btn filter-btn flex-center ls-sm text-grey-8 cursor-pointer",on:{click:function(e){t.filter=!t.filter}}},[t._v("\n        FILTER\n      ")])]),s("div",{staticClass:"products"},[s("div",{staticClass:"filter"},[s("div",{staticClass:"sticky"},[s("div",{staticClass:"text-primary ls-sm"},[t._v("CATEGORY")]),s("ul",{staticClass:"q-mt-md"},[s("li",[s("router-link",{staticClass:"hover-primary text-capitalize",class:{"text-primary":"all"==t.$route.params.category},attrs:{to:"/products/all"}},[t._v("\n                All\n              ")])],1),t._l(t.categoryList,(function(e,a){return s("li",{key:"cat-"+a},[s("router-link",{staticClass:"hover-primary text-capitalize",class:{"text-primary":t.$route.params.category==e.path},attrs:{to:"/products/"+e.path}},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)}))],2)])]),s("q-infinite-scroll",{ref:"infscroll",staticStyle:{width:"100%",margin:"0 40px"},attrs:{offset:t.offset,debounce:200},on:{load:t.onLoadProducts},scopedSlots:t._u([{key:"loading",fn:function(){return[s("div",{staticClass:"row justify-center q-mt-xl"},[s("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}])},[s("div",{ref:"prodlist",staticClass:"product-list"},[s("q-resize-observer",{attrs:{debounce:200},on:{resize:t.onResize}}),t.isEmpty(t.productList)?s("p",{staticClass:"text-h6 text-grey-8"},[t._v("\n            No products found.\n          ")]):t._e(),t._l(t.productList,(function(e,a){return s("div",{key:"prod-"+a,ref:"prod",refInFor:!0,staticClass:"product-item"},[s("router-link",{attrs:{to:"/buy/"+e.seoname}},[s("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():s("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[s("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                    "+t._s(e.discount[0].percent)+"% OFF\n                  ")])],1)],1)],1),s("div",{staticClass:"q-mt-md text-center cursor-pointer"},[s("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n                "+t._s(e.name)+"\n              ")])],1),s("div",{staticClass:"ls-sm q-mt-sm text-center"},[t.isEmpty(e.options)?t._e():s("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():s("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?s("span",[t._v(t._s(e.baseprice))]):s("span",{staticClass:"text-primary"},[t._v("\n                "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n              ")]),t._v("\n              PHP\n            ")])],1)}))],2)])],1)])],1)},r=[],i=(s("4e82"),s("e6cf"),s("5319"),s("ded3")),o=s.n(i),n=s("2f62"),c=s("392b"),l={name:"Gallery",mixins:[c["a"]],meta(){return{title:this.selectedCategory||"All Products"}},preFetch({store:t,redirect:e,currentRoute:s,previousRoute:a}){if(a&&s.path==a.path)return;const r=s.params.category,i=s.query.sort;return t.dispatch("gallery/getGalleryItems",{category:r?r.toLowerCase():"all",sort:i}).catch((t=>{e("/error500")}))},computed:o()(o()({},Object(n["c"])("gallery",["productList","categoryList","searchResults"])),{},{itemsCount(){return this.$store.getters["basket/itemsCount"]||"0"},selectedCategory(){let t="All Products";if(this.$route.params.category){const e=this.$route.params.category.toLowerCase(),s=this.isEmpty(this.categoryList)?"":this.categoryList.find((t=>t.path==e));t=s?s.name:t}return t},categoryBG(){let t="";if(!this.isEmpty(this.productList)){let e=this.productList.find((t=>!!t.image));t=e?e.image:t}return t},sProducts(){return this.searchResults}}),created(){},mounted(){},watch:{$route(t,e){t.path!==e.path&&(this.finished=!1)}},data(){return{offset:250,filter:!1,opaque:!1,finished:!1,showDlg:!1,search:"",searchRes:"",fetching:!1}},methods:o()(o()({},Object(n["b"])("gallery",["getProducts","getNextProducts","pushProducts"])),{},{onResize(t){if(this.$refs.prod&&this.$refs.prod.length>0){let t=this.$refs.prod[0].offsetHeight,e=this.$refs.prod[0].offsetWidth;this.offset=e>0?2*t+e:250}},changeSorting(t){let e=Object.assign({},this.$route.query,{sort:t});t||delete e.filter,this.$router.replace({query:e}).catch((t=>{}))},async onSort(t){try{this.changeSorting(t);let e=this.$route.params.category;e=e?e.toLowerCase():"all",await this.getProducts({category:e,sort:t}),this.finished=!1}catch(e){}},async onLoadProducts(t,e){if(this.finished||this.isEmpty(this.productList)||this.productList.length<12||this.productList.length%12>0)e();else try{let t=this.$route.params.category,s=this.$route.query.sort;const a=await this.getNextProducts({category:t?t.toLowerCase():"all",sort:s||null});if(this.isEmpty(a))return this.finished=!0,void e();a.length<12&&(this.finished=!0),this._disableScroll(),this.pushProducts(a),setTimeout((()=>{this._enableScroll()}),100)}catch(s){}finally{e()}},clearSearch(){this.searchRes=this.search=""},showSearchDlg(){this.showDlg=!0},async searchProducts(t){try{this.searchRes="",this.fetching=!0;const t=await this.$store.dispatch("gallery/searchProducts",{search:this.search});t||(this.searchRes="No items found.")}catch(e){this.searchRes=e+"Error occurred while searching for products."}finally{this.fetching=!1}}})},d=l,p=(s("4316"),s("2877")),u=s("9989"),m=s("9c40"),f=s("24e8"),b=s("0378"),h=s("27f9"),g=s("0016"),v=s("068f"),y=s("05c0"),x=s("9404"),j=s("4e73"),w=s("1c1c"),k=s("66e5"),C=s("4074"),_=s("ef35"),q=s("3980"),S=s("8380"),z=s("eebe"),D=s.n(z),E=Object(p["a"])(d,a,r,!1,null,"8be27e90",null);e["default"]=E.exports;D()(E,"components",{QPage:u["a"],QBtn:m["a"],QDialog:f["a"],QForm:b["a"],QInput:h["a"],QIcon:g["a"],QImg:v["a"],QTooltip:y["a"],QDrawer:x["a"],QMenu:j["a"],QList:w["a"],QItem:k["a"],QItemSection:C["a"],QInfiniteScroll:_["a"],QResizeObserver:q["a"],QSpinnerDots:S["a"]})},"64e9":function(t,e,s){var a=s("08f2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=s("499e").default;r("aaf05c10",a,!0,{sourceMap:!1})}}]);