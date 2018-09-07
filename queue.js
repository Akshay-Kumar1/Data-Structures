"use strict"
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

printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
}
var queue = new Queue()
queue.enqueue(100)
console.log(queue.printQueue());
//queue.dequeue()
//console.log(queue.printQueue());
