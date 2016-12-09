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
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import * as Parse from 'parse';
export var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.login = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }
    HomePage.prototype.logindo = function () {
        var currentUser = Parse.User.current();
        console.log('login do');
        if (currentUser) {
            console.log('current user');
            Parse.User.logOut().then(function () {
                currentUser = Parse.User.current(); // this will now be null
            });
        }
        Parse.User.logIn(this_ref.login.value.email, this_ref.login.value.password, {
            success: function (user) {
                // Do stuff after successful login.
                console.log('logged in');
                this_ref.navCtrl.push(TabsPage);
                console.log('logged in 2');
            },
            error: function (user, error) {
                // The login failed. Check error to see why.
                console.log('fail');
                console.log(error);
            }
        });
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(RegisterPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map