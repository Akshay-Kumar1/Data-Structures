var fs = require('fs')
var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')

function hashing()
{
    var data = fs.readFileSync('hashing.txt')
    data = data.toString().split(' ')
    var number = prompt('Enter a number to search : ')
    utility.hashing(data,number)
}
hashing()