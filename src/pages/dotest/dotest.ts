import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ViewController, App } from 'ionic-angular';
import { SQLite } from "ionic-native";
import { Lessondata } from '../../providers/lessondata';
import { TimerComponent } from './timer';
import { ResultPage } from '../result-page/result-page';
/*
  Generated class for the Dotest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dotest',
  templateUrl: 'dotest.html'
})
export class DotestPage {

	public answerkey: any = 0;
	public anarray: any = [];
	public arr: any = {};
	public database: SQLite;
	public tabBarElement: any;
	public testid: number;
	
	@ViewChild(TimerComponent) timer: TimerComponent;
	// @ViewChild('erdemtab') tabRef: Tabs;
	constructor(public navCtrl: NavController, public params: NavParams, public tutsService: Lessondata, 
		public viewCtrl: ViewController, public appCtrl: App) {
		this.testid = this.params.get('id');
		this.tutsService.gettests(this.testid);
		this.tutsService.getonlytest(this.testid);
		
		
		
		// this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
		// this.tabBarElement.style.display = 'none';


		// this.platform.ready().then(() => {
			
		// });

	}
	
	ionViewDidLoad() {
		console.log('Hello DotestPage Page');
		this.timer.startTimer();

	}

	jsonparse(json){
		var parsed = JSON.parse(json);
		return parsed.question;
	}
	answers(json){
		var parsed = JSON.parse(json);
		return (parsed.answers);
	}
	slideOptions = {
		loop: false,
		pager: true,
		noSwipingClass: 'swiper-no-swiping',
		paginationClickable: true,
		paginationBulletRender: function (index, className) {
	        return '<span class="swiper-no-swiping ' + className + '">' + (index + 1) + '</span>';
	    }
	};
	public colors = false;
	@ViewChild('qSlider') slider: Slides;
	
	onSlideChanged() {
	    let currentIndex = this.slider.getActiveIndex();
	    console.log("Current index is", currentIndex);
	    this.answerkey = currentIndex;
	}
	slidePrev(){
		this.slider.slidePrev();
	}
	slideNext(){
		this.slider.slideNext();
	}

	colorchanged(i){
		console.log(this.colors[i]);
	}

	selectanswer(answer, correct){
		var parsed = JSON.parse(correct);
		
		if(answer == parsed.correctanswer){
			console.log( parsed.onoo.match(/\d/g) );
			var onoo = parsed.onoo.match(/\d/g);
			if(onoo == null) {
				onoo = 0;
			}

			// console.log(parseInt(onoo));
			
			this.arr[this.answerkey] = parseInt(onoo);

			// console.log(this.arr);

			// console.log(anarray.length);
			// this.database = new SQLite();
	  //       this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
	  //          console.log('database is opened');
	  //          this.database.executeSql("INSERT INTO mytest (test_id, test_score, userid) VALUES (?, ?, ?)", 
		 //        [
		 //            this.params.get('id'),
		 //            onoo, 
		 //            1

		 //        ]).then((data) => {
		 //            console.log("inserted data: " + data);
		 //        }, (error) => {
			// 	    console.log("error: " + error);
			// 	});

	  //       }, (error) => {
	  //           console.log("ERROR: ", error);
	  //       });
		    	
			
		}
	}

	gotoresult(title, variant) {
			this.database = new SQLite();
	     	this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
	     	console.log('database is opened');
				this.database.executeSql("INSERT INTO mytest1 (test_id, test_score, title, variant, userid) VALUES (?, ?, ?, ?, ?)", 
		        [
		            this.testid,
		            this.arr, 
		            title,
		            variant,
		            1

		        ]).then((data) => {
		            console.log("inserted data: " + data);
		        }, (error) => {
				    console.log("error: " + error);
				});

			}, (error) => {
	            console.log("ERROR: ", error);
	        });

		this.viewCtrl.dismiss();
      	this.appCtrl.getRootNav().push(ResultPage, {
      		data: this.arr
      	});
	}




}






















