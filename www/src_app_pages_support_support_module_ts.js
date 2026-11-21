"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 9351
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportPageRoutingModule: () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 9833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage
}];
class SupportPageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function SupportPageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SupportPageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SupportPageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SupportPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 6230
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportPageModule: () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support-routing.module */ 9351);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support.page */ 9833);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class SupportPageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function SupportPageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SupportPageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: SupportPageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_3__.SupportPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SupportPageModule, {
    declarations: [_support_page__WEBPACK_IMPORTED_MODULE_4__.SupportPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_3__.SupportPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_6__.EmptyStateComponent]
  });
})();

/***/ },

/***/ 9833
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportPage: () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/ui/empty-state/empty-state.component */ 6619);

var _staticBlock;







function SupportPage_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_button_56_Template_button_click_0_listener() {
      const category_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectCategory(category_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r3.selectedCategoryId === category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-pressed", ctx_r3.selectedCategoryId === category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tone-" + category_r3.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", category_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.categoryLabel(category_r3.id));
  }
}
function SupportPage_button_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_button_62_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "COMMON.VIEW_ALL"), " ");
  }
}
function SupportPage_div_63_article_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_div_63_article_1_div_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const faq_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.contactSupport(faq_r7.category));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const faq_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "faq-answer-" + faq_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.faqAnswer(faq_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "SUPPORT_PAGE.CONTACT_THIS_TOPIC"), " ");
  }
}
function SupportPage_div_63_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_div_63_article_1_Template_button_click_1_listener() {
      const faq_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.toggleFaq(faq_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 41)(3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SupportPage_div_63_article_1_div_8_Template, 6, 5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("open", ctx_r3.isExpanded(faq_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx_r3.isExpanded(faq_r7.id))("aria-controls", "faq-answer-" + faq_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.labelForCategory(faq_r7.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.faqQuestion(faq_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.isExpanded(faq_r7.id));
  }
}
function SupportPage_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SupportPage_div_63_article_1_Template, 9, 7, "article", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.visibleFaqs)("ngForTrackBy", ctx_r3.trackByFaq);
  }
}
function SupportPage_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-empty-state", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("action", function SupportPage_ng_template_64_Template_app_empty_state_action_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("compact", true)("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, "SUPPORT_PAGE.EMPTY_TITLE"))("description", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 6, "SUPPORT_PAGE.EMPTY_DESC"))("actionLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 8, "SUPPORT_PAGE.RESET"));
  }
}
class SupportPage {
  constructor(nav, toastController, translate) {
    this.nav = nav;
    this.toastController = toastController;
    this.translate = translate;
    this.supportEmail = String(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supportEmail ?? '').trim();
    this.categories = [{
      id: 'all',
      labelKey: 'SUPPORT_PAGE.CATEGORY_ALL',
      icon: 'grid-outline',
      tone: 'violet'
    }, {
      id: 'account',
      labelKey: 'SUPPORT_PAGE.CATEGORY_ACCOUNT',
      icon: 'person-outline',
      tone: 'blue'
    }, {
      id: 'payments',
      labelKey: 'SUPPORT_PAGE.CATEGORY_PAYMENTS',
      icon: 'card-outline',
      tone: 'green'
    }, {
      id: 'referral',
      labelKey: 'SUPPORT_PAGE.CATEGORY_REFERRAL',
      icon: 'people-outline',
      tone: 'violet'
    }, {
      id: 'winnings',
      labelKey: 'SUPPORT_PAGE.CATEGORY_WINNINGS',
      icon: 'trophy-outline',
      tone: 'gold'
    }];
    this.faqs = [{
      id: 'claim-prize',
      category: 'winnings',
      questionKey: 'SUPPORT_PAGE.FAQ_CLAIM_PRIZE_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_CLAIM_PRIZE_A'
    }, {
      id: 'draw-time',
      category: 'winnings',
      questionKey: 'SUPPORT_PAGE.FAQ_DRAW_TIME_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_DRAW_TIME_A'
    }, {
      id: 'ticket-limit',
      category: 'payments',
      questionKey: 'SUPPORT_PAGE.FAQ_TICKET_LIMIT_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_TICKET_LIMIT_A'
    }, {
      id: 'payment-pending',
      category: 'payments',
      questionKey: 'SUPPORT_PAGE.FAQ_PAYMENT_PENDING_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_PAYMENT_PENDING_A'
    }, {
      id: 'referral-reward',
      category: 'referral',
      questionKey: 'SUPPORT_PAGE.FAQ_REFERRAL_REWARD_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_REFERRAL_REWARD_A'
    }, {
      id: 'account-update',
      category: 'account',
      questionKey: 'SUPPORT_PAGE.FAQ_ACCOUNT_UPDATE_Q',
      answerKey: 'SUPPORT_PAGE.FAQ_ACCOUNT_UPDATE_A'
    }];
    this.searchTerm = '';
    this.selectedCategoryId = 'all';
    this.expandedFaqId = 'claim-prize';
    this.whatsappNumber = '237694949617';
  }
  get visibleFaqs() {
    const term = this.searchTerm.trim().toLowerCase();
    return this.faqs.filter(item => {
      const matchesCategory = this.selectedCategoryId === 'all' || item.category === this.selectedCategoryId;
      const matchesSearch = !term || this.faqQuestion(item).toLowerCase().includes(term) || this.faqAnswer(item).toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }
  goBack() {
    try {
      this.nav.back();
    } catch {
      this.nav.navigateRoot('/tabs/profile');
    }
  }
  selectCategory(categoryId) {
    this.selectedCategoryId = categoryId;
  }
  toggleFaq(faqId) {
    this.expandedFaqId = this.expandedFaqId === faqId ? null : faqId;
  }
  isExpanded(faqId) {
    return this.expandedFaqId === faqId;
  }
  contactSupport(categoryId) {
    var _this = this;
    return (0,d_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const category = categoryId && categoryId !== 'all' ? _this.categories.find(item => item.id === categoryId) : _this.categories.find(item => item.id === _this.selectedCategoryId);
      const categoryLabel = category && category.id !== 'all' ? _this.categoryLabel(category.id) : _this.translate.instant('SUPPORT_PAGE.MAIL_BODY_GENERAL_SUPPORT');
      const message = [_this.translate.instant('SUPPORT_PAGE.MAIL_BODY_HELLO'), '', _this.translate.instant('SUPPORT_PAGE.MAIL_BODY_NEED_HELP'), categoryLabel, '', _this.translate.instant('SUPPORT_PAGE.MAIL_BODY_DESCRIBE')].join('\n');
      const url = `https://wa.me/${_this.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    })();
  }
  resetFilters() {
    this.searchTerm = '';
    this.selectedCategoryId = 'all';
  }
  scrollToFaqs() {
    document.getElementById('support-faq')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  labelForCategory(categoryId) {
    return this.categoryLabel(categoryId);
  }
  categoryLabel(categoryId) {
    const key = this.categories.find(item => item.id === categoryId)?.labelKey ?? 'SUPPORT_PAGE.CATEGORY_ALL';
    return this.translate.instant(key);
  }
  faqQuestion(item) {
    return this.translate.instant(item.questionKey);
  }
  faqAnswer(item) {
    return this.translate.instant(item.answerKey);
  }
  trackByCategory(_, item) {
    return item.id;
  }
  trackByFaq(_, item) {
    return item.id;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SupportPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SupportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SupportPage,
    selectors: [["app-support"]],
    standalone: false,
    decls: 66,
    vars: 46,
    consts: [["emptyFaqState", ""], [1, "support-page", 3, "fullscreen"], [1, "support-shell"], ["aria-hidden", "true", 1, "support-glow", "glow-top"], ["aria-hidden", "true", 1, "support-glow", "glow-bottom"], [1, "support-header"], ["type", "button", 1, "back-button", 3, "click"], ["name", "arrow-back-outline"], [1, "headline"], [1, "eyebrow"], [1, "subtitle"], [1, "search-card"], ["name", "search-outline", 1, "search-icon"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], [1, "section"], [1, "section-head"], [1, "section-kicker"], [1, "contact-grid"], ["type", "button", 1, "contact-card", "contact-card--primary", 3, "click"], [1, "contact-icon", "tone-violet"], ["name", "logo-whatsapp"], [1, "contact-copy"], ["name", "chevron-forward-outline", 1, "chevron"], ["type", "button", 1, "contact-card", 3, "click"], [1, "contact-icon", "tone-blue"], ["name", "book-outline"], [1, "section-head", "section-head--center"], [1, "category-grid"], ["type", "button", "class", "category-card", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "support-faq", 1, "section", "faq-section"], ["type", "button", "class", "see-all", 3, "click", 4, "ngIf"], ["class", "faq-list", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "category-card", 3, "click"], [1, "category-icon", 3, "ngClass"], [3, "name"], [1, "category-label"], ["type", "button", 1, "see-all", 3, "click"], [1, "faq-list"], ["class", "faq-card", 3, "open", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "faq-card"], ["type", "button", 1, "faq-trigger", 3, "click"], [1, "faq-meta"], [1, "faq-chip"], ["name", "chevron-down-outline", 1, "arrow"], ["class", "faq-answer", 3, "id", 4, "ngIf"], [1, "faq-answer", 3, "id"], ["type", "button", 1, "inline-support", 3, "click"], ["icon", "help-buoy-outline", 3, "action", "compact", "title", "description", "actionLabel"]],
    template: function SupportPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 1)(1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 3)(3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "header", 5)(5, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goBack());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SupportPage_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "section", 14)(24, "div", 15)(25, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17)(29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.contactSupport());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21)(33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SupportPage_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.scrollToFaqs());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 21)(44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "section", 14)(51, "div", 26)(52, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, SupportPage_button_56_Template, 5, 6, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "section", 29)(58, "div", 15)(59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, SupportPage_button_62_Template, 3, 3, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, SupportPage_div_63_Template, 2, 2, "div", 31)(64, SupportPage_ng_template_64_Template, 4, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const emptyFaqState_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 20, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 22, "SUPPORT_PAGE.EYEBROW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 24, "SUPPORT_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 26, "SUPPORT_PAGE.SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 28, "SUPPORT_PAGE.SEARCH_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 30, "SUPPORT_PAGE.SEARCH_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 32, "SUPPORT_PAGE.CONTACT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 34, "SUPPORT_PAGE.CONTACT_WRITE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 36, "SUPPORT_PAGE.CONTACT_WRITE_DESC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 38, "SUPPORT_PAGE.CONTACT_FAQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 40, "SUPPORT_PAGE.CONTACT_FAQ_DESC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 42, "SUPPORT_PAGE.CATEGORIES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories)("ngForTrackBy", ctx.trackByCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](61, 44, "SUPPORT_PAGE.FAQ_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchTerm || ctx.selectedCategoryId !== "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visibleFaqs.length)("ngIfElse", emptyFaqState_r10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _shared_ui_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_9__.EmptyStateComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  --primary: var(--app-primary);\n  --primary-2: var(--app-primary-soft);\n  --bg-dark: var(--app-bg);\n  --bg-dark-2: var(--app-bg);\n  --surface: var(--app-surface);\n  --surface-2: var(--app-surface-2);\n  --text-main: var(--app-ink);\n  --text-muted: var(--app-muted);\n  --text-soft: var(--app-ink);\n  --stroke: var(--app-border);\n  --stroke-strong: var(--app-border);\n  --ion-background-color: transparent;\n  display: block;\n  height: 100%;\n  font-family: \"Plus Jakarta Sans\", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;\n}\n\n.support-page[_ngcontent-%COMP%] {\n  --background: transparent;\n  background-color: var(--bg-dark);\n  background-image: transparent;\n  color: var(--text-main);\n}\n\n.support-shell[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 760px;\n  margin: 0 auto;\n  min-height: 100%;\n  padding: calc(env(safe-area-inset-top) + 22px) 20px calc(env(safe-area-inset-bottom) + 28px);\n  overflow: hidden;\n}\n\n.support-glow[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.glow-top[_ngcontent-%COMP%] {\n  top: -18%;\n  left: -12%;\n  width: 340px;\n  height: 340px;\n  background: var(--app-primary-soft);\n}\n\n.glow-bottom[_ngcontent-%COMP%] {\n  bottom: -14%;\n  right: -14%;\n  width: 320px;\n  height: 320px;\n  background: var(--app-primary-soft);\n}\n\n.support-header[_ngcontent-%COMP%], \n.search-card[_ngcontent-%COMP%], \n.section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.support-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 16px;\n  align-items: start;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 9999px;\n  border: 1px solid var(--stroke);\n  background: var(--app-surface-2);\n  color: var(--text-main);\n  display: grid;\n  place-items: center;\n  transition: transform 150ms ease, background 150ms ease;\n}\n\n.back-button[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n  background: var(--app-surface-2);\n}\n\n.back-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n\n.headline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 2px;\n}\n\n.eyebrow[_ngcontent-%COMP%], \n.section-kicker[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  font-size: 0.7rem;\n  color: var(--text-soft);\n  font-weight: 700;\n}\n\n.headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.95rem;\n  line-height: 1.06;\n  letter-spacing: -0.03em;\n  font-weight: 800;\n  color: var(--text-main);\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 31rem;\n  color: var(--text-muted);\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n\n.search-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  height: 56px;\n  padding: 0 16px;\n  border-radius: 18px;\n  background: var(--surface);\n  border: 1px solid var(--stroke);\n  box-shadow: none;\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n}\n\n.search-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: var(--text-main);\n  font-size: 0.99rem;\n}\n\n.search-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-soft);\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n  font-size: 1.28rem;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n\n.section-head--center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.contact-card[_ngcontent-%COMP%], \n.category-card[_ngcontent-%COMP%], \n.faq-card[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border: 1px solid var(--app-border);\n  box-shadow: none;\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n}\n\n.contact-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 20px;\n  text-align: left;\n  color: inherit;\n}\n\n.contact-card--primary[_ngcontent-%COMP%] {\n  border-color: var(--stroke-strong);\n  box-shadow: none;\n}\n\n.contact-copy[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.contact-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.03rem;\n  color: var(--text-main);\n}\n\n.contact-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.45;\n  font-size: 0.9rem;\n}\n\n.contact-icon[_ngcontent-%COMP%], \n.category-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  border-radius: 16px;\n}\n\n.contact-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.category-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  margin-bottom: 0;\n}\n\n.category-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n\n.tone-violet[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n}\n\n.tone-blue[_ngcontent-%COMP%] {\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n}\n\n.tone-green[_ngcontent-%COMP%] {\n  background: var(--app-success-soft);\n  color: var(--app-success);\n}\n\n.tone-gold[_ngcontent-%COMP%] {\n  background: var(--app-warning-soft);\n  color: var(--app-warning);\n}\n\n.chevron[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n}\n\n.category-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n\n.category-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  padding: 12px 14px;\n  min-height: 66px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-align: left;\n  color: inherit;\n}\n\n.category-card.active[_ngcontent-%COMP%] {\n  border-color: var(--stroke-strong);\n  box-shadow: none;\n}\n\n.category-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  color: var(--text-main);\n}\n\n.faq-section[_ngcontent-%COMP%] {\n  padding-bottom: 18px;\n}\n\n.faq-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.faq-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.faq-card.open[_ngcontent-%COMP%] {\n  border-color: var(--stroke-strong);\n}\n\n.faq-trigger[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px;\n  text-align: left;\n}\n\n.faq-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n\n.faq-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.45;\n  color: var(--text-main);\n}\n\n.faq-chip[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 6px 10px;\n  border-radius: 9999px;\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.faq-card[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transition: transform 180ms ease;\n  color: var(--text-soft);\n}\n\n.faq-card.open[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.faq-answer[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n  color: var(--text-muted);\n  line-height: 1.62;\n  font-size: 0.94rem;\n  border-top: 1px solid var(--app-border);\n}\n\n.faq-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n}\n\n.inline-support[_ngcontent-%COMP%], \n.see-all[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--app-primary);\n  font-weight: 700;\n  letter-spacing: 0.03em;\n}\n\n.inline-support[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n.see-all[_ngcontent-%COMP%] {\n  margin-top: 0;\n  text-transform: uppercase;\n  font-size: 0.76rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n}\n\n@media (min-width: 540px) {\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsK0ZBQ0U7QUFESjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFDRTtFQUNGLHVCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEZBQUE7RUFFQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsYUFBQTtBQVRGOztBQVlBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBVEY7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUFURjs7QUFZQTs7O0VBR0Usa0JBQUE7RUFDQSxVQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFDRTtBQVZKOztBQWNBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQVhGOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWNBOztFQUVFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7O0VBRUUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFYRjs7QUFjQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFYRjs7QUFjQTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsdUJBQUE7QUFYRjs7QUFjQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0UsdUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBWEY7O0FBY0E7OztFQUdFLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWEY7O0FBY0E7RUFDRSxrQ0FBQTtFQUNBLGdCQUNFO0FBWko7O0FBZUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQVpGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQVpGOztBQWVBO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBWkY7O0FBZUE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBZUE7RUFDRSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQVpGOztBQWVBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQVpGOztBQWVBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQVpGOztBQWVBO0VBQ0UsbUNBQUE7RUFDQSx5QkFBQTtBQVpGOztBQWVBO0VBQ0UsdUJBQUE7QUFaRjs7QUFlQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFaRjs7QUFlQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFaRjs7QUFlQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQ0U7QUFiSjs7QUFnQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQWJGOztBQWdCQTtFQUNFLG9CQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFiRjs7QUFnQkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usa0NBQUE7QUFiRjs7QUFnQkE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWJGOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFiRjs7QUFnQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQWJGOztBQWdCQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWJGOztBQWdCQTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7QUFiRjs7QUFnQkE7RUFDRSx5QkFBQTtBQWJGOztBQWdCQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUFiRjs7QUFnQkE7RUFDRSxnQkFBQTtBQWJGOztBQWdCQTs7RUFFRSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxnQkFBQTtBQWJGOztBQWdCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usd0NBQUE7QUFiRjs7QUFnQkE7RUFDRTtJQUNFLGdEQUFBO0VBYkY7RUFnQkE7SUFDRSxnREFBQTtFQWRGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1wcmltYXJ5OiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgLS1wcmltYXJ5LTI6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gIC0tYmctZGFyazogdmFyKC0tYXBwLWJnKTtcclxuICAtLWJnLWRhcmstMjogdmFyKC0tYXBwLWJnKTtcclxuICAtLXN1cmZhY2U6IHZhcigtLWFwcC1zdXJmYWNlKTtcclxuICAtLXN1cmZhY2UtMjogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgLS10ZXh0LW1haW46IHZhcigtLWFwcC1pbmspO1xyXG4gIC0tdGV4dC1tdXRlZDogdmFyKC0tYXBwLW11dGVkKTtcclxuICAtLXRleHQtc29mdDogdmFyKC0tYXBwLWluayk7XHJcbiAgLS1zdHJva2U6IHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIC0tc3Ryb2tlLXN0cm9uZzogdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTpcclxuICAgIFwiUGx1cyBKYWthcnRhIFNhbnNcIixcclxuICAgIHN5c3RlbS11aSxcclxuICAgIC1hcHBsZS1zeXN0ZW0sXHJcbiAgICBTZWdvZSBVSSxcclxuICAgIFJvYm90byxcclxuICAgIEFyaWFsLFxyXG4gICAgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnN1cHBvcnQtcGFnZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XHJcbn1cclxuXHJcbi5zdXBwb3J0LXNoZWxsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA3NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjJweCkgMjBweFxyXG4gICAgY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAyOHB4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3VwcG9ydC1nbG93IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZ2xvdy10b3Age1xyXG4gIHRvcDogLTE4JTtcclxuICBsZWZ0OiAtMTIlO1xyXG4gIHdpZHRoOiAzNDBweDtcclxuICBoZWlnaHQ6IDM0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG59XHJcblxyXG4uZ2xvdy1ib3R0b20ge1xyXG4gIGJvdHRvbTogLTE0JTtcclxuICByaWdodDogLTE0JTtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAzMjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeS1zb2Z0KTtcclxufVxyXG5cclxuLnN1cHBvcnQtaGVhZGVyLFxyXG4uc2VhcmNoLWNhcmQsXHJcbi5zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnN1cHBvcnQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uIHtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0cm9rZSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICB0cmFuc2Zvcm0gMTUwbXMgZWFzZSxcclxuICAgIGJhY2tncm91bmQgMTUwbXMgZWFzZTtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDEuMzVyZW07XHJcbn1cclxuXHJcbi5oZWFkbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5leWVicm93LFxyXG4uc2VjdGlvbi1raWNrZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc29mdCk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmhlYWRsaW5lIGgxLFxyXG4uc2VjdGlvbi1oZWFkIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjk1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjA2O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1heC13aWR0aDogMzFyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0cm9rZSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtY2FyZCBpbnB1dCB7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcclxuICBmb250LXNpemU6IDAuOTlyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtY2FyZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNvZnQpO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNvZnQpO1xyXG4gIGZvbnQtc2l6ZTogMS4yOHJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWQtLWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWN0LWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uY29udGFjdC1jYXJkLFxyXG4uY2F0ZWdvcnktY2FyZCxcclxuLmZhcS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY29udGFjdC1jYXJkLS1wcmltYXJ5IHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1zdHJvbmcpO1xyXG4gIGJveC1zaGFkb3c6XHJcbiAgICBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1jb3B5IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtY29weSBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMS4wM3JlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcclxufVxyXG5cclxuLmNvbnRhY3QtY29weSBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWljb24sXHJcbi5jYXRlZ29yeS1pY29uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktaWNvbiB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1pY29uIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDEuMTVyZW07XHJcbn1cclxuXHJcbi50b25lLXZpb2xldCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRvbmUtYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRvbmUtZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdWNjZXNzLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbn1cclxuXHJcbi50b25lLWdvbGQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC13YXJuaW5nLXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtd2FybmluZyk7XHJcbn1cclxuXHJcbi5jaGV2cm9uIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1zb2Z0KTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmNhdGVnb3J5LWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDY2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktY2FyZC5hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3Ryb2tlLXN0cm9uZyk7XHJcbiAgYm94LXNoYWRvdzpcclxuICAgIG5vbmU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcclxufVxyXG5cclxuLmZhcS1zZWN0aW9uIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmZhcS1saXN0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmZhcS1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mYXEtY2FyZC5vcGVuIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1zdHJvbmcpO1xyXG59XHJcblxyXG4uZmFxLXRyaWdnZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5mYXEtbWV0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOXB4O1xyXG59XHJcblxyXG4uZmFxLW1ldGEgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XHJcbn1cclxuXHJcbi5mYXEtY2hpcCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZhcS1jYXJkIC5hcnJvdyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE4MG1zIGVhc2U7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtc29mdCk7XHJcbn1cclxuXHJcbi5mYXEtY2FyZC5vcGVuIC5hcnJvdyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLmZhcS1hbnN3ZXIge1xyXG4gIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICBsaW5lLWhlaWdodDogMS42MjtcclxuICBmb250LXNpemU6IDAuOTRyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG59XHJcblxyXG4uZmFxLWFuc3dlciBwIHtcclxuICBtYXJnaW46IDEycHggMCAwO1xyXG59XHJcblxyXG4uaW5saW5lLXN1cHBvcnQsXHJcbi5zZWUtYWxsIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbn1cclxuXHJcbi5pbmxpbmUtc3VwcG9ydCB7XHJcbiAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLnNlZS1hbGwge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuNzZyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU0MHB4KSB7XHJcbiAgLmNvbnRhY3QtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcnktZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map