class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            let currentNode = this.root
            while(true){
                if(currentNode.value > value){
                    // GO LEFT
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode 
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
        return this
    }

    lookup(value){
        if(!this.root){
            return null
        }
        let currentNode = this.root
        while(currentNode){
            if(currentNode.value > value){
                currentNode = currentNode.left
            }else if(currentNode.value < value){
                currentNode = currentNode.right
            }else if(currentNode.value === value){
                return currentNode
            }
        }
        return false
    }
}


const myBST = new BinarySearchTree()
myBST.insert(9)
myBST.insert(4)
myBST.insert(6)
myBST.insert(20)
myBST.insert(170)
myBST.insert(15)    
myBST.insert(1)
console.log(myBST.lookup(105))
// console.log(JSON.stringify(traversal(myBST.root)))
function traversal(node){
    const tree = {value :  node.value}
    tree.left = node.left === null ? null : traversal(node.left)
    tree.right = node.right === null ? null : traversal(node.right)
    return tree
}
