import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Starttest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-starttest',
  templateUrl: 'starttest.html'
})
export class StarttestPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello StarttestPage Page');
  }

}
