(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _guard_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/admin-guard */ 4015);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth-guard */ 159);
/* harmony import */ var _guard_guest_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/guest-guard */ 5468);
/* harmony import */ var _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/region-guard */ 1954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;







const routes = [{
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
}, {
  path: 'landing',
  canActivate: [_guard_guest_guard__WEBPACK_IMPORTED_MODULE_2__.GuestGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing/landing.module */ 8510)).then(m => m.LandingPageModule)
}, {
  path: 'auth',
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 7845)).then(m => m.LoginPageModule)
  }, {
    path: 'register',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_region-picker_region-picker_module_ts"), __webpack_require__.e("src_app_pages_auth_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/register/register.module */ 7353)).then(m => m.RegisterPageModule)
  }, {
    path: 'forgot-password',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgot-password/forgot-password.module */ 1641)).then(m => m.ForgotPasswordPageModule)
  }, {
    path: 'forgot-password-sent',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password-sent_forgot-password-sent_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgot-password-sent/forgot-password-sent.module */ 6151)).then(m => m.ForgotPasswordSentPageModule)
  }]
}, {
  path: 'onboarding',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_region-picker_region-picker_module_ts"), __webpack_require__.e("src_app_pages_onboarding_onboarding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/onboarding/onboarding.module */ 942)).then(m => m.OnboardingPageModule)
}, {
  path: 'tabs',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs/tabs.module */ 9660)).then(m => m.TabsPageModule)
},
// { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule) },
// redirects (évite les doublons)
{
  path: 'home',
  redirectTo: 'tabs/home',
  pathMatch: 'full'
}, {
  path: 'tickets',
  redirectTo: 'tabs/tickets',
  pathMatch: 'full'
}, {
  path: 'winners',
  redirectTo: 'tabs/winners',
  pathMatch: 'full'
}, {
  path: 'referral',
  redirectTo: 'tabs/referral',
  pathMatch: 'full'
}, {
  path: 'account',
  redirectTo: 'tabs/profile',
  pathMatch: 'full'
}, {
  path: 'admin/create-raffle',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard, _guard_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AdminGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_utils_blob-file_ts-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_admin_create-raffle_create-raffle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin/create-raffle/create-raffle.module */ 1706)).then(m => m.CreateRafflePageModule)
}, {
  path: 'edit-profile',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_region-picker_region-picker_module_ts"), __webpack_require__.e("default-src_app_shared_utils_blob-file_ts-node_modules_capacitor_camera_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_edit-profile_edit-profile_module_ts-src_app_shared_utils_media-url_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/edit-profile/edit-profile.module */ 7976)).then(m => m.EditProfilePageModule)
}, {
  path: 'support',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 6230)).then(m => m.SupportPageModule)
}, {
  path: 'raffle-details/:id',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_winners_winners-live-socket_service_ts-src_app_shared_utils_media-ur-aabc18"), __webpack_require__.e("default-src_app_shared_ui_countdown-energy_countdown-energy_component_ts"), __webpack_require__.e("default-src_app_services_referral_referral-api_service_ts-src_app_services_responsible-play_r-3dae35"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_raffle-details_raffle-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/raffle-details/raffle-details.module */ 1378)).then(m => m.RaffleDetailsPageModule)
}, {
  path: 'payment-confirmation',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_payment-confirmation_payment-confirmation_module_ts-src_app_services_responsibl-43c141")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-confirmation/payment-confirmation.module */ 7180)).then(m => m.PaymentConfirmationPageModule)
}, {
  path: 'participations',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_participations_participations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/participations/participations.module */ 8204)).then(m => m.ParticipationsPageModule)
}, {
  path: 'ticket-details/:raffleId',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ticket-details_ticket-details_module_ts-src_app_shared_utils_media-url_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ticket-details/ticket-details.module */ 7390)).then(m => m.TicketDetailsPageModule)
}, {
  path: 'notifications',
  canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guard_region_guard__WEBPACK_IMPORTED_MODULE_3__.RegionGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_notifications_notifications_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 5746)).then(m => m.NotificationsPageModule)
}, {
  path: '**',
  redirectTo: 'landing'
}];
class AppRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.NoPreloading
    }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ },

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _core_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/loading/loading.service */ 7662);
/* harmony import */ var _services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth/auth-state.service */ 6247);
/* harmony import */ var _services_i18n_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/i18n/language.service */ 9785);
/* harmony import */ var _services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/offline/network-status.service */ 9669);
/* harmony import */ var _services_offline_offline_action_queue_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/offline/offline-action-queue.service */ 2616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
var _staticBlock;













