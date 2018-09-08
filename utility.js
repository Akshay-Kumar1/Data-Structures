"use strict";
var fs = require('fs')
var prompt = require('prompt-sync')()
module.exports={
    
searchList : function(array,toSearch)
{
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}
class LinkedList 
{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    add(element)
    {
        // creates a new node
        var node = new Node(element);
     
        // to store current node
        var current;
     
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else 
        {
            current = this.head;
     
            // iterate to the end of the
            // list
            while (current.next) 
            {
                current = current.next;
            }
     
            // add node
            current.next = node;
        }
        this.size++;
    }
    size_of_list()
    {
        console.log(this.size);
    }
    insertAt(element, index)
    {
    if (index > 0 && index > this.size)
        return false;
    else 
    {
        // creates a new node
        var node = new Node(element);
        var curr, prev;
 
        curr = this.head;
 
        // add the element to the
        // first index
        if (index == 0) 
        {
            node.next = head;
            this.head = node;
        } 
        else 
        {
            curr = this.head;
            var it = 0;
 
            // iterate over the list to find
            // the position to insert
            while (it < index) 
            {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}
removeFrom(index)
{
    if (index > 0 && index > this.size)
        return -1;
    else 
    {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;
 
        // deleting first element
        if (index === 0) 
        {
            this.head = curr.next;
        } 
        else 
        {
            // iterate over the list to the
            // position to removce an element
            while (it < index) 
            {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // remove the element
            prev.next = curr.next;
        }
        this.size--;
 
        // return the remove element
        return curr.element;
    }
}
removeElement(element)
{
    var current = this.head;
    var prev = null;
 
    // iterate over the list
    while (current != null)
     {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.element === element) 
        {
            if (prev == null) 
            {
                this.head = current.next;
            } 
            else 
            {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}
indexOf(element)
{
    var count = 0;
    var current = this.head;
 
    // iterate over the list
    while (current != null) 
    {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
 
    // not found
    return -1;
}
isEmpty()
{
    return this.size == 0;
}
// prints the list items
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) 
    {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
    return str
}
}
var ll = new LinkedList();

for (var i = 0; i<array.length; i++) 
{
    ll.add(array[i])
}
    if(ll.indexOf(toSearch)==-1)
    {
    ll.add(toSearch)
    
    }
    else
    {
    ll.removeElement(toSearch)
    }
    var res = ll.printList()
    fs.writeFile("/home/adminsitrator/Documents/akshayk/Data Structures Programs/main/fileint.txt",res)
    
},
searchInt : function(array,toSearch)
{
    array.sort(function(a,b){return a-b})
    console.log(array)
    this.searchList(array,toSearch)

},
primeNumbers : function(range)
{
    

},
paranthesis : function(string)
{
    
class Stack {
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
    push(element)
    {
        // push element into the items
        this.items.push(element);
    }
pop()
{
    
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}

printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    console.log(str);
}
}
// creating object for stack class
var stack = new Stack();
var count0=0,count1=0

for(var i=0 ; i<string.length;i++)
{
    if(string[i]=='(')
    {
        stack.push('(')
        count0++
    }
    else if (string[i]==')')
    {
        stack.pop()
        count1++
    }
    
}
if(count0==count1)
{
    console.log('Balanced')
}
else
{
    console.log('Not Balanced')
}

},
cashCounter: function(persons)
    {
        
class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
           
enqueue(element)
{
    this.items.push(element)
}

dequeue()
{
    if(this.isEmpty())
    return "underflow"
    this.items.shift()
}

front()
{
    if(this.isEmpty())
    return "Queue is empty"
    return this.items[0]
}
size()
{
    return this.items.length
}
isEmpty()
{
    return this.items.length==0;
}
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    console.log(str);
}
}
        var queue=new Queue();
        var balance=2000;

        for(var i=0; i<persons; i++)
        {
            queue.enqueue(i);
        }
        while(queue.size())
        {
            console.log("1.Withdraw") 
            console.log('2.Deposit')
            var choice = prompt('Press 1 to Withdraw & 2 to Deposit : ')
            switch(parseInt(choice))
            {
            case 1 :
                console.log('Current Balance : ' +balance)
                var withdraw=prompt("Enter the amount : ");
                if(balance>=withdraw)
                {
                    balance=parseInt(balance)-parseInt(withdraw);
                    console.log("Available Balanace : " + balance + " Rs");
                }
                else
                {
                    console.log("Balance Low");
                    process.exit();
                }
                break;
            case 2 : 
                console.log('Current Balance : ' +balance)
                var deposit=prompt("Enter the amount to be deposited: ");
                balance=parseInt(balance) + parseInt(deposit);
                console.log("Available Balanace= " + balance + " Rs");
                break;

            default : 
                console.log("No Such Choice");
                break;
            }
            queue.dequeue();
        }
        
    },
palindrome : function(string)
{
    function Deque()
{
 this.stac=new Array();
 this.popback=function(){
  return this.stac.pop();
 }
 this.pushback=function(item){
  this.stac.push(item);
 }
 this.popfront=function(){
  return this.stac.shift();
 }
 this.pushfront=function(item){
  this.stac.unshift(item);
 }
 this.printDeque=function()
 {
     var str = "";
     for(var i = 0; i < this.stac.length; i++)
         str += this.stac[i] +" ";
     return str;
 }
 this.len = function()
 {
     return this.stac.length
 }
}
var deque=new Deque();
for(var i=0;i<string.length;i++)
{
    deque.pushfront(string[i]);
}
var count=0
while(deque.len())
{
    if(deque.popfront()===deque.popback())
    {
        count++
    }
} 
if(count==Math.floor(string.length/2))
console.log('Entered String is a Palindrome')
else
console.log('Entered String is not a Palindrome')

},
}