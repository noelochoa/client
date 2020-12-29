(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "392b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-end.js
var es_string_pad_end = __webpack_require__("843c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__("4d90");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/scroll.js
var utils_scroll = __webpack_require__("0831");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/mixins/helpers.vue?vue&type=script&lang=js&




const moment = __webpack_require__("c1df");

;
const {
  getScrollTarget,
  setScrollPosition
} = utils_scroll["a" /* default */];
/* harmony default export */ var helpersvue_type_script_lang_js_ = ({
  data() {
    return {
      prevRoute: null
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from;
    });
  },

  computed: {
    today() {
      const d = new Date();
      const today = {
        month: d.toLocaleDateString("en-US", {
          month: "long"
        }),
        year: d.getFullYear(),
        dayOfMonth: d.getDate(),
        dayOfWeek: d.getDay(),
        human: d.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric"
        }),
        iso: d.toISOString(),
        yyyymm: d.getFullYear() + "/" + (d.getMonth() + 1).toString().padStart(2, 0),
        date: d.getFullYear() + "/" + (d.getMonth() + 1).toString().padStart(2, 0) + "/" + d.getDate().toString().padStart(2, "0"),
        yyyymmdd: d.getFullYear() + "-" + (d.getMonth() + 1).toString().padStart(2, 0) + "-" + d.getDate().toString().padStart(2, "0")
      };
      return today;
    },

    startDayOfMonth() {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth(), 1);
    },

    lastDayOfMonth() {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth() + 1, 0);
    }

  },
  methods: {
    // Replace all occurrences of search from txt
    replaceAll: function (txt, search, replace) {
      if (!txt) return txt;
      return txt.toString().replace(new RegExp(search, "g"), replace);
    },

    //change time to elapsed ( X time ago )
    toTimeElapsed(date) {
      if (date) {
        return moment(date).fromNow();
      }

      return "";
    },

    toHumanDate(date) {
      if (date) {
        return moment(date).format("MMM D, YYYY");
      }

      return "";
    },

    toHumanDatetime(date) {
      if (date) {
        return moment(date).format("MMM D, YYYY HH:mm");
      }

      return "";
    },

    censorTxt(txt) {
      if (txt) {
        return txt.substring(0, 1).padEnd(txt.length, "*");
      }

      return "";
    },

    // Uploaded Assets URL
    resolveAssetsUrl(file) {
      if (!file) return file;
      file = this.replaceAll(file, /\\/, "\/");
      return "https://api.bake-free.co" + "/" + file;
    },

    // Notification
    showNotif: function (type, msg, to = 3000) {
      this.$q.notify({
        type: type,
        timeout: to,
        position: "top",
        message: msg
      });
    },

    // Compute new price
    calcPrice(base, discount) {
      if (discount) {
        const finalPrice = (base - base * discount / 100).toFixed(0);
        return finalPrice;
      }

      return base;
    },

    // Falsey check
    isEmpty(obj) {
      if (typeof obj == "undefined") return true;
      if (obj == null) return true;
      if (obj.length == 0) return true;

      for (let key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
      }

      return true;
    },

    // Date helpers
    findMaxDt: function (dt1, dt2) {
      return new Date(Math.max(new Date(dt1), new Date(dt2)));
    },
    findMinDt: function (dt1, dt2) {
      return new Date(Math.min(new Date(dt1), new Date(dt2)));
    },

    isDaysAhead(dt, days) {
      const sdt = moment(dt);
      const ndt = moment().add(days, "days");
      return sdt.startOf("day").toDate() - ndt.startOf("day").toDate() >= 0;
    },

    toQDateFormat: function (d) {
      // YYYY/MM/DD format
      if (d) {
        return d.getFullYear() + "/" + (d.getMonth() + 1).toString().padStart(2, 0) + "/" + d.getDate().toString().padStart(2, 0);
      }

      return d;
    },

    // Scroll Helpers
    _disableScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    },

    _enableScroll() {
      window.onscroll = function () {};
    },

    scrollToElement(el, time = 0) {
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = time;
      setScrollPosition(target, offset, duration);
    }

  }
});
// CONCATENATED MODULE: ./src/mixins/helpers.vue?vue&type=script&lang=js&
 /* harmony default export */ var mixins_helpersvue_type_script_lang_js_ = (helpersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/mixins/helpers.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mixins_helpersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var helpers = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "2bfb",
	"./af.js": "2bfb",
	"./ar": "8e73",
	"./ar-dz": "a356",
	"./ar-dz.js": "a356",
	"./ar-kw": "423e",
	"./ar-kw.js": "423e",
	"./ar-ly": "1cfd",
	"./ar-ly.js": "1cfd",
	"./ar-ma": "0a84",
	"./ar-ma.js": "0a84",
	"./ar-sa": "8230",
	"./ar-sa.js": "8230",
	"./ar-tn": "6d83",
	"./ar-tn.js": "6d83",
	"./ar.js": "8e73",
	"./az": "485c",
	"./az.js": "485c",
	"./be": "1fc1",
	"./be.js": "1fc1",
	"./bg": "84aa",
	"./bg.js": "84aa",
	"./bm": "a7fa",
	"./bm.js": "a7fa",
	"./bn": "9043",
	"./bn-bd": "9686",
	"./bn-bd.js": "9686",
	"./bn.js": "9043",
	"./bo": "d26a",
	"./bo.js": "d26a",
	"./br": "6887",
	"./br.js": "6887",
	"./bs": "2554",
	"./bs.js": "2554",
	"./ca": "d716",
	"./ca.js": "d716",
	"./cs": "3c0d",
	"./cs.js": "3c0d",
	"./cv": "03ec",
	"./cv.js": "03ec",
	"./cy": "9797",
	"./cy.js": "9797",
	"./da": "0f14",
	"./da.js": "0f14",
	"./de": "b469",
	"./de-at": "b3eb",
	"./de-at.js": "b3eb",
	"./de-ch": "bb71",
	"./de-ch.js": "bb71",
	"./de.js": "b469",
	"./dv": "598a",
	"./dv.js": "598a",
	"./el": "8d47",
	"./el.js": "8d47",
	"./en-au": "0e6b",
	"./en-au.js": "0e6b",
	"./en-ca": "3886",
	"./en-ca.js": "3886",
	"./en-gb": "39a6",
	"./en-gb.js": "39a6",
	"./en-ie": "e1d3",
	"./en-ie.js": "e1d3",
	"./en-il": "7333",
	"./en-il.js": "7333",
	"./en-in": "ec2e",
	"./en-in.js": "ec2e",
	"./en-nz": "6f50",
	"./en-nz.js": "6f50",
	"./en-sg": "b7e9",
	"./en-sg.js": "b7e9",
	"./eo": "65db",
	"./eo.js": "65db",
	"./es": "898b",
	"./es-do": "0a3c",
	"./es-do.js": "0a3c",
	"./es-mx": "b5b7",
	"./es-mx.js": "b5b7",
	"./es-us": "55c9",
	"./es-us.js": "55c9",
	"./es.js": "898b",
	"./et": "ec18",
	"./et.js": "ec18",
	"./eu": "0ff2",
	"./eu.js": "0ff2",
	"./fa": "8df48",
	"./fa.js": "8df48",
	"./fi": "81e9",
	"./fi.js": "81e9",
	"./fil": "d69a",
	"./fil.js": "d69a",
	"./fo": "0721",
	"./fo.js": "0721",
	"./fr": "9f26",
	"./fr-ca": "d9f8",
	"./fr-ca.js": "d9f8",
	"./fr-ch": "0e49",
	"./fr-ch.js": "0e49",
	"./fr.js": "9f26",
	"./fy": "7118",
	"./fy.js": "7118",
	"./ga": "5120",
	"./ga.js": "5120",
	"./gd": "f6b46",
	"./gd.js": "f6b46",
	"./gl": "8840",
	"./gl.js": "8840",
	"./gom-deva": "aaf2",
	"./gom-deva.js": "aaf2",
	"./gom-latn": "0caa",
	"./gom-latn.js": "0caa",
	"./gu": "e0c5",
	"./gu.js": "e0c5",
	"./he": "c7aa",
	"./he.js": "c7aa",
	"./hi": "dc4d",
	"./hi.js": "dc4d",
	"./hr": "4ba9",
	"./hr.js": "4ba9",
	"./hu": "5b14",
	"./hu.js": "5b14",
	"./hy-am": "d6b6",
	"./hy-am.js": "d6b6",
	"./id": "5038",
	"./id.js": "5038",
	"./is": "0558",
	"./is.js": "0558",
	"./it": "6e98",
	"./it-ch": "6f12",
	"./it-ch.js": "6f12",
	"./it.js": "6e98",
	"./ja": "079e",
	"./ja.js": "079e",
	"./jv": "b540",
	"./jv.js": "b540",
	"./ka": "201b",
	"./ka.js": "201b",
	"./kk": "6d79",
	"./kk.js": "6d79",
	"./km": "e81d",
	"./km.js": "e81d",
	"./kn": "3e92",
	"./kn.js": "3e92",
	"./ko": "22f8",
	"./ko.js": "22f8",
	"./ku": "2421",
	"./ku.js": "2421",
	"./ky": "9609",
	"./ky.js": "9609",
	"./lb": "440c",
	"./lb.js": "440c",
	"./lo": "b29d",
	"./lo.js": "b29d",
	"./lt": "26f9",
	"./lt.js": "26f9",
	"./lv": "b97c",
	"./lv.js": "b97c",
	"./me": "293c",
	"./me.js": "293c",
	"./mi": "688b",
	"./mi.js": "688b",
	"./mk": "6909",
	"./mk.js": "6909",
	"./ml": "02fb",
	"./ml.js": "02fb",
	"./mn": "958b",
	"./mn.js": "958b",
	"./mr": "39bd",
	"./mr.js": "39bd",
	"./ms": "ebe4",
	"./ms-my": "6403",
	"./ms-my.js": "6403",
	"./ms.js": "ebe4",
	"./mt": "1b45",
	"./mt.js": "1b45",
	"./my": "8689",
	"./my.js": "8689",
	"./nb": "6ce3",
	"./nb.js": "6ce3",
	"./ne": "3a39",
	"./ne.js": "3a39",
	"./nl": "facd",
	"./nl-be": "db29",
	"./nl-be.js": "db29",
	"./nl.js": "facd",
	"./nn": "b84c",
	"./nn.js": "b84c",
	"./oc-lnc": "167b",
	"./oc-lnc.js": "167b",
	"./pa-in": "f3ff",
	"./pa-in.js": "f3ff",
	"./pl": "8d57",
	"./pl.js": "8d57",
	"./pt": "f260",
	"./pt-br": "d2d4",
	"./pt-br.js": "d2d4",
	"./pt.js": "f260",
	"./ro": "972c",
	"./ro.js": "972c",
	"./ru": "957c",
	"./ru.js": "957c",
	"./sd": "6784",
	"./sd.js": "6784",
	"./se": "ffff",
	"./se.js": "ffff",
	"./si": "eda5",
	"./si.js": "eda5",
	"./sk": "7be6",
	"./sk.js": "7be6",
	"./sl": "8155",
	"./sl.js": "8155",
	"./sq": "c8f3",
	"./sq.js": "c8f3",
	"./sr": "cf1e",
	"./sr-cyrl": "13e9",
	"./sr-cyrl.js": "13e9",
	"./sr.js": "cf1e",
	"./ss": "52bd",
	"./ss.js": "52bd",
	"./sv": "5fbd",
	"./sv.js": "5fbd",
	"./sw": "74dc",
	"./sw.js": "74dc",
	"./ta": "3de5",
	"./ta.js": "3de5",
	"./te": "5cbb",
	"./te.js": "5cbb",
	"./tet": "576c",
	"./tet.js": "576c",
	"./tg": "3b1b",
	"./tg.js": "3b1b",
	"./th": "10e8",
	"./th.js": "10e8",
	"./tk": "5aff",
	"./tk.js": "5aff",
	"./tl-ph": "0f38",
	"./tl-ph.js": "0f38",
	"./tlh": "cf75",
	"./tlh.js": "cf75",
	"./tr": "0e81",
	"./tr.js": "0e81",
	"./tzl": "cf51",
	"./tzl.js": "cf51",
	"./tzm": "c109",
	"./tzm-latn": "b53d",
	"./tzm-latn.js": "b53d",
	"./tzm.js": "c109",
	"./ug-cn": "6117",
	"./ug-cn.js": "6117",
	"./uk": "ada2",
	"./uk.js": "ada2",
	"./ur": "5294",
	"./ur.js": "5294",
	"./uz": "2e8c",
	"./uz-latn": "010e",
	"./uz-latn.js": "010e",
	"./uz.js": "2e8c",
	"./vi": "2921",
	"./vi.js": "2921",
	"./x-pseudo": "fd7e",
	"./x-pseudo.js": "fd7e",
	"./yo": "7f33",
	"./yo.js": "7f33",
	"./zh-cn": "5c3a",
	"./zh-cn.js": "5c3a",
	"./zh-hk": "49ab",
	"./zh-hk.js": "49ab",
	"./zh-mo": "3a6c",
	"./zh-mo.js": "3a6c",
	"./zh-tw": "90ea",
	"./zh-tw.js": "90ea"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4678";

/***/ }),

