// import { Award, BookOpen, TrendingUp, Users, CheckCircle, GraduationCap, Calculator, Building } from "lucide-react"

// export default function BCOMACCAProgram() {
//   const programStructure = [
//     {
//       title: "BCOM Academic Degree",
//       description: "Comprehensive foundation in commerce, accounting, business studies, economics, and law",
//       duration: "3 Years",
//       icon: <BookOpen className="h-8 w-8 text-blue-600" />,
//     },
//     {
//       title: "ACCA Certification",
//       description: "Knowledge, Skill, and Professional levels in collaboration with ZELL Education",
//       duration: "Integrated",
//       icon: <Award className="h-8 w-8 text-blue-600" />,
//     },
//     {
//       title: "PGCFM",
//       description: "Advanced financial strategies, investment, and risk management certification",
//       duration: "1 Year",
//       icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
//     },
//   ]

//   const accaLevels = [
//     {
//       level: "ACCA Knowledge Level",
//       description: "Build foundation in accounting principles and business concepts",
//       subjects: ["Business and Technology", "Management Accounting", "Financial Accounting"],
//     },
//     {
//       level: "ACCA Skill Level",
//       description: "Develop technical and professional skills required for the workplace",
//       subjects: ["Corporate and Business Law", "Performance Management", "Taxation", "Financial Reporting"],
//     },
//     {
//       level: "ACCA Professional Level",
//       description: "Master strategic business leadership and financial management",
//       subjects: ["Strategic Business Leader", "Strategic Business Reporting", "Advanced Financial Management"],
//     },
//   ]

//   const careerOpportunities = [
//     {
//       title: "Chartered Certified Accountant",
//       description: "Handle advanced financial reporting, taxation, and auditing",
//       package: "₹8-15 LPA",
//       icon: <Calculator className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Financial Analyst",
//       description: "Analyze data and support strategic investment decisions",
//       package: "₹6-12 LPA",
//       icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Auditor",
//       description: "Ensure regulatory compliance and financial transparency",
//       package: "₹5-10 LPA",
//       icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Finance Manager",
//       description: "Oversee financial operations, reporting, and policy-making",
//       package: "₹10-18 LPA",
//       icon: <Building className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Tax Consultant",
//       description: "Advise on tax strategy, planning, and legal compliance",
//       package: "₹7-14 LPA",
//       icon: <Award className="h-6 w-6 text-blue-600" />,
//     },
//   ]

//   const studentJourney = [
//     {
//       phase: "Academic Learning",
//       description: "Semester-wise modules with hands-on labs and domain-specific workshops",
//       activities: ["BCOM coursework", "ACCA Knowledge level", "Financial fundamentals", "Business law basics"],
//     },
//     {
//       phase: "Skill Building",
//       description: "Technical skill development through masterclasses by industry professionals",
//       activities: ["ACCA Skills level", "Advanced accounting", "Taxation expertise", "Financial reporting"],
//     },
//     {
//       phase: "Career Development",
//       description: "Soft skills training, resume building, and mock interviews",
//       activities: ["ACCA Professional level", "PGCFM modules", "Industry exposure", "Placement preparation"],
//     },
//     {
//       phase: "Graduation & Placement",
//       description: "Capstone project and placement with top firms",
//       activities: ["Final certifications", "Campus interviews", "Career guidance", "Alumni network"],
//     },
//   ]

//   return (
//     <section id="bcom-acca" className="w-full py-12 md:py-24 lg:py-32 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
//               Professional Accounting Program
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">BCOM + ACCA + PGCFM</h2>
//             <p className="max-w-3xl text-gray-600 md:text-xl">
//               Your path to professional accounting excellence through a bachelor of commerce, ACCA certification, and
//               postgraduate certificate in financial management for global opportunities.
//             </p>
//           </div>
//         </div>

