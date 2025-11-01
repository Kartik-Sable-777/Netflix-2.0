# 🎬 Netflix 2.0 — MERN Full Stack App

A **full-stack Netflix Clone** built using the **MERN** stack (MongoDB, Express, React, Node.js), featuring **user authentication**, **TMDB movie browsing**, and a sleek **responsive UI**.  
Both frontend and backend are hosted on **Render** with environment-based configuration and secure **CORS** setup.

---

## 🚀 Features

- 🔐 **User Authentication** (Login / Signup)  
- 🎥 **Browse Movies** — Now Playing, Popular, Top Rated & Upcoming (via TMDB API)  
- 🔎 **Search Movies** by name  
- 🎞️ **Dynamic Trailers** & Movie Details  
- 🧠 **Redux Toolkit** for state management  
- ⚙️ **Environment-based API Configuration**  
- 🌐 **Hosted on Render** (Frontend + Backend)  
- 📱 **Fully Responsive Design**

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React (CRA), Redux Toolkit, Axios, TailwindCSS |
| Backend | Node.js, Express.js, MongoDB |
| API | TMDB (The Movie Database) |
| Hosting | Render (Frontend + Backend) |

---

## ⚙️ Environment Variables

### 🔸 Frontend (`.env`)
```bash
REACT_APP_API_BASE_URL=https://netflix-2-0-87q1.onrender.com
```
### 🔸 Backend ('.env')
```bash
PORT=your port
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=https://Your-front-end-url.onrender.com
```

---

## 🖥️ Local Setup
### 1. Clone the repository
```bash
git clone https://github.com/your-username/netflix-2.0.git
cd netflix-2.0
```

### 2. Install dependencies
Frontend:
```bash
cd frontend
npm install
npm start
```
Backend:
```bash
cd backend
npm install
npm start
```

## 🌍 Deployment

Both frontend and backend are deployed on Render:

Frontend: https://netflix-2-0-ui.onrender.com

Backend: https://netflix-2-0-87q1.onrender.com

## 🧠 API Reference

Movie data is fetched using TMDB API
📚 Docs: https://developer.themoviedb.org/reference/intro/getting-started

## 📸 Screenshots
<img width="1919" height="927" alt="Screenshot 2025-11-01 095218" src="https://github.com/user-attachments/assets/e89beb46-c031-40a9-b273-b53f25e04692" /><br><br>
<img width="1919" height="928" alt="Screenshot 2025-11-01 095502" src="https://github.com/user-attachments/assets/86bea700-c75b-46c5-97bf-e31b805c3043" /><br><br>
<img width="1914" height="924" alt="Screenshot 2025-11-01 095540" src="https://github.com/user-attachments/assets/4006cd10-357a-4e43-a595-534ecd5b45b1" />




