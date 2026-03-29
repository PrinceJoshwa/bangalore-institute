// "use client"

// import { useState } from "react"
// import {
//   Code,
//   Database,
//   Globe,
//   Smartphone,
//   Award,
//   Users,
//   BookOpen,
//   Briefcase,
//   TrendingUp,
//   Star,
//   ArrowRight,
//   Play,
//   Target,
//   Zap,
// } from "lucide-react"

// export default function BCAFullStackProgram() {
//   const [activeTab, setActiveTab] = useState("overview")

//   const programHighlights = [
//     {
//       title: "Scholarship Opportunity",
//       description: "100% scholarship for PGCCA (4th year) with 70% aggregate in BCA",
//       icon: <Award className="h-8 w-8" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Comprehensive Fee",
//       description: "₹3,95,000 for entire 4-year program",
//       icon: <Target className="h-8 w-8" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Industry Certifications",
//       description: "Full Stack Developer certification included in fee",
//       icon: <Code className="h-8 w-8" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Placement Support",
//       description: "Dedicated career services and industry connections",
//       icon: <Briefcase className="h-8 w-8" />,
//       color: "from-red-500 to-rose-500",
//     },
//   ]

//   const programDuration = [
//     {
//       title: "BCA (Undergraduate Degree)",
//       description: "3-year degree course at BIMSR affiliated with Bengaluru North University",
//       duration: "3 Years",
//       color: "from-blue-600 to-cyan-600",
//       icon: <BookOpen className="h-8 w-8" />,
//     },
//     {
//       title: "Full Stack Certification",
//       description: "Professional certification course in full stack development",
//       duration: "Integrated",
//       color: "from-purple-600 to-pink-600",
//       icon: <Code className="h-8 w-8" />,
//     },
//     {
//       title: "PGCCA (Postgraduate Certificate)",
//       description: "Postgraduate Certificate in Computer Applications",
//       duration: "1 Year",
//       color: "from-green-600 to-emerald-600",
//       icon: <Award className="h-8 w-8" />,
//     },
//   ]

//   const courseOverview = [
//     {
//       title: "BCA Foundation",
//       description: "Core computer science principles",
//       icon: <Database className="h-8 w-8" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Full Stack Development",
//       description: "Hands-on experience with modern technologies",
//       icon: <Code className="h-8 w-8" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "PGCCA Advanced Topics",
//       description: "Cloud, cybersecurity, DevOps",
//       icon: <Globe className="h-8 w-8" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Career Success",
//       description: "Ready for tech industry leadership roles",
//       icon: <TrendingUp className="h-8 w-8" />,
//       color: "from-red-500 to-rose-500",
//     },
//   ]

//   const industrySkills = [
//     {
//       category: "Frontend",
//       skills: ["HTML5, CSS3, JavaScript", "React, Angular", "UI/UX Design Principles"],
//       icon: <Globe className="h-8 w-8" />,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       category: "Backend",
//       skills: ["Node.js, Express.js", "Java, Python", "API development"],
//       icon: <Database className="h-8 w-8" />,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       category: "Databases",
//       skills: ["MongoDB, SQL", "Database Management"],
//       icon: <Database className="h-8 w-8" />,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       category: "DevOps & Cloud",
//       skills: ["Git, GitHub, Docker", "Jenkins, AWS, Azure"],
//       icon: <Smartphone className="h-8 w-8" />,
//       gradient: "from-red-500 to-rose-500",
//     },
//   ]

//   const studentProjects = [
//     {
//       category: "Web Development",
//       projects: ["Interactive Portfolio Website", "Dynamic To-Do List App", "Basic Blog Platform (CRUD)"],
//     },
//     {
//       category: "Backend & API",
//       projects: ["E-commerce Product Management API", "User Authentication System"],
//     },
//     {
//       category: "DevOps & Cloud",
//       projects: ["Containerized Full-Stack App Deployment", "Cloud CI/CD Pipeline for Web App"],
//     },
//     {
//       category: "AI Integration",
//       projects: ["AI-Powered Text Summarizer", "Image Classification Web App", "Smart Chatbot Interface"],
//     },
//   ]

