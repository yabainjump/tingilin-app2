"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_create-raffle_create-raffle_module_ts"],{

/***/ 6031
/*!*****************************************************!*\
  !*** ./src/app/core/constants/raffle-categories.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOME_CATEGORY_OPTIONS: () => (/* binding */ HOME_CATEGORY_OPTIONS),
/* harmony export */   RAFFLE_CATEGORY_OPTIONS: () => (/* binding */ RAFFLE_CATEGORY_OPTIONS),
/* harmony export */   raffleCategoryLabel: () => (/* binding */ raffleCategoryLabel)
/* harmony export */ });
const RAFFLE_CATEGORY_OPTIONS = [{
  id: 'GENERAL',
  label: 'General'
}, {
  id: 'ELECTRONICS',
  label: 'Electronique'
}, {
  id: 'VEHICLES',
  label: 'Vehicules'
}, {
  id: 'HOME',
  label: 'Maison'
}, {
  id: 'GAMING',
  label: 'Gaming'
}, {
  id: 'FASHION',
  label: 'Mode'
}, {
  id: 'SERVICES',
  label: 'Services'
}];
const HOME_CATEGORY_OPTIONS = [{
  id: 'all',
  label: 'All'
}, ...RAFFLE_CATEGORY_OPTIONS];
function raffleCategoryLabel(categoryId) {
  const raw = String(categoryId ?? '').trim().toUpperCase();
  if (!raw) return 'General';
  const match = RAFFLE_CATEGORY_OPTIONS.find(item => item.id === raw);
  if (match) return match.label;
  return raw.replace(/_/g, ' ');
}

/***/ },

/***/ 5995
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/create-raffle/create-raffle-routing.module.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRafflePageRoutingModule: () => (/* binding */ CreateRafflePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _create_raffle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-raffle.page */ 9021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _create_raffle_page__WEBPACK_IMPORTED_MODULE_1__.CreateRafflePage
}];
class CreateRafflePageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function CreateRafflePageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CreateRafflePageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CreateRafflePageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CreateRafflePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 1706
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/create-raffle/create-raffle.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRafflePageModule: () => (/* binding */ CreateRafflePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _create_raffle_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-raffle-routing.module */ 5995);
/* harmony import */ var _create_raffle_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-raffle.page */ 9021);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







class CreateRafflePageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function CreateRafflePageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CreateRafflePageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: CreateRafflePageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _create_raffle_routing_module__WEBPACK_IMPORTED_MODULE_3__.CreateRafflePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CreateRafflePageModule, {
    declarations: [_create_raffle_page__WEBPACK_IMPORTED_MODULE_4__.CreateRafflePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _create_raffle_routing_module__WEBPACK_IMPORTED_MODULE_3__.CreateRafflePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ },

/***/ 9021
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/create-raffle/create-raffle.page.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRafflePage: () => (/* binding */ CreateRafflePage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 2601);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var src_app_core_constants_raffle_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/constants/raffle-categories */ 6031);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_app_shared_utils_blob_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/utils/blob-file */ 9624);
/* harmony import */ var src_app_shared_utils_image_compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/image-compression */ 2546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_raffles_raffles_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/raffles/raffles-api.service */ 6448);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 3683);

var _staticBlock;













