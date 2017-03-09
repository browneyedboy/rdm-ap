import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Forgotpass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html'
})
export class ForgotpassPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ForgotpassPage Page');
  }

}
