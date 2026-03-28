// ============================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

export const profile = {
  // Basic Info
  name: {
    first: 'Manish',
    last: 'Srivastav',
  },
  title: 'Backend Developer & AI Engineer',
  email: 'msrivastavmanish@gmail.com',
  logo: 'MS', // Short logo text for navbar
  tagline: '.dev',
  
  // Profile Image (place in /public folder)
  image: '/IMG_4746.JPG',
  
  // Resume (place in /public folder)
  resume: '/Manish_Srivastav_s_resume.pdf',
  
  // Status badge
  status: 'Available for opportunities',
  
  // Hero subtitle tags
  tags: ['🏆 Hackathon Winner', '👥 Team Lead', '⚙️ AI & Backend Dev'],
  
  // Hero description (use <span className="text-white font-medium">word</span> for emphasis)
  description: `I architect scalable backend systems and engineer AI-powered applications that drive real-world impact. I lead teams, ship full-stack solutions, and thrive under high-pressure hackathon conditions.`,
  
  // Quick stats in hero
  stats: [
    { val: '2+', label: 'Hackathons' },
    { val: '3+', label: 'Projects' },
    { val: '2', label: 'Internships' },
  ],
  
  // Achievement badge below profile image
  featuredBadge: '🏆 Top 3 — Dev Clash Hackathon, NIT Raipur',
};

export const social = {
  github: {
    username: 'Roxtop07',
    url: 'https://github.com/Roxtop07',
  },
  linkedin: {
    name: 'Manish Srivastav',
    url: 'https://www.linkedin.com/in/manish-kumar-srivastav/',
  },
};

export const projects = [
  {
    title: 'AbhayParth',
    badge: '🏆 Top 3 — NIT Raipur',
    description:
      'Led a team of 3 to architect and ship a full-stack solution during a 12-hour national-level hackathon at NIT Raipur, securing a Top 3 finish. Spearheaded backend design, engineered core APIs, and directed rapid system architecture under intense time pressure.',
    role: 'Team Lead',
    tech: ['Full Stack', 'REST APIs', 'System Design'],
    github: 'https://github.com/Roxtop07/AbhayParth',
    highlight: true,
  },
  {
    title: 'KLH HackWithAI',
    badge: '🥇 Top 20 — KLH University',
    description:
      'Directed a 4-person team through a 24-hour AI hackathon, delivering a production-ready AI-backed system that secured a Top 20 position. Designed the scalable backend foundation and coordinated cross-functional execution across ML and frontend tracks.',
    role: 'Team Lead',
    tech: ['AI/ML', 'Backend Systems', 'Python'],
    github: 'https://github.com/MithunKumarRajak/KLH-Hackathon',
    highlight: false,
  },
  {
    title: 'Resume Screener AI',
    badge: null,
    description:
      'Engineered an intelligent backend AI system that parses, analyzes, and scores resumes using modular Python pipelines. Implemented PDF extraction logic combined with ML-driven scoring to automate candidate filtering with measurable accuracy.',
    role: 'Solo Developer',
    tech: ['Python', 'ML', 'PDF Parsing', 'Backend'],
    github: 'https://github.com/Roxtop07/resume-screener-ai',
    highlight: false,
  },
];

export const skills = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Python', 'Django', 'Flask', 'REST APIs'],
    accent: true,
  },
  {
    category: 'AI / ML',
    icon: '🧠',
    skills: ['LSTM', 'NLP', 'scikit-learn', 'ML Pipelines'],
    accent: false,
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['Next.js', 'React', 'Tailwind CSS'],
    accent: false,
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL'],
    accent: false,
  },
  {
    category: 'Core',
    icon: '🔩',
    skills: ['DSA', 'DBMS', 'System Design'],
    accent: false,
  },
];

