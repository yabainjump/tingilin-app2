"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 2229
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var src_app_guard_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guard/admin-guard */ 4015);
/* harmony import */ var src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guard/auth-guard */ 159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ 9319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__.TabsPage,
  children: [{
    path: 'home',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_winners_winners-live-socket_service_ts-src_app_shared_utils_media-ur-aabc18"), __webpack_require__.e("default-src_app_shared_ui_countdown-energy_countdown-energy_component_ts"), __webpack_require__.e("default-src_app_services_home_home-api_service_ts-src_app_shared_engagement_trust-stats_compo-2dbea6"), __webpack_require__.e("default-src_app_services_referral_referral-api_service_ts-src_app_services_responsible-play_r-3dae35"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../home/home.module */ 5055)).then(m => m.HomePageModule)
  }, {
    path: 'tickets',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tickets_tickets_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tickets/tickets.module */ 5826)).then(m => m.TicketsPageModule)
  }, {
    path: 'winners',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_winners_winners-live-socket_service_ts-src_app_shared_utils_media-ur-aabc18"), __webpack_require__.e("default-src_app_services_home_home-api_service_ts-src_app_shared_engagement_trust-stats_compo-2dbea6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_winners_winners_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../winners/winners.module */ 2322)).then(m => m.WinnersPageModule)
  }, {
    path: 'referral',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_referral_referral_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../referral/referral.module */ 5770)).then(m => m.ReferralPageModule)
  }, {
    path: 'profile',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts-src_app_shared_utils_media-url_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 1818)).then(m => m.ProfilePageModule)
  }, {
    path: 'edit-profile',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_region-picker_region-picker_module_ts"), __webpack_require__.e("default-src_app_shared_utils_blob-file_ts-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_edit-profile_edit-profile_module_ts-src_app_shared_utils_media-url_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../edit-profile/edit-profile.module */ 7976)).then(m => m.EditProfilePageModule)
  }, {
    path: 'raffle-details/:id',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_winners_winners-live-socket_service_ts-src_app_shared_utils_media-ur-aabc18"), __webpack_require__.e("default-src_app_shared_ui_countdown-energy_countdown-energy_component_ts"), __webpack_require__.e("default-src_app_services_referral_referral-api_service_ts-src_app_services_responsible-play_r-3dae35"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_raffle-details_raffle-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../raffle-details/raffle-details.module */ 1378)).then(m => m.RaffleDetailsPageModule)
  }, {
    path: 'payment-confirmation',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_payment-confirmation_payment-confirmation_module_ts-src_app_services_responsibl-43c141")]).then(__webpack_require__.bind(__webpack_require__, /*! ../payment-confirmation/payment-confirmation.module */ 7180)).then(m => m.PaymentConfirmationPageModule)
  }, {
    path: 'notifications',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../notifications/notifications.module */ 5746)).then(m => m.NotificationsPageModule)
  }, {
    path: 'participations',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_participations_participations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../participations/participations.module */ 8204)).then(m => m.ParticipationsPageModule)
  }, {
    path: 'ticket-details/:raffleId',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ticket-details_ticket-details_module_ts-src_app_shared_utils_media-url_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../ticket-details/ticket-details.module */ 7390)).then(m => m.TicketDetailsPageModule)
  }, {
    path: 'admin/create-raffle',
    canActivate: [src_app_guard_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AdminGuard],
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_utils_blob-file_ts-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_admin_create-raffle_create-raffle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/create-raffle/create-raffle.module */ 1706)).then(m => m.CreateRafflePageModule)
  }, {
    path: 'all-raffles',
    canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_ui_countdown-energy_countdown-energy_component_ts"), __webpack_require__.e("src_app_pages_all-raffles_all-raffles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/all-raffles/all-raffles.module */ 4150)).then(m => m.AllRafflesPageModule)
  }, {
    path: 'change-password',
    canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../change-password/change-password.module */ 5234)).then(m => m.ChangePasswordPageModule)
  }, {
    path: 'responsible-play',
    canActivate: [src_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_responsible-play_responsible-play_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../responsible-play/responsible-play.module */ 7786)).then(m => m.ResponsiblePlayPageModule)
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }]
}];
class TabsPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TabsPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TabsPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: TabsPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ },

/***/ 9660
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-routing.module */ 2229);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ 9319);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







class TabsPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TabsPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TabsPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: TabsPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__.TabsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TabsPageModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_4__.TabsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_3__.TabsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule]
  });
})();

/***/ },

/***/ 9319
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth-state.service */ 6247);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var src_app_services_notifications_notifications_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notifications/notifications-state.service */ 2050);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
var _staticBlock;








