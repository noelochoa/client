/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"1":"20b461df","2":"63df8800","4":"a2303327","5":"8d71902f","6":"5e7cd5e8","7":"164decc0","8":"34a07c00","9":"689a919b","10":"d6f50cd8","11":"3981e30f","12":"7cade3c6","13":"a7a532da","14":"27ffd279","15":"4ed7cf86","16":"928f9066","17":"f52ef29a","18":"65f8cbdc"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"2":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"1":"428d655d","2":"6d5ada4f","4":"045846d3","5":"e512a508","6":"31f12ca6","7":"9eabe2b5","8":"e717b2a5","9":"d3162491","10":"e972b7f9","11":"efd29707","12":"dcd3664f","13":"819b7241","14":"899683fc","15":"da290e8f","16":"ef370b18","17":"31d6cfe0","18":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/store/home/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, "getFeatured", function() { return getFeatured; });
__webpack_require__.d(getters_namespaceObject, "getNewItems", function() { return getNewItems; });

// NAMESPACE OBJECT: ./src/store/home/mutations.js
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, "SET_FEATURED", function() { return SET_FEATURED; });
__webpack_require__.d(mutations_namespaceObject, "SET_NEWITEMS", function() { return SET_NEWITEMS; });
__webpack_require__.d(mutations_namespaceObject, "SET_PSA", function() { return SET_PSA; });

// NAMESPACE OBJECT: ./src/store/home/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setFeatured", function() { return setFeatured; });
__webpack_require__.d(actions_namespaceObject, "setNewItems", function() { return setNewItems; });
__webpack_require__.d(actions_namespaceObject, "setPSA", function() { return setPSA; });
__webpack_require__.d(actions_namespaceObject, "getPSA", function() { return getPSA; });
__webpack_require__.d(actions_namespaceObject, "getProducts", function() { return getProducts; });

// NAMESPACE OBJECT: ./src/store/gallery/getters.js
var gallery_getters_namespaceObject = {};
__webpack_require__.r(gallery_getters_namespaceObject);
__webpack_require__.d(gallery_getters_namespaceObject, "productList", function() { return productList; });
__webpack_require__.d(gallery_getters_namespaceObject, "searchResults", function() { return searchResults; });
__webpack_require__.d(gallery_getters_namespaceObject, "categoryList", function() { return categoryList; });

// NAMESPACE OBJECT: ./src/store/gallery/mutations.js
var gallery_mutations_namespaceObject = {};
__webpack_require__.r(gallery_mutations_namespaceObject);
__webpack_require__.d(gallery_mutations_namespaceObject, "SET_PRODUCTS", function() { return SET_PRODUCTS; });
__webpack_require__.d(gallery_mutations_namespaceObject, "SET_SEARCH_RESULTS", function() { return SET_SEARCH_RESULTS; });
__webpack_require__.d(gallery_mutations_namespaceObject, "SET_CATEGORIES", function() { return SET_CATEGORIES; });
__webpack_require__.d(gallery_mutations_namespaceObject, "SET_LASTSORT", function() { return SET_LASTSORT; });
__webpack_require__.d(gallery_mutations_namespaceObject, "PUSH_PRODUCTS", function() { return PUSH_PRODUCTS; });

// NAMESPACE OBJECT: ./src/store/gallery/actions.js
var gallery_actions_namespaceObject = {};
__webpack_require__.r(gallery_actions_namespaceObject);
__webpack_require__.d(gallery_actions_namespaceObject, "pushProducts", function() { return pushProducts; });
__webpack_require__.d(gallery_actions_namespaceObject, "getGalleryItems", function() { return getGalleryItems; });
__webpack_require__.d(gallery_actions_namespaceObject, "getProducts", function() { return actions_getProducts; });
__webpack_require__.d(gallery_actions_namespaceObject, "getNextProducts", function() { return getNextProducts; });
__webpack_require__.d(gallery_actions_namespaceObject, "searchProducts", function() { return searchProducts; });

// NAMESPACE OBJECT: ./src/store/buy/getters.js
var buy_getters_namespaceObject = {};
__webpack_require__.r(buy_getters_namespaceObject);
__webpack_require__.d(buy_getters_namespaceObject, "related", function() { return related; });
__webpack_require__.d(buy_getters_namespaceObject, "product", function() { return getters_product; });
__webpack_require__.d(buy_getters_namespaceObject, "comments", function() { return comments; });

// NAMESPACE OBJECT: ./src/store/buy/mutations.js
var buy_mutations_namespaceObject = {};
__webpack_require__.r(buy_mutations_namespaceObject);
__webpack_require__.d(buy_mutations_namespaceObject, "SET_PRODUCT", function() { return SET_PRODUCT; });
__webpack_require__.d(buy_mutations_namespaceObject, "SET_RELATED", function() { return SET_RELATED; });
__webpack_require__.d(buy_mutations_namespaceObject, "SET_COMMENTS", function() { return SET_COMMENTS; });
__webpack_require__.d(buy_mutations_namespaceObject, "UNSHIFT_COMMENT", function() { return UNSHIFT_COMMENT; });

