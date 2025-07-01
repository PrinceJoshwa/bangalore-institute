// // import { Award, BookOpen, Users, GraduationCap, Briefcase, Star } from "lucide-react"

// // interface FacultyMember {
// //   name: string
// //   designation: string
// //   qualification: string
// //   specialization: string[]
// //   experience: string
// //   image: string
// // }

// // export default function Faculty() {
// //   const facultyMembers: FacultyMember[] = [
// //     {
// //       name: "Dr. Rajesh Kumar",
// //       designation: "Director & Professor",
// //       qualification: "Ph.D in Management, MBA",
// //       specialization: ["Strategic Management", "Leadership", "AI in Business"],
// //       experience: "20+ Years",
// //       image:
// //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
// //     },
// //     {
// //       name: "Dr. Priya Sharma",
// //       designation: "Professor - Digital Marketing",
// //       qualification: "Ph.D in Marketing, MBA",
// //       specialization: ["Digital Marketing", "AI Marketing", "Brand Management"],
// //       experience: "15+ Years",
// //       image:
// //         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
// //     },
// //     {
// //       name: "Dr. Arun Patel",
// //       designation: "Professor - Data Analytics",
// //       qualification: "Ph.D in Computer Science, MBA",
// //       specialization: ["Data Analytics", "Machine Learning", "Business Intelligence"],
// //       experience: "18+ Years",
// //       image:
// //         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
// //     },
// //     {
// //       name: "Dr. Meera Nair",
// //       designation: "Associate Professor - ACCA",
// //       qualification: "Ph.D in Accounting, ACCA, MBA",
// //       specialization: ["Professional Accounting", "Financial Management", "ACCA Training"],
// //       experience: "12+ Years",
// //       image:
// //         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
// //     },
// //     {
// //       name: "Prof. Vikram Singh",
// //       designation: "Industry Expert - Business Creation",
// //       qualification: "MBA, Entrepreneur",
// //       specialization: ["Entrepreneurship", "Business Incubation", "Startup Mentoring"],
// //       experience: "16+ Years",
// //       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
// //     },
// //     {
// //       name: "Dr. Anita Reddy",
// //       designation: "Associate Professor - AI Technology",
// //       qualification: "Ph.D in AI, MBA",
// //       specialization: ["Artificial Intelligence", "Smart Learning", "Digital Transformation"],
// //       experience: "10+ Years",
// //       image:
// //         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
// //     },
// //   ]

// //   const facultyStats = [
// //     { number: "25+", label: "Expert Faculty" },
// //     { number: "15+", label: "Ph.D Holders" },
// //     { number: "300+", label: "Years Combined Experience" },
// //     { number: "50+", label: "Industry Certifications" },
// //   ]

// //   return (
// //     <section id="faculty" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Faculty</div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
// //               Learn from AI-Powered Education Experts
// //             </h2>
// //             <p className="max-w-3xl text-gray-600 md:text-xl">
// //               Our distinguished faculty combines academic excellence with industry experience and AI-powered teaching
// //               methodologies to provide world-class education.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Faculty Stats */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
// //           {facultyStats.map((stat, index) => (
// //             <div key={index} className="card p-6 text-center">
// //               <span className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</span>
// //               <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Faculty Highlights */}
// //         <div className="grid md:grid-cols-3 gap-6 mb-16">
// //           <div className="card p-6 text-center">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <GraduationCap className="h-8 w-8 text-blue-600" />
// //             </div>
// //             <h3 className="text-xl font-bold text-blue-800 mb-3">Academic Excellence</h3>
// //             <p className="text-gray-600 text-sm">
// //               Ph.D holders from premier institutions with extensive research and AI-powered teaching experience.
// //             </p>
// //           </div>

// //           <div className="card p-6 text-center">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <Briefcase className="h-8 w-8 text-blue-600" />
// //             </div>
// //             <h3 className="text-xl font-bold text-blue-800 mb-3">Industry Experience</h3>
// //             <p className="text-gray-600 text-sm">
// //               Practical insights from faculty with significant corporate experience and industry certifications.
// //             </p>
// //           </div>

