// import { Award, CheckCircle, Users, BookOpen, Target } from "lucide-react"

// export default function BBADigitalMarketingProgram() {
//   const programStructure = [
//     {
//       title: "Business Administration Foundation",
//       description: "Core business management principles and leadership skills",
//       duration: "Years 1-2",
//       topics: ["Management Principles", "Business Ethics", "Organizational Behavior", "Financial Management"],
//     },
//     {
//       title: "Digital Marketing Specialization",
//       description: "Modern marketing strategies and digital transformation",
//       duration: "Years 2-3",
//       topics: ["Digital Strategy", "Social Media Marketing", "Content Marketing", "Marketing Analytics"],
//     },
//     {
//       title: "Leadership & Entrepreneurship",
//       description: "Business leadership and startup development skills",
//       duration: "Year 3-4",
//       topics: ["Strategic Planning", "Team Leadership", "Business Development", "Innovation Management"],
//     },
//   ]

//   const businessSkills = [
//     {
//       category: "Leadership",
//       skills: ["Team Management", "Strategic Planning", "Decision Making", "Communication"],
//     },
//     {
//       category: "Marketing",
//       skills: ["Digital Campaigns", "Brand Management", "Market Research", "Customer Analytics"],
//     },
//     {
//       category: "Business Development",
//       skills: ["Sales Strategy", "Business Planning", "Financial Analysis", "Project Management"],
//     },
//     {
//       category: "Entrepreneurship",
//       skills: ["Startup Development", "Innovation", "Risk Management", "Venture Capital"],
//     },
//   ]

//   const careerPaths = [
//     {
//       title: "Marketing Manager",
//       package: "₹6-10 LPA",
//       description: "Lead marketing teams and develop comprehensive marketing strategies",
//       skills: ["Team Leadership", "Strategic Planning", "Digital Marketing", "Budget Management"],
//     },
//     {
//       title: "Business Development Manager",
//       package: "₹7-12 LPA",
//       description: "Drive business growth through strategic partnerships and market expansion",
//       skills: ["Sales Strategy", "Partnership Development", "Market Analysis", "Negotiation"],
//     },
//     {
//       title: "Digital Marketing Director",
//       package: "₹10-18 LPA",
//       description: "Oversee digital transformation and marketing technology initiatives",
//       skills: ["Digital Strategy", "Technology Integration", "Team Management", "ROI Optimization"],
//     },
//   ]

//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
//               Business Leadership Program
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               BBA + Digital Marketing + PGCBA
//             </h2>
//             <p className="max-w-3xl text-gray-600 md:text-xl">
//               Business administration with digital marketing specialization, combining management principles with modern
//               marketing strategies for leadership roles.
//             </p>
//           </div>
//         </div>

//         {/* Program Overview */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
//               alt="Business team meeting and strategy planning"
//               className="w-full h-[400px] object-cover rounded-xl shadow-lg"
//             />
//           </div>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold text-blue-800 mb-4">Business Leadership with Digital Focus</h3>
//               <p className="text-gray-600 mb-6">
//                 Develop comprehensive business management skills combined with cutting-edge digital marketing expertise.
//                 Perfect for future business leaders and entrepreneurs.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Business management foundations</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Digital marketing specialization</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Leadership development</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Entrepreneurship training</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Fee Structure */}
//         <div className="bg-blue-50 rounded-xl p-8 mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Program Investment</h3>
//           <div className="grid md:grid-cols-4 gap-6">
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹25,000</div>
//               <div className="text-sm text-gray-600 mb-1">Admission Fee</div>
//               <div className="text-xs text-gray-500">Registration and onboarding</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹1,90,000</div>
//               <div className="text-sm text-gray-600 mb-1">First Year</div>
//               <div className="text-xs text-gray-500">Business foundations</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹75,000</div>
//               <div className="text-sm text-gray-600 mb-1">Second & Third Year</div>
//               <div className="text-xs text-gray-500">Specialization modules</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
//               <div className="text-sm text-gray-600 mb-1">4th Year Scholarship</div>
//               <div className="text-xs text-gray-500">PGCBA funding</div>
//             </div>
//           </div>
//           <div className="text-center mt-6">
//             <div className="text-3xl font-bold text-blue-800">₹3,65,000</div>
//             <div className="text-gray-600">Total 4-Year Program Fee</div>
//           </div>
//         </div>

