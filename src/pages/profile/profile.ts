import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Parse from 'parse';
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
  	var currentUser = Parse.User.current();
  	console.log(currentUser.id);
    console.log('Hello ProfilePage Page');

	// var query = new Parse.Query(Parse.User);
	// query.equalTo("objectId", currentUser.id);  // find all the women
	// query.find({
	//   success: function(user) {
	//     	console.log(user.username);
	//   }
	// });
	var this_ref = this;
	Parse.User.current().fetch().then(function (user) {
	    console.log(user.get('email') );
	    console.log(user.get('firstname') );
	    console.log(user.get('lastname') );
	    this_ref.firstname = user.get('firstname');
	    this_ref.email = user.get('email');
	    this_ref.phone = user.get('phone');
	});

  }

  edit(){
  	this.navCtrl.push(EditprofilePage);
  }

}
