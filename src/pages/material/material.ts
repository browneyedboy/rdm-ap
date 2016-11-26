import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Material page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-material',
  templateUrl: 'material.html'
})
export class MaterialPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MaterialPage Page');
  }
  cond: string = "niigem";
}
