
// "use client"

// import { useState } from "react"
// import {
//   Database,
//   BarChart3,
//   Award,
//   Users,
//   BookOpen,
//   Star,
//   ArrowRight,
//   Play,
//   TrendingUp,
//   Zap,
//   Target,
// } from "lucide-react"

// export default function BCADataAnalyticsProgram() {
//   const [activeTab, setActiveTab] = useState("overview")

//   const programDuration = [
//     {
//       title: "BCA (Undergraduate Degree)",
//       description: "3-year degree course at BIMSR affiliated with Bengaluru North University",
//       duration: "3 Years",
//       color: "from-blue-600 to-cyan-600",
//       icon: <BookOpen className="h-8 w-8" />,
//     },
//     {
//       title: "Data Analyst Professional Certification",
//       description:
//         "Professional certification for career development delivered by real practitioners from the industry to prepare students to solve real-world problems",
//       duration: "Integrated",
//       color: "from-purple-600 to-pink-600",
//       icon: <BarChart3 className="h-8 w-8" />,
//     },
//     {
//       title: "PGCCA (Postgraduate Certificate)",
//       description:
//         "If students qualify, BIMSR offers a 100% fully funded scholarship for the students to pursue a 1-year post-graduation program",
//       duration: "4th Year",
//       color: "from-green-600 to-emerald-600",
//       icon: <Award className="h-8 w-8" />,
//     },
//   ]

//   const industrySkills = [
//     {
//       category: "Python for Data Analysis",
//       description: "Master Python programming for data manipulation and analysis",
//       tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
//       icon: <Database className="h-8 w-8" />,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       category: "SQL & Database Management",
//       description: "Learn database querying and management techniques",
//       tools: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
//       icon: <Database className="h-8 w-8" />,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       category: "Data Visualization",
//       description: "Create compelling visualizations and dashboards",
//       tools: ["Power BI", "Tableau", "Excel", "Google Sheets"],
//       icon: <BarChart3 className="h-8 w-8" />,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       category: "Business Intelligence Tools",
//       description: "Advanced analytics and reporting automation",
//       tools: ["Statistics", "Probability", "Data Cleaning", "Dashboarding"],
//       icon: <TrendingUp className="h-8 w-8" />,
//       gradient: "from-red-500 to-rose-500",
//     },
//   ]

//   const careerOpportunities = [
//     {
//       title: "Data Analyst",
//       package: "₹3.5-9 LPA",
//       description:
//         "Interpret complex data sets to identify trends, create reports, and help businesses make data-backed decisions",
//       skills: ["Python", "SQL", "Excel", "Statistics"],
//       companies: ["IBM", "Samsung", "Infosys", "TCS"],
//     },
//     {
//       title: "Business Analyst",
//       package: "₹4-8 LPA",
//       description:
//         "Bridge the gap between IT and business by analyzing processes, interpreting data, and proposing data-driven strategies",
//       skills: ["Business Intelligence", "Data Analysis", "Process Mapping", "Requirements Gathering"],
//       companies: ["Accenture", "Cognizant", "HCL", "Capgemini"],
//     },
//     {
//       title: "Data Visualization Specialist",
//       package: "₹5-10 LPA",
//       description:
//         "Present data through dashboards and visuals using tools like Power BI and Tableau to support executive decisions",
//       skills: ["Power BI", "Tableau", "Dashboard Design", "Data Storytelling"],
//       companies: ["Microsoft", "Google", "Amazon", "Flipkart"],
//     },
//     {
//       title: "Junior Data Scientist",
//       package: "₹6-12 LPA",
//       description: "Assist in building machine learning models, running statistical analyses, and preparing datasets",
//       skills: ["Machine Learning", "Python", "Statistics", "Data Mining"],
//       companies: ["Netflix", "Uber", "Swiggy", "Paytm"],
//     },
//   ]

//   const studentJourney = [
//     {
//       phase: "Academic & Project-Based Learning",
//       description:
//         "Semester-wise academic modules aligned with industry standards. Hands-on labs, coding bootcamps, and domain-specific workshops. Real-world projects and mini internships every year to apply classroom knowledge",
//       icon: <BookOpen className="h-8 w-8" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       phase: "Skill Building & Industry Exposure",
//       description:
//         "Technical skill development through live coding, hackathons, and project showcases. Regular masterclasses by industry professionals and alumni. Industrial visits and participation in tech summits and developer meets",
//       icon: <TrendingUp className="h-8 w-8" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       phase: "Career Development & Placement Prep",
//       description:
//         "Soft skills training including group discussions, presentations, and interviews. Resume building, LinkedIn profile curation, and GitHub portfolio guidance. On-campus mock interviews and company-specific training sessions",
//       icon: <Users className="h-8 w-8" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       phase: "Graduation & Career Launch",
//       description:
//         "Final semester capstone project with industry mentors. Assistance with job applications, off-campus drives, and startup opportunities. Placement with top IT firms, product companies, or support for higher studies and entrepreneurship",
//       icon: <Award className="h-8 w-8" />,
//       color: "from-red-500 to-rose-500",
//     },
//   ]

