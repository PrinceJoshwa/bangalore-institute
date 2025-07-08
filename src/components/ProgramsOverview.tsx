
// // "use client"

// // import { useState } from "react"
// // import { ChevronRight, Award, Laptop, BookOpen, GraduationCap, CheckCircle, Star, Filter } from "lucide-react"

// // export default function ProgramsOverview() {
// //   const [activeFilter, setActiveFilter] = useState("all")

// //   const programs = [
// //     {
// //       id: "bca-fullstack",
// //       title: "BCA + Full Stack + PGCCA",
// //       category: "technology",
// //       description: "Complete web development program with AI integration and industry projects.",
// //       duration: "3 Years",
// //       totalFee: "₹2.5L",
// //       highlights: [
// //         "Brand-new i3 laptops included",
// //         "100% scholarship for 4th year",
// //         "Full Stack certification",
// //         "AI integration training",
// //         "Live project experience",
// //         "Industry mentorship",
// //       ],
// //       gradient: "from-blue-600 to-indigo-600",
// //       popular: true,
// //       image:
// //         "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       id: "bca-analytics",
// //       title: "BCA + Data Analytics + PGCCA",
// //       category: "analytics",
// //       description: "Advanced analytics with predictive modeling and data science expertise.",
// //       duration: "3 Years",
// //       totalFee: "₹2.5L",
// //       highlights: [
// //         "120-150 hours specialized training",
// //         "Python & SQL certification",
// //         "Predictive modeling",
// //         "Data visualization tools",
// //         "Machine learning projects",
// //         "Industry datasets",
// //       ],
// //       gradient: "from-purple-600 to-pink-600",
// //       image:
// //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       id: "bca-digital",
// //       title: "BCA + Digital Marketing + PGCCA",
// //       category: "marketing",
// //       description: "Digital marketing with Google, Meta, and AI marketing certifications.",
// //       duration: "3 Years",
// //       totalFee: "₹2.5L",
// //       highlights: [
// //         "Google & Meta certifications",
// //         "AI marketing tools",
// //         "Social media mastery",
// //         "Content strategy",
// //         "Campaign management",
// //         "Analytics expertise",
// //       ],
// //       gradient: "from-green-600 to-teal-600",
// //       image:
// //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       id: "bba-digital",
// //       title: "BBA + Digital Marketing + PGCBA",
// //       category: "business",
// //       description: "Business management with digital marketing specialization.",
// //       duration: "3 Years",
// //       totalFee: "₹2.3L",
// //       highlights: [
// //         "Business leadership skills",
// //         "Digital transformation",
// //         "Marketing analytics",
// //         "Entrepreneurship training",
// //         "Strategic planning",
// //         "Team management",
// //       ],
// //       gradient: "from-red-600 to-rose-600",
// //       image:
// //         "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
// //     },
// //     {
// //       id: "bcom-acca",
// //       title: "BCOM + ACCA + PGCFM",
// //       category: "finance",
// //       description: "Professional accounting with global ACCA certification.",
// //       duration: "3 Years",
// //       totalFee: "₹2.8L",
// //       highlights: [
// //         "ACCA partnership with Zell Education",
// //         "Global accounting recognition",
// //         "Financial management expertise",
// //         "Merit scholarships up to 25%",
// //         "Professional certification",
// //         "International opportunities",
// //       ],
// //       gradient: "from-indigo-600 to-blue-600",
// //       image:
// //         "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
// //     },
// //   ]

// //   const filters = [
// //     { id: "all", name: "All Programs", count: programs.length },
// //     { id: "technology", name: "Technology", count: programs.filter((p) => p.category === "technology").length },
// //     { id: "analytics", name: "Analytics", count: programs.filter((p) => p.category === "analytics").length },
// //     { id: "marketing", name: "Marketing", count: programs.filter((p) => p.category === "marketing").length },
// //     { id: "business", name: "Business", count: programs.filter((p) => p.category === "business").length },
// //     { id: "finance", name: "Finance", count: programs.filter((p) => p.category === "finance").length },
// //   ]

