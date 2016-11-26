import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ProfilePage } from '../pages/profile/profile'
import { TutorialPage } from '../pages/tutorial/tutorial'
import { TestPage } from '../pages/test/test'

//import { HomePage } from '../pages/home/home'; // amaraan ordog home
import { IntroPage } from '../pages/intro/intro';

//import { FavoritePage } from '../pages/favorite/favorite';
// import { MypointPage } from '../pages/mypoint/mypoint';
// import { MypointPage } from '../pages/mypoint/mypoint';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // this.pages = [
    //   { title: 'Page One', component: FavoritePage },
    //   { title: 'Page Two', component: MypointPage }
    // ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);

  }
  openmyaccount(){
    this.nav.push(ProfilePage);
  }
  opentutorial(){
    this.nav.push(TutorialPage);
  }
  opentest(){
    this.nav.push(TestPage);
  }
}
