export const initialProjectsData = [
  {
    _id: "mem-project-5",
    title: "SmartTech",
    subtitle: "Modern E-Commerce Platform for Electronics & Gadgets",
    description:
      "A full-stack MERN e-commerce application that provides a seamless online shopping experience with secure authentication, product management, and online payments.",

    longDescription:
      "SmartTech is a feature-rich e-commerce platform developed using the MERN stack. It allows users to browse products by category, search for items, manage shopping carts, place secure orders, and make online payments through Razorpay. The platform includes user authentication with JWT and Google OAuth, an admin dashboard for managing products, categories, users, and orders, and a responsive UI optimized for all devices.",

    image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=800&auto=format&fit=crop",

    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Tailwind CSS",
      "Razorpay",
      "Google OAuth",
    ],

    features: [
      "25+ Reusable React components & global styles",
      "JWT Cookie Authentication & Google OAuth login flow",
      "Razorpay Payment Gateway with custom billing pipelines",
      "15+ secure REST API endpoints with Mongo relation maps",
      "Interactive role-based dashboards (Admin & Customer profiles)",
    ],

    architectureDiagram:
      "React Client → Express REST API → JWT & Google OAuth Authentication → MongoDB Database → Razorpay Payment Gateway",

    apiFlow: [
      "User Authentication",
      "JWT Token Verification",
      "Product & Category APIs",
      "Cart & Order Processing",
      "Razorpay Payment Integration",
      "Admin Management APIs",
      "Response to Client",
    ],

    databaseDesign:
      "Collections: Users, Products, Categories, Orders, Payments, Cart. Relationships maintained using ObjectId references with optimized indexing for efficient queries.",

    challengesSolved:
      "Implemented secure JWT authentication with refresh tokens, Google OAuth integration, Razorpay payment gateway, role-based admin access, protected APIs, efficient product filtering, and scalable MongoDB schema design.",

    performanceOptimizations:
      "Optimized API responses, implemented lazy loading, reduced unnecessary re-renders using Redux Toolkit, optimized images, code splitting with React, and efficient MongoDB queries.",

    futureImprovements: [
      "Wishlist Functionality",
      "Product Reviews & Ratings",
      "Order Tracking",
      "Coupon & Discount System",
      "Inventory Management",
      "Email Notifications",
      "PWA Support",
    ],

    githubUrl: "https://github.com/code-with-avii/SmartTech",

    liveUrl: "smart-tech-gold.vercel.app",

    featured: true,

    role: "Full Stack Developer",

    duration: "3 Months",
  },
  {
    _id: "mem-project-3",
    title: "AI Prompt Marketplace",
    subtitle: "SaaS Marketplace for custom AI fine-tunes & prompt models",
    description:
      "A premium marketplace platform supporting custom AI engineering, prompt auctions, model sharing, and credit transactions.",
    longDescription:
      "The AI Prompt Marketplace is a comprehensive SaaS portal designed for prompt engineers to publish, monetize, and execute fine-tuned models. It integrates OpenAI and Gemini models to preview runs directly, handles transactions via mock gateways, and lists curated listings under strict categories.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "30+ Reusable React & Next.js layout modules",
      "OpenAI & Gemini API integrations with sandbox playground",
      "Wallet credit deduction system and transaction logs",
      "10+ secure REST API routes for model uploads & audits",
      "Framer Motion layout transitions & custom animations",
    ],
    architectureDiagram:
      "Client React Web -> CORS API Gateway -> JWT Authentication -> Express Controllers -> MongoDB Atlas / OpenAI API Wrapper",
    apiFlow: [
      "GET /api/prompts - Fetch public catalog listings with filters",
      "POST /api/prompts/checkout - Deduct user balance and purchase prompt accesses",
      "POST /api/prompts/test - Trigger immediate sandboxed API run and capture response metrics",
    ],
    databaseDesign:
      "User Schema (credits, purchase history), Prompt Schema (title, model, systemPrompt, pricing, authorId), Review Schema (rating, comment, promptId)",
    challengesSolved:
      "Implemented request caching for popular API executions which cut OpenAI usage overheads by 30%. Resolved visual stuttering under high-load filtering by writing customized debouncers and memoizing heavy UI card nodes.",
    performanceOptimizations:
      "Assets are compressed via webp, API responses utilize Gzip/Brotli, and state selectors are fine-tuned with Reselect to prevent redundant renders.",
    futureImprovements: [
      "Incorporate live WebSocket auction bids",
      "Support LangChain template exports",
      "Local model evaluation sandbox",
    ],
    githubUrl: "https://github.com/abhishekh-developer/ai-marketplace",
    liveUrl: "https://ai-marketplace-abhishekh.vercel.app",
    featured: true,
    role: "Developer",
    duration: "3 Months",
  },
  {
    _id: "mem-project-1",
    title: "Secure Authentication Suite",
    subtitle: "JWT, Session, MFA, and access control microservice",
    description:
      "An authentication microservice implementing robust access guards, including role-based access, MFA, and active session termination.",
    longDescription:
      "This security system demonstrates implementation of JWT access/refresh tokens alongside strict CORS. Admins can view connected devices and terminate sessions in real time via Redis storage.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redis"],
    features: [
      "HTTPOnly secure cookies storing double-hashed refresh tokens",
      "8+ secure API endpoints shielded via CORS and Helmet",
      "Active session manager tracking browser, OS, and location IP",
      "Multi-Factor Authentication (MFA) via Google Authenticator TOTP",
      "Role-Based Access Control (RBAC) hierarchical authorization middleware",
    ],
    architectureDiagram:
      "React App -> Express Router -> bcrypt Validator -> Redis Session Cache -> Mongoose User Record",
    apiFlow: [
      "POST /api/auth/register - Create account and generate MFA registration QR code",
      "POST /api/auth/login - Generate access token and issue secure refresh cookie",
      "POST /api/auth/logout - Revoke active tokens and invalidate session within Redis",
    ],
    databaseDesign:
      "User (id, name, hashPassword, mfaSecret, roles), ActiveSessions (id, userId, deviceName, ipAddress, lastActiveDate)",
    challengesSolved:
      "Mitigated CSRF and XSS injection vectors by strictly using SameSite Lax cookie headers and parsing all inputs against strict validator schemas.",
    performanceOptimizations:
      "Token verification takes less than 2ms by maintaining JWT checks memory-bound and cached user roles inside Redis.",
    futureImprovements: [
      "OAuth2 sign-in additions (GitHub, Google)",
      "Passwordless FIDO2 Passkeys support",
      "Risk-based anomalous login detection",
    ],
    githubUrl: "https://github.com/abhishekh-developer/auth-service",
    liveUrl: "https://auth-service-abhishekh.vercel.app",
    featured: false,
    role: "Developer",
    duration: "2 Months",
  },
  {
    _id: "mem-project-0",
    title: "Weather Dashboard",
    subtitle: "Dynamic weather portal with statistics & charts",
    description:
      "An aesthetic dashboard plotting historical and current weather parameters across global locations, with interactive hourly chart logs.",
    longDescription:
      "This frontend-driven dashboard connects to OpenWeather APIs, aggregates meteorological stats, saves search logs within local storage, and plots wind/humidity patterns using ChartJS.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "ChartJS", "OpenWeather API"],
    features: [
      "12+ reusable UI graphing and meteorological metric panels",
      "Geocoding locator tracking global coordinates in real time",
      "In-browser localStorage cache reducing API calls by 50%",
      "Interactive Chart.js visualizations plotting historical climate shifts",
    ],
    architectureDiagram:
      "Vite React UI -> LocalStorage (Cache) -> OpenWeather Maps API Proxy",
    apiFlow: [
      "GET /api/weather/search?city=NAME - Direct search using weather coordinates maps",
      "GET /api/weather/forecast - 5-day forecast aggregates mapping hourly blocks",
    ],
    databaseDesign:
      "Client-side LocalStorage cache mapping city search strings to JSON data packages with 30-minute expiry timestamps.",
    challengesSolved:
      "Mitigated API key exposure risks by configuring custom backend serverless proxy routes, shielding keys from network logs.",
    performanceOptimizations:
      "Used responsive Tailwind classes for perfect styling. Bundle sizes are optimized via lazy loading of heavy graph elements.",
    futureImprovements: [
      "Add extreme weather alerts push alerts",
      "Radar map visualisations overlay",
      "Add comparative weather layout widgets",
    ],
    githubUrl: "https://github.com/code-with-avii/Weather_app",
    liveUrl: "https://weather-app-theta-two-15.vercel.app/",
    featured: false,
    role: "Full Stack Developer",
    duration: "1.5 Months",
  },
  {
    _id: "mem-project-4",
    title: "Hostel Help",
    subtitle: "Smart Hostel Management & Student Assistance Platform",
    description:
      "A full-stack MERN application that simplifies hostel management, complaint tracking, and communication between students and administrators.",
    longDescription:
      "Hostel Help is a hostel management platform built using the MERN stack. It enables students to register, log in securely, submit maintenance complaints, track request status, and communicate with hostel administrators. The admin dashboard provides tools to manage complaints, monitor hostel operations, and maintain student records. The application focuses on security, responsive design, and scalable backend architecture.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "18+ reusable React layout components & navigation paths",
      "JWT cookie authentication & secure database route guards",
      "Role-based Student complaint registers & Admin dashboard profiles",
      "12+ MERN-linked REST API endpoints handling CRUD logs",
      "Real-time issue ticketing & maintenance lifecycle tracking",
    ],
    architectureDiagram:
      "Client React App → Express API → JWT Authentication → MongoDB Database",
    apiFlow: [
      "User Login",
      "JWT Authentication",
      "Protected Routes",
      "Complaint CRUD Operations",
      "Response to Client",
    ],
    databaseDesign:
      "Collections: Users, Complaints, Admins, Hostels, Rooms. Relationships maintained using ObjectId references.",
    challengesSolved:
      "Implemented secure authentication, complaint lifecycle management, protected APIs, and efficient MongoDB schema design.",
    performanceOptimizations:
      "Optimized database queries, lazy-loaded React components, minimized API calls, and optimized images.",
    futureImprovements: [
      "Socket.io Real-time Notifications",
      "Room Allocation",
      "Mess Management",
      "Visitor Management",
      "Online Fee Payment",
    ],
    githubUrl: "https://github.com/code-with-avii/Hostel-Help",
    liveUrl: "https://hostel-help-pi.vercel.app/",
    featured: true,
    role: "Full Stack Developer",
    duration: "2 Months",
  },
];