//   const careerOpportunities = [
//     {
//       title: "Full Stack Developer",
//       package: "₹6-12 LPA",
//       description: "Build complete web applications with expertise in frameworks, databases, and APIs",
//       skills: ["React", "Node.js", "MongoDB", "AWS"],
//       companies: ["TCS", "Infosys", "Wipro", "IBM"],
//     },
//     {
//       title: "Software Engineer",
//       package: "₹7-14 LPA",
//       description: "Design and develop custom software solutions using modern programming languages",
//       skills: ["Python", "Java", "MySQL", "Docker"],
//       companies: ["IBM", "Samsung", "Bosch", "Microsoft"],
//     },
//     {
//       title: "DevOps Engineer",
//       package: "₹8-15 LPA",
//       description: "Manage development pipelines, CI/CD, and system monitoring",
//       skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
//       companies: ["Amazon", "Microsoft", "Google", "Netflix"],
//     },
//     {
//       title: "Cloud Application Developer",
//       package: "₹9-16 LPA",
//       description: "Build scalable applications on AWS, Azure, or Google Cloud",
//       skills: ["Cloud Platforms", "Microservices", "Containers", "APIs"],
//       companies: ["Amazon", "Microsoft", "Google", "Salesforce"],
//     },
//   ]

//   const studentJourney = [
//     {
//       phase: "Academic & Project-Based Learning",
//       description:
//         "Industry-aligned academic modules in smart classrooms with hands-on labs and workshops. Real-world projects and mini internships apply classroom knowledge.",
//       icon: <BookOpen className="h-8 w-8" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       phase: "Skill Building & Industry Exposure",
//       description:
//         "Technical skill development through live coding, hackathons, and project showcases. Regular masterclasses by industry professionals and alumni. Industrial visits and participation in tech summits and developer meets.",
//       icon: <TrendingUp className="h-8 w-8" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       phase: "Career Development & Placement Prep",
//       description:
//         "Soft skills training including group discussions, presentations, and interviews. Resume building, LinkedIn profile curation, and GitHub portfolio guidance. On-campus mock interviews and company-specific training sessions.",
//       icon: <Users className="h-8 w-8" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       phase: "Graduation & Career Launch",
//       description:
//         "Final semester capstone project with industry mentors. Assistance with job applications, off-campus drives, and startup opportunities. Placement with top IT firms, product companies, or support for higher studies and entrepreneurship.",
//       icon: <Award className="h-8 w-8" />,
//       color: "from-red-500 to-rose-500",
//     },
//   ]

//   const essentialTools = [
//     { category: "Frontend", tools: ["React.js", "Tailwind", "Bootstrap"] },
//     { category: "Backend", tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"] },
//     { category: "DevOps", tools: ["Docker", "Kubernetes", "AWS", "GCP", "GitHub Actions"] },
//     { category: "AI Tools", tools: ["TensorFlow.js", "OpenAI API"] },
//   ]

//   const certifications = [
//     { name: "Web Development Foundations", semester: "Semester 1" },
//     { name: "Frontend Development", semester: "Semester 2" },
//     { name: "Backend Development", semester: "Semester 3" },
//     { name: "System Design & DevOps", semester: "Semester 4" },
//     { name: "AI Full Stack Development", semester: "Semester 5" },
//   ]

//   const placementStats = [
//     { label: "Average Package", value: "7 LPA", description: "Strong industry alignment" },
//     { label: "Placement Rate", value: "95%", description: "Students placed in top companies" },
//     { label: "Highest Package", value: "16 LPA", description: "Premium offers from leading companies" },
//     { label: "Minimum Package", value: "4 LPA", description: "Entry-level positions" },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Star className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Full Stack Development</span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               BCA + Full Stack
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Development + PGCCA
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
//             BCA at BIMSR helps students to explore software engineering careers. A comprehensive 4-year program
//             combining undergraduate degree, professional certification, and postgraduate certificate in computer
//             applications.
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