//         {/* Program Structure */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Program Structure</h3>
//           <div className="space-y-6">
//             {programStructure.map((structure, index) => (
//               <div key={index} className="card p-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
//                     <span className="text-blue-600 font-bold">{index + 1}</span>
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-2">
//                       <h4 className="text-lg font-bold text-blue-800">{structure.title}</h4>
//                       <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">{structure.duration}</span>
//                     </div>
//                     <p className="text-gray-600 mb-3">{structure.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {structure.topics.map((topic, idx) => (
//                         <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
//                           {topic}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Business Skills */}
//         <div className="mb-16 bg-gray-50 rounded-xl p-8">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Core Business Skills</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {businessSkills.map((category, index) => (
//               <div key={index} className="bg-white rounded-lg p-6 text-center">
//                 <h4 className="text-lg font-bold text-blue-800 mb-4">{category.category}</h4>
//                 <div className="space-y-2">
//                   {category.skills.map((skill, idx) => (
//                     <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Career Opportunities */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Leadership Career Paths</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {careerPaths.map((career, index) => (
//               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Target className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{career.title}</h4>
//                 <div className="text-2xl font-bold text-green-600 mb-3">{career.package}</div>
//                 <p className="text-gray-600 text-sm mb-4">{career.description}</p>
//                 <div className="flex flex-wrap gap-1 justify-center">
//                   {career.skills.map((skill, idx) => (
//                     <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Program Benefits */}
//         <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
//           <h3 className="text-2xl font-bold mb-4">Why Choose BBA Digital Marketing at BIMSR?</h3>
//           <div className="grid md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <Award className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Leadership Development</h4>
//               <p className="text-blue-100 text-sm">Comprehensive training in business leadership and management</p>
//             </div>
//             <div>
//               <Users className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Industry Connections</h4>
//               <p className="text-blue-100 text-sm">Network with business leaders and industry professionals</p>
//             </div>
//             <div>
//               <BookOpen className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Entrepreneurship Focus</h4>
//               <p className="text-blue-100 text-sm">Business incubation support and startup mentorship</p>
//             </div>
//           </div>
//           <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
//             Apply for BBA Digital Marketing
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

import { CheckCircle, Users, Target, TrendingUp, Building2, Briefcase, Star, Globe } from "lucide-react"

