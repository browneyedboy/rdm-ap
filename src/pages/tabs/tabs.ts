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
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1Root: any = FavoritePage;
  tab2Root: any = TutorialPage;
  tab3Root: any = SearchPage;
  tab4Root: any = TestPage;
  tab5Root: any = MypointPage;

  constructor(public navCtrl: NavController) {}

}


