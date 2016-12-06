import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

import * as Parse from 'parse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login: FormGroup;
  constructor(public navCtrl: NavController) {
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }
  logindo(){
    var currentUser = Parse.User.current();
    console.log(currentUser);
    if (currentUser) {
        Parse.User.logOut().then(() => {
          currentUser = Parse.User.current();  // this will now be null
        });
        console.log(currentUser);
    }
    Parse.User.logIn(this.login.value.email, this.login.value.password, {
      success: function(user) {
        // Do stuff after successful login.
        this.navCtrl.push(TabsPage);
        console.log(user);
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        console.log(error);
      }
    });
  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }
}
