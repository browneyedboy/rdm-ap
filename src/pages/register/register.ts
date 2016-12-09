import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import * as Parse from 'parse';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  register: FormGroup;
  // main_page: { component: any };

  constructor(public navCtrl: NavController) {
    this.register = new FormGroup({
      phone: new FormControl('', Validators.required),
      email: new FormControl('john@example.com', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  doRegister(){

    var currentUser = Parse.User.current();
    if (currentUser) {
        Parse.User.logOut();
    } else {
      var user = new Parse.User();
      user.set("username", this.register.value.email);
      user.set("email", this.register.value.email);
      user.set("password", this.register.value.password);
      user.set("phone", this.register.value.phone);

      var this_ref = this;
      user.signUp(null, {
        success: function(user) {
           this_ref.navCtrl.push(TabsPage);
           // console.log(user);
        },
        error: function(user, error) {
          // console.log(error);
          // Show the error message somewhere and let the user try again.
          // console.log("Failed")
        }
      });
        // show the signup or login page
    }
    
  }
}
