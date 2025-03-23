📦 EMS - Setup Instructions
==============================

🖥️ System Requirements:
- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB Atlas cluster (or local MongoDB)

------------------------------
🔧 1. Clone the Repository:
------------------------------
git clone <your-repo-url>
cd ems

------------------------------
📁 2. Project Structure:
------------------------------
ems/
├── api/                 # Backend server (GraphQL + MongoDB)
│   ├── config/          # MongoDB connection
│   ├── models/          # Mongoose model
│   ├── schema/          # GraphQL typeDefs and resolvers
│   ├── server.js        # Main server entry point
│   └── .env             # MongoDB URI config (must create manually)
├── client/              # Frontend React App
│   ├── public/
│   ├── src/
│   │   ├── pages/       # React pages: Create, List, Details
│   │   ├── components/  # Navbar etc.
│   │   ├── ApolloClient.js
│   │   ├── App.js
│   │   └── styles.css
│   ├── .babelrc
│   ├── webpack.config.js
│   └── .env (optional)
├── package.json
└── README.md

-----------------------------------
🔐 3. Create `.env` file inside `/api`
-----------------------------------
Create a file: `api/.env`

Add the following:

------------------------------------------------
📦 4. Install Dependencies (Root & Client Folder)
------------------------------------------------
npm install        # From root folder (installs concurrently, etc.)
cd client
npm install        # Install React + Apollo Client dependencies
cd ..

----------------------------------
🚀 5. Run the App (Dev Environment)
----------------------------------
npm run dev

- API server:   http://localhost:5000/graphql
- React app:    http://localhost:3000

✅ Includes Hot Reloading.

----------------------------------
📄 6. Scripts
----------------------------------
"server"  - Runs API server (port 5000)
"client"  - Runs React App (port 3000)
"dev"     - Runs both (concurrently)

------------------------------------------
🧪 7. Test GraphQL Queries in Apollo Studio
------------------------------------------
Open: http://localhost:5000/graphql


--------------------------------------------------
📝 Author: <Rasheeduddin Mohammed>
📅 Assignment-2 | EMS - MERN Stack (GraphQL Edition)
--------------------------------------------------
 TO START EMS  (IN TERMINAL)
--------------------------------------------------

npm run dev

--------------------------------------------------
# 🚀 Employee Management System (EMS)

## 📖 Overview
Employee Management System (**EMS**) is a **full-stack MERN application** that allows users to manage employees, including:
- **Adding**, **Viewing**, **Searching**, and **Filtering** employee records.
- **RESTful API** built with **Express.js & MongoDB**.
- **React.js frontend** for an interactive user experience.

---

## 🛠 **Technologies Used**
### **Frontend:**
- ⚛ **React.js** (Functional Components, Hooks)
- 🌍 **Axios** (for API calls)
- 🎨 **CSS** (for styling)

### **Backend:**
- 🟢 **Node.js**
- 🚀 **Express.js**
- 🗄 **MongoDB** (Mongoose ORM)
- 🔗 **CORS** (for cross-origin requests)
- 📜 **dotenv** (for environment variables)

### **Development & Deployment:**
- 🛠 **Git & GitHub** (Version control)
- 🔥 **Postman** (API testing)
- 🌍 **GitHub Pages / Vercel / Heroku** (For hosting)