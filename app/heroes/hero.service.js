System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Hero, PostMethod, GetMethod, injector, postMethod, getMethod, HeroService, HEROES, heroesPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //import {map} from 'rxjs/operator/map';
            Hero = (function () {
                function Hero(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
            PostMethod = (function () {
                function PostMethod(http) {
                    this.http = http;
                }
                PostMethod.prototype.request = function (url) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    //headers.append('myheader','haha');
                    var value = "qqqqqqqq";
                    return this.http.request(new http_1.Request({
                        method: http_1.RequestMethod.Post,
                        url: url,
                        search: '',
                        headers: headers,
                        body: JSON.stringify({ phoneNum: '18566070441', nodeID: "66519772-81a0-45b0-a704-978905cb140b" })
                    }));
                };
                PostMethod = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostMethod);
                return PostMethod;
            }());
            GetMethod = (function () {
                function GetMethod(http) {
                    this.http = http;
                }
                GetMethod.prototype.request = function (url) {
                    return this.http.request(new http_1.Request({
                        method: http_1.RequestMethod.Get,
                        url: url,
                        search: '',
                    }));
                };
                GetMethod = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GetMethod);
                return GetMethod;
            }());
            injector = core_1.Injector.resolveAndCreate([http_1.HTTP_PROVIDERS, PostMethod, GetMethod]);
            postMethod = injector.get(PostMethod);
            getMethod = injector.get(GetMethod);
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                }
                HeroService.prototype.getHeroes = function () {
                    return heroesPromise;
                };
                HeroService.prototype.getHero = function (id) {
                    return heroesPromise
                        .then(function (heroes) { return heroes.filter(function (h) { return h.id === +id; })[0]; });
                };
                HeroService.prototype.getValues = function () {
                    return getMethod.request('http://localhost:1337')
                        .subscribe(function (data) { return console.log(data.json()); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
                };
                HeroService.prototype.postValues = function () {
                    return postMethod.request('http://localhost:10007/SM/SM')
                        .subscribe(function (data) { return console.log(data.json()); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
            HEROES = [
                new Hero(11, 'Mr. Nice'),
                new Hero(12, 'Narco'),
                new Hero(13, 'Bombasto'),
                new Hero(14, 'Celeritas'),
                new Hero(15, 'Magneta'),
                new Hero(16, 'RubberMan')
            ];
            heroesPromise = Promise.resolve(HEROES);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero.service.js.map