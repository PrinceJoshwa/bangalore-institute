// // import { Award, Trophy, Heart, Users, Star, Gift } from "lucide-react"

// // export default function Scholarships() {
// //   const scholarshipPrograms = [
// //     {
// //       title: "Academic Excellence Awards",
// //       description:
// //         "Top performers receive merit scholarships up to ₹2L annually. Recognition ceremonies celebrate outstanding academic achievements.",
// //       icon: <Award className="h-8 w-8 text-blue-600" />,
// //       amount: "Up to ₹2L",
// //       eligibility: "Top 10% performers",
// //     },
// //     {
// //       title: "Sports Scholarships",
// //       description:
// //         "State and national level athletes get full tuition waivers. Special coaching and equipment support included.",
// //       icon: <Trophy className="h-8 w-8 text-blue-600" />,
// //       amount: "Full Tuition Waiver",
// //       eligibility: "State/National athletes",
// //     },
// //     {
// //       title: "Need-Based Support",
// //       description:
// //         "Financial assistance for deserving students from all backgrounds. Easy EMI options and flexible payment plans.",
// //       icon: <Heart className="h-8 w-8 text-blue-600" />,
// //       amount: "Variable Support",
// //       eligibility: "Income-based criteria",
// //     },
// //     {
// //       title: "Leadership Recognition",
// //       description:
// //         "Student council and community service leaders receive special grants. Character development rewards beyond academics.",
// //       icon: <Users className="h-8 w-8 text-blue-600" />,
// //       amount: "Special Grants",
// //       eligibility: "Leadership roles",
// //     },
// //   ]

// //   const sportsExcellence = [
// //     {
// //       title: "Sports Academy",
// //       description:
// //         "Dedicated sports quota admissions with specialized training from certified professional coaches and modern facilities.",
// //       icon: <Trophy className="h-6 w-6 text-blue-600" />,
// //     },
// //     {
// //       title: "Kit Sponsorship",
// //       description:
// //         "Complete sports kit sponsorship up to C-level competitions, supporting your athletic journey alongside academics.",
// //       icon: <Gift className="h-6 w-6 text-blue-600" />,
// //     },
// //     {
// //       title: "Competition Support",
// //       description:
// //         "Active participation in inter-collegiate and state-level competitions with full institutional backing and training.",
// //       icon: <Star className="h-6 w-6 text-blue-600" />,
// //     },
// //     {
// //       title: "Modern Facilities",
// //       description:
// //         "Professional gym, playground, and specialized sports infrastructure within our 17-acre campus environment.",
// //       icon: <Award className="h-6 w-6 text-blue-600" />,
// //     },
// //   ]

// //   return (
// //     <section id="scholarships" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Merit Recognition</div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
// //               Merit Recognition and Scholarships
// //             </h2>
// //             <p className="max-w-3xl text-gray-600 md:text-xl">
// //               Excellence Rewards - Top performers receive exclusive scholarships and fee waivers. Supporting merit
// //               students, sports enthusiasts, and artists equally. Dreams Unlimited - From enlightening to pursuing, we
// //               support your infinite potential.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Scholarship Programs */}
// //         <div className="grid md:grid-cols-2 gap-8 mb-16">
// //           {scholarshipPrograms.map((program, index) => (
// //             <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
// //               <div className="flex items-start gap-4">
// //                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
// //                   {program.icon}
// //                 </div>
// //                 <div className="flex-1">
// //                   <h3 className="text-xl font-bold text-blue-800 mb-2">{program.title}</h3>
// //                   <p className="text-gray-600 text-sm mb-3">{program.description}</p>
// //                   <div className="flex justify-between items-center">
// //                     <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
// //                       {program.amount}
// //                     </div>
// //                     <div className="text-blue-600 text-sm font-medium">{program.eligibility}</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Sports Excellence Program */}
// //         <div className="bg-white rounded-xl p-8 mb-16">
// //           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Sports Excellence Program</h3>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {sportsExcellence.map((item, index) => (
// //               <div key={index} className="text-center">
// //                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                   {item.icon}
// //                 </div>
// //                 <h4 className="font-bold text-blue-800 mb-2">{item.title}</h4>
// //                 <p className="text-gray-600 text-sm">{item.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Merit Recognition Features */}
// //         <div className="grid md:grid-cols-4 gap-6">
// //           <div className="card p-6 text-center">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Award className="h-8 w-8 text-blue-600" />
// //             </div>
// //             <h3 className="text-lg font-bold text-blue-800 mb-2">Excellence Rewards</h3>
// //             <p className="text-gray-600 text-sm">Top performers receive exclusive scholarships and fee waivers</p>
// //           </div>

