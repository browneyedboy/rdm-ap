import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TutorialPage Page');
  }

}
