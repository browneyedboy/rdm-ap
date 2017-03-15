var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';
import { ProfilePage } from '../pages/profile/profile';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TestPage } from '../pages/test/test';
import { MaterialPage } from '../pages/material/material';
// import { HomePage } from '../pages/home/home'; // login ordog home
import { IntroPage } from '../pages/intro/intro';
var MyApp = (function () {
    // private menu: MenuController;
    // pages: Array<{title: string, component: any}>;
    function MyApp(platform, menu) {
        this.platform = platform;
        this.rootPage = IntroPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
            var db = new SQLite();
            db.openDatabase({
                name: "data.db",
                location: "default"
            }).then(function () {
                // test offline datas
                db.executeSql("CREATE TABLE IF NOT EXISTS mytest1 (id INTEGER PRIMARY KEY AUTOINCREMENT, test_id INTEGER, test_score INTEGER, title TEXT, variant TEXT, userid INTEGER)", {}).then(function (data) {
                    console.log("MY test TABLE CREATED: ", data);
                }, function (error) {
                    console.error("Unable to execute sql", error);
                });
                // test results 
                // db.executeSql("CREATE TABLE IF NOT EXISTS results (id INTEGER PRIMARY KEY AUTOINCREMENT, test_id INTEGER, test_item_id INTEGER, score INTEGER)", {}).then((data) => {
                //         console.log("TABLE CREATED results table: ", data);
                //     }, (error) => {
                //         console.error("Unable to execute results table sql", error);
                //     });
                // user results 
                db.executeSql("CREATE TABLE IF NOT EXISTS userprofile (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone INTEGER, email TEXT, image TEXT, password TEXT)", {}).then(function (data) {
                    console.log("TABLE CREATED userprofile table: ", data);
                }, function (error) {
                    console.error("Unable to execute userprofile table sql", error);
                });
            }, function (error) {
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
    MyApp.prototype.openmyaccount = function () {
        this.nav.push(ProfilePage);
        // this.nav.setRoot(ProfilePage, { tabIndex: ProfilePage });
    };
    MyApp.prototype.opentutorial = function () {
        this.nav.push(TutorialPage);
    };
    MyApp.prototype.opentest = function () {
        this.nav.push(TestPage);
    };
    MyApp.prototype.openmaterial = function () {
        this.nav.push(MaterialPage);
    };
    MyApp.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, MenuController])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map