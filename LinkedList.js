class LinkedList {
    constructor(data){
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    printList(){
        const array = []
        let currentNode = this.head
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    lookup(index){
        let currentNode = this.head
        for(let i = 0;i < index;i++){
            currentNode = currentNode.next
        }
        return currentNode
    }

    insert(index, value){
        const newNode = {
            value: value,
            next: null
        }
        let currentNode = this.lookup(index - 1)
        const nextNode = currentNode.next
        currentNode.next = newNode
        newNode.next = nextNode
        this.length++
        return this
    }

    delete(index){
        let currentNode = this.lookup(index - 1)
        let nextNode = currentNode.next
        currentNode.next = nextNode.next
        console.log(currentNode, nextNode.next)
        this.length--
        return this
    }
}


const myLinkedList = new LinkedList("Software Engineer")
myLinkedList.append("Frontend engineer")
myLinkedList.prepend("web developer")
myLinkedList.append("backend engineer")
myLinkedList.insert(2, "developer")
myLinkedList.lookup(2)
myLinkedList.delete(2)
myLinkedList.printList()