/***/ "a1e9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c4d1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c964":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4d1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d6fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_13dd5645_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eeaa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_13dd5645_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_13dd5645_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_1_id_13dd5645_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e2e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a1e9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ec11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/product/Index.vue?vue&type=template&id=13dd5645&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"mainpage"},[_c('Navigation',_vm._b({},'Navigation',{ opaque: true },false)),_c('div',{staticClass:"grid"},[_c('div',{staticClass:"gallery"},[_c('div',{staticClass:"selected-wrapper"},[_c('q-img',{staticStyle:{"max-height":"65vh"},attrs:{"native-context-menu":"","src":!!_vm.selected
              ? _vm.resolveAssetsUrl(_vm.selected)
              : 'https://dummyimage.com/800x600/454345/fafafa.png&text=No+Img',"spinner-color":"primary"}},[(!_vm.isEmpty(_vm.product.discount))?_c('q-icon',{staticClass:"absolute all-pointer-events",staticStyle:{"top":"8px","left":"8px"},attrs:{"size":"32px","name":"local_offer","color":"white"}},[_c('q-tooltip',{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[_vm._v("\n              "+_vm._s(_vm.product.discount[0].percent)+"% OFF\n            ")])],1):_vm._e(),(!_vm.isEmpty(_vm.product.images) && _vm.product.images.length > 1)?_c('q-icon',{staticClass:"prev-action all-pointer-events",attrs:{"size":"32px","name":"keyboard_arrow_left","color":"primary"},on:{"click":_vm.onPrevImg}}):_vm._e(),(!_vm.isEmpty(_vm.product.images) && _vm.product.images.length > 1)?_c('q-icon',{staticClass:"next-action all-pointer-events",attrs:{"size":"32px","name":"keyboard_arrow_right","color":"primary"},on:{"click":_vm.onNextImg}}):_vm._e()],1)],1),_c('div',{staticClass:"thumbnails text-center"},_vm._l((_vm.product.images),function(imgItm,idx){return _c('q-img',{key:'thumb-' + idx,staticClass:"q-ma-sm cursor-pointer",class:{ 'thumb-selected': _vm.selected == imgItm.image },attrs:{"src":_vm.resolveAssetsUrl(imgItm.image),"spinner-color":"primary","width":"70px"},on:{"click":function($event){_vm.selected = imgItm.image}}})}),1)]),_c('div',{staticClass:"info"},[_c('q-list',_vm._l((_vm.product.details),function(detailGrp,didx){return _c('div',{key:'detail-' + didx},[_c('q-expansion-item',{attrs:{"label":detailGrp.group,"header-class":"no-hover text-primary ls-sm text-uppercase q-py-lg","expand-icon-class":"text-primary"}},[_c('ul',{staticClass:"detail bg-secondary q-px-md q-pb-lg text-grey-8"},_vm._l((detailGrp.items),function(item,key){return _c('li',{key:'item-' + didx + key,staticClass:"q-mb-md"},[_c('span',{staticClass:"text-uppercase ls-sm text-weight-bolder"},[_vm._v("\n                  "+_vm._s(key)+"\n                ")]),_c('br'),_c('span',{staticClass:"text-capitalize"},[_vm._v(_vm._s(item))])])}),0)]),_c('q-separator')],1)}),0)],1),_c('div',{staticClass:"oform"},[_c('h5',{staticClass:"text-primary ls-sm text-capitalize"},[_vm._v(_vm._s(_vm.product.name))]),_c('p',{staticClass:"text-weight-bold text-grey-8 ls-sm text-capitalize"},[_vm._v("\n        "+_vm._s(_vm.product.category.name)+"\n      ")]),_c('h6',{staticClass:"text-grey-8 ls-sm"},[(!_vm.isEmpty(_vm.product.discount))?_c('span',{staticClass:"text-strike"},[_vm._v(_vm._s(_vm.baseprice))]):_vm._e(),(!_vm.isEmpty(_vm.product.discount))?_c('span',{staticClass:"text-primary"},[_vm._v("\n          "+_vm._s(_vm.price)+"\n        ")]):_c('span',[_vm._v(_vm._s(_vm.baseprice))]),_vm._v("\n        PHP\n      ")]),_c('q-form',{ref:"order-form",staticClass:"order-form q-mt-md",on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onAdd($event)}}},[_c('span',{staticClass:"text-grey-8"},[_vm._v("Qty (Min: "+_vm._s(_vm.product.minOrderQty)+"):")]),_c('q-input',{staticClass:"q-mb-md",staticStyle:{"max-width":"140px"},attrs:{"outlined":"","dense":"","input-style":"text-align:center;"},on:{"input":_vm.onChgQty},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"remove"},on:{"click":function($event){return _vm.onChgQty(_vm.order.quantity - 1)}}})]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"add"},on:{"click":function($event){_vm.onChgQty(Number.parseInt(_vm.order.quantity) + 1)}}})]},proxy:true}]),model:{value:(_vm.order.quantity),callback:function ($$v) {_vm.$set(_vm.order, "quantity", $$v)},expression:"order.quantity"}}),_vm._l((_vm.product.options),function(option,idx){return _c('div',{key:'opt-' + idx},[_c('span',{staticClass:"text-grey-8"},[_vm._v(_vm._s(option.attribute)+":")]),_c('q-select',{attrs:{"popup-content-class":"bg-secondary","outlined":"","dense":"","options":_vm.toSelOptions(option.attribute, option.choices),"lazy-rules":"","rules":[function (val) { return !!val; }]},on:{"input":function($event){return _vm.onSelOption(idx)}},model:{value:(_vm.order.options[idx]),callback:function ($$v) {_vm.$set(_vm.order.options, idx, $$v)},expression:"order.options[idx]"}}),(_vm.isOtherSelected(_vm.order.options[idx]))?_c('q-input',{attrs:{"dense":"","outlined":"","placeholder":"Please specify","lazy-rules":"","rules":[function (val) { return !!val; }]},model:{value:(_vm.order.otherVal[idx]),callback:function ($$v) {_vm.$set(_vm.order.otherVal, idx, $$v)},expression:"order.otherVal[idx]"}}):_vm._e()],1)}),_c('q-btn',{attrs:{"unelevated":"","type":"submit","color":"red-6 ls-sm","size":"16px","padding":"sm lg","label":"Add to Basket","loading":_vm.loadingAdd}})],2),_c('div',{staticClass:"description q-mt-lg text-grey-8 text-subtitle1"},[_c('h6',[_vm._v("About this product:")]),_vm._v("\n        "+_vm._s(_vm.product.description)+"\n        "),(_vm.product.sold)?_c('p',[_c('q-icon',{staticClass:"q-mr-sm",attrs:{"name":"redeem"}}),_vm._v(_vm._s(_vm.product.sold)+" sold\n        ")],1):_vm._e()])],1)]),_c('div',{staticClass:"comments"},[_c('h5',{staticClass:"ls-sm text-primary"},[_vm._v("COMMENTS")]),_c('div',{staticClass:"content text-grey-8 flex",class:{ 'justify-center': _vm.isEmpty(_vm.comments) }},[(!_vm.isEmpty(_vm.comments))?_c('div',{staticClass:"comments-list"},[_c('transition-group',{attrs:{"name":"fade","tag":"div"}},_vm._l((_vm.comments),function(comment){return _c('div',{key:comment.id},[_c('q-item',{staticClass:"q-mt-xl q-mr-xl level-1",staticStyle:{"margin-left":"auto"}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"color":"primary","text-color":"white"}},[_vm._v("\n                  "+_vm._s(comment.author.substring(0, 1))+"\n                ")])],1),_c('q-item-section',[_c('q-item-label',{staticClass:"author"},[_vm._v("\n                  "+_vm._s(comment.isFlagged
                      ? _vm.censorTxt(comment.author)
                      : comment.author)+"\n                ")]),_c('q-item-label',{staticClass:"message",class:{ 'text-negative': comment.isFlagged },domProps:{"innerHTML":_vm._s(_vm.$sanitize(comment.comment))}})],1),_c('q-item-section',{attrs:{"side":"","top":""}},[_c('q-item-label',{staticClass:"message"},[_vm._v("\n                  "+_vm._s(_vm.toTimeElapsed(comment.created))+"\n                ")])],1)],1),(comment.reply)?_c('q-item',{staticClass:"q-mt-md q-mr-xl level-2",staticStyle:{"margin-left":"auto"}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"color":"primary","text-color":"white"}},[_vm._v("\n                  "+_vm._s(comment.replyAuthor.substring(0, 1))+"\n                ")])],1),_c('q-item-section',[_c('q-item-label',{staticClass:"author"},[_vm._v("\n                  "+_vm._s(comment.replyAuthor)+"\n                  "),_c('span',{staticClass:"text-weight-light text-caption"},[_vm._v("(Support)")])]),_c('q-item-label',{staticClass:"message",domProps:{"innerHTML":_vm._s(_vm.$sanitize(comment.reply))}})],1),_c('q-item-section',{attrs:{"side":"","top":""}},[(comment.replied)?_c('q-item-label',{staticClass:"message"},[_vm._v("\n                  "+_vm._s(_vm.toTimeElapsed(comment.replied))+"\n                ")]):_vm._e()],1)],1):_vm._e()],1)}),0)],1):_vm._e(),_c('q-form',{ref:"comment-form",staticClass:"comment-form q-mt-lg",on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onPost($event)}}},[_c('q-editor',{ref:"qTxtEditor",staticClass:"q-my-lg comment-editor",attrs:{"min-height":"240px","content-class":"text-grey-8 text-comment","toolbar-toggle-color":"yellow-8","toolbar":[
            ['bold', 'italic'],
            ['undo', 'redo']
          ]},model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v},expression:"comment"}}),_c('q-btn',{attrs:{"loading":_vm.loading,"disable":_vm.loading,"unelevated":"","type":"submit","color":"red-6 ls-sm","size":"16px","padding":"sm lg","label":"Post"}})],1)],1)]),_c('div',{staticClass:"related"},[_c('h5',{staticClass:"ls-sm text-primary"},[_vm._v("RELATED ITEMS")]),_c('div',{staticClass:"content"},[_c('div',{staticClass:"product-list"},_vm._l((_vm.related),function(product,pidx){return _c('div',{key:'prod-' + pidx,staticClass:"product-item"},[_c('router-link',{attrs:{"to":'/buy/' + product.seoname}},[_c('q-img',{staticClass:"product-img cursor-pointer",attrs:{"src":product.image
                  ? _vm.resolveAssetsUrl(product.image)
                  : 'https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img',"native-context-menu":"","ratio":1}},[(!_vm.isEmpty(product.discount))?_c('q-icon',{staticClass:"absolute all-pointer-events",staticStyle:{"top":"8px","left":"8px"},attrs:{"size":"32px","name":"local_offer","color":"white"}},[_c('q-tooltip',{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[_vm._v("\n                  "+_vm._s(product.discount[0].percent)+"% OFF\n                ")])],1):_vm._e()],1)],1),_c('div',{staticClass:"q-mt-md text-center cursor-pointer"},[_c('router-link',{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{"to":'/buy/' + product.seoname}},[_vm._v("\n              "+_vm._s(product.name)+"\n            ")])],1),_c('div',{staticClass:"ls-sm q-mt-sm text-center"},[(!_vm.isEmpty(product.options))?_c('span',[_vm._v("from ")]):_vm._e(),(!_vm.isEmpty(product.discount))?_c('span',{staticClass:"text-strike"},[_vm._v(_vm._s(product.baseprice))]):_vm._e(),(!_vm.isEmpty(product.discount))?_c('span',{staticClass:"text-primary"},[_vm._v("\n              "+_vm._s(_vm.calcPrice(product.baseprice, product.discount[0].percent))+"\n            ")]):_c('span',[_vm._v(_vm._s(product.baseprice))]),_vm._v("\n            PHP\n          ")])],1)}),0)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/product/Index.vue?vue&type=template&id=13dd5645&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// EXTERNAL MODULE: ./src/components/Navigation.vue + 4 modules
var Navigation = __webpack_require__("f4dd");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/product/Index.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "Product",
  mixins: [helpers["a" /* default */]],
  components: {
    Navigation: Navigation["a" /* default */]
  },

  meta() {
    return {
      title: this.product.name || "Product",
      meta: {
        description: {
          name: "description",
          content: this.product.description || "Product Description"
        }
      }
    };
  },

  preFetch({
    store,
    redirect,
    currentRoute
  }) {
    const name = currentRoute.params.seoname;
    return store.dispatch("buy/getProductDetails", {
      seoname: name
    }).catch(err => {
      if (err.response.status == 404) {
        redirect("/error404");
      } else {
        redirect("/error500");
      }
    });
  },

  watch: {
    $route(to, from) {
      // Refresh on route change
      if (to.path !== from.path) {
        // Reset
        this.selected = "";
        this.initSelection();
        this.getRelatedProducts(4);
      }
    }

  },
  computed: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["c" /* mapGetters */])("buy", ["product", "related", "comments"])), {}, {
    price() {
      const reducer = (total, item) => total + item.value.price;

      let price = this.order.quantity * this.order.options.reduce(reducer, this.product.baseprice);
      if (!this.isEmpty(this.product.discount)) return this.calcPrice(price, this.product.discount[0].percent);else return price;
    },

    baseprice() {
      const reducer = (total, item) => total + item.value.price;

      return this.order.quantity * this.order.options.reduce(reducer, this.product.baseprice);
    }

  }),

  created() {
    this.initSelection();
  },

  mounted() {
    this.getRelatedProducts(4);
  },

  data() {
    return {
      loading: false,
      loadingAdd: false,
      title: "",
      selected: "",
      filter: false,
      opaque: false,
      order: {
        quantity: 0,
        options: [],
        otherVal: []
      },
      comment: ""
    };
  },

  methods: objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])("buy", ["findRelatedProducts", "postComment"])), Object(vuex_esm["b" /* mapActions */])("basket", ["addToCart"])), {}, {
    _isContentEmpty(val) {
      if (!val) return true;
      val = this.replaceAll(val, "&nbsp;", "");
      val = this.replaceAll(val, " ", "");
      val = val.replace(/(<([^>]+)>)/gi, "").trim();
      return val.length == 0 ? true : false;
    },

    _findSelected() {
      let thumbnails = this.product.images.slice();
      return thumbnails.findIndex(item => {
        return this.selected === item.image;
      });
    },

    initSelection() {
      this.title = this.product.name;
      this.order.quantity = this.product.minOrderQty;
      this.order.options = []; // Preselect options if any

      if (!this.isEmpty(this.product.options)) {
        this.product.options.forEach((item, idx) => {
          // default to last item
          const last = item.choices.slice(-1).pop();
          this.order.options[idx] = {
            label: last.value + (last.price >= 0 ? ` (+${last.price} PHP)` : ` (${last.price} PHP)`),
            value: last,
            key: item.attribute
          };
        });
      } // Preselect image


      if (!this.isEmpty(this.product.images)) {
        this.selected = this.product.images[0].image;
      }
    },

    toSelOptions(key, obj) {
      if (obj) {
        return obj.map(item => {
          return {
            label: item.value + (item.price >= 0 ? ` (+${item.price} PHP)` : ` (${item.price} PHP)`),
            value: item,
            key: key
          };
        });
      }

      return obj;
    },

    onChgQty(val) {
      if (this.product.minOrderQty <= val && val <= 100) {
        this.order.quantity = val;
        return true;
      } else {
        this.order.quantity = this.product.minOrderQty;
      }
    },

    onSelOption(val) {},

    isOtherSelected(obj) {
      if (obj && obj.value) {
        return obj.value.value == "Other";
      }

      return false;
    },

    onNextImg(evt) {
      let idx = this._findSelected() + 1;
      let thumbnails = this.product.images.slice();
      if (idx > thumbnails.length - 1) idx = 0; // loop

      this.selected = thumbnails[idx].image;
    },

    onPrevImg(evt) {
      let idx = this._findSelected() - 1;
      let thumbnails = this.product.images.slice();
      if (idx < 0) idx = thumbnails.length - 1; // loop

      this.selected = thumbnails[idx].image;
    },

    getRelatedProducts(limit = 4) {
      if (this.product) {
        this.findRelatedProducts({
          pID: this.product.id,
          limit: limit
        });
      }
    },

    onPost: async function (evt) {
      this.loading = true;

      if (!this._isContentEmpty(this.comment)) {
        try {
          await this.postComment({
            comment: this.comment,
            product: this.product.id
          });
          this.comment = ""; // Reset

          this.showNotif("info", "Your comment has been posted.");
        } catch (err) {
          this.showNotif("negative", err);
        } finally {
          this.loading = false;
        }
      } else {
        this.$refs.qTxtEditor.focus();
        this.loading = false;
      }
    },
    onAdd: async function (evt) {
      this.loadingAdd = true;

      try {
        let product = {
          product: this.product.id,
          quantity: this.order.quantity,
          options: this.order.options.map((item, key) => {
            return {
              _option: item.key,
              _selected: item.value.value,
              otherValue: item.value.value == "Other" ? this.order.otherVal[key] : null
            };
          })
        };
        await this.addToCart({
          product
        });
        this.showNotif("info", "Your cart has been updated.");
      } catch (err) {
        this.showNotif("negative", err);
      } finally {
        this.loadingAdd = false;
      }
    }
  })
});
// CONCATENATED MODULE: ./src/pages/product/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/product/Index.vue?vue&type=style&index=0&lang=scss&
var Indexvue_type_style_index_0_lang_scss_ = __webpack_require__("c964");

