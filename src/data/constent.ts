import { IconType } from "react-icons";
import {
  BsInstagram,
  BsGithub,
  BsLinkedin,
  // BsTwitter,
  // BsFacebook,
  // BsYoutube,
} from "react-icons/bs";




// interface Tool {
//   title: string,
//   description: string,
// }

// interface Service {
//   title: string,
//   description: string,
//   tools: Tool[]
// }

// interface Image {
//   src: string,
//   alt: string,
//   isMain?: boolean | undefined,
// }
// interface Project {
//   title: string,
//   description: string,
//   startDate: Date,
//   endDate: Date,
//   gallery: Image[],
//   services: Service[],
// }
// export const projects :Project[] = [
//   { 
//     title: "", 
//     description: "", 
//     startDate: new Date('20-20-2025'),
//     endDate: new Date('20-20-2026'),
//     gallery: [
//       {src: '', alt: ''}
//     ],
//     services: [ 
//       { title:'', description: ''}, 
//       { title: '', description: ''}
//     ]
//   }
// ]


// ============================================================================
// PORTFOLIO CONSTANTS - Single Source of Truth
// ============================================================================

// ----------------------------------------------------------------------------
// Type Definitions
// ----------------------------------------------------------------------------

export interface Tool {
  title: string;
  description: string;
}

export interface Image {
  src: string;
  alt: string;
  isMain?: boolean;
}

export interface Service {
  title: string;
  description: string;
  tools: Tool[];
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  startDate: Date;
  endDate: Date;
  gallery: Image[];
  services: Service[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  proficiency?: number; // 1-100
}

export interface SocialLink {
  title: string;
  href: string;
  icon?: any;
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

// ----------------------------------------------------------------------------
// Personal Information
// ----------------------------------------------------------------------------

export const personalInfo = {
  name: "Mohammed Azizi",
  title: "Full-stack Developer",
  bio: "Passionate full-stack developer specializing in React, Next.js, and TypeScript. I create modern, scalable web applications with a focus on user experience and clean code.",
  email: "mohamed09azizi@gmail.com",
  phone: "(+212) 679-186-173",
  location: "Rabat, Morocco",
  avatar: "/images/avatar.jpg",
  resume: "/files/resume.pdf",
};

export const SocialMediaProfiles: SocialLink[] = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/siimo_azizi_/",
    icon: BsInstagram,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/mohamed-azizi/",
    icon: BsLinkedin,
  },
  { 
    title: "GitHub", 
    href: "https://github.com/timo-ostora", 
    icon: BsGithub 
  },
  // {
  //   title: "Twitter",
  //   href: "https://twitter.com/*",
  //   icon: BsTwitter,
  // },
  // {
  //   title: "Facebook",
  //   href: "https://www.facebook.com/profile.php?id=61565595755832",
  //   icon: BsFacebook,
  // },
  // {
  //   title: "Youtube",
  //   href: "https://www.youtube.com/*",
  //   icon: BsYoutube,
  // },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", proficiency: 90 },
  { name: "Next.js", category: "frontend", proficiency: 85 },
  { name: "TypeScript", category: "frontend", proficiency: 88 },
  { name: "JavaScript", category: "frontend", proficiency: 92 },
  { name: "HTML/CSS", category: "frontend", proficiency: 95 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 90 },
  { name: "Redux", category: "frontend", proficiency: 80 },
  
  // Backend
  { name: "Node.js", category: "backend", proficiency: 85 },
  { name: "Express.js", category: "backend", proficiency: 82 },
  { name: "PostgreSQL", category: "backend", proficiency: 78 },
  { name: "MongoDB", category: "backend", proficiency: 80 },
  { name: "REST APIs", category: "backend", proficiency: 88 },
  { name: "GraphQL", category: "backend", proficiency: 70 },
  
  // Tools
  { name: "Git", category: "tools", proficiency: 90 },
  { name: "Docker", category: "tools", proficiency: 75 },
  { name: "Vercel", category: "tools", proficiency: 85 },
  { name: "AWS", category: "tools", proficiency: 65 },
  { name: "Figma", category: "tools", proficiency: 80 },
  
