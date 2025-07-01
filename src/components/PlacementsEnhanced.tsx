// // import { Building2, TrendingUp, Users, Award, Target, Briefcase, MapPin, Calendar, Trophy } from "lucide-react"

// // export default function PlacementsEnhanced() {
// //   const placementStats = [
// //     { number: "100%", label: "Placement Assistance", icon: <Award className="h-8 w-8" /> },
// //     { number: "₹7 LPA", label: "Average Package", icon: <TrendingUp className="h-8 w-8" /> },
// //     { number: "₹15 LPA", label: "Highest Package", icon: <Trophy className="h-8 w-8" /> },
// //     { number: "500+", label: "Industry Partners", icon: <Building2 className="h-8 w-8" /> },
// //   ]

// //   const industryPartners = {
// //     technology: [
// //       { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
// //       { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
// //       { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
// //       { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
// //     ],
// //     manufacturing: [
// //       { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Bosch-logo.svg" },
// //       { name: "Honeywell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Honeywell_logo.svg" },
// //       { name: "Royal Enfield", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Royal_Enfield_logo.svg" },
// //       { name: "L&T", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Larsen_%26_Toubro_logo.svg" },
// //     ],
// //     consulting: [
// //       { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
// //       { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cognizant_logo_2022.svg" },
// //       { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/HCL_Technologies_logo.svg" },
// //       { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
// //     ],
// //     infrastructure: [
// //       { name: "Volvo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Volvo_logo.svg" },
// //       { name: "Jindal Steel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/JSW_Group_logo.svg" },
// //       { name: "Sobha", logo: "https://logos-download.com/wp-content/uploads/2021/01/Sobha_Realty_Logo.png" },
// //       { name: "DLF", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/DLF_Logo.svg" },
// //     ],
// //   }

// //   const placementProcess = [
// //     {
// //       title: "Early Preparation",
// //       description:
// //         "Placement-oriented training begins from first year, building industry-ready skills progressively through comprehensive skill development programs.",
// //       icon: <Users className="h-8 w-8" />,
// //     },
// //     {
// //       title: "Practical Experience",
// //       description:
// //         "Internships starting from 4th semester with company visits, expert lectures, and live industry-promoted projects for real-world exposure.",
// //       icon: <Building2 className="h-8 w-8" />,
// //     },
// //     {
// //       title: "Career Launch",
// //       description:
// //         "Dedicated placement semester with campus interviews, employer connections, and continuous monitoring of employment opportunities.",
// //       icon: <TrendingUp className="h-8 w-8" />,
// //     },
// //   ]

// //   const skillsPrograms = [
// //     {
// //       title: "Communication Excellence",
// //       description:
// //         "Basic English communication training by certified trainers covering verbal, written, and listening skills development.",
// //       icon: <Users className="h-6 w-6" />,
// //     },
// //     {
// //       title: "Problem Solving",
// //       description:
// //         "Aptitude development with continuous industry-relevant training from experienced professionals and practical applications.",
// //       icon: <Target className="h-6 w-6" />,
// //     },
// //     {
// //       title: "Teamwork Skills",
// //       description:
// //         "Collaborative project work developing integrity, teamwork abilities, and modern technology tool usage for workplace readiness.",
// //       icon: <Users className="h-6 w-6" />,
// //     },
// //     {
// //       title: "Entrepreneurship",
// //       description:
// //         "Innovation mindset development through Business Creation Lab experiences and startup incubation support programs.",
// //       icon: <Briefcase className="h-6 w-6" />,
// //     },
// //   ]

