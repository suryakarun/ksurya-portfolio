
import React from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Value AI Labs',
      duration: 'Mar 2025 - May 2025 • 3 mos',
      location: 'India • Remote',
      type: 'Internship',
      skills: ['Software Development', 'Artificial Intelligence (AI)', 'Full-Stack Development', 'Communication', 'Teamwork', 'Software Development Life Cycle (SDLC)'],
      description: 'Completed a rewarding AI Internship at VAL Engineering Academy (a division of VAL First Principles AI Pvt. Ltd.) from February to May 2025.',
      color: 'cyan'
    },
    {
      title: 'Python Developer',
      company: 'HOPE Foundation',
      duration: 'Feb 2025 - Mar 2025 • 2 mos',
      location: 'India • On-site',
      type: 'Internship',
      skills: ['Python (Programming Language)', 'Program Creation', 'Artificial Intelligence (AI)', 'Machine Learning', 'SQL', 'Full-Stack Development', 'jQuery'],
      description: 'Completed a hands-on internship at Hope Foundation focused on Python-based Human-Computer Interaction. As part of this 90-hour program, I contributed to the development of innovative solutions.',
      color: 'green'
    }
  ];

  const education = [
    {
      institution: 'HKBK Degree College - India',
      degree: 'Bca, Computer Application',
      duration: 'Aug 2022 - Jun 2025',
      color: 'blue'
    },
    {
      institution: 'Bishop Cotton Women Christian Law College, Bangalore',
      degree: '12, Commerce',
      duration: 'Jul 2021 - Apr 2022',
      color: 'purple'
    },
    {
      institution: "Bishop Cotton Girls' School - India",
      degree: '10, Science',
      duration: 'May 2019 - Jun 2020',
      color: 'yellow'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            Experience
            <span className="text-cyan-400"> /&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional journey and educational background
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white font-mono mb-8 flex items-center">
            <span className="text-cyan-400 mr-2">{'>'}</span>
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-${exp.color}-500 border-opacity-30 p-6 hover:border-opacity-100 transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-${exp.color}-500/20`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono mb-2">{exp.title}</h3>
                    <p className={`text-${exp.color}-400 font-semibold mb-2`}>{exp.company}</p>
                  </div>
                  <div className={`bg-${exp.color}-500 bg-opacity-20 text-${exp.color}-400 px-3 py-1 rounded-full text-sm font-mono`}>
                    {exp.type}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 bg-${exp.color}-500 bg-opacity-20 text-${exp.color}-400 rounded-full text-xs font-mono border border-${exp.color}-500 border-opacity-30`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-white font-mono mb-8 flex items-center">
            <span className="text-green-400 mr-2">{'>'}</span>
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-${edu.color}-500 border-opacity-30 p-6 hover:border-opacity-100 transition-all duration-300 transform hover:scale-102`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-white font-mono mb-2">{edu.institution}</h3>
                <p className={`text-${edu.color}-400 mb-2`}>{edu.degree}</p>
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Calendar size={16} />
                  <span>{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline visualization */}
        <div className="mt-16 bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-cyan-500 border-opacity-30 p-6 font-mono">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-4">journey.timeline</span>
          </div>
          
          <div className="text-sm space-y-1">
            <div><span className="text-cyan-400">2022</span>: <span className="text-green-300">Started BCA Journey</span></div>
            <div><span className="text-cyan-400">2025</span>: <span className="text-green-300">Professional Internships</span></div>
            <div><span className="text-cyan-400">Future</span>: <span className="text-green-300">Full Stack Excellence</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
