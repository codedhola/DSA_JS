class HashMaps {
    constructor(size){
        this.data = new Array(size)
    }
    _hash(key){
        let hash = 0
        for(let i = 0;i < key.length;i++){
            hash = (hash + key.charCodeAt(i) *  i) % this.data.length
        }
        return hash
    }

    set(key, value){
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key){
        let address = this._hash(key)
        let currentNode = this.data[address]
        for(let i = 0;i < currentNode.length;i++){
            if(currentNode[i][0] === key){
                return currentNode[i][1]
            }
        }
        return undefined
    }

    keys(){
        let keysArray = []
        for(let i = 0;i < this.data.length;i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }

}


const myHashMap = new HashMaps(5)

