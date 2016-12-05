import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ProfilePage } from '../pages/profile/profile';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TestPage } from '../pages/test/test';
import { MaterialPage } from '../pages/material/material';

// import { FavoritePage } from '../pages/favorite/favorite';
// import { SearchPage } from '../pages/search/search';
// import { MypointPage } from '../pages/mypoint/mypoint';

import { HomePage } from '../pages/home/home'; // amaraan ordog home
// import { TabsPage } from '../pages/tabs/tabs'; 
// import { IntroPage } from '../pages/intro/intro';

//import { FavoritePage } from '../pages/favorite/favorite';
// import { MypointPage } from '../pages/mypoint/mypoint';
// import { MypointPage } from '../pages/mypoint/mypoint';
import * as Parse from 'parse';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  // @ViewChild('navTabs') public tabs: Tabs;
  rootPage: any;
  tabIndex: number;
  // private menu: MenuController;
  // pages: Array<{title: string, component: any}>;



  constructor(public platform: Platform, menu: MenuController,) {
    this.rootPage = HomePage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      Parse.initialize("2IvStdY02wveyZR2s6xP4yV4zRPvvHdBtJ7q6U1l", "9AXw5A8KbBesIJfd9SxqkZgXujqGHiJfCoK31Lip");
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