const _c0 = a0 => ({
  count: a0
});
function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-progress-bar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "OFFLINE.STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 4, "OFFLINE.USING_SAVED_DATA"));
  }
}
function AppComponent_div_3_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "OFFLINE.LOW_BANDWIDTH_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 4, "OFFLINE.LOW_BANDWIDTH_BODY"));
  }
}
function AppComponent_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppComponent_div_3_ng_template_4_ng_container_0_Template, 7, 6, "ng-container", 8);
  }
  if (rf & 2) {
    const banner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    const queueReady_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", banner_r1.constrained)("ngIfElse", queueReady_r2);
  }
}
function AppComponent_div_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const banner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "OFFLINE.SYNCING_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 4, "OFFLINE.SYNCING_BODY", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, banner_r1.pending)));
  }
}
function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AppComponent_div_3_ng_container_3_Template, 7, 6, "ng-container", 8)(4, AppComponent_div_3_ng_template_4_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(6, AppComponent_div_3_ng_template_6_Template, 6, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const banner_r1 = ctx.ngIf;
    const onlineState_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("offline", banner_r1.offline)("pending", !banner_r1.offline && banner_r1.pending > 0)("constrained", banner_r1.constrained);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("syncing", banner_r1.syncing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", banner_r1.offline && !banner_r1.syncing)("ngIfElse", onlineState_r3);
  }
}
class AppComponent {
  constructor(loading, authState, language, networkStatus, offlineQueue, router, document) {
    this.loading = loading;
    this.authState = authState;
    this.language = language;
    this.networkStatus = networkStatus;
    this.offlineQueue = offlineQueue;
    this.router = router;
    this.document = document;
    this.loading$ = this.loading.loading$;
    this.bannerStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.bannerState$ = this.bannerStateSubject.asObservable();
  }
  ngOnInit() {
    this.language.init();
    this.authState.bootstrap();
    this.bannerStateSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([this.networkStatus.online$, this.offlineQueue.pendingCount$, this.networkStatus.constrained$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(([online, pending, constrained]) => ({
      online,
      pending,
      constrained
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)((a, b) => a.online === b.online && a.pending === b.pending && a.constrained === b.constrained)).subscribe(({
      online,
      pending,
      constrained
    }) => {
      if (!online) {
        this.showBannerTemporarily({
          offline: true,
          pending,
          syncing: false,
          constrained: false
        });
        return;
      }
      if (pending > 0) {
        this.showBannerTemporarily({
          offline: false,
          pending,
          syncing: true,
          constrained: false
        });
        return;
      }
      if (constrained) {
        this.showBannerTemporarily({
          offline: false,
          pending: 0,
          syncing: false,
          constrained: true
        });
        return;
      }
      this.clearBannerTimeout();
      this.bannerStateSubject.next(null);
    });
    this.navigationStartSub = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart)).subscribe(() => this.blurActiveElement());
  }
  ngOnDestroy() {
    this.navigationStartSub?.unsubscribe();
    this.bannerStateSub?.unsubscribe();
    this.clearBannerTimeout();
  }
  blurActiveElement() {
    const activeElement = this.document.activeElement;
    if (!(activeElement instanceof HTMLElement)) {
      return;
    }
    const isRootElement = activeElement.tagName === 'BODY' || activeElement.tagName === 'HTML';
    if (!isRootElement) {
      activeElement.blur();
    }
  }
  showBannerTemporarily(state) {
    this.bannerStateSubject.next(state);
    this.clearBannerTimeout();
    this.bannerHideTimeout = setTimeout(() => {
      this.bannerStateSubject.next(null);
    }, 5000);
  }
  clearBannerTimeout() {
    if (!this.bannerHideTimeout) return;
    clearTimeout(this.bannerHideTimeout);
    this.bannerHideTimeout = undefined;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_9__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_i18n_language_service__WEBPACK_IMPORTED_MODULE_10__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_offline_network_status_service__WEBPACK_IMPORTED_MODULE_11__.NetworkStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_offline_offline_action_queue_service__WEBPACK_IMPORTED_MODULE_12__.OfflineActionQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: false,
    decls: 6,
    vars: 6,
    consts: [["onlineState", ""], ["queueReady", ""], [4, "ngIf"], ["class", "connectivity-banner", 3, "offline", "pending", "constrained", 4, "ngIf"], ["type", "indeterminate"], [1, "connectivity-banner"], [1, "status-icon"], [1, "banner-copy"], [4, "ngIf", "ngIfElse"], [1, "title"], [1, "body"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AppComponent_div_3_Template, 8, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, ctx.bannerState$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonRouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
    styles: [".connectivity-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: calc(env(safe-area-inset-top) + 12px);\n  left: 50%;\n  right: auto;\n  width: min(520px, 100% - 24px);\n  transform: translateX(-50%);\n  z-index: 1200;\n  display: grid;\n  grid-template-columns: 34px 1fr;\n  column-gap: 12px;\n  align-items: center;\n  padding: 12px 14px 12px 12px;\n  border: 1px solid var(--app-border);\n  border-radius: 18px;\n  color: var(--app-ink);\n  background: var(--app-surface);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  pointer-events: none;\n}\n\n.connectivity-banner.offline[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n  color: var(--app-on-danger);\n}\n\n.connectivity-banner.pending[_ngcontent-%COMP%] {\n  background: var(--app-success);\n  color: var(--app-on-success);\n}\n\n.connectivity-banner.constrained[_ngcontent-%COMP%] {\n  background: var(--app-warning);\n  color: var(--app-on-warning);\n}\n\n.connectivity-banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  display: block;\n}\n\n.connectivity-banner[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.92;\n  display: block;\n  line-height: 1.35;\n  text-wrap: balance;\n}\n\n.banner-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid currentColor;\n  border-top-color: transparent;\n  box-shadow: none;\n}\n\n.status-icon.syncing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_connectivity-spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_connectivity-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7RUFDRjtFQUVBO0lBQ0UseUJBQUE7RUFBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3Rpdml0eS1iYW5uZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTJweCk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBtaW4oNTIwcHgsIGNhbGMoMTAwJSAtIDI0cHgpKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgei1pbmRleDogMTIwMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzRweCAxZnI7XHJcbiAgY29sdW1uLWdhcDogMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHggMTRweCAxMnB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY29ubmVjdGl2aXR5LWJhbm5lci5vZmZsaW5lIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtZGFuZ2VyKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLWRhbmdlcik7XHJcbn1cclxuXHJcbi5jb25uZWN0aXZpdHktYmFubmVyLnBlbmRpbmcge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdWNjZXNzKTtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXN1Y2Nlc3MpO1xyXG59XHJcblxyXG4uY29ubmVjdGl2aXR5LWJhbm5lci5jb25zdHJhaW5lZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXdhcm5pbmcpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtb24td2FybmluZyk7XHJcbn1cclxuXHJcbi5jb25uZWN0aXZpdHktYmFubmVyIC50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbm5lY3Rpdml0eS1iYW5uZXIgLmJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBvcGFjaXR5OiAwLjkyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gIHRleHQtd3JhcDogYmFsYW5jZTtcclxufVxyXG5cclxuLmJhbm5lci1jb3B5IHtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5zdGF0dXMtaWNvbiB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnN0YXR1cy1pY29uLnN5bmNpbmcge1xyXG4gIGFuaW1hdGlvbjogY29ubmVjdGl2aXR5LXNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbm5lY3Rpdml0eS1zcGluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   initializeAuthTokenStorage: () => (/* binding */ initializeAuthTokenStorage),
/* harmony export */   initializeGoogleSignIn: () => (/* binding */ initializeGoogleSignIn),
/* harmony export */   initializeOfflineQueue: () => (/* binding */ initializeOfflineQueue),
/* harmony export */   initializeTheme: () => (/* binding */ initializeTheme)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _core_loading_loading_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/loading/loading.interceptor */ 1558);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _services_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth/auth.interceptor */ 5951);
/* harmony import */ var _services_auth_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth/auth-token-storage.service */ 7531);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2279);
/* harmony import */ var _shared_language_switch_language_switch_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/language-switch/language-switch.module */ 2043);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _services_offline_offline_action_queue_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/offline/offline-action-queue.service */ 2616);
/* harmony import */ var _services_auth_google_sign_in_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth/google-sign-in.service */ 4520);
/* harmony import */ var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/theme/theme.service */ 6857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;






















function initializeAuthTokenStorage(tokenStorage) {
  return () => tokenStorage.init();
}
function initializeOfflineQueue(queue) {
  return () => queue.init();
}
function initializeGoogleSignIn(googleSignIn) {
  // Une panne du SDK Google ne doit pas bloquer le demarrage de l'application.
  return () => googleSignIn.initialize().catch(() => undefined);
}
function initializeTheme(theme) {
  return () => theme.init();
}
class AppModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    providers: [...(0,_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__.provideTranslateHttpLoader)({
      prefix: './assets/i18n/',
      suffix: '.json'
    }), {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_INITIALIZER,
      useFactory: initializeAuthTokenStorage,
      deps: [_services_auth_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_11__.AuthTokenStorageService],
      multi: true
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_INITIALIZER,
      useFactory: initializeOfflineQueue,
      deps: [_services_offline_offline_action_queue_service__WEBPACK_IMPORTED_MODULE_16__.OfflineActionQueueService],
      multi: true
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_INITIALIZER,
      useFactory: initializeGoogleSignIn,
      deps: [_services_auth_google_sign_in_service__WEBPACK_IMPORTED_MODULE_17__.GoogleSignInService],
      multi: true
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_INITIALIZER,
      useFactory: initializeTheme,
      deps: [_services_theme_theme_service__WEBPACK_IMPORTED_MODULE_18__.ThemeService],
      multi: true
    }, {
      provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouteReuseStrategy,
      useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
      useClass: _core_loading_loading_interceptor__WEBPACK_IMPORTED_MODULE_6__.LoadingInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
      useClass: _services_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__.AuthInterceptor,
      multi: true
    }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule, _shared_language_switch_language_switch_module__WEBPACK_IMPORTED_MODULE_14__.LanguageSwitchModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_15__.environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot({
      fallbackLang: 'fr'
    })]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule, _shared_language_switch_language_switch_module__WEBPACK_IMPORTED_MODULE_14__.LanguageSwitchModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule]
  });
})();

