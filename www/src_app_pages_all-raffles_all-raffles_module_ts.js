"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_all-raffles_all-raffles_module_ts"],{

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

/***/ 3063
/*!*****************************************************************!*\
  !*** ./src/app/pages/all-raffles/all-raffles-routing.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllRafflesPageRoutingModule: () => (/* binding */ AllRafflesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _all_raffles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-raffles.page */ 1929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _all_raffles_page__WEBPACK_IMPORTED_MODULE_1__.AllRafflesPage
}];
class AllRafflesPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AllRafflesPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AllRafflesPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AllRafflesPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AllRafflesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 4150
/*!*********************************************************!*\
  !*** ./src/app/pages/all-raffles/all-raffles.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllRafflesPageModule: () => (/* binding */ AllRafflesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _all_raffles_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-raffles-routing.module */ 3063);
/* harmony import */ var _all_raffles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-raffles.page */ 1929);
/* harmony import */ var _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/countdown-energy/countdown-energy.component */ 6881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class AllRafflesPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AllRafflesPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AllRafflesPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AllRafflesPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _all_raffles_routing_module__WEBPACK_IMPORTED_MODULE_4__.AllRafflesPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_6__.CountdownEnergyComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AllRafflesPageModule, {
    declarations: [_all_raffles_page__WEBPACK_IMPORTED_MODULE_5__.AllRafflesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _all_raffles_routing_module__WEBPACK_IMPORTED_MODULE_4__.AllRafflesPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_6__.CountdownEnergyComponent]
  });
})();

/***/ },

/***/ 1929
/*!*******************************************************!*\
  !*** ./src/app/pages/all-raffles/all-raffles.page.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllRafflesPage: () => (/* binding */ AllRafflesPage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_home_home_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/home/home-api.service */ 4144);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/ui/countdown-energy/countdown-energy.component */ 6881);
var _staticBlock;