// NAMESPACE OBJECT: ./src/store/buy/actions.js
var buy_actions_namespaceObject = {};
__webpack_require__.r(buy_actions_namespaceObject);
__webpack_require__.d(buy_actions_namespaceObject, "getProductDetails", function() { return getProductDetails; });
__webpack_require__.d(buy_actions_namespaceObject, "findRelatedProducts", function() { return findRelatedProducts; });
__webpack_require__.d(buy_actions_namespaceObject, "postComment", function() { return postComment; });

// NAMESPACE OBJECT: ./src/store/basket/getters.js
var basket_getters_namespaceObject = {};
__webpack_require__.r(basket_getters_namespaceObject);
__webpack_require__.d(basket_getters_namespaceObject, "getXSRFToken", function() { return getXSRFToken; });
__webpack_require__.d(basket_getters_namespaceObject, "hasSession", function() { return hasSession; });
__webpack_require__.d(basket_getters_namespaceObject, "itemsCount", function() { return itemsCount; });

// NAMESPACE OBJECT: ./src/store/basket/mutations.js
var basket_mutations_namespaceObject = {};
__webpack_require__.r(basket_mutations_namespaceObject);
__webpack_require__.d(basket_mutations_namespaceObject, "SET_XSRF_CART", function() { return SET_XSRF_CART; });
__webpack_require__.d(basket_mutations_namespaceObject, "SET_CART_COUNT", function() { return SET_CART_COUNT; });
__webpack_require__.d(basket_mutations_namespaceObject, "RESET_CART", function() { return RESET_CART; });

// NAMESPACE OBJECT: ./src/store/basket/actions.js
var basket_actions_namespaceObject = {};
__webpack_require__.r(basket_actions_namespaceObject);
__webpack_require__.d(basket_actions_namespaceObject, "setXSRFToken", function() { return setXSRFToken; });
__webpack_require__.d(basket_actions_namespaceObject, "resetCart", function() { return resetCart; });
__webpack_require__.d(basket_actions_namespaceObject, "addToCart", function() { return addToCart; });
__webpack_require__.d(basket_actions_namespaceObject, "updateCart", function() { return updateCart; });
__webpack_require__.d(basket_actions_namespaceObject, "fetchCartDetails", function() { return fetchCartDetails; });
__webpack_require__.d(basket_actions_namespaceObject, "fetchHolidays", function() { return fetchHolidays; });
__webpack_require__.d(basket_actions_namespaceObject, "checkETA", function() { return checkETA; });
__webpack_require__.d(basket_actions_namespaceObject, "placeOrder", function() { return placeOrder; });

// NAMESPACE OBJECT: ./src/store/auth/getters.js
var auth_getters_namespaceObject = {};
__webpack_require__.r(auth_getters_namespaceObject);
__webpack_require__.d(auth_getters_namespaceObject, "getXSRFToken", function() { return getters_getXSRFToken; });
__webpack_require__.d(auth_getters_namespaceObject, "getCustomerType", function() { return getCustomerType; });
__webpack_require__.d(auth_getters_namespaceObject, "getCustomerID", function() { return getCustomerID; });
__webpack_require__.d(auth_getters_namespaceObject, "isAuthenticated", function() { return isAuthenticated; });
__webpack_require__.d(auth_getters_namespaceObject, "isVerified", function() { return isVerified; });
__webpack_require__.d(auth_getters_namespaceObject, "isReseller", function() { return isReseller; });

// NAMESPACE OBJECT: ./src/store/auth/mutations.js
var auth_mutations_namespaceObject = {};
__webpack_require__.r(auth_mutations_namespaceObject);
__webpack_require__.d(auth_mutations_namespaceObject, "SET_BOOL_AUTH", function() { return SET_BOOL_AUTH; });
__webpack_require__.d(auth_mutations_namespaceObject, "SET_USER_AUTH", function() { return SET_USER_AUTH; });
__webpack_require__.d(auth_mutations_namespaceObject, "SET_XSRF_AUTH", function() { return SET_XSRF_AUTH; });
__webpack_require__.d(auth_mutations_namespaceObject, "RESET_AUTH", function() { return RESET_AUTH; });

