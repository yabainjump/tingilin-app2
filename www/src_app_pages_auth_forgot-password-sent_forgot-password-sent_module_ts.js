"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_forgot-password-sent_forgot-password-sent_module_ts"],{

/***/ 1566
/*!****************************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password-sent/forgot-password-sent-routing.module.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordSentPageRoutingModule: () => (/* binding */ ForgotPasswordSentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _forgot_password_sent_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-sent.page */ 2144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _forgot_password_sent_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordSentPage
}];
class ForgotPasswordSentPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ForgotPasswordSentPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ForgotPasswordSentPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ForgotPasswordSentPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ForgotPasswordSentPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 6151
/*!********************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password-sent/forgot-password-sent.module.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordSentPageModule: () => (/* binding */ ForgotPasswordSentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _forgot_password_sent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-sent-routing.module */ 1566);
/* harmony import */ var _forgot_password_sent_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password-sent.page */ 2144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class ForgotPasswordSentPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ForgotPasswordSentPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ForgotPasswordSentPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ForgotPasswordSentPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forgot_password_sent_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordSentPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ForgotPasswordSentPageModule, {
    declarations: [_forgot_password_sent_page__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordSentPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forgot_password_sent_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordSentPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ },

/***/ 2144
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password-sent/forgot-password-sent.page.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordSentPage: () => (/* binding */ ForgotPasswordSentPage)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 3683);

var _staticBlock;









