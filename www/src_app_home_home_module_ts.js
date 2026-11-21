"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 630
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 1624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage
}];
class HomePageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function HomePageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomePageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: HomePageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 5055
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_engagement_email_verify_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/engagement/email-verify-banner.component */ 2990);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ 1624);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ 630);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ui/countdown-energy/countdown-energy.component */ 6881);
/* harmony import */ var _shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/engagement/live-activity-ticker.component */ 7414);
/* harmony import */ var _shared_engagement_reward_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/engagement/reward-progress.component */ 7240);
/* harmony import */ var _shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/engagement/trust-stats.component */ 2073);
/* harmony import */ var _shared_engagement_next_prize_poll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/engagement/next-prize-poll.component */ 5331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;













class HomePageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function HomePageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomePageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: HomePageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_5__.HomePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_7__.CountdownEnergyComponent, _shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_8__.LiveActivityTickerComponent, _shared_engagement_reward_progress_component__WEBPACK_IMPORTED_MODULE_9__.RewardProgressComponent, _shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_10__.TrustStatsComponent, _shared_engagement_next_prize_poll_component__WEBPACK_IMPORTED_MODULE_11__.NextPrizePollComponent, _shared_engagement_email_verify_banner_component__WEBPACK_IMPORTED_MODULE_3__.EmailVerifyBannerComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__.HomePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_5__.HomePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_7__.CountdownEnergyComponent, _shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_8__.LiveActivityTickerComponent, _shared_engagement_reward_progress_component__WEBPACK_IMPORTED_MODULE_9__.RewardProgressComponent, _shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_10__.TrustStatsComponent, _shared_engagement_next_prize_poll_component__WEBPACK_IMPORTED_MODULE_11__.NextPrizePollComponent, _shared_engagement_email_verify_banner_component__WEBPACK_IMPORTED_MODULE_3__.EmailVerifyBannerComponent]
  });
})();

/***/ },

/***/ 1624
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _shared_engagement_reward_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/engagement/reward-progress.component */ 7240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _shared_utils_skeleton_timing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/skeleton-timing */ 6656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var _core_constants_raffle_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/constants/raffle-categories */ 6031);
/* harmony import */ var _shared_utils_media_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/utils/media-url */ 4948);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _services_home_home_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/home/home-api.service */ 4144);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_notifications_notifications_state_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/notifications/notifications-state.service */ 2050);
/* harmony import */ var _services_raffles_raffles_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/raffles/raffles-api.service */ 6448);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/auth/auth.service */ 1339);
/* harmony import */ var _services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/auth/auth-state.service */ 6247);
/* harmony import */ var _services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/offline/network-status.service */ 9669);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/ui/countdown-energy/countdown-energy.component */ 6881);
/* harmony import */ var _shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/engagement/live-activity-ticker.component */ 7414);
/* harmony import */ var _shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/engagement/trust-stats.component */ 2073);
/* harmony import */ var _shared_engagement_next_prize_poll_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/engagement/next-prize-poll.component */ 5331);
/* harmony import */ var _shared_engagement_email_verify_banner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/engagement/email-verify-banner.component */ 2990);
var _staticBlock;
























