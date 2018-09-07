"use strict";
var prompt = require('prompt-sync')()
var utility = require ('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')
function primeNumbers()
{   
    var range = prompt('Enter the range : ');
    utility.primeNumbers(range)
}
primeNumbers()
