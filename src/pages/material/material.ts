import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
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

  constructor(public navCtrl: NavController, public tutsService: Lessondata) {}

  ionViewDidLoad() {
    console.log('Hello MaterialPage Page');
    // getuniversities
    this.tutsService.getuniversities();
  }
  aboutunivsity(uni){
  	console.log(uni);
  }
}
