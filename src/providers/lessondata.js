var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Lessondata provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Lessondata = (function () {
    function Lessondata(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.natural = [];
        this.social = [];
        this.tests = [];
        this.lessons = [];
        this.topic = [];
        this.universities = [];
        this.banners = [];
        this.userregistered = 0;
        this.userloggedin = 0;
        this.profs = [];
        this.testdata = [];
        console.log('Hello Lessondata Provider');
    }
    Lessondata.prototype.load = function () {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/get/naturalscience').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.natural = data;
        }, function (err) {
            console.log("Oops!");
        });
    };
    Lessondata.prototype.loadtest = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Ачаалж байна...'
        });
        loading.present();
        this.http.get('http://erdem12.mongoliajourney.com/get/naturalsciencetest').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.natural = data;
            loading.dismiss();
            // console.log( JSON.stringify( data ) );
        }, function (err) {
            console.log("Oops!");
            loading.dismiss();
        });
        this.http.get('http://erdem12.mongoliajourney.com/get/socialsciencetest').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.social = data;
        }, function (err) {
            console.log("Oops!");
        });
    };
    Lessondata.prototype.gettests = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Ачаалж байна...'
        });
        loading.present();
        this.http.get('http://erdem12.mongoliajourney.com/get/gettests/' + id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.tests = data;
            loading.dismiss();
        }, function (err) {
            console.log("Oops!");
            loading.dismiss();
        });
    };
    Lessondata.prototype.getlesson = function (id, typid) {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/get/getlesson/' + id + '/' + typid).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.lessons = data;
        }, function (err) {
            console.log("Oops!");
        });
    };
    Lessondata.prototype.gettopicone = function (typeid, topicid) {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/get/gettopicone/' + typeid + '/' + topicid).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.topic = data;
        }, function (err) {
            _this.topic = 0;
        });
    };
    Lessondata.prototype.getuniversities = function () {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/get/getuniversities').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.universities = data;
        }, function (err) {
            _this.topic = 0;
        });
    };
    Lessondata.prototype.banner = function () {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/get/banners').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.banners = data;
        }, function (err) {
            _this.banners = 0;
        });
    };
    Lessondata.prototype.registeruser = function (phone, email) {
        var _this = this;
        // this.http.get('http://erdem12.mongoliajourney.com/post/register/'+phone+'/'+email+'/'appkeycode)
        this.http.get('http://erdem12.mongoliajourney.com/post/register/' + phone + '/' + email).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.userregistered = data;
        }, function (err) {
            _this.userregistered = 0;
        });
    };
    Lessondata.prototype.loginuser = function (email, password) {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/post/login/' + email + '/' + password).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.userloggedin = data;
        }, function (err) {
            _this.userloggedin = 0;
        });
    };
    Lessondata.prototype.getprofessionals = function (sum) {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/get/profbyscore/' + sum).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.profs = data;
        }, function (err) {
            _this.profs = 0;
        });
    };
    Lessondata.prototype.getonlytest = function (id) {
        var _this = this;
        this.http.get('http://erdem12.mongoliajourney.com/get/onlytest/' + id).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.testdata = data;
        }, function (err) {
            _this.testdata = 0;
        });
    };
    return Lessondata;
}());
Lessondata = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, LoadingController])
], Lessondata);
export { Lessondata };
//# sourceMappingURL=lessondata.js.map