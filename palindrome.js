var prompt=require('prompt-sync')();
var utility=require('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js');
/**
 * @description : returns the prime numbers in the given range 
 * @param : string
 */
function palindrome()
{
    var string=prompt("Enter String : ");
    utility.palindrome(string=string.toLowerCase().replace(/ /g,""));
}
palindrome()      