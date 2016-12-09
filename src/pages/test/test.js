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
import { StarttestPage } from '../starttest/starttest';
/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var TestPage = (function () {
    function TestPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cond = "niigem";
        this.show = false;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('Hello TestPage Page');
    };
    TestPage.prototype.showtests = function () {
        this.show = !this.show;
    };
    TestPage.prototype.gotostarttest = function () {
        this.navCtrl.push(StarttestPage);
    };
    TestPage = __decorate([
        Component({
            selector: 'page-test',
            templateUrl: 'test.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], TestPage);
    return TestPage;
}());
//# sourceMappingURL=test.js.map