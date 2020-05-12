(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<!-- Toolbar theme -->\n\t<ion-toolbar color=\"primary\">\n\t\t<!-- Back navigation to episodes page -->\n\t\t<ion-buttons slot=\"start\" defaultHref=\"/tabs/(episodes:episodes)\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<!-- It Loads the name of the current episode in the title -->\n\t\t<ion-title> {{ episode?.title }}</ion-title>\n\t\t<!-- Like and dislike button bar -->\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"neutreEpisode()\" *ngIf=\"isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"likeEpisode()\" *ngIf=\"!isLiked\">\n\t\t\t\t<ion-icon name=\"thumbs-up-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n            <ion-button (click)=\"neutreEpisode()\" *ngIf=\"isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"dislikeEpisode()\" *ngIf=\"!isDisliked\">\n\t\t\t\t<ion-icon name=\"thumbs-down-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n        </ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Details of the selected episode -->\n\t<ion-card *ngIf=\"episode\">\n    <ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Id:</b> {{ episode.episode_id }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Title:</b> {{ episode.title }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Season:</b> {{ episode.season }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Episode:</b> {{ episode.episode }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Air Date:</b> {{ episode.air_date }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t\t<ion-card>\n\t\t\t<ion-card-content>\n\t\t\t\t<b>Characters:</b> {{ episode.characters }}\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EpisodeDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function() { return EpisodeDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");




const routes = [
    {
        path: '',
        component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }
];
let EpisodeDetailsPageRoutingModule = class EpisodeDetailsPageRoutingModule {
};
EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodeDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: EpisodeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function() { return EpisodeDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episode-details-routing.module */ "./src/app/pages/episode-details/episode-details-routing.module.ts");
/* harmony import */ var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episode-details.page */ "./src/app/pages/episode-details/episode-details.page.ts");







let EpisodeDetailsPageModule = class EpisodeDetailsPageModule {
};
EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]
        ],
        declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })
], EpisodeDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/episode-details/episode-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
  \***************************************************************/
/*! exports provided: EpisodeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function() { return EpisodeDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_episode_reaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/episode-reaction.service */ "./src/app/services/episode-reaction.service.ts");





let EpisodeDetailsPage = class EpisodeDetailsPage {
    constructor(activatedRoute, api, reactionService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.reactionService = reactionService;
        this.episodeId = null;
        this.isLiked = false;
        this.isDisliked = false;
    }
    ngOnInit() {
        //get te id of the episode
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        //get and set up the information of the character
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });
        //initialize variables used to store the like/dislike/neutral state
        this.reactionService.isLiked(this.episodeId).then(liked => {
            this.isLiked = liked;
            console.log("liked");
            console.log(JSON.stringify(liked));
        });
        this.reactionService.isDisliked(this.episodeId).then(disliked => {
            this.isDisliked = disliked;
            console.log("disliked");
            console.log(JSON.stringify(disliked));
        });
    }
    //Function used for like a episode
    likeEpisode() {
        // After calling the funcion likeEpisode from reaction service, 
        // it updates the variables of states of the buttons like and dislike 
        this.reactionService.likeEpisode(this.episodeId).then(() => {
            this.isLiked = true;
            this.isDisliked = false;
        });
    }
    //Function used for dislike a episode
    dislikeEpisode() {
        // After calling the funcion dislikeEpisode from reaction service, 
        // it updates the variables of states of the buttons like and dislike 
        this.reactionService.dislikeEpisode(this.episodeId).then(() => {
            this.isLiked = false;
            this.isDisliked = true;
        });
    }
    //This function is called when a Episode is unlike or undisliked
    neutreEpisode() {
        // After calling the funcion neutreEpisode from reaction service, 
        // it updates the variables os states of the buttons like and dislike
        this.reactionService.neutreEpisode(this.episodeId);
        this.isLiked = false;
        this.isDisliked = false;
    }
};
EpisodeDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_episode_reaction_service__WEBPACK_IMPORTED_MODULE_4__["EpisodeReactionService"] }
];
EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episode-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episode-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episode-details.page.scss */ "./src/app/pages/episode-details/episode-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_episode_reaction_service__WEBPACK_IMPORTED_MODULE_4__["EpisodeReactionService"]])
], EpisodeDetailsPage);



