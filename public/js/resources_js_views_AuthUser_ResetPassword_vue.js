(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AuthUser_ResetPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AuthUser/ResetPassword.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AuthUser/ResetPassword.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/http */ "./resources/js/http/index.js");
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/authentication */ "./resources/js/services/authentication.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this = this;

    return {
      loading: false,
      form: {
        email: 'user@example.com',
        token: '123456'
      },
      rules: {
        email: [{
          required: true,
          trigger: 'blur',
          validator: function validator(rule, value, callback) {
            if (value === '') {
              return callback(new Error('Digite um email.'));
            }

            if (_this.validate('email', value)) {
              return callback(new Error('Digite um e-mail válido.'));
            }

            return callback();
          }
        }],
        token: [{
          required: true,
          trigger: 'blur',
          validator: function validator(rule, value, callback) {
            if (_this.validate('empty', value)) {
              return callback(new Error('Digite uma Token.'));
            }

            if (_this.validate('token', value)) {
              return callback(new Error('O campo Token deve conter pelo menos 6 caracteres.'));
            }

            return callback();
          }
        }]
      }
    };
  },
  methods: {
    submitForm: function submitForm() {
      var _this2 = this;

      this.$refs.loginForm.validate( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(valid) {
          var userLogin, req, user;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!valid) {
                    _context.next = 20;
                    break;
                  }

                  nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
                  _this2.loading = true;
                  userLogin = _http__WEBPACK_IMPORTED_MODULE_2__.default.authentication.userLogin;
                  _context.prev = 4;
                  _context.next = 7;
                  return userLogin(_this2.form);

                case 7:
                  req = _context.sent;
                  user = req.object;
                  (0,_services_authentication__WEBPACK_IMPORTED_MODULE_3__.logInUser)(user);

                  _this2.redirect('UserDashboard');

                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](4);
                  console.log(_context.t0);

                case 16:
                  nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
                  _this2.loading = false;
                  _context.next = 22;
                  break;

                case 20:
                  console.log('error submit!!');
                  return _context.abrupt("return", false);

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[4, 13]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
});

/***/ }),

/***/ "./resources/js/http/index.js":
/*!************************************!*\
  !*** ./resources/js/http/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var modulesFiles = __webpack_require__("./resources/js/http/modules sync recursive \\.js$");

var modules = modulesFiles.keys().reduce(function (modules, modulePath) {
  var moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  var value = modulesFiles(modulePath);
  modules[moduleName] = value["default"];
  return modules;
}, {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modules);

/***/ }),

/***/ "./resources/js/http/interceptor.js":
/*!******************************************!*\
  !*** ./resources/js/http/interceptor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/authentication */ "./resources/js/services/authentication.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/messages */ "./resources/js/utils/messages.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var http = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL:  true ? "".concat("http://localhost:8000", "/api") : 0,
  timeout: 60000
});
http.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(config) {
    var url, adminToken, userToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = config.url.split('/');

            if (url.includes('auth')) {
              _context.next = 12;
              break;
            }

            if (!url.includes('admin')) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return (0,_services_authentication__WEBPACK_IMPORTED_MODULE_2__.getAdmin)();

          case 5:
            adminToken = _context.sent;

            if (adminToken !== undefined && adminToken !== null) {
              config.headers['Authorization'] = "Bearer ".concat(adminToken.token);
            }

          case 7:
            if (!url.includes('user')) {
              _context.next = 12;
              break;
            }

            _context.next = 10;
            return (0,_services_authentication__WEBPACK_IMPORTED_MODULE_2__.getUser)();

          case 10:
            userToken = _context.sent;

            if (userToken !== undefined && userToken !== null) {
              config.headers['Authorization'] = "Bearer ".concat(userToken.token);
            }

          case 12:
            if (true) {
              console.log(config);
            }

            return _context.abrupt("return", config);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), function (error) {
  if (true) {
    console.error(error);
  }

  return Promise.reject(error);
});
http.interceptors.response.use(function (res) {
  if (res.config.method === 'post' && "local" === 'local') {
    console.log(res);
  }

  return res.data;
}, function (error) {
  var _error$response, _error$response$data;

  if (true) {
    console.error(error);
  }

  if (error.response === undefined) {
    return throwError(_utils_messages__WEBPACK_IMPORTED_MODULE_4__.default.serverErrorMessage);
  }

  throwError(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message);

  if (true) {
    console.error('Erro na requisição: ', error === null || error === void 0 ? void 0 : error.response);
  }

  return Promise.reject(error);
});

