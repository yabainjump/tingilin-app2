"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_verify-email_verify-email_module_ts"],{

/***/ 7634
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/verify-email/verify-email-routing.module.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyEmailPageRoutingModule: () => (/* binding */ VerifyEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page */ 1348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _verify_email_page__WEBPACK_IMPORTED_MODULE_1__.VerifyEmailPage
}];
class VerifyEmailPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function VerifyEmailPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VerifyEmailPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: VerifyEmailPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](VerifyEmailPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 8683
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/verify-email/verify-email.module.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifyEmailPageModule: () => (/* binding */ VerifyEmailPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-email-routing.module */ 7634);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-email.page */ 1348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






class VerifyEmailPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function VerifyEmailPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VerifyEmailPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: VerifyEmailPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_3__.VerifyEmailPageRoutingModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VerifyEmailPageModule, {
    declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_4__.VerifyEmailPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_3__.VerifyEmailPageRoutingModule]
  });
})();

/***/ },

/***/ 1348
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/verify-email/verify-email.page.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAIL_TOKEN_PATTERN: () => (/* binding */ EMAIL_TOKEN_PATTERN),
/* harmony export */   VerifyEmailPage: () => (/* binding */ VerifyEmailPage)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth/auth.service */ 1339);
/* harmony import */ var _services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth/auth-state.service */ 6247);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8503);

var _staticBlock;








function VerifyEmailPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, "VERIFY_EMAIL_PAGE.LOADING"));
  }
}
function VerifyEmailPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerifyEmailPage_ng_container_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.continue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "VERIFY_EMAIL_PAGE.SUCCESS_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, ctx_r1.loggedIn ? "VERIFY_EMAIL_PAGE.SUCCESS_TEXT" : "VERIFY_EMAIL_PAGE.SUCCESS_TEXT_LOGIN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 7, ctx_r1.loggedIn ? "VERIFY_EMAIL_PAGE.GO_HOME" : "VERIFY_EMAIL_PAGE.GO_LOGIN"), " ");
  }
}
function VerifyEmailPage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerifyEmailPage_ng_container_5_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.continue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "VERIFY_EMAIL_PAGE.INVALID_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, "VERIFY_EMAIL_PAGE.INVALID_TEXT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 7, ctx_r1.loggedIn ? "VERIFY_EMAIL_PAGE.GO_HOME" : "VERIFY_EMAIL_PAGE.GO_LOGIN"), " ");
  }
}
/** Format du jeton envoye par l'API (32 octets en base64url). */
const EMAIL_TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;
/**
 * Ouverte depuis le lien de l'email "Confirmer mon email". Confirme l'adresse
 * puis envoie le joueur sur l'accueil (ou sur la connexion, qui l'y renverra,
 * si ce navigateur n'a pas de session).
 */
class VerifyEmailPage {
  constructor(route, router, auth, authState) {
    this.route = route;
    this.router = router;
    this.auth = auth;
    this.authState = authState;
    this.state = 'LOADING';
    this.loggedIn = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = String(_this.route.snapshot.queryParamMap.get('token') ?? '').trim();
      _this.loggedIn = _this.auth.isLoggedIn();
      // Le jeton ne reste pas dans l'historique / la barre d'adresse.
      void _this.router.navigate([], {
        relativeTo: _this.route,
        queryParams: {},
        replaceUrl: true
      });
      if (!EMAIL_TOKEN_PATTERN.test(token)) {
        _this.state = 'INVALID';
        return;
      }
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.auth.verifyEmail(token));
        _this.state = 'SUCCESS';
        if (_this.loggedIn) _this.authState.refreshMe();
        _this.redirectTimer = setTimeout(() => void _this.continue(), VerifyEmailPage.REDIRECT_DELAY_MS);
      } catch {
        _this.state = 'INVALID';
      }
    })();
  }
  ngOnDestroy() {
    if (this.redirectTimer) clearTimeout(this.redirectTimer);
  }
  continue() {
    var _this2 = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.redirectTimer) clearTimeout(_this2.redirectTimer);
      if (_this2.loggedIn) {
        yield _this2.router.navigate(['/tabs/home'], {
          replaceUrl: true
        });
        return;
      }
      yield _this2.router.navigate(['/auth/login'], {
        replaceUrl: true,
        queryParams: {
          redirect: '/tabs/home'
        }
      });
    })();
  }
  static #_ = _staticBlock = () => (this.REDIRECT_DELAY_MS = 1800, this.ɵfac = function VerifyEmailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VerifyEmailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_6__.AuthStateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: VerifyEmailPage,
    selectors: [["app-verify-email"]],
    standalone: false,
    decls: 6,
    vars: 5,
    consts: [[1, "verify", 3, "fullscreen"], ["role", "status", "aria-live", "polite", 1, "wrap"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "badge"], ["name", "crescent"], [1, "badge", "ok"], ["name", "checkmark-circle"], ["type", "button", 1, "primary", 3, "click"], [1, "badge", "ko"], ["name", "alert-circle"]],
    template: function VerifyEmailPage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VerifyEmailPage_ng_container_3_Template, 6, 3, "ng-container", 3)(4, VerifyEmailPage_ng_container_4_Template, 12, 9, "ng-container", 3)(5, VerifyEmailPage_ng_container_5_Template, 12, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "LOADING");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "SUCCESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "INVALID");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: [".verify[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n  color: var(--app-ink);\n}\n\n.wrap[_ngcontent-%COMP%] {\n  max-width: 420px;\n  min-height: 100%;\n  margin: 0 auto;\n  padding: 32px 22px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 14px;\n}\n\n.badge[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: var(--app-surface);\n  border: 1px solid var(--app-border);\n  color: var(--app-primary);\n  font-size: 54px;\n  margin-bottom: 6px;\n}\n.badge.ok[_ngcontent-%COMP%] {\n  color: var(--app-success);\n  animation: _ngcontent-%COMP%_pop 0.35s ease-out;\n}\n.badge.ko[_ngcontent-%COMP%] {\n  color: var(--app-danger, #dc2626);\n}\n.badge[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  color: var(--app-primary);\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--app-muted);\n  line-height: 1.5;\n}\n\n.primary[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n  border: 0;\n  border-radius: var(--app-radius-pill, 999px);\n  padding: 15px 18px;\n  background: var(--app-primary);\n  color: #fff;\n  font-weight: 700;\n  font-size: 15px;\n}\n\n@keyframes _ngcontent-%COMP%_pop {\n  from {\n    transform: scale(0.7);\n    opacity: 0;\n  }\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .badge.ok[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUVFO0VBQ0UsaUNBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURKOztBQUtBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFQUZGO0VBSUE7SUFDRSxlQUFBO0lBQ0EsVUFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsZUFBQTtFQUhGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZ5IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmcpO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG59XG5cbi53cmFwIHtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uYmFkZ2Uge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuXG4gICYub2sge1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XG4gICAgYW5pbWF0aW9uOiBwb3AgMC4zNXMgZWFzZS1vdXQ7XG4gIH1cblxuICAmLmtvIHtcbiAgICBjb2xvcjogdmFyKC0tYXBwLWRhbmdlciwgI2RjMjYyNik7XG4gIH1cblxuICBpb24tc3Bpbm5lciB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gIH1cbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wcmltYXJ5IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLXJhZGl1cy1waWxsLCA5OTlweCk7XG4gIHBhZGRpbmc6IDE1cHggMThweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5Aa2V5ZnJhbWVzIHBvcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuYmFkZ2Uub2sge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_pages_auth_verify-email_verify-email_module_ts.js.map