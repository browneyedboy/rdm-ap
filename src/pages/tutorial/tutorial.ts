import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LessonPage } from '../lesson/lesson';

import { Lessondata } from '../../providers/lessondata';
/*
  Generated class for the Tutorial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  cond: string = "niigem";
  constructor(public navCtrl: NavController, public tutsService: Lessondata) {}

  ionViewDidLoad() {
    this.tutsService.load();
  }
  
  lesson(id, typeid, title){
  	this.navCtrl.push(LessonPage, {
      id: id,
      typeid: typeid,
      title: title
    });
  }

}
