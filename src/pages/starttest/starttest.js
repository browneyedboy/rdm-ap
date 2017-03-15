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
import { DotestPage } from '../dotest/dotest';
/*
  Generated class for the Starttest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var StarttestPage = (function () {
    function StarttestPage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
    }
    StarttestPage.prototype.ionViewDidLoad = function () {
        console.log('Hello StarttestPage Page');
        this.data = this.params.get('test');
        this.variant = this.data['variant'];
        this.title = this.data['title'];
        this.year = this.data['year'];
        this.time = this.data['time'];
        this.id = this.data['id'];
    };
    StarttestPage.prototype.gotodotest = function (id) {
        this.navCtrl.push(DotestPage, {
            id: id
        });
    };
    return StarttestPage;
}());
StarttestPage = __decorate([
    Component({
        selector: 'page-starttest',
        templateUrl: 'starttest.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], StarttestPage);
export { StarttestPage };
//# sourceMappingURL=starttest.js.map