import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite } from "ionic-native";
/*
  Generated class for the Mypoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mypoint',
  templateUrl: 'mypoint.html'
})
export class MypointPage {
	public database: SQLite;
	public items: any = [];
  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('Hello MypointPage Page');
    this.platform.ready().then(() => {
    	this.database = new SQLite();
     	this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
	     	console.log('database is opened');

	    	this.database.executeSql("SELECT * FROM mytest3", []).then((data) => {
			      	console.log(data);
			      	
			      	if(data.rows.length > 0) {
		                for(var i = 0; i < data.rows.length; i++) {
		                    this.items.push({title: data.rows.item(i).title, score: data.rows.item(i).test_score, variant: data.rows.item(i).variant, year: data.rows.item(i).year});
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

}
