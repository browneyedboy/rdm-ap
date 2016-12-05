import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as Parse from 'parse';



/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  register: FormGroup;
  main_page: { component: any };

  constructor(public navCtrl: NavController) {
    this.main_page = { component: SearchPage };

    this.register = new FormGroup({
      phone: new FormControl('', Validators.required),
      email: new FormControl('john@example.com', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doRegister(){

    console.log(this.register.value);
    console.log(this.register.value.phone);

    var user = new Parse.User();
    user.set("username", this.register.value.email);
    user.set("email", this.register.value.email);
    user.set("password", this.register.value.password);

    user.signUp(null, {
      success: function(user) {
         this.navCtrl.push(SearchPage);
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        console.log("Failed")
      }
    });
  }
}