function ForgotPasswordSentPage_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.identifier);
  }
}
function ForgotPasswordSentPage_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "FORGOT_PASSWORD_SENT_PAGE.SUBMIT"));
  }
}
function ForgotPasswordSentPage_ion_skeleton_text_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-skeleton-text", 27);
  }
}
class ForgotPasswordSentPage {
  constructor(fb, auth, router, toast, translate) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.translate = translate;
    this.secondsLeft = 59;
    this.loading = false;
    this.resending = false;
    this.identifier = '';
    this.initialCooldownSeconds = 59;
    this.form = this.fb.group({
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(4)]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]]
    });
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state ?? history.state ?? {};
    this.identifier = String(state?.identifier).trim() || '';
    this.initialCooldownSeconds = Math.max(1, Number(state?.cooldownSeconds ?? 59) || 59);
  }
  ionViewDidEnter() {
    this.startCountdown(this.initialCooldownSeconds);
  }
  ionViewWillLeave() {
    this.stopCountdown();
  }
  ngOnDestroy() {
    this.stopCountdown();
  }
  submit() {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loading) return;
      if (!_this.identifier) {
        yield _this.showToast(_this.translate.instant('FORGOT_PASSWORD_SENT_PAGE.TOAST_MISSING_IDENTIFIER'));
        _this.backToForgot();
        return;
      }
      if (_this.form.invalid) {
        _this.form.markAllAsTouched();
        yield _this.showToast(_this.translate.instant('FORGOT_PASSWORD_SENT_PAGE.TOAST_INVALID_FORM'));
        return;
      }
      const code = String(_this.form.value.code ?? '').trim();
      const newPassword = String(_this.form.value.newPassword ?? '');
      const confirmPassword = String(_this.form.value.confirmPassword ?? '');
      if (newPassword !== confirmPassword) {
        yield _this.showToast(_this.translate.instant('FORGOT_PASSWORD_SENT_PAGE.TOAST_PASSWORD_MISMATCH'));
        return;
      }
      const payload = _this.identifier.includes('@') ? {
        identifier: _this.identifier,
        email: _this.identifier,
        code,
        newPassword
      } : {
        identifier: _this.identifier,
        phone: _this.identifier,
        code,
        newPassword
      };
      _this.loading = true;
      _this.auth.resetPassword(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => _this.loading = false)).subscribe({
        next: function () {
          var _ref = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this.showToast(_this.translate.instant('FORGOT_PASSWORD_SENT_PAGE.TOAST_RESET_SUCCESS'));
            _this.router.navigateByUrl('/auth/login');
          });
          return function next() {
            return _ref.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref2 = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            const msg = err?.error?.message;
            yield _this.showToast(Array.isArray(msg) ? msg.join(', ') : msg || _this.translate.instant('FORGOT_PASSWORD_SENT_PAGE.TOAST_INVALID_OR_EXPIRED'));
          });
          return function error(_x) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    })();
  }
  resend() {
    var _this2 = this;
    if (this.secondsLeft > 0 || this.resending || !this.identifier) return;
    const payload = this.identifier.includes('@') ? {
      identifier: this.identifier,
      email: this.identifier
    } : {
      identifier: this.identifier,
      phone: this.identifier
    };
    this.resending = true;
    this.auth.forgotPassword(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => this.resending = false)).subscribe({
      next: function () {
        var _ref3 = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const cooldownSeconds = Math.max(1, Number(res?.retryAfterSeconds ?? 59) || 59);
          yield _this2.showToast(_this2.translate.instant(Number(res?.retryAfterSeconds ?? 0) > 0 ? 'FORGOT_PASSWORD_SENT_PAGE.TOAST_CODE_ALREADY_SENT' : 'FORGOT_PASSWORD_SENT_PAGE.TOAST_RESEND_HINT', Number(res?.retryAfterSeconds ?? 0) > 0 ? {
            seconds: cooldownSeconds
          } : {}));
          _this2.initialCooldownSeconds = cooldownSeconds;
          _this2.startCountdown(cooldownSeconds);
        });
        return function next(_x2) {
          return _ref3.apply(this, arguments);
        };
      }(),
      error: function () {
        var _ref4 = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          const msg = err?.error?.message;
          yield _this2.showToast(Array.isArray(msg) ? msg.join(', ') : msg || _this2.translate.instant('FORGOT_PASSWORD_SENT_PAGE.TOAST_RESEND_FAILED'));
        });
        return function error(_x3) {
          return _ref4.apply(this, arguments);
        };
      }()
    });
  }
  backToLogin() {
    this.router.navigateByUrl('/auth/login');
  }
  backToForgot() {
    this.router.navigateByUrl('/auth/forgot-password');
  }
  startCountdown(seconds = 59) {
    this.stopCountdown();
    this.secondsLeft = Math.max(1, Number(seconds) || 59);
    this.timerId = setInterval(() => {
      this.secondsLeft = Math.max(0, this.secondsLeft - 1);
      if (this.secondsLeft === 0) this.stopCountdown();
    }, 1000);
  }
  stopCountdown() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  get mmss() {
    const mm = String(Math.floor(this.secondsLeft / 60)).padStart(2, '0');
    const ss = String(this.secondsLeft % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }
  showToast(message) {
    var _this3 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this3.toast.create({
        message,
        duration: 2200,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ForgotPasswordSentPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ForgotPasswordSentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ForgotPasswordSentPage,
    selectors: [["app-forgot-password-sent"]],
    standalone: false,
    decls: 44,
    vars: 36,
    consts: [[1, "sent", 3, "fullscreen"], [1, "top-line"], [1, "wrap"], [1, "icon-area"], [1, "icon-glow"], [1, "icon-circle"], ["name", "key-outline", 1, "mail"], [1, "text"], ["class", "identifier", 4, "ngIf"], [1, "form", 3, "ngSubmit"], ["type", "text", "inputmode", "numeric", "maxlength", "6", 1, "input", 3, "placeholder", "formControl"], ["type", "password", "autocomplete", "new-password", 1, "input", 3, "placeholder", "formControl"], ["type", "submit", 1, "primary", 3, "disabled"], ["class", "label", 4, "ngIf"], ["animated", "", "class", "btn-skeleton", 4, "ngIf"], [1, "shimmer"], [1, "timer"], ["name", "timer-outline"], [1, "nums"], ["type", "button", 1, "link-btn", 3, "click", "disabled"], [1, "footer"], ["type", "button", 1, "footer-btn", 3, "click"], ["name", "arrow-back-outline"], [1, "blob", "a"], [1, "blob", "b"], [1, "identifier"], [1, "label"], ["animated", "", 1, "btn-skeleton"]],
    template: function ForgotPasswordSentPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ForgotPasswordSentPage_p_14_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordSentPage_Template_form_ngSubmit_15_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ForgotPasswordSentPage_span_23_Template, 3, 3, "span", 13)(24, ForgotPasswordSentPage_ion_skeleton_text_24_Template, 1, 0, "ion-skeleton-text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordSentPage_Template_button_click_33_listener() {
          return ctx.resend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 20)(38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordSentPage_Template_button_click_38_listener() {
          return ctx.backToLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "div", 23)(43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 18, "FORGOT_PASSWORD_SENT_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 20, "FORGOT_PASSWORD_SENT_PAGE.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.identifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 22, "FORGOT_PASSWORD_SENT_PAGE.CODE_PLACEHOLDER"))("formControl", ctx.form.controls.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 24, "FORGOT_PASSWORD_SENT_PAGE.NEW_PASSWORD_PLACEHOLDER"))("formControl", ctx.form.controls.newPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 26, "FORGOT_PASSWORD_SENT_PAGE.CONFIRM_PASSWORD_PLACEHOLDER"))("formControl", ctx.form.controls.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 28, "FORGOT_PASSWORD_SENT_PAGE.RESEND_IN"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.mmss);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.secondsLeft > 0 || ctx.resending);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.resending ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 30, "FORGOT_PASSWORD_SENT_PAGE.RESENDING") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 32, "FORGOT_PASSWORD_SENT_PAGE.RESEND"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 34, "FORGOT_PASSWORD_PAGE.BACK_TO_LOGIN"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --bg: var(--app-bg);\n  --surface: var(--app-surface);\n  --muted: var(--app-muted);\n}\n\n.sent[_ngcontent-%COMP%] {\n  --background: var(--bg);\n  background: var(--bg);\n  color: var(--app-ink);\n  font-family: \"Plus Jakarta Sans\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n  position: relative;\n  overflow: hidden;\n}\n\n.top-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--app-primary);\n  opacity: 0.6;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  max-width: 420px;\n  margin: 0 auto;\n  min-height: 100%;\n  padding: 26px 18px 86px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 18px;\n  position: relative;\n  z-index: 2;\n}\n\n.icon-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 6px;\n  position: relative;\n}\n\n.icon-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.icon-circle[_ngcontent-%COMP%] {\n  width: 112px;\n  height: 112px;\n  border-radius: 999px;\n  background: var(--surface);\n  border: 1px solid var(--app-border);\n  display: grid;\n  place-items: center;\n  box-shadow: none;\n  position: relative;\n}\n\n.mail[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 52px;\n}\n\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 340px;\n  font-size: 16px;\n  color: var(--app-muted);\n  line-height: 1.5;\n}\n\n.identifier[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  color: var(--app-ink) !important;\n  font-weight: 700;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  padding: 0 14px;\n  outline: none;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.input[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-muted);\n  font-weight: 500;\n}\n\n.input[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-primary);\n  box-shadow: none;\n}\n\n.primary[_ngcontent-%COMP%] {\n  position: relative;\n  height: 56px;\n  border-radius: 999px;\n  border: 0;\n  background: var(--primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  font-size: 16px;\n  box-shadow: none;\n  overflow: hidden;\n}\n\n.primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.03);\n}\n\n.primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n}\n\n.label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.btn-skeleton[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 180px;\n  height: 18px;\n  border-radius: 999px;\n  opacity: 0.45;\n  margin: 0 auto;\n}\n\n.shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  transform: translateX(-120%);\n  background: transparent;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_shimmer 1.6s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  100% {\n    transform: translateX(120%);\n  }\n}\n.timer[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  color: var(--app-muted);\n  font-weight: 700;\n}\n\n.timer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.nums[_ngcontent-%COMP%] {\n  color: var(--app-ink);\n  font-variant-numeric: tabular-nums;\n  margin-left: 6px;\n}\n\n.link-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--app-ink);\n  font-weight: 800;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n\n.link-btn[_ngcontent-%COMP%]:disabled {\n  color: var(--app-muted);\n  text-decoration: none;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  display: flex;\n  justify-content: center;\n  z-index: 2;\n}\n\n.footer-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--app-muted);\n  font-weight: 800;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.footer-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n\n.blob[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.blob.a[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 260px;\n  top: -50px;\n  right: -60px;\n  background: var(--app-primary-soft);\n}\n\n.blob.b[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  bottom: -80px;\n  left: -90px;\n  background: var(--app-primary-soft);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtc2VudC9mb3Jnb3QtcGFzc3dvcmQtc2VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0ZBQ0U7RUFLRixrQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBSEY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlBO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFFRjs7QUFDQTtFQUNFO0lBQ0UsMkJBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUFJRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnREFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFJRjs7QUFEQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBQU1GOztBQUpBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FBT0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wcmltYXJ5OiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgLS1iZzogdmFyKC0tYXBwLWJnKTtcclxuICAtLXN1cmZhY2U6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAtLW11dGVkOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uc2VudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LWZhbWlseTpcclxuICAgIFwiUGx1cyBKYWthcnRhIFNhbnNcIixcclxuICAgIHN5c3RlbS11aSxcclxuICAgIC1hcHBsZS1zeXN0ZW0sXHJcbiAgICBcIlNlZ29lIFVJXCIsXHJcbiAgICBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udG9wLWxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgbWF4LXdpZHRoOiA0MjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI2cHggMThweCA4NnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDE4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5pY29uLWFyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb24tZ2xvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmljb24tY2lyY2xlIHtcclxuICB3aWR0aDogMTEycHg7XHJcbiAgaGVpZ2h0OiAxMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWlsIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLnRleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxufVxyXG4udGV4dCBwIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5pZGVudGlmaWVyIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluaykgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5wcmltYXJ5OmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wMyk7XHJcbn1cclxuLnByaW1hcnk6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uYnRuLXNrZWxldG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIG9wYWNpdHk6IDAuNDU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zaGltbWVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAlKTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGFuaW1hdGlvbjogc2hpbW1lciAxLjZzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWVyIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi50aW1lciBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5udW1zIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4ubGluay1idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDJweDtcclxufVxyXG4ubGluay1idG46ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiBjYWxjKDE4cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmZvb3Rlci1idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuLmZvb3Rlci1idG46aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLmJsb2Ige1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJsb2IuYSB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgdG9wOiAtNTBweDtcclxuICByaWdodDogLTYwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbn1cclxuLmJsb2IuYiB7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgYm90dG9tOiAtODBweDtcclxuICBsZWZ0OiAtOTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_auth_forgot-password-sent_forgot-password-sent_module_ts.js.map