// EXTERNAL MODULE: ./src/pages/product/Index.vue?vue&type=style&index=1&id=13dd5645&lang=scss&scoped=true&
var Indexvue_type_style_index_1_id_13dd5645_lang_scss_scoped_true_ = __webpack_require__("d6fd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 1 modules
var QExpansionItem = __webpack_require__("3b73");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 4 modules
var QEditor = __webpack_require__("d66b");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/product/Index.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "13dd5645",
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

















runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QImg: QImg["a" /* default */],QIcon: QIcon["a" /* default */],QTooltip: QTooltip["a" /* default */],QList: QList["a" /* default */],QExpansionItem: QExpansionItem["a" /* default */],QSeparator: QSeparator["a" /* default */],QForm: QForm["a" /* default */],QInput: QInput["a" /* default */],QSelect: QSelect["a" /* default */],QBtn: QBtn["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QAvatar: QAvatar["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QEditor: QEditor["a" /* default */]});


/***/ }),

/***/ "eeaa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f4dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=47459bba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation",class:{ 'opaque-nav': _vm.hover },on:{"mouseover":function($event){_vm.hover = true},"mouseleave":function($event){_vm.hover = _vm.opaque ? true : false}}},[_c('div',[_c('ul',{staticClass:"left-nav"},[_c('li',{staticClass:"ls-sm"},[_c('router-link',{staticClass:"header-link hover-primary",attrs:{"to":"/"}},[_c('span',{staticClass:"default"},[_vm._v("HOME")]),_c('q-btn',{staticClass:"mobile no-hover-bg",attrs:{"flat":"","padding":"sm","ripple":false,"icon":"home"}})],1)],1),_c('li',{staticClass:"ls-sm"},[_c('router-link',{staticClass:"header-link hover-primary",attrs:{"to":"/products"}},[_c('span',{staticClass:"default"},[_vm._v("SHOP")]),_c('q-btn',{staticClass:"mobile no-hover-bg",attrs:{"flat":"","padding":"sm","ripple":false,"icon":"store"}})],1)],1)])]),_vm._m(0),_c('div',[_c('ul',{staticClass:"right-nav"},[_c('li',{staticClass:"ls-sm"},[_c('router-link',{staticClass:"header-link hover-primary",attrs:{"to":"/account"}},[_c('span',{staticClass:"default"},[_vm._v("ACCOUNT")]),_c('q-btn',{staticClass:"mobile no-hover-bg",attrs:{"flat":"","padding":"sm","ripple":false,"icon":"account_circle"}})],1)],1),_c('li',{staticClass:"ls-sm"},[_c('a',{staticClass:"header-link hover-primary",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.showSearchDlg($event)}}},[_c('span',{staticClass:"default"},[_vm._v("SEARCH")]),_c('q-btn',{staticClass:"mobile no-hover-bg",attrs:{"flat":"","padding":"sm","ripple":false,"icon":"search"}})],1)]),_c('li',{staticClass:"ls-sm"},[_c('router-link',{staticClass:"header-link hover-primary",attrs:{"to":"/basket"}},[_c('span',{staticClass:"default"},[_vm._v("BASKET ")]),(_vm.itemsCount)?_c('span',{staticClass:"default"},[_vm._v("("+_vm._s(_vm.itemsCount)+")")]):_vm._e(),_c('q-btn',{staticClass:"mobile no-hover-bg",attrs:{"flat":"","padding":"sm","ripple":false,"icon":"shopping_basket"}})],1)],1)])]),_c('q-dialog',{attrs:{"full-width":"","position":"top","content-class":"nav-search","square":"","maximized":"","transition-show":"fade","transition-hide":"fade"},model:{value:(_vm.showDlg),callback:function ($$v) {_vm.showDlg=$$v},expression:"showDlg"}},[_c('div',{staticClass:"bg-secondary block"},[_c('q-form',{attrs:{"autofocus":""}},[_c('q-input',{staticClass:"q-pa-lg text-h5",attrs:{"input-class":"ls-sm","type":"text","spellcheck":"false","placeholder":"SEARCH...","debounce":400},on:{"input":_vm.searchProducts},scopedSlots:_vm._u([{key:"before",fn:function(){return [_c('q-icon',{attrs:{"name":"search"}})]},proxy:true},{key:"append",fn:function(){return [(!!_vm.search)?_c('q-btn',{staticClass:"no-hover-bg",attrs:{"flat":"","ripple":false,"icon":"clear"},on:{"click":_vm.clearSearch}}):_vm._e()]},proxy:true}]),model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}}),(_vm.search && !_vm.fetching)?_c('div',{staticClass:"search-results q-px-lg q-py-sm text-grey-8"},[_c('div',{staticClass:"section-label text-uppercase ls-sm"},[_vm._v("\n            Products\n          ")]),_c('p',[_vm._v(_vm._s(_vm.searchRes))]),_c('div',{staticClass:"sproduct-list q-mb-lg"},_vm._l((_vm.sProducts),function(product,pidx){return _c('div',{key:'prod-' + pidx,ref:"prod",refInFor:true,staticClass:"product-item"},[_c('router-link',{attrs:{"to":'/buy/' + product.seoname}},[_c('q-img',{staticClass:"product-img cursor-pointer",attrs:{"src":product.image
                      ? _vm.resolveAssetsUrl(product.image)
                      : 'https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img',"native-context-menu":"","ratio":1}},[(!_vm.isEmpty(product.discount))?_c('q-icon',{staticClass:"absolute all-pointer-events",staticStyle:{"top":"8px","left":"8px"},attrs:{"size":"32px","name":"local_offer","color":"white"}},[_c('q-tooltip',{attrs:{"content-class":"bg-primary text-accent text-subtitle2"}},[_vm._v("\n                      "+_vm._s(product.discount[0].percent)+"% OFF\n                    ")])],1):_vm._e()],1)],1),_c('div',{staticClass:"q-mt-md text-center cursor-pointer product-title"},[_c('router-link',{staticClass:"product-link text-h6 text-primary ls-sm",attrs:{"to":'/buy/' + product.seoname}},[_vm._v("\n                  "+_vm._s(product.name)+"\n                ")])],1),_c('div',{staticClass:"ls-sm q-mt-sm text-center product-price"},[(!_vm.isEmpty(product.options))?_c('span',[_vm._v("from ")]):_vm._e(),(!_vm.isEmpty(product.discount))?_c('span',{staticClass:"text-strike"},[_vm._v(_vm._s(product.baseprice))]):_vm._e(),(!_vm.isEmpty(product.discount))?_c('span',{staticClass:"text-primary"},[_vm._v("\n                  "+_vm._s(_vm.calcPrice(product.baseprice, product.discount[0].percent))+"\n                ")]):_c('span',[_vm._v(_vm._s(product.baseprice))]),_vm._v("\n                PHP\n              ")])],1)}),0)]):_vm._e()],1)],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"center-nav absolute",staticStyle:{"top":"-12px","margin-left":"16px"}},[_c('img',{attrs:{"src":"/logo.png","width":"132px"}})])])}]


