class Basket {
    constructor() {
        this.items = []
    }
    add(item){
        this.items.push(item)
        return item
    }

}

module.exports = Basket