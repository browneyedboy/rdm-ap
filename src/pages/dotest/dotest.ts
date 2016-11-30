import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
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

	constructor(public navCtrl: NavController) {}
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
	ionViewDidLoad() {
		console.log('Hello DotestPage Page');
	}

	colorchanged(){
		console.log(this.colors);
	}


}
