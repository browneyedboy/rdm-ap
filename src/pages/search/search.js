var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';
import { ListingModel } from './search.model';
import { ListingService } from './search.service';
var SearchPage = (function () {
    function SearchPage(nav, searchService, loadingCtrl) {
        this.nav = nav;
        this.searchService = searchService;
        this.loadingCtrl = loadingCtrl;
        this.search = new ListingModel();
        this.loading = this.loadingCtrl.create();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.searchService
            .getData()
            .then(function (data) {
            _this.search.banner_image = data.banner_image;
            _this.search.banner_title = data.banner_title;
            _this.search.populars = data.populars;
            _this.search.categories = data.categories;
            _this.loading.dismiss();
        });
    };
    SearchPage.prototype.goToFeed = function (category) {
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Component({
        selector: 'search-page',
        templateUrl: 'search.html',
    }),
    __metadata("design:paramtypes", [NavController,
        ListingService,
        LoadingController])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.js.map