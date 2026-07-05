# 🚀 Abhishekh Kumar — Premium Full-Stack Developer Portfolio

A production-ready, premium full-stack developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB. Designed with Linear/Vercel-level aesthetic standards.

---

## ✨ Features

- **Dark theme** with purple & cyan gradient accents
- **Animated Hero** with spotlight mouse effect, floating orbit icons, cycling role titles
- **Interactive About** with visual journey timeline & statistic cards  
- **Categorized Skills** section with hover glow & "Currently Learning" badges
- **Alternating Experience** timeline with technology tags
- **Filterable Projects** grid with Case Study detail pages
- **Achievements** section with animated counters
- **GitHub Section** with simulated contribution calendar & pinned repos
- **Contact Form** with canvas-confetti success animation & API backend integration
- **Admin Dashboard** — protected inbox for contact message management
- **Full REST API** backend with JWT auth, rate limiting, Helmet, CORS, and MongoDB Atlas

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 19 + Vite | UI framework & bundler |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Smooth animations |
| Redux Toolkit | Global state management |
| React Router v6 | Client-side routing |
| Lucide React | Clean icon system |
| React Icons (fa6) | Brand social icons |
| Canvas Confetti | Success animations |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database & ODM |
| JWT + bcryptjs | Authentication |
| Helmet | Security headers |
| CORS | Cross-origin policy |
| express-rate-limit | Rate limiting |
| Multer | File uploads |
| express-validator | Input validation |
| Nodemailer | Email notifications |

---

## 📁 Project Structure

```
portfolio/
├── client/                   # React + Vite frontend
│   ├── src/
│   │   ├── components/       # Navbar, Hero, About, Skills, Experience, Projects...
│   │   ├── pages/            # Home, ProjectDetail, AdminLogin, AdminDashboard
│   │   ├── store/            # Redux slices & hooks
│   │   └── data/             # Client-side fallback data
│   └── index.html
│
└── server/                   # Express backend
    └── src/
        ├── models/           # Mongoose schemas
        ├── routes/           # API route handlers
        ├── middleware/        # JWT auth middleware
        ├── config/            # DB connection & seeder
        └── data/             # Initial seed data
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Clone & Install

```bash
# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install
```

### 2. Configure Environment

**Backend** (`server/.env`):
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

**Frontend** (`client/.env`):
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Run Development Servers

```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- Admin Panel: `http://localhost:5173/admin/login`

### 4. Admin Login

Default credentials (change after first login):
- **Username**: `admin`
- **Password**: `adminpassword123`

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd client && npm run build
# Deploy `dist/` folder to Vercel
```

Set environment variable on Vercel:
```
VITE_API_URL=https://your-backend.render.com/api
```

### Backend (Render)
1. Push `server/` directory to GitHub
2. Create a new Web Service on Render
3. Set root directory to `server/`
4. Build command: `npm install && npm run build`
5. Start command: `node dist/index.js`
6. Add all environment variables

---

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/login | ❌ | Admin login |
| GET | /api/projects | ❌ | Get all projects |
| GET | /api/projects/:id | ❌ | Get single project |
| POST | /api/projects | ✅ | Create project |
| PUT | /api/projects/:id | ✅ | Update project |
| DELETE | /api/projects/:id | ✅ | Delete project |
| GET | /api/skills | ❌ | Get all skills |
| GET | /api/experience | ❌ | Get experiences |
| GET | /api/achievements | ❌ | Get achievements |
| POST | /api/messages | ❌ | Submit contact |
| GET | /api/messages | ✅ | Get all messages |
| DELETE | /api/messages/:id | ✅ | Delete message |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#09090B` |
| Surface | `#18181B` |
| Primary | `#7C3AED` (Purple) |
| Secondary | `#06B6D4` (Cyan) |
| Text | `#FAFAFA` |
| Muted Text | `#A1A1AA` |
| Font (Headings) | Sora |
| Font (Body) | Inter |
| Font (Code) | JetBrains Mono |

---

## 🔒 Security

- JWT tokens with 7-day expiry
- bcrypt password hashing (10 rounds)
- Helmet security headers
- CORS configured per environment
- Rate limiting: 150 req/15min globally, 5 contact submissions/hour
- Input validation on all API routes
- Protected admin routes with JWT middleware

---

Built with ❤️ by **Abhishekh Kumar** — Full Stack Developer
