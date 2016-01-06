'use strict';
/*
let counter = {
    _count: 0,
    addCount: function () {
        this._count++;
        console.log(this._count);
    }
};

//counter.addCount(); // writes 1
//counter.addCount(); // writes 2
//counter.addCount(); // writes 3

window.setInterval(counter.addCount, 1000);
*/
//prints NaN every second
/*
let counter = {
    _count: 0,
    addCount: function () {
        this._count++;
        console.log(`this=${this} and _count=${this._count}`);
    }
};

counter.addCount(); // writes 1
counter.addCount(); // writes 2
counter.addCount(); // writes 3

*/
//the object referred to by "this" is determined at the time a method is invoked
//to fix this, we need to bind the addCount() method to the counter object
/*
let counter = {
    _count: 0,
    toString: function () {
        return 'counter';
    },
    addCount: function () {
        this._count++;
        console.log(`this=${this} and _count=${this._count}`);
    }
};

let test = {
    _count: 5,
    toString: function () {
        return 'test';
    },
}
window.setInterval(counter.addCount.bind(counter), 1000);
window.setInterval(counter.addCount.bind(test), 2000);
*/
var thingA = {
    toString: function () {
        return 'thingA';
    },
    _count: 0
};
var thingB = {
    toString: function () {
        return 'thingB';
    },
    _count: 0
};
var addOne = function () {
    this._count++;
    console.log(this + " has the count " + this._count);
};
addOne.call(thingA); // add one to thingA
addOne.call(thingB); // add one to thingB
addOne.call(thingB); // add one to thingB
/*
function addNumbers (...Numbers: number[]) {

}

//Looks like this in the Javascript
function addNumbers() {
    var Numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Numbers[_i - 0] = arguments[_i];
    }
}
*/
function addNumbers() {
    var result = 0;
    //    var myArray = [];
    //    myArray.forEach(function (item) {
    //    });
    Array.prototype.forEach.call(arguments, function (item) {
        console.log(item);
        result += item;
    });
}
//addNumbers(1, 2, 3, 4);