// NAMESPACE OBJECT: ./src/store/auth/actions.js
var auth_actions_namespaceObject = {};
__webpack_require__.r(auth_actions_namespaceObject);
__webpack_require__.d(auth_actions_namespaceObject, "setXSRFToken", function() { return actions_setXSRFToken; });
__webpack_require__.d(auth_actions_namespaceObject, "resetAuth", function() { return resetAuth; });
__webpack_require__.d(auth_actions_namespaceObject, "signin", function() { return signin; });
__webpack_require__.d(auth_actions_namespaceObject, "register", function() { return register; });
__webpack_require__.d(auth_actions_namespaceObject, "signout", function() { return signout; });
__webpack_require__.d(auth_actions_namespaceObject, "fetchProfile", function() { return fetchProfile; });
__webpack_require__.d(auth_actions_namespaceObject, "fetchOrders", function() { return fetchOrders; });
__webpack_require__.d(auth_actions_namespaceObject, "fetchOrderDetails", function() { return fetchOrderDetails; });
__webpack_require__.d(auth_actions_namespaceObject, "cancelOrder", function() { return cancelOrder; });
__webpack_require__.d(auth_actions_namespaceObject, "editProfile", function() { return editProfile; });
__webpack_require__.d(auth_actions_namespaceObject, "sendSMS", function() { return sendSMS; });
__webpack_require__.d(auth_actions_namespaceObject, "sendCode", function() { return sendCode; });
__webpack_require__.d(auth_actions_namespaceObject, "verify", function() { return verify; });
__webpack_require__.d(auth_actions_namespaceObject, "verifySMS", function() { return verifySMS; });
__webpack_require__.d(auth_actions_namespaceObject, "sendResetToken", function() { return sendResetToken; });
__webpack_require__.d(auth_actions_namespaceObject, "changePW", function() { return changePW; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.scss
var css_app = __webpack_require__("31cd");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("42d2");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Cookies.js
var Cookies = __webpack_require__("515f");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Meta.js
var Meta = __webpack_require__("9c64");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LoadingBar.js + 1 modules
var LoadingBar = __webpack_require__("1b3f");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {
    "loadingBar": {
      "color": "secondary",
      "size": "2px"
    }
  },
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  plugins: {
    Cookies: Cookies["a" /* default */],
    Meta: Meta["a" /* default */],
    Notify: Notify["a" /* default */],
    LoadingBar: LoadingBar["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=6a4b33ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=6a4b33ba&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/home/state.js
/* harmony default export */ var home_state = (function () {
  return {
    psa: "",
    featured: [],
    newItems: []
  };
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// CONCATENATED MODULE: ./src/store/home/getters.js


function getFeatured(state) {
  let ret = [];

  if (state.featured && state.featured.length > 0) {
    state.featured.map(item => {
      let banner = item.images.find(img => img.imageType == "banner");
      ret.push({
        name: item.name,
        seoname: item.seoname,
        description: item.description,
        banner: banner ? banner.image : ""
      });
    });
  }

  return ret;
}
function getNewItems(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.newItems && state.newItems.length > 0) {
    state.newItems.forEach(item => {
      let img = item.images ? item.images.find(img => img.imageType == "gallery") : null;
      let target = rootGetters["auth/isReseller"] ? "reseller" : "all";
      let product = {
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.fprice || "0",
        discount: item.discount ? item.discount.filter(el => el.target == target || el.target == "all") : [],
        image: img ? img.image : ""
      }; // Use largest discount

      product.discount.sort((a, b) => {
        return b.percent - a.percent;
      });
      ret.push(product);
    });
  }

  return ret;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./src/store/home/mutations.js

function SET_FEATURED(state, arr) {
  state.featured = arr.slice();
}
function SET_NEWITEMS(state, arr) {
  state.newItems = arr.slice();
}
function SET_PSA(state, psa) {
  state.psa = psa;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./src/store/home/actions.js


function setFeatured({
  commit
}, arr) {
  commit("SET_FEATURED", arr);
}
function setNewItems({
  commit
}, arr) {
  commit("SET_NEWITEMS", arr);
}
function setPSA({
  commit
}, psa) {
  commit("SET_PSA", psa);
}
async function getPSA({
  commit
}) {
  let resp;

  try {
    resp = await this.$axios.get("/api/psa");

    if (resp && resp.data) {
      commit("SET_PSA", resp.data);
    }

    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
async function getProducts({
  commit
}) {
  let resp;

  try {
    resp = await Promise.all([this.$axios.get("/api/products/featured"), this.$axios.get("/api/products/new", {
      params: {
        l: 4
      }
    })]);

    if (resp && resp[0].data && resp[1].data) {
      commit("SET_FEATURED", resp[0].data);
      commit("SET_NEWITEMS", resp[1].data.products);
    }

    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
// CONCATENATED MODULE: ./src/store/home/index.js




/* harmony default export */ var home = ({
  namespaced: true,
  state: home_state,
  getters: getters_namespaceObject,
  mutations: mutations_namespaceObject,
  actions: actions_namespaceObject
});
// CONCATENATED MODULE: ./src/store/gallery/state.js
/* harmony default export */ var gallery_state = (function () {
  return {
    products: [],
    searchRes: [],
    categories: [],
    lastSort: null
  };
});
// CONCATENATED MODULE: ./src/store/gallery/getters.js

function productList(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.products && state.products.length > 0) {
    state.products.map(item => {
      let img = item.images ? item.images.find(img => img.imageType == "gallery") : null;
      let target = rootGetters["auth/isReseller"] ? "reseller" : "all";
      let product = {
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.fprice || "0",
        discount: item.discount ? item.discount.filter(el => el.target == target || el.target == "all") : [],
        image: img ? img.image : ""
      }; // Use largest discount

      product.discount.sort((a, b) => {
        return b.percent - a.percent;
      });
      ret.push(product);
    });
  }

  return ret;
}
function searchResults(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.searchRes && state.searchRes.length > 0) {
    state.searchRes.map(item => {
      let img = item.images ? item.images.find(img => img.imageType == "gallery") : null;
      let target = rootGetters["auth/isReseller"] ? "reseller" : "all";
      let product = {
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.fprice || "0",
        discount: item.discount ? item.discount.filter(el => el.target == target || el.target == "all") : [],
        image: img ? img.image : ""
      }; // Use largest discount

      product.discount.sort((a, b) => {
        return b.percent - a.percent;
      });
      ret.push(product);
    });
  }

  return ret;
}
function categoryList(state) {
  return state.categories.map(item => {
    item.path = item.name.toLowerCase();
    return item;
  });
}
// CONCATENATED MODULE: ./src/store/gallery/mutations.js

function SET_PRODUCTS(state, arr) {
  state.products = arr.slice();
}
function SET_SEARCH_RESULTS(state, arr) {
  state.searchRes = arr.slice();
}
function SET_CATEGORIES(state, arr) {
  state.categories = arr.slice();
}
function SET_LASTSORT(state, sort) {
  state.lastSort = sort;
}
function PUSH_PRODUCTS(state, arr) {
  state.products = state.products.concat(arr.slice());
}
// CONCATENATED MODULE: ./src/store/gallery/actions.js




const sortingFields = {
  "best-selling": "sold",
  "title-asc": "name",
  "title-desc": "name",
  "date-desc": "created",
  "date-asc": "created",
  "price-desc": "fprice",
  "price-asc": "fprice"
};
function pushProducts({
  commit
}, arr) {
  let last = arr.slice(-1).pop();
  commit("PUSH_PRODUCTS", arr);
  commit("SET_LASTSORT", last);
}
async function getGalleryItems({
  commit
}, {
  category,
  sort
}) {
  let resp;

  try {
    let cat = category ? category.toLowerCase() : "all";
    resp = await Promise.all([this.$axios.get(`/api/products/${cat}`, {
      params: {
        sort
      }
    }), this.$axios.get("api/categories")]);

    if (resp[0] || resp[1]) {
      if (resp[1].data) {
        commit("SET_CATEGORIES", resp[1].data);
      }

      if (resp[0].data && resp[0].data.count > 0) {
        let last = resp[0].data.products.slice(-1).pop();
        commit("SET_PRODUCTS", resp[0].data.products);
        commit("SET_LASTSORT", last);
      }
    }

    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
async function actions_getProducts({
  commit
}, {
  category,
  sort
}) {
  let resp;

  try {
    let cat = category ? category.toLowerCase() : "all";
    resp = await this.$axios.get(`/api/products/${cat}`, {
      params: {
        sort
      }
    });

    if (resp && resp.data) {
      if (resp.data.count > 0) {
        let last = resp.data.products.slice(-1).pop();
        commit("SET_PRODUCTS", resp.data.products);
        commit("SET_LASTSORT", last);
      }
    }

    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
async function getNextProducts({
  state
}, {
  category,
  sort
}) {
  let resp;

  try {
    let sortVal = null;
    let cat = category ? category.toLowerCase() : "all";
    let last = state.lastSort;

    if (sort && last) {
      sortVal = last[sortingFields[sort]];
    } else if (last) {
      sort = "date-desc";
      sortVal = last[sortingFields[sort]];
    }

    resp = await this.$axios.get(`/api/products/${cat}`, {
      params: {
        sort,
        last: sortVal,
        id: last._id
      }
    });

    if (resp && resp.data) {
      return resp.data.products;
    }

    return [];
  } catch (err) {
    return Promise.reject(err);
  }
}
async function searchProducts({
  commit
}, {
  search
}) {
  let resp;

  try {
    resp = await this.$axios.get("/api/products", {
      params: {
        s: search,
        l: 4
      }
    });

    if (resp && resp.data) {
      commit("SET_SEARCH_RESULTS", resp.data.products);
      return resp.data.count;
    }

    return false;
  } catch (err) {
    return Promise.reject(err);
  }
}
// CONCATENATED MODULE: ./src/store/gallery/index.js




/* harmony default export */ var gallery = ({
  namespaced: true,
  state: gallery_state,
  getters: gallery_getters_namespaceObject,
  mutations: gallery_mutations_namespaceObject,
  actions: gallery_actions_namespaceObject
});
// CONCATENATED MODULE: ./src/store/buy/state.js
/* harmony default export */ var buy_state = (function () {
  return {
    product: {},
    comments: [],
    related: []
  };
});
// CONCATENATED MODULE: ./src/store/buy/getters.js


function related(state, getters, rootState, rootGetters) {
  let ret = [];

  if (state.related && state.related.length > 0) {
    state.related.map(item => {
      let img = item.images ? item.images.find(img => img.imageType == "gallery") : null;
      let target = rootGetters["auth/isReseller"] ? "reseller" : "all";
      let product = {
        name: item.name,
        seoname: item.seoname,
        options: item.options,
        baseprice: item.fprice || "0",
        discount: item.discount ? item.discount.filter(el => el.target == target || el.target == "all") : [],
        image: img ? img.image : ""
      }; // Use highest discount

      product.discount.sort((a, b) => {
        return b.percent - a.percent;
      });
      ret.push(product);
    });
  }

  return ret;
}
function getters_product(state, getters, rootState, rootGetters) {
  let target = rootGetters["auth/isReseller"] ? "reseller" : "all";
  let ret = {
    id: state.product._id,
    name: state.product.name,
    seoname: state.product.seoname,
    category: state.product.category,
    description: state.product.description,
    details: state.product.details,
    options: state.product.options,
    minOrderQty: state.product.minOrderQuantity,
    sold: state.product.sold,
    baseprice: state.product.basePrice || "0",
    discount: state.product.discount ? state.product.discount.filter(el => el.target == target || el.target == "all") : [],
    images: state.product.images
  }; // Use largest discount

  ret.discount.sort((a, b) => {
    return b.percent - a.percent;
  });
  return ret;
}
function comments(state) {
  return state.comments;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// CONCATENATED MODULE: ./src/store/buy/mutations.js


function SET_PRODUCT(state, product) {
  state.product = objectSpread2_default()({}, product);
}
function SET_RELATED(state, arr) {
  state.related = arr.slice();
}
function SET_COMMENTS(state, arr) {
  state.comments = arr.slice();
}
function UNSHIFT_COMMENT(state, comment) {
  if (comment) state.comments.unshift(comment);
}
// CONCATENATED MODULE: ./src/store/buy/actions.js

async function getProductDetails({
  commit
}, {
  seoname
}) {
  let resp;

  try {
    resp = await this.$axios.get(`/api/products/buy/${seoname}`);

    if (resp && resp.data) {
      commit("SET_PRODUCT", resp.data);
      commit("SET_COMMENTS", resp.data.comments);
    }

    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
async function findRelatedProducts({
  commit
}, {
  pID,
  query,
  limit
}) {
  let resp;

  try {
    resp = await this.$axios.get(`/api/products/related/${pID}`, {
      params: {
        q: query,
        l: limit
      }
    });

    if (resp && resp.data) {
      if (resp.data.length > 0) {
        commit("SET_RELATED", resp.data);
      }
    }

    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
async function postComment({
  commit,
  rootGetters
}, {
  comment,
  product
}) {
  let resp;

  try {
    if (!rootGetters["auth/isVerified"]) {
      throw "You may only post when logged in and verified.";
    }

    resp = await this.$axios.post("/api/comments", {
      comment,
      author: rootGetters["auth/getCustomerID"],
      product
    });

    if (resp && resp.data) {
      commit("UNSHIFT_COMMENT", resp.data);
    }

    return true;
  } catch (err) {
    return Promise.reject(err);
  }
}
// CONCATENATED MODULE: ./src/store/buy/index.js




/* harmony default export */ var buy = ({
  namespaced: true,
  state: buy_state,
  getters: buy_getters_namespaceObject,
  mutations: buy_mutations_namespaceObject,
  actions: buy_actions_namespaceObject
});
// CONCATENATED MODULE: ./src/store/basket/state.js
function getInitialState() {
  return {
    basket_count: 0,
    basket_xsrf: ""
  };
}
/* harmony default export */ var basket_state = (function () {
  return getInitialState();
});
// CONCATENATED MODULE: ./src/store/basket/getters.js
function getXSRFToken(state) {
  return state.basket_xsrf;
}
function hasSession(state) {
  return !!state.basket_xsrf;
}
function itemsCount(state) {
  return state.basket_count;
}
// CONCATENATED MODULE: ./src/store/basket/mutations.js

function SET_XSRF_CART(state, xsrf) {
  state.basket_xsrf = xsrf;
}
function SET_CART_COUNT(state, count) {
  state.basket_count = count;
}
function RESET_CART(state) {
  Object.assign(state, getInitialState());
}
// CONCATENATED MODULE: ./src/store/basket/actions.js


function setXSRFToken({
  commit
}, xsrf) {
  commit("SET_XSRF_CART", xsrf);
}
function resetCart({
  commit
}) {
  commit("RESET_CART");
}
async function addToCart({
  commit
}, {
  product
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/basket", objectSpread2_default()({}, product));

    if (resp) {
      if (resp.data.xsrf) commit("SET_XSRF_CART", resp.data.xsrf);
      if (resp.data.count) commit("SET_CART_COUNT", resp.data.count);
    }

    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function updateCart({
  commit
}, {
  product
}) {
  let resp;

  try {
    resp = await this.$axios.patch("/api/basket", objectSpread2_default()({}, product));

    if (resp) {
      if (resp.data.xsrf) commit("SET_XSRF_CART", resp.data.xsrf);
      if (resp.data.count || resp.data.count == 0) commit("SET_CART_COUNT", resp.data.count);
    }

    return true;
  } catch (err) {
    if (err.response.status == 404) {
      commit("RESET_CART");
    }

    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function fetchCartDetails({
  commit
}) {
  let resp;

  try {
    resp = await this.$axios.get("/api/basket");

    if (resp && resp.data.basket) {
      if (resp.data.xsrf) commit("SET_XSRF_CART", resp.data.xsrf);
      if (resp.data.count || resp.data.count == 0) commit("SET_CART_COUNT", resp.data.count);
      return resp.data.basket;
    } else {
      commit("SET_CART_COUNT", 0);
    }

    return null;
  } catch (err) {
    if (err.response.status == 404) {
      commit("RESET_CART");
    }

    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function fetchHolidays({}, {
  year,
  month
}) {
  let resp;

  try {
    resp = await this.$axios.get("/api/invaliddates/checkout", {
      params: {
        year,
        month
      }
    });

    if (resp && resp.data) {
      return resp.data;
    }

    return null;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function checkETA({}, {
  target,
  type
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/basket/eta", {
      target,
      type
    });

    if (resp && resp.data) {
      return resp.data.eta;
    }

    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function placeOrder({
  commit,
  rootGetters
}, {
  order,
  price
}) {
  let resp;

  try {
    if (!rootGetters["auth/isVerified"]) {
      return Promise.reject("Account is not verified. Order can not be placed.");
    }

    resp = await this.$axios.post("/api/orders", objectSpread2_default()(objectSpread2_default()({}, order), {}, {
      price
    }));

    if (resp) {
      commit("SET_CART_COUNT", 0); // Clear
    }

    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
// CONCATENATED MODULE: ./src/store/basket/index.js




/* harmony default export */ var basket = ({
  namespaced: true,
  state: basket_state,
  getters: basket_getters_namespaceObject,
  mutations: basket_mutations_namespaceObject,
  actions: basket_actions_namespaceObject
});
// CONCATENATED MODULE: ./src/store/auth/state.js
function state_getInitialState() {
  return {
    authenticated: false,
    user: null,
    xsrf: ""
  };
}
/* harmony default export */ var auth_state = (function () {
  return state_getInitialState();
});
// CONCATENATED MODULE: ./src/store/auth/getters.js
function getters_getXSRFToken(state) {
  return state.xsrf;
}
function getCustomerType(state) {
  return state.user ? state.user.type : false;
}
function getCustomerID(state) {
  return state.user ? state.user.id : null;
}
function isAuthenticated(state) {
  return state.authenticated;
}
function isVerified(state) {
  return state.user ? state.user.status.isVerified : false;
}
function isReseller(state) {
  return state.user ? state.user.type === "reseller" && state.user.status.isResellerApproved : false;
}
// CONCATENATED MODULE: ./src/store/auth/mutations.js

function SET_BOOL_AUTH(state, bool) {
  state.authenticated = bool;
}
function SET_USER_AUTH(state, user) {
  state.user = user;
}
function SET_XSRF_AUTH(state, xsrf) {
  state.xsrf = xsrf;
}
function RESET_AUTH(state) {
  Object.assign(state, state_getInitialState());
}
// CONCATENATED MODULE: ./src/store/auth/actions.js

function actions_setXSRFToken({
  commit
}, xsrf) {
  commit("SET_XSRF_AUTH", xsrf);
}
function resetAuth({
  commit
}) {
  commit("RESET_AUTH");
}
async function signin({
  commit
}, {
  email,
  password
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/login", {
      email,
      password
    });

    if (resp && resp.data) {
      commit("SET_USER_AUTH", resp.data.user);
      commit("SET_XSRF_AUTH", resp.data.xsrf);
      commit("SET_BOOL_AUTH", true);
    }

    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function register({
  commit
}, {
  email,
  password,
  firstname,
  lastname,
  reseller
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/register", {
      email,
      password,
      firstname,
      lastname,
      accountType: reseller ? "reseller" : "regular"
    });

    if (resp && resp.data) {
      commit("SET_USER_AUTH", resp.data.user);
      commit("SET_XSRF_AUTH", resp.data.xsrf);
      commit("SET_BOOL_AUTH", true);
    }

    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function signout({
  commit
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/logout");
    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  } finally {
    commit("RESET_AUTH");
  }
}
async function fetchProfile({
  commit
}) {
  let resp;

  try {
    resp = await this.$axios.get("/api/profile");

    if (resp && resp.data) {
      // Refresh
      commit("SET_USER_AUTH", resp.data.customer);
      return resp.data.customer;
    }

    return {};
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function fetchOrders({}) {
  let resp;

  try {
    resp = await this.$axios.get("/api/orders");

    if (resp && resp.data) {
      return resp.data;
    }

    return [];
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function fetchOrderDetails({}, {
  orderID
}) {
  let resp;

  try {
    resp = await this.$axios.get(`/api/orders/${orderID}`);

    if (resp && resp.data) {
      return resp.data;
    }

    return null;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function cancelOrder({}, {
  orderID
}) {
  let resp;

  try {
    resp = await this.$axios.patch(`/api/orders/${orderID}`);
    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function editProfile({
  state
}, {
  firstname,
  lastname,
  address,
  phonenumber,
  notification
}) {
  let resp;

  try {
    resp = await this.$axios.patch("/api/profile", [{
      property: "firstname",
      value: firstname
    }, {
      property: "lastname",
      value: lastname
    }, {
      property: "address",
      value: address
    }, {
      property: "phonenumber",
      value: phonenumber
    }, {
      property: "notification",
      value: notification
    }]);

    if (resp && resp.data) {
      return resp.data.message;
    }

    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function sendSMS({}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/smstoken");
    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function sendCode({}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/token");
    return true;
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function verify({}, {
  email,
  token
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/verify", {
      email,
      token: token.toUpperCase()
    });

    if (resp && resp.data) {
      return resp.data.message;
    }

    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function verifySMS({}, {
  token
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/smsverify", {
      token: token.toUpperCase()
    });

    if (resp && resp.data) {
      return resp.data.message;
    }

    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function sendResetToken({}, {
  email
}) {
  let resp;

  try {
    resp = await this.$axios.post("/api/profile/password/reset", {
      email
    });

    if (resp && resp.data) {
      return resp.data.message;
    }

    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
async function changePW({}, {
  token,
  newpass,
  email
}) {
  let resp;

  try {
    resp = await this.$axios.patch("/api/profile/password/reset", {
      token: token.toUpperCase(),
      newpass,
      email
    });

    if (resp && resp.data) {
      return resp.data.message;
    }

    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(err.response ? err.response.data.error : "Unexpected error has occurred.");
  }
}
// CONCATENATED MODULE: ./src/store/auth/index.js




/* harmony default export */ var auth = ({
  namespaced: true,
  state: auth_state,
  getters: auth_getters_namespaceObject,
  mutations: auth_mutations_namespaceObject,
  actions: auth_actions_namespaceObject
});
// CONCATENATED MODULE: ./src/store/index.js







vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  const Store = new vuex_esm["a" /* default */].Store({
    modules: {
      home: home,
      gallery: gallery,
      buy: buy,
      basket: basket,
      auth: auth
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: true
  });
  return Store;
});
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js

const routes = [{
  path: "/",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "8b24"))
  }, {
    path: "products",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "4ac2"))
  }, {
    path: "products/:category",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "4ac2"))
  }, {
    path: "buy/:seoname",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "ec11"))
  }]
}, // PROFILE ROUTE
{
  path: "/profile",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "308d"))
  }, {
    path: "orders/:orderID",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "f1a6"))
  }, {
    path: "verify",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "0050"))
  }, {
    path: "verifySMS",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "91af"))
  }, {
    path: "edit",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "6c0f"))
  }]
}, // BASKET ROUTE
{
  path: "/basket",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "fe54"))
  }]
}, {
  path: "/checkout",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "713b")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "3847"))
  }]
}, // LOGIN & REGISTER ROUTE
{
  path: "/account",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, "589e")),
  children: [{
    path: "",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "eb77"))
  }, {
    path: "reset",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "afec"))
  }, {
    path: "resetpw",
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "d5cb"))
  }]
}, // ERROR 500
{
  path: "/error500",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "ce90"))
}, // ERROR 404
{
  path: "*",
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "e51e"))
}];
/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js




vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (function ()
/* { store, ssrContext } */
{
  const Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: (to, from, savedPosition) => {
      // no scroll if query has been changed
      if (from && to.path === from.path) {
        return false;
      } // console.log(savedPosition);


      if (savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(savedPosition);
          }, 200);
        });
      }

      if (to.hash) {
        return {
          selector: to.hash
        };
      }

      return {
        x: 0,
        y: 0
      };
    },
    routes: router_routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "history",
    base: "/"
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


;



/* harmony default export */ var _quasar_app = (async function (ssrContext) {
  // create store and router instances
  const store = typeof src_store === 'function' ? await src_store({
    Vue: vue_runtime_esm["a" /* default */],
    ssrContext
  }) : src_store;
  const router = typeof src_router === 'function' ? await src_router({
    Vue: vue_runtime_esm["a" /* default */],
    ssrContext,
    store
  }) : src_router; // make router instance available in store

  store.$router = router; // Create the app instantiation Object.
  // Here we inject the router, store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    router,
    store,
    render: h => h(App)
  };
  vue_plugin["a" /* default */].ssrUpdate({
    app,
    ssr: ssrContext
  }); // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    router
  };
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/boot/inject.js



const mixins = [];

const inject = function (bootCb) {
  return async function (ctx) {
    const {
      app,
      router,
      store
    } = ctx;
    let boot;

    if (typeof bootCb === "function") {
      const response = bootCb(ctx);
      boot = response.then ? await response : response;
    } else {
      boot = bootCb;
    }

    for (const name in boot) {
      const key = `$${name}`;

      if (mixins.indexOf(name) === -1) {
        mixins.push(name);
        vue_runtime_esm["a" /* default */].mixin({
          beforeCreate() {
            const options = this.$options;

            if (options[name]) {
              this[key] = options[name];
            } else if (options.parent) {
              this[key] = options.parent[key];
            }
          }

        });
      }

      app[name] = boot[name];
      store[key] = boot[name];
      router[key] = boot[name];
    }
  };
};

