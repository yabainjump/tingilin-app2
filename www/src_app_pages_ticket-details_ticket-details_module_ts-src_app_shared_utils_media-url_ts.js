"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_ticket-details_ticket-details_module_ts-src_app_shared_utils_media-url_ts"],{

/***/ 7647
/*!***********************************************************************!*\
  !*** ./src/app/pages/ticket-details/ticket-details-routing.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketDetailsPageRoutingModule: () => (/* binding */ TicketDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ticket_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-details.page */ 2401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _ticket_details_page__WEBPACK_IMPORTED_MODULE_1__.TicketDetailsPage
}];
class TicketDetailsPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TicketDetailsPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TicketDetailsPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TicketDetailsPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TicketDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 7390
/*!***************************************************************!*\
  !*** ./src/app/pages/ticket-details/ticket-details.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketDetailsPageModule: () => (/* binding */ TicketDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ticket_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-details-routing.module */ 7647);
/* harmony import */ var _ticket_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-details.page */ 2401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







class TicketDetailsPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TicketDetailsPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TicketDetailsPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: TicketDetailsPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ticket_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.TicketDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TicketDetailsPageModule, {
    declarations: [_ticket_details_page__WEBPACK_IMPORTED_MODULE_4__.TicketDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ticket_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.TicketDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ },

/***/ 2401
/*!*************************************************************!*\
  !*** ./src/app/pages/ticket-details/ticket-details.page.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketDetailsPage: () => (/* binding */ TicketDetailsPage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_tickets_tickets_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tickets/tickets-api.service */ 3924);
/* harmony import */ var src_app_services_raffles_raffles_public_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/raffles/raffles-public-api.service */ 1532);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/share/share.service */ 9169);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 3683);

var _staticBlock;









