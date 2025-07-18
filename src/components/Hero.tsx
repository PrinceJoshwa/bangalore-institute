// "use client"

// import { useState, useEffect } from "react"
// import { ArrowRight, Phone, Star, CheckCircle, Sparkles, Laptop, Trophy, GraduationCap, Shield } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % 3)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   const slides = [
//     {
//       title: "Stuck wondering what to do after 12th?",
//       subtitle: "BIMSR - Where Dreams Meet Direction & Careers Begin with Clarity",
//       description:
//         "Don't let high college fees in Bangalore without placement assurance become your nightmare. Join BIMSR - AICTE recognized & affiliated to Bangalore North University with 100% placement guarantee.",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//       stats: { recognition: "AICTE", affiliation: "BNU", placement: "100%" },
//     },
//     {
//       title: "International-Level Education at Indian Price",
//       subtitle: "Future-Ready Bachelor's Degrees + Fully Funded Postgraduate",
//       description:
//         "Get world-class education with guaranteed placements, free laptop kit, sports kit for athletes, and 0% interest EMI options. Plus, 1-Year Postgraduate Course - 100% Funded by BIMSR!",
//       image:
//         "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       stats: { funding: "100%", emi: "0%", kits: "Free" },
//     },
//     {
//       title: "Calling All Footballers! Want to Go Pro?",
//       subtitle: "BIMSR Sponsors You for Championship Levels",
//       description:
//         "Train under AIFFF Qualified Coaches for FREE! Get sponsored for all championship levels. BIMSR is where passion meets profession - become a world-class professional from one campus.",
//       image:
//         "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       stats: { coaching: "AIFFF", sponsorship: "Full", training: "FREE" },
//     },
//   ]

//   const highlights = [
//     { icon: <GraduationCap className="h-5 w-5" />, text: "AICTE Recognized", color: "from-blue-400 to-purple-500" },
//     { icon: <Shield className="h-5 w-5" />, text: "100% Placement Guarantee", color: "from-green-400 to-blue-500" },
//     { icon: <Laptop className="h-5 w-5" />, text: "Free Laptop Kit", color: "from-purple-400 to-pink-500" },
//     { icon: <Trophy className="h-5 w-5" />, text: "Sports Excellence", color: "from-yellow-400 to-red-500" },
//   ]

//   const programs = [
//     { name: "Digital Marketing", duration: "3+1 Years", package: "₹4-8L", highlight: "Most In-Demand" },
//     { name: "Data Analysis", duration: "3+1 Years", package: "₹5-10L", highlight: "High Growth" },
//     { name: "Full Stack Development", duration: "3+1 Years", package: "₹6-12L", highlight: "Tech Leader" },
//     { name: "ACCA Level 3", duration: "3+1 Years", package: "₹8-15L", highlight: "International" },
//   ]

//   const uniqueBenefits = [
//     {
//       icon: <GraduationCap className="h-6 w-6" />,
//       title: "Postgraduate Fully Funded",
//       desc: "1-Year PG Course - 100% Paid by BIMSR",
//     },
//     { icon: <Laptop className="h-6 w-6" />, title: "Free Laptop Kit", desc: "All students receive laptop kit" },
//     {
//       icon: <Trophy className="h-6 w-6" />,
//       title: "Sports Kit & Training",
//       desc: "Free sports kit + AIFFF qualified coaches",
//     },
//     { icon: <Star className="h-6 w-6" />, title: "0% Interest EMI", desc: "Flexible payment options available" },
//   ]

//   const handleCallNow = () => {
//     window.location.href = "tel:7676401932"
//   }

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
//       </div>

//       {/* Main Hero Content */}
//       <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//           {/* Left Content */}
//           <div
//             className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/10 to-orange-600/10 backdrop-blur-sm border border-red-200/50 rounded-full px-6 py-3">
//               <Sparkles className="h-5 w-5 text-red-600" />
//               <span className="text-red-700 font-semibold">Don't Let High Fees Become Your Nightmare!</span>
//             </div>

//             {/* Main Title */}
//             <div className="space-y-4">
//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                 <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
//                   {slides[currentSlide].title}
//                 </span>
//               </h1>
//               <h2 className="text-xl lg:text-2xl font-semibold text-gray-700">{slides[currentSlide].subtitle}</h2>
//               <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{slides[currentSlide].description}</p>
//             </div>

//             {/* Recognition Banner */}
//             <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <Shield className="h-8 w-8 text-green-600" />
//                   <div>
//                     <div className="font-bold text-green-800">AICTE Recognized</div>
//                     <div className="text-sm text-green-600">Affiliated to Bangalore North University</div>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="font-bold text-blue-800">100% Placement</div>
//                   <div className="text-sm text-blue-600">Guaranteed</div>
//                 </div>
//               </div>
//             </div>

