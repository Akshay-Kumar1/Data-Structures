"use strict"
var prompt = require('prompt-sync')()
var utility = require ('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')
function paranthesis()
{   
    var string = prompt('Enter the expression : ');
    utility.paranthesis(string)
}
paranthesis()

