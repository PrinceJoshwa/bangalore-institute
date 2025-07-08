// // "use client"

// // import { useState } from "react"
// // import { TrendingUp, Users, Award, Building, ChevronLeft, ChevronRight, Star, MapPin, Calendar } from "lucide-react"

// // export default function PlacementsEnhanced() {
// //   const [currentTestimonial, setCurrentTestimonial] = useState(0)
// //   const [selectedYear, setSelectedYear] = useState("2024")
// //   const [activeTab, setActiveTab] = useState("overview")

// //   const placementStats = {
// //     "2024": {
// //       totalPlacements: 245,
// //       averagePackage: "₹6.5 LPA",
// //       highestPackage: "₹18 LPA",
// //       placementRate: "100%",
// //       topRecruiters: 45,
// //     },
// //     "2023": {
// //       totalPlacements: 220,
// //       averagePackage: "₹5.8 LPA",
// //       highestPackage: "₹15 LPA",
// //       placementRate: "98%",
// //       topRecruiters: 42,
// //     },
// //     "2022": {
// //       totalPlacements: 195,
// //       averagePackage: "₹5.2 LPA",
// //       highestPackage: "₹12 LPA",
// //       placementRate: "96%",
// //       topRecruiters: 38,
// //     },
// //   }

// //   const topRecruiters = [
// //     { name: "TCS", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-8 LPA" },
// //     { name: "Infosys", logo: "/placeholder.svg?height=80&width=120", packages: "₹5-9 LPA" },
// //     { name: "Wipro", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-7 LPA" },
// //     { name: "Accenture", logo: "/placeholder.svg?height=80&width=120", packages: "₹6-12 LPA" },
// //     { name: "IBM", logo: "/placeholder.svg?height=80&width=120", packages: "₹7-15 LPA" },
// //     { name: "Amazon", logo: "/placeholder.svg?height=80&width=120", packages: "₹10-18 LPA" },
// //     { name: "Microsoft", logo: "/placeholder.svg?height=80&width=120", packages: "₹12-18 LPA" },
// //     { name: "Google", logo: "/placeholder.svg?height=80&width=120", packages: "₹15-25 LPA" },
// //     { name: "Deloitte", logo: "/placeholder.svg?height=80&width=120", packages: "₹8-14 LPA" },
// //     { name: "Cognizant", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-8 LPA" },
// //     { name: "HCL", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-7 LPA" },
// //     { name: "Tech Mahindra", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-8 LPA" },
// //   ]

// //   const successStories = [
// //     {
// //       name: "Priya Sharma",
// //       program: "BCA + Full Stack Development",
// //       company: "Amazon",
// //       package: "₹18 LPA",
// //       image: "/images/testimonial-1.jpg",
// //       location: "Bangalore",
// //       year: "2024",
// //       story:
// //         "The comprehensive curriculum and industry exposure at BIMSR helped me land my dream job at Amazon. The faculty's guidance and practical projects were instrumental in my success.",
// //       rating: 5,
// //     },
// //     {
// //       name: "Rahul Kumar",
// //       program: "BCA + Data Analytics",
// //       company: "Microsoft",
// //       package: "₹15 LPA",
// //       image: "/images/testimonial-2.jpg",
// //       location: "Hyderabad",
// //       year: "2024",
// //       story:
// //         "The data analytics program at BIMSR is world-class. The hands-on experience with real datasets and industry tools prepared me perfectly for my role at Microsoft.",
// //       rating: 5,
// //     },
// //     {
// //       name: "Sneha Reddy",
// //       program: "BBA + Digital Marketing",
// //       company: "Google",
// //       package: "₹16 LPA",
// //       image: "/images/testimonial-3.jpg",
// //       location: "Mumbai",
// //       year: "2024",
// //       story:
// //         "BIMSR's digital marketing program is ahead of its time. The practical approach and industry connections helped me secure a position at Google right after graduation.",
// //       rating: 5,
// //     },
// //     {
// //       name: "Arjun Patel",
// //       program: "BCOM + ACCA",
// //       company: "Deloitte",
// //       package: "₹12 LPA",
// //       image:
// //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
// //       location: "Pune",
// //       year: "2024",
// //       story:
// //         "The ACCA integration with BCOM gave me a competitive edge. The faculty's expertise and career guidance helped me achieve my goal of working with a Big 4 firm.",
// //       rating: 5,
// //     },
// //   ]

// //   const placementProcess = [
// //     {
// //       step: 1,
// //       title: "Career Counseling",
// //       description: "Personalized career guidance and goal setting",
// //       icon: Users,
// //     },
// //     {
// //       step: 2,
// //       title: "Skill Development",
// //       description: "Technical and soft skills enhancement programs",
// //       icon: TrendingUp,
// //     },
// //     {
// //       step: 3,
// //       title: "Resume Building",
// //       description: "Professional resume and portfolio creation",
// //       icon: Award,
// //     },
// //     {
// //       step: 4,
// //       title: "Mock Interviews",
// //       description: "Practice sessions with industry experts",
// //       icon: Building,
// //     },
// //     {
// //       step: 5,
// //       title: "Company Visits",
// //       description: "Direct interaction with recruiters",
// //       icon: Building,
// //     },
// //     {
// //       step: 6,
// //       title: "Final Placement",
// //       description: "Successful job placement and onboarding",
// //       icon: Award,
// //     },
// //   ]

// //   const industryVisitImages = [
// //     {
// //       src: "/industrial (1).jpg",
// //       title: "Industry Visit - Angel One",
// //       description:
// //         "Students during industry visit at Angel One, gaining real-world insights into financial technology and trading platforms.",
// //       location: "Bangalore Tech Park",
// //       date: "March 2024",
// //     },
// //     {
// //       src: "/industrial (2).jpg",
// //       title: "Interactive Session",
// //       description: "Engaging with industry professionals and learning about current market trends and opportunities.",
// //       location: "Corporate Office",
// //       date: "February 2024",
// //     },
// //     {
// //       src: "/industrial (3).jpg",
// //       title: "Team Building",
// //       description: "Students showcasing teamwork and enthusiasm during corporate interaction sessions.",
// //       location: "Industry Campus",
// //       date: "January 2024",
// //     },
// //     {
// //       src: "/industrial (4).jpg",
// //       title: "Professional Development",
// //       description: "Building professional networks and understanding industry expectations and requirements.",
// //       location: "Business Center",
// //       date: "December 2023",
// //     },
// //   ]

