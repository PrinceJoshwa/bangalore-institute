// import { GraduationCap, Phone, MessageCircle, Calendar, Star, ArrowRight, Sparkles, Clock } from "lucide-react"

// export default function Hero() {
//   const programs = [
//     {
//       title: "BCA + Full Stack + PGCCA",
//       category: "Technology",
//       duration: "3 Years",
//       fees: "₹2.5L Total",
//       color: "from-blue-600 to-indigo-600",
//       popular: true,
//     },
//     {
//       title: "BCA + Data Analytics + PGCCA",
//       category: "Analytics",
//       duration: "3 Years",
//       fees: "₹2.5L Total",
//       color: "from-purple-600 to-pink-600",
//     },
//     {
//       title: "BCA + Digital Marketing + PGCCA",
//       category: "Marketing",
//       duration: "3 Years",
//       fees: "₹2.5L Total",
//       color: "from-green-600 to-teal-600",
//     },
//     {
//       title: "BBA + Digital Marketing + PGCBA",
//       category: "Business",
//       duration: "3 Years",
//       fees: "₹2.3L Total",
//       color: "from-red-600 to-rose-600",
//     },
//     {
//       title: "BCOM + ACCA + PGCFM",
//       category: "Finance",
//       duration: "3 Years",
//       fees: "₹2.8L Total",
//       color: "from-indigo-600 to-blue-600",
//     },
//   ]

//   const keyBenefits = [
//     {
//       icon: "🤖",
//       title: "AI-Powered Learning",
//       description: "India's first AI-integrated curriculum",
//     },
//     {
//       icon: "💼",
//       title: "100% Placement Guarantee",
//       description: "Assured job placement with top companies",
//     },
//     {
//       icon: "🏆",
//       title: "Industry Certifications",
//       description: "Global certifications from leading tech giants",
//     },
//     {
//       icon: "🏫",
//       title: "17-Acre Smart Campus",
//       description: "Modern infrastructure with latest technology",
//     },
//   ]

//   return (
//     <div className="relative min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

//         <div className="relative container mx-auto px-4 py-20 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-sm font-medium">
//                   <Sparkles className="h-5 w-5 text-yellow-400" />
//                   India's First AI-Powered Education Institute
//                 </div>

//                 <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
//                   Transform Your
//                   <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
//                     Future Today
//                   </span>
//                 </h1>

//                 <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
//                   Join BIMSR - Bangalore Institute of Management Science & Research. Experience revolutionary education
//                   with AI-powered learning, guaranteed placements, and industry-leading certifications.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
//                   <div className="text-2xl font-bold">100%</div>
//                   <div className="text-sm text-blue-200">Placement</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
//                   <div className="text-2xl font-bold">₹15L</div>
//                   <div className="text-sm text-blue-200">Highest Package</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
//                   <div className="text-2xl font-bold">500+</div>
//                   <div className="text-sm text-blue-200">Industry Partners</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
//                   <div className="text-2xl font-bold">17</div>
//                   <div className="text-sm text-blue-200">Acre Campus</div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
//                   Apply Now - Limited Seats
//                   <ArrowRight className="h-5 w-5" />
//                 </button>
//                 <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
//                   Download Brochure
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
//                 <img
//                   src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                   alt="BIMSR Campus - Modern Education"
//                   className="w-full h-[500px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
//                     <div className="flex items-center gap-4">
//                       <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
//                         <GraduationCap className="h-8 w-8 text-white" />
//                       </div>
//                       <div>
//                         <div className="font-bold text-gray-900 text-lg">BIMSR Bangalore</div>
//                         <div className="text-gray-600">Empowering Future Leaders</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Admission Alert Banner */}
//       <section className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
//                 <Calendar className="h-6 w-6" />
//               </div>
//               <div>
//                 <div className="text-2xl font-bold">🚨 ADMISSIONS 2025-26 NOW OPEN!</div>
//                 <div className="text-red-100">Limited seats available - Book now with just ₹10,000</div>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
//                 Book Seat Now
//               </button>
//               <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
//                 Get Brochure
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Programs Overview */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Revolutionary Programs</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Choose from our industry-aligned programs designed to make you job-ready with cutting-edge skills and
//               guaranteed placements.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {programs.map((program, index) => (
//               <div key={index} className="group relative">
//                 {program.popular && (
//                   <div className="absolute -top-3 left-6 z-10">
//                     <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
//                       <Star className="h-4 w-4" />
//                       Most Popular
//                     </div>
//                   </div>
//                 )}
//                 <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
//                   >
//                     <GraduationCap className="h-8 w-8" />
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <div className="text-sm font-medium text-gray-500 mb-2">{program.category}</div>
//                       <h3 className="text-xl font-bold text-gray-900 leading-tight">{program.title}</h3>
//                     </div>

//                     <div className="flex justify-between items-center text-sm text-gray-600">
//                       <span className="flex items-center gap-1">
//                         <Clock className="h-4 w-4" />
//                         {program.duration}
//                       </span>
//                       <span className="font-semibold text-green-600">{program.fees}</span>
//                     </div>

