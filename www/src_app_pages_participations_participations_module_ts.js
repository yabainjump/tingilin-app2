"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_participations_participations_module_ts"],{

/***/ 3205
/*!***********************************************************************!*\
  !*** ./src/app/pages/participations/participations-routing.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticipationsPageRoutingModule: () => (/* binding */ ParticipationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _participations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./participations.page */ 8007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _participations_page__WEBPACK_IMPORTED_MODULE_1__.ParticipationsPage
}];
class ParticipationsPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ParticipationsPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParticipationsPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ParticipationsPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ParticipationsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 8204
/*!***************************************************************!*\
  !*** ./src/app/pages/participations/participations.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticipationsPageModule: () => (/* binding */ ParticipationsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _participations_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participations-routing.module */ 3205);
/* harmony import */ var _participations_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participations.page */ 8007);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class ParticipationsPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ParticipationsPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParticipationsPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: ParticipationsPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _participations_routing_module__WEBPACK_IMPORTED_MODULE_3__.ParticipationsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ParticipationsPageModule, {
    declarations: [_participations_page__WEBPACK_IMPORTED_MODULE_4__.ParticipationsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _participations_routing_module__WEBPACK_IMPORTED_MODULE_3__.ParticipationsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent]
  });
})();

/***/ },

/***/ 8007
/*!*************************************************************!*\
  !*** ./src/app/pages/participations/participations.page.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticipationsPage: () => (/* binding */ ParticipationsPage)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_participations_participations_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/participations/participations-api.service */ 5622);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);

var _staticBlock;











