(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"31b1":function(t,a,e){"use strict";e("5546")},5546:function(t,a,e){var s=e("cd98");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=e("499e").default;r("caeb0998",s,!0,{sourceMap:!1})},"713b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lhh Lpr lff"}},[e("q-header",{attrs:{elevated:""}},[t.psa?e("q-toolbar",{attrs:{id:"psa-bar"}},[e("q-toolbar-title",{staticClass:"text-center header"},[t.psa.link?e("a",{attrs:{href:t.psa.link,target:"_blank"}},[e("h6",{domProps:{innerHTML:t._s(t.psa.message)}})]):e("h6",{domProps:{innerHTML:t._s(t.psa.message)}})])],1):t._e()],1),t.showFooter?e("q-footer",{staticClass:"bg-accent text-grey-8 footer"},[e("div",{staticClass:"footer-content"},[e("div",{staticClass:"footer-inner flex"},[e("div",{staticClass:"about"},[e("h6",{staticClass:"ls-sm text-primary"},[t._v("ABOUT")]),e("p",{staticClass:"q-my-md"},[t._v("\n            This is a collaborative web store project by Lorna's Bakeshop and\n            Lutong Bahay sa Sawali Restaurant (Batangas City).\n          ")])]),e("div",{staticClass:"links"},[e("h6",{staticClass:"ls-sm text-primary"},[t._v("LINKS")]),e("ul",{staticClass:"links q-my-md"},[e("li",{staticClass:"block"},[e("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),e("li",{staticClass:"block"},[e("router-link",{attrs:{to:"/products/all"}},[t._v("PRODUCTS")])],1),e("li",{staticClass:"block"},[e("router-link",{attrs:{to:"/account"}},[t._v("ACCOUNT")])],1),e("li",{staticClass:"block"},[e("router-link",{attrs:{to:"/basket"}},[t._v("CART")])],1)])]),e("div",{staticClass:"sns"},[e("h6",{staticClass:"ls-sm text-primary"},[t._v("FOLLOW US")]),e("ul",{staticClass:"sns-buttons q-my-xs"},[e("li",{staticClass:"facebook inline-block"},[e("a",{staticClass:"button--svg",attrs:{href:"https://www.facebook.com/Lutong-Bahay-Sa-Sawali-Catering-Restaurant-147946615275109/",target:"_blank"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",viewBox:"0 0 46 46",role:"img","aria-labelledby":"facebook-icon"}},[e("title",{attrs:{id:"facebook-icon"}},[t._v("Facebook")]),e("path",{attrs:{fill:"#3C599A",d:"M18.896 20.12h1.758v-1.708c0-.753.02-1.915.566-2.635.576-.762 1.368-1.28 2.73-1.28 2.218 0 3.15.316 3.15.316l-.438 2.605s-.73-.212-1.417-.212c-.684 0-1.296.245-1.296.93v1.985h2.803l-.194 2.547h-2.61v8.84h-3.297v-8.84h-1.758V20.12z"}})])])]),e("li",{staticClass:"instagram inline-block"},[e("a",{attrs:{href:"https://www.instagram.com/explore/locations/590263847/philippines/batangas-city/lutong-bahay-sa-sawali-restaurant/?hl=en",target:"_blank"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",viewBox:"0 0 46 46",role:"img","aria-labelledby":"instagram-icon"}},[e("title",{attrs:{id:"instagram-icon"}},[t._v("Instagram")]),e("path",{attrs:{fill:"#5E6C89",d:"M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z"}})])])])])])]),e("div",{staticClass:"footer-copyright"},[t._v("\n        © 2020 Bake Free "),e("br"),t._v("ALL RIGHTS RESERVED\n      ")])])]):t._e(),e("q-page-container",{staticClass:"bg-secondary"},[e("router-view")],1)],1)},r=[],o=(e("c975"),{name:"MainLayout",preFetch({store:t,redirect:a}){return t.dispatch("home/getPSA").catch((t=>{a("/error500")}))},computed:{psa(){let t=this.$store.state.home.psa;return t?{message:this.$sanitize(t.message),link:-1!==t.targetLink.indexOf("https")?t.targetLink:"https://"+t.targetLink}:null}},meta:{title:"Home",titleTemplate:t=>`${t} | Bake Free Web Front`,meta:{description:{name:"description",content:"Web Store Front for Bake Free"},keywords:{name:"keywords",content:"web store front bake free"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},mounted(){this.showFooter=!0},data(){return{showFooter:!1,leftDrawerOpen:!1}}}),i=o,n=(e("31b1"),e("2877")),l=e("4d5a"),c=e("e359"),p=e("65c6"),d=e("6ac5"),h=e("7ff0"),v=e("09e3"),g=e("eebe"),m=e.n(g),b=Object(n["a"])(i,s,r,!1,null,"2c5d0a6a",null);a["default"]=b.exports;m()(b,"components",{QLayout:l["a"],QHeader:c["a"],QToolbar:p["a"],QToolbarTitle:d["a"],QFooter:h["a"],QPageContainer:v["a"]})},cd98:function(t,a,e){var s=e("24fb");a=s(!1),a.push([t.i,".footer[data-v-2c5d0a6a]{font-size:16px}.footer-content[data-v-2c5d0a6a]{padding:40px 70px}.footer-inner[data-v-2c5d0a6a]{--gap-x:20px;--gap-y:40px;display:flex;margin:20px 60px 110px}.footer-inner>div[data-v-2c5d0a6a]{flex:0 1 380px;margin:0 var(--gap-x) var(--gap-y) 0}.footer-inner .about[data-v-2c5d0a6a]{font-size:16px;padding-right:20px}.footer-inner .links[data-v-2c5d0a6a],.footer-inner .sns[data-v-2c5d0a6a]{flex-basis:200px}.footer-inner .sns-buttons[data-v-2c5d0a6a]{margin-left:-16px}.footer-inner .links li[data-v-2c5d0a6a]{margin-bottom:16px}.footer-copyright[data-v-2c5d0a6a]{margin:10px 60px;letter-spacing:2.6px;color:#ee3230}@media (min-width:1130px){.footer-inner .sns[data-v-2c5d0a6a]{margin-left:auto}}",""]),t.exports=a}}]);