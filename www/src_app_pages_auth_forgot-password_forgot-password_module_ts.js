"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_forgot-password_forgot-password_module_ts"],{

/***/ 5352
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password-routing.module.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageRoutingModule: () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 7362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage
}];
class ForgotPasswordPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ForgotPasswordPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ForgotPasswordPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ForgotPasswordPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ForgotPasswordPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 1641
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.module.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPageModule: () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-routing.module */ 5352);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password.page */ 7362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







class ForgotPasswordPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ForgotPasswordPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ForgotPasswordPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ForgotPasswordPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ForgotPasswordPageModule, {
    declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ },

/***/ 7362
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordPage: () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 3683);

var _staticBlock;









function ForgotPasswordPage_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-skeleton-text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ForgotPasswordPage {
  constructor(fb, auth, router, toast, translate) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.translate = translate;
    this.loading = false;
    this.form = this.fb.group({
      identifier: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]] // email OU téléphone
    });
  }
  ngOnDestroy() {}
  submit() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loading) return;
      if (_this.form.invalid) {
        _this.form.markAllAsTouched();
        yield _this.showToast(_this.translate.instant('FORGOT_PASSWORD_PAGE.TOAST_IDENTIFIER_REQUIRED'));
        return;
      }
      const identifier = String(_this.form.value.identifier || '').trim();
      _this.loading = true;
      const payload = identifier.includes('@') ? {
        identifier,
        email: identifier
      } : {
        identifier,
        phone: identifier
      };
      _this.auth.forgotPassword(payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => _this.loading = false)).subscribe({
        next: function () {
          var _ref = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const cooldownSeconds = Math.max(0, Number(res?.retryAfterSeconds ?? 0) || 0);
            yield _this.showToast(_this.translate.instant(cooldownSeconds > 0 ? 'FORGOT_PASSWORD_PAGE.TOAST_CODE_ALREADY_SENT' : 'FORGOT_PASSWORD_PAGE.TOAST_CHECK_EMAIL_HINT', cooldownSeconds > 0 ? {
              seconds: cooldownSeconds
            } : {}));
            _this.router.navigateByUrl('/auth/forgot-password-sent', {
              state: {
                identifier,
                cooldownSeconds
              }
            });
          });
          return function next(_x) {
            return _ref.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref2 = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            const msg = err?.error?.message;
            yield _this.showToast(Array.isArray(msg) ? msg.join(', ') : msg || _this.translate.instant('FORGOT_PASSWORD_PAGE.TOAST_ERROR'));
          });
          return function error(_x2) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    })();
  }
  backToLogin() {
    this.router.navigateByUrl('/auth/login');
  }
  showToast(message) {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this2.toast.create({
        message,
        duration: 2400,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ForgotPasswordPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ForgotPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ForgotPasswordPage,
    selectors: [["app-forgot-password"]],
    standalone: false,
    decls: 43,
    vars: 25,
    consts: [[1, "fp", 3, "fullscreen"], [1, "top"], ["type", "button", 1, "top-btn", 3, "click"], ["name", "arrow-back-outline"], [1, "top-title"], [1, "top-spacer"], [1, "main"], [1, "illus"], [1, "illus-wrap"], [1, "illus-glow"], [1, "illus-img", 2, "background-image", "url(\"assets/img/Asset_6.png\")"], [1, "headline"], [1, "form", 3, "ngSubmit"], [1, "field"], [1, "focus-glow"], [1, "input-wrap"], [1, "icon"], ["name", "mail-outline"], ["type", "text", "autocomplete", "username", 3, "placeholder", "formControl"], ["type", "submit", 1, "cta", 3, "disabled"], [1, "cta-bg"], [1, "cta-inner"], [1, "cta-text"], ["name", "paper-plane-outline", 1, "send-ico"], [1, "cta-glow"], ["class", "cta-loading", 4, "ngIf"], [1, "bottom"], ["type", "button", 1, "back-link", 3, "click"], ["name", "chevron-back-outline"], [1, "cta-loading"], ["animated", "", 1, "btn-skeleton"]],
    template: function ForgotPasswordPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordPage_Template_button_click_2_listener() {
          return ctx.backToLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "main", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordPage_Template_form_ngSubmit_21_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15)(25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 21)(32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ForgotPasswordPage_div_37_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 26)(39, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordPage_Template_button_click_39_listener() {
          return ctx.backToLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "ion-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 11, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 13, "FORGOT_PASSWORD_PAGE.TOP_TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 15, "FORGOT_PASSWORD_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 17, "FORGOT_PASSWORD_PAGE.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 19, "FORGOT_PASSWORD_PAGE.IDENTIFIER_PLACEHOLDER"))("formControl", ctx.form.controls.identifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 21, "FORGOT_PASSWORD_PAGE.SEND_CODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 23, "FORGOT_PASSWORD_PAGE.BACK_TO_LOGIN"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSkeletonText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --primaryLight: var(--app-primary);\n  --bg: var(--app-bg);\n  --surface: var(--app-surface);\n  --border: var(--app-border);\n  --text: var(--app-ink);\n  --muted: var(--app-muted);\n}\n\n.fp[_ngcontent-%COMP%] {\n  --background: var(--bg);\n  background: var(--bg);\n  color: var(--text);\n  font-family: \"Plus Jakarta Sans\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n}\n\n.top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px 6px;\n  position: relative;\n  z-index: 2;\n}\n\n.top-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  border: 0;\n  background: transparent;\n  color: var(--app-ink);\n  display: grid;\n  place-items: center;\n}\n\n.top-btn[_ngcontent-%COMP%]:hover {\n  background: var(--app-surface-2);\n}\n\n.top-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--app-muted);\n}\n\n.top-spacer[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.main[_ngcontent-%COMP%] {\n  max-width: 420px;\n  margin: 0 auto;\n  padding: 8px 18px 26px;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.illus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0 6px;\n}\n\n.illus-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 160px;\n}\n\n.illus-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.illus-img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 160px;\n  height: 160px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.headline[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 22px;\n}\n\n.headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 900;\n  margin: 0 0 10px;\n  color: var(--app-ink);\n  letter-spacing: -0.02em;\n}\n\n.headline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 320px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: var(--app-muted);\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.field[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.focus-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.field[_ngcontent-%COMP%]:focus-within   .input-wrap[_ngcontent-%COMP%] {\n  border-color: var(--app-primary);\n  box-shadow: 0 0 0 3px var(--app-primary-soft);\n}\n\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 56px;\n  border-radius: 18px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.icon[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  color: var(--app-muted);\n  display: flex;\n  align-items: center;\n}\n\n.icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 56px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: var(--app-ink);\n  padding: 0 14px 0 10px;\n  font-size: 18px;\n}\n\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-muted-soft);\n}\n\n.cta[_ngcontent-%COMP%] {\n  position: relative;\n  height: 56px;\n  border: 0;\n  border-radius: 18px;\n  overflow: hidden;\n  padding: 0;\n  background: transparent;\n}\n\n.cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.85;\n}\n\n.cta-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 18px;\n  background: var(--app-primary);\n}\n\n.cta-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background: var(--primary);\n  border-radius: 18px;\n  transition: filter 200ms ease;\n}\n\n.cta[_ngcontent-%COMP%]:hover   .cta-inner[_ngcontent-%COMP%] {\n  filter: brightness(1.05);\n}\n\n.cta-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--app-on-primary);\n}\n\n.send-ico[_ngcontent-%COMP%] {\n  font-size: 22px;\n  transition: transform 220ms ease;\n}\n\n.cta[_ngcontent-%COMP%]:hover   .send-ico[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n\n.cta-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cta[_ngcontent-%COMP%]:hover   .cta-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.cta-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  z-index: 3;\n  background: var(--app-surface);\n}\n\n.btn-skeleton[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 18px;\n  border-radius: 999px;\n  opacity: 0.45;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 18px;\n  display: flex;\n  justify-content: center;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border: 0;\n  background: transparent;\n  color: var(--app-muted);\n  font-size: 14px;\n  font-weight: 700;\n  transition: color 200ms ease;\n}\n\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--primaryLight);\n}\n\n.back-link[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: transform 220ms ease;\n}\n\n.back-link[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  transform: translateX(-4px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrRkFDRTtBQUFKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBTUE7RUFDRSxnQ0FBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7QUFJRjs7QUFGQTtFQUNFLGdDQUFBO0VBQ0EsNkNBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUhBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLDRCQUFBO0FBT0Y7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtBQVFGOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVFGOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVFGOztBQUxBO0VBQ0Usd0JBQUE7QUFRRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBUUY7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUFRRjs7QUFOQTtFQUNFLDBCQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0FBVUY7O0FBUEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFVRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBVUY7O0FBUEE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQVVGOztBQVJBO0VBQ0UsMEJBQUE7QUFXRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQVdGOztBQVRBO0VBQ0UsMkJBQUE7QUFZRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXByaW1hcnk6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAtLXByaW1hcnlMaWdodDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIC0tYmc6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1zdXJmYWNlOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgLS1ib3JkZXI6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIC0tdGV4dDogdmFyKC0tYXBwLWluayk7XHJcbiAgLS1tdXRlZDogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLmZwIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWJnKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIGZvbnQtZmFtaWx5OlxyXG4gICAgXCJQbHVzIEpha2FydGEgU2Fuc1wiLFxyXG4gICAgc3lzdGVtLXVpLFxyXG4gICAgLWFwcGxlLXN5c3RlbSxcclxuICAgIFwiU2Vnb2UgVUlcIixcclxuICAgIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTRweCAxNnB4IDZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnRvcC1idG4ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9wLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbn1cclxuXHJcbi50b3AtdGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTZlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG4udG9wLXNwYWNlciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDhweCAxOHB4IDI2cHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbGx1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDAgNnB4O1xyXG59XHJcbi5pbGx1cy13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbn1cclxuLmlsbHVzLWdsb3cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmlsbHVzLWltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaGVhZGxpbmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbn1cclxuLmhlYWRsaW5lIGgxIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxufVxyXG4uaGVhZGxpbmUgcCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb2N1cy1nbG93IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5maWVsZDpmb2N1cy13aXRoaW4gLmlucHV0LXdyYXAge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxufVxyXG5cclxuLmlucHV0LXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pY29uIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwIGlucHV0IHtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgcGFkZGluZzogMCAxNHB4IDAgMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmlucHV0LXdyYXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkLXNvZnQpO1xyXG59XHJcblxyXG4uY3RhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY3RhOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjg1O1xyXG59XHJcblxyXG4uY3RhLWJnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5jdGEtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogNTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDIwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5jdGE6aG92ZXIgLmN0YS1pbm5lciB7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDUpO1xyXG59XHJcblxyXG4uY3RhLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5zZW5kLWljbyB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMjBtcyBlYXNlO1xyXG59XHJcbi5jdGE6aG92ZXIgLnNlbmQtaWNvIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxufVxyXG5cclxuLmN0YS1nbG93IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jdGE6aG92ZXIgLmN0YS1nbG93IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY3RhLWxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbn1cclxuXHJcbi5idG4tc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgb3BhY2l0eTogMC40NTtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFjay1saW5rIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2U7XHJcbn1cclxuLmJhY2stbGluazpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XHJcbn1cclxuXHJcbi5iYWNrLWxpbmsgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjIwbXMgZWFzZTtcclxufVxyXG4uYmFjay1saW5rOmhvdmVyIGlvbi1pY29uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_auth_forgot-password_forgot-password_module_ts.js.map