// //   const careerFocus = [
// //     {
// //       level: "Entry-Level Positions",
// //       description: "Junior developers and assistants",
// //       package: "₹4-6 LPA",
// //       roles: ["Junior Developer", "Assistant Analyst", "Trainee Engineer"],
// //     },
// //     {
// //       level: "Mid-Level Roles",
// //       description: "Full stack developers and specialists",
// //       package: "₹6-10 LPA",
// //       roles: ["Full Stack Developer", "Data Analyst", "Marketing Specialist"],
// //     },
// //     {
// //       level: "Leadership Positions",
// //       description: "Team leads and project managers",
// //       package: "₹10-15 LPA",
// //       roles: ["Team Lead", "Project Manager", "Senior Consultant"],
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
// //       {/* Hero Section */}
// //       <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
// //         <div className="absolute inset-0 bg-black/20"></div>
// //         <div className="relative container mx-auto px-4">
// //           <div className="text-center max-w-4xl mx-auto">
// //             <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
// //               <Trophy className="h-5 w-5 text-green-400" />
// //               100% Placement Guarantee
// //             </div>
// //             <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
// //               Career Success
// //               <span className="block text-3xl lg:text-4xl text-blue-300 font-normal mt-2">Guaranteed Placements</span>
// //             </h1>
// //             <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
// //               Our dedicated placement cell ensures every student gets industry-ready training and guaranteed placement
// //               assistance with leading companies across various sectors.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Placement Stats */}
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
// //             {placementStats.map((stat, index) => (
// //               <div key={index} className="group">
// //                 <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
// //                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
// //                     {stat.icon}
// //                   </div>
// //                   <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
// //                   <p className="text-gray-600 font-medium">{stat.label}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Industry Visit Photos */}
// //       <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Visits & Placement Activities</h2>
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //               Real industry exposure through visits, placement drives, and direct interaction with top companies.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
// //             <div className="group relative overflow-hidden rounded-2xl shadow-lg">
// //               <img
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IV%20%281%29.jpg-F7kw03qxusLStbE6WuFergeCq2cOaj.jpeg"
// //                 alt="BIMSR students during industry visit - Group celebration"
// //                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
// //               <div className="absolute bottom-0 left-0 right-0 p-6">
// //                 <div className="flex items-center gap-2 text-white text-sm mb-2">
// //                   <MapPin className="h-4 w-4" />
// //                   <span>Industry Visit - Bangalore</span>
// //                 </div>
// //                 <p className="text-white font-semibold">Student Industry Interaction</p>
// //               </div>
// //             </div>

// //             <div className="group relative overflow-hidden rounded-2xl shadow-lg">
// //               <img
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IV%20%284%29.jpg-L7gke33Ql5UbLRB7P47jk3NcYrwzNr.jpeg"
// //                 alt="BIMSR students making victory gestures during placement activity"
// //                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
// //               <div className="absolute bottom-0 left-0 right-0 p-6">
// //                 <div className="flex items-center gap-2 text-white text-sm mb-2">
// //                   <Calendar className="h-4 w-4" />
// //                   <span>Placement Drive 2024</span>
// //                 </div>
// //                 <p className="text-white font-semibold">Success Celebration</p>
// //               </div>
// //             </div>

// //             <div className="group relative overflow-hidden rounded-2xl shadow-lg">
// //               <img
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%283%29.jpg-JpNATCa2bYisbi2fGqizfm1s1svoK0.jpeg"
// //                 alt="BIMSR students attending placement seminar in classroom"
// //                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
// //               <div className="absolute bottom-0 left-0 right-0 p-6">
// //                 <div className="flex items-center gap-2 text-white text-sm mb-2">
// //                   <Users className="h-4 w-4" />
// //                   <span>Placement Seminar</span>
// //                 </div>
// //                 <p className="text-white font-semibold">Career Guidance Session</p>
// //               </div>
// //             </div>

// //             <div className="group relative overflow-hidden rounded-2xl shadow-lg">
// //               <img
// //                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%282%29.jpg-6vzChihzKsDfCkT0jCKmis5HyiMCOm.jpeg"
// //                 alt="BIMSR students receiving placement certificates"
// //                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
// //               <div className="absolute bottom-0 left-0 right-0 p-6">
// //                 <div className="flex items-center gap-2 text-white text-sm mb-2">
// //                   <Award className="h-4 w-4" />
// //                   <span>Achievement Ceremony</span>
// //                 </div>
// //                 <p className="text-white font-semibold">Placement Success</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="text-center">
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Regular industry visits and placement activities ensure our students get real-world exposure and
// //               networking opportunities with top companies.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Placement Package Distribution */}
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Package Distribution</h2>
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //               Our graduates consistently secure impressive placement packages across the industry spectrum.
// //             </p>
// //           </div>

