
import React from 'react';
import { ExternalLink, Github, Cpu, Mouse, Heart, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Gesture Controlled Mouse System',
      description: 'An innovative human-computer interaction system that allows users to control their mouse cursor using hand gestures, leveraging computer vision and machine learning.',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      icon: Mouse,
      color: 'cyan',
      category: 'AI/ML'
    },
    {
      title: 'Multi-Disease Prediction App',
      description: 'A comprehensive machine learning application that can predict multiple diseases based on user symptoms and medical data, helping in early diagnosis.',
      tech: ['Python', 'Machine Learning', 'Flask', 'Data Science'],
      icon: Heart,
      color: 'red',
      category: 'Healthcare AI'
    },
    {
      title: 'Legal Information Chatbot',
      description: 'An intelligent chatbot designed to simplify legal information for users, making legal advice and information more accessible to the general public.',
      tech: ['Python', 'NLP', 'AI', 'Flask', 'Legal APIs'],
      icon: MessageSquare,
      color: 'green',
      category: 'AI Assistant'
    },
    {
      title: 'Responsive Web Applications',
      description: 'Collection of fully responsive web applications built with modern frontend technologies, focusing on user experience and performance.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      icon: Cpu,
      color: 'purple',
      category: 'Frontend'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            Projects
            <span className="text-cyan-400"> /&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing real-world solutions through code
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-${project.color}-500 border-opacity-30 p-6 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-${project.color}-500/20`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-${project.color}-500 bg-opacity-20 rounded-lg`}>
                  <project.icon className={`text-${project.color}-400`} size={24} />
                </div>
                <span className={`px-3 py-1 bg-${project.color}-500 bg-opacity-20 text-${project.color}-400 rounded-full text-xs font-mono`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white font-mono mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 bg-gray-800 text-${project.color}-400 rounded-full text-xs font-mono border border-${project.color}-500 border-opacity-30`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className={`flex items-center space-x-2 text-${project.color}-400 hover:text-white transition-colors group-hover:scale-105 transform duration-200 font-mono text-sm`}>
                  <Github size={16} />
                  <span>Code</span>
                </button>
                <button className={`flex items-center space-x-2 text-${project.color}-400 hover:text-white transition-colors group-hover:scale-105 transform duration-200 font-mono text-sm`}>
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Highlight */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500 border-opacity-30 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white font-mono mb-4 flex items-center">
            <span className="text-cyan-400 mr-2">{'>'}</span>
            Featured: AI-Powered Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            My projects focus on solving real-world problems through innovative use of AI and machine learning. 
            From gesture recognition to healthcare predictions, each project demonstrates practical applications 
            of cutting-edge technology to improve user experiences and accessibility.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-black bg-opacity-30 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400 font-mono">4+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-30 rounded-lg">
              <div className="text-2xl font-bold text-green-400 font-mono">100%</div>
              <div className="text-sm text-gray-400">Problem-Focused</div>
            </div>
            <div className="text-center p-4 bg-black bg-opacity-30 rounded-lg">
              <div className="text-2xl font-bold text-purple-400 font-mono">∞</div>
              <div className="text-sm text-gray-400">Learning Journey</div>
            </div>
          </div>
        </div>

        {/* Code Preview */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-green-500 border-opacity-30 p-6 font-mono">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-4">project_showcase.py</span>
          </div>
          
          <div className="text-sm space-y-1">
            <div><span className="text-purple-400">def</span> <span className="text-yellow-400">showcase_projects</span>():</div>
            <div className="ml-4">projects = [</div>
            <div className="ml-8"><span className="text-green-300">"Gesture Mouse Control"</span>,</div>
            <div className="ml-8"><span className="text-green-300">"Disease Prediction AI"</span>,</div>
            <div className="ml-8"><span className="text-green-300">"Legal Chatbot"</span></div>
            <div className="ml-4">]</div>
            <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-green-300">"Innovation in every line of code"</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
