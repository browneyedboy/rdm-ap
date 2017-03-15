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
import { NavController, Platform } from 'ionic-angular';
import { SQLite } from "ionic-native";
/*
  Generated class for the Mypoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var MypointPage = (function () {
    function MypointPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.items = [];
    }
    MypointPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('Hello MypointPage Page');
        this.platform.ready().then(function () {
            _this.database = new SQLite();
            _this.database.openDatabase({ name: "data.db", location: "default" }).then(function () {
                console.log('database is opened');
                _this.database.executeSql("SELECT * FROM mytest", []).then(function (data) {
                    console.log(data);
                    _this.items = data;
                }, function (error) {
                    console.log("ERROR: " + error);
                });
            }, function (error) {
                console.log("ERROR: ", error);
            });
        });
    };
    return MypointPage;
}());
MypointPage = __decorate([
    Component({
        selector: 'page-mypoint',
        templateUrl: 'mypoint.html'
    }),
    __metadata("design:paramtypes", [NavController, Platform])
], MypointPage);
export { MypointPage };
//# sourceMappingURL=mypoint.js.map