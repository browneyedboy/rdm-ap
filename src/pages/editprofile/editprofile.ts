import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite } from "ionic-native";
// import { FormGroup } from '@angular/forms';
/*
  Generated class for the Editprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
	// edituser: FormGroup;
	public database: SQLite;
  public name: any;
  public phone: any;
  public email: any;
  public image: any;
    constructor(public navCtrl: NavController) {
    	
    }

    ionViewDidLoad() {
    	console.log('Hello EditprofilePage Page');
    // 	this.platform.ready().then(() => {
    // 		let db = new SQLite();
    // 		db.openDatabase({
    //             name: "data.db",
    //             location: "default"
    //         }).then(() => {

		  //   // 	this.database.executeSql("SELECT * FROM userprofile LIMIT 1", []).then((data) => {
		  //   //   	if(data.rows.length > 0) {
				//   //         for(var i = 0; i < data.rows.length; i++) {
				//   //             // this.userid = data.rows.item(i).id;
				//   //             this.name = data.rows.item(i).name;
				//   //             this.phone = data.rows.item(i).phone;
				//   //             this.email = data.rows.item(i).email;
				//   //             this.image = data.rows.item(i).image;
				//   //             // this.password = data.rows.item(i).password;
				//   //         }
				//   //     }
				      
				//   // }, (error) => {
				//   //     console.log("ERROR: " + error);
				//   // });
				// });
    //         });

    }
    editsave(){

    }

}