// //   const placementDriveImages = [
// //     {
// //       src: "/Placement (5).jpg",
// //       title: "Placement Drive Session",
// //       description: "Students attending placement orientation and preparation sessions in our modern auditorium.",
// //       company: "Multiple Companies",
// //       positions: "50+ Openings",
// //     },
// //     {
// //       src: "/Placement (1).jpg",
// //       title: "Career Guidance",
// //       description: "Comprehensive career counseling and interview preparation sessions for final year students.",
// //       company: "Career Development",
// //       positions: "All Students",
// //     },
// //     {
// //       src: "/Placement (5).jpg",
// //       title: "Achievement Ceremony",
// //       description: "Celebrating successful placements with certificate distribution and recognition ceremony.",
// //       company: "Success Stories",
// //       positions: "Top Performers",
// //     },
// //     {
// //       src: "/Placement (3).jpg",
// //       title: "Interview Process",
// //       description: "One-on-one interview sessions with industry recruiters and HR professionals.",
// //       company: "Live Interviews",
// //       positions: "Direct Selection",
// //     },
// //     {
// //       src: "/Placement (4).jpg",
// //       title: "Success Stories",
// //       description: "Students receiving placement offers and celebrating their career achievements.",
// //       company: "Dream Companies",
// //       positions: "Final Selection",
// //     },
// //     {
// //       src: "/Placement (2).jpg",
// //       title: "Final Selection",
// //       description: "Final placement ceremony with successful candidates and faculty members.",
// //       company: "Completion",
// //       positions: "Career Launch",
// //     },
// //   ]

// //   const nextTestimonial = () => {
// //     setCurrentTestimonial((prev) => (prev + 1) % successStories.length)
// //   }

// //   const prevTestimonial = () => {
// //     setCurrentTestimonial((prev) => (prev - 1 + successStories.length) % successStories.length)
// //   }

// //   const currentStats = placementStats[selectedYear as keyof typeof placementStats]

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// //       {/* Hero Section */}
// //       <div className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-20">
// //         <div className="absolute inset-0 bg-black/20"></div>
// //         <div className="relative container mx-auto px-4 text-center">
// //           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
// //             100% Placement Record
// //           </h1>
// //           <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
// //             Our commitment to your success goes beyond education. We ensure every student gets placed in top companies
// //             with competitive packages.
// //           </p>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
// //             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
// //               <div className="text-3xl font-bold text-yellow-400">{currentStats.totalPlacements}+</div>
// //               <div className="text-green-200">Students Placed</div>
// //             </div>
// //             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
// //               <div className="text-3xl font-bold text-blue-400">{currentStats.averagePackage}</div>
// //               <div className="text-green-200">Average Package</div>
// //             </div>
// //             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
// //               <div className="text-3xl font-bold text-purple-400">{currentStats.highestPackage}</div>
// //               <div className="text-green-200">Highest Package</div>
// //             </div>
// //             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
// //               <div className="text-3xl font-bold text-pink-400">{currentStats.placementRate}</div>
// //               <div className="text-green-200">Placement Rate</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="container mx-auto px-4 py-16">
// //         {/* Year Selection */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold text-gray-900 mb-6">Placement Statistics</h2>
// //           <div className="flex justify-center space-x-4">
// //             {Object.keys(placementStats).map((year) => (
// //               <button
// //                 key={year}
// //                 onClick={() => setSelectedYear(year)}
// //                 className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
// //                   selectedYear === year
// //                     ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105"
// //                     : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md"
// //                 }`}
// //               >
// //                 {year}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Placement Stats Cards */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
// //           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// //             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Users className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.totalPlacements}+</div>
// //             <div className="text-gray-600">Students Placed</div>
// //           </div>

// //           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// //             <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <TrendingUp className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.averagePackage}</div>
// //             <div className="text-gray-600">Average Package</div>
// //           </div>

// //           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// //             <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Award className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.highestPackage}</div>
// //             <div className="text-gray-600">Highest Package</div>
// //           </div>

// //           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// //             <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Building className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.topRecruiters}+</div>
// //             <div className="text-gray-600">Top Recruiters</div>
// //           </div>

// //           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// //             <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Star className="h-8 w-8 text-white" />
// //             </div>
// //             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.placementRate}</div>
// //             <div className="text-gray-600">Placement Rate</div>
// //           </div>
// //         </div>

// //         {/* Tab Navigation */}
// //         <div className="flex justify-center mb-12">
// //           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
// //             <div className="flex flex-wrap justify-center gap-2">
// //               {[
// //                 { id: "overview", name: "Overview" },
// //                 { id: "industry-visits", name: "Industry Visits" },
// //                 { id: "placement-drives", name: "Placement Drives" },
// //                 { id: "recruiters", name: "Top Recruiters" },
// //               ].map((tab) => (
// //                 <button
// //                   key={tab.id}
// //                   onClick={() => setActiveTab(tab.id)}
// //                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
// //                     activeTab === tab.id
// //                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
// //                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
// //                   }`}
// //                 >
// //                   {tab.name}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Tab Content */}
// //         {activeTab === "overview" && (
// //           <div className="space-y-16">
// //             {/* Success Stories Carousel */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
// //               <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
// //                 <button
// //                   onClick={prevTestimonial}
// //                   className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
// //                 >
// //                   <ChevronLeft className="h-6 w-6 text-gray-600" />
// //                 </button>

// //                 <div className="p-8">
// //                   <div className="grid lg:grid-cols-2 gap-8 items-center">
// //                     <div className="text-center lg:text-left">
// //                       <img
// //                         src={successStories[currentTestimonial].image || "/placeholder.svg"}
// //                         alt={successStories[currentTestimonial].name}
// //                         className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0 shadow-xl"
// //                       />
// //                     </div>
// //                     <div className="space-y-6">
// //                       <div>
// //                         <h3 className="text-3xl font-bold text-gray-900 mb-2">
// //                           {successStories[currentTestimonial].name}
// //                         </h3>
// //                         <p className="text-xl text-blue-600 font-semibold mb-1">
// //                           {successStories[currentTestimonial].program}
// //                         </p>
// //                         <div className="flex items-center space-x-4 text-gray-600">
// //                           <div className="flex items-center">
// //                             <Building className="h-4 w-4 mr-1" />
// //                             {successStories[currentTestimonial].company}
// //                           </div>
// //                           <div className="flex items-center">
// //                             <MapPin className="h-4 w-4 mr-1" />
// //                             {successStories[currentTestimonial].location}
// //                           </div>
// //                           <div className="flex items-center">
// //                             <Calendar className="h-4 w-4 mr-1" />
// //                             {successStories[currentTestimonial].year}
// //                           </div>
// //                         </div>
// //                       </div>

