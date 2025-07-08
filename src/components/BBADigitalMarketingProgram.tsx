
// "use client"

// import { useState } from "react"
// import {
//   CheckCircle,
//   Users,
//   Target,
//   TrendingUp,
//   Building2,
//   Briefcase,
//   Star,
//   Globe,
//   ArrowRight,
//   Play,
//   Award,
//   BookOpen,
//   DollarSign,
//   Zap,
// } from "lucide-react"

// export default function BBADigitalMarketingProgram() {
//   const [activeTab, setActiveTab] = useState("overview")

//   const programStructure = [
//     {
//       title: "BBA Foundation",
//       description: "Core business principles, management, finance & operations",
//       duration: "3 Years",
//       topics: ["Management Principles", "Business Ethics", "Organizational Behavior", "Financial Management"],
//       color: "from-blue-600 to-blue-800",
//       icon: <Building2 className="h-8 w-8" />,
//     },
//     {
//       title: "Digital Marketing Specialization",
//       description:
//         "Get trained by professional practitioners throughout 6 semesters. Practical skills in SEO, SEM, social media & content marketing",
//       duration: "Integrated",
//       topics: ["SEO/SEM", "Social Media Marketing", "Content Marketing", "Marketing Analytics"],
//       color: "from-purple-600 to-purple-800",
//       icon: <Target className="h-8 w-8" />,
//     },
//     {
//       title: "PGCBA (Postgraduate Certificate)",
//       description:
//         "Postgraduate certification in business administration expertise for strategic business decisions. 100% scholarship with good attendance and scores",
//       duration: "4th Year",
//       topics: ["Strategic Planning", "Advanced Analytics", "Business Intelligence", "Leadership"],
//       color: "from-emerald-600 to-emerald-800",
//       icon: <Star className="h-8 w-8" />,
//     },
//   ]

