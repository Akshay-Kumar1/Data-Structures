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
GetNth(index) 
    {   
        
        var  current = this.head; 
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.data; 
            count++; 
            current = current.next; 
        } 
  
        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */
        return 0; 
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
    //ll.sortList()
    var res = ll.printList()
    fs.writeFile("/home/adminsitrator/Documents/akshayk/Data Structures Programs/main/file.txt",res,function(err){
        if(err)throw err
    })
    
},
searchInt : function(array,toSearch)
{
    array.sort(function(a,b){return a-b})
    console.log(array)
    var re = /[a-zA-Z]/g
    if(toSearch.search(re)==1)
        console.log('not a number')

    else
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
GetNth(index) 
    {   
        
        var  current = this.head; 
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.data; 
            count++; 
            current = current.next; 
        } 
  
        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */
        return 0; 
    }
    sortList() {

        var swap;
        var current = this.head;
        var current1 = current.next;
        var n = this.size;

        for (let i = 0; i < n; i++) {  //sorting the list

            for (let j = 0; j < n - i - 1; j++) {

                if (parseInt(current1.element) < parseInt(current.element)) {

                    swap = current.element;

                    current.element = current1.element;

                    current1.element = swap;

                }

                if (current1.next != null) {

                    current = current1;

                    current1 = current1.next;

                }

            }

            current = this.head;

            current1 = current.next;
        }

        console.log('List sorted');
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
   
   ll.sortList()  //sorting the list
   var res = ll.printList() 
   fs.writeFile("/home/adminsitrator/Documents/akshayk/Data Structures Programs/main/fileint.txt",res,function(err){
       if(err)throw err // writing to file
   })
}
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
    this.items.push(element)  //pushing
}

dequeue()
{
    if(this.isEmpty())
    return "underflow"   //deleting
    this.items.shift()
}