/* harmony default export */ var boot_inject = (inject);
// EXTERNAL MODULE: ./node_modules/axios-auth-refresh/dist/index.min.js
var index_min = __webpack_require__("ec02");
var index_min_default = /*#__PURE__*/__webpack_require__.n(index_min);

// CONCATENATED MODULE: ./src/boot/axios.js





/* harmony default export */ var boot_axios = (boot_inject(async function ({
  store,
  ssrContext
}) {
  const instance = axios_default.a.create({
    baseURL: "https://bake-free.co" // withCredentials: true

  });
  instance.interceptors.request.use(config => {
    if (!!ssrContext) {
      config.headers = ssrContext.req.headers; // config.skipAuthRefresh = true;
    }

    if (store.state.auth && store.state.auth.authenticated) {
      config.headers["x-csrf-token"] = store.state.auth.xsrf;
    } else {
      delete config.headers["x-csrf-token"];
    }

    if (store.state.basket && !!store.state.basket.basket_xsrf) {
      config.headers["x-csrf-cart"] = store.state.basket.basket_xsrf; // config.skipAuthRefresh = true;
    } else {
      delete config.headers["x-csrf-cart"];
    }

    return config;
  }, error => {
    return Promise.reject(error);
  });
  instance.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401 && error.config.url.indexOf("/api/basket") !== -1) {
      store.dispatch("basket/resetCart");
    }

    if (error.response.status === 403 || error.config.url.indexOf("/api/profile/refresh") !== -1) {
      store.dispatch("auth/resetAuth"); // redirect("/account");
    }

    return Promise.reject(error);
  });

  const refreshAuthLogic = fReq => instance.post("/api/profile/refresh").then(resp => {
    // Renew CSRF Token
    if (resp.data && resp.data.xsrf) {
      store.dispatch("auth/setXSRFToken", resp.data.xsrf);
    }

    return Promise.resolve();
  });

  index_min_default()(instance, refreshAuthLogic);
  return {
    axios: instance
  };
}));
// EXTERNAL MODULE: ./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js
var vuex_persistedstate_es = __webpack_require__("0e44");

