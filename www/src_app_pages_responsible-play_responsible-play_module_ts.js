"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_responsible-play_responsible-play_module_ts"],{

/***/ 4395
/*!***************************************************************************!*\
  !*** ./src/app/pages/responsible-play/responsible-play-routing.module.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiblePlayPageRoutingModule: () => (/* binding */ ResponsiblePlayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _responsible_play_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsible-play.page */ 1805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _responsible_play_page__WEBPACK_IMPORTED_MODULE_1__.ResponsiblePlayPage
}];
class ResponsiblePlayPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ResponsiblePlayPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ResponsiblePlayPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ResponsiblePlayPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResponsiblePlayPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 7786
/*!*******************************************************************!*\
  !*** ./src/app/pages/responsible-play/responsible-play.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiblePlayPageModule: () => (/* binding */ ResponsiblePlayPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _responsible_play_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsible-play-routing.module */ 4395);
/* harmony import */ var _responsible_play_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsible-play.page */ 1805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







class ResponsiblePlayPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ResponsiblePlayPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ResponsiblePlayPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ResponsiblePlayPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _responsible_play_routing_module__WEBPACK_IMPORTED_MODULE_4__.ResponsiblePlayPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ResponsiblePlayPageModule, {
    declarations: [_responsible_play_page__WEBPACK_IMPORTED_MODULE_5__.ResponsiblePlayPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _responsible_play_routing_module__WEBPACK_IMPORTED_MODULE_4__.ResponsiblePlayPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule]
  });
})();

/***/ },

/***/ 1805
/*!*****************************************************************!*\
  !*** ./src/app/pages/responsible-play/responsible-play.page.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LIMIT_MAX: () => (/* binding */ LIMIT_MAX),
/* harmony export */   LIMIT_MIN: () => (/* binding */ LIMIT_MIN),
/* harmony export */   LIMIT_PRESETS: () => (/* binding */ LIMIT_PRESETS),
/* harmony export */   ResponsiblePlayPage: () => (/* binding */ ResponsiblePlayPage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var src_app_services_responsible_play_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/responsible-play/responsible-play-api.service */ 6980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_responsible_play_responsible_play_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/responsible-play/responsible-play-guard.service */ 213);
/* harmony import */ var src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/auth-state.service */ 6247);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4456);

var _staticBlock;










