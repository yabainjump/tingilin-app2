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
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/language-switch/language-switch.component */ 8492);
/* harmony import */ var _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/region-picker/region-picker.component */ 8728);

var _staticBlock;











function RegisterPage_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", c_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r1.label, " ");
  }
}
function RegisterPage_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "REGISTER_PAGE.REFERRAL_WELCOME_HINT"), " ");
  }
}
function RegisterPage_span_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "REGISTER_PAGE.SUBMIT"));
  }
}
function RegisterPage_ion_skeleton_text_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-skeleton-text", 40);
  }
}
const PASSWORD_RULE = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
// 8+ caractères, 1 majuscule, 1 caractère spécial
class RegisterPage {
  constructor(fb, auth, route, router, toast, translate) {
    this.fb = fb;
    this.auth = auth;
    this.route = route;
    this.router = router;
    this.toast = toast;
    this.translate = translate;
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
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loading) return;
      if (!_this.selectedRegion) {
        yield _this.showToast(_this.translate.instant('REGISTER_PAGE.TOAST_REGION_REQUIRED'));
        return;
      }
      if (_this.form.controls.adult.value !== true) {
        _this.form.controls.adult.markAsTouched();
        yield _this.showToast(_this.translate.instant('REGISTER_PAGE.TOAST_ADULT_REQUIRED'));
        return;
      }
      if (_this.form.invalid) {
        _this.form.markAllAsTouched();
        yield _this.showToast(_this.translate.instant('REGISTER_PAGE.TOAST_INVALID_FORM'));
        return;
      }
      const v = _this.form.value;
      // Téléphone complet
      const phoneFull = `${v.countryCode}${String(v.phone).replace(/\s+/g, '')}`;
      _this.loading = true;
      const dto = {
        email: String(v.email ?? '').trim().toLowerCase(),
        password: String(v.password ?? ''),
        firstName: String(v.firstName ?? '').trim(),
        lastName: String(v.lastName ?? '').trim(),
        phone: String(phoneFull),
        region: _this.selectedRegion,
        referralCode: String(v.referralCode ?? '').trim().toUpperCase() || undefined,
        isAdult: v.adult === true
      };
      _this.auth.register(dto).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
        _this.loading = false;
      })).subscribe({
        next: function () {
          var _ref = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this.showToast(_this.translate.instant('REGISTER_PAGE.TOAST_CREATED'));
            _this.router.navigate(['/onboarding'], {
              replaceUrl: true,
              queryParams: {
                redirect: _this.redirectAfterOnboarding
              }
            });
          });
          return function next() {
            return _ref.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref2 = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            yield _this.showToast(_this.readError(err) || _this.translate.instant('REGISTER_PAGE.TOAST_CREATE_FAILED'));
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
  static #_ = _staticBlock = () => (this.ɵfac = function RegisterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RegisterPage,
    selectors: [["app-register"]],
    standalone: false,
    decls: 118,
    vars: 112,
    consts: [[1, "register", 3, "fullscreen"], [1, "topbar"], ["routerLink", "/auth/login", 1, "back"], ["name", "chevron-back-outline"], [1, "top-title"], [3, "compact"], [1, "wrap"], [1, "subtitle"], [1, "primary"], [1, "language-choice"], [1, "language-label"], [1, "region-choice"], [1, "region-title"], [1, "region-hint"], [3, "regionChange", "region"], [1, "form", 3, "ngSubmit"], [1, "grid-2"], [1, "field"], ["type", "text", 3, "placeholder", "formControl"], ["type", "email", 3, "placeholder", "formControl"], [1, "phone-row"], [1, "cc-select", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", 3, "placeholder", "formControl"], ["class", "hint", 4, "ngIf"], [1, "password"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "type", "formControl"], ["type", "button", 1, "eye", 3, "click"], [3, "name"], [1, "hint"], [1, "terms"], [3, "formControl"], [1, "terms-text"], [1, "terms", "adult"], ["type", "submit", 1, "cta", 3, "disabled"], [4, "ngIf"], ["animated", "", "class", "btn-skeleton", 4, "ngIf"], [1, "foot"], ["routerLink", "/auth/login"], [3, "value"], ["animated", "", 1, "btn-skeleton"]],
    template: function RegisterPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-language-switch", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "100 FCFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9)(20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "app-language-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11)(25, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "app-region-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("regionChange", function RegisterPage_Template_app_region_picker_regionChange_31_listener($event) {
          return ctx.onRegionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterPage_Template_form_ngSubmit_32_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16)(34, "div", 17)(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 17)(41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 17)(47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17)(53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 17)(59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 20)(63, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, RegisterPage_option_64_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 17)(68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, RegisterPage_div_73_Template, 3, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 16)(75, "div", 17)(76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 17)(82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 17)(88, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterPage_Template_button_click_93_listener() {
          return ctx.togglePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "ion-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "ion-checkbox", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "ion-checkbox", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](110, RegisterPage_span_110_Template, 3, 3, "span", 35)(111, RegisterPage_ion_skeleton_text_111_Template, 1, 0, "ion-skeleton-text", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 52, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 54, "REGISTER_PAGE.TOP_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("compact", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 56, "REGISTER_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 58, "REGISTER_PAGE.SUBTITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 60, "REGISTER_PAGE.LANGUAGE_PROMPT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 62, "REGISTER_PAGE.REGION_TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 64, "REGISTER_PAGE.REGION_HINT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("region", ctx.selectedRegion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 66, "REGISTER_PAGE.LAST_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 68, "REGISTER_PAGE.LAST_NAME_PLACEHOLDER"))("formControl", ctx.form.controls.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 70, "REGISTER_PAGE.FIRST_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 72, "REGISTER_PAGE.FIRST_NAME_PLACEHOLDER"))("formControl", ctx.form.controls.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 74, "REGISTER_PAGE.USERNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 76, "REGISTER_PAGE.USERNAME_PLACEHOLDER"))("formControl", ctx.form.controls.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](55, 78, "COMMON.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 80, "REGISTER_PAGE.EMAIL_PLACEHOLDER"))("formControl", ctx.form.controls.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 82, "COMMON.PHONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form.controls.countryCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.countryCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](66, 84, "REGISTER_PAGE.PHONE_PLACEHOLDER"))("formControl", ctx.form.controls.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 86, "REGISTER_PAGE.REFERRAL_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 88, "REGISTER_PAGE.REFERRAL_PLACEHOLDER"))("formControl", ctx.form.controls.referralCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.controls.referralCode.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](78, 90, "COMMON.COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 92, "REGISTER_PAGE.COUNTRY_PLACEHOLDER"))("formControl", ctx.form.controls.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](84, 94, "COMMON.CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](86, 96, "REGISTER_PAGE.CITY_PLACEHOLDER"))("formControl", ctx.form.controls.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 98, "COMMON.PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("formControl", ctx.form.controls.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](94, 100, "LOGIN_PAGE.TOGGLE_PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.showPassword ? "eye-off-outline" : "eye-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](98, 102, "REGISTER_PAGE.PASSWORD_HINT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form.controls.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](103, 104, "REGISTER_PAGE.TERMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.form.controls.adult);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](108, 106, "REGISTER_PAGE.ADULT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading || !ctx.canSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](114, 108, "REGISTER_PAGE.ALREADY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](117, 110, "REGISTER_PAGE.LOGIN_LINK"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _shared_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_10__.LanguageSwitchComponent, _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_11__.RegionPickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --p: var(--app-primary);\n}\n\n.register[_ngcontent-%COMP%] {\n  --background: transparent;\n  color: var(--app-ink);\n  position: relative;\n  background: var(--app-bg);\n}\n\n.register[_ngcontent-%COMP%]::before, \n.register[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%]::before {\n  top: -80px;\n  right: -80px;\n}\n\n.register[_ngcontent-%COMP%]::after {\n  bottom: -90px;\n  left: -90px;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: calc(env(safe-area-inset-top) + 10px) 16px 10px;\n  border-bottom: 1px solid var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  background: var(--app-surface);\n}\n\n.back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 15px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  display: grid;\n  place-items: center;\n}\n\n.top-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--app-ink);\n  text-align: center;\n}\n\n.topbar[_ngcontent-%COMP%]   app-language-switch[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 470px;\n  margin: 0 auto;\n  padding: 22px 18px calc(env(safe-area-inset-bottom) + 30px);\n  color: var(--app-ink);\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: clamp(2rem, 8vw, 2.45rem);\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  margin: 18px 0 6px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0 18px;\n  color: var(--app-muted);\n  font-size: 13px;\n}\n\n.primary[_ngcontent-%COMP%] {\n  color: var(--p);\n  font-weight: 900;\n}\n\n.language-choice[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 18px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.language-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--app-muted);\n}\n\n.region-choice[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  padding: 16px 14px;\n  border-radius: 22px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.region-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  padding-left: 4px;\n  font-size: 15px;\n  font-weight: 900;\n  letter-spacing: -0.01em;\n  color: var(--app-ink);\n}\n\n.region-hint[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  padding-left: 4px;\n  font-size: 11.5px;\n  line-height: 1.5;\n  color: var(--app-muted);\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 20px;\n  border: 1px solid var(--app-border);\n  border-radius: 28px;\n  background: var(--app-surface);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--app-muted);\n  margin: 2px 0 8px 6px;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52px;\n  border-radius: 17px;\n  padding: 0 16px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  color: var(--app-ink);\n  outline: none;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-primary);\n  box-shadow: none;\n}\n\n.phone-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.cc[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 14px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  font-weight: 800;\n  color: var(--app-ink);\n  flex: 0 0 auto;\n}\n\n.password[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n\n.eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  border: 0;\n  background: transparent;\n  color: var(--app-muted);\n}\n\n.terms[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 4px 6px 2px;\n}\n\n.terms[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --size: 18px;\n  --checkbox-background-checked: var(--p);\n  --checkmark-color: var(--app-on-primary);\n  --border-color: var(--app-border);\n  --border-color-checked: var(--p);\n}\n\n.terms-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.35;\n  color: var(--app-muted);\n}\n\n.link[_ngcontent-%COMP%] {\n  color: var(--p);\n  text-decoration: underline;\n  font-weight: 700;\n}\n\n.cta[_ngcontent-%COMP%] {\n  height: 56px;\n  border: 0;\n  border-radius: 18px;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-size: 18px;\n  font-weight: 900;\n  box-shadow: var(--app-shadow-brand);\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.75;\n}\n\n.btn-skeleton[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 18px;\n  border-radius: 999px;\n  opacity: 0.45;\n}\n\n.sep[_ngcontent-%COMP%] {\n  margin: 18px 0 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.line[_ngcontent-%COMP%] {\n  height: 1px;\n  flex: 1;\n  background: var(--app-border);\n}\n\n.sep-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--app-muted);\n  font-weight: 800;\n}\n\n.social[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.social-btn[_ngcontent-%COMP%] {\n  height: 52px;\n  border-radius: 18px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  color: var(--app-ink);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-weight: 800;\n  font-size: 12px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.foot[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  text-align: center;\n  color: var(--app-muted);\n}\n\n.foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--p);\n  font-weight: 900;\n  margin-left: 8px;\n  text-decoration: none;\n}\n\n.cc-select[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 12px;\n  border-radius: 18px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  color: var(--app-ink);\n  font-weight: 800;\n  outline: none;\n}\n\n@media (max-width: 370px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hint[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 11px;\n  color: var(--app-muted);\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSx1QkFBQTtBQUVSOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTs7RUFDbUIsYUFBQTtBQUluQjs7QUFIQTtFQUFvQixVQUFBO0VBQVksWUFBQTtBQVFoQzs7QUFQQTtFQUFtQixhQUFBO0VBQWUsV0FBQTtBQVlsQzs7QUFWQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdEQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsOEJBQUE7QUFhRjs7QUFWQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFhRjs7QUFWQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFhRjs7QUFWQTtFQUNFLGNBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFhRjs7QUFYQTtFQUFXLGVBQUE7RUFBaUIsZ0JBQUE7QUFnQjVCOztBQWRBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFpQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlCRjs7QUFkQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFpQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlCRjs7QUFkQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWlCRjs7QUFkQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBaUJGOztBQWRBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtBQWlCRjs7QUFkQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFpQkY7O0FBZkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFrQkY7O0FBZkE7RUFDRSxrQkFBQTtBQWtCRjs7QUFoQkE7RUFBa0IsbUJBQUE7QUFvQmxCOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBc0JGOztBQW5CQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQXNCRjs7QUFwQkE7RUFDRSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7QUF1QkY7O0FBckJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUF3QkY7O0FBdEJBO0VBQVEsZUFBQTtFQUFpQiwwQkFBQTtFQUE0QixnQkFBQTtBQTRCckQ7O0FBMUJBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUE2QkY7O0FBM0JBO0VBQWdCLGFBQUE7QUErQmhCOztBQTdCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBZ0NGOztBQTdCQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWdDRjs7QUE5QkE7RUFBUSxXQUFBO0VBQWEsT0FBQTtFQUFTLDZCQUFBO0FBb0M5Qjs7QUFuQ0E7RUFBWSxlQUFBO0VBQWlCLHNCQUFBO0VBQXdCLHlCQUFBO0VBQTJCLHVCQUFBO0VBQXlCLGdCQUFBO0FBMkN6Rzs7QUF6Q0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBNENGOztBQTFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQTZDRjs7QUEzQ0E7RUFBUSxXQUFBO0VBQWEsWUFBQTtBQWdEckI7O0FBOUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBaURGOztBQS9DQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFrREY7O0FBL0NBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQWtERjs7QUEvQ0E7RUFDRTtJQUNFLDBCQUFBO0VBa0RGO0FBQ0Y7QUEvQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFpREYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IC0tcDogdmFyKC0tYXBwLXByaW1hcnkpOyB9XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xyXG59XHJcblxyXG4ucmVnaXN0ZXI6OmJlZm9yZSxcclxuLnJlZ2lzdGVyOjphZnRlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLnJlZ2lzdGVyOjpiZWZvcmUgeyB0b3A6IC04MHB4OyByaWdodDogLTgwcHg7IH1cclxuLnJlZ2lzdGVyOjphZnRlciB7IGJvdHRvbTogLTkwcHg7IGxlZnQ6IC05MHB4OyB9XHJcblxyXG4udG9wYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxMHB4KSAxNnB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9wYmFyIGFwcC1sYW5ndWFnZS1zd2l0Y2gge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWF4LXdpZHRoOiA0NzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMnB4IDE4cHggY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAzMHB4KTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA4dncsIDIuNDVyZW0pO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgbWFyZ2luOiAxOHB4IDAgNnB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgMCAxOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ucHJpbWFyeSB7IGNvbG9yOiB2YXIoLS1wKTsgZm9udC13ZWlnaHQ6IDkwMDsgfVxyXG5cclxuLmxhbmd1YWdlLWNob2ljZSB7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbi5yZWdpb24tY2hvaWNlIHtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4ucmVnaW9uLXRpdGxlIHtcclxuICBtYXJnaW46IDAgMCA0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4ucmVnaW9uLWhpbnQge1xyXG4gIG1hcmdpbjogMCAwIDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgZm9udC1zaXplOiAxMS41cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE0cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmdyaWQtMiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uZmllbGQgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIG1hcmdpbjogMnB4IDAgOHB4IDZweDtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5waG9uZS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNjIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG5cclxuLnBhc3N3b3JkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnBhc3N3b3JkIGlucHV0IHsgcGFkZGluZy1yaWdodDogNDhweDsgfVxyXG4uZXllIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLnRlcm1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiA0cHggNnB4IDJweDtcclxufVxyXG4udGVybXMgaW9uLWNoZWNrYm94IHtcclxuICAtLXNpemU6IDE4cHg7XHJcbiAgLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXApO1xyXG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXApO1xyXG59XHJcbi50ZXJtcy10ZXh0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuLmxpbmsgeyBjb2xvcjogdmFyKC0tcCk7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBmb250LXdlaWdodDogNzAwOyB9XHJcblxyXG4uY3RhIHtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYXBwLXNoYWRvdy1icmFuZCk7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLmN0YTpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNzU7IH1cclxuXHJcbi5idG4tc2tlbGV0b24ge1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgb3BhY2l0eTogMC40NTtcclxufVxyXG5cclxuLnNlcCB7XHJcbiAgbWFyZ2luOiAxOHB4IDAgMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcbi5saW5lIHsgaGVpZ2h0OiAxcHg7IGZsZXg6IDE7IGJhY2tncm91bmQ6IHZhcigtLWFwcC1ib3JkZXIpOyB9XHJcbi5zZXAtdGV4dCB7IGZvbnQtc2l6ZTogMTBweDsgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7IGZvbnQtd2VpZ2h0OiA4MDA7IH1cclxuXHJcbi5zb2NpYWwge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG4uc29jaWFsLWJ0biB7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pY29uIHsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgfVxyXG5cclxuLmZvb3Qge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcbi5mb290IGEge1xyXG4gIGNvbG9yOiB2YXIoLS1wKTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2Mtc2VsZWN0IHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xyXG4gIC5ncmlkLTIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uaGludCB7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_auth_register_register_module_ts.js.map