export const initialProjectsData = [
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
      "Interactive prompt playground with direct AI completions using OpenAI API",
      "Advanced search with multi-category filters, sorting, and user ratings",
      "Wallet system with credit deductions and transactional history logging",
      "Glassmorphic design details and Framer Motion layout transitions",
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
      "Strict HTTPOnly secure cookies storing double-hashed refresh tokens",
      "Active session manager tracking browser, OS, and location IP",
      "Role-Based Access Control (RBAC) with hierarchical authorization middleware",
      "Multi-Factor Authentication (MFA) via Google Authenticator TOTP codes",
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
//   {
//     _id: "mem-project-4",
//     title: "Real-Time Chat Application",
//     subtitle:
//       "Secure chat portal supporting channels, rich text, & read checks",
//     description:
//       "An interactive messaging application offering channel creation, instant communication, read receipts, and online status indicators.",
//     longDescription:
//       "Built with Socket.io, this chat portal replicates slack-like workflows. It processes active indicators, stores chat messages, and features full media sharing options.",
//     image:
//       "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop",
//     tags: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
//     features: [
//       "Instant delivery of messages in private channels and general chat rooms",
//       "Active status tracking showing users online/typing markers in real time",
//       "Encrypted persistent chat histories containing rich links previews",
//       "Custom animations using Framer Motion on chat drawers and notifications",
//     ],
//     architectureDiagram:
//       "React UI (Socket Client) -> Socket.io Broker -> Node.js Cluster -> MongoDB Message Store",
//     apiFlow: [
//       "GET /api/channels - Retrieve channel listings for registered accounts",
//       "GET /api/messages/:channelId - Load paginated past text records",
//       "POST /api/channels/create - Initialize new chat rooms with permissions",
//     ],
//     databaseDesign:
//       "Channel (id, name, isPrivate), Message (id, senderId, channelId, body, timestamp, readByUsers), UserPresence (userId, status, lastSeen)",
//     challengesSolved:
//       "Reduced chat sync overhead by designing lightweight payload footprints and writing a virtualized scrolling viewport that only renders visible message nodes, maintaining 60fps scrolling.",
//     performanceOptimizations:
//       "Chat logs are loaded dynamically in batches of 30 items. Media uploads are compressed directly within the client prior to database delivery.",
//     futureImprovements: [
//       "Implement WebRTC voice calls",
//       "Thread replies and reactions mapping",
//       "Message self-destruct timers",
//     ],
//     githubUrl: "https://github.com/abhishekh-developer/chat-app",
//     liveUrl: "https://chat-app-abhishekh.vercel.app",
//     featured: false,
//     role: "Full Stack Engineer",
//     duration: "3.5 Months",
//   },
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
      "Real-time temperature, UV, and pressure tracker with geocoding locator",
      "Custom graphs visualising hourly temperature shifts and weekly trends",
      "In-browser memory caching of city outputs reducing API request thresholds",
      "Animated weather card displays changing backgrounds in line with current conditions",
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
    githubUrl: "https://github.com/abhishekh-developer/weather-tracker",
    liveUrl: "https://weather-tracker-abhishekh.vercel.app",
    featured: false,
    role: "Full Stack Developer",
    duration: "1.5 Months",
  },
  {
   _id: "mem-project-4",
  "title": "Hostel Help",
  "subtitle": "Smart Hostel Management & Student Assistance Platform",
  "description": "A full-stack MERN application that simplifies hostel management, complaint tracking, and communication between students and administrators.",
  "longDescription": "Hostel Help is a hostel management platform built using the MERN stack. It enables students to register, log in securely, submit maintenance complaints, track request status, and communicate with hostel administrators. The admin dashboard provides tools to manage complaints, monitor hostel operations, and maintain student records. The application focuses on security, responsive design, and scalable backend architecture.",
  "image": "https://your-image-url.com/hostel-help.png",
  "tags": [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Tailwind CSS"
  ],
  "features": [
    "JWT Authentication",
    "Role-based Access Control",
    "Complaint Management",
    "Issue Status Tracking",
    "Responsive Dashboard",
    "REST API"
  ],
  "architectureDiagram": "Client React App → Express API → JWT Authentication → MongoDB Database",
  "apiFlow": [
    "User Login",
    "JWT Authentication",
    "Protected Routes",
    "Complaint CRUD Operations",
    "Response to Client"
  ],
  "databaseDesign": "Collections: Users, Complaints, Admins, Hostels, Rooms. Relationships maintained using ObjectId references.",
  "challengesSolved": "Implemented secure authentication, complaint lifecycle management, protected APIs, and efficient MongoDB schema design.",
  "performanceOptimizations": "Optimized database queries, lazy-loaded React components, minimized API calls, and optimized images.",
  "futureImprovements": [
    "Socket.io Real-time Notifications",
    "Room Allocation",
    "Mess Management",
    "Visitor Management",
    "Online Fee Payment"
  ],
  "githubUrl": "https://github.com/code-with-avii/Hostel-Help",
  "liveUrl": "https://hostel-help-pi.vercel.app/",
  "featured": true,
  "role": "Full Stack Developer",
  "duration": "2 Months"
}
];
