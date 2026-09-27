// ============================================================
// PORTFOLIO DATA - Central configuration for all content
// ============================================================

// CV configuration — root-relative path served from public/
export const CV_URL = '/H.M.S.B.%20Rajarathna.pdf';

// Contact & Profile Information
export const CONTACT = {
  email: 'rajarathnasarasi@gmail.com',
  phone: '+94 71 630 3309',
  github: 'https://github.com/SarasiRajarathna',
  linkedin: 'https://linkedin.com/in/sarasi-rajarathna-b467b634a/',
  location: 'Sabaragamuwa University of Sri Lanka',
  medium: 'https://medium.com/@rajarathnasarasi',
  behance: 'https://www.behance.net/sarasirajarat',
};

// ============================================================
// EDUCATION DATA
// ============================================================
export const education = [
  {
    institution: 'Sabaragamuwa University of Sri Lanka',
    degree: 'BSc (Hons) in Information Systems',
    status: '3rd-year undergraduate',
    period: '2024 – Present',
    details: 'Faculty of Computing',
  },
  {
    institution: 'Swarnapali Balika National School, Anuradhapura',
    degree: 'G.C.E. Advanced Level (2022)',
    status: 'Physical Science Stream (3C passes)',
    period: '2008 – 2022',
    details: 'Primary & Secondary Education',
  },
];

// ============================================================
// SKILLS DATA
// ============================================================
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend & Languages',
    skills: [
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Java', icon: '☕' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'jQuery', icon: '💲' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'PHP', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'SQL', icon: '🗄️' },
    ],
  },
  {
    id: 'design',
    label: 'UI/UX Design',
    skills: [
      { name: 'Wireframing', icon: '📐' },
      { name: 'Prototyping', icon: '🔗' },
      { name: 'User Flows', icon: '🗺️' },
      { name: 'Responsive Design', icon: '📱' },
      { name: 'Figma', icon: '🎭' },
      { name: 'Canva', icon: '🖌️' },
      { name: 'Adobe Illustrator', icon: '🖊️' },
      { name: 'Adobe Photoshop', icon: '📷' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Supabase', icon: '🔋' },
      { name: 'Postman', icon: '📮' },
      { name: 'VS Code', icon: '💻' },
      { name: 'IntelliJ IDEA', icon: '🧠' },
      { name: 'JIRA', icon: '🗺️' },
      { name: 'Trello', icon: '🎯' },
    ],
  },
  {
    id: 'soft-skills',
    label: 'Soft Skills',
    skills: [
      { name: 'Teamwork', icon: '🤝' },
      { name: 'Leadership', icon: '👑' },
      { name: 'Communication Skills', icon: '💬' },
      { name: 'Flexibility', icon: '🔄' },
      { name: 'Adaptability', icon: '🌱' },
      { name: 'Critical Thinking', icon: '💡' },
    ],
  },
];

