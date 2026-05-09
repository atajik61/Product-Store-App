````md id="rdmfull1"
# Product Store App

A modern and responsive Product Store Application built with React, Redux Toolkit, React Query, and Material UI.

This project demonstrates client-side state management, server-state management, API integration, and responsive UI development using modern React tools and best practices.

Users can browse products, search and filter items, view detailed product information, and manage a shopping cart through a clean and user-friendly interface.

---

# Features

## Product Features

- Fetch products dynamically from API
- Responsive product grid layout
- Product cards with:
  - image
  - title
  - category
  - rating
  - price
- Product details page
- Search products
- Filter by category
- Sort products by price

---

## Shopping Cart Features

- Add products to cart
- Remove products from cart
- Increase quantity
- Decrease quantity
- Clear cart
- Display total items count
- Calculate total cart price
- Cart drawer sidebar

---

## Shared Settings Features

- Dark / Light mode
- Shared global settings using Context API
- State management with useReducer

---

## React Query Features

- Product data fetching from API
- Loading state handling
- Error state handling
- Cached query data
- Proper query key usage

---

# Tools & Libraries Used

- React
- Redux Toolkit
- React Query (@tanstack/react-query)
- Material UI (MUI v9)
- React Router DOM
- DummyJSON API

---

# API Used

DummyJSON Products API:

https://dummyjson.com/products

---

# Project Structure

```txt
src/
│
├── app/
│   └── store.js
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── Toolbar.jsx
│   ├── CartDrawer.jsx
│   └── ...
│
├── context/
│   ├── SettingsContext.jsx
│   └── settingsReducer.js
│
├── features/
│   ├── cart/
│   │   └── cartSlice.js
│   │
│   └── products/
│       ├── productsAPI.js
│       ├── productsSlice.js
│       └── useProducts.js
│
├── pages/
│   └── ProductDetails.jsx
│
└── main.jsx
```

---

# How to Run the Project

## 1. Clone the repository

```bash
git clone <your-repository-url>
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start the development server

```bash
npm run dev
```

---

# State Management

## Context API + useReducer

Used for:

- shared application settings
- theme management
- avoiding prop drilling

---

## Redux Toolkit

Used for:

- shopping cart state
- filters state
- global UI updates

---

## React Query

Used for:

- fetching product data
- caching API responses
- handling loading and error states

---

# UI / User Experience

- Responsive design for mobile, tablet, and desktop
- Clean and modern Material UI interface
- User-friendly product browsing experience
- Organized layout and reusable components

---

# Future Improvements

- Pagination
- Infinite Scroll
- Wishlist feature
- Checkout system
- Authentication
- Product reviews

---

# Author

Built with React, Redux Toolkit, React Query, and Material UI.
````
