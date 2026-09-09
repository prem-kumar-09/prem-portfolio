import { Skill, Experience, Project, Service, Certification, Testimonial } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 95, category: 'frontend', icon: 'Code' },
  { name: 'CSS', level: 90, category: 'frontend', icon: 'Palette' },
  { name: 'JavaScript', level: 85, category: 'frontend', icon: 'FileCode' },
  { name: 'React', level: 85, category: 'frontend', icon: 'Atom' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: 'Zap' },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: 'Layout' },
  
  // Backend
  { name: 'C#', level: 85, category: 'backend', icon: 'Code2' },
  { name: 'ASP.NET MVC', level: 80, category: 'backend', icon: 'Server' },
  { name: '.NET', level: 80, category: 'backend', icon: 'Layers' },
  
  // Database
  { name: 'SQL Server', level: 85, category: 'database', icon: 'Database' },
  { name: 'PostgreSQL', level: 75, category: 'database', icon: 'Table' },
  { name: 'SSIS', level: 70, category: 'database', icon: 'GitMerge' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools', icon: 'GitBranch' },
  { name: 'VS Code', level: 90, category: 'tools', icon: 'Code' },
  { name: 'Visual Studio', level: 85, category: 'tools', icon: 'Monitor' },
  { name: 'DBeaver', level: 75, category: 'tools', icon: 'Database' },
  
  // Testing
  { name: 'Manual Testing', level: 80, category: 'testing', icon: 'CheckCircle' },
  { name: 'Authentication Testing', level: 75, category: 'testing', icon: 'Shield' },
  { name: 'Authorization Testing', level: 75, category: 'testing', icon: 'Lock' },
  { name: 'Database Testing', level: 80, category: 'testing', icon: 'Database' },
];

export const experiences: Experience[] = [
  {
    title: 'Software Developer',
    company: 'Tech Company',
    location: 'Chennai, India',
    period: '2023 - Present',
    description: [
      'Developed and maintained web applications using modern technologies',
      'Enhanced CMS platforms with improved workflows and security features',
      'Implemented new features and functionality for enterprise solutions',
      'Integrated databases and optimized data management systems',
      'Conducted thorough testing and debugging to ensure quality',
      'Optimized SEO and improved website performance metrics',
      'Collaborated with cross-functional teams on project delivery'
    ],
    technologies: ['Next.js', 'React', 'C#', 'ASP.NET MVC', 'SQL Server', 'PostgreSQL']
  }
];

export const projects: Project[] = [
  {
    title: 'Seat Allocation System',
    description: 'An interactive seat allocation system with floor maps and employee management capabilities.',
    image: '/projects/seat-allocation.jpg',
    technologies: ['Next.js', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com/premkumar',
    liveDemo: 'https://demo.example.com',
    features: [
      'Interactive floor maps with drag-and-drop',
      'Real-time seat assignments',
      'Employee allocation management',
      'Department-wise seat organization'
    ]
  },
  {
    title: 'CMS Platform Enhancements',
    description: 'Enhanced content management system with improved workflows and security features.',
    image: '/projects/cms-platform.jpg',
    technologies: ['ASP.NET MVC', 'C#', 'SQL Server'],
    features: [
      'Streamlined content workflows',
      'Enhanced security testing',
      'User role management',
      'Performance optimizations'
    ]
  },
  {
    title: 'Data Migration Tool',
    description: 'Automated data migration tool for CSV to database mapping with validation.',
    image: '/projects/data-migration.jpg',
    technologies: ['C#', 'SSIS', 'SQL Server'],
    features: [
      'CSV to database mapping',
      'Data validation and cleansing',
      'Automated SQL processing',
      'Error handling and logging'
    ]
  }
];

export const services: Service[] = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies and best practices.',
    icon: 'Layers'
  },
  {
    title: 'Web Application Development',
    description: 'Building responsive and performant web applications with excellent user experience.',
    icon: 'Globe'
  },
  {
    title: 'Database Design',
    description: 'Designing efficient database schemas and optimizing data management systems.',
    icon: 'Database'
  },
  {
    title: 'API Development',
    description: 'Creating robust and scalable APIs for seamless application integration.',
    icon: 'Code2'
  },
  {
    title: 'Testing & QA',
    description: 'Comprehensive testing services including manual, database, and security testing.',
    icon: 'CheckCircle'
  },
  {
    title: 'SEO Technical Analysis',
    description: 'Analyzing and optimizing websites for better search engine visibility and performance.',
    icon: 'TrendingUp'
  }
];

export const certifications: Certification[] = [
  {
    title: 'Next.js Advanced Concepts',
    issuer: 'Next.js Documentation',
    date: '2024',
    icon: 'Zap'
  },
  {
    title: 'FastAPI Development',
    issuer: 'FastAPI Official',
    date: '2024',
    icon: 'Server'
  },
  {
    title: 'Docker Essentials',
    issuer: 'Docker Inc.',
    date: '2023',
    icon: 'Container'
  },
  {
    title: 'PostgreSQL Advanced',
    issuer: 'PostgreSQL Global',
    date: '2023',
    icon: 'Database'
  },
  {
    title: 'Modern Web Development',
    issuer: 'Various Platforms',
    date: 'Ongoing',
    icon: 'BookOpen'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'John Smith',
    role: 'CTO',
    company: 'Tech Solutions Inc.',
    content: 'Prem delivered exceptional work on our web application. His attention to detail and technical expertise made our project a success.',
    rating: 5,
    image: '/testimonials/john-sm.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Digital Innovations',
    content: 'Working with Prem was a great experience. He understood our requirements perfectly and delivered high-quality solutions on time.',
    rating: 5,
    image: '/testimonials/sarah-j.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'Cloud Systems',
    content: 'Prem is a talented developer with strong problem-solving skills. His contributions to our team were invaluable.',
    rating: 5,
    image: '/testimonials/michael-c.jpg'
  }
];

export const personalInfo = {
  name: 'Prem Kumar',
  role: 'Full Stack Developer',
  experience: '1.5+ Years',
  location: 'Chennai, India',
  education: 'BE Electronics and Communication Engineering',
  email: 'premkumar@example.com',
  linkedin: 'https://linkedin.com/in/premkumar',
  github: 'https://github.com/premkumar',
  phone: '+91 98765 43210'
};
