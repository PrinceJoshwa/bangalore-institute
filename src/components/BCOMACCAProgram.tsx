// import {
//   Award,
//   BookOpen,
//   TrendingUp,
//   Users,
//   CheckCircle,
//   Calculator,
//   Building,
//   Globe,
//   Target,
//   BarChart3,
//   DollarSign,
// } from "lucide-react"

// export default function BCOMACCAProgram() {
//   const programStructure = [
//     {
//       title: "BCOM Academic Foundation",
//       description: "Comprehensive foundation in commerce, accounting, business studies, economics, and commercial law",
//       duration: "3 Years",
//       icon: <BookOpen className="h-8 w-8" />,
//       color: "from-blue-600 to-blue-800",
//       modules: ["Financial Accounting", "Business Economics", "Commercial Law", "Business Statistics"],
//     },
//     {
//       title: "ACCA Professional Certification",
//       description:
//         "Knowledge, Skills, and Professional levels in partnership with Zell Education for global recognition",
//       duration: "Integrated",
//       icon: <Award className="h-8 w-8" />,
//       color: "from-emerald-600 to-emerald-800",
//       modules: ["Applied Knowledge", "Applied Skills", "Strategic Professional", "Ethics Module"],
//     },
//     {
//       title: "PGCFM Advanced Certification",
//       description: "Postgraduate certificate in financial management with advanced investment and risk strategies",
//       duration: "1 Year",
//       icon: <TrendingUp className="h-8 w-8" />,
//       color: "from-purple-600 to-purple-800",
//       modules: ["Investment Analysis", "Risk Management", "Financial Planning", "Portfolio Management"],
//     },
//   ]

//   const accaLevels = [
//     {
//       level: "Applied Knowledge Level",
//       description: "Build strong foundation in accounting principles, business concepts, and management accounting",
//       subjects: ["Business and Technology (BT)", "Management Accounting (MA)", "Financial Accounting (FA)"],
//       duration: "6 months",
//       examFees: "Included in program fee",
//     },
//     {
//       level: "Applied Skills Level",
//       description: "Develop technical and professional skills essential for workplace success and career advancement",
//       subjects: [
//         "Corporate and Business Law (LW)",
//         "Performance Management (PM)",
//         "Taxation (TX)",
//         "Financial Reporting (FR)",
//         "Audit and Assurance (AA)",
//         "Financial Management (FM)",
//       ],
//       duration: "12 months",
//       examFees: "Included in program fee",
//     },
//     {
//       level: "Strategic Professional Level",
//       description: "Master strategic business leadership, advanced financial management, and professional expertise",
//       subjects: [
//         "Strategic Business Leader (SBL)",
//         "Strategic Business Reporting (SBR)",
//         "Advanced Financial Management (AFM)",
//         "Advanced Performance Management (APM)",
//       ],
//       duration: "18 months",
//       examFees: "Included in program fee",
//     },
//   ]

//   const careerOpportunities = [
//     {
//       title: "Chartered Certified Accountant",
//       description:
//         "Lead financial reporting, taxation, auditing, and strategic financial planning for multinational corporations",
//       package: "₹8-15 LPA",
//       icon: <Calculator className="h-6 w-6" />,
//       growth: "Senior Manager in 4-5 years",
//       companies: ["Deloitte", "PwC", "KPMG", "EY"],
//     },
//     {
//       title: "Financial Analyst",
//       description:
//         "Analyze complex financial data, support strategic investment decisions, and provide business insights",
//       package: "₹6-12 LPA",
//       icon: <BarChart3 className="h-6 w-6" />,
//       growth: "Finance Manager in 3-4 years",
//       companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Citi"],
//     },
//     {
//       title: "Internal Auditor",
//       description:
//         "Ensure regulatory compliance, assess risk management, and maintain financial transparency standards",
//       package: "₹5-10 LPA",
//       icon: <CheckCircle className="h-6 w-6" />,
//       growth: "Audit Director in 5-6 years",
//       companies: ["ICICI Bank", "HDFC Bank", "Axis Bank", "Kotak Mahindra"],
//     },
//     {
//       title: "Finance Manager",
//       description: "Oversee financial operations, strategic planning, policy development, and team leadership",
//       package: "₹10-18 LPA",
//       icon: <Building className="h-6 w-6" />,
//       growth: "CFO in 6-8 years",
//       companies: ["Tata Group", "Reliance", "Infosys", "Wipro"],
//     },
//     {
//       title: "Tax Consultant",
//       description: "Provide expert tax advisory, strategic tax planning, and ensure legal compliance for businesses",
//       package: "₹7-14 LPA",
//       icon: <DollarSign className="h-6 w-6" />,
//       growth: "Tax Partner in 5-7 years",
//       companies: ["Grant Thornton", "BDO", "RSM", "Nexia"],
//     },
//   ]

