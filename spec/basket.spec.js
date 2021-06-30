const assertEquals = require('./../test-framework.js')
const Basket = require('./../src/basket.js')

let basket, item, result, result2, expectedResult, size, thirditem

// Try to add one item to basket

// Setup
basket = new Basket()
item = 'ham and cheese bagel'

// Execute
result = basket.add(item)

// Verify
console.log(assertEquals(item, result))

// -------------- Test 2 ----------------

// try to add two items to basket 
console.log('\nTest to add two items: ')
// Setup
basket = new Basket()
item = 'ham and cheese bagel'
seconditem = 'tuna bagel'
expectedResult = 2

// Execute
basket.add(item)
basket.add(seconditem)
result = basket.items.length

// Verify
console.log(assertEquals(result, expectedResult))

// ----------------- Test 3 --------------------------

// try to remove an item by name
console.log('\nTest to remove an item: ')
// Setup
basket = new Basket()

item = 'ham and cheese bagel'
seconditem = 'tuna bagel'

basket.add(item)
basket.add(seconditem)

expectedResult = 1

// Execute
basket.remove('tuna bagel')
result = basket.items.length

// Verify
console.log(assertEquals(result, expectedResult))


// --------------------- check to see if the basket is full when trying to add an item

// try to add two items to basket 
console.log('\nTest to see if basket is full: ')
// Setup
basket = new Basket(2)
item = 'ham and cheese bagel'
seconditem = 'tuna bagel'
thirditem = 'plain bagel'
expectedResult = 2

// Execute
basket.add(item)
basket.add(seconditem)
basket.add(thirditem)
result = basket.items.length

// Verify
console.log(result)
console.log(assertEquals(result, expectedResult))




