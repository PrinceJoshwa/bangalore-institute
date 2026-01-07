"use client"

import { GraduationCap, Award, Briefcase, Calendar } from "lucide-react"

export default function PresentMilestone() {
  const stats = [
    {
      value: "2023",
      label: "First Batch Started",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      value: "2026",
      label: "First Batch Graduated",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      value: "805+",
      label: "Job Offers",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      value: "30+",
      label: "Certifications",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  // Top MNC companies with logo images
  const companies = [
    { name: "TCS", logo: "/TCS.png" },
    { name: "Infosys", logo: "/infosys.png" },
    { name: "Cognizant", logo: "/CTS.png" },
    { name: "Accenture", logo: "/Accenture.png" },
    { name: "Tech Mahindra", logo: "/Tech Mahindra Logo_3.webp" },
    { name: "HCLTech", logo: "/HCLTECH.png" },
    { name: "Capgemini", logo: "/Capgemini.webp" },
    { name: "IBM", logo: "/IBM_logo.svg.png" },
    { name: "Zell Education", logo: "/Zell.png" },
    { name: "Enormayu", logo: "/enormayu.png" },
    { name: "Deleite", logo: "/deleitepng.png" },
  ]

  return (
    <section className="relative bg-white py-10 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Present <span className="text-blue-600">Milestone</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Celebrating our first batch's journey from admission to placement success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Logos Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-8">
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Top Recruiters Visiting Our Campus</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Leading MNCs trust BIMSR for quality talent</p>
          </div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-purple-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Logos */}
            <div className="flex animate-marquee items-center">
              {/* First set */}
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-6 bg-white border border-gray-200 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  style={{ minWidth: '100px', height: '60px' }}
                >
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-h-8 sm:max-h-12 max-w-[80px] sm:max-w-[120px] object-contain"
                    title={company.name}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-6 bg-white border border-gray-200 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  style={{ minWidth: '100px', height: '60px' }}
                >
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-h-8 sm:max-h-12 max-w-[80px] sm:max-w-[120px] object-contain"
                    title={company.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
