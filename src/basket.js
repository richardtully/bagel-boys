class Basket {
    constructor() {
        this.items = []
    }
    add(item){
        this.items.push(item)
        return item
    }
    remove(item){
        let index = this.items.indexOf(item);
        return this.items.splice(index,1)
    }
}

module.exports = Basket