
import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suryakarnakaran@gmail.com',
      link: 'mailto:suryakarnakaran@gmail.com',
      color: 'cyan'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      link: '#',
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/suryakarun',
      color: 'white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/k-surya-b21a93301/',
      color: 'blue'
    },
    {
      icon: FileText,
      label: 'Resume',
      link: '#',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            Contact
            <span className="text-cyan-400"> /&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-cyan-500 border-opacity-30 p-8">
            <h2 className="text-2xl font-bold text-white font-mono mb-6 flex items-center">
              <span className="text-cyan-400 mr-2">{'>'}</span>
              Send Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-mono text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-50 border border-cyan-500 border-opacity-30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-50 border border-cyan-500 border-opacity-30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-cyan-500 border-opacity-30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Project Collaboration"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-cyan-500 border-opacity-30 rounded-lg text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Hi Surya, I'd love to discuss..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg font-mono font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-green-500 border-opacity-30 p-8">
              <h2 className="text-2xl font-bold text-white font-mono mb-6 flex items-center">
                <span className="text-green-400 mr-2">{'>'}</span>
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, link, color }, index) => (
                  <a
                    key={label}
                    href={link}
                    className={`flex items-center space-x-4 p-4 bg-black bg-opacity-30 rounded-lg border border-${color}-500 border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:scale-102 group`}
                  >
                    <Icon className={`text-${color}-400`} size={24} />
                    <div>
                      <div className="text-sm text-gray-400 font-mono">{label}</div>
                      <div className={`text-${color}-400 font-mono group-hover:text-white transition-colors`}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-purple-500 border-opacity-30 p-8">
              <h2 className="text-2xl font-bold text-white font-mono mb-6 flex items-center">
                <span className="text-purple-400 mr-2">{'>'}</span>
                Social Links
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map(({ icon: Icon, label, link, color }, index) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 bg-black bg-opacity-30 rounded-lg border border-${color}-500 border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:scale-102 group`}
                  >
                    <Icon className={`text-${color}-400`} size={24} />
                    <span className={`text-${color}-400 font-mono group-hover:text-white transition-colors`}>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-yellow-500 border-opacity-30 p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-mono">Available for opportunities</span>
              </div>
              <p className="text-gray-300 text-sm font-mono">
                Open to internships, collaborations, and exciting projects!
              </p>
            </div>
          </div>
        </div>

        {/* Code Block */}
        <div className="mt-16 bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-cyan-500 border-opacity-30 p-6 font-mono">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-4">contact.js</span>
          </div>
          
          <div className="text-sm space-y-1">
            <div><span className="text-purple-400">const</span> <span className="text-yellow-400">contact</span> = {"{"}</div>
            <div className="ml-4"><span className="text-cyan-400">email</span>: <span className="text-green-300">"Let's build something amazing"</span>,</div>
            <div className="ml-4"><span className="text-cyan-400">response_time</span>: <span className="text-green-300">"Within 24 hours"</span>,</div>
            <div className="ml-4"><span className="text-cyan-400">collaboration</span>: <span className="text-green-300">"Always open"</span></div>
            <div>{"};"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
