import { 
  Clock, 
  Users, 
  MapPin, 
  Calendar,
  Monitor,
  Code2,
  Database,
  Brain,
  Shield,
  Smartphone,
  Globe,
  Cpu,
  Zap,
  BookOpen,
  Trophy,
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useState } from 'react';

export function Timetable() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [viewMode, setViewMode] = useState("detailed"); // "detailed" or "compact"

  const getCourseIcon = (course: string) => {
    if (course.includes('Data Structures') || course.includes('Algorithm')) return Database;
    if (course.includes('Programming') || course.includes('C++') || course.includes('Java') || course.includes('Python')) return Code2;
    if (course.includes('Database') || course.includes('SQL')) return Database;
    if (course.includes('Web Development') || course.includes('Mobile')) return Globe;
    if (course.includes('Machine Learning') || course.includes('AI')) return Brain;
    if (course.includes('Cybersecurity') || course.includes('Security')) return Shield;
    if (course.includes('Networks') || course.includes('System')) return Monitor;
    if (course.includes('Mobile') || course.includes('Android')) return Smartphone;
    if (course.includes('Operating Systems')) return Settings;
    return Code2;
  };

  const getDifficultyLevel = (course: string) => {
    if (course.includes('Machine Learning') || course.includes('AI') || course.includes('Cybersecurity')) return 'Advanced';
    if (course.includes('Database') || course.includes('Networks') || course.includes('Systems')) return 'Intermediate';
    return 'Beginner';
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const schedule = [
    {
      day: "Monday",
      color: "from-blue-500 to-cyan-500",
      sessions: [
        { 
          time: "10:15 - 12:15", 
          course: "Design & Analysis of Algorithm", 
          instructor: "Lata N. Jadhav", 
          batch: "TY-B5 CSE", 
          students: 25,
          room: "502-B West Campus",
        },
        { 
          time: "3::30 - 5:30", 
          course: "Design & Analysis of Algorithm", 
          instructor: "Swati R. Vibhute", 
          batch: "TY-B4 CSE", 
          students: 28,
          room: "502-B West Campus",
        },
      ]
    },
    {
      day: "Tuesday", 
      color: "from-green-500 to-emerald-500",
      sessions: [
        { 
          time: "10:15 - 12:15", 
          course: "Design & Analysis of Algorithm", 
          instructor: "Lata N. Jadhav", 
          batch: "TY-B2 CSE", 
          students: 25,
          room: "502-B West Campus",
        },
        { 
          time: "3:30 - 5:30", 
          course: "Bussiness Analytics", 
          instructor: "Shilpa A. Sanap", 
          batch: "B.Tech B2-CSE", 
          students: 27,
          room: "502-B West Campus",
        },
      ]
    },
    {
      day: "Wednesday",
      color: "from-purple-500 to-violet-500", 
      sessions: [
        { 
          time: "3:30 - 5:30", 
          course: "Bussiness Analytics", 
          instructor: "Shilpa A. Sanap", 
          batch: "B.Tech-B3 CSE", 
          students: 20,
          room: "502-B West Campus",
        },
      ]
    },
    {
      day: "Thursday",
      color: "from-orange-500 to-red-500",
      sessions: [
        { 
          time: "1:15 - 3:15", 
          course: "Bussiness Analytics", 
          instructor: "Gauravsinha R. Thakur", 
          batch: "B.Tech-B4 CSE", 
          students: 28,
          room: "502-B West Campus",
        },
        { 
          time: "3:30 - 5:30", 
          course: "Bussiness Analytics", 
          instructor: "Shilpa A. Sanap", 
          batch: "B.Tech-B1 CSE", 
          students: 24,
          room: "502-B West Campus",
        },
      ]
    },
    {
      day: "Friday",
      color: "from-indigo-500 to-blue-500",
      sessions: [
        { 
          time: "10:15 - 12:15", 
          course: "Design & Analysis of Algorithms", 
          instructor: "Lata N. Jadhav", 
          batch: "TY-B3 CSE", 
          students: 27,
          room: "502-B West Campus",
        },
        { 
          time: "1:15 - 3:15", 
          course: "Bussiness Analytics", 
          instructor: "Gauravsinha R. Thakur", 
          batch: "B.Tech-B5 CSE", 
          students: 20,
          room: "502-B West Campus",
        },
        { 
          time: "3:30 - 5:30", 
          course: "Design & Analysis of Algorithm", 
          instructor: "Swati R. Vibhute", 
          batch: "TY-B1 CSE", 
          students: 23,
          room: "502-B West Campus",
        },
      ]
    },
    {
      day: "Saturday",
      color: "from-pink-500 to-rose-500",
      sessions: [
  
      ]
    }
  ];

  const currentDayData = schedule.find(day => day.day === selectedDay) || schedule[0];

  return (
    <section id="timetable" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 sm:mb-5 lg:mb-6 shadow-lg">
            <Calendar className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 sm:mb-5 lg:mb-6 px-4">
            Advanced Lab Schedule
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Experience cutting-edge computer science education with our comprehensive lab schedule featuring 
            the latest technologies, expert instructors, and hands-on learning experiences.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-14 lg:mb-16 fade-in-up-scroll px-2">
          {/* Day Selection - Mobile Optimized Scroll */}
          <div className="w-full sm:w-auto overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max sm:flex-wrap sm:min-w-0 justify-start sm:justify-center stagger-children px-2 sm:px-0">
              {schedule.map((day) => (
                <Button
                  key={day.day}
                  variant={selectedDay === day.day ? "default" : "outline"}
                  onClick={() => setSelectedDay(day.day)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                    selectedDay === day.day 
                      ? `bg-gradient-to-r ${day.color} text-white shadow-lg hover:shadow-xl` 
                      : 'hover:bg-gray-50 border-2'
                  }`}
                >
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  <span className="hidden xs:inline">{day.day}</span>
                  <span className="xs:hidden">{day.day.slice(0, 3)}</span>
                </Button>
              ))}
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex gap-2 w-full sm:w-auto justify-center">
            <Button
              variant={viewMode === "detailed" ? "default" : "outline"}
              onClick={() => setViewMode("detailed")}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm sm:text-base"
            >
              <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Detailed
            </Button>
            <Button
              variant={viewMode === "compact" ? "default" : "outline"}
              onClick={() => setViewMode("compact")}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm sm:text-base"
            >
              <Monitor className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Compact
            </Button>
          </div>
        </div>

        {/* Selected Day Schedule */}
        <div className="mb-12 sm:mb-14 lg:mb-16 scale-in-center-scroll">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
            <CardHeader className={`bg-gradient-to-r ${currentDayData.color} text-white p-4 sm:p-6 lg:p-8`}>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 sm:p-2.5 lg:p-3 rounded-xl mr-3 sm:mr-4">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                  </div>
                  <span>{currentDayData.day} Schedule</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs sm:text-sm">
                  {currentDayData.sessions.length} {currentDayData.sessions.length === 1 ? 'Session' : 'Sessions'}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 bg-white">
              <div className={`grid gap-0 ${viewMode === 'detailed' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                {currentDayData.sessions.map((session, index) => {
                  const CourseIcon = getCourseIcon(session.course);
                  const difficulty = getDifficultyLevel(session.course);
                  
                  return (
                    <div 
                      key={index} 
                      className={`group relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 ${
                        viewMode === 'detailed' 
                          ? 'p-5 sm:p-6 lg:p-8 border-b last:border-b-0' 
                          : 'p-4 sm:p-5 lg:p-6 border-b md:border-r md:last:border-r-0 lg:nth-child(3n):border-r-0 xl:nth-child(3n):border-r xl:nth-child(4n):border-r-0'
                      }`}
                    >
                      {/* Hover Effect Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className={`relative space-y-3 sm:space-y-4 ${viewMode === 'detailed' ? 'max-w-4xl' : ''}`}>
                        {/* Time and Icon */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center text-blue-600 text-sm sm:text-base font-bold">
                            <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3 group-hover:bg-blue-200 transition-colors border border-blue-200">
                              <Clock className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                            </div>
                            <span className="whitespace-nowrap">{session.time}</span>
                          </div>
                          <div className={`bg-gradient-to-r ${currentDayData.color} p-1.5 sm:p-2 rounded-lg shadow-md group-hover:scale-105 transition-transform flex-shrink-0`}>
                            <CourseIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={1.5} />
                          </div>
                        </div>
                        
                        {/* Course Title */}
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {session.course}
                        </h4>
                        
                        {/* Instructor and Room */}
                        <div className={`grid gap-2 sm:gap-3 ${viewMode === 'detailed' ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                          <div className="flex items-center text-gray-700 text-sm">
                            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 text-blue-500 flex-shrink-0" strokeWidth={2} />
                            <span className="truncate">{session.instructor}</span>
                          </div>
                          <div className="flex items-center text-gray-700 text-sm">
                            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 text-purple-500 flex-shrink-0" strokeWidth={2} />
                            <span className="truncate">{session.room}</span>
                          </div>
                        </div>
                        
                        {/* Badges */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 text-xs">
                            {session.batch}
                          </Badge>
                          <Badge variant="outline" className={`border border-2 text-xs ${getDifficultyColor(difficulty)}`}>
                            <Trophy className="h-3 w-3 mr-1" />
                            {difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 text-xs">
                            <Users className="h-3 w-3 mr-1" />
                            {session.students} Students
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lab Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50 fade-in-up-scroll">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Operating Hours</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Monday to Saturday<br />
                <span className="font-semibold text-blue-600">8:00 AM - 05:30 PM</span><br />
                <span className="text-sm text-gray-500">Extended hours during exams</span>
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50 fade-in-up-scroll">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Lab Capacity</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Maximum <span className="font-semibold text-green-600">25 students</span><br />
                per session<br />
                <span className="text-sm text-gray-500">Optimal learning environment</span>
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-violet-50 fade-in-up-scroll">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Lab Locations</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Computer Science Block<br />
                <span className="font-semibold text-purple-600">Rooms 502-B West Campus,Gate No.5</span><br />
                <span className="text-sm text-gray-500">Air-conditioned & modern</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}