// //           <div className="card p-6 text-center">
// //             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //               <BookOpen className="h-8 w-8 text-blue-600" />
// //             </div>
// //             <h3 className="text-xl font-bold text-blue-800 mb-3">AI-Powered Teaching</h3>
// //             <p className="text-gray-600 text-sm">
// //               Innovative teaching methods using AI-induced smart screens and personalized learning approaches.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Faculty Members */}
// //         <div className="mb-12">
// //           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Meet Our Faculty</h3>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {facultyMembers.map((faculty, index) => (
// //               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
// //                 <div className="relative mb-4">
// //                   <img
// //                     src={faculty.image || "/placeholder.svg"}
// //                     alt={faculty.name}
// //                     className="w-24 h-24 rounded-full mx-auto object-cover"
// //                   />
// //                   <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
// //                     <Star className="h-4 w-4 text-white" />
// //                   </div>
// //                 </div>
// //                 <h4 className="text-lg font-bold text-blue-800 mb-1">{faculty.name}</h4>
// //                 <p className="text-blue-600 font-semibold text-sm mb-2">{faculty.designation}</p>
// //                 <p className="text-gray-600 text-xs mb-3">{faculty.qualification}</p>
// //                 <div className="mb-3">
// //                   <p className="text-xs font-semibold text-gray-700 mb-1">Specialization:</p>
// //                   <div className="flex flex-wrap gap-1 justify-center">
// //                     {faculty.specialization.map((spec, idx) => (
// //                       <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
// //                         {spec}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center justify-center gap-1 text-orange-600">
// //                   <Award className="h-4 w-4" />
// //                   <span className="text-xs font-semibold">{faculty.experience}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Faculty Development */}
// //         <div className="bg-white rounded-xl p-8">
// //           <div className="text-center mb-8">
// //             <h3 className="text-2xl font-bold text-blue-800 mb-4">AI-Powered Faculty Development</h3>
// //             <p className="text-gray-600 max-w-3xl mx-auto">
// //               Our faculty regularly participates in AI and technology training programs, industry conferences, and
// //               research activities to stay current with the latest educational innovations.
// //             </p>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             <div className="text-center">
// //               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                 <Users className="h-6 w-6 text-blue-600" />
// //               </div>
// //               <h4 className="font-semibold text-blue-800 mb-2">Industry Interaction</h4>
// //               <p className="text-sm text-gray-600">Regular interaction with industry professionals and AI experts</p>
// //             </div>
// //             <div className="text-center">
// //               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                 <BookOpen className="h-6 w-6 text-blue-600" />
// //               </div>
// //               <h4 className="font-semibold text-blue-800 mb-2">Research & Innovation</h4>
// //               <p className="text-sm text-gray-600">
// //                 Active research in AI-powered education and modern teaching methods
// //               </p>
// //             </div>
// //             <div className="text-center">
// //               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                 <Award className="h-6 w-6 text-blue-600" />
// //               </div>
// //               <h4 className="font-semibold text-blue-800 mb-2">Professional Development</h4>
// //               <p className="text-sm text-gray-600">
// //                 Continuous learning through AI workshops and technology conferences
// //               </p>
// //             </div>
// //             <div className="text-center">
// //               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                 <GraduationCap className="h-6 w-6 text-blue-600" />
// //               </div>
// //               <h4 className="font-semibold text-blue-800 mb-2">Teaching Excellence</h4>
// //               <p className="text-sm text-gray-600">
// //                 Commitment to AI-powered teaching and personalized student mentoring
// //               </p>
// //             </div>
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
//   BookOpen,
//   Users,
//   GraduationCap,
//   Briefcase,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   ExternalLink,
// } from "lucide-react"

// interface FacultyMember {
//   name: string
//   designation: string
//   qualification: string
//   specialization: string[]
//   experience: string
//   image: string
//   achievements: string[]
//   research: string[]
// }

// export default function Faculty() {
//   const [currentFaculty, setCurrentFaculty] = useState(0)
//   const [activeTab, setActiveTab] = useState("overview")

