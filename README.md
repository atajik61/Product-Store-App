# Product Store App

A modern and responsive **Product Store Application** built with React and Material UI.

This project demonstrates the use of:

- React Query for API data fetching
- Redux Toolkit for cart and filters state
- Context API + useReducer for shared app settings
- Material UI for responsive UI design

---

# Features

## Product System

- Fetch products from API
- Responsive product grid
- Product cards with image, title, category, rating, and price
- Product details page
- Search products
- Filter by category
- Sort products by price

---

## Shopping Cart (Redux Toolkit)

- Add to cart
- Remove from cart
- Increase quantity
- Decrease quantity
- Clear cart
- Total items count
- Total price calculation
- Cart drawer UI

---

## Shared App Settings (Context API + useReducer)

- Dark / Light mode
- Shared global settings
- Context Provider
- Reducer-based state management

---

## React Query

- API data fetching
- Loading state
- Error handling
- Query caching
- Query keys usage

---

# Technologies Used

- React
- Redux Toolkit
- React Query
- Material UI (MUI v9)
- React Router DOM
- DummyJSON API

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

# API

Products are fetched from:

https://dummyjson.com/products

---

# Installation

## Clone the project

```bash
git clone <your-repository-url>
```

---

## Install dependencies

```bash
npm install
```

---

## Start development server

```bash
npm run dev
```

---

# Main Concepts Demonstrated

## Context API + useReducer

Used for:

- theme settings
- shared app preferences

---

## Redux Toolkit

Used for:

- cart state
- filters state
- global UI updates

---

## React Query

Used for:

- fetching products
- caching server state
- handling loading and error states

---

# Responsive Design

The application is fully responsive using Material UI Grid system.

Breakpoints:

- Mobile
- Tablet
- Desktop

---

# Future Improvements

- Pagination
- Infinite Scroll
- Wishlist
- Checkout page
- Authentication
- Product reviews

---

# Author

Built with React, Redux Toolkit, React Query, and Material UI.
