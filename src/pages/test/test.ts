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
  public show: any = 0; 
  public activated: any = 1;
  constructor(public navCtrl: NavController, public tutsService: Lessondata) {
    
  }

  ionViewDidLoad() {
    this.tutsService.loadtest();
    if(this.tutsService.userloggedin.activate == 1){
      this.activated = 0;
    }else{
      this.activated = 1;
    }
  }
  showtests(id){
    if(this.show == id){
      this.show = 0;
    }else{
      this.show = id;
    }
  }
  gotostarttest(test){
  	this.navCtrl.push(StarttestPage, {
        test: test
    });
  }
}
