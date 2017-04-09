import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SQLite } from "ionic-native";
import { ProfbyonoPage } from "../profbyono/profbyono";

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
		                    console.log(data.rows.item(i));
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
  goono(onoo){
  	this.navCtrl.push(ProfbyonoPage, {
  		onoo: onoo
  	});
  }

}
