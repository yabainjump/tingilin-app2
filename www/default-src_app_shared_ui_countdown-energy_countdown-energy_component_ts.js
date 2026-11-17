"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_ui_countdown-energy_countdown-energy_component_ts"],{

/***/ 6881
/*!**************************************************************************!*\
  !*** ./src/app/shared/ui/countdown-energy/countdown-energy.component.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownEnergyComponent: () => (/* binding */ CountdownEnergyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;




class CountdownEnergyComponent {
  constructor() {
    this.label = '';
    this.value = '--:--:--';
    this.progress = 0;
    this.compact = false;
    this.ended = false;
  }
  get normalizedProgress() {
    const value = Number(this.progress);
    if (!Number.isFinite(value)) return 0;
    return Math.max(0, Math.min(100, value));
  }
  get thumbProgress() {
    return Math.max(4, Math.min(96, this.normalizedProgress));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function CountdownEnergyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CountdownEnergyComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CountdownEnergyComponent,
    selectors: [["app-countdown-energy"]],
    inputs: {
      label: "label",
      value: "value",
      progress: "progress",
      compact: "compact",
      ended: "ended"
    },
    decls: 15,
    vars: 13,
    consts: [["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "energy"], [1, "energy-head"], [1, "energy-label"], ["name", "flash", "aria-hidden", "true"], ["aria-hidden", "true", 1, "energy-track"], [1, "energy-fill"], [1, "spark", "spark-a"], [1, "spark", "spark-b"], [1, "spark", "spark-c"], [1, "spark", "spark-d"], [1, "energy-sheen"], [1, "energy-thumb"]],
    template: function CountdownEnergyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 6)(10, "span", 7)(11, "span", 8)(12, "span", 9)(13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("compact", ctx.compact)("ended", ctx.ended);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx.normalizedProgress)("aria-valuetext", ctx.value)("aria-label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.normalizedProgress, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.thumbProgress, "%");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.energy[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.energy-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 8px;\n  color: var(--app-muted);\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.energy-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 5px;\n}\n\n.energy-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: var(--app-primary);\n  filter: drop-shadow(0 0 5px color-mix(in srgb, var(--app-primary) 70%, transparent));\n}\n\n.energy-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: var(--app-ink);\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0.04em;\n}\n\n.energy-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 18px;\n  overflow: hidden;\n  border: 1px solid var(--app-border);\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--app-ink) 14%, var(--app-surface-2));\n  box-shadow: inset 0 1px 4px color-mix(in srgb, var(--app-ink) 18%, transparent);\n}\n\n.energy-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 auto 0 0;\n  min-width: 0;\n  overflow: hidden;\n  border-radius: inherit;\n  background: linear-gradient(90deg, color-mix(in srgb, var(--app-primary) 72%, #078ec8), var(--app-primary));\n  box-shadow: 0 0 14px color-mix(in srgb, var(--app-primary) 58%, transparent), inset 0 1px 0 color-mix(in srgb, #fff 28%, transparent);\n  transition: width 700ms linear;\n}\n\n.energy-sheen[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(105deg, transparent 18%, color-mix(in srgb, #fff 26%, transparent) 45%, transparent 70%);\n  transform: translateX(-120%);\n  animation: _ngcontent-%COMP%_energy-sheen 2.4s ease-in-out infinite;\n}\n\n.spark[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2px;\n  height: 2px;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 5px #fff;\n  opacity: 0.75;\n  animation: _ngcontent-%COMP%_energy-spark 1.6s ease-in-out infinite;\n}\n\n.spark-a[_ngcontent-%COMP%] {\n  left: 24%;\n  top: 5px;\n}\n\n.spark-b[_ngcontent-%COMP%] {\n  left: 43%;\n  top: 10px;\n  animation-delay: -0.5s;\n}\n\n.spark-c[_ngcontent-%COMP%] {\n  left: 67%;\n  top: 4px;\n  animation-delay: -1s;\n}\n\n.spark-d[_ngcontent-%COMP%] {\n  left: 82%;\n  top: 11px;\n  animation-delay: -1.3s;\n}\n\n.energy-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: 24px;\n  height: 24px;\n  border: 3px solid color-mix(in srgb, #fff 90%, var(--app-surface));\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 2px 8px color-mix(in srgb, #000 28%, transparent), 0 0 9px color-mix(in srgb, #fff 65%, transparent);\n  transform: translate(-50%, -50%);\n  transition: left 700ms linear;\n}\n\n.compact[_ngcontent-%COMP%]   .energy-head[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 10px;\n}\n\n.compact[_ngcontent-%COMP%]   .energy-track[_ngcontent-%COMP%] {\n  height: 12px;\n}\n\n.compact[_ngcontent-%COMP%]   .energy-thumb[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n}\n\n.ended[_ngcontent-%COMP%]   .energy-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n.ended[_ngcontent-%COMP%]   .energy-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--app-danger);\n  filter: none;\n}\n\n.ended[_ngcontent-%COMP%]   .energy-fill[_ngcontent-%COMP%] {\n  background: var(--app-danger);\n  box-shadow: none;\n}\n\n.ended[_ngcontent-%COMP%]   .spark[_ngcontent-%COMP%], \n.ended[_ngcontent-%COMP%]   .energy-sheen[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@keyframes _ngcontent-%COMP%_energy-sheen {\n  0%, 28% {\n    transform: translateX(-120%);\n  }\n  72%, 100% {\n    transform: translateX(120%);\n  }\n}\n@keyframes _ngcontent-%COMP%_energy-spark {\n  0%, 100% {\n    opacity: 0.2;\n    transform: scale(0.7);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.5);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .energy-fill[_ngcontent-%COMP%], \n   .energy-thumb[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .spark[_ngcontent-%COMP%], \n   .energy-sheen[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2NvdW50ZG93bi1lbmVyZ3kvY291bnRkb3duLWVuZXJneS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9GQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSx3RUFBQTtFQUNBLCtFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyR0FBQTtFQUtBLHFJQUNFO0VBRUYsOEJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9IQUFBO0VBTUEsNEJBQUE7RUFDQSxpREFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxpREFBQTtBQVZGOztBQWFBO0VBQVcsU0FBQTtFQUFXLFFBQUE7QUFSdEI7O0FBU0E7RUFBVyxTQUFBO0VBQVcsU0FBQTtFQUFXLHNCQUFBO0FBSGpDOztBQUlBO0VBQVcsU0FBQTtFQUFXLFFBQUE7RUFBVSxvQkFBQTtBQUVoQzs7QUFEQTtFQUFXLFNBQUE7RUFBVyxTQUFBO0VBQVcsc0JBQUE7QUFPakM7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtFQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtIQUNFO0VBRUYsZ0NBQUE7RUFDQSw2QkFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSEE7RUFDRSxZQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSEE7O0VBRUUsd0JBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7O0VBRUUsYUFBQTtBQU1GOztBQUhBO0VBQ0U7SUFBVSw0QkFBQTtFQU9WO0VBTkE7SUFBWSwyQkFBQTtFQVNaO0FBQ0Y7QUFQQTtFQUNFO0lBQVcsWUFBQTtJQUFjLHFCQUFBO0VBV3pCO0VBVkE7SUFBTSxVQUFBO0lBQVkscUJBQUE7RUFjbEI7QUFDRjtBQVpBO0VBQ0U7O0lBRUUsZ0JBQUE7RUFjRjtFQVhBOztJQUVFLGVBQUE7RUFhRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbmVyZ3kge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVuZXJneS1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY29sb3I6IHZhcigtLWFwcC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmVuZXJneS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtaW4td2lkdGg6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4uZW5lcmd5LWxhYmVsIGlvbi1pY29uIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGNvbG9yOiB2YXIoLS1hcHAtcHJpbWFyeSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYXBwLXByaW1hcnkpIDcwJSwgdHJhbnNwYXJlbnQpKTtcbn1cblxuLmVuZXJneS1oZWFkIHN0cm9uZyB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBjb2xvcjogdmFyKC0tYXBwLWluayk7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG5cbi5lbmVyZ3ktdHJhY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMThweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYXBwLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYXBwLWluaykgMTQlLCB2YXIoLS1hcHAtc3VyZmFjZS0yKSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYXBwLWluaykgMTglLCB0cmFuc3BhcmVudCk7XG59XG5cbi5lbmVyZ3ktZmlsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDAgYXV0byAwIDA7XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hcHAtcHJpbWFyeSkgNzIlLCAjMDc4ZWM4KSxcbiAgICB2YXIoLS1hcHAtcHJpbWFyeSlcbiAgKTtcbiAgYm94LXNoYWRvdzpcbiAgICAwIDAgMTRweCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYXBwLXByaW1hcnkpIDU4JSwgdHJhbnNwYXJlbnQpLFxuICAgIGluc2V0IDAgMXB4IDAgY29sb3ItbWl4KGluIHNyZ2IsICNmZmYgMjglLCB0cmFuc3BhcmVudCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDcwMG1zIGxpbmVhcjtcbn1cblxuLmVuZXJneS1zaGVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxMDVkZWcsXG4gICAgdHJhbnNwYXJlbnQgMTglLFxuICAgIGNvbG9yLW1peChpbiBzcmdiLCAjZmZmIDI2JSwgdHJhbnNwYXJlbnQpIDQ1JSxcbiAgICB0cmFuc3BhcmVudCA3MCVcbiAgKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjAlKTtcbiAgYW5pbWF0aW9uOiBlbmVyZ3ktc2hlZW4gMi40cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnNwYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICNmZmY7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGFuaW1hdGlvbjogZW5lcmd5LXNwYXJrIDEuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5zcGFyay1hIHsgbGVmdDogMjQlOyB0b3A6IDVweDsgfVxuLnNwYXJrLWIgeyBsZWZ0OiA0MyU7IHRvcDogMTBweDsgYW5pbWF0aW9uLWRlbGF5OiAtMC41czsgfVxuLnNwYXJrLWMgeyBsZWZ0OiA2NyU7IHRvcDogNHB4OyBhbmltYXRpb24tZGVsYXk6IC0xczsgfVxuLnNwYXJrLWQgeyBsZWZ0OiA4MiU7IHRvcDogMTFweDsgYW5pbWF0aW9uLWRlbGF5OiAtMS4zczsgfVxuXG4uZW5lcmd5LXRodW1iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAzcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsICNmZmYgOTAlLCB2YXIoLS1hcHAtc3VyZmFjZSkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAycHggOHB4IGNvbG9yLW1peChpbiBzcmdiLCAjMDAwIDI4JSwgdHJhbnNwYXJlbnQpLFxuICAgIDAgMCA5cHggY29sb3ItbWl4KGluIHNyZ2IsICNmZmYgNjUlLCB0cmFuc3BhcmVudCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDcwMG1zIGxpbmVhcjtcbn1cblxuLmNvbXBhY3QgLmVuZXJneS1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jb21wYWN0IC5lbmVyZ3ktdHJhY2sge1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5jb21wYWN0IC5lbmVyZ3ktdGh1bWIge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLmVuZGVkIC5lbmVyZ3ktbGFiZWwgaW9uLWljb24sXG4uZW5kZWQgLmVuZXJneS1oZWFkIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1hcHAtZGFuZ2VyKTtcbiAgZmlsdGVyOiBub25lO1xufVxuXG4uZW5kZWQgLmVuZXJneS1maWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRhbmdlcik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5lbmRlZCAuc3BhcmssXG4uZW5kZWQgLmVuZXJneS1zaGVlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgZW5lcmd5LXNoZWVuIHtcbiAgMCUsIDI4JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7IH1cbiAgNzIlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMCUpOyB9XG59XG5cbkBrZXlmcmFtZXMgZW5lcmd5LXNwYXJrIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwLjI7IHRyYW5zZm9ybTogc2NhbGUoMC43KTsgfVxuICA1MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmVuZXJneS1maWxsLFxuICAuZW5lcmd5LXRodW1iIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLnNwYXJrLFxuICAuZW5lcmd5LXNoZWVuIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=default-src_app_shared_ui_countdown-energy_countdown-energy_component_ts.js.map