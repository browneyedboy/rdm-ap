import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	public firstname;
	public email;
	public phone;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');

    this.firstname = 'Minii ner';
    this.email = 'amarsanaa@outlook.com';
    this.phone = '89031187';

  }

  edit(){
  	this.navCtrl.push(EditprofilePage);
  }

}
