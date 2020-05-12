(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-details-quote-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<!-- Toolbar theme -->\n\t<ion-toolbar color=\"primary\">\n\t\t<!-- Back navigation to Quotes page-->\n\t\t<ion-buttons slot=\"start\" defaultHref=\"/tabs/(quotes:quotes)\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<!-- Loading the selected quote in the title -->\n\t\t<ion-title> {{ quote?.quote }} </ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Details of the selected quote -->\n\t<ion-card *ngIf=\"quote\">\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Id:</b> {{ quote.quote_id }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Author:</b> {{ quote.author }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Quote:</b> {{ quote.quote }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Series:</b> {{ quote.series }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/quote-details/quote-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: QuoteDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageRoutingModule", function() { return QuoteDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quote_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-details.page */ "./src/app/pages/quote-details/quote-details.page.ts");




const routes = [
    {
        path: '',
        component: _quote_details_page__WEBPACK_IMPORTED_MODULE_3__["QuoteDetailsPage"]
    }
];
let QuoteDetailsPageRoutingModule = class QuoteDetailsPageRoutingModule {
};
QuoteDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuoteDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quote-details/quote-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details.module.ts ***!
  \*************************************************************/
/*! exports provided: QuoteDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsPageModule", function() { return QuoteDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-details-routing.module */ "./src/app/pages/quote-details/quote-details-routing.module.ts");
/* harmony import */ var _quote_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-details.page */ "./src/app/pages/quote-details/quote-details.page.ts");







let QuoteDetailsPageModule = class QuoteDetailsPageModule {
};
QuoteDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quote_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsPageRoutingModule"]
        ],
        declarations: [_quote_details_page__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsPage"]]
    })
], QuoteDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/quote-details/quote-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/quote-details/quote-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/quote-details/quote-details.page.ts ***!
  \***********************************************************/
/*! exports provided: QuoteDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsPage", function() { return QuoteDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");




let QuoteDetailsPage = class QuoteDetailsPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.quoteId = null;
    }
    ngOnInit() {
        //Geting the quote id
        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
        //Getting the quote details by its Id
        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
            console.log(JSON.stringify(this.quote.id));
        });
    }
};
QuoteDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
QuoteDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quote-details/quote-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote-details.page.scss */ "./src/app/pages/quote-details/quote-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], QuoteDetailsPage);



/***/ })

}]);
//# sourceMappingURL=quote-details-quote-details-module-es2015.js.map