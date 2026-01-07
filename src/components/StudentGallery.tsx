"use client"

import { useState, useEffect } from "react"
import { 
  Trophy, 
  GraduationCap, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Briefcase,
  TrendingUp,
  Users,
  Star,
  Zap,
  Target,
  BadgePercent,
  Sparkles
} from "lucide-react"
import { Link } from "react-router-dom"

export default function StudentGallery() {
  const [activeSection, setActiveSection] = useState<'football' | 'campus' | 'scholarships' | 'hiring'>('football')
  const [currentVideo, setCurrentVideo] = useState(0)
  const [currentPartner, setCurrentPartner] = useState(0)

  // Red Bull Official Partner Football Event Videos
  const footballVideos = [
    {
      id: 1,
      title: "Red Bull Campus Football Championship 2024",
      description: "BIMSR students competing in the prestigious Red Bull Campus Football Championship. Our team showcased exceptional skills and sportsmanship.",
      videoUrl: "/IMG_4750.MOV",
      duration: "Event Video 1",
      date: "December 2024",
      highlights: ["Quarter Finals", "Best Player Award", "Team Spirit Trophy"]
    },
    {
      id: 2,
      title: "BIMSR vs Top Colleges - Red Bull Cup Finals",
      description: "Witness the thrilling final match sponsored by Red Bull where our athletes displayed world-class performance and determination.",
      videoUrl: "/IMG_4755.MOV",
      duration: "Event Video 2",
      date: "November 2024",
      highlights: ["Champions Trophy", "Golden Boot", "Fair Play Award"]
    }
  ]

  // Campus Life Images
  const campusImages = [
    { id: 1, image: "/_DSC5459.JPG", title: "Academic Environment" },
    { id: 2, image: "/_DSC5512.JPG", title: "Interactive Learning" },
    { id: 3, image: "/_DSC5529.JPG", title: "Classroom Sessions" },
    { id: 4, image: "/_DSC5577.JPG", title: "Student Activities" },
    { id: 5, image: "/_DSC5589.JPG", title: "Teaching Excellence" },
    { id: 6, image: "/_DSC5627.JPG", title: "Campus Experience" },
  ]

  // Scholarship Information
  const scholarshipData = {
    mainScholarship: {
      percentage: "99%",
      amount: "₹15,000",
      period: "per year",
      type: "Corporate Scholarship",
      eligibility: [
        "Merit-based selection",
        "Academic excellence (75%+ in 12th)",
        "Sports achievements",
        "Extra-curricular excellence",
        "Financial need consideration"
      ],
      benefits: [
        "Tuition fee reduction",
        "Free laptop kit",
        "Sports kit for athletes",
        "Exam fee waiver",
        "Library membership"
      ]
    },
    additionalScholarships: [
      {
        name: "Sports Excellence Scholarship",
        amount: "Up to ₹50,000",
        icon: Trophy,
        color: "from-orange-500 to-red-500"
      },
      {
        name: "Academic Merit Scholarship",
        amount: "Up to ₹30,000",
        icon: GraduationCap,
        color: "from-blue-500 to-purple-500"
      },
      {
        name: "Women Empowerment Scholarship",
        amount: "Up to ₹25,000",
        icon: Star,
        color: "from-pink-500 to-rose-500"
      },
      {
        name: "Industry Partner Scholarship",
        amount: "Up to ₹40,000",
        icon: Building2,
        color: "from-green-500 to-teal-500"
      }
    ]
  }

  // Hiring Partners Data
  const hiringPartners = [
    { name: "TCS", logo: "🏢", sector: "IT Services", package: "₹3.5-6 LPA" },
    { name: "Infosys", logo: "💻", sector: "Technology", package: "₹4-7 LPA" },
    { name: "Wipro", logo: "🌐", sector: "IT Services", package: "₹3.5-6 LPA" },
    { name: "Accenture", logo: "⚡", sector: "Consulting", package: "₹5-8.5 LPA" },
    { name: "Cognizant", logo: "🔧", sector: "Technology", package: "₹4-7 LPA" },
    { name: "IBM", logo: "🏛️", sector: "Technology", package: "₹5-8.5 LPA" },
    { name: "HCL", logo: "🚀", sector: "IT Services", package: "₹4-7 LPA" },
    { name: "Tech Mahindra", logo: "📱", sector: "IT Services", package: "₹4-6.5 LPA" },
    { name: "Capgemini", logo: "🎯", sector: "Consulting", package: "₹4.5-8 LPA" },
    { name: "Deloitte", logo: "📊", sector: "Consulting", package: "₹6-8.5 LPA" },
    { name: "KPMG", logo: "💼", sector: "Consulting", package: "₹5.5-8 LPA" },
    { name: "EY", logo: "📈", sector: "Consulting", package: "₹5-8 LPA" },
  ]

  const hiringStat = {
    avgPackage: "₹3.5 LPA",
    maxPackage: "₹8.5 LPA",
    totalPartners: "50+",
    placementRate: "100%"
  }

  // Auto-rotate partners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % Math.ceil(hiringPartners.length / 4))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % footballVideos.length)
  }

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + footballVideos.length) % footballVideos.length)
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="h-5 w-5 text-red-400" />
            <span className="text-red-300 font-semibold">Student Life at BIMSR</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Student Gallery
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Experience the vibrant campus life, exciting events, scholarships, and career opportunities at BIMSR
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex justify-center mb-12 px-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { id: 'football', name: 'Sports', fullName: 'Football Events', icon: Trophy, color: 'from-red-500 to-orange-500' },
                { id: 'campus', name: 'Campus', fullName: 'Campus Life', icon: GraduationCap, color: 'from-cyan-500 to-blue-500' },
                { id: 'scholarships', name: 'Scholarships', fullName: 'Scholarships', icon: Award, color: 'from-green-500 to-emerald-500' },
                { id: 'hiring', name: 'Partners', fullName: 'Hiring Partners', icon: Briefcase, color: 'from-blue-500 to-purple-500' },
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id as 'football' | 'campus' | 'scholarships' | 'hiring')}
                    className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      activeSection === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="hidden sm:inline">{tab.fullName}</span>
                    <span className="sm:hidden">{tab.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Football Events Section */}
        {activeSection === 'football' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Red Bull Partner Badge */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-1">
                <div className="bg-slate-900 rounded-xl px-8 py-4 flex items-center space-x-4">
                  <div className="text-4xl">🐂</div>
                  <div>
                    <div className="text-sm text-red-400 font-medium">Official Partner</div>
                    <div className="text-2xl font-bold text-white">Red Bull</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Campus Football</div>
                    <div className="text-lg font-semibold text-yellow-400">Championship 2024</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Showcase */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Video Player */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-red-500/30 bg-black">
                    <video
                      key={footballVideos[currentVideo].id}
                      className="w-full h-[400px] object-cover"
                      controls
                      poster=""
                    >
                      <source src={footballVideos[currentVideo].videoUrl} type="video/quicktime" />
                      <source src={footballVideos[currentVideo].videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Red Bull Logo */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 pointer-events-none">
                      <span className="text-2xl">🐂</span>
                      <span className="text-white font-bold ml-2">Red Bull</span>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevVideo}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </div>

                {/* Video Details */}
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {footballVideos[currentVideo].title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {footballVideos[currentVideo].description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-yellow-400">Event Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {footballVideos[currentVideo].highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-red-600/20 to-orange-600/20 text-white px-4 py-2 rounded-full text-sm border border-red-500/30"
                          >
                            🏆 {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Matches Played', value: '15+', icon: '⚽' },
                      { label: 'Goals Scored', value: '42', icon: '🥅' },
                      { label: 'Trophies Won', value: '3', icon: '🏆' },
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Video Indicators */}
                  <div className="flex justify-center space-x-2">
                    {footballVideos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentVideo
                            ? 'bg-red-500 w-8'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campus Life Section */}
        {activeSection === 'campus' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Section Header */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-6">
                <GraduationCap className="h-5 w-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Academic Excellence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Campus Life at BIMSR</h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                Experience world-class education with interactive learning, modern facilities, and dedicated faculty
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {campusImages.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-bold text-white">{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: 'Expert Faculty', value: '50+', icon: '👨‍🏫' },
                { label: 'Smart Classrooms', value: '25+', icon: '🖥️' },
                { label: 'Lab Facilities', value: '10+', icon: '🔬' },
                { label: 'Library Books', value: '5000+', icon: '📚' },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scholarships Section */}
        {activeSection === 'scholarships' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Main Scholarship Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-2xl"></div>

                <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left - Main Info */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
                      <BadgePercent className="h-5 w-5 text-green-400" />
                      <span className="text-green-300 font-semibold">Corporate Scholarship Program</span>
                    </div>

                    <div>
                      <h3 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-2">
                        {scholarshipData.mainScholarship.percentage}
                      </h3>
                      <p className="text-2xl text-white mb-1">
                        Up to <span className="font-bold text-yellow-400">{scholarshipData.mainScholarship.amount}</span>
                      </p>
                      <p className="text-lg text-gray-300">{scholarshipData.mainScholarship.period}</p>
                    </div>

                    <p className="text-gray-300 text-lg">
                      BIMSR offers comprehensive corporate scholarships to deserving students, making quality education accessible to all.
                    </p>

                    <Link
                      to="/scholarships"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Apply for Scholarship</span>
                      <Zap className="h-5 w-5" />
                    </Link>
                  </div>

                  {/* Right - Benefits & Eligibility */}
                  <div className="space-y-6">
                    {/* Eligibility */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2 text-green-400" />
                        Eligibility Criteria
                      </h4>
                      <ul className="space-y-2">
                        {scholarshipData.mainScholarship.eligibility.map((item, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-yellow-400" />
                        Scholarship Benefits
                      </h4>
                      <ul className="space-y-2">
                        {scholarshipData.mainScholarship.benefits.map((item, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Scholarships */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">More Scholarship Opportunities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scholarshipData.additionalScholarships.map((scholarship, index) => {
                  const Icon = scholarship.icon
                  return (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-r ${scholarship.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{scholarship.name}</h4>
                      <p className="text-2xl font-bold text-green-400">{scholarship.amount}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Hiring Partners Section */}
        {activeSection === 'hiring' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Stats Banner */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Average Package', value: hiringStat.avgPackage, icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
                { label: 'Highest Package', value: hiringStat.maxPackage, icon: Award, color: 'from-purple-500 to-pink-500' },
                { label: 'Hiring Partners', value: hiringStat.totalPartners, icon: Building2, color: 'from-orange-500 to-red-500' },
                { label: 'Placement Rate', value: hiringStat.placementRate, icon: Users, color: 'from-green-500 to-emerald-500' },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Package Range Banner */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Salary Packages Offered by Our Partners</h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Starting From</div>
                  <div className="text-4xl font-bold text-blue-400">₹3.5 LPA</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <div className="text-2xl">➡️</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Up To</div>
                  <div className="text-4xl font-bold text-purple-400">₹8.5 LPA</div>
                </div>
              </div>
            </div>

            {/* Partners Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">Our Hiring Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {hiringPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                        {partner.logo}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{partner.name}</h4>
                      <p className="text-sm text-gray-400 mb-3">{partner.sector}</p>
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg py-2 px-3">
                        <span className="text-green-400 font-semibold">{partner.package}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 inline-block">
                <h4 className="text-xl font-bold text-white mb-4">Ready to Launch Your Career?</h4>
                <p className="text-gray-300 mb-6 max-w-md">
                  Join BIMSR and get placed in top companies with competitive salary packages
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/placements"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    View All Placements
                  </Link>
                  <Link
                    to="/admission"
                    className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