// ============================================================
// PROJECTS DATA
// Reorganized into: Full-Stack, Frontend, UI/UX
// ============================================================
export const projects = [
  // ── FULL-STACK PROJECTS ─────────────────────────────────────
  // 1. GovCare.lk (Full-Stack Application)
  {
    id: 'govcare',
    title: 'GovCare.lk',
    subtitle: 'Sri Lankan Government Hospital Appointment Booking System',
    category: 'full-stack',
    type: 'development',
    projectType: 'Group Project',
    status: 'Completed',
    description:
      'A platform designed to digitalize the appointment booking process in Sri Lankan government hospitals with frontend, backend, and database integration.',
    overview:
      'GovCare.lk digitalizes the outpatient appointment booking process across government hospitals in Sri Lanka, reducing physical waiting queues and optimizing doctor consultation schedules.',
    problem:
      'Patients in Sri Lanka endure long physical queues at public hospitals, with no prior appointment scheduling or capacity visibility.',
    solution:
      'A full-stack web application that allows patients to select hospitals, choose medical departments, and book appointments remotely with database-backed status tracking.',
    contribution: 'Frontend development, backend REST API integration, and database schema implementation.',
    technologies: ['Next.js', 'Express.js', 'Node.js', 'PostgreSQL / Supabase', 'Tailwind CSS'],
    features: [
      'Digital hospital appointment booking workflow',
      'Doctor schedule management and clinic allocation',
      'Hospital and specialty department directories',
      'Real-time appointment status verification',
      'Secure database management with Supabase & PostgreSQL',
    ],
    github: 'https://github.com/Yoosuf01/govcare-hospital-appointment-system.git',
    live: 'https://govcare-hospital-appointment-system.vercel.app/',
    figma: null,
    prototype: null,
    imageAlt: 'GovCare.lk Hospital Appointment Booking System',
  },

  // 2. Veloura Watches
  {
    id: 'veloura',
    title: 'Veloura Watches',
    subtitle: 'Full-Stack E-Commerce Platform',
    category: 'full-stack',
    type: 'development',
    projectType: 'Individual Project',
    status: 'Completed',
    description:
      'A full-stack e-commerce platform for premium watches, featuring product browsing, user authentication, shopping cart management, and a responsive interface built with the MERN stack.',
    overview:
      'Veloura Watches provides an elegant, luxury e-commerce experience tailored for timepiece enthusiasts. Built with the full MERN stack, the application includes catalog exploration, dynamic filters, user profiles, persistent shopping carts, and order workflows.',
    problem:
      'Online luxury retailers require smooth, trustworthy, and visually refined interfaces with seamless cart and authentication management.',
    solution:
      'A responsive e-commerce web application featuring high-end visual styling, reliable state management, and full RESTful backend integration.',
    contribution: 'Full-stack development — React frontend UI, Express/Node REST API, MongoDB data modeling, and authentication.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN'],
    features: [
      'Interactive product browsing with price & category filtering',
      'User registration and secure session authentication',
      'Dynamic shopping cart management with quantity adjustments',
      'Order checkout flow and summary calculations',
      'Responsive design across mobile, tablet, and desktop',
    ],
    github: 'https://github.com/SarasiRajarathna/Veloura---Watches',
    live: null,
    figma: null,
    prototype: null,
    imageAlt: 'Veloura Watches E-Commerce Platform',
  },

  // 3. FixMyCity.lk (Ongoing)
  {
    id: 'fixmycity',
    title: 'FixMyCity.lk',
    subtitle: 'Smart Civic Issue-Reporting Platform',
    category: 'full-stack',
    type: 'development',
    projectType: 'Individual Project',
    status: 'Ongoing Project',
    description:
      'A smart civic issue-reporting platform that connects citizens with relevant authorities to resolve public infrastructure problems.',
    overview:
      'FixMyCity.lk is a civic technology platform that empowers citizens to report everyday infrastructure problems — such as potholes, malfunctioning streetlights, and waste management issues — directly to the responsible local municipal councils with real-time tracking.',
    problem:
      'Citizens in urban and rural areas struggle to report public infrastructure defects easily, and authorities lack centralized, trackable issue management.',
    solution:
      'A streamlined web application where citizens can log geo-located issues with photos, and municipal authorities can view, prioritize, and update the resolution status transparently.',
    contribution: 'End-to-end full-stack architecture, UI design, API development, and database schema.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN'],
    features: [
      'Smart civic issue reporting with categorization',
      'Location and description submission',
      'Direct routing to municipal authorities',
      'Real-time status tracking for citizens',
      'Centralized admin dashboard for issue resolution',
    ],
    github: 'https://github.com/SarasiRajarathna/FixMyCity.lk.git',
    live: null,
    figma: null,
    prototype: null,
    imageAlt: 'FixMyCity.lk Civic Issue Reporting Platform',
  },

  // 4. AgroGuard-AI
  {
    id: 'agroguard',
    title: 'AgroGuard-AI',
    subtitle: 'AI-Powered Early Warning System for Crop Disease',
    category: 'full-stack',
    type: 'development',
    projectType: 'Group Project',
    status: 'Completed',
    description:
      'An AI-powered crop disease early-warning system that analyzes crop images, weather conditions, and regional case data to detect diseases and assess outbreak risks, featuring multilingual farmer advisories, officer verification, and regional outbreak alerts.',
    overview:
      'AgroGuard-AI leverages Gemini Vision AI and meteorological APIs to provide rapid, accurate crop pathology identification for farmers, coupled with officer verification and localized outbreak warnings.',
    problem:
      'Delayed identification of crop diseases leads to significant agricultural losses and lack of early warning for surrounding farms.',
    solution:
      'A responsive platform enabling farmers to upload plant images, receive instant AI diagnosis with treatment advisories in their local language, and trigger regional alerts.',
    contribution: 'Frontend UI development, AI API integration (Gemini Vision), and officer verification workflow.',
    technologies: ['React.js', 'Express.js', 'Node.js', 'PostgreSQL / Supabase', 'Tailwind CSS', 'Gemini Vision AI'],
    features: [
      'Crop image disease diagnosis powered by Gemini Vision AI',
      'Weather condition analysis and regional outbreak assessment',
      'Multilingual farmer advisories for immediate treatment',
      'Agricultural officer verification and validation pipeline',
      'Regional outbreak mapping and notification alerts',
    ],
    github: 'https://github.com/SarasiRajarathna/AgroGuard-AI',
    live: null,
    figma: null,
    prototype: null,
    imageAlt: 'AgroGuard-AI Crop Disease Early Warning System',
  },

  // ── FRONTEND PROJECTS ───────────────────────────────────────
  // 5. ORIXA
  {
    id: 'orixa',
    title: 'ORIXA',
    subtitle: 'Futuristic Transportation Platform – Transportation 2100',
    category: 'frontend',
    type: 'development',
    projectType: 'Group Project',
    status: 'Completed',
    description:
      'Designed and developed a futuristic transportation platform for Transportation 2100, integrating multiple transportation modes into a unified journey-planning experience. The platform enables users to search and plan journeys, explore optimized routes, track transportation, view interactive maps, and manage travel preferences.',
    overview:
      'ORIXA explores next-generation mobility for the year 2100. It consolidates multiple futuristic transit modes — autonomous sky-capsules, magnetic hyperloops, and smart urban shuttles — into a cohesive, highly accessible journey planner.',
    problem:
      'Complex multi-modal transit systems often lack unified planning tools that give travelers clear, intuitive navigation and real-time tracking.',
    solution:
      'A sleek, futuristic user experience focusing on accessibility, route optimization, interactive transit maps, and customized travel preferences.',
    contribution: 'Frontend development, interactive components, responsive layout, and UI/UX design execution.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    features: [
      'Multi-modal journey planning and search',
      'Optimized route calculation and travel times',
      'Interactive transit maps and vehicle tracking',
      'User travel preferences and route customization',
      'High accessibility and modern futuristic UI/UX',
    ],
    github: 'https://github.com/ORIXA-transportation-platform/ORIXA.git',
    live: 'https://orixa-smartcity.vercel.app/home',
    figma: null,
    prototype: null,
    imageAlt: 'ORIXA Futuristic Transportation Platform',
  },

  // 6. Vita-Derma
  {
    id: 'vitaderma',
    title: 'Vita-Derma',
    subtitle: 'Responsive Skin Clinic Website',
    category: 'frontend',
    type: 'development',
    projectType: 'Individual Project',
    status: 'Completed',
    description:
      'A responsive skin clinic website designed to provide users with information about dermatology services, clinic details, locations, and contact options.',
    overview:
      'Vita-Derma is a front-end clinic website designed to provide patients with clear, accessible healthcare information, treatment details, practitioner credentials, and convenient consultation inquiries.',
    problem:
      'Patients often struggle to find clear information regarding clinic specialties, doctor schedules, and treatment costs on outdated clinic websites.',
    solution:
      'A calming, professional healthcare UI that organizes treatments clearly, builds patient trust, and simplifies appointment queries.',
    contribution: 'UI design and front-end development using semantic HTML, custom CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Dermatology and skincare treatment showcases',
      'Clinic location details and opening hours',
      'Consultation and inquiry contact interface',
      'Accessible, mobile-optimized responsive layout',
    ],
    github: 'https://github.com/SarasiRajarathna/Vita-Derma',
    live: null,
    figma: null,
    prototype: null,
    imageAlt: 'Vita-Derma Skin Clinic Website',
  },

  // 7. CalculatorHub
  {
    id: 'calculatorhub',
    title: 'CalculatorHub',
    subtitle: 'Responsive Multi-Category Web Calculator Hub',
    category: 'frontend',
    type: 'development',
    projectType: 'Individual Project',
    status: 'Completed',
    description:
      'A responsive web-based calculator hub offering a collection of specialized calculators for finance, fitness, mathematics, statistics, and other everyday calculations.',
    overview:
      'CalculatorHub (CalCor) is an all-in-one utility application offering specialized computational tools in an intuitive, accessible layout without requiring external software.',
    problem:
      'Users frequently need to switch between different websites and tools to perform financial, health, and academic calculations.',
    solution:
      'A consolidated, high-performance web platform grouping calculations into dedicated, easy-to-use modules.',
    contribution: 'Complete front-end architecture, mathematical logic implementation, and responsive UI design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Multi-category computation suite (Finance, Fitness, Mathematics, Statistics)',
      'Immediate calculation results with input validation',
      'Clean, distraction-free user interface',
      'Lightweight and fully responsive for all screen sizes',
    ],
    github: 'https://github.com/SarasiRajarathna/calculatorhub-FE',
    live: null,
    figma: null,
    prototype: null,
    imageAlt: 'CalculatorHub - Multi-Category Calculator',
  },

  // ── UI/UX DESIGN PROJECTS ───────────────────────────────────
  // 8. GovCare.lk (UI/UX Design Work)
  {
    id: 'govcare-uiux',
    title: 'GovCare.lk',
    subtitle: 'Hospital Appointment Booking System — UI/UX Design',
    category: 'ui-ux',
    type: 'design',
    projectType: 'UI/UX Design Project',
    status: 'Completed',
    description:
      'Comprehensive UI/UX design and wireframing for the Sri Lankan Government Hospital Appointment Booking System, designed to streamline outpatient visits and patient experience.',
    overview:
      'The GovCare.lk design focuses on high accessibility, bilingual clarity, and an intuitive booking process designed for citizens across diverse demographic backgrounds in Sri Lanka.',
    problem:
      'Complex medical booking processes with unclear terminology lead to friction and high abandonment rates among everyday citizens.',
    solution:
      'A clean, accessible Figma design system featuring user-friendly workflows, distinct clinic categorizations, and mobile-first responsiveness.',
    contribution: 'User research, wireframing, high-fidelity UI design, and responsive design systems in Figma.',
    technologies: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design System'],
    features: [
      'User-centric appointment booking workflow',
      'High-contrast accessible color palette',
      'Department and specialist discovery flows',
      'Mobile & tablet responsive layouts',
      'Component library & design token system',
    ],
    github: null,
    live: null,
    figma:
      'https://www.figma.com/design/J0AnTLjSOrsil3OcbIk2bz/GovCare.lk?node-id=0-1&t=oWceFCmH0MWnInt9-1',
    buttonText: 'View Figma Design',
    prototype: null,
    imageAlt: 'GovCare.lk UI/UX design',
  },

  // 9. LankaWay
  {
    id: 'lankaway',
    title: 'LankaWay',
    subtitle: 'Sri Lankan Travel & Tourism Mobile UI Design',
    category: 'ui-ux',
    type: 'design',
    projectType: 'UI/UX Design Project',
    status: 'Completed',
    description:
      "A modern travel and exploration platform design showcasing Sri Lanka's scenic destinations, travel routes, and cultural experiences.",
    overview:
      'LankaWay is a mobile-focused travel experience design connecting travelers with curated destinations, cultural landmarks, and seamless itinerary planning.',
    problem:
      'Tourists often struggle to find unified, authentic travel recommendations and route navigation tailored to Sri Lanka.',
    solution:
      'An immersive visual design with rich photography integration, curated category cards, and effortless itinerary booking.',
    contribution: 'End-to-end UI design, visual aesthetics, typography selection, and mobile interaction design in Figma.',
    technologies: ['Figma', 'UI/UX Design', 'Mobile Design', 'User Flows', 'Wireframing'],
    features: [
      'Destination discovery with curated recommendations',
      'Interactive travel route planning interface',
      'Cultural attraction highlights and travel tips',
      'Clean mobile navigation and typography',
      'Modern visual aesthetic tailored to tourism',
    ],
    github: null,
    live: null,
    figma: 'https://www.figma.com/design/pIESsukWlQJPEX5BCeeXnG/LankaWay?t=oWceFCmH0MWnInt9-1',
    buttonText: 'View Figma Design',
    prototype: null,
    imageAlt: 'LankaWay UI/UX design',
  },

  // 10. Sri Lanka Railways – Case Study (Ongoing)
  {
    id: 'railways-case-study',
    title: 'Sri Lanka Railways – Case Study',
    subtitle: 'Digital Railway Ticketing & Scheduling System',
    category: 'ui-ux',
    type: 'design',
    projectType: 'UI/UX Case Study',
    status: 'Ongoing Project',
    description:
      'A comprehensive UI/UX case study and design initiative modernizing the Sri Lanka Railways train booking, schedule lookup, and ticketing experience.',
    overview:
      'This case study investigates the pain points of Sri Lankan train commuters and reimagines the ticketing and seat reservation experience with modern digital flows.',
    problem:
      'Commuters encounter difficulty checking live train timings, seat availability, and reserving tickets without standing in prolonged station lines.',
    solution:
      'A centralized digital railway ticketing interface featuring schedule exploration, live seat selection, and digital ticket passes.',
    contribution: 'User research, empathy mapping, user journey modeling, wireframing, and interactive UI design in Figma.',
    technologies: ['Figma', 'Case Study', 'UI/UX Design', 'User Research', 'Wireframing'],
    features: [
      'Intuitive train schedule lookup by station pairs',
      'Interactive seat reservation and class selection',
      'Digital QR ticket pass interface',
      'Station directory and delay alert system',
      'Accessible user experience for all commuter ages',
    ],
    github: null,
    live: null,
    figma:
      'https://www.figma.com/design/WetcjqsuSptPLvgkoMnLEf/Sri-Lanka-Railways---Case-Study?t=oWceFCmH0MWnInt9-1',
    buttonText: 'View Figma Design',
    prototype: null,
    imageAlt: 'Sri Lanka Railways case study',
  },

  // 11. RideGo
  {
    id: 'ridego',
    title: 'RideGo',
    subtitle: 'Ride-Hailing & Mobility UI Wireframe',
    category: 'ui-ux',
    type: 'design',
    projectType: 'UI/UX Design Project',
    status: 'Completed',
    description:
      'User interface and wireframe design for RideGo, a streamlined on-demand ride-hailing and transportation mobile application.',
    overview:
      'RideGo provides a friction-free booking journey for daily commuters, incorporating upfront fare estimation, vehicle class choices, and live route tracking.',
    problem:
      'Ride-hailing apps can become cluttered with extraneous promotional items that obscure essential pickup and destination information.',
    solution:
      'A focused, distraction-free wireframe and interface emphasizing immediate pickup booking, driver details, and transparent pricing.',
    contribution: 'Low-fidelity wireframing, user interaction flow, and high-fidelity interface design in Figma.',
    technologies: ['Figma', 'UI/UX Design', 'Wireframing', 'Mobile App Design', 'Prototyping'],
    features: [
      'Fast pickup and destination input flow',
      'Vehicle class selection with real-time price estimation',
      'Driver profile and arrival tracking layout',
      'Ride history and payment method management',
      'Crisp dark/light contrasting UI components',
    ],
    github: null,
    live: null,
    figma: 'https://www.figma.com/design/yAvcQCWd9ZdVurlesmzemR/RideGo-UI---Wireframe?t=oWceFCmH0MWnInt9-1',
    buttonText: 'View Figma Design',
    prototype: null,
    imageAlt: 'RideGo wireframe design',
  },
];

