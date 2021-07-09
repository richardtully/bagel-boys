class Basket {
    constructor(size = 3) {
        this.items = []
        this.size = size
        this.price = ''
    }
    add(item){
        //if(this.items.includes(price)){ 
            //console.log('\nThis bagel costs: ' + price)
        }
        if (this.isFull() === true){
            console.log('\nSorry, the basket is full')
            return 0
        } else if (this.isThere(item)) {
            console.log('\nWe already have one of those in the basket')
            return 0
        } 
        else
        this.items.push(item)
        return item
    }
    
    
    remove(item){
        if (this.isThere(item)){
            let index = this.items.indexOf(item);
            // successfully removing an item returns the removed item
            return this.items.splice(index,1)
        } else {
            console.log('Cant remove an item thats not already in the basket')
            // If you try to remove an item that's not there we return 0
            return 0
        }
        
    }

    isFull(){ 
        return this.items.length >= this.size
    }
    isThere(item){
        return this.items.includes(item)
    }
}

module.exports = Basket