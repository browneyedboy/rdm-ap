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
import { NavController, ToastController, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SQLite } from "ionic-native";
import { Lessondata } from '../../providers/lessondata';
var RegisterPage = (function () {
    // main_page: { component: any };
    function RegisterPage(navCtrl, tutsService, toastCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.tutsService = tutsService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.platform.ready().then(function () {
            _this.database = new SQLite();
            _this.database.openDatabase({ name: "data.db", location: "default" }).then(function () {
                console.log('database is opened');
            }, function (error) {
                console.log("ERROR: ", error);
            });
        });
        this.register = new FormGroup({
            phone: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required)
        });
    }
    RegisterPage.prototype.doRegister = function () {
        this.tutsService.registeruser(this.register.value.phone, this.register.value.email);
        console.log(this.tutsService.userregistered);
        if (this.tutsService.userregistered == 1) {
            this.database.executeSql("INSERT INTO userprofile (name, phone, email, image, password) VALUES (?, ?, ?, ?, ?)", [
                '',
                this.register.value.phone,
                this.register.value.email,
                '',
                ''
            ]).then(function (data) {
                console.log("INSERTED USER: " + data);
            }, function (error) {
                console.log("ERROR USER: " + error.err);
            });
            this.navCtrl.push(TabsPage);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Бүртгэл амжилтгүй боллоо!',
                duration: 3000,
                position: 'top',
                cssClass: 'toast-message'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Component({
        selector: 'page-register',
        templateUrl: 'register.html'
    }),
    __metadata("design:paramtypes", [NavController, Lessondata, ToastController, Platform])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.js.map