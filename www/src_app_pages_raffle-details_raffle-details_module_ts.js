"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_raffle-details_raffle-details_module_ts"],{

/***/ 3635
/*!***********************************************************************!*\
  !*** ./src/app/pages/raffle-details/raffle-details-routing.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RaffleDetailsPageRoutingModule: () => (/* binding */ RaffleDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _raffle_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raffle-details.page */ 6869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _raffle_details_page__WEBPACK_IMPORTED_MODULE_1__.RaffleDetailsPage
}];
class RaffleDetailsPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function RaffleDetailsPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RaffleDetailsPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RaffleDetailsPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RaffleDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 1378
/*!***************************************************************!*\
  !*** ./src/app/pages/raffle-details/raffle-details.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RaffleDetailsPageModule: () => (/* binding */ RaffleDetailsPageModule)
/* harmony export */ });
/* harmony import */ var src_app_shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/engagement/live-activity-ticker.component */ 7414);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _raffle_details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raffle-details-routing.module */ 3635);
/* harmony import */ var _raffle_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./raffle-details.page */ 6869);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/countdown-energy/countdown-energy.component */ 6881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;









class RaffleDetailsPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function RaffleDetailsPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RaffleDetailsPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: RaffleDetailsPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _raffle_details_routing_module__WEBPACK_IMPORTED_MODULE_4__.RaffleDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_7__.CountdownEnergyComponent, src_app_shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_0__.LiveActivityTickerComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](RaffleDetailsPageModule, {
    declarations: [_raffle_details_page__WEBPACK_IMPORTED_MODULE_5__.RaffleDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _raffle_details_routing_module__WEBPACK_IMPORTED_MODULE_4__.RaffleDetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_7__.CountdownEnergyComponent, src_app_shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_0__.LiveActivityTickerComponent]
  });
})();

/***/ },

/***/ 6869
/*!*************************************************************!*\
  !*** ./src/app/pages/raffle-details/raffle-details.page.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RaffleDetailsPage: () => (/* binding */ RaffleDetailsPage)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_services_raffles_raffles_public_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/raffles/raffles-public-api.service */ 1532);
/* harmony import */ var src_app_services_winners_winners_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/winners/winners-api.service */ 5580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1339);
/* harmony import */ var src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/share/share.service */ 9169);
/* harmony import */ var src_app_services_referral_referral_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/referral/referral-api.service */ 8364);
/* harmony import */ var src_app_core_api_payments_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/api/payments-api.service */ 5452);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var src_app_services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/offline/network-status.service */ 9669);
/* harmony import */ var src_app_services_responsible_play_responsible_play_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/responsible-play/responsible-play-guard.service */ 213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/ui/countdown-energy/countdown-energy.component */ 6881);
/* harmony import */ var _shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/engagement/live-activity-ticker.component */ 7414);

var _staticBlock;


















