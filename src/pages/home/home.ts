import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // this.navCtrl.setRoot(HomePage);
    // rootPage = TabsPage;
  }
  logindo(){
  	this.navCtrl.push(TabsPage);
  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }
}
