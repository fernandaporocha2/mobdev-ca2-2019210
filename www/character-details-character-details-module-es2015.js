(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<!-- Toolbar theme -->\n\t<ion-toolbar color=\"primary\">\n\t\t<!-- Back navigation to characters page-->\n\t\t<ion-buttons slot=\"start\" defaultHref=\"/tabs/characters\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<!-- Loading the name of the character in the title -->\n\t\t<ion-title> {{ character?.name }}</ion-title>\n\n\t\t<!-- Like and dislike button bar -->\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"neutreCharacter()\" *ngIf=\"isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"likeCharacter()\" *ngIf=\"!isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"neutreCharacter()\" *ngIf=\"isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"dislikeCharacter()\" *ngIf=\"!isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Details of the selected character -->\n\t<ion-card *ngIf=\"character\">\n        <ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<img src={{character.img}} alt={{character.name}} width=\"10%\" height=\"10%\"/>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Id:</b> {{ character.char_id }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Name:</b> {{ character.name }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Birthday:</b> {{ character.birthday }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b> Occupation: </b> {{ character.occupation }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Status:</b> {{ character.status }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Appearance:</b> {{ character.appearance }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Portrayed:</b> {{ character.portrayed }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_character_reaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/character-reaction.service */ "./src/app/services/character-reaction.service.ts");





let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api, reactionService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.reactionService = reactionService;
        this.characterId = null;
        this.isLiked = false;
        this.isDisliked = false;
    }
    ngOnInit() {
        //get te id of the character
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        //get and set up the information of the character
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });
        //initialize variables used to store the like/dislike/neutral state
        this.reactionService.isLiked(this.characterId).then(liked => {
            this.isLiked = liked;
        });
        this.reactionService.isDisliked(this.characterId).then(disliked => {
            this.isDisliked = disliked;
        });
    }
    //Function used for like a character
    likeCharacter() {
        // After calling the funcion likeCharacter from reaction service, 
        // it updates the variables of states of the buttons like and dislike 
        this.reactionService.likeCharacter(this.characterId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }
    //Function used for dislike a character
    dislikeCharacter() {
        // After calling the funcion dislikeCharacter from reaction service, 
        // it updates the variables os states of the buttons like and dislike
        this.reactionService.dislikeCharacter(this.characterId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }
    //This function is called when a characted is unlike or undisliked
    neutreCharacter() {
        // After calling the funcion neutreCharacter from reaction service, 
        // it updates the variables os states of the buttons like and dislike
        this.reactionService.neutreCharacter(this.characterId);
        this.isLiked = false;
        this.isDisliked = false;
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_character_reaction_service__WEBPACK_IMPORTED_MODULE_4__["CharacterReactionService"] }
];
CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_character_reaction_service__WEBPACK_IMPORTED_MODULE_4__["CharacterReactionService"]])
], CharacterDetailsPage);



/***/ }),

/***/ "./src/app/services/character-reaction.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/character-reaction.service.ts ***!
  \********************************************************/
/*! exports provided: CharacterReactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterReactionService", function() { return CharacterReactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



//Constants that will store the liked and disliked characters keys
const LIKE_KEY = 'likedCharacters';
const DISLIKE_KEY = 'dislikedCharacters';
let CharacterReactionService = class CharacterReactionService {
    constructor(storage) {
        this.storage = storage;
    }
    //It return all the liked characters
    getLikedCharacters() {
        console.log("getLikedCharacters");
        console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
        return this.storage.get(LIKE_KEY);
    }
    //It return all the disliked characters
    getDislikedCharacters() {
        console.log("getDislikedCharacters");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.storage.get(DISLIKE_KEY);
    }
    //It verifies if a characterId is the liked list
    isLiked(characterId) {
        return this.getLikedCharacters().then(result => {
            console.log("isLiked");
            console.log(JSON.stringify(result.indexOf(characterId)));
            return result && result.indexOf(characterId) !== -1;
        });
    }
    //It verifies if a characterId is the disliked list
    isDisliked(characterId) {
        return this.getDislikedCharacters().then(result => {
            console.log("isDisliked");
            console.log(JSON.stringify(result.indexOf(characterId)));
            return result && result.indexOf(characterId) !== -1;
        });
    }
    //It likes a character - adds it to the liked list 
    likeCharacter(characterId) {
        //For making sure it is not going to be in both list at the same time,
        //the function removeFromDislikedCharacter is used
        this.removeFromDislikedCharacter(characterId);
        console.log("likeCharacter");
        //It gets all the liked characters
        return this.getLikedCharacters().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent liked list already
                //The characterId is add to result
                result.push(characterId);
                //It is saved
                this.storage.set(LIKE_KEY, result);
                return true;
            }
            else {
                //If the result is false, it means that there is no liked list yet
                //The characterId is saved in the liked list
                this.storage.set(LIKE_KEY, [characterId]);
                return true;
            }
        });
    }
    //It dilikes a character - adds it to the disliked list 
    dislikeCharacter(characterId) {
        //For making sure it is not going to be in both list at the same time,
        //the function removeFromLikedCharacter is used
        this.removeFromLikedCharacter(characterId);
        //It gets all the disliked characters
        return this.getDislikedCharacters().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent disliked list already
                //The characterId is add to result
                result.push(characterId);
                //It is saved
                this.storage.set(DISLIKE_KEY, result);
            }
            else {
                //If the result is false, it means that there is no dislike list yet
                //The characterId is saved in disliked the list
                this.storage.set(DISLIKE_KEY, [characterId]);
                return true;
            }
        });
    }
    //When a character is liked or disliked it will be removed from both lists
    neutreCharacter(characterId) {
        this.removeFromDislikedCharacter(characterId);
        this.removeFromLikedCharacter(characterId);
    }
    //It removes a characterId from the liked list
    removeFromLikedCharacter(characterId) {
        return this.getLikedCharacters().then(result => {
            //It verifies if the given characterId is in the liked list and removes it
            if (result && result.indexOf(characterId) !== -1) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(LIKE_KEY, result);
            }
        });
    }
    //It removes a characterId from the disliked list
    removeFromDislikedCharacter(characterId) {
        return this.getDislikedCharacters().then(result => {
            console.log(JSON.stringify(result.indexOf(characterId)));
            //It verifies if the given characterId is in the disliked list and removes it
            if (result && result.indexOf(characterId) !== -1) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(DISLIKE_KEY, result);
            }
        });
    }
};
CharacterReactionService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
CharacterReactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], CharacterReactionService);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map