//                     <button
//                       className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
//                     >
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <div className="group">
//               <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center justify-center text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <ArrowRight className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-700 mb-4">Explore All Programs</h3>
//                 <p className="text-gray-600 mb-6">Discover more specialized programs tailored for your career goals</p>
//                 <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
//                   View All Programs
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Key Benefits */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose BIMSR?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience the future of education with our unique blend of technology, industry expertise, and guaranteed
//               career success.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {keyBenefits.map((benefit, index) => (
//               <div key={index} className="group text-center">
//                 <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                   <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact & Action Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Take the first step towards a successful career. Our admission counselors are ready to guide you.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="group">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <MessageCircle className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">WhatsApp Chat</h3>
//                 <p className="text-blue-100 mb-6">Get instant answers to your queries</p>
//                 <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   Chat Now
//                 </button>
//               </div>
//             </div>

//             <div className="group">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Phone className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">Call Us</h3>
//                 <p className="text-blue-100 mb-6">Speak directly with our counselors</p>
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   8970002004
//                 </button>
//               </div>
//             </div>

//             <div className="group">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Calendar className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">Campus Visit</h3>
//                 <p className="text-blue-100 mb-6">Experience our world-class facilities</p>
//                 <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   Schedule Visit
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="text-center space-y-6">
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//                 🎯 Book Seat - Only ₹10,000
//               </button>
//               <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                 📋 Get Free Counseling
//               </button>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <div className="text-left">
//                   <div className="font-bold text-lg">💰 Special Offer</div>
//                   <div className="text-blue-100">Zero Cost EMI Available | Scholarship up to 50%</div>
//                 </div>
//                 <div className="text-right">
//                   <div className="font-bold text-lg">📍 Location</div>
//                   <div className="text-blue-100">Anekal, Bangalore</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Play, Star, Users, Award, TrendingUp, CheckCircle, Sparkles } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slides = [
    {
      title: "India's First AI-Powered Education Institute",
      subtitle: "Transform Your Future with Cutting-Edge Technology",
      description:
        "Experience revolutionary learning with AI-induced smart screens, guaranteed placements, and industry certifications from Google, Microsoft, and Meta.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      stats: { students: "5000+", placement: "100%", partners: "500+" },
    },
    {
      title: "100% Placement Guarantee",
      subtitle: "Your Success is Our Commitment",
      description:
        "Join thousands of successful graduates with starting packages of ₹4L-8L. Our dedicated placement cell ensures every student gets industry-ready training.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: { packages: "₹4L-8L", companies: "500+", success: "95%" },
    },
    {
      title: "Industry-Ready Programs",
      subtitle: "Learn from the Best, Become the Best",
      description:
        "Master cutting-edge technologies with live projects, industry mentorship, and globally recognized certifications that make you job-ready from day one.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: { programs: "5+", certifications: "15+", labs: "Advanced" },
    },
  ]

  const highlights = [
    { icon: <Star className="h-5 w-5" />, text: "AI-Powered Learning", color: "from-yellow-400 to-red-500" },
    { icon: <Award className="h-5 w-5" />, text: "Industry Certifications", color: "from-blue-400 to-purple-500" },
    { icon: <Users className="h-5 w-5" />, text: "Expert Faculty", color: "from-green-400 to-blue-500" },
    { icon: <TrendingUp className="h-5 w-5" />, text: "100% Placement", color: "from-purple-400 to-pink-500" },
  ]

  const programs = [
    { name: "BCA Full Stack", duration: "3 Years", package: "₹6-12L" },
    { name: "BCA Data Analytics", duration: "3 Years", package: "₹5-10L" },
    { name: "BCom ACCA", duration: "3 Years", package: "₹8-15L" },
    { name: "BBA Digital Marketing", duration: "3 Years", package: "₹4-8L" },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-semibold">Welcome to the Future of Education</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  {slides[currentSlide].title.split(" ").slice(0, 3).join(" ")}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {slides[currentSlide].title.split(" ").slice(3).join(" ")}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">{slides[currentSlide].subtitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{slides[currentSlide].description}</p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {highlight.icon}
                  </div>
                  <span className="font-semibold text-gray-800">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <span className="mr-2">Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Watch Video
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image & Programs */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt="BIMSR Campus"
                  className="w-full h-[500px] object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">5000+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-sm text-gray-600">Placement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Partners</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Program Overview */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Programs</h3>
              <div className="space-y-3">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-200 cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold text-gray-800">{program.name}</div>
                      <div className="text-sm text-gray-600">{program.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{program.package}</div>
                      <div className="text-xs text-gray-500">Starting Package</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Alert Banner */}
      <div className="relative z-10 bg-gradient-to-r from-red-600 to-pink-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div>
                <span className="font-bold">Admissions Open 2024!</span>
                <span className="ml-2">Limited seats available. Secure your future with just ₹10K booking.</span>
              </div>
            </div>
            <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg transition-all duration-200">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Quick Benefits Section */}
      <div className="relative z-10 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Placement</h3>
              <p className="text-gray-600">Guaranteed job placement with our industry partners</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Certifications</h3>
              <p className="text-gray-600">Google, Microsoft, Meta certified programs</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Learning</h3>
              <p className="text-gray-600">Smart classrooms with AI-induced technology</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">₹4L-8L Packages</h3>
              <p className="text-gray-600">High starting salaries with top companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