function CreateRafflePage_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CREATE_RAFFLE_PAGE.PRODUCT_NAME_REQUIRED"), " ");
  }
}
function CreateRafflePage_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.previewUrl || ctx_r0.imageControl.value, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "CREATE_RAFFLE_PAGE.PREVIEW_ALT"));
  }
}
function CreateRafflePage_p_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CREATE_RAFFLE_PAGE.IMAGE_REQUIRED"), " ");
  }
}
function CreateRafflePage_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", c_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](c_r2.label);
  }
}
function CreateRafflePage_p_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CREATE_RAFFLE_PAGE.END_DATE_PAST"));
  }
}
function CreateRafflePage_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CREATE_RAFFLE_PAGE.SUBMIT"));
  }
}
function CreateRafflePage_ion_skeleton_text_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-skeleton-text", 59);
  }
}
function futureDateValidator(control) {
  const value = control.value;
  if (!value) return null;
  const date = new Date(value);
  if (isNaN(date.getTime())) return null;
  return date <= new Date() ? {
    pastDate: true
  } : null;
}
class CreateRafflePage {
  constructor(fb, api, toast, nav, translate) {
    this.fb = fb;
    this.api = api;
    this.toast = toast;
    this.nav = nav;
    this.translate = translate;
    this.submitting = false;
    this.previewUrl = null;
    this.selectedImageFile = null;
    this.previewObjectUrl = null;
    this.categoryOptions = src_app_core_constants_raffle_categories__WEBPACK_IMPORTED_MODULE_4__.RAFFLE_CATEGORY_OPTIONS;
    this.form = this.fb.group({
      title: this.fb.nonNullable.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      description: this.fb.nonNullable.control(''),
      imageUrl: this.fb.nonNullable.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      categoryId: this.fb.nonNullable.control('GENERAL', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      realValue: this.fb.nonNullable.control(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(0)]),
      ticketPrice: this.fb.nonNullable.control(100, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(1)]),
      totalTickets: this.fb.nonNullable.control(1000, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(1)]),
      currency: this.fb.nonNullable.control('XAF', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      endAt: this.fb.nonNullable.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, futureDateValidator]),
      publishNow: this.fb.nonNullable.control(true)
    });
  }
  get titleControl() {
    return this.form.controls['title'];
  }
  get imageControl() {
    return this.form.controls['imageUrl'];
  }
  get safeTicketPrice() {
    const v = Number(this.form.controls['ticketPrice']?.value ?? 0);
    return Number.isFinite(v) ? Math.max(0, v) : 0;
  }
  get safeRealValue() {
    const v = Number(this.form.controls['realValue']?.value ?? 0);
    return Number.isFinite(v) ? Math.max(0, v) : 0;
  }
  // Seuil minimal pour couvrir le prix du produit.
  get coverageTicketTarget() {
    const ticketPrice = this.safeTicketPrice;
    if (ticketPrice <= 0) return 0;
    return Math.ceil(this.safeRealValue / ticketPrice);
  }
  get projectedCoverageAmount() {
    return this.coverageTicketTarget * this.safeTicketPrice;
  }
  showHelp() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this.toast.create({
        message: _this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_HELP'),
        duration: 2400,
        position: 'top'
      });
      yield t.present();
    })();
  }
  pickImage() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // ✅ Web: ne pas appeler requestPermissions (pas implémenté)
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() !== 'web') {
          yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.requestPermissions();
        }
        const photo = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt,
          // web => galerie via PWA elements, mobile => prompt natif
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
          quality: 80
        });
        if (!photo?.webPath) return;
        const blob = yield (0,src_app_shared_utils_blob_file__WEBPACK_IMPORTED_MODULE_6__.blobFromUrl)(photo.webPath);
        const sourceFile = (0,src_app_shared_utils_blob_file__WEBPACK_IMPORTED_MODULE_6__.fileFromBlob)(blob, `raffle-${Date.now()}.jpg`);
        _this2.selectedImageFile = yield (0,src_app_shared_utils_image_compression__WEBPACK_IMPORTED_MODULE_7__.compressImageFile)(sourceFile);
        _this2.setPreview(_this2.selectedImageFile);
        _this2.form.patchValue({
          imageUrl: _this2.previewUrl
        });
        _this2.form.markAsDirty();
      } catch (err) {
        const errorCode = err instanceof src_app_shared_utils_image_compression__WEBPACK_IMPORTED_MODULE_7__.ImageCompressionError ? err.code : 'CAMERA_FAILED';
        console.warn('[CreateRaffle] Image selection failed', {
          code: errorCode
        });
        const t = yield _this2.toast.create({
          message: _this2.imageErrorMessage(errorCode),
          duration: 2200
        });
        yield t.present();
      }
    })();
  }
  ngOnDestroy() {
    this.revokePreview();
  }
  setPreview(file) {
    this.revokePreview();
    this.previewObjectUrl = URL.createObjectURL(file);
    this.previewUrl = this.previewObjectUrl;
  }
  revokePreview() {
    if (this.previewObjectUrl) {
      URL.revokeObjectURL(this.previewObjectUrl);
      this.previewObjectUrl = null;
    }
  }
  imageErrorMessage(code) {
    if (code === 'SOURCE_TOO_LARGE') {
      return this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_IMAGE_TOO_LARGE');
    }
    if (code === 'UNSUPPORTED_FORMAT') {
      return this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_IMAGE_UNSUPPORTED');
    }
    if (code === 'DECODE_FAILED' || code === 'OUTPUT_TOO_LARGE') {
      return this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_IMAGE_COMPRESSION_FAILED');
    }
    return this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_CAMERA_FAILED');
  }
  readError(err) {
    const msg = err?.error?.message;
    if (Array.isArray(msg)) return msg.join(' · ');
    if (msg != null) return String(msg);
    return this.translate.instant('CREATE_RAFFLE_PAGE.TOAST_CREATE_ERROR');
  }
  submit() {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.submitting) return;
      if (_this3.form.invalid) {
        _this3.form.markAllAsTouched();
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('CREATE_RAFFLE_PAGE.TOAST_INCOMPLETE_FORM'),
          duration: 1500
        });
        yield t.present();
        return;
      }
      _this3.submitting = true;
      const v = _this3.form.getRawValue();
      if (!_this3.selectedImageFile) {
        _this3.submitting = false;
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('CREATE_RAFFLE_PAGE.TOAST_INCOMPLETE_FORM'),
          duration: 1500
        });
        yield t.present();
        return;
      }
      // Normalisation date -> ISO (évite les surprises backend)
      const endAtDate = new Date(v.endAt);
      const endAtIso = Number.isNaN(endAtDate.getTime()) ? String(v.endAt) : endAtDate.toISOString();
      try {
        const upload = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this3.api.uploadAdminProductImage(_this3.selectedImageFile));
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this3.api.adminCreateWithProduct({
          publishNow: !!v.publishNow,
          product: {
            title: v.title.trim(),
            description: (v.description ?? '').trim(),
            imageUrl: upload.imageUrl,
            categoryId: v.categoryId ? v.categoryId : undefined,
            realValue: Number(v.realValue ?? 0)
          },
          raffle: {
            ticketPrice: Number(v.ticketPrice ?? 0),
            totalTickets: Number(v.totalTickets ?? 0),
            currency: v.currency || 'XAF',
            endAt: endAtIso
          }
        }));
        _this3.submitting = false;
        _this3.api.triggerRefresh();
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('CREATE_RAFFLE_PAGE.TOAST_CREATED'),
          duration: 1200
        });
        yield t.present();
        _this3.nav.navigateBack('/tabs/home');
      } catch (err) {
        _this3.submitting = false;
        const message = _this3.readError(err);
        const t = yield _this3.toast.create({
          message,
          duration: 2200
        });
        yield t.present();
      }
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function CreateRafflePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CreateRafflePage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_raffles_raffles_api_service__WEBPACK_IMPORTED_MODULE_9__.RafflesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CreateRafflePage,
    selectors: [["app-create-raffle"]],
    standalone: false,
    decls: 122,
    vars: 95,
    consts: [["translucent", "true", 1, "create-header"], ["slot", "start"], ["defaultHref", "/tabs/home"], ["slot", "end"], ["fill", "clear", 1, "help-btn", 3, "click"], ["slot", "icon-only", "name", "help"], [1, "create-content", 3, "fullscreen"], [1, "create-form", 3, "ngSubmit", "formGroup"], [1, "section"], [1, "section-head"], ["name", "cube-outline"], [1, "glass-card"], ["for", "raffle-title", 1, "field-label"], ["id", "raffle-title", "type", "text", "formControlName", "title", 1, "field-input", 3, "placeholder"], ["class", "field-error", 4, "ngIf"], ["for", "raffle-real-value", 1, "field-label"], ["id", "raffle-real-value", "type", "number", "min", "0", "formControlName", "realValue", 1, "field-input", 3, "placeholder"], ["for", "raffle-description", 1, "field-label"], ["id", "raffle-description", "rows", "3", "formControlName", "description", 1, "field-textarea", 3, "placeholder"], ["type", "button", 1, "upload-zone", 3, "click", "disabled"], [1, "upload-icon-wrap"], ["name", "camera-outline"], [1, "upload-title"], [1, "upload-sub"], ["class", "preview", 4, "ngIf"], ["for", "raffle-category", 1, "field-label"], ["id", "raffle-category", "formControlName", "categoryId", 1, "field-input"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "settings-outline"], [1, "grid-three"], ["for", "raffle-ticket-price", 1, "field-label"], ["id", "raffle-ticket-price", "type", "number", "min", "1", "formControlName", "ticketPrice", 1, "field-input", 3, "placeholder"], ["for", "raffle-total-tickets", 1, "field-label"], ["id", "raffle-total-tickets", "type", "number", "min", "1", "formControlName", "totalTickets", 1, "field-input", 3, "placeholder"], ["for", "raffle-currency", 1, "field-label"], ["id", "raffle-currency", "formControlName", "currency", 1, "field-input"], ["value", "XAF"], ["value", "EUR"], ["value", "USD"], ["for", "raffle-end-at", 1, "field-label"], ["id", "raffle-end-at", "type", "datetime-local", "formControlName", "endAt", 1, "field-input"], [1, "projection-card"], [1, "projection-top"], [1, "projection-sub"], [1, "projection-note"], [1, "publish-row"], [1, "publish-text"], ["formControlName", "publishNow"], [1, "bottom-spacer"], ["translucent", "true", 1, "create-footer"], [1, "footer-inner"], ["type", "button", 1, "submit-btn", 3, "click", "disabled"], [4, "ngIf"], ["animated", "", "class", "btn-skeleton", 4, "ngIf"], ["name", "checkmark-circle-outline"], [1, "field-error"], [1, "preview"], [3, "src"], [3, "value"], ["animated", "", 1, "btn-skeleton"]],
    template: function CreateRafflePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-buttons", 3)(8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateRafflePage_Template_ion_button_click_8_listener() {
          return ctx.showHelp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ion-content", 6)(11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CreateRafflePage_Template_form_ngSubmit_11_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "section", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 11)(19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CreateRafflePage_p_24_Template, 3, 3, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateRafflePage_Template_button_click_35_listener() {
          return ctx.pickImage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, CreateRafflePage_div_45_Template, 3, 4, "div", 24)(46, CreateRafflePage_p_46_Template, 3, 3, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, CreateRafflePage_option_51_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "section", 8)(53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "ion-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 11)(59, "div", 29)(60, "div")(61, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div")(67, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div")(73, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "select", 35)(77, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "XAF (FCFA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "EUR (\u20AC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "USD ($)");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, CreateRafflePage_p_87_Template, 3, 3, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 41)(89, "div", 42)(90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "div", 45)(107, "div", 46)(108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](114, "ion-toggle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "ion-footer", 49)(117, "div", 50)(118, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CreateRafflePage_Template_button_click_118_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](119, CreateRafflePage_span_119_Template, 3, 3, "span", 52)(120, CreateRafflePage_ion_skeleton_text_120_Template, 1, 0, "ion-skeleton-text", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](121, "ion-icon", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 41, "CREATE_RAFFLE_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 43, "CREATE_RAFFLE_PAGE.PRODUCT_DETAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 45, "CREATE_RAFFLE_PAGE.PRODUCT_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 47, "CREATE_RAFFLE_PAGE.PRODUCT_NAME_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.titleControl.invalid && ctx.titleControl.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 49, "CREATE_RAFFLE_PAGE.REAL_PRICE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 51, "CREATE_RAFFLE_PAGE.REAL_PRICE_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 53, "CREATE_RAFFLE_PAGE.DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 55, "CREATE_RAFFLE_PAGE.DESCRIPTION_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.previewUrl || ctx.imageControl.value ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 57, "CREATE_RAFFLE_PAGE.CHANGE_PHOTO") : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 59, "CREATE_RAFFLE_PAGE.UPLOAD_PHOTO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 61, "CREATE_RAFFLE_PAGE.UPLOAD_HINT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.previewUrl || ctx.imageControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.imageControl.invalid && ctx.imageControl.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 63, "CREATE_RAFFLE_PAGE.CATEGORY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.categoryOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](57, 65, "CREATE_RAFFLE_PAGE.RAFFLE_SETTINGS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 67, "CREATE_RAFFLE_PAGE.TICKET_PRICE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 69, "CREATE_RAFFLE_PAGE.TICKET_PRICE_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 71, "CREATE_RAFFLE_PAGE.TOTAL_TICKETS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](71, 73, "CREATE_RAFFLE_PAGE.TOTAL_TICKETS_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](75, 75, "CREATE_RAFFLE_PAGE.CURRENCY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 77, "CREATE_RAFFLE_PAGE.DRAW_DATE_TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.form.controls["endAt"].errors == null ? null : ctx.form.controls["endAt"].errors["pastDate"]) && ctx.form.controls["endAt"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](92, 79, "CREATE_RAFFLE_PAGE.COVERAGE_THRESHOLD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx.coverageTicketTarget, " ", ctx.coverageTicketTarget > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](95, 81, "CREATE_RAFFLE_PAGE.TICKETS") : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](96, 83, "CREATE_RAFFLE_PAGE.TICKET"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](99, 85, "CREATE_RAFFLE_PAGE.REAL_PRICE_LABEL"), ": ", ctx.safeRealValue, " ", ctx.form.controls["currency"].value || "XAF", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](102, 87, "CREATE_RAFFLE_PAGE.ESTIMATED_COVERAGE"), ": ", ctx.projectedCoverageAmount, " ", ctx.form.controls["currency"].value || "XAF", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](105, 89, "CREATE_RAFFLE_PAGE.PROJECTION_NOTE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](110, 91, "CREATE_RAFFLE_PAGE.PUBLISH_NOW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](113, 93, "CREATE_RAFFLE_PAGE.PUBLISH_HINT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.submitting || ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.submitting);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --bg: var(--app-bg);\n  --bg-soft: var(--app-bg);\n  --card: var(--app-surface);\n  --stroke: var(--app-border);\n  --text-main: var(--app-ink);\n  --text-muted: var(--app-muted);\n  --accent: var(--app-primary);\n}\n\n.create-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  --border-color: var(--app-border);\n  --color: var(--text-main);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.create-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n\n.create-header[_ngcontent-%COMP%]   .help-btn[_ngcontent-%COMP%] {\n  --color: var(--accent);\n}\n\n.create-content[_ngcontent-%COMP%] {\n  --background:\n    var(--app-bg);\n}\n\n.create-form[_ngcontent-%COMP%] {\n  padding: 16px 14px 24px;\n  color: var(--text-main);\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  padding-inline: 4px;\n}\n\n.section-head[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--accent);\n}\n\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.86rem;\n  text-transform: uppercase;\n  letter-spacing: 0.09em;\n  color: var(--text-muted);\n}\n\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--stroke);\n  border-radius: 24px;\n  padding: 16px;\n  box-shadow: none;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 8px 4px;\n  font-size: 0.95rem;\n  color: var(--app-primary);\n  font-weight: 600;\n}\n\n.field-input[_ngcontent-%COMP%], \n.field-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border);\n  border-radius: 18px;\n  background: var(--app-surface);\n  color: var(--text-main);\n  padding: 14px 14px;\n  font-size: 1rem;\n  outline: none;\n  margin-bottom: 14px;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n\n.field-input[_ngcontent-%COMP%]::placeholder, \n.field-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--app-muted);\n}\n\n.field-input[_ngcontent-%COMP%]:focus, \n.field-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-border-strong);\n  box-shadow: none;\n}\n\n.field-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 110px;\n}\n\n.grid-two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.grid-three[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.upload-zone[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px dashed var(--app-border-strong);\n  border-radius: 20px;\n  background: var(--app-surface);\n  min-height: 152px;\n  padding: 18px 16px;\n  margin-bottom: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: var(--text-main);\n}\n\n.upload-icon-wrap[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n  margin-bottom: 8px;\n}\n\n.upload-icon-wrap[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.upload-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.upload-sub[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: var(--text-muted);\n  font-size: 0.88rem;\n}\n\n.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 14px;\n  border: 1px solid var(--stroke);\n  margin-bottom: 12px;\n  max-height: 220px;\n  object-fit: cover;\n}\n\n.publish-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border: 1px solid var(--app-border-strong);\n  background: var(--app-primary-soft);\n  border-radius: 16px;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.publish-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n\n.publish-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.8rem;\n}\n\n.projection-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 12px;\n  margin: 4px 0 10px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border-strong);\n}\n\n.projection-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n\n.projection-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n  font-size: 0.82rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n\n.projection-top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-ink);\n  font-size: 1rem;\n}\n\n.projection-sub[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n  font-size: 0.86rem;\n  margin-top: 2px;\n}\n\n.projection-note[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: var(--app-primary);\n  font-size: 0.76rem;\n  line-height: 1.35;\n}\n\n.field-error[_ngcontent-%COMP%] {\n  margin: -6px 2px 12px;\n  font-size: 0.8rem;\n  color: var(--app-danger);\n}\n\n.bottom-spacer[_ngcontent-%COMP%] {\n  height: 92px;\n}\n\n.create-footer[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  --border-color: var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  position: relative;\n  z-index: 30;\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  padding: 10px 14px calc(10px + env(safe-area-inset-bottom));\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 54px;\n  border-radius: 18px;\n  border: none;\n  color: var(--app-on-primary);\n  font-size: 1.02rem;\n  font-weight: 900;\n  letter-spacing: 0.01em;\n  background: var(--app-primary);\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.58;\n}\n\n.btn-skeleton[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 18px;\n  border-radius: 999px;\n  opacity: 0.45;\n}\n\n@media (max-width: 720px) {\n  .grid-two[_ngcontent-%COMP%], \n   .grid-three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vY3JlYXRlLXJhZmZsZS9jcmVhdGUtcmFmZmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtpQkFBQTtBQUVGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMERBQUE7QUFDRjs7QUFFQTs7RUFFRSx1QkFBQTtBQUNGOztBQUVBOztFQUVFLHNDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDJEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFOztJQUVFLDBCQUFBO0VBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLWJnOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tYmctc29mdDogdmFyKC0tYXBwLWJnKTtcclxuICAtLWNhcmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAtLXN0cm9rZTogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgLS10ZXh0LW1haW46IHZhcigtLWFwcC1pbmspO1xyXG4gIC0tdGV4dC1tdXRlZDogdmFyKC0tYXBwLW11dGVkKTtcclxuICAtLWFjY2VudDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG4uY3JlYXRlLWhlYWRlciBpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAtLWNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmNyZWF0ZS1oZWFkZXIgaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMDVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcblxyXG4uY3JlYXRlLWhlYWRlciAuaGVscC1idG4ge1xyXG4gIC0tY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuXHJcbi5jcmVhdGUtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOlxyXG4gICAgdmFyKC0tYXBwLWJnKTtcclxufVxyXG5cclxuLmNyZWF0ZS1mb3JtIHtcclxuICBwYWRkaW5nOiAxNnB4IDE0cHggMjRweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWlubGluZTogNHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZCBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA5ZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG59XHJcblxyXG4uZ2xhc3MtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlKTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZpZWxkLWxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgMCA4cHggNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5maWVsZC1pbnB1dCxcclxuLmZpZWxkLXRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcclxuICBwYWRkaW5nOiAxNHB4IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xyXG59XHJcblxyXG4uZmllbGQtaW5wdXQ6OnBsYWNlaG9sZGVyLFxyXG4uZmllbGQtdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLmZpZWxkLWlucHV0OmZvY3VzLFxyXG4uZmllbGQtdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5maWVsZC10ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICBtaW4taGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLmdyaWQtdHdvIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5ncmlkLXRocmVlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWQtem9uZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBtaW4taGVpZ2h0OiAxNTJweDtcclxuICBwYWRkaW5nOiAxOHB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XHJcbn1cclxuXHJcbi51cGxvYWQtaWNvbi13cmFwIHtcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnVwbG9hZC1pY29uLXdyYXAgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4udXBsb2FkLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi51cGxvYWQtc3ViIHtcclxuICBtYXJnaW46IDVweCAwIDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcclxufVxyXG5cclxuLnByZXZpZXcgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0cm9rZSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBtYXgtaGVpZ2h0OiAyMjBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnB1Ymxpc2gtcm93IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5wdWJsaXNoLXRleHQgcCB7XHJcbiAgbWFyZ2luOiAwIDAgM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG4ucHVibGlzaC10ZXh0IHNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLnByb2plY3Rpb24tY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIG1hcmdpbjogNHB4IDAgMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG59XHJcblxyXG4ucHJvamVjdGlvbi10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLnByb2plY3Rpb24tdG9wIHNwYW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcclxufVxyXG5cclxuLnByb2plY3Rpb24tdG9wIHN0cm9uZyB7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3Rpb24tc3ViIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0aW9uLW5vdGUge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zNTtcclxufVxyXG5cclxuLmZpZWxkLWVycm9yIHtcclxuICBtYXJnaW46IC02cHggMnB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6IHZhcigtLWFwcC1kYW5nZXIpO1xyXG59XHJcblxyXG4uYm90dG9tLXNwYWNlciB7XHJcbiAgaGVpZ2h0OiA5MnB4O1xyXG59XHJcblxyXG4uY3JlYXRlLWZvb3RlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDMwO1xyXG59XHJcblxyXG4uZm9vdGVyLWlubmVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHggY2FsYygxMHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMS4wMnJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41ODtcclxufVxyXG5cclxuLmJ0bi1za2VsZXRvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBvcGFjaXR5OiAwLjQ1O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAuZ3JpZC10d28sXHJcbiAgLmdyaWQtdGhyZWUge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 2546
/*!***************************************************!*\
  !*** ./src/app/shared/utils/image-compression.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageCompressionError: () => (/* binding */ ImageCompressionError),