/***/ },

/***/ 1558
/*!*****************************************************!*\
  !*** ./src/app/core/loading/loading.interceptor.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.service */ 7662);
var _staticBlock;



class LoadingInterceptor {
  constructor(loading) {
    this.loading = loading;
  }
  intercept(req, next) {
    // Option: ignorer certains calls (assets, etc.)
    this.loading.start();
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.finalize)(() => this.loading.stop()));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LoadingInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoadingInterceptor,
    factory: LoadingInterceptor.ɵfac
  }));
}
_staticBlock();

/***/ },

/***/ 7662
/*!*************************************************!*\
  !*** ./src/app/core/loading/loading.service.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;


class LoadingService {
  constructor() {
    this.count = 0;
    this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loading$ = this._loading$.asObservable();
  }
  start() {
    this.count++;
    if (this.count === 1) this._loading$.next(true);
  }
  stop() {
    this.count = Math.max(0, this.count - 1);
    if (this.count === 0) this._loading$.next(false);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoadingService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoadingService,
    factory: LoadingService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 4015
/*!**************************************!*\
  !*** ./src/app/guard/admin-guard.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;





class AdminGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (!this.auth.isLoggedIn()) {
      return this.router.createUrlTree(['/auth/login']);
    }
    return this.auth.me().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => String(user?.role ?? '').toUpperCase() === 'ADMIN' ? true : this.router.createUrlTree(['/tabs/home'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (Number(error?.status ?? 0) === 401) {
        this.auth.logout();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.router.createUrlTree(['/auth/login']));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.router.createUrlTree(['/tabs/home']));
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AdminGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AdminGuard,
    factory: AdminGuard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 159
/*!*************************************!*\
  !*** ./src/app/guard/auth-guard.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;



class AuthGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigateByUrl('/auth/login', {
      replaceUrl: true
    });
    return false;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 5468
/*!**************************************!*\
  !*** ./src/app/guard/guest-guard.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuestGuard: () => (/* binding */ GuestGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ 1339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;



/**
 * Empêche l'accès aux pages publiques (landing, login, register) si
 * l'utilisateur est déjà connecté. Redirige vers /home.
 */
class GuestGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (!this.auth.isLoggedIn()) return true;
    this.router.navigateByUrl('/home', {
      replaceUrl: true
    });
    return false;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function GuestGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GuestGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GuestGuard,
    factory: GuestGuard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 1954
/*!***************************************!*\
  !*** ./src/app/guard/region-guard.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegionGuard: () => (/* binding */ RegionGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _shared_region_picker_regions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/region-picker/regions */ 4017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ 1339);
/* harmony import */ var _services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth-state.service */ 6247);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5422);
var _staticBlock;






const VALID_REGIONS = new Set(_shared_region_picker_regions__WEBPACK_IMPORTED_MODULE_1__.USER_REGION_OPTIONS.map(({
  value
}) => value));
class RegionGuard {
  constructor(auth, authState, router) {
    this.auth = auth;
    this.authState = authState;
    this.router = router;
  }
  canActivate(_route, state) {
    return this.authState.ensureCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(user => {
      // Une erreur reseau ponctuelle ne doit pas bloquer une session encore
      // valide. Un 401 est deja traite par AuthStateService.logout().
      if (!user) {
        return this.auth.isLoggedIn() ? true : this.router.createUrlTree(['/auth/login'], {
          queryParams: {
            redirect: state.url
          }
        });
      }
      const region = String(user.region ?? '').trim().toUpperCase();
      if (VALID_REGIONS.has(region)) return true;
      return this.router.createUrlTree(['/onboarding'], {
        queryParams: {
          requiredRegion: '1',
          redirect: this.safeRedirect(state.url)
        }
      });
    }));
  }
  safeRedirect(url) {
    const value = String(url ?? '').trim();
    return value.startsWith('/') && !value.startsWith('//') ? value : '/tabs/home';
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RegionGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_4__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: RegionGuard,
    factory: RegionGuard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 6247
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-state.service.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthStateService: () => (/* binding */ AuthStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ 1339);
var _staticBlock;



class AuthStateService {
  constructor(auth) {
    this.auth = auth;
    this.meSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.meRequest$ = null;
    this.sessionVersion = 0;
    this.me$ = this.meSubject.asObservable();
    this.isAdmin$ = this.me$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(u => u?.role === 'ADMIN'));
    this.isLoggedIn$ = this.me$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(u => !!u));
    // Une nouvelle session ne doit jamais reutiliser le profil du compte
    // precedent. Le garde de region rechargera ensuite /auth/me.
    this.auth.sessionReset$.subscribe(() => {
      this.sessionVersion += 1;
      this.meRequest$ = null;
      this.meSubject.next(null);
    });
  }
  // Snapshot synchrone de l'utilisateur courant (region incluse).
  get me() {
    return this.meSubject.value;
  }
  bootstrap() {
    // si pas de token => pas besoin d'appeler /me
    if (!this.auth.getToken()) {
      this.meSubject.next(null);
      return;
    }
    this.refreshMe();
  }
  refreshMe() {
    this.ensureCurrentUser(true).subscribe();
  }
  /**
   * Charge une seule fois le profil courant et partage la requete entre les
   * gardes concurrents. Le profil contient notamment la region obligatoire.
   */
  ensureCurrentUser(force = false) {
    if (!force && this.meSubject.value) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.meSubject.value);
    }
    if (this.meRequest$) return this.meRequest$;
    const requestSessionVersion = this.sessionVersion;
    const request$ = this.auth.me().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(user => requestSessionVersion === this.sessionVersion ? user : null), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(user => {
      if (user) this.meSubject.next(user);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      // Une reponse d'une ancienne session ne doit ni ecraser le nouveau
      // profil, ni deconnecter le compte qui vient de se connecter.
      if (requestSessionVersion !== this.sessionVersion) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
      if (Number(err?.status ?? 0) === 401) {
        this.auth.logout();
      }
      this.meSubject.next(null);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
      if (this.meRequest$ === request$) this.meRequest$ = null;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));
    this.meRequest$ = request$;
    return request$;
  }
  clear() {
    this.meSubject.next(null);
  }
  // PATCH /users/me { region } puis mise a jour du cache local.
  updateRegion(region) {
    return this.auth.updateRegion(region).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => {
      const current = this.meSubject.value;
      if (!current) return null;
      return {
        ...current,
        region
      };
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(updated => {
      if (updated) {
        this.meSubject.next(updated);
      }
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: AuthStateService,
    factory: AuthStateService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 7531
/*!*************************************************************!*\
  !*** ./src/app/services/auth/auth-token-storage.service.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthTokenStorageService: () => (/* binding */ AuthTokenStorageService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 6493);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-secure-storage-plugin */ 2994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);

var _staticBlock;




class AuthTokenStorageService {
  constructor() {
    this.isNative = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() !== 'web';
    this.managedKeys = ['tingilin_access_token', 'tingilin_refresh_token', 'tingilin_token', 'tingilin_session'];
    this.cache = new Map();
    this.initialized = false;
  }
  init() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.initialized || !_this.isNative) {
        _this.initialized = true;
        return;
      }
      yield Promise.all(_this.managedKeys.map(/*#__PURE__*/function () {
        var _ref = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key) {
          try {
            const {
              value
            } = yield capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.SecureStoragePlugin.get({
              key
            });
            if (value != null) _this.cache.set(key, value);
            return;
          } catch {
            // Migration unique depuis l'ancien stockage Preferences non chiffre.
            const {
              value
            } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
              key
            });
            if (value != null) {
              _this.cache.set(key, value);
              yield capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.SecureStoragePlugin.set({
                key,
                value
              });
              yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
                key
              });
              return;
            }
          }
          _this.cache.delete(key);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      _this.initialized = true;
    })();
  }
  get(key) {
    if (!this.isNative) {
      return localStorage.getItem(key);
    }
    return this.cache.get(key) ?? null;
  }
  set(key, value) {
    if (!this.isNative) {
      localStorage.setItem(key, value);
      return;
    }
    this.cache.set(key, value);
    void capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.SecureStoragePlugin.set({
      key,
      value
    });
  }
  remove(key) {
    if (!this.isNative) {
      localStorage.removeItem(key);
      return;
    }
    this.cache.delete(key);
    void Promise.all([capacitor_secure_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.SecureStoragePlugin.remove({
      key
    }).catch(() => ({
      value: false
    })), _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
      key
    })]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthTokenStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthTokenStorageService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthTokenStorageService,
    factory: AuthTokenStorageService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 5951