// //           <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
// //             <div className="grid grid-cols-4 gap-6 mb-8">
// //               <div className="text-center">
// //                 <div className="h-24 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg flex items-end justify-center pb-3">
// //                   <span className="text-white font-bold text-lg">4 LPA</span>
// //                 </div>
// //                 <div className="bg-blue-600 text-white py-3 rounded-b-lg font-semibold">Minimum</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="h-32 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg flex items-end justify-center pb-3">
// //                   <span className="text-white font-bold text-lg">7 LPA</span>
// //                 </div>
// //                 <div className="bg-green-600 text-white py-3 rounded-b-lg font-semibold">Average</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="h-40 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg flex items-end justify-center pb-3">
// //                   <span className="text-white font-bold text-lg">12 LPA</span>
// //                 </div>
// //                 <div className="bg-purple-600 text-white py-3 rounded-b-lg font-semibold">Good</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="h-48 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg flex items-end justify-center pb-3">
// //                   <span className="text-white font-bold text-lg">15 LPA</span>
// //                 </div>
// //                 <div className="bg-indigo-600 text-white py-3 rounded-b-lg font-semibold">Excellent</div>
// //               </div>
// //             </div>
// //             <p className="text-center text-gray-600 text-lg">
// //               The average package of 7 LPA reflects our program's strong industry alignment and comprehensive skill
// //               development approach.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Career Focus */}
// //       <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //               Multiple career paths with competitive packages across different experience levels.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {careerFocus.map((career, index) => (
// //               <div key={index} className="group">
// //                 <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
// //                   <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
// //                     <span className="text-white font-bold text-2xl">{index + 1}</span>
// //                   </div>
// //                   <h3 className="text-2xl font-bold text-gray-900 mb-3">{career.level}</h3>
// //                   <p className="text-gray-600 mb-4">{career.description}</p>
// //                   <div className="text-3xl font-bold text-green-600 mb-6">{career.package}</div>
// //                   <div className="space-y-2">
// //                     {career.roles.map((role, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
// //                       >
// //                         {role}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Industry Partners */}
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hiring Partners</h2>
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //               Leading companies across industries trust our graduates for their talent and skills.
// //             </p>
// //           </div>

