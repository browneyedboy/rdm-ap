import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SQLite } from "ionic-native";
import { Lessondata } from '../../providers/lessondata';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  register: FormGroup;
  public database: SQLite;
  // main_page: { component: any };

  constructor(public navCtrl: NavController, public tutsService: Lessondata, public toastCtrl: ToastController, private platform: Platform) {
    this.platform.ready().then(() => {
        this.database = new SQLite();
        this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
           console.log('database is opened');
        }, (error) => {
            console.log("ERROR: ", error);
        });
    });

    this.register = new FormGroup({
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  doRegister(){
    this.tutsService.registeruser(this.register.value.phone, this.register.value.email);
    console.log(this.tutsService.userregistered);
    if(this.tutsService.userregistered == 1) {

        this.database.executeSql("INSERT INTO userprofile (name, phone, email, image, password) VALUES (?, ?, ?, ?, ?)", 
          [
            '', 
            this.register.value.phone, 
            this.register.value.email, 
            '',
            ''

          ]).then((data) => {
            console.log("INSERTED USER: " + data);
        }, (error) => {
            console.log("ERROR USER: " + error.err);
        });

        this.navCtrl.push(TabsPage);
    }else{
      
      let toast = this.toastCtrl.create({
          message: 'Бүртгэл амжилтгүй боллоо!',
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
}
