
// import {
//   TrendingUp,
//   Award,
//   CheckCircle,
//   Users,
//   BookOpen,
//   Smartphone,
//   Target,
//   Globe,
//   BarChart3,
//   Zap,
// } from "lucide-react"

// export default function BCADigitalMarketingProgram() {
//   const certifications = [
//     {
//       provider: "Google",
//       title: "Google Certifications",
//       description: "Master Google Ads, Analytics, and Search Console with industry-recognized certifications",
//       courses: ["Google Ads", "Google Analytics", "Search Console", "YouTube Marketing"],
//       color: "from-blue-600 to-blue-800",
//       icon: <Globe className="h-8 w-8" />,
//     },
//     {
//       provider: "Meta",
//       title: "Meta Certifications",
//       description: "Become an expert in Facebook, Instagram, and WhatsApp marketing platforms",
//       courses: ["Facebook Ads", "Instagram Marketing", "WhatsApp Business", "Meta Analytics"],
//       color: "from-purple-600 to-purple-800",
//       icon: <Users className="h-8 w-8" />,
//     },
//     {
//       provider: "AI Tools",
//       title: "AI Marketing Tools",
//       description: "Leverage cutting-edge AI and prompt engineering for modern marketing success",
//       courses: ["Generative AI", "Prompt Engineering", "AI Content Creation", "Marketing Automation"],
//       color: "from-emerald-600 to-emerald-800",
//       icon: <Zap className="h-8 w-8" />,
//     },
//     {
//       provider: "HubSpot",
//       title: "HubSpot Certification",
//       description: "Master inbound marketing, sales, and customer service methodologies",
//       courses: ["Inbound Marketing", "Content Marketing", "Email Marketing", "CRM Management"],
//       color: "from-orange-600 to-orange-800",
//       icon: <Target className="h-8 w-8" />,
//     },
//   ]

