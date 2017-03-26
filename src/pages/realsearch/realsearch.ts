import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lessondata } from '../../providers/lessondata';


@Component({
  selector: 'page-realsearch',
  templateUrl: 'realsearch.html'
})
export class RealsearchPage {

	searchQuery: string = '';
  	items: string[];
  	constructor(public navCtrl: NavController, public tutsService: Lessondata) {
	  	// this.initializeItems();
      this.tutsService.alltests();
	}
 

  // initializeItems() {
      // this.items = this.tutsService.alltutors;
      // console.log(this.items);
  // }

  getItems(ev: any, data) {
    // Reset items back to all of the items
    // this.initializeItems();
    
    this.items = data;
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  clicktutors(id){
    
  }
}