function RaffleDetailsPage_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", ctx_r1.raffle.imageUrl ? "url(" + ctx_r1.raffle.imageUrl + ")" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, "RAFFLE_DETAILS_PAGE.OFFICIAL_PARTNER"));
  }
}
function RaffleDetailsPage_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-skeleton-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RaffleDetailsPage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_div_15_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.retryLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "OFFLINE.EMPTY_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 5, "OFFLINE.RAFFLE_EMPTY_COPY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 7, "COMMON.RETRY"), " ");
  }
}
function RaffleDetailsPage_ng_container_17_section_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "RAFFLE_DETAILS_PAGE.PRIZE_DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.raffleDescription);
  }
}
function RaffleDetailsPage_ng_container_17_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_ng_container_17_div_74_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.useFreeTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, "RAFFLE_DETAILS_PAGE.FREE_TICKET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.freeTicketsBalance, " ", ctx_r1.freeTicketsBalance > 1 ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 7, "RAFFLE_DETAILS_PAGE.AVAILABLE_PLURAL") : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 9, "RAFFLE_DETAILS_PAGE.AVAILABLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.canUseFreeTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.usingFreeTicket ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 11, "RAFFLE_DETAILS_PAGE.PROCESSING") : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 13, "RAFFLE_DETAILS_PAGE.USE_FREE_TICKET"), " ");
  }
}
function RaffleDetailsPage_ng_container_17_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "WIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const w_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + w_r6.avatar + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](w_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](w_r6.note);
  }
}
function RaffleDetailsPage_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 31)(2, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RaffleDetailsPage_ng_container_17_section_11_Template, 6, 4, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-countdown-energy", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 39)(16, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "app-live-activity-ticker", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 44)(26, "div", 45)(27, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "ion-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 45)(35, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 45)(44, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 52)(53, "div", 53)(54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 55)(61, "div", 56)(62, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_ng_container_17_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.dec());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_ng_container_17_Template_button_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.inc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 62)(69, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, RaffleDetailsPage_ng_container_17_div_74_Template, 13, 15, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 65)(76, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "ion-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, RaffleDetailsPage_ng_container_17_div_85_Template, 8, 4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.raffleTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 31, "RAFFLE_DETAILS_PAGE.BE_THE_NEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 33, "RAFFLE_DETAILS_PAGE.WINNER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.raffleDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 35, "RAFFLE_DETAILS_PAGE.TIME_LEFT"))("value", ctx_r1.remainingLabel)("progress", ctx_r1.progressPct)("ended", ctx_r1.progressPct >= 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 37, "RAFFLE_DETAILS_PAGE.COUNTDOWN_RUNNING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.raffle.status || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 39, "RAFFLE_DETAILS_PAGE.LIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("raffleId", ctx_r1.raffle.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 41, "RAFFLE_DETAILS_PAGE.PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.ticketPrice, " ", ctx_r1.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 43, "RAFFLE_DETAILS_PAGE.DRAW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.raffle.endsAt || ctx_r1.raffle.endAt ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](42, 45, ctx_r1.raffle.endsAt || ctx_r1.raffle.endAt, "MMM d") : "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](48, 48, "RAFFLE_DETAILS_PAGE.STATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.raffle.status || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](51, 50, "RAFFLE_DETAILS_PAGE.LIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](56, 52, "RAFFLE_DETAILS_PAGE.SELECT_TICKETS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](59, 54, "RAFFLE_DETAILS_PAGE.MAX"), " ", ctx_r1.maxQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.canParticipate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.canParticipate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](71, 56, "RAFFLE_DETAILS_PAGE.TOTAL_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.totalPrice, " ", ctx_r1.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.hasFreeTickets);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](80, 58, "RAFFLE_DETAILS_PAGE.PREVIOUS_WINNERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](83, 60, "COMMON.VIEW_ALL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.winners);
  }
}
function RaffleDetailsPage_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-skeleton-text", 86)(2, "ion-skeleton-text", 87)(3, "ion-skeleton-text", 88)(4, "ion-skeleton-text", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 71);
  }
}
class RaffleDetailsPage {
  constructor(route, router, api, winnersApi, nav, toast, auth, alertCtrl, shareService, referralApi, paymentsApi, translate, networkStatus, responsiblePlay) {
    this.route = route;
    this.router = router;
    this.api = api;
    this.winnersApi = winnersApi;
    this.nav = nav;
    this.toast = toast;
    this.auth = auth;
    this.alertCtrl = alertCtrl;
    this.shareService = shareService;
    this.referralApi = referralApi;
    this.paymentsApi = paymentsApi;
    this.translate = translate;
    this.networkStatus = networkStatus;
    this.responsiblePlay = responsiblePlay;
    this.loading = true;
    this.quantity = 1;
    this.raffle = null;
    this.qty = 1;
    this.maxQty = 10;
    this.tickets = 1;
    this.remainingLabel = '--:--:--';
    this.progressPct = 0;
    this.nowMs = Date.now();
    this.winners = [];
    this.freeTicketsBalance = 0;
    this.usingFreeTicket = false;
    this.isOffline$ = this.networkStatus.offline$;
  }
  goToPayment() {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raffleId = _this.currentRaffleId;
      if (!raffleId) return;
      if (!_this.auth.isLoggedIn()) {
        yield _this.promptAuthBeforePurchase(raffleId);
        return;
      }
      if (!_this.canParticipate) {
        const t = yield _this.toast.create({
          message: _this.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_RAFFLE_CLOSED_PURCHASE'),
          duration: 1500
        });
        yield t.present();
        return;
      }
      const r = _this.raffle; // ✅ bypass typing juste ici
      const unit = Number(r?.ticketPrice ?? r?.ticket_price ?? 0);
      // ✅ MODIF: utiliser la quantité UI (qty), pas "quantity"
      const qty = Math.max(1, Number(_this.qty || 1));
      const amount = qty * unit;
      const title = r?.product?.title || r?.productTitle || r?.title || r?.name || 'Tombola';
      const imageUrlRaw = r?.product?.imageUrl || r?.product?.image || r?.productImage || r?.imageUrl || r?.image || '';
      const imageUrl = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_5__.toAbsoluteMediaUrl)(imageUrlRaw, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiBaseUrl) || '';
      _this.router.navigate(['/tabs/payment-confirmation'], {
        queryParams: {
          raffleId,
          title,
          imageUrl,
          qty,
          unit,
          amount
        }
      });
    })();
  }
  ionViewWillEnter() {
    var _this2 = this;
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.nav.back();
      return;
    }
    this.loadFreeTicketsBalance();
    this.loadRecentWinners();
    this.loading = true;
    this.api.getById(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.loading = false)).subscribe({
      next: r => {
        this.raffle = r;
        this.startCountdown(this.resolveEndAt(r));
      },
      error: function () {
        var _ref = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const t = yield _this2.toast.create({
            message: _this2.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_NOT_FOUND'),
            duration: 1500
          });
          yield t.present();
          _this2.nav.back();
        });
        return function error() {
          return _ref.apply(this, arguments);
        };
      }()
    });
  }
  loadFreeTicketsBalance() {
    if (!this.auth.isLoggedIn()) {
      this.freeTicketsBalance = 0;
      return;
    }
    this.referralApi.summary().subscribe({
      next: s => this.freeTicketsBalance = Math.max(0, Number(s?.freeTicketsBalance ?? 0)),
      error: () => this.freeTicketsBalance = 0
    });
  }
  loadRecentWinners() {
    this.winnersApi.list(8).subscribe({
      next: res => {
        const list = Array.isArray(res) ? res : res?.data ?? [];
        this.winners = list.map(w => this.mapWinnerCard(w));
      },
      error: () => {
        this.winners = [];
      }
    });
  }
  mapWinnerCard(w) {
    const prize = String(w?.prizeTitle ?? '').trim();
    const note = prize ? this.translate.instant('RAFFLE_DETAILS_PAGE.WINNER_NOTE_WITH_PRIZE', {
      prize
    }) : w?.ticketCode ? this.translate.instant('RAFFLE_DETAILS_PAGE.WINNER_NOTE_WITH_TICKET', {
      ticket: w.ticketCode
    }) : this.translate.instant('RAFFLE_DETAILS_PAGE.RECENT_WINNER');
    return {
      name: String(w?.winnerName ?? this.translate.instant('RAFFLE_DETAILS_PAGE.WINNER')),
      note,
      avatar: this.avatarSrc(w?.avatar)
    };
  }
  avatarSrc(raw) {
    const s = String(raw ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') return 'assets/img/profile.svg';
    if (s.startsWith('http://') || s.startsWith('https://')) return s;
    if (s.startsWith('data:') || s.startsWith('assets/')) return s;
    if (s.startsWith('../assets/')) return s.replace('../', '');
    return `assets/img/${s}`;
  }
  ngOnDestroy() {
    this.tickSub?.unsubscribe();
  }
  ionViewWillLeave() {
    this.tickSub?.unsubscribe();
  }
  resolveEndAt(r) {
    const raw = r?.endsAt ?? r?.endAt ?? null;
    return raw ? String(raw) : null;
  }
  resolveStartAt(r) {
    const raw = r?.startAt ?? null;
    return raw ? String(raw) : null;
  }
  startCountdown(endsAt) {
    this.tickSub?.unsubscribe();
    const update = () => {
      this.nowMs = Date.now();
      if (!endsAt) {
        this.remainingLabel = '--:--:--';
        this.progressPct = 0;
        return;
      }
      const end = new Date(endsAt).getTime();
      const ms = Math.max(0, end - this.nowMs);
      const s = Math.floor(ms / 1000);
      const days = Math.floor(s / 86400);
      const hh = Math.floor(s % 86400 / 3600);
      const mm = Math.floor(s % 3600 / 60);
      const ss = s % 60;
      this.remainingLabel = days > 0 ? `${days}j ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}` : `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
      this.progressPct = this.computeProgress(end, this.nowMs);
    };
    update();
    this.tickSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(1000).subscribe(update);
  }
  computeProgress(end, now) {
    if (!Number.isFinite(end)) return 0;
    const startRaw = this.resolveStartAt(this.raffle);
    const start = startRaw ? new Date(startRaw).getTime() : NaN;
    if (Number.isFinite(start) && end > start) {
      const elapsed = Math.max(0, Math.min(end - start, now - start));
      return Math.max(0, Math.min(100, elapsed / (end - start) * 100));
    }
    // fallback si startAt absent
    const remaining = Math.max(0, end - now);
    const fallbackWindow = 24 * 60 * 60 * 1000;
    const elapsedFallback = Math.max(0, fallbackWindow - remaining);
    return Math.max(0, Math.min(100, elapsedFallback / fallbackWindow * 100));
  }
  // ✅ MODIF: inc/dec doivent modifier qty (et synchroniser quantity)
  inc() {
    if (this.qty < this.maxQty) {
      this.qty += 1;
      this.quantity = this.qty;
    }
  }
  dec() {
    if (this.qty > 1) {
      this.qty -= 1;
      this.quantity = this.qty;
    }
  }
  get totalPrice() {
    const qty = this.qty ?? 0;
    const price = this.ticketPrice ?? 0;
    return qty * price;
  }
  get raffleTitle() {
    const title = String(this.raffle?.title ?? '').trim();
    const productTitle = String(this.raffle?.product?.title ?? '').trim();
    return title || productTitle || '—';
  }
  get raffleDescription() {
    return [this.raffle?.description, this.raffle?.product?.description, this.raffle?.subtitle, this.raffle?.rules].map(value => String(value ?? '').trim()).find(Boolean) ?? '';
  }
  ngOnInit() {}
  back() {
    history.back();
  }
  toggleFav() {}
  share() {
    var _this3 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raffleId = _this3.currentRaffleId;
      if (!raffleId) return;
      const title = _this3.raffle?.title || _this3.translate.instant('RAFFLE_DETAILS_PAGE.SHARE_FALLBACK_TITLE');
      const text = _this3.translate.instant('RAFFLE_DETAILS_PAGE.SHARE_TEXT', {
        title
      });
      const url = _this3.shareService.raffleShareUrl(raffleId);
      try {
        const mode = yield _this3.shareService.share({
          title: 'Tingilin',
          text,
          url
        });
        if (mode === 'copied') {
          const t = yield _this3.toast.create({
            message: _this3.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_LINK_COPIED'),
            duration: 1400
          });
          yield t.present();
        }
      } catch {
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_SHARE_UNAVAILABLE'),
          duration: 1400
        });
        yield t.present();
      }
    })();
  }
  get sold() {
    return this.raffle?.sold ?? 0;
  }
  get total() {
    return this.raffle?.total ?? 0;
  }
  get remaining() {
    return Math.max(0, this.total - this.sold);
  }
  get ticketPrice() {
    return this.raffle?.ticketPrice ?? 0;
  }
  get currency() {
    return this.raffle?.currency ?? 'XAF';
  }
  get isRaffleClosed() {
    const status = String(this.raffle?.status ?? '').trim().toUpperCase();
    if (status === 'CLOSED' || status === 'DRAWN') return true;
    const endRaw = this.resolveEndAt(this.raffle);
    if (!endRaw) return false;
    const end = new Date(endRaw).getTime();
    return Number.isFinite(end) ? end <= this.nowMs : false;
  }
  get canParticipate() {
    const status = String(this.raffle?.status ?? '').trim().toUpperCase();
    return !!this.raffle && !this.loading && status === 'LIVE' && !this.isRaffleClosed;
  }
  get canUseFreeTicket() {
    return this.auth.isLoggedIn() && this.freeTicketsBalance > 0 && this.canParticipate && !this.usingFreeTicket;
  }
  get hasFreeTickets() {
    return this.auth.isLoggedIn() && this.freeTicketsBalance > 0;
  }
  useFreeTicket() {
    var _this4 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (retried = false) {
      const raffleId = _this4.currentRaffleId;
      if (!raffleId) return;
      if (!_this4.auth.isLoggedIn()) {
        yield _this4.promptAuthBeforePurchase(raffleId);
        return;
      }
      if (_this4.freeTicketsBalance <= 0) {
        const t = yield _this4.toast.create({
          message: _this4.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_NO_FREE_TICKET'),
          duration: 1500
        });
        yield t.present();
        return;
      }
      if (!_this4.canParticipate) {
        const t = yield _this4.toast.create({
          message: _this4.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_RAFFLE_CLOSED_USE'),
          duration: 1500
        });
        yield t.present();
        return;
      }
      _this4.usingFreeTicket = true;
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this4.paymentsApi.useFreeTicket(raffleId));
        _this4.freeTicketsBalance = Math.max(0, _this4.freeTicketsBalance - 1);
        const t = yield _this4.toast.create({
          message: _this4.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_FREE_TICKET_USED'),
          duration: 1600
        });
        yield t.present();
        yield _this4.router.navigate(['/tabs/ticket-details', raffleId]);
      } catch (e) {
        // 18+ non confirme: le joueur confirme puis on relance une seule fois.
        const outcome = yield _this4.responsiblePlay.handlePurchaseError(e);
        if (outcome === 'RETRY' && !retried) {
          _this4.usingFreeTicket = false;
          yield _this4.useFreeTicket(true);
          return;
        }
        if (outcome === 'HANDLED') return;
        const t = yield _this4.toast.create({
          message: e?.error?.message || e?.message || _this4.translate.instant('RAFFLE_DETAILS_PAGE.TOAST_FREE_TICKET_FAILED'),
          duration: 1700
        });
        yield t.present();
        _this4.loadFreeTicketsBalance();
      } finally {
        _this4.usingFreeTicket = false;
      }
    }).apply(this, arguments);
  }
  participate() {
    // prochaine étape: POST buy tickets
  }
  get currentRaffleId() {
    const routeId = String(this.route.snapshot.paramMap.get('id') ?? '').trim();
    if (routeId) return routeId;
    const data = this.raffle;
    const value = data?._id || data?.id || data?.raffleId;
    const id = String(value ?? '').trim();
    return id || null;
  }
  promptAuthBeforePurchase(raffleId) {
    var _this5 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const redirect = `/tabs/raffle-details/${encodeURIComponent(raffleId)}`;
      const alert = yield _this5.alertCtrl.create({
        header: _this5.translate.instant('RAFFLE_DETAILS_PAGE.AUTH_REQUIRED_HEADER'),
        message: _this5.translate.instant('RAFFLE_DETAILS_PAGE.AUTH_REQUIRED_MESSAGE'),
        buttons: [{
          text: _this5.translate.instant('RAFFLE_DETAILS_PAGE.CANCEL'),
          role: 'cancel'
        }, {
          text: _this5.translate.instant('RAFFLE_DETAILS_PAGE.LOGIN'),
          handler: () => {
            void _this5.router.navigate(['/auth/login'], {
              queryParams: {
                redirect
              }
            });
          }
        }, {
          text: _this5.translate.instant('RAFFLE_DETAILS_PAGE.CREATE_ACCOUNT'),
          handler: () => {
            void _this5.router.navigate(['/auth/register'], {
              queryParams: {
                redirect
              }
            });
          }
        }]
      });
      yield alert.present();
    })();
  }
  retryLoad() {
    this.ionViewWillEnter();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RaffleDetailsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RaffleDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_raffles_raffles_public_api_service__WEBPACK_IMPORTED_MODULE_9__.RafflesPublicApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_winners_winners_api_service__WEBPACK_IMPORTED_MODULE_10__.WinnersApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_14__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_referral_referral_api_service__WEBPACK_IMPORTED_MODULE_15__.ReferralApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_api_payments_api_service__WEBPACK_IMPORTED_MODULE_16__.PaymentsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_18__.NetworkStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_responsible_play_responsible_play_guard_service__WEBPACK_IMPORTED_MODULE_19__.ResponsiblePlayGuardService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: RaffleDetailsPage,
    selectors: [["app-raffle-details"]],
    standalone: false,
    decls: 37,
    vars: 19,
    consts: [["heroSkel", ""], ["bodySkel", ""], [1, "details", 3, "fullscreen"], [1, "screen"], [1, "hero"], [1, "hero-top"], ["type", "button", 1, "icon-btn", 3, "click"], ["name", "arrow-back"], [1, "hero-actions"], ["name", "heart-outline"], ["name", "share-social-outline"], [4, "ngIf", "ngIfElse"], [1, "body"], ["class", "offline-empty", 4, "ngIf"], ["translucent", "true", 1, "footer"], [1, "footer-inner"], [1, "total"], [1, "total-lbl"], [1, "total-val"], ["type", "button", 1, "cta", 3, "click", "disabled"], [1, "cta-dot"], ["name", "arrow-forward"], [1, "hero-img"], [1, "hero-grad"], [1, "hero-badge"], [1, "hero-img", "skel"], ["animated", "", 1, "skel-block"], [1, "offline-empty"], [1, "offline-empty-title"], [1, "offline-empty-copy"], ["type", "button", 1, "offline-retry", 3, "click"], [1, "title-row"], [1, "title"], [1, "value"], [1, "value-label"], [1, "value-amt"], ["class", "description-card", 4, "ngIf"], [1, "progress-card"], [3, "label", "value", "progress", "ended"], [1, "progress-bottom"], [1, "fast"], ["name", "flame"], [1, "muted"], [1, "details-ticker", 3, "raffleId"], [1, "grid"], [1, "g-card"], [1, "g-ico"], ["name", "cash-outline"], [1, "g-lbl"], [1, "g-val"], ["name", "calendar-outline"], ["name", "checkmark-circle-outline"], [1, "stepper"], [1, "stepper-title"], [1, "pill"], [1, "stepper-card"], [1, "stepper-left"], ["type", "button", 1, "step-btn", 3, "click", "disabled"], ["name", "remove"], [1, "qty"], ["type", "button", 1, "step-btn", "plus", 3, "click", "disabled"], ["name", "add"], [1, "stepper-right"], [1, "total-amt"], ["class", "free-ticket-card", 4, "ngIf"], [1, "winners-head"], [1, "winners-title"], ["name", "trophy", 1, "trophy"], ["type", "button", 1, "see-all"], [1, "winners"], ["class", "w-card", 4, "ngFor", "ngForOf"], [1, "bottom-spacer"], [1, "description-card"], [1, "description-label"], [1, "desc"], [1, "free-ticket-card"], [1, "free-ticket-top"], [1, "free-ticket-badge"], [1, "free-ticket-count"], ["type", "button", 1, "free-ticket-btn", 3, "click", "disabled"], [1, "w-card"], [1, "w-avatar"], [1, "w-win"], [1, "w-name"], [1, "w-note"], [1, "skel-body"], ["animated", "", 1, "sk-line", "lg"], ["animated", "", 1, "sk-line", "md"], ["animated", "", 1, "sk-block"]],
    template: function RaffleDetailsPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.back());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 8)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.toggleFav());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.share());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RaffleDetailsPage_ng_container_11_Template, 6, 5, "ng-container", 11)(12, RaffleDetailsPage_ng_template_12_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, RaffleDetailsPage_div_15_Template, 10, 9, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, RaffleDetailsPage_ng_container_17_Template, 87, 62, "ng-container", 11)(18, RaffleDetailsPage_ng_template_18_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-footer", 14)(21, "div", 15)(22, "div", 16)(23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RaffleDetailsPage_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.goToPayment());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const heroSkel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        const bodySkel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.raffle)("ngIfElse", heroSkel_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 11, ctx.isOffline$) && !ctx.loading && !ctx.raffle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.raffle)("ngIfElse", bodySkel_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 13, "RAFFLE_DETAILS_PAGE.TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.totalPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.canParticipate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.isRaffleClosed ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 15, "RAFFLE_DETAILS_PAGE.RAFFLE_CLOSED") : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 17, "RAFFLE_DETAILS_PAGE.PARTICIPATE_NOW"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSkeletonText, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_21__.CountdownEnergyComponent, _shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_22__.LiveActivityTickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --bg: var(--app-bg);\n  --card: var(--app-surface);\n  --card2: var(--app-surface-2);\n  --gold: var(--app-warning);\n}\n\nion-content.details[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.screen[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: transparent;\n  color: var(--app-ink);\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 45vh;\n  min-height: 320px;\n}\n\n.hero-top[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  right: 0;\n  top: 0;\n  padding: 44px 16px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  display: grid;\n  place-items: center;\n  color: var(--app-ink);\n  transition: 0.15s transform ease;\n}\n\n.icon-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n\n.icon-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.hero-img[_ngcontent-%COMP%] {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n\n.hero-img.skel[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.skel-block[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 0;\n}\n\n.hero-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--app-overlay);\n  display: none;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 18px;\n  bottom: 22px;\n  padding: 10px 14px;\n  border-radius: 14px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: -12px;\n  border-top-left-radius: 36px;\n  border-top-right-radius: 36px;\n  padding: 28px 18px 0;\n  background: var(--app-bg);\n  border-top: 1px solid var(--app-border);\n  box-shadow: none;\n}\n\n.title-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 14px;\n  align-items: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  min-width: 0;\n  font-size: 30px;\n  line-height: 1.12;\n  letter-spacing: -0.02em;\n  margin: 0;\n  font-weight: 900;\n  overflow-wrap: anywhere;\n}\n\n.description-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 14px 15px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n}\n\n.description-label[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  color: var(--primary);\n  font-size: 10px;\n  font-weight: 900;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-ink);\n  font-size: 14px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n  white-space: pre-line;\n}\n\n.value[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 84px;\n  max-width: 132px;\n}\n\n.value-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n  color: var(--app-muted-soft);\n}\n\n.value-amt[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--primary);\n}\n\n.progress-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 14px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n}\n\n.progress-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  color: var(--app-ink);\n  margin-bottom: 10px;\n}\n\n.progress-n[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 900;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n  font-weight: 600;\n}\n\n.bar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 14px;\n  border-radius: 999px;\n  overflow: hidden;\n  background: var(--app-surface-2);\n}\n\n.bar-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: 0.18;\n  background: var(--app-overlay);\n}\n\n.bar-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 0%;\n  background: var(--app-primary);\n  box-shadow: none;\n  border-radius: 999px;\n}\n\n.progress-bottom[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n\n.fast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--app-warning);\n  font-weight: 700;\n}\n\n.fast[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.grid[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n.g-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 12px 10px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  text-align: center;\n}\n\n.g-ico[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  margin: 0 auto 8px;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  background: var(--app-primary-soft);\n  color: var(--primary);\n}\n\n.g-ico[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.g-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  letter-spacing: 0.18em;\n  color: var(--app-muted);\n}\n\n.g-val[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: 900;\n}\n\n.stepper[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.stepper-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 900;\n}\n\n.pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--app-muted);\n  background: var(--app-surface-2);\n  padding: 4px 10px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n}\n\n.stepper-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-radius: 26px;\n  padding: 12px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.stepper-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  padding: 8px;\n  border-radius: 999px;\n}\n\n.step-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n}\n\n.step-btn.plus[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: var(--app-on-primary);\n  box-shadow: none;\n}\n\n.step-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.step-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.qty[_ngcontent-%COMP%] {\n  width: 42px;\n  text-align: center;\n  font-size: 22px;\n  font-weight: 900;\n}\n\n.stepper-right[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 8px;\n}\n\n.total-amt[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--primary);\n  letter-spacing: -0.02em;\n}\n\n.free-ticket-card[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  border-radius: 20px;\n  padding: 12px;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n}\n\n.free-ticket-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.free-ticket-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  letter-spacing: 0.14em;\n  color: var(--app-ink);\n}\n\n.free-ticket-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--app-ink);\n}\n\n.free-ticket-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border-radius: 999px;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  font-weight: 900;\n  letter-spacing: 0.01em;\n}\n\n.free-ticket-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n}\n\n.winners-head[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.winners-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 900;\n  font-size: 16px;\n}\n\n.trophy[_ngcontent-%COMP%] {\n  color: var(--app-warning);\n  font-size: 18px;\n}\n\n.see-all[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n  color: var(--primary);\n  background: transparent;\n}\n\n.winners[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding-bottom: 10px;\n}\n\n.winners[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.w-card[_ngcontent-%COMP%] {\n  min-width: 160px;\n  border-radius: 18px;\n  padding: 14px 12px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  text-align: center;\n  position: relative;\n}\n\n.w-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 999px;\n  margin: 0 auto 10px;\n  background-size: cover;\n  background-position: center;\n  border: 2px solid var(--app-border-strong);\n}\n\n.w-win[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 54px;\n  left: 96px;\n  font-size: 10px;\n  font-weight: 900;\n  padding: 3px 7px;\n  border-radius: 999px;\n  background: var(--primary);\n  color: var(--app-on-primary);\n}\n\n.w-name[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.w-note[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 11px;\n  color: var(--app-muted);\n}\n\n.bottom-spacer[_ngcontent-%COMP%] {\n  height: 110px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  --background: var(--app-surface);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  border-top: 1px solid var(--app-border);\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  padding: 12px 14px calc(12px + env(safe-area-inset-bottom));\n}\n\n.total-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n  color: var(--app-muted);\n}\n\n.total-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  color: var(--app-warning);\n  text-shadow: none;\n}\n\n.total-val[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--app-warning);\n}\n\n.cta[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 54px;\n  border-radius: 999px;\n  background: var(--primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 18px;\n  box-shadow: none;\n}\n\n.cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n\n.cta-dot[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  display: grid;\n  place-items: center;\n}\n\n.cta-dot[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--app-primary);\n}\n\n.offline-empty[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  padding: 20px 18px;\n  border-radius: 22px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-danger);\n}\n\n.offline-empty-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--app-ink);\n}\n\n.offline-empty-copy[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: var(--app-ink);\n  line-height: 1.45;\n}\n\n.offline-retry[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 10px 14px;\n  border: 0;\n  border-radius: 999px;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  font-weight: 700;\n}\n\n.details-ticker[_ngcontent-%COMP%] {\n  display: block;\n  margin: 12px 0 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmFmZmxlLWRldGFpbHMvcmFmZmxlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQ0U7RUFDRixxQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQUY7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JB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QSxlQUFBO0VBQ0EsZ0JBQUE7QUFnQ0Y7O0FBOUJBO0VBQ0UsWUFBQTtBQWlDRjs7QUEvQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFrQ0Y7O0FBaENBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBbUNGOztBQWpDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUFvQ0Y7O0FBakNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFvQ0Y7O0FBakNBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFvQ0Y7O0FBakNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQW9DRjs7QUFoQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFtQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wcmltYXJ5OiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgLS1iZzogdmFyKC0tYXBwLWJnKTtcclxuICAtLWNhcmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAtLWNhcmQyOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICAtLWdvbGQ6IHZhcigtLWFwcC13YXJuaW5nKTsgLy8gb3I6IHZhbGV1ciAvIHByaXhcclxufVxyXG5cclxuaW9uLWNvbnRlbnQuZGV0YWlscyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNjcmVlbiB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDV2aDtcclxuICBtaW4taGVpZ2h0OiAzMjBweDtcclxufVxyXG5cclxuLmhlcm8tdG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogNDRweCAxNnB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlcm8tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLWJ0biB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICB0cmFuc2l0aW9uOiAwLjE1cyB0cmFuc2Zvcm0gZWFzZTtcclxufVxyXG4uaWNvbi1idG46YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpO1xyXG59XHJcbi5pY29uLWJ0biBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaGVyby1pbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlcm8taW1nLnNrZWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNrZWwtYmxvY2sge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uaGVyby1ncmFkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLW92ZXJsYXkpO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZXJvLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE4cHg7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzZweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzZweDtcclxuICBwYWRkaW5nOiAyOHB4IDE4cHggMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4udGl0bGUtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcclxuICBnYXA6IDE0cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjEyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBwYWRkaW5nOiAxNHB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1pbi13aWR0aDogODRweDtcclxuICBtYXgtd2lkdGg6IDEzMnB4O1xyXG59XHJcbi52YWx1ZS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMThlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkLXNvZnQpO1xyXG59XHJcbi52YWx1ZS1hbXQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnByb2dyZXNzLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5wcm9ncmVzcy1uIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4ubXV0ZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxufVxyXG4uYmFyLXBhdHRlcm4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBvcGFjaXR5OiAwLjE4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1vdmVybGF5KTtcclxufVxyXG4uYmFyLWZpbGwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMCBhdXRvIDAgMDtcclxuICB3aWR0aDogMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1ib3R0b20ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmZhc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLXdhcm5pbmcpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmZhc3QgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmctY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5nLWljbyB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDhweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcbi5nLWljbyBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5nLWxibCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMThlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG4uZy12YWwge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnN0ZXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuLnN0ZXBwZXItdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4ucGlsbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4uc3RlcHBlci1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RlcHBlci1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5zdGVwLWJ0biB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbn1cclxuLnN0ZXAtYnRuLnBsdXMge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5zdGVwLWJ0biBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zdGVwLWJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC40NTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcbi5xdHkge1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnN0ZXBwZXItcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG4udG90YWwtYW10IHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbn1cclxuXHJcbi5mcmVlLXRpY2tldC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbn1cclxuXHJcbi5mcmVlLXRpY2tldC10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mcmVlLXRpY2tldC1iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbn1cclxuXHJcbi5mcmVlLXRpY2tldC1jb3VudCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4uZnJlZS10aWNrZXQtYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbn1cclxuXHJcbi5mcmVlLXRpY2tldC1idG46ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTU7XHJcbn1cclxuXHJcbi53aW5uZXJzLWhlYWQge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ud2lubmVycy10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi50cm9waHkge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc2VlLWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi53aW5uZXJzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLndpbm5lcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udy1jYXJkIHtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnctYXZhdGFyIHtcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbn1cclxuLnctd2luIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NHB4O1xyXG4gIGxlZnQ6IDk2cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgcGFkZGluZzogM3B4IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG59XHJcbi53LW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuLnctbm90ZSB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLmJvdHRvbS1zcGFjZXIge1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbn1cclxuXHJcbi5mb290ZXItaW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4IGNhbGMoMTJweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XHJcbn1cclxuXHJcbi50b3RhbC1sYmwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuLnRvdGFsLXZhbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG4udG90YWwtdmFsIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbn1cclxuXHJcbi5jdGEge1xyXG4gIGZsZXg6IDE7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMThweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5jdGE6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG4uY3RhLWRvdCB7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY3RhLWRvdCBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuLm9mZmxpbmUtZW1wdHkge1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgcGFkZGluZzogMjBweCAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1kYW5nZXIpO1xyXG59XHJcblxyXG4ub2ZmbGluZS1lbXB0eS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4ub2ZmbGluZS1lbXB0eS1jb3B5IHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG59XHJcblxyXG4ub2ZmbGluZS1yZXRyeSB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cbi8vIEFjaGF0cyBlbiBkaXJlY3Qgc3VyIGNldHRlIHRvbWJvbGFcbi5kZXRhaWxzLXRpY2tlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEycHggMCAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_raffle-details_raffle-details_module_ts.js.map