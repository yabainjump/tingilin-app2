"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_register_register_module_ts"],{

/***/ 4408
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageRoutingModule: () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage
}];
class RegisterPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function RegisterPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RegisterPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 7353
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageModule: () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ 4408);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.page */ 6706);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var src_app_shared_language_switch_language_switch_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/language-switch/language-switch.module */ 2043);
/* harmony import */ var src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/region-picker/region-picker.module */ 1815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;









class RegisterPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function RegisterPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: RegisterPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_3__.RegisterPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_language_switch_language_switch_module__WEBPACK_IMPORTED_MODULE_6__.LanguageSwitchModule, src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_7__.RegionPickerModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RegisterPageModule, {
    declarations: [_register_page__WEBPACK_IMPORTED_MODULE_4__.RegisterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_3__.RegisterPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_language_switch_language_switch_module__WEBPACK_IMPORTED_MODULE_6__.LanguageSwitchModule, src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_7__.RegionPickerModule]
  });
})();

/***/ },

/***/ 6706
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPage: () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
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
/* harmony import */ var _shared_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/language-switch/language-switch.component */ 8492);
/* harmony import */ var _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/region-picker/region-picker.component */ 8728);

var _staticBlock;













function RegisterPage_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", c_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r1.label, " ");
  }
}
function RegisterPage_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "REGISTER_PAGE.REFERRAL_WELCOME_HINT"), " ");
  }
}
function RegisterPage_span_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "REGISTER_PAGE.SUBMIT"));
  }
}
function RegisterPage_ion_skeleton_text_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-skeleton-text", 51);
  }
}
function RegisterPage_span_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "REGISTER_PAGE.GOOGLE_SIGNUP"));
  }
}
function RegisterPage_ion_spinner_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-spinner", 52);
  }
}
const PASSWORD_RULE = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
// 8+ caractères, 1 majuscule, 1 caractère spécial
class RegisterPage {
  constructor(fb, auth, route, router, toast, translate, googleSignIn) {
    this.fb = fb;
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.toast = toast;
    this.translate = translate;
    this.googleSignIn = googleSignIn;
    this.loading = false;
    this.showPassword = false;
    this.selectedRegion = null;
    this.redirectAfterOnboarding = '/tabs/home';
    // mini liste (tu pourras l’étendre)
    this.countryCodes = [{
      code: '+225',
      label: '🇨🇮 +225'
    }, {
      code: '+237',
      label: '🇨🇲 +237'
    }, {
      code: '+221',
      label: '🇸🇳 +221'
    }, {
      code: '+234',
      label: '🇳🇬 +234'
    }, {
      code: '+33',
      label: '🇫🇷 +33'
    }];
    this.form = this.fb.group({
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      countryCode: ['+225', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(PASSWORD_RULE)]],
      referralCode: [''],
      terms: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]],
      // Jeu d'argent: declaration 18+ obligatoire (verifiee aussi par l'API).
      adult: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]]
    });
    this.googleLoading = false;
  }
  /**
   * Inscription Google depuis ce formulaire: seule la case 18+ est exigee
   * (Google fournit nom et email). Le code de parrainage saisi et la region
   * choisie sont transmis pour ne pas les perdre.
   */
  signUpWithGoogle() {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.googleLoading || _this.loading) return;
      if (_this.form.controls.adult.value !== true) {
        _this.form.controls.adult.markAsTouched();
        yield _this.showToast(_this.translate.instant('REGISTER_PAGE.TOAST_ADULT_REQUIRED'));
        return;
      }
      _this.googleLoading = true;
      try {
        const idToken = yield _this.googleSignIn.signIn();
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this.auth.loginWithGoogle(idToken, {
          region: _this.selectedRegion ?? undefined,
          referralCode: String(_this.form.controls.referralCode.value ?? ''),
          isAdult: true
        }));
        yield _this.router.navigateByUrl(_this.redirectAfterOnboarding || '/home', {
          replaceUrl: true
        });
      } catch (err) {
        if (_this.googleSignIn.isUserCancellation(err)) return;
        const message = err instanceof _services_auth_google_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.GoogleSignInError && err.code === 'NOT_CONFIGURED' ? _this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_NOT_CONFIGURED') : _this.translate.instant('LOGIN_PAGE.TOAST_GOOGLE_FAILED');
        yield _this.showToast(message);
      } finally {
        _this.googleLoading = false;
      }
    })();
  }
  ngOnInit() {
    const ref = String(this.route.snapshot.queryParamMap.get('ref') ?? this.route.snapshot.queryParamMap.get('referralCode') ?? '').trim().toUpperCase();
    if (ref) {
      this.form.patchValue({
        referralCode: ref
      });
    }
    const redirect = String(this.route.snapshot.queryParamMap.get('redirect') ?? '').trim();
    if (redirect.startsWith('/')) {
      this.redirectAfterOnboarding = redirect;
    }
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onRegionChange(region) {
    this.selectedRegion = region;
  }
  get canSubmit() {
    return !!this.selectedRegion;
  }
  submit() {
    var _this2 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.loading) return;
      if (!_this2.selectedRegion) {
        yield _this2.showToast(_this2.translate.instant('REGISTER_PAGE.TOAST_REGION_REQUIRED'));
        return;
      }
      if (_this2.form.controls.adult.value !== true) {
        _this2.form.controls.adult.markAsTouched();
        yield _this2.showToast(_this2.translate.instant('REGISTER_PAGE.TOAST_ADULT_REQUIRED'));
        return;
      }
      if (_this2.form.invalid) {
        _this2.form.markAllAsTouched();
        yield _this2.showToast(_this2.translate.instant('REGISTER_PAGE.TOAST_INVALID_FORM'));
        return;
      }
      const v = _this2.form.value;
      // Téléphone complet
      const phoneFull = `${v.countryCode}${String(v.phone).replace(/\s+/g, '')}`;
      _this2.loading = true;
      const dto = {
        email: String(v.email ?? '').trim().toLowerCase(),
        password: String(v.password ?? ''),
        firstName: String(v.firstName ?? '').trim(),
        lastName: String(v.lastName ?? '').trim(),
        phone: String(phoneFull),
        region: _this2.selectedRegion,
        referralCode: String(v.referralCode ?? '').trim().toUpperCase() || undefined,
        isAdult: v.adult === true
      };
      _this2.auth.register(dto).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
        _this2.loading = false;
      })).subscribe({
        next: function () {
          var _ref = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this2.showToast(_this2.translate.instant('REGISTER_PAGE.TOAST_CREATED'));
            _this2.router.navigate(['/onboarding'], {
              replaceUrl: true,
              queryParams: {
                redirect: _this2.redirectAfterOnboarding
              }
            });
          });
          return function next() {
            return _ref.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref2 = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            yield _this2.showToast(_this2.readError(err) || _this2.translate.instant('REGISTER_PAGE.TOAST_CREATE_FAILED'));
          });
          return function error(_x) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    })();
  }
  readError(err) {
    const msg = err?.error?.message;
    if (!msg) return null;
    return Array.isArray(msg) ? msg.join(', ') : String(msg);
  }
  showToast(message) {
    var _this3 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this3.toast.create({
        message,
        duration: 2400,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RegisterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_google_sign_in_service__WEBPACK_IMPORTED_MODULE_4__.GoogleSignInService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: RegisterPage,
    selectors: [["app-register"]],
    standalone: false,
    decls: 133,
    vars: 118,
    consts: [[1, "register", 3, "fullscreen"], [1, "topbar"], ["routerLink", "/auth/login", 1, "back"], ["name", "chevron-back-outline"], [1, "top-title"], [3, "compact"], [1, "wrap"], [1, "subtitle"], [1, "primary"], [1, "language-choice"], [1, "language-label"], [1, "region-choice"], [1, "region-title"], [1, "region-hint"], [3, "regionChange", "region"], [1, "form", 3, "ngSubmit"], [1, "grid-2"], [1, "field"], ["type", "text", 3, "placeholder", "formControl"], ["type", "email", 3, "placeholder", "formControl"], [1, "phone-row"], [1, "cc-select", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", 3, "placeholder", "formControl"], ["class", "hint", 4, "ngIf"], [1, "password"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type", "formControl"], ["type", "button", 1, "eye", 3, "click"], [3, "name"], [1, "hint"], [1, "terms"], [3, "formControl"], [1, "terms-text"], [1, "terms", "adult"], ["type", "submit", 1, "cta", 3, "disabled"], [4, "ngIf"], ["animated", "", "class", "btn-skeleton", 4, "ngIf"], [1, "social"], [1, "sep"], [1, "line"], [1, "txt"], ["type", "button", 1, "google-btn", 3, "click", "disabled"], ["viewBox", "0 0 48 48", "aria-hidden", "true", 1, "gsvg"], ["fill", "#EA4335", "d", "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"], ["fill", "#4285F4", "d", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"], ["fill", "#FBBC05", "d", "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"], ["fill", "#34A853", "d", "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"], ["name", "crescent", 4, "ngIf"], [1, "foot"], ["routerLink", "/auth/login"], [3, "value"], ["animated", "", 1, "btn-skeleton"], ["name", "crescent"]],
    template: function RegisterPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-language-switch", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "100 FCFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 9)(20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-language-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 11)(25, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "app-region-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("regionChange", function RegisterPage_Template_app_region_picker_regionChange_31_listener($event) {
          return ctx.onRegionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function RegisterPage_Template_form_ngSubmit_32_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 16)(34, "div", 17)(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 17)(41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 17)(47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 17)(53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 17)(59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 20)(63, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, RegisterPage_option_64_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 17)(68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, RegisterPage_div_73_Template, 3, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 16)(75, "div", 17)(76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 17)(82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 17)(88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](92, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegisterPage_Template_button_click_93_listener() {
          return ctx.togglePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](95, "ion-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "ion-checkbox", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](105, "ion-checkbox", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](110, RegisterPage_span_110_Template, 3, 3, "span", 35)(111, RegisterPage_ion_skeleton_text_111_Template, 1, 0, "ion-skeleton-text", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 37)(113, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](118, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegisterPage_Template_button_click_119_listener() {
          return ctx.signUpWithGoogle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](121, "path", 43)(122, "path", 44)(123, "path", 45)(124, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](125, RegisterPage_span_125_Template, 3, 3, "span", 35)(126, RegisterPage_ion_spinner_126_Template, 1, 0, "ion-spinner", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 56, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 58, "REGISTER_PAGE.TOP_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("compact", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 60, "REGISTER_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 62, "REGISTER_PAGE.SUBTITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 64, "REGISTER_PAGE.LANGUAGE_PROMPT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 66, "REGISTER_PAGE.REGION_TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 68, "REGISTER_PAGE.REGION_HINT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("region", ctx.selectedRegion);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 70, "REGISTER_PAGE.LAST_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](39, 72, "REGISTER_PAGE.LAST_NAME_PLACEHOLDER"))("formControl", ctx.form.controls.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](43, 74, "REGISTER_PAGE.FIRST_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](45, 76, "REGISTER_PAGE.FIRST_NAME_PLACEHOLDER"))("formControl", ctx.form.controls.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 78, "REGISTER_PAGE.USERNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 80, "REGISTER_PAGE.USERNAME_PLACEHOLDER"))("formControl", ctx.form.controls.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 82, "COMMON.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](57, 84, "REGISTER_PAGE.EMAIL_PLACEHOLDER"))("formControl", ctx.form.controls.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](61, 86, "COMMON.PHONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.form.controls.countryCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.countryCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](66, 88, "REGISTER_PAGE.PHONE_PLACEHOLDER"))("formControl", ctx.form.controls.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](70, 90, "REGISTER_PAGE.REFERRAL_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](72, 92, "REGISTER_PAGE.REFERRAL_PLACEHOLDER"))("formControl", ctx.form.controls.referralCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.controls.referralCode.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](78, 94, "COMMON.COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](80, 96, "REGISTER_PAGE.COUNTRY_PLACEHOLDER"))("formControl", ctx.form.controls.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](84, 98, "COMMON.CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](86, 100, "REGISTER_PAGE.CITY_PLACEHOLDER"))("formControl", ctx.form.controls.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](90, 102, "COMMON.PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("formControl", ctx.form.controls.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](94, 104, "LOGIN_PAGE.TOGGLE_PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ctx.showPassword ? "eye-off-outline" : "eye-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](98, 106, "REGISTER_PAGE.PASSWORD_HINT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.form.controls.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](103, 108, "REGISTER_PAGE.TERMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.form.controls.adult);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](108, 110, "REGISTER_PAGE.ADULT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.loading || !ctx.canSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](117, 112, "LOGIN_PAGE.OR_CONTINUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.googleLoading || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.googleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.googleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](129, 114, "REGISTER_PAGE.ALREADY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](132, 116, "REGISTER_PAGE.LOGIN_LINK"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _shared_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_13__.LanguageSwitchComponent, _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_14__.RegionPickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --p: var(--app-primary);\n}\n\n.register[_ngcontent-%COMP%] {\n  --background: transparent;\n  color: var(--app-ink);\n  position: relative;\n  background: var(--app-bg);\n}\n\n.register[_ngcontent-%COMP%]::before, \n.register[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%]::before {\n  top: -80px;\n  right: -80px;\n}\n\n.register[_ngcontent-%COMP%]::after {\n  bottom: -90px;\n  left: -90px;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: calc(env(safe-area-inset-top) + 10px) 16px 10px;\n  border-bottom: 1px solid var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  background: var(--app-surface);\n}\n\n.back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 15px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  display: grid;\n  place-items: center;\n}\n\n.top-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--app-ink);\n  text-align: center;\n}\n\n.topbar[_ngcontent-%COMP%]   app-language-switch[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 470px;\n  margin: 0 auto;\n  padding: 22px 18px calc(env(safe-area-inset-bottom) + 30px);\n  color: var(--app-ink);\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: clamp(2rem, 8vw, 2.45rem);\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  margin: 18px 0 6px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0 18px;\n  color: var(--app-muted);\n  font-size: 13px;\n}\n\n.primary[_ngcontent-%COMP%] {\n  color: var(--p);\n  font-weight: 900;\n}\n\n.language-choice[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 18px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.language-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--app-muted);\n}\n\n.region-choice[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  padding: 16px 14px;\n  border-radius: 22px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.region-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  padding-left: 4px;\n  font-size: 15px;\n  font-weight: 900;\n  letter-spacing: -0.01em;\n  color: var(--app-ink);\n}\n\n.region-hint[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  padding-left: 4px;\n  font-size: 11.5px;\n  line-height: 1.5;\n  color: var(--app-muted);\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border: 1px solid var(--app-border);\n  border-radius: 28px;\n  background: var(--app-surface);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--app-muted);\n  margin: 2px 0 8px 6px;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  border-radius: 17px;\n  padding: 0 16px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  color: var(--app-ink);\n  outline: none;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-primary);\n  box-shadow: none;\n}\n\n.phone-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.cc[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 14px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  font-weight: 800;\n  color: var(--app-ink);\n  flex: 0 0 auto;\n}\n\n.password[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n\n.eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 0;\n  background: transparent;\n  color: var(--app-muted);\n}\n\n.terms[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 4px 6px 2px;\n}\n\n.terms[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --size: 18px;\n  --checkbox-background-checked: var(--p);\n  --checkmark-color: var(--app-on-primary);\n  --border-color: var(--app-border);\n  --border-color-checked: var(--p);\n}\n\n.terms-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.35;\n  color: var(--app-muted);\n}\n\n.link[_ngcontent-%COMP%] {\n  color: var(--p);\n  text-decoration: underline;\n  font-weight: 700;\n}\n\n.cta[_ngcontent-%COMP%] {\n  height: 56px;\n  border: 0;\n  border-radius: 18px;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-size: 18px;\n  font-weight: 900;\n  box-shadow: var(--app-shadow-brand);\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.75;\n}\n\n.btn-skeleton[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 18px;\n  border-radius: 999px;\n  opacity: 0.45;\n}\n\n.sep[_ngcontent-%COMP%] {\n  margin: 18px 0 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.line[_ngcontent-%COMP%] {\n  height: 1px;\n  flex: 1;\n  background: var(--app-border);\n}\n\n.sep-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--app-muted);\n  font-weight: 800;\n}\n\n.social[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.social-btn[_ngcontent-%COMP%] {\n  height: 52px;\n  border-radius: 18px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  color: var(--app-ink);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-weight: 800;\n  font-size: 12px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.foot[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n  color: var(--app-muted);\n}\n\n.foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--p);\n  font-weight: 900;\n  margin-left: 8px;\n  text-decoration: none;\n}\n\n.cc-select[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 12px;\n  border-radius: 18px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  color: var(--app-ink);\n  font-weight: 800;\n  outline: none;\n}\n\n@media (max-width: 370px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hint[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 11px;\n  color: var(--app-muted);\n  padding-left: 6px;\n}\n\n\n\n.social[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 54px;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  border: 1px solid var(--app-border);\n  border-radius: 17px;\n  color: var(--app-ink);\n  background: var(--app-surface);\n  font-size: 0.95rem;\n  font-weight: 700;\n  box-shadow: none;\n  transition: transform 0.15s var(--app-ease, ease);\n}\n.google-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.985);\n}\n.google-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n}\n.google-btn[_ngcontent-%COMP%]   .gsvg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex: 0 0 auto;\n}\n.google-btn[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n.sep[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 10px;\n}\n\n.sep[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 1px;\n  flex: 1;\n  background: var(--app-border);\n}\n\n.sep[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  color: var(--app-ink);\n  font-size: 0.63rem;\n  font-weight: 750;\n  letter-spacing: 0.08em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSx1QkFBQTtBQUVSOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTs7RUFDbUIsYUFBQTtBQUluQjs7QUFIQTtFQUFvQixVQUFBO0VBQVksWUFBQTtBQVFoQzs7QUFQQTtFQUFtQixhQUFBO0VBQWUsV0FBQTtBQVlsQzs7QUFWQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdEQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsOEJBQUE7QUFhRjs7QUFWQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFhRjs7QUFWQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFhRjs7QUFWQTtFQUNFLGNBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFhRjs7QUFYQTtFQUFXLGVBQUE7RUFBaUIsZ0JBQUE7QUFnQjVCOztBQWRBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFpQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlCRjs7QUFkQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFpQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlCRjs7QUFkQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWlCRjs7QUFkQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBaUJGOztBQWRBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtBQWlCRjs7QUFkQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFpQkY7O0FBZkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFrQkY7O0FBZkE7RUFDRSxrQkFBQTtBQWtCRjs7QUFoQkE7RUFBa0IsbUJBQUE7QUFvQmxCOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBc0JGOztBQW5CQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQXNCRjs7QUFwQkE7RUFDRSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7QUF1QkY7O0FBckJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUF3QkY7O0FBdEJBO0VBQVEsZUFBQTtFQUFpQiwwQkFBQTtFQUE0QixnQkFBQTtBQTRCckQ7O0FBMUJBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUE2QkY7O0FBM0JBO0VBQWdCLGFBQUE7QUErQmhCOztBQTdCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBZ0NGOztBQTdCQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWdDRjs7QUE5QkE7RUFBUSxXQUFBO0VBQWEsT0FBQTtFQUFTLDZCQUFBO0FBb0M5Qjs7QUFuQ0E7RUFBWSxlQUFBO0VBQWlCLHNCQUFBO0VBQXdCLHlCQUFBO0VBQTJCLHVCQUFBO0VBQXlCLGdCQUFBO0FBMkN6Rzs7QUF6Q0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBNENGOztBQTFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTZDRjs7QUEzQ0E7RUFBUSxXQUFBO0VBQWEsWUFBQTtBQWdEckI7O0FBOUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBaURGOztBQS9DQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFrREY7O0FBL0NBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQWtERjs7QUEvQ0E7RUFDRTtJQUNFLDBCQUFBO0VBa0RGO0FBQ0Y7QUEvQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFpREY7O0FBOUNBLHdEQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFpREY7O0FBOUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7QUFpREY7QUEvQ0U7RUFDRSx1QkFBQTtBQWlESjtBQTlDRTtFQUNFLFlBQUE7QUFnREo7QUE3Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUErQ0o7QUE1Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQThDSjs7QUExQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQTZDRjs7QUExQ0E7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0FBNkNGOztBQTFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBNkNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyAtLXA6IHZhcigtLWFwcC1wcmltYXJ5KTsgfVxuXG4ucmVnaXN0ZXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJnKTtcbn1cblxuLnJlZ2lzdGVyOjpiZWZvcmUsXG4ucmVnaXN0ZXI6OmFmdGVyIHsgZGlzcGxheTogbm9uZTsgfVxuLnJlZ2lzdGVyOjpiZWZvcmUgeyB0b3A6IC04MHB4OyByaWdodDogLTgwcHg7IH1cbi5yZWdpc3Rlcjo6YWZ0ZXIgeyBib3R0b206IC05MHB4OyBsZWZ0OiAtOTBweDsgfVxuXG4udG9wYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTBweCkgMTZweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xufVxuXG4uYmFjayB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4udG9wLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvcGJhciBhcHAtbGFuZ3VhZ2Utc3dpdGNoIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXgtd2lkdGg6IDQ3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjJweCAxOHB4IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMzBweCk7XG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgOHZ3LCAyLjQ1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIG1hcmdpbjogMThweCAwIDZweDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgMCAxOHB4O1xuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByaW1hcnkgeyBjb2xvcjogdmFyKC0tcCk7IGZvbnQtd2VpZ2h0OiA5MDA7IH1cblxuLmxhbmd1YWdlLWNob2ljZSB7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xufVxuXG4ubGFuZ3VhZ2UtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xufVxuXG4ucmVnaW9uLWNob2ljZSB7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XG59XG5cbi5yZWdpb24tdGl0bGUge1xuICBtYXJnaW46IDAgMCA0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG59XG5cbi5yZWdpb24taGludCB7XG4gIG1hcmdpbjogMCAwIDEycHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBmb250LXNpemU6IDExLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XG59XG5cbi5ncmlkLTIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTJweDtcbn1cblxuLmZpZWxkIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gIG1hcmdpbjogMnB4IDAgOHB4IDZweDtcbn1cblxuLmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5maWVsZCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucGhvbmUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNjIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4ucGFzc3dvcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFzc3dvcmQgaW5wdXQgeyBwYWRkaW5nLXJpZ2h0OiA0OHB4OyB9XG4uZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG59XG5cbi50ZXJtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDRweCA2cHggMnB4O1xufVxuLnRlcm1zIGlvbi1jaGVja2JveCB7XG4gIC0tc2l6ZTogMThweDtcbiAgLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXApO1xuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlcik7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXApO1xufVxuLnRlcm1zLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcbn1cbi5saW5rIHsgY29sb3I6IHZhcigtLXApOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4uY3RhIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LWJyYW5kKTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmN0YTpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNzU7IH1cblxuLmJ0bi1za2VsZXRvbiB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgb3BhY2l0eTogMC40NTtcbn1cblxuLnNlcCB7XG4gIG1hcmdpbjogMThweCAwIDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cbi5saW5lIHsgaGVpZ2h0OiAxcHg7IGZsZXg6IDE7IGJhY2tncm91bmQ6IHZhcigtLWFwcC1ib3JkZXIpOyB9XG4uc2VwLXRleHQgeyBmb250LXNpemU6IDEwcHg7IGxldHRlci1zcGFjaW5nOiAwLjE0ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpOyBmb250LXdlaWdodDogODAwOyB9XG5cbi5zb2NpYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTJweDtcbn1cbi5zb2NpYWwtYnRuIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5pY29uIHsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgfVxuXG4uZm9vdCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG59XG4uZm9vdCBhIHtcbiAgY29sb3I6IHZhcigtLXApO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYy1zZWxlY3Qge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICBmb250LXdlaWdodDogODAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgLmdyaWQtMiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuLmhpbnQge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4vKiBCb3V0b24gR29vZ2xlIChtZW1lIHJlbmR1IHF1ZSBsYSBwYWdlIGRlIGNvbm5leGlvbikgKi9cbi5zb2NpYWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmdvb2dsZS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIHZhcigtLWFwcC1lYXNlLCBlYXNlKTtcblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4NSk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuZ3N2ZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgfVxufVxuXG4uc2VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5zZXAgLmxpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJvcmRlcik7XG59XG5cbi5zZXAgLnR4dCB7XG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcbiAgZm9udC1zaXplOiAwLjYzcmVtO1xuICBmb250LXdlaWdodDogNzUwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_auth_register_register_module_ts.js.map