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
    console.log('login do');
    if (currentUser) {
      console.log('current user');
        Parse.User.logOut().then(() => {
          currentUser = Parse.User.current();  // this will now be null
        });
    }
    
    var this_ref = this;
    Parse.User.logIn(this_ref.login.value.email, this_ref.login.value.password, {
      success: function(user) {
        // Do stuff after successful login.
        console.log('logged in');
        this_ref.navCtrl.push(TabsPage);

        console.log('logged in 2');
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        console.log('fail');
        console.log(error);

      }
    });
    
  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }
}
