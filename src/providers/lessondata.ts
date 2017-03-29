import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the Lessondata provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Lessondata {
	natural: any = [];
	social: any = [];
    tests: any = [];
    lessons: any = [];
    topic: any = [];
    universities: any = [];
    banners: any =[];
    userregistered: any= 0;
    userloggedin: any=0;
    profs: any =[];
    testdata: any = [];
    alltutors: any = [];
    
  constructor(public http: Http, public loadingCtrl: LoadingController) {
    console.log('Hello Lessondata Provider');
  }

  load(){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

  	this.http.get('http://erdem12.mongoliajourney.com/get/naturalscience').map(
    res => res.json()).subscribe(data => {
        this.natural = data;
        loading.dismiss();
    },
    err => {
        console.log("Oops!");
        loading.dismiss();
    });

  }
  loadtest(){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

  	this.http.get('http://erdem12.mongoliajourney.com/get/naturalsciencetest').map(
    res => res.json()).subscribe(data => {
        this.natural = data;
        loading.dismiss();
        // console.log( JSON.stringify( data ) );
    },
    err => {
        console.log("Oops!");
        loading.dismiss();
    });

    this.http.get('http://erdem12.mongoliajourney.com/get/socialsciencetest').map(
    res => res.json()).subscribe(data => {
        this.social = data;
        loading.dismiss();
    },
    err => {
        console.log("Oops!");
        loading.dismiss();
    }); 
  	
  }
  alltests(){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/alltutorial').map(
    res => res.json()).subscribe(data => {
        this.alltutors = data;
        loading.dismiss();
        // console.log( JSON.stringify( data ) );
    },
    err => {
        console.log("Oops!");
    }); 
        
  }
  bytypeid(id){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/testbytype/'+id).map(
    res => res.json()).subscribe(data => {
        this.tests = data;
        loading.dismiss();
    },
    err => {
        console.log("Oops!");
        loading.dismiss();
    });
  }
  gettests(id){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/gettests/'+id).map(
    res => res.json()).subscribe(data => {
        this.tests = data;
        loading.dismiss();
    },
    err => {
        console.log("Oops!");
        loading.dismiss();
    });
  }
  getlesson(id, typid){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/getlesson/'+id+'/'+typid).map(
    res => res.json()).subscribe(data => {
        this.lessons = data;
        loading.dismiss();
    },
    err => {
        console.log("Oops!");
        loading.dismiss();
    });
  }

  gettopicone(typeid, topicid){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/gettopicone/'+typeid+'/'+topicid).map(
    res => res.json()).subscribe(data => {
        this.topic = data;
        loading.dismiss();
    },
    err => {
        this.topic = 0;
        loading.dismiss();
    });
  }

  getuniversities(){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();
    
    this.http.get('http://erdem12.mongoliajourney.com/get/getuniversities').map(
        res => res.json()).subscribe(data => {
        this.universities = data;
        loading.dismiss();
    },
    err => {
        this.topic = 0;
        loading.dismiss();
    });
  }

  banner(){ 
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/banners').map(
        res => res.json()).subscribe(data => {
        this.banners = data;
        loading.dismiss();
    },
    err => {
        this.banners = 0;
        loading.dismiss();
    });
  }
  registeruser(phone, email){
    // this.http.get('http://erdem12.mongoliajourney.com/post/register/'+phone+'/'+email+'/'appkeycode)
    this.http.get('http://erdem12.mongoliajourney.com/post/register/'+phone+'/'+email).map(
    res => res.json()).subscribe(data => {
        this.userregistered = data;
    },
    err => {
        this.userregistered = 0;
    });
  }
  loginuser(email, password){
    this.http.get('http://erdem12.mongoliajourney.com/post/login/'+email+'/'+password).map(
    res => res.json()).subscribe(data => {
        this.userloggedin = data;
    },
    err => {
        this.userloggedin = 0;
    });   
  }
  getprofessionals(sum){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/profbyscore/'+sum).map(
    res => res.json()).subscribe(data => {
        this.profs = data;
        loading.dismiss();
    },
    err => {
        this.profs = 0;
        loading.dismiss();
    }); 
  }
  getonlytest(id){
    let loading = this.loadingCtrl.create({
      content: 'Ачаалж байна...'
    });

    loading.present();

    this.http.get('http://erdem12.mongoliajourney.com/get/onlytest/'+id).map(
    res => res.json()).subscribe(data => {
        this.testdata = data;
        loading.dismiss();
    },
    err => {
        this.testdata = 0;
        loading.dismiss();
    });  
  }

}

















