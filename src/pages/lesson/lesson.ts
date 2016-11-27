import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TopicPage } from '../topic/topic';
/*
  Generated class for the Lesson page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html'
})
export class LessonPage {
  public show = false;
  public show1 = false;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LessonPage Page');
  }
  showtopics(){
  	this.show = !this.show;
  }
  gototopic(){
  	this.navCtrl.push(TopicPage);
  }

}
