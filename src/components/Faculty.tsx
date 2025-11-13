import { Mail, BookOpen, Award, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Faculty() {
  const facultyMembers = [
    {
      name: "Sarika H. Zile",
      designation: "Lab In-charge & Assistant Professor",
      specialization: "Data Structures & Algorithms, Machine Learning",
      experience: "2 years",
      email: "sarika.zile@mit.asia",
      phone: "+91 9028597121",
      image: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/199ae00c456d38ac411eee8fd940bb5d5099d9db/sarika_bhalerao.png"
    },
    {
      name: "Shilpa A. Sanap",
      designation: "Assistant Professor",
      specialization: "Business Analytics",
      experience: "19 years",
      email: "shilpa.sanap@mit.asia",
      phone: "+91 9405347993",
      image: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/199ae00c456d38ac411eee8fd940bb5d5099d9db/shilpa-faculty.png"
    },
    {
      name: "Lata N. Jadhav",
      designation: "Assistant Professor",
      specialization: "Design & Analysis of Algorithms",
      experience: "10 years",
      email: "lata.jadhav@mit.asia",
      phone: "+91 9561758820",
      image: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/199ae00c456d38ac411eee8fd940bb5d5099d9db/lata-jadhav.png"
    },
    {
      name: "Swati R. Vibhute",
      designation: "Assistant Professsor",
      specialization: "Design & Analysis of Algorithms",
      experience: "11 years",
      email: "swati.vibhute@mit.asia",
      phone: "+91 7709661531",
      image: "https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/08707aa74923633709ceb793b4be5fc4e5f18c60/SRV.JPG"
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#EFF6FF] px-5 py-2 rounded-lg mb-4 border border-[#BFDBFE]">
            <Users className="h-4 w-4 text-[#2563EB]" strokeWidth={2} />
            <span className="text-[#2563EB] font-medium">Our Faculty Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A] mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-lg text-[#475569] max-w-3xl mx-auto">
            Dedicated professionals committed to providing quality education and guidance
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {facultyMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-[#E2E8F0] hover:-translate-y-0.5 rounded-lg"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image Section */}
                  <div className="sm:w-1/3">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="sm:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#2563EB] font-medium mb-5">
                      {member.designation}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start text-sm text-[#475569]">
                        <BookOpen className="h-4 w-4 mr-2.5 mt-0.5 text-[#2563EB] flex-shrink-0" strokeWidth={2} />
                        <span>{member.specialization}</span>
                      </div>
                      <div className="flex items-center text-sm text-[#475569]">
                        <Award className="h-4 w-4 mr-2.5 text-green-500 flex-shrink-0" strokeWidth={2} />
                        <span>{member.experience} of experience</span>
                      </div>
                      <div className="flex items-center text-sm text-[#475569]">
                        <Mail className="h-4 w-4 mr-2.5 text-purple-500 flex-shrink-0" strokeWidth={2} />
                        <a href={`mailto:${member.email}`} className="hover:text-[#2563EB] transition-colors font-medium">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
