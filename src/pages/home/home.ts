import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

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
    // var currentUser = Parse.User.current();
    console.log('login do');
    this.navCtrl.push(TabsPage);
    
    
  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }
}
