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
len()
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
