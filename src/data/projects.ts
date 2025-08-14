import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Readify',
    description:
      'A comprehensive e-book reader and community platform built with Flutter and Firebase, enabling users to read, upload, and share books.',
    imageUrl: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile Development',
    tags: ['Flutter', 'Firebase', 'Community'],
    link: '#',
    details: [
      '• Cross-platform mobile app built with Flutter framework',
      '• Real-time book sharing and community features via Firebase',
      '• User authentication and profile management',
      '• Book upload and download functionality',
      '• Reading progress tracking and bookmarks'
    ]
  },
  {
    id: '2',
    title: 'LinkCrypta',
    description:
      'A password manager and link management app that store the data locally.',
    imageUrl: 'https://media.istockphoto.com/id/1402450534/photo/padlock-with-keyhole-in-data-security-on-circuit-modern-safety-digital-concept.jpg?s=612x612&w=0&k=20&c=vBzRPNY53FvkckEBjRxZBm-3QTQd3bttgglFRPgYOqc=',
    category: 'Mobile Development',
    tags: ['Flutter', 'Local Storage', 'Security'],
    link: '#',
    details: [
      '• Secure local storage for passwords and links',
      '• AES encryption for sensitive data protection',
      '• Biometric authentication support',
      '• Password strength analyzer and generator',
      '• Offline-first architecture for privacy'
    ]
  },
  {
    id: '3',
    title: 'AI ChatBot',
    description:
      'An intelligent chatbot built with OpenAI API and Flutter, featuring text-to-speech capabilities and voice-enabled Q&A functionality.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile Development',
    tags: ['Flutter', 'OpenAI API', 'Text-to-Speech'],
    link: '#',
    details: [
      '• Integration with OpenAI GPT API for intelligent responses',
      '• Text-to-speech functionality for accessibility',
      '• Voice input recognition and processing',
      '• Conversation history and context management',
      '• Customizable chat themes and settings'
    ]
  },
  {
    id: '4',
    title: 'Encryption & Decryption Tool',
    description:
      'A Python-based security tool implementing AES and RSA encryption for sensitive data protection.',
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cybersecurity',
    tags: ['Python', 'AES', 'RSA'],
    link: '#',
    details: [
      '• AES-256 symmetric encryption implementation',
      '• RSA asymmetric encryption for key exchange',
      '• Command-line interface for easy usage',
      '• File and text encryption/decryption support',
      '• Secure key generation and management'
    ]
  }
];

export const projectCategories = [
  'All',
  'Mobile Development',
  'Cybersecurity',
];