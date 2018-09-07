"use strict";
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility = require ('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')
function searchInt()
{   
    var data =fs.readFileSync('fileint.txt')
    data = data.toString().toLowerCase().split(' ');
    var toSearch = prompt('Enter the word to search : ');
    utility.searchInt(data,toSearch)
}
searchInt()
