var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritePage } from '../favorite/favorite';
import { TutorialPage } from '../tutorial/tutorial';
import { SearchPage } from '../search/search';
import { TestPage } from '../test/test';
import { MypointPage } from '../mypoint/mypoint';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = FavoritePage;
        this.tab2Root = TutorialPage;
        this.tab3Root = SearchPage;
        this.tab4Root = TestPage;
        this.tab5Root = MypointPage;
    }
    TabsPage = __decorate([
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html'
        }), 
        __metadata('design:paramtypes', [NavController])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map