// CONCATENATED MODULE: ./src/boot/persist-auth.js

;

/* harmony default export */ var persist_auth = (async ({
  store,
  ssrContext
}) => {
  const cookies =  false ? undefined : Cookies["a" /* default */]; // Authentication

  Object(vuex_persistedstate_es["a" /* default */])({
    key: "_VUEX_AUTH_WEB",
    paths: ["auth", "basket"],
    storage: {
      getItem: key => JSON.stringify(cookies.get(key)),
      setItem: (key, value) => {
        cookies.set(key, value, {
          path: "/",
          sameSite: "Lax",
          expires: 7,
          secure: !false
        });
      },
      removeItem: key => cookies.remove(key)
    }
  })(store);
});
// EXTERNAL MODULE: ./node_modules/vuex-shared-mutations/dist/vuex-shared-mutations.js
var vuex_shared_mutations = __webpack_require__("0759");
var vuex_shared_mutations_default = /*#__PURE__*/__webpack_require__.n(vuex_shared_mutations);

// CONCATENATED MODULE: ./src/boot/shared-auth.js


/* harmony default export */ var shared_auth = (async ({
  store
}) => {
  vuex_shared_mutations_default()({
    predicate: ["auth/SET_XSRF_AUTH", "auth/SET_BOOL_AUTH", "auth/SET_NAME_AUTH", "auth/RESET_AUTH", "basket/SET_XSRF_CART", "basket/SET_CART_COUNT", "basket/RESET_CART"]
  })(store);
});
// EXTERNAL MODULE: ./node_modules/sanitize-html/index.js
var sanitize_html = __webpack_require__("5e22");
var sanitize_html_default = /*#__PURE__*/__webpack_require__.n(sanitize_html);