export const experiences = [
  {
    role: 'Software Development Intern',
    focus: 'ML Systems',
    company: 'Elevate Labs',
    type: 'AI & ML Internship',
    period: 'Internship',
    bullets: [
      'Engineered scalable data pipelines to streamline ML model ingestion and preprocessing',
      'Evaluated and benchmarked ML model performance across multiple datasets to improve accuracy metrics',
      'Developed and maintained backend systems supporting AI inference workflows in production',
    ],
    tech: ['Python', 'ML', 'Data Pipelines', 'Backend'],
  },
  {
    role: 'Full Stack Developer Intern',
    focus: null,
    company: 'Snestron Systems',
    type: 'Full Stack Internship',
    period: 'Internship',
    bullets: [
      'Implemented full-stack features end-to-end using Django REST framework and React',
      'Designed and integrated REST APIs connecting backend services to dynamic frontend components',
      'Collaborated with cross-functional teams to ship production-ready features on tight schedules',
    ],
    tech: ['Django', 'React', 'REST APIs', 'Full Stack'],
  },
];

export const achievements = [
  {
    icon: '🏆',
    title: 'Top 3 — Dev Clash Hackathon',
    org: 'NIT Raipur',
    desc: 'Competed against top national engineering teams, leading a 3-person squad to architect and deliver a full-stack solution in 12 hours.',
    highlight: true,
    proof: '/NIT_winning.jpg',
  },
  {
    icon: '🥇',
    title: 'Top 20 — HackWithAI',
    org: 'KLH University',
    desc: 'Directed a 4-person team through a 24-hour AI hackathon, delivering a scalable AI-backed solution that ranked in the Top 20.',
    highlight: false,
    proof: '/Tech Stacker(KLH).pdf',
  },
  {
    icon: '💡',
    title: 'Industrial Ideathon',
    org: 'NSUT',
    desc: 'Participated in Industrial Ideathon, showcasing innovative problem-solving and ideation skills in a competitive environment.',
    highlight: false,
    proof: '/Inovation_Ideation.pdf',
  },
  {
    icon: '🏆',
    title: 'Organizer — Lakecity Hack',
    org: 'Jagran Lakecity University',
    desc: 'Organized Lakecity Hack, contributing to event coordination, execution, and overall success. Demonstrated leadership, planning, and team management skills in a large-scale technical event.',
    highlight: false,
    proof: '/OrganizerLakecityHack.JPG',
  },
  {
    icon: '🤝',
    title: 'Volunteer — Hack 4 Hire 2.0',
    org: 'Logistics Team',
    desc: 'Volunteered as part of the logistics team for Hack 4 Hire 2.0, ensuring smooth coordination and execution of the event. Contributed to delivering a structured and engaging experience for participants.',
    highlight: false,
    proof: '/VolH4H.JPG',
  },
  {
    icon: '🧠',
    title: 'SISTec Innovation Hackathon',
    org: 'SISTec',
    desc: 'Participated in SISTec Innovation Hackathon 3.0, gaining experience in real-world problem solving and collaborative development.',
    highlight: false,
    proof: '/SISTechHackathon.jpg',
  },
  {
    icon: '🤖',
    title: 'AI & ML Internship',
    org: 'Elevate Labs',
    desc: 'Selected to engineer ML systems and data pipelines, gaining hands-on production experience in applied machine learning.',
    highlight: false,
    proof: '/ML_internship.jpeg',
  },
  {
    icon: '💻',
    title: 'Full Stack Internship',
    org: 'Snestron Systems',
    desc: 'Contributed as a full-stack developer, building and shipping real product features using Django, React, and REST APIs.',
    highlight: false,
    proof: '/Full-Stack-Certificate.pdf',
  },
];

export const certifications = [
  {
    title: 'Solutions Architecture Simulation',
    issuer: 'Forage (AWS)',
    icon: '☁️',
    pdf: '/AWS Completion Certificate.pdf',
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Deloitte',
    icon: '🏢',
    pdf: '/Deloitte Completion Certificate.pdf',
  },
  {
    title: 'Linux Basics',
    issuer: 'KodeKloud',
    icon: '🐧',
    pdf: '/LinuxCertification.pdf',
  },
  {
    title: 'Cloud Computing',
    issuer: 'IBM / Coursera',
    icon: '☁️',
    pdf: '/IBM.pdf',
  },
];

// Navigation links
export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

// Contact section text
export const contactText = {
  heading: 'Ready to Collaborate?',
  subheading: "I'm actively seeking opportunities to build, contribute, and grow. Whether it's a backend challenge, an AI problem, or a hackathon — let's connect and create something impactful.",
};
