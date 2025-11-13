import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Cpu, 
  Code, 
  Database, 
  Shield,
  Zap,
  BookOpen,
  Trophy,
  Rocket
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const features = [
    {
      icon: Cpu,
      title: "Advanced Infrastructure",
      description: "State-of-the-art computing equipment with high-performance workstations, latest software, and cutting-edge development environments.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Comprehensive Curriculum",
      description: "Full spectrum programming education covering algorithms, data structures, web development, mobile apps, and emerging technologies.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Industry-Standard Tools",
      description: "Professional development environments, enterprise databases, cloud platforms, and industry-grade software suites.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Trophy,
      title: "Excellence & Innovation",
      description: "Fostering technical excellence through competitive programming, research projects, hackathons, and innovation challenges.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const labStats = [
    { icon: Cpu, label: "Workstations", value: "20+", color: "text-blue-600" },
    { icon: Users, label: "Students/Day", value: "100+", color: "text-green-600" },
    { icon: Code, label: "Software Packages", value: "50+", color: "text-purple-600" },
    { icon: Award, label: "Lab Assistants", value: "4", color: "text-orange-600" }
  ];

  return (
    <section id="about" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2563EB] rounded-lg mb-6 shadow-sm">
            <BookOpen className="h-7 w-7 text-white" strokeWidth={2} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F172A] mb-6">
            About Our Advanced Lab
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-4xl mx-auto leading-relaxed">
            The Maharashtra Institute of Technology Computer Lab represents the pinnacle of modern computing education. 
            Our facility combines cutting-edge technology, expert instruction, and innovative learning methodologies to create 
            the ultimate environment for aspiring computer scientists and engineers.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 stagger-children">
          {features.map((feature, index) => (
            <Card key={index} className="group text-center transition-all duration-300 hover:-translate-y-1 border border-[#E2E8F0] bg-white overflow-hidden scale-in-center-scroll shadow-sm hover:shadow-md rounded-lg">
              <CardContent className="p-7 relative">
                {/* Animated Icon Container */}
                <div className="relative mb-5">
                  <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto shadow-sm transition-all duration-300 hover:-translate-y-0.5 animate-icon-bounce`}>
                    <feature.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2.5 text-[#0F172A] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 slide-in-left-scroll">
            <div className="fade-in-up-scroll">
              <h3 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Pioneering Computer Science Education
              </h3>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-[#2563EB]">Academic Excellence:</span> Our computer lab serves as the cornerstone 
                  of practical learning for CSE B.Tech students. We provide immersive hands-on experiences with programming 
                  languages, software engineering principles, database management, cybersecurity, artificial intelligence, 
                  and emerging technologies like blockchain and IoT.
                </p>
                <p>
                  <span className="font-semibold text-[#2563EB]">Innovation Laboratory:</span> Beyond traditional coursework, our facility 
                  functions as an innovation hub where students develop groundbreaking projects, participate in research initiatives, 
                  and collaborate with industry partners. We regularly host coding competitions, hackathons, and technical workshops.
                </p>
                <p>
                  <span className="font-semibold text-[#2563EB]">Industry Preparation:</span> Our curriculum is designed in collaboration 
                  with leading tech companies to ensure graduates are industry-ready. Students work with real-world tools, 
                  enterprise-grade software, and follow industry best practices in their projects and assignments.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
              {labStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <Card className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-[#E2E8F0] overflow-hidden">
                    <CardContent className="p-0 relative">
                      <div className="relative z-10">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2.5 rounded-lg w-fit mx-auto mb-3 transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
                          <stat.icon className="h-5 w-5 text-white animate-icon-bounce" strokeWidth={2} />
                        </div>
                        <div className="text-2xl font-semibold text-[#0F172A] mb-1">{stat.value}</div>
                        <div className="text-xs text-[#475569] font-medium">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Lab Details */}
          <div className="space-y-5 slide-in-right-scroll">
            <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 rounded-lg overflow-hidden group">
              <CardContent className="p-7 relative">
                <div className="flex items-center mb-4 relative z-10">
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg mr-3 transition-transform duration-300">
                    <Zap className="h-5 w-5 animate-icon-bounce" strokeWidth={2} />
                  </div>
                  <h4 className="text-xl font-semibold">Lab Specifications</h4>
                </div>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-3.5 rounded-lg border border-white/10">
                    <span className="font-medium text-sm">High-Performance PCs</span>
                    <span className="font-semibold text-cyan-200">22 Units</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-3.5 rounded-lg border border-white/10">
                    <span className="font-medium text-sm">RAM per System</span>
                    <span className="font-semibold text-cyan-200">16GB RAM</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-3.5 rounded-lg border border-white/10">
                    <span className="font-medium text-sm">Storage</span>
                    <span className="font-semibold text-cyan-200">512GB NVMe SSD</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-3.5 rounded-lg border border-white/10">
                    <span className="font-medium text-sm">Internet Speed</span>
                    <span className="font-semibold text-cyan-200">1Gbps Fiber</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 rounded-2xl overflow-hidden group">
              <CardContent className="p-6 sm:p-7 lg:p-8 relative">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center mb-4 sm:mb-5 relative z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 sm:p-2.5 rounded-xl mr-2.5 sm:mr-3 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white animate-icon-bounce" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Security & Access</h4>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 relative z-10">
                  <div className="flex justify-between items-center p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100">
                    <span className="font-medium text-sm sm:text-base">Access Control</span>
                    <span className="font-bold text-green-600 text-sm sm:text-base">24/7 Secure</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 border border-blue-100">
                    <span className="font-medium text-sm sm:text-base">Backup Systems</span>
                    <span className="font-bold text-blue-600 text-sm sm:text-base">Triple Redundancy</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 transition-all duration-300 border border-purple-100">
                    <span className="font-medium text-sm sm:text-base">Network Security</span>
                    <span className="font-bold text-purple-600 text-sm sm:text-base">Encrypted Access</span>
                  </div>
                  <div className="flex justify-between items-center p-3 sm:p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300 border border-orange-100">
                    <span className="font-medium text-sm sm:text-base">Data Protection</span>
                    <span className="font-bold text-orange-600 text-sm sm:text-base">BitLocker Protected</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-12 text-center text-white shadow-xl overflow-hidden relative group hover:shadow-2xl transition-all duration-500">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 right-8 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-32 h-32 bg-cyan-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-purple-300 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-3xl w-fit mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <Rocket className="h-16 w-16 mx-auto animate-icon-bounce text-cyan-200" />
            </div>
            
            <h3 className="text-5xl font-bold mb-8 leading-tight">Ready to Experience Excellence?</h3>
            <p className="text-xl mb-10 text-blue-100 leading-relaxed">
              Join thousands of students who have launched their careers from our advanced computer laboratory. 
              Discover the perfect blend of theory and practice in computer science education.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 group-item">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-lg">Award-Winning Faculty</div>
                <div className="text-sm text-blue-200 mt-2">Expert mentorship & guidance</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 group-item">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-lg">Industry Partnerships</div>
                <div className="text-sm text-blue-200 mt-2">Real-world project experience</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 group-item">
                <div className="text-3xl mb-2">💡</div>
                <div className="text-lg">Innovation Culture</div>
                <div className="text-sm text-blue-200 mt-2">Cutting-edge research opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}