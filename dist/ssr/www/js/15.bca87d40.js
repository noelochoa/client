(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"0719":function(t,e,a){var s=a("a448");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=a("499e").default;r("56e207d8",s,!0,{sourceMap:!1})},"392b":function(t,e,a){"use strict";a("843c"),a("4d90"),a("5319");var s=a("0831");const r=a("c1df"),{getScrollTarget:i,setScrollPosition:n}=s["a"];var o,c,l={data(){return{prevRoute:null}},beforeRouteEnter(t,e,a){a((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymm:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0),date:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,"0"),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,a){return t?t.toString().replace(new RegExp(e,"g"),a):t},toTimeElapsed(t){return t?r(t).fromNow():""},toHumanDate(t){return t?r(t).format("MMM D, YYYY"):""},toHumanDatetime(t){return t?r(t).format("MMM D, YYYY HH:mm"):""},censorTxt(t){return t?t.substring(0,1).padEnd(t.length,"*"):""},resolveAssetsUrl(t){return t?(t=this.replaceAll(t,/\\/,"/"),"https://api.bake-free.co/"+t):t},showNotif:function(t,e,a=3e3){this.$q.notify({type:t,timeout:a,position:"top",message:e})},calcPrice(t,e){if(e){const a=(t-t*e/100).toFixed(0);return a}return t},isEmpty(t){if("undefined"==typeof t)return!0;if(null==t)return!0;if(0==t.length)return!0;for(let e in t)if(hasOwnProperty.call(t,e))return!1;return!0},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},isDaysAhead(t,e){const a=r(t),s=r().add(e,"days");return a.startOf("day").toDate()-s.startOf("day").toDate()>=0},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},_disableScroll(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(e,t)}},_enableScroll(){window.onscroll=function(){}},scrollToElement(t,e=0){const a=i(t),s=t.offsetTop,r=e;n(a,s,r)}}},d=l,p=a("2877"),u=Object(p["a"])(d,o,c,!1,null,null,null);e["a"]=u.exports},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="4678"},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"home flex flex-start"},[a("div",{staticClass:"navigation",class:{"opaque-nav":t.opaque||t.showDlg},on:{mouseover:function(e){t.opaque=!0},mouseleave:function(e){t.opaque=!1}}},[a("div",[a("ul",{staticClass:"left-nav"},[a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/"}},[a("span",{staticClass:"default"},[t._v("HOME")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"home"}})],1)],1),a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/products"}},[a("span",{staticClass:"default"},[t._v("SHOP")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"store"}})],1)],1)])]),a("div",[a("div",{staticClass:"center-nav absolute",staticStyle:{top:"-12px","margin-left":"16px"}},[a("img",{attrs:{src:"/logo.png",width:"132px"}})])]),a("div",[a("ul",{staticClass:"right-nav"},[a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/account"}},[a("span",{staticClass:"default"},[t._v("ACCOUNT")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"account_circle"}})],1)],1),a("li",{staticClass:"ls-sm"},[a("a",{staticClass:"header-link hover-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showSearchDlg(e)}}},[a("span",{staticClass:"default"},[t._v("SEARCH")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"search"}})],1)]),a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/basket"}},[a("span",{staticClass:"default"},[t._v("BASKET ")]),t.itemsCount?a("span",{staticClass:"default"},[t._v("("+t._s(t.itemsCount)+")")]):t._e(),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"shopping_basket"}})],1)],1)])]),a("q-dialog",{attrs:{position:"top","content-class":"nav-search",square:"",maximized:"","transition-show":"fade","transition-hide":"fade"},model:{value:t.showDlg,callback:function(e){t.showDlg=e},expression:"showDlg"}},[a("div",{staticClass:"bg-secondary block"},[a("q-form",{attrs:{autofocus:""}},[a("q-input",{staticClass:"q-pa-lg text-h5",attrs:{"input-class":"ls-sm",type:"text",spellcheck:"false",placeholder:"SEARCH...",debounce:400},on:{input:t.searchProducts},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[t.search?a("q-btn",{staticClass:"no-hover-bg",attrs:{flat:"",ripple:!1,icon:"clear"},on:{click:t.clearSearch}}):t._e()]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.search&&!t.fetching?a("div",{staticClass:"search-results q-px-lg q-py-sm text-grey-8"},[a("div",{staticClass:"section-label text-uppercase ls-sm"},[t._v("\n              Products\n            ")]),a("p",[t._v(t._s(t.searchRes))]),a("div",{staticClass:"sproduct-list q-mb-lg"},t._l(t.sProducts,(function(e,s){return a("div",{key:"prod-"+s,ref:"prod",refInFor:!0,staticClass:"product-item"},[a("router-link",{attrs:{to:"/buy/"+e.seoname}},[a("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():a("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                        "+t._s(e.discount[0].percent)+"% OFF\n                      ")])],1)],1)],1),a("div",{staticClass:"q-mt-md text-center cursor-pointer product-title"},[a("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])],1),a("div",{staticClass:"ls-sm q-mt-sm text-center product-price"},[t.isEmpty(e.options)?t._e():a("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():a("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?a("span",[t._v(t._s(e.baseprice))]):a("span",{staticClass:"text-primary"},[t._v("\n                    "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n                  ")]),t._v("\n                  PHP\n                ")])],1)})),0)]):t._e()],1)],1)])],1),a("div",{staticClass:"carousel"},[a("q-carousel",{staticClass:"featured-carousel",attrs:{arrows:"",animated:"",swipeable:"",infinite:"",autoplay:t.autoplay},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.featured,(function(e,s){return a("q-carousel-slide",{key:"slide-"+s,attrs:{name:"slide-"+s,"img-src":e.banner?t.resolveAssetsUrl(e.banner):"https://dummyimage.com/1600x900/454345/fafafa.png&text=No+Banner"}},[a("div",{staticClass:"absolute-bottom custom-caption"},[a("div",{staticClass:"text-h4 ls-sm overflow-ellipsis"},[t._v(t._s(e.name))]),a("div",{staticClass:"text-subtitle1 q-mt-sm"},[t._v(t._s(e.description))]),a("q-btn",{staticClass:"q-mt-md ls-sm",attrs:{unelevated:"",padding:"sm lg",size:"16px",color:"accent","text-color":"dark",label:"View More",to:"/buy/"+e.seoname}})],1)])})),1),a("q-btn",{staticClass:"scroll-btn",attrs:{ripple:!1,icon:"keyboard_arrow_down","text-color":"primary",color:"secondary",round:""},on:{click:function(e){return t.scrollToElement(t.$refs.newitems,700)}}})],1),a("div",{ref:"newitems",staticClass:"newitems"},[a("h5",{staticClass:"ls-sm text-primary"},[t._v("NEW ARRIVALS")]),a("div",{staticClass:"content"},[a("div",{staticClass:"product-list"},t._l(t.newItems,(function(e,s){return a("div",{key:"prod-"+s,staticClass:"product-item"},[a("router-link",{attrs:{to:"/buy/"+e.seoname}},[a("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():a("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                  "+t._s(e.discount[0].percent)+"% OFF\n                ")])],1)],1)],1),a("div",{staticClass:"q-mt-md text-center cursor-pointer"},[a("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n              "+t._s(e.name)+"\n            ")])],1),a("div",{staticClass:"ls-sm q-mt-sm text-center"},[t.isEmpty(e.options)?t._e():a("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():a("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?a("span",[t._v(t._s(e.baseprice))]):a("span",{staticClass:"text-primary"},[t._v("\n              "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n            ")]),t._v("\n            PHP\n          ")])],1)})),0)]),a("q-btn",{staticClass:"q-mt-xl",attrs:{unelevated:"",color:"red-6 ls-sm",size:"16px",padding:"sm lg",label:"View All Products",to:"/products"}})],1)])},r=[],i=(a("e6cf"),a("392b")),n={name:"Home",mixins:[i["a"]],preFetch({store:t,redirect:e}){return t.dispatch("home/getProducts").catch((t=>{e("/error500")}))},computed:{itemsCount(){return this.$store.getters["basket/itemsCount"]||"0"},featured(){return this.$store.getters["home/getFeatured"]},newItems(){return this.$store.getters["home/getNewItems"]},sProducts(){return this.$store.getters["gallery/searchResults"]}},created(){},mounted(){},data(){return{slide:"slide-0",autoplay:!0,opaque:!1,showDlg:!1,search:"",searchRes:"",fetching:!1}},methods:{clearSearch(){this.searchRes=this.search=""},showSearchDlg(){this.showDlg=!0},async searchProducts(t){try{this.searchRes="",this.fetching=!0;const t=await this.$store.dispatch("gallery/searchProducts",{search:this.search});t||(this.searchRes="No items found.")}catch(e){this.searchRes=e+"Error occurred while searching for products."}finally{this.fetching=!1}}}},o=n,c=(a("f2ea"),a("2877")),l=a("9989"),d=a("9c40"),p=a("24e8"),u=a("0378"),m=a("27f9"),f=a("0016"),g=a("068f"),h=a("05c0"),b=a("880c"),v=a("62cd"),j=a("eebe"),x=a.n(j),y=Object(c["a"])(o,s,r,!1,null,"04dca8e4",null);e["default"]=y.exports;x()(y,"components",{QPage:l["a"],QBtn:d["a"],QDialog:p["a"],QForm:u["a"],QInput:m["a"],QIcon:f["a"],QImg:g["a"],QTooltip:h["a"],QCarousel:b["a"],QCarouselSlide:v["a"]})},a448:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,'.home>div[data-v-04dca8e4]{width:100%}.navigation[data-v-04dca8e4]{position:absolute;z-index:999;height:106px;display:flex;justify-content:space-between;align-items:center;color:#eeebe3;transition:background 0.5s ease-out,color 0.25s ease-out}.navigation div[data-v-04dca8e4]{flex:0 1 auto}.left-nav[data-v-04dca8e4]{margin-left:24px}.right-nav[data-v-04dca8e4]{margin-right:24px}.left-nav li[data-v-04dca8e4],.right-nav li[data-v-04dca8e4]{font-size:14px;margin:0 14px;display:inline-block;flex-grow:0;flex-basis:240px}.mobile[data-v-04dca8e4]{display:none}.custom-caption[data-v-04dca8e4]{padding:70px;color:#fff}.opaque-nav[data-v-04dca8e4]{background:#f1ebdd;color:#1d1d1d}.search-results[data-v-04dca8e4]{font-size:16px}.search-results .section-label[data-v-04dca8e4]{line-height:2.5em;width:100%;border-bottom:1px solid #cfcac2;margin:0 0 40px}.newitems[data-v-04dca8e4]{padding:80px 0;display:flex;align-items:center;justify-content:center;flex-direction:column}.newitems .content[data-v-04dca8e4]{font-size:16px;width:100%;padding:20px}.scroll-btn[data-v-04dca8e4]{position:absolute;left:0;right:0;margin:-21px auto;transition:transform 0.25s ease-out}.scroll-btn[data-v-04dca8e4]:hover{transform:scale(1.25)}.product-list[data-v-04dca8e4]{margin-left:40px;margin-right:40px;display:grid;grid-gap:40px;grid-template-columns:repeat(4,minmax(300px,1fr))}.product-list .product-item .product-img[data-v-04dca8e4]{width:100%;max-width:100%;transition:transform 0.25s ease-out}.product-list .product-item .product-img[data-v-04dca8e4]:hover{transform:translate(2px,2px)}.sproduct-list[data-v-04dca8e4]{width:100%;display:grid;grid-gap:40px;justify-content:space-evenly;grid-template-columns:repeat(4,minmax(110px,380px))}.sproduct-list .product-item .product-img[data-v-04dca8e4]{width:100%;max-width:100%;transition:transform 0.25s ease-out}.sproduct-list .product-item .product-img[data-v-04dca8e4]:hover{transform:translate(2px,2px)}.sproduct-list .product-item .product-title[data-v-04dca8e4]{overflow:hidden}.overflow-ellipsis[data-v-04dca8e4]{display:block;max-width:inherit;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width:640px){.search-results[data-v-04dca8e4]{padding-top:0}.sproduct-list[data-v-04dca8e4]{grid-template-columns:1fr;grid-gap:20px}.sproduct-list .product-item[data-v-04dca8e4]{display:grid;grid-template-columns:70px 1fr;grid-template-rows:37px;grid-template-areas:"product-img product-title" "product-img product-price";column-gap:40px}.sproduct-list .product-item .product-img[data-v-04dca8e4]{grid-area:product-img}.sproduct-list .product-item .product-title[data-v-04dca8e4]{text-align:left;margin-top:2px;white-space:nowrap;overflow:hidden;grid-area:product-title}.sproduct-list .product-item .product-price[data-v-04dca8e4]{text-align:left;margin-top:2px;grid-area:product-price}}@media (max-width:1390px){.product-list[data-v-04dca8e4]{margin-left:40px;margin-right:40px;grid-template-columns:repeat(2,minmax(300px,1fr))}}@media (max-width:1220px){.left-nav[data-v-04dca8e4]{margin-left:8px}.right-nav[data-v-04dca8e4]{margin-right:8px}.left-nav li[data-v-04dca8e4],.right-nav li[data-v-04dca8e4]{margin:0}.mobile[data-v-04dca8e4]{display:inline-block}.default[data-v-04dca8e4]{display:none}.center-nav[data-v-04dca8e4]{position:relative!important;top:4px!important;left:4px!important}}@media (max-width:760px){.product-list[data-v-04dca8e4]{margin-left:40px;margin-right:40px;justify-content:center;grid-template-columns:0.8fr}}',""]),t.exports=e},f2ea:function(t,e,a){"use strict";a("0719")}}]);