const _c0 = () => [1, 2, 3, 4];
const _c1 = () => [1, 2];
const _c2 = () => [1, 2, 3];
function HomePage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "HOME_PAGE.WELCOME_BACK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r1.user.firstName, " ", ctx_r1.user.lastName || "", " ");
  }
}
function HomePage_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-skeleton-text", 38)(1, "ion-skeleton-text", 39);
  }
}
function HomePage_ion_badge_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-badge", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const n_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", n_r3 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](n_r3);
  }
}
function HomePage_ng_container_26_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_26_button_1_Template_button_click_0_listener() {
      const c_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectCategory(c_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r1.selectedCategoryId === c_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.categoryDisplayLabel(c_r5), " ");
  }
}
function HomePage_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_26_button_1_Template, 2, 3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.categories)("ngForTrackBy", ctx_r1.trackById);
  }
}
function HomePage_ng_template_27_ion_skeleton_text_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-skeleton-text", 44);
  }
}
function HomePage_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HomePage_ng_template_27_ion_skeleton_text_0_Template, 1, 0, "ion-skeleton-text", 43);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c0));
  }
}
function HomePage_app_email_verify_banner_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-email-verify-banner");
  }
}
function HomePage_app_reward_progress_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-reward-progress");
  }
}
function HomePage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_div_33_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.retryLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "OFFLINE.EMPTY_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 5, "OFFLINE.HOME_EMPTY_COPY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 7, "COMMON.RETRY"), " ");
  }
}
function HomePage_ng_container_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-skeleton-text", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-skeleton-text", 53)(4, "ion-skeleton-text", 54)(5, "ion-skeleton-text", 55)(6, "ion-skeleton-text", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function HomePage_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_44_div_1_Template, 7, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c1));
  }
}
function HomePage_ng_template_45_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "HOME_PAGE.ENDS_IN"), " ", ctx_r1.countdownText(d_r8), " ");
  }
}
function HomePage_ng_template_45_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_template_45_div_0_Template_div_click_0_listener() {
      const d_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openRaffle(d_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 61)(6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 52)(8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, HomePage_ng_template_45_div_0_div_12_Template, 3, 4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-countdown-energy", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_template_45_div_0_Template_button_click_16_listener($event) {
      const d_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r1.openRaffle(d_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const d_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", d_r8.badgeType || "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", d_r8.badgeText || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 14, "HOME_PAGE.ENDING_SOON_BADGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.safeImg(d_r8.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", d_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](d_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.categoryLabel(d_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", d_r8.endAt || d_r8.endsAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 16, "HOME_PAGE.TIME_LEFT"))("value", ctx_r1.countdownText(d_r8))("progress", ctx_r1.timeProgress(d_r8))("ended", ctx_r1.remainingMs(d_r8) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 18, "HOME_PAGE.TRY_TO_WIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", d_r8.ticketPrice ?? 0, " ", d_r8.currency || "XAF", " ");
  }
}
function HomePage_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HomePage_ng_template_45_div_0_Template, 22, 20, "div", 57);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.heroCards)("ngForTrackBy", ctx_r1.trackById);
  }
}
function HomePage_ng_container_51_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.countdownText(ctx_r1.featured));
  }
}
function HomePage_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_51_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openRaffle(ctx_r1.featured));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 61)(4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, HomePage_ng_container_51_div_8_Template, 4, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 76)(10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "app-countdown-energy", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 81)(22, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.safeImg(ctx_r1.featured.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", ctx_r1.featured.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r1.featured.badgeType || "hot");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.featured.badgeText || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 15, "HOME_PAGE.HOT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.featured.endAt || ctx_r1.featured.endsAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.featured.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.categoryLabel(ctx_r1.featured), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 17, "HOME_PAGE.VERIFIED_DRAW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 19, "HOME_PAGE.TIME_LEFT"))("value", ctx_r1.countdownText(ctx_r1.featured))("progress", ctx_r1.timeProgress(ctx_r1.featured))("ended", ctx_r1.remainingMs(ctx_r1.featured) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.featured.ticketPrice ?? 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.featured.currency || "XAF");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 21, "HOME_PAGE.BUY_TICKET"), " ");
  }
}
function HomePage_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-skeleton-text", 88)(2, "ion-skeleton-text", 53)(3, "ion-skeleton-text", 54)(4, "ion-skeleton-text", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_container_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_54_div_1_Template_div_click_0_listener() {
      const r_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openRaffle(r_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 92)(4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-countdown-energy", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 96)(12, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_ng_container_54_div_1_Template_button_click_14_listener($event) {
      const r_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      ctx_r1.openRaffle(r_r11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.safeImg(r_r11.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", r_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](r_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.categoryLabel(r_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 12, "HOME_PAGE.TIME_REMAINING"))("value", ctx_r1.countdownText(r_r11))("progress", ctx_r1.timeProgress(r_r11))("ended", ctx_r1.remainingMs(r_r11) === 0)("compact", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", r_r11.ticketPrice ?? 0, " ", r_r11.currency || "XAF", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 14, "HOME_PAGE.BUY_TICKET"), " ");
  }
}
function HomePage_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, HomePage_ng_container_54_div_1_Template, 17, 16, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.liveRows)("ngForTrackBy", ctx_r1.trackById);
  }
}
function HomePage_ng_template_55_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-skeleton-text", 101)(2, "ion-skeleton-text", 53)(3, "ion-skeleton-text", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function HomePage_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, HomePage_ng_template_55_div_0_Template, 4, 0, "div", 99);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c2));
  }
}
class HomePage {
  ionViewWillEnter() {
    this.isLoggedIn = this.auth.isLoggedIn();
    // Les compteurs bougent apres chaque achat: on les relit a chaque retour.
    if (this.hasEnteredView) this.rewards?.reload();
    this.startClock();
    this.startAutoRefresh();
    this.notifState.refresh();
    this.loadAll(this.hasEnteredView ? 'refresh' : 'init');
    this.hasEnteredView = true;
  }
  ionViewWillLeave() {
    this.stopClock();
    this.stopAutoRefresh();
  }
  doRefresh(ev) {
    this.loadAll('refresh');
    setTimeout(() => ev.target.complete(), 300);
  }
  constructor(api, router, notifState, rafflesService, translate, auth, authState, networkStatus) {
    this.api = api;
    this.router = router;
    this.notifState = notifState;
    this.rafflesService = rafflesService;
    this.translate = translate;
    this.auth = auth;
    this.authState = authState;
    this.networkStatus = networkStatus;
    this.autoRefreshMs = 90000;
    this.autoRefreshJitterMs = 15000;
    this.hasEnteredView = false;
    this.feedInFlight = false;
    this.isOffline$ = this.networkStatus.offline$;
    this.isLoggedIn = false;
    // Skeleton flags
    this.showFeaturedSkeleton = true;
    this.showEndingSoonSkeleton = true;
    this.showRowsSkeleton = true;
    this.heroCards = [];
    // Header
    this.loadingHeader = true;
    this.loadingCategories = true;
    this.user = null;
    // Data
    this.categories = [{
      id: 'all',
      label: 'All'
    }];
    this.selectedCategoryId = 'all';
    this.endingSoon = [];
    this.featured = null;
    this.liveRows = [];
    this.nowMs = Date.now();
  }
  ngOnInit() {
    this.subscribeToRaffleRefresh();
  }
  ngOnDestroy() {
    this.stopClock();
    this.stopAutoRefresh();
    this.raffleRefreshSub?.unsubscribe();
    this.raffleRefreshSub = undefined;
  }
  loadAll(reason, refresher) {
    this.loadHeader();
    this.loadCategories();
    this.loadDraws(reason, () => refresher?.complete());
  }
  loadHeader() {
    if (!this.auth.isLoggedIn()) {
      this.user = null;
      this.loadingHeader = false;
      return;
    }
    const sk = (0,_shared_utils_skeleton_timing__WEBPACK_IMPORTED_MODULE_2__.skeletonController)(0, 350);
    sk.scheduleShow(v => this.loadingHeader = v);
    this.api.getUserSummary().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => void sk.hide(v => this.loadingHeader = v))).subscribe({
      next: data => this.user = data,
      error: () => this.user = null
    });
  }
  loadCategories() {
    const sk = (0,_shared_utils_skeleton_timing__WEBPACK_IMPORTED_MODULE_2__.skeletonController)(0, 350);
    sk.scheduleShow(v => this.loadingCategories = v);
    this.api.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => void sk.hide(v => this.loadingCategories = v))).subscribe({
      next: data => {
        this.categories = data?.length ? data : [{
          id: 'all',
          label: 'All'
        }];
        if (!this.categories.some(c => c.id === this.selectedCategoryId)) {
          this.selectedCategoryId = this.categories[0].id;
        }
      },
      error: () => this.categories = [{
        id: 'all',
        label: 'All'
      }]
    });
  }
  loadDraws(reason, done, showSkeleton = true) {
    const skHero = (0,_shared_utils_skeleton_timing__WEBPACK_IMPORTED_MODULE_2__.skeletonController)(0, 350);
    const skFeatured = (0,_shared_utils_skeleton_timing__WEBPACK_IMPORTED_MODULE_2__.skeletonController)(0, 350);
    const skRows = (0,_shared_utils_skeleton_timing__WEBPACK_IMPORTED_MODULE_2__.skeletonController)(0, 350);
    if (showSkeleton) {
      skHero.scheduleShow(v => this.showEndingSoonSkeleton = v);
      skFeatured.scheduleShow(v => this.showFeaturedSkeleton = v);
      skRows.scheduleShow(v => this.showRowsSkeleton = v);
    }
    this.api.getHomeFeed(this.selectedCategoryId, {
      forceRefresh: reason === 'refresh',
      region: this.authState.me?.region ?? undefined
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      void skHero.hide(v => this.showEndingSoonSkeleton = v);
      void skRows.hide(v => this.showRowsSkeleton = v);
      void skFeatured.hide(v => this.showFeaturedSkeleton = v);
      done?.();
    })).subscribe({
      next: feed => {
        const endingSoonRows = (feed?.endingSoon ?? []).filter(x => this.isVisibleOnHome(x));
        this.endingSoon = endingSoonRows.filter(x => this.isPurchasable(x));
        this.heroCards = this.endingSoon;
        const all = (feed?.liveRows ?? []).filter(x => this.isVisibleOnHome(x));
        const featured = all.find(x => this.isPurchasable(x)) ?? null;
        this.featured = featured;
        const fid = featured?.id;
        this.liveRows = fid ? all.filter(x => x?.id !== fid) : all;
      },
      error: () => {
        this.featured = null;
        this.liveRows = [];
      }
    });
  }
  selectCategory(catId) {
    if (catId === this.selectedCategoryId) return;
    this.selectedCategoryId = catId;
    this.loadAll('category');
  }
  onRefresh(ev) {
    const refresher = ev.target;
    this.loadAll('refresh', refresher);
  }
  // trackById(_: number, x: { id: string }): string {
  //   return x.id;
  // }
  trackById(_, x) {
    return x?._id || x?.id || x?.raffleId || String(_);
  }
  timeProgress(d) {
    const end = this.getEndMs(d);
    if (!Number.isFinite(end)) return 0;
    const start = this.getStartMs(d);
    if (Number.isFinite(start) && end > start) {
      const elapsed = Math.max(0, Math.min(end - start, this.nowMs - start));
      return Math.max(0, Math.min(100, elapsed / (end - start) * 100));
    }
    // fallback if startAt is missing: animate over a rolling 24h window
    const remaining = Math.max(0, end - this.nowMs);
    const fallbackWindow = 24 * 60 * 60 * 1000;
    const elapsedFallback = Math.max(0, fallbackWindow - remaining);
    return Math.max(0, Math.min(100, elapsedFallback / fallbackWindow * 100));
  }
  openRaffle(d) {
    this.router.navigate(['/tabs/raffle-details', d.id]);
  }
  viewAll() {
    this.router.navigate(['/tabs/all-raffles']);
  }
  openLiveDraws() {
    this.router.navigate(['/tabs/winners']);
  }
  retryLoad() {
    this.loadAll('refresh');
  }
  startClock() {
    if (this.clockSub) return;
    this.clockSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000).subscribe(() => {
      this.nowMs = Date.now();
    });
  }
  stopClock() {
    this.clockSub?.unsubscribe();
    this.clockSub = undefined;
  }
  startAutoRefresh() {
    if (this.autoRefreshSub) return;
    this.scheduleAutoRefresh();
  }
  // Intervalle de base + jitter aleatoire 0-15s pour desynchroniser les clients.
  scheduleAutoRefresh() {
    const delay = this.autoRefreshMs + Math.floor(Math.random() * (this.autoRefreshJitterMs + 1));
    this.autoRefreshSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(delay).subscribe(() => {
      this.backgroundRefresh(() => this.scheduleAutoRefresh());
    });
  }
  stopAutoRefresh() {
    this.autoRefreshSub?.unsubscribe();
    this.autoRefreshSub = undefined;
  }
  backgroundRefresh(done) {
    if (this.feedInFlight) {
      done?.();
      return;
    }
    if (!this.canAutoRefresh()) {
      done?.();
      return;
    }
    this.feedInFlight = true;
    this.loadDraws('background', () => {
      this.feedInFlight = false;
      done?.();
    }, false);
  }
  subscribeToRaffleRefresh() {
    if (this.raffleRefreshSub) return;
    this.raffleRefreshSub = this.rafflesService.refresh$.subscribe(() => {
      this.backgroundRefresh();
    });
  }
  canAutoRefresh() {
    if (!this.router.url.includes('/tabs/home')) {
      return false;
    }
    if (typeof document !== 'undefined' && document.hidden) {
      return false;
    }
    if (typeof navigator !== 'undefined' && 'onLine' in navigator && navigator.onLine === false) {
      return false;
    }
    if (this.networkStatus.isConstrained()) {
      return false;
    }
    return true;
  }
  remainingMs(d) {
    const end = this.getEndMs(d);
    if (Number.isNaN(end)) return 0;
    return Math.max(0, end - this.nowMs);
  }
  countdownText(d) {
    const ms = this.remainingMs(d);
    if (!ms) return this.translate.instant('HOME_PAGE.ENDED');
    const totalSec = Math.floor(ms / 1000);
    const hh = Math.floor(totalSec / 3600);
    const mm = Math.floor(totalSec % 3600 / 60);
    const ss = totalSec % 60;
    const pad = n => String(n).padStart(2, '0');
    return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  }
  getEndMs(x) {
    const raw = x?.endsAt ?? x?.endAt ?? x?.end_at;
    const ms = raw ? new Date(raw).getTime() : NaN;
    return Number.isFinite(ms) ? ms : NaN;
  }
  getStartMs(x) {
    const raw = x?.startAt ?? x?.start_at;
    const ms = raw ? new Date(raw).getTime() : NaN;
    return Number.isFinite(ms) ? ms : NaN;
  }
  isVisibleOnHome(x) {
    // visible si pas de date fin (fallback) OU fin >= maintenant - 7 jours
    const end = this.getEndMs(x);
    if (!Number.isFinite(end)) return true;
    const keepMs = 7 * 24 * 60 * 60 * 1000;
    return end >= Date.now() - keepMs;
  }
  isPurchasable(x) {
    // achetable si pas terminé + status LIVE (si disponible)
    const st = String(x?.status ?? '').toUpperCase();
    const end = this.getEndMs(x);
    const ended = Number.isFinite(end) ? end <= Date.now() : false;
    if (ended) return false;
    if (st && st !== 'LIVE') return false;
    // stock tickets si dispo
    const total = Number(x?.total ?? x?.totalTickets ?? 0);
    const sold = Number(x?.sold ?? x?.ticketsSold ?? 0);
    if (total > 0 && sold >= total) return false;
    return true;
  }
  safeImg(u) {
    const absolute = (0,_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_6__.toAbsoluteMediaUrl)(u, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiBaseUrl);
    if (!absolute) {
      return 'assets/img/placeholder.png';
    }
    return absolute;
  }
  categoryLabel(x) {
    return (0,_core_constants_raffle_categories__WEBPACK_IMPORTED_MODULE_5__.raffleCategoryLabel)(x?.categoryId);
  }
  categoryDisplayLabel(category) {
    if (String(category.id).toLowerCase() !== 'all') return category.label;
    return this.translate.instant('HOME_PAGE.CATEGORY_ALL');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_home_home_api_service__WEBPACK_IMPORTED_MODULE_10__.HomeApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifications_notifications_state_service__WEBPACK_IMPORTED_MODULE_12__.NotificationsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_raffles_raffles_api_service__WEBPACK_IMPORTED_MODULE_13__.RafflesApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_16__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_17__.NetworkStatusService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: HomePage,
    selectors: [["app-home"]],
    viewQuery: function HomePage_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_engagement_reward_progress_component__WEBPACK_IMPORTED_MODULE_0__.RewardProgressComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.rewards = _t.first);
      }
    },
    standalone: false,
    decls: 59,
    vars: 34,
    consts: [["headerSkel", ""], ["chipsSkel", ""], ["heroData", ""], ["featuredSkeleton", ""], ["rowsSkeleton", ""], [1, "home", 3, "fullscreen"], ["aria-hidden", "true", 1, "bg-glow"], [1, "screen"], [1, "header", "sticky-header"], [1, "header-row"], [1, "user"], [1, "avatar-wrap"], [1, "avatar"], [1, "online-dot"], [1, "user-meta"], [4, "ngIf", "ngIfElse"], [1, "right"], ["type", "button", 1, "live-entry", 3, "click"], [1, "live-dot"], ["href", "/tabs/notifications", 1, "notif"], ["name", "notifications-outline"], [3, "hidden", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [1, "chips", "hide-scroll"], [1, "content"], [1, "home-ticker"], [4, "ngIf"], ["class", "offline-empty", 4, "ngIf"], [1, "section-head"], ["name", "flame-outline", 1, "fire"], ["type", "button", 1, "view-all", 3, "click"], [1, "hero-scroll", "hide-scroll"], [3, "click"], [1, "live-title"], [3, "loggedIn"], [1, "bottom-spacer"], [1, "welcome"], [1, "name"], ["animated", "", 1, "sk", "sk-welcome"], ["animated", "", 1, "sk", "sk-name"], [3, "hidden"], ["type", "button", "class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "chip", 3, "click"], ["animated", "", "class", "chip-skel", 4, "ngFor", "ngForOf"], ["animated", "", 1, "chip-skel"], [1, "offline-empty"], [1, "offline-empty-title"], [1, "offline-empty-copy"], ["type", "button", 1, "offline-retry", 3, "click"], ["class", "hero-card skel", 4, "ngFor", "ngForOf"], [1, "hero-card", "skel"], ["animated", "", 1, "sk-hero-img"], [1, "hero-body"], ["animated", "", 1, "sk-line", "lg"], ["animated", "", 1, "sk-line", "sm"], ["animated", "", 1, "sk-line", "bar"], ["animated", "", 1, "sk-btn"], ["class", "hero-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "hero-card", 3, "click"], [1, "badge", 3, "ngClass"], [1, "hero-img"], ["loading", "lazy", "decoding", "async", "fetchpriority", "low", 1, "network-image", 3, "src", "alt"], [1, "hero-grad"], [1, "hero-title"], [1, "category-chip-inline"], ["class", "hero-sub", 4, "ngIf"], [1, "progress"], [3, "label", "value", "progress", "ended"], ["type", "button", 1, "hero-cta", 3, "click"], [1, "price-pill"], [1, "hero-sub"], [1, "big-card", 3, "click"], [1, "big-img"], [1, "big-grad"], [1, "tag", 3, "ngClass"], ["class", "timer", 4, "ngIf"], [1, "big-body"], [1, "big-title"], [1, "verify"], ["name", "shield-checkmark-outline"], [1, "progress", "lg"], [1, "big-cta-row"], [1, "price"], ["type", "button", 1, "btn-primary"], [1, "timer"], ["name", "timer-outline"], [1, "t"], [1, "big-card", "skel"], ["animated", "", 1, "sk-big-img"], ["class", "row-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row-card", 3, "click"], [1, "row-img"], [1, "row-body"], [1, "row-title"], [1, "row-sub"], [3, "label", "value", "progress", "ended", "compact"], [1, "row-actions"], [1, "row-price"], ["type", "button", 1, "pill", 3, "click"], ["class", "row-card skel", 4, "ngFor", "ngForOf"], [1, "row-card", "skel"], ["animated", "", 1, "sk-row-img"]],
    template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "div", 10)(6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 12)(8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, HomePage_ng_container_10_Template, 6, 5, "ng-container", 15)(11, HomePage_ng_template_11_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 16)(14, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.openLiveDraws());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "ion-tab-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, HomePage_ion_badge_21_Template, 2, 2, "ion-badge", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ion-refresher", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionRefresh", function HomePage_Template_ion_refresher_ionRefresh_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.doRefresh($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, HomePage_ng_container_26_Template, 2, 2, "ng-container", 15)(27, HomePage_ng_template_27_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "app-live-activity-ticker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, HomePage_app_email_verify_banner_31_Template, 1, 0, "app-email-verify-banner", 26)(32, HomePage_app_reward_progress_32_Template, 1, 0, "app-reward-progress", 26)(33, HomePage_div_33_Template, 10, 9, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 28)(36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "ion-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.viewAll());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, HomePage_ng_container_44_Template, 2, 2, "ng-container", 15)(45, HomePage_ng_template_45_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "app-trust-stats", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function HomePage_Template_app_trust_stats_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.openLiveDraws());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, HomePage_ng_container_51_Template, 29, 23, "ng-container", 15)(52, HomePage_ng_template_52_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(54, HomePage_ng_container_54_Template, 2, 2, "ng-container", 15)(55, HomePage_ng_template_55_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "app-next-prize-poll", 34)(58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const headerSkel_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);
        const chipsSkel_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](28);
        const heroData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](46);
        const featuredSkeleton_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](53);
        const rowsSkeleton_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-image", "url(" + ctx.safeImg((ctx.user == null ? null : ctx.user.avatarUrl) || (ctx.user == null ? null : ctx.user.avatar)) + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loadingHeader && ctx.user)("ngIfElse", headerSkel_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 22, "HOME_PAGE.LIVE_DRAW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 24, ctx.notifState.unreadCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loadingCategories)("ngIfElse", chipsSkel_r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 26, ctx.isOffline$) && !ctx.showEndingSoonSkeleton && !ctx.heroCards.length && !ctx.featured && !ctx.liveRows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](38, 28, "HOME_PAGE.ENDING_SOON"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](42, 30, "COMMON.VIEW_ALL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showEndingSoonSkeleton)("ngIfElse", heroData_r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](50, 32, "HOME_PAGE.LIVE_DRAWS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showFeaturedSkeleton && ctx.featured)("ngIfElse", featuredSkeleton_r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showRowsSkeleton && (ctx.liveRows == null ? null : ctx.liveRows.length))("ngIfElse", rowsSkeleton_r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loggedIn", ctx.isLoggedIn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonTabButton, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_20__.CountdownEnergyComponent, _shared_engagement_live_activity_ticker_component__WEBPACK_IMPORTED_MODULE_21__.LiveActivityTickerComponent, _shared_engagement_reward_progress_component__WEBPACK_IMPORTED_MODULE_0__.RewardProgressComponent, _shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_22__.TrustStatsComponent, _shared_engagement_next_prize_poll_component__WEBPACK_IMPORTED_MODULE_23__.NextPrizePollComponent, _shared_engagement_email_verify_banner_component__WEBPACK_IMPORTED_MODULE_24__.EmailVerifyBannerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
    styles: [".home[_ngcontent-%COMP%] {\n  --bg: var(--app-bg);\n  --bg2: var(--app-bg);\n  --glass: var(--app-surface);\n  --glass2: var(--app-surface-2);\n  --stroke: var(--app-border);\n  --text: var(--app-ink);\n  --muted: var(--app-muted);\n  --accent: var(--app-primary);\n  --accent2: var(--app-primary-soft);\n  --accentGlow: transparent;\n  --gold: var(--app-warning);\n  --gold-deep: var(--app-warning);\n  --goldGlow: transparent;\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.home[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.home[_ngcontent-%COMP%]   .bg-glow[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  background: transparent;\n}\n.home[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: calc(env(safe-area-inset-top) + 14px) 16px 18px;\n  color: var(--text);\n}\n.home[_ngcontent-%COMP%]   .hide-scroll[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n}\n.home[_ngcontent-%COMP%]   .hide-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.home[_ngcontent-%COMP%]   .sticky-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  padding-bottom: 14px;\n  background: var(--app-surface);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n.home[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 6px 2px 10px;\n}\n.home[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.home[_ngcontent-%COMP%]   .avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n}\n.home[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 999px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: none;\n  border: 2px solid var(--app-border);\n}\n.home[_ngcontent-%COMP%]   .online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  right: -1px;\n  bottom: -1px;\n  border-radius: 999px;\n  background: var(--app-success);\n  border: 2px solid var(--app-border);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.home[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-muted);\n  line-height: 1;\n}\n.home[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  letter-spacing: -0.2px;\n  line-height: 1.1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.home[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 0 0 auto;\n}\n.home[_ngcontent-%COMP%]   .live-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 38px;\n  padding: 0 12px;\n  border-radius: 999px;\n  background: transparent;\n  border: 1px solid var(--app-border-strong);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  color: var(--app-ink);\n  font-weight: 800;\n  font-size: 12px;\n}\n.home[_ngcontent-%COMP%]   .live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--app-success);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .notif[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  display: grid;\n  place-items: center;\n  position: relative;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n.home[_ngcontent-%COMP%]   .notif-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: var(--app-danger);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 6px 2px 0;\n  overflow-x: auto;\n}\n.home[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 999px;\n  font-weight: 800;\n  font-size: 12px;\n  color: var(--app-ink);\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  white-space: nowrap;\n  transition: 180ms ease;\n}\n.home[_ngcontent-%COMP%]   .chip.active[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n  border-color: var(--app-border);\n  color: var(--app-on-primary);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .chip-skel[_ngcontent-%COMP%] {\n  width: 86px;\n  height: 36px;\n  border-radius: 999px;\n  opacity: 0.7;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 10px 2px 0;\n}\n.home[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 14px 0 10px;\n}\n.home[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 900;\n  letter-spacing: -0.3px;\n}\n.home[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--accent);\n  font-weight: 900;\n  font-size: 12px;\n  padding: 8px 10px;\n}\n.home[_ngcontent-%COMP%]   .fire[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--app-warning);\n  vertical-align: -3px;\n  margin-left: 2px;\n}\n.home[_ngcontent-%COMP%]   .hero-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n}\n.home[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  width: 265px;\n  flex: 0 0 265px;\n  border-radius: 22px;\n  overflow: hidden;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  box-shadow: none;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 2;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-weight: 900;\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  color: var(--app-on-primary);\n}\n.home[_ngcontent-%COMP%]   .badge.warn[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n}\n.home[_ngcontent-%COMP%]   .badge.danger[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n}\n.home[_ngcontent-%COMP%]   .badge.hot[_ngcontent-%COMP%] {\n  background: var(--app-warning);\n  color: var(--app-on-warning);\n}\n.home[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .network-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n.home[_ngcontent-%COMP%]   .hero-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--app-overlay);\n  display: none;\n}\n.home[_ngcontent-%COMP%]   .hero-body[_ngcontent-%COMP%] {\n  padding: 14px 14px 16px;\n}\n.home[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 18px;\n  line-height: 1.2;\n}\n.home[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 12px;\n  color: var(--app-muted);\n}\n.home[_ngcontent-%COMP%]   .category-chip-inline[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--app-ink);\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n}\n.home[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.home[_ngcontent-%COMP%]   .progress-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--app-muted);\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.home[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  overflow: hidden;\n}\n.home[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--app-primary);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .hero-cta[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 100%;\n  height: 46px;\n  border-radius: 999px;\n  border: 0;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .price-pill[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: var(--app-warning);\n  border: 1px solid var(--app-warning);\n  color: var(--app-on-warning);\n  font-weight: 800;\n  font-size: 12px;\n}\n.home[_ngcontent-%COMP%]   .live-title[_ngcontent-%COMP%] {\n  margin: 12px 0 10px;\n  font-size: 20px;\n  font-weight: 900;\n  letter-spacing: -0.3px;\n}\n.home[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%] {\n  border-radius: 22px;\n  overflow: hidden;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  box-shadow: none;\n  margin-bottom: 14px;\n}\n.home[_ngcontent-%COMP%]   .big-img[_ngcontent-%COMP%] {\n  height: 160px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .big-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--app-overlay);\n  display: none;\n}\n.home[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 2;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-weight: 900;\n  font-size: 11px;\n  color: var(--app-on-primary);\n  background: var(--app-primary);\n}\n.home[_ngcontent-%COMP%]   .tag.warn[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n}\n.home[_ngcontent-%COMP%]   .tag.danger[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n}\n.home[_ngcontent-%COMP%]   .tag.hot[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n}\n.home[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  bottom: 12px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 10px;\n  border-radius: 999px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n  font-weight: 800;\n  font-size: 11px;\n}\n.home[_ngcontent-%COMP%]   .big-body[_ngcontent-%COMP%] {\n  padding: 14px 14px 16px;\n}\n.home[_ngcontent-%COMP%]   .big-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 900;\n}\n.home[_ngcontent-%COMP%]   .verify[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  color: var(--app-muted);\n  font-size: 12px;\n  font-weight: 700;\n}\n.home[_ngcontent-%COMP%]   .progress.lg[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.home[_ngcontent-%COMP%]   .bar.lg[_ngcontent-%COMP%] {\n  height: 9px;\n}\n.home[_ngcontent-%COMP%]   .bar-fill.grad[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n}\n.home[_ngcontent-%COMP%]   .big-cta-row[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: space-between;\n}\n.home[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--gold);\n}\n.home[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--app-warning);\n  margin-left: 4px;\n}\n.home[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 46px;\n  border-radius: 999px;\n  border: 0;\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  font-weight: 900;\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .row-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  margin-bottom: 12px;\n}\n.home[_ngcontent-%COMP%]   .row-img[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 14px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: none;\n  flex: 0 0 62px;\n  overflow: hidden;\n}\n.home[_ngcontent-%COMP%]   .row-body[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.home[_ngcontent-%COMP%]   .row-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.home[_ngcontent-%COMP%]   .row-sub[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: 12px;\n  color: var(--app-muted);\n  font-weight: 700;\n}\n.home[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.home[_ngcontent-%COMP%]   .row-price[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 14px;\n  color: var(--gold);\n}\n.home[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font-weight: 900;\n}\n.home[_ngcontent-%COMP%]   .bottom-spacer[_ngcontent-%COMP%] {\n  height: 90px;\n}\n.home[_ngcontent-%COMP%]   .sk[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 10px;\n  opacity: 0.75;\n}\n.home[_ngcontent-%COMP%]   .sk-welcome[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 10px;\n}\n.home[_ngcontent-%COMP%]   .sk-name[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 18px;\n  margin-top: 6px;\n}\n.home[_ngcontent-%COMP%]   .sk-hero-img[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100%;\n}\n.home[_ngcontent-%COMP%]   .sk-line.lg[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 70%;\n  margin-top: 10px;\n}\n.home[_ngcontent-%COMP%]   .sk-line.sm[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 45%;\n  margin-top: 8px;\n}\n.home[_ngcontent-%COMP%]   .sk-line.bar[_ngcontent-%COMP%] {\n  height: 9px;\n  width: 100%;\n  margin-top: 12px;\n  border-radius: 999px;\n}\n.home[_ngcontent-%COMP%]   .sk-btn[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 100%;\n  margin-top: 12px;\n  border-radius: 999px;\n}\n.home[_ngcontent-%COMP%]   .sk-big-img[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 100%;\n}\n.home[_ngcontent-%COMP%]   .sk-row-img[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 14px;\n}\n\n.offline-empty[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  padding: 20px 18px;\n  border-radius: 22px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-danger);\n  box-shadow: none;\n}\n\n.offline-empty-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--app-ink);\n}\n\n.offline-empty-copy[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: var(--app-ink);\n  line-height: 1.45;\n}\n\n.offline-retry[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 10px 14px;\n  border: 0;\n  border-radius: 999px;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  font-weight: 700;\n}\n\n\n\n.home[_ngcontent-%COMP%] {\n  --bg: var(--app-bg);\n  --bg2: var(--app-bg);\n  --accent: var(--app-primary);\n  --accent2: var(--app-primary-soft);\n  --accentGlow: transparent;\n  --gold: var(--app-warning);\n  --gold-deep: var(--app-warning);\n}\n.home[_ngcontent-%COMP%]   .bg-glow[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.home[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  width: min(100%, 760px);\n  margin-inline: auto;\n  padding-inline: clamp(16px, 4vw, 24px);\n}\n.home[_ngcontent-%COMP%]   .sticky-header[_ngcontent-%COMP%] {\n  margin-inline: -4px;\n  padding-inline: 4px;\n  background: var(--app-bg);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n.home[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]   .avatar-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n}\n.home[_ngcontent-%COMP%]   .avatar-wrap[_ngcontent-%COMP%] {\n  flex-basis: 46px;\n}\n.home[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border-color: var(--app-border-strong);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  letter-spacing: -0.035em;\n}\n.home[_ngcontent-%COMP%]   .live-entry[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]   .notif[_ngcontent-%COMP%] {\n  height: 42px;\n  border-color: var(--app-border);\n  background: var(--app-surface-2);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .notif[_ngcontent-%COMP%] {\n  width: 42px;\n}\n.home[_ngcontent-%COMP%]   .live-entry[_ngcontent-%COMP%] {\n  border-color: var(--app-border-strong);\n  background: transparent;\n}\n.home[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%] {\n  gap: 8px;\n  padding-top: 9px;\n}\n.home[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  min-height: 39px;\n  padding-inline: 17px;\n  border-color: var(--app-border);\n  background: var(--app-surface-2);\n  font-weight: 750;\n}\n.home[_ngcontent-%COMP%]   .chip.active[_ngcontent-%COMP%] {\n  background: var(--app-gradient-brand);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home[_ngcontent-%COMP%]   .section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]   .live-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: -0.045em;\n}\n.home[_ngcontent-%COMP%]   .hero-scroll[_ngcontent-%COMP%] {\n  margin-inline: -16px;\n  padding: 2px 16px 12px;\n  scroll-snap-type: x proximity;\n}\n.home[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  width: min(82vw, 298px);\n  flex-basis: min(82vw, 298px);\n  border-color: var(--app-border);\n  border-radius: 26px;\n  background: var(--app-surface);\n  box-shadow: none;\n  scroll-snap-align: start;\n  transition: transform 0.25s var(--app-ease-out), border-color 0.25s ease;\n}\n.home[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n  height: 174px;\n}\n.home[_ngcontent-%COMP%]   .hero-body[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]   .big-body[_ngcontent-%COMP%] {\n  padding: 17px;\n}\n.home[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]   .big-title[_ngcontent-%COMP%] {\n  letter-spacing: -0.035em;\n}\n.home[_ngcontent-%COMP%]   .hero-cta[_ngcontent-%COMP%], \n.home[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--app-gradient-brand);\n  box-shadow: var(--app-shadow-brand);\n}\n.home[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%] {\n  border-color: var(--app-border);\n  border-radius: 28px;\n  background: var(--app-surface);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .big-img[_ngcontent-%COMP%] {\n  height: clamp(180px, 46vw, 280px);\n}\n.home[_ngcontent-%COMP%]   .row-card[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-color: var(--app-border);\n  border-radius: 22px;\n  background: var(--app-surface-2);\n  box-shadow: none;\n}\n.home[_ngcontent-%COMP%]   .row-img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  flex-basis: 70px;\n  border-radius: 17px;\n}\n.home[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  border-color: var(--app-border-strong);\n  background: var(--app-primary-soft);\n}\n.home[_ngcontent-%COMP%]   .bottom-spacer[_ngcontent-%COMP%] {\n  height: 116px;\n}\n\n.offline-empty[_ngcontent-%COMP%] {\n  border-color: var(--app-warning);\n  background: transparent;\n  box-shadow: var(--app-shadow-sm);\n}\n\n.offline-empty-title[_ngcontent-%COMP%] {\n  color: var(--app-ink);\n}\n\n.offline-empty-copy[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n}\n\n.offline-retry[_ngcontent-%COMP%] {\n  color: var(--app-on-primary);\n  background: var(--app-primary);\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .home[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]:hover, \n   .home[_ngcontent-%COMP%]   .big-card[_ngcontent-%COMP%]:hover, \n   .home[_ngcontent-%COMP%]   .row-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n    border-color: var(--app-border-strong);\n  }\n}\n@media (min-width: 700px) {\n  .home[_ngcontent-%COMP%]   .hero-scroll[_ngcontent-%COMP%] {\n    margin-inline: -24px;\n    padding-inline: 24px;\n  }\n  .home[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n    width: 330px;\n    flex-basis: 330px;\n  }\n  .home[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n}\n.home[_ngcontent-%COMP%]   .home-ticker[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px 0 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBRUEsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBNkJBLFdBQUE7RUFrSUEsVUFBQTtFQWtDQSxZQUFBO0VBbUNBLFNBQUE7RUFtSkEsU0FBQTtFQXFJQSxTQUFBO0VBdUVBLG1CQUFBO0FBNWpCRjtBQUxFO0VBQ0UseUJBQUE7QUFPSjtBQUpFO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFDRTtBQUtOO0FBRkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3REFBQTtFQUNBLGtCQUFBO0FBSUo7QUFERTtFQUNFLHFCQUFBO0FBR0o7QUFGSTtFQUNFLGFBQUE7QUFJTjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFB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YmcpO1xyXG4gIC0tYmcyOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tZ2xhc3M6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAtLWdsYXNzMjogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgLS1zdHJva2U6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIC0tdGV4dDogdmFyKC0tYXBwLWluayk7XHJcbiAgLS1tdXRlZDogdmFyKC0tYXBwLW11dGVkKTtcclxuXHJcbiAgLS1hY2NlbnQ6IHZhcigtLWFwcC1wcmltYXJ5KTsgLy8gdmlvbGV0IG1hcnF1ZSAoYWxpZ25lIHN1ciBsZSBkZXNpZ24gc3lzdGVtKVxyXG4gIC0tYWNjZW50MjogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7IC8vIHJvc2UgKHRlcnRpYXJ5IGR1IGRlc2lnbiBzeXN0ZW0pXHJcbiAgLS1hY2NlbnRHbG93OiB0cmFuc3BhcmVudDtcclxuICAtLWdvbGQ6IHZhcigtLWFwcC13YXJuaW5nKTsgLy8gb3I6IHByaXggJiByZWNvbXBlbnNlc1xyXG4gIC0tZ29sZC1kZWVwOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgLS1nb2xkR2xvdzogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuYmctZ2xvdyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBpbnNldDogMDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnNjcmVlbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZzogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxNHB4KSAxNnB4IDE4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgfVxyXG5cclxuICAuaGlkZS1zY3JvbGwge1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogSEVBREVSICovXHJcbiAgLnN0aWNreS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIHBhZGRpbmc6IDZweCAycHggMTBweDtcclxuICB9XHJcblxyXG4gIC51c2VyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhci13cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgZmxleDogMCAwIDQycHg7XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIH1cclxuXHJcbiAgLm9ubGluZS1kb3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDlweDtcclxuICAgIGhlaWdodDogOXB4O1xyXG4gICAgcmlnaHQ6IC0xcHg7XHJcbiAgICBib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdWNjZXNzKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC51c2VyLW1ldGEge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJweDtcclxuICB9XHJcblxyXG4gIC53ZWxjb21lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAubGl2ZS1lbnRyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubGl2ZS1kb3Qge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5vdGlmIHtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubm90aWYtZG90IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZGFuZ2VyKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBDSElQUyAqL1xyXG4gIC5jaGlwcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDJweCAwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jaGlwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdHJhbnNpdGlvbjogMTgwbXMgZWFzZTtcclxuICB9XHJcblxyXG4gIC5jaGlwLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5KTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY2hpcC1za2VsIHtcclxuICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG5cclxuICAvKiBDT05URU5UICovXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweCAycHggMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDE0cHggMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24taGVhZCBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICB9XHJcblxyXG4gIC52aWV3LWFsbCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpcmUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAtM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcblxyXG4gIC8qIEhFUk8gKi9cclxuICAuaGVyby1zY3JvbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTRweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tY2FyZCB7XHJcbiAgICB3aWR0aDogMjY1cHg7XHJcbiAgICBmbGV4OiAwIDAgMjY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5KTtcclxuICB9XHJcbiAgLmJhZGdlLndhcm4ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgfVxyXG4gIC5iYWRnZS5kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgfVxyXG4gIC5iYWRnZS5ob3Qge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXdhcm5pbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1vbi13YXJuaW5nKTtcclxuICB9XHJcblxyXG4gIC5oZXJvLWltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5uZXR3b3JrLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5oZXJvLWdyYWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtb3ZlcmxheSk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE0cHggMTZweDtcclxuICB9XHJcblxyXG4gIC5oZXJvLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tc3ViIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LWNoaXAtaW5saW5lIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy1tZXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5iYXItZmlsbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaGVyby1jdGEge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByaWNlLXBpbGwge1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC13YXJuaW5nKTtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtb24td2FybmluZyk7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLyogTElWRSAqL1xyXG4gIC5saXZlLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMTJweCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICB9XHJcblxyXG4gIC5iaWctY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gIC5iaWctaW1nIHtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmJpZy1ncmFkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLW92ZXJsYXkpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC50YWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgfVxyXG4gIC50YWcud2FybiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZGFuZ2VyKTtcclxuICB9XHJcbiAgLnRhZy5kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgfVxyXG4gIC50YWcuaG90IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC50aW1lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIGJvdHRvbTogMTJweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcblxyXG4gIC5iaWctYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE0cHggMTZweDtcclxuICB9XHJcblxyXG4gIC5iaWctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcblxyXG4gIC52ZXJpZnkge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy5sZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJhci5sZyB7XHJcbiAgICBoZWlnaHQ6IDlweDtcclxuICB9XHJcblxyXG4gIC5iYXItZmlsbC5ncmFkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5iaWctY3RhLXJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcclxuICB9XHJcbiAgLnByaWNlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1wcmltYXJ5IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIFJPV1MgKi9cclxuICAucm93LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG5cclxuICAucm93LWltZyB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZsZXg6IDAgMCA2MnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5yb3ctYm9keSB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnJvdy10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gIC5yb3ctc3ViIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5yb3ctYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucm93LXByaWNlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZ29sZCk7XHJcbiAgfVxyXG5cclxuICAucGlsbCB7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1zcGFjZXIge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLyogc2tlbGV0b24gc2l6ZXMgKi9cclxuICAuc2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICB9XHJcbiAgLnNrLXdlbGNvbWUge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5zay1uYW1lIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbiAgLnNrLWhlcm8taW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnNrLWxpbmUubGcge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5zay1saW5lLnNtIHtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5zay1saW5lLmJhciB7XHJcbiAgICBoZWlnaHQ6IDlweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIH1cclxuICAuc2stYnRuIHtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIH1cclxuXHJcbiAgLnNrLWJpZy1pbWcge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2stcm93LWltZyB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgfVxyXG59XHJcbi5vZmZsaW5lLWVtcHR5IHtcclxuICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMThweDtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtZGFuZ2VyKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ub2ZmbGluZS1lbXB0eS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4ub2ZmbGluZS1lbXB0eS1jb3B5IHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG59XHJcblxyXG4ub2ZmbGluZS1yZXRyeSB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLyogMjAyNiB2aXN1YWwgcmVmaW5lbWVudDogc2FtZSBzdHJ1Y3R1cmUsIGRlbnNlciBoaWVyYXJjaHkgYW5kIHJpY2hlciBkZXB0aC4gKi9cclxuLmhvbWUge1xyXG4gIC0tYmc6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1iZzI6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1hY2NlbnQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAtLWFjY2VudDI6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIC0tYWNjZW50R2xvdzogdHJhbnNwYXJlbnQ7XHJcbiAgLS1nb2xkOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgLS1nb2xkLWRlZXA6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuXHJcbiAgLmJnLWdsb3cge1xyXG4gICAgYmFja2dyb3VuZDpcclxuICAgICAgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuIHtcclxuICAgIHdpZHRoOiBtaW4oMTAwJSwgNzYwcHgpO1xyXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICAgIHBhZGRpbmctaW5saW5lOiBjbGFtcCgxNnB4LCA0dncsIDI0cHgpO1xyXG4gIH1cclxuXHJcbiAgLnN0aWNreS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWlubGluZTogLTRweDtcclxuICAgIHBhZGRpbmctaW5saW5lOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhcixcclxuICAuYXZhdGFyLXdyYXAge1xyXG4gICAgd2lkdGg6IDQ2cHg7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyLXdyYXAge1xyXG4gICAgZmxleC1iYXNpczogNDZweDtcclxuICB9XHJcblxyXG4gIC5hdmF0YXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzNWVtO1xyXG4gIH1cclxuXHJcbiAgLmxpdmUtZW50cnksXHJcbiAgLm5vdGlmIHtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubm90aWYge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgfVxyXG5cclxuICAubGl2ZS1lbnRyeSB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmNoaXBzIHtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxuICB9XHJcblxyXG4gIC5jaGlwIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM5cHg7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMTdweDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3NTA7XHJcbiAgfVxyXG5cclxuICAuY2hpcC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWdyYWRpZW50LWJyYW5kKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkIGgyLFxyXG4gIC5saXZlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNDVlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvLXNjcm9sbCB7XHJcbiAgICBtYXJnaW4taW5saW5lOiAtMTZweDtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4IDEycHg7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IHByb3hpbWl0eTtcclxuICB9XHJcblxyXG4gIC5oZXJvLWNhcmQge1xyXG4gICAgd2lkdGg6IG1pbig4MnZ3LCAyOThweCk7XHJcbiAgICBmbGV4LWJhc2lzOiBtaW4oODJ2dywgMjk4cHgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgdHJhbnNmb3JtIDAuMjVzIHZhcigtLWFwcC1lYXNlLW91dCksXHJcbiAgICAgIGJvcmRlci1jb2xvciAwLjI1cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8taW1nIHtcclxuICAgIGhlaWdodDogMTc0cHg7XHJcbiAgfVxyXG5cclxuICAuaGVyby1ib2R5LFxyXG4gIC5iaWctYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tdGl0bGUsXHJcbiAgLmJpZy10aXRsZSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW07XHJcbiAgfVxyXG5cclxuICAuaGVyby1jdGEsXHJcbiAgLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudC1icmFuZCk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LWJyYW5kKTtcclxuICB9XHJcblxyXG4gIC5iaWctY2FyZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYmlnLWltZyB7XHJcbiAgICBoZWlnaHQ6IGNsYW1wKDE4MHB4LCA0NnZ3LCAyODBweCk7XHJcbiAgfVxyXG5cclxuICAucm93LWNhcmQge1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnJvdy1pbWcge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBmbGV4LWJhc2lzOiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICB9XHJcblxyXG4gIC5waWxsIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXNwYWNlciB7XHJcbiAgICBoZWlnaHQ6IDExNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9mZmxpbmUtZW1wdHkge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLXdhcm5pbmcpO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWFwcC1zaGFkb3ctc20pO1xyXG59XHJcblxyXG4ub2ZmbGluZS1lbXB0eS10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4ub2ZmbGluZS1lbXB0eS1jb3B5IHtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLm9mZmxpbmUtcmV0cnkge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgLmhvbWUgLmhlcm8tY2FyZDpob3ZlcixcclxuICAuaG9tZSAuYmlnLWNhcmQ6aG92ZXIsXHJcbiAgLmhvbWUgLnJvdy1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgLmhvbWUgLmhlcm8tc2Nyb2xsIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IC0yNHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZSAuaGVyby1jYXJkIHtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIGZsZXgtYmFzaXM6IDMzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWUgLmhlcm8taW1nIHtcclxuICAgIGhlaWdodDogMTkwcHg7XHJcbiAgfVxyXG59XHJcblxuLy8gQmFuZGVhdSBkJ2FjdGl2aXRlIGVuIGRpcmVjdCAoY29tcG9zYW50IHBhcnRhZ2UpXG4uaG9tZSAuaG9tZS10aWNrZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IDAgMnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 2990
/*!********************************************************************!*\
  !*** ./src/app/shared/engagement/email-verify-banner.component.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailVerifyBannerComponent: () => (/* binding */ EmailVerifyBannerComponent)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1339);
