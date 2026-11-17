"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 5452
/*!**************************************************!*\
  !*** ./src/app/core/api/payments-api.service.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentsApiService: () => (/* binding */ PaymentsApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;



class PaymentsApiService {
  constructor(http) {
    this.http = http;
    this.base = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}`;
  }
  createIntent(payload) {
    return this.http.post(`${this.base}/payments/intent`, payload);
  }
  verifyDigikuntz(transactionId) {
    return this.http.post(`${this.base}/payments/digikuntz/verify`, {
      transactionId
    });
  }
  mockConfirm(transactionId, providerRef) {
    return this.http.post(`${this.base}/payments/mock/confirm`, {
      transactionId,
      providerRef
    });
  }
  useFreeTicket(raffleId) {
    return this.http.post(`${this.base}/payments/free-ticket`, {
      raffleId
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function PaymentsApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaymentsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PaymentsApiService,
    factory: PaymentsApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 7316
/*!*********************************************************************!*\
  !*** ./src/app/services/notifications/notifications-api.service.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsApiService: () => (/* binding */ NotificationsApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _offline_offline_action_queue_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../offline/offline-action-queue.service */ 2616);
/* harmony import */ var _offline_network_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../offline/network-status.service */ 9669);
var _staticBlock;






class NotificationsApiService {
  constructor(http, offlineQueue, networkStatus) {
    this.http = http;
    this.offlineQueue = offlineQueue;
    this.networkStatus = networkStatus;
    this.base = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}`;
  }
  me(page = 1, limit = 20, unreadOnly = false) {
    const u = unreadOnly ? '1' : '0';
    return this.http.get(`${this.base}/notifications/me?page=${page}&limit=${limit}&unreadOnly=${u}`);
  }
  unreadCount() {
    return this.http.get(`${this.base}/notifications/unread-count`);
  }
  markRead(id) {
    if (this.networkStatus.isOffline()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.offlineQueue.enqueueNotificationMarkRead(id)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => ({
        queued: true
      })));
    }
    return this.http.patch(`${this.base}/notifications/${id}/read`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      if (Number(error?.status ?? 0) !== 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.offlineQueue.enqueueNotificationMarkRead(id)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => ({
        queued: true
      })));
    }));
  }
  markAllRead() {
    if (this.networkStatus.isOffline()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.offlineQueue.enqueueNotificationMarkAllRead()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => ({
        queued: true
      })));
    }
    return this.http.patch(`${this.base}/notifications/read-all`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      if (Number(error?.status ?? 0) !== 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.offlineQueue.enqueueNotificationMarkAllRead()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(() => ({
        queued: true
      })));
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_offline_offline_action_queue_service__WEBPACK_IMPORTED_MODULE_7__.OfflineActionQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_offline_network_status_service__WEBPACK_IMPORTED_MODULE_8__.NetworkStatusService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: NotificationsApiService,
    factory: NotificationsApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 2050
/*!***********************************************************************!*\
  !*** ./src/app/services/notifications/notifications-state.service.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsStateService: () => (/* binding */ NotificationsStateService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _notifications_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications-api.service */ 7316);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ 1339);

var _staticBlock;




class NotificationsStateService {
  constructor(api, auth) {
    this.api = api;
    this.auth = auth;
    this._unread = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this.unreadCount$ = this._unread.asObservable();
    this.refreshInFlight = null;
    // Changement de compte: on remet le compteur a zero pour eviter d'afficher
    // les non-lus du compte precedent.
    this.auth.sessionReset$.subscribe(() => this._unread.next(0));
  }
  refresh() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.auth.isLoggedIn()) {
        _this._unread.next(0);
        return;
      }
      // Deduplication: si un rafraichissement est deja en vol, on partage sa reponse
      // au lieu de doubler la requete.
      if (_this.refreshInFlight) return _this.refreshInFlight;
      _this.refreshInFlight = _this.doRefresh().finally(() => {
        _this.refreshInFlight = null;
      });
      return _this.refreshInFlight;
    })();
  }
  doRefresh() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this2.api.unreadCount());
        _this2._unread.next(res.count || 0);
      } catch {
        // ignore
      }
    })();
  }
  setLocal(count) {
    this._unread.next(Math.max(0, Number(count || 0)));
  }
  markOneReadLocal() {
    this._unread.next(Math.max(0, this._unread.value - 1));
  }
  markAllReadLocal() {
    this._unread.next(0);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function NotificationsStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NotificationsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_notifications_api_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NotificationsStateService,
    factory: NotificationsStateService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 2068
/*!*********************************************************!*\
  !*** ./src/app/services/profile/profile-api.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileApiService: () => (/* binding */ ProfileApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ 1339);
