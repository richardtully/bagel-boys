const assertEquals = require('./../test-framework.js')
const Basket = require('./../src/basket.js')

let basket, item, result

// Try to add one item to basket

// Setup
basket = new Basket()
item = 'ham and cheese bagel'

// Execute
result = basket.add(item)

// Verify
console.log(assertEquals(item, result))