/*!***************************************************!*\
  !*** ./src/app/services/auth/auth.interceptor.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ 1339);
var _staticBlock;





class AuthInterceptor {
  constructor(auth) {
    this.auth = auth;
    // Refresh en cours partage entre toutes les requetes concurrentes:
    // succes ET echec sont propages a tous les abonnes (pas de requete bloquee).
    this.refresh$ = null;
  }
  intercept(req, next) {
    const isAuthEndpoint = req.url.includes('/auth/login') || req.url.includes('/auth/google') || req.url.includes('/auth/register') || req.url.includes('/auth/forgot-password') || req.url.includes('/auth/reset-password') || req.url.includes('/auth/logout') || req.url.includes('/auth/refresh');
    const token = this.auth.getAccessToken();
    if (!isAuthEndpoint && !token && this.auth.hasRefreshSession()) {
      return this.handle401(req, next);
    }
    const authReq = !isAuthEndpoint && token ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }) : req;
    return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse && err.status === 401 && !isAuthEndpoint) {
        return this.handle401(req, next);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => err);
    }));
  }
  handle401(req, next) {
    if (!this.auth.hasRefreshSession()) {
      this.auth.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('No refresh token'));
    }
    return this.getRefresh(this.auth.getRefreshToken()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(newToken => {
      const retryReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${newToken}`
        }
      });
      return next.handle(retryReq);
    }));
  }
  /**
   * Renvoie le refresh en cours (partage), ou en demarre un nouveau.
   * En cas de succes: stocke les tokens et emet le nouvel access token.
   * En cas d'echec: propage l'erreur a TOUTES les requetes en attente (au lieu
   * de les laisser bloquees indefiniment). On ne deconnecte que si le serveur
   * REFUSE la session (401/403). Un 5xx, un 429 ou une coupure reseau pendant
   * un pic de trafic ne doit pas jeter dehors un utilisateur dont la session
   * est valide: la requete suivante retentera le refresh.
   */
  getRefresh(refreshToken) {
    if (!this.refresh$) {
      this.refresh$ = this.auth.refresh(refreshToken).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => this.auth.setTokens(res.access_token, res.refresh_token)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => res.access_token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(e => {
        if (isSessionRejected(e)) {
          this.auth.logout();
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => e);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
        this.refresh$ = null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));
    }
    return this.refresh$;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  }));
}
_staticBlock();
function isSessionRejected(error) {
  return error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpErrorResponse && (error.status === 401 || error.status === 403);
}

/***/ },

/***/ 1339
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-token-storage.service */ 7531);
var _staticBlock;







