import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { HomePage } from '../home/home';
/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello IntroPage Page');
  }

  skipIntro() {
    // You can skip to main app
    // this.nav.setRoot(TabsNavigationPage);

    // Or you can skip to last slide (login/signup slide)
    this.lastSlide = true;
    this.slider.slideTo(this.slider.length());
  }

  onSlideChanged() {
    // If it's the last slide, then hide the 'Skip' button on the header
    this.lastSlide = this.slider.isEnd();
  }

  login(){
  	this.navCtrl.push(HomePage);
  	// this.navCtrl.setRoot(HomePage);
  }
}
