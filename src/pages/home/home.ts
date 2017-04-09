import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Lessondata } from '../../providers/lessondata';

import { RegisterPage } from '../register/register';
import { ForgotpassPage } from '../forgotpass/forgotpass';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login: FormGroup;
  public userloggedin: any;
  constructor(public navCtrl: NavController, public tutsService: Lessondata, public toastCtrl: ToastController) {
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }
  logindo(){
    console.log('login do');

    this.tutsService.loginuser(this.login.value.email, this.login.value.password).then(
      data => {
          if(data) {
              this.navCtrl.push(TabsPage);
          }else{
            

            let toast = this.toastCtrl.create({
                message: 'Нэвтэрч чадсангүй! Нууг үг, имэйл хаягаа дахин шалгана уу!',
                duration: 3000,
                position: 'top',
                cssClass: 'toast-message'
            });

            toast.onDidDismiss(() => {
                console.log('Dismissed toast');
            });

            toast.present();

          }
      }
    );
    
  }
  register(){
  	this.navCtrl.push(RegisterPage);
  }
  forgotpass(){
    this.navCtrl.push(ForgotpassPage);
  }
  godemo(){
    this.navCtrl.push(TabsPage);
  }
}