// ============================================================
// EXTRACURRICULAR & EXPERIENCE (Timeline)
// ============================================================
export const experiences = [
  {
    id: 'coderally-2026',
    type: 'achievement',
    period: '2026',
    role: 'Beginner Tier – Runner-Up',
    organization: 'CodeRally 7.0 — IEEE Computer Society, Informatics Institute of Technology',
    description:
      'Achieved Runner-Up in the Beginner Tier at CodeRally 7.0, an inter-university hackathon and algorithmic coding competition organized by the IEEE Computer Society of Informatics Institute of Technology.',
    skills: ['Competitive Programming', 'Problem Solving', 'Algorithms', 'Teamwork'],
    icon: '🏆',
  },
  {
    id: 'codearena-2026',
    type: 'achievement',
    period: '2026',
    role: 'Finalist',
    organization: "CodeArena'26 — IET On Campus KDU",
    description:
      "Selected as a Finalist in CodeArena'26, a competitive programming competition organized by IET On Campus at General Sir John Kotelawala Defence University.",
    skills: ['Competitive Programming', 'Algorithms', 'Data Structures', 'Critical Thinking'],
    icon: '🎯',
  },
  {
    id: 'socs-writer-2025',
    type: 'leadership',
    period: '2025',
    role: 'Volunteer Content Writer',
    organization: 'Society of Computer Science, Sabaragamuwa University of Sri Lanka',
    description:
      'Contributed as a volunteer content writer for the Society of Computer Science, creating technical articles, event documentation, and community publications.',
    skills: ['Content Writing', 'Communication Skills', 'Technical Writing', 'Collaboration'],
    icon: '✍️',
  },
  {
    id: 'rotaract-sdg-2025',
    type: 'leadership',
    period: '2025',
    role: 'Volunteer Contribution',
    organization: 'SDG Task Force Project — Rotaract Club of Sabaragamuwa University of Sri Lanka',
    description:
      'Actively contributed as a volunteer to the Sustainable Development Goals (SDG) Task Force Project, supporting community initiatives and awareness campaigns.',
    skills: ['Volunteering', 'Teamwork', 'Project Coordination', 'Community Engagement'],
    icon: '🌱',
  },
  {
    id: 'pearlhack-2024',
    type: 'leadership',
    period: '2024',
    role: 'Secretary Team Member',
    organization: 'PearlHack V3.0 — WIE, Sabaragamuwa University of Sri Lanka',
    description:
      'Served as a core Secretary Team Member for PearlHack V3.0, the flagship hackathon organized by IEEE Women in Engineering (WIE) Student Branch Affinity Group of SUSL.',
    skills: ['Leadership', 'Event Management', 'Coordination', 'Communication'],
    icon: '⚡',
  },
];