//   const marketingSkills = [
//     {
//       category: "Digital Strategy",
//       skills: ["SEO/SEM", "Content Strategy", "Social Media Planning", "Campaign Management"],
//       icon: <BarChart3 className="h-8 w-8" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       category: "Analytics & Data",
//       skills: ["Google Analytics", "Facebook Insights", "Conversion Tracking", "ROI Analysis"],
//       icon: <TrendingUp className="h-8 w-8" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       category: "Creative & Content",
//       skills: ["Graphic Design", "Video Marketing", "Copywriting", "Brand Storytelling"],
//       icon: <BookOpen className="h-8 w-8" />,
//       color: "from-emerald-500 to-teal-500",
//     },
//     {
//       category: "AI & Automation",
//       skills: ["ChatGPT Marketing", "AI Content Tools", "Marketing Automation", "Chatbot Development"],
//       icon: <Zap className="h-8 w-8" />,
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const careerPaths = [
//     {
//       title: "Digital Marketing Specialist",
//       package: "₹4-7 LPA",
//       description: "Manage comprehensive digital campaigns across multiple platforms and channels",
//       skills: ["Google Ads", "Social Media", "Content Marketing", "Analytics"],
//       growth: "Senior Specialist in 2-3 years",
//     },
//     {
//       title: "Social Media Manager",
//       package: "₹5-8 LPA",
//       description: "Create and execute innovative social media strategies for brand growth",
//       skills: ["Instagram", "Facebook", "Content Creation", "Community Management"],
//       growth: "Social Media Director in 3-4 years",
//     },
//     {
//       title: "Performance Marketing Manager",
//       package: "₹7-12 LPA",
//       description: "Optimize campaigns for maximum ROI and conversion rates using data-driven insights",
//       skills: ["Paid Advertising", "Conversion Optimization", "Data Analysis", "A/B Testing"],
//       growth: "Marketing Head in 4-5 years",
//     },
//   ]

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-6 py-20">
//         {/* Hero Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8">
//             <Smartphone className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Digital Marketing Specialization</span>
//           </div>
//           <h1 className="text-5xl lg:text-7xl font-bold mb-8">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               BCA + Digital Marketing
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">+ PGCCA</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Master the art of digital marketing with industry-leading certifications from Google, Meta, HubSpot, and AI
//             marketing tools. Build a successful career in the fastest-growing field of technology.
//           </p>
//         </div>

//         {/* Program Overview */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
//             <img
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
//               alt="Digital marketing analytics dashboard"
//               className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
//             />
//           </div>
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Digital Marketing Career</h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Our comprehensive program combines computer applications with cutting-edge digital marketing strategies.
//                 Gain hands-on experience with real campaigns, industry certifications, and AI-powered marketing tools.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   "Google Ads & Analytics certification included",
//                   "Meta marketing platforms mastery",
//                   "AI marketing tools and automation",
//                   "HubSpot inbound marketing expertise",
//                   "Live project experience with real clients",
//                   "100% placement assistance guarantee",
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
//                       <CheckCircle className="h-4 w-4 text-white" />
//                     </div>
//                     <span className="text-gray-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Industry Certifications */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Leading Certifications</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Get certified by the world's top technology companies and marketing platforms
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {certifications.map((cert, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16"></div>

//                   <div className="relative z-10">
//                     <div className="flex items-center space-x-4 mb-6">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         {cert.icon}
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                           {cert.provider}
//                         </div>
//                         <h3 className="text-2xl font-bold text-gray-900">{cert.title}</h3>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {cert.courses.map((course, idx) => (
//                         <span
//                           key={idx}
//                           className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold"
//                         >
//                           {course}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Core Marketing Skills */}
//         <div className="mb-24">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-6">Master Essential Marketing Skills</h2>
//                 <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//                   Develop expertise across all aspects of modern digital marketing
//                 </p>
//               </div>
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {marketingSkills.map((category, index) => (
//                   <div key={index} className="text-center group">
//                     <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
//                       {category.icon}
//                     </div>
//                     <h3 className="text-xl font-bold mb-4">{category.category}</h3>
//                     <div className="space-y-2">
//                       {category.skills.map((skill, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
//                         >
//                           {skill}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Career Opportunities */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Lucrative Career Opportunities</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Launch your career in high-demand digital marketing roles with excellent growth potential
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {careerPaths.map((career, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

//                   <div className="relative z-10">
//                     <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                       <Smartphone className="h-10 w-10" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3">{career.title}</h3>
//                     <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
//                       {career.package}
//                     </div>
//                     <p className="text-gray-600 mb-6 leading-relaxed">{career.description}</p>
//                     <div className="mb-6">
//                       <div className="flex flex-wrap gap-2 justify-center">
//                         {career.skills.map((skill, idx) => (
//                           <span
//                             key={idx}
//                             className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
//                       <div className="text-sm font-semibold text-gray-700 mb-1">Career Growth</div>
//                       <div className="text-sm text-gray-600">{career.growth}</div>
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
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <h2 className="text-4xl font-bold mb-6">Ready to Become a Digital Marketing Expert?</h2>
//               <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//                 Join our comprehensive program and master the skills that top companies are looking for. Get industry
//                 certifications, hands-on experience, and guaranteed placement assistance.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//                   Apply for Digital Marketing Program
//                 </button>
//                 <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
//                   Download Curriculum
//                 </button>
//               </div>
//               <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
//                 <div className="text-center">
//                   <Award className="h-8 w-8 mx-auto mb-2 text-blue-400" />
//                   <div className="font-semibold">Industry Certifications</div>
//                   <div className="text-sm text-gray-400">Google, Meta, HubSpot & AI</div>
//                 </div>
//                 <div className="text-center">
//                   <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
//                   <div className="font-semibold">Live Projects</div>
//                   <div className="text-sm text-gray-400">Real campaigns & clients</div>
//                 </div>
//                 <div className="text-center">
//                   <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-400" />
//                   <div className="font-semibold">Career Growth</div>
//                   <div className="text-sm text-gray-400">100% placement assistance</div>
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
import { ArrowRight, CheckCircle, Megaphone } from "lucide-react"

export default function BCADigitalMarketingProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  const programHighlights = [
    "Google Ads & Analytics certification",
    "Social media marketing mastery",
    "SEO and content strategy training",
    "90% placement rate with 6 LPA average",
    "E-commerce and affiliate marketing",
    "Live campaign management experience",
    "Facebook and Instagram advertising",
    "Email marketing and automation tools",
  ]

  const careerOpportunities = [
    { role: "Digital Marketing Executive", package: "₹3-7 LPA", companies: ["Flipkart", "Amazon", "Myntra"] },
    { role: "SEO Specialist", package: "₹3.5-6 LPA", companies: ["Zomato", "Swiggy", "BookMyShow"] },
    { role: "Social Media Manager", package: "₹4-8 LPA", companies: ["Byju's", "Unacademy", "Vedantu"] },
    { role: "Content Marketing Manager", package: "₹4.5-9 LPA", companies: ["HubSpot", "Mailchimp", "Buffer"] },
    { role: "PPC Specialist", package: "₹3.5-7 LPA", companies: ["Google", "Facebook", "LinkedIn"] },
    { role: "E-commerce Manager", package: "₹5-10 LPA", companies: ["Nykaa", "BigBasket", "Grofers"] },
  ]

  const feeStructure = {
    admissionFee: "₹25,000",
    firstYear: "₹1,40,000",
    secondYear: "₹85,000",
    thirdYear: "₹85,000",
    fourthYear: "100% Scholarship",
    totalFee: "₹3,10,000",
  }

  const placementStats = {
    placementRate: "90%",
    averagePackage: "₹6 LPA",
    highestPackage: "₹10 LPA",
    minimumPackage: "₹3 LPA",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-teal-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
                <Megaphone className="h-5 w-5 text-green-400" />
                Most In-Demand
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                BCA + Digital Marketing
                <span className="block text-3xl lg:text-4xl text-green-300 font-normal mt-2">+ PGCCA</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Master digital marketing strategies, SEO, social media, and online advertising. Build campaigns that
                drive results and grow businesses in the digital age.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
                  <div className="text-green-200 text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{placementStats.averagePackage}</div>
                  <div className="text-green-200 text-sm">Average Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{placementStats.highestPackage}</div>
                  <div className="text-green-200 text-sm">Highest Package</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">4 Years</div>
                  <div className="text-green-200 text-sm">Duration</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admission"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                alt="Digital Marketing"
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
                { id: "certifications", name: "Certifications" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
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
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
                <p className="text-green-100 text-lg">Transparent fee structure with flexible payment options</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
                  <div className="text-green-100">Total Program Fee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
                  <div className="text-green-100">4th Year Scholarship</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
                  <div className="text-3xl font-bold">0%</div>
                  <div className="text-green-100">Interest EMI</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
                    <div className="text-green-100 text-sm">Admission Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.firstYear}</div>
                    <div className="text-green-100 text-sm">First Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.secondYear}</div>
                    <div className="text-green-100 text-sm">Second Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
                    <div className="text-green-100 text-sm">Third Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-300">{feeStructure.fourthYear}</div>
                    <div className="text-green-100 text-sm">Fourth Year</div>
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
                        <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
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
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Master Digital Marketing?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join our comprehensive digital marketing program and launch your career in the most in-demand field with
              guaranteed placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admission"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
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
