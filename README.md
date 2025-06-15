# Glamora Beauty E-Commerce Platform

_Name:_ Malaika Samreez  
_Roll No:_ F23BDOCS1M01064  
_Section:_ 3-M

---

## Project Overview

Glamora is a modern, user-friendly e-commerce platform specializing in premium cruelty-free and vegan beauty products. The platform is built with React, React Router, and a custom backend (simulated with db.json), providing a seamless shopping experience for both customers and administrators.

---

## Key Features

### 1. _User Authentication & Authorization_

- _Login & Signup:_ Secure authentication for users and admins.
- _Role-Based Access:_ Differentiates between regular users and administrators.
- _Protected Routes:_ Ensures only authenticated users can access certain pages; admins have exclusive access to the admin panel.

### 2. _Product Catalog_

- _Product Listings:_ Displays all available products with images, names, prices, and descriptions.
- _Categories:_ Organizes products by category for easy browsing.
- _Product Details:_ Each product can be viewed with detailed information.

### 3. _Shopping Cart_

- _Add/Remove Items:_ Users can add or remove products from their cart.
- _Update Quantity:_ Adjust quantity for each item in the cart.
- _Cart Summary:_ Displays total price and number of items.
- _Checkout Process:_ Simple form for entering shipping and payment details, with order confirmation.

### 4. _Product Management (Admin)_

- _Add Products:_ Admins can create new products with images, descriptions, prices, categories, and stock levels.
- _Edit & Delete Products:_ Admins can update product details or remove products entirely.
- _Product Listing Management:_ Admins can view, filter, and manage all products in a dedicated panel.

### 5. _Customer Experience_

- _Testimonials:_ Showcases customer reviews and ratings.
- _Features Highlight:_ Displays key selling points (cruelty-free, free shipping, expert advice, loyalty rewards, secure payments, easy returns).

### 6. _Responsive Design_

- _Mobile-Friendly:_ The platform is fully responsive and works well on all device sizes.
- _Modern UI:_ Clean, intuitive interface with animations and visual feedback.

### 7. _Navigation & Layout_

- _Header:_ Includes logo, main navigation links, cart, and user settings.
- _Footer:_ Contains quick links, categories, contact information, and social media links.

---

## Business Constraints

1. _User Roles & Permissions_

   - Only authenticated users can browse, add to cart, and checkout.
   - Only administrators can access the admin panel and manage products.

2. _Data Security_

   - User credentials and authentication state are stored in localStorage (for demo purposes; not suitable for production).
   - Sensitive actions (e.g., product deletion) require confirmation.

3. _Product Management_

   - Product information must be complete and accurate (name, price, description, image, category, stock).
   - Stock levels are tracked and displayed to users.

4. _Checkout Process_

   - Users must provide valid shipping and payment information to complete orders.
   - Orders are simulated; in a real-world scenario, orders would be sent to a backend for processing.

5. _Responsiveness & Accessibility_

   - The platform must be accessible and usable on all devices.
   - UI must be intuitive and visually appealing to encourage sales.

6. _Performance_
   - Product and category data are fetched asynchronously for a smooth user experience.

---

## Technical Stack

- _Frontend:_ React, React Router, Context API (Cart Context), React Icons
- _Styling:_ CSS Modules, Custom CSS, Responsive Design
- _Simulated Backend:_ db.json with RESTful endpoints (using JSON Server)
- _Authentication:_ LocalStorage-based (for demo purposes)

---