const _c0 = a0 => ({
  hours: a0
});
const _c1 = a0 => ({
  amount: a0
});
const _c2 = a0 => ({
  date: a0
});
const _c3 = (a0, a1, a2) => ({
  amount: a0,
  period: a1,
  date: a2
});
function ResponsiblePlayPage_section_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResponsiblePlayPage_section_14_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.confirmAdult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "RESPONSIBLE_PLAY.AGE_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "RESPONSIBLE_PLAY.AGE_MESSAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, "RESPONSIBLE_PLAY.AGE_CONFIRM"), " ");
  }
}
function ResponsiblePlayPage_ng_container_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 38)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const limit_r4 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 10, "RESPONSIBLE_PLAY.CURRENT_LIMIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r2.formatXaf(limit_r4.amount), " ", ctx_r2.periodLabel(limit_r4.period));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-valuenow", ctx_r2.spentPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r2.spentPercent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("full", ctx_r2.spentPercent >= 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 12, "RESPONSIBLE_PLAY.SPENT", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c1, ctx_r2.formatXaf(ctx_r2.status == null ? null : ctx_r2.status.spent))));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 15, "RESPONSIBLE_PLAY.REMAINING", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c1, ctx_r2.formatXaf(ctx_r2.status == null ? null : ctx_r2.status.remaining))));
  }
}
function ResponsiblePlayPage_ng_container_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "RESPONSIBLE_PLAY.NO_LIMIT"));
  }
}
function ResponsiblePlayPage_ng_container_19_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 4, "RESPONSIBLE_PLAY.PENDING_REMOVE", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, p_r6.effectiveAt, "d MMM, HH:mm"))), " ");
  }
}
function ResponsiblePlayPage_ng_container_19_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 4, "RESPONSIBLE_PLAY.PENDING_CHANGE", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](7, _c3, ctx_r2.formatXaf(p_r6.limit.amount), ctx_r2.periodLabel(p_r6.limit.period), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, p_r6.effectiveAt, "d MMM, HH:mm"))), " ");
  }
}
function ResponsiblePlayPage_ng_container_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ResponsiblePlayPage_ng_container_19_div_4_span_3_Template, 4, 9, "span", 23)(4, ResponsiblePlayPage_ng_container_19_div_4_span_4_Template, 4, 11, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResponsiblePlayPage_ng_container_19_div_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancelPending());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r6 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", p_r6.remove);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !p_r6.remove && p_r6.limit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "RESPONSIBLE_PLAY.CANCEL_PENDING"), " ");
  }
}
function ResponsiblePlayPage_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ResponsiblePlayPage_ng_container_19_div_1_Template, 16, 22, "div", 32)(2, ResponsiblePlayPage_ng_container_19_ng_template_2_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(4, ResponsiblePlayPage_ng_container_19_div_4_Template, 8, 6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const noLimit_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.status == null ? null : ctx_r2.status.limit)("ngIfElse", noLimit_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.status == null ? null : ctx_r2.status.pending);
  }
}
function ResponsiblePlayPage_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-skeleton-text", 43);
  }
}
function ResponsiblePlayPage_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResponsiblePlayPage_button_28_Template_button_click_0_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.period = p_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.period === p_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-checked", ctx_r2.period === p_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.periodLabel(p_r9), " ");
  }
}
function ResponsiblePlayPage_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResponsiblePlayPage_button_30_Template_button_click_0_listener() {
      const v_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.pickPreset(v_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.amount === v_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.formatXaf(v_r11), " ");
  }
}
function ResponsiblePlayPage_ion_spinner_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner", 46);
  }
}
function ResponsiblePlayPage_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "RESPONSIBLE_PLAY.SAVE"));
  }
}
function ResponsiblePlayPage_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResponsiblePlayPage_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeLimit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "RESPONSIBLE_PLAY.REMOVE_LIMIT"), " ");
  }
}
const LIMIT_PRESETS = [2000, 5000, 10000, 25000];
const LIMIT_MIN = 100;
const LIMIT_MAX = 10_000_000;
/**
 * Jeu responsable: limite de depense choisie par le joueur, visibilite dans
 * le fil d'activite et confirmation 18+. L'API applique tout (les baisses
 * tout de suite, les hausses apres un delai de reflexion).
 */
