import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Computer Science Block",
        "Room 502B, Fourth Floor, Gate No.5",
        "MIT College Campus, Beed Bypass Road, Satara Parisar,", 
        "Chh. Sambhajinagar(Aurangabad), Maharashtra, India",
        "PIN: 431010"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Lab In-charge: +91 9028597121",
        "Technical Support: +91 7666641597",
        "Emergency: +91 9511845323"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "sarika.zile@mit.asia",
        "mohammed.noman@mit.asia",
        "abdul.mohammad@mit.asia",
        "mohammadnoman.engg@gmail.com"
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:30 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: Closed",
        "Holidays: As per college calendar"
      ]
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl mb-4 sm:mb-5 lg:mb-6 shadow-lg">
            <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-5 lg:mb-6 px-4">
            Connect With Excellence
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Ready to experience the future of computer science education? Our expert team is here to assist 
            with lab access, technical support, and any questions about our world-class facilities.
          </p>
        </div>

        {/* Contact Information and Map */}
        <div className="space-y-8">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Google Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Lab Location - Interactive Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.075997455945!2d75.32200491859295!3d19.849271977564374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb988c254eb873%3A0x4388791935b718e6!2sMaharashtra%20Institute%20Of%20Technology!5e1!3m2!1sen!2sin!4v1762020264882!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maharashtra Institute of Technology Location"
                  className="w-full"
                />
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Campus Directions:
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From the main entrance (Gate No. 5), proceed to the Computer Science Block. Take the elevator or stairs to the fourth floor. The lab is located in Room 502B, marked with a "Computer Lab" sign.
                  </p>
                </div>
                <div className="p-5 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-3">Quick Tips:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    <li>• Click on the map to open in Google Maps</li>
                    <li>• Get turn-by-turn navigation</li>
                    <li>• View street view for better guidance</li>
                    <li>• Check real-time traffic conditions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}