//   const skillEnhancementPrograms = [
//     {
//       title: "Communication Training",
//       description:
//         "Basic English communication covering verbal, written, and listening skills, which helps students in bagging a job",
//       icon: <Users className="h-8 w-8" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Overall Career Development",
//       description:
//         "Structured program to enhance logical and analytical thinking abilities along with extracurricular activities",
//       icon: <TrendingUp className="h-8 w-8" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Professional Certification",
//       description:
//         "Get job-ready before graduating with our professional courses. Gain real-time skills taught by real professionals from the industry",
//       icon: <Award className="h-8 w-8" />,
//       color: "from-emerald-500 to-teal-500",
//     },
//     {
//       title: "Financial Support",
//       description: "Scholarships for meritorious students and assistance with loan fee installments",
//       icon: <DollarSign className="h-8 w-8" />,
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const careerDevelopment = [
//     {
//       title: "Placement Training",
//       description: "Begins from 4th Semester with focus on industry-relevant skills",
//       icon: <BookOpen className="h-6 w-6" />,
//     },
//     {
//       title: "Internships",
//       description: "Real-world experience from 4th Semester onwards",
//       icon: <Briefcase className="h-6 w-6" />,
//     },
//     {
//       title: "Company Visits",
//       description: "Direct exposure to corporate environments and operations",
//       icon: <Building2 className="h-6 w-6" />,
//     },
//     {
//       title: "Placement Success",
//       description: "90% placement rate with packages ranging from 4-8 LPA",
//       icon: <TrendingUp className="h-6 w-6" />,
//     },
//   ]

//   const industrySkills = [
//     {
//       skill: "Search Engine Optimization",
//       description: "Master techniques to improve website visibility",
//       tools: ["Google Analytics", "SEMrush", "Ahrefs", "Moz"],
//     },
//     {
//       skill: "Google Ads & Analytics",
//       description: "Create and analyze effective digital advertising campaigns",
//       tools: ["Google Ads", "Google Analytics", "Google Tag Manager", "Data Studio"],
//     },
//     {
//       skill: "Social Media Management",
//       description: "Develop engaging content and influencer marketing strategies",
//       tools: ["Hootsuite", "Buffer", "Canva", "Meta Business Suite"],
//     },
//   ]

//   const careerOpportunities = [
//     {
//       title: "Digital Marketing Executive",
//       package: "₹3-5 LPA",
//       description: "Plan and manage online marketing campaigns across multiple platforms",
//       skills: ["SEO", "SEM", "Social Media", "Content Marketing"],
//       companies: ["TCS", "Infosys", "Wipro", "Accenture"],
//     },
//     {
//       title: "Marketing Analyst",
//       package: "₹4-6 LPA",
//       description: "Track performance and business KPIs using data analytics tools",
//       skills: ["Google Analytics", "Data Analysis", "Reporting", "KPI Tracking"],
//       companies: ["IBM", "Cognizant", "HCL", "Capgemini"],
//     },
//     {
//       title: "Social Media Strategist",
//       package: "₹5-8 LPA",
//       description: "Build brand presence on LinkedIn, Twitter, and Instagram",
//       skills: ["Content Strategy", "Brand Management", "Influencer Marketing", "Community Management"],
//       companies: ["Meta", "Google", "Amazon", "Flipkart"],
//     },
//     {
//       title: "Entrepreneur",
//       package: "Unlimited",
//       description: "Launch your own venture using digital platforms and business knowledge",
//       skills: ["Business Planning", "Digital Strategy", "Leadership", "Innovation"],
//       companies: ["Startup Ecosystem", "Incubators", "Angel Investors", "VCs"],
//     },
//   ]

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
//       <div className="container mx-auto px-6 py-20">
//         {/* Hero Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-3 mb-8">
//             <Target className="h-5 w-5 text-purple-600" />
//             <span className="text-purple-700 font-semibold">Business Leadership Program</span>
//           </div>
//           <h1 className="text-5xl lg:text-7xl font-bold mb-8">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               BBA + Digital Marketing
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+ PGCBA</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
//             Upgrade your 3-year degree to 4 year for FREE with BBA in Digital Marketing at BIMSR. Bachelor of Business
//             Administration (BBA) + Professional Certification in Digital Marketing + Postgraduate Certificate in
//             Business Administration (PGCBA) fully funded by BIMSR after 3 years of graduation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
//               Apply Now
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>
//             <button className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center">
//               <Play className="mr-2 h-5 w-5" />
//               Watch Demo
//             </button>
//           </div>
//         </div>

//         {/* Program Overview */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to BIMSR</h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Over 12+ Years of Excellence. Guiding students towards bright careers with values of Sincerity, Hard
//                 Work, and Justice.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   "17-Acre Modern Campus with state-of-the-art laboratories",
//                   "Expert Faculty & Industry Interaction",
//                   "Highly qualified faculty, industrial visits, and expert lectures",
//                   "This 3-year integrated program equips you with academic foundations and professional certifications for the contemporary business world",
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//                       <CheckCircle className="h-4 w-4 text-white" />
//                     </div>
//                     <span className="text-gray-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
//               alt="Business team meeting and strategy planning"
//               className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
//             />
//           </div>
//         </div>

//         {/* Fee Structure */}
//         <div className="mb-24">
//           <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-6">Fee Structure</h2>
//                 <p className="text-xl text-purple-100 max-w-3xl mx-auto">
//                   Our comprehensive 4-year program offers transparent pricing with flexible payment options
//                 </p>
//               </div>
//               <div className="grid md:grid-cols-4 gap-8">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹25,000</div>
//                   <div className="text-purple-100 font-medium mb-1">Admission Fee</div>
//                   <div className="text-sm text-purple-200">One-time payment due at enrollment</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹1,90,000</div>
//                   <div className="text-purple-100 font-medium mb-1">First Year</div>
//                   <div className="text-sm text-purple-200">BBA program fees covering fundamental coursework</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹75,000</div>
//                   <div className="text-purple-100 font-medium mb-1">Years 2 & 3</div>
//                   <div className="text-sm text-purple-200">Each year specialization modules</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
//                   <div className="text-purple-100 font-medium mb-1">4th Year Scholarship</div>
//                   <div className="text-sm text-purple-200">PGCBA fully funded</div>
//                 </div>
//               </div>
//               <div className="text-center mt-8">
//                 <div className="text-5xl font-bold mb-2">₹3,65,000</div>
//                 <div className="text-purple-100 text-xl">Total 4-Year Program Investment</div>
//                 <div className="text-sm text-purple-200 mt-4 space-y-1">
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
//                 { id: "overview", name: "Program Structure" },
//                 { id: "skills", name: "Skill Enhancement" },
//                 { id: "industry", name: "Industry Skills" },
//                 { id: "careers", name: "Career Paths" },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
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
//           <div className="space-y-8">
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Course Overview</h3>
//             {programStructure.map((structure, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-y-16 translate-x-16"></div>

//                   <div className="relative z-10">
//                     <div className="flex items-start space-x-6">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${structure.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         {structure.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-4 mb-4">
//                           <h3 className="text-2xl font-bold text-gray-900">{structure.title}</h3>
//                           <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
//                             {structure.duration}
//                           </span>
//                         </div>
//                         <p className="text-gray-600 mb-6 leading-relaxed">{structure.description}</p>
//                         <div className="flex flex-wrap gap-3">
//                           {structure.topics.map((topic, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
//                             >
//                               {topic}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === "skills" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Skill Enhancement Programs</h3>
//             <div className="grid md:grid-cols-2 gap-8 mb-12">
//               {skillEnhancementPrograms.map((program, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
//                     <div className="flex items-start space-x-6">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         {program.icon}
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h4>
//                         <p className="text-gray-600 leading-relaxed">{program.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//               <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Development & Placement</h4>
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {careerDevelopment.map((item, index) => (
//                   <div key={index} className="text-center">
//                     <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600">
//                       {item.icon}
//                     </div>
//                     <h5 className="font-semibold text-gray-900 mb-2">{item.title}</h5>
//                     <p className="text-sm text-gray-600">{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "industry" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Skills Acquired</h3>
//             <div className="space-y-8">
//               {industrySkills.map((skill, index) => (
//                 <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
//                     <div>
//                       <h4 className="text-2xl font-bold text-gray-900 mb-2">{skill.skill}</h4>
//                       <p className="text-gray-600">{skill.description}</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {skill.tools.map((tool, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
//                       >
//                         {tool}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
//               <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//                 Salaries and In-Demand Digital Marketing Roles in India
//               </h4>
//               <p className="text-gray-600 text-center mb-8">
//                 According to industry data, the average annual salary for an entry-level digital marketing professional
//                 in India is around ₹3-5 lakhs. Salaries can vary based on factors like location, company size, and level
//                 of expertise.
//               </p>
//               <div className="grid md:grid-cols-5 gap-4">
//                 {[
//                   "Social Media Manager",
//                   "SEO Specialist",
//                   "PPC Specialist",
//                   "Content Strategist",
//                   "Email Marketing",
//                 ].map((role, index) => (
//                   <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md">
//                     <div className="text-sm font-semibold text-purple-600">{role}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "careers" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Opportunities</h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               {careerOpportunities.map((career, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-y-12 translate-x-12"></div>

//                     <div className="relative z-10">
//                       <div className="text-center mb-6">
//                         <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                           <Target className="h-10 w-10" />
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-900 mb-2">{career.title}</h3>
//                         <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
//                           {career.package}
//                         </div>
//                       </div>

//                       <p className="text-gray-600 mb-6 leading-relaxed">{career.description}</p>

//                       <div className="mb-6">
//                         <h4 className="font-semibold text-gray-900 mb-3">Key Skills</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {career.skills.map((skill, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-3">Top Hiring Companies</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {career.companies.map((company, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {company}
//                             </span>
//                           ))}
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
//         <div className="mt-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10">
//             <h3 className="text-3xl font-bold mb-8 text-center">Sports Excellence Programme</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Zap className="h-8 w-8" />
//                 </div>
//                 <h4 className="font-semibold mb-2">FIFA-Level Football Training</h4>
//                 <p className="text-green-100 text-sm">
//                   Students in our sports quota receive elite training from globally qualified coaches
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Award className="h-8 w-8" />
//                 </div>
//                 <h4 className="font-semibold mb-2">Complete Support Package</h4>
//                 <p className="text-green-100 text-sm">
//                   BIMSR provides playing kits, travel expenses, and accommodation for tournaments
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Globe className="h-8 w-8" />
//                 </div>
//                 <h4 className="font-semibold mb-2">International Exposure</h4>
//                 <p className="text-green-100 text-sm">
//                   Get to play in championships and national tournaments fully supported by BIMSR
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-20">
//           <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
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
//                     <Users className="h-8 w-8 text-purple-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Call Our Admissions Office</div>
//                   <div className="text-sm text-gray-400">8970002004</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Building2 className="h-8 w-8 text-pink-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Email Inquiries</div>
//                   <div className="text-sm text-gray-400">admissions@bangaloreinstitutions.com</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Briefcase className="h-8 w-8 text-green-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Visit Our Campus</div>
//                   <div className="text-sm text-gray-400">Schedule a tour</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <Globe className="h-8 w-8 text-blue-400" />
//                   </div>
//                   <div className="font-semibold mb-1">Apply Online</div>
//                   <div className="text-sm text-gray-400">Complete your application</div>
//                 </div>
//               </div>
//               <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                 Apply for BBA Digital Marketing
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
import { ArrowRight, CheckCircle, Briefcase } from "lucide-react"

export default function BBADigitalMarketingProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  const programHighlights = [
    "Business management + digital marketing",
    "Leadership and entrepreneurship training",
    "Strategic marketing and brand management",
    "88% placement rate with 6.5 LPA average",
    "Industry mentorship and networking",
    "Business case studies and simulations",
    "International business exposure",
    "Startup incubation support",
  ]

  const careerOpportunities = [
    { role: "Business Development Manager", package: "₹5-10 LPA", companies: ["HDFC", "ICICI", "Axis Bank"] },
    { role: "Marketing Manager", package: "₹4-8 LPA", companies: ["Reliance", "Tata", "Mahindra"] },
    { role: "Brand Manager", package: "₹6-12 LPA", companies: ["Unilever", "P&G", "Nestle"] },
    { role: "Digital Marketing Head", package: "₹7-15 LPA", companies: ["Flipkart", "Amazon", "Myntra"] },
    { role: "Business Analyst", package: "₹4-9 LPA", companies: ["Deloitte", "EY", "KPMG"] },
    { role: "Entrepreneur/Startup Founder", package: "Variable", companies: ["Self-employed", "Incubators"] },
  ]

  const feeStructure = {
    admissionFee: "₹25,000",
    firstYear: "₹1,90,000",
    secondYear: "₹75,000",
    thirdYear: "₹75,000",
    fourthYear: "100% Scholarship",
    totalFee: "₹3,65,000",
  }

  const placementStats = {
    placementRate: "88%",
    averagePackage: "₹6.5 LPA",
    highestPackage: "₹15 LPA",
    minimumPackage: "₹4 LPA",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-orange-800 to-yellow-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
                <Briefcase className="h-5 w-5 text-red-400" />
                Business Leadership
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                BBA + Digital Marketing
                <span className="block text-3xl lg:text-4xl text-red-300 font-normal mt-2">+ PGCBA</span>
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Combine business management expertise with digital marketing skills. Lead teams, build brands, and drive
                business growth in the digital economy.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
                  <div className="text-red-200 text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{placementStats.averagePackage}</div>
                  <div className="text-red-200 text-sm">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{placementStats.highestPackage}</div>
                  <div className="text-red-200 text-sm">Highest Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">4 Years</div>
                  <div className="text-red-200 text-sm">Duration</div>
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Business Management"
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
                { id: "leadership", name: "Leadership" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
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
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
                <p className="text-red-100 text-lg">Transparent fee structure with flexible payment options</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
                  <div className="text-red-100">Total Program Fee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
                  <div className="text-red-100">4th Year Scholarship</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-red-100">Interest EMI</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
                    <div className="text-red-100 text-sm">Admission Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.firstYear}</div>
                    <div className="text-red-100 text-sm">First Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.secondYear}</div>
                    <div className="text-red-100 text-sm">Second Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
                    <div className="text-red-100 text-sm">Third Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-300">{feeStructure.fourthYear}</div>
                    <div className="text-red-100 text-sm">Fourth Year</div>
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
                        <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
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
            <h2 className="text-4xl font-bold mb-6">Ready to Lead in Business?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our comprehensive business management program and launch your leadership career with guaranteed
              placement assistance.
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
