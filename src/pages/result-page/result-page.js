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
import { Lessondata } from '../../providers/lessondata';
/*
  Generated class for the ResultPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ResultPage = (function () {
    function ResultPage(navCtrl, params, tutsService) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.tutsService = tutsService;
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ResultPagePage Page');
        var sum = 0;
        var data = this.params.get('data');
        console.log(data);
        for (var i in data) {
            sum += parseFloat(data[i]);
        }
        console.log(sum);
        this.onoo = sum;
        this.tutsService.getprofessionals(sum);
    };
    return ResultPage;
}());
ResultPage = __decorate([
    Component({
        selector: 'page-result-page',
        templateUrl: 'result-page.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Lessondata])
], ResultPage);
export { ResultPage };
//# sourceMappingURL=result-page.js.map