const _c0 = () => [1, 2, 3, 4, 5];
function AllRafflesPage_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllRafflesPage_button_20_Template_button_click_0_listener() {
      const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectCategory(c_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r2.selectedCategoryId === c_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.categoryDisplayLabel(c_r2), " ");
  }
}
function AllRafflesPage_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-skeleton-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-skeleton-text", 17)(4, "ion-skeleton-text", 18)(5, "ion-skeleton-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AllRafflesPage_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AllRafflesPage_ng_container_21_div_1_Template, 6, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
function AllRafflesPage_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "ALL_RAFFLES.EMPTY"));
  }
}
function AllRafflesPage_ng_container_23_article_1_div_5_app_countdown_energy_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-countdown-energy", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const d_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, "HOME_PAGE.TIME_REMAINING"))("value", ctx_r2.countdownText(d_r5))("progress", ctx_r2.timeProgress(d_r5))("compact", true);
  }
}
function AllRafflesPage_ng_container_23_article_1_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "HOME_PAGE.ENDED"));
  }
}
function AllRafflesPage_ng_container_23_article_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AllRafflesPage_ng_container_23_article_1_div_5_app_countdown_energy_1_Template, 2, 6, "app-countdown-energy", 32)(2, AllRafflesPage_ng_container_23_article_1_div_5_span_2_Template, 3, 3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.isEnded(d_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isEnded(d_r5));
  }
}
function AllRafflesPage_ng_container_23_article_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllRafflesPage_ng_container_23_article_1_button_9_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const d_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      ctx_r2.openRaffle(d_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "ALL_RAFFLES.PARTICIPATE"), " ");
  }
}
function AllRafflesPage_ng_container_23_article_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "HOME_PAGE.ENDED"));
  }
}
function AllRafflesPage_ng_container_23_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllRafflesPage_ng_container_23_article_1_Template_article_click_0_listener() {
      const d_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openRaffle(d_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16)(3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AllRafflesPage_ng_container_23_article_1_div_5_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 27)(7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AllRafflesPage_ng_container_23_article_1_button_9_Template, 3, 3, "button", 29)(10, AllRafflesPage_ng_container_23_article_1_span_10_Template, 3, 3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ended", ctx_r2.isEnded(d_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-image", "url(" + (d_r5.imageUrl || "assets/img/placeholder.png") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](d_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", d_r5.endsAt || d_r5.endAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", d_r5.ticketPrice ?? 0, " ", d_r5.currency || "XAF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.isEnded(d_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isEnded(d_r5));
  }
}
function AllRafflesPage_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AllRafflesPage_ng_container_23_article_1_Template, 11, 10, "article", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.raffles)("ngForTrackBy", ctx_r2.trackById);
  }
}
class AllRafflesPage {
  constructor(api, router, translate) {
    this.api = api;
    this.router = router;
    this.translate = translate;
    this.loading = true;
    this.categories = [{
      id: 'all',
      label: 'Tout'
    }];
    this.selectedCategoryId = 'all';
    this.statusFilter = 'all';
    this.allRaffles = [];
    this.raffles = [];
    this.nowMs = Date.now();
  }
  ionViewWillEnter() {
    this.startClock();
    this.api.getCategories().subscribe({
      next: cats => {
        this.categories = cats?.length ? cats : [{
          id: 'all',
          label: 'Tout'
        }];
      }
    });
    this.loadRaffles(this.selectedCategoryId);
  }
  ionViewWillLeave() {
    this.clockSub?.unsubscribe();
    this.clockSub = undefined;
  }
  ngOnDestroy() {
    this.clockSub?.unsubscribe();
  }
  selectCategory(id) {
    if (id === this.selectedCategoryId) return;
    this.selectedCategoryId = id;
    this.loadRaffles(id);
  }
  setStatusFilter(f) {
    if (f === this.statusFilter) return;
    this.statusFilter = f;
    this.applyFilter();
  }
  loadRaffles(categoryId) {
    this.loading = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
      live: this.api.getLiveRows(categoryId),
      ending: this.api.getEndingSoon(categoryId)
    }).subscribe({
      next: ({
        live,
        ending
      }) => {
        const seen = new Set();
        const merged = [];
        for (const card of [...live, ...ending]) {
          if (!seen.has(card.id)) {
            seen.add(card.id);
            merged.push(card);
          }
        }
        merged.sort((a, b) => {
          const aMs = a.endsAt ? new Date(a.endsAt).getTime() : Infinity;
          const bMs = b.endsAt ? new Date(b.endsAt).getTime() : Infinity;
          return aMs - bMs;
        });
        this.allRaffles = merged;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.allRaffles = [];
        this.raffles = [];
        this.loading = false;
      }
    });
  }
  applyFilter() {
    if (this.statusFilter === 'all') {
      this.raffles = this.allRaffles;
      return;
    }
    const now = this.nowMs;
    this.raffles = this.allRaffles.filter(d => {
      const endMs = d.endsAt ? new Date(d.endsAt).getTime() : Infinity;
      const isEnded = endMs <= now;
      return this.statusFilter === 'ended' ? isEnded : !isEnded;
    });
  }
  openRaffle(d) {
    this.router.navigate(['/tabs/raffle-details', d.id]);
  }
  countdownText(d) {
    const raw = d.endsAt ?? d.endAt;
    if (!raw) return '';
    const end = new Date(raw).getTime();
    const ms = Math.max(0, end - this.nowMs);
    if (!ms) return this.translate.instant('HOME_PAGE.ENDED');
    const totalSec = Math.floor(ms / 1000);
    const hh = Math.floor(totalSec / 3600);
    const mm = Math.floor(totalSec % 3600 / 60);
    const ss = totalSec % 60;
    const pad = n => String(n).padStart(2, '0');
    return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  }
  timeProgress(d) {
    const endRaw = d.endsAt ?? d.endAt;
    const end = endRaw ? new Date(endRaw).getTime() : NaN;
    if (!Number.isFinite(end)) return 0;
    const startRaw = d.startAt ?? d.start_at;
    const start = startRaw ? new Date(startRaw).getTime() : NaN;
    if (Number.isFinite(start) && end > start) {
      const elapsed = Math.max(0, Math.min(end - start, this.nowMs - start));
      return Math.max(0, Math.min(100, elapsed / (end - start) * 100));
    }
    const remaining = Math.max(0, end - this.nowMs);
    const fallbackWindow = 24 * 60 * 60 * 1000;
    return Math.max(0, Math.min(100, (fallbackWindow - remaining) / fallbackWindow * 100));
  }
  isEnded(d) {
    const raw = d.endsAt ?? d.endAt;
    if (!raw) return false;
    return new Date(raw).getTime() <= this.nowMs;
  }
  categoryDisplayLabel(c) {
    if (String(c.id).toLowerCase() !== 'all') return c.label;
    return this.translate.instant('HOME_PAGE.CATEGORY_ALL');
  }
  trackById(_, x) {
    return x.id;
  }
  startClock() {
    if (this.clockSub) return;
    this.clockSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(1000).subscribe(() => {
      this.nowMs = Date.now();
      this.applyFilter();
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AllRafflesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AllRafflesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_home_home_api_service__WEBPACK_IMPORTED_MODULE_4__.HomeApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AllRafflesPage,
    selectors: [["app-all-raffles"]],
    standalone: false,
    decls: 25,
    vars: 24,
    consts: [["translucent", "true"], ["slot", "start"], ["defaultHref", "/tabs/home"], [1, "all-raffles", 3, "fullscreen"], [1, "screen"], [1, "status-filter"], ["type", "button", 1, "status-btn", 3, "click"], [1, "chips", "hide-scroll"], ["type", "button", "class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "bottom-spacer"], ["type", "button", 1, "chip", 3, "click"], ["class", "row-card skel", 4, "ngFor", "ngForOf"], [1, "row-card", "skel"], ["animated", "", 1, "sk-row-img"], [1, "row-body"], ["animated", "", 1, "sk", "sk-line", "lg"], ["animated", "", 1, "sk", "sk-line", "sm"], ["animated", "", 1, "sk", "sk-btn"], [1, "empty"], ["name", "ticket-outline", 1, "empty-icon"], ["class", "row-card", 3, "ended", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "row-card", 3, "click"], [1, "row-img"], [1, "row-title"], ["class", "row-sub", 4, "ngIf"], [1, "row-actions"], [1, "row-price"], ["type", "button", "class", "pill", 3, "click", 4, "ngIf"], ["class", "pill ended-pill", 4, "ngIf"], [1, "row-sub"], [3, "label", "value", "progress", "compact", 4, "ngIf"], ["class", "ended-label", 4, "ngIf"], [3, "label", "value", "progress", "compact"], [1, "ended-label"], ["type", "button", 1, "pill", 3, "click"], [1, "pill", "ended-pill"]],
    template: function AllRafflesPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 3)(8, "div", 4)(9, "div", 5)(10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllRafflesPage_Template_button_click_10_listener() {
          return ctx.setStatusFilter("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllRafflesPage_Template_button_click_13_listener() {
          return ctx.setStatusFilter("active");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllRafflesPage_Template_button_click_16_listener() {
          return ctx.setStatusFilter("ended");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AllRafflesPage_button_20_Template, 2, 3, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AllRafflesPage_ng_container_21_Template, 2, 2, "ng-container", 9)(22, AllRafflesPage_div_22_Template, 5, 3, "div", 10)(23, AllRafflesPage_ng_container_23_Template, 2, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 16, "ALL_RAFFLES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.statusFilter === "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 18, "ALL_RAFFLES.FILTER_ALL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.statusFilter === "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 20, "ALL_RAFFLES.FILTER_ACTIVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.statusFilter === "ended");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 22, "ALL_RAFFLES.FILTER_ENDED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.raffles.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _shared_ui_countdown_energy_countdown_energy_component__WEBPACK_IMPORTED_MODULE_9__.CountdownEnergyComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".all-raffles[_ngcontent-%COMP%] {\n  --bg: var(--app-bg);\n  --gold: var(--app-warning);\n  \n\n  \n\n  \n\n  \n\n  \n\n}\n.all-raffles[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.all-raffles[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: calc(env(safe-area-inset-top) + 14px) 16px 18px;\n  color: var(--app-ink);\n}\n.all-raffles[_ngcontent-%COMP%]   .hide-scroll[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n}\n.all-raffles[_ngcontent-%COMP%]   .hide-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.all-raffles[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 4px 0 12px;\n}\n.all-raffles[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 38px;\n  border-radius: 12px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-muted);\n  font-weight: 800;\n  font-size: 13px;\n  transition: 180ms ease;\n}\n.all-raffles[_ngcontent-%COMP%]   .status-btn.active[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n  border-color: var(--app-primary);\n  color: var(--app-on-primary);\n}\n.all-raffles[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 0 2px 14px;\n  overflow-x: auto;\n}\n.all-raffles[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 999px;\n  font-weight: 800;\n  font-size: 12px;\n  color: var(--app-ink);\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  white-space: nowrap;\n  transition: 180ms ease;\n}\n.all-raffles[_ngcontent-%COMP%]   .chip.active[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n  border-color: var(--app-border);\n  color: var(--app-on-primary);\n}\n.all-raffles[_ngcontent-%COMP%]   .row-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: opacity 180ms ease;\n}\n.all-raffles[_ngcontent-%COMP%]   .row-card.ended[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.all-raffles[_ngcontent-%COMP%]   .row-img[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 14px;\n  background-size: cover;\n  background-position: center;\n  flex: 0 0 62px;\n  overflow: hidden;\n}\n.all-raffles[_ngcontent-%COMP%]   .row-body[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.all-raffles[_ngcontent-%COMP%]   .row-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.all-raffles[_ngcontent-%COMP%]   .row-sub[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: 12px;\n  color: var(--app-muted);\n  font-weight: 700;\n}\n.all-raffles[_ngcontent-%COMP%]   .ended-label[_ngcontent-%COMP%] {\n  color: var(--app-danger);\n}\n.all-raffles[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.all-raffles[_ngcontent-%COMP%]   .row-price[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 14px;\n  color: var(--gold);\n}\n.all-raffles[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font-weight: 900;\n}\n.all-raffles[_ngcontent-%COMP%]   .ended-pill[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: var(--app-danger);\n  color: var(--app-danger);\n  font-size: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.all-raffles[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 20px;\n  color: var(--app-muted);\n  text-align: center;\n}\n.all-raffles[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.5;\n}\n.all-raffles[_ngcontent-%COMP%]   .row-card.skel[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.all-raffles[_ngcontent-%COMP%]   .sk[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 10px;\n  opacity: 0.75;\n}\n.all-raffles[_ngcontent-%COMP%]   .sk-row-img[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border-radius: 14px;\n  flex: 0 0 62px;\n}\n.all-raffles[_ngcontent-%COMP%]   .sk-line.lg[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 70%;\n  margin-top: 4px;\n}\n.all-raffles[_ngcontent-%COMP%]   .sk-line.sm[_ngcontent-%COMP%] {\n  height: 11px;\n  width: 45%;\n  margin-top: 6px;\n}\n.all-raffles[_ngcontent-%COMP%]   .sk-btn[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 90px;\n  border-radius: 999px;\n  margin-top: 10px;\n}\n.all-raffles[_ngcontent-%COMP%]   .bottom-spacer[_ngcontent-%COMP%] {\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWxsLXJhZmZsZXMvYWxsLXJhZmZsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQWtCQSxrQkFBQTtFQXlCQSxVQUFBO0VBMEJBLGNBQUE7RUFxRkEsZ0JBQUE7RUFnQkEsYUFBQTtBQXBLRjtBQUpFO0VBQ0UseUJBQUE7QUFNSjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0RBQUE7RUFDQSxxQkFBQTtBQUtKO0FBRkU7RUFDRSxxQkFBQTtBQUlKO0FBSEk7RUFBdUIsYUFBQTtBQU0zQjtBQUZFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQUlKO0FBREU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQUFFO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0FBRUo7QUFFRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURKO0FBSUU7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFGSjtBQU1FO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtBQUxKO0FBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxZQUFBO0VBQ0EsT0FBQTtBQVBKO0FBVUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFSSjtBQVdFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBVEo7QUFZRTtFQUNFLHdCQUFBO0FBVko7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBWEo7QUFjRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWko7QUFlRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWRKO0FBa0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBaEJKO0FBbUJFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFqQko7QUFxQkU7RUFDRSxvQkFBQTtBQW5CSjtBQXNCRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFwQko7QUF1QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXJCSjtBQXdCRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXRCSjtBQXlCRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXZCSjtBQTBCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQXhCSjtBQTJCRTtFQUNFLFlBQUE7QUF6QkoiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsLXJhZmZsZXMge1xyXG4gIC0tYmc6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1nb2xkOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuc2NyZWVuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDE0cHgpIDE2cHggMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICB9XHJcblxyXG4gIC5oaWRlLXNjcm9sbCB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICB9XHJcblxyXG4gIC8qIFNUQVRVUyBGSUxURVIgKi9cclxuICAuc3RhdHVzLWZpbHRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMCAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cy1idG4ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogMTgwbXMgZWFzZTtcclxuICB9XHJcblxyXG4gIC5zdGF0dXMtYnRuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAvKiBDSElQUyAqL1xyXG4gIC5jaGlwcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMCAycHggMTRweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2hpcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zaXRpb246IDE4MG1zIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuY2hpcC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtb24tcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAvKiBST1cgQ0FSRFMgKi9cclxuICAucm93LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE4MG1zIGVhc2U7XHJcbiAgfVxyXG5cclxuICAucm93LWNhcmQuZW5kZWQge1xyXG4gICAgb3BhY2l0eTogMC41NTtcclxuICB9XHJcblxyXG4gIC5yb3ctaW1nIHtcclxuICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAwIDAgNjJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAucm93LWJvZHkge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5yb3ctdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG5cclxuICAucm93LXN1YiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuZW5kZWQtbGFiZWwge1xyXG4gICAgY29sb3I6IHZhcigtLWFwcC1kYW5nZXIpO1xyXG4gIH1cclxuXHJcbiAgLnJvdy1hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5yb3ctcHJpY2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcclxuICB9XHJcblxyXG4gIC5waWxsIHtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG5cclxuICAuZW5kZWQtcGlsbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgICBjb2xvcjogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8qIEVNUFRZIFNUQVRFICovXHJcbiAgLmVtcHR5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmVtcHR5LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgLyogU0tFTEVUT04gKi9cclxuICAucm93LWNhcmQuc2tlbCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gIH1cclxuXHJcbiAgLnNrLXJvdy1pbWcge1xyXG4gICAgd2lkdGg6IDYycHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgZmxleDogMCAwIDYycHg7XHJcbiAgfVxyXG5cclxuICAuc2stbGluZS5sZyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNrLWxpbmUuc20ge1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcblxyXG4gIC5zay1idG4ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXNwYWNlciB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 4144
/*!***************************************************!*\
  !*** ./src/app/services/home/home-api.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeApiService: () => (/* binding */ HomeApiService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3255);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_core_constants_raffle_categories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/constants/raffle-categories */ 6031);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var src_app_shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/storage/app-storage.service */ 2450);
/* harmony import */ var _offline_network_status_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../offline/network-status.service */ 9669);

var _staticBlock;









class HomeApiService {
  constructor(http, storage, networkStatus) {
    this.http = http;
    this.storage = storage;
    this.networkStatus = networkStatus;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.apiBaseUrl;
    this.homeFeedCache = new Map();
    this.homeFeedTtlMs = 45_000;
    this.storagePrefix = 'offline:home-feed:';
  }
  normalizeCategoryId(categoryId) {
    const normalized = String(categoryId ?? '').trim();
    if (!normalized) return null;
    if (normalized.toLowerCase() === 'all') return null;
    return normalized.toUpperCase();
  }
  buildPublicRafflesParams(sort, limit, categoryId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('sort', sort).set('limit', String(limit));
    const normalizedCategoryId = this.normalizeCategoryId(categoryId);
    if (normalizedCategoryId) {
      params = params.set('category', normalizedCategoryId);
    }
    return params;
  }
  buildHomeFeedParams(categoryId, region) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    const normalizedCategoryId = this.normalizeCategoryId(categoryId);
    if (normalizedCategoryId) {
      params = params.set('category', normalizedCategoryId);
    }
    const normalizedRegion = String(region ?? '').trim();
    if (normalizedRegion) {
      params = params.set('region', normalizedRegion.toUpperCase());
    }
    return params;
  }
  homeFeedCacheKey(categoryId, region) {
    const normalizedRegion = String(region ?? '').trim().toUpperCase();
    return `${this.normalizeCategoryId(categoryId) ?? 'ALL'}|${normalizedRegion || 'ANY'}`;
  }
  // Header user
  getUserSummary() {
    return this.http.get(`${this.baseUrl}/users/me`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(raw => {
      const avatarUrl = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_13__.toAbsoluteMediaUrl)(raw?.avatarUrl ?? raw?.avatar, this.baseUrl);
      const avatar = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_13__.toAbsoluteMediaUrl)(raw?.avatar ?? raw?.avatarUrl, this.baseUrl);
      return {
        ...raw,
        avatarUrl: avatarUrl ?? raw?.avatarUrl,
        avatar: avatar ?? raw?.avatar
      };
    }));
  }
  // Categories (mock)
  getCategories() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(src_app_core_constants_raffle_categories__WEBPACK_IMPORTED_MODULE_12__.HOME_CATEGORY_OPTIONS);
  }
  getHomeFeed(categoryId, options) {
    const cacheKey = this.homeFeedCacheKey(categoryId, options?.region);
    const now = Date.now();
    const cached = this.homeFeedCache.get(cacheKey);
    if (!options?.forceRefresh && cached && cached.expiresAt > now) {
      return cached.value$;
    }
    const params = this.buildHomeFeedParams(categoryId, options?.region);
    const request$ = this.http.get(`${this.baseUrl}/raffles/home-feed`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(res => ({
      endingSoon: (res?.endingSoon ?? []).map(row => this.toCard(row)),
      liveRows: (res?.liveRows ?? []).map(row => this.toCard(row))
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(feed => void this.persistHomeFeed(cacheKey, feed)), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => this.recoverHomeFeed(error, categoryId, cacheKey)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.shareReplay)({
      bufferSize: 1,
      refCount: false
    }));
    const preferStored = !options?.forceRefresh && (this.networkStatus.isOffline() || this.networkStatus.isConstrained());
    const value$ = preferStored ? this.loadStoredHomeFeed(cacheKey).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(cached => cached ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(cached.value) : request$), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.shareReplay)({
      bufferSize: 1,
      refCount: false
    })) : request$;
    this.homeFeedCache.set(cacheKey, {
      expiresAt: now + this.homeFeedTtlMs,
      value$: value$
    });
    return value$;
  }
  // ✅ Nettoyage URL (évite /null 404)
  cleanUrl(u) {
    return (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_13__.toAbsoluteMediaUrl)(u, this.baseUrl);
  }
  // ✅ ICI on fait EXACTEMENT le mapping comme raffle-details
  toCard(raw) {
    const product = raw?.product ?? raw?.productId ?? raw?.productRef ?? {};
    const mappedPrice = Number(raw?.ticketPrice ?? raw?.ticket_price ?? raw?.price ?? product?.ticketPrice ?? 0);
    const mappedCurrency = String(raw?.currency ?? raw?.ticketCurrency ?? product?.currency ?? 'XAF');
    return {
      id: String(raw?._id ?? raw?.id ?? ''),
      title: String(product?.title ?? raw?.title ?? '—'),
      subtitle: String(product?.description ?? raw?.subtitle ?? ''),
      imageUrl: this.cleanUrl(product?.imageUrl ?? product?.image ?? raw?.imageUrl ?? raw?.image),
      categoryId: String(product?.categoryId ?? raw?.categoryId ?? '').toUpperCase() || undefined,
      // ✅ sold/total corrects (sinon tu vois 0/0)
      sold: Number(raw?.ticketsSold ?? raw?.sold ?? 0),
      total: Number(raw?.totalTickets ?? raw?.total ?? 0),
      // ✅ LE POINT IMPORTANT : prix + monnaie
      ticketPrice: Number.isFinite(mappedPrice) ? mappedPrice : 0,
      currency: mappedCurrency || 'XAF',
      // ✅ date fin (ton modèle s’appelle endsAt côté front)
      startAt: raw?.startAt ?? undefined,
      endsAt: raw?.endAt ?? raw?.endsAt ?? undefined,
      badgeText: raw?.badge ?? raw?.badgeText ?? undefined,
      badgeType: raw?.badgeType ?? 'warn'
    };
  }
  // Ending soon
  getEndingSoon(categoryId) {
    const params = this.buildPublicRafflesParams('endAt', 10, categoryId);
    // ✅ IMPORTANT : on map ici
    return this.http.get(`${this.baseUrl}/raffles/public`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(rows => (rows ?? []).map(r => this.toCard(r))));
  }
  // Live rows
  getLiveRows(categoryId) {
    const params = this.buildPublicRafflesParams('createdAt', 30, categoryId);
    // ✅ IMPORTANT : on map ici
    return this.http.get(`${this.baseUrl}/raffles/public`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(rows => (rows ?? []).map(r => this.toCard(r))));
  }
  loadLegacyHomeFeed(categoryId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      endingSoon: this.getEndingSoon(categoryId),
      liveRows: this.getLiveRows(categoryId)
    });
  }
  persistHomeFeed(cacheKey, feed) {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const payload = {
        savedAt: new Date().toISOString(),
        value: feed
      };
      yield _this.storage.setJson(`${_this.storagePrefix}${cacheKey}`, payload);
    })();
  }
  loadStoredHomeFeed(cacheKey) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.storage.getJson(`${this.storagePrefix}${cacheKey}`));
  }
  recoverHomeFeed(error, categoryId, cacheKey) {
    const status = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse ? error.status : 0;
    const recovery$ = [404, 405].includes(status) ? this.loadLegacyHomeFeed(categoryId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(feed => void this.persistHomeFeed(cacheKey, feed))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    return recovery$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(recoveryError => this.loadStoredHomeFeed(cacheKey).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(cached => cached ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(cached.value) : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => recoveryError)))));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function HomeApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_15__.AppStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_offline_network_status_service__WEBPACK_IMPORTED_MODULE_16__.NetworkStatusService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: HomeApiService,
    factory: HomeApiService.ɵfac,
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

/***/ },

/***/ 1962
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 5152);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ },

/***/ 9240
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 4876);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ },

/***/ 4876
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 3942);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ 9397);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 5602);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ },

/***/ 9103
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ },

/***/ 2083
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 9103);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 8113);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 967);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ },

/***/ 2400
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1962);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ },

/***/ 8473
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction);
const async = asyncScheduler;

/***/ },

/***/ 8113
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ },

/***/ 5602
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }

}]);
//# sourceMappingURL=src_app_pages_all-raffles_all-raffles_module_ts.js.map