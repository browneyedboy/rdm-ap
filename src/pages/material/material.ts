import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import {AboutuniPage} from '../aboutuni/aboutuni';
/*
   ih surguuliud
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
  	this.navCtrl.push(AboutuniPage, {
      data: uni
    });
  }

}
