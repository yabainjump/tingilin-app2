"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_winners_winners_module_ts"],{

/***/ 8819
/*!*********************************************************!*\
  !*** ./src/app/pages/winners/winners-routing.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinnersPageRoutingModule: () => (/* binding */ WinnersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _winners_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winners.page */ 5253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _winners_page__WEBPACK_IMPORTED_MODULE_1__.WinnersPage
}];
class WinnersPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function WinnersPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WinnersPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: WinnersPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WinnersPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 2322
/*!*************************************************!*\
  !*** ./src/app/pages/winners/winners.module.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinnersPageModule: () => (/* binding */ WinnersPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _winners_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winners-routing.module */ 8819);
/* harmony import */ var _winners_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./winners.page */ 5253);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var src_app_shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/engagement/trust-stats.component */ 2073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class WinnersPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function WinnersPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WinnersPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: WinnersPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _winners_routing_module__WEBPACK_IMPORTED_MODULE_3__.WinnersPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_6__.TrustStatsComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](WinnersPageModule, {
    declarations: [_winners_page__WEBPACK_IMPORTED_MODULE_4__.WinnersPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _winners_routing_module__WEBPACK_IMPORTED_MODULE_3__.WinnersPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_6__.TrustStatsComponent]
  });
})();

/***/ },

/***/ 5253
/*!***********************************************!*\
  !*** ./src/app/pages/winners/winners.page.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinnersPage: () => (/* binding */ WinnersPage)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var src_app_services_winners_winners_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/winners/winners-api.service */ 5580);
/* harmony import */ var src_app_shared_engagement_winner_proof_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/engagement/winner-proof-modal.component */ 9071);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_home_home_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/home/home-api.service */ 4144);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/share/share.service */ 9169);
/* harmony import */ var src_app_services_winners_winners_live_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/winners/winners-live-socket.service */ 8392);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/engagement/trust-stats.component */ 2073);

var _staticBlock;













