const {addToCart, removeFromCart, checkout} = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties', () => {
  test('cart should default to empty array', () => {
      expect(Array.isArray(cart.cart))
      .toEqual(true)
      expect(cart.cart.length).toEqual(0)
  })
  test('Total should default to 0', () => {
      expect(cart.total).toEqual(0)
  })
})

describe('Cart Methods', () => {
  
afterEach(() => {
    cart.cart = []
    cart.total = 0
})

})
