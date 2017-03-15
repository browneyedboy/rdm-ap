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
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Aboutuni page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AboutuniPage = (function () {
    function AboutuniPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
    }
    AboutuniPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AboutuniPage Page');
        var data = this.params.get('data');
        this.logo = data.logo;
        this.title = data.title;
        this.description = data.description;
    };
    return AboutuniPage;
}());
AboutuniPage = __decorate([
    Component({
        selector: 'page-aboutuni',
        templateUrl: 'aboutuni.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], AboutuniPage);
export { AboutuniPage };
//# sourceMappingURL=aboutuni.js.map