  // Design
  { name: "UI/UX Design", category: "design", proficiency: 82 },
  { name: "Responsive Design", category: "design", proficiency: 90 },
  { name: "Adobe Illustrator", category: "design", proficiency: 75 },
];

// ----------------------------------------------------------------------------
// Work Experience
// ----------------------------------------------------------------------------

export const experiences: Experience[] = [
  { 
    year: "2025", 
    role: "web Developer & Commercial", 
    company: "NADDEVLOP" 
  },
  { 
    year: "2024", 
    role: "web Developer", 
    company: "House of Representatives" 
  },
];

// ----------------------------------------------------------------------------
// Education
// ----------------------------------------------------------------------------

export const education: Education[] = [
  {
    year: "2025",
    degree: "Diploma in Computer Science Development", // or "Technical Diploma in Software Development"
    institution: "IFIAG",
  },
  {
    year: "2022",
    degree: "Baccalaureate", // or "Baccalaureate"
    institution: "Lycée Omar El Khayam",
  },
];

// ----------------------------------------------------------------------------
// Projects
// ----------------------------------------------------------------------------


export const projects: Project[] = [
  { 
    title: "Car Rental Management Platform", 
    slug: "car-rental",
    description: "A multi-role web platform designed to digitalize and automate car rental operations. The system enables clients to browse vehicles, book online, and track reservations, while administrators and agents manage availability, payments, vehicle check-in/out reports, and operational workflows through a structured dashboard.", 
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-03-20'),
    gallery: [
      { src: '/images/projects/car-rental/landing.jpg', alt: 'Car rental landing page', isMain: true },
      { src: '/images/projects/car-rental/browse.jpg', alt: 'Vehicle browsing interface' },
      { src: '/images/projects/car-rental/checkin.jpg', alt: 'Vehicle check-in and reporting system' }
    ],
    services: [ 
      { 
        title: 'System Architecture & Full-Stack Development', 
        description: 'Designed and developed a role-based rental management system using structured MVC architecture, focusing on scalability, maintainability, and operational clarity.',
        tools: [
          { title: 'PHP (MVC Architecture)', description: 'Implemented clean separation of concerns with controllers, models, and views' },
          { title: 'MySQL', description: 'Designed relational database schemas for vehicles, bookings, users, and reports' },
          { title: 'Bootstrap', description: 'Built responsive admin and client dashboards' }
        ]
      },
      {
        title: 'Business Logic & Workflow Automation',
        description: 'Engineered booking lifecycle management including availability validation, payment tracking, vehicle status updates, and damage reporting during check-in/out processes.',
        tools: [
          { title: 'Role-Based Access Control', description: 'Defined permission layers for clients, agents, employees, and admins' },
          { title: 'Booking Engine Logic', description: 'Handled availability checks, date conflicts, and status transitions' }
        ]
      }
    ]
  },

  { 
    title: "E-Commerce Operations Dashboard", 
    slug: 'e-commerce-dashboard',
    description: "An internal operations dashboard built to centralize inventory management, order tracking, and customer data analytics for small and medium businesses. The system improves decision-making through structured data visualization and workflow optimization.", 
    startDate: new Date('2024-10-10'),
    endDate: new Date('2025-01-20'),
    gallery: [
      { src: '/images/projects/e-commerce-dashbord.webp', alt: 'Analytics dashboard overview', isMain: true },
    ],
    services: [ 
      { 
        title: 'Frontend Architecture', 
        description: 'Developed a modular and maintainable frontend interface with structured state management and dynamic data visualization.',
        tools: [
          { title: 'React & TypeScript', description: 'Built reusable component-driven architecture with type safety' },
          { title: 'Chart.js', description: 'Implemented real-time sales and performance visualizations' }
        ]
      }, 
      { 
        title: 'API & Data Layer Integration', 
        description: 'Built and integrated RESTful APIs to handle authentication, order processing, product management, and analytics aggregation.',
        tools: [
          { title: 'Express.js', description: 'Designed secure and scalable API endpoints' },
          { title: 'MongoDB', description: 'Structured flexible product and order data models' }
        ]
      },
      {
        title: 'Visual & Brand System',
        description: 'Designed interface structure and visual consistency to ensure clarity, usability, and brand alignment.',
        tools: [
          { title: 'Figma', description: 'Prototyped layouts and defined UI patterns' }
        ]
      }
    ]
  },

  { 
  title: "PayoutPal – Fintech Landing Page", 
  slug: "payoutpal",
  description: "A high-conversion SaaS landing page designed and developed for a fictional fintech product focused on simplifying business payouts. The goal was to create a clear product narrative, strong visual hierarchy, and trust-driven messaging tailored for startup and B2B audiences.", 
  startDate: new Date('2025-07-01'),
  endDate: new Date('2025-07-10'),
  gallery: [
    { src: '/images/projects/payoutpal.jpg', alt: 'PayoutPal hero section', isMain: true },
  ],
  services: [ 
    { 
      title: 'Landing Page Strategy & Structure', 
      description: 'Defined conversion-focused layout including value proposition clarity, feature segmentation, social proof positioning, and structured call-to-action flow.',
      tools: [
        { title: 'Product Messaging', description: 'Crafted clear, benefit-driven copy aligned with fintech positioning' },
        { title: 'Conversion Structure', description: 'Applied SaaS landing page best practices (hero, problem, solution, CTA flow)' }
      ]
    },
    { 
      title: 'Design & Frontend Development', 
      description: 'Designed and built a responsive, performance-optimized interface with consistent spacing systems and modern UI components.',
      tools: [
        { title: 'Next.js & React', description: 'Built optimized and component-driven frontend structure' },
        { title: 'Tailwind CSS', description: 'Implemented clean design system with scalable utility styling' }
      ]
    }
  ]
},

];


