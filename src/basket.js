class Basket {
    constructor(size) {
        this.items = []
        this.size = size
    }
    add(item){
        if (this.isFull() === true){
            console.log('\nSorry, the basket is full')
            return item
        }
        else{
        this.items.push(item)
        return item
    }
    }
    remove(item){
        let index = this.items.indexOf(item);
        return this.items.splice(index,1)
    }
    isFull(){ 
        return this.items.length >= this.size
    }
}

module.exports = Basket