import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import emailjs from '@emailjs/browser'; // 📌 EmailJS import

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await emailjs.send(
        'service_lj2npbe',  // 🔹 Replace with EmailJS Service ID
        'template_bxgz5gb', // 🔹 Replace with EmailJS Template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        '4DAs07vSYMEz2vAvM'   // 🔹 Replace with EmailJS Public Key
      );

      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });

      // Hide success message after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Email sending failed:', err);
      setError('Oops! Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-600 dark:text-primary-400" size={24} />,
      title: 'Email',
      content: 'nubhawbarnwal@gmail.com',
      link: 'mailto:nubhawbarnwal@gmail.com'
    },
    {
      icon: <Phone className="text-primary-600 dark:text-primary-400" size={24} />,
      title: 'Phone',
      content: '+91 8434997573',
      link: 'tel:+918434997573'
    },
    {
      icon: <MapPin className="text-primary-600 dark:text-primary-400" size={24} />,
      title: 'Location',
      content: 'Gurgaon, India',
      link: '#'
    }
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind? Let's talk about how I can help bring your ideas to life."
      className="bg-gray-50 dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-16 w-1 h-1 bg-primary-400/30 rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-2 h-2 bg-accent-400/30 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Contact Information
          </h3>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="flex items-start group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl mr-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                  <a 
                    href={info.link}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {info.content}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="p-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/50 to-accent-500/50"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Let's connect</h4>
              <p className="mb-4">Available for freelance projects and full-time opportunities</p>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/technitishmodi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} className="text-white" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/nitish-modi-206205294" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} className="text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Send Me a Message
          </h3>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 flex items-center"
            >
              <CheckCircle2 className="text-green-600 dark:text-green-400 mr-3" size={24} />
              <p className="text-green-800 dark:text-green-300">
                Thank you for your message! I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {error && (
                <div className="text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </motion.div>
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl"
                  icon={<Send size={18} />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
