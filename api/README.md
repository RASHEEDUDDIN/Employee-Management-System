# 🚀 Employee Management System - Assignment 2 Setup Instructions

This document explains how to install, configure, and run the **EMS Full Stack Application** that meets all the requirements of Assignment 2.

---

📁 Project Structure:
---------------------
ems/
├── api/                  ← API server using Apollo + Express + MongoDB
│   ├── config/
│   ├── models/
│   ├── schema/
│   ├── server.js
│   └── .env                  ← MongoDB URI config
├── client/               ← React.js UI using Apollo Client + Routing
│   ├── public/
│   └── src/
│       ├── pages/        ← EmployeeList, Create, Details
│       ├── components/   ← Navbar, ApolloClient
│       └── styles.css
├── package.json          ← Main script runner
├
├── README.md / setup.txt ← Instructions

---

🧰 Prerequisites:
-----------------
- ✅ Node.js (v18+ recommended)
- ✅ MongoDB Atlas account (or local MongoDB)
- ✅ Internet connection to install dependencies

---

⚙️ Installation Steps:
-----------------------

1. Clone or extract the project:

2. Install root dependencies:

3. Install frontend dependencies:

4. Create `.env` file inside `api/`:


🚀 Run the Application:
------------------------
npm run dev





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
