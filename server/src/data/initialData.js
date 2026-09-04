
export const initialSkills = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: "React",
    currentlyLearning: false,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "Nextjs",
    currentlyLearning: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Tailwind",
    currentlyLearning: false,
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    icon: "Redux",
    currentlyLearning: false,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "Javascript",
    currentlyLearning: false,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "Typescript",
    currentlyLearning: false,
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: "Framer",
    currentlyLearning: false,
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "Nodejs",
    currentlyLearning: false,
  },
  {
    name: "Express",
    category: "Backend",
    icon: "Express",
    currentlyLearning: false,
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: "RestApi",
    currentlyLearning: false,
  },
  { name: "JWT", category: "Backend", icon: "Jwt", currentlyLearning: false },

  // Databases
  {
    name: "MongoDB",
    category: "Databases",
    icon: "Mongodb",
    currentlyLearning: false,
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: "Postgres",
    currentlyLearning: false,
  },
  {
    name: "Redis",
    category: "Databases",
    icon: "Redis",
    currentlyLearning: true,
  },
//   {
//     name: "Firebase",
//     category: "Databases",
//     icon: "Firebase",
//     currentlyLearning: false,
//   },

  // DevOps
//   {
//     name: "Docker",
//     category: "DevOps",
//     icon: "Docker",
//     currentlyLearning: false,
//   },
  {
    name: "GitHub Actions",
    category: "Tools",
    icon: "GithubActions",
    currentlyLearning: false,
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: "Vercel",
    currentlyLearning: false,
  },
  {
    name: "Render",
    category: "Tools",
    icon: "Render",
    currentlyLearning: false,
  },

  // Tools
  { name: "Git", category: "Tools", icon: "Git", currentlyLearning: false },
  {
    name: "GitHub",
    category: "Tools",
    icon: "Github",
    currentlyLearning: false,
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: "Vscode",
    currentlyLearning: false,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: "Postman",
    currentlyLearning: false,
  },
  // { name: "Figma", category: "Tools", icon: "Figma", currentlyLearning: false },

  // AI
  {
    name: "OpenAI API",
    category: "AI",
    icon: "Openai",
    currentlyLearning: false,
  },
  {
    name: "Gemini API",
    category: "AI",
    icon: "Gemini",
    currentlyLearning: false,
  },
];

export const initialAchievements = [
  {
    title: "Smart India Hackathon Participant",
    category: "Hackathons",
    value: "-",
    description:
      "National level hackathon participant for presenting an innovative emergency medical dispatch solution using geo-routing.",
    link: "https://sih.gov.in",
    date: "2025",
  },
  {
    title : "Udemy Full Stack Developer",
    category : "Certifications",
    value: "Associate Level",
    Description : "",
    link : "https://www.udemy.com/certificate/UC-a4bcf47e-a450-4599-8dad-7b893f53d316/",
    date : "2026"
  },

  {
    title: "100+ Merged Pull Requests",
    category: "Open Source",
    value: "Active Contributor",
    description:
      "Contributed performance patches, accessibility audits, and custom utility features to popular repositories.",
    link: "https://github.com",
    date: "2024 - Present",
  },
];

