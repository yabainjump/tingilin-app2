"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_home_home-api_service_ts-src_app_shared_engagement_trust-stats_compo-2dbea6"],{

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

/***/ 5712
/*!***************************************************************!*\
  !*** ./src/app/services/engagement/engagement-api.service.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngagementApiService: () => (/* binding */ EngagementApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;





/** Chiffres de confiance publics + sondage "choisis le prochain lot". */
class EngagementApiService {
  constructor(http) {
    this.http = http;
    this.base = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
  }
  trustStats() {
    return this.http.get(`${this.base}/raffles/trust-stats`);
  }
  activePoll() {
    return this.http.get(`${this.base}/polls/active`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => this.normalizePoll(res?.poll ?? null)));
  }
  myVote() {
    return this.http.get(`${this.base}/polls/active/me`);
  }
  vote(pollId, optionId) {
    return this.http.post(`${this.base}/polls/${encodeURIComponent(pollId)}/vote`, {
      optionId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => this.normalizePoll(res?.poll ?? null)));
  }
  normalizePoll(poll) {
    if (!poll) return null;
    return {
      ...poll,
      options: (poll.options ?? []).map(o => ({
        ...o,
        // Seules les images servies par l'API sont affichees.
        imageUrl: String(o.imageUrl ?? '').startsWith('/uploads/') ? (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_2__.toAbsoluteMediaUrl)(o.imageUrl, this.base) ?? '' : ''
      }))
    };
  }
  static #_ = _staticBlock = () => (this.ɵfac = function EngagementApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EngagementApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: EngagementApiService,
    factory: EngagementApiService.ɵfac,
    providedIn: 'root'
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
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
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
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

/***/ 2073
/*!************************************************************!*\
  !*** ./src/app/shared/engagement/trust-stats.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrustStatsComponent: () => (/* binding */ TrustStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_engagement_engagement_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/engagement/engagement-api.service */ 5712);
var _staticBlock;








function TrustStatsComponent_section_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.compactXaf(ctx_r0.stats.prizesValueXaf));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 2, "ENGAGEMENT.TRUST_VALUE"));
  }
}
function TrustStatsComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TrustStatsComponent_section_0_div_9_Template, 7, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, ctx_r0.stats.prizesDelivered));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, "ENGAGEMENT.TRUST_DELIVERED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.stats.prizesValueXaf > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 9, ctx_r0.stats.verifiableDraws));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 11, "ENGAGEMENT.TRUST_VERIFIABLE"));
  }
}
/** Compteur public "37 lots remis · 2,1 M FCFA de lots · tirages verifiables". */
class TrustStatsComponent {
  constructor(api, cdr) {
    this.api = api;
    this.cdr = cdr;
    this.stats = null;
  }
  ngOnInit() {
    this.api.trustStats().subscribe({
      next: stats => {
        this.stats = stats;
        this.cdr.markForCheck();
      },
      error: () => {
        this.stats = null;
        this.cdr.markForCheck();
      }
    });
  }
  /** 2 100 000 -> "2,1 M FCFA", 850 000 -> "850 k FCFA". */
  compactXaf(amount) {
    const n = Math.max(0, Number(amount) || 0);
    const fmt = v => v.toLocaleString('fr-FR', {
      maximumFractionDigits: 1
    });
    if (n >= 1_000_000) return `${fmt(n / 1_000_000)} M FCFA`;
    if (n >= 10_000) return `${fmt(n / 1000)} k FCFA`;
    return `${fmt(n)} FCFA`;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TrustStatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TrustStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_engagement_engagement_api_service__WEBPACK_IMPORTED_MODULE_5__.EngagementApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TrustStatsComponent,
    selectors: [["app-trust-stats"]],
    decls: 1,
    vars: 1,
    consts: [["class", "trust", 4, "ngIf"], [1, "trust"], [1, "tile"], ["name", "gift-outline", "aria-hidden", "true"], [1, "v"], [1, "k"], ["class", "tile", 4, "ngIf"], ["name", "shield-checkmark-outline", "aria-hidden", "true"], ["name", "cash-outline", "aria-hidden", "true"]],
    template: function TrustStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TrustStatsComponent_section_0_Template, 18, 13, "section", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.stats && ctx.stats.winners > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".trust[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(92px, 1fr));\n  gap: 8px;\n  margin: 14px 0;\n}\n\n.tile[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  border-radius: var(--app-radius, 14px);\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  text-align: center;\n  min-width: 0;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--app-warning);\n}\n\n.v[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--app-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.k[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 11px;\n  color: var(--app-muted);\n  line-height: 1.25;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2VuZ2FnZW1lbnQvdHJ1c3Qtc3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsYUFBQTtFQUNBLDBEQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFBUjs7QUFFTTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ007RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFFUjs7QUFBTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0FBR1I7O0FBRE07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFJUiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnRydXN0IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg5MnB4LCAxZnIpKTtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1hcmdpbjogMTRweCAwO1xuICAgICAgfVxuICAgICAgLnRpbGUge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1yYWRpdXMsIDE0cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLXdhcm5pbmcpO1xuICAgICAgfVxuICAgICAgLnYge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xuICAgICAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICAgICAgfVxuICAgICAgLmsge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=default-src_app_services_home_home-api_service_ts-src_app_shared_engagement_trust-stats_compo-2dbea6.js.map