// //                       <div className="bg-green-50 p-6 rounded-xl">
// //                         <div className="text-3xl font-bold text-green-600 mb-2">
// //                           {successStories[currentTestimonial].package}
// //                         </div>
// //                         <div className="text-gray-600">Annual Package</div>
// //                       </div>

// //                       <div className="flex mb-4">
// //                         {[...Array(5)].map((_, i) => (
// //                           <Star
// //                             key={i}
// //                             className={`h-5 w-5 ${
// //                               i < successStories[currentTestimonial].rating
// //                                 ? "text-yellow-400 fill-current"
// //                                 : "text-gray-300"
// //                             }`}
// //                           />
// //                         ))}
// //                       </div>

// //                       <blockquote className="text-gray-700 italic text-lg leading-relaxed">
// //                         "{successStories[currentTestimonial].story}"
// //                       </blockquote>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <button
// //                   onClick={nextTestimonial}
// //                   className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
// //                 >
// //                   <ChevronRight className="h-6 w-6 text-gray-600" />
// //                 </button>

// //                 {/* Slide Indicators */}
// //                 <div className="flex justify-center space-x-2 pb-6">
// //                   {successStories.map((_, index) => (
// //                     <button
// //                       key={index}
// //                       onClick={() => setCurrentTestimonial(index)}
// //                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
// //                         currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
// //                       }`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Placement Process */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Placement Process</h2>
// //               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                 {placementProcess.map((process, index) => {
// //                   const Icon = process.icon
// //                   return (
// //                     <div
// //                       key={index}
// //                       className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
// //                     >
// //                       <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //                         <Icon className="h-8 w-8 text-white" />
// //                       </div>
// //                       <div className="text-2xl font-bold text-blue-600 mb-2">Step {process.step}</div>
// //                       <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
// //                       <p className="text-gray-600">{process.description}</p>
// //                     </div>
// //                   )
// //                 })}
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {activeTab === "industry-visits" && (
// //           <div>
// //             <div className="text-center mb-12">
// //               <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry Visits & Corporate Exposure</h3>
// //               <p className="text-gray-600 text-lg">Real-world learning experiences with industry leaders</p>
// //             </div>
// //             <div className="grid md:grid-cols-2 gap-8">
// //               {industryVisitImages.map((image, index) => (
// //                 <div key={index} className="group">
// //                   <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
// //                     <div className="relative h-64 overflow-hidden">
// //                       <img
// //                         src={image.src || "/placeholder.svg"}
// //                         alt={image.title}
// //                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
// //                       <div className="absolute bottom-4 left-4 right-4">
// //                         <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
// //                         <div className="flex items-center gap-4 text-white/80 text-sm">
// //                           <div className="flex items-center gap-1">
// //                             <MapPin className="h-4 w-4" />
// //                             {image.location}
// //                           </div>
// //                           <div className="flex items-center gap-1">
// //                             <Calendar className="h-4 w-4" />
// //                             {image.date}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="p-6">
// //                       <p className="text-gray-600 leading-relaxed">{image.description}</p>
// //                       <div className="mt-4 flex items-center justify-between">
// //                         <div className="flex items-center text-blue-600">
// //                           <Building className="h-4 w-4 mr-2" />
// //                           <span className="text-sm font-medium">Corporate Visit</span>
// //                         </div>
// //                         <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
// //                           View Details
// //                           <ChevronRight className="h-4 w-4" />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {activeTab === "placement-drives" && (
// //           <div>
// //             <div className="text-center mb-12">
// //               <h3 className="text-3xl font-bold text-gray-900 mb-4">Campus Placement Drives</h3>
// //               <p className="text-gray-600 text-lg">Direct recruitment opportunities with leading companies</p>
// //             </div>
// //             <div className="grid md:grid-cols-3 gap-8">
// //               {placementDriveImages.map((image, index) => (
// //                 <div key={index} className="group">
// //                   <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
// //                     <div className="relative h-48 overflow-hidden">
// //                       <img
// //                         src={image.src || "/placeholder.svg"}
// //                         alt={image.title}
// //                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
// //                       <div className="absolute top-4 right-4">
// //                         <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Live</div>
// //                       </div>
// //                     </div>
// //                     <div className="p-6">
// //                       <h4 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h4>
// //                       <p className="text-gray-600 text-sm mb-4 leading-relaxed">{image.description}</p>
// //                       <div className="space-y-2">
// //                         <div className="flex justify-between items-center">
// //                           <span className="text-gray-500 text-sm">Company:</span>
// //                           <span className="text-blue-600 font-medium text-sm">{image.company}</span>
// //                         </div>
// //                         <div className="flex justify-between items-center">
// //                           <span className="text-gray-500 text-sm">Positions:</span>
// //                           <span className="text-green-600 font-medium text-sm">{image.positions}</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {activeTab === "recruiters" && (
// //           <div>
// //             <div className="text-center mb-12">
// //               <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Top Recruiting Partners</h3>
// //               <p className="text-gray-600 text-lg">Leading companies that regularly hire our graduates</p>
// //             </div>
// //             <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
// //               {topRecruiters.map((recruiter, index) => (
// //                 <div key={index} className="group">
// //                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
// //                     <div className="text-center">
// //                       <div className="w-20 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
// //                         <span className="text-2xl font-bold text-gray-700">{recruiter.name}</span>
// //                       </div>
// //                       <h4 className="text-lg font-bold text-gray-900 mb-2">{recruiter.name}</h4>
// //                       <div className="space-y-2">
// //                         <div className="flex justify-between items-center text-sm">
// //                           <span className="text-gray-500">Package:</span>
// //                           <span className="text-green-600 font-semibold">{recruiter.packages}</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="text-center mt-12">
// //               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
// //                 <h4 className="text-xl font-bold text-gray-900 mb-4">Want to Partner with Us?</h4>
// //                 <p className="text-gray-600 mb-6">Join our network of recruiting partners and access top talent</p>
// //                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
// //                   Partner with BIMSR
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* CTA Section */}
// //         <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 text-center">
// //           <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Journey?</h2>
// //           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
// //             Join thousands of successful graduates who have built amazing careers with our placement support.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
// //               Apply Now
// //             </button>
// //             <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
// //               Schedule Campus Visit
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// "use client"

// import { useState } from "react"
// import {
//   TrendingUp,
//   Users,
//   Award,
//   Building,
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   MapPin,
//   Calendar,
//   Target,
//   Briefcase,
//   Code,
//   BarChart3,
//   Megaphone,
// } from "lucide-react"

// export default function PlacementsEnhanced() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0)
//   const [selectedProgram, setSelectedProgram] = useState("overall")
//   const [activeTab, setActiveTab] = useState("overview")

//   // Program-specific placement data from PDFs
//   const programStats = {
//     overall: {
//       placementRate: "100%",
//       averagePackage: "₹6.5 LPA",
//       highestPackage: "₹18 LPA",
//       totalStudents: "500+",
//       description: "Overall placement statistics across all programs",
//     },
//     "bba-digital-marketing": {
//       placementRate: "90%",
//       averagePackage: "₹4-8 LPA",
//       highestPackage: "₹8 LPA",
//       totalStudents: "150+",
//       description: "BBA + Digital Marketing + PGCBA Program",
//       skills: ["SEO", "Google Ads & Analytics", "Social Media Management", "Content Strategy", "Email Marketing"],
//       roles: ["Digital Marketing Executive", "Marketing Analyst", "Social Media Strategist", "Entrepreneur"],
//     },
//     "bca-data-analytics": {
//       placementRate: "92%",
//       averagePackage: "₹7 LPA",
//       highestPackage: "₹9 LPA",
//       totalStudents: "120+",
//       description: "BCA + Data Analytics + PGCCA Program",
//       skills: [
//         "Python for Data Analysis",
//         "SQL & Database Management",
//         "Power BI & Tableau",
//         "Statistics & Probability",
//         "Business Intelligence",
//       ],
//       roles: [
//         "Data Analyst",
//         "Business Analyst",
//         "Data Visualization Specialist",
//         "Junior Data Scientist",
//         "Database Administrator",
//       ],
//     },
//     "bca-full-stack": {
//       placementRate: "95%",
//       averagePackage: "₹7 LPA",
//       highestPackage: "₹12 LPA",
//       totalStudents: "180+",
//       description: "BCA + Full Stack Development + PGCCA Program",
//       skills: [
//         "React.js & Node.js",
//         "MongoDB & PostgreSQL",
//         "Docker & Kubernetes",
//         "AWS & Cloud Services",
//         "AI Integration",
//       ],
//       roles: [
//         "Full Stack Developer",
//         "Software Engineer",
//         "Frontend Developer",
//         "Backend Developer",
//         "DevOps Engineer",
//       ],
//     },
//   }

//   // Top recruiters from PDFs
//   const topRecruiters = [
//     { name: "IBM", logo: "🏢", packages: "₹6-12 LPA", sector: "Technology", openings: "25+" },
//     { name: "Samsung", logo: "📱", packages: "₹5-10 LPA", sector: "Electronics", openings: "20+" },
//     { name: "Infosys", logo: "💻", packages: "₹4-8 LPA", sector: "IT Services", openings: "30+" },
//     { name: "TCS", logo: "🏛️", packages: "₹4-7 LPA", sector: "Consulting", openings: "40+" },
//     { name: "Accenture", logo: "⚡", packages: "₹5-9 LPA", sector: "Consulting", openings: "15+" },
//     { name: "Cognizant", logo: "🔧", packages: "₹4-8 LPA", sector: "Technology", openings: "25+" },
//     { name: "HCL", logo: "🚀", packages: "₹5-9 LPA", sector: "Technology", openings: "18+" },
//     { name: "Wipro", logo: "🌐", packages: "₹4-7 LPA", sector: "IT Services", openings: "20+" },
//     { name: "Bosch", logo: "⚙️", packages: "₹6-11 LPA", sector: "Manufacturing", openings: "12+" },
//     { name: "Honeywell", logo: "🏭", packages: "₹5-10 LPA", sector: "Industrial", openings: "10+" },
//     { name: "Royal Enfield", logo: "🏍️", packages: "₹5-9 LPA", sector: "Automotive", openings: "8+" },
//     { name: "Volvo", logo: "🚗", packages: "₹6-12 LPA", sector: "Automotive", openings: "8+" },
//     { name: "Jindal Steel", logo: "🏗️", packages: "₹5-10 LPA", sector: "Infrastructure", openings: "12+" },
//     { name: "Sobha Developers", logo: "🏢", packages: "₹4-8 LPA", sector: "Real Estate", openings: "10+" },
//   ]

//   // Success stories based on PDF data
//   const successStories = [
//     {
//       name: "Priya Sharma",
//       program: "BCA + Full Stack Development + PGCCA",
//       company: "IBM",
//       package: "₹12 LPA",
//       image: "/images/testimonial-1.jpg",
//       location: "Bangalore",
//       year: "2024",
//       story:
//         "The comprehensive full-stack curriculum and hands-on projects at BIMSR prepared me perfectly for my role at IBM. The industry exposure and mentorship were invaluable.",
//       rating: 5,
//     },
//     {
//       name: "Rahul Kumar",
//       program: "BCA + Data Analytics + PGCCA",
//       company: "Accenture",
//       package: "₹9 LPA",
//       image: "/placeholder.svg?height=300&width=300",
//       location: "Hyderabad",
//       year: "2024",
//       story:
//         "The data analytics program at BIMSR is world-class. Learning Python, SQL, and Power BI with real datasets made me job-ready before graduation.",
//       rating: 5,
//     },
//     {
//       name: "Sneha Reddy",
//       program: "BBA + Digital Marketing + PGCBA",
//       company: "Samsung",
//       package: "₹8 LPA",
//       image: "/placeholder.svg?height=300&width=300",
//       location: "Mumbai",
//       year: "2024",
//       story:
//         "BIMSR's digital marketing program covers everything from SEO to social media strategy. The practical approach helped me secure a great position at Samsung.",
//       rating: 5,
//     },
//     {
//       name: "Arjun Patel",
//       program: "BCA + Full Stack Development + PGCCA",
//       company: "Cognizant",
//       package: "₹8 LPA",
//       image: "/placeholder.svg?height=300&width=300",
//       location: "Pune",
//       year: "2024",
//       story:
//         "The modern tech stack training including React, Node.js, and cloud technologies gave me a competitive edge in the job market.",
//       rating: 5,
//     },
//   ]

//   // Placement process from PDFs
//   const placementProcess = [
//     {
//       step: 1,
//       title: "Early Preparation",
//       description: "Placement training begins from 4th semester with industry-relevant skills",
//       icon: Users,
//       details: ["Skill Assessment", "Career Planning", "Industry Exposure"],
//     },
//     {
//       step: 2,
//       title: "Practical Experience",
//       description: "Real-world experience through internships and company visits",
//       icon: Building,
//       details: ["Live Projects", "Industry Visits", "Internship Programs"],
//     },
//     {
//       step: 3,
//       title: "Skill Enhancement",
//       description: "Communication training, problem-solving, and technical skills",
//       icon: Target,
//       details: ["Communication Excellence", "Technical Training", "Soft Skills"],
//     },
//     {
//       step: 4,
//       title: "Mock Interviews",
//       description: "Practice sessions with industry experts and HR professionals",
//       icon: Award,
//       details: ["Interview Preparation", "Resume Building", "Portfolio Development"],
//     },
//     {
//       step: 5,
//       title: "Campus Drives",
//       description: "Direct recruitment by top companies on campus",
//       icon: TrendingUp,
//       details: ["Company Visits", "On-campus Interviews", "Final Selection"],
//     },
//     {
//       step: 6,
//       title: "Career Launch",
//       description: "Successful placement with continuous career support",
//       icon: Briefcase,
//       details: ["Job Placement", "Onboarding Support", "Career Guidance"],
//     },
//   ]

//   // Industry visit images from PDFs
//   const industryVisitImages = [
//     {
//       src: "/industrial (1).jpg",
//       title: "Industry Visit - Tech Companies",
//       description:
//         "Students during industry visit gaining real-world insights into technology and business operations.",
//       location: "Bangalore Tech Park",
//       date: "March 2024",
//     },
//     {
//       src: "/industrial (2).jpg",
//       title: "Interactive Corporate Session",
//       description: "Engaging with industry professionals and learning about current market trends and opportunities.",
//       location: "Corporate Office",
//       date: "February 2024",
//     },
//     {
//       src: "/industrial (3).jpg",
//       title: "Team Building & Networking",
//       description: "Students showcasing teamwork and enthusiasm during corporate interaction sessions.",
//       location: "Industry Campus",
//       date: "January 2024",
//     },
//     {
//       src: "/industrial (4).jpg",
//       title: "Professional Development",
//       description: "Building professional networks and understanding industry expectations and requirements.",
//       location: "Business Center",
//       date: "December 2023",
//     },
//   ]

//   // Placement drive images
//   const placementDriveImages = [
//     {
//       src: "/Placement (4).jpg",
//       title: "Campus Placement Drive",
//       description: "Students attending placement orientation and preparation sessions in our modern auditorium.",
//       company: "Multiple Companies",
//       positions: "50+ Openings",
//     },
//     {
//       src: "/Placement (1).jpg",
//       title: "Career Guidance Session",
//       description: "Comprehensive career counseling and interview preparation sessions for final year students.",
//       company: "Career Development",
//       positions: "All Students",
//     },
//     {
//       src: "/Placement (2).jpg",
//       title: "Achievement Ceremony",
//       description: "Celebrating successful placements with certificate distribution and recognition ceremony.",
//       company: "Success Stories",
//       positions: "Top Performers",
//     },
//     {
//       src: "/Placement (1).jpg",
//       title: "Live Interview Process",
//       description: "One-on-one interview sessions with industry recruiters and HR professionals.",
//       company: "Live Interviews",
//       positions: "Direct Selection",
//     },
//     {
//       src: "/Placement (4).jpg",
//       title: "Offer Letter Distribution",
//       description: "Students receiving placement offers and celebrating their career achievements.",
//       company: "Dream Companies",
//       positions: "Final Selection",
//     },
//     {
//       src: "/Placement (5).jpg",
//       title: "Success Celebration",
//       description: "Final placement ceremony with successful candidates and faculty members.",
//       company: "Completion",
//       positions: "Career Launch",
//     },
//   ]

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % successStories.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + successStories.length) % successStories.length)
//   }