/* harmony import */ var src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth/auth-state.service */ 6247);

var _staticBlock;










const _c0 = a0 => ({
  email: a0
});
function EmailVerifyBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EmailVerifyBannerComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.resend());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 4, "EMAIL_VERIFY_BANNER.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 6, "EMAIL_VERIFY_BANNER.TEXT", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c0, ctx_r1.email)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.sending || ctx_r1.sent);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 9, ctx_r1.sent ? "EMAIL_VERIFY_BANNER.SENT" : "EMAIL_VERIFY_BANNER.RESEND"), " ");
  }
}
/**
 * Bandeau "Confirme ton adresse email" avec bouton "Renvoyer le lien".
 * Visible uniquement quand l'API dit explicitement emailVerified === false
 * (un profil pas encore charge ne declenche rien).
 */
class EmailVerifyBannerComponent {
  constructor(auth, authState, toast, translate, cdr) {
    this.auth = auth;
    this.authState = authState;
    this.toast = toast;
    this.translate = translate;
    this.cdr = cdr;
    this.visible = false;
    this.email = '';
    this.sending = false;
    this.sent = false;
  }
  ngOnInit() {
    this.sub = this.authState.me$.subscribe(me => {
      this.visible = !!me && me.emailVerified === false;
      this.email = String(me?.email ?? '');
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  resend() {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.sending || _this.sent) return;
      _this.sending = true;
      _this.cdr.markForCheck();
      let message;
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.auth.resendEmailVerification());
        if (res?.alreadyVerified) {
          _this.authState.refreshMe();
          message = _this.translate.instant('EMAIL_VERIFY_BANNER.ALREADY');
        } else {
          _this.sent = true;
          message = _this.translate.instant('EMAIL_VERIFY_BANNER.TOAST_SENT', {
            email: _this.email
          });
        }
      } catch (err) {
        const raw = err?.error?.message;
        message = (typeof raw === 'string' && raw.length <= 160 ? raw : '') || _this.translate.instant('EMAIL_VERIFY_BANNER.TOAST_FAILED');
      } finally {
        _this.sending = false;
        _this.cdr.markForCheck();
      }
      const t = yield _this.toast.create({
        message,
        duration: 3000,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function EmailVerifyBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmailVerifyBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_9__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: EmailVerifyBannerComponent,
    selectors: [["app-email-verify-banner"]],
    decls: 1,
    vars: 1,
    consts: [["class", "banner", "role", "status", 4, "ngIf"], ["role", "status", 1, "banner"], ["name", "mail-unread-outline", "aria-hidden", "true"], [1, "text"], ["type", "button", 3, "click", "disabled"]],
    template: function EmailVerifyBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EmailVerifyBannerComponent_div_0_Template, 12, 13, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.visible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n}\n\nion-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 24px;\n  color: var(--app-primary);\n}\n\n.text[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 12.5px;\n  line-height: 1.35;\n}\n\n.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n  overflow-wrap: anywhere;\n}\n\nbutton[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  border: 0;\n  border-radius: 999px;\n  padding: 8px 12px;\n  background: var(--app-primary);\n  color: #fff;\n  font-weight: 700;\n  font-size: 12px;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2VuZ2FnZW1lbnQvZW1haWwtdmVyaWZ5LWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQUFSOztBQUVNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNSOztBQUNNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUFNO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQUdSOztBQURNO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSVI7O0FBRk07RUFDRSxZQUFBO0FBS1IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5iYW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMnB4O1xuICAgICAgICBmb250LXNpemU6IDEyLjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gICAgICB9XG4gICAgICAudGV4dCBzcGFuIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICBidXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ },

/***/ 5331
/*!****************************************************************!*\
  !*** ./src/app/shared/engagement/next-prize-poll.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextPrizePollComponent: () => (/* binding */ NextPrizePollComponent)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var src_app_services_responsible_play_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/responsible-play/responsible-play-api.service */ 6980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_engagement_engagement_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/engagement/engagement-api.service */ 5712);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);

