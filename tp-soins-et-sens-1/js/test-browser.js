'use strict';

console.log(window.navigator);
var browser = window.navigator.userAgent;
console.log('Navigateur : '+browser);
var version = window.navigator.appVersion;
console.log('Version : '+version);
var msie = browser.indexOf('MSIE ');
console.log(msie);