// //   const inclusiveFeatures = [
// //     {
// //       icon: <Laptop className="h-8 w-8 text-blue-600" />,
// //       title: "Technology Package",
// //       description: "Brand-new i3 laptops with dedicated student dashboard",
// //       gradient: "from-blue-500 to-cyan-500",
// //     },
// //     {
// //       icon: <Award className="h-8 w-8 text-purple-600" />,
// //       title: "Industry Certifications",
// //       description: "Professional certifications included in program fee",
// //       gradient: "from-purple-500 to-pink-500",
// //     },
// //     {
// //       icon: <BookOpen className="h-8 w-8 text-green-600" />,
// //       title: "Learning Materials",
// //       description: "Books, study materials, and uniforms included",
// //       gradient: "from-green-500 to-emerald-500",
// //     },
// //     {
// //       icon: <GraduationCap className="h-8 w-8 text-red-600" />,
// //       title: "100% 4th Year Scholarship",
// //       description: "Complete funding for final year with good grades",
// //       gradient: "from-red-500 to-rose-500",
// //     },
// //   ]

// //   const filteredPrograms = activeFilter === "all" ? programs : programs.filter((p) => p.category === activeFilter)

// //   return (
// //     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
// //       <div className="container mx-auto px-4">
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
// //             <Star className="h-5 w-5 text-blue-600" />
// //             <span className="text-blue-700 font-semibold">Integrated Programs 2024-25</span>
// //           </div>
// //           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
// //             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
// //               Bachelor's + Professional
// //             </span>
// //             <br />
// //             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //               Certification Programs
// //             </span>
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
// //             Unique integrated programs combining bachelor's degrees with professional certifications for guaranteed
// //             career success and industry readiness.
// //           </p>
// //         </div>

// //         {/* What's Included Section */}
// //         <div className="mb-16">
// //           <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What's Included in Your Investment</h3>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {inclusiveFeatures.map((feature, index) => (
// //               <div key={index} className="group">
// //                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
// //                   <div
// //                     className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
// //                   >
// //                     {feature.icon}
// //                   </div>
// //                   <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
// //                   <p className="text-gray-600">{feature.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Filter Tabs */}
// //         <div className="flex justify-center mb-12">
// //           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
// //             <div className="flex flex-wrap gap-2">
// //               {filters.map((filter) => (
// //                 <button
// //                   key={filter.id}
// //                   onClick={() => setActiveFilter(filter.id)}
// //                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
// //                     activeFilter === filter.id
// //                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
// //                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
// //                   }`}
// //                 >
// //                   <Filter className="h-4 w-4" />
// //                   <span>{filter.name}</span>
// //                   <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{filter.count}</span>
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Programs Grid */}
// //         <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
// //           {filteredPrograms.map((program) => (
// //             <div key={program.id} className="group relative">
// //               {program.popular && (
// //                 <div className="absolute -top-3 left-6 z-10">
// //                   <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
// //                     <Star className="h-4 w-4" />
// //                     Most Popular
// //                   </div>
// //                 </div>
// //               )}

// //               <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
// //                 {/* Program Image */}
// //                 <div className="relative h-48 overflow-hidden">
// //                   <img
// //                     src={program.image || "/placeholder.svg"}
// //                     alt={program.title}
// //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
// //                   <div className="absolute top-4 right-4">
// //                     <div
// //                       className={`px-3 py-1 bg-gradient-to-r ${program.gradient} text-white rounded-full text-sm font-semibold`}
// //                     >
// //                       {program.duration}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="p-8">
// //                   <div className="space-y-4">
// //                     <div>
// //                       <div className="text-sm font-medium text-gray-500 mb-2 capitalize">{program.category}</div>
// //                       <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">{program.title}</h3>
// //                       <p className="text-gray-600">{program.description}</p>
// //                     </div>

// //                     <div className="flex justify-between items-center">
// //                       <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
// //                         {program.totalFee}
// //                       </div>
// //                       <div className="text-sm text-gray-500">Total Program Fee</div>
// //                     </div>

// //                     <div className="space-y-2">
// //                       <h4 className="font-semibold text-gray-800">Key Highlights</h4>
// //                       <div className="space-y-1">
// //                         {program.highlights.slice(0, 3).map((highlight, idx) => (
// //                           <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
// //                             <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
// //                             {highlight}
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </div>

// //                     <button
// //                       className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
// //                     >
// //                       Learn More
// //                       <ChevronRight className="ml-2 h-5 w-5" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* CTA Section */}
// //         <div className="text-center">
// //           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
// //             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
// //             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