//         {/* Program Highlights */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Highlights</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {programHighlights.map((highlight, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                   >
//                     {highlight.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
//                   <p className="text-gray-600">{highlight.description}</p>
//                 </div>
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
//                   Our comprehensive 4-year program offers transparent pricing with flexible payment options
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
//                   <div className="text-sm text-blue-200">PGCCA fully funded</div>
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
//                 { id: "overview", name: "Course Overview" },
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
//           <div className="space-y-16">
//             {/* Course Overview */}
//             <div>
//               <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Course Overview</h3>
//               <p className="text-lg text-gray-600 text-center mb-12">
//                 This integrated program provides both academic credentials and industry-ready skills. Students graduate
//                 prepared for tech careers, entrepreneurship, or further studies.
//               </p>
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {courseOverview.map((item, index) => (
//                   <div key={index} className="text-center">
//                     <div
//                       className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}
//                     >
//                       {item.icon}
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
//                     <p className="text-gray-600">{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Program Duration */}
//             <div>
//               <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Duration</h3>
//               <div className="space-y-8">
//                 {programDuration.map((program, index) => (
//                   <div key={index} className="group">
//                     <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16"></div>

//                       <div className="relative z-10">
//                         <div className="flex items-start space-x-6">
//                           <div
//                             className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                           >
//                             {program.icon}
//                           </div>
//                           <div className="flex-1">
//                             <div className="flex items-center space-x-4 mb-4">
//                               <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
//                               <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
//                                 {program.duration}
//                               </span>
//                             </div>
//                             <p className="text-gray-600 leading-relaxed">{program.description}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "journey" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Student Journey</h3>
//             <div className="grid md:grid-cols-2 gap-8 mb-16">
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

//             {/* Student Projects */}
//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//               <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Student Projects</h4>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {studentProjects.map((category, index) => (
//                   <div key={index}>
//                     <h5 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h5>
//                     <div className="space-y-3">
//                       {category.projects.map((project, idx) => (
//                         <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
//                           <Code className="h-5 w-5 text-blue-600" />
//                           <span className="text-gray-700 font-medium">{project}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "skills" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Skills Acquired</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//               {industrySkills.map((category, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {category.icon}
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h4>
//                     <div className="space-y-3">
//                       {category.skills.map((skill, idx) => (
//                         <div key={idx} className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm">
//                           {skill}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Essential Tools & Technologies */}
//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16">
//               <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Essential Tools & Technologies</h4>
//               <div className="grid md:grid-cols-4 gap-8">
//                 {essentialTools.map((toolCategory, index) => (
//                   <div key={index} className="text-center">
//                     <h5 className="font-semibold text-gray-900 mb-4">{toolCategory.category}</h5>
//                     <div className="space-y-2">
//                       {toolCategory.tools.map((tool, idx) => (
//                         <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">
//                           {tool}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Certifications Offered */}
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
//               <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications Offered</h4>
//               <div className="grid md:grid-cols-5 gap-6">
//                 {certifications.map((cert, index) => (
//                   <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
//                     <div className="text-sm text-blue-600 font-semibold mb-2">{cert.semester}</div>
//                     <div className="font-medium text-gray-900">{cert.name}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "careers" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Opportunities</h3>

//             {/* Placement Stats */}
//             <div className="grid md:grid-cols-4 gap-8 mb-16">
//               {placementStats.map((stat, index) => (
//                 <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100">
//                   <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
//                   <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
//                   <div className="text-sm text-gray-600">{stat.description}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {careerOpportunities.map((career, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

//                     <div className="relative z-10">
//                       <div className="text-center mb-6">
//                         <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                           <Code className="h-10 w-10" />
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

//         {/* Sports Excellence Programme */}
//         <div className="mt-24 mb-20">
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
//                 Apply for BCA Full Stack Program
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
import { ArrowRight, CheckCircle, Award, Code, Laptop, BookOpen } from "lucide-react"

export default function BCAFullStackProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  const programHighlights = [
    "Brand-new i3 laptops included in program fee",
    "100% scholarship for 4th year with 70% aggregate",
    "Full Stack Developer certification included",
    "95% placement rate with 7 LPA average package",
    "Industry skills in React, Node.js, MongoDB, AWS",
    "Live project experience with industry mentors",
    "Google Cloud Platform and AWS certifications",
    "DevOps and CI/CD pipeline training",
  ]

  const curriculum = [
    {
      semester: "Semester 1-2",
      subjects: [
        "Programming Fundamentals (C, C++)",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Web Technologies (HTML, CSS, JavaScript)",
        "Mathematics for Computing",
      ],
    },
    {
      semester: "Semester 3-4",
      subjects: [
        "Object-Oriented Programming (Java)",
        "Frontend Development (React.js)",
        "Backend Development (Node.js, Express)",
        "Database Design (MongoDB, MySQL)",
        "Software Engineering",
        "Operating Systems",
      ],
    },
    {
      semester: "Semester 5-6",
      subjects: [
        "Full Stack Development Projects",
        "Cloud Computing (AWS, Azure)",
        "DevOps & CI/CD",
        "Mobile App Development",
        "API Development & Integration",
        "Industry Internship",
      ],
    },
    {
      semester: "PGCCA Year",
      subjects: [
        "Advanced Full Stack Frameworks",
        "Microservices Architecture",
        "Machine Learning Integration",
        "Blockchain Development",
        "Capstone Project",
        "Industry Certification Programs",
      ],
    },
  ]

  const careerOpportunities = [
    { role: "Full Stack Developer", package: "₹6-12 LPA", companies: ["TCS", "Infosys", "Wipro"] },
    { role: "Software Engineer", package: "₹7-14 LPA", companies: ["IBM", "Accenture", "HCL"] },
    { role: "DevOps Engineer", package: "₹8-15 LPA", companies: ["Amazon", "Microsoft", "Google"] },
    { role: "Cloud Application Developer", package: "₹9-16 LPA", companies: ["AWS", "Azure", "GCP"] },
    { role: "Frontend Developer", package: "₹5-10 LPA", companies: ["Flipkart", "Myntra", "Zomato"] },
    { role: "Backend Developer", package: "₹6-12 LPA", companies: ["PayTM", "PhonePe", "Razorpay"] },
  ]

  const feeStructure = {
    admissionFee: "₹25,000",
    firstYear: "₹1,40,000",
    secondYear: "₹85,000",
    thirdYear: "₹85,000",
    fourthYear: "100% Scholarship",
    totalFee: "₹3,10,000",
    emiOptions: "0% Interest EMI Available",
  }

  const placementStats = {
    placementRate: "95%",
    averagePackage: "₹7 LPA",
    highestPackage: "₹16 LPA",
    minimumPackage: "₹4 LPA",
    totalStudents: "180+",
  }

  const industryPartners = [
    { name: "TCS", logo: "🏢", openings: "25+" },
    { name: "Infosys", logo: "💻", openings: "20+" },
    { name: "Wipro", logo: "🌐", openings: "15+" },
    { name: "IBM", logo: "🔵", openings: "12+" },
    { name: "Accenture", logo: "⚡", openings: "18+" },
    { name: "HCL", logo: "🚀", openings: "22+" },
  ]

  const certifications = [
    { name: "AWS Certified Developer", provider: "Amazon Web Services", level: "Associate" },
    { name: "Google Cloud Professional", provider: "Google Cloud", level: "Professional" },
    { name: "Microsoft Azure Developer", provider: "Microsoft", level: "Associate" },
    { name: "React Developer Certification", provider: "Meta", level: "Professional" },
    { name: "Node.js Certification", provider: "OpenJS Foundation", level: "Professional" },
    { name: "MongoDB Developer", provider: "MongoDB University", level: "Associate" },
  ]

  const labFacilities = [
    {
      name: "Full Stack Development Lab",
      description: "Latest hardware with dual monitors, high-performance systems for development",
      equipment: "40 Systems with i7 processors, 16GB RAM, SSD storage",
    },
    {
      name: "Cloud Computing Lab",
      description: "Dedicated lab for AWS, Azure, and GCP hands-on training",
      equipment: "Cloud access terminals with unlimited practice credits",
    },
    {
      name: "Project Development Center",
      description: "Collaborative space for team projects and industry assignments",
      equipment: "Smart boards, video conferencing, project management tools",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
                <Code className="h-5 w-5 text-blue-400" />
                Most Popular Program
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                BCA + Full Stack Development
                <span className="block text-3xl lg:text-4xl text-blue-300 font-normal mt-2">+ PGCCA</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Master modern web development with React, Node.js, and cloud technologies. Get industry-ready with
                hands-on projects and guaranteed placement assistance.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
                  <div className="text-blue-200 text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{placementStats.averagePackage}</div>
                  <div className="text-blue-200 text-sm">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{placementStats.highestPackage}</div>
                  <div className="text-blue-200 text-sm">Highest Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">4 Years</div>
                  <div className="text-blue-200 text-sm">Duration</div>
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                alt="Full Stack Development"
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
                { id: "facilities", name: "Facilities" },
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
                <p className="text-blue-100 text-lg">Transparent fee structure with flexible payment options</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
                  <div className="text-blue-100">Total Program Fee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
                  <div className="text-blue-100">4th Year Scholarship</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-blue-100">Interest EMI</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
                    <div className="text-blue-100 text-sm">Admission Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.firstYear}</div>
                    <div className="text-blue-100 text-sm">First Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.secondYear}</div>
                    <div className="text-blue-100 text-sm">Second Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
                    <div className="text-blue-100 text-sm">Third Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">{feeStructure.fourthYear}</div>
                    <div className="text-blue-100 text-sm">Fourth Year</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Certifications Included</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-40">
                    <div className="text-center">
                      <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                      <p className="text-gray-600 text-sm mb-1">{cert.provider}</p>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {cert.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive Curriculum</h2>
            <div className="space-y-8">
              {curriculum.map((sem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-600 mb-6">{sem.semester}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sem.subjects.map((subject, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 h-16 flex items-center">
                        <BookOpen className="h-5 w-5 text-blue-600 mr-3 shrink-0" />
                        <span className="text-gray-700 font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "placements" && (
          <div className="space-y-16">
            {/* Placement Statistics */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Placement Excellence</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-40 flex flex-col justify-center">
                  <div className="text-3xl font-bold text-green-600">{placementStats.placementRate}</div>
                  <div className="text-gray-600">Placement Rate</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-40 flex flex-col justify-center">
                  <div className="text-3xl font-bold text-blue-600">{placementStats.averagePackage}</div>
                  <div className="text-gray-600">Average Package</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-40 flex flex-col justify-center">
                  <div className="text-3xl font-bold text-purple-600">{placementStats.highestPackage}</div>
                  <div className="text-gray-600">Highest Package</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-40 flex flex-col justify-center">
                  <div className="text-3xl font-bold text-orange-600">{placementStats.totalStudents}</div>
                  <div className="text-gray-600">Students Placed</div>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Career Opportunities</h3>
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
                        <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Partners */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Top Hiring Partners</h3>
              <div className="grid md:grid-cols-6 gap-6">
                {industryPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg text-center h-32 flex flex-col justify-center"
                  >
                    <div className="text-3xl mb-2">{partner.logo}</div>
                    <h4 className="font-bold text-gray-900 text-sm">{partner.name}</h4>
                    <p className="text-green-600 text-xs font-semibold">{partner.openings} openings</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "facilities" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">World-Class Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {labFacilities.map((lab, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-80">
                  <div className="text-center">
                    <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{lab.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{lab.description}</p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-blue-700 text-sm font-medium">{lab.equipment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Become a Full Stack Developer?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our comprehensive program and launch your career in full stack development with guaranteed placement
              assistance.
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