//   const placementStats = [
//     { label: "Placement Rate", value: "92%", description: "of students placed in top companies in 2024" },
//     { label: "Highest Package", value: "9 LPA", description: "Premium offers from leading companies" },
//     { label: "Average Package", value: "7 LPA", description: "Strong industry alignment" },
//     { label: "Lowest Package", value: "3.5 LPA", description: "Entry-level positions" },
//   ]

//   const hiringPartners = [
//     {
//       category: "Technology Giants",
//       description:
//         "Leading tech companies like IBM, Samsung, and Infosys actively recruit our graduates for cutting-edge roles",
//       companies: ["IBM", "Samsung", "Infosys", "TCS"],
//     },
//     {
//       category: "Manufacturing Leaders",
//       description:
//         "Industrial powerhouses including Bosch, Honeywell, and Royal Enfield offer diverse engineering opportunities",
//       companies: ["Bosch", "Honeywell", "Royal Enfield", "L&T"],
//     },
//     {
//       category: "Consulting Firms",
//       description:
//         "Global consulting leaders like Accenture, Cognizant, and HCL provide strategic career pathways for graduates",
//       companies: ["Accenture", "Cognizant", "HCL", "Wipro"],
//     },
//     {
//       category: "Infrastructure Giants",
//       description:
//         "Major corporations like Volvo, Jindal Steel, and Sobha Developers create opportunities across multiple sectors",
//       companies: ["Volvo", "Jindal Steel", "Sobha", "Mahindra"],
//     },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Star className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Data Analytics Specialization</span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               BCA + Data Analytics
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">+ PGCCA</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
//             BIMSR's program supports students to secure Data Analyst roles and pursue funded advanced degrees. This
//             integrated program combines a Bachelor of Computer Applications (BCA) degree with specialized Data Analytics
//             training and an optional Post Graduate Certificate in Computer Applications (PGCCA).
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
//               Apply Now
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>
//             <button className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center">
//               <Play className="mr-2 h-5 w-5" />
//               Watch Demo
//             </button>
//           </div>
//         </div>

//         {/* Course Placement Stats */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Course Placement Stats</h3>
//           <div className="grid md:grid-cols-4 gap-8">
//             {placementStats.map((stat, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
//                 <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
//                 <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
//                 <div className="text-sm text-gray-600">{stat.description}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Fee Structure */}
//         <div className="mb-24">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-6">Fee Structure</h2>
//                 <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//                   BCA + Data Analytics + PGCBA - Our comprehensive 4-year program offers transparent pricing with
//                   flexible payment options
//                 </p>
//               </div>
//               <div className="grid md:grid-cols-4 gap-8">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹25,000</div>
//                   <div className="text-blue-100 font-medium mb-1">Admission Fee</div>
//                   <div className="text-sm text-blue-200">One-time payment due at enrollment</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹2,00,000</div>
//                   <div className="text-blue-100 font-medium mb-1">First Year</div>
//                   <div className="text-sm text-blue-200">BCA program fees covering fundamental coursework</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹85,000</div>
//                   <div className="text-blue-100 font-medium mb-1">2nd & 3rd Year</div>
//                   <div className="text-sm text-blue-200">Each year specialization modules</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
//                   <div className="text-blue-100 font-medium mb-1">4th Year Scholarship</div>
//                   <div className="text-sm text-blue-200">PGCCA fully sponsored</div>
//                 </div>
//               </div>
//               <div className="text-center mt-8">
//                 <div className="text-5xl font-bold mb-2">₹3,95,000</div>
//                 <div className="text-blue-100 text-xl">Total 4-Year Program Investment</div>
//                 <div className="text-sm text-blue-200 mt-4 space-y-1">
//                   <div>• Semester-wise installments available</div>
//                   <div>• Education loan assistance provided</div>
//                   <div>• Merit-based scholarships for qualifying students</div>
//                   <div>• No cost EMI's are provided</div>
//                   <div>• Professional certification is included in the course fee</div>
//                   <div>• All fees are inclusive of Tools and certifications offered</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex space-x-2">
//               {[
//                 { id: "overview", name: "Program Duration" },
//                 { id: "journey", name: "Student Journey" },
//                 { id: "skills", name: "Industry Skills" },
//                 { id: "careers", name: "Career Paths" },
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
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Duration</h3>
//             <div className="space-y-8">
//               {programDuration.map((program, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16"></div>

