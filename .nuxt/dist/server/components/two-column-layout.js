exports.ids = [10];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".howto_play_section .container-lg{width:1630px}.howto_play_section img{border-radius:13px}.howto_play_section .col-md-6.pe-4{padding-right:18px!important}.howto_play_section .col-md-6.ps-4{padding-left:18px!important}.howto_play_section .row:nth-child(3n+2) .col-md-6.pe-4{padding-left:50px!important}.howto_play_section .row:nth-child(3n+2) .col-md-6.ps-4{padding-right:50px!important}.howto_play_section h3{font-size:30px;font-weight:800;margin-bottom:19px}.howto_play_section p{font-size:24px;font-weight:300;margin-bottom:33px}.howto_play_section p:last-child{margin-bottom:0}.howto_play_section ul{list-style:disc;padding-left:26px}.howto_play_section ul li{font-size:24px;font-weight:200;margin-bottom:12px}.howto_play_section ul li:last-child{margin-bottom:0}.howto_play_section .row{margin-bottom:80px}.howto_play_section .row:last-child{margin-bottom:0}section.howto_play_section{padding-bottom:50px}@media (max-width:991px){.howto_play_section .col-md-6.ps-4{padding-left:20px!important}.howto_play_section .col-md-6.pe-4{padding-right:10px!important}.howto_play_section h3{font-size:20px;margin-bottom:8px}.howto_play_section p{font-size:14px;margin-bottom:12px}.howto_play_section .col-md-6.ps-4{padding-left:0}.howto_play_section .row{margin-bottom:35px}.howto_play_section ul li{font-size:15px;margin-bottom:8px}.howto_play_section ul{padding-left:20px}.howto_play_section .row:nth-child(3n+2) .col-md-6.ps-4{padding-right:16px!important}.howto_play_section .row:nth-child(3n+2) .col-md-6.pe-4{padding-left:16px!important}.howto_play_section ul li{font-size:14px;margin-bottom:6px}}@media (max-width:767px){.howto_play_section h3{font-size:18px;margin-bottom:9px}.howto_play_section p{font-size:12px;margin-bottom:12px}.howto_play_section img{border-radius:13px;margin-top:20px}section.howto_play_section{padding:25px 0 10px}.howto_play_section .col-md-6.ps-4{padding-left:12px!important}.howto_play_section .row{margin-bottom:22px}.howto_play_section ul li{text-align:left}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(14).default
module.exports.__inject__ = function (context) {
  add("745cbfe4", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TwoColumnLayout.vue?vue&type=template&id=1914dfb0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "howto_play_section pt-0"
  }, [_vm._ssrNode("<div class=\"container container-lg\"><div class=\"row align-items-lg-center align-items-start\">" + (_vm.layout === 'left-content-right-image' ? "<div data-aos=\"fade-right\" class=\"col-md-6 pe-4\"><h3>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> <div>" + _vm._s(_vm.description) + "</div></div> <div data-aos=\"fade-left\" class=\"col-md-6 ps-4\"><img src=\"images/casino-listing.jpg\" alt></div>" : "<!---->") + " " + (_vm.layout === 'left-image-right-content' ? "<div data-aos=\"fade-right\" class=\"col-md-6 ps-4 order-1 order-md-0\"><img src=\"images/stay-updated.jpg\" alt></div> <div data-aos=\"fade-left\" class=\"col-md-6 pe-4\"><h3>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> <div>" + _vm._s(_vm.description) + "</div></div>" : "<!---->") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TwoColumnLayout.vue?vue&type=template&id=1914dfb0

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TwoColumnLayout.vue?vue&type=script&lang=js
/* harmony default export */ var TwoColumnLayoutvue_type_script_lang_js = ({
  name: "TwoColumnLayout",
  props: {
    title: {
      type: String,
      required: true,
      default: () => ''
    },
    description: {
      type: String,
      required: true,
      default: () => ''
    },
    image: {
      type: String,
      required: true,
      default: () => ''
    },
    layout: {
      type: String,
      required: true,
      default: () => 'left-image-right-content'
    }
  }
});
// CONCATENATED MODULE: ./components/TwoColumnLayout.vue?vue&type=script&lang=js
 /* harmony default export */ var components_TwoColumnLayoutvue_type_script_lang_js = (TwoColumnLayoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/TwoColumnLayout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TwoColumnLayoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c83d14c"
  
)

/* harmony default export */ var TwoColumnLayout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnLayout_vue_vue_type_style_index_0_id_1914dfb0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnLayout_vue_vue_type_style_index_0_id_1914dfb0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnLayout_vue_vue_type_style_index_0_id_1914dfb0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnLayout_vue_vue_type_style_index_0_id_1914dfb0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwoColumnLayout_vue_vue_type_style_index_0_id_1914dfb0_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=two-column-layout.js.map