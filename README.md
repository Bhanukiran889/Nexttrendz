# 🛍️ React E-Commerce Cart Application

A simple yet functional e-commerce cart built with **React** that allows users to add products, adjust quantities, view cart summary, and place orders via a payment popup modal.

---

## 🚀 Features

- 🔄 Add, remove, and update cart items
- 🧮 Live calculation of total items and total price
- ➕➖ Quantity adjustment with `+` and `−` buttons
- 🧾 Cart context management using React Context API
- 🧾 Checkout popup modal using **React Popup**
- 💳 Multiple payment methods (only **Cash on Delivery** is enabled)
- ✅ Confirmation and success message after placing order
- 🎯 Fully testable with data-testid attributes

---

## 📁 Folder Structure

src/
├── components/
│ ├── Cart/
│ ├── CartSummary/
│ ├── Navbar/
│ └── ProductItem/
├── context/
│ └── CartContext.js
├── App.js
├── index.js
└── index.css


---

## 🧠 Technologies Used

- ⚛️ React (v17+)
- 🧠 React Context API for global cart state
- 💡 React Popup for modal functionality
- 🎨 CSS3 (custom styling with responsiveness)
- ✅ Testing Library + Jest support

---

## 🛒 Cart Functionality

- Add products to cart from ProductItem component
- Automatically merges items if added multiple times
- Quantity controls:
  - `+` button increases quantity
  - `−` button decreases quantity (removes item if quantity reaches 0)
- Remove button to delete item manually

---

## 💳 Payment Popup

- Triggered from **Cart Summary** using "Checkout" button
- Displays:
  - Payment methods: Card, Net Banking, UPI, Wallet, Cash on Delivery
  - Only **Cash on Delivery** is selectable
  - Order summary: item count + total price
- Confirm Order:
  - Only enabled when Cash on Delivery is selected
  - Displays success message on confirmation

---

## 📦 Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/react-cart-app.git
   cd react-cart-app

--- 

### Install dependencies

```bash
npm install

