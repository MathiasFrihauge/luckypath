exports.ids = [6];
exports.modules = {

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(14).default
module.exports.__inject__ = function (context) {
  add("38c10676", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsletterForm.vue?vue&type=template&id=5791a552&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "newsletter-form"
  }, [_vm._ssrNode("<form data-v-5791a552><h2 class=\"text-center mb-4\" data-v-5791a552>Claim your deal on email</h2> <div class=\"form-group mb-3\" data-v-5791a552><input type=\"email\" id=\"email\" placeholder=\"Enter your email\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " class=\"form-control\" data-v-5791a552></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"btn btn-primary w-100 mt-1\" data-v-5791a552>" + (_vm.loading ? "<span role=\"status\" aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" data-v-5791a552></span> <span class=\"sr-only\" data-v-5791a552>Loading...</span>" : "Submit") + "</button></form> " + (_vm.message ? "<p" + _vm._ssrClass("mt-2 text-center", _vm.message.status) + " data-v-5791a552>" + _vm._ssrEscape(_vm._s(_vm.message.msg)) + "</p>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NewsletterForm.vue?vue&type=template&id=5791a552&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsletterForm.vue?vue&type=script&lang=js
/* harmony default export */ var NewsletterFormvue_type_script_lang_js = ({
  data() {
    return {
      // firstName: '',
      // lastName: '', 
      email: '',
      loading: false,
      message: null
    };
  },
  props: {
    listtype: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.message = null;
      try {
        const response = await this.$axios.$post('/api/subscribe', {
          email: this.email,
          campaignName: this.listtype
        });
        let url = response.url;
        window.location.href = url;
        if (response.status === 200) {
          this.message = {
            status: 'success',
            msg: response.message
          };
        } else {
          /*this.message = {
            status: 'error',
            msg: response.message,
          }
            */
        }
        this.email = '';
      } catch (error) {
        this.message = {
          status: 'error',
          msg: 'An error occurred. Please try again.'
        };
        console.error('Subscription error:', error);
      } finally {
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/NewsletterForm.vue?vue&type=script&lang=js
 /* harmony default export */ var components_NewsletterFormvue_type_script_lang_js = (NewsletterFormvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/NewsletterForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsletterFormvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5791a552",
  "5173da3f"
  
)

/* harmony default export */ var NewsletterForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterForm_vue_vue_type_style_index_0_id_5791a552_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterForm_vue_vue_type_style_index_0_id_5791a552_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterForm_vue_vue_type_style_index_0_id_5791a552_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterForm_vue_vue_type_style_index_0_id_5791a552_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterForm_vue_vue_type_style_index_0_id_5791a552_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".newsletter-form label[data-v-5791a552]{font-weight:600}.newsletter-form input[data-v-5791a552]{background:#ededed;border:1px solid #919191;border-radius:10px;font-size:19px;line-height:2.5rem}.newsletter-form .btn[data-v-5791a552]{box-shadow:0 4px 4px 0 rgba(0,0,0,.251);color:var(--white);font-size:19px;font-weight:800;line-height:56px;margin-bottom:5px;padding:0 59px;text-transform:uppercase}p.success[data-v-5791a552]{color:green}p.error[data-v-5791a552],p.success[data-v-5791a552]{border:1px solid;font-size:18px;padding:6px}p.error[data-v-5791a552]{color:red}@media (max-width:767px){p.error[data-v-5791a552],p.success[data-v-5791a552]{font-size:16px}.newsletter-form input[data-v-5791a552]{font-size:14px;line-height:1.5rem}.newsletter-form label[data-v-5791a552]{font-size:14px}.newsletter-form .btn[data-v-5791a552]{border-radius:7px;font-size:12px;line-height:32px;padding:0 22px}}@media (max-width:991px){.newsletter-form .btn[data-v-5791a552]{font-size:15px;line-height:40px;padding:0 34px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=newsletter-form.js.map