function throwError(message) {
  if (message === undefined) return;
  return (0,element_ui__WEBPACK_IMPORTED_MODULE_3__.Message)({
    type: 'error',
    message: message,
    title: 'Erro!',
    duration: 5 * 1000
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);

/***/ }),

/***/ "./resources/js/http/modules/authentication.js":
/*!*****************************************************!*\
  !*** ./resources/js/http/modules/authentication.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/http/interceptor */ "./resources/js/http/interceptor.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  userLogin: function userLogin(data) {
    return _http_interceptor__WEBPACK_IMPORTED_MODULE_0__.default.post('/auth/userLogin', data);
  },
  adminLogin: function adminLogin(data) {
    return _http_interceptor__WEBPACK_IMPORTED_MODULE_0__.default.post('/auth/adminLogin', data);
  },
  getUser: function getUser() {
    return _http_interceptor__WEBPACK_IMPORTED_MODULE_0__.default.get('/user');
  },
  getAdmin: function getAdmin() {
    return _http_interceptor__WEBPACK_IMPORTED_MODULE_0__.default.get('/admin');
  }
});

/***/ }),

/***/ "./resources/js/utils/messages.js":
/*!****************************************!*\
  !*** ./resources/js/utils/messages.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  serverErrorMessage: 'Erro ao conectar com o servidor, por favor tente mais tarde'
});

/***/ }),

/***/ "./resources/js/views/AuthUser/ResetPassword.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/AuthUser/ResetPassword.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_418f024d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=418f024d&scoped=true& */ "./resources/js/views/AuthUser/ResetPassword.vue?vue&type=template&id=418f024d&scoped=true&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/AuthUser/ResetPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ResetPassword_vue_vue_type_template_id_418f024d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPassword_vue_vue_type_template_id_418f024d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "418f024d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AuthUser/ResetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AuthUser/ResetPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/AuthUser/ResetPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AuthUser/ResetPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AuthUser/ResetPassword.vue?vue&type=template&id=418f024d&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/AuthUser/ResetPassword.vue?vue&type=template&id=418f024d&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_418f024d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_418f024d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_418f024d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=template&id=418f024d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AuthUser/ResetPassword.vue?vue&type=template&id=418f024d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AuthUser/ResetPassword.vue?vue&type=template&id=418f024d&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AuthUser/ResetPassword.vue?vue&type=template&id=418f024d&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "auth-content" }, [
    _c(
      "div",
      { staticClass: "card card-body" },
      [
        _c("i", { staticClass: "fa fa-user auth-icon" }),
        _vm._v(" "),
        _c("h1", [_vm._v("Restaurar senha")]),
        _vm._v(" "),
        _c(
          "el-form",
          {
            ref: "loginForm",
            staticClass: "login-form",
            attrs: {
              model: _vm.form,
              rules: _vm.rules,
              "auto-complete": "off",
              "label-position": "top"
            },
            nativeOn: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submitForm($event)
              }
            }
          },
          [
            _c(
              "el-row",
              { attrs: { gutter: 20 } },
              [
                _c(
                  "el-col",
                  { attrs: { span: 24 } },
                  [
                    _c(
                      "el-form-item",
                      { attrs: { label: "E-mail", prop: "email" } },
                      [
                        _c("el-input", {
                          attrs: {
                            placeholder: "E-mail",
                            type: "text",
                            autocomplete: "off"
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-col",
                  { attrs: { span: 24 } },
                  [
                    _c(
                      "el-form-item",
                      { attrs: { label: "Token", prop: "token" } },
                      [
                        _c("el-input", {
                          attrs: {
                            placeholder: "Token",
                            type: "text",
                            autocomplete: "off",
                            maxlength: "6",
                            onkeyup:
                              "this.value=this.value.replace(/[^\\d]/,'')",
                            oninput:
                              "javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                          },
                          model: {
                            value: _vm.form.token,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "token", $$v)
                            },
                            expression: "form.token"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("el-form-item", [
              _c(
                "button",
                { staticClass: "btn btn-primary btn-round btn-block" },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: _vm.loading ? "fa-spin fa-spinner" : "fa-lock"
                  }),
                  _vm._v(
                    "\n                        Validar\n                    "
                  )
                ]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "auth-button-group" }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.redirect("UserLogin")
                }
              }
            },
            [_vm._v("Fazer login")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.redirect("UserRegister")
                }
              }
            },
            [_vm._v("Fazer cadastro")]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/http/modules sync recursive \\.js$":
/*!***********************************************!*\
  !*** ./resources/js/http/modules/ sync \.js$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./authentication.js": "./resources/js/http/modules/authentication.js"
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
webpackContext.id = "./resources/js/http/modules sync recursive \\.js$";

/***/ })

}]);