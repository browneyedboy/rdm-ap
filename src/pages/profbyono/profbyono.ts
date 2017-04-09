import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';

/*
  Generated class for the Profbyono page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profbyono',
  templateUrl: 'profbyono.html'
})
export class ProfbyonoPage {
	public onoo: any;
  constructor(public navCtrl: NavController, public params: NavParams, public tutsService: Lessondata) {}

  ionViewDidLoad() {
    console.log('Hello ResultPagePage Page');

    var ono = this.params.get('onoo');
    this.onoo = ono;
    this.tutsService.getprofessionals(ono);

  }

}