//   const currentStats = programStats[selectedProgram as keyof typeof programStats]

//   const getProgramIcon = (program: string) => {
//     switch (program) {
//       case "bba-digital-marketing":
//         return <Megaphone className="h-5 w-5" />
//       case "bca-data-analytics":
//         return <BarChart3 className="h-5 w-5" />
//       case "bca-full-stack":
//         return <Code className="h-5 w-5" />
//       default:
//         return <Award className="h-5 w-5" />
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4 text-center">
//           <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
//             <Award className="h-5 w-5 text-green-400" />
//             100% Placement Assistance Guaranteed
//           </div>
//           <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
//             Career Success
//             <span className="block text-3xl lg:text-4xl text-green-300 font-normal mt-2">Starts Here</span>
//           </h1>
//           <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Our dedicated placement cell ensures every student gets industry-ready training and guaranteed placement
//             assistance with leading companies across various sectors.
//           </p>

//           {/* Quick Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-yellow-400">500+</div>
//               <div className="text-green-200">Students Placed</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-blue-400">₹6.5 LPA</div>
//               <div className="text-green-200">Average Package</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-purple-400">₹18 LPA</div>
//               <div className="text-green-200">Highest Package</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-pink-400">100%</div>
//               <div className="text-green-200">Placement Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         {/* Program Selection */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Program-wise Placement Statistics</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {[
//               { id: "overall", name: "Overall", icon: <Award className="h-5 w-5" /> },
//               { id: "bba-digital-marketing", name: "BBA + Digital Marketing", icon: <Megaphone className="h-5 w-5" /> },
//               { id: "bca-data-analytics", name: "BCA + Data Analytics", icon: <BarChart3 className="h-5 w-5" /> },
//               { id: "bca-full-stack", name: "BCA + Full Stack", icon: <Code className="h-5 w-5" /> },
//             ].map((program) => (
//               <button
//                 key={program.id}
//                 onClick={() => setSelectedProgram(program.id)}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                   selectedProgram === program.id
//                     ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105"
//                     : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md"
//                 }`}
//               >
//                 {program.icon}
//                 {program.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Program Stats Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Users className="h-8 w-8 text-white" />
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.totalStudents}</div>
//             <div className="text-gray-600">Students Placed</div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//             <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <TrendingUp className="h-8 w-8 text-white" />
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.averagePackage}</div>
//             <div className="text-gray-600">Average Package</div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//             <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Award className="h-8 w-8 text-white" />
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.highestPackage}</div>
//             <div className="text-gray-600">Highest Package</div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//             <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Star className="h-8 w-8 text-white" />
//             </div>
//             <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.placementRate}</div>
//             <div className="text-gray-600">Placement Rate</div>
//           </div>
//         </div>