// //             <div className="relative z-10">
// //               <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
// //               <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
// //                 Calculate your educational investment with our transparent fee structure and flexible payment options.
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                 <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
// //                   Calculate Your Investment
// //                   <ChevronRight className="ml-2 h-5 w-5" />
// //                 </button>
// //                 <button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
// //                   Download Brochure
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { ChevronRight, Award, Laptop, BookOpen, GraduationCap, CheckCircle, Star, Filter } from "lucide-react"

// // Extracted data from individual program components
// const programsData = {
//   "bca-fullstack": {
//     title: "BCA + Full Stack + PGCCA",
//     category: "technology",
//     description:
//       "Comprehensive 4-year program combining undergraduate degree, professional certification, and postgraduate certificate in computer applications.",
//     duration: "4 Years",
//     totalFee: "₹3,95,000",
//     feeBreakdown: {
//       admission: "₹25,000",
//       firstYear: "₹2,00,000",
//       secondThirdYear: "₹85,000",
//       fourthYear: "100% Scholarship",
//     },
//     highlights: [
//       "Brand-new i3 laptops included",
//       "100% scholarship for 4th year with 70% aggregate",
//       "Full Stack Developer certification included",
//       "95% placement rate with 7 LPA average package",
//       "Industry skills in React, Node.js, MongoDB, AWS",
//       "Live project experience with industry mentors",
//     ],
//     careerOpportunities: [
//       { role: "Full Stack Developer", package: "₹6-12 LPA" },
//       { role: "Software Engineer", package: "₹7-14 LPA" },
//       { role: "DevOps Engineer", package: "₹8-15 LPA" },
//       { role: "Cloud Application Developer", package: "₹9-16 LPA" },
//     ],
//     placementStats: {
//       averagePackage: "7 LPA",
//       placementRate: "95%",
//       highestPackage: "16 LPA",
//       minimumPackage: "4 LPA",
//     },
//     gradient: "from-blue-600 to-indigo-600",
//     popular: true,
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   },
//   "bca-analytics": {
//     title: "BCA + Data Analytics + PGCCA",
//     category: "analytics",
//     description:
//       "Advanced analytics program with predictive modeling, data wrangling, and comprehensive analytical techniques for data-driven careers.",
//     duration: "4 Years",
//     totalFee: "₹3,95,000",
//     feeBreakdown: {
//       admission: "₹25,000",
//       firstYear: "₹2,00,000",
//       secondThirdYear: "₹85,000",
//       fourthYear: "100% Scholarship",
//     },
//     highlights: [
//       "120-150 hours specialized training",
//       "Python & SQL certification included",
//       "Predictive modeling and machine learning",
//       "92% placement rate with 7 LPA average",
//       "Data visualization tools mastery",
//       "Industry datasets and real-world projects",
//     ],
//     careerOpportunities: [
//       { role: "Data Analyst", package: "₹3.5-9 LPA" },
//       { role: "Business Analyst", package: "₹4-8 LPA" },
//       { role: "Data Visualization Specialist", package: "₹5-10 LPA" },
//       { role: "Junior Data Scientist", package: "₹6-12 LPA" },
//     ],
//     placementStats: {
//       averagePackage: "7 LPA",
//       placementRate: "92%",
//       highestPackage: "9 LPA",
//       minimumPackage: "3.5 LPA",
//     },
//     gradient: "from-purple-600 to-pink-600",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   },
//   "bca-digital": {
//     title: "BCA + Digital Marketing + PGCCA",
//     category: "marketing",
//     description:
//       "Master digital marketing with industry-leading certifications from Google, Meta, HubSpot, and AI marketing tools.",
//     duration: "4 Years",
//     totalFee: "₹3,95,000",
//     feeBreakdown: {
//       admission: "₹25,000",
//       firstYear: "₹2,00,000",
//       secondThirdYear: "₹85,000",
//       fourthYear: "100% Scholarship",
//     },
//     highlights: [
//       "Google & Meta certifications included",
//       "AI marketing tools and automation",
//       "HubSpot inbound marketing expertise",
//       "Live campaign experience with real clients",
//       "Social media mastery and content strategy",
//       "100% placement assistance guarantee",
//     ],
//     careerOpportunities: [
//       { role: "Digital Marketing Specialist", package: "₹4-7 LPA" },
//       { role: "Social Media Manager", package: "₹5-8 LPA" },
//       { role: "Performance Marketing Manager", package: "₹7-12 LPA" },
//     ],
//     placementStats: {
//       averagePackage: "6 LPA",
//       placementRate: "95%",
//       highestPackage: "12 LPA",
//       minimumPackage: "4 LPA",
//     },
//     gradient: "from-green-600 to-teal-600",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   },
//   "bba-digital": {
//     title: "BBA + Digital Marketing + PGCBA",
//     category: "business",
//     description:
//       "Upgrade your 3-year degree to 4 year for FREE with BBA in Digital Marketing. Comprehensive business administration with digital marketing specialization.",
//     duration: "4 Years",
//     totalFee: "₹3,65,000",
//     feeBreakdown: {
//       admission: "₹25,000",
//       firstYear: "₹1,90,000",
//       secondThirdYear: "₹75,000",
//       fourthYear: "100% Scholarship",
//     },
//     highlights: [
//       "Business leadership and management skills",
//       "Digital transformation expertise",
//       "Marketing analytics and strategy",
//       "90% placement rate with 4-8 LPA packages",
//       "Entrepreneurship training and support",
//       "Industry partnerships with Fortune 500 companies",
//     ],
//     careerOpportunities: [
//       { role: "Digital Marketing Executive", package: "₹3-5 LPA" },
//       { role: "Marketing Analyst", package: "₹4-6 LPA" },
//       { role: "Social Media Strategist", package: "₹5-8 LPA" },
//       { role: "Entrepreneur", package: "Unlimited" },
//     ],
//     placementStats: {
//       averagePackage: "5.5 LPA",
//       placementRate: "90%",
//       highestPackage: "8 LPA",
//       minimumPackage: "3 LPA",
//     },
//     gradient: "from-red-600 to-rose-600",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   },
//   "bcom-acca": {
//     title: "BCOM + ACCA + PGCFM",
//     category: "finance",
//     description:
//       "Professional accounting with global ACCA certification. Your pathway to global accounting excellence through comprehensive bachelor of commerce degree.",
//     duration: "4 Years",
//     totalFee: "₹4,25,000",
//     feeBreakdown: {
//       admission: "₹25,000",
//       firstYear: "₹1,80,000",
//       secondThirdYear: "₹1,10,000",
//       fourthYear: "100% Scholarship",
//     },
//     highlights: [
//       "ACCA partnership with Zell Education",
//       "Global accounting recognition in 180+ countries",
//       "Financial management expertise and certification",
//       "Merit scholarships up to 25% available",
//       "All ACCA exam fees included in program cost",
//       "95% placement rate with leading firms",
//     ],
//     careerOpportunities: [
//       { role: "Chartered Certified Accountant", package: "₹8-15 LPA" },
//       { role: "Financial Analyst", package: "₹6-12 LPA" },
//       { role: "Internal Auditor", package: "₹5-10 LPA" },
//       { role: "Finance Manager", package: "₹10-18 LPA" },
//       { role: "Tax Consultant", package: "₹7-14 LPA" },
//     ],
//     placementStats: {
//       averagePackage: "10 LPA",
//       placementRate: "95%",
//       highestPackage: "18 LPA",
//       minimumPackage: "5 LPA",
//     },
//     gradient: "from-indigo-600 to-blue-600",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//   },
// }