class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseUrl;
    this.accessKey = 'tingilin_access_token';
    this.refreshKey = 'tingilin_refresh_token';
    this.sessionKey = 'tingilin_session';
    this.tokenKey = 'tingilin_access_token';
    this.legacyTokenKey = 'tingilin_token';
    this.maxTokenLength = 3500;
    // Emis a chaque changement de session (login / logout). Les services qui
    // gardent des donnees par-utilisateur (notifications, file offline, caches)
    // s'y abonnent pour se vider et eviter toute fuite entre comptes.
    this.sessionReset = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.sessionReset$ = this.sessionReset.asObservable();
  }
  login(email, password) {
    return this.http.post(`${this.baseUrl}/auth/login`, {
      email,
      password
    }, this.authRequestOptions()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      this.setTokens(res.access_token, res.refresh_token);
      this.sessionReset.next(); // nouveau compte -> on vide les caches du precedent
    }));
  }
  register(dto) {
    return this.http.post(`${this.baseUrl}/auth/register`, dto, this.authRequestOptions()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      this.setTokens(res.access_token, res.refresh_token);
      this.sessionReset.next();
    }));
  }
  // Connexion Google: POST /auth/google avec l'idToken Google Sign-In.
  // Meme contrat de reponse que /auth/login (refresh token en cookie sur web,
  // dans la reponse sur natif via X-Client-Platform: native).
  loginWithGoogle(idToken, region) {
    const body = {
      idToken
    };
    if (region) body.region = region;
    return this.http.post(`${this.baseUrl}/auth/google`, body, this.authRequestOptions()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      this.setTokens(res.access_token, res.refresh_token);
      this.sessionReset.next();
    }));
  }
  updateRegion(region) {
    return this.http.patch(`${this.baseUrl}/users/me`, {
      region
    }, this.authRequestOptions());
  }
  me() {
    return this.http.get(`${this.baseUrl}/auth/me`, {
      headers: this.authHeaders()
    });
  }
  forgotPassword(payload) {
    return this.http.post(`${this.baseUrl}/auth/forgot-password`, payload);
  }
  resetPassword(payload) {
    return this.http.post(`${this.baseUrl}/auth/reset-password`, payload);
  }
  changePassword(currentPassword, newPassword) {
    return this.http.patch(`${this.baseUrl}/auth/change-password`, {
      currentPassword,
      newPassword
    });
  }
  logout() {
    const token = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    this.http.post(`${this.baseUrl}/auth/logout`, refreshToken ? {
      refresh_token: refreshToken
    } : {}, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(token ? {
        Authorization: `Bearer ${token}`
      } : {}),
      withCredentials: true
    }).subscribe({
      error: () => undefined
    });
    this.clearTokens();
    this.sessionReset.next(); // vide tous les caches par-utilisateur
  }
  getToken() {
    const access = this.readValidToken(this.tokenKey);
    if (access) return access;
    return this.readValidToken(this.legacyTokenKey);
  }
  isLoggedIn() {
    const access = this.getAccessToken();
    if (access && !this.isJwtExpired(access)) return true;
    return this.hasRefreshSession();
  }
  setToken(token) {
    const valid = this.normalizeToken(token);
    if (!valid) return;
    this.tokenStorage.set(this.tokenKey, valid);
    this.tokenStorage.remove(this.legacyTokenKey);
  }
  authHeaders() {
    const token = this.getAccessToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(token ? {
      Authorization: `Bearer ${token}`
    } : {});
  }
  setTokens(access, refresh) {
    const validAccess = this.normalizeToken(access);
    if (validAccess) {
      this.tokenStorage.set(this.accessKey, validAccess);
      this.tokenStorage.remove(this.legacyTokenKey);
    } else {
      this.tokenStorage.remove(this.accessKey);
    }
    this.tokenStorage.set(this.sessionKey, '1');
    const validRefresh = this.normalizeToken(refresh ?? null);
    if (validRefresh) {
      this.tokenStorage.set(this.refreshKey, validRefresh);
    } else if (refresh !== undefined || _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform() === 'web') {
      this.tokenStorage.remove(this.refreshKey);
    }
  }
  getAccessToken() {
    const token = this.readValidToken(this.accessKey) || this.getToken();
    if (!token) return null;
    if (this.isJwtExpired(token)) {
      this.tokenStorage.remove(this.accessKey);
      this.tokenStorage.remove(this.tokenKey);
      this.tokenStorage.remove(this.legacyTokenKey);
      return null;
    }
    return token;
  }
  getRefreshToken() {
    return this.readValidToken(this.refreshKey);
  }
  clearTokens() {
    this.tokenStorage.remove(this.accessKey);
    this.tokenStorage.remove(this.refreshKey);
    this.tokenStorage.remove(this.tokenKey);
    this.tokenStorage.remove(this.legacyTokenKey);
    this.tokenStorage.remove(this.sessionKey);
  }
  refresh(refresh_token) {
    return this.http.post(`${this.baseUrl}/auth/refresh`, refresh_token ? {
      refresh_token
    } : {}, this.authRequestOptions());
  }
  hasRefreshSession() {
    return this.tokenStorage.get(this.sessionKey) === '1' || !!this.getRefreshToken();
  }
  authRequestOptions() {
    const native = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform() !== 'web';
    return {
      withCredentials: true,
      headers: native ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'X-Client-Platform': 'native'
      }) : undefined
    };
  }
  readValidToken(key) {
    const raw = this.tokenStorage.get(key);
    const token = this.normalizeToken(raw);
    if (!token && raw !== null) {
      this.tokenStorage.remove(key);
    }
    return token;
  }
  normalizeToken(token) {
    const value = String(token ?? '').trim();
    if (!value || value === 'null' || value === 'undefined') return null;
    if (value.length > this.maxTokenLength) return null;
    if (!/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(value)) {
      return null;
    }
    return value;
  }
  isJwtExpired(token) {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return true;
      const payload = JSON.parse(this.base64UrlDecode(parts[1] ?? ''));
      const exp = Number(payload?.exp ?? 0);
      if (!Number.isFinite(exp) || exp <= 0) return true;
      const nowSec = Math.floor(Date.now() / 1000);
      return exp <= nowSec;
    } catch {
      return true;
    }
  }
  base64UrlDecode(input) {
    const padded = input.replace(/-/g, '+').replace(/_/g, '/');
    const mod = padded.length % 4;
    const normalized = mod === 0 ? padded : padded + '='.repeat(4 - mod);
    return atob(normalized);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__.AuthTokenStorageService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 4520
/*!*********************************************************!*\
  !*** ./src/app/services/auth/google-sign-in.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleSignInError: () => (/* binding */ GoogleSignInError),
/* harmony export */   GoogleSignInService: () => (/* binding */ GoogleSignInService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capgo_capacitor_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capgo/capacitor-social-login */ 429);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);

var _staticBlock;



class GoogleSignInError extends Error {
  constructor(code) {
    super(code);
    this.code = code;
    this.name = 'GoogleSignInError';
  }
}
class GoogleSignInService {
  constructor() {
    this.initialization = null;
  }
  isConfigured() {
    return this.clientId.length > 0;
  }
  initialize() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.isConfigured()) return;
      if (_this.initialization) return _this.initialization;
      _this.initialization = _capgo_capacitor_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialLogin.initialize({
        google: {
          webClientId: _this.clientId,
          mode: 'online',
          redirectUrl: _this.redirectUrl
        }
      });
      try {
        yield _this.initialization;
      } catch (error) {
        // Autorise une nouvelle tentative si le SDK n'etait pas encore disponible.
        _this.initialization = null;
        throw error;
      }
    })();
  }
  signIn() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.isConfigured()) {
        throw new GoogleSignInError('NOT_CONFIGURED');
      }
      yield _this2.initialize();
      const login = yield _capgo_capacitor_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialLogin.login({
        provider: 'google',
        options: {
          scopes: ['email', 'profile'],
          filterByAuthorizedAccounts: false,
          autoSelectEnabled: false
        }
      });
      const result = login.result;
      const idToken = result.responseType === 'online' ? String(result.idToken ?? '').trim() : '';
      if (!idToken) {
        throw new GoogleSignInError('MISSING_ID_TOKEN');
      }
      return idToken;
    })();
  }
  isUserCancellation(error) {
    return typeof error === 'object' && error !== null && 'code' in error && String(error.code ?? '') === 'USER_CANCELLED';
  }
  get clientId() {
    return String(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.googleWebClientId ?? '').trim();
  }
  get redirectUrl() {
    return String(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.googleRedirectUrl ?? '').trim();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function GoogleSignInService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GoogleSignInService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: GoogleSignInService,
    factory: GoogleSignInService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 9785
/*!***************************************************!*\
  !*** ./src/app/services/i18n/language.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
var _staticBlock;



class LanguageService {
  constructor(translate, document) {
    this.translate = translate;
    this.document = document;
    this.storageKey = 'tingilin_lang';
    this.supportedLanguages = ['fr', 'en'];
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setFallbackLang('fr');
  }
  init() {
    const stored = this.safeGetLocalStorage(this.storageKey);
    const detected = this.detectBrowserLanguage();
    this.use(this.normalize(stored) ?? detected ?? 'fr');
  }
  use(language) {
    const normalized = this.normalize(language) ?? 'fr';
    this.translate.use(normalized);
    this.document.documentElement.setAttribute('lang', normalized);
    this.safeSetLocalStorage(this.storageKey, normalized);
  }
  toggle() {
    this.use(this.current === 'fr' ? 'en' : 'fr');
  }
  get current() {
    const active = this.normalize(this.translate.currentLang);
    if (active) return active;
    const fallback = this.normalize(this.translate.getFallbackLang());
    return fallback ?? 'fr';
  }
  is(language) {
    return this.current === language;
  }
  detectBrowserLanguage() {
    if (typeof navigator === 'undefined') return null;
    const raw = String(navigator.language ?? '').trim().toLowerCase();
    if (!raw) return null;
    if (raw.startsWith('en')) return 'en';
    return 'fr';
  }
  normalize(language) {
    const value = String(language ?? '').trim().toLowerCase();
    if (value === 'fr' || value.startsWith('fr-')) return 'fr';
    if (value === 'en' || value.startsWith('en-')) return 'en';
    return null;
  }
  safeGetLocalStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  safeSetLocalStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore storage errors on restricted environments
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LanguageService)(_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  }, this.ɵprov = /*@__PURE__*/_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LanguageService,
    factory: LanguageService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 9669
/*!************************************************************!*\
  !*** ./src/app/services/offline/network-status.service.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkStatusService: () => (/* binding */ NetworkStatusService),