//         {/* Why Choose Us */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           <div className="card p-6 text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Award className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-bold text-blue-800 mb-2">12+ Years of Excellence</h3>
//             <p className="text-gray-600 text-sm">
//               Delivering quality education with values of Sincerity, Hard Work, and Justice
//             </p>
//           </div>
//           <div className="card p-6 text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Building className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-bold text-blue-800 mb-2">17-Acre Modern Campus</h3>
//             <p className="text-gray-600 text-sm">
//               State-of-the-art facilities including digital library and laboratories
//             </p>
//           </div>
//           <div className="card p-6 text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Users className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-bold text-blue-800 mb-2">Expert Faculty</h3>
//             <p className="text-gray-600 text-sm">Highly qualified instructors with extensive industry experience</p>
//           </div>
//           <div className="card p-6 text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <GraduationCap className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-bold text-blue-800 mb-2">Recognized Excellence</h3>
//             <p className="text-gray-600 text-sm">Approved by AICTE and affiliated with VTU and BNU</p>
//           </div>
//         </div>

//         {/* Program Structure */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Program Structure</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {programStructure.map((program, index) => (
//               <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {program.icon}
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2 text-center">{program.title}</h4>
//                 <p className="text-gray-600 text-sm text-center mb-3">{program.description}</p>
//                 <div className="text-center">
//                   <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
//                     {program.duration}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Fee Structure */}
//         <div className="bg-blue-50 rounded-xl p-8 mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Fee Structure</h3>
//           <div className="grid md:grid-cols-4 gap-6">
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹25,000</div>
//               <div className="text-sm text-gray-600 mb-1">Admission Fee</div>
//               <div className="text-xs text-gray-500">Registration, administration, and welcome kit</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹1,80,000</div>
//               <div className="text-sm text-gray-600 mb-1">First Year</div>
//               <div className="text-xs text-gray-500">BCOM coursework, ACCA Knowledge level modules</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹1,10,000</div>
//               <div className="text-sm text-gray-600 mb-1">Second & Third Year</div>
//               <div className="text-xs text-gray-500">Advanced courses and ACCA Professional level</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
//               <div className="text-sm text-gray-600 mb-1">4th Year Scholarship</div>
//               <div className="text-xs text-gray-500">PGCFM with 75% or higher grades</div>
//             </div>
//           </div>
//           <div className="text-center mt-6">
//             <div className="text-3xl font-bold text-blue-800">₹4,25,000</div>
//             <div className="text-gray-600">Total Program Cost</div>
//             <div className="text-sm text-gray-500 mt-2">
//               Flexible payment plans available • Merit scholarships up to 25%
//             </div>
//           </div>
//         </div>

//         {/* ACCA Program Benefits */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">ACCA Program Benefits</h3>
//           <div className="space-y-6">
//             {accaLevels.map((level, index) => (
//               <div key={index} className="card p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
//                     <span className="text-blue-600 font-bold">{index + 1}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-lg font-bold text-blue-800 mb-2">{level.level}</h4>
//                     <p className="text-gray-600 mb-3">{level.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {level.subjects.map((subject, idx) => (
//                         <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
//                           {subject}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
//             <div className="flex items-center gap-3 mb-3">
//               <Award className="h-6 w-6 text-green-600" />
//               <h4 className="font-semibold text-green-800">ACCA Powered by Zell Education</h4>
//             </div>
//             <p className="text-green-700 text-sm">
//               ACCA registration fee is included in your program cost. Zell Education delivers global rankers and
//               provides comprehensive support throughout your ACCA journey.
//             </p>
//           </div>
//         </div>

