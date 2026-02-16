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
    title: "Car rental platform v2", 
    slug: "car-rental",
    description: "A comprehensive citizen-facing web platform enabling residents to access municipal services, submit requests, and track application statuses in real-time. Built with modern web technologies to improve government transparency and accessibility.", 
    startDate: new Date('2026-01-01'),
    endDate: new Date('206-03-20'),
    gallery: [
      { src: '/images/projects/car-rental/landing.jpg', alt: 'car rental homepage', isMain: true },
      { src: '/images/projects/car-rental/browse.jpg', alt: 'User dashboard interface' },
      { src: '/images/projects/car-rental/checkin.jpg', alt: 'Mobile responsive view' }
    ],
    services: [ 
      { 
        title: 'Full-stack Development', 
        description: 'Architected and developed a scalable full-stack solution using React, Next.js, and Node.js with PostgreSQL database integration',
        tools: [
          { title: 'React & Next.js', description: 'Built responsive UI components with server-side rendering' },
          { title: 'TypeScript', description: 'Ensured type safety across the entire application' },
          { title: 'Node.js & PostgreSQL', description: 'Developed RESTful APIs and database schemas' }
        ]
      }, 
      { 
        title: 'UI/UX Design', 
        description: 'Designed accessible, user-friendly interfaces following WCAG guidelines for government accessibility standards',
        tools: [
          { title: 'Figma', description: 'Created wireframes and high-fidelity prototypes' },
          { title: 'Tailwind CSS', description: 'Implemented responsive design system' }
        ]
      }
    ]
  },
  { 
    title: "E-Commerce Dashboard", 
    slug: 'e-commerce-dashboard',
    description: "An intuitive admin dashboard for managing inventory, orders, and customer analytics for small to medium-sized businesses. Features real-time data visualization and streamlined product management workflows.", 
    startDate: new Date('2025-01-10'),
    endDate: new Date('2025-06-20'),
    gallery: [
      { src: '/images/projects/e-commerce-dashbord.webp', alt: 'Dashboard overview with analytics', isMain: true },
      { src: '/images/projects/ecommerce-products.jpg', alt: 'Product management interface' },
      { src: '/images/projects/ecommerce-orders.jpg', alt: 'Order tracking system' }
    ],
    services: [ 
      { 
        title: 'Frontend Development', 
        description: 'Created a modern, performant SPA with complex state management and interactive data visualizations',
        tools: [
          { title: 'React & TypeScript', description: 'Built modular component architecture' },
          { title: 'Chart.js', description: 'Implemented interactive analytics dashboards' },
          { title: 'Redux Toolkit', description: 'Managed complex application state' }
        ]
      }, 
      { 
        title: 'Backend APIs', 
        description: 'Developed robust RESTful APIs with authentication, data validation, and payment gateway integration',
        tools: [
          { title: 'Express.js', description: 'Built scalable API endpoints' },
          { title: 'MongoDB', description: 'Designed flexible NoSQL data schemas' },
          { title: 'Stripe API', description: 'Integrated payment processing' }
        ]
      },
      {
        title: 'Brand Identity',
        description: 'Designed cohesive brand identity including logo, color palette, and visual guidelines for consistent user experience',
        tools: [
          { title: 'Adobe Illustrator', description: 'Created vector-based logo and brand assets' },
          { title: 'Figma', description: 'Developed comprehensive design system' }
        ]
      }
    ]
  },
  { 
    title: "Personal Portfolio & Blog", 
    slug: 'personal-portfolio-blog',
    description: "A modern, performant portfolio website showcasing projects and technical writings. Features server-side rendering, optimized images, and a custom CMS for blog management.", 
    startDate: new Date('2024-08-01'),
    endDate: new Date('2024-10-15'),
    gallery: [
      { src: '/images/projects/portfolio.webp', alt: 'Portfolio homepage', isMain: true },
      { src: '/images/projects/portfolio-projects.jpg', alt: 'Projects showcase page' },
      { src: '/images/projects/portfolio-blog.jpg', alt: 'Blog listing page' }
    ],
    services: [ 
      { 
        title: 'Full-stack Solutions', 
        description: 'Built a complete JAMstack application with headless CMS integration and optimized performance',
        tools: [
          { title: 'Next.js 14', description: 'Leveraged app router and server components' },
          { title: 'Sanity CMS', description: 'Implemented headless content management' },
          { title: 'Vercel', description: 'Deployed with edge functions and CDN' }
        ]
      },
      {
        title: 'UI/UX Design',
        description: 'Crafted a clean, minimal design with smooth animations and excellent mobile experience',
        tools: [
          { title: 'Framer Motion', description: 'Added smooth page transitions and micro-interactions' },
          { title: 'Tailwind CSS', description: 'Built custom design system with dark mode' }
        ]
      }
    ]
  }
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
  projectsCompleted: 15,
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