//         {/* Program Skills & Roles */}
//         {selectedProgram !== "overall" && currentStats.skills && (
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-16 text-white">
//             <div className="text-center mb-8">
//               <div className="flex items-center justify-center gap-3 mb-4">
//                 {getProgramIcon(selectedProgram)}
//                 <h3 className="text-2xl font-bold">{currentStats.description}</h3>
//               </div>
//               <p className="text-blue-100">{currentStats.description}</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <Target className="h-5 w-5" />
//                   Industry Skills Acquired
//                 </h4>
//                 <div className="grid grid-cols-1 gap-3">
//                   {currentStats.skills.map((skill, index) => (
//                     <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
//                       <span className="font-medium">{skill}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
//                   <Briefcase className="h-5 w-5" />
//                   Career Opportunities
//                 </h4>
//                 <div className="grid grid-cols-1 gap-3">
//                   {currentStats.roles?.map((role, index) => (
//                     <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
//                       <span className="font-medium">{role}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex flex-wrap justify-center gap-2">
//               {[
//                 { id: "overview", name: "Overview" },
//                 { id: "industry-visits", name: "Industry Visits" },
//                 { id: "placement-drives", name: "Placement Drives" },
//                 { id: "recruiters", name: "Top Recruiters" },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {tab.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "overview" && (
//           <div className="space-y-16">
//             {/* Success Stories Carousel */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
//               <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
//                 <button
//                   onClick={prevTestimonial}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-gray-600" />
//                 </button>

