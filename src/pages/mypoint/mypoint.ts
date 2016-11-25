import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Mypoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mypoint',
  templateUrl: 'mypoint.html'
})
export class MypointPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MypointPage Page');
  }

}
