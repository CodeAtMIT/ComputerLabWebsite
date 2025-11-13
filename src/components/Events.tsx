import { Calendar, Clock, MapPin, Users, Trophy, BookOpen, ArrowRight, X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { useState } from 'react';

export function Events() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  
  const events = [
    {
      id: 1,
      title: "Hacksphere 2025",
      type: "Hackathon",
      category: "past",
      date: "October 13, 2025",
      time: "10:00 AM - 5:30 PM",
      location: "Computer Lab - Room 502B",
      description: "Coding marathon where students build innovative solutions to real-world problems. ₹50,000 worth internship opportunities.",
      image: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/f4dc006466f1756004242cdc3d2fd98641561268/WhatsApp%20Image%202025-11-06%20at%201.46.15%20PM.jpeg",
      participants: "100+ Students",
      icon: Trophy,
      color: "from-purple-600 to-pink-600",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      id: 2,
      title: "Career Readiness & Workshop",
      type: "Workshop",
      category: "past",
      date: "Novemeber 01, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Qubit Hall - 108A",
      description: "A special inittiative by MIT & Aspire for her to empower girl students.",
      image: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/15cb9e8195de0f208ec8a026111808d4a2599a6e/WhatsApp%20Image%202025-11-08%20at%202.26.25%20PM.jpeg",
      participants: "80 Students",
      icon: BookOpen,
      color: "from-blue-600 to-cyan-600",
      badgeColor: "bg-blue-100 text-blue-700"
    }
  ];

  const upcomingEvents = events.filter(event => event.category === "upcoming");
  const pastEvents = events.filter(event => event.category === "past");

  const EventCard = ({ event }: { event: typeof events[0] }) => {
    const Icon = event.icon;
    
    return (
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: event.image, title: event.title })}>
          <ImageWithFallback
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Zoom Indicator - Appears on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <ZoomIn className="h-8 w-8 text-white" />
            </div>
          </div>
          
          {/* Event Type Badge */}
          <div className="absolute top-4 right-4">
            <Badge className={`${event.badgeColor} font-semibold shadow-lg`}>
              {event.type}
            </Badge>
          </div>

          {/* Icon */}
          <div className="absolute top-4 left-4">
            <div className={`bg-gradient-to-r ${event.color} p-3 rounded-xl shadow-lg`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Title at Bottom */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-xl font-bold leading-tight">
              {event.title}
            </h3>
          </div>
        </div>

        <CardContent className="p-6 space-y-4">
          {/* Event Details */}
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-blue-600" />
              <span className="text-sm font-medium">{event.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-green-600" />
              <span className="text-sm font-medium">{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-red-600" />
              <span className="text-sm font-medium">{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-2 text-purple-600" />
              <span className="text-sm font-medium">{event.participants}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {event.description}
          </p>

          {/* Action Button */}
          <Button 
            className={`w-full group/btn bg-gradient-to-r ${event.color} hover:shadow-lg transition-all duration-300`}
            disabled={event.category === "past"}
          >
            {event.category === "upcoming" ? (
              <>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </>
            ) : (
              "Event Completed"
            )}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6 shadow-lg">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            Events & Activities
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest events, workshops, hackathons, and activities happening in our 
            state-of-the-art computer laboratory. Join us in shaping the future of technology!
          </p>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12">
            <TabsTrigger value="upcoming" className="text-base">
              Upcoming Events ({upcomingEvents.length})
            </TabsTrigger>
            <TabsTrigger value="past" className="text-base">
              Past Events ({pastEvents.length})
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Want to organize an event?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We welcome proposals for student-led workshops, seminars, and tech events. 
              Contact the lab coordinator to discuss your ideas.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden border-0 bg-transparent shadow-2xl">
          <DialogTitle className="sr-only">
            {selectedImage?.title}
          </DialogTitle>
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-2 transition-all duration-300 group"
          >
            <X className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          {/* Image Container */}
          <div className="relative w-full">
            {selectedImage && (
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[85vh] object-contain"
                />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Click outside or press ESC to close
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}