//                 <div className="p-8">
//                   <div className="grid lg:grid-cols-2 gap-8 items-center">
//                     <div className="text-center lg:text-left">
//                       <img
//                         src={successStories[currentTestimonial].image || "/placeholder.svg"}
//                         alt={successStories[currentTestimonial].name}
//                         className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0 shadow-xl"
//                       />
//                     </div>
//                     <div className="space-y-6">
//                       <div>
//                         <h3 className="text-3xl font-bold text-gray-900 mb-2">
//                           {successStories[currentTestimonial].name}
//                         </h3>
//                         <p className="text-xl text-blue-600 font-semibold mb-1">
//                           {successStories[currentTestimonial].program}
//                         </p>
//                         <div className="flex items-center space-x-4 text-gray-600">
//                           <div className="flex items-center">
//                             <Building className="h-4 w-4 mr-1" />
//                             {successStories[currentTestimonial].company}
//                           </div>
//                           <div className="flex items-center">
//                             <MapPin className="h-4 w-4 mr-1" />
//                             {successStories[currentTestimonial].location}
//                           </div>
//                           <div className="flex items-center">
//                             <Calendar className="h-4 w-4 mr-1" />
//                             {successStories[currentTestimonial].year}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="bg-green-50 p-6 rounded-xl">
//                         <div className="text-3xl font-bold text-green-600 mb-2">
//                           {successStories[currentTestimonial].package}
//                         </div>
//                         <div className="text-gray-600">Annual Package</div>
//                       </div>

//                       <div className="flex mb-4">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`h-5 w-5 ${
//                               i < successStories[currentTestimonial].rating
//                                 ? "text-yellow-400 fill-current"
//                                 : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                       </div>

//                       <blockquote className="text-gray-700 italic text-lg leading-relaxed">
//                         "{successStories[currentTestimonial].story}"
//                       </blockquote>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={nextTestimonial}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
//                 >
//                   <ChevronRight className="h-6 w-6 text-gray-600" />
//                 </button>

//                 {/* Slide Indicators */}
//                 <div className="flex justify-center space-x-2 pb-6">
//                   {successStories.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentTestimonial(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Placement Process */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Placement Process</h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {placementProcess.map((process, index) => {
//                   const Icon = process.icon
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                     >
//                       <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <Icon className="h-8 w-8 text-white" />
//                       </div>
//                       <div className="text-2xl font-bold text-blue-600 mb-2">Step {process.step}</div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
//                       <p className="text-gray-600 mb-4">{process.description}</p>
//                       <div className="space-y-2">
//                         {process.details.map((detail, idx) => (
//                           <div key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-600">
//                             <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                             {detail}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "industry-visits" && (
//           <div>
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry Visits & Corporate Exposure</h3>
//               <p className="text-gray-600 text-lg">Real-world learning experiences with industry leaders</p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               {industryVisitImages.map((image, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
//                     <div className="relative h-64 overflow-hidden">
//                       <img
//                         src={image.src || "/placeholder.svg"}
//                         alt={image.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                       <div className="absolute bottom-4 left-4 right-4">
//                         <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
//                         <div className="flex items-center gap-4 text-white/80 text-sm">
//                           <div className="flex items-center gap-1">
//                             <MapPin className="h-4 w-4" />
//                             {image.location}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Calendar className="h-4 w-4" />
//                             {image.date}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <p className="text-gray-600 leading-relaxed">{image.description}</p>
//                       <div className="mt-4 flex items-center justify-between">
//                         <div className="flex items-center text-blue-600">
//                           <Building className="h-4 w-4 mr-2" />
//                           <span className="text-sm font-medium">Corporate Visit</span>
//                         </div>
//                         <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
//                           View Details
//                           <ChevronRight className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "placement-drives" && (
//           <div>
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Campus Placement Drives</h3>
//               <p className="text-gray-600 text-lg">Direct recruitment opportunities with leading companies</p>
//             </div>
//             <div className="grid md:grid-cols-3 gap-8">
//               {placementDriveImages.map((image, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={image.src || "/placeholder.svg"}
//                         alt={image.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                       <div className="absolute top-4 right-4">
//                         <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Live</div>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <h4 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h4>
//                       <p className="text-gray-600 text-sm mb-4 leading-relaxed">{image.description}</p>
//                       <div className="space-y-2">
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-500 text-sm">Company:</span>
//                           <span className="text-blue-600 font-medium text-sm">{image.company}</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-500 text-sm">Positions:</span>
//                           <span className="text-green-600 font-medium text-sm">{image.positions}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "recruiters" && (
//           <div>
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Top Recruiting Partners</h3>
//               <p className="text-gray-600 text-lg">Leading companies that regularly hire our graduates</p>
//             </div>

