import { Computer, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ExternalLink, Users } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Timetable', href: '#timetable' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Aurangabad.mit', name: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/MIT_Updates', name: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/mit.chhatrapati_sambhajinagar', name: 'Instagram' },
  ];

  const teamMembers = [
    { 
      name: 'Abdul Rahman Mohammad', 
      email: 'abdul.mohammad@mit.asia', 
      rollNo: 'BT2314',
      hasEmail: true,
      githubUrl: 'https://github.com/AbdulRahman-droid208'
    },
    { 
      name: 'Mohammed Noman', 
      email: 'mohammed.noman@mit.asia', 
      rollNo: 'BT2317',
      hasEmail: true,
      githubUrl: '#'
    },
    { 
      name: 'Saksham Malpani', 
      email: 'saksham.malpani@mit.asia', 
      rollNo: 'BT2307',
      hasEmail: true,
      githubUrl: 'https://github.com/Malpani7'
    },
    { 
      name: 'Omkar Meralwar', 
      email: 'omkar.meralwar@mit.asia', 
      rollNo: 'BT2311',
      hasEmail: true,
      githubUrl: null
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDE: Lab Info & Social Media */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {/* Lab Header */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 sm:p-3 rounded-xl shadow-lg flex-shrink-0">
                <Computer className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Maharashtra Institute Of Technology</h3>
                <p className="text-blue-400 text-xs sm:text-sm font-medium mt-1">Computer Science Laboratory • Room 502B</p>
              </div>
            </div>
            
            {/* Lab Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Pioneering the future of computer science education through cutting-edge technology, 
              innovative curricula, and world-class facilities that prepare students for tomorrow's challenges.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Connect With Us</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 sm:p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Quick Links & Contact Info */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                <span className="w-1 h-6 bg-blue-400 rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium cursor-pointer group"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 rounded"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                <span className="w-1 h-6 bg-blue-400 rounded-full mr-3"></span>
                Contact Info
              </h4>
              <div className="space-y-3.5">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-gray-400 text-sm leading-relaxed">
                    <p className="font-medium text-gray-300">Computer Science Block</p>
                    <p>Room 502B, Fourth Floor, Gate No.5</p>
                    <p>MIT College Campus, Beed Bypass Rd</p>
                    <p>Satara Parisar, Chhatrapati Sambhajinagar</p>
                    <p>(Aurangabad), Maharashtra 431010</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-5 w-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm hover:text-white transition-colors">+91 9028597121</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:lab.incharge@college.edu" className="text-gray-400 text-sm hover:text-white transition-colors">
                    sarika.zile@mit.asia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col space-y-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center">
              <p>&copy; 2024 Maharashtra Institute Of Technology Computer Lab. All rights reserved.</p>
              <p className="mt-1">Advanced Computer Science Laboratory - Academic Excellence Initiative</p>
            </div>
            
            {/* Developer Credits - Redesigned */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-2">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <h4 className="text-base font-semibold text-gray-300">Designed & Developed by</h4>
              </div>
              
              {/* Team Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800/50 hover:bg-gray-800 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex flex-col space-y-2">
                      {/* Name */}
                      <div className="flex items-center justify-center sm:justify-start">
                        {member.hasEmail ? (
                          <a
                            href={`mailto:${member.email}`}
                            className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors inline-flex items-center group/link"
                          >
                            <span className="mr-1">{member.name}</span>
                            <Mail className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <span className="text-gray-300 font-medium text-sm">{member.name}</span>
                        )}
                      </div>
                      
                      {/* Course & Year */}
                      <div className="flex items-center justify-center sm:justify-start">
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-2.5 py-1 rounded">
                          B.Tech CSE • Second Year
                        </span>
                      </div>
                      
                      {/* Roll Number */}
                      <div className="flex items-center justify-center sm:justify-start space-x-1.5">
                        <span className="text-xs text-gray-500">Roll No:</span>
                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                          {member.rollNo}
                        </span>
                      </div>
                      
                      {/* Email Badge (if available) */}
                      {member.hasEmail && (
                        <div className="flex items-center justify-center sm:justify-start">
                          <a
                            href={`mailto:${member.email}`}
                            className="text-xs text-gray-500 hover:text-gray-400 transition-colors inline-flex items-center group/email"
                          >
                            <Mail className="h-3 w-3 mr-1 text-green-400" />
                            <span className="truncate max-w-[180px]">{member.email}</span>
                          </a>
                        </div>
                      )}
                    </div>
                    
                    {/* Subtle hover indicator */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional Footer Links */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center lg:justify-between items-center text-xs text-gray-500 gap-4">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
              </div>
              <div className="text-center lg:text-right">
                <span>Built with React, TypeScript & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}