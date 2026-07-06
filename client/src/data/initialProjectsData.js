
export const initialProjectsData= [
 {
 _id: 'mem-project-0',
 title: 'AI Prompt Marketplace',
 subtitle: 'SaaS Marketplace for custom AI fine-tunes & prompt models',
 description: 'A premium marketplace platform supporting custom AI engineering, prompt auctions, model sharing, and credit transactions.',
 longDescription: 'The AI Prompt Marketplace is a comprehensive SaaS portal designed for prompt engineers to publish, monetize, and execute fine-tuned models. It integrates OpenAI and Gemini models to preview runs directly, handles transactions via mock gateways, and lists curated listings under strict categories.',
 image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
 tags: ['Next.js', 'Tailwind CSS', 'Redux', 'Express', 'MongoDB', 'OpenAI API'],
 features: [
 'Interactive prompt playground with direct AI completions using OpenAI API',
 'Advanced search with multi-category filters, sorting, and user ratings',
 'Wallet system with credit deductions and transactional history logging',
 'Glassmorphic design details and Framer Motion layout transitions'
 ],
 architectureDiagram: 'Client React Web -> CORS API Gateway -> JWT Authentication -> Express Controllers -> MongoDB Atlas / OpenAI API Wrapper',
 apiFlow: [
 'GET /api/prompts - Fetch public catalog listings with filters',
 'POST /api/prompts/checkout - Deduct user balance and purchase prompt accesses',
 'POST /api/prompts/test - Trigger immediate sandboxed API run and capture response metrics'
 ],
 databaseDesign: 'User Schema (credits, purchase history), Prompt Schema (title, model, systemPrompt, pricing, authorId), Review Schema (rating, comment, promptId)',
 challengesSolved: 'Implemented request caching for popular API executions which cut OpenAI usage overheads by 30%. Resolved visual stuttering under high-load filtering by writing customized debouncers and memoizing heavy UI card nodes.',
 performanceOptimizations: 'Assets are compressed via webp, API responses utilize Gzip/Brotli, and state selectors are fine-tuned with Reselect to prevent redundant renders.',
 futureImprovements: ['Incorporate live WebSocket auction bids', 'Support LangChain template exports', 'Local model evaluation sandbox'],
 githubUrl: 'https://github.com/abhishekh-developer/ai-marketplace',
 liveUrl: 'https://ai-marketplace-abhishekh.vercel.app',
 featured: true,
 role: 'Lead Architect',
 duration: '3 Months'
 },
 {
 _id: 'mem-project-1',
 title: 'Hospital Management Suite',
 subtitle: 'Enterprise patient records, scheduling, & doctor portal',
 description: 'A secure healthcare management tool optimizing outpatient registration, scheduling, record tracking, and secure doctor-to-doctor messaging.',
 longDescription: 'This application addresses hospital bottlenecks by centralizing electronic health records (EHR). Doctors log logs, consult histories, and write digital prescriptions, while patients book appointments via a clean calendar widget.',
 image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
 tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
 features: [
 'Interactive appointment scheduling calendar with drag-and-drop slots',
 'Strict HIPAA-aligned data structure with encryption on patient metrics',
 'Automated email/SMS appointment confirmations via cron triggers',
 'Comprehensive doctor dashboard tracking prescriptions and vitals data charts'
 ],
 architectureDiagram: 'Vite Frontend -> Express Middleware (Validators) -> Knex Query Builder -> PostgreSQL Database Cluster',
 apiFlow: [
 'GET /api/appointments - Fetch patient appointments filterable by date and doctor',
 'POST /api/records - Encrypt and insert medical history notes',
 'PUT /api/appointments/:id/reschedule - Update scheduling slot with conflict verification'
 ],
 databaseDesign: 'Patients (id, name, encryptedSSN), Doctors (id, specialty), Appointments (id, patientId, doctorId, timeSlot), Records (id, patientId, diagnosis, prescriptions)',
 challengesSolved: 'Prevented overlapping doctor schedules by wrapping slot creation queries inside strict PostgreSQL serializable transactions. Solved slow history lookups by creating combined database indexes on patient search fields.',
 performanceOptimizations: 'Paginated queries on EHR lists reduced payload sizes by 85%. Images are lazy loaded via custom IntersectionObservers.',
 futureImprovements: ['Video teleconsultation integration via WebRTC', 'AI patient symptom pre-check bots', 'Mobile companion app'],
 githubUrl: 'https://github.com/abhishekh-developer/hospital-suite',
 liveUrl: 'https://hospital-suite-abhishekh.vercel.app',
 featured: true,
 role: 'Full Stack Engineer',
 duration: '4 Months'
 },
 {
 _id: 'mem-project-2',
 title: 'Real-Time Analytics Dashboard',
 subtitle: 'High-performance tracker for user telemetry & heatmaps',
 description: 'A developer tool collecting and visualizing website performance, clicks, geographic telemetry, and performance bottlenecks.',
 longDescription: 'A premium dashboard that ingests tracking scripts telemetry and presents it via interactive charts. It handles real-time WebSockets to update visitor counters live and tracks historical traffic drops.',
 image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
 tags: ['React', 'Framer Motion', 'Node.js', 'Redis', 'MongoDB'],
 features: [
 'Real-time visitors count and live click logging using Socket.io',
 'Comprehensive geographic maps mapping inbound click metrics',
 'Page-load speed analysis breakdown (DNS, TTFB, DOM Paint)',
 'Exportable reporting utilities (PDF, JSON, CSV)'
 ],
 architectureDiagram: 'Telemetry SDK -> Express Ingestion Endpoint -> Redis Pub/Sub -> MongoDB Persister -> WebSocket Server -> Analytics Client UI',
 apiFlow: [
 'POST /api/telemetry/ingest - Endpoint designed to receive web events under 20ms',
 'GET /api/dashboard/stats - Aggregate metrics across customized dates',
 'GET /api/dashboard/realtime - Open persistent socket connection for live updates'
 ],
 databaseDesign: 'Sites (id, ownerId, domains), Events (id, siteId, eventType, path, speedMetric, countryCode, timestamp)',
 challengesSolved: 'Ingesting millions of events threatened database capacity. Addressed this by implementing a Redis stream buffer to batch write database updates every 10 seconds, maintaining server speed.',
 performanceOptimizations: 'SVG layouts are heavily optimized. Telemetry scripts are asynchronous and under 4KB to maintain zero host page impact.',
 futureImprovements: ['Implement page heatmap recording', 'User retention cohort analysis matrix', 'Slack alert webhooks integration'],
 githubUrl: 'https://github.com/abhishekh-developer/analytics-telemetry',
 liveUrl: 'https://analytics-telemetry-abhishekh.vercel.app',
 featured: true,
 role: 'Lead Backend Developer',
 duration: '2.5 Months'
 },
 {
 _id: 'mem-project-3',
 title: 'Secure Authentication Suite',
 subtitle: 'JWT, Session, MFA, and access control microservice',
 description: 'An authentication microservice implementing robust access guards, including role-based access, MFA, and active session termination.',
 longDescription: 'This security system demonstrates implementation of JWT access/refresh tokens alongside strict CORS. Admins can view connected devices and terminate sessions in real time via Redis storage.',
 image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
 tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis'],
 features: [
 'Strict HTTPOnly secure cookies storing double-hashed refresh tokens',
 'Active session manager tracking browser, OS, and location IP',
 'Role-Based Access Control (RBAC) with hierarchical authorization middleware',
 'Multi-Factor Authentication (MFA) via Google Authenticator TOTP codes'
 ],
 architectureDiagram: 'React App -> Express Router -> bcrypt Validator -> Redis Session Cache -> Mongoose User Record',
 apiFlow: [
 'POST /api/auth/register - Create account and generate MFA registration QR code',
 'POST /api/auth/login - Generate access token and issue secure refresh cookie',
 'POST /api/auth/logout - Revoke active tokens and invalidate session within Redis'
 ],
 databaseDesign: 'User (id, name, hashPassword, mfaSecret, roles), ActiveSessions (id, userId, deviceName, ipAddress, lastActiveDate)',
 challengesSolved: 'Mitigated CSRF and XSS injection vectors by strictly using SameSite Lax cookie headers and parsing all inputs against strict validator schemas.',
 performanceOptimizations: 'Token verification takes less than 2ms by maintaining JWT checks memory-bound and cached user roles inside Redis.',
 futureImprovements: ['OAuth2 sign-in additions (GitHub, Google)', 'Passwordless FIDO2 Passkeys support', 'Risk-based anomalous login detection'],
 githubUrl: 'https://github.com/abhishekh-developer/auth-service',
 liveUrl: 'https://auth-service-abhishekh.vercel.app',
 featured: false,
 role: 'Security Engineer',
 duration: '2 Months'
 },
 {
 _id: 'mem-project-4',
 title: 'Real-Time Chat Application',
 subtitle: 'Secure chat portal supporting channels, rich text, & read checks',
 description: 'An interactive messaging application offering channel creation, instant communication, read receipts, and online status indicators.',
 longDescription: 'Built with Socket.io, this chat portal replicates slack-like workflows. It processes active indicators, stores chat messages, and features full media sharing options.',
 image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop',
 tags: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB'],
 features: [
 'Instant delivery of messages in private channels and general chat rooms',
 'Active status tracking showing users online/typing markers in real time',
 'Encrypted persistent chat histories containing rich links previews',
 'Custom animations using Framer Motion on chat drawers and notifications'
 ],
 architectureDiagram: 'React UI (Socket Client) -> Socket.io Broker -> Node.js Cluster -> MongoDB Message Store',
 apiFlow: [
 'GET /api/channels - Retrieve channel listings for registered accounts',
 'GET /api/messages/:channelId - Load paginated past text records',
 'POST /api/channels/create - Initialize new chat rooms with permissions'
 ],
 databaseDesign: 'Channel (id, name, isPrivate), Message (id, senderId, channelId, body, timestamp, readByUsers), UserPresence (userId, status, lastSeen)',
 challengesSolved: 'Reduced chat sync overhead by designing lightweight payload footprints and writing a virtualized scrolling viewport that only renders visible message nodes, maintaining 60fps scrolling.',
 performanceOptimizations: 'Chat logs are loaded dynamically in batches of 30 items. Media uploads are compressed directly within the client prior to database delivery.',
 futureImprovements: ['Implement WebRTC voice calls', 'Thread replies and reactions mapping', 'Message self-destruct timers'],
 githubUrl: 'https://github.com/abhishekh-developer/chat-app',
 liveUrl: 'https://chat-app-abhishekh.vercel.app',
 featured: false,
 role: 'Full Stack Engineer',
 duration: '3.5 Months'
 },
 {
 _id: 'mem-project-5',
 title: 'Weather Dashboard',
 subtitle: 'Dynamic weather portal with statistics & charts',
 description: 'An aesthetic dashboard plotting historical and current weather parameters across global locations, with interactive hourly chart logs.',
 longDescription: 'This frontend-driven dashboard connects to OpenWeather APIs, aggregates meteorological stats, saves search logs within local storage, and plots wind/humidity patterns using ChartJS.',
 image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop',
 tags: ['React', 'Tailwind CSS', 'ChartJS', 'OpenWeather API'],
 features: [
 'Real-time temperature, UV, and pressure tracker with geocoding locator',
 'Custom graphs visualising hourly temperature shifts and weekly trends',
 'In-browser memory caching of city outputs reducing API request thresholds',
 'Animated weather card displays changing backgrounds in line with current conditions'
 ],
 architectureDiagram: 'Vite React UI -> LocalStorage (Cache) -> OpenWeather Maps API Proxy',
 apiFlow: [
 'GET /api/weather/search?city=NAME - Direct search using weather coordinates maps',
 'GET /api/weather/forecast - 5-day forecast aggregates mapping hourly blocks'
 ],
 databaseDesign: 'Client-side LocalStorage cache mapping city search strings to JSON data packages with 30-minute expiry timestamps.',
 challengesSolved: 'Mitigated API key exposure risks by configuring custom backend serverless proxy routes, shielding keys from network logs.',
 performanceOptimizations: 'Used responsive Tailwind classes for perfect styling. Bundle sizes are optimized via lazy loading of heavy graph elements.',
 futureImprovements: ['Add extreme weather alerts push alerts', 'Radar map visualisations overlay', 'Add comparative weather layout widgets'],
 githubUrl: 'https://github.com/abhishekh-developer/weather-tracker',
 liveUrl: 'https://weather-tracker-abhishekh.vercel.app',
 featured: false,
 role: 'Frontend Developer',
 duration: '1.5 Months'
 }
];
