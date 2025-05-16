The Digital Diner — Mini Restaurant Ordering System
🍽 A MERN + PostgreSQL Web App for Pickup Orders
The Digital Diner is a simple web-based ordering system built to enhance the customer experience of a small restaurant by allowing users to browse menu items and place pickup orders online.

✅ Frontend deployed: https://startling-khapse-7cec0d.netlify.app/

📌 Features
🔎 View Menu – Categorized items: Appetizers, Main Courses, Desserts, Drinks

🛒 Shopping Cart – Add and review items with automatic total calculation

📤 Place Order – Enter Name & Phone Number to place a pickup order

✅ Order Confirmation – See confirmation of order placement

🕒 (Optional) Order History – View past orders by phone number

🛠️ Tech Stack
Layer	Tech
Frontend	React, React Router, Axios, CSS
Backend	Node.js, Express
Databases	MongoDB (Menu), PostgreSQL (Orders)
Hosting	Netlify (Frontend)

🧠 Database Design Decisions
We used MongoDB and PostgreSQL based on the nature of the data:

📚 MongoDB – For Menu Items
Menu items can vary in structure (e.g., custom toppings, variations), making MongoDB ideal.

Schema flexibility helps when categories or descriptions are updated dynamically.

🗃️ PostgreSQL – For Orders & User Data
Orders involve structured relationships: User ↔ Order ↔ Items

Relational queries and data consistency are better handled with PostgreSQL.

📡 API Endpoints (Backend - Node.js & Express)
📍 Note: API runs locally or via backend deployment (see setup). CORS is configured to allow frontend origin.

Menu APIs (MongoDB)
GET /api/menu – Get all menu items by category

GET /api/menu/:id – Get single menu item

Order APIs (PostgreSQL)
POST /api/order – Place an order with name, phone, and cart

GET /api/order/:phone – Fetch all orders for a phone number

🔧 Project Setup
📁 Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/digital-diner.git
cd digital-diner
⚙️ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev   # or npm start
🖥️ Backend Setup (If you wish to test locally)
Note: You only need this for local testing; the live frontend handles API integration already.

bash
Copy code
cd backend
npm install
# Set up .env file with the following:
# MONGO_URI=your_mongodb_connection
# PG_URI=your_postgres_connection
npm run dev
🗂️ Folder Structure
bash
Copy code
├── backend/
│   ├── models/       # Mongoose & Sequelize Models
│   ├── routes/       # API Routes
│   └── server.js     # Main Express App
├── frontend/
│   ├── src/
│   └── index.jsx
├── README.md
🚀 Live Demo
Frontend is hosted on Netlify:
👉 https://your-digital-diner.netlify.app

Backend was designed to run on services like Render or Fly.io, but also works seamlessly when run locally for testing.

✅ Assumptions & Notes
This is a prototype, so payment integration and advanced features (like inventory, coupons, etc.) are out of scope.

Full authentication is optional and not required for order placement.

Order history is based on phone number for simplicity.

Backend has been tested locally and built to scale, but for demo purposes, the focus is on frontend usability and feature coverage.

🧪 Testing APIs
Use tools like Postman or curl to test backend endpoints directly:

bash
Copy code
curl http://localhost:5000/api/menu
curl -X POST http://localhost:5000/api/order \
  -H "Content-Type: application/json" \
  -d '{"name": "Soha", "phone": "1234567890", "cart": [...]}'
  
👩‍💻 Author
Soha – B.Tech CSE | React Developer | MERN Stack Enthusiast
🖥 Portfolio | 🐙 GitHub | 📬 nabisoha58@gmail.com

📝 Final Words
This project was built to demonstrate full-stack capability using MERN + PostgreSQL, prioritizing a clean frontend, solid database logic, and a scalable backend structure.

While the deployed version focuses on frontend features for now, the backend is structured and available for local testing and further deployment.

