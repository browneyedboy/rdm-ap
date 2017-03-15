import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarttestPage } from '../starttest/starttest';
import { Lessondata } from '../../providers/lessondata';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

	cond: string = "niigem";
    year: any = 0;
  public show: any; 
  constructor(public navCtrl: NavController, public tutsService: Lessondata) {
    
  }

  ionViewDidLoad() {
    this.tutsService.loadtest();
  }
  showtests(id){
    this.show = id;
  }
  gotostarttest(test){
  	this.navCtrl.push(StarttestPage, {
        test: test
    });
  }
}