//   const studentJourney = [
//     {
//       phase: "Foundation Building",
//       description: "Master commerce fundamentals with hands-on practical sessions and industry-relevant workshops",
//       activities: ["BCOM core subjects", "ACCA Knowledge level", "Financial fundamentals", "Business law basics"],
//       duration: "Year 1",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       phase: "Professional Development",
//       description: "Advanced skill building through expert-led masterclasses and real-world case studies",
//       activities: ["ACCA Skills level", "Advanced accounting", "Taxation expertise", "Financial reporting"],
//       duration: "Year 2-3",
//       color: "from-emerald-500 to-teal-500",
//     },
//     {
//       phase: "Strategic Mastery",
//       description: "Leadership training, strategic thinking, and preparation for senior finance roles",
//       activities: ["ACCA Professional level", "PGCFM modules", "Industry exposure", "Leadership development"],
//       duration: "Year 3-4",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       phase: "Career Launch",
//       description: "Comprehensive placement support with top-tier firms and continuous career guidance",
//       activities: ["Final certifications", "Campus interviews", "Career mentoring", "Alumni networking"],
//       duration: "Final Semester",
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const programBenefits = [
//     {
//       title: "Global Recognition",
//       description: "ACCA qualification recognized in 180+ countries worldwide",
//       icon: <Globe className="h-8 w-8" />,
//       stats: "180+ Countries",
//     },
//     {
//       title: "Industry Partnerships",
//       description: "Direct partnerships with Big 4 accounting firms and multinational corporations",
//       icon: <Building className="h-8 w-8" />,
//       stats: "50+ Partners",
//     },
//     {
//       title: "Expert Faculty",
//       description: "Learn from ACCA-qualified professionals and industry veterans",
//       icon: <Users className="h-8 w-8" />,
//       stats: "15+ ACCA Experts",
//     },
//     {
//       title: "Placement Success",
//       description: "Exceptional placement record with leading accounting and finance firms",
//       icon: <Target className="h-8 w-8" />,
//       stats: "95% Placement Rate",
//     },
//   ]

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
//       <div className="container mx-auto px-6 py-20">
//         {/* Hero Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 backdrop-blur-sm border border-emerald-200/50 rounded-full px-6 py-3 mb-8">
//             <Award className="h-5 w-5 text-emerald-600" />
//             <span className="text-emerald-700 font-semibold">Professional Accounting Program</span>
//           </div>
//           <h1 className="text-5xl lg:text-7xl font-bold mb-8">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               BCOM + ACCA
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">+ PGCFM</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Your pathway to global accounting excellence through a comprehensive bachelor of commerce degree, ACCA
//             professional certification, and postgraduate financial management specialization.
//           </p>
//         </div>

//         {/* Why Choose Us */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BIMSR for ACCA?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience excellence in accounting education with our proven track record and industry partnerships
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {programBenefits.map((benefit, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
//                   <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 group-hover:scale-110 transition-all duration-300">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
//                   <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
//                     {benefit.stats}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Program Structure */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Program Structure</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A meticulously designed curriculum that builds accounting expertise from foundation to professional
//               mastery
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {programStructure.map((program, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-16 translate-x-16"></div>

//                   <div className="relative z-10">
//                     <div
//                       className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {program.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{program.title}</h3>
//                     <p className="text-gray-600 text-center mb-6 leading-relaxed">{program.description}</p>
//                     <div className="text-center mb-6">
//                       <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
//                         {program.duration}
//                       </span>
//                     </div>
//                     <div className="space-y-2">
//                       {program.modules.map((module, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-center"
//                         >
//                           {module}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Fee Structure */}
//         <div className="mb-24">
//           <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-6">Transparent Fee Structure</h2>
//                 <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
//                   Comprehensive program with all ACCA exam fees included and flexible payment options
//                 </p>
//               </div>
//               <div className="grid md:grid-cols-4 gap-8">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹25,000</div>
//                   <div className="text-emerald-100 font-medium mb-1">Admission Fee</div>
//                   <div className="text-sm text-emerald-200">Registration & welcome kit</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹1,80,000</div>
//                   <div className="text-emerald-100 font-medium mb-1">First Year</div>
//                   <div className="text-sm text-emerald-200">BCOM + ACCA Knowledge</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold mb-2">₹1,10,000</div>
//                   <div className="text-emerald-100 font-medium mb-1">Years 2 & 3</div>
//                   <div className="text-sm text-emerald-200">Advanced ACCA levels</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
//                   <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
//                   <div className="text-emerald-100 font-medium mb-1">4th Year Scholarship</div>
//                   <div className="text-sm text-emerald-200">PGCFM with 75%+ grades</div>
//                 </div>
//               </div>
//               <div className="text-center mt-8">
//                 <div className="text-5xl font-bold mb-2">₹4,25,000</div>
//                 <div className="text-emerald-100 text-xl">Total Program Investment</div>
//                 <div className="text-sm text-emerald-200 mt-2">
//                   All ACCA exam fees included • Merit scholarships up to 25% • Flexible EMI options
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ACCA Program Levels */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">ACCA Certification Journey</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Progress through three comprehensive levels of ACCA certification with expert guidance
//             </p>
//           </div>
//           <div className="space-y-8">
//             {accaLevels.map((level, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-16 translate-x-16"></div>

//                   <div className="relative z-10">
//                     <div className="flex items-start space-x-6">
//                       <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                         <span className="text-2xl font-bold">{index + 1}</span>
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center space-x-4 mb-4">
//                           <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
//                           <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
//                             {level.duration}
//                           </span>
//                         </div>
//                         <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
//                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
//                           {level.subjects.map((subject, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold"
//                             >
//                               {subject}
//                             </span>
//                           ))}
//                         </div>
//                         <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4">
//                           <div className="text-sm font-semibold text-emerald-700">Exam Fees: {level.examFees}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
//             <div className="flex items-center space-x-4 mb-4">
//               <Award className="h-8 w-8 text-green-600" />
//               <h3 className="text-2xl font-bold text-green-800">ACCA Partnership with Zell Education</h3>
//             </div>
//             <p className="text-green-700 leading-relaxed">
//               Our ACCA program is delivered in partnership with Zell Education, renowned for producing global rankers
//               and providing comprehensive support throughout your ACCA journey. All ACCA registration and exam fees are
//               included in your program cost, ensuring no hidden charges.
//             </p>
//           </div>
//         </div>

//         {/* Student Journey */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Professional Journey</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A structured pathway from commerce fundamentals to professional accounting mastery
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {studentJourney.map((phase, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-12 translate-x-12"></div>

//                   <div className="relative z-10">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       <span className="text-xl font-bold">{index + 1}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{phase.phase}</h3>
//                     <div className="text-center mb-4">
//                       <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
//                         {phase.duration}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 text-center mb-6 leading-relaxed">{phase.description}</p>
//                     <div className="space-y-2">
//                       {phase.activities.map((activity, idx) => (
//                         <div key={idx} className="flex items-center space-x-2">
//                           <CheckCircle className="h-4 w-4 text-green-600" />
//                           <span className="text-sm text-gray-600">{activity}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Career Opportunities */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Prestigious Career Opportunities</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Launch your career in high-demand accounting and finance roles with global recognition
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {careerOpportunities.map((career, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-12 translate-x-12"></div>

//                   <div className="relative z-10">
//                     <div className="flex items-center space-x-4 mb-6">
//                       <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                         {career.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
//                         <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                           {career.package}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-6 leading-relaxed">{career.description}</p>
//                     <div className="mb-6">
//                       <h4 className="font-semibold text-gray-900 mb-3">Top Hiring Companies</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {career.companies.map((company, idx) => (
//                           <span
//                             key={idx}
//                             className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
//                           >
//                             {company}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4">
//                       <div className="text-sm font-semibold text-emerald-700 mb-1">Career Growth</div>
//                       <div className="text-sm text-emerald-600">{career.growth}</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <h2 className="text-4xl font-bold mb-6">Ready to Become a Global Accounting Professional?</h2>
//               <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//                 Join our comprehensive ACCA program and earn globally recognized qualifications that open doors to
//                 prestigious careers in accounting, finance, and business leadership worldwide.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                   Apply for ACCA Program
//                 </button>
//                 <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
//                   Download Brochure
//                 </button>
//               </div>
//               <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
//                 <div className="text-center">
//                   <Globe className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
//                   <div className="font-semibold">Global Recognition</div>
//                   <div className="text-sm text-gray-400">180+ countries worldwide</div>
//                 </div>
//                 <div className="text-center">
//                   <Award className="h-8 w-8 mx-auto mb-2 text-teal-400" />
//                   <div className="font-semibold">Professional Certification</div>
//                   <div className="text-sm text-gray-400">ACCA + PGCFM included</div>
//                 </div>
//                 <div className="text-center">
//                   <Building className="h-8 w-8 mx-auto mb-2 text-green-400" />
//                   <div className="font-semibold">Industry Partnerships</div>
//                   <div className="text-sm text-gray-400">Big 4 & Fortune 500 companies</div>
//                 </div>
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
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, DollarSign } from "lucide-react"

export default function BCOMACCAProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  const programHighlights = [
    "ACCA global certification included",
    "International finance standards training",
    "CPA and CFA preparation support",
    "85% placement rate with 8 LPA average",
    "Financial modeling and analysis",
    "Investment banking preparation",
    "Audit and taxation expertise",
    "Corporate finance specialization",
  ]

  const careerOpportunities = [
    { role: "Financial Analyst", package: "₹6-12 LPA", companies: ["JP Morgan", "Goldman Sachs", "Morgan Stanley"] },
    { role: "Chartered Accountant", package: "₹8-15 LPA", companies: ["Deloitte", "EY", "KPMG", "PwC"] },
    { role: "Investment Banker", package: "₹10-20 LPA", companies: ["Citibank", "HSBC", "Standard Chartered"] },
    { role: "Finance Manager", package: "₹8-18 LPA", companies: ["Reliance", "Tata", "Mahindra"] },
    { role: "Tax Consultant", package: "₹5-10 LPA", companies: ["Big 4 Firms", "Boutique Firms"] },
    { role: "Audit Associate", package: "₹4-8 LPA", companies: ["Grant Thornton", "BDO", "RSM"] },
  ]

  const feeStructure = {
    admissionFee: "₹25,000",
    firstYear: "₹1,80,000",
    secondYear: "₹1,10,000",
    thirdYear: "₹1,10,000",
    fourthYear: "100% Scholarship",
    totalFee: "₹4,25,000",
  }

  const placementStats = {
    placementRate: "85%",
    averagePackage: "₹8 LPA",
    highestPackage: "₹20 LPA",
    minimumPackage: "₹4 LPA",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
                <DollarSign className="h-5 w-5 text-indigo-400" />
                International Certification
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                BCOM + ACCA
                <span className="block text-3xl lg:text-4xl text-indigo-300 font-normal mt-2">+ PGCFM</span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Master global finance with ACCA certification. Build expertise in financial management, audit, and
                taxation with international recognition and career opportunities.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
                  <div className="text-indigo-200 text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{placementStats.averagePackage}</div>
                  <div className="text-indigo-200 text-sm">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{placementStats.highestPackage}</div>
                  <div className="text-indigo-200 text-sm">Highest Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">4 Years</div>
                  <div className="text-indigo-200 text-sm">Duration</div>
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Finance and Accounting"
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
                { id: "acca", name: "ACCA Benefits" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
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
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
                <p className="text-indigo-100 text-lg">Transparent fee structure with flexible payment options</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
                  <div className="text-indigo-100">Total Program Fee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
                  <div className="text-indigo-100">4th Year Scholarship</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-indigo-100">Interest EMI</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
                    <div className="text-indigo-100 text-sm">Admission Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.firstYear}</div>
                    <div className="text-indigo-100 text-sm">First Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.secondYear}</div>
                    <div className="text-indigo-100 text-sm">Second Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
                    <div className="text-indigo-100 text-sm">Third Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-300">{feeStructure.fourthYear}</div>
                    <div className="text-indigo-100 text-sm">Fourth Year</div>
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
                        <span key={idx} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
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
            <h2 className="text-4xl font-bold mb-6">Ready for Global Finance Career?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our comprehensive ACCA program and launch your international finance career with guaranteed placement
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
