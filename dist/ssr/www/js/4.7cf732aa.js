(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1a71":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,'.mainpage>div[data-v-4cc10aca]{width:100%}.navigation[data-v-4cc10aca]{height:106px;display:flex;justify-content:space-between;align-items:center;color:#eeebe3;transition:background 0.5s ease-out,color 0.25s ease-out}.navigation div[data-v-4cc10aca]{flex:0 1 auto}.left-nav[data-v-4cc10aca]{margin-left:24px}.right-nav[data-v-4cc10aca]{margin-right:24px}.left-nav li[data-v-4cc10aca],.right-nav li[data-v-4cc10aca]{font-size:14px;margin:0 14px;display:inline-block;flex-grow:0;flex-basis:240px}.opaque-nav[data-v-4cc10aca]{box-shadow:0 0.1rem #eecfc8;background:#f1ebdd;color:#1d1d1d}.grid[data-v-4cc10aca]{display:grid;padding:50px;grid-template-columns:repeat(3,minmax(320px,400px));grid-template-areas:"gallery gallery oform" "info info oform";grid-gap:50px;justify-content:center}.grid .gallery[data-v-4cc10aca]{grid-area:gallery;min-height:480px}.grid .info[data-v-4cc10aca]{grid-area:info;border-top:1px solid rgba(0,0,0,0.12)}.grid .info .detail li span[data-v-4cc10aca]{font-family:Source Sans Pro!important}.grid .oform[data-v-4cc10aca]{grid-area:oform}.gallery .prev-action[data-v-4cc10aca]{left:4px}.gallery .next-action[data-v-4cc10aca],.gallery .prev-action[data-v-4cc10aca]{position:absolute;top:50%;margin-top:-16px;cursor:pointer}.gallery .next-action[data-v-4cc10aca]{right:4px}.gallery .thumbnails .thumb-selected[data-v-4cc10aca]{border:1px solid #ee3230}.oform .description[data-v-4cc10aca]{font-family:Source Sans Pro!important;text-align:justify}.comments[data-v-4cc10aca],.related[data-v-4cc10aca]{padding:50px 0;display:flex;align-items:center;justify-content:center;flex-direction:column;border-top:1px solid rgba(0,0,0,0.12)}.comments .content[data-v-4cc10aca],.related .content[data-v-4cc10aca]{font-size:16px;width:100%;padding:20px}.comments .content[data-v-4cc10aca]{display:flex;align-items:flex-start;width:100%;padding:0 40px}.comments .content .comments-list[data-v-4cc10aca]{width:50%}.comments .content .comments-list *[data-v-4cc10aca]{font-family:Source Sans Pro!important;line-height:1.5em!important}.comments .content .comments-list .level-1[data-v-4cc10aca]{max-width:720px}.comments .content .comments-list .level-2[data-v-4cc10aca]{max-width:720px;padding-left:60px}.comments .content .comments-list .author[data-v-4cc10aca]{font-size:16px;font-weight:700}.comments .content .comment-form[data-v-4cc10aca]{width:50%;max-width:720px}.product-list[data-v-4cc10aca]{margin-left:40px;margin-right:40px;display:grid;grid-gap:40px;grid-template-columns:repeat(4,minmax(300px,1fr))}.product-list .product-item .product-img[data-v-4cc10aca]{width:100%;max-width:100%;transition:transform 0.25s ease-out}.product-list .product-item .product-img[data-v-4cc10aca]:hover{transform:translate(2px,2px)}@media (max-width:1390px){.product-list[data-v-4cc10aca]{margin-left:40px;margin-right:40px;grid-template-columns:repeat(2,minmax(300px,1fr))}}@media (max-width:1110px){.grid[data-v-4cc10aca]{grid-template-columns:1fr;grid-template-areas:"gallery" "oform" "info"}.comments .content[data-v-4cc10aca]{flex-direction:row;flex-wrap:wrap-reverse;justify-content:center}.comments .content .comment-form[data-v-4cc10aca],.comments .content .comments-list[data-v-4cc10aca]{flex:1 0 640px}}@media (max-width:760px){.product-list[data-v-4cc10aca]{margin-left:40px;margin-right:40px;justify-content:center;grid-template-columns:0.8fr}}',""]),t.exports=e},3414:function(t,e,a){var s=a("1a71");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("de0df178",s,!0,{sourceMap:!1})},"392b":function(t,e,a){"use strict";a("843c"),a("4d90"),a("5319");var s=a("0831");const i=a("c1df"),{getScrollTarget:r,setScrollPosition:o}=s["a"];var n,c,l={data(){return{prevRoute:null}},beforeRouteEnter(t,e,a){a((t=>{t.prevRoute=e}))},computed:{today(){const t=new Date,e={month:t.toLocaleDateString("en-US",{month:"long"}),year:t.getFullYear(),dayOfMonth:t.getDate(),dayOfWeek:t.getDay(),human:t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"}),iso:t.toISOString(),yyyymm:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0),date:t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,"0"),yyyymmdd:t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,0)+"-"+t.getDate().toString().padStart(2,"0")};return e},startDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth(),1)},lastDayOfMonth(){const t=new Date;return new Date(t.getFullYear(),t.getMonth()+1,0)}},methods:{replaceAll:function(t,e,a){return t?t.toString().replace(new RegExp(e,"g"),a):t},toTimeElapsed(t){return t?i(t).fromNow():""},toHumanDate(t){return t?i(t).format("MMM D, YYYY"):""},toHumanDatetime(t){return t?i(t).format("MMM D, YYYY HH:mm"):""},censorTxt(t){return t?t.substring(0,1).padEnd(t.length,"*"):""},resolveAssetsUrl(t){return t?(t=this.replaceAll(t,/\\/,"/"),"https://api.bake-free.co/"+t):t},showNotif:function(t,e,a=3e3){this.$q.notify({type:t,timeout:a,position:"top",message:e})},calcPrice(t,e){if(e){const a=(t-t*e/100).toFixed(0);return a}return t},isEmpty(t){if("undefined"==typeof t)return!0;if(null==t)return!0;if(0==t.length)return!0;for(let e in t)if(hasOwnProperty.call(t,e))return!1;return!0},findMaxDt:function(t,e){return new Date(Math.max(new Date(t),new Date(e)))},findMinDt:function(t,e){return new Date(Math.min(new Date(t),new Date(e)))},isDaysAhead(t,e){const a=i(t),s=i().add(e,"days");return a.startOf("day").toDate()-s.startOf("day").toDate()>=0},toQDateFormat:function(t){return t?t.getFullYear()+"/"+(t.getMonth()+1).toString().padStart(2,0)+"/"+t.getDate().toString().padStart(2,0):t},_disableScroll(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(e,t)}},_enableScroll(){window.onscroll=function(){}},scrollToElement(t,e=0){const a=r(t),s=t.offsetTop,i=e;o(a,s,i)}}},d=l,p=a("2877"),m=Object(p["a"])(d,n,c,!1,null,null,null);e["a"]=m.exports},"40f1":function(t,e,a){"use strict";a("6d73")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="4678"},"4dbf":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,'.navigation[data-v-294ab895]{height:106px;display:flex;justify-content:space-between;align-items:center;color:#eeebe3;transition:background 0.5s ease-out,color 0.25s ease-out}.navigation div[data-v-294ab895]{flex:0 1 auto}.left-nav[data-v-294ab895]{margin-left:24px}.right-nav[data-v-294ab895]{margin-right:24px}.left-nav li[data-v-294ab895],.right-nav li[data-v-294ab895]{font-size:14px;margin:0 14px;display:inline-block;flex-grow:0;flex-basis:240px}.mobile[data-v-294ab895]{display:none}.opaque-nav[data-v-294ab895]{box-shadow:0 0.1rem #eecfc8;background:#f1ebdd;color:#1d1d1d}.search-results[data-v-294ab895]{font-size:16px}.search-results .section-label[data-v-294ab895]{line-height:2.5em;width:100%;border-bottom:1px solid #cfcac2;margin:0 0 40px}.sproduct-list[data-v-294ab895]{width:100%;display:grid;grid-gap:40px;justify-content:space-evenly;grid-template-columns:repeat(4,minmax(110px,380px))}.sproduct-list .product-item .product-img[data-v-294ab895]{width:100%;max-width:100%;transition:transform 0.25s ease-out}.sproduct-list .product-item .product-img[data-v-294ab895]:hover{transform:translate(2px,2px)}.sproduct-list .product-item .product-title[data-v-294ab895]{overflow:hidden}@media (max-width:640px){.search-results[data-v-294ab895]{padding-top:0}.sproduct-list[data-v-294ab895]{grid-template-columns:1fr;grid-gap:20px}.sproduct-list .product-item[data-v-294ab895]{display:grid;grid-template-columns:70px 1fr;grid-template-rows:37px;grid-template-areas:"product-img product-title" "product-img product-price";column-gap:40px}.sproduct-list .product-item .product-img[data-v-294ab895]{grid-area:product-img}.sproduct-list .product-item .product-title[data-v-294ab895]{text-align:left;margin-top:2px;white-space:nowrap;overflow:hidden;grid-area:product-title}.sproduct-list .product-item .product-price[data-v-294ab895]{text-align:left;margin-top:2px;grid-area:product-price}}@media (max-width:1220px){.left-nav[data-v-294ab895]{margin-left:8px}.right-nav[data-v-294ab895]{margin-right:8px}.left-nav li[data-v-294ab895],.right-nav li[data-v-294ab895]{margin:0}.mobile[data-v-294ab895]{display:inline-block}.default[data-v-294ab895]{display:none}.center-nav[data-v-294ab895]{position:relative!important;top:4px!important;left:4px!important}}',""]),t.exports=e},"6d73":function(t,e,a){var s=a("4dbf");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("69050ad9",s,!0,{sourceMap:!1})},a912:function(t,e,a){"use strict";a("3414")},bf71:function(t,e,a){var s=a("dd0b");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("499e").default;i("5872c1a2",s,!0,{sourceMap:!1})},c964:function(t,e,a){"use strict";a("bf71")},dd0b:function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".message,.message *{font-size:15px}.message *{font-family:Source Sans Pro!important}",""]),t.exports=e},ec11:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"mainpage"},[a("Navigation",t._b({},"Navigation",{opaque:!0},!1)),a("div",{staticClass:"grid"},[a("div",{staticClass:"gallery"},[a("div",{staticClass:"selected-wrapper"},[a("q-img",{staticStyle:{"max-height":"65vh"},attrs:{"native-context-menu":"",src:t.selected?t.resolveAssetsUrl(t.selected):"https://dummyimage.com/800x600/454345/fafafa.png&text=No+Img","spinner-color":"primary"}},[t.isEmpty(t.product.discount)?t._e():a("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n              "+t._s(t.product.discount[0].percent)+"% OFF\n            ")])],1),!t.isEmpty(t.product.images)&&t.product.images.length>1?a("q-icon",{staticClass:"prev-action all-pointer-events",attrs:{size:"32px",name:"keyboard_arrow_left",color:"primary"},on:{click:t.onPrevImg}}):t._e(),!t.isEmpty(t.product.images)&&t.product.images.length>1?a("q-icon",{staticClass:"next-action all-pointer-events",attrs:{size:"32px",name:"keyboard_arrow_right",color:"primary"},on:{click:t.onNextImg}}):t._e()],1)],1),a("div",{staticClass:"thumbnails text-center"},t._l(t.product.images,(function(e,s){return a("q-img",{key:"thumb-"+s,staticClass:"q-ma-sm cursor-pointer",class:{"thumb-selected":t.selected==e.image},attrs:{src:t.resolveAssetsUrl(e.image),"spinner-color":"primary",width:"70px"},on:{click:function(a){t.selected=e.image}}})})),1)]),a("div",{staticClass:"info"},[a("q-list",t._l(t.product.details,(function(e,s){return a("div",{key:"detail-"+s},[a("q-expansion-item",{attrs:{label:e.group,"header-class":"no-hover text-primary ls-sm text-uppercase q-py-lg","expand-icon-class":"text-primary"}},[a("ul",{staticClass:"detail bg-secondary q-px-md q-pb-lg text-grey-8"},t._l(e.items,(function(e,i){return a("li",{key:"item-"+s+i,staticClass:"q-mb-md"},[a("span",{staticClass:"text-uppercase ls-sm text-weight-bolder"},[t._v("\n                  "+t._s(i)+"\n                ")]),a("br"),a("span",{staticClass:"text-capitalize"},[t._v(t._s(e))])])})),0)]),a("q-separator")],1)})),0)],1),a("div",{staticClass:"oform"},[a("h5",{staticClass:"text-primary ls-sm text-capitalize"},[t._v(t._s(t.product.name))]),a("p",{staticClass:"text-weight-bold text-grey-8 ls-sm text-capitalize"},[t._v("\n        "+t._s(t.product.category.name)+"\n      ")]),a("h6",{staticClass:"text-grey-8 ls-sm"},[t.isEmpty(t.product.discount)?t._e():a("span",{staticClass:"text-strike"},[t._v(t._s(t.baseprice))]),t.isEmpty(t.product.discount)?a("span",[t._v(t._s(t.baseprice))]):a("span",{staticClass:"text-primary"},[t._v("\n          "+t._s(t.price)+"\n        ")]),t._v("\n        PHP\n      ")]),a("q-form",{ref:"order-form",staticClass:"order-form q-mt-md",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onAdd(e)}}},[a("span",{staticClass:"text-grey-8"},[t._v("Qty (Min: "+t._s(t.product.minOrderQty)+"):")]),a("q-input",{staticClass:"q-mb-md",staticStyle:{"max-width":"140px"},attrs:{outlined:"",dense:"","input-style":"text-align:center;"},on:{input:t.onChgQty},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"remove"},on:{click:function(e){return t.onChgQty(t.order.quantity-1)}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"add"},on:{click:function(e){t.onChgQty(Number.parseInt(t.order.quantity)+1)}}})]},proxy:!0}]),model:{value:t.order.quantity,callback:function(e){t.$set(t.order,"quantity",e)},expression:"order.quantity"}}),t._l(t.product.options,(function(e,s){return a("div",{key:"opt-"+s},[a("span",{staticClass:"text-grey-8"},[t._v(t._s(e.attribute)+":")]),a("q-select",{attrs:{"popup-content-class":"bg-secondary",outlined:"",dense:"",options:t.toSelOptions(e.attribute,e.choices),"lazy-rules":"",rules:[function(t){return!!t}]},on:{input:function(e){return t.onSelOption(s)}},model:{value:t.order.options[s],callback:function(e){t.$set(t.order.options,s,e)},expression:"order.options[idx]"}}),t.isOtherSelected(t.order.options[s])?a("q-input",{attrs:{dense:"",outlined:"",placeholder:"Please specify","lazy-rules":"",rules:[function(t){return!!t}]},model:{value:t.order.otherVal[s],callback:function(e){t.$set(t.order.otherVal,s,e)},expression:"order.otherVal[idx]"}}):t._e()],1)})),a("q-btn",{attrs:{unelevated:"",type:"submit",color:"red-6 ls-sm",size:"16px",padding:"sm lg",label:"Add to Basket",loading:t.loadingAdd}})],2),a("div",{staticClass:"description q-mt-lg text-grey-8 text-subtitle1"},[a("h6",[t._v("About this product:")]),t._v("\n        "+t._s(t.product.description)+"\n        "),t.product.sold?a("p",[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"redeem"}}),t._v(t._s(t.product.sold)+" sold\n        ")],1):t._e()])],1)]),a("div",{staticClass:"comments"},[a("h5",{staticClass:"ls-sm text-primary"},[t._v("COMMENTS")]),a("div",{staticClass:"content text-grey-8 flex",class:{"justify-center":t.isEmpty(t.comments)}},[t.isEmpty(t.comments)?t._e():a("div",{staticClass:"comments-list"},[a("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(t.comments,(function(e){return a("div",{key:e.id},[a("q-item",{staticClass:"q-mt-xl q-mr-xl level-1",staticStyle:{"margin-left":"auto"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n                  "+t._s(e.author.substring(0,1))+"\n                ")])],1),a("q-item-section",[a("q-item-label",{staticClass:"author"},[t._v("\n                  "+t._s(e.isFlagged?t.censorTxt(e.author):e.author)+"\n                ")]),a("q-item-label",{staticClass:"message",class:{"text-negative":e.isFlagged},domProps:{innerHTML:t._s(t.$sanitize(e.comment))}})],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{staticClass:"message"},[t._v("\n                  "+t._s(t.toTimeElapsed(e.created))+"\n                ")])],1)],1),e.reply?a("q-item",{staticClass:"q-mt-md q-mr-xl level-2",staticStyle:{"margin-left":"auto"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n                  "+t._s(e.replyAuthor.substring(0,1))+"\n                ")])],1),a("q-item-section",[a("q-item-label",{staticClass:"author"},[t._v("\n                  "+t._s(e.replyAuthor)+"\n                  "),a("span",{staticClass:"text-weight-light text-caption"},[t._v("(Support)")])]),a("q-item-label",{staticClass:"message",domProps:{innerHTML:t._s(t.$sanitize(e.reply))}})],1),a("q-item-section",{attrs:{side:"",top:""}},[e.replied?a("q-item-label",{staticClass:"message"},[t._v("\n                  "+t._s(t.toTimeElapsed(e.replied))+"\n                ")]):t._e()],1)],1):t._e()],1)})),0)],1),a("q-form",{ref:"comment-form",staticClass:"comment-form q-mt-lg",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.onPost(e)}}},[a("q-editor",{ref:"qTxtEditor",staticClass:"q-my-lg comment-editor",attrs:{"min-height":"240px","content-class":"text-grey-8 text-comment","toolbar-toggle-color":"yellow-8",toolbar:[["bold","italic"],["undo","redo"]]},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),a("q-btn",{attrs:{loading:t.loading,disable:t.loading,unelevated:"",type:"submit",color:"red-6 ls-sm",size:"16px",padding:"sm lg",label:"Post"}})],1)],1)]),a("div",{staticClass:"related"},[a("h5",{staticClass:"ls-sm text-primary"},[t._v("RELATED ITEMS")]),a("div",{staticClass:"content"},[a("div",{staticClass:"product-list"},t._l(t.related,(function(e,s){return a("div",{key:"prod-"+s,staticClass:"product-item"},[a("router-link",{attrs:{to:"/buy/"+e.seoname}},[a("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():a("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                  "+t._s(e.discount[0].percent)+"% OFF\n                ")])],1)],1)],1),a("div",{staticClass:"q-mt-md text-center cursor-pointer"},[a("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n              "+t._s(e.name)+"\n            ")])],1),a("div",{staticClass:"ls-sm q-mt-sm text-center"},[t.isEmpty(e.options)?t._e():a("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():a("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?a("span",[t._v(t._s(e.baseprice))]):a("span",{staticClass:"text-primary"},[t._v("\n              "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n            ")]),t._v("\n            PHP\n          ")])],1)})),0)])])],1)},i=[],r=(a("e01a"),a("13d5"),a("fb6a"),a("e6cf"),a("5319"),a("498a"),a("ded3")),o=a.n(r),n=a("392b"),c=a("f4dd"),l=a("2f62"),d={name:"Product",mixins:[n["a"]],components:{Navigation:c["a"]},meta(){return{title:this.product.name||"Product",meta:{description:{name:"description",content:this.product.description||"Product Description"}}}},preFetch({store:t,redirect:e,currentRoute:a}){const s=a.params.seoname;return t.dispatch("buy/getProductDetails",{seoname:s}).catch((t=>{404==t.response.status?e("/error404"):e("/error500")}))},watch:{$route(t,e){t.path!==e.path&&(this.selected="",this.initSelection(),this.getRelatedProducts(4))}},computed:o()(o()({},Object(l["c"])("buy",["product","related","comments"])),{},{price(){const t=(t,e)=>t+e.value.price;let e=this.order.quantity*this.order.options.reduce(t,this.product.baseprice);return this.isEmpty(this.product.discount)?e:this.calcPrice(e,this.product.discount[0].percent)},baseprice(){const t=(t,e)=>t+e.value.price;return this.order.quantity*this.order.options.reduce(t,this.product.baseprice)}}),created(){this.initSelection()},mounted(){this.getRelatedProducts(4)},data(){return{loading:!1,loadingAdd:!1,title:"",selected:"",filter:!1,opaque:!1,order:{quantity:0,options:[],otherVal:[]},comment:""}},methods:o()(o()(o()({},Object(l["b"])("buy",["findRelatedProducts","postComment"])),Object(l["b"])("basket",["addToCart"])),{},{_isContentEmpty(t){return!t||(t=this.replaceAll(t,"&nbsp;",""),t=this.replaceAll(t," ",""),t=t.replace(/(<([^>]+)>)/gi,"").trim(),0==t.length)},_findSelected(){let t=this.product.images.slice();return t.findIndex((t=>this.selected===t.image))},initSelection(){this.title=this.product.name,this.order.quantity=this.product.minOrderQty,this.order.options=[],this.isEmpty(this.product.options)||this.product.options.forEach(((t,e)=>{const a=t.choices.slice(-1).pop();let s=a.price>0?` (+${a.price} PHP)`:a.price<0?` (${a.price} PHP)`:"";this.order.options[e]={label:a.value+s,value:a,key:t.attribute}})),this.isEmpty(this.product.images)||(this.selected=this.product.images[0].image)},toSelOptions(t,e){return e?e.map((e=>{let a=e.price>0?` (+${e.price} PHP)`:e.price<0?` (${e.price} PHP)`:"";return{label:e.value+a,value:e,key:t}})):e},onChgQty(t){if(this.product.minOrderQty<=t&&t<=100)return this.order.quantity=t,!0;this.order.quantity=this.product.minOrderQty},onSelOption(t){},isOtherSelected(t){return!(!t||!t.value)&&"Other"==t.value.value},onNextImg(t){let e=this._findSelected()+1,a=this.product.images.slice();e>a.length-1&&(e=0),this.selected=a[e].image},onPrevImg(t){let e=this._findSelected()-1,a=this.product.images.slice();e<0&&(e=a.length-1),this.selected=a[e].image},getRelatedProducts(t=4){this.product&&this.findRelatedProducts({pID:this.product.id,limit:t})},onPost:async function(t){if(this.loading=!0,this._isContentEmpty(this.comment))this.$refs.qTxtEditor.focus(),this.loading=!1;else try{await this.postComment({comment:this.comment,product:this.product.id}),this.comment="",this.showNotif("info","Your comment has been posted.")}catch(e){this.showNotif("negative",e)}finally{this.loading=!1}},onAdd:async function(t){this.loadingAdd=!0;try{let t={product:this.product.id,quantity:this.order.quantity,options:this.order.options.map(((t,e)=>({_option:t.key,_selected:t.value.value,otherValue:"Other"==t.value.value?this.order.otherVal[e]:null})))};await this.addToCart({product:t}),this.showNotif("info","Your cart has been updated.")}catch(e){this.showNotif("negative",e)}finally{this.loadingAdd=!1}}})},p=d,m=(a("c964"),a("a912"),a("2877")),u=a("9989"),f=a("068f"),g=a("0016"),h=a("05c0"),b=a("1c1c"),v=a("3b73"),x=a("eb85"),y=a("0378"),j=a("27f9"),_=a("ddd8"),C=a("9c40"),w=a("66e5"),q=a("4074"),k=a("cb32"),S=a("0170"),P=a("d66b"),E=a("eebe"),D=a.n(E),z=Object(m["a"])(p,s,i,!1,null,"4cc10aca",null);e["default"]=z.exports;D()(z,"components",{QPage:u["a"],QImg:f["a"],QIcon:g["a"],QTooltip:h["a"],QList:b["a"],QExpansionItem:v["a"],QSeparator:x["a"],QForm:y["a"],QInput:j["a"],QSelect:_["a"],QBtn:C["a"],QItem:w["a"],QItemSection:q["a"],QAvatar:k["a"],QItemLabel:S["a"],QEditor:P["a"]})},f4dd:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation",class:{"opaque-nav":t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!!t.opaque}}},[a("div",[a("ul",{staticClass:"left-nav"},[a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/"}},[a("span",{staticClass:"default"},[t._v("HOME")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"home"}})],1)],1),a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/products/all"}},[a("span",{staticClass:"default"},[t._v("SHOP")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"store"}})],1)],1)])]),t._m(0),a("div",[a("ul",{staticClass:"right-nav"},[a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/account"}},[a("span",{staticClass:"default"},[t._v("ACCOUNT")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"account_circle"}})],1)],1),a("li",{staticClass:"ls-sm"},[a("a",{staticClass:"header-link hover-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.showSearchDlg(e)}}},[a("span",{staticClass:"default"},[t._v("SEARCH")]),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"search"}})],1)]),a("li",{staticClass:"ls-sm"},[a("router-link",{staticClass:"header-link hover-primary",attrs:{to:"/basket"}},[a("span",{staticClass:"default"},[t._v("BASKET ")]),t.itemsCount?a("span",{staticClass:"default"},[t._v("("+t._s(t.itemsCount)+")")]):t._e(),a("q-btn",{staticClass:"mobile no-hover-bg",attrs:{flat:"",padding:"sm",ripple:!1,icon:"shopping_basket"}})],1)],1)])]),a("q-dialog",{attrs:{"full-width":"",position:"top","content-class":"nav-search",square:"",maximized:"","transition-show":"fade","transition-hide":"fade"},model:{value:t.showDlg,callback:function(e){t.showDlg=e},expression:"showDlg"}},[a("div",{staticClass:"bg-secondary block"},[a("q-form",{attrs:{autofocus:""}},[a("q-input",{staticClass:"q-pa-lg text-h5",attrs:{"input-class":"ls-sm",type:"text",spellcheck:"false",placeholder:"SEARCH...",debounce:400},on:{input:t.searchProducts},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0},{key:"append",fn:function(){return[t.search?a("q-btn",{staticClass:"no-hover-bg",attrs:{flat:"",ripple:!1,icon:"clear"},on:{click:t.clearSearch}}):t._e()]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.search&&!t.fetching?a("div",{staticClass:"search-results q-px-lg q-py-sm text-grey-8"},[a("div",{staticClass:"section-label text-uppercase ls-sm"},[t._v("\n            Products\n          ")]),a("p",[t._v(t._s(t.searchRes))]),a("div",{staticClass:"sproduct-list q-mb-lg"},t._l(t.sProducts,(function(e,s){return a("div",{key:"prod-"+s,ref:"prod",refInFor:!0,staticClass:"product-item"},[a("router-link",{attrs:{to:"/buy/"+e.seoname}},[a("q-img",{staticClass:"product-img cursor-pointer",attrs:{src:e.image?t.resolveAssetsUrl(e.image):"https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img","native-context-menu":"",ratio:1}},[t.isEmpty(e.discount)?t._e():a("q-icon",{staticClass:"absolute all-pointer-events",staticStyle:{top:"8px",left:"8px"},attrs:{size:"32px",name:"local_offer",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[t._v("\n                      "+t._s(e.discount[0].percent)+"% OFF\n                    ")])],1)],1)],1),a("div",{staticClass:"q-mt-md text-center cursor-pointer product-title"},[a("router-link",{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{to:"/buy/"+e.seoname}},[t._v("\n                  "+t._s(e.name)+"\n                ")])],1),a("div",{staticClass:"ls-sm q-mt-sm text-center product-price"},[t.isEmpty(e.options)?t._e():a("span",[t._v("from ")]),t.isEmpty(e.discount)?t._e():a("span",{staticClass:"text-strike"},[t._v(t._s(e.baseprice))]),t.isEmpty(e.discount)?a("span",[t._v(t._s(e.baseprice))]):a("span",{staticClass:"text-primary"},[t._v("\n                  "+t._s(t.calcPrice(e.baseprice,e.discount[0].percent))+"\n                ")]),t._v("\n                PHP\n              ")])],1)})),0)]):t._e()],1)],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"center-nav absolute",staticStyle:{top:"-12px","margin-left":"16px"}},[a("img",{attrs:{src:"/logo.png",width:"132px"}})])])}],r=(a("e6cf"),a("392b")),o={name:"Navigation",mixins:[r["a"]],props:{opaque:{type:Boolean,required:!0,default:!0}},computed:{sProducts(){return this.$store.getters["gallery/searchResults"]},itemsCount(){return this.$store.getters["basket/itemsCount"]||"0"}},data(){return{hover:this.opaque,showDlg:!1,search:"",searchRes:"",fetching:!1}},methods:{clearSearch(){this.searchRes=this.search=""},showSearchDlg(){this.showDlg=!0},async searchProducts(t){try{this.searchRes="",this.fetching=!0;const t=await this.$store.dispatch("gallery/searchProducts",{search:this.search});t||(this.searchRes="No items found.")}catch(e){this.searchRes=e+"Error occurred while searching for products."}finally{this.fetching=!1}}}},n=o,c=(a("40f1"),a("2877")),l=a("9c40"),d=a("24e8"),p=a("0378"),m=a("27f9"),u=a("0016"),f=a("068f"),g=a("05c0"),h=a("eebe"),b=a.n(h),v=Object(c["a"])(n,s,i,!1,null,"294ab895",null);e["a"]=v.exports;b()(v,"components",{QBtn:l["a"],QDialog:d["a"],QForm:p["a"],QInput:m["a"],QIcon:u["a"],QImg:f["a"],QTooltip:g["a"]})}}]);