import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
   {
  title: 'CodeNotes',
  description: 'A developer-focused blogging platform for writing, reading, and sharing technical content. Features secure JWT auth, markdown support, and edge deployment for blazing-fast performance.',
  image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'Cloudflare Workers'],
  liveUrl: 'https://codenotes-mwm7.onrender.com/',
  githubUrl: 'https://github.com/priyanshu026922/CodeNotes'
},
    {
  title: 'Personal Portfolio Website',
  description: 'A sleek and modern developer portfolio built with React and Tailwind CSS. Features project showcases, skillset highlights, and smooth navigation with React Router and TypeScript.',
  image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  technologies: ['React', 'React Router', 'Tailwind CSS', 'TypeScript', 'Lucide React'],
  liveUrl: 'https://priyanshu-portfolio-m8s0.onrender.com/', 
  githubUrl: 'https://github.com/priyanshu026922/my-Porfolio'
},

   {
  title: 'SummAIze – AI Summary for Articles',
  description: 'A Chrome extension that uses AI to summarize news, blogs, and research articles with one click. Lightweight, fast, and powered by Google\'s Gemini API for smart insights.',
  image: 'https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Chrome Extensions'],
  liveUrl: '/',
  githubUrl: 'https://github.com/priyanshu026922/SummAIze'
},

   
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;