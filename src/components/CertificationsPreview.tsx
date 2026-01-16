"use client"

import { useState, useEffect } from "react"
import { 
  Award, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Clock,
  Calendar,
  Users,
  Sparkles,
  GraduationCap,
  Zap
} from "lucide-react"
import { Link } from "react-router-dom"

export default function CertificationsPreview() {
  const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses')
  const [currentCourse, setCurrentCourse] = useState(0)

  // Courses Data
  const courses = [
    {
      id: 1,
      title: "DSA for Product-Based Companies",
      provider: "ExcelR & EDL",
      image: "/course1.jpeg",
      duration: "30 Hours",
      schedule: "7:00 PM - 9:00 PM",
      days: "Mon-Fri (15 days)",
      startDate: "21st July 2025",
      mode: "Live Online",
      price: "FREE",
      certificate: true,
      highlights: ["Interview Prep", "Top Tech Companies", "Hands-on Practice"],
      color: "from-blue-600 to-purple-600",
      registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form"
    },
    {
      id: 2,
      title: "DevOps Decode: Hands-on Fundamentals",
      provider: "ExcelR & EDL",
      image: "/course2.jpeg",
      duration: "30 Hours",
      schedule: "7:00 PM - 9:00 PM",
      days: "Mon-Fri (15 days)",
      startDate: "18th June 2025",
      mode: "Live Online",
      price: "FREE",
      certificate: true,
      highlights: ["CI/CD Pipelines", "Automation Tools", "Cloud Deployment"],
      color: "from-orange-500 to-red-500",
      registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form"
    },
    {
      id: 3,
      title: "Mastering Applied Machine Learning",
      provider: "ExcelR & BIMSR",
      image: "/course3.jpeg",
      duration: "30 Hours",
      schedule: "7:00 PM - 9:00 PM",
      days: "15 Days",
      startDate: "7th Jan 2025",
      mode: "Live Online",
      price: "FREE",
      certificate: true,
      highlights: ["Interview Cracking", "Real Projects", "ML Algorithms"],
      color: "from-green-500 to-teal-500",
      registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form"
    }
  ]

  // Certificates Data - Images only
  const certificates = [
    { id: 1, image: "/certificate1.jpeg" },
    { id: 2, image: "/certificate2.jpeg" },
    { id: 3, image: "/certificate3.jpeg" },
    { id: 4, image: "/certificate4.png" },
    { id: 5, image: "/certificate5.png" }
  ]

  // Auto-rotate courses
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeTab === 'courses') {
        setCurrentCourse((prev) => (prev + 1) % courses.length)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [activeTab])

  const nextCourse = () => setCurrentCourse((prev) => (prev + 1) % courses.length)
  const prevCourse = () => setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length)

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-xs sm:text-base">Industry-Ready Training</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Certifications & Courses
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Gain industry-recognized certifications and master cutting-edge skills with our partner programs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2">
          <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg border border-gray-100 w-full max-w-md sm:w-auto">
            <div className="flex gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('courses')}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-base flex-1 ${
                  activeTab === 'courses'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Upcoming Courses</span>
                <span className="sm:hidden">Courses</span>
                <span className={`px-1.5 sm:px-2 py-0.5 text-xs rounded-full ${activeTab === 'courses' ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>
                  {courses.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-base flex-1 ${
                  activeTab === 'certificates'
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Certifications</span>
                <span className="sm:hidden">Certs</span>
                <span className={`px-1.5 sm:px-2 py-0.5 text-xs rounded-full ${activeTab === 'certificates' ? 'bg-white/20' : 'bg-green-100 text-green-600'}`}>
                  {certificates.length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        {activeTab === 'courses' && (
          <div className="animate-fadeIn">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Course Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                  <img
                    src={courses[currentCourse].image}
                    alt={courses[currentCourse].title}
                    className="w-full h-[400px] object-fill group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* FREE Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                    FREE
                  </div>
                  {/* Certificate Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-semibold shadow-lg flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span>Free Certificate</span>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevCourse}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={nextCourse}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Course Details */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{courses[currentCourse].provider}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{courses[currentCourse].title}</h3>
                </div>

                {/* Course Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold text-gray-900">{courses[currentCourse].duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Starts</div>
                        <div className="font-semibold text-gray-900">{courses[currentCourse].startDate}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Mode</div>
                        <div className="font-semibold text-gray-900">{courses[currentCourse].mode}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Schedule</div>
                        <div className="font-semibold text-gray-900">{courses[currentCourse].schedule}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {courses[currentCourse].highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className={`bg-gradient-to-r ${courses[currentCourse].color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={courses[currentCourse].registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    to="/programs"
                    className="border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300"
                  >
                    View All Courses
                  </Link>
                </div>


                {/* Indicators */}
                <div className="flex justify-center space-x-2 pt-4">
                  {courses.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCourse(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentCourse
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
            </div>
                    <div className="mt-12 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Training Partners</h2>
            <p className="text-gray-600 text-sm sm:text-base">We collaborate with leading organizations to provide world-class training</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { 
                name: 'Google', 
                logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
              },
              { 
                name: 'Microsoft', 
                logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'
              },
              { 
                name: 'Coursera', 
                logo: '/coursera.webp'
              },
              { 
                name: 'ExcelR', 
                logo: '/ExcelR.jpg'
              },
              { 
                name: 'EY', 
                logo: '/EY.png'
              },
              { 
                name: 'NASSCOM', 
                logo: '/NASSCOM.svg'
              },
              { 
                name: 'SkillDunia', 
                logo: '/SkillDunia.png'
              },
              { 
                name: 'IIT Hyderabad', 
                logo: 'https://www.iith.ac.in/assets/images/logo.png'
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col items-center justify-center min-h-[80px] sm:min-h-[120px]"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 sm:h-12 max-w-[100px] sm:max-w-[140px] object-contain mb-1 sm:mb-3"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* <div className="font-medium text-gray-700 text-xs sm:text-sm text-center">{partner.name}</div> */}
              </div>
            ))}
          </div>
        </div>
          </div>
        )}

        {/* Certificates Section - Image Gallery Only */}
        {activeTab === 'certificates' && (
          <div className="animate-fadeIn">
            {/* Certificate Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg border-2 border-white hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 bg-white"
                >
                  <img
                    src={cert.image}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay - Just View icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      Click to View
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            {/* <div className="text-center">
              <Link
                to="/certifications"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>View All Certifications</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div> */}

                    {/* Partners Section */}
        <div className="mt-12 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Training Partners</h2>
            <p className="text-gray-600 text-sm sm:text-base">We collaborate with leading organizations to provide world-class training</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { 
                name: 'Google', 
                logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
              },
              { 
                name: 'Microsoft', 
                logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'
              },
              { 
                name: 'Coursera', 
                logo: '/coursera.webp'
              },
              { 
                name: 'ExcelR', 
                logo: '/ExcelR.jpg'
              },
              { 
                name: 'EY', 
                logo: '/EY.png'
              },
              { 
                name: 'NASSCOM', 
                logo: '/NASSCOM.svg'
              },
              { 
                name: 'SkillDunia', 
                logo: '/SkillDunia.png'
              },
              { 
                name: 'IIT Hyderabad', 
                logo: 'https://www.iith.ac.in/assets/images/logo.png'
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col items-center justify-center min-h-[80px] sm:min-h-[120px]"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 sm:h-12 max-w-[100px] sm:max-w-[140px] object-contain mb-1 sm:mb-3"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* <div className="font-medium text-gray-700 text-xs sm:text-sm text-center">{partner.name}</div> */}
              </div>
            ))}
          </div>
        </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Free Courses', value: '3+', icon: BookOpen, color: 'from-blue-500 to-purple-500' },
            { label: 'Certifications', value: '5+', icon: Award, color: 'from-green-500 to-teal-500' },
            { label: 'Partner Companies', value: '10+', icon: Users, color: 'from-orange-500 to-red-500' },
            { label: 'Students Certified', value: '500+', icon: GraduationCap, color: 'from-pink-500 to-rose-500' },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
