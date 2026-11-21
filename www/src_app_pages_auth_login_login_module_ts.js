"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 3156
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 9966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage
}];
class LoginPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function LoginPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: LoginPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 7845
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ 3156);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ 9966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







class LoginPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function LoginPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: LoginPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_4__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ },

/***/ 9966
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _services_auth_google_sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/google-sign-in.service */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 3683);

var _staticBlock;











function LoginPage_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "LOGIN_PAGE.SUBMIT"));
  }
}
function LoginPage_ion_skeleton_text_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-skeleton-text", 36);
  }
}
function LoginPage_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "LOGIN_PAGE.GOOGLE_SIGNIN"));
  }
}
function LoginPage_ion_spinner_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-spinner", 37);
  }
}
class LoginPage {
  constructor(fb, auth, googleSignIn, router, route, toast, translate) {
    this.fb = fb;
    this.auth = auth;
    this.googleSignIn = googleSignIn;
    this.router = router;
    this.route = route;
    this.toast = toast;
    this.translate = translate;
    this.loading = false;
    this.googleLoading = false;
    this.showPassword = false;
    this.form = this.fb.group({
      // UI dit "téléphone", mais l’API actuelle attend "email" (comme dans ton historique)
      identifier: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]]
    });
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  submit() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loading) return;
      if (_this.form.invalid) {
        _this.form.markAllAsTouched();
        yield _this.showToast(_this.translate.instant('LOGIN_PAGE.TOAST_FILL_FIELDS'));
        return;
      }
      const identifier = (_this.form.value.identifier || '').trim();
      const password = _this.form.value.password || '';
      _this.loading = true;
      _this.auth.login(String(identifier).trim().toLowerCase(), String(password)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
        _this.loading = false;
      })).subscribe({
        next: () => {
          void _this.router.navigateByUrl(_this.safeRedirectUrl());
        },
        error: function () {
          var _ref = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            yield _this.showToast(_this.readError(err) || _this.translate.instant('LOGIN_PAGE.TOAST_INVALID_CREDENTIALS'));
          });
          return function error(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    })();
  }
  signInWithGoogle() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.googleLoading) return;
      _this2.googleLoading = true;
      try {
        const idToken = yield _this2.googleSignIn.signIn();
        // Un lien de parrainage peut mener ici (?ref=CODE): on le transmet pour
        // qu'un nouveau compte Google soit rattache a son parrain.
        const referralCode = _this2.route.snapshot.queryParamMap.get('ref') ?? _this2.route.snapshot.queryParamMap.get('referralCode') ?? undefined;
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this2.auth.loginWithGoogle(idToken, {
          referralCode: referralCode ?? undefined
        }));
        yield _this2.router.navigateByUrl(_this2.safeRedirectUrl());
      } catch (err) {
        if (_this2.googleSignIn.isUserCancellation(err)) return;
        const message = err instanceof _services_auth_google_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.GoogleSignInError && err.code === 'NOT_CONFIGURED' ? _this2.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_NOT_CONFIGURED') : _this2.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_FAILED');
        yield _this2.showToast(message);
      } finally {
        _this2.googleLoading = false;
      }
    })();
  }
  safeRedirectUrl() {
    const redirect = this.route.snapshot.queryParamMap.get('redirect')?.trim() || '/home';
    return redirect.startsWith('/') && !redirect.startsWith('//') ? redirect : '/home';
  }
  readError(err) {
    if (err?.error?.message) {
      return Array.isArray(err.error.message) ? err.error.message.join(', ') : String(err.error.message);
    }
    return null;
  }
  showToast(message) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this3.toast.create({
        message,
        duration: 2200,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_google_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.GoogleSignInService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LoginPage,
    selectors: [["app-login"]],
    standalone: false,
    decls: 67,
    vars: 44,
    consts: [[1, "login", 3, "fullscreen"], [1, "topbar"], ["routerLink", "/landing", 1, "icon-btn"], ["name", "arrow-back-outline"], [1, "wrap"], [1, "head"], [1, "logo"], ["src", "../../../../assets/img/Asset_7.png", "alt", ""], [1, "gold"], [1, "card"], [1, "field"], [1, "input"], ["name", "mail-outline", 1, "left"], ["type", "text", 3, "placeholder", "formControl"], [1, "row"], ["routerLink", "/auth/forgot-password", 1, "link"], ["name", "lock-closed-outline", 1, "left"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type", "formControl"], ["type", "button", 1, "eye", 3, "click"], [3, "name"], [1, "cta", 3, "click", "disabled"], [4, "ngIf"], ["animated", "", "class", "btn-skeleton", 4, "ngIf"], [1, "social"], [1, "sep"], [1, "line"], [1, "txt"], ["type", "button", 1, "google-btn", 3, "click", "disabled"], ["viewBox", "0 0 48 48", "aria-hidden", "true", 1, "gsvg"], ["fill", "#EA4335", "d", "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"], ["fill", "#4285F4", "d", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"], ["fill", "#FBBC05", "d", "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"], ["fill", "#34A853", "d", "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"], ["name", "crescent", 4, "ngIf"], [1, "foot"], ["routerLink", "/auth/register"], ["animated", "", 1, "btn-skeleton"], ["name", "crescent"]],
    template: function LoginPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "100 FCFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "ion-icon", 12)(26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 10)(29, "div", 14)(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "ion-icon", 16)(38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginPage_Template_button_click_39_listener() {
          return ctx.togglePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginPage_Template_button_click_42_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, LoginPage_span_43_Template, 3, 3, "span", 21)(44, LoginPage_ion_skeleton_text_44_Template, 1, 0, "ion-skeleton-text", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 23)(46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginPage_Template_button_click_52_listener() {
          return ctx.signInWithGoogle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "path", 29)(55, "path", 30)(56, "path", 31)(57, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, LoginPage_span_58_Template, 3, 3, "span", 21)(59, LoginPage_ion_spinner_59_Template, 1, 0, "ion-spinner", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 34)(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 22, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 24, "LOGIN_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 26, "LOGIN_PAGE.SUBTITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 28, "LOGIN_PAGE.IDENTIFIER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 30, "LOGIN_PAGE.IDENTIFIER_PLACEHOLDER"))("formControl", ctx.form.controls.identifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 32, "LOGIN_PAGE.PASSWORD_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](35, 34, "LOGIN_PAGE.FORGOT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("formControl", ctx.form.controls.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 36, "LOGIN_PAGE.TOGGLE_PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx.showPassword ? "eye-outline" : "eye-off-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](50, 38, "LOGIN_PAGE.OR_CONTINUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.googleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.googleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.googleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](63, 40, "LOGIN_PAGE.NEW_HERE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](66, 42, "LOGIN_PAGE.CREATE_ACCOUNT"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --login-muted: var(--app-muted);\n  --login-stroke: var(--app-border);\n}\n\n.login[_ngcontent-%COMP%] {\n  --background: transparent;\n  color: var(--app-ink);\n  background: var(--app-bg);\n}\n\n.topbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 14px);\n  left: 16px;\n  z-index: 5;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--login-stroke);\n  border-radius: 16px;\n  color: var(--app-ink);\n  background: var(--app-surface-2);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  width: min(100%, 440px);\n  min-height: 100%;\n  margin: 0 auto;\n  padding: calc(env(safe-area-inset-top) + 78px) 18px calc(env(safe-area-inset-bottom) + 30px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.head[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  text-align: center;\n}\n\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 18px 0 8px;\n  color: var(--app-ink);\n  font-size: clamp(2rem, 8vw, 2.45rem);\n  line-height: 1.05;\n}\n\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto;\n  color: var(--login-muted);\n  font-size: 0.84rem;\n  line-height: 1.65;\n}\n\n.gold[_ngcontent-%COMP%] {\n  color: var(--app-warning);\n  font-weight: 800;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  margin: 0 auto;\n  overflow: hidden;\n  border: 1px solid var(--app-border-strong);\n  border-radius: 24px;\n  background: var(--app-primary-soft);\n  box-shadow: none;\n}\n\n.logo[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  object-fit: contain;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 22px;\n  border: 1px solid var(--login-stroke);\n  border-radius: 28px;\n  background: var(--app-surface);\n  box-shadow: var(--app-shadow);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 8px 3px;\n  color: var(--app-muted);\n  font-size: 0.71rem;\n  font-weight: 750;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.row[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n  font-size: 0.7rem;\n  font-weight: 750;\n  text-decoration: none;\n}\n\n.input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 54px;\n  padding: 0 46px;\n  border: 1px solid var(--app-border);\n  border-radius: 17px;\n  outline: 0;\n  color: var(--app-ink);\n  background: var(--app-surface);\n  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;\n}\n\n.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-primary);\n  background: var(--app-surface);\n  box-shadow: none;\n}\n\n.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-muted);\n}\n\n.input[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15px;\n  z-index: 1;\n  transform: translateY(-50%);\n  color: var(--app-muted);\n  font-size: 20px;\n  text-transform: lowercase;\n}\n\n.input[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  width: 38px;\n  height: 38px;\n  border: 0;\n  transform: translateY(-50%);\n  color: var(--app-muted);\n  background: transparent;\n}\n\n.cta[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 54px;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  border-radius: 17px;\n  color: var(--app-on-primary);\n  background: var(--app-primary);\n  box-shadow: var(--app-shadow-brand);\n  font-weight: 800;\n}\n\n.cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  box-shadow: none;\n}\n\n.btn-skeleton[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 18px;\n  margin: 0 auto;\n}\n\n.social[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 54px;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  border: 1px solid var(--app-border);\n  border-radius: 17px;\n  color: var(--app-ink);\n  background: var(--app-surface);\n  font-size: 0.95rem;\n  font-weight: 700;\n  box-shadow: none;\n  transition: transform 0.15s var(--app-ease, ease);\n}\n.google-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.985);\n}\n.google-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n}\n.google-btn[_ngcontent-%COMP%]   .gsvg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex: 0 0 auto;\n}\n.google-btn[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n.sep[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 10px;\n}\n\n.sep[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 1px;\n  flex: 1;\n  background: var(--app-border);\n}\n\n.sep[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  color: var(--app-ink);\n  font-size: 0.63rem;\n  font-weight: 750;\n  letter-spacing: 0.08em;\n}\n\n.foot[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: var(--app-muted);\n  text-align: center;\n  font-size: 0.83rem;\n}\n\n.foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  color: var(--app-primary);\n  font-weight: 800;\n  text-decoration: none;\n}\n\n@media (min-height: 820px) {\n  .wrap[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding-top: calc(env(safe-area-inset-top) + 62px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw0RkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUFlLGFBQUE7QUFFZjs7QUFBQTs7RUFFRSxrQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpRkFDRTtBQUVKOztBQUdBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtBQUFGO0FBRUU7RUFDRSx1QkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxrREFBQTtFQUpGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1sb2dpbi1tdXRlZDogdmFyKC0tYXBwLW11dGVkKTtcclxuICAtLWxvZ2luLXN0cm9rZTogdmFyKC0tYXBwLWJvcmRlcik7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJnKTtcclxufVxyXG5cclxuLnRvcGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxNHB4KTtcclxuICBsZWZ0OiAxNnB4O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5pY29uLWJ0biB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sb2dpbi1zdHJva2UpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgd2lkdGg6IG1pbigxMDAlLCA0NDBweCk7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDc4cHgpIDE4cHggY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAzMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZCBoMSB7XHJcbiAgbWFyZ2luOiAxOHB4IDAgOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDh2dywgMi40NXJlbSk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XHJcbn1cclxuXHJcbi5oZWFkIHAge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6IHZhcigtLWxvZ2luLW11dGVkKTtcclxuICBmb250LXNpemU6IDAuODRyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XHJcbn1cclxuXHJcbi5nb2xkIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLXdhcm5pbmcpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDcycHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dvOjphZnRlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5sb2dvIHNwYW4sXHJcbi5sb2dvIGltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDU0cHg7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxvZ2luLXN0cm9rZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYXBwLXNoYWRvdyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5maWVsZCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDNweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICBmb250LXNpemU6IDAuNzFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDc1MDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJvdyAubGluayB7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBmb250LXdlaWdodDogNzUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnB1dCBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIHBhZGRpbmc6IDAgNDZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMThzIGVhc2UsXHJcbiAgICBib3gtc2hhZG93IDAuMThzIGVhc2UsXHJcbiAgICBiYWNrZ3JvdW5kIDAuMThzIGVhc2U7XHJcbn1cclxuXHJcbi5pbnB1dCBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uaW5wdXQgLmxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcblxyXG4uaW5wdXQgLmV5ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiA4cHg7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jdGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTRweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWFwcC1zaGFkb3ctYnJhbmQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jdGE6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1za2VsZXRvbiB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNvY2lhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmdvb2dsZS1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTRweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIHZhcigtLWFwcC1lYXNlLCBlYXNlKTtcclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4NSk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcblxyXG4gIC5nc3ZnIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uc2VwIC5saW5lIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4uc2VwIC50eHQge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXNpemU6IDAuNjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDc1MDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG59XHJcblxyXG4uZm9vdCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjgzcmVtO1xyXG59XHJcblxyXG4uZm9vdCBhIHtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogODIwcHgpIHtcclxuICAud3JhcCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDYycHgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map