/* harmony export */   isConstrainedConnection: () => (/* binding */ isConstrainedConnection)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;


function isConstrainedConnection(connection) {
  if (!connection) return false;
  if (connection.saveData === true) return true;
  const effectiveType = String(connection.effectiveType ?? '').toLowerCase();
  if (['slow-2g', '2g', '3g'].includes(effectiveType)) return true;
  const downlink = Number(connection.downlink ?? 0);
  return Number.isFinite(downlink) && downlink > 0 && downlink <= 1.5;
}
class NetworkStatusService {
  constructor() {
    this.connection = this.readConnection();
    this.onlineSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(typeof navigator === 'undefined' ? true : navigator.onLine);
    this.constrainedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(isConstrainedConnection(this.connection));
    this.online$ = this.onlineSubject.asObservable();
    this.offline$ = this.online$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(online => !online));
    this.constrained$ = this.constrainedSubject.asObservable();
    if (typeof window === 'undefined') {
      return;
    }
    const refresh = () => {
      this.onlineSubject.next(navigator.onLine);
      this.constrainedSubject.next(isConstrainedConnection(this.connection));
    };
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'online'), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(window, 'offline')).subscribe(refresh);
    this.connection?.addEventListener?.('change', refresh);
  }
  isOnline() {
    return this.onlineSubject.value;
  }
  isOffline() {
    return !this.isOnline();
  }
  isConstrained() {
    return this.constrainedSubject.value;
  }
  readConnection() {
    if (typeof navigator === 'undefined') return undefined;
    return navigator.connection;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NetworkStatusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NetworkStatusService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: NetworkStatusService,
    factory: NetworkStatusService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 2616
/*!******************************************************************!*\
  !*** ./src/app/services/offline/offline-action-queue.service.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfflineActionQueueService: () => (/* binding */ OfflineActionQueueService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var src_app_shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/storage/app-storage.service */ 2450);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _network_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./network-status.service */ 9669);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth.service */ 1339);

var _staticBlock;







class OfflineActionQueueService {
  constructor(storage, http, networkStatus, auth) {
    this.storage = storage;
    this.http = http;
    this.networkStatus = networkStatus;
    this.auth = auth;
    this.storageKey = 'offline-action-queue:v1';
    this.queueSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiBaseUrl;
    this.isInitialized = false;
    this.isFlushing = false;
    // Incremente a chaque changement de session: invalide tout flush en cours.
    this.sessionEpoch = 0;
    this.queue$ = this.queueSubject.asObservable();
    this.pendingCount$ = this.queue$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(items => items.length));
    this.networkStatus.online$.subscribe(online => {
      if (online) {
        void this.flush();
      }
    });
    // Changement de compte: on purge les actions en attente du compte precedent
    // (sinon elles pourraient s'executer sous le nouveau compte).
    this.auth.sessionReset$.subscribe(() => void this.clearForSession());
  }
  /** Vide la file (memoire + stockage) lors d'un changement de session. */
  clearForSession() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sessionEpoch++; // invalide tout flush() en cours (anti-course)
      _this.queueSubject.next([]);
      try {
        yield _this.storage.remove(_this.storageKey);
      } catch {
        // best-effort
      }
    })();
  }
  init() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.isInitialized) return;
      _this2.isInitialized = true;
      const stored = yield _this2.storage.getJson(_this2.storageKey);
      _this2.queueSubject.next(Array.isArray(stored) ? stored : []);
      if (_this2.networkStatus.isOnline()) {
        yield _this2.flush();
      }
    })();
  }
  enqueueNotificationMarkRead(id) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.enqueue({
        id: _this3.makeId(),
        type: 'notifications.mark-read',
        payload: {
          id
        },
        dedupeKey: `notifications:mark-read:${id}`,
        createdAt: new Date().toISOString()
      });
    })();
  }
  enqueueNotificationMarkAllRead() {
    var _this4 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nextQueue = _this4.queueSubject.value.filter(item => item.type !== 'notifications.mark-read');
      _this4.queueSubject.next(nextQueue);
      yield _this4.persist();
      yield _this4.enqueue({
        id: _this4.makeId(),
        type: 'notifications.mark-all-read',
        dedupeKey: 'notifications:mark-all-read',
        createdAt: new Date().toISOString()
      });
    })();
  }
  flush() {
    var _this5 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.isInitialized || _this5.isFlushing || _this5.networkStatus.isOffline()) {
        return;
      }
      _this5.isFlushing = true;
      const epoch = _this5.sessionEpoch;
      try {
        let queue = [..._this5.queueSubject.value];
        while (queue.length > 0) {
          const current = queue[0];
          const success = yield _this5.process(current);
          // Changement de compte pendant le traitement: on abandonne SANS
          // re-persister (la purge clearForSession fait foi).
          if (_this5.sessionEpoch !== epoch) return;
          if (!success) break;
          queue = _this5.queueSubject.value.filter(item => item.id !== current.id);
          if (current.type === 'notifications.mark-all-read') {
            queue = queue.filter(item => item.type !== 'notifications.mark-read');
          }
          _this5.queueSubject.next(queue);
          yield _this5.persist();
        }
      } finally {
        _this5.isFlushing = false;
      }
    })();
  }
  enqueue(action) {
    var _this6 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queue = [..._this6.queueSubject.value];
      const existingIndex = action.dedupeKey ? queue.findIndex(item => item.dedupeKey === action.dedupeKey) : -1;
      if (existingIndex >= 0) {
        queue.splice(existingIndex, 1, action);
      } else {
        queue.push(action);
      }
      _this6.queueSubject.next(queue);
      yield _this6.persist();
    })();
  }
  process(action) {
    var _this7 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        switch (action.type) {
          case 'notifications.mark-read':
            {
              const id = String(action.payload?.['id'] ?? '').trim();
              if (!id) return true;
              yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this7.http.patch(`${_this7.baseUrl}/notifications/${id}/read`, {}));
              return true;
            }
          case 'notifications.mark-all-read':
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this7.http.patch(`${_this7.baseUrl}/notifications/read-all`, {}));
            return true;
          default:
            return true;
        }
      } catch (error) {
        return _this7.shouldDropFailedAction(error);
      }
    })();
  }
  shouldDropFailedAction(error) {
    if (this.networkStatus.isOffline()) {
      return false;
    }
    const status = Number(error?.status ?? 0);
    return status !== 0;
  }
  persist() {
    var _this8 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.storage.setJson(_this8.storageKey, _this8.queueSubject.value);
    })();
  }
  makeId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function OfflineActionQueueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OfflineActionQueueService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_6__.AppStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_network_status_service__WEBPACK_IMPORTED_MODULE_8__.NetworkStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: OfflineActionQueueService,
    factory: OfflineActionQueueService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 6857
