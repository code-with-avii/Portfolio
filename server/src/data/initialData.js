
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
  // {
  //   name: "TypeScript",
  //   category: "Frontend",
  //   icon: "Typescript",
  //   currentlyLearning: false,
  // },
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
//   {
//     name: "LangChain",
//     category: "AI",
//     icon: "Langchain",
//     currentlyLearning: false,
//   },

  // Currently Learning
//   {
//     name: "GraphQL",
//     category: "Backend",
//     icon: "Graphql",
//     currentlyLearning: true,
//   },
//   {
//     name: "Kubernetes",
//     category: "DevOps",
//     icon: "Kubernetes",
//     currentlyLearning: true,
//   },
//   { name: "Rust", category: "Backend", icon: "Rust", currentlyLearning: true },
];

export const initialExperiences = [
  {
    role: "Full Stack Engineer",
    company: "Freelance & Open Source",
    duration: "2025 - Present",
    type: "Freelance Work",
    technologies: [
      "React",
    //   "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    //   "Docker",
      "OpenAI API",
    ],
    achievements: [
      "Architected and delivered custom E-commerce APIs and automated dashboard integrations for global clients.",
      "Developed AI-assisted workflows resulting in a 40% reduction in client customer support ticket response times.",
      "Contributed core enhancements to prominent animation libraries and icon packs on GitHub.",
    ],
  },
  {
    role: "Project Developer",
    company: "College Hackathons & Open Source",
    duration: "2024 - Present",
    type: "Team Projects",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    achievements: [
      "Participated in SIH (Smart India Hackathon) 2025 for building a real-time disaster resource dispatcher.",
      "Led a team of 4 developers, planned project milestones, delegated tasks, conducted code reviews, managed Git workflows, and ensured successful delivery of scalable full-stack features",
      "Implemented full authentication flows using httpOnly secure cookies and JSON Web Tokens.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Ecosystem",
    duration: "2026 - Present",
    type: "Open Source Contributions",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Git"],
    achievements: [
      "Merged 100+ pull requests addressing performance bottlenecks and custom utility hook exports in component design files.",
    ],
  },
  {
    role: "Undergraduate ",
    company: "University Technical Club",
    duration: "2024 - present",
    type: "College Projects",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "PostgreSQL"],
    achievements: [
      "Developed and deployed Hostel Help, a full-stack hostel management platform streamlining room allocation, complaints, notices, and student-hostel administration for 1,500+ students..",
      "Designed highly responsive layouts supporting desktop, mobile, and display panels, with 100% lighthouse compliance.",
    ],
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
//   {
//     title: "LeetCode Knight Badge",
//     category: "Coding Profile",
//     value: "1950+ Rating",
//     description:
//       "Solved over 1000+ problems across arrays, graphs, dynamic programming, and systems design topics.",
//     link: "https://leetcode.com",
//     date: "2025",
//   },
  {
    title: "100+ Merged Pull Requests",
    category: "Open Source",
    value: "Active Contributor",
    description:
      "Contributed performance patches, accessibility audits, and custom utility features to popular repositories.",
    link: "https://github.com",
    date: "2024 - Present",
  },
//   {
//     title: "AWS Certified Developer",
//     category: "Certifications",
//     value: "Associate Level",
//     description:
//       "Validated expert competency in deploying, scaling, and managing containerised Node applications on AWS Cloud.",
//     link: "https://aws.amazon.com",
//     date: "2025",
//   },
//   {
//     title: "MongoDB Certified Developer",
//     category: "Certifications",
//     value: "Associate Developer",
//     description:
//       "Demonstrated extensive knowledge of aggregation pipelines, schema designs, indexes, and database optimizations.",
//     link: "https://mongodb.com",
//     date: "2025",
//   },
//   {
//     title: "Codeforces Expert",
//     category: "Coding Profile",
//     value: "1650+ Max Rating",
//     description:
//       "Ranked in the top percentiles of international algorithms and data structures competitive contests.",
//     link: "https://codeforces.com",
//     date: "2025",
//   },
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
  {
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
    featured: false,
    role: "Developer",
    duration: "3 Months",
  },
  {
    title: "Secure Authentication Suite",
    subtitle: "JWT, Session, MFA, and access control microservice",
    description:
      "An authentication microservice implementing robust access guards, including role-based access, MFA, and active session termination.",
    longDescription:
      "This security system demonstrates implementation of JWT access/refresh tokens alongside strict CORS. Admins can view connected devices and terminate sessions in real time via Redis storage.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "Tailwind"],
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
    githubUrl: "https://github.com/code-with-avii/Authentication",
    liveUrl: "https://auth-service-abhishekh.vercel.app",
    featured: false,
    role: "Developer",
    duration: "2 Months",
  },
  {
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