const _c0 = a0 => ({
  name: a0
});
const _c1 = () => [1, 2, 3, 4, 5];
const _c2 = () => [1, 2, 3];
function WinnersPage_ng_container_2_ng_container_13_section_2_button_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, w_r4.deliveryProof ? "ENGAGEMENT.DELIVERED_WITH_PHOTO" : "ENGAGEMENT.DELIVERED_BADGE"), " ");
  }
}
function WinnersPage_ng_container_2_ng_container_13_section_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_container_2_ng_container_13_section_2_button_4_Template_button_click_0_listener() {
      const w_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openWinner(w_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 20)(3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, WinnersPage_ng_container_2_ng_container_13_section_2_button_4_span_8_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + ((w_r4.deliveryProof == null ? null : w_r4.deliveryProof.imageUrl) || w_r4.prizeImageUrl || "assets/img/placeholder.png") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", w_r4.prizeTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](w_r4.prizeTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 6, "ENGAGEMENT.WON_BY", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, w_r4.winnerName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", w_r4.delivered);
  }
}
function WinnersPage_ng_container_2_ng_container_13_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WinnersPage_ng_container_2_ng_container_13_section_2_button_4_Template, 10, 11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "ENGAGEMENT.PAST_WINNERS_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.pastWinners)("ngForTrackBy", ctx_r1.trackByRecent);
  }
}
function WinnersPage_ng_container_2_ng_container_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "WINNERS_PAGE.LIST_EMPTY"));
  }
}
function WinnersPage_ng_container_2_ng_container_13_div_4_button_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const draw_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", draw_r6.ticketPrice, " ", draw_r6.currency || "XAF", " ");
  }
}
function WinnersPage_ng_container_2_ng_container_13_div_4_button_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 35);
  }
  if (rf & 2) {
    const draw_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.safeBadgeClass(draw_r6.badgeType));
  }
}
function WinnersPage_ng_container_2_ng_container_13_div_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_container_2_ng_container_13_div_4_button_1_Template_button_click_0_listener() {
      const draw_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectDraw(draw_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 20)(3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, WinnersPage_ng_container_2_ng_container_13_div_4_button_1_div_5_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WinnersPage_ng_container_2_ng_container_13_div_4_button_1_div_6_Template, 1, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const draw_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + (draw_r6.imageUrl || "assets/img/placeholder.png") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", draw_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](draw_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", draw_r6.ticketPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", draw_r6.badgeType);
  }
}
function WinnersPage_ng_container_2_ng_container_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WinnersPage_ng_container_2_ng_container_13_div_4_button_1_Template, 8, 6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.allDraws)("ngForTrackBy", ctx_r1.trackByDraw);
  }
}
function WinnersPage_ng_container_2_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-trust-stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WinnersPage_ng_container_2_ng_container_13_section_2_Template, 5, 5, "section", 12)(3, WinnersPage_ng_container_2_ng_container_13_div_3_Template, 5, 3, "div", 13)(4, WinnersPage_ng_container_2_ng_container_13_div_4_Template, 2, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.pastWinners.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.allDraws.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.allDraws.length > 0);
  }
}
function WinnersPage_ng_container_2_ng_template_14_ion_skeleton_text_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-skeleton-text", 38);
  }
}
function WinnersPage_ng_container_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WinnersPage_ng_container_2_ng_template_14_ion_skeleton_text_1_Template, 1, 0, "ion-skeleton-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c1));
  }
}
function WinnersPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_container_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.shareLive());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, WinnersPage_ng_container_2_ng_container_13_Template, 5, 3, "ng-container", 5)(14, WinnersPage_ng_container_2_ng_template_14_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const listSkeleton_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 5, "WINNERS_PAGE.DRAWS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 7, "WINNERS_PAGE.LIST_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 9, "WINNERS_PAGE.SHARE_LIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.loading)("ngIfElse", listSkeleton_r7);
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_ion_spinner_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-spinner", 83);
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86)(1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 6, "WINNERS_PAGE.PROOF_STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("ok", ctx_r1.proof.verified)("ko", !ctx_r1.proof.verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 8, ctx_r1.proof.verified ? "WINNERS_PAGE.PROOF_VERIFIED" : "WINNERS_PAGE.PROOF_UNVERIFIED"), " ");
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_ng_container_14_Template_button_click_1_listener() {
      const rev_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12).ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.copyProofValue(rev_r13.serverSeed));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_ng_container_14_Template_button_click_7_listener() {
      const rev_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12).ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.copyProofValue(rev_r13.ticketsetHash));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 86)(14, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_ng_container_14_Template_button_click_19_listener() {
      const rev_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12).ngIf;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.copyProofValue(rev_r13.winningTicketSerial));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const rev_r13 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 9, "WINNERS_PAGE.PROOF_SEED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.short(rev_r13.serverSeed));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 11, "WINNERS_PAGE.PROOF_TICKETSET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.short(rev_r13.ticketsetHash));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 13, "WINNERS_PAGE.PROOF_INDEX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", rev_r13.winningIndex, " / ", rev_r13.ticketCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 15, "WINNERS_PAGE.PROOF_TICKET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rev_r13.winningTicketSerial);
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "WINNERS_PAGE.PROOF_PENDING"), " ");
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_div_1_Template, 7, 10, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 86)(3, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.copyProofValue(ctx_r1.proof.commitment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_ng_container_14_Template, 25, 17, "ng-container", 91)(15, WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_div_15_Template, 3, 3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.proof.verified !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 8, "WINNERS_PAGE.PROOF_ALGO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.proof.algorithm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 10, "WINNERS_PAGE.PROOF_COMMITMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.short(ctx_r1.proof.commitment));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.proof.revealed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.proof.revealed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.proof.formula);
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 78)(1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_ng_container_15_div_1_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleProof());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, WinnersPage_ng_template_3_ng_container_15_div_1_div_13_ion_spinner_6_Template, 1, 0, "ion-spinner", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WinnersPage_ng_template_3_ng_container_15_div_1_div_13_div_7_Template, 18, 12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.proofLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r1.proofOpen ? "shield-checkmark" : "shield-checkmark-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 5, ctx_r1.proofOpen ? "WINNERS_PAGE.PROOF_HIDE" : "WINNERS_PAGE.PROOF_SHOW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.proofLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.proofOpen && ctx_r1.proof);
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 73)(5, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, WinnersPage_ng_template_3_ng_container_15_div_1_div_13_Template, 8, 7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r14 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.featureImage + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 7, "WINNERS_PAGE.GRAND_PRIZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](title_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 9, "WINNERS_PAGE.WINNER"), ": ", ctx_r1.selectedWinnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedRaffle == null ? null : ctx_r1.selectedRaffle.id);
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_63_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_ng_container_15_div_63_button_4_Template_button_click_0_listener() {
      const w_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openWinner(w_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 100)(3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const w_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.avatarSrc(w_r16.avatar) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](w_r16.winnerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](w_r16.prizeTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", w_r16.ticketCode);
  }
}
function WinnersPage_ng_template_3_ng_container_15_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 95)(1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, WinnersPage_ng_template_3_ng_container_15_div_63_button_4_Template, 9, 5, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "WINNERS_PAGE.RECENT_WINNERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.recent)("ngForTrackBy", ctx_r1.trackByRecent);
  }
}
function WinnersPage_ng_template_3_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WinnersPage_ng_template_3_ng_container_15_div_1_Template, 14, 11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 41)(3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 43)(5, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 48)(15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 51)(18, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 55)(34, "div", 56)(35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 60)(46, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_ng_container_15_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.seeResults());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](53, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 65)(55, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, WinnersPage_ng_template_3_ng_container_15_div_63_Template, 5, 5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.featureTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", ctx_r1.ticketAtOffset(-2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", ctx_r1.ticketAtOffset(-1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.selectedAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", ctx_r1.centeredTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.analysisLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 20, "WINNERS_PAGE.SCANNING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", ctx_r1.ticketAtOffset(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", ctx_r1.ticketAtOffset(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 22, "WINNERS_PAGE.LIVE_PROGRESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.analysisProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ctx_r1.analysisProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](44, 24, "WINNERS_PAGE.LIVE_VISUAL_INDICATOR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 26, "WINNERS_PAGE.LIVE_PEOPLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](53, 28, ctx_r1.participantsSeen), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 30, "WINNERS_PAGE.DRAW_FAIRNESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.verifiableLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](62, 32, "WINNERS_PAGE.NOTICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.recent.length);
  }
}
function WinnersPage_ng_template_3_ng_template_16_ion_skeleton_text_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-skeleton-text", 38);
  }
}
function WinnersPage_ng_template_3_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-skeleton-text", 104)(2, "ion-skeleton-text", 105)(3, "ion-skeleton-text", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-skeleton-text", 108)(6, "ion-skeleton-text", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, WinnersPage_ng_template_3_ng_template_16_ion_skeleton_text_7_Template, 1, 0, "ion-skeleton-text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c2));
  }
}
function WinnersPage_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.backToList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WinnersPage_ng_template_3_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.shareLive());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, WinnersPage_ng_template_3_ng_container_15_Template, 64, 34, "ng-container", 5)(16, WinnersPage_ng_template_3_ng_template_16_Template, 8, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const liveSkeleton_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 6, "WINNERS_PAGE.BACK_TO_LIST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 8, "WINNERS_PAGE.DRAWS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 10, "WINNERS_PAGE.LIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 12, "WINNERS_PAGE.SHARE_LIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.loading)("ngIfElse", liveSkeleton_r17);
  }
}
class WinnersPage {
  constructor(api, homeApi, toast, nav, shareService, liveSocket, translate, modals) {
    this.api = api;
    this.homeApi = homeApi;
    this.toast = toast;
    this.nav = nav;
    this.shareService = shareService;
    this.liveSocket = liveSocket;
    this.translate = translate;
    this.modals = modals;
    this.loading = true;
    // Tirages actifs (non terminés)
    this.allDraws = [];
    this.selectedRaffle = null;
    // Données pour la vue détail (scanner / proof)
    this.recent = [];
    // Derniers lots gagnes (vue liste), avec preuve de remise.
    this.pastWinners = [];
    this.scanTickets = [];
    this.activeScanIndex = 0;
    this.analysisProgress = 0;
    this.analysisLabel = '';
    this.isScanning = true;
    this.liveViewers = 0;
    this.provablyFair = true;
    this.hasRealtime = false;
    this.proof = null;
    this.proofOpen = false;
    this.proofLoading = false;
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.connectRealtime();
    this.load();
    this.loadPastWinners();
  }
  ionViewWillLeave() {
    this.cleanup();
  }
  ngOnDestroy() {
    this.cleanup();
  }
  cleanup() {
    this.stopScanAnimation();
    this.liveSub?.unsubscribe();
    this.liveSub = undefined;
    this.liveSocket.disconnect();
    this.hasRealtime = false;
  }
  load() {
    var _this = this;
    this.loading = true;
    this.homeApi.getLiveRows('all').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      this.loading = false;
      if (!this.hasRealtime) {
        this.startScanAnimation();
      }
    })).subscribe({
      next: cards => {
        // Garder uniquement les raffles non terminées
        const now = Date.now();
        const active = cards.filter(c => {
          const endMs = c.endsAt ? new Date(c.endsAt).getTime() : Infinity;
          return endMs > now;
        });
        this.allDraws = active;
        this.scanTickets = this.buildScanTicketsFromCards(active.slice(0, 9));
        this.activeScanIndex = Math.min(2, this.scanTickets.length - 1);
      },
      error: function () {
        var _ref = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const t = yield _this.toast.create({
            message: _this.translate.instant('WINNERS_PAGE.TOAST_LOAD_FAILED'),
            duration: 1400
          });
          yield t.present();
          _this.allDraws = [];
          _this.scanTickets = ['X922', 'B738', 'A492', 'C102', 'E551'];
        });
        return function error() {
          return _ref.apply(this, arguments);
        };
      }()
    });
  }
  buildScanTicketsFromCards(cards) {
    const fromCards = cards.map(c => String(c.id ?? '').slice(-5).toUpperCase()).filter(Boolean);
    const fallback = ['X922', 'B738', 'A492', 'C102', 'E551'];
    return [...fromCards, ...fallback].slice(0, 5);
  }
  startScanAnimation() {
    this.stopScanAnimation();
    this.isScanning = true;
    this.analysisLabel = this.translate.instant('WINNERS_PAGE.SCANNING');
    this.analysisProgress = 18;
    this.scanSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(340).subscribe(() => {
      if (!this.scanTickets.length) return;
      this.activeScanIndex = (this.activeScanIndex + 1) % this.scanTickets.length;
    });
    this.progressSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(220).subscribe(() => {
      const next = this.analysisProgress + Math.floor(Math.random() * 4 + 1);
      if (next >= 82) {
        this.analysisProgress = 82;
        this.analysisLabel = this.translate.instant('WINNERS_PAGE.VERIFYING');
        this.isScanning = false;
        this.progressSub?.unsubscribe();
        return;
      }
      this.analysisProgress = next;
    });
  }
  stopScanAnimation() {
    this.scanSub?.unsubscribe();
    this.progressSub?.unsubscribe();
    this.scanSub = undefined;
    this.progressSub = undefined;
  }
  get centeredTicket() {
    if (!this.scanTickets.length) return '----';
    return this.scanTickets[this.activeScanIndex] || '----';
  }
  ticketAtOffset(offset) {
    if (!this.scanTickets.length) return '----';
    const len = this.scanTickets.length;
    const i = (this.activeScanIndex + offset + len * 10) % len;
    return this.scanTickets[i] || '----';
  }
  get participantsSeen() {
    if (this.liveViewers > 0) return this.liveViewers;
    const base = 1200;
    const delta = (this.allDraws?.length ?? 0) * 17;
    return base + delta;
  }
  get verifiableLabel() {
    return this.translate.instant(this.provablyFair ? 'WINNERS_PAGE.VERIFIABLE_YES' : 'WINNERS_PAGE.VERIFIABLE_NO');
  }
  get featureTitle() {
    return this.selectedRaffle?.title || this.translate.instant('WINNERS_PAGE.PREMIUM_PRODUCT');
  }
  get featureImage() {
    return this.selectedRaffle?.imageUrl || 'assets/img/placeholder.png';
  }
  get selectedAvatar() {
    return 'assets/img/profile.svg';
  }
  get selectedWinnerName() {
    return this.translate.instant('WINNERS_PAGE.CANDIDATE');
  }
  /** Classe CSS sûre pour le badge (allowlist, jamais de valeur serveur en style). */
  safeBadgeClass(tone) {
    const allowed = ['pink', 'gold', 'violet', 'danger', 'warn', 'hot'];
    return allowed.includes(String(tone ?? '')) ? `badge-${tone}` : 'badge-default';
  }
  selectDraw(w) {
    this.selectedRaffle = w;
    this.scanTickets = this.buildScanTicketsFromCards(this.allDraws.filter(d => d !== w).slice(0, 4));
    this.activeScanIndex = Math.min(2, this.scanTickets.length - 1);
    this.proof = null;
    this.proofOpen = false;
  }
  backToList() {
    this.selectedRaffle = null;
    this.proof = null;
    this.proofOpen = false;
  }
  trackByDraw(index, item) {
    return item.id || String(index);
  }
  trackByRecent(index, item) {
    return item.raffleId || item.ticketCode || index;
  }
  back() {
    this.nav.navigateBack('/tabs/home');
  }
  shareLive() {
    var _this2 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = _this2.shareService.liveShareUrl();
      const mode = yield _this2.shareService.share({
        title: _this2.translate.instant('WINNERS_PAGE.SHARE_TITLE'),
        text: _this2.translate.instant('WINNERS_PAGE.SHARE_TEXT'),
        url
      });
      if (mode === 'copied') {
        const t = yield _this2.toast.create({
          message: _this2.translate.instant('WINNERS_PAGE.TOAST_LINK_COPIED'),
          duration: 1300
        });
        yield t.present();
      }
    })();
  }
  seeResults() {
    var _this3 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this3.toast.create({
        message: _this3.translate.instant('WINNERS_PAGE.TOAST_RESULTS_SOON'),
        duration: 1200
      });
      yield t.present();
    })();
  }
  toggleProof() {
    var _this4 = this;
    if (this.proofOpen) {
      this.proofOpen = false;
      return;
    }
    const raffleId = this.selectedRaffle?.id;
    if (!raffleId) return;
    if (this.proof && this.proof.raffleId === raffleId) {
      this.proofOpen = true;
      return;
    }
    this.proofLoading = true;
    this.api.fairness(raffleId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => this.proofLoading = false)).subscribe({
      next: res => {
        this.proof = res;
        this.proofOpen = true;
      },
      error: function () {
        var _ref2 = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const t = yield _this4.toast.create({
            message: _this4.translate.instant('WINNERS_PAGE.PROOF_ERROR'),
            duration: 1600
          });
          yield t.present();
        });
        return function error() {
          return _ref2.apply(this, arguments);
        };
      }()
    });
  }
  copyProofValue(value) {
    var _this5 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const v = String(value ?? '').trim();
      if (!v || !navigator?.clipboard?.writeText) return;
      try {
        yield navigator.clipboard.writeText(v);
        const t = yield _this5.toast.create({
          message: _this5.translate.instant('WINNERS_PAGE.PROOF_COPIED'),
          duration: 1200
        });
        yield t.present();
      } catch {
        // copie best-effort
      }
    })();
  }
  short(value, head = 10, tail = 6) {
    const v = String(value ?? '').trim();
    if (v.length <= head + tail + 1) return v;
    return `${v.slice(0, head)}…${v.slice(-tail)}`;
  }
  /** Fiche gagnant: preuve de remise + verification du tirage sur le telephone. */
  openWinner(w) {
    var _this6 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!w?.raffleId) return;
      const modal = yield _this6.modals.create({
        component: src_app_shared_engagement_winner_proof_modal_component__WEBPACK_IMPORTED_MODULE_4__.WinnerProofModalComponent,
        componentProps: {
          winner: (0,src_app_services_winners_winners_api_service__WEBPACK_IMPORTED_MODULE_3__.normalizeWinner)(w, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiBaseUrl)
        },
        breakpoints: [0, 0.75, 1],
        initialBreakpoint: 0.75
      });
      yield modal.present();
    })();
  }
  loadPastWinners() {
    this.api.list(10).subscribe({
      next: rows => this.pastWinners = rows ?? [],
      error: () => this.pastWinners = []
    });
  }
  avatarSrc(a) {
    const s = String(a ?? '').trim();
    if (!s || s === 'null' || s === 'undefined') return 'assets/img/profile.svg';
    if (s.startsWith('http://') || s.startsWith('https://')) return s;
    if (s.startsWith('data:') || s.startsWith('assets/')) return s;
    if (s.startsWith('../assets/')) return s.replace('../', '');
    return `assets/img/${s}`;
  }
  connectRealtime() {
    this.liveSocket.connect();
    this.liveSub?.unsubscribe();
    this.liveSub = this.liveSocket.stream().subscribe(state => {
      if (!state) return;
      this.applyLiveState(state);
    });
  }
  applyLiveState(state) {
    // Ne pas écraser le contexte si l'utilisateur est en vue détail.
    if (this.selectedRaffle) return;
    this.hasRealtime = true;
    this.stopScanAnimation();
    this.liveViewers = Number.isFinite(state?.viewersLive) ? Math.max(0, Number(state.viewersLive)) : this.liveViewers;
    this.provablyFair = state?.provablyFair !== false;
    this.analysisProgress = Number.isFinite(state?.analysisProgress) ? Math.max(0, Math.min(100, Number(state.analysisProgress))) : this.analysisProgress;
    this.analysisLabel = state?.analysisLabel === 'VERIFYING...' ? this.translate.instant('WINNERS_PAGE.VERIFYING') : this.translate.instant('WINNERS_PAGE.SCANNING');
    const scanTickets = Array.isArray(state?.scan?.tickets) ? state.scan.tickets.map(x => String(x ?? '').trim().toUpperCase()).filter(Boolean) : [];
    if (scanTickets.length) {
      this.scanTickets = scanTickets;
      const nextIdx = Number(state?.scan?.activeIndex ?? 0);
      this.activeScanIndex = Math.max(0, Math.min(scanTickets.length - 1, Number.isFinite(nextIdx) ? nextIdx : 0));
    }
    const recent = Array.isArray(state?.recent) ? state.recent : [];
    if (recent.length) {
      this.recent = recent.slice(1, 9);
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function WinnersPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WinnersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_winners_winners_api_service__WEBPACK_IMPORTED_MODULE_3__.WinnersApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_home_home_api_service__WEBPACK_IMPORTED_MODULE_8__.HomeApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_11__.ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_winners_winners_live_socket_service__WEBPACK_IMPORTED_MODULE_12__.WinnersLiveSocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: WinnersPage,
    selectors: [["app-winners"]],
    standalone: false,
    decls: 5,
    vars: 3,
    consts: [["detailView", ""], ["listSkeleton", ""], ["liveSkeleton", ""], [1, "live-winners", 3, "fullscreen"], ["aria-hidden", "true", 1, "bg-lights"], [4, "ngIf", "ngIfElse"], [1, "page"], [1, "topbar"], [1, "top-center"], [1, "kicker"], ["type", "button", 1, "icon-btn", 3, "click"], ["name", "share-social-outline"], ["class", "past-winners", 4, "ngIf"], ["class", "list-empty", 4, "ngIf"], ["class", "draws-list", 4, "ngIf"], [1, "past-winners"], [1, "past-title"], ["class", "row-card winner-row", "type", "button", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "row-card", "winner-row", 3, "click"], ["role", "img", 1, "row-img"], [1, "row-body"], [1, "row-title"], [1, "row-sub"], ["class", "delivered-chip", 4, "ngIf"], ["name", "shield-checkmark-outline", 1, "row-chevron"], [1, "delivered-chip"], ["name", "checkmark-circle"], [1, "list-empty"], ["name", "trophy-outline"], [1, "draws-list"], ["class", "row-card", "type", "button", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "row-card", 3, "click"], ["class", "row-sub", 4, "ngIf"], ["class", "row-badge", 3, "ngClass", 4, "ngIf"], ["name", "chevron-forward-outline", 1, "row-chevron"], [1, "row-badge", 3, "ngClass"], [1, "live-skeleton"], ["animated", "", "class", "sk sk-row", 4, "ngFor", "ngForOf"], ["animated", "", 1, "sk", "sk-row"], ["name", "arrow-back-outline"], ["class", "featured", 4, "ngIf"], [1, "scanner-zone"], ["aria-hidden", "true", 1, "target"], ["name", "chevron-forward-outline"], ["name", "chevron-back-outline"], [1, "scan-row", "faded"], [1, "ghost-avatar"], [1, "scan-row", "soft"], [1, "scan-row", "active"], [1, "avatar-shell"], ["alt", "participant avatar", 3, "src"], [1, "active-meta"], [1, "active-ticket"], [1, "active-label"], [1, "scan-chip"], [1, "analysis"], [1, "analysis-head"], [1, "bar"], [1, "bar-fill"], [1, "analysis-note"], [1, "stats-grid"], ["type", "button", 1, "stat-card", 3, "click"], [1, "stat-k"], [1, "stat-v"], [1, "live-dot"], [1, "stat-card"], [1, "stat-v", "gold"], [1, "notice"], ["class", "recent", 4, "ngIf"], [1, "featured"], ["aria-hidden", "true", 1, "featured-glow"], [1, "featured-card"], ["role", "img", "aria-label", "Featured prize", 1, "thumb"], [1, "featured-meta"], [1, "badge"], [1, "title"], [1, "subtitle"], ["class", "fairness", 4, "ngIf"], [1, "fairness"], ["type", "button", 1, "proof-btn", 3, "click", "disabled"], [3, "name"], ["name", "dots", 4, "ngIf"], ["class", "proof-panel", 4, "ngIf"], ["name", "dots"], [1, "proof-panel"], ["class", "proof-line", 4, "ngIf"], [1, "proof-line"], [1, "k"], [1, "v"], ["type", "button", 1, "proof-line", "copyable", 3, "click"], [1, "v", "mono"], [4, "ngIf"], ["class", "proof-pending", 4, "ngIf"], [1, "proof-formula"], [1, "proof-pending"], [1, "recent"], [1, "recent-title"], ["class", "recent-item", "type", "button", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "recent-item", 3, "click"], [1, "recent-avatar"], [1, "recent-body"], [1, "recent-name"], [1, "recent-prize"], [1, "recent-ticket"], ["animated", "", 1, "sk", "sk-featured"], ["animated", "", 1, "sk", "sk-scan"], ["animated", "", 1, "sk", "sk-progress"], [1, "sk-grid"], ["animated", "", 1, "sk", "sk-stat"]],
    template: function WinnersPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WinnersPage_ng_container_2_Template, 16, 11, "ng-container", 5)(3, WinnersPage_ng_template_3_Template, 18, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const detailView_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectedRaffle)("ngIfElse", detailView_r18);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSpinner, _shared_engagement_trust_stats_component__WEBPACK_IMPORTED_MODULE_15__.TrustStatsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
    styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --bg-top: var(--app-bg);\n  --bg-mid: var(--app-bg);\n  --bg-bottom: var(--app-bg);\n  --primary: var(--app-primary);\n  --primary-soft: var(--app-primary-soft);\n  --gold: var(--app-warning);\n  --text: var(--app-ink);\n  --muted: var(--app-muted);\n}\n\nion-content.live-winners[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100%;\n  padding: calc(env(safe-area-inset-top) + 14px) 16px calc(28px + env(safe-area-inset-bottom));\n  background: transparent;\n  color: var(--text);\n}\n\n.bg-lights[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  background: transparent;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border-strong);\n  background: var(--app-surface);\n  color: var(--app-ink);\n  display: grid;\n  place-items: center;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.icon-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.top-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.kicker[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.28em;\n  color: var(--primary);\n}\n\n.top-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 42px;\n  line-height: 1;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n}\n\n.featured[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 18px;\n}\n\n.featured-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.featured-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 12px;\n  border-radius: 20px;\n  border: 1px solid var(--app-border-strong);\n  background: var(--app-primary-soft);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.thumb[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 92px;\n  border-radius: 16px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: none;\n}\n\n.featured-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n  color: var(--primary);\n  border: 1px solid var(--app-border-strong);\n  font-size: 10px;\n  font-weight: 900;\n  letter-spacing: 0.06em;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.08;\n  letter-spacing: -0.02em;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--muted);\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.scanner-zone[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 6px 0 18px;\n  padding: 10px 0;\n}\n\n.target[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 108px;\n  border-top: 1px solid var(--app-border-strong);\n  border-bottom: 1px solid var(--app-border-strong);\n  background: var(--app-primary-soft);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6px;\n  pointer-events: none;\n}\n\n.target[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 26px;\n  opacity: 0.9;\n}\n\n.scan-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-height: 78px;\n  padding: 4px 6px;\n  color: var(--app-muted);\n  font-size: 44px;\n  font-weight: 900;\n  font-style: italic;\n  letter-spacing: -0.03em;\n}\n\n.scan-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-shadow: none;\n}\n\n.scan-row.soft[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  transform: scale(0.94);\n}\n\n.scan-row.faded[_ngcontent-%COMP%] {\n  opacity: 0.25;\n  transform: scale(0.88);\n}\n\n.scan-row.active[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 108px;\n  border-radius: 22px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border-strong);\n  box-shadow: none;\n  opacity: 1;\n  transform: scale(1);\n}\n\n.ghost-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 999px;\n  background: var(--app-surface);\n  border: 2px solid var(--app-border);\n}\n\n.avatar-shell[_ngcontent-%COMP%] {\n  width: 78px;\n  height: 78px;\n  border-radius: 999px;\n  padding: 4px;\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\n.avatar-shell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 999px;\n  border: 2px solid var(--app-border);\n}\n\n.active-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.active-ticket[_ngcontent-%COMP%] {\n  font-size: 72px;\n  line-height: 0.92;\n  font-weight: 900;\n  letter-spacing: -0.05em;\n  color: var(--app-ink);\n  text-shadow: none;\n}\n\n.active-label[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--primary);\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 0.2em;\n}\n\n.scan-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: -10px;\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: var(--app-warning);\n  color: var(--app-on-warning);\n  font-size: 10px;\n  font-weight: 900;\n  letter-spacing: 0.04em;\n}\n\n.analysis[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.analysis-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.analysis-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 900;\n  letter-spacing: 0.17em;\n  color: var(--primary);\n}\n\n.analysis-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 900;\n  line-height: 1;\n}\n\n.bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  overflow: hidden;\n  border: 1px solid var(--app-border);\n}\n\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\n.analysis-note[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 11px;\n  color: var(--app-muted);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-top: 18px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  border-radius: 22px;\n  background: var(--app-surface);\n  padding: 14px;\n  min-height: 92px;\n  text-align: left;\n}\n\nbutton.stat-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.stat-k[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  color: var(--app-muted);\n}\n\n.stat-v[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 34px;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.stat-v.gold[_ngcontent-%COMP%] {\n  color: var(--gold);\n}\n\n.live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--app-success);\n  box-shadow: none;\n}\n\n.notice[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  text-align: center;\n  color: var(--app-muted);\n  font-size: 12px;\n  font-style: italic;\n}\n\n.recent[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\n\n.recent-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 14px;\n  letter-spacing: 0.08em;\n  color: var(--app-ink);\n  font-weight: 800;\n}\n\n.recent-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n  border: 1px solid var(--app-border);\n  border-radius: 14px;\n  background: var(--app-surface-2);\n  padding: 9px 10px;\n}\n\n.recent-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 999px;\n  background-size: cover;\n  background-position: center;\n  box-shadow: none;\n}\n\n.recent-body[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.recent-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--app-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.recent-prize[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.recent-ticket[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 900;\n  color: var(--primary);\n  padding: 6px 8px;\n  border-radius: 10px;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n}\n\n.live-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.sk[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 16px;\n  opacity: 0.45;\n}\n\n.sk-featured[_ngcontent-%COMP%] {\n  height: 116px;\n  min-height: 180px;\n}\n\n.sk-scan[_ngcontent-%COMP%] {\n  height: 340px;\n  min-height: 200px;\n  border-radius: 24px;\n}\n\n.sk-progress[_ngcontent-%COMP%] {\n  height: 54px;\n  min-height: 54px;\n}\n\n.sk-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.sk-stat[_ngcontent-%COMP%] {\n  height: 92px;\n  min-height: 92px;\n  border-radius: 22px;\n}\n\n.sk-row[_ngcontent-%COMP%] {\n  height: 52px;\n  min-height: 52px;\n}\n\n@media (max-width: 380px) {\n  .top-center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .active-ticket[_ngcontent-%COMP%] {\n    font-size: 58px;\n  }\n  .scan-row[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n\n\n.fairness[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.proof-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--app-warning);\n  background: var(--app-warning);\n  color: var(--app-on-warning);\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n}\n.proof-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.proof-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.proof-panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 12px 14px;\n  border-radius: 14px;\n  border: 1px solid var(--app-border-strong);\n  background: var(--app-surface);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.proof-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n  padding: 0;\n  background: transparent;\n  border: 0;\n  color: var(--text);\n  font-size: 13px;\n  text-align: left;\n}\n.proof-line[_ngcontent-%COMP%]   .k[_ngcontent-%COMP%] {\n  color: var(--muted);\n  flex: 0 0 auto;\n}\n.proof-line[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-align: right;\n  word-break: break-all;\n}\n.proof-line[_ngcontent-%COMP%]   .v.mono[_ngcontent-%COMP%] {\n  font-family: \"SFMono-Regular\", ui-monospace, Menlo, monospace;\n  font-size: 12px;\n}\n.proof-line[_ngcontent-%COMP%]   .v.ok[_ngcontent-%COMP%] {\n  color: var(--app-success);\n}\n.proof-line[_ngcontent-%COMP%]   .v.ko[_ngcontent-%COMP%] {\n  color: var(--app-danger);\n}\n.proof-line.copyable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.proof-pending[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.proof-formula[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 11px;\n  color: var(--app-muted);\n  word-break: break-word;\n}\n\n\n\n.draws-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 8px;\n}\n\n.row-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  width: 100%;\n  text-align: left;\n}\n\n.row-img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 17px;\n  background-size: cover;\n  background-position: center;\n  flex-shrink: 0;\n}\n\n.row-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.row-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--app-ink);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.row-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-muted);\n  margin-top: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.row-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--app-ink);\n  margin-right: 4px;\n}\n\n.row-badge[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n\n.row-chevron[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n  font-size: 18px;\n  flex-shrink: 0;\n}\n\n.list-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 60px 20px;\n  color: var(--app-muted);\n  text-align: center;\n}\n.list-empty[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.4;\n}\n.list-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.past-winners[_ngcontent-%COMP%] {\n  margin: 4px 0 18px;\n}\n\n.past-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--app-muted);\n}\n\n.winner-row[_ngcontent-%COMP%]    + .winner-row[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.delivered-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 4px;\n  padding: 2px 8px;\n  border-radius: 99px;\n  background: var(--app-success-soft);\n  color: var(--app-success);\n  font-size: 11.5px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvd2lubmVycy93aW5uZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRGQUFBO0VBQ0EsdUJBQ0U7RUFDRixrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUNFO0FBQUo7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLE9BQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsZUFBQTtFQUFGO0VBR0E7SUFDRSxlQUFBO0VBREY7RUFJQTtJQUNFLGVBQUE7RUFGRjtBQUNGO0FBS0Esc0NBQUE7QUFDQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSEY7QUFLRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsWUFBQTtBQUpKOztBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQU5KO0FBUUk7RUFDRSw2REFBQTtFQUNBLGVBQUE7QUFOTjtBQVNJO0VBQ0UseUJBQUE7QUFQTjtBQVVJO0VBQ0Usd0JBQUE7QUFSTjtBQVlFO0VBQ0UsZUFBQTtBQVZKOztBQWNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFYRjs7QUFjQSwrQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFYRjs7QUFjQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVhGOztBQWNBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFYRjtBQWFFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFYSjtBQWNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBWko7O0FBaUJBO0VBQ0Usa0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtBQWRGOztBQWlCQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWRGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tYmctdG9wOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tYmctbWlkOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tYmctYm90dG9tOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tcHJpbWFyeTogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIC0tcHJpbWFyeS1zb2Z0OiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICAtLWdvbGQ6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICAtLXRleHQ6IHZhcigtLWFwcC1pbmspO1xyXG4gIC0tbXV0ZWQ6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LmxpdmUtd2lubmVycyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTRweCkgMTZweCBjYWxjKDI4cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi5iZy1saWdodHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50b3BiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmljb24tYnRuIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmljb24tYnRuIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi50b3AtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5raWNrZXIge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjI4ZW07XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4udG9wLWNlbnRlciBoMSB7XHJcbiAgbWFyZ2luOiAycHggMCAwO1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG59XHJcblxyXG4uZmVhdHVyZWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZWQtZ2xvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZlYXR1cmVkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50aHVtYiB7XHJcbiAgd2lkdGg6IDkycHg7XHJcbiAgaGVpZ2h0OiA5MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZlYXR1cmVkLW1ldGEge1xyXG4gIG1pbi13aWR0aDogMDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2Nhbm5lci16b25lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiA2cHggMCAxOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLnRhcmdldCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGhlaWdodDogMTA4cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCA2cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi50YXJnZXQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uc2Nhbi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE0cHg7XHJcbiAgbWluLWhlaWdodDogNzhweDtcclxuICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogNDRweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcclxufVxyXG5cclxuLnNjYW4tcm93IHNwYW4ge1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc2Nhbi1yb3cuc29mdCB7XHJcbiAgb3BhY2l0eTogMC41NTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTQpO1xyXG59XHJcblxyXG4uc2Nhbi1yb3cuZmFkZWQge1xyXG4gIG9wYWNpdHk6IDAuMjU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg4KTtcclxufVxyXG5cclxuLnNjYW4tcm93LmFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLmdob3N0LWF2YXRhciB7XHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxufVxyXG5cclxuLmF2YXRhci1zaGVsbCB7XHJcbiAgd2lkdGg6IDc4cHg7XHJcbiAgaGVpZ2h0OiA3OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmF2YXRhci1zaGVsbCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxufVxyXG5cclxuLmFjdGl2ZS1tZXRhIHtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5hY3RpdmUtdGlja2V0IHtcclxuICBmb250LXNpemU6IDcycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDAuOTI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG59XHJcblxyXG4uc2Nhbi1jaGlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAtMTBweDtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi13YXJuaW5nKTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG59XHJcblxyXG4uYW5hbHlzaXMge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLmFuYWx5c2lzLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5hbmFseXNpcy1oZWFkIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE3ZW07XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4uYW5hbHlzaXMtaGVhZCBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxufVxyXG5cclxuLmJhci1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5hbmFseXNpcy1ub3RlIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uc3RhdHMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgbWluLWhlaWdodDogOTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5idXR0b24uc3RhdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0YXQtayB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLnN0YXQtdiB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnN0YXQtdi5nb2xkIHtcclxuICBjb2xvcjogdmFyKC0tZ29sZCk7XHJcbn1cclxuXHJcbi5saXZlLWRvdCB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm5vdGljZSB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnJlY2VudCB7XHJcbiAgbWFyZ2luLXRvcDogMjJweDtcclxufVxyXG5cclxuLnJlY2VudC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ucmVjZW50LWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgcGFkZGluZzogOXB4IDEwcHg7XHJcbn1cclxuXHJcbi5yZWNlbnQtYXZhdGFyIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnJlY2VudC1ib2R5IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnJlY2VudC1uYW1lIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ucmVjZW50LXByaXplIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ucmVjZW50LXRpY2tldCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbn1cclxuXHJcbi5saXZlLXNrZWxldG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uc2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC40NTtcclxufVxyXG5cclxuLnNrLWZlYXR1cmVkIHtcclxuICBoZWlnaHQ6IDExNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uc2stc2NhbiB7XHJcbiAgaGVpZ2h0OiAzNDBweDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG59XHJcblxyXG4uc2stcHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogNTRweDtcclxuICBtaW4taGVpZ2h0OiA1NHB4O1xyXG59XHJcblxyXG4uc2stZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uc2stc3RhdCB7XHJcbiAgaGVpZ2h0OiA5MnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDkycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxufVxyXG5cclxuLnNrLXJvdyB7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gIC50b3AtY2VudGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUtdGlja2V0IHtcclxuICAgIGZvbnQtc2l6ZTogNThweDtcclxuICB9XHJcblxyXG4gIC5zY2FuLXJvdyB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBUaXJhZ2UgdmVyaWZpYWJsZSAoY29tbWl0LXJldmVhbCkgKi9cclxuLmZhaXJuZXNzIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvb2YtYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC13YXJuaW5nKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi13YXJuaW5nKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9vZi1wYW5lbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnByb29mLWxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgLmsge1xyXG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnYge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cclxuICAgICYubW9ubyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnU0ZNb25vLVJlZ3VsYXInLCB1aS1tb25vc3BhY2UsIE1lbmxvLCBtb25vc3BhY2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm9rIHtcclxuICAgICAgY29sb3I6IHZhcigtLWFwcC1zdWNjZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmtvIHtcclxuICAgICAgY29sb3I6IHZhcigtLWFwcC1kYW5nZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5jb3B5YWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvb2YtcGVuZGluZyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbn1cclxuXHJcbi5wcm9vZi1mb3JtdWxhIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi8qIMOiwpTCgMOiwpTCgCBMaXZlIGRyYXdzIGxpc3QgdmlldyDDosKUwoDDosKUwoAgKi9cclxuLmRyYXdzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ucm93LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5yb3ctaW1nIHtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnJvdy1ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLnJvdy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnJvdy1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4ucm93LWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLnJvdy1iYWRnZSB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4ucm93LWNoZXZyb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmxpc3QtZW1wdHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiA2MHB4IDIwcHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcblxuLy8gRGVybmllcnMgZ2FnbmFudHMgKHByZXV2ZSBkZSByZW1pc2UgKyB2ZXJpZmljYXRpb24gZHUgdGlyYWdlKVxuLnBhc3Qtd2lubmVycyB7XG4gIG1hcmdpbjogNHB4IDAgMThweDtcbn1cblxuLnBhc3QtdGl0bGUge1xuICBtYXJnaW46IDAgMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG59XG5cbi53aW5uZXItcm93ICsgLndpbm5lci1yb3cge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5kZWxpdmVyZWQtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VjY2Vzcy1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWFwcC1zdWNjZXNzKTtcbiAgZm9udC1zaXplOiAxMS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 9071
/*!*******************************************************************!*\
  !*** ./src/app/shared/engagement/winner-proof-modal.component.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinnerProofModalComponent: () => (/* binding */ WinnerProofModalComponent)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_app_shared_utils_provably_fair_verify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/provably-fair-verify */ 1360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_winners_winners_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/winners/winners-api.service */ 5580);

var _staticBlock;










const _c0 = a0 => ({
  name: a0
});
const _c1 = a0 => ({
  n: a0
});
const _c2 = a0 => ({
  serial: a0
});
function WinnerProofModalComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 20);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.winner.prizeImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r0.winner.prizeTitle);
  }
}
function WinnerProofModalComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "ENGAGEMENT.DELIVERED_BADGE"), " ");
  }
}
function WinnerProofModalComponent_section_22_blockquote_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00AB ", p_r2.testimonial, " \u00BB");
  }
}
function WinnerProofModalComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, WinnerProofModalComponent_section_22_blockquote_3_Template, 2, 1, "blockquote", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", p_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 3, "ENGAGEMENT.DELIVERY_PHOTO_ALT", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, ctx_r0.winner.winnerName)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", p_r2.testimonial);
  }
}
function WinnerProofModalComponent_button_30_ion_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-spinner", 28);
  }
}
function WinnerProofModalComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WinnerProofModalComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.verify());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, WinnerProofModalComponent_button_30_ion_spinner_5_Template, 1, 0, "ion-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.state === "RUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, "ENGAGEMENT.VERIFY_BUTTON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.state === "RUNNING");
  }
}
function WinnerProofModalComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ENGAGEMENT.VERIFY_PENDING"));
  }
}
function WinnerProofModalComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ENGAGEMENT.VERIFY_ERROR"));
  }
}
function WinnerProofModalComponent_ol_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ol", 31)(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ok", r_r4.commitmentOk)("ko", !r_r4.commitmentOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", r_r4.commitmentOk ? "checkmark-circle" : "close-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 21, "ENGAGEMENT.CHECK_COMMITMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 23, "ENGAGEMENT.CHECK_COMMITMENT_HELP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ok", r_r4.ticketsetOk)("ko", !r_r4.ticketsetOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", r_r4.ticketsetOk ? "checkmark-circle" : "close-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 25, "ENGAGEMENT.CHECK_TICKETS", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](35, _c1, ctx_r0.ticketCount)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 28, "ENGAGEMENT.CHECK_TICKETS_HELP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ok", r_r4.winnerOk)("ko", !r_r4.winnerOk);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", r_r4.winnerOk ? "checkmark-circle" : "close-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](24, 30, "ENGAGEMENT.CHECK_WINNER", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](37, _c2, r_r4.computedSerial)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 33, "ENGAGEMENT.CHECK_WINNER_HELP"));
  }
}
function WinnerProofModalComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ok", r_r5.valid)("ko", !r_r5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 5, r_r5.valid ? "ENGAGEMENT.VERDICT_OK" : "ENGAGEMENT.VERDICT_KO"), " ");
  }
}
/**
 * Fiche d'un gagnant: lot, preuve de remise (photo + temoignage) et
 * verification du tirage refaite SUR LE TELEPHONE, expliquee simplement.
 */
