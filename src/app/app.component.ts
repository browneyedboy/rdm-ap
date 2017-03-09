import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite} from 'ionic-native';

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



  constructor(public platform: Platform, menu: MenuController) {
    this.rootPage = IntroPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      let db = new SQLite();
            db.openDatabase({
                name: "data.db",
                location: "default"
            }).then(() => {

                // test offline datas
                // db.executeSql("CREATE TABLE IF NOT EXISTS mytest (id INTEGER PRIMARY KEY AUTOINCREMENT, test_id INTEGER, test_score INTEGER, userid INTEGER)", {}).then((data) => {
                //     console.log("TABLE CREATED: ", data);
                // }, (error) => {
                //     console.error("Unable to execute sql", error);
                // });

                // test results 
                // db.executeSql("CREATE TABLE IF NOT EXISTS results (id INTEGER PRIMARY KEY AUTOINCREMENT, test_id INTEGER, test_item_id INTEGER, score INTEGER)", {}).then((data) => {
                //         console.log("TABLE CREATED results table: ", data);
                //     }, (error) => {
                //         console.error("Unable to execute results table sql", error);
                //     });


                // user results 
                db.executeSql("CREATE TABLE IF NOT EXISTS userprofile (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone INTEGER, email TEXT, image TEXT, password TEXT)", {}).then((data) => {
                    console.log("TABLE CREATED userprofile table: ", data);
                }, (error) => {
                    console.error("Unable to execute userprofile table sql", error);
                });

            }, (error) => {
                console.error("Unable to open database", error);
            });



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













