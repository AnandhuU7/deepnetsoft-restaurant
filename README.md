# React-Express-Mongo Project

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [How to Use](#how-to-use)
- [Future Enhancements](#future-enhancements)

---

## Introduction
This project is a **DEEPNET-SOFT-RESTAURANT** application for managing menus and menu items. It provides an admin panel to create menus and their associated items. The menu items are dynamically displayed in the "Menu" tab for users.

## Features
1. **Admin Panel**:
   - Admin can create menu.
   - Admin menu items within menus.
2. **Menu Tab**:
   - Displays all available menus.
   - Each menu shows its associated items.
3. **Backend API**:
   - RESTful APIs for managing menus and menu items.
4. **Database Integration**:
   - MongoDB for storing menu and menu item details.

---

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone <https://github.com/AnandhuU7/deepnetsoft-restaurant>
   cd <cd deepnetsoft-restaurant>
   ```
2. Install dependencies:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd client
     npm install
     ```
4. Start the application:
   - Start MongoDB.
   - Run the backend:
     ```bash
     cd backend
     npm start
     ```
   - Run the frontend:
     ```bash
     cd client
     npm start
     ```

---

## Technologies Used

### Frontend:
- React
- React Router
- Axios
- CSS Modules / Styled Components

### Backend:
- Node.js
- Express
- Mongoose (MongoDB)

---


## API Endpoints

### Menu APIs
- **Get All Menus**: `GET /menus`
- **Create Menu**: `POST /menus/create`
  - Body: `{ name: "Menu Name","description": "Desc" }`
- **Get Items for a Menu**: `PUT /menus/:menuId`
- **Create Menu Item**: `POST /menus/menuitem/create`

### Menu Item APIs
- **Get Items for a Menu**: `GET /api/menus/:menuId/items`
- **Add Item to Menu**: `POST /api/menus/:menuId/items`
  - Body: `{ name: "Item Name", price: 10.99 }`
- **Update Item**: `PUT /api/menus/:menuId/items/:itemId`
  - Body: `{ name: "Updated Item Name", price: 12.99 }`
- **Delete Item**: `DELETE /api/menus/:menuId/items/:itemId`

---

## How to Use

### Admin Actions
1. Navigate to the **Admin Panel**.
2. Click the **Create Menu** button to add a new menu.
3. Use the **Add Item** button within a menu to add items.
4. Edit or delete menus and items as needed.

### User View
1. Navigate to the **Menu Tab**.
2. View available menus and their items.

---

## Future Enhancements
1. Add authentication for admin access.
2. Implement drag-and-drop for reordering menu items.
3. Add search functionality to filter menus or items.
4. Integrate a payment gateway for item purchases.

## Deployment

1. Frontend is deployed on Netlify: https://stunning-syrniki-12e94d.netlify.app/
2. Backend is deployed on Render:  https://deepnetsoft-restaurant.onrender.com
## Important:
Backend deployment is free, so run the backend first:
Open Backend URL in your browser to initialize the backend.
Then access the frontend at Frontend URL.