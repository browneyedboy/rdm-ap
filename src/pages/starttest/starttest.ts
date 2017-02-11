import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DotestPage } from '../dotest/dotest';
/*
  Generated class for the Starttest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-starttest',
  templateUrl: 'starttest.html'
})
export class StarttestPage {
    public test: any;
    public variant: string;
    public title: string;
    public year: number;
    public time: number;
    public id: number;
    data:any;
  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello StarttestPage Page');
    this.data = this.params.get('test');
    this.variant = this.data['variant'];
    this.title = this.data['title'];
    this.year = this.data['year'];
    this.time = this.data['time'];
    this.id = this.data['id'];

  }
  gotodotest(id){
  	this.navCtrl.push(DotestPage, {
        id: id
    });
  }
}
