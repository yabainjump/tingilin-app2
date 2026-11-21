"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_payment-confirmation_payment-confirmation_module_ts-src_app_services_responsibl-43c141"],{

/***/ 1269
/*!***********************************************************************************!*\
  !*** ./src/app/pages/payment-confirmation/payment-confirmation-routing.module.ts ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentConfirmationPageRoutingModule: () => (/* binding */ PaymentConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _payment_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-confirmation.page */ 4455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _payment_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.PaymentConfirmationPage
}];
class PaymentConfirmationPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function PaymentConfirmationPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaymentConfirmationPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: PaymentConfirmationPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaymentConfirmationPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 7180
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment-confirmation/payment-confirmation.module.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentConfirmationPageModule: () => (/* binding */ PaymentConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _payment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-confirmation-routing.module */ 1269);
/* harmony import */ var _payment_confirmation_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-confirmation.page */ 4455);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







class PaymentConfirmationPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function PaymentConfirmationPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaymentConfirmationPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: PaymentConfirmationPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _payment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_3__.PaymentConfirmationPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PaymentConfirmationPageModule, {
    declarations: [_payment_confirmation_page__WEBPACK_IMPORTED_MODULE_4__.PaymentConfirmationPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _payment_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_3__.PaymentConfirmationPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ },

/***/ 4455
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment-confirmation/payment-confirmation.page.ts ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentConfirmationPage: () => (/* binding */ PaymentConfirmationPage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_app_shared_utils_mobile_operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/utils/mobile-operator */ 3541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_core_api_payments_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/api/payments-api.service */ 5452);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1339);
/* harmony import */ var src_app_services_responsible_play_responsible_play_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/responsible-play/responsible-play-guard.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);

var _staticBlock;