// export default function ProgramsOverview() {
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

//   const programs = Object.entries(programsData).map(([id, data]) => ({ id, ...data }))

//   const filters = [
//     { id: "all", name: "All Programs", count: programs.length },
//     { id: "technology", name: "Technology", count: programs.filter((p) => p.category === "technology").length },
//     { id: "analytics", name: "Analytics", count: programs.filter((p) => p.category === "analytics").length },
//     { id: "marketing", name: "Marketing", count: programs.filter((p) => p.category === "marketing").length },
//     { id: "business", name: "Business", count: programs.filter((p) => p.category === "business").length },
//     { id: "finance", name: "Finance", count: programs.filter((p) => p.category === "finance").length },
//   ]

//   const inclusiveFeatures = [
//     {
//       icon: <Laptop className="h-8 w-8 text-blue-600" />,
//       title: "Technology Package",
//       description: "Brand-new i3 laptops with dedicated student dashboard",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <Award className="h-8 w-8 text-purple-600" />,
//       title: "Industry Certifications",
//       description: "Professional certifications included in program fee",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <BookOpen className="h-8 w-8 text-green-600" />,
//       title: "Learning Materials",
//       description: "Books, study materials, and uniforms included",
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: <GraduationCap className="h-8 w-8 text-red-600" />,
//       title: "100% 4th Year Scholarship",
//       description: "Complete funding for final year with good grades",
//       gradient: "from-red-500 to-rose-500",
//     },
//   ]