// //           <div className="space-y-12">
// //             <div>
// //               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
// //                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
// //                   <Award className="h-5 w-5 text-white" />
// //                 </div>
// //                 Technology Giants
// //               </h3>
// //               <p className="text-gray-600 mb-6">
// //                 Leading tech companies like IBM, Samsung, and Infosys actively recruit our graduates for cutting-edge
// //                 roles.
// //               </p>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //                 {industryPartners.technology.map((partner, index) => (
// //                   <div
// //                     key={index}
// //                     className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-24"
// //                   >
// //                     <img
// //                       src={partner.logo || "/placeholder.svg"}
// //                       alt={`${partner.name} logo`}
// //                       className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
// //                       onError={(e) => {
// //                         const target = e.target as HTMLImageElement
// //                         target.style.display = "none"
// //                         const parent = target.parentElement
// //                         if (parent) {
// //                           parent.innerHTML = `<div class="text-blue-600 font-semibold text-sm text-center">${partner.name}</div>`
// //                         }
// //                       }}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div>
// //               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
// //                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
// //                   <Building2 className="h-5 w-5 text-white" />
// //                 </div>
// //                 Manufacturing Leaders
// //               </h3>
// //               <p className="text-gray-600 mb-6">
// //                 Industrial powerhouses including Bosch, Honeywell, and Royal Enfield offer diverse engineering
// //                 opportunities.
// //               </p>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //                 {industryPartners.manufacturing.map((partner, index) => (
// //                   <div
// //                     key={index}
// //                     className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-24"
// //                   >
// //                     <img
// //                       src={partner.logo || "/placeholder.svg"}
// //                       alt={`${partner.name} logo`}
// //                       className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
// //                       onError={(e) => {
// //                         const target = e.target as HTMLImageElement
// //                         target.style.display = "none"
// //                         const parent = target.parentElement
// //                         if (parent) {
// //                           parent.innerHTML = `<div class="text-blue-600 font-semibold text-sm text-center">${partner.name}</div>`
// //                         }
// //                       }}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
// //         <div className="container mx-auto px-4 text-center">
// //           <div className="max-w-3xl mx-auto">
// //             <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Career?</h2>
// //             <p className="text-xl text-blue-100 mb-8">
// //               Join our successful graduates who have secured placements with top companies. Your dream job awaits!
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
// //                 View Placement Records
// //               </button>
// //               <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
// //                 Schedule Campus Visit
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import {
//   Building2,
//   TrendingUp,
//   Users,
//   Award,
//   Target,
//   Briefcase,
//   Star,
//   ArrowRight,
//   CheckCircle,
//   MapPin,
//   ExternalLink,
//   Calendar,
//   Trophy,
// } from "lucide-react"

// export default function PlacementsEnhanced() {
//   const [activeTab, setActiveTab] = useState("overview")
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   const placementStats = [
//     {
//       number: "100%",
//       label: "Placement Assistance",
//       icon: <CheckCircle className="h-6 w-6" />,
//       color: "from-green-500 to-emerald-500",
//       description: "Guaranteed placement support for all students",
//     },
//     {
//       number: "₹4L-8L",
//       label: "Starting Package",
//       icon: <TrendingUp className="h-6 w-6" />,
//       color: "from-blue-500 to-cyan-500",
//       description: "Competitive salary packages across industries",
//     },
//     {
//       number: "500+",
//       label: "Industry Partners",
//       icon: <Building2 className="h-6 w-6" />,
//       color: "from-purple-500 to-pink-500",
//       description: "Strong network of recruiting companies",
//     },
//     {
//       number: "95%",
//       label: "Placement Rate",
//       icon: <Award className="h-6 w-6" />,
//       color: "from-red-500 to-rose-500",
//       description: "Successful career launches for our graduates",
//     },
//   ]

//   const industryVisitImages = [
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IV%20%281%29.jpg-F7kw03qxusLStbE6WuFergeCq2cOaj.jpeg",
//       title: "Industry Visit - Angel One",
//       description:
//         "Students during industry visit at Angel One, gaining real-world insights into financial technology and trading platforms.",
//       location: "Bangalore Tech Park",
//       date: "March 2024",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IV%20%284%29.jpg-L7gke33Ql5UbLRB7P47jk3NcYrwzNr.jpeg",
//       title: "Interactive Session",
//       description: "Engaging with industry professionals and learning about current market trends and opportunities.",
//       location: "Corporate Office",
//       date: "February 2024",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IV%20%282%29.jpg-CkiufNdnPNWw9JnjqdMltUYhNA8U4U.jpeg",
//       title: "Team Building",
//       description: "Students showcasing teamwork and enthusiasm during corporate interaction sessions.",
//       location: "Industry Campus",
//       date: "January 2024",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IV%20%283%29.jpg-4OH4wU3dywVuGx8jpZBbxPBp3i0sFg.jpeg",
//       title: "Professional Development",
//       description: "Building professional networks and understanding industry expectations and requirements.",
//       location: "Business Center",
//       date: "December 2023",
//     },
//   ]

//   const placementDriveImages = [
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%283%29.jpg-JpNATCa2bYisbi2fGqizfm1s1svoK0.jpeg",
//       title: "Placement Drive Session",
//       description: "Students attending placement orientation and preparation sessions in our modern auditorium.",
//       company: "Multiple Companies",
//       positions: "50+ Openings",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%284%29.jpg-CHwMHrZJpnuz3peAdYkqgxnw2HcaMc.jpeg",
//       title: "Career Guidance",
//       description: "Comprehensive career counseling and interview preparation sessions for final year students.",
//       company: "Career Development",
//       positions: "All Students",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%285%29.jpg-xmhRhze5Avh9oCxNogPQDLbbs9eBtG.jpeg",
//       title: "Achievement Ceremony",
//       description: "Celebrating successful placements with certificate distribution and recognition ceremony.",
//       company: "Success Stories",
//       positions: "Top Performers",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%281%29.jpg-ORrvs1kXjmuvaPsIdr8ea73TZAWh9N.jpeg",
//       title: "Interview Process",
//       description: "One-on-one interview sessions with industry recruiters and HR professionals.",
//       company: "Live Interviews",
//       positions: "Direct Selection",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%282%29.jpg-6vzChihzKsDfCkT0jCKmis5HyiMCOm.jpeg",
//       title: "Success Stories",
//       description: "Students receiving placement offers and celebrating their career achievements.",
//       company: "Dream Companies",
//       positions: "Final Selection",
//     },
//     {
//       src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placement%20%286%29.jpg-uLWWN8cMmeco1TOPc3DyhkIEHsFigw.jpeg",
//       title: "Final Selection",
//       description: "Final placement ceremony with successful candidates and faculty members.",
//       company: "Completion",
//       positions: "Career Launch",
//     },
//   ]

//   const placementProcess = [
//     {
//       title: "Early Preparation",
//       description: "Placement-oriented training begins from first year, building industry-ready skills progressively.",
//       icon: <Users className="h-8 w-8" />,
//       gradient: "from-blue-500 to-cyan-500",
//       features: ["Skill Assessment", "Career Planning", "Industry Exposure"],
//     },
//     {
//       title: "Practical Experience",
//       description: "Internships starting from 4th semester with company visits and live industry projects.",
//       icon: <Building2 className="h-8 w-8" />,
//       gradient: "from-green-500 to-emerald-500",
//       features: ["Live Projects", "Industry Visits", "Internship Programs"],
//     },
//     {
//       title: "Career Launch",
//       description: "Dedicated placement semester with campus interviews and continuous monitoring.",
//       icon: <TrendingUp className="h-8 w-8" />,
//       gradient: "from-purple-500 to-pink-500",
//       features: ["Campus Interviews", "Job Assistance", "Career Support"],
//     },
//   ]

//   const skillsPrograms = [
//     {
//       title: "Communication Excellence",
//       description:
//         "Basic English communication training by certified trainers covering verbal, written, and listening skills.",
//       icon: <Users className="h-6 w-6" />,
//       level: "Beginner to Advanced",
//       duration: "6 Months",
//     },
//     {
//       title: "Problem Solving",
//       description: "Aptitude development with continuous industry-relevant training from experienced professionals.",
//       icon: <Target className="h-6 w-6" />,
//       level: "Intermediate",
//       duration: "4 Months",
//     },
//     {
//       title: "Teamwork Skills",
//       description: "Collaborative project work developing integrity, teamwork abilities, and modern technology usage.",
//       icon: <Users className="h-6 w-6" />,
//       level: "All Levels",
//       duration: "Ongoing",
//     },
//     {
//       title: "Entrepreneurship",
//       description: "Innovation mindset development through Business Creation Lab experiences and startup support.",
//       icon: <Briefcase className="h-6 w-6" />,
//       level: "Advanced",
//       duration: "8 Months",
//     },
//   ]

//   const topRecruiters = [
//     { name: "IBM", sector: "Technology", packages: "₹6-12L", logo: "🏢", openings: "25+" },
//     { name: "Samsung", sector: "Electronics", packages: "₹5-10L", logo: "📱", openings: "20+" },
//     { name: "Infosys", sector: "IT Services", packages: "₹4-8L", logo: "💻", openings: "30+" },
//     { name: "TCS", sector: "Consulting", packages: "₹4-7L", logo: "🏛️", openings: "40+" },
//     { name: "Accenture", sector: "Consulting", packages: "₹5-9L", logo: "⚡", openings: "15+" },
//     { name: "Cognizant", sector: "Technology", packages: "₹4-8L", logo: "🔧", openings: "25+" },
//     { name: "Wipro", sector: "IT Services", packages: "₹4-7L", logo: "🌐", openings: "20+" },
//     { name: "HCL", sector: "Technology", packages: "₹5-9L", logo: "🚀", openings: "18+" },
//     { name: "Bosch", sector: "Manufacturing", packages: "₹6-11L", logo: "⚙️", openings: "12+" },
//     { name: "Honeywell", sector: "Industrial", packages: "₹5-10L", logo: "🏭", openings: "10+" },
//     { name: "L&T", sector: "Infrastructure", packages: "₹5-9L", logo: "🏗️", openings: "15+" },
//     { name: "Volvo", sector: "Automotive", packages: "₹6-12L", logo: "🚗", openings: "8+" },
//   ]

//   return (
//     <section
//       id="placements"
//       className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Star className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Career Success</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               100% Placement
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Assistance
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Our dedicated placement cell ensures every student gets industry-ready training and guaranteed placement
//             assistance with leading companies across various sectors.
//           </p>
//         </div>

//         {/* Placement Stats */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {placementStats.map((stat, index) => (
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

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex flex-wrap justify-center gap-2">
//               {[
//                 { id: "overview", name: "Overview", icon: <Target className="h-4 w-4" /> },
//                 { id: "industry-visits", name: "Industry Visits", icon: <Building2 className="h-4 w-4" /> },
//                 { id: "placement-drives", name: "Placement Drives", icon: <Users className="h-4 w-4" /> },
//                 { id: "recruiters", name: "Top Recruiters", icon: <Trophy className="h-4 w-4" /> },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {tab.icon}
//                   {tab.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "overview" && (
//           <div className="space-y-20">
//             {/* Placement Process */}
//             <div>
//               <div className="text-center mb-12">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Industry-Focused Placement Training</h3>
//                 <p className="text-gray-600 text-lg">Comprehensive training program designed for career success</p>
//               </div>
//               <div className="grid md:grid-cols-3 gap-8">
//                 {placementProcess.map((process, index) => (
//                   <div key={index} className="group">
//                     <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                       <div
//                         className={`w-20 h-20 bg-gradient-to-r ${process.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         {process.icon}
//                       </div>
//                       <div className="text-center mb-6">
//                         <h4 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h4>
//                         <p className="text-gray-600 leading-relaxed">{process.description}</p>
//                       </div>
//                       <div className="space-y-2">
//                         {process.features.map((feature, idx) => (
//                           <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                             <CheckCircle className="h-4 w-4 text-green-500" />
//                             {feature}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Skills Development */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//               <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//               <div className="relative z-10">
//                 <div className="text-center mb-12">
//                   <h3 className="text-3xl font-bold mb-4">Essential Skills Development Programs</h3>
//                   <p className="text-blue-100 text-lg">Comprehensive skill building for industry readiness</p>
//                 </div>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {skillsPrograms.map((skill, index) => (
//                     <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
//                       <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
//                         {skill.icon}
//                       </div>
//                       <div className="text-center">
//                         <h4 className="text-lg font-bold mb-3">{skill.title}</h4>
//                         <p className="text-blue-100 text-sm mb-4 leading-relaxed">{skill.description}</p>
//                         <div className="space-y-2">
//                           <div className="flex justify-between text-xs">
//                             <span className="text-blue-200">Level:</span>
//                             <span className="text-white font-medium">{skill.level}</span>
//                           </div>
//                           <div className="flex justify-between text-xs">
//                             <span className="text-blue-200">Duration:</span>
//                             <span className="text-white font-medium">{skill.duration}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
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
//                           <Building2 className="h-4 w-4 mr-2" />
//                           <span className="text-sm font-medium">Corporate Visit</span>
//                         </div>
//                         <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
//                           View Details
//                           <ArrowRight className="h-4 w-4" />
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
//             <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {topRecruiters.map((recruiter, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                     <div className="text-center">
//                       <div className="text-4xl mb-4">{recruiter.logo}</div>
//                       <h4 className="text-lg font-bold text-gray-900 mb-2">{recruiter.name}</h4>
//                       <p className="text-blue-600 text-sm font-medium mb-3">{recruiter.sector}</p>
//                       <div className="space-y-2">
//                         <div className="flex justify-between items-center text-sm">
//                           <span className="text-gray-500">Package:</span>
//                           <span className="text-green-600 font-semibold">{recruiter.packages}</span>
//                         </div>
//                         <div className="flex justify-between items-center text-sm">
//                           <span className="text-gray-500">Openings:</span>
//                           <span className="text-orange-600 font-semibold">{recruiter.openings}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
//                 <h4 className="text-xl font-bold text-gray-900 mb-4">Want to Partner with Us?</h4>
//                 <p className="text-gray-600 mb-6">Join our network of recruiting partners and access top talent</p>
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
//                   <ExternalLink className="h-5 w-5" />
//                   Partner with BIMSR
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { TrendingUp, Users, Award, Building, ChevronLeft, ChevronRight, Star, MapPin, Calendar } from "lucide-react"

export default function PlacementsEnhanced() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedYear, setSelectedYear] = useState("2024")
  const [activeTab, setActiveTab] = useState("overview")

  const placementStats = {
    "2024": {
      totalPlacements: 245,
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹18 LPA",
      placementRate: "100%",
      topRecruiters: 45,
    },
    "2023": {
      totalPlacements: 220,
      averagePackage: "₹5.8 LPA",
      highestPackage: "₹15 LPA",
      placementRate: "98%",
      topRecruiters: 42,
    },
    "2022": {
      totalPlacements: 195,
      averagePackage: "₹5.2 LPA",
      highestPackage: "₹12 LPA",
      placementRate: "96%",
      topRecruiters: 38,
    },
  }

  const topRecruiters = [
    { name: "TCS", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-8 LPA" },
    { name: "Infosys", logo: "/placeholder.svg?height=80&width=120", packages: "₹5-9 LPA" },
    { name: "Wipro", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-7 LPA" },
    { name: "Accenture", logo: "/placeholder.svg?height=80&width=120", packages: "₹6-12 LPA" },
    { name: "IBM", logo: "/placeholder.svg?height=80&width=120", packages: "₹7-15 LPA" },
    { name: "Amazon", logo: "/placeholder.svg?height=80&width=120", packages: "₹10-18 LPA" },
    { name: "Microsoft", logo: "/placeholder.svg?height=80&width=120", packages: "₹12-18 LPA" },
    { name: "Google", logo: "/placeholder.svg?height=80&width=120", packages: "₹15-25 LPA" },
    { name: "Deloitte", logo: "/placeholder.svg?height=80&width=120", packages: "₹8-14 LPA" },
    { name: "Cognizant", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-8 LPA" },
    { name: "HCL", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-7 LPA" },
    { name: "Tech Mahindra", logo: "/placeholder.svg?height=80&width=120", packages: "₹4-8 LPA" },
  ]

  const successStories = [
    {
      name: "Priya Sharma",
      program: "BCA + Full Stack Development",
      company: "Amazon",
      package: "₹18 LPA",
      image: "/images/testimonial-1.jpg",
      location: "Bangalore",
      year: "2024",
      story:
        "The comprehensive curriculum and industry exposure at BIMSR helped me land my dream job at Amazon. The faculty's guidance and practical projects were instrumental in my success.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      program: "BCA + Data Analytics",
      company: "Microsoft",
      package: "₹15 LPA",
      image: "/images/testimonial-2.jpg",
      location: "Hyderabad",
      year: "2024",
      story:
        "The data analytics program at BIMSR is world-class. The hands-on experience with real datasets and industry tools prepared me perfectly for my role at Microsoft.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      program: "BBA + Digital Marketing",
      company: "Google",
      package: "₹16 LPA",
      image: "/images/testimonial-3.jpg",
      location: "Mumbai",
      year: "2024",
      story:
        "BIMSR's digital marketing program is ahead of its time. The practical approach and industry connections helped me secure a position at Google right after graduation.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      program: "BCOM + ACCA",
      company: "Deloitte",
      package: "₹12 LPA",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      location: "Pune",
      year: "2024",
      story:
        "The ACCA integration with BCOM gave me a competitive edge. The faculty's expertise and career guidance helped me achieve my goal of working with a Big 4 firm.",
      rating: 5,
    },
  ]

  const placementProcess = [
    {
      step: 1,
      title: "Career Counseling",
      description: "Personalized career guidance and goal setting",
      icon: Users,
    },
    {
      step: 2,
      title: "Skill Development",
      description: "Technical and soft skills enhancement programs",
      icon: TrendingUp,
    },
    {
      step: 3,
      title: "Resume Building",
      description: "Professional resume and portfolio creation",
      icon: Award,
    },
    {
      step: 4,
      title: "Mock Interviews",
      description: "Practice sessions with industry experts",
      icon: Building,
    },
    {
      step: 5,
      title: "Company Visits",
      description: "Direct interaction with recruiters",
      icon: Building,
    },
    {
      step: 6,
      title: "Final Placement",
      description: "Successful job placement and onboarding",
      icon: Award,
    },
  ]

  const industryVisitImages = [
    {
      src: "/",
      title: "Industry Visit - Angel One",
      description:
        "Students during industry visit at Angel One, gaining real-world insights into financial technology and trading platforms.",
      location: "Bangalore Tech Park",
      date: "March 2024",
    },
    {
      src: "/IVindustrial(1).jpg",
      title: "Interactive Session",
      description: "Engaging with industry professionals and learning about current market trends and opportunities.",
      location: "Corporate Office",
      date: "February 2024",
    },
    {
      src: "/IVindustrial (2).jpg",
      title: "Team Building",
      description: "Students showcasing teamwork and enthusiasm during corporate interaction sessions.",
      location: "Industry Campus",
      date: "January 2024",
    },
    {
      src: "/IVindustrial (4).jpg",
      title: "Professional Development",
      description: "Building professional networks and understanding industry expectations and requirements.",
      location: "Business Center",
      date: "December 2023",
    },
  ]

  const placementDriveImages = [
    {
      src: "/Placement (5).jpg",
      title: "Placement Drive Session",
      description: "Students attending placement orientation and preparation sessions in our modern auditorium.",
      company: "Multiple Companies",
      positions: "50+ Openings",
    },
    {
      src: "/Placement (1).jpg",
      title: "Career Guidance",
      description: "Comprehensive career counseling and interview preparation sessions for final year students.",
      company: "Career Development",
      positions: "All Students",
    },
    {
      src: "/Placement (5).jpg",
      title: "Achievement Ceremony",
      description: "Celebrating successful placements with certificate distribution and recognition ceremony.",
      company: "Success Stories",
      positions: "Top Performers",
    },
    {
      src: "/Placement (3).jpg",
      title: "Interview Process",
      description: "One-on-one interview sessions with industry recruiters and HR professionals.",
      company: "Live Interviews",
      positions: "Direct Selection",
    },
    {
      src: "/Placement (4).jpg",
      title: "Success Stories",
      description: "Students receiving placement offers and celebrating their career achievements.",
      company: "Dream Companies",
      positions: "Final Selection",
    },
    {
      src: "/Placement (2).jpg",
      title: "Final Selection",
      description: "Final placement ceremony with successful candidates and faculty members.",
      company: "Completion",
      positions: "Career Launch",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % successStories.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  const currentStats = placementStats[selectedYear as keyof typeof placementStats]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            100% Placement Record
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Our commitment to your success goes beyond education. We ensure every student gets placed in top companies
            with competitive packages.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400">{currentStats.totalPlacements}+</div>
              <div className="text-green-200">Students Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400">{currentStats.averagePackage}</div>
              <div className="text-green-200">Average Package</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400">{currentStats.highestPackage}</div>
              <div className="text-green-200">Highest Package</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-pink-400">{currentStats.placementRate}</div>
              <div className="text-green-200">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Year Selection */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Placement Statistics</h2>
          <div className="flex justify-center space-x-4">
            {Object.keys(placementStats).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Placement Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.totalPlacements}+</div>
            <div className="text-gray-600">Students Placed</div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.averagePackage}</div>
            <div className="text-gray-600">Average Package</div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.highestPackage}</div>
            <div className="text-gray-600">Highest Package</div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.topRecruiters}+</div>
            <div className="text-gray-600">Top Recruiters</div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{currentStats.placementRate}</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
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
            {/* Success Stories Carousel */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left">
                      <img
                        src={successStories[currentTestimonial].image || "/placeholder.svg"}
                        alt={successStories[currentTestimonial].name}
                        className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0 shadow-xl"
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {successStories[currentTestimonial].name}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold mb-1">
                          {successStories[currentTestimonial].program}
                        </p>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {successStories[currentTestimonial].company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {successStories[currentTestimonial].location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {successStories[currentTestimonial].year}
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-6 rounded-xl">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          {successStories[currentTestimonial].package}
                        </div>
                        <div className="text-gray-600">Annual Package</div>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < successStories[currentTestimonial].rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                        "{successStories[currentTestimonial].story}"
                      </blockquote>
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 pb-6">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Placement Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Placement Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {placementProcess.map((process, index) => {
                  const Icon = process.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">Step {process.step}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  )
                })}
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
                          <Building className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">Corporate Visit</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                          View Details
                          <ChevronRight className="h-4 w-4" />
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
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Top Recruiting Partners</h3>
              <p className="text-gray-600 text-lg">Leading companies that regularly hire our graduates</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {topRecruiters.map((recruiter, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="text-center">
                      <div className="w-20 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                        <span className="text-2xl font-bold text-gray-700">{recruiter.name}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{recruiter.name}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Package:</span>
                          <span className="text-green-600 font-semibold">{recruiter.packages}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 inline-block">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Want to Partner with Us?</h4>
                <p className="text-gray-600 mb-6">Join our network of recruiting partners and access top talent</p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                  Partner with BIMSR
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have built amazing careers with our placement support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
