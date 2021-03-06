const assertEquals = require('./../test-framework.js')
const Basket = require('./../src/basket.js')

let basket, item, result, result2, expectedResult, size, thirditem
let price = ''

// Try to add one item to basket

// Setup
basket = new Basket()
item = 'Ham and Cheese Bagel'

// Execute
result = basket.add(item)

// Verify
console.log(assertEquals(item, result))

// -------------- Test 2 ----------------

// try to add two items to basket 
console.log('\nTest to add two items: ')
// Setup
basket = new Basket()
item = 'Ham and Cheese Bagel'
seconditem = 'Tuna Bagel'
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

item = 'Ham and Cheese Bagel'
seconditem = 'Tuna Bagel'

basket.add(item)
basket.add(seconditem)

expectedResult = 1

// Execute
basket.remove('Tuna Bagel')
result = basket.items.length

// Verify
console.log(assertEquals(result, expectedResult))


// --------------------- check to see if the basket is full when trying to add an item

// try to add two items to basket 
console.log('\nTest to see if basket is full: ')
// Setup
basket = new Basket(2)
item = 'Ham and Cheese Bagel'
seconditem = 'Tuna Bagel'
thirditem = 'Plain Bagel'
expectedResult = 2

// Execute
basket.add(item)
basket.add(seconditem)
basket.add(thirditem)
result = basket.items.length

// Verify
console.log(result)
console.log(assertEquals(result, expectedResult))




// --------------------- check to see if we can change the size

// try to add two items to basket 
console.log('\nTest to see if we can change to size 123: ')
// Setup

expectedResult = 123

// Execute
basket = new Basket(123)
result = basket.size

// Verify
console.log(result)
console.log(assertEquals(result, expectedResult))


// --------------------- Can we remove an item if its not there

// try to add two items to basket 
console.log('\nCan we remove an item if its not there: ')

// Setup
basket = new Basket(123)
expectedResult = 0

// Execute
result = basket.remove('Chocolate Bagel')

// Verify
console.log(assertEquals(result, expectedResult))


// --------------------- Test to see if basket will add an item if we already have that item

// try to add two items to basket 
console.log('\nCan we add more than one of the same item: ')

// Setup
basket = new Basket(123)
basket.add('Chicken Bagel')
expectedResult = 0

// Execute
result = basket.add('Chicken Bagel')

// Verify
console.log(assertEquals(result, expectedResult))

// --------------------- Test to see the price of each item before I add it to my basket -----


console.log ('\n Test to see the price of a bagel before adding it')
// Setup

basket = new Basket(123, price)

// Execute 

result = basket.add('Ham Bagel', '??2.50')
console.log(price)

// Verify 

console.log(result)

