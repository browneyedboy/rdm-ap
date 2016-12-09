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
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
/*
  Generated class for the Dotest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var DotestPage = (function () {
    function DotestPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOptions = {
            loop: false,
            pager: true,
            paginationClickable: true,
            paginationBulletRender: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        };
        this.colors = false;
    }
    DotestPage.prototype.onSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        console.log("Current index is", currentIndex);
    };
    DotestPage.prototype.slidePrev = function () {
        this.slider.slidePrev();
    };
    DotestPage.prototype.slideNext = function () {
        this.slider.slideNext();
    };
    DotestPage.prototype.ionViewDidLoad = function () {
        console.log('Hello DotestPage Page');
    };
    DotestPage.prototype.colorchanged = function () {
        console.log(this.colors);
    };
    __decorate([
        ViewChild('qSlider'), 
        __metadata('design:type', Slides)
    ], DotestPage.prototype, "slider", void 0);
    DotestPage = __decorate([
        Component({
            selector: 'page-dotest',
            templateUrl: 'dotest.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], DotestPage);
    return DotestPage;
}());
//# sourceMappingURL=dotest.js.map