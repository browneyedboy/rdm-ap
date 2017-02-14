import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';
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
	title: string;
	constructor(public navCtrl: NavController, public params: NavParams, public tutsService: Lessondata) {}

	ionViewDidLoad() {
		console.log('Hello TopicPage Page');
		this.title = this.params.get('title');
		this.tutsService.gettopicone( this.params.get('typeid'), this.params.get('topic') );
	}

}