front()
{
    if(this.isEmpty())
    return "Queue is empty" //check if queue is empty
    return this.items[0]
}
size()
{
    return this.items.length  //returns length
}
isEmpty()
{
    return this.items.length==0;    //checks if queue is empty
}
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    console.log(str);
}
}
        var queue=new Queue();  //object creation for queue
        var balance=2000;

        for(var i=0; i<persons; i++)
        {
            queue.enqueue(i);
        }
        while(queue.size())
        {
            console.log("1.Withdraw") 
            console.log('2.Deposit')
            var choice = prompt('Press 1 to Withdraw & 2 to Deposit : ') //take input choice
            switch(parseInt(choice))  
            {
            case 1 :
                console.log('Current Balance : ' +balance)
                var withdraw=prompt("Enter the amount : ");
                if(balance>=withdraw)
                {
                    balance=parseInt(balance)-parseInt(withdraw);
                    console.log("Available Balanace : " + balance + " Rs"); //print available balance
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
                console.log("Available Balanace= " + balance + " Rs"); //print available balance
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
 this.popback=function()
 {
  return this.stac.pop();  //pops the element in the back function
 }
 this.pushback=function(item)
 {
  this.stac.push(item);  //pushes the element to the back function
 }
 this.popfront=function(){
  return this.stac.shift(); //pops the front element
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
    if(deque.popfront()===deque.popback())  //pops both first and last element
    {
        count++     //is both front and back are same , increments count
    }
} 
if(count==Math.floor(string.length/2))
console.log('Entered String is a Palindrome')
else
console.log('Entered String is not a Palindrome')

},

checkPrime : function(min1,max1) { 

    var size = (Math.floor(max1/100) + 1); //size is max number /100
    var range = Math.floor(min1/100);
    var min,max
    let arr1 = [];

    min = min1;

    if(min1 == 0) 
    {

        max = 99;
    }

    else 
    {
    
    max = ((range+1)*100)-1;

    }

    for(let index = range+1 ; index <= size;index++) {

        if( (max-min) < 100 && max <= max1) {
    
            let prime = new Array(); //new array for prime
    
            for(let i = min;i <= max;i++) {
                let count = 0;
                
                for(let j = 1;j <= i;j++) 
                {
                   
        
                    if(i % j == 0) 
                    {
        
                        count++; 
                    }
                    
                }
        
                if(count <= 2) {
        
                    prime.push(i);
            
                }
                
            } 
    
            arr1.push(prime);
    
            if(max1 - max < 100) {

                range = Math.floor(min/100);
    
                min = (min + ((range+1)*100)-min);

                max = max1-1;

            }
        
            else 
            {

                range = Math.floor(min/100);
        
                min = (min + ((range+1)*100)-min);
        
                max = max + 100;
        
            }
    
        }
             
    }
        console.log('\n Prime Numbers in the given range are :')
        console.log(arr1);
    
},

prime : function(min,max) {

    let prime = new Array();
 
    if(min == 0 || min == 1) 
    {
        min = 2;
    }

        for(let i = min;i <= max;i++) {
            let count = 0;
            
            for(let j = 1;j <= i;j++) {
               

                if(i % j == 0) {

                    count++;
                }
                
            }

            if(count <= 2) {

                prime.push(i);
            
            }
            
        }

        return prime;

},

anagrams : function(str1,str2) {

    var arr1 = str1.split('');
    var arr2 = str2.split('');
    var array1 = this.removeSpace(arr1);
    var array2 = this.removeSpace(arr2);

    var res1 = array1.sort();
    var res2 = array2.sort();

    if(res1.length == res2.length) //compare the length 
    {

        var output = this.compare(res1,res2);

        if(output) {
            //console.log('given strings are anagram');
            return true;
        }

        else {
           // console.log('given strings are not anagram');
           return false;
        }

    }

    else {

        //console.log('given strings are not anagram');
        return false;
    }
},
removeSpace : function(array) {

    var newArray = [];

for(let i=0;i<array.length;i++) {

    if(array[i] != ' ') {  //if blank space is not found , push it into new array
        newArray.push(array[i]);
    }

 }

 return newArray;

} ,

compare : function(array1,array2) {

    let count = 0;
    
    for(let i=0;i < array1.length ;i++) {
        
        if(array1[i]==array2[i]) {

            count++
        }
    }

    return (array1.length == count);
},

hashing : function(array)
{
    console.log(array)
    var i;
        var  a10=[],a11=[],a1=[],a2=[],a3=[],a4=[],a5=[],a6=[],a7=[],a8=[],a9=[]
        
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
GetNth(index) 
    {   
        
        var  current = this.head; 
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.data; 
            count++; 
            current = current.next; 
        } 
  
        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */
        return 0; 
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
        var hash = fs.readFileSync('hashing.txt');
        hash = hash.toString().split(" ");
        var arr = Array.from(hash);
        arr.sort(function(a,b){return a-b});
        console.log(arr);
        var list = new LinkedList()
        var val = prompt("Please enter a value to search: ");
    for(var i=0;i<hash.length;i++)
    {
        list.add(hash[i]); //push elements into linkedList
    }
    list.printList();
    var result = list.indexOf(val);
    if(result == -1)
    {
        console.log("Element not found!!"); 
        list.add(val); // if found add to the list
    }
    else
    {
        console.log("Element found!!");       
        list.removeElement(val); //element removal
    }
        console.log(array)
        for(var j =0 ; j<hash.length; j++ )
        {
                    var reminder = parseInt(hash[j]%11);
                    if (reminder == 0 )   // for specific remainders , push into array
                    {
                         a10.push(hash[j])
                    }
                    else if(reminder == 1)
                    {
                        a11.push(hash[j])
                    }
                    else if(reminder == 2)
                    {
                            a1.push(hash[j])
                    }
                    else if(reminder == 3)
                    {
                            a2.push(hash[j])
                    }
                    else if(reminder == 4)
                    {
                            a3.push(hash[j])
                    }
                    else if(reminder == 5)
                    {
                            a4.push(hash[j])
                    }
                    else if(reminder == 6)
                    {
                            a5.push(hash[j])
                    }
                    else if(reminder == 7)
                    {
                            a6.push(hash[j])
                    }
                    else if(reminder == 8)
                    {
                            a7.push(hash[j])
                    }
                    else if(reminder == 9)
                    {
                            a8.push(hash[j])
                    }
                    else if(reminder == 10)
                    {
                            a9.push(hash[j])
                    }
            }
            var array1 = [];
            array1.push(a10); //pushing the numbers into the array
            array1.push(a11);
            array1.push(a1);
            array1.push(a2);
            array1.push(a3);
            array1.push(a4);
            array1.push(a5);
            array1.push(a6);
            array1.push(a7);
            array1.push(a8);
            array1.push(a9);

        for(var k=0;k<array1.length;k++)
        {
            console.log("Slot "+k+" contains "+array1[k].join(',')); //slot setting
        }
        fs.writeFile('hashing2.txt', array.join('-->') , function(){})
    },       

}
