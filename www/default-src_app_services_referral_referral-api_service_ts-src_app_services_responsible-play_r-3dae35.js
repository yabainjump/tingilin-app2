"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_referral_referral-api_service_ts-src_app_services_responsible-play_r-3dae35"],{

/***/ 8364
/*!***********************************************************!*\
  !*** ./src/app/services/referral/referral-api.service.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferralApiService: () => (/* binding */ ReferralApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
var _staticBlock;




class ReferralApiService {
  constructor(http) {
    this.http = http;
    this.base = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl}`;
  }
  summary() {
    return this.http.get(`${this.base}/users/me/referral-summary`);
  }
  referrals(page = 1, limit = 10) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('page', String(page)).set('limit', String(limit));
    return this.http.get(`${this.base}/users/me/referrals`, {
      params
    });
  }
  useFreeTicket(raffleId) {
    return this.http.post(`${this.base}/payments/free-ticket`, {
      raffleId
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ReferralApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReferralApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ReferralApiService,
    factory: ReferralApiService.ɵfac,
    providedIn: 'root'
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

/***/ },

/***/ 7414
/*!*********************************************************************!*\
  !*** ./src/app/shared/engagement/live-activity-ticker.component.ts ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiveActivityTickerComponent: () => (/* binding */ LiveActivityTickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_winners_winners_live_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/winners/winners-live-socket.service */ 8392);
var _staticBlock;









const _c0 = a0 => ({
  n: a0
});
function LiveActivityTickerComponent_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u00B7 ", a_r1.region);
  }
}
function LiveActivityTickerComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00B7 ", a_r1.prizeTitle);
  }
}
function LiveActivityTickerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 2)(2, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 4)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LiveActivityTickerComponent_div_0_span_6_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, LiveActivityTickerComponent_div_0_span_9_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r1 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](a_r1.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", a_r1.region);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 5, a_r1.quantity > 1 ? "ENGAGEMENT.ACTIVITY_MANY" : "ENGAGEMENT.ACTIVITY_ONE", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, a_r1.quantity)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.raffleId && a_r1.prizeTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.ago(a_r1));
  }
}
/**
 * Bandeau "Paul M. · Littoral vient de prendre 3 tickets".
 * Fait tourner les 5 derniers achats; si `raffleId` est fourni, seuls les
 * achats de cette tombola sont affiches. Invisible tant qu'il n'y a rien.
 */
class LiveActivityTickerComponent {
  constructor(socket, cdr, translate) {
    this.socket = socket;
    this.cdr = cdr;
    this.translate = translate;
    this.current = null;
    this.items = [];
    this.index = 0;
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.socket.connect();
    this.subs.add(this.socket.activity().subscribe(all => {
      const filtered = this.raffleId ? all.filter(a => a.raffleId === this.raffleId) : all;
      const latest = filtered.slice(-5);
      const last = list => list[list.length - 1]?.id;
      const isNew = last(latest) !== last(this.items);
      this.items = latest;
      if (isNew) this.index = Math.max(0, latest.length - 1);
      this.render();
    }));
    this.subs.add((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(4500).subscribe(() => {
      if (this.items.length < 2) return;
      this.index = (this.index + 1) % this.items.length;
      this.render();
    }));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    this.socket.disconnect();
  }
  ago(a) {
    const ms = Date.now() - new Date(a.at).getTime();
    if (!Number.isFinite(ms) || ms < 60_000) {
      return this.translate.instant('ENGAGEMENT.JUST_NOW');
    }
    const min = Math.floor(ms / 60_000);
    if (min < 60) return this.translate.instant('ENGAGEMENT.MINUTES_AGO', {
      n: min
    });
    return this.translate.instant('ENGAGEMENT.HOURS_AGO', {
      n: Math.floor(min / 60)
    });
  }
  render() {
    this.current = this.items[this.index] ?? null;
    this.cdr.markForCheck();
  }
  static #_ = _staticBlock = () => (this.ɵfac = function LiveActivityTickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LiveActivityTickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_winners_winners_live_socket_service__WEBPACK_IMPORTED_MODULE_7__.WinnersLiveSocketService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: LiveActivityTickerComponent,
    selectors: [["app-live-activity-ticker"]],
    inputs: {
      raffleId: "raffleId"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "ticker", "role", "status", "aria-live", "polite", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "ticker"], ["aria-hidden", "true", 1, "pulse"], ["name", "ticket-outline", "aria-hidden", "true"], [1, "text"], ["class", "region", 4, "ngIf"], ["class", "prize", 4, "ngIf"], [1, "ago"], [1, "region"], [1, "prize"]],
    template: function LiveActivityTickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, LiveActivityTickerComponent_div_0_Template, 12, 10, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.current);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".ticker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  border-radius: var(--app-radius-pill, 999px);\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n  font-size: 12.5px;\n  line-height: 1.3;\n  animation: _ngcontent-%COMP%_tickerIn 0.35s var(--app-ease-out, ease-out);\n  overflow: hidden;\n}\n\n.pulse[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--app-success);\n  box-shadow: 0 0 0 0 var(--app-success);\n  animation: _ngcontent-%COMP%_pulse 1.8s infinite;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: var(--app-primary);\n  font-size: 15px;\n}\n\n.text[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.region[_ngcontent-%COMP%], \n.prize[_ngcontent-%COMP%], \n.ago[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n}\n\n.ago[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 11px;\n}\n\n@keyframes _ngcontent-%COMP%_tickerIn {\n  from {\n    opacity: 0;\n    transform: translateY(4px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 7px rgba(34, 197, 94, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .ticker[_ngcontent-%COMP%], \n   .pulse[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2VuZ2FnZW1lbnQvbGl2ZS1hY3Rpdml0eS10aWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUVNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7QUFDUjs7QUFDTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFFUjs7QUFBTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBR1I7O0FBRE07OztFQUdFLHVCQUFBO0FBSVI7O0FBRk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUtSOztBQUhNO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFNUjtFQUpNO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUFNUjtBQUNGO0FBSk07RUFDRTtJQUNFLDBDQUFBO0VBTVI7RUFKTTtJQUNFLDBDQUFBO0VBTVI7RUFKTTtJQUNFLHdDQUFBO0VBTVI7QUFDRjtBQUpNO0VBQ0U7O0lBRUUsZUFBQTtFQU1SO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC50aWNrZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgcGFkZGluZzogOXB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1yYWRpdXMtcGlsbCwgOTk5cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcbiAgICAgICAgZm9udC1zaXplOiAxMi41cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIGFuaW1hdGlvbjogdGlja2VySW4gMC4zNXMgdmFyKC0tYXBwLWVhc2Utb3V0LCBlYXNlLW91dCk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAucHVsc2Uge1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1Y2Nlc3MpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHZhcigtLWFwcC1zdWNjZXNzKTtcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxLjhzIGluZmluaXRlO1xuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgICAgLnRleHQge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICAgIC5yZWdpb24sXG4gICAgICAucHJpemUsXG4gICAgICAuYWdvIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAuYWdvIHtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgdGlja2VySW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMzQsIDE5NywgOTQsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA3cHggcmdiYSgzNCwgMTk3LCA5NCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDM0LCAxOTcsIDk0LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICAgICAgLnRpY2tlcixcbiAgICAgICAgLnB1bHNlIHtcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=default-src_app_services_referral_referral-api_service_ts-src_app_services_responsible-play_r-3dae35.js.map