//                     <div className="relative z-10">
//                       <div className="flex items-start space-x-6">
//                         <div
//                           className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                         >
//                           {program.icon}
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center space-x-4 mb-4">
//                             <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
//                             <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
//                               {program.duration}
//                             </span>
//                           </div>
//                           <p className="text-gray-600 leading-relaxed">{program.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "journey" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Student Journey</h3>
//             <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
//               By the end of the journey, students are job-ready, with placement assistance and a skill set aligned with
//               current industry demands, opening doors to careers in top IT companies and startups.
//             </p>
//             <div className="grid md:grid-cols-2 gap-8">
//               {studentJourney.map((phase, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
//                     <div className="flex items-start space-x-6">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         {phase.icon}
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="text-xl font-bold text-gray-900 mb-4">{phase.phase}</h4>
//                         <p className="text-gray-600 leading-relaxed">{phase.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "skills" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Skills Acquired</h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               {industrySkills.map((category, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

//                     <div className="relative z-10">
//                       <div
//                         className={`w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         {category.icon}
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
//                       <p className="text-gray-600 mb-6">{category.description}</p>
//                       <div className="space-y-3">
//                         {category.tools.map((tool, idx) => (
//                           <div
//                             key={idx}
//                             className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
//                           >
//                             {tool}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "careers" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Opportunities</h3>
//             <p className="text-lg text-gray-600 text-center mb-12">
//               This specialized program equips students with technical and analytical skills to thrive in data-driven
//               roles:
//             </p>
//             <div className="grid md:grid-cols-2 gap-8">
//               {careerOpportunities.map((career, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

//                     <div className="relative z-10">
//                       <div className="text-center mb-6">
//                         <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                           <BarChart3 className="h-10 w-10" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-900 mb-2">{career.title}</h3>
//                         <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
//                           {career.package}
//                         </div>
//                       </div>

//                       <p className="text-gray-600 mb-6 leading-relaxed">{career.description}</p>

//                       <div className="space-y-4">
//                         <div>
//                           <h4 className="font-semibold text-gray-900 mb-3">Key Skills</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {career.skills.map((skill, idx) => (
//                               <span
//                                 key={idx}
//                                 className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>

//                         <div>
//                           <h4 className="font-semibold text-gray-900 mb-3">Top Hiring Companies</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {career.companies.map((company, idx) => (
//                               <span
//                                 key={idx}
//                                 className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
//                               >
//                                 {company}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Our Hiring Partners */}
//         <div className="mt-24 mb-20">
//           <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Hiring Partners</h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             {hiringPartners.map((partner, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//                 <h4 className="text-xl font-bold text-gray-900 mb-4">{partner.category}</h4>
//                 <p className="text-gray-600 mb-6">{partner.description}</p>
//                 <div className="flex flex-wrap gap-3">
//                   {partner.companies.map((company, idx) => (
//                     <span
//                       key={idx}
//                       className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
//                     >
//                       {company}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Sports Excellence Programme */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold mb-8 text-center">Sports Excellence Programme</h3>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Zap className="h-8 w-8" />
//                   </div>
//                   <h4 className="font-semibold mb-2">FIFA-Level Football Training</h4>
//                   <p className="text-green-100 text-sm">
//                     Students in our sports quota receive elite training from globally qualified coaches
//                   </p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Award className="h-8 w-8" />
//                   </div>
//                   <h4 className="font-semibold mb-2">Complete Support Package</h4>
//                   <p className="text-green-100 text-sm">
//                     BIMSR provides playing kits, travel expenses, and accommodation for tournaments
//                   </p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Target className="h-8 w-8" />
//                   </div>
//                   <h4 className="font-semibold mb-2">International Exposure</h4>
//                   <p className="text-green-100 text-sm">
//                     Get to play in championships and national tournaments fully supported by BIMSR
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <h2 className="text-4xl font-bold mb-6">Contact Us Today</h2>
//               <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//                 Take the first step toward your educational transformation. Our admissions team is ready to guide you
//                 through the enrollment process.
//               </p>
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Users className="h-8 w-8 text-blue-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Call Our Admissions Office</div>
//                   <div className="text-sm text-gray-400">7676401932</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Database className="h-8 w-8 text-purple-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Email Inquiries</div>
//                   <div className="text-sm text-gray-400">admissions@bangaloreinstitutions.com</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <BookOpen className="h-8 w-8 text-green-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Visit Our Campus</div>
//                   <div className="text-sm text-gray-400">Schedule a tour</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <TrendingUp className="h-8 w-8 text-red-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Apply Online</div>
//                   <div className="text-sm text-gray-400">Complete your application</div>
//                 </div>
//               </div>
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 Apply for BCA Data Analytics Program
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
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, BarChart3 } from "lucide-react"

