(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var service_scraper_1 = require("service-scraper");
function domscrap(o, cb) {
    function attachall(url, prefix) {
        try {
            var tobescraped = new service_scraper_1.default(url);
            cb(false, tobescraped, false);
        }
        catch (err) {
            cb("can't scrape this url", false, err);
        }
    }
    if (o.url && o.prefix) {
        attachall(o.url, o.prefix);
    }
    else if (o.prefix) {
        var input_1 = document.getElementById(o.prefix + '_input');
        input_1.addEventListener('input', function () {
            if (input_1.value && input_1.value.length && input_1.value.length > 3) {
                console.log('input changed to: ', input_1.value);
                attachall(input_1.value, o.prefix);
            }
        });
    }
    else {
        throw Error("domscrap conf error");
    }
}
window.domscrap = domscrap;


},{"service-scraper":2}],2:[function(require,module,exports){
"use strict";
var scrape = (function () {
    function scrape(url) {
        var base_params;
        if (url.split('//').length < 2) {
            throw Error('please give a valid url');
        }
        else {
            var uid = void 0;
            var provider = url.split('//')[1].split('/')[0];
            var query = url.split(provider)[1];
            switch (provider) {
                case "facebook.com":
                    throw Error('todo');
                case "www.youtube.com":
                    uid = query.split('v=')[1].split('&')[0];
                    base_params = {
                        uid: uid,
                        provider: 'youtube',
                        img: 'http://img.youtube.com/vi/' + uid + '/default.jpg',
                        hqimg: 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg',
                        mqimg: 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg',
                        sdimg: 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg',
                        maximg: 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg',
                        url: url
                    };
                    break;
                case "youtube.com":
                    uid = query.split('v=')[1].split('&')[0];
                    base_params = {
                        uid: uid,
                        provider: 'youtube',
                        img: 'http://img.youtube.com/vi/' + uid + '/default.jpg',
                        hqimg: 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg',
                        mqimg: 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg',
                        sdimg: 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg',
                        maximg: 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg',
                        url: url
                    };
                    break;
                default:
                    throw Error('provider is not supported');
            }
        }
        this.base_params = base_params;
    }
    return scrape;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = scrape;


},{}]},{},[1]);
