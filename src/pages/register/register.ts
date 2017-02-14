import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
import { Validators, FormGroup, FormControl } from '@angular/forms';



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

    
  }
}