class ResponsiblePlayPage {
  constructor(api, guard, authState, toast, translate, nav) {
    this.api = api;
    this.guard = guard;
    this.authState = authState;
    this.toast = toast;
    this.translate = translate;
    this.nav = nav;
    this.presets = LIMIT_PRESETS;
    this.periods = ['DAY', 'WEEK', 'MONTH'];
    this.loading = true;
    this.saving = false;
    this.status = null;
    this.period = 'WEEK';
    this.amount = 5000;
    this.showInLiveFeed = true;
    this.adultConfirmed = false;
  }
  ionViewWillEnter() {
    this.load();
    this.authState.ensureCurrentUser(true).subscribe(me => {
      this.showInLiveFeed = me?.showInLiveFeed !== false;
      this.adultConfirmed = me?.adultConfirmed === true;
    });
  }
  back() {
    this.nav.back();
  }
  load() {
    this.loading = true;
    this.api.status().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => this.loading = false)).subscribe({
      next: s => {
        this.status = s;
        if (s.limit) {
          this.period = s.limit.period;
          this.amount = s.limit.amount;
        }
      },
      error: () => this.status = null
    });
  }
  get spentPercent() {
    const s = this.status;
    if (!s?.limit?.amount) return 0;
    return Math.min(100, Math.round(s.spent / s.limit.amount * 100));
  }
  get amountValid() {
    const n = Number(this.amount);
    return Number.isInteger(n) && n >= LIMIT_MIN && n <= LIMIT_MAX;
  }
  pickPreset(value) {
    this.amount = value;
  }
  periodLabel(p) {
    return this.translate.instant(`RESPONSIBLE_PLAY.PERIOD_${p}`);
  }
  formatXaf(n) {
    const v = Math.max(0, Math.floor(Number(n) || 0));
    return `${v.toLocaleString('fr-FR')} FCFA`;
  }
  save() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.saving || !_this.amountValid) return;
      _this.saving = true;
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.api.setLimit({
          period: _this.period,
          amount: Number(_this.amount)
        }));
        _this.status = res.status;
        yield _this.showToast(_this.translate.instant(res.applied === 'IMMEDIATE' ? 'RESPONSIBLE_PLAY.SAVED_NOW' : 'RESPONSIBLE_PLAY.SAVED_LATER', {
          hours: res.status.loosenDelayHours
        }));
      } catch (err) {
        yield _this.showToast((0,src_app_services_responsible_play_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_3__.apiErrorMessage)(err) || _this.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
      } finally {
        _this.saving = false;
      }
    })();
  }
  removeLimit() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.saving) return;
      _this2.saving = true;
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this2.api.removeLimit());
        _this2.status = res.status;
        yield _this2.showToast(_this2.translate.instant('RESPONSIBLE_PLAY.SAVED_LATER', {
          hours: res.status.loosenDelayHours
        }));
      } catch (err) {
        yield _this2.showToast((0,src_app_services_responsible_play_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_3__.apiErrorMessage)(err) || _this2.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
      } finally {
        _this2.saving = false;
      }
    })();
  }
  cancelPending() {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.saving) return;
      _this3.saving = true;
      try {
        _this3.status = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this3.api.cancelPending());
        yield _this3.showToast(_this3.translate.instant('RESPONSIBLE_PLAY.PENDING_CANCELLED'));
      } catch (err) {
        yield _this3.showToast((0,src_app_services_responsible_play_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_3__.apiErrorMessage)(err) || _this3.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
      } finally {
        _this3.saving = false;
      }
    })();
  }
  toggleLiveFeed(show) {
    var _this4 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const previous = _this4.showInLiveFeed;
      _this4.showInLiveFeed = show;
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this4.api.setShowInLiveFeed(show));
        _this4.authState.refreshMe();
      } catch {
        _this4.showInLiveFeed = previous;
        yield _this4.showToast(_this4.translate.instant('RESPONSIBLE_PLAY.SAVE_FAILED'));
      }
    })();
  }
  confirmAdult() {
    var _this5 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (yield _this5.guard.askAdultConfirmation()) _this5.adultConfirmed = true;
    })();
  }
  showToast(message) {
    var _this6 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = yield _this6.toast.create({
        message,
        duration: 2600,
        position: 'top'
      });
      yield t.present();
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ResponsiblePlayPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ResponsiblePlayPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_responsible_play_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_3__.ResponsiblePlayApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_responsible_play_responsible_play_guard_service__WEBPACK_IMPORTED_MODULE_6__.ResponsiblePlayGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_7__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ResponsiblePlayPage,
    selectors: [["app-responsible-play"]],
    standalone: false,
    decls: 67,
    vars: 61,
    consts: [["loadingTpl", ""], ["noLimit", ""], [1, "rp-bg", 3, "fullscreen"], [1, "screen"], [1, "topbar"], ["type", "button", 1, "top-btn", 3, "click"], ["name", "arrow-back-outline"], [1, "top-title"], [1, "spacer"], [1, "body"], [1, "intro"], ["class", "card age", 4, "ngIf"], [1, "card"], [4, "ngIf", "ngIfElse"], ["role", "radiogroup", 1, "segment"], ["type", "button", "role", "radio", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "presets"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "field"], ["type", "number", "inputmode", "numeric", "min", "100", "step", "100", 3, "ngModelChange", "ngModel"], [1, "hint"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], ["name", "dots", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "link danger", 3, "disabled", "click", 4, "ngIf"], [1, "card", "toggle-card"], [1, "grow"], [3, "ionChange", "checked"], [1, "card", "tips"], [1, "card", "age"], ["name", "alert-circle-outline", "aria-hidden", "true"], ["type", "button", 1, "btn-secondary", 3, "click"], ["class", "current", 4, "ngIf", "ngIfElse"], ["class", "pending", 4, "ngIf"], [1, "current"], [1, "current-head"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "bar"], [1, "fill"], [1, "current-foot"], [1, "muted"], [1, "pending"], ["name", "time-outline", "aria-hidden", "true"], ["type", "button", 1, "link", 3, "click", "disabled"], ["animated", "", 1, "sk"], ["type", "button", "role", "radio", 3, "click"], ["type", "button", 3, "click"], ["name", "dots"], ["type", "button", 1, "link", "danger", 3, "click", "disabled"]],
    template: function ResponsiblePlayPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-content", 2)(1, "div", 3)(2, "div", 4)(3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResponsiblePlayPage_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.back());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ResponsiblePlayPage_section_14_Template, 12, 9, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "section", 12)(16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ResponsiblePlayPage_ng_container_19_Template, 5, 3, "ng-container", 13)(20, ResponsiblePlayPage_ng_template_20_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "section", 12)(23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ResponsiblePlayPage_button_28_Template, 2, 4, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ResponsiblePlayPage_button_30_Template, 2, 3, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 18)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ResponsiblePlayPage_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.amount, $event) || (ctx.amount = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ResponsiblePlayPage_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.save());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ResponsiblePlayPage_ion_spinner_40_Template, 1, 0, "ion-spinner", 22)(41, ResponsiblePlayPage_span_41_Template, 3, 3, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ResponsiblePlayPage_button_42_Template, 3, 4, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "section", 25)(44, "div", 26)(45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "ion-toggle", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function ResponsiblePlayPage_Template_ion_toggle_ionChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.toggleLiveFeed($event.detail.checked));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "section", 28)(54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "ul")(58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const loadingTpl_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 28, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 30, "RESPONSIBLE_PLAY.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 32, "RESPONSIBLE_PLAY.INTRO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.adultConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 34, "RESPONSIBLE_PLAY.LIMIT_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", loadingTpl_r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 36, (ctx.status == null ? null : ctx.status.limit) ? "RESPONSIBLE_PLAY.CHANGE_LIMIT" : "RESPONSIBLE_PLAY.SET_LIMIT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 38, "RESPONSIBLE_PLAY.PERIOD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.periods);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.presets);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 40, "RESPONSIBLE_PLAY.AMOUNT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-invalid", !ctx.amountValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](38, 42, "RESPONSIBLE_PLAY.RULE_HINT", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](59, _c0, (ctx.status == null ? null : ctx.status.loosenDelayHours) ?? 24)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.saving || !ctx.amountValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.saving);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.saving);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.status == null ? null : ctx.status.limit) && !(ctx.status == null ? null : ctx.status.pending == null ? null : ctx.status.pending.remove));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 45, "RESPONSIBLE_PLAY.LIVE_FEED_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 47, "RESPONSIBLE_PLAY.LIVE_FEED_HELP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.showInLiveFeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 49, "RESPONSIBLE_PLAY.LIVE_FEED_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 51, "RESPONSIBLE_PLAY.TIPS_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](60, 53, "RESPONSIBLE_PLAY.TIP_1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](63, 55, "RESPONSIBLE_PLAY.TIP_2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](66, 57, "RESPONSIBLE_PLAY.TIP_3"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.BooleanValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: [".rp-bg[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n}\n\n.screen[_ngcontent-%COMP%] {\n  width: min(100%, 720px);\n  margin: 0 auto;\n  color: var(--app-ink);\n}\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  padding: calc(env(safe-area-inset-top) + 12px) 16px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--app-surface);\n}\n\n.top-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.top-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 16px 16px 120px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.intro[_ngcontent-%COMP%], \n.muted[_ngcontent-%COMP%], \n.hint[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--app-muted);\n  line-height: 1.45;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 800;\n}\n\n.grow[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.age[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: flex-start;\n  border-color: var(--app-warning);\n  background: var(--app-warning-soft);\n}\n.age[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--app-warning);\n  flex: 0 0 auto;\n}\n\n.current-head[_ngcontent-%COMP%], \n.current-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 13px;\n}\n\n.current-foot[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: var(--app-muted);\n  font-size: 12px;\n}\n\n.bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  height: 10px;\n  border-radius: 99px;\n  background: var(--app-surface-2);\n  overflow: hidden;\n}\n\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: inherit;\n  background: var(--app-primary);\n  transition: width 0.5s var(--app-ease-out, ease-out);\n}\n.fill.full[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n}\n\n.pending[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: var(--app-surface-2);\n  font-size: 12.5px;\n}\n.pending[_ngcontent-%COMP%]    > ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--app-primary);\n  flex: 0 0 auto;\n}\n\n.segment[_ngcontent-%COMP%], \n.presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.presets[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 40px;\n  padding: 0 12px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font: inherit;\n  font-size: 13px;\n  font-weight: 600;\n}\n.segment[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], \n.presets[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: var(--app-primary);\n  background: var(--app-primary);\n  color: var(--app-on-primary, #fff);\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--app-muted);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 46px;\n  padding: 0 12px;\n  border-radius: 12px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font-size: 16px;\n  font-weight: 700;\n}\n.field[_ngcontent-%COMP%]   input[aria-invalid=true][_ngcontent-%COMP%] {\n  border-color: var(--app-danger);\n}\n\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  min-height: 46px;\n  border-radius: 999px;\n  border: 0;\n  font: inherit;\n  font-weight: 800;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n  color: var(--app-on-primary, #fff);\n}\n.btn-primary[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0 16px;\n  min-height: 40px;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  border: 1px solid var(--app-border);\n}\n\n.link[_ngcontent-%COMP%] {\n  align-self: center;\n  border: 0;\n  background: none;\n  color: var(--app-primary);\n  font: inherit;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 6px 4px;\n}\n.link.danger[_ngcontent-%COMP%] {\n  color: var(--app-danger);\n}\n\n.toggle-card[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n\n.tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  font-size: 13px;\n  color: var(--app-muted);\n  line-height: 1.5;\n}\n\n.sk[_ngcontent-%COMP%] {\n  height: 46px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVzcG9uc2libGUtcGxheS9yZXNwb25zaWJsZS1wbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUFBRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBOztFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvREFBQTtBQURGO0FBR0U7RUFDRSw2QkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBRkY7QUFJRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFNQTs7RUFFRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFIRjtBQUtFOztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJOztFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQUROOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsK0JBQUE7QUFKSjs7QUFRQTs7RUFFRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxGOztBQVFBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtBQUxGO0FBT0U7RUFDRSxhQUFBO0FBTEo7O0FBU0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5GO0FBUUU7RUFDRSx3QkFBQTtBQU5KOztBQVVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVBGIiwic291cmNlc0NvbnRlbnQiOlsiLnJwLWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xufVxuXG4uc2NyZWVuIHtcbiAgd2lkdGg6IG1pbigxMDAlLCA3MjBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG59XG5cbi50b3BiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDEycHgpIDE2cHggMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG59XG5cbi50b3AtYnRuIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3AtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNwYWNlciB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uYm9keSB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uaW50cm8sXG4ubXV0ZWQsXG4uaGludCxcbi5jYXJkIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5cbi5ncm93IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG59XG5cbi5hZ2Uge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC13YXJuaW5nLXNvZnQpO1xuXG4gID4gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogdmFyKC0tYXBwLXdhcm5pbmcpO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG59XG5cbi5jdXJyZW50LWhlYWQsXG4uY3VycmVudC1mb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY3VycmVudC1mb290IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYmFyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIHZhcigtLWFwcC1lYXNlLW91dCwgZWFzZS1vdXQpO1xuXG4gICYuZnVsbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRhbmdlcik7XG4gIH1cbn1cblxuLnBlbmRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XG4gIGZvbnQtc2l6ZTogMTIuNXB4O1xuXG4gID4gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG59XG5cbi5zZWdtZW50LFxuLnByZXNldHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XG4gICAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSwgI2ZmZik7XG4gICAgfVxuICB9XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xuXG4gIGlucHV0IHtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XG4gICAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgaW5wdXRbYXJpYS1pbnZhbGlkPSd0cnVlJ10ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWRhbmdlcik7XG4gIH1cbn1cblxuLmJ0bi1wcmltYXJ5LFxuLmJ0bi1zZWNvbmRhcnkge1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5LCAjZmZmKTtcblxuICAmW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgfVxufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xufVxuXG4ubGluayB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDZweCA0cHg7XG5cbiAgJi5kYW5nZXIge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtZGFuZ2VyKTtcbiAgfVxufVxuXG4udG9nZ2xlLWNhcmQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGlwcyB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uc2sge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ }

}]);
//# sourceMappingURL=src_app_pages_responsible-play_responsible-play_module_ts.js.map