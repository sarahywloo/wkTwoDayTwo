'use strict';
//A Promise represents a proxy for a value not necessarily known when the promise is created.
/*
new Promise(function (resolve, reject) {
    //deferred and asynchronous computations go here
});
*/
var httpCall = (function () {
    function httpCall() {
    }
    httpCall.prototype.getData = function (url) {
        console.log('Order of Execution: 2 - Initiates a GET call');
        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.addEventListener('load', function () {
                console.log('Order of Execution: 4 - Data comes back');
                resolve(JSON.parse(request.responseText));
            });
            request.send();
        });
        return promise;
    };
    return httpCall;
})();
console.log('Order of Execution: 1 - Create a new httpCall object ');
//calling the class type httpCall()
var $http = new httpCall();
function success(data) {
    console.log('Order of Execution: 5 - Fulfills the promise by returning the data');
    console.log(data);
}
function failed() {
    console.log('Failed');
}
//returns the promise using .then() on fulfilment
$http.getData('http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=Seattle').then(success, failed);
//OR you can write it as such:
//let promise = $http.getData('http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=Seattle');
//promise.then(success, failed);
console.log('Order of Execution: 3 - Continues to run code logic below');
//Other code logic goes here