/*!*************************************************!*\
  !*** ./src/app/services/theme/theme.service.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/storage/app-storage.service */ 2450);

var _staticBlock;


const STORAGE_KEY = 'tinguilin.theme';
/**
 * Gere le theme clair / sombre / systeme.
 *
 * Le CSS de `src/theme/variables.scss` applique automatiquement le theme
 * systeme via `prefers-color-scheme`. Ce service ne pose `data-theme` que
 * lorsqu'un choix explicite a ete fait, ce qui evite tout flash au demarrage.
 */
class ThemeService {
  constructor(storage) {
    this.storage = storage;
    this.mode = 'system';
    this.media = window.matchMedia('(prefers-color-scheme: dark)');
    this.onSystemChange = () => {
      if (this.mode === 'system') this.apply();
    };
  }
  get current() {
    return this.mode;
  }
  init() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const stored = yield _this.storage.get(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        _this.mode = stored;
      }
      _this.media.addEventListener('change', _this.onSystemChange);
      _this.apply();
    })();
  }
  set(mode) {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.mode = mode;
      yield _this2.storage.set(STORAGE_KEY, mode);
      _this2.apply();
    })();
  }
  apply() {
    const root = document.documentElement;
    if (this.mode === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', this.mode);
    }
    // Couleur de la barre du navigateur / du systeme.
    const effective = this.mode === 'system' ? this.media.matches ? 'dark' : 'light' : this.mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', effective === 'dark' ? '#0d0913' : '#f7f4fc');
    // Miroir synchrone pour le script anti-FOUC de index.html.
    try {
      localStorage.setItem(STORAGE_KEY, this.mode);
    } catch {
      /* stockage indisponible : le theme reste applique pour la session */
    }
  }
  ngOnDestroy() {
    this.media.removeEventListener('change', this.onSystemChange);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_2__.AppStorageService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 8492
/*!*********************************************************************!*\
  !*** ./src/app/shared/language-switch/language-switch.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSwitchComponent: () => (/* binding */ LanguageSwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_i18n_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/i18n/language.service */ 9785);
var _staticBlock;


class LanguageSwitchComponent {
  constructor(language) {
    this.language = language;
    this.compact = false;
  }
  setLanguage(next) {
    this.language.use(next);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LanguageSwitchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LanguageSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_i18n_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LanguageSwitchComponent,
    selectors: [["app-language-switch"]],
    inputs: {
      compact: "compact"
    },
    standalone: false,
    decls: 5,
    vars: 6,
    consts: [[1, "lang-switch"], ["type", "button", "aria-label", "Fran\u00E7ais", 1, "lang-btn", 3, "click"], ["type", "button", "aria-label", "English", 1, "lang-btn", 3, "click"]],
    template: function LanguageSwitchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageSwitchComponent_Template_button_click_1_listener() {
          return ctx.setLanguage("fr");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageSwitchComponent_Template_button_click_3_listener() {
          return ctx.setLanguage("en");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " EN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("compact", ctx.compact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.language.is("fr"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.language.is("en"));
      }
    },
    styles: [".lang-switch[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px;\n  border-radius: 999px;\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  box-shadow: none;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n\n.lang-btn[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 999px;\n  min-width: 36px;\n  height: 30px;\n  padding: 0 10px;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  color: var(--app-muted);\n  background: transparent;\n}\n\n.lang-btn.active[_ngcontent-%COMP%] {\n  color: var(--app-on-primary);\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\n.lang-switch.compact[_ngcontent-%COMP%] {\n  transform: scale(0.92);\n  transform-origin: right center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2xhbmd1YWdlLXN3aXRjaC9sYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZy1zd2l0Y2gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4ubGFuZy1idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubGFuZy1idG4uYWN0aXZlIHtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubGFuZy1zd2l0Y2guY29tcGFjdCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 2043
/*!******************************************************************!*\
  !*** ./src/app/shared/language-switch/language-switch.module.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSwitchModule: () => (/* binding */ LanguageSwitchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _language_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language-switch.component */ 8492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




class LanguageSwitchModule {
  static #_ = _staticBlock = () => (this.ɵfac = function LanguageSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LanguageSwitchModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LanguageSwitchModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LanguageSwitchModule, {
    declarations: [_language_switch_component__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule],
    exports: [_language_switch_component__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitchComponent]
  });
})();

/***/ },

/***/ 4017
/*!*************************************************!*\
  !*** ./src/app/shared/region-picker/regions.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USER_REGION_OPTIONS: () => (/* binding */ USER_REGION_OPTIONS)
/* harmony export */ });
const USER_REGION_OPTIONS = [{
  value: 'CENTRE',
  labelKey: 'REGION_PICKER.CENTRE',
  citiesKey: 'REGION_PICKER.CENTRE_CITIES'
}, {
  value: 'LITTORAL',
  labelKey: 'REGION_PICKER.LITTORAL',
  citiesKey: 'REGION_PICKER.LITTORAL_CITIES'
}, {
  value: 'OUEST',
  labelKey: 'REGION_PICKER.OUEST',
  citiesKey: 'REGION_PICKER.OUEST_CITIES'
}, {
  value: 'SUD_OUEST',
  labelKey: 'REGION_PICKER.SUD_OUEST',
  citiesKey: 'REGION_PICKER.SUD_OUEST_CITIES'
}];

/***/ },

/***/ 2450
/*!*******************************************************!*\
  !*** ./src/app/shared/storage/app-storage.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStorageService: () => (/* binding */ AppStorageService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/preferences */ 6493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);

var _staticBlock;



class AppStorageService {
  constructor() {
    this.isNative = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() !== 'web';
    this.memory = new Map();
  }
  get(key) {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.memory.has(key)) {
        return _this.memory.get(key) ?? null;
      }
      if (!_this.isNative) {
        const value = localStorage.getItem(key);
        _this.memory.set(key, value);
        return value;
      }
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__.Preferences.get({
        key
      });
      _this.memory.set(key, value ?? null);
      return value ?? null;
    })();
  }
  set(key, value) {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.memory.set(key, value);
      if (!_this2.isNative) {
        localStorage.setItem(key, value);
        return;
      }
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__.Preferences.set({
        key,
        value
      });
    })();
  }
  remove(key) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.memory.delete(key);
      if (!_this3.isNative) {
        localStorage.removeItem(key);
        return;
      }
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_2__.Preferences.remove({
        key
      });
    })();
  }
  getJson(key) {
    var _this4 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raw = yield _this4.get(key);
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch {
        return null;
      }
    })();
  }
  setJson(key, value) {
    var _this5 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.set(key, JSON.stringify(value));
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AppStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppStorageService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AppStorageService,
    factory: AppStorageService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 4591
/*!******************************************!*\
  !*** ./src/environments/api-base-url.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveApiBaseUrl: () => (/* binding */ resolveApiBaseUrl)
