import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Dotest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dotest',
  templateUrl: 'dotest.html'
})
export class DotestPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DotestPage Page');
  }

}
