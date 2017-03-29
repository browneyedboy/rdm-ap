import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
import { TestPage } from '../test/test';

@Component({
  selector: 'search-page',
  templateUrl: 'search.html',
})

export class SearchPage {
  

  constructor(public navCtrl: NavController, public tutsService: Lessondata) {
    this.tutsService.alltests();
  }


  ionViewDidLoad() {
    
  }


  goToFeed(id: any) {
    console.log(id);
    this.navCtrl.push(TestPage);
  }

}
