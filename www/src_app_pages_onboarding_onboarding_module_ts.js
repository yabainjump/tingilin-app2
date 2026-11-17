"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_onboarding_onboarding_module_ts"],{

/***/ 2367
/*!***************************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding-routing.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingPageRoutingModule: () => (/* binding */ OnboardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page */ 1921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _onboarding_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingPage
}];
class OnboardingPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function OnboardingPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OnboardingPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: OnboardingPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OnboardingPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 942
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingPageModule: () => (/* binding */ OnboardingPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-routing.module */ 2367);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onboarding.page */ 1921);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/region-picker/region-picker.module */ 1815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class OnboardingPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function OnboardingPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OnboardingPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: OnboardingPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__.OnboardingPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_6__.RegionPickerModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OnboardingPageModule, {
    declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_4__.OnboardingPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_3__.OnboardingPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_6__.RegionPickerModule]
  });
})();

/***/ },

/***/ 1921
/*!*****************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingPage: () => (/* binding */ OnboardingPage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth.service */ 1339);
/* harmony import */ var _services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/auth-state.service */ 6247);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/region-picker/region-picker.component */ 8728);
var _staticBlock;









function OnboardingPage_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.skip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "ONBOARDING_PAGE.SKIP"), " ");
  }
}
function OnboardingPage_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 18);
  }
}
function OnboardingPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 19);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + ctx_r2.currentSlide.imageUrl + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r2.currentSlideTitle);
  }
}
function OnboardingPage_ng_template_13_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.regionErrorKey), " ");
  }
}
function OnboardingPage_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 23)(10, "app-region-picker", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("regionChange", function OnboardingPage_ng_template_13_Template_app_region_picker_regionChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onRegionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OnboardingPage_ng_template_13_p_11_Template, 3, 3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, "ONBOARDING_PAGE.REGION_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx_r2.regionRequired ? "ONBOARDING_PAGE.REGION_REQUIRED_DESC" : "ONBOARDING_PAGE.REGION_DESC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("region", ctx_r2.selectedRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.regionErrorKey);
  }
}
function OnboardingPage_section_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 27)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.currentSlideTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.currentSlideDescription);
  }
}
function OnboardingPage_div_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_div_16_button_1_Template_button_click_0_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.goToSlide(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", i_r6 === ctx_r2.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-current", i_r6 === ctx_r2.currentIndex ? "step" : null)("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "ONBOARDING_PAGE.STEP") + " " + (i_r6 + 1));
  }
}
function OnboardingPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnboardingPage_div_16_button_1_Template, 2, 6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.dots);
  }
}
function OnboardingPage_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.skip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "ONBOARDING_PAGE.SKIP_INTRO"), " ");
  }
}
class OnboardingPage {
  constructor(router, route, translate, auth, authState) {
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.auth = auth;
    this.authState = authState;
    this.currentIndex = 0;
    this.selectedRegion = null;
    this.regionRequired = false;
    this.savingRegion = false;
    this.regionErrorKey = '';
    this.redirectTo = '/tabs/home';
    this.slides = [{
      titleKey: 'ONBOARDING_PAGE.SLIDE_1_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_1_DESC',
      imageUrl: 'assets/img/slide1.png'
    }, {
      titleKey: 'ONBOARDING_PAGE.SLIDE_2_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_2_DESC',
      imageUrl: 'assets/img/slide2.png'
    }, {
      titleKey: 'ONBOARDING_PAGE.SLIDE_3_TITLE',
      descriptionKey: 'ONBOARDING_PAGE.SLIDE_3_DESC',
      imageUrl: 'assets/img/slide3.png'
    }];
  }
  ngOnInit() {
    const redirect = String(this.route.snapshot.queryParamMap.get('redirect') ?? '').trim();
    this.redirectTo = redirect.startsWith('/') && !redirect.startsWith('//') ? redirect : '/tabs/home';
    this.regionRequired = this.route.snapshot.queryParamMap.get('requiredRegion') === '1';
    if (this.regionRequired) {
      if (!this.auth.isLoggedIn()) {
        void this.router.navigate(['/auth/login'], {
          replaceUrl: true,
          queryParams: {
            redirect: this.redirectTo
          }
        });
        return;
      }
      // Apres Google Sign-In, ne pas imposer les slides: demander uniquement
      // l'information necessaire pour terminer le profil.
      this.currentIndex = this.regionStepIndex;
    }
    // Preselection avec la region du profil (si deja connecte).
    if (this.authState.me?.region) {
      const known = String(this.authState.me.region).trim().toUpperCase();
      if (this.isKnownRegion(known)) {
        this.selectedRegion = known;
      }
    }
  }
  // Etape supplementaire (apres les slides): choix de la region.
  get regionStepIndex() {
    return this.slides.length;
  }
  get dots() {
    return new Array(this.regionStepIndex + 1);
  }
  get isRegionStep() {
    return this.currentIndex === this.regionStepIndex;
  }
  get isLast() {
    return this.currentIndex >= this.regionStepIndex;
  }
  get currentSlide() {
    return this.slides[this.currentIndex];
  }
  get currentSlideTitle() {
    return this.translate.instant(this.currentSlide.titleKey);
  }
  get currentSlideDescription() {
    return this.translate.instant(this.currentSlide.descriptionKey);
  }
  onRegionChange(region) {
    this.selectedRegion = region;
    this.regionErrorKey = '';
  }
  next() {
    if (this.isLast) {
      this.finish();
      return;
    }
    this.currentIndex += 1;
  }
  back() {
    if (this.currentIndex <= 0) return;
    this.currentIndex -= 1;
  }
  goToSlide(index) {
    if (index < 0 || index > this.regionStepIndex) return;
    this.currentIndex = index;
  }
  skip() {
    if (this.regionRequired) return;
    this.finish();
  }
  isKnownRegion(value) {
    return ['CENTRE', 'LITTORAL', 'OUEST', 'SUD_OUEST'].includes(value);
  }
  finish() {
    const region = this.selectedRegion;
    if (this.regionRequired) {
      if (!region) {
        this.regionErrorKey = 'ONBOARDING_PAGE.REGION_REQUIRED';
        return;
      }
      if (this.savingRegion) return;
      this.savingRegion = true;
      this.regionErrorKey = '';
      this.authState.updateRegion(region).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.finalize)(() => this.savingRegion = false)).subscribe({
        next: () => this.navigateToRedirect(),
        error: () => {
          this.regionErrorKey = 'ONBOARDING_PAGE.REGION_SAVE_FAILED';
        }
      });
      return;
    }
    if (region && this.auth.isLoggedIn()) {
      this.authState.updateRegion(region).subscribe({
        error: () => undefined
      });
    }
    this.navigateToRedirect();
  }
  navigateToRedirect() {
    void this.router.navigateByUrl(this.redirectTo, {
      replaceUrl: true
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function OnboardingPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OnboardingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_6__.AuthStateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OnboardingPage,
    selectors: [["app-onboarding"]],
    standalone: false,
    decls: 27,
    vars: 26,
    consts: [["regionStep", ""], [1, "onboarding", 3, "fullscreen"], [1, "screen"], [1, "top"], ["type", "button", 1, "icon-btn", 3, "click"], ["name", "arrow-back"], [1, "title"], ["class", "skip-btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "top-spacer", "aria-hidden", "true", 4, "ngIf"], [1, "card-wrap"], ["class", "hero", "role", "img", 3, "background-image", 4, "ngIf", "ngIfElse"], ["class", "content", 4, "ngIf"], ["class", "dots", 4, "ngIf"], [1, "footer"], ["type", "button", 1, "next-btn", 3, "click", "disabled"], ["name", "arrow-forward"], ["class", "link-btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "skip-btn", 3, "click"], ["aria-hidden", "true", 1, "top-spacer"], ["role", "img", 1, "hero"], [1, "region-step"], [1, "region-icon"], ["name", "location-outline"], [1, "region-picker-wrap"], [3, "regionChange", "region"], ["class", "region-error", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "region-error"], [1, "content"], [1, "dots"], ["type", "button", "class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dot", 3, "click"], ["type", "button", 1, "link-btn", 3, "click"]],
    template: function OnboardingPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 1)(1, "div", 2)(2, "header", 3)(3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.back());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OnboardingPage_button_9_Template, 3, 3, "button", 7)(10, OnboardingPage_span_10_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OnboardingPage_div_12_Template, 1, 3, "div", 10)(13, OnboardingPage_ng_template_13_Template, 12, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, OnboardingPage_section_15_Template, 5, 2, "section", 11)(16, OnboardingPage_div_16_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "footer", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnboardingPage_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.next());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, OnboardingPage_button_26_Template, 3, 3, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const regionStep_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", ctx.currentIndex === 0 || ctx.regionRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 14, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 16, ctx.regionRequired ? "ONBOARDING_PAGE.COMPLETE_TITLE" : "ONBOARDING_PAGE.TOP_TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.regionRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.regionRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isRegionStep)("ngIfElse", regionStep_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isRegionStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.regionRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.savingRegion || ctx.regionRequired && !ctx.selectedRegion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.savingRegion ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 18, "ONBOARDING_PAGE.SAVING") : ctx.regionRequired ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 20, "ONBOARDING_PAGE.SAVE_REGION") : ctx.isLast ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 22, "ONBOARDING_PAGE.START") : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 24, "ONBOARDING_PAGE.NEXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLast && !ctx.regionRequired);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_9__.RegionPickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --onb-bg-a: var(--app-bg);\n  --onb-bg-b: var(--app-bg);\n  --onb-text: var(--app-ink);\n  --onb-sub: var(--app-muted);\n  --onb-primary: var(--app-primary);\n}\n\n.onboarding[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  color: var(--onb-text);\n}\n\n.screen[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: auto auto auto auto 1fr;\n  gap: 10px;\n  padding: 18px 22px 24px;\n}\n\n.top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 44px 1fr auto;\n  align-items: center;\n  column-gap: 8px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 0;\n  border-radius: 12px;\n  background: transparent;\n  color: var(--app-ink);\n  font-size: 22px;\n}\n\n.icon-btn.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: 0.2px;\n}\n\n.skip-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--onb-primary);\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.card-wrap[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.hero[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1/1;\n  border-radius: 36px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: none;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4px;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: clamp(34px, 7vw, 56px);\n  line-height: 1.06;\n  font-weight: 900;\n  letter-spacing: -0.6px;\n}\n\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 94%;\n  color: var(--onb-sub);\n  font-size: 20px;\n  line-height: 1.36;\n  font-weight: 500;\n}\n\n.dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 4px;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border: 0;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n}\n\n.dot.active[_ngcontent-%COMP%] {\n  width: 48px;\n  background: var(--app-primary);\n}\n\n.footer[_ngcontent-%COMP%] {\n  align-self: end;\n  display: grid;\n  gap: 16px;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  border-radius: 999px;\n  min-height: 68px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: var(--app-on-primary);\n  font-size: 42px;\n  font-weight: 900;\n  letter-spacing: -0.2px;\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\n.next-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.link-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--app-ink);\n  font-size: 34px;\n  font-weight: 700;\n  padding: 2px 0;\n}\n\n@media (max-width: 480px) {\n  .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 52px;\n  }\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .next-btn[_ngcontent-%COMP%] {\n    font-size: 34px;\n    min-height: 62px;\n  }\n  .link-btn[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n\n\n.onboarding[_ngcontent-%COMP%] {\n  --background: transparent;\n  background: var(--app-bg);\n}\n\n.screen[_ngcontent-%COMP%] {\n  width: min(100%, 620px);\n  min-height: 100dvh;\n  margin: 0 auto;\n  grid-template-rows: auto minmax(220px, 1fr) auto auto auto;\n  gap: 16px;\n  padding: calc(env(safe-area-inset-top) + 16px) 20px calc(env(safe-area-inset-bottom) + 22px);\n}\n\n.top[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n\n.icon-btn[_ngcontent-%COMP%], \n.skip-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  border-radius: 15px;\n  background: var(--app-surface-2);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  letter-spacing: -0.01em;\n}\n\n.skip-btn[_ngcontent-%COMP%] {\n  padding-inline: 10px;\n  color: var(--app-primary);\n  font-size: 0.82rem;\n}\n\n.card-wrap[_ngcontent-%COMP%] {\n  min-height: 0;\n  display: grid;\n  place-items: center;\n}\n\n.hero[_ngcontent-%COMP%] {\n  width: min(100%, 480px);\n  max-height: 46dvh;\n  aspect-ratio: 4/3;\n  border: 1px solid var(--app-border-strong);\n  border-radius: 30px;\n  box-shadow: none;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n  font-size: clamp(1.75rem, 8vw, 2.4rem);\n  line-height: 1.08;\n  letter-spacing: -0.045em;\n}\n\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 440px;\n  color: var(--app-muted);\n  font-size: 0.94rem;\n  line-height: 1.58;\n}\n\n.dots[_ngcontent-%COMP%] {\n  gap: 8px;\n  margin-top: 0;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  padding: 0;\n  background: var(--app-primary-soft);\n  transition: width 180ms var(--app-ease), background 180ms ease;\n}\n\n.dot.active[_ngcontent-%COMP%] {\n  width: 30px;\n  background: var(--app-primary);\n}\n\n.footer[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  min-height: 56px;\n  border-radius: 18px;\n  background: var(--app-primary);\n  box-shadow: var(--app-shadow-brand);\n  font-size: 1rem;\n  letter-spacing: 0;\n}\n\n.next-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.next-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n  box-shadow: none;\n}\n\n.link-btn[_ngcontent-%COMP%] {\n  min-height: 42px;\n  color: var(--app-muted);\n  font-size: 0.82rem;\n}\n\n\n\n.region-step[_ngcontent-%COMP%] {\n  width: min(100%, 480px);\n  text-align: center;\n}\n\n.region-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 14px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--app-border-strong);\n  border-radius: 20px;\n  background: var(--app-surface-2);\n  box-shadow: none;\n  font-size: 28px;\n  color: var(--app-primary);\n}\n\n.region-step[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: clamp(1.5rem, 7vw, 2rem);\n  font-weight: 900;\n  letter-spacing: -0.03em;\n}\n\n.region-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto 18px;\n  max-width: 400px;\n  color: var(--app-muted);\n  font-size: 0.9rem;\n  line-height: 1.55;\n}\n\n.region-step[_ngcontent-%COMP%]   .region-error[_ngcontent-%COMP%] {\n  margin: 12px auto 0;\n  color: var(--app-danger);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.top-spacer[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n\n.region-picker-wrap[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius-lg, 26px);\n  background: var(--app-surface);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  text-align: left;\n}\n\n@media (max-height: 700px) {\n  .screen[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .hero[_ngcontent-%COMP%] {\n    max-height: 34dvh;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjs7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NkJBQUE7VUFBQSxxQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLFNBQUE7RUFIRjtFQU1BO0lBQ0UsaUJBQUE7RUFKRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tb25iLWJnLWE6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1vbmItYmctYjogdmFyKC0tYXBwLWJnKTtcclxuICAtLW9uYi10ZXh0OiB2YXIoLS1hcHAtaW5rKTtcclxuICAtLW9uYi1zdWI6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgLS1vbmItcHJpbWFyeTogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG4ub25ib2FyZGluZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1vbmItdGV4dCk7XHJcbn1cclxuXHJcbi5zY3JlZW4ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gMWZyO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAxOHB4IDIycHggMjRweDtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ0cHggMWZyIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2x1bW4tZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5pY29uLWJ0biB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5pY29uLWJ0bi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbn1cclxuXHJcbi5za2lwLWJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1vbmItcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXAge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmhlcm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLmNvbnRlbnQgaDIge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgzNHB4LCA3dncsIDU2cHgpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA2O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxufVxyXG5cclxuLmNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA5NCU7XHJcbiAgY29sb3I6IHZhcigtLW9uYi1zdWIpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS4zNjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZG90cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbn1cclxuXHJcbi5kb3QuYWN0aXZlIHtcclxuICB3aWR0aDogNDhweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGFsaWduLXNlbGY6IGVuZDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm5leHQtYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgbWluLWhlaWdodDogNjhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm5leHQtYnRuIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5saW5rLWJ0biB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAubmV4dC1idG4ge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgbWluLWhlaWdodDogNjJweDtcclxuICB9XHJcblxyXG4gIC5saW5rLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQcmVtaXVtIHJlc3BvbnNpdmUgbGF5b3V0ICovXHJcbi5vbmJvYXJkaW5nIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iZyk7XHJcbn1cclxuXHJcbi5zY3JlZW4ge1xyXG4gIHdpZHRoOiBtaW4oMTAwJSwgNjIwcHgpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gbWlubWF4KDIyMHB4LCAxZnIpIGF1dG8gYXV0byBhdXRvO1xyXG4gIGdhcDogMTZweDtcclxuICBwYWRkaW5nOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDE2cHgpIDIwcHggY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAyMnB4KTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgbWluLWhlaWdodDogNDRweDtcclxufVxyXG5cclxuLmljb24tYnRuLFxyXG4uc2tpcC1idG4ge1xyXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5pY29uLWJ0biB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuXHJcbi5za2lwLWJ0biB7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDAuODJyZW07XHJcbn1cclxuXHJcbi5jYXJkLXdyYXAge1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgd2lkdGg6IG1pbigxMDAlLCA0ODBweCk7XHJcbiAgbWF4LWhlaWdodDogNDZkdmg7XHJcbiAgYXNwZWN0LXJhdGlvOiA0IC8gMztcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmNvbnRlbnQgaDIge1xyXG4gIG1hcmdpbi1ib3R0b206IDlweDtcclxuICBmb250LXNpemU6IGNsYW1wKDEuNzVyZW0sIDh2dywgMi40cmVtKTtcclxuICBsaW5lLWhlaWdodDogMS4wODtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDQ1ZW07XHJcbn1cclxuXHJcbi5jb250ZW50IHAge1xyXG4gIG1heC13aWR0aDogNDQwcHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU4O1xyXG59XHJcblxyXG4uZG90cyB7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmRvdCB7XHJcbiAgd2lkdGg6IDlweDtcclxuICBoZWlnaHQ6IDlweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDE4MG1zIHZhcigtLWFwcC1lYXNlKSwgYmFja2dyb3VuZCAxODBtcyBlYXNlO1xyXG59XHJcblxyXG4uZG90LmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5uZXh0LWJ0biB7XHJcbiAgbWluLWhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LWJyYW5kKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5uZXh0LWJ0biBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubmV4dC1idG46ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgb3BhY2l0eTogMC41NTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubGluay1idG4ge1xyXG4gIG1pbi1oZWlnaHQ6IDQycHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAwLjgycmVtO1xyXG59XHJcblxyXG4vKiAtLS0tIEV0YXBlIHJlZ2lvbiAtLS0tICovXHJcbi5yZWdpb24tc3RlcCB7XHJcbiAgd2lkdGg6IG1pbigxMDAlLCA0ODBweCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaW9uLWljb24ge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBtYXJnaW46IDAgYXV0byAxNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG4ucmVnaW9uLXN0ZXAgaDIge1xyXG4gIG1hcmdpbjogMCAwIDhweDtcclxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgN3Z3LCAycmVtKTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG59XHJcblxyXG4ucmVnaW9uLXN0ZXAgcCB7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMThweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xyXG59XHJcblxyXG4ucmVnaW9uLXN0ZXAgLnJlZ2lvbi1lcnJvciB7XHJcbiAgbWFyZ2luOiAxMnB4IGF1dG8gMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50b3Atc3BhY2VyIHtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5yZWdpb24tcGlja2VyLXdyYXAge1xyXG4gIHBhZGRpbmc6IDE0cHggMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtcmFkaXVzLWxnLCAyNnB4KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3MDBweCkge1xyXG4gIC5zY3JlZW4ge1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8ge1xyXG4gICAgbWF4LWhlaWdodDogMzRkdmg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_onboarding_onboarding_module_ts.js.map