// ============================================================
// CERTIFICATIONS, ACHIEVEMENTS & EXTRACURRICULAR (Filterable Card Grid)
// Categories: certifications | achievements | extracurricular
// ============================================================
export const achievements = [
  // ── 1. CERTIFICATIONS ──────────────────────────────────────
  {
    id: 'cert-mern',
    category: 'certifications',
    type: 'certifications',
    title: 'MERN Dynamic Web Development Program',
    organization: 'Institute of Digital Engineering Technology (IDET)',
    subtitle: 'Institute of Digital Engineering Technology (IDET)',
    description:
      'Comprehensive program covering full-stack web application development using MongoDB, Express.js, React, and Node.js.',
    year: 'Certified',
    icon: '⚛️',
    link: 'https://drive.google.com/file/d/13UmSf7lK_zXT7YlTbmzJ3CkZJtTsH3x9/view?usp=drive_link',
    buttonText: 'View Certificate',
    image: null,
  },
  {
    id: 'cert-aws-cloud',
    category: 'certifications',
    type: 'certifications',
    title: 'Cloud Operations And AWS Practitioner Program',
    organization: 'Institute of Digital Engineering Technology (IDET)',
    subtitle: 'Institute of Digital Engineering Technology (IDET)',
    description:
      'Specialized training in cloud architecture, AWS core services, infrastructure management, and cloud operations.',
    year: 'Certified',
    icon: '☁️',
    link: 'https://drive.google.com/file/d/1zYI41sN5KwBRKAaBkeeQCybkhonPlldE/view?usp=drive_link',
    buttonText: 'View Certificate',
    image: null,
  },
  {
    id: 'cert-ai-ml',
    category: 'certifications',
    type: 'certifications',
    title: 'Artificial Intelligence & Machine Learning Certification',
    organization: 'SKYREK Institute',
    subtitle: 'SKYREK Institute',
    description:
      'Certification program covering foundational and applied concepts in artificial intelligence, machine learning algorithms, and intelligent systems.',
    year: 'Certified',
    icon: '🤖',
    link: 'https://drive.google.com/file/d/16nkXH3yWEtoq8aGup70plD0fPkyqgy8Z/view?usp=drive_link',
    buttonText: 'View Certificate',
    image: null,
  },
  {
    id: 'cert-certdirectory',
    category: 'certifications',
    type: 'certifications',
    title: 'CertDirectory Credentials',
    organization: 'CertDirectory',
    subtitle: 'Professional Skill Verification',
    description: 'Verified professional skill credentials recognized via the CertDirectory platform.',
    year: 'Verified',
    icon: '📜',
    link: 'https://credentials.certdirectory.io/u/sarasi-rajarathna',
    buttonText: 'View Credentials',
    image: null,
  },
  {
    id: 'cert-uom-frontend',
    category: 'certifications',
    type: 'certifications',
    title: 'Front-End Web Development',
    organization: 'University of Moratuwa – Open Learning Platform',
    subtitle: 'University of Moratuwa – Open Learning Platform',
    description:
      'Comprehensive training in modern front-end web standards, responsive design principles, and client-side web development.',
    year: 'Completed',
    icon: '💻',
    link: 'https://www.linkedin.com/posts/sarasi-rajarathna-b467b634a_thrilled-to-share-that-ive-successfully-activity-7359463869838180352-J4lD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFdT3eYBxgFwSuvejIEfold1Z9PlmHsVc38',
    buttonText: 'View Certificate',
    image: null,
  },
  {
    id: 'cert-uom-webdesign',
    category: 'certifications',
    type: 'certifications',
    title: 'Web Design for Beginners',
    organization: 'University of Moratuwa – Open Learning Platform',
    subtitle: 'University of Moratuwa – Open Learning Platform',
    description:
      'Foundational course in web design aesthetics, HTML/CSS structuring, UI layout techniques, and web usability.',
    year: 'Completed',
    icon: '🎨',
    link: 'https://www.linkedin.com/posts/sarasi-rajarathna-b467b634a_certificate-achievement-thrilled-to-activity-7333094114189565952-05an?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFdT3eYBxgFwSuvejIEfold1Z9PlmHsVc38',
    buttonText: 'View Certificate',
    image: null,
  },

  // ── 2. ACHIEVEMENTS ─────────────────────────────────────────
  {
    id: 'achieve-coderally',
    category: 'achievements',
    type: 'achievements',
    title: 'Beginner Tier – Runner-Up',
    organization: 'CodeRally 7.0 — IEEE Computer Society, Informatics Institute of Technology',
    subtitle: 'CodeRally 7.0 — IEEE Computer Society, IIT',
    description:
      'Achieved Runner-Up in the Beginner Tier at CodeRally 7.0, an inter-university hackathon and algorithmic coding competition organized by the IEEE Computer Society of IIT.',
    year: '2026',
    icon: '🏆',
    link: null,
    buttonText: null,
    image: null,
    imageAlt: 'CodeRally 7.0 Beginner Tier Runner-Up Achievement',
  },
  {
    id: 'achieve-codearena',
    category: 'achievements',
    type: 'achievements',
    title: 'Finalist',
    organization: "CodeArena'26 — IET On Campus KDU",
    subtitle: "CodeArena'26 — IET On Campus KDU",
    description:
      "Selected as a Finalist in CodeArena'26, an inter-university competitive programming contest organized by IET On Campus at General Sir John Kotelawala Defence University.",
    year: '2026',
    icon: '🎯',
    link: null,
    buttonText: null,
    image: null,
    imageAlt: "CodeArena'26 Finalist Achievement",
  },

  // ── 3. EXTRACURRICULAR ──────────────────────────────────────
  {
    id: 'extra-socs',
    category: 'extracurricular',
    type: 'extracurricular',
    title: 'Volunteer Content Writer',
    organization: 'Society of Computer Science, Sabaragamuwa University of Sri Lanka',
    subtitle: 'Society of Computer Science, Sabaragamuwa University of Sri Lanka',
    description:
      'Contributed as a volunteer content writer for the Society of Computer Science, creating technical articles, event documentation, and community publications.',
    year: '2025',
    icon: '✍️',
    link: null,
    buttonText: null,
    image: null,
    imageAlt: 'Volunteer Content Writer at Society of Computer Science',
  },
  {
    id: 'extra-rotaract',
    category: 'extracurricular',
    type: 'extracurricular',
    title: 'Volunteer Contribution',
    organization: 'SDG Task Force Project — Rotaract Club of Sabaragamuwa University of Sri Lanka',
    subtitle: 'SDG Task Force Project — Rotaract Club of SUSL',
    description:
      'Actively contributed as a volunteer to the Sustainable Development Goals (SDG) Task Force Project, supporting community initiatives and awareness campaigns.',
    year: '2025',
    icon: '🌱',
    link: null,
    buttonText: null,
    image: null,
    imageAlt: 'Volunteer Contribution for SDG Task Force Project',
  },
  {
    id: 'extra-pearlhack',
    category: 'extracurricular',
    type: 'extracurricular',
    title: 'Secretary Team Member',
    organization: 'PearlHack V3.0 — WIE, Sabaragamuwa University of Sri Lanka',
    subtitle: 'PearlHack V3.0 — WIE, Sabaragamuwa University of Sri Lanka',
    description:
      'Served as a core Secretary Team Member for PearlHack V3.0, the flagship hackathon organized by IEEE Women in Engineering (WIE) Student Branch Affinity Group of SUSL.',
    year: '2024',
    icon: '⚡',
    link: null,
    buttonText: null,
    image: null,
    imageAlt: 'Secretary Team Member at PearlHack V3.0',
  },
];