//   const facultyMembers: FacultyMember[] = [
//     {
//       name: "Dr. Rajesh Kumar",
//       designation: "Director & Professor",
//       qualification: "Ph.D in Management, MBA",
//       specialization: ["Strategic Management", "Leadership", "AI in Business"],
//       experience: "20+ Years",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       achievements: ["Best Faculty Award 2023", "Published 50+ Research Papers", "Industry Consultant"],
//       research: ["AI in Business Strategy", "Digital Transformation", "Leadership in Modern Era"],
//     },
//     {
//       name: "Dr. Priya Sharma",
//       designation: "Professor - Digital Marketing",
//       qualification: "Ph.D in Marketing, MBA",
//       specialization: ["Digital Marketing", "AI Marketing", "Brand Management"],
//       experience: "15+ Years",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       achievements: ["Google Certified Trainer", "Marketing Excellence Award", "Industry Speaker"],
//       research: ["AI-Powered Marketing", "Consumer Behavior Analysis", "Digital Brand Strategy"],
//     },
//     {
//       name: "Dr. Arun Patel",
//       designation: "Professor - Data Analytics",
//       qualification: "Ph.D in Computer Science, MBA",
//       specialization: ["Data Analytics", "Machine Learning", "Business Intelligence"],
//       experience: "18+ Years",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       achievements: ["Microsoft MVP", "Data Science Pioneer Award", "Tech Innovation Leader"],
//       research: ["Machine Learning Applications", "Big Data Analytics", "Predictive Modeling"],
//     },
//     {
//       name: "Dr. Meera Nair",
//       designation: "Associate Professor - ACCA",
//       qualification: "Ph.D in Accounting, ACCA, MBA",
//       specialization: ["Professional Accounting", "Financial Management", "ACCA Training"],
//       experience: "12+ Years",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       achievements: ["ACCA Gold Medalist", "Financial Excellence Award", "Professional Mentor"],
//       research: ["International Accounting Standards", "Financial Risk Management", "Corporate Governance"],
//     },
//     {
//       name: "Prof. Vikram Singh",
//       designation: "Industry Expert - Business Creation",
//       qualification: "MBA, Entrepreneur",
//       specialization: ["Entrepreneurship", "Business Incubation", "Startup Mentoring"],
//       experience: "16+ Years",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       achievements: ["Successful Entrepreneur", "Startup Mentor of the Year", "Business Innovation Award"],
//       research: ["Startup Ecosystem", "Innovation Management", "Entrepreneurial Leadership"],
//     },
//     {
//       name: "Dr. Anita Reddy",
//       designation: "Associate Professor - AI Technology",
//       qualification: "Ph.D in AI, MBA",
//       specialization: ["Artificial Intelligence", "Smart Learning", "Digital Transformation"],
//       experience: "10+ Years",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       achievements: ["AI Research Excellence", "Innovation in Education Award", "Tech Thought Leader"],
//       research: ["AI in Education", "Smart Learning Systems", "Educational Technology"],
//     },
//   ]

