import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Topic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html'
})
export class TopicPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TopicPage Page');
  }

}
