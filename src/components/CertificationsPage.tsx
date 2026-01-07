"use client"

import { useState } from "react"
import { 
  Clock,
  Calendar,
  Users,
  Sparkles,
  GraduationCap,
  ExternalLink,
  Grid,
  List,
  ArrowRight
} from "lucide-react"
import { Link } from "react-router-dom"

export default function CertificationsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'courses' | 'certificates'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

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
      highlights: ["Interview Prep", "Top Tech Companies", "Hands-on Practice", "DSA Mastery"],
      description: "Master Data Structures & Algorithms to crack top tech interviews! This comprehensive program covers all essential DSA topics required for product-based company interviews.",
      color: "from-blue-600 to-purple-600",
      registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
      category: "Development"
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
      highlights: ["CI/CD Pipelines", "Automation Tools", "Cloud Deployment", "Docker & Kubernetes"],
      description: "Gain practical insights into DevOps tools, CI/CD, automation & more! Learn industry-standard practices for modern software deployment.",
      color: "from-orange-500 to-red-500",
      registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
      category: "DevOps"
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
      highlights: ["Interview Cracking", "Real Projects", "ML Algorithms", "Python & Scikit-learn"],
      description: "Your key to cracking interviews! Master Applied Machine Learning with hands-on projects and real-world applications.",
      color: "from-green-500 to-teal-500",
      registerUrl: "https://www.excelr.com/excelr-free-courses-registration-form",
      category: "AI/ML"
    }
  ]

  // Additional Course Images (display as images only, no content)
  const courseImages = [
    { id: 4, image: "/course4.jpeg" },
    { id: 5, image: "/course5.jpeg" },
    { id: 6, image: "/course6.jpeg" },
    { id: 8, image: "/course8.jpeg" },
    { id: 9, image: "/course9.jpeg" },
    { id: 10, image: "/course10.jpeg" },
    { id: 11, image: "/course11.jpeg" },
    { id: 12, image: "/course12.jpeg" },
  ]

  // Certificates Data - Images only
  const certificates = [
    { id: 1, image: "/certificate1.jpeg" },
    { id: 2, image: "/certificate2.jpeg" },
    { id: 3, image: "/certificate3.jpeg" },
    { id: 4, image: "/certificate4.png" },
    { id: 5, image: "/certificate5.png" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            <span className="text-white font-semibold text-xs sm:text-base">Industry-Ready Training Programs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Certifications & Courses
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Gain industry-recognized certifications and master cutting-edge skills with our partner programs from Google, Microsoft, ExcelR, and more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400">{courses.length}+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Free Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">{certificates.length}+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Certifications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">10+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-400">500+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Students Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-10 gap-4">
          {/* Tabs */}
          <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-lg border border-gray-100 w-full md:w-auto">
            <div className="flex gap-1 sm:gap-2">
              {[
                { id: 'all', label: 'All', count: courses.length + certificates.length + courseImages.length },
                { id: 'courses', label: 'Courses', count: courses.length + courseImages.length },
                { id: 'certificates', label: 'Certificates', count: certificates.length }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'all' | 'courses' | 'certificates')}
                  className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm flex-1 md:flex-auto ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 sm:px-2 py-0.5 text-xs rounded-full ${activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-xl p-1 shadow-md border border-gray-100">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Courses Section */}
        {(activeTab === 'all' || activeTab === 'courses') && (
          <div className="mb-16">
            {activeTab === 'all' && (
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Courses</h3>
            )}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-80 h-48 md:h-auto' : 'h-56'}`}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color}`}>
                        COURSE
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FREE
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="text-sm text-blue-600 font-semibold mb-2">{course.provider}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    {/* Course Info */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                        {course.startDate}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-green-500" />
                        {course.mode}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <GraduationCap className="h-4 w-4 mr-2 text-orange-500" />
                        Free Certificate
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={course.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r ${course.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <span>Register Now</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Course Images Gallery */}
            {courseImages.length > 0 && (
              <>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">More Courses</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                  {courseImages.map((course) => (
                    <div
                      key={course.id}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 border-white hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 bg-white"
                    >
                      <img
                        src={course.image}
                        alt={`Course ${course.id}`}
                        className="w-full h-32 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Certificates Section - Images Only */}
        {(activeTab === 'all' || activeTab === 'certificates') && (
          <div className="mb-10 sm:mb-16">
            {activeTab === 'all' && (
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Our Certifications</h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 border-white hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 bg-white"
                >
                  <img
                    src={cert.image}
                    alt={`Certificate ${cert.id}`}
                    className="w-full h-48 sm:h-72 object-contain p-2 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

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
                <div className="font-medium text-gray-700 text-xs sm:text-sm text-center">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">Ready to Upskill?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have enhanced their skills and boosted their careers with our certification programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admission"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
