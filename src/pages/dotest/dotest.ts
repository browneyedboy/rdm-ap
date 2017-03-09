import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import { TimerComponent } from './timer';

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
	public test :any;
	public time : number;
	@ViewChild(TimerComponent) timer: TimerComponent;

	constructor(public navCtrl: NavController, public params: NavParams, public tutsService: Lessondata) {
		this.tutsService.gettests(this.params.get('id'));
		
		this.test = tutsService.tests;
		console.log(this.test);
	}
	
	ionViewDidLoad() {
		console.log('Hello DotestPage Page');
		this.time = 1;
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
		paginationClickable: true,
		paginationBulletRender: function (index, className) {
	        return '<span class="' + className + '">' + (index + 1) + '</span>';
	    }
	};
	public colors = false;
	@ViewChild('qSlider') slider: Slides;
	
	onSlideChanged() {
	    let currentIndex = this.slider.getActiveIndex();
	    console.log("Current index is", currentIndex);
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
			console.log(parsed.onoo.match(/\d/g) );
		}
	}




}






