class WinnerProofModalComponent {
  constructor(modal, api, cdr) {
    this.modal = modal;
    this.api = api;
    this.cdr = cdr;
    this.state = 'IDLE';
    this.result = null;
    this.ticketCount = 0;
  }
  close() {
    void this.modal.dismiss();
  }
  verify() {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.winner?.raffleId || !(0,src_app_shared_utils_provably_fair_verify__WEBPACK_IMPORTED_MODULE_5__.isWebCryptoAvailable)()) {
        _this.state = 'ERROR';
        return;
      }
      _this.state = 'RUNNING';
      _this.cdr.markForCheck();
      try {
        const proof = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.api.fairness(_this.winner.raffleId));
        const rev = proof?.revealed;
        if (!rev?.serverSeed || !rev.orderedSerials?.length) {
          _this.state = 'PENDING';
          return;
        }
        _this.ticketCount = rev.orderedSerials.length;
        // Calcul independant: on n'utilise PAS le champ "verified" du serveur.
        _this.result = yield (0,src_app_shared_utils_provably_fair_verify__WEBPACK_IMPORTED_MODULE_5__.verifyDrawLocally)({
          raffleId: proof.raffleId,
          commitment: proof.commitment,
          serverSeed: rev.serverSeed,
          orderedSerials: rev.orderedSerials,
          ticketsetHash: rev.ticketsetHash,
          winningIndex: rev.winningIndex,
          winningTicketSerial: rev.winningTicketSerial
        });
        _this.state = 'DONE';
      } catch {
        _this.state = 'ERROR';
      } finally {
        _this.cdr.markForCheck();
      }
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function WinnerProofModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WinnerProofModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_winners_winners_api_service__WEBPACK_IMPORTED_MODULE_9__.WinnersApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: WinnerProofModalComponent,
    selectors: [["app-winner-proof-modal"]],
    inputs: {
      winner: "winner"
    },
    decls: 35,
    vars: 28,
    consts: [[1, "ion-no-border"], ["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "sheet"], [1, "wrap"], [1, "prize"], [3, "src", "alt", 4, "ngIf"], [1, "prize-title"], [1, "who"], [1, "code"], ["class", "delivered", 4, "ngIf"], ["class", "proof", 4, "ngIf"], [1, "verify"], [1, "explain"], ["type", "button", "class", "verify-btn", 3, "disabled", "click", 4, "ngIf"], ["class", "note", 4, "ngIf"], ["class", "note ko", 4, "ngIf"], ["class", "checks", 4, "ngIf"], ["class", "verdict", 3, "ok", "ko", 4, "ngIf"], [3, "src", "alt"], [1, "delivered"], ["name", "checkmark-circle"], [1, "proof"], [4, "ngIf"], ["type", "button", 1, "verify-btn", 3, "click", "disabled"], ["name", "shield-checkmark-outline"], ["name", "dots", 4, "ngIf"], ["name", "dots"], [1, "note"], [1, "note", "ko"], [1, "checks"], [3, "name"], [1, "verdict"]],
    template: function WinnerProofModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-buttons", 1)(6, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function WinnerProofModalComponent_Template_ion_button_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-content", 4)(10, "div", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, WinnerProofModalComponent_img_12_Template, 1, 2, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div")(14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, WinnerProofModalComponent_span_21_Template, 4, 3, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, WinnerProofModalComponent_section_22_Template, 4, 8, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "section", 13)(24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, WinnerProofModalComponent_button_30_Template, 6, 5, "button", 15)(31, WinnerProofModalComponent_p_31_Template, 3, 3, "p", 16)(32, WinnerProofModalComponent_p_32_Template, 3, 3, "p", 17)(33, WinnerProofModalComponent_ol_33_Template, 28, 39, "ol", 18)(34, WinnerProofModalComponent_div_34_Template, 3, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 15, "ENGAGEMENT.WINNER_SHEET_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 17, "COMMON.CLOSE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.winner.prizeImageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.winner.prizeTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](18, 19, "ENGAGEMENT.WON_BY", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](26, _c0, ctx.winner.winnerName)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("#", ctx.winner.ticketCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.winner.delivered);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.winner.deliveryProof);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 22, "ENGAGEMENT.VERIFY_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 24, "ENGAGEMENT.VERIFY_EXPLAIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.state !== "DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.state === "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.state === "ERROR");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.state === "DONE" && ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.state === "DONE" && ctx.result);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".sheet[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n}\n\n.wrap[_ngcontent-%COMP%] {\n  padding: 8px 16px 28px;\n  color: var(--app-ink);\n}\n\n.prize[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\n.prize[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 14px;\n  object-fit: cover;\n  flex: 0 0 auto;\n}\n\n.prize-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 17px;\n}\n\n.who[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--app-muted);\n  margin-top: 2px;\n}\n\n.code[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  margin-left: 4px;\n}\n\n.delivered[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 6px;\n  padding: 3px 8px;\n  border-radius: 99px;\n  background: var(--app-success-soft);\n  color: var(--app-success);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.proof[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.proof[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 360px;\n  object-fit: cover;\n  border-radius: var(--app-radius-lg, 18px);\n}\n\nblockquote[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  padding: 10px 12px;\n  border-left: 3px solid var(--app-warning);\n  background: var(--app-surface);\n  border-radius: 0 12px 12px 0;\n  font-style: italic;\n  font-size: 14px;\n}\n\n.verify[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 14px;\n  border-radius: var(--app-radius-lg, 18px);\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.explain[_ngcontent-%COMP%], \n.note[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 13px;\n  color: var(--app-muted);\n  line-height: 1.45;\n}\n\n.note.ko[_ngcontent-%COMP%] {\n  color: var(--app-danger);\n}\n\n.verify-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 44px;\n  padding: 0 16px;\n  border-radius: 99px;\n  border: 0;\n  background: var(--app-primary);\n  color: var(--app-on-primary, #fff);\n  font: inherit;\n  font-weight: 700;\n}\n\n.checks[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 10px;\n}\n\n.checks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n}\n\n.checks[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 20px;\n  margin-top: 1px;\n}\n\n.checks[_ngcontent-%COMP%]   li.ok[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--app-success);\n}\n\n.checks[_ngcontent-%COMP%]   li.ko[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--app-danger);\n}\n\n.checks[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13.5px;\n}\n\n.checks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--app-muted);\n  line-height: 1.4;\n}\n\n.verdict[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 13.5px;\n}\n\n.verdict.ok[_ngcontent-%COMP%] {\n  background: var(--app-success-soft);\n  color: var(--app-success);\n}\n\n.verdict.ko[_ngcontent-%COMP%] {\n  background: var(--app-danger-soft);\n  color: var(--app-danger);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2VuZ2FnZW1lbnQvd2lubmVyLXByb29mLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLDJCQUFBO0FBQVI7O0FBRU07RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBQ1I7O0FBQ007RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRVI7O0FBQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR1I7O0FBRE07RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFJUjs7QUFGTTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFLUjs7QUFITTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7QUFNUjs7QUFKTTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBT1I7O0FBTE07RUFDRSxnQkFBQTtBQVFSOztBQU5NO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQVNSOztBQVBNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVVSOztBQVJNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0FBV1I7O0FBVE07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWVI7O0FBVk07O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQWFSOztBQVhNO0VBQ0Usd0JBQUE7QUFjUjs7QUFaTTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWVSOztBQWJNO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBZ0JSOztBQWRNO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQWlCUjs7QUFmTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWtCUjs7QUFoQk07RUFDRSx5QkFBQTtBQW1CUjs7QUFqQk07RUFDRSx3QkFBQTtBQW9CUjs7QUFsQk07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFxQlI7O0FBbkJNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBc0JSOztBQXBCTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF1QlI7O0FBckJNO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQXdCUjs7QUF0Qk07RUFDRSxrQ0FBQTtFQUNBLHdCQUFBO0FBeUJSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuc2hlZXQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iZyk7XG4gICAgICB9XG4gICAgICAud3JhcCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4IDI4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcbiAgICAgIH1cbiAgICAgIC5wcml6ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5wcml6ZSBpbWcge1xuICAgICAgICB3aWR0aDogNzJweDtcbiAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICB9XG4gICAgICAucHJpemUtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB9XG4gICAgICAud2hvIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgfVxuICAgICAgLmNvZGUge1xuICAgICAgICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICB9XG4gICAgICAuZGVsaXZlcmVkIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdWNjZXNzLXNvZnQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgICAucHJvb2Yge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgfVxuICAgICAgLnByb29mIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1yYWRpdXMtbGcsIDE4cHgpO1xuICAgICAgfVxuICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1hcHAtd2FybmluZyk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAudmVyaWZ5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLXJhZGl1cy1sZywgMThweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgICAgLmV4cGxhaW4sXG4gICAgICAubm90ZSB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICAgICAgfVxuICAgICAgLm5vdGUua28ge1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLWRhbmdlcik7XG4gICAgICB9XG4gICAgICAudmVyaWZ5LWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5LCAjZmZmKTtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICAgIC5jaGVja3Mge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5jaGVja3MgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgICAgLmNoZWNrcyBpb24taWNvbiB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICAgIH1cbiAgICAgIC5jaGVja3MgbGkub2sgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xuICAgICAgfVxuICAgICAgLmNoZWNrcyBsaS5rbyBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtZGFuZ2VyKTtcbiAgICAgIH1cbiAgICAgIC5jaGVja3Mgc3Ryb25nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xuICAgICAgfVxuICAgICAgLmNoZWNrcyBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICB9XG4gICAgICAudmVyZGljdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMy41cHg7XG4gICAgICB9XG4gICAgICAudmVyZGljdC5vayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdWNjZXNzLXNvZnQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xuICAgICAgfVxuICAgICAgLnZlcmRpY3Qua28ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZGFuZ2VyLXNvZnQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLWRhbmdlcik7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 1360
/*!******************************************************!*\
  !*** ./src/app/shared/utils/provably-fair-verify.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexMod: () => (/* binding */ hexMod),
/* harmony export */   hmacSha256Hex: () => (/* binding */ hmacSha256Hex),
/* harmony export */   isWebCryptoAvailable: () => (/* binding */ isWebCryptoAvailable),
/* harmony export */   sha256Hex: () => (/* binding */ sha256Hex),
/* harmony export */   verifyDrawLocally: () => (/* binding */ verifyDrawLocally)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

/**
 * Verification INDEPENDANTE d'un tirage, executee sur le telephone du joueur
 * (Web Crypto), sans faire confiance au champ `verified` renvoye par le
 * serveur. Reproduit exactement l'algorithme de l'API:
 *
 *   commitment    = SHA256(serverSeed)                     (publie AVANT le tirage)
 *   ticketsetHash = SHA256(orderedSerials.join(","))       (liste figee au tirage)
 *   winningIndex  = HMAC_SHA256(serverSeed, raffleId + ":" + ticketsetHash) mod N
 */
const encoder = new TextEncoder();
function toHex(buffer) {
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}
function sha256Hex(_x) {
  return _sha256Hex.apply(this, arguments);
}
function _sha256Hex() {
  _sha256Hex = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value) {
    return toHex(yield crypto.subtle.digest('SHA-256', encoder.encode(value)));
  });
  return _sha256Hex.apply(this, arguments);
}
function hmacSha256Hex(_x2, _x3) {
  return _hmacSha256Hex.apply(this, arguments);
}
/**
 * (entier hexadecimal) mod n, chiffre par chiffre: equivalent exact de
 * BigInt('0x' + hex) % n sans BigInt (cible ES2017 de l'app). Reste exact
 * tant que n * 16 < 2^53, tres largement au-dessus du nombre de tickets.
 */
