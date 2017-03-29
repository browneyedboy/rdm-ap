import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Platform } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import { HomePage } from '../home/home';
/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var window: any;
declare var cordova: any;

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})

export class IntroPage {

  slide_options = {
    pager: true
  };
  lastSlide = false;

  @ViewChild('slider') slider: Slides;

  constructor(public navCtrl: NavController, public tutsService: Lessondata, private platform: Platform) {}

  ionViewDidLoad() {
    console.log('Hello IntroPage Page');
    this.tutsService.banner();
  }

  onSlideChanged() {
    // If it's the last slide, then hide the 'Skip' button on the header
    this.lastSlide = this.slider.isEnd();
  }

  login(){
  	this.navCtrl.push(HomePage);
  	// this.navCtrl.setRoot(HomePage);
  }
  gotolink(url){
    this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
  }
}
