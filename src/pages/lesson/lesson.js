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
import { NavController, NavParams } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import { TopicPage } from '../topic/topic';
/*
  Generated class for the Lesson page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LessonPage = (function () {
    function LessonPage(navCtrl, params, tutsService) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.tutsService = tutsService;
        this.show = false;
        this.show1 = false;
    }
    LessonPage.prototype.ionViewDidLoad = function () {
        this.tutsService.getlesson(this.params.get('id'), this.params.get('typeid'));
        this.season = this.params.get('id');
        this.title = this.params.get('title');
        console.log('Hello LessonPage Page');
    };
    LessonPage.prototype.showtopics = function (id) {
        this.show = id;
    };
    LessonPage.prototype.gototopic = function (typeid, topic, title) {
        this.navCtrl.push(TopicPage, {
            typeid: typeid,
            topic: topic,
            title: title
        });
    };
    return LessonPage;
}());
LessonPage = __decorate([
    Component({
        selector: 'page-lesson',
        templateUrl: 'lesson.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Lessondata])
], LessonPage);
export { LessonPage };
//# sourceMappingURL=lesson.js.map