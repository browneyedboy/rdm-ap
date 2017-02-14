import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { SearchPage } from '../search/search';
import { TestPage } from '../test/test';
import { MypointPage } from '../mypoint/mypoint';
import {RealsearchPage} from '../realsearch/realsearch';


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
  tab1Root: any = SearchPage;
  tab2Root: any = TutorialPage;
  tab3Root: any = RealsearchPage;
  tab4Root: any = TestPage;
  tab5Root: any = MypointPage;

  constructor(public navCtrl: NavController) {}

}


