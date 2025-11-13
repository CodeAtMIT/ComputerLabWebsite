import {
  ArrowRight,
  Users,
  Award,
  Cpu,
  Computer,
  Sparkles,
  Code,
  BookOpen,
  Zap,
  Database,
  Wifi,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.collegedekho.com/media/img/institute/crawled_images/15490/mita.jpg?width=640')`,
        }}
      />

      {/* Enhanced Background Overlays for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/20 to-purple-900/40" />

      {/* Decorative Light Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center min-h-[80vh]">
          {/* Main Content */}
          <div className="space-y-8 text-center max-w-4xl">
            <div className="space-y-6">
              {/* Tagline Badge */}
              <div className="inline-flex items-center justify-center mx-auto">
                <div className="relative group">
                  <div className="relative px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                    <span className="text-white font-medium text-sm tracking-wide flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-blue-300" strokeWidth={2} />
                      Innovation • Technology • Excellence
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                  <span className="block text-gray-100 mb-2">
                    Welcome to
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Maharashtra Institute Of Technology
                  </span>
                </h1>
              </div>

              {/* Description Card */}
              <div className="relative group max-w-3xl mx-auto">
                {/* Content Card */}
                <div className="relative backdrop-blur-xl bg-white/10 rounded-xl px-6 sm:px-8 py-5 sm:py-6 border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/15 hover:shadow-2xl">
                  <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                    Where cutting-edge technology meets academic
                    excellence. Experience our state-of-the-art
                    computer laboratory featuring{" "}
                    <span className="text-blue-300 font-medium">
                      high-performance systems
                    </span>
                    ,{" "}
                    <span className="text-purple-300 font-medium">
                      advanced software
                    </span>
                    , and{" "}
                    <span className="text-cyan-300 font-medium">
                      unlimited possibilities
                    </span>{" "}
                    for innovation and learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const aboutSection =
                    document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="group bg-[#2563EB] hover:bg-[#60A5FA] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 rounded-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" strokeWidth={2} />
                Explore Lab
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  const timetableSection =
                    document.getElementById("timetable");
                  if (timetableSection) {
                    timetableSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 rounded-lg"
              >
                <Code className="mr-2 h-5 w-5" strokeWidth={2} />
                View Programs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Button>
            </div>

            {/* Enhanced Tech Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 pt-6 sm:pt-8 justify-items-center">
              <div className="text-center group w-full">
                <div className="bg-white/10 backdrop-blur-md w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl floating-animation">
                  <Cpu className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-blue-300" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white transition-colors drop-shadow-lg">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-md mt-1">
                  High-Performance PCs
                </div>
              </div>
              <div className="text-center group w-full">
                <div className="bg-white/10 backdrop-blur-md w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl floating-animation delay-200">
                  <Database className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-emerald-300" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white transition-colors drop-shadow-lg">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-md mt-1">
                  Server Uptime
                </div>
              </div>
              <div className="text-center group w-full">
                <div className="bg-white/10 backdrop-blur-md w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl floating-animation delay-400">
                  <Wifi className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-purple-300" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white transition-colors drop-shadow-lg">
                  1Gbps
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-md mt-1">
                  Internet Speed
                </div>
              </div>
              <div className="text-center group w-full">
                <div className="bg-white/10 backdrop-blur-md w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl floating-animation delay-600">
                  <Award className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-orange-300" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white transition-colors drop-shadow-lg">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-md mt-1">
                  Software Packages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}