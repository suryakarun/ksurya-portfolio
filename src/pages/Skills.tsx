
import React from 'react';
import { Code, Database, Globe, Cpu, Wrench, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      color: 'cyan'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Python', 'Flask', 'Firebase', 'MongoDB'],
      color: 'green'
    },
    {
      title: 'AI/ML',
      icon: Cpu,
      skills: ['Machine Learning', 'Data Validation', 'AI Integration'],
      color: 'purple'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['VS Code', 'Netlify', 'Vercel', 'Canva', 'Git', 'GitHub'],
      color: 'yellow'
    }
  ];

  const certifications = [
    'Software Engineer - Forage',
    'Bloomberg Client Engagement - Forage',
    'Full Stack Web Development - Udemy',
    'GenAI Learnathon - GUVI',
    'Artificial Intelligence - IOT - NETCRAFTZ',
    'AI Data Validation - NETCRAFTZ'
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-white font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            Skills
            <span className="text-cyan-400"> /&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technical expertise and certifications showcasing my development journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map(({ title, icon: Icon, skills, color }, index) => (
            <div
              key={title}
              className={`group bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-${color}-500 border-opacity-30 p-6 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-${color}-500/20`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex items-center space-x-3 mb-4`}>
                <Icon className={`text-${color}-400`} size={24} />
                <h3 className="text-xl font-bold text-white font-mono">{title}</h3>
              </div>
              
              <div className="space-y-2">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`text-gray-300 hover:text-${color}-400 transition-colors font-mono text-sm py-1 px-2 rounded border-l-2 border-${color}-500 border-opacity-30 hover:border-opacity-100 hover:bg-${color}-500 hover:bg-opacity-10`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-cyan-500 border-opacity-30 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-cyan-400" size={28} />
            <h2 className="text-2xl font-bold text-white font-mono">Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="flex items-center space-x-3 p-4 bg-black bg-opacity-30 rounded-lg border border-cyan-500 border-opacity-20 hover:border-opacity-50 transition-all duration-300 transform hover:scale-102"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-mono text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Visualization */}
        <div className="mt-16 bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg border border-green-500 border-opacity-30 p-6 font-mono">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 ml-4">skills.json</span>
          </div>
          
          <div className="text-sm space-y-1">
            <div><span className="text-white">{"{"}</span></div>
            <div className="ml-4"><span className="text-cyan-400">"frontend"</span>: <span className="text-green-300">"Advanced"</span>,</div>
            <div className="ml-4"><span className="text-cyan-400">"backend"</span>: <span className="text-green-300">"Intermediate"</span>,</div>
            <div className="ml-4"><span className="text-cyan-400">"ai_ml"</span>: <span className="text-green-300">"Learning"</span>,</div>
            <div className="ml-4"><span className="text-cyan-400">"passion"</span>: <span className="text-green-300">"∞"</span></div>
            <div><span className="text-white">{"}"}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