/* harmony export */ });
const FALLBACK_API_BASE_URL = 'https://backend.tinguilin.yaba-in.com/api/v1';
const PLACEHOLDER_DOMAIN_PATTERN = /(ton[_-]?domaine|your[_-]?domain|example\.com)/i;
function resolveApiBaseUrl(rawUrl) {
  const normalized = String(rawUrl ?? '').trim().replace(/\/+$/, '');
  if (!normalized || PLACEHOLDER_DOMAIN_PATTERN.test(normalized)) {
    return FALLBACK_API_BASE_URL;
  }
  return normalized;
}

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _api_base_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-base-url */ 4591);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  production: false,
  // apiBaseUrl: 'https://backend.tinguilin.yaba-in.com/api/v1',
  apiBaseUrl: (0,_api_base_url__WEBPACK_IMPORTED_MODULE_0__.resolveApiBaseUrl)('https://backend.tinguilin.yaba-in.com/api/v1'),
  //  apiBaseUrl: resolveApiBaseUrl('http://localhost:8100/api/v1'),
  paymentProvider: 'DIGIKUNTZ',
  supportEmail: '',
  // Google Sign-In (Web OAuth Client ID, "xxxx.apps.googleusercontent.com").
  // Utilise par SocialLogin sur Android/web. Ce Client ID public doit aussi
  // etre configure dans GOOGLE_CLIENT_ID sur l'API pour verifier l'idToken.
  // A REMPLIR manuellement (voir console Google Cloud) - vide = Google desactive.
  googleWebClientId: '352465042993-mdn2aug25q85ohc8gce28gec5hinn4jv.apps.googleusercontent.com',
  // Doit correspondre exactement a une URI de redirection autorisee dans le
  // client OAuth Web Google (schema, domaine, port et chemin compris).
  googleRedirectUrl: 'http://localhost:8100/auth/login'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
*/
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 466);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 635);



(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_1__.defineCustomElements)(window);
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule).catch(err => console.log(err));

/***/ },

/***/ 6120
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ referencedExports: ,  namespace object ***!
  \****************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
		]
	],
	"./ion-action-sheet.entry.js": [
		1981,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
		]
	],
	"./ion-alert.entry.js": [
		1603,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
		]
	],
	"./ion-app_8.entry.js": [
		2273,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
		]
	],
	"./ion-avatar_3.entry.js": [
		9642,
		[
			"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
		]
	],
	"./ion-back-button.entry.js": [
		2095,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
		]
	],
	"./ion-backdrop.entry.js": [
		2335,
		[
			"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
		]
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
		]
	],
	"./ion-button_2.entry.js": [
		7184,
		[
			"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
		]
	],
	"./ion-card_5.entry.js": [
		8759,
		[
			"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
		]
	],
	"./ion-checkbox.entry.js": [
		4248,
		[
			"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
		]
	],
	"./ion-chip.entry.js": [
		9863,
		[
			"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
		]
	],
	"./ion-col_3.entry.js": [
		1769,
		[
			"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
		]
	],
	"./ion-datetime-button.entry.js": [
		2569,
		[
			"default-node_modules_ionic_core_dist_esm_data-DCORV9FH_js",
			"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
		]
	],
	"./ion-datetime_3.entry.js": [
		6534,
		[
			"default-node_modules_ionic_core_dist_esm_data-DCORV9FH_js",
			"common",
			"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
		]
	],
	"./ion-fab_3.entry.js": [
		5458,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
		]
	],
	"./ion-img.entry.js": [
		654,
		[
			"node_modules_ionic_core_dist_esm_ion-img_entry_js"
		]
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
		]
	],
	"./ion-input-otp.entry.js": [
		381,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
		]
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
		]
	],
	"./ion-input.entry.js": [
		761,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-DrvTa8gz_js-node_modules_ionic_core_dist-772781",
			"common",
			"node_modules_ionic_core_dist_esm_ion-input_entry_js"
		]
	],
	"./ion-item-option_3.entry.js": [
		6492,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
		]
	],
	"./ion-item_8.entry.js": [
		9557,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
		]
	],
	"./ion-loading.entry.js": [
		8353,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
		]
	],
	"./ion-menu_3.entry.js": [
		1024,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
		]
	],
	"./ion-modal.entry.js": [
		9160,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
		]
	],
	"./ion-nav_2.entry.js": [
		393,
		[
			"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
		]
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		[
			"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
		]
	],
	"./ion-picker-column.entry.js": [
		3110,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
		]
	],
	"./ion-picker.entry.js": [
		5575,
		[
			"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
		]
	],
	"./ion-popover.entry.js": [
		6772,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
		]
	],
	"./ion-progress-bar.entry.js": [
		4810,
		[
			"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
		]
	],
	"./ion-radio_2.entry.js": [
		4639,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
		]
	],
	"./ion-range.entry.js": [
		628,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-range_entry_js"
		]
	],
	"./ion-refresher_2.entry.js": [
		852,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
		]
	],
	"./ion-reorder_2.entry.js": [
		1479,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
		]
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		[
			"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
		]
	],
	"./ion-route_4.entry.js": [
		7971,
		[
			"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
		]
	],
	"./ion-searchbar.entry.js": [
		3184,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
		]
	],
	"./ion-segment-content.entry.js": [
		4312,
		[
			"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
		]
	],
	"./ion-segment-view.entry.js": [
		4540,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
		]
	],
	"./ion-segment_2.entry.js": [
		469,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
		]
	],
	"./ion-select-modal.entry.js": [
		7101,
		[
			"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
		]
	],
	"./ion-select_3.entry.js": [
		8471,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
		]
	],
	"./ion-spinner.entry.js": [
		388,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
		]
	],
	"./ion-split-pane.entry.js": [
		2392,
		[
			"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
		]
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
		]
	],
	"./ion-tab_2.entry.js": [
		5427,
		[
			"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
		]
	],
	"./ion-text.entry.js": [
		198,
		[
			"node_modules_ionic_core_dist_esm_ion-text_entry_js"
		]
	],
	"./ion-textarea.entry.js": [
		1735,
		[
			"default-node_modules_ionic_core_dist_esm_input_utils-DrvTa8gz_js-node_modules_ionic_core_dist-772781",
			"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
		]
	],
	"./ion-toast.entry.js": [
		7510,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
		]
	],
	"./ion-toggle.entry.js": [
		5297,
		[
			"common",
			"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
		]
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids[1].map(__webpack_require__.e)).then(() => (__webpack_require__(id)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6120;
module.exports = webpackAsyncContext;

/***/ },

/***/ 1169
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ referencedExports: ,  namespace object ***!
  \************************************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		5222,
		[
			"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
		]
	],
	"./pwa-camera-modal-instance.entry.js": [
		9253,
		[
			"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
		]
	],
	"./pwa-camera-modal.entry.js": [
		9577,
		[
			"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
		]
	],
	"./pwa-camera.entry.js": [
		2217,
		[
			"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
		]
	],
	"./pwa-toast.entry.js": [
		71,
		[
			"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
		]
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1][0]).then(() => (__webpack_require__(id)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 1169;
module.exports = webpackAsyncContext;

/***/ },

/***/ 7162
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ referencedExports: ,  strict namespace object ***!
  \**********************************************************************************************************************************************************************************/
(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 7162;
module.exports = webpackEmptyAsyncContext;

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map