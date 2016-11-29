import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import 'rxjs/Rx';

import { ListingModel } from './search.model';
import { ListingService } from './search.service';


@Component({
  selector: 'search-page',
  templateUrl: 'search.html',
})

export class SearchPage {
  search: ListingModel = new ListingModel();
  loading: any;

  constructor(
    public nav: NavController,
    public searchService: ListingService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }


  ionViewDidLoad() {
    this.loading.present();
    this.searchService
      .getData()
      .then(data => {
        this.search.banner_image = data.banner_image;
        this.search.banner_title = data.banner_title;
        this.search.populars = data.populars;
        this.search.categories = data.categories;
        this.loading.dismiss();
      });
  }


  goToFeed(category: any) {
    
  }

}
