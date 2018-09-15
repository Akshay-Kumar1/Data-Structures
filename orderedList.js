"use strict";
var fs = require('fs')
var prompt = require('prompt-sync')()
var utility = require ('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')
/**@description : search an integer from the text file , pop if it exists , push if it doesn't 
 * @param : data,toSearch
 */
function searchInt()
{   
    var data =fs.readFileSync('fileint.txt')
    data = data.toString().toLowerCase().split(' ');
    var toSearch = prompt('Enter the word to search : ');
    utility.searchInt(data,toSearch)
}
searchInt()