//         {/* Student Journey */}
//         <div className="mb-16 bg-gray-50 rounded-xl p-8">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Student Journey</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {studentJourney.map((phase, index) => (
//               <div key={index} className="bg-white rounded-lg p-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-blue-600 font-bold">{index + 1}</span>
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2 text-center">{phase.phase}</h4>
//                 <p className="text-gray-600 text-sm text-center mb-3">{phase.description}</p>
//                 <ul className="space-y-1">
//                   {phase.activities.map((activity, idx) => (
//                     <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
//                       <CheckCircle className="h-3 w-3 text-green-600" />
//                       {activity}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Career Opportunities */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Career Opportunities</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {careerOpportunities.map((career, index) => (
//               <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     {career.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-blue-800">{career.title}</h4>
//                     <div className="text-green-600 font-semibold">{career.package}</div>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm">{career.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Campus Life & Support */}
//         <div className="bg-blue-600 rounded-xl p-8 text-white">
//           <h3 className="text-2xl font-bold text-center mb-8">Campus Life & Support</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div>
//               <h4 className="font-semibold mb-3">Modern Facilities</h4>
//               <ul className="text-blue-100 text-sm space-y-1">
//                 <li>• Wi-Fi enabled campus</li>
//                 <li>• Separate hostels for boys & girls</li>
//                 <li>• Digital library & language lab</li>
//                 <li>• Cafeteria, gym & yoga center</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3">Skill Enhancement</h4>
//               <ul className="text-blue-100 text-sm space-y-1">
//                 <li>• Value added certification courses</li>
//                 <li>• English communication training</li>
//                 <li>• Aptitude development program</li>
//                 <li>• NPTEL courseware access</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3">Financial Support</h4>
//               <ul className="text-blue-100 text-sm space-y-1">
//                 <li>• Merit scholarships available</li>
//                 <li>• Education loan assistance</li>
//                 <li>• Flexible fee installment options</li>
//                 <li>• 100% 4th year scholarship</li>
//               </ul>
//             </div>
//           </div>
//           <div className="text-center mt-8">
//             <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
//               Apply for ACCA Program
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import {
  Award,
  BookOpen,
  TrendingUp,
  Users,
  CheckCircle,
  Calculator,
  Building,
  Globe,
  Target,
  BarChart3,
  DollarSign,
} from "lucide-react"

