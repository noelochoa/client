(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "2385":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_383b82cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b35b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_383b82cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_383b82cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_style_index_0_id_383b82cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3847":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/basket/Checkout.vue?vue&type=template&id=383b82cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"mainpage"},[_c('Navigation',_vm._b({},'Navigation',{ opaque: true },false)),_c('div',{staticClass:"checkout text-grey-8 flex"},[_c('div',{staticClass:"checkout-heading"},[_c('h4',{staticClass:"text-primary text-center ls-sm"},[_vm._v("Checkout")]),(_vm.checkOutErr)?_c('p',{staticClass:"error-msg text-negative text-center bg-red-3 q-py-sm"},[_vm._v("\n        "+_vm._s(_vm.checkOutErr)+"\n      ")]):_vm._e(),_c('p',{staticClass:"text-subtitle1 q-mt-sm"},[_vm._v("Fill out your information below:")]),_c('q-form',{staticClass:"checkout-form",on:{"submit":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onSubmit($event)}}},[(_vm.fetching || _vm.fetchingProfile)?_c('div',{staticClass:"q-mt-lg"},[_c('q-spinner',{attrs:{"size":"50px","color":"primary"}})],1):_c('div',[_c('ul',{staticClass:"form-items text-field"},[_c('li',[_c('span',{staticClass:"field-heading text-weight-bold block"},[_vm._v("Contact Information\n              ")]),_c('q-avatar',{attrs:{"color":"primary","text-color":"white"}},[_vm._v("\n                "+_vm._s(_vm.user.firstname.substring(0, 1))+"\n              ")]),_c('router-link',{staticClass:"q-ml-sm field-value hover-primary",attrs:{"to":"/account"}},[_vm._v("\n                "+_vm._s(_vm.user.firstname + " " + _vm.user.lastname)+" ("+_vm._s(_vm.user.email)+")\n              ")])],1),_c('li',{staticClass:"q-mt-md"},[_c('span',{staticClass:"field-heading text-weight-bold q-mt-sm q-mr-xs"},[_vm._v("\n                Shipping\n              ")]),(_vm.order.deliveryType == 'pickup')?_c('q-icon',{staticClass:"cursor-pointer q-mb-xs",attrs:{"size":"17px","name":"help"}},[_c('q-tooltip',{attrs:{"anchor":"top middle","self":"bottom middle","content-class":"bg-primary text-white text-caption"}},[_vm._v("\n                  Pickup on our main store. (Sawali Restaurant)\n                ")])],1):_vm._e()],1),_c('li',{staticClass:"q-mt-sm"},[_c('q-select',{staticClass:"field-value",attrs:{"label":"Delivery Method","options":_vm.deliveryTypes,"outlined":"","no-error-icon":"","hide-bottom-space":"","bg-color":"white","emit-value":"","map-options":"","lazy-rules":"","rules":[_vm._isValidType]},on:{"input":_vm.onSelDelType},model:{value:(_vm.order.deliveryType),callback:function ($$v) {_vm.$set(_vm.order, "deliveryType", $$v)},expression:"order.deliveryType"}})],1),(_vm.order.deliveryType == 'delivery')?_c('li',{staticClass:"q-mt-sm"},[_c('span',{staticClass:"field-name block"},[_vm._v("Address")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"textarea","rows":4,"textarea":"","no-error-icon":"","hide-bottom-space":"","outlined":"","placeholder":"Type address here...","bg-color":"white","lazy-rules":"","rules":[
                  function (val) { return (val !== null && val.trim() !== '') ||
                    'Address is required.'; },
                  function (val) { return (val !== null && val.length <= 500) ||
                    'Max 500 characters.'; }
                ]},model:{value:(_vm.order.shippingAddress),callback:function ($$v) {_vm.$set(_vm.order, "shippingAddress", $$v)},expression:"order.shippingAddress"}})],1):_vm._e(),_c('li',{staticClass:"q-mt-sm"},[_c('span',{staticClass:"field-label q-mr-xs"},[_vm._v("Target Date")]),_c('q-icon',{staticClass:"cursor-pointer q-mb-xs",attrs:{"size":"17px","name":"help"}},[_c('q-tooltip',{attrs:{"anchor":"top middle","self":"bottom middle","content-class":"bg-primary text-white text-caption"}},[_vm._v("\n                  Select your desired date for pickup or delivery.\n                ")])],1),_c('q-input',{staticClass:"field-value",attrs:{"outlined":"","no-error-icon":"","hide-bottom-space":"","bg-color":"white","placeholder":"Click the icons to select date...","lazy-rules":"","rules":[
                  function (val) { return (val !== null && val.trim() !== '') || 'Date required.'; },
                  _vm._isValidDatetime
                ]},scopedSlots:_vm._u([{key:"prepend",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"event"}},[_c('q-popup-proxy',{ref:"qDateProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-date',{attrs:{"no-unset":"","navigation-min-year-month":_vm.today.yyyymm,"options":_vm.optionsFn,"events":_vm.worklistFn,"event-color":_vm.workColorFn,"mask":"YYYY-MM-DD HH:mm"},on:{"input":_vm.onSelDate,"navigation":_vm.onNavigate},model:{value:(_vm.order.target),callback:function ($$v) {_vm.$set(_vm.order, "target", $$v)},expression:"order.target"}}),_c('q-inner-loading',{attrs:{"showing":_vm.fetchingDates}},[_c('q-spinner',{attrs:{"color":"primary","size":"50px"}})],1)],1)],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":"access_time"}},[_c('q-popup-proxy',{ref:"qTimeProxyS",attrs:{"transition-show":"scale","transition-hide":"scale"}},[_c('q-time',{attrs:{"minute-options":[0, 15, 30, 45],"mask":"YYYY-MM-DD HH:mm","format24h":""},on:{"input":_vm.onSelTime},model:{value:(_vm.order.target),callback:function ($$v) {_vm.$set(_vm.order, "target", $$v)},expression:"order.target"}})],1)],1)]},proxy:true}]),model:{value:(_vm.order.target),callback:function ($$v) {_vm.$set(_vm.order, "target", $$v)},expression:"order.target"}})],1),_c('li',{staticClass:"q-mt-sm"},[_c('span',{staticClass:"field-name block"},[_vm._v("Special Instructions")]),_c('q-input',{staticClass:"field-value",attrs:{"type":"textarea","rows":4,"textarea":"","outlined":"","no-error-icon":"","placeholder":"Type here...","bg-color":"white"},model:{value:(_vm.order.memo),callback:function ($$v) {_vm.$set(_vm.order, "memo", $$v)},expression:"order.memo"}})],1)])]),_c('q-btn',{staticClass:"q-mt-lg block submit-btn",staticStyle:{"margin-left":"auto"},attrs:{"loading":_vm.loading,"disable":_vm.loading,"unelevated":"","type":"submit","color":"red-6 ls-sm","size":"16px","padding":"sm lg","label":"Place Order"}})],1)],1),_c('div',{staticClass:"cart-wrapper"},[_c('router-link',{staticClass:" ls-sm text-uppercase cursor-pointer hover-primary inline-block q-mb-md",attrs:{"tag":"div","to":"/basket"}},[_vm._v("\n        Back to Cart\n      ")]),_c('div',{staticClass:"cart text-field"},[_vm._l((_vm.products),function(item,pidx){return _c('div',{key:'item-' + pidx,staticClass:"text-grey-7 flex cart-item"},[_c('div',{staticClass:"product-info product-img"},[_c('q-img',{attrs:{"src":!_vm.isEmpty(item.image)
                  ? _vm.resolveAssetsUrl(item.image)
                  : 'https://dummyimage.com/370x370/454345/fafafa.png&text=No+Img',"native-context-menu":"","ratio":1}},[_c('q-badge',{staticClass:"small-badge",attrs:{"color":"primary"}},[_vm._v(_vm._s(item.quantity))])],1)],1),_c('div',{staticClass:"product-info ls-sm product-title"},[_c('div',{staticClass:"ls-sm text-weight-bold overflow-ellipsis"},[_vm._v("\n              "+_vm._s(item.name)+"\n            ")]),_vm._l((item.options),function(opt,idx){return _c('div',{key:'key-' + idx,staticClass:"options text-caption"},[_vm._v("\n              "+_vm._s(opt._option + ": " + opt._selected)+"\n              "),(opt.otherValue != null)?_c('span',[_vm._v("("+_vm._s(opt.otherValue)+") ")]):_vm._e(),_c('br')])})],2),_c('div',{staticClass:"product-info text-weight-bold product-price text-right ls-sm"},[_vm._v("\n            "+_vm._s(item.price)+" PHP"),_c('br')])])}),(!_vm.isEmpty(_vm.basket) && !_vm.fetching)?_c('div',{staticClass:"cart-item bordered text-h6 text-dark"},[_c('div',{staticClass:"product-info"},[_vm._v("Total")]),_c('div',{staticClass:"product-info"}),_c('div',{staticClass:"product-info text-right text-weight-bold"},[_vm._v("\n            "+_vm._s(_vm.total)+" PHP\n          ")])]):_vm._e()],2),_c('div',[_c('div',{staticClass:"text-comment relative"},[_c('h6',[_vm._v("Order Fulfillment Prediction*:")]),(_vm.loading)?_c('p',[_c('q-spinner',{attrs:{"color":"grey-8","size":"40px"}})],1):(_vm.target_eval)?_c('p',[_c('span',{staticClass:"block",domProps:{"innerHTML":_vm._s(_vm.target_eval)}}),_c('br'),_vm._v("Your order's estimated mimimum lead time is\n            "),_c('b',[_vm._v(_vm._s(_vm.basket.eta)+" hours")]),_vm._v(". "),_c('br'),_vm._v("(Order preparation starts 1-2\n            days prior to your target) "),_c('br'),_c('span',{staticClass:"text-caption"},[_vm._v("\n              * The given estimate is an automated prediction feature of this\n              system.\n            ")])]):_c('p',[_vm._v("\n            Fill out the form to evaluate your order's ETA.\n          ")])])])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/basket/Checkout.vue?vue&type=template&id=383b82cc&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/mixins/helpers.vue + 2 modules
var helpers = __webpack_require__("392b");

// EXTERNAL MODULE: ./src/components/Navigation.vue + 4 modules
var Navigation = __webpack_require__("f4dd");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/basket/Checkout.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Checkoutvue_type_script_lang_js_ = ({
  name: "Checkout",
  mixins: [helpers["a" /* default */]],
  components: {
    Navigation: Navigation["a" /* default */]
  },

  preFetch({
    store,
    redirect,
    currentRoute
  }) {
    if (!store.getters["basket/itemsCount"]) {
      return redirect("/basket");
    }

    if (!store.getters["auth/isAuthenticated"]) {
      return redirect("/account?ref=" + currentRoute.path);
    }
  },

  meta() {
    return {
      title: "Checkout"
    };
  },

  computed: {
    // User profile
    user() {
      return this.$store.state.auth.user;
    },

    // Basket items
    products() {
      if (!this.isEmpty(this.basket)) {
        let target = this.$store.getters["auth/isReseller"] ? "reseller" : "all";
        const ret = this.basket.products.map(item => {
          let discounts = item.product.discount ? item.product.discount.filter(el => el.target == target || el.target == "all") : []; // Use largest discount

          discounts.sort((a, b) => {
            return b.percent - a.percent;
          });
          let subprice = item.quantity * item.product.basePrice; // Find option price

          item.options.forEach(itemOpt => {
            const optionGrp = item.product.options.find(selOpt => {
              return selOpt.attribute == itemOpt._option;
            });
            const choice = optionGrp.choices.find(selChoice => {
              return selChoice.value == itemOpt._selected;
            });
            subprice += item.quantity * choice.price;
          });
          return {
            id: item.product._id,
            isActive: item.product.isActive,
            name: item.product.name,
            seoname: item.product.seoname,
            category: item.product.category.name,
            description: item.product.description,
            details: item.product.details,
            minOrderQty: item.product.minOrderQuantity,
            options: item.options,
            quantity: item.quantity,
            price: !this.isEmpty(discounts) ? this.calcPrice(subprice, discounts[0].percent) : subprice,
            image: this._selectFirstImg(item.product.images)
          };
        });
        return ret;
      }

      return [];
    },

    total() {
      const reducer = (total, item) => total + Number.parseInt(item.price);

      return !this.isEmpty(this.products) ? this.products.reduce(reducer, 0) : "0";
    },

    holidayList() {
      const dayList = new Set();
      this.holidays.map(item => {
        const start = this.findMaxDt(item.start, this.startOfMonth);
        const end = this.findMinDt(item.end, this.endOfMonth);

        for (let dt = start; dt.getTime() <= end.getTime(); dt.setDate(dt.getDate() + 1)) {
          dayList.add(this.toQDateFormat(dt));
        }
      });
      return [...dayList];
    },

    workList() {
      return this.workload.map(item => item._id);
    },

    target_eval() {
      if (!this.order.deliveryType || !this.order.target) return "";
      if (!this.isDaysAhead(this.order.target, 2)) return "";

      if (this.basket.eta && this.basket.stdER) {
        const type = this.order.deliveryType == "delivery" ? "delivered" : "picked up"; // Within range

        if (this.basket.eta < 72) {
          return `<b>Looks good!</b> Your order can be ${type} at your desired schedule.`;
        } else {
          return `Sorry, your order may NOT be completed by your target date.<br/>
          Choose a less busy schedule or consider splitting your order.<br/>
          You may also continue placing your order and wait for the owner's decision.`;
        }
      }

      return "";
    }

  },

  created() {
    if (true) {
      this.getCartDetails();
      this.getProfile();
      this.getBusinessHolidays();
    }
  },

  mounted() {
    // this.order.target = this.today.yyyymmdd + " 00:00";
    this.startOfMonth = this.startDayOfMonth;
    this.endOfMonth = this.lastDayOfMonth;
  },

  data() {
    return {
      checkOutErr: "",
      loading: false,
      fetching: true,
      fetchingProfile: true,
      fetchingDates: true,
      deliveryTypes: [{
        label: "For Delivery",
        value: "delivery"
      }, {
        label: "For Pickup",
        value: "pickup"
      }],
      startOfMonth: null,
      endOfMonth: null,
      holidays: [],
      workload: [],
      basket: {},
      profile: {},
      order: {
        deliveryType: null,
        shippingAddress: "",
        target: null,
        memo: ""
      }
    };
  },

  methods: {
    _selectFirstImg(imgs) {
      if (!this.isEmpty(imgs)) {
        const retImg = imgs[0];
        if (retImg) return retImg.image;
      }

      return false;
    },

    _isValidType(val) {
      if (!(this.order.deliveryType && this.deliveryTypes && this.deliveryTypes.length > 0)) {
        return "Please choose one.";
      }

      const typeItem = this.deliveryTypes.find(option => {
        return option.value === this.order.deliveryType;
      });
      if (!typeItem) return "Please choose one.";
      return true;
    },

    _isValidDatetime(val) {
      const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
      const fmt = dtpattern.test(val);
      if (!fmt) "Invalid date & time format";
      return this.isDaysAhead(val, 2) || "Please choose a future date. (at least 2 days in advance)";
    },

    optionsFn(date) {
      return date > this.today.date && this.holidayList.indexOf(date) === -1;
    },

    worklistFn(date) {
      return date > this.today.date && this.workList.indexOf(date) !== -1;
    },

    workColorFn(date) {
      const item = this.workload[this.workList.indexOf(date)];
      return item && item.ordersNum >= 3 ? "primary" : "orange";
    },

    onSelTime(val, details) {
      if (details.year < this.today.year) {
        this.order.target = this.today.yyyymmdd + " " + details.hour + ":" + details.minute;
      }

      this.$refs.qTimeProxyS.hide();
    },

    async onSelDelType(val) {
      this.$refs.qDateProxyS.hide();

      try {
        this.checkOutErr = "";
        this.loading = true;
        const resp = await this.$store.dispatch("basket/checkETA", {
          target: this.order.target,
          type: val
        });
        this.basket.eta = resp;
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.loading = false;
      }
    },

    async onSelDate(val, reason, details) {
      this.$refs.qDateProxyS.hide();
      if (!this.order.target || !this.order.deliveryType) return;

      try {
        this.checkOutErr = "";
        this.loading = true;
        const resp = await this.$store.dispatch("basket/checkETA", {
          target: val,
          type: this.order.deliveryType
        });
        this.basket.eta = resp;
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.loading = false;
      }
    },

    async getBusinessHolidays(year = null, month = null) {
      try {
        this.checkOutErr = "";
        this.fetchingDates = true;
        const resp = await this.$store.dispatch("basket/fetchHolidays", {
          year,
          month
        });

        if (resp) {
          this.holidays = resp.holidays.slice();
          this.workload = resp.worklist.slice();
        }
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.fetchingDates = false;
      }
    },

    async getCartDetails() {
      try {
        this.checkOutErr = "";
        const resp = await this.$store.dispatch("basket/fetchCartDetails");

        if (resp) {
          this.basket = JSON.parse(JSON.stringify(resp));
        } else {
          this.checkOutErr = "No items on your shopping basket.";
        }
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.fetching = false;
      }
    },

    async getProfile() {
      try {
        const resp = await this.$store.dispatch("auth/fetchProfile");

        if (resp) {
          this.profile = objectSpread2_default()({}, resp);
          this.order.shippingAddress = this.profile.address;
        }
      } catch (err) {
        this.$router.push("/account").catch(err => {});
      } finally {
        this.fetchingProfile = false;
      }
    },

    async onNavigate(view) {
      try {
        const d = new Date(view.year, view.month - 1);
        this.startOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        this.endOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        this.getBusinessHolidays(view.year, view.month);
      } catch (err) {
        this.checkOutErr = err;
      }
    },

    async onSubmit() {
      try {
        this.checkOutErr = "";
        this.loading = true;
        await this.$store.dispatch("basket/placeOrder", {
          order: this.order,
          price: this.total
        });
        this.showNotif("info", "Order has been placed and subject for approval.");
        this.$router.push("/account").catch(err => {});
      } catch (err) {
        this.checkOutErr = err;
      } finally {
        this.loading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/pages/basket/Checkout.vue?vue&type=script&lang=js&
 /* harmony default export */ var basket_Checkoutvue_type_script_lang_js_ = (Checkoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/basket/Checkout.vue?vue&type=style&index=0&id=383b82cc&lang=scss&scoped=true&
var Checkoutvue_type_style_index_0_id_383b82cc_lang_scss_scoped_true_ = __webpack_require__("2385");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__("0d59");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__("05c0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 2 modules
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/popup-proxy/QPopupProxy.js
var QPopupProxy = __webpack_require__("7cbe");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js
var QDate = __webpack_require__("52ee");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/time/QTime.js
var QTime = __webpack_require__("ca78");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__("58a81");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/basket/Checkout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basket_Checkoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "383b82cc",
  null
  
)

/* harmony default export */ var Checkout = __webpack_exports__["default"] = (component.exports);
















runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QForm: QForm["a" /* default */],QSpinner: QSpinner["a" /* default */],QAvatar: QAvatar["a" /* default */],QIcon: QIcon["a" /* default */],QTooltip: QTooltip["a" /* default */],QSelect: QSelect["a" /* default */],QInput: QInput["a" /* default */],QPopupProxy: QPopupProxy["a" /* default */],QDate: QDate["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QTime: QTime["a" /* default */],QBtn: QBtn["a" /* default */],QImg: QImg["a" /* default */],QBadge: QBadge["a" /* default */]});


/***/ }),

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

/***/ "b35b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e2e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a1e9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_47459bba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
//# sourceMappingURL=8.34a07c00.js.map