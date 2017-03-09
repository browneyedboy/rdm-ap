import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Aboutuni page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-aboutuni',
  templateUrl: 'aboutuni.html'
})
export class AboutuniPage {
	public data: any;
  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello AboutuniPage Page');
    	this.data = this.params.get('data');
    	console.log(this.data);
  }

}