// CONCATENATED MODULE: ./src/boot/sanitizer.js


 // export default async ({ app, Vue }) => {
//   Vue.prototype.$sanitize = sanitizeHTML;
// };

/* harmony default export */ var sanitizer = (boot_inject(async function () {
  return {
    sanitize: sanitize_html_default.a
  };
}));
// CONCATENATED MODULE: ./.quasar/client-prefetch.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
;

function getMatchedComponents(to, router) {
  const route = to ? to.matched ? to : router.resolve(to).route : router.currentRoute;

  if (!route) {
    return [];
  }

  return Array.prototype.concat.apply([], route.matched.map(m => {
    return Object.keys(m.components).map(key => {
      const comp = m.components[key];
      return {
        path: m.path,
        c: comp.options
        /* Vue.extend() */
        || comp
      };
    });
  }));
}

function addPreFetchHooks(router, store, publicPath) {
  // Add router hook for handling preFetch.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const urlPath = window.location.href.replace(window.location.origin, ''),
          matched = getMatchedComponents(to, router),
          prevMatched = getMatchedComponents(from, router);
    let diffed = false;
    const preFetchList = matched.filter((m, i) => {
      return diffed || (diffed = !prevMatched[i] || prevMatched[i].c !== m.c || m.path.indexOf('/:') > -1 // does it has params?
      );
    }).filter(m => m.c && typeof m.c.preFetch === 'function').map(m => m.c.preFetch);

    if (preFetchList.length === 0) {
      return next();
    }

    let hasRedirected = false;

    const redirect = url => {
      hasRedirected = true;
      next(url);
    };

    const proceed = () => {
      LoadingBar["a" /* default */].stop();

      if (hasRedirected === false) {
        next();
      }
    };

    LoadingBar["a" /* default */].start();
    preFetchList.reduce((promise, preFetch) => promise.then(() => hasRedirected === false && preFetch({
      store,
      currentRoute: to,
      previousRoute: from,
      redirect,
      urlPath,
      publicPath
    })), Promise.resolve()).then(proceed).catch(e => {
      console.error(e);
      proceed();
    });
  });
}
// CONCATENATED MODULE: ./.quasar/client-entry.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/
 // We load Quasar stylesheet file










vue_runtime_esm["a" /* default */].config.devtools = true;
vue_runtime_esm["a" /* default */].config.productionTip = false;
const client_entry_publicPath = `/`;

async function start() {
  const {
    app,
    store,
    router
  } = await _quasar_app(); // prime the store with server-initialized state.
  // the state is determined during SSR and inlined in the page markup.

  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
  }

  let hasRedirected = false;

  const redirect = url => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
    window.location.href = normalized;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');
  const bootFiles = [boot_axios, persist_auth, shared_auth, sanitizer];

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue;
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue: vue_runtime_esm["a" /* default */],
        ssrContext: null,
        redirect,
        urlPath,
        publicPath: client_entry_publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  const appInstance = new vue_runtime_esm["a" /* default */](app); // wait until router has resolved all async before hooks
  // and async components...

  router.onReady(() => {
    addPreFetchHooks(router, store, client_entry_publicPath);
    appInstance.$mount('#q-app');
  });
}

start();

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "31cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=app.180ac908.js.map