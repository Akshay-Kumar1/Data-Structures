"use strict"
var prompt = require('prompt-sync')()
var utility = require ('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')
/**
 * @description : pushes the ( paranthesis and pops ) paranthesis to check if expression is balanced 
 * @param : string
 */
function paranthesis()
{   
    var string = prompt('Enter the expression : ');
    utility.paranthesis(string)
}
paranthesis()

