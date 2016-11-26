import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarttestPage } from '../starttest/starttest';
/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

	cond: string = "niigem";
  public show = false; 
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TestPage Page');
  }
  showtests(){
  	this.show = !this.show;
  }
  gotostarttest(){
  	this.navCtrl.push(StarttestPage);
  }
}
