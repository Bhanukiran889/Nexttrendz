import {useContext, useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => {
  const {cartList} = useContext(CartContext)

  const totalAmount = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)

  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handlePaymentChange = event => {
    setPaymentMethod(event.target.value)
  }

  const handleConfirmOrder = () => {
    if (paymentMethod === 'cod') {
      setOrderPlaced(true)
    }
  }

  return (
    <div className="cart-summary-container">
      <p className="order-total-label">
        Order Total:{' '}
        <span className="order-total-value">Rs {totalAmount}/-</span>
      </p>
      <p className="total-items">{totalItems} items in cart</p>

      <Popup
        modal
        trigger={
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            {orderPlaced ? (
              <p className="success-message">
                Your order has been placed successfully
              </p>
            ) : (
              <>
                <h2 className="payment-heading">Select Payment Method</h2>
                <div className="payment-options">
                  <label>
                    <input type="radio" value="card" disabled /> Card
                  </label>
                  <label>
                    <input type="radio" value="netbanking" disabled /> Net
                    Banking
                  </label>
                  <label>
                    <input type="radio" value="upi" disabled /> UPI
                  </label>
                  <label>
                    <input type="radio" value="wallet" disabled /> Wallet
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={handlePaymentChange}
                    />{' '}
                    Cash on Delivery
                  </label>
                </div>

                <div className="order-summary">
                  Items: {totalItems}, Total: Rs {totalAmount}/-
                </div>

                <button
                  type="button"
                  className="confirm-order-btn"
                  disabled={paymentMethod !== 'cod'}
                  onClick={handleConfirmOrder}
                >
                  Confirm Order
                </button>
              </>
            )}
            <button type="button" className="close-btn" onClick={close}>
              Close
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default CartSummary