var _staticBlock;











const _c0 = a0 => ({
  n: a0
});
function NextPrizePollComponent_section_0_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.poll.description);
  }
}
function NextPrizePollComponent_section_0_button_9_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", o_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", o_r3.label);
  }
}
function NextPrizePollComponent_section_0_button_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", o_r3.percent, "%");
  }
}
function NextPrizePollComponent_section_0_button_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 18);
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("width", o_r3.percent, "%");
  }
}
function NextPrizePollComponent_section_0_button_9_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-icon", 19);
  }
}
function NextPrizePollComponent_section_0_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NextPrizePollComponent_section_0_button_9_Template_button_click_0_listener() {
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.vote(o_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NextPrizePollComponent_section_0_button_9_img_1_Template, 1, 2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, NextPrizePollComponent_section_0_button_9_span_4_Template, 2, 1, "span", 13)(5, NextPrizePollComponent_section_0_button_9_span_5_Template, 1, 2, "span", 14)(6, NextPrizePollComponent_section_0_button_9_ion_icon_6_Template, 1, 0, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mine", o_r3.id === ctx_r0.myOptionId)("results", !!ctx_r0.myOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.voting || !!ctx_r0.myOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", o_r3.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](o_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.myOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.myOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", o_r3.id === ctx_r0.myOptionId);
  }
}
function NextPrizePollComponent_section_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ENGAGEMENT.POLL_THANKS"));
  }
}
function NextPrizePollComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, NextPrizePollComponent_section_0_p_7_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, NextPrizePollComponent_section_0_button_9_Template, 7, 10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, NextPrizePollComponent_section_0_span_11_Template, 3, 3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 7, "ENGAGEMENT.POLL_KICKER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.poll.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.poll.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.poll.options)("ngForTrackBy", ctx_r0.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.myOptionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](14, 9, "ENGAGEMENT.POLL_VOTES", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c0, ctx_r0.poll.totalVotes)));
  }
}
/** "Choisis le prochain lot": un vote par joueur, resultats apres le vote. */
class NextPrizePollComponent {
  constructor(api, router, toast, translate, cdr) {
    this.api = api;
    this.router = router;
    this.toast = toast;
    this.translate = translate;
    this.cdr = cdr;
    this.loggedIn = false;
    this.poll = null;
    this.myOptionId = null;
    this.voting = false;
  }
  ngOnInit() {
    this.api.activePoll().subscribe({
      next: poll => {
        this.poll = poll;
        this.cdr.markForCheck();
        if (poll && this.loggedIn) this.loadMyVote(poll.id);
      },
      error: () => {
        this.poll = null;
        this.cdr.markForCheck();
      }
    });
  }
  trackById(_, o) {
    return o.id;
  }
  vote(optionId) {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.poll || _this.voting || _this.myOptionId) return;
      if (!_this.loggedIn) {
        yield _this.showToast(_this.translate.instant('ENGAGEMENT.POLL_LOGIN'));
        yield _this.router.navigate(['/auth/login'], {
          queryParams: {
            redirect: '/tabs/home'
          }
        });
        return;
      }
      _this.voting = true;
      _this.cdr.markForCheck();
      _this.api.vote(_this.poll.id, optionId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
        _this.voting = false;
        _this.cdr.markForCheck();
      })).subscribe({
        next: updated => {
          _this.myOptionId = optionId;
          if (updated) _this.poll = updated;
          _this.cdr.markForCheck();
        },
        error: function () {
          var _ref = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            if (Number(err?.status) === 409) {
              // Deja vote (autre appareil): on affiche simplement les resultats.
              _this.loadMyVote(_this.poll.id);
            }
            yield _this.showToast((0,src_app_services_responsible_play_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_5__.apiErrorMessage)(err) || _this.translate.instant('ENGAGEMENT.POLL_ERROR'));
          });
          return function error(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    })();
  }
  loadMyVote(pollId) {
    this.api.myVote().subscribe({
      next: res => {
        if (res?.pollId === pollId && res.optionId) {
          this.myOptionId = res.optionId;
          this.cdr.markForCheck();
        }
      },
      error: () => undefined
    });
  }
  showToast(message) {
    var _this2 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this2.toast.create({
        message,
        duration: 2200,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NextPrizePollComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NextPrizePollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_engagement_engagement_api_service__WEBPACK_IMPORTED_MODULE_9__.EngagementApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: NextPrizePollComponent,
    selectors: [["app-next-prize-poll"]],
    inputs: {
      loggedIn: "loggedIn"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "poll", 4, "ngIf"], [1, "poll"], [1, "kicker"], ["name", "sparkles-outline", "aria-hidden", "true"], ["class", "desc", 4, "ngIf"], [1, "options"], ["type", "button", "class", "option", 3, "mine", "results", "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "foot"], [4, "ngIf"], [1, "desc"], ["type", "button", 1, "option", 3, "click", "disabled"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], [1, "label"], ["class", "pct", 4, "ngIf"], ["class", "fill", "aria-hidden", "true", 3, "width", 4, "ngIf"], ["name", "checkmark-circle", "class", "check", 4, "ngIf"], ["loading", "lazy", 3, "src", "alt"], [1, "pct"], ["aria-hidden", "true", 1, "fill"], ["name", "checkmark-circle", 1, "check"]],
    template: function NextPrizePollComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, NextPrizePollComponent_section_0_Template, 15, 14, "section", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.poll);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".poll[_ngcontent-%COMP%] {\n  margin: 18px 0;\n  padding: 16px;\n  border-radius: var(--app-radius-lg, 18px);\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n}\n\n.kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11.5px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--app-primary);\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 6px 0 4px;\n  font-size: 17px;\n  font-weight: 800;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 13px;\n  color: var(--app-muted);\n}\n\n.options[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin-top: 10px;\n}\n\n.option[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  min-height: 48px;\n  padding: 8px 12px;\n  border-radius: var(--app-radius, 14px);\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font: inherit;\n  text-align: left;\n  overflow: hidden;\n}\n\n.option[_ngcontent-%COMP%]:not(.results):active {\n  transform: scale(0.99);\n}\n\n.option.mine[_ngcontent-%COMP%] {\n  border-color: var(--app-primary);\n}\n\n.option[disabled][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  border-radius: 10px;\n  flex: 0 0 auto;\n}\n\n.label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  font-weight: 700;\n  font-size: 14px;\n}\n\n.pct[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-weight: 800;\n  font-variant-numeric: tabular-nums;\n}\n\n.check[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: var(--app-primary);\n  font-size: 18px;\n}\n\n.fill[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  background: var(--app-primary-soft);\n  opacity: 0.35;\n  transition: width 0.6s var(--app-ease-out, ease-out);\n}\n\n.foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: 10px;\n  font-size: 12px;\n  color: var(--app-muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2VuZ2FnZW1lbnQvbmV4dC1wcml6ZS1wb2xsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QUFBUjs7QUFFTTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUNSOztBQUNNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFUjs7QUFBTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBR1I7O0FBRE07RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBSVI7O0FBRk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLUjs7QUFITTtFQUNFLHNCQUFBO0FBTVI7O0FBSk07RUFDRSxnQ0FBQTtBQU9SOztBQUxNO0VBQ0UsVUFBQTtBQVFSOztBQU5NO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVNSOztBQVBNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVVSOztBQVJNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQVdSOztBQVRNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBWVI7O0FBVk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7QUFhUjs7QUFYTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWNSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAucG9sbCB7XG4gICAgICAgIG1hcmdpbjogMThweCAwO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtcmFkaXVzLWxnLCAxOHB4KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICAgICAgfVxuICAgICAgLmtpY2tlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMS41cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogNnB4IDAgNHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAub3B0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgLm9wdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1yYWRpdXMsIDE0cHgpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5vcHRpb246bm90KC5yZXN1bHRzKTphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgICAgfVxuICAgICAgLm9wdGlvbi5taW5lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICAub3B0aW9uW2Rpc2FibGVkXSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIH1cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5wY3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gICAgICB9XG4gICAgICAuY2hlY2sge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5maWxsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMCBhdXRvIDAgMDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XG4gICAgICAgIG9wYWNpdHk6IDAuMzU7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgdmFyKC0tYXBwLWVhc2Utb3V0LCBlYXNlLW91dCk7XG4gICAgICB9XG4gICAgICAuZm9vdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ },

/***/ 7240
/*!****************************************************************!*\
  !*** ./src/app/shared/engagement/reward-progress.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RewardProgressComponent: () => (/* binding */ RewardProgressComponent),
/* harmony export */   rewardGoal: () => (/* binding */ rewardGoal)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_referral_referral_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/referral/referral-api.service */ 8364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;









const _c0 = a0 => ({
  n: a0
});
function RewardProgressComponent_button_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, "ENGAGEMENT.FREE_TICKETS_BALANCE", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r1.freeTickets)), " ");
  }
}
function RewardProgressComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RewardProgressComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RewardProgressComponent_button_0_span_6_Template, 3, 6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, "ENGAGEMENT.REWARDS_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.freeTickets > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 12, ctx_r1.loyalty.remaining === 1 ? "ENGAGEMENT.LOYALTY_REMAINING_ONE" : "ENGAGEMENT.LOYALTY_REMAINING", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx_r1.loyalty.remaining)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-valuenow", ctx_r1.loyalty.percent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r1.loyalty.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 15, ctx_r1.referral.remaining === 1 ? "ENGAGEMENT.REFERRAL_REMAINING_ONE" : "ENGAGEMENT.REFERRAL_REMAINING", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, ctx_r1.referral.remaining)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-valuenow", ctx_r1.referral.percent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r1.referral.percent, "%");
  }
}
/** Calcule l'avancement vers le PROCHAIN ticket gratuit. */
function rewardGoal(count, target) {
  const safeTarget = Math.max(1, Math.floor(Number(target) || 1));
  const safeCount = Math.max(0, Math.floor(Number(count) || 0));
  const done = safeCount % safeTarget;
  return {
    count: safeCount,
    target: safeTarget,
    remaining: safeTarget - done,
    percent: Math.round(done / safeTarget * 100)
  };
}
/** "Encore 2 tombolas avant ton ticket gratuit" + parrainage, sur l'accueil. */
class RewardProgressComponent {
  constructor(api, router, cdr) {
    this.api = api;
    this.router = router;
    this.cdr = cdr;
    this.loyalty = null;
    this.referral = null;
    this.freeTickets = 0;
  }
  ngOnInit() {
    this.reload();
  }
  reload() {
    this.api.summary().subscribe({
      next: s => {
        this.freeTickets = Math.max(0, Number(s?.freeTicketsBalance ?? 0));
        this.loyalty = rewardGoal(s?.loyalty?.playedRafflesCount, s?.loyalty?.target);
        this.referral = rewardGoal(s?.referral?.qualifiedReferrals, s?.referral?.target);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loyalty = null;
        this.referral = null;
        this.cdr.markForCheck();
      }
    });
  }
  open() {
    void this.router.navigate(['/tabs/referral']);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RewardProgressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RewardProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_referral_referral_api_service__WEBPACK_IMPORTED_MODULE_6__.ReferralApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RewardProgressComponent,
    selectors: [["app-reward-progress"]],
    decls: 1,
    vars: 1,
    consts: [["type", "button", "class", "rewards", 3, "click", 4, "ngIf"], ["type", "button", 1, "rewards", 3, "click"], [1, "head"], [1, "title"], ["name", "gift-outline", "aria-hidden", "true"], ["class", "balance", 4, "ngIf"], [1, "goal"], [1, "label"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "bar"], [1, "fill"], [1, "fill", "alt"], [1, "balance"]],
    template: function RewardProgressComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, RewardProgressComponent_button_0_Template, 19, 22, "button", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loyalty && ctx.referral);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".rewards[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: 12px 0 4px;\n  padding: 14px;\n  text-align: left;\n  border-radius: var(--app-radius-lg, 18px);\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n  font: inherit;\n}\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 800;\n  font-size: 14px;\n}\n\n.title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--app-warning);\n  font-size: 18px;\n}\n\n.balance[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  border-radius: var(--app-radius-pill, 999px);\n  background: var(--app-warning-soft);\n  color: var(--app-ink);\n  font-size: 11.5px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n\n.goal[_ngcontent-%COMP%]    + .goal[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--app-muted);\n  margin-bottom: 5px;\n}\n\n.bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 99px;\n  background: var(--app-surface-3, var(--app-surface-2));\n  overflow: hidden;\n}\n\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 6px;\n  border-radius: inherit;\n  background: var(--app-gradient-gold, var(--app-warning));\n  transition: width 0.6s var(--app-ease-out, ease-out);\n}\n\n.fill.alt[_ngcontent-%COMP%] {\n  background: var(--app-gradient-brand, var(--app-primary));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2VuZ2FnZW1lbnQvcmV3YXJkLXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFBUjs7QUFFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBQ1I7O0FBQ007RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUFNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBR1I7O0FBRE07RUFDRSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlSOztBQUZNO0VBQ0UsZ0JBQUE7QUFLUjs7QUFITTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQU1SOztBQUpNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQU9SOztBQUxNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHdEQUFBO0VBQ0Esb0RBQUE7QUFRUjs7QUFOTTtFQUNFLHlEQUFBO0FBU1IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5yZXdhcmRzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEycHggMCA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1yYWRpdXMtbGcsIDE4cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICAuaGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5iYWxhbmNlIHtcbiAgICAgICAgcGFkZGluZzogM3B4IDlweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLXJhZGl1cy1waWxsLCA5OTlweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC13YXJuaW5nLXNvZnQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmdvYWwgKyAuZ29hbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEyLjVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICAgIC5iYXIge1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMywgdmFyKC0tYXBwLXN1cmZhY2UtMikpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmZpbGwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZ3JhZGllbnQtZ29sZCwgdmFyKC0tYXBwLXdhcm5pbmcpKTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyB2YXIoLS1hcHAtZWFzZS1vdXQsIGVhc2Utb3V0KTtcbiAgICAgIH1cbiAgICAgIC5maWxsLmFsdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1ncmFkaWVudC1icmFuZCwgdmFyKC0tYXBwLXByaW1hcnkpKTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ },

/***/ 6656
/*!*************************************************!*\
  !*** ./src/app/shared/utils/skeleton-timing.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skeletonController: () => (/* binding */ skeletonController)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

function skeletonController(delayMs = 150, minMs = 250) {
  let showTimer;
  let shownAt = 0;
  return {
    scheduleShow(setVisible) {
      clearTimeout(showTimer);
      shownAt = 0;
      showTimer = setTimeout(() => {
        shownAt = Date.now();
        setVisible(true);
      }, delayMs);
    },
    hide(setVisible) {
      return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        clearTimeout(showTimer);
        if (!shownAt) {
          // skeleton jamais montré
          setVisible(false);
          return;
        }
        const elapsed = Date.now() - shownAt;
        const remaining = Math.max(0, minMs - elapsed);
        if (remaining) yield new Promise(r => setTimeout(r, remaining));
        setVisible(false);
      })();
    }
  };
}

/***/ }

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map