export const initialProjects = [
  {
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
    liveUrl: "https://smart-tech-gold.vercel.app",
    featured: true,
    role: "Full Stack Developer",
    duration: "3 Months",
  },
  // {
  //   title: "AI Prompt Marketplace",
  //   subtitle: "SaaS Marketplace for custom AI fine-tunes & prompt models",
  //   description:
  //     "A premium marketplace platform supporting custom AI engineering, prompt auctions, model sharing, and credit transactions.",
  //   longDescription:
  //     "The AI Prompt Marketplace is a comprehensive SaaS portal designed for prompt engineers to publish, monetize, and execute fine-tuned models. It integrates OpenAI and Gemini models to preview runs directly, handles transactions via mock gateways, and lists curated listings under strict categories.",
  //   image:
  //     "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  //   tags: [
  //     "Next.js",
  //     "Tailwind CSS",
  //     "Redux",
  //     "Express",
  //     "MongoDB",
  //     "OpenAI API",
  //   ],
  //   features: [
  //     "30+ Reusable React & Next.js layout modules",
  //     "OpenAI & Gemini API integrations with sandbox playground",
  //     "Wallet credit deduction system and transaction logs",
  //     "10+ secure REST API routes for model uploads & audits",
  //     "Framer Motion layout transitions & custom animations",
  //   ],
  //   architectureDiagram:
  //     "Client React Web -> CORS API Gateway -> JWT Authentication -> Express Controllers -> MongoDB Atlas / OpenAI API Wrapper",
  //   apiFlow: [
  //     "GET /api/prompts - Fetch public catalog listings with filters",
  //     "POST /api/prompts/checkout - Deduct user balance and purchase prompt accesses",
  //     "POST /api/prompts/test - Trigger immediate sandboxed API run and capture response metrics",
  //   ],
  //   databaseDesign:
  //     "User Schema (credits, purchase history), Prompt Schema (title, model, systemPrompt, pricing, authorId), Review Schema (rating, comment, promptId)",
  //   challengesSolved:
  //     "Implemented request caching for popular API executions which cut OpenAI usage overheads by 30%. Resolved visual stuttering under high-load filtering by writing customized debouncers and memoizing heavy UI card nodes.",
  //   performanceOptimizations:
  //     "Assets are compressed via webp, API responses utilize Gzip/Brotli, and state selectors are fine-tuned with Reselect to prevent redundant renders.",
  //   futureImprovements: [
  //     "Incorporate live WebSocket auction bids",
  //     "Support LangChain template exports",
  //     "Local model evaluation sandbox",
  //   ],
  //   githubUrl: "https://github.com/abhishekh-developer/ai-marketplace",
  //   liveUrl: "https://ai-marketplace-abhishekh.vercel.app",
  //   featured: false,
  //   role: "Developer",
  //   duration: "3 Months",
  // },
  {
    title: "Better Auth",
    subtitle: "Modern Authentication System with Next.js, Better Auth & Prisma",
    description:
      "A modern authentication application built with Next.js, TypeScript, Better Auth, Prisma, PostgreSQL, and Resend, supporting social OAuth and email verification.",
    longDescription:
      "Better Auth is a comprehensive authentication solution built with Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Better Auth, Prisma, and PostgreSQL. The project provides a complete authentication flow featuring email/password login, email verification after signup via Resend, forgot and reset password flows, Google and GitHub OAuth sign-ins, social account linking, protected dashboard access, session management, and a clean responsive UI.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "Prisma", "PostgreSQL"],
    features: [
      "Email & password authentication with post-signup verification via Resend",
      "Forgot password and secure reset password workflow",
      "Google OAuth and GitHub OAuth social login with account linking",
      "Protected dashboard and session expiration management",
      "PostgreSQL database integration powered by Prisma ORM",
    ],
    architectureDiagram:
      "Next.js 16 App → Better Auth Client & Route Handlers → Prisma ORM → PostgreSQL Database → Resend Email Service",
    apiFlow: [
      "POST /api/auth/sign-in - Authenticate credentials and establish user session",
      "POST /api/auth/sign-up - Register user and send verification email via Resend",
      "GET /api/auth/callback/google - Handle Google OAuth callback & issue session token",
      "POST /api/auth/forgot-password - Trigger password reset email flow",
    ],
    databaseDesign:
      "Models: User (id, email, name, emailVerified, image), Session (id, userId, token, expiresAt, ipAddress), Account (id, userId, providerId, accountId), Verification (id, identifier, value, expiresAt).",
    challengesSolved:
      "Integrated Better Auth framework with Next.js 16 App Router and Prisma ORM, seamlessly managing multi-provider OAuth account linking, CSRF security, and automated transactional emails with Resend.",
    performanceOptimizations:
      "Leveraged server-side auth checking in Next.js middleware, optimized session token database queries with Prisma indexing, and utilized Tailwind CSS with shadcn/ui for zero-runtime styling overhead.",
    futureImprovements: [
      "Two-Factor Authentication (2FA) with TOTP and Passkeys",
      "Multi-tenant organization & team workspace support",
      "Role-Based Access Control (RBAC) authorization policies",
    ],
    githubUrl: "https://github.com/code-with-avii/Better_auth",
    liveUrl: "https://github.com/code-with-avii/Better_auth",
    featured: false,
    role: "Full Stack Developer",
    duration: "2 Months",
  },
  {
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
