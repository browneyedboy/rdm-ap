import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ProfilePage } from '../pages/profile/profile';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TestPage } from '../pages/test/test';
import { MaterialPage } from '../pages/material/material';

// import { HomePage } from '../pages/home/home'; // login ordog home

import { IntroPage } from '../pages/intro/intro';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  // @ViewChild('navTabs') public tabs: Tabs;
  rootPage: any;
  // private menu: MenuController;
  // pages: Array<{title: string, component: any}>;



  constructor(public platform: Platform, menu: MenuController,) {
    this.rootPage = IntroPage;
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
  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   // this.nav.setRoot(page.component);
  //   this.nav.push(page.component);

  // }
  openmyaccount(){
        this.nav.push(ProfilePage);
        // this.nav.setRoot(ProfilePage, { tabIndex: ProfilePage });

  }
  opentutorial(){
    this.nav.push(TutorialPage);
  }
  opentest(){
    this.nav.push(TestPage);
  }
  openmaterial(){
    this.nav.push(MaterialPage);
  }
    exitApp(){
         this.platform.exitApp();
      }

}