/***/ }),

/***/ "./src/app/services/episode-reaction.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/episode-reaction.service.ts ***!
  \******************************************************/
/*! exports provided: EpisodeReactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodeReactionService", function() { return EpisodeReactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



//Constants that will store the liked and disliked episodes keys
const LIKE_KEY = 'likedEpisodes';
const DISLIKE_KEY = 'dislikedEpisodes';
let EpisodeReactionService = class EpisodeReactionService {
    constructor(storage) {
        this.storage = storage;
    }
    //It return all the liked episodes
    getLikedEpisodes() {
        console.log("getLikedEpisodes");
        console.log(JSON.stringify(this.storage.get(LIKE_KEY)));
        return this.storage.get(LIKE_KEY);
    }
    //It return all the disliked episodes
    getDislikedEpisodes() {
        console.log("getDislikedEpisodes");
        console.log(JSON.stringify(this.storage.get(DISLIKE_KEY)));
        return this.storage.get(DISLIKE_KEY);
    }
    //It verifies if an episodeId is the liked list
    isLiked(episodeId) {
        return this.getLikedEpisodes().then(result => {
            console.log("isLiked");
            console.log(JSON.stringify(result.indexOf(episodeId)));
            return result && result.indexOf(episodeId) !== -1;
        });
    }
    //It verifies if an episodeId is the disliked list
    isDisliked(episodeId) {
        return this.getDislikedEpisodes().then(result => {
            console.log("isDisliked");
            console.log(JSON.stringify(result.indexOf(episodeId)));
            return result && result.indexOf(episodeId) !== -1;
        });
    }
    //It likes an episode - adds it to the liked list 
    likeEpisode(episodeId) {
        //For making sure it is not going to be in both list at the same time,
        //the function removeFromDislikedEpisode is used
        this.removeFromDislikedEpisode(episodeId);
        console.log("likeEpisode");
        //It gets all the liked episodes
        return this.getLikedEpisodes().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent liked list already
                //The episodeId is add to result
                result.push(episodeId);
                //It is saved
                this.storage.set(LIKE_KEY, result);
                return true;
            }
            else {
                //If the result is false, it means that there is no liked list yet
                //The episodeId is saved in the liked list
                this.storage.set(LIKE_KEY, [episodeId]);
                return true;
            }
        });
    }
    //It dilikes an episode - adds it to the disliked list 
    dislikeEpisode(episodeId) {
        //For making sure it is not going to be in both list at the same time,
        //the function removeFromLikedEpisode is used
        this.removeFromLikedEpisode(episodeId);
        //It gets all the disliked episodes
        return this.getDislikedEpisodes().then(result => {
            if (result) {
                //If the result is true, it means that there is an existent disliked list already
                //The episodeId is add to result
                result.push(episodeId);
                //It is saved
                this.storage.set(DISLIKE_KEY, result);
                return true;
            }
            else {
                //If the result is false, it means that there is no dislike list yet
                //The episodeId is saved in disliked the list
                this.storage.set(DISLIKE_KEY, [episodeId]);
                return true;
            }
        });
    }
    //When an episode is liked or disliked it will be removed from both lists
    neutreEpisode(episodeId) {
        this.removeFromDislikedEpisode(episodeId);
        this.removeFromLikedEpisode(episodeId);
    }
    //It removes an episodeId from the liked list
    removeFromLikedEpisode(episodeId) {
        return this.getLikedEpisodes().then(result => {
            //It verifies if the given characterId is in the liked list and removes it
            if (result && result.indexOf(episodeId) !== -1) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(LIKE_KEY, result);
            }
        });
    }
    //It removes an episodeId from the disliked list
    removeFromDislikedEpisode(episodeId) {
        return this.getDislikedEpisodes().then(result => {
            console.log(JSON.stringify(result.indexOf(episodeId)));
            //It verifies if the given characterId is in the disliked list and removes it
            if (result && result.indexOf(episodeId) !== -1) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(DISLIKE_KEY, result);
            }
        });
    }
};
EpisodeReactionService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
EpisodeReactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], EpisodeReactionService);



/***/ })

}]);
//# sourceMappingURL=episode-details-episode-details-module-es2015.js.map