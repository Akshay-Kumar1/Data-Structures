var fs = require('fs')
var prompt = require('prompt-sync')()
var utility = require('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js')
var data = fs.readFileSync('hashing.txt')
data = data.toString().split(' ')
/**
 * @description :Hashing  Function to search a Number in a slot  
 */
function hashing()
{

    utility.hashing(data)
}
hashing()