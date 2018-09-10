var prompt = require('prompt-sync')();

var utility = require('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js');

var re = /[a-zA-Z]/g;
var re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function prime() {

    var num1 = prompt(' Enter 1st Number : ');
    var num2 = prompt(' Enter 2nd Number : ');


    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
        
             utility.checkPrime(num1,num2);

        }
    }
    prime();