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
import { EditprofilePage } from '../editprofile/editprofile';
var ProfilePage = (function () {
    // password: any;
    function ProfilePage(navCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.platform.ready().then(function () {
            _this.database = new SQLite();
            _this.database.openDatabase({ name: "data.db", location: "default" }).then(function () {
                console.log('database is opened');
                _this.database.executeSql("SELECT * FROM userprofile LIMIT 1", []).then(function (data) {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            _this.userid = data.rows.item(i).id;
                            _this.name = data.rows.item(i).name;
                            _this.phone = data.rows.item(i).phone;
                            _this.email = data.rows.item(i).email;
                            _this.image = data.rows.item(i).image;
                        }
                    }
                }, function (error) {
                    console.log("ERROR: " + error);
                });
            }, function (error) {
                console.log("ERROR: ", error);
            });
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('Hello ProfilePage Page');
    };
    ProfilePage.prototype.edit = function (id) {
        console.log(id);
        this.navCtrl.push(EditprofilePage);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [NavController, Platform])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.js.map