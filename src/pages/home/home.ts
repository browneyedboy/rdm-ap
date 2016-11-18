import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // this.navCtrl.setRoot(HomePage);
  }
  logindo(){
  	this.navCtrl.push(TutorialPage);
  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }
}
