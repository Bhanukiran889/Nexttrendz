import React, {useState} from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const addCartItem = product => {
    const existingItem = cartList.find(each => each.id === product.id)

    if (existingItem) {
      setCartList(prevList =>
        prevList.map(each =>
          each.id === product.id
            ? {...each, quantity: each.quantity + product.quantity}
            : each,
        ),
      )
    } else {
      setCartList(prevList => [...prevList, product])
    }
  }

  const removeCartItem = id => {
    setCartList(prevList => prevList.filter(each => each.id !== id))
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  const incrementCartItemQuantity = id => {
    setCartList(prevList =>
      prevList.map(each =>
        each.id === id ? {...each, quantity: each.quantity + 1} : each,
      ),
    )
  }

  const decrementCartItemQuantity = id => {
    const targetItem = cartList.find(each => each.id === id)

    if (targetItem && targetItem.quantity === 1) {
      removeCartItem(id)
    } else {
      setCartList(prevList =>
        prevList.map(each =>
          each.id === id ? {...each, quantity: each.quantity - 1} : each,
        ),
      )
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