var _staticBlock;






class ProfileApiService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseUrl;
  }
  normalizeUser(raw) {
    const avatar = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteMediaUrl)(raw?.avatar, this.baseUrl);
    return {
      ...raw,
      avatar: avatar ?? raw?.avatar
    };
  }
  normalizeHistoryItem(raw) {
    const imageUrl = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteMediaUrl)(raw?.imageUrl, this.baseUrl);
    return {
      ...raw,
      imageUrl: imageUrl ?? raw?.imageUrl
    };
  }
  me() {
    return this.http.get(`${this.baseUrl}/users/me`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(raw => this.normalizeUser(raw))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null)));
  }
  updateMe(dto) {
    return this.http.patch(`${this.baseUrl}/users/me`, dto);
  }
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.patch(`${this.baseUrl}/users/me/avatar`, formData);
  }
  stats() {
    if (!this.auth.isLoggedIn()) return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    return this.http.get(`${this.baseUrl}/users/me/stats`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null)));
  }
  history(limit = 7) {
    const mock = [];
    if (!this.auth.isLoggedIn()) return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(mock.slice(0, limit));
    return this.http.get(`${this.baseUrl}/users/me/history?limit=${limit}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(rows => (rows ?? []).map(row => this.normalizeHistoryItem(row)))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(mock.slice(0, limit))));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ProfileApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ProfileApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProfileApiService,
    factory: ProfileApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 6448
/*!*********************************************************!*\
  !*** ./src/app/services/raffles/raffles-api.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RafflesApiService: () => (/* binding */ RafflesApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
var _staticBlock;




class RafflesApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.refresh$ = this.refreshSubject.asObservable();
  }
  adminCreateWithProduct(dto) {
    return this.http.post(`${this.baseUrl}/raffles/admin/create-with-product`, dto);
  }
  uploadAdminProductImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/admin/products/upload-image`, formData);
  }
  triggerRefresh() {
    this.refreshSubject.next();
  }
  getPublicById(id) {
    return this.http.get(`${this.baseUrl}/raffles/public/${id}`);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RafflesApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RafflesApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: RafflesApiService,
    factory: RafflesApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 1532
/*!****************************************************************!*\
  !*** ./src/app/services/raffles/raffles-public-api.service.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RafflesPublicApiService: () => (/* binding */ RafflesPublicApiService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3255);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var src_app_shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/storage/app-storage.service */ 2450);
/* harmony import */ var _offline_network_status_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../offline/network-status.service */ 9669);

var _staticBlock;