//             {/* Recruiter Categories */}
//             <div className="space-y-12">
//               {/* Technology Giants */}
//               <div>
//                 <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                   <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
//                     <Award className="h-5 w-5 text-white" />
//                   </div>
//                   Technology Giants
//                 </h4>
//                 <p className="text-gray-600 mb-6">
//                   Leading tech companies like IBM, Samsung, and Infosys actively recruit our graduates for cutting-edge
//                   roles.
//                 </p>
//                 <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {topRecruiters
//                     .filter(
//                       (r) => r.sector === "Technology" || r.sector === "IT Services" || r.sector === "Electronics",
//                     )
//                     .map((recruiter, index) => (
//                       <div key={index} className="group">
//                         <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                           <div className="text-center">
//                             <div className="text-4xl mb-4">{recruiter.logo}</div>
//                             <h4 className="text-lg font-bold text-gray-900 mb-2">{recruiter.name}</h4>
//                             <p className="text-blue-600 text-sm font-medium mb-3">{recruiter.sector}</p>
//                             <div className="space-y-2">
//                               <div className="flex justify-between items-center text-sm">
//                                 <span className="text-gray-500">Package:</span>
//                                 <span className="text-green-600 font-semibold">{recruiter.packages}</span>
//                               </div>
//                               <div className="flex justify-between items-center text-sm">
//                                 <span className="text-gray-500">Openings:</span>
//                                 <span className="text-orange-600 font-semibold">{recruiter.openings}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               </div>

//               {/* Manufacturing & Industrial */}
//               <div>
//                 <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                   <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
//                     <Building className="h-5 w-5 text-white" />
//                   </div>
//                   Manufacturing & Industrial Leaders
//                 </h4>
//                 <p className="text-gray-600 mb-6">
//                   Industrial powerhouses including Bosch, Honeywell, and Royal Enfield offer diverse engineering
//                   opportunities.
//                 </p>
//                 <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {topRecruiters
//                     .filter(
//                       (r) => r.sector === "Manufacturing" || r.sector === "Industrial" || r.sector === "Automotive",
//                     )
//                     .map((recruiter, index) => (
//                       <div key={index} className="group">
//                         <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                           <div className="text-center">
//                             <div className="text-4xl mb-4">{recruiter.logo}</div>
//                             <h4 className="text-lg font-bold text-gray-900 mb-2">{recruiter.name}</h4>
//                             <p className="text-blue-600 text-sm font-medium mb-3">{recruiter.sector}</p>
//                             <div className="space-y-2">
//                               <div className="flex justify-between items-center text-sm">
//                                 <span className="text-gray-500">Package:</span>
//                                 <span className="text-green-600 font-semibold">{recruiter.packages}</span>
//                               </div>
//                               <div className="flex justify-between items-center text-sm">
//                                 <span className="text-gray-500">Openings:</span>
//                                 <span className="text-orange-600 font-semibold">{recruiter.openings}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               </div>

//               {/* Consulting & Infrastructure */}
//               <div>
//                 <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//                   <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
//                     <Briefcase className="h-5 w-5 text-white" />
//                   </div>
//                   Consulting & Infrastructure
//                 </h4>
//                 <p className="text-gray-600 mb-6">
//                   Global consulting leaders and infrastructure giants provide strategic career pathways for graduates.
//                 </p>
//                 <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {topRecruiters
//                     .filter(
//                       (r) => r.sector === "Consulting" || r.sector === "Infrastructure" || r.sector === "Real Estate",
//                     )
//                     .map((recruiter, index) => (
//                       <div key={index} className="group">
//                         <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                           <div className="text-center">
//                             <div className="text-4xl mb-4">{recruiter.logo}</div>
//                             <h4 className="text-lg font-bold text-gray-900 mb-2">{recruiter.name}</h4>
//                             <p className="text-blue-600 text-sm font-medium mb-3">{recruiter.sector}</p>
//                             <div className="space-y-2">
//                               <div className="flex justify-between items-center text-sm">
//                                 <span className="text-gray-500">Package:</span>
//                                 <span className="text-green-600 font-semibold">{recruiter.packages}</span>
//                               </div>
//                               <div className="flex justify-between items-center text-sm">
//                                 <span className="text-gray-500">Openings:</span>
//                                 <span className="text-orange-600 font-semibold">{recruiter.openings}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             </div>

//             <div className="text-center mt-12">
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
//                 <h4 className="text-xl font-bold text-gray-900 mb-4">Want to Partner with Us?</h4>
//                 <p className="text-gray-600 mb-6">
//                   Join our network of recruiting partners and access top talent from BIMSR
//                 </p>
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
//                   Partner with BIMSR
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* CTA Section */}
//         <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Journey?</h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of successful graduates who have built amazing careers with our 100% placement assistance
//             guarantee.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
//               Apply Now
//             </button>
//             <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
//               Schedule Campus Visit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  TrendingUp,
  Users,
  Building2,
  Award,
  ArrowRight,
  CheckCircle,
  Target,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react"