const _c0 = () => [1, 2, 3];
function ParticipationsPage_ng_container_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 19);
  }
}
function ParticipationsPage_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ParticipationsPage_ng_container_49_div_1_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
  }
}
function ParticipationsPage_ng_container_50_app_empty_state_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-empty-state", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "PARTICIPATIONS_PAGE.EMPTY"));
  }
}
function ParticipationsPage_ng_container_50_article_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "PARTICIPATIONS_PAGE.LIVE"));
  }
}
function ParticipationsPage_ng_container_50_article_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "PARTICIPATIONS_PAGE.WON"));
  }
}
function ParticipationsPage_ng_container_50_article_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "PARTICIPATIONS_PAGE.LOST"));
  }
}
function ParticipationsPage_ng_container_50_article_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 27)(5, "div", 28)(6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ParticipationsPage_ng_container_50_article_2_div_9_Template, 3, 3, "div", 30)(10, ParticipationsPage_ng_container_50_article_2_div_10_Template, 3, 3, "div", 31)(11, ParticipationsPage_ng_container_50_article_2_div_11_Template, 3, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 36)(20, "div", 37)(21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 42)(30, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ParticipationsPage_ng_container_50_article_2_Template_button_click_30_listener() {
      const it_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.openDetails(it_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const it_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-image", "url(" + ((it_r2.raffle == null ? null : it_r2.raffle.imageUrl) || "assets/img/placeholder.png") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((it_r2.raffle == null ? null : it_r2.raffle.title) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, "PARTICIPATIONS_PAGE.RAFFLE_FALLBACK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !it_r2.isCompleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", it_r2.isCompleted && it_r2.result === "WIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", it_r2.isCompleted && it_r2.result === "LOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](it_r2.maskedTicketRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", it_r2.ticketsCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 16, "PARTICIPATIONS_PAGE.TICKETS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 18, "PARTICIPATIONS_PAGE.DRAW_PROGRESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 20, it_r2.progressPct, "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", it_r2.progressPct, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 23, "PARTICIPATIONS_PAGE.DETAILS"), " ");
  }
}
function ParticipationsPage_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ParticipationsPage_ng_container_50_app_empty_state_1_Template, 2, 3, "app-empty-state", 20)(2, ParticipationsPage_ng_container_50_article_2_Template, 34, 25, "article", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filtered.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.filtered)("ngForTrackBy", ctx_r2.trackByItem);
  }
}
const COMPLETED_STATUSES = ['CLOSED', 'DRAWN', 'FINISHED', 'ENDED'];
class ParticipationsPage {
  constructor(participationsApi, router, toast, translate) {
    this.participationsApi = participationsApi;
    this.router = router;
    this.toast = toast;
    this.translate = translate;
    this.loading = true;
    this.filter = 'ongoing';
    this.items = [];
  }
  ionViewWillEnter() {
    this.load();
  }
  get filtered() {
    const completed = this.filter === 'completed';
    return this.items.filter(i => i.isCompleted === completed);
  }
  get ongoingCount() {
    return this.items.filter(item => !item.isCompleted).length;
  }
  get completedCount() {
    return this.items.filter(item => item.isCompleted).length;
  }
  get totalTicketsCount() {
    return this.items.reduce((sum, item) => sum + item.ticketsCount, 0);
  }
  load() {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.participationsApi.overview());
        const items = (res?.data ?? []).map(item => _this.toParticipationItem(item));
        // tri par ticket le plus recent (lastTicketAt ISO -> localeCompare)
        items.sort((a, b) => {
          const aAt = a.lastTicketAt || '';
          const bAt = b.lastTicketAt || '';
          if (aAt !== bAt) return bAt.localeCompare(aAt);
          return (b.createdTs || '').localeCompare(a.createdTs || '');
        });
        _this.items = items;
      } catch (e) {
        const t = yield _this.toast.create({
          message: e?.error?.message || _this.translate.instant('PARTICIPATIONS_PAGE.TOAST_LOAD_FAILED'),
          duration: 1600
        });
        yield t.present();
      } finally {
        _this.loading = false;
      }
    })();
  }
  toParticipationItem(item) {
    const raffle = item.raffle ?? null;
    const st = String(raffle?.status || '').toUpperCase();
    const total = Number(raffle?.total || 0);
    const sold = Number(raffle?.sold || 0);
    return {
      raffleId: item.raffleId,
      raffle: raffle ? {
        ...raffle,
        id: String(raffle.id ?? item.raffleId),
        imageUrl: (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteMediaUrl)(raffle.imageUrl, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseUrl) ?? raffle.imageUrl
      } : undefined,
      ticketsCount: Number(item.ticketsCount || 0),
      maskedTicketRef: this.maskSerial(item.firstSerial ?? ''),
      isCompleted: COMPLETED_STATUSES.includes(st),
      progressPct: total > 0 ? Math.max(0, Math.min(100, sold / total * 100)) : 0,
      result: 'NONE',
      lastTicketAt: item.lastTicketAt,
      createdTs: item.createdTs
    };
  }
  openDetails(item) {
    this.router.navigate(['/tabs/ticket-details', item.raffleId]);
  }
  maskSerial(serial) {
    if (!serial) return this.translate.instant('PARTICIPATIONS_PAGE.TICKET_FALLBACK');
    // ex: TGL-63F708-444ABDEB -> TGL-63F7...BDEB
    const clean = String(serial);
    const label = this.translate.instant('PARTICIPATIONS_PAGE.TICKET');
    if (clean.length <= 10) return `${label} #${clean}`;
    return `${label} #${clean.slice(0, 8)}...${clean.slice(-4)}`;
  }
  trackByItem(_, item) {
    return item.raffleId;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ParticipationsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParticipationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_participations_participations_api_service__WEBPACK_IMPORTED_MODULE_6__.ParticipationsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ParticipationsPage,
    selectors: [["app-participations"]],
    standalone: false,
    decls: 51,
    vars: 34,
    consts: [["translucent", "true", 1, "hdr"], ["slot", "start"], ["defaultHref", "/tabs/home"], [1, "bg", 3, "fullscreen"], [1, "screen"], [1, "hero-panel"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-stats"], [1, "stat-chip"], [1, "label"], [1, "value"], [1, "stat-chip", "accent"], [1, "toggle"], ["mode", "md", 1, "seg", 3, "ngModelChange", "ngModel"], ["value", "ongoing"], ["value", "completed"], [4, "ngIf"], ["class", "skel-card", 4, "ngFor", "ngForOf"], [1, "skel-card"], ["icon", "ticket-outline", 3, "title", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["icon", "ticket-outline", 3, "title"], [1, "card"], [1, "glow"], [1, "top"], [1, "img"], [1, "info"], [1, "row"], [1, "title"], ["class", "badge vip", 4, "ngIf"], ["class", "badge win", 4, "ngIf"], ["class", "badge lose", 4, "ngIf"], [1, "ref"], [1, "tickets"], ["name", "ticket"], [1, "prog"], [1, "prog-row"], [1, "muted"], [1, "pct"], [1, "bar"], [1, "fill"], [1, "actions"], ["type", "button", 1, "btn", 3, "click"], ["name", "chevron-forward"], [1, "badge", "vip"], [1, "badge", "win"], [1, "badge", "lose"]],
    template: function ParticipationsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 3)(8, "div", 4)(9, "section", 5)(10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 9)(28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 12)(34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 13)(40, "ion-segment", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ParticipationsPage_Template_ion_segment_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filter, $event) || (ctx.filter = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ion-segment-button", 15)(42, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ion-segment-button", 16)(46, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ParticipationsPage_ng_container_49_Template, 2, 2, "ng-container", 17)(50, ParticipationsPage_ng_container_50_Template, 3, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 16, "PARTICIPATIONS_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 18, "PARTICIPATIONS_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 20, "PARTICIPATIONS_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 22, "PARTICIPATIONS_PAGE.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 24, "PARTICIPATIONS_PAGE.ONGOING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.ongoingCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 26, "PARTICIPATIONS_PAGE.COMPLETED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.completedCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 28, "PARTICIPATIONS_PAGE.TICKETS_PLAYED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.totalTicketsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](44, 30, "PARTICIPATIONS_PAGE.ONGOING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 32, "PARTICIPATIONS_PAGE.COMPLETED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_12__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --primary-2: var(--app-primary-soft);\n  --blue: var(--app-primary);\n  --bg: var(--app-bg);\n  --bg-2: var(--app-bg);\n  --card: var(--app-surface);\n  --card-strong: var(--app-surface-2);\n  --stroke: var(--app-border);\n  --text: var(--app-ink);\n  --muted: var(--app-muted);\n}\n\n.hdr[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  --color: var(--text);\n  --border-color: transparent;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.hdr[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%], \n.hdr[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n\n.bg[_ngcontent-%COMP%] {\n  --background: transparent;\n  background: transparent;\n  color: var(--text);\n}\n\n.screen[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0 auto;\n  padding: calc(env(safe-area-inset-top) + 18px) 16px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.hero-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 26px;\n  background: var(--card-strong);\n  border: 1px solid var(--app-border-strong);\n  box-shadow: none;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero-panel[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.hero-copy[_ngcontent-%COMP%], \n.hero-stats[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-primary);\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 12px 0 8px;\n  font-size: clamp(28px, 7vw, 34px);\n  line-height: 0.98;\n  letter-spacing: -0.04em;\n}\n\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n  line-height: 1.5;\n}\n\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.stat-chip[_ngcontent-%COMP%] {\n  min-width: 90px;\n  padding: 12px 14px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--stroke);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.stat-chip.accent[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  border-color: var(--app-border-strong);\n}\n\n.stat-chip[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--app-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n\n.stat-chip[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--text);\n}\n\n.toggle[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n\n.seg[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  border: 1px solid var(--stroke);\n  border-radius: 16px;\n  padding: 4px;\n}\n\nion-segment-button[_ngcontent-%COMP%] {\n  --color: var(--app-ink);\n  --color-checked: var(--app-primary);\n  --indicator-color: var(--app-surface);\n  min-height: 44px;\n  font-weight: 800;\n}\n\n.card[_ngcontent-%COMP%], \n.skel-card[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 24px;\n  background: var(--card-strong);\n  border: 1px solid var(--stroke);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.top[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 18px;\n  background-size: cover;\n  background-position: center;\n  border: 1px solid var(--app-border);\n  box-shadow: none;\n}\n\n.info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: flex-start;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 17px;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n\n.ref[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: var(--app-muted);\n}\n\n.tickets[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n  color: var(--app-primary);\n  font-weight: 800;\n  padding: 8px 10px;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 900;\n  padding: 6px 10px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n}\n\n.badge.vip[_ngcontent-%COMP%] {\n  background: var(--app-warning-soft);\n  color: var(--app-warning);\n  border-color: var(--app-warning);\n}\n\n.badge.win[_ngcontent-%COMP%] {\n  background: var(--app-success-soft);\n  color: var(--app-success);\n  border-color: var(--app-success);\n}\n\n.badge.lose[_ngcontent-%COMP%] {\n  background: var(--app-danger-soft);\n  color: var(--app-danger);\n  border-color: var(--app-danger);\n}\n\n.prog[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n.prog-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  font-size: 12px;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n  font-weight: 700;\n}\n\n.pct[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n  font-weight: 900;\n}\n\n.bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  height: 10px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  overflow: hidden;\n  border: 1px solid var(--app-border);\n}\n\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0%;\n  background: var(--app-primary);\n  box-shadow: none;\n  border-radius: 999px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 0;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  font-weight: 800;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  box-shadow: none;\n}\n\n.skel-card[_ngcontent-%COMP%] {\n  height: 148px;\n  background: transparent;\n  background-size: 220px 100%, 100% 100%;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_shimmer 1.2s linear infinite;\n}\n\n.empty[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 34px 22px;\n  display: grid;\n  place-items: center;\n  gap: 12px;\n  text-align: center;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  border-radius: 20px;\n  display: grid;\n  place-items: center;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-primary);\n}\n\n.empty-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.empty-copy[_ngcontent-%COMP%] {\n  color: var(--muted);\n  line-height: 1.45;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: -220px 0, 0 0;\n  }\n  to {\n    background-position: calc(100% + 220px) 0, 0 0;\n  }\n}\n@media (max-width: 640px) {\n  .screen[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n  .hero-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFydGljaXBhdGlvbnMvcGFydGljaXBhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSx1QkFDRTtFQUNGLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3REFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUFxQixhQUFBO0FBQ3JCOztBQUNBOztFQUVFLGtCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLHNDQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBOzs7RUFHRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7QUFFRjs7QUFDQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUNBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUNFO0VBQ0Ysc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtDQUFBO0VBQ0Y7RUFDQTtJQUNFLDhDQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxvQkFBQTtFQUFGO0VBR0E7SUFDRSxzQkFBQTtFQURGO0VBSUE7SUFDRSxXQUFBO0lBQ0EsMkJBQUE7RUFGRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tcHJpbWFyeTogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIC0tcHJpbWFyeS0yOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICAtLWJsdWU6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAtLWJnOiB2YXIoLS1hcHAtYmcpO1xyXG4gIC0tYmctMjogdmFyKC0tYXBwLWJnKTtcclxuICAtLWNhcmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAtLWNhcmQtc3Ryb25nOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICAtLXN0cm9rZTogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgLS10ZXh0OiB2YXIoLS1hcHAtaW5rKTtcclxuICAtLW11dGVkOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uaGRyIGlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1jb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmhkciBpb24tdGl0bGUsXHJcbi5oZHIgaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4uc2NyZWVuIHtcclxuICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMThweCkgMTZweCAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcbi5oZXJvLXBhbmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDE2cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtc3Ryb25nKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tcGFuZWw6OmFmdGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmhlcm8tY29weSxcclxuLmhlcm8tc3RhdHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGVyby1jb3B5IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leWVicm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhlcm8tY29weSBoMSB7XHJcbiAgbWFyZ2luOiAxMnB4IDAgOHB4O1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjhweCwgN3Z3LCAzNHB4KTtcclxuICBsaW5lLWhlaWdodDogMC45ODtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcclxufVxyXG5cclxuLmhlcm8tY29weSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uaGVyby1zdGF0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zdGF0LWNoaXAge1xyXG4gIG1pbi13aWR0aDogOTBweDtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLnN0YXQtY2hpcC5hY2NlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG59XHJcblxyXG4uc3RhdC1jaGlwIC5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi5zdGF0LWNoaXAgLnZhbHVlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4uc2VnIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gIC0tY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgbWluLWhlaWdodDogNDRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY2FyZCxcclxuLnNrZWwtY2FyZCxcclxuLmVtcHR5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtc3Ryb25nKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmdsb3cge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xyXG59XHJcblxyXG4ucmVmIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4udGlja2V0cyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBnYXA6IDhweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbn1cclxuXHJcbi5iYWRnZS52aXAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC13YXJuaW5nLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbn1cclxuXHJcbi5iYWRnZS53aW4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdWNjZXNzLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5iYWRnZS5sb3NlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZGFuZ2VyLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtZGFuZ2VyKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1kYW5nZXIpO1xyXG59XHJcblxyXG4ucHJvZyB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLnByb2ctcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm11dGVkIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucGN0IHtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxufVxyXG5cclxuLmZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBnYXA6IDZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5za2VsLWNhcmQge1xyXG4gIGhlaWdodDogMTQ4cHg7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjIwcHggMTAwJSwgMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uZW1wdHkge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMzRweCAyMnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZW1wdHktaWNvbiB7XHJcbiAgd2lkdGg6IDY4cHg7XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZW1wdHktaWNvbiBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uZW1wdHktY29weSB7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBsaW5lLWhlaWdodDogMS40NTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjBweCAwLCAwIDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSArIDIyMHB4KSAwLCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuc2NyZWVuIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tcGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5oZXJvLXN0YXRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 5622
/*!***********************************************************************!*\
  !*** ./src/app/services/participations/participations-api.service.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParticipationsApiService: () => (/* binding */ ParticipationsApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;



class ParticipationsApiService {
  constructor(http) {
    this.http = http;
    this.base = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  overview() {
    return this.http.get(`${this.base}/participations/me/overview`);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ParticipationsApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ParticipationsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ParticipationsApiService,
    factory: ParticipationsApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 6619
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/empty-state/empty-state.component.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyStateComponent: () => (/* binding */ EmptyStateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;






function EmptyStateComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
  }
}
function EmptyStateComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmptyStateComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.action.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.actionLabel);
  }
}
class EmptyStateComponent {
  constructor() {
    this.icon = 'sparkles-outline';
    this.title = '';
    this.description = '';
    this.actionLabel = '';
    this.compact = false;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function EmptyStateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmptyStateComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EmptyStateComponent,
    selectors: [["app-empty-state"]],
    inputs: {
      icon: "icon",
      title: "title",
      description: "description",
      actionLabel: "actionLabel",
      compact: "compact"
    },
    outputs: {
      action: "action"
    },
    decls: 8,
    vars: 6,
    consts: [["role", "status", 1, "empty-state"], ["aria-hidden", "true", 1, "icon-shell"], [1, "icon-glow"], [3, "name"], [4, "ngIf"], ["type", "button", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], ["name", "arrow-forward-outline"]],
    template: function EmptyStateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2)(3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmptyStateComponent_p_6_Template, 2, 1, "p", 4)(7, EmptyStateComponent_button_7_Template, 4, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("compact", ctx.compact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actionLabel);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(34px, 9vw, 56px) 22px;\n  text-align: center;\n  border: 1px dashed var(--app-border-strong);\n  border-radius: 28px;\n  background: var(--app-surface-2);\n}\n\n.empty-state.compact[_ngcontent-%COMP%] {\n  padding: 26px 18px;\n  border-radius: 22px;\n}\n\n.empty-state.compact[_ngcontent-%COMP%]   .icon-shell[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-bottom: 14px;\n  border-radius: 20px;\n}\n\n.empty-state.compact[_ngcontent-%COMP%]   .icon-shell[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.icon-shell[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 18px;\n  border: 1px solid var(--app-border-strong);\n  border-radius: 24px;\n  color: var(--app-primary);\n  background: transparent;\n  box-shadow: none;\n}\n\n.icon-shell[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 30px;\n}\n\n.icon-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-ink);\n  font-size: 1.05rem;\n  line-height: 1.3;\n}\n\np[_ngcontent-%COMP%] {\n  max-width: 320px;\n  margin: 8px 0 0;\n  color: var(--app-muted);\n  font-size: 0.86rem;\n  line-height: 1.6;\n}\n\nbutton[_ngcontent-%COMP%] {\n  min-height: 44px;\n  margin-top: 20px;\n  padding: 0 18px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 0;\n  border-radius: 15px;\n  color: var(--app-on-primary);\n  background: var(--app-primary);\n  box-shadow: var(--app-shadow-brand);\n  font-weight: 750;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2VtcHR5LXN0YXRlL2VtcHR5LXN0YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogY2xhbXAoMzRweCwgOXZ3LCA1NnB4KSAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZS5jb21wYWN0IHtcclxuICBwYWRkaW5nOiAyNnB4IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlLmNvbXBhY3QgLmljb24tc2hlbGwge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZS5jb21wYWN0IC5pY29uLXNoZWxsIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi5pY29uLXNoZWxsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDcycHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmljb24tc2hlbGwgaW9uLWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmljb24tZ2xvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMCAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LWJyYW5kKTtcclxuICBmb250LXdlaWdodDogNzUwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
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
//# sourceMappingURL=src_app_pages_participations_participations_module_ts.js.map