class RafflesPublicApiService {
  constructor(http, storage, networkStatus) {
    this.http = http;
    this.storage = storage;
    this.networkStatus = networkStatus;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiBaseUrl;
    this.storagePrefix = 'offline:raffle-details:';
  }
  normalizeRaffle(raw) {
    const topTitle = String(raw?.title ?? '').trim();
    const productTitle = String(raw?.product?.title ?? '').trim();
    const description = [raw?.description, raw?.product?.description, raw?.subtitle, raw?.rules].map(value => String(value ?? '').trim()).find(Boolean) ?? '';
    const topImage = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_9__.toAbsoluteMediaUrl)(raw?.imageUrl ?? raw?.image, this.baseUrl);
    const productImage = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_9__.toAbsoluteMediaUrl)(raw?.product?.imageUrl || raw?.product?.image || raw?.product?.images?.[0], this.baseUrl);
    return {
      ...raw,
      id: String(raw?._id ?? raw?.id ?? ''),
      title: topTitle || productTitle || '—',
      description,
      imageUrl: topImage ?? productImage ?? raw?.imageUrl,
      product: raw?.product ? {
        ...raw.product,
        imageUrl: productImage ?? raw.product.imageUrl,
        image: productImage ?? raw.product.image
      } : raw?.product
    };
  }
  getById(id) {
    const request$ = this.http.get(`${this.baseUrl}/raffles/public/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(raw => this.normalizeRaffle(raw)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(raffle => void this.persistRaffle(id, raffle)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      // Une reponse 4xx est une reponse metier definitive (raffle absente,
      // non publique, etc.). Ne jamais la masquer avec une ancienne copie,
      // sinon un ancien statut DRAWN peut rester affiche apres une mise a jour.
      if (error.status >= 400 && error.status < 500) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }
      return this.loadStoredRaffle(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(cached => cached ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cached.value) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error)));
    }));
    if (this.networkStatus.isOffline()) {
      return this.loadStoredRaffle(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(cached => cached ? (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cached.value) : request$));
    }
    return request$;
  }
  persistRaffle(id, raffle) {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.setJson(`${_this.storagePrefix}${id}`, {
        savedAt: new Date().toISOString(),
        value: raffle
      });
    })();
  }
  loadStoredRaffle(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.getJson(`${this.storagePrefix}${id}`));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RafflesPublicApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RafflesPublicApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_shared_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_12__.AppStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_offline_network_status_service__WEBPACK_IMPORTED_MODULE_13__.NetworkStatusService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: RafflesPublicApiService,
    factory: RafflesPublicApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 213
/*!*****************************************************************************!*\
  !*** ./src/app/services/responsible-play/responsible-play-guard.service.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiblePlayGuardService: () => (/* binding */ ResponsiblePlayGuardService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _responsible_play_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsible-play-api.service */ 6980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _auth_auth_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth-state.service */ 6247);

var _staticBlock;








/**
 * Traduit les refus "jeu responsable" de l'API en dialogues clairs:
 *  - 18+ non confirme  -> le joueur confirme, puis on relance l'achat;
 *  - limite atteinte   -> message + acces direct a la page de limite.
 * L'API reste l'autorite: ce service ne fait qu'expliquer ses refus.
 */
class ResponsiblePlayGuardService {
  constructor(api, alerts, translate, router, authState) {
    this.api = api;
    this.alerts = alerts;
    this.translate = translate;
    this.router = router;
    this.authState = authState;
  }
  handlePurchaseError(err) {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const code = (0,_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_2__.apiErrorCode)(err);
      if (code === _responsible_play_api_service__WEBPACK_IMPORTED_MODULE_2__.AGE_CONFIRMATION_REQUIRED) {
        return (yield _this.askAdultConfirmation()) ? 'RETRY' : 'HANDLED';
      }
      if (code === _responsible_play_api_service__WEBPACK_IMPORTED_MODULE_2__.SPENDING_LIMIT_REACHED) {
        yield _this.showLimitReached((0,_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_2__.apiErrorMessage)(err));
        return 'HANDLED';
      }
      return 'UNHANDLED';
    })();
  }
  /** Vrai si le joueur a confirme ses 18 ans (et que l'API l'a enregistre). */
  askAdultConfirmation() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = k => _this2.translate.instant(`RESPONSIBLE_PLAY.${k}`);
      const alert = yield _this2.alerts.create({
        header: t('AGE_TITLE'),
        message: t('AGE_MESSAGE'),
        backdropDismiss: false,
        buttons: [{
          text: t('CANCEL'),
          role: 'cancel'
        }, {
          text: t('AGE_CONFIRM'),
          role: 'confirm'
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      if (role !== 'confirm') return false;
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this2.api.confirmAdult());
        _this2.authState.refreshMe();
        return true;
      } catch {
        const failed = yield _this2.alerts.create({
          header: t('AGE_TITLE'),
          message: t('AGE_CONFIRM_FAILED'),
          buttons: [t('OK')]
        });
        yield failed.present();
        return false;
      }
    })();
  }
  showLimitReached(serverMessage) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const t = k => _this3.translate.instant(`RESPONSIBLE_PLAY.${k}`);
      const alert = yield _this3.alerts.create({
        header: t('LIMIT_REACHED_TITLE'),
        message: serverMessage || t('LIMIT_REACHED_MESSAGE'),
        buttons: [{
          text: t('OK'),
          role: 'cancel'
        }, {
          text: t('MANAGE_LIMIT'),
          role: 'manage'
        }]
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      if (role === 'manage') {
        yield _this3.router.navigate(['/tabs/responsible-play']);
      }
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ResponsiblePlayGuardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ResponsiblePlayGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_responsible_play_api_service__WEBPACK_IMPORTED_MODULE_2__.ResponsiblePlayApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_7__.AuthStateService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ResponsiblePlayGuardService,
    factory: ResponsiblePlayGuardService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 9169
/*!*************************************************!*\
  !*** ./src/app/services/share/share.service.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareService: () => (/* binding */ ShareService)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);

var _staticBlock;


class ShareService {
  share(payload) {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const title = String(payload.title ?? '').trim();
      const text = String(payload.text ?? '').trim();
      const url = String(payload.url ?? '').trim();
      const data = {};
      if (title) data.title = title;
      if (text) data.text = text;
      if (url) data.url = url;
      if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
        try {
          yield navigator.share(data);
          return 'shared';
        } catch {
          // Continue with clipboard fallback.
        }
      }
      const fallback = [text, url].filter(Boolean).join(' ').trim() || title;
      yield _this.copyToClipboard(fallback);
      return 'copied';
    })();
  }
  // IMPORTANT: on partage les URLs du backend /share/* qui rendent une page
  // avec les balises Open Graph (image + description) PUIS redirigent vers
  // l'app. Partager directement la route SPA (/raffle-details/:id) ne donne
  // aucun apercu (pas de meta cote client) sur WhatsApp/Facebook/etc.
  raffleShareUrl(raffleId) {
    const id = encodeURIComponent(String(raffleId ?? '').trim());
    return `${this.shareOrigin()}/share/raffle/${id}`;
  }
  referralShareUrl(referralCode) {
    const code = encodeURIComponent(String(referralCode ?? '').trim().toUpperCase());
    return `${this.shareOrigin()}/share/referral/${code}`;
  }
  siteShareUrl(path = '/landing') {
    const normalized = this.normalizePath(path);
    return `${this.shareOrigin()}/share/site?to=${encodeURIComponent(normalized)}`;
  }
  liveShareUrl() {
    return `${this.shareOrigin()}/share/live`;
  }
  /** Origine du backend (sert les pages /share/* avec les meta Open Graph). */
  shareOrigin() {
    return this.apiOriginFromBase(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl);
  }
  apiOriginFromBase(baseUrl) {
    const raw = String(baseUrl ?? '').trim();
    if (!raw) return '';
    try {
      const u = new URL(raw);
      return `${u.protocol}//${u.host}`;
    } catch {
      return raw.replace(/\/api\/v1\/?$/i, '').replace(/\/+$/, '');
    }
  }
  normalizePath(path) {
    const value = String(path ?? '').trim();
    if (!value) return '/landing';
    return value.startsWith('/') ? value : `/${value}`;
  }
  copyToClipboard(value) {
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const text = String(value ?? '').trim();
      if (!text) return;
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        yield navigator.clipboard.writeText(text);
        return;
      }
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    })();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ShareService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShareService)();
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ShareService,
    factory: ShareService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 5580