//   const filteredPrograms = activeFilter === "all" ? programs : programs.filter((p) => p.category === activeFilter)

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Star className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Integrated Programs 2024-25</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Bachelor's + Professional
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Certification Programs
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Unique integrated programs combining bachelor's degrees with professional certifications for guaranteed
//             career success and industry readiness.
//           </p>
//         </div>

//         {/* What's Included Section */}
//         <div className="mb-16">
//           <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What's Included in Your Investment</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {inclusiveFeatures.map((feature, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                   >
//                     {feature.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex flex-wrap gap-2">
//               {filters.map((filter) => (
//                 <button
//                   key={filter.id}
//                   onClick={() => setActiveFilter(filter.id)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
//                     activeFilter === filter.id
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <Filter className="h-4 w-4" />
//                   <span>{filter.name}</span>
//                   <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{filter.count}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Programs Grid */}
//         <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
//           {filteredPrograms.map((program) => (
//             <div key={program.id} className="group relative">
//               {program.popular && (
//                 <div className="absolute -top-3 left-6 z-10">
//                   <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
//                     <Star className="h-4 w-4" />
//                     Most Popular
//                   </div>
//                 </div>
//               )}

//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
//                 {/* Program Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={program.image || "/placeholder.svg"}
//                     alt={program.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
//                   <div className="absolute top-4 right-4">
//                     <div
//                       className={`px-3 py-1 bg-gradient-to-r ${program.gradient} text-white rounded-full text-sm font-semibold`}
//                     >
//                       {program.duration}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <div className="space-y-4">
//                     <div>
//                       <div className="text-sm font-medium text-gray-500 mb-2 capitalize">{program.category}</div>
//                       <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">{program.title}</h3>
//                       <p className="text-gray-600 text-sm">{program.description}</p>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                         {program.totalFee}
//                       </div>
//                       <div className="text-sm text-gray-500">Total Program Fee</div>
//                     </div>

//                     {/* Fee Breakdown */}
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <h4 className="font-semibold text-gray-800 mb-3 text-sm">Fee Breakdown</h4>
//                       <div className="grid grid-cols-2 gap-2 text-xs">
//                         <div className="flex justify-between">
//                           <span className="text-gray-600">Admission:</span>
//                           <span className="font-medium">{program.feeBreakdown.admission}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-gray-600">1st Year:</span>
//                           <span className="font-medium">{program.feeBreakdown.firstYear}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-gray-600">2nd & 3rd:</span>
//                           <span className="font-medium">{program.feeBreakdown.secondThirdYear}</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-gray-600">4th Year:</span>
//                           <span className="font-medium text-green-600">{program.feeBreakdown.fourthYear}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Placement Stats */}
//                     <div className="bg-blue-50 rounded-lg p-4">
//                       <h4 className="font-semibold text-gray-800 mb-3 text-sm">Placement Statistics</h4>
//                       <div className="grid grid-cols-2 gap-2 text-xs">
//                         <div className="text-center">
//                           <div className="font-bold text-blue-600">{program.placementStats.placementRate}</div>
//                           <div className="text-gray-600">Placement Rate</div>
//                         </div>
//                         <div className="text-center">
//                           <div className="font-bold text-green-600">{program.placementStats.averagePackage}</div>
//                           <div className="text-gray-600">Avg Package</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <h4 className="font-semibold text-gray-800 text-sm">Key Highlights</h4>
//                       <div className="space-y-1">
//                         {program.highlights.slice(0, 3).map((highlight, idx) => (
//                           <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
//                             <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 shrink-0" />
//                             {highlight}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <button
//                       onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
//                       className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm`}
//                     >
//                       {selectedProgram === program.id ? "Hide Details" : "View Details"}
//                       <ChevronRight className="ml-2 h-4 w-4" />
//                     </button>

