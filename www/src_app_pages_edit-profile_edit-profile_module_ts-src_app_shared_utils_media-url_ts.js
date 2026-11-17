"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_edit-profile_edit-profile_module_ts-src_app_shared_utils_media-url_ts"],{

/***/ 8961
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfilePageRoutingModule: () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 6064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




const routes = [{
  path: '',
  component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage
}];
class EditProfilePageRoutingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function EditProfilePageRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EditProfilePageRoutingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: EditProfilePageRoutingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditProfilePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 7976
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfilePageModule: () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile-routing.module */ 8961);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-profile.page */ 6064);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/region-picker/region-picker.module */ 1815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








class EditProfilePageModule {
  static #_ = _staticBlock = () => (this.ɵfac = function EditProfilePageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EditProfilePageModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: EditProfilePageModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__.EditProfilePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_6__.RegionPickerModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EditProfilePageModule, {
    declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_4__.EditProfilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__.EditProfilePageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, src_app_shared_region_picker_region_picker_module__WEBPACK_IMPORTED_MODULE_6__.RegionPickerModule]
  });
})();

/***/ },

/***/ 6064
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfilePage: () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 2601);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var src_app_shared_utils_blob_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utils/blob-file */ 9624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var src_app_services_profile_profile_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profile/profile-api.service */ 2068);
/* harmony import */ var src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth/auth-state.service */ 6247);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/region-picker/region-picker.component */ 8728);

var _staticBlock;













