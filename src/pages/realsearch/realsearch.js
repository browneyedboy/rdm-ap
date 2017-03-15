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
import { NavController } from 'ionic-angular';
/*
  Generated class for the Realsearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RealsearchPage = (function () {
    function RealsearchPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.searchQuery = '';
        this.initializeItems();
    }
    RealsearchPage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota'
        ];
    };
    RealsearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return RealsearchPage;
}());
RealsearchPage = __decorate([
    Component({
        selector: 'page-realsearch',
        templateUrl: 'realsearch.html'
    }),
    __metadata("design:paramtypes", [NavController])
], RealsearchPage);
export { RealsearchPage };
//# sourceMappingURL=realsearch.js.map