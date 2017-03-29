import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import { StarttestPage } from '../starttest/starttest';
/*
  Generated class for the Bytype page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bytype',
  templateUrl: 'bytype.html'
})
export class BytypePage {
	public testid: number;

  constructor(public navCtrl: NavController, public params: NavParams, public tutsService: Lessondata) {
  	this.testid = this.params.get('id');
  }

  ionViewDidLoad() {
    console.log('Hello BytypePage Page');
    this.tutsService.bytypeid(this.testid);
  }
  gotostarttest(test){
  	this.navCtrl.push(StarttestPage, {
        test: test
    });
  }
}
