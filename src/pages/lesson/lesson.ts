import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
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
  season: number;
  title: string;
  constructor(public navCtrl: NavController, public params: NavParams, public tutsService: Lessondata) {}

  ionViewDidLoad(){ 
      this.tutsService.getlesson(this.params.get('id'), this.params.get('typeid'));
      this.season = this.params.get('id');
      this.title = this.params.get('title');
      console.log('Hello LessonPage Page');
  }
  showtopics(id){

  	this.show = id;
  }
  gototopic(typeid, topic, title ){
  	this.navCtrl.push(TopicPage, {
          typeid: typeid,
          topic: topic,
          title: title
      });
  }

}