//                     {/* Expanded Details */}
//                     {selectedProgram === program.id && (
//                       <div className="mt-4 space-y-4 border-t pt-4">
//                         <div>
//                           <h5 className="font-semibold text-gray-800 mb-2 text-sm">Career Opportunities</h5>
//                           <div className="space-y-2">
//                             {program.careerOpportunities.map((career, idx) => (
//                               <div
//                                 key={idx}
//                                 className="flex justify-between items-center text-xs bg-gray-50 rounded p-2"
//                               >
//                                 <span className="text-gray-700">{career.role}</span>
//                                 <span className="font-semibold text-green-600">{career.package}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         <div>
//                           <h5 className="font-semibold text-gray-800 mb-2 text-sm">All Highlights</h5>
//                           <div className="space-y-1">
//                             {program.highlights.map((highlight, idx) => (
//                               <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
//                                 <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 shrink-0" />
//                                 {highlight}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
//               <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
//                 Calculate your educational investment with our transparent fee structure and flexible payment options.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
//                   Calculate Your Investment
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </button>
//                 <button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
//                   Download Brochure
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  GraduationCap,
  TrendingUp,
  Award,
  Users,
  Clock,
  Download,
  Calculator,
  CheckCircle,
  ArrowRight,
  Briefcase,
  BookOpen,
} from "lucide-react"