export default function BCOMACCAProgram() {
  const programStructure = [
    {
      title: "BCOM Academic Foundation",
      description: "Comprehensive foundation in commerce, accounting, business studies, economics, and commercial law",
      duration: "3 Years",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-blue-600 to-blue-800",
      modules: ["Financial Accounting", "Business Economics", "Commercial Law", "Business Statistics"],
    },
    {
      title: "ACCA Professional Certification",
      description:
        "Knowledge, Skills, and Professional levels in partnership with Zell Education for global recognition",
      duration: "Integrated",
      icon: <Award className="h-8 w-8" />,
      color: "from-emerald-600 to-emerald-800",
      modules: ["Applied Knowledge", "Applied Skills", "Strategic Professional", "Ethics Module"],
    },
    {
      title: "PGCFM Advanced Certification",
      description: "Postgraduate certificate in financial management with advanced investment and risk strategies",
      duration: "1 Year",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-purple-600 to-purple-800",
      modules: ["Investment Analysis", "Risk Management", "Financial Planning", "Portfolio Management"],
    },
  ]

  const accaLevels = [
    {
      level: "Applied Knowledge Level",
      description: "Build strong foundation in accounting principles, business concepts, and management accounting",
      subjects: ["Business and Technology (BT)", "Management Accounting (MA)", "Financial Accounting (FA)"],
      duration: "6 months",
      examFees: "Included in program fee",
    },
    {
      level: "Applied Skills Level",
      description: "Develop technical and professional skills essential for workplace success and career advancement",
      subjects: [
        "Corporate and Business Law (LW)",
        "Performance Management (PM)",
        "Taxation (TX)",
        "Financial Reporting (FR)",
        "Audit and Assurance (AA)",
        "Financial Management (FM)",
      ],
      duration: "12 months",
      examFees: "Included in program fee",
    },
    {
      level: "Strategic Professional Level",
      description: "Master strategic business leadership, advanced financial management, and professional expertise",
      subjects: [
        "Strategic Business Leader (SBL)",
        "Strategic Business Reporting (SBR)",
        "Advanced Financial Management (AFM)",
        "Advanced Performance Management (APM)",
      ],
      duration: "18 months",
      examFees: "Included in program fee",
    },
  ]

  const careerOpportunities = [
    {
      title: "Chartered Certified Accountant",
      description:
        "Lead financial reporting, taxation, auditing, and strategic financial planning for multinational corporations",
      package: "₹8-15 LPA",
      icon: <Calculator className="h-6 w-6" />,
      growth: "Senior Manager in 4-5 years",
      companies: ["Deloitte", "PwC", "KPMG", "EY"],
    },
    {
      title: "Financial Analyst",
      description:
        "Analyze complex financial data, support strategic investment decisions, and provide business insights",
      package: "₹6-12 LPA",
      icon: <BarChart3 className="h-6 w-6" />,
      growth: "Finance Manager in 3-4 years",
      companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Citi"],
    },
    {
      title: "Internal Auditor",
      description:
        "Ensure regulatory compliance, assess risk management, and maintain financial transparency standards",
      package: "₹5-10 LPA",
      icon: <CheckCircle className="h-6 w-6" />,
      growth: "Audit Director in 5-6 years",
      companies: ["ICICI Bank", "HDFC Bank", "Axis Bank", "Kotak Mahindra"],
    },
    {
      title: "Finance Manager",
      description: "Oversee financial operations, strategic planning, policy development, and team leadership",
      package: "₹10-18 LPA",
      icon: <Building className="h-6 w-6" />,
      growth: "CFO in 6-8 years",
      companies: ["Tata Group", "Reliance", "Infosys", "Wipro"],
    },
    {
      title: "Tax Consultant",
      description: "Provide expert tax advisory, strategic tax planning, and ensure legal compliance for businesses",
      package: "₹7-14 LPA",
      icon: <DollarSign className="h-6 w-6" />,
      growth: "Tax Partner in 5-7 years",
      companies: ["Grant Thornton", "BDO", "RSM", "Nexia"],
    },
  ]

  const studentJourney = [
    {
      phase: "Foundation Building",
      description: "Master commerce fundamentals with hands-on practical sessions and industry-relevant workshops",
      activities: ["BCOM core subjects", "ACCA Knowledge level", "Financial fundamentals", "Business law basics"],
      duration: "Year 1",
      color: "from-blue-500 to-cyan-500",
    },
    {
      phase: "Professional Development",
      description: "Advanced skill building through expert-led masterclasses and real-world case studies",
      activities: ["ACCA Skills level", "Advanced accounting", "Taxation expertise", "Financial reporting"],
      duration: "Year 2-3",
      color: "from-emerald-500 to-teal-500",
    },
    {
      phase: "Strategic Mastery",
      description: "Leadership training, strategic thinking, and preparation for senior finance roles",
      activities: ["ACCA Professional level", "PGCFM modules", "Industry exposure", "Leadership development"],
      duration: "Year 3-4",
      color: "from-purple-500 to-pink-500",
    },
    {
      phase: "Career Launch",
      description: "Comprehensive placement support with top-tier firms and continuous career guidance",
      activities: ["Final certifications", "Campus interviews", "Career mentoring", "Alumni networking"],
      duration: "Final Semester",
      color: "from-orange-500 to-red-500",
    },
  ]

  const programBenefits = [
    {
      title: "Global Recognition",
      description: "ACCA qualification recognized in 180+ countries worldwide",
      icon: <Globe className="h-8 w-8" />,
      stats: "180+ Countries",
    },
    {
      title: "Industry Partnerships",
      description: "Direct partnerships with Big 4 accounting firms and multinational corporations",
      icon: <Building className="h-8 w-8" />,
      stats: "50+ Partners",
    },
    {
      title: "Expert Faculty",
      description: "Learn from ACCA-qualified professionals and industry veterans",
      icon: <Users className="h-8 w-8" />,
      stats: "15+ ACCA Experts",
    },
    {
      title: "Placement Success",
      description: "Exceptional placement record with leading accounting and finance firms",
      icon: <Target className="h-8 w-8" />,
      stats: "95% Placement Rate",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 backdrop-blur-sm border border-emerald-200/50 rounded-full px-6 py-3 mb-8">
            <Award className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Professional Accounting Program</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              BCOM + ACCA
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">+ PGCFM</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your pathway to global accounting excellence through a comprehensive bachelor of commerce degree, ACCA
            professional certification, and postgraduate financial management specialization.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BIMSR for ACCA?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience excellence in accounting education with our proven track record and industry partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programBenefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600 group-hover:scale-110 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {benefit.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Program Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A meticulously designed curriculum that builds accounting expertise from foundation to professional
              mastery
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programStructure.map((program, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{program.title}</h3>
                    <p className="text-gray-600 text-center mb-6 leading-relaxed">{program.description}</p>
                    <div className="text-center mb-6">
                      <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {program.duration}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {program.modules.map((module, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-center"
                        >
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Transparent Fee Structure</h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  Comprehensive program with all ACCA exam fees included and flexible payment options
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">₹25,000</div>
                  <div className="text-emerald-100 font-medium mb-1">Admission Fee</div>
                  <div className="text-sm text-emerald-200">Registration & welcome kit</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">₹1,80,000</div>
                  <div className="text-emerald-100 font-medium mb-1">First Year</div>
                  <div className="text-sm text-emerald-200">BCOM + ACCA Knowledge</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">₹1,10,000</div>
                  <div className="text-emerald-100 font-medium mb-1">Years 2 & 3</div>
                  <div className="text-sm text-emerald-200">Advanced ACCA levels</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
                  <div className="text-emerald-100 font-medium mb-1">4th Year Scholarship</div>
                  <div className="text-sm text-emerald-200">PGCFM with 75%+ grades</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="text-5xl font-bold mb-2">₹4,25,000</div>
                <div className="text-emerald-100 text-xl">Total Program Investment</div>
                <div className="text-sm text-emerald-200 mt-2">
                  All ACCA exam fees included • Merit scholarships up to 25% • Flexible EMI options
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACCA Program Levels */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ACCA Certification Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progress through three comprehensive levels of ACCA certification with expert guidance
            </p>
          </div>
          <div className="space-y-8">
            {accaLevels.map((level, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                          <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                            {level.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                          {level.subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4">
                          <div className="text-sm font-semibold text-emerald-700">Exam Fees: {level.examFees}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <Award className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">ACCA Partnership with Zell Education</h3>
            </div>
            <p className="text-green-700 leading-relaxed">
              Our ACCA program is delivered in partnership with Zell Education, renowned for producing global rankers
              and providing comprehensive support throughout your ACCA journey. All ACCA registration and exam fees are
              included in your program cost, ensuring no hidden charges.
            </p>
          </div>
        </div>

        {/* Student Journey */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Professional Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured pathway from commerce fundamentals to professional accounting mastery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentJourney.map((phase, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-12 translate-x-12"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{phase.phase}</h3>
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-center mb-6 leading-relaxed">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Prestigious Career Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your career in high-demand accounting and finance roles with global recognition
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOpportunities.map((career, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full -translate-y-12 translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        {career.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {career.package}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{career.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Top Hiring Companies</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.companies.map((company, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4">
                      <div className="text-sm font-semibold text-emerald-700 mb-1">Career Growth</div>
                      <div className="text-sm text-emerald-600">{career.growth}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Become a Global Accounting Professional?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our comprehensive ACCA program and earn globally recognized qualifications that open doors to
                prestigious careers in accounting, finance, and business leadership worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Apply for ACCA Program
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
                  <div className="font-semibold">Global Recognition</div>
                  <div className="text-sm text-gray-400">180+ countries worldwide</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-teal-400" />
                  <div className="font-semibold">Professional Certification</div>
                  <div className="text-sm text-gray-400">ACCA + PGCFM included</div>
                </div>
                <div className="text-center">
                  <Building className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <div className="font-semibold">Industry Partnerships</div>
                  <div className="text-sm text-gray-400">Big 4 & Fortune 500 companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