const _c0 = ["fileInput"];
function EditProfilePage_ng_container_11_small_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "COMMON.REQUIRED_FIELD"), " ");
  }
}
function EditProfilePage_ng_container_11_small_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "COMMON.REQUIRED_FIELD"), " ");
  }
}
function EditProfilePage_ng_container_11_small_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "COMMON.REQUIRED_FIELD"), " ");
  }
}
function EditProfilePage_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17)(2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditProfilePage_ng_container_11_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.pickAvatar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditProfilePage_ng_container_11_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.pickAvatar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 26)(13, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "form", 31)(22, "div", 32)(23, "div", 33)(24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, EditProfilePage_ng_container_11_small_29_Template, 3, 3, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 33)(31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, EditProfilePage_ng_container_11_small_36_Template, 3, 3, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 33)(38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "ion-icon", 38)(43, "input", 39)(44, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 33)(49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](53, "ion-icon", 43)(54, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, EditProfilePage_ng_container_11_small_56_Template, 3, 3, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 46)(61, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "app-region-picker", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("regionChange", function EditProfilePage_ng_container_11_Template_app_region_picker_regionChange_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onRegionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditProfilePage_ng_container_11_Template_button_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.goChangePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 51)(70, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 54)(73, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](78, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.avatarPreview || (ctx_r2.user == null ? null : ctx_r2.user.avatar) || ctx_r2.defaultAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 33, "EDIT_PROFILE_PAGE.CHANGE_PHOTO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 35, "EDIT_PROFILE_PAGE.STATUS"), ": ", (ctx_r2.user == null ? null : ctx_r2.user.status) || "ACTIVE", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 37, "EDIT_PROFILE_PAGE.ROLE"), ": ", (ctx_r2.user == null ? null : ctx_r2.user.role) || "USER", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("invalid", ctx_r2.form.controls.firstName.invalid && ctx_r2.form.controls.firstName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 39, "REGISTER_PAGE.FIRST_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 41, "EDIT_PROFILE_PAGE.FIRST_NAME_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", ctx_r2.form.controls.firstName.invalid && ctx_r2.form.controls.firstName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.firstName.invalid && ctx_r2.form.controls.firstName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("invalid", ctx_r2.form.controls.lastName.invalid && ctx_r2.form.controls.lastName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 43, "REGISTER_PAGE.LAST_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 45, "EDIT_PROFILE_PAGE.LAST_NAME_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", ctx_r2.form.controls.lastName.invalid && ctx_r2.form.controls.lastName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.lastName.invalid && ctx_r2.form.controls.lastName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](40, 47, "COMMON.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 49, "EDIT_PROFILE_PAGE.EMAIL_READONLY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("invalid", ctx_r2.form.controls.phone.invalid && ctx_r2.form.controls.phone.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](51, 51, "COMMON.PHONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](55, 53, "EDIT_PROFILE_PAGE.PHONE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", ctx_r2.form.controls.phone.invalid && ctx_r2.form.controls.phone.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.phone.invalid && ctx_r2.form.controls.phone.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](59, 55, "EDIT_PROFILE_PAGE.REGION_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](63, 57, "EDIT_PROFILE_PAGE.REGION_DESC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("region", ctx_r2.selectedRegion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](67, 59, "EDIT_PROFILE_PAGE.SECURITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](75, 61, "COMMON.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](78, 63, "EDIT_PROFILE_PAGE.PASSWORD_RESET_DESC"), " ");
  }
}
function EditProfilePage_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-skeleton-text", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-skeleton-text", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "ion-skeleton-text", 61)(5, "ion-skeleton-text", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 62)(7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "ion-skeleton-text", 63)(9, "ion-skeleton-text", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ion-skeleton-text", 63)(11, "ion-skeleton-text", 64)(12, "ion-skeleton-text", 63)(13, "ion-skeleton-text", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function EditProfilePage_ion_spinner_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-spinner", 66);
  }
}
function EditProfilePage_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-icon", 67);
  }
}
class EditProfilePage {
  constructor(fb, api, authState, nav, toast, platform, translate) {
    this.fb = fb;
    this.api = api;
    this.authState = authState;
    this.nav = nav;
    this.toast = toast;
    this.platform = platform;
    this.translate = translate;
    this.loading = true;
    this.submitting = false;
    this.user = null;
    this.defaultAvatar = 'assets/img/profile.svg';
    this.avatarPreview = null;
    this.selectedRegion = null;
    this.avatarFileToSave = null;
    this.form = this.fb.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      email: [{
        value: '',
        disabled: true
      }]
    });
  }
  ionViewWillEnter() {
    this.load();
  }
  back() {
    this.nav.back();
  }
  load() {
    var _this = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.api.me().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => _this.loading = false)).subscribe(u => {
        _this.user = u;
        _this.selectedRegion = _this.toKnownRegion(u?.region);
        _this.form.patchValue({
          firstName: u?.firstName ?? '',
          lastName: u?.lastName ?? '',
          phone: u?.phone ?? '',
          email: u?.email ?? ''
        });
      });
    })();
  }
  pickAvatar() {
    var _this2 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // ✅ Mobile/Android/iOS : Camera plugin
      if (_this2.platform.is('hybrid')) {
        try {
          const photo = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
            source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Prompt,
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Uri,
            quality: 80
          });
          if (photo?.webPath) {
            const blob = yield (0,src_app_shared_utils_blob_file__WEBPACK_IMPORTED_MODULE_5__.blobFromUrl)(photo.webPath);
            _this2.avatarPreview = photo.webPath;
            _this2.avatarFileToSave = (0,src_app_shared_utils_blob_file__WEBPACK_IMPORTED_MODULE_5__.fileFromBlob)(blob, `avatar-${Date.now()}.jpg`);
          }
        } catch (e) {
          const t = yield _this2.toast.create({
            message: _this2.translate.instant('EDIT_PROFILE_PAGE.TOAST_CAMERA_OPEN_FAILED'),
            duration: 1500
          });
          yield t.present();
        }
        return;
      }
      // ✅ Web : file picker
      _this2.fileInput?.nativeElement?.click();
    })();
  }
  onFileSelected(ev) {
    const input = ev.target;
    const file = input.files?.[0];
    if (!file) return;
    this.revokeAvatarPreview();
    this.avatarPreview = URL.createObjectURL(file);
    this.avatarFileToSave = file;
    // reset (pour permettre re-sélection du même fichier)
    input.value = '';
  }
  goChangePassword() {
    this.nav.navigateForward('/tabs/change-password');
  }
  toKnownRegion(value) {
    const region = String(value ?? '').trim().toUpperCase();
    return ['CENTRE', 'LITTORAL', 'OUEST', 'SUD_OUEST'].includes(region) ? region : null;
  }
  onRegionChange(region) {
    var _this3 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const previous = _this3.selectedRegion;
      _this3.selectedRegion = region;
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this3.authState.updateRegion(region));
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('EDIT_PROFILE_PAGE.TOAST_REGION_UPDATED'),
          duration: 1400
        });
        yield t.present();
      } catch {
        _this3.selectedRegion = previous;
        const t = yield _this3.toast.create({
          message: _this3.translate.instant('EDIT_PROFILE_PAGE.TOAST_REGION_UPDATE_FAILED'),
          duration: 2000
        });
        yield t.present();
      }
    })();
  }
  save() {
    var _this4 = this;
    return (0,D_personnel_Tinguilin_tingilin_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.form.invalid) {
        _this4.form.markAllAsTouched();
        return;
      }
      if (_this4.submitting) return;
      _this4.submitting = true;
      const dto = {
        firstName: String(_this4.form.value.firstName || ''),
        lastName: String(_this4.form.value.lastName || ''),
        phone: String(_this4.form.value.phone || '')
      };
      try {
        if (_this4.avatarFileToSave) {
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this4.api.uploadAvatar(_this4.avatarFileToSave));
        }
        const updated = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this4.api.updateMe(dto));
        _this4.user = updated;
        _this4.submitting = false;
        const t = yield _this4.toast.create({
          message: _this4.translate.instant('EDIT_PROFILE_PAGE.TOAST_UPDATED'),
          duration: 1200
        });
        yield t.present();
        _this4.nav.back();
      } catch (err) {
        _this4.submitting = false;
        const t = yield _this4.toast.create({
          message: err?.error?.message ?? _this4.translate.instant('EDIT_PROFILE_PAGE.TOAST_UPDATE_FAILED'),
          duration: 2000
        });
        yield t.present();
      }
    })();
  }
  ngOnDestroy() {
    this.revokeAvatarPreview();
  }
  revokeAvatarPreview() {
    if (this.avatarPreview?.startsWith('blob:')) {
      URL.revokeObjectURL(this.avatarPreview);
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function EditProfilePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EditProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_profile_profile_api_service__WEBPACK_IMPORTED_MODULE_8__.ProfileApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_auth_state_service__WEBPACK_IMPORTED_MODULE_9__.AuthStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: EditProfilePage,
    selectors: [["app-edit-profile"]],
    viewQuery: function EditProfilePage_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
      }
    },
    standalone: false,
    decls: 25,
    vars: 16,
    consts: [["skel", ""], ["saveIcon", ""], ["fileInput", ""], [1, "edit-bg", 3, "fullscreen"], [1, "screen"], [1, "topbar"], ["type", "button", 1, "top-btn", 3, "click"], ["name", "chevron-back-outline"], [1, "top-title"], [1, "top-spacer"], [1, "content", "no-scrollbar"], [4, "ngIf", "ngIfElse"], [1, "bottom-space"], [1, "cta"], ["type", "button", 1, "save-btn", 3, "click", "disabled"], ["name", "crescent", 4, "ngIf", "ngIfElse"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "avatar-block"], [1, "avatar-ring"], [1, "avatar-frame"], ["alt", "avatar", 1, "avatar-img", 3, "src"], [1, "avatar-hover"], ["name", "camera-outline"], ["type", "button", 1, "avatar-edit-btn", 3, "click"], ["name", "create-outline"], ["type", "button", 1, "avatar-link", 3, "click"], [1, "badges"], [1, "badge", "active"], [1, "dot"], [1, "badge", "role"], ["name", "id-card-outline", 1, "ico"], [1, "form", 3, "formGroup"], [1, "row"], [1, "field"], ["type", "text", "formControlName", "firstName", 3, "placeholder"], ["class", "field-error", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 3, "placeholder"], [1, "input-ico", "readonly"], ["name", "mail-outline", 1, "left"], ["type", "email", "formControlName", "email", "readonly", ""], ["name", "lock-closed-outline", 1, "right"], [1, "hint"], [1, "input-ico"], ["name", "phone-portrait-outline", 1, "left"], ["type", "tel", "inputmode", "tel", "autocomplete", "tel", "formControlName", "phone", 3, "placeholder"], [1, "sec-label", "region-label"], [1, "region-card"], [1, "region-desc"], [3, "regionChange", "region"], [1, "sec-label"], ["type", "button", 1, "sec-card", 3, "click"], [1, "sec-left"], [1, "sec-icon"], ["name", "key-outline"], [1, "sec-text"], [1, "sec-title"], [1, "sec-sub"], ["name", "chevron-forward-outline", 1, "sec-chevron"], [1, "field-error"], ["animated", "", 1, "sk-avatar"], ["animated", "", 1, "sk-link"], ["animated", "", 1, "sk-badge"], [1, "form"], ["animated", "", 1, "sk-input"], ["animated", "", 1, "sk-hint"], ["animated", "", 1, "sk-sec"], ["name", "crescent"], ["name", "save-outline"]],
    template: function EditProfilePage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-content", 3)(1, "div", 4)(2, "header", 5)(3, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditProfilePage_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.back());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, EditProfilePage_ng_container_11_Template, 80, 65, "ng-container", 11)(12, EditProfilePage_ng_template_12_Template, 14, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "footer", 13)(16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditProfilePage_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.save());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, EditProfilePage_ion_spinner_20_Template, 1, 0, "ion-spinner", 15)(21, EditProfilePage_ng_template_21_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "input", 16, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function EditProfilePage_Template_input_change_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onFileSelected($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const skel_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        const saveIcon_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 10, "COMMON.BACK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 12, "EDIT_PROFILE_PAGE.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", skel_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading || ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-busy", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 14, "EDIT_PROFILE_PAGE.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitting)("ngIfElse", saveIcon_r5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSpinner, _shared_region_picker_region_picker_component__WEBPACK_IMPORTED_MODULE_14__.RegionPickerComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
    styles: [".edit-bg[_ngcontent-%COMP%] {\n  --background: var(--app-bg);\n}\n\n.screen[_ngcontent-%COMP%] {\n  height: 100%;\n  width: min(100%, 720px);\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  color: var(--app-ink);\n}\n\n.screen[_ngcontent-%COMP%]::before, \n.screen[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.screen[_ngcontent-%COMP%]::before {\n  top: -180px;\n  left: -220px;\n  background: var(--app-primary-soft);\n}\n\n.screen[_ngcontent-%COMP%]::after {\n  bottom: -220px;\n  right: -220px;\n  background: var(--app-primary-soft);\n}\n\n.topbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  padding: calc(env(safe-area-inset-top) + 12px) 20px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n  background: var(--app-surface);\n}\n\n.top-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  color: var(--app-ink);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.top-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 800;\n  letter-spacing: 0.2px;\n  color: var(--app-ink);\n}\n\n.top-spacer[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 8px 20px 120px;\n  overflow-y: auto;\n  height: calc(100% - 96px);\n}\n\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.no-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.avatar-block[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n\n.avatar-ring[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 124px;\n  border-radius: 999px;\n  padding: 4px;\n  background: var(--app-primary);\n  box-shadow: none;\n}\n\n.avatar-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 999px;\n  overflow: hidden;\n  border: 4px solid var(--app-border);\n  position: relative;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.avatar-hover[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--app-surface);\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 150ms ease;\n}\n\n.avatar-frame[_ngcontent-%COMP%]:hover   .avatar-hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.avatar-edit-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(50% - 62px);\n  bottom: 2px;\n  transform: translateX(102px);\n  width: 42px;\n  height: 42px;\n  border-radius: 999px;\n  border: 3px solid var(--app-border);\n  background: var(--app-primary);\n  color: var(--app-on-primary);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: none;\n}\n\n.avatar-link[_ngcontent-%COMP%] {\n  margin: 8px auto 0;\n  background: transparent;\n  border: none;\n  color: var(--app-primary);\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.3px;\n}\n\n.badge.active[_ngcontent-%COMP%] {\n  background: var(--app-success-soft);\n  border: 1px solid var(--app-success);\n  color: var(--app-success);\n}\n\n.badge.role[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  border: 1px solid var(--app-border);\n  color: var(--app-ink);\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: var(--app-success);\n  box-shadow: none;\n}\n\n.ico[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.95;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 12px;\n  margin-bottom: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--app-muted);\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--app-border);\n  outline: none;\n  border-radius: 16px;\n  padding: 13px 14px;\n  font-size: 14px;\n  font-weight: 650;\n  color: var(--app-ink);\n  background: var(--app-surface-2);\n  box-shadow: none;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--app-primary);\n  box-shadow: none;\n}\n\n.field.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: var(--app-danger);\n  box-shadow: 0 0 0 3px var(--app-danger-soft);\n}\n\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  margin: 7px 0 0 12px;\n  color: var(--app-danger);\n  font-size: 0.72rem;\n  font-weight: 650;\n}\n\n.input-ico[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input-ico[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--app-muted);\n}\n\n.input-ico[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--app-muted);\n}\n\n.input-ico[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 42px;\n}\n\n.input-ico.readonly[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--app-surface-2);\n  color: var(--app-muted);\n  cursor: not-allowed;\n}\n\n.hint[_ngcontent-%COMP%] {\n  margin: 6px 0 0 12px;\n  font-size: 10px;\n  color: var(--app-muted);\n}\n\n.sec-label[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--app-muted);\n  padding-top: 4px;\n}\n\n.region-label[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n.region-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 14px;\n  border: 1px solid var(--app-border);\n  border-radius: 18px;\n  background: var(--app-surface-2);\n  box-shadow: none;\n}\n\n.region-desc[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 11.5px;\n  line-height: 1.5;\n  color: var(--app-muted);\n}\n\n.sec-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--app-border);\n  background: var(--app-surface-2);\n  border-radius: 16px;\n  padding: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  color: var(--app-ink);\n  transition: transform 80ms ease, border-color 150ms ease;\n}\n\n.sec-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.995);\n}\n\n.sec-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--app-border-strong);\n}\n\n.sec-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.sec-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 999px;\n  background: var(--app-primary-soft);\n  color: var(--app-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sec-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.sec-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--app-muted);\n  margin-top: 2px;\n}\n\n.sec-chevron[_ngcontent-%COMP%] {\n  color: var(--app-muted);\n}\n\n.bottom-space[_ngcontent-%COMP%] {\n  height: 36px;\n}\n\n.cta[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  right: auto;\n  bottom: 0;\n  width: min(100%, 720px);\n  transform: translateX(-50%);\n  z-index: 12;\n  padding: 14px 20px calc(env(safe-area-inset-bottom) + 14px);\n  background: var(--app-surface);\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-radius: 999px;\n  padding: 15px 18px;\n  font-size: 15px;\n  font-weight: 900;\n  color: var(--app-on-primary);\n  background: var(--app-primary);\n  box-shadow: var(--app-shadow-brand);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n}\n\n.save-btn[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: currentColor;\n}\n\n.sk-avatar[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 124px;\n  border-radius: 999px;\n}\n\n.sk-link[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 18px;\n  border-radius: 999px;\n  margin: 10px auto 0;\n}\n\n.sk-badge[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  border-radius: 999px;\n}\n\n.sk-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border-radius: 16px;\n}\n\n.sk-hint[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 12px;\n  border-radius: 8px;\n  margin-left: 12px;\n}\n\n.sk-sec[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 76px;\n  border-radius: 16px;\n}\n\n@media (max-width: 360px) {\n  .row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  .cta[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n@media (min-width: 640px) {\n  .content[_ngcontent-%COMP%] {\n    padding-inline: 32px;\n  }\n  .form[_ngcontent-%COMP%] {\n    padding: 22px;\n    border: 1px solid var(--app-border);\n    border-radius: 26px;\n    background: var(--app-surface);\n    box-shadow: var(--app-shadow-soft);\n    -webkit-backdrop-filter: none;\n            backdrop-filter: none;\n  }\n  .cta[_ngcontent-%COMP%] {\n    padding-inline: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx3REFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0RBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGO0VBRUE7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBQUY7RUFHQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFERjtBQUNGO0FBSUE7RUFDRTtJQUNFLG9CQUFBO0VBRkY7RUFLQTtJQUNFLGFBQUE7SUFDQSxtQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQ0FBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7RUFIRjtFQU1BO0lBQ0Usb0JBQUE7RUFKRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtYmcge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYXBwLWJnKTtcclxufVxyXG5cclxuLnNjcmVlbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBtaW4oMTAwJSwgNzIwcHgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLnNjcmVlbjo6YmVmb3JlLFxyXG4uc2NyZWVuOjphZnRlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNjcmVlbjo6YmVmb3JlIHtcclxuICB0b3A6IC0xODBweDtcclxuICBsZWZ0OiAtMjIwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbn1cclxuXHJcbi5zY3JlZW46OmFmdGVyIHtcclxuICBib3R0b206IC0yMjBweDtcclxuICByaWdodDogLTIyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG59XHJcblxyXG4udG9wYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBwYWRkaW5nOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDEycHgpIDIwcHggMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbn1cclxuXHJcbi50b3AtYnRuIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3AtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1pbmspO1xyXG59XHJcblxyXG4udG9wLXNwYWNlciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiA4cHggMjBweCAxMjBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTZweCk7XHJcbn1cclxuXHJcbi5uby1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubm8tc2Nyb2xsYmFyIHtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG59XHJcblxyXG4uYXZhdGFyLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hdmF0YXItcmluZyB7XHJcbiAgd2lkdGg6IDEyNHB4O1xyXG4gIGhlaWdodDogMTI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYXZhdGFyLWZyYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hdmF0YXItaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hdmF0YXItaG92ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uYXZhdGFyLWZyYW1lOmhvdmVyIC5hdmF0YXItaG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hdmF0YXItZWRpdC1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogY2FsYyg1MCUgLSA2MnB4KTtcclxuICBib3R0b206IDJweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAycHgpO1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1vbi1wcmltYXJ5KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5hdmF0YXItbGluayB7XHJcbiAgbWFyZ2luOiA4cHggYXV0byAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uYmFkZ2VzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG59XHJcblxyXG4uYmFkZ2UuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VjY2Vzcy1zb2Z0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1zdWNjZXNzKTtcclxufVxyXG5cclxuLmJhZGdlLnJvbGUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxufVxyXG5cclxuLmRvdCB7XHJcbiAgd2lkdGg6IDdweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VjY2Vzcyk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmljbyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uZmllbGQgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW11dGVkKTtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMTNweCAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjUwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5maWVsZC5pbnZhbGlkIGlucHV0IHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1kYW5nZXIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1hcHAtZGFuZ2VyLXNvZnQpO1xyXG59XHJcblxyXG4uZmllbGQtZXJyb3Ige1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogN3B4IDAgMCAxMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtZGFuZ2VyKTtcclxuICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxufVxyXG5cclxuLmlucHV0LWljbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXQtaWNvIC5sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTRweDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbi5pbnB1dC1pY28gLnJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE0cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uaW5wdXQtaWNvIGlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDQycHg7XHJcbn1cclxuXHJcbi5pbnB1dC1pY28ucmVhZG9ubHkgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1zdXJmYWNlLTIpO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICBtYXJnaW46IDZweCAwIDAgMTJweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbi5zZWMtbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5yZWdpb24tbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuXHJcbi5yZWdpb24tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnJlZ2lvbi1kZXNjIHtcclxuICBtYXJnaW46IDAgMCAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbn1cclxuXHJcbi5zZWMtY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXN1cmZhY2UtMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLCBib3JkZXItY29sb3IgMTUwbXMgZWFzZTtcclxufVxyXG5cclxuLnNlYy1jYXJkOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5NSk7XHJcbn1cclxuXHJcbi5zZWMtY2FyZDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hcHAtYm9yZGVyLXN0cm9uZyk7XHJcbn1cclxuXHJcbi5zZWMtbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnNlYy1pY29uIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnktc29mdCk7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWMtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5zZWMtc3ViIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uc2VjLWNoZXZyb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQpO1xyXG59XHJcblxyXG4uYm90dG9tLXNwYWNlIHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5jdGEge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiBtaW4oMTAwJSwgNzIwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB6LWluZGV4OiAxMjtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHggY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAxNHB4KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbn1cclxuXHJcbi5zYXZlLWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMThweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LWJyYW5kKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnNhdmUtYnRuOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjU1O1xyXG59XHJcblxyXG4uc2F2ZS1idG4gaW9uLXNwaW5uZXIge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG4uc2stYXZhdGFyIHtcclxuICB3aWR0aDogMTI0cHg7XHJcbiAgaGVpZ2h0OiAxMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxufVxyXG5cclxuLnNrLWxpbmsge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcclxufVxyXG5cclxuLnNrLWJhZGdlIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcblxyXG4uc2staW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uc2staGludCB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uc2stc2VjIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY3RhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMzJweDtcclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDIycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1hcHAtc2hhZG93LXNvZnQpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmN0YSB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMzJweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=src_app_pages_edit-profile_edit-profile_module_ts-src_app_shared_utils_media-url_ts.js.map