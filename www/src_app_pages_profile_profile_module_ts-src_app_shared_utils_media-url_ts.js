"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts-src_app_shared_utils_media-url_ts"],{

/***/ 1291
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 3901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage
}];
class ProfileRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ProfileRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ProfileRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 1818
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageModule: () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ 1291);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.page */ 3901);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);
/* harmony import */ var _push_prefs_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./push-prefs-card.component */ 3766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;









class ProfilePageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ProfilePageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfilePageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: ProfilePageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProfileRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent, _push_prefs_card_component__WEBPACK_IMPORTED_MODULE_7__.PushPrefsCardComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProfilePageModule, {
    declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_4__.ProfilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__.ProfileRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent, _push_prefs_card_component__WEBPACK_IMPORTED_MODULE_7__.PushPrefsCardComponent]
  });
})();

/***/ },

/***/ 3901
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _push_prefs_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./push-prefs-card.component */ 3766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_profile_profile_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profile/profile-api.service */ 2068);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1339);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var src_app_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/theme/theme.service */ 6857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);

var _staticBlock;












const _c0 = () => [1, 2, 3, 4, 5];
function ProfilePage_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 32)(2, "div", 33)(3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_ng_container_14_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editAvatar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h1", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 38)(11, "div", 39)(12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_ng_container_14_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.topUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", (ctx_r2.user == null ? null : ctx_r2.user.avatar) || "assets/img/profile.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("alt", ((ctx_r2.user == null ? null : ctx_r2.user.firstName) || "") + " " + ((ctx_r2.user == null ? null : ctx_r2.user.lastName) || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, "EDIT_PROFILE_PAGE.CHANGE_PHOTO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ((ctx_r2.user == null ? null : ctx_r2.user.firstName) || "") + " " + ((ctx_r2.user == null ? null : ctx_r2.user.lastName) || ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 9, "PROFILE_PAGE.BALANCE_CURRENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.balanceLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 11, "PROFILE_PAGE.ADD_BALANCE"));
  }
}
function ProfilePage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-skeleton-text", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-skeleton-text", 45)(3, "ion-skeleton-text", 46);
  }
}
function ProfilePage_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 47)(2, "div", 48)(3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 48)(12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.stats ? ctx_r2.stats.ticketsBought : "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 4, "PROFILE_PAGE.TICKETS_BOUGHT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.stats ? ctx_r2.stats.productsWon : "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 6, "PROFILE_PAGE.PRODUCTS_WON"), " ");
  }
}
function ProfilePage_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-skeleton-text", 57)(3, "ion-skeleton-text", 58)(4, "ion-skeleton-text", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-skeleton-text", 57)(8, "ion-skeleton-text", 58)(9, "ion-skeleton-text", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ProfilePage_ng_container_50_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_ng_container_50_div_1_button_1_Template_button_click_0_listener() {
      const h_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openHistoryItem(h_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 65)(3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 67)(5, "div", 68)(6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 71)(11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const h_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-lost", ctx_r2.isHistoryLost(h_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", h_r5.imageUrl || "assets/img/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](h_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("live", ctx_r2.historyBadgeTone(h_r5) === "live")("won", ctx_r2.historyBadgeTone(h_r5) === "won")("lost", ctx_r2.historyBadgeTone(h_r5) === "lost")("ended", ctx_r2.historyBadgeTone(h_r5) === "ended");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.raffleBadgeLabel(h_r5), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](h_r5.dateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](h_r5.ticketsLabel);
  }
}
function ProfilePage_ng_container_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProfilePage_ng_container_50_div_1_button_1_Template, 19, 15, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.history);
  }
}
function ProfilePage_ng_container_50_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-empty-state", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("compact", true)("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, "PROFILE_PAGE.EMPTY_HISTORY_TITLE"))("description", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 5, "PROFILE_PAGE.EMPTY_HISTORY_DESC"));
  }
}
function ProfilePage_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProfilePage_ng_container_50_div_1_Template, 2, 1, "div", 60)(2, ProfilePage_ng_container_50_ng_template_2_Template, 3, 7, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const emptyHistory_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.history.length)("ngIfElse", emptyHistory_r6);
  }
}
function ProfilePage_ng_template_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-skeleton-text", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-skeleton-text", 78)(4, "ion-skeleton-text", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ProfilePage_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProfilePage_ng_template_51_div_1_Template, 5, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class ProfilePage {
  constructor(api, auth, nav, toast, translate, router, theme) {
    this.api = api;
    this.auth = auth;
    this.nav = nav;
    this.toast = toast;
    this.translate = translate;
    this.router = router;
    this.theme = theme;
    this.loadingHeader = true;
    this.loadingStats = true;
    this.loadingHistory = true;
    this.user = null;
    this.stats = null;
    this.history = [];
  }
  ionViewWillEnter() {
    this.loadAll();
    // L'autorisation OS a pu changer dans les Parametres Android.
    void this.pushCard?.refresh();
  }
  loadAll() {
    this.loadingHeader = true;
    this.loadingStats = true;
    this.loadingHistory = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)({
      me: this.api.me().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null))),
      stats: this.api.stats().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null))),
      history: this.api.history(5).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])))
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
      this.loadingHeader = false;
      this.loadingStats = false;
      this.loadingHistory = false;
    })).subscribe(({
      me,
      stats,
      history
    }) => {
      this.user = me;
      this.stats = stats;
      this.history = history;
    });
  }
  get fullName() {
    const fn = this.user?.firstName ?? '';
    const ln = this.user?.lastName ?? '';
    const n = `${fn} ${ln}`.trim();
    return n || '—';
  }
  get balanceLabel() {
    if (!this.stats) return '—';
    const b = this.stats.balance;
    const c = this.stats?.currency ?? 'XAF';
    const locale = this.translate.currentLang === 'en' ? 'en-US' : 'fr-FR';
    return `${b.toLocaleString(locale)} ${c}`;
  }
  get themeMode() {
    return this.theme.current;
  }
  setTheme(mode) {
    void this.theme.set(mode);
  }
  back() {
    this.nav.navigateBack('/tabs/home');
  }
  settings() {
    this.nav.navigateForward('/tabs/edit-profile');
  }
  openSupport() {
    this.nav.navigateForward('/support');
  }
  logout() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.auth.logout();
      const t = yield _this.toast.create({
        message: _this.translate.instant('PROFILE_PAGE.TOAST_LOGOUT'),
        duration: 900
      });
      yield t.present();
      _this.nav.navigateRoot('/landing');
    })();
  }
  goBack() {
    this.nav.back();
  }
  goSettings() {
    /* plus tard */
  }
  editAvatar() {
    this.nav.navigateForward('/tabs/edit-profile');
  }
  topUp() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this2.toast.create({
        message: _this2.translate.instant('PROFILE_PAGE.TOPUP_COMING_SOON'),
        duration: 1800
      });
      yield t.present();
    })();
  }
  goHistory() {
    this.router.navigate(['/tabs/all-raffles']);
  }
  openHistoryItem(h) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raffleId = _this3.getHistoryRaffleId(h);
      if (!raffleId) {
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('PROFILE_PAGE.TOAST_RAFFLE_MISSING'),
          duration: 1500
        });
        yield t.present();
        return;
      }
      let ok = yield _this3.router.navigate(['/tabs/raffle-details', raffleId]);
      if (!ok) {
        ok = yield _this3.router.navigate(['/raffle-details', raffleId]);
      }
      if (!ok) {
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('PROFILE_PAGE.TOAST_NAVIGATION_FAILED'),
          duration: 1500
        });
        yield t.present();
      }
    })();
  }
  trackByTitle(_, x) {
    return x.title;
  }
  parseHistoryResult(h) {
    const raw = String(h?.result ?? '').trim().toUpperCase();
    if (raw === 'WON' || raw === 'WIN') return 'WON';
    if (raw === 'LOST' || raw === 'LOSE') return 'LOST';
    return 'NONE';
  }
  isHistoryLost(h) {
    return this.parseHistoryResult(h) === 'LOST';
  }
  isRaffleActive(h) {
    const st = String(h?.status || '').trim().toUpperCase();
    if (h?.endsAt) {
      const end = new Date(h.endsAt).getTime();
      if (!Number.isNaN(end) && end <= Date.now()) return false;
    }
    if (['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'].includes(st)) return false;
    if (st === 'LIVE') return true;
    const result = this.parseHistoryResult(h);
    if (result !== 'NONE') return false;
    return false;
  }
  historyBadgeTone(h) {
    if (this.isRaffleActive(h)) return 'live';
    const result = this.parseHistoryResult(h);
    if (result === 'WON') return 'won';
    if (result === 'LOST') return 'lost';
    return 'ended';
  }
  raffleBadgeLabel(h) {
    const tone = this.historyBadgeTone(h);
    if (tone === 'live') return this.translate.instant('PROFILE_PAGE.LIVE');
    if (tone === 'won') return this.translate.instant('PROFILE_PAGE.WON');
    if (tone === 'lost') return this.translate.instant('PROFILE_PAGE.LOST');
    return this.translate.instant('PROFILE_PAGE.ENDED');
  }
  getHistoryRaffleId(h) {
    const anyHistory = h;
    return anyHistory?.raffleId || anyHistory?._id || anyHistory?.id || '';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ProfilePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_profile_profile_api_service__WEBPACK_IMPORTED_MODULE_8__.ProfileApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_15__.ThemeService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProfilePage,
    selectors: [["app-profile"]],
    viewQuery: function ProfilePage_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_push_prefs_card_component__WEBPACK_IMPORTED_MODULE_5__.PushPrefsCardComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.pushCard = _t.first);
      }
    },
    standalone: false,
    decls: 69,
    vars: 55,
    consts: [["headerSkeleton", ""], ["statsSkeleton", ""], ["historySkeleton", ""], ["emptyHistory", ""], [1, "premium-bg", 3, "fullscreen"], [1, "page"], [1, "header"], [1, "top-actions"], ["type", "button", 1, "icon-btn", 3, "click"], ["name", "arrow-back-outline"], [1, "right-actions"], ["name", "headset-outline"], ["name", "create-outline"], [4, "ngIf", "ngIfElse"], [1, "body"], [1, "appearance-card"], [1, "appearance-label"], ["role", "group", 1, "appearance-options"], ["type", "button", 1, "appearance-option", 3, "click"], ["name", "phone-portrait-outline"], ["name", "sunny-outline"], ["name", "moon-outline"], [1, "section-head"], ["type", "button", 1, "view-all", 3, "click"], ["routerLink", "/tabs/responsible-play", 1, "responsible-link"], ["name", "shield-half-outline", "aria-hidden", "true"], [1, "grow"], ["name", "chevron-forward-outline", "aria-hidden", "true"], [1, "logout-wrap"], ["type", "button", 1, "logout", 3, "click"], ["name", "log-out-outline"], [1, "bottom-spacer"], [1, "avatar-wrap"], [1, "avatar-ring"], [1, "avatar-inner"], [1, "avatar", 3, "src"], ["type", "button", 1, "avatar-edit", 3, "click"], [1, "name"], [1, "balance-pill"], [1, "balance-meta"], [1, "balance-label"], [1, "balance-value"], ["type", "button", 1, "balance-add", 3, "click"], ["name", "add-outline"], ["animated", "", 1, "sk-avatar"], ["animated", "", 1, "sk-name"], ["animated", "", 1, "sk-balance"], [1, "glass-card", "stats-card"], [1, "stat"], [1, "stat-ico"], ["name", "ticket-outline"], [1, "stat-val"], [1, "stat-lbl"], [1, "divider"], [1, "stat-ico", "alt"], ["name", "cube-outline"], [1, "glass-card", "stats-card", "skel"], ["animated", "", 1, "sk-ico"], ["animated", "", 1, "sk-num"], ["animated", "", 1, "sk-small"], ["class", "history-list", 4, "ngIf", "ngIfElse"], [1, "history-list"], ["class", "glass-panel history-item", "type", "button", 3, "is-lost", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "glass-panel", "history-item", 3, "click"], [1, "thumb"], ["alt", "product", 3, "src"], [1, "thumb-grad"], [1, "h-body"], [1, "h-top"], [1, "h-title"], [1, "badge"], [1, "h-meta"], [1, "meta"], ["name", "calendar-outline"], ["icon", "time-outline", 3, "compact", "title", "description"], ["class", "glass-panel history-item skel", 4, "ngFor", "ngForOf"], [1, "glass-panel", "history-item", "skel"], ["animated", "", 1, "sk-thumb"], ["animated", "", 1, "sk-line"], ["animated", "", 1, "sk-line", "sm"]],
    template: function ProfilePage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.back());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 10)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.openSupport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.settings());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ProfilePage_ng_container_14_Template, 20, 13, "ng-container", 13)(15, ProfilePage_ng_template_15_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.setTheme("system"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.setTheme("light"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.setTheme("dark"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "app-push-prefs-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ProfilePage_ng_container_40_Template, 19, 8, "ng-container", 13)(41, ProfilePage_ng_template_41_Template, 10, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 22)(44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.goHistory());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ProfilePage_ng_container_50_Template, 4, 2, "ng-container", 13)(51, ProfilePage_ng_template_51_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "span", 26)(56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "ion-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 28)(64, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProfilePage_Template_button_click_64_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.logout());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "ion-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const headerSkeleton_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
        const statsSkeleton_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](42);
        const historySkeleton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 29, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 31, "SUPPORT_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 33, "EDIT_PROFILE_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingHeader)("ngIfElse", headerSkeleton_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 35, "PROFILE_PAGE.APPEARANCE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 37, "PROFILE_PAGE.APPEARANCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.themeMode === "system");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-pressed", ctx.themeMode === "system");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 39, "PROFILE_PAGE.THEME_SYSTEM"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.themeMode === "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-pressed", ctx.themeMode === "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 41, "PROFILE_PAGE.THEME_LIGHT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.themeMode === "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-pressed", ctx.themeMode === "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](38, 43, "PROFILE_PAGE.THEME_DARK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingStats)("ngIfElse", statsSkeleton_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 45, "PROFILE_PAGE.HISTORY_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 47, "PROFILE_PAGE.SEE_ALL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingHistory)("ngIfElse", historySkeleton_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](58, 49, "RESPONSIBLE_PLAY.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 51, "RESPONSIBLE_PLAY.PROFILE_LINK_HINT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](67, 53, "PROFILE_PAGE.LOGOUT"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_17__.EmptyStateComponent, _push_prefs_card_component__WEBPACK_IMPORTED_MODULE_5__.PushPrefsCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --primary-2: var(--app-primary-soft);\n  --bg-dark: var(--app-bg);\n  --bg-dark-2: var(--app-bg);\n  --surface-dark: var(--app-surface-2);\n  --success: var(--app-success);\n  --danger: var(--app-danger);\n  --ion-background-color: transparent;\n  font-family: \"Plus Jakarta Sans\", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;\n}\n\nion-content.premium-bg[_ngcontent-%COMP%] {\n  --background: transparent;\n  background-color: var(--bg-dark);\n  background-image: none;\n  color: var(--app-ink);\n}\n\n.page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  min-height: 100dvh;\n  position: relative;\n  overflow: hidden;\n}\n\n.page[_ngcontent-%COMP%]::before, \n.page[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  z-index: 0;\n  border-radius: 9999px;\n}\n\n.page[_ngcontent-%COMP%]::before {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: calc(env(safe-area-inset-top) + 24px) 20px 20px;\n  text-align: center;\n}\n\n.top-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n  color: var(--app-muted);\n}\n\n.right-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 9999px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  display: grid;\n  place-items: center;\n  transition: transform 150ms ease, background 150ms ease;\n}\n\n.icon-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  background: var(--app-surface-2);\n}\n\nion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n\n.avatar-wrap[_ngcontent-%COMP%] {\n  width: 126px;\n  height: 126px;\n  margin: 0 auto 12px;\n  position: relative;\n}\n\n.avatar-ring[_ngcontent-%COMP%] {\n  width: 126px;\n  height: 126px;\n  border-radius: 9999px;\n  padding: 5px;\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\n.avatar-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 9999px;\n  padding: 2px;\n  background: var(--bg-dark);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 9999px;\n  object-fit: cover;\n  display: block;\n}\n\n.avatar-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  bottom: 6px;\n  width: 36px;\n  height: 36px;\n  border-radius: 9999px;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  border: 3px solid var(--bg-dark-2);\n  display: grid;\n  place-items: center;\n  box-shadow: none;\n}\n\n.avatar-edit[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  margin: 0 0 10px;\n  color: var(--app-ink);\n}\n\n.balance-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 10px 10px 14px;\n  border-radius: 9999px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n  box-shadow: none;\n}\n\n.balance-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1.05;\n}\n\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  color: var(--app-muted);\n}\n\n.balance-value[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: 17px;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  color: var(--app-ink);\n}\n\n.balance-add[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 9999px;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  display: grid;\n  place-items: center;\n  box-shadow: none;\n  transition: transform 150ms ease;\n}\n\n.balance-add[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 0 20px 36px;\n}\n\n.glass-panel[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n  border: 1px solid var(--app-border);\n  box-shadow: none;\n}\n\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n  border: 1px solid var(--app-border);\n  box-shadow: none;\n}\n\n.stats-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 14px 0 20px;\n  position: relative;\n  overflow: hidden;\n}\n\n.stats-card[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.stat[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 1;\n}\n\n.stat-ico[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 16px;\n  display: grid;\n  place-items: center;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-primary);\n  margin-bottom: 8px;\n}\n\n.stat-ico.alt[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-ink);\n  box-shadow: none;\n}\n\n.stat-ico[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--app-ink);\n}\n\n.stat-lbl[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--app-muted);\n  text-align: center;\n}\n\n.divider[_ngcontent-%COMP%] {\n  width: 1px;\n  align-self: stretch;\n  background: var(--app-border);\n  margin: 0 10px;\n  z-index: 1;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 6px 0 12px;\n}\n\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--app-ink);\n}\n\n.view-all[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--app-ink);\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  padding: 7px 12px;\n  border-radius: 9999px;\n  box-shadow: none;\n}\n\n.history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 16px;\n  cursor: pointer;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 14px;\n  overflow: hidden;\n  position: relative;\n  flex: 0 0 62px;\n  box-shadow: none;\n}\n\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transform: scale(1.02);\n  transition: transform 300ms ease;\n}\n\n.thumb-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--app-overlay);\n  display: none;\n}\n\n.history-item.is-lost[_ngcontent-%COMP%]   .thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n  opacity: 0.62;\n}\n\n.h-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.h-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 7px;\n}\n\n.h-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 1.25;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-right: 6px;\n  color: var(--app-ink);\n}\n\n.history-item.is-lost[_ngcontent-%COMP%]   .h-title[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  padding: 5px 10px;\n  border-radius: 9999px;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.badge.won[_ngcontent-%COMP%] {\n  background: var(--app-success-soft);\n  border: 1px solid var(--app-success);\n  color: var(--app-success);\n  box-shadow: none;\n}\n\n.badge.won[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.badge.lost[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-muted);\n}\n\n.h-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  font-size: 12px;\n  color: var(--app-muted);\n}\n\n.meta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.meta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--app-muted);\n}\n\n.logout-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 22px 0 18px;\n}\n\n.logout[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 20px;\n  border-radius: 9999px;\n  background: var(--app-danger);\n  border: 1px solid var(--app-danger);\n  color: var(--app-on-danger);\n  font-weight: 700;\n}\n\n.bottom-spacer[_ngcontent-%COMP%] {\n  height: calc(env(safe-area-inset-bottom) + 10px);\n}\n\n.sk-avatar[_ngcontent-%COMP%] {\n  width: 126px;\n  height: 126px;\n  border-radius: 9999px;\n  margin: 0 auto 14px;\n}\n\n.sk-name[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 22px;\n  border-radius: 10px;\n  margin: 0 auto 12px;\n}\n\n.sk-balance[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 48px;\n  border-radius: 9999px;\n  margin: 0 auto;\n}\n\n.stats-card.skel[_ngcontent-%COMP%]   .sk-ico[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 16px;\n  margin-bottom: 10px;\n}\n\n.stats-card.skel[_ngcontent-%COMP%]   .sk-num[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 24px;\n  border-radius: 10px;\n  margin-bottom: 8px;\n}\n\n.stats-card.skel[_ngcontent-%COMP%]   .sk-small[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 12px;\n  border-radius: 8px;\n}\n\n.history-item.skel[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.sk-thumb[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 14px;\n}\n\n.skel[_ngcontent-%COMP%]   .sk-line[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 14px;\n  border-radius: 8px;\n  margin: 6px 0;\n}\n\n.skel[_ngcontent-%COMP%]   .sk-line.sm[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.badge.live[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-primary);\n}\n\n.badge.ended[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n}\n\n@media (max-width: 360px) {\n  .stat-val[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .h-meta[_ngcontent-%COMP%] {\n    font-size: 11px;\n    gap: 8px;\n  }\n}\n@media (min-width: 640px) {\n  .header[_ngcontent-%COMP%] {\n    padding-inline: 28px;\n  }\n  .body[_ngcontent-%COMP%] {\n    padding-inline: 28px;\n  }\n  .history-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .logout-wrap[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n\n\n.appearance-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 18px;\n  padding: 14px;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  background: var(--app-surface);\n}\n\n.appearance-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--app-muted);\n}\n\n.appearance-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n\n.appearance-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 44px;\n  padding: 8px 6px;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius-sm);\n  background: var(--app-surface-2);\n  color: var(--app-muted);\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;\n}\n\n.appearance-option[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\n.appearance-option.active[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  border-color: var(--app-primary);\n  color: var(--app-primary);\n}\n\n.appearance-option[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n\n@media (max-width: 360px) {\n  .appearance-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.responsible-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 18px 0 4px;\n  padding: 14px;\n  border-radius: 16px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n  text-decoration: none;\n}\n.responsible-link[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%]:first-child {\n  font-size: 22px;\n  color: var(--app-primary);\n}\n.responsible-link[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.responsible-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.responsible-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-muted);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBRUEsbUNBQUE7RUFDQSwrRkFDRTtBQURKOztBQVVBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBUEY7O0FBVUE7RUFBZ0IsYUFBQTtBQU5oQjs7QUFRQTtFQUFlLGFBQUE7QUFKZjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdEQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUNFO0FBSko7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7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QUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsUUFBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0RUFDRTtBQVZKOztBQWVBO0VBQ0Usa0JBQUE7QUFaRjs7QUFlQTtFQUNFLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtBQVpGOztBQWVBO0VBQ0Usc0JBQUE7QUFaRjs7QUFlQTtFQUNFO0lBQ0UsYUFBQTtFQVpGO0FBQ0Y7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQWRGO0FBZ0JFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBZEo7QUFpQkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFmSjtBQWtCRTtFQUNFLGVBQUE7QUFoQko7QUFtQkU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFqQkoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wcmltYXJ5OiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgLS1wcmltYXJ5LTI6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIC0tYmctZGFyazogdmFyKC0tYXBwLWJnKTtcclxuICAtLWJnLWRhcmstMjogdmFyKC0tYXBwLWJnKTtcclxuICAtLXN1cmZhY2UtZGFyazogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgLS1zdWNjZXNzOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgLS1kYW5nZXI6IHZhcigtLWFwcC1kYW5nZXIpO1xyXG5cclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmb250LWZhbWlseTpcclxuICAgIFwiUGx1cyBKYWthcnRhIFNhbnNcIixcclxuICAgIHN5c3RlbS11aSxcclxuICAgIC1hcHBsZS1zeXN0ZW0sXHJcbiAgICBTZWdvZSBVSSxcclxuICAgIFJvYm90byxcclxuICAgIEFyaWFsLFxyXG4gICAgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQucHJlbWl1bS1iZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLnBhZ2Uge1xyXG4gIG1heC13aWR0aDogNzYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwZHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGFnZTo6YmVmb3JlLFxyXG4ucGFnZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG59XHJcblxyXG4ucGFnZTo6YmVmb3JlIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLnBhZ2U6OmFmdGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZzogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyNHB4KSAyMHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLWFjdGlvbnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLnJpZ2h0LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1idG4ge1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICB0cmFuc2Zvcm0gMTUwbXMgZWFzZSxcclxuICAgIGJhY2tncm91bmQgMTUwbXMgZWFzZTtcclxufVxyXG5cclxuLmljb24tYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLmF2YXRhci13cmFwIHtcclxuICB3aWR0aDogMTI2cHg7XHJcbiAgaGVpZ2h0OiAxMjZweDtcclxuICBtYXJnaW46IDAgYXV0byAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmF2YXRhci1yaW5nIHtcclxuICB3aWR0aDogMTI2cHg7XHJcbiAgaGVpZ2h0OiAxMjZweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYXZhdGFyLWlubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmF2YXRhci1lZGl0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDhweDtcclxuICBib3R0b206IDZweDtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmctZGFyay0yKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmF2YXRhci1lZGl0IGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4uYmFsYW5jZS1waWxsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJhbGFuY2UtbWV0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xyXG59XHJcblxyXG4uYmFsYW5jZS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLmJhbGFuY2UtdmFsdWUge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLmJhbGFuY2UtYWRkIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5iYWxhbmNlLWFkZDphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiAwIDIwcHggMzZweDtcclxufVxyXG5cclxuLmdsYXNzLXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmdsYXNzLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc3RhdHMtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAxNHB4IDAgMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0YXRzLWNhcmQ6OmFmdGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLnN0YXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnN0YXQtaWNvIHtcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5zdGF0LWljby5hbHQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnN0YXQtaWNvIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5zdGF0LXZhbCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4uc3RhdC1sYmwge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgd2lkdGg6IDFweDtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiA2cHggMCAxMnB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4udmlldy1hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaGlzdG9yeS1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uaGlzdG9yeS1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRodW1iIHtcclxuICB3aWR0aDogNjJweDtcclxuICBoZWlnaHQ6IDYycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAwIDAgNjJweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4udGh1bWIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLnRodW1iLWdyYWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtb3ZlcmxheSk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhpc3RvcnktaXRlbS5pcy1sb3N0IC50aHVtYiBpbWcge1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDAuNjI7XHJcbn1cclxuXHJcbi5oLWJvZHkge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaC10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuLmgtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4uaGlzdG9yeS1pdGVtLmlzLWxvc3QgLmgtdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5iYWRnZS53b24ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdWNjZXNzLXNvZnQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1zdWNjZXNzKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5iYWRnZS53b24gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJhZGdlLmxvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uaC1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbi5tZXRhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogN3B4O1xyXG59XHJcblxyXG4ubWV0YSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4ubG9nb3V0LXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjJweCAwIDE4cHg7XHJcbn1cclxuXHJcbi5sb2dvdXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1kYW5nZXIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ib3R0b20tc3BhY2VyIHtcclxuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMTBweCk7XHJcbn1cclxuXHJcbi5zay1hdmF0YXIge1xyXG4gIHdpZHRoOiAxMjZweDtcclxuICBoZWlnaHQ6IDEyNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBtYXJnaW46IDAgYXV0byAxNHB4O1xyXG59XHJcblxyXG4uc2stbmFtZSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEycHg7XHJcbn1cclxuXHJcbi5zay1iYWxhbmNlIHtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnN0YXRzLWNhcmQuc2tlbCAuc2staWNvIHtcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc3RhdHMtY2FyZC5za2VsIC5zay1udW0ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnN0YXRzLWNhcmQuc2tlbCAuc2stc21hbGwge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaGlzdG9yeS1pdGVtLnNrZWwge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zay10aHVtYiB7XHJcbiAgd2lkdGg6IDYycHg7XHJcbiAgaGVpZ2h0OiA2MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5za2VsIC5zay1saW5lIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDZweCAwO1xyXG59XHJcblxyXG4uc2tlbCAuc2stbGluZS5zbSB7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG4uYmFkZ2UubGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5iYWRnZS5lbmRlZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAuc3RhdC12YWwge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmgtbWV0YSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBnYXA6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuYm9keSB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5oaXN0b3J5LWxpc3Qge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dC13cmFwIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBcHBhcmVuY2UgKHRoZW1lIGNsYWlyIC8gc29tYnJlIC8gc3lzdGVtZSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmFwcGVhcmFuY2UtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLXJhZGl1cyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG59XHJcblxyXG4uYXBwZWFyYW5jZS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjcycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uYXBwZWFyYW5jZS1vcHRpb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmFwcGVhcmFuY2Utb3B0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgbWluLWhlaWdodDogNDRweDtcclxuICBwYWRkaW5nOiA4cHggNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1yYWRpdXMtc20pO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgYmFja2dyb3VuZCAwLjE4cyBlYXNlLFxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMThzIGVhc2UsXHJcbiAgICBjb2xvciAwLjE4cyBlYXNlO1xyXG59XHJcblxyXG4uYXBwZWFyYW5jZS1vcHRpb24gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcclxufVxyXG5cclxuLmFwcGVhcmFuY2Utb3B0aW9uLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxufVxyXG5cclxuLmFwcGVhcmFuY2Utb3B0aW9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgLmFwcGVhcmFuY2Utb3B0aW9uIHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXG4vLyBMaWVuIFwiSmV1IHJlc3BvbnNhYmxlXCJcbi5yZXNwb25zaWJsZS1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDE4cHggMCA0cHg7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gID4gaW9uLWljb246Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xuICB9XG5cbiAgLmdyb3cge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 3766
/*!************************************************************!*\
  !*** ./src/app/pages/profile/push-prefs-card.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushPrefsCardComponent: () => (/* binding */ PushPrefsCardComponent)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth-state.service */ 6247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_push_push_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/push/push-notifications.service */ 5174);