export default function PlacementsEnhanced() {
  const [activeTab, setActiveTab] = useState("overview")

  const placementStats = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "100% Placement Rate",
      value: "100%",
      description: "Every eligible student gets placed",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Students Placed",
      value: "2500+",
      description: "Successful career launches",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Hiring Partners",
      value: "500+",
      description: "Top companies trust our graduates",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Highest Package",
      value: "₹15L",
      description: "Annual CTC achieved",
      color: "from-orange-500 to-red-600",
    },
  ]

  const hiringPartners = [
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    name: "TCS",
    logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png",
  },
  {
    name: "Bosch",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749472845/2-removebg-preview_msujna.png",
  },
  {
    name: "Honeywell",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749469873/honeywell-removebg-preview_hdrwz4.png",
  },
  {
    name: "Royal Enfield",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749472941/9-removebg-preview_ahtdlm.png",
  },
  {
    name: "Mindtree",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473431/17-removebg-preview_1_hx9coo.png",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
  {
    name: "Cognizant",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749470023/4-removebg-preview_auhb4l.png",
  },
  {
    name: "HCL",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473427/18-removebg-preview_rgtk5c.png",
  },
  {
    name: "Wipro",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473429/11-removebg-preview_uqfk0o.png",
  },
  {
    name: "Volvo",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473704/13-removebg-preview_n46whg.png",
  },
  {
    name: "Jindal Steel",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473336/15-removebg-preview_psy2ml.png",
  },
  {
    name: "Sobha",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473426/20-removebg-preview_mfsbjx.png",
  },
  {
    name: "DXC",
    logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473596/24-removebg-preview_zqmkz5.png",
  },
  ]

  const placementProcess = [
    {
      step: "01",
      title: "Pre-Placement Training",
      description: "Comprehensive training on technical skills, soft skills, and interview preparation",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Resume Building",
      description: "Professional resume creation with industry-specific formatting and content",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Company Visits",
      description: "Regular campus recruitment drives by top companies across various sectors",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Interview Process",
      description: "Multiple rounds including technical, HR, and group discussions",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: "05",
      title: "Offer & Onboarding",
      description: "Job offer negotiation and smooth transition to professional career",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const careerOpportunities = [
    {
      field: "Software Development",
      roles: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Mobile App Developer"],
      package: "₹4-12L",
      companies: ["TCS", "Infosys", "Wipro", "Accenture"],
    },
    {
      field: "Data Analytics",
      roles: ["Data Analyst", "Business Analyst", "Data Scientist", "ML Engineer"],
      package: "₹5-15L",
      companies: ["IBM", "Microsoft", "Amazon", "Google"],
    },
    {
      field: "Digital Marketing",
      roles: ["Digital Marketing Executive", "SEO Specialist", "Social Media Manager", "Content Strategist"],
      package: "₹3-8L",
      companies: ["Flipkart", "Myntra", "Zomato", "Swiggy"],
    },
    {
      field: "Finance & Accounting",
      roles: ["Financial Analyst", "Audit Associate", "Tax Consultant", "Investment Advisor"],
      package: "₹4-10L",
      companies: ["Deloitte", "EY", "KPMG", "PwC"],
    },
  ]

  // Industry visit images from your old file
  const industryVisitImages = [
    {
      src: "/industrial (1).jpg",
      title: "Industry Visit - Tech Companies",
      description:
        "Students during industry visit gaining real-world insights into technology and business operations.",
      location: "Bangalore Tech Park",
      date: "March 2024",
    },
    {
      src: "/industrial (2).jpg",
      title: "Interactive Corporate Session",
      description: "Engaging with industry professionals and learning about current market trends and opportunities.",
      location: "Corporate Office",
      date: "February 2024",
    },
    {
      src: "/industrial (3).jpg",
      title: "Team Building & Networking",
      description: "Students showcasing teamwork and enthusiasm during corporate interaction sessions.",
      location: "Industry Campus",
      date: "January 2024",
    },
    {
      src: "/industrial (4).jpg",
      title: "Professional Development",
      description: "Building professional networks and understanding industry expectations and requirements.",
      location: "Business Center",
      date: "December 2023",
    },
  ]

  // Placement drive images from your old file
  const placementDriveImages = [
    {
      src: "/Placement (4).jpg",
      title: "Campus Placement Drive",
      description: "Students attending placement orientation and preparation sessions in our modern auditorium.",
      company: "Multiple Companies",
      positions: "50+ Openings",
    },
    {
      src: "/Placement (1).jpg",
      title: "Career Guidance Session",
      description: "Comprehensive career counseling and interview preparation sessions for final year students.",
      company: "Career Development",
      positions: "All Students",
    },
    {
      src: "/Placement (2).jpg",
      title: "Achievement Ceremony",
      description: "Celebrating successful placements with certificate distribution and recognition ceremony.",
      company: "Success Stories",
      positions: "Top Performers",
    },
    {
      src: "/Placement (1).jpg",
      title: "Live Interview Process",
      description: "One-on-one interview sessions with industry recruiters and HR professionals.",
      company: "Live Interviews",
      positions: "Direct Selection",
    },
    {
      src: "/Placement (4).jpg",
      title: "Offer Letter Distribution",
      description: "Students receiving placement offers and celebrating their career achievements.",
      company: "Dream Companies",
      positions: "Final Selection",
    },
    {
      src: "/Placement (5).jpg",
      title: "Success Celebration",
      description: "Final placement ceremony with successful candidates and faculty members.",
      company: "Completion",
      positions: "Career Launch",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-6">
            <Target className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-semibold">100% Placement Guarantee</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Your Success is
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Commitment
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of successful BIMSR graduates who have launched their careers with top companies. Our
            comprehensive placement program ensures every student gets industry-ready training and guaranteed job
            placement.
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {placementStats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">{stat.title}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "overview", name: "Overview" },
                { id: "industry-visits", name: "Industry Visits" },
                { id: "placement-drives", name: "Placement Drives" },
                { id: "recruiters", name: "Top Recruiters" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="space-y-16">
            {/* Placed Students Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Successful Graduates</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Meet our talented graduates who have successfully launched their careers with leading companies across
                  various industries.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <img
                        src="/Placement.png"
                        alt="BIMSR Placed Students"
                        className="w-full rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900">Celebrating Success Stories</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our students have been placed in top companies across India and globally. With comprehensive
                        training, industry exposure, and dedicated placement support, we ensure every student achieves
                        their career goals.
                      </p>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-blue-600">2500+</div>
                          <div className="text-sm text-gray-600">Students Placed</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-green-600">₹6.5L</div>
                          <div className="text-sm text-gray-600">Average Package</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">Pre-placement training and certification</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">Industry mentorship and guidance</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">Regular campus recruitment drives</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">Lifetime career support and alumni network</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Placement Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Placement Process</h2>
              <div className="grid md:grid-cols-5 gap-8">
                {placementProcess.map((step, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative h-full">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 mt-4 text-blue-600">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore diverse career paths available to our graduates across different specializations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {careerOpportunities.map((career, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-full"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">{career.field}</h3>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {career.package}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Available Roles:</h4>
                          <div className="flex flex-wrap gap-2">
                            {career.roles.map((role, roleIndex) => (
                              <span
                                key={roleIndex}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Top Hiring Companies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {career.companies.map((company, companyIndex) => (
                              <span
                                key={companyIndex}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {company}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "industry-visits" && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry Visits & Corporate Exposure</h3>
              <p className="text-gray-600 text-lg">Real-world learning experiences with industry leaders</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {industryVisitImages.map((image, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {image.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {image.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed">{image.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center text-blue-600">
                          <Building2 className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">Corporate Visit</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "placement-drives" && (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Campus Placement Drives</h3>
              <p className="text-gray-600 text-lg">Direct recruitment opportunities with leading companies</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {placementDriveImages.map((image, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Live</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{image.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">Company:</span>
                          <span className="text-blue-600 font-medium text-sm">{image.company}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">Positions:</span>
                          <span className="text-green-600 font-medium text-sm">{image.positions}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "recruiters" && (
          <div>
            {/* Hiring Partners */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Partners</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Leading companies across industries trust BIMSR graduates for their talent and skills
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {hiringPartners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        // className="h-24 w-auto object-contain filter hover:grayscale-0 transition-all duration-300"
                         className={`${
                           ["IBM", "Accenture", "Infosys", "TCS", "Samsung"].includes(partner.name)
                             ? "h-12"
                             : "h-26"
                         } w-auto object-contain filter hover:grayscale-0 transition-all duration-300`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join BIMSR and become part of our successful alumni network. Your dream career is just one decision away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <span className="mr-2">Start Your Success Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/admission"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center justify-center"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Campus Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