export default function BBADigitalMarketingProgram() {
  const programStructure = [
    {
      title: "Business Administration Foundation",
      description: "Master core business management principles, leadership skills, and organizational behavior",
      duration: "Years 1-2",
      topics: ["Management Principles", "Business Ethics", "Organizational Behavior", "Financial Management"],
      color: "from-blue-600 to-blue-800",
      icon: <Building2 className="h-8 w-8" />,
    },
    {
      title: "Digital Marketing Specialization",
      description: "Advanced digital marketing strategies, social media management, and data-driven campaigns",
      duration: "Years 2-3",
      topics: ["Digital Strategy", "Social Media Marketing", "Content Marketing", "Marketing Analytics"],
      color: "from-purple-600 to-purple-800",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Leadership & Entrepreneurship",
      description: "Strategic business leadership, innovation management, and startup development skills",
      duration: "Year 3-4",
      topics: ["Strategic Planning", "Team Leadership", "Business Development", "Innovation Management"],
      color: "from-emerald-600 to-emerald-800",
      icon: <Star className="h-8 w-8" />,
    },
  ]

  const businessSkills = [
    {
      category: "Leadership",
      skills: ["Team Management", "Strategic Planning", "Decision Making", "Communication"],
      icon: <Users className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Marketing",
      skills: ["Digital Campaigns", "Brand Management", "Market Research", "Customer Analytics"],
      icon: <Target className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Business Development",
      skills: ["Sales Strategy", "Business Planning", "Financial Analysis", "Project Management"],
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Entrepreneurship",
      skills: ["Startup Development", "Innovation", "Risk Management", "Venture Capital"],
      icon: <Briefcase className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
    },
  ]

  const careerPaths = [
    {
      title: "Marketing Manager",
      package: "₹6-10 LPA",
      description: "Lead marketing teams and develop comprehensive marketing strategies for business growth",
      skills: ["Team Leadership", "Strategic Planning", "Digital Marketing", "Budget Management"],
      growth: "Marketing Director in 3-4 years",
      companies: ["Unilever", "P&G", "Coca-Cola", "Amazon"],
    },
    {
      title: "Business Development Manager",
      package: "₹7-12 LPA",
      description: "Drive business growth through strategic partnerships, market expansion, and client relationships",
      skills: ["Sales Strategy", "Partnership Development", "Market Analysis", "Negotiation"],
      growth: "VP Business Development in 4-5 years",
      companies: ["Microsoft", "Google", "Salesforce", "HubSpot"],
    },
    {
      title: "Digital Marketing Director",
      package: "₹10-18 LPA",
      description: "Oversee digital transformation initiatives and lead marketing technology implementations",
      skills: ["Digital Strategy", "Technology Integration", "Team Management", "ROI Optimization"],
      growth: "Chief Marketing Officer in 5-6 years",
      companies: ["Meta", "Adobe", "Netflix", "Spotify"],
    },
  ]

  const programHighlights = [
    {
      title: "Industry Integration",
      description: "Live projects with Fortune 500 companies and startup partnerships",
      icon: <Building2 className="h-12 w-12" />,
      stats: "50+ Partner Companies",
    },
    {
      title: "Leadership Development",
      description: "Executive coaching, leadership workshops, and mentorship programs",
      icon: <Users className="h-12 w-12" />,
      stats: "100+ Leadership Hours",
    },
    {
      title: "Global Exposure",
      description: "International case studies, global marketing trends, and cross-cultural business",
      icon: <Globe className="h-12 w-12" />,
      stats: "25+ Global Cases",
    },
    {
      title: "Entrepreneurship Support",
      description: "Business incubation, startup funding guidance, and innovation labs",
      icon: <Briefcase className="h-12 w-12" />,
      stats: "₹10L+ Funding Support",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm border border-purple-200/50 rounded-full px-6 py-3 mb-8">
            <Target className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Business Leadership Program</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              BBA + Digital Marketing
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+ PGCBA</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Combine business administration excellence with cutting-edge digital marketing expertise. Develop leadership
            skills and entrepreneurial mindset for tomorrow's business challenges.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Shape the Future of Business</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive BBA program integrates traditional business management with modern digital marketing
                strategies. Perfect for aspiring business leaders, entrepreneurs, and marketing professionals who want
                to make a significant impact.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive business management foundations",
                  "Advanced digital marketing specialization",
                  "Leadership development and executive coaching",
                  "Entrepreneurship training and startup support",
                  "Live projects with industry partners",
                  "Global business exposure and case studies",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Business team meeting and strategy planning"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Smart Investment in Your Future</h2>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                  Transparent pricing with flexible payment options and scholarship opportunities
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">₹25,000</div>
                  <div className="text-purple-100 font-medium mb-1">Admission Fee</div>
                  <div className="text-sm text-purple-200">Registration & onboarding</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">₹1,90,000</div>
                  <div className="text-purple-100 font-medium mb-1">First Year</div>
                  <div className="text-sm text-purple-200">Business foundations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">₹75,000</div>
                  <div className="text-purple-100 font-medium mb-1">Years 2 & 3</div>
                  <div className="text-sm text-purple-200">Specialization modules</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
                  <div className="text-purple-100 font-medium mb-1">4th Year Scholarship</div>
                  <div className="text-sm text-purple-200">PGCBA funding</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="text-5xl font-bold mb-2">₹3,65,000</div>
                <div className="text-purple-100 text-xl">Total 4-Year Program Investment</div>
                <div className="text-sm text-purple-200 mt-2">
                  Flexible EMI options • Merit scholarships available • Education loan assistance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Program Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully designed curriculum that builds business acumen and digital marketing expertise progressively
            </p>
          </div>
          <div className="space-y-8">
            {programStructure.map((structure, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${structure.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        {structure.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{structure.title}</h3>
                          <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                            {structure.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{structure.description}</p>
                        <div className="flex flex-wrap gap-3">
                          {structure.topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Skills */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Master Essential Business Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Develop expertise across all critical areas of modern business management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSkills.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-y-12 translate-x-12"></div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Highlights */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Program Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique features that set our BBA program apart from traditional business education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-all duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{highlight.description}</p>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {highlight.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Career Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your career in high-impact leadership roles with excellent growth potential
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {careerPaths.map((career, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-y-12 translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <Target className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{career.title}</h3>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                        {career.package}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{career.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

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

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Career Growth Path</div>
                      <div className="text-sm text-purple-600">{career.growth}</div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Lead the Future of Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our comprehensive BBA program and develop the leadership skills, business acumen, and digital
                marketing expertise that tomorrow's business leaders need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Apply for BBA Digital Marketing
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Schedule Campus Visit
                </button>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <div className="font-semibold">Leadership Development</div>
                  <div className="text-sm text-gray-400">Executive coaching & mentorship</div>
                </div>
                <div className="text-center">
                  <Building2 className="h-8 w-8 mx-auto mb-2 text-pink-400" />
                  <div className="font-semibold">Industry Partnerships</div>
                  <div className="text-sm text-gray-400">50+ Fortune 500 companies</div>
                </div>
                <div className="text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <div className="font-semibold">Entrepreneurship Support</div>
                  <div className="text-sm text-gray-400">Business incubation & funding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
