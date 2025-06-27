
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Award, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/skills', label: 'Skills', icon: Award },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/projects', label: 'Projects', icon: User },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-50 backdrop-blur-lg border-b border-cyan-500 border-opacity-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-cyan-400 font-mono">
              &lt;Portfolio /&gt;
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === path
                      ? 'bg-cyan-500 bg-opacity-20 text-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500 hover:bg-opacity-10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-mono">{label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cyan-400 p-2 rounded-lg hover:bg-cyan-500 hover:bg-opacity-20 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 backdrop-blur-lg border-l border-cyan-500 border-opacity-30 p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="text-cyan-400 p-2 rounded-lg hover:bg-cyan-500 hover:bg-opacity-20"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === path
                      ? 'bg-cyan-500 bg-opacity-20 text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500 hover:bg-opacity-10'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-mono">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
