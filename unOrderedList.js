"use strict";
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility = require ('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')
/**
 * @description : searches integer from text file , if present pops the number else pushes the number
 */
function searchList()
{   
    var data =fs.readFileSync('file.txt')
    data = data.toString().toLowerCase().split(' ');
    var toSearch = prompt('Enter the word to search : ');
    utility.searchList(data,toSearch)
}
searchList()
