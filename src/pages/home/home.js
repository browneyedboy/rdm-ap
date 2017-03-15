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
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Lessondata } from '../../providers/lessondata';
import { RegisterPage } from '../register/register';
import { ForgotpassPage } from '../forgotpass/forgotpass';
import { TabsPage } from '../tabs/tabs';
var HomePage = (function () {
    function HomePage(navCtrl, tutsService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.tutsService = tutsService;
        this.toastCtrl = toastCtrl;
        this.login = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }
    HomePage.prototype.logindo = function () {
        console.log('login do');
        this.tutsService.loginuser(this.login.value.email, this.login.value.password);
        console.log(this.tutsService.userloggedin);
        if (this.tutsService.userloggedin == 1) {
            this.navCtrl.push(TabsPage);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Нэвтэрч чадсангүй! Нууг үг, имэйл хаягаа дахин шалгана уу!',
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
    HomePage.prototype.register = function () {
        this.navCtrl.push(RegisterPage);
    };
    HomePage.prototype.forgotpass = function () {
        this.navCtrl.push(ForgotpassPage);
    };
    HomePage.prototype.godemo = function () {
        this.navCtrl.push(TabsPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, Lessondata, ToastController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map