// //           <div className="card p-6 text-center">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Star className="h-8 w-8 text-blue-600" />
// //             </div>
// //             <h3 className="text-lg font-bold text-blue-800 mb-2">Academic Merit</h3>
// //             <p className="text-gray-600 text-sm">Semester-based performance evaluation with continuous recognition</p>
// //           </div>

// //           <div className="card p-6 text-center">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Heart className="h-8 w-8 text-blue-600" />
// //             </div>
// //             <h3 className="text-lg font-bold text-blue-800 mb-2">Holistic Support</h3>
// //             <p className="text-gray-600 text-sm">Supporting merit students, sports enthusiasts, and artists equally</p>
// //           </div>

// //           <div className="card p-6 text-center">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Trophy className="h-8 w-8 text-blue-600" />
// //             </div>
// //             <h3 className="text-lg font-bold text-blue-800 mb-2">Dreams Unlimited</h3>
// //             <p className="text-gray-600 text-sm">From enlightening to pursuing - we support your infinite potential</p>
// //           </div>
// //         </div>

// //         {/* Call to Action */}
// //         <div className="mt-16 text-center">
// //           <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
// //             <h3 className="text-2xl font-bold mb-4">Apply for Scholarships Today</h3>
// //             <p className="mb-6 text-blue-100">
// //               Don't let financial constraints hold back your dreams. Apply for our comprehensive scholarship programs
// //               and unlock your potential.
// //             </p>
// //             <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
// //               Apply for Scholarships
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import {
//   Award,
//   DollarSign,
//   Users,
//   GraduationCap,
//   Star,
//   CheckCircle,
//   Target,
//   BookOpen,
//   Trophy,
//   Gift,
//   Heart,
// } from "lucide-react"

// export default function Scholarships() {
//   const [activeScholarship, setActiveScholarship] = useState(0)
//   const [selectedCategory, setSelectedCategory] = useState("all")

//   const scholarshipStats = [
//     {
//       number: "₹50L+",
//       label: "Total Scholarships",
//       icon: <DollarSign className="h-6 w-6" />,
//       color: "from-green-500 to-emerald-500",
//       description: "Annual scholarship fund distributed",
//     },
//     {
//       number: "80%",
//       label: "Students Benefited",
//       icon: <Users className="h-6 w-6" />,
//       color: "from-blue-500 to-cyan-500",
//       description: "Students receiving financial assistance",
//     },
//     {
//       number: "15+",
//       label: "Scholarship Types",
//       icon: <Award className="h-6 w-6" />,
//       color: "from-purple-500 to-pink-500",
//       description: "Different scholarship categories",
//     },
//     {
//       number: "100%",
//       label: "Merit Coverage",
//       icon: <Trophy className="h-6 w-6" />,
//       color: "from-orange-500 to-red-500",
//       description: "Top performers get full coverage",
//     },
//   ]

//   const scholarshipPrograms = [
//     {
//       id: 1,
//       title: "Academic Excellence Scholarship",
//       description: "For students with outstanding academic performance in 12th grade",
//       amount: "Up to ₹2,00,000",
//       eligibility: "85%+ in 12th grade",
//       coverage: "50-100% tuition fee",
//       category: "merit",
//       icon: <GraduationCap className="h-8 w-8" />,
//       gradient: "from-blue-500 to-cyan-500",
//       benefits: [
//         "Full or partial tuition fee waiver",
//         "Priority placement assistance",
//         "Mentorship program access",
//         "Industry project opportunities",
//       ],
//       criteria: [
//         "Minimum 85% marks in 12th grade",
//         "Consistent academic performance",
//         "Entrance test score above 80%",
//         "Interview performance",
//       ],
//     },
//     {
//       id: 2,
//       title: "Need-Based Financial Aid",
//       description: "Supporting students from economically disadvantaged backgrounds",
//       amount: "Up to ₹1,50,000",
//       eligibility: "Family income < ₹3L/year",
//       coverage: "40-75% total fees",
//       category: "need",
//       icon: <Heart className="h-8 w-8" />,
//       gradient: "from-green-500 to-emerald-500",
//       benefits: [
//         "Significant fee reduction",
//         "Free study materials",
//         "Hostel fee concession",
//         "Career counseling support",
//       ],
//       criteria: [
//         "Annual family income below ₹3 lakhs",
//         "Income certificate verification",
//         "Academic performance above 70%",
//         "Community service involvement",
//       ],
//     },
//     {
//       id: 3,
//       title: "Sports Excellence Scholarship",
//       description: "Recognizing and supporting talented athletes and sports persons",
//       amount: "Up to ₹1,00,000",
//       eligibility: "State/National level sports",
//       coverage: "25-50% tuition fee",
//       category: "sports",
//       icon: <Trophy className="h-8 w-8" />,
//       gradient: "from-orange-500 to-red-500",
//       benefits: [
//         "Tuition fee concession",
//         "Sports facility access",
//         "Professional coaching",
//         "Competition participation support",
//       ],
//       criteria: [
//         "State or national level participation",
//         "Sports achievement certificates",
//         "Minimum 70% academic performance",
//         "Physical fitness assessment",
//       ],
//     },
//     {
//       id: 4,
//       title: "Women Empowerment Scholarship",
//       description: "Encouraging female students to pursue higher education in technology",
//       amount: "Up to ₹1,25,000",
//       eligibility: "Female candidates",
//       coverage: "30-60% total fees",
//       category: "special",
//       icon: <Star className="h-8 w-8" />,
//       gradient: "from-purple-500 to-pink-500",
//       benefits: [
//         "Fee reduction for female students",
//         "Leadership development programs",
//         "Women in tech mentorship",
//         "Industry networking opportunities",
//       ],
//       criteria: [
//         "Female candidates only",
//         "Minimum 75% marks in 12th grade",
//         "Interest in technology fields",
//         "Leadership potential assessment",
//       ],
//     },
//     {
//       id: 5,
//       title: "Rural Development Scholarship",
//       description: "Supporting students from rural areas to access quality education",
//       amount: "Up to ₹1,75,000",
//       eligibility: "Rural area residents",
//       coverage: "45-80% total fees",
//       category: "special",
//       icon: <Users className="h-8 w-8" />,
//       gradient: "from-indigo-500 to-purple-500",
//       benefits: [
//         "Substantial fee waiver",
//         "Accommodation support",
//         "Digital literacy training",
//         "Career guidance programs",
//       ],
//       criteria: [
//         "Residence in rural areas",
//         "Village panchayat certificate",
//         "Academic merit above 70%",
//         "Commitment to rural development",
//       ],
//     },
//     {
//       id: 6,
//       title: "Innovation & Entrepreneurship Grant",
//       description: "For students with innovative ideas and entrepreneurial mindset",
//       amount: "Up to ₹2,50,000",
//       eligibility: "Innovative project ideas",
//       coverage: "Project funding + fee waiver",
//       category: "innovation",
//       icon: <Target className="h-8 w-8" />,
//       gradient: "from-red-500 to-pink-500",
//       benefits: [
//         "Project development funding",
//         "Mentorship from industry experts",
//         "Incubation center access",
//         "Investor networking opportunities",
//       ],
//       criteria: [
//         "Innovative business idea presentation",
//         "Technical feasibility assessment",
//         "Market potential evaluation",
//         "Team formation capability",
//       ],
//     },
//   ]

//   const applicationProcess = [
//     {
//       step: "01",
//       title: "Check Eligibility",
//       description: "Review scholarship criteria and ensure you meet the requirements",
//       icon: <CheckCircle className="h-6 w-6" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       step: "02",
//       title: "Prepare Documents",
//       description: "Gather all required documents and certificates for verification",
//       icon: <BookOpen className="h-6 w-6" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       step: "03",
//       title: "Submit Application",
//       description: "Complete online application form with all necessary details",
//       icon: <Target className="h-6 w-6" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       step: "04",
//       title: "Review & Selection",
//       description: "Application review, interview, and final scholarship award",
//       icon: <Award className="h-6 w-6" />,
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const categories = [
//     { id: "all", name: "All Scholarships", count: scholarshipPrograms.length },
//     { id: "merit", name: "Merit-Based", count: scholarshipPrograms.filter((s) => s.category === "merit").length },
//     { id: "need", name: "Need-Based", count: scholarshipPrograms.filter((s) => s.category === "need").length },
//     { id: "sports", name: "Sports", count: scholarshipPrograms.filter((s) => s.category === "sports").length },
//     {
//       id: "special",
//       name: "Special Categories",
//       count: scholarshipPrograms.filter((s) => s.category === "special").length,
//     },
//     {
//       id: "innovation",
//       name: "Innovation",
//       count: scholarshipPrograms.filter((s) => s.category === "innovation").length,
//     },
//   ]

//   const filteredScholarships =
//     selectedCategory === "all"
//       ? scholarshipPrograms
//       : scholarshipPrograms.filter((s) => s.category === selectedCategory)

//   return (
//     <section
//       id="scholarships"
//       className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Gift className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Financial Support</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Scholarships &
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Financial Aid
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             We believe education should be accessible to all. Our comprehensive scholarship programs ensure that
//             financial constraints don't limit your potential for success.
//           </p>
//         </div>

//         {/* Scholarship Stats */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {scholarshipStats.map((stat, index) => (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                 >
//                   {stat.icon}
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-900 font-semibold mb-2">{stat.label}</div>
//                   <div className="text-gray-600 text-sm">{stat.description}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Category Filter */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex flex-wrap justify-center gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     selectedCategory === category.id
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {category.name}
//                   <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
//                     {category.count}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Scholarship Programs */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {filteredScholarships.map((scholarship, index) => (
//             <div key={scholarship.id} className="group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
//                 <div className={`h-2 bg-gradient-to-r ${scholarship.gradient}`}></div>
//                 <div className="p-8">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${scholarship.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {scholarship.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-900 mb-1">{scholarship.title}</h3>
//                       <p className="text-blue-600 font-semibold text-lg">{scholarship.amount}</p>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-6 leading-relaxed">{scholarship.description}</p>

//                   <div className="space-y-4 mb-6">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-500 text-sm">Eligibility:</span>
//                       <span className="text-gray-900 font-medium text-sm">{scholarship.eligibility}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-500 text-sm">Coverage:</span>
//                       <span className="text-green-600 font-medium text-sm">{scholarship.coverage}</span>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => setActiveScholarship(scholarship.id)}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Detailed Scholarship View */}
//         {activeScholarship > 0 && (
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-20">
//             {(() => {
//               const scholarship = scholarshipPrograms.find((s) => s.id === activeScholarship)
//               if (!scholarship) return null

//               return (
//                 <div>
//                   <div className="flex items-center gap-4 mb-8">
//                     <div
//                       className={`w-20 h-20 bg-gradient-to-r ${scholarship.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
//                     >
//                       {scholarship.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2">{scholarship.title}</h3>
//                       <p className="text-blue-600 font-semibold text-xl">{scholarship.amount}</p>
//                     </div>
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-8">
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900 mb-4">Benefits & Coverage</h4>
//                       <div className="space-y-3">
//                         {scholarship.benefits.map((benefit, idx) => (
//                           <div key={idx} className="flex items-center gap-3">
//                             <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
//                             <span className="text-gray-700">{benefit}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900 mb-4">Eligibility Criteria</h4>
//                       <div className="space-y-3">
//                         {scholarship.criteria.map((criterion, idx) => (
//                           <div key={idx} className="flex items-center gap-3">
//                             <Star className="h-5 w-5 text-blue-500 shrink-0" />
//                             <span className="text-gray-700">{criterion}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-8 text-center">
//                     <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 mr-4">
//                       Apply Now
//                     </button>
//                     <button
//                       onClick={() => setActiveScholarship(0)}
//                       className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
//                     >
//                       Close Details
//                     </button>
//                   </div>
//                 </div>
//               )
//             })()}
//           </div>
//         )}

//         {/* Application Process */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">Simple Application Process</h3>
//             <p className="text-gray-600 text-lg">Follow these easy steps to apply for scholarships</p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-8">
//             {applicationProcess.map((step, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
//                   <div className="relative mb-6">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {step.icon}
//                     </div>
//                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                       {step.step}
//                     </div>
//                   </div>
//                   <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
//                   <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10 text-center">
//             <h3 className="text-3xl font-bold mb-4">Don't Let Finances Hold You Back</h3>
//             <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
//               Our scholarship programs are designed to make quality education accessible to deserving students. Apply
//               today and take the first step towards your bright future.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                 Apply for Scholarships
//               </button>
//               <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
//                 Download Application Form
//               </button>
//             </div>
//             <div className="mt-8 text-sm text-blue-100">
//               <strong>Application Deadline:</strong> July 31, 2024 | <strong>Results:</strong> August 15, 2024
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"

import { useState } from "react"
import { Award, Users, TrendingUp, CheckCircle, Calculator, FileText, Clock, Star } from "lucide-react"

export default function Scholarships() {
  const [selectedScholarship, setSelectedScholarship] = useState(0)
  const [calculatorData, setCalculatorData] = useState({
    category: "",
    income: "",
    percentage: "",
    program: "",
  })

  const scholarships = [
    {
      title: "Merit-Based Scholarship",
      description: "For students with exceptional academic performance",
      eligibility: "85% and above in 12th standard",
      amount: "Up to ₹50,000",
      coverage: "25% of total fees",
      icon: Award,
      color: "from-blue-500 to-blue-600",
      benefits: [
        "Tuition fee reduction",
        "Priority in hostel allocation",
        "Access to advanced courses",
        "Mentorship program",
      ],
      requirements: [
        "Minimum 85% in qualifying exam",
        "Entrance test score above 80%",
        "No backlogs in previous education",
        "Good conduct certificate",
      ],
    },
    {
      title: "Need-Based Scholarship",
      description: "Financial assistance for economically disadvantaged students",
      eligibility: "Family income below ₹3 LPA",
      amount: "Up to ₹75,000",
      coverage: "40% of total fees",
      icon: Users,
      color: "from-green-500 to-green-600",
      benefits: ["Significant fee reduction", "Free study materials", "Hostel fee waiver", "Monthly stipend"],
      requirements: [
        "Income certificate required",
        "Minimum 70% in qualifying exam",
        "Domicile certificate",
        "Bank statements",
      ],
    },
    {
      title: "Sports Excellence Scholarship",
      description: "For students with outstanding sports achievements",
      eligibility: "State/National level sports participation",
      amount: "Up to ₹40,000",
      coverage: "20% of total fees",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      benefits: [
        "Fee concession",
        "Sports equipment support",
        "Professional coaching",
        "Competition participation support",
      ],
      requirements: [
        "Sports achievement certificates",
        "Minimum 75% in academics",
        "Medical fitness certificate",
        "Coach recommendation",
      ],
    },
    {
      title: "Girl Child Scholarship",
      description: "Encouraging female education in technology",
      eligibility: "Female students with 80%+ marks",
      amount: "Up to ₹35,000",
      coverage: "18% of total fees",
      icon: Star,
      color: "from-pink-500 to-pink-600",
      benefits: ["Tuition fee discount", "Women's safety measures", "Career counseling", "Industry networking"],
      requirements: ["Female candidate", "Minimum 80% in 12th", "Good academic record", "Personal interview"],
    },
  ]

  const applicationProcess = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Review scholarship criteria and requirements",
      icon: CheckCircle,
    },
    {
      step: 2,
      title: "Gather Documents",
      description: "Collect all required certificates and documents",
      icon: FileText,
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Complete online application with documents",
      icon: Calculator,
    },
    {
      step: 4,
      title: "Review Process",
      description: "Application review and verification",
      icon: Clock,
    },
    {
      step: 5,
      title: "Award Notification",
      description: "Scholarship award confirmation and disbursement",
      icon: Award,
    },
  ]

  const successStories = [
    {
      name: "Priya Sharma",
      scholarship: "Merit-Based Scholarship",
      amount: "₹50,000",
      program: "BCA + Full Stack Development",
      story:
        "The merit scholarship helped me focus on studies without financial stress. Now I'm placed at a top tech company!",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Rajesh Kumar",
      scholarship: "Need-Based Scholarship",
      amount: "₹75,000",
      program: "BCA + Data Analytics",
      story: "Coming from a humble background, this scholarship made my dreams possible. Forever grateful to BIMSR!",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Sneha Reddy",
      scholarship: "Girl Child Scholarship",
      amount: "₹35,000",
      program: "BBA + Digital Marketing",
      story:
        "The girl child scholarship not only supported my education but also boosted my confidence to excel in tech.",
      image: "/images/testimonial-3.jpg",
    },
  ]

  const handleCalculatorChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setCalculatorData({
      ...calculatorData,
      [e.target.name]: e.target.value,
    })
  }

  const calculateEligibility = () => {
    // Simple eligibility calculation logic
    const eligibleScholarships = []

    if (Number.parseFloat(calculatorData.percentage) >= 85) {
      eligibleScholarships.push("Merit-Based Scholarship")
    }
    if (Number.parseFloat(calculatorData.income) <= 300000) {
      eligibleScholarships.push("Need-Based Scholarship")
    }
    if (Number.parseFloat(calculatorData.percentage) >= 80 && calculatorData.category === "female") {
      eligibleScholarships.push("Girl Child Scholarship")
    }

    return eligibleScholarships
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Scholarship Programs
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            We believe in making quality education accessible to all. Explore our comprehensive scholarship programs
            designed to support deserving students.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400">₹2Cr+</div>
              <div className="text-emerald-200">Scholarships Awarded</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-emerald-200">Students Benefited</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400">8</div>
              <div className="text-emerald-200">Scholarship Types</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Scholarship Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Scholarships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => {
              const Icon = scholarship.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    selectedScholarship === index ? "ring-4 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedScholarship(index)}
                >
                  <div className={`bg-gradient-to-r ${scholarship.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-12 w-12" />
                      <div className="text-right">
                        <div className="text-2xl font-bold">{scholarship.amount}</div>
                        <div className="text-sm opacity-90">{scholarship.coverage}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{scholarship.title}</h3>
                    <p className="opacity-90">{scholarship.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Eligibility:</h4>
                      <p className="text-gray-600">{scholarship.eligibility}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {scholarship.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {scholarship.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <FileText className="h-4 w-4 text-blue-500 mr-2" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`w-full mt-6 bg-gradient-to-r ${scholarship.color} text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Scholarship Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Scholarship Eligibility Calculator</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Check Your Eligibility</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                    <select
                      name="category"
                      value={calculatorData.category}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Category</option>
                      <option value="general">General</option>
                      <option value="female">Female</option>
                      <option value="sports">Sports Person</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Family Annual Income (₹)</label>
                    <input
                      type="number"
                      name="income"
                      value={calculatorData.income}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter annual income"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">12th Standard Percentage</label>
                    <input
                      type="number"
                      name="percentage"
                      value={calculatorData.percentage}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter percentage"
                      max="100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Program of Interest</label>
                    <select
                      name="program"
                      value={calculatorData.program}
                      onChange={handleCalculatorChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Program</option>
                      <option value="bca-fullstack">BCA + Full Stack Development</option>
                      <option value="bca-analytics">BCA + Data Analytics</option>
                      <option value="bca-digital">BCA + Digital Marketing</option>
                      <option value="bba-digital">BBA + Digital Marketing</option>
                      <option value="bcom-acca">BCOM + ACCA</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligible Scholarships</h3>
                <div className="space-y-4">
                  {calculatorData.percentage && calculatorData.income ? (
                    calculateEligibility().length > 0 ? (
                      calculateEligibility().map((scholarship, index) => (
                        <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-4">
                          <div className="flex items-center">
                            <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                            <div>
                              <div className="font-semibold text-green-800">{scholarship}</div>
                              <div className="text-sm text-green-600">You are eligible for this scholarship</div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                        <div className="flex items-center">
                          <Clock className="h-6 w-6 text-yellow-500 mr-3" />
                          <div>
                            <div className="font-semibold text-yellow-800">No Direct Match</div>
                            <div className="text-sm text-yellow-600">Contact admissions for other opportunities</div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                      <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <div className="text-gray-600">Fill the form to check eligibility</div>
                    </div>
                  )}
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Detailed Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {applicationProcess.map((process, index) => {
              const Icon = process.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {story.amount}
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold mb-2">{story.scholarship}</div>
                  <div className="text-gray-600 text-sm mb-4">{story.program}</div>
                  <blockquote className="text-gray-700 italic">"{story.story}"</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply for Scholarships?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Don't let financial constraints hold you back. Apply for our scholarships and take the first step towards
            your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Apply for Scholarship
            </button>
            <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Download Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