/* harmony export */   compressImageFile: () => (/* binding */ compressImageFile)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

class ImageCompressionError extends Error {
  constructor(code) {
    super(code);
    this.code = code;
    this.name = 'ImageCompressionError';
  }
}
const SUPPORTED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const canvasToBlob = (canvas, mimeType, quality) => new Promise(resolve => {
  canvas.toBlob(resolve, mimeType, quality);
});
function loadImage(_x) {
  return _loadImage.apply(this, arguments);
}
function _loadImage() {
  _loadImage = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (source) {
    const objectUrl = URL.createObjectURL(source);
    const image = new Image();
    try {
      yield new Promise((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () => reject(new ImageCompressionError('DECODE_FAILED'));
        image.src = objectUrl;
      });
      return {
        image,
        objectUrl
      };
    } catch (error) {
      URL.revokeObjectURL(objectUrl);
      throw error;
    }
  });
  return _loadImage.apply(this, arguments);
}
function outputFilename(source, mimeType) {
  const original = source instanceof File ? source.name : 'raffle-image';
  const base = original.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 80);
  const extension = mimeType === 'image/webp' ? 'webp' : 'jpg';
  return `${base || 'raffle-image'}.${extension}`;
}
function compressImageFile(_x2) {
  return _compressImageFile.apply(this, arguments);
}
function _compressImageFile() {
  _compressImageFile = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (source, options = {}) {
    const maxWidth = Math.max(320, options.maxWidth ?? 1600);
    const maxHeight = Math.max(320, options.maxHeight ?? 1600);
    const maxSourceBytes = Math.max(1024 * 1024, options.maxSourceBytes ?? 20 * 1024 * 1024);
    const maxOutputBytes = Math.max(256 * 1024, options.maxOutputBytes ?? Math.floor(4.5 * 1024 * 1024));
    const mimeType = String(source.type ?? '').trim().toLowerCase();
    if (!SUPPORTED_IMAGE_TYPES.has(mimeType)) {
      throw new ImageCompressionError('UNSUPPORTED_FORMAT');
    }
    if (!source.size || source.size > maxSourceBytes) {
      throw new ImageCompressionError('SOURCE_TOO_LARGE');
    }
    const {
      image,
      objectUrl
    } = yield loadImage(source);
    try {
      const naturalWidth = Number(image.naturalWidth || image.width);
      const naturalHeight = Number(image.naturalHeight || image.height);
      if (!naturalWidth || !naturalHeight) {
        throw new ImageCompressionError('DECODE_FAILED');
      }
      const initialScale = Math.min(1, maxWidth / naturalWidth, maxHeight / naturalHeight);
      let width = Math.max(1, Math.round(naturalWidth * initialScale));
      let height = Math.max(1, Math.round(naturalHeight * initialScale));
      let quality = Math.max(0.55, Math.min(0.9, options.initialQuality ?? 0.82));
      let best = null;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', {
        alpha: false
      });
      if (!context) throw new ImageCompressionError('DECODE_FAILED');
      for (let attempt = 0; attempt < 7; attempt += 1) {
        canvas.width = width;
        canvas.height = height;
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        const webp = yield canvasToBlob(canvas, 'image/webp', quality);
        const output = webp && webp.type === 'image/webp' ? webp : yield canvasToBlob(canvas, 'image/jpeg', quality);
        if (!output) throw new ImageCompressionError('DECODE_FAILED');
        if (!best || output.size < best.size) best = output;
        if (output.size <= maxOutputBytes) {
          return new File([output], outputFilename(source, output.type), {
            type: output.type,
            lastModified: Date.now()
          });
        }
        if (quality > 0.58) {
          quality = Math.max(0.55, quality - 0.09);
        } else {
          width = Math.max(320, Math.round(width * 0.82));
          height = Math.max(320, Math.round(height * 0.82));
          quality = 0.7;
        }
      }
      if (best && best.size <= maxOutputBytes) {
        return new File([best], outputFilename(source, best.type), {
          type: best.type,
          lastModified: Date.now()
        });
      }
      throw new ImageCompressionError('OUTPUT_TOO_LARGE');
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  });
  return _compressImageFile.apply(this, arguments);
}

/***/ }

}]);
//# sourceMappingURL=src_app_pages_admin_create-raffle_create-raffle_module_ts.js.map