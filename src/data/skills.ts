import { Skill } from '../types';

export const skills: Skill[] = [
  // Mobile Development
  {
    name: 'Flutter',
    icon: 'smartphone',
    level: 95,
    description: 'Cross-platform mobile apps with pixel-perfect UI and smooth performance.'
  },
  {
    name: 'Dart',
    icon: 'code',
    level: 90,
    description: 'Efficient and type-safe programming for scalable Flutter apps.'
  },

  // Frontend Development
  {
    name: 'HTML',
    icon: 'codepen', // Represents coding / markup
    level: 90,
    description: 'Markup language for structuring and presenting web content.'
  },
  {
    name: 'JavaScript',
    icon: 'code', // Represents programming
    level: 90,
    description: 'Versatile scripting language for dynamic and interactive web pages.'
  },
  {
    name: 'React',
    icon: 'zap', // Represents speed & interactivity
    level: 90,
    description: 'JavaScript library for building fast, interactive user interfaces.'
  },
  {
    name: 'Tailwind CSS',
    icon: 'paintbrush',
    level: 85,
    description: 'Responsive and clean UI with utility-first CSS.'
  },

  // Backend Development
  {
    name: 'Node.js',
    icon: 'server-cog',
    level: 85,
    description: 'Fast, event-driven backend applications.'
  },
  // {
  //   name: 'Express.js',
  //   icon: 'route',
  //   level: 80,
  //   description: 'Lightweight and flexible Node.js web framework.'
  // },
  {
    name: 'REST API',
    icon: 'cloud',
    level: 85,
    description: 'Secure, well-documented RESTful APIs.'
  },

  // Databases & Cloud
  {
    name: 'Firebase',
    icon: 'database',
    level: 85,
    description: 'Real-time database, authentication, and hosting.'
  },
  {
    name: 'Supabase',
    icon: 'server',
    level: 80,
    description: 'Open-source Firebase alternative with SQL power.'
  },
  {
    name: 'MongoDB',
    icon: 'database',
    level: 80,
    description: 'Flexible NoSQL storage for modern apps.'
  },
  {
    name: 'AWS',
    icon: 'cloud',
    level: 75,
    description: 'Cloud deployment, storage, and serverless functions.'
  },
  {
    name: 'Docker',
    icon: 'box',
    level: 75,
    description: 'Containerized applications for portability and scaling.'
  },

  // DevOps & Tools
  {
    name: 'Git',
    icon: 'git-branch',
    level: 85,
    description: 'Version control with collaborative workflows.'
  },
  {
    name: 'GitHub',
    icon: 'github',
    level: 85,
    description: 'Code hosting, CI/CD, and team collaboration.'
  },

  // Security
  {
    name: 'Network Security',
    icon: 'shield',
    level: 80,
    description: 'Secure networks and penetration testing.'
  },
  {
    name: 'Encryption',
    icon: 'lock',
    level: 80,
    description: 'Protecting data with modern cryptographic methods.'
  },
  {
    name: 'OWASP Security',
    icon: 'shield-alert',
    level: 75,
    description: 'Web app security aligned with OWASP standards.'
  },
  {
    name: 'Metasploit Framework',
    icon: 'terminal',
    level: 78,
    description: 'Exploitation and vulnerability assessment using Metasploit.'
  },
  {
    name: 'Dark Web Intelligence',
    icon: 'eye-off',
    level: 70,
    description: 'Monitoring and gathering intelligence from the dark web.'
  },
  {
    name: 'Digital Forensics',
    icon: 'search',
    level: 72,
    description: 'Investigating cyber incidents and analyzing digital evidence.'
  },
  {
    name: 'Ethical Hacking',
    icon: 'target',
    level: 85,
    description: 'Offensive security techniques to identify system vulnerabilities.'
  },
  {
    name: 'Incident Response',
    icon: 'alert-triangle',
    level: 78,
    description: 'Rapid identification and mitigation of security breaches.'
  },
  {
    name: 'Malware Analysis',
    icon: 'bug',
    level: 74,
    description: 'Reverse-engineering and studying malicious software.'
  },
];
