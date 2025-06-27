
import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white font-mono leading-tight">
              <span className="text-cyan-400">&lt;</span>
              Surya
              <span className="text-cyan-400"> /&gt;</span>
            </h1>
            <div className="text-xl lg:text-2xl text-gray-300 font-mono">
              <span className="text-green-400">const</span> 
              <span className="text-white"> developer = </span>
              <span className="text-yellow-400">"Full Stack Engineer"</span>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate BCA student specializing in <span className="text-cyan-400">Frontend Development</span> and 
            <span className="text-cyan-400"> Python programming</span>. Building responsive web applications 
            and exploring <span className="text-cyan-400">AI/ML</span> solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg font-mono font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
            
            <Link 
              to="/projects"
              className="group flex items-center space-x-2 border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-mono font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <span>View Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/suryakarun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/k-surya-b21a93301/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:suryakarnakaran@gmail.com" 
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Content - 3D Code Block */}
        <div className="relative">
          <div className="relative bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-cyan-500 border-opacity-30 p-6 font-mono text-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 ml-4">portfolio.py</span>
            </div>
            
            <div className="space-y-2">
              <div><span className="text-purple-400">class</span> <span className="text-yellow-400">Developer</span>:</div>
              <div className="ml-4"><span className="text-blue-400">def</span> <span className="text-green-400">__init__</span>(<span className="text-red-400">self</span>):</div>
              <div className="ml-8"><span className="text-red-400">self</span>.<span className="text-cyan-400">name</span> = <span className="text-green-300">"Surya"</span></div>
              <div className="ml-8"><span className="text-red-400">self</span>.<span className="text-cyan-400">skills</span> = [</div>
              <div className="ml-12"><span className="text-green-300">"React"</span>, <span className="text-green-300">"Python"</span>,</div>
              <div className="ml-12"><span className="text-green-300">"JavaScript"</span>, <span className="text-green-300">"AI/ML"</span></div>
              <div className="ml-8">]</div>
              <div className="ml-8"><span className="text-red-400">self</span>.<span className="text-cyan-400">passion</span> = <span className="text-green-300">"Building Amazing Apps"</span></div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 bg-opacity-20 rounded-full animate-ping"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 bg-opacity-20 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
