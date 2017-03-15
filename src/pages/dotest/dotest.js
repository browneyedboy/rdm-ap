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
import { NavController, NavParams, Slides, ViewController, App } from 'ionic-angular';
import { SQLite } from "ionic-native";
import { Lessondata } from '../../providers/lessondata';
import { TimerComponent } from './timer';
import { ResultPage } from '../result-page/result-page';
/*
  Generated class for the Dotest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DotestPage = (function () {
    // @ViewChild('erdemtab') tabRef: Tabs;
    function DotestPage(navCtrl, params, tutsService, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.tutsService = tutsService;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.variant = 'G';
        this.year = '0000';
        this.score = '000';
        this.title = 'G';
        this.answerkey = 0;
        this.anarray = [];
        this.arr = {};
        this.slideOptions = {
            loop: false,
            pager: true,
            paginationClickable: true,
            paginationBulletRender: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        };
        this.colors = false;
        this.testid = this.params.get('id');
        this.tutsService.gettests(this.testid);
        this.tutsService.getonlytest(this.testid);
        // this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
        // this.tabBarElement.style.display = 'none';
        // this.platform.ready().then(() => {
        // });
    }
    DotestPage.prototype.ionViewDidLoad = function () {
        console.log('Hello DotestPage Page');
        this.timer.startTimer();
    };
    DotestPage.prototype.jsonparse = function (json) {
        var parsed = JSON.parse(json);
        return parsed.question;
    };
    DotestPage.prototype.answers = function (json) {
        var parsed = JSON.parse(json);
        return (parsed.answers);
    };
    DotestPage.prototype.onSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        console.log("Current index is", currentIndex);
        this.answerkey = currentIndex;
    };
    DotestPage.prototype.slidePrev = function () {
        this.slider.slidePrev();
    };
    DotestPage.prototype.slideNext = function () {
        this.slider.slideNext();
    };
    DotestPage.prototype.colorchanged = function (i) {
        console.log(this.colors[i]);
    };
    DotestPage.prototype.selectanswer = function (answer, correct) {
        var parsed = JSON.parse(correct);
        if (answer == parsed.correctanswer) {
            console.log(parsed.onoo.match(/\d/g));
            var onoo = parsed.onoo.match(/\d/g);
            if (onoo == null) {
                onoo = 0;
            }
            // console.log(parseInt(onoo));
            this.arr[this.answerkey] = parseInt(onoo);
        }
    };
    DotestPage.prototype.gotoresult = function () {
        var _this = this;
        this.database = new SQLite();
        this.database.openDatabase({ name: "data.db", location: "default" }).then(function () {
            console.log('database is opened');
            _this.database.executeSql("INSERT INTO mytest1 (test_id, test_score, title, variant, userid) VALUES (?, ?, ?, ?, ?)", [
                _this.testid,
                _this.arr,
                _this.title,
                _this.variant,
                1
            ]).then(function (data) {
                console.log("inserted data: " + data);
            }, function (error) {
                console.log("error: " + error);
            });
        }, function (error) {
            console.log("ERROR: ", error);
        });
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(ResultPage, {
            data: this.arr
        });
    };
    return DotestPage;
}());
__decorate([
    ViewChild(TimerComponent),
    __metadata("design:type", TimerComponent)
], DotestPage.prototype, "timer", void 0);
__decorate([
    ViewChild('qSlider'),
    __metadata("design:type", Slides)
], DotestPage.prototype, "slider", void 0);
DotestPage = __decorate([
    Component({
        selector: 'page-dotest',
        templateUrl: 'dotest.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Lessondata,
        ViewController, App])
], DotestPage);
export { DotestPage };
//# sourceMappingURL=dotest.js.map