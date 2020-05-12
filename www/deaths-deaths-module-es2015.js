(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-deaths-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<!-- Toolbar theme -->\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Deaths</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar>\n\t\t<!-- https://ionicframework.com/docs/api/searchbar -->\n\t\t<!-- https://www.freecodecamp.org/news/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a/ -->\n\t\t<!-- The search bar. Everytime something is typed the function searchDeathCount will be called -->\n\t\t<!-- The value typed by the user will be store in the ngModel called responsible -->\n\t\t<ion-searchbar [(ngModel)]=\"responsible\" (ionChange)=\"searchDeathCount($event)\"\n\t\t\tplaceholder=\"Search Deaths by Responsible\"></ion-searchbar>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card *ngIf=\"death\">\n\t\t<ion-card-content>\n\t\t\t<b>Responsible:</b> {{ death.name }}\n\t\t\t<b>Death Count:</b> {{ death.deathCount }} \n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/deaths/deaths-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/deaths/deaths-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DeathsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPageRoutingModule", function() { return DeathsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deaths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deaths.page */ "./src/app/pages/deaths/deaths.page.ts");




const routes = [
    {
        path: '',
        component: _deaths_page__WEBPACK_IMPORTED_MODULE_3__["DeathsPage"]
    }
];
let DeathsPageRoutingModule = class DeathsPageRoutingModule {
};
DeathsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/deaths/deaths.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/deaths/deaths.module.ts ***!
  \***********************************************/
/*! exports provided: DeathsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPageModule", function() { return DeathsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deaths-routing.module */ "./src/app/pages/deaths/deaths-routing.module.ts");
/* harmony import */ var _deaths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deaths.page */ "./src/app/pages/deaths/deaths.page.ts");







let DeathsPageModule = class DeathsPageModule {
};
DeathsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsPageRoutingModule"]
        ],
        declarations: [_deaths_page__WEBPACK_IMPORTED_MODULE_6__["DeathsPage"]]
    })
], DeathsPageModule);



/***/ }),

/***/ "./src/app/pages/deaths/deaths.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/deaths/deaths.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRocy9kZWF0aHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/deaths/deaths.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/deaths/deaths.page.ts ***!
  \*********************************************/
/*! exports provided: DeathsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPage", function() { return DeathsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");



let DeathsPage = class DeathsPage {
    constructor(api) {
        this.api = api;
        // this variable stores the text typed byt the user in the searchbar
        this.responsible = '';
    }
    ngOnInit() {
    }
    //This function searches all the responsibles name by deaths that contains the typed text
    searchDeathCount() {
        this.api.getDeathCount(this.responsible).subscribe(res => {
            this.death = res[0];
            console.log(this.death);
        });
    }
};
DeathsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
DeathsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deaths',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deaths.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deaths.page.scss */ "./src/app/pages/deaths/deaths.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], DeathsPage);



/***/ })

}]);
//# sourceMappingURL=deaths-deaths-module-es2015.js.map