function _hmacSha256Hex() {
  _hmacSha256Hex = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key, message) {
    const cryptoKey = yield crypto.subtle.importKey('raw', encoder.encode(key), {
      name: 'HMAC',
      hash: 'SHA-256'
    }, false, ['sign']);
    return toHex(yield crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message)));
  });
  return _hmacSha256Hex.apply(this, arguments);
}
function hexMod(hex, n) {
  let r = 0;
  for (const ch of hex) {
    r = (r * 16 + parseInt(ch, 16)) % n;
  }
  return r;
}
function isWebCryptoAvailable() {
  return typeof crypto !== 'undefined' && !!crypto.subtle;
}
function verifyDrawLocally(_x4) {
  return _verifyDrawLocally.apply(this, arguments);
}
function _verifyDrawLocally() {
  _verifyDrawLocally = (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (input) {
    const seed = String(input.serverSeed ?? '');
    const serials = (input.orderedSerials ?? []).map(s => String(s ?? ''));
    const empty = {
      commitmentOk: false,
      ticketsetOk: false,
      winnerOk: false,
      computedIndex: null,
      computedSerial: null,
      valid: false
    };
    if (!seed || !serials.length) return empty;
    const commitmentOk = (yield sha256Hex(seed)) === String(input.commitment ?? '').toLowerCase();
    const ticketsetHash = yield sha256Hex(serials.join(','));
    const ticketsetOk = ticketsetHash === String(input.ticketsetHash ?? '').toLowerCase();
    const digest = yield hmacSha256Hex(seed, `${input.raffleId}:${ticketsetHash}`);
    const computedIndex = hexMod(digest, serials.length);
    const computedSerial = serials[computedIndex] ?? null;
    const announcedSerial = input.winningTicketSerial ?? null;
    const winnerOk = computedIndex === Number(input.winningIndex) && (!announcedSerial || announcedSerial === computedSerial);
    return {
      commitmentOk,
      ticketsetOk,
      winnerOk,
      computedIndex,
      computedSerial,
      valid: commitmentOk && ticketsetOk && winnerOk
    };
  });
  return _verifyDrawLocally.apply(this, arguments);
}

/***/ }

}]);
//# sourceMappingURL=src_app_pages_winners_winners_module_ts.js.map