export default function ProgramsOverview() {
  const [selectedProgram, setSelectedProgram] = useState(0)
  const navigate = useNavigate()

  const programs = [
    {
      id: "bca-full-stack",
      title: "BCA + Full Stack Development + PGCCA",
      category: "Technology",
      duration: "3+1 Years",
      totalFee: "₹2,50,000",
      semesterFee: "₹41,667",
      description: "Master full-stack development with modern frameworks and technologies",
      highlights: [
        "React, Node.js, MongoDB, Express.js",
        "Cloud Computing & DevOps",
        "Industry Projects & Internships",
        "Google & Microsoft Certifications",
      ],
      careerOpportunities: [
        "Full Stack Developer (₹6-12L)",
        "Frontend Developer (₹4-8L)",
        "Backend Developer (₹5-10L)",
        "Software Engineer (₹6-15L)",
      ],
      placementPartners: ["TCS", "Infosys", "Wipro", "Accenture", "IBM"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "bca-data-analytics",
      title: "BCA + Data Analytics + PGCCA",
      category: "Analytics",
      duration: "3+1 Years",
      totalFee: "₹2,50,000",
      semesterFee: "₹41,667",
      description: "Become a data scientist with advanced analytics and machine learning skills",
      highlights: [
        "Python, R, SQL, Tableau",
        "Machine Learning & AI",
        "Big Data Technologies",
        "Industry Capstone Projects",
      ],
      careerOpportunities: [
        "Data Analyst (₹5-10L)",
        "Data Scientist (₹8-15L)",
        "Business Analyst (₹4-8L)",
        "ML Engineer (₹10-18L)",
      ],
      placementPartners: ["Microsoft", "Amazon", "Google", "IBM", "Deloitte"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "from-purple-600 to-pink-600",
    },
    {
      id: "bca-digital-marketing",
      title: "BCA + Digital Marketing + PGCCA",
      category: "Marketing",
      duration: "3+1 Years",
      totalFee: "₹2,50,000",
      semesterFee: "₹41,667",
      description: "Master digital marketing strategies and technologies for the modern business world",
      highlights: [
        "SEO, SEM, Social Media Marketing",
        "Google Ads & Analytics Certified",
        "Content Strategy & Creation",
        "E-commerce & Affiliate Marketing",
      ],
      careerOpportunities: [
        "Digital Marketing Manager (₹4-8L)",
        "SEO Specialist (₹3-6L)",
        "Social Media Manager (₹3-7L)",
        "Marketing Analyst (₹4-9L)",
      ],
      placementPartners: ["Flipkart", "Myntra", "Zomato", "Swiggy", "Byju's"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      color: "from-green-600 to-teal-600",
    },
    {
      id: "bba-digital-marketing",
      title: "BBA + Digital Marketing + PGCBA",
      category: "Business",
      duration: "3+1 Years",
      totalFee: "₹2,30,000",
      semesterFee: "₹38,333",
      description: "Combine business management with digital marketing expertise",
      highlights: [
        "Business Strategy & Management",
        "Digital Marketing Specialization",
        "Leadership & Entrepreneurship",
        "Industry Mentorship Program",
      ],
      careerOpportunities: [
        "Business Development Manager (₹5-10L)",
        "Marketing Manager (₹4-8L)",
        "Brand Manager (₹6-12L)",
        "Entrepreneur/Startup Founder",
      ],
      placementPartners: ["HDFC Bank", "ICICI", "Reliance", "Tata", "L&T"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-red-600 to-rose-600",
    },
    {
      id: "bcom-acca",
      title: "BCOM + ACCA + PGCFM",
      category: "Finance",
      duration: "3+1 Years",
      totalFee: "₹2,80,000",
      semesterFee: "₹46,667",
      description: "Global finance qualification with ACCA certification",
      highlights: [
        "ACCA Global Certification",
        "Financial Management & Accounting",
        "International Finance Standards",
        "CPA & CFA Preparation",
      ],
      careerOpportunities: [
        "Financial Analyst (₹6-12L)",
        "Chartered Accountant (₹8-15L)",
        "Investment Banker (₹10-20L)",
        "Finance Manager (₹8-18L)",
      ],
      placementPartners: ["Deloitte", "EY", "KPMG", "PwC", "JP Morgan"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "from-indigo-600 to-blue-600",
    },
  ]

  const handleDownloadBrochure = () => {
    // Trigger direct PDF download
    const link = document.createElement("a")
    link.href = "/course-brochure.pdf" // Your PDF path
    link.download = "BIMSR-Course-Brochure.pdf"
    link.click()
  }

  const handleCalculateInvestment = () => {
    // Navigate to fee calculator page
    navigate("/fee-calculator")
  }

  const keyFeatures = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "100% Placement Guarantee",
      description: "Every eligible student gets placed with our industry partners",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Industry Certifications",
      description: "Google, Microsoft, AWS, and other global certifications included",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals and academic experts",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Live Projects",
      description: "Work on real industry projects during your studies",
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Future-Ready Programs</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from our industry-aligned programs designed to make you job-ready with cutting-edge skills and
            guaranteed placements. All programs include free laptop kit and 1-year postgraduate course fully funded by
            BIMSR.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Program Selector */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              <div className="flex flex-wrap gap-2">
                {programs.map((program, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProgram(index)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedProgram === index
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {program.category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Program Details */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Program Image */}
            <div className="relative">
              <img
                src={programs[selectedProgram].image || "/placeholder.svg"}
                alt={programs[selectedProgram].title}
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-4">
                  <span className="text-sm font-semibold">{programs[selectedProgram].category}</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{programs[selectedProgram].title}</h2>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{programs[selectedProgram].duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{programs[selectedProgram].totalFee}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Details */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{programs[selectedProgram].description}</p>
                </div>

                {/* Fee Structure */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{programs[selectedProgram].totalFee}</div>
                      <div className="text-sm text-gray-600">Total Program Fee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{programs[selectedProgram].semesterFee}</div>
                      <div className="text-sm text-gray-600">Per Semester</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      0% Interest EMI Available
                    </span>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h4>
                  <div className="space-y-3">
                    {programs[selectedProgram].highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Career Opportunities</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {programs[selectedProgram].careerOpportunities.map((career, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 text-sm">
                        <span className="font-medium text-gray-800">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placement Partners */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Top Placement Partners</h4>
                  <div className="flex flex-wrap gap-2">
                    {programs[selectedProgram].placementPartners.map((partner, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/programs/${programs[selectedProgram].id}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <span className="mr-2">View Full Details</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/admission"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Programs Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Programs at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare all our programs and choose the one that aligns with your career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                  <div className="relative h-48">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`bg-gradient-to-r ${program.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {program.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{program.description}</p>

                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-green-600">{program.totalFee}</div>
                      <div className="text-sm text-gray-500">{program.duration}</div>
                    </div>

                    <Link
                      to={`/programs/${program.id}`}
                      className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Calculator Section */}
        <div id="fee-calculator" className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6">Calculate Your Investment</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Use our fee calculator to understand the complete cost structure and available EMI options for your
                chosen program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleCalculateInvestment}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Investment
                </button>
                <button
                  onClick={handleDownloadBrochure}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Future?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join thousands of successful BIMSR graduates who have launched their careers with top companies. Your
                journey to success starts with choosing the right program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/admission"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <span className="mr-2">Apply Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
                >
                  Schedule Campus Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