// ----------------------------------------------------------------------------
// Testimonials
// ----------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Project Manager",
    company: "Government",
    content: "Excellent developer with strong technical skills and great communication. Delivered the portal project ahead of schedule with exceptional quality.",
    avatar: "/images/testimonials/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "CEO",
    company: "Solutek",
    content: "A talented developer who brings both technical expertise and creative solutions. Their work on our e-commerce platform exceeded expectations.",
    avatar: "/images/testimonials/jane-smith.jpg",
  },
];

// ----------------------------------------------------------------------------
// Services Offered
// ----------------------------------------------------------------------------

export const servicesOffered = [
  {
    title: "Frontend Development",
    description: "Building responsive, performant user interfaces with React, Next.js, and modern CSS frameworks.",
    icon: "code",
  },
  {
    title: "Backend Development",
    description: "Creating robust APIs and server-side solutions with Node.js, Express, and database management.",
    icon: "server",
  },
  {
    title: "Full-stack Solutions",
    description: "End-to-end web application development from concept to deployment.",
    icon: "layers",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive, accessible interfaces that provide excellent user experiences.",
    icon: "palette",
  },
  {
    title: "Brand Identity",
    description: "Creating cohesive brand identities including logos, color schemes, and design systems.",
    icon: "brush",
  },
];

// ----------------------------------------------------------------------------
// Stats/Achievements
// ----------------------------------------------------------------------------

export const stats = {
  yearsOfExperience: 2,
  projectsCompleted: 11,
  happyClients: 10,
  linesOfCode: 50000,
};

// ----------------------------------------------------------------------------
// Helper Functions
// ----------------------------------------------------------------------------


/**
 * Get projects by date range
 */
export const getProjectsByDateRange = (startYear: number, endYear: number): Project[] => {
  return projects.filter(project => {
    const year = project.startDate.getFullYear();
    return year >= startYear && year <= endYear;
  });
};

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

/**
 * Get featured projects (based on isMain gallery image)
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 3); // First 3 projects as featured
};

/**
 * Get main project image
 */
export const getMainProjectImage = (project: Project): Image | undefined => {
  return project.gallery.find(img => img.isMain) || project.gallery[0];
};

/**
 * Sort projects by date (newest first)
 */
export const getProjectsSortedByDate = (): Project[] => {
  return [...projects].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
};
