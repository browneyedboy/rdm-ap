import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfessionPage } from '../profession/profession';
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
	public logo: any;
	public description: any;
	public title: any;
  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello AboutuniPage Page');
    	var data = this.params.get('data');
    	this.logo = data.logo;
    	this.title = data.title;
    	this.description = data.description;
  }
  goprof(){
    this.navCtrl.push(ProfessionPage);
  }
}
