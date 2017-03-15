var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import { HomePage } from '../home/home';
/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var IntroPage = (function () {
    function IntroPage(navCtrl, tutsService) {
        this.navCtrl = navCtrl;
        this.tutsService = tutsService;
        this.slide_options = {
            pager: true
        };
        this.lastSlide = false;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('Hello IntroPage Page');
        this.tutsService.banner();
    };
    IntroPage.prototype.onSlideChanged = function () {
        // If it's the last slide, then hide the 'Skip' button on the header
        this.lastSlide = this.slider.isEnd();
    };
    IntroPage.prototype.login = function () {
        this.navCtrl.push(HomePage);
        // this.navCtrl.setRoot(HomePage);
    };
    return IntroPage;
}());
__decorate([
    ViewChild('slider'),
    __metadata("design:type", Slides)
], IntroPage.prototype, "slider", void 0);
IntroPage = __decorate([
    Component({
        selector: 'page-intro',
        templateUrl: 'intro.html'
    }),
    __metadata("design:paramtypes", [NavController, Lessondata])
], IntroPage);
export { IntroPage };
//# sourceMappingURL=intro.js.map