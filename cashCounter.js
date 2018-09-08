var prompt=require('prompt-sync')();
var utility=require('/home/adminsitrator/Documents/akshayk/Data Structures Programs/utility/utility.js');

function cashCounter()
{
    var persons=prompt("Number of Customers : ");
    utility.cashCounter(persons);
}
cashCounter()