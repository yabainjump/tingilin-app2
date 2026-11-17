"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_region-picker_region-picker_module_ts"],{

/***/ 8728
/*!*****************************************************************!*\
  !*** ./src/app/shared/region-picker/region-picker.component.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegionPickerComponent: () => (/* binding */ RegionPickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _regions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regions */ 4017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
var _staticBlock;






function RegionPickerComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegionPickerComponent_button_1_Template_button_click_0_listener() {
      const option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.select(option_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5)(4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r2.isSelected(option_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx_r2.isSelected(option_r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, option_r2.labelKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, option_r2.citiesKey));
  }
}
class RegionPickerComponent {
  constructor() {
    this.options = _regions__WEBPACK_IMPORTED_MODULE_1__.USER_REGION_OPTIONS;
    this.region = null;
    this.regionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  isSelected(value) {
    return this.region === value;
  }
  select(value) {
    if (this.region === value) return;
    this.region = value;
    this.regionChange.emit(value);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function RegionPickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegionPickerComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RegionPickerComponent,
    selectors: [["app-region-picker"]],
    inputs: {
      region: "region"
    },
    outputs: {
      regionChange: "regionChange"
    },
    standalone: false,
    decls: 2,
    vars: 1,
    consts: [["role", "radiogroup", "aria-label", "R\u00E9gion", 1, "region-picker"], ["type", "button", "class", "region-card", "role", "radio", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", "role", "radio", 1, "region-card", 3, "click"], ["aria-hidden", "true", 1, "radio"], [1, "radio-dot"], [1, "texts"], [1, "label"], [1, "cities"], ["name", "location-outline", "aria-hidden", "true", 1, "pin"]],
    template: function RegionPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegionPickerComponent_button_1_Template, 11, 9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.region-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.region-card[_ngcontent-%COMP%] {\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  text-align: left;\n  border: 1px solid var(--app-border, var(--app-border));\n  border-radius: var(--app-radius, 18px);\n  background: var(--app-surface-2);\n  color: inherit;\n  transition: border-color 0.18s var(--app-ease, ease), background 0.18s var(--app-ease, ease), box-shadow 0.18s var(--app-ease, ease);\n}\n.region-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.985);\n}\n.region-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--app-primary);\n  background: var(--app-primary-soft);\n  box-shadow: none;\n}\n.region-card.selected[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  border-color: var(--app-primary);\n  background: var(--app-primary);\n}\n.region-card.selected[_ngcontent-%COMP%]   .radio-dot[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.region-card.selected[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--app-ink);\n}\n\n.radio[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 22px;\n  height: 22px;\n  display: grid;\n  place-items: center;\n  border: 2px solid var(--app-border);\n  border-radius: 999px;\n  transition: border-color 0.18s ease, background 0.18s ease;\n}\n\n.radio-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--app-on-primary);\n  opacity: 0;\n  transform: scale(0.4);\n  transition: opacity 0.18s ease, transform 0.18s var(--app-ease, ease);\n}\n\n.texts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: var(--app-ink);\n}\n\n.cities[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  line-height: 1.4;\n  color: var(--app-muted, var(--app-muted));\n}\n\n.pin[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: 0 0 auto;\n  font-size: 20px;\n  color: var(--app-primary);\n}\n\n.region-card.selected[_ngcontent-%COMP%]   .pin[_ngcontent-%COMP%] {\n  color: var(--app-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3JlZ2lvbi1waWNrZXIvcmVnaW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzREFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esb0lBQ0U7QUFBSjtBQUlFO0VBQ0UsdUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7QUFITjtBQU1JO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBSk47QUFPSTtFQUNFLHFCQUFBO0FBTE47O0FBVUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsMERBQ0U7QUFSSjs7QUFZQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHFFQUNFO0FBVko7O0FBY0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFYRjs7QUFjQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVhGOztBQWNBO0VBQ0UseUJBQUE7QUFYRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnJlZ2lvbi1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5yZWdpb24tY2FyZCB7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFwcC1ib3JkZXIsIHZhcigtLWFwcC1ib3JkZXIpKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtcmFkaXVzLCAxOHB4KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtc3VyZmFjZS0yKTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMThzIHZhcigtLWFwcC1lYXNlLCBlYXNlKSxcclxuICAgIGJhY2tncm91bmQgMC4xOHMgdmFyKC0tYXBwLWVhc2UsIGVhc2UpLFxyXG4gICAgYm94LXNoYWRvdyAwLjE4cyB2YXIoLS1hcHAtZWFzZSwgZWFzZSk7XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45ODUpO1xyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1wcmltYXJ5LXNvZnQpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAucmFkaW8ge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLXByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5yYWRpby1kb3Qge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hcHAtaW5rKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hcHAtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMThzIGVhc2UsXHJcbiAgICBiYWNrZ3JvdW5kIDAuMThzIGVhc2U7XHJcbn1cclxuXHJcbi5yYWRpby1kb3Qge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLW9uLXByaW1hcnkpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICBvcGFjaXR5IDAuMThzIGVhc2UsXHJcbiAgICB0cmFuc2Zvcm0gMC4xOHMgdmFyKC0tYXBwLWVhc2UsIGVhc2UpO1xyXG59XHJcblxyXG4udGV4dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJweDtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XHJcbn1cclxuXHJcbi5jaXRpZXMge1xyXG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtbXV0ZWQsIHZhcigtLWFwcC1tdXRlZCkpO1xyXG59XHJcblxyXG4ucGluIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHZhcigtLWFwcC1wcmltYXJ5KTtcclxufVxyXG5cclxuLnJlZ2lvbi1jYXJkLnNlbGVjdGVkIC5waW4ge1xyXG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 1815
/*!**************************************************************!*\
  !*** ./src/app/shared/region-picker/region-picker.module.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegionPickerModule: () => (/* binding */ RegionPickerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8503);
/* harmony import */ var _region_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region-picker.component */ 8728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





class RegionPickerModule {
  static #_ = _staticBlock = () => (this.ɵfac = function RegionPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RegionPickerModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: RegionPickerModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RegionPickerModule, {
    declarations: [_region_picker_component__WEBPACK_IMPORTED_MODULE_3__.RegionPickerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule],
    exports: [_region_picker_component__WEBPACK_IMPORTED_MODULE_3__.RegionPickerComponent]
  });
})();

/***/ }

}]);
//# sourceMappingURL=default-src_app_shared_region-picker_region-picker_module_ts.js.map