export default function BCADataAnalyticsProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  const programHighlights = [
    "120-150 hours specialized training",
    "Python & SQL certification included",
    "Predictive modeling and machine learning",
    "92% placement rate with 7 LPA average",
    "Data visualization tools mastery",
    "Industry datasets and real-world projects",
    "Tableau and Power BI certifications",
    "Statistical analysis and business intelligence",
  ]

  const careerOpportunities = [
    { role: "Data Analyst", package: "₹3.5-9 LPA", companies: ["IBM", "Microsoft", "Amazon"] },
    { role: "Business Analyst", package: "₹4-8 LPA", companies: ["Deloitte", "Accenture", "TCS"] },
    { role: "Data Visualization Specialist", package: "₹5-10 LPA", companies: ["Tableau", "Qlik", "SAS"] },
    { role: "Junior Data Scientist", package: "₹6-12 LPA", companies: ["Google", "Facebook", "Netflix"] },
    { role: "Market Research Analyst", package: "₹4-7 LPA", companies: ["Nielsen", "Kantar", "IPSOS"] },
    { role: "Database Administrator", package: "₹5-9 LPA", companies: ["Oracle", "MongoDB", "MySQL"] },
  ]

  const feeStructure = {
    admissionFee: "₹25,000",
    firstYear: "₹2,00,000",
    secondYear: "₹85,000",
    thirdYear: "₹85,000",
    fourthYear: "100% Scholarship",
    totalFee: "₹3,95,000",
  }

  const placementStats = {
    placementRate: "92%",
    averagePackage: "₹7 LPA",
    highestPackage: "₹9 LPA",
    minimumPackage: "₹3.5 LPA",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
                <BarChart3 className="h-5 w-5 text-purple-400" />
                High Growth Field
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                BCA + Data Analytics
                <span className="block text-3xl lg:text-4xl text-purple-300 font-normal mt-2">+ PGCCA</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Master data science with Python, SQL, and machine learning. Transform raw data into actionable insights
                with our comprehensive analytics program.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
                  <div className="text-purple-200 text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{placementStats.averagePackage}</div>
                  <div className="text-purple-200 text-sm">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">{placementStats.highestPackage}</div>
                  <div className="text-purple-200 text-sm">Highest Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">4 Years</div>
                  <div className="text-purple-200 text-sm">Duration</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admission"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Apply for Course
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Schedule Campus Visit
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Data Analytics"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "overview", name: "Overview" },
                { id: "curriculum", name: "Curriculum" },
                { id: "placements", name: "Placements" },
                { id: "tools", name: "Tools & Tech" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
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
            {/* Program Highlights */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Highlights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {programHighlights.slice(0, 4).map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md h-20">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {programHighlights.slice(4).map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md h-20">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
                <p className="text-purple-100 text-lg">Transparent fee structure with flexible payment options</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
                  <div className="text-purple-100">Total Program Fee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
                  <div className="text-purple-100">4th Year Scholarship</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-purple-100">Interest EMI</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
                    <div className="text-purple-100 text-sm">Admission Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.firstYear}</div>
                    <div className="text-purple-100 text-sm">First Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.secondYear}</div>
                    <div className="text-purple-100 text-sm">Second Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
                    <div className="text-purple-100 text-sm">Third Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">{feeStructure.fourthYear}</div>
                    <div className="text-purple-100 text-sm">Fourth Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "placements" && (
          <div className="space-y-16">
            {/* Career Opportunities */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-32">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-gray-900">{career.role}</h4>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {career.package}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Become a Data Analyst?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our comprehensive data analytics program and launch your career in the fastest-growing field with
              guaranteed placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admission"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <span className="mr-2">Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center justify-center"
              >
                Schedule Campus Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
