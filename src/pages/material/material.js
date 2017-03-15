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
import { Lessondata } from '../../providers/lessondata';
import { AboutuniPage } from '../aboutuni/aboutuni';
/*
   ih surguuliud
*/
var MaterialPage = (function () {
    function MaterialPage(navCtrl, tutsService) {
        this.navCtrl = navCtrl;
        this.tutsService = tutsService;
    }
    MaterialPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MaterialPage Page');
        // getuniversities
        this.tutsService.getuniversities();
    };
    MaterialPage.prototype.aboutunivsity = function (uni) {
        this.navCtrl.push(AboutuniPage, {
            data: uni
        });
    };
    return MaterialPage;
}());
MaterialPage = __decorate([
    Component({
        selector: 'page-material',
        templateUrl: 'material.html'
    }),
    __metadata("design:paramtypes", [NavController, Lessondata])
], MaterialPage);
export { MaterialPage };
//# sourceMappingURL=material.js.map