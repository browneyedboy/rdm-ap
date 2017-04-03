import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite } from "ionic-native";
import { EditprofilePage } from '../editprofile/editprofile';
import { Lessondata } from '../../providers/lessondata';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	
  public database: SQLite;
  
  public userid: any;
  public name: any;
  public phone: any;
  public email: any;
  public image: any;
  // password: any;

  constructor(public navCtrl: NavController, private platform: Platform, public tutsService: Lessondata) {
    this.platform.ready().then(() => {
        this.database = new SQLite();
        this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
          console.log('database is opened');
          this.database.executeSql("SELECT * FROM userprofile LIMIT 1", []).then((data) => {
              if(data.rows.length > 0) {
                  for(var i = 0; i < data.rows.length; i++) {
                      this.userid = data.rows.item(i).id;
                      this.name = data.rows.item(i).name;
                      this.phone = data.rows.item(i).phone;
                      this.email = data.rows.item(i).email;
                      this.image = data.rows.item(i).image;
                      // this.password = data.rows.item(i).password;
                  }
              }
              
          }, (error) => {
              console.log("ERROR: " + error);
          });

        }, (error) => {
            console.log("ERROR: ", error);
        });
    });
  }

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
    console.log(this.tutsService.userloggedin);
    console.log('activated?');
    console.log(this.tutsService.userloggedin.activate);
  }

  edit(id){
    console.log(id);
  	this.navCtrl.push(EditprofilePage);
  }

}
