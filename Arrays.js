class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(data){
        this.data[this.length] = data
        this.length++
        return this.data
    }

    pop(){
        let del = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return del
    }

    delete(index){
        let item = this.data[index]
        for(let i = index;i < this.length - 1;i++){
            this.data[i] = this.data[i + 1] 
        }
        delete this.data[this.length - 1]
        this.length--
        return this
    }
    
}


const myArray = new MyArray()

console.log(myArray.push("front-end"))
console.log(myArray.push("back-end"))
console.log(myArray.push("designers"))
console.log(myArray.push("dev ops"))
console.log(myArray.push("engineers"))
console.log(myArray.delete(2))