//   const facultyStats = [
//     { number: "25+", label: "Expert Faculty", icon: <Users className="h-6 w-6" />, color: "from-blue-500 to-cyan-500" },
//     {
//       number: "15+",
//       label: "Ph.D Holders",
//       icon: <GraduationCap className="h-6 w-6" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       number: "300+",
//       label: "Years Combined Experience",
//       icon: <Award className="h-6 w-6" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       number: "50+",
//       label: "Industry Certifications",
//       icon: <Star className="h-6 w-6" />,
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const facultyHighlights = [
//     {
//       title: "Academic Excellence",
//       description: "Ph.D holders from premier institutions with extensive research and AI-powered teaching experience.",
//       icon: <GraduationCap className="h-8 w-8" />,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Industry Experience",
//       description: "Practical insights from faculty with significant corporate experience and industry certifications.",
//       icon: <Briefcase className="h-8 w-8" />,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "AI-Powered Teaching",
//       description: "Innovative teaching methods using AI-induced smart screens and personalized learning approaches.",
//       icon: <BookOpen className="h-8 w-8" />,
//       gradient: "from-purple-500 to-pink-500",
//     },
//   ]

//   const nextFaculty = () => {
//     setCurrentFaculty((prev) => (prev + 1) % facultyMembers.length)
//   }

//   const prevFaculty = () => {
//     setCurrentFaculty((prev) => (prev - 1 + facultyMembers.length) % facultyMembers.length)
//   }

//   return (
//     <section
//       id="faculty"
//       className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Users className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Our Faculty</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Learn from
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               AI-Powered Education Experts
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Our distinguished faculty combines academic excellence with industry experience and AI-powered teaching
//             methodologies to provide world-class education.
//           </p>
//         </div>

//         {/* Faculty Stats */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {facultyStats.map((stat, index) => (
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
//                   <div className="text-gray-600 font-medium">{stat.label}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Faculty Highlights */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {facultyHighlights.map((highlight, index) => (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
//                 <div
//                   className={`w-20 h-20 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                 >
//                   {highlight.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Faculty Carousel */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Distinguished Faculty</h3>
//             <p className="text-gray-600 text-lg">
//               Industry experts and academic leaders shaping the future of education
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full -translate-y-16 translate-x-16"></div>

//             <div className="relative z-10">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 {/* Faculty Image & Basic Info */}
//                 <div className="text-center lg:text-left">
//                   <div className="relative inline-block mb-6">
//                     <div className="w-64 h-64 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
//                       <img
//                         src={facultyMembers[currentFaculty].image || "/placeholder.svg"}
//                         alt={facultyMembers[currentFaculty].name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
//                       <Star className="h-8 w-8" />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <h4 className="text-2xl font-bold text-gray-900">{facultyMembers[currentFaculty].name}</h4>
//                     <p className="text-blue-600 font-semibold text-lg">{facultyMembers[currentFaculty].designation}</p>
//                     <p className="text-gray-600">{facultyMembers[currentFaculty].qualification}</p>
//                     <div className="flex items-center justify-center lg:justify-start gap-2 text-orange-600 mt-4">
//                       <Award className="h-5 w-5" />
//                       <span className="font-semibold">{facultyMembers[currentFaculty].experience}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Faculty Details */}
//                 <div className="space-y-8">
//                   {/* Tab Navigation */}
//                   <div className="flex space-x-2 bg-gray-100 rounded-xl p-2">
//                     {[
//                       { id: "overview", name: "Overview" },
//                       { id: "achievements", name: "Achievements" },
//                       { id: "research", name: "Research" },
//                     ].map((tab) => (
//                       <button
//                         key={tab.id}
//                         onClick={() => setActiveTab(tab.id)}
//                         className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
//                           activeTab === tab.id
//                             ? "bg-white text-blue-600 shadow-md"
//                             : "text-gray-600 hover:text-blue-600"
//                         }`}
//                       >
//                         {tab.name}
//                       </button>
//                     ))}
//                   </div>

//                   {/* Tab Content */}
//                   <div className="min-h-[200px]">
//                     {activeTab === "overview" && (
//                       <div className="space-y-6">
//                         <div>
//                           <h5 className="font-semibold text-gray-900 mb-3">Specialization Areas</h5>
//                           <div className="flex flex-wrap gap-2">
//                             {facultyMembers[currentFaculty].specialization.map((spec, idx) => (
//                               <span
//                                 key={idx}
//                                 className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
//                               >
//                                 {spec}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                         <div>
//                           <h5 className="font-semibold text-gray-900 mb-3">Teaching Philosophy</h5>
//                           <p className="text-gray-600 leading-relaxed">
//                             Committed to AI-powered education and personalized learning approaches that prepare students
//                             for the future of work. Believes in combining theoretical knowledge with practical industry
//                             experience.
//                           </p>
//                         </div>
//                       </div>
//                     )}

//                     {activeTab === "achievements" && (
//                       <div className="space-y-4">
//                         <h5 className="font-semibold text-gray-900 mb-4">Key Achievements</h5>
//                         {facultyMembers[currentFaculty].achievements.map((achievement, idx) => (
//                           <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
//                             <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
//                               <Award className="h-4 w-4 text-green-600" />
//                             </div>
//                             <span className="text-gray-700">{achievement}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {activeTab === "research" && (
//                       <div className="space-y-4">
//                         <h5 className="font-semibold text-gray-900 mb-4">Research Areas</h5>
//                         {facultyMembers[currentFaculty].research.map((research, idx) => (
//                           <div key={idx} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
//                             <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
//                               <BookOpen className="h-4 w-4 text-purple-600" />
//                             </div>
//                             <span className="text-gray-700">{research}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <div className="flex justify-center items-center gap-4 mt-8">
//                 <button
//                   onClick={prevFaculty}
//                   className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-gray-600" />
//                 </button>

//                 <div className="flex space-x-2">
//                   {facultyMembers.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentFaculty(index)}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                         currentFaculty === index ? "bg-blue-600 w-8" : "bg-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   onClick={nextFaculty}
//                   className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
//                 >
//                   <ChevronRight className="h-6 w-6 text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Faculty Development */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10">
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold mb-4">AI-Powered Faculty Development</h3>
//               <p className="text-blue-100 text-lg max-w-3xl mx-auto">
//                 Our faculty regularly participates in AI and technology training programs, industry conferences, and
//                 research activities to stay current with the latest educational innovations.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   icon: <Users className="h-6 w-6" />,
//                   title: "Industry Interaction",
//                   description: "Regular interaction with industry professionals and AI experts",
//                 },
//                 {
//                   icon: <BookOpen className="h-6 w-6" />,
//                   title: "Research & Innovation",
//                   description: "Active research in AI-powered education and modern teaching methods",
//                 },
//                 {
//                   icon: <Award className="h-6 w-6" />,
//                   title: "Professional Development",
//                   description: "Continuous learning through AI workshops and technology conferences",
//                 },
//                 {
//                   icon: <GraduationCap className="h-6 w-6" />,
//                   title: "Teaching Excellence",
//                   description: "Commitment to AI-powered teaching and personalized student mentoring",
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
//                     {item.icon}
//                   </div>
//                   <h4 className="font-semibold text-white mb-3">{item.title}</h4>
//                   <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
//                 <ExternalLink className="h-5 w-5" />
//                 View Faculty Profiles
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Star, Award, BookOpen, Users, ChevronLeft, ChevronRight, Mail, Linkedin } from "lucide-react"