//             {/* Football Excellence Section */}
//             <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4">
//               <div className="flex items-center space-x-4">
//                 <Trophy className="h-8 w-8 text-orange-600" />
//                 <div>
//                   <div className="font-bold text-orange-800">Football Excellence Program</div>
//                   <div className="text-sm text-orange-600">
//                     AIFFF Qualified Coaches • Championship Sponsorship • Professional Training
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Key Highlights */}
//             <div className="grid grid-cols-2 gap-4">
//               {highlights.map((highlight, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white shadow-lg`}
//                   >
//                     {highlight.icon}
//                   </div>
//                   <span className="font-semibold text-gray-800">{highlight.text}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/admission"
//                 className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
//               >
//                 <span className="mr-2">Secure Admission</span>
//                 <ArrowRight className="h-5 w-5" />
//               </Link>
//               <button
//                 onClick={handleCallNow}
//                 className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
//               >
//                 <Phone className="h-5 w-5 mr-2" />
//                 Call Now
//               </button>
//             </div>

//             {/* Quick Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-8">
//               {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                     {value}
//                   </div>
//                   <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content - Image & Programs */}
//           <div
//             className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
//           >
//             {/* Hero Image */}
//             <div className="relative">
//               <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//                 <img
//                   src={slides[currentSlide].image || "/placeholder.svg"}
//                   alt="BIMSR Campus"
//                   className="w-full h-[500px] object-cover transition-all duration-1000"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

