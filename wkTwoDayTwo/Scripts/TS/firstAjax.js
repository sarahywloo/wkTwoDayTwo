'use strict';
var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=Seattle';
var request = new XMLHttpRequest();
//must capitalize GET
request.open('GET', weatherAPI);
//give it an annonymous function
request.addEventListener('load', function (e) {
    //parse data from JSON
    var data = JSON.parse(request.responseText);
    //dump results into the console
    console.dir(data);
});
request.send();
console.log(request.responseText);
