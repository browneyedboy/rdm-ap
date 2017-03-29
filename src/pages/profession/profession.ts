import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import { AboutprofPage } from '../aboutprof/aboutprof';
/*
  Generated class for the Profession page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profession',
  templateUrl: 'profession.html'
})
export class ProfessionPage {

  constructor(public navCtrl: NavController, public tutsService: Lessondata) {}

  ionViewDidLoad() {
    console.log('Hello ProfessionPage Page');
    this.tutsService.getprofessionals(1000);
  }
  aboutprof(data){
      this.navCtrl.push(AboutprofPage, {
        data: data
      });
  }
}