var _staticBlock;











function PushPrefsCardComponent_div_19_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "PROFILE_NOTIFICATIONS.DENIED_HELP"), " ");
  }
}
function PushPrefsCardComponent_div_19_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PushPrefsCardComponent_div_19_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.enable());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.enabling);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "PROFILE_NOTIFICATIONS.ENABLE"), " ");
  }
}
function PushPrefsCardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, PushPrefsCardComponent_div_19_p_8_Template, 3, 3, "p", 9)(9, PushPrefsCardComponent_div_19_button_9_Template, 4, 4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 8, "PROFILE_NOTIFICATIONS.PERMISSION_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ok", ctx_r1.permission === "granted")("ko", ctx_r1.permission === "denied");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 10, ctx_r1.permissionLabelKey), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.permission === "denied");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.permission === "prompt" || ctx_r1.permission === "prompt-with-rationale");
  }
}
/**
 * Carte "Notifications" du profil: preferences push optionnelles (l'API reste
 * l'autorite) + etat de l'autorisation OS sur Android natif.
 */
class PushPrefsCardComponent {
  constructor(authState, push, toast, translate, cdr) {
    this.authState = authState;
    this.push = push;
    this.toast = toast;
    this.translate = translate;
    this.cdr = cdr;
    this.prefs = {
      reminders: true,
      newRaffles: true
    };
    this.saving = {
      reminders: false,
      newRaffles: false
    };
    this.native = false;
    this.permission = 'unsupported';
    this.enabling = false;
    this.subs = [];
  }
  get permissionLabelKey() {
    switch (this.permission) {
      case 'granted':
        return 'PROFILE_NOTIFICATIONS.STATE_GRANTED';
      case 'denied':
        return 'PROFILE_NOTIFICATIONS.STATE_DENIED';
      default:
        return 'PROFILE_NOTIFICATIONS.STATE_PROMPT';
    }
  }
  ngOnInit() {
    this.subs.push(this.authState.me$.subscribe(me => {
      // Ne pas ecraser une bascule en cours d'enregistrement.
      if (this.saving.reminders || this.saving.newRaffles) return;
      this.prefs = (0,src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_5__.pushPrefsOf)(me);
    }), this.push.permission$.subscribe(p => this.permission = p));
    this.authState.ensureCurrentUser().subscribe();
    void this.refresh();
  }
  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
  /** Appele a chaque entree sur le profil (l'autorisation a pu changer). */
  refresh() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.push.init();
      _this.native = _this.push.isAvailable;
      if (_this.native) yield _this.push.refreshPermission();
    })();
  }
  toggle(key, checked) {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.saving[key] || _this2.prefs[key] === checked) return;
      const previous = _this2.prefs[key];
      _this2.prefs = {
        ..._this2.prefs,
        [key]: checked
      };
      _this2.saving = {
        ..._this2.saving,
        [key]: true
      };
      _this2.cdr.detectChanges();
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2.authState.updatePushPrefs({
          [key]: checked
        }));
      } catch {
        _this2.prefs = {
          ..._this2.prefs,
          [key]: previous
        };
        const t = yield _this2.toast.create({
          message: _this2.translate.instant('PROFILE_NOTIFICATIONS.SAVE_FAILED'),
          duration: 2500,
          position: 'top'
        });
        yield t.present();
      } finally {
        _this2.saving = {
          ..._this2.saving,
          [key]: false
        };
        _this2.cdr.markForCheck();
      }
    })();
  }
  enable() {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.enabling) return;
      _this3.enabling = true;
      const outcome = yield _this3.push.requestAndEnable();
      _this3.enabling = false;
      const key = outcome === 'granted' ? 'PUSH.ENABLED_TOAST' : outcome === 'denied' ? 'PUSH.DENIED_TOAST' : 'PUSH.ERROR_TOAST';
      const t = yield _this3.toast.create({
        message: _this3.translate.instant(key),
        duration: 3500,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PushPrefsCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PushPrefsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_5__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_push_push_notifications_service__WEBPACK_IMPORTED_MODULE_9__.PushNotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: PushPrefsCardComponent,
    selectors: [["app-push-prefs-card"]],
    decls: 20,
    vars: 23,
    consts: [[1, "push-card"], [1, "label"], [1, "row"], [1, "grow"], [3, "ionChange", "checked", "disabled"], [1, "hint"], ["class", "perm", 4, "ngIf"], [1, "perm"], [1, "perm-line"], ["class", "hint", 4, "ngIf"], ["type", "button", "class", "enable", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "enable", 3, "click", "disabled"], ["name", "notifications-outline", "aria-hidden", "true"]],
    template: function PushPrefsCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2)(5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionChange", function PushPrefsCardComponent_Template_ion_toggle_ionChange_8_listener($event) {
          return ctx.toggle("reminders", $event.detail.checked);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 2)(11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionChange", function PushPrefsCardComponent_Template_ion_toggle_ionChange_14_listener($event) {
          return ctx.toggle("newRaffles", $event.detail.checked);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, PushPrefsCardComponent_div_19_Template, 10, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 11, "PROFILE_NOTIFICATIONS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 13, "PROFILE_NOTIFICATIONS.REMINDERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx.prefs.reminders)("disabled", ctx.saving.reminders);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 15, "PROFILE_NOTIFICATIONS.REMINDERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 17, "PROFILE_NOTIFICATIONS.NEW_RAFFLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx.prefs.newRaffles)("disabled", ctx.saving.newRaffles);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 19, "PROFILE_NOTIFICATIONS.NEW_RAFFLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 21, "PROFILE_NOTIFICATIONS.ALWAYS_ON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.native);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.BooleanValueAccessor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".push-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 18px;\n  padding: 14px;\n  border: 1px solid var(--app-border);\n  border-radius: var(--app-radius);\n  background: var(--app-surface);\n  color: var(--app-ink);\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--app-muted);\n}\n\n.row[_ngcontent-%COMP%], \n.perm-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 14px;\n}\n\n.grow[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.perm-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  color: var(--app-muted);\n  font-size: 13px;\n}\n\n.perm-line[_ngcontent-%COMP%]   strong.ok[_ngcontent-%COMP%] {\n  color: var(--ion-color-success, #16a34a);\n}\n\n.perm-line[_ngcontent-%COMP%]   strong.ko[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger, #dc2626);\n}\n\n.hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12.5px;\n  line-height: 1.4;\n  color: var(--app-muted);\n}\n\n.perm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 10px;\n  border-top: 1px solid var(--app-border);\n}\n\n.enable[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  border: 0;\n  border-radius: 999px;\n  padding: 10px 14px;\n  background: var(--app-primary);\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.enable[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wdXNoLXByZWZzLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBQVI7O0FBRU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBQ1I7O0FBQ007O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFFUjs7QUFBTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBR1I7O0FBRE07RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSVI7O0FBRk07RUFDRSx3Q0FBQTtBQUtSOztBQUhNO0VBQ0UsdUNBQUE7QUFNUjs7QUFKTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFPUjs7QUFMTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0FBUVI7O0FBTk07RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFTUjs7QUFQTTtFQUNFLFlBQUE7QUFVUiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnB1c2gtY2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1yYWRpdXMpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcbiAgICAgIH1cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAucm93LFxuICAgICAgLnBlcm0tbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmdyb3cge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuICAgICAgLnBlcm0tbGluZSBzcGFuIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgICAucGVybS1saW5lIHN0cm9uZy5vayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzE2YTM0YSk7XG4gICAgICB9XG4gICAgICAucGVybS1saW5lIHN0cm9uZy5rbyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZGMyNjI2KTtcbiAgICAgIH1cbiAgICAgIC5oaW50IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEyLjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAucGVybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmVuYWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgICAgLmVuYWJsZVtkaXNhYmxlZF0ge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-src_app_shared_utils_media-url_ts.js.map