export default function Faculty() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head",
      department: "Computer Science",
      qualification: "Ph.D. in Computer Science, IIT Delhi",
      experience: "15+ Years",
      specialization: "Full Stack Development, AI/ML",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      publications: 45,
      projects: 12,
      email: "rajesh.kumar@bimsr.edu.in",
      linkedin: "#",
      achievements: ["Best Faculty Award 2023", "Research Excellence Award", "Industry Collaboration Award"],
    },
    {
      id: 2,
      name: "Prof. Priya Sharma",
      designation: "Associate Professor",
      department: "Data Analytics",
      qualification: "Ph.D. in Statistics, ISI Bangalore",
      experience: "12+ Years",
      specialization: "Data Science, Machine Learning",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      publications: 38,
      projects: 15,
      email: "priya.sharma@bimsr.edu.in",
      linkedin: "#",
      achievements: ["Outstanding Researcher 2023", "Data Science Excellence Award", "Student Choice Award"],
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      designation: "Professor",
      department: "Digital Marketing",
      qualification: "Ph.D. in Marketing, IIM Bangalore",
      experience: "18+ Years",
      specialization: "Digital Strategy, Social Media Marketing",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      publications: 52,
      projects: 20,
      email: "amit.patel@bimsr.edu.in",
      linkedin: "#",
      achievements: ["Marketing Excellence Award", "Industry Impact Award", "Innovation in Teaching Award"],
    },
    {
      id: 4,
      name: "Prof. Sneha Reddy",
      designation: "Assistant Professor",
      department: "Commerce",
      qualification: "Ph.D. in Commerce, Bangalore University",
      experience: "10+ Years",
      specialization: "Financial Management, ACCA",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      publications: 28,
      projects: 8,
      email: "sneha.reddy@bimsr.edu.in",
      linkedin: "#",
      achievements: ["Young Faculty Award", "ACCA Excellence Award", "Research Publication Award"],
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      designation: "Professor",
      department: "Management",
      qualification: "Ph.D. in Management, IIM Ahmedabad",
      experience: "20+ Years",
      specialization: "Strategic Management, Leadership",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      publications: 65,
      projects: 25,
      email: "vikram.singh@bimsr.edu.in",
      linkedin: "#",
      achievements: ["Lifetime Achievement Award", "Management Excellence Award", "Industry Leadership Award"],
    },
    {
      id: 6,
      name: "Prof. Kavya Nair",
      designation: "Associate Professor",
      department: "Computer Science",
      qualification: "M.Tech in CSE, NIT Calicut",
      experience: "8+ Years",
      specialization: "Web Development, Cloud Computing",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      publications: 22,
      projects: 10,
      email: "kavya.nair@bimsr.edu.in",
      linkedin: "#",
      achievements: ["Tech Innovation Award", "Best Mentor Award", "Cloud Computing Excellence"],
    },
  ]

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "Computer Science", name: "Computer Science" },
    { id: "Data Analytics", name: "Data Analytics" },
    { id: "Digital Marketing", name: "Digital Marketing" },
    { id: "Commerce", name: "Commerce" },
    { id: "Management", name: "Management" },
  ]

  const filteredFaculty =
    selectedDepartment === "all"
      ? facultyMembers
      : facultyMembers.filter((faculty) => faculty.department === selectedDepartment)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredFaculty.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredFaculty.length) % filteredFaculty.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Our Distinguished Faculty
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Learn from industry experts and renowned academicians who bring years of experience and cutting-edge
            knowledge to shape your future.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-blue-200">Expert Faculty</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-blue-200">Years Avg Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400">200+</div>
              <div className="text-blue-200">Research Publications</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Department Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Filter by Department</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => {
                  setSelectedDepartment(dept.id)
                  setCurrentSlide(0)
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Faculty Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Faculty Member</h2>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <div className="w-full p-8">
              {filteredFaculty.length > 0 && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <img
                      src={filteredFaculty[currentSlide].image || "/placeholder.svg"}
                      alt={filteredFaculty[currentSlide].name}
                      className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0 shadow-xl"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{filteredFaculty[currentSlide].name}</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-1">
                        {filteredFaculty[currentSlide].designation}
                      </p>
                      <p className="text-gray-600">{filteredFaculty[currentSlide].department} Department</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{filteredFaculty[currentSlide].rating}</div>
                        <div className="text-sm text-gray-600">Student Rating</div>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(filteredFaculty[currentSlide].rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">
                          {filteredFaculty[currentSlide].publications}
                        </div>
                        <div className="text-sm text-gray-600">Publications</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700">Qualification: </span>
                        <span className="text-gray-600">{filteredFaculty[currentSlide].qualification}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Experience: </span>
                        <span className="text-gray-600">{filteredFaculty[currentSlide].experience}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Specialization: </span>
                        <span className="text-gray-600">{filteredFaculty[currentSlide].specialization}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Recent Achievements:</h4>
                      <div className="space-y-1">
                        {filteredFaculty[currentSlide].achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 text-yellow-500 mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={`mailto:${filteredFaculty[currentSlide].email}`}
                        className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                      <a
                        href={filteredFaculty[currentSlide].linkedin}
                        className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 pb-6">
              {filteredFaculty.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Faculty Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All Faculty Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{faculty.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{faculty.designation}</p>
                  <p className="text-gray-600 text-sm mb-4">{faculty.department} Department</p>

                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700">Experience: </span>
                      <span className="text-gray-600">{faculty.experience}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700">Specialization: </span>
                      <span className="text-gray-600">{faculty.specialization}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {faculty.publications} Publications
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {faculty.projects} Projects
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${faculty.email}`}
                      className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-3 rounded-lg text-center text-sm font-medium transition-colors"
                    >
                      Contact
                    </a>
                    <a
                      href={faculty.linkedin}
                      className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-center text-sm font-medium transition-colors"
                    >
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Faculty Excellence</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-100">Expert Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">250+</div>
              <div className="text-blue-100">Research Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-blue-100">Industry Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">4.8</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
