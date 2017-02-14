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
  constructor(public http: Http) {
    console.log('Hello Lessondata Provider');
  }
  load(){

  	this.http.get('http://127.0.0.1:8000/get/naturalscience').map(
    res => res.json()).subscribe(data => {
        this.natural = data;
    },
    err => {
        console.log("Oops!");
    });

    this.http.get('http://127.0.0.1:8000/get/socialscience').map(
    res => res.json()).subscribe(data => {
        this.social = data;
    },
    err => {
        console.log("Oops!");
    }); 

  }
  loadtest(){

  	this.http.get('http://127.0.0.1:8000/get/naturalsciencetest').map(
    res => res.json()).subscribe(data => {
        this.natural = data;
        // console.log( JSON.stringify( data ) );
    },
    err => {
        console.log("Oops!");
    });

    this.http.get('http://127.0.0.1:8000/get/socialsciencetest').map(
    res => res.json()).subscribe(data => {
        this.social = data;
    },
    err => {
        console.log("Oops!");
    }); 
  	
  }
  gettests(id){
    this.http.get('http://127.0.0.1:8000/get/gettests/'+id).map(
    res => res.json()).subscribe(data => {
        this.tests = data;
    },
    err => {
        console.log("Oops!");
    });
  }
  getlesson(id, typid){
    this.http.get('http://127.0.0.1:8000/get/getlesson/'+id+'/'+typid).map(
    res => res.json()).subscribe(data => {
        this.lessons = data;
    },
    err => {
        console.log("Oops!");
    });
  }

  gettopicone(typeid, topicid){
    this.http.get('http://127.0.0.1:8000/get/gettopicone/'+typeid+'/'+topicid).map(
    res => res.json()).subscribe(data => {
        this.topic = data;
    },
    err => {
        this.topic = 0;
    });
  }
}

















