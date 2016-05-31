import {Injectable, Injector} from 'angular2/core';
import {Http, Response, URLSearchParams, HTTP_PROVIDERS, Headers, RequestOptions, RequestMethod, Request} from 'angular2/http';
import {Observable}     from 'rxjs/Rx';
//import {map} from 'rxjs/operator/map';

export class Hero {	
  constructor(public id: number, public name: string) { }
}

@Injectable()
class PostMethod {
  constructor(public http:Http) {}

  request(url:string) {
  	var headers = new Headers(); 
  	headers.append('Content-Type', 'application/json');
    //headers.append('myheader','haha');
    var value = "qqqqqqqq";
    return this.http.request(new Request({
      method: RequestMethod.Post,
      url: url,
      search: '',
      headers: headers,
      body: JSON.stringify({ phoneNum: '18566070441', nodeID: "66519772-81a0-45b0-a704-978905cb140b" })
    }));
  }
}

@Injectable()
class GetMethod {
  constructor(public http: Http) { }

  request(url: string) {
    return this.http.request(new Request({
      method: RequestMethod.Get,
      url: url,
      search: '',
    }));
  }
}
var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, PostMethod,GetMethod]);
var postMethod = injector.get(PostMethod);
var getMethod = injector.get(GetMethod);

@Injectable()
export class HeroService {
	constructor(private http: Http) { }

  getHeroes() { 
  	return heroesPromise; 
  }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.filter(h => h.id === +id)[0]);
  }

  getValues(){
    return getMethod.request('http://localhost:1337')
      .subscribe(
        data => console.log(data.json()),
        err => console.log(err),
        () => console.log('Complete')
      );
  }

  postValues(){
    return postMethod.request('http://localhost:10007/SM/SM')
      .subscribe(
      data => console.log(data.json()),
      err => console.log(err),
      () => console.log('Complete')
      );
  }
}

var HEROES = [
	new Hero(11, 'Mr. Nice'),
	new Hero(12, 'Narco'),
	new Hero(13, 'Bombasto'),
	new Hero(14, 'Celeritas'),
	new Hero(15, 'Magneta'),
	new Hero(16, 'RubberMan')
];

var heroesPromise = Promise.resolve(HEROES);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/