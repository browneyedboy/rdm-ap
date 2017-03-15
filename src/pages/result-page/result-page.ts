import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';

/*
  Generated class for the ResultPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-result-page',
  templateUrl: 'result-page.html'
})
export class ResultPage {
	onoo: any;
  constructor(public navCtrl: NavController, public params: NavParams, public tutsService: Lessondata) {}

  ionViewDidLoad() {
    console.log('Hello ResultPagePage Page');
    
    var sum = 0;
    var data = this.params.get('data');
    console.log(data);
    for (var i in data) {
    	sum += parseFloat(data[i])
    }
    console.log(sum);
    this.onoo = sum;
    this.tutsService.getprofessionals(sum);

  }
  // function(array, valueField){
  //   var sum = 0;
  //   for(var i=0, len=array.length; i<len; i++)
  //       sum += parseFloat(array[i][valueField])
  //   return sum;
  // }

}
