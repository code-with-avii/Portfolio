export const initialProjectsData = [
  {
    _id: "mem-project-5",
    title: "SmartTech",
    subtitle: "Full-Stack E-Commerce Platform",
    description: `• Architected high-performance e-commerce client handling 15+ secure REST API routes
• Implemented JWT token verification & Google OAuth 2.0 security pipelines
• Integrated Razorpay payment gateway, supporting end-to-end billing transactions
• Developed dynamic role-based dashboards for unified product and user administration
• Optimized state management with Redux Toolkit, decreasing redundant component re-renders by 35%`,
    longDescription:
      "SmartTech is a feature-rich e-commerce platform developed using the MERN stack. It allows users to browse products, manage shopping carts, place secure orders, and make online payments through Razorpay. The platform includes robust user authentication with JWT and Google OAuth, and a secure admin dashboard for managing products, categories, users, and orders.",
    image:
      "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Razorpay"],
    features: [
      "JWT Cookie Authentication & Google OAuth login flow",
      "Razorpay Payment Gateway with custom billing pipelines",
      "15+ secure REST API endpoints with Mongo relation maps",
      "Interactive role-based dashboards (Admin & Customer profiles)",
    ],
    architectureDiagram:
      "React Client → Express REST API → JWT & Google OAuth Authentication → MongoDB Database → Razorpay Payment Gateway",
    apiFlow: [
      "User Authentication & JWT Token Verification",
      "Product & Category APIs",
      "Cart & Order Processing",
      "Razorpay Payment Integration",
      "Admin Management APIs",
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
    ],
    githubUrl: "https://github.com/code-with-avii/SmartTech",
    liveUrl: "https://smart-tech-gold.vercel.app",
    featured: true,
    role: "Full Stack Developer",
    duration: "3 Months",
  },
  {
    _id: "mem-project-4",
    title: "Hostel Help",
    subtitle: "Smart Hostel Management & Student Assistance Platform",
    description: `• Engineered real-time ticket complaint lifecycle system for student-admin communication
• Secure cookie-based authentication with JWT and express-validator API route guards
• Integrated scalable MongoDB database schema with optimized relational object maps
• Designed automated dashboard interface tracking 100+ weekly student assistance requests
• Reduced issue processing delays by 40% through unified role-based administrative consoles`,
    longDescription:
      "Hostel Help is a hostel management platform built using the MERN stack. It enables students to register, log in securely, submit maintenance complaints, track request status, and communicate with administrators. The admin dashboard provides tools to manage complaints, monitor hostel operations, and maintain student records.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
    tags: ["MERN", "JWT", "MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "JWT cookie authentication & secure database route guards",
      "Role-based Student complaint registers & Admin dashboard profiles",
      "Real-time issue ticketing & maintenance lifecycle tracking",
      "REST API endpoints handling CRUD logs",
    ],
    architectureDiagram:
      "Client React App → Express API → JWT Authentication → MongoDB Database",
    apiFlow: [
      "User Login & JWT Authentication",
      "Protected Routes & Authorization",
      "Complaint CRUD Operations",
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
      "Online Fee Payment",
    ],
    githubUrl: "https://github.com/code-with-avii/Hostel-Help",
    liveUrl: "https://hostel-help-pi.vercel.app/",
    featured: true,
    role: "Full Stack Developer",
    duration: "2 Months",
  },
  {
    _id: "mem-project-6",
    title: "Portfolio",
    subtitle: "Modern Full-Stack Developer Portfolio & Admin CMS",
    description: `• Architected full-stack developer portfolio with sleek dark mode aesthetic
• Built Express REST API backend with MongoDB Atlas for dynamic content management
• Developed secure JWT-authenticated Admin Panel for live skill/project updates
• Integrated Redux Toolkit (RTK Query) for client-side caching & state management
• Implemented responsive UI with Framer Motion animations & canvas confetti effects`,
    longDescription:
      "Portfolio is a feature-rich personal developer portfolio and content management system built using the MERN stack with Redux Toolkit, Tailwind CSS, and Framer Motion. It features dynamic project showcases with case studies, an interactive skills matrix, experience timeline, contact form with backend integration, and a secure Admin Dashboard for managing projects, skills, and messages without code changes.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    features: [
      "JWT-authenticated Admin Panel for full CRUD operations on projects & skills",
      "Redux Toolkit RTK Query API slice with optimistic state management",
      "Interactive Projects gallery with filter pills & detailed case study pages",
      "Contact form linked to MongoDB storage and email notifications",
      "Responsive dark aesthetic with Framer Motion animations and interactive code editor",
    ],
    architectureDiagram:
      "React Client + Vite → Redux Toolkit RTK Query → Express REST API → JWT & Security Middleware → MongoDB Database",
    apiFlow: [
      "GET /api/projects - Retrieve all portfolio projects",
      "GET /api/skills - Fetch categorized skill items",
      "POST /api/messages - Store contact form submissions",
      "POST /api/auth/login - Authenticate admin & issue JWT token",
      "POST /api/projects - Admin route to create new projects",
    ],
    databaseDesign:
      "Collections: Projects, Skills, Experiences, Achievements, Admins, Messages. MongoDB Mongoose models with strict schema definitions.",
    challengesSolved:
      "Implemented seamless in-memory fallback store ensuring 100% uptime even if MongoDB is disconnected. Optimized bundle assets and created smooth page transition animations.",
    performanceOptimizations:
      "RTK Query cached API responses, Vite asset code-splitting, WebP image optimization, rate-limiting on sensitive backend routes, and minimal runtime CSS variable design system.",
    futureImprovements: [
      "Analytics Dashboard for Visitor Metrics",
      "Blog & Technical Article Publishing",
      "Custom Theme Color Switcher",
    ],
    githubUrl: "https://github.com/code-with-avii/Portfolio",
    liveUrl: "https://portfolio-abhishekh.vercel.app",
    featured: true,
    role: "Full Stack Developer",
    duration: "1 Month",
  },
];