// CONCATENATED MODULE: ./src/components/Navigation.vue?vue&type=template&id=47459bba&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  name: "Navigation",
  mixins: [helpers["a" /* default */]],
  props: {
    opaque: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  computed: {
    sProducts() {
      return this.$store.getters["gallery/searchResults"];
    },

    itemsCount() {
      return this.$store.getters["basket/itemsCount"] || "0";
    }

  },

  data() {
    return {
      hover: this.opaque,
      showDlg: false,
      search: "",
      searchRes: "",
      fetching: false
    };
  },

  methods: {
    clearSearch() {
      this.searchRes = this.search = "";
    },

    showSearchDlg() {
      this.showDlg = true;
    },

    async searchProducts(val) {
      try {
        this.searchRes = "";
        this.fetching = true;
        const res = await this.$store.dispatch("gallery/searchProducts", {
          search: this.search
        });

        if (!res) {
          this.searchRes = "No items found.";
        }
      } catch (err) {
        this.searchRes = err + "Error occurred while searching for products.";
      } finally {
        this.fetching = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Navigation.vue?vue&type=style&index=0&id=47459bba&lang=scss&scoped=true&
var Navigationvue_type_style_index_0_id_47459bba_lang_scss_scoped_true_ = __webpack_require__("e2e8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__("24e8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/Navigation.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "47459bba",
  null
  
)

/* harmony default export */ var Navigation = __webpack_exports__["a"] = (component.exports);








runtime_auto_import_default()(component, 'components', {QBtn: QBtn["a" /* default */],QDialog: QDialog["a" /* default */],QForm: QForm["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QImg: QImg["a" /* default */],QTooltip: QTooltip["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=4.a2303327.js.map