const _c0 = a0 => ({
  operator: a0
});
const _c1 = a0 => ({
  seconds: a0
});
function PaymentConfirmationPage_ng_container_10_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "PAYMENT_CONFIRMATION_PAGE.CONFIRM_PAYMENT"));
  }
}
function PaymentConfirmationPage_ng_container_10_button_60_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "PAYMENT_CONFIRMATION_PAGE.VERIFY_PAYMENT"));
  }
}
function PaymentConfirmationPage_ng_container_10_button_60_ion_skeleton_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-skeleton-text", 50);
  }
}
function PaymentConfirmationPage_ng_container_10_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_ng_container_10_button_60_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.verifyPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PaymentConfirmationPage_ng_container_10_button_60_span_1_Template, 3, 3, "span", 48)(2, PaymentConfirmationPage_ng_container_10_button_60_ion_skeleton_text_2_Template, 1, 0, "ion-skeleton-text", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.loading);
  }
}
function PaymentConfirmationPage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function PaymentConfirmationPage_ng_container_10_Template_img_error_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onProductImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 14)(6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "TINGUILIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 18)(12, "div")(13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 22)(23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 24)(27, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_ng_container_10_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.paymentMethod = "ORANGE");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 26)(29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Orange Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_ng_container_10_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.paymentMethod = "MTN");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 26)(36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "MTN MoMo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 22)(45, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 35)(49, "div", 36)(50, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\uD83C\uDDE8\uD83C\uDDF2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "+237");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "ion-input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PaymentConfirmationPage_ng_container_10_Template_ion_input_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.userPhone, $event) || (ctx_r2.userPhone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PaymentConfirmationPage_ng_container_10_Template_ion_input_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 41)(58, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_ng_container_10_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.confirmPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, PaymentConfirmationPage_ng_container_10_ng_container_59_Template, 5, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, PaymentConfirmationPage_ng_container_10_button_60_Template, 3, 3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const payBusy_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.imageUrl || ctx_r2.fallbackImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 28, "PAYMENT_CONFIRMATION_PAGE.TOTAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r2.quantity, " ", ctx_r2.quantity > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 30, "PAYMENT_CONFIRMATION_PAGE.TICKETS") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 32, "PAYMENT_CONFIRMATION_PAGE.TICKET"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.amount, " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 34, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_METHOD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r2.paymentMethod === "ORANGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading || ctx_r2.directChargePending);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("on", ctx_r2.paymentMethod === "ORANGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r2.paymentMethod === "MTN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading || ctx_r2.directChargePending);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("on", ctx_r2.paymentMethod === "MTN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](43, 36, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_HINT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 38, "PAYMENT_CONFIRMATION_PAGE.PHONE_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 40, "PAYMENT_CONFIRMATION_PAGE.PHONE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx_r2.loading || ctx_r2.directChargePending);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.loading || ctx_r2.directChargePending);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.loading)("ngIfElse", payBusy_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](65, 42, "PAYMENT_CONFIRMATION_PAGE.SECURE_PAYMENT"));
  }
}
function PaymentConfirmationPage_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-skeleton-text", 50);
  }
}
function PaymentConfirmationPage_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-skeleton-text", 51)(2, "ion-skeleton-text", 52)(3, "ion-skeleton-text", 53)(4, "ion-skeleton-text", 54)(5, "ion-skeleton-text", 55)(6, "ion-skeleton-text", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PaymentConfirmationPage_div_15_ion_spinner_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-spinner", 69);
  }
}
function PaymentConfirmationPage_div_15_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 70);
  }
}
function PaymentConfirmationPage_div_15_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ion-icon", 71);
  }
}
function PaymentConfirmationPage_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_STARTING_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_STARTING_MESSAGE"), " ");
  }
}
function PaymentConfirmationPage_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, ctx_r2.hostedCheckoutAvailable ? "PAYMENT_CONFIRMATION_PAGE.PAYMENT_HOSTED_TITLE" : "PAYMENT_CONFIRMATION_PAGE.PAYMENT_WAITING_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 4, ctx_r2.hostedCheckoutAvailable ? "PAYMENT_CONFIRMATION_PAGE.PAYMENT_HOSTED_MESSAGE" : "PAYMENT_CONFIRMATION_PAGE.PAYMENT_WAITING_MESSAGE", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx_r2.paymentMethod)), " ");
  }
}
function PaymentConfirmationPage_div_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_FALLBACK_WAIT_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 4, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_FALLBACK_WAIT_MESSAGE", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c1, ctx_r2.fallbackCountdownSeconds)), " ");
  }
}
function PaymentConfirmationPage_div_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_SUCCESS_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_SUCCESS_MESSAGE"), " ");
  }
}
function PaymentConfirmationPage_div_15_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_FAILED_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_FAILED_MESSAGE"), " ");
  }
}
function PaymentConfirmationPage_div_15_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_CANCELLED_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_CANCELLED_MESSAGE"), " ");
  }
}
function PaymentConfirmationPage_div_15_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "h2", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_EXPIRED_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 4, "PAYMENT_CONFIRMATION_PAGE.PAYMENT_EXPIRED_MESSAGE"), " ");
  }
}
function PaymentConfirmationPage_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r2.paymentWithTaxes || ctx_r2.amount, " FCFA");
  }
}
function PaymentConfirmationPage_div_15_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_div_15_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openHostedCheckout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "PAYMENT_CONFIRMATION_PAGE.OPEN_FALLBACK_CHECKOUT"), " ");
  }
}
function PaymentConfirmationPage_div_15_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_div_15_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.cancelPaymentWaiting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "PAYMENT_CONFIRMATION_PAGE.CANCEL_WAITING"), " ");
  }
}
function PaymentConfirmationPage_div_15_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_div_15_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closePaymentOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "PAYMENT_CONFIRMATION_PAGE.CLOSE"), " ");
  }
}
function PaymentConfirmationPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57)(1, "section", 58)(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PaymentConfirmationPage_div_15_ion_spinner_3_Template, 1, 0, "ion-spinner", 60)(4, PaymentConfirmationPage_div_15_ion_icon_4_Template, 1, 0, "ion-icon", 61)(5, PaymentConfirmationPage_div_15_ion_icon_5_Template, 1, 0, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](6, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PaymentConfirmationPage_div_15_div_7_Template, 7, 6, "div", 64)(8, PaymentConfirmationPage_div_15_div_8_Template, 7, 9, "div", 64)(9, PaymentConfirmationPage_div_15_div_9_Template, 7, 9, "div", 64)(10, PaymentConfirmationPage_div_15_div_10_Template, 7, 6, "div", 64)(11, PaymentConfirmationPage_div_15_div_11_Template, 7, 6, "div", 64)(12, PaymentConfirmationPage_div_15_div_12_Template, 7, 6, "div", 64)(13, PaymentConfirmationPage_div_15_div_13_Template, 7, 6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PaymentConfirmationPage_div_15_div_14_Template, 5, 2, "div", 65)(15, PaymentConfirmationPage_div_15_button_15_Template, 3, 3, "button", 66)(16, PaymentConfirmationPage_div_15_button_16_Template, 3, 3, "button", 67)(17, PaymentConfirmationPage_div_15_button_17_Template, 3, 3, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-success", ctx_r2.paymentOverlayState === "SUCCESS")("is-failed", ctx_r2.paymentOverlayState === "FAILED" || ctx_r2.paymentOverlayState === "EXPIRED" || ctx_r2.paymentOverlayState === "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-success", ctx_r2.paymentOverlayState === "SUCCESS")("is-failed", ctx_r2.paymentOverlayState === "FAILED" || ctx_r2.paymentOverlayState === "EXPIRED" || ctx_r2.paymentOverlayState === "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentOverlayState === "STARTING" || ctx_r2.paymentOverlayState === "FALLBACK_WAITING" || ctx_r2.paymentOverlayState === "WAITING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentOverlayState === "SUCCESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentOverlayState === "FAILED" || ctx_r2.paymentOverlayState === "EXPIRED" || ctx_r2.paymentOverlayState === "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx_r2.paymentOverlayState);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "STARTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "WAITING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "FALLBACK_WAITING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "SUCCESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "FAILED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "CANCELLED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "EXPIRED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentOverlayState !== "STARTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.hostedCheckoutAvailable && ctx_r2.paymentLink && ctx_r2.paymentOverlayState === "WAITING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentOverlayState === "WAITING" || ctx_r2.paymentOverlayState === "FALLBACK_WAITING");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.paymentOverlayState === "FAILED" || ctx_r2.paymentOverlayState === "EXPIRED" || ctx_r2.paymentOverlayState === "CANCELLED");
  }
}
class PaymentConfirmationPage {
  constructor(route, router, paymentsApi, toastCtrl, translate, auth, responsiblePlay) {
    var _this = this;
    this.route = route;
    this.router = router;
    this.paymentsApi = paymentsApi;
    this.toastCtrl = toastCtrl;
    this.translate = translate;
    this.auth = auth;
    this.responsiblePlay = responsiblePlay;
    this.title = '';
    this.fallbackImage = 'assets/img/placeholder.png';
    this.quantity = 1;
    this.ticketUnitPrice = 0;
    this.amount = 0;
    // Form
    this.paymentMethod = 'ORANGE';
    this.userPhone = '';
    this.userCountry = 'Cameroon';
    this.payerEmail = '';
    this.payerName = '';
    this.directChargePending = false;
    this.fallbackCountdownSeconds = 0;
    this.hostedCheckoutAvailable = false;
    this.paymentOverlayVisible = false;
    this.paymentOverlayState = 'STARTING';
    this.intentKey = '';
    this.paymentContext = '';
    this.verificationInFlight = false;
    this.verificationIntervalMs = 10_000;
    this.hostedFallbackDelayMs = 30_000;
    this.defaultPaymentTtlMs = 10 * 60 * 1000;
    this.loading = false;
    // Une seule relance automatique apres la confirmation 18+.
    this.ageRetryDone = false;
    this.pageLoading = true;
    this.visibilityHandler = /*#__PURE__*/(0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Quand l’onglet redevient visible, on verify
      if (document.visibilityState === 'visible' && _this.transactionId) {
        yield _this.verifyPayment();
      }
    });
  }
  ionViewWillEnter() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.stopVerificationPolling();
      _this2.stopHostedCheckoutFallback(false);
      _this2.stopSuccessNavigation();
      _this2.pageLoading = true;
      _this2.payerEmail = '';
      _this2.payerName = '';
      // ✅ récupère les paramètres depuis navigation (à adapter selon ton flow)
      // Exemple: /payment-confirmation?raffleId=...&title=...&qty=...&unit=...
      const qp = _this2.route.snapshot.queryParamMap;
      _this2.raffleId = qp.get('raffleId') || '';
      _this2.title = qp.get('title') || _this2.title;
      _this2.imageUrl = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteMediaUrl)(qp.get('imageUrl'), src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseUrl);
      _this2.quantity = Number(qp.get('qty') || 1);
      _this2.ticketUnitPrice = Number(qp.get('unit') || 0);
      _this2.amount = _this2.quantity * _this2.ticketUnitPrice;
      const nextPaymentContext = `${_this2.raffleId}:${_this2.quantity}:${_this2.amount}`;
      const isTerminalPayment = _this2.paymentStatus === 'SUCCESS' || _this2.paymentStatus === 'FAILED';
      if (!_this2.paymentContext || _this2.paymentContext !== nextPaymentContext || isTerminalPayment) {
        _this2.resetPaymentState();
        _this2.intentKey = _this2.buildIntentKey();
      }
      _this2.paymentContext = nextPaymentContext;
      if (!_this2.raffleId) {
        _this2.presentToast(_this2.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_RAFFLE_ID'));
      }
      yield _this2.prefillPayerProfile();
      _this2.pageLoading = false;
      if (_this2.directChargePending && _this2.transactionId && (_this2.paymentOverlayState === 'WAITING' || _this2.paymentOverlayState === 'FALLBACK_WAITING')) {
        _this2.paymentOverlayVisible = true;
        _this2.startVerificationPolling();
        if (_this2.paymentOverlayState === 'FALLBACK_WAITING' && _this2.paymentLink) {
          _this2.scheduleHostedCheckoutFallback();
        }
      }
    })();
  }
  back() {
    history.back();
  }
  onProductImageError(event) {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    if (image.getAttribute('src') === this.fallbackImage) return;
    image.src = this.fallbackImage;
  }
  confirmPayment() {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.loading) return;
      if (!_this3.raffleId) return;
      if (!_this3.auth.isLoggedIn()) {
        yield _this3.presentToast('Session expirée. Connecte-toi puis réessaie.');
        yield _this3.router.navigate(['/auth/login'], {
          queryParams: {
            redirect: `/tabs/payment-confirmation?raffleId=${encodeURIComponent(_this3.raffleId)}`
          }
        });
        return;
      }
      // validation simple
      const cleanedPhone = _this3.normalizeCameroonPhone(_this3.userPhone);
      if (!cleanedPhone) {
        return _this3.presentToast(_this3.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_INVALID_PHONE'));
      }
      if (!_this3.payerEmail) {
        return _this3.presentToast('Adresse e-mail introuvable. Reconnecte-toi puis réessaie.');
      }
      // Le prelevement part sur le portefeuille du numero: un numero MTN facture
      // en Orange Money (ou l'inverse) est refuse par l'operateur.
      const phoneOperator = (0,src_app_shared_utils_mobile_operator__WEBPACK_IMPORTED_MODULE_1__.detectCameroonMobileOperator)(cleanedPhone);
      if (phoneOperator && phoneOperator !== _this3.paymentMethod) {
        const label = op => op === 'MTN' ? 'MTN Mobile Money' : 'Orange Money';
        return _this3.presentToast(`Ce numéro est un numéro ${label(phoneOperator)}. Choisis ${label(phoneOperator)} ou utilise un numéro ${label(_this3.paymentMethod)}.`);
      }
      _this3.loading = true;
      _this3.directChargePending = false;
      _this3.paymentStatus = undefined;
      _this3.paymentOverlayState = 'STARTING';
      _this3.paymentOverlayVisible = true;
      try {
        const userEmail = _this3.payerEmail;
        const senderName = _this3.payerName || 'Tingilin User';
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this3.paymentsApi.createIntent({
          raffleId: _this3.raffleId,
          amount: _this3.amount,
          provider: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.paymentProvider,
          userEmail,
          userPhone: cleanedPhone,
          userCountry: _this3.userCountry,
          senderName,
          paymentMethodCode: _this3.paymentMethod,
          idempotencyKey: _this3.intentKey
        }));
        _this3.transactionId = res?.transactionId;
        _this3.paymentLink = _this3.safePaymentLink(res?.paymentLink);
        _this3.paymentWithTaxes = res?.paymentWithTaxes;
        _this3.paymentStatus = res?.status;
        _this3.paymentExpiresAt = _this3.normalizePaymentExpiry(res?.expiresAt);
        console.info('[PaymentFlow] Payment intent response received', {
          flow: res?.paymentFlow ?? 'UNKNOWN',
          status: res?.status ?? 'PENDING',
          hasHostedFallback: Boolean(_this3.paymentLink)
        });
        if (res?.provider === 'MOCK' && _this3.transactionId) {
          const mockProviderRef = ['MOCK', _this3.paymentMethod, Date.now().toString()].join('-');
          const mockResult = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this3.paymentsApi.mockConfirm(_this3.transactionId, mockProviderRef));
          if (mockResult?.status === 'SUCCESS') {
            _this3.paymentStatus = 'SUCCESS';
            _this3.showPaymentSuccess();
            return;
          }
        }
        if (_this3.paymentLink) {
          _this3.directChargePending = true;
          _this3.paymentOverlayState = 'FALLBACK_WAITING';
          yield _this3.presentToast(_this3.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_CHECKOUT_FALLBACK'));
          _this3.startVerificationPolling();
          _this3.scheduleHostedCheckoutFallback(true);
          return;
        }
        if (res?.provider === 'DIGIKUNTZ' && res?.paymentFlow === 'DIRECT_CHARGE' && _this3.transactionId) {
          _this3.directChargePending = true;
          _this3.paymentOverlayState = 'WAITING';
          yield _this3.presentToast(_this3.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_DIRECT_CHARGE_SENT', {
            operator: _this3.paymentMethod
          }));
          _this3.startVerificationPolling();
          return;
        }
        throw new Error(_this3.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_PAYMENT_LINK'));
      } catch (e) {
        const status = Number(e?.status ?? e?.error?.statusCode ?? 0);
        const rawErrorMessage = e?.error?.message;
        const message = Array.isArray(rawErrorMessage) ? rawErrorMessage.filter(Boolean).join(', ').trim() : String(rawErrorMessage ?? e?.message ?? '').trim();
        console.warn('[PaymentFlow] Payment intent failed', {
          httpStatus: status || 'unknown'
        });
        if (status === 401 || /no refresh token|unauthorized|jwt/i.test(message)) {
          _this3.paymentOverlayVisible = false;
          _this3.auth.logout();
          yield _this3.presentToast('Session expirée. Connecte-toi puis réessaie.');
          yield _this3.router.navigate(['/auth/login'], {
            queryParams: {
              redirect: `/tabs/payment-confirmation?raffleId=${encodeURIComponent(_this3.raffleId)}`
            }
          });
          return;
        }
        // Jeu responsable (18+ / limite de depense): aucun paiement n'a ete
        // engage, on ferme l'ecran d'attente et on explique.
        if (status === 403) {
          _this3.paymentOverlayVisible = false;
          _this3.directChargePending = false;
          const outcome = yield _this3.responsiblePlay.handlePurchaseError(e);
          if (outcome === 'RETRY' && !_this3.ageRetryDone) {
            _this3.ageRetryDone = true;
            _this3.loading = false;
            yield _this3.confirmPayment();
            return;
          }
          if (outcome !== 'UNHANDLED') return;
        }
        _this3.directChargePending = false;
        _this3.paymentOverlayState = 'FAILED';
        _this3.paymentOverlayVisible = true;
        // 400 = refus definitif, aucun prelevement engage (l'API clot la
        // tentative): le prochain essai doit partir avec une nouvelle cle, sinon
        // il retomberait sur la tentative close. Les 409/5xx gardent la cle
        // pour retrouver un paiement peut-etre en cours.
        if (status === 400) {
          _this3.intentKey = _this3.buildIntentKey();
        }
        if (status === 409) {
          yield _this3.presentToast(message || 'Une tentative de paiement identique existe deja. Patiente quelques secondes puis reessaie.');
          return;
        }
        yield _this3.presentToast(message || _this3.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_PAYMENT_ERROR'));
      } finally {
        _this3.loading = false;
      }
    })();
  }
  prefillPayerProfile() {
    var _this4 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const me = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this4.auth.me());
        const email = String(me?.email ?? '').trim();
        const firstName = String(me?.firstName ?? '').trim();
        const lastName = String(me?.lastName ?? '').trim();
        const fullName = `${firstName} ${lastName}`.trim();
        const username = String(me?.username ?? '').trim();
        const phone = String(me?.phone ?? '').replace(/\s|-/g, '').trim();
        _this4.payerEmail = email;
        _this4.payerName = fullName || username || 'Tingilin User';
        if (!_this4.userPhone && phone) {
          _this4.userPhone = phone;
          _this4.onPhoneChange(phone);
        }
      } catch {
        // user profile fetch can fail when token expires; keep manual phone entry.
      }
    })();
  }
  verifyPayment() {
    var _this5 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (silent = false) {
      if (!_this5.transactionId) return;
      if (_this5.verificationInFlight) return _this5.paymentStatus;
      _this5.verificationInFlight = true;
      if (!silent) _this5.loading = true;
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this5.paymentsApi.verifyDigikuntz(_this5.transactionId));
        _this5.paymentStatus = res?.status || 'PENDING';
        console.info('[PaymentFlow] Payment status checked', {
          status: _this5.paymentStatus
        });
        if (res?.status === 'SUCCESS') {
          _this5.showPaymentSuccess();
          return 'SUCCESS';
        }
        if (res?.status === 'FAILED') {
          _this5.directChargePending = false;
          _this5.stopVerificationPolling();
          _this5.stopHostedCheckoutFallback();
          _this5.paymentOverlayState = res?.remoteStatus === 'payment_expired' ? 'EXPIRED' : 'FAILED';
          _this5.paymentOverlayVisible = true;
        }
        // Prelevement direct refuse par l'operateur: Digikuntz cree un lien de
        // checkout de secours, visible seulement via verify. Sans cela, l'app
        // attendait une validation USSD qui n'arrivera jamais (jusqu'a expiration).
        const fallbackLink = _this5.safePaymentLink(res?.paymentLink);
        if (fallbackLink && !_this5.paymentLink && _this5.directChargePending && (res?.status ?? 'PENDING') === 'PENDING') {
          _this5.paymentLink = fallbackLink;
          _this5.paymentOverlayState = 'FALLBACK_WAITING';
          _this5.paymentOverlayVisible = true;
          void _this5.presentToast(_this5.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_CHECKOUT_FALLBACK'));
          _this5.scheduleHostedCheckoutFallback(true);
        }
        if (!silent) {
          yield _this5.presentToast(_this5.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_STATUS', {
            status: res?.status || 'PENDING'
          }));
        }
        return res?.status || 'PENDING';
      } catch (e) {
        const status = Number(e?.status ?? e?.error?.statusCode ?? 0);
        console.warn('[PaymentFlow] Payment status check failed', {
          httpStatus: status || 'unknown'
        });
        if (!silent) {
          yield _this5.presentToast(e?.error?.message || e?.message || _this5.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_VERIFY_ERROR'));
        }
        return undefined;
      } finally {
        _this5.verificationInFlight = false;
        if (!silent) _this5.loading = false;
      }
    }).apply(this, arguments);
  }
  presentToast(message) {
    var _this6 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this6.toastCtrl.create({
        message,
        duration: 1800,
        position: 'top'
      });
      yield t.present();
    })();
  }
  ionViewDidEnter() {
    document.addEventListener('visibilitychange', this.visibilityHandler);
  }
  ionViewWillLeave() {
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback(false);
    this.stopSuccessNavigation();
  }
  cancelPaymentWaiting() {
    if (this.paymentOverlayState !== 'WAITING' && this.paymentOverlayState !== 'FALLBACK_WAITING') {
      return;
    }
    // Digikuntz ne fournit pas d'endpoint d'annulation. On arrête seulement
    // l'attente locale et on conserve la transaction pour pouvoir la vérifier.
    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback();
    this.paymentOverlayState = 'CANCELLED';
    this.paymentOverlayVisible = true;
  }
  closePaymentOverlay() {
    if (this.paymentOverlayState === 'STARTING' || this.paymentOverlayState === 'FALLBACK_WAITING' || this.paymentOverlayState === 'WAITING' || this.paymentOverlayState === 'SUCCESS') {
      return;
    }
    if (this.paymentOverlayState === 'FAILED' && this.paymentStatus === 'FAILED') {
      this.resetPaymentState();
      this.intentKey = this.buildIntentKey();
      return;
    }
    if (this.paymentOverlayState === 'EXPIRED') {
      this.resetPaymentState();
      this.intentKey = this.buildIntentKey();
      return;
    }
    this.paymentOverlayVisible = false;
  }
  buildIntentKey() {
    const safeRaffle = String(this.raffleId || 'raffle').replace(/[^a-zA-Z0-9_-]/g, '');
    const randomPart = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID().replace(/-/g, '').slice(0, 16) : `${Date.now()}${Math.floor(Math.random() * 9999)}`;
    return `payment-${safeRaffle}-${this.amount}-${randomPart}`.slice(0, 80);
  }
  safePaymentLink(value) {
    try {
      const parsed = new URL(String(value ?? '').trim());
      const host = parsed.hostname.toLowerCase();
      const trustedHost = host === 'app.digikuntz.com' || host === 'flutterwave.com' || host.endsWith('.flutterwave.com');
      return parsed.protocol === 'https:' && trustedHost ? parsed.toString() : undefined;
    } catch {
      return undefined;
    }
  }
  /**
   * Selectionne automatiquement l'operateur d'apres le numero saisi.
   * Avant: ORANGE par defaut, donc un client MTN qui ne changeait pas le
   * choix envoyait un prelevement Orange sur un numero MTN (refuse).
   */
  onPhoneChange(value) {
    const operator = (0,src_app_shared_utils_mobile_operator__WEBPACK_IMPORTED_MODULE_1__.detectCameroonMobileOperator)(value);
    if (operator) this.paymentMethod = operator;
  }
  normalizeCameroonPhone(value) {
    let digits = String(value ?? '').replace(/\D/g, '');
    if (digits.startsWith('00237')) digits = digits.slice(2);
    if (/^6\d{8}$/.test(digits)) digits = `237${digits}`;
    return /^2376\d{8}$/.test(digits) ? digits : undefined;
  }
  startVerificationPolling() {
    var _this7 = this;
    this.stopVerificationPolling();
    this.paymentExpiresAt ??= new Date(Date.now() + this.defaultPaymentTtlMs).toISOString();
    const deadline = new Date(this.paymentExpiresAt).getTime();
    const remainingMs = deadline - Date.now();
    if (!Number.isFinite(deadline) || remainingMs <= 0) {
      void this.expirePaymentWaiting();
      return;
    }
    this.expirationTimer = setTimeout(() => void this.expirePaymentWaiting(), remainingMs);
    const _poll = /*#__PURE__*/function () {
      var _ref2 = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this7.directChargePending || !_this7.transactionId) return;
        if (Date.now() >= deadline) {
          yield _this7.expirePaymentWaiting();
          return;
        }
        const status = yield _this7.verifyPayment(true);
        if (status === 'SUCCESS' || status === 'FAILED') return;
        _this7.verificationTimer = setTimeout(_poll, _this7.verificationIntervalMs);
      });
      return function poll() {
        return _ref2.apply(this, arguments);
      };
    }();
    this.verificationTimer = setTimeout(_poll, this.verificationIntervalMs);
  }
  stopVerificationPolling() {
    if (this.verificationTimer) {
      clearTimeout(this.verificationTimer);
      this.verificationTimer = undefined;
    }
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
      this.expirationTimer = undefined;
    }
  }
  scheduleHostedCheckoutFallback(resetDeadline = false) {
    if (!this.paymentLink || !this.directChargePending) return;
    this.stopHostedCheckoutFallback(false);
    if (resetDeadline || !this.fallbackLaunchAt) {
      this.fallbackLaunchAt = Date.now() + this.hostedFallbackDelayMs;
    }
    const updateCountdown = () => {
      const remainingMs = Math.max(0, this.fallbackLaunchAt - Date.now());
      this.fallbackCountdownSeconds = Math.ceil(remainingMs / 1000);
    };
    updateCountdown();
    console.info(`[PaymentFlow] Direct Pay observation window started (${this.fallbackCountdownSeconds}s)`);
    const remainingMs = Math.max(0, this.fallbackLaunchAt - Date.now());
    this.fallbackCountdownTimer = setInterval(updateCountdown, 1_000);
    this.fallbackTimer = setTimeout(() => void this.launchHostedCheckoutAfterGracePeriod(), remainingMs);
  }
  stopHostedCheckoutFallback(resetState = true) {
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = undefined;
    }
    if (this.fallbackCountdownTimer) {
      clearInterval(this.fallbackCountdownTimer);
      this.fallbackCountdownTimer = undefined;
    }
    if (resetState) {
      this.fallbackLaunchAt = undefined;
      this.fallbackCountdownSeconds = 0;
      this.hostedCheckoutAvailable = false;
    }
  }
  launchHostedCheckoutAfterGracePeriod() {
    var _this8 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this8.paymentLink || !_this8.directChargePending) return;
      _this8.stopHostedCheckoutFallback(false);
      _this8.fallbackCountdownSeconds = 0;
      // Do a final status check before opening the hosted checkout. This avoids
      // sending a customer to Flutterwave if Direct Pay just succeeded.
      const status = yield _this8.verifyPayment(true);
      if (status === 'SUCCESS' || status === 'FAILED') return;
      _this8.paymentOverlayState = 'WAITING';
      _this8.hostedCheckoutAvailable = true;
      console.info('[PaymentFlow] Direct Pay is still pending after 30s; requesting hosted checkout');
      _this8.openHostedCheckout();
    })();
  }
  openHostedCheckout() {
    const paymentLink = this.safePaymentLink(this.paymentLink);
    if (!paymentLink) {
      void this.presentToast(this.translate.instant('PAYMENT_CONFIRMATION_PAGE.TOAST_MISSING_PAYMENT_LINK'));
      return;
    }
    console.info('[PaymentFlow] Hosted checkout open requested');
    window.open(paymentLink, '_blank', 'noopener,noreferrer');
  }
  expirePaymentWaiting() {
    var _this9 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this9.directChargePending || !_this9.transactionId) return;
      _this9.stopVerificationPolling();
      _this9.stopHostedCheckoutFallback();
      const finalStatus = yield _this9.verifyPayment(true);
      if (finalStatus === 'SUCCESS' || finalStatus === 'FAILED') return;
      _this9.directChargePending = false;
      _this9.paymentStatus = 'EXPIRED';
      _this9.paymentOverlayState = 'EXPIRED';
      _this9.paymentOverlayVisible = true;
    })();
  }
  showPaymentSuccess() {
    this.directChargePending = false;
    this.paymentOverlayState = 'SUCCESS';
    this.paymentOverlayVisible = true;
    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback();
    this.stopSuccessNavigation();
    this.successNavigationTimer = setTimeout(() => {
      this.successNavigationTimer = undefined;
      void this.router.navigateByUrl('/tabs/participations');
    }, 1800);
  }
  stopSuccessNavigation() {
    if (this.successNavigationTimer) {
      clearTimeout(this.successNavigationTimer);
      this.successNavigationTimer = undefined;
    }
  }
  resetPaymentState() {
    this.stopVerificationPolling();
    this.stopHostedCheckoutFallback();
    this.paymentOverlayVisible = false;
    this.paymentOverlayState = 'STARTING';
    this.directChargePending = false;
    this.transactionId = undefined;
    this.paymentLink = undefined;
    this.paymentWithTaxes = undefined;
    this.paymentStatus = undefined;
    this.paymentExpiresAt = undefined;
  }
  normalizePaymentExpiry(value) {
    const timestamp = new Date(String(value ?? '')).getTime();
    return Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : new Date(Date.now() + this.defaultPaymentTtlMs).toISOString();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PaymentConfirmationPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaymentConfirmationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_api_payments_api_service__WEBPACK_IMPORTED_MODULE_8__.PaymentsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_responsible_play_responsible_play_guard_service__WEBPACK_IMPORTED_MODULE_12__.ResponsiblePlayGuardService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: PaymentConfirmationPage,
    selectors: [["app-payment-confirmation"]],
    standalone: false,
    decls: 16,
    vars: 7,
    consts: [["payBusy", ""], ["pageSkeleton", ""], ["translucent", "true", 1, "header-glass"], ["slot", "start"], ["defaultHref", "", 3, "click"], ["slot", "end"], ["fill", "clear", "disabled", "true"], [1, "page-bg", 3, "fullscreen"], [4, "ngIf", "ngIfElse"], ["class", "payment-overlay", "role", "dialog", "aria-modal", "true", "aria-labelledby", "payment-status-title", "aria-describedby", "payment-status-message", 4, "ngIf"], [1, "container"], [1, "glass-card", "product-card"], [1, "glow-dot"], [1, "product-img", 3, "error", "src", "alt"], [1, "product-body"], [1, "chip"], [1, "title"], [1, "divider"], [1, "totals"], [1, "label"], [1, "sub"], [1, "amount"], [1, "section"], [1, "section-title"], [1, "methods"], ["type", "button", 1, "method-card", "orange", 3, "click", "disabled"], [1, "method-top"], [1, "logo", "orange-logo"], ["src", "../../../assets/img/orange_money.jpg", "alt", "Orange Money", 1, "tgl1"], [1, "radio"], [1, "method-name"], ["type", "button", 1, "method-card", "mtn", 3, "click", "disabled"], [1, "logo", "mtn-logo"], ["src", "../../../assets/img/MobileMoney.jpg", "alt", "MTN Mobile Money", 1, "tgl2"], [1, "hint"], [1, "phone-wrap"], [1, "phone-left"], [1, "flag"], [1, "code"], ["type", "tel", "inputmode", "numeric", 1, "phone-input", 3, "ngModelChange", "placeholder", "ngModel", "readonly"], ["name", "phone-portrait-outline", 1, "phone-ico"], [1, "actions"], ["type", "button", 1, "pay-btn", 3, "click", "disabled"], ["type", "button", "class", "verify-btn", 3, "disabled", "click", 4, "ngIf"], [1, "secure"], ["name", "lock-closed-outline"], ["name", "arrow-forward-outline"], ["type", "button", 1, "verify-btn", 3, "click", "disabled"], [4, "ngIf"], ["animated", "", "class", "btn-skeleton", 4, "ngIf"], ["animated", "", 1, "btn-skeleton"], ["animated", "", 1, "sk", "sk-card"], ["animated", "", 1, "sk", "sk-title"], ["animated", "", 1, "sk", "sk-methods"], ["animated", "", 1, "sk", "sk-input"], ["animated", "", 1, "sk", "sk-btn"], ["animated", "", 1, "sk", "sk-btn", "sm"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "payment-status-title", "aria-describedby", "payment-status-message", 1, "payment-overlay"], ["aria-live", "assertive", 1, "payment-dialog"], [1, "payment-visual"], ["name", "crescent", 4, "ngIf"], ["name", "checkmark-outline", 4, "ngIf"], ["name", "close-outline", 4, "ngIf"], [3, "ngSwitch"], ["class", "payment-copy", 4, "ngSwitchCase"], ["class", "payment-summary", 4, "ngIf"], ["type", "button", "class", "payment-checkout-btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "payment-cancel-btn", 3, "click", 4, "ngIf"], ["type", "button", "class", "payment-close-btn", 3, "click", 4, "ngIf"], ["name", "crescent"], ["name", "checkmark-outline"], ["name", "close-outline"], [1, "payment-copy"], ["id", "payment-status-title"], ["id", "payment-status-message"], [1, "payment-summary"], ["type", "button", 1, "payment-checkout-btn", 3, "click"], ["type", "button", 1, "payment-cancel-btn", 3, "click"], ["type", "button", 1, "payment-close-btn", 3, "click"]],
    template: function PaymentConfirmationPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-buttons", 3)(3, "ion-back-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PaymentConfirmationPage_Template_ion_back_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.back());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-buttons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PaymentConfirmationPage_ng_container_10_Template, 66, 44, "ng-container", 8)(11, PaymentConfirmationPage_ng_template_11_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(13, PaymentConfirmationPage_ng_template_13_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PaymentConfirmationPage_div_15_Template, 18, 23, "div", 9);
      }
      if (rf & 2) {
        const pageSkeleton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 5, "PAYMENT_CONFIRMATION_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.pageLoading)("ngIfElse", pageSkeleton_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.paymentOverlayVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonBackButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --primary-2: var(--app-primary-soft);\n  --gold: var(--app-warning);\n  --bg: var(--app-bg);\n  --surface: var(--app-surface);\n}\n\n.header-glass[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  --color: var(--app-ink);\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n  border-bottom: 1px solid var(--app-border);\n}\n\n.page-bg[_ngcontent-%COMP%] {\n  --background: var(--bg);\n  background: var(--app-bg);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0 auto;\n  padding: 22px 18px calc(env(safe-area-inset-bottom) + 34px);\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n  border-radius: 26px;\n  box-shadow: none;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 14px;\n  padding: 16px;\n  overflow: hidden;\n}\n\n.glow-dot[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.product-img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 16px;\n  background-size: cover;\n  background-position: center;\n  border: 1px solid var(--app-border);\n  box-shadow: none;\n  flex: 0 0 auto;\n}\n\n.product-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.chip[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  line-height: 1.1;\n  color: var(--app-ink);\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--app-border);\n}\n\n.totals[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  color: var(--app-muted);\n}\n\n.sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-muted);\n}\n\n.amount[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--gold);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--app-muted);\n  margin: 6px 2px 10px;\n}\n\n.methods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.method-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--app-border);\n  border-radius: 20px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  text-align: left;\n  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;\n}\n\n.method-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n\n.method-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 38px;\n  border-radius: 12px;\n  border: 1px solid var(--app-border);\n  background-size: 70%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.tgl1[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 12px;\n}\n\n.tgl2[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 68px;\n  border-radius: 12px;\n}\n\n.method-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--app-ink);\n}\n\n.radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  border: 2px solid var(--app-border);\n}\n\n.radio.on[_ngcontent-%COMP%] {\n  border-color: var(--app-primary);\n  background: var(--app-primary);\n  box-shadow: inset 0 0 0 4px var(--app-surface);\n  position: relative;\n}\n\n.method-card.selected.orange[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  border-color: var(--app-primary);\n  box-shadow: none;\n}\n\n.method-card.selected.mtn[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  border-color: var(--app-primary);\n  box-shadow: none;\n}\n\n.hint[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: var(--app-muted);\n}\n\n.phone-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 56px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  overflow: hidden;\n}\n\n.phone-left[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 14px;\n  border-right: 1px solid var(--app-border);\n  background: transparent;\n}\n\n.flag[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.85;\n}\n\n.code[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--app-ink);\n}\n\n.phone-input[_ngcontent-%COMP%] {\n  --padding-start: 14px;\n  --padding-end: 44px;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  color: var(--app-ink);\n}\n\n.phone-ico[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  font-size: 18px;\n  color: var(--app-muted);\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.pay-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 18px;\n  border: none;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  box-shadow: var(--app-shadow-brand);\n}\n\n.pay-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n\n.verify-btn[_ngcontent-%COMP%] {\n  height: 48px;\n  border-radius: 16px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font-weight: 800;\n}\n\n.secure[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  justify-content: center;\n  color: var(--app-success);\n  opacity: 0.88;\n  font-size: 11px;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.btn-skeleton[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 18px;\n  border-radius: 999px;\n  opacity: 0.45;\n  margin: 0 auto;\n}\n\n.sk[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 16px;\n  opacity: 0.7;\n}\n\n.sk-card[_ngcontent-%COMP%] {\n  height: 140px;\n}\n\n.sk-title[_ngcontent-%COMP%] {\n  height: 22px;\n  width: 46%;\n}\n\n.sk-methods[_ngcontent-%COMP%] {\n  height: 120px;\n}\n\n.sk-input[_ngcontent-%COMP%] {\n  height: 56px;\n}\n\n.sk-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 18px;\n}\n\n.sk-btn.sm[_ngcontent-%COMP%] {\n  height: 46px;\n}\n\n\n\n.payment-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 0 0 env(safe-area-inset-bottom);\n}\n\n.payment-dialog[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  border-radius: 28px 28px 0 0;\n  padding: 28px 24px calc(24px + env(safe-area-inset-bottom));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_slide-up 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n\n.payment-dialog.is-success[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--app-success);\n}\n\n.payment-dialog.is-failed[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--app-danger);\n}\n\n@keyframes _ngcontent-%COMP%_slide-up {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.payment-visual[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  display: grid;\n  place-items: center;\n}\n\n.payment-visual[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: var(--app-primary);\n}\n\n.payment-visual[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.payment-visual.is-success[_ngcontent-%COMP%] {\n  background: var(--app-success);\n  border-color: var(--app-success);\n}\n\n.payment-visual.is-success[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.payment-visual.is-failed[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n  border-color: var(--app-danger);\n}\n\n.payment-visual.is-failed[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.payment-copy[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.payment-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 20px;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  color: var(--app-ink);\n}\n\n.payment-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--app-muted);\n  line-height: 1.5;\n}\n\n.payment-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 14px 16px;\n  border-radius: 16px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--app-muted);\n}\n\n.payment-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--app-warning);\n}\n\n.payment-cancel-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border-radius: 16px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font-weight: 800;\n  font-size: 15px;\n}\n\n.payment-checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border-radius: 16px;\n  border: none;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  font-size: 15px;\n  box-shadow: var(--app-shadow-brand);\n}\n\n.payment-close-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border-radius: 16px;\n  border: none;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  font-size: 15px;\n  box-shadow: var(--app-shadow-brand);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1jb25maXJtYXRpb24vcGF5bWVudC1jb25maXJtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFFRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMENBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0ZBQ0U7QUFDSjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBRkY7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7QUFIRjs7QUFNQTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBSEY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBTUEsbUVBQUE7QUFFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0VBQUE7QUFKRjs7QUFPQTtFQUNFLHdDQUFBO0FBSkY7O0FBT0E7RUFDRSx1Q0FBQTtBQUpGOztBQU9BO0VBQ0U7SUFBTywyQkFBQTtJQUE2QixVQUFBO0VBRnBDO0VBR0E7SUFBTyx3QkFBQTtJQUE2QixVQUFBO0VBQ3BDO0FBQ0Y7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcHJpbWFyeTogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIC0tcHJpbWFyeS0yOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICAtLWdvbGQ6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICAtLWJnOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tc3VyZmFjZTogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG59XHJcblxyXG4uaGVhZGVyLWdsYXNzIGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1jb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxufVxyXG5cclxuLnBhZ2UtYmcge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYmcpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iZyk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNDYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMjJweCAxOHB4IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMzRweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMThweDtcclxufVxyXG5cclxuLmdsYXNzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE0cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZ2xvdy1kb3Qge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltZyB7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG5cclxuLnByb2R1Y3QtYm9keSB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY2hpcCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4udG90YWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLnN1YiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uYW1vdW50IHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0tZ29sZCk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgbWFyZ2luOiA2cHggMnB4IDEwcHg7XHJcbn1cclxuXHJcbi5tZXRob2RzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5tZXRob2QtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgdHJhbnNmb3JtIDIwMG1zIGVhc2UsXHJcbiAgICBib3JkZXItY29sb3IgMjAwbXMgZWFzZSxcclxuICAgIGJveC1zaGFkb3cgMjAwbXMgZWFzZTtcclxufVxyXG5cclxuLm1ldGhvZC1jYXJkOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxufVxyXG5cclxuLm1ldGhvZC10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNzAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5cclxuLnRnbDF7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4udGdsMntcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLm1ldGhvZC1uYW1lIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4ucmFkaW8ub24ge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1ldGhvZC1jYXJkLnNlbGVjdGVkLm9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1ldGhvZC1jYXJkLnNlbGVjdGVkLm10biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmhpbnQge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbi5waG9uZS13cmFwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5waG9uZS1sZWZ0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mbGFnIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgb3BhY2l0eTogMC44NTtcclxufVxyXG4uY29kZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbn1cclxuXHJcbi5waG9uZS1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDQ0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4ucGhvbmUtaWNvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5wYXktYnRuIHtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LWJyYW5kKTtcclxufVxyXG5cclxuLnBheS1idG46ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnZlcmlmeS1idG4ge1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uc2VjdXJlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xyXG4gIG9wYWNpdHk6IDAuODg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmJ0bi1za2VsZXRvbiB7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBvcGFjaXR5OiAwLjQ1O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uc2stY2FyZCB7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG5cclxuLnNrLXRpdGxlIHtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgd2lkdGg6IDQ2JTtcclxufVxyXG5cclxuLnNrLW1ldGhvZHMge1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5zay1pbnB1dCB7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4uc2stYnRuIHtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxufVxyXG5cclxuLnNrLWJ0bi5zbSB7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG59XHJcblxyXG5cclxuLyogw6LClMKAw6LClMKAw6LClMKAIFBBWU1FTlQgU1RBVFVTIE9WRVJMQVkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcblxyXG4ucGF5bWVudC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDAgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG59XHJcblxyXG4ucGF5bWVudC1kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHggMjhweCAwIDA7XHJcbiAgcGFkZGluZzogMjhweCAyNHB4IGNhbGMoMjRweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGFuaW1hdGlvbjogc2xpZGUtdXAgMC4yOHMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGg7XHJcbn1cclxuXHJcbi5wYXltZW50LWRpYWxvZy5pcy1zdWNjZXNzIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tYXBwLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4ucGF5bWVudC1kaWFsb2cuaXMtZmFpbGVkIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tYXBwLWRhbmdlcik7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xyXG4gIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IG9wYWNpdHk6IDA7IH1cclxuICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAgICBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi5wYXltZW50LXZpc3VhbCB7XHJcbiAgd2lkdGg6IDcycHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBheW1lbnQtdmlzdWFsIGlvbi1zcGlubmVyIHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnBheW1lbnQtdmlzdWFsIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5wYXltZW50LXZpc3VhbC5pcy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5wYXltZW50LXZpc3VhbC5pcy1zdWNjZXNzIGlvbi1pY29uIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnBheW1lbnQtdmlzdWFsLmlzLWZhaWxlZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtZGFuZ2VyKTtcclxufVxyXG5cclxuLnBheW1lbnQtdmlzdWFsLmlzLWZhaWxlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wYXltZW50LWNvcHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBheW1lbnQtY29weSBoMiB7XHJcbiAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLnBheW1lbnQtY29weSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5wYXltZW50LXN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbi5wYXltZW50LXN1bW1hcnkgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLXdhcm5pbmcpO1xyXG59XHJcblxyXG4ucGF5bWVudC1jYW5jZWwtYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5wYXltZW50LWNoZWNrb3V0LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWFwcC1zaGFkb3ctYnJhbmQpO1xyXG59XHJcblxyXG4ucGF5bWVudC1jbG9zZS1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LWJyYW5kKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 6980
/*!***************************************************************************!*\
  !*** ./src/app/services/responsible-play/responsible-play-api.service.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGE_CONFIRMATION_REQUIRED: () => (/* binding */ AGE_CONFIRMATION_REQUIRED),
/* harmony export */   ResponsiblePlayApiService: () => (/* binding */ ResponsiblePlayApiService),
/* harmony export */   SPENDING_LIMIT_REACHED: () => (/* binding */ SPENDING_LIMIT_REACHED),
/* harmony export */   apiErrorCode: () => (/* binding */ apiErrorCode),
/* harmony export */   apiErrorMessage: () => (/* binding */ apiErrorMessage)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;



/** Codes d'erreur metier renvoyes par l'API (champ `code`). */
const AGE_CONFIRMATION_REQUIRED = 'AGE_CONFIRMATION_REQUIRED';
const SPENDING_LIMIT_REACHED = 'SPENDING_LIMIT_REACHED';
class ResponsiblePlayApiService {
  constructor(http) {
    this.http = http;
    this.base = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/users/me`;
  }
  confirmAdult() {
    return this.http.post(`${this.base}/confirm-adult`, {
      confirm: true
    });
  }
  status() {
    return this.http.get(`${this.base}/spending-limit`);
  }
  setLimit(limit) {
    return this.http.put(`${this.base}/spending-limit`, limit);
  }
  removeLimit() {
    return this.http.delete(`${this.base}/spending-limit`);
  }
  cancelPending() {
    return this.http.delete(`${this.base}/spending-limit/pending`);
  }
  setShowInLiveFeed(show) {
    return this.http.patch(`${this.base}`, {
      showInLiveFeed: show
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ResponsiblePlayApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ResponsiblePlayApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ResponsiblePlayApiService,
    factory: ResponsiblePlayApiService.ɵfac,
    providedIn: 'root'
  }));
}
/** Lit le code metier d'une HttpErrorResponse Nest ({ code, message }). */
_staticBlock();
function apiErrorCode(err) {
  const body = err?.error;
  if (body && typeof body === 'object') {
    const code = body.code;
    if (typeof code === 'string') return code;
  }
  return null;
}
function apiErrorMessage(err) {
  const body = err?.error;
  if (!body || typeof body !== 'object') return null;
  const msg = body.message;
  if (Array.isArray(msg)) return msg.map(String).join(', ');
  return typeof msg === 'string' && msg.trim() ? msg : null;
}

/***/ },

/***/ 4948
/*!*******************************************!*\
  !*** ./src/app/shared/utils/media-url.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiOriginFromBase: () => (/* binding */ apiOriginFromBase),
/* harmony export */   toAbsoluteMediaUrl: () => (/* binding */ toAbsoluteMediaUrl)
/* harmony export */ });
function apiOriginFromBase(apiBaseUrl) {
  const raw = String(apiBaseUrl ?? '').trim();
  if (!raw) return '';
  try {
    return new URL(raw).origin;
  } catch {
    return '';
  }
}
function toAbsoluteMediaUrl(rawValue, apiBaseUrl) {
  const value = String(rawValue ?? '').trim();
  if (!value || value === 'null' || value === 'undefined') return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith('data:') || value.startsWith('blob:')) return value;
  if (value.startsWith('../assets/')) return value.replace('../', '');
  if (value.startsWith('assets/') || value.startsWith('/assets/')) return value;
  const origin = apiOriginFromBase(apiBaseUrl);
  if (!origin) return value;
  const trimmedDots = value.replace(/^(\.\.\/)+/, '');
  if (trimmedDots.startsWith('uploads/')) return `${origin}/${trimmedDots}`;
  if (trimmedDots.startsWith('api/')) return `${origin}/${trimmedDots}`;
  if (value.startsWith('/')) return `${origin}${value}`;
  return value;
}

/***/ },

/***/ 3541
/*!*************************************************!*\
  !*** ./src/app/shared/utils/mobile-operator.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectCameroonMobileOperator: () => (/* binding */ detectCameroonMobileOperator)
/* harmony export */ });
/**
 * Operateur mobile money d'un numero camerounais, d'apres les plages publiees
 * par Digikuntz (doc /dev/api-doc, section direct-charge):
 *   Orange CM : 655-659, 686-689, 690-699
 *   MTN CM    : 650-654, 670-679, 680-685
 * Meme regle que l'API (tingilin-api/src/common/utils/phone.util.ts), qui
 * reste l'autorite: ce helper ne sert qu'au confort de saisie.
 */
function detectCameroonMobileOperator(input) {
  let digits = String(input ?? '').replace(/\D/g, '');
  if (digits.startsWith('00237')) digits = digits.slice(5);else if (digits.startsWith('237')) digits = digits.slice(3);
  if (!/^6\d{8}$/.test(digits)) return null;
  const prefix = Number(digits.slice(0, 3));
  if (prefix >= 655 && prefix <= 659 || prefix >= 686 && prefix <= 699) {
    return 'ORANGE';
  }
  if (prefix >= 650 && prefix <= 654 || prefix >= 670 && prefix <= 685) {
    return 'MTN';
  }
  return null;
}

/***/ }

}]);
//# sourceMappingURL=src_app_pages_payment-confirmation_payment-confirmation_module_ts-src_app_services_responsibl-43c141.js.map