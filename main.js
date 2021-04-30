(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Šmegfi\Desktop\Programing\DochazkaWEBapp\angular\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppComponent {
    constructor() {
        this.title = 'angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "mainText"], [1, "main"], [1, "buttons"], [1, "current-time"], [1, "computer-list"], [1, "test"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0160MEGFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "04:02:44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PRICHOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ODCHOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CHECK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ajklsjflkasdfasdfasdfjsdlkf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\nh1.mainText[_ngcontent-%COMP%] {\n  color: white;\n  width: 100%;\n  text-align: center;\n  padding-top: 4vh;\n  font-size: 20vw;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: white;\n  width: 50%;\n  margin: auto;\n}\n\n.main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 80%;\n  margin: auto;\n  margin-top: 4vh;\n}\n\n.main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: gold;\n  margin: auto;\n  text-align: center;\n  color: black;\n  height: 20%;\n  border-radius: 30px;\n  padding: 8px;\n  font-weight: 900;\n  font-size: 20px;\n}\n\n.main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 17vh;\n  border-radius: 30px;\n  margin-top: 4vh;\n  color: black;\n  font-weight: 900;\n  font-size: 5vh;\n  background-color: gold;\n  border-color: black;\n  transition: 0.2s;\n}\n\n.main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: darkgoldenrod;\n  letter-spacing: 7px;\n  transition: 0.1s;\n}\n\n@media (min-width: 650px) {\n  h1.mainText[_ngcontent-%COMP%] {\n    color: white;\n    width: 100%;\n    text-align: center;\n    padding-top: 4vh;\n    font-size: 10vw;\n  }\n\n  hr[_ngcontent-%COMP%] {\n    color: white;\n    width: 50%;\n    margin: auto;\n  }\n\n  .main[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 80%;\n    margin: auto;\n    margin-top: 4vh;\n    display: flex;\n    justify-content: space-between;\n  }\n  .main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    width: 50%;\n    height: 100%;\n  }\n  .main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .current-time[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: gold;\n    margin: auto;\n    text-align: center;\n    color: black;\n    height: 20%;\n    border-radius: 30px;\n    padding: 8px;\n    font-weight: 900;\n    font-size: 20px;\n  }\n  .main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 17vh;\n    border-radius: 30px;\n    margin-top: 4vh;\n    color: black;\n    font-weight: 900;\n    font-size: 5vh;\n    background-color: gold;\n    border-color: black;\n    transition: 0.2s;\n  }\n  .main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n    background-color: darkgoldenrod;\n    letter-spacing: 7px;\n    transition: 0.1s;\n  }\n  .main[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: darkgoldenrod;\n  }\n  .main[_ngcontent-%COMP%]   .computer-list[_ngcontent-%COMP%] {\n    width: 50%;\n    height: 67vh;\n    display: block;\n    color: white;\n    text-align: center;\n    background-color: gray;\n    margin-left: 4vw;\n  }\n  .main[_ngcontent-%COMP%]   .computer-list[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n    color: white;\n    width: 90%;\n    margin: auto;\n    height: 90%;\n    margin-top: 5%;\n    font-size: 20px;\n    background-color: gray;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUY7O0FBREU7RUFDRSxZQUFBO0FBR0o7O0FBREk7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdOOztBQURJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHTjs7QUFESTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdOOztBQUNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBRUY7O0VBQUE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFHRjs7RUFDQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RUFFRjtFQURFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUFHSjtFQUZJO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFJTjtFQUZJO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFJTjtFQUZJO0lBQ0UsK0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBSU47RUFGSTtJQUNFLCtCQUFBO0VBSU47RUFERTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUFHSjtFQUZJO0lBQ0UsWUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7RUFJTjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmgxLm1haW5UZXh0e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDR2aDtcclxuICBmb250LXNpemU6IDIwdnc7XHJcbn1cclxuaHJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLm1haW57XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDR2aDtcclxuICAuYnV0dG9uc3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAuY3VycmVudC10aW1le1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgIGhlaWdodDogMTd2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXZoO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmFjdGl2ZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDY1MHB4KXtcclxuICBoMS5tYWluVGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDR2aDtcclxuICAgIGZvbnQtc2l6ZTogMTB2dztcclxuICB9XHJcbiAgaHJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4gIC5tYWlue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDR2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuYnV0dG9uc3tcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAuY3VycmVudC10aW1le1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAxN3ZoO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbjphY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogN3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb21wdXRlci1saXN0e1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDY3dmg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcclxuICAgICAgLnRlc3R7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map