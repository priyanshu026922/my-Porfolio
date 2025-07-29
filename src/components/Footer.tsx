import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'hhttps://github.com/priyanshu026922',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/priyanshu-ranjan-a45631288',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      url: 'https://x.com/PriyanshuR43091?t=QO_Sq-Ek1-nr-cJvgRK6lw&s=09',
      icon: Twitter
    },
    {
      name: 'Email',
      url: 'mailto:priyanshuranjan7856@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              priyanshuranjan7856@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="/skills" className="block text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Priyanshu Ranjan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;