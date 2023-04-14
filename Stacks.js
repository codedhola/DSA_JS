class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

// STACK IMPLEMENTATION USING LINKEDLIST
class Stacks {
    constructor(){
        this.top = null
        this.bottom = null
        this.length  = 0
    }

    peak(){
        return this.top
    }

    push(value){
        const newNode = new Node(value)
        if(this.length == 0){
            this.top = newNode
            this.bottom = newNode
        }else {
            const nodeHolder = this.top
            this.top = newNode
            this.top.next = nodeHolder
        }
        this.length++
        return this
    }

    pop(){
        if(!this.top){
            return null
        }
        if(this.top === this.bottom){
            this.bottom = null
        }
        const nodeHolder = this.top
        this.top = this.top.next
        this.length--
        return this
    }
}

class ArrayStacks {
    constructor(){
        this.array = []
    }

    peak(){
        return this.array[this.array.length - 1]
    }

    push(value){
        this.array.push(value)
        return this
    }

    pop(){
        this.array.pop()
        return this
    }
}


const myStack = new Stacks()
const myArrayStack = new ArrayStacks()

console.log(myStack.push("Discord"))
console.log(myStack.push("Udemy"))
console.log(myStack.push("google"))
console.log(myStack.peak())

console.log(myArrayStack.push("Discord"))
console.log(myArrayStack.push("Udemy"))
console.log(myArrayStack.push("google"))
console.log(myArrayStack.peak())

//Discord
//Udemy
//google