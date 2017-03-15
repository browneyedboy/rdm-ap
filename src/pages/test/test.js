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
import { Lessondata } from '../../providers/lessondata';
var TestPage = (function () {
    function TestPage(navCtrl, tutsService) {
        this.navCtrl = navCtrl;
        this.tutsService = tutsService;
        this.cond = "niigem";
        this.year = 0;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        this.tutsService.loadtest();
    };
    TestPage.prototype.showtests = function (id) {
        this.show = id;
    };
    TestPage.prototype.gotostarttest = function (test) {
        this.navCtrl.push(StarttestPage, {
            test: test
        });
    };
    return TestPage;
}());
TestPage = __decorate([
    Component({
        selector: 'page-test',
        templateUrl: 'test.html'
    }),
    __metadata("design:paramtypes", [NavController, Lessondata])
], TestPage);
export { TestPage };
//# sourceMappingURL=test.js.map