function TicketDetailsPage_div_11_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.drawDateLabel);
  }
}
function TicketDetailsPage_div_11_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, "TICKET_DETAILS_PAGE.EMPTY"));
  }
}
function TicketDetailsPage_div_11_div_61_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketDetailsPage_div_11_div_61_button_1_Template_button_click_0_listener() {
      const t_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.copy(t_r5.serial));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 50)(4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, "TICKET_DETAILS_PAGE.TICKET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", t_r5.serial.slice(-6).toUpperCase());
  }
}
function TicketDetailsPage_div_11_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TicketDetailsPage_div_11_div_61_button_1_Template, 9, 4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.tickets)("ngForTrackBy", ctx_r2.trackBySerial);
  }
}
function TicketDetailsPage_div_11_div_62_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketDetailsPage_div_11_div_62_button_1_Template_button_click_0_listener() {
      const t_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.copy(t_r7.serial));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 56)(3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](t_r7.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, "TICKET_DETAILS_PAGE.TAP_TO_COPY"));
  }
}
function TicketDetailsPage_div_11_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TicketDetailsPage_div_11_div_62_button_1_Template, 8, 4, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.tickets)("ngForTrackBy", ctx_r2.trackBySerial);
  }
}
function TicketDetailsPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "section", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 13)(12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 17)(19, "div", 18)(20, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TicketDetailsPage_div_11_span_22_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "section", 23)(28, "div", 24)(29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 27)(35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketDetailsPage_div_11_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.share());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "section", 30)(45, "div", 31)(46, "div")(47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 34)(53, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketDetailsPage_div_11_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.viewMode = "grid");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketDetailsPage_div_11_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.viewMode = "list");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, TicketDetailsPage_div_11_div_60_Template, 6, 3, "div", 39)(61, TicketDetailsPage_div_11_div_61_Template, 2, 2, "div", 40)(62, TicketDetailsPage_div_11_div_62_Template, 2, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 28, "TICKET_DETAILS_PAGE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r2.raffle == null ? null : ctx_r2.raffle.title) || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 30, "TICKET_DETAILS_PAGE.SUBTITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-image", "url(" + ((ctx_r2.raffle == null ? null : ctx_r2.raffle.imageUrl) || "assets/img/placeholder.png") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r2.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isActive ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 32, "TICKET_DETAILS_PAGE.ACTIVE_RAFFLE") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 34, "TICKET_DETAILS_PAGE.COMPLETED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.raffleShortId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.drawDateLabel !== "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r2.raffle == null ? null : ctx_r2.raffle.title) || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r2.raffle == null ? null : ctx_r2.raffle.subtitle) || (ctx_r2.raffle == null ? null : ctx_r2.raffle.description) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 36, "TICKET_DETAILS_PAGE.TOTAL_SPENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r2.totalSpent, " ", (ctx_r2.raffle == null ? null : ctx_r2.raffle.currency) || "XAF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 38, "TICKET_DETAILS_PAGE.TICKETS_OWNED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.ticketsOwned);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](43, 40, "TICKET_DETAILS_PAGE.SHARE_ACTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 42, "TICKET_DETAILS_PAGE.YOUR_TICKETS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.ticketsOwned);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("on", ctx_r2.viewMode === "grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("on", ctx_r2.viewMode === "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 44, "TICKET_DETAILS_PAGE.COPY_HINT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.ticketsOwned === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.viewMode === "grid" && ctx_r2.ticketsOwned > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.viewMode === "list" && ctx_r2.ticketsOwned > 0);
  }
}
function TicketDetailsPage_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 58)(2, "div", 59)(3, "div", 60)(4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class TicketDetailsPage {
  constructor(route, router, ticketsApi, rafflesApi, toast, shareService, translate) {
    this.route = route;
    this.router = router;
    this.ticketsApi = ticketsApi;
    this.rafflesApi = rafflesApi;
    this.toast = toast;
    this.shareService = shareService;
    this.translate = translate;
    this.loading = true;
    this.raffleId = '';
    this.raffle = null;
    this.tickets = [];
    this.viewMode = 'grid';
  }
  ionViewWillEnter() {
    this.raffleId = this.route.snapshot.paramMap.get('raffleId') || '';
    this.load();
  }
  get ticketsOwned() {
    return this.tickets.length;
  }
  get totalSpent() {
    const unit = Number(this.raffle?.ticketPrice || 0);
    return unit * this.ticketsOwned;
  }
  get drawDateLabel() {
    const endsAt = this.raffle?.endsAt;
    if (!endsAt) return '—';
    return new Date(endsAt).toLocaleDateString();
  }
  get isActive() {
    const st = String(this.raffle?.status || '').toUpperCase();
    return !['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'].includes(st);
  }
  get raffleShortId() {
    return this.raffleId ? `#${this.raffleId.slice(-8).toUpperCase()}` : '—';
  }
  load() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raffleId = _this.route.snapshot.paramMap.get('raffleId') || _this.route.snapshot.paramMap.get('id') || '';
      if (!raffleId) {
        const t = yield _this.toast.create({
          message: _this.translate.instant('TICKET_DETAILS_PAGE.TOAST_MISSING_ID'),
          duration: 1500
        });
        yield t.present();
        history.back();
        return;
      }
      _this.loading = true;
      try {
        const [raffleTickets, raffle] = yield Promise.all([(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.ticketsApi.myTickets({
          raffleId: _this.raffleId
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.rafflesApi.getById(_this.raffleId))]);
        _this.raffle = raffle;
        _this.tickets = raffleTickets.sort((a, b) => (a.serial || '').localeCompare(b.serial || ''));
      } catch (e) {
        const is404 = e?.status === 404 || e?.error?.statusCode === 404;
        const t = yield _this.toast.create({
          message: is404 ? _this.translate.instant('TICKET_DETAILS_PAGE.TOAST_NOT_FOUND') : e?.error?.message || _this.translate.instant('TICKET_DETAILS_PAGE.TOAST_LOAD_FAILED'),
          duration: 1600
        });
        yield t.present();
        if (is404) {
          yield _this.router.navigate(['/tabs/participations'], {
            replaceUrl: true
          });
        }
      } finally {
        _this.loading = false;
      }
    })();
  }
  share() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const title = _this2.raffle?.title || 'Tinguilin';
      const text = _this2.translate.instant('TICKET_DETAILS_PAGE.SHARE_TEXT', {
        title,
        count: _this2.ticketsOwned
      });
      const url = _this2.shareService.raffleShareUrl(_this2.raffleId);
      try {
        const mode = yield _this2.shareService.share({
          title: 'Tingilin',
          text,
          url
        });
        if (mode === 'copied') {
          const t = yield _this2.toast.create({
            message: _this2.translate.instant('TICKET_DETAILS_PAGE.TOAST_LINK_COPIED'),
            duration: 1200
          });
          yield t.present();
        }
      } catch {
        const t = yield _this2.toast.create({
          message: _this2.translate.instant('TICKET_DETAILS_PAGE.TOAST_SHARE_UNAVAILABLE'),
          duration: 1200
        });
        yield t.present();
      }
    })();
  }
  copy(serial) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield navigator.clipboard.writeText(serial);
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('TICKET_DETAILS_PAGE.TOAST_TICKET_COPIED'),
          duration: 900
        });
        yield t.present();
      } catch {}
    })();
  }
  trackBySerial(_, ticket) {
    return ticket.serial;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TicketDetailsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TicketDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_tickets_tickets_api_service__WEBPACK_IMPORTED_MODULE_5__.TicketsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_raffles_raffles_public_api_service__WEBPACK_IMPORTED_MODULE_6__.RafflesPublicApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_8__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: TicketDetailsPage,
    selectors: [["app-ticket-details"]],
    standalone: false,
    decls: 14,
    vars: 6,
    consts: [["skel", ""], ["translucent", "true", 1, "hdr"], ["slot", "start"], ["defaultHref", "/tabs/participations"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "share-social-outline"], [1, "bg", 3, "fullscreen"], ["class", "screen", 4, "ngIf", "ngIfElse"], [1, "screen"], [1, "hero-shell"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-card"], [1, "hero-img"], [1, "hero-grad"], [1, "status"], [1, "hero-text"], [1, "chip-row"], [1, "meta-chip"], ["class", "meta-chip", 4, "ngIf"], [1, "h1"], [1, "h2"], [1, "stats"], [1, "stat-card"], [1, "lbl"], [1, "big", "primary"], [1, "stat-card", "right"], [1, "big"], ["type", "button", 1, "share-btn", 3, "click"], [1, "tickets-panel"], [1, "tickets-head"], [1, "section-kicker"], [1, "th-title"], [1, "view"], ["type", "button", 1, "vbtn", 3, "click"], ["name", "grid-outline"], ["name", "list-outline"], [1, "panel-note"], ["class", "empty", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["class", "list", 4, "ngIf"], [1, "empty"], [1, "empty-icon"], ["name", "ticket-outline"], [1, "empty-copy"], [1, "grid"], ["class", "ticket", "type", "button", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "ticket", 3, "click"], [1, "ico"], [1, "tt"], [1, "small"], [1, "serial"], [1, "list"], ["class", "row", "type", "button", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "row", 3, "click"], [1, "rtext"], [1, "serial-full"], [1, "skel-block", "hero"], [1, "skel-block", "stats"], [1, "skel-block", "small"]],
    template: function TicketDetailsPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 4)(8, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TicketDetailsPage_Template_ion_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.share());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TicketDetailsPage_div_11_Template, 63, 46, "div", 8)(12, TicketDetailsPage_ng_template_12_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const skel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "TICKET_DETAILS_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", skel_r8);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonBackButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --primary-2: var(--app-primary-soft);\n  --blue: var(--app-primary);\n  --bg: var(--app-bg);\n  --bg-2: var(--app-bg);\n  --card: var(--app-surface);\n  --card-strong: var(--app-surface-2);\n  --stroke: var(--app-border);\n  --text: var(--app-ink);\n  --muted: var(--app-muted);\n}\n\n.hdr[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  --color: var(--text);\n  --border-color: transparent;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.hdr[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%], \n.hdr[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], \n.hdr[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n\n.bg[_ngcontent-%COMP%] {\n  --background: transparent;\n  background: transparent;\n  color: var(--text);\n}\n\n.screen[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0 auto;\n  padding: calc(env(safe-area-inset-top) + 18px) 16px 32px;\n}\n\n.hero-shell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 14px;\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.eyebrow[_ngcontent-%COMP%], \n.section-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-primary);\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 12px 0 8px;\n  color: var(--text);\n  font-size: clamp(28px, 7vw, 34px);\n  line-height: 0.98;\n  letter-spacing: -0.04em;\n}\n\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n  line-height: 1.5;\n}\n\n.top-share-btn[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 999px;\n  border: 1px solid var(--stroke);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  display: grid;\n  place-items: center;\n  flex: 0 0 auto;\n}\n\n.top-share-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.hero-card[_ngcontent-%COMP%], \n.tickets-panel[_ngcontent-%COMP%], \n.skel-block[_ngcontent-%COMP%], \n.stats[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%], \n.share-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--stroke);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 26px;\n  background: var(--card-strong);\n}\n\n.hero-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 240px;\n  background-size: cover;\n  background-position: center;\n}\n\n.hero-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--app-overlay);\n}\n\n.status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  padding: 7px 12px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 900;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n}\n\n.status.active[_ngcontent-%COMP%] {\n  background: var(--app-success);\n  border-color: var(--app-success);\n  color: var(--app-on-success);\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 14px;\n  right: 14px;\n}\n\n.chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n.meta-chip[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--app-ink);\n}\n\n.h1[_ngcontent-%COMP%] {\n  color: var(--app-on-primary);\n  font-size: 24px;\n  font-weight: 900;\n  line-height: 1.05;\n  letter-spacing: -0.03em;\n}\n\n.h2[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13px;\n  color: var(--app-muted);\n  line-height: 1.45;\n}\n\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border-top: 1px solid var(--app-border);\n}\n\n.cell[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n\n.cell[_ngcontent-%COMP%]    + .cell[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--app-border);\n}\n\n.lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 0.14em;\n  font-weight: 900;\n  color: var(--app-muted);\n  text-transform: uppercase;\n}\n\n.val[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-weight: 900;\n  color: var(--app-ink);\n}\n\n.mono[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.stats[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 22px;\n  background: var(--card);\n  padding: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n.big[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: var(--app-ink);\n  font-size: 24px;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n}\n\n.primary[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n}\n\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.share-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  min-height: 56px;\n  border-radius: 18px;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  font-size: 16px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  box-shadow: var(--app-shadow-brand);\n  transition: opacity 0.15s, transform 0.15s;\n}\n\n.share-btn[_ngcontent-%COMP%]:active {\n  opacity: 0.88;\n  transform: scale(0.98);\n}\n\n.share-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.tickets-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border-radius: 26px;\n  background: var(--card-strong);\n  padding: 16px;\n}\n\n.tickets-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.th-title[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 28px;\n  font-weight: 900;\n  line-height: 1;\n}\n\n.panel-note[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: var(--muted);\n  line-height: 1.45;\n}\n\n.view[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.vbtn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface);\n  color: var(--app-muted);\n}\n\n.vbtn.on[_ngcontent-%COMP%] {\n  color: var(--app-ink);\n  background: var(--app-primary-soft);\n  border-color: var(--app-border-strong);\n}\n\n.grid[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.ticket[_ngcontent-%COMP%], \n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  padding: 14px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n  width: 100%;\n  text-align: left;\n}\n\n.ico[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-muted);\n  font-weight: 700;\n}\n\n.serial[_ngcontent-%COMP%], \n.serial-full[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: 900;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n  font-size: 22px;\n}\n\n.rtext[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.serial-full[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n.empty[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding: 26px 18px;\n  border-radius: 20px;\n  background: var(--app-surface-2);\n  border: 1px dashed var(--app-border);\n  text-align: center;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 12px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n}\n\n.empty-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.empty-copy[_ngcontent-%COMP%] {\n  color: var(--muted);\n  line-height: 1.45;\n}\n\n.skel-block[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  border-radius: 24px;\n}\n\n.skel-block.hero[_ngcontent-%COMP%] {\n  height: 260px;\n}\n\n.skel-block.stats[_ngcontent-%COMP%] {\n  height: 96px;\n  margin-top: 14px;\n}\n\n.skel-block.small[_ngcontent-%COMP%] {\n  height: 74px;\n  margin-top: 12px;\n}\n\n@media (max-width: 640px) {\n  .screen[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-shell[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGlja2V0LWRldGFpbHMvdGlja2V0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFDRjs7QUFFQTs7O0VBR0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQ0U7RUFDRixrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0RBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7O0VBRUUsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTs7Ozs7RUFLRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSx3Q0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0dBQ0U7QUFESjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTs7RUFFRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTs7RUFFRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0Usb0JBQUE7RUFGRjtFQUtBO0lBQ0UsMEJBQUE7RUFIRjtFQU1BO0lBQ0UsMEJBQUE7RUFKRjtFQU9BO0lBQ0Usb0JBQUE7RUFMRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcHJpbWFyeTogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIC0tcHJpbWFyeS0yOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICAtLWJsdWU6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAtLWJnOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tYmctMjogdmFyKC0tYXBwLWJnKTtcclxuICAtLWNhcmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAtLWNhcmQtc3Ryb25nOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICAtLXN0cm9rZTogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgLS10ZXh0OiB2YXIoLS1hcHAtaW5rKTtcclxuICAtLW11dGVkOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uaGRyIGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1jb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmhkciBpb24tdGl0bGUsXHJcbi5oZHIgaW9uLWJhY2stYnV0dG9uLFxyXG4uaGRyIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4uc2NyZWVuIHtcclxuICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMThweCkgMTZweCAzMnB4O1xyXG59XHJcblxyXG4uaGVyby1zaGVsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE0cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5oZXJvLWNvcHkge1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmV5ZWJyb3csXHJcbi5zZWN0aW9uLWtpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oZXJvLWNvcHkgaDEge1xyXG4gIG1hcmdpbjogMTJweCAwIDhweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgyOHB4LCA3dncsIDM0cHgpO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjk4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xyXG59XHJcblxyXG4uaGVyby1jb3B5IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi50b3Atc2hhcmUtYnRuIHtcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4udG9wLXNoYXJlLWJ0biBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaGVyby1jYXJkLFxyXG4udGlja2V0cy1wYW5lbCxcclxuLnNrZWwtYmxvY2ssXHJcbi5zdGF0cyAuc3RhdC1jYXJkLFxyXG4uc2hhcmUtYnRuIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uaGVyby1jYXJkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1zdHJvbmcpO1xyXG59XHJcblxyXG4uaGVyby1pbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1ncmFkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLW92ZXJsYXkpO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNHB4O1xyXG4gIHJpZ2h0OiAxNHB4O1xyXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4uc3RhdHVzLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE0cHg7XHJcbiAgbGVmdDogMTRweDtcclxuICByaWdodDogMTRweDtcclxufVxyXG5cclxuLmNoaXAtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWV0YS1jaGlwIHtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbn1cclxuXHJcbi5oMSB7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsaW5lLWhlaWdodDogMS4wNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcclxufVxyXG5cclxuLmgyIHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG59XHJcblxyXG4uaW5mby1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG59XHJcblxyXG4uY2VsbCArIC5jZWxsIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4ubGJsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi52YWwge1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLm1vbm8ge1xyXG4gIGZvbnQtZmFtaWx5OlxyXG4gICAgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsXHJcbiAgICBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLnN0YXRzIHtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnN0YXQtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkKTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uc3RhdC1jYXJkIC5sYmwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmJpZyB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcclxufVxyXG5cclxuLnByaW1hcnkge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zaGFyZS1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWFwcC1zaGFkb3ctYnJhbmQpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMsIHRyYW5zZm9ybSAwLjE1cztcclxufVxyXG5cclxuLnNoYXJlLWJ0bjphY3RpdmUge1xyXG4gIG9wYWNpdHk6IDAuODg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxufVxyXG5cclxuLnNoYXJlLWJ0biBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGlja2V0cy1wYW5lbCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtc3Ryb25nKTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4udGlja2V0cy1oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi50aC10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4ucGFuZWwtbm90ZSB7XHJcbiAgbWFyZ2luOiAxMnB4IDAgMDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG59XHJcblxyXG4udmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnZidG4ge1xyXG4gIHdpZHRoOiAzOHB4O1xyXG4gIGhlaWdodDogMzhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLnZidG4ub24ge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4udGlja2V0LFxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmljbyB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zZXJpYWwsXHJcbi5zZXJpYWwtZnVsbCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ucm93IGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnJ0ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uc2VyaWFsLWZ1bGwge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLmVtcHR5IHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDI2cHggMThweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbXB0eS1pY29uIHtcclxuICB3aWR0aDogNjJweDtcclxuICBoZWlnaHQ6IDYycHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZW1wdHktaWNvbiBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uZW1wdHktY29weSB7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBsaW5lLWhlaWdodDogMS40NTtcclxufVxyXG5cclxuLnNrZWwtYmxvY2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbn1cclxuXHJcbi5za2VsLWJsb2NrLmhlcm8ge1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbn1cclxuXHJcbi5za2VsLWJsb2NrLnN0YXRzIHtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLnNrZWwtYmxvY2suc21hbGwge1xyXG4gIGhlaWdodDogNzRweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuc2NyZWVuIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuc3RhdHMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuaGVyby1zaGVsbCB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 3924
/*!*********************************************************!*\
  !*** ./src/app/services/tickets/tickets-api.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketsApiService: () => (/* binding */ TicketsApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;



class TicketsApiService {
  constructor(http) {
    this.http = http;
    this.base = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}`;
  }
  myTickets(opts) {
    return this.http.get(`${this.base}/tickets/me`, {
      params: opts?.raffleId ? {
        raffleId: opts.raffleId
      } : undefined
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TicketsApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TicketsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TicketsApiService,
    factory: TicketsApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

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

/***/ }

}]);
//# sourceMappingURL=src_app_pages_ticket-details_ticket-details_module_ts-src_app_shared_utils_media-url_ts.js.map