function TabsPage_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const n_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", n_r1 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r1);
  }
}
function TabsPage_ion_fab_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 12)(1, "ion-fab-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsPage_ion_fab_25_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.goCreateRaffle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "CREATE_RAFFLE_PAGE.TITLE"));
  }
}
class TabsPage {
  constructor(authState, nav, notifState, auth, router) {
    this.authState = authState;
    this.nav = nav;
    this.notifState = notifState;
    this.auth = auth;
    this.router = router;
    this.isAdmin = false;
    this.isAdmin$ = this.authState.isAdmin$;
  }
  ionViewWillEnter() {
    this.auth.me().subscribe({
      next: u => this.isAdmin = u.role === 'ADMIN',
      error: () => this.isAdmin = false
    });
    this.notifState.refresh();
  }
  get showFab() {
    return this.isAdmin && !this.router.url.includes('create-raffle');
  }
  goCreateRaffle() {
    this.nav.navigateForward('/tabs/admin/create-raffle');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TabsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_2__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notifications_notifications_state_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TabsPage,
    selectors: [["app-tabs"]],
    standalone: false,
    decls: 26,
    vars: 16,
    consts: [["slot", "bottom", 1, "lotto-tabbar"], ["tab", "home"], ["name", "home-outline"], [3, "hidden", 4, "ngIf"], ["tab", "participations", "href", "/tabs/participations"], ["name", "ticket-outline"], ["tab", "referral", "href", "/tabs/referral"], ["name", "gift-outline"], ["tab", "profile"], ["name", "person-outline"], ["class", "center-fab", "vertical", "bottom", "horizontal", "center", 4, "ngIf"], [3, "hidden"], ["vertical", "bottom", "horizontal", "center", 1, "center-fab"], [3, "click"], ["name", "add"]],
    template: function TabsPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-tab-bar", 0)(3, "ion-tab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TabsPage_ion_badge_8_Template, 2, 2, "ion-badge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-tab-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-tab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-tab-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TabsPage_ion_fab_25_Template, 4, 3, "ion-fab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "TABS.HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, ctx.notifState.unreadCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "TABS.LOTTERY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 12, "TABS.REFERRAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 14, "TABS.PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFab);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTabs, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --dock-bg: var(--app-surface);\n  --dock-stroke: var(--app-border);\n  --dock-muted: var(--app-muted);\n  display: block;\n  height: 100%;\n}\n\nion-tabs[_ngcontent-%COMP%], \nion-content[_ngcontent-%COMP%] {\n  pointer-events: auto !important;\n}\n\nion-router-outlet[_ngcontent-%COMP%] {\n  position: relative !important;\n  z-index: 1 !important;\n  pointer-events: auto !important;\n}\n\nion-tab-bar.lotto-tabbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --border: 0;\n  position: relative !important;\n  z-index: 20 !important;\n  left: auto;\n  right: auto;\n  bottom: auto;\n  flex: 0 0 68px;\n  width: calc(100% - 28px);\n  height: 68px;\n  margin: 0 14px calc(10px + env(safe-area-inset-bottom));\n  padding: 6px;\n  overflow: hidden;\n  border: 1px solid var(--dock-stroke);\n  border-radius: 24px;\n  background: var(--dock-bg);\n  box-shadow: var(--app-shadow-sm);\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  pointer-events: auto !important;\n}\n\nion-tab-button[_ngcontent-%COMP%] {\n  --color: var(--dock-muted);\n  --color-selected: var(--app-primary);\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n  position: relative;\n  min-width: 0;\n  min-height: 54px;\n  overflow: visible;\n  border-radius: 18px;\n  background: transparent !important;\n  transition: color 0.22s ease, transform 0.22s var(--app-ease-out);\n}\n\nion-tab-button[_ngcontent-%COMP%]::part(native) {\n  border-radius: 18px;\n}\n\nion-tab-button.tab-selected[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n}\n\nion-tab-button.tab-selected[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\nion-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.61rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\nion-tab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  transition: transform 0.22s var(--app-ease-out);\n}\n\nion-tab-button.tab-selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n  transform: translateY(-1px) scale(1.08);\n  filter: none;\n}\n\n.center-fab[_ngcontent-%COMP%] {\n  bottom: 65px;\n}\n\n.center-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: var(--app-primary);\n  --box-shadow: var(--app-shadow-brand);\n  width: 52px;\n  height: 52px;\n}\n\n@media (min-width: 720px) {\n  ion-tab-bar.lotto-tabbar[_ngcontent-%COMP%] {\n    width: min(520px, 100% - 32px);\n    margin-inline: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxpRUFDRTtBQUFKOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxtQkFBQTtFQURGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1kb2NrLWJnOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgLS1kb2NrLXN0cm9rZTogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgLS1kb2NrLW11dGVkOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLXRhYnMsXHJcbmlvbi1jb250ZW50IHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tcm91dGVyLW91dGxldCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyLmxvdHRvLXRhYmJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJvcmRlcjogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyMCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIGZsZXg6IDAgMCA2OHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgbWFyZ2luOiAwIDE0cHggY2FsYygxMHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kb2NrLXN0cm9rZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kb2NrLWJnKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LXNtKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRhYi1idXR0b24ge1xyXG4gIC0tY29sb3I6IHZhcigtLWRvY2stbXV0ZWQpO1xyXG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDU0cHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICBjb2xvciAwLjIycyBlYXNlLFxyXG4gICAgdHJhbnNmb3JtIDAuMjJzIHZhcigtLWFwcC1lYXNlLW91dCk7XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi10YWItYnV0dG9uIGlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMC42MXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcblxyXG5pb24tdGFiLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjIycyB2YXIoLS1hcHAtZWFzZS1vdXQpO1xyXG59XHJcblxyXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpIHNjYWxlKDEuMDgpO1xyXG4gIGZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlci1mYWIge1xyXG4gIGJvdHRvbTogNjVweDtcclxufVxyXG5cclxuLmNlbnRlci1mYWIgaW9uLWZhYi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIC0tYm94LXNoYWRvdzogdmFyKC0tYXBwLXNoYWRvdy1icmFuZCk7XHJcbiAgd2lkdGg6IDUycHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICBpb24tdGFiLWJhci5sb3R0by10YWJiYXIge1xyXG4gICAgd2lkdGg6IG1pbig1MjBweCwgY2FsYygxMDAlIC0gMzJweCkpO1xyXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map