/*!*********************************************************!*\
  !*** ./src/app/services/winners/winners-api.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WinnersApiService: () => (/* binding */ WinnersApiService),
/* harmony export */   normalizeWinner: () => (/* binding */ normalizeWinner)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utils/media-url */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;






/** N'accepte que les medias servis par l'API (jamais une URL arbitraire). */
function normalizeWinner(row, apiBaseUrl) {
  // Idempotent: accepte le chemin relatif renvoye par l'API ou l'URL deja
  // resolue sur l'origine de l'API (jamais un autre hote).
  const origin = (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_3__.apiOriginFromBase)(apiBaseUrl);
  let proofPath = String(row?.deliveryProof?.imageUrl ?? '');
  if (origin && proofPath.startsWith(`${origin}/`)) {
    proofPath = proofPath.slice(origin.length);
  }
  return {
    ...row,
    avatar: (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_3__.toAbsoluteMediaUrl)(row?.avatar, apiBaseUrl) ?? row?.avatar,
    prizeImageUrl: (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_3__.toAbsoluteMediaUrl)(row?.prizeImageUrl, apiBaseUrl) ?? row?.prizeImageUrl,
    deliveryProof: row?.deliveryProof && proofPath.startsWith('/uploads/deliveries/') ? {
      imageUrl: (0,src_app_shared_utils_media_url__WEBPACK_IMPORTED_MODULE_3__.toAbsoluteMediaUrl)(proofPath, apiBaseUrl) ?? '',
      testimonial: String(row.deliveryProof.testimonial ?? '').slice(0, 280),
      publishedAt: row.deliveryProof.publishedAt ?? null
    } : null
  };
}
class WinnersApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
  }
  list(limit = 20) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('limit', String(limit));
    return this.http.get(`${this.baseUrl}/raffles/winners/list`, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(res => Array.isArray(res) ? res : res?.data ?? []), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(rows => (rows ?? []).map(row => normalizeWinner(row, this.baseUrl))));
  }
  // Preuve verifiable du tirage (commit-reveal).
  fairness(raffleId) {
    return this.http.get(`${this.baseUrl}/raffles/${encodeURIComponent(raffleId)}/fairness`);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function WinnersApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WinnersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: WinnersApiService,
    factory: WinnersApiService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 2090
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-L570Swow.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_C8IsBmNU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-C8IsBmNU.js */ 6922);
/* harmony import */ var _haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-DzAMWJuk.js */ 8235);
/* harmony import */ var _index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-CfgBF1SE.js */ 5860);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target) || target.disabled) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_C8IsBmNU_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_C8IsBmNU_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_DzAMWJuk_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ },

/***/ 5051
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/capacitor-CFERIeaU.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getCapacitor)
/* harmony export */ });
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 575);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const getCapacitor = () => {
  if (_index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_0__.w !== undefined) {
    return _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor;
  }
  return undefined;
};


/***/ },

/***/ 9929
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ compareOptions),
/* harmony export */   i: () => (/* binding */ isOptionSelected)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Uses the compareWith param to compare two values to determine if they are equal.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
/**
 * Compares a value against the current value(s) to determine if it is selected.
 *
 * @param currentValue The current value of the control.
 * @param compareValue The value to compare against.
 * @param compareWith The function or property name to use to compare values.
 */
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some(val => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};


/***/ },

/***/ 1008
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-C53feagD.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ },

/***/ 2853
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-BmVRXR1y.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startFocusVisible: () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        // TODO(FW-2832): type
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown, {
    passive: true
  });
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};


/***/ },

/***/ 8235
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-DzAMWJuk.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ImpactStyle),
/* harmony export */   a: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   b: () => (/* binding */ hapticSelectionStart),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/* harmony import */ var _capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-CFERIeaU.js */ 5051);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ImpactStyle;
(function (ImpactStyle) {
  /**
   * A collision between large, heavy user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Heavy"] = "HEAVY";
  /**
   * A collision between moderately sized user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Medium"] = "MEDIUM";
  /**
   * A collision between small, light user interface elements
   *
   * @since 1.0.0
   */
  ImpactStyle["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function (NotificationType) {
  /**
   * A notification feedback type indicating that a task has completed successfully
   *
   * @since 1.0.0
   */
  NotificationType["Success"] = "SUCCESS";
  /**
   * A notification feedback type indicating that a task has produced a warning
   *
   * @since 1.0.0
   */
  NotificationType["Warning"] = "WARNING";
  /**
   * A notification feedback type indicating that a task has failed
   *
   * @since 1.0.0
   */
  NotificationType["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
const HapticEngine = {
  getEngine() {
    const capacitor = (0,_capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Haptics')) {
      // Capacitor
      return capacitor.Plugins.Haptics;
    }
    return undefined;
  },
  available() {
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    const capacitor = (0,_capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if ((capacitor === null || capacitor === void 0 ? void 0 : capacitor.getPlatform()) === 'web') {
      // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.impact({
      style: options.style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.notification({
      type: options.type
    });
  },
  selection() {
    this.impact({
      style: ImpactStyle.Light
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionStart();
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionChanged();
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.selectionEnd();
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: ImpactStyle.LIGHT }` (or `MEDIUM`/`HEAVY`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ },

/***/ 6995
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-Bs3kT4bc.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   a: () => (/* binding */ findIonContent),
/* harmony export */   b: () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   c: () => (/* binding */ scrollByPoint),
/* harmony export */   d: () => (/* binding */ disableContentScrollY),
/* harmony export */   f: () => (/* binding */ findClosestIonContent),
/* harmony export */   g: () => (/* binding */ getScrollElement),
/* harmony export */   i: () => (/* binding */ isIonContent),
/* harmony export */   p: () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   r: () => (/* binding */ resetContentScrollY),
/* harmony export */   s: () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _helpers_DEn3pfjm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-DEn3pfjm.js */ 6341);
/* harmony import */ var _index_C8IsBmNU_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-C8IsBmNU.js */ 6922);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */
const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_DEn3pfjm_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }
    return el;
  });
  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */
const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */
const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */
const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */
const printIonContentErrorMsg = el => {
  return (0,_index_C8IsBmNU_js__WEBPACK_IMPORTED_MODULE_2__.t)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */
const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */
    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


/***/ },

/***/ 7594
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-DV3sJJW8.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrowBackSharp),
/* harmony export */   b: () => (/* binding */ closeCircle),
/* harmony export */   c: () => (/* binding */ chevronBack),
/* harmony export */   d: () => (/* binding */ closeSharp),
/* harmony export */   e: () => (/* binding */ searchSharp),
/* harmony export */   f: () => (/* binding */ checkmarkOutline),
/* harmony export */   g: () => (/* binding */ ellipseOutline),
/* harmony export */   h: () => (/* binding */ arrowDown),
/* harmony export */   i: () => (/* binding */ caretBackSharp),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ caretUpSharp),
/* harmony export */   p: () => (/* binding */ chevronForward),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp),
/* harmony export */   w: () => (/* binding */ chevronExpand),
/* harmony export */   x: () => (/* binding */ eyeOff),
/* harmony export */   y: () => (/* binding */ eye)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v8.0.13, ES Modules */

const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M244 400 100 256l144-144M120 256h292' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48px' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 268 144 144 144-144M256 392V100' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M368 64 144 256l224 192z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m64 144 192 224 192-224z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M448 368 256 144 64 368z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M416 128 192 384l-96-96' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M328 112 184 256l144 144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m112 184 144 144 144-144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>";
const chevronExpand = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='m136 208 120-104 120 104M136 304l120 104 120-104' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m184 112 144 144-144 144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m184 112 144 144-144 144' stroke-linecap='round' stroke-linejoin='round' stroke-width='48px' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34Z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const eye = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96'/></svg>";
const eyeOff = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39M264 196.15 315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39'/><path d='M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.5 226.5 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.8 343.8 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.2 238.2 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M80 160h352M80 256h352M80 352h352' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M64 384h384v-42.67H64Zm0-106.67h384v-42.66H64ZM64 128v42.67h384V128Z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M400 256H112' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M96 256h320M96 176h320M96 336h320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M118 304h276M118 208h276' stroke-linecap='square' stroke-linejoin='round' stroke-width='44px' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M338.29 338.29 448 448' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><path d='M464 428 339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464ZM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37 110.5 110.5 0 0 1-110.37 110.37'/></svg>";


/***/ },

/***/ 2954
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-CUw4ekVy.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ Keyboard),
/* harmony export */   a: () => (/* binding */ KeyboardResize)
/* harmony export */ });
/* harmony import */ var _capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitor-CFERIeaU.js */ 5051);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var ExceptionCode;
(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */
  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var KeyboardResize;
(function (KeyboardResize) {
  /**
   * Only the `body` HTML element will be resized.
   * Relative units are not affected, because the viewport does not change.
   *
   * @since 1.0.0
   */
  KeyboardResize["Body"] = "body";
  /**
   * Only the `ion-app` HTML element will be resized.
   * Use it only for Ionic Framework apps.
   *
   * @since 1.0.0
   */
  KeyboardResize["Ionic"] = "ionic";
  /**
   * The whole native Web View will be resized when the keyboard shows/hides.
   * This affects the `vh` relative unit.
   *
   * @since 1.0.0
   */
  KeyboardResize["Native"] = "native";
  /**
   * Neither the app nor the Web View are resized.
   *
   * @since 1.0.0
   */
  KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
const Keyboard = {
  getEngine() {
    const capacitor = (0,_capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Keyboard')) {
      return capacitor.Plugins.Keyboard;
    }
    return undefined;
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
      return Promise.resolve(undefined);
    }
    return engine.getResizeMode().catch(e => {
      if (e.code === ExceptionCode.Unimplemented) {
        // If the native implementation is not available
        // we treat it the same as if the plugin is not available.
        return undefined;
      }
      throw e;
    });
  }
};


/***/ },

/***/ 7387
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-BaaVITYt.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 575);
/* harmony import */ var _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard-CUw4ekVy.js */ 2954);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/**
 * The element that resizes when the keyboard opens
 * is going to depend on the resize mode
 * which is why we check that here.
 */
const getResizeContainer = resizeMode => {
  /**
   * If doc is undefined then we are
   * in an SSR environment, so the keyboard
   * adjustment does not apply.
   * If the webview does not resize then there
   * is no container to resize.
   */
  if (_index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined || resizeMode === _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_2__.a.None || resizeMode === undefined) {
    return null;
  }
  /**
   * The three remaining resize modes: Native, Ionic, and Body
   * all cause `ion-app` to resize, so we can listen for changes
   * on that. In the event `ion-app` is not available then
   * we can fall back to `body`.
   */
  const ionApp = _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d.querySelector('ion-app');
  return ionApp !== null && ionApp !== void 0 ? ionApp : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.d.body;
};
/**
 * Get the height of ion-app or body.
 * This is used for determining if the webview
 * has resized before the keyboard closed.
 * */
const getResizeContainerHeight = resizeMode => {
  const containerElement = getResizeContainer(resizeMode);
  return containerElement === null ? 0 : containerElement.clientHeight;
};
/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */
const createKeyboardController = /*#__PURE__*/function () {
  var _ref = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (keyboardChangeCallback) {
    let keyboardWillShowHandler;
    let keyboardWillHideHandler;
    let keyboardVisible;
    /**
     * This lets us determine if the webview content
     * has resized as a result of the keyboard.
     */
    let initialResizeContainerHeight;
    const init = /*#__PURE__*/function () {
      var _ref2 = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const resizeOptions = yield _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_2__.K.getResizeMode();
        const resizeMode = resizeOptions === undefined ? undefined : resizeOptions.mode;
        keyboardWillShowHandler = () => {
          /**
           * We need to compute initialResizeContainerHeight right before
           * the keyboard opens to guarantee the resize container is visible.
           * The resize container may not be visible if we compute this
           * as soon as the keyboard controller is created.
           * We should only need to do this once to avoid additional clientHeight
           * computations.
           */
          if (initialResizeContainerHeight === undefined) {
            initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
          }
          keyboardVisible = true;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        keyboardWillHideHandler = () => {
          keyboardVisible = false;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
        _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
      });
      return function init() {
        return _ref2.apply(this, arguments);
      };
    }();
    const fireChangeCallback = (state, resizeMode) => {
      if (keyboardChangeCallback) {
        keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
      }
    };
    /**
     * Code responding to keyboard lifecycles may need
     * to show/hide content once the webview has
     * resized as a result of the keyboard showing/hiding.
     * createResizePromiseIfNeeded provides a way for code to wait for the
     * resize event that was triggered as a result of the keyboard.
     */
    const createResizePromiseIfNeeded = resizeMode => {
      if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      initialResizeContainerHeight === 0 ||
      /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      initialResizeContainerHeight === getResizeContainerHeight(resizeMode)) {
        return;
      }
      /**
       * Get the resize container so we can
       * attach the ResizeObserver below to
       * the correct element.
       */
      const containerElement = getResizeContainer(resizeMode);
      if (containerElement === null) {
        return;
      }
      /**
       * Some part of the web content should resize,
       * and we need to listen for a resize.
       */
      return new Promise(resolve => {
        const callback = () => {
          /**
           * As per the spec, the ResizeObserver
           * will fire when observation starts if
           * the observed element is rendered and does not
           * have a size of 0 x 0. However, the watched element
           * may or may not have resized by the time this first
           * callback is fired. As a result, we need to check
           * the dimensions of the element.
           *
           * https://www.w3.org/TR/resize-observer/#intro
           */
          if (containerElement.clientHeight === initialResizeContainerHeight) {
            /**
             * The resize happened, so stop listening
             * for resize on this element.
             */
            ro.disconnect();
            resolve();
          }
        };
        /**
         * In Capacitor there can be delay between when the window
         * resizes and when the container element resizes, so we cannot
         * rely on a 'resize' event listener on the window.
         * Instead, we need to determine when the container
         * element resizes using a ResizeObserver.
         */
        const ro = new ResizeObserver(callback);
        ro.observe(containerElement);
      });
    };
    const destroy = () => {
      _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
      _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
      keyboardWillShowHandler = keyboardWillHideHandler = undefined;
    };
    const isKeyboardVisible = () => keyboardVisible;
    yield init();
    return {
      init,
      destroy,
      isKeyboardVisible
    };
  });
  return function createKeyboardController(_x) {
    return _ref.apply(this, arguments);
  };
}();


/***/ },

/***/ 4753
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-ywgs5efA.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_DID_CLOSE: () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   KEYBOARD_DID_OPEN: () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   copyVisualViewport: () => (/* binding */ copyVisualViewport),
/* harmony export */   keyboardDidClose: () => (/* binding */ keyboardDidClose),
/* harmony export */   keyboardDidOpen: () => (/* binding */ keyboardDidOpen),
/* harmony export */   keyboardDidResize: () => (/* binding */ keyboardDidResize),
/* harmony export */   resetKeyboardAssist: () => (/* binding */ resetKeyboardAssist),
/* harmony export */   setKeyboardClose: () => (/* binding */ setKeyboardClose),
/* harmony export */   setKeyboardOpen: () => (/* binding */ setKeyboardOpen),
/* harmony export */   startKeyboardAssist: () => (/* binding */ startKeyboardAssist),
/* harmony export */   trackViewportChanges: () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/* harmony import */ var _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-CUw4ekVy.js */ 2954);
/* harmony import */ var _capacitor_CFERIeaU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capacitor-CFERIeaU.js */ 5051);
/* harmony import */ var _index_ZjP4CjeZ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-ZjP4CjeZ.js */ 575);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
// TODO(FW-2832): types
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};
const startKeyboardAssist = win => {
  const nativeEngine = _keyboard_CUw4ekVy_js__WEBPACK_IMPORTED_MODULE_0__.K.getEngine();
  /**
   * If the native keyboard plugin is available
   * then we are running in a native environment. As a result
   * we should only listen on the native events instead of
   * using the Visual Viewport as the Ionic webview manipulates
   * how it resizes such that the Visual Viewport API is not
   * reliable here.
   */
  if (nativeEngine) {
    startNativeListeners(win);
  } else {
    if (!win.visualViewport) {
      return;
    }
    currentVisualViewport = copyVisualViewport(win.visualViewport);
    win.visualViewport.onresize = () => {
      trackViewportChanges(win);
      if (keyboardDidOpen() || keyboardDidResize(win)) {
        setKeyboardOpen(win);
      } else if (keyboardDidClose(win)) {
        setKeyboardClose(win);
      }
    };
  }
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};
const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};
const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */
const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};


/***/ },

/***/ 2377
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/lock-controller-B-hirT0v.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createLockController)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Creates a lock controller.
 *
 * Claiming a lock means that nothing else can acquire the lock until it is released.
 * This can momentarily prevent execution of code that needs to wait for the earlier code to finish.
 * For example, this can be used to prevent multiple transitions from occurring at the same time.
 */
const createLockController = () => {
  let waitPromise;
  /**
   * When lock() is called, the lock is claimed.
   * Once a lock has been claimed, it cannot be claimed again until it is released.
   * When this function gets resolved, the lock is released, allowing it to be claimed again.
   *
   * @example ```tsx
   * const unlock = await this.lockController.lock();
   * // do other stuff
   * unlock();
   * ```
   */
  const lock = /*#__PURE__*/function () {
    var _ref = (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const p = waitPromise;
      let resolve;
      waitPromise = new Promise(r => resolve = r);
      if (p !== undefined) {
        yield p;
      }
      return resolve;
    });
    return function lock() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    lock
  };
};


/***/ },

/***/ 787
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-D4RIp70E.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${32 - 32 * index}%`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ },

/***/ 2286
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-BKw2CAHc.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSwipeBackGesture: () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_DEn3pfjm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-DEn3pfjm.js */ 6341);
/* harmony import */ var _dir_C53feagD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-C53feagD.js */ 1008);
/* harmony import */ var _index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-CfgBF1SE.js */ 5860);
/* harmony import */ var _index_C8IsBmNU_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-C8IsBmNU.js */ 6922);
/* harmony import */ var _gesture_controller_BTEOs1at_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gesture-controller-BTEOs1at.js */ 566);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = (0,_dir_C53feagD_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */
  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = detail => {
    /**
     * The user's locale can change mid-session,
     * so we need to check text direction at
     * the beginning of every gesture.
     */
    rtl = (0,_dir_C53feagD_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_DEn3pfjm_js__WEBPACK_IMPORTED_MODULE_0__.e)(0, stepValue, 0.9999), realDur);
  };
  return (0,_index_CfgBF1SE_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};


/***/ },

/***/ 4468
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-Dtdm8lKC.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ watchForOptions)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const watchForOptions = (containerEl, tagName, onChange) => {
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach(mut => {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
/**
 * The "value" key is only set on some components such as ion-select-option.
 * As a result, we create a default union type of HTMLElement and the "value" key.
 * However, implementers are required to provide the appropriate component type
 * such as HTMLIonSelectOptionElement.
 */
const findCheckedOption = (node, tagName) => {
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
   * The above check ensures "node" is an Element (nodeType 1).
   */
  if (node.nodeType !== 1) {
    return undefined;
  }
  // HTMLElement inherits from Element, so we cast "el" as T.
  const el = node;
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find(o => o.value === el.value);
};


/***/ }

}]);
//# sourceMappingURL=common.js.map