//                 {/* Floating Benefits Card */}
//                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
//                   <h3 className="font-bold text-gray-900 mb-3">Exclusive Benefits</h3>
//                   <div className="grid grid-cols-2 gap-3 text-sm">
//                     <div className="flex items-center space-x-2">
//                       <CheckCircle className="h-4 w-4 text-green-600" />
//                       <span>Free Laptop Kit</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <CheckCircle className="h-4 w-4 text-green-600" />
//                       <span>0% Interest EMI</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <CheckCircle className="h-4 w-4 text-green-600" />
//                       <span>PG 100% Funded</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <CheckCircle className="h-4 w-4 text-green-600" />
//                       <span>Sports Sponsorship</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Slide Indicators */}
//               <div className="flex justify-center space-x-2 mt-6">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentSlide
//                         ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
//                         : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Future-Ready Programs */}
//             <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Future-Ready Bachelor's Degrees</h3>
//               <div className="space-y-3">
//                 {programs.map((program, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-200 cursor-pointer group"
//                   >
//                     <div>
//                       <div className="font-semibold text-gray-800 flex items-center space-x-2">
//                         <span>{program.name}</span>
//                         <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-full">
//                           {program.highlight}
//                         </span>
//                       </div>
//                       <div className="text-sm text-gray-600">{program.duration}</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="font-bold text-green-600">{program.package}</div>
//                       <div className="text-xs text-gray-500">Starting Package</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Urgent Admission Alert Banner */}
//       <div className="relative z-10 bg-gradient-to-r from-red-600 to-pink-600 text-white py-4">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
//               <div>
//                 <span className="font-bold">⚠️ LIMITED SEATS AVAILABLE!</span>
//                 <span className="ml-2">Thousands of students face the same fear every year. Don't be one of them!</span>
//               </div>
//             </div>
//             <Link
//               to="/contact"
//               className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg transition-all duration-200"
//             >
//               Enquire Now
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Unique Benefits Section */}
//       <div className="relative z-10 bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//               Why Choose BIMSR? <span className="text-blue-600">We're Not Done Yet!</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               One decision could change your future. BIMSR is where passion meets profession - become world-class from
//               one campus.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {uniqueBenefits.map((benefit, index) => (
//               <div key={index} className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                   <div className="text-white">{benefit.icon}</div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-12">
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">📩 Ready to Secure Your Future? 🎓</h3>
//               <p className="text-lg text-gray-700 mb-6">
//                 Drop 'Admission' in the comments or call us now - our team is waiting to help you take the first step.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={handleCallNow}
//                   className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   📞 Call 7676401932
//                 </button>
//                 <a
//                   href="mailto:admissions@bangaloreinstitutions.com"
//                   className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   📧 Email Us
//                 </a>
//               </div>
//               <p className="text-sm text-gray-600 mt-4 font-semibold">
//                 🎓 BIMSR – Backing Your Future. International-level education at an Indian price.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Phone, Star, CheckCircle, Sparkles, Laptop, Trophy, GraduationCap, Shield } from "lucide-react"
import { Link } from "react-router-dom"

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
      title: "BIMSR College",
      subtitle: "Bachelors Degree with Post-graduation and Professional Development Certification Programs.",
      description:
        "Welcome to BIMSR College, where we blend academic excellence with industry-relevant skills. Our unique integrated programs combine bachelor's degrees with professional certifications to make you job-ready.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      stats: { recognition: "AICTE", affiliation: "BNU", placement: "100%" },
    },
    {
      title: "International-Level Education at Indian Price",
      subtitle: "Integrated Bachelor's + Professional Certification Programs",
      description:
        "Get world-class education with guaranteed placements, free laptop kit, sports kit for athletes, and 0% interest EMI options. Plus, 1-Year Postgraduate Course - 100% Funded by BIMSR!",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: { funding: "100%", emi: "0%", kits: "Free" },
    },
    {
      title: "Calling All Footballers! Want to Go Pro?",
      subtitle: "BIMSR Sponsors You for Championship Levels",
      description:
        "Train under AIFFF Qualified Coaches for FREE! Get sponsored for all championship levels. BIMSR is where passion meets profession - become a world-class professional from one campus.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      stats: { coaching: "AIFFF", sponsorship: "Full", training: "FREE" },
    },
  ]

  const highlights = [
    { icon: <GraduationCap className="h-5 w-5" />, text: "AICTE Recognized", color: "from-blue-400 to-purple-500" },
    { icon: <Shield className="h-5 w-5" />, text: "100% Placement Guarantee", color: "from-green-400 to-blue-500" },
    { icon: <Laptop className="h-5 w-5" />, text: "Free Laptop Kit", color: "from-purple-400 to-pink-500" },
    { icon: <Trophy className="h-5 w-5" />, text: "Sports Excellence", color: "from-yellow-400 to-red-500" },
  ]

  const programs = [
    { name: "Digital Marketing", duration: "3+1 Years", package: "₹4-8L", highlight: "Most In-Demand" },
    { name: "Data Analysis", duration: "3+1 Years", package: "₹5-10L", highlight: "High Growth" },
    { name: "Full Stack Development", duration: "3+1 Years", package: "₹6-12L", highlight: "Tech Leader" },
    { name: "ACCA Level 3", duration: "3+1 Years", package: "₹8-15L", highlight: "International" },
  ]

  const uniqueBenefits = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Postgraduate Fully Funded",
      desc: "1-Year PG Course - 100% Paid by BIMSR",
    },
    { icon: <Laptop className="h-6 w-6" />, title: "Free Laptop Kit", desc: "All students receive laptop kit" },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Sports Kit & Training",
      desc: "Free sports kit + AIFFF qualified coaches",
    },
    { icon: <Star className="h-6 w-6" />, title: "0% Interest EMI", desc: "Flexible payment options available" },
  ]

  const handleCallNow = () => {
    window.location.href = "tel:7676401932"
  }

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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/10 to-orange-600/10 backdrop-blur-sm border border-red-200/50 rounded-full px-6 py-3">
              <Sparkles className="h-5 w-5 text-red-600" />
              <span className="text-red-700 font-semibold">Don't Let High Fees Become Your Nightmare!</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-700">{slides[currentSlide].subtitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{slides[currentSlide].description}</p>
            </div>

            {/* Recognition Banner */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-bold text-green-800">AICTE Recognized</div>
                    <div className="text-sm text-green-600">Affiliated to Bangalore North University</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-800">100% Placement</div>
                  <div className="text-sm text-blue-600">Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Football Excellence Section */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4">
              <div className="flex items-center space-x-4">
                <Trophy className="h-8 w-8 text-orange-600" />
                <div>
                  <div className="font-bold text-orange-800">Football Excellence Program</div>
                  <div className="text-sm text-orange-600">
                    AIFFF Qualified Coaches • Championship Sponsorship • Professional Training
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
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
              <Link
                to="/admission"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">Secure Admission</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={handleCallNow}
                className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {Object.entries(slides[currentSlide].stats).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

                {/* Floating Benefits Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <h3 className="font-bold text-gray-900 mb-3">Exclusive Benefits</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Free Laptop Kit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>0% Interest EMI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>PG 100% Funded</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Sports Sponsorship</span>
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

            {/* Future-Ready Programs */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Future-Ready Bachelor's Degrees</h3>
              <div className="space-y-3">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-200 cursor-pointer group"
                  >
                    <div>
                      <div className="font-semibold text-gray-800 flex items-center space-x-2">
                        <span>{program.name}</span>
                        <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-full">
                          {program.highlight}
                        </span>
                      </div>
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

      {/* Urgent Admission Alert Banner */}
      <div className="relative z-10 bg-gradient-to-r from-red-600 to-pink-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div>
                <span className="font-bold">⚠️ LIMITED SEATS AVAILABLE!</span>
                <span className="ml-2">Thousands of students face the same fear every year. Don't be one of them!</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg transition-all duration-200"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* Unique Benefits Section */}
      <div className="relative z-10 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BIMSR? <span className="text-blue-600">We're Not Done Yet!</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              One decision could change your future. BIMSR is where passion meets profession - become world-class from
              one campus.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {uniqueBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📩 Ready to Secure Your Future? 🎓</h3>
              <p className="text-lg text-gray-700 mb-6">
                Drop 'Admission' in the comments or call us now - our team is waiting to help you take the first step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleCallNow}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  📞 Call 7676401932
                </button>
                <a
                  href="mailto:admissions@bangaloreinstitutions.com"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4 font-semibold">
                🎓 BIMSR – Backing Your Future. International-level education at an Indian price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
