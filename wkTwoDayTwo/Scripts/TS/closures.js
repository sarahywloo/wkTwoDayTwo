'use strict';
var buttons = document.getElementsByTagName('button');
addClickHandlers(buttons);
/*
function addClickHandlers(buttons) {
    for (var i = 0; i < buttons.length; i++) {
    //runs through all the buttons to see what happens when each button is clicked but doesnt tell it to do anything before it is clicked
        buttons[i].addEventListener('click', function () {
        //value of i is not given to function until after it is clicked
            alert('You clicked button ' + i);
        });
    }
}
//Javascript auto-implements the closure here. So you only get alerts for 'You clicked button 3 ' no matter which button you clicked.

*/
//Fixing the closure
//Telling the button what to do before it is even clicked
function addClickHandlers(buttons) {
    for (var i = 0; i < buttons.length; i++) {
        addClickHandler(buttons[i], i);
    }
}
function addClickHandler(button, index) {
    button.addEventListener('click', function () {
        //alert('You clicked button ' + index);
        alert('You clicked button ' + button.innerHTML);
    });
}
