"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_notifications_notifications_module_ts"],{

/***/ 7843
/*!*********************************************************************!*\
  !*** ./src/app/pages/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPageRoutingModule: () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 5925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage
}];
class NotificationsPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: NotificationsPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NotificationsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 5746
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPageModule: () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-routing.module */ 7843);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.page */ 5925);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class NotificationsPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: NotificationsPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__.NotificationsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NotificationsPageModule, {
    declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_4__.NotificationsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__.NotificationsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent]
  });
})();

/***/ },

/***/ 5925
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPage: () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_notifications_notifications_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notifications/notifications-api.service */ 7316);
/* harmony import */ var src_app_services_notifications_notifications_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notifications/notifications-state.service */ 2050);
/* harmony import */ var src_app_services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/offline/network-status.service */ 9669);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);

var _staticBlock;










function NotificationsPage_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "NOTIFICATIONS_PAGE.SYNC"));
  }
}
function NotificationsPage_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "OFFLINE.NOTIFICATIONS_QUEUED"), " ");
  }
}
function NotificationsPage_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 25);
  }
}
function NotificationsPage_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NotificationsPage_div_38_div_1_Template, 1, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.skeletonItems);
  }
}
function NotificationsPage_app_empty_state_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-empty-state", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "NOTIFICATIONS_PAGE.EMPTY"));
  }
}
function NotificationsPage_div_40_article_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "NOTIFICATIONS_PAGE.NEW"), " ");
  }
}
function NotificationsPage_div_40_article_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationsPage_div_40_article_1_div_16_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const n_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      ctx_r0.open(n_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lbl_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", lbl_r5, " ");
  }
}
function NotificationsPage_div_40_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationsPage_div_40_article_1_Template_article_click_0_listener() {
      const n_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.open(n_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 32)(4, "div", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 36)(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NotificationsPage_div_40_article_1_span_13_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NotificationsPage_div_40_article_1_div_16_Template, 3, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("unread", ctx_r0.isUnread(n_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.toneClass(n_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r0.iconName(n_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.typeLabel(n_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 10, n_r3.createdAt, "dd MMM, HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](n_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isUnread(n_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](n_r3.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.actionLabel(n_r3));
  }
}
function NotificationsPage_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NotificationsPage_div_40_article_1_Template, 17, 13, "article", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.items)("ngForTrackBy", ctx_r0.trackById);
  }
}
class NotificationsPage {
  constructor(api, state, networkStatus, router, toast, translate) {
    this.api = api;
    this.state = state;
    this.networkStatus = networkStatus;
    this.router = router;
    this.toast = toast;
    this.translate = translate;
    this.loading = true;
    this.refreshing = false;
    this.markingAll = false;
    this.items = [];
    this.skeletonItems = [1, 2, 3, 4];
    this.isOffline$ = this.networkStatus.offline$;
    this.knownUnreadCount = 0;
    // Notifs lues localement (anti-course: un rechargement qui devance le PATCH
    // mark-read ne doit pas les reafficher "non-lues").
    this.locallyReadIds = new Set();
  }
  ionViewWillEnter() {
    void this.load(undefined, this.items.length > 0);
  }
  load(_x) {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev, preserveContent = false) {
      if (!preserveContent || _this.items.length === 0) {
        _this.loading = true;
      } else {
        _this.refreshing = true;
      }
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.api.me(1, 30, false));
        _this.items = res.data || [];
        // Reconciliation anti-course + bornage du Set: garde "lues" les notifs
        // lues localement meme si le backend renvoie encore readAt=null (PATCH pas
        // encore committe), et on RECONSTRUIT locallyReadIds avec uniquement les
        // ids encore "en attente" (presents ET non confirmes lus). Purge auto des
        // confirmes, des absents et des ids d'un autre compte -> Set toujours borne.
        let unread = Math.max(0, Number(res.unreadCount ?? 0));
        if (_this.locallyReadIds.size) {
          const pending = new Set();
          for (const item of _this.items) {
            if (!_this.locallyReadIds.has(item._id)) continue;
            if (item.readAt) continue; // backend confirme lu -> plus besoin
            item.readAt = new Date().toISOString();
            unread = Math.max(0, unread - 1);
            pending.add(item._id); // toujours en attente de confirmation backend
          }
          _this.locallyReadIds = pending;
        }
        _this.knownUnreadCount = unread;
        _this.state.setLocal(_this.knownUnreadCount);
      } catch (e) {
        const t = yield _this.toast.create({
          message: e?.error?.message || _this.translate.instant('NOTIFICATIONS_PAGE.TOAST_LOAD_FAILED'),
          duration: 1400
        });
        yield t.present();
      } finally {
        _this.loading = false;
        _this.refreshing = false;
        ev?.target?.complete?.();
      }
    }).apply(this, arguments);
  }
  markAllRead() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.markingAll) return;
      const previousItems = _this2.items.map(n => ({
        ...n
      }));
      const previousUnreadCount = _this2.knownUnreadCount;
      const hadUnread = previousItems.some(n => !n.readAt);
      if (!hadUnread) return;
      _this2.markingAll = true;
      const readAt = new Date().toISOString();
      _this2.items = _this2.items.map(n => ({
        ...n,
        readAt: n.readAt || readAt
      }));
      _this2.knownUnreadCount = 0;
      _this2.state.markAllReadLocal();
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this2.api.markAllRead());
      } catch (e) {
        _this2.items = previousItems;
        _this2.knownUnreadCount = previousUnreadCount;
        _this2.state.setLocal(previousUnreadCount);
        const t = yield _this2.toast.create({
          message: e?.error?.message || _this2.translate.instant('NOTIFICATIONS_PAGE.TOAST_LOAD_FAILED'),
          duration: 1600,
          position: 'top'
        });
        yield t.present();
      } finally {
        _this2.markingAll = false;
      }
    })();
  }
  open(n) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!n.readAt) {
        const previousReadAt = n.readAt;
        const previousUnreadCount = _this3.knownUnreadCount;
        n.readAt = new Date().toISOString(); // maj optimiste (UI instantanee)
        _this3.locallyReadIds.add(n._id);
        _this3.knownUnreadCount = Math.max(0, _this3.knownUnreadCount - 1);
        _this3.state.markOneReadLocal();
        // On ATTEND la persistance avant de naviguer: sinon un retour rapide sur
        // la page recharge la liste (GET) et peut gagner la course contre le PATCH
        // mark-read encore en vol -> la notif reapparait "non-lue".
        // Borne a 1.2s pour ne jamais bloquer la navigation sur reseau lent
        // (le mark-read continue en arriere-plan / via la file offline).
        let timer;
        const timeout = new Promise(resolve => {
          timer = setTimeout(resolve, 1200);
        });
        try {
          yield Promise.race([_this3.persistReadState(n, previousReadAt, previousUnreadCount), timeout]);
        } finally {
          if (timer) clearTimeout(timer); // evite un timer/closure qui traine
        }
      }
      const deepLink = n?.data?.deepLink;
      if (deepLink) {
        _this3.router.navigateByUrl(deepLink);
        return;
      }
      const raffleId = n?.data?.raffleId;
      if (raffleId) {
        _this3.router.navigate(['/tabs/ticket-details', raffleId]);
      }
    })();
  }
  isUnread(n) {
    return !n.readAt;
  }
  get hasUnreadItems() {
    return this.items.some(item => !item.readAt);
  }
  trackById(_index, item) {
    return item._id;
  }
  iconName(n) {
    const type = String(n?.type ?? '').toUpperCase();
    if (type === 'PAYMENT_SUCCESS') return 'card-outline';
    if (type === 'PAYMENT_FAILED') return 'alert-circle-outline';
    if (type === 'ENDING_SOON') return 'time-outline';
    if (type === 'DRAW_STARTED') return 'play-circle-outline';
    if (type === 'DRAW_RESULT' || type === 'WINNER_ANNOUNCED') {
      return 'trophy-outline';
    }
    if (type === 'FREE_TICKET_AVAILABLE' || type === 'FREE_TICKET_USED') {
      return 'ticket-outline';
    }
    return 'notifications-outline';
  }
  toneClass(n) {
    const type = String(n?.type ?? '').toUpperCase();
    if (type === 'PAYMENT_SUCCESS') return 'tone-payment';
    if (type === 'PAYMENT_FAILED') return 'tone-alert';
    if (type === 'ENDING_SOON') return 'tone-warning';
    if (type === 'DRAW_STARTED' || type === 'DRAW_RESULT' || type === 'WINNER_ANNOUNCED') {
      return 'tone-draw';
    }
    if (type === 'FREE_TICKET_AVAILABLE' || type === 'FREE_TICKET_USED') {
      return 'tone-bonus';
    }
    return 'tone-default';
  }
  typeLabel(n) {
    const type = String(n?.type ?? '').toUpperCase();
    if (type.startsWith('PAYMENT')) {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_PAYMENT');
    }
    if (type.startsWith('DRAW') || type === 'WINNER_ANNOUNCED') {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_DRAW');
    }
    if (type.startsWith('FREE_TICKET')) {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_BONUS');
    }
    if (type === 'ENDING_SOON') {
      return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_URGENT');
    }
    return this.translate.instant('NOTIFICATIONS_PAGE.TYPE_DEFAULT');
  }
  actionLabel(n) {
    const t = String(n?.type ?? '').toUpperCase();
    if (t === 'PAYMENT_FAILED') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_RETRY');
    if (t === 'ENDING_SOON') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_PARTICIPATE');
    if (t === 'DRAW_STARTED') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_VIEW_LIVE');
    if (t === 'DRAW_RESULT') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_VIEW_RESULT');
    if (t === 'FREE_TICKET_AVAILABLE') return this.translate.instant('NOTIFICATIONS_PAGE.ACTION_USE');
    return null;
  }
  persistReadState(notification, previousReadAt, previousUnreadCount) {
    var _this4 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this4.api.markRead(notification._id));
      } catch {
        // Echec du mark-read: on annule l'optimisme ET on retire l'id de la
        // reconciliation, sinon un rechargement le re-marquerait "lu" a tort
        // alors que le backend le considere toujours non-lu.
        _this4.locallyReadIds.delete(notification._id);
        notification.readAt = previousReadAt;
        if (!previousReadAt) {
          _this4.knownUnreadCount = previousUnreadCount;
          _this4.state.setLocal(previousUnreadCount);
        }
      }
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notifications_notifications_api_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notifications_notifications_state_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_6__.NetworkStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NotificationsPage,
    selectors: [["app-notifications"]],
    standalone: false,
    decls: 41,
    vars: 30,
    consts: [["translucent", "true", 1, "hdr"], ["slot", "start"], ["defaultHref", "/tabs/home"], ["slot", "end"], ["fill", "clear", 1, "read-all-btn", 3, "click", "disabled"], ["name", "checkmark-done-outline", "slot", "start"], [1, "bg", 3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], [1, "wrap"], [1, "hero-panel"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-stats"], [1, "stat-chip", "unread-chip"], [1, "label"], [1, "value"], ["class", "stat-chip", 4, "ngIf"], ["class", "offline-note", 4, "ngIf"], ["class", "skel-list", 4, "ngIf"], ["icon", "notifications-outline", 3, "title", 4, "ngIf"], ["class", "list", 4, "ngIf"], [1, "stat-chip"], [1, "offline-note"], [1, "skel-list"], ["class", "skel-card", 4, "ngFor", "ngForOf"], [1, "skel-card"], ["icon", "notifications-outline", 3, "title"], [1, "list"], ["class", "notification-card", 3, "unread", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notification-card", 3, "click", "ngClass"], [1, "icon-shell"], [3, "name"], [1, "content"], [1, "row"], [1, "type-chip"], [1, "date"], [1, "title-row"], ["class", "unread-pill", 4, "ngIf"], [1, "body"], ["class", "footer", 4, "ngIf"], [1, "unread-pill"], [1, "footer"], ["type", "button", 1, "action-btn", 3, "click"]],
    template: function NotificationsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 3)(8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationsPage_Template_ion_button_click_8_listener() {
          return ctx.markAllRead();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-content", 6)(13, "ion-refresher", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function NotificationsPage_Template_ion_refresher_ionRefresh_13_listener($event) {
          return ctx.load($event, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "section", 9)(17, "div", 10)(18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12)(28, "div", 13)(29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, NotificationsPage_div_35_Template, 6, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, NotificationsPage_div_36_Template, 3, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, NotificationsPage_div_38_Template, 2, 1, "div", 18)(39, NotificationsPage_app_empty_state_39_Template, 2, 3, "app-empty-state", 19)(40, NotificationsPage_div_40_Template, 2, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 14, "NOTIFICATIONS_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.markingAll || !ctx.hasUnreadItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 16, "NOTIFICATIONS_PAGE.MARK_ALL_READ"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 18, "NOTIFICATIONS_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 20, "NOTIFICATIONS_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 22, "NOTIFICATIONS_PAGE.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 24, "NOTIFICATIONS_PAGE.UNREAD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 26, ctx.state.unreadCount$) ?? 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.refreshing);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 28, ctx.isOffline$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_11__.EmptyStateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --primary-2: var(--app-primary-soft);\n  --blue: var(--app-primary);\n  --bg: var(--app-bg);\n  --bg-2: var(--app-bg);\n  --card: var(--app-surface);\n  --card-strong: var(--app-surface-2);\n  --stroke: var(--app-border);\n  --text: var(--app-ink);\n  --muted: var(--app-muted);\n  --warning: var(--app-warning);\n  --danger: var(--app-danger);\n  --success: var(--app-success);\n}\n\n.hdr[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  --border-color: transparent;\n  --color: var(--text);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.hdr[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n\n.hdr[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], \n.hdr[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n\n.read-all-btn[_ngcontent-%COMP%] {\n  --color: var(--app-ink);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  font-weight: 800;\n}\n\n.bg[_ngcontent-%COMP%] {\n  --background: transparent;\n  background: transparent;\n  color: var(--text);\n}\n\n.wrap[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0 auto;\n  padding: calc(env(safe-area-inset-top) + 18px) 16px 32px;\n}\n\n.hero-panel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 26px;\n  background: var(--card-strong);\n  border: 1px solid var(--app-border-strong);\n  box-shadow: none;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero-panel[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.hero-copy[_ngcontent-%COMP%], \n.hero-stats[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-primary);\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 12px 0 8px;\n  font-size: clamp(28px, 7vw, 34px);\n  line-height: 0.98;\n  letter-spacing: -0.04em;\n  color: var(--text);\n}\n\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n  line-height: 1.5;\n}\n\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.stat-chip[_ngcontent-%COMP%] {\n  min-width: 92px;\n  padding: 12px 14px;\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--stroke);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.stat-chip[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--app-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n\n.stat-chip[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--text);\n}\n\n.unread-chip[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  border-color: var(--app-border-strong);\n}\n\n.offline-note[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 12px 14px;\n  border-radius: 16px;\n  background: var(--app-warning-soft);\n  border: 1px solid var(--app-warning);\n  color: var(--app-warning);\n  font-size: 13px;\n  line-height: 1.45;\n}\n\n.list[_ngcontent-%COMP%], \n.skel-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  margin-top: 18px;\n}\n\n.notification-card[_ngcontent-%COMP%], \n.skel-card[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  border-radius: 22px;\n  background: var(--card);\n  border: 1px solid var(--stroke);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.notification-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 52px minmax(0, 1fr);\n  gap: 14px;\n  padding: 16px;\n  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;\n}\n\n.notification-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.995);\n}\n\n.notification-card.unread[_ngcontent-%COMP%] {\n  border-color: var(--app-border-strong);\n  box-shadow: none;\n}\n\n.icon-shell[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  color: var(--app-on-primary);\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\n.icon-shell[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.tone-payment[_ngcontent-%COMP%]   .icon-shell[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n}\n\n.tone-alert[_ngcontent-%COMP%]   .icon-shell[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n  color: var(--app-on-danger);\n}\n\n.tone-warning[_ngcontent-%COMP%]   .icon-shell[_ngcontent-%COMP%] {\n  background: var(--app-warning);\n  color: var(--app-on-warning);\n}\n\n.tone-draw[_ngcontent-%COMP%]   .icon-shell[_ngcontent-%COMP%] {\n  background: var(--app-primary);\n}\n\n.tone-bonus[_ngcontent-%COMP%]   .icon-shell[_ngcontent-%COMP%] {\n  background: var(--app-success);\n  color: var(--app-on-success);\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.type-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--muted);\n  white-space: nowrap;\n}\n\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.title-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  line-height: 1.25;\n  letter-spacing: -0.02em;\n  color: var(--text);\n}\n\n.unread-pill[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-primary);\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.body[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: var(--muted);\n  line-height: 1.5;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 14px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  min-height: 38px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 999px;\n  background: var(--app-surface);\n  color: var(--app-ink);\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n  box-shadow: none;\n}\n\n.empty[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 36px 24px;\n  text-align: center;\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 14px;\n  border-radius: 22px;\n  display: grid;\n  place-items: center;\n  background: var(--app-primary-soft);\n  border: 1px solid var(--app-border-strong);\n  color: var(--app-primary);\n}\n\n.empty-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 800;\n  color: var(--text);\n}\n\n.skel-card[_ngcontent-%COMP%] {\n  height: 126px;\n  background: transparent;\n  background-size: 220px 100%, 100% 100%;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_notifShimmer 1.2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_notifShimmer {\n  from {\n    background-position: -220px 0, 0 0;\n  }\n  to {\n    background-position: calc(100% + 220px) 0, 0 0;\n  }\n}\n@media (max-width: 640px) {\n  .wrap[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n  .hero-panel[_ngcontent-%COMP%] {\n    padding: 18px;\n    flex-direction: column;\n  }\n  .hero-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .notification-card[_ngcontent-%COMP%] {\n    grid-template-columns: 48px minmax(0, 1fr);\n    padding: 14px;\n    border-radius: 20px;\n  }\n  .icon-shell[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    border-radius: 16px;\n  }\n  .title-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .date[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .read-all-btn[_ngcontent-%COMP%] {\n    --padding-start: 10px;\n    --padding-end: 10px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQ0U7RUFDRixrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0RBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUFxQixhQUFBO0FBQ3JCOztBQUNBOztFQUVFLGtCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLG1DQUFBO0VBQ0Esc0NBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBOztFQUVFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTs7O0VBR0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdGQUNFO0FBQ0o7O0FBSUE7RUFDRSx1QkFBQTtBQURGOztBQUlBO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUNFO0VBQ0Ysc0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRDQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLGtDQUFBO0VBRkY7RUFJQTtJQUNFLDhDQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxvQkFBQTtFQUhGO0VBTUE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFKRjtFQU9BO0lBQ0UsV0FBQTtJQUNBLDJCQUFBO0VBTEY7RUFRQTtJQUNFLDBDQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBTkY7RUFTQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUFQRjtFQVVBO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtFQVJGO0VBV0E7SUFDRSxlQUFBO0VBVEY7RUFZQTtJQUNFLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBVkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLXByaW1hcnk6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAtLXByaW1hcnktMjogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgLS1ibHVlOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgLS1iZzogdmFyKC0tYXBwLWJnKTtcclxuICAtLWJnLTI6IHZhcigtLWFwcC1iZyk7XHJcbiAgLS1jYXJkOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgLS1jYXJkLXN0cm9uZzogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgLS1zdHJva2U6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIC0tdGV4dDogdmFyKC0tYXBwLWluayk7XHJcbiAgLS1tdXRlZDogdmFyKC0tYXBwLW11dGVkKTtcclxuICAtLXdhcm5pbmc6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICAtLWRhbmdlcjogdmFyKC0tYXBwLWRhbmdlcik7XHJcbiAgLS1zdWNjZXNzOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi5oZHIgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJnKTtcclxuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uaGRyIGlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbn1cclxuXHJcbi5oZHIgaW9uLWJhY2stYnV0dG9uLFxyXG4uaGRyIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi5yZWFkLWFsbC1idG4ge1xyXG4gIC0tY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgbWF4LXdpZHRoOiA0NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDE4cHgpIDE2cHggMzJweDtcclxufVxyXG5cclxuLmhlcm8tcGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTZweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1zdHJvbmcpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGVyby1wYW5lbDo6YWZ0ZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4uaGVyby1jb3B5LFxyXG4uaGVyby1zdGF0cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oZXJvLWNvcHkge1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmV5ZWJyb3cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uaGVyby1jb3B5IGgxIHtcclxuICBtYXJnaW46IDEycHggMCA4cHg7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgyOHB4LCA3dncsIDM0cHgpO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjk4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxufVxyXG5cclxuLmhlcm8tY29weSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uaGVyby1zdGF0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zdGF0LWNoaXAge1xyXG4gIG1pbi13aWR0aDogOTJweDtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLnN0YXQtY2hpcCAubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG4uc3RhdC1jaGlwIC52YWx1ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxufVxyXG5cclxuLnVucmVhZC1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxufVxyXG5cclxuLm9mZmxpbmUtbm90ZSB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtd2FybmluZy1zb2Z0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtd2FybmluZyk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbn1cclxuXHJcbi5saXN0LFxyXG4uc2tlbC1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMTRweDtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNhcmQsXHJcbi5za2VsLWNhcmQsXHJcbi5lbXB0eSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MnB4IG1pbm1heCgwLCAxZnIpO1xyXG4gIGdhcDogMTRweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICB0cmFuc2Zvcm0gMTYwbXMgZWFzZSxcclxuICAgIGJveC1zaGFkb3cgMTYwbXMgZWFzZSxcclxuICAgIGJvcmRlci1jb2xvciAxNjBtcyBlYXNlO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNhcmQ6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTk1KTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1jYXJkLnVucmVhZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmljb24tc2hlbGwge1xyXG4gIHdpZHRoOiA1MnB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaWNvbi1zaGVsbCBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4udG9uZS1wYXltZW50IC5pY29uLXNoZWxsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50b25lLWFsZXJ0IC5pY29uLXNoZWxsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZGFuZ2VyKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLWRhbmdlcik7XHJcbn1cclxuXHJcbi50b25lLXdhcm5pbmcgLmljb24tc2hlbGwge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC13YXJuaW5nKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXdhcm5pbmcpO1xyXG59XHJcblxyXG4udG9uZS1kcmF3IC5pY29uLXNoZWxsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50b25lLWJvbnVzIC5pY29uLXNoZWxsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1zdWNjZXNzKTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi50eXBlLWNoaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRpdGxlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRpdGxlLXJvdyBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMS4yNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbn1cclxuXHJcbi51bnJlYWQtcGlsbCB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlci1zdHJvbmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgbWluLWhlaWdodDogMzhweDtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZW1wdHkge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgcGFkZGluZzogMzZweCAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcHR5LWljb24ge1xyXG4gIHdpZHRoOiA3MnB4O1xyXG4gIGhlaWdodDogNzJweDtcclxuICBtYXJnaW46IDAgYXV0byAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXItc3Ryb25nKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZW1wdHktaWNvbiBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4uZW1wdHktdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxufVxyXG5cclxuLnNrZWwtY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMjZweDtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMjBweCAxMDAlLCAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbmltYXRpb246IG5vdGlmU2hpbW1lciAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBub3RpZlNoaW1tZXIge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyMHB4IDAsIDAgMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlICsgMjIwcHgpIDAsIDAgMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC53cmFwIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tcGFuZWwge1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuaGVyby1zdGF0cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5ub3RpZmljYXRpb24tY2FyZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggbWlubWF4KDAsIDFmcik7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5pY29uLXNoZWxsIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLnJlYWQtYWxsLWJ0biB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ }

}]);
//# sourceMappingURL=default-src_app_pages_notifications_notifications_module_ts.js.map